# 🤸‍♀️ Copy do Quiz: Calistenia Sob Medida

> **Última atualização:** 28/03/2026 — 23h35 (Brasília) — Hero + 5 novos steps: ExerciseFrequency, HabitBlockers, WeightGainTriggers, Impact, Hero

Estrutura atual do quiz baseada na implementação real em TSX. Total: **27 steps**, com foco em `venda direta + sensação de diagnóstico premium`.

---

## 🎯 Step 1 — Hero (`step_Hero`)

**Tipo:** Hero women-first com imagem + promessa + CTA

**Eyebrow:** `Análise Calistenia Sob Medida`

**Headline:** `Descubra em 2 minutos qual perfil de treino vai destravar seu corpo em casa`

**Subcopy:** `Uma análise pensada para mulheres que querem emagrecer, definir e voltar a gostar do que veem no espelho sem depender de academia.`

**Subcopy 2:** `Responda rápido e veja a sua leitura personalizada no final.`

**Bullets (card):**

- Diagnóstico com foco em emagrecimento e firmeza
- Treinos curtos para rotina corrida e sem equipamento
- Resultado final com plano inicial mais indicado para o seu momento

👉 **Botão:** `COMEÇAR ANÁLISE`

> 📊 **Meta Pixel:** `QuizStarted`

---

## 👤 Step 2 — Gênero (`Step01_Gender`)

**Tipo:** Seleção visual com 2 cards

**Texto:** `Para isso, precisamos de algumas informações.`

**Título:** `Para começar, você é:`

- [ ] MULHER
- [ ] HOMEM

---

## 🎂 Step 3 — Idade (`Step02_Age`)

**Tipo:** Seleção visual com imagem

**Título:** `Qual é a sua faixa de idade?`

- [ ] 18 – 29 anos
- [ ] 29 – 39 anos
- [ ] 39 – 59 anos
- [ ] - 60 anos

---

## 🏆 Step 4 — Prova Social Numérica (`Step03_SocialProof`)

**Tipo:** Intersticial com número de impacto

**Mensagem principal:**

- `Mosaico editorial com mulheres diversas em casa, sorrindo e confiantes`
- `Mais de 600 mil`
- `É o número de mulheres que nós já ajudamos através desse teste`
- `Editorial da Calistenia Sob Medida`

👉 **Botão:** `CONTINUAR`

---

## 🤔 Step 5 — Experiência (`Step04_Experience`)

**Tipo:** Seleção simples

**Título:** `Você já tentou treinos de calistenia antes?`

- [ ] ✓ Sim
- [ ] ✗ Não

---

## 🚀 Step 6 — Motivação (`Step05_Motivation`)

**Tipo:** Intersticial de encorajamento

**Headline:** `Você vai arrasar!`

**Texto:** `Nosso programa de calistenia é uma opção de fitness fácil e eficaz para todos os níveis. Ajudamos você a entrar em forma usando nenhum equipamento em casa!`

👉 **Botão:** `CONTINUAR`

---

## 🎯 Step 7 — Objetivo Principal (`Step06_Objective`)

**Tipo:** QuizButtons

**Título:** `Qual é o seu principal objetivo?`

- [ ] 🔥 Perder peso
- [ ] ⚖️ Mantenha o peso e fique em forma

---

## ✨ Step 8 — Objetivo Secundário (`Step07_SecondaryGoals`)

**Tipo:** QuizButtons

**Título:** `Que mais espera alcançar com este plano?`

- [ ] 💪 Construir força muscular
- [ ] 🧍 Melhorar a postura
- [ ] 🧘 Reduzir o estresse e a preocupação
- [ ] 🤸 Desenvolver flexibilidade
- [ ] ✨ Outro

**Key salva:** `objetivos_secundarios`

---

## 🪞 Step 9 — Físico Atual (`Step09_BodyType`)

**Tipo:** Grid visual

**Título:** `Como você descreveria seu físico?`

- [ ] Ilustração de corpo: Magra
- [ ] Ilustração de corpo: Falsa magra
- [ ] Ilustração de corpo: Acima do peso
- [ ] Ilustração de corpo: Muito acima do peso

