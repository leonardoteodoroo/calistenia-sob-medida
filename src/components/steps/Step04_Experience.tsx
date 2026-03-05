import { motion } from "framer-motion";

interface StepProps {
  onNext: (data: string) => void;
}

const options = [
  { id: "sim", label: "Sim", icon: "✓" },
  { id: "nao", label: "Não", icon: "✗" },
];

export function Step04_Experience({ onNext }: StepProps) {
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
          Você já tentou treinos de calistenia antes?
        </h2>
      </header>

      <div className="flex flex-col gap-6">
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            whileHover={{
              y: -3,
              boxShadow:
                "0 7px 0px rgba(100, 100, 110, 0.45), 0 12px 20px rgba(0,0,0,0.10)",
            }}
            whileTap={{
              y: 4,
              boxShadow:
                "0 1px 0px rgba(100, 100, 110, 0.40), 0 2px 4px rgba(0,0,0,0.06)",
              transition: { duration: 0.07 },
            }}
            style={{
              boxShadow:
                "0 5px 0px rgba(100, 100, 110, 0.35), 0 8px 16px rgba(0,0,0,0.08)",
            }}
            className="group w-full flex items-center justify-center gap-3 rounded-2xl border border-primary/30 bg-surface-card px-6 py-6 text-center cursor-pointer hover:border-primary/70 hover:bg-[#F2FAFA] active:bg-[#E8F6F6]"
          >
            <span className="text-xl text-text-secondary group-hover:text-primary">
              {opt.icon}
            </span>
            <span className="font-heading font-bold text-lg text-text-primary group-hover:text-primary">
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
