import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro } from './astro/server_By0UzBoG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/src/styles/styles.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Portfolio de rafa</title>${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
