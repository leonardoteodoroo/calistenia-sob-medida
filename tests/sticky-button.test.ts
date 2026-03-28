import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("sticky button lives in the shared ui layer", () => {
  assert.equal(existsSync("src/components/ui/StickyButton.tsx"), true);
});

test("sticky button renders a fixed bottom cta shell", () => {
  const source = readFileSync("src/components/ui/StickyButton.tsx", "utf8");

  assert.match(source, /export interface StickyButtonProps/);
  assert.match(source, /fixed inset-x-0 bottom-0/);
  assert.match(source, /safe-area-inset-bottom/);
  assert.match(source, /rounded-t-\[28px\]/);
  assert.match(source, /border-x-0 border-b-0/);
  assert.match(source, /sm:max-w-3xl/);
  assert.match(source, /<Button/);
});
