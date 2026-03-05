
import { motion } from "framer-motion"

interface StepProps {
  onNext: (data: string) => void
}

const options = [
  { id: "sim", label: "Sim" },
  { id: "nao", label: "Não" },
]

export function Step04_Experience({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10 w-full max-w-lg mx-auto pt-2 pb-8"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Você já tentou treinos de calistenia antes?
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full rounded-xl border-2 border-border bg-surface-card shadow-sm hover:shadow-md hover:border-primary/60 transition-all duration-300 py-5 px-6 text-center"
          >
            <span className="font-heading font-bold text-lg text-text-primary">
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
