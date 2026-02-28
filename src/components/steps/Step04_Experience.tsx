
import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"

interface StepProps {
  onNext: (data: string) => void
}

export function Step04_Experience({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10 w-full max-w-lg mx-auto py-10"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Você já tentou treinos de calistenia antes?
        </h2>
      </header>

      <div className="flex flex-col gap-4">
        <OptionCard
          title="Sim"
          onSelect={() => onNext("sim")}
        />
        <OptionCard
          title="Não"
          onSelect={() => onNext("nao")}
        />
      </div>
    </motion.div>
  )
}
