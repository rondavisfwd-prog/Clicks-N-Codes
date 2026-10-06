import { v as e } from "./index-Dhe-Ha2M.js";
import { t } from "./Reveal-DWuXEbpd.js";
var n = e();
function r({ eyebrow: e, title: r, copy: i }) {
  return (0, n.jsxs)(`section`, {
    className: `shell pb-[clamp(4rem,9vh,7rem)] pt-[clamp(8rem,18vh,12rem)]`,
    children: [
      (0, n.jsxs)(t, {
        className: `flex items-center gap-4`,
        children: [
          (0, n.jsx)(`span`, {
            className: `h-px w-10 bg-accent`,
            "aria-hidden": `true`,
          }),
          (0, n.jsx)(`span`, {
            className: `eyebrow text-muted-foreground`,
            children: e,
          }),
        ],
      }),
      (0, n.jsx)(t, {
        delay: 60,
        children: (0, n.jsx)(`h1`, {
          className: `mask-rise mt-[clamp(2rem,5vh,3.5rem)] max-w-[16ch] text-display font-bold uppercase`,
          children: (0, n.jsx)(`span`, {
            className: `mask-rise-inner`,
            children: r,
          }),
        }),
      }),
      i
        ? (0, n.jsx)(t, {
            delay: 140,
            children: (0, n.jsx)(`p`, {
              className: `mt-10 max-w-[42ch] text-lead text-muted-foreground`,
              children: i,
            }),
          })
        : null,
    ],
  });
}
export { r as t };
