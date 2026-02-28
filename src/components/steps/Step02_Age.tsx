
import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"

interface StepProps {
  onNext: (data: string) => void
}

export function Step02_Age({ onNext }: StepProps) {
  const options = [
    { label: "18 - 29 anos", value: "18-29", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400&h=300" },
    { label: "29 - 39 anos", value: "29-39", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=400&h=300" },
    { label: "39 - 59 anos", value: "39-59", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=400&h=300" },
    { label: "+ 60 anos", value: "60+", img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=400&h=300" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-2xl mx-auto py-6"
    >
      <header className="space-y-3 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Desafio específico para sua idade e objetivo:
        </h2>
        <p className="text-text-secondary text-base">Escolha uma opção abaixo:</p>
      </header>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {options.map((opt) => (
          <motion.div key={opt.value} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <OptionCard
              title={opt.label}
              imageSrc={opt.img}
              onSelect={() => onNext(opt.value)}
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
