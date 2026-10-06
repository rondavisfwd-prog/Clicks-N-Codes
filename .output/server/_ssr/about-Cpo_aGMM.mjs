import { f as teamDisciplines } from "./site-BL-5-lz3.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
import { t as PageHero } from "./PageHero-RJP8RCxl.mjs";
import { t as CTASection } from "./CTASection-BGN0_oc4.mjs";
import { t as WhyUsSection } from "./WhyUsSection-BsUY4ELW.mjs";
import { t as ProcessSection } from "./ProcessSection-Dl9ZmKgr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cpo_aGMM.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/about.tsx?tsr-split=component";
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: "About",
			title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
				"Creative minds.",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 11,
					columnNumber: 13
				}, this),
				"Technical thinkers.",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 13
				}, this),
				"One ",
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-accent",
					children: "team."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 17
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 40
			}, this),
			copy: "Great digital experiences need both halves of the brain in the same room."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "border-t border-hairline py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-lead",
						children: "Marketing that gets attention. Technology that does something with it."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-lead text-muted-foreground",
							children: "We work as one group across strategy, campaigns, design, engineering and automation, so decisions in one discipline are made with the others in the room."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "flex flex-col",
					children: teamDisciplines.map((discipline, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						as: "li",
						delay: index * 70,
						className: "flex items-baseline gap-6 border-t border-hairline py-6 last:border-b",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "eyebrow text-accent",
							children: String(index + 1).padStart(2, "0")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-display text-title font-bold uppercase",
							children: discipline
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 17
						}, this)]
					}, discipline, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 57
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhyUsSection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProcessSection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { AboutPage as component };
