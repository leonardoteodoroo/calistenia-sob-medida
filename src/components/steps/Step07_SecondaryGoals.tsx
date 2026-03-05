
import { QuizButtons } from "../ui/QuizButtons"
import type { StepProps } from "../../types"

const options = [
  { id: "forca", label: "Construir força muscular" },
  { id: "postura", label: "Melhorar a postura" },
  { id: "estresse", label: "Reduzir o estresse e a preocupação" },
  { id: "flexibilidade", label: "Desenvolver flexibilidade" },
  { id: "outro", label: "Outro" },
]

export function Step07_SecondaryGoals({ onNext }: StepProps) {
  return <QuizButtons title="Que mais espera alcançar com este plano?" options={options} onNext={onNext} />
}
