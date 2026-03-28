import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Loader2, CheckCircle2 } from "lucide-react";

const STEPS = [
  "Analisando seu perfil...",
  "Calculando grade de adaptação...",
  "Ajustando treinos para 15 minutos...",
  "Personalizando trilha de 25 dias...",
];

export default function Processing({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < STEPS.length - 1) return prev + 1;
        clearInterval(interval);
        setTimeout(onComplete, 1000);
        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#111111] p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full"></div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-white/10 border-t-cyan-400"
          />
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">
          Montando seu plano...
        </h2>

        <div className="space-y-4 w-full max-w-xs">
          {STEPS.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isPending ? 0.3 : 1, y: 0 }}
                className="flex items-center gap-3"
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                ) : isActive ? (
                  <div className="w-5 h-5 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-white/20" />
                )}
                <span
                  className={`text-sm ${isActive ? "text-white font-medium" : "text-gray-400"}`}
                >
                  {step}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
