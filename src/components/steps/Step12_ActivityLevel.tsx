import { useState } from "react";
import { QuizButtons } from "../ui/QuizButtons";

type Props = { onNext: (val: string) => void };

const frequencyOptions = [
  { id: "sedentario", label: "🪑  Passo a maior parte do tempo sentada" },
  { id: "ativo", label: "🚶‍♀️  Faço pausas ativas / subo escadas" },
  { id: "pe", label: "⏱️  Fico de pé o dia todo" },
];

const timeOptions = [
  { id: "10", label: "⌛  Tenho 10 min por dia" },
  { id: "15", label: "⚡  Consigo 15 min por dia" },
  { id: "20", label: "🔥  Consigo 20 min por dia" },
  { id: "30", label: "🗓️  Tenho 30 min ou mais" },
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
      title="Quanto tempo você consegue dedicar de verdade?"
      options={timeOptions}
      onNext={(tempo) => onNext(JSON.stringify({ rotina: freq, tempo }))}
    />
  );
}
