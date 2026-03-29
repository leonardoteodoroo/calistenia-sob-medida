import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 15 usa uma pergunta de sono mais simples e direta", () => {
  const source = readFileSync(
    "src/components/steps/Step15_SleepAndDiet.tsx",
    "utf8",
  );

  assert.match(source, /Quantas horas você costuma dormir por noite\?/);
  assert.match(source, /Menos de 5 horas/);
  assert.match(source, /5 a 6 horas/);
  assert.match(source, /7 a 8 horas/);
  assert.match(source, /Mais de 8 horas/);
});
