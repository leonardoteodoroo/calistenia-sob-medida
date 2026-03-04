import React, { useState, useEffect } from 'react'
import { StepShell } from '../ui/StepShell'
import { ChoiceGrid } from '../ui/ChoiceGrid'

type Props = {
  onNext: (val: string) => void
}

const sleepOptions = [
  { id: 'menos5', label: '😩  Menos de 5 horas' },
  { id: '5-6', label: '😪  5-6 horas' },
  { id: '7-8', label: '😌  7-8 horas' },
  { id: 'mais8', label: '😴  Mais de 8 horas' },
]

const mealsOptions = [
  { id: 'cafemanha', label: '☕  Pulo o café da manhã' },
  { id: 'almoco', label: '🥗  Pulo o almoço' },
  { id: 'jantar', label: '🌙  Pulo o jantar' },
  { id: 'nenhum', label: '✅  Não pulo refeições' },
]

export const Step15_SleepAndDiet: React.FC<Props> = ({ onNext }) => {
  const [selectedSleep, setSelectedSleep] = useState<string[]>([])
  const [selectedMeals, setSelectedMeals] = useState<string[]>([])

  useEffect(() => {
    if (selectedSleep.length > 0 && selectedMeals.length > 0) {
      const timer = setTimeout(() => {
        onNext(JSON.stringify({ sono: selectedSleep[0], pula_refeicao: selectedMeals[0] }))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [selectedSleep, selectedMeals, onNext])

  return (
    <StepShell
      title="Como é o seu sono e alimentação?"
      subtitle="Conte-nos um pouco sobre a sua rotina para personalizar o plano."
    >
      <div className="space-y-4">

        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3" style={{ color: '#4A5568' }}>
            😴  Com quantas horas de sono você acorda descansada?
          </p>
          <ChoiceGrid
            options={sleepOptions}
            value={selectedSleep}
            onChange={setSelectedSleep}
            columns={2}
          />
        </div>

        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3" style={{ color: '#4A5568' }}>
            🍽️  Você costuma pular alguma refeição?
          </p>
          <ChoiceGrid
            options={mealsOptions}
            value={selectedMeals}
            onChange={setSelectedMeals}
            columns={2}
          />
        </div>

      </div>
    </StepShell>
  )
}
