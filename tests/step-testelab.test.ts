import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("StepTestelab sincroniza os marcadores do corpo com as selecoes", () => {
  const source = readFileSync("src/components/steps/StepTestelab.tsx", "utf8");

  assert.match(source, /marker:\s*\{/);
  assert.match(source, /x:\s*"/);
  assert.match(source, /y:\s*"/);
  assert.match(source, /BODY_PARTS\.map\(\(part\) => \{/);
  assert.match(source, /part\.marker\.x/);
  assert.match(source, /part\.marker\.y/);
  assert.match(
    source,
    /checked \? "scale-100 opacity-100" : "scale-75 opacity-35"/,
  );
});
