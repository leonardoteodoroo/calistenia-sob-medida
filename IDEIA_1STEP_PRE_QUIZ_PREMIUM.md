# Ideia Única: 1Step Premium Antes do Quiz

## Nome da proposta

**Step 0 — Diagnóstico de Alta Precisão (45 segundos)**

## Objetivo estratégico

Fazer a pessoa sentir que está entrando em uma **avaliação séria e personalizada**, não em “mais um quiz”.

A sensação que queremos criar:

- "Isso aqui foi feito para mim."
- "Tem método por trás."
- "Se eu completar, vou sair com algo de alto valor."

## Conceito da tela (1step)

Uma única tela pré-quiz com 4 blocos:

1. **Headline de valor imediato**
   - Exemplo: `Seu plano de calistenia sob medida em menos de 2 minutos.`
   - Subheadline: reforça personalização, rotina real e resultado sustentável.

2. **O que a pessoa recebe ao final (entrega concreta)**
   - Card 1: nível atual e limitações.
   - Card 2: foco corporal prioritário.
   - Card 3: recomendação de rotina inicial (tempo + frequência).

3. **Prova + autoridade sem exagero**
   - Badge: `+600 mil mulheres impactadas`.
   - Mini depoimento curto (1 linha) com nome/idade/cidade.
   - Selo textual: `Método aplicado em casa, sem academia`.

4. **Prévia visual do resultado**
   - Um “mock” do relatório final (estático): barras, score, metas.
   - Isso aumenta percepção de valor porque torna o resultado “visível”.

---

## Requisito central do CTA (obrigatório)

O botão **“Fazer Quiz Agora”** nesta 1step deve ser **STICKY**.

### Regra de implementação do sticky

- Mobile e desktop: CTA sempre visível na parte inferior.
- `position: sticky` com `bottom` seguro (ex.: `bottom: 12px`).
- Largura total no mobile e destaque visual de ação principal.
- Microcopy abaixo do botão:
  `Leva ~2 min • gratuito • sem compromisso`

> Esse detalhe sozinho reduz fricção e aumenta início de quiz.

---

## Como construir no seu projeto atual

Crie um novo step antes do atual Step01:

- Novo componente: `src/components/steps/Step00_PremiumEntry.tsx`
- Fluxo no `src/App.tsx`:
  - Iniciar em `step = 0`.
  - `Step00` chama `onNext()` e leva para `Step01_Gender`.
  - Barra de progresso: pode ocultar no step 0 ou mostrar 0%.

### Estrutura sugerida do componente

- Hero de valor (headline/subheadline).
- Bloco de entregáveis (3 cards).
- Bloco de prova social curta.
- Mock visual do relatório.
- **CTA sticky “Fazer Quiz Agora”**.

---

## O que precisa para essa 1step ficar realmente incrível

- Copy com promessa específica (não genérica).
- Visual “wellness premium” alinhado ao seu design system atual.
- Prova social curta e crível (sem poluição).
- Prévia visual do diagnóstico final (efeito “quero ver o meu”).
- CTA sticky com contraste alto e texto de baixo risco.
- Tracking de eventos:
  - `Step0Viewed`
  - `Step0CtaClicked`
  - taxa de avanço Step0 -> Step1

---

## Critério de sucesso (simples)

Se a 1step estiver boa, você deve ver:

- aumento da taxa de início do quiz;
- menor abandono antes da primeira pergunta;
- mais percepção de “valor real” já no primeiro contato.
