
import { motion } from "framer-motion"
import { Button } from "../ui/Button"

interface StepProps {
  onNext: () => void
}

export function Step05_Motivation({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-10 w-full max-w-lg mx-auto py-8 text-center"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto shadow-xl ring-4 ring-primary/20"
      >
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400&h=400"
          alt="Mulher sorridente alongando-se"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-heading font-black text-strong">
          Você vai arrasar!
        </h2>
        <p className="text-lg text-text-secondary leading-relaxed px-4">
          Nosso programa de calistenia é uma opção de fitness fácil e eficaz para todos os níveis. Ajudamos você a entrar em forma usando nenhum equipamento em casa!
        </p>
      </div>

      <div className="w-full mt-4">
        <Button size="lg" variant="strong" fullWidth onClick={onNext} className="shadow-cta">
          CONTINUAR
        </Button>
      </div>
    </motion.div>
  )
}
