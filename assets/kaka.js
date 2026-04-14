import { A as ua, C as fm, a, b as H, c as W, d as om, e as U, f as He, g as h, h as Fragment, i as im, j as rl, k as am, l as sm, m as Vo, n as c, o as Ke, p as Gn, q as um, r as lm, t as cm, u as dm, v as sa, w as nl } from "./chunk-J4CMXECL.js";
var Et = W(bt => {
  c();
  var gr, me, ol, pm, Oe = (Vo(),
    He(sm)), Yn = 0, ym = [], la = [], mm = Oe.options.__b, _m = Oe.options.__r, hm = Oe.options.diffed, gm = Oe.options.__c, Em = Oe.options.unmount;
  function un(e, t) {
    Oe.options.__h && Oe.options.__h(me, e, Yn || t),
      Yn = 0;
    var r = me.__H || (me.__H = {
      __: [],
      __h: []
    });
    return e >= r.__.length && r.__.push({
      __V: la
    }),
      r.__[e]
  }
  a(un, "p");
  function Tm(e) {
    return Yn = 1,
      Am(bm, e)
  }
  a(Tm, "x");
  function Am(e, t, r) {
    var n = un(gr++, 2);
    if (n.t = e,
      !n.__c && (n.__ = [r ? r(t) : bm(void 0, t), function(l) {
        var d = n.__N ? n.__N[0] : n.__[0]
          , u = n.t(d, l);
        d !== u && (n.__N = [u, n.__[1]],
          n.__c.setState({}))
      }
      ],
        n.__c = me,
        !me.u)) {
      var o = a(function(l, d, u) {
        if (!n.__c.__H)
          return !0;
        var f = n.__c.__H.__.filter(function(_) {
          return _.__c
        });
        if (f.every(function(_) {
          return !_.__N
        }))
          return !i || i.call(this, l, d, u);
        var p = !1;
        return f.forEach(function(_) {
          if (_.__N) {
            var S = _.__[0];
            _.__ = _.__N,
              _.__N = void 0,
              S !== _.__[0] && (p = !0)
          }
        }),
          !(!p && n.__c.props === l) && (!i || i.call(this, l, d, u))
      }, "f");
      me.u = !0;
      var i = me.shouldComponentUpdate
        , s = me.componentWillUpdate;
      me.componentWillUpdate = function(l, d, u) {
        if (this.__e) {
          var f = i;
          i = void 0,
            o(l, d, u),
            i = f
        }
        s && s.call(this, l, d, u)
      }
        ,
        me.shouldComponentUpdate = o
    }
    return n.__N || n.__
  }
  a(Am, "d");
  function vm(e, t) {
    var r = un(gr++, 4);
    !Oe.options.__s && sl(r.__H, t) && (r.__ = e,
      r.o = t,
      me.__h.push(r))
  }
  a(vm, "m");
  function il(e, t) {
    var r = un(gr++, 7);
    return sl(r.__H, t) ? (r.__V = e(),
      r.o = t,
      r.__h = e,
      r.__V) : r.__
  }
  a(il, "h");
  function qO() {
    for (var e; e = ym.shift();)
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(ca),
            e.__H.__h.forEach(al),
            e.__H.__h = []
        } catch (t) {
          e.__H.__h = [],
            Oe.options.__e(t, e.__v)
        }
  }
  a(qO, "y");
  Oe.options.__b = function(e) {
    me = null,
      mm && mm(e)
  }
    ,
    Oe.options.__r = function(e) {
      _m && _m(e),
        gr = 0;
      var t = (me = e.__c).__H;
      t && (ol === me ? (t.__h = [],
        me.__h = [],
        t.__.forEach(function(r) {
          r.__N && (r.__ = r.__N),
            r.__V = la,
            r.__N = r.o = void 0
        })) : (t.__h.forEach(ca),
          t.__h.forEach(al),
          t.__h = [],
          gr = 0)),
        ol = me
    }
    ,
    Oe.options.diffed = function(e) {
      hm && hm(e);
      var t = e.__c;
      t && t.__H && (t.__H.__h.length && (ym.push(t) !== 1 && pm === Oe.options.requestAnimationFrame || ((pm = Oe.options.requestAnimationFrame) || ZO)(qO)),
        t.__H.__.forEach(function(r) {
          r.o && (r.__H = r.o),
            r.__V !== la && (r.__ = r.__V),
            r.o = void 0,
            r.__V = la
        })),
        ol = me = null
    }
    ,
    Oe.options.__c = function(e, t) {
      t.some(function(r) {
        try {
          r.__h.forEach(ca),
            r.__h = r.__h.filter(function(n) {
              return !n.__ || al(n)
            })
        } catch (n) {
          t.some(function(o) {
            o.__h && (o.__h = [])
          }),
            t = [],
            Oe.options.__e(n, r.__v)
        }
      }),
        gm && gm(e, t)
    }
    ,
    Oe.options.unmount = function(e) {
      Em && Em(e);
      var t, r = e.__c;
      r && r.__H && (r.__H.__.forEach(function(n) {
        try {
          ca(n)
        } catch (o) {
          t = o
        }
      }),
        r.__H = void 0,
        t && Oe.options.__e(t, r.__v))
    }
    ;
  var Sm = typeof requestAnimationFrame == "function";
  function ZO(e) {
    var t, r = a(function() {
      clearTimeout(n),
        Sm && cancelAnimationFrame(t),
        setTimeout(e)
    }, "r"), n = setTimeout(r, 100);
    Sm && (t = requestAnimationFrame(r))
  }
  a(ZO, "q");
  function ca(e) {
    var t = me
      , r = e.__c;
    typeof r == "function" && (e.__c = void 0,
      r()),
      me = t
  }
  a(ca, "A");
  function al(e) {
    var t = me;
    e.__c = e.__(),
      me = t
  }
  a(al, "F");
  function sl(e, t) {
    return !e || e.length !== t.length || t.some(function(r, n) {
      return r !== e[n]
    })
  }
  a(sl, "T");
  function bm(e, t) {
    return typeof t == "function" ? t(e) : t
  }
  a(bm, "P");
  bt.useCallback = function(e, t) {
    return Yn = 8,
      il(function() {
        return e
      }, t)
  }
    ,
    bt.useContext = function(e) {
      var t = me.context[e.__c]
        , r = un(gr++, 9);
      return r.c = e,
        t ? (r.__ == null && (r.__ = !0,
          t.sub(me)),
          t.props.value) : e.__
    }
    ,
    bt.useDebugValue = function(e, t) {
      Oe.options.useDebugValue && Oe.options.useDebugValue(t ? t(e) : e)
    }
    ,
    bt.useEffect = function(e, t) {
      var r = un(gr++, 3);
      !Oe.options.__s && sl(r.__H, t) && (r.__ = e,
        r.o = t,
        me.__H.__h.push(r))
    }
    ,
    bt.useErrorBoundary = function(e) {
      var t = un(gr++, 10)
        , r = Tm();
      return t.__ = e,
        me.componentDidCatch || (me.componentDidCatch = function(n, o) {
          t.__ && t.__(n, o),
            r[1](n)
        }
        ),
        [r[0], function() {
          r[1](void 0)
        }
        ]
    }
    ,
    bt.useId = function() {
      var e = un(gr++, 11);
      if (!e.__) {
        for (var t = me.__v; t !== null && !t.__m && t.__ !== null;)
          t = t.__;
        var r = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + r[0] + "-" + r[1]++
      }
      return e.__
    }
    ,
    bt.useImperativeHandle = function(e, t, r) {
      Yn = 6,
        vm(function() {
          return typeof e == "function" ? (e(t()),
            function() {
              return e(null)
            }
          ) : e ? (e.current = t(),
            function() {
              return e.current = null
            }
          ) : void 0
        }, r == null ? r : r.concat(e))
    }
    ,
    bt.useLayoutEffect = vm,
    bt.useMemo = il,
    bt.useReducer = Am,
    bt.useRef = function(e) {
      return Yn = 5,
        il(function() {
          return {
            current: e
          }
        }, [])
    }
    ,
    bt.useState = Tm
}
);
var Ge = W(ie => {
  c();
  var Y = (Vo(),
    He(sm))
    , Xe = Et();
  function Mm(e, t) {
    for (var r in t)
      e[r] = t[r];
    return e
  }
  a(Mm, "e");
  function ll(e, t) {
    for (var r in e)
      if (r !== "__source" && !(r in t))
        return !0;
    for (var n in t)
      if (n !== "__source" && e[n] !== t[n])
        return !0;
    return !1
  }
  a(ll, "r");
  function ul(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e != e && t != t
  }
  a(ul, "u");
  function da(e) {
    this.props = e
  }
  a(da, "o");
  function Lm(e, t) {
    function r(o) {
      var i = this.props.ref
        , s = i == o.ref;
      return !s && i && (i.call ? i(null) : i.current = null),
        t ? !t(this.props, o) || !s : ll(this.props, o)
    }
    a(r, "u");
    function n(o) {
      return this.shouldComponentUpdate = r,
        Y.createElement(e, o)
    }
    return a(n, "o"),
      n.displayName = "Memo(" + (e.displayName || e.name) + ")",
      n.prototype.isReactComponent = !0,
      n.__f = !0,
      n
  }
  a(Lm, "i");
  (da.prototype = new Y.Component).isPureReactComponent = !0,
    da.prototype.shouldComponentUpdate = function(e, t) {
      return ll(this.props, e) || ll(this.state, t)
    }
    ;
  var xm = Y.options.__b;
  Y.options.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
      e.ref = null),
      xm && xm(e)
  }
    ;
  var QO = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function $m(e) {
    function t(r) {
      var n = Mm({}, r);
      return delete n.ref,
        e(n, r.ref || null)
    }
    return a(t, "t"),
      t.$$typeof = QO,
      t.render = t,
      t.prototype.isReactComponent = t.__f = !0,
      t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
      t
  }
  a($m, "f");
  var Cm = a(function(e, t) {
    return e == null ? null : Y.toChildArray(Y.toChildArray(e).map(t))
  }, "a")
    , Dm = {
      map: Cm,
      forEach: Cm,
      count: a(function(e) {
        return e ? Y.toChildArray(e).length : 0
      }, "count"),
      only: a(function(e) {
        var t = Y.toChildArray(e);
        if (t.length !== 1)
          throw "Children.only";
        return t[0]
      }, "only"),
      toArray: Y.toChildArray
    }
    , JO = Y.options.__e;
  Y.options.__e = function(e, t, r, n) {
    if (e.then) {
      for (var o, i = t; i = i.__;)
        if ((o = i.__c) && o.__c)
          return t.__e == null && (t.__e = r.__e,
            t.__k = r.__k),
            o.__c(e, t)
    }
    JO(e, t, r, n)
  }
    ;
  var Rm = Y.options.unmount;
  function Um(e, t, r) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
      typeof n.__c == "function" && n.__c()
    }),
      e.__c.__H = null),
      (e = Mm({}, e)).__c != null && (e.__c.__P === r && (e.__c.__P = t),
        e.__c = null),
      e.__k = e.__k && e.__k.map(function(n) {
        return Um(n, t, r)
      })),
      e
  }
  a(Um, "v");
  function Fm(e, t, r) {
    return e && (e.__v = null,
      e.__k = e.__k && e.__k.map(function(n) {
        return Fm(n, t, r)
      }),
      e.__c && e.__c.__P === t && (e.__e && r.insertBefore(e.__e, e.__d),
        e.__c.__e = !0,
        e.__c.__P = r)),
      e
  }
  a(Fm, "d");
  function ko() {
    this.__u = 0,
      this.t = null,
      this.__b = null
  }
  a(ko, "m");
  function Bm(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
  }
  a(Bm, "x");
  function Vm(e) {
    var t, r, n;
    function o(i) {
      if (t || (t = e()).then(function(s) {
        r = s.default || s
      }, function(s) {
        n = s
      }),
        n)
        throw n;
      if (!r)
        throw t;
      return Y.createElement(r, i)
    }
    return a(o, "o"),
      o.displayName = "Lazy",
      o.__f = !0,
      o
  }
  a(Vm, "b");
  function jn() {
    this.u = null,
      this.o = null
  }
  a(jn, "_");
  Y.options.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(),
      t && e.__h === !0 && (e.type = null),
      Rm && Rm(e)
  }
    ,
    (ko.prototype = new Y.Component).__c = function(e, t) {
      var r = t.__c
        , n = this;
      n.t == null && (n.t = []),
        n.t.push(r);
      var o = Bm(n.__v)
        , i = !1
        , s = a(function() {
          i || (i = !0,
            r.__R = null,
            o ? o(l) : l())
        }, "i");
      r.__R = s;
      var l = a(function() {
        if (!--n.__u) {
          if (n.state.__a) {
            var u = n.state.__a;
            n.__v.__k[0] = Fm(u, u.__c.__P, u.__c.__O)
          }
          var f;
          for (n.setState({
            __a: n.__b = null
          }); f = n.t.pop();)
            f.forceUpdate()
        }
      }, "c")
        , d = t.__h === !0;
      n.__u++ || d || n.setState({
        __a: n.__b = n.__v.__k[0]
      }),
        e.then(s, s)
    }
    ,
    ko.prototype.componentWillUnmount = function() {
      this.t = []
    }
    ,
    ko.prototype.render = function(e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var r = document.createElement("div")
            , n = this.__v.__k[0].__c;
          this.__v.__k[0] = Um(this.__b, r, n.__O = n.__P)
        }
        this.__b = null
      }
      var o = t.__a && Y.createElement(Y.Fragment, null, e.fallback);
      return o && (o.__h = null),
        [Y.createElement(Y.Fragment, null, t.__a ? null : e.children), o]
    }
    ;
  var Om = a(function(e, t, r) {
    if (++r[1] === r[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
      for (r = e.u; r;) {
        for (; r.length > 3;)
          r.pop()();
        if (r[1] < r[0])
          break;
        e.u = r = r[2]
      }
  }, "y");
  function e3(e) {
    return this.getChildContext = function() {
      return e.context
    }
      ,
      e.children
  }
  a(e3, "g");
  function t3(e) {
    var t = this
      , r = e.i;
    t.componentWillUnmount = function() {
      Y.render(null, t.l),
        t.l = null,
        t.i = null
    }
      ,
      t.i && t.i !== r && t.componentWillUnmount(),
      e.__v ? (t.l || (t.i = r,
        t.l = {
          nodeType: 1,
          parentNode: r,
          childNodes: [],
          appendChild: a(function(n) {
            this.childNodes.push(n),
              t.i.appendChild(n)
          }, "appendChild"),
          insertBefore: a(function(n, o) {
            this.childNodes.push(n),
              t.i.appendChild(n)
          }, "insertBefore"),
          removeChild: a(function(n) {
            this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
              t.i.removeChild(n)
          }, "removeChild")
        }),
        Y.render(Y.createElement(e3, {
          context: t.context
        }, e.__v), t.l)) : t.l && t.componentWillUnmount()
  }
  a(t3, "S");
  function km(e, t) {
    var r = Y.createElement(t3, {
      __v: e,
      i: t
    });
    return r.containerInfo = t,
      r
  }
  a(km, "C");
  (jn.prototype = new Y.Component).__a = function(e) {
    var t = this
      , r = Bm(t.__v)
      , n = t.o.get(e);
    return n[0]++,
      function(o) {
        var i = a(function() {
          t.props.revealOrder ? (n.push(o),
            Om(t, e, n)) : o()
        }, "o");
        r ? r(i) : i()
      }
  }
    ,
    jn.prototype.render = function(e) {
      this.u = null,
        this.o = new Map;
      var t = Y.toChildArray(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var r = t.length; r--;)
        this.o.set(t[r], this.u = [1, 0, this.u]);
      return e.children
    }
    ,
    jn.prototype.componentDidUpdate = jn.prototype.componentDidMount = function() {
      var e = this;
      this.o.forEach(function(t, r) {
        Om(e, r, t)
      })
    }
    ;
  var Hm = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103
    , r3 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
    , n3 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
    , o3 = /[A-Z0-9]/g
    , i3 = typeof document != "undefined"
    , a3 = a(function(e) {
      return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    }, "N");
  function Gm(e, t, r) {
    return t.__k == null && (t.textContent = ""),
      Y.render(e, t),
      typeof r == "function" && r(),
      e ? e.__c : null
  }
  a(Gm, "k");
  function Ym(e, t, r) {
    return Y.hydrate(e, t),
      typeof r == "function" && r(),
      e ? e.__c : null
  }
  a(Ym, "A");
  Y.Component.prototype.isReactComponent = {},
    ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
      Object.defineProperty(Y.Component.prototype, e, {
        configurable: !0,
        get: a(function() {
          return this["UNSAFE_" + e]
        }, "get"),
        set: a(function(t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t
          })
        }, "set")
      })
    });
  var Pm = Y.options.event;
  function s3() { }
  a(s3, "I");
  function u3() {
    return this.cancelBubble
  }
  a(u3, "L");
  function l3() {
    return this.defaultPrevented
  }
  a(l3, "U");
  Y.options.event = function(e) {
    return Pm && (e = Pm(e)),
      e.persist = s3,
      e.isPropagationStopped = u3,
      e.isDefaultPrevented = l3,
      e.nativeEvent = e
  }
    ;
  var cl, c3 = {
    enumerable: !1,
    configurable: !0,
    get: a(function() {
      return this.class
    }, "get")
  }, Nm = Y.options.vnode;
  Y.options.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var r = t.props
        , n = t.type
        , o = {};
      for (var i in r) {
        var s = r[i];
        if (!(i === "value" && "defaultValue" in r && s == null || i3 && i === "children" && n === "noscript" || i === "class" || i === "className")) {
          var l = i.toLowerCase();
          i === "defaultValue" && "value" in r && r.value == null ? i = "value" : i === "download" && s === !0 ? s = "" : l === "ondoubleclick" ? i = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || a3(r.type) ? l === "onfocus" ? i = "onfocusin" : l === "onblur" ? i = "onfocusout" : n3.test(i) ? i = l : n.indexOf("-") === -1 && r3.test(i) ? i = i.replace(o3, "-$&").toLowerCase() : s === null && (s = void 0) : l = i = "oninput",
            l === "oninput" && o[i = l] && (i = "oninputCapture"),
            o[i] = s
        }
      }
      n == "select" && o.multiple && Array.isArray(o.value) && (o.value = Y.toChildArray(r.children).forEach(function(d) {
        d.props.selected = o.value.indexOf(d.props.value) != -1
      })),
        n == "select" && o.defaultValue != null && (o.value = Y.toChildArray(r.children).forEach(function(d) {
          d.props.selected = o.multiple ? o.defaultValue.indexOf(d.props.value) != -1 : o.defaultValue == d.props.value
        })),
        r.class && !r.className ? (o.class = r.class,
          Object.defineProperty(o, "className", c3)) : (r.className && !r.class || r.class && r.className) && (o.class = o.className = r.className),
        t.props = o
    }(e),
      e.$$typeof = Hm,
      Nm && Nm(e)
  }
    ;
  var wm = Y.options.__r;
  Y.options.__r = function(e) {
    wm && wm(e),
      cl = e.__c
  }
    ;
  var Im = Y.options.diffed;
  Y.options.diffed = function(e) {
    Im && Im(e);
    var t = e.props
      , r = e.__e;
    r != null && e.type === "textarea" && "value" in t && t.value !== r.value && (r.value = t.value == null ? "" : t.value),
      cl = null
  }
    ;
  var jm = {
    ReactCurrentDispatcher: {
      current: {
        readContext: a(function(e) {
          return cl.__n[e.__c].props.value
        }, "readContext")
      }
    }
  };
  function zm(e) {
    return Y.createElement.bind(null, e)
  }
  a(zm, "z");
  function dl(e) {
    return !!e && e.$$typeof === Hm
  }
  a(dl, "B");
  function Wm(e) {
    return dl(e) ? Y.cloneElement.apply(null, arguments) : e
  }
  a(Wm, "q");
  function Km(e) {
    return !!e.__k && (Y.render(null, e),
      !0)
  }
  a(Km, "H");
  function Xm(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
  }
  a(Xm, "Z");
  var qm = a(function(e, t) {
    return e(t)
  }, "Y")
    , Zm = a(function(e, t) {
      return e(t)
    }, "$")
    , Qm = Y.Fragment;
  function fl(e) {
    e()
  }
  a(fl, "J");
  function Jm(e) {
    return e
  }
  a(Jm, "K");
  function e_() {
    return [!1, fl]
  }
  a(e_, "Q");
  var t_ = Xe.useLayoutEffect;
  function r_(e, t) {
    var r = t()
      , n = Xe.useState({
        p: {
          __: r,
          h: t
        }
      })
      , o = n[0].p
      , i = n[1];
    return Xe.useLayoutEffect(function() {
      o.__ = r,
        o.h = t,
        ul(o.__, t()) || i({
          p: o
        })
    }, [e, r, t]),
      Xe.useEffect(function() {
        return ul(o.__, o.h()) || i({
          p: o
        }),
          e(function() {
            ul(o.__, o.h()) || i({
              p: o
            })
          })
      }, [e]),
      r
  }
  a(r_, "nn");
  var d3 = {
    useState: Xe.useState,
    useId: Xe.useId,
    useReducer: Xe.useReducer,
    useEffect: Xe.useEffect,
    useLayoutEffect: Xe.useLayoutEffect,
    useInsertionEffect: t_,
    useTransition: e_,
    useDeferredValue: Jm,
    useSyncExternalStore: r_,
    startTransition: fl,
    useRef: Xe.useRef,
    useImperativeHandle: Xe.useImperativeHandle,
    useMemo: Xe.useMemo,
    useCallback: Xe.useCallback,
    useContext: Xe.useContext,
    useDebugValue: Xe.useDebugValue,
    version: "17.0.2",
    Children: Dm,
    render: Gm,
    hydrate: Ym,
    unmountComponentAtNode: Km,
    createPortal: km,
    createElement: Y.createElement,
    createContext: Y.createContext,
    createFactory: zm,
    cloneElement: Wm,
    createRef: Y.createRef,
    Fragment: Y.Fragment,
    isValidElement: dl,
    findDOMNode: Xm,
    Component: Y.Component,
    PureComponent: da,
    memo: Lm,
    forwardRef: $m,
    flushSync: Zm,
    unstable_batchedUpdates: qm,
    StrictMode: Qm,
    Suspense: ko,
    SuspenseList: jn,
    lazy: Vm,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: jm
  };
  Object.defineProperty(ie, "Component", {
    enumerable: !0,
    get: a(function() {
      return Y.Component
    }, "get")
  }),
    Object.defineProperty(ie, "Fragment", {
      enumerable: !0,
      get: a(function() {
        return Y.Fragment
      }, "get")
    }),
    Object.defineProperty(ie, "createContext", {
      enumerable: !0,
      get: a(function() {
        return Y.createContext
      }, "get")
    }),
    Object.defineProperty(ie, "createElement", {
      enumerable: !0,
      get: a(function() {
        return Y.createElement
      }, "get")
    }),
    Object.defineProperty(ie, "createRef", {
      enumerable: !0,
      get: a(function() {
        return Y.createRef
      }, "get")
    }),
    ie.Children = Dm,
    ie.PureComponent = da,
    ie.StrictMode = Qm,
    ie.Suspense = ko,
    ie.SuspenseList = jn,
    ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jm,
    ie.cloneElement = Wm,
    ie.createFactory = zm,
    ie.createPortal = km,
    ie.default = d3,
    ie.findDOMNode = Xm,
    ie.flushSync = Zm,
    ie.forwardRef = $m,
    ie.hydrate = Ym,
    ie.isValidElement = dl,
    ie.lazy = Vm,
    ie.memo = Lm,
    ie.render = Gm,
    ie.startTransition = fl,
    ie.unmountComponentAtNode = Km,
    ie.unstable_batchedUpdates = qm,
    ie.useDeferredValue = Jm,
    ie.useInsertionEffect = t_,
    ie.useSyncExternalStore = r_,
    ie.useTransition = e_,
    ie.version = "17.0.2",
    Object.keys(Xe).forEach(function(e) {
      e === "default" || ie.hasOwnProperty(e) || Object.defineProperty(ie, e, {
        enumerable: !0,
        get: a(function() {
          return Xe[e]
        }, "get")
      })
    })
}
);
var __, h_ = H(() => {
  c();
  __ = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}
}
);
var g_ = H(() => {
  c();
  h_()
}
);
var Tr, Al = H(() => {
  c();
  Tr = "1.9.0"
}
);
function T3(e) {
  var t = new Set([e])
    , r = new Set
    , n = e.match(E_);
  if (!n)
    return function() {
      return !1
    }
      ;
  var o = {
    major: +n[1],
    minor: +n[2],
    patch: +n[3],
    prerelease: n[4]
  };
  if (o.prerelease != null)
    return a(function(d) {
      return d === e
    }, "isExactmatch");
  function i(l) {
    return r.add(l),
      !1
  }
  a(i, "_reject");
  function s(l) {
    return t.add(l),
      !0
  }
  return a(s, "_accept"),
    a(function(d) {
      if (t.has(d))
        return !0;
      if (r.has(d))
        return !1;
      var u = d.match(E_);
      if (!u)
        return i(d);
      var f = {
        major: +u[1],
        minor: +u[2],
        patch: +u[3],
        prerelease: u[4]
      };
      return f.prerelease != null || o.major !== f.major ? i(d) : o.major === 0 ? o.minor === f.minor && o.patch <= f.patch ? s(d) : i(d) : o.minor <= f.minor ? s(d) : i(d)
    }, "isCompatible")
}
var E_, T_, v_ = H(() => {
  c();
  Al();
  E_ = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
  a(T3, "_makeCompatibilityCheck");
  T_ = T3(Tr)
}
);
function Qt(e, t, r, n) {
  var o;
  n === void 0 && (n = !1);
  var i = Yo[Go] = (o = Yo[Go]) !== null && o !== void 0 ? o : {
    version: Tr
  };
  if (!n && i[e]) {
    var s = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + e);
    return r.error(s.stack || s.message),
      !1
  }
  if (i.version !== Tr) {
    var s = new Error("@opentelemetry/api: Registration of version v" + i.version + " for " + e + " does not match previously registered API v" + Tr);
    return r.error(s.stack || s.message),
      !1
  }
  return i[e] = t,
    r.debug("@opentelemetry/api: Registered a global for " + e + " v" + Tr + "."),
    !0
}
function xt(e) {
  var t, r, n = (t = Yo[Go]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !T_(n)))
    return (r = Yo[Go]) === null || r === void 0 ? void 0 : r[e]
}
function Jt(e, t) {
  t.debug("@opentelemetry/api: Unregistering a global for " + e + " v" + Tr + ".");
  var r = Yo[Go];
  r && delete r[e]
}
var v3, Go, Yo, ln = H(() => {
  c();
  g_();
  Al();
  v_();
  v3 = Tr.split(".")[0],
    Go = Symbol.for("opentelemetry.js.api." + v3),
    Yo = __;
  a(Qt, "registerGlobal");
  a(xt, "getGlobal");
  a(Jt, "unregisterGlobal")
}
);
function jo(e, t, r) {
  var n = xt("diag");
  if (n)
    return r.unshift(t),
      n[e].apply(n, y3([], S3(r), !1))
}
var S3, y3, S_, y_ = H(() => {
  c();
  ln();
  S3 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
    ,
    y3 = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
          (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
      return e.concat(i || Array.prototype.slice.call(t))
    }
    ,
    S_ = function() {
      function e(t) {
        this._namespace = t.namespace || "DiagComponentLogger"
      }
      return a(e, "DiagComponentLogger"),
        e.prototype.debug = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return jo("debug", this._namespace, t)
        }
        ,
        e.prototype.error = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return jo("error", this._namespace, t)
        }
        ,
        e.prototype.info = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return jo("info", this._namespace, t)
        }
        ,
        e.prototype.warn = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return jo("warn", this._namespace, t)
        }
        ,
        e.prototype.verbose = function() {
          for (var t = [], r = 0; r < arguments.length; r++)
            t[r] = arguments[r];
          return jo("verbose", this._namespace, t)
        }
        ,
        e
    }();
  a(jo, "logProxy")
}
);
var Le, ma = H(() => {
  c();
  (function(e) {
    e[e.NONE = 0] = "NONE",
      e[e.ERROR = 30] = "ERROR",
      e[e.WARN = 50] = "WARN",
      e[e.INFO = 60] = "INFO",
      e[e.DEBUG = 70] = "DEBUG",
      e[e.VERBOSE = 80] = "VERBOSE",
      e[e.ALL = 9999] = "ALL"
  }
  )(Le || (Le = {}))
}
);
function A_(e, t) {
  e < Le.NONE ? e = Le.NONE : e > Le.ALL && (e = Le.ALL),
    t = t || {};
  function r(n, o) {
    var i = t[n];
    return typeof i == "function" && e >= o ? i.bind(t) : function() { }
  }
  return a(r, "_filterFunc"),
  {
    error: r("error", Le.ERROR),
    warn: r("warn", Le.WARN),
    info: r("info", Le.INFO),
    debug: r("debug", Le.DEBUG),
    verbose: r("verbose", Le.VERBOSE)
  }
}
var b_ = H(() => {
  c();
  ma();
  a(A_, "createLogLevelDiagLogger")
}
);
var A3, b3, x3, tt, cn = H(() => {
  c();
  y_();
  b_();
  ma();
  ln();
  A3 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
    ,
    b3 = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
          (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
      return e.concat(i || Array.prototype.slice.call(t))
    }
    ,
    x3 = "diag",
    tt = function() {
      function e() {
        function t(o) {
          return function() {
            for (var i = [], s = 0; s < arguments.length; s++)
              i[s] = arguments[s];
            var l = xt("diag");
            if (l)
              return l[o].apply(l, b3([], A3(i), !1))
          }
        }
        a(t, "_logProxy");
        var r = this
          , n = a(function(o, i) {
            var s, l, d;
            if (i === void 0 && (i = {
              logLevel: Le.INFO
            }),
              o === r) {
              var u = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
              return r.error((s = u.stack) !== null && s !== void 0 ? s : u.message),
                !1
            }
            typeof i == "number" && (i = {
              logLevel: i
            });
            var f = xt("diag")
              , p = A_((l = i.logLevel) !== null && l !== void 0 ? l : Le.INFO, o);
            if (f && !i.suppressOverrideMessage) {
              var _ = (d = new Error().stack) !== null && d !== void 0 ? d : "<failed to generate stacktrace>";
              f.warn("Current logger will be overwritten from " + _),
                p.warn("Current logger will overwrite one already registered from " + _)
            }
            return Qt("diag", p, r, !0)
          }, "setLogger");
        r.setLogger = n,
          r.disable = function() {
            Jt(x3, r)
          }
          ,
          r.createComponentLogger = function(o) {
            return new S_(o)
          }
          ,
          r.verbose = t("verbose"),
          r.debug = t("debug"),
          r.info = t("info"),
          r.warn = t("warn"),
          r.error = t("error")
      }
      return a(e, "DiagAPI"),
        e.instance = function() {
          return this._instance || (this._instance = new e),
            this._instance
        }
        ,
        e
    }()
}
);
var C3, R3, x_, C_ = H(() => {
  c();
  C3 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
    ,
    R3 = function(e) {
      var t = typeof Symbol == "function" && Symbol.iterator
        , r = t && e[t]
        , n = 0;
      if (r)
        return r.call(e);
      if (e && typeof e.length == "number")
        return {
          next: a(function() {
            return e && n >= e.length && (e = void 0),
            {
              value: e && e[n++],
              done: !e
            }
          }, "next")
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    ,
    x_ = function() {
      function e(t) {
        this._entries = t ? new Map(t) : new Map
      }
      return a(e, "BaggageImpl"),
        e.prototype.getEntry = function(t) {
          var r = this._entries.get(t);
          if (r)
            return Object.assign({}, r)
        }
        ,
        e.prototype.getAllEntries = function() {
          return Array.from(this._entries.entries()).map(function(t) {
            var r = C3(t, 2)
              , n = r[0]
              , o = r[1];
            return [n, o]
          })
        }
        ,
        e.prototype.setEntry = function(t, r) {
          var n = new e(this._entries);
          return n._entries.set(t, r),
            n
        }
        ,
        e.prototype.removeEntry = function(t) {
          var r = new e(this._entries);
          return r._entries.delete(t),
            r
        }
        ,
        e.prototype.removeEntries = function() {
          for (var t, r, n = [], o = 0; o < arguments.length; o++)
            n[o] = arguments[o];
          var i = new e(this._entries);
          try {
            for (var s = R3(n), l = s.next(); !l.done; l = s.next()) {
              var d = l.value;
              i._entries.delete(d)
            }
          } catch (u) {
            t = {
              error: u
            }
          } finally {
            try {
              l && !l.done && (r = s.return) && r.call(s)
            } finally {
              if (t)
                throw t.error
            }
          }
          return i
        }
        ,
        e.prototype.clear = function() {
          return new e
        }
        ,
        e
    }()
}
);
var R_, O_ = H(() => {
  c();
  R_ = Symbol("BaggageEntryMetadata")
}
);
function P_(e) {
  return e === void 0 && (e = {}),
    new x_(new Map(Object.entries(e)))
}
function N_(e) {
  return typeof e != "string" && (O3.error("Cannot create baggage metadata from unknown type: " + typeof e),
    e = ""),
  {
    __TYPE__: R_,
    toString: a(function() {
      return e
    }, "toString")
  }
}
var O3, bl = H(() => {
  c();
  cn();
  C_();
  O_();
  O3 = tt.instance();
  a(P_, "createBaggage");
  a(N_, "baggageEntryMetadataFromString")
}
);
function zn(e) {
  return Symbol.for(e)
}
var P3, er, zo = H(() => {
  c();
  a(zn, "createContextKey");
  P3 = function() {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : new Map,
        r.getValue = function(n) {
          return r._currentContext.get(n)
        }
        ,
        r.setValue = function(n, o) {
          var i = new e(r._currentContext);
          return i._currentContext.set(n, o),
            i
        }
        ,
        r.deleteValue = function(n) {
          var o = new e(r._currentContext);
          return o._currentContext.delete(n),
            o
        }
    }
    return a(e, "BaseContext"),
      e
  }(),
    er = new P3
}
);
var xl, _a, w_ = H(() => {
  c();
  xl = [{
    n: "error",
    c: "error"
  }, {
    n: "warn",
    c: "warn"
  }, {
    n: "info",
    c: "info"
  }, {
    n: "debug",
    c: "debug"
  }, {
    n: "verbose",
    c: "trace"
  }],
    _a = function() {
      function e() {
        function t(n) {
          return function() {
            for (var o = [], i = 0; i < arguments.length; i++)
              o[i] = arguments[i];
            if (console) {
              var s = console[n];
              if (typeof s != "function" && (s = console.log),
                typeof s == "function")
                return s.apply(console, o)
            }
          }
        }
        a(t, "_consoleFunc");
        for (var r = 0; r < xl.length; r++)
          this[xl[r].n] = t(xl[r].c)
      }
      return a(e, "DiagConsoleLogger"),
        e
    }()
}
);
function ga() {
  return Rl
}
var dn, N3, ha, w3, I3, M3, L3, Cl, $3, D3, U3, Rl, F3, B3, V3, k3, H3, G3, Y3, Ol = H(() => {
  c();
  dn = function() {
    var e = a(function(t, r) {
      return e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(n, o) {
        n.__proto__ = o
      }
        || function(n, o) {
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
        }
        ,
        e(t, r)
    }, "extendStatics");
    return function(t, r) {
      if (typeof r != "function" && r !== null)
        throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      e(t, r);
      function n() {
        this.constructor = t
      }
      a(n, "__"),
        t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
          new n)
    }
  }(),
    N3 = function() {
      function e() { }
      return a(e, "NoopMeter"),
        e.prototype.createGauge = function(t, r) {
          return B3
        }
        ,
        e.prototype.createHistogram = function(t, r) {
          return V3
        }
        ,
        e.prototype.createCounter = function(t, r) {
          return F3
        }
        ,
        e.prototype.createUpDownCounter = function(t, r) {
          return k3
        }
        ,
        e.prototype.createObservableGauge = function(t, r) {
          return G3
        }
        ,
        e.prototype.createObservableCounter = function(t, r) {
          return H3
        }
        ,
        e.prototype.createObservableUpDownCounter = function(t, r) {
          return Y3
        }
        ,
        e.prototype.addBatchObservableCallback = function(t, r) { }
        ,
        e.prototype.removeBatchObservableCallback = function(t) { }
        ,
        e
    }(),
    ha = function() {
      function e() { }
      return a(e, "NoopMetric"),
        e
    }(),
    w3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopCounterMetric"),
        t.prototype.add = function(r, n) { }
        ,
        t
    }(ha),
    I3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopUpDownCounterMetric"),
        t.prototype.add = function(r, n) { }
        ,
        t
    }(ha),
    M3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopGaugeMetric"),
        t.prototype.record = function(r, n) { }
        ,
        t
    }(ha),
    L3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopHistogramMetric"),
        t.prototype.record = function(r, n) { }
        ,
        t
    }(ha),
    Cl = function() {
      function e() { }
      return a(e, "NoopObservableMetric"),
        e.prototype.addCallback = function(t) { }
        ,
        e.prototype.removeCallback = function(t) { }
        ,
        e
    }(),
    $3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopObservableCounterMetric"),
        t
    }(Cl),
    D3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopObservableGaugeMetric"),
        t
    }(Cl),
    U3 = function(e) {
      dn(t, e);
      function t() {
        return e !== null && e.apply(this, arguments) || this
      }
      return a(t, "NoopObservableUpDownCounterMetric"),
        t
    }(Cl),
    Rl = new N3,
    F3 = new w3,
    B3 = new M3,
    V3 = new L3,
    k3 = new I3,
    H3 = new $3,
    G3 = new D3,
    Y3 = new U3;
  a(ga, "createNoopMeter")
}
);
var Fe, I_ = H(() => {
  c();
  (function(e) {
    e[e.INT = 0] = "INT",
      e[e.DOUBLE = 1] = "DOUBLE"
  }
  )(Fe || (Fe = {}))
}
);
var Ea, Ta, Pl = H(() => {
  c();
  Ea = {
    get: a(function(e, t) {
      if (e != null)
        return e[t]
    }, "get"),
    keys: a(function(e) {
      return e == null ? [] : Object.keys(e)
    }, "keys")
  },
    Ta = {
      set: a(function(e, t, r) {
        e != null && (e[t] = r)
      }, "set")
    }
}
);
var j3, z3, M_, L_ = H(() => {
  c();
  zo();
  j3 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
    ,
    z3 = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
          (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
      return e.concat(i || Array.prototype.slice.call(t))
    }
    ,
    M_ = function() {
      function e() { }
      return a(e, "NoopContextManager"),
        e.prototype.active = function() {
          return er
        }
        ,
        e.prototype.with = function(t, r, n) {
          for (var o = [], i = 3; i < arguments.length; i++)
            o[i - 3] = arguments[i];
          return r.call.apply(r, z3([n], j3(o), !1))
        }
        ,
        e.prototype.bind = function(t, r) {
          return r
        }
        ,
        e.prototype.enable = function() {
          return this
        }
        ,
        e.prototype.disable = function() {
          return this
        }
        ,
        e
    }()
}
);
var W3, K3, Nl, X3, Ir, Wo = H(() => {
  c();
  L_();
  ln();
  cn();
  W3 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
    ,
    K3 = function(e, t, r) {
      if (r || arguments.length === 2)
        for (var n = 0, o = t.length, i; n < o; n++)
          (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
            i[n] = t[n]);
      return e.concat(i || Array.prototype.slice.call(t))
    }
    ,
    Nl = "context",
    X3 = new M_,
    Ir = function() {
      function e() { }
      return a(e, "ContextAPI"),
        e.getInstance = function() {
          return this._instance || (this._instance = new e),
            this._instance
        }
        ,
        e.prototype.setGlobalContextManager = function(t) {
          return Qt(Nl, t, tt.instance())
        }
        ,
        e.prototype.active = function() {
          return this._getContextManager().active()
        }
        ,
        e.prototype.with = function(t, r, n) {
          for (var o, i = [], s = 3; s < arguments.length; s++)
            i[s - 3] = arguments[s];
          return (o = this._getContextManager()).with.apply(o, K3([t, r, n], W3(i), !1))
        }
        ,
        e.prototype.bind = function(t, r) {
          return this._getContextManager().bind(t, r)
        }
        ,
        e.prototype._getContextManager = function() {
          return xt(Nl) || X3
        }
        ,
        e.prototype.disable = function() {
          this._getContextManager().disable(),
            Jt(Nl, tt.instance())
        }
        ,
        e
    }()
}
);
var rt, wl = H(() => {
  c();
  (function(e) {
    e[e.NONE = 0] = "NONE",
      e[e.SAMPLED = 1] = "SAMPLED"
  }
  )(rt || (rt = {}))
}
);
var Ko, Xo, Wn, va = H(() => {
  c();
  wl();
  Ko = "0000000000000000",
    Xo = "00000000000000000000000000000000",
    Wn = {
      traceId: Xo,
      spanId: Ko,
      traceFlags: rt.NONE
    }
}
);
var Mr, Sa = H(() => {
  c();
  va();
  Mr = function() {
    function e(t) {
      t === void 0 && (t = Wn),
        this._spanContext = t
    }
    return a(e, "NonRecordingSpan"),
      e.prototype.spanContext = function() {
        return this._spanContext
      }
      ,
      e.prototype.setAttribute = function(t, r) {
        return this
      }
      ,
      e.prototype.setAttributes = function(t) {
        return this
      }
      ,
      e.prototype.addEvent = function(t, r) {
        return this
      }
      ,
      e.prototype.addLink = function(t) {
        return this
      }
      ,
      e.prototype.addLinks = function(t) {
        return this
      }
      ,
      e.prototype.setStatus = function(t) {
        return this
      }
      ,
      e.prototype.updateName = function(t) {
        return this
      }
      ,
      e.prototype.end = function(t) { }
      ,
      e.prototype.isRecording = function() {
        return !1
      }
      ,
      e.prototype.recordException = function(t, r) { }
      ,
      e
  }()
}
);
function ya(e) {
  return e.getValue(Il) || void 0
}
function $_() {
  return ya(Ir.getInstance().active())
}
function qo(e, t) {
  return e.setValue(Il, t)
}
function D_(e) {
  return e.deleteValue(Il)
}
function U_(e, t) {
  return qo(e, new Mr(t))
}
function Aa(e) {
  var t;
  return (t = ya(e)) === null || t === void 0 ? void 0 : t.spanContext()
}
var Il, Ml = H(() => {
  c();
  zo();
  Sa();
  Wo();
  Il = zn("OpenTelemetry Context Key SPAN");
  a(ya, "getSpan");
  a($_, "getActiveSpan");
  a(qo, "setSpan");
  a(D_, "deleteSpan");
  a(U_, "setSpanContext");
  a(Aa, "getSpanContext")
}
);
function Zo(e) {
  return q3.test(e) && e !== Xo
}
function Ll(e) {
  return Z3.test(e) && e !== Ko
}
function tr(e) {
  return Zo(e.traceId) && Ll(e.spanId)
}
function F_(e) {
  return new Mr(e)
}
var q3, Z3, ba = H(() => {
  c();
  va();
  Sa();
  q3 = /^([0-9a-f]{32})$/i,
    Z3 = /^[0-9a-f]{16}$/i;
  a(Zo, "isValidTraceId");
  a(Ll, "isValidSpanId");
  a(tr, "isSpanContextValid");
  a(F_, "wrapSpanContext")
}
);
function Q3(e) {
  return typeof e == "object" && typeof e.spanId == "string" && typeof e.traceId == "string" && typeof e.traceFlags == "number"
}
var $l, xa, Dl = H(() => {
  c();
  Wo();
  Ml();
  Sa();
  ba();
  $l = Ir.getInstance(),
    xa = function() {
      function e() { }
      return a(e, "NoopTracer"),
        e.prototype.startSpan = function(t, r, n) {
          n === void 0 && (n = $l.active());
          var o = !!(r != null && r.root);
          if (o)
            return new Mr;
          var i = n && Aa(n);
          return Q3(i) && tr(i) ? new Mr(i) : new Mr
        }
        ,
        e.prototype.startActiveSpan = function(t, r, n, o) {
          var i, s, l;
          if (!(arguments.length < 2)) {
            arguments.length === 2 ? l = r : arguments.length === 3 ? (i = r,
              l = n) : (i = r,
                s = n,
                l = o);
            var d = s != null ? s : $l.active()
              , u = this.startSpan(t, i, d)
              , f = qo(d, u);
            return $l.with(f, l, void 0, u)
          }
        }
        ,
        e
    }();
  a(Q3, "isSpanContext")
}
);
var J3, Ca, Ul = H(() => {
  c();
  Dl();
  J3 = new xa,
    Ca = function() {
      function e(t, r, n, o) {
        this._provider = t,
          this.name = r,
          this.version = n,
          this.options = o
      }
      return a(e, "ProxyTracer"),
        e.prototype.startSpan = function(t, r, n) {
          return this._getTracer().startSpan(t, r, n)
        }
        ,
        e.prototype.startActiveSpan = function(t, r, n, o) {
          var i = this._getTracer();
          return Reflect.apply(i.startActiveSpan, i, arguments)
        }
        ,
        e.prototype._getTracer = function() {
          if (this._delegate)
            return this._delegate;
          var t = this._provider.getDelegateTracer(this.name, this.version, this.options);
          return t ? (this._delegate = t,
            this._delegate) : J3
        }
        ,
        e
    }()
}
);
var B_, V_ = H(() => {
  c();
  Dl();
  B_ = function() {
    function e() { }
    return a(e, "NoopTracerProvider"),
      e.prototype.getTracer = function(t, r, n) {
        return new xa
      }
      ,
      e
  }()
}
);
var eP, Qo, Fl = H(() => {
  c();
  Ul();
  V_();
  eP = new B_,
    Qo = function() {
      function e() { }
      return a(e, "ProxyTracerProvider"),
        e.prototype.getTracer = function(t, r, n) {
          var o;
          return (o = this.getDelegateTracer(t, r, n)) !== null && o !== void 0 ? o : new Ca(this, t, r, n)
        }
        ,
        e.prototype.getDelegate = function() {
          var t;
          return (t = this._delegate) !== null && t !== void 0 ? t : eP
        }
        ,
        e.prototype.setDelegate = function(t) {
          this._delegate = t
        }
        ,
        e.prototype.getDelegateTracer = function(t, r, n) {
          var o;
          return (o = this._delegate) === null || o === void 0 ? void 0 : o.getTracer(t, r, n)
        }
        ,
        e
    }()
}
);
var fn, k_ = H(() => {
  c();
  (function(e) {
    e[e.NOT_RECORD = 0] = "NOT_RECORD",
      e[e.RECORD = 1] = "RECORD",
      e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
  }
  )(fn || (fn = {}))
}
);
var Lr, H_ = H(() => {
  c();
  (function(e) {
    e[e.INTERNAL = 0] = "INTERNAL",
      e[e.SERVER = 1] = "SERVER",
      e[e.CLIENT = 2] = "CLIENT",
      e[e.PRODUCER = 3] = "PRODUCER",
      e[e.CONSUMER = 4] = "CONSUMER"
  }
  )(Lr || (Lr = {}))
}
);
var Kn, G_ = H(() => {
  c();
  (function(e) {
    e[e.UNSET = 0] = "UNSET",
      e[e.OK = 1] = "OK",
      e[e.ERROR = 2] = "ERROR"
  }
  )(Kn || (Kn = {}))
}
);
function Y_(e) {
  return nP.test(e)
}
function j_(e) {
  return oP.test(e) && !iP.test(e)
}
var Bl, tP, rP, nP, oP, iP, z_ = H(() => {
  c();
  Bl = "[_0-9a-z-*/]",
    tP = "[a-z]" + Bl + "{0,255}",
    rP = "[a-z0-9]" + Bl + "{0,240}@[a-z]" + Bl + "{0,13}",
    nP = new RegExp("^(?:" + tP + "|" + rP + ")$"),
    oP = /^[ -~]{0,255}[!-~]$/,
    iP = /,|=/;
  a(Y_, "validateKey");
  a(j_, "validateValue")
}
);
var W_, aP, K_, X_, q_, Z_ = H(() => {
  c();
  z_();
  W_ = 32,
    aP = 512,
    K_ = ",",
    X_ = "=",
    q_ = function() {
      function e(t) {
        this._internalState = new Map,
          t && this._parse(t)
      }
      return a(e, "TraceStateImpl"),
        e.prototype.set = function(t, r) {
          var n = this._clone();
          return n._internalState.has(t) && n._internalState.delete(t),
            n._internalState.set(t, r),
            n
        }
        ,
        e.prototype.unset = function(t) {
          var r = this._clone();
          return r._internalState.delete(t),
            r
        }
        ,
        e.prototype.get = function(t) {
          return this._internalState.get(t)
        }
        ,
        e.prototype.serialize = function() {
          var t = this;
          return this._keys().reduce(function(r, n) {
            return r.push(n + X_ + t.get(n)),
              r
          }, []).join(K_)
        }
        ,
        e.prototype._parse = function(t) {
          t.length > aP || (this._internalState = t.split(K_).reverse().reduce(function(r, n) {
            var o = n.trim()
              , i = o.indexOf(X_);
            if (i !== -1) {
              var s = o.slice(0, i)
                , l = o.slice(i + 1, n.length);
              Y_(s) && j_(l) && r.set(s, l)
            }
            return r
          }, new Map),
            this._internalState.size > W_ && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, W_))))
        }
        ,
        e.prototype._keys = function() {
          return Array.from(this._internalState.keys()).reverse()
        }
        ,
        e.prototype._clone = function() {
          var t = new e;
          return t._internalState = new Map(this._internalState),
            t
        }
        ,
        e
    }()
}
);
function Q_(e) {
  return new q_(e)
}
var J_ = H(() => {
  c();
  Z_();
  a(Q_, "createTraceState")
}
);
var ve, eh = H(() => {
  c();
  Wo();
  ve = Ir.getInstance()
}
);
var C, th = H(() => {
  c();
  cn();
  C = tt.instance()
}
);
var sP, rh, nh = H(() => {
  c();
  Ol();
  sP = function() {
    function e() { }
    return a(e, "NoopMeterProvider"),
      e.prototype.getMeter = function(t, r, n) {
        return Rl
      }
      ,
      e
  }(),
    rh = new sP
}
);
var Vl, oh, ih = H(() => {
  c();
  nh();
  ln();
  cn();
  Vl = "metrics",
    oh = function() {
      function e() { }
      return a(e, "MetricsAPI"),
        e.getInstance = function() {
          return this._instance || (this._instance = new e),
            this._instance
        }
        ,
        e.prototype.setGlobalMeterProvider = function(t) {
          return Qt(Vl, t, tt.instance())
        }
        ,
        e.prototype.getMeterProvider = function() {
          return xt(Vl) || rh
        }
        ,
        e.prototype.getMeter = function(t, r, n) {
          return this.getMeterProvider().getMeter(t, r, n)
        }
        ,
        e.prototype.disable = function() {
          Jt(Vl, tt.instance())
        }
        ,
        e
    }()
}
);
var Jo, ah = H(() => {
  c();
  ih();
  Jo = oh.getInstance()
}
);
var sh, uh = H(() => {
  c();
  sh = function() {
    function e() { }
    return a(e, "NoopTextMapPropagator"),
      e.prototype.inject = function(t, r) { }
      ,
      e.prototype.extract = function(t, r) {
        return t
      }
      ,
      e.prototype.fields = function() {
        return []
      }
      ,
      e
  }()
}
);
function Hl(e) {
  return e.getValue(kl) || void 0
}
function lh() {
  return Hl(Ir.getInstance().active())
}
function ch(e, t) {
  return e.setValue(kl, t)
}
function dh(e) {
  return e.deleteValue(kl)
}
var kl, fh = H(() => {
  c();
  Wo();
  zo();
  kl = zn("OpenTelemetry Baggage Key");
  a(Hl, "getBaggage");
  a(lh, "getActiveBaggage");
  a(ch, "setBaggage");
  a(dh, "deleteBaggage")
}
);
var Gl, uP, ph, mh = H(() => {
  c();
  ln();
  uh();
  Pl();
  fh();
  bl();
  cn();
  Gl = "propagation",
    uP = new sh,
    ph = function() {
      function e() {
        this.createBaggage = P_,
          this.getBaggage = Hl,
          this.getActiveBaggage = lh,
          this.setBaggage = ch,
          this.deleteBaggage = dh
      }
      return a(e, "PropagationAPI"),
        e.getInstance = function() {
          return this._instance || (this._instance = new e),
            this._instance
        }
        ,
        e.prototype.setGlobalPropagator = function(t) {
          return Qt(Gl, t, tt.instance())
        }
        ,
        e.prototype.inject = function(t, r, n) {
          return n === void 0 && (n = Ta),
            this._getGlobalPropagator().inject(t, r, n)
        }
        ,
        e.prototype.extract = function(t, r, n) {
          return n === void 0 && (n = Ea),
            this._getGlobalPropagator().extract(t, r, n)
        }
        ,
        e.prototype.fields = function() {
          return this._getGlobalPropagator().fields()
        }
        ,
        e.prototype.disable = function() {
          Jt(Gl, tt.instance())
        }
        ,
        e.prototype._getGlobalPropagator = function() {
          return xt(Gl) || uP
        }
        ,
        e
    }()
}
);
var Gt, _h = H(() => {
  c();
  mh();
  Gt = ph.getInstance()
}
);
var Yl, hh, gh = H(() => {
  c();
  ln();
  Fl();
  ba();
  Ml();
  cn();
  Yl = "trace",
    hh = function() {
      function e() {
        this._proxyTracerProvider = new Qo,
          this.wrapSpanContext = F_,
          this.isSpanContextValid = tr,
          this.deleteSpan = D_,
          this.getSpan = ya,
          this.getActiveSpan = $_,
          this.getSpanContext = Aa,
          this.setSpan = qo,
          this.setSpanContext = U_
      }
      return a(e, "TraceAPI"),
        e.getInstance = function() {
          return this._instance || (this._instance = new e),
            this._instance
        }
        ,
        e.prototype.setGlobalTracerProvider = function(t) {
          var r = Qt(Yl, this._proxyTracerProvider, tt.instance());
          return r && this._proxyTracerProvider.setDelegate(t),
            r
        }
        ,
        e.prototype.getTracerProvider = function() {
          return xt(Yl) || this._proxyTracerProvider
        }
        ,
        e.prototype.getTracer = function(t, r) {
          return this.getTracerProvider().getTracer(t, r)
        }
        ,
        e.prototype.disable = function() {
          Jt(Yl, tt.instance()),
            this._proxyTracerProvider = new Qo
        }
        ,
        e
    }()
}
);
var Pe, Eh = H(() => {
  c();
  gh();
  Pe = hh.getInstance()
}
);
var Ae = {};
om(Ae, {
  DiagConsoleLogger: () => _a,
  DiagLogLevel: () => Le,
  INVALID_SPANID: () => Ko,
  INVALID_SPAN_CONTEXT: () => Wn,
  INVALID_TRACEID: () => Xo,
  ProxyTracer: () => Ca,
  ProxyTracerProvider: () => Qo,
  ROOT_CONTEXT: () => er,
  SamplingDecision: () => fn,
  SpanKind: () => Lr,
  SpanStatusCode: () => Kn,
  TraceFlags: () => rt,
  ValueType: () => Fe,
  baggageEntryMetadataFromString: () => N_,
  context: () => ve,
  createContextKey: () => zn,
  createNoopMeter: () => ga,
  createTraceState: () => Q_,
  default: () => lP,
  defaultTextMapGetter: () => Ea,
  defaultTextMapSetter: () => Ta,
  diag: () => C,
  isSpanContextValid: () => tr,
  isValidSpanId: () => Ll,
  isValidTraceId: () => Zo,
  metrics: () => Jo,
  propagation: () => Gt,
  trace: () => Pe
});
var lP, G = H(() => {
  c();
  bl();
  zo();
  w_();
  ma();
  Ol();
  I_();
  Pl();
  Ul();
  Fl();
  k_();
  H_();
  G_();
  wl();
  J_();
  ba();
  va();
  eh();
  th();
  ah();
  _h();
  Eh();
  lP = {
    context: ve,
    diag: C,
    metrics: Jo,
    propagation: Gt,
    trace: Pe
  }
}
);
var ri = W(Dr => {
  "use strict";
  c();
  Object.defineProperty(Dr, "__esModule", {
    value: !0
  });
  Dr.isTracingSuppressed = Dr.unsuppressTracing = Dr.suppressTracing = void 0;
  var RP = (G(),
    He(Ae))
    , ec = (0,
      RP.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
  function OP(e) {
    return e.setValue(ec, !0)
  }
  a(OP, "suppressTracing");
  Dr.suppressTracing = OP;
  function PP(e) {
    return e.deleteValue(ec)
  }
  a(PP, "unsuppressTracing");
  Dr.unsuppressTracing = PP;
  function NP(e) {
    return e.getValue(ec) === !0
  }
  a(NP, "isTracingSuppressed");
  Dr.isTracingSuppressed = NP
}
);
var tc = W(ot => {
  "use strict";
  c();
  Object.defineProperty(ot, "__esModule", {
    value: !0
  });
  ot.BAGGAGE_MAX_TOTAL_LENGTH = ot.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = ot.BAGGAGE_MAX_NAME_VALUE_PAIRS = ot.BAGGAGE_HEADER = ot.BAGGAGE_ITEMS_SEPARATOR = ot.BAGGAGE_PROPERTIES_SEPARATOR = ot.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
  ot.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
  ot.BAGGAGE_PROPERTIES_SEPARATOR = ";";
  ot.BAGGAGE_ITEMS_SEPARATOR = ",";
  ot.BAGGAGE_HEADER = "baggage";
  ot.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
  ot.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
  ot.BAGGAGE_MAX_TOTAL_LENGTH = 8192
}
);
var rc = W(nr => {
  "use strict";
  c();
  Object.defineProperty(nr, "__esModule", {
    value: !0
  });
  nr.parseKeyPairsIntoRecord = nr.parsePairKeyValue = nr.getKeyPairs = nr.serializeKeyPairs = void 0;
  var wP = (G(),
    He(Ae))
    , pn = tc();
  function IP(e) {
    return e.reduce((t, r) => {
      let n = `${t}${t !== "" ? pn.BAGGAGE_ITEMS_SEPARATOR : ""}${r}`;
      return n.length > pn.BAGGAGE_MAX_TOTAL_LENGTH ? t : n
    }
      , "")
  }
  a(IP, "serializeKeyPairs");
  nr.serializeKeyPairs = IP;
  function MP(e) {
    return e.getAllEntries().map(([t, r]) => {
      let n = `${encodeURIComponent(t)}=${encodeURIComponent(r.value)}`;
      return r.metadata !== void 0 && (n += pn.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString()),
        n
    }
    )
  }
  a(MP, "getKeyPairs");
  nr.getKeyPairs = MP;
  function Bh(e) {
    let t = e.split(pn.BAGGAGE_PROPERTIES_SEPARATOR);
    if (t.length <= 0)
      return;
    let r = t.shift();
    if (!r)
      return;
    let n = r.indexOf(pn.BAGGAGE_KEY_PAIR_SEPARATOR);
    if (n <= 0)
      return;
    let o = decodeURIComponent(r.substring(0, n).trim()), i = decodeURIComponent(r.substring(n + 1).trim()), s;
    return t.length > 0 && (s = (0,
      wP.baggageEntryMetadataFromString)(t.join(pn.BAGGAGE_PROPERTIES_SEPARATOR))),
    {
      key: o,
      value: i,
      metadata: s
    }
  }
  a(Bh, "parsePairKeyValue");
  nr.parsePairKeyValue = Bh;
  function LP(e) {
    return typeof e != "string" || e.length === 0 ? {} : e.split(pn.BAGGAGE_ITEMS_SEPARATOR).map(t => Bh(t)).filter(t => t !== void 0 && t.value.length > 0).reduce((t, r) => (t[r.key] = r.value,
      t), {})
  }
  a(LP, "parseKeyPairsIntoRecord");
  nr.parseKeyPairsIntoRecord = LP
}
);
var Vh = W($a => {
  "use strict";
  c();
  Object.defineProperty($a, "__esModule", {
    value: !0
  });
  $a.W3CBaggagePropagator = void 0;
  var nc = (G(),
    He(Ae))
    , $P = ri()
    , mn = tc()
    , oc = rc()
    , ac = class ac {
      inject(t, r, n) {
        let o = nc.propagation.getBaggage(t);
        if (!o || (0,
          $P.isTracingSuppressed)(t))
          return;
        let i = (0,
          oc.getKeyPairs)(o).filter(l => l.length <= mn.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, mn.BAGGAGE_MAX_NAME_VALUE_PAIRS)
          , s = (0,
            oc.serializeKeyPairs)(i);
        s.length > 0 && n.set(r, mn.BAGGAGE_HEADER, s)
      }
      extract(t, r, n) {
        let o = n.get(r, mn.BAGGAGE_HEADER)
          , i = Array.isArray(o) ? o.join(mn.BAGGAGE_ITEMS_SEPARATOR) : o;
        if (!i)
          return t;
        let s = {};
        return i.length === 0 || (i.split(mn.BAGGAGE_ITEMS_SEPARATOR).forEach(d => {
          let u = (0,
            oc.parsePairKeyValue)(d);
          if (u) {
            let f = {
              value: u.value
            };
            u.metadata && (f.metadata = u.metadata),
              s[u.key] = f
          }
        }
        ),
          Object.entries(s).length === 0) ? t : nc.propagation.setBaggage(t, nc.propagation.createBaggage(s))
      }
      fields() {
        return [mn.BAGGAGE_HEADER]
      }
    }
    ;
  a(ac, "W3CBaggagePropagator");
  var ic = ac;
  $a.W3CBaggagePropagator = ic
}
);
var kh = W(Da => {
  "use strict";
  c();
  Object.defineProperty(Da, "__esModule", {
    value: !0
  });
  Da.AnchoredClock = void 0;
  var uc = class uc {
    constructor(t, r) {
      this._monotonicClock = r,
        this._epochMillis = t.now(),
        this._performanceMillis = r.now()
    }
    now() {
      let t = this._monotonicClock.now() - this._performanceMillis;
      return this._epochMillis + t
    }
  }
    ;
  a(uc, "AnchoredClock");
  var sc = uc;
  Da.AnchoredClock = sc
}
);
var zh = W(Ur => {
  "use strict";
  c();
  Object.defineProperty(Ur, "__esModule", {
    value: !0
  });
  Ur.isAttributeValue = Ur.isAttributeKey = Ur.sanitizeAttributes = void 0;
  var Hh = (G(),
    He(Ae));
  function DP(e) {
    let t = {};
    if (typeof e != "object" || e == null)
      return t;
    for (let [r, n] of Object.entries(e)) {
      if (!Gh(r)) {
        Hh.diag.warn(`Invalid attribute key: ${r}`);
        continue
      }
      if (!Yh(n)) {
        Hh.diag.warn(`Invalid attribute value set for key: ${r}`);
        continue
      }
      Array.isArray(n) ? t[r] = n.slice() : t[r] = n
    }
    return t
  }
  a(DP, "sanitizeAttributes");
  Ur.sanitizeAttributes = DP;
  function Gh(e) {
    return typeof e == "string" && e.length > 0
  }
  a(Gh, "isAttributeKey");
  Ur.isAttributeKey = Gh;
  function Yh(e) {
    return e == null ? !0 : Array.isArray(e) ? UP(e) : jh(e)
  }
  a(Yh, "isAttributeValue");
  Ur.isAttributeValue = Yh;
  function UP(e) {
    let t;
    for (let r of e)
      if (r != null) {
        if (!t) {
          if (jh(r)) {
            t = typeof r;
            continue
          }
          return !1
        }
        if (typeof r !== t)
          return !1
      }
    return !0
  }
  a(UP, "isHomogeneousAttributeValueArray");
  function jh(e) {
    switch (typeof e) {
      case "number":
      case "boolean":
      case "string":
        return !0
    }
    return !1
  }
  a(jh, "isValidPrimitiveAttributeValue")
}
);
var lc = W(Ua => {
  "use strict";
  c();
  Object.defineProperty(Ua, "__esModule", {
    value: !0
  });
  Ua.loggingErrorHandler = void 0;
  var FP = (G(),
    He(Ae));
  function BP() {
    return e => {
      FP.diag.error(VP(e))
    }
  }
  a(BP, "loggingErrorHandler");
  Ua.loggingErrorHandler = BP;
  function VP(e) {
    return typeof e == "string" ? e : JSON.stringify(kP(e))
  }
  a(VP, "stringifyException");
  function kP(e) {
    let t = {}
      , r = e;
    for (; r !== null;)
      Object.getOwnPropertyNames(r).forEach(n => {
        if (t[n])
          return;
        let o = r[n];
        o && (t[n] = String(o))
      }
      ),
        r = Object.getPrototypeOf(r);
    return t
  }
  a(kP, "flattenException")
}
);
var cc = W(qn => {
  "use strict";
  c();
  Object.defineProperty(qn, "__esModule", {
    value: !0
  });
  qn.globalErrorHandler = qn.setGlobalErrorHandler = void 0;
  var HP = lc()
    , Wh = (0,
      HP.loggingErrorHandler)();
  function GP(e) {
    Wh = e
  }
  a(GP, "setGlobalErrorHandler");
  qn.setGlobalErrorHandler = GP;
  function YP(e) {
    try {
      Wh(e)
    } catch (t) { }
  }
  a(YP, "globalErrorHandler");
  qn.globalErrorHandler = YP
}
);
var dc = W(ni => {
  "use strict";
  c();
  Object.defineProperty(ni, "__esModule", {
    value: !0
  });
  ni.TracesSamplerValues = void 0;
  var jP;
  (function(e) {
    e.AlwaysOff = "always_off",
      e.AlwaysOn = "always_on",
      e.ParentBasedAlwaysOff = "parentbased_always_off",
      e.ParentBasedAlwaysOn = "parentbased_always_on",
      e.ParentBasedTraceIdRatio = "parentbased_traceidratio",
      e.TraceIdRatio = "traceidratio"
  }
  )(jP = ni.TracesSamplerValues || (ni.TracesSamplerValues = {}))
}
);
var fc = W(be => {
  "use strict";
  c();
  Object.defineProperty(be, "__esModule", {
    value: !0
  });
  be.parseEnvironment = be.DEFAULT_ENVIRONMENT = be.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = be.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = be.DEFAULT_ATTRIBUTE_COUNT_LIMIT = be.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = void 0;
  var Fr = (G(),
    He(Ae))
    , zP = dc()
    , WP = ","
    , KP = ["OTEL_SDK_DISABLED"];
  function XP(e) {
    return KP.indexOf(e) > -1
  }
  a(XP, "isEnvVarABoolean");
  var qP = ["OTEL_BSP_EXPORT_TIMEOUT", "OTEL_BSP_MAX_EXPORT_BATCH_SIZE", "OTEL_BSP_MAX_QUEUE_SIZE", "OTEL_BSP_SCHEDULE_DELAY", "OTEL_BLRP_EXPORT_TIMEOUT", "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE", "OTEL_BLRP_MAX_QUEUE_SIZE", "OTEL_BLRP_SCHEDULE_DELAY", "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT", "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT", "OTEL_SPAN_EVENT_COUNT_LIMIT", "OTEL_SPAN_LINK_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", "OTEL_EXPORTER_OTLP_TIMEOUT", "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT", "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT", "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT", "OTEL_EXPORTER_JAEGER_AGENT_PORT"];
  function ZP(e) {
    return qP.indexOf(e) > -1
  }
  a(ZP, "isEnvVarANumber");
  var QP = ["OTEL_NO_PATCH_MODULES", "OTEL_PROPAGATORS", "OTEL_SEMCONV_STABILITY_OPT_IN"];
  function JP(e) {
    return QP.indexOf(e) > -1
  }
  a(JP, "isEnvVarAList");
  be.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
  be.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
  be.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
  be.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
  be.DEFAULT_ENVIRONMENT = {
    OTEL_SDK_DISABLED: !1,
    CONTAINER_NAME: "",
    ECS_CONTAINER_METADATA_URI_V4: "",
    ECS_CONTAINER_METADATA_URI: "",
    HOSTNAME: "",
    KUBERNETES_SERVICE_HOST: "",
    NAMESPACE: "",
    OTEL_BSP_EXPORT_TIMEOUT: 3e4,
    OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BSP_MAX_QUEUE_SIZE: 2048,
    OTEL_BSP_SCHEDULE_DELAY: 5e3,
    OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
    OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
    OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
    OTEL_BLRP_SCHEDULE_DELAY: 5e3,
    OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
    OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
    OTEL_EXPORTER_JAEGER_ENDPOINT: "",
    OTEL_EXPORTER_JAEGER_PASSWORD: "",
    OTEL_EXPORTER_JAEGER_USER: "",
    OTEL_EXPORTER_OTLP_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
    OTEL_EXPORTER_OTLP_HEADERS: "",
    OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
    OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
    OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
    OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
    OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
    OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
    OTEL_LOG_LEVEL: Fr.DiagLogLevel.INFO,
    OTEL_NO_PATCH_MODULES: [],
    OTEL_PROPAGATORS: ["tracecontext", "baggage"],
    OTEL_RESOURCE_ATTRIBUTES: "",
    OTEL_SERVICE_NAME: "",
    OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: be.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_ATTRIBUTE_COUNT_LIMIT: be.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: be.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: be.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: be.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: be.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
    OTEL_SPAN_LINK_COUNT_LIMIT: 128,
    OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: be.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
    OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: be.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
    OTEL_TRACES_EXPORTER: "",
    OTEL_TRACES_SAMPLER: zP.TracesSamplerValues.ParentBasedAlwaysOn,
    OTEL_TRACES_SAMPLER_ARG: "",
    OTEL_LOGS_EXPORTER: "",
    OTEL_EXPORTER_OTLP_INSECURE: "",
    OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
    OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
    OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
    OTEL_EXPORTER_OTLP_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
    OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative",
    OTEL_SEMCONV_STABILITY_OPT_IN: []
  };
  function eN(e, t, r) {
    if (typeof r[e] == "undefined")
      return;
    let n = String(r[e]);
    t[e] = n.toLowerCase() === "true"
  }
  a(eN, "parseBoolean");
  function tN(e, t, r, n = -1 / 0, o = 1 / 0) {
    if (typeof r[e] != "undefined") {
      let i = Number(r[e]);
      isNaN(i) || (i < n ? t[e] = n : i > o ? t[e] = o : t[e] = i)
    }
  }
  a(tN, "parseNumber");
  function rN(e, t, r, n = WP) {
    let o = r[e];
    typeof o == "string" && (t[e] = o.split(n).map(i => i.trim()))
  }
  a(rN, "parseStringList");
  var nN = {
    ALL: Fr.DiagLogLevel.ALL,
    VERBOSE: Fr.DiagLogLevel.VERBOSE,
    DEBUG: Fr.DiagLogLevel.DEBUG,
    INFO: Fr.DiagLogLevel.INFO,
    WARN: Fr.DiagLogLevel.WARN,
    ERROR: Fr.DiagLogLevel.ERROR,
    NONE: Fr.DiagLogLevel.NONE
  };
  function oN(e, t, r) {
    let n = r[e];
    if (typeof n == "string") {
      let o = nN[n.toUpperCase()];
      o != null && (t[e] = o)
    }
  }
  a(oN, "setLogLevelFromEnv");
  function iN(e) {
    let t = {};
    for (let r in be.DEFAULT_ENVIRONMENT) {
      let n = r;
      switch (n) {
        case "OTEL_LOG_LEVEL":
          oN(n, t, e);
          break;
        default:
          if (XP(n))
            eN(n, t, e);
          else if (ZP(n))
            tN(n, t, e);
          else if (JP(n))
            rN(n, t, e);
          else {
            let o = e[n];
            typeof o != "undefined" && o !== null && (t[n] = String(o))
          }
      }
    }
    return t
  }
  a(iN, "parseEnvironment");
  be.parseEnvironment = iN
}
);
var pc = W(Fa => {
  "use strict";
  c();
  Object.defineProperty(Fa, "__esModule", {
    value: !0
  });
  Fa._globalThis = void 0;
  Fa._globalThis = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}
}
);
var Xh = W(Zn => {
  "use strict";
  c();
  Object.defineProperty(Zn, "__esModule", {
    value: !0
  });
  Zn.getEnvWithoutDefaults = Zn.getEnv = void 0;
  var mc = fc()
    , Kh = pc();
  function aN() {
    let e = (0,
      mc.parseEnvironment)(Kh._globalThis);
    return Object.assign({}, mc.DEFAULT_ENVIRONMENT, e)
  }
  a(aN, "getEnv");
  Zn.getEnv = aN;
  function sN() {
    return (0,
      mc.parseEnvironment)(Kh._globalThis)
  }
  a(sN, "getEnvWithoutDefaults");
  Zn.getEnvWithoutDefaults = sN
}
);
var _c = W(Ba => {
  "use strict";
  c();
  Object.defineProperty(Ba, "__esModule", {
    value: !0
  });
  Ba.hexToBinary = void 0;
  function qh(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 97 && e <= 102 ? e - 87 : e - 55
  }
  a(qh, "intValue");
  function uN(e) {
    let t = new Uint8Array(e.length / 2)
      , r = 0;
    for (let n = 0; n < e.length; n += 2) {
      let o = qh(e.charCodeAt(n))
        , i = qh(e.charCodeAt(n + 1));
      t[r++] = o << 4 | i
    }
    return t
  }
  a(uN, "hexToBinary");
  Ba.hexToBinary = uN
}
);
var Zh = W(Va => {
  "use strict";
  c();
  Object.defineProperty(Va, "__esModule", {
    value: !0
  });
  Va.hexToBase64 = void 0;
  var lN = _c();
  function cN(e) {
    return btoa(String.fromCharCode(...(0,
      lN.hexToBinary)(e)))
  }
  a(cN, "hexToBase64");
  Va.hexToBase64 = cN
}
);
var Jh = W(Ha => {
  "use strict";
  c();
  Object.defineProperty(Ha, "__esModule", {
    value: !0
  });
  Ha.RandomIdGenerator = void 0;
  var dN = 8
    , fN = 16
    , gc = class gc {
      constructor() {
        this.generateTraceId = Qh(fN),
          this.generateSpanId = Qh(dN)
      }
    }
    ;
  a(gc, "RandomIdGenerator");
  var hc = gc;
  Ha.RandomIdGenerator = hc;
  var ka = Array(32);
  function Qh(e) {
    return a(function() {
      for (let r = 0; r < e * 2; r++)
        ka[r] = Math.floor(Math.random() * 16) + 48,
          ka[r] >= 58 && (ka[r] += 39);
      return String.fromCharCode.apply(null, ka.slice(0, e * 2))
    }, "generateId")
  }
  a(Qh, "getIdGenerator")
}
);
var e0 = W(Ga => {
  "use strict";
  c();
  Object.defineProperty(Ga, "__esModule", {
    value: !0
  });
  Ga.otperformance = void 0;
  Ga.otperformance = performance
}
);
var Ec = W(Ya => {
  "use strict";
  c();
  Object.defineProperty(Ya, "__esModule", {
    value: !0
  });
  Ya.VERSION = void 0;
  Ya.VERSION = "1.30.1"
}
);
function Ne(e) {
  for (var t = {}, r = e.length, n = 0; n < r; n++) {
    var o = e[n];
    o && (t[String(o).toUpperCase().replace(/[-.]/g, "_")] = o)
  }
  return t
}
var Tc = H(() => {
  c();
  a(Ne, "createConstMap")
}
);
var t0, r0, n0, o0, i0, a0, s0, u0, l0, c0, d0, f0, p0, m0, _0, h0, g0, E0, T0, v0, S0, y0, A0, b0, x0, C0, R0, O0, P0, N0, w0, I0, M0, L0, $0, D0, U0, F0, B0, V0, k0, H0, G0, Y0, j0, z0, W0, K0, X0, q0, Z0, Q0, J0, eg, tg, rg, ng, og, ig, ag, sg, ug, lg, cg, dg, fg, pg, mg, _g, hg, gg, Eg, Tg, vg, Sg, yg, Ag, bg, xg, Cg, Rg, Og, Pg, Ng, wg, Ig, Mg, Lg, $g, Dg, Ug, Fg, Bg, Vg, kg, Hg, Gg, Yg, jg, zg, Wg, Kg, Xg, qg, Zg, Qg, Jg, eE, tE, rE, nE, oE, iE, aE, sE, uE, lE, cE, dE, fE, pE, mE, _E, hE, gE, EE, TE, vE, pN, mN, _N, hN, gN, EN, TN, vN, SN, yN, AN, bN, xN, CN, RN, ON, PN, NN, wN, IN, MN, oi, ii, vc, LN, $N, DN, UN, FN, BN, VN, kN, HN, GN, YN, jN, zN, WN, KN, XN, qN, ZN, QN, JN, ew, tw, rw, nw, ow, iw, aw, sw, uw, lw, cw, dw, fw, pw, mw, _w, Sc, yc, hw, Ac, bc, xc, gw, Cc, Ew, Rc, Oc, Pc, Tw, vw, Sw, yw, Aw, bw, xw, Cw, Rw, Ow, Pw, Nw, ww, Iw, Mw, Lw, $w, Dw, Uw, Fw, Bw, Vw, kw, Hw, Gw, Yw, jw, zw, Ww, Kw, Xw, qw, Zw, Qw, Jw, eI, tI, rI, nI, oI, iI, aI, sI, uI, lI, cI, dI, fI, pI, mI, _I, hI, gI, EI, TI, vI, SI, SE, yE, AE, bE, xE, CE, RE, OE, PE, NE, wE, IE, ME, LE, $E, DE, UE, FE, BE, VE, kE, HE, GE, YE, jE, zE, WE, KE, XE, qE, ZE, QE, JE, eT, tT, rT, nT, oT, iT, aT, sT, uT, lT, cT, dT, fT, pT, yI, AI, bI, xI, CI, RI, OI, PI, NI, wI, II, MI, LI, $I, DI, UI, FI, BI, VI, kI, HI, GI, YI, jI, zI, WI, KI, XI, qI, ZI, QI, JI, eM, tM, rM, nM, oM, iM, aM, sM, uM, lM, cM, dM, fM, pM, mM, _M, mT, _T, hT, gT, ET, TT, vT, ST, yT, AT, bT, hM, gM, EM, TM, vM, SM, yM, AM, bM, xM, CM, RM, xT, CT, RT, OT, PT, OM, PM, NM, wM, IM, MM, NT, wT, IT, LM, $M, DM, UM, MT, LT, $T, DT, FM, BM, VM, kM, HM, UT, FT, BT, VT, kT, HT, GT, GM, YM, jM, zM, WM, KM, XM, qM, YT, jT, zT, WT, KT, ZM, QM, JM, eL, tL, rL, XT, qT, ZT, QT, JT, ev, tv, rv, nv, ov, iv, av, sv, uv, lv, cv, dv, fv, pv, mv, _v, nL, oL, iL, aL, sL, uL, lL, cL, dL, fL, pL, mL, _L, hL, gL, EL, TL, vL, SL, yL, AL, bL, hv, gv, Ev, Tv, vv, xL, CL, RL, OL, PL, NL, Sv, yv, wL, IL, ML, Av, bv, LL, $L, DL, xv, Cv, Rv, Ov, Pv, Nv, wv, Iv, Mv, Lv, $v, Dv, Uv, Fv, Bv, Vv, kv, UL, FL, BL, VL, kL, HL, GL, YL, jL, zL, WL, KL, XL, qL, ZL, QL, JL, e9, Hv, Gv, t9, r9, n9, Yv = H(() => {
  c();
  Tc();
  t0 = "aws.lambda.invoked_arn",
    r0 = "db.system",
    n0 = "db.connection_string",
    o0 = "db.user",
    i0 = "db.jdbc.driver_classname",
    a0 = "db.name",
    s0 = "db.statement",
    u0 = "db.operation",
    l0 = "db.mssql.instance_name",
    c0 = "db.cassandra.keyspace",
    d0 = "db.cassandra.page_size",
    f0 = "db.cassandra.consistency_level",
    p0 = "db.cassandra.table",
    m0 = "db.cassandra.idempotence",
    _0 = "db.cassandra.speculative_execution_count",
    h0 = "db.cassandra.coordinator.id",
    g0 = "db.cassandra.coordinator.dc",
    E0 = "db.hbase.namespace",
    T0 = "db.redis.database_index",
    v0 = "db.mongodb.collection",
    S0 = "db.sql.table",
    y0 = "exception.type",
    A0 = "exception.message",
    b0 = "exception.stacktrace",
    x0 = "exception.escaped",
    C0 = "faas.trigger",
    R0 = "faas.execution",
    O0 = "faas.document.collection",
    P0 = "faas.document.operation",
    N0 = "faas.document.time",
    w0 = "faas.document.name",
    I0 = "faas.time",
    M0 = "faas.cron",
    L0 = "faas.coldstart",
    $0 = "faas.invoked_name",
    D0 = "faas.invoked_provider",
    U0 = "faas.invoked_region",
    F0 = "net.transport",
    B0 = "net.peer.ip",
    V0 = "net.peer.port",
    k0 = "net.peer.name",
    H0 = "net.host.ip",
    G0 = "net.host.port",
    Y0 = "net.host.name",
    j0 = "net.host.connection.type",
    z0 = "net.host.connection.subtype",
    W0 = "net.host.carrier.name",
    K0 = "net.host.carrier.mcc",
    X0 = "net.host.carrier.mnc",
    q0 = "net.host.carrier.icc",
    Z0 = "peer.service",
    Q0 = "enduser.id",
    J0 = "enduser.role",
    eg = "enduser.scope",
    tg = "thread.id",
    rg = "thread.name",
    ng = "code.function",
    og = "code.namespace",
    ig = "code.filepath",
    ag = "code.lineno",
    sg = "http.method",
    ug = "http.url",
    lg = "http.target",
    cg = "http.host",
    dg = "http.scheme",
    fg = "http.status_code",
    pg = "http.flavor",
    mg = "http.user_agent",
    _g = "http.request_content_length",
    hg = "http.request_content_length_uncompressed",
    gg = "http.response_content_length",
    Eg = "http.response_content_length_uncompressed",
    Tg = "http.server_name",
    vg = "http.route",
    Sg = "http.client_ip",
    yg = "aws.dynamodb.table_names",
    Ag = "aws.dynamodb.consumed_capacity",
    bg = "aws.dynamodb.item_collection_metrics",
    xg = "aws.dynamodb.provisioned_read_capacity",
    Cg = "aws.dynamodb.provisioned_write_capacity",
    Rg = "aws.dynamodb.consistent_read",
    Og = "aws.dynamodb.projection",
    Pg = "aws.dynamodb.limit",
    Ng = "aws.dynamodb.attributes_to_get",
    wg = "aws.dynamodb.index_name",
    Ig = "aws.dynamodb.select",
    Mg = "aws.dynamodb.global_secondary_indexes",
    Lg = "aws.dynamodb.local_secondary_indexes",
    $g = "aws.dynamodb.exclusive_start_table",
    Dg = "aws.dynamodb.table_count",
    Ug = "aws.dynamodb.scan_forward",
    Fg = "aws.dynamodb.segment",
    Bg = "aws.dynamodb.total_segments",
    Vg = "aws.dynamodb.count",
    kg = "aws.dynamodb.scanned_count",
    Hg = "aws.dynamodb.attribute_definitions",
    Gg = "aws.dynamodb.global_secondary_index_updates",
    Yg = "messaging.system",
    jg = "messaging.destination",
    zg = "messaging.destination_kind",
    Wg = "messaging.temp_destination",
    Kg = "messaging.protocol",
    Xg = "messaging.protocol_version",
    qg = "messaging.url",
    Zg = "messaging.message_id",
    Qg = "messaging.conversation_id",
    Jg = "messaging.message_payload_size_bytes",
    eE = "messaging.message_payload_compressed_size_bytes",
    tE = "messaging.operation",
    rE = "messaging.consumer_id",
    nE = "messaging.rabbitmq.routing_key",
    oE = "messaging.kafka.message_key",
    iE = "messaging.kafka.consumer_group",
    aE = "messaging.kafka.client_id",
    sE = "messaging.kafka.partition",
    uE = "messaging.kafka.tombstone",
    lE = "rpc.system",
    cE = "rpc.service",
    dE = "rpc.method",
    fE = "rpc.grpc.status_code",
    pE = "rpc.jsonrpc.version",
    mE = "rpc.jsonrpc.request_id",
    _E = "rpc.jsonrpc.error_code",
    hE = "rpc.jsonrpc.error_message",
    gE = "message.type",
    EE = "message.id",
    TE = "message.compressed_size",
    vE = "message.uncompressed_size",
    pN = t0,
    mN = r0,
    _N = n0,
    hN = o0,
    gN = i0,
    EN = a0,
    TN = s0,
    vN = u0,
    SN = l0,
    yN = c0,
    AN = d0,
    bN = f0,
    xN = p0,
    CN = m0,
    RN = _0,
    ON = h0,
    PN = g0,
    NN = E0,
    wN = T0,
    IN = v0,
    MN = S0,
    oi = y0,
    ii = A0,
    vc = b0,
    LN = x0,
    $N = C0,
    DN = R0,
    UN = O0,
    FN = P0,
    BN = N0,
    VN = w0,
    kN = I0,
    HN = M0,
    GN = L0,
    YN = $0,
    jN = D0,
    zN = U0,
    WN = F0,
    KN = B0,
    XN = V0,
    qN = k0,
    ZN = H0,
    QN = G0,
    JN = Y0,
    ew = j0,
    tw = z0,
    rw = W0,
    nw = K0,
    ow = X0,
    iw = q0,
    aw = Z0,
    sw = Q0,
    uw = J0,
    lw = eg,
    cw = tg,
    dw = rg,
    fw = ng,
    pw = og,
    mw = ig,
    _w = ag,
    Sc = sg,
    yc = ug,
    hw = lg,
    Ac = cg,
    bc = dg,
    xc = fg,
    gw = pg,
    Cc = mg,
    Ew = _g,
    Rc = hg,
    Oc = gg,
    Pc = Eg,
    Tw = Tg,
    vw = vg,
    Sw = Sg,
    yw = yg,
    Aw = Ag,
    bw = bg,
    xw = xg,
    Cw = Cg,
    Rw = Rg,
    Ow = Og,
    Pw = Pg,
    Nw = Ng,
    ww = wg,
    Iw = Ig,
    Mw = Mg,
    Lw = Lg,
    $w = $g,
    Dw = Dg,
    Uw = Ug,
    Fw = Fg,
    Bw = Bg,
    Vw = Vg,
    kw = kg,
    Hw = Hg,
    Gw = Gg,
    Yw = Yg,
    jw = jg,
    zw = zg,
    Ww = Wg,
    Kw = Kg,
    Xw = Xg,
    qw = qg,
    Zw = Zg,
    Qw = Qg,
    Jw = Jg,
    eI = eE,
    tI = tE,
    rI = rE,
    nI = nE,
    oI = oE,
    iI = iE,
    aI = aE,
    sI = sE,
    uI = uE,
    lI = lE,
    cI = cE,
    dI = dE,
    fI = fE,
    pI = pE,
    mI = mE,
    _I = _E,
    hI = hE,
    gI = gE,
    EI = EE,
    TI = TE,
    vI = vE,
    SI = Ne([t0, r0, n0, o0, i0, a0, s0, u0, l0, c0, d0, f0, p0, m0, _0, h0, g0, E0, T0, v0, S0, y0, A0, b0, x0, C0, R0, O0, P0, N0, w0, I0, M0, L0, $0, D0, U0, F0, B0, V0, k0, H0, G0, Y0, j0, z0, W0, K0, X0, q0, Z0, Q0, J0, eg, tg, rg, ng, og, ig, ag, sg, ug, lg, cg, dg, fg, pg, mg, _g, hg, gg, Eg, Tg, vg, Sg, yg, Ag, bg, xg, Cg, Rg, Og, Pg, Ng, wg, Ig, Mg, Lg, $g, Dg, Ug, Fg, Bg, Vg, kg, Hg, Gg, Yg, jg, zg, Wg, Kg, Xg, qg, Zg, Qg, Jg, eE, tE, rE, nE, oE, iE, aE, sE, uE, lE, cE, dE, fE, pE, mE, _E, hE, gE, EE, TE, vE]),
    SE = "other_sql",
    yE = "mssql",
    AE = "mysql",
    bE = "oracle",
    xE = "db2",
    CE = "postgresql",
    RE = "redshift",
    OE = "hive",
    PE = "cloudscape",
    NE = "hsqldb",
    wE = "progress",
    IE = "maxdb",
    ME = "hanadb",
    LE = "ingres",
    $E = "firstsql",
    DE = "edb",
    UE = "cache",
    FE = "adabas",
    BE = "firebird",
    VE = "derby",
    kE = "filemaker",
    HE = "informix",
    GE = "instantdb",
    YE = "interbase",
    jE = "mariadb",
    zE = "netezza",
    WE = "pervasive",
    KE = "pointbase",
    XE = "sqlite",
    qE = "sybase",
    ZE = "teradata",
    QE = "vertica",
    JE = "h2",
    eT = "coldfusion",
    tT = "cassandra",
    rT = "hbase",
    nT = "mongodb",
    oT = "redis",
    iT = "couchbase",
    aT = "couchdb",
    sT = "cosmosdb",
    uT = "dynamodb",
    lT = "neo4j",
    cT = "geode",
    dT = "elasticsearch",
    fT = "memcached",
    pT = "cockroachdb",
    yI = SE,
    AI = yE,
    bI = AE,
    xI = bE,
    CI = xE,
    RI = CE,
    OI = RE,
    PI = OE,
    NI = PE,
    wI = NE,
    II = wE,
    MI = IE,
    LI = ME,
    $I = LE,
    DI = $E,
    UI = DE,
    FI = UE,
    BI = FE,
    VI = BE,
    kI = VE,
    HI = kE,
    GI = HE,
    YI = GE,
    jI = YE,
    zI = jE,
    WI = zE,
    KI = WE,
    XI = KE,
    qI = XE,
    ZI = qE,
    QI = ZE,
    JI = QE,
    eM = JE,
    tM = eT,
    rM = tT,
    nM = rT,
    oM = nT,
    iM = oT,
    aM = iT,
    sM = aT,
    uM = sT,
    lM = uT,
    cM = lT,
    dM = cT,
    fM = dT,
    pM = fT,
    mM = pT,
    _M = Ne([SE, yE, AE, bE, xE, CE, RE, OE, PE, NE, wE, IE, ME, LE, $E, DE, UE, FE, BE, VE, kE, HE, GE, YE, jE, zE, WE, KE, XE, qE, ZE, QE, JE, eT, tT, rT, nT, oT, iT, aT, sT, uT, lT, cT, dT, fT, pT]),
    mT = "all",
    _T = "each_quorum",
    hT = "quorum",
    gT = "local_quorum",
    ET = "one",
    TT = "two",
    vT = "three",
    ST = "local_one",
    yT = "any",
    AT = "serial",
    bT = "local_serial",
    hM = mT,
    gM = _T,
    EM = hT,
    TM = gT,
    vM = ET,
    SM = TT,
    yM = vT,
    AM = ST,
    bM = yT,
    xM = AT,
    CM = bT,
    RM = Ne([mT, _T, hT, gT, ET, TT, vT, ST, yT, AT, bT]),
    xT = "datasource",
    CT = "http",
    RT = "pubsub",
    OT = "timer",
    PT = "other",
    OM = xT,
    PM = CT,
    NM = RT,
    wM = OT,
    IM = PT,
    MM = Ne([xT, CT, RT, OT, PT]),
    NT = "insert",
    wT = "edit",
    IT = "delete",
    LM = NT,
    $M = wT,
    DM = IT,
    UM = Ne([NT, wT, IT]),
    MT = "alibaba_cloud",
    LT = "aws",
    $T = "azure",
    DT = "gcp",
    FM = MT,
    BM = LT,
    VM = $T,
    kM = DT,
    HM = Ne([MT, LT, $T, DT]),
    UT = "ip_tcp",
    FT = "ip_udp",
    BT = "ip",
    VT = "unix",
    kT = "pipe",
    HT = "inproc",
    GT = "other",
    GM = UT,
    YM = FT,
    jM = BT,
    zM = VT,
    WM = kT,
    KM = HT,
    XM = GT,
    qM = Ne([UT, FT, BT, VT, kT, HT, GT]),
    YT = "wifi",
    jT = "wired",
    zT = "cell",
    WT = "unavailable",
    KT = "unknown",
    ZM = YT,
    QM = jT,
    JM = zT,
    eL = WT,
    tL = KT,
    rL = Ne([YT, jT, zT, WT, KT]),
    XT = "gprs",
    qT = "edge",
    ZT = "umts",
    QT = "cdma",
    JT = "evdo_0",
    ev = "evdo_a",
    tv = "cdma2000_1xrtt",
    rv = "hsdpa",
    nv = "hsupa",
    ov = "hspa",
    iv = "iden",
    av = "evdo_b",
    sv = "lte",
    uv = "ehrpd",
    lv = "hspap",
    cv = "gsm",
    dv = "td_scdma",
    fv = "iwlan",
    pv = "nr",
    mv = "nrnsa",
    _v = "lte_ca",
    nL = XT,
    oL = qT,
    iL = ZT,
    aL = QT,
    sL = JT,
    uL = ev,
    lL = tv,
    cL = rv,
    dL = nv,
    fL = ov,
    pL = iv,
    mL = av,
    _L = sv,
    hL = uv,
    gL = lv,
    EL = cv,
    TL = dv,
    vL = fv,
    SL = pv,
    yL = mv,
    AL = _v,
    bL = Ne([XT, qT, ZT, QT, JT, ev, tv, rv, nv, ov, iv, av, sv, uv, lv, cv, dv, fv, pv, mv, _v]),
    hv = "1.0",
    gv = "1.1",
    Ev = "2.0",
    Tv = "SPDY",
    vv = "QUIC",
    xL = hv,
    CL = gv,
    RL = Ev,
    OL = Tv,
    PL = vv,
    NL = {
      HTTP_1_0: hv,
      HTTP_1_1: gv,
      HTTP_2_0: Ev,
      SPDY: Tv,
      QUIC: vv
    },
    Sv = "queue",
    yv = "topic",
    wL = Sv,
    IL = yv,
    ML = Ne([Sv, yv]),
    Av = "receive",
    bv = "process",
    LL = Av,
    $L = bv,
    DL = Ne([Av, bv]),
    xv = 0,
    Cv = 1,
    Rv = 2,
    Ov = 3,
    Pv = 4,
    Nv = 5,
    wv = 6,
    Iv = 7,
    Mv = 8,
    Lv = 9,
    $v = 10,
    Dv = 11,
    Uv = 12,
    Fv = 13,
    Bv = 14,
    Vv = 15,
    kv = 16,
    UL = xv,
    FL = Cv,
    BL = Rv,
    VL = Ov,
    kL = Pv,
    HL = Nv,
    GL = wv,
    YL = Iv,
    jL = Mv,
    zL = Lv,
    WL = $v,
    KL = Dv,
    XL = Uv,
    qL = Fv,
    ZL = Bv,
    QL = Vv,
    JL = kv,
    e9 = {
      OK: xv,
      CANCELLED: Cv,
      UNKNOWN: Rv,
      INVALID_ARGUMENT: Ov,
      DEADLINE_EXCEEDED: Pv,
      NOT_FOUND: Nv,
      ALREADY_EXISTS: wv,
      PERMISSION_DENIED: Iv,
      RESOURCE_EXHAUSTED: Mv,
      FAILED_PRECONDITION: Lv,
      ABORTED: $v,
      OUT_OF_RANGE: Dv,
      UNIMPLEMENTED: Uv,
      INTERNAL: Fv,
      UNAVAILABLE: Bv,
      DATA_LOSS: Vv,
      UNAUTHENTICATED: kv
    },
    Hv = "SENT",
    Gv = "RECEIVED",
    t9 = Hv,
    r9 = Gv,
    n9 = Ne([Hv, Gv])
}
);
var jv = H(() => {
  c();
  Yv()
}
);
var zv, Wv, Kv, Xv, qv, Zv, Qv, Jv, eS, tS, rS, nS, oS, iS, aS, sS, uS, lS, cS, dS, fS, pS, mS, _S, hS, gS, ES, TS, vS, SS, yS, AS, bS, xS, CS, RS, OS, PS, NS, wS, IS, MS, LS, $S, DS, US, FS, BS, VS, kS, HS, GS, YS, jS, zS, WS, KS, XS, qS, ZS, QS, JS, ey, ty, ry, ny, oy, iy, ay, sy, uy, ly, cy, dy, fy, py, my, _y, hy, gy, Ey, o9, i9, a9, s9, u9, l9, c9, d9, f9, p9, m9, _9, h9, g9, E9, T9, v9, S9, y9, A9, b9, x9, C9, R9, O9, P9, N9, w9, I9, M9, L9, $9, D9, U9, F9, B9, V9, k9, H9, G9, Y9, j9, z9, W9, K9, X9, q9, Z9, Q9, J9, e$, t$, r$, n$, o$, i$, a$, s$, u$, l$, c$, d$, f$, p$, m$, _$, h$, g$, E$, T$, Nc, v$, S$, y$, ja, za, Wa, A$, b$, x$, C$, R$, Ty, vy, Sy, yy, O$, P$, N$, w$, I$, Ay, by, xy, Cy, Ry, Oy, Py, Ny, wy, Iy, My, Ly, $y, Dy, Uy, Fy, By, M$, L$, $$, D$, U$, F$, B$, V$, k$, H$, G$, Y$, j$, z$, W$, K$, X$, q$, Vy, ky, Z$, Q$, J$, Hy, Gy, Yy, jy, zy, Wy, Ky, e4, t4, r4, n4, o4, i4, a4, s4, Xy, qy, Zy, Qy, Jy, e1, t1, r1, n1, o1, i1, u4, l4, c4, d4, f4, p4, m4, _4, h4, g4, E4, T4, a1, s1, u1, l1, c1, d1, f1, p1, m1, _1, v4, S4, y4, A4, b4, x4, C4, R4, O4, P4, N4, h1 = H(() => {
  c();
  Tc();
  zv = "cloud.provider",
    Wv = "cloud.account.id",
    Kv = "cloud.region",
    Xv = "cloud.availability_zone",
    qv = "cloud.platform",
    Zv = "aws.ecs.container.arn",
    Qv = "aws.ecs.cluster.arn",
    Jv = "aws.ecs.launchtype",
    eS = "aws.ecs.task.arn",
    tS = "aws.ecs.task.family",
    rS = "aws.ecs.task.revision",
    nS = "aws.eks.cluster.arn",
    oS = "aws.log.group.names",
    iS = "aws.log.group.arns",
    aS = "aws.log.stream.names",
    sS = "aws.log.stream.arns",
    uS = "container.name",
    lS = "container.id",
    cS = "container.runtime",
    dS = "container.image.name",
    fS = "container.image.tag",
    pS = "deployment.environment",
    mS = "device.id",
    _S = "device.model.identifier",
    hS = "device.model.name",
    gS = "faas.name",
    ES = "faas.id",
    TS = "faas.version",
    vS = "faas.instance",
    SS = "faas.max_memory",
    yS = "host.id",
    AS = "host.name",
    bS = "host.type",
    xS = "host.arch",
    CS = "host.image.name",
    RS = "host.image.id",
    OS = "host.image.version",
    PS = "k8s.cluster.name",
    NS = "k8s.node.name",
    wS = "k8s.node.uid",
    IS = "k8s.namespace.name",
    MS = "k8s.pod.uid",
    LS = "k8s.pod.name",
    $S = "k8s.container.name",
    DS = "k8s.replicaset.uid",
    US = "k8s.replicaset.name",
    FS = "k8s.deployment.uid",
    BS = "k8s.deployment.name",
    VS = "k8s.statefulset.uid",
    kS = "k8s.statefulset.name",
    HS = "k8s.daemonset.uid",
    GS = "k8s.daemonset.name",
    YS = "k8s.job.uid",
    jS = "k8s.job.name",
    zS = "k8s.cronjob.uid",
    WS = "k8s.cronjob.name",
    KS = "os.type",
    XS = "os.description",
    qS = "os.name",
    ZS = "os.version",
    QS = "process.pid",
    JS = "process.executable.name",
    ey = "process.executable.path",
    ty = "process.command",
    ry = "process.command_line",
    ny = "process.command_args",
    oy = "process.owner",
    iy = "process.runtime.name",
    ay = "process.runtime.version",
    sy = "process.runtime.description",
    uy = "service.name",
    ly = "service.namespace",
    cy = "service.instance.id",
    dy = "service.version",
    fy = "telemetry.sdk.name",
    py = "telemetry.sdk.language",
    my = "telemetry.sdk.version",
    _y = "telemetry.auto.version",
    hy = "webengine.name",
    gy = "webengine.version",
    Ey = "webengine.description",
    o9 = zv,
    i9 = Wv,
    a9 = Kv,
    s9 = Xv,
    u9 = qv,
    l9 = Zv,
    c9 = Qv,
    d9 = Jv,
    f9 = eS,
    p9 = tS,
    m9 = rS,
    _9 = nS,
    h9 = oS,
    g9 = iS,
    E9 = aS,
    T9 = sS,
    v9 = uS,
    S9 = lS,
    y9 = cS,
    A9 = dS,
    b9 = fS,
    x9 = pS,
    C9 = mS,
    R9 = _S,
    O9 = hS,
    P9 = gS,
    N9 = ES,
    w9 = TS,
    I9 = vS,
    M9 = SS,
    L9 = yS,
    $9 = AS,
    D9 = bS,
    U9 = xS,
    F9 = CS,
    B9 = RS,
    V9 = OS,
    k9 = PS,
    H9 = NS,
    G9 = wS,
    Y9 = IS,
    j9 = MS,
    z9 = LS,
    W9 = $S,
    K9 = DS,
    X9 = US,
    q9 = FS,
    Z9 = BS,
    Q9 = VS,
    J9 = kS,
    e$ = HS,
    t$ = GS,
    r$ = YS,
    n$ = jS,
    o$ = zS,
    i$ = WS,
    a$ = KS,
    s$ = XS,
    u$ = qS,
    l$ = ZS,
    c$ = QS,
    d$ = JS,
    f$ = ey,
    p$ = ty,
    m$ = ry,
    _$ = ny,
    h$ = oy,
    g$ = iy,
    E$ = ay,
    T$ = sy,
    Nc = uy,
    v$ = ly,
    S$ = cy,
    y$ = dy,
    ja = fy,
    za = py,
    Wa = my,
    A$ = _y,
    b$ = hy,
    x$ = gy,
    C$ = Ey,
    R$ = Ne([zv, Wv, Kv, Xv, qv, Zv, Qv, Jv, eS, tS, rS, nS, oS, iS, aS, sS, uS, lS, cS, dS, fS, pS, mS, _S, hS, gS, ES, TS, vS, SS, yS, AS, bS, xS, CS, RS, OS, PS, NS, wS, IS, MS, LS, $S, DS, US, FS, BS, VS, kS, HS, GS, YS, jS, zS, WS, KS, XS, qS, ZS, QS, JS, ey, ty, ry, ny, oy, iy, ay, sy, uy, ly, cy, dy, fy, py, my, _y, hy, gy, Ey]),
    Ty = "alibaba_cloud",
    vy = "aws",
    Sy = "azure",
    yy = "gcp",
    O$ = Ty,
    P$ = vy,
    N$ = Sy,
    w$ = yy,
    I$ = Ne([Ty, vy, Sy, yy]),
    Ay = "alibaba_cloud_ecs",
    by = "alibaba_cloud_fc",
    xy = "aws_ec2",
    Cy = "aws_ecs",
    Ry = "aws_eks",
    Oy = "aws_lambda",
    Py = "aws_elastic_beanstalk",
    Ny = "azure_vm",
    wy = "azure_container_instances",
    Iy = "azure_aks",
    My = "azure_functions",
    Ly = "azure_app_service",
    $y = "gcp_compute_engine",
    Dy = "gcp_cloud_run",
    Uy = "gcp_kubernetes_engine",
    Fy = "gcp_cloud_functions",
    By = "gcp_app_engine",
    M$ = Ay,
    L$ = by,
    $$ = xy,
    D$ = Cy,
    U$ = Ry,
    F$ = Oy,
    B$ = Py,
    V$ = Ny,
    k$ = wy,
    H$ = Iy,
    G$ = My,
    Y$ = Ly,
    j$ = $y,
    z$ = Dy,
    W$ = Uy,
    K$ = Fy,
    X$ = By,
    q$ = Ne([Ay, by, xy, Cy, Ry, Oy, Py, Ny, wy, Iy, My, Ly, $y, Dy, Uy, Fy, By]),
    Vy = "ec2",
    ky = "fargate",
    Z$ = Vy,
    Q$ = ky,
    J$ = Ne([Vy, ky]),
    Hy = "amd64",
    Gy = "arm32",
    Yy = "arm64",
    jy = "ia64",
    zy = "ppc32",
    Wy = "ppc64",
    Ky = "x86",
    e4 = Hy,
    t4 = Gy,
    r4 = Yy,
    n4 = jy,
    o4 = zy,
    i4 = Wy,
    a4 = Ky,
    s4 = Ne([Hy, Gy, Yy, jy, zy, Wy, Ky]),
    Xy = "windows",
    qy = "linux",
    Zy = "darwin",
    Qy = "freebsd",
    Jy = "netbsd",
    e1 = "openbsd",
    t1 = "dragonflybsd",
    r1 = "hpux",
    n1 = "aix",
    o1 = "solaris",
    i1 = "z_os",
    u4 = Xy,
    l4 = qy,
    c4 = Zy,
    d4 = Qy,
    f4 = Jy,
    p4 = e1,
    m4 = t1,
    _4 = r1,
    h4 = n1,
    g4 = o1,
    E4 = i1,
    T4 = Ne([Xy, qy, Zy, Qy, Jy, e1, t1, r1, n1, o1, i1]),
    a1 = "cpp",
    s1 = "dotnet",
    u1 = "erlang",
    l1 = "go",
    c1 = "java",
    d1 = "nodejs",
    f1 = "php",
    p1 = "python",
    m1 = "ruby",
    _1 = "webjs",
    v4 = a1,
    S4 = s1,
    y4 = u1,
    A4 = l1,
    b4 = c1,
    x4 = d1,
    C4 = f1,
    R4 = p1,
    O4 = m1,
    P4 = _1,
    N4 = Ne([a1, s1, u1, l1, c1, d1, f1, p1, m1, _1])
}
);
var g1 = H(() => {
  c();
  h1()
}
);
var w4, I4, M4, L4, $4, D4, U4, F4, B4, V4, k4, H4, G4, Y4, j4, z4, W4, K4, X4, q4, Z4, Q4, J4, e8, t8, r8, n8, o8, i8, a8, s8, u8, l8, c8, d8, f8, p8, m8, _8, h8, g8, E8, T8, v8, S8, y8, A8, b8, x8, C8, R8, O8, P8, N8, w8, I8, M8, L8, $8, D8, U8, F8, B8, V8, k8, H8, G8, Y8, j8, z8, W8, K8, X8, q8, Z8, Q8, J8, e5, t5, r5, n5, o5, i5, a5, s5, u5, l5, c5, d5, f5, p5, m5, _5, h5, g5, E5, T5, v5, S5, y5, A5, b5, x5, C5, R5, O5, P5, N5, w5, I5, E1 = H(() => {
  c();
  w4 = "aspnetcore.rate_limiting.result",
    I4 = "acquired",
    M4 = "endpoint_limiter",
    L4 = "global_limiter",
    $4 = "request_canceled",
    D4 = "telemetry.sdk.language",
    U4 = "cpp",
    F4 = "dotnet",
    B4 = "erlang",
    V4 = "go",
    k4 = "java",
    H4 = "nodejs",
    G4 = "php",
    Y4 = "python",
    j4 = "ruby",
    z4 = "rust",
    W4 = "swift",
    K4 = "webjs",
    X4 = "telemetry.sdk.name",
    q4 = "telemetry.sdk.version",
    Z4 = "aspnetcore.diagnostics.handler.type",
    Q4 = "aspnetcore.diagnostics.exception.result",
    J4 = "aborted",
    e8 = "handled",
    t8 = "skipped",
    r8 = "unhandled",
    n8 = "aspnetcore.rate_limiting.policy",
    o8 = "aspnetcore.request.is_unhandled",
    i8 = "aspnetcore.routing.is_fallback",
    a8 = "aspnetcore.routing.match_status",
    s8 = "failure",
    u8 = "success",
    l8 = "client.address",
    c8 = "client.port",
    d8 = "error.type",
    f8 = "_OTHER",
    p8 = "exception.escaped",
    m8 = "exception.message",
    _8 = "exception.stacktrace",
    h8 = "exception.type",
    g8 = a(function(e) {
      return "http.request.header." + e
    }, "ATTR_HTTP_REQUEST_HEADER"),
    E8 = "http.request.method",
    T8 = "_OTHER",
    v8 = "CONNECT",
    S8 = "DELETE",
    y8 = "GET",
    A8 = "HEAD",
    b8 = "OPTIONS",
    x8 = "PATCH",
    C8 = "POST",
    R8 = "PUT",
    O8 = "TRACE",
    P8 = "http.request.method_original",
    N8 = "http.request.resend_count",
    w8 = a(function(e) {
      return "http.response.header." + e
    }, "ATTR_HTTP_RESPONSE_HEADER"),
    I8 = "http.response.status_code",
    M8 = "http.route",
    L8 = "jvm.gc.action",
    $8 = "jvm.gc.name",
    D8 = "jvm.memory.pool.name",
    U8 = "jvm.memory.type",
    F8 = "heap",
    B8 = "non_heap",
    V8 = "jvm.thread.daemon",
    k8 = "jvm.thread.state",
    H8 = "blocked",
    G8 = "new",
    Y8 = "runnable",
    j8 = "terminated",
    z8 = "timed_waiting",
    W8 = "waiting",
    K8 = "network.local.address",
    X8 = "network.local.port",
    q8 = "network.peer.address",
    Z8 = "network.peer.port",
    Q8 = "network.protocol.name",
    J8 = "network.protocol.version",
    e5 = "network.transport",
    t5 = "pipe",
    r5 = "quic",
    n5 = "tcp",
    o5 = "udp",
    i5 = "unix",
    a5 = "network.type",
    s5 = "ipv4",
    u5 = "ipv6",
    l5 = "otel.scope.name",
    c5 = "otel.scope.version",
    d5 = "otel.status_code",
    f5 = "ERROR",
    p5 = "OK",
    m5 = "otel.status_description",
    _5 = "server.address",
    h5 = "server.port",
    g5 = "service.name",
    E5 = "service.version",
    T5 = "signalr.connection.status",
    v5 = "app_shutdown",
    S5 = "normal_closure",
    y5 = "timeout",
    A5 = "signalr.transport",
    b5 = "long_polling",
    x5 = "server_sent_events",
    C5 = "web_sockets",
    R5 = "url.fragment",
    O5 = "url.full",
    P5 = "url.path",
    N5 = "url.query",
    w5 = "url.scheme",
    I5 = "user_agent.original"
}
);
var M5, L5, $5, D5, U5, F5, B5, V5, k5, H5, G5, Y5, j5, z5, W5, K5, X5, q5, Z5, Q5, J5, e6, t6, r6, n6, o6, i6, a6, s6, u6, l6, T1 = H(() => {
  c();
  M5 = "aspnetcore.diagnostics.exceptions",
    L5 = "aspnetcore.rate_limiting.active_request_leases",
    $5 = "aspnetcore.rate_limiting.queued_requests",
    D5 = "aspnetcore.rate_limiting.request.time_in_queue",
    U5 = "aspnetcore.rate_limiting.request_lease.duration",
    F5 = "aspnetcore.rate_limiting.requests",
    B5 = "aspnetcore.routing.match_attempts",
    V5 = "http.client.request.duration",
    k5 = "http.server.request.duration",
    H5 = "jvm.class.count",
    G5 = "jvm.class.loaded",
    Y5 = "jvm.class.unloaded",
    j5 = "jvm.cpu.count",
    z5 = "jvm.cpu.recent_utilization",
    W5 = "jvm.cpu.time",
    K5 = "jvm.gc.duration",
    X5 = "jvm.memory.committed",
    q5 = "jvm.memory.limit",
    Z5 = "jvm.memory.used",
    Q5 = "jvm.memory.used_after_last_gc",
    J5 = "jvm.thread.count",
    e6 = "kestrel.active_connections",
    t6 = "kestrel.active_tls_handshakes",
    r6 = "kestrel.connection.duration",
    n6 = "kestrel.queued_connections",
    o6 = "kestrel.queued_requests",
    i6 = "kestrel.rejected_connections",
    a6 = "kestrel.tls_handshake.duration",
    s6 = "kestrel.upgraded_connections",
    u6 = "signalr.server.active_connections",
    l6 = "signalr.server.connection.duration"
}
);
var v1 = {};
om(v1, {
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED: () => J4,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED: () => e8,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED: () => t8,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED: () => r8,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED: () => I4,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER: () => M4,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER: () => L4,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED: () => $4,
  ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE: () => s8,
  ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS: () => u8,
  ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT: () => Q4,
  ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE: () => Z4,
  ATTR_ASPNETCORE_RATE_LIMITING_POLICY: () => n8,
  ATTR_ASPNETCORE_RATE_LIMITING_RESULT: () => w4,
  ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED: () => o8,
  ATTR_ASPNETCORE_ROUTING_IS_FALLBACK: () => i8,
  ATTR_ASPNETCORE_ROUTING_MATCH_STATUS: () => a8,
  ATTR_CLIENT_ADDRESS: () => l8,
  ATTR_CLIENT_PORT: () => c8,
  ATTR_ERROR_TYPE: () => d8,
  ATTR_EXCEPTION_ESCAPED: () => p8,
  ATTR_EXCEPTION_MESSAGE: () => m8,
  ATTR_EXCEPTION_STACKTRACE: () => _8,
  ATTR_EXCEPTION_TYPE: () => h8,
  ATTR_HTTP_REQUEST_HEADER: () => g8,
  ATTR_HTTP_REQUEST_METHOD: () => E8,
  ATTR_HTTP_REQUEST_METHOD_ORIGINAL: () => P8,
  ATTR_HTTP_REQUEST_RESEND_COUNT: () => N8,
  ATTR_HTTP_RESPONSE_HEADER: () => w8,
  ATTR_HTTP_RESPONSE_STATUS_CODE: () => I8,
  ATTR_HTTP_ROUTE: () => M8,
  ATTR_JVM_GC_ACTION: () => L8,
  ATTR_JVM_GC_NAME: () => $8,
  ATTR_JVM_MEMORY_POOL_NAME: () => D8,
  ATTR_JVM_MEMORY_TYPE: () => U8,
  ATTR_JVM_THREAD_DAEMON: () => V8,
  ATTR_JVM_THREAD_STATE: () => k8,
  ATTR_NETWORK_LOCAL_ADDRESS: () => K8,
  ATTR_NETWORK_LOCAL_PORT: () => X8,
  ATTR_NETWORK_PEER_ADDRESS: () => q8,
  ATTR_NETWORK_PEER_PORT: () => Z8,
  ATTR_NETWORK_PROTOCOL_NAME: () => Q8,
  ATTR_NETWORK_PROTOCOL_VERSION: () => J8,
  ATTR_NETWORK_TRANSPORT: () => e5,
  ATTR_NETWORK_TYPE: () => a5,
  ATTR_OTEL_SCOPE_NAME: () => l5,
  ATTR_OTEL_SCOPE_VERSION: () => c5,
  ATTR_OTEL_STATUS_CODE: () => d5,
  ATTR_OTEL_STATUS_DESCRIPTION: () => m5,
  ATTR_SERVER_ADDRESS: () => _5,
  ATTR_SERVER_PORT: () => h5,
  ATTR_SERVICE_NAME: () => g5,
  ATTR_SERVICE_VERSION: () => E5,
  ATTR_SIGNALR_CONNECTION_STATUS: () => T5,
  ATTR_SIGNALR_TRANSPORT: () => A5,
  ATTR_TELEMETRY_SDK_LANGUAGE: () => D4,
  ATTR_TELEMETRY_SDK_NAME: () => X4,
  ATTR_TELEMETRY_SDK_VERSION: () => q4,
  ATTR_URL_FRAGMENT: () => R5,
  ATTR_URL_FULL: () => O5,
  ATTR_URL_PATH: () => P5,
  ATTR_URL_QUERY: () => N5,
  ATTR_URL_SCHEME: () => w5,
  ATTR_USER_AGENT_ORIGINAL: () => I5,
  AWSECSLAUNCHTYPEVALUES_EC2: () => Z$,
  AWSECSLAUNCHTYPEVALUES_FARGATE: () => Q$,
  AwsEcsLaunchtypeValues: () => J$,
  CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS: () => M$,
  CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC: () => L$,
  CLOUDPLATFORMVALUES_AWS_EC2: () => $$,
  CLOUDPLATFORMVALUES_AWS_ECS: () => D$,
  CLOUDPLATFORMVALUES_AWS_EKS: () => U$,
  CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK: () => B$,
  CLOUDPLATFORMVALUES_AWS_LAMBDA: () => F$,
  CLOUDPLATFORMVALUES_AZURE_AKS: () => H$,
  CLOUDPLATFORMVALUES_AZURE_APP_SERVICE: () => Y$,
  CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES: () => k$,
  CLOUDPLATFORMVALUES_AZURE_FUNCTIONS: () => G$,
  CLOUDPLATFORMVALUES_AZURE_VM: () => V$,
  CLOUDPLATFORMVALUES_GCP_APP_ENGINE: () => X$,
  CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS: () => K$,
  CLOUDPLATFORMVALUES_GCP_CLOUD_RUN: () => z$,
  CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE: () => j$,
  CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE: () => W$,
  CLOUDPROVIDERVALUES_ALIBABA_CLOUD: () => O$,
  CLOUDPROVIDERVALUES_AWS: () => P$,
  CLOUDPROVIDERVALUES_AZURE: () => N$,
  CLOUDPROVIDERVALUES_GCP: () => w$,
  CloudPlatformValues: () => q$,
  CloudProviderValues: () => I$,
  DBCASSANDRACONSISTENCYLEVELVALUES_ALL: () => hM,
  DBCASSANDRACONSISTENCYLEVELVALUES_ANY: () => bM,
  DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM: () => gM,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE: () => AM,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM: () => TM,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL: () => CM,
  DBCASSANDRACONSISTENCYLEVELVALUES_ONE: () => vM,
  DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM: () => EM,
  DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL: () => xM,
  DBCASSANDRACONSISTENCYLEVELVALUES_THREE: () => yM,
  DBCASSANDRACONSISTENCYLEVELVALUES_TWO: () => SM,
  DBSYSTEMVALUES_ADABAS: () => BI,
  DBSYSTEMVALUES_CACHE: () => FI,
  DBSYSTEMVALUES_CASSANDRA: () => rM,
  DBSYSTEMVALUES_CLOUDSCAPE: () => NI,
  DBSYSTEMVALUES_COCKROACHDB: () => mM,
  DBSYSTEMVALUES_COLDFUSION: () => tM,
  DBSYSTEMVALUES_COSMOSDB: () => uM,
  DBSYSTEMVALUES_COUCHBASE: () => aM,
  DBSYSTEMVALUES_COUCHDB: () => sM,
  DBSYSTEMVALUES_DB2: () => CI,
  DBSYSTEMVALUES_DERBY: () => kI,
  DBSYSTEMVALUES_DYNAMODB: () => lM,
  DBSYSTEMVALUES_EDB: () => UI,
  DBSYSTEMVALUES_ELASTICSEARCH: () => fM,
  DBSYSTEMVALUES_FILEMAKER: () => HI,
  DBSYSTEMVALUES_FIREBIRD: () => VI,
  DBSYSTEMVALUES_FIRSTSQL: () => DI,
  DBSYSTEMVALUES_GEODE: () => dM,
  DBSYSTEMVALUES_H2: () => eM,
  DBSYSTEMVALUES_HANADB: () => LI,
  DBSYSTEMVALUES_HBASE: () => nM,
  DBSYSTEMVALUES_HIVE: () => PI,
  DBSYSTEMVALUES_HSQLDB: () => wI,
  DBSYSTEMVALUES_INFORMIX: () => GI,
  DBSYSTEMVALUES_INGRES: () => $I,
  DBSYSTEMVALUES_INSTANTDB: () => YI,
  DBSYSTEMVALUES_INTERBASE: () => jI,
  DBSYSTEMVALUES_MARIADB: () => zI,
  DBSYSTEMVALUES_MAXDB: () => MI,
  DBSYSTEMVALUES_MEMCACHED: () => pM,
  DBSYSTEMVALUES_MONGODB: () => oM,
  DBSYSTEMVALUES_MSSQL: () => AI,
  DBSYSTEMVALUES_MYSQL: () => bI,
  DBSYSTEMVALUES_NEO4J: () => cM,
  DBSYSTEMVALUES_NETEZZA: () => WI,
  DBSYSTEMVALUES_ORACLE: () => xI,
  DBSYSTEMVALUES_OTHER_SQL: () => yI,
  DBSYSTEMVALUES_PERVASIVE: () => KI,
  DBSYSTEMVALUES_POINTBASE: () => XI,
  DBSYSTEMVALUES_POSTGRESQL: () => RI,
  DBSYSTEMVALUES_PROGRESS: () => II,
  DBSYSTEMVALUES_REDIS: () => iM,
  DBSYSTEMVALUES_REDSHIFT: () => OI,
  DBSYSTEMVALUES_SQLITE: () => qI,
  DBSYSTEMVALUES_SYBASE: () => ZI,
  DBSYSTEMVALUES_TERADATA: () => QI,
  DBSYSTEMVALUES_VERTICA: () => JI,
  DbCassandraConsistencyLevelValues: () => RM,
  DbSystemValues: () => _M,
  ERROR_TYPE_VALUE_OTHER: () => f8,
  FAASDOCUMENTOPERATIONVALUES_DELETE: () => DM,
  FAASDOCUMENTOPERATIONVALUES_EDIT: () => $M,
  FAASDOCUMENTOPERATIONVALUES_INSERT: () => LM,
  FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD: () => FM,
  FAASINVOKEDPROVIDERVALUES_AWS: () => BM,
  FAASINVOKEDPROVIDERVALUES_AZURE: () => VM,
  FAASINVOKEDPROVIDERVALUES_GCP: () => kM,
  FAASTRIGGERVALUES_DATASOURCE: () => OM,
  FAASTRIGGERVALUES_HTTP: () => PM,
  FAASTRIGGERVALUES_OTHER: () => IM,
  FAASTRIGGERVALUES_PUBSUB: () => NM,
  FAASTRIGGERVALUES_TIMER: () => wM,
  FaasDocumentOperationValues: () => UM,
  FaasInvokedProviderValues: () => HM,
  FaasTriggerValues: () => MM,
  HOSTARCHVALUES_AMD64: () => e4,
  HOSTARCHVALUES_ARM32: () => t4,
  HOSTARCHVALUES_ARM64: () => r4,
  HOSTARCHVALUES_IA64: () => n4,
  HOSTARCHVALUES_PPC32: () => o4,
  HOSTARCHVALUES_PPC64: () => i4,
  HOSTARCHVALUES_X86: () => a4,
  HTTPFLAVORVALUES_HTTP_1_0: () => xL,
  HTTPFLAVORVALUES_HTTP_1_1: () => CL,
  HTTPFLAVORVALUES_HTTP_2_0: () => RL,
  HTTPFLAVORVALUES_QUIC: () => PL,
  HTTPFLAVORVALUES_SPDY: () => OL,
  HTTP_REQUEST_METHOD_VALUE_CONNECT: () => v8,
  HTTP_REQUEST_METHOD_VALUE_DELETE: () => S8,
  HTTP_REQUEST_METHOD_VALUE_GET: () => y8,
  HTTP_REQUEST_METHOD_VALUE_HEAD: () => A8,
  HTTP_REQUEST_METHOD_VALUE_OPTIONS: () => b8,
  HTTP_REQUEST_METHOD_VALUE_OTHER: () => T8,
  HTTP_REQUEST_METHOD_VALUE_PATCH: () => x8,
  HTTP_REQUEST_METHOD_VALUE_POST: () => C8,
  HTTP_REQUEST_METHOD_VALUE_PUT: () => R8,
  HTTP_REQUEST_METHOD_VALUE_TRACE: () => O8,
  HostArchValues: () => s4,
  HttpFlavorValues: () => NL,
  JVM_MEMORY_TYPE_VALUE_HEAP: () => F8,
  JVM_MEMORY_TYPE_VALUE_NON_HEAP: () => B8,
  JVM_THREAD_STATE_VALUE_BLOCKED: () => H8,
  JVM_THREAD_STATE_VALUE_NEW: () => G8,
  JVM_THREAD_STATE_VALUE_RUNNABLE: () => Y8,
  JVM_THREAD_STATE_VALUE_TERMINATED: () => j8,
  JVM_THREAD_STATE_VALUE_TIMED_WAITING: () => z8,
  JVM_THREAD_STATE_VALUE_WAITING: () => W8,
  MESSAGETYPEVALUES_RECEIVED: () => r9,
  MESSAGETYPEVALUES_SENT: () => t9,
  MESSAGINGDESTINATIONKINDVALUES_QUEUE: () => wL,
  MESSAGINGDESTINATIONKINDVALUES_TOPIC: () => IL,
  MESSAGINGOPERATIONVALUES_PROCESS: () => $L,
  MESSAGINGOPERATIONVALUES_RECEIVE: () => LL,
  METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS: () => M5,
  METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES: () => L5,
  METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS: () => $5,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS: () => F5,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION: () => U5,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE: () => D5,
  METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS: () => B5,
  METRIC_HTTP_CLIENT_REQUEST_DURATION: () => V5,
  METRIC_HTTP_SERVER_REQUEST_DURATION: () => k5,
  METRIC_JVM_CLASS_COUNT: () => H5,
  METRIC_JVM_CLASS_LOADED: () => G5,
  METRIC_JVM_CLASS_UNLOADED: () => Y5,
  METRIC_JVM_CPU_COUNT: () => j5,
  METRIC_JVM_CPU_RECENT_UTILIZATION: () => z5,
  METRIC_JVM_CPU_TIME: () => W5,
  METRIC_JVM_GC_DURATION: () => K5,
  METRIC_JVM_MEMORY_COMMITTED: () => X5,
  METRIC_JVM_MEMORY_LIMIT: () => q5,
  METRIC_JVM_MEMORY_USED: () => Z5,
  METRIC_JVM_MEMORY_USED_AFTER_LAST_GC: () => Q5,
  METRIC_JVM_THREAD_COUNT: () => J5,
  METRIC_KESTREL_ACTIVE_CONNECTIONS: () => e6,
  METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES: () => t6,
  METRIC_KESTREL_CONNECTION_DURATION: () => r6,
  METRIC_KESTREL_QUEUED_CONNECTIONS: () => n6,
  METRIC_KESTREL_QUEUED_REQUESTS: () => o6,
  METRIC_KESTREL_REJECTED_CONNECTIONS: () => i6,
  METRIC_KESTREL_TLS_HANDSHAKE_DURATION: () => a6,
  METRIC_KESTREL_UPGRADED_CONNECTIONS: () => s6,
  METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS: () => u6,
  METRIC_SIGNALR_SERVER_CONNECTION_DURATION: () => l6,
  MessageTypeValues: () => n9,
  MessagingDestinationKindValues: () => ML,
  MessagingOperationValues: () => DL,
  NETHOSTCONNECTIONSUBTYPEVALUES_CDMA: () => aL,
  NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT: () => lL,
  NETHOSTCONNECTIONSUBTYPEVALUES_EDGE: () => oL,
  NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD: () => hL,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0: () => sL,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A: () => uL,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B: () => mL,
  NETHOSTCONNECTIONSUBTYPEVALUES_GPRS: () => nL,
  NETHOSTCONNECTIONSUBTYPEVALUES_GSM: () => EL,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA: () => cL,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSPA: () => fL,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP: () => gL,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA: () => dL,
  NETHOSTCONNECTIONSUBTYPEVALUES_IDEN: () => pL,
  NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN: () => vL,
  NETHOSTCONNECTIONSUBTYPEVALUES_LTE: () => _L,
  NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA: () => AL,
  NETHOSTCONNECTIONSUBTYPEVALUES_NR: () => SL,
  NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA: () => yL,
  NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA: () => TL,
  NETHOSTCONNECTIONSUBTYPEVALUES_UMTS: () => iL,
  NETHOSTCONNECTIONTYPEVALUES_CELL: () => JM,
  NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE: () => eL,
  NETHOSTCONNECTIONTYPEVALUES_UNKNOWN: () => tL,
  NETHOSTCONNECTIONTYPEVALUES_WIFI: () => ZM,
  NETHOSTCONNECTIONTYPEVALUES_WIRED: () => QM,
  NETTRANSPORTVALUES_INPROC: () => KM,
  NETTRANSPORTVALUES_IP: () => jM,
  NETTRANSPORTVALUES_IP_TCP: () => GM,
  NETTRANSPORTVALUES_IP_UDP: () => YM,
  NETTRANSPORTVALUES_OTHER: () => XM,
  NETTRANSPORTVALUES_PIPE: () => WM,
  NETTRANSPORTVALUES_UNIX: () => zM,
  NETWORK_TRANSPORT_VALUE_PIPE: () => t5,
  NETWORK_TRANSPORT_VALUE_QUIC: () => r5,
  NETWORK_TRANSPORT_VALUE_TCP: () => n5,
  NETWORK_TRANSPORT_VALUE_UDP: () => o5,
  NETWORK_TRANSPORT_VALUE_UNIX: () => i5,
  NETWORK_TYPE_VALUE_IPV4: () => s5,
  NETWORK_TYPE_VALUE_IPV6: () => u5,
  NetHostConnectionSubtypeValues: () => bL,
  NetHostConnectionTypeValues: () => rL,
  NetTransportValues: () => qM,
  OSTYPEVALUES_AIX: () => h4,
  OSTYPEVALUES_DARWIN: () => c4,
  OSTYPEVALUES_DRAGONFLYBSD: () => m4,
  OSTYPEVALUES_FREEBSD: () => d4,
  OSTYPEVALUES_HPUX: () => _4,
  OSTYPEVALUES_LINUX: () => l4,
  OSTYPEVALUES_NETBSD: () => f4,
  OSTYPEVALUES_OPENBSD: () => p4,
  OSTYPEVALUES_SOLARIS: () => g4,
  OSTYPEVALUES_WINDOWS: () => u4,
  OSTYPEVALUES_Z_OS: () => E4,
  OTEL_STATUS_CODE_VALUE_ERROR: () => f5,
  OTEL_STATUS_CODE_VALUE_OK: () => p5,
  OsTypeValues: () => T4,
  RPCGRPCSTATUSCODEVALUES_ABORTED: () => WL,
  RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS: () => GL,
  RPCGRPCSTATUSCODEVALUES_CANCELLED: () => FL,
  RPCGRPCSTATUSCODEVALUES_DATA_LOSS: () => QL,
  RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED: () => kL,
  RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION: () => zL,
  RPCGRPCSTATUSCODEVALUES_INTERNAL: () => qL,
  RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT: () => VL,
  RPCGRPCSTATUSCODEVALUES_NOT_FOUND: () => HL,
  RPCGRPCSTATUSCODEVALUES_OK: () => UL,
  RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE: () => KL,
  RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED: () => YL,
  RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED: () => jL,
  RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED: () => JL,
  RPCGRPCSTATUSCODEVALUES_UNAVAILABLE: () => ZL,
  RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED: () => XL,
  RPCGRPCSTATUSCODEVALUES_UNKNOWN: () => BL,
  RpcGrpcStatusCodeValues: () => e9,
  SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET: () => Nw,
  SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: () => Hw,
  SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ: () => Rw,
  SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY: () => Aw,
  SEMATTRS_AWS_DYNAMODB_COUNT: () => Vw,
  SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE: () => $w,
  SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: () => Mw,
  SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: () => Gw,
  SEMATTRS_AWS_DYNAMODB_INDEX_NAME: () => ww,
  SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS: () => bw,
  SEMATTRS_AWS_DYNAMODB_LIMIT: () => Pw,
  SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: () => Lw,
  SEMATTRS_AWS_DYNAMODB_PROJECTION: () => Ow,
  SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: () => xw,
  SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: () => Cw,
  SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT: () => kw,
  SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD: () => Uw,
  SEMATTRS_AWS_DYNAMODB_SEGMENT: () => Fw,
  SEMATTRS_AWS_DYNAMODB_SELECT: () => Iw,
  SEMATTRS_AWS_DYNAMODB_TABLE_COUNT: () => Dw,
  SEMATTRS_AWS_DYNAMODB_TABLE_NAMES: () => yw,
  SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS: () => Bw,
  SEMATTRS_AWS_LAMBDA_INVOKED_ARN: () => pN,
  SEMATTRS_CODE_FILEPATH: () => mw,
  SEMATTRS_CODE_FUNCTION: () => fw,
  SEMATTRS_CODE_LINENO: () => _w,
  SEMATTRS_CODE_NAMESPACE: () => pw,
  SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL: () => bN,
  SEMATTRS_DB_CASSANDRA_COORDINATOR_DC: () => PN,
  SEMATTRS_DB_CASSANDRA_COORDINATOR_ID: () => ON,
  SEMATTRS_DB_CASSANDRA_IDEMPOTENCE: () => CN,
  SEMATTRS_DB_CASSANDRA_KEYSPACE: () => yN,
  SEMATTRS_DB_CASSANDRA_PAGE_SIZE: () => AN,
  SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: () => RN,
  SEMATTRS_DB_CASSANDRA_TABLE: () => xN,
  SEMATTRS_DB_CONNECTION_STRING: () => _N,
  SEMATTRS_DB_HBASE_NAMESPACE: () => NN,
  SEMATTRS_DB_JDBC_DRIVER_CLASSNAME: () => gN,
  SEMATTRS_DB_MONGODB_COLLECTION: () => IN,
  SEMATTRS_DB_MSSQL_INSTANCE_NAME: () => SN,
  SEMATTRS_DB_NAME: () => EN,
  SEMATTRS_DB_OPERATION: () => vN,
  SEMATTRS_DB_REDIS_DATABASE_INDEX: () => wN,
  SEMATTRS_DB_SQL_TABLE: () => MN,
  SEMATTRS_DB_STATEMENT: () => TN,
  SEMATTRS_DB_SYSTEM: () => mN,
  SEMATTRS_DB_USER: () => hN,
  SEMATTRS_ENDUSER_ID: () => sw,
  SEMATTRS_ENDUSER_ROLE: () => uw,
  SEMATTRS_ENDUSER_SCOPE: () => lw,
  SEMATTRS_EXCEPTION_ESCAPED: () => LN,
  SEMATTRS_EXCEPTION_MESSAGE: () => ii,
  SEMATTRS_EXCEPTION_STACKTRACE: () => vc,
  SEMATTRS_EXCEPTION_TYPE: () => oi,
  SEMATTRS_FAAS_COLDSTART: () => GN,
  SEMATTRS_FAAS_CRON: () => HN,
  SEMATTRS_FAAS_DOCUMENT_COLLECTION: () => UN,
  SEMATTRS_FAAS_DOCUMENT_NAME: () => VN,
  SEMATTRS_FAAS_DOCUMENT_OPERATION: () => FN,
  SEMATTRS_FAAS_DOCUMENT_TIME: () => BN,
  SEMATTRS_FAAS_EXECUTION: () => DN,
  SEMATTRS_FAAS_INVOKED_NAME: () => YN,
  SEMATTRS_FAAS_INVOKED_PROVIDER: () => jN,
  SEMATTRS_FAAS_INVOKED_REGION: () => zN,
  SEMATTRS_FAAS_TIME: () => kN,
  SEMATTRS_FAAS_TRIGGER: () => $N,
  SEMATTRS_HTTP_CLIENT_IP: () => Sw,
  SEMATTRS_HTTP_FLAVOR: () => gw,
  SEMATTRS_HTTP_HOST: () => Ac,
  SEMATTRS_HTTP_METHOD: () => Sc,
  SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH: () => Ew,
  SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: () => Rc,
  SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH: () => Oc,
  SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: () => Pc,
  SEMATTRS_HTTP_ROUTE: () => vw,
  SEMATTRS_HTTP_SCHEME: () => bc,
  SEMATTRS_HTTP_SERVER_NAME: () => Tw,
  SEMATTRS_HTTP_STATUS_CODE: () => xc,
  SEMATTRS_HTTP_TARGET: () => hw,
  SEMATTRS_HTTP_URL: () => yc,
  SEMATTRS_HTTP_USER_AGENT: () => Cc,
  SEMATTRS_MESSAGE_COMPRESSED_SIZE: () => TI,
  SEMATTRS_MESSAGE_ID: () => EI,
  SEMATTRS_MESSAGE_TYPE: () => gI,
  SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE: () => vI,
  SEMATTRS_MESSAGING_CONSUMER_ID: () => rI,
  SEMATTRS_MESSAGING_CONVERSATION_ID: () => Qw,
  SEMATTRS_MESSAGING_DESTINATION: () => jw,
  SEMATTRS_MESSAGING_DESTINATION_KIND: () => zw,
  SEMATTRS_MESSAGING_KAFKA_CLIENT_ID: () => aI,
  SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP: () => iI,
  SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY: () => oI,
  SEMATTRS_MESSAGING_KAFKA_PARTITION: () => sI,
  SEMATTRS_MESSAGING_KAFKA_TOMBSTONE: () => uI,
  SEMATTRS_MESSAGING_MESSAGE_ID: () => Zw,
  SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: () => eI,
  SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: () => Jw,
  SEMATTRS_MESSAGING_OPERATION: () => tI,
  SEMATTRS_MESSAGING_PROTOCOL: () => Kw,
  SEMATTRS_MESSAGING_PROTOCOL_VERSION: () => Xw,
  SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY: () => nI,
  SEMATTRS_MESSAGING_SYSTEM: () => Yw,
  SEMATTRS_MESSAGING_TEMP_DESTINATION: () => Ww,
  SEMATTRS_MESSAGING_URL: () => qw,
  SEMATTRS_NET_HOST_CARRIER_ICC: () => iw,
  SEMATTRS_NET_HOST_CARRIER_MCC: () => nw,
  SEMATTRS_NET_HOST_CARRIER_MNC: () => ow,
  SEMATTRS_NET_HOST_CARRIER_NAME: () => rw,
  SEMATTRS_NET_HOST_CONNECTION_SUBTYPE: () => tw,
  SEMATTRS_NET_HOST_CONNECTION_TYPE: () => ew,
  SEMATTRS_NET_HOST_IP: () => ZN,
  SEMATTRS_NET_HOST_NAME: () => JN,
  SEMATTRS_NET_HOST_PORT: () => QN,
  SEMATTRS_NET_PEER_IP: () => KN,
  SEMATTRS_NET_PEER_NAME: () => qN,
  SEMATTRS_NET_PEER_PORT: () => XN,
  SEMATTRS_NET_TRANSPORT: () => WN,
  SEMATTRS_PEER_SERVICE: () => aw,
  SEMATTRS_RPC_GRPC_STATUS_CODE: () => fI,
  SEMATTRS_RPC_JSONRPC_ERROR_CODE: () => _I,
  SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE: () => hI,
  SEMATTRS_RPC_JSONRPC_REQUEST_ID: () => mI,
  SEMATTRS_RPC_JSONRPC_VERSION: () => pI,
  SEMATTRS_RPC_METHOD: () => dI,
  SEMATTRS_RPC_SERVICE: () => cI,
  SEMATTRS_RPC_SYSTEM: () => lI,
  SEMATTRS_THREAD_ID: () => cw,
  SEMATTRS_THREAD_NAME: () => dw,
  SEMRESATTRS_AWS_ECS_CLUSTER_ARN: () => c9,
  SEMRESATTRS_AWS_ECS_CONTAINER_ARN: () => l9,
  SEMRESATTRS_AWS_ECS_LAUNCHTYPE: () => d9,
  SEMRESATTRS_AWS_ECS_TASK_ARN: () => f9,
  SEMRESATTRS_AWS_ECS_TASK_FAMILY: () => p9,
  SEMRESATTRS_AWS_ECS_TASK_REVISION: () => m9,
  SEMRESATTRS_AWS_EKS_CLUSTER_ARN: () => _9,
  SEMRESATTRS_AWS_LOG_GROUP_ARNS: () => g9,
  SEMRESATTRS_AWS_LOG_GROUP_NAMES: () => h9,
  SEMRESATTRS_AWS_LOG_STREAM_ARNS: () => T9,
  SEMRESATTRS_AWS_LOG_STREAM_NAMES: () => E9,
  SEMRESATTRS_CLOUD_ACCOUNT_ID: () => i9,
  SEMRESATTRS_CLOUD_AVAILABILITY_ZONE: () => s9,
  SEMRESATTRS_CLOUD_PLATFORM: () => u9,
  SEMRESATTRS_CLOUD_PROVIDER: () => o9,
  SEMRESATTRS_CLOUD_REGION: () => a9,
  SEMRESATTRS_CONTAINER_ID: () => S9,
  SEMRESATTRS_CONTAINER_IMAGE_NAME: () => A9,
  SEMRESATTRS_CONTAINER_IMAGE_TAG: () => b9,
  SEMRESATTRS_CONTAINER_NAME: () => v9,
  SEMRESATTRS_CONTAINER_RUNTIME: () => y9,
  SEMRESATTRS_DEPLOYMENT_ENVIRONMENT: () => x9,
  SEMRESATTRS_DEVICE_ID: () => C9,
  SEMRESATTRS_DEVICE_MODEL_IDENTIFIER: () => R9,
  SEMRESATTRS_DEVICE_MODEL_NAME: () => O9,
  SEMRESATTRS_FAAS_ID: () => N9,
  SEMRESATTRS_FAAS_INSTANCE: () => I9,
  SEMRESATTRS_FAAS_MAX_MEMORY: () => M9,
  SEMRESATTRS_FAAS_NAME: () => P9,
  SEMRESATTRS_FAAS_VERSION: () => w9,
  SEMRESATTRS_HOST_ARCH: () => U9,
  SEMRESATTRS_HOST_ID: () => L9,
  SEMRESATTRS_HOST_IMAGE_ID: () => B9,
  SEMRESATTRS_HOST_IMAGE_NAME: () => F9,
  SEMRESATTRS_HOST_IMAGE_VERSION: () => V9,
  SEMRESATTRS_HOST_NAME: () => $9,
  SEMRESATTRS_HOST_TYPE: () => D9,
  SEMRESATTRS_K8S_CLUSTER_NAME: () => k9,
  SEMRESATTRS_K8S_CONTAINER_NAME: () => W9,
  SEMRESATTRS_K8S_CRONJOB_NAME: () => i$,
  SEMRESATTRS_K8S_CRONJOB_UID: () => o$,
  SEMRESATTRS_K8S_DAEMONSET_NAME: () => t$,
  SEMRESATTRS_K8S_DAEMONSET_UID: () => e$,
  SEMRESATTRS_K8S_DEPLOYMENT_NAME: () => Z9,
  SEMRESATTRS_K8S_DEPLOYMENT_UID: () => q9,
  SEMRESATTRS_K8S_JOB_NAME: () => n$,
  SEMRESATTRS_K8S_JOB_UID: () => r$,
  SEMRESATTRS_K8S_NAMESPACE_NAME: () => Y9,
  SEMRESATTRS_K8S_NODE_NAME: () => H9,
  SEMRESATTRS_K8S_NODE_UID: () => G9,
  SEMRESATTRS_K8S_POD_NAME: () => z9,
  SEMRESATTRS_K8S_POD_UID: () => j9,
  SEMRESATTRS_K8S_REPLICASET_NAME: () => X9,
  SEMRESATTRS_K8S_REPLICASET_UID: () => K9,
  SEMRESATTRS_K8S_STATEFULSET_NAME: () => J9,
  SEMRESATTRS_K8S_STATEFULSET_UID: () => Q9,
  SEMRESATTRS_OS_DESCRIPTION: () => s$,
  SEMRESATTRS_OS_NAME: () => u$,
  SEMRESATTRS_OS_TYPE: () => a$,
  SEMRESATTRS_OS_VERSION: () => l$,
  SEMRESATTRS_PROCESS_COMMAND: () => p$,
  SEMRESATTRS_PROCESS_COMMAND_ARGS: () => _$,
  SEMRESATTRS_PROCESS_COMMAND_LINE: () => m$,
  SEMRESATTRS_PROCESS_EXECUTABLE_NAME: () => d$,
  SEMRESATTRS_PROCESS_EXECUTABLE_PATH: () => f$,
  SEMRESATTRS_PROCESS_OWNER: () => h$,
  SEMRESATTRS_PROCESS_PID: () => c$,
  SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION: () => T$,
  SEMRESATTRS_PROCESS_RUNTIME_NAME: () => g$,
  SEMRESATTRS_PROCESS_RUNTIME_VERSION: () => E$,
  SEMRESATTRS_SERVICE_INSTANCE_ID: () => S$,
  SEMRESATTRS_SERVICE_NAME: () => Nc,
  SEMRESATTRS_SERVICE_NAMESPACE: () => v$,
  SEMRESATTRS_SERVICE_VERSION: () => y$,
  SEMRESATTRS_TELEMETRY_AUTO_VERSION: () => A$,
  SEMRESATTRS_TELEMETRY_SDK_LANGUAGE: () => za,
  SEMRESATTRS_TELEMETRY_SDK_NAME: () => ja,
  SEMRESATTRS_TELEMETRY_SDK_VERSION: () => Wa,
  SEMRESATTRS_WEBENGINE_DESCRIPTION: () => C$,
  SEMRESATTRS_WEBENGINE_NAME: () => b$,
  SEMRESATTRS_WEBENGINE_VERSION: () => x$,
  SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN: () => v5,
  SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE: () => S5,
  SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT: () => y5,
  SIGNALR_TRANSPORT_VALUE_LONG_POLLING: () => b5,
  SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS: () => x5,
  SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS: () => C5,
  SemanticAttributes: () => SI,
  SemanticResourceAttributes: () => R$,
  TELEMETRYSDKLANGUAGEVALUES_CPP: () => v4,
  TELEMETRYSDKLANGUAGEVALUES_DOTNET: () => S4,
  TELEMETRYSDKLANGUAGEVALUES_ERLANG: () => y4,
  TELEMETRYSDKLANGUAGEVALUES_GO: () => A4,
  TELEMETRYSDKLANGUAGEVALUES_JAVA: () => b4,
  TELEMETRYSDKLANGUAGEVALUES_NODEJS: () => x4,
  TELEMETRYSDKLANGUAGEVALUES_PHP: () => C4,
  TELEMETRYSDKLANGUAGEVALUES_PYTHON: () => R4,
  TELEMETRYSDKLANGUAGEVALUES_RUBY: () => O4,
  TELEMETRYSDKLANGUAGEVALUES_WEBJS: () => P4,
  TELEMETRY_SDK_LANGUAGE_VALUE_CPP: () => U4,
  TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET: () => F4,
  TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG: () => B4,
  TELEMETRY_SDK_LANGUAGE_VALUE_GO: () => V4,
  TELEMETRY_SDK_LANGUAGE_VALUE_JAVA: () => k4,
  TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS: () => H4,
  TELEMETRY_SDK_LANGUAGE_VALUE_PHP: () => G4,
  TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON: () => Y4,
  TELEMETRY_SDK_LANGUAGE_VALUE_RUBY: () => j4,
  TELEMETRY_SDK_LANGUAGE_VALUE_RUST: () => z4,
  TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT: () => W4,
  TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS: () => K4,
  TelemetrySdkLanguageValues: () => N4
});
var Qn = H(() => {
  c();
  jv();
  g1();
  E1();
  T1()
}
);
var S1 = W(Ka => {
  "use strict";
  c();
  Object.defineProperty(Ka, "__esModule", {
    value: !0
  });
  Ka.SDK_INFO = void 0;
  var c6 = Ec()
    , ai = (Qn(),
      He(v1));
  Ka.SDK_INFO = {
    [ai.SEMRESATTRS_TELEMETRY_SDK_NAME]: "opentelemetry",
    [ai.SEMRESATTRS_PROCESS_RUNTIME_NAME]: "browser",
    [ai.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE]: ai.TELEMETRYSDKLANGUAGEVALUES_WEBJS,
    [ai.SEMRESATTRS_TELEMETRY_SDK_VERSION]: c6.VERSION
  }
}
);
var y1 = W(Xa => {
  "use strict";
  c();
  Object.defineProperty(Xa, "__esModule", {
    value: !0
  });
  Xa.unrefTimer = void 0;
  function d6(e) { }
  a(d6, "unrefTimer");
  Xa.unrefTimer = d6
}
);
var wc = W(je => {
  "use strict";
  c();
  Object.defineProperty(je, "__esModule", {
    value: !0
  });
  je.unrefTimer = je.SDK_INFO = je.otperformance = je.RandomIdGenerator = je.hexToBase64 = je._globalThis = je.getEnv = je.getEnvWithoutDefaults = void 0;
  var A1 = Xh();
  Object.defineProperty(je, "getEnvWithoutDefaults", {
    enumerable: !0,
    get: a(function() {
      return A1.getEnvWithoutDefaults
    }, "get")
  });
  Object.defineProperty(je, "getEnv", {
    enumerable: !0,
    get: a(function() {
      return A1.getEnv
    }, "get")
  });
  var f6 = pc();
  Object.defineProperty(je, "_globalThis", {
    enumerable: !0,
    get: a(function() {
      return f6._globalThis
    }, "get")
  });
  var p6 = Zh();
  Object.defineProperty(je, "hexToBase64", {
    enumerable: !0,
    get: a(function() {
      return p6.hexToBase64
    }, "get")
  });
  var m6 = Jh();
  Object.defineProperty(je, "RandomIdGenerator", {
    enumerable: !0,
    get: a(function() {
      return m6.RandomIdGenerator
    }, "get")
  });
  var _6 = e0();
  Object.defineProperty(je, "otperformance", {
    enumerable: !0,
    get: a(function() {
      return _6.otperformance
    }, "get")
  });
  var h6 = S1();
  Object.defineProperty(je, "SDK_INFO", {
    enumerable: !0,
    get: a(function() {
      return h6.SDK_INFO
    }, "get")
  });
  var g6 = y1();
  Object.defineProperty(je, "unrefTimer", {
    enumerable: !0,
    get: a(function() {
      return g6.unrefTimer
    }, "get")
  })
}
);
var R1 = W(he => {
  "use strict";
  c();
  Object.defineProperty(he, "__esModule", {
    value: !0
  });
  he.addHrTimes = he.isTimeInput = he.isTimeInputHrTime = he.hrTimeToMicroseconds = he.hrTimeToMilliseconds = he.hrTimeToNanoseconds = he.hrTimeToTimeStamp = he.hrTimeDuration = he.timeInputToHrTime = he.hrTime = he.getTimeOrigin = he.millisToHrTime = void 0;
  var Ic = wc()
    , b1 = 9
    , E6 = 6
    , T6 = Math.pow(10, E6)
    , qa = Math.pow(10, b1);
  function si(e) {
    let t = e / 1e3
      , r = Math.trunc(t)
      , n = Math.round(e % 1e3 * T6);
    return [r, n]
  }
  a(si, "millisToHrTime");
  he.millisToHrTime = si;
  function Mc() {
    let e = Ic.otperformance.timeOrigin;
    if (typeof e != "number") {
      let t = Ic.otperformance;
      e = t.timing && t.timing.fetchStart
    }
    return e
  }
  a(Mc, "getTimeOrigin");
  he.getTimeOrigin = Mc;
  function x1(e) {
    let t = si(Mc())
      , r = si(typeof e == "number" ? e : Ic.otperformance.now());
    return C1(t, r)
  }
  a(x1, "hrTime");
  he.hrTime = x1;
  function v6(e) {
    if (Lc(e))
      return e;
    if (typeof e == "number")
      return e < Mc() ? x1(e) : si(e);
    if (e instanceof Date)
      return si(e.getTime());
    throw TypeError("Invalid input type")
  }
  a(v6, "timeInputToHrTime");
  he.timeInputToHrTime = v6;
  function S6(e, t) {
    let r = t[0] - e[0]
      , n = t[1] - e[1];
    return n < 0 && (r -= 1,
      n += qa),
      [r, n]
  }
  a(S6, "hrTimeDuration");
  he.hrTimeDuration = S6;
  function y6(e) {
    let t = b1
      , r = `${"0".repeat(t)}${e[1]}Z`
      , n = r.substring(r.length - t - 1);
    return new Date(e[0] * 1e3).toISOString().replace("000Z", n)
  }
  a(y6, "hrTimeToTimeStamp");
  he.hrTimeToTimeStamp = y6;
  function A6(e) {
    return e[0] * qa + e[1]
  }
  a(A6, "hrTimeToNanoseconds");
  he.hrTimeToNanoseconds = A6;
  function b6(e) {
    return e[0] * 1e3 + e[1] / 1e6
  }
  a(b6, "hrTimeToMilliseconds");
  he.hrTimeToMilliseconds = b6;
  function x6(e) {
    return e[0] * 1e6 + e[1] / 1e3
  }
  a(x6, "hrTimeToMicroseconds");
  he.hrTimeToMicroseconds = x6;
  function Lc(e) {
    return Array.isArray(e) && e.length === 2 && typeof e[0] == "number" && typeof e[1] == "number"
  }
  a(Lc, "isTimeInputHrTime");
  he.isTimeInputHrTime = Lc;
  function C6(e) {
    return Lc(e) || typeof e == "number" || e instanceof Date
  }
  a(C6, "isTimeInput");
  he.isTimeInput = C6;
  function C1(e, t) {
    let r = [e[0] + t[0], e[1] + t[1]];
    return r[1] >= qa && (r[1] -= qa,
      r[0] += 1),
      r
  }
  a(C1, "addHrTimes");
  he.addHrTimes = C1
}
);
var O1 = W(ui => {
  "use strict";
  c();
  Object.defineProperty(ui, "__esModule", {
    value: !0
  });
  ui.ExportResultCode = void 0;
  var R6;
  (function(e) {
    e[e.SUCCESS = 0] = "SUCCESS",
      e[e.FAILED = 1] = "FAILED"
  }
  )(R6 = ui.ExportResultCode || (ui.ExportResultCode = {}))
}
);
var N1 = W(Za => {
  "use strict";
  c();
  Object.defineProperty(Za, "__esModule", {
    value: !0
  });
  Za.CompositePropagator = void 0;
  var P1 = (G(),
    He(Ae))
    , Dc = class Dc {
      constructor(t = {}) {
        var r;
        this._propagators = (r = t.propagators) !== null && r !== void 0 ? r : [],
          this._fields = Array.from(new Set(this._propagators.map(n => typeof n.fields == "function" ? n.fields() : []).reduce((n, o) => n.concat(o), [])))
      }
      inject(t, r, n) {
        for (let o of this._propagators)
          try {
            o.inject(t, r, n)
          } catch (i) {
            P1.diag.warn(`Failed to inject with ${o.constructor.name}. Err: ${i.message}`)
          }
      }
      extract(t, r, n) {
        return this._propagators.reduce((o, i) => {
          try {
            return i.extract(o, r, n)
          } catch (s) {
            P1.diag.warn(`Failed to extract with ${i.constructor.name}. Err: ${s.message}`)
          }
          return o
        }
          , t)
      }
      fields() {
        return this._fields.slice()
      }
    }
    ;
  a(Dc, "CompositePropagator");
  var $c = Dc;
  Za.CompositePropagator = $c
}
);
var w1 = W(Jn => {
  "use strict";
  c();
  Object.defineProperty(Jn, "__esModule", {
    value: !0
  });
  Jn.validateValue = Jn.validateKey = void 0;
  var Uc = "[_0-9a-z-*/]"
    , O6 = `[a-z]${Uc}{0,255}`
    , P6 = `[a-z0-9]${Uc}{0,240}@[a-z]${Uc}{0,13}`
    , N6 = new RegExp(`^(?:${O6}|${P6})$`)
    , w6 = /^[ -~]{0,255}[!-~]$/
    , I6 = /,|=/;
  function M6(e) {
    return N6.test(e)
  }
  a(M6, "validateKey");
  Jn.validateKey = M6;
  function L6(e) {
    return w6.test(e) && !I6.test(e)
  }
  a(L6, "validateValue");
  Jn.validateValue = L6
}
);
var Bc = W(Ja => {
  "use strict";
  c();
  Object.defineProperty(Ja, "__esModule", {
    value: !0
  });
  Ja.TraceState = void 0;
  var I1 = w1()
    , M1 = 32
    , $6 = 512
    , L1 = ","
    , $1 = "="
    , Qa = class Qa {
      constructor(t) {
        this._internalState = new Map,
          t && this._parse(t)
      }
      set(t, r) {
        let n = this._clone();
        return n._internalState.has(t) && n._internalState.delete(t),
          n._internalState.set(t, r),
          n
      }
      unset(t) {
        let r = this._clone();
        return r._internalState.delete(t),
          r
      }
      get(t) {
        return this._internalState.get(t)
      }
      serialize() {
        return this._keys().reduce((t, r) => (t.push(r + $1 + this.get(r)),
          t), []).join(L1)
      }
      _parse(t) {
        t.length > $6 || (this._internalState = t.split(L1).reverse().reduce((r, n) => {
          let o = n.trim()
            , i = o.indexOf($1);
          if (i !== -1) {
            let s = o.slice(0, i)
              , l = o.slice(i + 1, n.length);
            (0,
              I1.validateKey)(s) && (0,
                I1.validateValue)(l) && r.set(s, l)
          }
          return r
        }
          , new Map),
          this._internalState.size > M1 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, M1))))
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse()
      }
      _clone() {
        let t = new Qa;
        return t._internalState = new Map(this._internalState),
          t
      }
    }
    ;
  a(Qa, "TraceState");
  var Fc = Qa;
  Ja.TraceState = Fc
}
);
var U1 = W(it => {
  "use strict";
  c();
  Object.defineProperty(it, "__esModule", {
    value: !0
  });
  it.W3CTraceContextPropagator = it.parseTraceParent = it.TRACE_STATE_HEADER = it.TRACE_PARENT_HEADER = void 0;
  var es = (G(),
    He(Ae))
    , D6 = ri()
    , U6 = Bc();
  it.TRACE_PARENT_HEADER = "traceparent";
  it.TRACE_STATE_HEADER = "tracestate";
  var F6 = "00"
    , B6 = "(?!ff)[\\da-f]{2}"
    , V6 = "(?![0]{32})[\\da-f]{32}"
    , k6 = "(?![0]{16})[\\da-f]{16}"
    , H6 = "[\\da-f]{2}"
    , G6 = new RegExp(`^\\s?(${B6})-(${V6})-(${k6})-(${H6})(-.*)?\\s?$`);
  function D1(e) {
    let t = G6.exec(e);
    return !t || t[1] === "00" && t[5] ? null : {
      traceId: t[2],
      spanId: t[3],
      traceFlags: parseInt(t[4], 16)
    }
  }
  a(D1, "parseTraceParent");
  it.parseTraceParent = D1;
  var kc = class kc {
    inject(t, r, n) {
      let o = es.trace.getSpanContext(t);
      if (!o || (0,
        D6.isTracingSuppressed)(t) || !(0,
          es.isSpanContextValid)(o))
        return;
      let i = `${F6}-${o.traceId}-${o.spanId}-0${Number(o.traceFlags || es.TraceFlags.NONE).toString(16)}`;
      n.set(r, it.TRACE_PARENT_HEADER, i),
        o.traceState && n.set(r, it.TRACE_STATE_HEADER, o.traceState.serialize())
    }
    extract(t, r, n) {
      let o = n.get(r, it.TRACE_PARENT_HEADER);
      if (!o)
        return t;
      let i = Array.isArray(o) ? o[0] : o;
      if (typeof i != "string")
        return t;
      let s = D1(i);
      if (!s)
        return t;
      s.isRemote = !0;
      let l = n.get(r, it.TRACE_STATE_HEADER);
      if (l) {
        let d = Array.isArray(l) ? l.join(",") : l;
        s.traceState = new U6.TraceState(typeof d == "string" ? d : void 0)
      }
      return es.trace.setSpanContext(t, s)
    }
    fields() {
      return [it.TRACE_PARENT_HEADER, it.TRACE_STATE_HEADER]
    }
  }
    ;
  a(kc, "W3CTraceContextPropagator");
  var Vc = kc;
  it.W3CTraceContextPropagator = Vc
}
);
var F1 = W(Yt => {
  "use strict";
  c();
  Object.defineProperty(Yt, "__esModule", {
    value: !0
  });
  Yt.getRPCMetadata = Yt.deleteRPCMetadata = Yt.setRPCMetadata = Yt.RPCType = void 0;
  var Y6 = (G(),
    He(Ae)), Hc = (0,
      Y6.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"), j6;
  (function(e) {
    e.HTTP = "http"
  }
  )(j6 = Yt.RPCType || (Yt.RPCType = {}));
  function z6(e, t) {
    return e.setValue(Hc, t)
  }
  a(z6, "setRPCMetadata");
  Yt.setRPCMetadata = z6;
  function W6(e) {
    return e.deleteValue(Hc)
  }
  a(W6, "deleteRPCMetadata");
  Yt.deleteRPCMetadata = W6;
  function K6(e) {
    return e.getValue(Hc)
  }
  a(K6, "getRPCMetadata");
  Yt.getRPCMetadata = K6
}
);
var jc = W(ts => {
  "use strict";
  c();
  Object.defineProperty(ts, "__esModule", {
    value: !0
  });
  ts.AlwaysOffSampler = void 0;
  var X6 = (G(),
    He(Ae))
    , Yc = class Yc {
      shouldSample() {
        return {
          decision: X6.SamplingDecision.NOT_RECORD
        }
      }
      toString() {
        return "AlwaysOffSampler"
      }
    }
    ;
  a(Yc, "AlwaysOffSampler");
  var Gc = Yc;
  ts.AlwaysOffSampler = Gc
}
);
var Kc = W(rs => {
  "use strict";
  c();
  Object.defineProperty(rs, "__esModule", {
    value: !0
  });
  rs.AlwaysOnSampler = void 0;
  var q6 = (G(),
    He(Ae))
    , Wc = class Wc {
      shouldSample() {
        return {
          decision: q6.SamplingDecision.RECORD_AND_SAMPLED
        }
      }
      toString() {
        return "AlwaysOnSampler"
      }
    }
    ;
  a(Wc, "AlwaysOnSampler");
  var zc = Wc;
  rs.AlwaysOnSampler = zc
}
);
var V1 = W(os => {
  "use strict";
  c();
  Object.defineProperty(os, "__esModule", {
    value: !0
  });
  os.ParentBasedSampler = void 0;
  var ns = (G(),
    He(Ae))
    , Z6 = cc()
    , B1 = jc()
    , Xc = Kc()
    , Zc = class Zc {
      constructor(t) {
        var r, n, o, i;
        this._root = t.root,
          this._root || ((0,
            Z6.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),
            this._root = new Xc.AlwaysOnSampler),
          this._remoteParentSampled = (r = t.remoteParentSampled) !== null && r !== void 0 ? r : new Xc.AlwaysOnSampler,
          this._remoteParentNotSampled = (n = t.remoteParentNotSampled) !== null && n !== void 0 ? n : new B1.AlwaysOffSampler,
          this._localParentSampled = (o = t.localParentSampled) !== null && o !== void 0 ? o : new Xc.AlwaysOnSampler,
          this._localParentNotSampled = (i = t.localParentNotSampled) !== null && i !== void 0 ? i : new B1.AlwaysOffSampler
      }
      shouldSample(t, r, n, o, i, s) {
        let l = ns.trace.getSpanContext(t);
        return !l || !(0,
          ns.isSpanContextValid)(l) ? this._root.shouldSample(t, r, n, o, i, s) : l.isRemote ? l.traceFlags & ns.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(t, r, n, o, i, s) : this._remoteParentNotSampled.shouldSample(t, r, n, o, i, s) : l.traceFlags & ns.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(t, r, n, o, i, s) : this._localParentNotSampled.shouldSample(t, r, n, o, i, s)
      }
      toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`
      }
    }
    ;
  a(Zc, "ParentBasedSampler");
  var qc = Zc;
  os.ParentBasedSampler = qc
}
);
var k1 = W(is => {
  "use strict";
  c();
  Object.defineProperty(is, "__esModule", {
    value: !0
  });
  is.TraceIdRatioBasedSampler = void 0;
  var Qc = (G(),
    He(Ae))
    , ed = class ed {
      constructor(t = 0) {
        this._ratio = t,
          this._ratio = this._normalize(t),
          this._upperBound = Math.floor(this._ratio * 4294967295)
      }
      shouldSample(t, r) {
        return {
          decision: (0,
            Qc.isValidTraceId)(r) && this._accumulate(r) < this._upperBound ? Qc.SamplingDecision.RECORD_AND_SAMPLED : Qc.SamplingDecision.NOT_RECORD
        }
      }
      toString() {
        return `TraceIdRatioBased{${this._ratio}}`
      }
      _normalize(t) {
        return typeof t != "number" || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
      }
      _accumulate(t) {
        let r = 0;
        for (let n = 0; n < t.length / 8; n++) {
          let o = n * 8
            , i = parseInt(t.slice(o, o + 8), 16);
          r = (r ^ i) >>> 0
        }
        return r
      }
    }
    ;
  a(ed, "TraceIdRatioBasedSampler");
  var Jc = ed;
  is.TraceIdRatioBasedSampler = Jc
}
);
var z1 = W(as => {
  "use strict";
  c();
  Object.defineProperty(as, "__esModule", {
    value: !0
  });
  as.isPlainObject = void 0;
  var Q6 = "[object Object]"
    , J6 = "[object Null]"
    , eD = "[object Undefined]"
    , tD = Function.prototype
    , H1 = tD.toString
    , rD = H1.call(Object)
    , nD = oD(Object.getPrototypeOf, Object)
    , G1 = Object.prototype
    , Y1 = G1.hasOwnProperty
    , _n = Symbol ? Symbol.toStringTag : void 0
    , j1 = G1.toString;
  function oD(e, t) {
    return function(r) {
      return e(t(r))
    }
  }
  a(oD, "overArg");
  function iD(e) {
    if (!aD(e) || sD(e) !== Q6)
      return !1;
    let t = nD(e);
    if (t === null)
      return !0;
    let r = Y1.call(t, "constructor") && t.constructor;
    return typeof r == "function" && r instanceof r && H1.call(r) === rD
  }
  a(iD, "isPlainObject");
  as.isPlainObject = iD;
  function aD(e) {
    return e != null && typeof e == "object"
  }
  a(aD, "isObjectLike");
  function sD(e) {
    return e == null ? e === void 0 ? eD : J6 : _n && _n in Object(e) ? uD(e) : lD(e)
  }
  a(sD, "baseGetTag");
  function uD(e) {
    let t = Y1.call(e, _n)
      , r = e[_n]
      , n = !1;
    try {
      e[_n] = void 0,
        n = !0
    } catch (i) { }
    let o = j1.call(e);
    return n && (t ? e[_n] = r : delete e[_n]),
      o
  }
  a(uD, "getRawTag");
  function lD(e) {
    return j1.call(e)
  }
  a(lD, "objectToString")
}
);
var Z1 = W(ls => {
  "use strict";
  c();
  Object.defineProperty(ls, "__esModule", {
    value: !0
  });
  ls.merge = void 0;
  var W1 = z1()
    , cD = 20;
  function dD(...e) {
    let t = e.shift()
      , r = new WeakMap;
    for (; e.length > 0;)
      t = X1(t, e.shift(), 0, r);
    return t
  }
  a(dD, "merge");
  ls.merge = dD;
  function td(e) {
    return us(e) ? e.slice() : e
  }
  a(td, "takeValue");
  function X1(e, t, r = 0, n) {
    let o;
    if (!(r > cD)) {
      if (r++,
        ss(e) || ss(t) || q1(t))
        o = td(t);
      else if (us(e)) {
        if (o = e.slice(),
          us(t))
          for (let i = 0, s = t.length; i < s; i++)
            o.push(td(t[i]));
        else if (li(t)) {
          let i = Object.keys(t);
          for (let s = 0, l = i.length; s < l; s++) {
            let d = i[s];
            o[d] = td(t[d])
          }
        }
      } else if (li(e))
        if (li(t)) {
          if (!fD(e, t))
            return t;
          o = Object.assign({}, e);
          let i = Object.keys(t);
          for (let s = 0, l = i.length; s < l; s++) {
            let d = i[s]
              , u = t[d];
            if (ss(u))
              typeof u == "undefined" ? delete o[d] : o[d] = u;
            else {
              let f = o[d]
                , p = u;
              if (K1(e, d, n) || K1(t, d, n))
                delete o[d];
              else {
                if (li(f) && li(p)) {
                  let _ = n.get(f) || []
                    , S = n.get(p) || [];
                  _.push({
                    obj: e,
                    key: d
                  }),
                    S.push({
                      obj: t,
                      key: d
                    }),
                    n.set(f, _),
                    n.set(p, S)
                }
                o[d] = X1(o[d], u, r, n)
              }
            }
          }
        } else
          o = t;
      return o
    }
  }
  a(X1, "mergeTwoObjects");
  function K1(e, t, r) {
    let n = r.get(e[t]) || [];
    for (let o = 0, i = n.length; o < i; o++) {
      let s = n[o];
      if (s.key === t && s.obj === e)
        return !0
    }
    return !1
  }
  a(K1, "wasObjectReferenced");
  function us(e) {
    return Array.isArray(e)
  }
  a(us, "isArray");
  function q1(e) {
    return typeof e == "function"
  }
  a(q1, "isFunction");
  function li(e) {
    return !ss(e) && !us(e) && !q1(e) && typeof e == "object"
  }
  a(li, "isObject");
  function ss(e) {
    return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "undefined" || e instanceof Date || e instanceof RegExp || e === null
  }
  a(ss, "isPrimitive");
  function fD(e, t) {
    return !(!(0,
      W1.isPlainObject)(e) || !(0,
        W1.isPlainObject)(t))
  }
  a(fD, "shouldMerge")
}
);
var Q1 = W(eo => {
  "use strict";
  c();
  Object.defineProperty(eo, "__esModule", {
    value: !0
  });
  eo.callWithTimeout = eo.TimeoutError = void 0;
  var ds = class ds extends Error {
    constructor(t) {
      super(t),
        Object.setPrototypeOf(this, ds.prototype)
    }
  }
    ;
  a(ds, "TimeoutError");
  var cs = ds;
  eo.TimeoutError = cs;
  function pD(e, t) {
    let r, n = new Promise(a(function(i, s) {
      r = setTimeout(a(function() {
        s(new cs("Operation timed out."))
      }, "timeoutHandler"), t)
    }, "timeoutFunction"));
    return Promise.race([e, n]).then(o => (clearTimeout(r),
      o), o => {
        throw clearTimeout(r),
        o
      }
    )
  }
  a(pD, "callWithTimeout");
  eo.callWithTimeout = pD
}
);
var eA = W(to => {
  "use strict";
  c();
  Object.defineProperty(to, "__esModule", {
    value: !0
  });
  to.isUrlIgnored = to.urlMatches = void 0;
  function J1(e, t) {
    return typeof t == "string" ? e === t : !!e.match(t)
  }
  a(J1, "urlMatches");
  to.urlMatches = J1;
  function mD(e, t) {
    if (!t)
      return !1;
    for (let r of t)
      if (J1(e, r))
        return !0;
    return !1
  }
  a(mD, "isUrlIgnored");
  to.isUrlIgnored = mD
}
);
var tA = W(fs => {
  "use strict";
  c();
  Object.defineProperty(fs, "__esModule", {
    value: !0
  });
  fs.isWrapped = void 0;
  function _D(e) {
    return typeof e == "function" && typeof e.__original == "function" && typeof e.__unwrap == "function" && e.__wrapped === !0
  }
  a(_D, "isWrapped");
  fs.isWrapped = _D
}
);
var rA = W(ps => {
  "use strict";
  c();
  Object.defineProperty(ps, "__esModule", {
    value: !0
  });
  ps.Deferred = void 0;
  var nd = class nd {
    constructor() {
      this._promise = new Promise((t, r) => {
        this._resolve = t,
          this._reject = r
      }
      )
    }
    get promise() {
      return this._promise
    }
    resolve(t) {
      this._resolve(t)
    }
    reject(t) {
      this._reject(t)
    }
  }
    ;
  a(nd, "Deferred");
  var rd = nd;
  ps.Deferred = rd
}
);
var nA = W(ms => {
  "use strict";
  c();
  Object.defineProperty(ms, "__esModule", {
    value: !0
  });
  ms.BindOnceFuture = void 0;
  var hD = rA()
    , id = class id {
      constructor(t, r) {
        this._callback = t,
          this._that = r,
          this._isCalled = !1,
          this._deferred = new hD.Deferred
      }
      get isCalled() {
        return this._isCalled
      }
      get promise() {
        return this._deferred.promise
      }
      call(...t) {
        if (!this._isCalled) {
          this._isCalled = !0;
          try {
            Promise.resolve(this._callback.call(this._that, ...t)).then(r => this._deferred.resolve(r), r => this._deferred.reject(r))
          } catch (r) {
            this._deferred.reject(r)
          }
        }
        return this._deferred.promise
      }
    }
    ;
  a(id, "BindOnceFuture");
  var od = id;
  ms.BindOnceFuture = od
}
);
var iA = W(_s => {
  "use strict";
  c();
  Object.defineProperty(_s, "__esModule", {
    value: !0
  });
  _s._export = void 0;
  var oA = (G(),
    He(Ae))
    , gD = ri();
  function ED(e, t) {
    return new Promise(r => {
      oA.context.with((0,
        gD.suppressTracing)(oA.context.active()), () => {
          e.export(t, n => {
            r(n)
          }
          )
        }
      )
    }
    )
  }
  a(ED, "_export");
  _s._export = ED
}
);
var se = W(v => {
  "use strict";
  c();
  Object.defineProperty(v, "__esModule", {
    value: !0
  });
  v.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = v.DEFAULT_ATTRIBUTE_COUNT_LIMIT = v.TraceState = v.unsuppressTracing = v.suppressTracing = v.isTracingSuppressed = v.TraceIdRatioBasedSampler = v.ParentBasedSampler = v.AlwaysOnSampler = v.AlwaysOffSampler = v.setRPCMetadata = v.getRPCMetadata = v.deleteRPCMetadata = v.RPCType = v.parseTraceParent = v.W3CTraceContextPropagator = v.TRACE_STATE_HEADER = v.TRACE_PARENT_HEADER = v.CompositePropagator = v.unrefTimer = v.otperformance = v.hexToBase64 = v.getEnvWithoutDefaults = v.getEnv = v._globalThis = v.SDK_INFO = v.RandomIdGenerator = v.baggageUtils = v.ExportResultCode = v.hexToBinary = v.timeInputToHrTime = v.millisToHrTime = v.isTimeInputHrTime = v.isTimeInput = v.hrTimeToTimeStamp = v.hrTimeToNanoseconds = v.hrTimeToMilliseconds = v.hrTimeToMicroseconds = v.hrTimeDuration = v.hrTime = v.getTimeOrigin = v.addHrTimes = v.loggingErrorHandler = v.setGlobalErrorHandler = v.globalErrorHandler = v.sanitizeAttributes = v.isAttributeValue = v.isAttributeKey = v.AnchoredClock = v.W3CBaggagePropagator = void 0;
  v.internal = v.VERSION = v.BindOnceFuture = v.isWrapped = v.urlMatches = v.isUrlIgnored = v.callWithTimeout = v.TimeoutError = v.TracesSamplerValues = v.merge = v.parseEnvironment = v.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = v.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = v.DEFAULT_ENVIRONMENT = void 0;
  var TD = Vh();
  Object.defineProperty(v, "W3CBaggagePropagator", {
    enumerable: !0,
    get: a(function() {
      return TD.W3CBaggagePropagator
    }, "get")
  });
  var vD = kh();
  Object.defineProperty(v, "AnchoredClock", {
    enumerable: !0,
    get: a(function() {
      return vD.AnchoredClock
    }, "get")
  });
  var ad = zh();
  Object.defineProperty(v, "isAttributeKey", {
    enumerable: !0,
    get: a(function() {
      return ad.isAttributeKey
    }, "get")
  });
  Object.defineProperty(v, "isAttributeValue", {
    enumerable: !0,
    get: a(function() {
      return ad.isAttributeValue
    }, "get")
  });
  Object.defineProperty(v, "sanitizeAttributes", {
    enumerable: !0,
    get: a(function() {
      return ad.sanitizeAttributes
    }, "get")
  });
  var aA = cc();
  Object.defineProperty(v, "globalErrorHandler", {
    enumerable: !0,
    get: a(function() {
      return aA.globalErrorHandler
    }, "get")
  });
  Object.defineProperty(v, "setGlobalErrorHandler", {
    enumerable: !0,
    get: a(function() {
      return aA.setGlobalErrorHandler
    }, "get")
  });
  var SD = lc();
  Object.defineProperty(v, "loggingErrorHandler", {
    enumerable: !0,
    get: a(function() {
      return SD.loggingErrorHandler
    }, "get")
  });
  var $t = R1();
  Object.defineProperty(v, "addHrTimes", {
    enumerable: !0,
    get: a(function() {
      return $t.addHrTimes
    }, "get")
  });
  Object.defineProperty(v, "getTimeOrigin", {
    enumerable: !0,
    get: a(function() {
      return $t.getTimeOrigin
    }, "get")
  });
  Object.defineProperty(v, "hrTime", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTime
    }, "get")
  });
  Object.defineProperty(v, "hrTimeDuration", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTimeDuration
    }, "get")
  });
  Object.defineProperty(v, "hrTimeToMicroseconds", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTimeToMicroseconds
    }, "get")
  });
  Object.defineProperty(v, "hrTimeToMilliseconds", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTimeToMilliseconds
    }, "get")
  });
  Object.defineProperty(v, "hrTimeToNanoseconds", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTimeToNanoseconds
    }, "get")
  });
  Object.defineProperty(v, "hrTimeToTimeStamp", {
    enumerable: !0,
    get: a(function() {
      return $t.hrTimeToTimeStamp
    }, "get")
  });
  Object.defineProperty(v, "isTimeInput", {
    enumerable: !0,
    get: a(function() {
      return $t.isTimeInput
    }, "get")
  });
  Object.defineProperty(v, "isTimeInputHrTime", {
    enumerable: !0,
    get: a(function() {
      return $t.isTimeInputHrTime
    }, "get")
  });
  Object.defineProperty(v, "millisToHrTime", {
    enumerable: !0,
    get: a(function() {
      return $t.millisToHrTime
    }, "get")
  });
  Object.defineProperty(v, "timeInputToHrTime", {
    enumerable: !0,
    get: a(function() {
      return $t.timeInputToHrTime
    }, "get")
  });
  var yD = _c();
  Object.defineProperty(v, "hexToBinary", {
    enumerable: !0,
    get: a(function() {
      return yD.hexToBinary
    }, "get")
  });
  var AD = O1();
  Object.defineProperty(v, "ExportResultCode", {
    enumerable: !0,
    get: a(function() {
      return AD.ExportResultCode
    }, "get")
  });
  var hs = rc();
  v.baggageUtils = {
    getKeyPairs: hs.getKeyPairs,
    serializeKeyPairs: hs.serializeKeyPairs,
    parseKeyPairsIntoRecord: hs.parseKeyPairsIntoRecord,
    parsePairKeyValue: hs.parsePairKeyValue
  };
  var Br = wc();
  Object.defineProperty(v, "RandomIdGenerator", {
    enumerable: !0,
    get: a(function() {
      return Br.RandomIdGenerator
    }, "get")
  });
  Object.defineProperty(v, "SDK_INFO", {
    enumerable: !0,
    get: a(function() {
      return Br.SDK_INFO
    }, "get")
  });
  Object.defineProperty(v, "_globalThis", {
    enumerable: !0,
    get: a(function() {
      return Br._globalThis
    }, "get")
  });
  Object.defineProperty(v, "getEnv", {
    enumerable: !0,
    get: a(function() {
      return Br.getEnv
    }, "get")
  });
  Object.defineProperty(v, "getEnvWithoutDefaults", {
    enumerable: !0,
    get: a(function() {
      return Br.getEnvWithoutDefaults
    }, "get")
  });
  Object.defineProperty(v, "hexToBase64", {
    enumerable: !0,
    get: a(function() {
      return Br.hexToBase64
    }, "get")
  });
  Object.defineProperty(v, "otperformance", {
    enumerable: !0,
    get: a(function() {
      return Br.otperformance
    }, "get")
  });
  Object.defineProperty(v, "unrefTimer", {
    enumerable: !0,
    get: a(function() {
      return Br.unrefTimer
    }, "get")
  });
  var bD = N1();
  Object.defineProperty(v, "CompositePropagator", {
    enumerable: !0,
    get: a(function() {
      return bD.CompositePropagator
    }, "get")
  });
  var gs = U1();
  Object.defineProperty(v, "TRACE_PARENT_HEADER", {
    enumerable: !0,
    get: a(function() {
      return gs.TRACE_PARENT_HEADER
    }, "get")
  });
  Object.defineProperty(v, "TRACE_STATE_HEADER", {
    enumerable: !0,
    get: a(function() {
      return gs.TRACE_STATE_HEADER
    }, "get")
  });
  Object.defineProperty(v, "W3CTraceContextPropagator", {
    enumerable: !0,
    get: a(function() {
      return gs.W3CTraceContextPropagator
    }, "get")
  });
  Object.defineProperty(v, "parseTraceParent", {
    enumerable: !0,
    get: a(function() {
      return gs.parseTraceParent
    }, "get")
  });
  var Es = F1();
  Object.defineProperty(v, "RPCType", {
    enumerable: !0,
    get: a(function() {
      return Es.RPCType
    }, "get")
  });
  Object.defineProperty(v, "deleteRPCMetadata", {
    enumerable: !0,
    get: a(function() {
      return Es.deleteRPCMetadata
    }, "get")
  });
  Object.defineProperty(v, "getRPCMetadata", {
    enumerable: !0,
    get: a(function() {
      return Es.getRPCMetadata
    }, "get")
  });
  Object.defineProperty(v, "setRPCMetadata", {
    enumerable: !0,
    get: a(function() {
      return Es.setRPCMetadata
    }, "get")
  });
  var xD = jc();
  Object.defineProperty(v, "AlwaysOffSampler", {
    enumerable: !0,
    get: a(function() {
      return xD.AlwaysOffSampler
    }, "get")
  });
  var CD = Kc();
  Object.defineProperty(v, "AlwaysOnSampler", {
    enumerable: !0,
    get: a(function() {
      return CD.AlwaysOnSampler
    }, "get")
  });
  var RD = V1();
  Object.defineProperty(v, "ParentBasedSampler", {
    enumerable: !0,
    get: a(function() {
      return RD.ParentBasedSampler
    }, "get")
  });
  var OD = k1();
  Object.defineProperty(v, "TraceIdRatioBasedSampler", {
    enumerable: !0,
    get: a(function() {
      return OD.TraceIdRatioBasedSampler
    }, "get")
  });
  var sd = ri();
  Object.defineProperty(v, "isTracingSuppressed", {
    enumerable: !0,
    get: a(function() {
      return sd.isTracingSuppressed
    }, "get")
  });
  Object.defineProperty(v, "suppressTracing", {
    enumerable: !0,
    get: a(function() {
      return sd.suppressTracing
    }, "get")
  });
  Object.defineProperty(v, "unsuppressTracing", {
    enumerable: !0,
    get: a(function() {
      return sd.unsuppressTracing
    }, "get")
  });
  var PD = Bc();
  Object.defineProperty(v, "TraceState", {
    enumerable: !0,
    get: a(function() {
      return PD.TraceState
    }, "get")
  });
  var ro = fc();
  Object.defineProperty(v, "DEFAULT_ATTRIBUTE_COUNT_LIMIT", {
    enumerable: !0,
    get: a(function() {
      return ro.DEFAULT_ATTRIBUTE_COUNT_LIMIT
    }, "get")
  });
  Object.defineProperty(v, "DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT", {
    enumerable: !0,
    get: a(function() {
      return ro.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
    }, "get")
  });
  Object.defineProperty(v, "DEFAULT_ENVIRONMENT", {
    enumerable: !0,
    get: a(function() {
      return ro.DEFAULT_ENVIRONMENT
    }, "get")
  });
  Object.defineProperty(v, "DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", {
    enumerable: !0,
    get: a(function() {
      return ro.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT
    }, "get")
  });
  Object.defineProperty(v, "DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT", {
    enumerable: !0,
    get: a(function() {
      return ro.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
    }, "get")
  });
  Object.defineProperty(v, "parseEnvironment", {
    enumerable: !0,
    get: a(function() {
      return ro.parseEnvironment
    }, "get")
  });
  var ND = Z1();
  Object.defineProperty(v, "merge", {
    enumerable: !0,
    get: a(function() {
      return ND.merge
    }, "get")
  });
  var wD = dc();
  Object.defineProperty(v, "TracesSamplerValues", {
    enumerable: !0,
    get: a(function() {
      return wD.TracesSamplerValues
    }, "get")
  });
  var sA = Q1();
  Object.defineProperty(v, "TimeoutError", {
    enumerable: !0,
    get: a(function() {
      return sA.TimeoutError
    }, "get")
  });
  Object.defineProperty(v, "callWithTimeout", {
    enumerable: !0,
    get: a(function() {
      return sA.callWithTimeout
    }, "get")
  });
  var uA = eA();
  Object.defineProperty(v, "isUrlIgnored", {
    enumerable: !0,
    get: a(function() {
      return uA.isUrlIgnored
    }, "get")
  });
  Object.defineProperty(v, "urlMatches", {
    enumerable: !0,
    get: a(function() {
      return uA.urlMatches
    }, "get")
  });
  var ID = tA();
  Object.defineProperty(v, "isWrapped", {
    enumerable: !0,
    get: a(function() {
      return ID.isWrapped
    }, "get")
  });
  var MD = nA();
  Object.defineProperty(v, "BindOnceFuture", {
    enumerable: !0,
    get: a(function() {
      return MD.BindOnceFuture
    }, "get")
  });
  var LD = Ec();
  Object.defineProperty(v, "VERSION", {
    enumerable: !0,
    get: a(function() {
      return LD.VERSION
    }, "get")
  });
  var $D = iA();
  v.internal = {
    _export: $D._export
  }
}
);
var n2 = W((Bae, r2) => {
  "use strict";
  c();
  function Gd(e) {
    return typeof e == "function"
  }
  a(Gd, "isFunction");
  var ct = console.error.bind(console);
  function hi(e, t, r) {
    var n = !!e[t] && e.propertyIsEnumerable(t);
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: n,
      writable: !0,
      value: r
    })
  }
  a(hi, "defineProperty");
  function gi(e) {
    e && e.logger && (Gd(e.logger) ? ct = e.logger : ct("new logger isn't a function, not replacing"))
  }
  a(gi, "shimmer");
  function e2(e, t, r) {
    if (!e || !e[t]) {
      ct("no original function " + t + " to wrap");
      return
    }
    if (!r) {
      ct("no wrapper function"),
        ct(new Error().stack);
      return
    }
    if (!Gd(e[t]) || !Gd(r)) {
      ct("original object and wrapper must be functions");
      return
    }
    var n = e[t]
      , o = r(n, t);
    return hi(o, "__original", n),
      hi(o, "__unwrap", function() {
        e[t] === o && hi(e, t, n)
      }),
      hi(o, "__wrapped", !0),
      hi(e, t, o),
      o
  }
  a(e2, "wrap");
  function NU(e, t, r) {
    if (e)
      Array.isArray(e) || (e = [e]);
    else {
      ct("must provide one or more modules to patch"),
        ct(new Error().stack);
      return
    }
    if (!(t && Array.isArray(t))) {
      ct("must provide one or more functions to wrap on modules");
      return
    }
    e.forEach(function(n) {
      t.forEach(function(o) {
        e2(n, o, r)
      })
    })
  }
  a(NU, "massWrap");
  function t2(e, t) {
    if (!e || !e[t]) {
      ct("no function to unwrap."),
        ct(new Error().stack);
      return
    }
    if (!e[t].__unwrap)
      ct("no original to unwrap to -- has " + t + " already been unwrapped?");
    else
      return e[t].__unwrap()
  }
  a(t2, "unwrap");
  function wU(e, t) {
    if (e)
      Array.isArray(e) || (e = [e]);
    else {
      ct("must provide one or more modules to patch"),
        ct(new Error().stack);
      return
    }
    if (!(t && Array.isArray(t))) {
      ct("must provide one or more functions to unwrap on modules");
      return
    }
    e.forEach(function(r) {
      t.forEach(function(n) {
        t2(r, n)
      })
    })
  }
  a(wU, "massUnwrap");
  gi.wrap = e2;
  gi.massWrap = NU;
  gi.unwrap = t2;
  gi.massUnwrap = wU;
  r2.exports = gi
}
);
var d2 = W((Cse, c2) => {
  c();
  function Zd(e, t, r) {
    for (var n = [], o = Math.max(e.length, t.length), i = 0, s = 0; s < o || i;) {
      var l = s < e.length ? e[s] : 0
        , d = s < t.length ? t[s] : 0
        , u = i + l + d;
      n.push(u % r),
        i = Math.floor(u / r),
        s++
    }
    return n
  }
  a(Zd, "add");
  function u2(e, t, r) {
    if (e < 0)
      return null;
    if (e == 0)
      return [];
    for (var n = [], o = t; e & 1 && (n = Zd(n, o, r)),
      e = e >> 1,
      e !== 0;)
      o = Zd(o, o, r);
    return n
  }
  a(u2, "multiplyByNumber");
  function jU(e, t) {
    for (var r = e.split(""), n = [], o = r.length - 1; o >= 0; o--) {
      var i = parseInt(r[o], t);
      if (isNaN(i))
        return null;
      n.push(i)
    }
    return n
  }
  a(jU, "parseToDigitsArray");
  function l2(e, t, r) {
    var n = jU(e, t);
    if (n === null)
      return null;
    for (var o = [], i = [1], s = 0; s < n.length; s++)
      n[s] && (o = Zd(o, u2(n[s], i, r), r)),
        i = u2(t, i, r);
    for (var l = "", s = o.length - 1; s >= 0; s--)
      l += o[s].toString(r);
    return l === "" && (l = "0"),
      l
  }
  a(l2, "convertBase");
  function zU(e, t) {
    var r = t && t.prefix === !1
      , n = l2(e, 10, 16);
    return n ? r ? n : "0x" + n : null
  }
  a(zU, "decToHex");
  function WU(e) {
    return e.substring(0, 2) === "0x" && (e = e.substring(2)),
      e = e.toLowerCase(),
      l2(e, 16, 10)
  }
  a(WU, "hexToDec");
  c2.exports = {
    hexToDec: WU,
    decToHex: zU
  }
}
);
var p2 = W(yr => {
  "use strict";
  c();
  Object.defineProperty(yr, "__esModule", {
    value: !0
  });
  yr.CloudPropagator = yr.X_CLOUD_TRACE_HEADER = void 0;
  var Ti = (G(),
    He(Ae))
    , f2 = d2();
  yr.X_CLOUD_TRACE_HEADER = "x-cloud-trace-context";
  var KU = [yr.X_CLOUD_TRACE_HEADER]
    , Jd = class Jd {
      inject(t, r, n) {
        let o = Ti.trace.getSpanContext(t);
        if (!o)
          return;
        let i = `${o.traceId}/${(0,
          f2.hexToDec)(o.spanId)};o=${o.traceFlags & Ti.TraceFlags.SAMPLED}`;
        n.set(r, yr.X_CLOUD_TRACE_HEADER, i)
      }
      extract(t, r, n) {
        let o = n.get(r, yr.X_CLOUD_TRACE_HEADER)
          , i = Array.isArray(o) ? o[0] : o;
        if (typeof i != "string")
          return t;
        let s = i.match(/^([0-9a-fA-F]{32})(?:\/([0-9]+))(?:;o=(.*))?/);
        if (!s || s[1] === "00000000000000000000000000000000" || s[2] === "0000000000000000")
          return t;
        let l = {
          traceId: s[1],
          spanId: (0,
            f2.decToHex)(s[2], {
              prefix: !1
            }).padStart(16, "0"),
          traceFlags: isNaN(Number(s[3])) || s[3] === "0" ? Ti.TraceFlags.NONE : Ti.TraceFlags.SAMPLED,
          isRemote: !0
        };
        return Ti.trace.setSpanContext(t, l)
      }
      fields() {
        return KU
      }
    }
    ;
  a(Jd, "CloudPropagator");
  var Qd = Jd;
  yr.CloudPropagator = Qd
}
);
var m2 = W(bn => {
  "use strict";
  c();
  var XU = bn && bn.__createBinding || (Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r);
    var o = Object.getOwnPropertyDescriptor(t, r);
    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
      enumerable: !0,
      get: a(function() {
        return t[r]
      }, "get")
    }),
      Object.defineProperty(e, n, o)
  }
    : function(e, t, r, n) {
      n === void 0 && (n = r),
        e[n] = t[r]
    }
  )
    , qU = bn && bn.__exportStar || function(e, t) {
      for (var r in e)
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && XU(t, e, r)
    }
    ;
  Object.defineProperty(bn, "__esModule", {
    value: !0
  });
  qU(p2(), bn)
}
);
var rf = W(jr => {
  "use strict";
  c();
  Object.defineProperty(jr, "__esModule", {
    value: !0
  });
  jr.ShopifyHintPropagator = jr.SHOPIFY_HINT_HEADER_NAME = void 0;
  jr.SHOPIFY_HINT_HEADER_NAME = "X-Shopify-Trace-Hint";
  var tf = class tf {
    extract(t, r, n) {
      return t
    }
    inject(t, r, n) {
      n.set(r, jr.SHOPIFY_HINT_HEADER_NAME, "true")
    }
    fields() {
      return [jr.SHOPIFY_HINT_HEADER_NAME]
    }
  }
    ;
  a(tf, "ShopifyHintPropagator");
  var ef = tf;
  jr.ShopifyHintPropagator = ef
}
);
var h2 = W(Ze => {
  "use strict";
  c();
  var ZU = Ze && Ze.__createBinding || (Object.create ? function(e, t, r, n) {
    n === void 0 && (n = r),
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: a(function() {
          return t[r]
        }, "get")
      })
  }
    : function(e, t, r, n) {
      n === void 0 && (n = r),
        e[n] = t[r]
    }
  )
    , QU = Ze && Ze.__exportStar || function(e, t) {
      for (var r in e)
        r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && ZU(t, e, r)
    }
    ;
  Object.defineProperty(Ze, "__esModule", {
    value: !0
  });
  Ze.shopifyCompositeTextMapPropagator = Ze.ShopifyPropagator = Ze.SHOPIFY_TRACE_HEADER_NAME = void 0;
  var Qs = m2()
    , JU = rf()
    , _2 = se();
  QU(rf(), Ze);
  function eF(e) {
    return !(e === void 0 || Array.isArray(e) || e === null || e === "")
  }
  a(eF, "isSet");
  Ze.SHOPIFY_TRACE_HEADER_NAME = "X-Shopify-Trace-Context";
  var tF = Ze.SHOPIFY_TRACE_HEADER_NAME.toLowerCase()
    , nf = class nf extends Qs.CloudPropagator {
      extract(t, r, n) {
        let o = n.get(r, Ze.SHOPIFY_TRACE_HEADER_NAME) || n.get(r, tF);
        return eF(o) ? super.extract(t, r, n) : t
      }
      inject(t, r, n) {
        let o = {
          set: a((i, s, l) => {
            l !== "" && s === Qs.X_CLOUD_TRACE_HEADER && (n.set(i, Qs.X_CLOUD_TRACE_HEADER, l),
              n.set(i, Ze.SHOPIFY_TRACE_HEADER_NAME, l))
          }
            , "set")
        };
        super.inject(t, r, o)
      }
      fields() {
        return [Ze.SHOPIFY_TRACE_HEADER_NAME, Qs.X_CLOUD_TRACE_HEADER]
      }
    }
    ;
  a(nf, "ShopifyPropagator");
  var Js = nf;
  Ze.ShopifyPropagator = Js;
  var rF = new Js
    , nF = new JU.ShopifyHintPropagator
    , oF = new _2.W3CTraceContextPropagator;
  Ze.shopifyCompositeTextMapPropagator = new _2.CompositePropagator({
    propagators: [oF, rF, nF]
  })
}
);
c();
Vo();
c();
var s_ = U(Ge());
c();
var pl = {
  schemaVersion: "1",
  version: 1,
  appEmbedContainer: {
    left: "0",
    right: "unset",
    bottom: "0",
    top: "unset",
    transform: "unset",
    rotate: "unset"
  },
  container: {
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    overlayBackgroundColor: "#000000",
    overlayBackgroundOpacity: .6
  },
  closeButton: {
    color: "#000000"
  },
  heading: {
    fontFamily: "Helvetica",
    fontSize: "22px",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000000"
  },
  text: {
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#000000"
  },
  a: {
    color: "#1878B9"
  },
  input: {
    padding: "15px",
    borderRadius: "5px",
    borderWidth: "1px",
    color: "#202020",
    placeholderColor: "#20202080",
    errorColor: "#AF161D",
    backgroundColor: "#FFFFFF",
    borderColor: "#20202033"
  },
  button: {
    padding: "15px",
    borderRadius: "5px",
    borderWidth: "0px",
    color: "#FFFFFF",
    backgroundColor: "#202223",
    border: "none"
  },
  discountCode: {
    backgroundColor: "#ffffff",
    color: "#1878B9"
  }
};
c();
c();
c();
c();
c();
c();
function fa(e, t, r) {
  return e < t ? t : e > r ? r : e
}
a(fa, "clamp");
c();
function wr(e, t) {
  let r = +`${e}e${t}`;
  return +`${Math.round(r)}e-${t}`
}
a(wr, "roundNumberToDecimalPlaces");
function _l({ red: e, green: t, blue: r }) {
  return `#${ml(e)}${ml(t)}${ml(r)}`
}
a(_l, "rgbToHex");
function ml(e) {
  let t = e.toString(16);
  return t.length === 1 ? `0${t}` : t
}
a(ml, "componentToHex");
function f3(e, t) {
  let r = e / 60
    , n = 1 - Math.abs(r % 2 - 1)
    , o = t * n
    , i = 0
    , s = 0
    , l = 0;
  return r >= 0 && r <= 1 && (i = t,
    s = o,
    l = 0),
    r >= 1 && r <= 2 && (i = o,
      s = t,
      l = 0),
    r >= 2 && r <= 3 && (i = 0,
      s = t,
      l = o),
    r >= 3 && r <= 4 && (i = 0,
      s = o,
      l = t),
    r >= 4 && r <= 5 && (i = o,
      s = 0,
      l = t),
    r >= 5 && r <= 6 && (i = t,
      s = 0,
      l = o),
  {
    red: i,
    green: s,
    blue: l
  }
}
a(f3, "rgbFromHueAndChroma");
function hl(e) {
  let { hue: t, saturation: r, lightness: n, alpha: o = 1 } = e
    , i = (1 - Math.abs(2 * (n / 100) - 1)) * (r / 100)
    , { red: s, green: l, blue: d } = f3(t, i)
    , u = n / 100 - i / 2;
  return s += u,
    l += u,
    d += u,
  {
    red: Math.round(s * 255),
    green: Math.round(l * 255),
    blue: Math.round(d * 255),
    alpha: o
  }
}
a(hl, "hslToRgb");
function p3(e, t = "b") {
  let { alpha: r = 1 } = e
    , n = e.red / 255
    , o = e.green / 255
    , i = e.blue / 255
    , s = Math.max(n, o, i)
    , l = Math.min(n, o, i)
    , d = s - l
    , u = (s + l) / 2
    , f = 0;
  if (s === 0)
    f = 0;
  else if (t === "b")
    f = d / s;
  else if (t === "l") {
    let g = u > .5 ? d / (2 - s - l) : d / (s + l);
    f = isNaN(g) ? 0 : g
  }
  let p = 0;
  switch (s) {
    case n:
      p = (o - i) / d + (o < i ? 6 : 0);
      break;
    case o:
      p = (i - n) / d + 2;
      break;
    case i:
      p = (n - o) / d + 4
  }
  let _ = p / 6 * 360
    , S = fa(_, 0, 360);
  return {
    hue: S ? wr(S, 2) : 0,
    saturation: wr(fa(f, 0, 1), 4),
    brightness: wr(fa(s, 0, 1), 4),
    lightness: wr(u, 4),
    alpha: wr(r, 4)
  }
}
a(p3, "rgbToHsbl");
function gl(e) {
  let { hue: t, saturation: r, lightness: n, alpha: o = 1 } = p3(e, "l")
    , i = wr(r * 100, 2)
    , s = wr(n * 100, 2);
  return {
    hue: t,
    saturation: i,
    lightness: s,
    alpha: o
  }
}
a(gl, "rgbToHsl");
function El(e) {
  if (e.length === 4) {
    let o = a((d, u) => e.slice(d, u).repeat(2), "repeatHex")
      , i = parseInt(o(1, 2), 16)
      , s = parseInt(o(2, 3), 16)
      , l = parseInt(o(3, 4), 16);
    return {
      red: i,
      green: s,
      blue: l
    }
  }
  let t = parseInt(e.slice(1, 3), 16)
    , r = parseInt(e.slice(3, 5), 16)
    , n = parseInt(e.slice(5, 7), 16);
  return {
    red: t,
    green: r,
    blue: n
  }
}
a(El, "hexToRgb");
var m3 = {
  text: 4,
  nonText: 3,
  largeText: 3
}
  , pa = class pa {
    static fromHex(t) {
      let r = gl(El(t));
      return new pa({
        hue: r.hue,
        saturation: r.saturation,
        lightness: r.lightness
      })
    }
    constructor(t) {
      this.hue = t.hue,
        this.saturation = t.saturation,
        this.lightness = t.lightness
    }
    luminescence() {
      let t = this.toRgb()
        , r = {
          red: Tl(t.red),
          green: Tl(t.green),
          blue: Tl(t.blue)
        };
      return .2126 * r.red + .7152 * r.green + .0722 * r.blue
    }
    hasEnoughContrast(t, r = "text") {
      let n = Math.max(this.luminescence(), t.luminescence())
        , o = Math.min(this.luminescence(), t.luminescence());
      return (n + .05) / (o + .05) > m3[r]
    }
    toRgb() {
      return hl({
        hue: this.hue,
        saturation: this.saturation,
        lightness: this.lightness
      })
    }
    toHex() {
      return _l(this.toRgb())
    }
  }
  ;
a(pa, "Color");
var Er = pa;
function Tl(e) {
  let t = e / 255;
  return t < .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4
}
a(Tl, "getRelativePrimaryColor");
c();
var vl = new Er({
  hue: 0,
  saturation: 0,
  lightness: 0
})
  , n_ = new Er({
    hue: 0,
    saturation: 0,
    lightness: 100
  })
  , MG = new Er({
    hue: 0,
    saturation: 0,
    lightness: 12.55
  });
var _3 = a(e => {
  let t = new Er(Er.fromHex(e));
  return vl.hasEnoughContrast(t)
}
  , "hasBlackEnoughContrast")
  , o_ = a(e => _3(e) ? vl.toHex() : n_.toHex(), "getCloseButtonTextColor");
var i_ = "Verdana, Geneva, Tahoma, sans-serif";
function h3(e, t) {
  return e.length === 7 ? `${e}${t}` : e.substring(0, 7) + t
}
a(h3, "overrideOpacity");
var g3 = a(({ styles: e, layout: t = "floating", image: r = null }) => {
  var x;
  let { text: n, heading: o, a: i, input: s, button: l, container: d, discountCode: u } = e
    , f = t === "inline"
    , p = f ? "none" : "0 0 1px rgba(0, 0, 0, 0.2), 0 26px 80px rgba(0, 0, 0, 0.2)"
    , _ = f ? "none" : "0 0 1px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2)"
    , S = f ? "0px" : d.borderRadius
    , g = o_(d.backgroundColor)
    , b = document.querySelector("form-embed") != null ? "host" : "root";
  return h("style", null, `
    :${b} {
      --spacing-size: 25px;
      --spacing-size-y: 35px;
      --spacing-size-x: 30px;
      --app-embed-padding-x: var(--spacing-size);
      --app-embed-padding-y: var(--spacing-size);
      --app-embed-width: auto;

      --forms-base-font-size: ${n.fontSize};
      --forms-heading-font-size: ${o.fontSize};

      --forms-body-font: ${n.fontStyle} ${n.fontWeight} ${n.fontSize} ${n.fontFamily}, ${i_};
      --forms-heading-font: ${o.fontStyle} ${o.fontWeight} ${o.fontSize} ${o.fontFamily}, ${i_};

      --forms-accent-color: ${i.color};
      --forms-accent-color-hovered-modifier: ${h3(i.color, "1a")};

      --forms-discount-code-color: ${u.color};
      --forms-discount-code-background-color-hover: ${u.backgroundColor};

      --forms-overlay-background-color: ${d.overlayBackgroundColor ? d.overlayBackgroundColor : "#000000"};
      --forms-overlay-background-opacity: ${d.overlayBackgroundOpacity !== null && d.overlayBackgroundOpacity !== void 0 ? d.overlayBackgroundOpacity : .6};

      --heading-font-size: ${o.fontSize};
      --body-text-color: ${n.color};
      --link-text-color: ${i.color};
      --heading-text-color: ${o.color};
      --form-error-color: ${s.errorColor};
      --form-text-color: ${s.color};
      --form-placeholder-color: ${s.placeholderColor};
      --form-background-color: ${s.backgroundColor};
      --button-text-color: ${l.color};
      --button-background-color: ${l.backgroundColor};
      --button-background-color-hovered-modifier: opacity(80%);

      --button-close-background-color: ${r && r.option === "background" ? "#fff" : d.backgroundColor};
      --button-close-color: ${r && r.option === "background" ? "#000" : g};

      --container-background-color: ${d.backgroundColor};
      --forms-padding-top: ${d.paddingTop || "var(--spacing-size-y)"};
      --forms-padding-right: ${d.paddingRight || "var(--spacing-size-x)"};
      --forms-padding-bottom: ${d.paddingBottom || "var(--spacing-size-y)"};
      --forms-padding-left: ${d.paddingLeft || "var(--spacing-size-x)"};
      --container-text-alignment: ${(x = d.textAlignment) != null ? x : "center"};
      --disclaimer-padding: ${f ? "0" : "0 15px"};


      --form-field-border: 0 0 0 ${s.borderWidth} ${s.borderColor};
      --form-field-border-focused: 0 0 0 2px ${i.color};
      --button-border: ${l.borderWidth} solid ${l.border};

      --form-field-border-radius: ${s.borderRadius};
      --button-border-radius: ${l.borderRadius};
      --container-border-radius: ${S};

      --form-field-padding: ${s.padding};
      --button-padding: ${l.padding};

      --container-shadow: ${p};
      --container-max-w: 370px;
      --inline-container-max-width: 450px;
      --inline-form-alignment: ${d.formAlignment};
      }


    /* Decrease shadow size so it is not cut off when app embed has overflow set */
    /* breakpoint sm used for height */
    @media only screen and (max-height: 490px) {
      :${b} {
        --container-shadow: ${_};
      }
    }

    /* breakpoint sm */
    @media only screen and (max-width: 490px) {
      :${b} {
        --spacing-size: 16px;
        --app-embed-padding-x: 0;
        --app-embed-padding-y: var(--spacing-size);
      }
    }
  `)
}
  , "BaseFormStyles")
  , a_ = g3;
var u_ = (0,
  s_.createContext)(pl)
  , l_ = a(({ styles: e = pl, layout: t = "floating", image: r = null, children: n }) => h(u_.Provider, {
    value: e
  }, h(a_, {
    styles: e,
    layout: t,
    image: r
  }), n), "FormStyleProvider")
  , c_ = u_;
c();
async function Sl(e, t, r) {
  if (await document.fonts.ready,
    Array.from(document.fonts.values()).map(o => o.family).includes(e) || e === "Inter")
    return !0;
  try {
    let o = new FontFace(e, t)
      , i = o.load();
    return await Promise.race([i, E3()]),
      o.status === "error" ? (r(new Error("Font loaded with an error")),
        !1) : (document.fonts.add(o),
          !0)
  } catch (o) {
    return !1
  }
}
a(Sl, "loadFontFace");
var E3 = a(() => new Promise((e, t) => {
  setTimeout(() => t(new Error("Font load timeout after 5 seconds")), 5e3)
}
), "createTimeoutPromise");
var qu = U(Et());
c();
var Ce = U(Ge());
c();
var yl = a((e, t = "desktop") => {
  let r = {
    desktop: {
      width: "640",
      height: "860",
      crop: "center"
    },
    thumbnail: {
      width: "10",
      height: "20"
    }
  }
    , n = new URLSearchParams(r[t]);
  return `${e}?${n}`
}
  , "getImageUrl")
  , d_ = a((e, t, r) => {
    let n = {
      backgroundImage: ""
    };
    if (!t)
      return n;
    let o = yl(t, "desktop")
      , i = yl(t, "thumbnail")
      , s = {
        backgroundImage: e === "thumbnail" ? `url(${i}), url(${o})` : `url(${o})`,
        backgroundSize: r === "fit" ? "contain" : "cover",
        backgroundRepeat: "no-repeat"
      };
    return {
      ...n,
      ...s
    }
  }
    , "getImageInlineStyles")
  , Ho = a((e, t, r, n, o = 2, i = 1e3) => {
    let s = 0
      , l = a(() => {
        let d = new Image;
        d.onload = () => {
          r()
        }
          ,
          d.onerror = u => {
            s < o ? (s++,
              (async () => (await cm(s, i),
                l()))()) : n(u)
          }
          ,
          d.src = yl(e, t)
      }
        , "loadImage");
    l()
  }
    , "preloadImage");
var f_ = (0,
  Ce.createContext)(null)
  , p_ = a(({ children: e, image: t, onError: r, isPreview: n = !1, shadowRoot: o }) => {
    let [i, s] = (0,
      Ce.useState)(!1)
      , [l, d] = (0,
        Ce.useState)(!1)
      , [u, f] = (0,
        Ce.useState)(!1)
      , [p, _] = (0,
        Ce.useState)(!1)
      , [S, g] = (0,
        Ce.useState)(!1)
      , [T, b] = (0,
        Ce.useState)([])
      , x = (0,
        Ce.useMemo)(() => d_(p ? "desktop" : "thumbnail", t == null ? void 0 : t.url, t == null ? void 0 : t.displayMode), [t == null ? void 0 : t.url, p, t == null ? void 0 : t.displayMode]);
    (0,
      Ce.useEffect)(() => {
        if (!n && t && t.url) {
          let L = a(() => {
            d(!0),
              s(!1)
          }
            , "onThumbnailLoad")
            , D = a(() => {
              r && r("Thumbnail image could not be preloaded"),
                f(!0),
                s(!1)
            }
              , "onThumbnailError");
          s(!0),
            Ho(t.url, "thumbnail", L, D),
            Ho(t.url, "desktop", () => _(!0), () => {
              r && r("Desktop image could not be preloaded"),
                g(!0)
            }
            )
        }
      }
        , []),
      (0,
        Ce.useEffect)(() => {
          n && (s(!1),
            d(!1),
            f(!1),
            _(!1),
            g(!1))
        }
          , [t == null ? void 0 : t.url, n]),
      (0,
        Ce.useEffect)(() => {
          if (!n || !(t != null && t.url) || T.includes(t == null ? void 0 : t.url))
            return;
          let D = a(() => {
            d(!0),
              s(!1)
          }
            , "onThumbnailLoad")
            , K = a(() => {
              r && r("Thumbnail image could not be preloaded"),
                f(!0),
                s(!1)
            }
              , "onThumbnailError")
            , I = a(() => {
              _(!0),
                t != null && t.url && !T.includes(t == null ? void 0 : t.url) && b([...T, t == null ? void 0 : t.url])
            }
              , "onImageLoad")
            , z = a(() => {
              r && r("Desktop image could not be preloaded"),
                g(!0)
            }
              , "onImageError");
          s(!0),
            Ho(t.url, "thumbnail", D, K),
            Ho(t.url, "desktop", I, z)
        }
          , [t == null ? void 0 : t.url, n, T, r]);
    let A = (0,
      Ce.useCallback)(() => {
        let L = o ? o.host : document.querySelector(":root");
        !L || !t || t.option !== "background" || (L.style.setProperty("--form-container-background-image", x.backgroundImage),
          L.style.setProperty("--form-container-background-opacity", String(t.opacity)),
          L.style.setProperty("--form-container-background-size", t.displayMode === "fit" ? "contain" : "cover"))
      }
        , [t, x.backgroundImage, o]);
    (0,
      Ce.useLayoutEffect)(() => {
        A()
      }
        , [A]);
    let P = (0,
      Ce.useMemo)(() => ({
        thumbnailLoading: i,
        imageLoaded: p,
        thumbnailLoaded: l,
        imageInlineStyles: x,
        imageLoadingError: S,
        thumbnailLoadingError: u,
        loadedImages: T
      }), [i, p, l, x, S, u, T]);
    return h(f_.Provider, {
      value: P
    }, e)
  }
    , "ImageContextProvider")
  , m_ = a(() => {
    let e = (0,
      Ce.useContext)(f_);
    if (e === void 0)
      throw new Error("useImageContext must be used within a ImageContext");
    return e
  }
    , "useImageContext");
c();
c();
G();
c();
c();
c();
var Ye;
(function(e) {
  e[e.DELTA = 0] = "DELTA",
    e[e.CUMULATIVE = 1] = "CUMULATIVE"
}
)(Ye || (Ye = {}));
c();
var nt;
(function(e) {
  e[e.HISTOGRAM = 0] = "HISTOGRAM",
    e[e.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM",
    e[e.GAUGE = 2] = "GAUGE",
    e[e.SUM = 3] = "SUM"
}
)(nt || (nt = {}));
c();
G();
c();
var cP = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Th = function(e, t, r, n) {
    function o(i) {
      return i instanceof r ? i : new r(function(s) {
        s(i)
      }
      )
    }
    return a(o, "adopt"),
      new (r || (r = Promise))(function(i, s) {
        function l(f) {
          try {
            u(n.next(f))
          } catch (p) {
            s(p)
          }
        }
        a(l, "fulfilled");
        function d(f) {
          try {
            u(n.throw(f))
          } catch (p) {
            s(p)
          }
        }
        a(d, "rejected");
        function u(f) {
          f.done ? i(f.value) : o(f.value).then(l, d)
        }
        a(u, "step"),
          u((n = n.apply(e, t || [])).next())
      }
      )
  }
  , vh = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , dP = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , fP = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , pP = function(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
      return r.call(e);
    if (e && typeof e.length == "number")
      return {
        next: a(function() {
          return e && n >= e.length && (e = void 0),
          {
            value: e && e[n++],
            done: !e
          }
        }, "next")
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  };
function Sh(e) {
  return e != null
}
a(Sh, "isNotNullish");
function Ra(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "" : (t = t.sort(),
    JSON.stringify(t.map(function(r) {
      return [r, e[r]]
    })))
}
a(Ra, "hashAttributes");
function yh(e) {
  var t, r;
  return e.name + ":" + ((t = e.version) !== null && t !== void 0 ? t : "") + ":" + ((r = e.schemaUrl) !== null && r !== void 0 ? r : "")
}
a(yh, "instrumentationScopeId");
var mP = function(e) {
  cP(t, e);
  function t(r) {
    var n = e.call(this, r) || this;
    return Object.setPrototypeOf(n, t.prototype),
      n
  }
  return a(t, "TimeoutError"),
    t
}(Error);
function Xn(e, t) {
  var r, n = new Promise(a(function(i, s) {
    r = setTimeout(a(function() {
      s(new mP("Operation timed out."))
    }, "timeoutHandler"), t)
  }, "timeoutFunction"));
  return Promise.race([e, n]).then(function(o) {
    return clearTimeout(r),
      o
  }, function(o) {
    throw clearTimeout(r),
    o
  })
}
a(Xn, "callWithTimeout");
function Ah(e) {
  return Th(this, void 0, void 0, function() {
    var t = this;
    return vh(this, function(r) {
      return [2, Promise.all(e.map(function(n) {
        return Th(t, void 0, void 0, function() {
          var o, i;
          return vh(this, function(s) {
            switch (s.label) {
              case 0:
                return s.trys.push([0, 2, , 3]),
                  [4, n];
              case 1:
                return o = s.sent(),
                  [2, {
                    status: "fulfilled",
                    value: o
                  }];
              case 2:
                return i = s.sent(),
                  [2, {
                    status: "rejected",
                    reason: i
                  }];
              case 3:
                return [2]
            }
          })
        })
      }))]
    })
  })
}
a(Ah, "PromiseAllSettled");
function bh(e) {
  return e.status === "rejected"
}
a(bh, "isPromiseAllSettledRejectionResult");
function jl(e, t) {
  var r = [];
  return e.forEach(function(n) {
    r.push.apply(r, fP([], dP(t(n)), !1))
  }),
    r
}
a(jl, "FlatMap");
function xh(e, t) {
  var r, n;
  if (e.size !== t.size)
    return !1;
  try {
    for (var o = pP(e), i = o.next(); !i.done; i = o.next()) {
      var s = i.value;
      if (!t.has(s))
        return !1
    }
  } catch (l) {
    r = {
      error: l
    }
  } finally {
    try {
      i && !i.done && (n = o.return) && n.call(o)
    } finally {
      if (r)
        throw r.error
    }
  }
  return !0
}
a(xh, "setEquals");
function Ch(e, t) {
  for (var r = 0, n = e.length - 1, o = e.length; n >= r;) {
    var i = r + Math.trunc((n - r) / 2);
    e[i] < t ? r = i + 1 : (o = i,
      n = i - 1)
  }
  return o
}
a(Ch, "binarySearchUB");
function Rh(e, t) {
  return e.toLowerCase() === t.toLowerCase()
}
a(Rh, "equalsCaseInsensitive");
c();
c();
G();
c();
c();
c();
var Lt;
(function(e) {
  e[e.DROP = 0] = "DROP",
    e[e.SUM = 1] = "SUM",
    e[e.LAST_VALUE = 2] = "LAST_VALUE",
    e[e.HISTOGRAM = 3] = "HISTOGRAM",
    e[e.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM"
}
)(Lt || (Lt = {}));
var zl = function() {
  function e() {
    this.kind = Lt.DROP
  }
  return a(e, "DropAggregator"),
    e.prototype.createAccumulation = function() { }
    ,
    e.prototype.merge = function(t, r) { }
    ,
    e.prototype.diff = function(t, r) { }
    ,
    e.prototype.toMetricData = function(t, r, n, o) { }
    ,
    e
}();
c();
c();
G();
var X;
(function(e) {
  e.COUNTER = "COUNTER",
    e.GAUGE = "GAUGE",
    e.HISTOGRAM = "HISTOGRAM",
    e.UP_DOWN_COUNTER = "UP_DOWN_COUNTER",
    e.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER",
    e.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE",
    e.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"
}
)(X || (X = {}));
function rr(e, t, r) {
  var n, o, i, s;
  return hP(e) || C.warn('Invalid metric name: "' + e + '". The metric name should be a ASCII string with a length no greater than 255 characters.'),
  {
    name: e,
    type: t,
    description: (n = r == null ? void 0 : r.description) !== null && n !== void 0 ? n : "",
    unit: (o = r == null ? void 0 : r.unit) !== null && o !== void 0 ? o : "",
    valueType: (i = r == null ? void 0 : r.valueType) !== null && i !== void 0 ? i : Fe.DOUBLE,
    advice: (s = r == null ? void 0 : r.advice) !== null && s !== void 0 ? s : {}
  }
}
a(rr, "createInstrumentDescriptor");
function Oh(e, t) {
  var r, n;
  return {
    name: (r = e.name) !== null && r !== void 0 ? r : t.name,
    description: (n = e.description) !== null && n !== void 0 ? n : t.description,
    type: t.type,
    unit: t.unit,
    valueType: t.valueType,
    advice: t.advice
  }
}
a(Oh, "createInstrumentDescriptorWithView");
function Ph(e, t) {
  return Rh(e.name, t.name) && e.unit === t.unit && e.type === t.type && e.valueType === t.valueType
}
a(Ph, "isDescriptorCompatibleWith");
var _P = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
function hP(e) {
  return e.match(_P) != null
}
a(hP, "isValidName");
var gP = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
};
function EP(e) {
  var t = e.map(function() {
    return 0
  });
  return t.push(0),
  {
    buckets: {
      boundaries: e,
      counts: t
    },
    sum: 0,
    count: 0,
    hasMinMax: !1,
    min: 1 / 0,
    max: -1 / 0
  }
}
a(EP, "createNewEmptyCheckpoint");
var Oa = function() {
  function e(t, r, n, o) {
    n === void 0 && (n = !0),
      o === void 0 && (o = EP(r)),
      this.startTime = t,
      this._boundaries = r,
      this._recordMinMax = n,
      this._current = o
  }
  return a(e, "HistogramAccumulation"),
    e.prototype.record = function(t) {
      if (!Number.isNaN(t)) {
        this._current.count += 1,
          this._current.sum += t,
          this._recordMinMax && (this._current.min = Math.min(t, this._current.min),
            this._current.max = Math.max(t, this._current.max),
            this._current.hasMinMax = !0);
        var r = Ch(this._boundaries, t);
        this._current.buckets.counts[r] += 1
      }
    }
    ,
    e.prototype.setStartTime = function(t) {
      this.startTime = t
    }
    ,
    e.prototype.toPointValue = function() {
      return this._current
    }
    ,
    e
}();
var Pa = function() {
  function e(t, r) {
    this._boundaries = t,
      this._recordMinMax = r,
      this.kind = Lt.HISTOGRAM
  }
  return a(e, "HistogramAggregator"),
    e.prototype.createAccumulation = function(t) {
      return new Oa(t, this._boundaries, this._recordMinMax)
    }
    ,
    e.prototype.merge = function(t, r) {
      for (var n = t.toPointValue(), o = r.toPointValue(), i = n.buckets.counts, s = o.buckets.counts, l = new Array(i.length), d = 0; d < i.length; d++)
        l[d] = i[d] + s[d];
      var u = 1 / 0
        , f = -1 / 0;
      return this._recordMinMax && (n.hasMinMax && o.hasMinMax ? (u = Math.min(n.min, o.min),
        f = Math.max(n.max, o.max)) : n.hasMinMax ? (u = n.min,
          f = n.max) : o.hasMinMax && (u = o.min,
            f = o.max)),
        new Oa(t.startTime, n.buckets.boundaries, this._recordMinMax, {
          buckets: {
            boundaries: n.buckets.boundaries,
            counts: l
          },
          count: n.count + o.count,
          sum: n.sum + o.sum,
          hasMinMax: this._recordMinMax && (n.hasMinMax || o.hasMinMax),
          min: u,
          max: f
        })
    }
    ,
    e.prototype.diff = function(t, r) {
      for (var n = t.toPointValue(), o = r.toPointValue(), i = n.buckets.counts, s = o.buckets.counts, l = new Array(i.length), d = 0; d < i.length; d++)
        l[d] = s[d] - i[d];
      return new Oa(r.startTime, n.buckets.boundaries, this._recordMinMax, {
        buckets: {
          boundaries: n.buckets.boundaries,
          counts: l
        },
        count: o.count - n.count,
        sum: o.sum - n.sum,
        hasMinMax: !1,
        min: 1 / 0,
        max: -1 / 0
      })
    }
    ,
    e.prototype.toMetricData = function(t, r, n, o) {
      return {
        descriptor: t,
        aggregationTemporality: r,
        dataPointType: nt.HISTOGRAM,
        dataPoints: n.map(function(i) {
          var s = gP(i, 2)
            , l = s[0]
            , d = s[1]
            , u = d.toPointValue()
            , f = t.type === X.GAUGE || t.type === X.UP_DOWN_COUNTER || t.type === X.OBSERVABLE_GAUGE || t.type === X.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: l,
            startTime: d.startTime,
            endTime: o,
            value: {
              min: u.hasMinMax ? u.min : void 0,
              max: u.hasMinMax ? u.max : void 0,
              sum: f ? void 0 : u.sum,
              buckets: u.buckets,
              count: u.count
            }
          }
        })
      }
    }
    ,
    e
}();
c();
G();
c();
var Wl = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , Kl = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , Xl = function() {
    function e(t, r, n, o) {
      t === void 0 && (t = new TP),
        r === void 0 && (r = 0),
        n === void 0 && (n = 0),
        o === void 0 && (o = 0),
        this.backing = t,
        this.indexBase = r,
        this.indexStart = n,
        this.indexEnd = o
    }
    return a(e, "Buckets"),
      Object.defineProperty(e.prototype, "offset", {
        get: a(function() {
          return this.indexStart
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "length", {
        get: a(function() {
          return this.backing.length === 0 || this.indexEnd === this.indexStart && this.at(0) === 0 ? 0 : this.indexEnd - this.indexStart + 1
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.counts = function() {
        var t = this;
        return Array.from({
          length: this.length
        }, function(r, n) {
          return t.at(n)
        })
      }
      ,
      e.prototype.at = function(t) {
        var r = this.indexBase - this.indexStart;
        return t < r && (t += this.backing.length),
          t -= r,
          this.backing.countAt(t)
      }
      ,
      e.prototype.incrementBucket = function(t, r) {
        this.backing.increment(t, r)
      }
      ,
      e.prototype.decrementBucket = function(t, r) {
        this.backing.decrement(t, r)
      }
      ,
      e.prototype.trim = function() {
        for (var t = 0; t < this.length; t++)
          if (this.at(t) !== 0) {
            this.indexStart += t;
            break
          } else if (t === this.length - 1) {
            this.indexStart = this.indexEnd = this.indexBase = 0;
            return
          }
        for (var t = this.length - 1; t >= 0; t--)
          if (this.at(t) !== 0) {
            this.indexEnd -= this.length - t - 1;
            break
          }
        this._rotate()
      }
      ,
      e.prototype.downscale = function(t) {
        this._rotate();
        for (var r = 1 + this.indexEnd - this.indexStart, n = 1 << t, o = 0, i = 0, s = this.indexStart; s <= this.indexEnd;) {
          var l = s % n;
          l < 0 && (l += n);
          for (var d = l; d < n && o < r; d++)
            this._relocateBucket(i, o),
              o++,
              s++;
          i++
        }
        this.indexStart >>= t,
          this.indexEnd >>= t,
          this.indexBase = this.indexStart
      }
      ,
      e.prototype.clone = function() {
        return new e(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd)
      }
      ,
      e.prototype._rotate = function() {
        var t = this.indexBase - this.indexStart;
        t !== 0 && (t > 0 ? (this.backing.reverse(0, this.backing.length),
          this.backing.reverse(0, t),
          this.backing.reverse(t, this.backing.length)) : (this.backing.reverse(0, this.backing.length),
            this.backing.reverse(0, this.backing.length + t)),
          this.indexBase = this.indexStart)
      }
      ,
      e.prototype._relocateBucket = function(t, r) {
        t !== r && this.incrementBucket(t, this.backing.emptyBucket(r))
      }
      ,
      e
  }();
var TP = function() {
  function e(t) {
    t === void 0 && (t = [0]),
      this._counts = t
  }
  return a(e, "BucketsBacking"),
    Object.defineProperty(e.prototype, "length", {
      get: a(function() {
        return this._counts.length
      }, "get"),
      enumerable: !1,
      configurable: !0
    }),
    e.prototype.countAt = function(t) {
      return this._counts[t]
    }
    ,
    e.prototype.growTo = function(t, r, n) {
      var o = new Array(t).fill(0);
      o.splice.apply(o, Kl([n, this._counts.length - r], Wl(this._counts.slice(r)), !1)),
        o.splice.apply(o, Kl([0, r], Wl(this._counts.slice(0, r)), !1)),
        this._counts = o
    }
    ,
    e.prototype.reverse = function(t, r) {
      for (var n = Math.floor((t + r) / 2) - t, o = 0; o < n; o++) {
        var i = this._counts[t + o];
        this._counts[t + o] = this._counts[r - o - 1],
          this._counts[r - o - 1] = i
      }
    }
    ,
    e.prototype.emptyBucket = function(t) {
      var r = this._counts[t];
      return this._counts[t] = 0,
        r
    }
    ,
    e.prototype.increment = function(t, r) {
      this._counts[t] += r
    }
    ,
    e.prototype.decrement = function(t, r) {
      this._counts[t] >= r ? this._counts[t] -= r : this._counts[t] = 0
    }
    ,
    e.prototype.clone = function() {
      return new e(Kl([], Wl(this._counts), !1))
    }
    ,
    e
}();
c();
c();
c();
var Nh = 52
  , vP = 2146435072
  , SP = 1048575
  , ql = 1023
  , Na = -ql + 1
  , wa = ql
  , ei = Math.pow(2, -1022);
function Ia(e) {
  var t = new DataView(new ArrayBuffer(8));
  t.setFloat64(0, e);
  var r = t.getUint32(0)
    , n = (r & vP) >> 20;
  return n - ql
}
a(Ia, "getNormalBase2");
function Ma(e) {
  var t = new DataView(new ArrayBuffer(8));
  t.setFloat64(0, e);
  var r = t.getUint32(0)
    , n = t.getUint32(4)
    , o = (r & SP) * Math.pow(2, 32);
  return o + n
}
a(Ma, "getSignificand");
c();
function ti(e, t) {
  return e === 0 || e === Number.POSITIVE_INFINITY || e === Number.NEGATIVE_INFINITY || Number.isNaN(e) ? e : e * Math.pow(2, t)
}
a(ti, "ldexp");
function Ih(e) {
  return e--,
    e |= e >> 1,
    e |= e >> 2,
    e |= e >> 4,
    e |= e >> 8,
    e |= e >> 16,
    e++,
    e
}
a(Ih, "nextGreaterSquare");
c();
var yP = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , $r = function(e) {
    yP(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this
    }
    return a(t, "MappingError"),
      t
  }(Error);
var Lh = function() {
  function e(t) {
    this._shift = -t
  }
  return a(e, "ExponentMapping"),
    e.prototype.mapToIndex = function(t) {
      if (t < ei)
        return this._minNormalLowerBoundaryIndex();
      var r = Ia(t)
        , n = this._rightShift(Ma(t) - 1, Nh);
      return r + n >> this._shift
    }
    ,
    e.prototype.lowerBoundary = function(t) {
      var r = this._minNormalLowerBoundaryIndex();
      if (t < r)
        throw new $r("underflow: " + t + " is < minimum lower boundary: " + r);
      var n = this._maxNormalLowerBoundaryIndex();
      if (t > n)
        throw new $r("overflow: " + t + " is > maximum lower boundary: " + n);
      return ti(1, t << this._shift)
    }
    ,
    Object.defineProperty(e.prototype, "scale", {
      get: a(function() {
        return this._shift === 0 ? 0 : -this._shift
      }, "get"),
      enumerable: !1,
      configurable: !0
    }),
    e.prototype._minNormalLowerBoundaryIndex = function() {
      var t = Na >> this._shift;
      return this._shift < 2 && t--,
        t
    }
    ,
    e.prototype._maxNormalLowerBoundaryIndex = function() {
      return wa >> this._shift
    }
    ,
    e.prototype._rightShift = function(t, r) {
      return Math.floor(t * Math.pow(2, -r))
    }
    ,
    e
}();
c();
var $h = function() {
  function e(t) {
    this._scale = t,
      this._scaleFactor = ti(Math.LOG2E, t),
      this._inverseFactor = ti(Math.LN2, -t)
  }
  return a(e, "LogarithmMapping"),
    e.prototype.mapToIndex = function(t) {
      if (t <= ei)
        return this._minNormalLowerBoundaryIndex() - 1;
      if (Ma(t) === 0) {
        var r = Ia(t);
        return (r << this._scale) - 1
      }
      var n = Math.floor(Math.log(t) * this._scaleFactor)
        , o = this._maxNormalLowerBoundaryIndex();
      return n >= o ? o : n
    }
    ,
    e.prototype.lowerBoundary = function(t) {
      var r = this._maxNormalLowerBoundaryIndex();
      if (t >= r) {
        if (t === r)
          return 2 * Math.exp((t - (1 << this._scale)) / this._scaleFactor);
        throw new $r("overflow: " + t + " is > maximum lower boundary: " + r)
      }
      var n = this._minNormalLowerBoundaryIndex();
      if (t <= n) {
        if (t === n)
          return ei;
        if (t === n - 1)
          return Math.exp((t + (1 << this._scale)) / this._scaleFactor) / 2;
        throw new $r("overflow: " + t + " is < minimum lower boundary: " + n)
      }
      return Math.exp(t * this._inverseFactor)
    }
    ,
    Object.defineProperty(e.prototype, "scale", {
      get: a(function() {
        return this._scale
      }, "get"),
      enumerable: !1,
      configurable: !0
    }),
    e.prototype._minNormalLowerBoundaryIndex = function() {
      return Na << this._scale
    }
    ,
    e.prototype._maxNormalLowerBoundaryIndex = function() {
      return (wa + 1 << this._scale) - 1
    }
    ,
    e
}();
var Dh = -10
  , Uh = 20
  , AP = Array.from({
    length: 31
  }, function(e, t) {
    return t > 10 ? new $h(t - 10) : new Lh(t - 10)
  });
function Zl(e) {
  if (e > Uh || e < Dh)
    throw new $r("expected scale >= " + Dh + " && <= " + Uh + ", got: " + e);
  return AP[e + 10]
}
a(Zl, "getMapping");
var bP = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , La = function() {
    function e(t, r) {
      this.low = t,
        this.high = r
    }
    return a(e, "HighLow"),
      e.combine = function(t, r) {
        return new e(Math.min(t.low, r.low), Math.max(t.high, r.high))
      }
      ,
      e
  }()
  , xP = 20
  , CP = 160
  , Ql = 2
  , Fh = function() {
    function e(t, r, n, o, i, s, l, d, u, f, p) {
      t === void 0 && (t = t),
        r === void 0 && (r = CP),
        n === void 0 && (n = !0),
        o === void 0 && (o = 0),
        i === void 0 && (i = 0),
        s === void 0 && (s = 0),
        l === void 0 && (l = Number.POSITIVE_INFINITY),
        d === void 0 && (d = Number.NEGATIVE_INFINITY),
        u === void 0 && (u = new Xl),
        f === void 0 && (f = new Xl),
        p === void 0 && (p = Zl(xP)),
        this.startTime = t,
        this._maxSize = r,
        this._recordMinMax = n,
        this._sum = o,
        this._count = i,
        this._zeroCount = s,
        this._min = l,
        this._max = d,
        this._positive = u,
        this._negative = f,
        this._mapping = p,
        this._maxSize < Ql && (C.warn("Exponential Histogram Max Size set to " + this._maxSize + ",                 changing to the minimum size of: " + Ql),
          this._maxSize = Ql)
    }
    return a(e, "ExponentialHistogramAccumulation"),
      e.prototype.record = function(t) {
        this.updateByIncrement(t, 1)
      }
      ,
      e.prototype.setStartTime = function(t) {
        this.startTime = t
      }
      ,
      e.prototype.toPointValue = function() {
        return {
          hasMinMax: this._recordMinMax,
          min: this.min,
          max: this.max,
          sum: this.sum,
          positive: {
            offset: this.positive.offset,
            bucketCounts: this.positive.counts()
          },
          negative: {
            offset: this.negative.offset,
            bucketCounts: this.negative.counts()
          },
          count: this.count,
          scale: this.scale,
          zeroCount: this.zeroCount
        }
      }
      ,
      Object.defineProperty(e.prototype, "sum", {
        get: a(function() {
          return this._sum
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "min", {
        get: a(function() {
          return this._min
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "max", {
        get: a(function() {
          return this._max
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "count", {
        get: a(function() {
          return this._count
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "zeroCount", {
        get: a(function() {
          return this._zeroCount
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "scale", {
        get: a(function() {
          return this._count === this._zeroCount ? 0 : this._mapping.scale
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "positive", {
        get: a(function() {
          return this._positive
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "negative", {
        get: a(function() {
          return this._negative
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.updateByIncrement = function(t, r) {
        if (!Number.isNaN(t)) {
          if (t > this._max && (this._max = t),
            t < this._min && (this._min = t),
            this._count += r,
            t === 0) {
            this._zeroCount += r;
            return
          }
          this._sum += t * r,
            t > 0 ? this._updateBuckets(this._positive, t, r) : this._updateBuckets(this._negative, -t, r)
        }
      }
      ,
      e.prototype.merge = function(t) {
        this._count === 0 ? (this._min = t.min,
          this._max = t.max) : t.count !== 0 && (t.min < this.min && (this._min = t.min),
            t.max > this.max && (this._max = t.max)),
          this.startTime = t.startTime,
          this._sum += t.sum,
          this._count += t.count,
          this._zeroCount += t.zeroCount;
        var r = this._minScale(t);
        this._downscale(this.scale - r),
          this._mergeBuckets(this.positive, t, t.positive, r),
          this._mergeBuckets(this.negative, t, t.negative, r)
      }
      ,
      e.prototype.diff = function(t) {
        this._min = 1 / 0,
          this._max = -1 / 0,
          this._sum -= t.sum,
          this._count -= t.count,
          this._zeroCount -= t.zeroCount;
        var r = this._minScale(t);
        this._downscale(this.scale - r),
          this._diffBuckets(this.positive, t, t.positive, r),
          this._diffBuckets(this.negative, t, t.negative, r)
      }
      ,
      e.prototype.clone = function() {
        return new e(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping)
      }
      ,
      e.prototype._updateBuckets = function(t, r, n) {
        var o = this._mapping.mapToIndex(r)
          , i = !1
          , s = 0
          , l = 0;
        if (t.length === 0 ? (t.indexStart = o,
          t.indexEnd = t.indexStart,
          t.indexBase = t.indexStart) : o < t.indexStart && t.indexEnd - o >= this._maxSize ? (i = !0,
            l = o,
            s = t.indexEnd) : o > t.indexEnd && o - t.indexStart >= this._maxSize && (i = !0,
              l = t.indexStart,
              s = o),
          i) {
          var d = this._changeScale(s, l);
          this._downscale(d),
            o = this._mapping.mapToIndex(r)
        }
        this._incrementIndexBy(t, o, n)
      }
      ,
      e.prototype._incrementIndexBy = function(t, r, n) {
        if (n !== 0) {
          if (t.length === 0 && (t.indexStart = t.indexEnd = t.indexBase = r),
            r < t.indexStart) {
            var o = t.indexEnd - r;
            o >= t.backing.length && this._grow(t, o + 1),
              t.indexStart = r
          } else if (r > t.indexEnd) {
            var o = r - t.indexStart;
            o >= t.backing.length && this._grow(t, o + 1),
              t.indexEnd = r
          }
          var i = r - t.indexBase;
          i < 0 && (i += t.backing.length),
            t.incrementBucket(i, n)
        }
      }
      ,
      e.prototype._grow = function(t, r) {
        var n = t.backing.length
          , o = t.indexBase - t.indexStart
          , i = n - o
          , s = Ih(r);
        s > this._maxSize && (s = this._maxSize);
        var l = s - o;
        t.backing.growTo(s, i, l)
      }
      ,
      e.prototype._changeScale = function(t, r) {
        for (var n = 0; t - r >= this._maxSize;)
          t >>= 1,
            r >>= 1,
            n++;
        return n
      }
      ,
      e.prototype._downscale = function(t) {
        if (t !== 0) {
          if (t < 0)
            throw new Error("impossible change of scale: " + this.scale);
          var r = this._mapping.scale - t;
          this._positive.downscale(t),
            this._negative.downscale(t),
            this._mapping = Zl(r)
        }
      }
      ,
      e.prototype._minScale = function(t) {
        var r = Math.min(this.scale, t.scale)
          , n = La.combine(this._highLowAtScale(this.positive, this.scale, r), this._highLowAtScale(t.positive, t.scale, r))
          , o = La.combine(this._highLowAtScale(this.negative, this.scale, r), this._highLowAtScale(t.negative, t.scale, r));
        return Math.min(r - this._changeScale(n.high, n.low), r - this._changeScale(o.high, o.low))
      }
      ,
      e.prototype._highLowAtScale = function(t, r, n) {
        if (t.length === 0)
          return new La(0, -1);
        var o = r - n;
        return new La(t.indexStart >> o, t.indexEnd >> o)
      }
      ,
      e.prototype._mergeBuckets = function(t, r, n, o) {
        for (var i = n.offset, s = r.scale - o, l = 0; l < n.length; l++)
          this._incrementIndexBy(t, i + l >> s, n.at(l))
      }
      ,
      e.prototype._diffBuckets = function(t, r, n, o) {
        for (var i = n.offset, s = r.scale - o, l = 0; l < n.length; l++) {
          var d = i + l >> s
            , u = d - t.indexBase;
          u < 0 && (u += t.backing.length),
            t.decrementBucket(u, n.at(l))
        }
        t.trim()
      }
      ,
      e
  }();
var Jl = function() {
  function e(t, r) {
    this._maxSize = t,
      this._recordMinMax = r,
      this.kind = Lt.EXPONENTIAL_HISTOGRAM
  }
  return a(e, "ExponentialHistogramAggregator"),
    e.prototype.createAccumulation = function(t) {
      return new Fh(t, this._maxSize, this._recordMinMax)
    }
    ,
    e.prototype.merge = function(t, r) {
      var n = r.clone();
      return n.merge(t),
        n
    }
    ,
    e.prototype.diff = function(t, r) {
      var n = r.clone();
      return n.diff(t),
        n
    }
    ,
    e.prototype.toMetricData = function(t, r, n, o) {
      return {
        descriptor: t,
        aggregationTemporality: r,
        dataPointType: nt.EXPONENTIAL_HISTOGRAM,
        dataPoints: n.map(function(i) {
          var s = bP(i, 2)
            , l = s[0]
            , d = s[1]
            , u = d.toPointValue()
            , f = t.type === X.GAUGE || t.type === X.UP_DOWN_COUNTER || t.type === X.OBSERVABLE_GAUGE || t.type === X.OBSERVABLE_UP_DOWN_COUNTER;
          return {
            attributes: l,
            startTime: d.startTime,
            endTime: o,
            value: {
              min: u.hasMinMax ? u.min : void 0,
              max: u.hasMinMax ? u.max : void 0,
              sum: f ? void 0 : u.sum,
              positive: {
                offset: u.positive.offset,
                bucketCounts: u.positive.bucketCounts
              },
              negative: {
                offset: u.negative.offset,
                bucketCounts: u.negative.bucketCounts
              },
              count: u.count,
              scale: u.scale,
              zeroCount: u.zeroCount
            }
          }
        })
      }
    }
    ,
    e
}();
c();
var hn = U(se());
var DD = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , Ts = function() {
    function e(t, r, n) {
      r === void 0 && (r = 0),
        n === void 0 && (n = [0, 0]),
        this.startTime = t,
        this._current = r,
        this.sampleTime = n
    }
    return a(e, "LastValueAccumulation"),
      e.prototype.record = function(t) {
        this._current = t,
          this.sampleTime = (0,
            hn.millisToHrTime)(Date.now())
      }
      ,
      e.prototype.setStartTime = function(t) {
        this.startTime = t
      }
      ,
      e.prototype.toPointValue = function() {
        return this._current
      }
      ,
      e
  }();
var ud = function() {
  function e() {
    this.kind = Lt.LAST_VALUE
  }
  return a(e, "LastValueAggregator"),
    e.prototype.createAccumulation = function(t) {
      return new Ts(t)
    }
    ,
    e.prototype.merge = function(t, r) {
      var n = (0,
        hn.hrTimeToMicroseconds)(r.sampleTime) >= (0,
          hn.hrTimeToMicroseconds)(t.sampleTime) ? r : t;
      return new Ts(t.startTime, n.toPointValue(), n.sampleTime)
    }
    ,
    e.prototype.diff = function(t, r) {
      var n = (0,
        hn.hrTimeToMicroseconds)(r.sampleTime) >= (0,
          hn.hrTimeToMicroseconds)(t.sampleTime) ? r : t;
      return new Ts(r.startTime, n.toPointValue(), n.sampleTime)
    }
    ,
    e.prototype.toMetricData = function(t, r, n, o) {
      return {
        descriptor: t,
        aggregationTemporality: r,
        dataPointType: nt.GAUGE,
        dataPoints: n.map(function(i) {
          var s = DD(i, 2)
            , l = s[0]
            , d = s[1];
          return {
            attributes: l,
            startTime: d.startTime,
            endTime: o,
            value: d.toPointValue()
          }
        })
      }
    }
    ,
    e
}();
c();
var UD = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , no = function() {
    function e(t, r, n, o) {
      n === void 0 && (n = 0),
        o === void 0 && (o = !1),
        this.startTime = t,
        this.monotonic = r,
        this._current = n,
        this.reset = o
    }
    return a(e, "SumAccumulation"),
      e.prototype.record = function(t) {
        this.monotonic && t < 0 || (this._current += t)
      }
      ,
      e.prototype.setStartTime = function(t) {
        this.startTime = t
      }
      ,
      e.prototype.toPointValue = function() {
        return this._current
      }
      ,
      e
  }();
var vs = function() {
  function e(t) {
    this.monotonic = t,
      this.kind = Lt.SUM
  }
  return a(e, "SumAggregator"),
    e.prototype.createAccumulation = function(t) {
      return new no(t, this.monotonic)
    }
    ,
    e.prototype.merge = function(t, r) {
      var n = t.toPointValue()
        , o = r.toPointValue();
      return r.reset ? new no(r.startTime, this.monotonic, o, r.reset) : new no(t.startTime, this.monotonic, n + o)
    }
    ,
    e.prototype.diff = function(t, r) {
      var n = t.toPointValue()
        , o = r.toPointValue();
      return this.monotonic && n > o ? new no(r.startTime, this.monotonic, o, !0) : new no(r.startTime, this.monotonic, o - n)
    }
    ,
    e.prototype.toMetricData = function(t, r, n, o) {
      return {
        descriptor: t,
        aggregationTemporality: r,
        dataPointType: nt.SUM,
        dataPoints: n.map(function(i) {
          var s = UD(i, 2)
            , l = s[0]
            , d = s[1];
          return {
            attributes: l,
            startTime: d.startTime,
            endTime: o,
            value: d.toPointValue()
          }
        }),
        isMonotonic: this.monotonic
      }
    }
    ,
    e
}();
var gn = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Tt = function() {
    function e() { }
    return a(e, "Aggregation"),
      e.Drop = function() {
        return mA
      }
      ,
      e.Sum = function() {
        return _A
      }
      ,
      e.LastValue = function() {
        return hA
      }
      ,
      e.Histogram = function() {
        return gA
      }
      ,
      e.ExponentialHistogram = function() {
        return FD
      }
      ,
      e.Default = function() {
        return BD
      }
      ,
      e
  }();
var lA = function(e) {
  gn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "DropAggregation"),
    t.prototype.createAggregator = function(r) {
      return t.DEFAULT_INSTANCE
    }
    ,
    t.DEFAULT_INSTANCE = new zl,
    t
}(Tt);
var cA = function(e) {
  gn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "SumAggregation"),
    t.prototype.createAggregator = function(r) {
      switch (r.type) {
        case X.COUNTER:
        case X.OBSERVABLE_COUNTER:
        case X.HISTOGRAM:
          return t.MONOTONIC_INSTANCE;
        default:
          return t.NON_MONOTONIC_INSTANCE
      }
    }
    ,
    t.MONOTONIC_INSTANCE = new vs(!0),
    t.NON_MONOTONIC_INSTANCE = new vs(!1),
    t
}(Tt);
var dA = function(e) {
  gn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "LastValueAggregation"),
    t.prototype.createAggregator = function(r) {
      return t.DEFAULT_INSTANCE
    }
    ,
    t.DEFAULT_INSTANCE = new ud,
    t
}(Tt);
var fA = function(e) {
  gn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "HistogramAggregation"),
    t.prototype.createAggregator = function(r) {
      return t.DEFAULT_INSTANCE
    }
    ,
    t.DEFAULT_INSTANCE = new Pa([0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1e3, 2500, 5e3, 7500, 1e4], !0),
    t
}(Tt);
var Ss = function(e) {
  gn(t, e);
  function t(r, n) {
    n === void 0 && (n = !0);
    var o = e.call(this) || this;
    if (o._recordMinMax = n,
      r == null)
      throw new Error("ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array");
    r = r.concat(),
      r = r.sort(function(l, d) {
        return l - d
      });
    var i = r.lastIndexOf(-1 / 0)
      , s = r.indexOf(1 / 0);
    return s === -1 && (s = void 0),
      o._boundaries = r.slice(i + 1, s),
      o
  }
  return a(t, "ExplicitBucketHistogramAggregation"),
    t.prototype.createAggregator = function(r) {
      return new Pa(this._boundaries, this._recordMinMax)
    }
    ,
    t
}(Tt);
var ys = function(e) {
  gn(t, e);
  function t(r, n) {
    r === void 0 && (r = 160),
      n === void 0 && (n = !0);
    var o = e.call(this) || this;
    return o._maxSize = r,
      o._recordMinMax = n,
      o
  }
  return a(t, "ExponentialHistogramAggregation"),
    t.prototype.createAggregator = function(r) {
      return new Jl(this._maxSize, this._recordMinMax)
    }
    ,
    t
}(Tt);
var pA = function(e) {
  gn(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "DefaultAggregation"),
    t.prototype._resolve = function(r) {
      switch (r.type) {
        case X.COUNTER:
        case X.UP_DOWN_COUNTER:
        case X.OBSERVABLE_COUNTER:
        case X.OBSERVABLE_UP_DOWN_COUNTER:
          return _A;
        case X.GAUGE:
        case X.OBSERVABLE_GAUGE:
          return hA;
        case X.HISTOGRAM:
          return r.advice.explicitBucketBoundaries ? new Ss(r.advice.explicitBucketBoundaries) : gA
      }
      return C.warn("Unable to recognize instrument type: " + r.type),
        mA
    }
    ,
    t.prototype.createAggregator = function(r) {
      return this._resolve(r).createAggregator(r)
    }
    ,
    t
}(Tt);
var mA = new lA
  , _A = new cA
  , hA = new dA
  , gA = new fA
  , FD = new ys
  , BD = new pA;
var EA = a(function(e) {
  return Tt.Default()
}, "DEFAULT_AGGREGATION_SELECTOR")
  , As = a(function(e) {
    return Ye.CUMULATIVE
  }, "DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR");
var ld = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , cd = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , TA = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , VD = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , dd = function() {
    function e(t) {
      var r, n, o;
      this._shutdown = !1,
        this._aggregationSelector = (r = t == null ? void 0 : t.aggregationSelector) !== null && r !== void 0 ? r : EA,
        this._aggregationTemporalitySelector = (n = t == null ? void 0 : t.aggregationTemporalitySelector) !== null && n !== void 0 ? n : As,
        this._metricProducers = (o = t == null ? void 0 : t.metricProducers) !== null && o !== void 0 ? o : [],
        this._cardinalitySelector = t == null ? void 0 : t.cardinalitySelector
    }
    return a(e, "MetricReader"),
      e.prototype.setMetricProducer = function(t) {
        if (this._sdkMetricProducer)
          throw new Error("MetricReader can not be bound to a MeterProvider again.");
        this._sdkMetricProducer = t,
          this.onInitialized()
      }
      ,
      e.prototype.selectAggregation = function(t) {
        return this._aggregationSelector(t)
      }
      ,
      e.prototype.selectAggregationTemporality = function(t) {
        return this._aggregationTemporalitySelector(t)
      }
      ,
      e.prototype.selectCardinalityLimit = function(t) {
        return this._cardinalitySelector ? this._cardinalitySelector(t) : 2e3
      }
      ,
      e.prototype.onInitialized = function() { }
      ,
      e.prototype.collect = function(t) {
        return ld(this, void 0, void 0, function() {
          var r, n, o, i, s, l;
          return cd(this, function(d) {
            switch (d.label) {
              case 0:
                if (this._sdkMetricProducer === void 0)
                  throw new Error("MetricReader is not bound to a MetricProducer");
                if (this._shutdown)
                  throw new Error("MetricReader is shutdown");
                return [4, Promise.all(VD([this._sdkMetricProducer.collect({
                  timeoutMillis: t == null ? void 0 : t.timeoutMillis
                })], TA(this._metricProducers.map(function(u) {
                  return u.collect({
                    timeoutMillis: t == null ? void 0 : t.timeoutMillis
                  })
                })), !1))];
              case 1:
                return r = TA.apply(void 0, [d.sent()]),
                  n = r[0],
                  o = r.slice(1),
                  i = n.errors.concat(jl(o, function(u) {
                    return u.errors
                  })),
                  s = n.resourceMetrics.resource,
                  l = n.resourceMetrics.scopeMetrics.concat(jl(o, function(u) {
                    return u.resourceMetrics.scopeMetrics
                  })),
                  [2, {
                    resourceMetrics: {
                      resource: s,
                      scopeMetrics: l
                    },
                    errors: i
                  }]
            }
          })
        })
      }
      ,
      e.prototype.shutdown = function(t) {
        return ld(this, void 0, void 0, function() {
          return cd(this, function(r) {
            switch (r.label) {
              case 0:
                return this._shutdown ? (C.error("Cannot call shutdown twice."),
                  [2]) : (t == null ? void 0 : t.timeoutMillis) != null ? [3, 2] : [4, this.onShutdown()];
              case 1:
                return r.sent(),
                  [3, 4];
              case 2:
                return [4, Xn(this.onShutdown(), t.timeoutMillis)];
              case 3:
                r.sent(),
                  r.label = 4;
              case 4:
                return this._shutdown = !0,
                  [2]
            }
          })
        })
      }
      ,
      e.prototype.forceFlush = function(t) {
        return ld(this, void 0, void 0, function() {
          return cd(this, function(r) {
            switch (r.label) {
              case 0:
                return this._shutdown ? (C.warn("Cannot forceFlush on already shutdown MetricReader."),
                  [2]) : (t == null ? void 0 : t.timeoutMillis) != null ? [3, 2] : [4, this.onForceFlush()];
              case 1:
                return r.sent(),
                  [2];
              case 2:
                return [4, Xn(this.onForceFlush(), t.timeoutMillis)];
              case 3:
                return r.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e
  }();
c();
var fd = U(se());
var vA = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , pd = function() {
    function e(t) {
      var r;
      this._shutdown = !1,
        this._temporalitySelector = (r = t == null ? void 0 : t.temporalitySelector) !== null && r !== void 0 ? r : As
    }
    return a(e, "ConsoleMetricExporter"),
      e.prototype.export = function(t, r) {
        if (this._shutdown) {
          setImmediate(r, {
            code: fd.ExportResultCode.FAILED
          });
          return
        }
        return e._sendMetrics(t, r)
      }
      ,
      e.prototype.forceFlush = function() {
        return Promise.resolve()
      }
      ,
      e.prototype.selectAggregationTemporality = function(t) {
        return this._temporalitySelector(t)
      }
      ,
      e.prototype.shutdown = function() {
        return this._shutdown = !0,
          Promise.resolve()
      }
      ,
      e._sendMetrics = function(t, r) {
        var n, o, i, s;
        try {
          for (var l = vA(t.scopeMetrics), d = l.next(); !d.done; d = l.next()) {
            var u = d.value;
            try {
              for (var f = (i = void 0,
                vA(u.metrics)), p = f.next(); !p.done; p = f.next()) {
                var _ = p.value;
                console.dir({
                  descriptor: _.descriptor,
                  dataPointType: _.dataPointType,
                  dataPoints: _.dataPoints
                }, {
                  depth: null
                })
              }
            } catch (S) {
              i = {
                error: S
              }
            } finally {
              try {
                p && !p.done && (s = f.return) && s.call(f)
              } finally {
                if (i)
                  throw i.error
              }
            }
          }
        } catch (S) {
          n = {
            error: S
          }
        } finally {
          try {
            d && !d.done && (o = l.return) && o.call(l)
          } finally {
            if (n)
              throw n.error
          }
        }
        r({
          code: fd.ExportResultCode.SUCCESS
        })
      }
      ,
      e
  }();
c();
G();
c();
c();
G();
Qn();
var bs = U(se());
c();
c();
function md() {
  return "unknown_service"
}
a(md, "defaultServiceName");
var Vr = function() {
  return Vr = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
  }
    ,
    Vr.apply(this, arguments)
}
  , kD = function(e, t, r, n) {
    function o(i) {
      return i instanceof r ? i : new r(function(s) {
        s(i)
      }
      )
    }
    return a(o, "adopt"),
      new (r || (r = Promise))(function(i, s) {
        function l(f) {
          try {
            u(n.next(f))
          } catch (p) {
            s(p)
          }
        }
        a(l, "fulfilled");
        function d(f) {
          try {
            u(n.throw(f))
          } catch (p) {
            s(p)
          }
        }
        a(d, "rejected");
        function u(f) {
          f.done ? i(f.value) : o(f.value).then(l, d)
        }
        a(u, "step"),
          u((n = n.apply(e, t || [])).next())
      }
      )
  }
  , HD = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , GD = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , at = function() {
    function e(t, r) {
      var n = this, o;
      this._attributes = t,
        this.asyncAttributesPending = r != null,
        this._syncAttributes = (o = this._attributes) !== null && o !== void 0 ? o : {},
        this._asyncAttributesPromise = r == null ? void 0 : r.then(function(i) {
          return n._attributes = Object.assign({}, n._attributes, i),
            n.asyncAttributesPending = !1,
            i
        }, function(i) {
          return C.debug("a resource's async attributes promise rejected: %s", i),
            n.asyncAttributesPending = !1,
            {}
        })
    }
    return a(e, "Resource"),
      e.empty = function() {
        return e.EMPTY
      }
      ,
      e.default = function() {
        var t;
        return new e((t = {},
          t[Nc] = md(),
          t[za] = bs.SDK_INFO[za],
          t[ja] = bs.SDK_INFO[ja],
          t[Wa] = bs.SDK_INFO[Wa],
          t))
      }
      ,
      Object.defineProperty(e.prototype, "attributes", {
        get: a(function() {
          var t;
          return this.asyncAttributesPending && C.error("Accessing resource attributes before async attributes settled"),
            (t = this._attributes) !== null && t !== void 0 ? t : {}
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.waitForAsyncAttributes = function() {
        return kD(this, void 0, void 0, function() {
          return HD(this, function(t) {
            switch (t.label) {
              case 0:
                return this.asyncAttributesPending ? [4, this._asyncAttributesPromise] : [3, 2];
              case 1:
                t.sent(),
                  t.label = 2;
              case 2:
                return [2]
            }
          })
        })
      }
      ,
      e.prototype.merge = function(t) {
        var r = this, n;
        if (!t)
          return this;
        var o = Vr(Vr({}, this._syncAttributes), (n = t._syncAttributes) !== null && n !== void 0 ? n : t.attributes);
        if (!this._asyncAttributesPromise && !t._asyncAttributesPromise)
          return new e(o);
        var i = Promise.all([this._asyncAttributesPromise, t._asyncAttributesPromise]).then(function(s) {
          var l, d = GD(s, 2), u = d[0], f = d[1];
          return Vr(Vr(Vr(Vr({}, r._syncAttributes), u), (l = t._syncAttributes) !== null && l !== void 0 ? l : t.attributes), f)
        });
        return new e(o, i)
      }
      ,
      e.EMPTY = new e({}),
      e
  }();
c();
c();
var SA = function() {
  function e() {
    this._registeredViews = []
  }
  return a(e, "ViewRegistry"),
    e.prototype.addView = function(t) {
      this._registeredViews.push(t)
    }
    ,
    e.prototype.findViews = function(t, r) {
      var n = this
        , o = this._registeredViews.filter(function(i) {
          return n._matchInstrument(i.instrumentSelector, t) && n._matchMeter(i.meterSelector, r)
        });
      return o
    }
    ,
    e.prototype._matchInstrument = function(t, r) {
      return (t.getType() === void 0 || r.type === t.getType()) && t.getNameFilter().match(r.name) && t.getUnitFilter().match(r.unit)
    }
    ,
    e.prototype._matchMeter = function(t, r) {
      return t.getNameFilter().match(r.name) && (r.version === void 0 || t.getVersionFilter().match(r.version)) && (r.schemaUrl === void 0 || t.getSchemaUrlFilter().match(r.schemaUrl))
    }
    ,
    e
}();
c();
c();
c();
G();
var yA = U(se());
var En = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , xs = function() {
    function e(t, r) {
      this._writableMetricStorage = t,
        this._descriptor = r
    }
    return a(e, "SyncInstrument"),
      e.prototype._record = function(t, r, n) {
        if (r === void 0 && (r = {}),
          n === void 0 && (n = ve.active()),
          typeof t != "number") {
          C.warn("non-number value provided to metric " + this._descriptor.name + ": " + t);
          return
        }
        this._descriptor.valueType === Fe.INT && !Number.isInteger(t) && (C.warn("INT value type cannot accept a floating-point value for " + this._descriptor.name + ", ignoring the fractional digits."),
          t = Math.trunc(t),
          !Number.isInteger(t)) || this._writableMetricStorage.record(t, r, n, (0,
            yA.millisToHrTime)(Date.now()))
      }
      ,
      e
  }();
var AA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "UpDownCounterInstrument"),
    t.prototype.add = function(r, n, o) {
      this._record(r, n, o)
    }
    ,
    t
}(xs);
var bA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "CounterInstrument"),
    t.prototype.add = function(r, n, o) {
      if (r < 0) {
        C.warn("negative value provided to counter " + this._descriptor.name + ": " + r);
        return
      }
      this._record(r, n, o)
    }
    ,
    t
}(xs);
var xA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "GaugeInstrument"),
    t.prototype.record = function(r, n, o) {
      this._record(r, n, o)
    }
    ,
    t
}(xs);
var CA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "HistogramInstrument"),
    t.prototype.record = function(r, n, o) {
      if (r < 0) {
        C.warn("negative value provided to histogram " + this._descriptor.name + ": " + r);
        return
      }
      this._record(r, n, o)
    }
    ,
    t
}(xs);
var Cs = function() {
  function e(t, r, n) {
    this._observableRegistry = n,
      this._descriptor = t,
      this._metricStorages = r
  }
  return a(e, "ObservableInstrument"),
    e.prototype.addCallback = function(t) {
      this._observableRegistry.addCallback(t, this)
    }
    ,
    e.prototype.removeCallback = function(t) {
      this._observableRegistry.removeCallback(t, this)
    }
    ,
    e
}();
var RA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "ObservableCounterInstrument"),
    t
}(Cs);
var OA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "ObservableGaugeInstrument"),
    t
}(Cs);
var PA = function(e) {
  En(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "ObservableUpDownCounterInstrument"),
    t
}(Cs);
function ci(e) {
  return e instanceof Cs
}
a(ci, "isObservableInstrument");
var NA = function() {
  function e(t) {
    this._meterSharedState = t
  }
  return a(e, "Meter"),
    e.prototype.createGauge = function(t, r) {
      var n = rr(t, X.GAUGE, r)
        , o = this._meterSharedState.registerMetricStorage(n);
      return new xA(o, n)
    }
    ,
    e.prototype.createHistogram = function(t, r) {
      var n = rr(t, X.HISTOGRAM, r)
        , o = this._meterSharedState.registerMetricStorage(n);
      return new CA(o, n)
    }
    ,
    e.prototype.createCounter = function(t, r) {
      var n = rr(t, X.COUNTER, r)
        , o = this._meterSharedState.registerMetricStorage(n);
      return new bA(o, n)
    }
    ,
    e.prototype.createUpDownCounter = function(t, r) {
      var n = rr(t, X.UP_DOWN_COUNTER, r)
        , o = this._meterSharedState.registerMetricStorage(n);
      return new AA(o, n)
    }
    ,
    e.prototype.createObservableGauge = function(t, r) {
      var n = rr(t, X.OBSERVABLE_GAUGE, r)
        , o = this._meterSharedState.registerAsyncMetricStorage(n);
      return new OA(n, o, this._meterSharedState.observableRegistry)
    }
    ,
    e.prototype.createObservableCounter = function(t, r) {
      var n = rr(t, X.OBSERVABLE_COUNTER, r)
        , o = this._meterSharedState.registerAsyncMetricStorage(n);
      return new RA(n, o, this._meterSharedState.observableRegistry)
    }
    ,
    e.prototype.createObservableUpDownCounter = function(t, r) {
      var n = rr(t, X.OBSERVABLE_UP_DOWN_COUNTER, r)
        , o = this._meterSharedState.registerAsyncMetricStorage(n);
      return new PA(n, o, this._meterSharedState.observableRegistry)
    }
    ,
    e.prototype.addBatchObservableCallback = function(t, r) {
      this._meterSharedState.observableRegistry.addBatchCallback(t, r)
    }
    ,
    e.prototype.removeBatchObservableCallback = function(t, r) {
      this._meterSharedState.observableRegistry.removeBatchCallback(t, r)
    }
    ,
    e
}();
c();
c();
var Rs = function() {
  function e(t) {
    this._instrumentDescriptor = t
  }
  return a(e, "MetricStorage"),
    e.prototype.getInstrumentDescriptor = function() {
      return this._instrumentDescriptor
    }
    ,
    e.prototype.updateDescription = function(t) {
      this._instrumentDescriptor = rr(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
        description: t,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice
      })
    }
    ,
    e
}();
c();
c();
var YD = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , wA = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , jD = function() {
    function e(t) {
      this._hash = t,
        this._valueMap = new Map,
        this._keyMap = new Map
    }
    return a(e, "HashMap"),
      e.prototype.get = function(t, r) {
        return r != null || (r = this._hash(t)),
          this._valueMap.get(r)
      }
      ,
      e.prototype.getOrDefault = function(t, r) {
        var n = this._hash(t);
        if (this._valueMap.has(n))
          return this._valueMap.get(n);
        var o = r();
        return this._keyMap.has(n) || this._keyMap.set(n, t),
          this._valueMap.set(n, o),
          o
      }
      ,
      e.prototype.set = function(t, r, n) {
        n != null || (n = this._hash(t)),
          this._keyMap.has(n) || this._keyMap.set(n, t),
          this._valueMap.set(n, r)
      }
      ,
      e.prototype.has = function(t, r) {
        return r != null || (r = this._hash(t)),
          this._valueMap.has(r)
      }
      ,
      e.prototype.keys = function() {
        var t, r;
        return wA(this, function(n) {
          switch (n.label) {
            case 0:
              t = this._keyMap.entries(),
                r = t.next(),
                n.label = 1;
            case 1:
              return r.done === !0 ? [3, 3] : [4, [r.value[1], r.value[0]]];
            case 2:
              return n.sent(),
                r = t.next(),
                [3, 1];
            case 3:
              return [2]
          }
        })
      }
      ,
      e.prototype.entries = function() {
        var t, r;
        return wA(this, function(n) {
          switch (n.label) {
            case 0:
              t = this._valueMap.entries(),
                r = t.next(),
                n.label = 1;
            case 1:
              return r.done === !0 ? [3, 3] : [4, [this._keyMap.get(r.value[0]), r.value[1], r.value[0]]];
            case 2:
              return n.sent(),
                r = t.next(),
                [3, 1];
            case 3:
              return [2]
          }
        })
      }
      ,
      Object.defineProperty(e.prototype, "size", {
        get: a(function() {
          return this._valueMap.size
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e
  }();
var jt = function(e) {
  YD(t, e);
  function t() {
    return e.call(this, Ra) || this
  }
  return a(t, "AttributeHashMap"),
    t
}(jD);
var zD = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , Os = function() {
    function e(t, r) {
      this._aggregator = t,
        this._activeCollectionStorage = new jt,
        this._cumulativeMemoStorage = new jt,
        this._overflowAttributes = {
          "otel.metric.overflow": !0
        },
        this._cardinalityLimit = (r != null ? r : 2e3) - 1,
        this._overflowHashCode = Ra(this._overflowAttributes)
    }
    return a(e, "DeltaMetricProcessor"),
      e.prototype.record = function(t, r, n, o) {
        var i = this
          , s = this._activeCollectionStorage.get(r);
        if (!s) {
          if (this._activeCollectionStorage.size >= this._cardinalityLimit) {
            var l = this._activeCollectionStorage.getOrDefault(this._overflowAttributes, function() {
              return i._aggregator.createAccumulation(o)
            });
            l == null || l.record(t);
            return
          }
          s = this._aggregator.createAccumulation(o),
            this._activeCollectionStorage.set(r, s)
        }
        s == null || s.record(t)
      }
      ,
      e.prototype.batchCumulate = function(t, r) {
        var n = this;
        Array.from(t.entries()).forEach(function(o) {
          var i = zD(o, 3)
            , s = i[0]
            , l = i[1]
            , d = i[2]
            , u = n._aggregator.createAccumulation(r);
          u == null || u.record(l);
          var f = u;
          if (n._cumulativeMemoStorage.has(s, d)) {
            var p = n._cumulativeMemoStorage.get(s, d);
            f = n._aggregator.diff(p, u)
          } else if (n._cumulativeMemoStorage.size >= n._cardinalityLimit && (s = n._overflowAttributes,
            d = n._overflowHashCode,
            n._cumulativeMemoStorage.has(s, d))) {
            var p = n._cumulativeMemoStorage.get(s, d);
            f = n._aggregator.diff(p, u)
          }
          if (n._activeCollectionStorage.has(s, d)) {
            var _ = n._activeCollectionStorage.get(s, d);
            f = n._aggregator.merge(_, f)
          }
          n._cumulativeMemoStorage.set(s, u, d),
            n._activeCollectionStorage.set(s, f, d)
        })
      }
      ,
      e.prototype.collect = function() {
        var t = this._activeCollectionStorage;
        return this._activeCollectionStorage = new jt,
          t
      }
      ,
      e
  }();
c();
var _d = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , IA = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , Ps = function() {
    function e(t, r) {
      var n = this;
      this._aggregator = t,
        this._unreportedAccumulations = new Map,
        this._reportHistory = new Map,
        r.forEach(function(o) {
          n._unreportedAccumulations.set(o, [])
        })
    }
    return a(e, "TemporalMetricProcessor"),
      e.prototype.buildMetrics = function(t, r, n, o) {
        this._stashAccumulations(n);
        var i = this._getMergedUnreportedAccumulations(t), s = i, l;
        if (this._reportHistory.has(t)) {
          var d = this._reportHistory.get(t)
            , u = d.collectionTime;
          l = d.aggregationTemporality,
            l === Ye.CUMULATIVE ? s = e.merge(d.accumulations, i, this._aggregator) : s = e.calibrateStartTime(d.accumulations, i, u)
        } else
          l = t.selectAggregationTemporality(r.type);
        this._reportHistory.set(t, {
          accumulations: s,
          collectionTime: o,
          aggregationTemporality: l
        });
        var f = WD(s);
        if (f.length !== 0)
          return this._aggregator.toMetricData(r, l, f, o)
      }
      ,
      e.prototype._stashAccumulations = function(t) {
        var r, n, o = this._unreportedAccumulations.keys();
        try {
          for (var i = _d(o), s = i.next(); !s.done; s = i.next()) {
            var l = s.value
              , d = this._unreportedAccumulations.get(l);
            d === void 0 && (d = [],
              this._unreportedAccumulations.set(l, d)),
              d.push(t)
          }
        } catch (u) {
          r = {
            error: u
          }
        } finally {
          try {
            s && !s.done && (n = i.return) && n.call(i)
          } finally {
            if (r)
              throw r.error
          }
        }
      }
      ,
      e.prototype._getMergedUnreportedAccumulations = function(t) {
        var r, n, o = new jt, i = this._unreportedAccumulations.get(t);
        if (this._unreportedAccumulations.set(t, []),
          i === void 0)
          return o;
        try {
          for (var s = _d(i), l = s.next(); !l.done; l = s.next()) {
            var d = l.value;
            o = e.merge(o, d, this._aggregator)
          }
        } catch (u) {
          r = {
            error: u
          }
        } finally {
          try {
            l && !l.done && (n = s.return) && n.call(s)
          } finally {
            if (r)
              throw r.error
          }
        }
        return o
      }
      ,
      e.merge = function(t, r, n) {
        for (var o = t, i = r.entries(), s = i.next(); s.done !== !0;) {
          var l = IA(s.value, 3)
            , d = l[0]
            , u = l[1]
            , f = l[2];
          if (t.has(d, f)) {
            var p = t.get(d, f)
              , _ = n.merge(p, u);
            o.set(d, _, f)
          } else
            o.set(d, u, f);
          s = i.next()
        }
        return o
      }
      ,
      e.calibrateStartTime = function(t, r, n) {
        var o, i;
        try {
          for (var s = _d(t.keys()), l = s.next(); !l.done; l = s.next()) {
            var d = IA(l.value, 2)
              , u = d[0]
              , f = d[1]
              , p = r.get(u, f);
            p == null || p.setStartTime(n)
          }
        } catch (_) {
          o = {
            error: _
          }
        } finally {
          try {
            l && !l.done && (i = s.return) && i.call(s)
          } finally {
            if (o)
              throw o.error
          }
        }
        return r
      }
      ,
      e
  }();
function WD(e) {
  return Array.from(e.entries())
}
a(WD, "AttributesMapToAccumulationRecords");
var KD = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , XD = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , MA = function(e) {
    KD(t, e);
    function t(r, n, o, i, s) {
      var l = e.call(this, r) || this;
      return l._attributesProcessor = o,
        l._aggregationCardinalityLimit = s,
        l._deltaMetricStorage = new Os(n, l._aggregationCardinalityLimit),
        l._temporalMetricStorage = new Ps(n, i),
        l
    }
    return a(t, "AsyncMetricStorage"),
      t.prototype.record = function(r, n) {
        var o = this
          , i = new jt;
        Array.from(r.entries()).forEach(function(s) {
          var l = XD(s, 2)
            , d = l[0]
            , u = l[1];
          i.set(o._attributesProcessor.process(d), u)
        }),
          this._deltaMetricStorage.batchCumulate(i, n)
      }
      ,
      t.prototype.collect = function(r, n) {
        var o = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(r, this._instrumentDescriptor, o, n)
      }
      ,
      t
  }(Rs);
c();
G();
c();
function hd(e, t) {
  var r = "";
  return e.unit !== t.unit && (r += "	- Unit '" + e.unit + "' does not match '" + t.unit + `'
`),
    e.type !== t.type && (r += "	- Type '" + e.type + "' does not match '" + t.type + `'
`),
    e.valueType !== t.valueType && (r += "	- Value Type '" + e.valueType + "' does not match '" + t.valueType + `'
`),
    e.description !== t.description && (r += "	- Description '" + e.description + "' does not match '" + t.description + `'
`),
    r
}
a(hd, "getIncompatibilityDetails");
function qD(e, t) {
  return "	- use valueType '" + e.valueType + "' on instrument creation or use an instrument name other than '" + t.name + "'"
}
a(qD, "getValueTypeConflictResolutionRecipe");
function ZD(e, t) {
  return "	- use unit '" + e.unit + "' on instrument creation or use an instrument name other than '" + t.name + "'"
}
a(ZD, "getUnitConflictResolutionRecipe");
function QD(e, t) {
  var r = {
    name: t.name,
    type: t.type,
    unit: t.unit
  }
    , n = JSON.stringify(r);
  return "	- create a new view with a name other than '" + e.name + "' and InstrumentSelector '" + n + "'"
}
a(QD, "getTypeConflictResolutionRecipe");
function JD(e, t) {
  var r = {
    name: t.name,
    type: t.type,
    unit: t.unit
  }
    , n = JSON.stringify(r);
  return "	- create a new view with a name other than '" + e.name + "' and InstrumentSelector '" + n + `'
    	- OR - create a new view with the name ` + e.name + " and description '" + e.description + "' and InstrumentSelector " + n + `
    	- OR - create a new view with the name ` + t.name + " and description '" + e.description + "' and InstrumentSelector " + n
}
a(JD, "getDescriptionResolutionRecipe");
function gd(e, t) {
  return e.valueType !== t.valueType ? qD(e, t) : e.unit !== t.unit ? ZD(e, t) : e.type !== t.type ? QD(e, t) : e.description !== t.description ? JD(e, t) : ""
}
a(gd, "getConflictResolutionRecipe");
var Ed = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , LA = function() {
    function e() {
      this._sharedRegistry = new Map,
        this._perCollectorRegistry = new Map
    }
    return a(e, "MetricStorageRegistry"),
      e.create = function() {
        return new e
      }
      ,
      e.prototype.getStorages = function(t) {
        var r, n, o, i, s = [];
        try {
          for (var l = Ed(this._sharedRegistry.values()), d = l.next(); !d.done; d = l.next()) {
            var u = d.value;
            s = s.concat(u)
          }
        } catch (S) {
          r = {
            error: S
          }
        } finally {
          try {
            d && !d.done && (n = l.return) && n.call(l)
          } finally {
            if (r)
              throw r.error
          }
        }
        var f = this._perCollectorRegistry.get(t);
        if (f != null)
          try {
            for (var p = Ed(f.values()), _ = p.next(); !_.done; _ = p.next()) {
              var u = _.value;
              s = s.concat(u)
            }
          } catch (S) {
            o = {
              error: S
            }
          } finally {
            try {
              _ && !_.done && (i = p.return) && i.call(p)
            } finally {
              if (o)
                throw o.error
            }
          }
        return s
      }
      ,
      e.prototype.register = function(t) {
        this._registerStorage(t, this._sharedRegistry)
      }
      ,
      e.prototype.registerForCollector = function(t, r) {
        var n = this._perCollectorRegistry.get(t);
        n == null && (n = new Map,
          this._perCollectorRegistry.set(t, n)),
          this._registerStorage(r, n)
      }
      ,
      e.prototype.findOrUpdateCompatibleStorage = function(t) {
        var r = this._sharedRegistry.get(t.name);
        return r === void 0 ? null : this._findOrUpdateCompatibleStorage(t, r)
      }
      ,
      e.prototype.findOrUpdateCompatibleCollectorStorage = function(t, r) {
        var n = this._perCollectorRegistry.get(t);
        if (n === void 0)
          return null;
        var o = n.get(r.name);
        return o === void 0 ? null : this._findOrUpdateCompatibleStorage(r, o)
      }
      ,
      e.prototype._registerStorage = function(t, r) {
        var n = t.getInstrumentDescriptor()
          , o = r.get(n.name);
        if (o === void 0) {
          r.set(n.name, [t]);
          return
        }
        o.push(t)
      }
      ,
      e.prototype._findOrUpdateCompatibleStorage = function(t, r) {
        var n, o, i = null;
        try {
          for (var s = Ed(r), l = s.next(); !l.done; l = s.next()) {
            var d = l.value
              , u = d.getInstrumentDescriptor();
            Ph(u, t) ? (u.description !== t.description && (t.description.length > u.description.length && d.updateDescription(t.description),
              C.warn("A view or instrument with the name ", t.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, hd(u, t), `The longer description will be used.
To resolve the conflict:`, gd(u, t))),
              i = d) : C.warn("A view or instrument with the name ", t.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, hd(u, t), `To resolve the conflict:
`, gd(u, t))
          }
        } catch (f) {
          n = {
            error: f
          }
        } finally {
          try {
            l && !l.done && (o = s.return) && o.call(s)
          } finally {
            if (n)
              throw n.error
          }
        }
        return i
      }
      ,
      e
  }();
c();
var $A = function() {
  function e(t) {
    this._backingStorages = t
  }
  return a(e, "MultiMetricStorage"),
    e.prototype.record = function(t, r, n, o) {
      this._backingStorages.forEach(function(i) {
        i.record(t, r, n, o)
      })
    }
    ,
    e
}();
c();
G();
c();
G();
var DA = function() {
  function e(t, r) {
    this._instrumentName = t,
      this._valueType = r,
      this._buffer = new jt
  }
  return a(e, "ObservableResultImpl"),
    e.prototype.observe = function(t, r) {
      if (r === void 0 && (r = {}),
        typeof t != "number") {
        C.warn("non-number value provided to metric " + this._instrumentName + ": " + t);
        return
      }
      this._valueType === Fe.INT && !Number.isInteger(t) && (C.warn("INT value type cannot accept a floating-point value for " + this._instrumentName + ", ignoring the fractional digits."),
        t = Math.trunc(t),
        !Number.isInteger(t)) || this._buffer.set(r, t)
    }
    ,
    e
}();
var UA = function() {
  function e() {
    this._buffer = new Map
  }
  return a(e, "BatchObservableResultImpl"),
    e.prototype.observe = function(t, r, n) {
      if (n === void 0 && (n = {}),
        !!ci(t)) {
        var o = this._buffer.get(t);
        if (o == null && (o = new jt,
          this._buffer.set(t, o)),
          typeof r != "number") {
          C.warn("non-number value provided to metric " + t._descriptor.name + ": " + r);
          return
        }
        t._descriptor.valueType === Fe.INT && !Number.isInteger(r) && (C.warn("INT value type cannot accept a floating-point value for " + t._descriptor.name + ", ignoring the fractional digits."),
          r = Math.trunc(r),
          !Number.isInteger(r)) || o.set(n, r)
      }
    }
    ,
    e
}();
var Td = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , vd = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , FA = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , BA = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , VA = function() {
    function e() {
      this._callbacks = [],
        this._batchCallbacks = []
    }
    return a(e, "ObservableRegistry"),
      e.prototype.addCallback = function(t, r) {
        var n = this._findCallback(t, r);
        n >= 0 || this._callbacks.push({
          callback: t,
          instrument: r
        })
      }
      ,
      e.prototype.removeCallback = function(t, r) {
        var n = this._findCallback(t, r);
        n < 0 || this._callbacks.splice(n, 1)
      }
      ,
      e.prototype.addBatchCallback = function(t, r) {
        var n = new Set(r.filter(ci));
        if (n.size === 0) {
          C.error("BatchObservableCallback is not associated with valid instruments", r);
          return
        }
        var o = this._findBatchCallback(t, n);
        o >= 0 || this._batchCallbacks.push({
          callback: t,
          instruments: n
        })
      }
      ,
      e.prototype.removeBatchCallback = function(t, r) {
        var n = new Set(r.filter(ci))
          , o = this._findBatchCallback(t, n);
        o < 0 || this._batchCallbacks.splice(o, 1)
      }
      ,
      e.prototype.observe = function(t, r) {
        return Td(this, void 0, void 0, function() {
          var n, o, i, s;
          return vd(this, function(l) {
            switch (l.label) {
              case 0:
                return n = this._observeCallbacks(t, r),
                  o = this._observeBatchCallbacks(t, r),
                  [4, Ah(BA(BA([], FA(n), !1), FA(o), !1))];
              case 1:
                return i = l.sent(),
                  s = i.filter(bh).map(function(d) {
                    return d.reason
                  }),
                  [2, s]
            }
          })
        })
      }
      ,
      e.prototype._observeCallbacks = function(t, r) {
        var n = this;
        return this._callbacks.map(function(o) {
          var i = o.callback
            , s = o.instrument;
          return Td(n, void 0, void 0, function() {
            var l, d;
            return vd(this, function(u) {
              switch (u.label) {
                case 0:
                  return l = new DA(s._descriptor.name, s._descriptor.valueType),
                    d = Promise.resolve(i(l)),
                    r != null && (d = Xn(d, r)),
                    [4, d];
                case 1:
                  return u.sent(),
                    s._metricStorages.forEach(function(f) {
                      f.record(l._buffer, t)
                    }),
                    [2]
              }
            })
          })
        })
      }
      ,
      e.prototype._observeBatchCallbacks = function(t, r) {
        var n = this;
        return this._batchCallbacks.map(function(o) {
          var i = o.callback
            , s = o.instruments;
          return Td(n, void 0, void 0, function() {
            var l, d;
            return vd(this, function(u) {
              switch (u.label) {
                case 0:
                  return l = new UA,
                    d = Promise.resolve(i(l)),
                    r != null && (d = Xn(d, r)),
                    [4, d];
                case 1:
                  return u.sent(),
                    s.forEach(function(f) {
                      var p = l._buffer.get(f);
                      p != null && f._metricStorages.forEach(function(_) {
                        _.record(p, t)
                      })
                    }),
                    [2]
              }
            })
          })
        })
      }
      ,
      e.prototype._findCallback = function(t, r) {
        return this._callbacks.findIndex(function(n) {
          return n.callback === t && n.instrument === r
        })
      }
      ,
      e.prototype._findBatchCallback = function(t, r) {
        return this._batchCallbacks.findIndex(function(n) {
          return n.callback === t && xh(n.instruments, r)
        })
      }
      ,
      e
  }();
c();
var e7 = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , kA = function(e) {
    e7(t, e);
    function t(r, n, o, i, s) {
      var l = e.call(this, r) || this;
      return l._attributesProcessor = o,
        l._aggregationCardinalityLimit = s,
        l._deltaMetricStorage = new Os(n, l._aggregationCardinalityLimit),
        l._temporalMetricStorage = new Ps(n, i),
        l
    }
    return a(t, "SyncMetricStorage"),
      t.prototype.record = function(r, n, o, i) {
        n = this._attributesProcessor.process(n, o),
          this._deltaMetricStorage.record(r, n, o, i)
      }
      ,
      t.prototype.collect = function(r, n) {
        var o = this._deltaMetricStorage.collect();
        return this._temporalMetricStorage.buildMetrics(r, this._instrumentDescriptor, o, n)
      }
      ,
      t
  }(Rs);
c();
var HA = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , oo = function() {
    function e() { }
    return a(e, "AttributesProcessor"),
      e.Noop = function() {
        return r7
      }
      ,
      e
  }();
var t7 = function(e) {
  HA(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this
  }
  return a(t, "NoopAttributesProcessor"),
    t.prototype.process = function(r, n) {
      return r
    }
    ,
    t
}(oo);
var GA = function(e) {
  HA(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._allowedAttributeNames = r,
      n
  }
  return a(t, "FilteringAttributesProcessor"),
    t.prototype.process = function(r, n) {
      var o = this
        , i = {};
      return Object.keys(r).filter(function(s) {
        return o._allowedAttributeNames.includes(s)
      }).forEach(function(s) {
        return i[s] = r[s]
      }),
        i
    }
    ,
    t
}(oo);
var r7 = new t7;
var n7 = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , o7 = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , i7 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , YA = function() {
    function e(t, r) {
      this._meterProviderSharedState = t,
        this._instrumentationScope = r,
        this.metricStorageRegistry = new LA,
        this.observableRegistry = new VA,
        this.meter = new NA(this)
    }
    return a(e, "MeterSharedState"),
      e.prototype.registerMetricStorage = function(t) {
        var r = this._registerMetricStorage(t, kA);
        return r.length === 1 ? r[0] : new $A(r)
      }
      ,
      e.prototype.registerAsyncMetricStorage = function(t) {
        var r = this._registerMetricStorage(t, MA);
        return r
      }
      ,
      e.prototype.collect = function(t, r, n) {
        return n7(this, void 0, void 0, function() {
          var o, i, s;
          return o7(this, function(l) {
            switch (l.label) {
              case 0:
                return [4, this.observableRegistry.observe(r, n == null ? void 0 : n.timeoutMillis)];
              case 1:
                return o = l.sent(),
                  i = this.metricStorageRegistry.getStorages(t),
                  i.length === 0 ? [2, null] : (s = i.map(function(d) {
                    return d.collect(t, r)
                  }).filter(Sh),
                    s.length === 0 ? [2, {
                      errors: o
                    }] : [2, {
                      scopeMetrics: {
                        scope: this._instrumentationScope,
                        metrics: s
                      },
                      errors: o
                    }])
            }
          })
        })
      }
      ,
      e.prototype._registerMetricStorage = function(t, r) {
        var n = this
          , o = this._meterProviderSharedState.viewRegistry.findViews(t, this._instrumentationScope)
          , i = o.map(function(d) {
            var u = Oh(d, t)
              , f = n.metricStorageRegistry.findOrUpdateCompatibleStorage(u);
            if (f != null)
              return f;
            var p = d.aggregation.createAggregator(u)
              , _ = new r(u, p, d.attributesProcessor, n._meterProviderSharedState.metricCollectors, d.aggregationCardinalityLimit);
            return n.metricStorageRegistry.register(_),
              _
          });
        if (i.length === 0) {
          var s = this._meterProviderSharedState.selectAggregations(t.type)
            , l = s.map(function(d) {
              var u = i7(d, 2)
                , f = u[0]
                , p = u[1]
                , _ = n.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(f, t);
              if (_ != null)
                return _;
              var S = p.createAggregator(t)
                , g = f.selectCardinalityLimit(t.type)
                , T = new r(t, S, oo.Noop(), [f], g);
              return n.metricStorageRegistry.registerForCollector(f, T),
                T
            });
          i = i.concat(l)
        }
        return i
      }
      ,
      e
  }();
var a7 = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , jA = function() {
    function e(t) {
      this.resource = t,
        this.viewRegistry = new SA,
        this.metricCollectors = [],
        this.meterSharedStates = new Map
    }
    return a(e, "MeterProviderSharedState"),
      e.prototype.getMeterSharedState = function(t) {
        var r = yh(t)
          , n = this.meterSharedStates.get(r);
        return n == null && (n = new YA(this, t),
          this.meterSharedStates.set(r, n)),
          n
      }
      ,
      e.prototype.selectAggregations = function(t) {
        var r, n, o = [];
        try {
          for (var i = a7(this.metricCollectors), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            o.push([l, l.selectAggregation(t)])
          }
        } catch (d) {
          r = {
            error: d
          }
        } finally {
          try {
            s && !s.done && (n = i.return) && n.call(i)
          } finally {
            if (r)
              throw r.error
          }
        }
        return o
      }
      ,
      e
  }();
c();
var zA = U(se());
var Ns = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , ws = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , s7 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , u7 = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , WA = function() {
    function e(t, r) {
      this._sharedState = t,
        this._metricReader = r
    }
    return a(e, "MetricCollector"),
      e.prototype.collect = function(t) {
        return Ns(this, void 0, void 0, function() {
          var r, n, o, i, s = this;
          return ws(this, function(l) {
            switch (l.label) {
              case 0:
                return r = (0,
                  zA.millisToHrTime)(Date.now()),
                  n = [],
                  o = [],
                  i = Array.from(this._sharedState.meterSharedStates.values()).map(function(d) {
                    return Ns(s, void 0, void 0, function() {
                      var u;
                      return ws(this, function(f) {
                        switch (f.label) {
                          case 0:
                            return [4, d.collect(this, r, t)];
                          case 1:
                            return u = f.sent(),
                              (u == null ? void 0 : u.scopeMetrics) != null && n.push(u.scopeMetrics),
                              (u == null ? void 0 : u.errors) != null && o.push.apply(o, u7([], s7(u.errors), !1)),
                              [2]
                        }
                      })
                    })
                  }),
                  [4, Promise.all(i)];
              case 1:
                return l.sent(),
                  [2, {
                    resourceMetrics: {
                      resource: this._sharedState.resource,
                      scopeMetrics: n
                    },
                    errors: o
                  }]
            }
          })
        })
      }
      ,
      e.prototype.forceFlush = function(t) {
        return Ns(this, void 0, void 0, function() {
          return ws(this, function(r) {
            switch (r.label) {
              case 0:
                return [4, this._metricReader.forceFlush(t)];
              case 1:
                return r.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e.prototype.shutdown = function(t) {
        return Ns(this, void 0, void 0, function() {
          return ws(this, function(r) {
            switch (r.label) {
              case 0:
                return [4, this._metricReader.shutdown(t)];
              case 1:
                return r.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e.prototype.selectAggregationTemporality = function(t) {
        return this._metricReader.selectAggregationTemporality(t)
      }
      ,
      e.prototype.selectAggregation = function(t) {
        return this._metricReader.selectAggregation(t)
      }
      ,
      e.prototype.selectCardinalityLimit = function(t) {
        var r, n, o;
        return (o = (n = (r = this._metricReader).selectCardinalityLimit) === null || n === void 0 ? void 0 : n.call(r, t)) !== null && o !== void 0 ? o : 2e3
      }
      ,
      e
  }();
var KA = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , XA = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , qA = function(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
      return r.call(e);
    if (e && typeof e.length == "number")
      return {
        next: a(function() {
          return e && n >= e.length && (e = void 0),
          {
            value: e && e[n++],
            done: !e
          }
        }, "next")
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  };
function l7(e, t) {
  var r = t != null ? t : at.empty();
  return e ? at.default().merge(r) : r
}
a(l7, "prepareResource");
var Sd = function() {
  function e(t) {
    var r, n, o, i, s;
    if (this._shutdown = !1,
      this._sharedState = new jA(l7((s = t == null ? void 0 : t.mergeResourceWithDefaults) !== null && s !== void 0 ? s : !0, t == null ? void 0 : t.resource)),
      (t == null ? void 0 : t.views) != null && t.views.length > 0)
      try {
        for (var l = qA(t.views), d = l.next(); !d.done; d = l.next()) {
          var u = d.value;
          this._sharedState.viewRegistry.addView(u)
        }
      } catch (S) {
        r = {
          error: S
        }
      } finally {
        try {
          d && !d.done && (n = l.return) && n.call(l)
        } finally {
          if (r)
            throw r.error
        }
      }
    if ((t == null ? void 0 : t.readers) != null && t.readers.length > 0)
      try {
        for (var f = qA(t.readers), p = f.next(); !p.done; p = f.next()) {
          var _ = p.value;
          this.addMetricReader(_)
        }
      } catch (S) {
        o = {
          error: S
        }
      } finally {
        try {
          p && !p.done && (i = f.return) && i.call(f)
        } finally {
          if (o)
            throw o.error
        }
      }
  }
  return a(e, "MeterProvider"),
    e.prototype.getMeter = function(t, r, n) {
      return r === void 0 && (r = ""),
        n === void 0 && (n = {}),
        this._shutdown ? (C.warn("A shutdown MeterProvider cannot provide a Meter"),
          ga()) : this._sharedState.getMeterSharedState({
            name: t,
            version: r,
            schemaUrl: n.schemaUrl
          }).meter
    }
    ,
    e.prototype.addMetricReader = function(t) {
      var r = new WA(this._sharedState, t);
      t.setMetricProducer(r),
        this._sharedState.metricCollectors.push(r)
    }
    ,
    e.prototype.shutdown = function(t) {
      return KA(this, void 0, void 0, function() {
        return XA(this, function(r) {
          switch (r.label) {
            case 0:
              return this._shutdown ? (C.warn("shutdown may only be called once per MeterProvider"),
                [2]) : (this._shutdown = !0,
                  [4, Promise.all(this._sharedState.metricCollectors.map(function(n) {
                    return n.shutdown(t)
                  }))]);
            case 1:
              return r.sent(),
                [2]
          }
        })
      })
    }
    ,
    e.prototype.forceFlush = function(t) {
      return KA(this, void 0, void 0, function() {
        return XA(this, function(r) {
          switch (r.label) {
            case 0:
              return this._shutdown ? (C.warn("invalid attempt to force flush after MeterProvider shutdown"),
                [2]) : [4, Promise.all(this._sharedState.metricCollectors.map(function(n) {
                  return n.forceFlush(t)
                }))];
            case 1:
              return r.sent(),
                [2]
          }
        })
      })
    }
    ,
    e
}();
c();
c();
var c7 = /[\^$\\.+?()[\]{}|]/g
  , Is = function() {
    function e(t) {
      t === "*" ? (this._matchAll = !0,
        this._regexp = /.*/) : (this._matchAll = !1,
          this._regexp = new RegExp(e.escapePattern(t)))
    }
    return a(e, "PatternPredicate"),
      e.prototype.match = function(t) {
        return this._matchAll ? !0 : this._regexp.test(t)
      }
      ,
      e.escapePattern = function(t) {
        return "^" + t.replace(c7, "\\$&").replace("*", ".*") + "$"
      }
      ,
      e.hasWildcard = function(t) {
        return t.includes("*")
      }
      ,
      e
  }();
var io = function() {
  function e(t) {
    this._matchAll = t === void 0,
      this._pattern = t
  }
  return a(e, "ExactPredicate"),
    e.prototype.match = function(t) {
      return !!(this._matchAll || t === this._pattern)
    }
    ,
    e
}();
c();
var ZA = function() {
  function e(t) {
    var r;
    this._nameFilter = new Is((r = t == null ? void 0 : t.name) !== null && r !== void 0 ? r : "*"),
      this._type = t == null ? void 0 : t.type,
      this._unitFilter = new io(t == null ? void 0 : t.unit)
  }
  return a(e, "InstrumentSelector"),
    e.prototype.getType = function() {
      return this._type
    }
    ,
    e.prototype.getNameFilter = function() {
      return this._nameFilter
    }
    ,
    e.prototype.getUnitFilter = function() {
      return this._unitFilter
    }
    ,
    e
}();
c();
var QA = function() {
  function e(t) {
    this._nameFilter = new io(t == null ? void 0 : t.name),
      this._versionFilter = new io(t == null ? void 0 : t.version),
      this._schemaUrlFilter = new io(t == null ? void 0 : t.schemaUrl)
  }
  return a(e, "MeterSelector"),
    e.prototype.getNameFilter = function() {
      return this._nameFilter
    }
    ,
    e.prototype.getVersionFilter = function() {
      return this._versionFilter
    }
    ,
    e.prototype.getSchemaUrlFilter = function() {
      return this._schemaUrlFilter
    }
    ,
    e
}();
function d7(e) {
  return e.instrumentName == null && e.instrumentType == null && e.instrumentUnit == null && e.meterName == null && e.meterVersion == null && e.meterSchemaUrl == null
}
a(d7, "isSelectorNotProvided");
var yd = function() {
  function e(t) {
    var r;
    if (d7(t))
      throw new Error("Cannot create view with no selector arguments supplied");
    if (t.name != null && ((t == null ? void 0 : t.instrumentName) == null || Is.hasWildcard(t.instrumentName)))
      throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
    t.attributeKeys != null ? this.attributesProcessor = new GA(t.attributeKeys) : this.attributesProcessor = oo.Noop(),
      this.name = t.name,
      this.description = t.description,
      this.aggregation = (r = t.aggregation) !== null && r !== void 0 ? r : Tt.Default(),
      this.instrumentSelector = new ZA({
        name: t.instrumentName,
        type: t.instrumentType,
        unit: t.instrumentUnit
      }),
      this.meterSelector = new QA({
        name: t.meterName,
        version: t.meterVersion,
        schemaUrl: t.meterSchemaUrl
      }),
      this.aggregationCardinalityLimit = t.aggregationCardinalityLimit
  }
  return a(e, "View"),
    e
}();
var eb = U(se(), 1);
G();
c();
function JA(e, t, { leading: r = !0, trailing: n = !0 } = {}) {
  let o, i, s, l = null, d = 0;
  function u() {
    d = r === !1 ? 0 : Date.now(),
      l = null,
      o && (i = e.apply(s, o)),
      s = null,
      o = null
  }
  return a(u, "later"),
    function(...f) {
      let p = Date.now();
      !d && r === !1 && (d = p);
      let _ = t - (p - d);
      return s = this,
        o = f,
        _ <= 0 || _ > t ? (l && (clearTimeout(l),
          l = null),
          d = p,
          o && (i = e.apply(s, o)),
          s = null,
          o = null) : !l && n !== !1 && (l = setTimeout(u, _)),
        i
    }
}
a(JA, "throttle");
var Ad = class Ad extends dd {
  constructor({ exporter: t, throttleLimit: r }) {
    var n, o;
    super({
      aggregationSelector: (n = t.selectAggregation) === null || n === void 0 ? void 0 : n.bind(t),
      aggregationTemporalitySelector: (o = t.selectAggregationTemporality) === null || o === void 0 ? void 0 : o.bind(t)
    }),
      this._exporter = void 0,
      this._exporter = t,
      this.onForceFlush = JA(this.onForceFlush, r)
  }
  async onForceFlush() {
    let { resourceMetrics: t, errors: r } = await this.collect({});
    return r.length > 0 && C.error("PeriodicExportingMetricReader: metrics collection errors", ...r),
      new Promise((n, o) => {
        this._exporter.export(t, i => {
          if (i.code === eb.ExportResultCode.SUCCESS)
            n();
          else {
            var s;
            o((s = i.error) !== null && s !== void 0 ? s : new Error(`InstantaneousMetricReader: metrics export failed (error ${i.error})`))
          }
        }
        )
      }
      )
  }
  async onShutdown() {
    await this._exporter.shutdown()
  }
}
  ;
a(Ad, "InstantaneousMetricReader");
var di = Ad;
c();
G();
c();
c();
c();
c();
c();
var sb = U(se());
c();
var fi;
(function(e) {
  e[e.DELTA = 0] = "DELTA",
    e[e.CUMULATIVE = 1] = "CUMULATIVE",
    e[e.LOWMEMORY = 2] = "LOWMEMORY"
}
)(fi || (fi = {}));
c();
c();
var Tn = function() {
  function e(t) {
    this._delegate = t
  }
  return a(e, "OTLPExporterBase"),
    e.prototype.export = function(t, r) {
      this._delegate.export(t, r)
    }
    ,
    e.prototype.forceFlush = function() {
      return this._delegate.forceFlush()
    }
    ,
    e.prototype.shutdown = function() {
      return this._delegate.shutdown()
    }
    ,
    e
}();
c();
var f7 = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , bd = function(e) {
    f7(t, e);
    function t(r, n, o) {
      var i = e.call(this, r) || this;
      return i.name = "OTLPExporterError",
        i.data = o,
        i.code = n,
        i
    }
    return a(t, "OTLPExporterError"),
      t
  }(Error);
c();
function p7(e) {
  if (!Number.isNaN(e) && Number.isFinite(e) && e > 0)
    return e;
  throw new Error("Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '" + e + "')")
}
a(p7, "validateTimeoutMillis");
function tb(e) {
  if (e != null)
    return function() {
      return e
    }
}
a(tb, "wrapStaticHeadersInFunction");
function rb(e, t, r) {
  var n, o, i, s, l, d;
  return {
    timeoutMillis: p7((o = (n = e.timeoutMillis) !== null && n !== void 0 ? n : t.timeoutMillis) !== null && o !== void 0 ? o : r.timeoutMillis),
    concurrencyLimit: (s = (i = e.concurrencyLimit) !== null && i !== void 0 ? i : t.concurrencyLimit) !== null && s !== void 0 ? s : r.concurrencyLimit,
    compression: (d = (l = e.compression) !== null && l !== void 0 ? l : t.compression) !== null && d !== void 0 ? d : r.compression
  }
}
a(rb, "mergeOtlpSharedConfigurationWithDefaults");
function nb() {
  return {
    timeoutMillis: 1e4,
    concurrencyLimit: 30,
    compression: "none"
  }
}
a(nb, "getSharedConfigurationDefaults");
c();
c();
var m7 = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , _7 = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , h7 = function() {
    function e(t) {
      this._sendingPromises = [],
        this._concurrencyLimit = t
    }
    return a(e, "BoundedQueueExportPromiseHandler"),
      e.prototype.pushPromise = function(t) {
        var r = this;
        if (this.hasReachedLimit())
          throw new Error("Concurrency Limit reached");
        this._sendingPromises.push(t);
        var n = a(function() {
          var o = r._sendingPromises.indexOf(t);
          r._sendingPromises.splice(o, 1)
        }, "popPromise");
        t.then(n, n)
      }
      ,
      e.prototype.hasReachedLimit = function() {
        return this._sendingPromises.length >= this._concurrencyLimit
      }
      ,
      e.prototype.awaitAll = function() {
        return m7(this, void 0, void 0, function() {
          return _7(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all(this._sendingPromises)];
              case 1:
                return t.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e
  }();
function ob(e) {
  return new h7(e.concurrencyLimit)
}
a(ob, "createBoundedQueueExportPromiseHandler");
c();
var kr = U(se());
c();
G();
function g7(e) {
  return Object.prototype.hasOwnProperty.call(e, "partialSuccess")
}
a(g7, "isPartialSuccessResponse");
function ib() {
  return {
    handleResponse: a(function(e) {
      e == null || !g7(e) || e.partialSuccess == null || Object.keys(e.partialSuccess).length === 0 || C.warn("Received Partial Success response:", JSON.stringify(e.partialSuccess))
    }, "handleResponse")
  }
}
a(ib, "createLoggingPartialSuccessResponseHandler");
G();
var E7 = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , T7 = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , v7 = function() {
    function e(t, r, n, o, i) {
      this._transport = t,
        this._serializer = r,
        this._responseHandler = n,
        this._promiseQueue = o,
        this._timeout = i,
        this._diagLogger = C.createComponentLogger({
          namespace: "OTLPExportDelegate"
        })
    }
    return a(e, "OTLPExportDelegate"),
      e.prototype.export = function(t, r) {
        var n = this;
        if (this._diagLogger.debug("items to be sent", t),
          this._promiseQueue.hasReachedLimit()) {
          r({
            code: kr.ExportResultCode.FAILED,
            error: new Error("Concurrent export limit reached")
          });
          return
        }
        var o = this._serializer.serializeRequest(t);
        if (o == null) {
          r({
            code: kr.ExportResultCode.FAILED,
            error: new Error("Nothing to send")
          });
          return
        }
        this._promiseQueue.pushPromise(this._transport.send(o, this._timeout).then(function(i) {
          if (i.status === "success") {
            if (i.data != null)
              try {
                n._responseHandler.handleResponse(n._serializer.deserializeResponse(i.data))
              } catch (s) {
                n._diagLogger.warn("Export succeeded but could not deserialize response - is the response specification compliant?", s, i.data)
              }
            r({
              code: kr.ExportResultCode.SUCCESS
            });
            return
          } else if (i.status === "failure" && i.error) {
            r({
              code: kr.ExportResultCode.FAILED,
              error: i.error
            });
            return
          } else
            i.status === "retryable" ? r({
              code: kr.ExportResultCode.FAILED,
              error: new bd("Export failed with retryable status")
            }) : r({
              code: kr.ExportResultCode.FAILED,
              error: new bd("Export failed with unknown error")
            })
        }, function(i) {
          return r({
            code: kr.ExportResultCode.FAILED,
            error: i
          })
        }))
      }
      ,
      e.prototype.forceFlush = function() {
        return this._promiseQueue.awaitAll()
      }
      ,
      e.prototype.shutdown = function() {
        return E7(this, void 0, void 0, function() {
          return T7(this, function(t) {
            switch (t.label) {
              case 0:
                return this._diagLogger.debug("shutdown started"),
                  [4, this.forceFlush()];
              case 1:
                return t.sent(),
                  this._transport.shutdown(),
                  [2]
            }
          })
        })
      }
      ,
      e
  }();
function ab(e, t) {
  return new v7(e.transport, e.serializer, ib(), e.promiseHandler, t.timeout)
}
a(ab, "createOtlpExportDelegate");
function xd(e, t, r) {
  return ab({
    transport: r,
    serializer: t,
    promiseHandler: ob(e)
  }, {
    timeout: e.timeoutMillis
  })
}
a(xd, "createOtlpNetworkExportDelegate");
G();
var S7 = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Cd = a(function() {
    return Ye.CUMULATIVE
  }, "CumulativeTemporalitySelector")
  , ub = a(function(e) {
    switch (e) {
      case X.COUNTER:
      case X.OBSERVABLE_COUNTER:
      case X.GAUGE:
      case X.HISTOGRAM:
      case X.OBSERVABLE_GAUGE:
        return Ye.DELTA;
      case X.UP_DOWN_COUNTER:
      case X.OBSERVABLE_UP_DOWN_COUNTER:
        return Ye.CUMULATIVE
    }
  }, "DeltaTemporalitySelector")
  , lb = a(function(e) {
    switch (e) {
      case X.COUNTER:
      case X.HISTOGRAM:
        return Ye.DELTA;
      case X.GAUGE:
      case X.UP_DOWN_COUNTER:
      case X.OBSERVABLE_UP_DOWN_COUNTER:
      case X.OBSERVABLE_COUNTER:
      case X.OBSERVABLE_GAUGE:
        return Ye.CUMULATIVE
    }
  }, "LowMemoryTemporalitySelector");
function y7() {
  var e = (0,
    sb.getEnv)()
    , t = e.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE.trim().toLowerCase();
  return t === "cumulative" ? Cd : t === "delta" ? ub : t === "lowmemory" ? lb : (C.warn("OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '" + e.OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE + "', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead."),
    Cd)
}
a(y7, "chooseTemporalitySelectorFromEnvironment");
function A7(e) {
  return e != null ? e === fi.DELTA ? ub : e === fi.LOWMEMORY ? lb : Cd : y7()
}
a(A7, "chooseTemporalitySelector");
function b7(e) {
  return e != null && e.aggregationPreference ? e.aggregationPreference : function(t) {
    return Tt.Default()
  }
}
a(b7, "chooseAggregationSelector");
var cb = function(e) {
  S7(t, e);
  function t(r, n) {
    var o = e.call(this, r) || this;
    return o._aggregationSelector = b7(n),
      o._aggregationTemporalitySelector = A7(n == null ? void 0 : n.temporalityPreference),
      o
  }
  return a(t, "OTLPMetricExporterBase"),
    t.prototype.selectAggregation = function(r) {
      return this._aggregationSelector(r)
    }
    ,
    t.prototype.selectAggregationTemporality = function(r) {
      return this._aggregationTemporalitySelector(r)
    }
    ,
    t
}(Tn);
c();
c();
c();
var ao = U(se());
function fb(e) {
  var t = BigInt(1e9);
  return BigInt(e[0]) * t + BigInt(e[1])
}
a(fb, "hrTimeToNanos");
function x7(e) {
  var t = Number(BigInt.asUintN(32, e))
    , r = Number(BigInt.asUintN(32, e >> BigInt(32)));
  return {
    low: t,
    high: r
  }
}
a(x7, "toLongBits");
function pb(e) {
  var t = fb(e);
  return x7(t)
}
a(pb, "encodeAsLongBits");
function C7(e) {
  var t = fb(e);
  return t.toString()
}
a(C7, "encodeAsString");
var R7 = typeof BigInt != "undefined" ? C7 : ao.hrTimeToNanoseconds;
function db(e) {
  return e
}
a(db, "identity");
function mb(e) {
  if (e !== void 0)
    return (0,
      ao.hexToBinary)(e)
}
a(mb, "optionalHexToBinary");
var O7 = {
  encodeHrTime: pb,
  encodeSpanContext: ao.hexToBinary,
  encodeOptionalSpanContext: mb
};
function so(e) {
  var t, r;
  if (e === void 0)
    return O7;
  var n = (t = e.useLongBits) !== null && t !== void 0 ? t : !0
    , o = (r = e.useHex) !== null && r !== void 0 ? r : !1;
  return {
    encodeHrTime: n ? pb : R7,
    encodeSpanContext: o ? db : ao.hexToBinary,
    encodeOptionalSpanContext: o ? db : mb
  }
}
a(so, "getOtlpEncoder");
c();
var P7 = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
};
function uo(e) {
  return {
    attributes: vr(e.attributes),
    droppedAttributesCount: 0
  }
}
a(uo, "createResource");
function lo(e) {
  return {
    name: e.name,
    version: e.version
  }
}
a(lo, "createInstrumentationScope");
function vr(e) {
  return Object.keys(e).map(function(t) {
    return Ms(t, e[t])
  })
}
a(vr, "toAttributes");
function Ms(e, t) {
  return {
    key: e,
    value: Ls(t)
  }
}
a(Ms, "toKeyValue");
function Ls(e) {
  var t = typeof e;
  return t === "string" ? {
    stringValue: e
  } : t === "number" ? Number.isInteger(e) ? {
    intValue: e
  } : {
    doubleValue: e
  } : t === "boolean" ? {
    boolValue: e
  } : e instanceof Uint8Array ? {
    bytesValue: e
  } : Array.isArray(e) ? {
    arrayValue: {
      values: e.map(Ls)
    }
  } : t === "object" && e != null ? {
    kvlistValue: {
      values: Object.entries(e).map(function(r) {
        var n = P7(r, 2)
          , o = n[0]
          , i = n[1];
        return Ms(o, i)
      })
    }
  } : {}
}
a(Ls, "toAnyValue");
var N7 = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , _b = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  };
function hb(e, t) {
  var r = so(t);
  return {
    resourceLogs: I7(e, r)
  }
}
a(hb, "createExportLogsServiceRequest");
function w7(e) {
  var t, r, n = new Map;
  try {
    for (var o = N7(e), i = o.next(); !i.done; i = o.next()) {
      var s = i.value
        , l = s.resource
        , d = s.instrumentationScope
        , u = d.name
        , f = d.version
        , p = f === void 0 ? "" : f
        , _ = d.schemaUrl
        , S = _ === void 0 ? "" : _
        , g = n.get(l);
      g || (g = new Map,
        n.set(l, g));
      var T = u + "@" + p + ":" + S
        , b = g.get(T);
      b || (b = [],
        g.set(T, b)),
        b.push(s)
    }
  } catch (x) {
    t = {
      error: x
    }
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o)
    } finally {
      if (t)
        throw t.error
    }
  }
  return n
}
a(w7, "createResourceMap");
function I7(e, t) {
  var r = w7(e);
  return Array.from(r, function(n) {
    var o = _b(n, 2)
      , i = o[0]
      , s = o[1];
    return {
      resource: uo(i),
      scopeLogs: Array.from(s, function(l) {
        var d = _b(l, 2)
          , u = d[1];
        return {
          scope: lo(u[0].instrumentationScope),
          logRecords: u.map(function(f) {
            return M7(f, t)
          }),
          schemaUrl: u[0].instrumentationScope.schemaUrl
        }
      }),
      schemaUrl: void 0
    }
  })
}
a(I7, "logRecordsToResourceLogs");
function M7(e, t) {
  var r, n, o;
  return {
    timeUnixNano: t.encodeHrTime(e.hrTime),
    observedTimeUnixNano: t.encodeHrTime(e.hrTimeObserved),
    severityNumber: e.severityNumber,
    severityText: e.severityText,
    body: Ls(e.body),
    attributes: L7(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    flags: (r = e.spanContext) === null || r === void 0 ? void 0 : r.traceFlags,
    traceId: t.encodeOptionalSpanContext((n = e.spanContext) === null || n === void 0 ? void 0 : n.traceId),
    spanId: t.encodeOptionalSpanContext((o = e.spanContext) === null || o === void 0 ? void 0 : o.spanId)
  }
}
a(M7, "toLogRecord");
function L7(e) {
  return Object.keys(e).map(function(t) {
    return Ms(t, e[t])
  })
}
a(L7, "toLogAttributes");
c();
G();
function $7(e, t) {
  var r = so(t);
  return {
    resource: uo(e.resource),
    schemaUrl: void 0,
    scopeMetrics: D7(e.scopeMetrics, r)
  }
}
a($7, "toResourceMetrics");
function D7(e, t) {
  return Array.from(e.map(function(r) {
    return {
      scope: lo(r.scope),
      metrics: r.metrics.map(function(n) {
        return U7(n, t)
      }),
      schemaUrl: r.scope.schemaUrl
    }
  }))
}
a(D7, "toScopeMetrics");
function U7(e, t) {
  var r = {
    name: e.descriptor.name,
    description: e.descriptor.description,
    unit: e.descriptor.unit
  }
    , n = k7(e.aggregationTemporality);
  switch (e.dataPointType) {
    case nt.SUM:
      r.sum = {
        aggregationTemporality: n,
        isMonotonic: e.isMonotonic,
        dataPoints: gb(e, t)
      };
      break;
    case nt.GAUGE:
      r.gauge = {
        dataPoints: gb(e, t)
      };
      break;
    case nt.HISTOGRAM:
      r.histogram = {
        aggregationTemporality: n,
        dataPoints: B7(e, t)
      };
      break;
    case nt.EXPONENTIAL_HISTOGRAM:
      r.exponentialHistogram = {
        aggregationTemporality: n,
        dataPoints: V7(e, t)
      };
      break
  }
  return r
}
a(U7, "toMetric");
function F7(e, t, r) {
  var n = {
    attributes: vr(e.attributes),
    startTimeUnixNano: r.encodeHrTime(e.startTime),
    timeUnixNano: r.encodeHrTime(e.endTime)
  };
  switch (t) {
    case Fe.INT:
      n.asInt = e.value;
      break;
    case Fe.DOUBLE:
      n.asDouble = e.value;
      break
  }
  return n
}
a(F7, "toSingularDataPoint");
function gb(e, t) {
  return e.dataPoints.map(function(r) {
    return F7(r, e.descriptor.valueType, t)
  })
}
a(gb, "toSingularDataPoints");
function B7(e, t) {
  return e.dataPoints.map(function(r) {
    var n = r.value;
    return {
      attributes: vr(r.attributes),
      bucketCounts: n.buckets.counts,
      explicitBounds: n.buckets.boundaries,
      count: n.count,
      sum: n.sum,
      min: n.min,
      max: n.max,
      startTimeUnixNano: t.encodeHrTime(r.startTime),
      timeUnixNano: t.encodeHrTime(r.endTime)
    }
  })
}
a(B7, "toHistogramDataPoints");
function V7(e, t) {
  return e.dataPoints.map(function(r) {
    var n = r.value;
    return {
      attributes: vr(r.attributes),
      count: n.count,
      min: n.min,
      max: n.max,
      sum: n.sum,
      positive: {
        offset: n.positive.offset,
        bucketCounts: n.positive.bucketCounts
      },
      negative: {
        offset: n.negative.offset,
        bucketCounts: n.negative.bucketCounts
      },
      scale: n.scale,
      zeroCount: n.zeroCount,
      startTimeUnixNano: t.encodeHrTime(r.startTime),
      timeUnixNano: t.encodeHrTime(r.endTime)
    }
  })
}
a(V7, "toExponentialHistogramDataPoints");
function k7(e) {
  switch (e) {
    case Ye.DELTA:
      return 1;
    case Ye.CUMULATIVE:
      return 2
  }
}
a(k7, "toAggregationTemporality");
function Eb(e, t) {
  return {
    resourceMetrics: e.map(function(r) {
      return $7(r, t)
    })
  }
}
a(Eb, "createExportMetricsServiceRequest");
c();
var H7 = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , G7 = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  };
function Y7(e, t) {
  var r, n = e.spanContext(), o = e.status;
  return {
    traceId: t.encodeSpanContext(n.traceId),
    spanId: t.encodeSpanContext(n.spanId),
    parentSpanId: t.encodeOptionalSpanContext(e.parentSpanId),
    traceState: (r = n.traceState) === null || r === void 0 ? void 0 : r.serialize(),
    name: e.name,
    kind: e.kind == null ? 0 : e.kind + 1,
    startTimeUnixNano: t.encodeHrTime(e.startTime),
    endTimeUnixNano: t.encodeHrTime(e.endTime),
    attributes: vr(e.attributes),
    droppedAttributesCount: e.droppedAttributesCount,
    events: e.events.map(function(i) {
      return z7(i, t)
    }),
    droppedEventsCount: e.droppedEventsCount,
    status: {
      code: o.code,
      message: o.message
    },
    links: e.links.map(function(i) {
      return j7(i, t)
    }),
    droppedLinksCount: e.droppedLinksCount
  }
}
a(Y7, "sdkSpanToOtlpSpan");
function j7(e, t) {
  var r;
  return {
    attributes: e.attributes ? vr(e.attributes) : [],
    spanId: t.encodeSpanContext(e.context.spanId),
    traceId: t.encodeSpanContext(e.context.traceId),
    traceState: (r = e.context.traceState) === null || r === void 0 ? void 0 : r.serialize(),
    droppedAttributesCount: e.droppedAttributesCount || 0
  }
}
a(j7, "toOtlpLink");
function z7(e, t) {
  return {
    attributes: e.attributes ? vr(e.attributes) : [],
    name: e.name,
    timeUnixNano: t.encodeHrTime(e.time),
    droppedAttributesCount: e.droppedAttributesCount || 0
  }
}
a(z7, "toOtlpSpanEvent");
function Tb(e, t) {
  var r = so(t);
  return {
    resourceSpans: K7(e, r)
  }
}
a(Tb, "createExportTraceServiceRequest");
function W7(e) {
  var t, r, n = new Map;
  try {
    for (var o = H7(e), i = o.next(); !i.done; i = o.next()) {
      var s = i.value
        , l = n.get(s.resource);
      l || (l = new Map,
        n.set(s.resource, l));
      var d = s.instrumentationLibrary.name + "@" + (s.instrumentationLibrary.version || "") + ":" + (s.instrumentationLibrary.schemaUrl || "")
        , u = l.get(d);
      u || (u = [],
        l.set(d, u)),
        u.push(s)
    }
  } catch (f) {
    t = {
      error: f
    }
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o)
    } finally {
      if (t)
        throw t.error
    }
  }
  return n
}
a(W7, "createResourceMap");
function K7(e, t) {
  for (var r = W7(e), n = [], o = r.entries(), i = o.next(); !i.done;) {
    for (var s = G7(i.value, 2), l = s[0], d = s[1], u = [], f = d.values(), p = f.next(); !p.done;) {
      var _ = p.value;
      if (_.length > 0) {
        var S = _.map(function(T) {
          return Y7(T, t)
        });
        u.push({
          scope: lo(_[0].instrumentationLibrary),
          spans: S,
          schemaUrl: _[0].instrumentationLibrary.schemaUrl
        })
      }
      p = f.next()
    }
    var g = {
      resource: uo(l),
      scopeSpans: u,
      schemaUrl: void 0
    };
    n.push(g),
      i = o.next()
  }
  return n
}
a(K7, "spanRecordsToResourceSpans");
c();
c();
var $s = {
  serializeRequest: a(function(e) {
    var t = hb(e, {
      useHex: !0,
      useLongBits: !1
    })
      , r = new TextEncoder;
    return r.encode(JSON.stringify(t))
  }, "serializeRequest"),
  deserializeResponse: a(function(e) {
    var t = new TextDecoder;
    return JSON.parse(t.decode(e))
  }, "deserializeResponse")
};
c();
c();
var Ds = {
  serializeRequest: a(function(e) {
    var t = Eb([e], {
      useLongBits: !1
    })
      , r = new TextEncoder;
    return r.encode(JSON.stringify(t))
  }, "serializeRequest"),
  deserializeResponse: a(function(e) {
    var t = new TextDecoder;
    return JSON.parse(t.decode(e))
  }, "deserializeResponse")
};
c();
c();
var Us = {
  serializeRequest: a(function(e) {
    var t = Tb(e, {
      useHex: !0,
      useLongBits: !1
    })
      , r = new TextEncoder;
    return r.encode(JSON.stringify(t))
  }, "serializeRequest"),
  deserializeResponse: a(function(e) {
    var t = new TextDecoder;
    return JSON.parse(t.decode(e))
  }, "deserializeResponse")
};
c();
c();
c();
var X7 = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , q7 = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , Z7 = 5
  , Q7 = 1e3
  , J7 = 5e3
  , eU = 1.5
  , vb = .2;
function tU() {
  return Math.random() * (2 * vb) - vb
}
a(tU, "getJitter");
var rU = function() {
  function e(t) {
    this._transport = t
  }
  return a(e, "RetryingTransport"),
    e.prototype.retry = function(t, r, n) {
      var o = this;
      return new Promise(function(i, s) {
        setTimeout(function() {
          o._transport.send(t, r).then(i, s)
        }, n)
      }
      )
    }
    ,
    e.prototype.send = function(t, r) {
      var n;
      return X7(this, void 0, void 0, function() {
        var o, i, s, l, d, u, f;
        return q7(this, function(p) {
          switch (p.label) {
            case 0:
              return o = Date.now() + r,
                [4, this._transport.send(t, r)];
            case 1:
              i = p.sent(),
                s = Z7,
                l = Q7,
                p.label = 2;
            case 2:
              return i.status === "retryable" && s > 0 ? (s--,
                d = Math.max(Math.min(l, J7) + tU(), 0),
                l = l * eU,
                u = (n = i.retryInMillis) !== null && n !== void 0 ? n : d,
                f = o - Date.now(),
                u > f ? [2, i] : [4, this.retry(t, f, u)]) : [3, 4];
            case 3:
              return i = p.sent(),
                [3, 2];
            case 4:
              return [2, i]
          }
        })
      })
    }
    ,
    e.prototype.shutdown = function() {
      return this._transport.shutdown()
    }
    ,
    e
}();
function Rd(e) {
  return new rU(e.transport)
}
a(Rd, "createRetryingTransport");
c();
G();
c();
function Sb(e) {
  var t = [429, 502, 503, 504];
  return t.includes(e)
}
a(Sb, "isExportRetryable");
function yb(e) {
  if (e != null) {
    var t = Number.parseInt(e, 10);
    if (Number.isInteger(t))
      return t > 0 ? t * 1e3 : -1;
    var r = new Date(e).getTime() - Date.now();
    return r >= 0 ? r : 0
  }
}
a(yb, "parseRetryAfterToMills");
var nU = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , oU = function() {
    function e(t) {
      this._parameters = t
    }
    return a(e, "XhrTransport"),
      e.prototype.send = function(t, r) {
        var n = this;
        return new Promise(function(o) {
          var i = new XMLHttpRequest;
          i.timeout = r,
            i.open("POST", n._parameters.url);
          var s = n._parameters.headers();
          Object.entries(s).forEach(function(l) {
            var d = nU(l, 2)
              , u = d[0]
              , f = d[1];
            i.setRequestHeader(u, f)
          }),
            i.ontimeout = function(l) {
              o({
                status: "failure",
                error: new Error("XHR request timed out")
              })
            }
            ,
            i.onreadystatechange = function() {
              i.status >= 200 && i.status <= 299 ? (C.debug("XHR success"),
                o({
                  status: "success"
                })) : i.status && Sb(i.status) ? o({
                  status: "retryable",
                  retryInMillis: yb(i.getResponseHeader("Retry-After"))
                }) : i.status !== 0 && o({
                  status: "failure",
                  error: new Error("XHR request failed with non-retryable status")
                })
            }
            ,
            i.onabort = function() {
              o({
                status: "failure",
                error: new Error("XHR request aborted")
              })
            }
            ,
            i.onerror = function() {
              o({
                status: "failure",
                error: new Error("XHR request errored")
              })
            }
            ,
            i.send(t)
        }
        )
      }
      ,
      e.prototype.shutdown = function() { }
      ,
      e
  }();
function Ab(e) {
  return new oU(e)
}
a(Ab, "createXhrTransport");
c();
G();
var iU = function() {
  function e(t) {
    this._params = t
  }
  return a(e, "SendBeaconTransport"),
    e.prototype.send = function(t) {
      var r = this;
      return new Promise(function(n) {
        navigator.sendBeacon(r._params.url, new Blob([t], {
          type: r._params.blobType
        })) ? (C.debug("SendBeacon success"),
          n({
            status: "success"
          })) : n({
            status: "failure",
            error: new Error("SendBeacon failed")
          })
      }
      )
    }
    ,
    e.prototype.shutdown = function() { }
    ,
    e
}();
function bb(e) {
  return new iU(e)
}
a(bb, "createSendBeaconTransport");
function xb(e, t) {
  return xd(e, t, Rd({
    transport: Ab(e)
  }))
}
a(xb, "createOtlpXhrExportDelegate");
function Cb(e, t) {
  return xd(e, t, Rd({
    transport: bb({
      url: e.url,
      blobType: e.headers()["Content-Type"]
    })
  }))
}
a(Cb, "createOtlpSendBeaconExportDelegate");
c();
c();
c();
G();
var aU = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
};
function Rb(e) {
  return function() {
    var t, r = {};
    return Object.entries((t = e == null ? void 0 : e()) !== null && t !== void 0 ? t : {}).forEach(function(n) {
      var o = aU(n, 2)
        , i = o[0]
        , s = o[1];
      typeof s != "undefined" ? r[i] = String(s) : C.warn('Header "' + i + '" has invalid value (' + s + ") and will be ignored")
    }),
      r
  }
}
a(Rb, "validateAndNormalizeHeaders");
var vn = function() {
  return vn = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
  }
    ,
    vn.apply(this, arguments)
};
function sU(e, t, r) {
  var n = vn({}, r())
    , o = {};
  return function() {
    return t != null && Object.assign(o, t()),
      e != null && Object.assign(o, e()),
      Object.assign(o, n)
  }
}
a(sU, "mergeHeaders");
function uU(e) {
  if (e != null)
    try {
      return new URL(e),
        e
    } catch (t) {
      throw new Error("Configuration: Could not parse user-provided export URL: '" + e + "'")
    }
}
a(uU, "validateUserProvidedUrl");
function Ob(e, t, r) {
  var n, o, i, s;
  return vn(vn({}, rb(e, t, r)), {
    headers: sU(Rb(e.headers), t.headers, r.headers),
    url: (o = (n = uU(e.url)) !== null && n !== void 0 ? n : t.url) !== null && o !== void 0 ? o : r.url,
    agentOptions: (s = (i = e.agentOptions) !== null && i !== void 0 ? i : t.agentOptions) !== null && s !== void 0 ? s : r.agentOptions
  })
}
a(Ob, "mergeOtlpHttpConfigurationWithDefaults");
function Pb(e, t) {
  return vn(vn({}, nb()), {
    headers: a(function() {
      return e
    }, "headers"),
    url: "http://localhost:4318/" + t,
    agentOptions: {
      keepAlive: !0
    }
  })
}
a(Pb, "getHttpConfigurationDefaults");
function Nb(e, t, r) {
  return Ob({
    url: e.url,
    timeoutMillis: e.timeoutMillis,
    headers: tb(e.headers),
    concurrencyLimit: e.concurrencyLimit
  }, {}, Pb(r, t))
}
a(Nb, "convertLegacyBrowserHttpOptions");
c();
function Sn(e, t, r, n) {
  var o = !!e.headers || typeof navigator.sendBeacon != "function"
    , i = Nb(e, r, n);
  return o ? xb(i, t) : Cb(i, t)
}
a(Sn, "createLegacyOtlpBrowserExportDelegate");
var lU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Fs = function(e) {
    lU(t, e);
    function t(r) {
      return e.call(this, Sn(r != null ? r : {}, Ds, "v1/metrics", {
        "Content-Type": "application/json"
      }), r) || this
    }
    return a(t, "OTLPMetricExporter"),
      t
  }(cb);
c();
var yn = {
  production: "https://otlp-http-production.shopifysvc.com",
  staging: "https://otlp-http-staging.shopifysvc.com",
  local: "http://localhost:4318"
}
  , wb = "/v1/metrics"
  , Ib = "/v1/traces"
  , Mb = "/v1/logs"
  , co = "service.name"
  , Bs = "deployment.environment";
var Od = class Od extends Sd {
  constructor({ serviceName: t, env: r, throttleLimit: n, useXhr: o, dev: i, otlpBaseURL: s }) {
    super({
      resource: new at({
        [co]: t
      })
    });
    let d = {
      url: (typeof s == "string" ? s : yn[r] || r) + wb,
      temporalityPreference: Ye.DELTA
    };
    o && (d.headers = {});
    let u = new Fs(d);
    this.addMetricReader(new di({
      exporter: u,
      throttleLimit: n
    })),
      i && this.addMetricReader(new di({
        exporter: new pd,
        throttleLimit: n
      }))
  }
}
  ;
a(Od, "DefaultMeterProvider");
var Vs = Od;
c();
c();
var cU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Lb = function(e) {
    cU(t, e);
    function t(r) {
      return r === void 0 && (r = {}),
        e.call(this, Sn(r, Us, "v1/traces", {
          "Content-Type": "application/json"
        })) || this
    }
    return a(t, "OTLPTraceExporter"),
      t
  }(Tn);
c();
c();
G();
var go = U(se());
c();
G();
var ge = U(se());
Qn();
c();
var $b = "exception";
var Pd = function() {
  return Pd = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
  }
    ,
    Pd.apply(this, arguments)
}
  , dU = function(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
      return r.call(e);
    if (e && typeof e.length == "number")
      return {
        next: a(function() {
          return e && n >= e.length && (e = void 0),
          {
            value: e && e[n++],
            done: !e
          }
        }, "next")
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  , Db = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , fU = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , Ub = function() {
    function e(t, r, n, o, i, s, l, d, u, f) {
      l === void 0 && (l = []),
        this.attributes = {},
        this.links = [],
        this.events = [],
        this._droppedAttributesCount = 0,
        this._droppedEventsCount = 0,
        this._droppedLinksCount = 0,
        this.status = {
          code: Kn.UNSET
        },
        this.endTime = [0, 0],
        this._ended = !1,
        this._duration = [-1, -1],
        this.name = n,
        this._spanContext = o,
        this.parentSpanId = s,
        this.kind = i,
        this.links = l;
      var p = Date.now();
      this._performanceStartTime = ge.otperformance.now(),
        this._performanceOffset = p - (this._performanceStartTime + (0,
          ge.getTimeOrigin)()),
        this._startTimeProvided = d != null,
        this.startTime = this._getTime(d != null ? d : p),
        this.resource = t.resource,
        this.instrumentationLibrary = t.instrumentationLibrary,
        this._spanLimits = t.getSpanLimits(),
        this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0,
        f != null && this.setAttributes(f),
        this._spanProcessor = t.getActiveSpanProcessor(),
        this._spanProcessor.onStart(this, r)
    }
    return a(e, "Span"),
      e.prototype.spanContext = function() {
        return this._spanContext
      }
      ,
      e.prototype.setAttribute = function(t, r) {
        return r == null || this._isSpanEnded() ? this : t.length === 0 ? (C.warn("Invalid attribute key: " + t),
          this) : (0,
            ge.isAttributeValue)(r) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this._droppedAttributesCount++,
              this) : (this.attributes[t] = this._truncateToSize(r),
                this) : (C.warn("Invalid attribute value set for key: " + t),
                  this)
      }
      ,
      e.prototype.setAttributes = function(t) {
        var r, n;
        try {
          for (var o = dU(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
            var s = Db(i.value, 2)
              , l = s[0]
              , d = s[1];
            this.setAttribute(l, d)
          }
        } catch (u) {
          r = {
            error: u
          }
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o)
          } finally {
            if (r)
              throw r.error
          }
        }
        return this
      }
      ,
      e.prototype.addEvent = function(t, r, n) {
        if (this._isSpanEnded())
          return this;
        if (this._spanLimits.eventCountLimit === 0)
          return C.warn("No events allowed."),
            this._droppedEventsCount++,
            this;
        this.events.length >= this._spanLimits.eventCountLimit && (this._droppedEventsCount === 0 && C.debug("Dropping extra events."),
          this.events.shift(),
          this._droppedEventsCount++),
          (0,
            ge.isTimeInput)(r) && ((0,
              ge.isTimeInput)(n) || (n = r),
              r = void 0);
        var o = (0,
          ge.sanitizeAttributes)(r);
        return this.events.push({
          name: t,
          attributes: o,
          time: this._getTime(n),
          droppedAttributesCount: 0
        }),
          this
      }
      ,
      e.prototype.addLink = function(t) {
        return this.links.push(t),
          this
      }
      ,
      e.prototype.addLinks = function(t) {
        var r;
        return (r = this.links).push.apply(r, fU([], Db(t), !1)),
          this
      }
      ,
      e.prototype.setStatus = function(t) {
        return this._isSpanEnded() ? this : (this.status = Pd({}, t),
          this.status.message != null && typeof t.message != "string" && (C.warn("Dropping invalid status.message of type '" + typeof t.message + "', expected 'string'"),
            delete this.status.message),
          this)
      }
      ,
      e.prototype.updateName = function(t) {
        return this._isSpanEnded() ? this : (this.name = t,
          this)
      }
      ,
      e.prototype.end = function(t) {
        if (this._isSpanEnded()) {
          C.error(this.name + " " + this._spanContext.traceId + "-" + this._spanContext.spanId + " - You can only call end() on a span once.");
          return
        }
        this._ended = !0,
          this.endTime = this._getTime(t),
          this._duration = (0,
            ge.hrTimeDuration)(this.startTime, this.endTime),
          this._duration[0] < 0 && (C.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime),
            this.endTime = this.startTime.slice(),
            this._duration = [0, 0]),
          this._droppedEventsCount > 0 && C.warn("Dropped " + this._droppedEventsCount + " events because eventCountLimit reached"),
          this._spanProcessor.onEnd(this)
      }
      ,
      e.prototype._getTime = function(t) {
        if (typeof t == "number" && t <= ge.otperformance.now())
          return (0,
            ge.hrTime)(t + this._performanceOffset);
        if (typeof t == "number")
          return (0,
            ge.millisToHrTime)(t);
        if (t instanceof Date)
          return (0,
            ge.millisToHrTime)(t.getTime());
        if ((0,
          ge.isTimeInputHrTime)(t))
          return t;
        if (this._startTimeProvided)
          return (0,
            ge.millisToHrTime)(Date.now());
        var r = ge.otperformance.now() - this._performanceStartTime;
        return (0,
          ge.addHrTimes)(this.startTime, (0,
            ge.millisToHrTime)(r))
      }
      ,
      e.prototype.isRecording = function() {
        return this._ended === !1
      }
      ,
      e.prototype.recordException = function(t, r) {
        var n = {};
        typeof t == "string" ? n[ii] = t : t && (t.code ? n[oi] = t.code.toString() : t.name && (n[oi] = t.name),
          t.message && (n[ii] = t.message),
          t.stack && (n[vc] = t.stack)),
          n[oi] || n[ii] ? this.addEvent($b, n, r) : C.warn("Failed to record an exception " + t)
      }
      ,
      Object.defineProperty(e.prototype, "duration", {
        get: a(function() {
          return this._duration
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "ended", {
        get: a(function() {
          return this._ended
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "droppedAttributesCount", {
        get: a(function() {
          return this._droppedAttributesCount
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "droppedEventsCount", {
        get: a(function() {
          return this._droppedEventsCount
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "droppedLinksCount", {
        get: a(function() {
          return this._droppedLinksCount
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype._isSpanEnded = function() {
        return this._ended && C.warn("Can not execute the operation on ended Span {traceId: " + this._spanContext.traceId + ", spanId: " + this._spanContext.spanId + "}"),
          this._ended
      }
      ,
      e.prototype._truncateToLimitUtil = function(t, r) {
        return t.length <= r ? t : t.substring(0, r)
      }
      ,
      e.prototype._truncateToSize = function(t) {
        var r = this
          , n = this._attributeValueLengthLimit;
        return n <= 0 ? (C.warn("Attribute value limit must be positive, got " + n),
          t) : typeof t == "string" ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map(function(o) {
            return typeof o == "string" ? r._truncateToLimitUtil(o, n) : o
          }) : t
      }
      ,
      e
  }();
c();
c();
G();
var zt = U(se());
c();
c();
var Sr;
(function(e) {
  e[e.NOT_RECORD = 0] = "NOT_RECORD",
    e[e.RECORD = 1] = "RECORD",
    e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED"
}
)(Sr || (Sr = {}));
var fo = function() {
  function e() { }
  return a(e, "AlwaysOffSampler"),
    e.prototype.shouldSample = function() {
      return {
        decision: Sr.NOT_RECORD
      }
    }
    ,
    e.prototype.toString = function() {
      return "AlwaysOffSampler"
    }
    ,
    e
}();
c();
var Hr = function() {
  function e() { }
  return a(e, "AlwaysOnSampler"),
    e.prototype.shouldSample = function() {
      return {
        decision: Sr.RECORD_AND_SAMPLED
      }
    }
    ,
    e.prototype.toString = function() {
      return "AlwaysOnSampler"
    }
    ,
    e
}();
c();
G();
var Fb = U(se());
var ks = function() {
  function e(t) {
    var r, n, o, i;
    this._root = t.root,
      this._root || ((0,
        Fb.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")),
        this._root = new Hr),
      this._remoteParentSampled = (r = t.remoteParentSampled) !== null && r !== void 0 ? r : new Hr,
      this._remoteParentNotSampled = (n = t.remoteParentNotSampled) !== null && n !== void 0 ? n : new fo,
      this._localParentSampled = (o = t.localParentSampled) !== null && o !== void 0 ? o : new Hr,
      this._localParentNotSampled = (i = t.localParentNotSampled) !== null && i !== void 0 ? i : new fo
  }
  return a(e, "ParentBasedSampler"),
    e.prototype.shouldSample = function(t, r, n, o, i, s) {
      var l = Pe.getSpanContext(t);
      return !l || !tr(l) ? this._root.shouldSample(t, r, n, o, i, s) : l.isRemote ? l.traceFlags & rt.SAMPLED ? this._remoteParentSampled.shouldSample(t, r, n, o, i, s) : this._remoteParentNotSampled.shouldSample(t, r, n, o, i, s) : l.traceFlags & rt.SAMPLED ? this._localParentSampled.shouldSample(t, r, n, o, i, s) : this._localParentNotSampled.shouldSample(t, r, n, o, i, s)
    }
    ,
    e.prototype.toString = function() {
      return "ParentBased{root=" + this._root.toString() + ", remoteParentSampled=" + this._remoteParentSampled.toString() + ", remoteParentNotSampled=" + this._remoteParentNotSampled.toString() + ", localParentSampled=" + this._localParentSampled.toString() + ", localParentNotSampled=" + this._localParentNotSampled.toString() + "}"
    }
    ,
    e
}();
c();
G();
var po = function() {
  function e(t) {
    t === void 0 && (t = 0),
      this._ratio = t,
      this._ratio = this._normalize(t),
      this._upperBound = Math.floor(this._ratio * 4294967295)
  }
  return a(e, "TraceIdRatioBasedSampler"),
    e.prototype.shouldSample = function(t, r) {
      return {
        decision: Zo(r) && this._accumulate(r) < this._upperBound ? Sr.RECORD_AND_SAMPLED : Sr.NOT_RECORD
      }
    }
    ,
    e.prototype.toString = function() {
      return "TraceIdRatioBased{" + this._ratio + "}"
    }
    ,
    e.prototype._normalize = function(t) {
      return typeof t != "number" || isNaN(t) ? 0 : t >= 1 ? 1 : t <= 0 ? 0 : t
    }
    ,
    e.prototype._accumulate = function(t) {
      for (var r = 0, n = 0; n < t.length / 8; n++) {
        var o = n * 8
          , i = parseInt(t.slice(o, o + 8), 16);
        r = (r ^ i) >>> 0
      }
      return r
    }
    ,
    e
}();
var pU = zt.TracesSamplerValues.AlwaysOn
  , mo = 1;
function Hs() {
  var e = (0,
    zt.getEnv)();
  return {
    sampler: Nd(e),
    forceFlushTimeoutMillis: 3e4,
    generalLimits: {
      attributeValueLengthLimit: e.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: e.OTEL_ATTRIBUTE_COUNT_LIMIT
    },
    spanLimits: {
      attributeValueLengthLimit: e.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: e.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
      linkCountLimit: e.OTEL_SPAN_LINK_COUNT_LIMIT,
      eventCountLimit: e.OTEL_SPAN_EVENT_COUNT_LIMIT,
      attributePerEventCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
      attributePerLinkCountLimit: e.OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
    },
    mergeResourceWithDefaults: !0
  }
}
a(Hs, "loadDefaultConfig");
function Nd(e) {
  switch (e === void 0 && (e = (0,
    zt.getEnv)()),
  e.OTEL_TRACES_SAMPLER) {
    case zt.TracesSamplerValues.AlwaysOn:
      return new Hr;
    case zt.TracesSamplerValues.AlwaysOff:
      return new fo;
    case zt.TracesSamplerValues.ParentBasedAlwaysOn:
      return new ks({
        root: new Hr
      });
    case zt.TracesSamplerValues.ParentBasedAlwaysOff:
      return new ks({
        root: new fo
      });
    case zt.TracesSamplerValues.TraceIdRatio:
      return new po(Bb(e));
    case zt.TracesSamplerValues.ParentBasedTraceIdRatio:
      return new ks({
        root: new po(Bb(e))
      });
    default:
      return C.error('OTEL_TRACES_SAMPLER value "' + e.OTEL_TRACES_SAMPLER + " invalid, defaulting to " + pU + '".'),
        new Hr
  }
}
a(Nd, "buildSamplerFromEnv");
function Bb(e) {
  if (e.OTEL_TRACES_SAMPLER_ARG === void 0 || e.OTEL_TRACES_SAMPLER_ARG === "")
    return C.error("OTEL_TRACES_SAMPLER_ARG is blank, defaulting to " + mo + "."),
      mo;
  var t = Number(e.OTEL_TRACES_SAMPLER_ARG);
  return isNaN(t) ? (C.error("OTEL_TRACES_SAMPLER_ARG=" + e.OTEL_TRACES_SAMPLER_ARG + " was given, but it is invalid, defaulting to " + mo + "."),
    mo) : t < 0 || t > 1 ? (C.error("OTEL_TRACES_SAMPLER_ARG=" + e.OTEL_TRACES_SAMPLER_ARG + " was given, but it is out of range ([0..1]), defaulting to " + mo + "."),
      mo) : t
}
a(Bb, "getSamplerProbabilityFromEnv");
var _o = U(se());
function Vb(e) {
  var t = {
    sampler: Nd()
  }
    , r = Hs()
    , n = Object.assign({}, r, t, e);
  return n.generalLimits = Object.assign({}, r.generalLimits, e.generalLimits || {}),
    n.spanLimits = Object.assign({}, r.spanLimits, e.spanLimits || {}),
    n
}
a(Vb, "mergeConfig");
function kb(e) {
  var t, r, n, o, i, s, l, d, u, f, p, _, S = Object.assign({}, e.spanLimits), g = (0,
    _o.getEnvWithoutDefaults)();
  return S.attributeCountLimit = (s = (i = (o = (r = (t = e.spanLimits) === null || t === void 0 ? void 0 : t.attributeCountLimit) !== null && r !== void 0 ? r : (n = e.generalLimits) === null || n === void 0 ? void 0 : n.attributeCountLimit) !== null && o !== void 0 ? o : g.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && i !== void 0 ? i : g.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && s !== void 0 ? s : _o.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    S.attributeValueLengthLimit = (_ = (p = (f = (d = (l = e.spanLimits) === null || l === void 0 ? void 0 : l.attributeValueLengthLimit) !== null && d !== void 0 ? d : (u = e.generalLimits) === null || u === void 0 ? void 0 : u.attributeValueLengthLimit) !== null && f !== void 0 ? f : g.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && p !== void 0 ? p : g.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && _ !== void 0 ? _ : _o.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
    Object.assign({}, e, {
      spanLimits: S
    })
}
a(kb, "reconfigureLimits");
c();
c();
c();
G();
var Ct = U(se());
var Hb = function() {
  function e(t, r) {
    this._exporter = t,
      this._isExporting = !1,
      this._finishedSpans = [],
      this._droppedSpansCount = 0;
    var n = (0,
      Ct.getEnv)();
    this._maxExportBatchSize = typeof (r == null ? void 0 : r.maxExportBatchSize) == "number" ? r.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE,
      this._maxQueueSize = typeof (r == null ? void 0 : r.maxQueueSize) == "number" ? r.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE,
      this._scheduledDelayMillis = typeof (r == null ? void 0 : r.scheduledDelayMillis) == "number" ? r.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY,
      this._exportTimeoutMillis = typeof (r == null ? void 0 : r.exportTimeoutMillis) == "number" ? r.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT,
      this._shutdownOnce = new Ct.BindOnceFuture(this._shutdown, this),
      this._maxExportBatchSize > this._maxQueueSize && (C.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"),
        this._maxExportBatchSize = this._maxQueueSize)
  }
  return a(e, "BatchSpanProcessorBase"),
    e.prototype.forceFlush = function() {
      return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
    }
    ,
    e.prototype.onStart = function(t, r) { }
    ,
    e.prototype.onEnd = function(t) {
      this._shutdownOnce.isCalled || (t.spanContext().traceFlags & rt.SAMPLED) !== 0 && this._addToBuffer(t)
    }
    ,
    e.prototype.shutdown = function() {
      return this._shutdownOnce.call()
    }
    ,
    e.prototype._shutdown = function() {
      var t = this;
      return Promise.resolve().then(function() {
        return t.onShutdown()
      }).then(function() {
        return t._flushAll()
      }).then(function() {
        return t._exporter.shutdown()
      })
    }
    ,
    e.prototype._addToBuffer = function(t) {
      if (this._finishedSpans.length >= this._maxQueueSize) {
        this._droppedSpansCount === 0 && C.debug("maxQueueSize reached, dropping spans"),
          this._droppedSpansCount++;
        return
      }
      this._droppedSpansCount > 0 && (C.warn("Dropped " + this._droppedSpansCount + " spans because maxQueueSize reached"),
        this._droppedSpansCount = 0),
        this._finishedSpans.push(t),
        this._maybeStartTimer()
    }
    ,
    e.prototype._flushAll = function() {
      var t = this;
      return new Promise(function(r, n) {
        for (var o = [], i = Math.ceil(t._finishedSpans.length / t._maxExportBatchSize), s = 0, l = i; s < l; s++)
          o.push(t._flushOneBatch());
        Promise.all(o).then(function() {
          r()
        }).catch(n)
      }
      )
    }
    ,
    e.prototype._flushOneBatch = function() {
      var t = this;
      return this._clearTimer(),
        this._finishedSpans.length === 0 ? Promise.resolve() : new Promise(function(r, n) {
          var o = setTimeout(function() {
            n(new Error("Timeout"))
          }, t._exportTimeoutMillis);
          ve.with((0,
            Ct.suppressTracing)(ve.active()), function() {
              var i;
              t._finishedSpans.length <= t._maxExportBatchSize ? (i = t._finishedSpans,
                t._finishedSpans = []) : i = t._finishedSpans.splice(0, t._maxExportBatchSize);
              for (var s = a(function() {
                return t._exporter.export(i, function(p) {
                  var _;
                  clearTimeout(o),
                    p.code === Ct.ExportResultCode.SUCCESS ? r() : n((_ = p.error) !== null && _ !== void 0 ? _ : new Error("BatchSpanProcessor: span export failed"))
                })
              }, "doExport"), l = null, d = 0, u = i.length; d < u; d++) {
                var f = i[d];
                f.resource.asyncAttributesPending && f.resource.waitForAsyncAttributes && (l != null || (l = []),
                  l.push(f.resource.waitForAsyncAttributes()))
              }
              l === null ? s() : Promise.all(l).then(s, function(p) {
                (0,
                  Ct.globalErrorHandler)(p),
                  n(p)
              })
            })
        }
        )
    }
    ,
    e.prototype._maybeStartTimer = function() {
      var t = this;
      if (!this._isExporting) {
        var r = a(function() {
          t._isExporting = !0,
            t._flushOneBatch().finally(function() {
              t._isExporting = !1,
                t._finishedSpans.length > 0 && (t._clearTimer(),
                  t._maybeStartTimer())
            }).catch(function(n) {
              t._isExporting = !1,
                (0,
                  Ct.globalErrorHandler)(n)
            })
        }, "flush");
        if (this._finishedSpans.length >= this._maxExportBatchSize)
          return r();
        this._timer === void 0 && (this._timer = setTimeout(function() {
          return r()
        }, this._scheduledDelayMillis),
          (0,
            Ct.unrefTimer)(this._timer))
      }
    }
    ,
    e.prototype._clearTimer = function() {
      this._timer !== void 0 && (clearTimeout(this._timer),
        this._timer = void 0)
    }
    ,
    e
}();
var wd = U(se());
var mU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , ho = function(e) {
    mU(t, e);
    function t(r, n) {
      var o = e.call(this, r, n) || this;
      return o.onInit(n),
        o
    }
    return a(t, "BatchSpanProcessor"),
      t.prototype.onInit = function(r) {
        var n = this;
        (r == null ? void 0 : r.disableAutoFlushOnDocumentHide) !== !0 && typeof document != "undefined" && (this._visibilityChangeListener = function() {
          document.visibilityState === "hidden" && n.forceFlush().catch(function(o) {
            (0,
              wd.globalErrorHandler)(o)
          })
        }
          ,
          this._pageHideListener = function() {
            n.forceFlush().catch(function(o) {
              (0,
                wd.globalErrorHandler)(o)
            })
          }
          ,
          document.addEventListener("visibilitychange", this._visibilityChangeListener),
          document.addEventListener("pagehide", this._pageHideListener))
      }
      ,
      t.prototype.onShutdown = function() {
        typeof document != "undefined" && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener),
          this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
      }
      ,
      t
  }(Hb);
c();
var _U = 8
  , hU = 16
  , Ys = function() {
    function e() {
      this.generateTraceId = Gb(hU),
        this.generateSpanId = Gb(_U)
    }
    return a(e, "RandomIdGenerator"),
      e
  }();
var Gs = Array(32);
function Gb(e) {
  return a(function() {
    for (var r = 0; r < e * 2; r++)
      Gs[r] = Math.floor(Math.random() * 16) + 48,
        Gs[r] >= 58 && (Gs[r] += 39);
    return String.fromCharCode.apply(null, Gs.slice(0, e * 2))
  }, "generateId")
}
a(Gb, "getIdGenerator");
var Yb = function() {
  function e(t, r, n) {
    this._tracerProvider = n;
    var o = Vb(r);
    this._sampler = o.sampler,
      this._generalLimits = o.generalLimits,
      this._spanLimits = o.spanLimits,
      this._idGenerator = r.idGenerator || new Ys,
      this.resource = n.resource,
      this.instrumentationLibrary = t
  }
  return a(e, "Tracer"),
    e.prototype.startSpan = function(t, r, n) {
      var o, i, s;
      r === void 0 && (r = {}),
        n === void 0 && (n = ve.active()),
        r.root && (n = Pe.deleteSpan(n));
      var l = Pe.getSpan(n);
      if ((0,
        go.isTracingSuppressed)(n)) {
        C.debug("Instrumentation suppressed, returning Noop Span");
        var d = Pe.wrapSpanContext(Wn);
        return d
      }
      var u = l == null ? void 0 : l.spanContext(), f = this._idGenerator.generateSpanId(), p, _, S;
      !u || !Pe.isSpanContextValid(u) ? p = this._idGenerator.generateTraceId() : (p = u.traceId,
        _ = u.traceState,
        S = u.spanId);
      var g = (o = r.kind) !== null && o !== void 0 ? o : Lr.INTERNAL
        , T = ((i = r.links) !== null && i !== void 0 ? i : []).map(function(K) {
          return {
            context: K.context,
            attributes: (0,
              go.sanitizeAttributes)(K.attributes)
          }
        })
        , b = (0,
          go.sanitizeAttributes)(r.attributes)
        , x = this._sampler.shouldSample(n, p, t, g, b, T);
      _ = (s = x.traceState) !== null && s !== void 0 ? s : _;
      var A = x.decision === fn.RECORD_AND_SAMPLED ? rt.SAMPLED : rt.NONE
        , P = {
          traceId: p,
          spanId: f,
          traceFlags: A,
          traceState: _
        };
      if (x.decision === fn.NOT_RECORD) {
        C.debug("Recording is off, propagating context in a non-recording span");
        var d = Pe.wrapSpanContext(P);
        return d
      }
      var L = (0,
        go.sanitizeAttributes)(Object.assign(b, x.attributes))
        , D = new Ub(this, n, t, P, g, S, T, r.startTime, void 0, L);
      return D
    }
    ,
    e.prototype.startActiveSpan = function(t, r, n, o) {
      var i, s, l;
      if (!(arguments.length < 2)) {
        arguments.length === 2 ? l = r : arguments.length === 3 ? (i = r,
          l = n) : (i = r,
            s = n,
            l = o);
        var d = s != null ? s : ve.active()
          , u = this.startSpan(t, i, d)
          , f = Pe.setSpan(d, u);
        return ve.with(f, l, void 0, u)
      }
    }
    ,
    e.prototype.getGeneralLimits = function() {
      return this._generalLimits
    }
    ,
    e.prototype.getSpanLimits = function() {
      return this._spanLimits
    }
    ,
    e.prototype.getActiveSpanProcessor = function() {
      return this._tracerProvider.getActiveSpanProcessor()
    }
    ,
    e
}();
c();
G();
var Wt = U(se());
c();
var jb = U(se());
var js = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , Id = function() {
    function e(t) {
      this._spanProcessors = t
    }
    return a(e, "MultiSpanProcessor"),
      e.prototype.forceFlush = function() {
        var t, r, n = [];
        try {
          for (var o = js(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            n.push(s.forceFlush())
          }
        } catch (l) {
          t = {
            error: l
          }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (t)
              throw t.error
          }
        }
        return new Promise(function(l) {
          Promise.all(n).then(function() {
            l()
          }).catch(function(d) {
            (0,
              jb.globalErrorHandler)(d || new Error("MultiSpanProcessor: forceFlush failed")),
              l()
          })
        }
        )
      }
      ,
      e.prototype.onStart = function(t, r) {
        var n, o;
        try {
          for (var i = js(this._spanProcessors), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            l.onStart(t, r)
          }
        } catch (d) {
          n = {
            error: d
          }
        } finally {
          try {
            s && !s.done && (o = i.return) && o.call(i)
          } finally {
            if (n)
              throw n.error
          }
        }
      }
      ,
      e.prototype.onEnd = function(t) {
        var r, n;
        try {
          for (var o = js(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            s.onEnd(t)
          }
        } catch (l) {
          r = {
            error: l
          }
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o)
          } finally {
            if (r)
              throw r.error
          }
        }
      }
      ,
      e.prototype.shutdown = function() {
        var t, r, n = [];
        try {
          for (var o = js(this._spanProcessors), i = o.next(); !i.done; i = o.next()) {
            var s = i.value;
            n.push(s.shutdown())
          }
        } catch (l) {
          t = {
            error: l
          }
        } finally {
          try {
            i && !i.done && (r = o.return) && r.call(o)
          } finally {
            if (t)
              throw t.error
          }
        }
        return new Promise(function(l, d) {
          Promise.all(n).then(function() {
            l()
          }, d)
        }
        )
      }
      ,
      e
  }();
c();
var zb = function() {
  function e() { }
  return a(e, "NoopSpanProcessor"),
    e.prototype.onStart = function(t, r) { }
    ,
    e.prototype.onEnd = function(t) { }
    ,
    e.prototype.shutdown = function() {
      return Promise.resolve()
    }
    ,
    e.prototype.forceFlush = function() {
      return Promise.resolve()
    }
    ,
    e
}();
var gU = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}, EU = function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
        i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t))
}, Gr;
(function(e) {
  e[e.resolved = 0] = "resolved",
    e[e.timeout = 1] = "timeout",
    e[e.error = 2] = "error",
    e[e.unresolved = 3] = "unresolved"
}
)(Gr || (Gr = {}));
var Md = function() {
  function e(t) {
    t === void 0 && (t = {});
    var r, n;
    this._registeredSpanProcessors = [],
      this._tracers = new Map;
    var o = (0,
      Wt.merge)({}, Hs(), kb(t));
    if (this.resource = (r = o.resource) !== null && r !== void 0 ? r : at.empty(),
      o.mergeResourceWithDefaults && (this.resource = at.default().merge(this.resource)),
      this._config = Object.assign({}, o, {
        resource: this.resource
      }),
      !((n = t.spanProcessors) === null || n === void 0) && n.length)
      this._registeredSpanProcessors = EU([], gU(t.spanProcessors), !1),
        this.activeSpanProcessor = new Id(this._registeredSpanProcessors);
    else {
      var i = this._buildExporterFromEnv();
      if (i !== void 0) {
        var s = new ho(i);
        this.activeSpanProcessor = s
      } else
        this.activeSpanProcessor = new zb
    }
  }
  return a(e, "BasicTracerProvider"),
    e.prototype.getTracer = function(t, r, n) {
      var o = t + "@" + (r || "") + ":" + ((n == null ? void 0 : n.schemaUrl) || "");
      return this._tracers.has(o) || this._tracers.set(o, new Yb({
        name: t,
        version: r,
        schemaUrl: n == null ? void 0 : n.schemaUrl
      }, this._config, this)),
        this._tracers.get(o)
    }
    ,
    e.prototype.addSpanProcessor = function(t) {
      this._registeredSpanProcessors.length === 0 && this.activeSpanProcessor.shutdown().catch(function(r) {
        return C.error("Error while trying to shutdown current span processor", r)
      }),
        this._registeredSpanProcessors.push(t),
        this.activeSpanProcessor = new Id(this._registeredSpanProcessors)
    }
    ,
    e.prototype.getActiveSpanProcessor = function() {
      return this.activeSpanProcessor
    }
    ,
    e.prototype.register = function(t) {
      t === void 0 && (t = {}),
        Pe.setGlobalTracerProvider(this),
        t.propagator === void 0 && (t.propagator = this._buildPropagatorFromEnv()),
        t.contextManager && ve.setGlobalContextManager(t.contextManager),
        t.propagator && Gt.setGlobalPropagator(t.propagator)
    }
    ,
    e.prototype.forceFlush = function() {
      var t = this._config.forceFlushTimeoutMillis
        , r = this._registeredSpanProcessors.map(function(n) {
          return new Promise(function(o) {
            var i, s = setTimeout(function() {
              o(new Error("Span processor did not completed within timeout period of " + t + " ms")),
                i = Gr.timeout
            }, t);
            n.forceFlush().then(function() {
              clearTimeout(s),
                i !== Gr.timeout && (i = Gr.resolved,
                  o(i))
            }).catch(function(l) {
              clearTimeout(s),
                i = Gr.error,
                o(l)
            })
          }
          )
        });
      return new Promise(function(n, o) {
        Promise.all(r).then(function(i) {
          var s = i.filter(function(l) {
            return l !== Gr.resolved
          });
          s.length > 0 ? o(s) : n()
        }).catch(function(i) {
          return o([i])
        })
      }
      )
    }
    ,
    e.prototype.shutdown = function() {
      return this.activeSpanProcessor.shutdown()
    }
    ,
    e.prototype._getPropagator = function(t) {
      var r;
      return (r = this.constructor._registeredPropagators.get(t)) === null || r === void 0 ? void 0 : r()
    }
    ,
    e.prototype._getSpanExporter = function(t) {
      var r;
      return (r = this.constructor._registeredExporters.get(t)) === null || r === void 0 ? void 0 : r()
    }
    ,
    e.prototype._buildPropagatorFromEnv = function() {
      var t = this
        , r = Array.from(new Set((0,
          Wt.getEnv)().OTEL_PROPAGATORS))
        , n = r.map(function(i) {
          var s = t._getPropagator(i);
          return s || C.warn('Propagator "' + i + '" requested through environment variable is unavailable.'),
            s
        })
        , o = n.reduce(function(i, s) {
          return s && i.push(s),
            i
        }, []);
      if (o.length !== 0)
        return r.length === 1 ? o[0] : new Wt.CompositePropagator({
          propagators: o
        })
    }
    ,
    e.prototype._buildExporterFromEnv = function() {
      var t = (0,
        Wt.getEnv)().OTEL_TRACES_EXPORTER;
      if (!(t === "none" || t === "")) {
        var r = this._getSpanExporter(t);
        return r || C.error('Exporter "' + t + '" requested through environment variable is unavailable.'),
          r
      }
    }
    ,
    e._registeredPropagators = new Map([["tracecontext", function() {
      return new Wt.W3CTraceContextPropagator
    }
    ], ["baggage", function() {
      return new Wt.W3CBaggagePropagator
    }
    ]]),
    e._registeredExporters = new Map,
    e
}();
c();
var pi = U(se());
var TU = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , Ld = function() {
    function e() { }
    return a(e, "ConsoleSpanExporter"),
      e.prototype.export = function(t, r) {
        return this._sendSpans(t, r)
      }
      ,
      e.prototype.shutdown = function() {
        return this._sendSpans([]),
          this.forceFlush()
      }
      ,
      e.prototype.forceFlush = function() {
        return Promise.resolve()
      }
      ,
      e.prototype._exportInfo = function(t) {
        var r;
        return {
          resource: {
            attributes: t.resource.attributes
          },
          instrumentationScope: t.instrumentationLibrary,
          traceId: t.spanContext().traceId,
          parentId: t.parentSpanId,
          traceState: (r = t.spanContext().traceState) === null || r === void 0 ? void 0 : r.serialize(),
          name: t.name,
          id: t.spanContext().spanId,
          kind: t.kind,
          timestamp: (0,
            pi.hrTimeToMicroseconds)(t.startTime),
          duration: (0,
            pi.hrTimeToMicroseconds)(t.duration),
          attributes: t.attributes,
          status: t.status,
          events: t.events,
          links: t.links
        }
      }
      ,
      e.prototype._sendSpans = function(t, r) {
        var n, o;
        try {
          for (var i = TU(t), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            console.dir(this._exportInfo(l), {
              depth: 3
            })
          }
        } catch (d) {
          n = {
            error: d
          }
        } finally {
          try {
            s && !s.done && (o = i.return) && o.call(i)
          } finally {
            if (n)
              throw n.error
          }
        }
        if (r)
          return r({
            code: pi.ExportResultCode.SUCCESS
          })
      }
      ,
      e
  }();
c();
G();
var or = U(se());
var vU = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , SU = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , $d = function() {
    function e(t) {
      this._exporter = t,
        this._shutdownOnce = new or.BindOnceFuture(this._shutdown, this),
        this._unresolvedExports = new Set
    }
    return a(e, "SimpleSpanProcessor"),
      e.prototype.forceFlush = function() {
        return vU(this, void 0, void 0, function() {
          return SU(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all(Array.from(this._unresolvedExports))];
              case 1:
                return t.sent(),
                  this._exporter.forceFlush ? [4, this._exporter.forceFlush()] : [3, 3];
              case 2:
                t.sent(),
                  t.label = 3;
              case 3:
                return [2]
            }
          })
        })
      }
      ,
      e.prototype.onStart = function(t, r) { }
      ,
      e.prototype.onEnd = function(t) {
        var r = this, n, o;
        if (!this._shutdownOnce.isCalled && (t.spanContext().traceFlags & rt.SAMPLED) !== 0) {
          var i = a(function() {
            return or.internal._export(r._exporter, [t]).then(function(l) {
              var d;
              l.code !== or.ExportResultCode.SUCCESS && (0,
                or.globalErrorHandler)((d = l.error) !== null && d !== void 0 ? d : new Error("SimpleSpanProcessor: span export failed (status " + l + ")"))
            }).catch(function(l) {
              (0,
                or.globalErrorHandler)(l)
            })
          }, "doExport");
          if (t.resource.asyncAttributesPending) {
            var s = (o = (n = t.resource).waitForAsyncAttributes) === null || o === void 0 ? void 0 : o.call(n).then(function() {
              return s != null && r._unresolvedExports.delete(s),
                i()
            }, function(l) {
              return (0,
                or.globalErrorHandler)(l)
            });
            s != null && this._unresolvedExports.add(s)
          } else
            i()
        }
      }
      ,
      e.prototype.shutdown = function() {
        return this._shutdownOnce.call()
      }
      ,
      e.prototype._shutdown = function() {
        return this._exporter.shutdown()
      }
      ,
      e
  }();
c();
c();
c();
G();
var yU = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}
  , AU = function(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, o = t.length, i; n < o; n++)
        (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
          i[n] = t[n]);
    return e.concat(i || Array.prototype.slice.call(t))
  }
  , Wb = function() {
    function e() {
      this._enabled = !1,
        this._currentContext = er
    }
    return a(e, "StackContextManager"),
      e.prototype._bindFunction = function(t, r) {
        t === void 0 && (t = er);
        var n = this
          , o = a(function() {
            for (var i = this, s = [], l = 0; l < arguments.length; l++)
              s[l] = arguments[l];
            return n.with(t, function() {
              return r.apply(i, s)
            })
          }, "contextWrapper");
        return Object.defineProperty(o, "length", {
          enumerable: !1,
          configurable: !0,
          writable: !1,
          value: r.length
        }),
          o
      }
      ,
      e.prototype.active = function() {
        return this._currentContext
      }
      ,
      e.prototype.bind = function(t, r) {
        return t === void 0 && (t = this.active()),
          typeof r == "function" ? this._bindFunction(t, r) : r
      }
      ,
      e.prototype.disable = function() {
        return this._currentContext = er,
          this._enabled = !1,
          this
      }
      ,
      e.prototype.enable = function() {
        return this._enabled ? this : (this._enabled = !0,
          this._currentContext = er,
          this)
      }
      ,
      e.prototype.with = function(t, r, n) {
        for (var o = [], i = 3; i < arguments.length; i++)
          o[i - 3] = arguments[i];
        var s = this._currentContext;
        this._currentContext = t || er;
        try {
          return r.call.apply(r, AU([n], yU(o), !1))
        } finally {
          this._currentContext = s
        }
      }
      ,
      e
  }();
var bU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , Dd = function(e) {
    bU(t, e);
    function t(r) {
      r === void 0 && (r = {});
      var n = e.call(this, r) || this;
      if (r.contextManager)
        throw "contextManager should be defined in register method not in constructor";
      if (r.propagator)
        throw "propagator should be defined in register method not in constructor";
      return n
    }
    return a(t, "WebTracerProvider"),
      t.prototype.register = function(r) {
        r === void 0 && (r = {}),
          r.contextManager === void 0 && (r.contextManager = new Wb),
          r.contextManager && r.contextManager.enable(),
          e.prototype.register.call(this, r)
      }
      ,
      t
  }(Md);
c();
var pe;
(function(e) {
  e.CONNECT_END = "connectEnd",
    e.CONNECT_START = "connectStart",
    e.DECODED_BODY_SIZE = "decodedBodySize",
    e.DOM_COMPLETE = "domComplete",
    e.DOM_CONTENT_LOADED_EVENT_END = "domContentLoadedEventEnd",
    e.DOM_CONTENT_LOADED_EVENT_START = "domContentLoadedEventStart",
    e.DOM_INTERACTIVE = "domInteractive",
    e.DOMAIN_LOOKUP_END = "domainLookupEnd",
    e.DOMAIN_LOOKUP_START = "domainLookupStart",
    e.ENCODED_BODY_SIZE = "encodedBodySize",
    e.FETCH_START = "fetchStart",
    e.LOAD_EVENT_END = "loadEventEnd",
    e.LOAD_EVENT_START = "loadEventStart",
    e.NAVIGATION_START = "navigationStart",
    e.REDIRECT_END = "redirectEnd",
    e.REDIRECT_START = "redirectStart",
    e.REQUEST_START = "requestStart",
    e.RESPONSE_END = "responseEnd",
    e.RESPONSE_START = "responseStart",
    e.SECURE_CONNECTION_START = "secureConnectionStart",
    e.UNLOAD_EVENT_END = "unloadEventEnd",
    e.UNLOAD_EVENT_START = "unloadEventStart"
}
)(pe || (pe = {}));
c();
var qe = U(se());
Qn();
var Ud;
function xU() {
  return Ud || (Ud = document.createElement("a")),
    Ud
}
a(xU, "getUrlNormalizingAnchor");
function zs(e, t) {
  return t in e
}
a(zs, "hasKey");
function ir(e, t, r, n) {
  var o = void 0
    , i = void 0;
  zs(r, t) && typeof r[t] == "number" && (o = r[t]);
  var s = n || pe.FETCH_START;
  if (zs(r, s) && typeof r[s] == "number" && (i = r[s]),
    o !== void 0 && i !== void 0 && o >= i)
    return e.addEvent(t, o),
      e
}
a(ir, "addSpanNetworkEvent");
function Ws(e, t, r) {
  r === void 0 && (r = !1),
    r || (ir(e, pe.FETCH_START, t),
      ir(e, pe.DOMAIN_LOOKUP_START, t),
      ir(e, pe.DOMAIN_LOOKUP_END, t),
      ir(e, pe.CONNECT_START, t),
      zs(t, "name") && t.name.startsWith("https:") && ir(e, pe.SECURE_CONNECTION_START, t),
      ir(e, pe.CONNECT_END, t),
      ir(e, pe.REQUEST_START, t),
      ir(e, pe.RESPONSE_START, t),
      ir(e, pe.RESPONSE_END, t));
  var n = t[pe.ENCODED_BODY_SIZE];
  n !== void 0 && e.setAttribute(Oc, n);
  var o = t[pe.DECODED_BODY_SIZE];
  o !== void 0 && n !== o && e.setAttribute(Pc, o)
}
a(Ws, "addSpanNetworkEvents");
function Kb(e) {
  return e.slice().sort(function(t, r) {
    var n = t[pe.FETCH_START]
      , o = r[pe.FETCH_START];
    return n > o ? 1 : n < o ? -1 : 0
  })
}
a(Kb, "sortResources");
function Xb() {
  return typeof location != "undefined" ? location.origin : void 0
}
a(Xb, "getOrigin");
function Fd(e, t, r, n, o, i) {
  o === void 0 && (o = new WeakSet);
  var s = Eo(e);
  e = s.toString();
  var l = RU(e, t, r, n, o, i);
  if (l.length === 0)
    return {
      mainRequest: void 0
    };
  if (l.length === 1)
    return {
      mainRequest: l[0]
    };
  var d = Kb(l);
  if (s.origin !== Xb() && d.length > 1) {
    var u = d[0]
      , f = CU(d, u[pe.RESPONSE_END], r)
      , p = u[pe.RESPONSE_END]
      , _ = f[pe.FETCH_START];
    return _ < p && (f = u,
      u = void 0),
    {
      corsPreFlightRequest: u,
      mainRequest: f
    }
  } else
    return {
      mainRequest: l[0]
    }
}
a(Fd, "getResource");
function CU(e, t, r) {
  for (var n = (0,
    qe.hrTimeToNanoseconds)(r), o = (0,
      qe.hrTimeToNanoseconds)((0,
        qe.timeInputToHrTime)(t)), i = e[1], s, l = e.length, d = 1; d < l; d++) {
    var u = e[d]
      , f = (0,
        qe.hrTimeToNanoseconds)((0,
          qe.timeInputToHrTime)(u[pe.FETCH_START]))
      , p = (0,
        qe.hrTimeToNanoseconds)((0,
          qe.timeInputToHrTime)(u[pe.RESPONSE_END]))
      , _ = n - p;
    f >= o && (!s || _ < s) && (s = _,
      i = u)
  }
  return i
}
a(CU, "findMainRequest");
function RU(e, t, r, n, o, i) {
  var s = (0,
    qe.hrTimeToNanoseconds)(t)
    , l = (0,
      qe.hrTimeToNanoseconds)(r)
    , d = n.filter(function(u) {
      var f = (0,
        qe.hrTimeToNanoseconds)((0,
          qe.timeInputToHrTime)(u[pe.FETCH_START]))
        , p = (0,
          qe.hrTimeToNanoseconds)((0,
            qe.timeInputToHrTime)(u[pe.RESPONSE_END]));
      return u.initiatorType.toLowerCase() === (i || "xmlhttprequest") && u.name === e && f >= s && p <= l
    });
  return d.length > 0 && (d = d.filter(function(u) {
    return !o.has(u)
  })),
    d
}
a(RU, "filterResourcesForSpan");
function Eo(e) {
  if (typeof URL == "function")
    return new URL(e, typeof document != "undefined" ? document.baseURI : typeof location != "undefined" ? location.href : void 0);
  var t = xU();
  return t.href = e,
    t
}
a(Eo, "parseUrl");
function Bd(e, t) {
  var r = t || [];
  (typeof r == "string" || r instanceof RegExp) && (r = [r]);
  var n = Eo(e);
  return n.origin === Xb() ? !0 : r.some(function(o) {
    return (0,
      qe.urlMatches)(e, o)
  })
}
a(Bd, "shouldPropagateTraceHeaders");
c();
c();
G();
c();
c();
c();
var Ks = function() {
  function e() { }
  return a(e, "NoopLogger"),
    e.prototype.emit = function(t) { }
    ,
    e
}();
var mi = new Ks;
c();
var PU = function() {
  function e() { }
  return a(e, "NoopLoggerProvider"),
    e.prototype.getLogger = function(t, r, n) {
      return new Ks
    }
    ,
    e
}();
var Xs = new PU;
c();
var qb = function() {
  function e(t, r, n, o) {
    this._provider = t,
      this.name = r,
      this.version = n,
      this.options = o
  }
  return a(e, "ProxyLogger"),
    e.prototype.emit = function(t) {
      this._getLogger().emit(t)
    }
    ,
    e.prototype._getLogger = function() {
      if (this._delegate)
        return this._delegate;
      var t = this._provider.getDelegateLogger(this.name, this.version, this.options);
      return t ? (this._delegate = t,
        this._delegate) : mi
    }
    ,
    e
}();
c();
var Vd = function() {
  function e() { }
  return a(e, "ProxyLoggerProvider"),
    e.prototype.getLogger = function(t, r, n) {
      var o;
      return (o = this.getDelegateLogger(t, r, n)) !== null && o !== void 0 ? o : new qb(this, t, r, n)
    }
    ,
    e.prototype.getDelegate = function() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Xs
    }
    ,
    e.prototype.setDelegate = function(t) {
      this._delegate = t
    }
    ,
    e.prototype.getDelegateLogger = function(t, r, n) {
      var o;
      return (o = this._delegate) === null || o === void 0 ? void 0 : o.getLogger(t, r, n)
    }
    ,
    e
}();
c();
c();
c();
c();
var kd = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {};
var _i = Symbol.for("io.opentelemetry.js.api.logs")
  , To = kd;
function Zb(e, t, r) {
  return function(n) {
    return n === e ? t : r
  }
}
a(Zb, "makeGetter");
var Hd = 1;
var Qb = function() {
  function e() {
    this._proxyLoggerProvider = new Vd
  }
  return a(e, "LogsAPI"),
    e.getInstance = function() {
      return this._instance || (this._instance = new e),
        this._instance
    }
    ,
    e.prototype.setGlobalLoggerProvider = function(t) {
      return To[_i] ? this.getLoggerProvider() : (To[_i] = Zb(Hd, t, Xs),
        this._proxyLoggerProvider.setDelegate(t),
        t)
    }
    ,
    e.prototype.getLoggerProvider = function() {
      var t, r;
      return (r = (t = To[_i]) === null || t === void 0 ? void 0 : t.call(To, Hd)) !== null && r !== void 0 ? r : this._proxyLoggerProvider
    }
    ,
    e.prototype.getLogger = function(t, r, n) {
      return this.getLoggerProvider().getLogger(t, r, n)
    }
    ,
    e.prototype.disable = function() {
      delete To[_i],
        this._proxyLoggerProvider = new Vd
    }
    ,
    e
}();
var Jb = Qb.getInstance();
c();
c();
c();
G();
var Yr = U(n2());
var Yd = function() {
  return Yd = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
  }
    ,
    Yd.apply(this, arguments)
}
  , o2 = function() {
    function e(t, r, n) {
      this.instrumentationName = t,
        this.instrumentationVersion = r,
        this._config = {},
        this._wrap = Yr.wrap,
        this._unwrap = Yr.unwrap,
        this._massWrap = Yr.massWrap,
        this._massUnwrap = Yr.massUnwrap,
        this.setConfig(n),
        this._diag = C.createComponentLogger({
          namespace: t
        }),
        this._tracer = Pe.getTracer(t, r),
        this._meter = Jo.getMeter(t, r),
        this._logger = Jb.getLogger(t, r),
        this._updateMetricInstruments()
    }
    return a(e, "InstrumentationAbstract"),
      Object.defineProperty(e.prototype, "meter", {
        get: a(function() {
          return this._meter
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.setMeterProvider = function(t) {
        this._meter = t.getMeter(this.instrumentationName, this.instrumentationVersion),
          this._updateMetricInstruments()
      }
      ,
      Object.defineProperty(e.prototype, "logger", {
        get: a(function() {
          return this._logger
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.setLoggerProvider = function(t) {
        this._logger = t.getLogger(this.instrumentationName, this.instrumentationVersion)
      }
      ,
      e.prototype.getModuleDefinitions = function() {
        var t, r = (t = this.init()) !== null && t !== void 0 ? t : [];
        return Array.isArray(r) ? r : [r]
      }
      ,
      e.prototype._updateMetricInstruments = function() { }
      ,
      e.prototype.getConfig = function() {
        return this._config
      }
      ,
      e.prototype.setConfig = function(t) {
        this._config = Yd({
          enabled: !0
        }, t)
      }
      ,
      e.prototype.setTracerProvider = function(t) {
        this._tracer = t.getTracer(this.instrumentationName, this.instrumentationVersion)
      }
      ,
      Object.defineProperty(e.prototype, "tracer", {
        get: a(function() {
          return this._tracer
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype._runSpanCustomizationHook = function(t, r, n, o) {
        if (t)
          try {
            t(n, o)
          } catch (i) {
            this._diag.error("Error running span customization hook due to exception in handler", {
              triggerName: r
            }, i)
          }
      }
      ,
      e
  }();
var IU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , qs = function(e) {
    IU(t, e);
    function t(r, n, o) {
      var i = e.call(this, r, n, o) || this;
      return i._config.enabled && i.enable(),
        i
    }
    return a(t, "InstrumentationBase"),
      t
  }(o2);
c();
function jd(e, t, r) {
  var n, o;
  try {
    o = e()
  } catch (i) {
    n = i
  } finally {
    if (t(n, o),
      n && !r)
      throw n;
    return o
  }
}
a(jd, "safeExecuteInTheMiddle");
function zd(e) {
  return typeof e == "function" && typeof e.__original == "function" && typeof e.__unwrap == "function" && e.__wrapped === !0
}
a(zd, "isWrapped");
var An = U(se());
c();
var Ei;
(function(e) {
  e.COMPONENT = "component",
    e.HTTP_ERROR_NAME = "http.error_name",
    e.HTTP_STATUS_TEXT = "http.status_text"
}
)(Ei || (Ei = {}));
Qn();
c();
G();
var MU = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , LU = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , $U = function(e) {
    var t = typeof Symbol == "function" && Symbol.iterator
      , r = t && e[t]
      , n = 0;
    if (r)
      return r.call(e);
    if (e && typeof e.length == "number")
      return {
        next: a(function() {
          return e && n >= e.length && (e = void 0),
          {
            value: e && e[n++],
            done: !e
          }
        }, "next")
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
  }
  , DU = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , i2 = C.createComponentLogger({
    namespace: "@opentelemetry/opentelemetry-instrumentation-fetch/utils"
  });
function a2() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  if (e[0] instanceof URL || typeof e[0] == "string") {
    var r = e[1];
    if (!(r != null && r.body))
      return Promise.resolve();
    if (r.body instanceof ReadableStream) {
      var n = UU(r.body)
        , o = n.body
        , i = n.length;
      return r.body = o,
        i
    } else
      return Promise.resolve(FU(r.body))
  } else {
    var s = e[0];
    return s != null && s.body ? s.clone().text().then(function(l) {
      return Wd(l)
    }) : Promise.resolve()
  }
}
a(a2, "getFetchBodyLength");
function UU(e) {
  if (!e.pipeThrough)
    return i2.warn("Platform has ReadableStream but not pipeThrough!"),
    {
      body: e,
      length: Promise.resolve(void 0)
    };
  var t = 0, r, n = new Promise(function(i) {
    r = i
  }
  ), o = new TransformStream({
    start: a(function() { }, "start"),
    transform: a(function(i, s) {
      return MU(this, void 0, void 0, function() {
        var l;
        return LU(this, function(d) {
          switch (d.label) {
            case 0:
              return [4, i];
            case 1:
              return l = d.sent(),
                t += l.byteLength,
                s.enqueue(i),
                [2]
          }
        })
      })
    }, "transform"),
    flush: a(function() {
      r(t)
    }, "flush")
  });
  return {
    body: e.pipeThrough(o),
    length: n
  }
}
a(UU, "_getBodyNonDestructively");
function FU(e) {
  if (typeof Document != "undefined" && e instanceof Document)
    return new XMLSerializer().serializeToString(document).length;
  if (e instanceof Blob)
    return e.size;
  if (e.byteLength !== void 0)
    return e.byteLength;
  if (e instanceof FormData)
    return VU(e);
  if (e instanceof URLSearchParams)
    return Wd(e.toString());
  if (typeof e == "string")
    return Wd(e);
  i2.warn("unknown body type")
}
a(FU, "getXHRBodyLength");
var BU = new TextEncoder;
function Wd(e) {
  return BU.encode(e).byteLength
}
a(Wd, "getByteLength");
function VU(e) {
  var t, r, n = 0;
  try {
    for (var o = $U(e.entries()), i = o.next(); !i.done; i = o.next()) {
      var s = DU(i.value, 2)
        , l = s[0]
        , d = s[1];
      n += l.length,
        d instanceof Blob ? n += d.size : n += d.length
    }
  } catch (u) {
    t = {
      error: u
    }
  } finally {
    try {
      i && !i.done && (r = o.return) && r.call(o)
    } finally {
      if (t)
        throw t.error
    }
  }
  return n
}
a(VU, "getFormDataSize");
c();
var Kd = "0.57.2";
var Zs = U(se());
var kU = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}(), HU = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), o, i = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
      i.push(o.value)
  } catch (l) {
    s = {
      error: l
    }
  } finally {
    try {
      o && !o.done && (r = n.return) && r.call(n)
    } finally {
      if (s)
        throw s.error
    }
  }
  return i
}, GU = function(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)),
        i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t))
}, Xd, YU = 300, s2 = typeof process == "object" && ((Xd = process.release) === null || Xd === void 0 ? void 0 : Xd.name) === "node", qd = function(e) {
  kU(t, e);
  function t(r) {
    r === void 0 && (r = {});
    var n = e.call(this, "@opentelemetry/instrumentation-fetch", Kd, r) || this;
    return n.component = "fetch",
      n.version = Kd,
      n.moduleName = n.component,
      n._usedResources = new WeakSet,
      n._tasksCount = 0,
      n
  }
  return a(t, "FetchInstrumentation"),
    t.prototype.init = function() { }
    ,
    t.prototype._addChildSpan = function(r, n) {
      var o = this.tracer.startSpan("CORS Preflight", {
        startTime: n[pe.FETCH_START]
      }, Pe.setSpan(ve.active(), r));
      Ws(o, n, this.getConfig().ignoreNetworkEvents),
        o.end(n[pe.RESPONSE_END])
    }
    ,
    t.prototype._addFinalSpanAttributes = function(r, n) {
      var o = Eo(n.url);
      r.setAttribute(xc, n.status),
        n.statusText != null && r.setAttribute(Ei.HTTP_STATUS_TEXT, n.statusText),
        r.setAttribute(Ac, o.host),
        r.setAttribute(bc, o.protocol.replace(":", "")),
        typeof navigator != "undefined" && r.setAttribute(Cc, navigator.userAgent)
    }
    ,
    t.prototype._addHeaders = function(r, n) {
      if (!Bd(n, this.getConfig().propagateTraceHeaderCorsUrls)) {
        var o = {};
        Gt.inject(ve.active(), o),
          Object.keys(o).length > 0 && this._diag.debug("headers inject skipped due to CORS policy");
        return
      }
      if (r instanceof Request)
        Gt.inject(ve.active(), r.headers, {
          set: a(function(i, s, l) {
            return i.set(s, typeof l == "string" ? l : String(l))
          }, "set")
        });
      else if (r.headers instanceof Headers)
        Gt.inject(ve.active(), r.headers, {
          set: a(function(i, s, l) {
            return i.set(s, typeof l == "string" ? l : String(l))
          }, "set")
        });
      else if (r.headers instanceof Map)
        Gt.inject(ve.active(), r.headers, {
          set: a(function(i, s, l) {
            return i.set(s, typeof l == "string" ? l : String(l))
          }, "set")
        });
      else {
        var o = {};
        Gt.inject(ve.active(), o),
          r.headers = Object.assign({}, o, r.headers || {})
      }
    }
    ,
    t.prototype._clearResources = function() {
      this._tasksCount === 0 && this.getConfig().clearTimingResources && (performance.clearResourceTimings(),
        this._usedResources = new WeakSet)
    }
    ,
    t.prototype._createSpan = function(r, n) {
      var o;
      if (n === void 0 && (n = {}),
        An.isUrlIgnored(r, this.getConfig().ignoreUrls)) {
        this._diag.debug("ignoring span as url matches ignored url");
        return
      }
      var i = (n.method || "GET").toUpperCase()
        , s = "HTTP " + i;
      return this.tracer.startSpan(s, {
        kind: Lr.CLIENT,
        attributes: (o = {},
          o[Ei.COMPONENT] = this.moduleName,
          o[Sc] = i,
          o[yc] = r,
          o)
      })
    }
    ,
    t.prototype._findResourceAndAddNetworkEvents = function(r, n, o) {
      var i = n.entries;
      if (!i.length) {
        if (!performance.getEntriesByType)
          return;
        i = performance.getEntriesByType("resource")
      }
      var s = Fd(n.spanUrl, n.startTime, o, i, this._usedResources, "fetch");
      if (s.mainRequest) {
        var l = s.mainRequest;
        this._markResourceAsUsed(l);
        var d = s.corsPreFlightRequest;
        d && (this._addChildSpan(r, d),
          this._markResourceAsUsed(d)),
          Ws(r, l, this.getConfig().ignoreNetworkEvents)
      }
    }
    ,
    t.prototype._markResourceAsUsed = function(r) {
      this._usedResources.add(r)
    }
    ,
    t.prototype._endSpan = function(r, n, o) {
      var i = this
        , s = An.millisToHrTime(Date.now())
        , l = An.hrTime();
      this._addFinalSpanAttributes(r, o),
        setTimeout(function() {
          var d;
          (d = n.observer) === null || d === void 0 || d.disconnect(),
            i._findResourceAndAddNetworkEvents(r, n, l),
            i._tasksCount--,
            i._clearResources(),
            r.end(s)
        }, YU)
    }
    ,
    t.prototype._patchConstructor = function() {
      var r = this;
      return function(n) {
        var o = r;
        return a(function() {
          for (var s = [], l = 0; l < arguments.length; l++)
            s[l] = arguments[l];
          var d = this
            , u = Eo(s[0] instanceof Request ? s[0].url : String(s[0])).href
            , f = s[0] instanceof Request ? s[0] : s[1] || {}
            , p = o._createSpan(u, f);
          if (!p)
            return n.apply(this, s);
          var _ = o._prepareSpanData(u);
          o.getConfig().measureRequestSize && a2.apply(void 0, GU([], HU(s), !1)).then(function(x) {
            x && p.setAttribute(Rc, x)
          }).catch(function(x) {
            o._diag.warn("getFetchBodyLength", x)
          });
          function S(x, A) {
            o._applyAttributesAfterFetch(x, f, A),
              o._endSpan(x, _, {
                status: A.status || 0,
                statusText: A.message,
                url: u
              })
          }
          a(S, "endSpanOnError");
          function g(x, A) {
            o._applyAttributesAfterFetch(x, f, A),
              A.status >= 200 && A.status < 400 ? o._endSpan(x, _, A) : o._endSpan(x, _, {
                status: A.status,
                statusText: A.statusText,
                url: u
              })
          }
          a(g, "endSpanOnSuccess");
          function T(x, A, P) {
            try {
              var L = P.clone()
                , D = P.clone()
                , K = L.body;
              if (K) {
                var I = K.getReader()
                  , z = a(function() {
                    I.read().then(function(ue) {
                      var Ee = ue.done;
                      Ee ? g(x, D) : z()
                    }, function(ue) {
                      S(x, ue)
                    })
                  }, "read_1");
                z()
              } else
                g(x, P)
            } finally {
              A(P)
            }
          }
          a(T, "onSuccess");
          function b(x, A, P) {
            try {
              S(x, P)
            } finally {
              A(P)
            }
          }
          return a(b, "onError"),
            new Promise(function(x, A) {
              return ve.with(Pe.setSpan(ve.active(), p), function() {
                return o._addHeaders(f, u),
                  o._tasksCount++,
                  n.apply(d, f instanceof Request ? [f] : [u, f]).then(T.bind(d, p, x), b.bind(d, p, A))
              })
            }
            )
        }, "patchConstructor")
      }
    }
    ,
    t.prototype._applyAttributesAfterFetch = function(r, n, o) {
      var i = this
        , s = this.getConfig().applyCustomAttributesOnSpan;
      s && jd(function() {
        return s(r, n, o)
      }, function(l) {
        l && i._diag.error("applyCustomAttributesOnSpan", l)
      }, !0)
    }
    ,
    t.prototype._prepareSpanData = function(r) {
      var n = An.hrTime()
        , o = [];
      if (typeof PerformanceObserver != "function")
        return {
          entries: o,
          startTime: n,
          spanUrl: r
        };
      var i = new PerformanceObserver(function(s) {
        var l = s.getEntries();
        l.forEach(function(d) {
          d.initiatorType === "fetch" && d.name === r && o.push(d)
        })
      }
      );
      return i.observe({
        entryTypes: ["resource"]
      }),
      {
        entries: o,
        observer: i,
        startTime: n,
        spanUrl: r
      }
    }
    ,
    t.prototype.enable = function() {
      if (s2) {
        this._diag.warn("this instrumentation is intended for web usage only, it does not instrument Node.js's fetch()");
        return
      }
      zd(fetch) && (this._unwrap(Zs._globalThis, "fetch"),
        this._diag.debug("removing previous patch for constructor")),
        this._wrap(Zs._globalThis, "fetch", this._patchConstructor())
    }
    ,
    t.prototype.disable = function() {
      s2 || (this._unwrap(Zs._globalThis, "fetch"),
        this._usedResources = new WeakSet)
    }
    ,
    t
}(qs);
var g2 = U(h2(), 1);
var of = class of extends Dd {
  constructor({ serviceName: t, env: r, useXhr: n, dev: o, autoInstrumentations: i, samplingRatio: s, otlpBaseURL: l }) {
    super({
      resource: new at({
        [co]: t,
        [Bs]: r
      }),
      sampler: new po(s)
    });
    let u = {
      url: (typeof l == "string" ? l : yn[r] || r) + Ib
    };
    n && (u.headers = {});
    let f = new Lb(u);
    if (this.addSpanProcessor(new ho(f, {
      scheduledDelayMillis: 1e3
    })),
      o && this.addSpanProcessor(new $d(new Ld)),
      this.register({
        propagator: g2.shopifyCompositeTextMapPropagator
      }),
      i.includes("fetch")) {
      let p = Object.values(yn);
      new qd({
        ignoreUrls: p,
        propagateTraceHeaderCorsUrls: [new RegExp(".*")]
      }).setTracerProvider(this)
    }
  }
}
  ;
a(of, "DefaultTracerProvider");
var eu = of;
c();
c();
c();
c();
var iF = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , tu = function(e) {
    iF(t, e);
    function t(r) {
      return r === void 0 && (r = {}),
        e.call(this, Sn(r, $s, "v1/logs", {
          "Content-Type": "application/json"
        })) || this
    }
    return a(t, "OTLPLogExporter"),
      t
  }(Tn);
c();
c();
G();
var ru = U(se());
c();
G();
c();
G();
G();
var vo = U(se());
var aF = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , sF = function(e, t) {
    var r = typeof Symbol == "function" && e[Symbol.iterator];
    if (!r)
      return e;
    var n = r.call(e), o, i = [], s;
    try {
      for (; (t === void 0 || t-- > 0) && !(o = n.next()).done;)
        i.push(o.value)
    } catch (l) {
      s = {
        error: l
      }
    } finally {
      try {
        o && !o.done && (r = n.return) && r.call(n)
      } finally {
        if (s)
          throw s.error
      }
    }
    return i
  }
  , E2 = function() {
    function e(t, r, n) {
      this.attributes = {},
        this.totalAttributesCount = 0,
        this._isReadonly = !1;
      var o = n.timestamp
        , i = n.observedTimestamp
        , s = n.severityNumber
        , l = n.severityText
        , d = n.body
        , u = n.attributes
        , f = u === void 0 ? {} : u
        , p = n.context
        , _ = Date.now();
      if (this.hrTime = (0,
        vo.timeInputToHrTime)(o != null ? o : _),
        this.hrTimeObserved = (0,
          vo.timeInputToHrTime)(i != null ? i : _),
        p) {
        var S = Pe.getSpanContext(p);
        S && tr(S) && (this.spanContext = S)
      }
      this.severityNumber = s,
        this.severityText = l,
        this.body = d,
        this.resource = t.resource,
        this.instrumentationScope = r,
        this._logRecordLimits = t.logRecordLimits,
        this.setAttributes(f)
    }
    return a(e, "LogRecord"),
      Object.defineProperty(e.prototype, "severityText", {
        get: a(function() {
          return this._severityText
        }, "get"),
        set: a(function(t) {
          this._isLogRecordReadonly() || (this._severityText = t)
        }, "set"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "severityNumber", {
        get: a(function() {
          return this._severityNumber
        }, "get"),
        set: a(function(t) {
          this._isLogRecordReadonly() || (this._severityNumber = t)
        }, "set"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "body", {
        get: a(function() {
          return this._body
        }, "get"),
        set: a(function(t) {
          this._isLogRecordReadonly() || (this._body = t)
        }, "set"),
        enumerable: !1,
        configurable: !0
      }),
      Object.defineProperty(e.prototype, "droppedAttributesCount", {
        get: a(function() {
          return this.totalAttributesCount - Object.keys(this.attributes).length
        }, "get"),
        enumerable: !1,
        configurable: !0
      }),
      e.prototype.setAttribute = function(t, r) {
        return this._isLogRecordReadonly() ? this : r === null ? this : t.length === 0 ? (C.warn("Invalid attribute key: " + t),
          this) : !(0,
            vo.isAttributeValue)(r) && !(typeof r == "object" && !Array.isArray(r) && Object.keys(r).length > 0) ? (C.warn("Invalid attribute value set for key: " + t),
              this) : (this.totalAttributesCount += 1,
                Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, t) ? (this.droppedAttributesCount === 1 && C.warn("Dropping extra attributes."),
                  this) : ((0,
                    vo.isAttributeValue)(r) ? this.attributes[t] = this._truncateToSize(r) : this.attributes[t] = r,
                    this))
      }
      ,
      e.prototype.setAttributes = function(t) {
        var r, n;
        try {
          for (var o = aF(Object.entries(t)), i = o.next(); !i.done; i = o.next()) {
            var s = sF(i.value, 2)
              , l = s[0]
              , d = s[1];
            this.setAttribute(l, d)
          }
        } catch (u) {
          r = {
            error: u
          }
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o)
          } finally {
            if (r)
              throw r.error
          }
        }
        return this
      }
      ,
      e.prototype.setBody = function(t) {
        return this.body = t,
          this
      }
      ,
      e.prototype.setSeverityNumber = function(t) {
        return this.severityNumber = t,
          this
      }
      ,
      e.prototype.setSeverityText = function(t) {
        return this.severityText = t,
          this
      }
      ,
      e.prototype._makeReadonly = function() {
        this._isReadonly = !0
      }
      ,
      e.prototype._truncateToSize = function(t) {
        var r = this
          , n = this._logRecordLimits.attributeValueLengthLimit;
        return n <= 0 ? (C.warn("Attribute value limit must be positive, got " + n),
          t) : typeof t == "string" ? this._truncateToLimitUtil(t, n) : Array.isArray(t) ? t.map(function(o) {
            return typeof o == "string" ? r._truncateToLimitUtil(o, n) : o
          }) : t
      }
      ,
      e.prototype._truncateToLimitUtil = function(t, r) {
        return t.length <= r ? t : t.substring(0, r)
      }
      ,
      e.prototype._isLogRecordReadonly = function() {
        return this._isReadonly && C.warn("Can not execute the operation on emitted log record"),
          this._isReadonly
      }
      ,
      e
  }();
var af = function() {
  return af = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
    }
    return e
  }
    ,
    af.apply(this, arguments)
}
  , T2 = function() {
    function e(t, r) {
      this.instrumentationScope = t,
        this._sharedState = r
    }
    return a(e, "Logger"),
      e.prototype.emit = function(t) {
        var r = t.context || ve.active()
          , n = new E2(this._sharedState, this.instrumentationScope, af({
            context: r
          }, t));
        this._sharedState.activeProcessor.onEmit(n, r),
          n._makeReadonly()
      }
      ,
      e
  }();
c();
var Ar = U(se());
function v2() {
  return {
    forceFlushTimeoutMillis: 3e4,
    logRecordLimits: {
      attributeValueLengthLimit: (0,
        Ar.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,
      attributeCountLimit: (0,
        Ar.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT
    },
    includeTraceContext: !0,
    mergeResourceWithDefaults: !0
  }
}
a(v2, "loadDefaultConfig");
function S2(e) {
  var t, r, n, o, i, s, l = (0,
    Ar.getEnvWithoutDefaults)();
  return {
    attributeCountLimit: (n = (r = (t = e.attributeCountLimit) !== null && t !== void 0 ? t : l.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT) !== null && r !== void 0 ? r : l.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && n !== void 0 ? n : Ar.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
    attributeValueLengthLimit: (s = (i = (o = e.attributeValueLengthLimit) !== null && o !== void 0 ? o : l.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && i !== void 0 ? i : l.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && s !== void 0 ? s : Ar.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
  }
}
a(S2, "reconfigureLimits");
c();
var b2 = U(se());
var y2 = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , A2 = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , x2 = function() {
    function e(t, r) {
      this.processors = t,
        this.forceFlushTimeoutMillis = r
    }
    return a(e, "MultiLogRecordProcessor"),
      e.prototype.forceFlush = function() {
        return y2(this, void 0, void 0, function() {
          var t;
          return A2(this, function(r) {
            switch (r.label) {
              case 0:
                return t = this.forceFlushTimeoutMillis,
                  [4, Promise.all(this.processors.map(function(n) {
                    return (0,
                      b2.callWithTimeout)(n.forceFlush(), t)
                  }))];
              case 1:
                return r.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e.prototype.onEmit = function(t, r) {
        this.processors.forEach(function(n) {
          return n.onEmit(t, r)
        })
      }
      ,
      e.prototype.shutdown = function() {
        return y2(this, void 0, void 0, function() {
          return A2(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all(this.processors.map(function(r) {
                  return r.shutdown()
                }))];
              case 1:
                return t.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e
  }();
c();
c();
var C2 = function() {
  function e() { }
  return a(e, "NoopLogRecordProcessor"),
    e.prototype.forceFlush = function() {
      return Promise.resolve()
    }
    ,
    e.prototype.onEmit = function(t, r) { }
    ,
    e.prototype.shutdown = function() {
      return Promise.resolve()
    }
    ,
    e
}();
var R2 = function() {
  function e(t, r, n) {
    this.resource = t,
      this.forceFlushTimeoutMillis = r,
      this.logRecordLimits = n,
      this.loggers = new Map,
      this.registeredLogRecordProcessors = [],
      this.activeProcessor = new C2
  }
  return a(e, "LoggerProviderSharedState"),
    e
}();
var uF = "unknown";
function lF(e, t) {
  var r = t != null ? t : at.empty();
  return e ? at.default().merge(r) : r
}
a(lF, "prepareResource");
var sf = function() {
  function e(t) {
    t === void 0 && (t = {});
    var r = (0,
      ru.merge)({}, v2(), t)
      , n = lF(r.mergeResourceWithDefaults, t.resource);
    this._sharedState = new R2(n, r.forceFlushTimeoutMillis, S2(r.logRecordLimits)),
      this._shutdownOnce = new ru.BindOnceFuture(this._shutdown, this)
  }
  return a(e, "LoggerProvider"),
    e.prototype.getLogger = function(t, r, n) {
      if (this._shutdownOnce.isCalled)
        return C.warn("A shutdown LoggerProvider cannot provide a Logger"),
          mi;
      t || C.warn("Logger requested without instrumentation scope name.");
      var o = t || uF
        , i = o + "@" + (r || "") + ":" + ((n == null ? void 0 : n.schemaUrl) || "");
      return this._sharedState.loggers.has(i) || this._sharedState.loggers.set(i, new T2({
        name: o,
        version: r,
        schemaUrl: n == null ? void 0 : n.schemaUrl
      }, this._sharedState)),
        this._sharedState.loggers.get(i)
    }
    ,
    e.prototype.addLogRecordProcessor = function(t) {
      this._sharedState.registeredLogRecordProcessors.length === 0 && this._sharedState.activeProcessor.shutdown().catch(function(r) {
        return C.error("Error while trying to shutdown current log record processor", r)
      }),
        this._sharedState.registeredLogRecordProcessors.push(t),
        this._sharedState.activeProcessor = new x2(this._sharedState.registeredLogRecordProcessors, this._sharedState.forceFlushTimeoutMillis)
    }
    ,
    e.prototype.forceFlush = function() {
      return this._shutdownOnce.isCalled ? (C.warn("invalid attempt to force flush after LoggerProvider shutdown"),
        this._shutdownOnce.promise) : this._sharedState.activeProcessor.forceFlush()
    }
    ,
    e.prototype.shutdown = function() {
      return this._shutdownOnce.isCalled ? (C.warn("shutdown may only be called once per LoggerProvider"),
        this._shutdownOnce.promise) : this._shutdownOnce.call()
    }
    ,
    e.prototype._shutdown = function() {
      return this._sharedState.activeProcessor.shutdown()
    }
    ,
    e
}();
c();
var O2 = U(se())
  , P2 = U(se());
var cF = function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator
    , r = t && e[t]
    , n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return {
      next: a(function() {
        return e && n >= e.length && (e = void 0),
        {
          value: e && e[n++],
          done: !e
        }
      }, "next")
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
  , uf = function() {
    function e() { }
    return a(e, "ConsoleLogRecordExporter"),
      e.prototype.export = function(t, r) {
        this._sendLogRecords(t, r)
      }
      ,
      e.prototype.shutdown = function() {
        return Promise.resolve()
      }
      ,
      e.prototype._exportInfo = function(t) {
        var r, n, o;
        return {
          resource: {
            attributes: t.resource.attributes
          },
          instrumentationScope: t.instrumentationScope,
          timestamp: (0,
            O2.hrTimeToMicroseconds)(t.hrTime),
          traceId: (r = t.spanContext) === null || r === void 0 ? void 0 : r.traceId,
          spanId: (n = t.spanContext) === null || n === void 0 ? void 0 : n.spanId,
          traceFlags: (o = t.spanContext) === null || o === void 0 ? void 0 : o.traceFlags,
          severityText: t.severityText,
          severityNumber: t.severityNumber,
          body: t.body,
          attributes: t.attributes
        }
      }
      ,
      e.prototype._sendLogRecords = function(t, r) {
        var n, o;
        try {
          for (var i = cF(t), s = i.next(); !s.done; s = i.next()) {
            var l = s.value;
            console.dir(this._exportInfo(l), {
              depth: 3
            })
          }
        } catch (d) {
          n = {
            error: d
          }
        } finally {
          try {
            s && !s.done && (o = i.return) && o.call(i)
          } finally {
            if (n)
              throw n.error
          }
        }
        r == null || r({
          code: P2.ExportResultCode.SUCCESS
        })
      }
      ,
      e
  }();
c();
var ar = U(se());
var dF = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , fF = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , lf = function() {
    function e(t) {
      this._exporter = t,
        this._shutdownOnce = new ar.BindOnceFuture(this._shutdown, this),
        this._unresolvedExports = new Set
    }
    return a(e, "SimpleLogRecordProcessor"),
      e.prototype.onEmit = function(t) {
        var r = this, n, o;
        if (!this._shutdownOnce.isCalled) {
          var i = a(function() {
            return ar.internal._export(r._exporter, [t]).then(function(l) {
              var d;
              l.code !== ar.ExportResultCode.SUCCESS && (0,
                ar.globalErrorHandler)((d = l.error) !== null && d !== void 0 ? d : new Error("SimpleLogRecordProcessor: log record export failed (status " + l + ")"))
            }).catch(ar.globalErrorHandler)
          }, "doExport");
          if (t.resource.asyncAttributesPending) {
            var s = (o = (n = t.resource).waitForAsyncAttributes) === null || o === void 0 ? void 0 : o.call(n).then(function() {
              return r._unresolvedExports.delete(s),
                i()
            }, ar.globalErrorHandler);
            s != null && this._unresolvedExports.add(s)
          } else
            i()
        }
      }
      ,
      e.prototype.forceFlush = function() {
        return dF(this, void 0, void 0, function() {
          return fF(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, Promise.all(Array.from(this._unresolvedExports))];
              case 1:
                return t.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e.prototype.shutdown = function() {
        return this._shutdownOnce.call()
      }
      ,
      e.prototype._shutdown = function() {
        return this._exporter.shutdown()
      }
      ,
      e
  }();
c();
c();
c();
G();
var Qe = U(se());
var pF = function(e, t, r, n) {
  function o(i) {
    return i instanceof r ? i : new r(function(s) {
      s(i)
    }
    )
  }
  return a(o, "adopt"),
    new (r || (r = Promise))(function(i, s) {
      function l(f) {
        try {
          u(n.next(f))
        } catch (p) {
          s(p)
        }
      }
      a(l, "fulfilled");
      function d(f) {
        try {
          u(n.throw(f))
        } catch (p) {
          s(p)
        }
      }
      a(d, "rejected");
      function u(f) {
        f.done ? i(f.value) : o(f.value).then(l, d)
      }
      a(u, "step"),
        u((n = n.apply(e, t || [])).next())
    }
    )
}
  , mF = function(e, t) {
    var r = {
      label: 0,
      sent: a(function() {
        if (i[0] & 1)
          throw i[1];
        return i[1]
      }, "sent"),
      trys: [],
      ops: []
    }, n, o, i, s;
    return s = {
      next: l(0),
      throw: l(1),
      return: l(2)
    },
      typeof Symbol == "function" && (s[Symbol.iterator] = function() {
        return this
      }
      ),
      s;
    function l(u) {
      return function(f) {
        return d([u, f])
      }
    }
    function d(u) {
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; r;)
        try {
          if (n = 1,
            o && (i = u[0] & 2 ? o.return : u[0] ? o.throw || ((i = o.return) && i.call(o),
              0) : o.next) && !(i = i.call(o, u[1])).done)
            return i;
          switch (o = 0,
          i && (u = [u[0] & 2, i.value]),
          u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++,
              {
                value: u[1],
                done: !1
              };
            case 5:
              r.label++,
                o = u[1],
                u = [0];
              continue;
            case 7:
              u = r.ops.pop(),
                r.trys.pop();
              continue;
            default:
              if (i = r.trys,
                !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
                r = 0;
                continue
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                r.label = u[1];
                break
              }
              if (u[0] === 6 && r.label < i[1]) {
                r.label = i[1],
                  i = u;
                break
              }
              if (i && r.label < i[2]) {
                r.label = i[2],
                  r.ops.push(u);
                break
              }
              i[2] && r.ops.pop(),
                r.trys.pop();
              continue
          }
          u = t.call(e, r)
        } catch (f) {
          u = [6, f],
            o = 0
        } finally {
          n = i = 0
        }
      if (u[0] & 5)
        throw u[1];
      return {
        value: u[0] ? u[1] : void 0,
        done: !0
      }
    }
  }
  , N2 = function() {
    function e(t, r) {
      var n, o, i, s;
      this._exporter = t,
        this._finishedLogRecords = [];
      var l = (0,
        Qe.getEnv)();
      this._maxExportBatchSize = (n = r == null ? void 0 : r.maxExportBatchSize) !== null && n !== void 0 ? n : l.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE,
        this._maxQueueSize = (o = r == null ? void 0 : r.maxQueueSize) !== null && o !== void 0 ? o : l.OTEL_BLRP_MAX_QUEUE_SIZE,
        this._scheduledDelayMillis = (i = r == null ? void 0 : r.scheduledDelayMillis) !== null && i !== void 0 ? i : l.OTEL_BLRP_SCHEDULE_DELAY,
        this._exportTimeoutMillis = (s = r == null ? void 0 : r.exportTimeoutMillis) !== null && s !== void 0 ? s : l.OTEL_BLRP_EXPORT_TIMEOUT,
        this._shutdownOnce = new Qe.BindOnceFuture(this._shutdown, this),
        this._maxExportBatchSize > this._maxQueueSize && (C.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"),
          this._maxExportBatchSize = this._maxQueueSize)
    }
    return a(e, "BatchLogRecordProcessorBase"),
      e.prototype.onEmit = function(t) {
        this._shutdownOnce.isCalled || this._addToBuffer(t)
      }
      ,
      e.prototype.forceFlush = function() {
        return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll()
      }
      ,
      e.prototype.shutdown = function() {
        return this._shutdownOnce.call()
      }
      ,
      e.prototype._shutdown = function() {
        return pF(this, void 0, void 0, function() {
          return mF(this, function(t) {
            switch (t.label) {
              case 0:
                return this.onShutdown(),
                  [4, this._flushAll()];
              case 1:
                return t.sent(),
                  [4, this._exporter.shutdown()];
              case 2:
                return t.sent(),
                  [2]
            }
          })
        })
      }
      ,
      e.prototype._addToBuffer = function(t) {
        this._finishedLogRecords.length >= this._maxQueueSize || (this._finishedLogRecords.push(t),
          this._maybeStartTimer())
      }
      ,
      e.prototype._flushAll = function() {
        var t = this;
        return new Promise(function(r, n) {
          for (var o = [], i = Math.ceil(t._finishedLogRecords.length / t._maxExportBatchSize), s = 0; s < i; s++)
            o.push(t._flushOneBatch());
          Promise.all(o).then(function() {
            r()
          }).catch(n)
        }
        )
      }
      ,
      e.prototype._flushOneBatch = function() {
        var t = this;
        return this._clearTimer(),
          this._finishedLogRecords.length === 0 ? Promise.resolve() : new Promise(function(r, n) {
            (0,
              Qe.callWithTimeout)(t._export(t._finishedLogRecords.splice(0, t._maxExportBatchSize)), t._exportTimeoutMillis).then(function() {
                return r()
              }).catch(n)
          }
          )
      }
      ,
      e.prototype._maybeStartTimer = function() {
        var t = this;
        this._timer === void 0 && (this._timer = setTimeout(function() {
          t._flushOneBatch().then(function() {
            t._finishedLogRecords.length > 0 && (t._clearTimer(),
              t._maybeStartTimer())
          }).catch(function(r) {
            (0,
              Qe.globalErrorHandler)(r)
          })
        }, this._scheduledDelayMillis),
          (0,
            Qe.unrefTimer)(this._timer))
      }
      ,
      e.prototype._clearTimer = function() {
        this._timer !== void 0 && (clearTimeout(this._timer),
          this._timer = void 0)
      }
      ,
      e.prototype._export = function(t) {
        var r = this
          , n = a(function() {
            return Qe.internal._export(r._exporter, t).then(function(i) {
              var s;
              i.code !== Qe.ExportResultCode.SUCCESS && (0,
                Qe.globalErrorHandler)((s = i.error) !== null && s !== void 0 ? s : new Error("BatchLogRecordProcessor: log record export failed (status " + i + ")"))
            }).catch(Qe.globalErrorHandler)
          }, "doExport")
          , o = t.map(function(i) {
            return i.resource
          }).filter(function(i) {
            return i.asyncAttributesPending
          });
        return o.length === 0 ? n() : Promise.all(o.map(function(i) {
          var s;
          return (s = i.waitForAsyncAttributes) === null || s === void 0 ? void 0 : s.call(i)
        })).then(n, Qe.globalErrorHandler)
      }
      ,
      e
  }();
var _F = function() {
  var e = a(function(t, r) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, o) {
      n.__proto__ = o
    }
      || function(n, o) {
        for (var i in o)
          Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
      }
      ,
      e(t, r)
  }, "extendStatics");
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t
    }
    a(n, "__"),
      t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype,
        new n)
  }
}()
  , nu = function(e) {
    _F(t, e);
    function t(r, n) {
      var o = e.call(this, r, n) || this;
      return o._onInit(n),
        o
    }
    return a(t, "BatchLogRecordProcessor"),
      t.prototype.onShutdown = function() {
        typeof document != "undefined" && (this._visibilityChangeListener && document.removeEventListener("visibilitychange", this._visibilityChangeListener),
          this._pageHideListener && document.removeEventListener("pagehide", this._pageHideListener))
      }
      ,
      t.prototype._onInit = function(r) {
        var n = this;
        (r == null ? void 0 : r.disableAutoFlushOnDocumentHide) === !0 || typeof document == "undefined" || (this._visibilityChangeListener = function() {
          document.visibilityState === "hidden" && n.forceFlush()
        }
          ,
          this._pageHideListener = function() {
            n.forceFlush()
          }
          ,
          document.addEventListener("visibilitychange", this._visibilityChangeListener),
          document.addEventListener("pagehide", this._pageHideListener))
      }
      ,
      t
  }(N2);
var cf = class cf extends sf {
  constructor({ serviceName: t, env: r, useXhr: n, dev: o, otlpBaseURL: i }) {
    super({
      resource: new at({
        [co]: t,
        [Bs]: r
      })
    });
    let l = {
      url: (typeof i == "string" ? i : yn[r] || r) + Mb
    };
    n && (l.headers = {});
    let d = new tu(l);
    this.addLogRecordProcessor(new nu(d, {
      scheduledDelayMillis: 1e3
    })),
      o && this.addLogRecordProcessor(new lf(new uf))
  }
}
  ;
a(cf, "DefaultLoggerProvider");
var ou = cf;
c();
c();
var sr = function(e) {
  return e.Histogram = "Histogram",
    e.Counter = "Counter",
    e.UpDownCounter = "UpDownCounter",
    e
}({});
c();
G();
var hF = new RegExp("[^a-zA-Z_][^a-zA-Z0-9_]*");
function w2(e) {
  return hF.test(e) ? (C.warn(`Metric name ${e} contains invalid characters and will be dropped.
    Service Names and metric names must conform to the following regex %c[a-zA-Z_][a-zA-Z0-9_]*`, "color:red"),
    !1) : !0
}
a(w2, "isValidMetricName");
var gF = "opentelemetry-js-shopify-web"
  , df = class df {
    constructor({ serviceName: t, prefixMetric: r = !1, metrics: n = {}, onRecord: o, meterProvider: i, loggerProvider: s, tracerProvider: l }) {
      if (this.serviceName = void 0,
        this.prefixMetric = void 0,
        this.meterProvider = void 0,
        this.loggerProvider = void 0,
        this.tracerProvider = void 0,
        this.metrics = new Map,
        this.recordListeners = new Set,
        !t)
        throw new Error("Service name is required.");
      if (this.serviceName = t,
        this.prefixMetric = r,
        o && this.addOnRecord(o),
        !i)
        throw new Error("MeterProvider is required.");
      this.meterProvider = i,
        this.tracerProvider = l,
        this.loggerProvider = s,
        this.register(n)
    }
    getMeterProvider() {
      return this.meterProvider
    }
    getTracerProvider() {
      return this.tracerProvider
    }
    getLoggerProvider() {
      return this.loggerProvider
    }
    addView(t) {
      var r, n, o;
      (r = this.meterProvider._sharedState) === null || r === void 0 || (n = r.viewRegistry) === null || n === void 0 || (o = n.addView) === null || o === void 0 || o.call(n, new yd(t))
    }
    record(t, r, n) {
      let o = this.metrics.get(t);
      if (!o)
        throw new Error(`Service ${this.serviceName} has no metrics registered for name: ${t}. Can't record value for unknown metric.`);
      o(r, n)
    }
    registerMetric(t, { type: r, ...n }) {
      if (this.metrics.has(t))
        return;
      let o = this.meterProvider.getMeter(gF)
        , i = this.prefixMetric ? `${this.serviceName}_${t}` : t;
      if (!w2(i))
        return;
      let s = a(() => {
        switch (r) {
          case sr.Counter:
            return o.createCounter(i, n);
          case sr.UpDownCounter:
            return o.createUpDownCounter(i, n);
          case sr.Histogram:
            {
              let l;
              return "boundaries" in n && n.boundaries ? l = new Ss(n.boundaries, !0) : l = new ys,
                this.addView({
                  instrumentName: i,
                  aggregation: l
                }),
                o.createHistogram(i, n)
            }
        }
      }
        , "createInstrument");
      this.metrics.set(t, (l, d) => {
        let u = s()
          , f = a((p, _) => {
            let [S, g] = this.notifyRecordListeners(t, p, {
              ..._
            });
            "record" in u ? u.record(S, g) : u.add(S, g),
              this.meterProvider.forceFlush({})
          }
            , "record");
        f(l, d),
          this.metrics.set(t, f)
      }
      )
    }
    register(t) {
      Object.entries(t).forEach(([r, n]) => {
        this.registerMetric(r, n)
      }
      )
    }
    addOnRecord(t) {
      return this.recordListeners.add(t),
        () => {
          this.recordListeners.delete(t)
        }
    }
    removeOnRecord(t) {
      this.recordListeners.delete(t)
    }
    shutdown() {
      return this.metrics.clear(),
        this.recordListeners.clear(),
        this.meterProvider.shutdown().then(() => {
          this.tracerProvider && this.tracerProvider.shutdown(),
            this.loggerProvider && this.loggerProvider.shutdown()
        }
        )
    }
    notifyRecordListeners(t, r, n) {
      return Array.from(this.recordListeners).reduce((o, i) => i(t, ...o) || o, [r, n])
    }
  }
  ;
a(df, "BaseOtelService");
var iu = df;
var ff = class ff extends iu {
  constructor({ throttleLimit: t = 5e3, env: r = "local", serviceName: n, prefixMetric: o = !1, metrics: i = {}, onRecord: s, meterProvider: l, tracerProvider: d, loggerProvider: u, useXhr: f = !1, dev: p = !1, enableDefaultTracer: _ = !1, samplingRatio: S = .1, autoInstrumentations: g = [], enableDefaultLogger: T = !1, otlpBaseURL: b }) {
    C.setLogger(new _a, {
      logLevel: ["production", "staging"].includes(r) ? Le.ERROR : Le.INFO,
      suppressOverrideMessage: !0
    });
    let x = l != null ? l : new Vs({
      serviceName: n,
      env: r,
      throttleLimit: t,
      useXhr: f,
      dev: p,
      otlpBaseURL: b
    }), A;
    d ? A = d : _ && (A = new eu({
      serviceName: n,
      env: r,
      useXhr: f,
      dev: p,
      autoInstrumentations: g,
      samplingRatio: S,
      otlpBaseURL: b
    }));
    let P;
    u ? P = u : T && (P = new ou({
      serviceName: n,
      env: r,
      useXhr: f,
      dev: p,
      otlpBaseURL: b
    })),
      super({
        serviceName: n,
        meterProvider: x,
        tracerProvider: A,
        loggerProvider: P,
        prefixMetric: o,
        metrics: i,
        onRecord: s
      })
  }
  shutdown() {
    return C.disable(),
      super.shutdown()
  }
}
  ;
a(ff, "DefaultOtelService");
var vi = ff;
c();
var EF = {
  forms_api_calls: {
    type: sr.Histogram,
    valueType: Fe.INT
  },
  forms_api_call_errors: {
    type: sr.Counter,
    valueType: Fe.INT
  },
  forms_ux_interaction: {
    type: sr.Counter,
    valueType: Fe.INT
  },
  forms_error_boundary_hits: {
    type: sr.Counter,
    valueType: Fe.INT
  }
}
  , TF = {
    serviceName: "shopify-forms",
    throttleLimit: 1e3,
    env: "production",
    metrics: EF,
    useXhr: !0
  }
  , _f = class _f extends vi {
    constructor(t) {
      super(t)
    }
    record(t, r, ...n) {
      try {
        return super.record(t, r, ...n)
      } catch (o) {
        return !1
      }
    }
  }
  ;
a(_f, "MetricsService");
var pf = _f
  , ur = new pf(TF);
c();
Vo();
var br = U(Et());
c();
c();
var xn = (o => (o[o.Tease = 0] = "Tease",
  o[o.Form = 1] = "Form",
  o[o.Success = 2] = "Success",
  o[o.Error = 3] = "Error",
  o))(xn || {});
c();
var I2 = a(e => {
  switch (e) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 2;
    case 3:
      return 0
  }
}
  , "deriveNextStep")
  , M2 = a((e, t) => {
    var i, s;
    let r = e.form.layout
      , n = (i = e == null ? void 0 : e.teaser) == null ? void 0 : i.teaserDisplayOption
      , o = new ua(t).isFormMinimized;
    return n === "never" || (s = window.ShopifyForms) != null && s.triggerExitIntent && !o || r === "inline" ? 1 : n === "first" || n === "first_and_after_dismiss" ? 0 : n === "after_dismiss" ? o ? 0 : 1 : 0
  }
    , "deriveFirstStep");
c();
var vF = a(e => {
  let t = document.querySelector(`#app-embed-container-${e}`);
  t && (t.style.display = "none")
}
  , "hideAppEmbedElement")
  , au = vF;
var L2 = a((e, t) => {
  var o, i;
  let r = new ua(e.formId)
    , n = (i = (o = e.formDefinition) == null ? void 0 : o.teaser) == null ? void 0 : i.teaserDisplayOption;
  switch (t.type) {
    case "NEXT":
      return {
        ...e,
        formDefinition: {
          ...e.formDefinition
        },
        currentStep: I2(e.currentStep)
      };
    case "GO_TO":
      return {
        ...e,
        currentStep: t.payload
      };
    case "TRIGGER_EXIT_INTENT":
      return e.currentStep === 0 || r.isFormDismissed() ? e : {
        ...e,
        currentStep: 1
      };
    case "SET_SHOP_SDK_REQUEST_SHOW":
      return {
        ...e,
        shopSdkReadyToRequestShow: t.payload
      };
    case "SET_SHOP_AVAILABLE":
      return {
        ...e,
        shopAvailable: t.payload
      };
    case "SET_SHOP_SDK_USER_LOGGED_IN":
      return {
        ...e,
        shopUserLoggedIn: t.payload
      };
    case "SERVER_ERROR":
      return {
        ...e,
        currentStep: 3
      };
    case "SHOP_AUTH_STATUS":
      return {
        ...e,
        shopRequest: t.payload
      };
    case "DISMISS":
      return r.dismissFormForSession(),
        au(e.formId),
      {
        ...e,
        isFormDismissed: !0
      };
    case "DISMISS_AFTER_SUBMIT":
      return r.dismissFormAfterSubmit(),
        e;
    case "MINIMIZE":
      return n === "never" || n === "first" ? (r.dismissFormForSession(),
        au(e.formId),
      {
        ...e,
        isFormDismissed: !0
      }) : (r.minimizeFormForSession(),
      {
        ...e,
        currentStep: 0
      });
    case "CLOSE":
      return au(e.formId),
      {
        ...e,
        isFormDismissed: !0
      };
    default:
      return e
  }
}
  , "appStateReducer");
var $2 = {
  currentStep: 0,
  isFormDismissed: !1,
  shopSdkReadyToRequestShow: !1,
  shopSdkCompleted: null,
  shopSdkRestarted: !1,
  shopAvailable: !1,
  shopUserLoggedIn: !1,
  shopRequest: {
    loading: !1,
    success: null
  }
}
  , D2 = am({
    state: $2,
    dispatch: a(e => null, "dispatch")
  })
  , hf = a(({ children: e, formDefinition: t, formStyles: r, formId: n, shadowRoot: o, clientCountry: i = "" }) => {
    let s = (0,
      br.useMemo)(() => M2(t, n), [t, n])
      , [l, d] = (0,
        br.useReducer)(L2, {
          ...$2,
          currentStep: s,
          formId: n,
          formDefinition: t,
          formStyles: r,
          root: o,
          clientCountry: i
        })
      , u = (0,
        br.useMemo)(() => ({
          state: l,
          dispatch: d
        }), [l, d]);
    return (0,
      br.useEffect)(() => {
        document.addEventListener(`forms:exit-intent:${n}`, () => {
          d({
            type: "TRIGGER_EXIT_INTENT"
          })
        }
        )
      }
        , [d, n]),
      h(D2.Provider, {
        value: u
      }, e)
  }
    , "AppStateProvider")
  , xe = a(() => (0,
    br.useContext)(D2), "useAppState");
c();
var su = a(() => {
  let { state: { formDefinition: { form: { image: e } } } } = xe();
  return e != null && e.option && (e == null ? void 0 : e.option) !== "no_image" && (e == null ? void 0 : e.url) != null ? e : null
}
  , "useImage");
c();
var Uo = U(Et());
c();
var U2 = "ac931feeb0fad616fff6db6d7be0a6aa5087865331cc482900109677d163422e"
  , SF = `._appEmbed_3eyaa_1 {
  /* stylelint-disable-next-line declaration-no-important */
  rotate: unset !important;
}

@media screen and (max-width: 768px) {
  /* We don't want to reset position on bottom middle on mobile because it causes it to go off-screen */
  ._appEmbed_3eyaa_1:not([data-position='bottom-middle']) {
    /* stylelint-disable-next-line declaration-no-important */
    transform: unset !important;
  }

  /* On mobile the form needs to be 100% width in this case in order not to collapse on itself */
  ._appEmbed_3eyaa_1[data-position='bottom-middle'] {
    /* stylelint-disable-next-line declaration-no-important */
    width: 100% !important;
  }
}

@keyframes _slideInRight_3eyaa_1 {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    transform: translateX(-30px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes _slideInLeft_3eyaa_1 {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    transform: translateX(30px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes _fade_3eyaa_87 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

._container_3eyaa_70 {
  position: relative;
  z-index: 2;
  min-width: minmax(335px, 100%);
  animation-timing-function: ease;
  animation-duration: 0.8s;
}

/* breakpoint sm */
@media screen and (max-width: 490px) {
  ._container_3eyaa_70 {
    width: 100%;
    display: grid;
    justify-content: center;
  }
}

._fadeAnimation_3eyaa_87 {
  animation-timing-function: ease;
  animation-duration: 0.5s;
  animation-name: _fade_3eyaa_87;
}

[data-position='top-left'] > ._animationTrigger_3eyaa_93,
[data-position='bottom-left'] > ._animationTrigger_3eyaa_93,
[data-position='left-middle'] > ._animationTrigger_3eyaa_93 {
  animation-name: _slideInLeft_3eyaa_1;
}

[data-position='top-right'] > ._animationTrigger_3eyaa_93,
[data-position='bottom-right'] > ._animationTrigger_3eyaa_93,
[data-position='right-middle'] > ._animationTrigger_3eyaa_93 {
  animation-name: _slideInRight_3eyaa_1;
}

/* breakpoint sm used for height */
@media only screen and (max-height: 490px) {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .appEmbed[data-current-step='form'] {
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */

    /* Make app embed container scrollable */
    height: 100%;
    overflow-y: auto;
  }

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .appEmbed[data-current-step='form']::-webkit-scrollbar {
    /* Hide scrollbar */
    display: none; /* Safari and Chrome */
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(U2) || e.set(U2, SF.replace(/:root/g, ":host"))
  }
}
)();
var F2 = {
  appEmbed: "_appEmbed_3eyaa_1",
  container: "_container_3eyaa_70",
  fadeAnimation: "_fadeAnimation_3eyaa_87",
  fade: "_fade_3eyaa_87",
  animationTrigger: "_animationTrigger_3eyaa_93",
  slideInLeft: "_slideInLeft_3eyaa_1",
  slideInRight: "_slideInRight_3eyaa_1"
};
c();
var gf = U(Et());
c();
var B2 = "8d275703ba3c3f936dd072f88ae7a98a84ec187d47dfb6f17c8b6fbe207f5fb3"
  , yF = `._appEmbed_3eyaa_1 {
  /* stylelint-disable-next-line declaration-no-important */
  rotate: unset !important;
}

@media screen and (max-width: 768px) {
  /* We don't want to reset position on bottom middle on mobile because it causes it to go off-screen */
  ._appEmbed_3eyaa_1:not([data-position='bottom-middle']) {
    /* stylelint-disable-next-line declaration-no-important */
    transform: unset !important;
  }

  /* On mobile the form needs to be 100% width in this case in order not to collapse on itself */
  ._appEmbed_3eyaa_1[data-position='bottom-middle'] {
    /* stylelint-disable-next-line declaration-no-important */
    width: 100% !important;
  }
}

@keyframes _slideInRight_3eyaa_1 {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }

  60% {
    opacity: 1;
    transform: translateX(-30px);
  }

  80% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes _slideInLeft_3eyaa_1 {
  0% {
    opacity: 0;
    transform: translateX(-2000px);
  }

  60% {
    opacity: 1;
    transform: translateX(30px);
  }

  80% {
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes _fade_3eyaa_87 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

._container_3eyaa_70 {
  position: relative;
  z-index: 2;
  min-width: minmax(335px, 100%);
  animation-timing-function: ease;
  animation-duration: 0.8s;
}

/* breakpoint sm */
@media screen and (max-width: 490px) {
  ._container_3eyaa_70 {
    width: 100%;
    display: grid;
    justify-content: center;
  }
}

._fadeAnimation_3eyaa_87 {
  animation-timing-function: ease;
  animation-duration: 0.5s;
  animation-name: _fade_3eyaa_87;
}

[data-position='top-left'] > ._animationTrigger_3eyaa_93,
[data-position='bottom-left'] > ._animationTrigger_3eyaa_93,
[data-position='left-middle'] > ._animationTrigger_3eyaa_93 {
  animation-name: _slideInLeft_3eyaa_1;
}

[data-position='top-right'] > ._animationTrigger_3eyaa_93,
[data-position='bottom-right'] > ._animationTrigger_3eyaa_93,
[data-position='right-middle'] > ._animationTrigger_3eyaa_93 {
  animation-name: _slideInRight_3eyaa_1;
}

/* breakpoint sm used for height */
@media only screen and (max-height: 490px) {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .appEmbed[data-current-step='form'] {
    /* Hide scrollbar */
    scrollbar-width: none; /* Firefox */

    /* Make app embed container scrollable */
    height: 100%;
    overflow-y: auto;
  }

  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .appEmbed[data-current-step='form']::-webkit-scrollbar {
    /* Hide scrollbar */
    display: none; /* Safari and Chrome */
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(B2) || e.set(B2, yF.replace(/:root/g, ":host"))
  }
}
)();
var Si = {
  appEmbed: "_appEmbed_3eyaa_1",
  container: "_container_3eyaa_70",
  fadeAnimation: "_fadeAnimation_3eyaa_87",
  fade: "_fade_3eyaa_87",
  animationTrigger: "_animationTrigger_3eyaa_93",
  slideInLeft: "_slideInLeft_3eyaa_1",
  slideInRight: "_slideInRight_3eyaa_1"
};
var V2 = a(e => `${e}_HAS_ANIMATION_TRIGGERED`, "animationTriggerKey");
function k2(e) {
  let { state: { root: t, formId: r, formDefinition: { form: { layout: n } } } } = xe();
  (0,
    gf.useLayoutEffect)(() => {
      let o = t == null ? void 0 : t.getElementById("app-embed")
        , i = o == null ? void 0 : o.classList;
      !i || i != null && i.contains(Si.appEmbed) || i.add(Si.appEmbed)
    }
      , [t]),
    (0,
      gf.useLayoutEffect)(() => {
        let o = e == null ? void 0 : e.current;
        if (!o)
          return;
        let i = !!lm(V2(r), window.sessionStorage);
        if (!["inline", "overlay"].includes(n) && !i) {
          um(V2(r), !0, window.sessionStorage),
            o.classList.add(Si.animationTrigger);
          return
        }
        o.classList.add(Si.fadeAnimation)
      }
        , [n, e, r])
}
a(k2, "useAppAnimation");
c();
var Cf = U(Ge());
c();
c();
var st = a(e => Array.isArray(e) ? e.join(" ") : Object.entries(e).map(([t, r]) => typeof r == "function" ? r() ? t : "" : r ? t : "").filter(Boolean).join(" "), "classes");
c();
c();
var H2 = "bd450cbb784cfc87ab04df64f3202ded40d30de195d72bd73fdea429455984f3"
  , AF = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */

/* stylelint-disable at-rule-no-unknown */

._formCloseButton_1684x_4 {
  border: none;
  background: none;
  cursor: pointer;
}

._formCloseButton_1684x_4 > svg {
  fill: var(--button-close-color);
  fill-opacity: 0.65;
}

._formCloseButton_1684x_4._withBackground_1684x_15 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--button-close-background-color);
  border-radius: 50%;
  width: 28px;
  height: 28px;
}

._formCloseButton_1684x_4._withBackground_1684x_15 > svg {
  fill-opacity: 1;
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown */
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage ._formCloseButton_1684x_4._withBackground_1684x_15 {
    width: calc(28px / var(--preview-scale));
    height: calc(28px / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(H2) || e.set(H2, AF.replace(/:root/g, ":host"))
  }
}
)();
var Ef = {
  previewDesktop: "893px",
  formCloseButton: "_formCloseButton_1684x_4",
  withBackground: "_withBackground_1684x_15"
};
var bF = "Enter"
  , xF = a(({ onClick: e, filled: t = !1 }) => h("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Close modal",
    onClick: r => {
      r.stopPropagation(),
        e()
    }
    ,
    onKeyDown: r => {
      r.code === bF && (r.preventDefault(),
        e())
    }
    ,
    className: `${Ef.formCloseButton} ${t ? Ef.withBackground : ""}`,
    "data-testid": "btn-close"
  }, h("svg", {
    "aria-hidden": "true",
    focusable: "false",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.41401 6.00012L11.707 1.70721C12.098 1.31622 12.098 0.684236 11.707 0.293244C11.316 -0.097748 10.684 -0.097748 10.293 0.293244L6.00001 4.58615L1.70701 0.293244C1.31601 -0.097748 0.684006 -0.097748 0.293006 0.293244C-0.0979941 0.684236 -0.0979941 1.31622 0.293006 1.70721L4.58601 6.00012L0.293006 10.293C-0.0979941 10.684 -0.0979941 11.316 0.293006 11.707C0.488006 11.902 0.744006 12 1.00001 12C1.25601 12 1.51201 11.902 1.70701 11.707L6.00001 7.4141L10.293 11.707C10.488 11.902 10.744 12 11 12C11.256 12 11.512 11.902 11.707 11.707C12.098 11.316 12.098 10.684 11.707 10.293L7.41401 6.00012Z"
  }))), "FormCloseButton")
  , uu = xF;
c();
var G2 = "9e4d4cddcd8dfb9ccbcb60dd9baeb1f7755d89f0ca1e6c6d99f8b38ae783438d"
  , CF = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable selector-no-qualifying-type */
/* stylelint-disable at-rule-no-unknown */

button._teaserContainer_ou4pe_5 {
  all: unset;

  display: grid;
  grid-auto-flow: column;
  gap: 13px;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  width: fit-content;

  background-color: var(--container-background-color);
  box-shadow: var(--container-shadow);
  max-width: var(--container-max-w);
  border-radius: var(--container-border-radius);

  cursor: pointer;
}

._teaserContainer_ou4pe_5:focus {
  outline: var(--form-field-border);
}

._teaserHeading_ou4pe_29 {
  font: var(--forms-heading-font);
  font-size: calc(var(--heading-font-size) * 0.8);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0;
}

@media screen and (max-width: 490px) {
  button._teaserContainer_ou4pe_5 {
    margin: 0 var(--spacing-size);
    padding: 16px;
    gap: 8px;

    /* 92px - width of inbox widget, 48px - additional space to allow for margins */
    max-width: calc(100vw - 92px - 48px);
  }

  /* Override max width only for middle position in order to leave more space on the sides for other apps */
  /* stylelint-disable-next-line selector-max-type */
  div[data-position='bottom-middle'] button._teaserContainer_ou4pe_5 {
    /* 92px - width of inbox widget, 105px - additional space to fit other apps on the side on bottom-middle postion */
    max-width: calc(100vw - 92px - 105px);
  }

  ._teaserHeading_ou4pe_29 {
    line-height: 20px;
  }

  h3._teaserHeadingReduced_ou4pe_58 {
    font-size: calc(var(--heading-font-size) * 0.65);
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(G2) || e.set(G2, CF.replace(/:root/g, ":host"))
  }
}
)();
var lu = {
  sm: "490px",
  teaserContainer: "_teaserContainer_ou4pe_5",
  teaserHeading: "_teaserHeading_ou4pe_29",
  teaserHeadingReduced: "_teaserHeadingReduced_ou4pe_58"
};
var RF = a(({ onClick: e, message: t, onClose: r }) => h("button", {
  "aria-haspopup": "dialog",
  type: "button",
  "data-testid": "teaser-container",
  className: lu.teaserContainer,
  "aria-label": t,
  tabIndex: 0,
  onClick: e
}, h("h3", {
  "data-testid": "teaser-message",
  className: st({
    [lu.teaserHeading]: !0,
    [lu.teaserHeadingReduced]: t.length > 40
  })
}, t), h(uu, {
  onClick: r
})), "FormTeaser")
  , Y2 = RF;
c();
var j2 = "884820c316293fe289c240411a6da35b6d200dd5ee2e93eac25da7a2b26a1349"
  , OF = `/* stylelint-disable declaration-no-important */

._appEmbedRoot_1tvcr_3 {
  display: flex;
  pointer-events: none;
}

._appEmbedRoot_1tvcr_3 > div {
  pointer-events: auto;
  transform-origin: top left;
}

._appEmbedRootRotated_1tvcr_13 > div {
  rotate: -90deg;
  transform: translateX(-50%);
}

@media screen and (max-width: 490px) {
  ._appEmbedRootTeaser_1tvcr_19._appEmbedRightMiddle_1tvcr_19 > div,
  ._appEmbedRootTeaser_1tvcr_19._appEmbedBottomRight_1tvcr_20 > div,
  ._appEmbedRootTeaser_1tvcr_19._appEmbedRightMiddleRotated_1tvcr_21 > div,
  ._appEmbedRootTeaser_1tvcr_19._appEmbedBottomMiddle_1tvcr_22 > div {
    width: unset;
  }

  /* stylelint-disable-next-line selector-max-combinators, selector-max-type */
  ._appEmbedRootTeaser_1tvcr_19._appEmbedRightMiddleRotated_1tvcr_21 > div > button,
  ._appEmbedRootTeaser_1tvcr_19._appEmbedLeftMiddleRotated_1tvcr_28 > div > button {
    margin: var(--spacing-size) 0 !important;
  }
}

._appEmbedBottomLeft_1tvcr_33 {
  align-items: end;
  justify-content: start;
}

._appEmbedBottomRight_1tvcr_20 {
  align-items: end;
  justify-content: end;
}

._appEmbedBottomMiddle_1tvcr_22 {
  align-items: end;
  justify-content: center;
}

._appEmbedLeftMiddle_1tvcr_28 {
  align-items: center;
  justify-content: start;
}

._appEmbedLeftMiddleRotated_1tvcr_28 {
  align-items: center;
  justify-content: start;
}

._appEmbedRightMiddle_1tvcr_19 {
  align-items: center;
  justify-content: end;
}

._appEmbedRightMiddleRotated_1tvcr_21 {
  align-items: center;
  justify-content: end;
}

._appEmbedRightMiddleRotated_1tvcr_21._appEmbedRootRotated_1tvcr_13 > div {
  rotate: -90deg;
  transform: translate(50%, -100%);
  transform-origin: top right;
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(j2) || e.set(j2, OF.replace(/:root/g, ":host"))
  }
}
)();
var Cn = {
  appEmbedRoot: "_appEmbedRoot_1tvcr_3",
  appEmbedRootRotated: "_appEmbedRootRotated_1tvcr_13",
  appEmbedRootTeaser: "_appEmbedRootTeaser_1tvcr_19",
  appEmbedRightMiddle: "_appEmbedRightMiddle_1tvcr_19",
  appEmbedBottomRight: "_appEmbedBottomRight_1tvcr_20",
  appEmbedRightMiddleRotated: "_appEmbedRightMiddleRotated_1tvcr_21",
  appEmbedBottomMiddle: "_appEmbedBottomMiddle_1tvcr_22",
  appEmbedLeftMiddleRotated: "_appEmbedLeftMiddleRotated_1tvcr_28",
  appEmbedBottomLeft: "_appEmbedBottomLeft_1tvcr_33",
  appEmbedLeftMiddle: "_appEmbedLeftMiddle_1tvcr_28"
};
c();
var Rn = (l => (l.bottomLeft = "bottom-left",
  l.bottomRight = "bottom-right",
  l.bottomMiddle = "bottom-middle",
  l.leftMiddle = "left-middle",
  l.leftMiddleRotated = "left-middle-rotated",
  l.rightMiddle = "right-middle",
  l.rightMiddleRotated = "right-middle-rotated",
  l))(Rn || {})
  , PF = {
    "bottom-left": {
      left: "0",
      right: "unset",
      bottom: "0",
      top: "unset",
      transform: "unset",
      rotate: "unset"
    },
    "bottom-right": {
      left: "unset",
      right: "0",
      bottom: "0",
      top: "unset",
      transform: "unset",
      rotate: "unset"
    },
    "bottom-middle": {
      left: "50%",
      right: "unset",
      bottom: "0",
      top: "unset",
      transform: "translateX(-50%)",
      rotate: "unset"
    },
    "left-middle": {
      left: "0",
      right: "unset",
      bottom: "unset",
      top: "50%",
      transform: "translateY(-50%)",
      rotate: "unset"
    },
    "left-middle-rotated": {
      left: "0",
      right: "unset",
      bottom: "unset",
      top: "50%",
      transform: "translateY(-50%)",
      rotate: "-90deg"
    },
    "right-middle": {
      left: "unset",
      right: "0",
      bottom: "unset",
      top: "50%",
      transform: "translateY(-50%)",
      rotate: "unset"
    },
    "right-middle-rotated": {
      left: "unset",
      right: "0",
      bottom: "unset",
      top: "50%",
      transform: "translateY(-50%)",
      rotate: "-90deg"
    }
  };
function So(e) {
  var n;
  let t = {
    bottom: e.bottom,
    left: e.left,
    right: e.right,
    top: e.top,
    transform: e.transform,
    rotate: e.rotate || "unset"
  }
    , r = ((n = Object.entries(PF).find(([, o]) => !Object.entries(o).find(([i, s]) => t[i] !== s))) == null ? void 0 : n[0]) || "";
  return (Rn == null ? void 0 : Rn[NF(r)]) || "bottom-left"
}
a(So, "getPositionNameByPositionStyle");
var NF = a(e => e.toLowerCase().replace(/([-][a-z])/g, t => t.toUpperCase().replace("-", "")), "dashCaseToCamelCase");
c();
var zr = U(Et());
c();
c();
c();
c();
var wF = Math.pow(10, 8) * 24 * 60 * 60 * 1e3
  , fde = -wF;
var IF = 3600;
var z2 = IF * 24
  , pde = z2 * 7
  , MF = z2 * 365.2425
  , LF = MF / 12
  , mde = LF * 3
  , Tf = Symbol.for("constructDateFrom");
function W2(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Tf in e ? e[Tf](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
}
a(W2, "constructFrom");
c();
function K2(e, t) {
  return W2(t || e, e)
}
a(K2, "toDate");
c();
function xr(e, t) {
  let r = e < 0 ? "-" : ""
    , n = Math.abs(e).toString().padStart(t, "0");
  return r + n
}
a(xr, "addLeadingZeros");
c();
function X2(e, t) {
  var u, f;
  let r = K2(e, t == null ? void 0 : t.in);
  if (isNaN(+r))
    throw new RangeError("Invalid time value");
  let n = (u = t == null ? void 0 : t.format) != null ? u : "extended"
    , o = (f = t == null ? void 0 : t.representation) != null ? f : "complete"
    , i = ""
    , s = ""
    , l = n === "extended" ? "-" : ""
    , d = n === "extended" ? ":" : "";
  if (o !== "time") {
    let p = xr(r.getDate(), 2)
      , _ = xr(r.getMonth() + 1, 2);
    i = `${xr(r.getFullYear(), 4)}${l}${_}${l}${p}`
  }
  if (o !== "date") {
    let p = r.getTimezoneOffset();
    if (p !== 0) {
      let x = Math.abs(p)
        , A = xr(Math.trunc(x / 60), 2)
        , P = xr(x % 60, 2);
      s = `${p < 0 ? "+" : "-"}${A}:${P}`
    } else
      s = "Z";
    let _ = xr(r.getHours(), 2)
      , S = xr(r.getMinutes(), 2)
      , g = xr(r.getSeconds(), 2)
      , T = i === "" ? "" : "T"
      , b = [_, S, g].join(d);
    i = `${i}${T}${b}${s}`
  }
  return i
}
a(X2, "formatISO");
function cu(e) {
  switch (e) {
    case 0:
      return "AppTease";
    case 1:
      return "AppForm";
    case 2:
      return "AppSuccess";
    case 3:
      return "AppError";
    default:
      return "unknown"
  }
}
a(cu, "convertStepToEventObject");
var q2 = a(() => {
  var e, t;
  return !!window.Shopify && !!((e = window.Shopify) != null && e.shop) && !!window.ShopifyAnalytics && !!((t = window.ShopifyAnalytics) != null && t.meta)
}
  , "canTrack")
  , vf = a((e, t) => { }
    , "logIfEnabled");
function Sf(e, t, r, n) {
  var i, s, l, d;
  let o = new Date(Date.now());
  return {
    form_id: e,
    shop_url: (i = window.Shopify) == null ? void 0 : i.shop,
    page_type: fm(),
    product_id: (d = (l = (s = window.ShopifyAnalytics) == null ? void 0 : s.meta) == null ? void 0 : l.product) == null ? void 0 : d.id,
    form_type: t,
    page_url: window.location.href,
    happened_at: X2(o),
    happened_at_utc: o.toISOString(),
    image_position: r.option,
    has_image: !(r.option === "no_image" || !r.option),
    event_object: cu(n)
  }
}
a(Sf, "getDefaultEventData");
c();
var yf = "monorail://shopify_forms_storefront_customer_events/2.3";
var Af = new Set;
function Z2(e, t, r) {
  return `${e}-${t}-${r}`
}
a(Z2, "generateEventIdentifier");
var On = a(() => {
  let { state: { formId: e, formDefinition: { form: t }, currentStep: r } } = xe()
    , n = (0,
      zr.useCallback)((s, l) => {
        if (!q2())
          return vf("not tracking due to lack of Shopify.shop or ShopifyAnalytics.meta");
        let d = window.trekkie;
        if (vf(`[Forms Trekkie] ${yf} ${s}`, {
          event_type: s,
          ...Sf(e, t.layout, t.image, r),
          ...l
        }),
          !(d != null && d.track))
          return;
        let u = {
          event_type: s,
          ...Sf(e, t.layout, t.image, r),
          ...l
        };
        d.track(yf, u),
          Af.add(Z2(s, e, cu(r)))
      }
        , [t.layout, e, t.image, r])
    , o = (0,
      zr.useCallback)((s, l) => {
        Af.has(Z2(s, e, cu(r))) || n(s, l)
      }
        , [n, e, r])
    , i = (0,
      zr.useCallback)(() => {
        Af.clear()
      }
        , []);
  return (0,
    zr.useMemo)(() => ({
      track: n,
      trackOnce: o,
      reset: i
    }), [n, o, i])
}
  , "useTrekkie");
function Wr() {
  let { trackOnce: e } = On();
  (0,
    zr.useEffect)(() => {
      e("view")
    }
      , [e])
}
a(Wr, "useTrackViewOnRender");
c();
var xf = U(Et());
var yo = a(() => {
  var o;
  let { state: { root: e } } = xe()
    , t = (o = e == null ? void 0 : e.getElementById("app-embed")) == null ? void 0 : o.classList
    , r = (0,
      xf.useCallback)((...i) => {
        t == null || t.add(...i)
      }
        , [t])
    , n = (0,
      xf.useCallback)((...i) => {
        t == null || t.remove(...i)
      }
        , [t]);
  return {
    addClassToRoot: r,
    removeClassFromRoot: n
  }
}
  , "useRootClassList");
var $F = a(() => {
  let { state: e, dispatch: t } = xe()
    , { addClassToRoot: r, removeClassFromRoot: n } = yo()
    , o = So(e.formStyles.appEmbedContainer)
    , { trackOnce: i } = On();
  Wr();
  let s = ["left-middle-rotated", "right-middle-rotated"].includes(o);
  return (0,
    Cf.useLayoutEffect)(() => {
      let l = `appEmbed${o.split("-").map(d => `${d[0].toUpperCase()}${d.slice(1)}`).join("")}`;
      r(Cn[l])
    }
      , [r, o]),
    (0,
      Cf.useLayoutEffect)(() => (r(Cn.appEmbedRoot),
        r(Cn.appEmbedRootTeaser),
        s && r(Cn.appEmbedRootRotated),
        () => {
          n(Cn.appEmbedRootTeaser),
            n(Cn.appEmbedRootRotated)
        }
      ), [r, n, s]),
    h(Y2, {
      onClick: () => {
        t({
          type: "NEXT"
        }),
          i("click")
      }
      ,
      onClose: () => {
        t({
          type: "DISMISS"
        }),
          i("click")
      }
      ,
      message: e.formDefinition.teaser.text
    })
}
  , "AppTease")
  , Q2 = $F;
c();
var Nt = U(Et());
c();
var tn = U(Ge());
c();
var fe = U(Ge(), 1);
var Ci = a(e => e.type === "checkbox", "isCheckBoxInput")
  , Pn = a(e => e instanceof Date, "isDateObject")
  , dt = a(e => e == null, "isNullOrUndefined")
  , ux = a(e => typeof e == "object", "isObjectType")
  , Ie = a(e => !dt(e) && !Array.isArray(e) && ux(e) && !Pn(e), "isObject")
  , lx = a(e => Ie(e) && e.target ? Ci(e.target) ? e.target.checked : e.target.value : e, "getEventValue")
  , DF = a(e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, "getNodeParentName")
  , cx = a((e, t) => e.has(DF(t)), "isNameInFieldArray")
  , UF = a(e => {
    let t = e.constructor && e.constructor.prototype;
    return Ie(t) && t.hasOwnProperty("isPrototypeOf")
  }
    , "isPlainObject")
  , wf = typeof window != "undefined" && typeof window.HTMLElement != "undefined" && typeof document != "undefined";
function vt(e) {
  let t, r = Array.isArray(e), n = typeof FileList != "undefined" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(wf && (e instanceof Blob || n)) && (r || Ie(e)))
    if (t = r ? [] : {},
      !r && !UF(e))
      t = e;
    else
      for (let o in e)
        e.hasOwnProperty(o) && (t[o] = vt(e[o]));
  else
    return e;
  return t
}
a(vt, "cloneObject");
var hu = a(e => Array.isArray(e) ? e.filter(Boolean) : [], "compact")
  , we = a(e => e === void 0, "isUndefined")
  , M = a((e, t, r) => {
    if (!t || !Ie(e))
      return r;
    let n = hu(t.split(/[,[\].]+?/)).reduce((o, i) => dt(o) ? o : o[i], e);
    return we(n) || n === e ? we(e[t]) ? r : e[t] : n
  }
    , "get")
  , Dt = a(e => typeof e == "boolean", "isBoolean")
  , If = a(e => /^\w*$/.test(e), "isKey")
  , dx = a(e => hu(e.replace(/["|']|\]/g, "").split(/\.|\[/)), "stringToPath")
  , _e = a((e, t, r) => {
    let n = -1
      , o = If(t) ? [t] : dx(t)
      , i = o.length
      , s = i - 1;
    for (; ++n < i;) {
      let l = o[n]
        , d = r;
      if (n !== s) {
        let u = e[l];
        d = Ie(u) || Array.isArray(u) ? u : isNaN(+o[n + 1]) ? {} : []
      }
      if (l === "__proto__" || l === "constructor" || l === "prototype")
        return;
      e[l] = d,
        e = e[l]
    }
    return e
  }
    , "set")
  , fu = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
  }
  , Kt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
  }
  , Cr = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
  }
  , FF = fe.default.createContext(null)
  , Mf = a(() => fe.default.useContext(FF), "useFormContext");
var fx = a((e, t, r, n = !0) => {
  let o = {
    defaultValues: t._defaultValues
  };
  for (let i in e)
    Object.defineProperty(o, i, {
      get: a(() => {
        let s = i;
        return t._proxyFormState[s] !== Kt.all && (t._proxyFormState[s] = !n || Kt.all),
          r && (r[s] = !0),
          e[s]
      }
        , "get")
    });
  return o
}
  , "getProxyFormState")
  , St = a(e => Ie(e) && !Object.keys(e).length, "isEmptyObject")
  , px = a((e, t, r, n) => {
    r(e);
    let { name: o, ...i } = e;
    return St(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find(s => t[s] === (!n || Kt.all))
  }
    , "shouldRenderFormState")
  , bi = a(e => Array.isArray(e) ? e : [e], "convertToArrayPayload")
  , mx = a((e, t, r) => !e || !t || e === t || bi(e).some(n => n && (r ? n === t : n.startsWith(t) || t.startsWith(n))), "shouldSubscribeByName");
function Lf(e) {
  let t = fe.default.useRef(e);
  t.current = e,
    fe.default.useEffect(() => {
      let r = !e.disabled && t.current.subject && t.current.subject.subscribe({
        next: t.current.next
      });
      return () => {
        r && r.unsubscribe()
      }
    }
      , [e.disabled])
}
a(Lf, "useSubscribe");
function BF(e) {
  let t = Mf()
    , { control: r = t.control, disabled: n, name: o, exact: i } = e || {}
    , [s, l] = fe.default.useState(r._formState)
    , d = fe.default.useRef(!0)
    , u = fe.default.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1
    })
    , f = fe.default.useRef(o);
  return f.current = o,
    Lf({
      disabled: n,
      next: a(p => d.current && mx(f.current, p.name, i) && px(p, u.current, r._updateFormState) && l({
        ...r._formState,
        ...p
      }), "next"),
      subject: r._subjects.state
    }),
    fe.default.useEffect(() => (d.current = !0,
      u.current.isValid && r._updateValid(!0),
      () => {
        d.current = !1
      }
    ), [r]),
    fe.default.useMemo(() => fx(s, r, u.current, !1), [s, r])
}
a(BF, "useFormState");
var cr = a(e => typeof e == "string", "isString")
  , _x = a((e, t, r, n, o) => cr(e) ? (n && t.watch.add(e),
    M(r, e, o)) : Array.isArray(e) ? e.map(i => (n && t.watch.add(i),
      M(r, i))) : (n && (t.watchAll = !0),
        r), "generateWatchOutput");
function VF(e) {
  let t = Mf()
    , { control: r = t.control, name: n, defaultValue: o, disabled: i, exact: s } = e || {}
    , l = fe.default.useRef(n);
  l.current = n,
    Lf({
      disabled: i,
      subject: r._subjects.values,
      next: a(f => {
        mx(l.current, f.name, s) && u(vt(_x(l.current, r._names, f.values || r._formValues, !1, o)))
      }
        , "next")
    });
  let [d, u] = fe.default.useState(r._getWatch(n, o));
  return fe.default.useEffect(() => r._removeUnmounted()),
    d
}
a(VF, "useWatch");
function Ri(e) {
  let t = Mf()
    , { name: r, disabled: n, control: o = t.control, shouldUnregister: i } = e
    , s = cx(o._names.array, r)
    , l = VF({
      control: o,
      name: r,
      defaultValue: M(o._formValues, r, M(o._defaultValues, r, e.defaultValue)),
      exact: !0
    })
    , d = BF({
      control: o,
      name: r,
      exact: !0
    })
    , u = fe.default.useRef(o.register(r, {
      ...e.rules,
      value: l,
      ...Dt(e.disabled) ? {
        disabled: e.disabled
      } : {}
    }))
    , f = fe.default.useMemo(() => Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: a(() => !!M(d.errors, r), "get")
      },
      isDirty: {
        enumerable: !0,
        get: a(() => !!M(d.dirtyFields, r), "get")
      },
      isTouched: {
        enumerable: !0,
        get: a(() => !!M(d.touchedFields, r), "get")
      },
      isValidating: {
        enumerable: !0,
        get: a(() => !!M(d.validatingFields, r), "get")
      },
      error: {
        enumerable: !0,
        get: a(() => M(d.errors, r), "get")
      }
    }), [d, r])
    , p = fe.default.useMemo(() => ({
      name: r,
      value: l,
      ...Dt(n) || d.disabled ? {
        disabled: d.disabled || n
      } : {},
      onChange: a(_ => u.current.onChange({
        target: {
          value: lx(_),
          name: r
        },
        type: fu.CHANGE
      }), "onChange"),
      onBlur: a(() => u.current.onBlur({
        target: {
          value: M(o._formValues, r),
          name: r
        },
        type: fu.BLUR
      }), "onBlur"),
      ref: a(_ => {
        let S = M(o._fields, r);
        S && _ && (S._f.ref = {
          focus: a(() => _.focus(), "focus"),
          select: a(() => _.select(), "select"),
          setCustomValidity: a(g => _.setCustomValidity(g), "setCustomValidity"),
          reportValidity: a(() => _.reportValidity(), "reportValidity")
        })
      }
        , "ref")
    }), [r, o._formValues, n, d.disabled, l, o._fields]);
  return fe.default.useEffect(() => {
    let _ = o._options.shouldUnregister || i
      , S = a((g, T) => {
        let b = M(o._fields, g);
        b && b._f && (b._f.mount = T)
      }
        , "updateMounted");
    if (S(r, !0),
      _) {
      let g = vt(M(o._options.defaultValues, r));
      _e(o._defaultValues, r, g),
        we(M(o._formValues, r)) && _e(o._formValues, r, g)
    }
    return !s && o.register(r),
      () => {
        (s ? _ && !o._state.action : _) ? o.unregister(r) : S(r, !1)
      }
  }
    , [r, o, s, i]),
    fe.default.useEffect(() => {
      o._updateDisabledField({
        disabled: n,
        fields: o._fields,
        name: r
      })
    }
      , [n, r, o]),
    fe.default.useMemo(() => ({
      field: p,
      formState: d,
      fieldState: f
    }), [p, d, f])
}
a(Ri, "useController");
var bo = a(e => e.render(Ri(e)), "Controller");
var kF = a((e, t, r, n, o) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: o || !0
  }
} : {}, "appendErrors");
var J2 = a(e => ({
  isOnSubmit: !e || e === Kt.onSubmit,
  isOnBlur: e === Kt.onBlur,
  isOnChange: e === Kt.onChange,
  isOnAll: e === Kt.all,
  isOnTouch: e === Kt.onTouched
}), "getValidationModes")
  , ex = a((e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(n => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length)))), "isWatched")
  , xi = a((e, t, r, n) => {
    for (let o of r || Object.keys(e)) {
      let i = M(e, o);
      if (i) {
        let { _f: s, ...l } = i;
        if (s) {
          if (s.refs && s.refs[0] && t(s.refs[0], o) && !n)
            return !0;
          if (s.ref && t(s.ref, s.name) && !n)
            return !0;
          if (xi(l, t))
            break
        } else if (Ie(l) && xi(l, t))
          break
      }
    }
  }
    , "iterateFieldsByAction")
  , HF = a((e, t, r) => {
    let n = bi(M(e, r));
    return _e(n, "root", t[r]),
      _e(e, r, n),
      e
  }
    , "updateFieldArrayRootError")
  , $f = a(e => e.type === "file", "isFileInput")
  , lr = a(e => typeof e == "function", "isFunction")
  , pu = a(e => {
    if (!wf)
      return !1;
    let t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
  }
    , "isHTMLElement")
  , du = a(e => cr(e), "isMessage")
  , Df = a(e => e.type === "radio", "isRadioInput")
  , mu = a(e => e instanceof RegExp, "isRegex")
  , tx = {
    value: !1,
    isValid: !1
  }
  , rx = {
    value: !0,
    isValid: !0
  }
  , hx = a(e => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        let t = e.filter(r => r && r.checked && !r.disabled).map(r => r.value);
        return {
          value: t,
          isValid: !!t.length
        }
      }
      return e[0].checked && !e[0].disabled ? e[0].attributes && !we(e[0].attributes.value) ? we(e[0].value) || e[0].value === "" ? rx : {
        value: e[0].value,
        isValid: !0
      } : rx : tx
    }
    return tx
  }
    , "getCheckboxValue")
  , nx = {
    isValid: !1,
    value: null
  }
  , gx = a(e => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
  } : t, nx) : nx, "getRadioValue");
function ox(e, t, r = "validate") {
  if (du(e) || Array.isArray(e) && e.every(du) || Dt(e) && !e)
    return {
      type: r,
      message: du(e) ? e : "",
      ref: t
    }
}
a(ox, "getValidateError");
var Ao = a(e => Ie(e) && !mu(e) ? e : {
  value: e,
  message: ""
}, "getValueAndMessage")
  , ix = a(async (e, t, r, n, o, i) => {
    let { ref: s, refs: l, required: d, maxLength: u, minLength: f, min: p, max: _, pattern: S, validate: g, name: T, valueAsNumber: b, mount: x } = e._f
      , A = M(r, T);
    if (!x || t.has(T))
      return {};
    let P = l ? l[0] : s
      , L = a(j => {
        o && P.reportValidity && (P.setCustomValidity(Dt(j) ? "" : j || ""),
          P.reportValidity())
      }
        , "setCustomValidity")
      , D = {}
      , K = Df(s)
      , I = Ci(s)
      , z = K || I
      , ue = (b || $f(s)) && we(s.value) && we(A) || pu(s) && s.value === "" || A === "" || Array.isArray(A) && !A.length
      , Ee = kF.bind(null, T, n, D)
      , de = a((j, J, oe, N = Cr.maxLength, q = Cr.minLength) => {
        let ae = j ? J : oe;
        D[T] = {
          type: j ? N : q,
          message: ae,
          ref: s,
          ...Ee(j ? N : q, ae)
        }
      }
        , "getMinMaxMessage");
    if (i ? !Array.isArray(A) || !A.length : d && (!z && (ue || dt(A)) || Dt(A) && !A || I && !hx(l).isValid || K && !gx(l).isValid)) {
      let { value: j, message: J } = du(d) ? {
        value: !!d,
        message: d
      } : Ao(d);
      if (j && (D[T] = {
        type: Cr.required,
        message: J,
        ref: P,
        ...Ee(Cr.required, J)
      },
        !n))
        return L(J),
          D
    }
    if (!ue && (!dt(p) || !dt(_))) {
      let j, J, oe = Ao(_), N = Ao(p);
      if (!dt(A) && !isNaN(A)) {
        let q = s.valueAsNumber || A && +A;
        dt(oe.value) || (j = q > oe.value),
          dt(N.value) || (J = q < N.value)
      } else {
        let q = s.valueAsDate || new Date(A)
          , ae = a(ce => new Date(new Date().toDateString() + " " + ce), "convertTimeToDate")
          , k = s.type == "time"
          , re = s.type == "week";
        cr(oe.value) && A && (j = k ? ae(A) > ae(oe.value) : re ? A > oe.value : q > new Date(oe.value)),
          cr(N.value) && A && (J = k ? ae(A) < ae(N.value) : re ? A < N.value : q < new Date(N.value))
      }
      if ((j || J) && (de(!!j, oe.message, N.message, Cr.max, Cr.min),
        !n))
        return L(D[T].message),
          D
    }
    if ((u || f) && !ue && (cr(A) || i && Array.isArray(A))) {
      let j = Ao(u)
        , J = Ao(f)
        , oe = !dt(j.value) && A.length > +j.value
        , N = !dt(J.value) && A.length < +J.value;
      if ((oe || N) && (de(oe, j.message, J.message),
        !n))
        return L(D[T].message),
          D
    }
    if (S && !ue && cr(A)) {
      let { value: j, message: J } = Ao(S);
      if (mu(j) && !A.match(j) && (D[T] = {
        type: Cr.pattern,
        message: J,
        ref: s,
        ...Ee(Cr.pattern, J)
      },
        !n))
        return L(J),
          D
    }
    if (g) {
      if (lr(g)) {
        let j = await g(A, r)
          , J = ox(j, P);
        if (J && (D[T] = {
          ...J,
          ...Ee(Cr.validate, J.message)
        },
          !n))
          return L(J.message),
            D
      } else if (Ie(g)) {
        let j = {};
        for (let J in g) {
          if (!St(j) && !n)
            break;
          let oe = ox(await g[J](A, r), P, J);
          oe && (j = {
            ...oe,
            ...Ee(J, oe.message)
          },
            L(oe.message),
            n && (D[T] = j))
        }
        if (!St(j) && (D[T] = {
          ref: P,
          ...j
        },
          !n))
          return D
      }
    }
    return L(!0),
      D
  }
    , "validateField");
function GF(e, t) {
  let r = t.slice(0, -1).length
    , n = 0;
  for (; n < r;)
    e = we(e) ? n++ : e[t[n++]];
  return e
}
a(GF, "baseGet");
function YF(e) {
  for (let t in e)
    if (e.hasOwnProperty(t) && !we(e[t]))
      return !1;
  return !0
}
a(YF, "isEmptyArray");
function Be(e, t) {
  let r = Array.isArray(t) ? t : If(t) ? [t] : dx(t)
    , n = r.length === 1 ? e : GF(e, r)
    , o = r.length - 1
    , i = r[o];
  return n && delete n[i],
    o !== 0 && (Ie(n) && St(n) || Array.isArray(n) && YF(n)) && Be(e, r.slice(0, -1)),
    e
}
a(Be, "unset");
var Rf = a(() => {
  let e = [];
  return {
    get observers() {
      return e
    },
    next: a(o => {
      for (let i of e)
        i.next && i.next(o)
    }
      , "next"),
    subscribe: a(o => (e.push(o),
    {
      unsubscribe: a(() => {
        e = e.filter(i => i !== o)
      }
        , "unsubscribe")
    }), "subscribe"),
    unsubscribe: a(() => {
      e = []
    }
      , "unsubscribe")
  }
}
  , "createSubject")
  , Nf = a(e => dt(e) || !ux(e), "isPrimitive");
function Kr(e, t) {
  if (Nf(e) || Nf(t))
    return e === t;
  if (Pn(e) && Pn(t))
    return e.getTime() === t.getTime();
  let r = Object.keys(e)
    , n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (let o of r) {
    let i = e[o];
    if (!n.includes(o))
      return !1;
    if (o !== "ref") {
      let s = t[o];
      if (Pn(i) && Pn(s) || Ie(i) && Ie(s) || Array.isArray(i) && Array.isArray(s) ? !Kr(i, s) : i !== s)
        return !1
    }
  }
  return !0
}
a(Kr, "deepEqual");
var Ex = a(e => e.type === "select-multiple", "isMultipleSelect")
  , jF = a(e => Df(e) || Ci(e), "isRadioOrCheckbox")
  , Of = a(e => pu(e) && e.isConnected, "live")
  , Tx = a(e => {
    for (let t in e)
      if (lr(e[t]))
        return !0;
    return !1
  }
    , "objectHasFunction");
function _u(e, t = {}) {
  let r = Array.isArray(e);
  if (Ie(e) || r)
    for (let n in e)
      Array.isArray(e[n]) || Ie(e[n]) && !Tx(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {},
        _u(e[n], t[n])) : dt(e[n]) || (t[n] = !0);
  return t
}
a(_u, "markFieldsDirty");
function vx(e, t, r) {
  let n = Array.isArray(e);
  if (Ie(e) || n)
    for (let o in e)
      Array.isArray(e[o]) || Ie(e[o]) && !Tx(e[o]) ? we(t) || Nf(r[o]) ? r[o] = Array.isArray(e[o]) ? _u(e[o], []) : {
        ..._u(e[o])
      } : vx(e[o], dt(t) ? {} : t[o], r[o]) : r[o] = !Kr(e[o], t[o]);
  return r
}
a(vx, "getDirtyFieldsFromDefaultValues");
var yi = a((e, t) => vx(e, t, _u(t)), "getDirtyFields")
  , Sx = a((e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => we(e) ? e : t ? e === "" ? NaN : e && +e : r && cr(e) ? new Date(e) : n ? n(e) : e, "getFieldValueAs");
function Pf(e) {
  let t = e.ref;
  return $f(t) ? t.files : Df(t) ? gx(e.refs).value : Ex(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Ci(t) ? hx(e.refs).value : Sx(we(t.value) ? e.ref.value : t.value, e)
}
a(Pf, "getFieldValue");
var zF = a((e, t, r, n) => {
  let o = {};
  for (let i of e) {
    let s = M(t, i);
    s && _e(o, i, s._f)
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: n
  }
}
  , "getResolverOptions")
  , Ai = a(e => we(e) ? e : mu(e) ? e.source : Ie(e) ? mu(e.value) ? e.value.source : e.value : e, "getRuleValue")
  , ax = "AsyncFunction"
  , WF = a(e => !!e && !!e.validate && !!(lr(e.validate) && e.validate.constructor.name === ax || Ie(e.validate) && Object.values(e.validate).find(t => t.constructor.name === ax)), "hasPromiseValidation")
  , KF = a(e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), "hasValidation");
function sx(e, t, r) {
  let n = M(e, r);
  if (n || If(r))
    return {
      error: n,
      name: r
    };
  let o = r.split(".");
  for (; o.length;) {
    let i = o.join(".")
      , s = M(t, i)
      , l = M(e, i);
    if (s && !Array.isArray(s) && r !== i)
      return {
        name: r
      };
    if (l && l.type)
      return {
        name: i,
        error: l
      };
    o.pop()
  }
  return {
    name: r
  }
}
a(sx, "schemaErrorLookup");
var XF = a((e, t, r, n, o) => o.isOnAll ? !1 : !r && o.isOnTouch ? !(t || e) : (r ? n.isOnBlur : o.isOnBlur) ? !e : (r ? n.isOnChange : o.isOnChange) ? e : !0, "skipValidation")
  , qF = a((e, t) => !hu(M(e, t)).length && Be(e, t), "unsetEmptyArray")
  , ZF = {
    mode: Kt.onSubmit,
    reValidateMode: Kt.onChange,
    shouldFocusError: !0
  };
function QF(e = {}) {
  let t = {
    ...ZF,
    ...e
  }, r = {
    submitCount: 0,
    isDirty: !1,
    isLoading: lr(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, n = {}, o = Ie(t.defaultValues) || Ie(t.values) ? vt(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : vt(o), s = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: new Set,
    disabled: new Set,
    unMount: new Set,
    array: new Set,
    watch: new Set
  }, d, u = 0, f = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, p = {
    values: Rf(),
    array: Rf(),
    state: Rf()
  }, _ = J2(t.mode), S = J2(t.reValidateMode), g = t.criteriaMode === Kt.all, T = a(m => E => {
    clearTimeout(u),
      u = setTimeout(m, E)
  }
    , "debounce"), b = a(async m => {
      if (!t.disabled && (f.isValid || m)) {
        let E = t.resolver ? St((await z()).errors) : await Ee(n, !0);
        E !== r.isValid && p.state.next({
          isValid: E
        })
      }
    }
      , "_updateValid"), x = a((m, E) => {
        !t.disabled && (f.isValidating || f.validatingFields) && ((m || Array.from(l.mount)).forEach(y => {
          y && (E ? _e(r.validatingFields, y, E) : Be(r.validatingFields, y))
        }
        ),
          p.state.next({
            validatingFields: r.validatingFields,
            isValidating: !St(r.validatingFields)
          }))
      }
        , "_updateIsValidating"), A = a((m, E = [], y, $, w = !0, O = !0) => {
          if ($ && y && !t.disabled) {
            if (s.action = !0,
              O && Array.isArray(M(n, m))) {
              let B = y(M(n, m), $.argA, $.argB);
              w && _e(n, m, B)
            }
            if (O && Array.isArray(M(r.errors, m))) {
              let B = y(M(r.errors, m), $.argA, $.argB);
              w && _e(r.errors, m, B),
                qF(r.errors, m)
            }
            if (f.touchedFields && O && Array.isArray(M(r.touchedFields, m))) {
              let B = y(M(r.touchedFields, m), $.argA, $.argB);
              w && _e(r.touchedFields, m, B)
            }
            f.dirtyFields && (r.dirtyFields = yi(o, i)),
              p.state.next({
                name: m,
                isDirty: j(m, E),
                dirtyFields: r.dirtyFields,
                errors: r.errors,
                isValid: r.isValid
              })
          } else
            _e(i, m, E)
        }
          , "_updateFieldArray"), P = a((m, E) => {
            _e(r.errors, m, E),
              p.state.next({
                errors: r.errors
              })
          }
            , "updateErrors"), L = a(m => {
              r.errors = m,
                p.state.next({
                  errors: r.errors,
                  isValid: !1
                })
            }
              , "_setErrors"), D = a((m, E, y, $) => {
                let w = M(n, m);
                if (w) {
                  let O = M(i, m, we(y) ? M(o, m) : y);
                  we(O) || $ && $.defaultChecked || E ? _e(i, m, E ? O : Pf(w._f)) : N(m, O),
                    s.mount && b()
                }
              }
                , "updateValidAndValue"), K = a((m, E, y, $, w) => {
                  let O = !1
                    , B = !1
                    , Q = {
                      name: m
                    };
                  if (!t.disabled) {
                    let Te = !!(M(n, m) && M(n, m)._f && M(n, m)._f.disabled);
                    if (!y || $) {
                      f.isDirty && (B = r.isDirty,
                        r.isDirty = Q.isDirty = j(),
                        O = B !== Q.isDirty);
                      let Re = Te || Kr(M(o, m), E);
                      B = !!(!Te && M(r.dirtyFields, m)),
                        Re || Te ? Be(r.dirtyFields, m) : _e(r.dirtyFields, m, !0),
                        Q.dirtyFields = r.dirtyFields,
                        O = O || f.dirtyFields && B !== !Re
                    }
                    if (y) {
                      let Re = M(r.touchedFields, m);
                      Re || (_e(r.touchedFields, m, y),
                        Q.touchedFields = r.touchedFields,
                        O = O || f.touchedFields && Re !== y)
                    }
                    O && w && p.state.next(Q)
                  }
                  return O ? Q : {}
                }
                  , "updateTouchAndDirty"), I = a((m, E, y, $) => {
                    let w = M(r.errors, m)
                      , O = f.isValid && Dt(E) && r.isValid !== E;
                    if (t.delayError && y ? (d = T(() => P(m, y)),
                      d(t.delayError)) : (clearTimeout(u),
                        d = null,
                        y ? _e(r.errors, m, y) : Be(r.errors, m)),
                      (y ? !Kr(w, y) : w) || !St($) || O) {
                      let B = {
                        ...$,
                        ...O && Dt(E) ? {
                          isValid: E
                        } : {},
                        errors: r.errors,
                        name: m
                      };
                      r = {
                        ...r,
                        ...B
                      },
                        p.state.next(B)
                    }
                  }
                    , "shouldRenderByError"), z = a(async m => {
                      x(m, !0);
                      let E = await t.resolver(i, t.context, zF(m || l.mount, n, t.criteriaMode, t.shouldUseNativeValidation));
                      return x(m),
                        E
                    }
                      , "_executeSchema"), ue = a(async m => {
                        let { errors: E } = await z(m);
                        if (m)
                          for (let y of m) {
                            let $ = M(E, y);
                            $ ? _e(r.errors, y, $) : Be(r.errors, y)
                          }
                        else
                          r.errors = E;
                        return E
                      }
                        , "executeSchemaAndUpdateState"), Ee = a(async (m, E, y = {
                          valid: !0
                        }) => {
                          for (let $ in m) {
                            let w = m[$];
                            if (w) {
                              let { _f: O, ...B } = w;
                              if (O) {
                                let Q = l.array.has(O.name)
                                  , Te = w._f && WF(w._f);
                                Te && f.validatingFields && x([$], !0);
                                let Re = await ix(w, l.disabled, i, g, t.shouldUseNativeValidation && !E, Q);
                                if (Te && f.validatingFields && x([$]),
                                  Re[O.name] && (y.valid = !1,
                                    E))
                                  break;
                                !E && (M(Re, O.name) ? Q ? HF(r.errors, Re, O.name) : _e(r.errors, O.name, Re[O.name]) : Be(r.errors, O.name))
                              }
                              !St(B) && await Ee(B, E, y)
                            }
                          }
                          return y.valid
                        }
                          , "executeBuiltInValidation"), de = a(() => {
                            for (let m of l.unMount) {
                              let E = M(n, m);
                              E && (E._f.refs ? E._f.refs.every(y => !Of(y)) : !Of(E._f.ref)) && ht(m)
                            }
                            l.unMount = new Set
                          }
                            , "_removeUnmounted"), j = a((m, E) => !t.disabled && (m && E && _e(i, m, E),
                              !Kr(ne(), o)), "_getDirty"), J = a((m, E, y) => _x(m, l, {
                                ...s.mount ? i : we(E) ? o : cr(m) ? {
                                  [m]: E
                                } : E
                              }, y, E), "_getWatch"), oe = a(m => hu(M(s.mount ? i : o, m, t.shouldUnregister ? M(o, m, []) : [])), "_getFieldArray"), N = a((m, E, y = {}) => {
                                let $ = M(n, m)
                                  , w = E;
                                if ($) {
                                  let O = $._f;
                                  O && (!O.disabled && _e(i, m, Sx(E, O)),
                                    w = pu(O.ref) && dt(E) ? "" : E,
                                    Ex(O.ref) ? [...O.ref.options].forEach(B => B.selected = w.includes(B.value)) : O.refs ? Ci(O.ref) ? O.refs.length > 1 ? O.refs.forEach(B => (!B.defaultChecked || !B.disabled) && (B.checked = Array.isArray(w) ? !!w.find(Q => Q === B.value) : w === B.value)) : O.refs[0] && (O.refs[0].checked = !!w) : O.refs.forEach(B => B.checked = B.value === w) : $f(O.ref) ? O.ref.value = "" : (O.ref.value = w,
                                      O.ref.type || p.values.next({
                                        name: m,
                                        values: {
                                          ...i
                                        }
                                      })))
                                }
                                (y.shouldDirty || y.shouldTouch) && K(m, w, y.shouldTouch, y.shouldDirty, !0),
                                  y.shouldValidate && ce(m)
                              }
                                , "setFieldValue"), q = a((m, E, y) => {
                                  for (let $ in E) {
                                    let w = E[$]
                                      , O = `${m}.${$}`
                                      , B = M(n, O);
                                    (l.array.has(m) || Ie(w) || B && !B._f) && !Pn(w) ? q(O, w, y) : N(O, w, y)
                                  }
                                }
                                  , "setValues"), ae = a((m, E, y = {}) => {
                                    let $ = M(n, m)
                                      , w = l.array.has(m)
                                      , O = vt(E);
                                    _e(i, m, O),
                                      w ? (p.array.next({
                                        name: m,
                                        values: {
                                          ...i
                                        }
                                      }),
                                        (f.isDirty || f.dirtyFields) && y.shouldDirty && p.state.next({
                                          name: m,
                                          dirtyFields: yi(o, i),
                                          isDirty: j(m, O)
                                        })) : $ && !$._f && !dt(O) ? q(m, O, y) : N(m, O, y),
                                      ex(m, l) && p.state.next({
                                        ...r
                                      }),
                                      p.values.next({
                                        name: s.mount ? m : void 0,
                                        values: {
                                          ...i
                                        }
                                      })
                                  }
                                    , "setValue"), k = a(async m => {
                                      s.mount = !0;
                                      let E = m.target
                                        , y = E.name
                                        , $ = !0
                                        , w = M(n, y)
                                        , O = a(() => E.type ? Pf(w._f) : lx(m), "getCurrentFieldValue")
                                        , B = a(Q => {
                                          $ = Number.isNaN(Q) || Pn(Q) && isNaN(Q.getTime()) || Kr(Q, M(i, y, Q))
                                        }
                                          , "_updateIsFieldValueUpdated");
                                      if (w) {
                                        let Q, Te, Re = O(), kt = m.type === fu.BLUR || m.type === fu.FOCUS_OUT, oa = !KF(w._f) && !t.resolver && !M(r.errors, y) && !w._f.deps || XF(kt, M(r.touchedFields, y), r.isSubmitted, S, _), an = ex(y, l, kt);
                                        _e(i, y, Re),
                                          kt ? (w._f.onBlur && w._f.onBlur(m),
                                            d && d(0)) : w._f.onChange && w._f.onChange(m);
                                        let Bn = K(y, Re, kt, !1)
                                          , Vn = !St(Bn) || an;
                                        if (!kt && p.values.next({
                                          name: y,
                                          type: m.type,
                                          values: {
                                            ...i
                                          }
                                        }),
                                          oa)
                                          return f.isValid && (t.mode === "onBlur" && kt ? b() : kt || b()),
                                            Vn && p.state.next({
                                              name: y,
                                              ...an ? {} : Bn
                                            });
                                        if (!kt && an && p.state.next({
                                          ...r
                                        }),
                                          t.resolver) {
                                          let { errors: sn } = await z([y]);
                                          if (B(Re),
                                            $) {
                                            let Ht = sx(r.errors, n, y)
                                              , mr = sx(sn, n, Ht.name || y);
                                            Q = mr.error,
                                              y = mr.name,
                                              Te = St(sn)
                                          }
                                        } else
                                          x([y], !0),
                                            Q = (await ix(w, l.disabled, i, g, t.shouldUseNativeValidation))[y],
                                            x([y]),
                                            B(Re),
                                            $ && (Q ? Te = !1 : f.isValid && (Te = await Ee(n, !0)));
                                        $ && (w._f.deps && ce(w._f.deps),
                                          I(y, Te, Q, Bn))
                                      }
                                    }
                                      , "onChange"), re = a((m, E) => {
                                        if (M(r.errors, E) && m.focus)
                                          return m.focus(),
                                            1
                                      }
                                        , "_focusInput"), ce = a(async (m, E = {}) => {
                                          let y, $, w = bi(m);
                                          if (t.resolver) {
                                            let O = await ue(we(m) ? m : w);
                                            y = St(O),
                                              $ = m ? !w.some(B => M(O, B)) : y
                                          } else
                                            m ? ($ = (await Promise.all(w.map(async O => {
                                              let B = M(n, O);
                                              return await Ee(B && B._f ? {
                                                [O]: B
                                              } : B)
                                            }
                                            ))).every(Boolean),
                                              !(!$ && !r.isValid) && b()) : $ = y = await Ee(n);
                                          return p.state.next({
                                            ...!cr(m) || f.isValid && y !== r.isValid ? {} : {
                                              name: m
                                            },
                                            ...t.resolver || !m ? {
                                              isValid: y
                                            } : {},
                                            errors: r.errors
                                          }),
                                            E.shouldFocus && !$ && xi(n, re, m ? w : l.mount),
                                            $
                                        }
                                          , "trigger"), ne = a(m => {
                                            let E = {
                                              ...s.mount ? i : o
                                            };
                                            return we(m) ? E : cr(m) ? M(E, m) : m.map(y => M(E, y))
                                          }
                                            , "getValues"), ye = a((m, E) => ({
                                              invalid: !!M((E || r).errors, m),
                                              isDirty: !!M((E || r).dirtyFields, m),
                                              error: M((E || r).errors, m),
                                              isValidating: !!M(r.validatingFields, m),
                                              isTouched: !!M((E || r).touchedFields, m)
                                            }), "getFieldState"), ee = a(m => {
                                              m && bi(m).forEach(E => Be(r.errors, E)),
                                                p.state.next({
                                                  errors: m ? r.errors : {}
                                                })
                                            }
                                              , "clearErrors"), Ve = a((m, E, y) => {
                                                let $ = (M(n, m, {
                                                  _f: {}
                                                })._f || {}).ref
                                                  , w = M(r.errors, m) || {}
                                                  , { ref: O, message: B, type: Q, ...Te } = w;
                                                _e(r.errors, m, {
                                                  ...Te,
                                                  ...E,
                                                  ref: $
                                                }),
                                                  p.state.next({
                                                    name: m,
                                                    errors: r.errors,
                                                    isValid: !1
                                                  }),
                                                  y && y.shouldFocus && $ && $.focus && $.focus()
                                              }
                                                , "setError"), Z = a((m, E) => lr(m) ? p.values.subscribe({
                                                  next: a(y => m(J(void 0, E), y), "next")
                                                }) : J(m, E, !0), "watch"), ht = a((m, E = {}) => {
                                                  for (let y of m ? bi(m) : l.mount)
                                                    l.mount.delete(y),
                                                      l.array.delete(y),
                                                      E.keepValue || (Be(n, y),
                                                        Be(i, y)),
                                                      !E.keepError && Be(r.errors, y),
                                                      !E.keepDirty && Be(r.dirtyFields, y),
                                                      !E.keepTouched && Be(r.touchedFields, y),
                                                      !E.keepIsValidating && Be(r.validatingFields, y),
                                                      !t.shouldUnregister && !E.keepDefaultValue && Be(o, y);
                                                  p.values.next({
                                                    values: {
                                                      ...i
                                                    }
                                                  }),
                                                    p.state.next({
                                                      ...r,
                                                      ...E.keepDirty ? {
                                                        isDirty: j()
                                                      } : {}
                                                    }),
                                                    !E.keepIsValid && b()
                                                }
                                                  , "unregister"), We = a(({ disabled: m, name: E, field: y, fields: $ }) => {
                                                    (Dt(m) && s.mount || m || l.disabled.has(E)) && (m ? l.disabled.add(E) : l.disabled.delete(E),
                                                      K(E, Pf(y ? y._f : M($, E)._f), !1, !1, !0))
                                                  }
                                                    , "_updateDisabledField"), rn = a((m, E = {}) => {
                                                      let y = M(n, m)
                                                        , $ = Dt(E.disabled) || Dt(t.disabled);
                                                      return _e(n, m, {
                                                        ...y || {},
                                                        _f: {
                                                          ...y && y._f ? y._f : {
                                                            ref: {
                                                              name: m
                                                            }
                                                          },
                                                          name: m,
                                                          mount: !0,
                                                          ...E
                                                        }
                                                      }),
                                                        l.mount.add(m),
                                                        y ? We({
                                                          field: y,
                                                          disabled: Dt(E.disabled) ? E.disabled : t.disabled,
                                                          name: m
                                                        }) : D(m, !0, E.value),
                                                      {
                                                        ...$ ? {
                                                          disabled: E.disabled || t.disabled
                                                        } : {},
                                                        ...t.progressive ? {
                                                          required: !!E.required,
                                                          min: Ai(E.min),
                                                          max: Ai(E.max),
                                                          minLength: Ai(E.minLength),
                                                          maxLength: Ai(E.maxLength),
                                                          pattern: Ai(E.pattern)
                                                        } : {},
                                                        name: m,
                                                        onChange: k,
                                                        onBlur: k,
                                                        ref: a(w => {
                                                          if (w) {
                                                            rn(m, E),
                                                              y = M(n, m);
                                                            let O = we(w.value) && w.querySelectorAll && w.querySelectorAll("input,select,textarea")[0] || w
                                                              , B = jF(O)
                                                              , Q = y._f.refs || [];
                                                            if (B ? Q.find(Te => Te === O) : O === y._f.ref)
                                                              return;
                                                            _e(n, m, {
                                                              _f: {
                                                                ...y._f,
                                                                ...B ? {
                                                                  refs: [...Q.filter(Of), O, ...Array.isArray(M(o, m)) ? [{}] : []],
                                                                  ref: {
                                                                    type: O.type,
                                                                    name: m
                                                                  }
                                                                } : {
                                                                  ref: O
                                                                }
                                                              }
                                                            }),
                                                              D(m, !1, void 0, O)
                                                          } else
                                                            y = M(n, m, {}),
                                                              y._f && (y._f.mount = !1),
                                                              (t.shouldUnregister || E.shouldUnregister) && !(cx(l.array, m) && s.action) && l.unMount.add(m)
                                                        }
                                                          , "ref")
                                                      }
                                                    }
                                                      , "register"), pr = a(() => t.shouldFocusError && xi(n, re, l.mount), "_focusError"), nn = a(m => {
                                                        Dt(m) && (p.state.next({
                                                          disabled: m
                                                        }),
                                                          xi(n, (E, y) => {
                                                            let $ = M(n, y);
                                                            $ && (E.disabled = $._f.disabled || m,
                                                              Array.isArray($._f.refs) && $._f.refs.forEach(w => {
                                                                w.disabled = $._f.disabled || m
                                                              }
                                                              ))
                                                          }
                                                            , 0, !1))
                                                      }
                                                        , "_disableForm"), wt = a((m, E) => async y => {
                                                          let $;
                                                          y && (y.preventDefault && y.preventDefault(),
                                                            y.persist && y.persist());
                                                          let w = vt(i);
                                                          if (l.disabled.size)
                                                            for (let O of l.disabled)
                                                              _e(w, O, void 0);
                                                          if (p.state.next({
                                                            isSubmitting: !0
                                                          }),
                                                            t.resolver) {
                                                            let { errors: O, values: B } = await z();
                                                            r.errors = O,
                                                              w = B
                                                          } else
                                                            await Ee(n);
                                                          if (Be(r.errors, "root"),
                                                            St(r.errors)) {
                                                            p.state.next({
                                                              errors: {}
                                                            });
                                                            try {
                                                              await m(w, y)
                                                            } catch (O) {
                                                              $ = O
                                                            }
                                                          } else
                                                            E && await E({
                                                              ...r.errors
                                                            }, y),
                                                              pr(),
                                                              setTimeout(pr);
                                                          if (p.state.next({
                                                            isSubmitted: !0,
                                                            isSubmitting: !1,
                                                            isSubmitSuccessful: St(r.errors) && !$,
                                                            submitCount: r.submitCount + 1,
                                                            errors: r.errors
                                                          }),
                                                            $)
                                                            throw $
                                                        }
                                                          , "handleSubmit"), qt = a((m, E = {}) => {
                                                            M(n, m) && (we(E.defaultValue) ? ae(m, vt(M(o, m))) : (ae(m, E.defaultValue),
                                                              _e(o, m, vt(E.defaultValue))),
                                                              E.keepTouched || Be(r.touchedFields, m),
                                                              E.keepDirty || (Be(r.dirtyFields, m),
                                                                r.isDirty = E.defaultValue ? j(m, vt(M(o, m))) : j()),
                                                              E.keepError || (Be(r.errors, m),
                                                                f.isValid && b()),
                                                              p.state.next({
                                                                ...r
                                                              }))
                                                          }
                                                            , "resetField"), It = a((m, E = {}) => {
                                                              let y = m ? vt(m) : o
                                                                , $ = vt(y)
                                                                , w = St(m)
                                                                , O = w ? o : $;
                                                              if (E.keepDefaultValues || (o = y),
                                                                !E.keepValues) {
                                                                if (E.keepDirtyValues) {
                                                                  let B = new Set([...l.mount, ...Object.keys(yi(o, i))]);
                                                                  for (let Q of Array.from(B))
                                                                    M(r.dirtyFields, Q) ? _e(O, Q, M(i, Q)) : ae(Q, M(O, Q))
                                                                } else {
                                                                  if (wf && we(m))
                                                                    for (let B of l.mount) {
                                                                      let Q = M(n, B);
                                                                      if (Q && Q._f) {
                                                                        let Te = Array.isArray(Q._f.refs) ? Q._f.refs[0] : Q._f.ref;
                                                                        if (pu(Te)) {
                                                                          let Re = Te.closest("form");
                                                                          if (Re) {
                                                                            Re.reset();
                                                                            break
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  n = {}
                                                                }
                                                                i = t.shouldUnregister ? E.keepDefaultValues ? vt(o) : {} : vt(O),
                                                                  p.array.next({
                                                                    values: {
                                                                      ...O
                                                                    }
                                                                  }),
                                                                  p.values.next({
                                                                    values: {
                                                                      ...O
                                                                    }
                                                                  })
                                                              }
                                                              l = {
                                                                mount: E.keepDirtyValues ? l.mount : new Set,
                                                                unMount: new Set,
                                                                array: new Set,
                                                                disabled: new Set,
                                                                watch: new Set,
                                                                watchAll: !1,
                                                                focus: ""
                                                              },
                                                                s.mount = !f.isValid || !!E.keepIsValid || !!E.keepDirtyValues,
                                                                s.watch = !!t.shouldUnregister,
                                                                p.state.next({
                                                                  submitCount: E.keepSubmitCount ? r.submitCount : 0,
                                                                  isDirty: w ? !1 : E.keepDirty ? r.isDirty : !!(E.keepDefaultValues && !Kr(m, o)),
                                                                  isSubmitted: E.keepIsSubmitted ? r.isSubmitted : !1,
                                                                  dirtyFields: w ? {} : E.keepDirtyValues ? E.keepDefaultValues && i ? yi(o, i) : r.dirtyFields : E.keepDefaultValues && m ? yi(o, m) : E.keepDirty ? r.dirtyFields : {},
                                                                  touchedFields: E.keepTouched ? r.touchedFields : {},
                                                                  errors: E.keepErrors ? r.errors : {},
                                                                  isSubmitSuccessful: E.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
                                                                  isSubmitting: !1
                                                                })
                                                            }
                                                              , "_reset"), Mt = a((m, E) => It(lr(m) ? m(i) : m, E), "reset");
  return {
    control: {
      register: rn,
      unregister: ht,
      getFieldState: ye,
      handleSubmit: wt,
      setError: Ve,
      _executeSchema: z,
      _getWatch: J,
      _getDirty: j,
      _updateValid: b,
      _removeUnmounted: de,
      _updateFieldArray: A,
      _updateDisabledField: We,
      _getFieldArray: oe,
      _reset: It,
      _resetDefaultValues: a(() => lr(t.defaultValues) && t.defaultValues().then(m => {
        Mt(m, t.resetOptions),
          p.state.next({
            isLoading: !1
          })
      }
      ), "_resetDefaultValues"),
      _updateFormState: a(m => {
        r = {
          ...r,
          ...m
        }
      }
        , "_updateFormState"),
      _disableForm: nn,
      _subjects: p,
      _proxyFormState: f,
      _setErrors: L,
      get _fields() {
        return n
      },
      get _formValues() {
        return i
      },
      get _state() {
        return s
      },
      set _state(m) {
        s = m
      },
      get _defaultValues() {
        return o
      },
      get _names() {
        return l
      },
      set _names(m) {
        l = m
      },
      get _formState() {
        return r
      },
      set _formState(m) {
        r = m
      },
      get _options() {
        return t
      },
      set _options(m) {
        t = {
          ...t,
          ...m
        }
      }
    },
    trigger: ce,
    register: rn,
    handleSubmit: wt,
    watch: Z,
    setValue: ae,
    getValues: ne,
    reset: Mt,
    resetField: qt,
    clearErrors: ee,
    unregister: ht,
    setError: Ve,
    setFocus: a((m, E = {}) => {
      let y = M(n, m)
        , $ = y && y._f;
      if ($) {
        let w = $.refs ? $.refs[0] : $.ref;
        w.focus && (w.focus(),
          E.shouldSelect && lr(w.select) && w.select())
      }
    }
      , "setFocus"),
    getFieldState: ye
  }
}
a(QF, "createFormControl");
function yx(e = {}) {
  let t = fe.default.useRef(void 0)
    , r = fe.default.useRef(void 0)
    , [n, o] = fe.default.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: lr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: lr(e.defaultValues) ? void 0 : e.defaultValues
    });
  t.current || (t.current = {
    ...QF(e),
    formState: n
  });
  let i = t.current.control;
  return i._options = e,
    Lf({
      subject: i._subjects.state,
      next: a(s => {
        px(s, i._proxyFormState, i._updateFormState, !0) && o({
          ...i._formState
        })
      }
        , "next")
    }),
    fe.default.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    fe.default.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        let s = i._getDirty();
        s !== n.isDirty && i._subjects.state.next({
          isDirty: s
        })
      }
    }
      , [i, n.isDirty]),
    fe.default.useEffect(() => {
      e.values && !Kr(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions),
        r.current = e.values,
        o(s => ({
          ...s
        }))) : i._resetDefaultValues()
    }
      , [e.values, i]),
    fe.default.useEffect(() => {
      e.errors && i._setErrors(e.errors)
    }
      , [e.errors, i]),
    fe.default.useEffect(() => {
      i._state.mount || (i._updateValid(),
        i._state.mount = !0),
        i._state.watch && (i._state.watch = !1,
          i._subjects.state.next({
            ...i._formState
          })),
        i._removeUnmounted()
    }
    ),
    fe.default.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({
        values: i._getWatch()
      })
    }
      , [e.shouldUnregister, i]),
    t.current.formState = fx(n, i),
    t.current
}
a(yx, "useForm");
c();
var { entries: Ix, setPrototypeOf: Ax, isFrozen: JF, getPrototypeOf: eB, getOwnPropertyDescriptor: tB } = Object
  , { freeze: pt, seal: Ut, create: Mx } = Object
  , { apply: Hf, construct: Gf } = typeof Reflect != "undefined" && Reflect;
pt || (pt = a(function(t) {
  return t
}, "freeze"));
Ut || (Ut = a(function(t) {
  return t
}, "seal"));
Hf || (Hf = a(function(t, r, n) {
  return t.apply(r, n)
}, "apply"));
Gf || (Gf = a(function(t, r) {
  return new t(...r)
}, "construct"));
var gu = mt(Array.prototype.forEach)
  , rB = mt(Array.prototype.lastIndexOf)
  , bx = mt(Array.prototype.pop)
  , Oi = mt(Array.prototype.push)
  , nB = mt(Array.prototype.splice)
  , Tu = mt(String.prototype.toLowerCase)
  , Uf = mt(String.prototype.toString)
  , xx = mt(String.prototype.match)
  , Pi = mt(String.prototype.replace)
  , oB = mt(String.prototype.indexOf)
  , iB = mt(String.prototype.trim)
  , Xt = mt(Object.prototype.hasOwnProperty)
  , ft = mt(RegExp.prototype.test)
  , Ni = aB(TypeError);
function mt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      n[o - 1] = arguments[o];
    return Hf(e, t, n)
  }
}
a(mt, "unapply");
function aB(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Gf(e, r)
  }
}
a(aB, "unconstruct");
function te(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tu;
  Ax && Ax(e, null);
  let n = t.length;
  for (; n--;) {
    let o = t[n];
    if (typeof o == "string") {
      let i = r(o);
      i !== o && (JF(t) || (t[n] = i),
        o = i)
    }
    e[o] = !0
  }
  return e
}
a(te, "addToSet");
function sB(e) {
  for (let t = 0; t < e.length; t++)
    Xt(e, t) || (e[t] = null);
  return e
}
a(sB, "cleanArray");
function Rr(e) {
  let t = Mx(null);
  for (let [r, n] of Ix(e))
    Xt(e, r) && (Array.isArray(n) ? t[r] = sB(n) : n && typeof n == "object" && n.constructor === Object ? t[r] = Rr(n) : t[r] = n);
  return t
}
a(Rr, "clone");
function wi(e, t) {
  for (; e !== null;) {
    let n = tB(e, t);
    if (n) {
      if (n.get)
        return mt(n.get);
      if (typeof n.value == "function")
        return mt(n.value)
    }
    e = eB(e)
  }
  function r() {
    return null
  }
  return a(r, "fallbackValue"),
    r
}
a(wi, "lookupGetter");
var Cx = pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
  , Ff = pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
  , Bf = pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
  , uB = pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
  , Vf = pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
  , lB = pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
  , Rx = pt(["#text"])
  , Ox = pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
  , kf = pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
  , Px = pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
  , Eu = pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
  , cB = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
  , dB = Ut(/<%[\w\W]*|[\w\W]*%>/gm)
  , fB = Ut(/\$\{[\w\W]*/gm)
  , pB = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/)
  , mB = Ut(/^aria-[\-\w]+$/)
  , Lx = Ut(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
  , _B = Ut(/^(?:\w+script|data):/i)
  , hB = Ut(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
  , $x = Ut(/^html$/i)
  , gB = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i)
  , Nx = Object.freeze({
    __proto__: null,
    ARIA_ATTR: mB,
    ATTR_WHITESPACE: hB,
    CUSTOM_ELEMENT: gB,
    DATA_ATTR: pB,
    DOCTYPE_NAME: $x,
    ERB_EXPR: dB,
    IS_ALLOWED_URI: Lx,
    IS_SCRIPT_OR_DATA: _B,
    MUSTACHE_EXPR: cB,
    TMPLIT_EXPR: fB
  })
  , Ii = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  }
  , EB = a(function() {
    return typeof window == "undefined" ? null : window
  }, "getGlobal")
  , TB = a(function(t, r) {
    if (typeof t != "object" || typeof t.createPolicy != "function")
      return null;
    let n = null
      , o = "data-tt-policy-suffix";
    r && r.hasAttribute(o) && (n = r.getAttribute(o));
    let i = "dompurify" + (n ? "#" + n : "");
    try {
      return t.createPolicy(i, {
        createHTML(s) {
          return s
        },
        createScriptURL(s) {
          return s
        }
      })
    } catch (s) {
      return console.warn("TrustedTypes policy " + i + " could not be created."),
        null
    }
  }, "_createTrustedTypesPolicy")
  , wx = a(function() {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    }
  }, "_createHooksMap");
function Dx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EB()
    , t = a(V => Dx(V), "DOMPurify");
  if (t.version = "3.2.6",
    t.removed = [],
    !e || !e.document || e.document.nodeType !== Ii.document || !e.Element)
    return t.isSupported = !1,
      t;
  let { document: r } = e
    , n = r
    , o = n.currentScript
    , { DocumentFragment: i, HTMLTemplateElement: s, Node: l, Element: d, NodeFilter: u, NamedNodeMap: f = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: p, DOMParser: _, trustedTypes: S } = e
    , g = d.prototype
    , T = wi(g, "cloneNode")
    , b = wi(g, "remove")
    , x = wi(g, "nextSibling")
    , A = wi(g, "childNodes")
    , P = wi(g, "parentNode");
  if (typeof s == "function") {
    let V = r.createElement("template");
    V.content && V.content.ownerDocument && (r = V.content.ownerDocument)
  }
  let L, D = "", { implementation: K, createNodeIterator: I, createDocumentFragment: z, getElementsByTagName: ue } = r, { importNode: Ee } = n, de = wx();
  t.isSupported = typeof Ix == "function" && typeof P == "function" && K && K.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: j, ERB_EXPR: J, TMPLIT_EXPR: oe, DATA_ATTR: N, ARIA_ATTR: q, IS_SCRIPT_OR_DATA: ae, ATTR_WHITESPACE: k, CUSTOM_ELEMENT: re } = Nx
    , { IS_ALLOWED_URI: ce } = Nx
    , ne = null
    , ye = te({}, [...Cx, ...Ff, ...Bf, ...Vf, ...Rx])
    , ee = null
    , Ve = te({}, [...Ox, ...kf, ...Px, ...Eu])
    , Z = Object.seal(Mx(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    }))
    , ht = null
    , We = null
    , rn = !0
    , pr = !0
    , nn = !1
    , wt = !0
    , qt = !1
    , It = !0
    , Mt = !1
    , ra = !1
    , na = !1
    , on = !1
    , m = !1
    , E = !1
    , y = !0
    , $ = !1
    , w = "user-content-"
    , O = !0
    , B = !1
    , Q = {}
    , Te = null
    , Re = te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"])
    , kt = null
    , oa = te({}, ["audio", "video", "img", "source", "image", "track"])
    , an = null
    , Bn = te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
    , Vn = "http://www.w3.org/1998/Math/MathML"
    , sn = "http://www.w3.org/2000/svg"
    , Ht = "http://www.w3.org/1999/xhtml"
    , mr = Ht
    , Zu = !1
    , Qu = null
    , GO = te({}, [Vn, sn, Ht], Uf)
    , ia = te({}, ["mi", "mo", "mn", "ms", "mtext"])
    , aa = te({}, ["annotation-xml"])
    , YO = te({}, ["title", "style", "font", "a", "script"])
    , Fo = null
    , jO = ["application/xhtml+xml", "text/html"]
    , zO = "text/html"
    , ke = null
    , kn = null
    , WO = r.createElement("form")
    , zp = a(function(h) {
      return h instanceof RegExp || h instanceof Function
    }, "isRegexOrFunction")
    , Ju = a(function() {
      let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!(kn && kn === h)) {
        if ((!h || typeof h != "object") && (h = {}),
          h = Rr(h),
          Fo = jO.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? zO : h.PARSER_MEDIA_TYPE,
          ke = Fo === "application/xhtml+xml" ? Uf : Tu,
          ne = Xt(h, "ALLOWED_TAGS") ? te({}, h.ALLOWED_TAGS, ke) : ye,
          ee = Xt(h, "ALLOWED_ATTR") ? te({}, h.ALLOWED_ATTR, ke) : Ve,
          Qu = Xt(h, "ALLOWED_NAMESPACES") ? te({}, h.ALLOWED_NAMESPACES, Uf) : GO,
          an = Xt(h, "ADD_URI_SAFE_ATTR") ? te(Rr(Bn), h.ADD_URI_SAFE_ATTR, ke) : Bn,
          kt = Xt(h, "ADD_DATA_URI_TAGS") ? te(Rr(oa), h.ADD_DATA_URI_TAGS, ke) : oa,
          Te = Xt(h, "FORBID_CONTENTS") ? te({}, h.FORBID_CONTENTS, ke) : Re,
          ht = Xt(h, "FORBID_TAGS") ? te({}, h.FORBID_TAGS, ke) : Rr({}),
          We = Xt(h, "FORBID_ATTR") ? te({}, h.FORBID_ATTR, ke) : Rr({}),
          Q = Xt(h, "USE_PROFILES") ? h.USE_PROFILES : !1,
          rn = h.ALLOW_ARIA_ATTR !== !1,
          pr = h.ALLOW_DATA_ATTR !== !1,
          nn = h.ALLOW_UNKNOWN_PROTOCOLS || !1,
          wt = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1,
          qt = h.SAFE_FOR_TEMPLATES || !1,
          It = h.SAFE_FOR_XML !== !1,
          Mt = h.WHOLE_DOCUMENT || !1,
          on = h.RETURN_DOM || !1,
          m = h.RETURN_DOM_FRAGMENT || !1,
          E = h.RETURN_TRUSTED_TYPE || !1,
          na = h.FORCE_BODY || !1,
          y = h.SANITIZE_DOM !== !1,
          $ = h.SANITIZE_NAMED_PROPS || !1,
          O = h.KEEP_CONTENT !== !1,
          B = h.IN_PLACE || !1,
          ce = h.ALLOWED_URI_REGEXP || Lx,
          mr = h.NAMESPACE || Ht,
          ia = h.MATHML_TEXT_INTEGRATION_POINTS || ia,
          aa = h.HTML_INTEGRATION_POINTS || aa,
          Z = h.CUSTOM_ELEMENT_HANDLING || {},
          h.CUSTOM_ELEMENT_HANDLING && zp(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Z.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
          h.CUSTOM_ELEMENT_HANDLING && zp(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Z.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
          h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Z.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
          qt && (pr = !1),
          m && (on = !0),
          Q && (ne = te({}, Rx),
            ee = [],
            Q.html === !0 && (te(ne, Cx),
              te(ee, Ox)),
            Q.svg === !0 && (te(ne, Ff),
              te(ee, kf),
              te(ee, Eu)),
            Q.svgFilters === !0 && (te(ne, Bf),
              te(ee, kf),
              te(ee, Eu)),
            Q.mathMl === !0 && (te(ne, Vf),
              te(ee, Px),
              te(ee, Eu))),
          h.ADD_TAGS && (ne === ye && (ne = Rr(ne)),
            te(ne, h.ADD_TAGS, ke)),
          h.ADD_ATTR && (ee === Ve && (ee = Rr(ee)),
            te(ee, h.ADD_ATTR, ke)),
          h.ADD_URI_SAFE_ATTR && te(an, h.ADD_URI_SAFE_ATTR, ke),
          h.FORBID_CONTENTS && (Te === Re && (Te = Rr(Te)),
            te(Te, h.FORBID_CONTENTS, ke)),
          O && (ne["#text"] = !0),
          Mt && te(ne, ["html", "head", "body"]),
          ne.table && (te(ne, ["tbody"]),
            delete ht.tbody),
          h.TRUSTED_TYPES_POLICY) {
          if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
            throw Ni('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
          if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
            throw Ni('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
          L = h.TRUSTED_TYPES_POLICY,
            D = L.createHTML("")
        } else
          L === void 0 && (L = TB(S, o)),
            L !== null && typeof D == "string" && (D = L.createHTML(""));
        pt && pt(h),
          kn = h
      }
    }, "_parseConfig")
    , Wp = te({}, [...Ff, ...Bf, ...uB])
    , Kp = te({}, [...Vf, ...lB])
    , KO = a(function(h) {
      let R = P(h);
      (!R || !R.tagName) && (R = {
        namespaceURI: mr,
        tagName: "template"
      });
      let F = Tu(h.tagName)
        , Se = Tu(R.tagName);
      return Qu[h.namespaceURI] ? h.namespaceURI === sn ? R.namespaceURI === Ht ? F === "svg" : R.namespaceURI === Vn ? F === "svg" && (Se === "annotation-xml" || ia[Se]) : !!Wp[F] : h.namespaceURI === Vn ? R.namespaceURI === Ht ? F === "math" : R.namespaceURI === sn ? F === "math" && aa[Se] : !!Kp[F] : h.namespaceURI === Ht ? R.namespaceURI === sn && !aa[Se] || R.namespaceURI === Vn && !ia[Se] ? !1 : !Kp[F] && (YO[F] || !Wp[F]) : !!(Fo === "application/xhtml+xml" && Qu[h.namespaceURI]) : !1
    }, "_checkValidNamespace")
    , Zt = a(function(h) {
      Oi(t.removed, {
        element: h
      });
      try {
        P(h).removeChild(h)
      } catch (R) {
        b(h)
      }
    }, "_forceRemove")
    , Hn = a(function(h, R) {
      try {
        Oi(t.removed, {
          attribute: R.getAttributeNode(h),
          from: R
        })
      } catch (F) {
        Oi(t.removed, {
          attribute: null,
          from: R
        })
      }
      if (R.removeAttribute(h),
        h === "is")
        if (on || m)
          try {
            Zt(R)
          } catch (F) { }
        else
          try {
            R.setAttribute(h, "")
          } catch (F) { }
    }, "_removeAttribute")
    , Xp = a(function(h) {
      let R = null
        , F = null;
      if (na)
        h = "<remove></remove>" + h;
      else {
        let Ue = xx(h, /^[\r\n\t ]+/);
        F = Ue && Ue[0]
      }
      Fo === "application/xhtml+xml" && mr === Ht && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
      let Se = L ? L.createHTML(h) : h;
      if (mr === Ht)
        try {
          R = new _().parseFromString(Se, Fo)
        } catch (Ue) { }
      if (!R || !R.documentElement) {
        R = K.createDocument(mr, "template", null);
        try {
          R.documentElement.innerHTML = Zu ? D : Se
        } catch (Ue) { }
      }
      let Je = R.body || R.documentElement;
      return h && F && Je.insertBefore(r.createTextNode(F), Je.childNodes[0] || null),
        mr === Ht ? ue.call(R, Mt ? "html" : "body")[0] : Mt ? R.documentElement : Je
    }, "_initDocument")
    , qp = a(function(h) {
      return I.call(h.ownerDocument || h, h, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION, null)
    }, "_createNodeIterator")
    , el = a(function(h) {
      return h instanceof p && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof f) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function")
    }, "_isClobbered")
    , Zp = a(function(h) {
      return typeof l == "function" && h instanceof l
    }, "_isNode");
  function _r(V, h, R) {
    gu(V, F => {
      F.call(t, h, R, kn)
    }
    )
  }
  a(_r, "_executeHooks");
  let Qp = a(function(h) {
    let R = null;
    if (_r(de.beforeSanitizeElements, h, null),
      el(h))
      return Zt(h),
        !0;
    let F = ke(h.nodeName);
    if (_r(de.uponSanitizeElement, h, {
      tagName: F,
      allowedTags: ne
    }),
      It && h.hasChildNodes() && !Zp(h.firstElementChild) && ft(/<[/\w!]/g, h.innerHTML) && ft(/<[/\w!]/g, h.textContent) || h.nodeType === Ii.progressingInstruction || It && h.nodeType === Ii.comment && ft(/<[/\w]/g, h.data))
      return Zt(h),
        !0;
    if (!ne[F] || ht[F]) {
      if (!ht[F] && em(F) && (Z.tagNameCheck instanceof RegExp && ft(Z.tagNameCheck, F) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(F)))
        return !1;
      if (O && !Te[F]) {
        let Se = P(h) || h.parentNode
          , Je = A(h) || h.childNodes;
        if (Je && Se) {
          let Ue = Je.length;
          for (let gt = Ue - 1; gt >= 0; --gt) {
            let hr = T(Je[gt], !0);
            hr.__removalCount = (h.__removalCount || 0) + 1,
              Se.insertBefore(hr, x(h))
          }
        }
      }
      return Zt(h),
        !0
    }
    return h instanceof d && !KO(h) || (F === "noscript" || F === "noembed" || F === "noframes") && ft(/<\/no(script|embed|frames)/i, h.innerHTML) ? (Zt(h),
      !0) : (qt && h.nodeType === Ii.text && (R = h.textContent,
        gu([j, J, oe], Se => {
          R = Pi(R, Se, " ")
        }
        ),
        h.textContent !== R && (Oi(t.removed, {
          element: h.cloneNode()
        }),
          h.textContent = R)),
        _r(de.afterSanitizeElements, h, null),
        !1)
  }, "_sanitizeElements")
    , Jp = a(function(h, R, F) {
      if (y && (R === "id" || R === "name") && (F in r || F in WO))
        return !1;
      if (!(pr && !We[R] && ft(N, R))) {
        if (!(rn && ft(q, R))) {
          if (!ee[R] || We[R]) {
            if (!(em(h) && (Z.tagNameCheck instanceof RegExp && ft(Z.tagNameCheck, h) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(h)) && (Z.attributeNameCheck instanceof RegExp && ft(Z.attributeNameCheck, R) || Z.attributeNameCheck instanceof Function && Z.attributeNameCheck(R)) || R === "is" && Z.allowCustomizedBuiltInElements && (Z.tagNameCheck instanceof RegExp && ft(Z.tagNameCheck, F) || Z.tagNameCheck instanceof Function && Z.tagNameCheck(F))))
              return !1
          } else if (!an[R]) {
            if (!ft(ce, Pi(F, k, ""))) {
              if (!((R === "src" || R === "xlink:href" || R === "href") && h !== "script" && oB(F, "data:") === 0 && kt[h])) {
                if (!(nn && !ft(ae, Pi(F, k, "")))) {
                  if (F)
                    return !1
                }
              }
            }
          }
        }
      }
      return !0
    }, "_isValidAttribute")
    , em = a(function(h) {
      return h !== "annotation-xml" && xx(h, re)
    }, "_isBasicCustomElement")
    , tm = a(function(h) {
      _r(de.beforeSanitizeAttributes, h, null);
      let { attributes: R } = h;
      if (!R || el(h))
        return;
      let F = {
        attrName: "",
        attrValue: "",
        keepAttr: !0,
        allowedAttributes: ee,
        forceKeepAttr: void 0
      }
        , Se = R.length;
      for (; Se--;) {
        let Je = R[Se]
          , { name: Ue, namespaceURI: gt, value: hr } = Je
          , Bo = ke(Ue)
          , tl = hr
          , et = Ue === "value" ? tl : iB(tl);
        if (F.attrName = Bo,
          F.attrValue = et,
          F.keepAttr = !0,
          F.forceKeepAttr = void 0,
          _r(de.uponSanitizeAttribute, h, F),
          et = F.attrValue,
          $ && (Bo === "id" || Bo === "name") && (Hn(Ue, h),
            et = w + et),
          It && ft(/((--!?|])>)|<\/(style|title)/i, et)) {
          Hn(Ue, h);
          continue
        }
        if (F.forceKeepAttr)
          continue;
        if (!F.keepAttr) {
          Hn(Ue, h);
          continue
        }
        if (!wt && ft(/\/>/i, et)) {
          Hn(Ue, h);
          continue
        }
        qt && gu([j, J, oe], nm => {
          et = Pi(et, nm, " ")
        }
        );
        let rm = ke(h.nodeName);
        if (!Jp(rm, Bo, et)) {
          Hn(Ue, h);
          continue
        }
        if (L && typeof S == "object" && typeof S.getAttributeType == "function" && !gt)
          switch (S.getAttributeType(rm, Bo)) {
            case "TrustedHTML":
              {
                et = L.createHTML(et);
                break
              }
            case "TrustedScriptURL":
              {
                et = L.createScriptURL(et);
                break
              }
          }
        if (et !== tl)
          try {
            gt ? h.setAttributeNS(gt, Ue, et) : h.setAttribute(Ue, et),
              el(h) ? Zt(h) : bx(t.removed)
          } catch (nm) {
            Hn(Ue, h)
          }
      }
      _r(de.afterSanitizeAttributes, h, null)
    }, "_sanitizeAttributes")
    , XO = a(function V(h) {
      let R = null
        , F = qp(h);
      for (_r(de.beforeSanitizeShadowDOM, h, null); R = F.nextNode();)
        _r(de.uponSanitizeShadowNode, R, null),
          Qp(R),
          tm(R),
          R.content instanceof i && V(R.content);
      _r(de.afterSanitizeShadowDOM, h, null)
    }, "_sanitizeShadowDOM");
  return t.sanitize = function(V) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , R = null
      , F = null
      , Se = null
      , Je = null;
    if (Zu = !V,
      Zu && (V = "<!-->"),
      typeof V != "string" && !Zp(V))
      if (typeof V.toString == "function") {
        if (V = V.toString(),
          typeof V != "string")
          throw Ni("dirty is not a string, aborting")
      } else
        throw Ni("toString is not a function");
    if (!t.isSupported)
      return V;
    if (ra || Ju(h),
      t.removed = [],
      typeof V == "string" && (B = !1),
      B) {
      if (V.nodeName) {
        let hr = ke(V.nodeName);
        if (!ne[hr] || ht[hr])
          throw Ni("root node is forbidden and cannot be sanitized in-place")
      }
    } else if (V instanceof l)
      R = Xp("<!---->"),
        F = R.ownerDocument.importNode(V, !0),
        F.nodeType === Ii.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? R = F : R.appendChild(F);
    else {
      if (!on && !qt && !Mt && V.indexOf("<") === -1)
        return L && E ? L.createHTML(V) : V;
      if (R = Xp(V),
        !R)
        return on ? null : E ? D : ""
    }
    R && na && Zt(R.firstChild);
    let Ue = qp(B ? V : R);
    for (; Se = Ue.nextNode();)
      Qp(Se),
        tm(Se),
        Se.content instanceof i && XO(Se.content);
    if (B)
      return V;
    if (on) {
      if (m)
        for (Je = z.call(R.ownerDocument); R.firstChild;)
          Je.appendChild(R.firstChild);
      else
        Je = R;
      return (ee.shadowroot || ee.shadowrootmode) && (Je = Ee.call(n, Je, !0)),
        Je
    }
    let gt = Mt ? R.outerHTML : R.innerHTML;
    return Mt && ne["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && ft($x, R.ownerDocument.doctype.name) && (gt = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + gt),
      qt && gu([j, J, oe], hr => {
        gt = Pi(gt, hr, " ")
      }
      ),
      L && E ? L.createHTML(gt) : gt
  }
    ,
    t.setConfig = function() {
      let V = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      Ju(V),
        ra = !0
    }
    ,
    t.clearConfig = function() {
      kn = null,
        ra = !1
    }
    ,
    t.isValidAttribute = function(V, h, R) {
      kn || Ju({});
      let F = ke(V)
        , Se = ke(h);
      return Jp(F, Se, R)
    }
    ,
    t.addHook = function(V, h) {
      typeof h == "function" && Oi(de[V], h)
    }
    ,
    t.removeHook = function(V, h) {
      if (h !== void 0) {
        let R = rB(de[V], h);
        return R === -1 ? void 0 : nB(de[V], R, 1)[0]
      }
      return bx(de[V])
    }
    ,
    t.removeHooks = function(V) {
      de[V] = []
    }
    ,
    t.removeAllHooks = function() {
      de = wx()
    }
    ,
    t
}
a(Dx, "createDOMPurify");
var Mi = Dx();
c();
var xo = (f => (f.country = "country",
  f.recipient = "recipient",
  f.address1 = "address1",
  f.address2 = "address2",
  f.province = "province",
  f.city = "city",
  f.zip = "zip",
  f.phone = "phone",
  f.firstName = "first_name",
  f.lastName = "last_name",
  f))(xo || {});
c();
var Co = U(Ge());
c();
var Ux = "9697434910825de4559a1b818775dd00148ce89b4c6824818868f79891481f60"
  , vB = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable selector-max-specificity */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-max-class */
/* stylelint-disable at-rule-no-unknown */

@keyframes _blur_stahb_1 {
  from {
    filter: blur(8px);
  }

  to {
    filter: blur(0);
  }
}

:root {
  --form-container-background-image: none;
  --min-form-width: 335px;
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage {
    --preview-scale: 1.9;
  }
}

._formContainer_stahb_30 {
  --col-size: 320px;
  position: relative;
  margin: 2px; /* Prevents short forms clipping */
  min-width: var(--min-form-width);
  box-shadow: var(--container-shadow);
  border-radius: var(--container-border-radius);
  background-color: var(--container-background-color);
  max-height: 100%;
  overflow-y: auto;
  overflow: hidden;
}

.isPreview ._formContainer_stahb_30 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.15);
}

.isPreview._inline_stahb_47 ._formContainer_stahb_30 {
  box-shadow: none;
}

/* Checkered background is set for inline form behind transparent background */
.isPreview:not(._floating_stahb_52) ._formContainer_stahb_30::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--container-border-radius);
  background: repeating-conic-gradient(
      var(--p-color-bg-surface) 0% 25%,
      var(--p-color-bg-surface-secondary) 0% 50%
    )
    50% / var(--p-space-400) var(--p-space-400);
}

/* Custom media query to match when preview breaks into 1 column */
@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage ._formContainer_stahb_30 {
    --col-size: 187px;
  }
}

._formContainerImage_stahb_75 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Inline */
._inline_stahb_47 {
  display: grid;
  justify-items: var(--inline-form-alignment);
  align-content: center;
  height: 100%;
  width: 100%;
  background-color: var(--container-background-color);
  overflow: hidden;
}

._inline_stahb_47 ._formContainer_stahb_30 {
  min-width: unset;
  max-width: var(--inline-container-max-width);
  width: 100%;
  min-height: var(--inline-container-min-height);
}

/* Overlay */
._overlay_stahb_100 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes _overlay-background-fade-in_stahb_1 {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: var(--forms-overlay-background-opacity);
    visibility: visible;
  }
}

._overlay_stahb_100 ._overlayBackground_stahb_123,
._overlay_stahb_100 ._overlayBackground_stahb_123:empty {
  position: absolute;
  display: block;
  background-color: var(--forms-overlay-background-color);
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  animation: _overlay-background-fade-in_stahb_1 0.3s forwards;
}

@media screen and (max-width: 768px) {
  :not(.isPreview)._floating_stahb_52 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

:not(.isPreview)._floating_stahb_52 ._grid_stahb_148,
._overlay_stahb_100 ._grid_stahb_148 {
  max-height: 90vh;
  overflow-y: auto;
}

/* Grid */
._grid_stahb_148 {
  display: grid;
  grid-template-columns: repeat(2, var(--col-size));
  max-width: calc(2 * var(--col-size));
}

._noImage_stahb_161 {
  display: block;
  max-width: var(--container-max-w);
}

._background_stahb_166 {
  grid-template-columns: minmax(var(--min-form-width), var(--container-max-w));
  max-width: var(--container-max-w);
  min-width: var(--min-form-width);
}

._background_stahb_166 ._gridItem_stahb_172:nth-child(1) {
  grid-column: 1;
  display: grid;
  border-radius: var(--container-border-radius);
}

._background_stahb_166 ._gridItem_stahb_172:nth-child(1)::before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: var(--form-container-background-image);
  background-size: var(--form-container-background-size);
  background-repeat: no-repeat;
  background-position: center;
  opacity: var(--form-container-background-opacity);
}

._background_stahb_166 ._gridItem_stahb_172:nth-child(2) {
  grid-column: 1;
  z-index: 1;
}

._grid_stahb_148._left_stahb_195 {
  grid-template-areas: 'image content';
}

._grid_stahb_148._left_stahb_195 ._gridItem_stahb_172:nth-child(1) {
  border-radius: var(--container-border-radius) 0 0
    var(--container-border-radius);
}

._grid_stahb_148._right_stahb_204 {
  grid-template-areas: 'content image';
}

._grid_stahb_148._right_stahb_204 ._gridItem_stahb_172:nth-child(1) {
  border-radius: 0 var(--container-border-radius) var(--container-border-radius)
    0;
}

@media screen and (max-width: 768px) {
  ._grid_stahb_148._left_stahb_195,
  ._grid_stahb_148._right_stahb_204 {
    grid-template-columns: 1fr;
    grid-template-rows: 320px min-content;
    max-width: 320px;
    grid-template-areas:
      'image'
      'content';
  }

  ._grid_stahb_148._left_stahb_195 ._gridItem_stahb_172:nth-child(1),
  ._grid_stahb_148._right_stahb_204 ._gridItem_stahb_172:nth-child(1) {
    border-radius: var(--container-border-radius) var(--container-border-radius)
      0 0;
  }
}

._gridItem_stahb_172:nth-child(1) {
  grid-area: image;
  overflow: hidden;
  filter: blur(0);
}

._gridItem_stahb_172:nth-child(1):not(._imageLoaded_stahb_237) {
  animation: _blur_stahb_1 0.5s forwards;
}

._imageLoading_stahb_241 {
  filter: blur(8px);
}

._gridItem_stahb_172:nth-child(2) {
  grid-area: content;
  z-index: 1;
}

._gridItem_stahb_172,
._gridItem_stahb_172:empty {
  display: block;
  background-size: cover;
  background-position: center;
}

._gridItemContent_stahb_257 {
  padding: var(--forms-padding-top) var(--forms-padding-right)
    var(--forms-padding-bottom) var(--forms-padding-left);
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage ._gridItemContent_stahb_257 {
    padding: calc(var(--forms-padding-top) / var(--preview-scale))
      calc(var(--forms-padding-right) / var(--preview-scale))
      calc(var(--forms-padding-bottom) / var(--preview-scale))
      calc(var(--forms-padding-left) / var(--preview-scale));
  }
}

._formContainer_stahb_30._tight_stahb_271 {
  --spacing-size-y: 20px;
  --spacing-size-x: 20px;
}

@media screen and (max-width: 490px) {
  ._formContainer_stahb_30 {
    justify-self: center;
  }
}

._formContainerCloseButtonPosition_stahb_282 {
  position: absolute;
  z-index: 3;
  top: calc(var(--forms-padding-top) - 5px);
  right: calc(var(--forms-padding-right));
  line-height: 0;
}

._grid_stahb_148._left_stahb_195 ._formContainerCloseButtonPosition_stahb_282,
._grid_stahb_148._right_stahb_204 ._formContainerCloseButtonPosition_stahb_282 {
  top: calc(var(--forms-padding-top) - 14px);
  right: calc(var(--forms-padding-right) - 14px);
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage ._formContainerCloseButtonPosition_stahb_282 {
    top: calc((var(--forms-padding-top) - 14px) / var(--preview-scale));
    right: calc((var(--forms-padding-right) - 14px) / var(--preview-scale));
  }

  /* stylelint-disable-next-line selector-max-combinators */
  .isPreview.isPreview--withImage
    ._formContainerCloseButtonPosition_stahb_282
    svg {
    width: 6px;
    height: 6px;
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Ux) || e.set(Ux, vB.replace(/:root/g, ":host"))
  }
}
)();
var ut = {
  sm: "490px",
  md: "768px",
  previewDesktop: "893px",
  formContainer: "_formContainer_stahb_30",
  inline: "_inline_stahb_47",
  floating: "_floating_stahb_52",
  formContainerImage: "_formContainerImage_stahb_75",
  overlay: "_overlay_stahb_100",
  overlayBackground: "_overlayBackground_stahb_123",
  overlayBackgroundFadeIn: "_overlay-background-fade-in_stahb_1",
  grid: "_grid_stahb_148",
  noImage: "_noImage_stahb_161",
  background: "_background_stahb_166",
  gridItem: "_gridItem_stahb_172",
  left: "_left_stahb_195",
  right: "_right_stahb_204",
  imageLoaded: "_imageLoaded_stahb_237",
  blur: "_blur_stahb_1",
  imageLoading: "_imageLoading_stahb_241",
  gridItemContent: "_gridItemContent_stahb_257",
  tight: "_tight_stahb_271",
  formContainerCloseButtonPosition: "_formContainerCloseButtonPosition_stahb_282"
};
var SB = a(({ onClose: e, ariaLabel: t, layout: r = "floating", isPreview: n = !1, image: o, hideOverlay: i = !1, ...s }) => {
  let l = (0,
    Co.useRef)(null)
    , { thumbnailLoading: d, imageLoaded: u, imageInlineStyles: f, thumbnailLoadingError: p } = m_()
    , _ = (0,
      Co.useCallback)(A => {
        A.key === "Escape" && e()
      }
        , [e]);
  if ((0,
    Co.useEffect)(() => {
      if (r === "overlay") {
        document.addEventListener("keydown", _, !1);
        let A = l.current;
        return l && l.current && l.current.addEventListener("click", e, !1),
          () => {
            document.removeEventListener("keydown", _, !1),
              l && A && A.removeEventListener("click", e, !1)
          }
      }
    }
      , [_, r, e]),
    o && d && !n)
    return null;
  let S = st({
    [ut.formContainer]: !0,
    [ut.grid]: !0,
    [ut[s.type || ""]]: s.type !== void 0,
    [ut.noImage]: !o || o && !o.url || o && p,
    [ut[(o == null ? void 0 : o.option) || ""]]: !!(o && o.url && !p && o.option)
  })
    , g = st({
      isPreview: n,
      "isPreview--withImage": !!(n && o && o.url && o.option !== "background"),
      withImage: !!(o && o.url && o.option !== "background"),
      [ut.inline]: r === "inline",
      [ut.overlay]: r === "overlay" && !i,
      [ut.floating]: r === "floating"
    })
    , T = r === "inline";
  return h("section", {
    className: g,
    ...T ? {} : {
      role: "dialog"
    },
    ...T ? {} : {
      "aria-modal": !0
    }
  }, r === "overlay" && !i && h("div", {
    className: ut.overlayBackground,
    ref: l,
    "data-testid": "overlay"
  }), h("section", {
    "data-sizing": "form-wrapper",
    role: "dialog",
    tabIndex: -1,
    "aria-modal": "true",
    "aria-label": t,
    "data-testid": "form-container",
    className: S
  }, h("div", {
    className: st({
      [ut.gridItem]: !0,
      [ut.imageLoaded]: u,
      [ut.imageLoading]: !u
    }),
    style: o && o.option !== "background" ? f : {},
    "data-testid": "image"
  }), h("div", {
    className: `${ut.gridItem} ${ut.gridItemContent}`
  }, s.children), r !== "inline" && h("div", {
    "data-testid": "btn-close-wrapper",
    className: ut.formContainerCloseButtonPosition
  }, h(uu, {
    onClick: e,
    filled: !!(o && (o != null && o.url) && (o == null ? void 0 : o.option) !== "no_image")
  }))))
}
  , "FormContainer")
  , vu = SB;
c();
var Fx = "77f52c5752102d285b8f7d09211d59a84e337865c17559bac4164b148b48eb92"
  , yB = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Fx) || e.set(Fx, yB.replace(/:root/g, ":host"))
  }
}
)();
var Yf = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
c();
var Bx = "8cc54b635ce1fc37dae40cdcf1609cbdf1a7800bc4ad009ca324c4484d67f422"
  , AB = `/* stylelint-disable declaration-no-important */

/*
Used to hide an element visually, but keeping it accessible for
accessibility tools.

styles referenced from GOV.UK design system
https://github.com/h5bp/main.css/issues/12#issuecomment-451965809
*/

._visuallyHidden_qplg2_11 {
  /* Need to make sure we override any existing styles. */
  position: absolute !important;

  /* Top position is required to prevent unexpected
     scrolling with Sheet component
     https://github.com/Shopify/polaris-react/pull/5208
  */
  top: 0;
  width: 1px !important;
  height: 1px !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
  clip-path: inset(50%) !important;
  border: 0 !important;
  white-space: nowrap !important;
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Bx) || e.set(Bx, AB.replace(/:root/g, ":host"))
  }
}
)();
var Vx = {
  visuallyHidden: "_visuallyHidden_qplg2_11"
};
var bB = a(({ children: e }) => h("span", {
  className: Vx.visuallyHidden
}, e), "VisuallyHidden")
  , Su = bB;
c();
c();
var kx = "ff871b1eb3b6ce35029db33ab21274e70c210bcc7c6af84736cbce0386dd2c8a"
  , xB = `@keyframes _spin_10n5y_7 {
  to {
    transform: rotate(1turn);
  }
}

._spinner_10n5y_7 {
  display: flex;

  --spinner-size: calc(
    var(--forms-base-font-size) * var(--forms-base-font-line-height)
  );
}

._spinner_10n5y_7 svg {
  animation: _spin_10n5y_7 0.5s linear infinite;
  height: var(--spinner-size);
  width: var(--spinner-size);
  fill: var(--button-text-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(kx) || e.set(kx, xB.replace(/:root/g, ":host"))
  }
}
)();
var Hx = {
  spinner: "_spinner_10n5y_7",
  spin: "_spin_10n5y_7"
};
var CB = a(({ accessibilityLabel: e, hasFocusableParent: t }) => {
  let r = h("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M20 10C20 11.9778 19.4135 13.9112 18.3147 15.5557C17.2159 17.2002 15.6541 18.4819 13.8268 19.2388C11.9996 19.9957 9.98891 20.1937 8.0491 19.8079C6.10929 19.422 4.32746 18.4696 2.92893 17.0711C1.53041 15.6725 0.577999 13.8907 0.192147 11.9509C-0.193705 10.0111 0.00432836 8.00043 0.761205 6.17317C1.51808 4.3459 2.79981 2.78412 4.4443 1.6853C6.08879 0.58649 8.02219 -2.35852e-08 10 0L10 2.49581C8.51581 2.49581 7.06495 2.93593 5.8309 3.7605C4.59684 4.58507 3.63501 5.75706 3.06703 7.12827C2.49906 8.49948 2.35045 10.0083 2.64 11.464C2.92955 12.9197 3.64426 14.2568 4.69374 15.3063C5.74322 16.3557 7.08034 17.0704 8.53601 17.36C9.99168 17.6495 11.5005 17.5009 12.8717 16.933C14.2429 16.365 15.4149 15.4032 16.2395 14.1691C17.0641 12.935 17.5042 11.4842 17.5042 10H20Z"
  }))
    , n = {
      role: "status"
    }
    , o = h(Su, null, e)
    , i = !t && !!e;
  return h(Fragment, null, h("span", {
    className: Hx.spinner,
    "data-testid": "spinner-icon"
  }, r), i && h("span", {
    ...n
  }, o))
}
  , "Spinner")
  , Gx = CB;
c();
var RB = ["p", "strong", "em", "a"]
  , OB = ["target", "href", "title"]
  , Li = {
    ALLOWED_TAGS: RB,
    ALLOWED_ATTR: OB
  };
c();
var At = U(Ge());
c();
var Yx = "19869d3f25c7571a8e5485d5a6bb71aaed13c9e557f06e6f61b9339420414fd0"
  , PB = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Yx) || e.set(Yx, PB.replace(/:root/g, ":host"))
  }
}
)();
var jx = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var jf = {
  "DD/MM/YYYY": {
    day: {
      order: 0,
      placeholder: "DD"
    },
    month: {
      order: 1,
      placeholder: "MM"
    },
    year: {
      order: 2,
      placeholder: "YYYY"
    }
  },
  "MM/DD/YYYY": {
    day: {
      order: 1,
      placeholder: "DD"
    },
    month: {
      order: 0,
      placeholder: "MM"
    },
    year: {
      order: 2,
      placeholder: "YYYY"
    }
  },
  "YYYY/MM/DD": {
    day: {
      order: 2,
      placeholder: "DD"
    },
    month: {
      order: 1,
      placeholder: "MM"
    },
    year: {
      order: 0,
      placeholder: "YYYY"
    }
  }
}
  , Wfe = jf["DD/MM/YYYY"];
function zx(e, t) {
  let r = e.split("/")
    , n = r[t.year.order]
    , o = r[t.month.order]
    , i = r[t.day.order]
    , s = new Date(`${n}/${o}/${i}`);
  return s.setHours(0, 0, 0, 0),
    s.getTime()
}
a(zx, "getDateTimeFromState");
var $e = a((e, t) => e.reduce((r, n) => {
  switch (n.name) {
    case "required":
      return {
        ...r,
        required: {
          value: !0,
          message: n.message
        }
      };
    case "minlength":
      return {
        ...r,
        minLength: {
          value: n.minimum,
          message: n.message
        }
      };
    case "maxlength":
      return {
        ...r,
        maxLength: {
          value: n.maximum,
          message: n.message
        }
      };
    case "pattern":
      return {
        ...r,
        pattern: {
          value: new RegExp(n.pattern),
          message: n.message
        }
      };
    case "maximum":
      return t ? {
        ...r,
        validate: {
          ...r.validate || {},
          maximum: a(o => zx(o, t) > n.maximum ? n.message : void 0, "maximum")
        }
      } : {
        ...r,
        max: {
          value: n.maximum,
          message: n.message
        }
      };
    case "minimum":
      return t ? {
        ...r,
        validate: {
          ...r.validate || {},
          minimum: a(o => zx(o, t) < n.minimum ? n.message : void 0, "minimum")
        }
      } : {
        ...r,
        min: {
          value: n.minimum,
          message: n.message
        }
      };
    default:
      return r
  }
}
  , {}), "convertFormValidators");
c();
var Wx = "01018ee2463994e702c43887b51bcf7b33fccc9c41f00d630b074b0bd44118e7"
  , wB = `._multiFieldLine_exnrn_1 {
  position: relative;
  display: inline-flex;
  gap: 8px;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -webkit-fill-available; /* Safari, Chrome, Edge */
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -moz-available; /* Firefox */
}

._nonMultineFieldLine_exnrn_11 {
  display: grid;
  gap: 8px;
}

._fieldContainer_exnrn_16 {
  width: 5rem;
  flex-grow: 1;
}

/* fixes misalignment of address fields when an image is present
  https://github.com/Shopify/forms/issues/6604
*/
/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
.withImage ._multiFieldLine_exnrn_1 {
  align-items: stretch;
}

/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
.withImage ._fieldContainer_exnrn_16 {
  min-width: 0;
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Wx) || e.set(Wx, wB.replace(/:root/g, ":host"))
  }
}
)();
var yu = {
  multiFieldLine: "_multiFieldLine_exnrn_1",
  nonMultineFieldLine: "_nonMultineFieldLine_exnrn_11",
  fieldContainer: "_fieldContainer_exnrn_16"
};
c();
var IB = "company"
  , Ro = "zone"
  , MB = "recipient"
  , zf = "{country}_{firstName}{lastName}_{company}_{address1}_{address2}_{city}{zip}_{phone}"
  , LB = ["country", "address1", "city"];
function $B(e, t, r, n) {
  var s;
  let o = t.replace("{", "").replace("}", "").trim()
    , i = o in r ? r[o].label : o;
  if (o === IB ? (o = "recipient",
    i = ((s = r[MB]) == null ? void 0 : s.label) || "Attention") : o === "province" && Ro in r && (i = r[Ro].label),
    o in xo) {
    let l = xo[o];
    return {
      type: "address",
      fieldType: "B2B",
      order: 0,
      validators: LB.includes(l) ? n : [],
      name: `${e}_${o === "province" ? Ro : l}`,
      label: i,
      addressField: l
    }
  }
  return null
}
a($B, "parseField");
function Kx(e, t, r, n) {
  return t.split("_").map(s => s.split("}").map(d => $B(e, d, r, n)).filter(d => !!d)).filter(s => s.length > 0)
}
a(Kx, "parseAddressFormat");
function Xx(e, t) {
  var n, o;
  return {
    billing_address: (n = t == null ? void 0 : t.sameAsBilling) == null ? void 0 : n.label,
    shipping_address: (o = t == null ? void 0 : t.sameAsShipping) == null ? void 0 : o.label
  }[e.name] || `Same as ${e.label}`
}
a(Xx, "getSameAsLabel");
c();
c();
c();
var De = U(Ge());
c();
function Wf(e, t) {
  let { key: r, altKey: n, ctrlKey: o, metaKey: i } = e;
  if (!t && ["ArrowDown", "ArrowUp", "Enter", " "].includes(r))
    return 5;
  if (r === "Home")
    return 2;
  if (r === "End")
    return 3;
  if (r === "Backspace" || r === "Clear" || r.length === 1 && r !== " " && !n && !o && !i)
    return 10;
  if (t) {
    if (r === "ArrowUp" && n)
      return 1;
    if (r === "ArrowDown" && !n)
      return 4;
    if (r === "ArrowUp")
      return 8;
    if (r === "PageUp")
      return 7;
    if (r === "PageDown")
      return 6;
    if (r === "Escape")
      return 0;
    if (r === "Enter" || r === " ")
      return 1
  }
}
a(Wf, "getActionFromKey");
function qx(e, t) {
  return e.filter(r => r.toLowerCase().indexOf(t.toLowerCase()) === 0)
}
a(qx, "filterOptions");
function Zx(e, t, r = 0) {
  let n = [...e.slice(r), ...e.slice(0, r)]
    , o = qx(n, t)[0]
    , i = a(s => s.every(l => l === s[0]), "allSameLetter");
  if (o)
    return [n.indexOf(o), n];
  if (i(t.split(""))) {
    let s = qx(n, t[0]);
    return [n.indexOf(s[0]), n]
  } else
    return [-1, n]
}
a(Zx, "getIndexByLetter");
c();
c();
var Qx = "415501b1b093c155a8ecb2f3c312d005a961497f44a5a2aa5521f78976523a41"
  , DB = `._error_1o4ef_1 {
  display: block;
  font: var(--forms-body-font);
  margin-top: 10px;
  color: var(--form-error-color);
  line-height: var(--forms-base-font-line-height);
}

@media screen and (min-width: preview-desktop) {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .isPreview.isPreview--withImage ._error_1o4ef_1 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
    margin: 0 0 calc(10px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(Qx) || e.set(Qx, DB.replace(/:root/g, ":host"))
  }
}
)();
var Jx = {
  error: "_error_1o4ef_1"
};
var Xr = a(({ children: e }) => h("output", {
  className: Jx.error,
  role: "alert",
  "aria-live": "polite"
}, e), "ValidationError");
c();
var eC = "4fb4ce5e919f3aed700fe99e5b4fd5a6add0204ff052663a6730f0059dda95f4"
  , UB = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

._selectContainer_1yit2_6 {
  min-width: 0;
}

._label_1yit2_10 {
  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin-bottom: 10px;
  margin-top: 0;
}

._arrowDownIcon_1yit2_19 {
  margin: auto;
  pointer-events: none;
  color: var(--form-text-color);
}

._selectToggleText_1yit2_25 {
  width: calc(100% - 20px);
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

._selectToggle_1yit2_25 {
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  text-align: left;
  max-height: 46px;
  padding: var(--form-field-padding);
  font: var(--forms-body-font);
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  box-shadow: var(--form-field-border);
  border: none;
  outline: none;
  border-radius: var(--form-field-border-radius);
}

._selectorError_1yit2_50 {
  box-shadow: 0 0 0 2px var(--form-error-color);
}

._selectToggle_1yit2_25:focus-visible {
  border: none;
  outline: none;
  box-shadow: var(--form-field-border-focused);
}

._dropdownContainer_1yit2_60 {
  position: absolute;
  overflow: hidden;
  box-shadow: var(--form-field-border);
  border-radius: var(--form-field-border-radius);
  outline: none;
  width: 100%;
}

._showDownwards_1yit2_69 {
  z-index: 4;
  top: 100%;
  left: 0;
  margin-top: 4px;
}

._showUpwards_1yit2_76 {
  z-index: 4;
  bottom: 100%;
  left: 0;
  margin-bottom: 4px;
}

._optionList_1yit2_83 {
  max-height: 160px;
  padding: 8px 7px;
  border: none;
  list-style: none;
  overflow-y: auto;
  background-color: var(--form-background-color);
  color: var(--form-text-color);
}

@media screen and (max-width: 768px) {
  ._optionList_1yit2_83 {
    max-height: 100px;
  }
}

._optionListItem_1yit2_99 {
  border-radius: var(--form-field-border-radius);
  cursor: pointer;
  margin-bottom: 5px;
}

._optionListItem_1yit2_99:last-child {
  margin-bottom: 0;
}

._optionListItemSelected_1yit2_109 {
  box-shadow: var(--form-field-border-focused);
}

._optionListItem_1yit2_99 > div {
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  padding: 9px 12px 8px;
  border-radius: var(--form-field-border-radius);
  width: 100%;
  box-sizing: border-box;
}

._optionListItemSelected_1yit2_109 > div,
._optionListItem_1yit2_99 > div:focus,
._optionListItem_1yit2_99:hover {
  background-color: var(--forms-accent-color-hovered-modifier);
  outline: 1px solid var(--forms-accent-color);
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage button._selectToggle_1yit2_25 {
    padding: calc(var(--form-field-padding) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
  }

  /* Fixes issue with country code dropdown cutoff with images https://github.com/Shopify/forms/issues/6483  */
  .withImage ._selectToggleText_1yit2_25 {
    width: 100%;
  }

  .withImage ._arrowDownIcon_1yit2_19 {
    display: none;
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(eC) || e.set(eC, UB.replace(/:root/g, ":host"))
  }
}
)();
var Rt = {
  previewDesktop: "893px",
  md: "768px",
  selectContainer: "_selectContainer_1yit2_6",
  label: "_label_1yit2_10",
  arrowDownIcon: "_arrowDownIcon_1yit2_19",
  selectToggleText: "_selectToggleText_1yit2_25",
  selectToggle: "_selectToggle_1yit2_25",
  selectorError: "_selectorError_1yit2_50",
  dropdownContainer: "_dropdownContainer_1yit2_60",
  showDownwards: "_showDownwards_1yit2_69",
  showUpwards: "_showUpwards_1yit2_76",
  optionList: "_optionList_1yit2_83",
  optionListItem: "_optionListItem_1yit2_99",
  optionListItemSelected: "_optionListItemSelected_1yit2_109"
};
c();
var FB = a(({ formContainer: e, activatorElement: t, name: r }) => {
  var l;
  let n = (e == null ? void 0 : e.scrollHeight) || 0
    , o = (t == null ? void 0 : t.clientHeight) || 0
    , i = ((l = t.parentElement) == null ? void 0 : l.offsetTop) || 0
    , s = n - i - o;
  return r.startsWith("custom#") && (i = (t == null ? void 0 : t.offsetTop) + (t == null ? void 0 : t.getElementsByTagName("p")[0].clientHeight) + 10,
    s = n - i - (t == null ? void 0 : t.getElementsByTagName("button")[0].clientHeight)),
  {
    offsetTop: i,
    offsetBottom: s
  }
}
  , "calculateOffsets")
  , Kf = a(async ({ root: e, selectorButtonElement: t, activatorElement: r, dropdownElement: n, setDropdownPosition: o, setMaxHeight: i, name: s }) => {
    let l;
    if (t) {
      await new Promise(_ => {
        l = e.querySelector('[data-sizing="form-wrapper"'),
          requestAnimationFrame(_)
      }
      );
      let d = (n == null ? void 0 : n.offsetHeight) || 160;
      if (!l || !r)
        return;
      let { offsetTop: u, offsetBottom: f } = FB({
        formContainer: l,
        activatorElement: r,
        name: s
      })
        , p = f > u ? f : u;
      f > u ? o({
        direction: "showDownwards"
      }) : o({
        direction: "showUpwards"
      }),
        d >= p && (d = p - 10),
        i(d),
        await new Promise(_ => {
          requestAnimationFrame(_)
        }
        )
    }
  }
    , "recalculateDropdownPosition");
var Oo = a(({ value: e, onChange: t, choices: r, name: n, error: o, label: i, valueRenderer: s, dropdownRelativeToSelf: l = !0, root: d = document }) => {
  var q, ae;
  let { input: { backgroundColor: u }, container: { backgroundColor: f } } = (0,
    De.useContext)(c_)
    , [p, _] = (0,
      De.useState)(!1)
    , S = (0,
      De.useRef)(p)
    , g = (0,
      De.useRef)(null)
    , T = (0,
      De.useRef)("")
    , b = (0,
      De.useRef)(((q = r[0]) == null ? void 0 : q.value) || "")
    , x = (0,
      De.useRef)(null)
    , A = (0,
      De.useRef)(null)
    , P = (0,
      De.useRef)(null)
    , [L, D] = (0,
      De.useState)({
        direction: "showDownwards"
      })
    , K = De.default.useCallback(k => {
      var re;
      k && ((re = d.getElementById(`select-${n}-${k}`)) == null || re.focus(),
        b.current = k)
    }
      , [d, n])
    , I = `${n}-selector-dropdown`;
  function z() {
    _(k => !k)
  }
  a(z, "toggleDropdown");
  function ue(k) {
    var ye;
    g.current && clearTimeout(g.current),
      g.current = setTimeout(() => {
        g.current = null,
          T.current = ""
      }
        , 500),
      T.current += k;
    let [re, ce] = Zx(r.map(ee => ee.label), T.current, r.findIndex(ee => ee.value === b.current) + 1)
      , ne = ce[re];
    re >= 0 ? K((ye = r.find(ee => ee.label === ne)) == null ? void 0 : ye.value) : (g.current = null,
      T.current = "")
  }
  a(ue, "handleSearchFocus");
  let Ee = a(k => {
    switch (Wf(k, p)) {
      case 1:
        {
          k.preventDefault(),
            z(),
            t(b.current);
          break
        }
      case 0:
        {
          k.preventDefault(),
            _(!1);
          break
        }
      case 5:
        {
          k.preventDefault(),
            _(!0);
          break
        }
      default:
        break
    }
  }
    , "selectorKeyHandler")
    , de = a((k, re) => {
      let ce = Wf(k, p)
        , ne = r.findIndex(ye => ye.value === re);
      switch (ce) {
        case 0:
          {
            k.preventDefault(),
              _(!1);
            break
          }
        case 2:
          {
            k.preventDefault(),
              K(r[0].value);
            break
          }
        case 3:
          {
            k.preventDefault(),
              K(r[r.length - 1].value);
            break
          }
        case 4:
          {
            k.preventDefault();
            let ye = r[ne + 1];
            K(ye ? ye.value : r[0].value);
            break
          }
        case 8:
          {
            k.preventDefault();
            let ye = r[ne - 1];
            K(ye ? ye.value : r[r.length - 1].value);
            break
          }
        case 10:
          {
            k.preventDefault(),
              ue(k.key);
            break
          }
        default:
          break
      }
    }
      , "optionKeyHandler");
  function j(k) {
    var re, ce, ne, ye;
    ((re = k.relatedTarget) == null ? void 0 : re.getAttribute("aria-controls")) !== I && ((ye = (ne = (ce = k.relatedTarget) == null ? void 0 : ce.parentElement) == null ? void 0 : ne.parentElement) == null ? void 0 : ye.id) !== I && (k.preventDefault(),
      setTimeout(() => {
        _(!1)
      }
        , 100))
  }
  a(j, "handleBlur"),
    (0,
      De.useEffect)(() => {
        p && !S.current && K(e || b.current),
          S.current = p
      }
        , [K, p, e]);
  let [J, oe] = (0,
    De.useState)(160);
  (0,
    De.useLayoutEffect)(() => {
      Kf({
        root: d,
        selectorButtonElement: x.current,
        activatorElement: A.current,
        dropdownElement: P.current,
        setDropdownPosition: D,
        setMaxHeight: oe,
        name: n
      })
    }
      , [x, P]);
  let N = (ae = r.find(k => k.value === e)) == null ? void 0 : ae.label;
  return h("div", {
    className: Rt.selectContainer,
    ref: A,
    style: {
      position: l ? "relative" : "static"
    }
  }, i && h("p", {
    className: Rt.label
  }, i), h("button", {
    type: "button",
    className: [Rt.selectToggle, o && Rt.selectorError].filter(Boolean).join(" "),
    onClick: async () => {
      await Kf({
        root: d,
        selectorButtonElement: x.current,
        activatorElement: A.current,
        dropdownElement: P.current,
        setDropdownPosition: D,
        setMaxHeight: oe,
        name: n
      }),
        z()
    }
    ,
    onKeyDown: k => Ee(k),
    "aria-expanded": p,
    "aria-controls": I,
    ref: x,
    style: {
      position: l ? "relative" : "static"
    }
  }, h("span", {
    className: Rt.selectToggleText
  }, s ? s(N) : N), h("span", {
    className: Rt.arrowDownIcon
  }, h("svg", {
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, h("path", {
    d: "M7.09832 0.470704L0.901685 0.470703C0.15069 0.470703 -0.269991 1.22421 0.193991 1.73831L3.29231 5.17126C3.65265 5.57052 4.34735 5.57052 4.70769 5.17126L7.80601 1.73831C8.26999 1.22421 7.84931 0.470704 7.09832 0.470704Z",
    fill: "#5C5F62"
  }))), p && h("div", {
    className: `${Rt.dropdownContainer} ${Rt[L.direction]}`,
    style: {
      maxHeight: `${J}px`,
      backgroundColor: u === "#FFFFFF00" ? f : u
    }
  }, h("div", {
    id: I,
    className: Rt.optionList,
    onBlur: j,
    ref: P
  }, r.sort((k, re) => k.order - re.order).map(k => h("div", {
    key: k.value,
    className: k.value === e ? `${Rt.optionListItemSelected} ${Rt.optionListItem}` : Rt.optionListItem
  }, h("div", {
    tabIndex: 0,
    id: `select-${n}-${k.value}`,
    role: "option",
    "aria-selected": k.value === e,
    onClick: re => {
      re.stopPropagation(),
        t(k.value),
        z()
    }
    ,
    onKeyDown: re => de(re, k.value)
  }, k.label)))))), o && typeof o == "string" && h(Xr, null, o))
}
  , "SelectInput");
c();
var tC = "a0a292202abe1b918740e11a6176fbd77900e400f0b22a30bd94814711048b00"
  , BB = `._formAddressRegionPlaceholder_hvvau_1 {
  color: var(--form-placeholder-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(tC) || e.set(tC, BB.replace(/:root/g, ":host"))
  }
}
)();
var rC = {
  formAddressRegionPlaceholder: "_formAddressRegionPlaceholder_hvvau_1"
};
function Xf({ regionList: e, selectedRegion: t, defaultValue: r, name: n, label: o, onRegionChange: i, control: s, root: l, dropdownRelativeToSelf: d = !0, rules: u }) {
  var p, _;
  let f = Ri({
    name: n,
    control: s,
    defaultValue: r,
    rules: u
  });
  return h(Oo, {
    root: l,
    name: n,
    error: (_ = (p = f == null ? void 0 : f.fieldState) == null ? void 0 : p.error) == null ? void 0 : _.message,
    dropdownRelativeToSelf: d,
    onChange: S => {
      f.field.onChange(S),
        i(S)
    }
    ,
    choices: e.map((S, g) => ({
      label: S.name,
      value: S.code,
      order: g
    })),
    value: t == null ? void 0 : t.code,
    valueRenderer: S => S || h("span", {
      className: rC.formAddressRegionPlaceholder
    }, o)
  })
}
a(Xf, "RegionSelector");
c();
var Ot = U(Ge());
c();
c();
c();
c();
var Au = {
  version: 4,
  country_calling_codes: {
    1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
    7: ["RU", "KZ"],
    20: ["EG"],
    27: ["ZA"],
    30: ["GR"],
    31: ["NL"],
    32: ["BE"],
    33: ["FR"],
    34: ["ES"],
    36: ["HU"],
    39: ["IT", "VA"],
    40: ["RO"],
    41: ["CH"],
    43: ["AT"],
    44: ["GB", "GG", "IM", "JE"],
    45: ["DK"],
    46: ["SE"],
    47: ["NO", "SJ"],
    48: ["PL"],
    49: ["DE"],
    51: ["PE"],
    52: ["MX"],
    53: ["CU"],
    54: ["AR"],
    55: ["BR"],
    56: ["CL"],
    57: ["CO"],
    58: ["VE"],
    60: ["MY"],
    61: ["AU", "CC", "CX"],
    62: ["ID"],
    63: ["PH"],
    64: ["NZ"],
    65: ["SG"],
    66: ["TH"],
    81: ["JP"],
    82: ["KR"],
    84: ["VN"],
    86: ["CN"],
    90: ["TR"],
    91: ["IN"],
    92: ["PK"],
    93: ["AF"],
    94: ["LK"],
    95: ["MM"],
    98: ["IR"],
    211: ["SS"],
    212: ["MA", "EH"],
    213: ["DZ"],
    216: ["TN"],
    218: ["LY"],
    220: ["GM"],
    221: ["SN"],
    222: ["MR"],
    223: ["ML"],
    224: ["GN"],
    225: ["CI"],
    226: ["BF"],
    227: ["NE"],
    228: ["TG"],
    229: ["BJ"],
    230: ["MU"],
    231: ["LR"],
    232: ["SL"],
    233: ["GH"],
    234: ["NG"],
    235: ["TD"],
    236: ["CF"],
    237: ["CM"],
    238: ["CV"],
    239: ["ST"],
    240: ["GQ"],
    241: ["GA"],
    242: ["CG"],
    243: ["CD"],
    244: ["AO"],
    245: ["GW"],
    246: ["IO"],
    247: ["AC"],
    248: ["SC"],
    249: ["SD"],
    250: ["RW"],
    251: ["ET"],
    252: ["SO"],
    253: ["DJ"],
    254: ["KE"],
    255: ["TZ"],
    256: ["UG"],
    257: ["BI"],
    258: ["MZ"],
    260: ["ZM"],
    261: ["MG"],
    262: ["RE", "YT"],
    263: ["ZW"],
    264: ["NA"],
    265: ["MW"],
    266: ["LS"],
    267: ["BW"],
    268: ["SZ"],
    269: ["KM"],
    290: ["SH", "TA"],
    291: ["ER"],
    297: ["AW"],
    298: ["FO"],
    299: ["GL"],
    350: ["GI"],
    351: ["PT"],
    352: ["LU"],
    353: ["IE"],
    354: ["IS"],
    355: ["AL"],
    356: ["MT"],
    357: ["CY"],
    358: ["FI", "AX"],
    359: ["BG"],
    370: ["LT"],
    371: ["LV"],
    372: ["EE"],
    373: ["MD"],
    374: ["AM"],
    375: ["BY"],
    376: ["AD"],
    377: ["MC"],
    378: ["SM"],
    380: ["UA"],
    381: ["RS"],
    382: ["ME"],
    383: ["XK"],
    385: ["HR"],
    386: ["SI"],
    387: ["BA"],
    389: ["MK"],
    420: ["CZ"],
    421: ["SK"],
    423: ["LI"],
    500: ["FK"],
    501: ["BZ"],
    502: ["GT"],
    503: ["SV"],
    504: ["HN"],
    505: ["NI"],
    506: ["CR"],
    507: ["PA"],
    508: ["PM"],
    509: ["HT"],
    590: ["GP", "BL", "MF"],
    591: ["BO"],
    592: ["GY"],
    593: ["EC"],
    594: ["GF"],
    595: ["PY"],
    596: ["MQ"],
    597: ["SR"],
    598: ["UY"],
    599: ["CW", "BQ"],
    670: ["TL"],
    672: ["NF"],
    673: ["BN"],
    674: ["NR"],
    675: ["PG"],
    676: ["TO"],
    677: ["SB"],
    678: ["VU"],
    679: ["FJ"],
    680: ["PW"],
    681: ["WF"],
    682: ["CK"],
    683: ["NU"],
    685: ["WS"],
    686: ["KI"],
    687: ["NC"],
    688: ["TV"],
    689: ["PF"],
    690: ["TK"],
    691: ["FM"],
    692: ["MH"],
    850: ["KP"],
    852: ["HK"],
    853: ["MO"],
    855: ["KH"],
    856: ["LA"],
    880: ["BD"],
    886: ["TW"],
    960: ["MV"],
    961: ["LB"],
    962: ["JO"],
    963: ["SY"],
    964: ["IQ"],
    965: ["KW"],
    966: ["SA"],
    967: ["YE"],
    968: ["OM"],
    970: ["PS"],
    971: ["AE"],
    972: ["IL"],
    973: ["BH"],
    974: ["QA"],
    975: ["BT"],
    976: ["MN"],
    977: ["NP"],
    992: ["TJ"],
    993: ["TM"],
    994: ["AZ"],
    995: ["GE"],
    996: ["KG"],
    998: ["UZ"]
  },
  countries: {
    AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
    AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]],
    AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"],
    AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"],
    AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"],
    AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"],
    AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"],
    AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]],
    AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"],
    AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"],
    AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"],
    AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]],
    AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"],
    AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"],
    BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"],
    BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"],
    BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"],
    BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"],
    BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]],
    BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]],
    BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]],
    BJ: ["229", "00", "(?:01\\d|[24-689])\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]],
    BL: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],
    BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"],
    BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]],
    BO: ["591", "00(?:1\\d)?", "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"],
    BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"],
    BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"],
    BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"],
    BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]],
    BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]],
    BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"],
    BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]],
    CA: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]],
    CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    CD: ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"],
    CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]],
    CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]],
    CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"],
    CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]],
    CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]],
    CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]],
    CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]],
    CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"],
    CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"],
    CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"],
    CU: ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"],
    CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]],
    CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"],
    CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-389]|94[0-4])\\d{5}|4(?:[0-36]\\d|4[047-9]|5[0-25-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"],
    CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]],
    CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]],
    DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"],
    DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]],
    DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]],
    DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"],
    DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"],
    DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"],
    EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"],
    EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"],
    EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
    ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"],
    ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]],
    ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"],
    FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"],
    FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    FK: ["500", "00", "[2-7]\\d{4}", [5]],
    FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]],
    FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"],
    FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"],
    GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"],
    GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"],
    GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"],
    GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"],
    GF: ["594", "00", "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"],
    GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]],
    GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"],
    GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]],
    GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]],
    GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]],
    GP: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],
    GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]],
    GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]],
    GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"],
    GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]],
    GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]],
    HR: ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]],
    HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"],
    ID: ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"],
    IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"],
    IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"],
    IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"],
    IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]],
    IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"],
    IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}", [6, 7, 8, 9, 10, 11]], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]],
    JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]],
    JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"],
    JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"],
    KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"],
    KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"],
    KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]],
    KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"],
    KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"],
    KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"],
    KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]],
    KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"],
    KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"],
    LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"],
    LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"],
    LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"],
    LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"],
    LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"],
    LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"],
    LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]],
    LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"],
    LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],
    LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]],
    LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"],
    MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-467]|5[0-3]|8[0-7]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],
    MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"],
    MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"],
    ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"],
    MF: ["590", "00", "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],
    MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"],
    MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"],
    MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"],
    ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]],
    MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"],
    MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]],
    MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"],
    MQ: ["596", "00", "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]],
    MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"],
    MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]],
    MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"],
    MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"],
    MX: ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"],
    MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]],
    NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]],
    NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]],
    NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"],
    NG: ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"],
    NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]],
    NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"],
    NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"],
    NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"],
    NR: ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]],
    NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]],
    NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]],
    PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]],
    PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "],
    PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"],
    PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"],
    PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]],
    PM: ["508", "00", "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"],
    PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"],
    PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]],
    PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]],
    PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"],
    QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]],
    RE: ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],
    RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "],
    RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"],
    RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"],
    RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"],
    SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"],
    SB: ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],
    SC: ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"],
    SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]],
    SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"],
    SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"],
    SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"],
    SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"],
    SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"],
    SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"],
    SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]],
    SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]]], "0"],
    SR: ["597", "00", "(?:[2-5]|68|[78]\\d|90)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]],
    SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"],
    ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]],
    SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]],
    SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"],
    SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"],
    SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]],
    TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
    TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"],
    TD: ["235", "00|16", "(?:22|[689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"],
    TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]],
    TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"],
    TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"],
    TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
    TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]],
    TM: ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"],
    TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]],
    TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]],
    TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"],
    TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"],
    TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"],
    TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"],
    UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"],
    UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"],
    US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-468]))\\d{4}|(?:2742|305[3-9]|472[247-9]|505[2-57-9]|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"], 0, 0, 0, ["305209\\d{4}"]]],
    UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "],
    UZ: ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]],
    VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"],
    VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"],
    VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"],
    VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"],
    VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"],
    VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"],
    VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]],
    WF: ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]],
    WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]],
    XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"],
    YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"],
    YT: ["262", "00", "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],
    ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"],
    ZM: ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"],
    ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"]
  },
  nonGeographic: {
    800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]],
    808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]],
    870: ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]],
    878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]],
    881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]],
    882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],
    883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],
    888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]],
    979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]]
  }
};
function Nn(e, t) {
  var r = Array.prototype.slice.call(t);
  return r.push(Au),
    e.apply(this, r)
}
a(Nn, "withMetadataArgument");
c();
c();
c();
c();
function bu(e, t) {
  e = e.split("-"),
    t = t.split("-");
  for (var r = e[0].split("."), n = t[0].split("."), o = 0; o < 3; o++) {
    var i = Number(r[o])
      , s = Number(n[o]);
    if (i > s)
      return 1;
    if (s > i)
      return -1;
    if (!isNaN(i) && isNaN(s))
      return 1;
    if (isNaN(i) && !isNaN(s))
      return -1
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0
}
a(bu, "default");
c();
var VB = {}.constructor;
function Ft(e) {
  return e != null && e.constructor === VB
}
a(Ft, "isObject");
function qf(e) {
  "@babel/helpers - typeof";
  return qf = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t
  }
    : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    qf(e)
}
a(qf, "_typeof");
function xu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(xu, "_classCallCheck");
function nC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(nC, "_defineProperties");
function Cu(e, t, r) {
  return t && nC(e.prototype, t),
    r && nC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(Cu, "_createClass");
var kB = "1.2.0"
  , HB = "1.7.35"
  , oC = " ext. "
  , GB = /^\d+$/
  , le = function() {
    function e(t) {
      xu(this, e),
        Zf(t),
        this.metadata = t,
        sC.call(this, t)
    }
    return a(e, "Metadata"),
      Cu(e, [{
        key: "getCountries",
        value: a(function() {
          return Object.keys(this.metadata.countries).filter(function(r) {
            return r !== "001"
          })
        }, "getCountries")
      }, {
        key: "getCountryMetadata",
        value: a(function(r) {
          return this.metadata.countries[r]
        }, "getCountryMetadata")
      }, {
        key: "nonGeographic",
        value: a(function() {
          if (!(this.v1 || this.v2 || this.v3))
            return this.metadata.nonGeographic || this.metadata.nonGeographical
        }, "nonGeographic")
      }, {
        key: "hasCountry",
        value: a(function(r) {
          return this.getCountryMetadata(r) !== void 0
        }, "hasCountry")
      }, {
        key: "hasCallingCode",
        value: a(function(r) {
          if (this.getCountryCodesForCallingCode(r))
            return !0;
          if (this.nonGeographic()) {
            if (this.nonGeographic()[r])
              return !0
          } else {
            var n = this.countryCallingCodes()[r];
            if (n && n.length === 1 && n[0] === "001")
              return !0
          }
        }, "hasCallingCode")
      }, {
        key: "isNonGeographicCallingCode",
        value: a(function(r) {
          return this.nonGeographic() ? !!this.nonGeographic()[r] : !this.getCountryCodesForCallingCode(r)
        }, "isNonGeographicCallingCode")
      }, {
        key: "country",
        value: a(function(r) {
          return this.selectNumberingPlan(r)
        }, "country")
      }, {
        key: "selectNumberingPlan",
        value: a(function(r, n) {
          if (r && GB.test(r) && (n = r,
            r = null),
            r && r !== "001") {
            if (!this.hasCountry(r))
              throw new Error("Unknown country: ".concat(r));
            this.numberingPlan = new iC(this.getCountryMetadata(r), this)
          } else if (n) {
            if (!this.hasCallingCode(n))
              throw new Error("Unknown calling code: ".concat(n));
            this.numberingPlan = new iC(this.getNumberingPlanMetadata(n), this)
          } else
            this.numberingPlan = void 0;
          return this
        }, "selectNumberingPlan")
      }, {
        key: "getCountryCodesForCallingCode",
        value: a(function(r) {
          var n = this.countryCallingCodes()[r];
          if (n)
            return n.length === 1 && n[0].length === 3 ? void 0 : n
        }, "getCountryCodesForCallingCode")
      }, {
        key: "getCountryCodeForCallingCode",
        value: a(function(r) {
          var n = this.getCountryCodesForCallingCode(r);
          if (n)
            return n[0]
        }, "getCountryCodeForCallingCode")
      }, {
        key: "getNumberingPlanMetadata",
        value: a(function(r) {
          var n = this.getCountryCodeForCallingCode(r);
          if (n)
            return this.getCountryMetadata(n);
          if (this.nonGeographic()) {
            var o = this.nonGeographic()[r];
            if (o)
              return o
          } else {
            var i = this.countryCallingCodes()[r];
            if (i && i.length === 1 && i[0] === "001")
              return this.metadata.countries["001"]
          }
        }, "getNumberingPlanMetadata")
      }, {
        key: "countryCallingCode",
        value: a(function() {
          return this.numberingPlan.callingCode()
        }, "countryCallingCode")
      }, {
        key: "IDDPrefix",
        value: a(function() {
          return this.numberingPlan.IDDPrefix()
        }, "IDDPrefix")
      }, {
        key: "defaultIDDPrefix",
        value: a(function() {
          return this.numberingPlan.defaultIDDPrefix()
        }, "defaultIDDPrefix")
      }, {
        key: "nationalNumberPattern",
        value: a(function() {
          return this.numberingPlan.nationalNumberPattern()
        }, "nationalNumberPattern")
      }, {
        key: "possibleLengths",
        value: a(function() {
          return this.numberingPlan.possibleLengths()
        }, "possibleLengths")
      }, {
        key: "formats",
        value: a(function() {
          return this.numberingPlan.formats()
        }, "formats")
      }, {
        key: "nationalPrefixForParsing",
        value: a(function() {
          return this.numberingPlan.nationalPrefixForParsing()
        }, "nationalPrefixForParsing")
      }, {
        key: "nationalPrefixTransformRule",
        value: a(function() {
          return this.numberingPlan.nationalPrefixTransformRule()
        }, "nationalPrefixTransformRule")
      }, {
        key: "leadingDigits",
        value: a(function() {
          return this.numberingPlan.leadingDigits()
        }, "leadingDigits")
      }, {
        key: "hasTypes",
        value: a(function() {
          return this.numberingPlan.hasTypes()
        }, "hasTypes")
      }, {
        key: "type",
        value: a(function(r) {
          return this.numberingPlan.type(r)
        }, "type")
      }, {
        key: "ext",
        value: a(function() {
          return this.numberingPlan.ext()
        }, "ext")
      }, {
        key: "countryCallingCodes",
        value: a(function() {
          return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes
        }, "countryCallingCodes")
      }, {
        key: "chooseCountryByCountryCallingCode",
        value: a(function(r) {
          return this.selectNumberingPlan(r)
        }, "chooseCountryByCountryCallingCode")
      }, {
        key: "hasSelectedNumberingPlan",
        value: a(function() {
          return this.numberingPlan !== void 0
        }, "hasSelectedNumberingPlan")
      }]),
      e
  }();
var iC = function() {
  function e(t, r) {
    xu(this, e),
      this.globalMetadataObject = r,
      this.metadata = t,
      sC.call(this, r.metadata)
  }
  return a(e, "NumberingPlan"),
    Cu(e, [{
      key: "callingCode",
      value: a(function() {
        return this.metadata[0]
      }, "callingCode")
    }, {
      key: "getDefaultCountryMetadataForRegion",
      value: a(function() {
        return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())
      }, "getDefaultCountryMetadataForRegion")
    }, {
      key: "IDDPrefix",
      value: a(function() {
        if (!(this.v1 || this.v2))
          return this.metadata[1]
      }, "IDDPrefix")
    }, {
      key: "defaultIDDPrefix",
      value: a(function() {
        if (!(this.v1 || this.v2))
          return this.metadata[12]
      }, "defaultIDDPrefix")
    }, {
      key: "nationalNumberPattern",
      value: a(function() {
        return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2]
      }, "nationalNumberPattern")
    }, {
      key: "possibleLengths",
      value: a(function() {
        if (!this.v1)
          return this.metadata[this.v2 ? 2 : 3]
      }, "possibleLengths")
    }, {
      key: "_getFormats",
      value: a(function(r) {
        return r[this.v1 ? 2 : this.v2 ? 3 : 4]
      }, "_getFormats")
    }, {
      key: "formats",
      value: a(function() {
        var r = this
          , n = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
        return n.map(function(o) {
          return new YB(o, r)
        })
      }, "formats")
    }, {
      key: "nationalPrefix",
      value: a(function() {
        return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5]
      }, "nationalPrefix")
    }, {
      key: "_getNationalPrefixFormattingRule",
      value: a(function(r) {
        return r[this.v1 ? 4 : this.v2 ? 5 : 6]
      }, "_getNationalPrefixFormattingRule")
    }, {
      key: "nationalPrefixFormattingRule",
      value: a(function() {
        return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())
      }, "nationalPrefixFormattingRule")
    }, {
      key: "_nationalPrefixForParsing",
      value: a(function() {
        return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7]
      }, "_nationalPrefixForParsing")
    }, {
      key: "nationalPrefixForParsing",
      value: a(function() {
        return this._nationalPrefixForParsing() || this.nationalPrefix()
      }, "nationalPrefixForParsing")
    }, {
      key: "nationalPrefixTransformRule",
      value: a(function() {
        return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8]
      }, "nationalPrefixTransformRule")
    }, {
      key: "_getNationalPrefixIsOptionalWhenFormatting",
      value: a(function() {
        return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9]
      }, "_getNationalPrefixIsOptionalWhenFormatting")
    }, {
      key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
      value: a(function() {
        return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())
      }, "nationalPrefixIsOptionalWhenFormattingInNationalFormat")
    }, {
      key: "leadingDigits",
      value: a(function() {
        return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10]
      }, "leadingDigits")
    }, {
      key: "types",
      value: a(function() {
        return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11]
      }, "types")
    }, {
      key: "hasTypes",
      value: a(function() {
        return this.types() && this.types().length === 0 ? !1 : !!this.types()
      }, "hasTypes")
    }, {
      key: "type",
      value: a(function(r) {
        if (this.hasTypes() && aC(this.types(), r))
          return new zB(aC(this.types(), r), this)
      }, "type")
    }, {
      key: "ext",
      value: a(function() {
        return this.v1 || this.v2 ? oC : this.metadata[13] || oC
      }, "ext")
    }]),
    e
}()
  , YB = function() {
    function e(t, r) {
      xu(this, e),
        this._format = t,
        this.metadata = r
    }
    return a(e, "Format"),
      Cu(e, [{
        key: "pattern",
        value: a(function() {
          return this._format[0]
        }, "pattern")
      }, {
        key: "format",
        value: a(function() {
          return this._format[1]
        }, "format")
      }, {
        key: "leadingDigitsPatterns",
        value: a(function() {
          return this._format[2] || []
        }, "leadingDigitsPatterns")
      }, {
        key: "nationalPrefixFormattingRule",
        value: a(function() {
          return this._format[3] || this.metadata.nationalPrefixFormattingRule()
        }, "nationalPrefixFormattingRule")
      }, {
        key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
        value: a(function() {
          return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
        }, "nationalPrefixIsOptionalWhenFormattingInNationalFormat")
      }, {
        key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
        value: a(function() {
          return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
        }, "nationalPrefixIsMandatoryWhenFormattingInNationalFormat")
      }, {
        key: "usesNationalPrefix",
        value: a(function() {
          return !!(this.nationalPrefixFormattingRule() && !jB.test(this.nationalPrefixFormattingRule()))
        }, "usesNationalPrefix")
      }, {
        key: "internationalFormat",
        value: a(function() {
          return this._format[5] || this.format()
        }, "internationalFormat")
      }]),
      e
  }()
  , jB = /^\(?\$1\)?$/
  , zB = function() {
    function e(t, r) {
      xu(this, e),
        this.type = t,
        this.metadata = r
    }
    return a(e, "Type"),
      Cu(e, [{
        key: "pattern",
        value: a(function() {
          return this.metadata.v1 ? this.type : this.type[0]
        }, "pattern")
      }, {
        key: "possibleLengths",
        value: a(function() {
          if (!this.metadata.v1)
            return this.type[1] || this.metadata.possibleLengths()
        }, "possibleLengths")
      }]),
      e
  }();
function aC(e, t) {
  switch (t) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9]
  }
}
a(aC, "getType");
function Zf(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Ft(e) || !Ft(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ft(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + WB(e) + ": " + e, "."))
}
a(Zf, "validateMetadata");
var WB = a(function(t) {
  return qf(t)
}, "typeOf");
function dr(e, t) {
  if (t = new le(t),
    t.hasCountry(e))
    return t.country(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e))
}
a(dr, "getCountryCallingCode");
function Di(e, t) {
  return t.countries.hasOwnProperty(e)
}
a(Di, "isSupportedCountry");
function sC(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1,
    this.v2 = t === 2,
    this.v3 = t === 3,
    this.v4 = t === 4) : t ? bu(t, kB) === -1 ? this.v2 = !0 : bu(t, HB) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0
}
a(sC, "setVersion");
c();
c();
c();
function KB(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = XB(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(KB, "_createForOfIteratorHelperLoose");
function XB(e, t) {
  if (e) {
    if (typeof e == "string")
      return uC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return uC(e, t)
  }
}
a(XB, "_unsupportedIterableToArray");
function uC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(uC, "_arrayLikeToArray");
function Qf(e, t) {
  for (var r = e.slice(), n = KB(t), o; !(o = n()).done;) {
    var i = o.value;
    e.indexOf(i) < 0 && r.push(i)
  }
  return r.sort(function(s, l) {
    return s - l
  })
}
a(Qf, "mergeArrays");
function Or(e, t) {
  return lC(e, void 0, t)
}
a(Or, "checkNumberLength");
function lC(e, t, r) {
  var n = r.type(t)
    , o = n && n.possibleLengths() || r.possibleLengths();
  if (!o)
    return "IS_POSSIBLE";
  if (t === "FIXED_LINE_OR_MOBILE") {
    if (!r.type("FIXED_LINE"))
      return lC(e, "MOBILE", r);
    var i = r.type("MOBILE");
    i && (o = Qf(o, i.possibleLengths()))
  } else if (t && !n)
    return "INVALID_LENGTH";
  var s = e.length
    , l = o[0];
  return l === s ? "IS_POSSIBLE" : l > s ? "TOO_SHORT" : o[o.length - 1] < s ? "TOO_LONG" : o.indexOf(s, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH"
}
a(lC, "checkNumberLengthForType");
function Jf(e, t, r) {
  if (t === void 0 && (t = {}),
    r = new le(r),
    t.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    r.selectNumberingPlan(e.countryCallingCode)
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!r.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      r.country(e.country)
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      r.selectNumberingPlan(e.countryCallingCode)
    }
  }
  if (r.possibleLengths())
    return ep(e.phone || e.nationalNumber, r);
  if (e.countryCallingCode && r.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.')
}
a(Jf, "isPossiblePhoneNumber");
function ep(e, t) {
  switch (Or(e, t)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1
  }
}
a(ep, "isPossibleNumber");
c();
c();
function lt(e, t) {
  return e = e || "",
    new RegExp("^(?:" + t + ")$").test(e)
}
a(lt, "matchesEntirely");
c();
function qB(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = ZB(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(qB, "_createForOfIteratorHelperLoose");
function ZB(e, t) {
  if (e) {
    if (typeof e == "string")
      return cC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cC(e, t)
  }
}
a(ZB, "_unsupportedIterableToArray");
function cC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(cC, "_arrayLikeToArray");
var QB = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function wn(e, t, r) {
  if (t = t || {},
    !(!e.country && !e.countryCallingCode)) {
    r = new le(r),
      r.selectNumberingPlan(e.country, e.countryCallingCode);
    var n = t.v2 ? e.nationalNumber : e.phone;
    if (lt(n, r.nationalNumberPattern())) {
      if (tp(n, "FIXED_LINE", r))
        return r.type("MOBILE") && r.type("MOBILE").pattern() === "" || !r.type("MOBILE") || tp(n, "MOBILE", r) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var o = qB(QB), i; !(i = o()).done;) {
        var s = i.value;
        if (tp(n, s, r))
          return s
      }
    }
  }
}
a(wn, "getNumberType");
function tp(e, t, r) {
  return t = r.type(t),
    !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : lt(e, t.pattern())
}
a(tp, "isNumberTypeEqualTo");
function rp(e, t, r) {
  if (t = t || {},
    r = new le(r),
    r.selectNumberingPlan(e.country, e.countryCallingCode),
    r.hasTypes())
    return wn(e, t, r.metadata) !== void 0;
  var n = t.v2 ? e.nationalNumber : e.phone;
  return lt(n, r.nationalNumberPattern())
}
a(rp, "isValidNumber");
c();
function np(e, t, r) {
  var n = new le(r)
    , o = n.getCountryCodesForCallingCode(e);
  return o ? o.filter(function(i) {
    return JB(t, i, r)
  }) : []
}
a(np, "getPossibleCountriesForNumber");
function JB(e, t, r) {
  var n = new le(r);
  return n.selectNumberingPlan(t),
    n.numberingPlan.possibleLengths().indexOf(e.length) >= 0
}
a(JB, "couldNationalNumberBelongToCountry");
c();
c();
c();
var Ui = 2
  , dC = 17
  , fC = 3
  , Me = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9"
  , eV = "-\u2010-\u2015\u2212\u30FC\uFF0D"
  , tV = "\uFF0F/"
  , rV = "\uFF0E."
  , nV = " \xA0\xAD\u200B\u2060\u3000"
  , oV = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"
  , iV = "~\u2053\u223C\uFF5E"
  , _t = "".concat(eV).concat(tV).concat(rV).concat(nV).concat(oV).concat(iV)
  , In = "+\uFF0B";
var aV = new RegExp("([" + Me + "])");
function Fi(e, t, r, n) {
  if (t) {
    var o = new le(n);
    o.selectNumberingPlan(t, r);
    var i = new RegExp(o.IDDPrefix());
    if (e.search(i) === 0) {
      e = e.slice(e.match(i)[0].length);
      var s = e.match(aV);
      if (!(s && s[1] != null && s[1].length > 0 && s[1] === "0"))
        return e
    }
  }
}
a(Fi, "stripIddPrefix");
c();
c();
c();
function Po(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var r = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")")
      , n = r.exec(e);
    if (n) {
      var o, i, s = n.length - 1, l = s > 0 && n[s];
      if (t.nationalPrefixTransformRule() && l)
        o = e.replace(r, t.nationalPrefixTransformRule()),
          s > 1 && (i = n[1]);
      else {
        var d = n[0];
        o = e.slice(d.length),
          l && (i = n[1])
      }
      var u;
      if (l) {
        var f = e.indexOf(n[1])
          , p = e.slice(0, f);
        p === t.numberingPlan.nationalPrefix() && (u = t.numberingPlan.nationalPrefix())
      } else
        u = n[0];
      return {
        nationalNumber: o,
        nationalPrefix: u,
        carrierCode: i
      }
    }
  }
  return {
    nationalNumber: e
  }
}
a(Po, "extractNationalNumberFromPossiblyIncompleteNumber");
function No(e, t) {
  var r = Po(e, t)
    , n = r.carrierCode
    , o = r.nationalNumber;
  if (o !== e) {
    if (!sV(e, o, t))
      return {
        nationalNumber: e
      };
    if (t.possibleLengths() && !uV(o, t))
      return {
        nationalNumber: e
      }
  }
  return {
    nationalNumber: o,
    carrierCode: n
  }
}
a(No, "extractNationalNumber");
function sV(e, t, r) {
  return !(lt(e, r.nationalNumberPattern()) && !lt(t, r.nationalNumberPattern()))
}
a(sV, "shouldHaveExtractedNationalPrefix");
function uV(e, t) {
  switch (Or(e, t)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0
  }
}
a(uV, "isPossibleIncompleteNationalNumber");
c();
function Bi(e, t, r, n) {
  var o = t ? dr(t, n) : r;
  if (e.indexOf(o) === 0) {
    n = new le(n),
      n.selectNumberingPlan(t, r);
    var i = e.slice(o.length)
      , s = No(i, n)
      , l = s.nationalNumber
      , d = No(e, n)
      , u = d.nationalNumber;
    if (!lt(u, n.nationalNumberPattern()) && lt(l, n.nationalNumberPattern()) || Or(u, n) === "TOO_LONG")
      return {
        countryCallingCode: o,
        number: i
      }
  }
  return {
    number: e
  }
}
a(Bi, "extractCountryCallingCodeFromInternationalNumberWithoutPlusSign");
function Mn(e, t, r, n) {
  if (!e)
    return {};
  var o;
  if (e[0] !== "+") {
    var i = Fi(e, t, r, n);
    if (i && i !== e)
      o = !0,
        e = "+" + i;
    else {
      if (t || r) {
        var s = Bi(e, t, r, n)
          , l = s.countryCallingCode
          , d = s.number;
        if (l)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: l,
            number: d
          }
      }
      return {
        number: e
      }
    }
  }
  if (e[1] === "0")
    return {};
  n = new le(n);
  for (var u = 2; u - 1 <= fC && u <= e.length;) {
    var f = e.slice(1, u);
    if (n.hasCallingCode(f))
      return n.selectNumberingPlan(f),
      {
        countryCallingCodeSource: o ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: f,
        number: e.slice(u)
      };
    u++
  }
  return {}
}
a(Mn, "extractCountryCallingCode");
c();
c();
c();
function Vi(e) {
  return e.replace(new RegExp("[".concat(_t, "]+"), "g"), " ").trim()
}
a(Vi, "applyInternationalSeparatorStyle");
var op = /(\$\d)/;
function ki(e, t, r) {
  var n = r.useInternationalFormat
    , o = r.withNationalPrefix
    , i = r.carrierCode
    , s = r.metadata
    , l = e.replace(new RegExp(t.pattern()), n ? t.internationalFormat() : o && t.nationalPrefixFormattingRule() ? t.format().replace(op, t.nationalPrefixFormattingRule()) : t.format());
  return n ? Vi(l) : l
}
a(ki, "formatNationalNumberUsingFormat");
c();
var lV = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function ip(e, t, r) {
  var n = new le(r);
  if (n.selectNumberingPlan(e, t),
    n.defaultIDDPrefix())
    return n.defaultIDDPrefix();
  if (lV.test(n.IDDPrefix()))
    return n.IDDPrefix()
}
a(ip, "getIddPrefix");
c();
c();
c();
var cV = ";ext="
  , wo = a(function(t) {
    return "([".concat(Me, "]{1,").concat(t, "})")
  }, "getExtensionDigitsPattern");
function Hi(e) {
  var t = "20"
    , r = "15"
    , n = "9"
    , o = "6"
    , i = "[ \xA0\\t,]*"
    , s = "[:\\.\uFF0E]?[ \xA0\\t,-]*"
    , l = "#?"
    , d = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)"
    , u = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)"
    , f = "[- ]+"
    , p = "[ \xA0\\t]*"
    , _ = "(?:,{2}|;)"
    , S = cV + wo(t)
    , g = i + d + s + wo(t) + l
    , T = i + u + s + wo(n) + l
    , b = f + wo(o) + "#"
    , x = p + _ + s + wo(r) + l
    , A = p + "(?:,)+" + s + wo(n) + l;
  return S + "|" + g + "|" + T + "|" + b + "|" + x + "|" + A
}
a(Hi, "createExtensionPattern");
var dV = "[" + Me + "]{" + Ui + "}"
  , fV = "[" + In + "]{0,1}(?:[" + _t + "]*[" + Me + "]){3,}[" + _t + Me + "]*"
  , pV = new RegExp("^[" + In + "]{0,1}(?:[" + _t + "]*[" + Me + "]){1,2}$", "i")
  , mV = fV + "(?:" + Hi() + ")?"
  , _V = new RegExp("^" + dV + "$|^" + mV + "$", "i");
function ap(e) {
  return e.length >= Ui && _V.test(e)
}
a(ap, "isViablePhoneNumber");
function pC(e) {
  return pV.test(e)
}
a(pC, "isViablePhoneNumberStart");
function mC(e) {
  var t = e.number
    , r = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(r ? ";ext=" + r : "")
}
a(mC, "formatRFC3966");
function hV(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = gV(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(hV, "_createForOfIteratorHelperLoose");
function gV(e, t) {
  if (e) {
    if (typeof e == "string")
      return _C(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _C(e, t)
  }
}
a(gV, "_unsupportedIterableToArray");
function _C(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(_C, "_arrayLikeToArray");
function hC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })),
      r.push.apply(r, n)
  }
  return r
}
a(hC, "ownKeys");
function gC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hC(Object(r), !0).forEach(function(n) {
      EV(e, n, r[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    })
  }
  return e
}
a(gC, "_objectSpread");
function EV(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r,
    e
}
a(EV, "_defineProperty");
var EC = {
  formatExtension: a(function(t, r, n) {
    return "".concat(t).concat(n.ext()).concat(r)
  }, "formatExtension")
};
function up(e, t, r, n) {
  if (r ? r = gC(gC({}, EC), r) : r = EC,
    n = new le(n),
    e.country && e.country !== "001") {
    if (!n.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    n.country(e.country)
  } else if (e.countryCallingCode)
    n.selectNumberingPlan(e.countryCallingCode);
  else
    return e.phone || "";
  var o = n.countryCallingCode(), i = r.v2 ? e.nationalNumber : e.phone, s;
  switch (t) {
    case "NATIONAL":
      return i ? (s = Ru(i, e.carrierCode, "NATIONAL", n, r),
        sp(s, e.ext, n, r.formatExtension)) : "";
    case "INTERNATIONAL":
      return i ? (s = Ru(i, null, "INTERNATIONAL", n, r),
        s = "+".concat(o, " ").concat(s),
        sp(s, e.ext, n, r.formatExtension)) : "+".concat(o);
    case "E.164":
      return "+".concat(o).concat(i);
    case "RFC3966":
      return mC({
        number: "+".concat(o).concat(i),
        ext: e.ext
      });
    case "IDD":
      if (!r.fromCountry)
        return;
      var l = vV(i, e.carrierCode, o, r.fromCountry, n);
      return sp(l, e.ext, n, r.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'))
  }
}
a(up, "formatNumber");
function Ru(e, t, r, n, o) {
  var i = TV(n.formats(), e);
  return i ? ki(e, i, {
    useInternationalFormat: r === "INTERNATIONAL",
    withNationalPrefix: !(i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && o && o.nationalPrefix === !1),
    carrierCode: t,
    metadata: n
  }) : e
}
a(Ru, "formatNationalNumber");
function TV(e, t) {
  for (var r = hV(e), n; !(n = r()).done;) {
    var o = n.value;
    if (o.leadingDigitsPatterns().length > 0) {
      var i = o.leadingDigitsPatterns()[o.leadingDigitsPatterns().length - 1];
      if (t.search(i) !== 0)
        continue
    }
    if (lt(t, o.pattern()))
      return o
  }
}
a(TV, "chooseFormatForNumber");
function sp(e, t, r, n) {
  return t ? n(e, t, r) : e
}
a(sp, "addExtension");
function vV(e, t, r, n, o) {
  var i = dr(n, o.metadata);
  if (i === r) {
    var s = Ru(e, t, "NATIONAL", o);
    return r === "1" ? r + " " + s : s
  }
  var l = ip(n, void 0, o.metadata);
  if (l)
    return "".concat(l, " ").concat(r, " ").concat(Ru(e, null, "INTERNATIONAL", o))
}
a(vV, "formatIDD");
function TC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })),
      r.push.apply(r, n)
  }
  return r
}
a(TC, "ownKeys");
function vC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? TC(Object(r), !0).forEach(function(n) {
      SV(e, n, r[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : TC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    })
  }
  return e
}
a(vC, "_objectSpread");
function SV(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r,
    e
}
a(SV, "_defineProperty");
function yV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(yV, "_classCallCheck");
function SC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(SC, "_defineProperties");
function AV(e, t, r) {
  return t && SC(e.prototype, t),
    r && SC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(AV, "_createClass");
var bV = !1
  , Ou = function() {
    function e(t, r, n) {
      if (yV(this, e),
        !t)
        throw new TypeError("First argument is required");
      if (typeof t != "string")
        throw new TypeError("First argument must be a string");
      if (typeof t == "string") {
        if (t[0] === "+" && !r)
          throw new TypeError("`metadata` argument not passed");
        if (Ft(r) && Ft(r.countries)) {
          n = r;
          var o = t;
          if (!RV.test(o))
            throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
          var i = Mn(o, void 0, void 0, n)
            , s = i.countryCallingCode
            , l = i.number;
          if (r = l,
            t = s,
            !r)
            throw new Error("Invalid `number` argument passed: too short")
        }
      }
      if (!r)
        throw new TypeError("`nationalNumber` argument is required");
      if (typeof r != "string")
        throw new TypeError("`nationalNumber` argument must be a string");
      Zf(n);
      var d = CV(t, n)
        , u = d.country
        , f = d.countryCallingCode;
      this.country = u,
        this.countryCallingCode = f,
        this.nationalNumber = r,
        this.number = "+" + this.countryCallingCode + this.nationalNumber,
        this.getMetadata = function() {
          return n
        }
    }
    return a(e, "PhoneNumber"),
      AV(e, [{
        key: "setExt",
        value: a(function(r) {
          this.ext = r
        }, "setExt")
      }, {
        key: "getPossibleCountries",
        value: a(function() {
          return this.country ? [this.country] : np(this.countryCallingCode, this.nationalNumber, this.getMetadata())
        }, "getPossibleCountries")
      }, {
        key: "isPossible",
        value: a(function() {
          return Jf(this, {
            v2: !0
          }, this.getMetadata())
        }, "isPossible")
      }, {
        key: "isValid",
        value: a(function() {
          return rp(this, {
            v2: !0
          }, this.getMetadata())
        }, "isValid")
      }, {
        key: "isNonGeographic",
        value: a(function() {
          var r = new le(this.getMetadata());
          return r.isNonGeographicCallingCode(this.countryCallingCode)
        }, "isNonGeographic")
      }, {
        key: "isEqual",
        value: a(function(r) {
          return this.number === r.number && this.ext === r.ext
        }, "isEqual")
      }, {
        key: "getType",
        value: a(function() {
          return wn(this, {
            v2: !0
          }, this.getMetadata())
        }, "getType")
      }, {
        key: "format",
        value: a(function(r, n) {
          return up(this, r, n ? vC(vC({}, n), {}, {
            v2: !0
          }) : {
            v2: !0
          }, this.getMetadata())
        }, "format")
      }, {
        key: "formatNational",
        value: a(function(r) {
          return this.format("NATIONAL", r)
        }, "formatNational")
      }, {
        key: "formatInternational",
        value: a(function(r) {
          return this.format("INTERNATIONAL", r)
        }, "formatInternational")
      }, {
        key: "getURI",
        value: a(function(r) {
          return this.format("RFC3966", r)
        }, "getURI")
      }]),
      e
  }();
var xV = a(function(t) {
  return /^[A-Z]{2}$/.test(t)
}, "isCountryCode");
function CV(e, t) {
  var r, n, o = new le(t);
  return xV(e) ? (r = e,
    o.selectNumberingPlan(r),
    n = o.countryCallingCode()) : (n = e,
      bV && o.isNonGeographicCallingCode(n) && (r = "001")),
  {
    country: r,
    countryCallingCode: n
  }
}
a(CV, "getCountryAndCountryCallingCode");
var RV = /^\+\d+$/;
c();
function lp(e) {
  "@babel/helpers - typeof";
  return lp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t
  }
    : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    lp(e)
}
a(lp, "_typeof");
function yC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(yC, "_defineProperties");
function OV(e, t, r) {
  return t && yC(e.prototype, t),
    r && yC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(OV, "_createClass");
function PV(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(PV, "_classCallCheck");
function NV(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    t && Gi(e, t)
}
a(NV, "_inherits");
function wV(e) {
  var t = bC();
  return a(function() {
    var n = Yi(e), o;
    if (t) {
      var i = Yi(this).constructor;
      o = Reflect.construct(n, arguments, i)
    } else
      o = n.apply(this, arguments);
    return IV(this, o)
  }, "_createSuperInternal")
}
a(wV, "_createSuper");
function IV(e, t) {
  if (t && (lp(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AC(e)
}
a(IV, "_possibleConstructorReturn");
function AC(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
a(AC, "_assertThisInitialized");
function cp(e) {
  var t = typeof Map == "function" ? new Map : void 0;
  return cp = a(function(n) {
    if (n === null || !MV(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t != "undefined") {
      if (t.has(n))
        return t.get(n);
      t.set(n, o)
    }
    function o() {
      return Pu(n, arguments, Yi(this).constructor)
    }
    return a(o, "Wrapper"),
      o.prototype = Object.create(n.prototype, {
        constructor: {
          value: o,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      Gi(o, n)
  }, "_wrapNativeSuper"),
    cp(e)
}
a(cp, "_wrapNativeSuper");
function Pu(e, t, r) {
  return bC() ? Pu = Reflect.construct : Pu = a(function(o, i, s) {
    var l = [null];
    l.push.apply(l, i);
    var d = Function.bind.apply(o, l)
      , u = new d;
    return s && Gi(u, s.prototype),
      u
  }, "_construct"),
    Pu.apply(null, arguments)
}
a(Pu, "_construct");
function bC() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() { })),
      !0
  } catch (e) {
    return !1
  }
}
a(bC, "_isNativeReflectConstruct");
function MV(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1
}
a(MV, "_isNativeFunction");
function Gi(e, t) {
  return Gi = Object.setPrototypeOf || a(function(n, o) {
    return n.__proto__ = o,
      n
  }, "_setPrototypeOf"),
    Gi(e, t)
}
a(Gi, "_setPrototypeOf");
function Yi(e) {
  return Yi = Object.setPrototypeOf ? Object.getPrototypeOf : a(function(r) {
    return r.__proto__ || Object.getPrototypeOf(r)
  }, "_getPrototypeOf"),
    Yi(e)
}
a(Yi, "_getPrototypeOf");
var Bt = function(e) {
  NV(r, e);
  var t = wV(r);
  function r(n) {
    var o;
    return PV(this, r),
      o = t.call(this, n),
      Object.setPrototypeOf(AC(o), r.prototype),
      o.name = o.constructor.name,
      o
  }
  return a(r, "ParseError"),
    OV(r)
}(cp(Error));
c();
c();
c();
var xC = new RegExp("(?:" + Hi() + ")$", "i");
function dp(e) {
  var t = e.search(xC);
  if (t < 0)
    return {};
  for (var r = e.slice(0, t), n = e.match(xC), o = 1; o < n.length;) {
    if (n[o])
      return {
        number: r,
        ext: n[o]
      };
    o++
  }
}
a(dp, "extractExtension");
c();
c();
function LV(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = $V(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(LV, "_createForOfIteratorHelperLoose");
function $V(e, t) {
  if (e) {
    if (typeof e == "string")
      return CC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return CC(e, t)
  }
}
a($V, "_unsupportedIterableToArray");
function CC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(CC, "_arrayLikeToArray");
var DV = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "\uFF10": "0",
  "\uFF11": "1",
  "\uFF12": "2",
  "\uFF13": "3",
  "\uFF14": "4",
  "\uFF15": "5",
  "\uFF16": "6",
  "\uFF17": "7",
  "\uFF18": "8",
  "\uFF19": "9",
  "\u0660": "0",
  "\u0661": "1",
  "\u0662": "2",
  "\u0663": "3",
  "\u0664": "4",
  "\u0665": "5",
  "\u0666": "6",
  "\u0667": "7",
  "\u0668": "8",
  "\u0669": "9",
  "\u06F0": "0",
  "\u06F1": "1",
  "\u06F2": "2",
  "\u06F3": "3",
  "\u06F4": "4",
  "\u06F5": "5",
  "\u06F6": "6",
  "\u06F7": "7",
  "\u06F8": "8",
  "\u06F9": "9"
};
function fp(e) {
  return DV[e]
}
a(fp, "parseDigit");
function qr(e) {
  for (var t = "", r = LV(e.split("")), n; !(n = r()).done;) {
    var o = n.value
      , i = fp(o);
    i && (t += i)
  }
  return t
}
a(qr, "parseDigits");
function UV(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = FV(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(UV, "_createForOfIteratorHelperLoose");
function FV(e, t) {
  if (e) {
    if (typeof e == "string")
      return RC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return RC(e, t)
  }
}
a(FV, "_unsupportedIterableToArray");
function RC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(RC, "_arrayLikeToArray");
function Nu(e) {
  for (var t = "", r = UV(e.split("")), n; !(n = r()).done;) {
    var o = n.value;
    t += BV(o, t) || ""
  }
  return t
}
a(Nu, "parseIncompletePhoneNumber");
function BV(e, t, r) {
  if (e === "+") {
    if (t) {
      typeof r == "function" && r("end");
      return
    }
    return "+"
  }
  return fp(e)
}
a(BV, "parsePhoneNumberCharacter");
c();
c();
function VV(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = kV(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(VV, "_createForOfIteratorHelperLoose");
function kV(e, t) {
  if (e) {
    if (typeof e == "string")
      return OC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return OC(e, t)
  }
}
a(kV, "_unsupportedIterableToArray");
function OC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(OC, "_arrayLikeToArray");
function ji(e, t) {
  var r = t.countries
    , n = t.defaultCountry
    , o = t.metadata;
  o = new le(o);
  for (var i = VV(r), s; !(s = i()).done;) {
    var l = s.value;
    if (o.country(l),
      o.leadingDigits()) {
      if (e && e.search(o.leadingDigits()) === 0)
        return l
    } else if (wn({
      phone: e,
      country: l
    }, void 0, o.metadata))
      return l
  }
}
a(ji, "getCountryByNationalNumber");
var HV = !1;
function zi(e, t) {
  var r = t.nationalNumber
    , n = t.defaultCountry
    , o = t.metadata;
  if (HV && o.isNonGeographicCallingCode(e))
    return "001";
  var i = o.getCountryCodesForCallingCode(e);
  if (i)
    return i.length === 1 ? i[0] : ji(r, {
      countries: i,
      defaultCountry: n,
      metadata: o.metadata
    })
}
a(zi, "getCountryByCallingCode");
c();
c();
var mp = "+"
  , GV = "[\\-\\.\\(\\)]?"
  , PC = "([" + Me + "]|" + GV + ")"
  , YV = "^\\" + mp + PC + "*[" + Me + "]" + PC + "*$"
  , jV = new RegExp(YV, "g")
  , pp = Me
  , zV = "[" + pp + "]+((\\-)*[" + pp + "])*"
  , WV = "a-zA-Z"
  , KV = "[" + WV + "]+((\\-)*[" + pp + "])*"
  , XV = "^(" + zV + "\\.)*" + KV + "\\.?$"
  , qV = new RegExp(XV, "g")
  , _p = "tel:"
  , wu = ";phone-context="
  , NC = ";isub=";
function hp(e) {
  var t = e.indexOf(wu);
  if (t < 0)
    return null;
  var r = t + wu.length;
  if (r >= e.length)
    return "";
  var n = e.indexOf(";", r);
  return n >= 0 ? e.substring(r, n) : e.substring(r)
}
a(hp, "extractPhoneContext");
function wC(e) {
  return e === null ? !0 : e.length === 0 ? !1 : jV.test(e) || qV.test(e)
}
a(wC, "isPhoneContextValid");
function gp(e, t) {
  var r = t.extractFormattedPhoneNumber
    , n = hp(e);
  if (!wC(n))
    throw new Bt("NOT_A_NUMBER");
  var o;
  if (n === null)
    o = r(e) || "";
  else {
    o = "",
      n.charAt(0) === mp && (o += n);
    var i = e.indexOf(_p), s;
    i >= 0 ? s = i + _p.length : s = 0;
    var l = e.indexOf(wu);
    o += e.substring(s, l)
  }
  var d = o.indexOf(NC);
  if (d > 0 && (o = o.substring(0, d)),
    o !== "")
    return o
}
a(gp, "extractFormattedPhoneNumberFromPossibleRfc3966NumberUri");
var ZV = 250
  , QV = new RegExp("[" + In + Me + "]")
  , JV = new RegExp("[^" + Me + "#]+$")
  , ek = !1;
function Ep(e, t, r) {
  if (t = t || {},
    r = new le(r),
    t.defaultCountry && !r.hasCountry(t.defaultCountry))
    throw t.v2 ? new Bt("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var n = rk(e, t.v2, t.extract)
    , o = n.number
    , i = n.ext
    , s = n.error;
  if (!o) {
    if (t.v2)
      throw s === "TOO_SHORT" ? new Bt("TOO_SHORT") : new Bt("NOT_A_NUMBER");
    return {}
  }
  var l = ok(o, t.defaultCountry, t.defaultCallingCode, r)
    , d = l.country
    , u = l.nationalNumber
    , f = l.countryCallingCode
    , p = l.countryCallingCodeSource
    , _ = l.carrierCode;
  if (!r.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new Bt("INVALID_COUNTRY");
    return {}
  }
  if (!u || u.length < Ui) {
    if (t.v2)
      throw new Bt("TOO_SHORT");
    return {}
  }
  if (u.length > dC) {
    if (t.v2)
      throw new Bt("TOO_LONG");
    return {}
  }
  if (t.v2) {
    var S = new Ou(f, u, r.metadata);
    return d && (S.country = d),
      _ && (S.carrierCode = _),
      i && (S.ext = i),
      S.__countryCallingCodeSource = p,
      S
  }
  var g = (t.extended ? r.hasSelectedNumberingPlan() : d) ? lt(u, r.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: d,
    countryCallingCode: f,
    carrierCode: _,
    valid: g,
    possible: g ? !0 : !!(t.extended === !0 && r.possibleLengths() && ep(u, r)),
    phone: u,
    ext: i
  } : g ? nk(d, u, i) : {}
}
a(Ep, "parse");
function tk(e, t, r) {
  if (e) {
    if (e.length > ZV) {
      if (r)
        throw new Bt("TOO_LONG");
      return
    }
    if (t === !1)
      return e;
    var n = e.search(QV);
    if (!(n < 0))
      return e.slice(n).replace(JV, "")
  }
}
a(tk, "_extractFormattedPhoneNumber");
function rk(e, t, r) {
  var n = gp(e, {
    extractFormattedPhoneNumber: a(function(s) {
      return tk(s, r, t)
    }, "extractFormattedPhoneNumber")
  });
  if (!n)
    return {};
  if (!ap(n))
    return pC(n) ? {
      error: "TOO_SHORT"
    } : {};
  var o = dp(n);
  return o.ext ? o : {
    number: n
  }
}
a(rk, "parseInput");
function nk(e, t, r) {
  var n = {
    country: e,
    phone: t
  };
  return r && (n.ext = r),
    n
}
a(nk, "result");
function ok(e, t, r, n) {
  var o = Mn(Nu(e), t, r, n.metadata), i = o.countryCallingCodeSource, s = o.countryCallingCode, l = o.number, d;
  if (s)
    n.selectNumberingPlan(s);
  else if (l && (t || r))
    n.selectNumberingPlan(t, r),
      t ? d = t : ek && n.isNonGeographicCallingCode(r) && (d = "001"),
      s = r || dr(t, n.metadata);
  else
    return {};
  if (!l)
    return {
      countryCallingCodeSource: i,
      countryCallingCode: s
    };
  var u = No(Nu(l), n)
    , f = u.nationalNumber
    , p = u.carrierCode
    , _ = zi(s, {
      nationalNumber: f,
      defaultCountry: t,
      metadata: n
    });
  return _ && (d = _,
    _ === "001" || n.country(d)),
  {
    country: d,
    countryCallingCode: s,
    countryCallingCodeSource: i,
    nationalNumber: f,
    carrierCode: p
  }
}
a(ok, "parsePhoneNumber");
function IC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })),
      r.push.apply(r, n)
  }
  return r
}
a(IC, "ownKeys");
function MC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? IC(Object(r), !0).forEach(function(n) {
      ik(e, n, r[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : IC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    })
  }
  return e
}
a(MC, "_objectSpread");
function ik(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r,
    e
}
a(ik, "_defineProperty");
function Tp(e, t, r) {
  return Ep(e, MC(MC({}, t), {}, {
    v2: !0
  }), r)
}
a(Tp, "parsePhoneNumberWithError");
c();
function LC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })),
      r.push.apply(r, n)
  }
  return r
}
a(LC, "ownKeys");
function ak(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? LC(Object(r), !0).forEach(function(n) {
      sk(e, n, r[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : LC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    })
  }
  return e
}
a(ak, "_objectSpread");
function sk(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r,
    e
}
a(sk, "_defineProperty");
function uk(e, t) {
  return fk(e) || dk(e, t) || ck(e, t) || lk()
}
a(uk, "_slicedToArray");
function lk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(lk, "_nonIterableRest");
function ck(e, t) {
  if (e) {
    if (typeof e == "string")
      return $C(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $C(e, t)
  }
}
a(ck, "_unsupportedIterableToArray");
function $C(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a($C, "_arrayLikeToArray");
function dk(e, t) {
  var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, i = !1, s, l;
    try {
      for (r = r.call(e); !(o = (s = r.next()).done) && (n.push(s.value),
        !(t && n.length === t)); o = !0)
        ;
    } catch (d) {
      i = !0,
        l = d
    } finally {
      try {
        !o && r.return != null && r.return()
      } finally {
        if (i)
          throw l
      }
    }
    return n
  }
}
a(dk, "_iterableToArrayLimit");
function fk(e) {
  if (Array.isArray(e))
    return e
}
a(fk, "_arrayWithHoles");
function vp(e) {
  var t = Array.prototype.slice.call(e), r = uk(t, 4), n = r[0], o = r[1], i = r[2], s = r[3], l, d, u;
  if (typeof n == "string")
    l = n;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!o || typeof o == "string")
    s ? (d = i,
      u = s) : (d = void 0,
        u = i),
      o && (d = ak({
        defaultCountry: o
      }, d));
  else if (Ft(o))
    i ? (d = o,
      u = i) : u = o;
  else
    throw new Error("Invalid second argument: ".concat(o));
  return {
    text: l,
    options: d,
    metadata: u
  }
}
a(vp, "normalizeArguments");
c();
c();
function DC(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable
    })),
      r.push.apply(r, n)
  }
  return r
}
a(DC, "ownKeys");
function UC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? DC(Object(r), !0).forEach(function(n) {
      pk(e, n, r[n])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : DC(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
    })
  }
  return e
}
a(UC, "_objectSpread");
function pk(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r,
    e
}
a(pk, "_defineProperty");
function Sp(e, t, r) {
  t && t.defaultCountry && !Di(t.defaultCountry, r) && (t = UC(UC({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return Tp(e, t, r)
  } catch (n) {
    if (!(n instanceof Bt))
      throw n
  }
}
a(Sp, "parsePhoneNumber");
function Wi() {
  var e = vp(arguments)
    , t = e.text
    , r = e.options
    , n = e.metadata;
  return Sp(t, r, n)
}
a(Wi, "parsePhoneNumber");
c();
c();
function mk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(mk, "_classCallCheck");
function FC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(FC, "_defineProperties");
function _k(e, t, r) {
  return t && FC(e.prototype, t),
    r && FC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(_k, "_createClass");
var BC = function() {
  function e(t) {
    var r = t.onCountryChange
      , n = t.onCallingCodeChange;
    mk(this, e),
      this.onCountryChange = r,
      this.onCallingCodeChange = n
  }
  return a(e, "AsYouTypeState"),
    _k(e, [{
      key: "reset",
      value: a(function(r) {
        var n = r.country
          , o = r.callingCode;
        this.international = !1,
          this.missingPlus = !1,
          this.IDDPrefix = void 0,
          this.callingCode = void 0,
          this.digits = "",
          this.resetNationalSignificantNumber(),
          this.initCountryAndCallingCode(n, o)
      }, "reset")
    }, {
      key: "resetNationalSignificantNumber",
      value: a(function() {
        this.nationalSignificantNumber = this.getNationalDigits(),
          this.nationalSignificantNumberMatchesInput = !0,
          this.nationalPrefix = void 0,
          this.carrierCode = void 0,
          this.complexPrefixBeforeNationalSignificantNumber = void 0
      }, "resetNationalSignificantNumber")
    }, {
      key: "update",
      value: a(function(r) {
        for (var n = 0, o = Object.keys(r); n < o.length; n++) {
          var i = o[n];
          this[i] = r[i]
        }
      }, "update")
    }, {
      key: "initCountryAndCallingCode",
      value: a(function(r, n) {
        this.setCountry(r),
          this.setCallingCode(n)
      }, "initCountryAndCallingCode")
    }, {
      key: "setCountry",
      value: a(function(r) {
        this.country = r,
          this.onCountryChange(r)
      }, "setCountry")
    }, {
      key: "setCallingCode",
      value: a(function(r) {
        this.callingCode = r,
          this.onCallingCodeChange(r, this.country)
      }, "setCallingCode")
    }, {
      key: "startInternationalNumber",
      value: a(function(r, n) {
        this.international = !0,
          this.initCountryAndCallingCode(r, n)
      }, "startInternationalNumber")
    }, {
      key: "appendDigits",
      value: a(function(r) {
        this.digits += r
      }, "appendDigits")
    }, {
      key: "appendNationalSignificantNumberDigits",
      value: a(function(r) {
        this.nationalSignificantNumber += r
      }, "appendNationalSignificantNumberDigits")
    }, {
      key: "getNationalDigits",
      value: a(function() {
        return this.international ? this.digits.slice((this.IDDPrefix ? this.IDDPrefix.length : 0) + (this.callingCode ? this.callingCode.length : 0)) : this.digits
      }, "getNationalDigits")
    }, {
      key: "getDigitsWithoutInternationalPrefix",
      value: a(function() {
        return this.international && this.IDDPrefix ? this.digits.slice(this.IDDPrefix.length) : this.digits
      }, "getDigitsWithoutInternationalPrefix")
    }]),
    e
}();
c();
c();
function hk(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = gk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(hk, "_createForOfIteratorHelperLoose");
function gk(e, t) {
  if (e) {
    if (typeof e == "string")
      return VC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return VC(e, t)
  }
}
a(gk, "_unsupportedIterableToArray");
function VC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(VC, "_arrayLikeToArray");
var yt = "x"
  , yp = new RegExp(yt);
function Ki(e, t) {
  if (t < 1)
    return "";
  for (var r = ""; t > 1;)
    t & 1 && (r += e),
      t >>= 1,
      e += e;
  return r + e
}
a(Ki, "repeat");
function Ap(e, t) {
  return e[t] === ")" && t++,
    Ek(e.slice(0, t))
}
a(Ap, "cutAndStripNonPairedParens");
function Ek(e) {
  for (var t = [], r = 0; r < e.length;)
    e[r] === "(" ? t.push(r) : e[r] === ")" && t.pop(),
      r++;
  var n = 0
    , o = "";
  t.push(e.length);
  for (var i = 0, s = t; i < s.length; i++) {
    var l = s[i];
    o += e.slice(n, l),
      n = l + 1
  }
  return o
}
a(Ek, "stripNonPairedParens");
function kC(e, t, r) {
  for (var n = hk(r.split("")), o; !(o = n()).done;) {
    var i = o.value;
    if (e.slice(t + 1).search(yp) < 0)
      return;
    t = e.search(yp),
      e = e.replace(yp, i)
  }
  return [e, t]
}
a(kC, "populateTemplateWithDigits");
c();
function bp(e, t, r) {
  var n = r.metadata
    , o = r.shouldTryNationalPrefixFormattingRule
    , i = r.getSeparatorAfterNationalPrefix
    , s = new RegExp("^(?:".concat(t.pattern(), ")$"));
  if (s.test(e.nationalSignificantNumber))
    return Tk(e, t, {
      metadata: n,
      shouldTryNationalPrefixFormattingRule: o,
      getSeparatorAfterNationalPrefix: i
    })
}
a(bp, "formatCompleteNumber");
function GC(e, t) {
  return Or(e, t) === "IS_POSSIBLE"
}
a(GC, "canFormatCompleteNumber");
function Tk(e, t, r) {
  var n = r.metadata
    , o = r.shouldTryNationalPrefixFormattingRule
    , i = r.getSeparatorAfterNationalPrefix
    , s = e.nationalSignificantNumber
    , l = e.international
    , d = e.nationalPrefix
    , u = e.carrierCode;
  if (o(t)) {
    var f = HC(e, t, {
      useNationalPrefixFormattingRule: !0,
      getSeparatorAfterNationalPrefix: i,
      metadata: n
    });
    if (f)
      return f
  }
  return HC(e, t, {
    useNationalPrefixFormattingRule: !1,
    getSeparatorAfterNationalPrefix: i,
    metadata: n
  })
}
a(Tk, "formatNationalNumberWithAndWithoutNationalPrefixFormattingRule");
function HC(e, t, r) {
  var n = r.metadata
    , o = r.useNationalPrefixFormattingRule
    , i = r.getSeparatorAfterNationalPrefix
    , s = ki(e.nationalSignificantNumber, t, {
      carrierCode: e.carrierCode,
      useInternationalFormat: e.international,
      withNationalPrefix: o,
      metadata: n
    });
  if (o || (e.nationalPrefix ? s = e.nationalPrefix + i(t) + s : e.complexPrefixBeforeNationalSignificantNumber && (s = e.complexPrefixBeforeNationalSignificantNumber + " " + s)),
    vk(s, e))
    return s
}
a(HC, "formatNationalNumber");
function vk(e, t) {
  return qr(e) === t.getNationalDigits()
}
a(vk, "isValidFormattedNationalNumber");
c();
c();
function Sk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(Sk, "_classCallCheck");
function YC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(YC, "_defineProperties");
function yk(e, t, r) {
  return t && YC(e.prototype, t),
    r && YC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(yk, "_createClass");
var jC = function() {
  function e() {
    Sk(this, e)
  }
  return a(e, "PatternParser"),
    yk(e, [{
      key: "parse",
      value: a(function(r) {
        if (this.context = [{
          or: !0,
          instructions: []
        }],
          this.parsePattern(r),
          this.context.length !== 1)
          throw new Error("Non-finalized contexts left when pattern parse ended");
        var n = this.context[0]
          , o = n.branches
          , i = n.instructions;
        if (o)
          return {
            op: "|",
            args: o.concat([xp(i)])
          };
        if (i.length === 0)
          throw new Error("Pattern is required");
        return i.length === 1 ? i[0] : i
      }, "parse")
    }, {
      key: "startContext",
      value: a(function(r) {
        this.context.push(r)
      }, "startContext")
    }, {
      key: "endContext",
      value: a(function() {
        this.context.pop()
      }, "endContext")
    }, {
      key: "getContext",
      value: a(function() {
        return this.context[this.context.length - 1]
      }, "getContext")
    }, {
      key: "parsePattern",
      value: a(function(r) {
        if (!r)
          throw new Error("Pattern is required");
        var n = r.match(xk);
        if (!n) {
          if (bk.test(r))
            throw new Error("Illegal characters found in a pattern: ".concat(r));
          this.getContext().instructions = this.getContext().instructions.concat(r.split(""));
          return
        }
        var o = n[1]
          , i = r.slice(0, n.index)
          , s = r.slice(n.index + o.length);
        switch (o) {
          case "(?:":
            i && this.parsePattern(i),
              this.startContext({
                or: !0,
                instructions: [],
                branches: []
              });
            break;
          case ")":
            if (!this.getContext().or)
              throw new Error('")" operator must be preceded by "(?:" operator');
            if (i && this.parsePattern(i),
              this.getContext().instructions.length === 0)
              throw new Error('No instructions found after "|" operator in an "or" group');
            var l = this.getContext()
              , d = l.branches;
            d.push(xp(this.getContext().instructions)),
              this.endContext(),
              this.getContext().instructions.push({
                op: "|",
                args: d
              });
            break;
          case "|":
            if (!this.getContext().or)
              throw new Error('"|" operator can only be used inside "or" groups');
            if (i && this.parsePattern(i),
              !this.getContext().branches)
              if (this.context.length === 1)
                this.getContext().branches = [];
              else
                throw new Error('"branches" not found in an "or" group context');
            this.getContext().branches.push(xp(this.getContext().instructions)),
              this.getContext().instructions = [];
            break;
          case "[":
            i && this.parsePattern(i),
              this.startContext({
                oneOfSet: !0
              });
            break;
          case "]":
            if (!this.getContext().oneOfSet)
              throw new Error('"]" operator must be preceded by "[" operator');
            this.endContext(),
              this.getContext().instructions.push({
                op: "[]",
                args: Ak(i)
              });
            break;
          default:
            throw new Error("Unknown operator: ".concat(o))
        }
        s && this.parsePattern(s)
      }, "parsePattern")
    }]),
    e
}();
function Ak(e) {
  for (var t = [], r = 0; r < e.length;) {
    if (e[r] === "-") {
      if (r === 0 || r === e.length - 1)
        throw new Error("Couldn't parse a one-of set pattern: ".concat(e));
      for (var n = e[r - 1].charCodeAt(0) + 1, o = e[r + 1].charCodeAt(0) - 1, i = n; i <= o;)
        t.push(String.fromCharCode(i)),
          i++
    } else
      t.push(e[r]);
    r++
  }
  return t
}
a(Ak, "parseOneOfSet");
var bk = /[\(\)\[\]\?\:\|]/
  , xk = new RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");
function xp(e) {
  return e.length === 1 ? e[0] : e
}
a(xp, "expandSingleElementArray");
function zC(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ck(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(zC, "_createForOfIteratorHelperLoose");
function Ck(e, t) {
  if (e) {
    if (typeof e == "string")
      return WC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return WC(e, t)
  }
}
a(Ck, "_unsupportedIterableToArray");
function WC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(WC, "_arrayLikeToArray");
function Rk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(Rk, "_classCallCheck");
function KC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(KC, "_defineProperties");
function Ok(e, t, r) {
  return t && KC(e.prototype, t),
    r && KC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(Ok, "_createClass");
var XC = function() {
  function e(t) {
    Rk(this, e),
      this.matchTree = new jC().parse(t)
  }
  return a(e, "PatternMatcher"),
    Ok(e, [{
      key: "match",
      value: a(function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = n.allowOverflow;
        if (!r)
          throw new Error("String is required");
        var i = Cp(r.split(""), this.matchTree, !0);
        if (i && i.match && delete i.matchedChars,
          !(i && i.overflow && !o))
          return i
      }, "match")
    }]),
    e
}();
function Cp(e, t, r) {
  if (typeof t == "string") {
    var n = e.join("");
    return t.indexOf(n) === 0 ? e.length === t.length ? {
      match: !0,
      matchedChars: e
    } : {
      partialMatch: !0
    } : n.indexOf(t) === 0 ? r && e.length > t.length ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, t.length)
    } : void 0
  }
  if (Array.isArray(t)) {
    for (var o = e.slice(), i = 0; i < t.length;) {
      var s = t[i]
        , l = Cp(o, s, r && i === t.length - 1);
      if (l) {
        if (l.overflow)
          return l;
        if (l.match) {
          if (o = o.slice(l.matchedChars.length),
            o.length === 0)
            return i === t.length - 1 ? {
              match: !0,
              matchedChars: e
            } : {
              partialMatch: !0
            }
        } else {
          if (l.partialMatch)
            return {
              partialMatch: !0
            };
          throw new Error(`Unsupported match result:
`.concat(JSON.stringify(l, null, 2)))
        }
      } else
        return;
      i++
    }
    return r ? {
      overflow: !0
    } : {
      match: !0,
      matchedChars: e.slice(0, e.length - o.length)
    }
  }
  switch (t.op) {
    case "|":
      for (var d, u = zC(t.args), f; !(f = u()).done;) {
        var p = f.value
          , _ = Cp(e, p, r);
        if (_) {
          if (_.overflow)
            return _;
          if (_.match)
            return {
              match: !0,
              matchedChars: _.matchedChars
            };
          if (_.partialMatch)
            d = !0;
          else
            throw new Error(`Unsupported match result:
`.concat(JSON.stringify(_, null, 2)))
        }
      }
      return d ? {
        partialMatch: !0
      } : void 0;
    case "[]":
      for (var S = zC(t.args), g; !(g = S()).done;) {
        var T = g.value;
        if (e[0] === T)
          return e.length === 1 ? {
            match: !0,
            matchedChars: e
          } : r ? {
            overflow: !0
          } : {
            match: !0,
            matchedChars: [T]
          }
      }
      return;
    default:
      throw new Error("Unsupported instruction tree: ".concat(t))
  }
}
a(Cp, "_match");
function qC(e, t) {
  var r = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Pk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(qC, "_createForOfIteratorHelperLoose");
function Pk(e, t) {
  if (e) {
    if (typeof e == "string")
      return ZC(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ZC(e, t)
  }
}
a(Pk, "_unsupportedIterableToArray");
function ZC(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(ZC, "_arrayLikeToArray");
function Nk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(Nk, "_classCallCheck");
function QC(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(QC, "_defineProperties");
function wk(e, t, r) {
  return t && QC(e.prototype, t),
    r && QC(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(wk, "_createClass");
var Rp = "9"
  , Ik = 15
  , Mk = Ki(Rp, Ik)
  , Lk = /[- ]/
  , Iu = !0
  , $k = Iu && function() {
    return /\[([^\[\]])*\]/g
  }
  , Dk = Iu && function() {
    return /\d(?=[^,}][^,}])/g
  }
  , Uk = new RegExp("[" + _t + "]*\\$1[" + _t + "]*(\\$\\d[" + _t + "]*)*$")
  , JC = 3
  , eR = function() {
    function e(t) {
      var r = t.state
        , n = t.metadata;
      Nk(this, e),
        this.metadata = n,
        this.resetFormat()
    }
    return a(e, "AsYouTypeFormatter"),
      wk(e, [{
        key: "resetFormat",
        value: a(function() {
          this.chosenFormat = void 0,
            this.template = void 0,
            this.nationalNumberTemplate = void 0,
            this.populatedNationalNumberTemplate = void 0,
            this.populatedNationalNumberTemplatePosition = -1
        }, "resetFormat")
      }, {
        key: "reset",
        value: a(function(r, n) {
          this.resetFormat(),
            r ? (this.isNANP = r.callingCode() === "1",
              this.matchingFormats = r.formats(),
              n.nationalSignificantNumber && this.narrowDownMatchingFormats(n)) : (this.isNANP = void 0,
                this.matchingFormats = [])
        }, "reset")
      }, {
        key: "format",
        value: a(function(r, n) {
          var o = this;
          if (GC(n.nationalSignificantNumber, this.metadata))
            for (var i = qC(this.matchingFormats), s; !(s = i()).done;) {
              var l = s.value
                , d = bp(n, l, {
                  metadata: this.metadata,
                  shouldTryNationalPrefixFormattingRule: a(function(f) {
                    return o.shouldTryNationalPrefixFormattingRule(f, {
                      international: n.international,
                      nationalPrefix: n.nationalPrefix
                    })
                  }, "shouldTryNationalPrefixFormattingRule"),
                  getSeparatorAfterNationalPrefix: a(function(f) {
                    return o.getSeparatorAfterNationalPrefix(f)
                  }, "getSeparatorAfterNationalPrefix")
                });
              if (d)
                return this.resetFormat(),
                  this.chosenFormat = l,
                  this.setNationalNumberTemplate(d.replace(/\d/g, yt), n),
                  this.populatedNationalNumberTemplate = d,
                  this.populatedNationalNumberTemplatePosition = this.template.lastIndexOf(yt),
                  d
            }
          return this.formatNationalNumberWithNextDigits(r, n)
        }, "format")
      }, {
        key: "formatNationalNumberWithNextDigits",
        value: a(function(r, n) {
          var o = this.chosenFormat
            , i = this.chooseFormat(n);
          if (i)
            return i === o ? this.formatNextNationalNumberDigits(r) : this.formatNextNationalNumberDigits(n.getNationalDigits())
        }, "formatNationalNumberWithNextDigits")
      }, {
        key: "narrowDownMatchingFormats",
        value: a(function(r) {
          var n = this
            , o = r.nationalSignificantNumber
            , i = r.nationalPrefix
            , s = r.international
            , l = o
            , d = l.length - JC;
          d < 0 && (d = 0),
            this.matchingFormats = this.matchingFormats.filter(function(u) {
              return n.formatSuits(u, s, i) && n.formatMatches(u, l, d)
            }),
            this.chosenFormat && this.matchingFormats.indexOf(this.chosenFormat) === -1 && this.resetFormat()
        }, "narrowDownMatchingFormats")
      }, {
        key: "formatSuits",
        value: a(function(r, n, o) {
          return !(o && !r.usesNationalPrefix() && !r.nationalPrefixIsOptionalWhenFormattingInNationalFormat() || !n && !o && r.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
        }, "formatSuits")
      }, {
        key: "formatMatches",
        value: a(function(r, n, o) {
          var i = r.leadingDigitsPatterns().length;
          if (i === 0)
            return !0;
          o = Math.min(o, i - 1);
          var s = r.leadingDigitsPatterns()[o];
          if (n.length < JC)
            try {
              return new XC(s).match(n, {
                allowOverflow: !0
              }) !== void 0
            } catch (l) {
              return console.error(l),
                !0
            }
          return new RegExp("^(".concat(s, ")")).test(n)
        }, "formatMatches")
      }, {
        key: "getFormatFormat",
        value: a(function(r, n) {
          return n ? r.internationalFormat() : r.format()
        }, "getFormatFormat")
      }, {
        key: "chooseFormat",
        value: a(function(r) {
          for (var n = this, o = a(function() {
            var u = s.value;
            return n.chosenFormat === u ? "break" : Uk.test(n.getFormatFormat(u, r.international)) ? n.createTemplateForFormat(u, r) ? (n.chosenFormat = u,
              "break") : (n.matchingFormats = n.matchingFormats.filter(function(f) {
                return f !== u
              }),
                "continue") : "continue"
          }, "_loop"), i = qC(this.matchingFormats.slice()), s; !(s = i()).done;) {
            var l = o();
            if (l === "break")
              break
          }
          return this.chosenFormat || this.resetFormat(),
            this.chosenFormat
        }, "chooseFormat")
      }, {
        key: "createTemplateForFormat",
        value: a(function(r, n) {
          if (!(Iu && r.pattern().indexOf("|") >= 0)) {
            var o = this.getTemplateForFormat(r, n);
            if (o)
              return this.setNationalNumberTemplate(o, n),
                !0
          }
        }, "createTemplateForFormat")
      }, {
        key: "getSeparatorAfterNationalPrefix",
        value: a(function(r) {
          return this.isNANP || r && r.nationalPrefixFormattingRule() && Lk.test(r.nationalPrefixFormattingRule()) ? " " : ""
        }, "getSeparatorAfterNationalPrefix")
      }, {
        key: "getInternationalPrefixBeforeCountryCallingCode",
        value: a(function(r, n) {
          var o = r.IDDPrefix
            , i = r.missingPlus;
          return o ? n && n.spacing === !1 ? o : o + " " : i ? "" : "+"
        }, "getInternationalPrefixBeforeCountryCallingCode")
      }, {
        key: "getTemplate",
        value: a(function(r) {
          if (this.template) {
            for (var n = -1, o = 0, i = r.international ? this.getInternationalPrefixBeforeCountryCallingCode(r, {
              spacing: !1
            }) : ""; o < i.length + r.getDigitsWithoutInternationalPrefix().length;)
              n = this.template.indexOf(yt, n + 1),
                o++;
            return Ap(this.template, n + 1)
          }
        }, "getTemplate")
      }, {
        key: "setNationalNumberTemplate",
        value: a(function(r, n) {
          this.nationalNumberTemplate = r,
            this.populatedNationalNumberTemplate = r,
            this.populatedNationalNumberTemplatePosition = -1,
            n.international ? this.template = this.getInternationalPrefixBeforeCountryCallingCode(n).replace(/[\d\+]/g, yt) + Ki(yt, n.callingCode.length) + " " + r : this.template = r
        }, "setNationalNumberTemplate")
      }, {
        key: "getTemplateForFormat",
        value: a(function(r, n) {
          var o = n.nationalSignificantNumber
            , i = n.international
            , s = n.nationalPrefix
            , l = n.complexPrefixBeforeNationalSignificantNumber
            , d = r.pattern();
          Iu && (d = d.replace($k(), "\\d").replace(Dk(), "\\d"));
          var u = Mk.match(d)[0];
          if (!(o.length > u.length)) {
            var f = new RegExp("^" + d + "$")
              , p = o.replace(/\d/g, Rp);
            f.test(p) && (u = p);
            var _ = this.getFormatFormat(r, i), S;
            if (this.shouldTryNationalPrefixFormattingRule(r, {
              international: i,
              nationalPrefix: s
            })) {
              var g = _.replace(op, r.nationalPrefixFormattingRule());
              if (qr(r.nationalPrefixFormattingRule()) === (s || "") + qr("$1") && (_ = g,
                S = !0,
                s))
                for (var T = s.length; T > 0;)
                  _ = _.replace(/\d/, yt),
                    T--
            }
            var b = u.replace(new RegExp(d), _).replace(new RegExp(Rp, "g"), yt);
            return S || (l ? b = Ki(yt, l.length) + " " + b : s && (b = Ki(yt, s.length) + this.getSeparatorAfterNationalPrefix(r) + b)),
              i && (b = Vi(b)),
              b
          }
        }, "getTemplateForFormat")
      }, {
        key: "formatNextNationalNumberDigits",
        value: a(function(r) {
          var n = kC(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition, r);
          if (!n) {
            this.resetFormat();
            return
          }
          return this.populatedNationalNumberTemplate = n[0],
            this.populatedNationalNumberTemplatePosition = n[1],
            Ap(this.populatedNationalNumberTemplate, this.populatedNationalNumberTemplatePosition + 1)
        }, "formatNextNationalNumberDigits")
      }, {
        key: "shouldTryNationalPrefixFormattingRule",
        value: a(function(r, n) {
          var o = n.international
            , i = n.nationalPrefix;
          if (r.nationalPrefixFormattingRule()) {
            var s = r.usesNationalPrefix();
            if (s && i || !s && !o)
              return !0
          }
        }, "shouldTryNationalPrefixFormattingRule")
      }]),
      e
  }();
c();
function nR(e, t) {
  return kk(e) || Vk(e, t) || Bk(e, t) || Fk()
}
a(nR, "_slicedToArray");
function Fk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(Fk, "_nonIterableRest");
function Bk(e, t) {
  if (e) {
    if (typeof e == "string")
      return tR(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return tR(e, t)
  }
}
a(Bk, "_unsupportedIterableToArray");
function tR(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(tR, "_arrayLikeToArray");
function Vk(e, t) {
  var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, i = !1, s, l;
    try {
      for (r = r.call(e); !(o = (s = r.next()).done) && (n.push(s.value),
        !(t && n.length === t)); o = !0)
        ;
    } catch (d) {
      i = !0,
        l = d
    } finally {
      try {
        !o && r.return != null && r.return()
      } finally {
        if (i)
          throw l
      }
    }
    return n
  }
}
a(Vk, "_iterableToArrayLimit");
function kk(e) {
  if (Array.isArray(e))
    return e
}
a(kk, "_arrayWithHoles");
function Hk(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(Hk, "_classCallCheck");
function rR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(rR, "_defineProperties");
function Gk(e, t, r) {
  return t && rR(e.prototype, t),
    r && rR(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(Gk, "_createClass");
var Yk = "[" + _t + Me + "]+"
  , jk = new RegExp("^" + Yk + "$", "i")
  , zk = "(?:[" + In + "][" + _t + Me + "]*|[" + _t + Me + "]+)"
  , Wk = new RegExp("[^" + _t + Me + "]+.*$")
  , Kk = /[^\d\[\]]/
  , oR = function() {
    function e(t) {
      var r = t.defaultCountry
        , n = t.defaultCallingCode
        , o = t.metadata
        , i = t.onNationalSignificantNumberChange;
      Hk(this, e),
        this.defaultCountry = r,
        this.defaultCallingCode = n,
        this.metadata = o,
        this.onNationalSignificantNumberChange = i
    }
    return a(e, "AsYouTypeParser"),
      Gk(e, [{
        key: "input",
        value: a(function(r, n) {
          var o = Zk(r), i = nR(o, 2), s = i[0], l = i[1], d = qr(s), u;
          return l && (n.digits || (n.startInternationalNumber(),
            d || (u = !0))),
            d && this.inputDigits(d, n),
          {
            digits: d,
            justLeadingPlus: u
          }
        }, "input")
      }, {
        key: "inputDigits",
        value: a(function(r, n) {
          var o = n.digits
            , i = o.length < 3 && o.length + r.length >= 3;
          if (n.appendDigits(r),
            i && this.extractIddPrefix(n),
            this.isWaitingForCountryCallingCode(n)) {
            if (!this.extractCountryCallingCode(n))
              return
          } else
            n.appendNationalSignificantNumberDigits(r);
          n.international || this.hasExtractedNationalSignificantNumber || this.extractNationalSignificantNumber(n.getNationalDigits(), function(s) {
            return n.update(s)
          })
        }, "inputDigits")
      }, {
        key: "isWaitingForCountryCallingCode",
        value: a(function(r) {
          var n = r.international
            , o = r.callingCode;
          return n && !o
        }, "isWaitingForCountryCallingCode")
      }, {
        key: "extractCountryCallingCode",
        value: a(function(r) {
          var n = Mn("+" + r.getDigitsWithoutInternationalPrefix(), this.defaultCountry, this.defaultCallingCode, this.metadata.metadata)
            , o = n.countryCallingCode
            , i = n.number;
          if (o)
            return r.setCallingCode(o),
              r.update({
                nationalSignificantNumber: i
              }),
              !0
        }, "extractCountryCallingCode")
      }, {
        key: "reset",
        value: a(function(r) {
          if (r) {
            this.hasSelectedNumberingPlan = !0;
            var n = r._nationalPrefixForParsing();
            this.couldPossiblyExtractAnotherNationalSignificantNumber = n && Kk.test(n)
          } else
            this.hasSelectedNumberingPlan = void 0,
              this.couldPossiblyExtractAnotherNationalSignificantNumber = void 0
        }, "reset")
      }, {
        key: "extractNationalSignificantNumber",
        value: a(function(r, n) {
          if (this.hasSelectedNumberingPlan) {
            var o = Po(r, this.metadata)
              , i = o.nationalPrefix
              , s = o.nationalNumber
              , l = o.carrierCode;
            if (s !== r)
              return this.onExtractedNationalNumber(i, l, s, r, n),
                !0
          }
        }, "extractNationalSignificantNumber")
      }, {
        key: "extractAnotherNationalSignificantNumber",
        value: a(function(r, n, o) {
          if (!this.hasExtractedNationalSignificantNumber)
            return this.extractNationalSignificantNumber(r, o);
          if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
            var i = Po(r, this.metadata)
              , s = i.nationalPrefix
              , l = i.nationalNumber
              , d = i.carrierCode;
            if (l !== n)
              return this.onExtractedNationalNumber(s, d, l, r, o),
                !0
          }
        }, "extractAnotherNationalSignificantNumber")
      }, {
        key: "onExtractedNationalNumber",
        value: a(function(r, n, o, i, s) {
          var l, d, u = i.lastIndexOf(o);
          if (u >= 0 && u === i.length - o.length) {
            d = !0;
            var f = i.slice(0, u);
            f !== r && (l = f)
          }
          s({
            nationalPrefix: r,
            carrierCode: n,
            nationalSignificantNumber: o,
            nationalSignificantNumberMatchesInput: d,
            complexPrefixBeforeNationalSignificantNumber: l
          }),
            this.hasExtractedNationalSignificantNumber = !0,
            this.onNationalSignificantNumberChange()
        }, "onExtractedNationalNumber")
      }, {
        key: "reExtractNationalSignificantNumber",
        value: a(function(r) {
          if (this.extractAnotherNationalSignificantNumber(r.getNationalDigits(), r.nationalSignificantNumber, function(n) {
            return r.update(n)
          }))
            return !0;
          if (this.extractIddPrefix(r))
            return this.extractCallingCodeAndNationalSignificantNumber(r),
              !0;
          if (this.fixMissingPlus(r))
            return this.extractCallingCodeAndNationalSignificantNumber(r),
              !0
        }, "reExtractNationalSignificantNumber")
      }, {
        key: "extractIddPrefix",
        value: a(function(r) {
          var n = r.international
            , o = r.IDDPrefix
            , i = r.digits
            , s = r.nationalSignificantNumber;
          if (!(n || o)) {
            var l = Fi(i, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata);
            if (l !== void 0 && l !== i)
              return r.update({
                IDDPrefix: i.slice(0, i.length - l.length)
              }),
                this.startInternationalNumber(r, {
                  country: void 0,
                  callingCode: void 0
                }),
                !0
          }
        }, "extractIddPrefix")
      }, {
        key: "fixMissingPlus",
        value: a(function(r) {
          if (!r.international) {
            var n = Bi(r.digits, this.defaultCountry, this.defaultCallingCode, this.metadata.metadata)
              , o = n.countryCallingCode
              , i = n.number;
            if (o)
              return r.update({
                missingPlus: !0
              }),
                this.startInternationalNumber(r, {
                  country: r.country,
                  callingCode: o
                }),
                !0
          }
        }, "fixMissingPlus")
      }, {
        key: "startInternationalNumber",
        value: a(function(r, n) {
          var o = n.country
            , i = n.callingCode;
          r.startInternationalNumber(o, i),
            r.nationalSignificantNumber && (r.resetNationalSignificantNumber(),
              this.onNationalSignificantNumberChange(),
              this.hasExtractedNationalSignificantNumber = void 0)
        }, "startInternationalNumber")
      }, {
        key: "extractCallingCodeAndNationalSignificantNumber",
        value: a(function(r) {
          this.extractCountryCallingCode(r) && this.extractNationalSignificantNumber(r.getNationalDigits(), function(n) {
            return r.update(n)
          })
        }, "extractCallingCodeAndNationalSignificantNumber")
      }]),
      e
  }();
function Xk(e) {
  var t = e.search(zk);
  if (!(t < 0)) {
    e = e.slice(t);
    var r;
    return e[0] === "+" && (r = !0,
      e = e.slice(1)),
      e = e.replace(Wk, ""),
      r && (e = "+" + e),
      e
  }
}
a(Xk, "extractFormattedPhoneNumber");
function qk(e) {
  var t = Xk(e) || "";
  return t[0] === "+" ? [t.slice(1), !0] : [t]
}
a(qk, "_extractFormattedDigitsAndPlus");
function Zk(e) {
  var t = qk(e)
    , r = nR(t, 2)
    , n = r[0]
    , o = r[1];
  return jk.test(n) || (n = ""),
    [n, o]
}
a(Zk, "extractFormattedDigitsAndPlus");
function Qk(e, t) {
  return rH(e) || tH(e, t) || eH(e, t) || Jk()
}
a(Qk, "_slicedToArray");
function Jk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
a(Jk, "_nonIterableRest");
function eH(e, t) {
  if (e) {
    if (typeof e == "string")
      return iR(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iR(e, t)
  }
}
a(eH, "_unsupportedIterableToArray");
function iR(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n
}
a(iR, "_arrayLikeToArray");
function tH(e, t) {
  var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, i = !1, s, l;
    try {
      for (r = r.call(e); !(o = (s = r.next()).done) && (n.push(s.value),
        !(t && n.length === t)); o = !0)
        ;
    } catch (d) {
      i = !0,
        l = d
    } finally {
      try {
        !o && r.return != null && r.return()
      } finally {
        if (i)
          throw l
      }
    }
    return n
  }
}
a(tH, "_iterableToArrayLimit");
function rH(e) {
  if (Array.isArray(e))
    return e
}
a(rH, "_arrayWithHoles");
function nH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function")
}
a(nH, "_classCallCheck");
function aR(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1,
      n.configurable = !0,
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
a(aR, "_defineProperties");
function oH(e, t, r) {
  return t && aR(e.prototype, t),
    r && aR(e, r),
    Object.defineProperty(e, "prototype", {
      writable: !1
    }),
    e
}
a(oH, "_createClass");
var sR = !1
  , Mu = function() {
    function e(t, r) {
      nH(this, e),
        this.metadata = new le(r);
      var n = this.getCountryAndCallingCode(t)
        , o = Qk(n, 2)
        , i = o[0]
        , s = o[1];
      this.defaultCountry = i,
        this.defaultCallingCode = s,
        this.reset()
    }
    return a(e, "AsYouType"),
      oH(e, [{
        key: "getCountryAndCallingCode",
        value: a(function(r) {
          var n, o;
          return r && (Ft(r) ? (n = r.defaultCountry,
            o = r.defaultCallingCode) : n = r),
            n && !this.metadata.hasCountry(n) && (n = void 0),
            o && sR && this.metadata.isNonGeographicCallingCode(o) && (n = "001"),
            [n, o]
        }, "getCountryAndCallingCode")
      }, {
        key: "input",
        value: a(function(r) {
          var n = this.parser.input(r, this.state)
            , o = n.digits
            , i = n.justLeadingPlus;
          if (i)
            this.formattedOutput = "+";
          else if (o) {
            this.determineTheCountryIfNeeded(),
              this.state.nationalSignificantNumber && this.formatter.narrowDownMatchingFormats(this.state);
            var s;
            if (this.metadata.hasSelectedNumberingPlan() && (s = this.formatter.format(o, this.state)),
              s === void 0 && this.parser.reExtractNationalSignificantNumber(this.state)) {
              this.determineTheCountryIfNeeded();
              var l = this.state.getNationalDigits();
              l && (s = this.formatter.format(l, this.state))
            }
            this.formattedOutput = s ? this.getFullNumber(s) : this.getNonFormattedNumber()
          }
          return this.formattedOutput
        }, "input")
      }, {
        key: "reset",
        value: a(function() {
          var r = this;
          return this.state = new BC({
            onCountryChange: a(function(o) {
              r.country = o
            }, "onCountryChange"),
            onCallingCodeChange: a(function(o, i) {
              r.metadata.selectNumberingPlan(i, o),
                r.formatter.reset(r.metadata.numberingPlan, r.state),
                r.parser.reset(r.metadata.numberingPlan)
            }, "onCallingCodeChange")
          }),
            this.formatter = new eR({
              state: this.state,
              metadata: this.metadata
            }),
            this.parser = new oR({
              defaultCountry: this.defaultCountry,
              defaultCallingCode: this.defaultCallingCode,
              metadata: this.metadata,
              state: this.state,
              onNationalSignificantNumberChange: a(function() {
                r.determineTheCountryIfNeeded(),
                  r.formatter.reset(r.metadata.numberingPlan, r.state)
              }, "onNationalSignificantNumberChange")
            }),
            this.state.reset({
              country: this.defaultCountry,
              callingCode: this.defaultCallingCode
            }),
            this.formattedOutput = "",
            this
        }, "reset")
      }, {
        key: "isInternational",
        value: a(function() {
          return this.state.international
        }, "isInternational")
      }, {
        key: "getCallingCode",
        value: a(function() {
          if (this.isInternational())
            return this.state.callingCode
        }, "getCallingCode")
      }, {
        key: "getCountryCallingCode",
        value: a(function() {
          return this.getCallingCode()
        }, "getCountryCallingCode")
      }, {
        key: "getCountry",
        value: a(function() {
          var r = this.state.digits;
          if (r)
            return this._getCountry()
        }, "getCountry")
      }, {
        key: "_getCountry",
        value: a(function() {
          var r = this.state.country;
          if (!(sR && r === "001"))
            return r
        }, "_getCountry")
      }, {
        key: "determineTheCountryIfNeeded",
        value: a(function() {
          (!this.state.country || this.isCountryCallingCodeAmbiguous()) && this.determineTheCountry()
        }, "determineTheCountryIfNeeded")
      }, {
        key: "getFullNumber",
        value: a(function(r) {
          var n = this;
          if (this.isInternational()) {
            var o = a(function(l) {
              return n.formatter.getInternationalPrefixBeforeCountryCallingCode(n.state, {
                spacing: !!l
              }) + l
            }, "prefix")
              , i = this.state.callingCode;
            return o(i ? r ? "".concat(i, " ").concat(r) : i : "".concat(this.state.getDigitsWithoutInternationalPrefix()))
          }
          return r
        }, "getFullNumber")
      }, {
        key: "getNonFormattedNationalNumberWithPrefix",
        value: a(function() {
          var r = this.state
            , n = r.nationalSignificantNumber
            , o = r.complexPrefixBeforeNationalSignificantNumber
            , i = r.nationalPrefix
            , s = n
            , l = o || i;
          return l && (s = l + s),
            s
        }, "getNonFormattedNationalNumberWithPrefix")
      }, {
        key: "getNonFormattedNumber",
        value: a(function() {
          var r = this.state.nationalSignificantNumberMatchesInput;
          return this.getFullNumber(r ? this.getNonFormattedNationalNumberWithPrefix() : this.state.getNationalDigits())
        }, "getNonFormattedNumber")
      }, {
        key: "getNonFormattedTemplate",
        value: a(function() {
          var r = this.getNonFormattedNumber();
          if (r)
            return r.replace(/[\+\d]/g, yt)
        }, "getNonFormattedTemplate")
      }, {
        key: "isCountryCallingCodeAmbiguous",
        value: a(function() {
          var r = this.state.callingCode
            , n = this.metadata.getCountryCodesForCallingCode(r);
          return n && n.length > 1
        }, "isCountryCallingCodeAmbiguous")
      }, {
        key: "determineTheCountry",
        value: a(function() {
          this.state.setCountry(zi(this.isInternational() ? this.state.callingCode : this.defaultCallingCode, {
            nationalNumber: this.state.nationalSignificantNumber,
            defaultCountry: this.defaultCountry,
            metadata: this.metadata
          }))
        }, "determineTheCountry")
      }, {
        key: "getNumberValue",
        value: a(function() {
          var r = this.state
            , n = r.digits
            , o = r.callingCode
            , i = r.country
            , s = r.nationalSignificantNumber;
          if (n) {
            if (this.isInternational())
              return o ? "+" + o + s : "+" + n;
            if (i || o) {
              var l = i ? this.metadata.countryCallingCode() : o;
              return "+" + l + s
            }
          }
        }, "getNumberValue")
      }, {
        key: "getNumber",
        value: a(function() {
          var r = this.state
            , n = r.nationalSignificantNumber
            , o = r.carrierCode
            , i = r.callingCode
            , s = this._getCountry();
          if (n && !(!s && !i)) {
            if (s && s === this.defaultCountry) {
              var l = new le(this.metadata.metadata);
              l.selectNumberingPlan(s);
              var d = l.numberingPlan.callingCode()
                , u = this.metadata.getCountryCodesForCallingCode(d);
              if (u.length > 1) {
                var f = ji(n, {
                  countries: u,
                  defaultCountry: this.defaultCountry,
                  metadata: this.metadata.metadata
                });
                f && (s = f)
              }
            }
            var p = new Ou(s || i, n, this.metadata.metadata);
            return o && (p.carrierCode = o),
              p
          }
        }, "getNumber")
      }, {
        key: "isPossible",
        value: a(function() {
          var r = this.getNumber();
          return r ? r.isPossible() : !1
        }, "isPossible")
      }, {
        key: "isValid",
        value: a(function() {
          var r = this.getNumber();
          return r ? r.isValid() : !1
        }, "isValid")
      }, {
        key: "getNationalNumber",
        value: a(function() {
          return this.state.nationalSignificantNumber
        }, "getNationalNumber")
      }, {
        key: "getChars",
        value: a(function() {
          return (this.state.international ? "+" : "") + this.state.digits
        }, "getChars")
      }, {
        key: "getTemplate",
        value: a(function() {
          return this.formatter.getTemplate(this.state) || this.getNonFormattedTemplate() || ""
        }, "getTemplate")
      }]),
      e
  }();
c();
function Io() {
  return Nn(Wi, arguments)
}
a(Io, "parsePhoneNumber");
c();
function Zr(e) {
  return Mu.call(this, e, Au)
}
a(Zr, "AsYouType");
Zr.prototype = Object.create(Mu.prototype, {});
Zr.prototype.constructor = Zr;
c();
function Xi() {
  return Nn(Di, arguments)
}
a(Xi, "isSupportedCountry");
c();
function qi() {
  return Nn(dr, arguments)
}
a(qi, "getCountryCallingCode");
var Op = class Op {
  constructor(t, r) {
    this.countryCode = t,
      this.countryCallingCode = Xi(this.countryCode) ? qi(this.countryCode) : r || "",
      this.formatter = new Zr(this.countryCode)
  }
  formatPhoneNumber(t) {
    if (this.updateFormatterCountryCodeByNumber(t),
      !t.trim().startsWith("+"))
      return this.formatter.reset(),
        this.formatter.input(t);
    let r = /^\+\d+\s*0/.test(t)
      , n = Io(t);
    if (n) {
      let o = n.countryCallingCode
        , i = n.country;
      if (i && Xi(i)) {
        let s = n.nationalNumber.toString();
        r && !s.startsWith("0") && (s = `0${s}`);
        let d = new Zr(i).input(s);
        return `+${o} ${d}`
      }
    }
    return this.formatter.reset(),
      this.formatter.input(t)
  }
  getCountryCodeFromPhoneNumber(t) {
    if (!(t.length < 2))
      try {
        let r = Io(t);
        if (r && r.country)
          return r.country
      } catch (r) { }
  }
  updateFormatterCountryCodeByNumber(t) {
    var n;
    if (t.indexOf("+") === -1 || iH(t).length < 2)
      return;
    let r = this.getCountryCodeFromPhoneNumber(t);
    if (r && r !== this.countryCode) {
      if (this.countryCode = r,
        Xi(r))
        this.countryCallingCode = qi(r);
      else {
        let o = Io(t);
        this.countryCallingCode = ((n = o == null ? void 0 : o.countryCallingCode) == null ? void 0 : n.toString()) || this.countryCallingCode
      }
      this.formatter = new Zr(r)
    }
  }
}
  ;
a(Op, "PhoneNumberFormatter");
var Zi = Op;
function iH(e) {
  return e.replace(/\D/g, "")
}
a(iH, "digitOnlyNumber");
c();
var Lo = U(Ge());
c();
var uR = "40ef507b1a80ee5a07697d92adbc7257ca364dda01568c98736dd208c0840687"
  , aH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

._formFieldContainer_1ydxd_5 {
  position: relative;
  display: flex;
  flex-direction: column;
}

div._formFieldContainer_1ydxd_5 {
  margin-block: 0;
}

/* stylelint-disable-next-line selector-max-type */
div._withError_1ydxd_16 > input {
  box-shadow: 0 0 0 2px var(--form-error-color);
}

._formError_1ydxd_20 {
  font: var(--forms-body-font);
  color: var(--form-error-color);
  line-height: var(--forms-base-font-line-height);
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .isPreview.isPreview--withImage ._formError_1ydxd_20 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
    margin: 0 0 calc(10px / var(--preview-scale));
  }
}

/* Floating labels */

label._formInputFieldLabel_1ydxd_37 {
  pointer-events: none;
  z-index: 1;
  font: var(--forms-body-font);
  line-height: 1;
  color: var(--form-placeholder-color);
  position: absolute;
  left: var(--form-field-padding);
  top: var(--input-label-top);
  max-width: calc(100% - var(--form-field-padding) * 2);
  word-break: keep-all;
  overflow-wrap: break-word;
  margin: 0;
  transform-origin: top left;
  transform: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage label._formInputFieldLabel_1ydxd_37 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
    left: calc(var(--form-field-padding) / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity */
}

._formFieldContainer_1ydxd_5:focus-within ._formInputFieldLabel_1ydxd_37 {
  transform: var(--input-label-transform);

  /* truncates the label text when names are too long on focus */
  width: 100%;
  min-width: 0;
}

._formFieldContainer_1ydxd_5 ._inputFilled_1ydxd_73 {
  transform: var(--input-label-transform);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(uR) || e.set(uR, aH.replace(/:root/g, ":host"))
  }
}
)();
var Mo = {
  previewDesktop: "893px",
  formFieldContainer: "_formFieldContainer_1ydxd_5",
  withError: "_withError_1ydxd_16",
  formError: "_formError_1ydxd_20",
  formInputFieldLabel: "_formInputFieldLabel_1ydxd_37",
  inputFilled: "_inputFilled_1ydxd_73"
};
function Qr({ error: e, children: t, label: r, name: n, isFilled: o = !1, inputHeight: i }) {
  let s = (0,
    Lo.useRef)(null)
    , [l, d] = (0,
      Lo.useState)(0);
  (0,
    Lo.useEffect)(() => {
      s.current && d(s.current.clientHeight)
    }
      , [s]);
  let u = i ? i / 2 - l / 2 : 0;
  return h(Fragment, null, h("div", {
    className: `${Mo.formFieldContainer} ${e ? Mo.withError : ""}`
  }, t, r && h("label", {
    ref: s,
    id: `label-${n}`,
    htmlFor: `label-${n}`,
    className: `${Mo.formInputFieldLabel} ${o ? Mo.inputFilled : ""}`,
    style: u ? {
      top: u
    } : {}
  }, r)), e && h("output", {
    role: "alert",
    className: Mo.formError
  }, e))
}
a(Qr, "FormRendererControl");
c();
var lR = "dd73700a9896639d192cc42abd7ed269173b229ce90a4e647095b9d89f67d1bc"
  , sH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

/* Phone Input field */
._formPhoneInputContainer_1ym3p_6 {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 2.2fr);
  gap: 8px;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -webkit-fill-available; /* Safari, Chrome, Edge */
  /* stylelint-disable-next-line value-no-vendor-prefix */
  width: -moz-available; /* Firefox */
}

input._formPhoneInputField_1ym3p_17 {
  /* Reset styles that might be added on the HTML element directly */
  all: unset;

  padding: var(--form-field-padding);
  padding-top: var(--form-field-padding-top);
  padding-bottom: var(--form-field-padding-bottom);
  font: var(--forms-body-font);
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  box-shadow: var(--form-field-border);
  border: none;
  outline: none;
  border-radius: var(--form-field-border-radius);

  /* Fix missing box shadow on iOS mobile */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
}

._formPhoneInputField_1ym3p_17:-webkit-autofill ~ label {
  /* All browsers that change input color on autofill use a "light" background
    thus when the field is autofilled we set the color to our default light background text color
  */
  color: rgba(32, 32, 32, 0.85);
}

/* Overrides for 1password autofill */
._formPhoneInputField_1ym3p_17[data-com-onepassword-filled='light'] ~ label {
  color: rgba(32, 32, 32, 0.85);
}

._formPhoneInputField_1ym3p_17[data-com-onepassword-filled='dark'] ~ label {
  color: rgba(255, 255, 255, 0.85);
}

input._formPhoneInputField_1ym3p_17::placeholder {
  opacity: 0;
}

input._formPhoneInputField_1ym3p_17:focus-visible {
  border: none;
  outline: none;
  box-shadow: var(--form-field-border-focused);
}

._formPhoneInputContainer_1ym3p_6 output {
  grid-column: 1 / 3;
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity, selector-max-combinators */
  .isPreview.isPreview--withImage ._formPhoneInputContainer_1ym3p_6 input {
    padding: calc(var(--form-field-padding) / var(--preview-scale));
    padding-top: calc(var(--form-field-padding-top) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity, selector-max-combinators */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(lR) || e.set(lR, sH.replace(/:root/g, ":host"))
  }
}
)();
var Pp = {
  previewDesktop: "893px",
  formPhoneInputContainer: "_formPhoneInputContainer_1ym3p_6",
  formPhoneInputField: "_formPhoneInputField_1ym3p_17"
};
c();
c();
c();
var cR = "bfd1f65059558c094a3d6b34d93fd1377bc8511e70714286c0eada2735d18ee3"
  , uH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

._flagIcon_py6yc_5 {
  height: 20px;
  width: 27px;
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage img._flagIcon_py6yc_5 {
    height: 14px;
    width: 18px;
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(cR) || e.set(cR, uH.replace(/:root/g, ":host"))
  }
}
)();
var dR = {
  previewDesktop: "893px",
  flagIcon: "_flagIcon_py6yc_5"
};
var fR = "https://cdn.shopify.com/static/images/flags/";
function pR({ name: e, code: t }) {
  let r = `${fR}${t == null ? void 0 : t.toLowerCase()}.svg`
    , n = `${fR}fallback.svg`;
  return h("img", {
    src: t ? r : n,
    alt: e || "Fallback icon",
    className: dR.flagIcon,
    onError: o => {
      o.currentTarget.src = n,
        o.currentTarget.onerror = null
    }
  })
}
a(pR, "Flag");
function mR({ countryList: e, selectedCountry: t, onCountryChange: r, error: n, root: o }) {
  return h(Fragment, null, h(Oo, {
    root: o,
    name: "country",
    dropdownRelativeToSelf: !1,
    error: n,
    onChange: i => {
      r(i)
    }
    ,
    choices: e.map((i, s) => ({
      label: `${i.name} +${i.phoneNumberPrefix}`,
      value: i.code,
      order: s
    })),
    value: t == null ? void 0 : t.code,
    valueRenderer: () => h(pR, {
      code: t == null ? void 0 : t.code,
      name: t == null ? void 0 : t.name
    })
  }))
}
a(mR, "CountrySelector");
c();
var Ln = U(Ge());
var _R = (0,
  Ln.forwardRef)(a(function({ value: t, onChange: r, ...n }, o) {
    let i = Ln.default.useRef(t)
      , [s, l] = Ln.default.useState(null);
    return Ln.default.useEffect(() => {
      if (i.current.length < t.length && s) {
        let u = i.current[s - 1]
          , f = t.indexOf(u, s - 1);
        l(f)
      }
      i.current !== t && (i.current = t)
    }
      , [t, s]),
      Ln.default.useEffect(() => {
        o && "current" in o && o.current && o.current.setSelectionRange(s, s)
      }
        , [o, s, t]),
      h("input", {
        ref: o,
        value: t,
        onChange: a(u => {
          l(u.target.selectionStart),
            r(u)
        }
          , "handleChange"),
        ...n
      })
  }, "ControlledPhoneInput"));
function Lu(e, t) {
  return e.find(r => r.code === t)
}
a(Lu, "findCountryByCode");
function $u({ formField: e, error: t, register: r, countries: n, initialCountryCode: o, watch: i, setValue: s, clearErrors: l, root: d }) {
  var K;
  let [u, f] = Ot.default.useState(() => {
    if (o)
      return Lu(n, o)
  }
  )
    , p = (0,
      Ot.useRef)(null)
    , [_, S] = Ot.default.useState(u ? `+${u.phoneNumberPrefix} ` : "")
    , g = (0,
      Ot.useRef)(u)
    , T = Ot.default.useCallback(I => {
      s(e.name, I),
        S(I)
    }
      , [e.name, s])
    , b = (0,
      Ot.useMemo)(() => new Zi(u == null ? void 0 : u.code, u == null ? void 0 : u.phoneNumberPrefix.toString()), [u])
    , x = $e(e.validators);
  x.required || (x.required = !1);
  let { ref: A, ...P } = r(e.name, x)
    , L = Ot.default.useCallback(I => {
      if (I === (u == null ? void 0 : u.code))
        return;
      let z = Lu(n, I);
      z && f(z),
        _.length < 1 && T(`+${u == null ? void 0 : u.phoneNumberPrefix}`)
    }
      , [n, _, u, T]);
  function D(I) {
    if (l(),
      I.length < _.length || I.length <= 3)
      T(I);
    else {
      T(b.formatPhoneNumber(I));
      let z = b.getCountryCodeFromPhoneNumber(I);
      if (z && z !== (u == null ? void 0 : u.code)) {
        let ue = Lu(n, z);
        ue && f(ue)
      }
    }
  }
  return a(D, "phoneInputHandler"),
    (0,
      Ot.useEffect)(() => {
        var I, z;
        if (g.current !== u) {
          if (!_)
            T(b.formatPhoneNumber(`+${u == null ? void 0 : u.phoneNumberPrefix}`));
          else if (_.includes(`+${(I = g.current) == null ? void 0 : I.phoneNumberPrefix}`)) {
            let ue = _.replace(`+${(z = g.current) == null ? void 0 : z.phoneNumberPrefix}`, `+${u == null ? void 0 : u.phoneNumberPrefix}`);
            T(b.formatPhoneNumber(ue))
          }
        }
        g.current = u
      }
        , [_, u, b, n, T]),
    Ot.default.useEffect(() => {
      if (o) {
        let I = Lu(n, o);
        I && f(I)
      }
    }
      , [n, o]),
    h("div", {
      className: Pp.formPhoneInputContainer
    }, h(mR, {
      countryList: n,
      selectedCountry: u,
      onCountryChange: L,
      error: !!(t != null && t.message),
      root: d
    }), h(Qr, {
      error: t == null ? void 0 : t.message,
      label: e.label,
      name: e.name,
      isFilled: !!(i(e.name) || _),
      inputHeight: (K = p.current) == null ? void 0 : K.clientHeight
    }, h(_R, {
      className: Pp.formPhoneInputField,
      key: e.id,
      type: "tel",
      autoComplete: "tel",
      "aria-invalid": t ? "true" : "false",
      "aria-label": e.label,
      "aria-labelledby": `label-${e.label}`,
      id: e.name,
      "data-testid": `field-${e.name}`,
      ...P,
      ref: p,
      value: i(e.name) || _,
      onChange: I => D(I.target.value),
      onFocus: I => I.target.setSelectionRange(I.target.value.length, I.target.value.length)
    })))
}
a($u, "PhoneInput");
c();
var Du = U(Ge());
c();
var ER = U(Ge());
c();
var hR = "59314642ea3520775a3d70410c31ff51278d9673e835228433be4914151de84c"
  , lH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

/* Input fields & error handling */

input._formInputField_237zm_7::-webkit-outer-spin-button,
input._formInputField_237zm_7::-webkit-inner-spin-button {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  margin: 0;
}

input._formInputField_237zm_7 {
  /* Reset styles that might be added on the HTML element directly */
  all: unset;

  /* Fix missing box shadow on iOS mobile */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-appearance: textfield;
  padding: var(--form-field-padding);
  padding-top: var(--form-field-padding-top);
  padding-bottom: var(--form-field-padding-bottom);
  font: var(--forms-body-font);
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  box-shadow: var(--form-field-border);
  border: none;
  outline: none;
  border-radius: var(--form-field-border-radius);
}

._formInputField_237zm_7:-webkit-autofill ~ label {
  /* All browsers that change input color on autofill use a "light" background
    thus when the field is autofilled we set the color to our default light background text color
  */
  color: rgba(32, 32, 32, 0.85);
}

/* Overrides for 1password autofill TODO: check other  similiar apps */
._formInputField_237zm_7[data-com-onepassword-filled='light'] ~ label {
  color: rgba(32, 32, 32, 0.85);
}

._formInputField_237zm_7[data-com-onepassword-filled='dark'] ~ label {
  color: rgba(255, 255, 255, 0.85);
}

input._formInputField_237zm_7::placeholder {
  opacity: 0;
}

input._formInputField_237zm_7:focus-visible {
  border: none;
  outline: none;
  box-shadow: var(--form-field-border-focused);
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage input._formInputField_237zm_7 {
    padding: calc(var(--form-field-padding) / var(--preview-scale));
    padding-top: calc(var(--form-field-padding-top) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(hR) || e.set(hR, lH.replace(/:root/g, ":host"))
  }
}
)();
var gR = {
  previewDesktop: "893px",
  formInputField: "_formInputField_237zm_7"
};
var cH = a(e => {
  switch (e) {
    case "email":
      return "email";
    case "number":
      return "numeric";
    default:
      return "text"
  }
}
  , "getKeyboardMode")
  , Np = (0,
    ER.forwardRef)(({ labelSize: e, name: t, value: r, onBlur: n, onChange: o, formField: i, error: s }, l) => {
      var d;
      return h("input", {
        ref: l,
        id: t,
        className: gR.formInputField,
        inputMode: cH(i.type),
        type: i.type === "number" ? "number" : "text",
        autoComplete: "off",
        "aria-invalid": s ? "true" : "false",
        "aria-labelledby": `label-${t}`,
        "data-testid": `field-${t}`,
        placeholder: i.placeholder || "",
        value: r,
        onBlur: n,
        onChange: o,
        style: {
          minHeight: ((d = e == null ? void 0 : e.height) != null ? d : 0) > 14 ? `calc(${e == null ? void 0 : e.height}px + 14px) ` : void 0
        }
      })
    }
    );
Np.displayName = "InputSizer";
function Uu({ formField: e, error: t, control: r }) {
  let n = Du.default.useRef(null)
    , o = $e(e.validators);
  return o && !o.required && (o.required = !1),
    (0,
      Du.useEffect)(() => {
        let i = n.current;
        if (i && e.type === "number") {
          let s = a(l => l.preventDefault(), "handleWheel");
          return i.addEventListener("wheel", s),
            () => {
              i.removeEventListener("wheel", s)
            }
        }
      }
        , [e.type]),
    h(bo, {
      name: e.name,
      control: r,
      rules: {
        ...o
      },
      defaultValue: e.defaultValue || "",
      render: ({ field: { value: i, onBlur: s, name: l, ref: d, onChange: u }, fieldState: { error: f, isDirty: p } }) => {
        var S;
        let _ = i !== "" && p;
        return h(Qr, {
          error: (f == null ? void 0 : f.message) || (t == null ? void 0 : t.message),
          label: e.label,
          name: l,
          isFilled: _,
          inputHeight: (S = n.current) == null ? void 0 : S.clientHeight
        }, h(Np, {
          ref: g => {
            d(g),
              n.current = g
          }
          ,
          name: l,
          value: i,
          onBlur: s,
          onChange: g => {
            let T = g;
            e.type === "email" && (T = {
              ...g,
              target: {
                ...g.target,
                value: g.target.value.replace(/\s/g, "")
              }
            }),
              u(T)
          }
          ,
          formField: e,
          error: t
        }))
      }
    })
}
a(Uu, "Input");
var TR = a(({ formField: e, control: t, register: r, watch: n, setValue: o, clearErrors: i, selectedCountry: s, initialCountryCode: l, countryChangeHandler: d, countries: u, selectedZone: f, zoneChangeHandler: p, zones: _, root: S, error: g, validators: T, formLayout: b, multiLine: x }) => {
  if (!e)
    return null;
  let A = a(() => b !== "inline" ? !0 : !x, "isRelativeToSelf");
  switch (e.addressField) {
    case "country":
      return h(Xf, {
        regionList: u || [],
        name: e.name,
        label: e.label,
        selectedRegion: s,
        defaultValue: l,
        onRegionChange: d,
        control: t,
        root: S,
        rules: T,
        dropdownRelativeToSelf: A()
      });
    case "province":
      return h(Xf, {
        regionList: _ || [],
        name: e.name,
        label: e.label,
        selectedRegion: f,
        onRegionChange: p,
        control: t,
        root: S,
        dropdownRelativeToSelf: A()
      });
    case "phone":
      return h($u, {
        formField: e,
        error: g,
        register: r,
        countries: u,
        watch: n,
        setValue: o,
        clearErrors: i,
        initialCountryCode: s == null ? void 0 : s.code,
        root: S
      });
    default:
      return h(Uu, {
        key: e.name,
        formField: e,
        control: t,
        error: g
      })
  }
}
  , "AddressField");
c();
c();
var vR = "b86486b8137d644e6218b6531537e1b2d1508d16a089177107a984a0d4586459"
  , dH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(vR) || e.set(vR, dH.replace(/:root/g, ":host"))
  }
}
)();
var SR = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var yR = "a28b278258b90eea0c6272635e8320c47839131a3bc103e0079f6f4191ce7f27"
  , fH = `._checkboxField_11ej1_1 {
  padding: 4px 0;
  display: flex;
  align-items: center;
}

._checkboxInput_11ej1_7 {
  box-sizing: border-box;
  margin-right: 8px;
  margin-left: 0;
  width: 16px;
  height: 16px;
  accent-color: var(--forms-accent-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(yR) || e.set(yR, fH.replace(/:root/g, ":host"))
  }
}
)();
var wp = {
  checkboxField: "_checkboxField_11ej1_1",
  checkboxInput: "_checkboxInput_11ej1_7"
};
var AR = a(({ formField: { label: e, name: t, validators: r }, register: n }) => {
  let o = {
    ...n(t, {
      ...$e(r)
    })
  };
  return h("label", {
    key: t,
    id: `${t}-label`,
    htmlFor: t,
    className: st([wp.checkboxField])
  }, h("input", {
    className: wp.checkboxInput,
    id: t,
    type: "checkbox",
    "aria-label": e,
    defaultChecked: !0,
    ...o
  }), h("span", {
    className: SR.textBody
  }, e))
}
  , "SameAsCheckbox");
var bR = a(({ formField: e, control: t, register: r, watch: n, setValue: o, clearErrors: i, initialCountryCode: s, getCountrySettings: l, countries: d, root: u, errors: f, sameAsField: p, formLayout: _ }) => {
  let [S, g] = (0,
    At.useState)(void 0)
    , [T, b] = (0,
      At.useState)(void 0)
    , x = `same_as_${p == null ? void 0 : p.name}`
    , A = n(x)
    , P = n(`${p == null ? void 0 : p.name}_country`)
    , L = n(`${p == null ? void 0 : p.name}_recipient`)
    , D = n(`${p == null ? void 0 : p.name}_address1`)
    , K = n(`${p == null ? void 0 : p.name}_address2`)
    , I = n(`${p == null ? void 0 : p.name}_${Ro}`)
    , z = n(`${p == null ? void 0 : p.name}_city`)
    , ue = n(`${p == null ? void 0 : p.name}_zip`)
    , Ee = n(`${p == null ? void 0 : p.name}_phone`)
    , de = n(`${p == null ? void 0 : p.name}_first_name`)
    , j = n(`${p == null ? void 0 : p.name}_last_name`)
    , [J, oe] = (0,
      At.useState)([])
    , [N, q] = (0,
      At.useState)(zf)
    , [ae, k] = (0,
      At.useState)({})
    , re = $e(e.validators);
  re && !re.required && (re.required = !1);
  let ce = (0,
    At.useCallback)(async ee => {
      if (ee === (S == null ? void 0 : S.code))
        return;
      let Ve = d.find(Z => Z.code === ee);
      if (Ve && g(Ve),
        l) {
        let Z = await l(ee);
        oe((Z == null ? void 0 : Z.zones) || []),
          b(void 0),
          k((Z == null ? void 0 : Z.localization) || {}),
          q((Z == null ? void 0 : Z.format) || zf)
      }
    }
      , [d, l, S])
    , ne = (0,
      At.useCallback)(async ee => {
        if (ee === (T == null ? void 0 : T.code))
          return;
        let Ve = J.find(Z => Z.code === ee);
        Ve && b(Ve)
      }
        , [T == null ? void 0 : T.code, J]);
  (0,
    At.useEffect)(() => {
      s && !S && ce(s)
    }
      , [S, s, ce]);
  let ye = (0,
    At.useMemo)(() => Kx(e.name, N, ae, e.validators), [N, ae, e]);
  return (0,
    At.useEffect)(() => {
      if (A) {
        let ee = {
          country: P,
          recipient: L,
          address1: D,
          address2: K,
          city: z,
          zip: ue,
          phone: Ee,
          first_name: de,
          last_name: j,
          [Ro]: I
        };
        (async () => (P && await ce(P),
          I && await ne(I)))(),
          Object.entries(ee).forEach(([Ve, Z]) => {
            o(`${e == null ? void 0 : e.name}_${Ve}`, Z, {
              shouldDirty: !!Z
            })
          }
          )
      }
    }
      , [A, e, P, D, K, z, Ee, I, L, ue, de, j, o, ce, ne]),
    h(Fragment, null, e.label ? h("legend", {
      className: jx.textBody
    }, e.label) : null, p ? h(AR, {
      formField: {
        name: x,
        order: 0,
        label: Xx(p, ae),
        validators: [],
        type: "checkbox"
      },
      register: r
    }) : null, A ? null : ye.map(ee => {
      var ht;
      let Ve = ee.length > 1
        , Z = Ve && _ === "inline";
      return h("div", {
        key: (ht = ee[0]) == null ? void 0 : ht.name,
        className: Z ? yu.multiFieldLine : yu.nonMultineFieldLine
      }, ee.map(We => h("div", {
        key: We == null ? void 0 : We.name,
        className: Z ? yu.fieldContainer : void 0
      }, h(TR, {
        multiLine: Ve,
        formLayout: _,
        formField: We,
        control: t,
        register: r,
        watch: n,
        setValue: o,
        clearErrors: i,
        selectedCountry: S,
        initialCountryCode: s,
        countryChangeHandler: ce,
        countries: d,
        selectedZone: T,
        zoneChangeHandler: ne,
        zones: J,
        root: u,
        error: We != null && We.name ? f == null ? void 0 : f[We.name] : void 0,
        validators: {
          ...re
        }
      }))))
    }
    ))
}
  , "AddressInput");
c();
c();
c();
c();
c();
c();
function fr(e, t) {
  let r = new WeakMap
    , n = new Map
    , o = [];
  return a(function(...s) {
    if (typeof window == "undefined")
      return e.apply(this, s);
    let l = s.length === 1 && typeof s[0] == "object" && !t, d;
    l ? d = s[0] : t && t instanceof Function ? d = t(...s) : d = s[0];
    let u = l ? r : n;
    if (u.has(d))
      return u.get(d);
    let f = e.apply(this, s);
    if (l)
      r.set(d, f);
    else if (n.set(d, f),
      o.push(d),
      n.size > 50) {
      let p = o[0];
      n.delete(p),
        o.shift()
    }
    return f
  }, "memoized")
}
a(fr, "memoize");
c();
function Qi(e) {
  return e.replace("\u200E", "")
}
a(Qi, "sanitiseDateString");
c();
c();
c();
var Ip = {
  "America/Indiana": "America/Indiana/Indianapolis",
  "America/Argentina": "America/Argentina/Buenos_Aires",
  "Asia/Chongqing": "Asia/Shanghai",
  "Asia/Istanbul": "Europe/Istanbul",
  "Australia/ACT": "Australia/Sydney",
  "Australia/LHI": "Australia/Lord_Howe",
  "Australia/North": "Australia/Darwin",
  "Australia/NSW": "Australia/Sydney",
  "Australia/Queensland": "Australia/Brisbane",
  "Australia/South": "Australia/Adelaide",
  "Australia/Tasmania": "Australia/Hobart",
  "Australia/Victoria": "Australia/Melbourne",
  "Australia/West": "Australia/Perth",
  "Brazil/Acre": "America/Rio_Branco",
  "Brazil/DeNoronha": "America/Noronha",
  "Brazil/East": "America/Sao_Paulo",
  "Brazil/West": "America/Manaus",
  "Canada/Atlantic": "America/Halifax",
  "Canada/Central": "America/Winnipeg",
  "Canada/Eastern": "America/Toronto",
  "Canada/Mountain": "America/Edmonton",
  "Canada/Newfoundland": "America/St_Johns",
  "Canada/Pacific": "America/Vancouver",
  "Canada/Saskatchewan": "America/Regina",
  "Canada/Yukon": "America/Whitehorse",
  "Chile/Continental": "America/Santiago",
  "Chile/EasterIsland": "Pacific/Easter",
  Cuba: "America/Havana",
  Egypt: "Africa/Cairo",
  Eire: "Europe/Dublin",
  "Europe/Kyiv": "Europe/Kiev",
  "Etc/Greenwich": "Etc/GMT",
  "Etc/UCT": "UTC",
  "Etc/Universal": "UTC",
  "Etc/Unknown": "UTC",
  "Etc/Zulu": "UTC",
  GB: "Europe/London",
  "GB-Eire": "Europe/London",
  "GMT+0": "Etc/GMT",
  GMT0: "Etc/GMT",
  "GMT\u22120": "Etc/GMT",
  Greenwich: "Etc/GMT",
  Hongkong: "Asia/Hong_Kong",
  Iceland: "Atlantic/Reykjavik",
  Iran: "Asia/Tehran",
  Israel: "Asia/Jerusalem",
  Jamaica: "America/Jamaica",
  Japan: "Asia/Tokyo",
  Kwajalein: "Pacific/Kwajalein",
  Libya: "Africa/Tripoli",
  "Mexico/BajaNorte": "America/Tijuana",
  "Mexico/BajaSur": "America/Mazatlan",
  "Mexico/General": "America/Mexico_City",
  Navajo: "America/Denver",
  NZ: "Pacific/Auckland",
  "NZ-CHAT": "Pacific/Chatham",
  Poland: "Europe/Warsaw",
  Portugal: "Europe/Lisbon",
  PRC: "Asia/Shanghai",
  ROC: "Asia/Taipei",
  ROK: "Asia/Seoul",
  Singapore: "Asia/Singapore",
  Turkey: "Europe/Istanbul",
  UCT: "UTC",
  Universal: "UTC",
  "US/Alaska": "America/Anchorage",
  "US/Aleutian": "America/Adak",
  "US/Arizona": "America/Phoenix",
  "US/Central": "America/Chicago",
  "US/Eastern": "America/New_York",
  "US/East-Indiana": "America/Indiana/Indianapolis",
  "US/Hawaii": "Pacific/Honolulu",
  "US/Indiana-Starke": "America/Indiana/Knox",
  "US/Michigan": "America/Detroit",
  "US/Mountain": "America/Denver",
  "US/Pacific": "America/Los_Angeles",
  "US/Pacific-New": "America/Los_Angeles",
  "US/Samoa": "Pacific/Pago_Pago",
  "W-SU": "Europe/Moscow",
  Zulu: "UTC"
};
function xR(e) {
  return Object.keys(Ip).some(t => t === e) ? Ip[e] : e
}
a(xR, "mapDeprecatedTimezones");
var Mp = new Map;
function CR(e, t) {
  let r = t != null && t.timeZone ? xR(t.timeZone) : void 0
    , n = pH(e, {
      ...t,
      timeZone: r
    });
  if (Mp.has(n))
    return Mp.get(n);
  let o = new Intl.DateTimeFormat(e, {
    ...t,
    timeZone: r
  });
  return Mp.set(n, o),
    o
}
a(CR, "memoizedGetDateTimeFormat");
var RR = Intl.DateTimeFormat("en", {
  hour: "numeric"
})
  , OR = typeof RR.resolvedOptions == "undefined" ? void 0 : RR.resolvedOptions();
function Pr(e, t, r = {}) {
  if (OR != null && r.hour12 === !1 && OR.hourCycle != null && (r.hour12 = void 0,
    r.hourCycle = "h23"),
    r.timeZone != null && r.timeZone === "Etc/GMT+12") {
    let o = new Date(e.valueOf() - 432e5);
    return CR(t, {
      ...r,
      timeZone: "UTC"
    }).format(o)
  }
  return CR(t, r).format(e)
}
a(Pr, "formatDate");
function pH(e, t = {}) {
  return `${Array.isArray(e) ? e.sort().join("-") : e}-${JSON.stringify(t)}`
}
a(pH, "dateTimeFormatCacheKey");
var Fu, Lp = /(\d{2})/;
function NR(e, t) {
  return {
    year: a(() => ze.getYear(e, t), "year"),
    month: a(() => ze.getMonth(e, t), "month"),
    day: a(() => ze.getDay(e, t), "day"),
    weekday: a(() => ze.getWeekday(e, t), "weekday"),
    hour: a(() => ze.getHour(e, t), "hour"),
    minute: a(() => ze.getMinute(e, t), "minute"),
    second: a(() => ze.getSecond(e, t), "second")
  }
}
a(NR, "getDateTimeParts");
function Jr(e) {
  return (t, r) => `${e}-${t.toString()}-${r}`
}
a(Jr, "dateTimeCacheKey");
var PR;
(function(e) {
  e.Monday = "Monday",
    e.Tuesday = "Tuesday",
    e.Wednesday = "Wednesday",
    e.Thursday = "Thursday",
    e.Friday = "Friday",
    e.Saturday = "Saturday",
    e.Sunday = "Sunday"
}
)(PR || (PR = {}));
var wR = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6
};
function mH(e) {
  return Object.keys(wR).some(t => t === e)
}
a(mH, "isWeekday");
function _H(e) {
  throw new Error(e)
}
a(_H, "assertNever");
function hH(e) {
  return mH(e) ? wR[e] : _H(`Unexpected weekday: ${e}`)
}
a(hH, "getWeekdayValue");
var $p = class $p {
}
  ;
a($p, "DateTimeParts");
var ze = $p;
Fu = ze;
ze.getYear = fr((e, t) => {
  if (isNaN(e.valueOf()))
    throw new Error(`Unable to parse date: ${e} for timezone: ${t}`);
  let r = Pr(e, "en", {
    timeZone: t,
    year: "numeric"
  })
    , n = Qi(r)
    , o = parseInt(n, 10);
  if (isNaN(o))
    throw new Error(`Unable to parse year: '${r}'`);
  return o
}
  , Jr("year"));
ze.getMonth = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    month: "numeric"
  })
    , n = Qi(r)
    , o = parseInt(n, 10);
  if (isNaN(o))
    throw new Error(`Unable to parse month: '${r}'`);
  return o
}
  , Jr("month"));
ze.getDay = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    day: "numeric"
  })
    , n = Qi(r)
    , o = parseInt(n, 10);
  if (isNaN(o))
    throw new Error(`Unable to parse day: '${r}'`);
  return o
}
  , Jr("day"));
ze.getWeekday = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    weekday: "long"
  })
    , n = Qi(r);
  return hH(n)
}
  , Jr("weekday"));
ze.getHour = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    hour12: !1,
    hour: "numeric"
  })
    , n = parseInt(r, 10);
  return isNaN(n) && (n = Fu.getTimePartsFallback(e, t).hour),
    n
}
  , Jr("hour"));
ze.getMinute = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    minute: "numeric"
  })
    , n = parseInt(r, 10);
  return isNaN(n) && (n = Fu.getTimePartsFallback(e, t).minute),
    n
}
  , Jr("minute"));
ze.getSecond = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    second: "numeric"
  })
    , n = parseInt(r, 10);
  return isNaN(n) && (n = Fu.getTimePartsFallback(e, t).second),
    n
}
  , Jr("second"));
ze.getTimePartsFallback = fr((e, t) => {
  let r = Pr(e, "en", {
    timeZone: t,
    hour12: !1,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })
    , [n, o, i] = r.split(":")
    , s = new RegExp(Lp).exec(n)
    , l = new RegExp(Lp).exec(o)
    , d = new RegExp(Lp).exec(i);
  if (s != null && l != null && d != null) {
    let u = parseInt(s[1], 10)
      , f = parseInt(l[1], 10)
      , p = parseInt(d[1], 10);
    return {
      hour: u,
      minute: f,
      second: p
    }
  }
  throw new Error(`Unable to parse timeString: '${r}'`)
}
  , Jr("timePartsFallback"));
function MR(e = new Date, t, r) {
  let n = IR(e, t)
    , o = IR(e, r);
  return (n.valueOf() - o.valueOf()) / (1e3 * 60)
}
a(MR, "getTimeZoneOffset");
function IR(e, t) {
  let { year: r, month: n, day: o, hour: i, minute: s, second: l } = NR(e, t);
  return new Date(Date.UTC(r(), n() - 1, o(), i(), s(), l()))
}
a(IR, "constructZonedDateFromParts");
c();
function Bu(e, t, r) {
  let n = MR(e, t, r);
  return new Date(e.valueOf() + n * 60 * 1e3)
}
a(Bu, "unapplyTimeZoneOffset");
c();
var Vt = U(Ge());
c();
var LR = "8da22b54fb5b40f2bd1f022f1f8a5b22484be19332afcfe91b52a802563c5689"
  , gH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

/* Input fields & error handling */

input._formInputField_237zm_7::-webkit-outer-spin-button,
input._formInputField_237zm_7::-webkit-inner-spin-button {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  margin: 0;
}

input._formInputField_237zm_7 {
  /* Reset styles that might be added on the HTML element directly */
  all: unset;

  /* Fix missing box shadow on iOS mobile */
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-appearance: none;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -moz-appearance: textfield;
  padding: var(--form-field-padding);
  padding-top: var(--form-field-padding-top);
  padding-bottom: var(--form-field-padding-bottom);
  font: var(--forms-body-font);
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  box-shadow: var(--form-field-border);
  border: none;
  outline: none;
  border-radius: var(--form-field-border-radius);
}

._formInputField_237zm_7:-webkit-autofill ~ label {
  /* All browsers that change input color on autofill use a "light" background
    thus when the field is autofilled we set the color to our default light background text color
  */
  color: rgba(32, 32, 32, 0.85);
}

/* Overrides for 1password autofill TODO: check other  similiar apps */
._formInputField_237zm_7[data-com-onepassword-filled='light'] ~ label {
  color: rgba(32, 32, 32, 0.85);
}

._formInputField_237zm_7[data-com-onepassword-filled='dark'] ~ label {
  color: rgba(255, 255, 255, 0.85);
}

input._formInputField_237zm_7::placeholder {
  opacity: 0;
}

input._formInputField_237zm_7:focus-visible {
  border: none;
  outline: none;
  box-shadow: var(--form-field-border-focused);
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage input._formInputField_237zm_7 {
    padding: calc(var(--form-field-padding) / var(--preview-scale));
    padding-top: calc(var(--form-field-padding-top) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(LR) || e.set(LR, gH.replace(/:root/g, ":host"))
  }
}
)();
var $R = {
  previewDesktop: "893px",
  formInputField: "_formInputField_237zm_7"
};
c();
var DR = "720c90609e23dcaf1c00c271144155e5943a5340d419796d5169b39ee9f884c1"
  , EH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-no-qualifying-type */

div._dateFieldContainer_rzr7e_5 {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 2fr);
  grid-gap: 8px;
}

div._dateFieldContainerYearFirst_rzr7e_11 {
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr);
}

div._birthdayText_rzr7e_15 {
  font: var(--forms-body-font);
  color: var(--body-text-color);
  padding-bottom: 10px;
}

div._withError_rzr7e_21 {
  color: var(--form-error-color);
  font: var(--forms-body-font);
  line-height: var(--forms-base-font-line-height);
  padding-bottom: 10px;
  padding-top: 10px;
}

input._withError_rzr7e_21 {
  box-shadow: 0 0 0 2px var(--form-error-color);
}

@media screen and (min-width: 893px) {
  /* stylelint-disable selector-pseudo-class-no-unknown, selector-max-specificity */
  .isPreview.isPreview--withImage div._birthdayText_rzr7e_15 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
  /* stylelint-enable selector-pseudo-class-no-unknown, selector-max-specificity */
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(DR) || e.set(DR, EH.replace(/:root/g, ":host"))
  }
}
)();
var $n = {
  previewDesktop: "893px",
  dateFieldContainer: "_dateFieldContainer_rzr7e_5",
  dateFieldContainerYearFirst: "_dateFieldContainerYearFirst_rzr7e_11",
  birthdayText: "_birthdayText_rzr7e_15",
  withError: "_withError_rzr7e_21"
};
var Dp = {
  day: {
    min: 1,
    max: 31
  },
  month: {
    min: 1,
    max: 12
  },
  year: {
    min: 1e3,
    max: 9999
  }
};
function Vu(e, t) {
  let r = {
    ...Dp[t],
    length: `${Dp[t].max}`.length
  }
    , n = parseInt(e, 10)
    , o = !1
    , i = !1
    , s = !1;
  if (i = n >= r.min && n <= r.max || n === 0 && e.length < r.length,
    e.length < r.length) {
    let l = parseInt(e.padEnd(r.length, "0"), 10)
      , d = parseInt(e.padEnd(r.length, "9"), 10);
    o = l >= r.min && l <= r.max || d >= r.min && d <= r.max,
      s = !1
  } else
    o = !1,
      s = !0;
  return {
    isValid: i,
    canAddChar: o,
    reachedMaxChar: s
  }
}
a(Vu, "validateInput");
function UR({ mask: e, onChange: t, label: r, error: n, onBlur: o }) {
  let i = Vt.useRef({
    day: null,
    month: null,
    year: null
  })
    , [s, l] = Vt.useState({
      day: "",
      month: "",
      year: ""
    });
  Vt.useEffect(() => {
    if (t) {
      let g = Object.keys(e).sort((T, b) => e[T].order - e[b].order).map(T => s[T]);
      t(g.filter(Boolean).length > 0 ? g.join("/") : "")
    }
  }
    , [s, t, e]);
  let d = Vt.useCallback((g, T = "next") => {
    var A;
    let b = e[g].order + 1;
    T === "prev" && (b = e[g].order - 1);
    let x = Object.keys(e).find(P => e[P].order === b);
    x && ((A = i.current[x]) == null || A.focus())
  }
    , [e])
    , u = Vt.useCallback((g, T) => {
      let b = g.target;
      switch (g.code) {
        case "ArrowLeft":
          {
            d(T, "prev");
            break
          }
        case "ArrowRight":
          {
            d(T);
            break
          }
        case "ArrowDown":
        case "ArrowUp":
          {
            if (T !== "year") {
              let P = ((g.code === "ArrowDown" ? parseInt(b.value, 10) - 1 : parseInt(b.value, 10) + 1) || 1).toString()
                , { isValid: L, reachedMaxChar: D } = Vu(P, T);
              L && l(K => ({
                ...K,
                [T]: D ? P : `0${P}`
              }))
            } else {
              let P = ((g.code === "ArrowDown" ? parseInt(b.value, 10) - 1 : parseInt(b.value, 10) + 1) || 2e3).toString()
                , { isValid: L } = Vu(P, T);
              L && l(D => ({
                ...D,
                [T]: P
              }))
            }
            g.preventDefault();
            break
          }
      }
    }
      , [d])
    , f = Vt.useCallback((g, T) => {
      if (new RegExp(/^[0-9]*$/g).test(g))
        if (!g)
          l(b => ({
            ...b,
            [T]: g
          }));
        else if (T === "year") {
          let { isValid: b, reachedMaxChar: x, canAddChar: A } = Vu(g, T);
          !A && !x ? l(P => ({
            ...P,
            [T]: g.slice(0, -1)
          })) : g.length <= 4 ? (l(P => ({
            ...P,
            [T]: g
          })),
            b && d(T)) : l(P => ({
              ...P,
              [T]: g.slice(0, -1)
            }))
        } else {
          let { isValid: b, reachedMaxChar: x, canAddChar: A } = Vu(g, T);
          b && g.length <= 2 ? (l(P => ({
            ...P,
            [T]: !A && !x ? `0${g}` : g
          })),
            x ? d(T) : A || d(T)) : l(P => ({
              ...P,
              [T]: g.slice(0, -1)
            }))
        }
      else
        l(b => ({
          ...b,
          [T]: g.slice(0, -1)
        }))
    }
      , [d])
    , p = Vt.useCallback((g, T) => {
      let { value: b } = g.target
        , x = Dp[T]
        , A = parseInt(b, 10);
      b && (b === "0" || A > x.max || A < x.min ? l(L => ({
        ...L,
        [T]: ""
      })) : T !== "year" && b.length < `${x.max}`.length && l(L => ({
        ...L,
        [T]: `0${b}`
      }))),
        !Object.keys(i.current).some(L => i.current[L] === g.relatedTarget) && o && o()
    }
      , [o])
    , _ = Vt.useCallback(g => {
      let T = i.current[g];
      T != null && T.value && setTimeout(() => {
        T.setSelectionRange(0, T.value.length)
      }
      )
    }
      , [])
    , S = e.year.order === 0;
  return h("div", {
    "data-testid": "date-birthday"
  }, h("div", {
    className: $n.birthdayText
  }, r), h("div", {
    className: [$n.dateFieldContainer, S && $n.dateFieldContainerYearFirst].filter(Boolean).join(" ")
  }, Object.keys(e).sort((g, T) => e[g].order - e[T].order).map(g => {
    var x;
    let T = e[g]
      , b = s[g];
    return h(Qr, {
      key: `date-${g}`,
      label: T.placeholder,
      name: T.placeholder,
      isFilled: !!b,
      inputHeight: (x = i.current[g]) == null ? void 0 : x.clientHeight
    }, h("input", {
      className: [$R.formInputField, n && $n.withError].filter(Boolean).join(" "),
      type: "text",
      pattern: "[0-9]",
      autoComplete: "off",
      "aria-invalid": n ? "true" : "false",
      value: b,
      "aria-labelledby": `label-${T.placeholder}`,
      onChange: A => f(A.target.value, g),
      onKeyDown: A => u(A, g),
      onFocus: () => _(g),
      onClick: () => _(g),
      onBlur: A => p(A, g),
      ref: A => i.current[g] = A
    }))
  }
  )), n && h("div", {
    className: [$n.birthdayText, $n.withError].join(" ")
  }, n))
}
a(UR, "CustomDateInput");
function TH(e) {
  switch (e.name) {
    case "maximum":
      {
        let r = Bu(new Date(typeof e.maximum == "string" ? parseInt(e.maximum, 10) : e.maximum), "UTC").getTime();
        return {
          ...e,
          maximum: r
        }
      }
    case "minimum":
      {
        let r = Bu(new Date(typeof e.minimum == "string" ? parseInt(e.minimum, 10) : e.minimum), "UTC").getTime();
        return {
          ...e,
          minimum: r
        }
      }
    default:
      return e
  }
}
a(TH, "convertToUTC");
function FR({ formField: e, error: t, control: r }) {
  let n = jf[e.format]
    , o = $e(e.validators.map(TH), n);
  o.required || (o.required = !1);
  let i = Ri({
    name: e.name,
    control: r,
    rules: o
  });
  return h(UR, {
    "data-testid": `field-${e.name}`,
    key: e.id,
    mask: n,
    label: e.label,
    error: t == null ? void 0 : t.message,
    onBlur: i.field.onBlur,
    onChange: i.field.onChange
  })
}
a(FR, "DateInput");
c();
c();
var BR = "e25e9127d84bf76ee2ddc5a293ff0f452ed009baf4812561a33921ebf02d265d"
  , vH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(BR) || e.set(BR, vH.replace(/:root/g, ":host"))
  }
}
)();
var Up = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var VR = "610f05dc021775cf71175c953496769e021dcd7c774956cc9ad7ac485dd80e23"
  , SH = `._radioFieldSet_nw6va_1 {
  border: none;
  padding: 0;
}

._verticalLayout_nw6va_6 {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

._horizontalLayout_nw6va_12 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

._radioLegend_nw6va_18 {
  padding-bottom: 10px;
}

._radioField_nw6va_1 {
  display: grid;
  grid-template-columns: 1em minmax(0, 1fr);
  word-break: break-word;
  gap: 10px;
  align-items: center;
  font-size: 1rem;
}

._radioInput_nw6va_31 {
  box-sizing: border-box;
  margin: 0;
  accent-color: var(--forms-accent-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(VR) || e.set(VR, SH.replace(/:root/g, ":host"))
  }
}
)();
var Dn = {
  radioFieldSet: "_radioFieldSet_nw6va_1",
  verticalLayout: "_verticalLayout_nw6va_6",
  horizontalLayout: "_horizontalLayout_nw6va_12",
  radioLegend: "_radioLegend_nw6va_18",
  radioField: "_radioField_nw6va_1",
  radioInput: "_radioInput_nw6va_31"
};
var kR = a(({ formField: { label: e, name: t, validators: r, choices: n = [], format: o }, error: i, register: s }) => {
  let l = {
    ...s(t, {
      ...$e(r)
    })
  }
    , d = o === "horizontal";
  return h("fieldset", {
    name: t,
    className: Dn.radioFieldSet
  }, h("legend", {
    className: st([Up.textBody, Dn.radioLegend])
  }, e), h("div", {
    className: d ? Dn.horizontalLayout : Dn.verticalLayout
  }, n.sort((u, f) => u.order - f.order).map(u => h("label", {
    key: u.value,
    id: `${t}-${u.value}-label`,
    htmlFor: `${t}-${u.value}`,
    className: st([Dn.radioField])
  }, h("input", {
    className: Dn.radioInput,
    id: `${t}-${u.value}`,
    type: "radio",
    defaultValue: u.value,
    "aria-label": u.label,
    ...l
  }), h("span", {
    className: Up.textBody
  }, u.label)))), i && h(Xr, null, i.message))
}
  , "RadioInput");
c();
var HR = a(({ formField: { label: e, name: t, validators: r, choices: n = [] }, control: o, root: i = document }) => {
  let s = $e(r);
  return h(bo, {
    name: t,
    control: o,
    rules: s,
    render: ({ field: { onChange: l, value: d }, fieldState: { error: u } }) => h(Oo, {
      name: t,
      label: e,
      choices: n,
      error: u == null ? void 0 : u.message,
      root: i || document,
      value: d,
      onChange: l
    })
  })
}
  , "SelectControl");
c();
c();
var GR = "79b61474a1c1b74469247f35d257f099a71c72181c4fd0a30ce32b9abdc09fa1"
  , yH = `._textArea_17mgw_1 {
  resize: none;
  font: var(--forms-body-font);
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  box-shadow: var(--form-field-border);
  border: none;
  outline: none;
  border-radius: var(--form-field-border-radius);
  padding: var(--form-field-padding);
  padding-top: var(--form-field-padding-top);
}

._invalid_17mgw_14 {
  box-shadow: 0 0 0 2px var(--form-error-color);
}

._textArea_17mgw_1:focus-visible {
  border: none;
  outline: none;
  box-shadow: var(--form-field-border-focused);
}

@media screen and (min-width: preview-desktop) {
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  .isPreview.isPreview--withImage ._textArea_17mgw_1 {
    padding: calc(var(--form-field-padding) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(GR) || e.set(GR, yH.replace(/:root/g, ":host"))
  }
}
)();
var Fp = {
  textArea: "_textArea_17mgw_1",
  invalid: "_invalid_17mgw_14"
};
var YR = a(({ formField: { name: e, validators: t, label: r }, register: n, getValues: o, error: i }) => {
  let s = {
    ...n(e, {
      ...$e(t)
    })
  }
    , l = o(e)
    , d = l && l.length > 0;
  return h(Qr, {
    error: i == null ? void 0 : i.message,
    label: r,
    name: e,
    isFilled: d,
    inputHeight: 46
  }, h(AH, {
    registerData: s,
    className: st({
      [Fp.textArea]: !0,
      [Fp.invalid]: !!i
    })
  }))
}
  , "TextAreaInput");
function AH({ registerData: e, className: t }) {
  return h("textarea", {
    ...e,
    rows: 3,
    className: t
  })
}
a(AH, "DynamicHeightTextArea");
c();
c();
var jR = "39702e8e22169234412d1c1e6b0bb0a7e2f49de9ec81bdf26bfd5fdf3725a764"
  , bH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(jR) || e.set(jR, bH.replace(/:root/g, ":host"))
  }
}
)();
var Bp = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var zR = "e9e64016efcbff67603c5bade0e724be6a787c679ad495d68e285cf499e91435"
  , xH = `._checkboxFieldSet_171zd_1 {
  border: none;
  padding: 0;
}

._verticalLayout_171zd_6 {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

._horizontalLayout_171zd_12 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

._checkboxLegend_171zd_18 {
  padding-bottom: 10px;
}

._checkboxField_171zd_1 {
  display: grid;
  grid-template-columns: 1em minmax(0, 1fr);
  gap: 10px;
  align-items: center;
  font-size: 1em;
  word-break: break-word;
}

._checkboxInput_171zd_31 {
  box-sizing: border-box;
  margin: 0;
  accent-color: var(--forms-accent-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(zR) || e.set(zR, xH.replace(/:root/g, ":host"))
  }
}
)();
var Un = {
  checkboxFieldSet: "_checkboxFieldSet_171zd_1",
  verticalLayout: "_verticalLayout_171zd_6",
  horizontalLayout: "_horizontalLayout_171zd_12",
  checkboxLegend: "_checkboxLegend_171zd_18",
  checkboxField: "_checkboxField_171zd_1",
  checkboxInput: "_checkboxInput_171zd_31"
};
var WR = a(({ formField: { label: e, name: t, validators: r, choices: n = [], format: o }, error: i, register: s }) => {
  let l = {
    ...s(t, {
      ...$e(r)
    })
  }
    , d = o === "horizontal";
  return h("fieldset", {
    name: t,
    className: Un.checkboxFieldSet
  }, h("legend", {
    className: st([Bp.textBody, Un.checkboxLegend])
  }, e), h("div", {
    className: d ? Un.horizontalLayout : Un.verticalLayout
  }, n.sort((u, f) => u.order - f.order).map(u => h("label", {
    key: u.value,
    id: `${t}-${u.value}-label`,
    htmlFor: `${t}-${u.value}`,
    className: st([Un.checkboxField])
  }, h("input", {
    className: Un.checkboxInput,
    id: `${t}-${u.value}`,
    type: "checkbox",
    defaultValue: u.value,
    "aria-label": u.label,
    ...l
  }), h("span", {
    className: Bp.textBody
  }, u.label)))), i && h(Xr, null, i.message))
}
  , "CheckboxInput");
c();
var ku = U(Ge());
c();
var KR = "ed3be2cf3b274a119fcc208424c15a7d5aef29e6f2474c695fdfd572563685ce"
  , CH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(KR) || e.set(KR, CH.replace(/:root/g, ":host"))
  }
}
)();
var XR = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var qR = "4fc24b26e43f0222039a92bcd5b6f5d8637e8916784df45d4c4bbb0db75ede79"
  , RH = `._formFileInput_ehvsf_1 {
  width: 100%;
}

._formFileInputField_ehvsf_5 {
  background-color: var(--form-background-color);
  color: var(--form-text-color);
  border: 1px dashed rgb(204, 204, 204);
  border-radius: var(--form-field-border-radius);
  display: flex;
  padding: 20px 0;
  cursor: pointer;
  justify-content: center;
  margin-top: 8px;
  width: 100%;
}

._formFileInputButton_ehvsf_18 {
  background-color: rgb(241, 241, 241);
  font: var(--forms-body-font);
  font-weight: 400;
  font-size: 12px;
  color: rgb(97, 97, 97);
  line-height: 20px;
  padding: 6px;
  border-radius: var(--form-field-border-radius);
}

._formFileInputButton_ehvsf_18:hover {
  background-color: rgb(222, 222, 222);
  color: rgb(97, 97, 97);
}

._formFileInputFileName_ehvsf_34 {
  display: flex;
  align-items: center;
  margin: 0 8px;
  font: var(--forms-body-font);
  color: var(--form-text-color);
}

._formFileInputCancelButton_ehvsf_42 {
  border: none;
  background-color: transparent;
  padding: 0 0 0 4px;
  cursor: pointer;
  height: 20px;
}

._formFileInputCancelButton_ehvsf_42:hover svg {
  fill: black;
}

._withError_ehvsf_54 {
  border: 2px solid var(--form-error-color);
  border-radius: 8px;
}

._withDrag_ehvsf_59 {
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(241, 241, 241);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(qR) || e.set(qR, RH.replace(/:root/g, ":host"))
  }
}
)();
var en = {
  formFileInput: "_formFileInput_ehvsf_1",
  formFileInputField: "_formFileInputField_ehvsf_5",
  formFileInputButton: "_formFileInputButton_ehvsf_18",
  formFileInputFileName: "_formFileInputFileName_ehvsf_34",
  formFileInputCancelButton: "_formFileInputCancelButton_ehvsf_42",
  withError: "_withError_ehvsf_54",
  withDrag: "_withDrag_ehvsf_59"
};
var OH = "fileAdd"
  , ZR = a(({ formField: { label: e, name: t, validators: r, localization: n }, error: o, control: i }) => {
    let [s, l] = ku.default.useState(null)
      , d = ku.default.useRef(null)
      , [u, f] = ku.default.useState(!1);
    return h(bo, {
      name: t,
      control: i,
      rules: {
        ...$e(r)
      },
      render: ({ field: { onBlur: p, name: _, ref: S, onChange: g }, fieldState: { error: T } }) => {
        var D, K;
        let b = a(() => {
          var I, z;
          (z = (I = d.current) == null ? void 0 : I.click) == null || z.call(I)
        }
          , "handleClick")
          , x = a(I => {
            var z, ue;
            l(((ue = (z = I.target.files) == null ? void 0 : z[0]) == null ? void 0 : ue.name) || null),
              g(I.target.files)
          }
            , "handleChange")
          , A = a(I => {
            var z;
            I.preventDefault(),
              I.stopPropagation(),
              l(null),
              g({
                target: {
                  value: ""
                }
              }),
              (z = d.current) != null && z.value && (d.current.value = "")
          }
            , "handleClear")
          , P = a(I => {
            I.preventDefault(),
              I.stopPropagation(),
              I.type === "dragenter" || I.type === "dragover" ? f(!0) : I.type === "dragleave" && f(!1)
          }
            , "handleDrag")
          , L = a(I => {
            I.preventDefault(),
              I.stopPropagation(),
              f(!1),
              I.dataTransfer.files && I.dataTransfer.files.length && (l(I.dataTransfer.files[0].name),
                g(I.dataTransfer.files))
          }
            , "handleDrop");
        return h("div", {
          className: en.formFileInput
        }, h("p", {
          className: XR.textBody
        }, e), h("button", {
          type: "button",
          id: `${_}-label`,
          onClick: b,
          onDragEnter: P,
          onDragLeave: P,
          onDragOver: P,
          onDrop: L,
          tabIndex: 0,
          className: `${en.formFileInputField} ${o ? en.withError : ""} ${u ? en.withDrag : ""}`
        }, h("input", {
          ref: I => {
            S(I),
              d.current = I
          }
          ,
          id: `${_}-field`,
          type: "file",
          "aria-label": e,
          onBlur: p,
          onChange: x,
          hidden: !0
        }), s ? h("div", {
          className: en.formFileInputFileName
        }, h("span", null, s), h("button", {
          type: "button",
          id: `${_}-clear`,
          onClick: A,
          className: en.formFileInputCancelButton
        }, h("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 20 20",
          fill: "#5C5F62",
          xmlns: "http://www.w3.org/2000/svg"
        }, h("path", {
          fillRule: "evenodd",
          d: "M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3.03-10.03a.75.75 0 0 1 0 1.06l-1.97 1.97 1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 0 1 1.06-1.06l1.97 1.97 1.97-1.97a.75.75 0 0 1 1.06 0Z"
        })))) : h("p", {
          className: en.formFileInputButton
        }, (K = (D = n == null ? void 0 : n[OH]) == null ? void 0 : D.label) != null ? K : "Add file")), T ? h(Xr, null, T.message) : null)
      }
    })
  }
    , "FileInput");
c();
var QR = "ff687c97cc655e42ac7e45fa615334f68376af4420a0b7c2d624174399e13b94"
  , PH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable selector-max-specificity */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable at-rule-no-unknown */

/* stylelint-disable selector-no-qualifying-type */
:root {
  /* Scaling to allow floating labels */
  --form-field-padding-top: calc(var(--form-field-padding) * 1.5);
  --form-field-padding-bottom: calc(var(--form-field-padding) * 0.5);
  --input-label-top: 1em;
  --input-label-Y-transform: calc(var(--input-label-top) * -0.5);
  --input-label-transform: translateY(var(--input-label-Y-transform))
    scale(0.85);
  --close-button-size: 12px;
}

/* Form positioning and display */
section._formHeader_1nihh_19 {
  flex: 1;
  align-items: center;
  text-align: var(--container-text-alignment);
  margin: 5px auto 25px;
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage section._formHeader_1nihh_19 {
    margin: calc(5px / var(--preview-scale)) auto
      calc(25px / var(--preview-scale));
  }
}

div._formDisclaimer_1nihh_33 {
  text-align: var(--container-text-alignment);
  padding: var(--disclaimer-padding);
  /* stylelint-disable-next-line declaration-no-important */
  margin: 10px auto 0 !important;
  font: var(--forms-body-font);
  color: var(--body-text-color);
  line-height: 14px;
  font-size: 10px;
}

/* stylelint-disable-next-line selector-max-type */
div._formDisclaimer_1nihh_33 p {
  margin: 0;
}

/* Style links in disclaimer */
._formDisclaimer_1nihh_33 a {
  color: var(--forms-accent-color);
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage p._formDisclaimer_1nihh_33,
  .isPreview.isPreview--withImage div._formDisclaimer_1nihh_33 {
    font-size: calc(12px / var(--preview-scale));
    line-height: calc(16px / var(--preview-scale));
    margin: calc(10px / var(--preview-scale)) auto 0;
  }
}

form._formFieldset_1nihh_63 {
  display: flex;
  gap: 10px;
  flex-direction: column;
  padding: 0 2px;
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage form._formFieldset_1nihh_63 {
    gap: calc(10px / var(--preview-scale));
  }
}

/* Submit button */
button._formSubmitButton_1nihh_77 {
  /* Reset styles that might be added on the HTML element directly */
  all: unset;

  display: flex;
  justify-content: center;
  font: var(--forms-body-font);
  line-height: var(--forms-base-font-line-height);
  padding: var(--button-padding);

  background-color: var(--button-background-color);
  color: var(--button-text-color);

  border: none;
  box-shadow: none;
  outline: var(--button-border);
  outline-offset: 1px;
  border-radius: var(--button-border-radius);

  cursor: pointer;
}

button._formSubmitButton_1nihh_77:focus-visible,
button._formSubmitButton_1nihh_77:hover {
  border: none;
  box-shadow: none;
  filter: var(--button-background-color-hovered-modifier);
}

button._formSubmitButton_1nihh_77:disabled {
  background-color: var(--button-background-color);
  cursor: not-allowed;
  pointer-events: all;
}

._formSubmitButton_1nihh_77:disabled:hover,
._formSubmitButton_1nihh_77[disabled]:hover {
  background-color: var(--button-background-color);
}

@media screen and (min-width: 893px) {
  .isPreview.isPreview--withImage button._formSubmitButton_1nihh_77 {
    padding: calc(var(--button-padding) / var(--preview-scale));
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(QR) || e.set(QR, PH.replace(/:root/g, ":host"))
  }
}
)();
var Ji = {
  previewDesktop: "893px",
  formHeader: "_formHeader_1nihh_19",
  formDisclaimer: "_formDisclaimer_1nihh_33",
  formFieldset: "_formFieldset_1nihh_63",
  formSubmitButton: "_formSubmitButton_1nihh_77"
};
var NH = a((e, t) => e.find(r => r.type === "address" && r.order < t.order), "getSameAsField")
  , wH = a(({ formFields: e, onSubmit: t, onClose: r, header: n, body: o, buttonText: i, disclaimer: s, isLoading: l = !1, fieldErrors: d, image: u, layout: f = "floating", countries: p, getCountrySettings: _, initialCountryCode: S, isPreview: g = !1, root: T = document }) => {
    let { register: b, handleSubmit: x, watch: A, formState: { errors: P }, setError: L, clearErrors: D, getValues: K, setValue: I, control: z } = yx({
      reValidateMode: "onBlur"
    })
      , ue = (0,
        tn.useMemo)(() => e.sort((N, q) => N.order - q.order), [e]);
    (0,
      tn.useEffect)(() => {
        let N = A((q, { name: ae }) => {
          ae && D(ae)
        }
        );
        return () => N.unsubscribe()
      }
        , [A, D]),
      (0,
        tn.useEffect)(() => {
          if (d) {
            let N = Object.entries(d);
            N.length ? N.forEach(([q, ae]) => {
              L(q, {
                type: "custom",
                message: ae
              })
            }
            ) : D()
          }
        }
          , [d, L, D]);
    let Ee = !(f === "inline" && n.length === 0 && o.length === 0)
      , de = a(N => {
        var q, ae;
        for (let k of e) {
          let re = N[k.name];
          if (re)
            return (ae = (q = re == null ? void 0 : re.ref) == null ? void 0 : q.focus) == null ? void 0 : ae.call(q)
        }
        return null
      }
        , "scrollToFirstError")
      , j = a((N, q) => {
        t(N),
          q == null || q.stopPropagation()
      }
        , "onValid")
      , J = a((N, q) => {
        de(P),
          q == null || q.stopPropagation()
      }
        , "onInvalid")
      , oe = (0,
        tn.useRef)(null);
    return (0,
      tn.useEffect)(() => {
        f === "inline" || g || requestAnimationFrame(() => {
          var q;
          let N = (q = oe.current) == null ? void 0 : q.querySelector("input:not([disabled]), select:not([disabled]), textarea:not([disabled])");
          N == null || N.focus()
        }
        )
      }
        , [f, g]),
      h(vu, {
        onClose: r,
        ariaLabel: n,
        layout: f,
        isPreview: g,
        image: u
      }, Ee && h("section", {
        className: Ji.formHeader
      }, h("h2", {
        className: Yf.textHeading
      }, n), h("div", {
        className: Yf.textBody,
        dangerouslySetInnerHTML: {
          __html: Mi.sanitize(o, Li)
        }
      })), h("form", {
        ref: oe,
        noValidate: !0,
        onSubmit: x(j, J),
        className: Ji.formFieldset,
        "data-testid": "form"
      }, ue.map(N => {
        switch (N.type) {
          case "birthday":
          case "date":
            return h(FR, {
              key: N.name,
              formField: N,
              error: P[N.name],
              control: z
            });
          case "tel":
            return h($u, {
              key: N.name,
              formField: N,
              error: P[N.name],
              watch: A,
              register: b,
              countries: p,
              initialCountryCode: S,
              setValue: I,
              clearErrors: D,
              root: T
            });
          case "radio":
            return h(kR, {
              key: N.name,
              formField: N,
              error: P[N.name],
              register: b
            });
          case "select":
            return h(HR, {
              key: N.name,
              formField: N,
              control: z,
              root: T
            });
          case "textarea":
            return h(YR, {
              key: N.name,
              formField: N,
              register: b,
              getValues: K,
              error: P[N.name]
            });
          case "checkbox":
            return h(WR, {
              key: N.name,
              formField: N,
              error: P[N.name],
              register: b
            });
          case "address":
            return h(bR, {
              formLayout: f,
              key: N.name,
              formField: N,
              errors: P,
              watch: A,
              register: b,
              countries: p,
              initialCountryCode: S,
              getCountrySettings: _,
              setValue: I,
              clearErrors: D,
              control: z,
              root: T,
              sameAsField: NH(ue, N)
            });
          case "file":
            return h(ZR, {
              formField: N,
              error: P[N.name],
              control: z
            });
          case "email":
          case "number":
          case "text":
            return h(Uu, {
              key: N.name,
              formField: N,
              error: P[N.name],
              control: z
            })
        }
      }
      ), h("button", {
        disabled: l,
        "aria-disabled": l,
        type: "submit",
        className: Ji.formSubmitButton,
        "data-testid": "btn-form-submit"
      }, l ? h(Fragment, null, h(Su, null, i), h(Gx, {
        hasFocusableParent: !0
      })) : i)), s && h("div", {
        className: Ji.formDisclaimer,
        dangerouslySetInnerHTML: {
          __html: Mi.sanitize(s, Li)
        }
      }))
  }
    , "FormRenderer")
  , JR = wH;
c();
c();
function Pt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}
a(Pt, "_assertThisInitialized");
c();
c();
function Hu(e, t) {
  return Hu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n,
      r
  }
    ,
    Hu(e, t)
}
a(Hu, "_setPrototypeOf");
function eO(e, t) {
  e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    Hu(e, t)
}
a(eO, "_inheritsLoose");
var $o = U(Ge());
c();
function tO(e) {
  return Object.entries(e).filter(function(t) {
    var r = t[0]
      , n = t[1];
    return n || n === !1
  }).map(function(t) {
    var r = t[0]
      , n = t[1];
    return encodeURIComponent(r) + "=" + encodeURIComponent(n)
  }).join("&")
}
a(tO, "generateQuery");
function Gu(e) {
  var t = e && e.ownerDocument || document
    , r = t.defaultView || t.parentWindow || window;
  return {
    document: t,
    window: r
  }
}
a(Gu, "getFrame");
function Yu(e) {
  return e || document.head
}
a(Yu, "getMountElement");
var rO = "hcaptcha-api-script-id"
  , nO = "hcaptchaOnLoad"
  , oO = []
  , IH = a(function(t) {
    t === void 0 && (t = {});
    var r = Yu(t.scriptLocation);
    delete t.scriptLocation;
    var n = Gu(r)
      , o = oO.find(function(s) {
        var l = s.scope;
        return l === n.window
      });
    if (n.document.getElementById(rO) && o)
      return o.promise;
    var i = new Promise(function(s, l) {
      n.window[nO] = s;
      var d = t.apihost || "https://js.hcaptcha.com";
      delete t.apihost;
      var u = n.document.createElement("script");
      u.id = rO,
        u.src = d + "/1/api.js?render=explicit&onload=" + nO,
        u.async = t.loadAsync !== void 0 ? t.loadAsync : !0,
        delete t.loadAsync,
        u.onerror = function(p) {
          return l("script-error")
        }
        ;
      var f = tO(t);
      u.src += f !== "" ? "&" + f : "",
        r.appendChild(u)
    }
    );
    return oO.push({
      promise: i,
      scope: n.window
    }),
      i
  }, "mountCaptchaScript")
  , MH = function(e) {
    eO(t, e);
    function t(n) {
      var o;
      return o = e.call(this, n) || this,
        o._hcaptcha = void 0,
        o.renderCaptcha = o.renderCaptcha.bind(Pt(o)),
        o.resetCaptcha = o.resetCaptcha.bind(Pt(o)),
        o.removeCaptcha = o.removeCaptcha.bind(Pt(o)),
        o.isReady = o.isReady.bind(Pt(o)),
        o.loadCaptcha = o.loadCaptcha.bind(Pt(o)),
        o.handleOnLoad = o.handleOnLoad.bind(Pt(o)),
        o.handleSubmit = o.handleSubmit.bind(Pt(o)),
        o.handleExpire = o.handleExpire.bind(Pt(o)),
        o.handleError = o.handleError.bind(Pt(o)),
        o.handleOpen = o.handleOpen.bind(Pt(o)),
        o.handleClose = o.handleClose.bind(Pt(o)),
        o.handleChallengeExpired = o.handleChallengeExpired.bind(Pt(o)),
        o.ref = $o.createRef(),
        o.apiScriptRequested = !1,
        o.state = {
          isApiReady: !1,
          isRemoved: !1,
          elementId: n.id,
          captchaId: ""
        },
        o
    }
    a(t, "HCaptcha");
    var r = t.prototype;
    return r.componentDidMount = a(function() {
      var o = this
        , i = Yu(this.props.scriptLocation)
        , s = Gu(i);
      this._hcaptcha = s.window.hcaptcha || void 0;
      var l = typeof this._hcaptcha != "undefined";
      if (l) {
        this.setState({
          isApiReady: !0
        }, function() {
          o.renderCaptcha()
        });
        return
      }
      this.loadCaptcha()
    }, "componentDidMount"),
      r.componentWillUnmount = a(function() {
        var o = this.state.captchaId
          , i = this._hcaptcha;
        this.isReady() && (i.reset(o),
          i.remove(o))
      }, "componentWillUnmount"),
      r.shouldComponentUpdate = a(function(o, i) {
        return !(this.state.isApiReady !== i.isApiReady || this.state.isRemoved !== i.isRemoved)
      }, "shouldComponentUpdate"),
      r.componentDidUpdate = a(function(o) {
        var i = this
          , s = ["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"]
          , l = s.every(function(d) {
            return o[d] === i.props[d]
          });
        l || this.removeCaptcha(function() {
          i.renderCaptcha()
        })
      }, "componentDidUpdate"),
      r.loadCaptcha = a(function() {
        if (!this.apiScriptRequested) {
          var o = this.props
            , i = o.apihost
            , s = o.assethost
            , l = o.endpoint
            , d = o.host
            , u = o.imghost
            , f = o.languageOverride
            , p = o.reCaptchaCompat
            , _ = o.reportapi
            , S = o.sentry
            , g = o.custom
            , T = o.loadAsync
            , b = o.scriptLocation
            , x = {
              apihost: i,
              assethost: s,
              endpoint: l,
              hl: f,
              host: d,
              imghost: u,
              recaptchacompat: p === !1 ? "off" : null,
              reportapi: _,
              sentry: S,
              custom: g,
              loadAsync: T,
              scriptLocation: b
            };
          IH(x).then(this.handleOnLoad).catch(this.handleError),
            this.apiScriptRequested = !0
        }
      }, "loadCaptcha"),
      r.renderCaptcha = a(function(o) {
        var i = this.state.isApiReady;
        if (i) {
          var s = Object.assign({
            "open-callback": this.handleOpen,
            "close-callback": this.handleClose,
            "error-callback": this.handleError,
            "chalexpired-callback": this.handleChallengeExpired,
            "expired-callback": this.handleExpire,
            callback: this.handleSubmit
          }, this.props, {
            hl: this.props.hl || this.props.languageOverride,
            languageOverride: void 0
          })
            , l = this._hcaptcha
            , d = l.render(this.ref.current, s);
          this.setState({
            isRemoved: !1,
            captchaId: d
          }, function() {
            o && o()
          })
        }
      }, "renderCaptcha"),
      r.resetCaptcha = a(function() {
        var o = this.state.captchaId
          , i = this._hcaptcha;
        this.isReady() && i.reset(o)
      }, "resetCaptcha"),
      r.removeCaptcha = a(function(o) {
        var i = this.state.captchaId
          , s = this._hcaptcha;
        this.isReady() && this.setState({
          isRemoved: !0
        }, function() {
          s.remove(i),
            o && o()
        })
      }, "removeCaptcha"),
      r.handleOnLoad = a(function() {
        var o = this;
        this.setState({
          isApiReady: !0
        }, function() {
          var i = Yu(o.props.scriptLocation)
            , s = Gu(i);
          o._hcaptcha = s.window.hcaptcha,
            o.renderCaptcha(function() {
              var l = o.props.onLoad;
              l && l()
            })
        })
      }, "handleOnLoad"),
      r.handleSubmit = a(function(o) {
        var i = this.props.onVerify
          , s = this.state
          , l = s.isRemoved
          , d = s.captchaId
          , u = this._hcaptcha;
        if (!(typeof u == "undefined" || l)) {
          var f = u.getResponse(d)
            , p = u.getRespKey(d);
          i && i(f, p)
        }
      }, "handleSubmit"),
      r.handleExpire = a(function() {
        var o = this.props.onExpire
          , i = this.state.captchaId
          , s = this._hcaptcha;
        this.isReady() && (s.reset(i),
          o && o())
      }, "handleExpire"),
      r.handleError = a(function(o) {
        var i = this.props.onError
          , s = this.state.captchaId
          , l = this._hcaptcha;
        this.isReady() && l.reset(s),
          i && i(o)
      }, "handleError"),
      r.isReady = a(function() {
        var o = this.state
          , i = o.isApiReady
          , s = o.isRemoved;
        return i && !s
      }, "isReady"),
      r.handleOpen = a(function() {
        !this.isReady() || !this.props.onOpen || this.props.onOpen()
      }, "handleOpen"),
      r.handleClose = a(function() {
        !this.isReady() || !this.props.onClose || this.props.onClose()
      }, "handleClose"),
      r.handleChallengeExpired = a(function() {
        !this.isReady() || !this.props.onChalExpired || this.props.onChalExpired()
      }, "handleChallengeExpired"),
      r.execute = a(function(o) {
        o === void 0 && (o = null);
        var i = this.state.captchaId
          , s = this._hcaptcha;
        if (this.isReady())
          return o && typeof o != "object" && (o = null),
            s.execute(i, o)
      }, "execute"),
      r.setData = a(function(o) {
        var i = this.state.captchaId
          , s = this._hcaptcha;
        this.isReady() && (o && typeof o != "object" && (o = null),
          s.setData(i, o))
      }, "setData"),
      r.getResponse = a(function() {
        var o = this._hcaptcha;
        return o.getResponse(this.state.captchaId)
      }, "getResponse"),
      r.getRespKey = a(function() {
        var o = this._hcaptcha;
        return o.getRespKey(this.state.captchaId)
      }, "getRespKey"),
      r.render = a(function() {
        var o = this.state.elementId;
        return $o.createElement("div", {
          ref: this.ref,
          id: o
        })
      }, "render"),
      t
  }($o.Component)
  , iO = MH;
c();
var Vp = a(e => {
  var o, i;
  let t = window.innerHeight
    , r = LH(50, t)
    , n = ((i = (o = e == null ? void 0 : e.getBoundingClientRect) == null ? void 0 : o.call(e)) == null ? void 0 : i.top) + window.scrollY - r;
  window.scrollTo({
    top: n,
    behavior: "smooth"
  })
}
  , "scrollIntoView")
  , aO = a((e, t, r) => {
    let n = t.find(i => Object.prototype.hasOwnProperty.call(e, i.name))
      , o = r == null ? void 0 : r.querySelector(`[name="${n == null ? void 0 : n.name}"]`);
    o && Vp(o)
  }
    , "scrollToFirstError")
  , LH = a((e, t) => t / 100 * e, "calculatePercentage")
  , sO = a(async ({ fileFields: e, data: t, shopifyDomain: r, backendClient: n }) => {
    let o = {}
      , i = {};
    try {
      Ke.leaveBreadcrumb("File upload", {
        shop: r
      }, "request");
      let s = a(async (d, u) => {
        if (u.length) {
          let { file: f, error: p } = await n.uploadFile(u, t.form_instance_id, t.shopify_domain);
          o[d] = f,
            p && (i = {
              [d]: p,
              ...i
            })
        }
      }
        , "uploadFile")
        , l = e.filter(d => t[d.name]).map(d => s(d.name, t[d.name]));
      return await Promise.all(l),
      {
        uploadData: o,
        uploadError: Object.keys(i).length > 0 ? i : null
      }
    } catch (s) {
      return {
        data: t,
        error: s.message
      }
    }
  }
    , "uploadFiles");
c();
var Do = U(Et());
c();
var uO = "e3d8fe521d1002f6db102e5ac3d6113d818c691a0417a71707d36710d61a83d5"
  , $H = `/* stylelint-disable selector-max-specificity */
._formShown_1d2l7_2 > div {
  display: flex;
  justify-content: center;
}

/* stylelint-disable declaration-no-important */
/* stylelint-disable-next-line selector-max-attribute */
._appEmbedRoot_1d2l7_9[data-layout='overlay'][data-current-step='form'] {
  top: 0 !important;
  left: 0 !important;
  display: flex;
  height: 100%;
  width: 100vw !important;
  margin: 0;
  pointer-events: none;
  rotate: unset !important;
  transform: unset !important;
}

/* stylelint-disable-next-line selector-max-attribute */
._appEmbedRoot_1d2l7_9[data-layout='overlay'][data-current-step='form'] > div {
  pointer-events: auto;
  transform-origin: top left;
}

/* breakpoint md */
@media screen and (max-width: 768px) {
  /* stylelint-disable-next-line selector-max-attribute */
  ._appEmbedRoot_1d2l7_9[data-layout='floating'][data-current-step='form'] {
    height: 100%;
    transform: unset !important;
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(uO) || e.set(uO, $H.replace(/:root/g, ":host"))
  }
}
)();
var ju = {
  formShown: "_formShown_1d2l7_2",
  appEmbedRoot: "_appEmbedRoot_1d2l7_9"
};
c();
var lO = 6;
function cO(e) {
  return {
    width: 280 + 48 * 2,
    height: (e ? 311 : 387) + 40 + 16
  }
}
a(cO, "getSDKRect");
function dO(e) {
  let t = cO(e);
  return {
    left: `calc(50% - (${t.width}px / 2))`,
    right: "auto",
    top: `calc(50% - (${t.height}px / 2))`,
    bottom: "auto"
  }
}
a(dO, "calculateSDKPositionOverlay");
function fO(e, t) {
  let r = cO(t)
    , n = e.left + (e.width - r.width) / 2
    , o = e.left + e.width + lO;
  return {
    left: `${e.left + e.width + lO * 2 + r.width < window.innerWidth ? o : n}px`,
    right: "auto",
    top: `${e.top - (r.height - e.height) / 2}px`,
    bottom: "auto"
  }
}
a(fO, "calculateSDKPositionEmbed");
function kp({ left: e, right: t, top: r, bottom: n }, o) {
  var s;
  let i = o ? o == null ? void 0 : o.getElementById("shop-discount-auth") : (s = window == null ? void 0 : window.document) == null ? void 0 : s.getElementById("shop-discount-auth");
  if (i) {
    let l = [`--sda-modal-left:${e}`, `--sda-modal-right:${t}`, `--sda-modal-top:${r}`, `--sda-modal-bottom:${n}`].join("; ");
    return i.setAttribute("style", l),
      !0
  }
  return !1
}
a(kp, "setSDKPosition");
function pO({ form: e, formStyles: t, shopSdkReadyToRequestShow: r, root: n, shopUserLoggedIn: o, formId: i }) {
  let { addClassToRoot: s, removeClassFromRoot: l } = yo()
    , d = (0,
      Do.useMemo)(() => So(t.appEmbedContainer), [t.appEmbedContainer])
    , u = ["left-middle-rotated", "right-middle-rotated"].includes(d);
  return (0,
    Do.useLayoutEffect)(() => (s(ju.appEmbedContainer),
      () => {
        l(ju.appEmbedContainer)
      }
    ), [s, l]),
    (0,
      Do.useLayoutEffect)(() => {
        s(ju.appEmbedRoot)
      }
        , [s, u]),
    (0,
      Do.useLayoutEffect)(() => {
        if (r) {
          if (e.layout === "overlay") {
            let f = dO(o);
            kp(f, n)
          } else if (e.layout === "inline") {
            let f = n == null ? void 0 : n.getElementById("app-embed").getBoundingClientRect()
              , p = fO(f, o);
            kp(p, n)
          }
        }
      }
        , [n, i, e.layout, t.appEmbedContainer, d, o, r]),
  {
    positioningName: d
  }
}
a(pO, "useHandleLayoutEffects");
c();
async function mO(e) {
  try {
    let t = await dm(e);
    if (!t || !t.ok)
      throw new Error(`Error when applying discount: ${t}`);
    return Ke.leaveBreadcrumb("Discount applied to checkout", {
      discountUrl: e
    }, "log"),
      !0
  } catch (t) {
    return !1
  }
}
a(mO, "applyDiscountOnCheckout");
c();
var Nr = U(Et());
c();
c();
var zu = U(Et());
var _O = {};
function DH(e, t) {
  let r = _O[e];
  if (r)
    return r;
  let n = new Promise((o, i) => {
    let s = document.createElement("script");
    t != null && t.module && (s.type = "module"),
      s.src = e,
      s.onload = () => {
        o(!0)
      }
      ,
      s.onerror = () => {
        i(!1)
      }
      ,
      (t == null ? void 0 : t.in) === "head" ? document.head.appendChild(s) : document.body.appendChild(s)
  }
  );
  return _O[e] = n,
    n
}
a(DH, "loadScript");
function Hp(e, t) {
  let [r, n] = (0,
    zu.useState)("loading");
  return {
    load: (0,
      zu.useCallback)(async () => {
        try {
          n("loading"),
            await DH(e, t),
            n("done")
        } catch (i) {
          n("error")
        }
      }
        , [t, e]),
    status: r
  }
}
a(Hp, "useLoadScript");
c();
var hO = a((e, t, r) => {
  let n = document.createElement("shop-discount-auth");
  if (n.setAttribute("api-key", e),
    n.setAttribute("id", "shop-discount-auth"),
    n.setAttribute("version", "1"),
    n.setAttribute("discount-code-callback", "ShopifyFormsGetDiscountCode"),
    t)
    return t.appendChild(n),
      n;
  if (r)
    return r.appendChild(n),
      n
}
  , "renderShopDiscountAuthElement");
var UH = "4f9f6772986151b160e59ae5d34ba8dd";
function gO() {
  let { state: { shopSdkReadyToRequestShow: e, root: t }, dispatch: r } = xe()
    , n = t == null ? void 0 : t.querySelector("shop-discount-auth")
    , o = (0,
      Nr.useCallback)(s => {
        e && n && (r({
          type: "SHOP_AUTH_STATUS",
          payload: {
            loading: !0,
            success: null
          }
        }),
          n.requestShow(s))
      }
        , [e, n, r])
    , i = (0,
      Nr.useCallback)(() => {
        e && n && n.notifyEmailFieldShown()
      }
        , [n, e]);
  return {
    requestShow: o,
    shopRef: n,
    notifyEmailFieldShown: i
  }
}
a(gO, "useSdkUtils");
function EO(e, t) {
  let { state: { root: r, shopRequest: n, formId: o, formDefinition: { form: { layout: i } } }, dispatch: s } = xe()
    , { track: l } = On()
    , { load: d, status: u } = Hp("https://cdn.shopify.com/shopifycloud/shop-js/client.js")
    , f = r == null ? void 0 : r.querySelector("shop-discount-auth")
    , p = (0,
      Nr.useRef)(n.loading);
  (0,
    Nr.useEffect)(() => {
      p.current = n.loading;
      let _ = null;
      return n.loading && (_ = setTimeout(() => {
        Gn.fromError(new Error("timeout - Error after 'requestShow': Shop SDK took longer than 3 sec to respond"), {
          type: "IntegrationError",
          severity: "info"
        }),
          s({
            type: "SHOP_AUTH_STATUS",
            payload: {
              loading: !1,
              success: !1
            }
          })
      }
        , 3e3)),
        () => {
          _ && clearTimeout(_)
        }
    }
      , [n.loading, s]),
    (0,
      Nr.useEffect)(() => {
        if (e) {
          window.ShopifyFormsGetDiscountCode = () => t;
          let _ = i === "inline" ? r == null ? void 0 : r.getElementById("app-embed") : null;
          hO(UH, _, r),
            d()
        }
        return () => {
          delete window.ShopifyFormsGetDiscountCode
        }
      }
        , [t, e, d, o, i, r]),
    (0,
      Nr.useEffect)(() => {
        if (u === "done" && f) {
          let S = a(L => {
            s({
              type: "SET_SHOP_SDK_REQUEST_SHOW",
              payload: !0
            }),
              s({
                type: "SET_SHOP_SDK_USER_LOGGED_IN",
                payload: L
              })
          }
            , "onReady")
            , g = a(L => {
              if (!p.current) {
                let { code: D, message: K } = L.detail;
                Gn.fromError(new Error(`${D} - ${K}`), {
                  type: "IntegrationError",
                  severity: "info"
                }),
                  ["api_unavailable", "invalid_api_key"].includes(D) && s({
                    type: "SET_SHOP_AVAILABLE",
                    payload: !1
                  })
              }
            }
              , "onErrorCallback");
          f.addEventListener("userfound", () => {
            S(!0)
          }
          ),
            f.addEventListener("usernotfound", () => {
              S(!1)
            }
            ),
            f.addEventListener("error", g);
          let T = a(L => {
            if (p.current) {
              let { code: D, message: K } = L.detail;
              Gn.fromError(new Error(`${D} - ${K}`), {
                type: "IntegrationError",
                severity: "info",
                meta: {
                  afterRequestShow: !0
                }
              }),
                s({
                  type: "SHOP_AUTH_STATUS",
                  payload: {
                    loading: !1,
                    success: !1
                  }
                })
            }
          }
            , "authErrorCallback")
            , b = a(L => {
              p.current && s({
                type: "SHOP_AUTH_STATUS",
                payload: {
                  loading: !1,
                  success: !0
                }
              })
            }
              , "shopUserNotFoundCallback")
            , x = a(() => {
              p.current && s({
                type: "SHOP_AUTH_STATUS",
                payload: {
                  loading: !1,
                  success: !0
                }
              })
            }
              , "shopUserMatchedCallback");
          f.addEventListener("error", T),
            f.addEventListener("completed", b),
            f.addEventListener("shopusermatched", x);
          let A = a(L => {
            if (!p.current) {
              let D = {};
              L.detail.emailVerified && (D = {
                shop_user_email_verified: L.detail.emailVerified
              }),
                l("login_with_shop_completed", {
                  logged_in_with_shop: L.detail.loggedIn,
                  ...D
                })
            }
          }
            , "onCompletedCallback")
            , P = a(() => { }
              , "onRestartedCallback");
          f.addEventListener("completed", A),
            f.addEventListener("restarted", P)
        }
      }
        , [s, f, u, l])
}
a(EO, "useShopSdk");
c();
function TO(e) {
  var t, r;
  try {
    if ((r = (t = window == null ? void 0 : window.Shopify) == null ? void 0 : t.analytics) != null && r.visitor && (e.email || e.phone_number)) {
      let n = {};
      return e.email && (n.email = e.email),
        e.phone_number && (n.phone = e.phone_number),
        window.Shopify.analytics.visitor(n, {
          apiClientId: "6171699"
        })
    }
  } catch (n) {
    Ke.notify(n, {}, "info")
  }
  return !1
}
a(TO, "sendVisitorAnalytics");
c();
var Fn = U(Et());
c();
var vO = a((e, t) => e.includes(t), "hasFeature");
var FH = new sa({
  retries: 3,
  version: 2
})
  , BH = a((e, t) => {
    let [r, n] = (0,
      Fn.useState)(null)
      , o = (0,
        Fn.useCallback)(async () => {
          let s = await FH.getFeatureFlags();
          return n(s || null),
            s
        }
          , [])
      , i = (0,
        Fn.useCallback)(async s => {
          let l = r;
          if (l === null) {
            let d = await o();
            if (d === null)
              return Ke.notify(new Error("Failed to load feature flags"), {
                context: "checkFeatureStatus",
                metadata: {
                  shop: t,
                  formId: e
                }
              }, "warning"),
                !1;
            l = d
          }
          return vO(l, s)
        }
          , [r, o, e, t]);
    return (0,
      Fn.useEffect)(() => {
        o()
      }
        , [o]),
    {
      checkFeatureStatus: i,
      flags: r
    }
  }
    , "useFeatureFlags")
  , SO = BH;
var Gp = new sa({
  retries: 1,
  version: 2
}), VH = !1, yO, ea = ((yO = window.Shopify) == null ? void 0 : yO.shop) || "", kH = "2e7f6342-57df-422a-8431-ddd86df296bc", AO = a(() => {
  var oe;
  let { state: { root: e, formDefinition: { form: t, success: r, countriesList: n }, shopSdkReadyToRequestShow: o, shopUserLoggedIn: i, shopRequest: s, formStyles: l, formId: d, clientCountry: u }, dispatch: f } = xe()
    , [p, _] = (0,
      Nt.useState)({})
    , [S, g] = (0,
      Nt.useState)(!1)
    , { track: T, trackOnce: b } = On()
    , x = (0,
      Nt.useRef)(null)
    , { requestShow: A, notifyEmailFieldShown: P } = gO()
    , { checkFeatureStatus: L } = SO(d, ea)
    , D = su()
    , K = u || ((oe = window == null ? void 0 : window.Shopify) == null ? void 0 : oe.country);
  Wr(),
    pO({
      form: t,
      formStyles: l,
      shopSdkReadyToRequestShow: o,
      root: e,
      shopUserLoggedIn: i,
      formId: d
    });
  let I = (0,
    Nt.useCallback)(() => {
      var N;
      if (x != null && x.current)
        return (N = x == null ? void 0 : x.current) == null ? void 0 : N.execute({
          async: !0
        })
    }
      , [])
    , z = a(() => {
      Ke.leaveBreadcrumb("Form minimized", {
        shop: ea
      }, "log"),
        f({
          type: "MINIMIZE"
        })
    }
      , "onCloseHandler")
    , ue = (0,
      Nt.useCallback)(() => {
        f({
          type: "NEXT"
        }),
          f({
            type: "DISMISS_AFTER_SUBMIT"
          }),
          g(!1)
      }
        , [f])
    , Ee = a(async N => await Gp.getCountrySettings(N), "getCountrySettings")
    , de = a(async N => {
      var pr, nn;
      g(!0);
      let q = performance.now()
        , ae = await I()
        , k = performance.now() - q;
      ur.record("forms_api_calls", k, {
        operation: "CaptchaVerification",
        status: "success"
      });
      let re = performance.now()
        , ce = {
          shopify_domain: ea,
          h_captcha_response: ae == null ? void 0 : ae.response,
          form_instance_id: d,
          ...N
        };
      nl() && (ce.abuse_bypass = "pass",
        ce.h_captcha_response = "local_test");
      let ne = t.fields.filter(wt => wt.type === "file");
      if (ne.length) {
        let wt = performance.now()
          , { uploadData: qt, uploadError: It } = await sO({
            fileFields: ne,
            data: ce,
            shopifyDomain: ea,
            backendClient: Gp
          })
          , Mt = performance.now() - wt;
        if (ur.record("forms_api_calls", It ? 1 : Mt, {
          status: It ? "error" : "success",
          operation: "FileUpload"
        }),
          It)
          return j(It);
        ce = {
          ...ce,
          ...qt
        }
      }
      let ye = performance.now()
        , { error: ee } = await Gp.submitForm(ce)
        , Ve = performance.now() - ye;
      if (ur.record("forms_api_calls", ee ? 1 : Ve, {
        status: ee ? "error" : "success",
        operation: "SubmitFormAPI"
      }),
        ee)
        return j(ee);
      let Z = performance.now() - q;
      ur.record("forms_api_calls", Z, {
        status: "success",
        operation: "OverallFormSubmission"
      }),
        Ke.leaveBreadcrumb("Form dismissed after submit", {
          shop: ea
        }, "log"),
        r.discount && r.discount.shareableUrl && await mO(r.discount.shareableUrl);
      let ht = (pr = r.discount) != null && pr.code ? {
        discount_id: (nn = r.discount) == null ? void 0 : nn.id
      } : {}
        , We = o ? {
          logged_in_with_shop: i
        } : {};
      if (TO(ce),
        t.layout === "inline") {
        let wt = e == null ? void 0 : e.firstElementChild;
        if (!wt)
          return;
        Vp(wt)
      }
      o ? A(N.email) : ue(),
        (await L("17bf62d4") === !1 || VH) && T("submission", {
          ...ce,
          ...ht,
          ...We
        })
    }
      , "onSubmitHandler")
    , j = (0,
      Nt.useCallback)(N => {
        var q;
        typeof N == "object" && Object.keys(N).length && (_(N),
          e != null && e.firstElementChild && ((q = aO) == null || q(N, t.fields, e == null ? void 0 : e.firstElementChild))),
          typeof N == "string" && f({
            type: "SERVER_ERROR"
          }),
          g(!1)
      }
        , [f, e, t.fields])
    , J = (0,
      Nt.useCallback)(() => {
        b("click")
      }
        , [b]);
  return (0,
    Nt.useEffect)(() => {
      s.loading === !1 && typeof s.success == "boolean" && ue()
    }
      , [s.loading, s.success, ue]),
    (0,
      Nt.useEffect)(() => {
        o && P()
      }
        , [o, P]),
    h("div", {
      onClick: J,
      id: "form-container-ref",
      "data-sizing": "form-wrapper"
    }, h(JR, {
      buttonText: t.submitButton,
      header: t.heading,
      body: t.text,
      disclaimer: t.disclaimer,
      image: D,
      formFields: t.fields,
      onClose: z,
      onSubmit: de,
      isLoading: S,
      fieldErrors: p,
      layout: t.layout,
      getCountrySettings: Ee,
      initialCountryCode: K,
      countries: n,
      root: e
    }), !nl() && h("section", null, h(iO, {
      sitekey: kH,
      size: "invisible",
      ref: x,
      onVerify: () => null,
      reCaptchaCompat: !1
    })))
}
  , "AppForm");
c();
c();
c();
var bO = "aee93753813f283a926c97afb5f196b49d737bb26a42da310ef7a39dfc7d79fc"
  , HH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(bO) || e.set(bO, HH.replace(/:root/g, ":host"))
  }
}
)();
var xO = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var PO = U(Ge());
c();
var CO = "073470d984a8301999aedbbc8b41c5640cb1b41b1b727ea1ea60935eb5bede67"
  , GH = `/* stylelint-disable at-rule-no-unknown *//* Custom breakpoint to indicate when Form Preview is next to Form Settings */
/* stylelint-disable at-rule-no-unknown */
/* stylelint-disable selector-pseudo-class-no-unknown */
/* stylelint-disable selector-no-qualifying-type */
:root {
  --forms-base-font-line-height: 1.1;
  --subdued-text-color: rgb(109 113 117);
}

._textBody_2aowh_10,
span._textBody_2aowh_10,
p._textBody_2aowh_10 {
  text-transform: none;

  font: var(--forms-body-font);
  -webkit-font-smoothing: antialiased;
  line-height: 20px;
  color: var(--body-text-color);
  margin: 0;

  /* Have to set it with important due to a couple of things using !important
  in their CSS and overriding ours */
  /* stylelint-disable-next-line declaration-no-important */
  margin-block: 0 !important;
}

._textBody_2aowh_10 a {
  color: var(--forms-accent-color);
}

._textBody_2aowh_10 p {
  margin: 0;
}

h2._textHeading_2aowh_35 {
  text-transform: none;
  font: var(--forms-heading-font);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

legend {
  padding: 0;
}

fieldset {
  margin: 0;
}

/* MX preview with image */
@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage span._textBody_2aowh_10,
  .isPreview.isPreview--withImage p._textBody_2aowh_10,
  .isPreview.isPreview--withImage ._textBody_2aowh_10 {
    font-size: calc(var(--forms-base-font-size) / var(--preview-scale));
    line-height: calc(20px / var(--preview-scale));
  }
}

@media screen and (min-width: 893px) {
  /* stylelint-disable-next-line selector-max-specificity */
  .isPreview.isPreview--withImage h2._textHeading_2aowh_35 {
    font-size: calc(var(--forms-heading-font-size) / var(--preview-scale));
    line-height: calc(26px / var(--preview-scale));
  }
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(CO) || e.set(CO, GH.replace(/:root/g, ":host"))
  }
}
)();
var RO = {
  previewDesktop: "893px",
  textBody: "_textBody_2aowh_10",
  textHeading: "_textHeading_2aowh_35"
};
c();
var OO = "3efef14ed4017fbaf75ca5260e5912a1643cbc68dc8f8fca89ec8f9e17e7d296"
  , YH = `/* stylelint-disable selector-no-qualifying-type */
button._copyToClipboardButton_1q0xm_2 {
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin: 0 0 8px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0);
  transition: filter 0.3s, background-color 0.3s;
}

button._copyToClipboardButton_1q0xm_2:hover {
  background-color: var(--forms-discount-code-background-color-hover);
}

button._copyToClipboardButton_1q0xm_2:active {
  background-color: var(--forms-discount-code-background-color-hover);
  filter: brightness(90%);
}

span._copyToClipboardText_1q0xm_23 {
  font-size: 22px;
  line-height: 1.19;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--forms-discount-code-color);
}

._copyIcon_1q0xm_31 {
  margin-left: 10px;
}

._copyIcon_1q0xm_31 path {
  fill: var(--forms-discount-code-color);
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(OO) || e.set(OO, YH.replace(/:root/g, ":host"))
  }
}
)();
var Wu = {
  copyToClipboardButton: "_copyToClipboardButton_1q0xm_2",
  copyToClipboardText: "_copyToClipboardText_1q0xm_23",
  copyIcon: "_copyIcon_1q0xm_31"
};
function jH({ text: e, disabled: t }) {
  let r = PO.default.useCallback(() => {
    window.navigator.clipboard.writeText(e)
  }
    , [e]);
  return h("button", {
    type: "button",
    className: Wu.copyToClipboardButton,
    disabled: t,
    onClick: r
  }, h("span", {
    className: `${RO.textBody} ${Wu.copyToClipboardText}`
  }, e), h("svg", {
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: Wu.copyIcon
  }, h("title", null, "Copy to clipboard"), h("path", {
    d: "M6 0C5.17157 0 4.5 0.671573 4.5 1.5V11C4.5 11.5523 4.94771 12 5.5 12H15C15.8284 12 16.5 11.3284 16.5 10.5V1.5C16.5 0.671573 15.8284 0 15 0H6Z"
  }), h("path", {
    d: "M2 4H2.5V14H12.5V14.5C12.5 15.3284 11.8284 16 11 16H2C1.17157 16 0.5 15.3284 0.5 14.5V5.5C0.5 4.67157 1.17157 4 2 4Z"
  })))
}
a(jH, "CopyToClipboardButton");
var NO = jH;
c();
var wO = "06adc93c5ce3fcba02e8ae9e48ebb9a2d2b75e2f037f02bb51c4d5b2cc69eb56"
  , zH = `._formBannerContainer_z5ku3_1 {
  flex: 1;
  align-items: center;
  text-align: var(--container-text-alignment);
  margin: 5px 0 0;
  line-height: 26px;
}

._formBannerContainer_z5ku3_1 ._formBannerHeading_z5ku3_9 {
  --close-button-size: 12px;
  display: grid;
  grid-template-columns: minmax(20px, auto) auto;
  justify-content: var(--container-text-alignment);

  font: var(--forms-heading-font);
  font-size: calc(var(--heading-font-size) * 0.8);
  line-height: 26px;
  color: var(--heading-text-color);
  margin: 0 0 5px;
}

/* Only warning banner contains an icon */
/* stylelint-disable-next-line selector-max-class */
._formBannerContainer_z5ku3_1._warning_z5ku3_24 ._formBannerHeading_z5ku3_9 {
  grid-gap: 8px;
}

._formBannerContainer_z5ku3_1 svg {
  width: 20px;
  height: 20px;
  align-self: center;
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(wO) || e.set(wO, zH.replace(/:root/g, ":host"))
  }
}
)();
var Ku = {
  formBannerContainer: "_formBannerContainer_z5ku3_1",
  formBannerHeading: "_formBannerHeading_z5ku3_9",
  warning: "_warning_z5ku3_24"
};
function WH({ onClose: e, header: t, body: r, copyText: n, type: o, enableCopy: i = !0, layout: s = "floating", isPreview: l = !1, ...d }) {
  return h(vu, {
    onClose: e,
    ...d,
    type: "tight",
    ariaLabel: t,
    layout: s,
    hideOverlay: o === "warning",
    isPreview: l
  }, h("section", {
    className: `${Ku.formBannerContainer} ${Ku[o]}`,
    "data-testid": `banner-${o}`
  }, h("h2", {
    className: Ku.formBannerHeading
  }, o === "warning" && h("svg", {
    width: "21",
    height: "20",
    viewBox: "0 0 21 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    "data-testid": "banner-icon"
  }, h("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 5.58172 6.08172 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10C18.5 14.4183 14.9183 18 10.5 18ZM9.5 8.9996C9.5 9.55188 9.94772 9.9996 10.5 9.9996C11.0523 9.9996 11.5 9.55188 11.5 8.9996V6.9996C11.5 6.44732 11.0523 5.9996 10.5 5.9996C9.94772 5.9996 9.5 6.44732 9.5 6.9996V8.9996ZM9.5 12.9996C9.5 13.5519 9.94772 13.9996 10.5 13.9996C11.0523 13.9996 11.5 13.5519 11.5 12.9996C11.5 12.4473 11.0523 11.9996 10.5 11.9996C9.94772 11.9996 9.5 12.4473 9.5 12.9996Z",
    fill: "#8C9196"
  })), t), n && h(NO, {
    disabled: !i,
    text: n
  }), h("div", {
    className: xO.textBody,
    dangerouslySetInnerHTML: {
      __html: Mi.sanitize(r, Li)
    }
  })))
}
a(WH, "FormBanner");
var Xu = WH;
var LO = U(Et());
c();
var IO = "1dc51fe93a84f8ed3a37e9e2d78fd996b225326aa1520ce41eeebbd1fca59246"
  , KH = `/*
  Copy of a solution to reset rotation and transformation
    on the container of the embed form when using the overlay layout.
    Taken from AppForm component.

    TODO: Both MUST be refactored to use a shared mixin and probably a different approach
        to setting rotation and positioning.
*/

/* stylelint-disable declaration-no-important */
/* stylelint-disable-next-line selector-max-attribute */
._appEmbedRoot_dbbpw_12[data-layout='overlay'][data-current-step='success'] {
  top: 0 !important;
  left: 0 !important;
  display: flex;
  height: 100%;
  width: 100vw !important;
  margin: 0;
  pointer-events: none;
  rotate: unset !important;
  transform: unset !important;
}

/* stylelint-disable selector-max-specificity */
/* stylelint-disable-next-line selector-max-attribute */
._appEmbedRoot_dbbpw_12[data-layout='overlay'][data-current-step='success'] > div {
  pointer-events: auto;
  transform-origin: top left;
}
`;
(function() {
  if (typeof document != "undefined") {
    window.formStyles || (window.formStyles = new Map);
    var e = window.formStyles;
    e.has(IO) || e.set(IO, KH.replace(/:root/g, ":host"))
  }
}
)();
var MO = {
  appEmbedRoot: "_appEmbedRoot_dbbpw_12"
};
var $O = a(() => {
  let { state: { formDefinition: { success: e, form: { layout: t } } }, dispatch: r } = xe()
    , { addClassToRoot: n } = yo();
  return (0,
    LO.useLayoutEffect)(() => {
      n(MO.appEmbedRoot)
    }
      , [n]),
    Wr(),
    e.action === "redirect" && e.url ? (window.location.href = `https://${e.url}`,
      null) : h(Xu, {
        layout: t,
        type: "success",
        onClose: () => {
          var o;
          Ke.leaveBreadcrumb("Form closed", {
            shop: ((o = window == null ? void 0 : window.Shopify) == null ? void 0 : o.shop) || ""
          }, "log"),
            r({
              type: "CLOSE"
            })
        }
        ,
        header: e.heading,
        body: e.text,
        copyText: e.discount ? e.discount.code : null
      })
}
  , "AppSuccess");
c();
var DO = {
  heading: "Sorry, there's a glitch",
  text: "We're not quite sure what went wrong, but we're working on it. Refresh your page, or try again a little later."
}
  , UO = a(() => {
    let { dispatch: e } = xe();
    return Wr(),
      h(Xu, {
        type: "warning",
        onClose: () => e({
          type: "NEXT"
        }),
        header: DO.heading,
        body: DO.text
      })
  }
    , "AppError");
var XH = {
  0: h(Q2, null),
  1: h(AO, null),
  2: h($O, null),
  3: h(UO, null)
}
  , FO = a(() => {
    var n;
    let { state: e, dispatch: t } = xe()
      , r = (0,
        Uo.useRef)(null);
    return k2(r),
      EO(e.formDefinition.loginWithShopEnabled, (n = e.formDefinition.success.discount) == null ? void 0 : n.code),
      (0,
        Uo.useEffect)(() => {
          t({
            type: "SET_SHOP_AVAILABLE",
            payload: e.formDefinition.loginWithShopEnabled
          })
        }
          , [e.formDefinition.loginWithShopEnabled, t]),
      (0,
        Uo.useLayoutEffect)(() => {
          var i;
          let o = (i = e == null ? void 0 : e.root) == null ? void 0 : i.getElementById("app-embed");
          o && o.setAttribute("data-current-step", xn[e.currentStep].toLocaleLowerCase())
        }
          , [e.currentStep, e.root]),
      Ke.leaveBreadcrumb("Current Step", {
        currentStep: e.currentStep
      }, "navigation"),
      e.isFormDismissed ? h(Fragment, null) : h("div", {
        className: F2.container,
        "data-testid": "app-router",
        ref: r
      }, XH[e.currentStep])
  }
    , "AppRouter");
c();
c();
var qH = a(() => ({
  position: "fixed",
  zIndex: "2147483647",
  width: "var(--app-embed-width)",
  padding: "var(--app-embed-padding-y) var(--app-embed-padding-x)"
}), "getBaseStyles")
  , BO = qH;
var ZH = a((e, t, r, n = "floating") => {
  var l;
  let o = So(r)
    , i = document.createElement("form-embed");
  i.id = `app-embed-container-${t}`;
  let s = document.createElement("div");
  return s.id = e,
    s.classList.add("appEmbed"),
    s.dataset.layout = n,
    s.dataset.position = o,
    s.dataset.formRoot = "true",
    Object.assign(s.style, {
      ...BO(),
      ...r
    }),
    (l = i.shadowRoot) == null || l.appendChild(s),
  {
    appEmbedContainer: i,
    formsContainer: s
  }
}
  , "getAppEmbedContainer")
  , VO = ZH;
c();
Vo();
var Yp = class Yp extends im {
  constructor() {
    super(...arguments);
    this.state = {
      hasError: !1
    }
  }
  static getDerivedStateFromError(r) {
    return {
      hasError: !0
    }
  }
  componentDidCatch(r, n) {
    ur.record("forms_error_boundary_hits", 1, {
      route: window.location.pathname
    }),
      Gn.fromError(r, {
        meta: {
          ...n
        }
      }).notify()
  }
  render() {
    return this.state.hasError ? h(Fragment, null) : this.props.children
  }
}
  ;
a(Yp, "ErrorBoundary");
var ta = Yp;
c();
var kO = a((e, t) => {
  let { dataset: r } = e;
  return {
    ...t,
    container: {
      ...t.container,
      paddingTop: `${r.formsPaddingTop}px`,
      paddingRight: `${r.formsPaddingRight}px`,
      paddingBottom: `${r.formsPaddingBottom}px`,
      paddingLeft: `${r.formsPaddingLeft}px`,
      textAlignment: r.formsTextAlignment,
      formAlignment: r.formsFullWidth === "true" ? "stretch" : r.formsAlignment
    },
    heading: {
      ...t.heading,
      color: r.formsTextColor
    },
    text: {
      ...t.text,
      color: r.formsTextColor
    },
    button: {
      ...t.button,
      backgroundColor: r.formsButtonBackgroundColor,
      color: r.formsButtonLabelColor
    },
    a: {
      ...t.a,
      color: r.formsLinksColor
    },
    input: {
      ...t.input,
      errorColor: r.formsErrorsColor
    }
  }
}
  , "mapFormStylesWithAppBlockStyles");
var jp = "app-embed"
  , HO = a(({ container: e }) => {
    let { state: t } = xe()
      , r = su();
    (0,
      qu.useLayoutEffect)(() => {
        e == null || e.setAttribute("style", "--inline-container-min-height: 125px")
      }
        , [e]);
    let n = (0,
      qu.useCallback)(() => {
        ur.record("forms_api_calls", 1, {
          operation: "ImageLoading",
          status: "error"
        })
      }
        , []);
    return h(l_, {
      styles: t.formStyles,
      layout: t.formDefinition.form.layout,
      image: t.formDefinition.form.image
    }, h(p_, {
      shadowRoot: t.root,
      image: r,
      onError: n
    }, h(FO, null)))
  }
    , "App");
async function QH(e) {
  let t = a(() => {
    ur.record("forms_api_calls", 1, {
      operation: "FontLoading",
      status: "error"
    })
  }
    , "onFontLoadError");
  e.heading.fontSources && await Sl(e.heading.fontFamily, e.heading.fontSources, t),
    e.text.fontSources && await Sl(e.text.fontFamily, e.text.fontSources, t)
}
a(QH, "setupFonts");
var JH = a((e, t, r, n) => {
  var s;
  let o = document.createElement("form-embed");
  o.id = jp;
  let i = document.createElement("div");
  return i.dataset.formRoot = "true",
    i.id = jp,
    (s = o.shadowRoot) == null || s.appendChild(i),
    n.appendChild(o),
    rl(h(ta, null, h(hf, {
      formDefinition: r,
      formStyles: kO(n, t),
      formId: e,
      shadowRoot: o.shadowRoot
    }, h(HO, {
      container: n
    }))), i)
}
  , "renderInContainer")
  , Kbe = a(async (e, t, r, n, o) => {
    Ke.leaveBreadcrumb("App Loaded", {}, "log");
    let i = r.form.layout === "inline";
    if (await QH(t),
      i && n)
      return JH(e, t, r, n);
    let { appEmbedContainer: s, formsContainer: l } = VO(jp, e, t.appEmbedContainer, r.form.layout);
    return document.body.append(s),
      rl(h(ta, null, h(hf, {
        shadowRoot: s.shadowRoot,
        formDefinition: r,
        formStyles: t,
        formId: e,
        clientCountry: o
      }, h(HO, null))), l)
  }
    , "setupApp");
export { HO as App, Kbe as setupApp };
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
*/
//# sourceMappingURL=App-ZC6TVKSM.js.map

