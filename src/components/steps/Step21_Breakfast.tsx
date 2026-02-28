import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step21_Breakfast({ onNext }: StepProps) {
  const options = [
    { id: "6h_8h", label: "Entre as 6h e as 8h" },
    { id: "8h_10h", label: "Entre as 8h e as 10h" },
    { id: "10h_12h", label: "Entre as 10h e o meio dia" },
    { id: "pulo", label: "Eu normalmente salto o café da manhã" },
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
          Quando você normalmente toma café da manhã?
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
