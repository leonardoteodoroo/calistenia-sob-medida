import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 py-4 px-4 bg-background/80 backdrop-blur-md border-b border-border-default/50"
    >
      <div className="w-full max-w-3xl mx-auto flex items-center gap-3">
        <div className="flex-1 h-2 bg-surface-subtle border border-border-subtle rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <span className="text-xs font-bold text-primary w-8 text-right font-heading">
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
  )
}
