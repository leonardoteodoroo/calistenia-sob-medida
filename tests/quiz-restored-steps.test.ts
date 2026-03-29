import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("hero separado existe e App o usa como primeiro step", () => {
  assert.equal(existsSync("src/components/steps/step_Hero.tsx"), true);

  const appSource = readFileSync("src/App.tsx", "utf8");
  const heroIndex = appSource.indexOf("step_Hero");
  const genderIndex = appSource.indexOf("Step01_Gender");

  assert.notEqual(heroIndex, -1);
  assert.notEqual(genderIndex, -1);
  assert.ok(heroIndex < genderIndex);
});

test("Step01_Gender voltou ao seletor antigo com a copy pedida", () => {
  const source = readFileSync("src/components/steps/Step01_Gender.tsx", "utf8");

  assert.match(source, /Para isso, precisamos de algumas informações\./);
  assert.match(source, /Para começar, você é:/);
  assert.match(source, /MULHER/);
  assert.match(source, /HOMEM/);
  assert.match(source, /grid-cols-2/);
});

test("App coloca o mosaico numérico após idade e move experiência antes do objetivo", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");

  const ageIndex = appSource.indexOf("<Step02_Age");
  const socialProofIndex = appSource.indexOf("<Step03_SocialProof");
  const experienceIndex = appSource.indexOf("<Step04_Experience");
  const motivationIndex = appSource.indexOf("<Step05_Motivation");
  const objectiveIndex = appSource.indexOf("<Step06_Objective");
  const secondaryGoalsIndex = appSource.indexOf("<Step07_SecondaryGoals");

  assert.ok(ageIndex < socialProofIndex);
  assert.ok(socialProofIndex < experienceIndex);
  assert.ok(experienceIndex < motivationIndex);
  assert.ok(motivationIndex < objectiveIndex);
  assert.ok(objectiveIndex < secondaryGoalsIndex);
});

test('App coloca o carrossel de depoimentos após "corpo dos sonhos"', () => {
  const appSource = readFileSync("src/App.tsx", "utf8");

  const dreamBodyIndex = appSource.indexOf("<Step10_DreamBody");
  const carouselIndex = appSource.indexOf("<Step08_SocialProofCarousel");
  const obstaclesIndex = appSource.indexOf("<Step16_Obstacles");

  assert.ok(dreamBodyIndex < carouselIndex);
  assert.ok(carouselIndex < obstaclesIndex);
});

test("App coloca o mural do amor antes do step das réguas", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");

  const wallOfLoveIndex = appSource.indexOf("<Step14_WallOfLove");
  const measurementsIndex = appSource.indexOf("<Step20_Measurements");
  const processingIndex = appSource.indexOf("<Step21_Processing");

  assert.ok(wallOfLoveIndex < measurementsIndex);
  assert.ok(measurementsIndex < processingIndex);
});

test("App usa a sequência energia, benefício e sono", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");

  const exerciseFrequencyIndex = appSource.indexOf("<StepExerciseFrequency");
  const energyIndex = appSource.indexOf("<Step13_EnergyLevels");
  const benefitIndex = appSource.indexOf("<Step19_EnergyBenefit");
  const sleepIndex = appSource.indexOf("<Step15_SleepAndDiet");

  assert.ok(exerciseFrequencyIndex < energyIndex);
  assert.ok(energyIndex < benefitIndex);
  assert.ok(benefitIndex < sleepIndex);
});

test("Step13_EnergyLevels mantém os ícones e volta para a copy mais conversacional", () => {
  const source = readFileSync(
    "src/components/steps/Step13_EnergyLevels.tsx",
    "utf8",
  );

  assert.match(source, /BatteryLow/);
  assert.match(source, /BatteryMedium/);
  assert.match(source, /BatteryWarning/);
  assert.match(source, /BatteryFull/);
  assert.match(source, /Como está sua energia durante o dia\?/);
  assert.match(source, /Baixa, vivo cansada ao longo do dia/);
  assert.match(source, /Caio depois do almoço/);
});

test("carrossel e mural do amor usam as headlines pedidas", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");
  const carouselSource = readFileSync(
    "src/components/steps/Step08_SocialProofCarousel.tsx",
    "utf8",
  );
  const wallOfLoveSource = readFileSync(
    "src/components/steps/Step14_WallOfLove.tsx",
    "utf8",
  );

  assert.equal(appSource.includes("Step14_WallOfLove"), true);
  assert.match(carouselSource, /Gente comum, resultado real sem drama/);
  assert.match(wallOfLoveSource, /Elas começaram do zero\. E continuaram\./);
  assert.match(wallOfLoveSource, /começaram do zero\./);
});

test("novos steps de frequência, hábito e gatilho de ganho de peso existem com a copy pedida", () => {
  const frequencySource = readFileSync(
    "src/components/steps/StepExerciseFrequency.tsx",
    "utf8",
  );
  const habitSource = readFileSync(
    "src/components/steps/StepHabitBlockers.tsx",
    "utf8",
  );
  const weightGainSource = readFileSync(
    "src/components/steps/StepWeightGainTriggers.tsx",
    "utf8",
  );

  assert.match(
    frequencySource,
    /Com que frequência você se exercita ou caminha\?/,
  );
  assert.match(habitSource, /Qual hábito mais te atrapalha\?/);
  assert.match(
    weightGainSource,
    /Algum destes eventos levou ao ganho de peso\?/,
  );
});

test("App coloca o gatilho de ganho de peso antes do motivo principal", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");

  const impactIndex = appSource.indexOf("<Step13_Impact");
  const weightGainIndex = appSource.indexOf("<StepWeightGainTriggers");
  const mainReasonIndex = appSource.indexOf("<Step18_MainReason");

  assert.ok(impactIndex < weightGainIndex);
  assert.ok(weightGainIndex < mainReasonIndex);
});
