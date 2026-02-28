import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step06_Objective({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto py-6"
    >
      <header className="space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Qual é o seu principal objetivo?
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        <OptionCard
          title="Perder peso"
          onSelect={() => onNext("perder_peso")}
        />
        <OptionCard
          title="Mantenha o peso e fique em forma"
          onSelect={() => onNext("manter_peso")}
        />
      </div>
    </motion.div>
  )
}
