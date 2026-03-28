import { motion } from "motion/react";
import {
  ArrowLeft,
  Info,
  CheckCircle2,
  XCircle,
  Lightbulb,
} from "lucide-react";

export default function Notes({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex-1 flex flex-col bg-[#111111] p-6 overflow-y-auto pb-24"
    >
      <div className="flex items-center gap-4 mb-8 pt-4">
        <button
          onClick={() => onNavigate("dashboard")}
          className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-white">Notas do Protótipo</h1>
      </div>

      <div className="space-y-6">
        <section className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">
              O que foi construído
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Jornada Completa:</strong> Fluxo linear desde a Landing
                Page até o Dashboard do aluno.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Quiz Dinâmico:</strong> Coleta de dados que influenciam
                a copy das telas seguintes (Resultados, Oferta e Onboarding).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Design Premium:</strong> Estilo dark mode,
                glassmorphism, mobile-first, focado em conversão e clareza.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Área do Aluno Enxuta:</strong> Foco no "Treino do Dia"
                (Today), escondendo a complexidade e reduzindo a ansiedade.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <XCircle className="w-5 h-5 text-red-400" />
            <h2 className="text-lg font-bold text-white">
              O que é Mockado (Simulado)
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              • <strong>Backend & Auth:</strong> Não há banco de dados real. O
              estado vive na memória do React durante a navegação.
            </li>
            <li>
              • <strong>Checkout:</strong> A tela de pagamento é apenas visual
              para demonstrar o fluxo sem atrito.
            </li>
            <li>
              • <strong>Vídeos e PDFs:</strong> Imagens estáticas e botões que
              simulam a ação (ex: botão "START WORKOUT" apenas muda o estado
              para concluído).
            </li>
            <li>
              • <strong>Lógica de Trilha:</strong> O app assume o "Dia 1" para
              demonstração. Num app real, o backend calcularia o dia atual
              baseado na data de início.
            </li>
          </ul>
        </section>

        <section className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <h2 className="text-lg font-bold text-white">
              Próxima Evolução (P1)
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              1. Conectar a um backend (Supabase/Firebase) para salvar as
              respostas do quiz e gerar a trilha real.
            </li>
            <li>
              2. Integrar Stripe ou Hotmart para processar o pagamento real e
              disparar webhooks.
            </li>
            <li>3. Implementar Magic Link (Auth) para login sem senha.</li>
            <li>
              4. Adicionar o player de vídeo real (Vimeo embed) na tela de
              treino.
            </li>
            <li>
              5. Implementar a lógica de "Streak" (ofensiva) com cálculo de
              Força do Hábito.
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
