import { motion } from "framer-motion"
import { Check, ChevronDown, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import type { StepProps } from "../../types"

export function Step32_SalesPage({ answers }: StepProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Fallbacks de debug para as variáveis dinâmicas capturadas antes
  const ideal = answers?.peso_ideal || "60 kg"

  // Placeholder lógico do IMC (para evitar lint)
  // const imc_atual = parseInt(atual) > 85 ? "Pochete/Sobrepeso" : "Flacidez"

  const checkoutUrl = `https://pay.kiwify.com.br/xxxxx?c=${ideal}` // Placeholder do link de pagamento

  return (
    <div className="w-full flex justify-center bg-background min-h-screen pb-8">
      {/* Container principal imitando mobile no desktop */}
      <div className="w-full max-w-lg bg-surface-card shadow-xl overflow-hidden relative flex flex-col">

        {/* =========================================
            BLOCO 1: Headline e Projeção (Hero Section)
            ========================================= */}
        <section className="px-5 pt-8 pb-6 bg-gradient-to-b from-primary/10 to-transparent">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-heading font-extrabold text-text-primary text-center mb-8 leading-tight"
          >
            Seu Plano de Calistenia para perder pochete rápido e ganhar massa magra em até 2 meses está pronto.
          </motion.h1>

          {/* Painel Comparativo */}
          <div className="flex gap-3 justify-center">
            {/* Card HOJE */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1 bg-surface-card rounded-xl border border-border overflow-hidden shadow-sm flex flex-col"
            >
              <div className="bg-surface-subtle text-center py-1.5 border-b border-border">
                <span className="text-xs font-bold uppercase text-text-secondary tracking-wider">Hoje</span>
              </div>
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=400"
                  alt="Hoje"
                  className="w-full h-full object-cover grayscale-[40%]"
                />
              </div>
              <div className="p-3 space-y-3 flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
                    <span>Calistenia</span>
                    <span>Iniciante</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
                    <span>Autoestima</span>
                    <span className="text-status-error">Baixa</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card DEPOIS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex-1 bg-surface-card rounded-xl border-2 border-primary overflow-hidden shadow-md flex flex-col"
            >
              <div className="bg-primary text-center py-1.5">
                <span className="text-xs font-bold uppercase text-white tracking-wider">Depois</span>
              </div>
              <div className="aspect-square relative">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=400"
                  alt="Depois"
                  className="w-full h-full object-cover saturate-110"
                />
              </div>
              <div className="p-3 space-y-3 flex-1 flex flex-col justify-center bg-primary/5">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                    <span>Calistenia</span>
                    <span>Avançado</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-primary rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                    <span>Autoestima</span>
                    <span className="text-status-success">Alta</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-status-success rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-success rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-success rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-success rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-success rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================
            BLOCO 2: Box Principal de Oferta e Primeiro CTA
            ========================================= */}
        <section className="px-5 py-6">
          <h2 className="text-xl font-heading font-bold text-center mb-4">Adquira agora o seu plano</h2>

          <div className="border border-primary rounded-xl overflow-hidden shadow-lg bg-surface-card transform hover:scale-[1.01] transition-transform">
            <div className="bg-primary text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
              Acesso para sempre + Atualizações
            </div>
            <div className="p-5 flex items-center justify-between">
              <div className="font-heading font-black text-lg w-1/2 leading-tight">
                PLANO DE AULAS EM VÍDEO
              </div>
              <div className="text-right w-1/2">
                <div className="text-xs text-text-secondary uppercase font-semibold mb-1">Por apenas</div>
                <div className="text-3xl font-black text-primary leading-none">R$ 49<span className="text-lg">,00</span></div>
                <div className="text-xs text-text-secondary mt-1">à vista</div>
              </div>
            </div>
          </div>

          <a
            href={checkoutUrl}
            className="mt-6 block w-full bg-primary hover:bg-primary-hover text-white text-center font-bold text-lg py-4 rounded-xl shadow-lg transition-colors uppercase tracking-wide"
          >
            Obter meu plano
          </a>
        </section>

        {/* =========================================
            BLOCO 3: Quadro de Transformações
            ========================================= */}
        <section className="px-5 py-8 bg-surface-subtle">
          <h3 className="text-xl font-heading font-bold text-center mb-6 leading-tight">
            O que você vai transformar em sua vida após iniciar os treinos
          </h3>

          <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-border">
            <ul className="space-y-4">
              {[
                "Perda de peso", "Alívio de dores nas costas", "Melhora da postura",
                "Alívio de dores nas Pernas e Cãibras", "Melhora do fluxo sanguíneo",
                "Redução de ansiedade", "Reduz o estresse", "Reduz a enxaquecas",
                "Reduz dores menstruais", "Melhora da flexibilidade", "Aumento da autoestima"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-status-success/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-status-success" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================================
            BLOCO 4: Gráficos de Prova Social 1
            ========================================= */}
        <section className="px-5 py-10">
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-surface-elevated rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center gap-3">
              {/* Fake Donut SVG */}
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full circular-chart orange">
                  <path className="text-surface-subtle" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="91, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="22.5" className="text-xs font-bold fill-text-primary" textAnchor="middle">91%</text>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase text-text-secondary">das alunas perde mais de 7 quilos durante o programa</p>
            </div>

            <div className="bg-surface-elevated rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center gap-3">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full circular-chart orange">
                  <path className="text-surface-subtle" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="83, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="22.5" className="text-xs font-bold fill-text-primary" textAnchor="middle">83%</text>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase text-text-secondary">das alunas alega ter melhora na disposição após início</p>
            </div>

          </div>
        </section>

        {/* =========================================
            BLOCO 5: Destaques do Plano
            ========================================= */}
        <section className="px-5 py-10 bg-surface-subtle border-y border-border">
          <h3 className="text-2xl font-heading font-black text-center mb-8">
            Destaques do seu plano
          </h3>
          <div className="space-y-5">
            {[
              <><span className="font-bold">Perda de peso</span> e corpo tonificado com treinos fáceis de fazer em casa</>,
              <><span className="font-bold">Rotinas boas</span> para iniciantes para uma barriga mais reta e uma forma modelada</>,
              <>Treinos de <span className="font-bold">10-20 min</span> que se encaixam na sua agenda</>,
              <>Sem equipamentos <span className="font-bold">tudo o que você precisa</span> é do nosso plano</>,
              <>Plano de <span className="font-bold">refeições personalizado</span> com receitas rápidas e saborosas</>,
              <><span className="font-bold">Dicas e truques</span> de especialistas para melhorar seu estilo de vida e manter a forma</>
            ].map((content, i) => (
              <div key={i} className="flex gap-4 items-start bg-surface-card p-4 rounded-xl shadow-sm">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary fill-primary/10" />
                </div>
                <p className="text-sm text-text-primary leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            BLOCO 6: Logística de Entrega
            ========================================= */}
        <section className="px-5 py-10 text-center">
          <h3 className="text-xl font-heading font-bold mb-4">Como irei receber meu acesso a tudo isso?</h3>
          <p className="text-sm text-text-secondary mb-3 leading-relaxed">
            Logo após finalizar seu cadastro você receberá um email de imediato com seu acesso a nossa área de alunas!
          </p>
          <p className="text-sm text-text-secondary mb-8 leading-relaxed">
            Dentro da nossa Área de Alunas você irá receber todas as suas aulas organizadas, uma aula para cada dia da semana, só dar Play e começar!
          </p>

          <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
            {["Pode ser feito dentro de casa", "Apenas 15 minutos por dia", "Pode ser sem aparelhos"].map((ft, i) => (
              <div key={i} className="border border-border rounded-lg py-3 px-4 text-sm font-semibold text-text-primary shadow-sm">
                {ft}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            BLOCO 7: Prova Social Ampliada (Big Numbers)
            ========================================= */}
        <section className="px-5 py-10 bg-primary/5">
          <h3 className="text-2xl font-heading font-bold text-center mb-8 px-4">
            Mulheres como você obtiveram excelentes resultados utilizando o nosso programa
          </h3>

          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">4.684</div>
              <p className="text-sm font-medium text-text-secondary max-w-xs mx-auto">Alunas foram capazes de emagrecer mais de 5 quilos após 25 dias de aulas</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">97%</div>
              <p className="text-sm font-medium text-text-secondary max-w-xs mx-auto">Das alunas do programa indicam e recomendam as aulas em suas redes sociais e para conhecidos</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-1">75%</div>
              <p className="text-sm font-medium text-text-secondary max-w-xs mx-auto">Das alunas reduziram as dores corporais</p>
            </div>
          </div>
        </section>

        {/* =========================================
            BLOCO 8: FAQ Segmentado
            ========================================= */}
        <section className="px-5 py-10">
          <h3 className="text-2xl font-heading font-bold text-center mb-6">Perguntas frequentes de nossas alunas</h3>
          <div className="space-y-3">
            {[
              {
                q: "Posso ver as aulas sempre?",
                a: "Sim, você tem acesso as suas aulas para sempre, pode ver quantas vezes quiser sem limitações e sem nenhuma taxa extra!"
              },
              {
                q: "Posso cancelar se eu não gostar?",
                a: "Claro, por se tratar de uma compra online, você tem direito por lei a 7 dias de garantia, se por qualquer motivo você não ficar satisfeita, devolvemos 100% do seu dinheiro!"
              },
              {
                q: "No próximo mês tenho que pagar novamente?",
                a: "Não, você paga apenas essa taxinha e tem acesso às aulas para sempre com direito as atualizações de novas aulas que adicionamos!"
              }
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden bg-surface-card">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-sm"
                >
                  {faq.q}
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform", openFaq === i && "rotate-180")} />
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-sm text-text-secondary bg-surface-subtle/50 leading-relaxed border-t border-border-subtle">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================
            BLOCO 9: Footer de Oferta Otimizada e Call To Action Final (INLINE)
            ========================================= */}
        <section className="w-full bg-surface-card border-t border-border pt-0 pb-8 px-5 flex flex-col items-center">

          {/* Scarce header */}
          <div className="bg-status-error text-white w-full text-center py-1.5 text-[10px] font-black tracking-widest uppercase mb-6 -mt-3 rounded-b-lg shadow-md max-w-[200px]">
            ÚLTIMAS 7 VAGAS DISPONÍVEIS!
          </div>

          {/* Box Recap Lite */}
          <div className="w-full flex items-center justify-between mb-4 px-2">
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Pagamento Único</div>
              <div className="font-heading font-black text-sm text-text-primary leading-tight">TREINOS EM VÍDEO</div>
            </div>
            <div className="text-right flex items-end gap-2">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-text-secondary line-through">De 147,00</span>
                <span className="text-[10px] text-text-secondary uppercase font-semibold -mb-1">à vista</span>
              </div>
              <div className="text-2xl font-black text-primary leading-none">R$ 49</div>
            </div>
          </div>

          <a
            href={checkoutUrl}
            className="w-full bg-primary hover:bg-primary-hover text-white text-center font-black text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] uppercase tracking-wide flex flex-col items-center justify-center gap-1"
          >
            <span>Garantir meu Plano</span>
            <span className="text-[10px] font-normal tracking-normal capitalize opacity-90 relative">
              <span className="absolute -left-4 top-0.5">👉</span> Pague 1 vez e tenha acesso para sempre
            </span>
          </a>

        </section>

      </div>
    </div>
  )
}

// Re-implementing a quick utility inside the file just to avoid massive refactoring if needed above for the Chevron toggle
function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}
