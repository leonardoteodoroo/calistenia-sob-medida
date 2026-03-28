import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Flame,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react";
import { Button } from "../ui/Button";
import type { StepProps } from "../../types";

function getGoalText(value?: string) {
  switch (value) {
    case "perder_peso":
      return "Perder peso e definir";
    case "manter_peso":
      return "Manter o peso e ficar em forma";
    default:
      return "Saúde e disposição";
  }
}

function getLevelText(
  experience?: string,
  frequency?: string,
  bodyType?: string,
) {
  if (experience === "nao" || frequency === "nunca") {
    return "Iniciante absoluto";
  }

  if (frequency === "3-4" || frequency === "sempre") {
    return "Intermediário";
  }

  if (bodyType === "muito_acima_peso") {
    return "Adaptação progressiva";
  }

  return "Base inicial assistida";
}

function getDailyTimeText(energy?: string, frequency?: string) {
  if (energy === "baixos" || frequency === "nunca") {
    return "15 min/dia";
  }

  if (frequency === "3-4" || frequency === "sempre") {
    return "20 min/dia";
  }

  return "15 a 20 min/dia";
}

function getProfileLabel(
  energy?: string,
  frequency?: string,
  experience?: string,
) {
  if (experience === "nao" || frequency === "nunca") {
    return "Recomeço Inteligente";
  }

  if (energy === "baixos" || energy === "baixa_manha") {
    return "Ritmo Sustentável";
  }

  if (frequency === "3-4" || frequency === "sempre") {
    return "Evolução Acelerada";
  }

  return "Construção de Base";
}

function getProfileSummary(
  energy?: string,
  frequency?: string,
  experience?: string,
) {
  if (experience === "nao" || frequency === "nunca") {
    return "Seu plano começa leve, com adaptação progressiva para evitar travar no início.";
  }

  if (energy === "baixos" || energy === "baixa_manha") {
    return "Sua estratégia inicial prioriza constância, treinos curtos e recuperação para você não perder ritmo.";
  }

  if (frequency === "3-4" || frequency === "sempre") {
    return "Seu plano já pode entrar com progressão mais firme para acelerar definição e resistência.";
  }

  return "Seu plano equilibra adaptação, evolução técnica e rotina real para encaixar sem fricção.";
}

function getPromiseText(goal?: string) {
  if (goal === "perder_peso") {
    return "O foco inicial será reduzir a pochete, melhorar o contorno do corpo e ganhar firmeza sem rotina pesada.";
  }

  return "O foco inicial será melhorar condicionamento, postura e composição corporal sem depender de academia.";
}

function parseWeight(value?: string) {
  if (!value) return null;

  const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function getProjectionText(currentWeight?: string, idealWeight?: string) {
  const current = parseWeight(currentWeight);
  const ideal = parseWeight(idealWeight);

  if (!ideal) return null;
  if (!current || current <= ideal) {
    return `Meta inicial calibrada para ${ideal} kg.`;
  }

  const delta = Math.round((current - ideal) * 10) / 10;
  return `Projeção inicial de ${delta} kg até sua meta de ${ideal} kg.`;
}

export const Step22_ProcessingComplete: React.FC<StepProps> = ({
  onNext,
  answers,
}) => {
  const goalText = getGoalText(answers?.objetivo_principal);
  const levelText = getLevelText(
    answers?.experiencia,
    answers?.frequencia_exercicios,
    answers?.tipo_fisico_atual,
  );
  const dailyTimeText = getDailyTimeText(
    answers?.nivel_energia,
    answers?.frequencia_exercicios,
  );
  const profileLabel = getProfileLabel(
    answers?.nivel_energia,
    answers?.frequencia_exercicios,
    answers?.experiencia,
  );
  const profileSummary = getProfileSummary(
    answers?.nivel_energia,
    answers?.frequencia_exercicios,
    answers?.experiencia,
  );
  const promiseText = getPromiseText(answers?.objetivo_principal);
  const projectionText = getProjectionText(
    answers?.peso_atual,
    answers?.peso_ideal,
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex w-full max-w-lg flex-col gap-6 py-8"
    >
      <div className="rounded-[32px] border border-primary/10 bg-gradient-to-br from-primary/10 via-white to-strong/10 px-6 py-8 text-center shadow-[0_24px_80px_rgba(44,122,123,0.12)]">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Resultado do Processamento
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
          Seu plano base foi encontrado
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          Processamos suas respostas e montamos a trilha inicial com base no seu
          objetivo, energia e ritmo atual.
        </p>
      </div>

      <div className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Seu Perfil Detectado
          </h2>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {profileLabel}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-text-secondary">
          {profileSummary}
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-subtle text-text-secondary">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                Foco Principal
              </p>
              <p className="font-semibold text-text-primary">{goalText}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-subtle text-text-secondary">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                Nível de Adaptação
              </p>
              <p className="font-semibold text-text-primary">{levelText}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-subtle text-text-secondary">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-text-muted">
                Tempo Diário
              </p>
              <p className="font-semibold text-text-primary">{dailyTimeText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-heading font-bold text-text-primary">
          Leitura do seu momento
        </h2>

        <div className="space-y-3">
          <div className="rounded-2xl bg-surface-subtle p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              Estratégia inicial
            </p>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {promiseText}
            </p>
          </div>

          {projectionText && (
            <div className="flex items-start gap-3 rounded-2xl bg-primary/5 p-4">
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <TrendingDown className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Projeção calculada
                </p>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {projectionText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-[32px] border border-border bg-surface-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-heading font-bold text-text-primary">
          O que esperar
        </h2>

        <ul className="space-y-4">
          {[
            {
              title: "Sem sobrecarga",
              text: "Treinos curtos que cabem na sua rotina, sem exigir horas na academia.",
            },
            {
              title: "Direção clara",
              text: "Você não vai improvisar. A progressão já considera seu momento atual e seu objetivo principal.",
            },
            {
              title: "Evolução visível",
              text: "Com consistência, a tendência é sentir mais firmeza, energia e segurança nas próximas semanas.",
            },
          ].map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary">{item.title}:</strong>{" "}
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant="strong"
        size="lg"
        fullWidth
        onClick={() => onNext?.()}
        className="gap-2 uppercase tracking-wide"
      >
        Ver Meu Plano Completo
        <ArrowRight className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};
