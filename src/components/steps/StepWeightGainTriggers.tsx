import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "pressao_trabalho", label: "Pressão do trabalho", icon: "💼" },
  { id: "vida_familiar_agitada", label: "Vida familiar agitada", icon: "👨‍👩‍👧" },
  { id: "metabolismo_lento", label: "Metabolismo lento", icon: "⏳" },
  { id: "outro", label: "Outro", icon: "🔄" },
];

export function StepWeightGainTriggers({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Algum destes eventos levou ao ganho de peso?"
      options={options}
      onNext={onNext}
    />
  );
}
