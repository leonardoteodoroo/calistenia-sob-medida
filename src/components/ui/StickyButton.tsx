import * as React from "react";
import { Button, type ButtonProps } from "./Button";
import { cn } from "../../lib/utils";

export interface StickyButtonProps extends ButtonProps {
  helperText?: React.ReactNode;
  shellClassName?: string;
}

const StickyButton = React.forwardRef<HTMLButtonElement, StickyButtonProps>(
  (
    {
      children,
      className,
      helperText,
      shellClassName,
      fullWidth = true,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="fixed inset-x-0 bottom-0 z-30 pb-[calc(env(safe-area-inset-bottom,0px)+1rem)] pt-3 pointer-events-none">
        <div
          className={cn(
            "pointer-events-auto w-full rounded-t-[28px] border border-primary/10 border-x-0 border-b-0 bg-white/95 px-4 pb-4 pt-3 shadow-[0_-12px_40px_rgba(44,122,123,0.16)] backdrop-blur-md sm:mx-auto sm:max-w-3xl sm:rounded-[28px] sm:border sm:p-3",
            shellClassName,
          )}
        >
          {helperText && (
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              {helperText}
            </p>
          )}

          <Button
            ref={ref}
            fullWidth={fullWidth}
            className={cn("min-h-[56px] rounded-2xl", className)}
            {...props}
          >
            {children}
          </Button>
        </div>
      </div>
    );
  },
);

StickyButton.displayName = "StickyButton";

export { StickyButton };
