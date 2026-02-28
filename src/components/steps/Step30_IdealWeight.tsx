import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import { SliderInput } from "../ui/SliderInput"
import type { StepProps } from "../../types"

export function Step30_IdealWeight({ onNext }: StepProps) {
  const [unit, setUnit] = useState<"kg" | "lb">("kg")

  // Usaremos os mesmos constraints razoáveis
  const [valueKg, setValueKg] = useState(60)
  const [valueLb, setValueLb] = useState(132)

  const units = [
    { id: "kg", label: "kg" },
    { id: "lb", label: "lb" }
  ]

  const currentValue = unit === "kg" ? valueKg : valueLb
  const min = unit === "kg" ? 40 : 88
  const max = unit === "kg" ? 180 : 396

  const handleChange = (val: number) => {
    if (unit === "kg") setValueKg(val)
    if (unit === "lb") setValueLb(val)
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
          E qual é o seu objetivo de peso ideal?
        </h2>
      </header>

      <div className="py-4">
        <SliderInput
          value={currentValue}
          onChange={handleChange}
          unit={unit}
          units={units}
          onUnitChange={(u) => setUnit(u as "kg" | "lb")}
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