---

## 💭 Step 10 — Corpo Desejado (`Step10_DreamBody`)

**Tipo:** Grid visual

**Título:** `Qual é o seu "corpo dos sonhos"?`

- [ ] Ilustração de corpo: Magra
- [ ] Ilustração de corpo: Tonificada
- [ ] Ilustração de corpo: Com curvas
- [ ] Ilustração de corpo: Média

---

## 🎠 Step 11 — Carrossel de Depoimentos (`Step08_SocialProofCarousel`)

**Tipo:** Carrossel editorial com reviews reais

**Mensagem principal:** `Gente comum, resultado real sem drama`

👉 **Botão:** `Ok. Quero continuar`

> 📊 **Tracking:** `sendQuizEntry()` + `sendQuizQuarter()`
> 📊 **Meta Pixel:** `QuizQuarter`

---

## 🛑 Step 12 — Maior Trava (`Step16_Obstacles`)

**Tipo:** QuizButtons (seleção única)

**Título:** `O que mais te trava hoje?`

- [ ] ⏰ Minha rotina é corrida demais
- [ ] 🔁 Eu começo e não consigo manter
- [ ] 🧭 Não sei qual treino realmente seguir
- [ ] 😮‍💨 Me sinto sem energia para treinar
- [ ] 🫥 Falta motivação e confiança

**Key salva:** `maior_trava`

---

## 🔍 Step 13 — Regiões de Foco (`Step11_FocusAreas`)

**Tipo:** Grid visual

**Título:** `Quais são suas regiões de foco?`

- [ ] Ilustração de corpo: Barriga
- [ ] Ilustração de corpo: Glúteos
- [ ] Ilustração de corpo: Pernas
- [ ] Ilustração de corpo: Peito

**Key salva:** `regioes_foco`

---

## 🏃‍♀️ Step 14 — Rotina + Tempo (`Step12_ActivityLevel`)

**Tipo:** QuizButtons em 2 etapas

**Sub-etapa A — Rotina:**
**Título:** `Como é sua rotina de movimento no dia a dia?`

- [ ] 🪑 Passo a maior parte do tempo sentada
- [ ] 🚶‍♀️ Faço pausas ativas / subo escadas
- [ ] ⏱️ Fico de pé o dia todo

**Sub-etapa B — Tempo disponível:**
**Título:** `Quanto tempo você consegue dedicar de verdade?`

- [ ] ⌛ Tenho 10 min por dia
- [ ] ⚡ Consigo 15 min por dia
- [ ] 🔥 Consigo 20 min por dia
- [ ] 🗓️ Tenho 30 min ou mais

**Keys salvas:** `nível_atividade` → `dia_tipico` + `tempo_disponivel`

---

## 🚶‍♀️ Step 15 — Frequência de Exercício ou Caminhada (`StepExerciseFrequency`)

**Tipo:** QuizButtons

**Título:** `Com que frequência você se exercita ou caminha?`

- [ ] ❌ Nunca
- [ ] 🌱 1 a 2 vezes por semana
- [ ] 🔥 3 a 4 vezes por semana
- [ ] ⚡ Quase todos os dias

**Keys salvas:** `frequencia_exercicios` + `frequencia_caminhadas`

---

## 🔋 Step 16 — Energia (`Step13_EnergyLevels`)

**Tipo:** Seleção simples com ícones de bateria

**Título:** `Como está sua energia durante o dia?`

**Opções:**

- `Baixa, vivo cansada ao longo do dia`
- `Caio depois do almoço`
- `Vou empurrando entre refeições`
- `Boa e estável na maior parte do dia`

**Key salva:** `nivel_energia`

---

## ☀️ Step 17 — Benefício de Energia (`Step19_EnergyBenefit`)

**Tipo:** Intersticial editorial

**Headline:** `A calistenia vai te ajudar a se sentir com mais energia`

**Texto:** `Esses exercícios fortalecem seus músculos, núcleo e aumentam a consciência corporal.`

👉 **Botão:** `CONTINUAR`

---

## 😴 Step 18 — Sono (`Step15_SleepAndDiet`)

