import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, CheckCircle2, Gift, MessageCircle, Dumbbell, Star, MessageSquare } from "lucide-react"
import type { StepProps } from "../../types"
import imgHoje from "../../assets/images/Mulher brasileira 41 anos com sobrepeso em casa ao entardecer - realidade atual hoje.webp"
import imgDepois from "../../assets/images/Mulher brasileira 41 anos mais firme e confiante em casa ao entardecer objetivo depois.webp"
import { sendCtaClick, CHECKOUT_URL, PRODUCT_VALUE, PRODUCT_CURRENCY } from "../../lib/tracking"

// ─── Countdown Timer hook ────────────────────────────────────────────────────
const PROMO_MINUTES = 17

function useCountdown(minutesTotal: number) {
  const [seconds, setSeconds] = useState(() => {
    try {
      const stored = sessionStorage.getItem("promo_end")
      if (stored) {
        const diff = Math.floor((parseInt(stored, 10) - Date.now()) / 1000)
        if (diff > 0) return diff
      }
    } catch { /* ignore */ }
    const end = Date.now() + minutesTotal * 60 * 1000
    try { sessionStorage.setItem("promo_end", String(end)) } catch { /* ignore */ }
    return minutesTotal * 60
  })

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const m = Math.floor(seconds / 60).toString().padStart(2, "0")
  const s = (seconds % 60).toString().padStart(2, "0")
  return { m, s, expired: seconds === 0 }
}

