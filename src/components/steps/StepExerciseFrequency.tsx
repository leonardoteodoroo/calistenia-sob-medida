import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "nunca", label: "Nunca", icon: "❌" },
  { id: "1_2_semana", label: "1 a 2 vezes por semana", icon: "🌱" },
  { id: "3_4_semana", label: "3 a 4 vezes por semana", icon: "🔥" },
  { id: "quase_todos_dias", label: "Quase todos os dias", icon: "⚡" },
];

export function StepExerciseFrequency({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Com que frequência você se exercita ou caminha?"
      options={options}
      onNext={onNext}
    />
  );
}
