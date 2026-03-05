
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

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

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(44,122,123,0.14)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full flex items-center justify-between rounded-xl border-2 border-border bg-surface-card px-6 py-5 text-left shadow-sm transition-all duration-200 hover:border-primary hover:bg-[#F0FAFA]"
          >
            {/* Barra de acento lateral — aparece no hover */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />

            <span className="font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors duration-200 pl-2">
              {opt.label}
            </span>

            <ChevronRight
              className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