**Tipo:** QuizButtons (seleção única)

**Título:** `Quantas horas você costuma dormir por noite?`

- [ ] 😩 Menos de 5 horas
- [ ] 😪 5-6 horas
- [ ] 😌 7-8 horas
- [ ] 😴 Mais de 8 horas

**Key salva:** `frequencia_sono`

---

## 🍽️ Step 19 — Hábito que Mais Atrapalha (`StepHabitBlockers`)

**Tipo:** QuizButtons

**Título:** `Qual hábito mais te atrapalha?`

- [ ] 💭 Comer por emoção ou tédio
- [ ] 🍽️ Comer demais
- [ ] 🌙 Lanches noturnos
- [ ] 🔄 Outro

**Key salva:** `maus_habitos`

---

## 🍩 Step 20 — Alimentação (`Step17_Cravings`)

**Tipo:** QuizButtons em 2 etapas

**Perguntas:**

- `Em qual momento sua alimentação mais pesa contra você?`
  - [ ] 🍫 Doces
  - [ ] 🧂 Salgados
  - [ ] 🍕 Uma mistura dos dois
  - [ ] 🙅‍♀️ Não tenho desejos

- `Você costuma pular alguma refeição?`

**Keys salvas:** `vontade_comer` + `padrao_refeicoes`

---

## 💥 Step 21 — Impacto Emocional (`Step13_Impact`)

**Tipo:** QuizButtons (seleção única)

**Título:** `Como isso mais impacta sua vida hoje?`

- [ ] 📷 Evito fotos ou espelho porque não gosto do que vejo
- [ ] 👗 Minhas roupas não vestem como eu gostaria
- [ ] 😶 Evito sair ou me expor porque não me sinto bem
- [ ] ⚡ Isso pesa mais na minha energia e autoestima diária

**Key salva:** `impacto_principal`

---

## ⚖️ Step 22 — Gatilho de Ganho de Peso (`StepWeightGainTriggers`)

**Tipo:** QuizButtons

**Título:** `Algum destes eventos levou ao ganho de peso?`

- [ ] 💼 Pressão do trabalho
- [ ] 👨‍👩‍👧 Vida familiar agitada
- [ ] ⏳ Metabolismo lento
- [ ] 🔄 Outro

**Key salva:** `motivos_ganho_peso`

---

## 🎯 Step 23 — Motivo Principal (`Step18_MainReason`)

**Tipo:** QuizButtons

**Título:** `Qual é o seu principal motivo para entrar em forma?`

- [ ] 🌟 Me sentir mais confiante com meu corpo
- [ ] ⚡ Me sentir mais saudável e com energia
- [ ] 👗 Vestir melhor minhas roupas
- [ ] 🤱 Voltar a forma após o parto
- [ ] ✨ Outro

**Key salva:** `motivo_entrar_forma`

---

## 💬 Step 24 — Mural do Amor (`Step14_WallOfLove`)

**Tipo:** Mural editorial com depoimentos em ticker

**Hook:** `Elas começaram do zero. E continuaram.`

👉 **Botão:** `Ok. Quero continuar`

---

## 📏 Step 25 — Medidas + Nome (`Step20_Measurements`)

**Tipo:** Sliders + input leve

**Coleta:**

- Altura
- Peso atual
- Peso ideal
- Primeiro nome

👉 **Botão:** `VER MINHA ANÁLISE`

**Keys salvas:** `altura` + `peso_atual` + `peso_ideal` + `nome`

---

## ⚙️ Step 26 — Processing (`Step21_Processing`)

**Tipo:** Loading animado com checklist visual

**Mensagens na tela de processo:**

- Mensagem: Montando seu plano...
- Análise em andamento
- Montando seu plano...
- Cruzando seu objetivo, energia e ritmo atual para liberar a trilha inicial que faz sentido para o seu momento.
- Analisando seu perfil...
- Calculando grade de adaptação...
- Ajustando treinos para 15 minutos...
- Personalizando sua trilha inicial...

---

## 📊 Step 27 — Resultado Premium (`Step22_ProfileResult`)

**Tipo:** Tela de diagnóstico premium

