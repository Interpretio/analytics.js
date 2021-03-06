! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(n.async = n.async || {})
}(this, function(n) {
    "use strict";

    function t(n, t) {
        t |= 0;
        for (var e = Math.max(n.length - t, 0), r = Array(e), u = 0; u < e; u++) r[u] = n[t + u];
        return r
    }

    function e(n) {
        var t = typeof n;
        return null != n && ("object" == t || "function" == t)
    }

    function r(n) {
        setTimeout(n, 0)
    }

    function u(n) {
        return function(e) {
            var r = t(arguments, 1);
            n(function() {
                e.apply(null, r)
            })
        }
    }

    function o(n) {
        return ft(function(t, r) {
            var u;
            try {
                u = n.apply(this, t)
            } catch (n) {
                return r(n)
            }
            e(u) && "function" == typeof u.then ? u.then(function(n) {
                i(r, null, n)
            }, function(n) {
                i(r, n.message ? n : new Error(n))
            }) : r(null, u)
        })
    }

    function i(n, t, e) {
        try {
            n(t, e)
        } catch (n) {
            st(c, n)
        }
    }

    function c(n) {
        throw n
    }

    function f(n) {
        return pt && "AsyncFunction" === n[Symbol.toStringTag]
    }

    function a(n) {
        return f(n) ? o(n) : n
    }

    function l(n) {
        return function(e) {
            var r = t(arguments, 1),
                u = ft(function(t, r) {
                    var u = this;
                    return n(e, function(n, e) {
                        a(n).apply(u, t.concat(e))
                    }, r)
                });
            return r.length ? u.apply(this, r) : u
        }
    }

    function s(n) {
        var t = gt.call(n, jt),
            e = n[jt];
        try {
            n[jt] = void 0;
            var r = !0
        } catch (n) {}
        var u = bt.call(n);
        return r && (t ? n[jt] = e : delete n[jt]), u
    }

    function p(n) {
        return kt.call(n)
    }

    function h(n) {
        return null == n ? void 0 === n ? wt : Ot : (n = Object(n), xt && xt in n ? s(n) : p(n))
    }

    function y(n) {
        if (!e(n)) return !1;
        var t = h(n);
        return t == Et || t == At || t == Lt || t == Tt
    }

    function v(n) {
        return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Bt
    }

    function d(n) {
        return null != n && v(n.length) && !y(n)
    }

    function m() {}

    function g(n) {
        return function() {
            if (null !== n) {
                var t = n;
                n = null, t.apply(this, arguments)
            }
        }
    }

    function b(n, t) {
        for (var e = -1, r = Array(n); ++e < n;) r[e] = t(e);
        return r
    }

    function j(n) {
        return null != n && "object" == typeof n
    }

    function S(n) {
        return j(n) && h(n) == Mt
    }

    function k() {
        return !1
    }

    function O(n, t) {
        return t = null == t ? Qt : t, !! t && ("number" == typeof n || Gt.test(n)) && n > -1 && n % 1 == 0 && n < t
    }

    function w(n) {
        return j(n) && v(n.length) && !! ge[h(n)]
    }

    function x(n) {
        return function(t) {
            return n(t)
        }
    }

    function L(n, t) {
        var e = qt(n),
            r = !e && Vt(n),
            u = !e && !r && Nt(n),
            o = !e && !r && !u && xe(n),
            i = e || r || u || o,
            c = i ? b(n.length, String) : [],
            f = c.length;
        for (var a in n)!t && !Ee.call(n, a) || i && ("length" == a || u && ("offset" == a || "parent" == a) || o && ("buffer" == a || "byteLength" == a || "byteOffset" == a) || O(a, f)) || c.push(a);
        return c
    }

    function E(n) {
        var t = n && n.constructor,
            e = "function" == typeof t && t.prototype || Ae;
        return n === e
    }

    function A(n, t) {
        return function(e) {
            return n(t(e))
        }
    }

    function T(n) {
        if (!E(n)) return Te(n);
        var t = [];
        for (var e in Object(n)) Fe.call(n, e) && "constructor" != e && t.push(e);
        return t
    }

    function B(n) {
        return d(n) ? L(n) : T(n)
    }

    function F(n) {
        var t = -1,
            e = n.length;
        return function() {
            return ++t < e ? {
                value: n[t],
                key: t
            } : null
        }
    }

    function I(n) {
        var t = -1;
        return function() {
            var e = n.next();
            return e.done ? null : (t++, {
                value: e.value,
                key: t
            })
        }
    }

    function _(n) {
        var t = B(n),
            e = -1,
            r = t.length;
        return function() {
            var u = t[++e];
            return e < r ? {
                value: n[u],
                key: u
            } : null
        }
    }

    function M(n) {
        if (d(n)) return F(n);
        var t = _t(n);
        return t ? I(t) : _(n)
    }

    function U(n) {
        return function() {
            if (null === n) throw new Error("Callback was already called.");
            var t = n;
            n = null, t.apply(this, arguments)
        }
    }

    function z(n) {
        return function(t, e, r) {
            function u(n, t) {
                if (f -= 1, n) c = !0, r(n);
                else {
                    if (t === Ft || c && f <= 0) return c = !0, r(null);
                    o()
                }
            }

            function o() {
                for (; f < n && !c;) {
                    var t = i();
                    if (null === t) return c = !0, void(f <= 0 && r(null));
                    f += 1, e(t.value, t.key, U(u))
                }
            }
            if (r = g(r || m), n <= 0 || !t) return r(null);
            var i = M(t),
                c = !1,
                f = 0;
            o()
        }
    }

    function P(n, t, e, r) {
        z(t)(n, a(e), r)
    }

    function V(n, t) {
        return function(e, r, u) {
            return n(e, t, r, u)
        }
    }

    function q(n, t, e) {
        function r(n, t) {
            n ? e(n) : ++o !== i && t !== Ft || e(null)
        }
        e = g(e || m);
        var u = 0,
            o = 0,
            i = n.length;
        for (0 === i && e(null); u < i; u++) t(n[u], u, U(r))
    }

    function D(n) {
        return function(t, e, r) {
            return n(_e, t, a(e), r)
        }
    }

    function R(n, t, e, r) {
        r = r || m, t = t || [];
        var u = [],
            o = 0,
            i = a(e);
        n(t, function(n, t, e) {
            var r = o++;
            i(n, function(n, t) {
                u[r] = t, e(n)
            })
        }, function(n) {
            r(n, u)
        })
    }

    function C(n) {
        return function(t, e, r, u) {
            return n(z(e), t, a(r), u)
        }
    }

    function $(n, t) {
        for (var e = -1, r = null == n ? 0 : n.length; ++e < r && t(n[e], e, n) !== !1;);
        return n
    }

    function W(n) {
        return function(t, e, r) {
            for (var u = -1, o = Object(t), i = r(t), c = i.length; c--;) {
                var f = i[n ? c : ++u];
                if (e(o[f], f, o) === !1) break
            }
            return t
        }
    }

    function N(n, t) {
        return n && De(n, t, B)
    }

    function Q(n, t, e, r) {
        for (var u = n.length, o = e + (r ? 1 : -1); r ? o-- : ++o < u;)
            if (t(n[o], o, n)) return o;
        return -1
    }

    function G(n) {
        return n !== n
    }

    function H(n, t, e) {
        for (var r = e - 1, u = n.length; ++r < u;)
            if (n[r] === t) return r;
        return -1
    }

    function J(n, t, e) {
        return t === t ? H(n, t, e) : Q(n, G, e)
    }

    function K(n, t) {
        for (var e = -1, r = null == n ? 0 : n.length, u = Array(r); ++e < r;) u[e] = t(n[e], e, n);
        return u
    }

    function X(n) {
        return "symbol" == typeof n || j(n) && h(n) == Ce
    }

    function Y(n) {
        if ("string" == typeof n) return n;
        if (qt(n)) return K(n, Y) + "";
        if (X(n)) return Ne ? Ne.call(n) : "";
        var t = n + "";
        return "0" == t && 1 / n == -$e ? "-0" : t
    }

    function Z(n, t, e) {
        var r = -1,
            u = n.length;
        t < 0 && (t = -t > u ? 0 : u + t), e = e > u ? u : e, e < 0 && (e += u), u = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = Array(u); ++r < u;) o[r] = n[r + t];
        return o
    }

    function nn(n, t, e) {
        var r = n.length;
        return e = void 0 === e ? r : e, !t && e >= r ? n : Z(n, t, e)
    }

    function tn(n, t) {
        for (var e = n.length; e-- && J(t, n[e], 0) > -1;);
        return e
    }

    function en(n, t) {
        for (var e = -1, r = n.length; ++e < r && J(t, n[e], 0) > -1;);
        return e
    }

    function rn(n) {
        return n.split("")
    }

    function un(n) {
        return Xe.test(n)
    }

    function on(n) {
        return n.match(vr) || []
    }

    function cn(n) {
        return un(n) ? on(n) : rn(n)
    }

    function fn(n) {
        return null == n ? "" : Y(n)
    }

    function an(n, t, e) {
        if (n = fn(n), n && (e || void 0 === t)) return n.replace(dr, "");
        if (!n || !(t = Y(t))) return n;
        var r = cn(n),
            u = cn(t),
            o = en(r, u),
            i = tn(r, u) + 1;
        return nn(r, o, i).join("")
    }

    function ln(n) {
        return n = n.toString().replace(jr, ""), n = n.match(mr)[2].replace(" ", ""), n = n ? n.split(gr) : [], n = n.map(function(n) {
            return an(n.replace(br, ""))
        })
    }

    function sn(n, t) {
        var e = {};
        N(n, function(n, t) {
            function r(t, e) {
                var r = K(u, function(n) {
                    return t[n]
                });
                r.push(e), a(n).apply(null, r)
            }
            var u, o = f(n),
                i = !o && 1 === n.length || o && 0 === n.length;
            if (qt(n)) u = n.slice(0, -1), n = n[n.length - 1], e[t] = u.concat(u.length > 0 ? r : n);
            else if (i) e[t] = n;
            else {
                if (u = ln(n), 0 === n.length && !o && 0 === u.length) throw new Error("autoInject task functions require explicit parameters.");
                o || u.pop(), e[t] = u.concat(r)
            }
        }), Re(e, t)
    }

    function pn() {
        this.head = this.tail = null, this.length = 0
    }

    function hn(n, t) {
        n.length = 1, n.head = n.tail = t
    }

    function yn(n, t, e) {
        function r(n, t, e) {
            if (null != e && "function" != typeof e) throw new Error("task callback must be a function");
            if (l.started = !0, qt(n) || (n = [n]), 0 === n.length && l.idle()) return st(function() {
                l.drain()
            });
            for (var r = 0, u = n.length; r < u; r++) {
                var o = {
                    data: n[r],
                    callback: e || m
                };
                t ? l._tasks.unshift(o) : l._tasks.push(o)
            }
            st(l.process)
        }

        function u(n) {
            return function(t) {
                i -= 1;
                for (var e = 0, r = n.length; e < r; e++) {
                    var u = n[e],
                        o = J(c, u, 0);
                    o >= 0 && c.splice(o), u.callback.apply(u, arguments), null != t && l.error(t, u.data)
                }
                i <= l.concurrency - l.buffer && l.unsaturated(), l.idle() && l.drain(), l.process()
            }
        }
        if (null == t) t = 1;
        else if (0 === t) throw new Error("Concurrency must not be zero");
        var o = a(n),
            i = 0,
            c = [],
            f = !1,
            l = {
                _tasks: new pn,
                concurrency: t,
                payload: e,
                saturated: m,
                unsaturated: m,
                buffer: t / 4,
                empty: m,
                drain: m,
                error: m,
                started: !1,
                paused: !1,
                push: function(n, t) {
                    r(n, !1, t)
                },
                kill: function() {
                    l.drain = m, l._tasks.empty()
                },
                unshift: function(n, t) {
                    r(n, !0, t)
                },
                remove: function(n) {
                    l._tasks.remove(n)
                },
                process: function() {
                    if (!f) {
                        for (f = !0; !l.paused && i < l.concurrency && l._tasks.length;) {
                            var n = [],
                                t = [],
                                e = l._tasks.length;
                            l.payload && (e = Math.min(e, l.payload));
                            for (var r = 0; r < e; r++) {
                                var a = l._tasks.shift();
                                n.push(a), t.push(a.data)
                            }
                            i += 1, c.push(n[0]), 0 === l._tasks.length && l.empty(), i === l.concurrency && l.saturated();
                            var s = U(u(n));
                            o(t, s)
                        }
                        f = !1
                    }
                },
                length: function() {
                    return l._tasks.length
                },
                running: function() {
                    return i
                },
                workersList: function() {
                    return c
                },
                idle: function() {
                    return l._tasks.length + i === 0
                },
                pause: function() {
                    l.paused = !0
                },
                resume: function() {
                    l.paused !== !1 && (l.paused = !1, st(l.process))
                }
            };
        return l
    }

    function vn(n, t) {
        return yn(n, 1, t)
    }

    function dn(n, t, e, r) {
        r = g(r || m);
        var u = a(e);
        kr(n, function(n, e, r) {
            u(t, n, function(n, e) {
                t = e, r(n)
            })
        }, function(n) {
            r(n, t)
        })
    }

    function mn() {
        var n = K(arguments, a);
        return function() {
            var e = t(arguments),
                r = this,
                u = e[e.length - 1];
            "function" == typeof u ? e.pop() : u = m, dn(n, e, function(n, e, u) {
                e.apply(r, n.concat(function(n) {
                    var e = t(arguments, 1);
                    u(n, e)
                }))
            }, function(n, t) {
                u.apply(r, [n].concat(t))
            })
        }
    }

    function gn(n, t, e, r) {
        var u = [];
        n(t, function(n, t, r) {
            e(n, function(n, t) {
                u = u.concat(t || []), r(n)
            })
        }, function(n) {
            r(n, u)
        })
    }

    function bn(n) {
        return function(t, e, r) {
            return n(kr, t, a(e), r)
        }
    }

    function jn(n) {
        return n
    }

    function Sn(n, t) {
        return function(e, r, u, o) {
            o = o || m;
            var i, c = !1;
            e(r, function(e, r, o) {
                u(e, function(r, u) {
                    r ? o(r) : n(u) && !i ? (c = !0, i = t(!0, e), o(null, Ft)) : o()
                })
            }, function(n) {
                n ? o(n) : o(null, c ? i : t(!1))
            })
        }
    }

    function kn(n, t) {
        return t
    }

    function On(n) {
        return function(e) {
            var r = t(arguments, 1);
            r.push(function(e) {
                var r = t(arguments, 1);
                "object" == typeof console && (e ? console.error && console.error(e) : console[n] && $(r, function(t) {
                    console[n](t)
                }))
            }), a(e).apply(null, r)
        }
    }

    function wn(n, e, r) {
        function u(n) {
            if (n) return r(n);
            var e = t(arguments, 1);
            e.push(o), c.apply(this, e)
        }

        function o(n, t) {
            return n ? r(n) : t ? void i(u) : r(null)
        }
        r = U(r || m);
        var i = a(n),
            c = a(e);
        o(null, !0)
    }

    function xn(n, e, r) {
        r = U(r || m);
        var u = a(n),
            o = function(n) {
                if (n) return r(n);
                var i = t(arguments, 1);
                return e.apply(this, i) ? u(o) : void r.apply(null, [null].concat(i))
            };
        u(o)
    }

    function Ln(n, t, e) {
        xn(n, function() {
            return !t.apply(this, arguments)
        }, e)
    }

    function En(n, t, e) {
        function r(n) {
            return n ? e(n) : void i(u)
        }

        function u(n, t) {
            return n ? e(n) : t ? void o(r) : e(null)
        }
        e = U(e || m);
        var o = a(t),
            i = a(n);
        i(u)
    }

    function An(n) {
        return function(t, e, r) {
            return n(t, r)
        }
    }

    function Tn(n, t, e) {
        _e(n, An(a(t)), e)
    }

    function Bn(n, t, e, r) {
        z(t)(n, An(a(e)), r)
    }

    function Fn(n) {
        return f(n) ? n : ft(function(t, e) {
            var r = !0;
            t.push(function() {
                var n = arguments;
                r ? st(function() {
                    e.apply(null, n)
                }) : e.apply(null, n)
            }), n.apply(this, t), r = !1
        })
    }

    function In(n) {
        return !n
    }

    function _n(n) {
        return function(t) {
            return null == t ? void 0 : t[n]
        }
    }

    function Mn(n, t, e, r) {
        var u = new Array(t.length);
        n(t, function(n, t, r) {
            e(n, function(n, e) {
                u[t] = !! e, r(n)
            })
        }, function(n) {
            if (n) return r(n);
            for (var e = [], o = 0; o < t.length; o++) u[o] && e.push(t[o]);
            r(null, e)
        })
    }

    function Un(n, t, e, r) {
        var u = [];
        n(t, function(n, t, r) {
            e(n, function(e, o) {
                e ? r(e) : (o && u.push({
                    index: t,
                    value: n
                }), r())
            })
        }, function(n) {
            n ? r(n) : r(null, K(u.sort(function(n, t) {
                return n.index - t.index
            }), _n("value")))
        })
    }

    function zn(n, t, e, r) {
        var u = d(t) ? Mn : Un;
        u(n, t, a(e), r || m)
    }

    function Pn(n, t) {
        function e(n) {
            return n ? r(n) : void u(e)
        }
        var r = U(t || m),
            u = a(Fn(n));
        e()
    }

    function Vn(n, t, e, r) {
        r = g(r || m);
        var u = {}, o = a(e);
        P(n, t, function(n, t, e) {
            o(n, t, function(n, r) {
                return n ? e(n) : (u[t] = r, void e())
            })
        }, function(n) {
            r(n, u)
        })
    }

    function qn(n, t) {
        return t in n
    }

    function Dn(n, e) {
        var r = Object.create(null),
            u = Object.create(null);
        e = e || jn;
        var o = a(n),
            i = ft(function(n, i) {
                var c = e.apply(null, n);
                qn(r, c) ? st(function() {
                    i.apply(null, r[c])
                }) : qn(u, c) ? u[c].push(i) : (u[c] = [i], o.apply(null, n.concat(function() {
                    var n = t(arguments);
                    r[c] = n;
                    var e = u[c];
                    delete u[c];
                    for (var o = 0, i = e.length; o < i; o++) e[o].apply(null, n)
                })))
            });
        return i.memo = r, i.unmemoized = n, i
    }

    function Rn(n, e, r) {
        r = r || m;
        var u = d(e) ? [] : {};
        n(e, function(n, e, r) {
            a(n)(function(n, o) {
                arguments.length > 2 && (o = t(arguments, 1)), u[e] = o, r(n)
            })
        }, function(n) {
            r(n, u)
        })
    }

    function Cn(n, t) {
        Rn(_e, n, t)
    }

    function $n(n, t, e) {
        Rn(z(t), n, e)
    }

    function Wn(n, t) {
        if (t = g(t || m), !qt(n)) return t(new TypeError("First argument to race must be an array of functions"));
        if (!n.length) return t();
        for (var e = 0, r = n.length; e < r; e++) a(n[e])(t)
    }

    function Nn(n, e, r, u) {
        var o = t(n).reverse();
        dn(o, e, r, u)
    }

    function Qn(n) {
        var e = a(n);
        return ft(function(n, r) {
            return n.push(function(n, e) {
                if (n) r(null, {
                    error: n
                });
                else {
                    var u;
                    u = arguments.length <= 2 ? e : t(arguments, 1), r(null, {
                        value: u
                    })
                }
            }), e.apply(this, n)
        })
    }

    function Gn(n, t, e, r) {
        zn(n, t, function(n, t) {
            e(n, function(n, e) {
                t(n, !e)
            })
        }, r)
    }

    function Hn(n) {
        var t;
        return qt(n) ? t = K(n, Qn) : (t = {}, N(n, function(n, e) {
            t[e] = Qn.call(this, n)
        })), t
    }

    function Jn(n) {
        return function() {
            return n
        }
    }

    function Kn(n, t, e) {
        function r(n, t) {
            if ("object" == typeof t) n.times = +t.times || o, n.intervalFunc = "function" == typeof t.interval ? t.interval : Jn(+t.interval || i), n.errorFilter = t.errorFilter;
            else {
                if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid arguments for async.retry");
                n.times = +t || o
            }
        }

        function u() {
            f(function(n) {
                n && l++ < c.times && ("function" != typeof c.errorFilter || c.errorFilter(n)) ? setTimeout(u, c.intervalFunc(l)) : e.apply(null, arguments)
            })
        }
        var o = 5,
            i = 0,
            c = {
                times: o,
                intervalFunc: Jn(i)
            };
        if (arguments.length < 3 && "function" == typeof n ? (e = t || m, t = n) : (r(c, n), e = e || m), "function" != typeof t) throw new Error("Invalid arguments for async.retry");
        var f = a(t),
            l = 1;
        u()
    }

    function Xn(n, t) {
        Rn(kr, n, t)
    }

    function Yn(n, t, e) {
        function r(n, t) {
            var e = n.criteria,
                r = t.criteria;
            return e < r ? -1 : e > r ? 1 : 0
        }
        var u = a(t);
        Me(n, function(n, t) {
            u(n, function(e, r) {
                return e ? t(e) : void t(null, {
                    value: n,
                    criteria: r
                })
            })
        }, function(n, t) {
            return n ? e(n) : void e(null, K(t.sort(r), _n("value")))
        })
    }

    function Zn(n, t, e) {
        var r = a(n);
        return ft(function(u, o) {
            function i() {
                var t = n.name || "anonymous",
                    r = new Error('Callback function "' + t + '" timed out.');
                r.code = "ETIMEDOUT", e && (r.info = e), f = !0, o(r)
            }
            var c, f = !1;
            u.push(function() {
                f || (o.apply(null, arguments), clearTimeout(c))
            }), c = setTimeout(i, t), r.apply(null, u)
        })
    }

    function nt(n, t, e, r) {
        for (var u = -1, o = tu(nu((t - n) / (e || 1)), 0), i = Array(o); o--;) i[r ? o : ++u] = n, n += e;
        return i
    }

    function tt(n, t, e, r) {
        var u = a(e);
        ze(nt(0, n, 1), t, u, r)
    }

    function et(n, t, e, r) {
        arguments.length <= 3 && (r = e, e = t, t = qt(n) ? [] : {}), r = g(r || m);
        var u = a(e);
        _e(n, function(n, e, r) {
            u(t, n, e, r)
        }, function(n) {
            r(n, t)
        })
    }

    function rt(n, e) {
        var r, u = null;
        e = e || m, Fr(n, function(n, e) {
            a(n)(function(n, o) {
                r = arguments.length > 2 ? t(arguments, 1) : o, u = n, e(!n)
            })
        }, function() {
            e(u, r)
        })
    }

    function ut(n) {
        return function() {
            return (n.unmemoized || n).apply(null, arguments)
        }
    }

    function ot(n, e, r) {
        r = U(r || m);
        var u = a(e);
        if (!n()) return r(null);
        var o = function(e) {
            if (e) return r(e);
            if (n()) return u(o);
            var i = t(arguments, 1);
            r.apply(null, [null].concat(i))
        };
        u(o)
    }

    function it(n, t, e) {
        ot(function() {
            return !n.apply(this, arguments)
        }, t, e)
    }
    var ct, ft = function(n) {
            return function() {
                var e = t(arguments),
                    r = e.pop();
                n.call(this, e, r)
            }
        }, at = "function" == typeof setImmediate && setImmediate,
        lt = "object" == typeof process && "function" == typeof process.nextTick;
    ct = at ? setImmediate : lt ? process.nextTick : r;
    var st = u(ct),
        pt = "function" == typeof Symbol,
        ht = "object" == typeof global && global && global.Object === Object && global,
        yt = "object" == typeof self && self && self.Object === Object && self,
        vt = ht || yt || Function("return this")(),
        dt = vt.Symbol,
        mt = Object.prototype,
        gt = mt.hasOwnProperty,
        bt = mt.toString,
        jt = dt ? dt.toStringTag : void 0,
        St = Object.prototype,
        kt = St.toString,
        Ot = "[object Null]",
        wt = "[object Undefined]",
        xt = dt ? dt.toStringTag : void 0,
        Lt = "[object AsyncFunction]",
        Et = "[object Function]",
        At = "[object GeneratorFunction]",
        Tt = "[object Proxy]",
        Bt = 9007199254740991,
        Ft = {}, It = "function" == typeof Symbol && Symbol.iterator,
        _t = function(n) {
            return It && n[It] && n[It]()
        }, Mt = "[object Arguments]",
        Ut = Object.prototype,
        zt = Ut.hasOwnProperty,
        Pt = Ut.propertyIsEnumerable,
        Vt = S(function() {
            return arguments
        }()) ? S : function(n) {
            return j(n) && zt.call(n, "callee") && !Pt.call(n, "callee")
        }, qt = Array.isArray,
        Dt = "object" == typeof n && n && !n.nodeType && n,
        Rt = Dt && "object" == typeof module && module && !module.nodeType && module,
        Ct = Rt && Rt.exports === Dt,
        $t = Ct ? vt.Buffer : void 0,
        Wt = $t ? $t.isBuffer : void 0,
        Nt = Wt || k,
        Qt = 9007199254740991,
        Gt = /^(?:0|[1-9]\d*)$/,
        Ht = "[object Arguments]",
        Jt = "[object Array]",
        Kt = "[object Boolean]",
        Xt = "[object Date]",
        Yt = "[object Error]",
        Zt = "[object Function]",
        ne = "[object Map]",
        te = "[object Number]",
        ee = "[object Object]",
        re = "[object RegExp]",
        ue = "[object Set]",
        oe = "[object String]",
        ie = "[object WeakMap]",
        ce = "[object ArrayBuffer]",
        fe = "[object DataView]",
        ae = "[object Float32Array]",
        le = "[object Float64Array]",
        se = "[object Int8Array]",
        pe = "[object Int16Array]",
        he = "[object Int32Array]",
        ye = "[object Uint8Array]",
        ve = "[object Uint8ClampedArray]",
        de = "[object Uint16Array]",
        me = "[object Uint32Array]",
        ge = {};
    ge[ae] = ge[le] = ge[se] = ge[pe] = ge[he] = ge[ye] = ge[ve] = ge[de] = ge[me] = !0, ge[Ht] = ge[Jt] = ge[ce] = ge[Kt] = ge[fe] = ge[Xt] = ge[Yt] = ge[Zt] = ge[ne] = ge[te] = ge[ee] = ge[re] = ge[ue] = ge[oe] = ge[ie] = !1;
    var be = "object" == typeof n && n && !n.nodeType && n,
        je = be && "object" == typeof module && module && !module.nodeType && module,
        Se = je && je.exports === be,
        ke = Se && ht.process,
        Oe = function() {
            try {
                return ke && ke.binding("util")
            } catch (n) {}
        }(),
        we = Oe && Oe.isTypedArray,
        xe = we ? x(we) : w,
        Le = Object.prototype,
        Ee = Le.hasOwnProperty,
        Ae = Object.prototype,
        Te = A(Object.keys, Object),
        Be = Object.prototype,
        Fe = Be.hasOwnProperty,
        Ie = V(P, 1 / 0),
        _e = function(n, t, e) {
            var r = d(n) ? q : Ie;
            r(n, a(t), e)
        }, Me = D(R),
        Ue = l(Me),
        ze = C(R),
        Pe = V(ze, 1),
        Ve = l(Pe),
        qe = function(n) {
            var e = t(arguments, 1);
            return function() {
                var r = t(arguments);
                return n.apply(null, e.concat(r))
            }
        }, De = W(),
        Re = function(n, e, r) {
            function u(n, t) {
                j.push(function() {
                    f(n, t)
                })
            }

            function o() {
                if (0 === j.length && 0 === v) return r(null, y);
                for (; j.length && v < e;) {
                    var n = j.shift();
                    n()
                }
            }

            function i(n, t) {
                var e = b[n];
                e || (e = b[n] = []), e.push(t)
            }

            function c(n) {
                var t = b[n] || [];
                $(t, function(n) {
                    n()
                }), o()
            }

            function f(n, e) {
                if (!d) {
                    var u = U(function(e, u) {
                        if (v--, arguments.length > 2 && (u = t(arguments, 1)), e) {
                            var o = {};
                            N(y, function(n, t) {
                                o[t] = n
                            }), o[n] = u, d = !0, b = Object.create(null), r(e, o)
                        } else y[n] = u, c(n)
                    });
                    v++;
                    var o = a(e[e.length - 1]);
                    e.length > 1 ? o(y, u) : o(u)
                }
            }

            function l() {
                for (var n, t = 0; S.length;) n = S.pop(), t++, $(s(n), function(n) {
                    0 === --k[n] && S.push(n)
                });
                if (t !== h) throw new Error("async.auto cannot execute tasks due to a recursive dependency")
            }

            function s(t) {
                var e = [];
                return N(n, function(n, r) {
                    qt(n) && J(n, t, 0) >= 0 && e.push(r)
                }), e
            }
            "function" == typeof e && (r = e, e = null), r = g(r || m);
            var p = B(n),
                h = p.length;
            if (!h) return r(null);
            e || (e = h);
            var y = {}, v = 0,
                d = !1,
                b = Object.create(null),
                j = [],
                S = [],
                k = {};
            N(n, function(t, e) {
                if (!qt(t)) return u(e, [t]), void S.push(e);
                var r = t.slice(0, t.length - 1),
                    o = r.length;
                return 0 === o ? (u(e, t), void S.push(e)) : (k[e] = o, void $(r, function(c) {
                    if (!n[c]) throw new Error("async.auto task `" + e + "` has a non-existent dependency `" + c + "` in " + r.join(", "));
                    i(c, function() {
                        o--, 0 === o && u(e, t)
                    })
                }))
            }), l(), o()
        }, Ce = "[object Symbol]",
        $e = 1 / 0,
        We = dt ? dt.prototype : void 0,
        Ne = We ? We.toString : void 0,
        Qe = "\\ud800-\\udfff",
        Ge = "\\u0300-\\u036f\\ufe20-\\ufe23",
        He = "\\u20d0-\\u20f0",
        Je = "\\ufe0e\\ufe0f",
        Ke = "\\u200d",
        Xe = RegExp("[" + Ke + Qe + Ge + He + Je + "]"),
        Ye = "\\ud800-\\udfff",
        Ze = "\\u0300-\\u036f\\ufe20-\\ufe23",
        nr = "\\u20d0-\\u20f0",
        tr = "\\ufe0e\\ufe0f",
        er = "[" + Ye + "]",
        rr = "[" + Ze + nr + "]",
        ur = "\\ud83c[\\udffb-\\udfff]",
        or = "(?:" + rr + "|" + ur + ")",
        ir = "[^" + Ye + "]",
        cr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        fr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        ar = "\\u200d",
        lr = or + "?",
        sr = "[" + tr + "]?",
        pr = "(?:" + ar + "(?:" + [ir, cr, fr].join("|") + ")" + sr + lr + ")*",
        hr = sr + lr + pr,
        yr = "(?:" + [ir + rr + "?", rr, cr, fr, er].join("|") + ")",
        vr = RegExp(ur + "(?=" + ur + ")|" + yr + hr, "g"),
        dr = /^\s+|\s+$/g,
        mr = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,
        gr = /,/,
        br = /(=.+)?(\s*)$/,
        jr = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    pn.prototype.removeLink = function(n) {
        return n.prev ? n.prev.next = n.next : this.head = n.next, n.next ? n.next.prev = n.prev : this.tail = n.prev, n.prev = n.next = null, this.length -= 1, n
    }, pn.prototype.empty = function() {
        for (; this.head;) this.shift();
        return this
    }, pn.prototype.insertAfter = function(n, t) {
        t.prev = n, t.next = n.next, n.next ? n.next.prev = t : this.tail = t, n.next = t, this.length += 1
    }, pn.prototype.insertBefore = function(n, t) {
        t.prev = n.prev, t.next = n, n.prev ? n.prev.next = t : this.head = t, n.prev = t, this.length += 1
    }, pn.prototype.unshift = function(n) {
        this.head ? this.insertBefore(this.head, n) : hn(this, n)
    }, pn.prototype.push = function(n) {
        this.tail ? this.insertAfter(this.tail, n) : hn(this, n)
    }, pn.prototype.shift = function() {
        return this.head && this.removeLink(this.head)
    }, pn.prototype.pop = function() {
        return this.tail && this.removeLink(this.tail)
    }, pn.prototype.toArray = function() {
        for (var n = Array(this.length), t = this.head, e = 0; e < this.length; e++) n[e] = t.data, t = t.next;
        return n
    }, pn.prototype.remove = function(n) {
        for (var t = this.head; t;) {
            var e = t.next;
            n(t) && this.removeLink(t), t = e
        }
        return this
    };
    var Sr, kr = V(P, 1),
        Or = function() {
            return mn.apply(null, t(arguments).reverse())
        }, wr = D(gn),
        xr = bn(gn),
        Lr = function() {
            var n = t(arguments),
                e = [null].concat(n);
            return function() {
                var n = arguments[arguments.length - 1];
                return n.apply(this, e)
            }
        }, Er = D(Sn(jn, kn)),
        Ar = C(Sn(jn, kn)),
        Tr = V(Ar, 1),
        Br = On("dir"),
        Fr = V(Bn, 1),
        Ir = D(Sn(In, In)),
        _r = C(Sn(In, In)),
        Mr = V(_r, 1),
        Ur = D(zn),
        zr = C(zn),
        Pr = V(zr, 1),
        Vr = function(n, t, e, r) {
            r = r || m;
            var u = a(e);
            ze(n, t, function(n, t) {
                u(n, function(e, r) {
                    return e ? t(e) : t(null, {
                        key: r,
                        val: n
                    })
                })
            }, function(n, t) {
                for (var e = {}, u = Object.prototype.hasOwnProperty, o = 0; o < t.length; o++)
                    if (t[o]) {
                        var i = t[o].key,
                            c = t[o].val;
                        u.call(e, i) ? e[i].push(c) : e[i] = [c]
                    }
                return r(n, e)
            })
        }, qr = V(Vr, 1 / 0),
        Dr = V(Vr, 1),
        Rr = On("log"),
        Cr = V(Vn, 1 / 0),
        $r = V(Vn, 1);
    Sr = lt ? process.nextTick : at ? setImmediate : r;
    var Wr = u(Sr),
        Nr = function(n, t) {
            var e = a(n);
            return yn(function(n, t) {
                e(n[0], t)
            }, t, 1)
        }, Qr = function(n, t) {
            var e = Nr(n, t);
            return e.push = function(n, t, r) {
                if (null == r && (r = m), "function" != typeof r) throw new Error("task callback must be a function");
                if (e.started = !0, qt(n) || (n = [n]), 0 === n.length) return st(function() {
                    e.drain()
                });
                t = t || 0;
                for (var u = e._tasks.head; u && t >= u.priority;) u = u.next;
                for (var o = 0, i = n.length; o < i; o++) {
                    var c = {
                        data: n[o],
                        priority: t,
                        callback: r
                    };
                    u ? e._tasks.insertBefore(u, c) : e._tasks.push(c)
                }
                st(e.process)
            }, delete e.unshift, e
        }, Gr = D(Gn),
        Hr = C(Gn),
        Jr = V(Hr, 1),
        Kr = function(n, t) {
            t || (t = n, n = null);
            var e = a(t);
            return ft(function(t, r) {
                function u(n) {
                    e.apply(null, t.concat(n))
                }
                n ? Kn(n, u, r) : Kn(u, r)
            })
        }, Xr = D(Sn(Boolean, jn)),
        Yr = C(Sn(Boolean, jn)),
        Zr = V(Yr, 1),
        nu = Math.ceil,
        tu = Math.max,
        eu = V(tt, 1 / 0),
        ru = V(tt, 1),
        uu = function(n, e) {
            function r(t) {
                var e = a(n[o++]);
                t.push(U(u)), e.apply(null, t)
            }

            function u(u) {
                return u || o === n.length ? e.apply(null, arguments) : void r(t(arguments, 1))
            }
            if (e = g(e || m), !qt(n)) return e(new Error("First argument to waterfall must be an array of functions"));
            if (!n.length) return e();
            var o = 0;
            r([])
        }, ou = {
            applyEach: Ue,
            applyEachSeries: Ve,
            apply: qe,
            asyncify: o,
            auto: Re,
            autoInject: sn,
            cargo: vn,
            compose: Or,
            concat: wr,
            concatSeries: xr,
            constant: Lr,
            detect: Er,
            detectLimit: Ar,
            detectSeries: Tr,
            dir: Br,
            doDuring: wn,
            doUntil: Ln,
            doWhilst: xn,
            during: En,
            each: Tn,
            eachLimit: Bn,
            eachOf: _e,
            eachOfLimit: P,
            eachOfSeries: kr,
            eachSeries: Fr,
            ensureAsync: Fn,
            every: Ir,
            everyLimit: _r,
            everySeries: Mr,
            filter: Ur,
            filterLimit: zr,
            filterSeries: Pr,
            forever: Pn,
            groupBy: qr,
            groupByLimit: Vr,
            groupBySeries: Dr,
            log: Rr,
            map: Me,
            mapLimit: ze,
            mapSeries: Pe,
            mapValues: Cr,
            mapValuesLimit: Vn,
            mapValuesSeries: $r,
            memoize: Dn,
            nextTick: Wr,
            parallel: Cn,
            parallelLimit: $n,
            priorityQueue: Qr,
            queue: Nr,
            race: Wn,
            reduce: dn,
            reduceRight: Nn,
            reflect: Qn,
            reflectAll: Hn,
            reject: Gr,
            rejectLimit: Hr,
            rejectSeries: Jr,
            retry: Kn,
            retryable: Kr,
            seq: mn,
            series: Xn,
            setImmediate: st,
            some: Xr,
            someLimit: Yr,
            someSeries: Zr,
            sortBy: Yn,
            timeout: Zn,
            times: eu,
            timesLimit: tt,
            timesSeries: ru,
            transform: et,
            tryEach: rt,
            unmemoize: ut,
            until: it,
            waterfall: uu,
            whilst: ot,
            all: Ir,
            any: Xr,
            forEach: Tn,
            forEachSeries: Fr,
            forEachLimit: Bn,
            forEachOf: _e,
            forEachOfSeries: kr,
            forEachOfLimit: P,
            inject: dn,
            foldl: dn,
            foldr: Nn,
            select: Ur,
            selectLimit: zr,
            selectSeries: Pr,
            wrapSync: o
        };
    n.
    default = ou, n.applyEach = Ue, n.applyEachSeries = Ve, n.apply = qe, n.asyncify = o, n.auto = Re, n.autoInject = sn, n.cargo = vn, n.compose = Or, n.concat = wr, n.concatSeries = xr, n.constant = Lr, n.detect = Er, n.detectLimit = Ar, n.detectSeries = Tr, n.dir = Br, n.doDuring = wn, n.doUntil = Ln, n.doWhilst = xn, n.during = En, n.each = Tn, n.eachLimit = Bn, n.eachOf = _e, n.eachOfLimit = P, n.eachOfSeries = kr, n.eachSeries = Fr, n.ensureAsync = Fn, n.every = Ir, n.everyLimit = _r, n.everySeries = Mr, n.filter = Ur, n.filterLimit = zr, n.filterSeries = Pr, n.forever = Pn, n.groupBy = qr, n.groupByLimit = Vr, n.groupBySeries = Dr, n.log = Rr, n.map = Me, n.mapLimit = ze, n.mapSeries = Pe, n.mapValues = Cr, n.mapValuesLimit = Vn, n.mapValuesSeries = $r, n.memoize = Dn, n.nextTick = Wr, n.parallel = Cn, n.parallelLimit = $n, n.priorityQueue = Qr, n.queue = Nr, n.race = Wn, n.reduce = dn, n.reduceRight = Nn, n.reflect = Qn, n.reflectAll = Hn, n.reject = Gr, n.rejectLimit = Hr, n.rejectSeries = Jr, n.retry = Kn, n.retryable = Kr, n.seq = mn, n.series = Xn, n.setImmediate = st, n.some = Xr, n.someLimit = Yr, n.someSeries = Zr, n.sortBy = Yn, n.timeout = Zn, n.times = eu, n.timesLimit = tt, n.timesSeries = ru, n.transform = et, n.tryEach = rt, n.unmemoize = ut, n.until = it, n.waterfall = uu, n.whilst = ot, n.all = Ir, n.allLimit = _r, n.allSeries = Mr, n.any = Xr, n.anyLimit = Yr, n.anySeries = Zr, n.find = Er, n.findLimit = Ar, n.findSeries = Tr, n.forEach = Tn, n.forEachSeries = Fr, n.forEachLimit = Bn, n.forEachOf = _e, n.forEachOfSeries = kr, n.forEachOfLimit = P, n.inject = dn, n.foldl = dn, n.foldr = Nn, n.select = Ur, n.selectLimit = zr, n.selectSeries = Pr, n.wrapSync = o, Object.defineProperty(n, "__esModule", {
        value: !0
    })
});//# sourceMappingURL=async.min.map
!(function(window, undefined) {

 //Opt analytics cookie
 function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
  // Cookie 
  function extend () {
    var i = 0;
    var result = {};
    for (; i < arguments.length; i++) {
      var attributes = arguments[ i ];
      for (var key in attributes) {
        result[key] = attributes[key];
      }
    }
    return result;
  }
  function myCookie (converter) {
    function api (key, value, attributes) {
      var result;
      if (typeof document === 'undefined') {
        return;
      }

      // Write

      if (arguments.length > 1) {
        attributes = extend({
          path: '/'
        }, api.defaults, attributes);

        if (typeof attributes.expires === 'number') {
          var expires = new Date();
          expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
          attributes.expires = expires;
        }

        // We're using "expires" because "max-age" is not supported by IE
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

        try {
          result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {}

        if (!converter.write) {
          value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        } else {
          value = converter.write(value, key);
        }

        key = encodeURIComponent(String(key));
        key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
        key = key.replace(/[\(\)]/g, escape);

        var stringifiedAttributes = '';

        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += '; ' + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += '=' + attributes[attributeName];
        }
        return (document.cookie = key + '=' + value + stringifiedAttributes);
      }

      // Read

      if (!key) {
        result = {};
      }

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling "get()"
      var cookies = document.cookie ? document.cookie.split('; ') : [];
      var rdecode = /(%[0-9A-Z]{2})+/g;
      var i = 0;

      for (; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');

        if (cookie.charAt(0) === '"') {
          cookie = cookie.slice(1, -1);
        }

        try {
          var name = parts[0].replace(rdecode, decodeURIComponent);
          cookie = converter.read ?
            converter.read(cookie, name) : converter(cookie, name) ||
            cookie.replace(rdecode, decodeURIComponent);

          if (this.json) {
            try {
              cookie = JSON.parse(cookie);
            } catch (e) {}
          }

          if (key === name) {
            result = cookie;
            break;
          }

          if (!key) {
            result[name] = cookie;
          }
        } catch (e) {}
      }

      return result;
    }

    api.set = api;
    api.get = function (key) {
      return api.call(api, key);
    };
    api.getJSON = function () {
      return api.apply({
        json: true
      }, [].slice.call(arguments));
    };
    api.defaults = {};

    api.remove = function (key, attributes) {
      api(key, '', extend(attributes, {
        expires: -1
      }));
    };

    api.withConverter = myCookie;

    return api;
  }
   
   //Create XHR 
   function Xhr() {

   }
   
  
  Xhr.prototype.post = function(url,data,callback){
    console.log('writeKey',oanalytics.xhr.writeKey)
      if(data && oanalytics.xhr && oanalytics.xhr.writeKey) data.apiKey = this.writeKey;
     //  console.log('data1',data)
     //  $.ajax({
     //    url: url,
     //    data: JSON.stringify(data),
     //    type: "POST",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
      var xhr = new XMLHttpRequest();
      var async = true;
      if(data.async === false) async = false;
      xhr.open('POST', url, async);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.setRequestHeader('Accept','application/json')
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send(JSON.stringify(data));
    }
     Xhr.prototype.delete = function(url,callback){
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send();

     //  $.ajax({
     //    url: url,
     //    type: "DELETE",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }
    Xhr.prototype.put = function(url,data,callback){
      if(data && this.apiKey) data.apiKey = this.apiKey;

      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send(JSON.stringify(data));
     //  $.ajax({
     //    url: url,
     //    data: JSON.stringify(data),
     //    headers:this.headers,
     //    type: "PUT",
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }
    Xhr.prototype.get = function(url,callback){
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function () {
          // do something to response
         if(this.responseText){
           if(typeof callback == 'function') callback(null,JSON.parse(this.responseText)) 
         }else{
           if(typeof callback == 'function') callback({}) 
         }
      };
      xhr.send();
     //  $.ajax({
     //    url: url,
     //    type: "GET",
     //    headers:this.headers,
     //    success: function(data) {
     //      if(typeof callback == 'function') callback(null,data)      
     //    },
     //    error:function(error){
     //      if(typeof callback == 'function') callback(error)
     //    }
     // });
    }

var noop = function(){};
function Validate(){

}

function Analytics ( options) {
  var that = this;
  this.queue = async.queue(function(message, callback) {
      that.makeRequest(message,callback)
  }, 2);
  options = options || {}
  this.host = options.host || 'http://localhost:3001/';
  this.xhr = new Xhr();
  this.Cookies = myCookie(function(){});
  this.xhr.headers = {
    Accept:'application/json',
    'Content-Type':'application/json'
  }
  this.authorized = false;
  this.cookieinfo = {user:'oajs_user_id',anonymous:'oajs_anonymous_id'};
  var that = this;
  function checkCookieExist(){
    if(! that.Cookies.get(that.cookieinfo.anonymous)){
      that.anonymous({ip:window.location.host},function(err,anonymous){
        console.log('anonymous',anonymous)
        if(anonymous)  that.Cookies.set(that.cookieinfo['anonymous'],anonymous._id);
      })
      
    }
    if(!that.Cookies.get(that.cookieinfo['user']) && getParameterByName('email') && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(getParameterByName('email'))){
       that.identify(getParameterByName('email'),{},function(err,data){
         if(data && typeof data == 'object') that.Cookies.set(that.cookieinfo['user'],getParameterByName('email'))
       })
    }
  }
  function setAtuhorize (){
    that.authorized = true;
    checkCookieExist();
  }
  this.makeAuthorize = function(){
    that.xhr.writeKey = that.writeKey;
    setAtuhorize();
  }
}
Analytics.prototype.load = function(apiKey,fn){
  this.writeKey = apiKey;

  this.xhr.post(this.host + 'oa/validate',{apiKey:apiKey,async:false},function(err,data){
    if(data && data.valid) this.makeAuthorize()

  }.bind(this));
  
  //Here load api to authticate
}
Analytics.prototype.identify = function (contactId,properties, fn) {
  var that = this;
  this.enqueue('identify', {contactId:contactId,properties:properties,anonymous:this.Cookies.get(this.cookieinfo.anonymous)},function(err,data){
    if(data && typeof data == 'object') that.Cookies.set(that.cookieinfo.user,data.contactId)
  })
  return this
}
Analytics.prototype.reset = function (fn) {
  var that = this;
  that.Cookies.remove(that.cookieinfo['user'])
  return this
}
Analytics.prototype.group = function (groupId , properties, fn) {
  // validate(message, 'group')
  if(that.Cookies.get(this.cookieinfo.user)){
    this.enqueue('group',{contactId :that.Cookies.get(this.cookieinfo.user),groupId:groupId,properties:properties},fn)
  }
  return this;
}
Analytics.prototype.page = function (name,data ,fn) {
  if(!name) name = window.location.href;
  var message = {name:name,properties:data};
  var that = this;
  message.activity_type = 'page';
  if(that.Cookies.set('oajs_user_id')){
    message.contactId = that.Cookies.set('oajs_user_id')
  }else{
    message.anonymous = that.Cookies.set('oajs_anonymous_id')
  }
  this.enqueue('page', message, fn)
  return this
}
Analytics.prototype.anonymous = function(properties,callback){
   this.xhr.post(this.host + 'api/anonymous' ,properties,callback)
  
}
Analytics.prototype.track = function (name,properties, fn) {
  // validate(message, 'track')
  var that = this;
  var message = {name:name,properties:properties};
  message.activity_type = 'track';
  if(that.Cookies.set('oajs_user_id')){
    message.contactId = that.Cookies.set('oajs_user_id')
  }else{
    message.anonymous = that.Cookies.set('oajs_anonymous_id')
  }
  this.enqueue('track', message, fn)
  return this
}
Analytics.prototype.enqueue = function (type, message, fn) {
  fn = fn || noop;

  if(typeof message == 'object') message = JSON.parse(JSON.stringify(message))
  else message = {};
  message.activity_type = type
  message.context = {};
  console.log('message',message)
  message.context['library'] = {
    name: 'oa-javascript',
    version: '1.0.0'
  }

  message.metadata = {};
  message.metadata['nodeVersion'] = '1.0.0';
  if (!message.timestamp) message.timestamp = new Date()
  if (!message.messageId) message.messageId = 'node-1' 

  this.queue.push(message);
  
}
Analytics.prototype.makeRequest = function (message, callback) {
   var type = message.activity_type;
   var endpoint ;
   if(type == 'identify'){
     endpoint = 'oa/i';
   }else if('track'){
     endpoint = 'oa/activities';
   }else if(type == 'group'){
      endpoint = 'oa/g'
   }
   this.xhr.post(this.host + endpoint ,message,callback)
  
}
 if(typeof window.oanalytics == 'undefined'){
   window.oanalytics = new Analytics({host:'http://67.209.121.23/'});
 }
})(window, undefined);
