import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 20 mantém a dica de deslizar mesmo após interação nas réguas", () => {
  const source = readFileSync(
    "src/components/steps/Step20_Measurements.tsx",
    "utf8",
  );

  assert.match(source, /‹ deslize para ajustar ›/);
  assert.match(source, /showHint/);
  assert.match(source, /showHint/);
  assert.match(source, /showGhost=\{!hasInteracted\}/);
  assert.doesNotMatch(source, /showHint=\{!hasInteracted\}/);
});
