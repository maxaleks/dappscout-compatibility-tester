import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-77GR5POR.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1704909581129.569";
}
var IFRAME_SANDBOX_ATTRIBUTE = "allow-forms allow-orientation-lock allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-popups";
var IFRAME_ALLOW_ATTRIBUTE = "clipboard-read; clipboard-write;";
var SECOND = 1e3;
function MainRoute() {
  _s();
  const [inputData, setInputData] = (0, import_react.useState)("");
  const [outputData, setOutputData] = (0, import_react.useState)("");
  const [isTesting, setIsTesting] = (0, import_react.useState)(false);
  const [batchSize, setBatchSize] = (0, import_react.useState)(1);
  const [batchTimeout, setBatchTimeout] = (0, import_react.useState)(5);
  (0, import_react.useEffect)(() => {
    setOutputData("");
  }, [inputData]);
  const test = async () => {
    setIsTesting(true);
    try {
      const apps = JSON.parse(inputData).map((app) => ({
        ...app,
        internalWallet: false
      }));
      window.addEventListener("message", (event) => {
        if (event.data.method === "getSafeInfo") {
          const iframes = Array.from(document.querySelectorAll("iframe"));
          const iframe = iframes.find((i) => i.contentWindow === event.source);
          if (iframe) {
            const index = apps.findIndex((app) => app.id === iframe.id);
            apps[index].internalWallet = true;
            iframe.remove();
          }
        }
      });
      async function processBatch(batch) {
        return Promise.all(batch.map((app) => new Promise((resolve) => {
          const iframe = document.createElement("iframe");
          iframe.id = app.id;
          iframe.src = app.url;
          iframe.sandbox = IFRAME_SANDBOX_ATTRIBUTE;
          iframe.allow = IFRAME_ALLOW_ATTRIBUTE;
          document.body.appendChild(iframe);
          setTimeout(() => {
            iframe.remove();
            resolve();
          }, batchTimeout * SECOND);
        })));
      }
      for (let i = 0; i < apps.length; i += batchSize) {
        const batch = apps.slice(i, i + batchSize);
        await processBatch(batch);
      }
      setOutputData(JSON.stringify(apps, null, "  "));
    } catch (e) {
      alert(e.message);
    }
    setIsTesting(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row flex-start margin-bottom margin-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Batch size:" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", value: batchSize, onChange: (e) => setBatchSize(Number(e.target.value)) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Batch timeout (seconds):" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", value: batchTimeout, onChange: (e) => setBatchTimeout(Number(e.target.value)) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Enter the list of dApps:" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: inputData, onChange: (e) => setInputData(e.target.value) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: test, disabled: isTesting, children: "Test" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Results:" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: isTesting ? "Testing..." : outputData, readOnly: true }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 97,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
}
_s(MainRoute, "53JcGELPeHppnKicDWYEtgGO0D0=");
_c = MainRoute;
var _c;
$RefreshReg$(_c, "MainRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MainRoute as default
};
//# sourceMappingURL=/build/routes/_index-X7AUE2LW.js.map
