import {
  _ as e,
  b as t,
  h as n,
  m as r,
  v as i,
  y as a,
} from "./index-Dhe-Ha2M.js";
import { t as o } from "./Reveal-DWuXEbpd.js";
var s = i();
function c({ eyebrow: e, title: t, copy: n, align: i = `left`, className: a }) {
  return (0, s.jsxs)(`div`, {
    className: r(
      `flex flex-col gap-8`,
      i === `center` && `items-center text-center`,
      a,
    ),
    children: [
      e
        ? (0, s.jsxs)(o, {
            className: `flex items-center gap-4`,
            children: [
              (0, s.jsx)(`span`, {
                className: `h-px w-10 bg-accent`,
                "aria-hidden": `true`,
              }),
              (0, s.jsx)(`span`, {
                className: `eyebrow text-muted-foreground`,
                children: e,
              }),
            ],
          })
        : null,
      (0, s.jsx)(o, {
        delay: 60,
        children: (0, s.jsx)(`h2`, {
          className: `mask-rise max-w-[20ch] text-headline font-bold uppercase`,
          children: (0, s.jsx)(`span`, {
            className: `mask-rise-inner`,
            children: t,
          }),
        }),
      }),
      n
        ? (0, s.jsx)(o, {
            delay: 120,
            children: (0, s.jsx)(`p`, {
              className: r(
                `max-w-[46ch] text-lead text-muted-foreground`,
                i === `center` && `mx-auto`,
              ),
              children: n,
            }),
          })
        : null,
    ],
  });
}
var l = t(a(), 1),
  u = [`Need more clicks?`, `Need better code?`, `Need smarter automation?`];
function d() {
  let [t, r] = (0, l.useState)(0);
  return (
    (0, l.useEffect)(() => {
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let e = window.setInterval(() => r((e) => (e + 1) % u.length), 2800);
      return () => window.clearInterval(e);
    }, []),
    (0, s.jsx)(`section`, {
      className: `band border-t border-hairline bg-ink text-ink-foreground`,
      children: (0, s.jsxs)(`div`, {
        className: `shell`,
        children: [
          (0, s.jsxs)(o, {
            className: `flex items-center gap-4`,
            children: [
              (0, s.jsx)(`span`, {
                className: `h-px w-10 bg-accent`,
                "aria-hidden": `true`,
              }),
              (0, s.jsx)(
                `span`,
                {
                  className: `eyebrow reveal reveal-in text-accent`,
                  children: u[t],
                },
                u[t],
              ),
            ],
          }),
          (0, s.jsxs)(`h2`, {
            className: `mt-[clamp(2.5rem,6vh,4rem)] text-mega uppercase`,
            children: [
              (0, s.jsx)(o, {
                className: `mask-rise`,
                children: (0, s.jsx)(`span`, {
                  className: `mask-rise-inner font-light opacity-50`,
                  children: `Got an idea?`,
                }),
              }),
              (0, s.jsx)(o, {
                delay: 90,
                className: `mask-rise`,
                children: (0, s.jsx)(`span`, {
                  className: `mask-rise-inner font-bold`,
                  children: `Let's build it.`,
                }),
              }),
            ],
          }),
          (0, s.jsxs)(o, {
            delay: 180,
            className: `mt-[clamp(3rem,8vh,5rem)] flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-12`,
            children: [
              (0, s.jsxs)(e, {
                to: `/contact`,
                className: `group inline-flex items-center gap-3 bg-accent px-8 py-5 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5`,
                children: [
                  `Start a Project`,
                  (0, s.jsx)(n, {
                    className: `size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`,
                    "aria-hidden": `true`,
                  }),
                ],
              }),
              (0, s.jsx)(`span`, {
                className: `text-sm opacity-50`,
                children: `Let's talk.`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
export { c as n, d as t };
