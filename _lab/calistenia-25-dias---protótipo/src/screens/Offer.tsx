import { motion } from "motion/react";
import { CheckCircle2, Lock, ShieldCheck, ArrowRight } from "lucide-react";

export default function Offer({
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col bg-[#111111] p-6 overflow-y-auto"
    >
      <div className="pt-6 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
            Oferta Exclusiva
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
          Desafio 25 Dias: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {goalText}
          </span>
        </h1>
        <p className="text-gray-400 text-sm">
          O único método que transforma seu corpo com 15 minutos diários, sem
          sair de casa.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <h3 className="text-lg font-bold text-white mb-6">
          O que você recebe hoje:
        </h3>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Trilha guiada de 25 dias em vídeo (basta apertar o play)
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Cardápio simples e prático para acelerar resultados
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Acesso vitalício à plataforma e atualizações
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">
              Suporte tira-dúvidas direto no app
            </span>
          </li>
        </ul>

        <div className="border-t border-white/10 pt-6">
          <div className="flex items-end justify-center gap-2 mb-2">
            <span className="text-gray-500 line-through text-lg">R$ 197</span>
            <span className="text-4xl font-bold text-white">R$ 47</span>
          </div>
          <p className="text-center text-cyan-400 text-sm font-medium">
            Ou 5x de R$ 10,11
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <button
          onClick={onNext}
          className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          Quero Começar Agora
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock className="w-4 h-4" />
            <span>Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
