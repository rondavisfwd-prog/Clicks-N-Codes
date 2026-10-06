import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-RJP8RCxl.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/PageHero.tsx";
function PageHero({ eyebrow, title, copy }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "shell pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,18vh,12rem)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "h-px w-10 bg-accent",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "eyebrow text-muted-foreground",
					children: eyebrow
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 60,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "mask-rise mt-[clamp(2rem,5vh,3.5rem)] max-w-[16ch] text-display font-bold uppercase",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mask-rise-inner",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			copy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 140,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-10 max-w-[42ch] text-lead text-muted-foreground",
					children: copy
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
//#endregion
export { PageHero as t };
