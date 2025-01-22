import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as createAstro, a as addAttribute } from '../chunks/astro/server_By0UzBoG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_zJICP8x9.mjs';
export { renderers } from '../renderers.mjs';

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/components/icons/Github.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>`;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/components/icons/Instagram.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 11v5"></path><path d="M8 8v.01"></path><path d="M12 16v-5"></path><path d="M16 16v-3a2 2 0 1 0 -4 0"></path><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path></svg>`;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/components/icons/Linkedin.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <nav data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte> <a href="https://www.instagram.com/rafandco/" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Instagram", $$Instagram, { "data-astro-cid-sz7xmlte": true })} </a> </li> <li data-astro-cid-sz7xmlte><a href="https://github.com/rafandco" data-astro-cid-sz7xmlte>${renderComponent($$result, "Github", $$Github, { "data-astro-cid-sz7xmlte": true })}</a></li> <li data-astro-cid-sz7xmlte><a href="https://www.linkedin.com/in/rafael-d%C3%ADaz-garc%C3%ADa/" data-astro-cid-sz7xmlte>${renderComponent($$result, "Linkedin", $$Linkedin, { "data-astro-cid-sz7xmlte": true })}</a></li> </ul> </nav> </footer> `;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="/#inicio" data-astro-cid-3ef6ksr2>Inicio</a></li> <li data-astro-cid-3ef6ksr2><a href="/#proyectos" data-astro-cid-3ef6ksr2>Proyectos</a></li> <li data-astro-cid-3ef6ksr2><a href="/#experiencia" data-astro-cid-3ef6ksr2>Experiencia</a></li> <li data-astro-cid-3ef6ksr2><a href="/#habilidades" data-astro-cid-3ef6ksr2>Habilidades</a></li> </ul> </nav> </header> `;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { default: meData } = await import('../chunks/me_Dd5DOB1n.mjs');
  const projects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./projects/my-project-2.md": () => import('../chunks/my-project-2_CuKqgTNQ.mjs').then(n => n._),"./projects/my-project-3.md": () => import('../chunks/my-project-3_CFYZFweK.mjs').then(n => n._),"./projects/my-project.md": () => import('../chunks/my-project_IUmo-5jg.mjs').then(n => n._)}), () => "../pages/projects/*.md");
  console.log(projects);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<section class="hero" id="inicio"> <h1 class="nombre">${meData.nombre}</h1> <p class="profesion">${meData.profesion}</p> <p class="bio">${meData.bio}</p> </section> <section id="proyectos"> <h2>Proyectos</h2> ${projects.map((project) => renderTemplate`<a${addAttribute(project.url, "href")} class="enlace-proyecto"> <article class="proyecto"> <h3>${project.frontmatter.title}</h3> <p>${project.frontmatter.description}</p> </article> </a>`)} </section> <section id="experiencia"> <h2>Experiencia</h2> ${meData.experiencia.map((exp) => renderTemplate`<article class="experiencia"> <p class="exp-nombre">${exp.nombre}</p> <p class="exp-descripcion">${exp.descripcion}</p> <p class="exp-fecha">${exp.fecha}</p> </article>`)} </section> <section id="habilidades"> <h2>Habilidades</h2> <div class="envoltura-habilidades"> ${meData.habilidades.map((habilidad) => renderTemplate`<article class="habilidad"> <p>${habilidad}</p> </article>`)} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/rafa/Developer/portfolio-lenmar/src/pages/index.astro", void 0);

const $$file = "C:/Users/rafa/Developer/portfolio-lenmar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
