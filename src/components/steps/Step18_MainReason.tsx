import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  {
    id: "confianca",
    label: "Me sentir mais confiante com meu corpo",
    icon: "🌟",
  },
  {
    id: "saudavel_energia",
    label: "Me sentir mais saudável e com energia",
    icon: "⚡",
  },
  { id: "roupas", label: "Vestir melhor minhas roupas", icon: "👗" },
  { id: "pos_parto", label: "Voltar a forma após o parto", icon: "🤱" },
  { id: "outro", label: "Outro", icon: "✨" },
];

export function Step18_MainReason({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Qual é o seu principal motivo para entrar em forma?"
      options={options}
      onNext={onNext}
    />
  );
}
