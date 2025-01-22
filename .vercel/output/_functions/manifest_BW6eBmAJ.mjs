import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CDCJfGuz.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_By0UzBoG.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/rafa/Developer/portfolio-lenmar/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;object-fit:var(--fit);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/projects/my-project","isIndex":false,"type":"page","pattern":"^\\/projects\\/my-project\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"my-project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/my-project.md","pathname":"/projects/my-project","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/projects/my-project-2","isIndex":false,"type":"page","pattern":"^\\/projects\\/my-project-2\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"my-project-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/my-project-2.md","pathname":"/projects/my-project-2","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/projects/my-project-3","isIndex":false,"type":"page","pattern":"^\\/projects\\/my-project-3\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"my-project-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/my-project-3.md","pathname":"/projects/my-project-3","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"footer[data-astro-cid-sz7xmlte]{margin-top:84px;width:100%;background-color:#000;color:#fff;display:flex;flex-direction:column;align-items:center}ul[data-astro-cid-sz7xmlte]{width:fit-content;padding:16px;display:flex;flex-direction:row;gap:16px;align-items:center}li[data-astro-cid-sz7xmlte]{list-style-type:none}a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff}header[data-astro-cid-3ef6ksr2]{width:100%;position:fixed;left:50%;top:0;bottom:auto;transform:translate(-50%);margin:16px 0;grid-area:header}nav[data-astro-cid-3ef6ksr2]{width:fit-content;margin:0 auto;background-color:#000;border-radius:16px}ul[data-astro-cid-3ef6ksr2]{display:flex;justify-content:space-between;flex-direction:row;align-items:stretch;margin:0;padding:0;border-radius:32px;border:var(--card-border);background-color:var(--gray-medium-transparent);box-shadow:var(--box-shadow);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur)}li[data-astro-cid-3ef6ksr2]{list-style-type:none;margin:8px;padding:8px 0}li[data-astro-cid-3ef6ksr2]:hover{list-style-type:none;margin:8px;padding:8px 0;background-color:gray;border-radius:8px}a[data-astro-cid-3ef6ksr2]{text-decoration:none;color:#fff;padding:8px 16px;border-radius:24px}a[data-astro-cid-3ef6ksr2]:hover{background-color:var(--gray-ultra-light-transparent);backdrop-filter:var(--blur);-webkit-backdrop-filter:var(--blur);text-decoration:none;color:#fff}\nhtml,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/rafa/Developer/portfolio-lenmar/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/portfolio-lenmar/src/pages/projects/my-project-2.md",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/portfolio-lenmar/src/pages/projects/my-project-3.md",{"propagation":"none","containsHead":true}],["C:/Users/rafa/Developer/portfolio-lenmar/src/pages/projects/my-project.md",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/projects/my-project@_@md":"pages/projects/my-project.astro.mjs","\u0000@astro-page:src/pages/projects/my-project-2@_@md":"pages/projects/my-project-2.astro.mjs","\u0000@astro-page:src/pages/projects/my-project-3@_@md":"pages/projects/my-project-3.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/rafa/Developer/portfolio-lenmar/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CL5eQf2j.mjs","C:/Users/rafa/Developer/portfolio-lenmar/src/assets/me.json":"chunks/me_Dd5DOB1n.mjs","\u0000@astrojs-manifest":"manifest_BW6eBmAJ.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"yrBaMvFSibWtpGzD/a/1nFnJ/kct4jNmwLMNTv7D8oo="});

export { manifest };
