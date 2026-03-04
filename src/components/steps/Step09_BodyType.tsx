import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step09_BodyType({ onNext }: StepProps) {
  const options = [
    { id: "magra", label: "Magra" },
    { id: "falsa_magra", label: "Falsa magra" },
    { id: "acima_peso", label: "Acima do peso" },
    { id: "muito_acima_peso", label: "Muito acima do peso" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Como você descreveria seu físico?
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {options.map(opt => (
          <OptionCard
            key={opt.id}
            title={opt.label}
            onSelect={() => onNext(opt.id)}
            hideIndicator
          />
        ))}
      </div>
    </motion.div>
  )
}
