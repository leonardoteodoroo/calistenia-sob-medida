import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import imgMulher from "../../assets/images/Mulher adulta em casa, com roupa de treino discreta, sorrindo com confiança em uma sala iluminada por luz natural- step01.webp";

interface StepHeroProps {
  onNext: () => void;
}

export function StepHero({ onNext }: StepHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8"
    >
      <div className="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-[0_24px_80px_rgba(44,122,123,0.12)]">
        <img
          src={imgMulher}
          alt="Mulher adulta em casa com roupa de treino, sorrindo com confiança"
          width={720}
          height={420}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-72 w-full object-cover object-center"
        />
      </div>

      <header className="space-y-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          Análise Calistenia Sob Medida
        </p>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary leading-tight">
          Descubra em 2 minutos qual perfil de treino vai destravar seu corpo em
          casa
        </h1>
        <div className="space-y-2">
          <p className="text-text-secondary text-base leading-relaxed">
            Uma análise pensada para mulheres que querem emagrecer, definir e
            voltar a gostar do que veem no espelho sem depender de academia.
          </p>
          <p className="text-text-secondary font-semibold text-lg">
            Responda rápido e veja a sua leitura personalizada no final.
          </p>
        </div>
      </header>

      <div className="rounded-[28px] border border-border bg-surface-card p-5 shadow-sm">
        <div className="space-y-3">
          {[
            "Diagnóstico com foco em emagrecimento e firmeza",
            "Treinos curtos para rotina corrida e sem equipamento",
            "Resultado final com plano inicial mais indicado para o seu momento",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-text-secondary">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        variant="strong"
        onClick={onNext}
        className="gap-2 uppercase tracking-[0.12em]"
      >
        Começar análise
        <ArrowRight className="h-5 w-5" />
      </Button>
    </motion.div>
  );
}
