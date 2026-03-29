import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import {
  captureTrackingParams,
  getVisitorId,
  sendQuizEntry,
  sendQuizQuarter,
  sendQuizComplete,
  sendQuizResultView,
} from "./lib/tracking";
import {
  QUIZ_ENTRY_STEP,
  QUIZ_PROGRESS_STEPS,
  QUIZ_QUARTER_STEP,
  QUIZ_RESULT_STEP,
  QUIZ_SALES_STEP,
} from "./lib/quizFlow";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { WorkoutPlanPDF } from "./components/WorkoutPlanPDF";

import { StepHero } from "./components/steps/step_Hero";
import { Step01_Gender } from "./components/steps/Step01_Gender";
import { Step02_Age } from "./components/steps/Step02_Age";
import { Step03_SocialProof } from "./components/steps/Step03_SocialProof";
import { Step04_Experience } from "./components/steps/Step04_Experience";
import { Step05_Motivation } from "./components/steps/Step05_Motivation";
import { Step06_Objective } from "./components/steps/Step06_Objective";
import { Step07_SecondaryGoals } from "./components/steps/Step07_SecondaryGoals";
import { Step09_BodyType } from "./components/steps/Step09_BodyType";
import { Step10_DreamBody } from "./components/steps/Step10_DreamBody";
import { Step08_SocialProofCarousel } from "./components/steps/Step08_SocialProofCarousel";
import { Step14_WallOfLove } from "./components/steps/Step14_WallOfLove";
import { Step11_FocusAreas } from "./components/steps/Step11_FocusAreas";
import { Step12_ActivityLevel } from "./components/steps/Step12_ActivityLevel";
import { StepExerciseFrequency } from "./components/steps/StepExerciseFrequency";
import { Step13_EnergyLevels } from "./components/steps/Step13_EnergyLevels";
import { Step13_Impact } from "./components/steps/Step13_Impact";
import { StepHabitBlockers } from "./components/steps/StepHabitBlockers";
import { Step19_EnergyBenefit } from "./components/steps/Step19_EnergyBenefit";
import { Step15_SleepAndDiet } from "./components/steps/Step15_SleepAndDiet";
import { Step16_Obstacles } from "./components/steps/Step16_Obstacles";
import { Step17_Cravings } from "./components/steps/Step17_Cravings";
import { StepWeightGainTriggers } from "./components/steps/StepWeightGainTriggers";
import { Step18_MainReason } from "./components/steps/Step18_MainReason";
import { Step20_Measurements } from "./components/steps/Step20_Measurements";
import { Step21_Processing } from "./components/steps/Step21_Processing";
import { Step22_ProfileResult } from "./components/steps/Step22_ProfileResult";
import { Step23_SalesPage } from "./components/steps/Step23_SalesPage";
import { StepTestelab } from "./components/steps/StepTestelab";
import { StepTestelab2 } from "./components/steps/StepTestelab2";
import { ProgressBar } from "./components/ui/ProgressBar";

// Tipagem global do Meta Pixel
declare global {
  interface Window {
    fbq?: (
      type: string,
      event: string,
      params?: Record<string, unknown>,
      options?: Record<string, unknown>,
    ) => void;
  }
}

type QuizAnswers = Record<string, string>;

function parseSerializedRecord(value?: string): QuizAnswers | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return null;
    }

    return Object.fromEntries(
      Object.entries(parsed as Record<string, unknown>).map(([key, entry]) => [
        key,
        String(entry),
      ]),
    );
  } catch {
    return null;
  }
}

