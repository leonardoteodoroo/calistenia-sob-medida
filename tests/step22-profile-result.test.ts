import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("step 22 renders the premium diagnostic blocks and the final CTA", () => {
  const source = readFileSync(
    "src/components/steps/Step22_ProfileResult.tsx",
    "utf8",
  );

  assert.match(source, /Consistência/);
  assert.match(source, /Recuperação e Energia/);
  assert.match(source, /Direção de Emagrecimento/);
  assert.match(source, /Principal trava detectada/);
  assert.match(source, /Foco dos próximos 14 dias/);
  assert.match(source, /Target className="h-10 w-10 text-primary"/);
  assert.match(source, /TrendingDown/);
  assert.match(source, /Projeção calculada/);
  assert.match(source, /Dona Celia perdeu 14 kg/);
  assert.match(
    source,
    /Manter o foco pode ser difícil, mas com o nosso guia, simplifica tudo\./,
  );
  assert.match(
    source,
    /Se funcionou para Dona Celia, pode funcionar para voce tambem\./,
  );
  assert.match(source, /Progresso de 3 meses/);
  assert.match(source, /antes_depois_susan_14kg\.webp/);
  assert.match(source, /Ver meu plano completo/i);
});
