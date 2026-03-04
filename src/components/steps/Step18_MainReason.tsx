import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import type { StepProps } from "../../types"

export function Step18_MainReason({ onNext }: StepProps) {

  const options = [
    { id: "confianca", label: "Me sentir mais confiante com meu corpo" },
    { id: "saudavel_energia", label: "Me sentir mais saudável e com energia" },
    { id: "roupas", label: "Vestir melhor minhas roupas" },
    { id: "pos_parto", label: "Voltar a forma após o parto" },
    { id: "outro", label: "Outro" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto py-6"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-2">
          Qual é o seu principal motivo para entrar em forma?
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
