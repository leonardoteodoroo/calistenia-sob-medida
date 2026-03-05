import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import bgMosaic from "../../assets/images/mosaico_muitas_miniaturas_brasileiras_45_50_v1_1.webp";

// ─── Design System Tokens ──────────────────────────────
const DS_TEAL = '#2C7A7B'
const DS_ROSE = '#ee2b5b'

type Review = {
  name: string;
  age: number;
  location: string;
  text: string;
};

const reviewsRow1: Review[] = [
  { name: "Carla", age: 41, location: "SP", text: "Voltei a colocar roupa sem pensar na barriga o dia inteiro." },
  { name: "Fernanda", age: 33, location: "RJ", text: "10–15 min por dia e já senti diferença na postura." },
  { name: "Juliana", age: 38, location: "BH", text: "Eu achava que precisava de academia. Em casa funcionou." },
  { name: "Patrícia", age: 45, location: "Curitiba", text: "Comecei do zero, sem força. O plano foi no meu ritmo." },
  { name: "Camila", age: 29, location: "Goiânia", text: "Minha energia à tarde melhorou MUITO nas primeiras semanas." },
  { name: "Renata", age: 36, location: "Recife", text: "Me senti mais firme e confiante com as roupas." },
  { name: "Marina", age: 34, location: "MG", text: "Nunca consegui fazer academia. Em 3 semanas senti o corpo firme." },
  { name: "Luciana", age: 42, location: "SP", text: "Achei que ia ser difícil. Comecei do zero e as dores sumiram!" },
];

const reviewsRow2: Review[] = [
  { name: "Aline", age: 34, location: "Salvador", text: "Parecia impossível manter constância. O plano deixou simples." },
  { name: "Débora", age: 39, location: "Brasília", text: "As dores de ficar o dia sentada diminuíram com os exercícios." },
  { name: "Bruna", age: 31, location: "POA", text: "Fiz sem equipamento. Só segui o passo a passo." },
  { name: "Tatiane", age: 44, location: "Interior SP", text: "Eu vivia recomeçando. Dessa vez consegui manter." },
  { name: "Amanda", age: 27, location: "Fortaleza", text: "Treino curto, objetivo e sem inventar moda." },
  { name: "Sandra", age: 48, location: "Manaus", text: "Eu só precisava de um plano que coubesse na minha vida." },
  { name: "Camila", age: 29, location: "RJ", text: "Os treinos de 15 minutos salvaram minha rotina." },
  { name: "Rafaela", age: 27, location: "SC", text: "Melhor decisão que tomei. Com peso do corpo ganhei muita força." },
];

const ticker1 = [...reviewsRow1, ...reviewsRow1, ...reviewsRow1];
const ticker2 = [...reviewsRow2, ...reviewsRow2, ...reviewsRow2];

const TICKER_MASK = 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'

// Cards com glassmorphism — agora otimizados para fundo brilhante da imagem
function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="flex-shrink-0 w-[250px] flex flex-col gap-2 py-3 px-4 rounded-xl select-none"
      style={{
        background: 'rgba(255,255,255,0.85)', // Mais sólido para contraste
        border: '1px solid rgba(0,0,0,0.05)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <p
        className="text-[13px] text-zinc-900 italic leading-snug pointer-events-none line-clamp-3"
        style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
      >
        "{review.text}"
      </p>
      <div className="flex items-center pointer-events-none mt-auto pl-1">
        <span className="text-[10px] text-zinc-500 leading-none truncate">
          <strong className="text-zinc-800 font-bold">{review.name}</strong> — {review.age} anos, {review.location}
        </span>
      </div>
    </div>
  );
}

function TickerRow({
  reviews,
  direction = "left",
  speed = 1.5,
}: {
  reviews: Review[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const baseVelocity = direction === "left" ? -speed : speed;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth;
    if (totalWidth > 0) setContentWidth(totalWidth / 3);
    if (direction === "right") x.set(-totalWidth / 3);
  }, [direction, x]);

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || !contentWidth || isPaused) return;
    const moveBy = baseVelocity * (delta / 16);
    const currentX = x.get();
    let newX = currentX + moveBy;
    if (direction === "left") {
      if (newX <= -contentWidth) newX += contentWidth;
      else if (newX > 0) newX -= contentWidth;
    } else {
      if (newX >= 0) newX -= contentWidth;
      else if (newX < -contentWidth) newX += contentWidth;
    }
    x.set(newX);
  });

  return (
    <div
      className="relative w-full"
      style={{ overflow: 'hidden', maskImage: TICKER_MASK, WebkitMaskImage: TICKER_MASK }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex items-stretch gap-3 pl-4 w-max will-change-transform"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        onDragStart={() => setIsPaused(true)}
        onDragEnd={() => setIsPaused(false)}
        dragElastic={0.1}
        dragMomentum={false}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </motion.div>
    </div>
  );
}

