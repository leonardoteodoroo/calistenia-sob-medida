import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { StepProps } from "../../types";
import { ProcessingTestimonials3D } from "../ui/ProcessingTestimonials3D";
import {
  COMPLETE_DELAY_MS,
  PROCESSING_AUTO_ADVANCE_ENABLED,
  PROCESSING_STEPS,
  PROCESSING_TOTAL_DURATION_MS,
  STEP_DURATION_MS,
} from "./Step21_ProcessingContent";

export const Step21_Processing: React.FC<StepProps> = ({ onNext }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const hasTriggeredNextRef = React.useRef(false);

  React.useEffect(() => {
    let animationFrame = 0;
    const startTime = performance.now();

    const updateProgress = (now: number) => {
      const elapsed = now - startTime;
      const nextProgress = Math.min(
        (elapsed / PROCESSING_TOTAL_DURATION_MS) * 100,
        100,
      );

      setProgress(nextProgress);

      if (elapsed < PROCESSING_TOTAL_DURATION_MS) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  React.useEffect(() => {
    if (currentStep >= PROCESSING_STEPS.length - 1) {
      if (hasTriggeredNextRef.current) return;

      if (PROCESSING_AUTO_ADVANCE_ENABLED) {
        hasTriggeredNextRef.current = true;
        const completionTimer = window.setTimeout(
          () => onNext?.(),
          COMPLETE_DELAY_MS,
        );
        return () => window.clearTimeout(completionTimer);
      }

      return;
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
      className="flex w-full max-w-xl flex-col gap-8 py-6"
    >
      <section className="relative px-2 pt-2 text-center">
        <div className="absolute left-1/2 top-6 h-44 w-44 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <motion.div
          initial={{ scale: 0.86, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/80">
            Análise em andamento
          </p>

          <div className="relative mt-6 flex h-24 w-24 items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-primary/15 border-t-primary"
            />
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>

          <h2 className="mt-6 text-3xl font-heading font-bold text-text-primary">
            Montando seu plano...
          </h2>
          <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
            Cruzando seu objetivo, energia e ritmo atual para liberar a trilha
            inicial que faz sentido para o seu momento.
          </p>

          <div className="mt-8 w-full max-w-md rounded-[28px] border border-primary/10 bg-white/70 px-5 py-4 text-left shadow-[0_16px_40px_rgba(44,122,123,0.08)] backdrop-blur-sm">
            {PROCESSING_STEPS.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;
              const isPending = index > currentStep;

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isPending ? 0.35 : 1, y: 0 }}
                  className="grid grid-cols-[20px_1fr] items-start gap-4 border-b border-primary/10 py-3 last:border-b-0"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  ) : isActive ? (
                    <div className="mt-0.5 h-5 w-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  ) : (
                    <div className="mt-0.5 h-5 w-5 rounded-full border-2 border-border" />
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

      <section className="px-2">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/80">
          <span>Progresso do processamento</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div
          aria-label="Progresso do processamento"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={Math.round(progress)}
          className="mt-3 h-2.5 overflow-hidden rounded-full bg-primary/10"
          role="progressbar"
        >
          <motion.div
            animate={{ width: `${progress}%` }}
            className="h-full rounded-full bg-[linear-gradient(90deg,#2C7A7B_0%,#4FD1C5_55%,#B2F5EA_100%)] shadow-[0_0_18px_rgba(44,122,123,0.22)]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </section>

      <ProcessingTestimonials3D />
    </motion.div>
  );
};
