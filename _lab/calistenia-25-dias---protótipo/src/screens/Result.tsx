import { motion } from "motion/react";
import { ArrowRight, Target, Zap, Clock, Flame } from "lucide-react";

export default function Result({
  answers,
  onNext,
}: {
  answers: Record<string, string>;
  onNext: () => void;
}) {
  // Mock logic based on answers
  const goalText =
    answers.goal === "weight_loss"
      ? "Emagrecer e Definir"
      : answers.goal === "muscle_gain"
        ? "Ganhar Massa Magra"
        : "Saúde e Disposição";
  const levelText =
    answers.experience === "beginner" ? "Iniciante Absoluto" : "Intermediário";
  const timeText = answers.time === "15min" ? "15 min/dia" : "30 min/dia";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex-1 flex flex-col bg-[#111111] p-6 overflow-y-auto"
    >
      <div className="pt-8 pb-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-400/30"
        >
          <Target className="w-10 h-10 text-cyan-400" />
        </motion.div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Plano Encontrado!
        </h1>
        <p className="text-gray-400">
          Baseado no seu perfil, criamos a trilha perfeita para você.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          Seu Perfil Detectado
        </h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Flame className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Foco Principal</p>
              <p className="text-white font-medium">{goalText}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Zap className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Nível de Adaptação</p>
              <p className="text-white font-medium">{levelText}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
              <Clock className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Tempo Diário</p>
              <p className="text-white font-medium">{timeText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-4">O que esperar:</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Sem sobrecarga:</strong> Treinos
              curtos que cabem na sua rotina, sem exigir horas na academia.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Direto ao ponto:</strong> Você só
              precisa apertar o play. Nós dizemos o que fazer a cada dia.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Resultados visíveis:</strong> Em 25
              dias, você notará mais força, disposição e mudanças no espelho.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={onNext}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Ver Meu Plano Completo
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
