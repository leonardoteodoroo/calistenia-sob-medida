import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import {
  captureTrackingParams,
  getVisitorId,
  sendQuizEntry,
  sendQuizComplete,
} from "./lib/tracking";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { WorkoutPlanPDF } from "./components/WorkoutPlanPDF";

import { Step01_Gender } from "./components/steps/Step01_Gender";
import { Step02_Age } from "./components/steps/Step02_Age";
import { Step03_SocialProof } from "./components/steps/Step03_SocialProof";
import { Step04_Experience } from "./components/steps/Step04_Experience";
import { Step05_Motivation } from "./components/steps/Step05_Motivation";
import { Step06_Objective } from "./components/steps/Step06_Objective";
import { Step07_SecondaryGoals } from "./components/steps/Step07_SecondaryGoals";
import { Step08_SocialProofCarousel } from "./components/steps/Step08_SocialProofCarousel";
import { Step09_BodyType } from "./components/steps/Step09_BodyType";
import { Step10_DreamBody } from "./components/steps/Step10_DreamBody";
import { Step11_FocusAreas } from "./components/steps/Step11_FocusAreas";
import { Step12_ActivityLevel } from "./components/steps/Step12_ActivityLevel";
import { Step13_EnergyLevels } from "./components/steps/Step13_EnergyLevels";
import { Step14_WallOfLove } from "./components/steps/Step14_WallOfLove";
import { Step15_SleepAndDiet } from "./components/steps/Step15_SleepAndDiet";
import { Step16_Obstacles } from "./components/steps/Step16_Obstacles";
import { Step17_Cravings } from "./components/steps/Step17_Cravings";
import { Step18_MainReason } from "./components/steps/Step18_MainReason";
import { Step19_EnergyBenefit } from "./components/steps/Step19_EnergyBenefit";
import { Step20_Measurements } from "./components/steps/Step20_Measurements";
import { Step21_Processing } from "./components/steps/Step21_Processing";
import { Step22_SalesPage } from "./components/steps/Step22_SalesPage";
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
    // window.fbq("trackCustom", "QuizStep", { step }, { eventID: eventId }); // Removido para otimizar a inteligência do Pixel
    if (step === 1)
      window.fbq("trackCustom", "QuizStarted", {}, { eventID: eventId });
    if (step === 10)
      window.fbq("trackCustom", "QuizHalfway", {}, { eventID: eventId });
    if (step === 22)
      window.fbq("trackCustom", "QuizSalesPage", {}, { eventID: eventId });
  }, [step]);

  // Google Sheets — log nos marcos (step 3 = entrada, step 21 = conclusão)
  useEffect(() => {
    if (step === 3) sendQuizEntry(quizData);
    if (step === 22) sendQuizComplete(quizData);
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  // Avança para o próximo step, salvando a resposta se houver
  const handleNext = (key?: string, value?: string) => {
    if (key && value) {
      setQuizData((prev) => ({ ...prev, [key]: value }));
    }
    setStep((prev) => prev + 1);
  };

  // Retrocede um step
  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Barra de progresso baseada em 22 passos
  const getProgress = (currentStep: number) => {
    return Math.min(Math.round((currentStep / 22) * 100), 100);
  };

  return (
    <div className="min-h-screen bg-background text-text-primary px-4 pt-2 pb-8 md:pb-12 overflow-x-hidden flex flex-col items-center">
      {step <= 21 && (
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
          {step === 1 && (
            <Step01_Gender
              key="step1"
              onNext={(val) => handleNext("genero", val)}
            />
          )}
          {step === 2 && (
            <Step02_Age
              key="step2"
              onNext={(val) => handleNext("idade", val)}
            />
          )}
          {step === 3 && (
            <Step03_SocialProof key="step3" onNext={() => handleNext()} />
          )}
          {step === 4 && (
            <Step04_Experience
              key="step4"
              onNext={(val) => handleNext("experiencia", val)}
            />
          )}
          {step === 5 && (
            <Step05_Motivation key="step5" onNext={() => handleNext()} />
          )}
          {step === 6 && (
            <Step06_Objective
              key="step6"
              onNext={(val) => handleNext("objetivo_principal", val)}
            />
          )}
          {step === 7 && (
            <Step07_SecondaryGoals
              key="step7"
              onNext={(val) => handleNext("objetivos_secundarios", val)}
            />
          )}
          {step === 8 && (
            <Step08_SocialProofCarousel
              key="step8"
              onContinue={() => handleNext()}
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
            <Step11_FocusAreas
              key="step11"
              onNext={(val: string) => handleNext("regioes_foco", val)}
            />
          )}
          {step === 12 && (
            <Step12_ActivityLevel
              key="step12"
              onNext={(val) => handleNext("nível_atividade", val)}
            />
          )}
          {step === 13 && (
            <Step13_EnergyLevels
              key="step13"
              onNext={(val: string) => handleNext("nivel_energia", val)}
            />
          )}
          {step === 14 && (
            <Step14_WallOfLove key="step14" onContinue={() => handleNext()} />
          )}
          {step === 15 && (
            <Step15_SleepAndDiet
              key="step15"
              onNext={(val: string) => handleNext("sono_e_dieta", val)}
            />
          )}
          {step === 16 && (
            <Step16_Obstacles
              key="step16"
              onNext={(val: string) => handleNext("obstaculos", val)}
            />
          )}
          {step === 17 && (
            <Step17_Cravings
              key="step17"
              onNext={(val: string) => handleNext("vontade_comer", val)}
            />
          )}
          {step === 18 && (
            <Step18_MainReason
              key="step18"
              onNext={(val: string) => handleNext("motivo_entrar_forma", val)}
            />
          )}
          {step === 19 && (
            <Step19_EnergyBenefit key="step19" onNext={() => handleNext()} />
          )}
          {step === 20 && (
            <Step20_Measurements
              key="step20"
              onNext={(val) => handleNext("medidas", val)}
            />
          )}
          {step === 21 && (
            <Step21_Processing key="step21" onNext={() => handleNext()} />
          )}
          {step === 22 && (
            <Step22_SalesPage
              key="step22"
              onNext={() => {}}
              answers={quizData}
            />
          )}

          {step > 22 && (
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
