# SOVEREIGN PSYCHO AUDIT - Calistenia Sob Medida

Este documento analisa a integração do **SOVEREIGN_ENGINE** (Psicometria v6.2) na estrutura do quiz de Calistenia.

## 1. Estado Atual do Projeto

- **Arquitetura:** Vite + React (TypeScript) + TailwindCSS.
- **Fluxo:** 22 passos de qualificação + Sales Page de alta densidade.
- **Ponto Forte:** Copy extremamente emocional e visualmente premium.
- **Gargalo Identificado:** O sistema trata todos os leads com a mesma copy na `SalesPage` (Step 22), variando apenas dados físicos (peso/idade).

## 2. Mapeamento de Pontos de Injeção Psíquica

Para transformar o quiz em uma ferramenta de **Perfilamento Invisível**, podemos mapear as seguintes telas:

| Step   | Nome        | Traço Mapeado (OCEAN/ABC) | Ação Proposta                                          |
| :----- | :---------- | :------------------------ | :----------------------------------------------------- |
| **05** | Motivação   | **Reforço Positivo**      | Injetar micro-validação baseada no `contexto_reativo`. |
| **13** | Energia     | **Neuroticismo (N)**      | Identificar leads com alta probabilidade de burnout.   |
| **16** | Obstáculos  | **Conscienciosidade (C)** | Mapear Locus de Controle (Interno vs Externo).         |
| **18** | Main Reason | **Arquétipo / Valores**   | Definir se a persona é "Guerreira" ou "Buscadora".     |

## 3. Possíveis Adições na Estrutura

### A. Integração com SOVEREIGN_ENGINE

- **Script de Telemetria:** No `Step21_Processing.tsx`, enviar o objeto `answers` para o motor local.
- **Lead Scoring 2.0:** No banco de dados (ou n8n), registrar não só o e-mail, mas o **Score Psicométrico** (ex: `maq: 0.1, cons: 0.9`).

### B. Adaptive Sales Page (Copy Dinâmica)

- Alterar o `Step22_SalesPage.tsx` para exibir blocos de texto diferentes dependendo da **Sombra** detectada:
  - **Persona Segura (Baixo N):** Foco em resultados e performance.
  - **Persona Ansiosa (Alto N):** Foco em suporte, grupo de WhatsApp e "menos é mais".

### C. Veredito do Especialista (Efeito Forer)

- Adicionar uma seção na Sales Page: **"O Veredito da Nossa IA sobre o seu Perfil"**.
- Isso aumenta o valor percebido ao mostrar que o plano foi "criado" para a psique da aluna, não apenas para o peso dela.

---

**Status:** Análise Concluída. Pronto para implementação de protótipo de injeção.
