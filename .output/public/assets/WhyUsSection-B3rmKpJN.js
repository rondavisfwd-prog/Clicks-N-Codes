import { r as e, v as t } from "./index-Dhe-Ha2M.js";
import { t as n } from "./Reveal-DWuXEbpd.js";
import { n as r } from "./CTASection-EFTx_IW6.js";
var i = t();
function a() {
  return (0, i.jsx)(`section`, {
    className: `band border-t border-hairline`,
    children: (0, i.jsxs)(`div`, {
      className: `shell grid gap-[clamp(3rem,7vh,5rem)] lg:grid-cols-[0.8fr_1.2fr] lg:gap-24`,
      children: [
        (0, i.jsx)(r, {
          eyebrow: `Why Clicks N Codes`,
          title: `Two disciplines. One accountability.`,
        }),
        (0, i.jsx)(`div`, {
          className: `flex flex-col`,
          children: e.map((e, t) =>
            (0, i.jsxs)(
              n,
              {
                delay: t * 80,
                className: `grid gap-4 border-t border-hairline py-9 last:border-b sm:grid-cols-[0.7fr_1.3fr] sm:gap-10`,
                children: [
                  (0, i.jsx)(`h3`, {
                    className: `font-display text-[clamp(1.15rem,1.8vw,1.5rem)] font-bold uppercase leading-none tracking-[-0.02em]`,
                    children: e.title,
                  }),
                  (0, i.jsx)(`p`, {
                    className: `max-w-[46ch] text-sm leading-relaxed text-muted-foreground`,
                    children: e.copy,
                  }),
                ],
              },
              e.title,
            ),
          ),
        }),
      ],
    }),
  });
}
export { a as t };
