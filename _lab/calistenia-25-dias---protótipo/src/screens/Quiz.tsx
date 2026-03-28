import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

const QUESTIONS = [
  {
    id: "goal",
    title: "Qual é o seu objetivo principal?",
    options: [
      {
        id: "weight_loss",
        label: "Emagrecer e definir",
        desc: "Perder gordura e tonificar músculos",
      },
      {
        id: "muscle_gain",
        label: "Ganhar massa magra",
        desc: "Construir músculos com peso corporal",
      },
      {
        id: "health",
        label: "Saúde e disposição",
        desc: "Melhorar condicionamento e energia",
      },
    ],
  },
  {
    id: "experience",
    title: "Qual seu nível de experiência com treinos?",
    options: [
      {
        id: "beginner",
        label: "Iniciante absoluto",
        desc: "Nunca treinei ou estou parado há muito tempo",
      },
      {
        id: "intermediate",
        label: "Já treinei antes",
        desc: "Faço atividades esporádicas",
      },
      { id: "advanced", label: "Avançado", desc: "Treino regularmente" },
    ],
  },
  {
    id: "time",
    title: "Quanto tempo você tem disponível por dia?",
    options: [
      { id: "15min", label: "15 minutos", desc: "Rotina super corrida" },
      { id: "30min", label: "30 minutos", desc: "Consigo encaixar na rotina" },
      { id: "60min", label: "1 hora ou mais", desc: "Tenho tempo livre" },
    ],
  },
  {
    id: "struggle",
    title: "Qual sua maior dificuldade hoje?",
    options: [
      {
        id: "time",
        label: "Falta de tempo",
        desc: "Não consigo ir à academia",
      },
      {
        id: "motivation",
        label: "Falta de motivação",
        desc: "Começo e logo desisto",
      },
      {
        id: "knowledge",
        label: "Não sei o que fazer",
        desc: "Fico perdido sem um guia",
      },
    ],
  },
  {
    id: "energy",
    title: "Como é sua energia ao longo do dia?",
    options: [
      { id: "high", label: "Alta o dia todo", desc: "Sempre disposto" },
      {
        id: "low_afternoon",
        label: "Baixa após o almoço",
        desc: "Bate aquele cansaço à tarde",
      },
      {
        id: "low_always",
        label: "Cansaço constante",
        desc: "Acordo já cansado",
      },
    ],
  },
];

export default function Quiz({
  onComplete,
}: {
  onComplete: (answers: Record<string, string>) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [QUESTIONS[currentStep].id]: optionId };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentStep < QUESTIONS.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  return (
    <div className="flex-1 flex flex-col bg-[#111111] p-6">
      {/* Header / Progress */}
      <div className="flex items-center gap-4 mb-8 pt-4">
        <button
          onClick={() => currentStep > 0 && setCurrentStep((prev) => prev - 1)}
          className={`p-2 rounded-full bg-white/5 border border-white/10 text-white ${currentStep === 0 ? "opacity-0 pointer-events-none" : ""}`}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-xs font-medium text-gray-400">
          {currentStep + 1}/{QUESTIONS.length}
        </span>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-white mb-8 leading-tight">
              {currentQuestion.title}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = answers[currentQuestion.id] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3
                          className={`font-semibold text-lg mb-1 ${isSelected ? "text-cyan-400" : "text-white"}`}
                        >
                          {option.label}
                        </h3>
                        <p className="text-sm text-gray-400">{option.desc}</p>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-cyan-400" : "border-gray-600"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
