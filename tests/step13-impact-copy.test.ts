import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 13 de impacto inclui uma opção neutra", () => {
  const source = readFileSync("src/components/steps/Step13_Impact.tsx", "utf8");

  assert.match(source, /Como isso mais impacta sua vida hoje\?/);
  assert.match(source, /Não sinto um grande impacto hoje/);
});
