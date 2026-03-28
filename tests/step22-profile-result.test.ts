import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 22 uses the shared sticky cta button", () => {
  const source = readFileSync(
    "src/components/steps/Step22_ProfileResult.tsx",
    "utf8",
  );

  assert.match(source, /Resultado do Processamento/);
  assert.match(source, /Seu Perfil Detectado/);
  assert.match(source, /Leitura do seu momento/);
  assert.match(source, /O que esperar/);

  assert.match(
    source,
    /import \{ StickyButton \} from "\.\.\/ui\/StickyButton"/,
  );
  assert.match(
    source,
    /pb-\[calc\(env\(safe-area-inset-bottom,0px\)\+12rem\)\]/,
  );
  assert.match(source, /<StickyButton/);
  assert.match(source, /helperText="Próximo passo"/);
  assert.match(source, /Ver Meu Plano Completo/);
  assert.doesNotMatch(source, /<Button/);
});
