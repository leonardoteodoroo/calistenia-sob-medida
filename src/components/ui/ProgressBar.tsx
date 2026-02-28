import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="flex-1 h-2 bg-surface-subtle border border-border-subtle rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
