import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { SliderInput } from "../ui/SliderInput"
import type { StepProps } from "../../types"

export function Step28_Height({ onNext }: StepProps) {
  const [unit, setUnit] = useState<"cm" | "pol">("cm")

  // Valores default razoáveis
  const [valueCm, setValueCm] = useState(165)
  const [valuePol, setValuePol] = useState(65)

  const units = [
    { id: "cm", label: "cm" },
    { id: "pol", label: "pol" }
  ]

  const currentValue = unit === "cm" ? valueCm : valuePol
  const min = unit === "cm" ? 120 : 47
  const max = unit === "cm" ? 220 : 86

  const handleChange = (val: number) => {
    if (unit === "cm") setValueCm(val)
    if (unit === "pol") setValuePol(val)
  }

  const handleNext = () => {
    onNext(`${currentValue} ${unit}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10 w-full max-w-lg mx-auto py-6"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Qual sua altura?
        </h2>
      </header>

      <div className="py-4">
        <SliderInput
          value={currentValue}
          onChange={handleChange}
          unit={unit}
          units={units}
          onUnitChange={(u) => setUnit(u as "cm" | "pol")}
          min={min}
          max={max}
        />
      </div>

      <Button
        variant="strong"
        size="lg"
        fullWidth
        onClick={handleNext}
        className="mt-4"
      >
        PRÓXIMO PASSO
      </Button>
    </motion.div>
  )
}
