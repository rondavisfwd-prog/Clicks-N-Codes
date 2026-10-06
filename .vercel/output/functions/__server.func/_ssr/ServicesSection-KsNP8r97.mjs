import { r as __toESM } from "../_runtime.mjs";
import { r as cn, u as serviceGroups } from "./site-BL-5-lz3.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
import { n as Minus, t as Plus } from "../_libs/lucide-react.mjs";
import { n as SectionHeader } from "./CTASection-BGN0_oc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ServicesSection-KsNP8r97.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/sections/ServicesSection.tsx";
function ServicesSection({ showHeader = true }) {
	const [active, setActive] = (0, import_react.useState)(serviceGroups[0].id);
	const current = serviceGroups.find((group) => group.id === active) ?? serviceGroups[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "services",
		className: "band border-t border-hairline",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: [
				showHeader ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
					eyebrow: "Capabilities",
					title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
						"Everything digital.",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 17
						}, this),
						"Connected."
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 15
					}, this),
					className: "mb-[clamp(3.5rem,8vh,6rem)]"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 11
				}, this) : null,
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "flex flex-col",
						children: serviceGroups.map((group) => {
							const isActive = group.id === active;
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "border-b border-hairline first:border-t",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onMouseEnter: () => setActive(group.id),
									onFocus: () => setActive(group.id),
									onClick: () => setActive(group.id),
									"aria-pressed": isActive,
									className: "group flex w-full items-baseline gap-8 py-9 text-left",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("eyebrow transition-colors duration-500", isActive ? "text-accent" : "text-muted-foreground/70"),
										children: group.number
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 52,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("text-headline font-bold uppercase transition-all duration-700", isActive ? "translate-x-1 text-foreground" : "text-foreground/25 group-hover:text-foreground/50"),
										style: { fontSize: "clamp(1.75rem, 3vw, 2.75rem)" },
										children: group.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 60,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 19
								}, this)
							}, group.id, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "reveal reveal-in max-w-[32ch] text-lead",
							children: current.summary
						}, `${current.id}-summary`, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-10 max-w-[38ch] text-sm leading-[1.9] text-muted-foreground",
							children: current.capabilities.map((capability, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-hairline",
								children: " / "
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 21
							}, this) : null, capability] }, capability, true, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 17
							}, this))
						}, current.id, false, {
							fileName: _jsxFileName,
							lineNumber: 84,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:hidden",
					children: serviceGroups.map((group) => {
						const isOpen = group.id === active;
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "border-b border-hairline first:border-t",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActive(isOpen ? "" : group.id),
								"aria-expanded": isOpen,
								className: "flex w-full items-center justify-between gap-5 py-7 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex flex-col gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: cn("eyebrow transition-colors", isOpen ? "text-accent" : "text-muted-foreground/70"),
										children: group.number
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 23
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-display text-[1.75rem] font-bold uppercase leading-none tracking-[-0.03em]",
										children: group.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 125,
										columnNumber: 23
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 21
								}, this), isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, {
									className: "size-5 shrink-0 text-accent",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 23
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, {
									className: "size-5 shrink-0 text-muted-foreground",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 110,
								columnNumber: 19
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 109,
								columnNumber: 17
							}, this), isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pb-8",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-[0.9375rem] leading-relaxed",
									children: group.summary
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-5 text-sm leading-[1.9] text-muted-foreground",
									children: group.capabilities.map((capability, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [index > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-hairline",
										children: " / "
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 151,
										columnNumber: 29
									}, this) : null, capability] }, capability, true, {
										fileName: _jsxFileName,
										lineNumber: 149,
										columnNumber: 25
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 19
							}, this) : null]
						}, group.id, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					className: "mt-14 text-xs text-muted-foreground",
					children: "Need something not listed? It probably sits across two of these."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
export { ServicesSection as t };
