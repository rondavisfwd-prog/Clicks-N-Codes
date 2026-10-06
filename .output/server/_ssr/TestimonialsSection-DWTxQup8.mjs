import { n as __toESM } from "../_runtime.mjs";
import {
  a as metrics,
  c as projects,
  p as testimonials,
} from "./site-BL-5-lz3.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-m5M1pUHp.mjs";
import { o as ArrowRight, s as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as SectionHeader } from "./CTASection-Bdx--wDO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TestimonialsSection-DWTxQup8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkSection({ showHeader = true, detailed = false }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "band border-t border-hairline",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "shell",
      children: [
        showHeader
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
              eyebrow: "Selected work",
              title: "Selected work",
              copy: "Sample case studies, structured so real engagements drop straight in.",
              className: "mb-[clamp(3.5rem,8vh,6rem)]",
            })
          : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "flex flex-col gap-[clamp(4.5rem,11vh,9rem)]",
          children: projects.map((project, index) => {
            const flip = index % 2 === 1;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Reveal,
              {
                as: "article",
                className: "group",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-hairline pt-6",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "eyebrow tabular-nums text-accent",
                        children: project.number,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                        className: "eyebrow text-muted-foreground",
                        children: [
                          project.client,
                          " · ",
                          project.industry,
                          " · ",
                          project.year,
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                    className:
                      "mask-rise mt-8 text-display font-bold uppercase",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "span",
                      {
                        className: "mask-rise-inner",
                        children: project.name,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: `mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[5/4]",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className:
                              "absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]",
                            children: /* @__PURE__ */ (0,
                            import_jsx_runtime.jsx)("span", {
                              "aria-hidden": "true",
                              className:
                                "absolute bottom-6 left-6 right-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-ink-foreground/10",
                              children: project.name,
                            }),
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            "aria-hidden": "true",
                            className:
                              "rule-draw absolute inset-x-0 bottom-0 h-px bg-accent",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex flex-col justify-between gap-10",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className: "text-lead",
                                children: project.challenge,
                              }),
                              detailed
                                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    import_jsx_runtime.Fragment,
                                    {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-sm leading-relaxed text-muted-foreground",
                                          children: project.solution,
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("p", {
                                          className:
                                            "text-sm leading-relaxed text-muted-foreground",
                                          children: project.outcome,
                                        }),
                                      ],
                                    },
                                  )
                                : null,
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "text-xs uppercase tracking-[0.18em] text-muted-foreground",
                                children: project.services.join(" / "),
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "div",
                                {
                                  className:
                                    "flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-7",
                                  children: project.metrics.map((metric) =>
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("p", {
                                            className:
                                              "font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em]",
                                            children: metric.value,
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("p", {
                                            className:
                                              "mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground",
                                            children: metric.label,
                                          }),
                                        ],
                                      },
                                      metric.label,
                                    ),
                                  ),
                                },
                              ),
                              project.isPlaceholder
                                ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "p",
                                    {
                                      className:
                                        "mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
                                      children:
                                        "Sample content — figures are placeholders, not verified results",
                                    },
                                  )
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              project.slug,
            );
          }),
        }),
      ],
    }),
  });
}
function MetricsSection() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "band-tight border-t border-hairline",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "shell",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
          className: "grid grid-cols-2 gap-y-12 sm:grid-cols-4",
          children: metrics.map((metric, index) =>
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              Reveal,
              {
                delay: index * 70,
                className:
                  "px-0 sm:border-l sm:border-hairline sm:first:border-l-0 sm:pl-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
                    className:
                      "font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]",
                    children: metric.value,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
                    className:
                      "mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground",
                    children: metric.label,
                  }),
                ],
              },
              metric.label,
            ),
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className:
            "mt-12 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
          children:
            "Placeholder figures — to be replaced with verified numbers",
        }),
      ],
    }),
  });
}
function TestimonialsSection() {
  const [index, setIndex] = (0, import_react.useState)(0);
  const current = testimonials[index];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
    className: "band border-t border-hairline",
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
              className: "eyebrow text-muted-foreground",
              children: "Testimonials",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
          delay: 80,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "blockquote",
            {
              className:
                "mt-[clamp(3rem,7vh,5rem)] max-w-[30ch] font-display text-quote font-light",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-accent",
                  children: "“",
                }),
                current.quote,
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-accent",
                  children: "”",
                }),
              ],
            },
            current.name,
          ),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
          delay: 140,
          className:
            "mt-[clamp(3rem,7vh,4.5rem)] flex flex-wrap items-end justify-between gap-10 border-t border-hairline pt-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-xs uppercase tracking-[0.18em]",
                  children: current.name,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                  className: "mt-3 text-sm text-muted-foreground",
                  children: [current.role, ", ", current.company],
                }),
                current.isPlaceholder
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground/80",
                      children: "Placeholder testimonial",
                    })
                  : null,
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "mr-4 text-xs tabular-nums text-muted-foreground",
                  children: [
                    String(index + 1).padStart(2, "0"),
                    " / ",
                    String(testimonials.length).padStart(2, "0"),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  "aria-label": "Previous testimonial",
                  onClick: () =>
                    setIndex(
                      (i) =>
                        (i - 1 + testimonials.length) % testimonials.length,
                    ),
                  className:
                    "inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ArrowLeft,
                    {
                      className: "size-4",
                      "aria-hidden": "true",
                    },
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  "aria-label": "Next testimonial",
                  onClick: () => setIndex((i) => (i + 1) % testimonials.length),
                  className:
                    "inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    ArrowRight,
                    {
                      className: "size-4",
                      "aria-hidden": "true",
                    },
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { TestimonialsSection as n, WorkSection as r, MetricsSection as t };
