import { a as e, v as t } from "./index-Dhe-Ha2M.js";
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
          eyebrow: `Process`,
          title: `How we turn ideas into impact`,
        }),
        (0, i.jsx)(`ol`, {
          className: `flex flex-col`,
          children: e.map((e, t) =>
            (0, i.jsxs)(
              n,
              {
                as: `li`,
                delay: t * 90,
                className: `group grid gap-4 border-t border-hairline py-9 last:border-b sm:grid-cols-[auto_1fr] sm:gap-10`,
                children: [
                  (0, i.jsx)(`span`, {
                    className: `font-display text-sm font-medium tabular-nums text-muted-foreground/70 transition-colors duration-500 group-hover:text-accent`,
                    children: e.number,
                  }),
                  (0, i.jsxs)(`div`, {
                    children: [
                      (0, i.jsx)(`h3`, {
                        className: `font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-bold uppercase leading-none tracking-[-0.025em]`,
                        children: e.title,
                      }),
                      (0, i.jsx)(`p`, {
                        className: `mt-4 max-w-[46ch] text-sm leading-relaxed text-muted-foreground`,
                        children: e.copy,
                      }),
                    ],
                  }),
                ],
              },
              e.number,
            ),
          ),
        }),
      ],
    }),
  });
}
export { a as t };
