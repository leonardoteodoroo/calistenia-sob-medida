export type QuizAnswers = Record<string, string | undefined>;

export type QuizProfile = {
  profileLabel: string;
  summary: string;
  primaryGoalLabel: string;
  dailyTimeLabel: string;
  scores: {
    consistency: number;
    recovery: number;
    fatLossDirection: number;
  };
  mainObstacleLabel: string;
  mainObstacleDetail: string;
  next14DayFocus: string;
  promiseText: string;
  focusAreasLabel: string;
  weightProjectionText: string | null;
};

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

function parseWeight(value?: string) {
  if (!value) return null;

  const normalized = value.replace(",", ".").replace(/[^\d.]/g, "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function getGoalText(value?: string) {
  switch (value) {
    case "perder_peso":
      return "Emagrecer e definir em casa";
    case "manter_peso":
      return "Ficar firme e em forma";
    default:
      return "Ganhar consistência e direção";
  }
}

function getObstacleText(value?: string) {
  switch (value) {
    case "tempo":
      return {
        label: "Falta de tempo real",
        detail:
          "Sua rotina hoje pede sessões curtas e encaixáveis, não treinos longos que você vai abandonar.",
      };
    case "constancia":
      return {
        label: "Constância e rotina quebrada",
        detail:
          "O problema não é esforço. É faltar um plano simples o bastante para você conseguir repetir sem travar.",
      };
    case "metodo":
      return {
        label: "Direção e método",
        detail:
          "Seu corpo responde melhor quando há uma progressão clara. Sem método, cada semana parece um recomeço.",
      };
    case "cansaco":
      return {
        label: "Energia baixa para sustentar o plano",
        detail:
          "Seu primeiro ajuste precisa respeitar seu nível de energia atual para o treino caber na vida real.",
      };
    case "motivacao":
      return {
        label: "Motivação instável",
        detail:
          "Quando o treino parece aleatório, a vontade evapora. Você precisa de vitórias curtas para ganhar embalo.",
      };
    default:
      return {
        label: "Direção e método",
        detail:
          "A melhor evolução vem quando você sabe exatamente o que fazer nos próximos dias, sem improviso.",
      };
  }
}

function getFocusAreasText(value?: string) {
  switch (value) {
    case "barriga":
      return "barriga e cintura";
    case "gluteos":
      return "glúteos e sustentação";
    case "pernas":
      return "pernas e firmeza corporal";
    case "peito":
      return "tronco superior e postura";
    default:
      return "corpo todo com foco em firmeza";
  }
}

function getTimeLabel(value?: string, energy?: string) {
  switch (value) {
    case "10":
      return "10 minutos por dia";
    case "15":
      return "15 minutos por dia";
    case "20":
      return "20 minutos por dia";
    case "30":
      return "30 minutos por dia";
    default:
      return energy === "baixos"
        ? "15 minutos por dia"
        : "15 a 20 minutos por dia";
  }
}

function getConsistencyScore(answers: QuizAnswers) {
  const experienceMap: Record<string, number> = {
    nao: 18,
    sim: 35,
  };

  const routineMap: Record<string, number> = {
    sedentario: 12,
    ativo: 21,
    pe: 18,
  };

  const timeMap: Record<string, number> = {
    "10": 10,
    "15": 16,
    "20": 22,
    "30": 28,
  };

  const obstaclePenalty: Record<string, number> = {
    tempo: -10,
    constancia: -14,
    metodo: -5,
    cansaco: -8,
    motivacao: -9,
  };

  return clamp(
    12 +
      (experienceMap[answers.experiencia ?? ""] ?? 22) +
      (routineMap[answers.dia_tipico ?? ""] ?? 14) +
      (timeMap[answers.tempo_disponivel ?? ""] ?? 16) +
      (obstaclePenalty[answers.maior_trava ?? ""] ?? -4),
  );
}

function getRecoveryScore(answers: QuizAnswers) {
  const energyMap: Record<string, number> = {
    baixos: 10,
    baixa_manha: 18,
    arrasto: 14,
    elevados: 34,
  };

  const sleepMap: Record<string, number> = {
    menos5: 6,
    "5-6": 15,
    "7-8": 30,
    mais8: 26,
  };

  const foodPenalty: Record<string, number> = {
    doces: -6,
    mistura: -4,
    salgados: -3,
    nenhum: 2,
  };

  const mealPenalty: Record<string, number> = {
    cafemanha: -4,
    almoco: -5,
    jantar: -4,
    nenhum: 3,
  };

  return clamp(
    22 +
      (energyMap[answers.nivel_energia ?? ""] ?? 14) +
      (sleepMap[answers.frequencia_sono ?? ""] ?? 12) +
      (foodPenalty[answers.vontade_comer ?? ""] ?? 0) +
      (mealPenalty[answers.padrao_refeicoes ?? ""] ?? 0),
  );
}

function getDirectionScore(answers: QuizAnswers) {
  const goalMap: Record<string, number> = {
    perder_peso: 24,
    manter_peso: 18,
  };

  const bodyMap: Record<string, number> = {
    magra: 18,
    falsa_magra: 22,
    acima_peso: 26,
    muito_acima_peso: 30,
  };

  const obstacleMap: Record<string, number> = {
    metodo: -4,
    constancia: -2,
    tempo: -3,
    cansaco: -2,
    motivacao: -3,
  };

  const reasonBoost: Record<string, number> = {
    confianca: 10,
    saudavel_energia: 8,
    roupas: 7,
    pos_parto: 9,
    outro: 6,
  };

  return clamp(
    30 +
      (goalMap[answers.objetivo_principal ?? ""] ?? 16) +
      (bodyMap[answers.tipo_fisico_atual ?? ""] ?? 20) +
      (reasonBoost[answers.motivo_entrar_forma ?? ""] ?? 5) +
      (obstacleMap[answers.maior_trava ?? ""] ?? 0),
  );
}

function getProfileLabel(avgScore: number) {
  if (avgScore >= 75) return "Base pronta para acelerar";
  if (avgScore >= 60) return "Potencial pronto para destravar";
  return "Recomeço de Alta Prioridade";
}

function getProfileSummary(
  label: string,
  weakestArea: keyof QuizProfile["scores"],
  dailyTimeLabel: string,
) {
  if (label === "Base pronta para acelerar") {
    return `Você já tem base suficiente para acelerar com progressão e manter resultado sem depender de motivação aleatória.`;
  }

  if (label === "Potencial pronto para destravar") {
    return `Seu corpo não precisa de mais informação solta. Precisa de sequência certa para destravar consistência e resposta visível.`;
  }

  if (weakestArea === "recovery") {
    return `Seu plano precisa começar leve e inteligente para voltar a gerar resultado com ${dailyTimeLabel}, sem te sugar logo na primeira semana.`;
  }

  return `Seu melhor caminho agora é ganhar embalo com ${dailyTimeLabel}, reduzindo atrito e deixando o plano fácil de repetir até virar rotina.`;
}

function getPromiseText(
  answers: QuizAnswers,
  focusAreasLabel: string,
  dailyTimeLabel: string,
) {
  if (answers.objetivo_principal === "perder_peso") {
    return `O foco inicial será destravar emagrecimento com treinos curtos, melhorar firmeza em ${focusAreasLabel} e criar resposta corporal sem academia.`;
  }

  return `O foco inicial será modelar ${focusAreasLabel}, fortalecer postura e ganhar definição com sessões realistas de ${dailyTimeLabel}.`;
}

function getNext14DayFocus(
  weakestArea: keyof QuizProfile["scores"],
  dailyTimeLabel: string,
) {
  if (weakestArea === "consistency") {
    return `Blindar sua constância com sessões de ${dailyTimeLabel} e um plano simples o bastante para você não quebrar o ritmo.`;
  }

  if (weakestArea === "recovery") {
    return `Ajustar energia e recuperação para você conseguir sustentar sessões de ${dailyTimeLabel}, sem sensação de esgotamento logo no começo.`;
  }

  return `Dar direção ao emagrecimento com progressão clara, foco certo e metas realistas para as próximas duas semanas.`;
}

export function buildQuizProfile(answers: QuizAnswers): QuizProfile {
  const scores = {
    consistency: getConsistencyScore(answers),
    recovery: getRecoveryScore(answers),
    fatLossDirection: getDirectionScore(answers),
  };

  const weakestArea = (Object.entries(scores).sort(
    (a, b) => a[1] - b[1],
  )[0]?.[0] ?? "consistency") as keyof QuizProfile["scores"];
  const avgScore =
    (scores.consistency + scores.recovery + scores.fatLossDirection) / 3;
  const profileLabel = getProfileLabel(avgScore);
  const focusAreasLabel = getFocusAreasText(answers.regioes_foco);
  const dailyTimeLabel = getTimeLabel(
    answers.tempo_disponivel,
    answers.nivel_energia,
  );
  const obstacle = getObstacleText(answers.maior_trava);
  const current = parseWeight(answers.peso_atual);
  const ideal = parseWeight(answers.peso_ideal);

  let weightProjectionText: string | null = null;
  if (ideal) {
    if (!current || current <= ideal) {
      weightProjectionText = `Meta inicial calibrada para ${ideal} kg.`;
    } else {
      const delta = Math.round((current - ideal) * 10) / 10;
      weightProjectionText = `Projeção inicial de ${delta} kg até sua meta de ${ideal} kg.`;
    }
  }

  return {
    profileLabel,
    summary: getProfileSummary(profileLabel, weakestArea, dailyTimeLabel),
    primaryGoalLabel: getGoalText(answers.objetivo_principal),
    dailyTimeLabel,
    scores,
    mainObstacleLabel: obstacle.label,
    mainObstacleDetail: obstacle.detail,
    next14DayFocus: getNext14DayFocus(weakestArea, dailyTimeLabel),
    promiseText: getPromiseText(answers, focusAreasLabel, dailyTimeLabel),
    focusAreasLabel,
    weightProjectionText,
  };
}