export function Step14_WallOfLove({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="relative flex flex-col w-full min-w-0 max-w-full overflow-hidden" style={{ background: '#FAF9F6' }}>

      {/* ── Foto de fundo (ocupa toda a section) ─────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={bgMosaic}
          alt=""
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(3px)', transform: 'scale(1.04)', opacity: 0.9 }}
        />
        {/* Camada levíssima para conforto visual dos cards e uniformidade */}
        <div className="absolute inset-0" style={{ background: 'rgba(250,249,246,0.2)' }} />
      </div>

      {/* ── Gradiente DE CIMA (Editorial long-fade) ──────────── */}
      {/*
        - Afeta apenas o topo, chegando forte a 30% pra cobrir o texto
        - Para em 40% (justamente ONDE COMEÇAM OS TICKERS)
      */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '42%',
          background: 'linear-gradient(to bottom, rgba(250,249,246,1) 0%, rgba(250,249,246,0.95) 25%, rgba(250,249,246,0.6) 75%, rgba(250,249,246,0) 100%)',
        }}
      />

      {/* ── Gradiente DE BAIXO (Editorial longo) ────────────── */}
      {/*
        - Chega forte até 20% para cobrir o texto do CTA
        - Para em 35% (justamente ONDE TERMINAM OS TICKERS em mobile)
      */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '38%',
          background: 'linear-gradient(to top, rgba(250,249,246,1) 0%, rgba(250,249,246,0.95) 30%, rgba(250,249,246,0.6) 75%, rgba(250,249,246,0) 100%)',
        }}
      />

      {/* ── Conteúdo (acima de todos os overlays) ────────── */}
      <div className="relative z-20 flex flex-col py-10 md:py-14 gap-8">

        {/* Cabeçalho — sobre zona branca → cores escuras */}
        <div className="max-w-xl mx-auto px-4 w-full text-center">
          <h2 className="text-2xl md:text-4xl font-black text-zinc-900 mb-3 leading-tight">
            Elas{" "}
            <span className="relative inline-block" style={{ color: DS_ROSE }}>
              começaram do zero
              <svg
                className="absolute w-full h-3 -bottom-1 left-0"
                style={{ color: `${DS_ROSE}88` }}
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
            . E continuaram.
          </h2>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
            A cada etapa, você vai entender por que o seu plano precisa ser{" "}
            <strong>simples</strong>, <strong>curto</strong> e <strong>progressivo</strong>.
          </p>
        </div>

        {/* Tickers — zona onde a FOTO aparece */}
        <div className="w-full flex flex-col gap-3 overflow-hidden">
          <TickerRow reviews={ticker1} direction="left" speed={1.5} />
          <TickerRow reviews={ticker2} direction="right" speed={1.5} />
        </div>

        {/* CTA Card — sobre zona branca → cores escuras */}
        <div className="max-w-xl mx-auto px-4 w-full">
          <div
            className="rounded-xl p-5 text-center"
            style={{
              background: 'rgba(255,255,255,0.92)',
              border: `1px solid rgba(44,122,123,0.2)`,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <h3 className="text-base md:text-lg font-black text-zinc-900 mb-2">
              A sacada mais importante:
            </h3>

            <p
              className="text-zinc-600 mb-4 text-sm"
              style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}
            >
              Você não precisa de "motivação perfeita".{" "}
              <span
                className="font-black"
                style={{ color: DS_TEAL, overflowWrap: 'break-word', wordBreak: 'break-word' }}
              >
                Você precisa de um plano que caiba na sua vida.
              </span>
            </p>

            <div className="flex flex-col gap-2 text-sm text-zinc-600 max-w-xs mx-auto text-left mb-5">
              {[
                "Treino curto (10–20 min) pra você manter.",
                "Progressão simples pra você evoluir sem frustração.",
                "Sem equipamento pra você começar hoje.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={3} style={{ color: DS_TEAL }} />
                  <span style={{ overflowWrap: 'break-word' }}>{item}</span>
                </div>
              ))}
            </div>

            <Button
              variant="strong"
              size="lg"
              onClick={onContinue}
              className="group rounded-xl flex items-center gap-2 mx-auto w-full md:w-auto"
            >
              <span>Ok. Quero continuar →</span>
            </Button>
          </div>
        </div>

      </div>

    </section>
  );
}
