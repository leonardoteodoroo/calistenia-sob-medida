import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "barriga", label: "Barriga", image: "/images/focus_barriga.webp" },
  { id: "gluteos", label: "Glúteos", image: "/images/focus_gluteos.webp" },
  { id: "pernas", label: "Pernas", image: "/images/focus_pernas.webp" },
  { id: "peito", label: "Peito", image: "/images/focus_peito.webp" },
];

export const Step11_FocusAreas = ({ onNext }: StepProps) => (
  <QuizButtons
    title="Quais são suas regiões de foco?"
    options={options}
    onNext={onNext}
    layout="grid"
  />
);
