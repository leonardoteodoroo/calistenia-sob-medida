import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  PROCESSING_MARQUEE_LAYOUT,
  PROCESSING_TESTIMONIAL_COLUMNS,
  type ProcessingTestimonial,
} from "../steps/Step21_ProcessingContent";

type TestimonialCardProps = {
  testimonial: ProcessingTestimonial;
};

type MarqueeColumnProps = {
  testimonials: readonly ProcessingTestimonial[];
  reverse?: boolean;
  duration: number;
  staticMode: boolean;
  offsetClassName?: string;
  hiddenOnMobile?: boolean;
};

const COLUMN_DURATIONS = [26, 24, 28, 22] as const;
const COLUMN_OFFSETS = [
  "translate-y-2 sm:translate-y-5",
  "-translate-y-1 sm:-translate-y-3",
  "translate-y-4 sm:translate-y-8",
  "translate-y-0 sm:translate-y-2",
] as const;

function Avatar({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full bg-primary/10 ring-1 ring-primary/10 sm:h-9 sm:w-9">
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={testimonial.altText}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-primary">
          {testimonial.name[0]}
        </span>
      )}
    </div>
  );
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className={`${PROCESSING_MARQUEE_LAYOUT.cardWidthClassName} rounded-[20px] border border-black/5 bg-[#fffdf9] p-2.5 shadow-[0_10px_26px_rgba(32,57,58,0.07)] sm:rounded-[22px] sm:p-3.5 sm:shadow-[0_12px_32px_rgba(32,57,58,0.08)]`}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        <Avatar testimonial={testimonial} />

        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-text-primary sm:text-sm">
            {testimonial.name}
          </p>
          <p className="truncate text-[9px] uppercase tracking-[0.1em] text-primary/75 sm:text-[10px] sm:tracking-[0.12em]">
            {testimonial.location}
          </p>
        </div>
      </div>

      <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-text-muted sm:mt-2.5 sm:text-[9px] sm:tracking-[0.18em]">
        {testimonial.status}
      </p>

      <blockquote className="mt-1 text-[10px] leading-[1.38] text-text-secondary sm:mt-1.5 sm:text-[13px] sm:leading-[1.45]">
        {testimonial.quote}
      </blockquote>
    </article>
  );
}

function MarqueeColumn({
  testimonials,
  reverse = false,
  duration,
  staticMode,
  offsetClassName = "",
  hiddenOnMobile = false,
}: MarqueeColumnProps) {
  const items = staticMode ? testimonials : [...testimonials, ...testimonials];

  return (
    <div
      className={[
        `relative overflow-hidden ${PROCESSING_MARQUEE_LAYOUT.cardWidthClassName} ${PROCESSING_MARQUEE_LAYOUT.columnHeightClassName}`,
        offsetClassName,
        hiddenOnMobile ? "hidden sm:block" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {staticMode ? (
        <div className="flex flex-col gap-3">
          {items.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.location}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      ) : (
        <motion.div
          animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex min-h-full flex-col gap-3"
        >
          {items.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${testimonial.location}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

export function ProcessingTestimonials3D() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <React.Fragment>
      <section
        aria-label="Resultados reais de quem começou com treinos curtos em casa"
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"
      >
        <div
          className="relative w-full overflow-hidden py-1"
          style={{
            paddingLeft: "max(env(safe-area-inset-left), 4px)",
            paddingRight: "max(env(safe-area-inset-right), 4px)",
          }}
        >
          <div className="flex justify-center [perspective:1280px]">
            <div
              className={`flex w-max items-start gap-2.5 sm:gap-3 ${PROCESSING_MARQUEE_LAYOUT.stackScaleClassName}`}
              style={{
                transform:
                  "translateY(0px) translateZ(-120px) rotateX(10deg) rotateY(-5deg) rotateZ(3deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {PROCESSING_TESTIMONIAL_COLUMNS.map((column, index) => (
                <MarqueeColumn
                  key={`processing-column-${index}`}
                  testimonials={column}
                  duration={COLUMN_DURATIONS[index] ?? 24}
                  reverse={index % 2 === 1}
                  staticMode={Boolean(shouldReduceMotion)}
                  offsetClassName={COLUMN_OFFSETS[index] ?? ""}
                  hiddenOnMobile={
                    index >= PROCESSING_MARQUEE_LAYOUT.mobileVisibleColumns
                  }
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[var(--surface-page)] via-[rgba(250,249,246,0.78)] to-transparent sm:h-16" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--surface-page)] via-[rgba(250,249,246,0.78)] to-transparent sm:h-16" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[var(--surface-page)] via-[rgba(250,249,246,0.84)] to-transparent sm:w-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[var(--surface-page)] via-[rgba(250,249,246,0.84)] to-transparent sm:w-10" />
        </div>
      </section>
    </React.Fragment>
  );
}
