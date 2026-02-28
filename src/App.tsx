import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { Step01_Gender } from './components/steps/Step01_Gender'
import { Step02_Age } from './components/steps/Step02_Age'
import { Step03_SocialProof } from './components/steps/Step03_SocialProof'
import { Step04_Experience } from './components/steps/Step04_Experience'
import { Step05_Motivation } from './components/steps/Step05_Motivation'
import { Step06_Objective } from './components/steps/Step06_Objective'
import { Step07_SecondaryGoals } from './components/steps/Step07_SecondaryGoals'
import { Step09_BodyType } from './components/steps/Step09_BodyType'
import { Step10_DreamBody } from './components/steps/Step10_DreamBody'
import { Step11_WeightChange } from './components/steps/Step11_WeightChange'
import { Step12_BestPhysique } from './components/steps/Step12_BestPhysique'
import { Step13_Flexibility } from './components/steps/Step13_Flexibility'
import { Step14_FocusAreas } from './components/steps/Step14_FocusAreas'
import { Step15_ExerciseFrequency } from './components/steps/Step15_ExerciseFrequency'
import { Step16_WalkingFrequency } from './components/steps/Step16_WalkingFrequency'
import { Step17_TypicalDay } from './components/steps/Step17_TypicalDay'
import { Step18_EnergyLevels } from './components/steps/Step18_EnergyLevels'
import { Step19_EnergyBenefit } from './components/steps/Step19_EnergyBenefit'
import { Step20_SleepFrequency } from './components/steps/Step20_SleepFrequency'
import { Step21_Breakfast } from './components/steps/Step21_Breakfast'
import { Step22_Lunch } from './components/steps/Step22_Lunch'
import { Step23_Dinner } from './components/steps/Step23_Dinner'
import { Step08_BadHabits } from './components/steps/Step08_BadHabits'
import { Step24_FoodCravings } from './components/steps/Step24_FoodCravings'
import { Step25_Height } from './components/steps/Step25_Height'
import { Step26_WeightGainEvents } from './components/steps/Step26_WeightGainEvents'
import { Step27_MainReason } from './components/steps/Step27_MainReason'
import { Step28_IdealWeight } from './components/steps/Step28_IdealWeight'
import { Step29_Weight } from './components/steps/Step29_Weight'
import { Step30_Processing } from './components/steps/Step30_Processing'
import { Step31_ProfileAnalysis } from './components/steps/Step31_ProfileAnalysis'
import { Step32_SalesPage } from './components/steps/Step32_SalesPage'
import { ProgressBar } from './components/ui/ProgressBar'

