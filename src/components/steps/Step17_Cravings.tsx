import { StepShell } from "../ui/StepShell"
import { ChoiceGrid } from "../ui/ChoiceGrid"
import type { StepProps } from "../../types"

const CRAVINGS_OPTIONS = [
  { id: "doces", label: "🍫  Doces" },
  { id: "salgados", label: "🧂  Salgados" },
  { id: "mistura", label: "🍕  Uma mistura dos dois" },
  { id: "nenhum", label: "🙅‍♀️  Não tenho desejos" },
]

export function Step17_Cravings({ onNext }: StepProps) {
  return (
    <StepShell
      title="Você sente mais vontade de comer doces ou salgados?"
      subtitle="Isso nos ajuda a entender seu perfil metabólico."
    >
      <ChoiceGrid
        options={CRAVINGS_OPTIONS}
        value={[]}
        onChange={(next) => {
          if (next.length > 0) onNext(next[0])
        }}
      />
    </StepShell>
  )
}
