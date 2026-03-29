import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Heart } from "lucide-react";
import type { StepProps } from "../../types";

type Option = {
  id: string;
  label: string;
  feedback: string;
};

const OPTIONS: Option[] = [
  {
    id: "agora",
    label: "Agora mesmo!",
    feedback:
      "Uau! Isso é melhor do que 89% das usuárias!\nVamos manter seus belos resultados.",
  },
  {
    id: "menos_de_1_ano",
    label: "Há menos de um ano",
    feedback:
      "Você é uma estrela!\nIsso é melhor do que 89% das usuárias! Voltar à forma será muito fácil com o seu plano personalizado.",
  },
  {
    id: "1_a_3_anos",
    label: "Há 1 a 3 anos",
    feedback:
      "Isso é melhor do que 70% das usuárias!\nVocê já esteve em ótima forma antes e nós vamos ajudar você a chegar lá novamente.",
  },
  {
    id: "mais_de_3_anos",
    label: "Há mais de 3 anos",
    feedback:
      "56% das nossas usuárias já estiveram no seu lugar.\nMas não importa quanto tempo tenha passado, você ainda pode voltar à sua melhor forma.",
  },
  {
    id: "nunca",
    label: "Nunca",
    feedback:
      "20% das nossas usuárias compartilham uma jornada semelhante à sua.\nJá ajudamos mais de 1.000.000 de mulheres, então deixe-nos guiar você até o seu objetivo agora.",
  },
];

export function StepTestelab2({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto min-h-[80vh] pb-8 pt-4 px-4 font-sans bg-[#FBF9F6]">
      <header className="text-center px-2 mb-8 mt-2">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[24px] md:text-[28px] leading-tight font-extrabold text-[#1F2937]"
        >
          E quando foi a última vez que você se sentiu excepcionalmente bem com
          a sua forma física?
        </motion.h2>
      </header>

      <div className="relative flex flex-row items-stretch gap-4 md:gap-6 flex-grow">
        {/* Imagem Correspondente (Gerada via IA) */}
        <div className="w-[40%] relative flex justify-center items-end ml-[-10px] md:ml-0">
          <motion.img
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            src="/sport-before-after.png"
            alt="Transformação da forma física"
            className="w-full h-auto object-contain object-bottom drop-shadow-xl"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Opções */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-[60%] flex flex-col justify-center gap-3 z-10"
        >
          {OPTIONS.map((opt) => {
            const isSelected = selected === opt.id;
            const isOtherSelected = selected !== null && selected !== opt.id;

            return (
              <motion.div
                key={opt.id}
                variants={itemVariants}
                className={`flex flex-col transition-all duration-300 ${
                  isOtherSelected
                    ? "opacity-40 scale-[0.98]"
                    : "opacity-100 scale-100"
                }`}
              >
                <button
                  onClick={() => setSelected(opt.id)}
                  className={`relative w-full text-left px-5 py-4 rounded-[20px] font-bold text-[16px] transition-all duration-300 shadow-sm ${
                    isSelected
                      ? "bg-white border-2 border-[#8B7DFC] text-[#8B7DFC] shadow-md z-20"
                      : "bg-white border-2 border-transparent text-[#4B5563] hover:border-[#E5E7EB]"
                  }`}
                >
                  {opt.label}
                </button>

                {/* Feedback Accordion */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#FFF4F2] border border-[#FFE4E0] rounded-[16px] p-4 flex flex-col gap-2">
                        <Heart className="w-6 h-6 text-[#FF6B6B] fill-[#FF6B6B]" />
                        <p className="text-[14px] text-[#4B5563] font-medium leading-snug whitespace-pre-line">
                          {opt.feedback}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Botão Avançar Fixo na Base */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 pt-4 w-full"
          >
            <button
              onClick={() => onNext(selected)}
              className="w-full py-4 rounded-[24px] font-bold text-lg text-white shadow-xl transition-all duration-300 bg-[#8B7DFC] hover:bg-[#7A6AE6] hover:shadow-2xl hover:-translate-y-0.5"
            >
              Avançar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
