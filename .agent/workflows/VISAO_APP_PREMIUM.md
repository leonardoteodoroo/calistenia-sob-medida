# Manifest & Architecture: App Premium de Calistenia Feminina

Este documento delineia a visão de produto, tecnologia e design para o **aplicativo definitivo de alto valor** (High-Ticket), que será o _backend_ real do negócio, recebendo as alunas vindas da isca de R$ 19,90.

---

## 💎 1. O Posicionamento (High-Ticket)

O app não é apenas um "rastreador de treinos", é um **concierge de transformação corporal**.
A usuária paga caro pela **organização, estética impecável, clareza e acompanhamento**. A sensação ao abrir o app deve ser a de entrar em um spa tecnológico de luxo: zero poluição visual, zero ansiedade, foco 100% no dia de hoje.

## 🎨 2. A Estética (Design Concept)

Abraçamos o estilo **Wellness Premium / Editorial Clean**:

- **Menos é mais:** Muita área de respiro (negative space) entre os elementos.
- **Cores Calmas:** Fundos orgânicos (Ivory `#FAF9F6`, Taupe `#F3EFEA`) com elementos de destaque em tons de Rose escuro ou Teal. NADA de preto puro ou cores fluorescentes esportivas (não somos o Gympass/Crossfit, somos a solução acolhedora).
- **Tipografia Editorial:** Fontes serifadas elegantes (`Merriweather` ou `Playfair Display`) para títulos pomposos e de saudação ("Bom dia, Laura. Pronta para focar em você?"), e fontes sem serifa extremamente limpas (`Inter` com letter-spacing solto) para botões e dados de saúde.
- **Motion & Microinterações:** As telas não "abrem", elas deslizam suavemente (350ms-600ms easing). O timer de exercícios tem uma animação circular extremamente suave, simulando respiração. Botões têm _haptic feedback_ (vibração leve do celular) ao serem tocados.

## 📱 3. Funcionalidades Core (O que gera "Alto Valor")

Para justificar o ticket alto, o app precisa ir além de PDFs e Gifs listados.

### 3.1. Dashboard "Apenas o Hoje"

Ao abrir, a usuária não vê o mês inteiro ou estatísticas complexas que geram ansiedade. Ela vê **apenas o que tem que fazer hoje**.

- _Exemplo de UI:_ Um card lindo centralizado: "Treino do Dia: Core & Confiança (15 min)".
- Botão enorme de "Começar o Ritual".

### 3.2. Player de Vídeo Cinematic

A experiência durante o exercício é o coração do app.

- Vídeos gravados em formato vertical (Reels/Tiktok style) ocupando a tela quase toda.
- Voice-over (áudio por cima) super claro dando dicas de postura.
- Cronômetro minimalista integrado à UI sobre o vídeo.

### 3.3. Check-ins de Sentimento (Log Emocional)

No fim do treino, a tela pergunta "Como você se sente após o treino de hoje?".

- Opções focadas em emoção (Revigorada, Cansada mas feliz, Com dor, Super confiante).
- Essa conexão emocional aumenta a retenção drásticamente e foge da frieza de apps tradicionais que só pedem o peso atual.

### 3.4. Tracker Visual de Evolução (Galeria Segura)

Uma área criptografada e privada (FaceID/Biometria para acessar) onde ela posta fotos diárias de frente e de perfil.

- O app faz um "fade/slider" comparando o Dia 1 com o Dia 28. Isso gera o depoimento essencial para o marketing.

## 🏗 4. Proposta Arquitetural (Tech Stack Mobile)

Dada a exigência de ser "Alto Valor", a interface precisa rodar lisa como seda (60 FPS), com animações nativas.

**Recomendação de Stack:**

- **Frontend (Mobile App):** React Native (com Expo) ou Flutter. Permite lançar iOS e Android com o mesmo time/código, mantendo acesso total ao hardware (câmera, vibração haptic, áudio).
  - _Estilização:_ RNUILib / NativeWind (para React Native).
  - _Animações:_ Reanimated 3 (para transições físicas perfeitas e fluídas).
- **Backend:** Supabase ou Firebase.
  - Banco de dados PostgreSQL (no caso do Supabase) para guardar relacionamentos de assinaturas e histórico de check-ins.
  - Storage para guardar os vídeos em alta resolução.
- **Vídeo Player:** Integração com um player profissional (Mux ou AWS MediaLive) ou hospedagem com compressão HLS (para não travar o carregamento do vídeo do treino no celular da usuária, independente da internet dela).
- **Pagamento In-App:** Adapty ou RevenueCat gerenciando as renovações de Assinatura via Apple Store e Google Play Store.

## 🛣 5. Roadmap Sugerido

1. **Validação (A Isca):** Subimos o MVP de fato (Opção B ou C que discutimos) a R$ 19,90, validamos CPA e construímos a audiência testando tráfego frio.
2. **Wireframe/UI Design do App Premium (Mês 1):** Usamos o faturamento da isca para desenhar o Figma do App Premium detalhe por detalhe, usando o Design System já aprovado no Quiz.
3. **Desenvolvimento Mobile (Mês 2-4):** Levantamos a estrutura em React Native.
4. **Upsell Master:** Quem comprou a isca lá atrás de R$19,90 recebe uma notificação ou e-mail com 50% de desconto "Fundadores VIP" no novo App Premium Definitivo (Migração da base).
