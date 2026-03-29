import { useState } from "react";
import { QuizButtons } from "../ui/QuizButtons";

type Props = { onNext: (val: string) => void };

const cravingOptions = [
  { id: "doces", label: "🍫  Doces" },
  { id: "salgados", label: "🧂  Salgados" },
  { id: "mistura", label: "🍕  Uma mistura dos dois" },
  { id: "nenhum", label: "🙅‍♀️  Não tenho desejos" },
];

const mealOptions = [
  { id: "cafemanha", label: "☕  Pulo o café da manhã" },
  { id: "almoco", label: "🥗  Pulo o almoço" },
  { id: "jantar", label: "🌙  Pulo o jantar" },
  { id: "nenhum", label: "✅  Costumo fazer minhas refeições" },
];

export function Step17_Cravings({ onNext }: Props) {
  const [craving, setCraving] = useState<string | null>(null);

  if (!craving) {
    return (
      <QuizButtons
        title="Em qual momento sua alimentação mais pesa contra você?"
        options={cravingOptions}
        onNext={setCraving}
      />
    );
  }

  return (
    <QuizButtons
      title="Você costuma pular alguma refeição?"
      options={mealOptions}
      onNext={(padrao_refeicoes) =>
        onNext(JSON.stringify({ vontade_comer: craving, padrao_refeicoes }))
      }
    />
  );
}
