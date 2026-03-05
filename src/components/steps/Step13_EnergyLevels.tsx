import { motion } from "framer-motion";
import {
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  BatteryFull,
} from "lucide-react";
import type { StepProps } from "../../types";

export function Step13_EnergyLevels({ onNext }: StepProps) {
  const options = [
    {
      id: "baixos",
      label: "Baixos, sinto-me cansada durante o dia",
      icon: <BatteryLow className="text-status-error" />,
    },
    {
      id: "baixa_manha",
      label: "Baixa após o almoço",
      icon: <BatteryWarning className="text-status-warning" />,
    },
    {
      id: "arrasto",
      label: "Arrasto-me entre refeições",
      icon: <BatteryMedium className="text-status-success/70" />,
    },
    {
      id: "elevados",
      label: "Elevados e estáveis",
      icon: <BatteryFull className="text-status-success" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8 w-full max-w-lg mx-auto pt-2 pb-8"
    >
      <header className="text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
          Como são os seus níveis de energia durante o dia?
        </h2>
      </header>

      <div className="flex flex-col gap-3">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex flex-row items-center gap-4 w-full p-4 md:p-5 text-left transition-all duration-300 border-2 rounded-[var(--radius-lg)] border-border-subtle bg-surface-card shadow-sm hover:shadow-md hover:border-primary/50 group"
          >
            <div className="w-10 h-10 shrink-0 bg-surface-subtle rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              {opt.icon}
            </div>
            <span className="font-heading font-semibold text-base text-text-primary">
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
