# Contexto do Projeto: Calistenia Sob Medida (Quiz e Funil)

Este documento centraliza as informações sobre o projeto de Quiz "Calistenia Sob Medida", seu estado atual e as estratégias aprovadas para o desenvolvimento do entregável final (MVP) de ticket baixo (R$ 19,90).

Isso servirá como memória técnica para futuras expansões estruturais.

---

## 📌 1. Visão Geral do Quiz

O sistema atual (`/home/leonardotl/Área de trabalho/calistenia-sob-medida/`) é um funil de qualificação ("Quiz Onboarding") focado em mulheres interessadas em calistenia, emagrecimento leve e saúde em casa.

### 1.1 Tecnologia e Estrutura Atual

- **Stack Frontend:** React + TypeScript + Vite.
- **Estilização:** Tailwind CSS (configurado com paletas exclusivas).
- **Design System:** O projeto possui um `DESIGN_SYSTEM_Quiz_Calistenia.md` meticulosamente definido, focando em uma estética "Wellness Premium" (Cores: Teal, Rose vibrante, Ivory, Taupe. Tipografia: Open Sans e Merriweather). A estética rejeita intencionalmente o visual "crossfit" em favor do acolhimento.
- **Copy:** A jornada passa por 32 telas documentadas no arquivo `copy_quiz_calistenia.md`, cobrindo desde dados físicos e rotina até gatilhos emocionais (frustrações passadas, qualidade do sono), culminando em uma simulação de "análise em tempo real" e oferta de checkout final.

### 1.2 Objetivo Estratégico do Funil

O objetivo do Quiz não é vender um aplicativo móvel nativo e caro com custos altos de servidor. O objetivo principal é **alimentar o Pixel de conversão (Meta Ads)** validando leads através de um produto "Front-End" de ticket muito baixo, especificamente focado em um valor simbólico para gerar a primeira conversão (R$ 19,90 - embora o copy atual liste R$ 49,00).

---

## 🚀 2. Estratégia de MVP (Entregável de R$ 19,90)

Considerando a premissa de criar o produto que será entregue e vendido no fim desse quiz, sem gastar meses em desenvolvimento, propõem-se 3 linhas de desenvolvimento de baixo custo. **Aguardando definição sobre a viabilidade de geração de conteúdo para escolher a linha.**

### Opção A: O App PWA (A "Netflix" Leve dos Treinos)

A melhor opção caso o volume de conteúdo (Gifs/Vídeos) seja administrável.

- **Experiência:** Uma extensão do projeto React onde a usuária, após a compra, entra numa área restrita via Web App (que pode ser instalado na tela do celular como um PWA).
- **Layout:** "Netflix" simples. Um carrossel de semanas/dias. Clicou no dia, vê 4 a 5 exercícios com Gifs curtos (looping infinito sem áudio) detalhando a postura correta e um botão de timer gigante.
- **Vantagem Técnica:** Continua na stack atual (React). Custo zero de banco de dados e servidores (hospedagem estática Vercel), os Gifs podem ser hospedados em CDN ou serviços gratuitos.

### Opção B: Área de Membros Dinâmica com Ferramentas Gratuitas (Ex: Notion)

A melhor opção se houver limitação técnica e se o foco final for entregar um cronograma mental extenso (arquivos PDF, mentalidade, acompanhamento além de só os vídeos).

- **Experiência:** Você cria toda a jornada dentro do Notion (organizado maravilhosamente bem).
- **O Entregável:** O projeto React atual cria apenas uma vitrine de "Login/Boas Vindas" que, após verificação (ou link simples pós-checkout), direciona a usuária para um Link oculto do Notion. O Notion conteria planners de hábitos e reprodutores embedados do YouTube privado.
- **Vantagem Técnica:** 100% focado no conteúdo. Nenhuma programação complexa no back-end.

### Opção C: Gerador Inteligente de Planos Diários em PDF

A melhor opção se o objetivo for focar fortemente na promessa de personalização feita durante os passos mágicos do Quiz (Passos 30 e 31).

- **Experiência:** Baseado nas respostas (peso atual, meta, nível e áreas de dor reportadas), criamos um script React (ex: `react-pdf`) que gera instantaneamente um arquivo PDF maravilhoso com 28 páginas.
- **O Entregável:** Cada página é um "dia" com links diretos para reproduzir vídeos soltos e dicas de postura. A usuária compra a "revistinha interativa sob medida" dela por 19,90.
- **Vantagem:** O valor percebido do "seu plano gerado na hora" é gigantesco em conversão. Custos de manutenção pós-geração são inexistentes.

---

## 🛠 3. Referências Técnicas Relevantes (Apropriadas de Open Source)

Durante a fase de pesquisa, ignoramos projetos de estatística pesada em R e focamos em arquiteturas móveis. Os seguintes conceitos do _open source_ se aplicariam melhor a um desenvolvimento futuro (quando formos escalar):

1. **Abordagem de Privacidade do "Feeel":** Treinos pré-baixados ou consumidos localmente, excelente uso se usarmos a abordagem PWA (Opção A).
2. **"wger" (Tracker Modular):** Pode inspirar a estrutura de persistência local da "Opção A" (ex: guardar no _Local Storage_ quais dias dos 28 dias do calendário ela já concluiu).
