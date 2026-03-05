
import { QuizButtons } from "../ui/QuizButtons"
import type { StepProps } from "../../types"

const options = [
  { id: "magra", label: "Magra" },
  { id: "falsa_magra", label: "Falsa magra" },
  { id: "acima_peso", label: "Acima do peso" },
  { id: "muito_acima_peso", label: "Muito acima do peso" },
]

export function Step09_BodyType({ onNext }: StepProps) {
  return <QuizButtons title="Como você descreveria seu físico?" options={options} onNext={onNext} />
}
