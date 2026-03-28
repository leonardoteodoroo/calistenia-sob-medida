import { motion } from "motion/react";
import { ArrowRight, Activity, Clock, ShieldCheck } from "lucide-react";

export default function Landing({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col relative"
    >
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/40 via-[#111111]/80 to-[#111111] z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop")',
        }}
      ></div>

      <div className="relative z-20 flex-1 flex flex-col justify-end p-6 pb-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium text-cyan-50 uppercase tracking-wider">
              Plano Personalizado
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
            Transforme seu corpo em casa com{" "}
            <span className="text-cyan-400">15 minutos</span> por dia.
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Sem equipamentos. Sem academias lotadas. Um plano de calistenia
            guiado, feito sob medida para o seu nível e rotina.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span>Treinos focados no seu objetivo</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>Apenas 15 a 20 minutos diários</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Método validado para resultados rápidos</span>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Descobrir Meu Plano
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Leva menos de 2 minutos. 100% gratuito para descobrir.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
