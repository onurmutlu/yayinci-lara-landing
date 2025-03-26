import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-YB6EGLMY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/PurchaseCreditsPopup.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PurchaseCreditsPopup.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PurchaseCreditsPopup.jsx"
  );
  import.meta.hot.lastModified = "1743018184000";
}
function PurchaseCreditsPopup({
  onLicenseCodeSubmit,
  currentCredit
}) {
  _s();
  const [licenseCode, setLicenseCode] = (0, import_react.useState)("");
  const [licenseFeedback, setLicenseFeedback] = (0, import_react.useState)("");
  const [showLowTokenWarning, setShowLowTokenWarning] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setShowLowTokenWarning(currentCredit !== void 0 && currentCredit < 20);
  }, [currentCredit]);
  const handleSubmit = () => {
    const normalized = licenseCode.trim().toUpperCase();
    if (normalized.startsWith("LIC-")) {
      const parts = normalized.split("-");
      let amount = 0;
      if (parts[1] === "1WEEK")
        amount = 100;
      else if (parts[1] === "1MONTH")
        amount = 300;
      else if (parts[1] === "3MONTH")
        amount = 700;
      else if (parts[1] === "CUSTOM")
        amount = parseInt(parts[2]) || 0;
      if (amount > 0) {
        onLicenseCodeSubmit(amount);
        setLicenseFeedback(`\u2705 ${amount} token ba\u015Far\u0131yla y\xFCklendi!`);
        setLicenseCode("");
      } else {
        setLicenseFeedback("\u274C Ge\xE7ersiz lisans t\xFCr\xFC.");
      }
    } else {
      setLicenseFeedback("\u274C Lisans kodu format\u0131 hatal\u0131.");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: showLowTokenWarning && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "token-warning-modal", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Token Y\xFCkleme" }, void 0, false, {
      fileName: "app/components/PurchaseCreditsPopup.jsx",
      lineNumber: 60,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\xD6deme yapt\u0131ysan\u0131z ald\u0131\u011F\u0131n\u0131z lisans kodunu buraya girerek tokenlerinizi aktive edebilirsiniz." }, void 0, false, {
      fileName: "app/components/PurchaseCreditsPopup.jsx",
      lineNumber: 61,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Lisans Kodunu Girin (\xF6rnek: LIC-1WEEK-XYZ123)", value: licenseCode, onChange: (e) => setLicenseCode(e.target.value) }, void 0, false, {
      fileName: "app/components/PurchaseCreditsPopup.jsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleSubmit, children: "\u2705 Lisans\u0131 Uygula" }, void 0, false, {
      fileName: "app/components/PurchaseCreditsPopup.jsx",
      lineNumber: 66,
      columnNumber: 11
    }, this),
    licenseFeedback && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: licenseFeedback }, void 0, false, {
      fileName: "app/components/PurchaseCreditsPopup.jsx",
      lineNumber: 67,
      columnNumber: 31
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PurchaseCreditsPopup.jsx",
    lineNumber: 59,
    columnNumber: 31
  }, this) }, void 0, false, {
    fileName: "app/components/PurchaseCreditsPopup.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(PurchaseCreditsPopup, "T+VyHzgS7W43idH/PfSHJIlVJyk=");
_c = PurchaseCreditsPopup;
var _c;
$RefreshReg$(_c, "PurchaseCreditsPopup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/index.jsx"
  );
  import.meta.hot.lastModified = "1743018184000";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen bg-black text-white flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold text-purple-300", children: "YAYINCI-LARA" }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-400 mt-4 text-center max-w-xl", children: "GPT destekli i\xE7erik \xF6nerileriyle yay\u0131nc\u0131lara otomatik Telegram y\xF6netimi sunan ak\u0131ll\u0131 kontrol paneli." }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PurchaseCreditsPopup, { onLicenseCodeSubmit: (amount) => alert(`Token: ${amount}`), currentCredit: 10 }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/index.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-WCJG5VEH.js.map
