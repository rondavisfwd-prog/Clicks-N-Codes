import { n as __toESM } from "../_runtime.mjs";
import { d as site, o as navLinks, r as cn } from "./site-BL-5-lz3.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
  t as QueryClientProvider,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  _ as useRouter,
  c as HeadContent,
  d as createRouter,
  f as Outlet,
  g as Link,
  h as createRootRouteWithContext,
  l as useRouterState,
  m as createFileRoute,
  p as lazyRouteComponent,
  s as Scripts,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-7oHwpNv3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CZIli6Ut.css";
/**
 * Typographic lockup: CLICKS in weight, N in accent, CODES in outline —
 * the two halves of the name held together by the accent.
 */
function Logo({ className, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
    to: "/",
    onClick,
    "aria-label": "Clicks N Codes — home",
    className: cn(
      "group inline-flex items-baseline gap-[0.3em] font-display text-sm font-bold uppercase tracking-[-0.01em] sm:text-base",
      className,
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        children: "Clicks",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "text-accent transition-transform duration-300 group-hover:-translate-y-0.5",
        children: "N",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "font-normal text-muted-foreground transition-colors duration-300 group-hover:text-current",
        children: "Codes",
      }),
    ],
  });
}
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    className: cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-700",
      scrolled && !open
        ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
        : "border-b border-transparent",
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: cn(
          "shell flex items-center justify-between gap-6 transition-all duration-700",
          scrolled && !open ? "h-16" : "h-[5.25rem]",
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
            "aria-label": "Primary",
            className: "hidden items-center gap-10 md:flex",
            children: [
              navLinks.map((link) =>
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  Link,
                  {
                    to: link.to,
                    className:
                      "group relative text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 hover:text-foreground aria-[current=page]:text-foreground",
                    children: [
                      link.label,
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full group-aria-[current=page]:w-full",
                      }),
                    ],
                  },
                  link.to,
                ),
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                to: "/contact",
                className:
                  "group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5",
                children: [
                  "Start a Project",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                    className:
                      "size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                    "aria-hidden": "true",
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
            type: "button",
            onClick: () => setOpen((v) => !v),
            "aria-expanded": open,
            "aria-label": open ? "Close menu" : "Open menu",
            className:
              "-mr-2 inline-flex size-12 flex-col items-center justify-center gap-2 md:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                "aria-hidden": "true",
                className: cn(
                  "block h-px w-7 bg-foreground transition-transform duration-500",
                  open && "translate-y-[4.5px] rotate-45",
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                "aria-hidden": "true",
                className: cn(
                  "block h-px w-7 bg-foreground transition-transform duration-500",
                  open && "-translate-y-[4.5px] -rotate-45",
                ),
              }),
            ],
          }),
        ],
      }),
      open
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {
            onNavigate: () => setOpen(false),
          })
        : null,
    ],
  });
}
function MobileMenu({ onNavigate }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-background pt-[5.25rem] md:hidden",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
        "aria-label": "Mobile",
        className: "shell flex flex-1 flex-col justify-center gap-1",
        children: navLinks.map((link, i) =>
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            Link,
            {
              to: link.to,
              onClick: onNavigate,
              style: { animationDelay: `${i * 70}ms` },
              className:
                "reveal reveal-in flex items-baseline gap-5 border-b border-hairline py-6 font-display text-[2.75rem] font-bold uppercase leading-none tracking-[-0.04em] aria-[current=page]:text-accent",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "eyebrow text-muted-foreground/70",
                  children: ["0", i + 1],
                }),
                link.label,
              ],
            },
            link.to,
          ),
        ),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "shell pb-14",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
            to: "/contact",
            onClick: onNavigate,
            className:
              "flex items-center justify-between bg-ink px-7 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground",
            children: [
              "Start a Project",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                className: "size-4",
                "aria-hidden": "true",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
            href: `mailto:${site.email}`,
            className:
              "mt-7 block text-sm text-muted-foreground underline-offset-4 hover:underline",
            children: site.email,
          }),
        ],
      }),
    ],
  });
}
function Footer() {
  const year = /* @__PURE__ */ new Date().getFullYear();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    className: "border-t border-hairline bg-background",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "shell pb-[clamp(3rem,6vh,4.5rem)] pt-[clamp(4.5rem,10vh,7rem)]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className:
                    "max-w-[24ch] font-display text-title font-light uppercase text-muted-foreground",
                  children: [
                    "We create the clicks.",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "font-bold text-foreground",
                      children: "We write the code.",
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                  href: `mailto:${site.email}`,
                  className:
                    "group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] transition-colors hover:text-accent",
                  children: [
                    site.email,
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
                      className:
                        "size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      "aria-hidden": "true",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
              "aria-label": "Footer",
              className: "flex flex-col gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "eyebrow text-muted-foreground/70",
                  children: "Navigate",
                }),
                navLinks.map((link) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Link,
                    {
                      to: link.to,
                      className:
                        "w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground",
                      children: link.label,
                    },
                    link.to,
                  ),
                ),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "eyebrow text-muted-foreground/70",
                  children: "Social",
                }),
                site.socials.map((social) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "a",
                    {
                      href: social.href,
                      target: "_blank",
                      rel: "noreferrer noopener",
                      className:
                        "w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground",
                      children: social.label,
                    },
                    social.label,
                  ),
                ),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
          "aria-hidden": "true",
          className:
            "mt-[clamp(4rem,10vh,7rem)] select-none font-display text-mega font-bold uppercase leading-[0.82] text-foreground/[0.07]",
          children: [
            "Clicks ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "text-accent/25",
              children: "N",
            }),
            " Codes",
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "mt-10 flex flex-col gap-3 border-t border-hairline pt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
              children: ["© ", year, " ", site.name],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              children: "Marketing · Technology · AI",
            }),
          ],
        }),
      ],
    }),
  });
}
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "This page didn't load",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Something went wrong on our end. You can try refreshing or head back home.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
              children: "Try again",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
              children: "Go home",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title:
          "Digital Marketing, Development & AI Automation Agency | Clicks N Codes",
      },
      {
        name: "description",
        content:
          "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.",
      },
      {
        name: "author",
        content: "Clicks N Codes",
      },
      {
        property: "og:site_name",
        content: "Clicks N Codes",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@400;500&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.png",
        type: "image/png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
var organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Clicks N Codes",
  description:
    "Digital agency combining marketing, technology and AI: branding, web and software development, e-commerce and AI automation.",
  email: "hello@clicksncodes.com",
  areaServed: "Worldwide",
};
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
            type: "application/ld+json",
            suppressHydrationWarning: true,
            dangerouslySetInnerHTML: {
              __html: JSON.stringify(organizationSchema),
            },
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
        ],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
    client: queryClient,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        id: "main",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
    ],
  });
}
var $$splitComponentImporter$4 = () => import("./routes-D-CSk4Vy.mjs");
var Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Digital Marketing, Development & AI Automation Agency | Clicks N Codes",
      },
      {
        name: "description",
        content:
          "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.",
      },
      {
        property: "og:title",
        content: "Clicks N Codes — Marketing, Technology & AI",
      },
      {
        property: "og:description",
        content:
          "We create the clicks. We write the code. We build what happens next.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./about-CKlx1DtW.mjs");
var Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Creative Minds, Technical Thinkers | Clicks N Codes" },
      {
        name: "description",
        content:
          "Clicks N Codes is a multidisciplinary team of strategists, marketers, designers, developers and AI specialists working as one.",
      },
      {
        property: "og:title",
        content: "About | Clicks N Codes",
      },
      {
        property: "og:description",
        content:
          "One team where creative thinking and technical execution work together.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./contact-Bj8VtlJE.mjs");
var Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Project | Clicks N Codes" },
      {
        name: "description",
        content:
          "Tell us about your marketing, website, product or automation project and we'll come back within one business day.",
      },
      {
        property: "og:title",
        content: "Start a Project | Clicks N Codes",
      },
      {
        property: "og:description",
        content:
          "Share your brief with Clicks N Codes — marketing, technology and AI in one team.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
var $$splitComponentImporter$1 = () => import("./services-DOS9q9F6.mjs");
var Route$1 = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Services — Marketing, Design, Development & AI | Clicks N Codes",
      },
      {
        name: "description",
        content:
          "Marketing, brand and design, software development and AI automation, delivered by one team at Clicks N Codes.",
      },
      {
        property: "og:title",
        content: "Services | Clicks N Codes",
      },
      {
        property: "og:description",
        content:
          "Strategy, campaigns, design, engineering and automation from a single connected team.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitComponentImporter = () => import("./work-BNzQyVce.mjs");
var Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work & Case Studies | Clicks N Codes" },
      {
        name: "description",
        content:
          "Case studies across brand, marketing, product design, development and AI automation from Clicks N Codes.",
      },
      {
        property: "og:title",
        content: "Selected Work | Clicks N Codes",
      },
      {
        property: "og:description",
        content:
          "Editorial case studies spanning marketing, product and automation work.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
var rootRouteChildren = {
  IndexRoute: Route$4.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$5,
  }),
  AboutRoute: Route$3.update({
    id: "/about",
    path: "/about",
    getParentRoute: () => Route$5,
  }),
  ContactRoute: Route$2.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Route$5,
  }),
  ServicesRoute: Route$1.update({
    id: "/services",
    path: "/services",
    getParentRoute: () => Route$5,
  }),
  WorkRoute: Route.update({
    id: "/work",
    path: "/work",
    getParentRoute: () => Route$5,
  }),
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export { getRouter };
