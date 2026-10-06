import { b as e, m as t, v as n, y as r } from "./index-Dhe-Ha2M.js";
var i = e(r(), 1),
  a = n();
function o({ children: e, className: n, delay: r = 0, as: o = `div` }) {
  let s = (0, i.useRef)(null),
    [c, l] = (0, i.useState)(!1);
  return (
    (0, i.useEffect)(() => {
      let e = s.current;
      if (!e || typeof IntersectionObserver > `u`) {
        l(!0);
        return;
      }
      let t = new IntersectionObserver(
        (e) => {
          for (let n of e) n.isIntersecting && (l(!0), t.disconnect());
        },
        { rootMargin: `0px 0px -12% 0px`, threshold: 0.1 },
      );
      return (t.observe(e), () => t.disconnect());
    }, []),
    (0, a.jsx)(o, {
      ref: s,
      style: r ? { transitionDelay: `${r}ms` } : void 0,
      className: t(`reveal`, c && `reveal-in`, n),
      children: e,
    })
  );
}
export { o as t };
