
import { QuizButtons } from "../ui/QuizButtons"
import type { StepProps } from "../../types"

const options = [
  { id: "barriga", label: "Barriga" },
  { id: "gluteos", label: "Glúteos" },
  { id: "pernas", label: "Pernas" },
  { id: "peito", label: "Peito" },
]

export const Step11_FocusAreas = ({ onNext }: StepProps) =>
  <QuizButtons title="Quais são suas regiões de foco?" options={options} onNext={onNext} />
