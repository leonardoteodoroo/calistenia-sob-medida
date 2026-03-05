import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "forca", label: "Construir força muscular", icon: "💪" },
  { id: "postura", label: "Melhorar a postura", icon: "🧍" },
  { id: "estresse", label: "Reduzir o estresse e a preocupação", icon: "🧘" },
  { id: "flexibilidade", label: "Desenvolver flexibilidade", icon: "🤸" },
  { id: "outro", label: "Outro", icon: "✨" },
];

export function Step07_SecondaryGoals({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Que mais espera alcançar com este plano?"
      options={options}
      onNext={onNext}
    />
  );
}
