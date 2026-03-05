import { useState } from "react";
import { QuizButtons } from "../ui/QuizButtons";

type Props = { onNext: (val: string) => void };

const frequencyOptions = [
  { id: "sedentario", label: "🪑  Passo a maior parte do tempo sentada" },
  { id: "ativo", label: "🚶‍♀️  Faço pausas ativas / subo escadas" },
  { id: "pe", label: "⏱️  Fico de pé o dia todo" },
];

const exerciseOptions = [
  { id: "nunca", label: "❌  Nunca" },
  { id: "1-2", label: "🌱  1 a 2 vezes por semana" },
  { id: "3-4", label: "🔥  3 a 4 vezes por semana" },
  { id: "sempre", label: "⚡  Quase todos os dias" },
];

export function Step12_ActivityLevel({ onNext }: Props) {
  const [freq, setFreq] = useState<string | null>(null);

  if (!freq) {
    return (
      <QuizButtons
        title="Como é sua rotina de movimento no dia a dia?"
        options={frequencyOptions}
        onNext={setFreq}
      />
    );
  }

  return (
    <QuizButtons
      title="Com que frequência você se exercita ou caminha?"
      options={exerciseOptions}
      onNext={(ex) => onNext(JSON.stringify({ rotina: freq, exercicio: ex }))}
    />
  );
}