Entrega baseada em `buildQuizProfile()`:

- Perfil detectado
- Score `Consistência`
- Score `Recuperação e Energia`
- Score `Direção de Emagrecimento`
- `Principal trava detectada`
- `Foco dos próximos 14 dias`
- Projeção inicial de peso

👉 **Botão sticky:** `VER MEU PLANO COMPLETO`

> 📊 **Tracking:** `sendQuizResultView()`
> 📊 **Meta Pixel:** `QuizResultViewed`

---

## 🛒 Step 28 — Sales Page (`Step23_SalesPage`)

**Tipo:** Sales Page completa

Lê o mesmo perfil compartilhado do Step 27 para manter coerência até o checkout.

**Oferta atual unificada:**

- Plano passo a passo
- Pagamento único
- **R$ 19,90**

👉 **Botões:** `OBTER MEU PLANO AGORA` / `GARANTIR MEU PLANO`

> 📊 **Tracking:** `sendQuizComplete()`
> 📊 **Meta Pixel:** `QuizSalesPage`

---

## 🗂️ Mapa Técnico do Fluxo

| Step | Componente                   | Tipo                  | Key de dado salvo                                           |
| ---- | ---------------------------- | --------------------- | ----------------------------------------------------------- |
| 1    | `step_Hero`                  | Hero                  | —                                                           |
| 2    | `Step01_Gender`              | Seleção visual        | `genero`                                                    |
| 3    | `Step02_Age`                 | Seleção visual        | `idade`                                                     |
| 4    | `Step03_SocialProof`         | Intersticial numérico | —                                                           |
| 5    | `Step04_Experience`          | Seleção simples       | `experiencia`                                               |
| 6    | `Step05_Motivation`          | Intersticial          | —                                                           |
| 7    | `Step06_Objective`           | QuizButtons           | `objetivo_principal` + `mudanca_de_peso`                    |
| 8    | `Step07_SecondaryGoals`      | QuizButtons           | `objetivos_secundarios` + `flexibilidade`                   |
| 9    | `Step09_BodyType`            | Grid visual           | `tipo_fisico_atual`                                         |
| 10   | `Step10_DreamBody`           | Grid visual           | `corpo_dos_sonhos`                                          |
| 11   | `Step08_SocialProofCarousel` | Carrossel             | —                                                           |
| 12   | `Step16_Obstacles`           | QuizButtons           | `maior_trava`                                               |
| 13   | `Step11_FocusAreas`          | Grid visual           | `regioes_foco`                                              |
| 14   | `Step12_ActivityLevel`       | 2 etapas              | `nível_atividade` → `dia_tipico` + `tempo_disponivel`       |
| 15   | `StepExerciseFrequency`      | QuizButtons           | `frequencia_exercicios` + `frequencia_caminhadas`           |
| 16   | `Step13_EnergyLevels`        | QuizButtons           | `nivel_energia`                                             |
| 17   | `Step19_EnergyBenefit`       | Intersticial          | —                                                           |
| 18   | `Step15_SleepAndDiet`        | QuizButtons           | `frequencia_sono`                                           |
| 19   | `StepHabitBlockers`          | QuizButtons           | `maus_habitos`                                              |
| 20   | `Step17_Cravings`            | 2 etapas              | `alimentacao` → `vontade_comer` + `padrao_refeicoes`        |
| 21   | `Step13_Impact`              | QuizButtons           | `impacto_principal`                                         |
| 22   | `StepWeightGainTriggers`     | QuizButtons           | `motivos_ganho_peso`                                        |
| 23   | `Step18_MainReason`          | QuizButtons           | `motivo_entrar_forma`                                       |
| 24   | `Step14_WallOfLove`          | Mural editorial       | —                                                           |
| 25   | `Step20_Measurements`        | Sliders + input       | `medidas` → `altura` + `peso_atual` + `peso_ideal` + `nome` |
| 26   | `Step21_Processing`          | Loading animado       | —                                                           |
| 27   | `Step22_ProfileResult`       | Resultado premium     | —                                                           |
| 28   | `Step23_SalesPage`           | Sales page            | —                                                           |
