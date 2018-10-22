/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function(a, b) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function(a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function(a, b) {
  "use strict";
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    (c.text = a), b.head.appendChild(c).parentNode.removeChild(c);
  }
  var q = "3.2.1",
    r = function(a, b) {
      return new r.fn.init(a, b);
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function(a, b) {
      return b.toUpperCase();
    };
  (r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function() {
      return f.call(this);
    },
    get: function(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    },
    pushStack: function(a) {
      var b = r.merge(this.constructor(), a);
      return (b.prevObject = this), b;
    },
    each: function(a) {
      return r.each(this, a);
    },
    map: function(a) {
      return this.pushStack(
        r.map(this, function(b, c) {
          return a.call(b, c, b);
        })
      );
    },
    slice: function() {
      return this.pushStack(f.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: h,
    sort: c.sort,
    splice: c.splice
  }),
    (r.extend = r.fn.extend = function() {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for (
        "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
          "object" == typeof g || r.isFunction(g) || (g = {}),
          h === i && ((g = this), h--);
        h < i;
        h++
      )
        if (null != (a = arguments[h]))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (j && d && (r.isPlainObject(d) || (e = Array.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && Array.isArray(c) ? c : []))
                      : (f = c && r.isPlainObject(c) ? c : {}),
                    (g[b] = r.extend(j, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
    r.extend({
      expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a);
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === r.type(a);
      },
      isWindow: function(a) {
        return null != a && a === a.window;
      },
      isNumeric: function(a) {
        var b = r.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
      },
      isPlainObject: function(a) {
        var b, c;
        return (
          !(!a || "[object Object]" !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, "constructor") && b.constructor),
            "function" == typeof c && m.call(c) === n))
        );
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function(a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
            ? j[k.call(a)] || "object"
            : typeof a;
      },
      globalEval: function(a) {
        p(a);
      },
      camelCase: function(a) {
        return a.replace(t, "ms-").replace(u, v);
      },
      each: function(a, b) {
        var c,
          d = 0;
        if (w(a)) {
          for (c = a.length; d < c; d++)
            if (b.call(a[d], d, a[d]) === !1) break;
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
        return a;
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(s, "");
      },
      makeArray: function(a, b) {
        var c = b || [];
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, "string" == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        );
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : i.call(b, a, c);
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function(a, b, c) {
        var d,
          e,
          f = 0,
          h = [];
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e);
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e);
        return g.apply([], h);
      },
      guid: 1,
      proxy: function(a, b) {
        var c, d, e;
        if (
          ("string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function() {
              return a.apply(b || this, d.concat(f.call(arguments)));
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          );
      },
      now: Date.now,
      support: o
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
      }
    );
  function w(a) {
    var b = !!a && "length" in a && a.length,
      c = r.type(a);
    return (
      "function" !== c &&
      !r.isWindow(a) &&
      ("array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a))
    );
  }
  var x = (function(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = "sizzle" + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function(a, b) {
        return a === b && (l = !0), 0;
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function(a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
        return -1;
      },
      J =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      K = "[\\x20\\t\\r\\n\\f]",
      L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      M =
        "\\[" +
        K +
        "*(" +
        L +
        ")(?:" +
        K +
        "*([*^$|!~]?=)" +
        K +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        L +
        "))|)" +
        K +
        "*\\]",
      N =
        ":(" +
        L +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        M +
        ")*)|.*)\\)|)",
      O = new RegExp(K + "+", "g"),
      P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
      Q = new RegExp("^" + K + "*," + K + "*"),
      R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
      S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
      T = new RegExp(N),
      U = new RegExp("^" + L + "$"),
      V = {
        ID: new RegExp("^#(" + L + ")"),
        CLASS: new RegExp("^\\.(" + L + ")"),
        TAG: new RegExp("^(" + L + "|[*])"),
        ATTR: new RegExp("^" + M),
        PSEUDO: new RegExp("^" + N),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            K +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            K +
            "*(?:([+-]|)" +
            K +
            "*(\\d+)|))" +
            K +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + J + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            K +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            K +
            "*((?:-\\d)?\\d*)" +
            K +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
      aa = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c
          ? b
          : d < 0
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function(a, b) {
        return b
          ? "\0" === a
            ? "\ufffd"
            : a.slice(0, -1) +
              "\\" +
              a.charCodeAt(a.length - 1).toString(16) +
              " "
          : "\\" + a;
      },
      da = function() {
        m();
      },
      ea = ta(
        function(a) {
          return a.disabled === !0 && ("form" in a || "label" in a);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length
          ? function(a, b) {
              F.apply(a, H.call(b));
            }
          : function(a, b) {
              var c = a.length,
                d = 0;
              while ((a[c++] = b[d++]));
              a.length = c - 1;
            }
      };
    }
    function ga(a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9;
      if (
        ((d = d || []),
        "string" != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d;
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d;
              if (j.id === f) return d.push(j), d;
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d;
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d;
          }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a);
          else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id"))
              ? (k = k.replace(ba, ca))
              : b.setAttribute("id", (k = u)),
              (o = g(a)),
              (h = o.length);
            while (h--) o[h] = "#" + k + " " + sa(o[h]);
            (r = o.join(",")), (s = ($.test(a) && qa(b.parentNode)) || b);
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d;
            } catch (x) {
            } finally {
              k === u && b.removeAttribute("id");
            }
        }
      }
      return i(a.replace(P, "$1"), b, d, e);
    }
    function ha() {
      var a = [];
      function b(c, e) {
        return (
          a.push(c + " ") > d.cacheLength && delete b[a.shift()],
          (b[c + " "] = e)
        );
      }
      return b;
    }
    function ia(a) {
      return (a[u] = !0), a;
    }
    function ja(a) {
      var b = n.createElement("fieldset");
      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null);
      }
    }
    function ka(a, b) {
      var c = a.split("|"),
        e = c.length;
      while (e--) d.attrHandle[c[e]] = b;
    }
    function la(a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while ((c = c.nextSibling)) if (c === b) return -1;
      return a ? 1 : -1;
    }
    function ma(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }
    function na(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }
    function oa(a) {
      return function(b) {
        return "form" in b
          ? b.parentNode && b.disabled === !1
            ? "label" in b
              ? "label" in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : "label" in b && b.disabled === a;
      };
    }
    function pa(a) {
      return ia(function(b) {
        return (
          (b = +b),
          ia(function(c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length;
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
          })
        );
      });
    }
    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }
    (c = ga.support = {}),
      (f = ga.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return !!b && "HTML" !== b.nodeName;
      }),
      (m = ga.setDocument = function(a) {
        var b,
          e,
          g = a ? a.ownerDocument || a : v;
        return g !== n && 9 === g.nodeType && g.documentElement
          ? ((n = g),
            (o = n.documentElement),
            (p = !f(n)),
            v !== n &&
              (e = n.defaultView) &&
              e.top !== e &&
              (e.addEventListener
                ? e.addEventListener("unload", da, !1)
                : e.attachEvent && e.attachEvent("onunload", da)),
            (c.attributes = ja(function(a) {
              return (a.className = "i"), !a.getAttribute("className");
            })),
            (c.getElementsByTagName = ja(function(a) {
              return (
                a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
              );
            })),
            (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
            (c.getById = ja(function(a) {
              return (
                (o.appendChild(a).id = u),
                !n.getElementsByName || !n.getElementsByName(u).length
              );
            })),
            c.getById
              ? ((d.filter.ID = function(a) {
                  var b = a.replace(_, aa);
                  return function(a) {
                    return a.getAttribute("id") === b;
                  };
                }),
                (d.find.ID = function(a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : [];
                  }
                }))
              : ((d.filter.ID = function(a) {
                  var b = a.replace(_, aa);
                  return function(a) {
                    var c =
                      "undefined" != typeof a.getAttributeNode &&
                      a.getAttributeNode("id");
                    return c && c.value === b;
                  };
                }),
                (d.find.ID = function(a, b) {
                  if ("undefined" != typeof b.getElementById && p) {
                    var c,
                      d,
                      e,
                      f = b.getElementById(a);
                    if (f) {
                      if (((c = f.getAttributeNode("id")), c && c.value === a))
                        return [f];
                      (e = b.getElementsByName(a)), (d = 0);
                      while ((f = e[d++]))
                        if (
                          ((c = f.getAttributeNode("id")), c && c.value === a)
                        )
                          return [f];
                    }
                    return [];
                  }
                })),
            (d.find.TAG = c.getElementsByTagName
              ? function(a, b) {
                  return "undefined" != typeof b.getElementsByTagName
                    ? b.getElementsByTagName(a)
                    : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0;
                }
              : function(a, b) {
                  var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                  if ("*" === a) {
                    while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                    return d;
                  }
                  return f;
                }),
            (d.find.CLASS =
              c.getElementsByClassName &&
              function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p)
                  return b.getElementsByClassName(a);
              }),
            (r = []),
            (q = []),
            (c.qsa = Y.test(n.querySelectorAll)) &&
              (ja(function(a) {
                (o.appendChild(a).innerHTML =
                  "<a id='" +
                  u +
                  "'></a><select id='" +
                  u +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  a.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + K + "*(?:''|\"\")"),
                  a.querySelectorAll("[selected]").length ||
                    q.push("\\[" + K + "*(?:value|" + J + ")"),
                  a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                  a.querySelectorAll(":checked").length || q.push(":checked"),
                  a.querySelectorAll("a#" + u + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              ja(function(a) {
                a.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                  a.appendChild(b).setAttribute("name", "D"),
                  a.querySelectorAll("[name=d]").length &&
                    q.push("name" + K + "*[*^$|!~]?="),
                  2 !== a.querySelectorAll(":enabled").length &&
                    q.push(":enabled", ":disabled"),
                  (o.appendChild(a).disabled = !0),
                  2 !== a.querySelectorAll(":disabled").length &&
                    q.push(":enabled", ":disabled"),
                  a.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (c.matchesSelector = Y.test(
              (s =
                o.matches ||
                o.webkitMatchesSelector ||
                o.mozMatchesSelector ||
                o.oMatchesSelector ||
                o.msMatchesSelector)
            )) &&
              ja(function(a) {
                (c.disconnectedMatch = s.call(a, "*")),
                  s.call(a, "[s!='']:x"),
                  r.push("!=", N);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (r = r.length && new RegExp(r.join("|"))),
            (b = Y.test(o.compareDocumentPosition)),
            (t =
              b || Y.test(o.contains)
                ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                      d = b && b.parentNode;
                    return (
                      a === d ||
                      !(
                        !d ||
                        1 !== d.nodeType ||
                        !(c.contains
                          ? c.contains(d)
                          : a.compareDocumentPosition &&
                            16 & a.compareDocumentPosition(d))
                      )
                    );
                  }
                : function(a, b) {
                    if (b) while ((b = b.parentNode)) if (b === a) return !0;
                    return !1;
                  }),
            (B = b
              ? function(a, b) {
                  if (a === b) return (l = !0), 0;
                  var d =
                    !a.compareDocumentPosition - !b.compareDocumentPosition;
                  return d
                    ? d
                    : ((d =
                        (a.ownerDocument || a) === (b.ownerDocument || b)
                          ? a.compareDocumentPosition(b)
                          : 1),
                      1 & d ||
                      (!c.sortDetached && b.compareDocumentPosition(a) === d)
                        ? a === n || (a.ownerDocument === v && t(v, a))
                          ? -1
                          : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                              ? I(k, a) - I(k, b)
                              : 0
                        : 4 & d
                          ? -1
                          : 1);
                }
              : function(a, b) {
                  if (a === b) return (l = !0), 0;
                  var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                  if (!e || !f)
                    return a === n
                      ? -1
                      : b === n
                        ? 1
                        : e
                          ? -1
                          : f
                            ? 1
                            : k
                              ? I(k, a) - I(k, b)
                              : 0;
                  if (e === f) return la(a, b);
                  c = a;
                  while ((c = c.parentNode)) g.unshift(c);
                  c = b;
                  while ((c = c.parentNode)) h.unshift(c);
                  while (g[d] === h[d]) d++;
                  return d
                    ? la(g[d], h[d])
                    : g[d] === v
                      ? -1
                      : h[d] === v
                        ? 1
                        : 0;
                }),
            n)
          : n;
      }),
      (ga.matches = function(a, b) {
        return ga(a, null, null, b);
      }),
      (ga.matchesSelector = function(a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + " "] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b);
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d;
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0;
      }),
      (ga.contains = function(a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b);
      }),
      (ga.attr = function(a, b) {
        (a.ownerDocument || a) !== n && m(a);
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
        return void 0 !== f
          ? f
          : c.attributes || !p
            ? a.getAttribute(b)
            : (f = a.getAttributeNode(b)) && f.specified
              ? f.value
              : null;
      }),
      (ga.escape = function(a) {
        return (a + "").replace(ba, ca);
      }),
      (ga.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a);
      }),
      (ga.uniqueSort = function(a) {
        var b,
          d = [],
          e = 0,
          f = 0;
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f));
          while (e--) a.splice(d[e], 1);
        }
        return (k = null), a;
      }),
      (e = ga.getText = function(a) {
        var b,
          c = "",
          d = 0,
          f = a.nodeType;
        if (f) {
          if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
          } else if (3 === f || 4 === f) return a.nodeValue;
        } else while ((b = a[d++])) c += e(b);
        return c;
      }),
      (d = ga.selectors = {
        cacheLength: 50,
        createPseudo: ia,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(a) {
            return (
              (a[1] = a[1].replace(_, aa)),
              (a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa)),
              "~=" === a[2] && (a[3] = " " + a[3] + " "),
              a.slice(0, 4)
            );
          },
          CHILD: function(a) {
            return (
              (a[1] = a[1].toLowerCase()),
              "nth" === a[1].slice(0, 3)
                ? (a[3] || ga.error(a[0]),
                  (a[4] = +(a[4]
                    ? a[5] + (a[6] || 1)
                    : 2 * ("even" === a[3] || "odd" === a[3]))),
                  (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                : a[3] && ga.error(a[0]),
              a
            );
          },
          PSEUDO: function(a) {
            var b,
              c = !a[6] && a[2];
            return V.CHILD.test(a[0])
              ? null
              : (a[3]
                  ? (a[2] = a[4] || a[5] || "")
                  : c &&
                    T.test(c) &&
                    (b = g(c, !0)) &&
                    (b = c.indexOf(")", c.length - b) - c.length) &&
                    ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                a.slice(0, 3));
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(_, aa).toLowerCase();
            return "*" === a
              ? function() {
                  return !0;
                }
              : function(a) {
                  return a.nodeName && a.nodeName.toLowerCase() === b;
                };
          },
          CLASS: function(a) {
            var b = y[a + " "];
            return (
              b ||
              ((b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) &&
                y(a, function(a) {
                  return b.test(
                    ("string" == typeof a.className && a.className) ||
                      ("undefined" != typeof a.getAttribute &&
                        a.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function(a, b, c) {
            return function(d) {
              var e = ga.attr(d, a);
              return null == e
                ? "!=" === b
                : !b ||
                    ((e += ""),
                    "=" === b
                      ? e === c
                      : "!=" === b
                        ? e !== c
                        : "^=" === b
                          ? c && 0 === e.indexOf(c)
                          : "*=" === b
                            ? c && e.indexOf(c) > -1
                            : "$=" === b
                              ? c && e.slice(-c.length) === c
                              : "~=" === b
                                ? (" " + e.replace(O, " ") + " ").indexOf(c) >
                                  -1
                                : "|=" === b &&
                                  (e === c ||
                                    e.slice(0, c.length + 1) === c + "-"));
            };
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e
              ? function(a) {
                  return !!a.parentNode;
                }
              : function(b, c, i) {
                  var j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p = f !== g ? "nextSibling" : "previousSibling",
                    q = b.parentNode,
                    r = h && b.nodeName.toLowerCase(),
                    s = !i && !h,
                    t = !1;
                  if (q) {
                    if (f) {
                      while (p) {
                        m = b;
                        while ((m = m[p]))
                          if (
                            h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType
                          )
                            return !1;
                        o = p = "only" === a && !o && "nextSibling";
                      }
                      return !0;
                    }
                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                      (m = q),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n && j[2]),
                        (m = n && q.childNodes[n]);
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (1 === m.nodeType && ++t && m === b) {
                          k[a] = [w, n, t];
                          break;
                        }
                    } else if (
                      (s &&
                        ((m = b),
                        (l = m[u] || (m[u] = {})),
                        (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                        (j = k[a] || []),
                        (n = j[0] === w && j[1]),
                        (t = n)),
                      t === !1)
                    )
                      while ((m = (++n && m && m[p]) || (t = n = 0) || o.pop()))
                        if (
                          (h
                            ? m.nodeName.toLowerCase() === r
                            : 1 === m.nodeType) &&
                          ++t &&
                          (s &&
                            ((l = m[u] || (m[u] = {})),
                            (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                            (k[a] = [w, t])),
                          m === b)
                        )
                          break;
                    return (t -= e), t === d || (t % d === 0 && t / d >= 0);
                  }
                };
          },
          PSEUDO: function(a, b) {
            var c,
              e =
                d.pseudos[a] ||
                d.setFilters[a.toLowerCase()] ||
                ga.error("unsupported pseudo: " + a);
            return e[u]
              ? e(b)
              : e.length > 1
                ? ((c = [a, a, "", b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function(a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length;
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]));
                      })
                    : function(a) {
                        return e(a, 0, c);
                      })
                : e;
          }
        },
        pseudos: {
          not: ia(function(a) {
            var b = [],
              c = [],
              d = h(a.replace(P, "$1"));
            return d[u]
              ? ia(function(a, b, c, e) {
                  var f,
                    g = d(a, null, e, []),
                    h = a.length;
                  while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                })
              : function(a, e, f) {
                  return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop();
                };
          }),
          has: ia(function(a) {
            return function(b) {
              return ga(a, b).length > 0;
            };
          }),
          contains: ia(function(a) {
            return (
              (a = a.replace(_, aa)),
              function(b) {
                return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
              }
            );
          }),
          lang: ia(function(a) {
            return (
              U.test(a || "") || ga.error("unsupported lang: " + a),
              (a = a.replace(_, aa).toLowerCase()),
              function(b) {
                var c;
                do
                  if (
                    (c = p
                      ? b.lang
                      : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                  )
                    return (
                      (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-")
                    );
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1;
              }
            );
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id;
          },
          root: function(a) {
            return a === o;
          },
          focus: function(a) {
            return (
              a === n.activeElement &&
              (!n.hasFocus || n.hasFocus()) &&
              !!(a.type || a.href || ~a.tabIndex)
            );
          },
          enabled: oa(!1),
          disabled: oa(!0),
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return (
              ("input" === b && !!a.checked) || ("option" === b && !!a.selected)
            );
          },
          selected: function(a) {
            return (
              a.parentNode && a.parentNode.selectedIndex, a.selected === !0
            );
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0;
          },
          parent: function(a) {
            return !d.pseudos.empty(a);
          },
          header: function(a) {
            return X.test(a.nodeName);
          },
          input: function(a) {
            return W.test(a.nodeName);
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return ("input" === b && "button" === a.type) || "button" === b;
          },
          text: function(a) {
            var b;
            return (
              "input" === a.nodeName.toLowerCase() &&
              "text" === a.type &&
              (null == (b = a.getAttribute("type")) ||
                "text" === b.toLowerCase())
            );
          },
          first: pa(function() {
            return [0];
          }),
          last: pa(function(a, b) {
            return [b - 1];
          }),
          eq: pa(function(a, b, c) {
            return [c < 0 ? c + b : c];
          }),
          even: pa(function(a, b) {
            for (var c = 0; c < b; c += 2) a.push(c);
            return a;
          }),
          odd: pa(function(a, b) {
            for (var c = 1; c < b; c += 2) a.push(c);
            return a;
          }),
          lt: pa(function(a, b, c) {
            for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
            return a;
          }),
          gt: pa(function(a, b, c) {
            for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
            return a;
          })
        }
      }),
      (d.pseudos.nth = d.pseudos.eq);
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b);
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);
    function ra() {}
    (ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize = function(a, b) {
        var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = d.preFilter);
        while (h) {
          (c && !(e = Q.exec(h))) ||
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (c = !1),
            (e = R.exec(h)) &&
              ((c = e.shift()),
              f.push({ value: c, type: e[0].replace(P, " ") }),
              (h = h.slice(c.length)));
          for (g in d.filter)
            !(e = V[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((c = e.shift()),
              f.push({ value: c, type: g, matches: e }),
              (h = h.slice(c.length)));
          if (!c) break;
        }
        return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
      });
    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
      return d;
    }
    function ta(a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && "parentNode" === f,
        h = x++;
      return b.first
        ? function(b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e);
            return !1;
          }
        : function(b, c, i) {
            var j,
              k,
              l,
              m = [w, h];
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b;
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2]);
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0;
                  }
            return !1;
          };
    }
    function ua(a) {
      return a.length > 1
        ? function(b, c, d) {
            var e = a.length;
            while (e--) if (!a[e](b, c, d)) return !1;
            return !0;
          }
        : a[0];
    }
    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
      return c;
    }
    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)));
      return g;
    }
    function xa(a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function(f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
          if ((c && c(q, r, h, i), d)) {
            (j = wa(r, n)), d(j, [], h, i), (k = j.length);
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
          if (f) {
            if (e || a) {
              if (e) {
                (j = []), (k = r.length);
                while (k--) (l = r[k]) && j.push((q[k] = l));
                e(null, (r = []), j, i);
              }
              k = r.length;
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l));
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r);
        })
      );
    }
    function ya(a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[" "],
          i = g ? 1 : 0,
          k = ta(
            function(a) {
              return a === b;
            },
            h,
            !0
          ),
          l = ta(
            function(a) {
              return I(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function(a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
              return (b = null), e;
            }
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)];
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                ).replace(P, "$1"),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            );
          }
          m.push(c);
        }
      return ua(m);
    }
    function za(a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function(f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = "0",
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG("*", k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length;
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              (o = 0), g || l.ownerDocument === n || (m(l), (h = !p));
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l);
                  break;
                }
              k && (w = y);
            }
            c && ((l = !q && l) && r--, f && t.push(l));
          }
          if (((r += s), c && s !== r)) {
            o = 0;
            while ((q = b[o++])) q(t, u, g, h);
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
              u = wa(u);
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
          }
          return k && ((w = y), (j = v)), t;
        };
      return c ? ia(f) : f;
    }
    return (
      (h = ga.compile = function(a, b) {
        var c,
          d = [],
          e = [],
          f = A[a + " "];
        if (!f) {
          b || (b = g(a)), (c = b.length);
          while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f);
          (f = A(a, za(e, d))), (f.selector = a);
        }
        return f;
      }),
      (i = ga.select = function(a, b, c, e) {
        var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g((a = m.selector || a));
        if (((c = c || []), 1 === n.length)) {
          if (
            ((i = n[0] = n[0].slice(0)),
            i.length > 2 &&
              "ID" === (j = i[0]).type &&
              9 === b.nodeType &&
              p &&
              d.relative[i[1].type])
          ) {
            if (
              ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
            )
              return c;
            m && (b = b.parentNode), (a = a.slice(i.shift().value.length));
          }
          f = V.needsContext.test(a) ? 0 : i.length;
          while (f--) {
            if (((j = i[f]), d.relative[(k = j.type)])) break;
            if (
              (l = d.find[k]) &&
              (e = l(
                j.matches[0].replace(_, aa),
                ($.test(i[0].type) && qa(b.parentNode)) || b
              ))
            ) {
              if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                return G.apply(c, e), c;
              break;
            }
          }
        }
        return (
          (m || h(a, n))(
            e,
            b,
            !p,
            c,
            !b || ($.test(a) && qa(b.parentNode)) || b
          ),
          c
        );
      }),
      (c.sortStable =
        u
          .split("")
          .sort(B)
          .join("") === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function(a) {
        return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
      })),
      ja(function(a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          "#" === a.firstChild.getAttribute("href")
        );
      }) ||
        ka("type|href|height|width", function(a, b, c) {
          if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }),
      (c.attributes &&
        ja(function(a) {
          return (
            (a.innerHTML = "<input/>"),
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
          );
        })) ||
        ka("value", function(a, b, c) {
          if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
        }),
      ja(function(a) {
        return null == a.getAttribute("disabled");
      }) ||
        ka(J, function(a, b, c) {
          var d;
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
                ? d.value
                : null;
        }),
      ga
    );
  })(a);
  (r.find = x),
    (r.expr = x.selectors),
    (r.expr[":"] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape);
  var y = function(a, b, c) {
      var d = [],
        e = void 0 !== c;
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    z = function(a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
    A = r.expr.match.needsContext;
  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }
  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    D = /^.[^:#\[\.,]*$/;
  function E(a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function(a, d) {
          return !!b.call(a, d, a) !== c;
        })
      : b.nodeType
        ? r.grep(a, function(a) {
            return (a === b) !== c;
          })
        : "string" != typeof b
          ? r.grep(a, function(a) {
              return i.call(b, a) > -1 !== c;
            })
          : D.test(b)
            ? r.filter(b, a, c)
            : ((b = r.filter(b, a)),
              r.grep(a, function(a) {
                return i.call(b, a) > -1 !== c && 1 === a.nodeType;
              }));
  }
  (r.filter = function(a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function(a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    r.fn.extend({
      find: function(a) {
        var b,
          c,
          d = this.length,
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            r(a).filter(function() {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0;
            })
          );
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
        return d > 1 ? r.uniqueSort(c) : c;
      },
      filter: function(a) {
        return this.pushStack(E(this, a || [], !1));
      },
      not: function(a) {
        return this.pushStack(E(this, a || [], !0));
      },
      is: function(a) {
        return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length;
      }
    });
  var F,
    G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    H = (r.fn.init = function(a, b, c) {
      var e, f;
      if (!a) return this;
      if (((c = c || F), "string" == typeof a)) {
        if (
          ((e =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : G.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery
            ? (b || c).find(a)
            : this.constructor(b).find(a);
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            C.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
          return this;
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        );
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
          ? void 0 !== c.ready
            ? c.ready(a)
            : a(r)
          : r.makeArray(a, this);
    });
  (H.prototype = r.fn), (F = r(d));
  var I = /^(?:parents|prev(?:Until|All))/,
    J = { children: !0, contents: !0, next: !0, prev: !0 };
  r.fn.extend({
    has: function(a) {
      var b = r(a, this),
        c = b.length;
      return this.filter(function() {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0;
      });
    },
    closest: function(a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = "string" != typeof a && r(a);
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function(a) {
      return a
        ? "string" == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });
  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a;
  }
  r.each(
    {
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null;
      },
      parents: function(a) {
        return y(a, "parentNode");
      },
      parentsUntil: function(a, b, c) {
        return y(a, "parentNode", c);
      },
      next: function(a) {
        return K(a, "nextSibling");
      },
      prev: function(a) {
        return K(a, "previousSibling");
      },
      nextAll: function(a) {
        return y(a, "nextSibling");
      },
      prevAll: function(a) {
        return y(a, "previousSibling");
      },
      nextUntil: function(a, b, c) {
        return y(a, "nextSibling", c);
      },
      prevUntil: function(a, b, c) {
        return y(a, "previousSibling", c);
      },
      siblings: function(a) {
        return z((a.parentNode || {}).firstChild, a);
      },
      children: function(a) {
        return z(a.firstChild);
      },
      contents: function(a) {
        return B(a, "iframe")
          ? a.contentDocument
          : (B(a, "template") && (a = a.content || a),
            r.merge([], a.childNodes));
      }
    },
    function(a, b) {
      r.fn[a] = function(c, d) {
        var e = r.map(this, b, c);
        return (
          "Until" !== a.slice(-5) && (d = c),
          d && "string" == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()),
          this.pushStack(e)
        );
      };
    }
  );
  var L = /[^\x20\t\r\n\f]+/g;
  function M(a) {
    var b = {};
    return (
      r.each(a.match(L) || [], function(a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  r.Callbacks = function(a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function() {
        for (e = e || a.once, d = b = !0; g.length; h = -1) {
          c = g.shift();
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1));
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : "");
      },
      j = {
        add: function() {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d(b) {
                r.each(b, function(b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && "string" !== r.type(c) && d(c);
                });
              })(arguments),
              c && !b && i()),
            this
          );
        },
        remove: function() {
          return (
            r.each(arguments, function(a, b) {
              var c;
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--;
            }),
            this
          );
        },
        has: function(a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0;
        },
        empty: function() {
          return f && (f = []), this;
        },
        disable: function() {
          return (e = g = []), (f = c = ""), this;
        },
        disabled: function() {
          return !f;
        },
        lock: function() {
          return (e = g = []), c || b || (f = c = ""), this;
        },
        locked: function() {
          return !!e;
        },
        fireWith: function(a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          );
        },
        fire: function() {
          return j.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!d;
        }
      };
    return j;
  };
  function N(a) {
    return a;
  }
  function O(a) {
    throw a;
  }
  function P(a, b, c, d) {
    var e;
    try {
      a && r.isFunction((e = a.promise))
        ? e
            .call(a)
            .done(b)
            .fail(c)
        : a && r.isFunction((e = a.then))
          ? e.call(a, b, c)
          : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }
  r.extend({
    Deferred: function(b) {
      var c = [
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ],
        d = "pending",
        e = {
          state: function() {
            return d;
          },
          always: function() {
            return f.done(arguments).fail(arguments), this;
          },
          catch: function(a) {
            return e.then(null, a);
          },
          pipe: function() {
            var a = arguments;
            return r
              .Deferred(function(b) {
                r.each(c, function(c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function() {
                    var a = e && e.apply(this, arguments);
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + "With"](this, e ? [a] : arguments);
                  });
                }),
                  (a = null);
              })
              .promise();
          },
          then: function(b, d, e) {
            var f = 0;
            function g(b, c, d, e) {
              return function() {
                var h = this,
                  i = arguments,
                  j = function() {
                    var a, j;
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError("Thenable self-resolution");
                      (j =
                        a &&
                        ("object" == typeof a || "function" == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, N, e), g(f, c, O, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, N, e),
                                g(f, c, O, e),
                                g(f, c, N, c.notifyWith)
                              ))
                          : (d !== N && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i));
                    }
                  },
                  k = e
                    ? j
                    : function() {
                        try {
                          j();
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== O && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i));
                        }
                      };
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k));
              };
            }
            return r
              .Deferred(function(a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : N)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
              })
              .promise();
          },
          promise: function(a) {
            return null != a ? r.extend(a, e) : e;
          }
        },
        f = {};
      return (
        r.each(c, function(a, b) {
          var g = b[2],
            h = b[5];
          (e[b[1]] = g.add),
            h &&
              g.add(
                function() {
                  d = h;
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function() {
              return (
                f[b[0] + "With"](this === f ? void 0 : this, arguments), this
              );
            }),
            (f[b[0] + "With"] = g.fireWith);
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      );
    },
    when: function(a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function(a) {
          return function(c) {
            (d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e);
          };
        };
      if (
        b <= 1 &&
        (P(a, g.done(h(c)).resolve, g.reject, !b),
        "pending" === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then();
      while (c--) P(e[c], h(c), g.reject);
      return g.promise();
    }
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (r.Deferred.exceptionHook = function(b, c) {
    a.console &&
      a.console.warn &&
      b &&
      Q.test(b.name) &&
      a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }),
    (r.readyException = function(b) {
      a.setTimeout(function() {
        throw b;
      });
    });
  var R = r.Deferred();
  (r.fn.ready = function(a) {
    return (
      R.then(a)["catch"](function(a) {
        r.readyException(a);
      }),
      this
    );
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(a) {
        (a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || R.resolveWith(d, [r]));
      }
    }),
    (r.ready.then = R.then);
  function S() {
    d.removeEventListener("DOMContentLoaded", S),
      a.removeEventListener("load", S),
      r.ready();
  }
  "complete" === d.readyState ||
  ("loading" !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener("DOMContentLoaded", S),
      a.addEventListener("load", S));
  var T = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === r.type(c)) {
        e = !0;
        for (h in c) T(a, b, h, c[h], !0, f, g);
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function(a, b, c) {
                return j.call(r(a), c);
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
    U = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
  function V() {
    this.expando = r.expando + V.uid++;
  }
  (V.uid = 1),
    (V.prototype = {
      cache: function(a) {
        var b = a[this.expando];
        return (
          b ||
            ((b = {}),
            U(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                  }))),
          b
        );
      },
      set: function(a, b, c) {
        var d,
          e = this.cache(a);
        if ("string" == typeof b) e[r.camelCase(b)] = c;
        else for (d in b) e[r.camelCase(d)] = b[d];
        return e;
      },
      get: function(a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)];
      },
      access: function(a, b, c) {
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function(a, b) {
        var c,
          d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            Array.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(L) || [])),
              (c = b.length);
            while (c--) delete d[b[c]];
          }
          (void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando]);
        }
      },
      hasData: function(a) {
        var b = a[this.expando];
        return void 0 !== b && !r.isEmptyObject(b);
      }
    });
  var W = new V(),
    X = new V(),
    Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function $(a) {
    return (
      "true" === a ||
      ("false" !== a &&
        ("null" === a
          ? null
          : a === +a + ""
            ? +a
            : Y.test(a)
              ? JSON.parse(a)
              : a))
    );
  }
  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(Z, "-$&").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c = $(c);
        } catch (e) {}
        X.set(a, b, c);
      } else c = void 0;
    return c;
  }
  r.extend({
    hasData: function(a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function(a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function(a, b) {
      X.remove(a, b);
    },
    _data: function(a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function(a, b) {
      W.remove(a, b);
    }
  }),
    r.fn.extend({
      data: function(a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = X.get(f)), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))
          ) {
            c = g.length;
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = r.camelCase(d.slice(5))), _(f, d, e[d])));
            W.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function() {
              X.set(this, a);
            })
          : T(
              this,
              function(b) {
                var c;
                if (f && void 0 === b) {
                  if (((c = X.get(f, a)), void 0 !== c)) return c;
                  if (((c = _(f, a)), void 0 !== c)) return c;
                } else
                  this.each(function() {
                    X.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(a) {
        return this.each(function() {
          X.remove(this, a);
        });
      }
    }),
    r.extend({
      queue: function(a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = W.get(a, b)),
            c &&
              (!d || Array.isArray(c)
                ? (d = W.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function() {
            r.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return (
          W.get(a, c) ||
          W.access(a, c, {
            empty: r.Callbacks("once memory").add(function() {
              W.remove(a, [b + "queue", c]);
            })
          })
        );
      }
    }),
    r.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
              ? this
              : this.each(function() {
                  var c = r.queue(this, a, b);
                  r._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
                })
        );
      },
      dequeue: function(a) {
        return this.each(function() {
          r.dequeue(this, a);
        });
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", []);
      },
      promise: function(a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f]);
          };
        "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
        while (g--)
          (c = W.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      }
    });
  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
    ca = ["Top", "Right", "Bottom", "Left"],
    da = function(a, b) {
      return (
        (a = b || a),
        "none" === a.style.display ||
          ("" === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            "none" === r.css(a, "display"))
      );
    },
    ea = function(a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    };
  function fa(a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function() {
            return d.cur();
          }
        : function() {
            return r.css(a, b, "");
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? "" : "px"),
      k = (r.cssNumber[b] || ("px" !== j && +i)) && ba.exec(r.css(a, b));
    if (k && k[3] !== j) {
      (j = j || k[3]), (c = c || []), (k = +i || 1);
      do (f = f || ".5"), (k /= f), r.style(a, b, k + j);
      while (f !== (f = h() / i) && 1 !== f && --g);
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    );
  }
  var ga = {};
  function ha(a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = ga[d];
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, "display")),
        b.parentNode.removeChild(b),
        "none" === e && (e = "block"),
        (ga[d] = e),
        e);
  }
  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ("none" === c &&
                ((e[f] = W.get(d, "display") || null),
                e[f] || (d.style.display = "")),
              "" === d.style.display && da(d) && (e[f] = ha(d)))
            : "none" !== c && ((e[f] = "none"), W.set(d, "display", c)));
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
    return a;
  }
  r.fn.extend({
    show: function() {
      return ia(this, !0);
    },
    hide: function() {
      return ia(this);
    },
    toggle: function(a) {
      return "boolean" == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function() {
            da(this) ? r(this).show() : r(this).hide();
          });
    }
  });
  var ja = /^(?:checkbox|radio)$/i,
    ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    la = /^$|\/(?:java|ecma)script/i,
    ma = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  (ma.optgroup = ma.option),
    (ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead),
    (ma.th = ma.td);
  function na(a, b) {
    var c;
    return (
      (c =
        "undefined" != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || "*")
          : "undefined" != typeof a.querySelectorAll
            ? a.querySelectorAll(b || "*")
            : []),
      void 0 === b || (b && B(a, b)) ? r.merge([a], c) : c
    );
  }
  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
  }
  var pa = /<|&#?\w+;/;
  function qa(a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (pa.test(f)) {
          (g = g || l.appendChild(b.createElement("div"))),
            (h = (ka.exec(f) || ["", ""])[1].toLowerCase()),
            (i = ma[h] || ma._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0]);
          while (k--) g = g.lastChild;
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = "");
        } else m.push(b.createTextNode(f));
    (l.textContent = ""), (n = 0);
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f);
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = na(l.appendChild(f), "script")),
        j && oa(g),
        c)
      ) {
        k = 0;
        while ((f = g[k++])) la.test(f.type || "") && c.push(f);
      }
    return l;
  }
  !(function() {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement("div")),
      c = d.createElement("input");
    c.setAttribute("type", "radio"),
      c.setAttribute("checked", "checked"),
      c.setAttribute("name", "t"),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var ra = d.documentElement,
    sa = /^key/,
    ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ua = /^([^.]*)(?:\.(.+)|)/;
  function va() {
    return !0;
  }
  function wa() {
    return !1;
  }
  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }
  function ya(a, b, c, d, e, f) {
    var g, h;
    if ("object" == typeof b) {
      "string" != typeof c && ((d = d || c), (c = void 0));
      for (h in b) ya(a, h, c, d, b[h], f);
      return a;
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ("string" == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = wa;
    else if (!e) return a;
    return (
      1 === f &&
        ((g = e),
        (e = function(a) {
          return r().off(a), g.apply(this, arguments);
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function() {
        r.event.add(this, b, e, d, c);
      })
    );
  }
  (r.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.get(a);
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(ra, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle = function(b) {
              return "undefined" != typeof r && r.event.triggered !== b.type
                ? r.event.dispatch.apply(a, arguments)
                : void 0;
            }),
          (b = (b || "").match(L) || [""]),
          (j = b.length);
        while (j--)
          (h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join(".")
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0));
      }
    },
    remove: function(a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = W.hasData(a) && W.get(a);
      if (q && (i = q.events)) {
        (b = (b || "").match(L) || [""]), (j = b.length);
        while (j--)
          if (
            ((h = ua.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            (l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (g = f = m.length);
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function(a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (W.get(this, "events") || {})[b.type] || [],
        k = r.event.special[b.type] || {};
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        (h = r.event.handlers.call(this, b, j)), (c = 0);
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          (b.currentTarget = f.elem), (d = 0);
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()));
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function(a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + " "),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
            f.length && h.push({ elem: j, handlers: f });
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      );
    },
    addProp: function(a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function() {
              if (this.originalEvent) return b(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[a];
            },
        set: function(b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b
          });
        }
      });
    },
    fix: function(a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && B(this, "input"))
            return this.click(), !1;
        },
        _default: function(a) {
          return B(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result);
        }
      }
    }
  }),
    (r.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c);
    }),
    (r.Event = function(a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? va
                  : wa),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b);
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: wa,
      isPropagationStopped: wa,
      isImmediatePropagationStopped: wa,
      isSimulated: !1,
      preventDefault: function() {
        var a = this.originalEvent;
        (this.isDefaultPrevented = va),
          a && !this.isSimulated && a.preventDefault();
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        (this.isPropagationStopped = va),
          a && !this.isSimulated && a.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        (this.isImmediatePropagationStopped = va),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
          var b = a.button;
          return null == a.which && sa.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && ta.test(a.type)
              ? 1 & b
                ? 1
                : 2 & b
                  ? 3
                  : 4 & b
                    ? 2
                    : 0
              : a.which;
        }
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function(a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          }
        };
      }
    ),
    r.fn.extend({
      on: function(a, b, c, d) {
        return ya(this, a, b, c, d);
      },
      one: function(a, b, c, d) {
        return ya(this, a, b, c, d, 1);
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b !== !1 && "function" != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = wa),
          this.each(function() {
            r.event.remove(this, a, c, b);
          })
        );
      }
    });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Aa = /<script|<style|<link/i,
    Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ca = /^true\/(.*)/,
    Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? r(">tbody", a)[0] || a
      : a;
  }
  function Fa(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        W.hasData(a) &&
        ((f = W.access(a)), (g = W.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c]);
      }
      X.hasData(a) && ((h = X.access(a)), (i = r.extend({}, h)), X.set(b, i));
    }
  }
  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type)
      ? (b.checked = a.checked)
      : ("input" !== c && "textarea" !== c) ||
        (b.defaultValue = a.defaultValue);
  }
  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q);
    if (s || (m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)))
      return a.each(function(e) {
        var f = a.eq(e);
        s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
      });
    if (
      m &&
      ((e = qa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, na(j, "script"))),
          c.call(a[l], j, l);
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++)
          (j = h[l]),
            la.test(j.type || "") &&
              !W.access(j, "globalEval") &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Da, ""), k));
    }
    return a;
  }
  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(na(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")),
          d.parentNode.removeChild(d));
    return a;
  }
  r.extend({
    htmlPrefilter: function(a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function(a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a);
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++)
          Ia(f[d], g[d]);
      if (b)
        if (c)
          for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++)
            Ha(f[d], g[d]);
        else Ha(a, h);
      return (
        (g = na(h, "script")), g.length > 0 && oa(g, !i && na(a, "script")), h
      );
    },
    cleanData: function(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (U(c)) {
          if ((b = c[W.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            c[W.expando] = void 0;
          }
          c[X.expando] && (c[X.expando] = void 0);
        }
    }
  }),
    r.fn.extend({
      detach: function(a) {
        return Ka(this, a, !0);
      },
      remove: function(a) {
        return Ka(this, a);
      },
      text: function(a) {
        return T(
          this,
          function(a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function() {
        return Ja(this, arguments, function(a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function() {
        return Ja(this, arguments, function(a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Ea(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function() {
        return Ja(this, arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function() {
        return Ja(this, arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(na(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function(a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function() {
            return r.clone(this, a, b);
          })
        );
      },
      html: function(a) {
        return T(
          this,
          function(a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Aa.test(a) &&
              !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a);
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(na(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function() {
        var a = [];
        return Ja(
          this,
          arguments,
          function(b) {
            var c = this.parentNode;
            r.inArray(this, a) < 0 &&
              (r.cleanData(na(this)), c && c.replaceChild(b, this));
          },
          a
        );
      }
    }),
    r.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(a, b) {
        r.fn[a] = function(a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var La = /^margin/,
    Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
    Na = function(b) {
      var c = b.ownerDocument.defaultView;
      return (c && c.opener) || (c = a), c.getComputedStyle(b);
    };
  !(function() {
    function b() {
      if (i) {
        (i.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (i.innerHTML = ""),
          ra.appendChild(h);
        var b = a.getComputedStyle(i);
        (c = "1%" !== b.top),
          (g = "2px" === b.marginLeft),
          (e = "4px" === b.width),
          (i.style.marginRight = "50%"),
          (f = "4px" === b.marginRight),
          ra.removeChild(h),
          (i = null);
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement("div"),
      i = d.createElement("div");
    i.style &&
      ((i.style.backgroundClip = "content-box"),
      (i.cloneNode(!0).style.backgroundClip = ""),
      (o.clearCloneStyle = "content-box" === i.style.backgroundClip),
      (h.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function() {
          return b(), c;
        },
        boxSizingReliable: function() {
          return b(), e;
        },
        pixelMarginRight: function() {
          return b(), f;
        },
        reliableMarginLeft: function() {
          return b(), g;
        }
      }));
  })();
  function Oa(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Na(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          Ma.test(g) &&
          La.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function Pa(a, b) {
    return {
      get: function() {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      }
    };
  }
  var Qa = /^(none|table(?!-c[ea]).+)/,
    Ra = /^--/,
    Sa = { position: "absolute", visibility: "hidden", display: "block" },
    Ta = { letterSpacing: "0", fontWeight: "400" },
    Ua = ["Webkit", "Moz", "ms"],
    Va = d.createElement("div").style;
  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
      c = Ua.length;
    while (c--) if (((a = Ua[c] + b), a in Va)) return a;
  }
  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }
  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }
  function Za(a, b, c, d, e) {
    var f,
      g = 0;
    for (
      f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
      f < 4;
      f += 2
    )
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)),
        d
          ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)),
            "margin" !== c &&
              (g -= r.css(a, "border" + ca[f] + "Width", !0, e)))
          : ((g += r.css(a, "padding" + ca[f], !0, e)),
            "padding" !== c &&
              (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    return g;
  }
  function $a(a, b, c) {
    var d,
      e = Na(a),
      f = Oa(a, b, e),
      g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f)
      ? f
      : ((d = g && (o.boxSizingReliable() || f === a.style[b])),
        "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]),
        (f = parseFloat(f) || 0),
        f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b),
          j = a.style;
        return (
          i || (b = Xa(h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : j[b]
            : ((f = typeof c),
              "string" === f &&
                (e = ba.exec(c)) &&
                e[1] &&
                ((c = fa(a, b, e)), (f = "number")),
              null != c &&
                c === c &&
                ("number" === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? "" : "px")),
                o.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (j[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  (i ? j.setProperty(b, c) : (j[b] = c))),
              void 0)
        );
      }
    },
    css: function(a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b),
        i = Ra.test(b);
      return (
        i || (b = Xa(h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Oa(a, b, d)),
        "normal" === e && b in Ta && (e = Ta[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      );
    }
  }),
    r.each(["height", "width"], function(a, b) {
      r.cssHooks[b] = {
        get: function(a, c, d) {
          if (c)
            return !Qa.test(r.css(a, "display")) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? $a(a, b, d)
              : ea(a, Sa, function() {
                  return $a(a, b, d);
                });
        },
        set: function(a, c, d) {
          var e,
            f = d && Na(a),
            g =
              d &&
              Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
          return (
            g &&
              (e = ba.exec(c)) &&
              "px" !== (e[3] || "px") &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Ya(a, c, g)
          );
        }
      };
    }),
    (r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function(a, b) {
      if (b)
        return (
          (parseFloat(Oa(a, "marginLeft")) ||
            a.getBoundingClientRect().left -
              ea(a, { marginLeft: 0 }, function() {
                return a.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    r.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
      (r.cssHooks[a + b] = {
        expand: function(c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            d < 4;
            d++
          )
            e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        }
      }),
        La.test(a) || (r.cssHooks[a + b].set = Ya);
    }),
    r.fn.extend({
      css: function(a, b) {
        return T(
          this,
          function(a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (Array.isArray(b)) {
              for (d = Na(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      }
    });
  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }
  (r.Tween = _a),
    (_a.prototype = {
      constructor: _a,
      init: function(a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? "" : "px"));
      },
      cur: function() {
        var a = _a.propHooks[this.prop];
        return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
      },
      run: function(a) {
        var b,
          c = _a.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b = r.easing[this.easing](
                a,
                this.options.duration * a,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : _a.propHooks._default.set(this),
          this
        );
      }
    }),
    (_a.prototype.init.prototype = _a.prototype),
    (_a.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0);
        },
        set: function(a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
              ? (a.elem[a.prop] = a.now)
              : r.style(a.elem, a.prop, a.now + a.unit);
        }
      }
    }),
    (_a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
      }
    }),
    (r.easing = {
      linear: function(a) {
        return a;
      },
      swing: function(a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (r.fx = _a.prototype.init),
    (r.fx.step = {});
  var ab,
    bb,
    cb = /^(?:toggle|show|hide)$/,
    db = /queueHooks$/;
  function eb() {
    bb &&
      (d.hidden === !1 && a.requestAnimationFrame
        ? a.requestAnimationFrame(eb)
        : a.setTimeout(eb, r.fx.interval),
      r.fx.tick());
  }
  function fb() {
    return (
      a.setTimeout(function() {
        ab = void 0;
      }),
      (ab = r.now())
    );
  }
  function gb(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ca[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function hb(a, b, c) {
    for (
      var d,
        e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function ib(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = "width" in b || "height" in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && da(a),
      q = W.get(a, "fxshow");
    c.queue ||
      ((g = r._queueHooks(a, "fx")),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function() {
          g.unqueued || h();
        })),
      g.unqueued++,
      m.always(function() {
        m.always(function() {
          g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
        });
      }));
    for (d in b)
      if (((e = b[d]), cb.test(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (p ? "hide" : "show"))
        ) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }
        n[d] = (q && q[d]) || r.style(a, d);
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = W.get(a, "display")),
        (k = r.css(a, "display")),
        "none" === k &&
          (j
            ? (k = j)
            : (ia([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, "display")),
              ia([a]))),
        ("inline" === k || ("inline-block" === k && null != j)) &&
          "none" === r.css(a, "float") &&
          (i ||
            (m.done(function() {
              o.display = j;
            }),
            null == j && ((k = o.display), (j = "none" === k ? "" : k))),
          (o.display = "inline-block"))),
        c.overflow &&
          ((o.overflow = "hidden"),
          m.always(function() {
            (o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2]);
          })),
        (i = !1);
      for (d in n)
        i ||
          (q
            ? "hidden" in q && (p = q.hidden)
            : (q = W.access(a, "fxshow", { display: j })),
          f && (q.hidden = !p),
          p && ia([a], !0),
          m.done(function() {
            p || ia([a]), W.remove(a, "fxshow");
            for (d in n) r.style(a, d, n[d]);
          })),
          (i = hb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)));
    }
  }
  function jb(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        Array.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function kb(a, b, c) {
    var d,
      e,
      f = 0,
      g = kb.prefilters.length,
      h = r.Deferred().always(function() {
        delete i.elem;
      }),
      i = function() {
        if (e) return !1;
        for (
          var b = ab || fb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i
            ? c
            : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: ab || fb(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; c < d; c++) j.tweens[c].run(1);
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          );
        }
      }),
      k = j.props;
    for (jb(k, j.opts.specialEasing); f < g; f++)
      if ((d = kb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        );
    return (
      r.map(k, hb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
    );
  }
  (r.Animation = r.extend(kb, {
    tweeners: {
      "*": [
        function(a, b) {
          var c = this.createTween(a, b);
          return fa(c.elem, a, ba.exec(b), c), c;
        }
      ]
    },
    tweener: function(a, b) {
      r.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.match(L));
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (kb.tweeners[c] = kb.tweeners[c] || []),
          kb.tweeners[c].unshift(b);
    },
    prefilters: [ib],
    prefilter: function(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    }
  })),
    (r.speed = function(a, b, c) {
      var d =
        a && "object" == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b)
            };
      return (
        r.fx.off
          ? (d.duration = 0)
          : "number" != typeof d.duration &&
            (d.duration in r.fx.speeds
              ? (d.duration = r.fx.speeds[d.duration])
              : (d.duration = r.fx.speeds._default)),
        (null != d.queue && d.queue !== !0) || (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function() {
          r.isFunction(d.old) && d.old.call(this),
            d.queue && r.dequeue(this, d.queue);
        }),
        d
      );
    }),
    r.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(da)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function(a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function() {
            var b = kb(this, r.extend({}, a), f);
            (e || W.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function() {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = r.timers,
              g = W.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && db.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (!b && c) || r.dequeue(this, a);
          })
        );
      },
      finish: function(a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function() {
            var b,
              c = W.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = r.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      }
    }),
    r.each(["toggle", "show", "hide"], function(a, b) {
      var c = r.fn[b];
      r.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(gb(b, !0), a, d, e);
      };
    }),
    r.each(
      {
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(a, b) {
        r.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (r.timers = []),
    (r.fx.tick = function() {
      var a,
        b = 0,
        c = r.timers;
      for (ab = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || r.fx.stop(), (ab = void 0);
    }),
    (r.fx.timer = function(a) {
      r.timers.push(a), r.fx.start();
    }),
    (r.fx.interval = 13),
    (r.fx.start = function() {
      bb || ((bb = !0), eb());
    }),
    (r.fx.stop = function() {
      bb = null;
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function(b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || "fx"),
        this.queue(c, function(c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function() {
            a.clearTimeout(e);
          };
        })
      );
    }),
    (function() {
      var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
      (a.type = "checkbox"),
        (o.checkOn = "" !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (o.radioValue = "t" === a.value);
    })();
  var lb,
    mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function(a) {
      return this.each(function() {
        r.removeAttr(this, a);
      });
    }
  }),
    r.extend({
      attr: function(a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return "undefined" == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? lb : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && "set" in e && void 0 !== (d = e.set(a, c, b))
                    ? d
                    : (a.setAttribute(b, c + ""), c)
                : e && "get" in e && null !== (d = e.get(a, b))
                  ? d
                  : ((d = r.find.attr(a, b)), null == d ? void 0 : d));
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!o.radioValue && "radio" === b && B(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          }
        }
      },
      removeAttr: function(a, b) {
        var c,
          d = 0,
          e = b && b.match(L);
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c);
      }
    }),
    (lb = {
      set: function(a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
      }
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = mb[b] || r.find.attr;
      mb[b] = function(a, b, d) {
        var e,
          f,
          g = b.toLowerCase();
        return (
          d ||
            ((f = mb[g]),
            (mb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (mb[g] = f)),
          e
        );
      };
    });
  var nb = /^(?:input|select|textarea|button)$/i,
    ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function(a) {
      return this.each(function() {
        delete this[r.propFix[a] || a];
      });
    }
  }),
    r.extend({
      prop: function(a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
                ? d
                : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var b = r.find.attr(a, "tabindex");
            return b
              ? parseInt(b, 10)
              : nb.test(a.nodeName) || (ob.test(a.nodeName) && a.href)
                ? 0
                : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function(a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
      }),
    r.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        r.propFix[this.toLowerCase()] = this;
      }
    );
  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }
  function qb(a) {
    return (a.getAttribute && a.getAttribute("class")) || "";
  }
  r.fn.extend({
    addClass: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function(b) {
          r(this).addClass(a.call(this, b, qb(this)));
        });
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++])) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    removeClass: function(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0;
      if (r.isFunction(a))
        return this.each(function(b) {
          r(this).removeClass(a.call(this, b, qb(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof a && a) {
        b = a.match(L) || [];
        while ((c = this[i++]))
          if (((e = qb(c)), (d = 1 === c.nodeType && " " + pb(e) + " "))) {
            g = 0;
            while ((f = b[g++]))
              while (d.indexOf(" " + f + " ") > -1)
                d = d.replace(" " + f + " ", " ");
            (h = pb(d)), e !== h && c.setAttribute("class", h);
          }
      }
      return this;
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
          ? this.each(function(c) {
              r(this).toggleClass(a.call(this, c, qb(this), b), b);
            })
          : this.each(function() {
              var b, d, e, f;
              if ("string" === c) {
                (d = 0), (e = r(this)), (f = a.match(L) || []);
                while ((b = f[d++]))
                  e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
              } else (void 0 !== a && "boolean" !== c) || ((b = qb(this)), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
            });
    },
    hasClass: function(a) {
      var b,
        c,
        d = 0;
      b = " " + a + " ";
      while ((c = this[d++]))
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1)
          return !0;
      return !1;
    }
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function(a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function(c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                    ? (e += "")
                    : Array.isArray(e) &&
                      (e = r.map(e, function(a) {
                        return null == a ? "" : a + "";
                      })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
          );
      }
    }
  }),
    r.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = r.find.attr(a, "value");
            return null != b ? b : pb(r.text(a));
          }
        },
        select: {
          get: function(a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled || !B(c.parentNode, "optgroup")))
              ) {
                if (((b = r(c).val()), g)) return b;
                h.push(b);
              }
            return h;
          },
          set: function(a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0);
            return c || (a.selectedIndex = -1), f;
          }
        }
      }
    }),
    r.each(["radio", "checkbox"], function() {
      (r.valHooks[this] = {
        set: function(a, b) {
          if (Array.isArray(b))
            return (a.checked = r.inArray(r(a).val(), b) > -1);
        }
      }),
        o.checkOn ||
          (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function(b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, "type") ? b.type : b,
        q = l.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !sb.test(p + r.event.triggered) &&
          (p.indexOf(".") > -1 &&
            ((q = p.split(".")), (p = q.shift()), q.sort()),
          (k = p.indexOf(":") < 0 && "on" + p),
          (b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join(".")),
          (b.rnamespace = b.namespace
            ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h);
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a);
        }
        g = 0;
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle")),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              U(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !U(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        );
      }
    },
    simulate: function(a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });
      r.event.trigger(d, null, b);
    }
  }),
    r.fn.extend({
      trigger: function(a, b) {
        return this.each(function() {
          r.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        if (c) return r.event.trigger(a, b, c, !0);
      }
    }),
    r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(a, b) {
        r.fn[b] = function(a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    r.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      }
    }),
    (o.focusin = "onfocusin" in a),
    o.focusin ||
      r.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) {
          r.event.simulate(b, a.target, r.event.fix(a));
        };
        r.event.special[b] = {
          setup: function() {
            var d = this.ownerDocument || this,
              e = W.access(d, b);
            e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
          },
          teardown: function() {
            var d = this.ownerDocument || this,
              e = W.access(d, b) - 1;
            e
              ? W.access(d, b, e)
              : (d.removeEventListener(a, c, !0), W.remove(d, b));
          }
        };
      });
  var tb = a.location,
    ub = r.now(),
    vb = /\?/;
  r.parseXML = function(b) {
    var c;
    if (!b || "string" != typeof b) return null;
    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }
    return (
      (c && !c.getElementsByTagName("parsererror").length) ||
        r.error("Invalid XML: " + b),
      c
    );
  };
  var wb = /\[\]$/,
    xb = /\r?\n/g,
    yb = /^(?:submit|button|image|reset|file)$/i,
    zb = /^(?:input|select|textarea|keygen)/i;
  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b))
      r.each(b, function(b, e) {
        c || wb.test(a)
          ? d(a, e)
          : Ab(
              a + "[" + ("object" == typeof e && null != e ? b : "") + "]",
              e,
              c,
              d
            );
      });
    else if (c || "object" !== r.type(b)) d(a, b);
    else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
  }
  (r.param = function(a, b) {
    var c,
      d = [],
      e = function(a, b) {
        var c = r.isFunction(b) ? b() : b;
        d[d.length] =
          encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
      };
    if (Array.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function() {
        e(this.name, this.value);
      });
    else for (c in a) Ab(c, a[c], b, e);
    return d.join("&");
  }),
    r.fn.extend({
      serialize: function() {
        return r.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var a = r.prop(this, "elements");
          return a ? r.makeArray(a) : this;
        })
          .filter(function() {
            var a = this.type;
            return (
              this.name &&
              !r(this).is(":disabled") &&
              zb.test(this.nodeName) &&
              !yb.test(a) &&
              (this.checked || !ja.test(a))
            );
          })
          .map(function(a, b) {
            var c = r(this).val();
            return null == c
              ? null
              : Array.isArray(c)
                ? r.map(c, function(a) {
                    return { name: b.name, value: a.replace(xb, "\r\n") };
                  })
                : { name: b.name, value: c.replace(xb, "\r\n") };
          })
          .get();
      }
    });
  var Bb = /%20/g,
    Cb = /#.*$/,
    Db = /([?&])_=[^&]*/,
    Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Gb = /^(?:GET|HEAD)$/,
    Hb = /^\/\//,
    Ib = {},
    Jb = {},
    Kb = "*/".concat("*"),
    Lb = d.createElement("a");
  Lb.href = tb.href;
  function Mb(a) {
    return function(b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c))
        while ((d = f[e++]))
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function Nb(a, b, c, d) {
    var e = {},
      f = a === Jb;
    function g(h) {
      var i;
      return (
        (e[h] = !0),
        r.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1);
        }),
        i
      );
    }
    return g(b.dataTypes[0]) || (!e["*"] && g("*"));
  }
  function Ob(a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && r.extend(!0, a, d), a;
  }
  function Pb(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes;
    while ("*" === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }
  function Qb(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    f = k.shift();
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f
                };
              }
        }
    return { state: "success", data: b };
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function(b, c) {
      "object" == typeof b && ((c = b), (b = void 0)), (c = c || {});
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks("once memory"),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = "canceled",
        y = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (k) {
              if (!h) {
                h = {};
                while ((b = Eb.exec(g))) h[b[1].toLowerCase()] = b[2];
              }
              b = h[a.toLowerCase()];
            }
            return null == b ? null : b;
          },
          getAllResponseHeaders: function() {
            return k ? g : null;
          },
          setRequestHeader: function(a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            );
          },
          overrideMimeType: function(a) {
            return null == k && (o.mimeType = a), this;
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (k) y.always(a[y.status]);
              else for (b in a) u[b] = [u[b], a[b]];
            return this;
          },
          abort: function(a) {
            var b = a || x;
            return e && e.abort(b), A(0, b), this;
          }
        };
      if (
        (s.promise(y),
        (o.url = ((b || o.url || tb.href) + "").replace(
          Hb,
          tb.protocol + "//"
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""]),
        null == o.crossDomain)
      ) {
        j = d.createElement("a");
        try {
          (j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host);
        } catch (z) {
          o.crossDomain = !0;
        }
      }
      if (
        (o.data &&
          o.processData &&
          "string" != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Nb(Ib, o, c, y),
        k)
      )
        return y;
      (l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger("ajaxStart"),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Gb.test(o.type)),
        (f = o.url.replace(Cb, "")),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (o.data = o.data.replace(Bb, "+"))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (vb.test(f) ? "&" : "?") + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Db, "$1")),
              (n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader("If-Modified-Since", r.lastModified[f]),
          r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader("Content-Type", o.contentType),
        y.setRequestHeader(
          "Accept",
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
              ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "")
            : o.accepts["*"]
        );
      for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort();
      if (
        ((x = "abort"),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Nb(Jb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger("ajaxSend", [y, o]), k))
          return y;
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function() {
            y.abort("timeout");
          }, o.timeout));
        try {
          (k = !1), e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");
      function A(b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c;
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ""),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Pb(o, y, d)),
          (v = Qb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader("Last-Modified")),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader("etag")),
                w && (r.etag[f] = w)),
              204 === b || "HEAD" === o.type
                ? (x = "nocontent")
                : 304 === b
                  ? (x = "notmodified")
                  : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = "error"), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ""),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger("ajaxComplete", [y, o]),
            --r.active || r.event.trigger("ajaxStop")));
      }
      return y;
    },
    getJSON: function(a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function(a, b) {
      return r.get(a, void 0, b, "script");
    }
  }),
    r.each(["get", "post"], function(a, b) {
      r[b] = function(a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        );
      };
    }),
    (r._evalUrl = function(a) {
      return r.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    r.fn.extend({
      wrapAll: function(a) {
        var b;
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(a) {
        return r.isFunction(a)
          ? this.each(function(b) {
              r(this).wrapInner(a.call(this, b));
            })
          : this.each(function() {
              var b = r(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function(a) {
        var b = r.isFunction(a);
        return this.each(function(c) {
          r(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function(a) {
        return (
          this.parent(a)
            .not("body")
            .each(function() {
              r(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (r.expr.pseudos.hidden = function(a) {
      return !r.expr.pseudos.visible(a);
    }),
    (r.expr.pseudos.visible = function(a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }),
    (r.ajaxSettings.xhr = function() {
      try {
        return new a.XMLHttpRequest();
      } catch (b) {}
    });
  var Rb = { 0: 200, 1223: 204 },
    Sb = r.ajaxSettings.xhr();
  (o.cors = !!Sb && "withCredentials" in Sb),
    (o.ajax = Sb = !!Sb),
    r.ajaxTransport(function(b) {
      var c, d;
      if (o.cors || (Sb && !b.crossDomain))
        return {
          send: function(e, f) {
            var g,
              h = b.xhr();
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g];
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
            for (g in e) h.setRequestHeader(g, e[g]);
            (c = function(a) {
              return function() {
                c &&
                  ((c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null),
                  "abort" === a
                    ? h.abort()
                    : "error" === a
                      ? "number" != typeof h.status
                        ? f(0, "error")
                        : f(h.status, h.statusText)
                      : f(
                          Rb[h.status] || h.status,
                          h.statusText,
                          "text" !== (h.responseType || "text") ||
                          "string" != typeof h.responseText
                            ? { binary: h.response }
                            : { text: h.responseText },
                          h.getAllResponseHeaders()
                        ));
              };
            }),
              (h.onload = c()),
              (d = h.onerror = c("error")),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function() {
                    4 === h.readyState &&
                      a.setTimeout(function() {
                        c && d();
                      });
                  }),
              (c = c("abort"));
            try {
              h.send((b.hasContent && b.data) || null);
            } catch (i) {
              if (c) throw i;
            }
          },
          abort: function() {
            c && c();
          }
        };
    }),
    r.ajaxPrefilter(function(a) {
      a.crossDomain && (a.contents.script = !1);
    }),
    r.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(a) {
          return r.globalEval(a), a;
        }
      }
    }),
    r.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    r.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function(e, f) {
            (b = r("<script>")
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function(a) {
                  b.remove(),
                    (c = null),
                    a && f("error" === a.type ? 404 : 200, a.type);
                })
              )),
              d.head.appendChild(b[0]);
          },
          abort: function() {
            c && c();
          }
        };
      }
    });
  var Tb = [],
    Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return (this[a] = !0), a;
    }
  }),
    r.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ub.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              0 ===
                (b.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ub.test(b.data) &&
              "data");
      if (h || "jsonp" === b.dataTypes[0])
        return (
          (e = b.jsonpCallback = r.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ub, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function() {
            g = arguments;
          }),
          d.always(function() {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Tb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script"
        );
    }),
    (o.createHTMLDocument = (function() {
      var a = d.implementation.createHTMLDocument("").body;
      return (
        (a.innerHTML = "<form></form><form></form>"), 2 === a.childNodes.length
      );
    })()),
    (r.parseHTML = function(a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && ((c = b), (b = !1));
      var e, f, g;
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument("")),
              (e = b.createElement("base")),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = C.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = qa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      );
    }),
    (r.fn.load = function(a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
      return (
        h > -1 && ((d = pb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && "object" == typeof b && (e = "POST"),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || "GET", dataType: "html", data: b })
            .done(function(a) {
              (f = arguments),
                g.html(
                  d
                    ? r("<div>")
                        .append(r.parseHTML(a))
                        .find(d)
                    : a
                );
            })
            .always(
              c &&
                function(a, b) {
                  g.each(function() {
                    c.apply(this, f || [a.responseText, b, a]);
                  });
                }
            ),
        this
      );
    }),
    r.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(a, b) {
        r.fn[b] = function(a) {
          return this.on(b, a);
        };
      }
    ),
    (r.expr.pseudos.animated = function(a) {
      return r.grep(r.timers, function(b) {
        return a === b.elem;
      }).length;
    }),
    (r.offset = {
      setOffset: function(a, b, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
        "static" === k && (a.style.position = "relative"),
          (h = l.offset()),
          (f = r.css(a, "top")),
          (i = r.css(a, "left")),
          (j =
            ("absolute" === k || "fixed" === k) &&
            (f + i).indexOf("auto") > -1),
          j
            ? ((d = l.position()), (g = d.top), (e = d.left))
            : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
          r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
          null != b.top && (m.top = b.top - h.top + g),
          null != b.left && (m.left = b.left - h.left + e),
          "using" in b ? b.using.call(a, m) : l.css(m);
      }
    }),
    r.fn.extend({
      offset: function(a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function(b) {
                r.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d,
          e,
          f = this[0];
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              (b = f.ownerDocument),
              (c = b.documentElement),
              (e = b.defaultView),
              {
                top: d.top + e.pageYOffset - c.clientTop,
                left: d.left + e.pageXOffset - c.clientLeft
              })
            : { top: 0, left: 0 };
      },
      position: function() {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === r.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                B(a[0], "html") || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], "borderTopWidth", !0),
                  left: d.left + r.css(a[0], "borderLeftWidth", !0)
                })),
            {
              top: b.top - d.top - r.css(c, "marginTop", !0),
              left: b.left - d.left - r.css(c, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent;
          while (a && "static" === r.css(a, "position")) a = a.offsetParent;
          return a || ra;
        });
      }
    }),
    r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      a,
      b
    ) {
      var c = "pageYOffset" === b;
      r.fn[a] = function(d) {
        return T(
          this,
          function(a, d, e) {
            var f;
            return (
              r.isWindow(a) ? (f = a) : 9 === a.nodeType && (f = a.defaultView),
              void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e))
            );
          },
          a,
          d,
          arguments.length
        );
      };
    }),
    r.each(["top", "left"], function(a, b) {
      r.cssHooks[b] = Pa(o.pixelPosition, function(a, c) {
        if (c)
          return (c = Oa(a, b)), Ma.test(c) ? r(a).position()[b] + "px" : c;
      });
    }),
    r.each({ Height: "height", Width: "width" }, function(a, b) {
      r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(
        c,
        d
      ) {
        r.fn[d] = function(e, f) {
          var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");
          return T(
            this,
            function(b, c, e) {
              var f;
              return r.isWindow(b)
                ? 0 === d.indexOf("outer")
                  ? b["inner" + a]
                  : b.document.documentElement["client" + a]
                : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      f["scroll" + a],
                      b.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : void 0 === e
                    ? r.css(b, c, h)
                    : r.style(b, c, e, h);
            },
            b,
            g ? e : void 0,
            g
          );
        };
      });
    }),
    r.fn.extend({
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      }
    }),
    (r.holdReady = function(a) {
      a ? r.readyWait++ : r.ready(!0);
    }),
    (r.isArray = Array.isArray),
    (r.parseJSON = JSON.parse),
    (r.nodeName = B),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return r;
      });
  var Vb = a.jQuery,
    Wb = a.$;
  return (
    (r.noConflict = function(b) {
      return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
    }),
    b || (a.jQuery = a.$ = r),
    r
  );
});

