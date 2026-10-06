import { n as __toESM } from "../_runtime.mjs";
import {
  h as workflowStages,
  r as cn,
  t as automationCapabilities,
} from "./site-BL-5-lz3.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-m5M1pUHp.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as CTASection } from "./CTASection-Bdx--wDO.mjs";
import { t as WhyUsSection } from "./WhyUsSection-D59ERUQo.mjs";
import { t as ProcessSection } from "./ProcessSection-sbbRHny1.mjs";
import { t as ServicesSection } from "./ServicesSection-DGlMQ0xQ.mjs";
import {
  n as TestimonialsSection,
  r as WorkSection,
  t as MetricsSection,
} from "./TestimonialsSection-DWTxQup8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D-CSk4Vy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
 * Signature interaction: a field of hairline crosses. The cursor pulls the
 * nearest marks into the accent and gives them weight — attention becoming
 * structure. Pointer-driven only (no timers, no layout thrash).
 */
function ClickField() {
  const ref = (0, import_react.useRef)(null);
  const [pointer, setPointer] = (0, import_react.useState)(null);
  const cols = 14;
  const rows = 7;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    "aria-hidden": "true",
    onPointerMove: (event) => {
      if (event.pointerType !== "mouse") return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      setPointer({
        x: ((event.clientX - rect.left) / rect.width) * cols,
        y: ((event.clientY - rect.top) / rect.height) * rows,
      });
    },
    onPointerLeave: () => setPointer(null),
    className: "relative h-full w-full",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "grid h-full w-full",
      style: {
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      },
      children: Array.from({ length: 98 }).map((_, index) => {
        const cx = index % cols;
        const cy = Math.floor(index / cols);
        const distance = pointer
          ? Math.hypot(pointer.x - cx - 0.5, pointer.y - cy - 0.5)
          : Number.POSITIVE_INFINITY;
        const near = distance < 2.4;
        const strength = near ? 1 - distance / 2.4 : 0;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "span",
          {
            className: "relative block",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out",
                style: {
                  width: 7 + strength * 7,
                  height: 1,
                  backgroundColor: near ? "var(--accent)" : "var(--hairline)",
                  opacity: near ? 0.35 + strength * 0.65 : 0.75,
                },
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out",
                style: {
                  width: 1,
                  height: 7 + strength * 7,
                  backgroundColor: near ? "var(--accent)" : "var(--hairline)",
                  opacity: near ? 0.35 + strength * 0.65 : 0.75,
                },
              }),
            ],
          },
          index,
        );
      }),
    }),
  });
}
function HeroSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    className:
      "relative overflow-hidden pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,20vh,13rem)]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "pointer-events-none absolute inset-x-0 top-1/4 bottom-0 -z-10 hidden md:block",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "shell pointer-events-auto h-full",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClickField, {}),
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "shell",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
            className: "flex items-center gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "h-px w-10 bg-accent",
                "aria-hidden": "true",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "eyebrow text-muted-foreground",
                children: "Marketing · Technology · AI Automation",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
            className: "mt-[clamp(2.5rem,6vh,4.5rem)] text-mega uppercase",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                className: "mask-rise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "mask-rise-inner font-light text-muted-foreground",
                  children: "We create",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 90,
                className: "mask-rise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "mask-rise-inner font-bold",
                  children: "the clicks.",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 180,
                className: "mask-rise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "mask-rise-inner font-light text-muted-foreground",
                  children: "We write",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 270,
                className: "mask-rise",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "mask-rise-inner font-bold",
                  children: [
                    "the ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-accent",
                      children: "code.",
                    }),
                  ],
                }),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mt-[clamp(3rem,7vh,5.5rem)] grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-20",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 140,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "max-w-[42ch] text-lead text-muted-foreground",
                  children:
                    "Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
                delay: 220,
                className: "flex flex-wrap items-center gap-x-8 gap-y-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/contact",
                    className:
                      "group inline-flex items-center gap-3 bg-ink px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5",
                    children: [
                      "Start a Project",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ArrowUpRight,
                        {
                          className:
                            "size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          "aria-hidden": "true",
                        },
                      ),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/work",
                    className:
                      "group relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent",
                    children: [
                      "Explore Our Work",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        "aria-hidden": "true",
                        className:
                          "absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-500 group-hover:scale-x-0",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        "aria-hidden": "true",
                        className:
                          "absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function PositioningSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "band border-t border-hairline bg-ink text-ink-foreground",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "shell",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          className: "flex items-center gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "h-px w-10 bg-accent",
              "aria-hidden": "true",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "eyebrow opacity-50",
              children: "Positioning",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
          className: "mt-[clamp(2.5rem,6vh,4rem)] text-headline uppercase",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              className: "mask-rise",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "mask-rise-inner font-bold",
                children: "One agency.",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              delay: 90,
              className: "mask-rise",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                className: "mask-rise-inner font-light opacity-50",
                children: [
                  "From click to ",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-bold text-accent opacity-100",
                    children: "code.",
                  }),
                ],
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          delay: 160,
          className:
            "mt-[clamp(3rem,8vh,5.5rem)] grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[1fr_1fr] md:gap-20",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "max-w-[36ch] text-lead opacity-80",
              children:
                "Most agencies specialise in either marketing or technology. We bring strategy, marketing, design, development and automation into one team.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
              className: "max-w-[36ch] text-lead opacity-50",
              children:
                "We help businesses attract attention, convert audiences, build digital products and automate what happens behind the scenes.",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          delay: 220,
          className: "mt-[clamp(3rem,7vh,5rem)] flex items-center gap-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "eyebrow shrink-0 text-accent",
              children: "Clicks",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              "aria-hidden": "true",
              className: "relative h-px flex-1 bg-white/15",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "rule-draw absolute inset-0 bg-gradient-to-r from-accent to-white/25",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "eyebrow shrink-0 opacity-70",
              children: "Codes",
            }),
          ],
        }),
      ],
    }),
  });
}
function AISection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "band border-t border-hairline bg-ink text-ink-foreground",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className:
        "shell grid gap-[clamp(3.5rem,9vh,6rem)] md:grid-cols-[1.1fr_0.9fr] md:gap-24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
              className: "flex items-center gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "h-px w-10 bg-accent",
                  "aria-hidden": "true",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "eyebrow opacity-50",
                  children: "AI & Automation",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
              className: "mt-[clamp(2rem,5vh,3.5rem)] text-headline uppercase",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  className: "mask-rise",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "span",
                    {
                      className: "mask-rise-inner font-bold",
                      children: "Automate the busywork.",
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  delay: 90,
                  className: "mask-rise",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "span",
                    {
                      className: "mask-rise-inner font-light opacity-60",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "font-bold text-accent opacity-100",
                          children: "Amplify",
                        }),
                        " the human work.",
                      ],
                    },
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              delay: 140,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "mt-12 max-w-[42ch] text-lead opacity-70",
                children:
                  "We map the repetitive processes inside your business, then build intelligent automation around them — so your team spends its hours where judgment pays.",
              }),
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              delay: 200,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className:
                  "mt-12 max-w-[46ch] border-t border-white/10 pt-8 text-sm leading-[2] opacity-60",
                children: automationCapabilities.map((capability, index) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "span",
                    {
                      children: [
                        index > 0
                          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: "text-accent/60",
                                children: " / ",
                              },
                            )
                          : null,
                        capability,
                      ],
                    },
                    capability,
                  ),
                ),
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
          className: "flex flex-col md:pt-4",
          children: workflowStages.map((stage, index) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Reveal,
              {
                as: "li",
                delay: index * 80,
                className:
                  "group relative border-t border-white/10 py-7 last:border-b",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "flex items-baseline gap-6",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "eyebrow shrink-0 tabular-nums opacity-40",
                        children: String(index + 1).padStart(2, "0"),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "font-display text-lg font-bold uppercase tracking-[-0.02em]",
                            children: stage.label,
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "mt-2 max-w-[34ch] text-sm opacity-55",
                            children: stage.note,
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    "aria-hidden": "true",
                    className:
                      "absolute left-0 top-0 h-px bg-accent transition-all duration-1000",
                    style: {
                      width: `${((index + 1) / workflowStages.length) * 100}%`,
                    },
                  }),
                ],
              },
              stage.label,
            ),
          ),
        }),
      ],
    }),
  });
}
var stages = ["Click", "Conversion", "Code", "Automation"];
/**
 * Signature brand device: a hairline at the foot of the viewport that tracks
 * the homepage story from CLICK through CONVERSION and CODE to AUTOMATION.
 * Decorative and duplicated by the section headings, so hidden from assistive
 * tech; desktop only, and rAF-throttled.
 */
