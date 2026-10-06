import { n as __toESM } from "../_runtime.mjs";
import { r as cn } from "./site-BL-5-lz3.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-BGN0_oc4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/SectionHeader.tsx";
function SectionHeader({ eyebrow, title, copy, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("flex flex-col gap-8", align === "center" && "items-center text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "h-px w-10 bg-accent",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 28,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "eyebrow text-muted-foreground",
					children: eyebrow
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 9
			}, this) : null,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 60,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mask-rise max-w-[20ch] text-headline font-bold uppercase",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "mask-rise-inner",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 33,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			copy ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: cn("max-w-[46ch] text-lead text-muted-foreground", align === "center" && "mx-auto"),
					children: copy
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 38,
				columnNumber: 9
			}, this) : null
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/sections/CTASection.tsx";
var prompts = [
	"Need more clicks?",
	"Need better code?",
	"Need smarter automation?"
];
function CTASection() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setIndex((i) => (i + 1) % prompts.length), 2800);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "band border-t border-hairline bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "h-px w-10 bg-accent",
						"aria-hidden": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "eyebrow reveal reveal-in text-accent",
						children: prompts[index]
					}, prompts[index], false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-[clamp(2.5rem,6vh,4rem)] text-mega uppercase",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						className: "mask-rise",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mask-rise-inner font-light opacity-50",
							children: "Got an idea?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 90,
						className: "mask-rise",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mask-rise-inner font-bold",
							children: "Let's build it."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 180,
					className: "mt-[clamp(3rem,8vh,5rem)] flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-12",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-3 bg-accent px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5",
						children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
							className: "size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-sm opacity-50",
						children: "Let's talk."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 25,
		columnNumber: 5
	}, this);
}
//#endregion
export { SectionHeader as n, CTASection as t };
