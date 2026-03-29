import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  { id: "tempo", label: "⏰  Minha rotina é corrida demais" },
  { id: "constancia", label: "🔁  Eu começo e não consigo manter" },
  { id: "metodo", label: "🧭  Não sei qual treino realmente seguir" },
  { id: "cansaco", label: "😮‍💨  Me sinto sem energia para treinar" },
  { id: "motivacao", label: "🫥  Falta motivação e confiança" },
];

export function Step16_Obstacles({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="O que mais te trava hoje?"
      options={options}
      onNext={onNext}
    />
  );
}
