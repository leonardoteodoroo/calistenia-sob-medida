import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 19 keeps the continue button above the final reinforcement sentence", () => {
  const source = readFileSync(
    new URL(
      "../src/components/steps/Step19_EnergyBenefit.tsx",
      import.meta.url,
    ),
    "utf8",
  );

  const buttonPosition = source.indexOf("<Button");
  const phrasePosition = source.indexOf(
    "Queremos que você viva sua vida ao máximo!",
  );

  assert.ok(buttonPosition >= 0);
  assert.ok(phrasePosition >= 0);
  assert.ok(buttonPosition < phrasePosition);
});
