import { motion } from "framer-motion";

type OptionItem = {
  id: string;
  label: string;
  icon?: string;
  image?: string;
};

type QuizButtonsProps = {
  title: string;
  options: OptionItem[];
  onNext: (val: string) => void;
  layout?: "list" | "grid";
};

const shadow = {
  normal: "0 5px 0px rgba(100, 100, 110, 0.35), 0 8px 16px rgba(0,0,0,0.08)",
  hover: "0 7px 0px rgba(100, 100, 110, 0.45), 0 12px 20px rgba(0,0,0,0.10)",
  tap: "0 1px 0px rgba(100, 100, 110, 0.40), 0 2px 4px rgba(0,0,0,0.06)",
};

/** Botão 3D reutilizável para steps de pergunta simples */
export function QuizButtons({
  title,
  options,
  onNext,
  layout = "list",
}: QuizButtonsProps) {
  const isGrid = layout === "grid";

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
          {title}
        </h2>
      </header>

      <div
        className={isGrid ? "grid grid-cols-2 gap-4" : "flex flex-col gap-6"}
      >
        {options.map((opt, i) => (
          <motion.button
            key={opt.id}
            onClick={() => onNext(opt.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            whileHover={{ y: -3, boxShadow: shadow.hover }}
            whileTap={{
              y: 4,
              boxShadow: shadow.tap,
              transition: { duration: 0.07 },
            }}
            style={{ boxShadow: shadow.normal }}
            className={`group w-full flex rounded-2xl border border-primary/30 bg-surface-card text-center cursor-pointer hover:border-primary/70 hover:bg-[#F2FAFA] active:bg-[#E8F6F6] ${
              isGrid
                ? "flex-col items-center gap-2 px-3 pt-3 pb-4"
                : "flex-row items-center justify-center gap-3 px-6 py-6"
            }`}
          >
            {/* Imagem 3D (modo grid) */}
            {opt.image && (
              <img
                src={opt.image}
                alt={`Ilustração de corpo: ${opt.label}`}
                loading="lazy"
                decoding="async"
                className="w-full aspect-square object-cover object-top rounded-xl pointer-events-none"
              />
            )}

            {/* Ícone inline (modo lista) */}
            {opt.icon && !opt.image && (
              <span className="text-xl text-text-secondary group-hover:text-primary">
                {opt.icon}
              </span>
            )}

            <span className="font-heading font-bold text-base text-text-primary group-hover:text-primary leading-tight">
              {opt.label}
            </span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
