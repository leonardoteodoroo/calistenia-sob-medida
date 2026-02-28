import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step12_BestPhysique({ onNext }: StepProps) {
  const options = [
    { id: "menos_1_ano", label: "Há menos de 1 ano" },
    { id: "1_2_anos", label: "1 a 2 anos atrás" },
    { id: "mais_3_anos", label: "Há mais de 3 anos" },
    { id: "nunca", label: "Nunca" },
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
          Há quanto tempo você esteve no melhor físico de sua vida?
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {options.map(opt => (
          <OptionCard
            key={opt.id}
            title={opt.label}
            onSelect={() => onNext(opt.id)}
            className="md:p-4 p-4"
          />
        ))}
      </div>
    </motion.div>
  )
}
