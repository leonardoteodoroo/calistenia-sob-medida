import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "perder_peso", label: "Perder peso", icon: "🔥" },
  { id: "manter_peso", label: "Mantenha o peso e fique em forma", icon: "⚖️" },
];

export function Step06_Objective({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Qual é o seu principal objetivo?"
      options={options}
      onNext={onNext}
    />
  );
}
