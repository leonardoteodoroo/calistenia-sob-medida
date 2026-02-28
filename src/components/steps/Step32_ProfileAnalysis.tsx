import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step32_ProfileAnalysis({ onNext, answers }: StepProps) {

  // Resgata os inputs do slider 29 e 30. Fallbacks caso pulem os passos em debug.
  const atual = answers?.peso_atual || "70 kg"
  const ideal = answers?.peso_ideal || "60 kg"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto py-6"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Análise do seu perfil
        </h2>
      </header>

      {/* Visual Comparison: Antes e Depois */}
      <div className="flex gap-4 w-full">
        {/* Antes */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-default relative shadow-sm border border-border-default">
            <img
              src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=400"
              alt="Status Atual"
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="bg-surface-elevated/90 px-3 py-1 text-xs font-bold uppercase rounded-full shadow-sm">Atual</span>
            </div>
          </div>
          <div className="text-center p-3 bg-surface-subtle rounded-lg border border-border-subtle">
            <span className="block text-xs uppercase text-text-secondary tracking-wider font-semibold">Seu peso atual:</span>
            <span className="block text-lg font-bold text-text-primary">{atual}</span>
          </div>
        </div>

        {/* Depois */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-default relative shadow-md border-2 border-primary/20">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400"
              alt="Status Objetivo"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="bg-primary px-3 py-1 text-xs font-bold uppercase text-white rounded-full shadow-md">Objetivo</span>
            </div>
          </div>
          <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
            <span className="block text-xs uppercase text-primary tracking-wider font-semibold">Seu objetivo:</span>
            <span className="block text-lg font-bold text-primary">{ideal}</span>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="bg-surface-elevated rounded-xl p-5 shadow-sm border border-border-default space-y-4">
        {[
          "Taxa de qualidade de vida",
          "Satisfação com o corpo",
          "Autoestima"
        ].map((indicador, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <span className="font-semibold text-text-primary text-sm">{indicador}</span>
              <span className="text-xs font-bold text-primary">+85%</span>
            </div>
            {/* Barrinha preenchida simulando projeçao */}
            <div className="h-1.5 w-full bg-surface-subtle rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "20%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="strong"
        size="lg"
        fullWidth
        onClick={() => onNext()}
        className="mt-2 uppercase font-bold tracking-wide"
      >
        Continuar
      </Button>
    </motion.div>
  )
}
