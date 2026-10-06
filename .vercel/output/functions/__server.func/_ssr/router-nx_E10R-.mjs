import { r as __toESM } from "../_runtime.mjs";
import { d as site, o as navLinks, r as cn } from "./site-BL-5-lz3.mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-nx_E10R-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-DoFCfHvS.css";
var _jsxFileName$3 = "/app/applet/src/components/Logo.tsx";
/**
* Typographic lockup: CLICKS in weight, N in accent, CODES in outline —
* the two halves of the name held together by the accent.
*/
function Logo({ className, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/",
		onClick,
		"aria-label": "Clicks N Codes — home",
		className: cn("group inline-flex items-baseline gap-[0.3em] font-display text-sm font-bold uppercase tracking-[-0.01em] sm:text-base", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Clicks" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-accent transition-transform duration-300 group-hover:-translate-y-0.5",
				children: "N"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "font-normal text-muted-foreground transition-colors duration-300 group-hover:text-current",
				children: "Codes"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 29,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/Navbar.tsx";
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-700", scrolled && !open ? "border-b border-hairline bg-background/80 backdrop-blur-xl" : "border-b border-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("shell flex items-center justify-between gap-6 transition-all duration-700", scrolled && !open ? "h-16" : "h-[5.25rem]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-10 md:flex",
					children: [navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: link.to,
						className: "group relative text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 hover:text-foreground aria-[current=page]:text-foreground",
						children: [link.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full group-aria-[current=page]:w-full" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 57,
							columnNumber: 15
						}, this)]
					}, link.to, true, {
						fileName: _jsxFileName$2,
						lineNumber: 51,
						columnNumber: 13
					}, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/contact",
						className: "group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5",
						children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
							className: "size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
							"aria-hidden": "true"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 65,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 60,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					className: "-mr-2 inline-flex size-12 flex-col items-center justify-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						className: cn("block h-px w-7 bg-foreground transition-transform duration-500", open && "translate-y-[4.5px] rotate-45")
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 80,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": "true",
						className: cn("block h-px w-7 bg-foreground transition-transform duration-500", open && "-translate-y-[4.5px] -rotate-45")
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 87,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 73,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 38,
			columnNumber: 7
		}, this), open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenu, { onNavigate: () => setOpen(false) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 97,
			columnNumber: 15
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function MobileMenu({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-background pt-[5.25rem] md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
			"aria-label": "Mobile",
			className: "shell flex flex-1 flex-col justify-center gap-1",
			children: navLinks.map((link, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: link.to,
				onClick: onNavigate,
				style: { animationDelay: `${i * 70}ms` },
				className: "reveal reveal-in flex items-baseline gap-5 border-b border-hairline py-6 font-display text-[2.75rem] font-bold uppercase leading-none tracking-[-0.04em] aria-[current=page]:text-accent",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "eyebrow text-muted-foreground/70",
					children: ["0", i + 1]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 117,
					columnNumber: 13
				}, this), link.label]
			}, link.to, true, {
				fileName: _jsxFileName$2,
				lineNumber: 110,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 105,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell pb-14",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/contact",
				onClick: onNavigate,
				className: "flex items-center justify-between bg-ink px-7 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground",
				children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
					className: "size-4",
					"aria-hidden": "true"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 129,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 123,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: `mailto:${site.email}`,
				className: "mt-7 block text-sm text-muted-foreground underline-offset-4 hover:underline",
				children: site.email
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 131,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 122,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 104,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/Footer.tsx";
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-hairline bg-background",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell pb-[clamp(3rem,6vh,4.5rem)] pt-[clamp(4.5rem,10vh,7rem)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "max-w-[24ch] font-display text-title font-light uppercase text-muted-foreground",
							children: [
								"We create the clicks.",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 15,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-bold text-foreground",
									children: "We write the code."
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 16,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 13,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: `mailto:${site.email}`,
							className: "group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] transition-colors hover:text-accent",
							children: [site.email, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {
								className: "size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
								"aria-hidden": "true"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 25,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 20,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 12,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
							"aria-label": "Footer",
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "eyebrow text-muted-foreground/70",
								children: "Navigate"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 33,
								columnNumber: 13
							}, this), navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: link.to,
								className: "w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground",
								children: link.label
							}, link.to, false, {
								fileName: _jsxFileName$1,
								lineNumber: 35,
								columnNumber: 15
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 32,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "eyebrow text-muted-foreground/70",
								children: "Social"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 46,
								columnNumber: 13
							}, this), site.socials.map((social) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: social.href,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground",
								children: social.label
							}, social.label, false, {
								fileName: _jsxFileName$1,
								lineNumber: 48,
								columnNumber: 15
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 45,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 11,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					"aria-hidden": "true",
					className: "mt-[clamp(4rem,10vh,7rem)] select-none font-display text-mega font-bold uppercase leading-[0.82] text-foreground/[0.07]",
					children: [
						"Clicks ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-accent/25",
							children: "N"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 65,
							columnNumber: 18
						}, this),
						" Codes"
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 flex flex-col gap-3 border-t border-hairline pt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
						"© ",
						year,
						" ",
						site.name
					] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 69,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Marketing · Technology · AI" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 72,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 10,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 5
	}, this);
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Digital Marketing, Development & AI Automation Agency | Clicks N Codes" },
			{
				name: "description",
				content: "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth."
			},
			{
				name: "author",
				content: "Clicks N Codes"
			},
			{
				property: "og:site_name",
				content: "Clicks N Codes"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
var organizationSchema = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: "Clicks N Codes",
	description: "Digital agency combining marketing, technology and AI: branding, web and software development, e-commerce and AI automation.",
	email: "hello@clicksncodes.com",
	areaServed: "Worldwide"
};
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 139,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 138,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
			children,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
				type: "application/ld+json",
				suppressHydrationWarning: true,
				dangerouslySetInnerHTML: { __html: JSON.stringify(organizationSchema) }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 150,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 164,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 162,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 166,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 160,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$4 = () => import("./routes-B-VXnOo0.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Digital Marketing, Development & AI Automation Agency | Clicks N Codes" },
		{
			name: "description",
			content: "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth."
		},
		{
			property: "og:title",
			content: "Clicks N Codes — Marketing, Technology & AI"
		},
		{
			property: "og:description",
			content: "We create the clicks. We write the code. We build what happens next."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-Cpo_aGMM.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Creative Minds, Technical Thinkers | Clicks N Codes" },
		{
			name: "description",
			content: "Clicks N Codes is a multidisciplinary team of strategists, marketers, designers, developers and AI specialists working as one."
		},
		{
			property: "og:title",
			content: "About | Clicks N Codes"
		},
		{
			property: "og:description",
			content: "One team where creative thinking and technical execution work together."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-D1MVCPla.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Start a Project | Clicks N Codes" },
		{
			name: "description",
			content: "Tell us about your marketing, website, product or automation project and we'll come back within one business day."
		},
		{
			property: "og:title",
			content: "Start a Project | Clicks N Codes"
		},
		{
			property: "og:description",
			content: "Share your brief with Clicks N Codes — marketing, technology and AI in one team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-DhaNZPOr.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Marketing, Design, Development & AI | Clicks N Codes" },
		{
			name: "description",
			content: "Marketing, brand and design, software development and AI automation, delivered by one team at Clicks N Codes."
		},
		{
			property: "og:title",
			content: "Services | Clicks N Codes"
		},
		{
			property: "og:description",
			content: "Strategy, campaigns, design, engineering and automation from a single connected team."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work-DhENv0CF.mjs");
var Route = createFileRoute("/work")({
	head: () => ({ meta: [
		{ title: "Selected Work & Case Studies | Clicks N Codes" },
		{
			name: "description",
			content: "Case studies across brand, marketing, product design, development and AI automation from Clicks N Codes."
		},
		{
			property: "og:title",
			content: "Selected Work | Clicks N Codes"
		},
		{
			property: "og:description",
			content: "Editorial case studies spanning marketing, product and automation work."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
