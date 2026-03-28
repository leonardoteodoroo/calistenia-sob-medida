import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Onboarding({
  answers,
  onNext,
}: {
  answers: Record<string, string>;
  onNext: () => void;
}) {
  const goalText =
    answers.goal === "weight_loss"
      ? "Emagrecer e Definir"
      : answers.goal === "muscle_gain"
        ? "Ganhar Massa Magra"
        : "Saúde e Disposição";
  const energyText =
    answers.energy === "low_afternoon"
      ? "baixa energia à tarde"
      : answers.energy === "low_always"
        ? "cansaço constante"
        : "energia alta";
  const timeText = answers.time === "15min" ? "15 minutos" : "30 minutos";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex-1 flex flex-col bg-[#111111] p-6 overflow-y-auto"
    >
      <div className="pt-12 pb-8 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 border border-cyan-400/30">
          <Sparkles className="w-10 h-10 text-cyan-400" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Bem-vinda, Sarah!
        </h1>
        <p className="text-gray-400 text-lg">Seu plano mágico está pronto.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
          O Acordo
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6">
          Lembramos que o seu objetivo é{" "}
          <strong className="text-white">{goalText}</strong>, e que você relatou{" "}
          <strong className="text-white">{energyText}</strong>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          Baseado nisso, desenhamos uma trilha que respeita seu corpo. Você não
          precisa de horas na academia. Você só precisa de{" "}
          <strong className="text-white">{timeText}</strong> por dia.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Sem equipamentos. Apenas o peso do corpo.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Um único treino por dia. Sem confusão.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Cardápio simples liberado na aba Nutrição.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <button
          onClick={onNext}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Iniciar Jornada
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
