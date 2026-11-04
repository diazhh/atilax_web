import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { suite, suitePorGrupo } from "./productos";

test("cinco productos en cuatro grupos, en orden", () => {
  assert.deepEqual(
    suitePorGrupo().map((g) => [g.grupo, g.items.map((i) => i.slug)]),
    [["Campo", ["wellos", "liftos"]], ["Almacenamiento", ["tankos"]],
     ["Planta y corporativo", ["historiador"]], ["Gestión", ["erp"]]],
  );
});
test("ERP sin enlace y con etiqueta", () => {
  const erp = suite.find((i) => i.slug === "erp")!;
  assert.equal(erp.href, undefined);
  assert.equal(erp.etiqueta, "En activación");
});
test("los demás enlazan a su ficha", () => {
  for (const i of suite.filter((x) => x.slug !== "erp")) assert.equal(i.href, `/productos/${i.slug}`);
});
test("todo nombre empieza por ATILAX", () => {
  for (const i of suite) assert.match(i.nombre, /^ATILAX /);
});
test("cada producto tiene sus dos logos", () => {
  for (const i of suite) for (const t of ["color", "blanco"])
    assert.ok(existsSync(`public/images/productos/logos/${i.slug}-horizontal-${t}.svg`), i.slug);
});
