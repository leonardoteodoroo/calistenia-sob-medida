// ============================================================
// TRACKING — Calistenia Sob Medida
// ============================================================

// ⚠️ TODO: cole a URL do Apps Script após reimplantar
export const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbz6wXIkSpSeklBlvpAA2cRMde9GK2gYKzUkQ43dQPXeZIJaixKIYXQtuDlzrN7i2yt8/exec'

// ⚠️ TODO: cole a URL do checkout (Kwify ou Hotmart)
export const CHECKOUT_URL = 'https://TODO_SUBSTITUIR_PELA_URL_DO_CHECKOUT'

export const PRODUCT_VALUE = 19.90
export const PRODUCT_CURRENCY = 'BRL'

// --- Helpers de cookie ---
export function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : ''
}

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${90 * 24 * 60 * 60}; path=/; SameSite=Lax`
}

// --- Visitor ID persistente (90 dias) ---
export function getVisitorId(): string {
  let vid = getCookie('_vid')
  if (!vid) {
    vid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
    setCookie('_vid', vid)
  }
  return vid
}

// --- Captura parâmetros de rastreamento da URL ---
export function captureTrackingParams() {
  const params = new URLSearchParams(window.location.search)

  const gclid = params.get('gclid')
  const gbraid = params.get('gbraid')
  const wbraid = params.get('wbraid')
  if (gclid) setCookie('gclid', gclid)
  if (gbraid) setCookie('gbraid', gbraid)
  if (wbraid) setCookie('wbraid', wbraid)

  // Fallback gclid via cookie do gtag
  if (!gclid && !getCookie('gclid')) {
    const gclAw = getCookie('_gcl_aw')
    if (gclAw) {
      const parts = gclAw.split('.')
      if (parts.length >= 3) setCookie('gclid', parts.slice(2).join('.'))
    }
  }

  const fbclid = params.get('fbclid')
  if (fbclid) {
    setCookie('fbclid', fbclid)
    if (!getCookie('_fbc')) setCookie('_fbc', `fb.1.${Date.now()}.${fbclid}`)
  }
}

// --- Payload base ---
function basePayload(extra: Record<string, unknown> = {}) {
  return {
    timestamp: new Date().toISOString(),
    fbclid: getCookie('fbclid'),
    fbc: getCookie('_fbc'),
    fbp: getCookie('_fbp'),
    gclid: getCookie('gclid'),
    gbraid: getCookie('gbraid'),
    wbraid: getCookie('wbraid'),
    visitor_id: getVisitorId(),
    user_agent: navigator.userAgent,
    ...extra,
  }
}

// --- Envio fire-and-forget ---
function post(payload: Record<string, unknown>) {
  if (!WEBHOOK_URL) return
  fetch(WEBHOOK_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => { })
}

// ============================================================
// FUNÇÕES PÚBLICAS
// ============================================================

/** Step 3 — captura gênero e idade → aba Quiz */
export function sendQuizEntry(answers: Record<string, string>) {
  post(basePayload({
    sheet_target: 'quiz',
    event_type: 'QuizEntry',
    genero: answers.genero || '',
    idade: answers.idade || '',
  }))
}

/** Step 32 — todas as respostas em campos planos → aba Quiz */
export function sendQuizComplete(answers: Record<string, string>) {
  post(basePayload({
    sheet_target: 'quiz',
    event_type: 'QuizComplete',
    genero: answers.genero || '',
    idade: answers.idade || '',
    experiencia: answers.experiencia || '',
    objetivo_principal: answers.objetivo_principal || '',
    objetivos_secundarios: answers.objetivos_secundarios || '',
    tipo_fisico_atual: answers.tipo_fisico_atual || '',
    corpo_dos_sonhos: answers.corpo_dos_sonhos || '',
    mudanca_de_peso: answers.mudanca_de_peso || '',
    flexibilidade: answers.flexibilidade || '',
    regioes_foco: answers.regioes_foco || '',
    frequencia_exercicios: answers.frequencia_exercicios || '',
    frequencia_caminhadas: answers.frequencia_caminhadas || '',
    dia_tipico: answers.dia_tipico || '',
    nivel_energia: answers.nivel_energia || '',
    frequencia_sono: answers.frequencia_sono || '',
    maus_habitos: answers.maus_habitos || '',
    vontade_comer: answers.vontade_comer || '',
    motivos_ganho_peso: answers.motivos_ganho_peso || '',
    motivo_entrar_forma: answers.motivo_entrar_forma || '',
    altura: answers.altura || '',
    peso_atual: answers.peso_atual || '',
    peso_ideal: answers.peso_ideal || '',
  }))
}

/** Clique no CTA → aba Hashed */
export function sendCtaClick(answers: Record<string, string>) {
  post(basePayload({
    sheet_target: 'hashed',
    event_type: 'AddToCart',
    order_id: getVisitorId(),
    conversion_value: PRODUCT_VALUE,
    currency_code: PRODUCT_CURRENCY,
    genero: answers.genero || '',
    idade: answers.idade || '',
  }))
}
