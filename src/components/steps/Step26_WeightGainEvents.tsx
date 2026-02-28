import { useState } from "react"
import { motion } from "framer-motion"
import { MultiOptionCard } from "../ui/MultiOptionCard"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step26_WeightGainEvents({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([])

  const options = [
    { id: "trabalho", label: "Pressão do trabalho" },
    { id: "familia", label: "Vida familiar agitada" },
    { id: "divorcio", label: "Divórcio ou término de relacionamento" },
    { id: "metabolismo", label: "Metabolisimo mais lento devido ao envelhecimento" },
    { id: "financas", label: "Desafios financeiros" },
    { id: "pandemia", label: "Pandemia de Covid-19" },
    { id: "outros", label: "Outros eventos estressantes" },
    { id: "nenhum", label: "Nenhum dos itens acima" },
  ]

  const toggleOption = (id: string) => {
    if (id === "nenhum") {
      setSelected(["nenhum"])
      return
    }

    setSelected(prev => {
      if (prev.includes("nenhum")) return [id]

      return prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    })
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
          Algum dos seguintes eventos levou ao ganho de peso nos últimos anos?
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
