!function (e) {
    function t(t) {
        for (var o, a, c = t[0], s = t[1], l = t[2], u = 0, p = []; u < c.length; u++)a = c[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0; for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]); for (d && d(t); p.length;)p.shift()(); return i.push.apply(i, l || []), n()
    } function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, c = 1; c < n.length; c++) {
                var s = n[c]; 0 !== r[s] && (o = !1)
            } o && (i.splice(t--, 1), e = a(a.s = n[0]))
        } return e
    } var o = {}, r = {
        0: 0
    }, i = []; function a(t) {
        if (o[t]) return o[t].exports; var n = o[t] = {
            i: t, l: !1, exports: {}
        }; return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    } a.m = e, a.c = o, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0, get: n
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0, value: e
        }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function (t) {
            return e[t]
        }.bind(null, o)); return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        }; return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = ""; var c = window.webpackJsonp = window.webpackJsonp || [], s = c.push.bind(c); c.push = t, c = c.slice(); for (var l = 0; l < c.length; l++)t(c[l]); var d = s; i.push([414, 1]), n()
}({
    10: function (e, t, n) {
        "use strict"; (function (e) {
            var o, r, i = n(86), a = {}; function c() {
                return !(!a.isIE || !a.getScrollbarWidth()) || !a.isMobile() && (!(!window.matchMedia("(any-hover: hover)").matches && !window.matchMedia("(hover: hover)").matches) || !window.matchMedia("(hover: none)").matches && void 0 === a.$html.ontouchstart)
            } a.$document = $(document), a.$window = $(window), a.$body = $(document.body), a.$html = $(document.documentElement), a.isMobile = function () {
                return innerWidth <= 1024
            }, a.isIE = function () {
                return a.$html.hasClass("is-browser-ie")
            }, a.isIOS = function () {
                return a.$html.hasClass("is-os-ios")
            }, a.winWidth = window.innerWidth, a.clearText = function (e) {
                return e.trim().replace(/\s+/g, " ")
            }, a.setCookie = function (e, t, n) {
                var o = ""; if (n) {
                    var r = new Date; r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=".concat(r.toUTCString())
                } document.cookie = "".concat(e, "=").concat(t || "").concat(o, "; path=/")
            }, a.getCookie = function (e) {
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var r = n[o]; " " === r.charAt(0);)r = r.substring(1, r.length); if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                } return null
            }, a.eraseCookie = function (e) {
                document.cookie = "".concat(e, "=; Max-Age=-99999999;")
            }, a.lockScroll = function (t, n, r) {
                var c = n.get(0) ? n.get(0) : n; void 0 === o && (o = new Set); var s = o; t ? ("string" == typeof r && s.add(r), i.b(c, {
                    reserveScrollBarGap: !0
                }), e((function () {
                    a.$html.addClass("is-lock-scroll")
                }))) : ("string" == typeof r && s.delete(r), i.c(c), s.size || (i.a(), a.$html.removeClass("is-lock-scroll")))
            }, a.scrollTo = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; a.$html.css("scroll-behavior", "initial"), $("html, body").stop().animate({
                    scrollTop: "".concat(e.offset().top + parseInt(n, 10))
                }, parseInt(t, 10)), setTimeout((function () {
                    a.$html.css("scroll-behavior", "")
                }), parseInt(t, 10) + 100)
            }, a.getScrollbarWidth = function () {
                var e = window.innerWidth - a.$html.get(0).clientWidth; return e || document.documentElement.clientHeight >= document.documentElement.offsetHeight ? e : (r || ((r = document.createElement("div")).style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px", document.body.appendChild(r)), r.offsetWidth - r.clientWidth)
            }, c() ? a.$html.removeClass("no-hover").addClass("has-hover") : a.$html.removeClass("has-hover").addClass("no-hover"), a.$window.on("resize", (function () {
                setTimeout((function () {
                    a.winWidth !== window.innerWidth && (c() ? a.$html.removeClass("no-hover").addClass("has-hover") : a.$html.removeClass("has-hover").addClass("no-hover"), a.winWidth = window.innerWidth)
                }), 300)
            })), t.a = a
        }).call(this, n(163).setImmediate)
    }, 165: function (e, t, n) {
        "use strict"; (function (e) {
            var o = n(10); function r() {
                return new Promise((function (t) {
                    $(".js-burger").addClass("is-disabled").attr("disabled", !0), o.a.lockScroll(!0, o.a.$header.find(".header__menu"), "header"), o.a.$header.addClass("is-menu-opened"), $(".header__menu").removeClass("is-hidden"), e((function () {
                        o.a.$body.css("padding-right", "".concat(o.a.getScrollbarWidth(), "px")), o.a.$header.css("right", "".concat(o.a.getScrollbarWidth(), "px"))
                    })), setTimeout((function () {
                        $(".header__menu").addClass("is-active"), $(".js-burger").removeClass("is-disabled").attr("disabled", !1), t()
                    }), 100)
                }))
            } function i() {
                return new Promise((function (e) {
                    $(".js-burger").addClass("is-disabled").attr("disabled", !0), o.a.lockScroll(!1, o.a.$header.find(".header__menu"), "header"), o.a.$body.css("padding-right", ""), o.a.$header.css("right", ""), o.a.$header.removeClass("is-menu-opened"), $(".header__menu").removeClass("is-active"), setTimeout((function () {
                        $(".header__menu").addClass("is-hidden"), $(".js-burger").removeClass("is-disabled").attr("disabled", !1), e()
                    }), 500)
                }))
            } function a(e) {
                e.preventDefault(), e.stopPropagation(), $(e.currentTarget).hasClass("is-active") ? ($(e.currentTarget).removeClass("is-active"), i()) : ($(e.currentTarget).addClass("is-active"), r())
            } t.a = {
                init: function () {
                    o.a.$header = $(".header"), $(".js-burger").on("click.header", a), o.a.$document.on("click.header", (function (e) {
                        var t = $(".header__menu"); t.is(e.target) && 0 === t.has(e.target).length && t.hasClass("is-active") && (i(), $(".js-burger").removeClass("is-active"))
                    })).on("keyup.header", (function (e) {
                        "Escape" !== e.key && "Esc" !== e.key || !$(".header__menu").hasClass("is-active") || (i(), $(".js-burger").removeClass("is-active"))
                    }))
                }, destroy: function () {
                    $(".js-burger").off(".header"), o.a.$document.off(".header")
                }, openMenu: r, closeMenu: i
            }
        }).call(this, n(163).setImmediate)
    }, 410: function (e, t) {
        var n = function () {
            var e = $(".header"); setTimeout((function () {
                var t = e.outerHeight(!0); $("body").css("--vhv", "".concat(t, "px"))
            }), 200)
        }; window.onload = function () {
            return n()
        }, window.onresize = function () {
            return n()
        }
    }, 411: function (e, t) {
        var n = function (e, t) {
            $(e).on("click", (function (e) {
                var n = $(e.currentTarget); n.toggleClass("is-active"), n.find(t).toggleClass("is-active"), n.parent().find(t).slideToggle()
            }))
        }; n(".header__list--hasmenu", ".header__submenu"), n(".js-accardion", ".js-body")
    }, 412: function (e, t) {
        var n, o = 0, r = $("header").outerHeight(); $(window).scroll((function (e) {
            n = !0
        })), setInterval((function () {
            n && (!function () {
                var e = $(this).scrollTop(); if (Math.abs(o - e) <= 5) return; e > o && e > r ? ($("header").removeClass("header--down").addClass("header--up"), $(".navigation").removeClass("navigation--down").addClass("navigation--up")) : e + $(window).height() < $(document).height() && ($("header").removeClass("header--up").addClass("header--down"), $(".navigation").removeClass("navigation--up").addClass("navigation--down")); o = e
            }(), n = !1)
        }), 250)
    }, 414: function (e, t, n) {
        "use strict"; n.r(t); n(169), n(406); var o = n(164), r = n.n(o), i = n(117), a = n.n(i), c = n(118), s = n.n(c); r()(), s()(), window.$ = a.a, window.jQuery = a.a, window.objectFitImages = s.a, n(407); var l = n(10), d = (n(410), n(411), n(37)), u = new d.c(".sert__gallery", {
            modules: [d.a, d.b], pagination: {
                el: ".swiper-pagination"
            }, navigation: {
                nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"
            }, breakpoints: {
                320: {
                    slidesPerView: 1, spaceBetween: 20
                }, 425: {
                    slidesPerView: 2, spaceBetween: 20
                }, 1024: {
                    slidesPerView: 3, spaceBetween: 63
                }
            }
        }); new d.c(".portfolio__slider", {
            grabCursor: !1, allowTouchMove: !1, modules: [d.a, d.b], pagination: {
                el: ".swiper-pagination"
            }, navigation: {
                nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"
            }, breakpoints: {
                320: {
                    slidesPerView: 1, spaceBetween: 20
                }, 700: {
                    slidesPerView: 2, spaceBetween: 20
                }
            }
        });
        var p = function (e) {
            var t = !1; window.innerWidth <= 1920 ? t || (t = !0, new d.c(e, {
                slidesPerView: 1, spaceBetween: 20, modules: [d.b], pagination: {
                    el: ".swiper-pagination"
                }, breakpoints: {
                    700: {
                        slidesPerView: 2, spaceBetween: 20
                    }, 1024: {
                        slidesPerView: 3, spaceBetween: 63
                    }
                }
            })) : t && (u.destroy(), t = !1)
        };
        
        p(".js-mobileSliderInits"), window.addEventListener("resize", p);

        var p = function (e) {
            var t = !1; window.innerWidth <= 1020 ? t || (t = !0, new d.c(e, {
                slidesPerView: 1, spaceBetween: 20, modules: [d.b], pagination: {
                    el: ".swiper-pagination"
                }, breakpoints: {
                    700: {
                        slidesPerView: 2, spaceBetween: 20
                    }, 1024: {
                        slidesPerView: 3, spaceBetween: 63
                    }
                }
            })) : t && (u.destroy(), t = !1)
        };

        p(".js-mobileSliderInit"), window.addEventListener("resize", p);
        
        n(412); $(".js-close").on("click", (function (e) {
            $(e.currentTarget).closest(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper"))
        })), $(".popup__overlay").on("click", (function (e) {
            $(e.currentTarget).closest(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper"))
        })), l.a.$document.on("keydown", (function (e) {
            27 == e.keyCode && ($(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper")))
        })), $(".js-open--modal").on("click", (function (e) {
            e.preventDefault(); var t = $(e.currentTarget).attr("href"); $(t).fadeIn(), l.a.lockScroll(!0, l.a.$body.find(".popup__wrapper"))
        })); var h = n(165), f = n(166), m = n.n(f), v = n(167), w = n.n(v), g = n(168); !function () {
            !function () {
                if ("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function () {
                    return (new Date).getTime()
                }, "now" in window.performance == 0) {
                    var e = Date.now(); performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function () {
                        return Date.now() - e
                    }
                }
            }(), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
                t = t || window; for (var n = 0; n < this.length; n++)e.call(t, this[n], n, this)
            }), function () {
                if ("function" == typeof window.CustomEvent) return !1; function e(e, t) {
                    t = t || {
                        bubbles: !1, cancelable: !1, detail: void 0
                    }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                } e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (e, t) {
                    if (null == this) throw new TypeError('"this" is null or not defined'); var n = Object(this), o = n.length >>> 0; if (0 === o) return !1; var r, i, a = 0 | t, c = Math.max(a >= 0 ? a : o - Math.abs(a), 0); for (; c < o;) {
                        if ((r = n[c]) === (i = e) || "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i)) return !0; c++
                    } return !1
                }
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;); return n > -1
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
                var t = this; do {
                    if (t.matches(e)) return t; t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType); return null
            }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.insertBefore(t, this.firstChild)
                    }
                })
            })), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.appendChild(t)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("before") || Object.defineProperty(e, "before", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.parentNode.insertBefore(t, this)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        null !== this.parentNode && this.parentNode.removeChild(this)
                    }
                })
            })), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
                value: function (e, t) {
                    var n = t > 0 ? 0 | t : 0; return this.substring(n, n + e.length) === e
                }
            }); if (window.navigator.msSaveBlob) {
                var e = document.querySelectorAll("a[download]"); e.length && e.forEach((function (e) {
                    !function (e) {
                        if ("" === e.href) throw Error("The element has no href value."); var t = e.getAttribute("download"); if (null === t || "" === t) {
                            var n = e.href.split("/"); t = n[n.length - 1]
                        } e.addEventListener("click", (function (n) {
                            n.preventDefault(); var o = new XMLHttpRequest; o.onloadstart = function () {
                                o.responseType = "blob"
                            }, o.onload = function () {
                                navigator.msSaveOrOpenBlob(o.response, t)
                            }, o.open("GET", e.href, !0), o.send()
                        }))
                    }(e)
                }))
            } window.MSInputMethodContext && document.documentMode && document.querySelectorAll("svg").forEach((function (e) {
                e.setAttribute("focusable", "false")
            })); !function () {
                var e, t, n, o = document.querySelector("main"), r = document.querySelector(".header"), i = document.querySelector(".footer"); if (o && window.MSInputMethodContext && document.documentMode) {
                    var a = function () {
                        e = r ? r.getBoundingClientRect().height : 0, t = i ? i.getBoundingClientRect().height : 0, n = window.innerHeight, o.style.minHeight = n - (e + t) + "px"
                    }; document.addEventListener("loadDOMContentLoaded", a()), window.addEventListener("resize", a)
                }
            }()
        }(), function () {
            if (!window.MSInputMethodContext || !document.documentMode) {
                var e = window.innerHeight; document.documentElement.style.setProperty("--vh", "".concat(e, "px")), window.addEventListener("resize", (function () {
                    e = window.innerHeight, document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                }))
            }
        }(), h.a.init(), document.querySelectorAll(".phone").forEach((function (e) {
            m()(e, {
                initialCountry: "auto", utilsScript: w.a, geoIpLookup: function (e, t) {
                    $.get("https://ipinfo.io", (function () {
                    }), "jsonp").always((function (t) {
                        var n = t && t.country ? t.country : "ru"; e(n)
                    }))
                }
            })
        })), g.a.bind("[data-fancybox]", {}), $(".navigation__trigger").on("click", (function (e) {
            var t = $(e.currentTarget); t.toggleClass("is-active"), t.parent().toggleClass("is-active")
        }))
    }
});
/*
!function (e) {
    function t(t) {
        for (var o, a, c = t[0], s = t[1], l = t[2], u = 0, p = []; u < c.length; u++)a = c[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0; for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]); for (d && d(t); p.length;)p.shift()(); return i.push.apply(i, l || []), n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, c = 1; c < n.length; c++) {
                var s = n[c]; 0 !== r[s] && (o = !1)
            } o && (i.splice(t--, 1), e = a(a.s = n[0]))
        } return e
    } var o = {}, r = {
        0: 0
    }, i = []; function a(t) {
        if (o[t]) return o[t].exports; var n = o[t] = {
            i: t, l: !1, exports: {}
        }; return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    } a.m = e, a.c = o, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0, get: n
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var n = Object.create(null); if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0, value: e
        }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function (t) {
            return e[t]
        }.bind(null, o)); return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        }; return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = ""; var c = window.webpackJsonp = window.webpackJsonp || [], s = c.push.bind(c); c.push = t, c = c.slice(); for (var l = 0; l < c.length; l++)t(c[l]); var d = s; i.push([414, 1]), n()
}({
    10: function (e, t, n) {
        "use strict"; (function (e) {
            var o, r, i = n(86), a = {}; function c() {
                return !(!a.isIE || !a.getScrollbarWidth()) || !a.isMobile() && (!(!window.matchMedia("(any-hover: hover)").matches && !window.matchMedia("(hover: hover)").matches) || !window.matchMedia("(hover: none)").matches && void 0 === a.$html.ontouchstart)
            } a.$document = $(document), a.$window = $(window), a.$body = $(document.body), a.$html = $(document.documentElement), a.isMobile = function () {
                return innerWidth <= 1024
            }, a.isIE = function () {
                return a.$html.hasClass("is-browser-ie")
            }, a.isIOS = function () {
                return a.$html.hasClass("is-os-ios")
            }, a.winWidth = window.innerWidth, a.clearText = function (e) {
                return e.trim().replace(/\s+/g, " ")
            }, a.setCookie = function (e, t, n) {
                var o = ""; if (n) {
                    var r = new Date; r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=".concat(r.toUTCString())
                } document.cookie = "".concat(e, "=").concat(t || "").concat(o, "; path=/")
            }, a.getCookie = function (e) {
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                    for (var r = n[o]; " " === r.charAt(0);)r = r.substring(1, r.length); if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                } return null
            }, a.eraseCookie = function (e) {
                document.cookie = "".concat(e, "=; Max-Age=-99999999;")
            }, a.lockScroll = function (t, n, r) {
                var c = n.get(0) ? n.get(0) : n; void 0 === o && (o = new Set); var s = o; t ? ("string" == typeof r && s.add(r), i.b(c, {
                    reserveScrollBarGap: !0
                }), e((function () {
                    a.$html.addClass("is-lock-scroll")
                }))) : ("string" == typeof r && s.delete(r), i.c(c), s.size || (i.a(), a.$html.removeClass("is-lock-scroll")))
            }, a.scrollTo = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0; a.$html.css("scroll-behavior", "initial"), $("html, body").stop().animate({
                    scrollTop: "".concat(e.offset().top + parseInt(n, 10))
                }, parseInt(t, 10)), setTimeout((function () {
                    a.$html.css("scroll-behavior", "")
                }), parseInt(t, 10) + 100)
            }, a.getScrollbarWidth = function () {
                var e = window.innerWidth - a.$html.get(0).clientWidth; return e || document.documentElement.clientHeight >= document.documentElement.offsetHeight ? e : (r || ((r = document.createElement("div")).style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px", document.body.appendChild(r)), r.offsetWidth - r.clientWidth)
            }, c() ? a.$html.removeClass("no-hover").addClass("has-hover") : a.$html.removeClass("has-hover").addClass("no-hover"), a.$window.on("resize", (function () {
                setTimeout((function () {
                    a.winWidth !== window.innerWidth && (c() ? a.$html.removeClass("no-hover").addClass("has-hover") : a.$html.removeClass("has-hover").addClass("no-hover"), a.winWidth = window.innerWidth)
                }), 300)
            })), t.a = a
        }).call(this, n(163).setImmediate)
    }, 165: function (e, t, n) {
        "use strict"; (function (e) {
            var o = n(10); function r() {
                return new Promise((function (t) {
                    $(".js-burger").addClass("is-disabled").attr("disabled", !0), o.a.lockScroll(!0, o.a.$header.find(".header__menu"), "header"), o.a.$header.addClass("is-menu-opened"), $(".header__menu").removeClass("is-hidden"), e((function () {
                        o.a.$body.css("padding-right", "".concat(o.a.getScrollbarWidth(), "px")), o.a.$header.css("right", "".concat(o.a.getScrollbarWidth(), "px"))
                    })), setTimeout((function () {
                        $(".header__menu").addClass("is-active"), $(".js-burger").removeClass("is-disabled").attr("disabled", !1), t()
                    }), 100)
                }))
            } function i() {
                return new Promise((function (e) {
                    $(".js-burger").addClass("is-disabled").attr("disabled", !0), o.a.lockScroll(!1, o.a.$header.find(".header__menu"), "header"), o.a.$body.css("padding-right", ""), o.a.$header.css("right", ""), o.a.$header.removeClass("is-menu-opened"), $(".header__menu").removeClass("is-active"), setTimeout((function () {
                        $(".header__menu").addClass("is-hidden"), $(".js-burger").removeClass("is-disabled").attr("disabled", !1), e()
                    }), 500)
                }))
            } function a(e) {
                e.preventDefault(), e.stopPropagation(), $(e.currentTarget).hasClass("is-active") ? ($(e.currentTarget).removeClass("is-active"), i()) : ($(e.currentTarget).addClass("is-active"), r())
            } t.a = {
                init: function () {
                    o.a.$header = $(".header"), $(".js-burger").on("click.header", a), o.a.$document.on("click.header", (function (e) {
                        var t = $(".header__menu"); t.is(e.target) && 0 === t.has(e.target).length && t.hasClass("is-active") && (i(), $(".js-burger").removeClass("is-active"))
                    })).on("keyup.header", (function (e) {
                        "Escape" !== e.key && "Esc" !== e.key || !$(".header__menu").hasClass("is-active") || (i(), $(".js-burger").removeClass("is-active"))
                    }))
                }, destroy: function () {
                    $(".js-burger").off(".header"), o.a.$document.off(".header")
                }, openMenu: r, closeMenu: i
            }
        }).call(this, n(163).setImmediate)
    }, 410: function (e, t) {
        var n = function () {
            var e = $(".header"); setTimeout((function () {
                var t = e.outerHeight(!0); $("body").css("--vhv", "".concat(t, "px"))
            }), 200)
        }; window.onload = function () {
            return n()
        }, window.onresize = function () {
            return n()
        }
    }, 411: function (e, t) {
        var n = function (e, t) {
            $(e).on("click", (function (e) {
                var n = $(e.currentTarget); n.toggleClass("is-active"), n.find(t).toggleClass("is-active"), n.parent().find(t).slideToggle()
            }))
        }; n(".header__list--hasmenu", ".header__submenu"), n(".js-accardion", ".js-body")
    }, 412: function (e, t) {
        var n, o = 0, r = $("header").outerHeight(); $(window).scroll((function (e) {
            n = !0
        })), setInterval((function () {
            n && (!function () {
                var e = $(this).scrollTop(); if (Math.abs(o - e) <= 5) return; e > o && e > r ? ($("header").removeClass("header--down").addClass("header--up"), $(".navigation").removeClass("navigation--down").addClass("navigation--up")) : e + $(window).height() < $(document).height() && ($("header").removeClass("header--up").addClass("header--down"), $(".navigation").removeClass("navigation--up").addClass("navigation--down")); o = e
            }(), n = !1)
        }), 250)
    }, 414: function (e, t, n) {
        "use strict"; n.r(t); n(169), n(406); var o = n(164), r = n.n(o), i = n(117), a = n.n(i), c = n(118), s = n.n(c); r()(), s()(), window.$ = a.a, window.jQuery = a.a, window.objectFitImages = s.a, n(407); var l = n(10), d = (n(410), n(411), n(37)), u = new d.c(".sert__gallery", {
            modules: [d.a, d.b], pagination: {
                el: ".swiper-pagination"
            }, navigation: {
                nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"
            }, breakpoints: {
                320: {
                    slidesPerView: 1, spaceBetween: 20
                }, 425: {
                    slidesPerView: 2, spaceBetween: 20
                }, 1024: {
                    slidesPerView: 3, spaceBetween: 63
                }
            }
        }); new d.c(".portfolio__slider", {
            grabCursor: !1, allowTouchMove: !1, modules: [d.a, d.b], pagination: {
                el: ".swiper-pagination"
            }, navigation: {
                nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"
            }, breakpoints: {
                320: {
                    slidesPerView: 1, spaceBetween: 20
                }, 700: {
                    slidesPerView: 2, spaceBetween: 20
                }
            }
        });
        var p = function (e) {
            var t = !1; window.innerWidth <= 1020 ? t || (t = !0, new d.c(e, {
                slidesPerView: 1, spaceBetween: 20, modules: [d.b], pagination: {
                    el: ".swiper-pagination"
                }, breakpoints: {
                    700: {
                        slidesPerView: 2, spaceBetween: 20
                    }, 1024: {
                        slidesPerView: 3, spaceBetween: 63
                    }
                }
            })) : t && (u.destroy(), t = !1)
        };
        p(".js-mobileSliderInit"), window.addEventListener("resize", p); 

        n(412); $(".js-close").on("click", (function (e) {
            $(e.currentTarget).closest(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper"))
        })), $(".popup__overlay").on("click", (function (e) {
            $(e.currentTarget).closest(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper"))
        })), l.a.$document.on("keydown", (function (e) {
            27 == e.keyCode && ($(".popup").fadeOut(), l.a.lockScroll(!1, l.a.$body.find(".popup__wrapper")))
        })), $(".js-open--modal").on("click", (function (e) {
            e.preventDefault(); var t = $(e.currentTarget).attr("href"); $(t).fadeIn(), l.a.lockScroll(!0, l.a.$body.find(".popup__wrapper"))
        })); var h = n(165), f = n(166), m = n.n(f), v = n(167), w = n.n(v), g = n(168); !function () {
            !function () {
                if ("performance" in window == 0 && (window.performance = {}), Date.now = Date.now || function () {
                    return (new Date).getTime()
                }, "now" in window.performance == 0) {
                    var e = Date.now(); performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function () {
                        return Date.now() - e
                    }
                }
            }(), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (e, t) {
                t = t || window; for (var n = 0; n < this.length; n++)e.call(t, this[n], n, this)
            }), function () {
                if ("function" == typeof window.CustomEvent) return !1; function e(e, t) {
                    t = t || {
                        bubbles: !1, cancelable: !1, detail: void 0
                    }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
                } e.prototype = window.Event.prototype, window.CustomEvent = e
            }(), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                value: function (e, t) {
                    if (null == this) throw new TypeError('"this" is null or not defined'); var n = Object(this), o = n.length >>> 0; if (0 === o) return !1; var r, i, a = 0 | t, c = Math.max(a >= 0 ? a : o - Math.abs(a), 0); for (; c < o;) {
                        if ((r = n[c]) === (i = e) || "number" == typeof r && "number" == typeof i && isNaN(r) && isNaN(i)) return !0; c++
                    } return !1
                }
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (e) {
                for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this;); return n > -1
            }), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
                var t = this; do {
                    if (t.matches(e)) return t; t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType); return null
            }), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.insertBefore(t, this.firstChild)
                    }
                })
            })), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function (e) {
                e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.appendChild(t)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("before") || Object.defineProperty(e, "before", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        var e = Array.prototype.slice.call(arguments), t = document.createDocumentFragment(); e.forEach((function (e) {
                            var n = e instanceof Node; t.appendChild(n ? e : document.createTextNode(String(e)))
                        })), this.parentNode.insertBefore(t, this)
                    }
                })
            })), [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function (e) {
                e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                    configurable: !0, enumerable: !0, writable: !0, value: function () {
                        null !== this.parentNode && this.parentNode.removeChild(this)
                    }
                })
            })), String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
                value: function (e, t) {
                    var n = t > 0 ? 0 | t : 0; return this.substring(n, n + e.length) === e
                }
            }); if (window.navigator.msSaveBlob) {
                var e = document.querySelectorAll("a[download]"); e.length && e.forEach((function (e) {
                    !function (e) {
                        if ("" === e.href) throw Error("The element has no href value."); var t = e.getAttribute("download"); if (null === t || "" === t) {
                            var n = e.href.split("/"); t = n[n.length - 1]
                        } e.addEventListener("click", (function (n) {
                            n.preventDefault(); var o = new XMLHttpRequest; o.onloadstart = function () {
                                o.responseType = "blob"
                            }, o.onload = function () {
                                navigator.msSaveOrOpenBlob(o.response, t)
                            }, o.open("GET", e.href, !0), o.send()
                        }))
                    }(e)
                }))
            } window.MSInputMethodContext && document.documentMode && document.querySelectorAll("svg").forEach((function (e) {
                e.setAttribute("focusable", "false")
            })); !function () {
                var e, t, n, o = document.querySelector("main"), r = document.querySelector(".header"), i = document.querySelector(".footer"); if (o && window.MSInputMethodContext && document.documentMode) {
                    var a = function () {
                        e = r ? r.getBoundingClientRect().height : 0, t = i ? i.getBoundingClientRect().height : 0, n = window.innerHeight, o.style.minHeight = n - (e + t) + "px"
                    }; document.addEventListener("loadDOMContentLoaded", a()), window.addEventListener("resize", a)
                }
            }()
        }(), function () {
            if (!window.MSInputMethodContext || !document.documentMode) {
                var e = window.innerHeight; document.documentElement.style.setProperty("--vh", "".concat(e, "px")), window.addEventListener("resize", (function () {
                    e = window.innerHeight, document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
                }))
            }
        }(), h.a.init(), document.querySelectorAll(".phone").forEach((function (e) {
            m()(e, {
                initialCountry: "auto", utilsScript: w.a, geoIpLookup: function (e, t) {
                    $.get("https://ipinfo.io", (function () {
                    }), "jsonp").always((function (t) {
                        var n = t && t.country ? t.country : "ru"; e(n)
                    }))
                }
            })
        })), g.a.bind("[data-fancybox]", {}), $(".navigation__trigger").on("click", (function (e) {
            var t = $(e.currentTarget); t.toggleClass("is-active"), t.parent().toggleClass("is-active")
        }))
    }
});
*/