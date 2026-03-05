import { useState } from "react";
import { QuizButtons } from "../ui/QuizButtons";

type Props = { onNext: (val: string) => void };

const sleepOptions = [
  { id: "menos5", label: "😩  Menos de 5 horas" },
  { id: "5-6", label: "😪  5-6 horas" },
  { id: "7-8", label: "😌  7-8 horas" },
  { id: "mais8", label: "😴  Mais de 8 horas" },
];

const mealsOptions = [
  { id: "cafemanha", label: "☕  Pulo o café da manhã" },
  { id: "almoco", label: "🥗  Pulo o almoço" },
  { id: "jantar", label: "🌙  Pulo o jantar" },
  { id: "nenhum", label: "✅  Não pulo refeições" },
];

export function Step15_SleepAndDiet({ onNext }: Props) {
  const [sleep, setSleep] = useState<string | null>(null);

  if (!sleep) {
    return (
      <QuizButtons
        title="Com quantas horas de sono você acorda descansada?"
        options={sleepOptions}
        onNext={setSleep}
      />
    );
  }

  return (
    <QuizButtons
      title="Você costuma pular alguma refeição?"
      options={mealsOptions}
      onNext={(meal) =>
        onNext(JSON.stringify({ sono: sleep, pula_refeicao: meal }))
      }
    />
  );
}
