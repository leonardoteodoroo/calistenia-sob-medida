import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

import {
  QUIZ_ENTRY_STEP,
  QUIZ_PROGRESS_STEPS,
  QUIZ_QUARTER_STEP,
  QUIZ_RESULT_STEP,
  QUIZ_SALES_STEP,
} from "../src/lib/quizFlow.ts";

test("o funil consolidado usa o fluxo atualizado com marcos explícitos de tracking", () => {
  assert.equal(QUIZ_PROGRESS_STEPS, 27);
  assert.equal(QUIZ_ENTRY_STEP, 9);
  assert.equal(QUIZ_QUARTER_STEP, 11);
  assert.equal(QUIZ_RESULT_STEP, 27);
  assert.equal(QUIZ_SALES_STEP, 28);
});

test("App dispara milestones para quarter, resultado e sales page", () => {
  const source = readFileSync("src/App.tsx", "utf8");

  assert.match(source, /QuizQuarter/);
  assert.match(source, /QuizResultViewed/);
  assert.match(source, /QuizSalesPage/);
});

test("workflow e pasta local expõem a skill de scorecard marketing", () => {
  assert.equal(existsSync("workflow_skills/scorecard-marketing.md"), true);

  const workflowSource = readFileSync(
    ".agents/workflows/calistenia_sob_medida_workflow.md",
    "utf8",
  );
  const skillSource = readFileSync(
    "workflow_skills/scorecard-marketing.md",
    "utf8",
  );

  assert.match(workflowSource, /scorecard-marketing/);
  assert.match(skillSource, /name:\s*scorecard-marketing/);
});

test("tracking registra entrada com objetivo principal e secundário", () => {
  const trackingSource = readFileSync("src/lib/tracking.ts", "utf8");

  assert.match(
    trackingSource,
    /objetivo_principal:\s*answers\.objetivo_principal/,
  );
  assert.match(
    trackingSource,
    /objetivos_secundarios:\s*answers\.objetivos_secundarios/,
  );
});