function App() {
  const getInitialStep = () => {
    const hash = window.location.hash.replace('#', '')
    const parsed = parseInt(hash, 10)
    return !isNaN(parsed) && parsed >= 1 ? parsed : 1
  }

  const [step, setStep] = useState(getInitialStep)
  const [quizData, setQuizData] = useState<Record<string, string>>({})

  // Sincronizar aba/URL quando o step alterar via botões
  useEffect(() => {
    const currentHash = window.location.hash.replace('#', '')
    if (currentHash !== String(step)) {
      window.location.hash = `#${step}`
      window.scrollTo(0, 0)
    }
  }, [step])

  // Escutar eventos de navegação nativa do navegador (ex: "Voltar" do celular)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      const parsed = parseInt(hash, 10)
      if (!isNaN(parsed) && parsed >= 1 && parsed !== step) {
        setStep(parsed)
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [step])

  // Avança guardando a informação se mockado no componente
  const handleNext = (key?: string, value?: string) => {
    if (key && value) {
      setQuizData(prev => ({ ...prev, [key]: value }))
    }
    setStep(prev => prev + 1)
  }

  // Retrocede na etapa
  const handleBack = () => {
    setStep(prev => Math.max(1, prev - 1))
  }

  // Progresso — 31 steps de conteúdo (1-31), SalesPage no 31
  const getProgress = (currentStep: number) => {
    if (currentStep <= 5) return currentStep * 3
    if (currentStep === 6) return 20;
    if (currentStep === 7) return 25;
    // step 8+ = corpo (antes eram 9+)
    if (currentStep === 8) return 30;
    if (currentStep === 9) return 35;
    if (currentStep === 10) return 40;
    if (currentStep === 11) return 45;
    if (currentStep === 12) return 50;
    if (currentStep === 13) return 55;
    if (currentStep === 14) return 60;
    if (currentStep === 15) return 63;
    if (currentStep === 16) return 66;
    if (currentStep === 17) return 69;
    if (currentStep === 18) return 72;
    if (currentStep === 19) return 75;
    if (currentStep === 20) return 78;
    if (currentStep === 21) return 81;
    if (currentStep === 22) return 84;
    if (currentStep === 23) return 86;
    if (currentStep === 24) return 88;
    if (currentStep === 25) return 90;
    if (currentStep === 26) return 92;
    if (currentStep === 27) return 94;
    if (currentStep === 28) return 96;
    if (currentStep === 29) return 98;
    if (currentStep === 30) return 99;
    return Math.min(99 + (currentStep - 30), 100);
  }

  // Barra de progresso visível até o step 29 (Processing)
  return (
    <div className="min-h-screen bg-background text-text-primary px-4 py-8 md:py-12 overflow-x-hidden flex flex-col items-center">
      {step <= 29 && (
        <div className="w-full max-w-3xl flex items-center justify-between gap-2 sm:gap-4 mb-2 md:mb-6 px-4 z-20 sticky top-0 bg-background/90 backdrop-blur-sm py-4">
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

      {/* Main container with overflow hidden to trap exiting framer-motion animations from causing scrollbar jumps */}
      <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col items-center justify-start relative mt-4 overflow-x-hidden min-h-[60vh]">
        <div className="fixed bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono z-50 pointer-events-none">
          dev_{String(step).padStart(2, '0')}
        </div>
        <AnimatePresence mode="wait">
          {step === 1 && <Step01_Gender key="step1" onNext={(val) => handleNext("genero", val)} />}
          {step === 2 && <Step02_Age key="step2" onNext={(val) => handleNext("idade", val)} />}
          {step === 3 && <Step03_SocialProof key="step3" onNext={() => handleNext()} />}
          {step === 4 && <Step04_Experience key="step4" onNext={(val) => handleNext("experiencia", val)} />}
          {step === 5 && <Step05_Motivation key="step5" onNext={() => handleNext()} />}
          {step === 6 && <Step06_Objective key="step6" onNext={(val) => handleNext("objetivo_principal", val)} />}
          {step === 7 && <Step07_SecondaryGoals key="step7" onNext={(val) => handleNext("objetivos_secundarios", val)} />}
          {step === 8 && <Step09_BodyType key="step8" onNext={(val) => handleNext("tipo_fisico_atual", val)} />}
          {step === 9 && <Step10_DreamBody key="step9" onNext={(val) => handleNext("corpo_dos_sonhos", val)} />}
          {step === 10 && <Step11_WeightChange key="step10" onNext={(val) => handleNext("mudanca_de_peso", val)} />}
          {step === 11 && <Step12_BestPhysique key="step11" onNext={(val) => handleNext("auge_fisico", val)} />}
          {step === 12 && <Step13_Flexibility key="step12" onNext={(val) => handleNext("flexibilidade", val)} />}
          {step === 13 && <Step14_FocusAreas key="step13" onNext={(val) => handleNext("regioes_foco", val)} />}
          {step === 14 && <Step15_ExerciseFrequency key="step14" onNext={(val) => handleNext("frequencia_exercicios", val)} />}
          {step === 15 && <Step16_WalkingFrequency key="step15" onNext={(val) => handleNext("frequencia_caminhadas", val)} />}
          {step === 16 && <Step17_TypicalDay key="step16" onNext={(val) => handleNext("dia_tipico", val)} />}
          {step === 17 && <Step18_EnergyLevels key="step17" onNext={(val) => handleNext("nivel_energia", val)} />}
          {step === 18 && <Step19_EnergyBenefit key="step18" onNext={() => handleNext()} />}
          {step === 19 && <Step20_SleepFrequency key="step19" onNext={(val) => handleNext("frequencia_sono", val)} />}
          {step === 20 && <Step21_Breakfast key="step20" onNext={(val) => handleNext("horario_cafe", val)} />}
          {step === 21 && <Step22_Lunch key="step21" onNext={(val) => handleNext("horario_almoco", val)} />}
          {step === 22 && <Step23_Dinner key="step22" onNext={(val) => handleNext("horario_jantar", val)} />}
          {step === 23 && <Step08_BadHabits key="step23" onNext={(val) => handleNext("maus_habitos", val)} />}
          {step === 24 && <Step24_FoodCravings key="step24" onNext={(val) => handleNext("vontade_comer", val)} />}
          {step === 25 && <Step26_WeightGainEvents key="step25" onNext={(val) => handleNext("motivos_ganho_peso", val)} />}
          {step === 26 && <Step27_MainReason key="step26" onNext={(val) => handleNext("motivo_entrar_forma", val)} />}
          {step === 27 && <Step25_Height key="step27" onNext={(val) => handleNext("altura", val)} />}
          {step === 28 && <Step29_Weight key="step28" onNext={(val) => handleNext("peso_atual", val)} />}
          {step === 29 && <Step28_IdealWeight key="step29" onNext={(val) => handleNext("peso_ideal", val)} />}
          {step === 30 && <Step30_Processing key="step30" onNext={() => handleNext()} />}
          {step === 31 && <Step31_ProfileAnalysis key="step31" onNext={() => handleNext()} answers={quizData} />}
          {step === 32 && <Step32_SalesPage key="step32" onNext={() => { }} answers={quizData} />}

          {step > 32 && (
            <motion.div
              key="finish"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4 w-full"
            >
              <h2 className="text-3xl font-heading font-bold text-primary">Plano Otimizado!</h2>
              <p className="text-text-secondary">O seu quiz foi coletado com sucesso.</p>
              <pre className="text-left bg-surface-section p-4 rounded-lg text-sm mt-6 overflow-auto w-full">
                {JSON.stringify(quizData, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
