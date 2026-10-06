const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/routes-JRhK76uO.js",
      "assets/TestimonialsSection-CVuDLMwt.js",
      "assets/Reveal-DWuXEbpd.js",
      "assets/CTASection-EFTx_IW6.js",
      "assets/ServicesSection-BRU0SxIX.js",
      "assets/WhyUsSection-B3rmKpJN.js",
      "assets/ProcessSection-D6uB4pvD.js",
      "assets/about-BuH2ce2C.js",
      "assets/PageHero-DO6tPeX0.js",
      "assets/contact-B2U5vBSw.js",
      "assets/services-CC95rQln.js",
      "assets/work-DGm4wIKz.js",
    ]),
) => i.map((i) => d[i]);
var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)),
    t.exports
  ),
  s = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  c = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    s(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
  ),
  l = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.for(`react.view_transition`),
      m = Symbol.iterator;
    function h(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (m && e[m]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      _ = Object.assign,
      v = {};
    function y(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    ((y.prototype.isReactComponent = {}),
      (y.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function b() {}
    b.prototype = y.prototype;
    function x(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || g));
    }
    var ee = (x.prototype = new b());
    ((ee.constructor = x), _(ee, y.prototype), (ee.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      te = Object.prototype.hasOwnProperty;
    function T(e, n, r) {
      var i = r.ref;
      return {
        $$typeof: t,
        type: e,
        key: n,
        ref: i === void 0 ? null : i,
        props: r,
      };
    }
    function ne(e, t) {
      return T(e.type, t, e.props);
    }
    function re(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function ie(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ae = /\/+/g;
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null
        ? ie(`` + e.key)
        : t.toString(36);
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` &&
                      ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function ce(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), ce(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ae, `$&/`) + `/`),
              ce(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (re(o) &&
                (o = ne(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ae, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += ce(a, r, i, s, o)));
      else if (((u = h(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + oe(a, u++)), (c += ce(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return ce(se(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function le(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        ce(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function E(e) {
      if (e._status === -1) {
        var t = e._result,
          n = t();
        (n.then(
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1),
              (e._result = t),
              n.status === void 0 && ((n.status = `fulfilled`), (n.value = t)));
          },
          function (t) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2),
              (e._result = t),
              n.status === void 0 && ((n.status = `rejected`), (n.reason = t)));
          },
        ),
          e._status === -1 && ((e._status = 0), (e._result = n)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var ue =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            if (
              typeof window == `object` &&
              typeof window.ErrorEvent == `function`
            ) {
              var t = new window.ErrorEvent(`error`, {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == `object` && e && typeof e.message == `string`
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == `object` &&
              typeof process.emit == `function`
            ) {
              process.emit(`uncaughtException`, e);
              return;
            }
            console.error(e);
          };
    function de(e) {
      var t = w.T,
        n = {};
      ((n.types = t === null ? null : t.types), (w.T = n));
      try {
        var r = e(),
          i = w.S;
        (i !== null && i(n, r),
          typeof r == `object` &&
            r &&
            typeof r.then == `function` &&
            r.then(C, ue));
      } catch (e) {
        ue(e);
      } finally {
        (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
      }
    }
    function fe(e) {
      var t = w.T;
      if (t !== null) {
        var n = t.types;
        n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
      } else de(fe.bind(null, e));
    }
    var pe = {
      map: le,
      forEach: function (e, t, n) {
        le(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          le(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          le(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!re(e))
          throw Error(
            `React.Children.only expected to receive a single React element child.`,
          );
        return e;
      },
    };
    ((e.Activity = f),
      (e.Children = pe),
      (e.Component = y),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = x),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.ViewTransition = p),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.addTransitionType = fe),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null)
          throw Error(
            `The argument must be a React element, but you passed ` + e + `.`,
          );
        var r = _({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !te.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return T(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            te.call(t, r) &&
              r !== `key` &&
              r !== `__self` &&
              r !== `__source` &&
              (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return T(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = re),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: E };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = de),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.3.0`));
  }),
  u = o((e, t) => {
    t.exports = l();
  }),
  d = o((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), ne()));
        else {
          var t = n(l);
          t !== null && ae(x, t.startTime - e);
        }
    }
    var ee = !1,
      S = -1,
      C = 5,
      w = -1;
    function te() {
      return g ? !0 : !(e.unstable_now() - w < C);
    }
    function T() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        w = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(S), (S = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (
                  b(t), d = n(c);
                  d !== null && !(d.expirationTime > t && te());
                ) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && ae(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
          }
        } finally {
          i ? ne() : (ee = !1);
        }
      }
    }
    var ne;
    if (typeof y == `function`)
      ne = function () {
        y(T);
      };
    else if (typeof MessageChannel < `u`) {
      var re = new MessageChannel(),
        ie = re.port2;
      ((re.port1.onmessage = T),
        (ne = function () {
          ie.postMessage(null);
        }));
    } else
      ne = function () {
        _(T, 0);
      };
    function ae(t, n) {
      S = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (C = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (v(S), (S = -1)) : (h = !0), ae(x, a - o)))
            : ((r.sortIndex = s),
              t(c, r),
              m || p || ((m = !0), ee || ((ee = !0), ne()))),
          r
        );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  f = o((e, t) => {
    t.exports = d();
  }),
  p = o((e) => {
    var t = u();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.browser = function (e) {
        return { $$typeof: o, _reason: e };
      }),
      (e.createPortal = function (e, t) {
        var r =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
          throw Error(n(299));
        return c(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = l.T,
          n = i.p;
        try {
          if (((l.T = null), (i.p = 2), e)) return e();
        } finally {
          ((l.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin),
              (t =
                typeof t == `string`
                  ? t === `use-credentials`
                    ? t
                    : ``
                  : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = d(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(
                e,
                typeof t.precedence == `string` ? t.precedence : void 0,
                { crossOrigin: r, integrity: a, fetchPriority: o },
              )
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`)
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = d(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority:
                  typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            }
          } else t ?? i.d.M(e);
      }),
      (e.preload = function (e, t) {
        if (
          typeof e == `string` &&
          typeof t == `object` &&
          t &&
          typeof t.as == `string`
        ) {
          var n = t.as,
            r = d(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority:
              typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy:
              typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet:
              typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`)
          if (t) {
            var n = d(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              fetchPriority:
                typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            });
          } else i.d.m(e);
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return l.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return l.H.useHostTransitionStatus();
      }),
      (e.version = `19.3.0`));
  }),
  m = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = p()));
  }),
  h = o((e) => {
    var t = f(),
      n = u(),
      r = m();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate;)
        ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
      for (; t.return;) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function d(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function p(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = p(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    function h(e, t, n, r, i, a) {
      for (; e !== null;) {
        if (
          ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
          ((e.tag !== 22 || e.memoizedState === null) &&
            (t || (e.tag !== 5 && e.tag !== 27)) &&
            h(e.child, t, n, r, i, a))
        )
          return !0;
        e = e.sibling;
      }
      return !1;
    }
    function g(e) {
      for (e = e.return; e !== null;) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function _(e) {
      var t = !1;
      for (
        e = e.return;
        e !== null &&
        (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);
      )
        e = e.return;
      return t;
    }
    function v(e) {
      var t = [null, null],
        n = g(e);
      return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
    }
    function y(e, t, n, r) {
      for (; n !== null;) {
        if (n === t) r.foundSelf = !0;
        else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return ((e[1] = n), !0);
          e[0] = n;
        } else if (
          (n.tag !== 22 || n.memoizedState === null) &&
          y(e, t, n.child, r)
        )
          return !0;
        n = n.sibling;
      }
      return !1;
    }
    function b(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var x = null,
      ee = null;
    function S(e, t, n) {
      return e === n || (e === t && ((x = e), !0));
    }
    function C(e, t, n) {
      return e === n ? ((ee = e), !1) : e === t && (ee !== null && (x = e), !0);
    }
    function w(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return;
      while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function te(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i;) ((e = n(e)), r--);
      for (; 0 < i - r;) ((t = n(t)), i--);
      for (; r--;) {
        if (e === t || (t !== null && e === t.alternate)) return e;
        ((e = n(e)), (t = n(t)));
      }
      return null;
    }
    var T = Object.assign,
      ne = Symbol.for(`react.element`),
      re = Symbol.for(`react.transitional.element`),
      ie = Symbol.for(`react.portal`),
      ae = Symbol.for(`react.fragment`),
      oe = Symbol.for(`react.strict_mode`),
      se = Symbol.for(`react.profiler`),
      ce = Symbol.for(`react.consumer`),
      le = Symbol.for(`react.context`),
      E = Symbol.for(`react.forward_ref`),
      ue = Symbol.for(`react.suspense`),
      de = Symbol.for(`react.suspense_list`),
      fe = Symbol.for(`react.memo`),
      pe = Symbol.for(`react.lazy`),
      me = Symbol.for(`react.activity`),
      he = Symbol.for(`react.legacy_hidden`),
      ge = Symbol.for(`react.memo_cache_sentinel`),
      _e = Symbol.for(`react.view_transition`),
      ve = Symbol.for(`react.recoverable`),
      ye = Symbol.iterator;
    function be(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ye && e[ye]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var xe = Symbol.for(`react.client.reference`);
    function Se(e) {
      if (e == null) return null;
      if (typeof e == `function`)
        return e.$$typeof === xe ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ae:
          return `Fragment`;
        case se:
          return `Profiler`;
        case oe:
          return `StrictMode`;
        case ue:
          return `Suspense`;
        case de:
          return `SuspenseList`;
        case me:
          return `Activity`;
        case _e:
          return `ViewTransition`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case ie:
            return `Portal`;
          case le:
            return e.displayName || `Context`;
          case ce:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case E:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case fe:
            return (
              (t = e.displayName || null),
              t === null ? Se(e.type) || `Memo` : t
            );
          case pe:
            ((t = e._payload), (e = e._init));
            try {
              return Se(e(t));
            } catch {}
        }
      return null;
    }
    var Ce = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      we = { pending: !1, data: null, method: null, action: null },
      Te = [],
      Ee = -1;
    function De(e) {
      return { current: e };
    }
    function Oe(e) {
      0 > Ee || ((e.current = Te[Ee]), (Te[Ee] = null), Ee--);
    }
    function k(e, t) {
      (Ee++, (Te[Ee] = e.current), (e.current = t));
    }
    var ke = De(null),
      Ae = De(null),
      je = De(null),
      Me = De(null);
    function Ne(e, t) {
      switch ((k(je, t), k(Ae, e), k(ke, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            ((t = up(t)), (e = dp(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (Oe(ke), k(ke, e));
    }
    function Pe() {
      (Oe(ke), Oe(Ae), Oe(je));
    }
    function Fe(e) {
      var t = e.memoizedState;
      (t !== null && ((sh._currentValue = t.memoizedState), k(Me, e)),
        (t = ke.current));
      var n = dp(t, e.type);
      t !== n && (k(Ae, e), k(ke, n));
    }
    function Ie(e) {
      (Ae.current === e && (Oe(ke), Oe(Ae)),
        Me.current === e && (Oe(Me), (sh._currentValue = we)));
    }
    var Le, Re;
    function ze(e) {
      if (Le === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((Le = (t && t[1]) || ``),
            (Re =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        Le +
        e +
        Re
      );
    }
    var Be = !1;
    function Ve(e, t) {
      if (!e || Be) return ``;
      Be = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = !1;
                  try {
                    var i = Object.getOwnPropertyDescriptor(
                      e.prototype,
                      `props`,
                    );
                    (Object.defineProperty(e.prototype, "props", {
                      configurable: !0,
                      set: function () {
                        throw Error();
                      },
                    }),
                      (n = !0),
                      new e());
                  } finally {
                    n &&
                      (i === void 0
                        ? delete e.prototype.props
                        : Object.defineProperty(e.prototype, "props", i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) &&
                  typeof n.catch == `function` &&
                  n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`)
                return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          `name`,
        );
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (
            i = r = 0;
            r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
          )
            r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);)
            i++;
          if (r === c.length || i === l.length)
            for (
              r = c.length - 1, i = l.length - 1;
              1 <= r && 0 <= i && c[r] !== l[i];
            )
              i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((Be = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? ze(n) : ``;
    }
    function He(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ze(e.type);
        case 16:
          return ze(`Lazy`);
        case 13:
          return e.child !== t && t !== null
            ? ze(`Suspense Fallback`)
            : ze(`Suspense`);
        case 19:
          return ze(`SuspenseList`);
        case 0:
        case 15:
          return Ve(e.type, !1);
        case 11:
          return Ve(e.type.render, !1);
        case 1:
          return Ve(e.type, !0);
        case 31:
          return ze(`Activity`);
        case 30:
          return ze(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Ue(e) {
      try {
        var t = ``,
          n = null;
        do ((t += He(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var We = Object.prototype.hasOwnProperty,
      Ge = t.unstable_scheduleCallback,
      Ke = t.unstable_cancelCallback,
      qe = t.unstable_shouldYield,
      Je = t.unstable_requestPaint,
      Ye = t.unstable_now,
      Xe = t.unstable_getCurrentPriorityLevel,
      Ze = t.unstable_ImmediatePriority,
      Qe = t.unstable_UserBlockingPriority,
      $e = t.unstable_NormalPriority,
      et = t.unstable_LowPriority,
      tt = t.unstable_IdlePriority,
      nt = t.log,
      rt = t.unstable_setDisableYieldValue,
      it = null,
      at = null;
    function ot(e) {
      if (
        (typeof nt == `function` && rt(e),
        at && typeof at.setStrictMode == `function`)
      )
        try {
          at.setStrictMode(it, e);
        } catch {}
    }
    var A = Math.clz32 ? Math.clz32 : lt,
      st = Math.log,
      ct = Math.LN2;
    function lt(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((st(e) / ct) | 0)) | 0);
    }
    var ut = 256,
      dt = 262144,
      ft = 4194304;
    function pt(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function mt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = pt(n)))
                : (i = pt(o))
              : (i = pt(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s),
                o === 0
                  ? n || ((n = s & ~e), n !== 0 && (i = pt(n)))
                  : (i = pt(o)))
              : (i = pt(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function ht(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function gt(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n;) {
          var r = 31 - A(n),
            i = 1 << r;
          ((t |= e[r]), (n &= ~i));
        }
      return t;
    }
    function _t(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function vt() {
      var e = ft;
      return ((ft <<= 1), !(ft & 62914560) && (ft = 4194304), e);
    }
    function yt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function bt(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function xt(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - A(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && St(e, r, 0),
        a !== 0 &&
          i === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function St(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - A(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Ct(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - A(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function wt(e, t) {
      var n = t & -t;
      return (
        (n = n & 42 ? 1 : Tt(n)),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
      );
    }
    function Tt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Et(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
      );
    }
    function Dt() {
      var e = O.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : Ch(e.type)) : e;
    }
    function Ot(e, t) {
      var n = O.p;
      try {
        return ((O.p = e), t());
      } finally {
        O.p = n;
      }
    }
    var kt = Math.random().toString(36).slice(2),
      j = `__reactFiber$` + kt,
      At = `__reactProps$` + kt,
      jt = `__reactContainer$` + kt,
      Mt = `__reactEvents$` + kt,
      Nt = `__reactListeners$` + kt,
      Pt = `__reactHandles$` + kt,
      Ft = `__reactResources$` + kt,
      It = `__reactMarker$` + kt,
      Lt = `__reactLoad$` + kt;
    function Rt(e) {
      (delete e[j], delete e[At], delete e[Nt], delete e[Pt]);
    }
    function zt(e) {
      var t;
      if ((t = e[j])) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[jt] || n[j])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = fm(e); e !== null;) {
              if ((n = e[j])) return n;
              e = fm(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Bt(e) {
      if ((e = e[j] || e[jt])) {
        var t = e.tag;
        if (
          t === 5 ||
          t === 6 ||
          t === 13 ||
          t === 31 ||
          t === 26 ||
          t === 27 ||
          t === 3
        )
          return e;
      }
      return null;
    }
    function Vt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Ht(e) {
      var t = e[Ft];
      return (
        (t ||= e[Ft] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Ut(e) {
      e[It] = !0;
    }
    function Wt(e) {
      e[Lt] = void 0;
    }
    var Gt = new Set(),
      Kt = {};
    function qt(e, t) {
      (Jt(e, t), Jt(e + `Capture`, t));
    }
    function Jt(e, t) {
      for (Kt[e] = t, e = 0; e < t.length; e++) Gt.add(t[e]);
    }
    var Yt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Xt = {},
      Zt = {};
    function Qt(e) {
      return We.call(Zt, e)
        ? !0
        : We.call(Xt, e)
          ? !1
          : Yt.test(e)
            ? (Zt[e] = !0)
            : ((Xt[e] = !0), !1);
    }
    var M = !1;
    function $t() {
      var e = M;
      return ((M = !1), e);
    }
    function en(e, t, n) {
      if (Qt(t))
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
    }
    function tn(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function nn(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function rn(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function an(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function on(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function sn(e) {
      if (!e._valueTracker) {
        var t = an(e) ? `checked` : `value`;
        e._valueTracker = on(e, t, `` + e[t]);
      }
    }
    function cn(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = an(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    var ln = /[\n"\\]/g;
    function un(e) {
      return e.replace(ln, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function dn(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null &&
        typeof o != `function` &&
        typeof o != `symbol` &&
        typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) &&
              (e.value = `` + rn(t))
            : e.value !== `` + rn(t) && (e.value = `` + rn(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : pn(e, rn(n))
          : o === `number` && e.value == t
            ? pn(e, rn(e.value))
            : pn(e, rn(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null &&
          (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null &&
        typeof s != `function` &&
        typeof s != `symbol` &&
        typeof s != `boolean`
          ? (e.name = `` + rn(s))
          : e.removeAttribute(`name`));
    }
    function fn(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          sn(e);
          return;
        }
        ((n = n == null ? `` : `` + rn(n)),
          (t = t == null ? n : `` + rn(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        sn(e));
    }
    function pn(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function mn(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + rn(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function hn(e, t, n) {
      if (
        t != null &&
        ((t = `` + rn(t)), t !== e.value && (e.value = t), n == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + rn(n);
    }
    function gn(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (Ce(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = rn(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        sn(e));
    }
    function _n(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var vn = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function yn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || vn.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function bn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``),
            (M = !0));
        for (var a in t)
          ((r = t[a]),
            t.hasOwnProperty(a) && n[a] !== r && (yn(e, a, r), (M = !0)));
      } else for (var o in t) t.hasOwnProperty(o) && yn(e, o, t[o]);
    }
    function xn(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Sn = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`maskType`, `mask-type`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Cn =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function wn(e) {
      return Cn.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function Tn() {}
    var En = null;
    function Dn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var On = null,
      kn = null;
    function An(e) {
      var t = Bt(e);
      if (t && (e = t.stateNode)) {
        var n = e[At] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (dn(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name="` + un(`` + t) + `"][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[At] || null;
                  if (!a) throw Error(i(90));
                  dn(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++)
                ((r = n[t]), r.form === e.form && cn(r));
            }
            break a;
          case `textarea`:
            hn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && mn(e, !!n.multiple, t, !1));
        }
      }
    }
    var jn = !1;
    function Mn(e, t, n) {
      if (jn) return e(t, n);
      jn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((jn = !1),
          (On !== null || kn !== null) &&
            (Bd(), On && ((t = On), (e = kn), (kn = On = null), An(t), e)))
        )
          for (t = 0; t < e.length; t++) An(e[t]);
      }
    }
    function Nn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[At] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Pn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      Fn = !1;
    if (Pn)
      try {
        var In = {};
        (Object.defineProperty(In, "passive", {
          get: function () {
            Fn = !0;
          },
        }),
          window.addEventListener(`test`, In, In),
          window.removeEventListener(`test`, In, In));
      } catch {
        Fn = !1;
      }
    var Ln = null,
      Rn = null,
      zn = null;
    function Bn() {
      if (zn) return zn;
      var e,
        t = Rn,
        n = t.length,
        r,
        i = `value` in Ln ? Ln.value : Ln.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (zn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function Vn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Hn() {
      return !0;
    }
    function Un() {
      return !1;
    }
    function Wn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Hn
            : Un),
          (this.isPropagationStopped = Un),
          this
        );
      }
      return (
        T(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Hn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Hn));
          },
          persist: function () {},
          isPersistent: Hn,
        }),
        t
      );
    }
    var Gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Kn = Wn(Gn),
      qn = T({}, Gn, { view: 0, detail: 0 }),
      Jn = Wn(qn),
      Yn,
      Xn,
      Zn,
      Qn = T({}, qn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: cr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Zn &&
                (Zn && e.type === `mousemove`
                  ? ((Yn = e.screenX - Zn.screenX),
                    (Xn = e.screenY - Zn.screenY))
                  : (Xn = Yn = 0),
                (Zn = e)),
              Yn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Xn;
        },
      }),
      $n = Wn(Qn),
      er = Wn(T({}, Qn, { dataTransfer: 0 })),
      tr = Wn(T({}, qn, { relatedTarget: 0 })),
      N = Wn(T({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      nr = Wn(
        T({}, Gn, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      rr = Wn(T({}, Gn, { data: 0 })),
      ir = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      ar = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      or = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function sr(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = or[e])
          ? !!t[e]
          : !1;
    }
    function cr() {
      return sr;
    }
    var lr = Wn(
        T({}, qn, {
          key: function (e) {
            if (e.key) {
              var t = ir[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = Vn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? ar[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: cr,
          charCode: function (e) {
            return e.type === `keypress` ? Vn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? Vn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      ur = Wn(
        T({}, Qn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      dr = Wn(T({}, Gn, { submitter: 0 })),
      fr = Wn(
        T({}, qn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: cr,
        }),
      ),
      pr = Wn(T({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      mr = Wn(
        T({}, Qn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      hr = Wn(T({}, Gn, { newState: 0, oldState: 0, source: 0 })),
      gr = [9, 13, 27, 32],
      _r = Pn && `CompositionEvent` in window,
      vr = null;
    Pn && `documentMode` in document && (vr = document.documentMode);
    var yr = Pn && `TextEvent` in window && !vr,
      br = Pn && (!_r || (vr && 8 < vr && 11 >= vr)),
      xr = ` `,
      Sr = !1;
    function Cr(e, t) {
      switch (e) {
        case `keyup`:
          return gr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function wr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Tr = !1;
    function Er(e, t) {
      switch (e) {
        case `compositionend`:
          return wr(t);
        case `keypress`:
          return t.which === 32 ? ((Sr = !0), xr) : null;
        case `textInput`:
          return ((e = t.data), e === xr && Sr ? null : e);
        default:
          return null;
      }
    }
    function Dr(e, t) {
      if (Tr)
        return e === `compositionend` || (!_r && Cr(e, t))
          ? ((e = Bn()), (zn = Rn = Ln = null), (Tr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return br && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Or = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function kr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Or[e.type] : t === `textarea`;
    }
    function Ar(e, t, n, r) {
      (On ? (kn ? kn.push(r) : (kn = [r])) : (On = r),
        (t = Jf(t, `onChange`)),
        0 < t.length &&
          ((n = new Kn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var jr = null,
      Mr = null;
    function Nr(e) {
      Vf(e, 0);
    }
    function Pr(e) {
      if (cn(Vt(e))) return e;
    }
    function Fr(e, t) {
      if (e === `change`) return t;
    }
    var Ir = !1;
    if (Pn) {
      var Lr;
      if (Pn) {
        var Rr = `oninput` in document;
        if (!Rr) {
          var zr = document.createElement(`div`);
          (zr.setAttribute(`oninput`, `return;`),
            (Rr = typeof zr.oninput == `function`));
        }
        Lr = Rr;
      } else Lr = !1;
      Ir = Lr && (!document.documentMode || 9 < document.documentMode);
    }
    function Br() {
      jr && (jr.detachEvent(`onpropertychange`, Vr), (Mr = jr = null));
    }
    function Vr(e) {
      if (e.propertyName === `value` && Pr(Mr)) {
        var t = [];
        (Ar(t, Mr, e, Dn(e)), Mn(Nr, t));
      }
    }
    function Hr(e, t, n) {
      e === `focusin`
        ? (Br(), (jr = t), (Mr = n), jr.attachEvent(`onpropertychange`, Vr))
        : e === `focusout` && Br();
    }
    function Ur(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return Pr(Mr);
    }
    function Wr(e, t) {
      if (e === `click`) return Pr(t);
    }
    function Gr(e, t) {
      if (e === `input` || e === `change`) return Pr(t);
    }
    function Kr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var qr = typeof Object.is == `function` ? Object.is : Kr;
    function Jr(e, t) {
      if (qr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!We.call(t, i) || !qr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Yr(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Xr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Zr(e, t) {
      var n = Xr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Xr(n);
      }
    }
    function Qr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Qr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function $r(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Yr(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Yr(e.document);
      }
      return t;
    }
    function ei(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var ti = Pn && `documentMode` in document && 11 >= document.documentMode,
      ni = null,
      ri = null,
      ii = null,
      ai = !1;
    function oi(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      ai ||
        ni == null ||
        ni !== Yr(r) ||
        ((r = ni),
        `selectionStart` in r && ei(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (ii && Jr(ii, r)) ||
          ((ii = r),
          (r = Jf(ri, `onSelect`)),
          0 < r.length &&
            ((t = new Kn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = ni))));
    }
    function si(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var ci = {
        animationend: si(`Animation`, `AnimationEnd`),
        animationiteration: si(`Animation`, `AnimationIteration`),
        animationstart: si(`Animation`, `AnimationStart`),
        transitionrun: si(`Transition`, `TransitionRun`),
        transitionstart: si(`Transition`, `TransitionStart`),
        transitioncancel: si(`Transition`, `TransitionCancel`),
        transitionend: si(`Transition`, `TransitionEnd`),
      },
      li = {},
      ui = {};
    Pn &&
      ((ui = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete ci.animationend.animation,
        delete ci.animationiteration.animation,
        delete ci.animationstart.animation),
      `TransitionEvent` in window || delete ci.transitionend.transition);
    function di(e) {
      if (li[e]) return li[e];
      if (!ci[e]) return e;
      var t = ci[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in ui) return (li[e] = t[n]);
      return e;
    }
    var fi = di(`animationend`),
      pi = di(`animationiteration`),
      mi = di(`animationstart`),
      hi = di(`transitionrun`),
      gi = di(`transitionstart`),
      _i = di(`transitioncancel`),
      vi = di(`transitionend`),
      yi = new Map(),
      bi =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    bi.push(`scrollEnd`);
    function xi(e, t) {
      (yi.set(e, t), qt(t, [e]));
    }
    var Si = 0;
    function Ci(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = Cd.identifierPrefix;
      var n = Si++;
      return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
    }
    function wi(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = Ad;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = e[n[r]];
          if (i != null) {
            if (i === `none`) return `none`;
            t = t == null ? i : t + (` ` + i);
          }
        }
      return t ?? e.default;
    }
    function Ti(e, t) {
      return (
        (e = wi(e)),
        (t = wi(t)),
        t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
      );
    }
    var Ei =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Di = [],
      Oi = 0,
      ki = 0;
    function Ai() {
      for (var e = Oi, t = (ki = Oi = 0); t < e;) {
        var n = Di[t];
        Di[t++] = null;
        var r = Di[t];
        Di[t++] = null;
        var i = Di[t];
        Di[t++] = null;
        var a = Di[t];
        if (((Di[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
            (r.pending = i));
        }
        a !== 0 && Pi(n, i, a);
      }
    }
    function ji(e, t, n, r) {
      ((Di[Oi++] = e),
        (Di[Oi++] = t),
        (Di[Oi++] = n),
        (Di[Oi++] = r),
        (ki |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function Mi(e, t, n, r) {
      return (ji(e, t, n, r), P(e));
    }
    function Ni(e, t) {
      return (ji(e, null, null, t), P(e));
    }
    function Pi(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 &&
            ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - A(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function P(e) {
      if (50 < jd) throw ((jd = 0), (Md = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var Fi = {};
    function Ii(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Li(e, t, n, r) {
      return new Ii(e, t, n, r);
    }
    function Ri(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function zi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Li(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 1206910976),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Bi(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function Vi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof r == `function`)) Ri(r) && (s = 1);
      else if (typeof r == `string`)
        s = qm(e, n, ke.current)
          ? 26
          : e === `html` || e === `head` || e === `body`
            ? 27
            : 5;
      else
        a: switch (r) {
          case me:
            return (
              (e = Li(31, n, t, a)),
              (e.elementType = me),
              (e.lanes = o),
              e
            );
          case ae:
            return Hi(n.children, a, o, t);
          case oe:
            ((s = 8), (a |= 24));
            break;
          case se:
            return (
              (e = Li(12, n, t, a | 2)),
              (e.elementType = se),
              (e.lanes = o),
              e
            );
          case ue:
            return (
              (e = Li(13, n, t, a)),
              (e.elementType = ue),
              (e.lanes = o),
              e
            );
          case de:
            return (
              (e = Li(19, n, t, a)),
              (e.elementType = de),
              (e.lanes = o),
              e
            );
          case he:
          case _e:
            return (
              (e = a | 32),
              (e = Li(30, n, t, e)),
              (e.elementType = _e),
              (e.lanes = o),
              (e.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
              e
            );
          default:
            if (typeof r == `object` && r)
              switch (r.$$typeof) {
                case le:
                  s = 10;
                  break a;
                case ce:
                  s = 9;
                  break a;
                case E:
                  s = 11;
                  break a;
                case fe:
                  s = 14;
                  break a;
                case pe:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29),
              (n = Error(i(130, e === null ? `null` : typeof e, ``))),
              (r = null));
        }
      return (
        (t = Li(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function Hi(e, t, n, r) {
      return ((e = Li(7, e, r, t)), (e.lanes = n), e);
    }
    function Ui(e, t, n) {
      return ((e = Li(6, e, null, t)), (e.lanes = n), e);
    }
    function Wi(e) {
      var t = Li(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function Gi(e, t, n) {
      return (
        (t = Li(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Ki = new WeakMap();
    function qi(e, t) {
      if (typeof e == `object` && e) {
        var n = Ki.get(e);
        return n === void 0
          ? ((t = { value: e, source: t, stack: Ue(t) }), Ki.set(e, t), t)
          : n;
      }
      return { value: e, source: t, stack: Ue(t) };
    }
    var Ji = [],
      Yi = 0,
      Xi = null,
      Zi = 0,
      Qi = [],
      $i = 0,
      ea = null,
      ta = 1,
      na = ``;
    function ra(e, t) {
      ((Ji[Yi++] = Zi), (Ji[Yi++] = Xi), (Xi = e), (Zi = t));
    }
    function ia(e, t, n) {
      ((Qi[$i++] = ta), (Qi[$i++] = na), (Qi[$i++] = ea), (ea = e));
      var r = ta;
      e = na;
      var i = 32 - A(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - A(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ta = (1 << (32 - A(t) + i)) | (n << i) | r),
          (na = a + e));
      } else ((ta = (1 << a) | (n << i) | r), (na = e));
    }
    function aa(e) {
      e.return !== null && (ra(e, 1), ia(e, 1, 0));
    }
    function oa(e) {
      for (; e === Xi;)
        ((Xi = Ji[--Yi]), (Ji[Yi] = null), (Zi = Ji[--Yi]), (Ji[Yi] = null));
      for (; e === ea;)
        ((ea = Qi[--$i]),
          (Qi[$i] = null),
          (na = Qi[--$i]),
          (Qi[$i] = null),
          (ta = Qi[--$i]),
          (Qi[$i] = null));
    }
    function sa(e, t) {
      ((Qi[$i++] = ta),
        (Qi[$i++] = na),
        (Qi[$i++] = ea),
        (ta = t.id),
        (na = t.overflow),
        (ea = e));
    }
    var ca = null,
      la = null,
      F = !1,
      ua = null,
      da = !1,
      fa = Error(i(519));
    function pa(e) {
      throw (
        ya(
          qi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1]
                  ? `text`
                  : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        fa
      );
    }
    function ma(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[j] = e), (t[At] = r), n)) {
        case `dialog`:
          (Q(`cancel`, t), Q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < zf.length; n++) Q(zf[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (Q(`error`, t), Q(`load`, t));
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          (Q(`invalid`, t),
            fn(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ));
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          (Q(`invalid`, t), gn(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` &&
          typeof n != `number` &&
          typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        ep(t.textContent, n)
          ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
            r.onScroll != null && Q(`scroll`, t),
            r.onScrollEnd != null && Q(`scrollend`, t),
            r.onClick != null && (t.onclick = Tn),
            (t = !0))
          : (t = !1),
        t || pa(e, !0));
    }
    function ha(e) {
      for (ca = e.return; ca;)
        switch (ca.tag) {
          case 5:
          case 31:
          case 13:
            da = !1;
            return;
          case 27:
          case 3:
            da = !0;
            return;
          default:
            ca = ca.return;
        }
    }
    function ga(e) {
      if (e !== ca) return !1;
      if (!F) return (ha(e), (F = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type),
            (n =
              n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
          (n = !n)),
        n && la && pa(e),
        ha(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        la = dm(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        la = dm(e);
      } else
        t === 27
          ? ((t = la),
            Sp(e.type) ? ((e = um), (um = null), (la = e)) : (la = t))
          : (la = ca ? lm(e.stateNode.nextSibling) : null);
      return !0;
    }
    function _a() {
      ((la = ca = null), (F = !1));
    }
    function va() {
      var e = ua;
      return (
        e !== null &&
          (hd === null ? (hd = e) : hd.push.apply(hd, e), (ua = null)),
        e
      );
    }
    function ya(e) {
      ua === null ? (ua = [e]) : ua.push(e);
    }
    var ba = De(null),
      xa = null,
      Sa = null;
    function Ca(e, t, n) {
      (k(ba, t._currentValue), (t._currentValue = n));
    }
    function wa(e) {
      ((e._currentValue = ba.current), Oe(ba));
    }
    function Ta(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Ea(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Ta(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            Ta(s, n, e),
            (s = null));
        } else
          a.tag === 13 &&
          a.memoizedState !== null &&
          a.memoizedState.dehydrated === null
            ? ((a.lanes |= n),
              (s = a.alternate),
              s !== null && (s.lanes |= n),
              Ta(a.return, n, e),
              (s = a.child),
              (s = s === null ? null : s.sibling))
            : (s = a.child);
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function Da(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            qr(a.pendingProps.value, s.value) ||
              (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === Me.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [sh]) : e.push(sh));
        }
        a = a.return;
      }
      return (e !== null && Ea(t, e, n, r), (t.flags |= 262144), e !== null);
    }
    function Oa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!qr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ka(e) {
      ((xa = e),
        (Sa = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null));
    }
    function Aa(e) {
      return Ma(xa, e);
    }
    function ja(e, t) {
      return (xa === null && ka(e), Ma(e, t));
    }
    function Ma(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Sa === null)) {
        if (e === null) throw Error(i(308));
        ((Sa = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288));
      } else Sa = Sa.next = t;
      return n;
    }
    var Na =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      Pa = t.unstable_scheduleCallback,
      Fa = t.unstable_NormalPriority,
      Ia = {
        $$typeof: le,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function La() {
      return { controller: new Na(), data: new Map(), refCount: 0 };
    }
    function Ra(e) {
      (e.refCount--,
        e.refCount === 0 &&
          Pa(Fa, function () {
            e.controller.abort();
          }));
    }
    function za(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (
          n === null && (n = e.transitionTypes = []), e = 0;
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var Ba = null;
    function Va(e) {
      var t = e.transitionTypes;
      return ((e.transitionTypes = null), t);
    }
    var Ha = null,
      Ua = 0,
      Wa = 0,
      Ga = null;
    function Ka(e, t) {
      if (Ha === null) {
        var n = (Ha = []);
        ((Ua = 0),
          (Wa = Pf()),
          (Ga = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (Ua++, t.then(qa, qa), t);
    }
    function qa() {
      if (--Ua === 0 && ((Ba = null), Ha !== null)) {
        Ga !== null && (Ga.status = `fulfilled`);
        var e = Ha;
        ((Ha = null), (Wa = 0), (Ga = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ja(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++)
              (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var Ya = D.S;
    D.S = function (e, t) {
      if (
        ((vd = Ye()),
        typeof t == `object` && t && typeof t.then == `function` && Ka(e, t),
        Ba !== null)
      )
        for (var n = bf; n !== null;) (za(n, Ba), (n = n.next));
      if (((n = e.types), n !== null)) {
        for (var r = bf; r !== null;) (za(r, n), (r = r.next));
        if (Wa !== 0) {
          ((r = Ba), r === null && (r = Ba = []));
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Ya !== null && Ya(e, t);
    };
    var Xa = De(null);
    function Za() {
      var e = Xa.current;
      return e === null ? nd.pooledCache : e;
    }
    function Qa(e, t) {
      t === null ? k(Xa, Xa.current) : k(Xa, t.pool);
    }
    function $a() {
      var e = Za();
      return e === null ? null : { parent: Ia._currentValue, pool: e };
    }
    var eo = Error(i(460)),
      to = Error(i(474)),
      no = Error(i(542)),
      ro = { then: function () {} };
    function io(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function ao(e, t, n) {
      switch (
        ((n = e[n]),
        n === void 0 ? e.push(t) : n !== t && (t.then(Tn, Tn), (t = n)),
        t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw (
            (e = t.reason),
            lo(e),
            e === void 0 && !(`reason` in t) ? Error(i(600)) : e
          );
        default:
          if (typeof t.status == `string`) t.then(Tn, Tn);
          else {
            if (((e = nd), e !== null && 100 < e.shellSuspendCounter))
              throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), lo(e), e);
          }
          throw ((so = t), eo);
      }
    }
    function oo(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function`
          ? ((so = e), eo)
          : e;
      }
    }
    var so = null;
    function co() {
      if (so === null) throw Error(i(459));
      var e = so;
      return ((so = null), e);
    }
    function lo(e) {
      if (e === eo || e === no) throw Error(i(483));
    }
    var uo = null,
      fo = 0;
    function po(e) {
      var t = fo;
      return ((fo += 1), uo === null && (uo = []), ao(uo, e, t));
    }
    function mo(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function ho(e, t) {
      throw t.$$typeof === ne
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]`
                ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                : e,
            ),
          ));
    }
    function go(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
            (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = zi(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 134217730), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 134217730), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = Ui(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ae
          ? ((e = d(e, t, n.props.children, r, n.key)), mo(e, n), e)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === pe &&
                  oo(i) === t.type))
            ? ((t = a(t, n.props)), mo(t, n), (t.return = e), t)
            : ((t = Vi(n.type, n.key, n.props, null, e.mode, r)),
              mo(t, n),
              (t.return = e),
              t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = Gi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = Hi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if (
          (typeof t == `string` && t !== ``) ||
          typeof t == `number` ||
          typeof t == `bigint`
        )
          return ((t = Ui(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case re:
              return (
                (n = Vi(t.type, t.key, t.props, null, e.mode, n)),
                mo(n, t),
                (n.return = e),
                n
              );
            case ie:
              return ((t = Gi(t, e.mode, n)), (t.return = e), t);
            case pe:
              return ((t = oo(t)), f(e, t, n));
          }
          if (Ce(t) || be(t))
            return ((t = Hi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, po(t), n);
          if (t.$$typeof === le) return f(e, ja(e, t), n);
          ho(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (
          (typeof n == `string` && n !== ``) ||
          typeof n == `number` ||
          typeof n == `bigint`
        )
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case re:
              return n.key === i ? l(e, t, n, r) : null;
            case ie:
              return n.key === i ? u(e, t, n, r) : null;
            case pe:
              return ((n = oo(n)), p(e, t, n, r));
          }
          if (Ce(n) || be(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, po(n), r);
          if (n.$$typeof === le) return p(e, t, ja(e, n), r);
          ho(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (
          (typeof r == `string` && r !== ``) ||
          typeof r == `number` ||
          typeof r == `bigint`
        )
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case re:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case ie:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case pe:
              return ((r = oo(r)), m(e, t, n, r, i));
          }
          if (Ce(r) || be(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return m(e, t, n, po(r), i);
          if (r.$$typeof === le) return m(e, t, n, ja(t, r), i);
          ho(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), F && ra(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (F && ra(i, h), l);
        }
        for (d = r(d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                ((_ = g.alternate),
                _ !== null && d.delete(_.key === null ? h : _.key)),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          F && ra(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), F && ra(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (F && ra(a, g), u);
        }
        for (h = r(h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                ((_ = v.alternate),
                _ !== null && h.delete(_.key === null ? g : _.key)),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          F && ra(a, g),
          u
        );
      }
      function _(e, r, o, c) {
        if (
          (typeof o == `object` &&
            o &&
            o.type === ae &&
            o.key === null &&
            o.props.ref === void 0 &&
            (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case re:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === ae)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling),
                          (c = a(r, o.props.children)),
                          mo(c, o),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` &&
                        l &&
                        l.$$typeof === pe &&
                        oo(l) === r.type)
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.props)),
                        mo(c, o),
                        (c.return = e),
                        (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === ae
                  ? ((c = Hi(o.props.children, e.mode, c, o.key)),
                    mo(c, o),
                    (c.return = e),
                    (e = c))
                  : ((c = Vi(o.type, o.key, o.props, null, e.mode, c)),
                    mo(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case ie:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling),
                        (c = a(r, o.children || [])),
                        (c.return = e),
                        (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  (t(e, r), (r = r.sibling));
                }
                ((c = Gi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case pe:
              return ((o = oo(o)), _(e, r, o, c));
          }
          if (Ce(o)) return h(e, r, o, c);
          if (be(o)) {
            if (((l = be(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), g(e, r, o, c));
          }
          if (typeof o.then == `function`) return _(e, r, po(o), c);
          if (o.$$typeof === le) return _(e, r, ja(e, o), c);
          ho(e, o);
        }
        return (typeof o == `string` && o !== ``) ||
          typeof o == `number` ||
          typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = Ui(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          fo = 0;
          var i = _(e, t, n, r);
          return ((uo = null), i);
        } catch (t) {
          if (t === eo || t === no) throw t;
          var a = Li(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var _o = go(!0),
      vo = go(!1),
      yo = !1;
    function bo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function xo(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function So(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Co(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), W & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = P(e)),
          Pi(e, null, n),
          t
        );
      }
      return (ji(e, r, t, n), P(e));
    }
    function wo(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
      }
    }
    function To(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Eo = !1;
    function Do() {
      if (Eo) {
        var e = Ga;
        if (e !== null) throw e;
      }
    }
    function Oo(e, t, n, r) {
      Eo = !1;
      var i = e.updateQueue;
      yo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (K & f) === f : (r & f) === f) {
            (f !== 0 && f === Wa && (Eo = !0),
              u !== null &&
                (u = u.next =
                  {
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: null,
                    next: null,
                  }));
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(g, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = T({}, d, f);
                  break a;
                case 2:
                  yo = !0;
              }
            }
            ((f = s.callback),
              f !== null &&
                ((e.flags |= 64),
                p && (e.flags |= 8192),
                (p = i.callbacks),
                p === null ? (i.callbacks = [f]) : p.push(f)));
          } else
            ((p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((p = s),
              (s = p.next),
              (p.next = null),
              (i.lastBaseUpdate = p),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (ld |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function ko(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ao(e, t) {
      var n = e.callbacks;
      if (n !== null)
        for (e.callbacks = null, e = 0; e < n.length; e++) ko(n[e], t);
    }
    var jo = De(null),
      Mo = De(0);
    function No(e, t) {
      ((e = sd), k(Mo, e), k(jo, t), (sd = e | t.baseLanes));
    }
    function Po() {
      (k(Mo, sd), k(jo, jo.current));
    }
    function Fo() {
      ((sd = Mo.current), Oe(jo), Oe(Mo));
    }
    var I = De(null),
      Io = null;
    function Lo(e) {
      var t = e.alternate;
      (k(Ho, Ho.current & 1),
        k(I, e),
        Io === null &&
          (t === null || jo.current !== null || t.memoizedState !== null) &&
          (Io = e));
    }
    function Ro(e) {
      (k(Ho, Ho.current), k(I, e), Io === null && (Io = e));
    }
    function zo(e) {
      e.tag === 22
        ? (k(Ho, Ho.current), k(I, e), Io === null && (Io = e))
        : Bo();
    }
    function Bo() {
      (k(Ho, Ho.current), k(I, I.current));
    }
    function Vo(e) {
      (Oe(I), Io === e && (Io = null), Oe(Ho));
    }
    var Ho = De(0);
    function Uo(e, t) {
      (k(I, I.current), k(Ho, t));
    }
    function Wo(e) {
      (Oe(Ho), Oe(I), Io === e && (Io = null));
    }
    function Go(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || om(n) || sm(n)))
            return t;
        } else if (
          t.tag === 19 &&
          t.memoizedProps.revealOrder !== `independent`
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Ko = 0,
      L = null,
      R = null,
      qo = null,
      Jo = !1,
      Yo = !1,
      Xo = !1,
      Zo = 0,
      Qo = 0,
      $o = null,
      es = 0;
    function ts() {
      throw Error(i(321));
    }
    function ns(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!qr(e[n], t[n])) return !1;
      return !0;
    }
    function rs(e, t, n, r, i, a) {
      return (
        (Ko = a),
        (L = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (D.H = e === null || e.memoizedState === null ? vc : yc),
        (Xo = !1),
        (a = n(r, i)),
        (Xo = !1),
        Yo && (a = as(t, n, r, i)),
        is(e),
        a
      );
    }
    function is(e) {
      D.H = _c;
      var t = R !== null && R.next !== null;
      if (((Ko = 0), (qo = R = L = null), (Jo = !1), (Qo = 0), ($o = null), t))
        throw Error(i(300));
      e === null ||
        Ic ||
        ((e = e.dependencies), e !== null && Oa(e) && (Ic = !0));
    }
    function as(e, t, n, r) {
      L = e;
      var a = 0;
      do {
        if ((Yo && ($o = null), (Qo = 0), (Yo = !1), 25 <= a))
          throw Error(i(301));
        if (((a += 1), (qo = R = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((D.H = bc), (o = t(n, r)));
      } while (Yo);
      return o;
    }
    function os() {
      var e = D.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? ps(t) : t),
        (e = e.useState()[0]),
        (R === null ? null : R.memoizedState) !== e && (L.flags |= 1024),
        t
      );
    }
    function ss() {
      var e = Zo !== 0;
      return ((Zo = 0), e);
    }
    function cs(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ls(e) {
      if (Jo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        Jo = !1;
      }
      ((Ko = 0), (qo = R = L = null), (Yo = !1), (Qo = Zo = 0), ($o = null));
    }
    function us() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        qo === null ? (L.memoizedState = qo = e) : (qo = qo.next = e),
        qo
      );
    }
    function ds() {
      if (R === null) {
        var e = L.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = R.next;
      var t = qo === null ? L.memoizedState : qo.next;
      if (t !== null) ((qo = t), (R = e));
      else {
        if (e === null)
          throw L.alternate === null ? Error(i(467)) : Error(i(310));
        ((R = e),
          (e = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null,
          }),
          qo === null ? (L.memoizedState = qo = e) : (qo = qo.next = e));
      }
      return qo;
    }
    function fs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ps(e) {
      var t = Qo;
      return (
        (Qo += 1),
        $o === null && ($o = []),
        (e = ao($o, e, t)),
        (t = L),
        (qo === null ? t.memoizedState : qo.next) === null &&
          ((t = t.alternate),
          (D.H = t === null || t.memoizedState === null ? vc : yc)),
        e
      );
    }
    function ms(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return ps(e);
        if (e.$$typeof === ve) return;
        if (e.$$typeof === le) return Aa(e);
      }
      throw Error(i(438, String(e)));
    }
    function hs(e) {
      var t = null,
        n = L.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = L.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = fs()), (L.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ge;
      return (t.index++, n);
    }
    function gs(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function _s(e) {
      return vs(ds(), R, e);
    }
    function vs(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (Ko & f) === f : (K & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === Wa && (d = !0));
            else if ((Ko & p) === p) {
              ((u = u.next), p === Wa && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (L.lanes |= p),
                (ld |= p));
            ((f = u.action),
              Xo && n(o, f),
              (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (L.lanes |= f),
              (ld |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !qr(o, e.memoizedState) && ((Ic = !0), d && ((n = Ga), n !== null)))
        )
          throw n;
        ((e.memoizedState = o),
          (e.baseState = s),
          (e.baseQueue = l),
          (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function ys(e) {
      var t = ds(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (qr(o, t.memoizedState) || (Ic = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function bs(e, t, n) {
      var r = L,
        a = ds(),
        o = F;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !qr((R || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (Ic = !0)),
        (a = a.queue),
        Us(Cs.bind(null, r, a, e), [e]),
        (e =
          a.getSnapshot !== t ||
          s ||
          (qo !== null && !!(qo.memoizedState.tag & 1))),
        B(e ? 9 : 8, { destroy: void 0 }, Ss.bind(null, r, a, n, t), null),
        e)
      ) {
        if (((r.flags |= 2048), nd === null)) throw Error(i(349));
        o || Ko & 127 || xs(r, t, n);
      }
      return n;
    }
    function xs(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = L.updateQueue),
        t === null
          ? ((t = fs()), (L.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ss(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), ws(t) && Ts(e));
    }
    function Cs(e, t, n) {
      return n(function () {
        ws(t) && Ts(e);
      });
    }
    function ws(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !qr(e, n);
      } catch {
        return !0;
      }
    }
    function Ts(e) {
      var t = Ni(e, 2);
      t !== null && Id(t, e, 2);
    }
    function Es(e) {
      var t = us();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), Xo)) {
          ot(!0);
          try {
            n();
          } finally {
            ot(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: gs,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ds(e, t, n, r) {
      return ((e.baseState = n), vs(e, R, typeof r == `function` ? r : gs));
    }
    function Os(e, t, n, r, a) {
      if (mc(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (D.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), ks(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function ks(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        ((o.types = a === null ? null : a.types), (D.T = o));
        try {
          var s = n(i, r),
            c = D.S;
          (c !== null && c(o, s), As(e, t, s));
        } catch (n) {
          z(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (D.T = a));
        }
      } else
        try {
          ((a = n(i, r)), As(e, t, a));
        } catch (n) {
          z(e, t, n);
        }
    }
    function As(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              js(e, t, n);
            },
            function (n) {
              return z(e, t, n);
            },
          )
        : js(e, t, n);
    }
    function js(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Ms(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next),
          n === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), ks(e, n))));
    }
    function z(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Ms(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Ms(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ns(e, t) {
      return t;
    }
    function Ps(e, t) {
      if (F) {
        var n = nd.formState;
        if (n !== null) {
          a: {
            var r = L;
            if (F) {
              if (la) {
                b: {
                  for (var i = la, a = da; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = lm(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((la = lm(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              pa(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = us()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ns,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = dc.bind(null, L, r)),
        (r.dispatch = n),
        (r = Es(!1)),
        (a = pc.bind(null, L, !1, r.queue)),
        (r = us()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Os.bind(null, L, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function Fs(e) {
      return Is(ds(), R, e);
    }
    function Is(e, t, n) {
      if (
        ((t = vs(e, t, Ns)[0]),
        (e = _s(gs)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = ps(t);
        } catch (e) {
          throw e === eo ? no : e;
        }
      else r = t;
      t = ds();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((L.flags |= 2048),
          B(9, { destroy: void 0 }, Ls.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function Ls(e, t) {
      e.action = t;
    }
    function Rs(e) {
      var t = ds(),
        n = R;
      if (n !== null) return Is(t, n, e);
      (ds(), (t = t.memoizedState), (n = ds()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function B(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = L.updateQueue),
        t === null && ((t = fs()), (L.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function zs() {
      return ds().memoizedState;
    }
    function Bs(e, t, n, r) {
      var i = us();
      ((L.flags |= e),
        (i.memoizedState = B(
          1 | t,
          { destroy: void 0 },
          n,
          r === void 0 ? null : r,
        )));
    }
    function Vs(e, t, n, r) {
      var i = ds();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      R !== null && r !== null && ns(r, R.memoizedState.deps)
        ? (i.memoizedState = B(t, a, n, r))
        : ((L.flags |= e), (i.memoizedState = B(1 | t, a, n, r)));
    }
    function Hs(e, t) {
      Bs(8390656, 8, e, t);
    }
    function Us(e, t) {
      Vs(2048, 8, e, t);
    }
    function Ws(e) {
      L.flags |= 4;
      var t = L.updateQueue;
      if (t === null) ((t = fs()), (L.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function Gs(e) {
      var t = ds().memoizedState;
      return (
        Ws({ ref: t, nextImpl: e }),
        function () {
          if (W & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function Ks(e, t) {
      return Vs(4, 2, e, t);
    }
    function qs(e, t) {
      return Vs(4, 4, e, t);
    }
    function Js(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ys(e, t, n) {
      ((n = n == null ? null : n.concat([e])),
        Vs(4, 4, Js.bind(null, t, e), n));
    }
    function Xs() {}
    function Zs(e, t) {
      var n = ds();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && ns(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Qs(e, t) {
      var n = ds();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && ns(t, r[1])) return r[0];
      if (((r = e()), Xo)) {
        ot(!0);
        try {
          e();
        } finally {
          ot(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function $s(e, t, n) {
      return n === void 0 || (Ko & 1073741824 && !(K & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Pd()), (L.lanes |= e), (ld |= e), n);
    }
    function ec(e, t, n, r) {
      return qr(n, t)
        ? n
        : jo.current === null
          ? !(Ko & 106) || (Ko & 1073741824 && !(K & 261930))
            ? ((Ic = !0), (e.memoizedState = n))
            : ((e = Pd()), (L.lanes |= e), (ld |= e), t)
          : ((e = $s(e, n, r)), qr(e, t) || (Ic = !0), e);
    }
    function tc(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      ((s.types = o === null ? null : o.types), (D.T = s), pc(e, !1, t, n));
      try {
        var c = i(),
          l = D.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? fc(e, t, Ja(c, r), Nd(e))
            : fc(e, t, r, Nd(e)));
      } catch (n) {
        fc(e, t, { then: function () {}, status: `rejected`, reason: n }, Nd());
      } finally {
        ((O.p = a),
          o !== null && s.types !== null && (o.types = s.types),
          (D.T = o));
      }
    }
    function nc() {}
    function rc(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ic(e).queue;
      tc(
        e,
        a,
        t,
        we,
        n === null
          ? nc
          : function () {
              return (ac(e), n(r));
            },
      );
    }
    function ic(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: we,
        baseState: we,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: gs,
          lastRenderedState: we,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: gs,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function ac(e) {
      var t = ic(e);
      (t.next === null && (t = e.alternate.memoizedState),
        fc(e, t.next.queue, {}, Nd()));
    }
    function oc() {
      return Aa(sh);
    }
    function sc() {
      return ds().memoizedState;
    }
    function cc() {
      return ds().memoizedState;
    }
    function lc(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Nd();
            e = So(n);
            var r = Co(t, e, n);
            (r !== null && (Id(r, t, n), wo(r, t, n)),
              (t = { cache: La() }),
              (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function uc(e, t, n) {
      var r = Nd();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        mc(e)
          ? hc(t, n)
          : ((n = Mi(e, t, n, r)), n !== null && (Id(n, e, r), gc(n, t, r))));
    }
    function dc(e, t, n) {
      fc(e, t, n, Nd());
    }
    function fc(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (mc(e)) hc(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), qr(s, o)))
              return (ji(e, t, i, 0), nd === null && Ai(), !1);
          } catch {}
        if (((n = Mi(e, t, i, r)), n !== null))
          return (Id(n, e, r), gc(n, t, r), !0);
      }
      return !1;
    }
    function pc(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: Pf(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        mc(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = Mi(e, n, r, 2)), t !== null && Id(t, e, 2));
    }
    function mc(e) {
      var t = e.alternate;
      return e === L || (t !== null && t === L);
    }
    function hc(e, t) {
      Yo = Jo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function gc(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
      }
    }
    var _c = {
        readContext: Aa,
        use: ms,
        useCallback: ts,
        useContext: ts,
        useEffect: ts,
        useImperativeHandle: ts,
        useLayoutEffect: ts,
        useInsertionEffect: ts,
        useMemo: ts,
        useReducer: ts,
        useRef: ts,
        useState: ts,
        useDebugValue: ts,
        useDeferredValue: ts,
        useTransition: ts,
        useSyncExternalStore: ts,
        useId: ts,
        useHostTransitionStatus: ts,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: ts,
        useMemoCache: ts,
        useCacheRefresh: ts,
        useEffectEvent: ts,
      },
      vc = {
        readContext: Aa,
        use: ms,
        useCallback: function (e, t) {
          return ((us().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Aa,
        useEffect: Hs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])),
            Bs(4194308, 4, Js.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return Bs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Bs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = us();
          t = t === void 0 ? null : t;
          var r = e();
          if (Xo) {
            ot(!0);
            try {
              e();
            } finally {
              ot(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = us();
          if (n !== void 0) {
            var i = n(t);
            if (Xo) {
              ot(!0);
              try {
                n(t);
              } finally {
                ot(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = uc.bind(null, L, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = us();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Es(e);
          var t = e.queue,
            n = dc.bind(null, L, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return $s(us(), e, t);
        },
        useTransition: function () {
          var e = Es(!1);
          return (
            (e = tc.bind(null, L, e.queue, !0, !1)),
            (us().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var r = L,
            a = us();
          if (F) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), nd === null)) throw Error(i(349));
            K & 127 || xs(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Hs(Cs.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            B(9, { destroy: void 0 }, Ss.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = us(),
            t = nd.identifierPrefix;
          if (F) {
            var n = na,
              r = ta;
            ((n = (r & ~(1 << (32 - A(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = Zo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = es++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: oc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function (e) {
          var t = us();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = pc.bind(null, L, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: hs,
        useCacheRefresh: function () {
          return (us().memoizedState = lc.bind(null, L));
        },
        useEffectEvent: function (e) {
          var t = us(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (W & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      yc = {
        readContext: Aa,
        use: ms,
        useCallback: Zs,
        useContext: Aa,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: _s,
        useRef: zs,
        useState: function () {
          return _s(gs);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          return ec(ds(), R.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _s(gs)[0],
            t = ds().memoizedState;
          return [typeof e == `boolean` ? e : ps(e), t];
        },
        useSyncExternalStore: bs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Fs,
        useActionState: Fs,
        useOptimistic: function (e, t) {
          return Ds(ds(), R, e, t);
        },
        useMemoCache: hs,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      },
      bc = {
        readContext: Aa,
        use: ms,
        useCallback: Zs,
        useContext: Aa,
        useEffect: Us,
        useImperativeHandle: Ys,
        useInsertionEffect: Ks,
        useLayoutEffect: qs,
        useMemo: Qs,
        useReducer: ys,
        useRef: zs,
        useState: function () {
          return ys(gs);
        },
        useDebugValue: Xs,
        useDeferredValue: function (e, t) {
          var n = ds();
          return R === null ? $s(n, e, t) : ec(n, R.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ys(gs)[0],
            t = ds().memoizedState;
          return [typeof e == `boolean` ? e : ps(e), t];
        },
        useSyncExternalStore: bs,
        useId: sc,
        useHostTransitionStatus: oc,
        useFormState: Rs,
        useActionState: Rs,
        useOptimistic: function (e, t) {
          var n = ds();
          return R === null
            ? ((n.baseState = e), [e, n.queue.dispatch])
            : Ds(n, R, e, t);
        },
        useMemoCache: hs,
        useCacheRefresh: cc,
        useEffectEvent: Gs,
      };
    function xc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : T({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Sc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nd(),
          i = So(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Co(e, i, r)),
          t !== null && (Id(t, e, r), wo(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Nd(),
          i = So(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Co(e, i, r)),
          t !== null && (Id(t, e, r), wo(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Nd(),
          r = So(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Co(e, r, n)),
          t !== null && (Id(t, e, n), wo(t, e, n)));
      },
    };
    function Cc(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Jr(n, r) || !Jr(i, a)
            : !0
      );
    }
    function wc(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Sc.enqueueReplaceState(t, t.state, null));
    }
    function Tc(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = T({}, n)), e))
          n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Ec(e) {
      Ei(e);
    }
    function Dc(e) {
      console.error(e);
    }
    function Oc(e) {
      Ei(e);
    }
    function kc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ac(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function jc(e, t, n) {
      return (
        (n = So(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          kc(e, t);
        }),
        n
      );
    }
    function Mc(e) {
      return ((e = So(e)), (e.tag = 3), e);
    }
    function Nc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Ac(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Ac(t, n, r),
            typeof i != `function` &&
              (xd === null ? (xd = new Set([this])) : xd.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: e === null ? `` : e,
          });
        });
    }
    function Pc(e, t, n, r, a) {
      if (
        ((n.flags |= 32768),
        typeof r == `object` && r && typeof r.then == `function`)
      ) {
        if (
          ((t = n.alternate),
          t !== null && Da(t, n, a, !0),
          (n = I.current),
          n !== null)
        ) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return (
                Io === null
                  ? Kd()
                  : n.alternate === null && cd === 0 && (cd = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === ro
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    mf(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === ro
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue),
                        n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    mf(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (mf(e, r, a), Kd(), !1);
      }
      if (F)
        return (
          (t = I.current),
          t === null
            ? (r !== fa && ((t = Error(i(423), { cause: r })), ya(qi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = qi(r, n)),
              (a = jc(e.stateNode, r, a)),
              To(e, a),
              cd !== 4 && (cd = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== fa && ((e = Error(i(422), { cause: r })), ya(qi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (
        ((o = qi(o, n)),
        md === null ? (md = [o]) : md.push(o),
        cd !== 4 && (cd = 2),
        t === null)
      )
        return !0;
      ((r = qi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = jc(n.stateNode, r, e)),
              To(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (xd === null || !xd.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Mc(a)),
                Nc(a, e, n, r),
                To(n, a),
                !1
              );
            break;
          case 22:
            if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var Fc = Error(i(461)),
      Ic = !1;
    function Lc(e, t, n, r) {
      t.child = e === null ? vo(t, null, n, r) : _o(t, e.child, n, r);
    }
    function Rc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ka(t),
        (r = rs(e, t, n, o, a, i)),
        (s = ss()),
        e !== null && !Ic
          ? (cs(e, t, i), fl(e, t, i))
          : (F && s && aa(t), (t.flags |= 1), Lc(e, t, r, i), t.child)
      );
    }
    function zc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Ri(a) &&
          a.defaultProps === void 0 &&
          n.compare === null
          ? ((t.tag = 15), (t.type = a), Bc(e, t, a, r, i))
          : ((e = Vi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !pl(e, i))) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Jr : n),
          n(o, r) && e.ref === t.ref)
        )
          return fl(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = zi(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Bc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Jr(a, r) && e.ref === t.ref)
          if (((Ic = !1), (t.pendingProps = r = a), pl(e, i)))
            e.flags & 131072 && (Ic = !0);
          else return ((t.lanes = e.lanes), fl(e, t, i));
      }
      return Jc(e, t, n, r, i);
    }
    function Vc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return Uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Qa(t, a === null ? null : a.cachePool),
            a === null ? Po() : No(t, a),
            zo(t));
        else
          return (
            (r = t.lanes = 536870912),
            Uc(e, t, a === null ? n : a.baseLanes | n, n, r)
          );
      } else
        a === null
          ? (e !== null && Qa(t, null), Po(), Bo())
          : (Qa(t, a.cachePool), No(t, a), Bo(), (t.memoizedState = null));
      return (Lc(e, t, i, n), t.child);
    }
    function Hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function Uc(e, t, n, r, i) {
      var a = Za();
      return (
        (a = a === null ? null : { parent: Ia._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Qa(t, null),
        Po(),
        zo(t),
        e !== null && Da(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function Wc(e, t) {
      return (
        (t = rl({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function Gc(e, t, n) {
      return (
        _o(t, e.child, null, n),
        (e = Wc(t, t.pendingProps)),
        (e.flags |= 2),
        Vo(t),
        (t.memoizedState = null),
        e
      );
    }
    function Kc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (F) {
          if (r.mode === `hidden`)
            return (
              (e = Wc(t, r)),
              (t.lanes = 536870912),
              (e.memoizedState = { baseLanes: 0, cachePool: null }),
              Hc(null, e)
            );
          if (
            (Ro(t),
            (e = la)
              ? ((e = am(e, da)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ea === null ? null : { id: ta, overflow: na },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ca = t),
                  (la = null)))
              : (e = null),
            e === null)
          )
            throw pa(t);
          return ((t.lanes = 536870912), null);
        }
        return Wc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((Ro(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = Gc(e, t, n)));
          else if (t.memoizedState !== null)
            ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if (
          (Ic || Da(e, t, n, !1), (a = (n & e.childLanes) !== 0), Ic || a)
        ) {
          if (jo.current === null) {
            if (
              ((r = nd),
              r !== null && ((s = wt(r, n)), s !== 0 && s !== o.retryLane))
            )
              throw ((o.retryLane = s), Ni(e, s), Id(r, e, s), Fc);
            Kd();
          }
          t = Gc(e, t, n);
        } else
          ((e = o.treeContext),
            (la = lm(s.nextSibling)),
            (ca = t),
            (F = !0),
            (ua = null),
            (da = !1),
            e !== null && sa(t, e),
            (t = Wc(t, r)),
            (t.flags |= 134221824));
        return t;
      }
      return (
        (e = zi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function qc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Jc(e, t, n, r, i) {
      return (
        ka(t),
        (n = rs(e, t, n, r, void 0, i)),
        (r = ss()),
        e !== null && !Ic
          ? (cs(e, t, i), fl(e, t, i))
          : (F && r && aa(t), (t.flags |= 1), Lc(e, t, n, i), t.child)
      );
    }
    function Yc(e, t, n, r, i, a) {
      return (
        ka(t),
        (t.updateQueue = null),
        (n = as(t, r, n, i)),
        is(e),
        (r = ss()),
        e !== null && !Ic
          ? (cs(e, t, a), fl(e, t, a))
          : (F && r && aa(t), (t.flags |= 1), Lc(e, t, n, a), t.child)
      );
    }
    function Xc(e, t, n, r, i) {
      if ((ka(t), t.stateNode === null)) {
        var a = Fi,
          o = n.contextType;
        (typeof o == `object` && o && (a = Aa(o)),
          (a = new n(r, a)),
          (t.memoizedState =
            a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Sc),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          bo(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Aa(o) : Fi),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` &&
            (xc(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` &&
              a.UNSAFE_componentWillMount(),
            o !== a.state && Sc.enqueueReplaceState(a, a.state, null),
            Oo(t, r, a, i),
            Do(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Tc(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = Fi), typeof u == `object` && u && (o = Aa(u)));
        var d = n.getDerivedStateFromProps;
        ((u =
          typeof d == `function` ||
          typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && wc(t, a, r, o)),
          (yo = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Oo(t, r, a, i),
          Do(),
          (l = t.memoizedState),
          s || f !== l || yo
            ? (typeof d == `function` &&
                (xc(t, n, d, r), (l = t.memoizedState)),
              (c = yo || Cc(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` &&
                      a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((a = t.stateNode),
          xo(e, t),
          (o = t.memoizedProps),
          (u = Tc(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = Fi),
          typeof l == `object` && l && (c = Aa(l)),
          (s = n.getDerivedStateFromProps),
          (l =
            typeof s == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && wc(t, a, r, c)),
          (yo = !1),
          (f = t.memoizedState),
          (a.state = f),
          Oo(t, r, a, i),
          Do());
        var p = t.memoizedState;
        o !== d ||
        f !== p ||
        yo ||
        (e !== null && e.dependencies !== null && Oa(e.dependencies))
          ? (typeof s == `function` && (xc(t, n, s, r), (p = t.memoizedState)),
            (u =
              yo ||
              Cc(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Oa(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` &&
                    a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        qc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n =
              r && typeof n.getDerivedStateFromError != `function`
                ? null
                : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = _o(t, e.child, null, i)),
                (t.child = _o(t, null, n, i)))
              : Lc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = fl(e, t, i)),
        e
      );
    }
    function Zc(e, t, n, r) {
      return (_a(), (t.flags |= 256), Lc(e, t, n, r), t.child);
    }
    var Qc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function $c(e) {
      return { baseLanes: e, cachePool: $a() };
    }
    function el(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= fd), e);
    }
    function tl(e, t, n) {
      var r = t.pendingProps,
        i = !1,
        a = !!(t.flags & 128),
        o;
      if (
        ((o = a) ||
          (o =
            e !== null && e.memoizedState === null ? !1 : !!(Ho.current & 2)),
        o && ((i = !0), (t.flags &= -129)),
        (o = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (F) {
          if (
            (i ? Lo(t) : Bo(),
            (e = la)
              ? ((e = am(e, da)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: ea === null ? null : { id: ta, overflow: na },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = Wi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ca = t),
                  (la = null)))
              : (e = null),
            e === null)
          )
            throw pa(t);
          return ((t.lanes = sm(e) ? 32 : 536870912), null);
        }
        return (
          (a = r.children),
          (r = r.fallback),
          i
            ? (Bo(),
              (i = t.mode),
              (a = rl({ mode: `hidden`, children: a }, i)),
              (r = Hi(r, i, n, null)),
              (a.return = t),
              (r.return = t),
              (a.sibling = r),
              (t.child = a),
              (r = t.child),
              (r.memoizedState = $c(n)),
              (r.childLanes = el(e, o, n)),
              (t.memoizedState = Qc),
              Hc(null, r))
            : (Lo(t), nl(t, a))
        );
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return al(e, t, a, o, r, c, s, n);
      }
      return i
        ? (Bo(),
          (i = r.fallback),
          (a = t.mode),
          (s = e.child),
          (c = s.sibling),
          (r = zi(s, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = s.subtreeFlags & 1206910976),
          c === null
            ? ((i = Hi(i, a, n, null)), (i.flags |= 2))
            : (i = zi(c, i)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          Hc(null, r),
          (r = t.child),
          (i = e.child.memoizedState),
          i === null
            ? (i = $c(n))
            : ((a = i.cachePool),
              a === null
                ? (a = $a())
                : ((s = Ia._currentValue),
                  (a = a.parent === s ? a : { parent: s, pool: s })),
              (i = { baseLanes: i.baseLanes | n, cachePool: a })),
          (r.memoizedState = i),
          (r.childLanes = el(e, o, n)),
          (t.memoizedState = Qc),
          Hc(e.child, r))
        : (Lo(t),
          (n = e.child),
          (e = n.sibling),
          (n = zi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((o = t.deletions),
            o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function nl(e, t) {
      return (
        (t = rl({ mode: `visible`, children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function rl(e, t) {
      return ((e = Li(22, e, null, t)), (e.lanes = 0), e);
    }
    function il(e, t, n) {
      return (
        _o(t, e.child, null, n),
        (e = nl(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function al(e, t, n, r, a, o, s, c) {
      if (n)
        return t.flags & 256
          ? (Lo(t), (t.flags &= -257), il(e, t, c))
          : t.memoizedState === null
            ? (Bo(),
              (o = a.fallback),
              (s = t.mode),
              (a = rl({ mode: `visible`, children: a.children }, s)),
              (o = Hi(o, s, c, null)),
              (o.flags |= 2),
              (a.return = t),
              (o.return = t),
              (a.sibling = o),
              (t.child = a),
              _o(t, e.child, null, c),
              (a = t.child),
              (a.memoizedState = $c(c)),
              (a.childLanes = el(e, r, c)),
              (t.memoizedState = Qc),
              Hc(null, a))
            : (Bo(), (t.child = e.child), (t.flags |= 128), null);
      if ((Lo(t), sm(o))) {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
        return (
          (r = l),
          r !== `` &&
            ((a = Error(i(419))),
            (a.stack = ``),
            (a.digest = r),
            ya({ value: a, source: null, stack: null })),
          il(e, t, c)
        );
      }
      if ((Ic || Da(e, t, c, !1), (r = (c & e.childLanes) !== 0), Ic || r)) {
        if (jo.current !== null) return il(e, t, c);
        if (
          ((r = nd),
          r !== null && ((a = wt(r, c)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Ni(e, a), Id(r, e, a), Fc);
        return (om(o) || Kd(), il(e, t, c));
      }
      return om(o)
        ? ((t.flags |= 192), (t.child = e.child), null)
        : ((e = s.treeContext),
          (la = lm(o.nextSibling)),
          (ca = t),
          (F = !0),
          (ua = null),
          (da = !1),
          e !== null && sa(t, e),
          (t = nl(t, a.children)),
          (t.flags |= 134221824),
          t);
    }
    function ol(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Ta(e.return, t, n));
    }
    function sl(e) {
      for (var t = null; e !== null;) {
        var n = e.alternate;
        (n !== null && Go(n) === null && (t = e), (e = e.sibling));
      }
      return t;
    }
    function cl(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function ll(e) {
      var t = e.child;
      for (e.child = null; t !== null;) {
        var n = t.sibling;
        ((t.sibling = e.child), (e.child = t), (t = n));
      }
    }
    function ul(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Ho.current;
      if (t.flags & 128) return (Uo(t, o), null);
      var s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        Uo(t, o),
        i === `backwards` && e !== null
          ? (ll(e), Lc(e, t, r, n), ll(e))
          : Lc(e, t, r, n),
        (r = F ? Zi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && ol(e, n, t);
          else if (e.tag === 19) ol(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `backwards`:
          ((n = sl(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null), ll(t)),
            cl(t, !0, i, null, a, r));
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && Go(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          cl(t, !0, n, null, a, r);
          break;
        case `together`:
          cl(t, !1, null, null, void 0, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          ((n = sl(t.child)),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            cl(t, !1, i, n, a, r));
      }
      return t.child;
    }
    function dl(e, t, n) {
      var r = t.pendingProps;
      return (Ca(t, t.type, r.value), Lc(e, t, r.children, n), t.child);
    }
    function fl(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (ld |= t.lanes),
        (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((Da(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = zi(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = zi(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function pl(e, t) {
      return (
        (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Oa(e)))
      );
    }
    function ml(e, t, n) {
      switch (t.tag) {
        case 3:
          (Ne(t, t.stateNode.containerInfo),
            Ca(t, Ia, e.memoizedState.cache),
            _a());
          break;
        case 27:
        case 5:
          Fe(t);
          break;
        case 4:
          Ne(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ca(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), Ro(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return (Lo(t), (t.flags |= 128), null);
            r = Da(e, t, n, !1);
            var i = t.child.childLanes;
            return r || (n & i) !== 0
              ? tl(e, t, n)
              : (Lo(t), (e = fl(e, t, n)), e === null ? null : e.sibling);
          }
          Lo(t);
          break;
        case 19:
          if (t.flags & 128) return ul(e, t, n);
          if (
            ((i = !!(e.flags & 128)),
            (r = (n & t.childLanes) !== 0),
            (r ||= (Da(e, t, n, !1), (n & t.childLanes) !== 0)),
            i)
          ) {
            if (r) return ul(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            Uo(t, Ho.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), Vc(e, t, n, t.pendingProps));
        case 24:
          Ca(t, Ia, e.memoizedState.cache);
      }
      return fl(e, t, n);
    }
    function hl(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) Ic = !0;
        else {
          if (!pl(e, n) && !(t.flags & 128)) return ((Ic = !1), ml(e, t, n));
          Ic = !!(e.flags & 131072);
        }
      else ((Ic = !1), F && t.flags & 1048576 && ia(t, Zi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = oo(t.elementType)), (t.type = e), typeof e == `function`))
              Ri(e)
                ? ((r = Tc(e, r)), (t.tag = 1), (t = Xc(null, t, e, r, n)))
                : ((t.tag = 0), (t = Jc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === E) {
                  ((t.tag = 11), (t = Rc(null, t, e, r, n)));
                  break a;
                }
                if (a === fe) {
                  ((t.tag = 14), (t = zc(null, t, e, r, n)));
                  break a;
                }
                if (a === le) {
                  ((t.tag = 10), (t.type = e), (t = dl(null, t, n)));
                  break a;
                }
              }
              throw ((t = Se(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return Jc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Tc(r, t.pendingProps)), Xc(e, t, r, a, n));
        case 3:
          a: {
            if ((Ne(t, t.stateNode.containerInfo), e === null))
              throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), xo(e, t), Oo(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ca(t, Ia, r),
              r !== o.cache && Ea(t, [Ia], n, !0),
              Do(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = Zc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = qi(Error(i(424)), t)), ya(a), (t = Zc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  la = lm(e.firstChild),
                    ca = t,
                    F = !0,
                    ua = null,
                    da = !0,
                    n = vo(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
              }
            else {
              if ((_a(), r === a)) {
                t = fl(e, t, n);
                break a;
              }
              Lc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            qc(e, t),
            e === null
              ? (n = Nm(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : F || (t.stateNode = fp(t.type, t.pendingProps, je.current, t))
              : (t.memoizedState = Nm(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Fe(t),
            e === null &&
              F &&
              ((r = t.stateNode = hm(t.type, t.pendingProps, je.current)),
              (ca = t),
              (da = !0),
              (a = la),
              Sp(t.type) ? ((um = a), (la = lm(r.firstChild))) : (la = a)),
            Lc(e, t, t.pendingProps.children, n),
            qc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              F &&
              ((a = r = la) &&
                ((r = rm(r, t.type, t.pendingProps, da)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r),
                    (ca = t),
                    (la = lm(r.firstChild)),
                    (da = !1),
                    (a = !0))),
              a || pa(t)),
            Fe(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((a = rs(e, t, os, null, null, n)), (sh._currentValue = a)),
            qc(e, t),
            Lc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              F &&
              ((e = n = la) &&
                ((n = im(n, t.pendingProps, da)),
                n === null
                  ? (e = !1)
                  : ((t.stateNode = n), (ca = t), (la = null), (e = !0))),
              e || pa(t)),
            null
          );
        case 13:
          return tl(e, t, n);
        case 4:
          return (
            Ne(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = _o(t, null, r, n)) : Lc(e, t, r, n),
            t.child
          );
        case 11:
          return Rc(e, t, t.type, t.pendingProps, n);
        case 7:
          return ((r = t.pendingProps), qc(e, t), Lc(e, t, r, n), t.child);
        case 8:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (Lc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return dl(e, t, n);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ka(t),
            (a = Aa(a)),
            (r = r(a)),
            (t.flags |= 1),
            Lc(e, t, r, n),
            t.child
          );
        case 14:
          return zc(e, t, t.type, t.pendingProps, n);
        case 15:
          return Bc(e, t, t.type, t.pendingProps, n);
        case 19:
          return ul(e, t, n);
        case 31:
          return Kc(e, t, n);
        case 22:
          return Vc(e, t, n, t.pendingProps);
        case 24:
          return (
            ka(t),
            (r = Aa(Ia)),
            e === null
              ? ((a = Za()),
                a === null &&
                  ((a = nd),
                  (o = La()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                bo(t),
                Ca(t, Ia, a))
              : ((e.lanes & n) !== 0 && (xo(e, t), Oo(t, null, null, n), Do()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache),
                    Ca(t, Ia, r),
                    r !== a.cache && Ea(t, [Ia], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = a),
                    Ca(t, Ia, r))),
            Lc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 30:
          return (
            t.stateNode === null &&
              (t.stateNode = {
                autoName: null,
                paired: null,
                clones: null,
                ref: null,
              }),
            (r = t.pendingProps),
            r.name != null && r.name !== `auto`
              ? (t.flags |= e === null ? 18882560 : 18874368)
              : F && aa(t),
            e !== null && e.memoizedProps.name !== r.name
              ? (t.flags |= 4194816)
              : qc(e, t),
            Lc(e, t, r.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function gl(e) {
      e.flags |= 4;
    }
    function _l(e, t, n, r, i) {
      var a;
      if (
        ((a = !!(e.mode & 32)) &&
          (a =
            n === null
              ? Jm(t, r)
              : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
        a)
      ) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Wd()) e.flags |= 8192;
          else throw ((so = ro), to);
      } else e.flags &= -16777217;
    }
    function vl(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Ym(t)))
        if (Wd()) e.flags |= 8192;
        else throw ((so = ro), to);
    }
    function yl(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag === 22 ? 536870912 : vt()), (e.lanes |= t), (pd |= t)));
    }
    function bl(e, t) {
      if (!F)
        switch (e.tailMode) {
          case `visible`:
            break;
          case `collapsed`:
            for (var n = e.tail, r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
            break;
          default:
            for (t = e.tail, n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
        }
    }
    function V(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 1206910976),
            (r |= i.flags & 1206910976),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function xl(e, t, n) {
      var r = t.pendingProps;
      switch ((oa(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (V(t), null);
        case 1:
          return (V(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            wa(Ia),
            Pe(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (ga(t)
                ? gl(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), va())),
            V(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (gl(t),
                o === null ? (V(t), _l(t, a, null, r, n)) : (V(t), vl(t, o)))
              : o
                ? o === e.memoizedState
                  ? (V(t), (t.flags &= -16777217))
                  : (gl(t), V(t), vl(t, o))
                : ((e = e.memoizedProps),
                  e !== r && gl(t),
                  V(t),
                  _l(t, a, e, r, n)),
            null
          );
        case 27:
          if (
            (Ie(t),
            (n = je.current),
            (a = t.type),
            e !== null && t.stateNode != null)
          )
            e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            ((e = ke.current),
              ga(t) ? ma(t, e) : ((e = hm(a, r, n)), (t.stateNode = e), gl(t)));
          }
          return (V(t), (t.subtreeFlags &= -33554433), null);
        case 5:
          if ((Ie(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && gl(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (V(t), (t.subtreeFlags &= -33554433), null);
            }
            if (((o = ke.current), ga(t))) ma(t, o);
            else {
              var s = lp(je.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(
                    `http://www.w3.org/1998/Math/MathML`,
                    a,
                  );
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(
                        `http://www.w3.org/1998/Math/MathML`,
                        a,
                      );
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size));
                      break;
                    default:
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[j] = t), (o[At] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((np(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && gl(t);
            }
          }
          return (
            V(t),
            (t.subtreeFlags &= -33554433),
            _l(
              t,
              t.type,
              e === null ? null : e.memoizedProps,
              t.pendingProps,
              n,
            ),
            null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && gl(t);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((e = je.current), ga(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (r = null),
                (a = ca),
                a !== null)
              )
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[j] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  ep(e.nodeValue, n)
                )),
                e || pa(t, !0));
            } else
              ((e = lp(e).createTextNode(r)), (e[j] = t), (t.stateNode = e));
          }
          return (V(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = ga(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (
                  ((e = t.memoizedState),
                  (e = e === null ? null : e.dehydrated),
                  !e)
                )
                  throw Error(i(557));
                e[j] = t;
              } else
                (_a(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (V(t), (e = !1));
            } else
              ((n = va()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (Vo(t), t) : (Vo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (V(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = ga(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (
                  ((a = t.memoizedState),
                  (a = a === null ? null : a.dehydrated),
                  !a)
                )
                  throw Error(i(317));
                a[j] = t;
              } else
                (_a(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (V(t), (a = !1));
            } else
              ((a = va()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (Vo(t), t) : (Vo(t), null);
          }
          return (
            Vo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                yl(t, t.updateQueue),
                V(t),
                null)
          );
        case 4:
          return (
            Pe(),
            e === null && Wf(t.stateNode.containerInfo),
            (t.flags |= 67108864),
            V(t),
            null
          );
        case 10:
          return (wa(t.type), V(t), null);
        case 19:
          if ((Wo(t), (r = t.memoizedState), r === null)) return (V(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null))
            if (a) bl(r, !1);
            else {
              if (cd !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = Go(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        bl(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        yl(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (Bi(n, e), (n = n.sibling));
                    return (
                      Uo(t, (Ho.current & 1) | 2),
                      F && ra(t, r.treeForkCount),
                      t.child
                    );
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                Ye() > yd &&
                ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = Go(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  yl(t, e),
                  bl(r, !0),
                  r.tail === null &&
                    r.tailMode !== `collapsed` &&
                    r.tailMode !== `visible` &&
                    !o.alternate &&
                    !F)
                )
                  return (V(t), null);
              } else
                2 * Ye() - r.renderingStartTime > yd &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), bl(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last),
                e === null ? (t.child = o) : (e.sibling = o),
                (r.last = o));
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null;) {
                if (n.alternate !== null) {
                  n = !1;
                  break a;
                }
                n = n.sibling;
              }
              n = !0;
            }
            return (
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = Ye()),
              (e.sibling = null),
              (o = Ho.current),
              (o = a ? (o & 1) | 2 : o & 1),
              r.tailMode === `visible` || r.tailMode === `collapsed` || !n || F
                ? Uo(t, o)
                : ((n = o), k(I, t), k(Ho, n), Io === null && (Io = t)),
              F && ra(t, r.treeForkCount),
              e
            );
          }
          return (V(t), null);
        case 22:
        case 23:
          return (
            Vo(t),
            Fo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (V(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : V(t),
            (n = t.updateQueue),
            n !== null && yl(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && Oe(Xa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            wa(Ia),
            V(t),
            null
          );
        case 25:
          return null;
        case 30:
          return ((t.flags |= 33554432), V(t), null);
      }
      throw Error(i(156, t.tag));
    }
    function Sl(e, t) {
      switch ((oa(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            wa(Ia),
            Pe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (Ie(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((Vo(t), t.alternate === null)) throw Error(i(340));
            _a();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 13:
          if (
            (Vo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            _a();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (
            Wo(t),
            (e = t.flags),
            e & 65536
              ? ((t.flags = (e & -65537) | 128),
                (e = t.memoizedState),
                e !== null && ((e.rendering = null), (e.tail = null)),
                (t.flags |= 4),
                t)
              : null
          );
        case 4:
          return (Pe(), null);
        case 10:
          return (wa(t.type), null);
        case 22:
        case 23:
          return (
            Vo(t),
            Fo(),
            e !== null && Oe(Xa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (wa(Ia), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Cl(e, t) {
      switch ((oa(t), t.tag)) {
        case 3:
          (wa(Ia), Pe());
          break;
        case 26:
        case 27:
        case 5:
          Ie(t);
          break;
        case 4:
          Pe();
          break;
        case 31:
          t.memoizedState !== null && Vo(t);
          break;
        case 13:
          Vo(t);
          break;
        case 19:
          Wo(t);
          break;
        case 10:
          wa(t.type);
          break;
        case 22:
        case 23:
          (Vo(t), Fo(), e !== null && Oe(Xa));
          break;
        case 24:
          wa(Ia);
      }
    }
    function wl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Tl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function El(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ao(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function Dl(e, t, n) {
      ((n.props = Tc(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Ol(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = Ci(e.memoizedProps, i);
              ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)),
                (r = i.ref));
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                (h(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function kl(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            Z(e, t, n);
          } finally {
            ((e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            Z(e, t, n);
          }
        else n.current = null;
    }
    function Al(e, t) {
      if (
        (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
        e.alternate === null &&
        t !== null
      )
        for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function jl(e) {
      for (
        var t = e.return;
        t !== null && (Pl(t) && em(e.stateNode, t.stateNode), !Nl(t));
      )
        t = t.return;
    }
    function Ml(e) {
      for (
        var t = e.return;
        t !== null && (Pl(t) && tm(e.stateNode, t.stateNode), !Nl(t));
      )
        t = t.return;
    }
    function Nl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function Pl(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Fl(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Il(e, t, n) {
      try {
        var r = e.stateNode;
        (ip(r, e.type, n, t), (r[At] = t));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Ll(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && Sp(e.type)) ||
        e.tag === 4
      );
    }
    function Rl(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Ll(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (
            (e.tag === 27 && Sp(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function zl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(i, t)
            : ((t =
                n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n),
              t.appendChild(i),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Tn)),
          Al(e, r),
          (M = !0));
      else if (
        i !== 4 &&
        (i === 27 &&
          (Al(e, r), (r = null), Sp(e.type) && ((n = e.stateNode), (t = null))),
        (e = e.child),
        e !== null)
      )
        for (zl(e, t, n, r), e = e.sibling; e !== null;)
          (zl(e, t, n, r), (e = e.sibling));
    }
    function Bl(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6)
        ((i = e.stateNode),
          t ? n.insertBefore(i, t) : n.appendChild(i),
          Al(e, r),
          (M = !0));
      else if (
        i !== 4 &&
        (i === 27 && (Al(e, r), (r = null), Sp(e.type) && (n = e.stateNode)),
        (e = e.child),
        e !== null)
      )
        for (Bl(e, t, n, r), e = e.sibling; e !== null;)
          (Bl(e, t, n, r), (e = e.sibling));
    }
    function Vl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;)
          t.removeAttributeNode(i[0]);
        (np(t, r, n), (t[j] = e), (t[At] = n));
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var Hl = !1,
      Ul = null;
    function Wl(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (Hl = !0);
    }
    var Gl = null;
    function Kl() {
      var e = Gl;
      return ((Gl = null), e);
    }
    var ql = 0;
    function Jl(e, t, n, r, i) {
      return ((ql = 0), Yl(e.child, t, n, r, i));
    }
    function Yl(e, t, n, r, i) {
      for (var a = !1; e !== null;) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            (r.push(s), s.view && (a = !0));
          } else a || (Op(o).view && (a = !0));
          ((Hl = !0), Tp(o, ql === 0 ? t : t + `_` + ql, n), ql++);
        } else
          (e.tag !== 22 || e.memoizedState === null) &&
            ((e.tag === 30 && i) || (Yl(e.child, t, n, r, i) && (a = !0)));
        e = e.sibling;
      }
      return a;
    }
    function Xl(e, t) {
      for (; e !== null;)
        (e.tag === 5
          ? Ep(e.stateNode, e.memoizedProps)
          : (e.tag !== 22 || e.memoizedState === null) &&
            ((e.tag === 30 && t) || Xl(e.child, t)),
          (e = e.sibling));
    }
    function Zl(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (
            (e.tag !== 22 || e.memoizedState === null) &&
            (Zl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
          ) {
            var t = e.memoizedProps;
            if (t.name == null || t.name === `auto`) throw Error(i(544));
            var n = t.name;
            ((t = Ti(t.default, t.share)),
              t !== `none` && (Jl(e, n, t, null, !1) || Xl(e.child, !1)));
          }
          e = e.sibling;
        }
    }
    function Ql(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = Ci(r, n),
          a = Ti(r.default, n.paired ? r.share : r.enter);
        a === `none`
          ? Zl(e)
          : Jl(e, i, a, null, !1)
            ? (Zl(e), n.paired || t || Fd(e, r.onEnter))
            : Xl(e.child, !1);
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (Ql(e, t), (e = e.sibling));
      else Zl(e);
    }
    function $l(e) {
      if (Ul !== null && Ul.size !== 0) {
        var t = Ul;
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var n = e.memoizedProps,
                  r = n.name;
                if (r != null && r !== `auto`) {
                  var i = t.get(r);
                  if (i !== void 0) {
                    var a = Ti(n.default, n.share);
                    if (
                      (a !== `none` &&
                        (Jl(e, r, a, null, !1)
                          ? ((a = e.stateNode),
                            (i.paired = a),
                            (a.paired = i),
                            Fd(e, n.onShare))
                          : Xl(e.child, !1)),
                      t.delete(r),
                      t.size === 0)
                    )
                      break;
                  }
                }
              }
              $l(e);
            }
            e = e.sibling;
          }
      }
    }
    function eu(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = Ci(t, e.stateNode),
          r = Ul === null ? void 0 : Ul.get(n),
          i = Ti(t.default, r === void 0 ? t.exit : t.share);
        (i !== `none` &&
          (Jl(e, n, i, null, !1)
            ? r === void 0
              ? Fd(e, t.onExit)
              : ((i = e.stateNode),
                (r.paired = i),
                (i.paired = r),
                Ul.delete(n),
                Fd(e, t.onShare))
            : Xl(e.child, !1)),
          Ul !== null && $l(e));
      } else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (eu(e), (e = e.sibling));
      else Ul !== null && $l(e);
    }
    function tu(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Ci(t, e.stateNode);
          ((t = Ti(t.default, t.update)),
            (e.flags &= -5),
            t !== `none` && Jl(e, n, t, (e.memoizedState = []), !1));
        } else e.subtreeFlags & 33554432 && tu(e);
        e = e.sibling;
      }
    }
    function nu(e) {
      if (e.subtreeFlags & 18874368)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var t = e.stateNode;
              t.paired !== null && ((t.paired = null), Xl(e.child, !1));
            }
            nu(e);
          }
          e = e.sibling;
        }
    }
    function ru(e) {
      if (e.tag === 30) ((e.stateNode.paired = null), Xl(e.child, !1), nu(e));
      else if (e.subtreeFlags & 33554432)
        for (e = e.child; e !== null;) (ru(e), (e = e.sibling));
      else nu(e);
    }
    function iu(e) {
      for (e = e.child; e !== null;)
        (e.tag === 30 ? Xl(e.child, !1) : e.subtreeFlags & 33554432 && iu(e),
          (e = e.sibling));
    }
    function au(e, t, n, r, i, a, o) {
      for (var s = !1; t !== null;) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && ql < a.length) {
            var l = a[ql],
              u = Op(c);
            (l.view || u.view) && (s = !0);
            var d;
            if ((d = !(e.flags & 4)))
              if (u.clip) d = !0;
              else {
                d = l.rect;
                var f = u.rect;
                d =
                  d.y !== f.y ||
                  d.x !== f.x ||
                  d.height !== f.height ||
                  d.width !== f.width;
              }
            (d && (e.flags |= 4),
              u.abs
                ? (u = !l.abs)
                : ((l = l.rect),
                  (u = u.rect),
                  (u = l.height !== u.height || l.width !== u.width)),
              u && (e.flags |= 32));
          } else e.flags |= 32;
          (e.flags & 4 && Tp(c, ql === 0 ? n : n + `_` + ql, i),
            (s && e.flags & 4) ||
              (Gl === null && (Gl = []),
              Gl.push(c, ql === 0 ? r : r + `_` + ql, t.memoizedProps)),
            ql++);
        } else
          (t.tag !== 22 || t.memoizedState === null) &&
            (t.tag === 30 && o
              ? (e.flags |= t.flags & 32)
              : au(e, t.child, n, r, i, a, o) && (s = !0));
        t = t.sibling;
      }
      return s;
    }
    function ou(e, t) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = Ci(n, r),
            a = Ti(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else ((o = e.memoizedState), (e.memoizedState = null));
          r = e;
          var s = e.child;
          ((ql = 0),
            (i = au(r, s, i, i, a, o, !1)),
            e.flags & 4 && i && (t || Fd(e, n.onUpdate)));
        } else e.subtreeFlags & 33554432 && ou(e, t);
        e = e.sibling;
      }
    }
    var su = !1,
      H = !1,
      cu = !1,
      lu = !1,
      uu = typeof WeakSet == `function` ? WeakSet : Set,
      U = null,
      du = !1,
      fu = !1,
      pu = !1,
      mu = !1;
    function hu(e, t, n) {
      if (((e = e.containerInfo), (sp = gh), (e = $r(e)), ei(e))) {
        if (`selectionStart` in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var i = r.getSelection && r.getSelection();
            if (i && i.rangeCount !== 0) {
              r = i.anchorNode;
              var a = i.anchorOffset,
                o = i.focusNode;
              i = i.focusOffset;
              try {
                (r.nodeType, o.nodeType);
              } catch {
                r = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === r && ++u === a && (c = s),
                    p === o && ++d === i && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              r = c === -1 || l === -1 ? null : { start: c, end: l };
            } else r = null;
          }
        r ||= { start: 0, end: 0 };
      } else r = null;
      for (
        cp = { focusedElem: e, selectionRange: r },
          gh = !1,
          n = (n & 335544064) === n,
          U = t,
          t = n ? 9270 : 1024;
        U !== null;
      ) {
        if (((e = U), n && ((r = e.deletions), r !== null)))
          for (a = 0; a < r.length; a++) n && eu(r[a]);
        if (e.alternate === null && e.flags & 2) (n && Wl(e), gu(n));
        else {
          if (e.tag === 22) {
            if (((r = e.alternate), e.memoizedState !== null)) {
              (r !== null && r.memoizedState === null && n && eu(r), gu(n));
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              (n && Wl(e), gu(n));
              continue;
            }
          }
          ((r = e.child),
            (e.subtreeFlags & t) !== 0 && r !== null
              ? ((r.return = e), (U = r))
              : (n && tu(e), gu(n)));
        }
      }
      Ul = null;
    }
    function gu(e) {
      for (; U !== null;) {
        var t = U,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
              var o = t.stateNode;
              try {
                var s = Tc(t.type, a);
                ((n = o.getSnapshotBeforeUpdate(s, r)),
                  (o.__reactInternalSnapshotBeforeUpdate = n));
              } catch (e) {
                Z(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9))
                nm(r);
              else if (n === 1)
                switch (r.nodeName) {
                  case `HEAD`:
                  case `HTML`:
                  case `BODY`:
                    nm(r);
                    break;
                  default:
                    r.textContent = ``;
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n &&
              r !== null &&
              ((n = Ci(r.memoizedProps, r.stateNode)),
              (a = t.memoizedProps),
              (a = Ti(a.default, a.update)),
              a !== `none` && Jl(r, n, a, (r.memoizedState = []), !0));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (U = r));
          break;
        }
        U = t.return;
      }
    }
    function _u(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lu(e, n), r & 4 && wl(5, n));
          break;
        case 1:
          if ((Lu(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                Z(n, n.return, e);
              }
            else {
              var i = Tc(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  i,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          (r & 64 && El(n), r & 512 && Ol(n, n.return));
          break;
        case 3:
          if ((Lu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ao(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Vl(n);
        case 26:
        case 5:
          (Lu(e, n), t === null && r & 4 && Fl(n), r & 512 && Ol(n, n.return));
          break;
        case 12:
          Lu(e, n);
          break;
        case 31:
          (Lu(e, n), r & 4 && Eu(e, n));
          break;
        case 13:
          (Lu(e, n),
            r & 4 && Du(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((n = _f.bind(null, n)), cm(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || su), !r)) {
            var a = (t !== null && t.memoizedState !== null) || H;
            ((t = su),
              (i = H),
              (su = r),
              (H = a) && !i
                ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), zu(e, n, r))
                : Lu(e, n),
              (su = t),
              (H = i));
          }
          break;
        case 30:
          (Lu(e, n), r & 512 && Ol(n, n.return));
          break;
        case 7:
          r & 512 && Ol(n, n.return);
        default:
          Lu(e, n);
      }
    }
    function vu(e, t) {
      for (e = e.child; e !== null;) (yu(e, t), (e = e.sibling));
    }
    function yu(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              typeof r.setProperty == `function`
                ? r.setProperty(`display`, `none`, `important`)
                : (r.display = `none`);
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display =
                o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          bu(e, t);
          break;
        case 6:
          try {
            ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (M = !0));
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            t ? wp(s, !0) : wp(e.stateNode, !1);
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && vu(e, t);
          break;
        default:
          vu(e, t);
      }
    }
    function bu(e, t) {
      if (e.subtreeFlags & 67108864)
        for (e = e.child; e !== null;) {
          a: {
            var n = e,
              r = t;
            switch (n.tag) {
              case 4:
                yu(n, r);
                break a;
              case 22:
                n.memoizedState === null && bu(n, r);
                break a;
              default:
                bu(n, r);
            }
          }
          e = e.sibling;
        }
    }
    function xu(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), xu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && Rt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var Su = null,
      Cu = !1;
    function wu(e, t, n) {
      for (n = n.child; n !== null;) (Tu(e, t, n), (n = n.sibling));
    }
    function Tu(e, t, n) {
      if (at && typeof at.onCommitFiberUnmount == `function`)
        try {
          at.onCommitFiberUnmount(it, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (H || kl(n, t),
            wu(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode &&
                !H &&
                ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          (H || kl(n, t), Ml(n));
          var r = Su,
            i = Cu;
          (Sp(n.type) && ((Su = n.stateNode), (Cu = !1)),
            wu(e, t, n),
            gm(n.stateNode, n.type, n.memoizedProps),
            (Su = r),
            (Cu = i));
          break;
        case 5:
          (H || kl(n, t), Ml(n));
        case 6:
          if (
            (n.tag === 6 && Ml(n),
            (r = Su),
            (i = Cu),
            (Su = null),
            wu(e, t, n),
            (Su = r),
            (Cu = i),
            Su !== null)
          )
            if (Cu)
              try {
                ((Su.nodeType === 9
                  ? Su.body
                  : Su.nodeName === `HTML`
                    ? Su.ownerDocument.body
                    : Su
                ).removeChild(n.stateNode),
                  (M = !0));
              } catch (e) {
                Z(n, t, e);
              }
            else
              try {
                (Su.removeChild(n.stateNode), (M = !0));
              } catch (e) {
                Z(n, t, e);
              }
          break;
        case 18:
          Su !== null &&
            (Cu
              ? ((e = Su),
                Cp(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Hh(e))
              : Cp(Su, n.stateNode));
          break;
        case 4:
          ((r = Su),
            (i = Cu),
            (Su = n.stateNode.containerInfo),
            (Cu = !0),
            wu(e, t, n),
            (Su = r),
            (Cu = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Tl(2, n, t), H || Tl(4, n, t), wu(e, t, n));
          break;
        case 1:
          (H ||
            (kl(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Dl(n, t, r)),
            wu(e, t, n));
          break;
        case 21:
          wu(e, t, n);
          break;
        case 22:
          ((H = (r = H) || n.memoizedState !== null), wu(e, t, n), (H = r));
          break;
        case 30:
          (kl(n, t), wu(e, t, n));
          break;
        case 7:
          (H || kl(n, t), wu(e, t, n));
          break;
        default:
          wu(e, t, n);
      }
    }
    function Eu(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function Du(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
    }
    function Ou(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new uu()), t);
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new uu()),
            t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function ku(e, t) {
      var n = Ou(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = vf.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Au(e, t, n) {
      var r = t.deletions;
      if (r !== null)
        for (var a = 0; a < r.length; a++) {
          var o = r[a],
            s = e,
            c = t,
            l = c;
          a: for (; l !== null;) {
            switch (l.tag) {
              case 27:
                if (Sp(l.type)) {
                  ((Su = l.stateNode), (Cu = !1));
                  break a;
                }
                break;
              case 5:
                ((Su = l.stateNode), (Cu = !1));
                break a;
              case 3:
              case 4:
                ((Su = l.stateNode.containerInfo), (Cu = !0));
                break a;
            }
            l = l.return;
          }
          if (Su === null) throw Error(i(160));
          (Tu(s, c, o),
            (Su = null),
            (Cu = !1),
            (s = o.alternate),
            s !== null && (s.return = null),
            (o.return = null));
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null;) (Mu(t, e, n), (t = t.sibling));
    }
    var ju = null;
    function Mu(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            a & 4 &&
            ((r = e.updateQueue),
            (r = r === null ? null : r.events),
            r !== null)
          )
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.ref.impl = s.nextImpl;
            }
          (Au(t, e, n),
            Nu(e),
            a & 4 && (Tl(3, e, e.return), wl(3, e), Tl(5, e, e.return)));
          break;
        case 1:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            a & 64 &&
              su &&
              ((e = e.updateQueue),
              e !== null &&
                ((t = e.callbacks),
                t !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))));
          break;
        case 26:
          if (
            ((o = ju),
            Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            a & 4)
          )
            if (
              ((a = r === null ? null : r.memoizedState),
              (n = e.memoizedState),
              r === null)
            )
              if (n === null)
                if (e.stateNode === null)
                  if (su)
                    e.stateNode = fp(
                      e.type,
                      e.memoizedProps,
                      t.containerInfo,
                      e,
                    );
                  else {
                    a: {
                      ((t = e.type),
                        (n = e.memoizedProps),
                        (a = o.ownerDocument || o));
                      b: switch (t) {
                        case `title`:
                          ((r = a.getElementsByTagName(`title`)[0]),
                            (!r ||
                              r[It] ||
                              r[j] ||
                              r.namespaceURI === `http://www.w3.org/2000/svg` ||
                              r.hasAttribute(`itemprop`)) &&
                              ((r = a.createElement(t)),
                              a.head.insertBefore(
                                r,
                                a.querySelector(`head > title`),
                              )),
                            np(r, t, n),
                            (r[j] = e),
                            Ut(r),
                            (t = r));
                          break a;
                        case `link`:
                          if (
                            (o = Gm(`link`, `href`, a).get(t + (n.href || ``)))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`href`) ===
                                  (n.href == null || n.href === ``
                                    ? null
                                    : n.href) &&
                                  r.getAttribute(`rel`) ===
                                    (n.rel == null ? null : n.rel) &&
                                  r.getAttribute(`title`) ===
                                    (n.title == null ? null : n.title) &&
                                  r.getAttribute(`crossorigin`) ===
                                    (n.crossOrigin == null
                                      ? null
                                      : n.crossOrigin))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        case `meta`:
                          if (
                            (o = Gm(`meta`, `content`, a).get(
                              t + (n.content || ``),
                            ))
                          ) {
                            for (s = 0; s < o.length; s++)
                              if (
                                ((r = o[s]),
                                r.getAttribute(`content`) ===
                                  (n.content == null ? null : `` + n.content) &&
                                  r.getAttribute(`name`) ===
                                    (n.name == null ? null : n.name) &&
                                  r.getAttribute(`property`) ===
                                    (n.property == null ? null : n.property) &&
                                  r.getAttribute(`http-equiv`) ===
                                    (n.httpEquiv == null
                                      ? null
                                      : n.httpEquiv) &&
                                  r.getAttribute(`charset`) ===
                                    (n.charSet == null ? null : n.charSet))
                              ) {
                                o.splice(s, 1);
                                break b;
                              }
                          }
                          ((r = a.createElement(t)),
                            np(r, t, n),
                            a.head.appendChild(r));
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      ((r[j] = e), Ut(r), (t = r));
                    }
                    e.stateNode = t;
                  }
                else su || Km(o, e.type, e.stateNode);
              else e.stateNode = Bm(o, n, e.memoizedProps);
            else
              a === n
                ? n === null &&
                  e.stateNode !== null &&
                  Il(e, e.memoizedProps, r.memoizedProps)
                : (a === null
                    ? ((t = r.stateNode),
                      t === null || H || t.parentNode.removeChild(t))
                    : a.count--,
                  n === null
                    ? su || Km(o, e.type, e.stateNode)
                    : Bm(o, n, e.memoizedProps));
          break;
        case 27:
          (Au(t, e, n),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            r !== null && a & 4 && Il(e, e.memoizedProps, r.memoizedProps));
          break;
        case 5:
          if (
            ((o = cu),
            (cu = !1),
            Au(t, e, n),
            (cu = o),
            Nu(e),
            a & 512 && (H || r === null || kl(r, r.return)),
            e.flags & 32)
          ) {
            t = e.stateNode;
            try {
              (_n(t, ``), (M = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          (a & 4 &&
            e.stateNode != null &&
            ((t = e.memoizedProps), Il(e, t, r === null ? t : r.memoizedProps)),
            a & 1024 && (lu = !0));
          break;
        case 6:
          if ((Au(t, e, n), Nu(e), a & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((t = e.memoizedProps), (n = e.stateNode));
            try {
              ((n.nodeValue = t), (M = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((M = !1),
            (Wm = null),
            (o = ju),
            (ju = bm(t.containerInfo)),
            Au(t, e, n),
            (ju = o),
            Nu(e),
            a & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              Hh(t.containerInfo);
            } catch (t) {
              Z(e, e.return, t);
            }
          (lu && ((lu = !1), Pu(e)), (M = !1));
          break;
        case 4:
          ((a = cu),
            (cu = su),
            (r = $t()),
            (o = ju),
            (ju = bm(e.stateNode.containerInfo)),
            Au(t, e, n),
            Nu(e),
            (ju = o),
            M && fu && (pu = !0),
            (M = r),
            (cu = a));
          break;
        case 12:
          (Au(t, e, n), Nu(e));
          break;
        case 31:
          (Au(t, e, n),
            Nu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 13:
          (Au(t, e, n),
            Nu(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (r !== null && r.memoizedState !== null) &&
              (_d = Ye()),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 22:
          ((o = e.memoizedState !== null),
            (s = r !== null && r.memoizedState !== null));
          var c = su,
            l = H,
            u = cu;
          ((su = c || o),
            (cu = u || o),
            (H = l || s),
            Au(t, e, n),
            (H = l),
            (cu = u),
            (su = c),
            Nu(e),
            a & 8192 &&
              ((t = e.stateNode),
              (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
              !o ||
                r === null ||
                s ||
                su ||
                H ||
                ((t = s || H),
                (n = su),
                (r = H),
                (su = o || su),
                (H = t),
                Ru(e, 2),
                (su = n),
                (H = r)),
              (!o && cu) || vu(e, o)),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null &&
                ((n = t.retryQueue),
                n !== null && ((t.retryQueue = null), ku(e, n)))));
          break;
        case 19:
          (Au(t, e, n),
            Nu(e),
            a & 4 &&
              ((t = e.updateQueue),
              t !== null && ((e.updateQueue = null), ku(e, t))));
          break;
        case 30:
          (a & 512 && (H || r === null || kl(r, r.return)),
            (a = $t()),
            (o = fu),
            (s = (n & 335544064) === n),
            (c = e.memoizedProps),
            (fu = s && Ti(c.default, c.update) !== `none`),
            Au(t, e, n),
            Nu(e),
            s && r !== null && M && (e.flags |= 4),
            (fu = o),
            (M = a));
          break;
        case 21:
          break;
        case 7:
          (a & 512 && (H || r === null || kl(r, r.return)),
            r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
        default:
          (Au(t, e, n), Nu(e));
      }
    }
    function Nu(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Ll(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null;) {
            if (Pl(a)) {
              var o = a.stateNode;
              r === null ? (r = [o]) : r.push(o);
            }
            if (Nl(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              Bl(e, Rl(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              (n.flags & 32 && (_n(l, ``), (n.flags &= -33)),
                Bl(e, Rl(e), l, s));
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              zl(e, Rl(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Pu(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Pu(t),
            t.tag === 5 &&
              t.flags & 1024 &&
              ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
            (e = e.sibling));
        }
    }
    function Fu(e, t) {
      if (t.subtreeFlags & 9270)
        for (t = t.child; t !== null;) (Iu(t, e), (t = t.sibling));
      else ou(t, !1);
    }
    function Iu(e, t) {
      var n = e.alternate;
      if (n === null) Ql(e, !1);
      else
        switch (e.tag) {
          case 3:
            if (((mu = du = !1), Kl(), Fu(t, e), !du && !pu)) {
              if (((e = Gl), e !== null))
                for (var r = 0; r < e.length; r += 3) {
                  n = e[r];
                  var i = e[r + 1];
                  (Ep(n, e[r + 2]),
                    (n = n.ownerDocument.documentElement),
                    n !== null &&
                      n.animate(
                        { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                        {
                          duration: 0,
                          fill: `forwards`,
                          pseudoElement: `::view-transition-group(` + i + `)`,
                        },
                      ));
                }
              ((e = t.containerInfo),
                (e =
                  e.nodeType === 9
                    ? e.documentElement
                    : e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `` &&
                  ((e.style.viewTransitionName = `none`),
                  e.animate(
                    { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition-group(root)`,
                    },
                  ),
                  e.animate(
                    { width: [0, 0], height: [0, 0] },
                    {
                      duration: 0,
                      fill: `forwards`,
                      pseudoElement: `::view-transition`,
                    },
                  )),
                (mu = !0));
            }
            Gl = null;
            break;
          case 5:
            Fu(t, e);
            break;
          case 4:
            ((r = du), (du = !1), Fu(t, e), du && (pu = !0), (du = r));
            break;
          case 22:
            e.memoizedState === null &&
              (n.memoizedState === null ? Fu(t, e) : Ql(e, !1));
            break;
          case 30:
            ((r = du), (i = Kl()), (du = !1), Fu(t, e), du && (e.flags |= 4));
            var a = e.memoizedProps,
              o = e.stateNode;
            ((t = Ci(a, o)), (o = Ci(n.memoizedProps, o)));
            var s = Ti(a.default, a.update);
            (s === `none`
              ? (t = !1)
              : ((a = n.memoizedState),
                (n.memoizedState = null),
                (n = e.child),
                (ql = 0),
                (t = au(e, n, t, o, s, a, !0)),
                ql !== (a === null ? 0 : a.length) && (e.flags |= 32)),
              e.flags & 4 && t
                ? (Fd(e, e.memoizedProps.onUpdate), (Gl = i))
                : i !== null && (i.push.apply(i, Gl), (Gl = i)),
              (du = e.flags & 32 ? !0 : r));
            break;
          default:
            Fu(t, e);
        }
    }
    function Lu(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (_u(e, t.alternate, t), (t = t.sibling));
    }
    function Ru(e, t) {
      for (e = e.child; e !== null;) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Tl(4, n, n.return), Ru(n, r));
            break;
          case 1:
            kl(n, n.return);
            var i = n.stateNode;
            (typeof i.componentWillUnmount == `function` && Dl(n, n.return, i),
              Ru(n, r));
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            (kl(n, n.return), (n.tag !== 5 && n.tag !== 27) || Ml(n), Ru(n, r));
            break;
          case 6:
            Ml(n);
            break;
          case 26:
            (kl(n, n.return),
              (i = n.stateNode),
              n.memoizedState !== null ||
                i === null ||
                H ||
                i.parentNode.removeChild(i),
              Ru(n, r));
            break;
          case 22:
            n.memoizedState === null && Ru(n, r);
            break;
          case 30:
            (kl(n, n.return), Ru(n, r));
            break;
          case 7:
            kl(n, n.return);
          default:
            Ru(n, r);
        }
        e = e.sibling;
      }
    }
    function zu(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (zu(i, a, n), wl(4, a));
            break;
          case 1:
            if (
              (zu(i, a, n),
              (r = a),
              (i = r.stateNode),
              typeof i.componentDidMount == `function`)
            )
              try {
                i.componentDidMount();
              } catch (e) {
                Z(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null)
                  for (
                    i.shared.hiddenCallbacks = null, i = 0;
                    i < l.length;
                    i++
                  )
                    ko(l[i], c);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            (s && o & 64 && El(a), Ol(a, a.return));
            break;
          case 27:
            n & 2 && Vl(a);
          case 5:
            ((a.tag !== 5 && a.tag !== 27) || jl(a),
              zu(i, a, n),
              s && r === null && o & 4 && Fl(a),
              Ol(a, a.return));
            break;
          case 6:
            jl(a);
            break;
          case 26:
            ((c = a.stateNode),
              a.memoizedState !== null ||
                c === null ||
                su ||
                Km(bm(c.ownerDocument), a.type, c),
              zu(i, a, n),
              s && r === null && o & 4 && Fl(a),
              Ol(a, a.return));
            break;
          case 12:
            zu(i, a, n);
            break;
          case 31:
            (zu(i, a, n), s && o & 4 && Eu(i, a));
            break;
          case 13:
            (zu(i, a, n), s && o & 4 && Du(i, a));
            break;
          case 22:
            (a.memoizedState === null && zu(i, a, n), Ol(a, a.return));
            break;
          case 30:
            (zu(i, a, n), Ol(a, a.return));
            break;
          case 7:
            Ol(a, a.return);
          default:
            zu(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Bu(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && Ra(n)));
    }
    function Vu(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && Ra(e)));
    }
    function Hu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256))
        for (t = t.child; t !== null;) (Uu(e, t, n, r), (t = t.sibling));
      else i && iu(t);
    }
    function Uu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i &&
        t.alternate === null &&
        t.return !== null &&
        t.return.alternate !== null &&
        ru(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Hu(e, t, n, r), a & 2048 && wl(9, t));
          break;
        case 1:
          Hu(e, t, n, r);
          break;
        case 3:
          (Hu(e, t, n, r),
            i &&
              mu &&
              ((e = e.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === `HTML`
                    ? e.ownerDocument.body
                    : e),
              e.style.viewTransitionName === `root` &&
                (e.style.viewTransitionName = ``),
              (e = e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === `none` &&
                (e.style.viewTransitionName = ``)),
            a & 2048 &&
              ((a = null),
              t.alternate !== null && (a = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== a && (t.refCount++, a != null && Ra(a))));
          break;
        case 12:
          if (a & 2048) {
            (Hu(e, t, n, r), (a = t.stateNode));
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` &&
                c(
                  s,
                  t.alternate === null ? `mount` : `update`,
                  a.passiveEffectDuration,
                  -0,
                );
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Hu(e, t, n, r);
          break;
        case 31:
          Hu(e, t, n, r);
          break;
        case 13:
          Hu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((o = t.stateNode),
            (s = t.alternate),
            t.memoizedState === null
              ? (i && s !== null && s.memoizedState !== null && ru(t),
                o._visibility & 2
                  ? Hu(e, t, n, r)
                  : ((o._visibility |= 2),
                    Wu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
              : (i && s !== null && s.memoizedState === null && ru(s),
                o._visibility & 2 ? Hu(e, t, n, r) : Gu(e, t)),
            a & 2048 && Bu(s, t));
          break;
        case 24:
          (Hu(e, t, n, r), a & 2048 && Vu(t.alternate, t));
          break;
        case 30:
          (i &&
            ((a = t.alternate),
            a !== null && (Xl(a.child, !0), Xl(t.child, !0))),
            Hu(e, t, n, r));
          break;
        default:
          Hu(e, t, n, r);
      }
    }
    function Wu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Wu(a, o, s, c, i), wl(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Wu(a, o, s, c, i))
              : u._visibility & 2
                ? Wu(a, o, s, c, i)
                : Gu(a, o),
              i && l & 2048 && Bu(o.alternate, o));
            break;
          case 24:
            (Wu(a, o, s, c, i), i && l & 2048 && Vu(o.alternate, o));
            break;
          default:
            Wu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Gu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Gu(n, r), i & 2048 && Bu(r.alternate, r));
              break;
            case 24:
              (Gu(n, r), i & 2048 && Vu(r.alternate, r));
              break;
            default:
              Gu(n, r);
          }
          t = t.sibling;
        }
    }
    var Ku = 8192;
    function qu(e, t, n) {
      if (e.subtreeFlags & Ku)
        for (e = e.child; e !== null;) (Ju(e, t, n), (e = e.sibling));
    }
    function Ju(e, t, n) {
      switch (e.tag) {
        case 26:
          (qu(e, t, n),
            e.flags & Ku &&
              (e.memoizedState === null
                ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                : Qm(n, ju, e.memoizedState, e.memoizedProps)));
          break;
        case 5:
          (qu(e, t, n),
            e.flags & Ku &&
              ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
          break;
        case 3:
        case 4:
          var r = ju;
          ((ju = bm(e.stateNode.containerInfo)), qu(e, t, n), (ju = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Ku), (Ku = 16777216), qu(e, t, n), (Ku = r))
              : qu(e, t, n));
          break;
        case 30:
          if (
            (e.flags & Ku) !== 0 &&
            ((r = e.memoizedProps.name), r != null && r !== `auto`)
          ) {
            var i = e.stateNode;
            ((i.paired = null), Ul === null && (Ul = new Map()), Ul.set(r, i));
          }
          qu(e, t, n);
          break;
        default:
          qu(e, t, n);
      }
    }
    function Yu(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Xu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((U = r), $u(r, e));
          }
        Yu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null;) (Zu(e), (e = e.sibling));
    }
    function Zu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Xu(e), e.flags & 2048 && Tl(9, e, e.return));
          break;
        case 3:
          Xu(e);
          break;
        case 12:
          Xu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Qu(e))
            : Xu(e);
          break;
        default:
          Xu(e);
      }
    }
    function Qu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((U = r), $u(r, e));
          }
        Yu(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Tl(8, t, t.return), Qu(t));
            break;
          case 22:
            ((n = t.stateNode),
              n._visibility & 2 && ((n._visibility &= -3), Qu(t)));
            break;
          default:
            Qu(t);
        }
        e = e.sibling;
      }
    }
    function $u(e, t) {
      for (; U !== null;) {
        var n = U;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Tl(8, n, t);
            break;
          case 23:
          case 22:
            if (
              n.memoizedState !== null &&
              n.memoizedState.cachePool !== null
            ) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            Ra(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (U = r));
        else
          a: for (n = e; U !== null;) {
            r = U;
            var i = r.sibling,
              a = r.return;
            if ((xu(r), r === n)) {
              U = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (U = i));
              break a;
            }
            U = a;
          }
      }
    }
    var ed = {
        getCacheForType: function (e) {
          var t = Aa(Ia),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Aa(Ia).controller.signal;
        },
      },
      td = typeof WeakMap == `function` ? WeakMap : Map,
      W = 0,
      nd = null,
      G = null,
      K = 0,
      q = 0,
      rd = null,
      id = !1,
      ad = !1,
      od = !1,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = 0,
      fd = 0,
      pd = 0,
      md = null,
      hd = null,
      gd = !1,
      _d = 0,
      vd = 0,
      yd = 1 / 0,
      bd = null,
      xd = null,
      Sd = 0,
      Cd = null,
      wd = null,
      Td = 0,
      Ed = 0,
      J = null,
      Dd = null,
      Od = null,
      kd = null,
      Ad = null,
      jd = 0,
      Md = null;
    function Nd() {
      return W & 2 && K !== 0 ? K & -K : D.T === null ? Dt() : Pf();
    }
    function Pd() {
      if (fd === 0)
        if (!(K & 536870912) || F) {
          var e = dt;
          ((dt <<= 1), !(dt & 3932160) && (dt = 262144), (fd = e));
        } else fd = 536870912;
      return ((e = I.current), e !== null && (e.flags |= 32), fd);
    }
    function Fd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        (r === null && (r = n.ref = Pp(Ci(e.memoizedProps, n))),
          kd === null && (kd = []),
          kd.push(t.bind(null, r)));
      }
    }
    function Id(e, t, n) {
      (((e === nd && (q === 2 || q === 9)) || e.cancelPendingCommit !== null) &&
        (Hd(e, 0), zd(e, K, fd, !1)),
        bt(e, n),
        (!(W & 2) || e !== nd) &&
          (e === nd && (!(W & 2) && (ud |= n), cd === 4 && zd(e, K, fd, !1)),
          Ef(e)));
    }
    function Ld(e, t, n) {
      if (W & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || ht(e, t),
        a = r ? Yd(e, t) : qd(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          ad && !r && zd(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !Rd(n))) {
          ((a = qd(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = md;
              var l = c.current.memoizedState.isDehydrated;
              if (
                (l && (Hd(c, s).flags |= 256),
                (s = qd(c, s, !1)),
                s !== 2 && s !== 6)
              ) {
                if (od && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (ud |= o), (a = 4));
                  break a;
                }
                ((o = hd),
                  (hd = a),
                  o !== null &&
                    (hd === null ? (hd = o) : hd.push.apply(hd, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Hd(e, 0), zd(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              zd(r, t, fd, !id);
              break a;
            case 2:
              hd = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = _d + 300 - Ye()), 10 < a)) {
            if ((zd(r, t, fd, !id), mt(r, 0, !0) !== 0)) break a;
            ((Td = t),
              (r.timeoutHandle = gp(
                Y.bind(
                  null,
                  r,
                  n,
                  hd,
                  bd,
                  gd,
                  t,
                  fd,
                  ud,
                  pd,
                  id,
                  o,
                  `Throttled`,
                  -0,
                  0,
                ),
                a,
              )));
            break a;
          }
          Y(r, n, hd, bd, gd, t, fd, ud, pd, id, o, null, -0, 0);
        }
        break;
      } while (1);
      Ef(e);
    }
    function Y(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      if (
        ((d = null),
        (h || m & 8192 || (m & 16785408) == 16785408) &&
          ((d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: Tn,
          }),
          (Ul = null),
          Ju(t, a, d),
          h &&
            ((m = d),
            (h = e.containerInfo),
            (h = (h.nodeType === 9 ? h : h.ownerDocument)
              .__reactViewTransition),
            h != null &&
              (m.count++,
              (m.waitingForViewTransition = !0),
              (m = nh.bind(m)),
              h.finished.then(m, m))),
          (m =
            (a & 62914560) === a
              ? _d - Ye()
              : (a & 4194048) === a
                ? vd - Ye()
                : 0),
          (m = eh(d, m)),
          m !== null))
      ) {
        ((Td = a),
          (e.cancelPendingCommit = m(
            nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
          )),
          zd(e, a, o, !l));
        return;
      }
      nf(e, t, a, n, r, i, o, s, c, l, u, d);
    }
    function Rd(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!qr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function zd(e, t, n, r) {
      ((t = gt(e, t)),
        (t &= ~dd),
        (t &= ~ud),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - A(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && St(e, n, t);
    }
    function Bd() {
      return W & 6 ? !0 : (Df(0, !1), !1);
    }
    function Vd() {
      if (G !== null) {
        if (q === 0) var e = G.return;
        else ((e = G), (Sa = xa = null), ls(e), (uo = null), (fo = 0), (e = G));
        for (; e !== null;) (Cl(e.alternate, e), (e = e.return));
        G = null;
      }
    }
    function Hd(e, t) {
      var n = e.timeoutHandle;
      return (
        n !== -1 && ((e.timeoutHandle = -1), _p(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (Td = 0),
        Vd(),
        (nd = e),
        (G = n = zi(e.current, null)),
        (K = t),
        (q = 0),
        (rd = null),
        (id = !1),
        (ad = ht(e, t)),
        (od = !1),
        (pd = fd = dd = ud = ld = cd = 0),
        (hd = md = null),
        (gd = !1),
        (sd = gt(e, t)),
        Ai(),
        n
      );
    }
    function Ud(e, t) {
      ((L = null),
        (D.H = _c),
        t === eo || t === no
          ? ((t = co()), (q = 3))
          : t === to
            ? ((t = co()), (q = 4))
            : (q =
                t === Fc
                  ? 8
                  : typeof t == `object` && t && typeof t.then == `function`
                    ? 6
                    : 1),
        (rd = t),
        G === null && ((cd = 1), kc(e, qi(t, e.current))));
    }
    function Wd() {
      var e = I.current;
      return e === null
        ? !0
        : (K & 4194048) === K
          ? Io === null
          : (K & 62914560) === K || K & 536870912
            ? e === Io
            : !1;
    }
    function X() {
      var e = D.H;
      return ((D.H = _c), e === null ? _c : e);
    }
    function Gd() {
      var e = D.A;
      return ((D.A = ed), e);
    }
    function Kd() {
      ((cd = 4),
        id || ((K & 4194048) !== K && I.current !== null) || (ad = !0),
        (!(ld & 134217727) && !(ud & 134217727)) ||
          nd === null ||
          zd(nd, K, fd, !1));
    }
    function qd(e, t, n) {
      var r = W;
      W |= 2;
      var i = X(),
        a = Gd();
      ((nd !== e || K !== t) && ((bd = null), Hd(e, t)), (t = !1));
      var o = cd;
      a: do
        try {
          if (q !== 0 && G !== null) {
            var s = G,
              c = rd;
            switch (q) {
              case 8:
                (Vd(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                I.current === null && (t = !0);
                var l = q;
                if (((q = 0), (rd = null), $d(e, s, c, l), n && ad)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = q), (q = 0), (rd = null), $d(e, s, c, l));
            }
          }
          (Jd(), (o = cd));
          break;
        } catch (t) {
          Ud(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Sa = xa = null),
        (W = r),
        (D.H = i),
        (D.A = a),
        G === null && ((nd = null), (K = 0), Ai()),
        o
      );
    }
    function Jd() {
      for (; G !== null;) Zd(G);
    }
    function Yd(e, t) {
      var n = W;
      W |= 2;
      var r = X(),
        a = Gd();
      nd !== e || K !== t
        ? ((bd = null), (yd = Ye() + 500), Hd(e, t))
        : (ad = ht(e, t));
      a: do
        try {
          if (q !== 0 && G !== null) {
            t = G;
            var o = rd;
            b: switch (q) {
              case 1:
                ((q = 0), (rd = null), $d(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (io(o)) {
                  ((q = 0), (rd = null), Qd(t));
                  break;
                }
                ((t = function () {
                  ((q !== 2 && q !== 9) || nd !== e || (q = 7), Ef(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                q = 7;
                break a;
              case 4:
                q = 5;
                break a;
              case 7:
                io(o)
                  ? ((q = 0), (rd = null), Qd(t))
                  : ((q = 0), (rd = null), $d(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (G.tag) {
                  case 26:
                    s = G.memoizedState;
                  case 5:
                  case 27:
                    var c = G;
                    if (s ? Ym(s) : c.stateNode.complete) {
                      ((q = 0), (rd = null));
                      var l = c.sibling;
                      if (l !== null) G = l;
                      else {
                        var u = c.return;
                        u === null ? (G = null) : ((G = u), ef(u));
                      }
                      break b;
                    }
                }
                ((q = 0), (rd = null), $d(e, t, o, 5));
                break;
              case 6:
                ((q = 0), (rd = null), $d(e, t, o, 6));
                break;
              case 8:
                (Vd(), (cd = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Xd();
          break;
        } catch (t) {
          Ud(e, t);
        }
      while (1);
      return (
        (Sa = xa = null),
        (D.H = r),
        (D.A = a),
        (W = n),
        G === null ? ((nd = null), (K = 0), Ai(), cd) : 0
      );
    }
    function Xd() {
      for (; G !== null && !qe();) Zd(G);
    }
    function Zd(e) {
      var t = hl(e.alternate, e, sd);
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (G = t));
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Yc(n, t, t.pendingProps, t.type, void 0, K);
          break;
        case 11:
          t = Yc(n, t, t.pendingProps, t.type.render, t.ref, K);
          break;
        case 5:
          ls(t);
          var r = t;
          r === ca &&
            (F
              ? (ha(r),
                r.tag === 5 && r.stateNode != null && (la = r.stateNode))
              : (ha(r), (F = !0)));
        default:
          (Cl(n, t), (t = G = Bi(t, sd)), (t = hl(n, t, sd)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (G = t));
    }
    function $d(e, t, n, r) {
      ((Sa = xa = null), ls(t), (uo = null), (fo = 0));
      var i = t.return;
      try {
        if (Pc(e, i, t, n, K)) {
          ((cd = 1), kc(e, qi(n, e.current)), (G = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((G = i), t);
        ((cd = 1), kc(e, qi(n, e.current)), (G = null));
        return;
      }
      t.flags & 32768
        ? (F || r === 1
            ? (e = !0)
            : ad || K & 536870912
              ? (e = !1)
              : ((id = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = I.current),
                  r !== null && r.tag === 13 && (r.flags |= 16384))),
          tf(t, e))
        : ef(t);
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, id);
          return;
        }
        e = t.return;
        var n = xl(t.alternate, t, sd);
        if (n !== null) {
          G = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          G = t;
          return;
        }
        G = t = e;
      } while (t !== null);
      cd === 0 && (cd = 5);
    }
    function tf(e, t) {
      do {
        var n = Sl(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (G = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          G = e;
          return;
        }
        G = e = n;
      } while (e !== null);
      ((cd = 6), (G = null));
    }
    function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do df();
      while (Sd !== 0);
      if (W & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        (e === nd && ((G = nd = null), (K = 0)),
          (wd = t),
          (Cd = e),
          (Td = n),
          (J = a),
          (Dd = r),
          rf(e, t, n, s, c, l, f));
      }
    }
    function rf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (
        ((Ed = s),
        (s |= ki),
        xt(e, n, s, r, i, a),
        (kd = null),
        (n & 335544064) === n
          ? ((Ad = Va(e)), (r = 10262))
          : ((Ad = null), (r = 10256)),
        (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            yf($e, function () {
              return (ff(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Hl = !1),
        (r = !!(t.flags & 13878)),
        t.subtreeFlags & 13878 || r)
      ) {
        ((r = D.T), (D.T = null), (i = O.p), (O.p = 2), (a = W), (W |= 4));
        try {
          hu(e, t, n);
        } finally {
          ((W = a), (O.p = i), (D.T = r));
        }
      }
      ((Sd = 1),
        Hl
          ? (Od = Mp(
              o,
              e.containerInfo,
              Ad,
              sf,
              cf,
              of,
              lf,
              ff,
              af,
              null,
              null,
            ))
          : (sf(), cf(), lf()));
    }
    function af(e) {
      if (Sd !== 0) {
        var t = Cd.onRecoverableError;
        t(e, { componentStack: null });
      }
    }
    function of() {
      Sd === 3 && ((Sd = 0), Iu(wd, Cd), (Sd = 4));
    }
    function sf() {
      if (Sd === 1) {
        Sd = 0;
        var e = Cd,
          t = wd,
          n = Td,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          ((r = D.T), (D.T = null));
          var i = O.p;
          O.p = 2;
          var a = W;
          W |= 4;
          try {
            ((fu = pu = !1), Mu(t, e, n), (n = cp));
            var o = $r(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (
              o !== s &&
              s &&
              s.ownerDocument &&
              Qr(s.ownerDocument.documentElement, s)
            ) {
              if (c !== null && ei(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l),
                    (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Zr(s, h),
                      v = Zr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                typeof s.focus == `function` && s.focus(), s = 0;
                s < d.length;
                s++
              ) {
                var b = d[s];
                ((b.element.scrollLeft = b.left),
                  (b.element.scrollTop = b.top));
              }
            }
            ((gh = !!sp), (cp = sp = null));
          } finally {
            ((W = a), (O.p = i), (D.T = r));
          }
        }
        ((e.current = t), (Sd = 2));
      }
    }
    function cf() {
      if (Sd === 2) {
        Sd = 0;
        var e = Cd,
          t = wd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = D.T), (D.T = null));
          var r = O.p;
          O.p = 2;
          var i = W;
          W |= 4;
          try {
            _u(e, t.alternate, t);
          } finally {
            ((W = i), (O.p = r), (D.T = n));
          }
        }
        Sd = 3;
      }
    }
    function lf() {
      if (Sd === 4 || Sd === 3) {
        Sd = 0;
        var e = Od;
        ((Od = null), Je());
        var t = Cd,
          n = wd,
          r = Td,
          i = Dd,
          a = (r & 335544064) === r ? 10262 : 10256;
        if (
          ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
            ? (Sd = 5)
            : ((Sd = 0), (wd = Cd = null), uf(t, t.pendingLanes)),
          (a = t.pendingLanes),
          a === 0 && (xd = null),
          Et(r),
          (n = n.stateNode),
          at && typeof at.onCommitFiberRoot == `function`)
        )
          try {
            at.onCommitFiberRoot(it, n, void 0, (n.current.flags & 128) == 128);
          } catch {}
        if (i !== null) {
          ((n = D.T), (a = O.p), (O.p = 2), (D.T = null));
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, { componentStack: c.stack });
            }
          } finally {
            ((D.T = n), (O.p = a));
          }
        }
        if (
          ((i = kd),
          (o = Ad),
          (Ad = null),
          i !== null && ((kd = null), o === null && (o = []), e !== null))
        )
          for (c = 0; c < i.length; c++)
            ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
        (Td & 3 && df(),
          Ef(t),
          (a = t.pendingLanes),
          r & 261930 && a & 42
            ? t === Md
              ? jd++
              : ((jd = 0), (Md = t))
            : ((jd = 0), (Md = null)),
          Df(0, !1));
      }
    }
    function uf(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ra(t)));
    }
    function df() {
      return (
        Od !== null && (Od.skipTransition(), (Od = null)),
        sf(),
        cf(),
        lf(),
        ff()
      );
    }
    function ff() {
      if (Sd !== 5) return !1;
      var e = Cd,
        t = Ed;
      Ed = 0;
      var n = Et(Td),
        r = D.T,
        a = O.p;
      try {
        ((O.p = 32 > n ? 32 : n), (D.T = null), (n = J), (J = null));
        var o = Cd,
          s = Td;
        if (((Sd = 0), (wd = Cd = null), (Td = 0), W & 6)) throw Error(i(331));
        var c = W;
        if (
          ((W |= 4),
          Zu(o.current),
          Uu(o, o.current, s, n),
          (W = c),
          Df(0, !1),
          at && typeof at.onPostCommitFiberRoot == `function`)
        )
          try {
            at.onPostCommitFiberRoot(it, o);
          } catch {}
        return !0;
      } finally {
        ((O.p = a), (D.T = r), uf(e, t));
      }
    }
    function pf(e, t, n) {
      ((t = qi(n, t)),
        (t = jc(e.stateNode, t, 2)),
        (e = Co(e, t, 2)),
        e !== null && (bt(e, 2), Ef(e)));
    }
    function Z(e, t, n) {
      if (e.tag === 3) pf(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            pf(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (xd === null || !xd.has(r)))
            ) {
              ((e = qi(n, e)),
                (n = Mc(2)),
                (r = Co(t, n, 2)),
                r !== null && (Nc(n, r, t, e), bt(r, 2), Ef(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new td();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) ||
        ((od = !0), i.add(n), (e = hf.bind(null, e, t, n)), t.then(e, e));
    }
    function hf(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        nd === e &&
          (K & n) === n &&
          (cd === 4 || (cd === 3 && (K & 62914560) === K && 300 > Ye() - _d)
            ? W & 2
              ? (dd |= n)
              : Hd(e, 0)
            : (dd |= n),
          pd === K && (pd = 0)),
        Ef(e));
    }
    function gf(e, t) {
      (t === 0 && (t = vt()), (e = Ni(e, t)), e !== null && (bt(e, t), Ef(e)));
    }
    function _f(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), gf(e, n));
    }
    function vf(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), gf(e, n));
    }
    function yf(e, t) {
      return Ge(e, t);
    }
    var bf = null,
      xf = null,
      Sf = !1,
      Cf = !1,
      wf = !1,
      Tf = 0;
    function Ef(e) {
      (e !== xf &&
        e.next === null &&
        (xf === null ? (bf = xf = e) : (xf = xf.next = e)),
        (Cf = !0),
        Sf || ((Sf = !0), Nf()));
    }
    function Df(e, t) {
      if (!wf && Cf) {
        wf = !0;
        do
          for (var n = !1, r = bf; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - A(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), Mf(r, a));
              } else
                ((a = K),
                  (a = mt(
                    r,
                    r === nd ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || ht(r, a) || ((n = !0), Mf(r, a)));
            r = r.next;
          }
        while (n);
        wf = !1;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = !1;
      var e = 0;
      Tf !== 0 && hp() && (e = Tf);
      for (var t = Ye(), n = null, r = bf; r !== null;) {
        var i = r.next,
          a = Af(r, t);
        (a === 0
          ? ((r.next = null),
            n === null ? (bf = i) : (n.next = i),
            i === null && (xf = n))
          : ((n = r), (e !== 0 || a & 3) && (Cf = !0)),
          (r = i));
      }
      ((Sd !== 0 && Sd !== 5) || Df(e, !1), Tf !== 0 && (Tf = 0));
    }
    function Af(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - A(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = _t(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = nd),
        (n = K),
        (n = mt(
          e,
          e === t ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (r = e.callbackNode),
        n === 0 ||
          (e === t && (q === 2 || q === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ke(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(n & 3) || ht(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ke(r), Et(n))) {
          case 2:
          case 8:
            n = Qe;
            break;
          case 32:
            n = $e;
            break;
          case 268435456:
            n = tt;
            break;
          default:
            n = $e;
        }
        return (
          (r = jf.bind(null, e)),
          (n = Ge(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        r !== null && r !== null && Ke(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function jf(e, t) {
      if (Sd !== 0 && Sd !== 5)
        return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (df() && e.callbackNode !== n) return null;
      var r = K;
      return (
        (r = mt(
          e,
          e === nd ? r : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        r === 0
          ? null
          : (Ld(e, r, t),
            Af(e, Ye()),
            e.callbackNode != null && e.callbackNode === n
              ? jf.bind(null, e)
              : null)
      );
    }
    function Mf(e, t) {
      if (df()) return null;
      Ld(e, t, !0);
    }
    function Nf() {
      bp(function () {
        W & 6 ? Ge(Ze, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e = Wa;
        (e === 0 && ((e = ut), (ut <<= 1), !(ut & 261888) && (ut = 256)),
          (Tf = e));
      }
      return Tf;
    }
    function Ff(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : wn(e);
    }
    function If(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Ff((i[At] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[At] || null)
            ? Ff(t.formAction)
            : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new Kn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (Tf !== 0) {
                    var e = new FormData(i, o);
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      null,
                      e,
                    );
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = new FormData(i, o)),
                    rc(
                      n,
                      { pending: !0, data: e, method: i.method, action: a },
                      a,
                      e,
                    ));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var Lf = 0; Lf < bi.length; Lf++) {
      var Rf = bi[Lf];
      xi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    (xi(fi, `onAnimationEnd`),
      xi(pi, `onAnimationIteration`),
      xi(mi, `onAnimationStart`),
      xi(`dblclick`, `onDoubleClick`),
      xi(`focusin`, `onFocus`),
      xi(`focusout`, `onBlur`),
      xi(hi, `onTransitionRun`),
      xi(gi, `onTransitionStart`),
      xi(_i, `onTransitionCancel`),
      xi(vi, `onTransitionEnd`),
      Jt(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Jt(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Jt(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Jt(`onPointerLeave`, [`pointerout`, `pointerover`]),
      qt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      qt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      qt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      qt(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      qt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      qt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var zf =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Bf = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`
          .split(` `)
          .concat(zf),
      );
    function Vf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ei(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                Ei(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function Q(e, t) {
      var n = t[Mt];
      n === void 0 && (n = t[Mt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Gf(t, e, 2, !1), n.add(r));
    }
    function Hf(e, t, n) {
      var r = 0;
      (t && (r |= 4), Gf(n, e, r, t));
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e) {
      if (!e[Uf]) {
        ((e[Uf] = !0),
          Gt.forEach(function (t) {
            t !== `selectionchange` &&
              (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Uf] || ((t[Uf] = !0), Hf(`selectionchange`, !1, t));
      }
    }
    function Gf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !Fn ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Kf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                  return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = zt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      Mn(function () {
        var r = a,
          i = Dn(n),
          s = [];
        a: {
          var c = yi.get(e);
          if (c !== void 0) {
            var l = Kn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Vn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = lr;
                break;
              case `focusin`:
                ((u = `focus`), (l = tr));
                break;
              case `focusout`:
                ((u = `blur`), (l = tr));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = tr;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = $n;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = er;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = fr;
                break;
              case fi:
              case pi:
              case mi:
                l = N;
                break;
              case vi:
                l = pr;
                break;
              case `scroll`:
              case `scrollend`:
                l = Jn;
                break;
              case `wheel`:
                l = mr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = nr;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = ur;
                break;
              case `submit`:
                l = dr;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = hr;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = Nn(m, p)), g != null && d.push(qf(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length &&
              ((c = new l(c, u, null, n, i)),
              s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((l = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              l &&
                n !== En &&
                (u = n.relatedTarget || n.fromElement) &&
                (zt(u) || u[jt]))
            )
              break a;
            (c || l) &&
              ((u =
                i.window === i
                  ? i
                  : (l = i.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? zt(l) : null),
                  l !== null &&
                    ((f = o(l)),
                    (d = l.tag),
                    l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l &&
                ((d = $n),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = ur),
                  (g = `onPointerLeave`),
                  (p = `onPointerEnter`),
                  (m = `pointer`)),
                (f = c == null ? u : Vt(c)),
                (h = l == null ? u : Vt(l)),
                (u = new d(g, m + `leave`, c, n, i)),
                (u.target = f),
                (u.relatedTarget = h),
                (g = null),
                zt(i) === r &&
                  ((d = new d(p, m + `enter`, l, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                (d = c && l ? te(c, l, Yf) : null),
                c !== null && Xf(s, u, c, d, !1),
                l !== null && f !== null && Xf(s, f, l, d, !0)));
          }
          a: {
            if (
              ((c = r ? Vt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var _ = Fr;
            else if (kr(c))
              if (Ir) _ = Gr;
              else {
                _ = Ur;
                var v = Hr;
              }
            else
              ((l = c.nodeName),
                !l ||
                l.toLowerCase() !== `input` ||
                (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && xn(r.elementType) && (_ = Fr)
                  : (_ = Wr));
            if ((_ &&= _(e, r))) {
              Ar(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (((v = r ? Vt(r) : window), e)) {
            case `focusin`:
              (kr(v) || v.contentEditable === `true`) &&
                ((ni = v), (ri = r), (ii = null));
              break;
            case `focusout`:
              ii = ri = ni = null;
              break;
            case `mousedown`:
              ai = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((ai = !1), oi(s, n, i));
              break;
            case `selectionchange`:
              if (ti) break;
            case `keydown`:
            case `keyup`:
              oi(s, n, i);
          }
          var y;
          if (_r)
            b: {
              switch (e) {
                case `compositionstart`:
                  var b = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  b = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  b = `onCompositionUpdate`;
                  break b;
              }
              b = void 0;
            }
          else
            Tr
              ? Cr(e, n) && (b = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (b = `onCompositionStart`);
          (b &&
            (br &&
              n.locale !== `ko` &&
              (Tr || b !== `onCompositionStart`
                ? b === `onCompositionEnd` && Tr && (y = Bn())
                : ((Ln = i),
                  (Rn = `value` in Ln ? Ln.value : Ln.textContent),
                  (Tr = !0))),
            (v = Jf(r, b)),
            0 < v.length &&
              ((b = new rr(b, e, null, n, i)),
              s.push({ event: b, listeners: v }),
              y ? (b.data = y) : ((y = wr(n)), y !== null && (b.data = y)))),
            (y = yr ? Er(e, n) : Dr(e, n)) &&
              ((b = Jf(r, `onBeforeInput`)),
              0 < b.length &&
                ((v = new rr(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: v, listeners: b }),
                (v.data = y))),
            If(s, e, r, n, i));
        }
        Vf(s, t);
      });
    }
    function qf(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Jf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = Nn(e, n)),
            i != null && r.unshift(qf(e, i, a)),
            (i = Nn(e, t)),
            i != null && r.push(qf(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Yf(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = Nn(n, a)), l != null && o.unshift(qf(n, l, c)))
            : i || ((l = Nn(n, a)), l != null && o.push(qf(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Zf = /\r\n?/g,
      Qf = /\u0000|\uFFFD/g;
    function $f(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Zf,
          `
`,
        )
        .replace(Qf, ``);
    }
    function ep(e, t) {
      return ((t = $f(t)), $f(e) === t);
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`)
            t === `body` || (t === `textarea` && r === ``) || _n(e, r);
          else if (typeof r == `number` || typeof r == `bigint`)
            t !== `body` && _n(e, `` + r);
          else return;
          break;
        case `className`:
          tn(e, `class`, r);
          break;
        case `tabIndex`:
          tn(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          tn(e, n, r);
          break;
        case `style`:
          bn(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            tn(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = wn(r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                  $(e, t, `formEncType`, a.formEncType, a, null),
                  $(e, t, `formMethod`, a.formMethod, a, null),
                  $(e, t, `formTarget`, a.formTarget, a, null))
                : ($(e, t, `encType`, a.encType, a, null),
                  $(e, t, `method`, a.method, a, null),
                  $(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = wn(r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = Tn);
          return;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = wn(r)),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r &&
                r != null &&
                typeof r != `function` &&
                typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null &&
          typeof r != `function` &&
          typeof r != `symbol` &&
          !isNaN(r) &&
          1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null ||
          typeof r == `function` ||
          typeof r == `symbol` ||
          isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), en(e, `popover`, r));
          break;
        case `xlinkActuate`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          nn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          nn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          en(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (
            !(2 < n.length) ||
            (n[0] !== `o` && n[0] !== `O`) ||
            (n[1] !== `n` && n[1] !== `N`)
          )
            ((n = Sn.get(n) || n), en(e, n, r));
          else return;
      }
      M = !0;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          bn(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) _n(e, r);
          else if (typeof r == `number` || typeof r == `bigint`) _n(e, `` + r);
          else return;
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = Tn);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Kt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (o = n.slice(2, a ? n.length - 7 : void 0)),
                (t = e[At] || null),
                (t = t == null ? null : t[n]),
                typeof t == `function` && e.removeEventListener(o, t, a),
                typeof r == `function`)
              ) {
                (typeof t != `function` &&
                  t !== null &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(o, r, a));
                break a;
              }
              ((M = !0),
                n in e
                  ? (e[n] = r)
                  : !0 === r
                    ? e.setAttribute(n, ``)
                    : en(e, n, r));
            }
          return;
      }
      M = !0;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (Q(`error`, e), Q(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, o, s, n, null);
                }
            }
          (a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          Q(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, r, d, n, null);
                }
            }
          fn(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (Q(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  $(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && mn(e, !!r, n, !0) : mn(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (Q(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  $(e, t, s, c, n, null);
              }
          gn(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected =
                    r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  $(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (Q(`beforetoggle`, e), Q(`toggle`, e), Q(`cancel`, e), Q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < zf.length; r++) Q(zf[r], e);
          break;
        case `image`:
          (Q(`error`, e), Q(`load`, e));
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (Q(`error`, e), Q(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  $(e, t, u, r, n, null);
              }
          return;
        default:
          if (xn(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n)
        n.hasOwnProperty(c) &&
          ((r = n[c]), r != null && $(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || $(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  (m !== f && (M = !0), (o = m));
                  break;
                case `name`:
                  (m !== f && (M = !0), (a = m));
                  break;
                case `checked`:
                  (m !== f && (M = !0), (u = m));
                  break;
                case `defaultChecked`:
                  (m !== f && (M = !0), (d = m));
                  break;
                case `value`:
                  (m !== f && (M = !0), (s = m));
                  break;
                case `defaultValue`:
                  (m !== f && (M = !0), (c = m));
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && $(e, t, p, m, r, f);
              }
          }
          dn(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || $(e, t, o, null, r, l);
              }
          for (a in r)
            if (
              ((o = r[a]),
              (l = n[a]),
              r.hasOwnProperty(a) && (o != null || l != null))
            )
              switch (a) {
                case `value`:
                  (o !== l && (M = !0), (p = o));
                  break;
                case `defaultValue`:
                  (o !== l && (M = !0), (c = o));
                  break;
                case `multiple`:
                  (o !== l && (M = !0), (s = o));
                default:
                  o !== l && $(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n &&
                (t == null ? mn(e, !!n, n ? [] : ``, !1) : mn(e, !!n, t, !0))
              : mn(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (
              ((a = n[c]),
              n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
            )
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  $(e, t, c, null, r, a);
              }
          for (s in r)
            if (
              ((a = r[s]),
              (o = n[s]),
              r.hasOwnProperty(s) && (a != null || o != null))
            )
              switch (s) {
                case `value`:
                  (a !== o && (M = !0), (p = a));
                  break;
                case `defaultValue`:
                  (a !== o && (M = !0), (m = a));
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && $(e, t, s, a, r, o);
              }
          hn(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (
              ((p = n[h]),
              n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
            )
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  $(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]),
              (m = n[l]),
              r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  (p !== m && (M = !0),
                    (e.selected =
                      p && typeof p != `function` && typeof p != `symbol`));
                  break;
                default:
                  $(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]),
              n.hasOwnProperty(g) &&
                p != null &&
                !r.hasOwnProperty(g) &&
                $(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]),
              (m = n[u]),
              r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  $(e, t, u, p, r, m);
              }
          return;
        default:
          if (xn(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  tp(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  tp(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) &&
            p != null &&
            !r.hasOwnProperty(v) &&
            $(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) ||
            p === m ||
            (p == null && m == null) ||
            $(e, t, f, p, r, m));
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u &&
                ap(d) &&
                ((c = c.responseEnd),
                (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
              break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection &&
        ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return (
        (n = lp(n).createElement(e)),
        (n[j] = r),
        (n[At] = t),
        np(n, e, t),
        Ut(n),
        n
      );
    }
    function pp(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate`
        ? e !== mp && ((mp = e), !0)
        : ((mp = null), !1);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0,
      _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
      vp = typeof Promise == `function` ? Promise : void 0,
      yp =
        typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : vp === void 0
            ? gp
            : function (e) {
                return vp.resolve(null).then(e).catch(xp);
              };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Hh(t));
              return;
            }
            r--;
          } else if (
            n === `$` ||
            n === `$?` ||
            n === `$~` ||
            n === `$!` ||
            n === `&`
          )
            r++;
          else if (n === `html`) _m(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), _m(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[It] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && _m(e.ownerDocument.body);
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display),
                (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (
        ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
        (e.style.viewTransitionName = t),
        n != null && (e.style.viewTransitionClass = n),
        (n = getComputedStyle(e)),
        n.display === `inline`)
      ) {
        if (((t = e.getClientRects()), t.length === 1)) var r = 1;
        else
          for (var i = (r = 0); i < t.length; i++) {
            var a = t[i];
            0 < a.width && 0 < a.height && r++;
          }
        r === 1 &&
          ((e = e.style),
          (e.display = t.length === 1 ? `inline-block` : `block`),
          (e.marginTop = `-` + n.paddingTop),
          (e.marginBottom = `-` + n.paddingBottom));
      }
    }
    function Ep(e, t) {
      ((e = e.style), (t = t.style));
      var n =
        t == null
          ? null
          : t.hasOwnProperty(`viewTransitionName`)
            ? t.viewTransitionName
            : t.hasOwnProperty(`view-transition-name`)
              ? t[`view-transition-name`]
              : null;
      ((e.viewTransitionName =
        n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        (n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionClass`)
              ? t.viewTransitionClass
              : t.hasOwnProperty(`view-transition-class`)
                ? t[`view-transition-class`]
                : null),
        (e.viewTransitionClass =
          n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
        e.display === `inline-block` &&
          (t == null
            ? (e.display = e.margin = ``)
            : ((n = t.display),
              (e.display = n == null || typeof n == `boolean` ? `` : n),
              (n = t.margin),
              n == null
                ? ((n = t.hasOwnProperty(`marginTop`)
                    ? t.marginTop
                    : t[`margin-top`]),
                  (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                  (t = t.hasOwnProperty(`marginBottom`)
                    ? t.marginBottom
                    : t[`margin-bottom`]),
                  (e.marginBottom =
                    t == null || typeof t == `boolean` ? `` : t))
                : (e.margin = n))));
    }
    function Dp(e, t, n) {
      return (
        (n = n.ownerDocument.defaultView),
        {
          rect: e,
          abs: t.position === `absolute` || t.position === `fixed`,
          clip:
            t.clipPath !== `none` ||
            t.overflow !== `visible` ||
            t.filter !== `none` ||
            t.mask !== `none` ||
            t.mask !== `none` ||
            t.borderRadius !== `0px`,
          view:
            0 <= e.bottom &&
            0 <= e.right &&
            e.top <= n.innerHeight &&
            e.left <= n.innerWidth,
        }
      );
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (
              (o === `loaded` &&
                (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
              (o = s.length),
              e !== null)
            )
              for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
                var f = c[d];
                if (!f.complete) {
                  var p = f.getBoundingClientRect();
                  if (
                    0 < p.bottom &&
                    0 < p.right &&
                    p.top < t.innerHeight &&
                    p.left < t.innerWidth
                  ) {
                    if (((u += Xm(f)), u > $m)) {
                      s.length = o;
                      break;
                    }
                    ((f = new Promise(jp.bind(f))), s.push(f));
                  }
                }
              }
            if (0 < s.length)
              return (
                (t = Promise.race([
                  Promise.all(s),
                  new Promise(function (e) {
                    return setTimeout(e, 500);
                  }),
                ]).then(i, i)),
                (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
              );
            if ((i(), n)) return n.finished.then(a, a);
            a();
          },
          types: n,
        });
        l.__reactViewTransition = u;
        var d = [];
        return (
          u.ready.then(
            function () {
              for (
                var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0;
                t < e.length;
                t++
              ) {
                var n = e[t],
                  r = n.effect,
                  i = r.pseudoElement;
                if (i != null && i.startsWith(`::view-transition`)) {
                  (d.push(n), (n = r.getKeyframes()));
                  for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                    var u = n[c],
                      f = u.width;
                    if (i === void 0) i = f;
                    else if (i !== f) {
                      s = !1;
                      break;
                    }
                    if (((f = u.height), a === void 0)) a = f;
                    else if (a !== f) {
                      s = !1;
                      break;
                    }
                    (delete u.width,
                      delete u.height,
                      u.transform === `none` && delete u.transform);
                  }
                  s &&
                    i !== void 0 &&
                    a !== void 0 &&
                    (r.setKeyframes(n),
                    (s = getComputedStyle(r.target, r.pseudoElement)),
                    s.width !== i || s.height !== a) &&
                    ((s = n[0]),
                    (s.width = i),
                    (s.height = a),
                    (s = n[n.length - 1]),
                    (s.width = i),
                    (s.height = a),
                    r.setKeyframes(n));
                }
              }
              o();
            },
            function (e) {
              l.__reactViewTransition === u && (l.__reactViewTransition = null);
              try {
                if (typeof e == `object` && e)
                  switch (e.name) {
                    case `InvalidStateError`:
                      (e.message ===
                        `View transition was skipped because document visibility state is hidden.` ||
                        e.message ===
                          `Skipping view transition because document visibility state has become hidden.` ||
                        e.message ===
                          `Skipping view transition because viewport size changed.` ||
                        e.message ===
                          `Transition was aborted because of invalid state`) &&
                        (e = null);
                  }
                e !== null && c(e);
              } finally {
                (r(), i(), o());
              }
            },
          ),
          u.finished.finally(function () {
            for (var e = 0; e < d.length; e++) d[e].cancel();
            (l.__reactViewTransition === u && (l.__reactViewTransition = null),
              s());
          }),
          u
        );
      } catch {
        return (r(), i(), o(), null);
      }
    }
    function Np(e, t) {
      ((this._scope = document.documentElement),
        (this._selector = `::view-transition-` + e + `(` + t + `)`));
    }
    ((Np.prototype.animate = function (e, t) {
      return (
        (t = typeof t == `number` ? { duration: t } : T({}, t)),
        (t.pseudoElement = this._selector),
        this._scope.animate(e, t)
      );
    }),
      (Np.prototype.getAnimations = function () {
        for (
          var e = this._scope,
            t = this._selector,
            n = e.getAnimations({ subtree: !0 }),
            r = [],
            i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i].effect;
          a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
        }
        return r;
      }),
      (Np.prototype.getComputedStyle = function () {
        return getComputedStyle(this._scope, this._selector);
      }));
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e),
      };
    }
    function Fp(e) {
      ((this._fragmentFiber = e),
        (this._observers = this._eventListeners = null));
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (!(
        n != null &&
        typeof n != `boolean` &&
        ((r = n.signal || null), r !== null && r.aborted)
      )) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          (n != null &&
            typeof n != `boolean` &&
            !0 === n.once &&
            (s = function (r) {
              (o.removeEventListener(e, t, n),
                typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
            }),
            r !== null &&
              ((i = o.removeEventListener.bind(o, e, t, n)),
              r.addEventListener(`abort`, i, { once: !0 }),
              (i = r.removeEventListener.bind(r, `abort`, i))),
            (r = Rp(n)),
            a.push({
              type: e,
              listener: t,
              optionsOrUseCapture: n,
              attachedListener: s,
              cleanup: i,
            }),
            h(this._fragmentFiber.child, !1, Ip, e, s, r));
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return (b(e).addEventListener(t, n, r), !1);
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        ((i = Rp(i.optionsOrUseCapture)),
          h(this._fragmentFiber.child, !1, Lp, e, n, i),
          r.splice(t, 1),
          a !== null && a());
      }
    };
    function Lp(e, t, n, r) {
      return (b(e).removeEventListener(t, n, r), !1);
    }
    function Rp(e) {
      return e != null &&
        typeof e != `boolean` &&
        (!0 === e.once || e.signal instanceof AbortSignal)
        ? { capture: e.capture, passive: e.passive }
        : e;
    }
    function zp(e) {
      return e == null
        ? `c=0`
        : typeof e == `boolean`
          ? `c=` + (e ? `1` : `0`)
          : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r)
          return i;
      }
      return -1;
    }
    ((Fp.prototype.dispatchEvent = function (e) {
      var t = g(this._fragmentFiber);
      if (t === null) return !0;
      t = b(t);
      var n = this._eventListeners;
      if ((n !== null && 0 < n.length) || !e.bubbles) {
        var r =
          t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n)
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.addEventListener(
              a.type,
              a.attachedListener,
              Rp(a.optionsOrUseCapture),
            );
          }
        if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
          for (i = 0; i < n.length; i++)
            ((a = n[i]),
              r.removeEventListener(
                a.type,
                a.attachedListener,
                Rp(a.optionsOrUseCapture),
              ));
        return (t.removeChild(r), e);
      }
      return t.dispatchEvent(e);
    }),
      (Fp.prototype.focus = function (e) {
        h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
      }));
    function Vp(e, t) {
      return e.tag !== 6 && ((e = b(e)), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return (t.push(e), !1);
    }
    Fp.prototype.blur = function () {
      var e = g(this._fragmentFiber);
      e !== null &&
        ((e = b(e)),
        (e = lp(e).activeElement),
        e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
    };
    function Up(e, t) {
      return (
        e.tag !== 6 &&
        ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1)
      );
    }
    Fp.prototype.observeUsing = function (e) {
      (this._observers === null && (this._observers = new Set()),
        this._observers.add(e),
        h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
    };
    function Wp(e, t) {
      return e.tag !== 6 && ((e = b(e)), t.observe(e), !1);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        (t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
        for (var n = (t = 0); n < Kp.length; n++) {
          var r = Kp[n];
          r.fragmentInstance === this && r.observer === e
            ? e.unobserve(r.instance)
            : (Kp[t++] = r);
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return e.tag !== 6 && ((e = b(e)), t.unobserve(e), !1);
    }
    var Kp = [],
      qp = !1;
    function Jp(e, t, n) {
      (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
        qp ||
          ((qp = !0),
          mm(function () {
            qp = !1;
            var e = Kp;
            Kp = [];
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              n.observer.unobserve(n.instance);
            }
          })));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return (h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
      } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
      return !1;
    }
    ((Fp.prototype.getRootNode = function (e) {
      var t = g(this._fragmentFiber);
      return t === null ? this : b(t).getRootNode(e);
    }),
      (Fp.prototype.compareDocumentPosition = function (e) {
        var t = g(this._fragmentFiber);
        if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        var n = [];
        h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
        var r = b(t);
        if (n.length === 0) {
          if (((n = r), _(this._fragmentFiber))) {
            a: {
              for (t = this._fragmentFiber.return; t !== null;) {
                if (t.tag === 4) {
                  t = t.stateNode.containerInfo;
                  break a;
                }
                if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                t = t.return;
              }
              t = null;
            }
            t != null && (n = t);
          }
          t = this._fragmentFiber;
          var i = (r = n.compareDocumentPosition(e));
          return (
            n === e
              ? (i = Node.DOCUMENT_POSITION_CONTAINS)
              : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                ((n = v(t)[1]),
                n === null
                  ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                  : ((e = b(n).compareDocumentPosition(e)),
                    (i =
                      e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                        ? Node.DOCUMENT_POSITION_FOLLOWING
                        : Node.DOCUMENT_POSITION_PRECEDING))),
            (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
          );
        }
        ((t = b(n[0])), (i = b(n[n.length - 1])));
        var a = _(this._fragmentFiber) ? t.parentElement : r;
        if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
        ((r =
          a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
          (a =
            a.compareDocumentPosition(i) &
            Node.DOCUMENT_POSITION_CONTAINED_BY));
        var o = t.compareDocumentPosition(e),
          s = i.compareDocumentPosition(e),
          c =
            o & Node.DOCUMENT_POSITION_CONTAINED_BY ||
            s & Node.DOCUMENT_POSITION_CONTAINED_BY;
        return (
          (s =
            r &&
            a &&
            o & Node.DOCUMENT_POSITION_FOLLOWING &&
            s & Node.DOCUMENT_POSITION_PRECEDING),
          (t =
            (r && t === e) || (a && i === e) || c || s
              ? Node.DOCUMENT_POSITION_CONTAINED_BY
              : (!r && t === e) || (!a && i === e)
                ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                : o),
          t & Node.DOCUMENT_POSITION_DISCONNECTED ||
          t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
          Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
            ? t
            : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
        );
      }));
    function Xp(e, t, n, r, i) {
      var a = zt(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if ((n = !!a))
          a: {
            for (; a !== null;) {
              if (a.tag === 7 && (a === t || a.alternate === t)) {
                n = !0;
                break a;
              }
              a = a.return;
            }
            n = !1;
          }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null)
          return (
            (a = i.ownerDocument),
            i === a || i === a.documentElement || i === a.body
          );
        a: {
          for (a = t, t = g(t); a !== null;) {
            if (!(
              (a.tag !== 5 && a.tag !== 3 && a.tag !== 27) ||
              (a !== t && a.alternate !== t)
            )) {
              a = !0;
              break a;
            }
            a = a.return;
          }
          a = !1;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING
        ? ((t = !!a) &&
            !(t = a === n) &&
            ((t = te(n, a, w)),
            t === null
              ? (t = !1)
              : (h(t, !0, S, a, n), (a = x), (x = null), (t = a !== null))),
          t)
        : e & Node.DOCUMENT_POSITION_FOLLOWING
          ? ((t = !!a) &&
              !(t = a === r) &&
              ((t = te(r, a, w)),
              t === null
                ? (t = !1)
                : (h(t, !0, C, a, r),
                  (a = x),
                  (ee = x = null),
                  (t = a !== null))),
            t)
          : !1;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      (n.selectNodeContents(e),
        (e = n.getBoundingClientRect()),
        window.scrollTo(
          window.scrollX + e.left,
          t
            ? window.scrollY + e.top
            : window.scrollY + e.bottom - window.innerHeight,
        ));
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
      var n = !1 !== e;
      if (t.length === 0) {
        var r = v(this._fragmentFiber);
        if (
          ((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]),
          r === null)
        )
          return;
        if (r.tag === 6) {
          ((e = b(r)), Zp(e, n));
          return;
        }
        if (((r = b(r)), r.nodeType !== 9)) {
          if (r.nodeType === 11) {
            ((n = `host` in r ? r.host : null),
              n !== null && n.scrollIntoView(e));
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var a = t[r];
        (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e),
          (r += n ? -1 : 1));
      }
    };
    function Qp(e, t) {
      return ((e = b(e)), $p(e, t), !1);
    }
    function $p(e, t) {
      ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.addEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            for (var r = 0, i = 0; i < Kp.length; i++) {
              var a = Kp[i];
              (a.fragmentInstance !== t ||
                a.observer !== n ||
                a.instance !== e) &&
                (Kp[r++] = a);
            }
            ((Kp.length = r), n.observe(e));
          }),
        $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          e.removeEventListener(
            i.type,
            i.attachedListener,
            Rp(i.optionsOrUseCapture),
          );
        }
      e.nodeType !== 3 &&
        ((n = t._observers),
        n !== null &&
          n.forEach(function (n) {
            typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
          }),
        e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nm(n), Rt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[It])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !==
                    (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !==
                    (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = lm(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !n) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== `INPUT` ||
            e.type !== `hidden`) &&
            !t) ||
          ((e = lm(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return (
        e.data === `$!` ||
        (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
      );
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else
            (n !== `$` &&
              n !== `$!` &&
              n !== `$?` &&
              n !== `$~` &&
              n !== `&`) ||
              t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (
            n === `$` ||
            n === `$!` ||
            n === `$?` ||
            n === `$~` ||
            n === `&`
          ) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = !0;
      }
      if (e.ownerDocument.activeElement === e) return !0;
      var r = !1;
      try {
        (e.ownerDocument.addEventListener(`focus`, n, !0),
          (e.focus || HTMLElement.prototype.focus).call(e, t));
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, !0);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (((t = lp(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
      }
      (n.dangerouslySetInnerHTML != null && (e.textContent = ``),
        e.onclick === Tn && (e.onclick = null),
        Rt(e));
    }
    function _m(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Rt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = O.d;
    O.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e = xm.f(),
        t = Bd();
      return e || t;
    }
    function Cm(e) {
      var t = Bt(e);
      t !== null && t.tag === 5 && t.type === `form` ? ac(t) : xm.r(e);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = un(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          ym.has(i) ||
            (ym.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)),
              np(t, `link`, e),
              Ut(t),
              r.head.appendChild(t))));
      }
    }
    function Em(e) {
      (xm.D(e), Tm(`dns-prefetch`, e, null));
    }
    function Dm(e, t) {
      (xm.C(e, t), Tm(`preconnect`, e, t));
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + un(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + un(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` &&
              (i += `[imagesizes="` + un(n.imageSizes) + `"]`))
          : (i += `[href="` + un(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (!(
          vm.has(a) ||
          ((e = T(
            {
              rel: `preload`,
              href: t === `image` && n && n.imageSrcSet ? void 0 : e,
              as: t,
            },
            n,
          )),
          vm.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Fm(a))) ||
            (t === `script` && r.querySelector(zm(a))))
        )) {
          var o = r.createElement(`link`);
          (np(o, `link`, e),
            t === `style` &&
              ((o[Lt] = !0),
              (o.onload = o.onerror =
                function () {
                  Wt(o);
                })),
            Ut(o),
            r.head.appendChild(o));
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i =
            `link[rel="modulepreload"][as="` +
            un(r) +
            `"][href="` +
            un(e) +
            `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (
          !vm.has(a) &&
          ((e = T({ rel: `modulepreload`, href: e }, t)),
          vm.set(a, e),
          n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          ((r = n.createElement(`link`)),
            np(r, `link`, e),
            Ut(r),
            n.head.appendChild(r));
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Ht(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Fm(a)))) s.loading = 5;
          else {
            ((e = T({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = vm.get(a)) && Hm(e, n));
            var c = (o = r.createElement(`link`));
            (Ut(c),
              np(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Vm(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
            i.set(a, o));
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Ht(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = T({ src: e, async: !0 }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Ut(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Ht(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zm(i))),
          a ||
            ((e = T({ src: e, async: !0, type: `module` }, t)),
            (t = vm.get(i)) && Um(e, t),
            (a = n.createElement(`script`)),
            Ut(a),
            np(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = je.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((n = Pm(n.href)),
              (t = Ht(a).hoistableStyles),
              (r = t.get(n)),
              r ||
                ((r = { type: `style`, instance: null, count: 0, state: null }),
                t.set(n, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Pm(n.href);
            var o = Ht(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Fm(e)))
                  ? o._p || ((s.instance = o), (s.state.loading = 5))
                  : ((o = vm.get(e)),
                    o ||
                      ((o = {
                        rel: `preload`,
                        as: `style`,
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      vm.set(e, o)),
                    Lm(a, e, o, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` &&
            t &&
            typeof t != `function` &&
            typeof t != `symbol`
              ? ((n = Rm(n)),
                (t = Ht(a).hoistableScripts),
                (r = t.get(n)),
                r ||
                  ((r = {
                    type: `script`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + un(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return T({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Lm(e, t, n, r) {
      if ((t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))) {
        if (!0 !== t[Lt]) {
          r.loading = 1;
          return;
        }
      } else
        ((t = e.createElement(`link`)),
          (t[Lt] = !0),
          (t.onload = t.onerror = Wt.bind(null, t)),
          np(t, `link`, n),
          Ut(t),
          e.head.appendChild(t));
      ((r.preload = t),
        t.addEventListener(`load`, function () {
          return (r.loading |= 1);
        }),
        t.addEventListener(`error`, function () {
          return (r.loading |= 2);
        }));
    }
    function Rm(e) {
      return `[src="` + un(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + un(n.href) + `"]`);
            if (r) return ((t.instance = r), Ut(r), r);
            var a = T({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              Ut(r),
              np(r, `style`, a),
              Vm(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Pm(n.href);
            var o = e.querySelector(Fm(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), Ut(o), o);
            ((r = Im(n)),
              (a = vm.get(a)) && Hm(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              Ut(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              np(o, `link`, r),
              (t.state.loading |= 4),
              Vm(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Rm(n.src)),
              (a = e.querySelector(zm(o)))
                ? ((t.instance = a), Ut(a), a)
                : ((r = n),
                  (a = vm.get(o)) && ((r = T({}, n)), Um(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  Ut(a),
                  np(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n),
          t.insertBefore(e, t.firstChild));
    }
    function Hm(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Um(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = (Wm = new Map());
        i.set(n, r);
      } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), i = 0;
        i < n.length;
        i++
      ) {
        var a = n[i];
        if (
          !(
            a[It] ||
            a[j] ||
            (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
          ) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Km(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(
          n,
          t === `title` ? e.querySelector(`head > title`) : null,
        ));
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (
            typeof t.precedence != `string` ||
            typeof t.href != `string` ||
            t.href === ``
          )
            break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case `stylesheet`:
              return (
                (e = t.disabled),
                typeof t.precedence == `string` && e == null
              );
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Jm(e, t) {
      return (
        e === `img` &&
        t.src != null &&
        t.src !== `` &&
        t.onLoad == null &&
        t.loading !== `lazy`
      );
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (
        (e.width || 100) *
        (e.height || 100) *
        (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
        0.25
      );
    }
    function Zm(e, t) {
      typeof t.decode == `function` &&
        (e.imgCount++,
        t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
        (e = rh.bind(e)),
        t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = nh.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              Ut(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Im(r)),
            (i = vm.get(i)) && Hm(r, i),
            (a = a.createElement(`link`)),
            Ut(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            np(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = nh.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return (
        e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 &&
                      (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > $m ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);
        else if (e.unsuspend) {
          var t = e.unsuspend;
          ((e.unsuspend = null), t());
        }
      }
    }
    function nh() {
      (this.count--, th(this));
    }
    function rh() {
      (this.imgCount--, th(this));
    }
    var ih = null;
    function ah(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (ih = new Map()),
          t.forEach(oh, e),
          (ih = null),
          nh.call(e)));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ih.set(e, n));
          for (
            var i = e.querySelectorAll(
                `link[data-precedence],style[data-precedence]`,
              ),
              a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = nh.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var sh = {
      $$typeof: le,
      Provider: null,
      Consumer: null,
      _currentValue: we,
      _currentValue2: we,
      _threadCount: 0,
    };
    function ch(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = yt(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = yt(0)),
        (this.hiddenUpdates = yt(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.transitionTypes = null),
        (this.incompleteTransitions = new Map()));
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ch(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = Li(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = La()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        bo(a),
        e
      );
    }
    function uh(e) {
      return e ? ((e = Fi), e) : Fi;
    }
    function dh(e, t, n, r, i, a) {
      ((i = uh(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = So(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Co(e, r, t)),
        n !== null && (Id(n, e, t), wo(n, e, t)));
    }
    function fh(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      (fh(e, t), (e = e.alternate) && fh(e, t));
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ni(e, 67108864);
        (t !== null && Id(t, e, 67108864), ph(e, 67108864));
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Nd();
        t = Tt(t);
        var n = Ni(e, t);
        (n !== null && Id(n, e, t), ph(e, t));
      }
    }
    var gh = !0;
    function _h(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 2), yh(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function vh(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        ((O.p = 8), yh(e, t, n, r));
      } finally {
        ((O.p = a), (D.T = i));
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) (Kf(e, t, r, xh, n), Mh(e, r));
        else if (Ph(i, e, t, n, r)) r.stopPropagation();
        else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
          for (; i !== null;) {
            var a = Bt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (
                    ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                  ) {
                    var o = pt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - A(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (Ef(a), !(W & 6) && ((yd = Ye() + 500), Df(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = Ni(a, 2)), s !== null && Id(s, a, 2), Bd(), ph(a, 2));
              }
            if (((a = bh(r)), a === null && Kf(e, t, r, xh, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Kf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return ((e = Dn(e)), Sh(e));
    }
    var xh = null;
    function Sh(e) {
      if (((xh = null), (e = zt(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((xh = e), null);
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Xe()) {
            case Ze:
              return 2;
            case Qe:
              return 8;
            case $e:
            case et:
              return 32;
            case tt:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = !1,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = Bt(t)), t !== null && mh(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Th = Nh(Th, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function Fh(e) {
      var t = zt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                Ot(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                Ot(e.priority, function () {
                  hh(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((En = r), n.target.dispatchEvent(r), (En = null));
        } else return ((t = Bt(n)), t !== null && mh(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      ((wh = !1),
        Th !== null && Ih(Th) && (Th = null),
        Eh !== null && Ih(Eh) && (Eh = null),
        Dh !== null && Ih(Dh) && (Dh = null),
        Oh.forEach(Lh),
        kh.forEach(Lh));
    }
    function zh(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        wh ||
          ((wh = !0),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e &&
        ((Bh = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Bh === e && (Bh = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Sh(r || n) === null) continue;
              break;
            }
            var a = Bt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              rc(
                a,
                { pending: !0, data: i, method: n.method, action: r },
                r,
                i,
              ));
          }
        }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      (Th !== null && zh(Th, e),
        Eh !== null && zh(Eh, e),
        Dh !== null && zh(Dh, e),
        Oh.forEach(t),
        kh.forEach(t));
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null);)
        (Fh(n), n.blockedOn === null && Ah.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[At] || null;
          if (typeof a == `function`) o || Vh(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[At] || null))) s = o.formAction;
              else if (Sh(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function`
              ? (n[r + 1] = s)
              : (n.splice(r, 3), (r -= 3)),
              Vh(n));
          }
        }
    }
    function Uh() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    ((Gh.prototype.render = Wh.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        dh(n, Nd(), e, t, null, null);
      }),
      (Gh.prototype.unmount = Wh.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (dh(e.current, 2, null, e, null, null), Bd(), (t[jt] = null));
          }
        }));
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Dt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        (Ah.splice(n, 0, e), n === 0 && Fh(e));
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.0`) throw Error(i(527, Kh, `19.3.0`));
    O.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return (
        (e = d(t)),
        (e = e === null ? null : p(e)),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var qh = {
      bundleType: 0,
      version: `19.3.0`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.3.0`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber)
        try {
          ((it = Jh.inject(qh)), (at = Jh));
        } catch {}
    }
    e.hydrateRoot = function (e, t, n) {
      if (!a(e)) throw Error(i(299));
      var r = !1,
        o = ``,
        s = Ec,
        c = Dc,
        l = Oc,
        u = null;
      return (
        n != null &&
          (!0 === n.unstable_strictMode && (r = !0),
          n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (s = n.onUncaughtError),
          n.onCaughtError !== void 0 && (c = n.onCaughtError),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError),
          n.formState !== void 0 && (u = n.formState)),
        (t = lh(e, 1, !0, t, n ?? null, r, o, u, s, c, l, Uh)),
        (t.context = uh(null)),
        (n = t.current),
        (r = Nd()),
        (r = Tt(r)),
        (o = So(r)),
        (o.callback = null),
        Co(n, o, r),
        (n = r),
        (t.current.lanes = n),
        bt(t, n),
        Ef(t),
        (e[jt] = t.current),
        Wf(e),
        new Gh(t)
      );
    };
  }),
  g = o((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = h()));
  }),
  _ = `__TSS_CONTEXT`,
  v = Symbol.for(`TSS_SERVER_FUNCTION`),
  y = `application/x-tss-framed`,
  b = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 };
`${y}`;
var x = /;\s*v=(\d+)/;
function ee(e) {
  let t = e.match(x);
  return t ? parseInt(t[1], 10) : void 0;
}
function S(e) {
  let t = ee(e);
  if (t !== void 0 && t !== 1)
    throw Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var C = () => window.__TSS_START_OPTIONS__;
function w(e) {
  return e[e.length - 1];
}
function te(e) {
  return typeof e == `function`;
}
function T(e, t) {
  return te(e) ? e(t) : e;
}
var ne = Object.prototype.hasOwnProperty,
  re = Object.prototype.propertyIsEnumerable;
function ie(e) {
  for (let t in e) if (ne.call(e, t)) return !0;
  return !1;
}
var ae = () => Object.create(null),
  oe = (e, t) => se(e, t, ae);
function se(e, t, n = () => ({}), r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  let i = t,
    a = ue(e) && ue(i);
  if (!a && !(le(e) && le(i))) return i;
  let o = a ? e : ce(e);
  if (!o) return i;
  let s = a ? i : ce(i);
  if (!s) return i;
  let c = o.length,
    l = s.length,
    u = a ? Array(l) : n(),
    d = 0;
  for (let t = 0; t < l; t++) {
    let o = a ? t : s[t],
      l = e[o],
      f = i[o];
    if (l === f) {
      ((u[o] = l), (a ? t < c : ne.call(e, o)) && d++);
      continue;
    }
    if (
      l === null ||
      f === null ||
      typeof l != `object` ||
      typeof f != `object`
    ) {
      u[o] = f;
      continue;
    }
    let p = se(l, f, n, r + 1);
    ((u[o] = p), p === l && d++);
  }
  return c === l && d === c ? e : u;
}
function ce(e) {
  let t = Object.getOwnPropertyNames(e);
  for (let n of t) if (!re.call(e, n)) return !1;
  let n = Object.getOwnPropertySymbols(e);
  if (n.length === 0) return t;
  let r = t;
  for (let t of n) {
    if (!re.call(e, t)) return !1;
    r.push(t);
  }
  return r;
}
function le(e) {
  if (!E(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(!E(n) || !n.hasOwnProperty(`isPrototypeOf`));
}
function E(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function ue(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function de(e, t, n) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let r = 0, i = e.length; r < i; r++) if (!de(e[r], t[r], n)) return !1;
    return !0;
  }
  if (le(e) && le(t)) {
    let r = n?.ignoreUndefined ?? !0;
    if (n?.partial) {
      for (let i in t)
        if ((!r || t[i] !== void 0) && !de(e[i], t[i], n)) return !1;
      return !0;
    }
    let i = 0;
    if (!r) i = Object.keys(e).length;
    else for (let t in e) e[t] !== void 0 && i++;
    let a = 0;
    for (let o in t)
      if ((!r || t[o] !== void 0) && (a++, a > i || !de(e[o], t[o], n)))
        return !1;
    return i === a;
  }
  return !1;
}
function fe(e) {
  let t,
    n,
    r = new Promise((e, r) => {
      ((t = e), (n = r));
    });
  return (
    (r.status = `pending`),
    (r.resolve = (n) => {
      ((r.status = `resolved`), (r.value = n), t(n), e?.(n));
    }),
    (r.reject = (e) => {
      ((r.status = `rejected`), n(e));
    }),
    r
  );
}
function pe(e) {
  return typeof e?.message == `string`
    ? e.message.startsWith(`Failed to fetch dynamically imported module`) ||
        e.message.startsWith(`error loading dynamically imported module`) ||
        e.message.startsWith(`Importing a module script failed`)
    : !1;
}
function me(e) {
  return !!(e && typeof e == `object` && typeof e.then == `function`);
}
var he = /[\x00-\x1f\x7f"<>`{}]/g;
function ge(e) {
  return e.replace(
    he,
    (e) => `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`),
  );
}
function _e(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
      try {
        return decodeURI(e);
      } catch {
        return e;
      }
    });
  }
  return ge(t);
}
var ve = [`http:`, `https:`, `mailto:`, `tel:`];
function ye(e, t) {
  if (!e) return !1;
  try {
    let n = new URL(e);
    return !t.has(n.protocol);
  } catch {
    return !1;
  }
}
var be = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`,
  },
  xe = /[&><\u2028\u2029]/g;
function Se(e) {
  return e.replace(xe, (e) => be[e]);
}
function Ce(e) {
  if (!e || (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith(`//`)))
    return { path: e, handledProtocolRelativeURL: !1 };
  let t = /%25|%5C/gi,
    n = 0,
    r = ``,
    i;
  for (; (i = t.exec(e)) !== null;)
    ((r += _e(e.slice(n, i.index)) + i[0]), (n = t.lastIndex));
  r += _e(n ? e.slice(n) : e);
  let a = !1;
  return (
    r.startsWith(`//`) && ((a = !0), (r = `/` + r.replace(/^\/+/, ``))),
    { path: r, handledProtocolRelativeURL: a }
  );
}
function D(e) {
  return /\s|[^\u0000-\u007F]/.test(e)
    ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent)
    : e;
}
function O(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function we() {
  throw Error(`Invariant failed`);
}
function Te(e) {
  let t = new Map(),
    n,
    r,
    i = (e) => {
      e.next &&
        (e.prev
          ? ((e.prev.next = e.next),
            (e.next.prev = e.prev),
            (e.next = void 0),
            r && ((r.next = e), (e.prev = r)))
          : ((e.next.prev = void 0),
            (n = e.next),
            (e.next = void 0),
            r && ((e.prev = r), (r.next = e))),
        (r = e));
    };
  return {
    get(e) {
      let n = t.get(e);
      if (n) return (i(n), n.value);
    },
    set(a, o) {
      if (t.size >= e && n) {
        let e = n;
        (t.delete(e.key),
          e.next && ((n = e.next), (e.next.prev = void 0)),
          e === r && (r = void 0));
      }
      let s = t.get(a);
      if (s) ((s.value = o), i(s));
      else {
        let e = { key: a, value: o, prev: r };
        (r && (r.next = e), (r = e), (n ||= e), t.set(a, e));
      }
    },
    clear() {
      (t.clear(), (n = void 0), (r = void 0));
    },
  };
}
var Ee = 4,
  De = 5;
function Oe(e) {
  let t = e.indexOf(`{`);
  if (t === -1) return null;
  let n = e.indexOf(`}`, t);
  return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function k(e, t, n = new Uint16Array(6)) {
  let r = e.indexOf(`/`, t),
    i = r === -1 ? e.length : r,
    a = e.substring(t, i);
  if (!a || !a.includes(`$`))
    return (
      (n[0] = 0),
      (n[1] = t),
      (n[2] = t),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  if (a === `$`) {
    let r = e.length;
    return (
      (n[0] = 2),
      (n[1] = t),
      (n[2] = t),
      (n[3] = r),
      (n[4] = r),
      (n[5] = r),
      n
    );
  }
  if (a.charCodeAt(0) === 36)
    return (
      (n[0] = 1),
      (n[1] = t),
      (n[2] = t + 1),
      (n[3] = i),
      (n[4] = i),
      (n[5] = i),
      n
    );
  let o = Oe(a);
  if (o) {
    let [r, s] = o,
      c = a.charCodeAt(r + 1);
    if (c === 45) {
      if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
        let e = r + 3,
          a = s;
        if (e < a)
          return (
            (n[0] = 3),
            (n[1] = t + r),
            (n[2] = t + e),
            (n[3] = t + a),
            (n[4] = t + s + 1),
            (n[5] = i),
            n
          );
      }
    } else if (c === 36) {
      let a = r + 1,
        o = r + 2;
      return o === s
        ? ((n[0] = 2),
          (n[1] = t + r),
          (n[2] = t + a),
          (n[3] = t + o),
          (n[4] = t + s + 1),
          (n[5] = e.length),
          n)
        : ((n[0] = 1),
          (n[1] = t + r),
          (n[2] = t + o),
          (n[3] = t + s),
          (n[4] = t + s + 1),
          (n[5] = i),
          n);
    }
  }
  return (
    (n[0] = 0),
    (n[1] = t),
    (n[2] = t),
    (n[3] = i),
    (n[4] = i),
    (n[5] = i),
    n
  );
}
function ke(e, t, n, r, i, a, o) {
  o?.(n);
  let s = r;
  {
    let r = n.fullPath ?? n.from,
      o = r.length,
      c = n.options?.caseSensitive ?? e,
      l = n.options?.params?.parse ?? n.options?.parseParams;
    for (; s < o;) {
      let e = k(r, s, t),
        o,
        u = s,
        d = e[5];
      switch (((s = d + 1), a++, e[0])) {
        case 0: {
          let t = r.substring(e[2], e[3]);
          if (c) {
            let e = i.static?.get(t);
            if (e) o = e;
            else {
              i.static ??= new Map();
              let e = Me(n.fullPath ?? n.from);
              ((e.parent = i), (e.depth = a), (o = e), i.static.set(t, e));
            }
          } else {
            let e = t.toLowerCase(),
              r = i.staticInsensitive?.get(e);
            if (r) o = r;
            else {
              i.staticInsensitive ??= new Map();
              let t = Me(n.fullPath ?? n.from);
              ((t.parent = i),
                (t.depth = a),
                (o = t),
                i.staticInsensitive.set(e, t));
            }
          }
          break;
        }
        case 1: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.dynamic?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Ne(1, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.depth = a),
              (e.parent = i),
              (i.dynamic ??= []),
              i.dynamic.push(e));
          }
          break;
        }
        case 3: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            f = c && !!(t || s),
            p = t ? (f ? t : t.toLowerCase()) : void 0,
            m = s ? (f ? s : s.toLowerCase()) : void 0,
            h =
              !l &&
              i.optional?.find(
                (e) =>
                  !e.parse &&
                  e.caseSensitive === f &&
                  e.prefix === p &&
                  e.suffix === m,
              );
          if (h) o = h;
          else {
            let e = Ne(3, n.fullPath ?? n.from, f, p, m);
            ((o = e),
              (e.parent = i),
              (e.depth = a),
              (i.optional ??= []),
              i.optional.push(e));
          }
          break;
        }
        case 2: {
          let t = r.substring(u, e[1]),
            s = r.substring(e[4], d),
            l = c && !!(t || s),
            f = t ? (l ? t : t.toLowerCase()) : void 0,
            p = s ? (l ? s : s.toLowerCase()) : void 0,
            m = Ne(2, n.fullPath ?? n.from, l, f, p);
          ((o = m),
            (m.parent = i),
            (m.depth = a),
            (i.wildcard ??= []),
            i.wildcard.push(m));
        }
      }
      i = o;
    }
    if (
      l &&
      n.children &&
      !n.isRoot &&
      n.id &&
      n.id.charCodeAt(n.id.lastIndexOf(`/`) + 1) === 95
    ) {
      let e = Me(n.fullPath ?? n.from);
      ((e.kind = De),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.pathless ??= []),
        i.pathless.push(e),
        (i = e));
    }
    let u = (n.path || !n.children) && !n.isRoot;
    if (u && r.endsWith(`/`)) {
      let e = Me(n.fullPath ?? n.from);
      ((e.kind = Ee),
        (e.parent = i),
        a++,
        (e.depth = a),
        (i.index = e),
        (i = e));
    }
    ((i.parse = l ?? null),
      (i.priority = n.options?.params?.priority ?? 0),
      u && !i.route && ((i.route = n), (i.fullPath = n.fullPath ?? n.from)));
  }
  if (n.children) for (let r of n.children) ke(e, t, r, s, i, a, o);
}
function Ae(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority))
    return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function je(e) {
  if (e.pathless) for (let t of e.pathless) je(t);
  if (e.static) for (let t of e.static.values()) je(t);
  if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) je(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(Ae);
    for (let t of e.dynamic) je(t);
  }
  if (e.optional?.length) {
    e.optional.sort(Ae);
    for (let t of e.optional) je(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(Ae);
    for (let t of e.wildcard) je(t);
  }
}
function Me(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Ne(e, t, n, r, i) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: n,
    prefix: r,
    suffix: i,
  };
}
function Pe(e, t) {
  let n = Me(`/`),
    r = new Uint16Array(6);
  for (let t of e) ke(!1, r, t, 1, n, 0);
  (je(n), (t.masksTree = n), (t.flatCache = Te(1e3)));
}
function Fe(e, t) {
  e ||= `/`;
  let n = t.flatCache.get(e);
  if (n) return n;
  let r = Be(e, t.masksTree);
  return (t.flatCache.set(e, r), r);
}
function Ie(e, t, n, r, i) {
  ((e ||= `/`), (r ||= `/`));
  let a = t ? `case\0${e}` : e,
    o = i.singleCache.get(a);
  return (
    o ||
      ((o = Me(`/`)),
      ke(t, new Uint16Array(6), { from: e }, 1, o, 0),
      i.singleCache.set(a, o)),
    Be(r, o, n)
  );
}
function Le(e, t, n = !1) {
  let r = n ? e : `nofuzz\0${e}`,
    i = t.matchCache.get(r);
  if (i !== void 0) return i;
  e ||= `/`;
  let a;
  try {
    a = Be(e, t.segmentTree, n);
  } catch (e) {
    if (e instanceof URIError) a = null;
    else throw e;
  }
  return (a && (a.branch = He(a.route)), t.matchCache.set(r, a), a);
}
function Re(e) {
  return e === `/` ? e : e.replace(/\/{1,}$/, ``);
}
function ze(e, t = !1, n) {
  let r = Me(e.fullPath),
    i = new Uint16Array(6),
    a = {},
    o = {},
    s = 0;
  return (
    ke(t, i, e, 1, r, 0, (e) => {
      if ((n?.(e, s), e.id in a && we(), (a[e.id] = e), s !== 0 && e.path)) {
        let t = Re(e.fullPath);
        (!o[t] || e.fullPath.endsWith(`/`)) && (o[t] = e);
      }
      s++;
    }),
    je(r),
    {
      processedTree: {
        segmentTree: r,
        singleCache: Te(1e3),
        matchCache: Te(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: a,
      routesByPath: o,
    }
  );
}
function Be(e, t, n = !1) {
  let r = e.split(`/`),
    i = We(e, r, t, n);
  if (!i) return null;
  let [a] = Ve(e, r, i);
  return { route: i.node.route, rawParams: a };
}
function Ve(e, t, n) {
  let r = Ue(n.node),
    i = null,
    a = Object.create(null),
    o = n.extract?.part ?? 0,
    s = n.extract?.node ?? 0,
    c = n.extract?.path ?? 0,
    l = n.extract?.segment ?? 0;
  for (; s < r.length; o++, s++, c++, l++) {
    let u = r[s];
    if (u.kind === Ee) break;
    if (u.kind === De) {
      (l--, o--, c--);
      continue;
    }
    let d = t[o],
      f = c;
    if ((d && (c += d.length), u.kind === 1)) {
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0;
      if (e.charCodeAt(t) === 123) {
        let n = u.suffix?.length ?? 0,
          r = e.substring(t + 2, e.length - n - 1),
          i = d.substring(t, d.length - n);
        a[r] = decodeURIComponent(i);
      } else {
        let t = e.substring(1);
        a[t] = decodeURIComponent(d);
      }
    } else if (u.kind === 3) {
      if (n.skipped & (1 << s)) {
        (o--, (c = f - 1));
        continue;
      }
      i ??= n.node.fullPath.split(`/`);
      let e = i[l],
        t = u.prefix?.length ?? 0,
        r = u.suffix?.length ?? 0,
        p = e.substring(t + 3, e.length - r - 1),
        m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
      m && (a[p] = decodeURIComponent(m));
    } else if (u.kind === 2) {
      let t = u,
        n = e.substring(
          f + (t.prefix?.length ?? 0),
          e.length - (t.suffix?.length ?? 0),
        ),
        r = decodeURIComponent(n);
      ((a[`*`] = r), (a._splat = r));
      break;
    }
  }
  return (
    n.rawParams && Object.assign(a, n.rawParams),
    [a, { part: o, node: s, path: c, segment: l }]
  );
}
function He(e) {
  let t = [e];
  for (; e.parentRoute;) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function Ue(e) {
  let t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function We(e, t, n, r) {
  if (e === `/` && n.index) return { node: n.index, skipped: 0 };
  let i = !w(t),
    a = i && e !== `/`,
    o = t.length - +!!i,
    s = [
      {
        node: n,
        index: 1,
        skipped: 0,
        depth: 1,
        statics: 0,
        dynamics: 0,
        optionals: 0,
      },
    ],
    c = null,
    l = null;
  for (; s.length;) {
    let n = s.pop(),
      {
        node: i,
        index: u,
        skipped: d,
        depth: f,
        statics: p,
        dynamics: m,
        optionals: h,
      } = n,
      { extract: g, rawParams: _ } = n;
    if (i.kind === 2 && i.route && !Je(l, n)) continue;
    if (i.parse) {
      if (!qe(e, t, n)) continue;
      ((_ = n.rawParams), (g = n.extract));
    }
    r && i.route && i.kind !== Ee && Je(c, n) && (c = n);
    let v = u === o;
    if (
      v &&
      (i.route && (!a || i.kind === Ee || i.kind === 2) && Je(l, n) && (l = n),
      !i.optional && !i.wildcard && !i.index && !i.pathless)
    )
      continue;
    let y = v ? void 0 : t[u],
      b;
    if (v && i.index) {
      let n = {
          node: i.index,
          index: u,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        },
        r = !0;
      if ((i.index.parse && (qe(e, t, n) || (r = !1)), r)) {
        if (!m && !h && !d && Ke(p, o)) return n;
        Je(l, n) && (l = n);
      }
    }
    if (i.wildcard)
      for (let e = i.wildcard.length - 1; e >= 0; e--) {
        let n = i.wildcard[e],
          { prefix: r, suffix: a } = n;
        if (!(
          r &&
          (v || !(n.caseSensitive ? y : (b ??= y.toLowerCase())).startsWith(r))
        )) {
          if (a) {
            if (v) continue;
            let e = t.slice(u).join(`/`).slice(-a.length);
            if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
          }
          s.push({
            node: n,
            index: o,
            skipped: d,
            depth: f + 1,
            statics: p,
            dynamics: m,
            optionals: h,
            extract: g,
            rawParams: _,
          });
        }
      }
    if (i.optional) {
      let e = d | (1 << f),
        t = f + 1;
      for (let n = i.optional.length - 1; n >= 0; n--) {
        let r = i.optional[n];
        s.push({
          node: r,
          index: u,
          skipped: e,
          depth: t,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
      if (!v)
        for (let e = i.optional.length - 1; e >= 0; e--) {
          let n = i.optional[e],
            { prefix: r, suffix: a } = n;
          if (r || a) {
            let e = n.caseSensitive ? y : (b ??= y.toLowerCase());
            if ((r && !e.startsWith(r)) || (a && !e.endsWith(a))) continue;
          }
          s.push({
            node: n,
            index: u + 1,
            skipped: d,
            depth: t,
            statics: p,
            dynamics: m,
            optionals: h + Ge(o, u),
            extract: g,
            rawParams: _,
          });
        }
    }
    if (!v && i.dynamic && y)
      for (let e = i.dynamic.length - 1; e >= 0; e--) {
        let t = i.dynamic[e],
          { prefix: n, suffix: r } = t;
        if (n || r) {
          let e = t.caseSensitive ? y : (b ??= y.toLowerCase());
          if ((n && !e.startsWith(n)) || (r && !e.endsWith(r))) continue;
        }
        s.push({
          node: t,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p,
          dynamics: m + Ge(o, u),
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    if (!v && i.staticInsensitive) {
      let e = i.staticInsensitive.get((b ??= y.toLowerCase()));
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + Ge(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (!v && i.static) {
      let e = i.static.get(y);
      e &&
        s.push({
          node: e,
          index: u + 1,
          skipped: d,
          depth: f + 1,
          statics: p + Ge(o, u),
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
    }
    if (i.pathless) {
      let e = f + 1;
      for (let t = i.pathless.length - 1; t >= 0; t--) {
        let n = i.pathless[t];
        s.push({
          node: n,
          index: u,
          skipped: d,
          depth: e,
          statics: p,
          dynamics: m,
          optionals: h,
          extract: g,
          rawParams: _,
        });
      }
    }
  }
  if (l) return l;
  if (r && c) {
    let n = c.index;
    for (let e = 0; e < c.index; e++) n += t[e].length;
    let r = n === e.length ? `/` : e.slice(n);
    return (
      (c.rawParams ??= Object.create(null)),
      (c.rawParams[`**`] = decodeURIComponent(r)),
      c
    );
  }
  return null;
}
function Ge(e, t) {
  return 2 ** (e - t - 1);
}
function Ke(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function qe(e, t, n) {
  let r, i;
  try {
    [r, i] = Ve(e, t, n);
  } catch {
    return null;
  }
  if (((n.rawParams = r), (n.extract = i), !n.node.parse)) return !0;
  try {
    if (n.node.parse(r) === !1) return null;
  } catch {}
  return !0;
}
function Je(e, t) {
  return (
    !e ||
    t.statics > e.statics ||
    (t.statics === e.statics &&
      (t.dynamics > e.dynamics ||
        (t.dynamics === e.dynamics &&
          (t.optionals > e.optionals ||
            (t.optionals === e.optionals &&
              ((t.node.kind === Ee) > (e.node.kind === Ee) ||
                ((t.node.kind === Ee) == (e.node.kind === Ee) &&
                  t.depth > e.depth)))))))
  );
}
function Ye(e) {
  return Xe(e.filter((e) => e !== void 0).join(`/`));
}
function Xe(e) {
  return e.replace(/\/{2,}/g, `/`);
}
function Ze(e) {
  return e === `/` ? e : e.replace(/^\/{1,}/, ``);
}
function Qe(e) {
  let t = e.length;
  return t > 1 && e[t - 1] === `/` ? e.replace(/\/{1,}$/, ``) : e;
}
function $e(e) {
  return Qe(Ze(e));
}
function et(e, t) {
  return e?.endsWith(`/`) && e !== `/` && e !== `${t}/` ? e.slice(0, -1) : e;
}
function tt(e, t, n) {
  return et(e, n) === et(t, n);
}
function nt({ base: e, to: t, trailingSlash: n = `never`, cache: r }) {
  let i = t.startsWith(`/`),
    a = !i && t === `.`,
    o;
  if (r) {
    o = i ? t : a ? e : e + `\0` + t;
    let n = r.get(o);
    if (n) return n;
  }
  let s;
  if (a) s = e.split(`/`);
  else if (i) s = t.split(`/`);
  else {
    for (s = e.split(`/`); s.length > 1 && w(s) === ``;) s.pop();
    let n = t.split(`/`);
    for (let e = 0, t = n.length; e < t; e++) {
      let r = n[e];
      r === ``
        ? e
          ? e === t - 1 && s.push(r)
          : (s = [r])
        : r === `..`
          ? s.pop()
          : r === `.` || s.push(r);
    }
  }
  s.length > 1 &&
    (w(s) === `` ? n === `never` && s.pop() : n === `always` && s.push(``));
  let c = Xe(s.join(`/`)) || `/`;
  return (o && r && r.set(o, c), c);
}
function rt(e) {
  let t = new Map(e.map((e) => [encodeURIComponent(e), e])),
    n = Array.from(t.keys())
      .map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`))
      .join(`|`),
    r = new RegExp(n, `g`);
  return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function it(e, t, n) {
  let r = t[e];
  return typeof r == `string`
    ? e === `_splat`
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(r)
        ? r
        : r
            .split(`/`)
            .map((e) => ot(e, n))
            .join(`/`)
      : ot(r, n)
    : r;
}
function at({ path: e, params: t, decoder: n, ...r }) {
  let i = !1,
    a = Object.create(null);
  if (!e || e === `/`)
    return { interpolatedPath: `/`, usedParams: a, isMissingParams: i };
  if (!e.includes(`$`))
    return { interpolatedPath: e, usedParams: a, isMissingParams: i };
  let o = e.length,
    s = 0,
    c,
    l = ``;
  for (; s < o;) {
    let r = s;
    c = k(e, r, c);
    let o = c[5];
    if (((s = o + 1), r === o)) continue;
    let u = c[0];
    if (u === 0) {
      l += `/` + e.substring(r, o);
      continue;
    }
    if (u === 2) {
      let s = t._splat;
      ((a._splat = s), (a[`*`] = s));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o);
      if (!s) {
        ((i = !0), (u || d) && (l += `/` + u + d));
        continue;
      }
      let f = it(`_splat`, t, n);
      l += `/` + u + f + d;
      continue;
    }
    if (u === 1) {
      let s = e.substring(c[2], c[3]);
      (!i && !(s in t) && (i = !0), (a[s] = t[s]));
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = it(s, t, n) ?? `undefined`;
      l += `/` + u + f + d;
      continue;
    }
    if (u === 3) {
      let i = e.substring(c[2], c[3]),
        s = t[i];
      if (s == null) continue;
      a[i] = s;
      let u = e.substring(r, c[1]),
        d = e.substring(c[4], o),
        f = it(i, t, n) ?? ``;
      l += `/` + u + f + d;
      continue;
    }
  }
  return (
    e.endsWith(`/`) && (l += `/`),
    { usedParams: a, interpolatedPath: l || `/`, isMissingParams: i }
  );
}
function ot(e, t) {
  let n = encodeURIComponent(e);
  return t?.(n) ?? n;
}
function A(e) {
  return e?.isNotFound === !0;
}
function st() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
var ct = `tsr-scroll-restoration-v1_3`,
  lt = st();
function ut() {
  try {
    return JSON.parse(lt?.getItem(`tsr-scroll-restoration-v1_3`) || `{}`);
  } catch {
    return {};
  }
}
function dt() {
  try {
    lt?.setItem(ct, JSON.stringify(ft));
  } catch {}
}
var ft = ut(),
  pt = `data-scroll-restoration-id`,
  mt = (e) => e.state.__TSR_key || e.href;
function ht(e) {
  let t = e.getAttribute(pt);
  if (t) return `[${pt}="${t}"]`;
  let n = ``,
    r = e,
    i;
  for (; (i = r.parentNode);) {
    let e = 1,
      t = r;
    for (; (t = t.previousElementSibling);) e++;
    let a = `${r.localName}:nth-child(${e})`;
    ((n = n ? `${a} > ${n}` : a), (r = i));
  }
  return n;
}
var gt = !1,
  _t = `window`;
function vt(e) {
  try {
    return typeof e == `function` ? e() : document.querySelector(e);
  } catch {}
}
function yt(e) {
  let t = new Set();
  for (let n of e) {
    if (n === _t) continue;
    let e = vt(n);
    e && t.add(e);
  }
  return t;
}
function bt(e, t) {
  let n = t ?? e.options.scrollRestoration,
    r = e._scroll;
  n && (r.restoring = !0);
  let i = e.options.getScrollRestorationKey || mt,
    a = new Set(),
    o = (e) => {
      let t = (ft[e] ||= {});
      for (let e of a)
        e === document
          ? (t[_t] = { scrollX, scrollY })
          : e.isConnected &&
            (t[ht(e)] = { scrollX: e.scrollLeft, scrollY: e.scrollTop });
    };
  (n &&
    !r.restoration &&
    ((r.restoration = !0),
    (gt = !1),
    (history.scrollRestoration = `manual`),
    document.addEventListener(
      `scroll`,
      (e) => {
        gt || a.add(e.target);
      },
      !0,
    ),
    e.subscribe(`onBeforeLoad`, (e) => {
      (e.fromLocation && o(i(e.fromLocation)), a.clear());
    }),
    addEventListener(`pagehide`, () => {
      (o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), dt());
    })),
    !r.reset &&
      ((r.reset = !0),
      e.subscribe(`onRendered`, (t) => {
        let n = e.options.scrollRestorationBehavior,
          o = e.options.scrollToTopSelectors,
          s = r.next,
          c = r.hash,
          l;
        if (
          (a.clear(),
          (r.next = !0),
          (r.hash = !1),
          typeof e.options.scrollRestoration == `function` &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        let u = i(t.toLocation),
          d = t.fromLocation && i(t.fromLocation);
        if (r.restoring && d && d !== u) {
          let e = ft[d];
          if (e) {
            let t = ft[u];
            for (let n in e) {
              if (n === _t) {
                if (s) continue;
              } else {
                let e = vt(n);
                if (!e || (s && o && ((l ??= yt(o)), l.has(e)))) continue;
              }
              ((t ||= ft[u] = {}), (t[n] ??= e[n]));
            }
          }
        }
        gt = !0;
        try {
          let e = t.toLocation.hash,
            i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0,
            a = !1;
          if (s) {
            !e && o && (l ??= yt(o));
            let t = e && i && c,
              s = r.restoring ? ft[u] : void 0;
            if (s)
              for (let e in s) {
                let { scrollX: r, scrollY: i } = s[e];
                if (e === _t) {
                  if (t) continue;
                  (scrollTo({ top: i, left: r, behavior: n }), (a = !0));
                } else {
                  let t = vt(e);
                  t && ((t.scrollLeft = r), (t.scrollTop = i), l?.delete(t));
                }
              }
            if (!e) {
              let e = { top: 0, left: 0, behavior: n };
              if ((a || scrollTo(e), l)) for (let t of l) t.scrollTo(e);
            }
          }
          !a && e && i && document.getElementById(e)?.scrollIntoView(i);
        } finally {
          gt = !1;
        }
      })));
}
function xt(e, t = String) {
  let n = new URLSearchParams();
  for (let r in e) {
    let i = e[r];
    i !== void 0 && n.set(r, t(i));
  }
  return n.toString();
}
function St(e) {
  return e
    ? e === `false`
      ? !1
      : e === `true`
        ? !0
        : e * 0 == 0 && +e + `` === e
          ? +e
          : e
    : ``;
}
function Ct(e) {
  let t = new URLSearchParams(e),
    n = Object.create(null);
  for (let [e, r] of t.entries()) {
    let t = n[e];
    t == null
      ? (n[e] = St(r))
      : Array.isArray(t)
        ? t.push(St(r))
        : (n[e] = [t, St(r)]);
  }
  return n;
}
var wt = Et(JSON.parse),
  Tt = Dt(JSON.stringify, JSON.parse);
function Et(e) {
  return (t) => {
    t[0] === `?` && (t = t.substring(1));
    let n = Ct(t);
    for (let t in n) {
      let r = n[t];
      if (typeof r == `string`)
        try {
          n[t] = e(r);
        } catch {}
    }
    return n;
  };
}
function Dt(e, t) {
  let n = typeof t == `function`;
  function r(r) {
    if (typeof r == `object` && r)
      try {
        return e(r);
      } catch {}
    else if (n && typeof r == `string`)
      try {
        return (t(r), e(r));
      } catch {}
    return r;
  }
  return (e) => {
    let t = xt(e, r);
    return t ? `?${t}` : ``;
  };
}
var Ot = `__root__`;
function kt(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == `string`)
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  let t = new Headers(e.headers);
  e.href && t.get(`Location`) === null && t.set(`Location`, e.href);
  let n = new Response(null, { status: e.statusCode, headers: t });
  if (((n.options = e), e.throw)) throw n;
  return n;
}
function j(e) {
  return e instanceof Response && !!e.options;
}
function At(e) {
  if (typeof e == `object` && e && e.isSerializedRedirect) return kt(e);
}
function jt(e) {
  return {
    input: ({ url: t }) => {
      for (let n of e) t = Nt(n, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let n = e.length - 1; n >= 0; n--) t = Pt(e[n], t);
      return t;
    },
  };
}
function Mt(e) {
  let t = $e(e.basepath),
    n = `/${t}`,
    r = e.caseSensitive ? n : n.toLowerCase(),
    i = `${r}/`;
  return {
    input: ({ url: t }) => {
      let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
      return (
        a === r
          ? (t.pathname = `/`)
          : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)),
        t
      );
    },
    output: ({ url: e }) => ((e.pathname = Ye([`/`, t, e.pathname])), e),
  };
}
function Nt(e, t) {
  let n = e?.input?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Pt(e, t) {
  let n = e?.output?.({ url: t });
  if (n) {
    if (typeof n == `string`) return new URL(n);
    if (n instanceof URL) return n;
  }
  return t;
}
function Ft(e, t) {
  let { createMutableStore: n, createReadonlyStore: r, batch: i, init: a } = t,
    o = new Map(),
    s = new Map(),
    c = new Map(),
    l = n(e.status),
    u = n(e.loadedAt),
    d = n(e.isLoading),
    f = n(e.isTransitioning),
    p = n(e.location),
    m = n(e.resolvedLocation),
    h = n(e.statusCode),
    g = n(e.redirect),
    _ = n([]),
    v = n([]),
    y = n([]),
    b = r(() => It(o, _.get())),
    x = r(() => It(s, v.get())),
    ee = r(() => It(c, y.get())),
    S = r(() => _.get()[0]),
    C = r(() => _.get().some((e) => o.get(e)?.get().status === `pending`)),
    w = r(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: m.get()?.href,
      status: l.get(),
    })),
    te = r(() => ({
      status: l.get(),
      loadedAt: u.get(),
      isLoading: d.get(),
      isTransitioning: f.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: m.get(),
      statusCode: h.get(),
      redirect: g.get(),
    })),
    T = Te(64);
  function ne(e) {
    let t = T.get(e);
    return (
      t ||
        ((t = r(() => {
          let t = _.get();
          for (let n of t) {
            let t = o.get(n);
            if (t && t.routeId === e) return t.get();
          }
        })),
        T.set(e, t)),
      t
    );
  }
  let re = {
    status: l,
    loadedAt: u,
    isLoading: d,
    isTransitioning: f,
    location: p,
    resolvedLocation: m,
    statusCode: h,
    redirect: g,
    matchesId: _,
    pendingIds: v,
    cachedIds: y,
    matches: b,
    pendingMatches: x,
    cachedMatches: ee,
    firstId: S,
    hasPending: C,
    matchRouteDeps: w,
    matchStores: o,
    pendingMatchStores: s,
    cachedMatchStores: c,
    __store: te,
    getRouteMatchStore: ne,
    setMatches: ie,
    setPending: ae,
    setCached: oe,
  };
  (ie(e.matches), a?.(re));
  function ie(e) {
    Lt(e, o, _, n, i);
  }
  function ae(e) {
    Lt(e, s, v, n, i);
  }
  function oe(e) {
    Lt(e, c, y, n, i);
  }
  return re;
}
function It(e, t) {
  let n = [];
  for (let r of t) {
    let t = e.get(r);
    t && n.push(t.get());
  }
  return n;
}
function Lt(e, t, n, r, i) {
  let a = e.map((e) => e.id),
    o = new Set(a);
  i(() => {
    for (let e of t.keys()) o.has(e) || t.delete(e);
    for (let n of e) {
      let e = t.get(n.id);
      if (!e) {
        let e = r(n);
        ((e.routeId = n.routeId), t.set(n.id, e));
        continue;
      }
      ((e.routeId = n.routeId), e.get() !== n && e.set(n));
    }
    O(n.get(), a) || n.set(a);
  });
}
var Rt = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  zt = (e) =>
    e.stores.matchesId
      .get()
      .some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  Bt = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  Vt = (e, t, n = !0) => {
    let r = { ...(e.router.options.context ?? {}) },
      i = n ? t : t - 1;
    for (let t = 0; t <= i; t++) {
      let n = e.matches[t];
      if (!n) continue;
      let i = e.router.getMatch(n.id);
      i && Object.assign(r, i.__routeContext, i.__beforeLoadContext);
    }
    return r;
  },
  Ht = (e, t) => {
    if (!e.matches.length) return;
    let n = t.routeId,
      r = e.matches.findIndex((t) => t.routeId === e.router.routeTree.id),
      i = r >= 0 ? r : 0,
      a = n
        ? e.matches.findIndex((e) => e.routeId === n)
        : (e.firstBadMatchIndex ?? e.matches.length - 1);
    a < 0 && (a = i);
    for (let t = a; t >= 0; t--) {
      let n = e.matches[t];
      if (e.router.looseRoutesById[n.routeId].options.notFoundComponent)
        return t;
    }
    return n ? a : i;
  },
  Ut = (e, t, n) => {
    if (!(!j(n) && !A(n)))
      throw j(n) && n.redirectHandled && !n.options.reloadDocument
        ? n
        : (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = n),
            e.updateMatch(t.id, (r) => ({
              ...r,
              status: j(n)
                ? `redirected`
                : A(n)
                  ? `notFound`
                  : r.status === `pending`
                    ? `success`
                    : r.status,
              context: Vt(e, t.index),
              isFetching: !1,
              error: n,
            })),
            A(n) && !n.routeId && (n.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          j(n) &&
            ((e.rendered = !0),
            (n.options._fromLocation = e.location),
            (n.redirectHandled = !0),
            (n = e.router.resolveRedirect(n))),
          n);
  },
  Wt = (e, t) => {
    let n = e.router.getMatch(t);
    return !!(!n || n._nonReactive.dehydrated);
  },
  Gt = (e, t, n) => {
    let r = Vt(e, n);
    e.updateMatch(t, (e) => ({ ...e, context: r }));
  },
  Kt = (e, t, n) => {
    let { id: r, routeId: i } = e.matches[t],
      a = e.router.looseRoutesById[i];
    if (n instanceof Promise) throw n;
    ((e.firstBadMatchIndex ??= t), Ut(e, e.router.getMatch(r), n));
    try {
      a.options.onError?.(n);
    } catch (t) {
      ((n = t), Ut(e, e.router.getMatch(r), n));
    }
    (e.updateMatch(
      r,
      (e) => (
        e._nonReactive.beforeLoadPromise?.resolve(),
        (e._nonReactive.beforeLoadPromise = void 0),
        e._nonReactive.loadPromise?.resolve(),
        {
          ...e,
          error: n,
          status: `error`,
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !j(n) && !A(n) && (e.serialError ??= n));
  },
  qt = (e, t, n, r) => {
    if (r._nonReactive.pendingTimeout !== void 0) return;
    let i = n.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !Bt(e, t) &&
      (n.options.loader || n.options.beforeLoad || rn(n)) &&
      typeof i == `number` &&
      i !== 1 / 0 &&
      (n.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      let t = setTimeout(() => {
        Rt(e);
      }, i);
      r._nonReactive.pendingTimeout = t;
    }
  },
  Jt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r._nonReactive.beforeLoadPromise && !r._nonReactive.loaderPromise)
      return;
    qt(e, t, n, r);
    let i = () => {
      let n = e.router.getMatch(t);
      n.preload &&
        (n.status === `redirected` || n.status === `notFound`) &&
        Ut(e, n, n.error);
    };
    return r._nonReactive.beforeLoadPromise
      ? r._nonReactive.beforeLoadPromise.then(i)
      : i();
  },
  Yt = (e, t, n, r) => {
    let i = e.router.getMatch(t),
      a = i._nonReactive.loadPromise;
    i._nonReactive.loadPromise = fe(() => {
      (a?.resolve(), (a = void 0));
    });
    let { paramsError: o, searchError: s } = i;
    (o && Kt(e, n, o), s && Kt(e, n, s), qt(e, t, r, i));
    let c = new AbortController(),
      l = !1,
      u = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (e) => ({
            ...e,
            isFetching: `beforeLoad`,
            fetchCount: e.fetchCount + 1,
            abortController: c,
          })));
      },
      d = () => {
        (i._nonReactive.beforeLoadPromise?.resolve(),
          (i._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (e) => ({ ...e, isFetching: !1 })));
      };
    if (!r.options.beforeLoad) {
      e.router.batch(() => {
        (u(), d());
      });
      return;
    }
    i._nonReactive.beforeLoadPromise = fe();
    let f = { ...Vt(e, n, !1), ...i.__routeContext },
      { search: p, params: m, cause: h } = i,
      g = Bt(e, t),
      _ = {
        search: p,
        abortController: c,
        params: m,
        preload: g,
        context: f,
        location: e.location,
        navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: g ? `preload` : h,
        matches: e.matches,
        routeId: r.id,
        ...e.router.options.additionalContext,
      },
      v = (r) => {
        if (r === void 0) {
          e.router.batch(() => {
            (u(), d());
          });
          return;
        }
        ((j(r) || A(r)) && (u(), Kt(e, n, r)),
          e.router.batch(() => {
            (u(),
              e.updateMatch(t, (e) => ({ ...e, __beforeLoadContext: r })),
              d());
          }));
      },
      y;
    try {
      if (((y = r.options.beforeLoad(_)), me(y)))
        return (
          u(),
          y
            .catch((t) => {
              Kt(e, n, t);
            })
            .then(v)
        );
    } catch (t) {
      (u(), Kt(e, n, t));
    }
    v(y);
  },
  Xt = (e, t) => {
    let { id: n, routeId: r } = e.matches[t],
      i = e.router.looseRoutesById[r],
      a = () => s(),
      o = () => Yt(e, n, t, i),
      s = () => {
        if (Wt(e, n)) return;
        let t = Jt(e, n, i);
        return me(t) ? t.then(o) : o();
      };
    return a();
  },
  Zt = (e, t, n) => {
    let r = e.router.getMatch(t);
    if (!r || (!n.options.head && !n.options.scripts && !n.options.headers))
      return;
    let i = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: r,
      params: r.params,
      loaderData: r.loaderData,
    };
    return Promise.all([
      n.options.head?.(i),
      n.options.scripts?.(i),
      n.options.headers?.(i),
    ]).then(([e, t, n]) => ({
      meta: e?.meta,
      links: e?.links,
      headScripts: e?.scripts,
      headers: n,
      scripts: t,
      styles: e?.styles,
    }));
  },
  Qt = (e, t, n, r, i) => {
    let a = t[r - 1],
      {
        params: o,
        loaderDeps: s,
        abortController: c,
        cause: l,
      } = e.router.getMatch(n),
      u = Vt(e, r),
      d = Bt(e, n);
    return {
      params: o,
      deps: s,
      preload: !!d,
      parentMatchPromise: a,
      abortController: c,
      context: u,
      location: e.location,
      navigate: (t) => e.router.navigate({ ...t, _fromLocation: e.location }),
      cause: d ? `preload` : l,
      route: i,
      ...e.router.options.additionalContext,
    };
  },
  M = async (e, t, n, r, i) => {
    try {
      let a = e.router.getMatch(n);
      try {
        nn(i);
        let o = i.options.loader,
          s = typeof o == `function` ? o : o?.handler,
          c = s?.(Qt(e, t, n, r, i)),
          l = !!s && me(c);
        if (
          ((l ||
            i._lazyPromise ||
            i._componentsPromise ||
            i.options.head ||
            i.options.scripts ||
            i.options.headers ||
            a._nonReactive.minPendingPromise) &&
            e.updateMatch(n, (e) => ({ ...e, isFetching: `loader` })),
          s)
        ) {
          let t = l ? await c : c;
          (Ut(e, e.router.getMatch(n), t),
            t !== void 0 && e.updateMatch(n, (e) => ({ ...e, loaderData: t })));
        }
        i._lazyPromise && (await i._lazyPromise);
        let u = a._nonReactive.minPendingPromise;
        (u && (await u),
          i._componentsPromise && (await i._componentsPromise),
          e.updateMatch(n, (t) => ({
            ...t,
            error: void 0,
            context: Vt(e, r),
            status: `success`,
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (t) {
        let o = t;
        if (o?.name === `AbortError`) {
          if (a.abortController.signal.aborted) {
            (a._nonReactive.loaderPromise?.resolve(),
              (a._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(n, (t) => ({
            ...t,
            status: t.status === `pending` ? `success` : t.status,
            isFetching: !1,
            context: Vt(e, r),
          }));
          return;
        }
        let s = a._nonReactive.minPendingPromise;
        (s && (await s),
          A(t) && (await i.options.notFoundComponent?.preload?.()),
          Ut(e, e.router.getMatch(n), t));
        try {
          i.options.onError?.(t);
        } catch (t) {
          ((o = t), Ut(e, e.router.getMatch(n), t));
        }
        (!j(o) && !A(o) && (await nn(i, [`errorComponent`])),
          e.updateMatch(n, (t) => ({
            ...t,
            error: o,
            context: Vt(e, r),
            status: `error`,
            isFetching: !1,
          })));
      }
    } catch (t) {
      let r = e.router.getMatch(n);
      (r && (r._nonReactive.loaderPromise = void 0), Ut(e, r, t));
    }
  },
  $t = async (e, t, n) => {
    async function r(r, a, c, l, d) {
      let f = Date.now() - a.updatedAt,
        p = r
          ? (d.options.preloadStaleTime ??
            e.router.options.defaultPreloadStaleTime ??
            3e4)
          : (d.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        m = d.options.shouldReload,
        h = typeof m == `function` ? m(Qt(e, t, i, n, d)) : m,
        { status: g, invalid: _ } = l,
        v =
          f >= p &&
          (!!e.forceStaleReload ||
            l.cause === `enter` ||
            (c !== void 0 && c !== l.id));
      ((o = g === `success` && (_ || (h ?? v))),
        (r && d.options.preload === !1) ||
          (o && !e.sync && u
            ? ((s = !0),
              (async () => {
                try {
                  await M(e, t, i, n, d);
                  let r = e.router.getMatch(i);
                  (r._nonReactive.loaderPromise?.resolve(),
                    r._nonReactive.loadPromise?.resolve(),
                    (r._nonReactive.loaderPromise = void 0),
                    (r._nonReactive.loadPromise = void 0));
                } catch (t) {
                  j(t) && (await e.router.navigate(t.options));
                }
              })())
            : g !== `success` || o
              ? await M(e, t, i, n, d)
              : Gt(e, i, n)));
    }
    let { id: i, routeId: a } = e.matches[n],
      o = !1,
      s = !1,
      c = e.router.looseRoutesById[a],
      l = c.options.loader,
      u =
        ((typeof l == `function` ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== `blocking`;
    if (Wt(e, i)) {
      if (!e.router.getMatch(i)) return e.matches[n];
      Gt(e, i, n);
    } else {
      let t = e.router.getMatch(i),
        o = e.router.stores.matchesId.get()[n],
        s =
          ((o && e.router.stores.matchStores.get(o)) || null)?.routeId === a
            ? o
            : e.router.stores.matches.get().find((e) => e.routeId === a)?.id,
        l = Bt(e, i);
      if (t._nonReactive.loaderPromise) {
        if (t.status === `success` && !e.sync && !t.preload && u) return t;
        await t._nonReactive.loaderPromise;
        let n = e.router.getMatch(i),
          a = n._nonReactive.error || n.error;
        (a && Ut(e, n, a), n.status === `pending` && (await r(l, t, s, n, c)));
      } else {
        let n = l && !e.router.stores.matchStores.has(i),
          a = e.router.getMatch(i);
        ((a._nonReactive.loaderPromise = fe()),
          n !== a.preload && e.updateMatch(i, (e) => ({ ...e, preload: n })),
          await r(l, t, s, a, c));
      }
    }
    let d = e.router.getMatch(i);
    (s ||
      (d._nonReactive.loaderPromise?.resolve(),
      d._nonReactive.loadPromise?.resolve(),
      (d._nonReactive.loadPromise = void 0)),
      clearTimeout(d._nonReactive.pendingTimeout),
      (d._nonReactive.pendingTimeout = void 0),
      s || (d._nonReactive.loaderPromise = void 0),
      (d._nonReactive.dehydrated = void 0));
    let f = s ? d.isFetching : !1;
    return f !== d.isFetching || d.invalid !== !1
      ? (e.updateMatch(i, (e) => ({ ...e, isFetching: f, invalid: !1 })),
        e.router.getMatch(i))
      : d;
  };
async function en(e) {
  let t = e,
    n = [];
  zt(t.router) && Rt(t);
  let r;
  for (let e = 0; e < t.matches.length; e++) {
    try {
      let n = Xt(t, e);
      me(n) && (await n);
    } catch (e) {
      if (j(e)) throw e;
      if (A(e)) r = e;
      else if (!t.preload) throw e;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  let i = t.firstBadMatchIndex ?? t.matches.length,
    a = r && !t.preload ? Ht(t, r) : void 0,
    o = r && t.preload ? 0 : a === void 0 ? i : Math.min(a + 1, i),
    s,
    c;
  for (let e = 0; e < o; e++) n.push($t(t, n, e));
  try {
    await Promise.all(n);
  } catch {
    let e = await Promise.allSettled(n);
    for (let t of e) {
      if (t.status !== `rejected`) continue;
      let e = t.reason;
      if (j(e)) throw e;
      A(e) ? (s ??= e) : (c ??= e);
    }
    if (c !== void 0) throw c;
  }
  let l = s ?? (r && !t.preload ? r : void 0),
    u =
      t.firstBadMatchIndex === void 0
        ? t.matches.length - 1
        : t.firstBadMatchIndex;
  if (!l && r && t.preload) return t.matches;
  if (l) {
    let e = Ht(t, l);
    e === void 0 && we();
    let n = t.matches[e],
      r = t.router.looseRoutesById[n.routeId],
      i = t.router.options?.defaultNotFoundComponent;
    (!r.options.notFoundComponent && i && (r.options.notFoundComponent = i),
      (l.routeId = n.routeId));
    let a = n.routeId === t.router.routeTree.id;
    (t.updateMatch(n.id, (e) => ({
      ...e,
      ...(a
        ? { status: `success`, globalNotFound: !0, error: void 0 }
        : { status: `notFound`, error: l }),
      isFetching: !1,
    })),
      (u = e),
      await nn(r, [`notFoundComponent`]));
  } else if (!t.preload) {
    let e = t.matches[0];
    e.globalNotFound ||
      (t.router.getMatch(e.id)?.globalNotFound &&
        t.updateMatch(e.id, (e) => ({
          ...e,
          globalNotFound: !1,
          error: void 0,
        })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    let e = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await nn(e, [`errorComponent`]);
  }
  for (let e = 0; e <= u; e++) {
    let { id: n, routeId: r } = t.matches[e],
      i = t.router.looseRoutesById[r];
    try {
      let e = Zt(t, n, i);
      if (e) {
        let r = await e;
        t.updateMatch(n, (e) => ({ ...e, ...r }));
      }
    } catch (e) {
      console.error(`Error executing head for route ${r}:`, e);
    }
  }
  let d = Rt(t);
  if ((me(d) && (await d), l)) throw l;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function tn(e, t) {
  let n = t.map((t) => e.options[t]?.preload?.()).filter(Boolean);
  if (n.length !== 0) return Promise.all(n);
}
function nn(e, t = an) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((t) => {
          let { id: n, ...r } = t.options;
          (Object.assign(e.options, r),
            (e._lazyLoaded = !0),
            (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  let n = () =>
    e._componentsLoaded
      ? void 0
      : t === an
        ? (() => {
            if (e._componentsPromise === void 0) {
              let t = tn(e, an);
              t
                ? (e._componentsPromise = t.then(() => {
                    ((e._componentsLoaded = !0),
                      (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : tn(e, t);
  return e._lazyPromise ? e._lazyPromise.then(n) : n();
}
function rn(e) {
  for (let t of an) if (e.options[t]?.preload) return !0;
  return !1;
}
var an = [
    `component`,
    `errorComponent`,
    `pendingComponent`,
    `notFoundComponent`,
  ],
  on = `__TSR_index`,
  sn = `popstate`,
  cn = `beforeunload`;
function ln(e) {
  let t = e.getLocation(),
    n = new Set(),
    r = (r) => {
      ((t = e.getLocation()), n.forEach((e) => e({ location: t, action: r })));
    },
    i = (n) => {
      (e.notifyOnIndexChange ?? !0) ? r(n) : (t = e.getLocation());
    },
    a = async ({ task: n, navigateOpts: r, ...i }) => {
      if (r?.ignoreBlocker ?? !1) {
        n();
        return;
      }
      let a = e.getBlockers?.() ?? [],
        o = i.type === `PUSH` || i.type === `REPLACE`;
      if (typeof document < `u` && a.length && o)
        for (let n of a) {
          let r = pn(i.path, i.state);
          if (
            await n.blockerFn({
              currentLocation: t,
              nextLocation: r,
              action: i.type,
            })
          ) {
            e.onBlocked?.();
            return;
          }
        }
      n();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: n,
    subscribe: (e) => (
      n.add(e),
      () => {
        n.delete(e);
      }
    ),
    push: (n, i, o) => {
      let s = t.state[on];
      ((i = un(s + 1, i)),
        a({
          task: () => {
            (e.pushState(n, i), r({ type: `PUSH` }));
          },
          navigateOpts: o,
          type: `PUSH`,
          path: n,
          state: i,
        }));
    },
    replace: (n, i, o) => {
      let s = t.state[on];
      ((i = un(s, i)),
        a({
          task: () => {
            (e.replaceState(n, i), r({ type: `REPLACE` }));
          },
          navigateOpts: o,
          type: `REPLACE`,
          path: n,
          state: i,
        }));
    },
    go: (t, n) => {
      a({
        task: () => {
          (e.go(t), i({ type: `GO`, index: t }));
        },
        navigateOpts: n,
        type: `GO`,
      });
    },
    back: (t) => {
      a({
        task: () => {
          (e.back(t?.ignoreBlocker ?? !1), i({ type: `BACK` }));
        },
        navigateOpts: t,
        type: `BACK`,
      });
    },
    forward: (t) => {
      a({
        task: () => {
          (e.forward(t?.ignoreBlocker ?? !1), i({ type: `FORWARD` }));
        },
        navigateOpts: t,
        type: `FORWARD`,
      });
    },
    canGoBack: () => t.state[on] !== 0,
    createHref: (t) => e.createHref(t),
    block: (t) => {
      if (!e.setBlockers) return () => {};
      let n = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...n, t]),
        () => {
          let n = e.getBlockers?.() ?? [];
          e.setBlockers?.(n.filter((e) => e !== t));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: r,
  };
}
function un(e, t) {
  t ||= {};
  let n = mn();
  return { ...t, key: n, __TSR_key: n, [on]: e };
}
function dn(e) {
  let t = e?.window ?? (typeof document < `u` ? window : void 0),
    n = t.history.pushState,
    r = t.history.replaceState,
    i = [],
    a = () => i,
    o = (e) => (i = e),
    s = e?.createHref ?? ((e) => e),
    c =
      e?.parseLocation ??
      (() =>
        pn(
          `${t.location.pathname}${t.location.search}${t.location.hash}`,
          t.history.state,
        ));
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    let e = mn();
    t.history.replaceState({ [on]: 0, key: e, __TSR_key: e }, ``);
  }
  let l = c(),
    u,
    d = !1,
    f = !1,
    p = !1,
    m = !1,
    h = () => l,
    g,
    _,
    v = () => {
      g &&
        ((S._ignoreSubscribers = !0),
        (g.isPush ? t.history.pushState : t.history.replaceState)(
          g.state,
          ``,
          g.href,
        ),
        (S._ignoreSubscribers = !1),
        (g = void 0),
        (_ = void 0),
        (u = void 0));
    },
    y = (e, t, n) => {
      let r = s(t);
      (_ || (u = l),
        (l = pn(t, n)),
        (g = { href: r, state: n, isPush: g?.isPush || e === `push` }),
        (_ ||= Promise.resolve().then(() => v())));
    },
    b = (e) => {
      ((l = c()), S.notify({ type: e }));
    },
    x = async () => {
      if (f) {
        f = !1;
        return;
      }
      let e = c(),
        n = e.state[on] - l.state[on],
        r = n === 1,
        i = n === -1,
        o = (!r && !i) || d;
      d = !1;
      let s = o ? `GO` : i ? `BACK` : `FORWARD`,
        u = o ? { type: `GO`, index: n } : { type: i ? `BACK` : `FORWARD` };
      if (p) p = !1;
      else {
        let n = a();
        if (typeof document < `u` && n.length) {
          for (let r of n)
            if (
              await r.blockerFn({
                currentLocation: l,
                nextLocation: e,
                action: s,
              })
            ) {
              ((f = !0), t.history.go(1), S.notify(u));
              return;
            }
        }
      }
      ((l = c()), S.notify(u));
    },
    ee = (e) => {
      if (m) {
        m = !1;
        return;
      }
      let t = !1,
        n = a();
      if (typeof document < `u` && n.length)
        for (let e of n) {
          let n = e.enableBeforeUnload ?? !0;
          if (n === !0) {
            t = !0;
            break;
          }
          if (typeof n == `function` && n() === !0) {
            t = !0;
            break;
          }
        }
      if (t) return (e.preventDefault(), (e.returnValue = ``));
    },
    S = ln({
      getLocation: h,
      getLength: () => t.history.length,
      pushState: (e, t) => y(`push`, e, t),
      replaceState: (e, t) => y(`replace`, e, t),
      back: (e) => (e && (p = !0), (m = !0), t.history.back()),
      forward: (e) => {
        (e && (p = !0), (m = !0), t.history.forward());
      },
      go: (e) => {
        ((d = !0), t.history.go(e));
      },
      createHref: (e) => s(e),
      flush: v,
      destroy: () => {
        ((t.history.pushState = n),
          (t.history.replaceState = r),
          t.removeEventListener(cn, ee, { capture: !0 }),
          t.removeEventListener(sn, x));
      },
      onBlocked: () => {
        u && l !== u && (l = u);
      },
      getBlockers: a,
      setBlockers: o,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(cn, ee, { capture: !0 }),
    t.addEventListener(sn, x),
    (t.history.pushState = function (...e) {
      let r = n.apply(t.history, e);
      return (S._ignoreSubscribers || b(`PUSH`), r);
    }),
    (t.history.replaceState = function (...e) {
      let n = r.apply(t.history, e);
      return (S._ignoreSubscribers || b(`REPLACE`), n);
    }),
    S
  );
}
function fn(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, ``);
  return (t.startsWith(`//`) && (t = `/` + t.replace(/^\/+/, ``)), t);
}
function pn(e, t) {
  let n = fn(e),
    r = n.indexOf(`#`),
    i = n.indexOf(`?`),
    a = mn();
  return {
    href: n,
    pathname: n.substring(
      0,
      r > 0 ? (i > 0 ? Math.min(r, i) : r) : i > 0 ? i : n.length,
    ),
    hash: r > -1 ? n.substring(r) : ``,
    search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : ``,
    state: t || { [on]: 0, key: a, __TSR_key: a },
  };
}
function mn() {
  return (Math.random() + 1).toString(36).substring(7);
}
function hn(e) {
  return e instanceof Error
    ? { name: e.name, message: e.message }
    : { data: e };
}
function gn(e, t) {
  let n = t,
    r = e;
  return {
    fromLocation: n,
    toLocation: r,
    pathChanged: n?.pathname !== r.pathname,
    hrefChanged: n?.href !== r.href,
    hashChanged: n?.hash !== r.hash,
  };
}
var _n = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.lightweightCache = new WeakMap()),
        (this.startTransition = (e) => e()),
        (this.update = (e) => {
          let t = this.options,
            n = this.basepath ?? t?.basepath ?? `/`,
            r = this.basepath === void 0,
            i = t?.rewrite;
          if (
            ((this.options = { ...t, ...e }),
            (this.isServer = this.options.isServer ?? typeof document > `u`),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = rt(
                this.options.pathParamsAllowedCharacters,
              )),
            (!this.history ||
              (this.options.history &&
                this.options.history !== this.history)) &&
              (this.history = this.options.history
                ? this.options.history
                : dn()),
            (this.origin = this.options.origin),
            (this.origin ||=
              window?.origin && window.origin !== `null`
                ? window.origin
                : `http://localhost`),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let e;
            ((this.resolvePathCache = Te(1e3)),
              (e = this.buildRouteTree()),
              this.setRoutes(e));
          }
          if (!this.stores && this.latestLocation) {
            let e = this.getStoreConfig(this);
            ((this.batch = e.batch),
              (this.stores = Ft(bn(this.latestLocation), e)),
              bt(this));
          }
          let a = !1,
            o = this.options.basepath ?? `/`,
            s = this.options.rewrite;
          if (r || n !== o || i !== s) {
            this.basepath = o;
            let e = [],
              t = $e(o);
            (t && t !== `/` && e.push(Mt({ basepath: o })),
              s && e.push(s),
              (this.rewrite =
                e.length === 0 ? void 0 : e.length === 1 ? e[0] : jt(e)),
              this.history && this.updateLatestLocation(),
              (a = !0));
          }
          (a && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < `u` &&
              `CSS` in window &&
              typeof window.CSS?.supports == `function` &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                `selector(:active-view-transition-type(a))`,
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(
            this.history.location,
            this.latestLocation,
          );
        }),
        (this.buildRouteTree = () => {
          let e = ze(this.routeTree, this.options.caseSensitive, (e, t) => {
            e.init({ originalIndex: t });
          });
          return (
            this.options.routeMasks &&
              Pe(this.options.routeMasks, e.processedTree),
            e
          );
        }),
        (this.subscribe = (e, t) => {
          let n = { eventType: e, fn: t };
          return (
            this.subscribers.add(n),
            () => {
              this.subscribers.delete(n);
            }
          );
        }),
        (this.emit = (e) => {
          this.subscribers.forEach((t) => {
            t.eventType === e.type && t.fn(e);
          });
        }),
        (this.parseLocation = (e, t) => {
          let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
                let i = this.options.parseSearch(n),
                  o = this.options.stringifySearch(i);
                return {
                  href: e + o + r,
                  publicHref: e + o + r,
                  pathname: Ce(e).path,
                  external: !1,
                  searchStr: o,
                  search: oe(t?.search, i),
                  hash: Ce(r.slice(1)).path,
                  state: se(t?.state, a),
                };
              }
              let o = new URL(i, this.origin),
                s = Nt(this.rewrite, o),
                c = this.options.parseSearch(s.search),
                l = this.options.stringifySearch(c);
              return (
                (s.search = l),
                {
                  href: s.href.replace(s.origin, ``),
                  publicHref: i,
                  pathname: Ce(s.pathname).path,
                  external: !!this.rewrite && s.origin !== this.origin,
                  searchStr: l,
                  search: oe(t?.search, c),
                  hash: Ce(s.hash.slice(1)).path,
                  state: se(t?.state, a),
                }
              );
            },
            r = n(e),
            { __tempLocation: i, __tempKey: a } = r.state;
          if (i && (!a || a === this.tempLocationKey)) {
            let e = n(i);
            return (
              (e.state.key = r.state.key),
              (e.state.__TSR_key = r.state.__TSR_key),
              delete e.state.__tempLocation,
              { ...e, maskedLocation: r }
            );
          }
          return r;
        }),
        (this.resolvePathWithBase = (e, t) =>
          nt({
            base: e,
            to: t.includes(`//`) ? Xe(t) : t,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (e, t, n) =>
          typeof e == `string`
            ? this.matchRoutesInternal({ pathname: e, search: t }, n)
            : this.matchRoutesInternal(e, t)),
        (this.getMatchedRoutes = (e) =>
          Sn({
            pathname: e,
            routesById: this.routesById,
            processedTree: this.processedTree,
          })),
        (this.cancelMatch = (e) => {
          let t = this.getMatch(e);
          t &&
            (t.abortController.abort(),
            clearTimeout(t._nonReactive.pendingTimeout),
            (t._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((e) => {
            this.cancelMatch(e);
          }),
            this.stores.matchesId.get().forEach((e) => {
              if (this.stores.pendingMatchStores.has(e)) return;
              let t = this.stores.matchStores.get(e)?.get();
              t &&
                (t.status === `pending` || t.isFetching === `loader`) &&
                this.cancelMatch(e);
            }));
        }),
        (this.buildLocation = (e) => {
          let t = (t = {}) => {
              let n =
                  t._fromLocation ||
                  this.pendingBuiltLocation ||
                  this.latestLocation,
                r = this.matchRoutesLightweight(n);
              t.from;
              let i =
                  t.unsafeRelative === `path`
                    ? n.pathname
                    : (t.from ?? r.fullPath),
                a = t.to ? `${t.to}` : void 0,
                o = r.search,
                s = Object.assign(Object.create(null), r.params),
                c =
                  a?.charCodeAt(0) === 47
                    ? `/`
                    : this.resolvePathWithBase(i, `.`),
                l = a ? this.resolvePathWithBase(c, a) : c,
                u =
                  t.params === !1 || t.params === null
                    ? Object.create(null)
                    : (t.params ?? !0) === !0
                      ? s
                      : Object.assign(s, T(t.params, s)),
                d = this.routesByPath[Qe(l)],
                f;
              if (d) f = this.getRouteBranch(d);
              else if (l.includes(`$`)) f = [];
              else {
                let e = this.getMatchedRoutes(l);
                ((f = e.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!e.foundRoute ||
                      (e.foundRoute.path !== `/` && e.routeParams[`**`])) &&
                    (f = [...f, this.options.notFoundRoute]));
              }
              if (f.length && ie(u))
                for (let e of f) {
                  let t =
                    e.options.params?.stringify ?? e.options.stringifyParams;
                  if (t)
                    try {
                      Object.assign(u, t(u));
                    } catch {}
                }
              let p = e.leaveParams
                  ? l
                  : Ce(
                      at({
                        path: l,
                        params: u,
                        decoder: this.pathParamsDecoder,
                        server: this.isServer,
                      }).interpolatedPath,
                    ).path,
                m = o;
              if (e._includeValidateSearch && this.options.search?.strict) {
                let e = {};
                (f.forEach((t) => {
                  if (t.options.validateSearch)
                    try {
                      Object.assign(
                        e,
                        xn(t.options.validateSearch, { ...e, ...m }),
                      );
                    } catch {}
                }),
                  (m = e));
              }
              ((m = Cn({
                search: m,
                dest: t,
                destRoutes: f,
                _includeValidateSearch: e._includeValidateSearch,
              })),
                (m = oe(o, m)));
              let h = this.options.stringifySearch(m),
                g =
                  t.hash === !0 ? n.hash : t.hash ? T(t.hash, n.hash) : void 0,
                _ = g ? `#${g}` : ``,
                v =
                  t.state === !0 ? n.state : t.state ? T(t.state, n.state) : {};
              v = se(n.state, v);
              let y = `${p}${h}${_}`,
                b,
                x,
                ee = !1;
              if (this.rewrite) {
                let e = new URL(y, this.origin),
                  t = Pt(this.rewrite, e);
                ((b = e.href.replace(e.origin, ``)),
                  t.origin === this.origin
                    ? (x = t.pathname + t.search + t.hash)
                    : ((x = t.href), (ee = !0)));
              } else ((b = D(y)), (x = b));
              return {
                publicHref: x,
                href: b,
                pathname: p,
                search: m,
                searchStr: h,
                state: v,
                hash: g ?? ``,
                external: ee,
                unmaskOnReload: t.unmaskOnReload,
              };
            },
            n = (n = {}, r) => {
              let i = t(n),
                a = r ? t(r) : void 0;
              if (!a) {
                let n = Object.create(null);
                if (this.options.routeMasks) {
                  let o = Fe(i.pathname, this.processedTree);
                  if (o) {
                    Object.assign(n, o.rawParams);
                    let { from: i, params: s, ...c } = o.route,
                      l =
                        s === !1 || s === null
                          ? Object.create(null)
                          : (s ?? !0) === !0
                            ? n
                            : Object.assign(n, T(s, n));
                    ((r = { from: e.from, ...c, params: l }), (a = t(r)));
                  }
                }
              }
              return (a && (i.maskedLocation = a), i);
            };
          return e.mask ? n(e, { from: e.from, ...e.mask }) : n(e);
        }),
        (this.commitLocation = async ({
          viewTransition: e,
          ignoreBlocker: t,
          ...n
        }) => {
          let r,
            i = () => {
              let e = [
                `key`,
                `__TSR_key`,
                `__TSR_index`,
                `__hashScrollIntoViewOptions`,
              ];
              e.forEach((e) => {
                n.state[e] = this.latestLocation.state[e];
              });
              let t = de(n.state, this.latestLocation.state);
              return (
                e.forEach((e) => {
                  delete n.state[e];
                }),
                t
              );
            },
            a = Qe(this.latestLocation.href) === Qe(n.href),
            o = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = fe(() => {
              (o?.resolve(), (o = void 0));
            })),
            a && i())
          )
            this.load();
          else {
            let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
            (i &&
              ((o = {
                ...i,
                state: {
                  ...i.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...o,
                    search: o.searchStr,
                    state: {
                      ...o.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (o.state.__tempKey = this.tempLocationKey)),
              (o.state.__hashScrollIntoViewOptions =
                a ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = e),
              (r = n.replace ? `REPLACE` : `PUSH`),
              this.history[r === `REPLACE` ? `replace` : `push`](
                o.publicHref,
                o.state,
                { ignoreBlocker: t },
              ));
          }
          return (
            (this._scroll.next = n.resetScroll ?? !0),
            this.history.subscribers.size ||
              this.load(r ? { action: { type: r } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: e,
          resetScroll: t,
          hashScrollIntoView: n,
          viewTransition: r,
          ignoreBlocker: i,
          href: a,
          ...o
        } = {}) => {
          if (a) {
            let t = this.history.location.state.__TSR_index,
              n = pn(a, { __TSR_index: e ? t : t + 1 }),
              r = new URL(n.pathname, this.origin);
            ((o.to = Nt(this.rewrite, r).pathname),
              (o.search = this.options.parseSearch(n.search)),
              (o.hash = n.hash.slice(1)));
          }
          let s = this.buildLocation({ ...o, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = s;
          let c = this.commitLocation({
            ...s,
            viewTransition: r,
            replace: e,
            resetScroll: t,
            hashScrollIntoView: n,
            ignoreBlocker: i,
          });
          return (
            queueMicrotask(() => {
              this.pendingBuiltLocation === s &&
                (this.pendingBuiltLocation = void 0);
            }),
            c
          );
        }),
        (this.navigate = async ({
          to: e,
          reloadDocument: t,
          href: n,
          publicHref: r,
          ...i
        }) => {
          let a = !1;
          if (n)
            try {
              (new URL(`${n}`), (a = !0));
            } catch {}
          if ((a && !t && (t = !0), t)) {
            if (e !== void 0 || !n) {
              let t = this.buildLocation({ to: e, ...i });
              ((n ??= t.publicHref), (r ??= t.publicHref));
            }
            let t = !a && r ? r : n;
            if (ye(t, this.protocolAllowlist)) return;
            if (!i.ignoreBlocker) {
              let e = this.history.getBlockers?.() ?? [];
              for (let t of e)
                if (
                  t?.blockerFn &&
                  (await t.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: `PUSH`,
                  }))
                )
                  return;
            }
            i.replace ? window.location.replace(t) : (window.location.href = t);
            return;
          }
          return this.buildAndCommitLocation({
            ...i,
            href: n,
            to: e,
            _isNavigate: !0,
          });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          let e = this.matchRoutes(this.latestLocation),
            t = this.stores.cachedMatches
              .get()
              .filter((t) => !e.some((e) => e.id === t.id));
          this.batch(() => {
            (this.stores.status.set(`pending`),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(e),
              this.stores.setCached(t));
          });
        }),
        (this.load = async (e) => {
          let t = e?.action?.type,
            n,
            r,
            i,
            a =
              this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((o) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    t && (this._scroll.hash = t === `PUSH` || t === `REPLACE`));
                  let n = this.latestLocation,
                    r = gn(n, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() ||
                    this.emit({ type: `onBeforeNavigate`, ...r }),
                    this.emit({ type: `onBeforeLoad`, ...r }),
                    await en({
                      router: this,
                      sync: e?.sync,
                      forceStaleReload: a.href === n.href,
                      matches: this.stores.pendingMatches.get(),
                      location: n,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let e = null,
                              t = null,
                              n = null,
                              r = null;
                            this.batch(() => {
                              let i = this.stores.pendingMatches.get(),
                                a = i.length,
                                o = this.stores.matches.get();
                              e = a
                                ? o.filter(
                                    (e) =>
                                      !this.stores.pendingMatchStores.has(e.id),
                                  )
                                : null;
                              let s = new Set();
                              for (let e of this.stores.pendingMatchStores.values())
                                e.routeId && s.add(e.routeId);
                              let c = new Set();
                              for (let e of this.stores.matchStores.values())
                                e.routeId && c.add(e.routeId);
                              ((t = a
                                ? o.filter((e) => !s.has(e.routeId))
                                : null),
                                (n = a
                                  ? i.filter((e) => !c.has(e.routeId))
                                  : null),
                                (r = a ? i.filter((e) => c.has(e.routeId)) : o),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                a &&
                                  (this.stores.setMatches(i),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...e.filter(
                                      (e) =>
                                        e.status !== `error` &&
                                        e.status !== `notFound` &&
                                        e.status !== `redirected`,
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (let [e, i] of [
                              [t, `onLeave`],
                              [n, `onEnter`],
                              [r, `onStay`],
                            ])
                              if (e)
                                for (let t of e)
                                  this.looseRoutesById[t.routeId].options[i]?.(
                                    t,
                                  );
                          });
                        });
                      },
                    }));
                } catch (e) {
                  j(e)
                    ? ((n = e),
                      this.navigate({
                        ...n.options,
                        replace: !0,
                        ignoreBlocker: !0,
                      }))
                    : A(e) && (r = e);
                  let t = n
                    ? n.status
                    : r
                      ? 404
                      : this.stores.matches
                            .get()
                            .some((e) => e.status === `error`)
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(t),
                      this.stores.redirect.set(n));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  o());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let o;
          (this.hasNotFoundMatch()
            ? (o = 404)
            : this.stores.matches.get().some((e) => e.status === `error`) &&
              (o = 500),
            o !== void 0 && this.stores.statusCode.set(o));
        }),
        (this.startViewTransition = (e) => {
          let t =
            this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            t &&
              typeof document < `u` &&
              `startViewTransition` in document &&
              typeof document.startViewTransition == `function`)
          ) {
            let n;
            if (typeof t == `object` && this.isViewTransitionTypesSupported) {
              let r = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                a = typeof t.types == `function` ? t.types(gn(r, i)) : t.types;
              if (a === !1) {
                e();
                return;
              }
              n = { update: e, types: a };
            } else n = e;
            document.startViewTransition(n);
          } else e();
        }),
        (this.updateMatch = (e, t) => {
          this.startTransition(() => {
            let n = this.stores.pendingMatchStores.get(e);
            if (n) {
              n.set(t);
              return;
            }
            let r = this.stores.matchStores.get(e);
            if (r) {
              r.set(t);
              return;
            }
            let i = this.stores.cachedMatchStores.get(e);
            if (i) {
              let n = t(i.get());
              n.status === `redirected`
                ? this.stores.cachedMatchStores.delete(e) &&
                  this.stores.cachedIds.set((t) => t.filter((t) => t !== e))
                : i.set(n);
            }
          });
        }),
        (this.getMatch = (e) =>
          this.stores.cachedMatchStores.get(e)?.get() ??
          this.stores.pendingMatchStores.get(e)?.get() ??
          this.stores.matchStores.get(e)?.get()),
        (this.invalidate = (e) => {
          let t = (t) =>
            (e?.filter?.(t) ?? !0)
              ? {
                  ...t,
                  invalid: !0,
                  ...(e?.forcePending ||
                  t.status === `error` ||
                  t.status === `notFound`
                    ? { status: `pending`, error: void 0 }
                    : void 0),
                }
              : t;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(t)),
                this.stores.setCached(this.stores.cachedMatches.get().map(t)),
                this.stores.setPending(
                  this.stores.pendingMatches.get().map(t),
                ));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: e?.sync })
          );
        }),
        (this.getParsedLocationHref = (e) => e.publicHref || `/`),
        (this.resolveRedirect = (e) => {
          let t = e.headers.get(`Location`);
          if (!e.options.href || e.options._builtLocation) {
            let t = e.options._builtLocation ?? this.buildLocation(e.options),
              n = this.getParsedLocationHref(t);
            ((e.options.href = n), e.headers.set(`Location`, n));
          } else if (t)
            try {
              let n = new URL(t);
              if (this.origin && n.origin === this.origin) {
                let t = n.pathname + n.search + n.hash;
                ((e.options.href = t), e.headers.set(`Location`, t));
              }
            } catch {}
          if (
            e.options.href &&
            !e.options._builtLocation &&
            ye(e.options.href, this.protocolAllowlist)
          )
            throw Error(`Redirect blocked: unsafe protocol`);
          return (
            e.headers.get(`Location`) ||
              e.headers.set(`Location`, e.options.href),
            e
          );
        }),
        (this.clearCache = (e) => {
          let t = e?.filter;
          t === void 0
            ? this.stores.setCached([])
            : this.stores.setCached(
                this.stores.cachedMatches.get().filter((e) => !t(e)),
              );
        }),
        (this.clearExpiredCache = () => {
          let e = Date.now();
          this.clearCache({
            filter: (t) => {
              let n = this.looseRoutesById[t.routeId];
              if (!n.options.loader) return !0;
              let r =
                (t.preload
                  ? (n.options.preloadGcTime ??
                    this.options.defaultPreloadGcTime)
                  : (n.options.gcTime ?? this.options.defaultGcTime)) ?? 3e5;
              return t.status === `error` || e - t.updatedAt >= r;
            },
          });
        }),
        (this.loadRouteChunk = nn),
        (this.preloadRoute = async (e) => {
          let t = e._builtLocation ?? this.buildLocation(e),
            n = this.matchRoutes(t, { throwOnError: !0, preload: !0, dest: e }),
            r = new Set([
              ...this.stores.matchesId.get(),
              ...this.stores.pendingIds.get(),
            ]),
            i = new Set([...r, ...this.stores.cachedIds.get()]),
            a = n.filter((e) => !i.has(e.id));
          if (a.length) {
            let e = this.stores.cachedMatches.get();
            this.stores.setCached([...e, ...a]);
          }
          try {
            return (
              (n = await en({
                router: this,
                matches: n,
                location: t,
                preload: !0,
                updateMatch: (e, t) => {
                  r.has(e)
                    ? (n = n.map((n) => (n.id === e ? t(n) : n)))
                    : this.updateMatch(e, t);
                },
              })),
              n
            );
          } catch (e) {
            if (j(e))
              return e.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...e.options, _fromLocation: t });
            A(e) || console.error(e);
            return;
          }
        }),
        (this.matchRoute = (e, t) => {
          let n = {
              ...e,
              to: e.to ? this.resolvePathWithBase(e.from || ``, e.to) : void 0,
              params: e.params || {},
              leaveParams: !0,
            },
            r = this.buildLocation(n);
          if (t?.pending && this.stores.status.get() !== `pending`) return !1;
          let i = (
              t?.pending === void 0 ? !this.stores.isLoading.get() : t.pending
            )
              ? this.latestLocation
              : this.stores.resolvedLocation.get() ||
                this.stores.location.get(),
            a = Ie(
              r.pathname,
              t?.caseSensitive ?? !1,
              t?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !a || (e.params && !de(a.rawParams, e.params, { partial: !0 }))
            ? !1
            : (t?.includeSearch ?? !0)
              ? de(i.search, r.search, { partial: !0 })
                ? a.rawParams
                : !1
              : a.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches
            .get()
            .some((e) => e.status === `notFound` || e.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? `fuzzy`,
          stringifySearch: e.stringifySearch ?? Tt,
          parseSearch: e.parseSearch ?? wt,
          protocolAllowlist: e.protocolAllowlist ?? ve,
        }),
        typeof document < `u` && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
      ((this.routesById = e),
        (this.routesByPath = t),
        (this.processedTree = n));
      let r = this.options.notFoundRoute;
      r &&
        (r.init({ originalIndex: 99999999999 }), (this.routesById[r.id] = r));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = He(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      let n = this.getMatchedRoutes(e.pathname),
        { foundRoute: r, routeParams: i } = n,
        { matchedRoutes: a } = n,
        o = !1;
      (r ? r.path !== `/` && i[`**`] : Qe(e.pathname)) &&
        (this.options.notFoundRoute
          ? (a = [...a, this.options.notFoundRoute])
          : (o = !0));
      let s = o ? Tn(this.options.notFoundMode, a) : void 0,
        c = Array(a.length),
        l = new Map();
      for (let e of this.stores.matchStores.values())
        e.routeId && l.set(e.routeId, e.get());
      for (let n = 0; n < a.length; n++) {
        let r = a[n],
          o = c[n - 1],
          u,
          d,
          f;
        {
          let n = o?.search ?? e.search,
            i = o?._strictSearch ?? void 0;
          try {
            let e = xn(r.options.validateSearch, { ...n }) ?? void 0;
            ((u = { ...n, ...e }), (d = { ...i, ...e }), (f = void 0));
          } catch (e) {
            let r = e;
            if (
              (e instanceof vn || (r = new vn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw r;
            ((u = n), (d = {}), (f = r));
          }
        }
        let p = r.options.loaderDeps?.({ search: u }) ?? ``,
          m = p ? JSON.stringify(p) : ``,
          { interpolatedPath: h, usedParams: g } = at({
            path: r.fullPath,
            params: i,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          _ = r.id + h + m,
          v = this.getMatch(_),
          y = l.get(r.id),
          b = v?._strictParams ?? g,
          x;
        if (!v)
          try {
            En(r, b);
          } catch (e) {
            if (
              ((x = A(e) || j(e) ? e : new yn(e.message, { cause: e })),
              t?.throwOnError)
            )
              throw x;
          }
        Object.assign(i, b);
        let ee = y ? `stay` : `enter`,
          S;
        if (v)
          S = {
            ...v,
            cause: ee,
            params: y?.params ?? i,
            _strictParams: b,
            search: oe(y ? y.search : v.search, u),
            _strictSearch: d,
          };
        else {
          let e =
            r.options.loader || r.options.beforeLoad || r.lazyFn || rn(r)
              ? `pending`
              : `success`;
          S = {
            id: _,
            ssr: r.options.ssr,
            index: n,
            routeId: r.id,
            params: y?.params ?? i,
            _strictParams: b,
            pathname: h,
            updatedAt: Date.now(),
            search: y ? oe(y.search, u) : u,
            _strictSearch: d,
            searchError: void 0,
            status: e,
            isFetching: !1,
            error: void 0,
            paramsError: x,
            __routeContext: void 0,
            _nonReactive: { loadPromise: fe() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: ee,
            loaderDeps: y ? se(y.loaderDeps, p) : p,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: r.options.staticData || {},
            fullPath: r.fullPath,
          };
        }
        (t?.preload || (S.globalNotFound = s === r.id), (S.searchError = f));
        let C = this.getParentContext(o);
        ((S.context = { ...C, ...S.__routeContext, ...S.__beforeLoadContext }),
          (c[n] = S));
      }
      for (let t = 0; t < c.length; t++) {
        let n = c[t],
          r = this.looseRoutesById[n.routeId],
          a = this.getMatch(n.id),
          o = l.get(n.routeId);
        if (((n.params = o ? oe(o.params, i) : i), !a)) {
          let i = c[t - 1],
            a = this.getParentContext(i);
          if (r.options.context) {
            let t = {
              deps: n.loaderDeps,
              params: n.params,
              context: a ?? {},
              location: e,
              navigate: (t) => this.navigate({ ...t, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: n.cause,
              abortController: n.abortController,
              preload: !!n.preload,
              matches: c,
              routeId: r.id,
            };
            n.__routeContext = r.options.context(t) ?? void 0;
          }
          n.context = { ...a, ...n.__routeContext, ...n.__beforeLoadContext };
        }
      }
      return c;
    }
    matchRoutesLightweight(e) {
      let t = w(this.stores.matchesId.get()),
        n = this.lightweightCache.get(e);
      if (n && n[0] === t) return n[1];
      let { matchedRoutes: r, routeParams: i } = this.getMatchedRoutes(
          e.pathname,
        ),
        a = w(r),
        o = { ...e.search };
      for (let e of r)
        try {
          Object.assign(o, xn(e.options.validateSearch, o));
        } catch {}
      let s = t && this.stores.matchStores.get(t)?.get(),
        c = s && s.routeId === a.id && s.pathname === e.pathname,
        l;
      if (c) l = s.params;
      else {
        let e = Object.assign(Object.create(null), i);
        for (let t of r)
          try {
            En(t, e);
          } catch {}
        l = e;
      }
      let u = { matchedRoutes: r, fullPath: a.fullPath, search: o, params: l };
      return (this.lightweightCache.set(e, [t, u]), u);
    }
  },
  vn = class extends Error {},
  yn = class extends Error {};
function bn(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: `idle`,
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function xn(e, t) {
  if (e == null) return {};
  if (`~standard` in e) {
    let n = e[`~standard`].validate(t);
    if (n instanceof Promise) throw new vn(`Async validation not supported`);
    if (n.issues)
      throw new vn(JSON.stringify(n.issues, void 0, 2), { cause: n });
    return n.value;
  }
  return `parse` in e ? e.parse(t) : typeof e == `function` ? e(t) : {};
}
function Sn({ pathname: e, routesById: t, processedTree: n }) {
  let r = Object.create(null),
    i = Qe(e),
    a,
    o = Le(i, n, !0);
  return (
    o && ((a = o.route), Object.assign(r, o.rawParams)),
    { matchedRoutes: o?.branch || [t.__root__], routeParams: r, foundRoute: a }
  );
}
function Cn({ search: e, dest: t, destRoutes: n, _includeValidateSearch: r }) {
  return wn(n)(e, t, r ?? !1);
}
function wn(e) {
  let t,
    n,
    r = [];
  for (let t of e) {
    let e = t.options;
    `search` in e
      ? e.search?.middlewares && r.push(...e.search.middlewares)
      : (e.preSearchFilters || e.postSearchFilters) &&
        r.push(({ search: t, next: n }) => {
          let r = n(
            e.preSearchFilters
              ? e.preSearchFilters.reduce((e, t) => t(e), t)
              : t,
          );
          return e.postSearchFilters
            ? e.postSearchFilters.reduce((e, t) => t(e), r)
            : r;
        });
    let i = e.validateSearch;
    i &&
      r.push(({ search: e, next: t, meta: r }) => {
        let a = t(e);
        if (n)
          try {
            let e = xn(i, a);
            if (r && e)
              for (let t in e)
                t in a || (r.defaulted ||= new Map()).set(t, e[t]);
            return { ...a, ...e };
          } catch {}
        return a;
      });
  }
  let i = (e, n, a) => {
    if (e >= r.length) {
      if (!t.search) return {};
      if (t.search === !0) return n;
      let e = T(t.search, n);
      return (a && (a.explicit = e), e);
    }
    return r[e]({
      search: n,
      next: (t, n) => {
        if (n) {
          let n = a || {};
          return { search: i(e + 1, t, n), meta: n };
        }
        return i(e + 1, t, a);
      },
      meta: a,
    });
  };
  return function (e, r, a) {
    return ((t = r), (n = a), i(0, e));
  };
}
function Tn(e, t) {
  if (e !== `root`)
    for (let e = t.length - 1; e >= 0; e--) {
      let n = t[e];
      if (n.children) return n.id;
    }
  return Ot;
}
function En(e, t) {
  let n = e.options.params?.parse ?? e.options.parseParams;
  if (n) {
    let e = n(t);
    if (e === !1)
      throw Error(`Route params.parse returned false for a matched route`);
    Object.assign(t, e);
  }
}
var Dn = Symbol.for(`TSR_DEFERRED_PROMISE`);
function On(e, t) {
  let n = e;
  return n[Dn]
    ? n
    : ((n[Dn] = { status: `pending` }),
      n
        .then((e) => {
          ((n[Dn].status = `success`), (n[Dn].data = e));
        })
        .catch((e) => {
          ((n[Dn].status = `error`),
            (n[Dn].error = {
              data: (t?.serializeError ?? hn)(e),
              __isServerError: !0,
            }));
        }),
      n);
}
var kn = `Error preloading route! ☝️`;
function An(e, t) {
  if (e) return typeof e == `string` ? e : e[t];
}
function jn(e) {
  return e?.scriptFormat ?? `module`;
}
function Mn(e, t, n) {
  let r = Nn(t),
    i = An(n, `script`) ?? r.crossOrigin;
  return {
    ...(jn(e) === `iife`
      ? { rel: `preload`, as: `script` }
      : { rel: `modulepreload` }),
    href: r.href,
    ...(i ? { crossOrigin: i } : {}),
  };
}
function Nn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
function Pn(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  let n = new Set();
  for (let r of t) {
    let t = JSON.stringify(r);
    n.has(t) || (n.add(t), e.push(r));
  }
}
function Fn(e) {
  return typeof e == `string` ? { href: e, crossOrigin: void 0 } : e;
}
var In = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (e) => {
          this.originalIndex = e.originalIndex;
          let t = this.options,
            n = !t?.path && !t?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = Ot) : this.parentRoute || we());
          let r = n ? Ot : t?.path;
          r && r !== `/` && (r = Ze(r));
          let i = t?.id || r,
            a = n
              ? Ot
              : Ye([
                  this.parentRoute.id === `__root__` ? `` : this.parentRoute.id,
                  i,
                ]);
          (r === `__root__` && (r = `/`),
            a !== `__root__` && (a = Ye([`/`, a])));
          let o = a === `__root__` ? `/` : Ye([this.parentRoute.fullPath, r]);
          ((this._path = r),
            (this._id = a),
            (this._fullPath = o),
            (this._to = Qe(o)));
        }),
        (this.addChildren = (e) => this._addFileChildren(e)),
        (this._addFileChildren = (e) => (
          Array.isArray(e) && (this.children = e),
          typeof e == `object` && e && (this.children = Object.values(e)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (e) => (Object.assign(this.options, e), this)),
        (this.update = (e) => (Object.assign(this.options, e), this)),
        (this.lazy = (e) => ((this.lazyFn = e), this)),
        (this.redirect = (e) => kt({ from: this.fullPath, ...e })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw Error(`Route cannot have both an 'id' and a 'path' option.`);
    }
  },
  Ln = class extends In {
    constructor(e) {
      super(e);
    }
  },
  Rn = Symbol.asyncIterator,
  zn = Symbol.hasInstance,
  Bn = Symbol.isConcatSpreadable,
  Vn = Symbol.iterator,
  Hn = Symbol.match,
  Un = Symbol.matchAll,
  Wn = Symbol.replace,
  Gn = Symbol.search,
  Kn = Symbol.species,
  qn = Symbol.split,
  Jn = Symbol.toPrimitive,
  Yn = Symbol.toStringTag,
  Xn = Symbol.unscopables,
  Zn = {
    [Rn]: 0,
    [zn]: 1,
    [Bn]: 2,
    [Vn]: 3,
    [Hn]: 4,
    [Un]: 5,
    [Wn]: 6,
    [Gn]: 7,
    [Kn]: 8,
    [qn]: 9,
    [Jn]: 10,
    [Yn]: 11,
    [Xn]: 12,
  },
  Qn = {
    0: Rn,
    1: zn,
    2: Bn,
    3: Vn,
    4: Hn,
    5: Un,
    6: Wn,
    7: Gn,
    8: Kn,
    9: qn,
    10: Jn,
    11: Yn,
    12: Xn,
  },
  $n = { 2: !0, 3: !1, 1: void 0, 0: null, 4: -0, 5: 1 / 0, 6: -1 / 0, 7: NaN },
  er = {
    0: `Error`,
    1: `EvalError`,
    2: `RangeError`,
    3: `ReferenceError`,
    4: `SyntaxError`,
    5: `TypeError`,
    6: `URIError`,
  },
  tr = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function N(e, t, n, r, i, a, o, s, c, l, u, d) {
  return {
    t: e,
    i: t,
    s: n,
    c: r,
    m: i,
    p: a,
    e: o,
    a: s,
    f: c,
    b: l,
    o: u,
    l: d,
  };
}
function nr(e) {
  return N(
    2,
    void 0,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
var rr = nr(2),
  ir = nr(3),
  ar = nr(1),
  or = nr(0),
  sr = nr(4),
  cr = nr(5),
  lr = nr(6),
  ur = nr(7),
  dr = 64,
  fr = /[\x00-\x07\x0b\x0e-\x1f<\u2028\u2029\ud800-\udfff]/;
function pr(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `\b`:
      return `\\b`;
    case `	`:
      return `\\t`;
    case `\f`:
      return `\\f`;
    case `<`:
      return `\\x3C`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return;
  }
}
function mr(e) {
  if (e.length >= dr && !fr.test(e)) return JSON.stringify(e).slice(1, -1);
  let t = ``,
    n = 0,
    r;
  for (let i = 0, a = e.length; i < a; i++)
    ((r = pr(e[i])), r && ((t += e.slice(n, i) + r), (n = i + 1)));
  return (n === 0 ? (t = e) : (t += e.slice(n)), t);
}
function hr(e) {
  switch (e) {
    case `\\\\`:
      return `\\`;
    case `\\"`:
      return `"`;
    case `\\n`:
      return `
`;
    case `\\r`:
      return `\r`;
    case `\\b`:
      return `\b`;
    case `\\t`:
      return `	`;
    case `\\f`:
      return `\f`;
    case `\\x3C`:
      return `<`;
    case `\\u2028`:
      return `\u2028`;
    case `\\u2029`:
      return `\u2029`;
    default:
      return e;
  }
}
function gr(e) {
  return typeof e == `string` && !e.includes(`\\`)
    ? e
    : e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, hr);
}
var { toString: _r } = Object.prototype,
  vr = { parsing: 1, serialization: 2, deserialization: 3 };
function yr(e) {
  return `Seroval Error (step: ${vr[e]})`;
}
var br = (e, t) => yr(e),
  xr = class extends Error {
    constructor(e, t) {
      (super(br(e, t)), (this.cause = t));
    }
  },
  Sr = class extends xr {
    constructor(e) {
      super(`parsing`, e);
    }
  },
  Cr = class extends xr {
    constructor(e) {
      super(`deserialization`, e);
    }
  };
function wr(e) {
  return `Seroval Error (specific: ${e})`;
}
var Tr = class extends Error {
    constructor(e) {
      (super(wr(1)), (this.value = e));
    }
  },
  Er = class extends Error {
    constructor(e) {
      super(wr(2));
    }
  },
  Dr = class extends Error {
    constructor(e) {
      super(wr(3));
    }
  },
  Or = class extends Error {
    constructor(e) {
      super(wr(4));
    }
  },
  kr = class extends Error {
    constructor(e) {
      (super(wr(5)), (this.value = e));
    }
  },
  Ar = class extends Error {
    constructor(e) {
      super(wr(6));
    }
  },
  jr = class extends Error {
    constructor(e) {
      super(wr(7));
    }
  },
  Mr = class extends Error {
    constructor(e) {
      super(wr(8));
    }
  },
  Nr = class extends Error {
    constructor(e) {
      super(wr(9));
    }
  },
  Pr = `__SEROVAL_REFS__`,
  Fr = new Map(),
  Ir = new Map();
function Lr(e) {
  return Fr.has(e);
}
function Rr(e) {
  return Ir.has(e);
}
function zr(e) {
  if (Lr(e)) return Fr.get(e);
  throw new kr(e);
}
function Br(e) {
  if (Rr(e)) return Ir.get(e);
  throw new Ar(e);
}
typeof globalThis < `u`
  ? Object.defineProperty(globalThis, Pr, {
      value: Ir,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < `u`
    ? Object.defineProperty(window, Pr, {
        value: Ir,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < `u`
      ? Object.defineProperty(self, Pr, {
          value: Ir,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < `u` &&
        Object.defineProperty(global, Pr, {
          value: Ir,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Vr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function Hr(e) {
  let t = er[Vr(e)];
  return e.name === t
    ? e.constructor.name === t
      ? {}
      : { name: e.constructor.name }
    : { name: e.name };
}
function Ur(e, t) {
  let n = Hr(e),
    r = Object.getOwnPropertyNames(e);
  for (let i = 0, a = r.length, o; i < a; i++)
    ((o = r[i]),
      o !== `name` &&
        o !== `message` &&
        (o === `stack`
          ? t & 4 && ((n ||= {}), (n[o] = e[o]))
          : ((n ||= {}), (n[o] = e[o]))));
  return n;
}
function Wr(e) {
  return Object.isFrozen(e)
    ? 3
    : Object.isSealed(e)
      ? 2
      : +!Object.isExtensible(e);
}
function Gr(e) {
  switch (e) {
    case 1 / 0:
      return cr;
    case -1 / 0:
      return lr;
  }
  return e === e
    ? Object.is(e, -0)
      ? sr
      : N(
          0,
          void 0,
          e,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
          void 0,
        )
    : ur;
}
function Kr(e) {
  return N(
    1,
    void 0,
    mr(e),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function qr(e) {
  return N(
    3,
    void 0,
    `` + e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Jr(e) {
  return N(
    4,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Yr(e, t) {
  let n = t.valueOf();
  return N(
    5,
    e,
    n === n ? t.toISOString() : ``,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Xr(e, t, n) {
  return N(
    36,
    e,
    n.toString(),
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Zr(e, t) {
  return N(
    6,
    e,
    void 0,
    mr(t.source),
    t.flags,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function Qr(e, t) {
  return N(
    17,
    e,
    Zn[t],
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function $r(e, t) {
  return N(
    18,
    e,
    mr(zr(t)),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ei(e, t, n) {
  return N(
    25,
    e,
    n,
    mr(t),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ti(e, t, n) {
  return N(
    9,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    void 0,
    void 0,
    Wr(t),
    void 0,
  );
}
function ni(e, t) {
  return N(
    21,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
var ri = 1e6;
function ii(e, t, n) {
  if (t.length > ri) throw new Tr(t);
  return N(
    15,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function ai(e, t, n) {
  if (t.length > ri) throw new Tr(t);
  return N(
    16,
    e,
    void 0,
    t.constructor.name,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.length,
  );
}
function oi(e, t, n) {
  if (t.byteLength > ri) throw new Tr(t);
  return N(
    20,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t.byteOffset,
    void 0,
    t.byteLength,
  );
}
function si(e, t, n) {
  return N(
    13,
    e,
    Vr(t),
    void 0,
    mr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ci(e, t, n) {
  return N(
    14,
    e,
    Vr(t),
    void 0,
    mr(t.message),
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function li(e, t) {
  return N(
    7,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function ui(e, t) {
  return N(
    28,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function di(e, t) {
  return N(
    30,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    [e, t],
    void 0,
    void 0,
    void 0,
    void 0,
  );
}
function fi(e, t, n) {
  return N(
    31,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    n,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function pi(e, t) {
  return N(
    32,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function mi(e, t) {
  return N(
    33,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function hi(e, t) {
  return N(
    34,
    e,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
  );
}
function gi(e, t, n, r) {
  return N(
    35,
    e,
    n,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    void 0,
    void 0,
    r,
  );
}
var _i = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  vi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, n) => {
        ((e.s = t), (e.f = n));
      })),
      e
    );
  },
  yi = (e) => (t) => () => {
    let n = 0,
      r = {
        [e]() {
          return r;
        },
        next() {
          if (n > t.d) return { done: !0, value: void 0 };
          let e = n++,
            r = t.v[e];
          if (e === t.t) throw r;
          return { done: e === t.d, value: r };
        },
      };
    return r;
  },
  bi = (e, t) => (n) => () => {
    let r = 0,
      i = -1,
      a = !1,
      o = [],
      s = [],
      c = {
        finalize(e = 0, t = s.length) {
          for (; e < t; e++) s[e].s({ done: !0, value: void 0 });
        },
      };
    n.on({
      next(e) {
        let t = s.shift();
        (t && t.s({ done: !1, value: e }), o.push(e));
      },
      throw(e) {
        let t = s.shift();
        (t && t.f(e), c.finalize(), (i = o.length), (a = !0), o.push(e));
      },
      return(e) {
        let t = s.shift();
        (t && t.s({ done: !0, value: e }),
          c.finalize(),
          (i = o.length),
          o.push(e));
      },
    });
    let l = {
      [e]() {
        return l;
      },
      next() {
        if (i === -1) {
          let e = r++;
          if (e >= o.length) {
            let e = t();
            return (s.push(e), e.p);
          }
          return { done: !1, value: o[e] };
        }
        if (r > i) return { done: !0, value: void 0 };
        let e = r++,
          n = o[e];
        if (e !== i) return { done: !1, value: n };
        if (a) throw n;
        return { done: !0, value: n };
      },
    };
    return l;
  },
  xi = (e) => {
    let t = atob(e),
      n = t.length,
      r = new Uint8Array(n);
    for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
    return r.buffer;
  },
  Si = class {
    constructor(e, t, n) {
      ((this.v = e), (this.t = t), (this.d = n));
    }
  };
function Ci(e) {
  return e instanceof Si;
}
function wi(e, t, n) {
  return new Si(e, t, n);
}
function Ti(e) {
  let t = [],
    n = -1,
    r = -1,
    i = e[Vn]();
  for (;;)
    try {
      let e = i.next();
      if ((t.push(e.value), e.done)) {
        r = t.length - 1;
        break;
      }
    } catch (e) {
      ((n = t.length), (r = n), t.push(e));
      break;
    }
  return wi(t, n, r);
}
var Ei = yi(Vn);
function Di(e) {
  return Ei(e);
}
var Oi = {},
  ki = {},
  Ai = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function ji(e, t) {
  if (t.has(e))
    throw TypeError(
      `Cannot initialize the same private elements twice on an object`,
    );
}
function Mi(e, t) {
  (ji(e, t), t.add(e));
}
function Ni(e, t, n) {
  (ji(e, t), t.set(e, n));
}
function Pi(e, t, n) {
  if (typeof e == `function` ? e === t : e.has(t))
    return arguments.length < 3 ? t : n;
  throw TypeError(`Private element is not present on this object`);
}
function P(e, t) {
  return e.get(Pi(e, t));
}
function Fi(e, t, n) {
  return (e.set(Pi(e, t), n), n);
}
var Ii = new WeakMap(),
  Li = new WeakMap(),
  Ri = new WeakMap(),
  zi = new WeakMap(),
  Bi = new WeakMap(),
  Vi = new WeakSet(),
  Hi = class {
    constructor() {
      (Mi(this, Vi),
        Ni(this, Ii, []),
        Ni(this, Li, []),
        Ni(this, Ri, !0),
        Ni(this, zi, !1),
        Ni(this, Bi, 0));
    }
    on(e) {
      let t = P(Ri, this),
        n = 0;
      if (t) {
        for (; n < P(Bi, this) && P(Li, this)[n]; n++);
        if (n === P(Bi, this)) {
          var r;
          Fi(Bi, this, ((r = P(Bi, this)), r++, r));
        }
        P(Li, this)[n] = e;
      }
      return (
        Pi(Vi, this, Wi).call(this, e),
        () => {
          if (P(Ri, this) && t) {
            for (
              t = !1, P(Li, this)[n] = void 0;
              P(Bi, this) > 0 && !P(Li, this)[P(Bi, this) - 1];
            ) {
              var e;
              Fi(Bi, this, ((e = P(Bi, this)), e--, e));
            }
            P(Li, this).length = P(Bi, this);
          }
        }
      );
    }
    next(e) {
      P(Ri, this) &&
        (P(Ii, this).push(e), Pi(Vi, this, Ui).call(this, e, `next`));
    }
    throw(e) {
      P(Ri, this) &&
        (P(Ii, this).push(e),
        Pi(Vi, this, Ui).call(this, e, `throw`),
        Fi(Ri, this, !1),
        Fi(zi, this, !1),
        (P(Li, this).length = 0));
    }
    return(e) {
      P(Ri, this) &&
        (P(Ii, this).push(e),
        Pi(Vi, this, Ui).call(this, e, `return`),
        Fi(Ri, this, !1),
        Fi(zi, this, !0),
        (P(Li, this).length = 0));
    }
  };
function Ui(e, t) {
  for (let r = 0; r < P(Bi, this); r++) {
    var n;
    (n = P(Li, this)[r]) == null || n[t](e);
  }
}
function Wi(e) {
  for (let t = 0, n = P(Ii, this).length; t < n; t++) {
    let r = P(Ii, this)[t];
    !P(Ri, this) && t === n - 1
      ? e[P(zi, this) ? `return` : `throw`](r)
      : e.next(r);
  }
}
function Gi(e) {
  return e instanceof Hi;
}
function Ki() {
  return new Hi();
}
function qi(e, t) {
  let n = Ki(),
    r = e[Rn](),
    i = !1,
    a = !1;
  t?.push(() => {
    a ||
      i ||
      ((i = !0),
      Promise.resolve()
        .then(() => r.return?.call(r))
        .catch(() => {}));
  });
  async function o() {
    try {
      for (; !i;) {
        let e = await r.next();
        if (i) return;
        if (e.done) {
          ((a = !0), n.return(e.value));
          break;
        }
        n.next(e.value);
      }
    } catch (e) {
      ((a = !0), i || n.throw(e));
    }
  }
  return (o().catch(() => {}), n);
}
var Ji = bi(Rn, vi);
function Yi(e) {
  return Ji(e);
}
async function Xi(e) {
  try {
    return [1, await e];
  } catch (e) {
    return [0, e];
  }
}
function Zi(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 127 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
    compactArrayBufferViews: t.compactArrayBufferViews ?? !1,
  };
}
function Qi(e, t) {
  e.marked.add(t);
}
function $i(e, t) {
  let n = e.refs.size;
  return (e.refs.set(t, n), n);
}
function ea(e, t) {
  let n = e.refs.get(t);
  return n == null
    ? { type: 0, value: $i(e, t) }
    : (Qi(e, n), { type: 1, value: Jr(n) });
}
function ta(e, t) {
  let n = ea(e, t);
  return n.type === 1 ? n : Lr(t) ? { type: 2, value: $r(n.value, t) } : n;
}
function na(e, t) {
  let n = ta(e, t);
  if (n.type !== 0) return n.value;
  if (t in Zn) return Qr(n.value, t);
  throw new Tr(t);
}
function ra(e, t) {
  let n = ea(e, Ai[t]);
  return n.type === 1
    ? n.value
    : N(
        26,
        n.value,
        t,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function ia(e) {
  let t = ea(e, Oi);
  return t.type === 1
    ? t.value
    : N(
        27,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        na(e, Vn),
        void 0,
        void 0,
        void 0,
      );
}
function aa(e) {
  let t = ea(e, ki);
  return t.type === 1
    ? t.value
    : N(
        29,
        t.value,
        void 0,
        void 0,
        void 0,
        void 0,
        void 0,
        [ra(e, 1), na(e, Rn)],
        void 0,
        void 0,
        void 0,
        void 0,
      );
}
function oa(e, t, n, r) {
  return N(
    n ? 11 : 10,
    e,
    void 0,
    void 0,
    void 0,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    Wr(t),
    void 0,
  );
}
function sa(e, t, n, r) {
  return N(
    8,
    t,
    void 0,
    void 0,
    void 0,
    void 0,
    { k: n, v: r },
    void 0,
    ra(e, 0),
    void 0,
    void 0,
    void 0,
  );
}
function ca(e, t) {
  if (!e.compactArrayBufferViews) return t;
  let n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength).slice().buffer,
    r = t.constructor;
  return new r(n);
}
function la(e) {
  if (typeof Buffer < `u`) return Buffer.from(e).toString(`base64`);
  let t = new Uint8Array(e);
  if (typeof t.toBase64 == `function`) return t.toBase64();
  let n = ``;
  for (let e = 0, r = t.length; e < r; e++) n += String.fromCharCode(t[e]);
  return btoa(n);
}
function F(e, t, n) {
  return N(
    19,
    t,
    la(n),
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    ra(e, 5),
    void 0,
    void 0,
    void 0,
  );
}
function ua(e, t) {
  return { base: Zi(e, t), child: void 0 };
}
var da = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return ja(this._p, this.depth, e);
  }
};
async function fa(e, t, n) {
  let r = [];
  for (let i = 0, a = n.length; i < a; i++)
    i in n ? (r[i] = await ja(e, t, n[i])) : (r[i] = 0);
  return r;
}
async function pa(e, t, n, r) {
  return ti(n, r, await fa(e, t, r));
}
async function ma(e, t, n) {
  let r = Object.entries(n),
    i = [],
    a = [];
  for (let n = 0, o = r.length; n < o; n++)
    (i.push(mr(r[n][0])), a.push(await ja(e, t, r[n][1])));
  return (
    Vn in n &&
      (i.push(na(e.base, Vn)), a.push(ui(ia(e.base), await ja(e, t, Ti(n))))),
    Rn in n &&
      (i.push(na(e.base, Rn)), a.push(di(aa(e.base), await ja(e, t, qi(n))))),
    Yn in n && (i.push(na(e.base, Yn)), a.push(Kr(n[Yn]))),
    Bn in n && (i.push(na(e.base, Bn)), a.push(n[Bn] ? rr : ir)),
    { k: i, v: a }
  );
}
async function ha(e, t, n, r, i) {
  return oa(n, r, i, await ma(e, t, r));
}
async function ga(e, t, n, r) {
  return ni(n, await ja(e, t, r.valueOf()));
}
async function _a(e, t, n, r) {
  return ((r = ca(e.base, r)), ii(n, r, await ja(e, t, r.buffer)));
}
async function va(e, t, n, r) {
  return ((r = ca(e.base, r)), ai(n, r, await ja(e, t, r.buffer)));
}
async function ya(e, t, n, r) {
  return ((r = ca(e.base, r)), oi(n, r, await ja(e, t, r.buffer)));
}
async function ba(e, t, n, r) {
  let i = Ur(r, e.base.features);
  return si(n, r, i ? await ma(e, t, i) : void 0);
}
async function xa(e, t, n, r) {
  let i = Ur(r, e.base.features);
  return ci(n, r, i ? await ma(e, t, i) : void 0);
}
async function Sa(e, t, n, r) {
  let i = [],
    a = [];
  for (let [n, o] of r.entries())
    (i.push(await ja(e, t, n)), a.push(await ja(e, t, o)));
  return sa(e.base, n, i, a);
}
async function Ca(e, t, n, r) {
  let i = [];
  for (let n of r.keys()) i.push(await ja(e, t, n));
  return li(n, i);
}
async function wa(e, t, n, r) {
  let i = e.base.plugins;
  if (i)
    for (let a = 0, o = i.length; a < o; a++) {
      let o = i[a];
      if (o.parse.async && o.test(r))
        return ei(n, o.tag, await o.parse.async(r, new da(e, t), { id: n }));
    }
}
async function Ta(e, t, n, r) {
  let [i, a] = await Xi(r);
  return N(
    12,
    n,
    i,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    await ja(e, t, a),
    void 0,
    void 0,
    void 0,
  );
}
function Ea(e, t, n, r, i) {
  let a = [],
    o = n.on({
      next: (n) => {
        (Qi(this.base, t),
          ja(this, e, n).then(
            (e) => {
              a.push(pi(t, e));
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      throw: (n) => {
        (Qi(this.base, t),
          ja(this, e, n).then(
            (e) => {
              (a.push(mi(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
      return: (n) => {
        (Qi(this.base, t),
          ja(this, e, n).then(
            (e) => {
              (a.push(hi(t, e)), r(a), o());
            },
            (e) => {
              (i(e), o());
            },
          ));
      },
    });
}
async function Da(e, t, n, r) {
  return fi(n, ra(e.base, 4), await new Promise(Ea.bind(e, t, n, r)));
}
async function Oa(e, t, n, r) {
  let i = [];
  for (let n = 0, a = r.v.length; n < a; n++) i[n] = await ja(e, t, r.v[n]);
  return gi(n, i, r.t, r.d);
}
async function ka(e, t, n, r) {
  if (Array.isArray(r)) return pa(e, t, n, r);
  if (Gi(r)) return Da(e, t, n, r);
  if (Ci(r)) return Oa(e, t, n, r);
  let i = r.constructor;
  if (i !== void 0 && typeof i != `function`) {
    let e = Object.getPrototypeOf(r);
    i = e === null ? void 0 : e.constructor;
  }
  if (i === _i) return ja(e, t, r.replacement);
  let a = await wa(e, t, n, r);
  if (a) return a;
  switch (i) {
    case Object:
      return ha(e, t, n, r, !1);
    case void 0:
      return ha(e, t, n, r, !0);
    case Date:
      return Yr(n, r);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return ba(e, t, n, r);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return ga(e, t, n, r);
    case ArrayBuffer:
      return F(e.base, n, r);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return _a(e, t, n, r);
    case DataView:
      return ya(e, t, n, r);
    case Map:
      return Sa(e, t, n, r);
    case Set:
      return Ca(e, t, n, r);
  }
  if (i === Promise || r instanceof Promise) return Ta(e, t, n, r);
  let o = e.base.features;
  if (o & 32 && i === RegExp) return Zr(n, r);
  if (o & 16)
    switch (i) {
      case BigInt64Array:
      case BigUint64Array:
        return va(e, t, n, r);
    }
  if (
    o & 1 &&
    typeof AggregateError < `u` &&
    (i === AggregateError || r instanceof AggregateError)
  )
    return xa(e, t, n, r);
  if (o & 64 && typeof Temporal < `u`)
    switch (i) {
      case Temporal.Instant:
        return Xr(n, 0, r);
      case Temporal.Duration:
        return Xr(n, 1, r);
      case Temporal.PlainDate:
        return Xr(n, 2, r);
      case Temporal.PlainDateTime:
        return Xr(n, 3, r);
      case Temporal.PlainMonthDay:
        return Xr(n, 4, r);
      case Temporal.PlainTime:
        return Xr(n, 5, r);
      case Temporal.PlainYearMonth:
        return Xr(n, 6, r);
      case Temporal.ZonedDateTime:
        return Xr(n, 7, r);
    }
  if (r instanceof Error) return ba(e, t, n, r);
  if (Vn in r || Rn in r) return ha(e, t, n, r, !!i);
  throw new Tr(r);
}
async function Aa(e, t, n) {
  let r = ta(e.base, n);
  if (r.type !== 0) return r.value;
  let i = await wa(e, t, r.value, n);
  if (i) return i;
  throw new Tr(n);
}
async function ja(e, t, n) {
  if (t >= e.base.depthLimit) throw new Nr(e.base.depthLimit);
  switch (typeof n) {
    case `boolean`:
      return n ? rr : ir;
    case `undefined`:
      return ar;
    case `string`:
      return Kr(n);
    case `number`:
      return Gr(n);
    case `bigint`:
      return qr(n);
    case `object`:
      if (n) {
        let r = ta(e.base, n);
        return r.type === 0 ? await ka(e, t + 1, r.value, n) : r.value;
      }
      return or;
    case `symbol`:
      return na(e.base, n);
    case `function`:
      return Aa(e, t, n);
    default:
      throw new Tr(n);
  }
}
async function Ma(e, t) {
  try {
    return await ja(e, 0, t);
  } catch (e) {
    throw e instanceof Sr ? e : new Sr(e);
  }
}
function Na(e) {
  return e;
}
function Pa(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Pa(e, r.extends));
  }
}
function Fa(e) {
  if (e) {
    let t = new Set();
    return (Pa(t, e), [...t]);
  }
}
function Ia(e) {
  switch (e) {
    case `Int8Array`:
      return Int8Array;
    case `Int16Array`:
      return Int16Array;
    case `Int32Array`:
      return Int32Array;
    case `Uint8Array`:
      return Uint8Array;
    case `Uint16Array`:
      return Uint16Array;
    case `Uint32Array`:
      return Uint32Array;
    case `Uint8ClampedArray`:
      return Uint8ClampedArray;
    case `Float32Array`:
      return Float32Array;
    case `Float64Array`:
      return Float64Array;
    case `BigInt64Array`:
      return BigInt64Array;
    case `BigUint64Array`:
      return BigUint64Array;
    default:
      throw new jr(e);
  }
}
function La(e) {
  switch (e) {
    case `constructor`:
    case `__proto__`:
    case `prototype`:
    case `__defineGetter__`:
    case `__defineSetter__`:
    case `__lookupGetter__`:
    case `__lookupSetter__`:
      return !1;
    default:
      return !0;
  }
}
function Ra(e) {
  switch (e) {
    case Rn:
    case Bn:
    case Yn:
    case Vn:
      return !0;
    default:
      return !1;
  }
}
var za = 1e6,
  Ba = 512,
  Va = 1e4,
  Ha = 2e4;
function Ua(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Wa = 1e3;
function Ga(e, t) {
  let n = t.maxBase64Length ?? za;
  if (!Number.isSafeInteger(n) || n < 0)
    throw RangeError(`maxBase64Length must be a non-negative safe integer`);
  let r = t.refs || new Map();
  return (
    `types` in r || Object.assign(r, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: r,
      features: t.features ?? 127 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Wa,
      maxBase64Length: n,
    }
  );
}
function Ka(e) {
  return { mode: 2, base: Ga(2, e), child: void 0 };
}
var qa = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return I(this._p, this.depth, e);
  }
};
function Ja(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t))
    throw new Mr({ t: 4, i: t });
  if (e.refs.has(t)) throw Error(`Conflicted ref id: ` + t);
}
function Ya(e) {
  return (
    !!e &&
    (typeof e == `object` || typeof e == `function`) &&
    `then` in e &&
    typeof e.then == `function`
  );
}
function Xa(e, t, n) {
  return (Ja(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, n), n);
}
function Za(e, t, n) {
  return (Ja(e.base, t), e.base.refs.set(t, n), n);
}
function Qa(e, t, n) {
  return e.mode === 1 ? Xa(e, t, n) : Za(e, t, n);
}
function $a(e, t, n) {
  if (Object.hasOwn(t, n)) return t[n];
  throw new Mr(e);
}
function eo(e, t) {
  return Qa(e, t.i, Br(gr(t.s)));
}
function to(e, t) {
  if (!Array.isArray(t)) throw new Mr(e);
}
function no(e, t, n) {
  let r = n.a;
  to(n, r);
  let i = r.length,
    a = Qa(e, n.i, Array(i));
  for (let n = 0, o; n < i; n++) ((o = r[n]), o && (a[n] = I(e, t, o)));
  return (Ua(a, n.o), a);
}
function ro(e, t, n) {
  La(t)
    ? (e[t] = n)
    : Object.defineProperty(e, t, {
        value: n,
        configurable: !0,
        enumerable: !0,
        writable: !0,
      });
}
function io(e, t, n, r, i) {
  if (typeof r == `string`) ro(n, gr(r), I(e, t, i));
  else {
    let a = I(e, t, r);
    switch (typeof a) {
      case `string`:
        ro(n, a, I(e, t, i));
        break;
      case `symbol`:
        Ra(a) && (n[a] = I(e, t, i));
        break;
      default:
        throw new Mr(r);
    }
  }
}
function ao(e, t, n) {
  e.base.refs.types.set(t, n);
}
function oo(e, t, n, r) {
  if (e.base.refs.types.get(n) !== r) throw new Mr(t);
}
function so(e, t, n, r) {
  let i = n.k;
  if ((to(n, i), to(n, n.v), i.length > 0))
    for (let a = 0, o = n.v, s = i.length; a < s; a++) io(e, t, r, i[a], o[a]);
  return r;
}
function co(e, t, n) {
  let r = Qa(e, n.i, n.t === 10 ? {} : Object.create(null));
  return (so(e, t, n.p, r), Ua(r, n.o), r);
}
function lo(e, t) {
  return Qa(e, t.i, new Date(t.s));
}
function uo(e, t) {
  if (!(e.base.features & 64)) throw new Er(t);
  let n;
  switch (t.c) {
    case 0:
      n = Temporal.Instant.from(t.s);
      break;
    case 1:
      n = Temporal.Duration.from(t.s);
      break;
    case 2:
      n = Temporal.PlainDate.from(t.s);
      break;
    case 3:
      n = Temporal.PlainDateTime.from(t.s);
      break;
    case 4:
      n = Temporal.PlainMonthDay.from(t.s);
      break;
    case 5:
      n = Temporal.PlainTime.from(t.s);
      break;
    case 6:
      n = Temporal.PlainYearMonth.from(t.s);
      break;
    case 7:
      n = Temporal.ZonedDateTime.from(t.s);
      break;
    default:
      throw new Mr(t);
  }
  return Qa(e, t.i, n);
}
function fo(e, t) {
  if (e.base.features & 32) {
    let n = gr(t.c);
    if (n.length > Ha) throw new Mr(t);
    return Qa(e, t.i, new RegExp(n, t.m));
  }
  throw new Er(t);
}
function po(e, t, n) {
  let r = Qa(e, n.i, new Set());
  to(n, n.a);
  for (let i = 0, a = n.a, o = a.length; i < o; i++) r.add(I(e, t, a[i]));
  return r;
}
function mo(e, t, n) {
  let r = Qa(e, n.i, new Map());
  (to(n, n.e.k), to(n, n.e.v));
  for (let i = 0, a = n.e.k, o = n.e.v, s = a.length; i < s; i++)
    r.set(I(e, t, a[i]), I(e, t, o[i]));
  return r;
}
function ho(e, t) {
  if (typeof t.s != `string`) throw new Mr(t);
  if (t.s.length > e.base.maxBase64Length)
    throw RangeError(
      `ArrayBuffer exceeds maxBase64Length (` + e.base.maxBase64Length + `)`,
    );
  let n = gr(t.s),
    r;
  if (n.length < Ba || typeof Buffer > `u`) r = xi(n);
  else {
    let e = atob(n);
    ((r = new ArrayBuffer(e.length)), Buffer.from(r).write(e, `latin1`));
  }
  return Qa(e, t.i, r);
}
function go(e, t, n) {
  let r = Ia(n.c),
    i = I(e, t, n.f);
  if (!(i instanceof ArrayBuffer)) throw new Mr(n);
  let a = n.b ?? 0;
  if (a < 0 || a > i.byteLength) throw new Mr(n);
  return Qa(e, n.i, new r(i, a, n.l));
}
function _o(e, t, n) {
  let r = I(e, t, n.f);
  if (!(r instanceof ArrayBuffer)) throw new Mr(n);
  let i = n.b ?? 0;
  if (i < 0 || i > r.byteLength) throw new Mr(n);
  return Qa(e, n.i, new DataView(r, i, n.l));
}
function vo(e, t, n, r) {
  if (n.p) {
    let i = so(e, t, n.p, {});
    Object.defineProperties(r, Object.getOwnPropertyDescriptors(i));
  }
  return r;
}
function yo(e, t, n) {
  return vo(e, t, n, Qa(e, n.i, AggregateError([], gr(n.m))));
}
function bo(e, t, n) {
  let r = $a(n, tr, n.s);
  return vo(e, t, n, Qa(e, n.i, new r(gr(n.m))));
}
function xo(e, t, n) {
  let r = vi(),
    i = Qa(e, n.i, r.p),
    a = I(e, t, n.f);
  if (Ya(a)) throw new Mr(n.f);
  return (n.s ? r.s(a) : r.f(a), i);
}
function So(e, t, n) {
  return Qa(e, n.i, Object(I(e, t, n.f)));
}
function Co(e, t, n) {
  let r = e.base.plugins;
  if (r) {
    let i = gr(n.c);
    for (let a = 0, o = r.length; a < o; a++) {
      let o = r[a];
      if (o.tag === i)
        return Qa(e, n.i, o.deserialize(n.s, new qa(e, t), { id: n.i }));
    }
  }
  throw new Dr(n.c);
}
function wo(e, t) {
  let n = Qa(e, t.i, Qa(e, t.s, vi()).p);
  return (ao(e, t.s, 22), n);
}
function To(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    oo(e, n, n.i, 22);
    let i = I(e, t, n.a[1]);
    if (Ya(i)) throw new Mr(n.a[1]);
    n.t === 23 ? r.s(i) : r.f(i);
    return;
  }
  throw new Or(`Promise`);
}
function Eo(e, t, n) {
  I(e, t, n.a[0]);
  let r = I(e, t, n.a[1]);
  if (!Ci(r)) throw new Mr(n.a[1]);
  return Di(r);
}
function Do(e, t, n) {
  I(e, t, n.a[0]);
  let r = I(e, t, n.a[1]);
  if (!Gi(r)) throw new Mr(n.a[1]);
  return Yi(r);
}
function Oo(e, t, n) {
  let r = Qa(e, n.i, Ki());
  ao(e, n.i, 31);
  let i = n.a;
  to(n, i);
  let a = i.length;
  if (a) for (let n = 0; n < a; n++) I(e, t, i[n]);
  return r;
}
function ko(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (oo(e, n, n.i, 31), r.next(I(e, t, n.f)));
    return;
  }
  throw new Or(`Stream`);
}
function Ao(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (oo(e, n, n.i, 31), r.throw(I(e, t, n.f)));
    return;
  }
  throw new Or(`Stream`);
}
function jo(e, t, n) {
  let r = e.base.refs.get(n.i);
  if (r) {
    (oo(e, n, n.i, 31), r.return(I(e, t, n.f)));
    return;
  }
  throw new Or(`Stream`);
}
function Mo(e, t, n) {
  I(e, t, n.f);
}
function No(e, t, n) {
  I(e, t, n.a[1]);
}
function Po(e, t) {
  return Number.isInteger(e) && e >= -1 && e < t;
}
function Fo(e, t, n) {
  to(n, n.a);
  let r = n.a.length;
  if (!(Po(n.s, r) && Po(n.l, r))) throw new Mr(n);
  let i = Qa(e, n.i, wi([], n.s, n.l));
  for (let a = 0; a < r; a++) i.v[a] = I(e, t, n.a[a]);
  return i;
}
function I(e, t, n) {
  if (t > e.base.depthLimit) throw new Nr(e.base.depthLimit);
  switch (((t += 1), n.t)) {
    case 2:
      return $a(n, $n, n.s);
    case 0:
      return Number(n.s);
    case 1:
      return gr(String(n.s));
    case 3:
      if (String(n.s).length > Va) throw new Mr(n);
      return BigInt(n.s);
    case 4:
      return e.base.refs.get(n.i);
    case 18:
      return eo(e, n);
    case 9:
      return no(e, t, n);
    case 10:
    case 11:
      return co(e, t, n);
    case 5:
      return lo(e, n);
    case 6:
      return fo(e, n);
    case 7:
      return po(e, t, n);
    case 8:
      return mo(e, t, n);
    case 19:
      return ho(e, n);
    case 16:
    case 15:
      return go(e, t, n);
    case 20:
      return _o(e, t, n);
    case 14:
      return yo(e, t, n);
    case 13:
      return bo(e, t, n);
    case 12:
      return xo(e, t, n);
    case 17:
      return $a(n, Qn, n.s);
    case 21:
      return So(e, t, n);
    case 25:
      return Co(e, t, n);
    case 22:
      return wo(e, n);
    case 23:
    case 24:
      return To(e, t, n);
    case 28:
      return Eo(e, t, n);
    case 30:
      return Do(e, t, n);
    case 31:
      return Oo(e, t, n);
    case 32:
      return ko(e, t, n);
    case 33:
      return Ao(e, t, n);
    case 34:
      return jo(e, t, n);
    case 27:
      return Mo(e, t, n);
    case 29:
      return No(e, t, n);
    case 35:
      return Fo(e, t, n);
    case 36:
      return uo(e, n);
    default:
      throw new Er(n);
  }
}
function Io(e, t) {
  try {
    return I(e, 0, t);
  } catch (e) {
    throw new Cr(e);
  }
}
function Lo(e, t) {
  let n = Fa(t.plugins);
  return Io(
    Ka({
      maxBase64Length: t.maxBase64Length,
      plugins: n,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    }),
    e,
  );
}
async function Ro(e, t = {}) {
  let n = Fa(t.plugins),
    r = ua(1, {
      compactArrayBufferViews: t.compactArrayBufferViews,
      plugins: n,
      disabledFeatures: t.disabledFeatures,
    });
  return {
    t: await Ma(r, e),
    f: r.base.features,
    m: Array.from(r.base.marked),
  };
}
function zo(e) {
  return e;
}
function Bo(e) {
  return Na({
    tag: `$TSR/t/` + e.key,
    test: e.test,
    parse: {
      sync(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
      async async(t, n, r) {
        return { v: await n.parse(e.toSerializable(t)) };
      },
      stream(t, n, r) {
        return { v: n.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, n, r) {
      return e.fromSerializable(n.deserialize(t.v));
    },
  });
}
var Vo = class {
    constructor(e, t) {
      ((this.stream = e), (this.hint = t?.hint ?? `binary`));
    }
  },
  Ho = globalThis.Buffer,
  Uo = !!Ho && typeof Ho.from == `function`;
function Wo(e) {
  if (e.length === 0) return ``;
  if (Uo) return Ho.from(e).toString(`base64`);
  let t = 32768,
    n = [];
  for (let r = 0; r < e.length; r += t) {
    let i = e.subarray(r, r + t);
    n.push(String.fromCharCode.apply(null, i));
  }
  return btoa(n.join(``));
}
function Go(e) {
  if (e.length === 0) return new Uint8Array();
  if (Uo) {
    let t = Ho.from(e, `base64`);
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  let t = atob(e),
    n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
  return n;
}
var Ko = Object.create(null),
  L = Object.create(null),
  R = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(Go(e));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  qo = new TextEncoder(),
  Jo = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              typeof e == `string`
                ? t.enqueue(qo.encode(e))
                : t.enqueue(Go(e.$b64));
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Yo = `(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))`,
  Xo = `(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})`;
function Zo(e) {
  let t = Ki(),
    n = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: r } = await n.read();
          if (e) {
            t.return(void 0);
            break;
          }
          t.next(Wo(r));
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
function Qo(e) {
  let t = Ki(),
    n = e.getReader(),
    r = new TextDecoder(`utf-8`, { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          let { done: e, value: i } = await n.read();
          if (e) {
            try {
              let e = r.decode();
              e.length > 0 && t.next(e);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            let e = r.decode(i, { stream: !0 });
            e.length > 0 && t.next(e);
          } catch {
            t.next({ $b64: Wo(i) });
          }
        }
      } catch (e) {
        t.throw(e);
      } finally {
        n.releaseLock();
      }
    })(),
    t
  );
}
var $o = Na({
  tag: `tss/RawStream`,
  extends: [
    Na({
      tag: `tss/RawStreamFactory`,
      test(e) {
        return e === Ko;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Yo;
      },
      deserialize(e, t, n) {
        return Ko;
      },
    }),
    Na({
      tag: `tss/RawStreamFactoryText`,
      test(e) {
        return e === L;
      },
      parse: {
        sync(e, t, n) {
          return {};
        },
        async async(e, t, n) {
          return {};
        },
        stream(e, t, n) {
          return {};
        },
      },
      serialize(e, t, n) {
        return Xo;
      },
      deserialize(e, t, n) {
        return L;
      },
    }),
  ],
  test(e) {
    return e instanceof Vo;
  },
  parse: {
    sync(e, t, n) {
      let r = e.hint === `text` ? L : Ko;
      return {
        hint: t.parse(e.hint),
        factory: t.parse(r),
        stream: t.parse(Ki()),
      };
    },
    async async(e, t, n) {
      let r = e.hint === `text` ? L : Ko,
        i = e.hint === `text` ? Qo(e.stream) : Zo(e.stream);
      return {
        hint: await t.parse(e.hint),
        factory: await t.parse(r),
        stream: await t.parse(i),
      };
    },
    stream(e, t, n) {
      let r = e.hint === `text` ? L : Ko,
        i = e.hint === `text` ? Qo(e.stream) : Zo(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(r), stream: t.parse(i) };
    },
  },
  serialize(e, t, n) {
    return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
  },
  deserialize(e, t, n) {
    let r = t.deserialize(e.stream);
    return t.deserialize(e.hint) === `text` ? Jo(r) : R(r);
  },
});
function es(e) {
  return Na({
    tag: `tss/RawStream`,
    test: () => !1,
    parse: {},
    serialize() {
      throw Error(
        `RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.`,
      );
    },
    deserialize(t, n, r) {
      return e(
        typeof n?.deserialize == `function`
          ? n.deserialize(t.streamId)
          : t.streamId,
      );
    },
  });
}
var ts = Na({
    tag: `$TSR/Error`,
    test(e) {
      return e instanceof Error;
    },
    parse: {
      sync(e, t) {
        return { message: t.parse(e.message) };
      },
      async async(e, t) {
        return { message: await t.parse(e.message) };
      },
      stream(e, t) {
        return { message: t.parse(e.message) };
      },
    },
    serialize(e, t) {
      return `new Error(` + t.serialize(e.message) + `)`;
    },
    deserialize(e, t) {
      return Error(t.deserialize(e.message));
    },
  }),
  ns = {},
  rs = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(e) {
            try {
              t.enqueue(e);
            } catch {}
          },
          throw(e) {
            t.error(e);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  is = Na({
    tag: `seroval-plugins/web/ReadableStreamFactory`,
    test(e) {
      return e === ns;
    },
    parse: {
      sync() {
        return ns;
      },
      async async() {
        return await Promise.resolve(ns);
      },
      stream() {
        return ns;
      },
    },
    serialize() {
      return rs.toString();
    },
    deserialize() {
      return ns;
    },
  });
async function as(e, t) {
  try {
    for (;;) {
      let n = await t.read();
      if (n.done) {
        (e.return(n.value), t.releaseLock());
        break;
      }
      e.next(n.value);
    }
  } catch (n) {
    (t.releaseLock(), e.throw(n));
  }
}
function os(e) {
  (e.cancel().catch(() => {}), e.releaseLock());
}
function ss(e) {
  let t = Ki(),
    n = e.getReader(),
    r = os.bind(null, n);
  return (as(t, n).catch(r), [t, r]);
}
var cs = [
  ts,
  $o,
  Na({
    tag: `seroval/plugins/web/ReadableStream`,
    extends: [is],
    test(e) {
      return typeof ReadableStream > `u` ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(ns), stream: t.parse(Ki()) };
      },
      async async(e, t) {
        return { factory: await t.parse(ns), stream: await t.parse(ss(e)[0]) };
      },
      stream(e, t) {
        let [n, r] = ss(e);
        return (t.addCleanup(r), { factory: t.parse(ns), stream: t.parse(n) });
      },
    },
    serialize(e, t) {
      return `(` + t.serialize(e.factory) + `)(` + t.serialize(e.stream) + `)`;
    },
    deserialize(e, t) {
      let n = t.deserialize(e.stream);
      if (!n || typeof n != `object` || !Gi(n))
        throw Error(`Expected a stream source.`);
      return rs(n);
    },
  }),
];
function ls() {
  return [...(C()?.serializationAdapters?.map(Bo) ?? []), ...cs];
}
var us = new TextDecoder(),
  ds = new Uint8Array(),
  fs = 16777216,
  ps = 33554432,
  ms = 1024,
  hs = 1e5;
function gs(e) {
  let t = new Map(),
    n = new Map(),
    r = new Set(),
    i = !1,
    a = null,
    o = 0,
    s,
    c = new ReadableStream({
      start(e) {
        s = e;
      },
      cancel() {
        i = !0;
        try {
          a?.cancel();
        } catch {}
        (t.forEach((e) => {
          try {
            e.error(Error(`Framed response cancelled`));
          } catch {}
        }),
          t.clear(),
          n.clear(),
          r.clear());
      },
    });
  function l(e) {
    let i = n.get(e);
    if (i) return i;
    if (r.has(e))
      return new ReadableStream({
        start(e) {
          e.close();
        },
      });
    if (n.size >= ms)
      throw Error(`Too many raw streams in framed response (max ${ms})`);
    let a = new ReadableStream({
      start(n) {
        t.set(e, n);
      },
      cancel() {
        (r.add(e), t.delete(e), n.delete(e));
      },
    });
    return (n.set(e, a), a);
  }
  function u(e) {
    return (l(e), t.get(e));
  }
  return (
    (async () => {
      let n = e.getReader();
      a = n;
      let c = [],
        l = 0;
      function d() {
        if (l < 9) return null;
        let e = c[0];
        if (e.length >= 9)
          return {
            type: e[0],
            streamId: ((e[1] << 24) | (e[2] << 16) | (e[3] << 8) | e[4]) >>> 0,
            length: ((e[5] << 24) | (e[6] << 16) | (e[7] << 8) | e[8]) >>> 0,
          };
        let t = new Uint8Array(9),
          n = 0,
          r = 9;
        for (let e = 0; e < c.length && r > 0; e++) {
          let i = c[e],
            a = Math.min(i.length, r);
          (t.set(i.subarray(0, a), n), (n += a), (r -= a));
        }
        return {
          type: t[0],
          streamId: ((t[1] << 24) | (t[2] << 16) | (t[3] << 8) | t[4]) >>> 0,
          length: ((t[5] << 24) | (t[6] << 16) | (t[7] << 8) | t[8]) >>> 0,
        };
      }
      function f(e) {
        if (e === 0) return ds;
        let t = c[0];
        if (t && t.length >= e) {
          let n = t.subarray(0, e);
          return (
            t.length === e ? c.shift() : (c[0] = t.subarray(e)),
            (l -= e),
            n
          );
        }
        let n = new Uint8Array(e),
          r = 0,
          i = e;
        for (; i > 0 && c.length > 0;) {
          let e = c[0];
          if (!e) break;
          let t = Math.min(e.length, i);
          (n.set(e.subarray(0, t), r),
            (r += t),
            (i -= t),
            t === e.length ? c.shift() : (c[0] = e.subarray(t)));
        }
        return ((l -= e), n);
      }
      try {
        for (;;) {
          let { done: e, value: a } = await n.read();
          if (i || e) break;
          if (a) {
            if (l + a.length > ps)
              throw Error(`Framed response buffer exceeded ${ps} bytes`);
            for (c.push(a), l += a.length; ;) {
              let e = d();
              if (!e) break;
              let { type: n, streamId: i, length: a } = e;
              if (n !== b.JSON && n !== b.CHUNK && n !== b.END && n !== b.ERROR)
                throw Error(`Unknown frame type: ${n}`);
              if (n === b.JSON) {
                if (i !== 0)
                  throw Error(`Invalid JSON frame streamId (expected 0)`);
              } else if (i === 0)
                throw Error(`Invalid raw frame streamId (expected non-zero)`);
              if (a > fs)
                throw Error(`Frame payload too large: ${a} bytes (max ${fs})`);
              let c = 9 + a;
              if (l < c) break;
              if (++o > hs)
                throw Error(`Too many frames in framed response (max ${hs})`);
              f(9);
              let p = f(a);
              switch (n) {
                case b.JSON:
                  try {
                    s.enqueue(us.decode(p));
                  } catch {}
                  break;
                case b.CHUNK: {
                  let e = u(i);
                  e && e.enqueue(p);
                  break;
                }
                case b.END: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    try {
                      e.close();
                    } catch {}
                    t.delete(i);
                  }
                  break;
                }
                case b.ERROR: {
                  let e = u(i);
                  if ((r.add(i), e)) {
                    let n = us.decode(p);
                    (e.error(Error(n)), t.delete(i));
                  }
                  break;
                }
              }
            }
          }
        }
        if (l !== 0) throw Error(`Incomplete frame at end of framed response`);
        try {
          s.close();
        } catch {}
        (t.forEach((e) => {
          try {
            e.close();
          } catch {}
        }),
          t.clear());
      } catch (e) {
        try {
          s.error(e);
        } catch {}
        (t.forEach((t) => {
          try {
            t.error(e);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          n.releaseLock();
        } catch {}
        a = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: c }
  );
}
var _s = null;
async function vs(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var ys = Object.prototype.hasOwnProperty;
function bs(e) {
  for (let t in e) if (ys.call(e, t)) return !0;
  return !1;
}
async function xs(e, t, n) {
  _s ||= ls();
  let r = t[0],
    i = r.fetch ?? n,
    a = r.data instanceof FormData ? `formData` : `payload`,
    o = r.headers ? new Headers(r.headers) : new Headers();
  if (
    (o.set(`x-tsr-serverFn`, `true`),
    a === `payload` &&
      o.set(`accept`, `${y}, application/x-ndjson, application/json`),
    r.method === `GET`)
  ) {
    if (a === `formData`)
      throw Error(`FormData is not supported with GET requests`);
    let t = await Ss(r);
    if (t !== void 0) {
      let n = xt({ payload: t });
      e.includes(`?`) ? (e += `&${n}`) : (e += `?${n}`);
    }
  }
  let s;
  if (r.method === `POST`) {
    let e = await ws(r);
    (e?.contentType && o.set(`content-type`, e.contentType), (s = e?.body));
  }
  return await Ts(async () =>
    i(e, { method: r.method, headers: o, signal: r.signal, body: s }),
  );
}
async function Ss(e) {
  let t = !1,
    n = {};
  if (
    (e.data !== void 0 && ((t = !0), (n.data = e.data)),
    e.context && bs(e.context) && ((t = !0), (n.context = e.context)),
    t)
  )
    return Cs(n);
}
async function Cs(e) {
  return JSON.stringify(await Promise.resolve(Ro(e, { plugins: _s })));
}
async function ws(e) {
  if (e.data instanceof FormData) {
    let t;
    return (
      e.context && bs(e.context) && (t = await Cs(e.context)),
      t !== void 0 && e.data.set(_, t),
      { body: e.data }
    );
  }
  let t = await Ss(e);
  if (t) return { body: t, contentType: `application/json` };
}
async function Ts(e) {
  let t;
  try {
    t = await e();
  } catch (e) {
    if (e instanceof Response) t = e;
    else throw (console.log(e), e);
  }
  if (t.headers.get(`x-tss-raw`) === `true`) return t;
  let n = t.headers.get(`content-type`);
  if ((n || we(), t.headers.get(`x-tss-serialized`))) {
    let e;
    if (n.includes(`application/x-tss-framed`)) {
      if ((S(n), !t.body)) throw Error(`No response body for framed response`);
      let { getOrCreateStream: r, jsonChunks: i } = gs(t.body),
        a = [es(r), ...(_s || [])],
        o = new Map();
      e = await Es({
        jsonStream: i,
        onMessage: (e) => Lo(e, { refs: o, plugins: a }),
        onError(e, t) {
          console.error(e, t);
        },
      });
    } else if (n.includes(`application/json`)) {
      let n = await t.json(),
        r = [];
      try {
        e = Lo(n, { plugins: _s });
      } finally {
      }
      await vs(r);
    }
    if ((e || we(), e instanceof Error)) throw e;
    return e;
  }
  if (n.includes(`application/json`)) {
    let e = await t.json(),
      n = At(e);
    if (n) throw n;
    if (A(e)) throw e;
    return e;
  }
  if (!t.ok) throw Error(await t.text());
  return t;
}
async function Es({ jsonStream: e, onMessage: t, onError: n }) {
  let r = e.getReader(),
    { value: i, done: a } = await r.read();
  if (a || !i) throw Error(`Stream ended before first object`);
  let o = JSON.parse(i),
    s = !1,
    c = (async () => {
      try {
        for (;;) {
          let { value: e, done: i } = await r.read();
          if (i) break;
          if (e)
            try {
              let n = [];
              try {
                t(JSON.parse(e));
              } finally {
              }
              await vs(n);
            } catch (t) {
              n?.(`Invalid JSON: ${e}`, t);
            }
        }
      } catch (e) {
        s || n?.(`Stream processing error:`, e);
      }
    })(),
    l,
    u = [];
  try {
    l = t(o);
  } catch (e) {
    throw ((s = !0), r.cancel().catch(() => {}), e);
  }
  return (
    await vs(u),
    Promise.resolve(l).catch(() => {
      ((s = !0), r.cancel().catch(() => {}));
    }),
    c.finally(() => {
      try {
        r.releaseLock();
      } catch {}
    }),
    l
  );
}
function Ds(e) {
  let t = `/_serverFn/` + e;
  return Object.assign(
    (...e) => {
      let n = C()?.serverFns?.fetch;
      return xs(t, e, n ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [v]: !0 },
  );
}
var Os = zo({
  key: `$TSS/serverfn`,
  test: (e) => (typeof e != `function` || !(v in e) ? !1 : !!e[v]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => Ds(e),
});
function ks(e) {
  return e.replaceAll(`\0`, `/`).replaceAll(`�`, `/`);
}
function As(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function js(e) {
  window.$_TSR || we();
  let t = e.options.serializationAdapters;
  if (t?.length) {
    let e = new Map();
    (t.forEach((t) => {
      e.set(t.key, t.fromSerializable);
    }),
      (window.$_TSR.t = e),
      window.$_TSR.buffer.forEach((e) => e()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || we());
  let n = window.$_TSR.router;
  (n.matches.forEach((e) => {
    e.i = ks(e.i);
  }),
    (n.lastMatchId &&= ks(n.lastMatchId)));
  let { manifest: r, dehydratedData: i, lastMatchId: a } = n;
  e.ssr = { manifest: r };
  let o = document.querySelector(`meta[property="csp-nonce"]`)?.content;
  ((e.options.ssr = { nonce: o }), await e.options.hydrate?.(i));
  let s = e.matchRoutes(e.stores.location.get()),
    c = Promise.all(
      s.map((t) => e.loadRouteChunk(e.looseRoutesById[t.routeId])),
    );
  function l(t) {
    let n =
      e.looseRoutesById[t.routeId].options.pendingMinMs ??
      e.options.defaultPendingMinMs;
    if (n) {
      let r = fe();
      ((t._nonReactive.minPendingPromise = r),
        (t._forcePending = !0),
        setTimeout(() => {
          (r.resolve(),
            e.updateMatch(
              t.id,
              (e) => (
                (e._nonReactive.minPendingPromise = void 0),
                { ...e, _forcePending: void 0 }
              ),
            ));
        }, n));
    }
  }
  function u(t) {
    let n = e.looseRoutesById[t.routeId];
    n && (n.options.ssr = t.ssr);
  }
  let d;
  (s.forEach((e) => {
    let t = n.matches.find((t) => t.i === e.id);
    if (!t) {
      ((e._nonReactive.dehydrated = !1), (e.ssr = !1), u(e));
      return;
    }
    (As(e, t),
      u(e),
      (e._nonReactive.dehydrated = e.ssr !== !1),
      (e.ssr === `data-only` || e.ssr === !1) &&
        d === void 0 &&
        ((d = e.index), l(e)));
  }),
    e.stores.setMatches(s));
  let f = e.stores.matches.get(),
    p = e.stores.location.get();
  await Promise.all(
    f.map(async (t) => {
      try {
        let n = e.looseRoutesById[t.routeId],
          r = f[t.index - 1]?.context ?? e.options.context;
        if (n.options.context) {
          let i = {
            deps: t.loaderDeps,
            params: t.params,
            context: r ?? {},
            location: p,
            navigate: (t) => e.navigate({ ...t, _fromLocation: p }),
            buildLocation: e.buildLocation,
            cause: t.cause,
            abortController: t.abortController,
            preload: !1,
            matches: s,
            routeId: n.id,
          };
          t.__routeContext = n.options.context(i) ?? void 0;
        }
        t.context = { ...r, ...t.__routeContext, ...t.__beforeLoadContext };
        let i = {
            ssr: e.options.ssr,
            matches: f,
            match: t,
            params: t.params,
            loaderData: t.loaderData,
          },
          a = await n.options.head?.(i),
          o = await n.options.scripts?.(i);
        ((t.meta = a?.meta),
          (t.links = a?.links),
          (t.headScripts = a?.scripts),
          (t.styles = a?.styles),
          (t.scripts = o));
      } catch (e) {
        if (A(e))
          ((t.error = { isNotFound: !0 }),
            console.error(
              `NotFound error during hydration for routeId: ${t.routeId}`,
              e,
            ));
        else
          throw (
            (t.error = e),
            console.error(`Error during hydration for route ${t.routeId}:`, e),
            e
          );
      }
    }),
  );
  let m = s[s.length - 1].id !== a;
  if (!s.some((e) => e.ssr === !1) && !m)
    return (
      s.forEach((e) => {
        e._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      c
    );
  let h = Promise.resolve()
    .then(() => e.load())
    .catch((e) => {
      console.error(`Error during router hydration:`, e);
    });
  if (m) {
    let t = s[1];
    (t || we(),
      l(t),
      (t._displayPending = !0),
      (t._nonReactive.displayPendingPromise = h),
      h.then(() => {
        e.batch(() => {
          (e.stores.status.get() === `pending` &&
            (e.stores.status.set(`idle`),
            e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(t.id, (e) => ({
              ...e,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return c;
}
var z = c(u(), 1),
  Ms = z.use,
  Ns = typeof window < `u` ? z.useLayoutEffect : z.useEffect;
function Ps(e) {
  let t = z.useRef({ value: e, prev: null }),
    n = t.current.value;
  return (e !== n && (t.current = { value: e, prev: n }), t.current.prev);
}
function Fs(e, t, n = {}, r = {}) {
  z.useEffect(() => {
    if (!e.current || r.disabled || typeof IntersectionObserver != `function`)
      return;
    let i = new IntersectionObserver(([e]) => {
      t(e);
    }, n);
    return (
      i.observe(e.current),
      () => {
        i.disconnect();
      }
    );
  }, [t, n, r.disabled, e]);
}
function Is(e) {
  let t = z.useRef(null);
  return (z.useImperativeHandle(e, () => t.current, []), t);
}
var Ls = o((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if (
        (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key` in n)
      )
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref),
        { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  Rs = o((e, t) => {
    t.exports = Ls();
  }),
  B = Rs();
function zs({ promise: e }) {
  if (Ms) return Ms(e);
  let t = On(e);
  if (t[Dn].status === `pending`) throw t;
  if (t[Dn].status === `error`) throw t[Dn].error;
  return t[Dn].data;
}
function Bs(e) {
  let t = (0, B.jsx)(Vs, { ...e });
  return e.fallback
    ? (0, B.jsx)(z.Suspense, { fallback: e.fallback, children: t })
    : t;
}
function Vs(e) {
  let t = zs(e);
  return e.children(t);
}
function Hs(e) {
  let t = e.errorComponent ?? Ws;
  return (0, B.jsx)(Us, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: n, reset: r }) =>
      n ? z.createElement(t, { error: n, reset: r }) : e.children,
  });
}
var Us = class extends z.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    let n = e.getResetKey();
    return t.error && t.resetKey !== n
      ? { resetKey: n, error: null }
      : { resetKey: n };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Ws({ error: e }) {
  let [t, n] = z.useState(!1);
  return (0, B.jsxs)(`div`, {
    style: { padding: `.5rem`, maxWidth: `100%` },
    children: [
      (0, B.jsxs)(`div`, {
        style: { display: `flex`, alignItems: `center`, gap: `.5rem` },
        children: [
          (0, B.jsx)(`strong`, {
            style: { fontSize: `1rem` },
            children: `Something went wrong!`,
          }),
          (0, B.jsx)(`button`, {
            style: {
              appearance: `none`,
              fontSize: `.6em`,
              border: `1px solid currentColor`,
              padding: `.1rem .2rem`,
              fontWeight: `bold`,
              borderRadius: `.25rem`,
            },
            onClick: () => n((e) => !e),
            children: t ? `Hide Error` : `Show Error`,
          }),
        ],
      }),
      (0, B.jsx)(`div`, { style: { height: `.25rem` } }),
      t
        ? (0, B.jsx)(`div`, {
            children: (0, B.jsx)(`pre`, {
              style: {
                fontSize: `.7em`,
                border: `1px solid red`,
                borderRadius: `.25rem`,
                padding: `.3rem`,
                color: `red`,
                overflow: `auto`,
              },
              children: e.message
                ? (0, B.jsx)(`code`, { children: e.message })
                : null,
            }),
          })
        : null,
    ],
  });
}
function Gs({ children: e, fallback: t = null }) {
  return Ks()
    ? (0, B.jsx)(z.Fragment, { children: e })
    : (0, B.jsx)(z.Fragment, { children: t });
}
function Ks() {
  return z.useSyncExternalStore(
    qs,
    () => !0,
    () => !1,
  );
}
function qs() {
  return () => {};
}
var Js = z.createContext(null);
function Ys(e) {
  return z.useContext(Js);
}
var Xs = z.createContext(void 0),
  Zs = z.createContext(void 0),
  Qs = ((e) => (
    (e[(e.None = 0)] = `None`),
    (e[(e.Mutable = 1)] = `Mutable`),
    (e[(e.Watching = 2)] = `Watching`),
    (e[(e.RecursedCheck = 4)] = `RecursedCheck`),
    (e[(e.Recursed = 8)] = `Recursed`),
    (e[(e.Dirty = 16)] = `Dirty`),
    (e[(e.Pending = 32)] = `Pending`),
    e
  ))(Qs || {});
function $s({ update: e, notify: t, unwatched: n }) {
  return {
    link: r,
    unlink: i,
    propagate: a,
    checkDirty: o,
    shallowPropagate: s,
  };
  function r(e, t, n) {
    let r = t.depsTail;
    if (r !== void 0 && r.dep === e) return;
    let i = r === void 0 ? t.deps : r.nextDep;
    if (i !== void 0 && i.dep === e) {
      ((i.version = n), (t.depsTail = i));
      return;
    }
    let a = e.subsTail;
    if (a !== void 0 && a.version === n && a.sub === t) return;
    let o =
      (t.depsTail =
      e.subsTail =
        {
          version: n,
          dep: e,
          sub: t,
          prevDep: r,
          nextDep: i,
          prevSub: a,
          nextSub: void 0,
        });
    (i !== void 0 && (i.prevDep = o),
      r === void 0 ? (t.deps = o) : (r.nextDep = o),
      a === void 0 ? (e.subs = o) : (a.nextSub = o));
  }
  function i(e, t = e.sub) {
    let r = e.dep,
      i = e.prevDep,
      a = e.nextDep,
      o = e.nextSub,
      s = e.prevSub;
    return (
      a === void 0 ? (t.depsTail = i) : (a.prevDep = i),
      i === void 0 ? (t.deps = a) : (i.nextDep = a),
      o === void 0 ? (r.subsTail = s) : (o.prevSub = s),
      s === void 0 ? (r.subs = o) === void 0 && n(r) : (s.nextSub = o),
      a
    );
  }
  function a(e) {
    let n = e.nextSub,
      r;
    top: do {
      let i = e.sub,
        a = i.flags;
      if (
        (a & 60
          ? a & 12
            ? a & 4
              ? !(a & 48) && c(e, i)
                ? ((i.flags = a | 40), (a &= 1))
                : (a = 0)
              : (i.flags = (a & -9) | 32)
            : (a = 0)
          : (i.flags = a | 32),
        a & 2 && t(i),
        a & 1)
      ) {
        let t = i.subs;
        if (t !== void 0) {
          let i = (e = t).nextSub;
          i !== void 0 && ((r = { value: n, prev: r }), (n = i));
          continue;
        }
      }
      if ((e = n) !== void 0) {
        n = e.nextSub;
        continue;
      }
      for (; r !== void 0;)
        if (((e = r.value), (r = r.prev), e !== void 0)) {
          n = e.nextSub;
          continue top;
        }
      break;
    } while (!0);
  }
  function o(t, n) {
    let r,
      i = 0,
      a = !1;
    top: do {
      let o = t.dep,
        c = o.flags;
      if (n.flags & 16) a = !0;
      else if ((c & 17) == 17) {
        if (e(o)) {
          let e = o.subs;
          (e.nextSub !== void 0 && s(e), (a = !0));
        }
      } else if ((c & 33) == 33) {
        ((t.nextSub !== void 0 || t.prevSub !== void 0) &&
          (r = { value: t, prev: r }),
          (t = o.deps),
          (n = o),
          ++i);
        continue;
      }
      if (!a) {
        let e = t.nextDep;
        if (e !== void 0) {
          t = e;
          continue;
        }
      }
      for (; i--;) {
        let i = n.subs,
          o = i.nextSub !== void 0;
        if ((o ? ((t = r.value), (r = r.prev)) : (t = i), a)) {
          if (e(n)) {
            (o && s(i), (n = t.sub));
            continue;
          }
          a = !1;
        } else n.flags &= -33;
        n = t.sub;
        let c = t.nextDep;
        if (c !== void 0) {
          t = c;
          continue top;
        }
      }
      return a;
    } while (!0);
  }
  function s(e) {
    do {
      let n = e.sub,
        r = n.flags;
      (r & 48) == 32 && ((n.flags = r | 16), (r & 6) == 2 && t(n));
    } while ((e = e.nextSub) !== void 0);
  }
  function c(e, t) {
    let n = t.depsTail;
    for (; n !== void 0;) {
      if (n === e) return !0;
      n = n.prevDep;
    }
    return !1;
  }
}
function ec(e, t, n) {
  let r = typeof e == `object`,
    i = r ? e : void 0;
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  };
}
var tc = [],
  nc = 0,
  {
    link: rc,
    unlink: ic,
    propagate: ac,
    checkDirty: oc,
    shallowPropagate: sc,
  } = $s({
    update(e) {
      return e._update();
    },
    notify(e) {
      ((tc[lc++] = e), (e.flags &= ~Qs.Watching));
    },
    unwatched(e) {
      e.depsTail !== void 0 &&
        ((e.depsTail = void 0), (e.flags = Qs.Mutable | Qs.Dirty), pc(e));
    },
  }),
  cc = 0,
  lc = 0,
  uc,
  dc = 0;
function fc(e) {
  try {
    (++dc, e());
  } finally {
    --dc || mc();
  }
}
function pc(e) {
  let t = e.depsTail,
    n = t === void 0 ? e.deps : t.nextDep;
  for (; n !== void 0;) n = ic(n, e);
}
function mc() {
  if (!(dc > 0)) {
    for (; cc < lc;) {
      let e = tc[cc];
      ((tc[cc++] = void 0), e.notify());
    }
    ((cc = 0), (lc = 0));
  }
}
function hc(e, t) {
  let n = typeof e == `function`,
    r = e,
    i = {
      _snapshot: n ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: n ? Qs.None : Qs.Mutable,
      get() {
        return (uc !== void 0 && rc(i, uc, nc), i._snapshot);
      },
      subscribe(e) {
        let t = ec(e),
          n = { current: !1 },
          r = gc(() => {
            (i.get(), n.current ? t.next?.(i._snapshot) : (n.current = !0));
          });
        return {
          unsubscribe: () => {
            r.stop();
          },
        };
      },
      _update(e) {
        let a = uc,
          o = t?.compare ?? Object.is;
        if (n) ((uc = i), ++nc, (i.depsTail = void 0));
        else if (e === void 0) return !1;
        n && (i.flags = Qs.Mutable | Qs.RecursedCheck);
        try {
          let t = i._snapshot,
            a = typeof e == `function` ? e(t) : e === void 0 && n ? r(t) : e;
          return t === void 0 || !o(t, a) ? ((i._snapshot = a), !0) : !1;
        } finally {
          ((uc = a), n && (i.flags &= ~Qs.RecursedCheck), pc(i));
        }
      },
    };
  return (
    n
      ? ((i.flags = Qs.Mutable | Qs.Dirty),
        (i.get = function () {
          let e = i.flags;
          if (e & Qs.Dirty || (e & Qs.Pending && oc(i.deps, i))) {
            if (i._update()) {
              let e = i.subs;
              e !== void 0 && sc(e);
            }
          } else e & Qs.Pending && (i.flags = e & ~Qs.Pending);
          return (uc !== void 0 && rc(i, uc, nc), i._snapshot);
        }))
      : (i.set = function (e) {
          if (i._update(e)) {
            let e = i.subs;
            e !== void 0 && (ac(e), sc(e), mc());
          }
        }),
    i
  );
}
function gc(e) {
  let t = () => {
      let t = uc;
      ((uc = n),
        ++nc,
        (n.depsTail = void 0),
        (n.flags = Qs.Watching | Qs.RecursedCheck));
      try {
        return e();
      } finally {
        ((uc = t), (n.flags &= ~Qs.RecursedCheck), pc(n));
      }
    },
    n = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: Qs.Watching | Qs.RecursedCheck,
      notify() {
        let e = this.flags;
        e & Qs.Dirty || (e & Qs.Pending && oc(this.deps, this))
          ? t()
          : (this.flags = Qs.Watching);
      },
      stop() {
        ((this.flags = Qs.None), (this.depsTail = void 0), pc(this));
      },
    };
  return (t(), n);
}
var _c = o((e) => {
    var t = u();
    function n(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var r = typeof Object.is == `function` ? Object.is : n,
      i = t.useState,
      a = t.useEffect,
      o = t.useLayoutEffect,
      s = t.useDebugValue;
    function c(e, t) {
      var n = t(),
        r = i({ inst: { value: n, getSnapshot: t } }),
        c = r[0].inst,
        u = r[1];
      return (
        o(
          function () {
            ((c.value = n), (c.getSnapshot = t), l(c) && u({ inst: c }));
          },
          [e, n, t],
        ),
        a(
          function () {
            return (
              l(c) && u({ inst: c }),
              e(function () {
                l(c) && u({ inst: c });
              })
            );
          },
          [e],
        ),
        s(n),
        n
      );
    }
    function l(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !r(e, n);
      } catch {
        return !0;
      }
    }
    function d(e, t) {
      return t();
    }
    var f =
      typeof window > `u` ||
      window.document === void 0 ||
      window.document.createElement === void 0
        ? d
        : c;
    e.useSyncExternalStore =
      t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
  }),
  vc = o((e, t) => {
    t.exports = _c();
  }),
  yc = o((e) => {
    var t = u(),
      n = vc();
    function r(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var i = typeof Object.is == `function` ? Object.is : r,
      a = n.useSyncExternalStore,
      o = t.useRef,
      s = t.useEffect,
      c = t.useMemo,
      l = t.useDebugValue;
    e.useSyncExternalStoreWithSelector = function (e, t, n, r, u) {
      var d = o(null);
      if (d.current === null) {
        var f = { hasValue: !1, value: null };
        d.current = f;
      } else f = d.current;
      d = c(
        function () {
          function e(e) {
            if (!a) {
              if (((a = !0), (o = e), (e = r(e)), u !== void 0 && f.hasValue)) {
                var t = f.value;
                if (u(t, e)) return (s = t);
              }
              return (s = e);
            }
            if (((t = s), i(o, e))) return t;
            var n = r(e);
            return u !== void 0 && u(t, n) ? ((o = e), t) : ((o = e), (s = n));
          }
          var a = !1,
            o,
            s,
            c = n === void 0 ? null : n;
          return [
            function () {
              return e(t());
            },
            c === null
              ? void 0
              : function () {
                  return e(c());
                },
          ];
        },
        [t, n, r, u],
      );
      var p = a(e, d[0], d[1]);
      return (
        s(
          function () {
            ((f.hasValue = !0), (f.value = p));
          },
          [p],
        ),
        l(p),
        p
      );
    };
  }),
  bc = o((e, t) => {
    t.exports = yc();
  })();
function xc(e, t) {
  return e === t;
}
function Sc(e, t, n = xc) {
  let r = (0, z.useCallback)(
      (t) => {
        if (!e) return () => {};
        let { unsubscribe: n } = e.subscribe(t);
        return n;
      },
      [e],
    ),
    i = (0, z.useCallback)(() => e?.get(), [e]);
  return (0, bc.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
var Cc = {
  get() {},
  subscribe() {
    return { unsubscribe() {} };
  },
};
function wc(e, t) {
  let n = z.useRef();
  return (r) => {
    let i = e?.select ? e.select(r) : r;
    return (e?.structuralSharing ?? t.options.defaultStructuralSharing)
      ? (n.current = se(n.current, i))
      : i;
  };
}
function Tc(e) {
  let t = Ys(),
    n = z.useContext(e.from ? Zs : Xs),
    r = e.from
      ? t.stores.getRouteMatchStore(e.from)
      : t.stores.matchStores.get(n),
    i = wc(e, t),
    a = Sc(r ?? Cc, (e) => (e ? i(e) : Cc));
  if (a !== Cc) return a;
  (e.shouldThrow ?? !0) && we();
}
function Ec(e) {
  return Tc({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function Dc(e) {
  let { select: t, ...n } = e;
  return Tc({ ...n, select: (e) => (t ? t(e.loaderDeps) : e.loaderDeps) });
}
function Oc(e) {
  return Tc({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      let n = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(n) : n;
    },
  });
}
function kc(e) {
  return Tc({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Ac(e) {
  let t = Ys();
  return z.useCallback(
    (n) => t.navigate({ ...n, from: n.from ?? e?.from }),
    [e?.from, t],
  );
}
function jc(e) {
  return Tc({
    ...e,
    select: (t) => (e.select ? e.select(t.context) : t.context),
  });
}
var Mc = m();
function Nc(e, t) {
  let n = Ys(),
    r = Is(t),
    {
      activeProps: i,
      inactiveProps: a,
      activeOptions: o,
      to: s,
      preload: c,
      preloadDelay: l,
      preloadIntentProximity: u,
      hashScrollIntoView: d,
      replace: f,
      startTransition: p,
      resetScroll: m,
      viewTransition: h,
      children: g,
      target: _,
      disabled: v,
      style: y,
      className: b,
      onClick: x,
      onBlur: ee,
      onFocus: S,
      onMouseEnter: C,
      onMouseLeave: w,
      onTouchStart: te,
      ignoreBlocker: ne,
      params: re,
      search: ie,
      hash: ae,
      state: oe,
      mask: se,
      reloadDocument: ce,
      unsafeRelative: le,
      from: E,
      _fromLocation: ue,
      ...fe
    } = e,
    pe = Ks(),
    me = z.useMemo(
      () => e,
      [
        n,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    he = Sc(
      n.stores.location,
      (e) => e,
      (e, t) => e.href === t.href,
    ),
    ge = z.useMemo(() => {
      let e = { _fromLocation: he, ...me };
      return n.buildLocation(e);
    }, [n, he, me]),
    _e = ge.maskedLocation ? ge.maskedLocation.publicHref : ge.publicHref,
    ve = ge.maskedLocation ? ge.maskedLocation.external : ge.external,
    be = z.useMemo(() => Hc(_e, ve, n.history, v), [v, ve, _e, n.history]),
    xe = z.useMemo(() => {
      if (be?.external)
        return ye(be.href, n.protocolAllowlist) ? void 0 : be.href;
      if (!Uc(s) && typeof s == `string` && s.indexOf(`:`) !== -1)
        try {
          return (new URL(s), ye(s, n.protocolAllowlist) ? void 0 : s);
        } catch {}
    }, [s, be, n.protocolAllowlist]),
    Se = z.useMemo(() => {
      if (xe) return !1;
      if (o?.exact) {
        if (!tt(he.pathname, ge.pathname, n.basepath)) return !1;
      } else {
        let e = et(he.pathname, n.basepath),
          t = et(ge.pathname, n.basepath);
        if (!(
          e.startsWith(t) &&
          (e.length === t.length || e[t.length] === `/`)
        ))
          return !1;
      }
      return (o?.includeSearch ?? !0) &&
        !de(he.search, ge.search, {
          partial: !o?.exact,
          ignoreUndefined: !o?.explicitUndefined,
        })
        ? !1
        : !o?.includeHash || (pe && he.hash === ge.hash);
    }, [
      o?.exact,
      o?.explicitUndefined,
      o?.includeHash,
      o?.includeSearch,
      he,
      xe,
      pe,
      ge.hash,
      ge.pathname,
      ge.search,
      n.basepath,
    ]),
    Ce = Se ? (T(i, {}) ?? Fc) : Pc,
    D = Se ? Pc : (T(a, {}) ?? Pc),
    O = [b, Ce.className, D.className].filter(Boolean).join(` `),
    we = (y || Ce.style || D.style) && { ...y, ...Ce.style, ...D.style },
    [Te, Ee] = z.useState(!1),
    De = z.useRef(!1),
    Oe = e.reloadDocument || xe ? !1 : (c ?? n.options.defaultPreload),
    k = l ?? n.options.defaultPreloadDelay ?? 0,
    ke = z.useCallback(() => {
      n.preloadRoute({ ...me, _builtLocation: ge }).catch((e) => {
        (console.warn(e), console.warn(kn));
      });
    }, [n, me, ge]);
  (Fs(
    r,
    z.useCallback(
      (e) => {
        e?.isIntersecting && ke();
      },
      [ke],
    ),
    Bc,
    { disabled: !!v || Oe !== `viewport` },
  ),
    z.useEffect(() => {
      De.current || (!v && Oe === `render` && (ke(), (De.current = !0)));
    }, [v, ke, Oe]));
  let Ae = (e) => {
    let t = e.currentTarget.getAttribute(`target`),
      r = _ === void 0 ? t : _;
    if (
      !v &&
      !Gc(e) &&
      !e.defaultPrevented &&
      (!r || r === `_self`) &&
      e.button === 0
    ) {
      (e.preventDefault(),
        (0, Mc.flushSync)(() => {
          Ee(!0);
        }));
      let t = n.subscribe(`onResolved`, () => {
        (t(), Ee(!1));
      });
      n.navigate({
        ...me,
        replace: f,
        resetScroll: m,
        hashScrollIntoView: d,
        startTransition: p,
        viewTransition: h,
        ignoreBlocker: ne,
      });
    }
  };
  if (xe)
    return {
      ...fe,
      ref: r,
      href: xe,
      ...(g && { children: g }),
      ...(_ && { target: _ }),
      ...(v && { disabled: v }),
      ...(y && { style: y }),
      ...(b && { className: b }),
      ...(x && { onClick: x }),
      ...(ee && { onBlur: ee }),
      ...(S && { onFocus: S }),
      ...(C && { onMouseEnter: C }),
      ...(w && { onMouseLeave: w }),
      ...(te && { onTouchStart: te }),
    };
  let je = (e) => {
      if (v || Oe !== `intent`) return;
      if (!k) {
        ke();
        return;
      }
      let t = e.currentTarget;
      if (zc.has(t)) return;
      let n = setTimeout(() => {
        (zc.delete(t), ke());
      }, k);
      zc.set(t, n);
    },
    Me = (e) => {
      v || Oe !== `intent` || ke();
    },
    Ne = (e) => {
      if (v || !Oe || !k) return;
      let t = e.currentTarget,
        n = zc.get(t);
      n && (clearTimeout(n), zc.delete(t));
    };
  return {
    ...fe,
    ...Ce,
    ...D,
    href: be?.href,
    ref: r,
    onClick: Vc([x, Ae]),
    onBlur: Vc([ee, Ne]),
    onFocus: Vc([S, je]),
    onMouseEnter: Vc([C, je]),
    onMouseLeave: Vc([w, Ne]),
    onTouchStart: Vc([te, Me]),
    disabled: !!v,
    target: _,
    ...(we && { style: we }),
    ...(O && { className: O }),
    ...(v && Ic),
    ...(Se && Lc),
    ...(pe && Te && Rc),
  };
}
var Pc = {},
  Fc = { className: `active` },
  Ic = { role: `link`, "aria-disabled": !0 },
  Lc = { "data-status": `active`, "aria-current": `page` },
  Rc = { "data-transitioning": `transitioning` },
  zc = new WeakMap(),
  Bc = { rootMargin: `100px` },
  Vc = (e) => (t) => {
    for (let n of e)
      if (n) {
        if (t.defaultPrevented) return;
        n(t);
      }
  };
function Hc(e, t, n, r) {
  if (!r)
    return t
      ? { href: e, external: !0 }
      : { href: n.createHref(e) || `/`, external: !1 };
}
function Uc(e) {
  if (typeof e != `string`) return !1;
  let t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var Wc = z.forwardRef((e, t) => {
  let { _asChild: n, ...r } = e,
    { type: i, ...a } = Nc(r, t),
    o =
      typeof r.children == `function`
        ? r.children({ isActive: a[`data-status`] === `active` })
        : r.children;
  if (!n) {
    let { disabled: e, ...t } = a;
    return z.createElement(`a`, t, o);
  }
  return z.createElement(n, a, o);
});
function Gc(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var Kc = class extends In {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        Tc({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => jc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        kc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        Oc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => Dc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Ec({ ...e, from: this.id })),
      (this.useNavigate = () => Ac({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) =>
        (0, B.jsx)(Wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function qc(e) {
  return new Kc(e);
}
function Jc() {
  return (e) => Xc(e);
}
var Yc = class extends Ln {
  constructor(e) {
    (super(e),
      (this.useMatch = (e) =>
        Tc({
          select: e?.select,
          from: this.id,
          structuralSharing: e?.structuralSharing,
        })),
      (this.useRouteContext = (e) => jc({ ...e, from: this.id })),
      (this.useSearch = (e) =>
        kc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useParams = (e) =>
        Oc({
          select: e?.select,
          structuralSharing: e?.structuralSharing,
          from: this.id,
        })),
      (this.useLoaderDeps = (e) => Dc({ ...e, from: this.id })),
      (this.useLoaderData = (e) => Ec({ ...e, from: this.id })),
      (this.useNavigate = () => Ac({ from: this.fullPath })),
      (this.Link = z.forwardRef((e, t) =>
        (0, B.jsx)(Wc, { ref: t, from: this.fullPath, ...e }),
      )));
  }
};
function Xc(e) {
  return new Yc(e);
}
function Zc(e) {
  return new Qc(e, { silent: !0 }).createRoute;
}
var Qc = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (e) => {
        let t = qc(e);
        return ((t.isRoot = !1), t);
      }),
      (this.silent = t?.silent));
  }
};
function $c(e, t) {
  let n,
    r,
    i,
    a,
    o = () => (
      (n ||= e()
        .then((e) => {
          ((n = void 0), (r = e[t ?? `default`]));
        })
        .catch((e) => {
          if (
            ((i = e),
            pe(i) &&
              i instanceof Error &&
              typeof window < `u` &&
              typeof sessionStorage < `u`)
          ) {
            let e = `tanstack_router_reload:${i.message}`;
            sessionStorage.getItem(e) ||
              (sessionStorage.setItem(e, `1`), (a = !0));
          }
        })),
      n
    ),
    s = function (e) {
      if (a) throw (window.location.reload(), new Promise(() => {}));
      if (i) throw i;
      if (!r)
        if (Ms) Ms(o());
        else throw o();
      return z.createElement(r, e);
    };
  return ((s.preload = o), s);
}
function el(e) {
  let t = Ys(),
    n = `not-found-${Sc(t.stores.location, (e) => e.pathname)}-${Sc(t.stores.status, (e) => e)}`;
  return (0, B.jsx)(Hs, {
    getResetKey: () => n,
    onCatch: (t, n) => {
      if (A(t)) e.onCatch?.(t, n);
      else throw t;
    },
    errorComponent: ({ error: t }) => {
      if (A(t)) return e.fallback?.(t);
      throw t;
    },
    children: e.children,
  });
}
function tl() {
  return (0, B.jsx)(`p`, { children: `Not Found` });
}
function nl(e) {
  return (0, B.jsx)(B.Fragment, { children: e.children });
}
function rl(e, t, n) {
  return t.options.notFoundComponent
    ? (0, B.jsx)(t.options.notFoundComponent, { ...n })
    : e.options.defaultNotFoundComponent
      ? (0, B.jsx)(e.options.defaultNotFoundComponent, { ...n })
      : (0, B.jsx)(tl, {});
}
var il = (e, t) =>
    e.routeId === t.routeId && e._displayPending === t._displayPending,
  al = (e, t) => e[0] === t[0] && e[1] === t[1],
  ol = z.memo(function ({ matchId: e }) {
    let t = Ys(),
      n = t.stores.matchStores.get(e);
    n || we();
    let r = Sc(t.stores.loadedAt, (e) => e),
      i = Sc(n, (e) => e, il);
    return (0, B.jsx)(sl, {
      router: t,
      matchId: e,
      resetKey: r,
      matchState: z.useMemo(() => {
        let e = i.routeId,
          n = t.routesById[e].parentRoute?.id;
        return {
          routeId: e,
          ssr: i.ssr,
          _displayPending: i._displayPending,
          parentRouteId: n,
        };
      }, [i._displayPending, i.routeId, i.ssr, t.routesById]),
    });
  });
function sl({ router: e, matchId: t, resetKey: n, matchState: r }) {
  let i = e.routesById[r.routeId],
    a = i.options.pendingComponent ?? e.options.defaultPendingComponent,
    o = a ? (0, B.jsx)(a, {}) : null,
    s = i.options.errorComponent ?? e.options.defaultErrorComponent,
    c = i.options.onCatch ?? e.options.defaultOnCatch,
    l = i.isRoot
      ? (i.options.notFoundComponent ??
        e.options.notFoundRoute?.options.component)
      : i.options.notFoundComponent,
    u = r.ssr === !1 || r.ssr === `data-only`,
    d =
      (!i.isRoot || i.options.wrapInSuspense || u) &&
      (i.options.wrapInSuspense ??
        a ??
        (i.options.errorComponent?.preload || u))
        ? z.Suspense
        : nl,
    f = s ? Hs : nl,
    p = l ? el : nl;
  return (0, B.jsxs)(i.isRoot ? (i.options.shellComponent ?? nl) : nl, {
    children: [
      (0, B.jsx)(Xs.Provider, {
        value: t,
        children: (0, B.jsx)(d, {
          fallback: o,
          children: (0, B.jsx)(f, {
            getResetKey: () => n,
            errorComponent: s || Ws,
            onCatch: (e, t) => {
              if (A(e)) throw ((e.routeId ??= r.routeId), e);
              c?.(e, t);
            },
            children: (0, B.jsx)(p, {
              fallback: (e) => {
                if (
                  ((e.routeId ??= r.routeId),
                  !l ||
                    (e.routeId && e.routeId !== r.routeId) ||
                    (!e.routeId && !i.isRoot))
                )
                  throw e;
                return z.createElement(l, e);
              },
              children:
                u || r._displayPending
                  ? (0, B.jsx)(Gs, {
                      fallback: o,
                      children: (0, B.jsx)(ll, { matchId: t }),
                    })
                  : (0, B.jsx)(ll, { matchId: t }),
            }),
          }),
        }),
      }),
      r.parentRouteId === `__root__`
        ? (0, B.jsxs)(B.Fragment, {
            children: [(0, B.jsx)(cl, {}), (e.options.scrollRestoration, null)],
          })
        : null,
    ],
  });
}
function cl() {
  let e = Ys(),
    t = z.useRef();
  return (
    Ns(() => {
      let n = e.stores.resolvedLocation.get(),
        r = t.current;
      (n &&
        (!r || r.href !== n.href) &&
        e.emit({ type: `onRendered`, ...gn(e.stores.location.get(), r ?? n) }),
        (t.current = n));
    }, [Sc(e.stores.resolvedLocation, (e) => e?.state.__TSR_key), e]),
    null
  );
}
var ll = z.memo(function ({ matchId: e }) {
    let t = Ys(),
      n = (e, n) => t.getMatch(e.id)?._nonReactive[n] ?? e._nonReactive[n],
      r = t.stores.matchStores.get(e);
    r || we();
    let i = Sc(r, (e) => e),
      a = i.routeId,
      o = t.routesById[a],
      s = z.useMemo(() => {
        let e = (
          t.routesById[a].options.remountDeps ?? t.options.defaultRemountDeps
        )?.({
          routeId: a,
          loaderDeps: i.loaderDeps,
          params: i._strictParams,
          search: i._strictSearch,
        });
        return e ? JSON.stringify(e) : void 0;
      }, [
        a,
        i.loaderDeps,
        i._strictParams,
        i._strictSearch,
        t.options.defaultRemountDeps,
        t.routesById,
      ]),
      c = z.useMemo(() => {
        let e = o.options.component ?? t.options.defaultComponent;
        return e ? (0, B.jsx)(e, {}, s) : (0, B.jsx)(ul, {});
      }, [s, o.options.component, t.options.defaultComponent]);
    if (i._displayPending) throw n(i, `displayPendingPromise`);
    if (i._forcePending) throw n(i, `minPendingPromise`);
    if (i.status === `pending`) {
      let e = o.options.pendingMinMs ?? t.options.defaultPendingMinMs;
      if (e) {
        let n = t.getMatch(i.id);
        if (n && !n._nonReactive.minPendingPromise) {
          let t = fe();
          ((n._nonReactive.minPendingPromise = t),
            setTimeout(() => {
              (t.resolve(), (n._nonReactive.minPendingPromise = void 0));
            }, e));
        }
      }
      throw n(i, `loadPromise`);
    }
    if (i.status === `notFound`) return (A(i.error) || we(), rl(t, o, i.error));
    if (i.status === `redirected`)
      throw (j(i.error) || we(), n(i, `loadPromise`));
    if (i.status === `error`) throw i.error;
    return c;
  }),
  ul = z.memo(function () {
    let e = Ys(),
      t = z.useContext(Xs),
      n,
      r = !1,
      i;
    {
      let a = t ? e.stores.matchStores.get(t) : void 0;
      (([n, r] = Sc(a, (e) => [e?.routeId, e?.globalNotFound ?? !1], al)),
        (i = Sc(
          e.stores.matchesId,
          (e) => e[e.findIndex((e) => e === t) + 1],
        )));
    }
    let a = n ? e.routesById[n] : void 0,
      o = e.options.defaultPendingComponent
        ? (0, B.jsx)(e.options.defaultPendingComponent, {})
        : null;
    if (r) return (a || we(), rl(e, a, void 0));
    if (!i) return null;
    let s = (0, B.jsx)(ol, { matchId: i });
    return n === `__root__`
      ? (0, B.jsx)(z.Suspense, { fallback: o, children: s })
      : s;
  });
function dl() {
  let e = Ys(),
    t = z.useRef({ router: e, mounted: !1 }),
    [n, r] = z.useState(!1),
    i = Sc(e.stores.isLoading, (e) => e),
    a = Sc(e.stores.hasPending, (e) => e),
    o = Ps(i),
    s = i || n || a,
    c = Ps(s),
    l = i || a,
    u = Ps(l);
  return (
    (e.startTransition = (e) => {
      (r(!0),
        z.startTransition(() => {
          (e(), r(!1));
        }));
    }),
    z.useEffect(() => {
      let t = e.history.subscribe(e.load),
        n = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        Qe(e.latestLocation.publicHref) !== Qe(n.publicHref) &&
          e.commitLocation({ ...n, replace: !0 }),
        () => {
          t();
        }
      );
    }, [e, e.history]),
    Ns(() => {
      (typeof window < `u` && e.ssr) ||
        (t.current.router === e && t.current.mounted) ||
        ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (e) {
            console.error(e);
          }
        })());
    }, [e]),
    Ns(() => {
      o &&
        !i &&
        e.emit({
          type: `onLoad`,
          ...gn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [o, e, i]),
    Ns(() => {
      u &&
        !l &&
        e.emit({
          type: `onBeforeRouteMount`,
          ...gn(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, u, e]),
    Ns(() => {
      if (c && !s) {
        let t = gn(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: `onResolved`, ...t }),
          fc(() => {
            (e.stores.status.set(`idle`),
              e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [s, c, e]),
    null
  );
}
function fl() {
  let e = Ys(),
    t =
      e.routesById.__root__.options.pendingComponent ??
      e.options.defaultPendingComponent,
    n = t ? (0, B.jsx)(t, {}) : null,
    r = (0, B.jsxs)(typeof document < `u` && e.ssr ? nl : z.Suspense, {
      fallback: n,
      children: [(0, B.jsx)(dl, {}), (0, B.jsx)(pl, {})],
    });
  return e.options.InnerWrap
    ? (0, B.jsx)(e.options.InnerWrap, { children: r })
    : r;
}
function pl() {
  let e = Ys(),
    t = Sc(e.stores.firstId, (e) => e),
    n = Sc(e.stores.loadedAt, (e) => e),
    r = t ? (0, B.jsx)(ol, { matchId: t }) : null;
  return (0, B.jsx)(Xs.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? r
      : (0, B.jsx)(Hs, {
          getResetKey: () => n,
          errorComponent: Ws,
          onCatch: void 0,
          children: r,
        }),
  });
}
var ml = (e) => ({
    createMutableStore: hc,
    createReadonlyStore: hc,
    batch: fc,
  }),
  hl = (e) => new gl(e),
  gl = class extends _n {
    constructor(e) {
      super(e, ml);
    }
  };
function _l({ router: e, children: t, ...n }) {
  ie(n) &&
    e.update({
      ...e.options,
      ...n,
      context: { ...e.options.context, ...n.context },
    });
  let r = (0, B.jsx)(Js.Provider, { value: e, children: t });
  return e.options.Wrap ? (0, B.jsx)(e.options.Wrap, { children: r }) : r;
}
function vl({ router: e, ...t }) {
  return (0, B.jsx)(_l, { router: e, ...t, children: (0, B.jsx)(fl, {}) });
}
function yl(e) {
  let t = Ys({ warn: e?.router === void 0 }),
    n = e?.router || t;
  return Sc(n.stores.__store, wc(e, n));
}
function bl(e, t) {
  if (t)
    for (let [n, r] of Object.entries(t))
      n !== `suppressHydrationWarning` &&
        r !== void 0 &&
        r !== !1 &&
        e.setAttribute(n, typeof r == `boolean` ? `` : String(r));
}
function V(e) {
  let { attrs: t, children: n, nonce: r, preventScriptHoist: i } = e;
  switch (e.tag) {
    case `title`:
      return (0, B.jsx)(`title`, {
        ...t,
        suppressHydrationWarning: !0,
        children: n,
      });
    case `meta`:
      return (0, B.jsx)(`meta`, { ...t, suppressHydrationWarning: !0 });
    case `link`:
      return (0, B.jsx)(`link`, {
        ...t,
        precedence:
          t?.precedence ?? (t?.rel === `stylesheet` ? `default` : void 0),
        nonce: r,
        suppressHydrationWarning: !0,
      });
    case `style`:
      return (
        e.inlineCss,
        (0, B.jsx)(`style`, {
          ...t,
          dangerouslySetInnerHTML: { __html: n },
          nonce: r,
        })
      );
    case `script`:
      return (0, B.jsx)(xl, { attrs: t, preventScriptHoist: i, children: n });
    default:
      return null;
  }
}
function xl({ attrs: e, children: t, preventScriptHoist: n }) {
  Ys();
  let r = Ks(),
    i =
      typeof e?.type == `string` &&
      e.type !== `` &&
      e.type !== `text/javascript` &&
      e.type !== `module`;
  if (
    (z.useEffect(() => {
      if (!i) {
        if (e?.src) {
          let t = (() => {
            try {
              let t = document.baseURI || window.location.href;
              return new URL(e.src, t).href;
            } catch {
              return e.src;
            }
          })();
          for (let e of document.querySelectorAll(`script[src]`))
            if (e.src === t) return;
          let n = document.createElement(`script`);
          return (bl(n, e), document.head.appendChild(n), () => n.remove());
        }
        if (typeof t == `string`) {
          let n = typeof e?.type == `string` ? e.type : `text/javascript`,
            r = typeof e?.nonce == `string` ? e.nonce : void 0;
          for (let e of document.querySelectorAll(`script:not([src])`)) {
            if (!(e instanceof HTMLScriptElement)) continue;
            let i = e.getAttribute(`type`) ?? `text/javascript`,
              a = e.getAttribute(`nonce`) ?? void 0;
            if (e.textContent === t && i === n && a === r) return;
          }
          let i = document.createElement(`script`);
          return (
            (i.textContent = t),
            bl(i, e),
            document.head.appendChild(i),
            () => i.remove()
          );
        }
      }
    }, [e, t, i]),
    i && typeof t == `string`)
  )
    return (0, B.jsx)(`script`, {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!r) {
    if (e?.src)
      return (0, B.jsx)(`script`, { ...e, suppressHydrationWarning: !0 });
    if (typeof t == `string`)
      return (0, B.jsx)(`script`, {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var Sl = (e) => {
  let t = Ys(),
    n = t.options.ssr?.nonce,
    r = Sc(
      t.stores.matches,
      (e) => e.map((e) => e.meta).filter((e) => e !== void 0),
      de,
    ),
    i = z.useMemo(() => {
      let e = [],
        t = {},
        i;
      for (let a = r.length - 1; a >= 0; a--) {
        let o = r[a];
        for (let r = o.length - 1; r >= 0; r--) {
          let a = o[r];
          if (a)
            if (a.title) i ||= { tag: `title`, children: a.title };
            else if (`script:ld+json` in a)
              try {
                let t = JSON.stringify(a[`script:ld+json`]);
                e.push({
                  tag: `script`,
                  attrs: { type: `application/ld+json` },
                  children: Se(t),
                });
              } catch {}
            else {
              let r = a.name ?? a.property;
              if (r) {
                if (t[r]) continue;
                t[r] = !0;
              }
              e.push({ tag: `meta`, attrs: { ...a, nonce: n } });
            }
        }
      }
      return (
        i && e.push(i),
        n &&
          e.push({ tag: `meta`, attrs: { property: `csp-nonce`, content: n } }),
        e.reverse(),
        e
      );
    }, [r, n]),
    a = Sc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.links ?? [])
          .filter((e) => e !== void 0)
          .map((e) => ({ tag: `link`, attrs: { ...e, nonce: n } })),
      de,
    ),
    o = Sc(
      t.stores.matches,
      (r) => {
        let i = t.ssr?.manifest,
          a = [];
        return i
          ? (r.forEach((t) => {
              i.routes[t.routeId]?.css?.forEach((t) => {
                let r = Fn(t);
                a.push({
                  tag: `link`,
                  attrs: {
                    rel: `stylesheet`,
                    ...r,
                    crossOrigin: An(e, `stylesheet`) ?? r.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: n,
                  },
                });
              });
            }),
            i.inlineStyle &&
              a.push({
                tag: `style`,
                attrs: { ...i.inlineStyle.attrs, nonce: n },
                children: i.inlineStyle.children,
                inlineCss: !0,
              }),
            a)
          : a;
      },
      de,
    ),
    s = Sc(
      t.stores.matches,
      (r) => {
        let i = [],
          a = t.ssr?.manifest;
        return (
          a &&
            r.forEach((t) => {
              a.routes[t.routeId]?.preloads?.forEach((t) => {
                i.push({ tag: `link`, attrs: { ...Mn(a, t, e), nonce: n } });
              });
            }),
          i
        );
      },
      de,
    ),
    c = Sc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.styles ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `style`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      de,
    ),
    l = Sc(
      t.stores.matches,
      (e) =>
        e
          .flatMap((e) => e.headScripts ?? [])
          .filter((e) => e !== void 0)
          .map(({ children: e, ...t }) => ({
            tag: `script`,
            attrs: { ...t, nonce: n },
            children: e,
          })),
      de,
    ),
    u = [];
  return (
    Pn(u, i),
    u.push(...s),
    Pn(u, a),
    u.push(...o),
    Pn(u, c),
    Pn(u, l),
    u
  );
};
function Cl(e) {
  let t = Sl(e.assetCrossOrigin),
    n = Ys().options.ssr?.nonce;
  return (0, B.jsx)(B.Fragment, {
    children: t.map((e) =>
      (0, z.createElement)(V, {
        ...e,
        key: `tsr-meta-${JSON.stringify(e)}`,
        nonce: n,
      }),
    ),
  });
}
var wl = () => {
  let e = Ys(),
    t = e.options.ssr?.nonce,
    n = (n) => {
      let r = [],
        i = e.ssr?.manifest;
      if (!i) return [];
      for (let e of n) {
        let n = i.routes[e.routeId]?.scripts;
        if (n)
          for (let e of n)
            r.push({
              tag: `script`,
              attrs: { ...e.attrs, nonce: t },
              children: e.children,
              ...(typeof e.attrs?.src == `string`
                ? { preventScriptHoist: !0 }
                : {}),
            });
      }
      return r;
    },
    r = (e) =>
      e
        .map((e) => e.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: e, ...n }) => ({
          tag: `script`,
          attrs: { ...n, suppressHydrationWarning: !0, nonce: t },
          children: e,
        })),
    i = Sc(e.stores.matches, n, de);
  return Tl(e, Sc(e.stores.matches, r, de), i);
};
function Tl(e, t, n) {
  let r = [...t, ...n];
  return (0, B.jsx)(B.Fragment, {
    children: r.map((e, t) =>
      (0, z.createElement)(V, { ...e, key: `tsr-scripts-${e.tag}-${t}` }),
    ),
  });
}
var El = (e, t) => {
  let n = { type: `request`, ...(t || e) },
    r = (e) => El({}, Object.assign(n, { validator: e, inputValidator: e }));
  return {
    options: n,
    middleware: (e) => El({}, Object.assign(n, { middleware: e })),
    validator: r,
    inputValidator: r,
    client: (e) => El({}, Object.assign(n, { client: e })),
    server: (e) => El({}, Object.assign(n, { server: e })),
  };
};
function Dl(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let r = t[n];
    e.has(r) || (e.add(r), r.extends && Dl(e, r.extends));
  }
}
var Ol = (e) => ({
    getOptions: async () => {
      let t = await e();
      if (t.serializationAdapters) {
        let e = new Set();
        (Dl(e, t.serializationAdapters),
          (t.serializationAdapters = Array.from(e)));
      }
      return t;
    },
    createMiddleware: El,
  }),
  kl = El(),
  Al = void 0,
  jl = Ol(() => ({ requestMiddleware: [kl, Al] })),
  Ml = z.createContext(void 0),
  Nl = ({ client: e, children: t }) => (
    z.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, B.jsx)(Ml.Provider, { value: e, children: t })
  ),
  Pl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Fl = new (class {
    #e = Pl;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Il(e) {
  setTimeout(e, 0);
}
var Ll = typeof window > `u` || `Deno` in globalThis;
function Rl() {}
function zl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Bl(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function Vl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Hl(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function Ul(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== Gl(o, t.options)) return !1;
    } else if (!ql(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function Wl(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Kl(t.options.mutationKey) !== Kl(a)) return !1;
    } else if (!ql(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function Gl(e, t) {
  return (t?.queryKeyHashFn || Kl)(e);
}
function Kl(e) {
  return JSON.stringify(e, (e, t) =>
    Zl(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function ql(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      if (t.length > e.length) return !1;
      for (let n = 0; n < t.length; n++) if (!ql(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!ql(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var Jl = Object.prototype.hasOwnProperty;
function Yl(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = Xl(e) && Xl(t);
  if (!r && !(Zl(e) && Zl(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : Jl.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = Yl(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function Xl(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Zl(e) {
  if (!Ql(e)) return !1;
  let t = Object.getPrototypeOf(e),
    n = t?.constructor;
  if (n === void 0) return !0;
  if (typeof n != `function`) return !1;
  let r = n.prototype;
  return !(
    !Ql(r) ||
    !r.hasOwnProperty(`isPrototypeOf`) ||
    t !== Object.prototype
  );
}
function Ql(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function $l(e) {
  return new Promise((t) => {
    Fl.setTimeout(t, e);
  });
}
function eu(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : Yl(e, t);
}
function tu(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function nu(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var ru = Symbol();
function iu(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === ru
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function au(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var ou = () => Ll,
  su = () => ou(),
  H = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  cu = new (class extends H {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  lu = Il;
function uu() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = lu,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var U = uu(),
  du = new (class extends H {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function fu(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function pu(e) {
  return (e ?? `online`) !== `online` || du.isOnline();
}
var mu = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function hu(e) {
  let t = !1,
    n = 0,
    r,
    i = `pending`,
    a,
    o,
    s = new Promise((e, t) => {
      ((a = e), (o = t));
    });
  s.catch(Rl);
  let c = () => i !== `pending`,
    l = (t) => {
      if (!c()) {
        let n = new mu(t);
        (h(n), e.onCancel?.(n));
      }
    },
    u = () => {
      t = !0;
    },
    d = () => {
      t = !1;
    },
    f = () =>
      cu.isFocused() &&
      (e.networkMode === `always` || du.isOnline()) &&
      e.canRun(),
    p = () => pu(e.networkMode) && e.canRun(),
    m = (e) => {
      c() || (r?.(), (i = `resolved`), a(e));
    },
    h = (e) => {
      c() || (r?.(), (i = `rejected`), o(e));
    },
    g = () =>
      new Promise((t) => {
        ((r = (e) => {
          (c() || f()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), c() || e.onContinue?.());
      }),
    _ = () => {
      if (c()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(m)
        .catch((r) => {
          if (c()) return;
          let i = e.retry ?? (su() ? 0 : 3),
            a = e.retryDelay ?? fu,
            o = typeof a == `function` ? a(n, r) : a,
            s =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !s) {
            h(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            $l(o)
              .then(() => (f() ? void 0 : g()))
              .then(() => {
                t ? h(r) : _();
              }));
        });
    };
  return {
    promise: s,
    status: () => i,
    cancel: l,
    continue: () => (r?.(), s),
    cancelRetry: u,
    continueRetry: d,
    canStart: p,
    start: () => (p() ? _() : g().then(_), s),
  };
}
var gu = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Bl(this.gcTime) &&
        (this.#e = Fl.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (su() ? 1 / 0 : 3e5));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Fl.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function _u(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              au(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = iu(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? nu : tu;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? yu : vu,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : vu(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l;
    },
  };
}
function vu(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function yu(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var bu = class extends gu {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Cu(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Cu(this.options);
      e.data !== void 0 &&
        (this.setState(Su(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = eu(this.state.data, e, this.options);
    return (
      this.#c({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#c({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(Rl).catch(Rl) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Hl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === ru || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => Hl(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Vl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    let t = this.observers.indexOf(e);
    t !== -1 &&
      (this.observers.splice(t, 1),
      this.observers.length ||
        (this.#a &&
          (this.#s ||
          (this.state.fetchStatus === `paused` &&
            this.state.status === `pending`)
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || this.#c({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = iu(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? _u(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#c({ type: `fetch`, meta: a.fetchOptions?.meta }));
    let o = (this.#a = hu({
      initialPromise: t?.initialPromise,
      fn: a.fetchFn,
      onCancel: (e) => {
        (e instanceof mu &&
          e.revert &&
          this.setState({ ...this.#n, fetchStatus: `idle` }),
          n.abort());
      },
      onFail: (e, t) => {
        this.#c({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#c({ type: `pause` });
      },
      onContinue: () => {
        this.#c({ type: `continue` });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0,
    }));
    try {
      let e = await o.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof mu) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#c({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      (this.#a === o && (this.#a = void 0), this.scheduleGc());
    }
  }
  #c(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...xu(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...Su(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      U.batch(() => {
        (this.observers.slice().forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function xu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: pu(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function Su(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Cu(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var wu = class extends gu {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Tu()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return (
      this.#r?.continue() ??
      (this.state.status === `pending`
        ? this.execute(this.state.variables)
        : Promise.resolve())
    );
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      },
      r = (this.#r = hu({
        fn: () =>
          this.options.mutationFn
            ? this.options.mutationFn(e, n)
            : Promise.reject(Error(`No mutationFn found`)),
        onFail: (e, t) => {
          this.#i({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#i({ type: `pause` });
        },
        onContinue: t,
        retry: this.options.retry ?? 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode,
        canRun: () => this.#n.canRun(this),
      })),
      i = this.state.status === `pending`,
      a = !r.canStart();
    try {
      if (i) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: a }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: a });
      }
      let o = await r.start();
      return (
        await this.#n.config.onSuccess?.(o, e, this.state.context, this, n),
        await this.options.onSuccess?.(o, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          o,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(o, null, e, this.state.context, n),
        this.#i({ type: `success`, data: o }),
        o
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      (this.#r === r && (this.#r = void 0), this.#n.runNext(this));
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      U.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Tu() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Eu = class extends H {
  #e;
  #t;
  #n;
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  build(e, t, n) {
    let r = new wu({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Du(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Du(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n)
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Du(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = Du(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    U.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => Wl(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => Wl(e, t));
  }
  notify(e) {
    U.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return U.batch(() => Promise.all(e.map((e) => e.continue().catch(Rl))));
  }
};
function Du(e) {
  return e.options.scope?.id;
}
var Ou = class extends H {
    #e;
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? Gl(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new bu({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      this.#e.get(e.queryHash) === e &&
        (e.destroy(),
        this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      U.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => Ul(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => Ul(e, t)) : t;
    }
    notify(e) {
      U.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      U.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      U.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  ku = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Ou()),
        (this.#t = e.mutationCache || new Eu()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = cu.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = du.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(Hl(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = zl(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return U.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      U.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return U.batch(() => {
        let r = n.findAll(e),
          i = new Set(r);
        return (
          r.forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, predicate: (e) => i.has(e) }, t)
        );
      });
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = U.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Rl).catch(Rl);
    }
    invalidateQueries(e, t = {}) {
      return U.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = U.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Rl)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Rl);
    }
    async query(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t),
        r = n.isStaleByTime(Hl(t.staleTime, n))
          ? await n.fetch(t)
          : n.state.data,
        i = t.select;
      return i ? i(r) : r;
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(Hl(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Rl).catch(Rl);
    }
    infiniteQuery(e) {
      return ((e._type = `infinite`), this.query(e));
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Rl).catch(Rl);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return du.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(Kl(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          ql(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(Kl(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          ql(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= Gl(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === ru && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  Au = `/assets/styles-CZIli6Ut.css`,
  ju = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Mu = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Nu = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  Pu = (e) => {
    let t = Nu(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Fu = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Iu = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Lu = (0, z.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...s
      },
      c,
    ) =>
      (0, z.createElement)(
        `svg`,
        {
          ref: c,
          ...Fu,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: ju(`lucide`, i),
          ...(!a && !Iu(s) && { "aria-hidden": `true` }),
          ...s,
        },
        [
          ...o.map(([e, t]) => (0, z.createElement)(e, t)),
          ...(Array.isArray(a) ? a : [a]),
        ],
      ),
  ),
  Ru = (e, t) => {
    let n = (0, z.forwardRef)(({ className: n, ...r }, i) =>
      (0, z.createElement)(Lu, {
        ref: i,
        iconNode: t,
        className: ju(`lucide-${Mu(Pu(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = Pu(e)), n);
  },
  zu = Ru(`arrow-up-right`, [
    [`path`, { d: `M7 7h10v10`, key: `1tivn9` }],
    [`path`, { d: `M7 17 17 7`, key: `1vkiza` }],
  ]);
function Bu(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Bu(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Vu() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Bu(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Hu = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Uu = (e, t) => ({ classGroupId: e, validator: t }),
  Wu = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Gu = `-`,
  Ku = [],
  qu = `arbitrary..`,
  Ju = (e) => {
    let t = Zu(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return Xu(e);
        let n = e.split(Gu);
        return Yu(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Hu(i, t) : t) : i || Ku;
        }
        return n[e] || Ku;
      },
    };
  },
  Yu = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = Yu(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(Gu) : e.slice(t).join(Gu),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  Xu = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? qu + r : void 0;
        })(),
  Zu = (e) => {
    let { theme: t, classGroups: n } = e;
    return Qu(n, t);
  },
  Qu = (e, t) => {
    let n = Wu();
    for (let r in e) {
      let i = e[r];
      $u(i, n, r, t);
    }
    return n;
  },
  $u = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      ed(i, t, n, r);
    }
  },
  ed = (e, t, n, r) => {
    if (typeof e == `string`) {
      td(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      W(e, t, n, r);
      return;
    }
    nd(e, t, n, r);
  },
  td = (e, t, n) => {
    let r = e === `` ? t : G(t, e);
    r.classGroupId = n;
  },
  W = (e, t, n, r) => {
    if (K(e)) {
      $u(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Uu(n, e)));
  },
  nd = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      $u(o, G(t, a), n, r);
    }
  },
  G = (e, t) => {
    let n = e,
      r = t.split(Gu),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = Wu()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  K = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  q = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  rd = `!`,
  id = `:`,
  ad = [],
  od = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  sd = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === id) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(rd)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(rd) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return od(t, l, c, u);
      };
    if (t) {
      let e = t + id,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : od(ad, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  cd = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  ld = (e) => ({
    cache: q(e.cacheSize),
    parseClassName: sd(e),
    sortModifiers: cd(e),
    postfixLookupClassGroupIds: ud(e),
    ...Ju(e),
  }),
  ud = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  dd = /\s+/,
  fd = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(dd),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + rd : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  pd = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = md(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  md = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = md(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  hd = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = ld(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = fd(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(pd(...e)));
  },
  gd = [],
  _d = (e) => {
    let t = (t) => t[e] || gd;
    return ((t.isThemeGetter = !0), (t.themeKey = e), t);
  },
  vd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  yd = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  bd = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  xd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Sd =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Cd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/,
  wd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Td =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ed = (e) => bd.test(e),
  J = (e) => !!e && !Number.isNaN(Number(e)),
  Dd = (e) => !!e && Number.isInteger(Number(e)),
  Od = (e) => e.endsWith(`%`) && J(e.slice(0, -1)),
  kd = (e) => xd.test(e),
  Ad = () => !0,
  jd = (e) => Sd.test(e) && !Cd.test(e),
  Md = () => !1,
  Nd = (e) => wd.test(e),
  Pd = (e) => Td.test(e),
  Fd = (e) => !Y(e) && !X(e),
  Id = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Ld = (e) => Qd(e, nf, Md),
  Y = (e) => vd.test(e),
  Rd = (e) => Qd(e, rf, jd),
  zd = (e) => Qd(e, af, J),
  Bd = (e) => Qd(e, sf, Ad),
  Vd = (e) => Qd(e, of, Md),
  Hd = (e) => Qd(e, ef, Md),
  Ud = (e) => Qd(e, tf, Pd),
  Wd = (e) => Qd(e, cf, Nd),
  X = (e) => yd.test(e),
  Gd = (e) => $d(e, rf),
  Kd = (e) => $d(e, of),
  qd = (e) => $d(e, ef),
  Jd = (e) => $d(e, nf),
  Yd = (e) => $d(e, tf),
  Xd = (e) => $d(e, cf, !0),
  Zd = (e) => $d(e, sf, !0),
  Qd = (e, t, n) => {
    let r = vd.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  $d = (e, t, n = !1) => {
    let r = yd.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  ef = (e) => e === `position` || e === `percentage`,
  tf = (e) => e === `image` || e === `url`,
  nf = (e) => e === `length` || e === `size` || e === `bg-size`,
  rf = (e) => e === `length`,
  af = (e) => e === `number`,
  of = (e) => e === `family-name`,
  sf = (e) => e === `number` || e === `weight`,
  cf = (e) => e === `shadow`,
  lf = hd(() => {
    let e = _d(`color`),
      t = _d(`font`),
      n = _d(`text`),
      r = _d(`font-weight`),
      i = _d(`tracking`),
      a = _d(`leading`),
      o = _d(`breakpoint`),
      s = _d(`container`),
      c = _d(`spacing`),
      l = _d(`radius`),
      u = _d(`shadow`),
      d = _d(`inset-shadow`),
      f = _d(`text-shadow`),
      p = _d(`drop-shadow`),
      m = _d(`blur`),
      h = _d(`perspective`),
      g = _d(`aspect`),
      _ = _d(`ease`),
      v = _d(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), X, Y],
      ee = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      S = () => [`auto`, `contain`, `none`],
      C = () => [X, Y, c],
      w = () => [Ed, `full`, `auto`, ...C()],
      te = () => [Dd, `none`, `subgrid`, X, Y],
      T = () => [`auto`, { span: [`full`, Dd, X, Y] }, Dd, X, Y],
      ne = () => [Dd, `auto`, X, Y],
      re = () => [`auto`, `min`, `max`, `fr`, X, Y],
      ie = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      ae = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      oe = () => [`auto`, ...C()],
      se = () => [
        Ed,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      ce = () => [
        s,
        Ed,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      le = () => [
        Ed,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      E = () => [e, X, Y],
      ue = () => [...b(), qd, Hd, { position: [X, Y] }],
      de = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      fe = () => [`auto`, `cover`, `contain`, Jd, Ld, { size: [X, Y] }],
      pe = () => [Od, Gd, Rd],
      me = () => [``, `none`, `full`, l, X, Y],
      he = () => [``, J, Gd, Rd],
      ge = () => [`solid`, `dashed`, `dotted`, `double`],
      _e = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      ve = () => [J, Od, qd, Hd],
      ye = () => [``, `none`, m, X, Y],
      be = () => [`none`, J, X, Y],
      xe = () => [`none`, J, X, Y],
      Se = () => [J, X, Y],
      Ce = () => [Ed, `full`, ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [kd],
        breakpoint: [kd],
        color: [Ad],
        container: [kd],
        "drop-shadow": [kd],
        ease: [`in`, `out`, `in-out`],
        font: [Fd],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [kd],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [kd],
        shadow: [kd],
        spacing: [`px`, J],
        text: [kd],
        "text-shadow": [kd],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, Ed, Y, X, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, X, Y] }],
        "container-named": [Id],
        columns: [{ columns: [J, `auto`, Y, X, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: ee() }],
        "overflow-x": [{ "overflow-x": ee() }],
        "overflow-y": [{ "overflow-y": ee() }],
        overscroll: [{ overscroll: S() }],
        "overscroll-x": [{ "overscroll-x": S() }],
        "overscroll-y": [{ "overscroll-y": S() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: w() }],
        "inset-x": [{ "inset-x": w() }],
        "inset-y": [{ "inset-y": w() }],
        start: [{ "inset-s": w(), start: w() }],
        end: [{ "inset-e": w(), end: w() }],
        "inset-bs": [{ "inset-bs": w() }],
        "inset-be": [{ "inset-be": w() }],
        top: [{ top: w() }],
        right: [{ right: w() }],
        bottom: [{ bottom: w() }],
        left: [{ left: w() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [Dd, `auto`, X, Y] }],
        basis: [{ basis: [Ed, `full`, `auto`, s, ...C()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [J, Ed, `auto`, `initial`, `none`, Y] }],
        grow: [{ grow: [``, J, X, Y] }],
        shrink: [{ shrink: [``, J, X, Y] }],
        order: [{ order: [Dd, `first`, `last`, `none`, X, Y] }],
        "grid-cols": [{ "grid-cols": te() }],
        "col-start-end": [{ col: T() }],
        "col-start": [{ "col-start": ne() }],
        "col-end": [{ "col-end": ne() }],
        "grid-rows": [{ "grid-rows": te() }],
        "row-start-end": [{ row: T() }],
        "row-start": [{ "row-start": ne() }],
        "row-end": [{ "row-end": ne() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": re() }],
        "auto-rows": [{ "auto-rows": re() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...ie(), `normal`] }],
        "justify-items": [{ "justify-items": [...ae(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...ae()] }],
        "align-content": [{ content: [`normal`, ...ie()] }],
        "align-items": [{ items: [...ae(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...ae(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ie() }],
        "place-items": [{ "place-items": [...ae(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...ae()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pbs: [{ pbs: C() }],
        pbe: [{ pbe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: oe() }],
        mx: [{ mx: oe() }],
        my: [{ my: oe() }],
        ms: [{ ms: oe() }],
        me: [{ me: oe() }],
        mbs: [{ mbs: oe() }],
        mbe: [{ mbe: oe() }],
        mt: [{ mt: oe() }],
        mr: [{ mr: oe() }],
        mb: [{ mb: oe() }],
        ml: [{ ml: oe() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: se() }],
        "inline-size": [{ inline: [`auto`, ...ce()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...ce()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...ce()] }],
        "block-size": [{ block: [`auto`, ...le()] }],
        "min-block-size": [{ "min-block": [`auto`, ...le()] }],
        "max-block-size": [{ "max-block": [`none`, ...le()] }],
        w: [{ w: [s, `screen`, ...se()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...se()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...se()] },
        ],
        h: [{ h: [`screen`, `lh`, ...se()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...se()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, `none`, ...se()] }],
        "font-size": [{ text: [`base`, n, Gd, Rd] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, Zd, Bd] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Od,
              Y,
            ],
          },
        ],
        "font-family": [{ font: [Kd, Vd, t] }],
        "font-features": [{ "font-features": [Y] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, X, Y] }],
        "line-clamp": [{ "line-clamp": [J, `none`, X, zd] }],
        leading: [{ leading: [`none`, a, ...C()] }],
        "list-image": [{ "list-image": [`none`, X, Y] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, X, Y] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: E() }],
        "text-color": [{ text: E() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...ge(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [J, `from-font`, `auto`, X, Rd] },
        ],
        "text-decoration-color": [{ decoration: E() }],
        "underline-offset": [{ "underline-offset": [J, `auto`, X, Y] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: C() }],
        "tab-size": [{ tab: [Dd, X, Y] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              X,
              Y,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, X, Y] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ue() }],
        "bg-repeat": [{ bg: de() }],
        "bg-size": [{ bg: fe() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  Dd,
                  X,
                  Y,
                ],
                radial: [``, X, Y],
                conic: [``, Dd, X, Y],
              },
              Yd,
              Ud,
            ],
          },
        ],
        "bg-color": [{ bg: E() }],
        "gradient-from-pos": [{ from: pe() }],
        "gradient-via-pos": [{ via: pe() }],
        "gradient-to-pos": [{ to: pe() }],
        "gradient-from": [{ from: E() }],
        "gradient-via": [{ via: E() }],
        "gradient-to": [{ to: E() }],
        rounded: [{ rounded: me() }],
        "rounded-s": [{ "rounded-s": me() }],
        "rounded-e": [{ "rounded-e": me() }],
        "rounded-t": [{ "rounded-t": me() }],
        "rounded-r": [{ "rounded-r": me() }],
        "rounded-b": [{ "rounded-b": me() }],
        "rounded-l": [{ "rounded-l": me() }],
        "rounded-ss": [{ "rounded-ss": me() }],
        "rounded-se": [{ "rounded-se": me() }],
        "rounded-ee": [{ "rounded-ee": me() }],
        "rounded-es": [{ "rounded-es": me() }],
        "rounded-tl": [{ "rounded-tl": me() }],
        "rounded-tr": [{ "rounded-tr": me() }],
        "rounded-br": [{ "rounded-br": me() }],
        "rounded-bl": [{ "rounded-bl": me() }],
        "border-w": [{ border: he() }],
        "border-w-x": [{ "border-x": he() }],
        "border-w-y": [{ "border-y": he() }],
        "border-w-s": [{ "border-s": he() }],
        "border-w-e": [{ "border-e": he() }],
        "border-w-bs": [{ "border-bs": he() }],
        "border-w-be": [{ "border-be": he() }],
        "border-w-t": [{ "border-t": he() }],
        "border-w-r": [{ "border-r": he() }],
        "border-w-b": [{ "border-b": he() }],
        "border-w-l": [{ "border-l": he() }],
        "divide-x": [{ "divide-x": he() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": he() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...ge(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...ge(), `hidden`, `none`] }],
        "border-color": [{ border: E() }],
        "border-color-x": [{ "border-x": E() }],
        "border-color-y": [{ "border-y": E() }],
        "border-color-s": [{ "border-s": E() }],
        "border-color-e": [{ "border-e": E() }],
        "border-color-bs": [{ "border-bs": E() }],
        "border-color-be": [{ "border-be": E() }],
        "border-color-t": [{ "border-t": E() }],
        "border-color-r": [{ "border-r": E() }],
        "border-color-b": [{ "border-b": E() }],
        "border-color-l": [{ "border-l": E() }],
        "divide-color": [{ divide: E() }],
        "outline-style": [{ outline: [...ge(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [J, X, Y] }],
        "outline-w": [{ outline: [``, J, Gd, Rd] }],
        "outline-color": [{ outline: E() }],
        shadow: [{ shadow: [``, `inner`, `none`, u, Xd, Wd] }],
        "shadow-color": [{ shadow: E() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, Xd, Wd] }],
        "inset-shadow-color": [{ "inset-shadow": E() }],
        "ring-w": [{ ring: he() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: E() }],
        "ring-offset-w": [{ "ring-offset": [J, Rd] }],
        "ring-offset-color": [{ "ring-offset": E() }],
        "inset-ring-w": [{ "inset-ring": he() }],
        "inset-ring-color": [{ "inset-ring": E() }],
        "text-shadow": [{ "text-shadow": [`none`, f, Xd, Wd] }],
        "text-shadow-color": [{ "text-shadow": E() }],
        opacity: [{ opacity: [J, X, Y] }],
        "mix-blend": [
          { "mix-blend": [..._e(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": _e() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [J] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ve() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ve() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": E() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": E() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ve() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ve() }],
        "mask-image-t-from-color": [{ "mask-t-from": E() }],
        "mask-image-t-to-color": [{ "mask-t-to": E() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ve() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ve() }],
        "mask-image-r-from-color": [{ "mask-r-from": E() }],
        "mask-image-r-to-color": [{ "mask-r-to": E() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ve() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ve() }],
        "mask-image-b-from-color": [{ "mask-b-from": E() }],
        "mask-image-b-to-color": [{ "mask-b-to": E() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ve() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ve() }],
        "mask-image-l-from-color": [{ "mask-l-from": E() }],
        "mask-image-l-to-color": [{ "mask-l-to": E() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ve() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ve() }],
        "mask-image-x-from-color": [{ "mask-x-from": E() }],
        "mask-image-x-to-color": [{ "mask-x-to": E() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ve() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ve() }],
        "mask-image-y-from-color": [{ "mask-y-from": E() }],
        "mask-image-y-to-color": [{ "mask-y-to": E() }],
        "mask-image-radial": [{ "mask-radial": [X, Y] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ve() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ve() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": E() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": E() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [J] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ve() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ve() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": E() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": E() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: ue() }],
        "mask-repeat": [{ mask: de() }],
        "mask-size": [{ mask: fe() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, X, Y] }],
        filter: [{ filter: [``, `none`, X, Y] }],
        blur: [{ blur: ye() }],
        brightness: [{ brightness: [J, X, Y] }],
        contrast: [{ contrast: [J, X, Y] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, Xd, Wd] }],
        "drop-shadow-color": [{ "drop-shadow": E() }],
        grayscale: [{ grayscale: [``, J, X, Y] }],
        "hue-rotate": [{ "hue-rotate": [J, X, Y] }],
        invert: [{ invert: [``, J, X, Y] }],
        saturate: [{ saturate: [J, X, Y] }],
        sepia: [{ sepia: [``, J, X, Y] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, X, Y] }],
        "backdrop-blur": [{ "backdrop-blur": ye() }],
        "backdrop-brightness": [{ "backdrop-brightness": [J, X, Y] }],
        "backdrop-contrast": [{ "backdrop-contrast": [J, X, Y] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, J, X, Y] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [J, X, Y] }],
        "backdrop-invert": [{ "backdrop-invert": [``, J, X, Y] }],
        "backdrop-opacity": [{ "backdrop-opacity": [J, X, Y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [J, X, Y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, J, X, Y] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              X,
              Y,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [J, `initial`, X, Y] }],
        ease: [{ ease: [`linear`, `initial`, _, X, Y] }],
        delay: [{ delay: [J, X, Y] }],
        animate: [{ animate: [`none`, v, X, Y] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, X, Y] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: be() }],
        "rotate-x": [{ "rotate-x": be() }],
        "rotate-y": [{ "rotate-y": be() }],
        "rotate-z": [{ "rotate-z": be() }],
        scale: [{ scale: xe() }],
        "scale-x": [{ "scale-x": xe() }],
        "scale-y": [{ "scale-y": xe() }],
        "scale-z": [{ "scale-z": xe() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: Se() }],
        "skew-x": [{ "skew-x": Se() }],
        "skew-y": [{ "skew-y": Se() }],
        transform: [{ transform: [X, Y, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: Ce() }],
        "translate-x": [{ "translate-x": Ce() }],
        "translate-y": [{ "translate-y": Ce() }],
        "translate-z": [{ "translate-z": Ce() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [Dd, X, Y] }],
        accent: [{ accent: E() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: E() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              X,
              Y,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": E() }],
        "scrollbar-track-color": [{ "scrollbar-track": E() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mbs": [{ "scroll-mbs": C() }],
        "scroll-mbe": [{ "scroll-mbe": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pbs": [{ "scroll-pbs": C() }],
        "scroll-pbe": [{ "scroll-pbe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, X, Y] },
        ],
        fill: [{ fill: [`none`, ...E()] }],
        "stroke-w": [{ stroke: [J, Gd, Rd, zd] }],
        stroke: [{ stroke: [`none`, ...E()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`start`, `end`, `right`, `left`],
        "inset-y": [`inset-bs`, `inset-be`, `top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`ps`, `pe`, `pr`, `pl`],
        py: [`pbs`, `pbe`, `pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`ms`, `me`, `mr`, `ml`],
        my: [`mbs`, `mbe`, `mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-s`, `border-w-e`, `border-w-r`, `border-w-l`],
        "border-w-y": [
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-b`,
        ],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [
          `border-color-s`,
          `border-color-e`,
          `border-color-r`,
          `border-color-l`,
        ],
        "border-color-y": [
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-b`,
        ],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-ms`, `scroll-me`, `scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-ps`, `scroll-pe`, `scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function uf(...e) {
  return lf(Vu(e));
}
function df({ className: e, onClick: t }) {
  return (0, B.jsxs)(Wc, {
    to: `/`,
    onClick: t,
    "aria-label": `Clicks N Codes — home`,
    className: uf(
      `group inline-flex items-baseline gap-[0.3em] font-display text-sm font-bold uppercase tracking-[-0.01em] sm:text-base`,
      e,
    ),
    children: [
      (0, B.jsx)(`span`, { children: `Clicks` }),
      (0, B.jsx)(`span`, {
        className: `text-accent transition-transform duration-300 group-hover:-translate-y-0.5`,
        children: `N`,
      }),
      (0, B.jsx)(`span`, {
        className: `font-normal text-muted-foreground transition-colors duration-300 group-hover:text-current`,
        children: `Codes`,
      }),
    ],
  });
}
var ff = {
    name: `Clicks N Codes`,
    tagline: `We create the clicks. We write the code. We build what happens next.`,
    email: `hello@clicksncodes.com`,
    socials: [
      { label: `LinkedIn`, href: `https://www.linkedin.com/` },
      { label: `Instagram`, href: `https://www.instagram.com/` },
      { label: `Dribbble`, href: `https://dribbble.com/` },
    ],
  },
  pf = [
    { label: `Work`, to: `/work` },
    { label: `Services`, to: `/services` },
    { label: `About`, to: `/about` },
    { label: `Contact`, to: `/contact` },
  ],
  Z = [
    {
      id: `marketing`,
      number: `01`,
      title: `Marketing`,
      summary: `Demand, attention and conversion — measured end to end.`,
      capabilities: [
        `Digital Strategy`,
        `Performance Marketing`,
        `Paid Media`,
        `Social Media Marketing`,
        `SEO`,
        `Content Strategy`,
        `Email Marketing`,
        `Lead Generation`,
        `Conversion Optimization`,
        `Campaign Management`,
        `Analytics`,
      ],
    },
    {
      id: `design`,
      number: `02`,
      title: `Design & Brand`,
      summary: `Identity and interface built to be recognised and used.`,
      capabilities: [
        `Brand Strategy`,
        `Visual Identity`,
        `UI/UX Design`,
        `Website Design`,
        `Product Design`,
        `Creative Direction`,
        `Campaign Creative`,
        `Social Creative`,
      ],
    },
    {
      id: `development`,
      number: `03`,
      title: `Development`,
      summary: `Sites, products and platforms engineered to hold up.`,
      capabilities: [
        `Custom Websites`,
        `Web Applications`,
        `Mobile Applications`,
        `E-commerce`,
        `Custom Software`,
        `CMS Development`,
        `API Development`,
        `System Integrations`,
        `Landing Pages`,
        `Enterprise Solutions`,
      ],
    },
    {
      id: `ai`,
      number: `04`,
      title: `AI & Automation`,
      summary: `Leverage where repetition lives, judgment where it matters.`,
      capabilities: [
        `AI Automation`,
        `AI Agents`,
        `Business Process Automation`,
        `Workflow Automation`,
        `Custom AI Solutions`,
        `Chatbots`,
        `CRM Automation`,
        `Marketing Automation`,
        `Data Workflows`,
        `API Integrations`,
        `Internal AI Tools`,
      ],
    },
  ],
  mf = [
    {
      slug: `project-01`,
      number: `01`,
      name: `Northline`,
      client: `Sample client`,
      industry: `Consumer retail`,
      year: `2025`,
      services: [`Brand`, `Marketing`, `Development`],
      challenge: `A retail brand with strong products and a store experience that never translated online.`,
      solution: `A rebuild of the identity, a new storefront and a paid media programme reading from the same data.`,
      outcome: `Placeholder outcome copy. Replace with the real engagement summary.`,
      metrics: [
        { value: `XX%`, label: `Revenue growth` },
        { value: `XX%`, label: `Conversion rate` },
      ],
      isPlaceholder: !0,
    },
    {
      slug: `project-02`,
      number: `02`,
      name: `Fieldwork`,
      client: `Sample client`,
      industry: `B2B software`,
      year: `2025`,
      services: [`Product Design`, `Development`],
      challenge: `A capable internal tool nobody outside the founding team could use.`,
      solution: `Product design from first principles, then a web app built around the two jobs that mattered.`,
      outcome: `Placeholder outcome copy. Replace with the real engagement summary.`,
      metrics: [
        { value: `XX`, label: `Weeks to launch` },
        { value: `XX%`, label: `Task completion` },
      ],
      isPlaceholder: !0,
    },
    {
      slug: `project-03`,
      number: `03`,
      name: `Relay`,
      client: `Sample client`,
      industry: `Professional services`,
      year: `2026`,
      services: [`AI`, `Automation`],
      challenge: `Every inbound lead passed through four inboxes before anyone replied.`,
      solution: `AI qualification wired into the CRM, with follow-up sequences and reporting running unattended.`,
      outcome: `Placeholder outcome copy. Replace with the real engagement summary.`,
      metrics: [
        { value: `XX hrs`, label: `Saved weekly` },
        { value: `XX%`, label: `Faster response` },
      ],
      isPlaceholder: !0,
    },
  ],
  hf = [
    { value: `XX+`, label: `Projects delivered` },
    { value: `XX`, label: `Industries` },
    { value: `XX%`, label: `Average growth` },
    { value: `XX+`, label: `Automations built` },
  ],
  gf = [
    {
      number: `01`,
      title: `Discover`,
      copy: `Understand the business, the customer, the problem and the opportunity.`,
    },
    {
      number: `02`,
      title: `Strategize`,
      copy: `Define positioning, experience, technology and the growth plan behind them.`,
    },
    {
      number: `03`,
      title: `Build`,
      copy: `Design, develop, integrate and test until it holds under real use.`,
    },
    {
      number: `04`,
      title: `Grow`,
      copy: `Launch, optimise, automate and keep improving on the numbers.`,
    },
  ],
  _f = [
    {
      title: `Strategy + Execution`,
      copy: `One team thinking from the first ad impression to the technology behind the final experience.`,
    },
    {
      title: `Marketing + Engineering`,
      copy: `Campaign decisions inform product decisions. Product data informs campaign decisions.`,
    },
    {
      title: `Humans + AI`,
      copy: `Automation where it creates leverage. Human judgment where it changes the outcome.`,
    },
    {
      title: `Built for Outcomes`,
      copy: `Measured on business results, not the length of a deliverables list.`,
    },
  ],
  vf = [
    { label: `Lead`, note: `Form, ad, call or inbox` },
    { label: `AI Qualification`, note: `Scored and enriched in seconds` },
    { label: `CRM`, note: `Routed to the right owner` },
    { label: `Automated Follow-up`, note: `Sequenced, personal, on time` },
    { label: `Sales Team`, note: `Talking only to real opportunities` },
    { label: `Analytics`, note: `Every step measurable` },
  ],
  yf = [
    `AI agents`,
    `CRM automation`,
    `Lead processing`,
    `Email workflows`,
    `Customer support`,
    `Content workflows`,
    `Internal knowledge systems`,
    `Data processing`,
    `API integrations`,
    `Custom AI tools`,
  ],
  bf = [
    {
      quote: `Placeholder quote. This slot is built for an approved client quote about working with the team across marketing and engineering.`,
      name: `Client name`,
      role: `Role`,
      company: `Company`,
      isPlaceholder: !0,
    },
    {
      quote: `Placeholder quote. Use this slot for a quote about the automation work and the time it gave back.`,
      name: `Client name`,
      role: `Role`,
      company: `Company`,
      isPlaceholder: !0,
    },
  ],
  xf = [
    `Strategists`,
    `Marketers`,
    `Designers`,
    `Developers`,
    `AI specialists`,
  ],
  Sf = [
    `Marketing`,
    `Branding`,
    `Website`,
    `Web App`,
    `Mobile App`,
    `Custom Software`,
    `AI / Automation`,
    `E-commerce`,
    `Other`,
  ],
  Cf = [
    `Under $5K`,
    `$5K–$10K`,
    `$10K–$25K`,
    `$25K–$50K`,
    `$50K+`,
    `Let's Discuss`,
  ],
  wf = [`ASAP`, `1–2 Months`, `3–6 Months`, `Flexible`];
function Tf() {
  let [e, t] = (0, z.useState)(!1),
    [n, r] = (0, z.useState)(!1),
    i = yl({ select: (e) => e.location.pathname });
  return (
    (0, z.useEffect)(() => t(!1), [i]),
    (0, z.useEffect)(() => {
      let e = () => r(window.scrollY > 24);
      return (
        e(),
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, z.useEffect)(
      () => (
        (document.body.style.overflow = e ? `hidden` : ``),
        () => {
          document.body.style.overflow = ``;
        }
      ),
      [e],
    ),
    (0, B.jsxs)(`header`, {
      className: uf(
        `fixed inset-x-0 top-0 z-50 transition-all duration-700`,
        n && !e
          ? `border-b border-hairline bg-background/80 backdrop-blur-xl`
          : `border-b border-transparent`,
      ),
      children: [
        (0, B.jsxs)(`div`, {
          className: uf(
            `shell flex items-center justify-between gap-6 transition-all duration-700`,
            n && !e ? `h-16` : `h-[5.25rem]`,
          ),
          children: [
            (0, B.jsx)(df, {}),
            (0, B.jsxs)(`nav`, {
              "aria-label": `Primary`,
              className: `hidden items-center gap-10 md:flex`,
              children: [
                pf.map((e) =>
                  (0, B.jsxs)(
                    Wc,
                    {
                      to: e.to,
                      className: `group relative text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-500 hover:text-foreground aria-[current=page]:text-foreground`,
                      children: [
                        e.label,
                        (0, B.jsx)(`span`, {
                          className: `absolute -bottom-2 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full group-aria-[current=page]:w-full`,
                        }),
                      ],
                    },
                    e.to,
                  ),
                ),
                (0, B.jsxs)(Wc, {
                  to: `/contact`,
                  className: `group inline-flex items-center gap-2.5 bg-ink px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground transition-transform duration-500 hover:-translate-y-0.5`,
                  children: [
                    `Start a Project`,
                    (0, B.jsx)(zu, {
                      className: `size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`,
                      "aria-hidden": `true`,
                    }),
                  ],
                }),
              ],
            }),
            (0, B.jsxs)(`button`, {
              type: `button`,
              onClick: () => t((e) => !e),
              "aria-expanded": e,
              "aria-label": e ? `Close menu` : `Open menu`,
              className: `-mr-2 inline-flex size-12 flex-col items-center justify-center gap-2 md:hidden`,
              children: [
                (0, B.jsx)(`span`, {
                  "aria-hidden": `true`,
                  className: uf(
                    `block h-px w-7 bg-foreground transition-transform duration-500`,
                    e && `translate-y-[4.5px] rotate-45`,
                  ),
                }),
                (0, B.jsx)(`span`, {
                  "aria-hidden": `true`,
                  className: uf(
                    `block h-px w-7 bg-foreground transition-transform duration-500`,
                    e && `-translate-y-[4.5px] -rotate-45`,
                  ),
                }),
              ],
            }),
          ],
        }),
        e ? (0, B.jsx)(Ef, { onNavigate: () => t(!1) }) : null,
      ],
    })
  );
}
function Ef({ onNavigate: e }) {
  return (0, B.jsxs)(`div`, {
    className: `fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-background pt-[5.25rem] md:hidden`,
    children: [
      (0, B.jsx)(`nav`, {
        "aria-label": `Mobile`,
        className: `shell flex flex-1 flex-col justify-center gap-1`,
        children: pf.map((t, n) =>
          (0, B.jsxs)(
            Wc,
            {
              to: t.to,
              onClick: e,
              style: { animationDelay: `${n * 70}ms` },
              className: `reveal reveal-in flex items-baseline gap-5 border-b border-hairline py-6 font-display text-[2.75rem] font-bold uppercase leading-none tracking-[-0.04em] aria-[current=page]:text-accent`,
              children: [
                (0, B.jsxs)(`span`, {
                  className: `eyebrow text-muted-foreground/70`,
                  children: [`0`, n + 1],
                }),
                t.label,
              ],
            },
            t.to,
          ),
        ),
      }),
      (0, B.jsxs)(`div`, {
        className: `shell pb-14`,
        children: [
          (0, B.jsxs)(Wc, {
            to: `/contact`,
            onClick: e,
            className: `flex items-center justify-between bg-ink px-7 py-6 text-xs font-medium uppercase tracking-[0.18em] text-ink-foreground`,
            children: [
              `Start a Project`,
              (0, B.jsx)(zu, { className: `size-4`, "aria-hidden": `true` }),
            ],
          }),
          (0, B.jsx)(`a`, {
            href: `mailto:${ff.email}`,
            className: `mt-7 block text-sm text-muted-foreground underline-offset-4 hover:underline`,
            children: ff.email,
          }),
        ],
      }),
    ],
  });
}
function Df() {
  let e = new Date().getFullYear();
  return (0, B.jsx)(`footer`, {
    className: `border-t border-hairline bg-background`,
    children: (0, B.jsxs)(`div`, {
      className: `shell pb-[clamp(3rem,6vh,4.5rem)] pt-[clamp(4.5rem,10vh,7rem)]`,
      children: [
        (0, B.jsxs)(`div`, {
          className: `grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-20`,
          children: [
            (0, B.jsxs)(`div`, {
              children: [
                (0, B.jsxs)(`p`, {
                  className: `max-w-[24ch] font-display text-title font-light uppercase text-muted-foreground`,
                  children: [
                    `We create the clicks.`,
                    (0, B.jsx)(`br`, {}),
                    (0, B.jsx)(`span`, {
                      className: `font-bold text-foreground`,
                      children: `We write the code.`,
                    }),
                  ],
                }),
                (0, B.jsxs)(`a`, {
                  href: `mailto:${ff.email}`,
                  className: `group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] transition-colors hover:text-accent`,
                  children: [
                    ff.email,
                    (0, B.jsx)(zu, {
                      className: `size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`,
                      "aria-hidden": `true`,
                    }),
                  ],
                }),
              ],
            }),
            (0, B.jsxs)(`nav`, {
              "aria-label": `Footer`,
              className: `flex flex-col gap-4`,
              children: [
                (0, B.jsx)(`span`, {
                  className: `eyebrow text-muted-foreground/70`,
                  children: `Navigate`,
                }),
                pf.map((e) =>
                  (0, B.jsx)(
                    Wc,
                    {
                      to: e.to,
                      className: `w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground`,
                      children: e.label,
                    },
                    e.to,
                  ),
                ),
              ],
            }),
            (0, B.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, B.jsx)(`span`, {
                  className: `eyebrow text-muted-foreground/70`,
                  children: `Social`,
                }),
                ff.socials.map((e) =>
                  (0, B.jsx)(
                    `a`,
                    {
                      href: e.href,
                      target: `_blank`,
                      rel: `noreferrer noopener`,
                      className: `w-fit text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground`,
                      children: e.label,
                    },
                    e.label,
                  ),
                ),
              ],
            }),
          ],
        }),
        (0, B.jsxs)(`p`, {
          "aria-hidden": `true`,
          className: `mt-[clamp(4rem,10vh,7rem)] select-none font-display text-mega font-bold uppercase leading-[0.82] text-foreground/[0.07]`,
          children: [
            `Clicks `,
            (0, B.jsx)(`span`, { className: `text-accent/25`, children: `N` }),
            ` Codes`,
          ],
        }),
        (0, B.jsxs)(`div`, {
          className: `mt-10 flex flex-col gap-3 border-t border-hairline pt-7 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between`,
          children: [
            (0, B.jsxs)(`span`, { children: [`© `, e, ` `, ff.name] }),
            (0, B.jsx)(`span`, { children: `Marketing · Technology · AI` }),
          ],
        }),
      ],
    }),
  });
}
function Of(e, t = {}) {
  if (typeof window > `u`) return;
  window.__lovableEvents?.captureException?.(
    e,
    { source: `react_error_boundary`, route: window.location.pathname, ...t },
    { mechanism: `react_error_boundary`, handled: !1, severity: `error` },
  );
  let n =
      e instanceof Response
        ? `Response ${e.status}${e.url ? ` at ${e.url}` : ``}`
        : e instanceof Error
          ? e.message
          : String(e),
    r = e instanceof Error ? e.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message: n,
    ...(r !== void 0 && { stack: r }),
    filename: window.location.pathname,
  });
}
function kf() {
  return (0, B.jsx)(`div`, {
    className: `flex min-h-screen items-center justify-center bg-background px-4`,
    children: (0, B.jsxs)(`div`, {
      className: `max-w-md text-center`,
      children: [
        (0, B.jsx)(`h1`, {
          className: `text-7xl font-bold text-foreground`,
          children: `404`,
        }),
        (0, B.jsx)(`h2`, {
          className: `mt-4 text-xl font-semibold text-foreground`,
          children: `Page not found`,
        }),
        (0, B.jsx)(`p`, {
          className: `mt-2 text-sm text-muted-foreground`,
          children: `The page you're looking for doesn't exist or has been moved.`,
        }),
        (0, B.jsx)(`div`, {
          className: `mt-6`,
          children: (0, B.jsx)(Wc, {
            to: `/`,
            className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
            children: `Go home`,
          }),
        }),
      ],
    }),
  });
}
function Af({ error: e, reset: t }) {
  console.error(e);
  let n = Ys();
  return (
    (0, z.useEffect)(() => {
      Of(e, { boundary: `tanstack_root_error_component` });
    }, [e]),
    (0, B.jsx)(`div`, {
      className: `flex min-h-screen items-center justify-center bg-background px-4`,
      children: (0, B.jsxs)(`div`, {
        className: `max-w-md text-center`,
        children: [
          (0, B.jsx)(`h1`, {
            className: `text-xl font-semibold tracking-tight text-foreground`,
            children: `This page didn't load`,
          }),
          (0, B.jsx)(`p`, {
            className: `mt-2 text-sm text-muted-foreground`,
            children: `Something went wrong on our end. You can try refreshing or head back home.`,
          }),
          (0, B.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-2`,
            children: [
              (0, B.jsx)(`button`, {
                onClick: () => {
                  (n.invalidate(), t());
                },
                className: `inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90`,
                children: `Try again`,
              }),
              (0, B.jsx)(`a`, {
                href: `/`,
                className: `inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent`,
                children: `Go home`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
var jf = Jc()({
    head: () => ({
      meta: [
        { charSet: `utf-8` },
        { name: `viewport`, content: `width=device-width, initial-scale=1` },
        {
          title: `Digital Marketing, Development & AI Automation Agency | Clicks N Codes`,
        },
        {
          name: `description`,
          content: `Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.`,
        },
        { name: `author`, content: `Clicks N Codes` },
        { property: `og:site_name`, content: `Clicks N Codes` },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
      links: [
        { rel: `stylesheet`, href: Au },
        { rel: `preconnect`, href: `https://fonts.googleapis.com` },
        {
          rel: `preconnect`,
          href: `https://fonts.gstatic.com`,
          crossOrigin: `anonymous`,
        },
        {
          rel: `stylesheet`,
          href: `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Inter:wght@400;500&display=swap`,
        },
        { rel: `icon`, href: `/favicon.png`, type: `image/png` },
      ],
    }),
    shellComponent: Nf,
    component: Pf,
    notFoundComponent: kf,
    errorComponent: Af,
  }),
  Mf = {
    "@context": `https://schema.org`,
    "@type": `ProfessionalService`,
    name: `Clicks N Codes`,
    description: `Digital agency combining marketing, technology and AI: branding, web and software development, e-commerce and AI automation.`,
    email: `hello@clicksncodes.com`,
    areaServed: `Worldwide`,
  };
function Nf({ children: e }) {
  return (0, B.jsxs)(`html`, {
    lang: `en`,
    children: [
      (0, B.jsx)(`head`, { children: (0, B.jsx)(Cl, {}) }),
      (0, B.jsxs)(`body`, {
        children: [
          e,
          (0, B.jsx)(`script`, {
            type: `application/ld+json`,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: { __html: JSON.stringify(Mf) },
          }),
          (0, B.jsx)(wl, {}),
        ],
      }),
    ],
  });
}
function Pf() {
  let { queryClient: e } = jf.useRouteContext();
  return (0, B.jsxs)(Nl, {
    client: e,
    children: [
      (0, B.jsx)(Tf, {}),
      (0, B.jsx)(`main`, { id: `main`, children: (0, B.jsx)(ul, {}) }),
      (0, B.jsx)(Df, {}),
    ],
  });
}
var Ff = `modulepreload`,
  If = function (e) {
    return `/` + e;
  },
  Lf = {},
  Rf = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve
          ? import.meta.resolve(e)
          : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = If(t, n)), (t = s(t)), t in Lf)) return;
          Lf[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Ff),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () =>
                  n(Error(`Unable to preload CSS for ${t}`)),
                ));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  zf = Zc(`/`)({
    head: () => ({
      meta: [
        {
          title: `Digital Marketing, Development & AI Automation Agency | Clicks N Codes`,
        },
        {
          name: `description`,
          content: `Clicks N Codes is a digital agency combining marketing, technology and AI to build brands, products and systems designed for growth.`,
        },
        {
          property: `og:title`,
          content: `Clicks N Codes — Marketing, Technology & AI`,
        },
        {
          property: `og:description`,
          content: `We create the clicks. We write the code. We build what happens next.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: $c(
      () =>
        Rf(
          () => import(`./routes-JRhK76uO.js`),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
        ),
      `component`,
    ),
  }),
  Bf = Zc(`/about`)({
    head: () => ({
      meta: [
        {
          title: `About — Creative Minds, Technical Thinkers | Clicks N Codes`,
        },
        {
          name: `description`,
          content: `Clicks N Codes is a multidisciplinary team of strategists, marketers, designers, developers and AI specialists working as one.`,
        },
        { property: `og:title`, content: `About | Clicks N Codes` },
        {
          property: `og:description`,
          content: `One team where creative thinking and technical execution work together.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: $c(
      () =>
        Rf(
          () => import(`./about-BuH2ce2C.js`),
          __vite__mapDeps([7, 2, 8, 3, 5, 6]),
        ),
      `component`,
    ),
  }),
  Vf = Zc(`/contact`)({
    head: () => ({
      meta: [
        { title: `Start a Project | Clicks N Codes` },
        {
          name: `description`,
          content: `Tell us about your marketing, website, product or automation project and we'll come back within one business day.`,
        },
        { property: `og:title`, content: `Start a Project | Clicks N Codes` },
        {
          property: `og:description`,
          content: `Share your brief with Clicks N Codes — marketing, technology and AI in one team.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: $c(
      () =>
        Rf(() => import(`./contact-B2U5vBSw.js`), __vite__mapDeps([9, 8, 2])),
      `component`,
    ),
  }),
  Q = Zc(`/services`)({
    head: () => ({
      meta: [
        {
          title: `Services — Marketing, Design, Development & AI | Clicks N Codes`,
        },
        {
          name: `description`,
          content: `Marketing, brand and design, software development and AI automation, delivered by one team at Clicks N Codes.`,
        },
        { property: `og:title`, content: `Services | Clicks N Codes` },
        {
          property: `og:description`,
          content: `Strategy, campaigns, design, engineering and automation from a single connected team.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: $c(
      () =>
        Rf(
          () => import(`./services-CC95rQln.js`),
          __vite__mapDeps([10, 4, 2, 3, 8, 6]),
        ),
      `component`,
    ),
  }),
  Hf = Zc(`/work`)({
    head: () => ({
      meta: [
        { title: `Selected Work & Case Studies | Clicks N Codes` },
        {
          name: `description`,
          content: `Case studies across brand, marketing, product design, development and AI automation from Clicks N Codes.`,
        },
        { property: `og:title`, content: `Selected Work | Clicks N Codes` },
        {
          property: `og:description`,
          content: `Editorial case studies spanning marketing, product and automation work.`,
        },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary_large_image` },
      ],
    }),
    component: $c(
      () =>
        Rf(
          () => import(`./work-DGm4wIKz.js`),
          __vite__mapDeps([11, 1, 2, 3, 8]),
        ),
      `component`,
    ),
  }),
  Uf = {
    IndexRoute: zf.update({ id: `/`, path: `/`, getParentRoute: () => jf }),
    AboutRoute: Bf.update({
      id: `/about`,
      path: `/about`,
      getParentRoute: () => jf,
    }),
    ContactRoute: Vf.update({
      id: `/contact`,
      path: `/contact`,
      getParentRoute: () => jf,
    }),
    ServicesRoute: Q.update({
      id: `/services`,
      path: `/services`,
      getParentRoute: () => jf,
    }),
    WorkRoute: Hf.update({
      id: `/work`,
      path: `/work`,
      getParentRoute: () => jf,
    }),
  },
  Wf = jf._addFileChildren(Uf),
  Gf = () =>
    hl({
      routeTree: Wf,
      context: { queryClient: new ku() },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
async function Kf() {
  let e = await Gf(),
    t;
  if (jl) {
    let n = await jl.getOptions();
    ((n.serializationAdapters = n.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = n),
      (t = n.serializationAdapters),
      (e.options.defaultSsr = n.defaultSsr));
  } else
    ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(Os),
    e.options.serializationAdapters &&
      t.push(...e.options.serializationAdapters),
    e.update({ basepath: ``, serializationAdapters: t }),
    e.stores.matchesId.get().length || (await js(e)),
    e
  );
}
var qf = Kf;
async function Jf() {
  let e = await qf();
  return (window.$_TSR?.h(), e);
}
var Yf;
function Xf() {
  return (
    (Yf ||= Jf()),
    (0, B.jsx)(Bs, {
      promise: Yf,
      children: (e) => (0, B.jsx)(vl, { router: e }),
    })
  );
}
var Zf = g();
(0, z.startTransition)(() => {
  (0, Zf.hydrateRoot)(
    document,
    (0, B.jsx)(z.StrictMode, { children: (0, B.jsx)(Xf, {}) }),
  );
});
export {
  Wc as _,
  gf as a,
  c as b,
  Z as c,
  bf as d,
  wf as f,
  Ru as g,
  zu as h,
  hf as i,
  ff as l,
  uf as m,
  Cf as n,
  mf as o,
  vf as p,
  _f as r,
  Sf as s,
  yf as t,
  xf as u,
  Rs as v,
  u as y,
};
