import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "emocional_tedio", label: "Comer por emoção ou tédio", icon: "💭" },
  { id: "comer_demais", label: "Comer demais", icon: "🍽️" },
  { id: "lanches_noturnos", label: "Lanches noturnos", icon: "🌙" },
  { id: "outro", label: "Outro", icon: "🔄" },
];

export function StepHabitBlockers({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Qual hábito mais te atrapalha?"
      options={options}
      onNext={onNext}
    />
  );
}
