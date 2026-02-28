import { useState } from "react"
import { motion } from "framer-motion"
import { MultiOptionCard } from "../ui/MultiOptionCard"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step14_FocusAreas({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { id: "barriga", label: "Barriga" },
    { id: "gluteos", label: "Glúteos" },
    { id: "pernas", label: "Pernas" },
    { id: "peito", label: "Peito" },
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
      <header className="space-y-3 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Quais são suas regiões de foco?
        </h2>
        <p className="text-text-secondary">Escolha todas que se aplicam</p>
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
        className="mt-6"
      >
        PRÓXIMO PASSO
      </Button>
    </motion.div>
  )
}
