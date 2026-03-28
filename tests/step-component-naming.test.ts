import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("step files follow the updated naming for the final funnel flow", () => {
  assert.equal(
    existsSync("src/components/steps/Step21_ProcessingContent.ts"),
    true,
  );
  assert.equal(
    existsSync("src/components/steps/Step22_ProfileResult.tsx"),
    true,
  );
  assert.equal(existsSync("src/components/steps/Step23_SalesPage.tsx"), true);
});

test("App imports the renamed final-step components", () => {
  const appSource = readFileSync("src/App.tsx", "utf8");
  const processingSource = readFileSync(
    "src/components/steps/Step21_Processing.tsx",
    "utf8",
  );

  assert.match(processingSource, /Step21_ProcessingContent/);
  assert.match(appSource, /Step22_ProfileResult/);
  assert.match(appSource, /Step23_SalesPage/);
});
