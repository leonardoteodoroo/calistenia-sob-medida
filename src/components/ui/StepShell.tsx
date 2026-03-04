import React from "react";

export type StepShellProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  primaryCta?: string;
  onPrimary?: () => void;
  secondaryCta?: string;
  onSecondary?: () => void;
  disablePrimary?: boolean;
};

export const StepShell: React.FC<StepShellProps> = ({
  eyebrow,
  title,
  subtitle,
  children,
  primaryCta = "Continuar",
  onPrimary,
  secondaryCta,
  onSecondary,
  disablePrimary,
}) => {
  return (
    <section className="w-full px-4 py-4 sm:py-6">
      <div className="max-w-xl mx-auto">
        {eyebrow && (
          <div className="mb-3">
            <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-zinc-900 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-zinc-600 text-base sm:text-lg mt-3 leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-5">{children}</div>

        {(onPrimary || onSecondary) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {onPrimary && (
              <button
                type="button"
                onClick={onPrimary}
                disabled={disablePrimary}
                className={`inline-flex items-center justify-center rounded-2xl font-extrabold px-6 py-4 transition-all shadow-lg w-full sm:w-auto ${disablePrimary
                  ? "bg-zinc-200 text-zinc-500 cursor-not-allowed shadow-none"
                  : "text-white"
                  }`}
                style={!disablePrimary ? { background: '#2C7A7B', boxShadow: '0 8px 20px -4px rgba(44,122,123,0.3)' } : undefined}
              >
                {primaryCta}
              </button>
            )}
            {onSecondary && secondaryCta && (
              <button
                type="button"
                onClick={onSecondary}
                className="inline-flex items-center justify-center rounded-2xl font-extrabold px-6 py-4 transition-all w-full sm:w-auto border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900"
              >
                {secondaryCta}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
