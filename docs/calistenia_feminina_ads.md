# Inteligência Competitiva: Calistenia Feminina 🏋️‍♀️🛰️

Este documento registra os achados da mineração de anúncios e a metodologia desenvolvida para identificar ofertas de alto ROI no nicho de calistenia feminina.

## 🔗 Links Oficiais das Ofertas Mineradas (ROI Validado > 30 dias)

Aqui estão as 4 ofertas principais que serviram de base para o MVP de inteligência:

1. **ID: 767483559529238** -> [Ver Anúncio na Meta](https://www.facebook.com/ads/library/?id=767483559529238)
2. **ID: 1616768349566315** -> [Ver Anúncio na Meta](https://www.facebook.com/ads/library/?id=1616768349566315)
3. **ID: 1428255138669165** -> [Ver Anúncio na Meta](https://www.facebook.com/ads/library/?id=1428255138669165)
4. **ID: 1378249250691431** -> [Ver Anúncio na Meta](https://www.facebook.com/ads/library/?id=1378249250691431)

### 🚀 Concorrente Estratégico Adicional

- **Página de Referência (V0):** [Biblioteca de Anúncios - Ver Tudo](https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=BR&is_targeted_country=false&media_type=all&search_type=page&sort_data[direction]=desc&sort_data[mode]=total_impressions&view_all_page_id=157579627438782)

---

## 🔬 Metodologia de Captura (Soberana e Local)

Para chegar a esses resultados sem custos de APIs externas e sem bloqueios da Meta, desenvolvemos o seguinte pipeline:

1. **Infiltração (Playwright Stealth):** Uso de robôs com plugins de disfarce para navegar na Ads Library e extrair o HTML bruto (1.35 MB) sem ser detectado.
2. **Sanitização Offline (Cheerio + Regex):** Limpeza profunda do HTML para remover SVGs e scripts pesados, reduzindo o volume de tokens em 90%.
3. **Extração de Interesse:** Isolamento apenas dos blocos contendo `Library ID` e `Sponsored` para focar nas cópias de anúncios.
4. **Análise de Inteligência (Summarize):** Uso de LLM (GPT-4o) para consolidar dores, promessas e gatilhos mentais das ofertas veteranas.

## 📈 Conclusões Rápidas:

- **Nicho:** Calistenia Feminina (Home Workout).
- **Formatos:** Mentoria Individual (Diagnóstico) e Desafios de 21 Dias.
- **Dores principais:** Falta de tempo, medo de academia, busca por postura e definição rápida sem equipamentos.

---

_Documento gerado em: 2026-03-25 16:34_
_Status do Projeto: Infraestrutura Pronta e Minerando._
