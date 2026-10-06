import { u as e, v as t } from "./index-Dhe-Ha2M.js";
import { t as n } from "./Reveal-DWuXEbpd.js";
import { t as r } from "./PageHero-DO6tPeX0.js";
import { t as i } from "./CTASection-EFTx_IW6.js";
import { t as a } from "./WhyUsSection-B3rmKpJN.js";
import { t as o } from "./ProcessSection-D6uB4pvD.js";
var s = t();
function c() {
  return (0, s.jsxs)(s.Fragment, {
    children: [
      (0, s.jsx)(r, {
        eyebrow: `About`,
        title: (0, s.jsxs)(s.Fragment, {
          children: [
            `Creative minds.`,
            (0, s.jsx)(`br`, {}),
            `Technical thinkers.`,
            (0, s.jsx)(`br`, {}),
            `One `,
            (0, s.jsx)(`span`, { className: `text-accent`, children: `team.` }),
          ],
        }),
        copy: `Great digital experiences need both halves of the brain in the same room.`,
      }),
      (0, s.jsx)(`section`, {
        className: `border-t border-hairline py-20 sm:py-28`,
        children: (0, s.jsxs)(`div`, {
          className: `shell grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20`,
          children: [
            (0, s.jsxs)(`div`, {
              className: `flex flex-col gap-6`,
              children: [
                (0, s.jsx)(n, {
                  children: (0, s.jsx)(`p`, {
                    className: `text-lead`,
                    children: `Marketing that gets attention. Technology that does something with it.`,
                  }),
                }),
                (0, s.jsx)(n, {
                  delay: 80,
                  children: (0, s.jsx)(`p`, {
                    className: `text-lead text-muted-foreground`,
                    children: `We work as one group across strategy, campaigns, design, engineering and automation, so decisions in one discipline are made with the others in the room.`,
                  }),
                }),
              ],
            }),
            (0, s.jsx)(`ul`, {
              className: `flex flex-col`,
              children: e.map((e, t) =>
                (0, s.jsxs)(
                  n,
                  {
                    as: `li`,
                    delay: t * 70,
                    className: `flex items-baseline gap-6 border-t border-hairline py-6 last:border-b`,
                    children: [
                      (0, s.jsx)(`span`, {
                        className: `eyebrow text-accent`,
                        children: String(t + 1).padStart(2, `0`),
                      }),
                      (0, s.jsx)(`span`, {
                        className: `font-display text-title font-bold uppercase`,
                        children: e,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, s.jsx)(a, {}),
      (0, s.jsx)(o, {}),
      (0, s.jsx)(i, {}),
    ],
  });
}
export { c as component };
