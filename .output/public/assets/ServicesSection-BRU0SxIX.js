import {
  b as e,
  c as t,
  g as n,
  m as r,
  v as i,
  y as a,
} from "./index-Dhe-Ha2M.js";
import { t as o } from "./Reveal-DWuXEbpd.js";
import { n as s } from "./CTASection-EFTx_IW6.js";
var c = n(`minus`, [[`path`, { d: `M5 12h14`, key: `1ays0h` }]]),
  l = n(`plus`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `M12 5v14`, key: `s699le` }],
  ]),
  u = e(a(), 1),
  d = i();
function f({ showHeader: e = !0 }) {
  let [n, i] = (0, u.useState)(t[0].id),
    a = t.find((e) => e.id === n) ?? t[0];
  return (0, d.jsx)(`section`, {
    id: `services`,
    className: `band border-t border-hairline`,
    children: (0, d.jsxs)(`div`, {
      className: `shell`,
      children: [
        e
          ? (0, d.jsx)(s, {
              eyebrow: `Capabilities`,
              title: (0, d.jsxs)(d.Fragment, {
                children: [
                  `Everything digital.`,
                  (0, d.jsx)(`br`, {}),
                  `Connected.`,
                ],
              }),
              className: `mb-[clamp(3.5rem,8vh,6rem)]`,
            })
          : null,
        (0, d.jsxs)(`div`, {
          className: `hidden md:grid md:grid-cols-[1.05fr_0.95fr] md:gap-20`,
          children: [
            (0, d.jsx)(`ul`, {
              className: `flex flex-col`,
              children: t.map((e) => {
                let t = e.id === n;
                return (0, d.jsx)(
                  `li`,
                  {
                    className: `border-b border-hairline first:border-t`,
                    children: (0, d.jsxs)(`button`, {
                      type: `button`,
                      onMouseEnter: () => i(e.id),
                      onFocus: () => i(e.id),
                      onClick: () => i(e.id),
                      "aria-pressed": t,
                      className: `group flex w-full items-baseline gap-8 py-9 text-left`,
                      children: [
                        (0, d.jsx)(`span`, {
                          className: r(
                            `eyebrow transition-colors duration-500`,
                            t ? `text-accent` : `text-muted-foreground/70`,
                          ),
                          children: e.number,
                        }),
                        (0, d.jsx)(`span`, {
                          className: r(
                            `text-headline font-bold uppercase transition-all duration-700`,
                            t
                              ? `translate-x-1 text-foreground`
                              : `text-foreground/25 group-hover:text-foreground/50`,
                          ),
                          style: { fontSize: `clamp(1.75rem, 3vw, 2.75rem)` },
                          children: e.title,
                        }),
                      ],
                    }),
                  },
                  e.id,
                );
              }),
            }),
            (0, d.jsxs)(`div`, {
              className: `flex flex-col justify-center`,
              children: [
                (0, d.jsx)(
                  `p`,
                  {
                    className: `reveal reveal-in max-w-[32ch] text-lead`,
                    children: a.summary,
                  },
                  `${a.id}-summary`,
                ),
                (0, d.jsx)(
                  `p`,
                  {
                    className: `mt-10 max-w-[38ch] text-sm leading-[1.9] text-muted-foreground`,
                    children: a.capabilities.map((e, t) =>
                      (0, d.jsxs)(
                        `span`,
                        {
                          children: [
                            t > 0
                              ? (0, d.jsx)(`span`, {
                                  className: `text-hairline`,
                                  children: ` / `,
                                })
                              : null,
                            e,
                          ],
                        },
                        e,
                      ),
                    ),
                  },
                  a.id,
                ),
              ],
            }),
          ],
        }),
        (0, d.jsx)(`div`, {
          className: `md:hidden`,
          children: t.map((e) => {
            let t = e.id === n;
            return (0, d.jsxs)(
              `div`,
              {
                className: `border-b border-hairline first:border-t`,
                children: [
                  (0, d.jsx)(`h3`, {
                    children: (0, d.jsxs)(`button`, {
                      type: `button`,
                      onClick: () => i(t ? `` : e.id),
                      "aria-expanded": t,
                      className: `flex w-full items-center justify-between gap-5 py-7 text-left`,
                      children: [
                        (0, d.jsxs)(`span`, {
                          className: `flex flex-col gap-3`,
                          children: [
                            (0, d.jsx)(`span`, {
                              className: r(
                                `eyebrow transition-colors`,
                                t ? `text-accent` : `text-muted-foreground/70`,
                              ),
                              children: e.number,
                            }),
                            (0, d.jsx)(`span`, {
                              className: `font-display text-[1.75rem] font-bold uppercase leading-none tracking-[-0.03em]`,
                              children: e.title,
                            }),
                          ],
                        }),
                        t
                          ? (0, d.jsx)(c, {
                              className: `size-5 shrink-0 text-accent`,
                              "aria-hidden": `true`,
                            })
                          : (0, d.jsx)(l, {
                              className: `size-5 shrink-0 text-muted-foreground`,
                              "aria-hidden": `true`,
                            }),
                      ],
                    }),
                  }),
                  t
                    ? (0, d.jsxs)(`div`, {
                        className: `pb-8`,
                        children: [
                          (0, d.jsx)(`p`, {
                            className: `text-[0.9375rem] leading-relaxed`,
                            children: e.summary,
                          }),
                          (0, d.jsx)(`p`, {
                            className: `mt-5 text-sm leading-[1.9] text-muted-foreground`,
                            children: e.capabilities.map((e, t) =>
                              (0, d.jsxs)(
                                `span`,
                                {
                                  children: [
                                    t > 0
                                      ? (0, d.jsx)(`span`, {
                                          className: `text-hairline`,
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
                        ],
                      })
                    : null,
                ],
              },
              e.id,
            );
          }),
        }),
        (0, d.jsx)(o, {
          className: `mt-14 text-xs text-muted-foreground`,
          children: `Need something not listed? It probably sits across two of these.`,
        }),
      ],
    }),
  });
}
export { f as t };
