import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { StepProps } from "../../types";
import { ProcessingTestimonials3D } from "../ui/ProcessingTestimonials3D";
import {
  COMPLETE_DELAY_MS,
  PROCESSING_AUTO_ADVANCE_ENABLED,
  PROCESSING_STEPS,
  STEP_DURATION_MS,
} from "./step21ProcessingContent";

export const Step21_Processing: React.FC<StepProps> = ({ onNext }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const hasTriggeredNextRef = useRef(false);

  useEffect(() => {
    if (currentStep >= PROCESSING_STEPS.length - 1) {
      if (!PROCESSING_AUTO_ADVANCE_ENABLED) {
        // Para religar depois:
        // const completionTimer = window.setTimeout(() => onNext?.(), 1200);
        return;
      }

      if (hasTriggeredNextRef.current) return;

      hasTriggeredNextRef.current = true;
      const completionTimer = window.setTimeout(
        () => onNext?.(),
        COMPLETE_DELAY_MS,
      );
      return () => window.clearTimeout(completionTimer);
    }

    const stepTimer = window.setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, PROCESSING_STEPS.length - 1));
    }, STEP_DURATION_MS);

    return () => window.clearTimeout(stepTimer);
  }, [currentStep, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-xl flex-col gap-5 py-4"
    >
      <section className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-surface-card px-6 py-8 shadow-[0_28px_90px_rgba(44,122,123,0.12)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,122,123,0.14),transparent_48%)]" />

        <motion.div
          initial={{ scale: 0.86, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center text-center"
        >
          <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-primary/15 border-t-primary"
            />
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>

          <h2 className="text-3xl font-heading font-bold text-text-primary">
            Montando seu plano...
          </h2>

          <div className="mt-8 w-full max-w-xs space-y-4 text-left">
            {PROCESSING_STEPS.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;
              const isPending = index > currentStep;

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isPending ? 0.35 : 1, y: 0 }}
                  className="flex items-center gap-3"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : isActive ? (
                    <div className="h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-border" />
                  )}

                  <span
                    className={`text-sm leading-relaxed ${
                      isActive
                        ? "font-semibold text-text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    {step}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <ProcessingTestimonials3D />
    </motion.div>
  );
};
