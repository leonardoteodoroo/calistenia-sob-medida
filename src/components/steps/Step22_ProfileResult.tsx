import { motion } from "framer-motion";
import {
  ArrowRight,
  Flame,
  Quote,
  ShieldCheck,
  Star,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react";
import imgSusanBeforeAfter from "../../assets/images/antes_depois_susan_14kg.webp";
import { buildQuizProfile } from "../../lib/quizProfile";
import type { StepProps } from "../../types";
import { StickyButton } from "../ui/StickyButton";

function getScoreTone(value: number) {
  if (value >= 75) return "text-emerald-600 bg-emerald-50 border-emerald-100";
  if (value >= 56) return "text-amber-600 bg-amber-50 border-amber-100";
  return "text-rose-600 bg-rose-50 border-rose-100";
}

export const Step22_ProfileResult: React.FC<StepProps> = ({
  onNext,
  answers,
}) => {
  const profile = buildQuizProfile(answers ?? {});
  const userName = answers?.nome?.trim();
  const scoreCards = [
    {
      label: "Consistência",
      value: profile.scores.consistency,
      detail:
        "Mostra o quanto seu plano precisa reduzir atrito para você manter o ritmo.",
      icon: Target,
    },
    {
      label: "Recuperação e Energia",
      value: profile.scores.recovery,
      detail:
        "Lê seu nível de energia atual para calibrar intensidade sem te sugar.",
      icon: Zap,
    },
    {
      label: "Direção de Emagrecimento",
      value: profile.scores.fatLossDirection,
      detail:
        "Aponta o quão claro está o caminho para destravar resposta visível no corpo.",
      icon: Flame,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-lg flex-col gap-6 py-8 pb-[calc(env(safe-area-inset-bottom,0px)+5rem)]"
    >
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-strong/10 px-6 py-8 text-center shadow-[0_24px_80px_rgba(44,122,123,0.12)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Análise concluída
        </p>

        <motion.div
          initial={{ scale: 0.84, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-white/80 shadow-sm"
        >
          <Target className="h-10 w-10 text-primary" />
        </motion.div>

        <h1 className="text-3xl font-heading font-bold text-text-primary">
          {userName
            ? `${userName}, seu perfil foi detectado`
            : "Seu perfil foi detectado"}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          {profile.summary}
        </p>
        <div className="mt-5 inline-flex rounded-full bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {profile.profileLabel}
        </div>
      </div>

      <section className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-heading font-bold text-text-primary">
            Seu scorecard inicial
          </h2>
        </div>

        <div className="space-y-4">
          {scoreCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.label}
                className="rounded-2xl border border-border bg-surface-subtle p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`rounded-2xl border px-3 py-2 text-center ${getScoreTone(card.value)}`}
                  >
                    <div className="text-2xl font-black leading-none">
                      {card.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                      de 100
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <h2 className="text-xl font-heading font-bold text-text-primary">
          Principal trava detectada
        </h2>
        <p className="mt-3 text-base font-semibold text-primary">
          {profile.mainObstacleLabel}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {profile.mainObstacleDetail}
        </p>
      </section>

      <section className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <h2 className="text-xl font-heading font-bold text-text-primary">
          O que seu plano vai priorizar agora
        </h2>
        <div className="mt-4 space-y-3">
          <div className="rounded-2xl bg-surface-subtle p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Direção inicial
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {profile.promiseText}
            </p>
          </div>

          <div className="rounded-2xl bg-primary/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Foco dos próximos 14 dias
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {profile.next14DayFocus}
            </p>
          </div>

          {profile.weightProjectionText && (
            <div className="rounded-[28px] border border-primary/10 bg-white px-4 py-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <TrendingDown className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Projeção calculada
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-primary">
                    {profile.weightProjectionText}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="rounded-[32px] border border-primary/15 bg-gradient-to-br from-white via-primary/5 to-strong/5 p-6 shadow-[0_20px_50px_rgba(44,122,123,0.08)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Antes e depois real
            </p>
            <h2 className="mt-2 text-xl font-heading font-bold text-text-primary">
              Dona Celia perdeu 14 kg
            </h2>
          </div>

          <div className="inline-flex items-center gap-1 rounded-full border border-primary/10 bg-white px-3 py-2 text-primary shadow-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-3.5 w-3.5 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Manter o foco pode ser difícil, mas com o nosso guia, simplifica tudo.
        </p>

        <div className="mt-5 overflow-hidden rounded-[24px] border border-border bg-white shadow-sm">
          <div className="border-b border-border bg-surface-subtle px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
              Evolução guiada em casa
            </p>
          </div>

          <div className="relative">
            <img
              src={imgSusanBeforeAfter}
              alt="Antes e depois da Dona Celia mostrando o progresso em 3 meses"
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg">
              Progresso de 3 meses
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Quote className="h-4 w-4" />
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Se funcionou para Dona Celia, pode funcionar para voce tambem.
              Conte com a gente para simplificar o caminho, respeitar o seu
              ritmo e manter sua consistencia no dia a dia.
            </p>
          </div>
        </div>
      </section>

      <StickyButton
        variant="strong"
        size="lg"
        onClick={() => onNext?.()}
        className="gap-2 uppercase tracking-wide"
      >
        Ver meu plano completo
        <ArrowRight className="h-5 w-5" />
      </StickyButton>
    </motion.div>
  );
};