// ─── Componente Principal ─────────────────────────────────────────────────────
export const Step22_Checkout: React.FC<StepProps> = ({ answers }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { m, s, expired } = useCountdown(PROMO_MINUTES)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  let ideal = "60"
  try {
    if (answers?.medidas) {
      const parsed = JSON.parse(answers.medidas)
      if (parsed.peso_ideal) ideal = String(parsed.peso_ideal)
    }
  } catch { /* ignore */ }

  const checkoutUrl = CHECKOUT_URL + `?peso_ideal=${ideal}`

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget as HTMLElement
    if (btn.dataset.clicked === "true") { e.preventDefault(); return }
    btn.dataset.clicked = "true"
    setTimeout(() => { btn.dataset.clicked = "" }, 3000)

    const eventId = `${Date.now()}`

    if (typeof window.fbq === "function") {
      window.fbq("track", "AddToCart", {
        value: PRODUCT_VALUE,
        currency: PRODUCT_CURRENCY,
        content_name: "Calistenia Sob Medida",
      }, { eventID: eventId })
    }

    const w = window as unknown as { dataLayer: object[] }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: "add_to_cart",
      product_name: "Calistenia Sob Medida",
      value: PRODUCT_VALUE,
      currency: PRODUCT_CURRENCY,
      event_id: eventId,
    })

    sendCtaClick(answers ?? {})
  }

  let parsedFocos: string[] = []
  try {
    if (answers?.zonas_foco) parsedFocos = JSON.parse(answers.zonas_foco)
  } catch { /* ignore */ }

  return (
    <div className="w-full flex justify-center bg-background min-h-screen pb-8">
      <div className="w-full max-w-lg bg-surface-card shadow-xl overflow-hidden relative flex flex-col">

        {/* ═══════════════════════════════════════════════════
            BLOCO 1: Hero — Projeção Hoje vs. Depois
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 pt-8 pb-6 bg-gradient-to-b from-primary/10 to-transparent">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-heading font-extrabold text-text-primary text-center mb-8 leading-tight"
          >
            Seu Plano de Calistenia para perder pochete rápido e ganhar massa magra em até 2 meses está pronto.
          </motion.h1>

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
              <div className="aspect-square relative flex items-center justify-center bg-surface-card">
                <img src={imgHoje} alt="Realidade atual" width={400} height={400} loading="lazy" decoding="async"
                  className="w-full h-full object-cover object-top grayscale-[40%]" />
              </div>
              <div className="p-3 space-y-3 flex-1 flex flex-col justify-center">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
                    <span>Calistenia</span><span>Iniciante</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    {[0, 1, 2, 3].map(i => <div key={i} className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>)}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-text-secondary uppercase">
                    <span>Autoestima</span><span className="text-status-error">Baixa</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    <div className="h-1.5 flex-1 bg-status-error rounded-full"></div>
                    {[0, 1, 2].map(i => <div key={i} className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>)}
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
              <div className="aspect-square relative flex items-center justify-center bg-surface-card">
                <img src={imgDepois} alt="Objetivo" width={400} height={400} loading="lazy" decoding="async"
                  className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-3 space-y-3 flex-1 flex flex-col justify-center bg-primary/5">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                    <span>Calistenia</span><span>Avançado</span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3].map(i => <div key={i} className="h-1.5 flex-1 bg-primary rounded-full"></div>)}
                    <div className="h-1.5 flex-1 bg-surface-subtle rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-primary uppercase">
                    <span>Autoestima</span><span className="text-status-success">Alta</span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map(i => <div key={i} className="h-1.5 flex-1 bg-status-success rounded-full"></div>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 1.5: Análise do Perfil
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-6 bg-surface-subtle">
          <h3 className="text-lg font-heading font-bold text-text-primary mb-4 text-center">Análise do Seu Perfil</h3>
          <div className="bg-surface-card p-4 rounded-xl border border-border space-y-3 text-sm text-text-secondary">
            <div className="flex items-center justify-between border-b border-border pb-2">
              <span className="font-medium text-text-primary">Foco Principal:</span>
              <span className="font-bold text-primary text-right">{answers?.objetivo || "Perder peso"}</span>
            </div>
            {parsedFocos.length > 0 && (
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="font-medium text-text-primary">Zonas de Foco:</span>
                <span className="font-bold text-primary text-right max-w-[60%] line-clamp-2">{parsedFocos.join(", ")}</span>
              </div>
            )}
            <div className="flex items-center justify-between border-b border-border pb-2">
              <span className="font-medium text-text-primary">Meta de Peso:</span>
              <span className="font-bold text-primary text-right">{ideal} kg</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-text-primary">Frequência Física Ideal:</span>
              <span className="font-bold text-primary text-right max-w-[60%]">Treinos constantes com recuperação</span>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 2: Box de Oferta + CTA #1
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-6">
          <h2 className="text-xl font-heading font-bold text-center mb-4">Adquira agora o seu plano</h2>

          <div className="border border-primary rounded-xl overflow-hidden shadow-lg bg-surface-card transform hover:scale-[1.01] transition-transform">
            <div className="bg-primary text-white text-center py-2 text-xs font-bold tracking-wider uppercase">
              Acesso para sempre + Atualizações Gratuitas
            </div>
            <div className="p-5 flex items-center justify-between">
              <div className="font-heading font-black text-base w-1/2 leading-tight text-text-primary">
                UM PLANO PASSO A PASSO PARA VOCÊ
              </div>
              <div className="text-right w-1/2">
                <div className="text-xs text-text-secondary uppercase font-semibold mb-1">Por apenas</div>

                <div className="text-3xl font-black text-primary leading-none">R$ 19<span className="text-lg">,90</span></div>
                <div className="text-xs text-text-secondary mt-1">pagamento único</div>
              </div>
            </div>
          </div>

          <a
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="mt-6 block w-full bg-primary hover:bg-primary-hover text-white text-center font-bold text-lg py-4 rounded-xl shadow-lg transition-colors uppercase tracking-wide"
          >
            Obter meu plano agora
          </a>
          <p className="text-center text-[11px] text-text-secondary mt-2">🔒 Pagamento 100% seguro • 7 dias de garantia</p>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 3: Benefícios com Linguagem Emocional
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-8 bg-surface-subtle">
          <h3 className="text-xl font-heading font-bold text-center mb-6 leading-tight">
            O que muda na sua vida quando você começa
          </h3>
          <div className="bg-surface-card rounded-2xl p-6 shadow-sm border border-border">
            <ul className="space-y-4">
              {[
                { emoji: "🔥", text: "Barriga mais reta e corpo firme — sem academia, sem aparelho" },
                { emoji: "😌", text: "Fim das dores nas costas que te impedem de viver bem" },
                { emoji: "⚡", text: "Energia de manhã para encarar o dia — acaba aquela preguiça crônica" },
                { emoji: "😍", text: "Autoestima lá em cima — você vai se olhar no espelho com orgulho" },
                { emoji: "🧘", text: "Menos ansiedade e estresse — o treino vira seu momento de paz" },
                { emoji: "💪", text: "Postura corrigida e pernas sem cãibras — corpo funcionando de verdade" },
                { emoji: "🩸", text: "Ciclo menstrual mais tranquilo — as dores reduzem com o movimento" },
                { emoji: "🌀", text: "Flexibilidade melhorada — seu corpo começa a se mover com leveza" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <span className="text-sm font-medium text-text-primary leading-snug">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 3.5: Gráficos de Prova Social
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-elevated rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center gap-3">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path className="text-surface-subtle" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="91, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="22.5" className="text-xs font-bold fill-text-primary" textAnchor="middle">91%</text>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase text-text-secondary">das alunas perde mais de 7kg durante o programa</p>
            </div>
            <div className="bg-surface-elevated rounded-xl p-4 shadow-sm border border-border flex flex-col items-center text-center gap-3">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path className="text-surface-subtle" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-primary" strokeDasharray="83, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <text x="18" y="22.5" className="text-xs font-bold fill-text-primary" textAnchor="middle">83%</text>
                </svg>
              </div>
              <p className="text-xs font-semibold uppercase text-text-secondary">das alunas alega ter mais disposição após início</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 4: Destaques do Plano (o que está incluso)
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10 bg-surface-subtle border-y border-border">
          <h3 className="text-2xl font-heading font-black text-center mb-8">O que está no seu plano</h3>
          <div className="space-y-5">
            {[
              <><span className="font-bold">Sequência de treinos passo a passo</span> — organizada por semana, do mais fácil ao mais desafiador</>,
              <><span className="font-bold">Exercícios de 10 a 20 min por dia</span> — que cabem na rotina de qualquer mulher ocupada</>,
              <><span className="font-bold">Zero equipamentos</span> — tudo o que você precisa é do seu próprio peso e vontade</>,
              <><span className="font-bold">Foco nos pontos certos</span> — barriga, glúteos, braços e pernas no mesmo programa</>,
              <><span className="font-bold">Guia de treino + dicas de estilo de vida</span> — para manter os resultados depois</>,
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

        {/* ═══════════════════════════════════════════════════
            BLOCO 5: Logística de Entrega (sem "aulas em vídeo")
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10 text-center">
          <h3 className="text-xl font-heading font-bold mb-4">Como vou receber meu plano?</h3>
          <p className="text-sm text-text-secondary mb-3 leading-relaxed">
            Após finalizar seu cadastro, você recebe um e-mail imediatamente com o link de acesso ao seu plano personalizado.
          </p>
          <p className="text-sm text-text-secondary mb-8 leading-relaxed">
            O plano é entregue em formato digital — você lê no celular, tablet ou computador. Tudo organizado, passo a passo, do aquecimento até os exercícios do dia.
          </p>
          <div className="grid grid-cols-1 gap-3 max-w-xs mx-auto">
            {["Pode ser feito dentro de casa", "Apenas 15 minutos por dia", "Sem nenhum equipamento"].map((ft, i) => (
              <div key={i} className="border border-border rounded-lg py-3 px-4 text-sm font-semibold text-text-primary shadow-sm bg-surface-card">
                {ft}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 5.5: Big Numbers / Prova Social
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10 bg-primary/5">
          <h3 className="text-2xl font-heading font-bold text-center mb-8 px-4">
            Mulheres como você obtiveram resultados reais
          </h3>
          <div className="space-y-6">
            {[
              { num: "4.684", desc: "Alunas perderam mais de 5 quilos após 25 dias de plano" },
              { num: "97%", desc: "Das alunas indicam o programa para amigas e familiares" },
              { num: "75%", desc: "Das alunas reduziram dores no corpo ainda no primeiro mês" },
            ].map(({ num, desc }, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-primary mb-1">{num}</div>
                <p className="text-sm font-medium text-text-secondary max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 6: BÔNUS (novo)
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10 bg-surface-subtle border-y border-border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">Bônus Exclusivos</span>
          </div>
          <h3 className="text-2xl font-heading font-black text-center mb-2 leading-tight">
            Você também recebe{" "}
            <span className="relative inline-block" style={{ color: '#38A169' }}>
              GRÁTIS
              <svg
                className="absolute w-full h-3 -bottom-1 left-0"
                style={{ color: '#38A16988' }}
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </span>
          </h3>
          <p className="text-center text-sm text-text-secondary mb-8">Incluso no seu plano sem nenhum custo extra</p>

          <div className="space-y-4">
            {/* Bônus 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-surface-card rounded-2xl border-2 border-primary/20 p-5 flex gap-4 items-start shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Bônus #1</span>
                </div>
                <h4 className="font-heading font-black text-text-primary mb-1">Comunidade Exclusiva no WhatsApp</h4>
                <p className="text-xs text-text-secondary leading-relaxed">Acesso ao grupo com outras alunas que estão no mesmo caminho. Troca de experiências, motivação diária e suporte para não desistir.</p>
                <p className="text-xs font-bold text-primary mt-2">Valeria R$47,00 por si só</p>
              </div>
            </motion.div>

            {/* Bônus 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-surface-card rounded-2xl border-2 border-primary/20 p-5 flex gap-4 items-start shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Bônus #2</span>
                </div>
                <h4 className="font-heading font-black text-text-primary mb-1">E-book: Dietas Low Carb para Performance</h4>
                <p className="text-xs text-text-secondary leading-relaxed">Guia completo de alimentação low carb para potencializar seus resultados — sem passar fome, sem complicação. O que comer antes e depois do treino.</p>
                <p className="text-xs font-bold text-primary mt-2">Valeria R$37,00 por si só</p>
              </div>
            </motion.div>

            {/* Bônus 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-surface-card rounded-2xl border-2 border-primary/20 p-5 flex gap-4 items-start shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Bônus #3</span>
                </div>
                <h4 className="font-heading font-black text-text-primary mb-1">Sorteio Mensal de Kit Treino em Casa</h4>
                <p className="text-xs text-text-secondary leading-relaxed">Todo mês uma aluna ganha um kit completo de treino em casa — tapete, elásticos e acessórios. Só por fazer parte do programa.</p>
                <p className="text-xs font-bold text-primary mt-2">Sorteio exclusivo para alunas ativas</p>
              </div>
            </motion.div>
          </div>

          {/* Valor total percebido */}
          <div className="mt-6 bg-primary/10 rounded-xl p-4 text-center border border-primary/20">
            <p className="text-xs text-text-secondary uppercase font-bold tracking-wider mb-1">Valor total do que você recebe</p>
            <p className="text-lg font-black text-text-secondary line-through mb-0.5">R$ 153,80</p>
            <p className="text-3xl font-black text-primary">R$ 19,90</p>
            <p className="text-xs text-text-secondary mt-1">Pagamento único • Acesso para sempre</p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 7: Provas Sociais — Prints de WhatsApp
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquare className="w-5 h-5 text-status-success" />
            <span className="text-xs font-black uppercase tracking-widest text-status-success">Resultados Reais</span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-center mb-2 leading-tight">
            O que nossas alunas estão falando
          </h3>
          <p className="text-center text-sm text-text-secondary mb-8">Prints do nosso grupo de WhatsApp</p>

          <div className="space-y-5">

            {/* ─── CARD 1: Com placeholder de foto ─── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0 }}
              className="rounded-2xl overflow-hidden shadow-md border border-border"
            >
              {/* Topo estilo WhatsApp */}
              <div className="bg-[#075e54] px-4 py-2.5 flex items-center gap-3">
                <img
                  src="/images/social-proof/mulher_em_casa_com_tapete_no_ch__o_segurando_garrafinha__com_express__o_de_cansa__o_bom_ap__s_um_treino_bruna_recife_rotina_solida_pos_treino_3.webp"
                  alt="Bruna"
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
                />
                <div>
                  <div className="text-white font-bold text-sm">Bruna R.</div>
                  <div className="text-white/60 text-[10px]">Grupo: Calistenia Sob Medida 💚</div>
                </div>
              </div>
              {/* Fundo chat */}
              <div className="bg-[#e5ddd5] px-3 py-4 space-y-2">

                {/* Mensagem recebida */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[80%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Gente, 2ª semana e já sinto diferença 😭🙌</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">10:32</div>
                  </div>
                </div>

                {/* Foto da Bruna pós-treino dentro do chat */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm overflow-hidden shadow-sm max-w-[75%]">
                    <img
                      src="/images/social-proof/mulher_em_casa_com_tapete_no_ch__o_segurando_garrafinha__com_express__o_de_cansa__o_bom_ap__s_um_treino_bruna_recife_rotina_solida_pos_treino_3.webp"
                      alt="Bruna R. pós-treino"
                      className="w-full max-w-[200px] object-cover"
                    />
                    <div className="text-[10px] text-zinc-400 text-right px-3 pb-2">10:33 ✓✓</div>
                  </div>
                </div>

                {/* Mensagem recebida 2 */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[82%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Fiz só 15 min hoje e to suada igual academia 😂 nunca pensei que em casa fosse assim</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">10:34 ✓✓</div>
                  </div>
                </div>

                {/* Resposta do grupo */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[70%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Eu também!! To amando 😍🔥</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#25d366] font-semibold">Fernanda</span>
                      <span>10:35 ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ─── CARD 2: Conversa de dor → resultado ─── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md border border-border"
            >
              <div className="bg-[#075e54] px-4 py-2.5 flex items-center gap-3">
                <img
                  src="/images/social-proof/mulher_em_ambiente_dom__stico_usando_uma_cadeira_como_apoio_com_express__o_satisfeita__em_foto_simples_de_celular_patricia_curitiba_treino_cadeira_3.webp"
                  alt="Patrícia"
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
                />
                <div>
                  <div className="text-white font-bold text-sm">Patrícia R.</div>
                  <div className="text-white/60 text-[10px]">Grupo: Calistenia Sob Medida 💚</div>
                </div>
              </div>
              <div className="bg-[#e5ddd5] px-3 py-4 space-y-2">

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Preciso falar uma coisa… entrei aqui sem acreditar muito não</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">14:09</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Porque já tentei academia 3x e desisti toda vez por causa das dores nas costas 😔</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">14:10</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[90%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Fiz 3 semanas do plano e as dores sumiram. Meu marido perguntou o que tava acontecendo porque to mais disposta 😂❤️</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">14:11 ✓✓</div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="bg-[#dcf8c6] rounded-t-xl rounded-bl-xl rounded-br-sm px-3 py-2 max-w-[75%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Que demais Pati!! Fico tão feliz 🥹🙌</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">14:13 ✓✓</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ─── CARD 3: Conversa de resultado de peso ─── */}
            <motion.div
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-md border border-border"
            >
              <div className="bg-[#075e54] px-4 py-2.5 flex items-center gap-3">
                <img
                  src="/images/social-proof/mulher_em_espa__o_simples_de_casa_com_tapete_no_ch__o__preparando-se_para_treinar_sem_equipamentos_juliana_bh_treino_casa_3.webp"
                  alt="Juliana"
                  className="w-9 h-9 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
                />
                <div>
                  <div className="text-white font-bold text-sm">Juliana S.</div>
                  <div className="text-white/60 text-[10px]">Grupo: Calistenia Sob Medida 💚</div>
                </div>
              </div>
              <div className="bg-[#e5ddd5] px-3 py-4 space-y-2">

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Meninas, me pesando hoje 🙈</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">09:41</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">-5,2kg desde que comecei 🎉🎉🎉</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">09:42 ✓✓</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[90%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Nunca consegui isso com dieta. Com treino de 15 min em casa funcionou de verdade 😭</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1">09:43 ✓✓</div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="bg-white rounded-t-xl rounded-br-xl rounded-bl-sm px-3 py-2 max-w-[75%] shadow-sm">
                    <p className="text-[13px] text-zinc-800 leading-snug">Que orgulho Ju!! 🥳🔥🔥</p>
                    <div className="text-[10px] text-zinc-400 text-right mt-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] text-[#25d366] font-semibold">Carla</span>
                      <span>09:44 ✓✓</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 8: FAQ
            ═══════════════════════════════════════════════════ */}
        <section className="px-5 py-10 bg-surface-subtle">
          <h3 className="text-2xl font-heading font-bold text-center mb-6">Perguntas frequentes</h3>
          <div className="space-y-3">
            {[
              {
                q: "O plano fica disponível para sempre?",
                a: "Sim! Você tem acesso para sempre após a compra — pode reler quantas vezes quiser, sem taxas extras ou renovações.",
              },
              {
                q: "Posso pedir reembolso se não gostar?",
                a: "Pode sim. Por ser uma compra online, você tem 7 dias de garantia por lei. Se não ficar satisfeita por qualquer motivo, devolvemos 100% do valor.",
              },
              {
                q: "Precisa pagar todo mês?",
                a: "Não! É uma única taxa e você leva o plano completo + todos os bônus para sempre. Sem mensalidade, sem surpresa.",
              },
              {
                q: "É para iniciantes?",
                a: "Sim, o plano foi criado exatamente para quem está começando do zero — os exercícios são progressivos e você vai no seu ritmo.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden bg-surface-card">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-sm"
                >
                  {faq.q}
                  <ChevronDown className={cn("w-5 h-5 text-primary transition-transform flex-shrink-0", openFaq === i && "rotate-180")} />
                </button>
                {openFaq === i && (
                  <div className="p-4 pt-0 text-sm text-text-secondary bg-surface-subtle/50 leading-relaxed border-t border-border">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            BLOCO 9: Footer de Oferta com Countdown + CTA Final
            ═══════════════════════════════════════════════════ */}
        <section className="w-full bg-surface-card border-t border-border pt-6 pb-8 px-5 flex flex-col items-center">

          {/* Tag countdown estilo ÚLTIMAS VAGAS */}
          {!expired ? (
            <div className="inline-flex items-center gap-2 bg-status-error text-white text-[11px] font-black uppercase tracking-wider rounded-full px-4 py-1.5 mb-5 shadow-sm">
              <span>⚡ Preço promocional reservado por:</span>
              <span className="bg-white/20 rounded-full px-2 py-0.5 tabular-nums font-black text-xs">{m}:{s}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 bg-text-secondary/30 text-text-primary text-[11px] font-black uppercase tracking-wider rounded-full px-4 py-1.5 mb-5">
              Promoção encerrada
            </div>
          )}

          {/* Box Recap Lite */}
          <div className="w-full flex items-center justify-between mb-4 px-2">
            <div>
              <div className="text-[10px] font-bold text-text-secondary uppercase">Pagamento Único</div>
              <div className="font-heading font-black text-sm text-text-primary leading-tight">PLANO PASSO A PASSO</div>
              <div className="text-[10px] text-text-secondary">+ 3 Bônus Inclusos</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-text-secondary uppercase font-semibold">À vista</div>
              <div className="text-2xl font-black text-primary leading-none">R$ 19,90</div>
            </div>
          </div>

          <a
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="w-full bg-primary hover:bg-primary-hover text-white text-center font-black text-lg py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02] uppercase tracking-wide flex flex-col items-center justify-center gap-1"
          >
            <span>Garantir meu Plano</span>
            <span className="text-[10px] font-normal tracking-normal capitalize opacity-90">
              👉 Pague 1 vez e acesse para sempre
            </span>
          </a>
          <p className="text-center text-[11px] text-text-secondary mt-3">🔒 Pagamento seguro • Garantia de 7 dias sem perguntas</p>
        </section>

      </div>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}
