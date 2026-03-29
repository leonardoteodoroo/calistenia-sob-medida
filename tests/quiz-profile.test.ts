import assert from "node:assert/strict";
import test from "node:test";

import { buildQuizProfile } from "../src/lib/quizProfile.ts";

test("buildQuizProfile classifica um recomeço com baixa energia e trava de constancia", () => {
  const profile = buildQuizProfile({
    genero: "mulher",
    idade: "29-39",
    nome: "Ana",
    objetivo_principal: "perder_peso",
    experiencia: "nao",
    tipo_fisico_atual: "muito_acima_peso",
    corpo_dos_sonhos: "tonificada",
    maior_trava: "constancia",
    regioes_foco: "barriga",
    dia_tipico: "sedentario",
    tempo_disponivel: "15",
    nivel_energia: "baixos",
    frequencia_sono: "menos5",
    vontade_comer: "doces",
    padrao_refeicoes: "cafemanha",
    impacto_principal: "fotos",
    motivo_entrar_forma: "confianca",
    peso_atual: "78",
    peso_ideal: "65",
  });

  assert.equal(profile.profileLabel, "Recomeço de Alta Prioridade");
  assert.equal(profile.mainObstacleLabel, "Constância e rotina quebrada");
  assert.match(profile.next14DayFocus, /15 minutos/i);
  assert.ok(profile.scores.consistency <= 45);
  assert.ok(profile.scores.recovery <= 45);
  assert.ok(profile.scores.fatLossDirection >= 55);
  assert.match(profile.weightProjectionText ?? "", /13 kg/);
});

test("buildQuizProfile sobe o tier quando a base ja esta pronta para acelerar", () => {
  const profile = buildQuizProfile({
    genero: "mulher",
    idade: "29-39",
    nome: "Carla",
    objetivo_principal: "manter_peso",
    experiencia: "sim",
    tipo_fisico_atual: "magra",
    corpo_dos_sonhos: "tonificada",
    maior_trava: "metodo",
    regioes_foco: "gluteos",
    dia_tipico: "ativo",
    tempo_disponivel: "30",
    nivel_energia: "elevados",
    frequencia_sono: "7-8",
    vontade_comer: "nenhum",
    padrao_refeicoes: "nenhum",
    impacto_principal: "saidas",
    motivo_entrar_forma: "saudavel_energia",
    peso_atual: "60",
    peso_ideal: "58",
  });

  assert.equal(profile.profileLabel, "Base pronta para acelerar");
  assert.equal(profile.mainObstacleLabel, "Direção e método");
  assert.ok(profile.scores.consistency >= 70);
  assert.ok(profile.scores.recovery >= 70);
  assert.ok(profile.scores.fatLossDirection >= 70);
  assert.match(profile.summary, /acelerar/i);
});
