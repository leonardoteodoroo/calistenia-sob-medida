import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step22_Lunch({ onNext }: StepProps) {
  const options = [
    { id: "10h_12h", label: "Entre as 10h e o meio dia" },
    { id: "12h_14h", label: "Entre o meio dia e as 14h" },
    { id: "14h_16h", label: "Entre as 14h e 16h" },
    { id: "pulo", label: "Eu normalmente pulo o almoço" },
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
          E o almoço?
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
