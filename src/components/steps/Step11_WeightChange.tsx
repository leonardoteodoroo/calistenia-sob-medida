import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step11_WeightChange({ onNext }: StepProps) {
  const options = [
    { id: "ganha_rapido_perde_lento", label: "Eu ganho peso rapidamente mas perco peso lentamente" },
    { id: "ganha_perde_facil", label: "Eu ganho e perco peso facilmente" },
    { id: "dificuldade_ganhar", label: "Eu tenho dificuldade para ganhar peso ou músculos" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto py-6"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Como seu peso muda tipicamente?
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {options.map(opt => (
          <OptionCard
            key={opt.id}
            title={opt.label}
            onSelect={() => onNext(opt.id)}
            className="md:p-5 p-4"
          />
        ))}
      </div>
    </motion.div>
  )
}
