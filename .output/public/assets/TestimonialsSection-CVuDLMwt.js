import {
  b as e,
  d as t,
  g as n,
  i as r,
  o as i,
  v as a,
  y as o,
} from "./index-Dhe-Ha2M.js";
import { t as s } from "./Reveal-DWuXEbpd.js";
import { n as c } from "./CTASection-EFTx_IW6.js";
var l = n(`arrow-left`, [
    [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
    [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
  ]),
  u = n(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  d = a();
function f({ showHeader: e = !0, detailed: t = !1 }) {
  return (0, d.jsx)(`section`, {
    className: `band border-t border-hairline`,
    children: (0, d.jsxs)(`div`, {
      className: `shell`,
      children: [
        e
          ? (0, d.jsx)(c, {
              eyebrow: `Selected work`,
              title: `Selected work`,
              copy: `Sample case studies, structured so real engagements drop straight in.`,
              className: `mb-[clamp(3.5rem,8vh,6rem)]`,
            })
          : null,
        (0, d.jsx)(`div`, {
          className: `flex flex-col gap-[clamp(4.5rem,11vh,9rem)]`,
          children: i.map((e, n) => {
            let r = n % 2 == 1;
            return (0, d.jsxs)(
              s,
              {
                as: `article`,
                className: `group`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: `flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-hairline pt-6`,
                    children: [
                      (0, d.jsx)(`span`, {
                        className: `eyebrow tabular-nums text-accent`,
                        children: e.number,
                      }),
                      (0, d.jsxs)(`span`, {
                        className: `eyebrow text-muted-foreground`,
                        children: [e.client, ` · `, e.industry, ` · `, e.year],
                      }),
                    ],
                  }),
                  (0, d.jsx)(`h3`, {
                    className: `mask-rise mt-8 text-display font-bold uppercase`,
                    children: (0, d.jsx)(`span`, {
                      className: `mask-rise-inner`,
                      children: e.name,
                    }),
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 ${r ? `lg:[&>*:first-child]:order-2` : ``}`,
                    children: [
                      (0, d.jsxs)(`div`, {
                        className: `relative aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/9] lg:aspect-[5/4]`,
                        children: [
                          (0, d.jsx)(`div`, {
                            className: `absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]`,
                            children: (0, d.jsx)(`span`, {
                              "aria-hidden": `true`,
                              className: `absolute bottom-6 left-6 right-6 font-display text-[clamp(2rem,5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] text-ink-foreground/10`,
                              children: e.name,
                            }),
                          }),
                          (0, d.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: `rule-draw absolute inset-x-0 bottom-0 h-px bg-accent`,
                          }),
                        ],
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `flex flex-col justify-between gap-10`,
                        children: [
                          (0, d.jsxs)(`div`, {
                            className: `flex flex-col gap-6`,
                            children: [
                              (0, d.jsx)(`p`, {
                                className: `text-lead`,
                                children: e.challenge,
                              }),
                              t
                                ? (0, d.jsxs)(d.Fragment, {
                                    children: [
                                      (0, d.jsx)(`p`, {
                                        className: `text-sm leading-relaxed text-muted-foreground`,
                                        children: e.solution,
                                      }),
                                      (0, d.jsx)(`p`, {
                                        className: `text-sm leading-relaxed text-muted-foreground`,
                                        children: e.outcome,
                                      }),
                                    ],
                                  })
                                : null,
                              (0, d.jsx)(`p`, {
                                className: `text-xs uppercase tracking-[0.18em] text-muted-foreground`,
                                children: e.services.join(` / `),
                              }),
                            ],
                          }),
                          (0, d.jsxs)(`div`, {
                            children: [
                              (0, d.jsx)(`div`, {
                                className: `flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-7`,
                                children: e.metrics.map((e) =>
                                  (0, d.jsxs)(
                                    `div`,
                                    {
                                      children: [
                                        (0, d.jsx)(`p`, {
                                          className: `font-display text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em]`,
                                          children: e.value,
                                        }),
                                        (0, d.jsx)(`p`, {
                                          className: `mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground`,
                                          children: e.label,
                                        }),
                                      ],
                                    },
                                    e.label,
                                  ),
                                ),
                              }),
                              e.isPlaceholder
                                ? (0, d.jsx)(`p`, {
                                    className: `mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground/80`,
                                    children: `Sample content — figures are placeholders, not verified results`,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              e.slug,
            );
          }),
        }),
      ],
    }),
  });
}
function p() {
  return (0, d.jsx)(`section`, {
    className: `band-tight border-t border-hairline`,
    children: (0, d.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, d.jsx)(`dl`, {
          className: `grid grid-cols-2 gap-y-12 sm:grid-cols-4`,
          children: r.map((e, t) =>
            (0, d.jsxs)(
              s,
              {
                delay: t * 70,
                className: `px-0 sm:border-l sm:border-hairline sm:first:border-l-0 sm:pl-8`,
                children: [
                  (0, d.jsx)(`dd`, {
                    className: `font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none tracking-[-0.045em]`,
                    children: e.value,
                  }),
                  (0, d.jsx)(`dt`, {
                    className: `mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground`,
                    children: e.label,
                  }),
                ],
              },
              e.label,
            ),
          ),
        }),
        (0, d.jsx)(`p`, {
          className: `mt-12 text-xs uppercase tracking-[0.16em] text-muted-foreground/80`,
          children: `Placeholder figures — to be replaced with verified numbers`,
        }),
      ],
    }),
  });
}
var m = e(o(), 1);
function h() {
  let [e, n] = (0, m.useState)(0),
    r = t[e];
  return (0, d.jsx)(`section`, {
    className: `band border-t border-hairline`,
    children: (0, d.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, d.jsxs)(s, {
          className: `flex items-center gap-4`,
          children: [
            (0, d.jsx)(`span`, {
              className: `h-px w-10 bg-accent`,
              "aria-hidden": `true`,
            }),
            (0, d.jsx)(`span`, {
              className: `eyebrow text-muted-foreground`,
              children: `Testimonials`,
            }),
          ],
        }),
        (0, d.jsx)(s, {
          delay: 80,
          children: (0, d.jsxs)(
            `blockquote`,
            {
              className: `mt-[clamp(3rem,7vh,5rem)] max-w-[30ch] font-display text-quote font-light`,
              children: [
                (0, d.jsx)(`span`, { className: `text-accent`, children: `“` }),
                r.quote,
                (0, d.jsx)(`span`, { className: `text-accent`, children: `”` }),
              ],
            },
            r.name,
          ),
        }),
        (0, d.jsxs)(s, {
          delay: 140,
          className: `mt-[clamp(3rem,7vh,4.5rem)] flex flex-wrap items-end justify-between gap-10 border-t border-hairline pt-8`,
          children: [
            (0, d.jsxs)(`div`, {
              children: [
                (0, d.jsx)(`p`, {
                  className: `text-xs uppercase tracking-[0.18em]`,
                  children: r.name,
                }),
                (0, d.jsxs)(`p`, {
                  className: `mt-3 text-sm text-muted-foreground`,
                  children: [r.role, `, `, r.company],
                }),
                r.isPlaceholder
                  ? (0, d.jsx)(`p`, {
                      className: `mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground/80`,
                      children: `Placeholder testimonial`,
                    })
                  : null,
              ],
            }),
            (0, d.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, d.jsxs)(`span`, {
                  className: `mr-4 text-xs tabular-nums text-muted-foreground`,
                  children: [
                    String(e + 1).padStart(2, `0`),
                    ` / `,
                    String(t.length).padStart(2, `0`),
                  ],
                }),
                (0, d.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `Previous testimonial`,
                  onClick: () => n((e) => (e - 1 + t.length) % t.length),
                  className: `inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent`,
                  children: (0, d.jsx)(l, {
                    className: `size-4`,
                    "aria-hidden": `true`,
                  }),
                }),
                (0, d.jsx)(`button`, {
                  type: `button`,
                  "aria-label": `Next testimonial`,
                  onClick: () => n((e) => (e + 1) % t.length),
                  className: `inline-flex size-12 items-center justify-center border border-hairline transition-colors duration-500 hover:border-accent hover:text-accent`,
                  children: (0, d.jsx)(u, {
                    className: `size-4`,
                    "aria-hidden": `true`,
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
export { p as n, f as r, h as t };
