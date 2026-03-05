import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "magra", label: "Magra", image: "/images/dream_body_slim.webp" },
  {
    id: "tonificada",
    label: "Tonificada",
    image: "/images/dream_body_toned.webp",
  },
  {
    id: "curvas",
    label: "Com curvas",
    image: "/images/dream_body_curves.webp",
  },
  { id: "media", label: "Média", image: "/images/dream_body_average.webp" },
];

export function Step10_DreamBody({ onNext }: StepProps) {
  return (
    <QuizButtons
      title='Qual é o seu "corpo dos sonhos"?'
      options={options}
      onNext={onNext}
      layout="grid"
    />
  );
}