/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 JÃ¶rn Zaefferer; Licensed MIT */
!(function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function(a) {
  a.extend(a.fn, {
    validate: function(b) {
      if (!this.length)
        return void (
          b &&
          b.debug &&
          window.console &&
          console.warn("Nothing selected, can't validate, returning nothing.")
        );
      var c = a.data(this[0], "validator");
      return c
        ? c
        : (this.attr("novalidate", "novalidate"),
          (c = new a.validator(b, this[0])),
          a.data(this[0], "validator", c),
          c.settings.onsubmit &&
            (this.validateDelegate(":submit", "click", function(b) {
              c.settings.submitHandler && (c.submitButton = b.target),
                a(b.target).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(b.target).attr("formnovalidate") &&
                  (c.cancelSubmit = !0);
            }),
            this.submit(function(b) {
              function d() {
                var d, e;
                return c.settings.submitHandler
                  ? (c.submitButton &&
                      (d = a("<input type='hidden'/>")
                        .attr("name", c.submitButton.name)
                        .val(a(c.submitButton).val())
                        .appendTo(c.currentForm)),
                    (e = c.settings.submitHandler.call(c, c.currentForm, b)),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1)
                  : !0;
              }
              return (
                c.settings.debug && b.preventDefault(),
                c.cancelSubmit
                  ? ((c.cancelSubmit = !1), d())
                  : c.form()
                    ? c.pendingRequest
                      ? ((c.formSubmitted = !0), !1)
                      : d()
                    : (c.focusInvalid(), !1)
              );
            })),
          c);
    },
    valid: function() {
      var b, c;
      return (
        a(this[0]).is("form")
          ? (b = this.validate().form())
          : ((b = !0),
            (c = a(this[0].form).validate()),
            this.each(function() {
              b = c.element(this) && b;
            })),
        b
      );
    },
    removeAttrs: function(b) {
      var c = {},
        d = this;
      return (
        a.each(b.split(/\s/), function(a, b) {
          (c[b] = d.attr(b)), d.removeAttr(b);
        }),
        c
      );
    },
    rules: function(b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j = this[0];
      if (b)
        switch (
          ((d = a.data(j.form, "validator").settings),
          (e = d.rules),
          (f = a.validator.staticRules(j)),
          b)
        ) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)),
              delete f.messages,
              (e[j.name] = f),
              c.messages &&
                (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c
              ? ((i = {}),
                a.each(c.split(/\s/), function(b, c) {
                  (i[c] = f[c]),
                    delete f[c],
                    "required" === c && a(j).removeAttr("aria-required");
                }),
                i)
              : (delete e[j.name], f);
        }
      return (
        (g = a.validator.normalizeRules(
          a.extend(
            {},
            a.validator.classRules(j),
            a.validator.attributeRules(j),
            a.validator.dataRules(j),
            a.validator.staticRules(j)
          ),
          j
        )),
        g.required &&
          ((h = g.required),
          delete g.required,
          (g = a.extend({ required: h }, g)),
          a(j).attr("aria-required", "true")),
        g.remote &&
          ((h = g.remote), delete g.remote, (g = a.extend(g, { remote: h }))),
        g
      );
    }
  }),
    a.extend(a.expr[":"], {
      blank: function(b) {
        return !a.trim("" + a(b).val());
      },
      filled: function(b) {
        return !!a.trim("" + a(b).val());
      },
      unchecked: function(b) {
        return !a(b).prop("checked");
      }
    }),
    (a.validator = function(b, c) {
      (this.settings = a.extend(!0, {}, a.validator.defaults, b)),
        (this.currentForm = c),
        this.init();
    }),
    (a.validator.format = function(b, c) {
      return 1 === arguments.length
        ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c);
          }
        : (arguments.length > 2 &&
            c.constructor !== Array &&
            (c = a.makeArray(arguments).slice(1)),
          c.constructor !== Array && (c = [c]),
          a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() {
              return c;
            });
          }),
          b);
    }),
    a.extend(a.validator, {
      defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: a([]),
        errorLabelContainer: a([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(a) {
          (this.lastActive = a),
            this.settings.focusCleanup &&
              (this.settings.unhighlight &&
                this.settings.unhighlight.call(
                  this,
                  a,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.hideThese(this.errorsFor(a)));
        },
        onfocusout: function(a) {
          this.checkable(a) ||
            (!(a.name in this.submitted) && this.optional(a)) ||
            this.element(a);
        },
        onkeyup: function(a, b) {
          (9 !== b.which || "" !== this.elementValue(a)) &&
            (a.name in this.submitted || a === this.lastElement) &&
            this.element(a);
        },
        onclick: function(a) {
          a.name in this.submitted
            ? this.element(a)
            : a.parentNode.name in this.submitted && this.element(a.parentNode);
        },
        highlight: function(b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name)
                .addClass(c)
                .removeClass(d)
            : a(b)
                .addClass(c)
                .removeClass(d);
        },
        unhighlight: function(b, c, d) {
          "radio" === b.type
            ? this.findByName(b.name)
                .removeClass(c)
                .addClass(d)
            : a(b)
                .removeClass(c)
                .addClass(d);
        }
      },
      setDefaults: function(b) {
        a.extend(a.validator.defaults, b);
      },
      messages: {
        required: "preencha este campo",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date ( ISO ).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: a.validator.format(
          "Please enter no more than {0} characters."
        ),
        minlength: a.validator.format("Please enter at least {0} characters."),
        rangelength: a.validator.format(
          "Please enter a value between {0} and {1} characters long."
        ),
        range: a.validator.format("Please enter a value between {0} and {1}."),
        max: a.validator.format(
          "Please enter a value less than or equal to {0}."
        ),
        min: a.validator.format(
          "Please enter a value greater than or equal to {0}."
        )
      },
      autoCreateRanges: !1,
      prototype: {
        init: function() {
          function b(b) {
            var c = a.data(this[0].form, "validator"),
              d = "on" + b.type.replace(/^validate/, ""),
              e = c.settings;
            e[d] && !this.is(e.ignore) && e[d].call(c, this[0], b);
          }
          (this.labelContainer = a(this.settings.errorLabelContainer)),
            (this.errorContext =
              (this.labelContainer.length && this.labelContainer) ||
              a(this.currentForm)),
            (this.containers = a(this.settings.errorContainer).add(
              this.settings.errorLabelContainer
            )),
            (this.submitted = {}),
            (this.valueCache = {}),
            (this.pendingRequest = 0),
            (this.pending = {}),
            (this.invalid = {}),
            this.reset();
          var c,
            d = (this.groups = {});
          a.each(this.settings.groups, function(b, c) {
            "string" == typeof c && (c = c.split(/\s/)),
              a.each(c, function(a, c) {
                d[c] = b;
              });
          }),
            (c = this.settings.rules),
            a.each(c, function(b, d) {
              c[b] = a.validator.normalizeRule(d);
            }),
            a(this.currentForm)
              .validateDelegate(
                ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                "focusin focusout keyup",
                b
              )
              .validateDelegate(
                "select, option, [type='radio'], [type='checkbox']",
                "click",
                b
              ),
            this.settings.invalidHandler &&
              a(this.currentForm).bind(
                "invalid-form.validate",
                this.settings.invalidHandler
              ),
            a(this.currentForm)
              .find("[required], [data-rule-required], .required")
              .attr("aria-required", "true");
        },
        form: function() {
          return (
            this.checkForm(),
            a.extend(this.submitted, this.errorMap),
            (this.invalid = a.extend({}, this.errorMap)),
            this.valid() ||
              a(this.currentForm).triggerHandler("invalid-form", [this]),
            this.showErrors(),
            this.valid()
          );
        },
        checkForm: function() {
          this.prepareForm();
          for (
            var a = 0, b = (this.currentElements = this.elements());
            b[a];
            a++
          )
            this.check(b[a]);
          return this.valid();
        },
        element: function(b) {
          var c = this.clean(b),
            d = this.validationTargetFor(c),
            e = !0;
          return (
            (this.lastElement = d),
            void 0 === d
              ? delete this.invalid[c.name]
              : (this.prepareElement(d),
                (this.currentElements = a(d)),
                (e = this.check(d) !== !1),
                e ? delete this.invalid[d.name] : (this.invalid[d.name] = !0)),
            a(b).attr("aria-invalid", !e),
            this.numberOfInvalids() ||
              (this.toHide = this.toHide.add(this.containers)),
            this.showErrors(),
            e
          );
        },
        showErrors: function(b) {
          if (b) {
            a.extend(this.errorMap, b), (this.errorList = []);
            for (var c in b)
              this.errorList.push({
                message: b[c],
                element: this.findByName(c)[0]
              });
            this.successList = a.grep(this.successList, function(a) {
              return !(a.name in b);
            });
          }
          this.settings.showErrors
            ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
            : this.defaultShowErrors();
        },
        resetForm: function() {
          a.fn.resetForm && a(this.currentForm).resetForm(),
            (this.submitted = {}),
            (this.lastElement = null),
            this.prepareForm(),
            this.hideErrors(),
            this.elements()
              .removeClass(this.settings.errorClass)
              .removeData("previousValue")
              .removeAttr("aria-invalid");
        },
        numberOfInvalids: function() {
          return this.objectLength(this.invalid);
        },
        objectLength: function(a) {
          var b,
            c = 0;
          for (b in a) c++;
          return c;
        },
        hideErrors: function() {
          this.hideThese(this.toHide);
        },
        hideThese: function(a) {
          a.not(this.containers).text(""), this.addWrapper(a).hide();
        },
        valid: function() {
          return 0 === this.size();
        },
        size: function() {
          return this.errorList.length;
        },
        focusInvalid: function() {
          if (this.settings.focusInvalid)
            try {
              a(
                this.findLastActive() ||
                  (this.errorList.length && this.errorList[0].element) ||
                  []
              )
                .filter(":visible")
                .focus()
                .trigger("focusin");
            } catch (b) {}
        },
        findLastActive: function() {
          var b = this.lastActive;
          return (
            b &&
            1 ===
              a.grep(this.errorList, function(a) {
                return a.element.name === b.name;
              }).length &&
            b
          );
        },
        elements: function() {
          var b = this,
            c = {};
          return a(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, [disabled], [readonly]")
            .not(this.settings.ignore)
            .filter(function() {
              return (
                !this.name &&
                  b.settings.debug &&
                  window.console &&
                  console.error("%o has no name assigned", this),
                this.name in c || !b.objectLength(a(this).rules())
                  ? !1
                  : ((c[this.name] = !0), !0)
              );
            });
        },
        clean: function(b) {
          return a(b)[0];
        },
        errors: function() {
          var b = this.settings.errorClass.split(" ").join(".");
          return a(this.settings.errorElement + "." + b, this.errorContext);
        },
        reset: function() {
          (this.successList = []),
            (this.errorList = []),
            (this.errorMap = {}),
            (this.toShow = a([])),
            (this.toHide = a([])),
            (this.currentElements = a([]));
        },
        prepareForm: function() {
          this.reset(), (this.toHide = this.errors().add(this.containers));
        },
        prepareElement: function(a) {
          this.reset(), (this.toHide = this.errorsFor(a));
        },
        elementValue: function(b) {
          var c,
            d = a(b),
            e = b.type;
          return "radio" === e || "checkbox" === e
            ? a("input[name='" + b.name + "']:checked").val()
            : "number" === e && "undefined" != typeof b.validity
              ? b.validity.badInput
                ? !1
                : d.val()
              : ((c = d.val()),
                "string" == typeof c ? c.replace(/\r/g, "") : c);
        },
        check: function(b) {
          b = this.validationTargetFor(this.clean(b));
          var c,
            d,
            e,
            f = a(b).rules(),
            g = a.map(f, function(a, b) {
              return b;
            }).length,
            h = !1,
            i = this.elementValue(b);
          for (d in f) {
            e = { method: d, parameters: f[d] };
            try {
              if (
                ((c = a.validator.methods[d].call(this, i, b, e.parameters)),
                "dependency-mismatch" === c && 1 === g)
              ) {
                h = !0;
                continue;
              }
              if (((h = !1), "pending" === c))
                return void (this.toHide = this.toHide.not(this.errorsFor(b)));
              if (!c) return this.formatAndAdd(b, e), !1;
            } catch (j) {
              throw (this.settings.debug &&
                window.console &&
                console.log(
                  "Exception occurred when checking element " +
                    b.id +
                    ", check the '" +
                    e.method +
                    "' method.",
                  j
                ),
              j);
            }
          }
          if (!h) return this.objectLength(f) && this.successList.push(b), !0;
        },
        customDataMessage: function(b, c) {
          return (
            a(b).data(
              "msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
            ) || a(b).data("msg")
          );
        },
        customMessage: function(a, b) {
          var c = this.settings.messages[a];
          return c && (c.constructor === String ? c : c[b]);
        },
        findDefined: function() {
          for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a]) return arguments[a];
          return void 0;
        },
        defaultMessage: function(b, c) {
          return this.findDefined(
            this.customMessage(b.name, c),
            this.customDataMessage(b, c),
            (!this.settings.ignoreTitle && b.title) || void 0,
            a.validator.messages[c],
            "<strong>Warning: No message defined for " + b.name + "</strong>"
          );
        },
        formatAndAdd: function(b, c) {
          var d = this.defaultMessage(b, c.method),
            e = /\$?\{(\d+)\}/g;
          "function" == typeof d
            ? (d = d.call(this, c.parameters, b))
            : e.test(d) &&
              (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
            this.errorList.push({ message: d, element: b, method: c.method }),
            (this.errorMap[b.name] = d),
            (this.submitted[b.name] = d);
        },
        addWrapper: function(a) {
          return (
            this.settings.wrapper &&
              (a = a.add(a.parent(this.settings.wrapper))),
            a
          );
        },
        defaultShowErrors: function() {
          var a, b, c;
          for (a = 0; this.errorList[a]; a++)
            (c = this.errorList[a]),
              this.settings.highlight &&
                this.settings.highlight.call(
                  this,
                  c.element,
                  this.settings.errorClass,
                  this.settings.validClass
                ),
              this.showLabel(c.element, c.message);
          if (
            (this.errorList.length &&
              (this.toShow = this.toShow.add(this.containers)),
            this.settings.success)
          )
            for (a = 0; this.successList[a]; a++)
              this.showLabel(this.successList[a]);
          if (this.settings.unhighlight)
            for (a = 0, b = this.validElements(); b[a]; a++)
              this.settings.unhighlight.call(
                this,
                b[a],
                this.settings.errorClass,
                this.settings.validClass
              );
          (this.toHide = this.toHide.not(this.toShow)),
            this.hideErrors(),
            this.addWrapper(this.toShow).show();
        },
        validElements: function() {
          return this.currentElements.not(this.invalidElements());
        },
        invalidElements: function() {
          return a(this.errorList).map(function() {
            return this.element;
          });
        },
        showLabel: function(b, c) {
          var d,
            e,
            f,
            g = this.errorsFor(b),
            h = this.idOrName(b),
            i = a(b).attr("aria-describedby");
          g.length
            ? (g
                .removeClass(this.settings.validClass)
                .addClass(this.settings.errorClass),
              g.html(c))
            : ((g = a("<" + this.settings.errorElement + ">")
                .attr("id", h + "-error")
                .addClass(this.settings.errorClass)
                .html(c || "")),
              (d = g),
              this.settings.wrapper &&
                (d = g
                  .hide()
                  .show()
                  .wrap("<" + this.settings.wrapper + "/>")
                  .parent()),
              this.labelContainer.length
                ? this.labelContainer.append(d)
                : this.settings.errorPlacement
                  ? this.settings.errorPlacement(d, a(b))
                  : d.insertAfter(b),
              g.is("label")
                ? g.attr("for", h)
                : 0 === g.parents("label[for='" + h + "']").length &&
                  ((f = g.attr("id").replace(/(:|\.|\[|\])/g, "\\$1")),
                  i
                    ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f)
                    : (i = f),
                  a(b).attr("aria-describedby", i),
                  (e = this.groups[b.name]),
                  e &&
                    a.each(this.groups, function(b, c) {
                      c === e &&
                        a("[name='" + b + "']", this.currentForm).attr(
                          "aria-describedby",
                          g.attr("id")
                        );
                    }))),
            !c &&
              this.settings.success &&
              (g.text(""),
              "string" == typeof this.settings.success
                ? g.addClass(this.settings.success)
                : this.settings.success(g, b)),
            (this.toShow = this.toShow.add(g));
        },
        errorsFor: function(b) {
          var c = this.idOrName(b),
            d = a(b).attr("aria-describedby"),
            e = "label[for='" + c + "'], label[for='" + c + "'] *";
          return (
            d && (e = e + ", #" + d.replace(/\s+/g, ", #")),
            this.errors().filter(e)
          );
        },
        idOrName: function(a) {
          return (
            this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
          );
        },
        validationTargetFor: function(b) {
          return (
            this.checkable(b) && (b = this.findByName(b.name)),
            a(b).not(this.settings.ignore)[0]
          );
        },
        checkable: function(a) {
          return /radio|checkbox/i.test(a.type);
        },
        findByName: function(b) {
          return a(this.currentForm).find("[name='" + b + "']");
        },
        getLength: function(b, c) {
          switch (c.nodeName.toLowerCase()) {
            case "select":
              return a("option:selected", c).length;
            case "input":
              if (this.checkable(c))
                return this.findByName(c.name).filter(":checked").length;
          }
          return b.length;
        },
        depend: function(a, b) {
          return this.dependTypes[typeof a]
            ? this.dependTypes[typeof a](a, b)
            : !0;
        },
        dependTypes: {
          boolean: function(a) {
            return a;
          },
          string: function(b, c) {
            return !!a(b, c.form).length;
          },
          function: function(a, b) {
            return a(b);
          }
        },
        optional: function(b) {
          var c = this.elementValue(b);
          return (
            !a.validator.methods.required.call(this, c, b) &&
            "dependency-mismatch"
          );
        },
        startRequest: function(a) {
          this.pending[a.name] ||
            (this.pendingRequest++, (this.pending[a.name] = !0));
        },
        stopRequest: function(b, c) {
          this.pendingRequest--,
            this.pendingRequest < 0 && (this.pendingRequest = 0),
            delete this.pending[b.name],
            c && 0 === this.pendingRequest && this.formSubmitted && this.form()
              ? (a(this.currentForm).submit(), (this.formSubmitted = !1))
              : !c &&
                0 === this.pendingRequest &&
                this.formSubmitted &&
                (a(this.currentForm).triggerHandler("invalid-form", [this]),
                (this.formSubmitted = !1));
        },
        previousValue: function(b) {
          return (
            a.data(b, "previousValue") ||
            a.data(b, "previousValue", {
              old: null,
              valid: !0,
              message: this.defaultMessage(b, "remote")
            })
          );
        }
      },
      classRuleSettings: {
        required: { required: !0 },
        email: { email: !0 },
        url: { url: !0 },
        date: { date: !0 },
        dateISO: { dateISO: !0 },
        number: { number: !0 },
        digits: { digits: !0 },
        creditcard: { creditcard: !0 }
      },
      addClassRules: function(b, c) {
        b.constructor === String
          ? (this.classRuleSettings[b] = c)
          : a.extend(this.classRuleSettings, b);
      },
      classRules: function(b) {
        var c = {},
          d = a(b).attr("class");
        return (
          d &&
            a.each(d.split(" "), function() {
              this in a.validator.classRuleSettings &&
                a.extend(c, a.validator.classRuleSettings[this]);
            }),
          c
        );
      },
      attributeRules: function(b) {
        var c,
          d,
          e = {},
          f = a(b),
          g = b.getAttribute("type");
        for (c in a.validator.methods)
          "required" === c
            ? ((d = b.getAttribute(c)), "" === d && (d = !0), (d = !!d))
            : (d = f.attr(c)),
            /min|max/.test(c) &&
              (null === g || /number|range|text/.test(g)) &&
              (d = Number(d)),
            d || 0 === d ? (e[c] = d) : g === c && "range" !== g && (e[c] = !0);
        return (
          e.maxlength &&
            /-1|2147483647|524288/.test(e.maxlength) &&
            delete e.maxlength,
          e
        );
      },
      dataRules: function(b) {
        var c,
          d,
          e = {},
          f = a(b);
        for (c in a.validator.methods)
          (d = f.data(
            "rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()
          )),
            void 0 !== d && (e[c] = d);
        return e;
      },
      staticRules: function(b) {
        var c = {},
          d = a.data(b.form, "validator");
        return (
          d.settings.rules &&
            (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
          c
        );
      },
      normalizeRules: function(b, c) {
        return (
          a.each(b, function(d, e) {
            if (e === !1) return void delete b[d];
            if (e.param || e.depends) {
              var f = !0;
              switch (typeof e.depends) {
                case "string":
                  f = !!a(e.depends, c.form).length;
                  break;
                case "function":
                  f = e.depends.call(c, c);
              }
              f ? (b[d] = void 0 !== e.param ? e.param : !0) : delete b[d];
            }
          }),
          a.each(b, function(d, e) {
            b[d] = a.isFunction(e) ? e(c) : e;
          }),
          a.each(["minlength", "maxlength"], function() {
            b[this] && (b[this] = Number(b[this]));
          }),
          a.each(["rangelength", "range"], function() {
            var c;
            b[this] &&
              (a.isArray(b[this])
                ? (b[this] = [Number(b[this][0]), Number(b[this][1])])
                : "string" == typeof b[this] &&
                  ((c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/)),
                  (b[this] = [Number(c[0]), Number(c[1])])));
          }),
          a.validator.autoCreateRanges &&
            (null != b.min &&
              null != b.max &&
              ((b.range = [b.min, b.max]), delete b.min, delete b.max),
            null != b.minlength &&
              null != b.maxlength &&
              ((b.rangelength = [b.minlength, b.maxlength]),
              delete b.minlength,
              delete b.maxlength)),
          b
        );
      },
      normalizeRule: function(b) {
        if ("string" == typeof b) {
          var c = {};
          a.each(b.split(/\s/), function() {
            c[this] = !0;
          }),
            (b = c);
        }
        return b;
      },
      addMethod: function(b, c, d) {
        (a.validator.methods[b] = c),
          (a.validator.messages[b] =
            void 0 !== d ? d : a.validator.messages[b]),
          c.length < 3 &&
            a.validator.addClassRules(b, a.validator.normalizeRule(b));
      },
      methods: {
        required: function(b, c, d) {
          if (!this.depend(d, c)) return "dependency-mismatch";
          if ("select" === c.nodeName.toLowerCase()) {
            var e = a(c).val();
            return e && e.length > 0;
          }
          return this.checkable(c)
            ? this.getLength(b, c) > 0
            : a.trim(b).length > 0;
        },
        email: function(a, b) {
          return (
            this.optional(b) ||
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
              a
            )
          );
        },
        url: function(a, b) {
          return (
            this.optional(b) ||
            /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
              a
            )
          );
        },
        date: function(a, b) {
          return (
            this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
          );
        },
        dateISO: function(a, b) {
          return (
            this.optional(b) ||
            /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
              a
            )
          );
        },
        number: function(a, b) {
          return (
            this.optional(b) ||
            /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
          );
        },
        digits: function(a, b) {
          return this.optional(b) || /^\d+$/.test(a);
        },
        creditcard: function(a, b) {
          if (this.optional(b)) return "dependency-mismatch";
          if (/[^0-9 \-]+/.test(a)) return !1;
          var c,
            d,
            e = 0,
            f = 0,
            g = !1;
          if (((a = a.replace(/\D/g, "")), a.length < 13 || a.length > 19))
            return !1;
          for (c = a.length - 1; c >= 0; c--)
            (d = a.charAt(c)),
              (f = parseInt(d, 10)),
              g && (f *= 2) > 9 && (f -= 9),
              (e += f),
              (g = !g);
          return e % 10 === 0;
        },
        minlength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || e >= d;
        },
        maxlength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || d >= e;
        },
        rangelength: function(b, c, d) {
          var e = a.isArray(b) ? b.length : this.getLength(b, c);
          return this.optional(c) || (e >= d[0] && e <= d[1]);
        },
        min: function(a, b, c) {
          return this.optional(b) || a >= c;
        },
        max: function(a, b, c) {
          return this.optional(b) || c >= a;
        },
        range: function(a, b, c) {
          return this.optional(b) || (a >= c[0] && a <= c[1]);
        },
        equalTo: function(b, c, d) {
          var e = a(d);
          return (
            this.settings.onfocusout &&
              e
                .unbind(".validate-equalTo")
                .bind("blur.validate-equalTo", function() {
                  a(c).valid();
                }),
            b === e.val()
          );
        },
        remote: function(b, c, d) {
          if (this.optional(c)) return "dependency-mismatch";
          var e,
            f,
            g = this.previousValue(c);
          return (
            this.settings.messages[c.name] ||
              (this.settings.messages[c.name] = {}),
            (g.originalMessage = this.settings.messages[c.name].remote),
            (this.settings.messages[c.name].remote = g.message),
            (d = ("string" == typeof d && { url: d }) || d),
            g.old === b
              ? g.valid
              : ((g.old = b),
                (e = this),
                this.startRequest(c),
                (f = {}),
                (f[c.name] = b),
                a.ajax(
                  a.extend(
                    !0,
                    {
                      url: d,
                      mode: "abort",
                      port: "validate" + c.name,
                      dataType: "json",
                      data: f,
                      context: e.currentForm,
                      success: function(d) {
                        var f,
                          h,
                          i,
                          j = d === !0 || "true" === d;
                        (e.settings.messages[c.name].remote =
                          g.originalMessage),
                          j
                            ? ((i = e.formSubmitted),
                              e.prepareElement(c),
                              (e.formSubmitted = i),
                              e.successList.push(c),
                              delete e.invalid[c.name],
                              e.showErrors())
                            : ((f = {}),
                              (h = d || e.defaultMessage(c, "remote")),
                              (f[c.name] = g.message = a.isFunction(h)
                                ? h(b)
                                : h),
                              (e.invalid[c.name] = !0),
                              e.showErrors(f)),
                          (g.valid = j),
                          e.stopRequest(c, j);
                      }
                    },
                    d
                  )
                ),
                "pending")
          );
        }
      }
    }),
    (a.format = function() {
      throw "$.format has been deprecated. Please use $.validator.format instead.";
    });
  var b,
    c = {};
  a.ajaxPrefilter
    ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), (c[e] = d));
      })
    : ((b = a.ajax),
      (a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
          f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e
          ? (c[f] && c[f].abort(), (c[f] = b.apply(this, arguments)), c[f])
          : b.apply(this, arguments);
      })),
    a.extend(a.fn, {
      validateDelegate: function(b, c, d) {
        return this.bind(c, function(c) {
          var e = a(c.target);
          return e.is(b) ? d.apply(e, arguments) : void 0;
        });
      }
    });
});

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function(a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"]
        }
      }),
      a.each(
        ["onResize", "onThrottledResize"],
        a.proxy(function(b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function(a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function(b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }),
    (e.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (e.Type = { Event: "event", State: "state" }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ["width", "settings"],
        run: function() {
          this._width = this.$element.width();
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function(a) {
          a.current = this._items && this._items[this.relative(this._current)];
        }
      },
      {
        filter: ["items", "settings"],
        run: function() {
          this.$stage.children(".cloned").remove();
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function(a) {
          var b = this.settings.margin || "",
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: "auto",
              "margin-left": d ? b : "",
              "margin-right": d ? "" : b
            };
          !c && this.$stage.children().css(e), (a.css = e);
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function(a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        }
      },
      {
        filter: ["items", "settings"],
        run: function() {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = "",
            i = "";
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i);
          (this._clones = b),
            a(h)
              .addClass("cloned")
              .appendTo(this.$stage),
            a(i)
              .addClass("cloned")
              .prependTo(this.$stage);
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function() {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a);
          this._coordinates = f;
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function() {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              "padding-left": a || "",
              "padding-right": a || ""
            };
          this.$stage.css(c);
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function(a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]),
                d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        }
      },
      {
        filter: ["items"],
        run: function() {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        }
      },
      {
        filter: ["width", "items", "settings"],
        run: function(a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current);
        }
      },
      {
        filter: ["position"],
        run: function() {
          this.animate(this.coordinates(this._current));
        }
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function() {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, "<=", g) && this.op(a, ">", h)) ||
                (this.op(b, "<", g) && this.op(b, ">", h))) &&
                i.push(c);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + i.join("), :eq(") + ")")
              .addClass("active"),
            this.settings.center &&
              (this.$stage.children(".center").removeClass("center"),
              this.$stage
                .children()
                .eq(this.current())
                .addClass("center"));
        }
      }
    ]),
    (e.prototype.initialize = function() {
      if (
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading"))
      ) {
        var b, c, e;
        (b = this.$element.find("img")),
          (c = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && e <= 0 && this.preloadAutoWidthImages(b);
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          "<" +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(":visible")
          ? this.refresh()
          : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (e.prototype.setup = function() {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          "function" == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings }
        });
    }),
    (e.prototype.optionsLogic = function() {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function(b) {
      var c = this.trigger("prepare", { content: b });
      return (
        c.data ||
          (c.data = a("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger("prepared", { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function() {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function(a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++;
      (this._invalidated = {}), !this.is("valid") && this.enter("valid");
    }),
    (e.prototype.width = function(a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (e.prototype.refresh = function() {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (e.prototype.onThrottledResize = function() {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (e.prototype.onResize = function() {
      return (
        !!this._items.length &&
        (this._width !== this.$element.width() &&
          (!!this.$element.is(":visible") &&
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))))
      );
    }),
    (e.prototype.registerEventHandlers = function() {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + ".owl.core",
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
          this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1;
          })),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            a.proxy(this.onDragEnd, this)
          ));
    }),
    (e.prototype.onDragStart = function(b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css("transform")
              .replace(/.*\(|\)| /g, "")
              .split(",")),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5]
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top
            })),
        this.is("animating") &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          "mouseup.owl.core touchend.owl.core",
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          "mousemove.owl.core touchmove.owl.core",
          a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on(
              "mousemove.owl.core touchmove.owl.core",
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is("valid")) ||
                (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function(a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is("dragging") &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? "left" : "right";
      a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one("click.owl.core", function() {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (e.prototype.closest = function(b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function(a, h) {
              return (
                "left" === c && b > h - e && b < h + e
                  ? (d = a)
                  : "right" === c && b > h - f - e && b < h - f + e
                    ? (d = a + 1)
                    : this.op(b, "<", h) &&
                      this.op(b, ">", g[a + 1] || h - f) &&
                      (d = "left" === c ? a + 1 : a),
                d === -1
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, ">", g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
        d
      );
    }),
    (e.prototype.animate = function(b) {
      var c = this.speed() > 0;
      this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"), this.trigger("translate")),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + b + "px,0px,0px)",
              transition: this.speed() / 1e3 + "s"
            })
          : c
            ? this.$stage.animate(
                { left: b + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                a.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: b + "px" });
    }),
    (e.prototype.is = function(a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function(a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger("change", {
          property: { name: "position", value: a }
        });
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate("position"),
          this.trigger("changed", {
            property: { name: "position", value: this._current }
          });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function(b) {
      return (
        "string" === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function(a) {
      (a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(a)),
          this.release(["translate", "translated"]));
    }),
    (e.prototype.normalize = function(a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      );
    }),
    (e.prototype.relative = function(a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function(a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1;
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function(a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function(a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function(a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function(b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function(a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function(a, b) {
            return f(b);
          })
        : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function(a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function(b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function(a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function(a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function(a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
          ? ((i += 1), (a = ((a % i) + i) % i))
          : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(":visible") && this.update();
    }),
    (e.prototype.next = function(a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function(a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function(a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (e.prototype.viewport = function() {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
            ? (d = b.innerWidth)
            : c.documentElement && c.documentElement.clientWidth
              ? (d = c.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
        d
      );
    }),
    (e.prototype.replace = function(b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find("." + this.settings.nestedItemSelector)),
        b
          .filter(function() {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function(a, b) {
              (b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (e.prototype.add = function(b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger("add", { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find("[data-merge]")
                  .addBack("[data-merge]")
                  .attr("data-merge") || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", { content: b, position: c });
    }),
    (e.prototype.remove = function(a) {
      (a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger("remove", { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function(b) {
      b.each(
        a.proxy(function(b, c) {
          this.enter("pre-loading"),
            (c = a(c)),
            a(new Image())
              .one(
                "load",
                a.proxy(function(a) {
                  c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") &&
                      !this.is("initializing") &&
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (e.prototype.destroy = function() {
      this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, "resize", this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage
          .children()
          .contents()
          .unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (e.prototype.op = function(a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case "<":
          return d ? a > c : a < c;
        case ">":
          return d ? a < c : a > c;
        case ">=":
          return d ? a <= c : a >= c;
        case "<=":
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function(a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent("on" + b, c);
    }),
    (e.prototype.off = function(a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent("on" + b, c);
    }),
    (e.prototype.trigger = function(b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(["on", b, d], function(a) {
              return a;
            })
            .join("-")
            .toLowerCase()
        ),
        j = a.Event(
          [b, "owl", d || "carousel"].join(".").toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        );
      return (
        this._supress[b] ||
          (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            "function" == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function(b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function(a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function(b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function(a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function(b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function(a) {
            return !c ||
              !c.apply ||
              (a.namespace && a.namespace.indexOf("owl") !== -1)
              ? a.namespace && a.namespace.indexOf("owl") > -1
              : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function(c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function(b) {
      a.each(
        b,
        a.proxy(function(a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function(b) {
      a.each(
        b,
        a.proxy(function(a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function(a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
              ? a.changedTouches[0]
              : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function(a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function(a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function(b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var d = a(this),
          f = d.data("owl.carousel");
        f ||
          ((f = new e(this, "object" == typeof b && b)),
          d.data("owl.carousel", f),
          a.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove"
            ],
            function(b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + ".owl.carousel.core",
                  a.proxy(function(a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]));
                  }, f)
                );
            }
          )),
          "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function() {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(
            function(b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && "position" == b.property.name) ||
                  "initialized" == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && e * -1) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function(a, b) {
                      this.load(b);
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++;
            },
            this
          )
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find(".owl-lazy");
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function(c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr("data-src-retina")) ||
                  f.attr("data-src");
              this._core.trigger("load", { element: f, url: g }, "lazy"),
                f.is("img")
                  ? f
                      .one(
                        "load.owl.lazy",
                        a.proxy(function() {
                          f.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: f, url: g },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function() {
                      f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1"
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: f, url: g },
                          "lazy"
                        );
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              "position" == a.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": a.proxy(function(a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function() {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage
            .children()
            .toArray()
            .slice(b, c),
          e = [],
          f = 0;
        a.each(d, function(b, c) {
          e.push(a(c).height());
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"]
              });
          }, this),
          "resize.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault();
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              "position" === a.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
            if (b.namespace) {
              var c = a(b.content).find(".owl-video");
              c.length &&
                (c.css("display", "none"), this.fetch(c, a(b.content)));
            }
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          a.proxy(function(a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function(a, b) {
        var c = (function() {
            return a.attr("data-vimeo-id")
              ? "vimeo"
              : a.attr("data-vzaar-id")
                ? "vzaar"
                : "youtube";
          })(),
          d =
            a.attr("data-vimeo-id") ||
            a.attr("data-youtube-id") ||
            a.attr("data-vzaar-id"),
          e = a.attr("data-width") || this._core.settings.videoWidth,
          f = a.attr("data-height") || this._core.settings.videoHeight,
          g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf("youtu") > -1)
        )
          c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
          if (!(d[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          c = "vzaar";
        }
        (d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr("data-video", g),
          this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function(b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
              : "",
          h = b.find("img"),
          i = "src",
          j = "",
          k = this._core.settings,
          l = function(a) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e);
          };
        if (
          (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
          this._core.settings.lazyLoad && ((i = "data-src"), (j = "owl-lazy")),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type
          ? ((f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg"), l(f))
          : "vimeo" === c.type
            ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                  (f = a[0].thumbnail_large), l(f);
                }
              })
            : "vzaar" === c.type &&
              a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                  (f = a.framegrab_url), l(f);
                }
              });
      }),
      (e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (e.prototype.play = function(b) {
        var c,
          d = a(b.target),
          e = d.closest("." + this._core.settings.itemClass),
          f = this._videos[e.attr("data-video")],
          g = f.width || "100%",
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          "youtube" === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                "?autoplay=1&rel=0&v=" +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === f.type
              ? (c =
                  '<iframe src="//player.vimeo.com/video/' +
                  f.id +
                  '?autoplay=1" width="' +
                  g +
                  '" height="' +
                  h +
                  '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
              : "vzaar" === f.type &&
                (c =
                  '<iframe frameborder="0"height="' +
                  h +
                  '"width="' +
                  g +
                  '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                  f.id +
                  '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + "</div>").insertAfter(
            e.find(".owl-video")
          ),
          (this._playing = e.addClass("owl-video-playing")));
      }),
      (e.prototype.isInFullScreen = function() {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement;
        return (
          b &&
          a(b)
            .parent()
            .hasClass("owl-video-frame")
        );
      }),
      (e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          "change.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              "position" == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(
            function(a) {
              a.namespace && (this.swapping = "translated" == a.type);
            },
            this
          ),
          "translate.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this)
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function() {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + "px" })
                .addClass("animated owl-animated-out")
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass("animated owl-animated-in")
                .addClass(f));
        }
      }),
      (e.prototype.clear = function(b) {
        a(b.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    var e = function(b) {
      (this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": a.proxy(function(a) {
            a.namespace && "settings" === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                "position" === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": a.proxy(function(a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          "stop.owl.autoplay": a.proxy(function(a) {
            a.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": a.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": a.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": a.proxy(function() {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": a.proxy(function() {
            this._core.settings.autoplayHoverPause && this.play();
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (e.prototype.play = function(a, b) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (e.prototype._getNextTimeout = function(d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function() {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed);
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        );
      }),
      (e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
      }),
      (e.prototype.stop = function() {
        this._core.is("rotating") &&
          (b.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
          "function" != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    "use strict";
    var e = function(b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          "prepared.owl.carousel": a.proxy(function(b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1);
          }, this),
          "changed.owl.carousel": a.proxy(function(a) {
            a.namespace && "position" == a.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": a.proxy(function(a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }),
      (e.prototype.initialize = function() {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (c.navContainer
          ? a(c.navContainer)
          : a("<div>")
              .addClass(c.navContainerClass)
              .appendTo(this.$element)
        ).addClass("disabled")),
          (this._controls.$previous = a("<" + c.navElement + ">")
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function(a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a("<" + c.navElement + ">")
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              "click",
              a.proxy(function(a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a("<div>")
                .addClass(c.dotClass)
                .append(a("<span>"))
                .prop("outerHTML")
            ]),
          (this._controls.$absolute = (c.dotsContainer
            ? a(c.dotsContainer)
            : a("<div>")
                .addClass(c.dotsClass)
                .appendTo(this.$element)
          ).addClass("disabled")),
          this._controls.$absolute.on(
            "click",
            "div",
            a.proxy(function(b) {
              var d = a(b.target)
                .parent()
                .is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target)
                    .parent()
                    .index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
          "function" != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function() {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (
          ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || "page" == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1
                }),
                Math.min(f, a - d) === f)
              )
                break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function() {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(""))
              : b > 0
                ? this._controls.$absolute.append(
                    new Array(b + 1).join(this._templates[0])
                  )
                : b < 0 &&
                  this._controls.$absolute
                    .children()
                    .slice(b)
                    .remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        };
      }),
      (e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function(a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function(b) {
        var c,
          d,
          e = this._core.settings;
        return (
          "page" == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    "use strict";
    var e = function(c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": a.proxy(function(c) {
            c.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              a(b).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": a.proxy(function(b) {
            if (b.namespace) {
              var c = a(b.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          "changed.owl.carousel": a.proxy(function(c) {
            if (c.namespace && "position" === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function(a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          "hashchange.owl.navigation",
          a.proxy(function(a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
          "function" != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function(a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a("<support>").get(0).style,
      h = "Webkit Moz O ms".split(" "),
      i = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend"
          }
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend"
          }
        }
      },
      j = {
        csstransforms: function() {
          return !!e("transform");
        },
        csstransforms3d: function() {
          return !!e("perspective");
        },
        csstransitions: function() {
          return !!e("transition");
        },
        cssanimations: function() {
          return !!e("animation");
        }
      };
    j.csstransitions() &&
      ((a.support.transition = new String(f("transition"))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f("animation"))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f("transform"))),
        (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);
// Yata Editor v0.101.0 | JS
var fullImage = (function() {
  var init = function() {
      $(document).on(
        "click",
        'img.owl-lazy[data-zoom="true"]',
        enableFullImage
      );
    },
    destroy = function() {
      $(document).off("click", enableFullImage);
    },
    enableFullImage = function(event) {
      var imageUrl = $(event.target).attr("data-src");

      appendFullImage(imageUrl, event);
    },
    appendFullImage = function(imageUrl, event) {
      var overlayExists = $(".cs-overlay").length > 0;
      $("body").addClass("cs-overflow-hidden");

      if (overlayExists) {
        changeImageSrc(imageUrl, event);
      } else {
        buildFullImage(imageUrl, event);
      }
    },
    changeImageSrc = function(imageUrl, event) {
      $(".cs-spinner").show();

      buildInfo(event);
      loadImage(imageUrl);

      $(".cs-overlay").addClass("cs-is-open");
    },
    buildFullImage = function(imageUrl, event) {
      appendOverlay();
      appendImage(imageUrl, event);
      setCloseEvents();
    },
    loadImage = function(imageUrl) {
      $(".cs-full-image")
        .on("load", function() {
          $(this).addClass("cs-is-open");
          $(".cs-spinner").hide();
        })
        .attr("src", imageUrl);
    },
    appendOverlay = function() {
      var loading = $("<div/>", { class: "cs-spinner" }),
        closeIcon = buildIcon("close"),
        closeButton = $("<a/>", {
          href: "javascript:;",
          class: "cs-full-close"
        }).append(closeIcon),
        overlay = $("<div/>", { class: "cs-overlay cs-is-open" }).append(
          loading,
          closeButton
        );

      $("body").append(overlay);
    },
    appendImage = function(imageUrl, event) {
      var image = $("<img/>", { class: "cs-full-image" });

      $(".cs-overlay").append(image);

      buildInfo(event);
      loadImage(imageUrl);
    },
    buildInfo = function(event) {
      var imageHref = $(event.target).attr("data-href"),
        openInNewWindow = $(event.target).attr("data-target"),
        imageTitle = $(event.target).attr("title"),
        titleText = $("<strong/>", { text: "Título da imagem: " }),
        linkText = $("<strong/>", { text: "Link da imagem: " }),
        infoWrapper = $("<div/>", { class: "cs-full-image-info" });

      if ($(".cs-full-image-info").length !== 0) {
        $(".cs-full-image-info").remove();
      }

      var titleTag = $("<p>", {
        text: imageTitle,
        class: "cs-full-image-title"
      })
        .prepend(titleText)
        .appendTo(infoWrapper);

      if (imageHref) {
        var linkTag = $("<a>", {
          text: imageHref,
          href: imageHref,
          target: openInNewWindow,
          class: "cs-full-image-link"
        })
          .prepend(linkText)
          .appendTo(infoWrapper);
      }

      $(".cs-overlay").append(infoWrapper);
    },
    buildIcon = function(icon_name) {
      var icon =
        '<svg version="1.1" class="cs-ico-close" xmlns="http://www.w3.org/2000/svg" \
                  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" \
                  style="enable-background:new 0 0 24 24;" xml:space="preserve"> \
                  <path class="st0" d="M23.3,21.2l-9-9.2l9.2-9.2C23.8,2.5,24,2.1,24,1.7c0-0.4-0.2-0.8-0.5-1.2C23.2,0.2,22.8,0,22.3,0 \
                  	c-0.4,0-0.8,0.2-1.2,0.5L12,9.7L2.8,0.5C2.5,0.2,2.1,0,1.7,0C1.2,0,0.8,0.2,0.5,0.5C0.2,0.8,0,1.2,0,1.7c0,0.4,0.2,0.8,0.5,1.2 \
                  	L9.7,12l-9.2,9.2C0.2,21.5,0,21.9,0,22.3c0,0.4,0.2,0.8,0.5,1.2c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4l9.2-9.2l9.2,9.2 \
                  	c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.5-0.7,0.5-1.2C23.8,21.9,23.6,21.5,23.3,21.2L23.3,21.2z"/> \
                </svg>';
      return icon;
    },
    removeFullImage = function() {
      $("body").removeClass("cs-overflow-hidden");
      $(".cs-full-image").removeClass("cs-is-open");
      $(".cs-overlay").removeClass("cs-is-open");
    },
    closeOnEscape = function(event) {
      if (event.which === 27) {
        removeFullImage();
      }
    },
    closeOnOverlay = function(event) {
      if ($(event.target).hasClass("cs-overlay")) {
        removeFullImage();
      }
    };

  setCloseEvents = function() {
    $(document).on("keyup.fullimage", closeOnEscape);
    $(".cs-full-close").on("click", removeFullImage);
    $(".cs-overlay").on("click", closeOnOverlay);
  };

  return { init: init };
})();

$(document).ready(fullImage.init);

var positionSticky = (function() {
  var init = function() {
      if (!isNotSupported()) {
        return false;
      }

      $(window).on("resize.positionStick", function() {
        setFakeArea();
      });

      setFakeArea();
    },
    setFakeArea = function() {
      if (isNotSupported()) {
        var section = $(".cs-section-sticky");

        if (section.length) {
          var sectionGetRect = section[0].getBoundingClientRect(),
            fakeArea = $(".cs-fake-header");

          if (!fakeArea.length) {
            fakeArea = $('<div class="cs-fake-header"></div>');
          }

          section.addClass("cs-section-fixed");

          fakeArea.css({
            width: sectionGetRect.width,
            height: sectionGetRect.height
          });
          section.after(fakeArea);
        }
      }
    },
    clearFakeArea = function() {
      if (isNotSupported()) {
        $(".cs-fake-header").remove();
        $(".cs-section-sticky").removeClass("cs-section-fixed");
      }
    },
    isNotSupported = function() {
      return !isStyleSupported("position", "sticky");
    };

  return { init: init };
})();

$(document).ready(positionSticky.init);

/*
 * https://github.com/ryanmorr/is-style-supported
 * isStyleSupported
 * Detect support for CSS properties and their assignable values
 * @param {String} prop
 * @param {String} value (optional)
 * @return {Boolean}
 */

(function(win) {
  "use strict";

  var el = win.document.createElement("div"),
    prefixes = ["Webkit", "Moz", "O", "ms"],
    camelRe = /-([a-z]|[0-9])/gi,
    length,
    support,
    camel,
    capitalized,
    prefixed;

  // Convert CSS notation (kebab-case) to DOM notation (camelCase)
  function toCamelCase(prop) {
    return prop.replace(camelRe, function replaceChar(all, char) {
      return (char + "").toUpperCase();
    });
  }

  // Test the different native APIs for CSS support
  function checkNativeSupport(prop, value) {
    // Check the standard method first
    if ("CSS" in win && win.CSS.supports) {
      return win.CSS.supports(prop, value);
    }

    // Check for Opera's native method
    if (win.supportsCSS) {
      return win.supportsCSS(prop, value);
    }

    return false;
  }

  // Determine support by actually applying the property/value
  // as CSS to the test element and checking if the property
  // exists in the style object
  function canSetProperty(prop, camel, value) {
    var support = camel in el.style;
    if (value === "inherit") {
      return support;
    }

    el.style.cssText = prop + ":" + value;
    return support && el.style[camel] !== "";
  }

  // Define `isStyleSupported` globally
  win.isStyleSupported = function isStyleSupported(prop, value) {
    // If no value is supplied, use "inherit"
    value = arguments.length === 2 ? value : "inherit";

    // Check native methods first
    support = checkNativeSupport(prop, value);
    if (support) {
      return true;
    }

    camel = toCamelCase(prop);
    capitalized = camel.charAt(0).toUpperCase() + camel.slice(1);

    // Check if the property/value can be applied to an element
    support = canSetProperty(prop, camel, value);
    length = prefixes.length;
    while (!support && length--) {
      // We repeat the previous steps here, this time trying
      // each vendor prefix to determine support
      prefixed = "-" + prefixes[length].toLowerCase() + "-" + prop;
      support = checkNativeSupport(prefixed, value);
      if (!support) {
        camel = prefixes[length] + capitalized;
        support = canSetProperty(prefixed, camel, value);
      }
    }

    return support;
  };
})(window);

/*! Stellar.js v0.6.2 | Copyright 2018, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!(function(a, b, c, d) {
  function e(b, c) {
    (this.element = b),
      (this.options = a.extend({}, g, c)),
      (this._defaults = g),
      (this._name = f),
      this.init();
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function(a) {
        a.hide();
      },
      showElement: function(a) {
        a.show();
      }
    },
    h = {
      scroll: {
        getLeft: function(a) {
          return a.scrollLeft();
        },
        setLeft: function(a, b) {
          a.scrollLeft(b);
        },
        getTop: function(a) {
          return a.scrollTop();
        },
        setTop: function(a, b) {
          a.scrollTop(b);
        }
      },
      position: {
        getLeft: function(a) {
          return -1 * parseInt(a.css("left"), 10);
        },
        getTop: function(a) {
          return -1 * parseInt(a.css("top"), 10);
        }
      },
      margin: {
        getLeft: function(a) {
          return -1 * parseInt(a.css("margin-left"), 10);
        },
        getTop: function(a) {
          return -1 * parseInt(a.css("margin-top"), 10);
        }
      },
      transform: {
        getLeft: function(a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
            : 0;
        },
        getTop: function(a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b
            ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
            : 0;
        }
      }
    },
    i = {
      position: {
        setLeft: function(a, b) {
          a.css("left", b);
        },
        setTop: function(a, b) {
          a.css("top", b);
        }
      },
      transform: {
        setPosition: function(a, b, c, d, e) {
          a[0].style[k] =
            "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)";
        }
      }
    },
    j = (function() {
      var b,
        c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break;
        }
      return (
        "WebkitOpacity" in d && (e = "Webkit"),
        "KhtmlOpacity" in d && (e = "Khtml"),
        function(a) {
          return (
            e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
          );
        }
      );
    })(),
    k = j("transform"),
    l =
      a("<div />", { style: "background:#fff" }).css(
        "background-position-x"
      ) !== d,
    m = l
      ? function(a, b, c) {
          a.css({ "background-position-x": b, "background-position-y": c });
        }
      : function(a, b, c) {
          a.css("background-position", b + " " + c);
        },
    n = l
      ? function(a) {
          return [
            a.css("background-position-x"),
            a.css("background-position-y")
          ];
        }
      : function(a) {
          return a.css("background-position").split(" ");
        },
    o =
      b.requestAnimationFrame ||
      b.webkitRequestAnimationFrame ||
      b.mozRequestAnimationFrame ||
      b.oRequestAnimationFrame ||
      b.msRequestAnimationFrame ||
      function(a) {
        setTimeout(a, 1e3 / 60);
      };
  (e.prototype = {
    init: function() {
      (this.options.name = f + "_" + Math.floor(1e9 * Math.random())),
        this._defineElements(),
        this._defineGetters(),
        this._defineSetters(),
        this._handleWindowLoadAndResize(),
        this._detectViewport(),
        this.refresh({ firstLoad: !0 }),
        "scroll" === this.options.scrollProperty
          ? this._handleScrollEvent()
          : this._startAnimationLoop();
    },
    _defineElements: function() {
      this.element === c.body && (this.element = b),
        (this.$scrollElement = a(this.element)),
        (this.$element = this.element === b ? a("body") : this.$scrollElement),
        (this.$viewportElement =
          this.options.viewportElement !== d
            ? a(this.options.viewportElement)
            : this.$scrollElement[0] === b ||
              "scroll" === this.options.scrollProperty
              ? this.$scrollElement
              : this.$scrollElement.parent());
    },
    _defineGetters: function() {
      var a = this,
        b = h[a.options.scrollProperty];
      (this._getScrollLeft = function() {
        return b.getLeft(a.$scrollElement);
      }),
        (this._getScrollTop = function() {
          return b.getTop(a.$scrollElement);
        });
    },
    _defineSetters: function() {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      (this._setScrollLeft =
        "function" == typeof e
          ? function(a) {
              e(b.$scrollElement, a);
            }
          : a.noop),
        (this._setScrollTop =
          "function" == typeof f
            ? function(a) {
                f(b.$scrollElement, a);
              }
            : a.noop),
        (this._setPosition =
          d.setPosition ||
          function(a, c, e, f, g) {
            b.options.horizontalScrolling && d.setLeft(a, c, e),
              b.options.verticalScrolling && d.setTop(a, f, g);
          });
    },
    _handleWindowLoadAndResize: function() {
      var c = this,
        d = a(b);
      c.options.responsive &&
        d.bind("load." + this.name, function() {
          c.refresh();
        }),
        d.bind("resize." + this.name, function() {
          c._detectViewport(), c.options.responsive && c.refresh();
        });
    },
    refresh: function(c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      (c && c.firstLoad) || this._reset(),
        this._setScrollLeft(0),
        this._setScrollTop(0),
        this._setOffsets(),
        this._findParticles(),
        this._findBackgrounds(),
        c &&
          c.firstLoad &&
          /WebKit/.test(navigator.userAgent) &&
          (a().jquery < "1.5.0"
            ? a(b).load(d._webKitRefresh)
            : a(b).on("load", d._webkitRefresh)),
        this._setScrollLeft(e),
        this._setScrollTop(f);
    },
    _webKitRefresh: function() {
      var a = this,
        b = a._getScrollLeft(),
        c = a._getScrollTop();
      a._setScrollLeft(b + 1),
        a._setScrollTop(c + 1),
        a._setScrollLeft(b),
        a._setScrollTop(c);
    },
    _detectViewport: function() {
      var a =
          this.$viewportElement[0] !== b
            ? this.$viewportElement.offset()
            : { top: 0, left: 0 },
        c = null !== a && a !== d;
      (this.viewportWidth = this.$viewportElement.width()),
        (this.viewportHeight = this.$viewportElement.height()),
        (this.viewportOffsetTop = c ? a.top : 0),
        (this.viewportOffsetLeft = c ? a.left : 0);
    },
    _findParticles: function() {
      var b = this;
      this._getScrollLeft(), this._getScrollTop();
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--)
          this.particles[c].$element.data("stellar-elementIsActive", d);
      (this.particles = []),
        this.options.parallaxElements &&
          this.$element.find("[data-stellar-ratio]").each(function(c) {
            var e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n = a(this),
              o = 0,
              p = 0,
              q = 0,
              r = 0;
            if (n.data("stellar-elementIsActive")) {
              if (n.data("stellar-elementIsActive") !== this) return;
            } else n.data("stellar-elementIsActive", this);
            b.options.showElement(n),
              n.data("stellar-startingLeft")
                ? (n.css("left", n.data("stellar-startingLeft")),
                  n.css("top", n.data("stellar-startingTop")))
                : (n.data("stellar-startingLeft", n.css("left")),
                  n.data("stellar-startingTop", n.css("top"))),
              (g = n.position().left),
              (h = n.position().top),
              (i =
                "auto" === n.css("margin-left")
                  ? 0
                  : parseInt(n.css("margin-left"), 10)),
              (j =
                "auto" === n.css("margin-top")
                  ? 0
                  : parseInt(n.css("margin-top"), 10)),
              (l = n.offset().left - i),
              (m = n.offset().top - j),
              n.parents().each(function() {
                var b = a(this);
                if (!0 === b.data("stellar-offset-parent"))
                  return (o = q), (p = r), (k = b), !1;
                (q += b.position().left), (r += b.position().top);
              }),
              (e =
                n.data("stellar-horizontal-offset") !== d
                  ? n.data("stellar-horizontal-offset")
                  : k !== d && k.data("stellar-horizontal-offset") !== d
                    ? k.data("stellar-horizontal-offset")
                    : b.horizontalOffset),
              (f =
                n.data("stellar-vertical-offset") !== d
                  ? n.data("stellar-vertical-offset")
                  : k !== d && k.data("stellar-vertical-offset") !== d
                    ? k.data("stellar-vertical-offset")
                    : b.verticalOffset),
              b.particles.push({
                $element: n,
                $offsetParent: k,
                isFixed: "fixed" === n.css("position"),
                horizontalOffset: e,
                verticalOffset: f,
                startingPositionLeft: g,
                startingPositionTop: h,
                startingOffsetLeft: l,
                startingOffsetTop: m,
                parentOffsetLeft: o,
                parentOffsetTop: p,
                stellarRatio:
                  n.data("stellar-ratio") !== d ? n.data("stellar-ratio") : 1,
                width: n.outerWidth(!0),
                height: n.outerHeight(!0),
                isHidden: !1
              });
          });
    },
    _findBackgrounds: function() {
      var b,
        c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      (this.backgrounds = []),
        this.options.parallaxBackgrounds &&
          ((b = this.$element.find("[data-stellar-background-ratio]")),
          this.$element.data("stellar-background-ratio") &&
            (b = b.add(this.$element)),
          b.each(function() {
            var b,
              g,
              h,
              i,
              j,
              k,
              l,
              o = a(this),
              p = n(o),
              q = 0,
              r = 0,
              s = 0,
              t = 0;
            if (o.data("stellar-backgroundIsActive")) {
              if (o.data("stellar-backgroundIsActive") !== this) return;
            } else o.data("stellar-backgroundIsActive", this);
            o.data("stellar-backgroundStartingLeft")
              ? m(
                  o,
                  o.data("stellar-backgroundStartingLeft"),
                  o.data("stellar-backgroundStartingTop")
                )
              : (o.data("stellar-backgroundStartingLeft", p[0]),
                o.data("stellar-backgroundStartingTop", p[1])),
              (h =
                "auto" === o.css("margin-left")
                  ? 0
                  : parseInt(o.css("margin-left"), 10)),
              (i =
                "auto" === o.css("margin-top")
                  ? 0
                  : parseInt(o.css("margin-top"), 10)),
              (j = o.offset().left - h - e),
              (k = o.offset().top - i - f),
              o.parents().each(function() {
                var b = a(this);
                if (!0 === b.data("stellar-offset-parent"))
                  return (q = s), (r = t), (l = b), !1;
                (s += b.position().left), (t += b.position().top);
              }),
              (b =
                o.data("stellar-horizontal-offset") !== d
                  ? o.data("stellar-horizontal-offset")
                  : l !== d && l.data("stellar-horizontal-offset") !== d
                    ? l.data("stellar-horizontal-offset")
                    : c.horizontalOffset),
              (g =
                o.data("stellar-vertical-offset") !== d
                  ? o.data("stellar-vertical-offset")
                  : l !== d && l.data("stellar-vertical-offset") !== d
                    ? l.data("stellar-vertical-offset")
                    : c.verticalOffset),
              c.backgrounds.push({
                $element: o,
                $offsetParent: l,
                isFixed: "fixed" === o.css("background-attachment"),
                horizontalOffset: b,
                verticalOffset: g,
                startingValueLeft: p[0],
                startingValueTop: p[1],
                startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10))
                  ? 0
                  : parseInt(p[0], 10),
                startingBackgroundPositionTop: isNaN(parseInt(p[1], 10))
                  ? 0
                  : parseInt(p[1], 10),
                startingPositionLeft: o.position().left,
                startingPositionTop: o.position().top,
                startingOffsetLeft: j,
                startingOffsetTop: k,
                parentOffsetLeft: q,
                parentOffsetTop: r,
                stellarRatio:
                  o.data("stellar-background-ratio") === d
                    ? 1
                    : o.data("stellar-background-ratio")
              });
          }));
    },
    _reset: function() {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--)
        (a = this.particles[e]),
          (b = a.$element.data("stellar-startingLeft")),
          (c = a.$element.data("stellar-startingTop")),
          this._setPosition(a.$element, b, b, c, c),
          this.options.showElement(a.$element),
          a.$element
            .data("stellar-startingLeft", null)
            .data("stellar-elementIsActive", null)
            .data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--)
        (d = this.backgrounds[e]),
          d.$element
            .data("stellar-backgroundStartingLeft", null)
            .data("stellar-backgroundStartingTop", null),
          m(d.$element, d.startingValueLeft, d.startingValueTop);
    },
    destroy: function() {
      this._reset(),
        this.$scrollElement
          .unbind("resize." + this.name)
          .unbind("scroll." + this.name),
        (this._animationLoop = a.noop),
        a(b)
          .unbind("load." + this.name)
          .unbind("resize." + this.name);
    },
    _setOffsets: function() {
      var c = this,
        d = a(b);
      d
        .unbind("resize.horizontal-" + this.name)
        .unbind("resize.vertical-" + this.name),
        "function" == typeof this.options.horizontalOffset
          ? ((this.horizontalOffset = this.options.horizontalOffset()),
            d.bind("resize.horizontal-" + this.name, function() {
              c.horizontalOffset = c.options.horizontalOffset();
            }))
          : (this.horizontalOffset = this.options.horizontalOffset),
        "function" == typeof this.options.verticalOffset
          ? ((this.verticalOffset = this.options.verticalOffset()),
            d.bind("resize.vertical-" + this.name, function() {
              c.verticalOffset = c.options.verticalOffset();
            }))
          : (this.verticalOffset = this.options.verticalOffset);
    },
    _repositionElements: function() {
      var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (
        this.currentScrollLeft !== k ||
        this.currentScrollTop !== l ||
        this.currentWidth !== this.viewportWidth ||
        this.currentHeight !== this.viewportHeight
      ) {
        for (
          this.currentScrollLeft = k,
            this.currentScrollTop = l,
            this.currentWidth = this.viewportWidth,
            this.currentHeight = this.viewportHeight,
            j = this.particles.length - 1;
          j >= 0;
          j--
        )
          (a = this.particles[j]),
            (b = a.isFixed ? 1 : 0),
            this.options.horizontalScrolling
              ? ((f =
                  (k +
                    a.horizontalOffset +
                    this.viewportOffsetLeft +
                    a.startingPositionLeft -
                    a.startingOffsetLeft +
                    a.parentOffsetLeft) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionLeft),
                (h = f - a.startingPositionLeft + a.startingOffsetLeft))
              : ((f = a.startingPositionLeft), (h = a.startingOffsetLeft)),
            this.options.verticalScrolling
              ? ((g =
                  (l +
                    a.verticalOffset +
                    this.viewportOffsetTop +
                    a.startingPositionTop -
                    a.startingOffsetTop +
                    a.parentOffsetTop) *
                    -(a.stellarRatio + b - 1) +
                  a.startingPositionTop),
                (i = g - a.startingPositionTop + a.startingOffsetTop))
              : ((g = a.startingPositionTop), (i = a.startingOffsetTop)),
            this.options.hideDistantElements &&
              ((o =
                !this.options.horizontalScrolling ||
                (h + a.width > (a.isFixed ? 0 : k) &&
                  h <
                    (a.isFixed ? 0 : k) +
                      this.viewportWidth +
                      this.viewportOffsetLeft)),
              (n =
                !this.options.verticalScrolling ||
                (i + a.height > (a.isFixed ? 0 : l) &&
                  i <
                    (a.isFixed ? 0 : l) +
                      this.viewportHeight +
                      this.viewportOffsetTop))),
            o && n
              ? (a.isHidden &&
                  (this.options.showElement(a.$element), (a.isHidden = !1)),
                this._setPosition(
                  a.$element,
                  f,
                  a.startingPositionLeft,
                  g,
                  a.startingPositionTop
                ))
              : a.isHidden ||
                (this.options.hideElement(a.$element), (a.isHidden = !0));
        for (j = this.backgrounds.length - 1; j >= 0; j--)
          (c = this.backgrounds[j]),
            (b = c.isFixed ? 0 : 1),
            (d = this.options.horizontalScrolling
              ? (k +
                  c.horizontalOffset -
                  this.viewportOffsetLeft -
                  c.startingOffsetLeft +
                  c.parentOffsetLeft -
                  c.startingBackgroundPositionLeft) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueLeft),
            (e = this.options.verticalScrolling
              ? (l +
                  c.verticalOffset -
                  this.viewportOffsetTop -
                  c.startingOffsetTop +
                  c.parentOffsetTop -
                  c.startingBackgroundPositionTop) *
                  (b - c.stellarRatio) +
                "px"
              : c.startingValueTop),
            m(c.$element, d, e);
      }
    },
    _handleScrollEvent: function() {
      var a = this,
        b = !1,
        c = function() {
          a._repositionElements(), (b = !1);
        },
        d = function() {
          b || (o(c), (b = !0));
        };
      this.$scrollElement.bind("scroll." + this.name, d), d();
    },
    _startAnimationLoop: function() {
      var a = this;
      (this._animationLoop = function() {
        o(a._animationLoop), a._repositionElements();
      }),
        this._animationLoop();
    }
  }),
    (a.fn[f] = function(b) {
      var c = arguments;
      return b === d || "object" == typeof b
        ? this.each(function() {
            a.data(this, "plugin_" + f) ||
              a.data(this, "plugin_" + f, new e(this, b));
          })
        : "string" == typeof b && "_" !== b[0] && "init" !== b
          ? this.each(function() {
              var d = a.data(this, "plugin_" + f);
              d instanceof e &&
                "function" == typeof d[b] &&
                d[b].apply(d, Array.prototype.slice.call(c, 1)),
                "destroy" === b && a.data(this, "plugin_" + f, null);
            })
          : void 0;
    }),
    (a[f] = function(c) {
      var d = a(b);
      return d.stellar.apply(d, Array.prototype.slice.call(arguments, 0));
    }),
    (a[f].scrollProperty = h),
    (a[f].positionProperty = i),
    (b.Stellar = e);
})(jQuery, this, document);
var parallax = (function() {
  var init = function() {
      if ($(".cs-parallax").length) {
        var selectors =
          ".cs-parallax > .cs-section-inner, .cs-main.cs-parallax";

        add(selectors);
        $.stellar({ horizontalScrolling: false, verticalOffset: 0 });
      }
    },
    add = function(selector) {
      $(selector).attr("data-stellar-background-ratio", "0.2");
      $.stellar("refresh");
    },
    remove = function(selector) {
      $(selector).removeAttr("data-stellar-background-ratio");
      $.stellar("refresh");
    };

  return {
    init: init
  };
})();

$(document).ready(parallax.init);

var productModal = (function productModal(module) {
  var THUMBNAIL_WIDTH = 33.3;
  var productGalleryIndex = 0;
  var emptyPhotoSrc;
  var emptyPhotoTitle = "Foto não cadastrada.";
  var feedback = {
    success: {
      message: function message() {
        return "Item adicionado ao carrinho";
      },
      actions: function action() {
        return (
          '<a href="' +
          Cart.url() +
          '" class="cs-button">Ir para o carrinho</a>\
                <a data-close-modal href="javascript:;">Continuar comprando</a>'
        );
      }
    },
    error: {
      message: function message() {
        return "Ops! Algo deu errado.<br>Atualize a página e tente novamente.";
      },
      actions: function actions() {
        return '<a href="javascript:;" class="cs-button" onClick="window.location.reload()">\
                Atualizar</a>';
      }
    }
  };

  module.init = function init() {
    $(document)
      .off("click.openProductModal")
      .on("click.openProductModal", ".cs-showcase-product", showProductModal);

    $(document)
      .off("click.closeProductModal")
      .on("click.closeProductModal", "[data-close-modal]", closeProductModal);

    activeShowProductModal();
  };

  function closeProductModal() {
    productGalleryIndex = 0;
    window.location.hash = "";
    $(".cs-product-modal").remove();
    $(document).off("keyup.closeProductModal", closeOnEscape);
  }

  function activeShowProductModal() {
    if (document.URL.split("#")[1] !== undefined) {
      $(
        '.cs-showcase-products li[data-id="' +
          document.URL.split("#")[1] +
          '"]:eq(0)'
      ).trigger("click");
    }
  }

  function setEmptyPhotoSrc($target) {
    emptyPhotoSrc = $target
      .find(".cs-showcase-image")
      .css("background-image")
      .replace(/\"/g, "")
      .match(/url\((.*)\)/)[1];
  }

  function showProductModal() {
    var $target = $(this);
    var modalHtml = generateProductModal($target);
    var product = $target.data("product");

    window.location.hash = $target.data("id");

    $("body").append(modalHtml);
    $(document).on("keyup.closeProductModal", closeOnEscape);

    bindProductGalleryModal();
    bindModalActions(product.id, activeVariations(product));
  }

  function closeOnEscape(event) {
    if (event.which === 27) {
      closeProductModal();
    }
  }

  function generateProductModal($target) {
    var product = $target.data("product");
    var photos = $target.data("photos") || product.photos;
    setEmptyPhotoSrc($target);

    return (
      '<div class="cs-product-modal">\
              <div class="cs-product-content">\
                <span class="cs-product-close" data-close-modal></span>' +
      productGallery(photos) +
      productInformations(product) +
      "</div>\
            </div>"
    );
  }

  function bindProductGalleryModal() {
    $(".cs-product-thumbnails li").on("click", productGalleryView);
    $(".cs-product-next").on("click", productGalleryNext);
    $(".cs-product-prev").on("click", productGalleryPrev);
  }

  function productGalleryNext() {
    if (productGalleryIndex < 1) {
      productGalleryPosition("++");
    }
  }

  function productGalleryPrev() {
    if (productGalleryIndex > 0) {
      productGalleryPosition("--");
    }
  }

  function productGalleryPosition(operator) {
    eval("productGalleryIndex" + operator);

    $(".cs-product-thumbnails ul").css(
      "transform",
      "translate(-" + THUMBNAIL_WIDTH * productGalleryIndex + "%, 0)"
    );
  }

  function productGalleryView() {
    $(".cs-product-thumbnails li").removeClass("active");
    $(this).addClass("active");

    var src = $(this)
      .find("img")
      .attr("src");
    var title = $(this)
      .find("img")
      .attr("alt");
    $(".cs-product-photo img").attr({ src: src, title: title });
  }

  function productGallery(photos) {
    var firstPhoto = photos.length ? photos[0] : undefined;
    var src = firstPhoto
      ? firstPhoto.settings.thumbnails.medium.src
      : emptyPhotoSrc;
    var title = firstPhoto ? firstPhoto.settings.title : emptyPhotoTitle;

    return (
      '<div class="cs-product-gallery">\
              <div class="cs-product-photo">\
                <img src="' +
      src +
      '" title="' +
      title +
      '" alt="' +
      title +
      '" />\
              </div>' +
      productGalleryThumbs(photos) +
      "</div>"
    );
  }

  function productGalleryThumbs(photos) {
    if (photos.length < 2) {
      return "";
    }

    var thumbs = "";
    var arrowPrev =
      photos.length < 4 ? "" : '<span class="cs-product-prev"></span>';
    var arrowNext =
      photos.length < 4 ? "" : '<span class="cs-product-next"></span>';

    $.each(photos, function(index, photo) {
      var activeClass = index === 0 ? 'class="active"' : "";

      thumbs +=
        "<li " +
        activeClass +
        '>\
                  <img src="' +
        photo.settings.thumbnails.medium.src +
        '" data-original="' +
        photo.settings.src +
        '" alt="' +
        photo.settings.title +
        '">\
                </li>';
    });

    return (
      '<div class="cs-product-photos">' +
      arrowPrev +
      '<div class="cs-product-thumbnails">\
                <ul class="">' +
      thumbs +
      "</ul>\
              </div>" +
      arrowNext +
      "</div>"
    );
  }

  function productInformations(product) {
    return (
      '<div class="cs-product-informations">\
              <h3 class="cs-product-title">' +
      product.name +
      '</h3>\
              <p class="cs-product-description">' +
      (product.description || "") +
      "</p>" +
      productVariations(product) +
      '<div class="cs-product-information">\
                <div class="cs-product-price">' +
      productPrice(product.price, product.offerPrice) +
      '</div>\
                <a href="javascript:;" class="cs-product-action" data-is-loading="false">Comprar</a>\
              </div>\
              <div class="cs-product-unavailable">Produto indisponível :(</div>\
              <div class="cs-product-sold-out">Produto esgotado :(</div>\
              <div class="cs-product-feedback"></div>\
            </div>'
    );
  }

  function productVariations(product) {
    return (
      '<div class="cs-product-variations">' +
      $.map(product.options, productVariation).join("") +
      "</div>"
    );
  }

  function productVariation(option) {
    return (
      '<div class="cs-product-variation required">\
              <select id="' +
      option.id +
      '">\
                <option disabled selected>' +
      option.name +
      "</option>" +
      $.map(option.values, function(value) {
        return "<option>" + value + "</option>";
      }).join("") +
      "</select>\
            </div>"
    );
  }

  function productPrice(price, offerPrice) {
    var productPrice = formatCurrency(price);

    if (!offerPrice) {
      return 'Por <span class="price-current">R$' + productPrice + "</span>";
    }

    var discount = String(100 - (offerPrice / price) * 100).split(".")[0];

    return (
      'De <span class="price-discount">R$' +
      productPrice +
      '</span> \
      <span class="price-discount-percentage"> ' +
      discount +
      '% de desconto</span><br>\
    Por <span class="price-current">R$' +
      formatCurrency(offerPrice) +
      "</span>"
    );
  }

  function formatCurrency(value) {
    var currency = parseFloat(value)
      .toFixed(2)
      .split(".");
    currency[0] = currency[0].split(/(?=(?:...)*$)/).join(".");

    return currency.join(",");
  }

  function activeVariations(product) {
    return $.map(product.variations, function(variation) {
      if (variation.active === "1") {
        return variation;
      }
    });
  }

  function bindModalActions(productId, variations) {
    $(".cs-product-action").on("click", function(event) {
      $(".cs-product-feedback").html("");
      listenToAddProductEvent();

      if (variations.length > 0) {
        var $invalidVariation = nullVariationOptions();
        var variation = selectedVariation(variations);

        $invalidVariation.addClass("invalid");

        if ($invalidVariation.length <= 0 && variation) {
          $(".cs-product-action").attr("data-is-loading", true);
          $.event.trigger("addProduct", {
            productId: productId,
            variationId: variation.id
          });
        }
      } else {
        $(".cs-product-action").attr("data-is-loading", true);
        $.event.trigger("addProduct", { productId: productId });
      }
    });

    $(".cs-product-variation > select").on("change", function(event) {
      var $target = $(event.target);
      $target.parent().removeClass("invalid");

      if (nullVariationOptions().length <= 0) {
        var available = checkVariationAvailability(variations);

        setVariationStatus(available);
      }
    });
  }

  function listenToAddProductEvent() {
    $(window)
      .off("addProductResponse")
      .on("addProductResponse", function(_event, args) {
        $(".cs-product-action").attr("data-is-loading", false);
        buildProductFeedback(args.status);
      });
  }

  function buildProductFeedback(status) {
    $(".cs-product-feedback").html(
      '<div class="feedback-' +
        status +
        '">\
                                      <p class="feedback-message">' +
        feedback[status].message() +
        '</p>\
                                      <div class="feedback-actions">' +
        feedback[status].actions() +
        "</div>\
                                    </div>"
    );
  }

  function setVariationStatus(available) {
    var status = available ? "available" : "unavailable";
    $(".cs-product-informations").attr("data-status", status);
  }

  function nullVariationOptions() {
    return $(".cs-product-variation.required").filter(function() {
      return (
        $(this)
          .find("select")
          .val() === null
      );
    });
  }

  function selectedVariation(variations) {
    var selectedOptions = selectedVariationOptions();

    return matchingVariations(variations, selectedOptions)[0];
  }

  function checkVariationAvailability(variations) {
    if (variations.length > 0) {
      var selectedOptions = selectedVariationOptions();
      return isVariationAvailable(variations, selectedOptions);
    }

    return true;
  }

  function selectedVariationOptions() {
    return $(".cs-product-variation > select")
      .map(function(_index, variation) {
        var obj = {};
        obj[variation.id] = $(variation).val();

        return obj;
      })
      .toArray();
  }

  function isVariationAvailable(variations, selectedOptions) {
    return matchingVariations(variations, selectedOptions).length > 0;
  }

  function matchingVariations(variations, selectedOptions) {
    return $.map(variations, function(variation) {
      if (
        selectedOptions.length ==
        matchingOptions(variation, selectedOptions).length
      ) {
        return variation;
      }
    });
  }

  function matchingOptions(variation, selectedOptions) {
    return $.map(selectedOptions, function(selectedOption) {
      var variationId = Object.keys(selectedOption)[0];

      if (variation[variationId] === selectedOption[variationId]) {
        return selectedOption[variationId];
      }
    });
  }

  return module;
})(productModal || {});

$(document).ready(productModal.init);

var Cart = (function Cart(module) {
  var COOKIE_CART_ID = "cartId";
  var COOKIE_CART_URL = "cartUrl";
  var CART_URL = "/carts/";

  module.init = function init() {
    $(window)
      .off("addProduct")
      .on("addProduct", function(_event, args) {
        addProduct(args.productId, args.variationId);
      });

    updateCart();
  };

  module.url = function url() {
    var cartId = getCartId();
    var cartUrl = getCartUrl();

    if (cartId && cartUrl) {
      return cartUrl.concat(cartId);
    }
  };

  function addProduct(productId, variationId) {
    var cartId = getCartId();
    var body = { product_id: productId };
    var type = cartId ? "PUT" : "POST";
    var url = CART_URL;
    url = cartId ? url.concat(cartId) : url;
    variationId && (body.variation_id = variationId);

    request(
      url,
      type,
      JSON.stringify(body),
      addProductSuccess,
      addProductError
    );
  }

  function request(url, type, json, success, error) {
    $.ajax({
      url: url,
      type: type,
      contentType: "application/json",
      data: json,
      success: success,
      error: error
    });
  }

  function addProductSuccess(data) {
    updateCart();
    $.event.trigger("addProductResponse", { status: "success" });
  }

  function addProductError(data) {
    $.event.trigger("addProductResponse", { status: "error" });
  }

  function updateCart() {
    var cartId = getCartId();

    if (cartId) {
      getCart(cartId, function success(data) {
        updateCartBadge(data.products);
        updateCartLink();
      });
    }
  }

  function getCartId() {
    return findCookie(COOKIE_CART_ID);
  }

  function getCartUrl() {
    return findCookie(COOKIE_CART_URL);
  }

  function getCart(cartId, success) {
    request(CART_URL.concat(cartId), "GET", {}, success);
  }

  function updateCartBadge(products) {
    var cartBadge = $(".cs-cart-badge");

    if (products) {
      cartBadge.html(getProductsQuantity(products));
      cartBadge.show();
    } else {
      cartBadge.hide();
    }
  }

  function updateCartLink() {
    var url = module.url();
    var cartWidgetLink = $(".cs-cart-widget a");

    if (url) {
      cartWidgetLink.attr("href", url);
    } else {
      cartWidgetLink.attr("href", "javascript:;");
    }
  }

  function getProductsQuantity(products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
      total += parseFloat(products[i].quantity);
    }
    return total;
  }

  function findProductId(element) {
    return $(element)
      .parents(".cs-product-content")
      .data("product-id");
  }

  function findCookie(name) {
    var cookie = parseCookies().find(function(cookie) {
      return Object.keys(cookie).indexOf(name) === 0;
    });

    return cookie && cookie[name];
  }

  function parseCookies() {
    return $.map(document.cookie.split("; "), function(element) {
      var cookie = element.split("=");
      var obj = {};

      obj[cookie[0]] = cookie[1];

      return obj;
    });
  }

  return module;
})(Cart || {});

$(document).ready(Cart.init);

function Gallery(dom) {
  this.dom = $(dom);
  this.config = this.dom.data();

  this.start = function() {
    this.dom.owlCarousel(this.config);

    this.dom
      .find(".owl-item")
      .toggleClass("owl-item-full", this.config.keepOriginalSize);

    this.setupNavigationStyle();
  };

  this.setupNavigationStyle = function() {
    switch (this.config.navigationStyle) {
      case "none":
        this.setupNone();
        break;
      case "number":
        this.setupNumber();
        break;
      case "dot":
        this.setupDot();
        break;
      case "thumbnail":
        this.setupThumbnail();
        break;
    }
  };

  this.setupNone = function() {
    this.dom
      .parent(".cs-gallery-widget")
      .removeClass("cs-gallery-smallest cs-gallery-smaller");
  };

  this.setupNumber = function() {
    this.dom.children(".owl-dots").toggleClass("owl-dots-as-number");
    this.dom
      .parent(".cs-gallery-widget")
      .removeClass("cs-gallery-smallest")
      .addClass("cs-gallery-smaller");
  };

  this.setupDot = function() {
    this.dom
      .parent(".cs-gallery-widget")
      .removeClass("cs-gallery-smallest")
      .addClass("cs-gallery-smaller");
  };

  this.setupThumbnail = function() {
    this.dom.children(".owl-dots").toggleClass("owl-dots-as-thumb");
    this.dom
      .parent(".cs-gallery-widget")
      .removeClass("cs-gallery-smaller")
      .addClass("cs-gallery-smallest");

    var imageElements = this.dom.find(".owl-item:not(.cloned) img");
    if (imageElements.length > 0) {
      this.dom.find(".owl-dot").each(function(index) {
        var thumb = $(imageElements[index]).data("src-thumb");
        $(this).css("background-image", "url(" + thumb + ")");
      });
    }
  };
}

$(document).ready(function() {
  $(".cs-gallery").each(function(index, element) {
    var gallery = new Gallery(element);
    gallery.start();
  });
});

var csMenu = (function() {
  var init = function() {
      setActive();
      setAria();
    },
    setAria = function() {
      $(".cs-menu-widget .cs-has-submenu a")
        .on("focus", function() {
          var submenu = $(this).closest(".cs-has-submenu");

          submenu.addClass("cs-show-submenu");
          submenu.find(".cs-submenu-items").attr("aria-hidden", "false");
        })
        .on("blur", function() {
          var submenu = $(this).closest(".cs-has-submenu");

          submenu.removeClass("cs-show-submenu");
          submenu.find(".cs-submenu-items").attr("aria-hidden", "true");
        });
    },
    setActive = function() {
      $('.cs-menu-widget nav.cs-menu ul li a[href="' + getCurrentPath() + '"]')
        .parent()
        .addClass("cs-is-active");
    },
    isLanguagePath = function(currentPath) {
      var languagePath =
        "/" +
        $("html")
          .attr("lang")
          .replace("-", "_");
      return currentPath === languagePath;
    },
    getCurrentPath = function() {
      var currentPath = window.location.pathname;
      lastCaracter = currentPath.substr(
        currentPath.length - 1,
        currentPath.length
      );

      if (currentPath === "/" || isLanguagePath(currentPath)) {
        return $(".cs-menu-widget nav.cs-menu ul li a:first").attr("href");
      }

      if (lastCaracter === "/") {
        currentPath = currentPath.substr(0, currentPath.length - 1);
      }

      return currentPath;
    };

  return { init: init };
})();

$(document).ready(csMenu.init);

var csform = (function() {
  var init = function() {
      validate();
    },
    validate = function() {
      var $forms = $(".cs-form-widget form");
      var rules = {};
      var messages = {};

      $.each($forms, function(i, form) {
        $form = $(form);
        $form.attr("novalidate", "novalidate");
        rules = {};
        messages = {};

        $.each($form.find("[required]"), function(j, input) {
          $input = $(input);
          rules[$input.attr("name")] = {};
          messages[$input.attr("name")] = {};

          $.each($input.data(), function(key, value) {
            rules[$input.attr("name")][key] = true;
            messages[$input.attr("name")][key] = value;
          });
        });

        $form.validate({
          rules: rules,
          messages: messages,
          errorClass: "cs-field-error",
          errorPlacement: function(error, element) {
            element.parent().append(error);

            element.attr("aria-label", error.text()).addClass("cs-field-error");
          },
          highlight: function(element, errorClass) {
            var $element = $(element);

            setTimeout(function() {
              var message = $element.next(".cs-field-error").text();
              $element.attr("aria-label", message);
            }, 50);

            $element.attr("aria-invalid", true).addClass(errorClass);

            clearMessage($element.closest("form").find(".cs-form-message"));
          },
          unhighlight: function(element, errorClass) {
            $(element)
              .removeAttr("aria-invalid")
              .removeAttr("aria-label")
              .removeClass(errorClass);
          },
          submitHandler: submitForm
        });

        addCustomValidations();
        translateValidate();
      });
    },
    submitForm = function(form) {
      var $form = $(form);
      $form.find(".cs-button").attr("disabled", true);

      clearMessage($form.find(".cs-form-message"));

      $.ajax({
        type: "POST",
        url: "/mail_form",
        data: $form.serialize(),
        success: function() {
          var message = $form.find(".cs-form-message").data("success");
          form.reset();
          setMessage($form, 1, message);
        },
        error: function() {
          setMessage(
            $form,
            0,
            "A mensagem não pôde ser enviada. Tente novamente."
          );
        },
        complete: function() {
          $form.find(".cs-button").attr("disabled", false);
        }
      });

      return false;
    },
    errorClasses = ["cs-form-message-invalid", "cs-form-message-valid"],
    setMessage = function($form, isValid, message) {
      var $message = $form.find(".cs-form-message");

      clearMessage($message);

      $message
        .addClass(errorClasses[isValid])
        .text(message)
        .focus();
    },
    clearMessage = function($message) {
      $message
        .removeClass(errorClasses[0])
        .removeClass(errorClasses[1])
        .text("");
    },
    translateValidate = function() {
      $.extend($.validator.messages, {
        required: "Ops! Você esqueceu de preencher este campo",
        email: "Preencha com um e-mail válido",
        tel: "Preencha com um telefone válido",
        url: "O campo deve ser uma url válida",
        complete_url: "O campo deve ser uma url válida",
        date: "O campo deve ser uma data válida",
        datePT: "O campo deve ser uma data válida",
        dateISO: "O campo deve ser uma data válida (ISO)",
        number: "O campo deve ser um número válido",
        digits: "O campo deve ser somente dígitos",
        creditcard: "O campo deve ser um cartão de crédito válido",
        equalTo: "O campo está diferente da senha informada",
        accept: "O campo Por favor, forneça um arquivo com uma extensão válida",
        maxlength: $.validator.format(
          "O campo deve ser menor que {0} caracteres"
        ),
        minlength: $.validator.format(
          "O campo deve ser maior que {0} caracteres"
        ),
        rangelength: $.validator.format(
          "O campo deve ter entre {0} e {1} caracteres"
        ),
        range: $.validator.format("Use um valor entre {0} e {1}"),
        max: $.validator.format("O campo deve ser menor do que {0}"),
        min: $.validator.format("O campo deve ser maior do que {0}"),
        maxValue: $.validator.format("O campo deve ser menor ou igual a {0}"),
        minValue: $.validator.format("O campo deve ser maior ou igual a {0}")
      });
    },
    addCustomValidations = function() {
      $.validator.addMethod(
        "tel",
        function(value, element) {
          return this.optional(element) || /^(\+)?[0-9\(\)\s-]*$/.test(value);
        },
        "Please enter a valid phone number"
      );
    };

  return { init: init };
})();

$(document).ready(csform.init);

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

 function calcFullHeight(elem) {
  var size = $(window).height() +120;
  $(elem).css(
    "cssText",
    "background-size:auto " + size + "px !important;"+ " min-height:"+size+ "px !important"
  );
}

var fixMobileViewPortSize = function() {
  if (window.mobileAndTabletcheck()) {
    for (var i = 0; i < ".cs-section-inner".length; i++) {
      if ($($(".cs-section-inner")[i]).css("background-image") != "none") {
        (function($) {
          calcFullHeight($(".cs-section-inner")[i]);
        })(jQuery);
      }
    }
  }
};

jQuery(window).on("orientationchange", function() {
  // 500ms timeout for getting the correct height after orientation change
  setTimeout(function() {
    calcFullHeight();
  }, 500);
});

$(document).ready(fixMobileViewPortSize()); 
