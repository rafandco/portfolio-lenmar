import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DzCiFLdH.mjs';
import { manifest } from './manifest_BKq9fXb0.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/projects/my-project.astro.mjs');
const _page2 = () => import('./pages/projects/my-project-2.astro.mjs');
const _page3 = () => import('./pages/projects/my-project-3.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/projects/my-project.md", _page1],
    ["src/pages/projects/my-project-2.md", _page2],
    ["src/pages/projects/my-project-3.md", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1f69d07e-deca-4d18-864d-351f11df96bb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
