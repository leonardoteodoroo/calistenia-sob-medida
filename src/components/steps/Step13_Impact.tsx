import { QuizButtons } from "../ui/QuizButtons";
import type { StepProps } from "../../types";

const options = [
  {
    id: "fotos",
    label: "📷  Evito fotos ou espelho porque não gosto do que vejo",
  },
  {
    id: "roupas",
    label: "👗  Minhas roupas não vestem como eu gostaria",
  },
  {
    id: "saidas",
    label: "😶  Evito sair ou me expor porque não me sinto bem",
  },
  {
    id: "energia",
    label: "⚡  Isso pesa mais na minha energia e autoestima diária",
  },
  {
    id: "neutro",
    label: "🙂  Não sinto um grande impacto hoje",
  },
];

export function Step13_Impact({ onNext }: StepProps) {
  return (
    <QuizButtons
      title="Como isso mais impacta sua vida hoje?"
      options={options}
      onNext={onNext}
    />
  );
}
