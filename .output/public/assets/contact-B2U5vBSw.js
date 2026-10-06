import {
  b as e,
  f as t,
  g as n,
  h as r,
  l as i,
  m as a,
  n as o,
  s,
  v as c,
  y as l,
} from "./index-Dhe-Ha2M.js";
import { t as u } from "./PageHero-DO6tPeX0.js";
var d = n(`check`, [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]]),
  f = n(`loader-circle`, [
    [`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }],
  ]),
  p = e(l(), 1),
  m = c();
function h() {
  let [e, n] = (0, p.useState)([]),
    [i, c] = (0, p.useState)(``),
    [l, u] = (0, p.useState)(``),
    [h, y] = (0, p.useState)({}),
    [b, x] = (0, p.useState)(`idle`),
    S = (e) => n((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
  return b === `sent`
    ? (0, m.jsxs)(`div`, {
        className: `border-t border-accent pt-12`,
        children: [
          (0, m.jsx)(`span`, {
            className: `inline-flex size-12 items-center justify-center bg-accent text-accent-foreground`,
            children: (0, m.jsx)(d, {
              className: `size-5`,
              "aria-hidden": `true`,
            }),
          }),
          (0, m.jsx)(`h2`, {
            className: `mt-8 font-display text-title font-bold uppercase`,
            children: `Inquiry received`,
          }),
          (0, m.jsx)(`p`, {
            className: `mt-4 max-w-[44ch] text-sm text-muted-foreground`,
            children: `Thanks — we'll come back to you within one business day with next steps and a few questions.`,
          }),
          (0, m.jsx)(`button`, {
            type: `button`,
            onClick: () => {
              (x(`idle`), n([]), c(``), u(``));
            },
            className: `mt-8 border-b border-foreground pb-1 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent`,
            children: `Send another`,
          }),
        ],
      })
    : (0, m.jsxs)(`form`, {
        onSubmit: (t) => {
          t.preventDefault();
          let n = new FormData(t.currentTarget),
            r = String(n.get(`name`) ?? ``).trim(),
            i = String(n.get(`email`) ?? ``).trim(),
            a = String(n.get(`description`) ?? ``).trim(),
            o = {};
          (r || (o.name = `Please tell us your name.`),
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i) ||
              (o.email = `Please enter a valid email.`),
            e.length === 0 && (o.services = `Select at least one service.`),
            a.length < 20 &&
              (o.description = `A couple of sentences helps us reply properly.`),
            y(o),
            !(Object.keys(o).length > 0) &&
              (x(`sending`), window.setTimeout(() => x(`sent`), 900)));
        },
        noValidate: !0,
        className: `flex flex-col gap-14`,
        children: [
          (0, m.jsxs)(`div`, {
            className: `grid gap-8 sm:grid-cols-2`,
            children: [
              (0, m.jsx)(g, {
                label: `Name`,
                name: `name`,
                error: h.name,
                required: !0,
              }),
              (0, m.jsx)(g, { label: `Company`, name: `company` }),
              (0, m.jsx)(g, {
                label: `Email`,
                name: `email`,
                type: `email`,
                error: h.email,
                required: !0,
              }),
              (0, m.jsx)(g, {
                label: `Phone (optional)`,
                name: `phone`,
                type: `tel`,
              }),
            ],
          }),
          (0, m.jsxs)(`fieldset`, {
            children: [
              (0, m.jsx)(`legend`, {
                className: `eyebrow text-muted-foreground`,
                children: `What do you need?`,
              }),
              (0, m.jsx)(`div`, {
                className: `mt-6 flex flex-wrap gap-2.5`,
                children: s.map((t) => {
                  let n = e.includes(t);
                  return (0, m.jsx)(
                    `button`,
                    {
                      type: `button`,
                      "aria-pressed": n,
                      onClick: () => S(t),
                      className: a(
                        `border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500`,
                        n
                          ? `border-transparent bg-ink text-ink-foreground`
                          : `border-hairline text-muted-foreground hover:border-foreground hover:text-foreground`,
                      ),
                      children: t,
                    },
                    t,
                  );
                }),
              }),
              h.services ? (0, m.jsx)(v, { children: h.services }) : null,
            ],
          }),
          (0, m.jsx)(_, {
            legend: `Project budget`,
            options: o,
            value: i,
            onChange: c,
          }),
          (0, m.jsx)(_, {
            legend: `Timeline`,
            options: t,
            value: l,
            onChange: u,
          }),
          (0, m.jsxs)(`div`, {
            children: [
              (0, m.jsx)(`label`, {
                htmlFor: `description`,
                className: `eyebrow text-muted-foreground`,
                children: `Project description`,
              }),
              (0, m.jsx)(`textarea`, {
                id: `description`,
                name: `description`,
                rows: 5,
                "aria-invalid": !!h.description,
                className: `mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm`,
                placeholder: `What are you building, and what does success look like?`,
              }),
              h.description ? (0, m.jsx)(v, { children: h.description }) : null,
            ],
          }),
          (0, m.jsx)(`button`, {
            type: `submit`,
            disabled: b === `sending`,
            className: `inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto`,
            children:
              b === `sending`
                ? (0, m.jsxs)(m.Fragment, {
                    children: [
                      (0, m.jsx)(f, {
                        className: `size-4 animate-spin`,
                        "aria-hidden": `true`,
                      }),
                      `Sending`,
                    ],
                  })
                : (0, m.jsxs)(m.Fragment, {
                    children: [
                      `Send Inquiry`,
                      (0, m.jsx)(r, {
                        className: `size-4`,
                        "aria-hidden": `true`,
                      }),
                    ],
                  }),
          }),
        ],
      });
}
function g({ label: e, name: t, type: n = `text`, error: r, required: i }) {
  return (0, m.jsxs)(`div`, {
    children: [
      (0, m.jsx)(`label`, {
        htmlFor: t,
        className: `eyebrow text-muted-foreground`,
        children: e,
      }),
      (0, m.jsx)(`input`, {
        id: t,
        name: t,
        type: n,
        required: i,
        "aria-invalid": !!r,
        className: `mt-4 w-full border-b border-input bg-transparent pb-4 text-base outline-none transition-colors duration-500 focus:border-accent sm:text-sm`,
      }),
      r ? (0, m.jsx)(v, { children: r }) : null,
    ],
  });
}
function _({ legend: e, options: t, value: n, onChange: r }) {
  return (0, m.jsxs)(`fieldset`, {
    children: [
      (0, m.jsx)(`legend`, {
        className: `eyebrow text-muted-foreground`,
        children: e,
      }),
      (0, m.jsx)(`div`, {
        className: `mt-6 flex flex-wrap gap-2.5`,
        children: t.map((e) =>
          (0, m.jsx)(
            `button`,
            {
              type: `button`,
              "aria-pressed": n === e,
              onClick: () => r(n === e ? `` : e),
              className: a(
                `border px-5 py-3.5 text-xs uppercase tracking-[0.14em] transition-all duration-500`,
                n === e
                  ? `border-transparent bg-ink text-ink-foreground`
                  : `border-hairline text-muted-foreground hover:border-foreground hover:text-foreground`,
              ),
              children: e,
            },
            e,
          ),
        ),
      }),
    ],
  });
}
function v({ children: e }) {
  return (0, m.jsx)(`p`, {
    role: `alert`,
    className: `mt-3 text-xs text-destructive`,
    children: e,
  });
}
function y() {
  return (0, m.jsxs)(m.Fragment, {
    children: [
      (0, m.jsx)(u, {
        eyebrow: `Contact`,
        title: (0, m.jsxs)(m.Fragment, {
          children: [`Let's make`, (0, m.jsx)(`br`, {}), `something great.`],
        }),
        copy: `A few details are enough to start. We reply within one business day.`,
      }),
      (0, m.jsx)(`section`, {
        className: `border-t border-hairline py-16 sm:py-24`,
        children: (0, m.jsxs)(`div`, {
          className: `shell grid gap-14 md:grid-cols-[1.3fr_0.7fr] md:gap-20`,
          children: [
            (0, m.jsx)(h, {}),
            (0, m.jsxs)(`aside`, {
              className: `flex flex-col gap-8`,
              children: [
                (0, m.jsxs)(`div`, {
                  children: [
                    (0, m.jsx)(`p`, {
                      className: `eyebrow text-muted-foreground`,
                      children: `Email`,
                    }),
                    (0, m.jsx)(`a`, {
                      href: `mailto:${i.email}`,
                      className: `mt-3 block text-sm underline-offset-4 hover:underline`,
                      children: i.email,
                    }),
                  ],
                }),
                (0, m.jsxs)(`div`, {
                  children: [
                    (0, m.jsx)(`p`, {
                      className: `eyebrow text-muted-foreground`,
                      children: `Social`,
                    }),
                    (0, m.jsx)(`div`, {
                      className: `mt-3 flex flex-col gap-2`,
                      children: i.socials.map((e) =>
                        (0, m.jsx)(
                          `a`,
                          {
                            href: e.href,
                            target: `_blank`,
                            rel: `noreferrer noopener`,
                            className: `text-sm text-muted-foreground transition-colors hover:text-foreground`,
                            children: e.label,
                          },
                          e.label,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, m.jsx)(`p`, {
                  className: `border-t border-hairline pt-6 text-sm text-muted-foreground`,
                  children: `Not sure which discipline your project needs? Describe the outcome and we'll map the route.`,
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { y as component };
