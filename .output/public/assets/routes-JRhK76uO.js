import { n as e, r as t, t as n } from "./TestimonialsSection-CVuDLMwt.js";
import { t as r } from "./ServicesSection-BRU0SxIX.js";
import {
  _ as i,
  b as a,
  h as o,
  m as s,
  p as c,
  t as l,
  v as u,
  y as d,
} from "./index-Dhe-Ha2M.js";
import { t as f } from "./Reveal-DWuXEbpd.js";
import { t as p } from "./CTASection-EFTx_IW6.js";
import { t as m } from "./WhyUsSection-B3rmKpJN.js";
import { t as h } from "./ProcessSection-D6uB4pvD.js";
var g = a(d(), 1),
  _ = u();
function v() {
  let e = (0, g.useRef)(null),
    [t, n] = (0, g.useState)(null);
  return (0, _.jsx)(`div`, {
    ref: e,
    "aria-hidden": `true`,
    onPointerMove: (t) => {
      if (t.pointerType !== `mouse`) return;
      let r = e.current?.getBoundingClientRect();
      r &&
        n({
          x: ((t.clientX - r.left) / r.width) * 14,
          y: ((t.clientY - r.top) / r.height) * 7,
        });
    },
    onPointerLeave: () => n(null),
    className: `relative h-full w-full`,
    children: (0, _.jsx)(`div`, {
      className: `grid h-full w-full`,
      style: {
        gridTemplateColumns: `repeat(14, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(7, minmax(0, 1fr))`,
      },
      children: Array.from({ length: 98 }).map((e, n) => {
        let r = n % 14,
          i = Math.floor(n / 14),
          a = t ? Math.hypot(t.x - r - 0.5, t.y - i - 0.5) : 1 / 0,
          o = a < 2.4,
          s = o ? 1 - a / 2.4 : 0;
        return (0, _.jsxs)(
          `span`,
          {
            className: `relative block`,
            children: [
              (0, _.jsx)(`span`, {
                className: `absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out`,
                style: {
                  width: 7 + s * 7,
                  height: 1,
                  backgroundColor: o ? `var(--accent)` : `var(--hairline)`,
                  opacity: o ? 0.35 + s * 0.65 : 0.75,
                },
              }),
              (0, _.jsx)(`span`, {
                className: `absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out`,
                style: {
                  width: 1,
                  height: 7 + s * 7,
                  backgroundColor: o ? `var(--accent)` : `var(--hairline)`,
                  opacity: o ? 0.35 + s * 0.65 : 0.75,
                },
              }),
            ],
          },
          n,
        );
      }),
    }),
  });
}
function y() {
  return (0, _.jsxs)(`section`, {
    className: `relative overflow-hidden pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,20vh,13rem)]`,
    children: [
      (0, _.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 top-1/4 bottom-0 -z-10 hidden md:block`,
        children: (0, _.jsx)(`div`, {
          className: `shell pointer-events-auto h-full`,
          children: (0, _.jsx)(v, {}),
        }),
      }),
      (0, _.jsxs)(`div`, {
        className: `shell`,
        children: [
          (0, _.jsxs)(f, {
            className: `flex items-center gap-4`,
            children: [
              (0, _.jsx)(`span`, {
                className: `h-px w-10 bg-accent`,
                "aria-hidden": `true`,
              }),
              (0, _.jsx)(`span`, {
                className: `eyebrow text-muted-foreground`,
                children: `Marketing · Technology · AI Automation`,
              }),
            ],
          }),
          (0, _.jsxs)(`h1`, {
            className: `mt-[clamp(2.5rem,6vh,4.5rem)] text-mega uppercase`,
            children: [
              (0, _.jsx)(f, {
                className: `mask-rise`,
                children: (0, _.jsx)(`span`, {
                  className: `mask-rise-inner font-light text-muted-foreground`,
                  children: `We create`,
                }),
              }),
              (0, _.jsx)(f, {
                delay: 90,
                className: `mask-rise`,
                children: (0, _.jsx)(`span`, {
                  className: `mask-rise-inner font-bold`,
                  children: `the clicks.`,
                }),
              }),
              (0, _.jsx)(f, {
                delay: 180,
                className: `mask-rise`,
                children: (0, _.jsx)(`span`, {
                  className: `mask-rise-inner font-light text-muted-foreground`,
                  children: `We write`,
                }),
              }),
              (0, _.jsx)(f, {
                delay: 270,
                className: `mask-rise`,
                children: (0, _.jsxs)(`span`, {
                  className: `mask-rise-inner font-bold`,
                  children: [
                    `the `,
                    (0, _.jsx)(`span`, {
                      className: `text-accent`,
                      children: `code.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, _.jsxs)(`div`, {
            className: `mt-[clamp(3rem,7vh,5.5rem)] grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-20`,
            children: [
              (0, _.jsx)(f, {
                delay: 140,
                children: (0, _.jsx)(`p`, {
                  className: `max-w-[42ch] text-lead text-muted-foreground`,
                  children: `Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.`,
                }),
              }),
              (0, _.jsxs)(f, {
                delay: 220,
                className: `flex flex-wrap items-center gap-x-8 gap-y-5`,
                children: [
                  (0, _.jsxs)(i, {
                    to: `/contact`,
                    className: `group inline-flex items-center gap-3 bg-ink px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5`,
                    children: [
                      `Start a Project`,
                      (0, _.jsx)(o, {
                        className: `size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`,
                        "aria-hidden": `true`,
                      }),
                    ],
                  }),
                  (0, _.jsxs)(i, {
                    to: `/work`,
                    className: `group relative py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent`,
                    children: [
                      `Explore Our Work`,
                      (0, _.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: `absolute inset-x-0 bottom-0 h-px origin-left bg-foreground transition-transform duration-500 group-hover:scale-x-0`,
                      }),
                      (0, _.jsx)(`span`, {
                        "aria-hidden": `true`,
                        className: `absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100`,
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
function b() {
  return (0, _.jsx)(`section`, {
    className: `band border-t border-hairline bg-ink text-ink-foreground`,
    children: (0, _.jsxs)(`div`, {
      className: `shell`,
      children: [
        (0, _.jsxs)(f, {
          className: `flex items-center gap-4`,
          children: [
            (0, _.jsx)(`span`, {
              className: `h-px w-10 bg-accent`,
              "aria-hidden": `true`,
            }),
            (0, _.jsx)(`span`, {
              className: `eyebrow opacity-50`,
              children: `Positioning`,
            }),
          ],
        }),
        (0, _.jsxs)(`h2`, {
          className: `mt-[clamp(2.5rem,6vh,4rem)] text-headline uppercase`,
          children: [
            (0, _.jsx)(f, {
              className: `mask-rise`,
              children: (0, _.jsx)(`span`, {
                className: `mask-rise-inner font-bold`,
                children: `One agency.`,
              }),
            }),
            (0, _.jsx)(f, {
              delay: 90,
              className: `mask-rise`,
              children: (0, _.jsxs)(`span`, {
                className: `mask-rise-inner font-light opacity-50`,
                children: [
                  `From click to `,
                  (0, _.jsx)(`span`, {
                    className: `font-bold text-accent opacity-100`,
                    children: `code.`,
                  }),
                ],
              }),
            }),
          ],
        }),
        (0, _.jsxs)(f, {
          delay: 160,
          className: `mt-[clamp(3rem,8vh,5.5rem)] grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[1fr_1fr] md:gap-20`,
          children: [
            (0, _.jsx)(`p`, {
              className: `max-w-[36ch] text-lead opacity-80`,
              children: `Most agencies specialise in either marketing or technology. We bring strategy, marketing, design, development and automation into one team.`,
            }),
            (0, _.jsx)(`p`, {
              className: `max-w-[36ch] text-lead opacity-50`,
              children: `We help businesses attract attention, convert audiences, build digital products and automate what happens behind the scenes.`,
            }),
          ],
        }),
        (0, _.jsxs)(f, {
          delay: 220,
          className: `mt-[clamp(3rem,7vh,5rem)] flex items-center gap-6`,
          children: [
            (0, _.jsx)(`span`, {
              className: `eyebrow shrink-0 text-accent`,
              children: `Clicks`,
            }),
            (0, _.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `relative h-px flex-1 bg-white/15`,
              children: (0, _.jsx)(`span`, {
                className: `rule-draw absolute inset-0 bg-gradient-to-r from-accent to-white/25`,
              }),
            }),
            (0, _.jsx)(`span`, {
              className: `eyebrow shrink-0 opacity-70`,
              children: `Codes`,
            }),
          ],
        }),
      ],
    }),
  });
}
function x() {
  return (0, _.jsx)(`section`, {
    className: `band border-t border-hairline bg-ink text-ink-foreground`,
    children: (0, _.jsxs)(`div`, {
      className: `shell grid gap-[clamp(3.5rem,9vh,6rem)] md:grid-cols-[1.1fr_0.9fr] md:gap-24`,
      children: [
        (0, _.jsxs)(`div`, {
          children: [
            (0, _.jsxs)(f, {
              className: `flex items-center gap-4`,
              children: [
                (0, _.jsx)(`span`, {
                  className: `h-px w-10 bg-accent`,
                  "aria-hidden": `true`,
                }),
                (0, _.jsx)(`span`, {
                  className: `eyebrow opacity-50`,
                  children: `AI & Automation`,
                }),
              ],
            }),
            (0, _.jsxs)(`h2`, {
              className: `mt-[clamp(2rem,5vh,3.5rem)] text-headline uppercase`,
              children: [
                (0, _.jsx)(f, {
                  className: `mask-rise`,
                  children: (0, _.jsx)(`span`, {
                    className: `mask-rise-inner font-bold`,
                    children: `Automate the busywork.`,
                  }),
                }),
                (0, _.jsx)(f, {
                  delay: 90,
                  className: `mask-rise`,
                  children: (0, _.jsxs)(`span`, {
                    className: `mask-rise-inner font-light opacity-60`,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: `font-bold text-accent opacity-100`,
                        children: `Amplify`,
                      }),
                      ` the human work.`,
                    ],
                  }),
                }),
              ],
            }),
            (0, _.jsx)(f, {
              delay: 140,
              children: (0, _.jsx)(`p`, {
                className: `mt-12 max-w-[42ch] text-lead opacity-70`,
                children: `We map the repetitive processes inside your business, then build intelligent automation around them — so your team spends its hours where judgment pays.`,
              }),
            }),
            (0, _.jsx)(f, {
              delay: 200,
              children: (0, _.jsx)(`p`, {
                className: `mt-12 max-w-[46ch] border-t border-white/10 pt-8 text-sm leading-[2] opacity-60`,
                children: l.map((e, t) =>
                  (0, _.jsxs)(
                    `span`,
                    {
                      children: [
                        t > 0
                          ? (0, _.jsx)(`span`, {
                              className: `text-accent/60`,
                              children: ` / `,
                            })
                          : null,
                        e,
                      ],
                    },
                    e,
                  ),
                ),
              }),
            }),
          ],
        }),
        (0, _.jsx)(`ol`, {
          className: `flex flex-col md:pt-4`,
          children: c.map((e, t) =>
            (0, _.jsxs)(
              f,
              {
                as: `li`,
                delay: t * 80,
                className: `group relative border-t border-white/10 py-7 last:border-b`,
                children: [
                  (0, _.jsxs)(`div`, {
                    className: `flex items-baseline gap-6`,
                    children: [
                      (0, _.jsx)(`span`, {
                        className: `eyebrow shrink-0 tabular-nums opacity-40`,
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      (0, _.jsxs)(`div`, {
                        children: [
                          (0, _.jsx)(`p`, {
                            className: `font-display text-lg font-bold uppercase tracking-[-0.02em]`,
                            children: e.label,
                          }),
                          (0, _.jsx)(`p`, {
                            className: `mt-2 max-w-[34ch] text-sm opacity-55`,
                            children: e.note,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, _.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `absolute left-0 top-0 h-px bg-accent transition-all duration-1000`,
                    style: { width: `${((t + 1) / c.length) * 100}%` },
                  }),
                ],
              },
              e.label,
            ),
          ),
        }),
      ],
    }),
  });
}
var S = [`Click`, `Conversion`, `Code`, `Automation`];
function C() {
  let [e, t] = (0, g.useState)(0);
  (0, g.useEffect)(() => {
    let e = 0,
      n = () => {
        e = 0;
        let n = document.documentElement.scrollHeight - window.innerHeight;
        t(n > 0 ? Math.min(1, Math.max(0, window.scrollY / n)) : 0);
      },
      r = () => {
        e ||= window.requestAnimationFrame(n);
      };
    return (
      n(),
      window.addEventListener(`scroll`, r, { passive: !0 }),
      window.addEventListener(`resize`, r),
      () => {
        (window.removeEventListener(`scroll`, r),
          window.removeEventListener(`resize`, r),
          e && window.cancelAnimationFrame(e));
      }
    );
  }, []);
  let n = Math.min(S.length - 1, Math.floor(e * S.length));
  return (0, _.jsx)(`div`, {
    "aria-hidden": `true`,
    className: `pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden lg:block`,
    children: (0, _.jsxs)(`div`, {
      className: `border-t border-hairline bg-background/70 backdrop-blur-md`,
      children: [
        (0, _.jsx)(`div`, {
          className: `relative h-px w-full bg-transparent`,
          children: (0, _.jsx)(`span`, {
            className: `absolute left-0 top-0 h-px bg-accent transition-[width] duration-300 ease-out`,
            style: { width: `${e * 100}%` },
          }),
        }),
        (0, _.jsx)(`div`, {
          className: `shell flex items-center justify-between py-3`,
          children: S.map((e, t) =>
            (0, _.jsxs)(
              `span`,
              {
                className: s(
                  `eyebrow flex items-center gap-2 transition-colors duration-700`,
                  t === n
                    ? `text-accent`
                    : t < n
                      ? `text-muted-foreground`
                      : `text-muted-foreground/35`,
                ),
                children: [
                  e,
                  t < S.length - 1
                    ? (0, _.jsx)(`span`, {
                        className: `ml-2 text-muted-foreground/25`,
                        children: `→`,
                      })
                    : null,
                ],
              },
              e,
            ),
          ),
        }),
      ],
    }),
  });
}
function w() {
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(C, {}),
      (0, _.jsx)(y, {}),
      (0, _.jsx)(b, {}),
      (0, _.jsx)(r, {}),
      (0, _.jsx)(t, {}),
      (0, _.jsx)(x, {}),
      (0, _.jsx)(h, {}),
      (0, _.jsx)(m, {}),
      (0, _.jsx)(e, {}),
      (0, _.jsx)(n, {}),
      (0, _.jsx)(p, {}),
    ],
  });
}
export { w as component };
