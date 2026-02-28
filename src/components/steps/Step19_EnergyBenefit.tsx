import { motion } from "framer-motion"
import { Button } from "../ui/Button"
import type { StepProps } from "../../types"

export function Step19_EnergyBenefit({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full max-w-md mx-auto py-6 text-center"
    >
      <div className="mb-8 rounded-2xl overflow-hidden shadow-card border border-border-subtle relative aspect-square">
        {/* Usando imagem placeholder aspiracional sugerida */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop"
          alt="Mulher alongando animada"
          className="w-full h-full object-cover"
        />
      </div>

      <header className="space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary leading-tight">
          A calistenia vai te ajudar a se sentir com mais energia
        </h2>

        <p className="text-text-secondary leading-relaxed">
          Esses exercícios fortalecem seus músculos, núcleo e aumentam a consciência corporal.
        </p>

        <p className="text-text-primary font-bold">
          Queremos que você viva sua vida ao máximo!
        </p>
      </header>

      <Button onClick={() => onNext()} fullWidth size="lg">
        CONTINUAR
      </Button>
    </motion.div>
  )
}
