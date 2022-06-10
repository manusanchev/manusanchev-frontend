"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var serverRenderer$1 = require("@vue/server-renderer");
var vueRouter = require("vue-router");
var head = require("@vueuse/head");
var _imports_0 = "/assets/logo.03d6d6da.png";
var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = /* @__PURE__ */ (() => "\na[data-v-28e8ed6f] {\n  color: #42b983;\n}\nlabel[data-v-28e8ed6f] {\n  margin: 0 0.5em;\n  font-weight: bold;\n}\ncode[data-v-28e8ed6f] {\n  background-color: #eee;\n  padding: 2px 4px;\n  border-radius: 4px;\n  color: #304455;\n}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "HelloWorld",
  __ssrInlineRender: true,
  props: {
    msg: null
  },
  setup(__props) {
    const count = vue.ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><h1 data-v-28e8ed6f>${serverRenderer.ssrInterpolate(__props.msg)}</h1><p data-v-28e8ed6f> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-28e8ed6f>VS Code</a> + <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-28e8ed6f>Volar</a></p><p data-v-28e8ed6f>See <code data-v-28e8ed6f>README.md</code> for more information.</p><p data-v-28e8ed6f><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-28e8ed6f> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-28e8ed6f>Vue 3 Docs</a></p><button type="button" data-v-28e8ed6f>count is: ${serverRenderer.ssrInterpolate(count.value)}</button><p data-v-28e8ed6f> Edit <code data-v-28e8ed6f>components/HelloWorld.vue</code> to test hot module replacement. </p><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HelloWorld.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-28e8ed6f"]]);
var App_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n")();
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><img alt="Vue logo"${serverRenderer.ssrRenderAttr("src", _imports_0)}>`);
      _push(serverRenderer.ssrRenderComponent(HelloWorld, { msg: "Hello Vue 3 + TypeScript + Vite" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const S = "/";
function withPrefix(string, prefix) {
  return string.startsWith(prefix) ? string : prefix + string;
}
function withoutPrefix(string, prefix) {
  return string.startsWith(prefix) ? string.slice(prefix.length) : string;
}
function withSuffix(string, suffix) {
  return string.endsWith(suffix) ? string : string + suffix;
}
function withoutSuffix(string, suffix) {
  return string.endsWith(suffix) ? string.slice(0, -1 * suffix.length) : string;
}
function createUrl(urlLike) {
  if (typeof urlLike === "string" && !(urlLike || "").includes("://")) {
    urlLike = "http://e.g" + withPrefix(urlLike, S);
  }
  return new URL(urlLike.toString());
}
function getFullPath(url, routeBase) {
  url = createUrl(url);
  url.pathname = withSuffix(url.pathname, S);
  let fullPath = withoutPrefix(url.href, url.origin);
  if (routeBase) {
    routeBase = withSuffix(withPrefix(routeBase, S), S);
    if (fullPath.indexOf(routeBase) === 0) {
      fullPath = withPrefix(fullPath.replace(routeBase, ""), S);
    }
  }
  return fullPath;
}
function addPagePropsGetterToRoutes(routes2) {
  routes2.forEach((staticRoute) => {
    const originalProps = staticRoute.props;
    staticRoute.props = (route) => {
      const resolvedProps = originalProps === true ? route.params : typeof originalProps === "function" ? originalProps(route) : originalProps;
      return __spreadValues(__spreadValues(__spreadValues({}, (route.meta.hmr || {}).value), route.meta.state || {}), resolvedProps || {});
    };
  });
}
function defer() {
  const deferred = { status: "pending" };
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = (value) => {
      deferred.status = "resolved";
      return resolve(value);
    };
    deferred.reject = (error) => {
      deferred.status = "rejected";
      return reject(error);
    };
  });
  return deferred;
}
const isRedirect = ({ status = 0 }) => status >= 300 && status < 400;
function useSsrResponse() {
  const deferred = defer();
  let response = {};
  const writeResponse = (params) => {
    Object.assign(response, params);
    if (isRedirect(params)) {
      deferred.resolve(response);
    }
  };
  return {
    deferred,
    response,
    writeResponse,
    isRedirect: () => isRedirect(response),
    redirect: (location, status = 302) => writeResponse({ headers: { location }, status })
  };
}
const UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;
const ESCAPED_CHARS = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escapeUnsafeChars(unsafeChar) {
  return ESCAPED_CHARS[unsafeChar];
}
function serializeState(state) {
  try {
    state = JSON.stringify(state || {}).replace(/\\/g, String.raw`\\`).replace(/'/g, String.raw`\'`).replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
    return `'${state}'`;
  } catch (error) {
    console.error("[SSR] On state serialization -", error, state);
    return "{}";
  }
}
function findDependencies(modules, manifest) {
  const files = /* @__PURE__ */ new Set();
  for (const id of modules || []) {
    for (const file of manifest[id] || []) {
      files.add(file);
    }
  }
  return [...files];
}
function renderPreloadLinks(files) {
  let link = "";
  for (const file of files || []) {
    if (file.endsWith(".js")) {
      link += `<link rel="modulepreload" crossorigin href="${file}">`;
    } else if (file.endsWith(".css")) {
      link += `<link rel="stylesheet" href="${file}">`;
    }
  }
  return link;
}
const containerId = "app";
const containerRE = new RegExp(`<div id="${containerId}"([\\s\\w\\-"'=[\\]]*)><\\/div>`);
function buildHtmlDocument(template, { htmlAttrs, bodyAttrs, headTags, body, initialState }) {
  if (htmlAttrs) {
    template = template.replace("<html", `<html ${htmlAttrs} `);
  }
  if (bodyAttrs) {
    template = template.replace("<body", `<body ${bodyAttrs} `);
  }
  if (headTags) {
    template = template.replace("</head>", `
${headTags}
</head>`);
  }
  return template.replace(containerRE, (_, d1) => `<div id="${containerId}" data-server-rendered="true"${d1 || ""}>${body || ""}</div>

  <script>window.__INITIAL_STATE__=${initialState || "'{}'"}<\/script>`);
}
const getEmptyHtmlParts = () => ({
  headTags: "",
  htmlAttrs: "",
  bodyAttrs: "",
  body: "",
  initialState: void 0,
  dependencies: []
});
const viteSSR$1 = function viteSSR2(options, hook) {
  const renderer = hook || options;
  const { transformState = serializeState } = options;
  return async function(url, _a = {}) {
    var _b = _a, {
      manifest,
      preload = false,
      skip = false,
      template = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script type="module" crossorigin src="/assets/index.dd841236.js"><\/script>
    <link rel="stylesheet" href="/assets/index.f0ced7b7.css">
  </head>
  <body>
    <div id="app"></div>
    
  </body>
</html>
`
    } = _b, extra = __objRest(_b, [
      "manifest",
      "preload",
      "skip",
      "template"
    ]);
    if (skip) {
      return __spreadValues({ html: template }, getEmptyHtmlParts());
    }
    url = createUrl(url);
    const { deferred, response, writeResponse, redirect, isRedirect: isRedirect2 } = useSsrResponse();
    const context = __spreadValues({
      url,
      isClient: false,
      initialState: {},
      redirect,
      writeResponse
    }, extra);
    const payload = await Promise.race([
      renderer(context, __spreadProps(__spreadValues({}, extra), { isRedirect: isRedirect2 })),
      deferred.promise
    ]);
    if (isRedirect2())
      return response;
    const htmlParts = __spreadProps(__spreadValues(__spreadValues({}, getEmptyHtmlParts()), payload), {
      initialState: await transformState(context.initialState || {}, serializeState)
    });
    if (manifest) {
      htmlParts.dependencies = findDependencies(context.modules, manifest);
      if (preload && htmlParts.dependencies.length > 0) {
        htmlParts.headTags += renderPreloadLinks(htmlParts.dependencies);
      }
    }
    return __spreadValues(__spreadValues({
      html: buildHtmlDocument(template, htmlParts)
    }, htmlParts), response);
  };
};
vue.defineComponent({
  name: "ClientOnly",
  setup(_, { slots }) {
    const show = vue.ref(false);
    vue.onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
const CONTEXT_SYMBOL = Symbol();
function provideContext(app, context) {
  app.provide(CONTEXT_SYMBOL, context);
}
const viteSSR = function viteSSR3(App, _a, hook) {
  var _b = _a, { routes: routes2, base, routerOptions = {}, pageProps = { passToPage: true } } = _b, options = __objRest(_b, ["routes", "base", "routerOptions", "pageProps"]);
  if (pageProps && pageProps.passToPage) {
    addPagePropsGetterToRoutes(routes2);
  }
  return viteSSR$1(options, async (context, _a2) => {
    var _b2 = _a2, { isRedirect: isRedirect2 } = _b2, extra = __objRest(_b2, ["isRedirect"]);
    const app = vue.createApp(App);
    const routeBase = base && withoutSuffix(base(context), "/");
    const router = vueRouter.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
      history: vueRouter.createMemoryHistory(routeBase),
      routes: routes2
    }));
    router.beforeEach((to) => {
      to.meta.state = extra.initialState || null;
    });
    provideContext(app, context);
    const fullPath = getFullPath(context.url, routeBase);
    const { head: head$1 } = hook && await hook(__spreadValues({
      app,
      router,
      initialRoute: router.resolve(fullPath)
    }, context)) || {};
    app.use(router);
    router.push(fullPath);
    await router.isReady();
    if (isRedirect2())
      return {};
    Object.assign(context.initialState || {}, (router.currentRoute.value.meta || {}).state || {});
    const body = await serverRenderer$1.renderToString(app, context);
    if (isRedirect2())
      return {};
    const { headTags = "", htmlAttrs = "", bodyAttrs = "" } = head$1 ? head.renderHeadToString(head$1) : {};
    return { body, headTags, htmlAttrs, bodyAttrs };
  });
};
const _sfc_main = {};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "Index",
    component: _sfc_main
  }
];
var main = viteSSR(_sfc_main$1, { routes }, (context) => {
});
exports["default"] = main;
