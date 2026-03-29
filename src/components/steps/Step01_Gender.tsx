import { motion } from "framer-motion";
import { OptionCard } from "../ui/OptionCard";
import imgMulher from "../../assets/images/Mulher adulta em casa, com roupa de treino discreta, sorrindo com confiança em uma sala iluminada por luz natural- step01.webp";
import imgHomem from "../../assets/images/Homem adulto em casa, com roupa esportiva simples, expressão amigável e confiante em uma sala clara- step01.webp";

interface StepProps {
  onNext: (data: string) => void;
}

const options = [
  {
    value: "mulher",
    label: "MULHER",
    src: imgMulher,
    alt: "Mulher adulta em casa com roupa de treino, sorrindo com confiança",
  },
  {
    value: "homem",
    label: "HOMEM",
    src: imgHomem,
    alt: "Homem adulto em casa com roupa esportiva, expressão amigável e confiante",
  },
];

export function Step01_Gender({ onNext }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-2xl mx-auto pt-2 pb-8"
    >
      <header className="space-y-3 text-center">
        <p className="text-base text-text-secondary">
          Para isso, precisamos de algumas informações.
        </p>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Para começar, você é:
        </h2>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <OptionCard
            key={option.value}
            title={option.label}
            onSelect={() => onNext(option.value)}
            hideIndicator
          >
            <img
              src={option.src}
              alt={option.alt}
              width={480}
              height={320}
              loading="eager"
              decoding="async"
              className="w-full object-cover aspect-[4/3]"
            />
          </OptionCard>
        ))}
      </div>
    </motion.div>
  );
}
