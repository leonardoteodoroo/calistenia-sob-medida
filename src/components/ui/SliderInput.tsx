import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface SliderInputProps {
  value: number
  onChange: (val: number) => void
  unit: string
  units: { id: string; label: string }[]
  onUnitChange: (unit: string) => void
  min: number
  max: number
  step?: number
}

export function SliderInput({
  value,
  onChange,
  unit,
  units,
  onUnitChange,
  min,
  max,
  step = 1
}: SliderInputProps) {

  // Calcula o preenchimento para pintar a barra antes do thumb
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="w-full flex flex-col items-center gap-8">

      {/* Visualizador de Valor */}
      <div className="flex flex-col items-center justify-center">
        <motion.div
          key={value}
          initial={{ opacity: 0.5, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-bold text-primary tabular-nums"
        >
          {value}
        </motion.div>

        {/* Toggle de Unidades */}
        <div className="flex items-center gap-1 mt-4 p-1 bg-surface-subtle rounded-full border border-border-default shadow-inner">
          {units.map((u) => (
            <button
              key={u.id}
              onClick={() => onUnitChange(u.id)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300",
                unit === u.id
                  ? "bg-primary text-white shadow-md"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full space-y-3">
        {/* Régua / Slider */}
        <div className="relative w-full h-12 flex items-center">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-3 appearance-none bg-surface-subtle border border-border-subtle rounded-full outline-none focus:ring-2 focus:ring-primary/50 relative z-10 transition-shadow"
            style={{
              background: `linear-gradient(to right, var(--color-primary) ${percentage}%, var(--color-surface-subtle) ${percentage}%)`
            }}
          />
        </div>

        <p className="text-center text-sm font-medium text-text-secondary">
          Arraste para ajustar
        </p>
      </div>

    </div>
  )
}
