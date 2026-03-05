
import { QuizButtons } from "../ui/QuizButtons"
import type { StepProps } from "../../types"

const options = [
  { id: "confianca", label: "Me sentir mais confiante com meu corpo" },
  { id: "saudavel_energia", label: "Me sentir mais saudável e com energia" },
  { id: "roupas", label: "Vestir melhor minhas roupas" },
  { id: "pos_parto", label: "Voltar a forma após o parto" },
  { id: "outro", label: "Outro" },
]

export function Step18_MainReason({ onNext }: StepProps) {
  return <QuizButtons title="Qual é o seu principal motivo para entrar em forma?" options={options} onNext={onNext} />
}