function StoryRail() {
  const [progress, setProgress] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(
        scrollable > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollable))
          : 0,
      );
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  const activeIndex = Math.min(
    stages.length - 1,
    Math.floor(progress * stages.length),
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    "aria-hidden": "true",
    className:
      "pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden lg:block",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "border-t border-hairline bg-background/70 backdrop-blur-md",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "relative h-px w-full bg-transparent",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className:
              "absolute left-0 top-0 h-px bg-accent transition-[width] duration-300 ease-out",
            style: { width: `${progress * 100}%` },
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "shell flex items-center justify-between py-3",
          children: stages.map((stage, index) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "span",
              {
                className: cn(
                  "eyebrow flex items-center gap-2 transition-colors duration-700",
                  index === activeIndex
                    ? "text-accent"
                    : index < activeIndex
                      ? "text-muted-foreground"
                      : "text-muted-foreground/35",
                ),
                children: [
                  stage,
                  index < stages.length - 1
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "ml-2 text-muted-foreground/25",
                        children: "→",
                      })
                    : null,
                ],
              },
              stage,
            ),
          ),
        }),
      ],
    }),
  });
}
function Home() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryRail, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PositioningSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AISection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUsSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricsSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
      ],
    },
  );
}
//#endregion
export { Home as component };
