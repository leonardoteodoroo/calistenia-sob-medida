import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import type { StepProps } from "../../types";

const BODY_PARTS = [
  { id: "peito", label: "Peito" },
  { id: "bracos", label: "Braços" },
  { id: "costas", label: "Costas" },
  { id: "barriga", label: "Barriga" },
  { id: "gluteos", label: "Glúteos" },
  { id: "quadris", label: "Quadris" },
  { id: "pernas", label: "Pernas" },
];

export function StepTestelab({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (id === "full") {
      if (selected.includes("full")) {
        setSelected([]);
      } else {
        setSelected(["full", ...BODY_PARTS.map((p) => p.id)]);
      }
      return;
    }

    let newSelected = [...selected];
    if (newSelected.includes(id)) {
      newSelected = newSelected.filter((i) => i !== id && i !== "full");
    } else {
      newSelected.push(id);
      const hasAll = BODY_PARTS.every((p) => newSelected.includes(p.id));
      if (hasAll) newSelected.push("full");
    }
    setSelected(newSelected);
  };

  const isChecked = (id: string) => selected.includes(id);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto min-h-[80vh] justify-between pb-8 pt-4 px-4 font-sans bg-[#FBF9F6]">
      <div className="flex flex-col gap-6">
        <header className="text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[22px] leading-tight font-extrabold text-[#2D2D2D]"
          >
            Só precisamos de um pouco mais de detalhes. Quais áreas você
            gostaria de melhorar?
          </motion.h2>
        </header>

        {/* Full Body Toggle */}
        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => toggle("full")}
          className={`relative overflow-hidden flex items-center justify-between w-full p-4 rounded-2xl border-2 transition-all duration-300 ${
            isChecked("full")
              ? "border-[#8B7DFC] bg-[#8B7DFC]/10"
              : "border-[#E5E5E5] bg-white"
          }`}
        >
          <span className="font-bold text-[#333] text-lg">Corpo todo</span>
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              isChecked("full") ? "bg-[#8B7DFC]" : "bg-[#E5E5E5]"
            }`}
          >
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </motion.button>

        {/* Map area */}
        <div className="relative flex justify-between items-stretch mt-4">
          {/* Image Side */}
          <div className="w-[45%] relative flex justify-center items-end">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              src="/woman-body-areas.webp"
              alt="Áreas do corpo"
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Buttons Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-[55%] flex flex-col justify-between gap-2.5 py-2 z-10"
          >
            {BODY_PARTS.map((part) => {
              const checked = isChecked(part.id);
              return (
                <motion.button
                  key={part.id}
                  variants={itemVariants}
                  onClick={() => toggle(part.id)}
                  whileTap={{ scale: 0.96 }}
                  className={`relative flex items-center justify-between px-4 py-3 rounded-[15px] border-[1.5px] transition-all duration-200 shadow-sm ${
                    checked
                      ? "border-[#8B7DFC] bg-[#F7F6FF]"
                      : "border-[#E8E8E8] bg-white hover:border-[#D0C9FF]"
                  }`}
                >
                  <span
                    className={`font-semibold text-[15px] ${
                      checked ? "text-[#333]" : "text-[#555]"
                    }`}
                  >
                    {part.label}
                  </span>
                  <div
                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      checked ? "bg-[#8B7DFC]" : "bg-[#EAEAEA]"
                    }`}
                  >
                    <Check
                      className={`w-3.5 h-3.5 ${
                        checked ? "text-white" : "text-transparent"
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 pt-4 w-full"
      >
        <button
          onClick={() => selected.length > 0 && onNext(selected)}
          disabled={selected.length === 0}
          className={`w-full py-4 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ${
            selected.length > 0
              ? "bg-[#8B7DFC] text-white hover:bg-[#7A6AE6] hover:shadow-xl hover:-translate-y-0.5"
              : "bg-[#E5E5E5] text-[#999] cursor-not-allowed shadow-none"
          }`}
        >
          Avançar
        </button>
      </motion.div>
    </div>
  );
}
