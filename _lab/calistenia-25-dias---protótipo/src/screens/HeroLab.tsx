import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Radar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type HeroLabProps = {
  onBack: () => void;
  onUseDirection: () => void;
};

const deliverables = [
  {
    icon: Radar,
    title: "Leitura do seu nível real",
    copy: "Não é um quiz genérico. A promessa aqui é mostrar o ponto exato onde seu corpo está travando hoje.",
  },
  {
    icon: Sparkles,
    title: "Mapa de foco mais valioso",
    copy: "Abdômen, postura, energia e firmeza deixam de ser desejos soltos e viram um eixo de ação priorizado.",
  },
  {
    icon: Clock3,
    title: "Rotina possível para a sua vida",
    copy: "A revelação principal é simples: o melhor plano não é o mais pesado, é o que você consegue repetir.",
  },
];

export default function HeroLab({ onBack, onUseDirection }: HeroLabProps) {
  return (
    <div className="relative flex-1 overflow-y-auto bg-[#0b0f10] text-[#f6efe5]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(222,187,137,0.16),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(98,177,173,0.18),_transparent_30%),linear-gradient(180deg,_#112022_0%,_#0b0f10_52%,_#090909_100%)]" />
        <div className="absolute -left-16 top-28 h-40 w-40 rounded-full bg-[#debb89]/12 blur-3xl" />
        <div className="absolute right-[-30px] top-48 h-56 w-56 rounded-full bg-[#66a8a5]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:26px_26px]" />
      </div>

      <div className="relative z-10 flex min-h-full flex-col px-5 pb-28 pt-5">
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f6efe5] transition hover:bg-white/10"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6efe5]/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#debb89]">
            <span className="h-2 w-2 rounded-full bg-[#debb89]" />
            Hero Lab
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#debb89]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3d9af]">
              <ShieldCheck className="h-4 w-4" />
              Diagnóstico de Alta Precisão
            </div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#b8c2c0]">
              rascunho de direção
            </span>
          </div>

          <div className="space-y-5">
            <div className="space-y-4">
              <p className="max-w-[22rem] text-sm leading-relaxed text-[#d1d8d6]">
                Ideia-base para substituir a sensação de “mais um quiz” por uma
                entrada com clima de revelação, método e alto valor percebido.
              </p>

              <h1
                className="max-w-[18rem] text-[3.25rem] leading-[0.92] text-[#fff9f1]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                O plano certo precisa se revelar antes da primeira pergunta.
              </h1>

              <p className="max-w-[20rem] text-base leading-relaxed text-[#d5ddd9]">
                Em vez de prometer só um resultado, a Hero vende a sensação de
                que existe um diagnóstico sério esperando do outro lado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-[#eef3f1]">
              <div className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#debb89]">
                  percepção
                </div>
                <div className="text-2xl font-semibold text-white">+ valor</div>
                <div className="mt-2 text-xs leading-relaxed text-[#b9c3c0]">
                  o usuário sente que vai receber algo raro, não um formulário.
                </div>
              </div>
              <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                <div className="mb-2 text-[11px] uppercase tracking-[0.18em] text-[#95c7c2]">
                  mecanismo
                </div>
                <div className="text-2xl font-semibold text-white">
                  + método
                </div>
                <div className="mt-2 text-xs leading-relaxed text-[#b9c3c0]">
                  a promessa vira diagnóstico, priorização e rotina aplicável.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 grid gap-3"
        >
          {deliverables.map(({ icon: Icon, title, copy }, index) => (
            <div
              key={title}
              className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f6efe5] text-[#102022]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#96bebb]">
                    entrega {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-lg font-semibold text-[#fffaf4]">
                    {title}
                  </h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#cad4d1]">{copy}</p>
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 rounded-[32px] border border-[#debb89]/20 bg-[linear-gradient(180deg,rgba(222,187,137,0.12),rgba(255,255,255,0.04))] p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#f0d8b3]">
                preview de relatório
              </div>
              <h3
                className="text-[2rem] leading-none text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Revelação inicial
              </h3>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#eff3f2]">
              45 s
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[24px] bg-[#091113] p-4">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#98c8c2]">
                <span>sinal dominante</span>
                <span>alto</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,#debb89,#95c7c2)]" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#e8efed]">
                Você não precisa de mais intensidade. Precisa de clareza,
                progressão simples e uma rotina que te dê vontade de continuar
                amanhã.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-[22px] bg-white/5 p-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[#b9c3c0]">
                  nível atual
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  base baixa
                </div>
              </div>
              <div className="rounded-[22px] bg-white/5 p-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[#b9c3c0]">
                  foco inicial
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  firmeza
                </div>
              </div>
              <div className="rounded-[22px] bg-white/5 p-3">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[#b9c3c0]">
                  ritmo ideal
                </div>
                <div className="mt-2 text-xl font-semibold text-white">
                  15 min
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <div className="mt-5 px-1 text-sm leading-relaxed text-[#c1cbc8]">
          Objetivo deste laboratório: aumentar a percepção de revelação e alto
          valor logo de cara, antes do usuário sentir que está respondendo um
          quiz comum.
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(11,15,16,0),rgba(11,15,16,0.96)_55%,#0b0f10_100%)]" />

      <div className="fixed inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-4">
        <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0e1618]/92 p-3 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <button
            onClick={onUseDirection}
            className="flex w-full items-center justify-center gap-2 rounded-[22px] bg-[linear-gradient(135deg,#f0c98d,#98c8c2)] px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#0f1a1c] transition hover:brightness-105"
          >
            Explorar direção no quiz
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-2 text-center text-[11px] uppercase tracking-[0.16em] text-[#a9b6b2]">
            abra direto com <span className="text-[#f0d8b3]">#hero-lab</span>
          </p>
        </div>
      </div>
    </div>
  );
}
