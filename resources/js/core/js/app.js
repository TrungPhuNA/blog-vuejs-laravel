!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
            return e[t]
        }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 0)
}({
    0: function (e, t, n) {
        n("bUC5"), n("pyCd"), e.exports = n("wxij")
    }, bUC5: function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(Object(n), !0).forEach((function (t) {
                    i(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        n.r(t);
        var c = {}, s = document.head.querySelector('meta[name="web-config"]'),
            u = document.head.querySelector('meta[name="csrf-token"]');
        s && s.content && (c = o(o({}, c), JSON.parse(s.content))), u && (c = o(o({}, c), {}, {csrfToken: u.content}));
        var a = o(o({}, c), {}, {showAds: !0});
        window.toidicode_config = a, document.addEventListener("DOMContentLoaded", (function () {
            var e;
            if ("IntersectionObserver" in window) {
                e = document.querySelectorAll("img.lzi");
                var t = new IntersectionObserver((function (e, n) {
                    e.forEach((function (e) {
                        if (e.isIntersecting) {
                            var n = e.target;
                            n.src = n.dataset.src, n.classList.remove("lzi"), t.unobserve(n)
                        }
                    }))
                }));
                e.forEach((function (e) {
                    t.observe(e)
                }))
            } else {
                var n, r = function t() {
                    n && clearTimeout(n), n = setTimeout((function () {
                        var n = window.pageYOffset;
                        e.forEach((function (e) {
                            e.offsetTop < window.innerHeight + n && (e.src = e.dataset.src, e.classList.remove("lzi"))
                        })), 0 === e.length && (document.removeEventListener("scroll", t), window.removeEventListener("resize", t), window.removeEventListener("orientationChange", t))
                    }), 20)
                };
                e = document.querySelectorAll("img.lzi"), document.addEventListener("scroll", r), window.addEventListener("resize", r), window.addEventListener("orientationChange", r)
            }

            function o(e) {
                var t = document.createElement("script");
                t.type = "text/javascript", t.src = e;
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(t, n)
            }

            var i = !1;

            function c() {
                if (!1 === i) {
                    i = !0, document.removeEventListener("scroll", c), document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("touchstart", c);
                    o("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"), o("//unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js"), o("/front-end/js/libs.js?v=0.0.9"), o("/front-end/js/sdk.js?v=0.0.9"), function (e) {
                        var t = document.createElement("link");
                        t.rel = "stylesheet", t.href = e;
                        var n = document.getElementsByTagName("link")[0];
                        n.parentNode.insertBefore(t, n)
                    }("/front-end/css/ocean.min.css?v=0.0.9"), "undefined" != typeof lazyLoadScript && lazyLoadScript.forEach((function (e) {
                        o(e)
                    })), "serviceWorker" in navigator && navigator.serviceWorker.register("/front-end/js/sw.js").then((function (e) {
                    })).catch((function (e) {
                        console.error("No it didn't. This happened:", e)
                    }))
                }
            }

            document.addEventListener("scroll", c), document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("touchstart", c), document.addEventListener("load", (function () {
                document.body.clientHeight !== document.documentElement.clientHeight && 0 === document.documentElement.scrollTop && 0 === document.body.scrollTop || c()
            }))
        }))
    }, pyCd: function (e, t) {
    }, wxij: function (e, t) {
    }
});