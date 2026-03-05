import { useState } from "react"
import { QuizButtons } from "../ui/QuizButtons"

type Props = { onNext: (val: string) => void }

const habitsOptions = [
  { id: "emocional", label: "💭  Comer por emoção ou tédio" },
  { id: "demais", label: "🍽️  Comer demais" },
  { id: "noturno", label: "🌙  Lanches noturnos" },
  { id: "outro", label: "🔄  Outro" },
]

const eventsOptions = [
  { id: "trabalho", label: "💼  Pressão do trabalho" },
  { id: "familia", label: "👨‍👩‍👧  Vida familiar agitada" },
  { id: "metabolismo", label: "⏳  Metabolismo lento" },
  { id: "outro_evento", label: "🔄  Outro" },
]

export function Step16_Obstacles({ onNext }: Props) {
  const [habit, setHabit] = useState<string | null>(null)

  if (!habit) {
    return (
      <QuizButtons
        title="Qual hábito mais te atrapalha?"
        options={habitsOptions}
        onNext={setHabit}
      />
    )
  }

  return (
    <QuizButtons
      title="Algum destes eventos levou ao ganho de peso?"
      options={eventsOptions}
      onNext={(ev) => onNext(JSON.stringify({ maus_habitos: habit, eventos_ganho_peso: ev }))}
    />
  )
}
