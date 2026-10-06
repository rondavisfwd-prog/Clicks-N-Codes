import { s as processSteps } from "./site-BL-5-lz3.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
import { n as SectionHeader } from "./CTASection-BGN0_oc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessSection-Dl9ZmKgr.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/sections/ProcessSection.tsx";
function ProcessSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "band border-t border-hairline",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell grid gap-[clamp(3rem,7vh,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "Process",
				title: "How we turn ideas into impact"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
				className: "flex flex-col",
				children: processSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					as: "li",
					delay: index * 90,
					className: "group grid gap-4 border-t border-hairline py-9 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-sm font-medium tabular-nums text-muted-foreground/70 transition-colors duration-500 group-hover:text-accent",
						children: step.number
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold uppercase leading-none tracking-[-0.025em]",
						children: step.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 17
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground",
						children: step.copy
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 17
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 15
					}, this)]
				}, step.number, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 7,
		columnNumber: 5
	}, this);
}
//#endregion
export { ProcessSection as t };
