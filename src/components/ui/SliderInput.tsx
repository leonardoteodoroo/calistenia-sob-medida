import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface SliderInputProps {
  value: number
  onChange: (val: number) => void
  unit: string
  units: { id: string; label: string }[]
  onUnitChange: (unit: string) => void
  min: number
  max: number
  step?: number
}

export function SliderInput({
  value,
  onChange,
  unit,
  units,
  onUnitChange,
  min,
  max,
  step = 1
}: SliderInputProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)

  // Ticks width configuration
  const tickWidth = 14 // width per step in pixels
  const ticks = []

  for (let i = min; i <= max; i += step) {
    ticks.push(i)
  }

  // Set initial scroll position or external value changes
  useEffect(() => {
    if (scrollRef.current && !isDragging.current) {
      const targetScroll = ((value - min) / step) * tickWidth
      const currentScroll = scrollRef.current.scrollLeft

      // Apenas forçamos scroll se houver forte diferença
      if (Math.abs(currentScroll - targetScroll) > tickWidth) {
        scrollRef.current.scrollTo({
          left: targetScroll,
          behavior: currentScroll === 0 ? 'instant' : 'smooth'
        })
      }
    }
  }, [value, min, max, step, tickWidth])

  const handleScroll = () => {
    if (!scrollRef.current) return
    const scrollLeft = scrollRef.current.scrollLeft

    let newValue = min + Math.round(scrollLeft / tickWidth) * step
    if (newValue < min) newValue = min
    if (newValue > max) newValue = max

    if (value !== newValue) {
      onChange(newValue)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current!.offsetLeft
    startScrollLeft.current = scrollRef.current!.scrollLeft

    // Adicionar cursor estilo grabbing ao container
    scrollRef.current!.style.cursor = 'grabbing'
  }

  const handleMouseLeave = () => {
    isDragging.current = false
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab'
  }

  const handleMouseUp = () => {
    isDragging.current = false
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab'
      // Snap to closest tick when releasing drag
      const scrollLeft = scrollRef.current.scrollLeft
      const closestScroll = Math.round(scrollLeft / tickWidth) * tickWidth
      scrollRef.current.scrollTo({ left: closestScroll, behavior: 'smooth' })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current!.offsetLeft
    const walk = (x - startX.current) * 1.5 // multiplier para dar sensação mais fluida
    scrollRef.current!.scrollLeft = startScrollLeft.current - walk
  }

  // To snap on touch interfaces when scrolling strictly stops
  const handleTouchEnd = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const closestScroll = Math.round(scrollLeft / tickWidth) * tickWidth
      // setTimeout to allow scrolling momentum to finish
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ left: closestScroll, behavior: 'smooth' })
        }
      }, 150)
    }
  }

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
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {u.label}
            </button>
          ))}
        </div>
      </div>

      {/* Régua Interativa */}
      <div className="relative w-full overflow-hidden mt-6 pb-4">

        {/* Pointer (Ponteiro Laranja) */}
        <div className="absolute left-1/2 top-0 bottom-4 w-[2px] bg-primary -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center justify-end">
          {/* Triângulo apontando para cima na parte inferior do pointer */}
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-primary translate-y-1"></div>
        </div>

        {/* Container Scrollável da Fita */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchEnd={handleTouchEnd}
          className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex h-24 items-end cursor-grab border-b-2 border-border"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {/* Espaçadores Start/End para poder centralizar o Min e Max */}
          <div className="shrink-0 w-1/2" />

          {ticks.map((tick) => {
            // Em uma fita métrica/régua normal, dezenas e metades têm indicadores maiores
            // Porém o usuário pode estar usando outras métricas;
            // Assumindo step 1: 10 em 10, 5 em 5.
            const isTens = tick % 10 === 0

            return (
              <div
                key={tick}
                className="shrink-0 flex flex-col relative items-center justify-end snap-center"
                style={{ width: `${tickWidth}px`, height: '100%' }}
              >
                {/* Linha (Tick) */}
                <div
                  className={cn(
                    "w-[1.5px] rounded-t-sm transition-colors",
                    isTens ? "h-6 bg-text-muted" : "h-3 bg-border-disabled"
                  )}
                />

                {/* Etiqueta Numérica */}
                {isTens ? (
                  <span className="absolute -bottom-6 text-sm font-heading font-medium text-text-secondary">
                    {tick}
                  </span>
                ) : null}
              </div>
            )
          })}

          <div className="shrink-0 w-1/2" />
        </div>

        {/* Sombras laterais simulando Fade gradient */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-surface-card to-transparent pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-surface-card to-transparent pointer-events-none" />
      </div>

      <p className="text-center text-sm font-medium text-text-muted mt-2 uppercase tracking-widest opacity-70">
        Deslize para ajustar
      </p>

    </div>
  )
}
