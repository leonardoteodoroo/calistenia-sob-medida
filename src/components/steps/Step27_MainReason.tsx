import { useState } from "react"
import { motion } from "framer-motion"
import { MultiOptionCard } from "../ui/MultiOptionCard"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step27_MainReason({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { id: "confianca", label: "Me sentir mais confiante com meu corpo" },
    { id: "saudavel_energia", label: "Me sentir mais saudável e com energia" },
    { id: "roupas", label: "Vestir melhor minhas roupas" },
    { id: "pos_parto", label: "Voltar a forma após o parto" },
    { id: "outros", label: "Outros" },
  ]

  const toggleOption = (id: string) => {
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selected.length > 0) {
      onNext(selected.join(","))
    }
  }

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
        <p className="text-text-secondary">Escolhe uma ou mais opções para avançar</p>
      </header>

      <div className="flex flex-col gap-3">
        {options.map(opt => (
          <MultiOptionCard
            key={opt.id}
            title={opt.label}
            selected={selected.includes(opt.id)}
            onToggle={() => toggleOption(opt.id)}
          />
        ))}
      </div>

      <Button
        variant="strong"
        size="lg"
        fullWidth
        onClick={handleContinue}
        disabled={selected.length === 0}
        className="mt-6 uppercase font-bold tracking-wide"
      >
        Continuar
      </Button>
    </motion.div>
  )
}
