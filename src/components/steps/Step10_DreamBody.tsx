
import { QuizButtons } from "../ui/QuizButtons"
import type { StepProps } from "../../types"

const options = [
  { id: "magra", label: "Magra" },
  { id: "tonificada", label: "Tonificada" },
  { id: "curvas", label: "Com curvas" },
  { id: "media", label: "Média" },
]

export function Step10_DreamBody({ onNext }: StepProps) {
  return <QuizButtons title='Qual é o seu "corpo dos sonhos"?' options={options} onNext={onNext} />
}
