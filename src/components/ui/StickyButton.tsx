import * as React from "react";
import { Button, type ButtonProps } from "./Button";
import { cn } from "../../lib/utils";

export interface StickyButtonProps extends ButtonProps {
  shellClassName?: string;
}

const StickyButton = React.forwardRef<HTMLButtonElement, StickyButtonProps>(
  (
    {
      children,
      className,
      shellClassName,
      fullWidth = true,
      animate,
      transition,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="fixed inset-x-0 bottom-0 z-30 px-4 pb-[calc(env(safe-area-inset-bottom,0px)+0.75rem)] pt-3 pointer-events-none sm:px-0">
        <div
          className={cn(
            "pointer-events-auto mx-auto w-full sm:max-w-3xl",
            shellClassName,
          )}
        >
          <Button
            ref={ref}
            fullWidth={fullWidth}
            animate={
              animate ?? {
                scale: [1, 1.008, 1],
                boxShadow: [
                  "0 12px 30px rgba(44,122,123,0.18)",
                  "0 14px 34px rgba(44,122,123,0.24)",
                  "0 12px 30px rgba(44,122,123,0.18)",
                ],
              }
            }
            transition={
              transition ?? {
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }
            className={cn(
              "min-h-[56px] rounded-2xl shadow-[0_12px_30px_rgba(44,122,123,0.22)]",
              className,
            )}
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
