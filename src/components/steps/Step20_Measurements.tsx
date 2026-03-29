import React, { useState, useRef } from "react";
import { StepShell } from "../ui/StepShell";
import { motion, AnimatePresence } from "framer-motion";

// ─── Tokens do Design System ────────────────────────────
const DS = {
  teal: "#2C7A7B",
  rose: "#D53F8C",
  text: "#2D3748",
  textSecondary: "#4A5568",
  textMuted: "#A0AEC0",
  surfaceSection: "#F3EFEA",
  card: "#FFFFFF",
  border: "#E2E8F0",
};

const MASK =
  "linear-gradient(to right, transparent, black 14%, black 86%, transparent)";

// ─── Ghost Finger (Opção A) — loop até interação ────────
const GhostFinger: React.FC<{ color: string }> = ({ color }) => (
  <motion.div
    className="absolute pointer-events-none z-30 top-1/2 -translate-y-1/2"
    style={{
      width: 42,
      height: 42,
      borderRadius: "50%",
      background: `${color}28`,
      border: `2px solid ${color}77`,
      left: "calc(50% - 20px)",
    }}
    animate={{
      x: ["-18px", "18px", "-18px"],
      opacity: [0.25, 0.85, 0.25],
    }}
    transition={{
      duration: 1.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
);

// ─── RulerSlider ─────────────────────────────────────────
interface RulerSliderProps {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  onChange: (v: number) => void;
  accentColor?: string;
  showHint?: boolean;
  showGhost?: boolean;
}

const RulerSlider: React.FC<RulerSliderProps> = ({
  label,
  value,
  unit,
  min,
  max,
  onChange,
  accentColor = DS.teal,
  showHint = false,
  showGhost = false,
}) => {
  // ── Drag via PointerEvents — valor nunca salta ────────
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const startValue = useRef(value);
  const PX_PER_UNIT = 8; // pixels necessários para mudar 1 unidade

  const range = 18;
  const tickMin = Math.max(min, value - range);
  const tickMax = Math.min(max, value + range);
  const ticks = Array.from(
    { length: tickMax - tickMin + 1 },
    (_, i) => tickMin + i,
  );

  return (
    <div className="flex flex-col gap-2">
      {/* Label + valor numérico */}
      <div className="flex justify-between items-end">
        <span
          className="text-sm font-bold uppercase tracking-widest"
          style={{ color: DS.textSecondary }}
        >
          {label}
        </span>
        <div className="flex items-baseline gap-1">
          <span
            className="text-3xl font-bold tabular-nums leading-none"
            style={{ color: DS.text, fontFamily: "'Merriweather', serif" }}
          >
            {value}
          </span>
          <span
            className="text-xs font-bold uppercase"
            style={{ color: accentColor }}
          >
            {unit}
          </span>
        </div>
      </div>

      {/* Ruler container */}
      <div className="relative">
        {/* Ticks visuais (pointer-events: none) */}
        <div
          className="relative h-12 flex items-end pb-1 overflow-hidden pointer-events-none"
          style={{
            background: DS.card,
            border: `1px solid ${DS.border}`,
            borderRadius: 10,
            maskImage: MASK,
            WebkitMaskImage: MASK,
          }}
        >
          {/* Pino central */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] h-full z-10"
            style={{
              background: accentColor,
              boxShadow: `0 0 8px ${accentColor}99`,
            }}
          />
          {/* Ticks */}
          <div className="flex items-end gap-[9px] w-full justify-center px-2">
            {ticks.map((t) => {
              const isCurrent = t === value;
              const h = isCurrent ? 26 : t % 5 === 0 ? 18 : 10;
              return (
                <div
                  key={t}
                  style={{
                    width: 1.5,
                    height: h,
                    flexShrink: 0,
                    borderRadius: 2,
                    background: isCurrent ? accentColor : "#CBD5E0",
                    opacity: isCurrent ? 1 : 0.55,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Ghost finger — loop até primeira interação */}
        <AnimatePresence>
          {showGhost && <GhostFinger color={accentColor} />}
        </AnimatePresence>

        {/* Área de drag — touch-action:none impede scroll; setPointerCapture mantém eventos mesmo fora do elemento */}
        <div
          aria-label={label}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          tabIndex={0}
          className="absolute inset-0 z-20"
          style={{
            touchAction: "none",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onPointerDown={(e) => {
            isDraggingRef.current = true;
            setIsDragging(true);
            startX.current = e.clientX;
            startValue.current = value;
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            if (!isDraggingRef.current) return;
            const delta = Math.round(
              (e.clientX - startX.current) / PX_PER_UNIT,
            );
            const next = Math.min(
              max,
              Math.max(min, startValue.current + delta),
            );
            onChange(next);
          }}
          onPointerUp={(e) => {
            isDraggingRef.current = false;
            setIsDragging(false);
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onPointerCancel={(e) => {
            isDraggingRef.current = false;
            setIsDragging(false);
            e.currentTarget.releasePointerCapture(e.pointerId);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") onChange(Math.min(max, value + 1));
            if (e.key === "ArrowLeft") onChange(Math.max(min, value - 1));
          }}
        />
      </div>

      {/* Opção 2 — numerais nos múltiplos de 10 */}
      <div style={{ maskImage: MASK, WebkitMaskImage: MASK }}>
        <div className="flex gap-[9px] justify-center px-2">
          {ticks.map((t) => (
            <div
              key={t}
              style={{
                width: 1.5,
                flexShrink: 0,
                position: "relative",
                height: 14,
              }}
            >
              {t % 10 === 0 && (
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: 9,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    color: t === value ? accentColor : DS.textMuted,
                    fontWeight: t === value ? 700 : 500,
                  }}
                >
                  {t}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hint textual fixo para reforçar o gesto mesmo após o primeiro ajuste */}
      <AnimatePresence>
        {showHint && (
          <motion.p
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="text-center text-[11px] font-medium select-none"
            style={{ color: DS.textMuted, letterSpacing: "0.05em" }}
          >
            ‹ deslize para ajustar ›
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Componente principal ────────────────────────────────
export const Step20_Measurements: React.FC<{
  onNext: (val: string) => void;
}> = ({ onNext }) => {
  const [height, setHeight] = useState(165);
  const [weight, setWeight] = useState(70);
  const [idealWeight, setIdealWeight] = useState(60);
  const [firstName, setFirstName] = useState("");
  const [hasInteracted, setHasInteracted] = useState(false);

  const interact = (setter: (v: number) => void) => (v: number) => {
    if (!hasInteracted) setHasInteracted(true);
    setter(v);
  };

  const delta = weight - idealWeight;
  const deltaLabel =
    delta > 0
      ? `−${delta} kg até sua meta`
      : delta === 0
        ? "Você já está na meta! 🎯"
        : `+${Math.abs(delta)} kg abaixo da meta`;

  const progressPct = Math.min(100, Math.max(5, (idealWeight / weight) * 100));
  const imc = weight / (height / 100) ** 2;

  return (
    <StepShell
      title="Suas Medidas"
      subtitle="Deslize cada régua para calibrar seu plano personalizado."
    >
      <div className="flex flex-col gap-6">
        <RulerSlider
          label="Sua Altura"
          value={height}
          unit="cm"
          min={140}
          max={220}
          onChange={interact(setHeight)}
          accentColor={DS.teal}
          showHint
          showGhost={!hasInteracted}
        />

        <div style={{ height: 1, background: DS.border }} />

        <RulerSlider
          label="Seu Peso Atual"
          value={weight}
          unit="kg"
          min={40}
          max={180}
          onChange={interact(setWeight)}
          accentColor={DS.teal}
          showHint
        />

        <div style={{ height: 1, background: DS.border }} />

        <RulerSlider
          label="Peso Ideal"
          value={idealWeight}
          unit="kg"
          min={40}
          max={150}
          onChange={interact(setIdealWeight)}
          accentColor={DS.rose}
          showHint
        />

        {/* ── BOTÃO sobe aqui — visível sem scroll na maioria dos celulares ── */}
        <button
          type="button"
          disabled={firstName.trim().length < 2}
          onClick={() =>
            onNext(
              JSON.stringify({
                altura: height,
                peso: weight,
                peso_ideal: idealWeight,
                nome: firstName.trim(),
              }),
            )
          }
          className="w-full rounded-2xl font-extrabold px-6 py-4 text-white transition-all shadow-lg disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:text-zinc-500 disabled:shadow-none"
          style={
            firstName.trim().length >= 2
              ? {
                  background: DS.teal,
                  boxShadow: "0 8px 20px -4px rgba(44,122,123,0.3)",
                }
              : undefined
          }
        >
          Ver minha análise
        </button>

        <div
          className="rounded-2xl p-4"
          style={{
            background: DS.card,
            border: `1px solid ${DS.border}`,
            boxShadow: "0 4px 12px rgba(44,122,123,0.07)",
          }}
        >
          <label
            htmlFor="first-name"
            className="mb-2 block text-sm font-bold uppercase tracking-widest"
            style={{ color: DS.textSecondary }}
          >
            Como podemos chamar você?
          </label>
          <input
            id="first-name"
            type="text"
            autoComplete="given-name"
            placeholder="Digite seu primeiro nome"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full rounded-2xl border px-4 py-3 text-base outline-none transition-colors focus:border-teal-700"
            style={{
              borderColor: DS.border,
              color: DS.text,
            }}
          />
          <p
            className="mt-2 text-xs leading-relaxed"
            style={{ color: DS.textMuted }}
          >
            Seu nome aparece na análise final para deixar o plano com cara de
            feito para você.
          </p>
        </div>

        {/* Painel de Projeção — fica abaixo do botão */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
          className="rounded-2xl p-4"
          style={{
            background: DS.card,
            border: `1px solid ${DS.border}`,
            boxShadow: "0 4px 12px rgba(44,122,123,0.07)",
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <p
              className="text-xs font-semibold"
              style={{ color: DS.textSecondary }}
            >
              Jornada Atual → Meta
            </p>
            <span
              className="text-[11px] font-bold py-0.5 px-2 rounded-md"
              style={{ background: DS.surfaceSection, color: DS.textMuted }}
            >
              IMC {imc.toFixed(1)}
            </span>
          </div>

          <div
            className="relative w-full h-2 rounded-full overflow-hidden mb-2"
            style={{ background: DS.border }}
          >
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full"
              animate={{ width: `${progressPct}%` }}
              transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              style={{
                background: `linear-gradient(90deg, ${DS.teal}, ${DS.rose})`,
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <span
              className="text-[11px] font-medium"
              style={{ color: DS.textMuted }}
            >
              {weight} kg hoje
            </span>
            <motion.span
              key={deltaLabel}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] font-bold"
              style={{ color: delta >= 0 ? DS.rose : DS.teal }}
            >
              {deltaLabel}
            </motion.span>
          </div>
        </motion.div>

        <p
          className="text-center text-[11px] font-medium italic"
          style={{ color: DS.textMuted }}
        >
          Cálculos baseados em composição corporal padrão.
        </p>
      </div>
    </StepShell>
  );
};
