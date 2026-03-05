import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "doces", label: "🍫  Doces" },
  { id: "salgados", label: "🧂  Salgados" },
  { id: "mistura", label: "🍕  Uma mistura dos dois" },
  { id: "nenhum", label: "🙅‍♀️  Não tenho desejos" },
];

export function Step17_Cravings({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Você sente mais vontade de comer doces ou salgados?"
      options={options}
      onNext={onNext}
    />
  );
}
