import React, { useState, useEffect } from 'react'
import { StepShell } from '../ui/StepShell'
import { ChoiceGrid } from '../ui/ChoiceGrid'

type Props = {
  onNext: (val: string) => void
}

const habitsOptions = [
  { id: 'emocional', label: '💭  Comer por emoção ou tédio' },
  { id: 'demais', label: '🍽️  Comer demais' },
  { id: 'noturno', label: '🌙  Lanches noturnos' },
  { id: 'outro', label: '🔄  Outro' },
]

const eventsOptions = [
  { id: 'trabalho', label: '💼  Pressão do trabalho' },
  { id: 'familia', label: '👨‍👩‍👧  Vida familiar agitada' },
  { id: 'metabolismo', label: '⏳  Metabolismo lento' },
  { id: 'outro_evento', label: '🔄  Outro' },
]

export const Step16_Obstacles: React.FC<Props> = ({ onNext }) => {
  const [selectedHabits, setSelectedHabits] = useState<string[]>([])
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  useEffect(() => {
    if (selectedHabits.length > 0 && selectedEvents.length > 0) {
      const timer = setTimeout(() => {
        onNext(JSON.stringify({ maus_habitos: selectedHabits[0], eventos_ganho_peso: selectedEvents[0] }))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [selectedHabits, selectedEvents, onNext])

  return (
    <StepShell
      title="O que mais te atrapalha?"
      subtitle="Quais obstáculos você sente que prejudicam seus resultados?"
    >
      <div className="space-y-4">

        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3" style={{ color: '#4A5568' }}>
            😔  Qual hábito mais te atrapalha?
          </p>
          <ChoiceGrid
            options={habitsOptions}
            value={selectedHabits}
            onChange={setSelectedHabits}
            columns={2}
          />
        </div>

        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3" style={{ color: '#4A5568' }}>
            ⚡  Algum destes levou ao ganho de peso?
          </p>
          <ChoiceGrid
            options={eventsOptions}
            value={selectedEvents}
            onChange={setSelectedEvents}
            columns={2}
          />
        </div>

      </div>
    </StepShell>
  )
}
