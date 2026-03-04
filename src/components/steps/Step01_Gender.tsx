
import { motion } from "framer-motion"
import { OptionCard } from "../ui/OptionCard"
import imgMulher from "../../assets/images/Mulher adulta em casa, com roupa de treino discreta, sorrindo com confiança em uma sala iluminada por luz natural- step01.webp"
import imgHomem from "../../assets/images/Homem adulto em casa, com roupa esportiva simples, expressão amigável e confiante em uma sala clara- step01.webp"

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
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8"
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

      {/* Grid sempre 2 colunas em mobile */}
      <div className="grid grid-cols-2 gap-4">
        <OptionCard
          title="MULHER"
          onSelect={() => onNext("mulher")}
          hideIndicator
          fetchPriority="high"
        >
          <img
            src={imgMulher}
            alt="Mulher adulta em casa com roupa de treino, sorrindo com confiança"
            width={320}
            height={400}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full object-cover aspect-[4/5]"
          />
        </OptionCard>
        <OptionCard
          title="HOMEM"
          onSelect={() => onNext("homem")}
          hideIndicator
        >
          <img
            src={imgHomem}
            alt="Homem adulto em casa com roupa esportiva, expressão amigável e confiante"
            width={320}
            height={400}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full object-cover aspect-[4/5]"
          />
        </OptionCard>
      </div>
    </motion.div>
  )
}
