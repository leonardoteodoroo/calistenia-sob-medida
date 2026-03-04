import React, { useState, useEffect } from 'react'
import { StepShell } from '../ui/StepShell'
import { ChoiceGrid } from '../ui/ChoiceGrid'

type Props = {
  onNext: (val: string) => void
}

const frequencyOptions = [
  { id: 'sedentario', label: '🪑  Passo a maior parte do tempo sentada' },
  { id: 'ativo', label: '🚶‍♀️  Faço pausas ativas / subo escadas' },
  { id: 'pe', label: '⏱️  Fico de pé o dia todo' },
]

const exerciseOptions = [
  { id: 'nunca', label: '❌  Nunca' },
  { id: '1-2', label: '🌱  1 a 2 vezes por semana' },
  { id: '3-4', label: '🔥  3 a 4 vezes por semana' },
  { id: 'sempre', label: '⚡  Quase todos os dias' },
]

export const Step12_ActivityLevel: React.FC<Props> = ({ onNext }) => {
  const [selectedFreq, setSelectedFreq] = useState<string[]>([])
  const [selectedEx, setSelectedEx] = useState<string[]>([])

  useEffect(() => {
    if (selectedFreq.length > 0 && selectedEx.length > 0) {
      const timer = setTimeout(() => {
        onNext(JSON.stringify({ rotina: selectedFreq[0], exercicio: selectedEx[0] }))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [selectedFreq, selectedEx, onNext])

  return (
    <StepShell
      title="Como é sua rotina de movimento?"
      subtitle="Conte um pouco sobre seu dia a dia e frequência de exercícios."
    >
      <div className="space-y-4">

        {/* Bloco 1 */}
        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3 flex items-center gap-1.5" style={{ color: '#4A5568' }}>
            No seu dia a dia (trabalho / casa)
          </p>
          <ChoiceGrid
            options={frequencyOptions}
            value={selectedFreq}
            onChange={setSelectedFreq}
            columns={2}
          />
        </div>

        {/* Bloco 2 */}
        <div
          className="p-4 rounded-2xl border"
          style={{ background: '#FFFFFF', borderColor: '#E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}
        >
          <p className="text-sm font-bold mb-3 flex items-center gap-1.5" style={{ color: '#4A5568' }}>
            Frequência de exercícios / caminhadas
          </p>
          <ChoiceGrid
            options={exerciseOptions}
            value={selectedEx}
            onChange={setSelectedEx}
            columns={2}
          />
        </div>

      </div>
    </StepShell>
  )
}
