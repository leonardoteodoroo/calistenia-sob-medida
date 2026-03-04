import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export const Step11_FocusAreas = ({ onNext }: StepProps) => {
  const options = [
    { id: "barriga", label: "Barriga" },
    { id: "gluteos", label: "Glúteos" },
    { id: "pernas", label: "Pernas" },
    { id: "peito", label: "Peito" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8"
    >
      <header className="space-y-3 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Quais são suas regiões de foco?
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
