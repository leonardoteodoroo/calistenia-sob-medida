import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import {
  COMPLETE_DELAY_MS,
  PROCESSING_AUTO_ADVANCE_ENABLED,
  PROCESSING_MARQUEE_LAYOUT,
  PROCESSING_STEPS,
  PROCESSING_TESTIMONIAL_COLUMNS,
  PROCESSING_TOTAL_DURATION_MS,
  STEP_DURATION_MS,
} from "../src/components/steps/Step21_ProcessingContent.ts";

test("step 21 keeps four processing stages with auto redirect enabled again", () => {
  assert.equal(PROCESSING_STEPS.length, 4);
  assert.equal(PROCESSING_AUTO_ADVANCE_ENABLED, true);
  assert.ok(STEP_DURATION_MS >= 1400);
  assert.ok(STEP_DURATION_MS <= 1600);
  assert.equal(
    PROCESSING_TOTAL_DURATION_MS,
    STEP_DURATION_MS * (PROCESSING_STEPS.length - 1) + COMPLETE_DELAY_MS,
  );
});

test("step 21 exposes image-based testimonial columns for the 3d marquee", () => {
  assert.equal(PROCESSING_TESTIMONIAL_COLUMNS.length, 4);

  const testimonials = PROCESSING_TESTIMONIAL_COLUMNS.flat();
  assert.equal(testimonials.length, 12);

  for (const column of PROCESSING_TESTIMONIAL_COLUMNS) {
    assert.equal(column.length, 3);

    for (const testimonial of column) {
      assert.ok(testimonial.name.length > 0);
      assert.ok(testimonial.location.length > 0);
      assert.ok(testimonial.status.length > 0);
      assert.ok(testimonial.quote.length > 8);
      assert.ok(testimonial.image?.startsWith("/images/social-proof/"));
      assert.ok(testimonial.altText?.length);
    }
  }
});

test("step 21 keeps the marquee layout open enough to show a denser social-proof mosaic", () => {
  assert.equal(PROCESSING_MARQUEE_LAYOUT.mobileVisibleColumns, 4);
  assert.equal(PROCESSING_MARQUEE_LAYOUT.desktopVisibleColumns, 4);
  assert.equal(PROCESSING_MARQUEE_LAYOUT.cardWidthClassName, "w-32 sm:w-44");
  assert.equal(
    PROCESSING_MARQUEE_LAYOUT.columnHeightClassName,
    "h-[24rem] sm:h-[27rem]",
  );
  assert.equal(
    PROCESSING_MARQUEE_LAYOUT.stackScaleClassName,
    "origin-top scale-[0.62] sm:scale-[0.92]",
  );
});

test("step 21 renders a visible progress bar between processing and the mosaic", () => {
  const source = readFileSync(
    "src/components/steps/Step21_Processing.tsx",
    "utf8",
  );

  assert.match(source, /Progresso do processamento/);
  assert.match(source, /Math\.round\(progress\)/);
});

test("step 21 restores a soft card treatment for the processing checklist", () => {
  const source = readFileSync(
    "src/components/steps/Step21_Processing.tsx",
    "utf8",
  );

  assert.match(
    source,
    /rounded-\[28px\] border border-primary\/10 bg-white\/70/,
  );
});
