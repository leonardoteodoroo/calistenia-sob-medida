import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
import { Step24_BadHabits } from './components/steps/Step24_BadHabits'
import { Step25_FoodCravings } from './components/steps/Step25_FoodCravings'
import { Step26_WeightGainEvents } from './components/steps/Step26_WeightGainEvents'
import { Step27_MainReason } from './components/steps/Step27_MainReason'
import { Step28_Height } from './components/steps/Step28_Height'
import { Step29_Weight } from './components/steps/Step29_Weight'
import { Step30_IdealWeight } from './components/steps/Step30_IdealWeight'
import { Step31_Processing } from './components/steps/Step31_Processing'
import { Step32_ProfileAnalysis } from './components/steps/Step32_ProfileAnalysis'
import { Step33_SalesPage } from './components/steps/Step33_SalesPage'
import { ProgressBar } from './components/ui/ProgressBar'

function App() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<Record<string, string>>({})

  // Avança guardando a informação se mockado no componente
  const handleNext = (key?: string, value?: string) => {
    if (key && value) {
      setQuizData(prev => ({ ...prev, [key]: value }))
    }
    setStep(prev => prev + 1)
  }

  // Progresso baseado no Roadmap de funis de e-commerce e quiz enviado no ticket do usuário
  const getProgress = (currentStep: number) => {
    if (currentStep <= 5) return currentStep * 3
    if (currentStep === 6) return 20;
    if (currentStep === 7) return 25;
    if (currentStep === 8) return 28; // User duplicated step 7/8 content
    if (currentStep === 9) return 30;
    if (currentStep === 10) return 35;
    if (currentStep === 11) return 40;
    if (currentStep === 12) return 45;
    if (currentStep === 13) return 50;
    if (currentStep === 14) return 55;
    if (currentStep === 15) return 60;
    if (currentStep === 16) return 63;
    if (currentStep === 17) return 66;
    if (currentStep === 18) return 69;
    if (currentStep === 19) return 72;
    if (currentStep === 20) return 75;
    if (currentStep === 21) return 78;
    if (currentStep === 22) return 81;
    if (currentStep === 23) return 84;
    if (currentStep === 24) return 87;
    if (currentStep === 25) return 90;
    if (currentStep === 26) return 92;
    if (currentStep === 27) return 94;
    if (currentStep === 28) return 96;
    if (currentStep === 29) return 98;
    if (currentStep === 30) return 99;
    return Math.min(99 + (currentStep - 30), 100);
  }

  // A progress bar atinge 100% no step 30 e some no 31.
  return (
    <div className="min-h-screen bg-background text-text-primary px-4 py-8 md:py-12 overflow-x-hidden flex flex-col items-center">
      {step <= 30 && <ProgressBar progress={getProgress(step)} />}
      <main className="w-full max-w-3xl mx-auto min-h-[500px] flex items-center justify-center relative mt-10">
        <AnimatePresence mode="wait">
          {step === 1 && <Step01_Gender key="step1" onNext={(val) => handleNext("genero", val)} />}
          {step === 2 && <Step02_Age key="step2" onNext={(val) => handleNext("idade", val)} />}
          {step === 3 && <Step03_SocialProof key="step3" onNext={() => handleNext()} />}
          {step === 4 && <Step04_Experience key="step4" onNext={(val) => handleNext("experiencia", val)} />}
          {step === 5 && <Step05_Motivation key="step5" onNext={() => handleNext()} />}
          {step === 6 && <Step06_Objective key="step6" onNext={(val) => handleNext("objetivo_principal", val)} />}
          {step === 7 && <Step07_SecondaryGoals key="step7" onNext={(val) => handleNext("objetivos_secundarios", val)} />}
          {step === 8 && <Step07_SecondaryGoals key="step8" onNext={(val) => handleNext("objetivos_secundarios_2", val)} />}
          {step === 9 && <Step09_BodyType key="step9" onNext={(val) => handleNext("tipo_fisico_atual", val)} />}
          {step === 10 && <Step10_DreamBody key="step10" onNext={(val) => handleNext("corpo_dos_sonhos", val)} />}
          {step === 11 && <Step11_WeightChange key="step11" onNext={(val) => handleNext("mudanca_de_peso", val)} />}
          {step === 12 && <Step12_BestPhysique key="step12" onNext={(val) => handleNext("auge_fisico", val)} />}
          {step === 13 && <Step13_Flexibility key="step13" onNext={(val) => handleNext("flexibilidade", val)} />}
          {step === 14 && <Step14_FocusAreas key="step14" onNext={(val) => handleNext("regioes_foco", val)} />}
          {step === 15 && <Step15_ExerciseFrequency key="step15" onNext={(val) => handleNext("frequencia_exercicios", val)} />}
          {step === 16 && <Step16_WalkingFrequency key="step16" onNext={(val) => handleNext("frequencia_caminhadas", val)} />}
          {step === 17 && <Step17_TypicalDay key="step17" onNext={(val) => handleNext("dia_tipico", val)} />}
          {step === 18 && <Step18_EnergyLevels key="step18" onNext={(val) => handleNext("nivel_energia", val)} />}
          {step === 19 && <Step19_EnergyBenefit key="step19" onNext={() => handleNext()} />}
          {step === 20 && <Step20_SleepFrequency key="step20" onNext={(val) => handleNext("frequencia_sono", val)} />}
          {step === 21 && <Step21_Breakfast key="step21" onNext={(val) => handleNext("horario_cafe", val)} />}
          {step === 22 && <Step22_Lunch key="step22" onNext={(val) => handleNext("horario_almoco", val)} />}
          {step === 23 && <Step23_Dinner key="step23" onNext={(val) => handleNext("horario_jantar", val)} />}
          {step === 24 && <Step24_BadHabits key="step24" onNext={(val) => handleNext("maus_habitos", val)} />}
          {step === 25 && <Step25_FoodCravings key="step25" onNext={(val) => handleNext("vontade_comer", val)} />}
          {step === 26 && <Step26_WeightGainEvents key="step26" onNext={(val) => handleNext("motivos_ganho_peso", val)} />}
          {step === 27 && <Step27_MainReason key="step27" onNext={(val) => handleNext("motivo_entrar_forma", val)} />}
          {step === 28 && <Step28_Height key="step28" onNext={(val) => handleNext("altura", val)} />}
          {step === 29 && <Step29_Weight key="step29" onNext={(val) => handleNext("peso_atual", val)} />}
          {step === 30 && <Step30_IdealWeight key="step30" onNext={(val) => handleNext("peso_ideal", val)} />}
          {step === 31 && <Step31_Processing key="step31" onNext={() => handleNext()} />}
          {step === 32 && <Step32_ProfileAnalysis key="step32" onNext={() => handleNext()} answers={quizData} />}
          {step === 33 && <Step33_SalesPage key="step33" onNext={() => { }} answers={quizData} />}

          {step > 33 && (
            <motion.div
              key="finish"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <h2 className="text-3xl font-heading font-bold text-primary">Plano Otimizado!</h2>
              <p className="text-text-secondary">O seu quiz foi coletado com sucesso.</p>
              <pre className="text-left bg-surface-section p-4 rounded-lg text-sm mt-6 overflow-auto">
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
