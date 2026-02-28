import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step31_ProfileAnalysis({ onNext, answers }: StepProps) {

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
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-card relative shadow-sm border border-border">
            <img
              src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=400"
              alt="Status Atual"
              className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <span className="bg-status-error px-3 py-1 text-xs font-bold uppercase rounded-full shadow-sm text-white">Atual</span>
            </div>
          </div>
          <div className="text-center p-3 bg-surface-subtle rounded-lg border border-border-subtle">
            <span className="block text-xs uppercase text-text-secondary tracking-wider font-semibold">Seu peso atual:</span>
            <span className="block text-lg font-bold text-text-primary">{atual}</span>
          </div>
        </div>

        {/* Depois */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-card relative shadow-md border-2 border-primary/20">
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
      <div className="bg-surface-elevated rounded-xl p-5 shadow-sm border border-border space-y-5">
        {[
          { label: "Taxa de qualidade de vida", before: "Média", beforeSegs: 2, after: "Alta", afterSegs: 4, beforeColor: "bg-status-error", afterColor: "bg-status-success" },
          { label: "Satisfação com o corpo", before: "Baixa", beforeSegs: 1, after: "Elevada", afterSegs: 5, beforeColor: "bg-status-error", afterColor: "bg-status-success" },
          { label: "Autoestima", before: "Baixa", beforeSegs: 1, after: "Alta", afterSegs: 4, beforeColor: "bg-status-error", afterColor: "bg-status-success" },
        ].map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            {/* Atual */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
                <span>{item.label}</span>
              </div>
              <span className="text-xs text-text-secondary">{item.before}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className={`h-1.5 flex-1 rounded-full ${j < item.beforeSegs ? item.beforeColor : "bg-surface-subtle"}`} />
                ))}
              </div>
            </div>
            {/* Objetivo */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                <span>{item.label}</span>
              </div>
              <span className="text-xs text-status-success font-medium">{item.after}</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className={`h-1.5 flex-1 rounded-full ${j < item.afterSegs ? item.afterColor : "bg-surface-subtle"}`} />
                ))}
              </div>
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
