
import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"

interface StepProps {
  onNext: (data: string) => void
}

export function Step01_Gender({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto py-6"
    >
      <header className="space-y-4 text-center">
        <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Você está muito perto de descobrir qual o melhor tipo de treino para alcançar os resultados que você deseja.
        </h1>
        <div className="space-y-1">
          <p className="text-text-secondary text-base">Para isso, precisamos de algumas informações.</p>
          <p className="text-text-secondary font-semibold text-lg">Para começar, você é:</p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OptionCard
          title="MULHER"
          imageSrc="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=400&h=300"
          onSelect={() => onNext("mulher")}
          fetchPriority="high"
          loading="eager"
        />
        <OptionCard
          title="HOMEM"
          imageSrc="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400&h=300"
          onSelect={() => onNext("homem")}
          loading="lazy"
        />
      </div>
    </motion.div>
  )
}
