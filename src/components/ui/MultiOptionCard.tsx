
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface MultiOptionCardProps {
  title: string
  selected?: boolean
  onToggle: () => void
}

export function MultiOptionCard({ title, selected, onToggle }: MultiOptionCardProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex flex-row items-center justify-between w-full p-5 text-left transition-all duration-300 border-2 rounded-[var(--radius-lg)]",
        selected
          ? "border-primary bg-surface-subtle shadow-card-hover"
          : "border-border-subtle bg-surface-card shadow-sm hover:shadow-md hover:border-primary/50"
      )}
    >
      <span className={cn("font-heading font-semibold text-base", selected ? "text-primary" : "text-text-primary")}>
        {title}
      </span>

      {/* Checkbox visual customizado */}
      <div className={cn(
        "h-6 w-6 rounded-md border-2 transition-all flex items-center justify-center bg-surface-card shrink-0 ml-4",
        selected ? "border-primary bg-primary" : "border-border-subtle"
      )}>
        {selected && (
          <motion.svg
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </motion.svg>
        )}
      </div>
    </motion.button>
  )
}
