import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step13_Flexibility({ onNext }: StepProps) {
  const options = [
    { id: "bastante", label: "Bastante flexível" },
    { id: "comecando", label: "Estou começando" },
    { id: "nao_muito", label: "Não muito" },
    { id: "nao_certeza", label: "Não tenho certeza" },
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
          Você se considera uma mulher flexível?
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
