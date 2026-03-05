import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SliderInputProps {
  value: number;
  onChange: (val: number) => void;
  unit: string;
  units: { id: string; label: string }[];
  onUnitChange: (unit: string) => void;
  min: number;
  max: number;
  step?: number;
}

export function SliderInput({
  value,
  onChange,
  unit,
  units,
  onUnitChange,
  min,
  max,
  step = 1,
}: SliderInputProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const rafId = useRef<number | null>(null);
  const lastTouchX = useRef(0);
  const pendingScrollLeft = useRef<number | null>(null);

  // Ticks width configuration
  const tickWidth = 14; // width per step in pixels
  const ticks: number[] = [];
  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  // Clamp helper
  const clamp = (v: number, lo: number, hi: number) =>
    Math.min(hi, Math.max(lo, v));

  // Derive new value from scrollLeft and notify parent (throttled via RAF)
  const flushScroll = useCallback(() => {
    rafId.current = null;
    if (!scrollRef.current || pendingScrollLeft.current === null) return;
    const scrollLeft = pendingScrollLeft.current;
    pendingScrollLeft.current = null;
    const raw = min + Math.round(scrollLeft / tickWidth) * step;
    const newValue = clamp(raw, min, max);
    if (newValue !== value) onChange(newValue);
  }, [min, max, step, tickWidth, value, onChange]);

  const scheduleFlush = useCallback(
    (scrollLeft: number) => {
      pendingScrollLeft.current = scrollLeft;
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(flushScroll);
      }
    },
    [flushScroll],
  );

  // Set scroll position when external value changes
  useEffect(() => {
    if (scrollRef.current && !isDragging.current) {
      const targetScroll = ((value - min) / step) * tickWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      if (Math.abs(currentScroll - targetScroll) > tickWidth) {
        scrollRef.current.scrollTo({
          left: targetScroll,
          behavior: currentScroll === 0 ? "instant" : "smooth",
        });
      }
    }
  }, [value, min, step, tickWidth]);

  // Cancel pending RAF on unmount
  useEffect(() => {
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  // ─── Native scroll (touch momentum) ─────────────────────────────────────
  const handleScroll = () => {
    if (!scrollRef.current || isDragging.current) return;
    scheduleFlush(scrollRef.current.scrollLeft);
  };

  // ─── Mouse drag ──────────────────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = scrollRef.current!.scrollLeft;
    scrollRef.current!.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      // Snap to closest tick
      const closest =
        Math.round(scrollRef.current.scrollLeft / tickWidth) * tickWidth;
      scrollRef.current.scrollTo({ left: closest, behavior: "smooth" });
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) handleMouseUp();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    const newScroll = clamp(
      startScrollLeft.current - dx,
      0,
      scrollRef.current.scrollWidth,
    );
    scrollRef.current.scrollLeft = newScroll;
    scheduleFlush(newScroll);
  };

  // ─── Touch drag ──────────────────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    lastTouchX.current = e.touches[0].clientX;
    startScrollLeft.current = scrollRef.current!.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    // Prevent vertical scroll from intercepting horizontal drag
    e.stopPropagation();
    const dx = lastTouchX.current - e.touches[0].clientX;
    lastTouchX.current = e.touches[0].clientX;
    const newScroll = clamp(
      scrollRef.current.scrollLeft + dx,
      0,
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth,
    );
    scrollRef.current.scrollLeft = newScroll;
    scheduleFlush(newScroll);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (!scrollRef.current) return;
    // Snap after momentum settles
    setTimeout(() => {
      if (scrollRef.current) {
        const closest =
          Math.round(scrollRef.current.scrollLeft / tickWidth) * tickWidth;
        scrollRef.current.scrollTo({ left: closest, behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 py-4 select-none">
      {/* Visualizador de Valor Central */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-2">
          <motion.span
            key={value}
            initial={{ opacity: 0.8, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-heading font-black text-text-primary tabular-nums tracking-tighter"
          >
            {value}
          </motion.span>
          <span className="text-2xl md:text-3xl font-heading font-bold text-text-primary">
            {unit}
          </span>
        </div>

        {/* Toggle de Unidades */}
        <div className="flex items-center gap-1 mt-6 p-1 bg-surface-section rounded-full border border-border-default shadow-sm">
          {units.map((u) => (
            <button
              key={u.id}
              onClick={() => onUnitChange(u.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                unit === u.id
                  ? "bg-primary text-white shadow-md font-bold"
                  : "text-text-secondary hover:text-text-primary",
              )}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>

      {/* Régua Interativa — largura 100% */}
      <div className="relative w-full overflow-hidden mt-6 pb-4">
        {/* Ponteiro central */}
        <div className="absolute left-1/2 top-0 bottom-4 w-[2px] bg-primary -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center justify-end">
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-primary translate-y-1" />
        </div>

        {/* Container scrollável */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full overflow-x-auto no-scrollbar flex h-24 items-end cursor-grab border-b-2 border-border"
          style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {/* Espaçadores para centralizar min/max */}
          <div className="shrink-0 w-1/2" />

          {ticks.map((tick) => {
            const isTens = tick % 10 === 0;
            return (
              <div
                key={tick}
                className="shrink-0 flex flex-col relative items-center justify-end"
                style={{ width: `${tickWidth}px`, height: "100%" }}
              >
                <div
                  className={cn(
                    "w-[1.5px] rounded-t-sm",
                    isTens ? "h-6 bg-text-muted" : "h-3 bg-border-disabled",
                  )}
                />
                {isTens ? (
                  <span className="absolute -bottom-6 text-sm font-heading font-medium text-text-secondary">
                    {tick}
                  </span>
                ) : null}
              </div>
            );
          })}

          <div className="shrink-0 w-1/2" />
        </div>

        {/* Fade lateral */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-surface-card to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-surface-card to-transparent pointer-events-none" />
      </div>

      {/* Instrução — contraste aumentado */}
      <p className="text-center text-sm font-semibold text-text-secondary uppercase tracking-widest">
        ← Deslize para ajustar →
      </p>
    </div>
  );
}
