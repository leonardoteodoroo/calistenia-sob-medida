import { QuizButtons } from "../ui/QuizButtons";

type Props = { onNext: (val: string) => void };

const sleepOptions = [
  { id: "menos5", label: "Menos de 5 horas" },
  { id: "5-6", label: "5 a 6 horas" },
  { id: "7-8", label: "7 a 8 horas" },
  { id: "mais8", label: "Mais de 8 horas" },
];

export function Step15_SleepAndDiet({ onNext }: Props) {
  return (
    <QuizButtons
      title="Quantas horas você costuma dormir por noite?"
      options={sleepOptions}
      onNext={onNext}
    />
  );
}
