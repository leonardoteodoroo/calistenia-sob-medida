---
description: Workflow do Projeto Calistenia Sob Medida (MVP & App Premium)
---

# Workflow: Calistenia Sob Medida

Este workflow centraliza o contexto do projeto, estabelece a jornada do MVP até o App Premium e define as **Skills** recomendadas para o agente utilizar em cada fase do desenvolvimento. Este arquivo garante que as intenções do projeto se mantenham intactas, mesmo mudando diretórios raiz ou recomeçando o chat.

## 1. Visão Geral do Produto e Estratégia de Mercado

**O Problema (Dor):** Pessoas com dificuldade financeira que querem alcançar a forma física ideal ou evoluir no esporte, mas sem pagar academias caras ou comprar equipamentos complexos.
**A Solução:** Treinos focados no uso do peso corporal com métodos da Calistenia.

### Fase Inicial: MVP (Validação e Tráfego)

- **A Abordagem:** Venda de "baixo atrito" (`Ticket R$ 19,90`) focado em pagar e escalar campanhas para alimentar o pixel (Meta Ads).
- **O Canal:** Um quiz interativo que qualifica o usuário, culminando na conversão através da dor específica e vendendo por Hotmart/Kiwify.
- **A Entrega Final do MVP:** Como não há aplicação completa neste momento, a entrega é o **Meu_Plano_Calistenia_Sob_Medida.pdf**, um produto digital com valor percebido gigantesco por ser gerado com base nos dados que o usuário colocou no Quiz. (A geração dinâmica do PDF via React-PDF foi validada).

### Fase Futura: App Premium (Retenção e Escala)

- **O Objetivo:** Constrói um App robusto, focado em alta retenção, semelhante a uma "Netflix dos Treinos".
- **Disponibilidade:** App Store (iOS) e Google Play (Android). Este projeto começará a ser planejado e desenvolvido em React Native/Expo após o break-even e validação do MVP.

---

## 2. Passo-a-Passo de Execução

Ao receber solicitações neste projeto, consulte abaixo as etapas, diretrizes de código e, mais importante, as skills necessárias.

### Etapa 1: Otimização da Máquina de Vendas (Quiz & Ads)

- **O Que Fazer:** Incrementar o design do Quiz existente em `/home/leonardotl/Área de trabalho/calistenia-sob-medida/`, validar layout responsivo, rodar análises de mercado para alinhar copy à dor da audiência e refinar anúncios.
- **Skills Essenciais:**
  - **[`scorecard-marketing`]** Use primeiro para auditar a estrutura do quiz como funil de diagnóstico premium e venda direta, revisar ordem das perguntas, tiers de resultado, fricção e segmentação do resultado.
  - **[`espionagem-ads`]** Use para escanear a biblioteca da Meta Ads e descobrir copies, promessas e dores de concorrentes fitness antes de refinar os textos do quiz.
  - **[`brainstorming`]** Auxilia a encontrar gatilhos para otimizar os botões CTAs e etapas do quiz (ex: "Qual a sua maior dificuldade: Falta de tempo ou Não sei treinar?").
  - **[`frontend-design`]** e **[`tailwind-design-system`]** Para garantir responsividade top tier móvel e design moderno.

### Etapa 2: Integração de Gatilho de Checkout (Hotmart / Kiwify)

- **O Que Fazer:** Direcionar o botão de checkout final do Quiz para a plataforma de vendas. Configurar recebimento de webhooks/postbacks da venda aprovada para, no background, disparar o PDF ou redirecionar o usuário para a tela final de download do `WorkoutPlanPDF.tsx`.
- **Skills Essenciais:**
  - **[`api-design-principles`]** ou **[`nodejs-backend-patterns`]** Para eventuais endpoints que escutam os webhooks da Kiwify/Hotmart.
  - **[`billing-automation`]** Para documentar/projetar as lógicas do que ocorre quando um status muda para \`PAID\`, gerando o entregável (o plano customizado em PDF).

### Etapa 3: "A Netflix dos Treinos" (Prototipação & Mobile Nativo)

- **O Que Fazer:** Transicionar do MVP para o App Premium. Iniciar criação de fluxos UI/UX (Login, Dashboard da Biblioteca de Treinos, Player de Vídeos de Calistenia).
- **Skills Essenciais:**
  - **[`mobile-android-design`] / [`mobile-ios-design`]** Essenciais para garantir que a UI siga as diretrizes puras nativas (`Material Design 3` e `Apple HIG`).
  - **[`interaction-design`]** O app deve ser fluído e não parecer apenas uma página da web embutida. As transições devem ter a identidade visual e microinterações de um app premium.
  - **[`architectural-patterns`]** O backend se tornará um produto sério que exigirá banco de dados e APIs limpas, recomendando-se aplicar MVC ou Arquitetura Hexagonal neste ponto.

---

## 3. Diretrizes Fixas e Comportamento dos Agentes

1.  **Diretriz de Idioma:** Toda interpretação deste documento deve gerar respostas, designs e implementação em `Português do Brasil (pt-BR)`.
2.  **Referência Primária:** Este workflow contém o direcional raiz. Se novas dúvidas surgirem, o agente consultará os arquivos suplementares na pasta `/docs/...` deste mesmo repositório, mas deve sempre priorizar o objetivo de negócio listado aqui.
3.  **Tecnologias Prioritárias:** React.js, TailwindCSS e Vite (no MVP web). React Native / Expo no futuro.

---

_// Para auto-setup deste diretório e dependências, siga o desenvolvimento das tracks recomendadas._
