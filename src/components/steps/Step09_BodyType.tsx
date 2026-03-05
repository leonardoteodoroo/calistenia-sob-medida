import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  {
    id: "magra",
    label: "Magra",
    image: "/images/body_type_slim.webp",
  },
  {
    id: "falsa_magra",
    label: "Falsa magra",
    image: "/images/body_type_skinny_fat.webp",
  },
  {
    id: "acima_peso",
    label: "Acima do peso",
    image: "/images/body_type_overweight.webp",
  },
  {
    id: "muito_acima_peso",
    label: "Muito acima do peso",
    image: "/images/body_type_very_overweight.webp",
  },
];

export function Step09_BodyType({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Como você descreveria seu físico?"
      options={options}
      onNext={onNext}
      layout="grid"
    />
  );
}
