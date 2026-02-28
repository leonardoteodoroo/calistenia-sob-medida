import * as React from "react"

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils"

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "strong"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", fullWidth, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-md)] text-sm font-heading font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background",
          {
            "bg-primary text-text-inverse hover:bg-primary-hover shadow-md hover:shadow-lg": variant === "primary",
            "bg-strong text-text-inverse hover:bg-strong-hover shadow-cta": variant === "strong",
            "border-2 border-primary bg-transparent text-primary hover:bg-primary/5 hover:border-primary-hover": variant === "secondary",
            "h-12 px-6 py-2": size === "default",
            "h-9 px-4 rounded-[var(--radius-sm)] text-xs": size === "sm",
            "h-14 px-8 rounded-[var(--radius-lg)] text-base": size === "lg",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
