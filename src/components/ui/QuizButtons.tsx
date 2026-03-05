
import { motion } from "framer-motion"

type OptionItem = { id: string; label: string }

type QuizButtonsProps = {
  title: string
  options: OptionItem[]
  onNext: (val: string) => void
}

/** Botão 3D reutilizável para steps de pergunta simples */
export function QuizButtons({ title, options, onNext }: QuizButtonsProps) {
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
          {title}
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            whileHover={{
              y: -3,
              boxShadow: "0 8px 0px #285E61, 0 12px 20px rgba(44,122,123,0.22)",
            }}
            whileTap={{
              y: 3,
              boxShadow: "0 1px 0px #285E61, 0 2px 4px rgba(44,122,123,0.1)",
            }}
            style={{
              boxShadow: "0 5px 0px #3a9a9b, 0 8px 16px rgba(44,122,123,0.15)",
            }}
            className="group w-full flex items-center justify-center rounded-xl border-2 border-primary/40 bg-surface-card px-6 py-5 text-center transition-colors duration-200 hover:border-primary hover:bg-[#F0FAFA]"
          >
            <span className="font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors duration-200">
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
