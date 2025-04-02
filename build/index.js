var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  // { rel: "stylesheet", href: styles }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "tr", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
import "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-black text-white flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-4xl font-bold text-purple-300", children: "YAYINCI-LARA" }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("p", { className: "text-gray-400 mt-4 text-center max-w-xl", children: "GPT destekli i\xE7erik \xF6nerileriyle yay\u0131nc\u0131lara otomatik Telegram y\xF6netimi sunan ak\u0131ll\u0131 kontrol paneli." }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "mt-8", children: /* @__PURE__ */ jsxDEV3(
      "a",
      {
        href: "/panel",
        className: "bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded",
        children: "Kontrol Paneline Git"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/index.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/panel.jsx
var panel_exports = {};
__export(panel_exports, {
  default: () => Panel
});
import "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Panel() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "min-h-screen bg-gray-900 text-white p-10", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl font-bold mb-6", children: "Kontrol Paneli" }, void 0, !1, {
      fileName: "app/routes/panel.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gray-800 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-semibold mb-4", children: "Telegram Bot Y\xF6netimi" }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 10,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-400 mb-4", children: "Bot ayarlar\u0131n\u0131z\u0131 yap\u0131land\u0131r\u0131n ve mesaj g\xF6nderin." }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 11,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "a",
          {
            href: "/telegram_menu.html",
            target: "_blank",
            className: "inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
            children: "Bot Paneli"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/panel.jsx",
            lineNumber: 12,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/panel.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gray-800 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-semibold mb-4", children: "\u0130\xE7erik \xDCretimi" }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-400 mb-4", children: "GPT destekli i\xE7erik \xF6nerileri al\u0131n." }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("button", { className: "bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded", children: "\u0130\xE7erik Olu\u015Ftur" }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/panel.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "bg-gray-800 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-semibold mb-4", children: "Ayarlar" }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("p", { className: "text-gray-400 mb-4", children: "Sistem ayarlar\u0131n\u0131z\u0131 yap\u0131land\u0131r\u0131n." }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV4("button", { className: "bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded", children: "Ayarlar\u0131 D\xFCzenle" }, void 0, !1, {
          fileName: "app/routes/panel.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/panel.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/panel.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/panel.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MK4DPPFG.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-2MYUCU7P.js", "/build/_shared/chunk-5HSLDJTJ.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-M6QQDY6U.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-O6Q2NIUT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/panel": { id: "routes/panel", parentId: "root", path: "panel", index: void 0, caseSensitive: void 0, module: "/build/routes/panel-FC6O53XJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dce6dd1c", hmr: { runtime: "/build/_shared/chunk-5HSLDJTJ.js", timestamp: 1743556449606 }, url: "/build/manifest-DCE6DD1C.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/panel": {
    id: "routes/panel",
    parentId: "root",
    path: "panel",
    index: void 0,
    caseSensitive: void 0,
    module: panel_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
