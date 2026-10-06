import { n as __toESM } from "../_runtime.mjs";
import { a as metrics, c as projects, p as testimonials } from "./site-BL-5-lz3.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as Reveal } from "./Reveal-DX4ZQs0y.mjs";
import { o as ArrowRight, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as SectionHeader } from "./CTASection-BGN0_oc4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TestimonialsSection-Bdrcq93v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/sections/WorkSection.tsx";
function WorkSection({ showHeader = true, detailed = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "band border-t border-hairline",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: [showHeader ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "Selected work",
				title: "Selected work",
				copy: "Sample case studies, structured so real engagements drop straight in.",
				className: "mb-[clamp(3.5rem,8vh,6rem)]"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 11
			}, this) : null, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-[clamp(4.5rem,11vh,9rem)]",
				children: projects.map((project, index) => {
					const flip = index % 2 === 1;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						as: "article",
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-hairline pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "eyebrow tabular-nums text-accent",
									children: project.number
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 31,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "eyebrow text-muted-foreground",
									children: [
										project.client,
										" · ",
										project.industry,
										" · ",
										project.year
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 34,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 30,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mask-rise mt-8 text-display font-bold uppercase",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "mask-rise-inner",
									children: project.name
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 39,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 38,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: `mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[5/4]",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											"aria-hidden": "true",
											className: "absolute bottom-6 left-6 right-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-ink-foreground/10",
											children: project.name
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 50,
											columnNumber: 23
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 49,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										"aria-hidden": "true",
										className: "rule-draw absolute inset-x-0 bottom-0 h-px bg-accent"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 57,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 48,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-col justify-between gap-10",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-col gap-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-lead",
												children: project.challenge
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 65,
												columnNumber: 23
											}, this),
											detailed ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-sm leading-relaxed text-muted-foreground",
												children: project.solution
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 68,
												columnNumber: 27
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-sm leading-relaxed text-muted-foreground",
												children: project.outcome
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 71,
												columnNumber: 27
											}, this)] }, void 0, true, {
												fileName: _jsxFileName$2,
												lineNumber: 67,
												columnNumber: 25
											}, this) : null,
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
												children: project.services.join(" / ")
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 76,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 64,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-7",
										children: project.metrics.map((metric) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em]",
											children: metric.value
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 85,
											columnNumber: 29
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground",
											children: metric.label
										}, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 88,
											columnNumber: 29
										}, this)] }, metric.label, true, {
											fileName: _jsxFileName$2,
											lineNumber: 84,
											columnNumber: 27
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 82,
										columnNumber: 23
									}, this), project.isPlaceholder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
										children: "Sample content — figures are placeholders, not verified results"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 95,
										columnNumber: 25
									}, this) : null] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 81,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 63,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 43,
								columnNumber: 17
							}, this)
						]
					}, project.slug, true, {
						fileName: _jsxFileName$2,
						lineNumber: 28,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 14,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/sections/MetricsSection.tsx";
function MetricsSection() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "band-tight border-t border-hairline",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
				className: "grid grid-cols-2 gap-y-12 sm:grid-cols-4",
				children: metrics.map((metric, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: index * 70,
					className: "px-0 sm:border-l sm:border-hairline sm:first:border-l-0 sm:pl-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
						className: "font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]",
						children: metric.value
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 16,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
						className: "mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground",
						children: metric.label
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 19,
						columnNumber: 15
					}, this)]
				}, metric.label, true, {
					fileName: _jsxFileName$1,
					lineNumber: 11,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 9,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-12 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
				children: "Placeholder figures — to be replaced with verified numbers"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 25,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/sections/TestimonialsSection.tsx";
function TestimonialsSection() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const current = testimonials[index];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "band border-t border-hairline",
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
						lineNumber: 14,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "eyebrow text-muted-foreground",
						children: "Testimonials"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
						className: "mt-[clamp(3rem,7vh,5rem)] max-w-[30ch] font-display text-quote font-light",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-accent",
								children: "“"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 13
							}, this),
							current.quote,
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-accent",
								children: "”"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 13
							}, this)
						]
					}, current.name, true, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 140,
					className: "mt-[clamp(3rem,7vh,4.5rem)] flex flex-wrap items-end justify-between gap-10 border-t border-hairline pt-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs uppercase tracking-[0.18em]",
							children: current.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: [
								current.role,
								", ",
								current.company
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this),
						current.isPlaceholder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
							children: "Placeholder testimonial"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 15
						}, this) : null
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mr-4 text-xs tabular-nums text-muted-foreground",
								children: [
									String(index + 1).padStart(2, "0"),
									" /",
									" ",
									String(testimonials.length).padStart(2, "0")
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": "Previous testimonial",
								onClick: () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
								className: "inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, {
									className: "size-4",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 62,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								"aria-label": "Next testimonial",
								onClick: () => setIndex((i) => (i + 1) % testimonials.length),
								className: "inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {
									className: "size-4",
									"aria-hidden": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 70,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 5
	}, this);
}
//#endregion
export { TestimonialsSection as n, WorkSection as r, MetricsSection as t };
