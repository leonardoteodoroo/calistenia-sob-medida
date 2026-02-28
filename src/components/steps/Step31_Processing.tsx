import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { StepProps } from "../../types"

export function Step31_Processing({ onNext }: StepProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simula um carregamento de 100% ao longo de ~3 segundos
    const duration = 3000
    const interval = 30 // update a cada 30ms (~100 updates)
    const step = 100 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer)
          setTimeout(() => onNext(), 300) // Aguarda um pouquinho no 100% e avança
          return 100
        }
        return p + step
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onNext])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-8 w-full max-w-lg mx-auto py-10"
    >
      <header className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Analisando seus dados e finalizando seu plano
        </h2>
      </header>

      {/* Visual Component - Group of Women */}
      <div className="w-full aspect-video bg-surface-default flex items-center justify-center rounded-xl overflow-hidden shadow-sm relative">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
          alt="Mulheres felizes de diferentes corpos"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      {/* Progress Indicator */}
      <div className="w-full flex flex-col items-center gap-3">
        <span className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
          Taxa de carregamento
        </span>
        <div className="text-5xl font-heading font-black text-primary tabular-nums">
          {Math.min(Math.round(progress), 100)}%
        </div>

        {/* Barra de fake load fluida */}
        <div className="w-full h-2 bg-surface-subtle rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-primary transition-all rounded-full ease-out"
            style={{ width: `${progress}%`, transitionDuration: '30ms' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
