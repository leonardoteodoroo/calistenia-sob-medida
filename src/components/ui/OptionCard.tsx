import React from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

const shadow = {
  normal: "0 5px 0px rgba(100, 100, 110, 0.35), 0 8px 16px rgba(0,0,0,0.08)",
  hover: "0 7px 0px rgba(100, 100, 110, 0.45), 0 12px 20px rgba(0,0,0,0.10)",
  tap: "0 1px 0px rgba(100, 100, 110, 0.40), 0 2px 4px rgba(0,0,0,0.06)",
};

interface OptionCardProps extends Omit<HTMLMotionProps<"button">, "onSelect"> {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  selected?: boolean;
  onSelect: () => void;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "lazy" | "eager";
  hideIndicator?: boolean;
  children?: React.ReactNode;
}

export function OptionCard({
  title,
  subtitle,
  imageSrc,
  selected,
  onSelect,
  fetchPriority,
  loading = "lazy",
  hideIndicator = false,
  children,
  className,
  ...props
}: OptionCardProps) {
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -3, boxShadow: shadow.hover }}
      whileTap={{
        y: 4,
        boxShadow: shadow.tap,
        transition: { duration: 0.07 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ boxShadow: shadow.normal }}
      className={cn(
        "relative flex flex-col w-full text-left overflow-hidden transition-all duration-[350ms] border-2",
        "rounded-xl",
        selected
          ? "border-primary bg-surface-subtle"
          : "border-border-subtle bg-surface-card hover:border-primary/50",
        className,
      )}
      {...props}
    >
      {/* Placeholder customizado (children) — usado quando não há imageSrc */}
      {children && !imageSrc && (
        <div className="w-full bg-surface-section relative overflow-hidden">
          {children}
        </div>
      )}

      {/* Imagem externa */}
      {imageSrc && (
        <div className="w-full h-40 bg-surface-section relative overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            width={400}
            height={300}
            loading={loading}
            decoding="async"
            fetchPriority={fetchPriority}
            className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105"
          />
        </div>
      )}

      <div
        className={`p-3 flex flex-col gap-0.5 w-full relative z-10 ${hideIndicator ? "items-center text-center" : "p-5"}`}
      >
        <p
          className={`font-heading font-bold text-base ${selected ? "text-primary" : "text-text-primary"}`}
        >
          {title}
        </p>
        {subtitle && (
          <p className="text-text-muted text-sm leading-relaxed">{subtitle}</p>
        )}
      </div>

      {/* Indicador de seleção — opcional via hideIndicator */}
      {!hideIndicator && (
        <div
          className={cn(
            "absolute right-4 top-4 h-6 w-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center bg-surface-card",
            selected ? "border-primary bg-primary" : "border-border-subtle",
          )}
        >
          {selected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-2.5 h-2.5 bg-white rounded-full"
            />
          )}
        </div>
      )}
    </motion.button>
  );
}