function parseSerializedList(value?: string): string[] {
  if (!value) return [];

  try {
    const parsed = JSON.parse(value) as unknown;
    if (Array.isArray(parsed)) return parsed.map((entry) => String(entry));
    if (typeof parsed === "string") return [parsed];
  } catch {
    /* ignore */
  }

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function normalizeAnswerUpdate(key: string, value: string): QuizAnswers {
  const nextAnswers: QuizAnswers = { [key]: value };

  if (key === "objetivo_principal") {
    nextAnswers.mudanca_de_peso = value;
  }

  if (key === "objetivos_secundarios") {
    const selections = new Set(parseSerializedList(value));
    nextAnswers.flexibilidade = selections.has("flexibilidade") ? "sim" : "nao";
  }

  if (key === "frequencia_exercicios") {
    nextAnswers.frequencia_caminhadas = value;
  }

  if (key === "nível_atividade") {
    const parsed = parseSerializedRecord(value);
    if (parsed?.rotina) {
      nextAnswers.dia_tipico = parsed.rotina;
    }
    if (parsed?.tempo) {
      nextAnswers.tempo_disponivel = parsed.tempo;
    }
  }

  if (key === "alimentacao") {
    const parsed = parseSerializedRecord(value);
    if (parsed?.vontade_comer) {
      nextAnswers.vontade_comer = parsed.vontade_comer;
    }
    if (parsed?.padrao_refeicoes) {
      nextAnswers.padrao_refeicoes = parsed.padrao_refeicoes;
    }
  }

  if (key === "medidas") {
    const parsed = parseSerializedRecord(value);
    if (parsed?.altura) {
      nextAnswers.altura = parsed.altura;
    }
    if (parsed?.peso_atual || parsed?.peso) {
      nextAnswers.peso_atual = parsed.peso_atual ?? parsed.peso;
    }
    if (parsed?.peso_ideal) {
      nextAnswers.peso_ideal = parsed.peso_ideal;
    }
    if (parsed?.nome) {
      nextAnswers.nome = parsed.nome;
    }
  }

  return nextAnswers;
}

function App() {
  const getInitialStep = () => {
    const hash = window.location.hash.replace("#", "");
    const parsed = parseInt(hash, 10);
    return !isNaN(parsed) && parsed >= 1 ? parsed : 1;
  };

  const [step, setStep] = useState(getInitialStep);
  const [quizData, setQuizData] = useState<Record<string, string>>({});

  // Captura parâmetros de rastreamento (fbclid, gclid etc.) no primeiro acesso
  useEffect(() => {
    captureTrackingParams();
  }, []);

  // Sincroniza hash da URL com o step atual
  useEffect(() => {
    const currentHash = window.location.hash.replace("#", "");
    if (currentHash !== String(step)) {
      window.location.hash = `#${step}`;
      window.scrollTo(0, 0);
    }
  }, [step]);

  // Escuta navegação nativa do browser (botão voltar do celular)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const parsed = parseInt(hash, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed !== step) {
        setStep(parsed);
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [step]);

  // Meta Pixel — dispara a cada mudança de step
  useEffect(() => {
    if (typeof window.fbq !== "function") return;
    const eventId = `${getVisitorId()}_${step}_${Date.now()}`;
    if (step === 1)
      window.fbq("trackCustom", "QuizStarted", {}, { eventID: eventId });
    if (step === QUIZ_QUARTER_STEP)
      window.fbq("trackCustom", "QuizQuarter", {}, { eventID: eventId });
    if (step === QUIZ_RESULT_STEP)
      window.fbq("trackCustom", "QuizResultViewed", {}, { eventID: eventId });
    if (step === QUIZ_SALES_STEP)
      window.fbq("trackCustom", "QuizSalesPage", {}, { eventID: eventId });
  }, [step]);

  useEffect(() => {
    if (step === QUIZ_ENTRY_STEP) sendQuizEntry(quizData);
    if (step === QUIZ_QUARTER_STEP) sendQuizQuarter(quizData);
    if (step === QUIZ_RESULT_STEP) sendQuizResultView(quizData);
    if (step === QUIZ_SALES_STEP) sendQuizComplete(quizData);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Avança para o próximo step, salvando a resposta se houver
  const handleNext = (key?: string, value?: string) => {
    if (key && value) {
      setQuizData((prev) => ({
        ...prev,
        ...normalizeAnswerUpdate(key, value),
      }));
    }
    setStep((prev) => prev + 1);
  };

  // Retrocede um step
  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const getProgress = (currentStep: number) => {
    return Math.min(Math.round((currentStep / QUIZ_PROGRESS_STEPS) * 100), 100);
  };

  return (
    <div className="min-h-screen bg-background text-text-primary px-4 pt-2 pb-8 md:pb-12 overflow-x-hidden flex flex-col items-center">
      {step <= QUIZ_RESULT_STEP && (
        <div className="w-full max-w-3xl flex items-center justify-between gap-2 sm:gap-4 mb-2 md:mb-4 px-4 z-20 sticky top-0 bg-background/90 backdrop-blur-sm py-2">
          <div className="w-8 sm:w-10 flex-shrink-0">
            {step > 1 && (
              <button
                onClick={handleBack}
                className="p-1 sm:p-2 -ml-2 text-text-secondary hover:text-primary transition-colors flex items-center justify-center"
                aria-label="Voltar"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}
          </div>

          <div className="w-full flex-grow mx-auto">
            <ProgressBar progress={getProgress(step)} />
          </div>

          <div className="w-8 sm:w-10 flex-shrink-0"></div>
        </div>
      )}

      <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col items-center justify-start relative overflow-x-hidden min-h-[60vh]">
        <AnimatePresence mode="wait">
          {step === 1 && <StepHero key="step1" onNext={() => handleNext()} />}
          {step === 2 && (
            <Step01_Gender
              key="step2"
              onNext={(val) => handleNext("genero", val)}
            />
          )}
          {step === 3 && (
            <Step02_Age
              key="step3"
              onNext={(val) => handleNext("idade", val)}
            />
          )}
          {step === 4 && (
            <Step03_SocialProof key="step4" onNext={() => handleNext()} />
          )}
          {step === 5 && (
            <Step04_Experience
              key="step5"
              onNext={(val) => handleNext("experiencia", val)}
            />
          )}
          {step === 6 && (
            <Step05_Motivation key="step6" onNext={() => handleNext()} />
          )}
          {step === 7 && (
            <Step06_Objective
              key="step7"
              onNext={(val) => handleNext("objetivo_principal", val)}
            />
          )}
          {step === 8 && (
            <Step07_SecondaryGoals
              key="step8"
              onNext={(val) => handleNext("objetivos_secundarios", val)}
            />
          )}
          {step === 9 && (
            <Step09_BodyType
              key="step9"
              onNext={(val) => handleNext("tipo_fisico_atual", val)}
            />
          )}
          {step === 10 && (
            <Step10_DreamBody
              key="step10"
              onNext={(val) => handleNext("corpo_dos_sonhos", val)}
            />
          )}
          {step === 11 && (
            <Step08_SocialProofCarousel
              key="step11"
              onContinue={() => handleNext()}
            />
          )}
          {step === 12 && (
            <Step16_Obstacles
              key="step12"
              onNext={(val: string) => handleNext("maior_trava", val)}
            />
          )}
          {step === 13 && (
            <Step11_FocusAreas
              key="step13"
              onNext={(val: string) => handleNext("regioes_foco", val)}
            />
          )}
          {step === 14 && (
            <Step12_ActivityLevel
              key="step14"
              onNext={(val) => handleNext("nível_atividade", val)}
            />
          )}
          {step === 15 && (
            <StepExerciseFrequency
              key="step15"
              onNext={(val) => handleNext("frequencia_exercicios", val)}
            />
          )}
          {step === 16 && (
            <Step13_EnergyLevels
              key="step16"
              onNext={(val) => handleNext("nivel_energia", val)}
            />
          )}
          {step === 17 && (
            <Step19_EnergyBenefit key="step17" onNext={() => handleNext()} />
          )}
          {step === 18 && (
            <Step15_SleepAndDiet
              key="step18"
              onNext={(val: string) => handleNext("frequencia_sono", val)}
            />
          )}
          {step === 19 && (
            <StepHabitBlockers
              key="step19"
              onNext={(val) => handleNext("maus_habitos", val)}
            />
          )}
          {step === 20 && (
            <Step17_Cravings
              key="step20"
              onNext={(val: string) => handleNext("alimentacao", val)}
            />
          )}
          {step === 21 && (
            <Step13_Impact
              key="step21"
              onNext={(val: string) => handleNext("impacto_principal", val)}
            />
          )}
          {step === 22 && (
            <StepWeightGainTriggers
              key="step22"
              onNext={(val) => handleNext("motivos_ganho_peso", val)}
            />
          )}
          {step === 23 && (
            <Step18_MainReason
              key="step23"
              onNext={(val: string) => handleNext("motivo_entrar_forma", val)}
            />
          )}
          {step === 24 && (
            <Step14_WallOfLove key="step24" onContinue={() => handleNext()} />
          )}
          {step === 25 && (
            <Step20_Measurements
              key="step25"
              onNext={(val) => handleNext("medidas", val)}
            />
          )}
          {step === 26 && (
            <Step21_Processing key="step26" onNext={() => handleNext()} />
          )}
          {step === 27 && (
            <Step22_ProfileResult
              key="step27-processing-complete"
              onNext={() => handleNext()}
              answers={quizData}
            />
          )}
          {step === 28 && (
            <Step23_SalesPage
              key="step28"
              onNext={() => {}}
              answers={quizData}
            />
          )}
          {step === 998 && (
            <StepTestelab2 key="step998" onNext={() => handleNext()} />
          )}
          {step === 999 && (
            <StepTestelab key="step999" onNext={() => handleNext()} />
          )}

          {step > QUIZ_SALES_STEP && (
            <motion.div
              key="finish"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4 w-full"
            >
              <h2 className="text-3xl font-heading font-bold text-primary">
                Seu Plano Está Pronto!
              </h2>
              <p className="text-text-secondary mb-8">
                Clique no botão abaixo para baixar seu Guia PDF Personalizado.
              </p>

              <div className="flex justify-center mt-8">
                <PDFDownloadLink
                  document={
                    <WorkoutPlanPDF
                      userName={quizData.nome || "Aluna V.I.P"}
                      targetWeight={
                        quizData.objetivo_principal || "o peso ideal"
                      }
                      focusAreas={
                        quizData.regioes_foco
                          ? [quizData.regioes_foco]
                          : ["Corpo Inteiro"]
                      }
                    />
                  }
                  fileName="Meu_Plano_Calistenia_Sob_Medida.pdf"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  {({ loading }) =>
                    loading
                      ? "Gerando seu PDF personalizado..."
                      : "Baixar Meu Plano"
                  }
                </PDFDownloadLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
