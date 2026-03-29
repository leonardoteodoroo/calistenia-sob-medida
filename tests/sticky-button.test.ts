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
  assert.match(source, /animate=\{/);
  assert.match(source, /repeat: Infinity/);
  assert.doesNotMatch(source, /motion\.div/);
  assert.doesNotMatch(source, /bg-white\/95/);
  assert.doesNotMatch(source, /helperText/);
  assert.match(source, /<Button/);
});
