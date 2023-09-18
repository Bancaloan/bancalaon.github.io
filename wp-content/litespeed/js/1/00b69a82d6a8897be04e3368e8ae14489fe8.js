var eazydocs_local_object = {
  EAZYDOCS_FRONT_CSS:
    "https://wordpress-theme.spider-themes.net/banca/wp-content/plugins/eazydocs/assets/css/frontend",
  nonce: "171420e9fb",
  is_doc_ajax: "",
}; /*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              a = 1;
            a <= 3;
            a++
          ) {
            if (+o[a] < +n[a]) return 1;
            if (+n[a] < +o[a]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    (s.migrateDisablePatches = function () {
      for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0;
    }),
      (s.migrateEnablePatches = function () {
        for (var e = 0; e < arguments.length; e++) delete t[arguments[e]];
      }),
      (s.migrateIsPatchEnabled = function (e) {
        return !t[e];
      }),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0") && !e("5.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var o = {};
    function u(e, t) {
      var r = n.console;
      !s.migrateIsPatchEnabled(e) ||
        (s.migrateDeduplicateWarnings && o[t]) ||
        ((o[t] = !0),
        s.migrateWarnings.push(t + " [" + e + "]"),
        r &&
          r.warn &&
          !s.migrateMute &&
          (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()));
    }
    function r(e, t, r, n, o) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n, o), r;
        },
        set: function (e) {
          u(n, o), (r = e);
        },
      });
    }
    function a(e, t, r, n, o) {
      var a = e[t];
      e[t] = function () {
        return (
          o && u(n, o),
          (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        );
      };
    }
    function c(e, t, r, n, o) {
      if (!o) throw new Error("No warning message provided");
      return a(e, t, r, n, o), 0;
    }
    function i(e, t, r, n) {
      return a(e, t, r, n), 0;
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (o = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("quirks", "jQuery is not compatible with Quirks Mode");
    var d,
      l,
      p,
      f = {},
      m = s.fn.init,
      y = s.find,
      h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in (i(
      s.fn,
      "init",
      function (e) {
        var t = Array.prototype.slice.call(arguments);
        return (
          s.migrateIsPatchEnabled("selector-empty-id") &&
            "string" == typeof e &&
            "#" === e &&
            (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
            (t[0] = [])),
          m.apply(this, t)
        );
      },
      "selector-empty-id"
    ),
    (s.fn.init.prototype = s.fn),
    i(
      s,
      "find",
      function (t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
          try {
            n.document.querySelector(t);
          } catch (e) {
            t = t.replace(g, function (e, t, r, n) {
              return "[" + t + r + '"' + n + '"]';
            });
            try {
              n.document.querySelector(t),
                u(
                  "selector-hash",
                  "Attribute selector with '#' must be quoted: " + r[0]
                ),
                (r[0] = t);
            } catch (e) {
              u(
                "selector-hash",
                "Attribute selector with '#' was not fixed: " + r[0]
              );
            }
          }
        return y.apply(this, r);
      },
      "selector-hash"
    ),
    y))
      Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "size",
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      c(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "parseJSON",
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      c(
        s,
        "holdReady",
        s.holdReady,
        "holdReady",
        "jQuery.holdReady is deprecated"
      ),
      c(
        s,
        "unique",
        s.uniqueSort,
        "unique",
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      r(
        s.expr,
        "filters",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      r(
        s.expr,
        ":",
        s.expr.pseudos,
        "expr-pre-pseudos",
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        c(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(v, "$1");
          },
          "trim",
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (c(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "nodeName",
          "jQuery.nodeName is deprecated"
        ),
        c(
          s,
          "isArray",
          Array.isArray,
          "isArray",
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (c(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "isNumeric",
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        c(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "type",
          "jQuery.type is deprecated"
        ),
        c(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "isFunction",
          "jQuery.isFunction() is deprecated"
        ),
        c(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "isWindow",
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((l = s.ajax),
        (p = /(=)\?(?=&|$)|\?\?/),
        i(
          s,
          "ajax",
          function () {
            var e = l.apply(this, arguments);
            return (
              e.promise &&
                (c(
                  e,
                  "success",
                  e.done,
                  "jqXHR-methods",
                  "jQXHR.success is deprecated and removed"
                ),
                c(
                  e,
                  "error",
                  e.fail,
                  "jqXHR-methods",
                  "jQXHR.error is deprecated and removed"
                ),
                c(
                  e,
                  "complete",
                  e.always,
                  "jqXHR-methods",
                  "jQXHR.complete is deprecated and removed"
                )),
              e
            );
          },
          "jqXHR-methods"
        ),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (p.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  p.test(e.data))) &&
              u(
                "jsonp-promotion",
                "JSON-to-JSONP auto-promotion is deprecated"
              );
          }));
    var j = s.fn.removeAttr,
      b = s.fn.toggleClass,
      w = /\S+/g;
    function x(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    i(
      s.fn,
      "removeAttr",
      function (e) {
        var r = this,
          n = !1;
        return (
          s.each(e.match(w), function (e, t) {
            s.expr.match.bool.test(t) &&
              r.each(function () {
                if (!1 !== s(this).prop(t)) return !(n = !0);
              }),
              n &&
                (u(
                  "removeAttr-bool",
                  "jQuery.fn.removeAttr no longer sets boolean properties: " + t
                ),
                r.prop(t, !1));
          }),
          j.apply(this, arguments)
        );
      },
      "removeAttr-bool"
    ),
      i(
        s.fn,
        "toggleClass",
        function (t) {
          return void 0 !== t && "boolean" != typeof t
            ? b.apply(this, arguments)
            : (u(
                "toggleClass-bool",
                "jQuery.fn.toggleClass( boolean ) is deprecated"
              ),
              this.each(function () {
                var e = (this.getAttribute && this.getAttribute("class")) || "";
                e && s.data(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      (!e && !1 !== t && s.data(this, "__className__")) || ""
                    );
              }));
        },
        "toggleClass-bool"
      );
    var Q,
      A,
      R = !1,
      C = /^[a-z]/,
      N =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (R = !0), (e = r.apply(this, arguments)), (R = !1), e;
          });
      }),
      i(
        s,
        "swap",
        function (e, t, r, n) {
          var o,
            a,
            i = {};
          for (a in (R ||
            u("swap", "jQuery.swap() is undocumented and deprecated"),
          t))
            (i[a] = e.style[a]), (e.style[a] = t[a]);
          for (a in ((o = r.apply(e, n || [])), t)) e.style[a] = i[a];
          return o;
        },
        "swap"
      ),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("cssProps", "jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      e("4.0.0")
        ? ((A = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          }),
          "undefined" != typeof Proxy
            ? (s.cssNumber = new Proxy(A, {
                get: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.get.apply(this, arguments)
                  );
                },
                set: function () {
                  return (
                    u("css-number", "jQuery.cssNumber is deprecated"),
                    Reflect.set.apply(this, arguments)
                  );
                },
              }))
            : (s.cssNumber = A))
        : (A = s.cssNumber),
      (Q = s.fn.css),
      i(
        s.fn,
        "css",
        function (e, t) {
          var r,
            n,
            o = this;
          return e && "object" == typeof e && !Array.isArray(e)
            ? (s.each(e, function (e, t) {
                s.fn.css.call(o, e, t);
              }),
              this)
            : ("number" == typeof t &&
                ((r = x(e)),
                (n = r),
                (C.test(n) && N.test(n[0].toUpperCase() + n.slice(1))) ||
                  A[r] ||
                  u(
                    "css-number",
                    'Number-typed values are deprecated for jQuery.fn.css( "' +
                      e +
                      '", value )'
                  )),
              Q.apply(this, arguments));
        },
        "css-number"
      );
    var S,
      P,
      k,
      H,
      E = s.data;
    i(
      s,
      "data",
      function (e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
          for (a in ((n = s.hasData(e) && E.call(this, e)), (o = {}), t))
            a !== x(a)
              ? (u(
                  "data-camelCase",
                  "jQuery.data() always sets/gets camelCased names: " + a
                ),
                (n[a] = t[a]))
              : (o[a] = t[a]);
          return E.call(this, e, o), t;
        }
        return t &&
          "string" == typeof t &&
          t !== x(t) &&
          (n = s.hasData(e) && E.call(this, e)) &&
          t in n
          ? (u(
              "data-camelCase",
              "jQuery.data() always sets/gets camelCased names: " + t
            ),
            2 < arguments.length && (n[t] = r),
            n[t])
          : E.apply(this, arguments);
      },
      "data-camelCase"
    ),
      s.fx &&
        ((k = s.Tween.prototype.run),
        (H = function (e) {
          return e;
        }),
        i(
          s.Tween.prototype,
          "run",
          function () {
            1 < s.easing[this.easing].length &&
              (u(
                "easing-one-arg",
                "'jQuery.easing." +
                  this.easing.toString() +
                  "' should use only one argument"
              ),
              (s.easing[this.easing] = H)),
              k.apply(this, arguments);
          },
          "easing-one-arg"
        ),
        (S = s.fx.interval),
        (P = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return (
                n.document.hidden || u("fx-interval", P),
                s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
              );
            },
            set: function (e) {
              u("fx-interval", P), (S = e);
            },
          }));
    var M = s.fn.load,
      q = s.event.add,
      O = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      r(
        s.event.props,
        "concat",
        s.event.props.concat,
        "event-old-patch",
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      i(
        s.event,
        "fix",
        function (e) {
          var t,
            r = e.type,
            n = this.fixHooks[r],
            o = s.event.props;
          if (o.length) {
            u(
              "event-old-patch",
              "jQuery.event.props are deprecated and removed: " + o.join()
            );
            while (o.length) s.event.addProp(o.pop());
          }
          if (
            n &&
            !n._migrated_ &&
            ((n._migrated_ = !0),
            u(
              "event-old-patch",
              "jQuery.event.fixHooks are deprecated and removed: " + r
            ),
            (o = n.props) && o.length)
          )
            while (o.length) s.event.addProp(o.pop());
          return (t = O.call(this, e)), n && n.filter ? n.filter(t, e) : t;
        },
        "event-old-patch"
      ),
      i(
        s.event,
        "add",
        function (e, t) {
          return (
            e === n &&
              "load" === t &&
              "complete" === n.document.readyState &&
              u(
                "load-after-event",
                "jQuery(window).on('load'...) called after load event occurred"
              ),
            q.apply(this, arguments)
          );
        },
        "load-after-event"
      ),
      s.each(["load", "unload", "error"], function (e, t) {
        i(
          s.fn,
          t,
          function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0]
              ? M.apply(this, e)
              : (u(
                  "shorthand-removed-v3",
                  "jQuery.fn." + t + "() is deprecated"
                ),
                e.splice(0, 0, t),
                arguments.length
                  ? this.on.apply(this, e)
                  : (this.triggerHandler.apply(this, e), this));
          },
          "shorthand-removed-v3"
        );
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          c(
            s.fn,
            r,
            function (e, t) {
              return 0 < arguments.length
                ? this.on(r, null, e, t)
                : this.trigger(r);
            },
            "shorthand-deprecated-v3",
            "jQuery.fn." + r + "() event shorthand is deprecated"
          );
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document &&
            u("ready-event", "'ready' event is deprecated");
        },
      }),
      c(
        s.fn,
        "bind",
        function (e, t, r) {
          return this.on(e, null, t, r);
        },
        "pre-on-methods",
        "jQuery.fn.bind() is deprecated"
      ),
      c(
        s.fn,
        "unbind",
        function (e, t) {
          return this.off(e, null, t);
        },
        "pre-on-methods",
        "jQuery.fn.unbind() is deprecated"
      ),
      c(
        s.fn,
        "delegate",
        function (e, t, r, n) {
          return this.on(t, e, r, n);
        },
        "pre-on-methods",
        "jQuery.fn.delegate() is deprecated"
      ),
      c(
        s.fn,
        "undelegate",
        function (e, t, r) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", r);
        },
        "pre-on-methods",
        "jQuery.fn.undelegate() is deprecated"
      ),
      c(
        s.fn,
        "hover",
        function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
        "pre-on-methods",
        "jQuery.fn.hover() is deprecated"
      );
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    var F =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.migrateEnablePatches("self-closed-tags");
    }),
      i(
        s,
        "htmlPrefilter",
        function (e) {
          var t, r;
          return (
            (r = (t = e).replace(F, "<$1></$2>")) !== t &&
              T(t) !== T(r) &&
              u(
                "self-closed-tags",
                "HTML tags must be properly nested and closed: " + t
              ),
            e.replace(F, "<$1></$2>")
          );
        },
        "self-closed-tags"
      ),
      s.migrateDisablePatches("self-closed-tags");
    var D,
      W,
      _,
      I = s.fn.offset;
    return (
      i(
        s.fn,
        "offset",
        function () {
          var e = this[0];
          return !e || (e.nodeType && e.getBoundingClientRect)
            ? I.apply(this, arguments)
            : (u(
                "offset-valid-elem",
                "jQuery.fn.offset() requires a valid DOM element"
              ),
              arguments.length ? this : void 0);
        },
        "offset-valid-elem"
      ),
      s.ajax &&
        ((D = s.param),
        i(
          s,
          "param",
          function (e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return (
              void 0 === t &&
                r &&
                (u(
                  "param-ajax-traditional",
                  "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
                ),
                (t = r)),
              D.call(this, e, t)
            );
          },
          "param-ajax-traditional"
        )),
      c(
        s.fn,
        "andSelf",
        s.fn.addBack,
        "andSelf",
        "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
      ),
      s.Deferred &&
        ((W = s.Deferred),
        (_ = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        i(
          s,
          "Deferred",
          function (e) {
            var a = W(),
              i = a.promise();
            function t() {
              var o = arguments;
              return s
                .Deferred(function (n) {
                  s.each(_, function (e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && "function" == typeof e.promise
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[t[0] + "With"](
                            this === i ? n.promise() : this,
                            r ? [e] : arguments
                          );
                    });
                  }),
                    (o = null);
                })
                .promise();
            }
            return (
              c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
              e && e.call(a, a),
              a
            );
          },
          "deferred-pipe"
        ),
        (s.Deferred.exceptionHook = W.exceptionHook)),
      s
    );
  });
(function ($) {
  function appendContent($el, content) {
    if (!content) return;
    $el.append(content.jquery ? content.clone() : content);
  }
  function appendBody($body, $element, opt) {
    var $content = $element.clone(opt.formValues);
    if (opt.formValues) {
      copyValues($element, $content, "select, textarea");
    }
    if (opt.removeScripts) {
      $content.find("script").remove();
    }
    if (opt.printContainer) {
      $content.appendTo($body);
    } else {
      $content.each(function () {
        $(this).children().appendTo($body);
      });
    }
  }
  function copyValues(origin, clone, elementSelector) {
    var $originalElements = origin.find(elementSelector);
    clone.find(elementSelector).each(function (index, item) {
      $(item).val($originalElements.eq(index).val());
    });
  }
  var opt;
  $.fn.printThis = function (options) {
    opt = $.extend({}, $.fn.printThis.defaults, options);
    var $element = this instanceof jQuery ? this : $(this);
    var strFrameName = "printThis-" + new Date().getTime();
    if (
      window.location.hostname !== document.domain &&
      navigator.userAgent.match(/msie/i)
    ) {
      var iframeSrc =
        'javascript:document.write("<head><script>document.domain=\\"' +
        document.domain +
        '\\";</s' +
        'cript></head><body></body>")';
      var printI = document.createElement("iframe");
      printI.name = "printIframe";
      printI.id = strFrameName;
      printI.className = "MSIE";
      document.body.appendChild(printI);
      printI.src = iframeSrc;
    } else {
      var $frame = $("<iframe id='" + strFrameName + "' name='printIframe' />");
      $frame.appendTo("body");
    }
    var $iframe = $("#" + strFrameName);
    if (!opt.debug)
      $iframe.css({
        position: "absolute",
        width: "0px",
        height: "0px",
        left: "-600px",
        top: "-600px",
      });
    if (typeof opt.beforePrint === "function") {
      opt.beforePrint();
    }
    setTimeout(function () {
      function setDocType($iframe, doctype) {
        var win, doc;
        win = $iframe.get(0);
        win = win.contentWindow || win.contentDocument || win;
        doc = win.document || win.contentDocument || win;
        doc.open();
        doc.write(doctype);
        doc.close();
      }
      if (opt.doctypeString) {
        setDocType($iframe, opt.doctypeString);
      }
      var $doc = $iframe.contents(),
        $head = $doc.find("head"),
        $body = $doc.find("body"),
        $base = $("base"),
        baseURL;
      if (opt.base === !0 && $base.length > 0) {
        baseURL = $base.attr("href");
      } else if (typeof opt.base === "string") {
        baseURL = opt.base;
      } else {
        baseURL = document.location.protocol + "//" + document.location.host;
      }
      $head.append('<base href="' + baseURL + '">');
      if (opt.importCSS)
        $("link[rel=stylesheet]").each(function () {
          var href = $(this).attr("href");
          if (href) {
            var media = $(this).attr("media") || "all";
            $head.append(
              "<link type='text/css' rel='stylesheet' href='" +
                href +
                "' media='" +
                media +
                "'>"
            );
          }
        });
      if (opt.importStyle)
        $("style").each(function () {
          $head.append(this.outerHTML);
        });
      if (opt.pageTitle) $head.append("<title>" + opt.pageTitle + "</title>");
      if (opt.loadCSS) {
        if ($.isArray(opt.loadCSS)) {
          jQuery.each(opt.loadCSS, function (index, value) {
            $head.append(
              "<link type='text/css' rel='stylesheet' href='" + this + "'>"
            );
          });
        } else {
          $head.append(
            "<link type='text/css' rel='stylesheet' href='" + opt.loadCSS + "'>"
          );
        }
      }
      var pageHtml = $("html")[0];
      $doc.find("html").prop("style", pageHtml.style.cssText);
      var tag = opt.copyTagClasses;
      if (tag) {
        tag = tag === !0 ? "bh" : tag;
        if (tag.indexOf("b") !== -1) {
          $body.addClass($("body")[0].className);
        }
        if (tag.indexOf("h") !== -1) {
          $doc.find("html").addClass(pageHtml.className);
        }
      }
      appendContent($body, opt.header);
      if (opt.canvas) {
        var canvasId = 0;
        $element
          .find("canvas")
          .addBack("canvas")
          .each(function () {
            $(this).attr("data-printthis", canvasId++);
          });
      }
      appendBody($body, $element, opt);
      if (opt.canvas) {
        $body.find("canvas").each(function () {
          var cid = $(this).data("printthis"),
            $src = $('[data-printthis="' + cid + '"]');
          this.getContext("2d").drawImage($src[0], 0, 0);
          if ($.isFunction($.fn.removeAttr)) {
            $src.removeAttr("data-printthis");
          } else {
            $.each($src, function (i, el) {
              el.removeAttribute("data-printthis");
            });
          }
        });
      }
      if (opt.removeInline) {
        var selector = opt.removeInlineSelector || "*";
        if ($.isFunction($.removeAttr)) {
          $body.find(selector).removeAttr("style");
        } else {
          $body.find(selector).attr("style", "");
        }
      }
      appendContent($body, opt.footer);
      function attachOnBeforePrintEvent($iframe, beforePrintHandler) {
        var win = $iframe.get(0);
        win = win.contentWindow || win.contentDocument || win;
        if (typeof beforePrintHandler === "function") {
          if ("matchMedia" in win) {
            win.matchMedia("print").addListener(function (mql) {
              if (mql.matches) beforePrintHandler();
            });
          } else {
            win.onbeforeprint = beforePrintHandler;
          }
        }
      }
      attachOnBeforePrintEvent($iframe, opt.beforePrintEvent);
      setTimeout(function () {
        if ($iframe.hasClass("MSIE")) {
          window.frames.printIframe.focus();
          $head.append("<script>  window.print(); </s" + "cript>");
        } else {
          if (document.queryCommandSupported("print")) {
            $iframe[0].contentWindow.document.execCommand("print", !1, null);
          } else {
            $iframe[0].contentWindow.focus();
            $iframe[0].contentWindow.print();
          }
        }
        if (!opt.debug) {
          setTimeout(function () {
            $iframe.remove();
          }, 1000);
        }
        if (typeof opt.afterPrint === "function") {
          opt.afterPrint();
        }
      }, opt.printDelay);
    }, 333);
  };
  $.fn.printThis.defaults = {
    debug: !1,
    importCSS: !0,
    importStyle: !1,
    printContainer: !0,
    loadCSS: "",
    pageTitle: "",
    removeInline: !1,
    removeInlineSelector: "*",
    printDelay: 333,
    header: null,
    footer: null,
    base: !1,
    formValues: !0,
    canvas: !1,
    doctypeString: "<!DOCTYPE html>",
    removeScripts: !1,
    copyTagClasses: !1,
    beforePrintEvent: null,
    beforePrint: null,
    afterPrint: null,
  };
})(jQuery);
/*!
 * Bootstrap Table of Contents v1.0.1 (http://afeld.github.io/bootstrap-toc/)
 * Copyright 2015 Aidan Feldman
 * Licensed under MIT (https://github.com/afeld/bootstrap-toc/blob/gh-pages/LICENSE.md) */
!(function (a) {
  "use strict";
  (window.Toc = {
    helpers: {
      findOrFilter: function (e, t) {
        var n = e.find(t);
        return e.filter(t).add(n).filter(":not([data-toc-skip])");
      },
      generateUniqueIdBase: function (e) {
        return (
          a(e)
            .text()
            .trim()
            .replace(/\'/gi, "")
            .replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-")
            .replace(/-{2,}/g, "-")
            .substring(0, 64)
            .replace(/^-+|-+$/gm, "")
            .toLowerCase() || e.tagName.toLowerCase()
        );
      },
      generateUniqueId: function (e) {
        for (var t = this.generateUniqueIdBase(e), n = 0; ; n++) {
          var r = t;
          if ((0 < n && (r += "-" + n), !document.getElementById(r))) return r;
        }
      },
      generateAnchor: function (e) {
        if (e.id) return e.id;
        var t = this.generateUniqueId(e);
        return (e.id = t);
      },
      createNavList: function () {
        return a('<ul class="nav navbar-nav"></ul>');
      },
      createChildNavList: function (e) {
        var t = this.createNavList();
        return e.append(t), t;
      },
      generateNavEl: function (e, t) {
        var n = a('<a class="nav-link"></a>');
        n.attr("href", "#" + e), n.text(t);
        var r = a("<li></li>");
        return r.append(n), r;
      },
      generateNavItem: function (e) {
        var t = this.generateAnchor(e),
          n = a(e),
          r = n.data("toc-text") || n.text();
        return this.generateNavEl(t, r);
      },
      getTopLevel: function (e) {
        for (var t = 1; t <= 6; t++) {
          if (1 < this.findOrFilter(e, "h" + t).length) return t;
        }
        return 1;
      },
      getHeadings: function (e, t) {
        var n = "h" + t,
          r = "h" + (t + 1);
        return this.findOrFilter(e, n + "," + r);
      },
      getNavLevel: function (e) {
        return parseInt(e.tagName.charAt(1), 10);
      },
      populateNav: function (r, a, e) {
        var i,
          s = r,
          c = this;
        e.each(function (e, t) {
          var n = c.generateNavItem(t);
          c.getNavLevel(t) === a
            ? (s = r)
            : i && s === r && (s = c.createChildNavList(i)),
            s.append(n),
            (i = n);
        });
      },
      parseOps: function (e) {
        var t;
        return (
          ((t = e.jquery ? { $nav: e } : e).$scope =
            t.$scope || a("body .doc-scrollable")),
          t
        );
      },
    },
    init: function (e) {
      (e = this.helpers.parseOps(e)).$nav.attr("data-toggle", "toc");
      var t = this.helpers.createChildNavList(e.$nav),
        n = this.helpers.getTopLevel(e.$scope),
        r = this.helpers.getHeadings(e.$scope, n);
      this.helpers.populateNav(t, n, r);
    },
  }),
    a(function () {
      a('nav[data-toggle="toc"]').each(function (e, t) {
        var n = a(t);
        Toc.init(n);
      });
    });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    let bgColor = window
        .getComputedStyle(document.body, null)
        .getPropertyValue("background-color"),
      bgColorRGBA = bgColor.replace(")", ", 0)").replace("rgb", "rgba");
    if (bgColor) {
      $(".fadeGradient").css(
        "background",
        "-webkit-linear-gradient(bottom, " +
          bgColor +
          " 15%, " +
          bgColorRGBA +
          " 100%)"
      );
    }
    if ($(".share-this-doc").length) {
      $(".share-this-doc").on("click", function (e) {
        e.preventDefault();
        let success_message = $(this).data("success-message");
        let $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(location).attr("href")).select();
        document.execCommand("copy");
        $temp.remove();
        setTimeout(function () {
          $(".ezd-link-copied-wrap").text(success_message).addClass("copied");
        }, 500);
        setTimeout(function () {
          $(".ezd-link-copied-wrap").removeClass("copied");
        }, 3500);
      });
    }
    $(".ezd-link-copied-wrap").click(function () {
      $(this).removeClass("copied");
    });
    $.fn.ezd_social_popup = function (
      e,
      intWidth,
      intHeight,
      strResize,
      blnResize
    ) {
      e.preventDefault();
      intWidth = intWidth || "500";
      intHeight = intHeight || "400";
      strResize = blnResize ? "yes" : "no";
      var strTitle =
          typeof this.attr("title") !== "undefined"
            ? this.attr("title")
            : "Social Share",
        strParam =
          "width=" +
          intWidth +
          ",height=" +
          intHeight +
          ",resizable=" +
          strResize,
        objWindow = window.open(this.attr("href"), strTitle, strParam).focus();
    };
    $(".social-links a:not(:first)").on("click", function (e) {
      $(this).ezd_social_popup(e);
    });
    let tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("body").attr({
      "data-bs-spy": "scroll",
      "data-bs-target": "#eazydocs-toc",
    });
    anchors.add(".doc-scrollable h2, .doc-scrollable h3, .doc-scrollable h4");
    $("form#edocs-contact-form").on("submit", function (e) {
      e.preventDefault();
      let that = $(this),
        url = that.attr("action"),
        type = that.attr("method");
      let name = $("#name").val();
      let email = $("#email").val();
      let subject = $("#subject").val();
      let doc_id = $("#doc_id").val();
      let message = $("#massage").val();
      $.ajax({
        url: eazydocs_local_object.ajaxurl,
        type: "post",
        dataType: "text",
        data: {
          action: "eazydocs_feedback_email",
          name: name,
          email: email,
          subject: subject,
          doc_id: doc_id,
          message: message,
        },
        beforeSend: function () {
          $(".eazydocs-form-result").html(
            '<div class="spinner-border spinner-border-sm" role="status">\n' +
              '<span class="visually-hidden">Loading...</span>\n' +
              "</div>"
          );
        },
        success: function (response) {
          $(".eazydocs-form-result").html(
            "Your message has been sent successfully."
          );
        },
        error: function () {
          $(".eazydocs-form-result").html("Oops! Something wrong, try again!");
        },
      });
      $("form#edocs-contact-form")[0].reset();
    });
    $(".vote-link-wrap a.h_btn").on("click", function (e) {
      e.preventDefault();
      let self = $(this);
      $.ajax({
        url: eazydocs_local_object.ajaxurl,
        method: "post",
        data: {
          action: "eazydocs_handle_feedback",
          post_id: self.data("id"),
          type: self.data("type"),
          _wpnonce: eazydocs_local_object.nonce,
        },
        beforeSend: function () {
          $(".eazydocs-feedback-wrap .vote-link-wrap").html(
            '<div class="spinner-border spinner-border-sm" role="status">\n' +
              '  <span class="visually-hidden">Loading...</span>\n' +
              "</div>"
          );
        },
        success: function (response) {
          $(".eazydocs-feedback-wrap").html(response.data);
        },
        error: function () {
          console.log("Oops! Something wrong, try again!");
        },
      });
    });
    if ($(".nav-sidebar > li").hasClass("active")) {
      $(".nav-sidebar > li.active").find("ul").slideDown(700);
    }
    function active_dropdown(is_ajax = !1) {
      if (is_ajax == !0) {
        $(document).on(
          "click",
          ".nav-sidebar .nav-item .nav-link",
          function (e) {
            $(".nav-sidebar .nav-item").removeClass("active");
            $(this).parent().addClass("active");
            $(this).parent().find("ul").first().show(300);
            $(this).parent().siblings().find("ul").hide(300);
          }
        );
      } else {
        $(".nav-sidebar > li .doc-link .icon").on("click", function (e) {
          $(this).parent().parent().find("ul").first().toggle(300);
          $(this).parent().parent().siblings().find("ul").hide(300);
        });
      }
    }
    active_dropdown();
    $(".nav-sidebar > li > .doc-link .icon").each(function () {
      let $this = $(this);
      $this.on("click", function (e) {
        let has = $this.parent().parent().hasClass("active");
        $(".nav-sidebar li").removeClass("active");
        if (has) {
          $this.parent().parent().removeClass("active");
        } else {
          $this.parent().parent().addClass("active");
        }
      });
    });
    $(".nav-sidebar > li > .dropdown_nav > li > .doc-link .icon").each(
      function () {
        let $this = $(this);
        $this.on("click", function (e) {
          $this.parent().parent().toggleClass("active");
        });
      }
    );
    $(".pageSideSection .print").on("click", function (e) {
      e.preventDefault();
      $(".doc-middle-content .doc-post-content").printThis({
        loadCSS: eazydocs_local_object.EAZYDOCS_FRONT_CSS + "/print.css",
      });
    });
    $('.doc_menu a[href^="#"]:not([href="#"]').on("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate({ scrollTop: $($anchor.attr("href")).offset().top }, 900);
      event.preventDefault();
    });
    if ($(".doc_documentation_area").length > 0) {
      var switchs = !0;
      $("#right").on("click", function (e) {
        e.preventDefault();
        if (switchs) {
          $(".doc_documentation_area").addClass("overlay");
          $(".doc_rightsidebar")
            .addClass("opened")
            .animate({ right: "0px" }, 100);
          switchs = !1;
        } else {
          $(".doc_documentation_area").removeClass("overlay");
          $(".doc_rightsidebar")
            .removeClass("opened")
            .animate({ right: "-290px" }, 100);
          switchs = !0;
        }
      });
      $("#left").on("click", function (e) {
        e.preventDefault();
        if (switchs) {
          $(".doc_documentation_area").addClass("overlay");
          $(".left-column .doc_left_sidebarlist")
            .addClass("opened")
            .animate({ left: "0px" }, 300);
          switchs = !1;
        } else {
          $(".doc_documentation_area").removeClass("overlay");
          $(".left-column .doc_left_sidebarlist")
            .removeClass("opened")
            .animate({ left: "-300px" }, 300);
          switchs = !0;
        }
      });
    }
    $(".single-docs .mobile_menu_btn").on("click", function () {
      $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
    });
    $(".single-docs .close_nav").on("click", function (e) {
      if ($(".side_menu").hasClass("menu-opened")) {
        $(".side_menu").removeClass("menu-opened");
        $("body").removeClass("menu-is-opened");
      } else {
        $(".side_menu").addClass("menu-opened");
      }
    });
    if ($("#doc_filter").length) {
      $("#doc_filter").keyup(function () {
        var value = $(this).val().toLowerCase();
        $(".nav-sidebar .page_item").each(function () {
          var lcval = $(this).text().toLowerCase();
          if (lcval.indexOf(value) > -1) {
            $(this).show(500);
          } else {
            $(this).hide(500);
          }
          if (value.length > 0) {
            $(".left-sidebar-results").find("li").addClass("active");
            $(".left-sidebar-results").find("li > ul").show(500);
          } else {
            $(".left-sidebar-results").find("li").removeClass("active");
            $(".left-sidebar-results").find("li > ul").hide(500);
          }
        });
      });
      document
        .getElementById("doc_filter")
        .addEventListener("search", function (event) {
          $(".nav-sidebar .page_item").show(300);
          $(".left-sidebar-results").find("li").removeClass("active");
          $(".left-sidebar-results").find("li > ul").hide(500);
        });
    }
    function docLeftSidebarToggle() {
      let left_column = $(".doc_mobile_menu");
      let middle_column = $(".doc-middle-content");
      $(".left-sidebar-toggle .left-arrow").on("click", function () {
        $(".doc_mobile_menu").hide(500);
        if (middle_column.hasClass("col-xl-7")) {
          $(".doc-middle-content")
            .removeClass("col-xl-7")
            .addClass("col-xl-10");
        } else if (middle_column.hasClass("col-xl-8")) {
          $(".doc-middle-content")
            .removeClass("col-xl-8")
            .addClass("col-xl-10");
        }
        $(".left-sidebar-toggle .left-arrow").hide(500);
        $(".left-sidebar-toggle .right-arrow").show(500);
      });
      $(".left-sidebar-toggle .right-arrow").on("click", function () {
        $(".doc_mobile_menu").show(500);
        if (middle_column.hasClass("col-xl-10")) {
          $(".doc-middle-content")
            .removeClass("col-xl-10")
            .addClass("col-xl-7");
        } else if (middle_column.hasClass("col-xl-8")) {
          $(".doc-middle-content")
            .removeClass("col-xl-10")
            .addClass("col-xl-8");
        }
        $(".left-sidebar-toggle .left-arrow").show(500);
        $(".left-sidebar-toggle .right-arrow").hide(500);
      });
    }
    docLeftSidebarToggle();
    var $window = $(window);
    var didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $("#sticky"),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;
    $window.on("scroll", function () {
      didScroll = !0;
      scrollTop = $(this).scrollTop();
    });
    setInterval(function () {
      if (didScroll && $(".navbar button.navbar-toggler.collapsed").length) {
        hasScrolled();
        didScroll = !1;
      }
    }, 200);
    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav
          .removeClass("fadeInDown")
          .addClass("fadeInUp")
          .css("top", -$mainNavHeight);
        $("body").removeClass("navbar-shown").addClass("navbar-hidden");
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.removeClass("fadeInUp").addClass("fadeInDown").css("top", 0);
          $("body").removeClass("navbar-hidden").addClass("navbar-shown");
        }
      }
      lastScrollTop = scrollTop;
    }
    function bodyFixed() {
      var windowWidth = $(window).width();
      if ($("#sticky_doc").length) {
        if (windowWidth > 576) {
          var tops = $("#sticky_doc");
          var leftOffset = tops.offset().top;
          $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= leftOffset) {
              tops.addClass("body_fixed");
            } else {
              tops.removeClass("body_fixed");
            }
          });
        }
      }
    }
    bodyFixed();
    function bodyFixed2() {
      var windowWidth = $(window).width();
      if ($("#sticky_doc2").length) {
        if (windowWidth > 576) {
          var tops = $("#sticky_doc2");
          var topOffset = tops.offset().top;
          var blogForm = $(".blog_comment_box");
          var blogFormTop = blogForm.offset().top - 300;
          $(window).on("scroll", function () {
            var scrolls = $(window).scrollTop();
            if (scrolls >= topOffset) {
              tops.addClass("stick");
            } else {
              tops.removeClass("stick");
            }
          });
          $('a[href="#hackers"]').click(function () {
            $("#hackers").css("padding-top", "100px");
            $(window).on("scroll", function () {
              var hackersOffset = $("#hackers").offset().top;
              var scrolls = $(window).scrollTop();
              if (scrolls < hackersOffset) {
                $("#hackers").css("padding-top", "0px");
              }
            });
          });
        }
      }
    }
    bodyFixed2();
    function Menu_js() {
      if ($(".submenu").length) {
        $(".submenu > .dropdown-toggle").click(function () {
          var location = $(this).attr("href");
          window.location.href = location;
          return !1;
        });
      }
    }
    Menu_js();
    if (eazydocs_local_object.is_doc_ajax == "1") {
      $(document).on(
        "click",
        ".single-docs .nav-sidebar .nav-item .dropdown_nav li a",
        function (e) {
          e.preventDefault();
          let self = $(this);
          let title = self.text();
          let postid = $(this).attr("data-postid");
          function changeurl(page_title) {
            let new_url = self.attr("href");
            window.history.pushState("data", "Title", new_url);
            document.title = page_title;
          }
          $.ajax({
            url: eazydocs_local_object.ajaxurl,
            method: "post",
            data: { action: "docs_single_content", postid: postid },
            beforeSend: function () {
              $("#reading-progress-fill").css({
                width: "100%",
                display: "block",
              });
            },
            success: function (response) {
              $("#reading-progress-fill").css({ display: "none" });
              $(".doc-middle-content").html(response);
              changeurl(title);
              $(".nav-sidebar .nav-item").removeClass("current_page_item");
              $(".nav-sidebar .nav-item .dropdown_nav li a").removeClass(
                "active"
              );
              if (!self.parent().parent().hasClass("has_child")) {
                self.addClass("active");
                self.parent().addClass("current_page_item");
              } else if (self.parent().parent().hasClass("has_child")) {
                self.parent().parent().addClass("current_page_item");
              }
              $("#eazydocs-toc").empty();
              Toc.init({
                $nav: $("#eazydocs-toc"),
                $scope: $(".doc-scrollable"),
              });
              docLeftSidebarToggle();
            },
            error: function () {
              console.log("Oops! Something wrong, try again!");
            },
          });
        }
      );
      $(document).on(
        "click",
        ".single-docs .nav-sidebar .nav-item .nav-link",
        function (e) {
          e.preventDefault();
          let self = $(this);
          let title = self.text();
          let postid = $(this).attr("data-postid");
          function changeurl(page_title) {
            let new_url = self.attr("href");
            window.history.pushState("data", "Title", new_url);
            document.title = page_title;
          }
          $.ajax({
            url: eazydocs_local_object.ajaxurl,
            method: "post",
            data: { action: "docs_single_content", postid: postid },
            beforeSend: function () {
              $("#reading-progress-fill").css({
                width: "100%",
                display: "block",
              });
            },
            success: function (response) {
              active_dropdown(!0);
              $("#reading-progress-fill").css({ display: "none" });
              $(".doc-middle-content").html(response);
              changeurl(title);
              $(".nav-sidebar .nav-item").removeClass("current_page_item");
              self.addClass("active");
              self.parent().parent().addClass("current_page_item");
              docLeftSidebarToggle();
              $("#eazydocs-toc").empty();
              Toc.init({
                $nav: $("#eazydocs-toc"),
                $scope: $(".doc-scrollable"),
              });
            },
            error: function () {
              console.log("Oops! Something wrong, try again!");
            },
          });
        }
      );
    }
    function createCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    function eraseCookie(name) {
      createCookie(name, "", -1);
    }
    let prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    let selectedNightTheme = readCookie("body_dark");
    if (
      selectedNightTheme == "true" ||
      (selectedNightTheme === null && prefersDark)
    ) {
      applyNight();
      $("#ezd_dark_switch").prop("checked", !0);
    } else {
      applyDay();
      $("#ezd_dark_switch").prop("checked", !1);
    }
    function applyNight() {
      $("body").addClass("body_dark");
      $(".light-mode").removeClass("active");
      $(".dark-mode").addClass("active");
    }
    function applyDay() {
      $("body").removeClass("body_dark");
      $(".dark-mode").removeClass("active");
      $(".light-mode").addClass("active");
    }
    $("#ezd_dark_switch").change(function () {
      if ($(this).is(":checked")) {
        applyNight();
        $(".tab-btns").removeClass("active");
        createCookie("body_dark", !0, 999);
      } else {
        applyDay();
        $(".tab-btns").addClass("active");
        createCookie("body_dark", !1, 999);
      }
    });
    if (
      $(
        ".ezd_connect_theme:contains('Docly'), .ezd_connect_theme:contains('Docy')"
      ).length
    ) {
    } else {
      $("body").prepend("<div class='ezd_click_capture'></div>");
    }
    $("#ezd-contributor-search").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $(".users_wrap_item").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
    var urlHash = window.location.href.split("#")[1];
    if (urlHash) {
      $("html,body").animate({ scrollTop: $("#" + urlHash).offset().top }, 30);
    }
    if ($("#rvfs-controllers button").length) {
      var $speech = $(
        "#post p, #post ul li:not(.process_tab_shortcode ul li), #post ol li, #post table:not(.basic_table_info,.table-dark), #post table tr td, #post .tab-content"
      );
      var $defaultSize = $speech.css("fontSize");
      $("#rvfs-controllers button").click(function () {
        var num = parseFloat($speech.css("fontSize"));
        switch (this.id) {
          case "switcher-large":
            num *= 1.1;
            break;
          case "switcher-small":
            num /= 1.1;
            break;
          default:
            num = parseFloat($defaultSize);
        }
        $speech.animate({ fontSize: num + "px" });
      });
    }
    if (document.getElementById("ezd_searchInput")) {
      document
        .getElementById("ezd_searchInput")
        .addEventListener("search", function (event) {
          $("#ezd-search-results").empty().removeClass("ajax-search");
        });
    }
  });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    let parent_selector = document.querySelector(".sticky-lg-top");
    if (parent_selector) {
      let parent = parent_selector.parentElement;
      while (parent) {
        const hasOverflow = getComputedStyle(parent).overflow;
        if (hasOverflow !== "visible") {
          parent.style.overflow = "visible";
        }
        parent = parent.parentElement;
      }
    }
    $(".body_wrapper").addClass("eazydocs_assistant_body");
    $(window).scroll(function () {
      $(".doc-book-layout .nav-sidebar li a").filter(".nav-link").index();
    });
    if ($(".doc_documentation_area.fullscreen-layout").length > 0) {
      var switchs = !0;
      $("#right").on("click", function (e) {
        e.preventDefault();
        if (switchs) {
          $(".doc_documentation_area.fullscreen-layout").addClass("overlay");
          $(this).animate({ right: "250px" }, 500);
          switchs = !1;
        } else {
          $(".doc_documentation_area.fullscreen-layout").removeClass("overlay");
          $(this).animate({ right: "0px" }, 500);
          switchs = !0;
        }
      });
      $("#left").on("click", function (e) {
        e.preventDefault();
        if (switchs) {
          $(".doc_documentation_area.fullscreen-layout").addClass("overlay");
          $(".fullscreen-layout .doc_mobile_menu.left-column").animate(
            { left: "0px" },
            300
          );
          switchs = !1;
        } else {
          $(".doc_documentation_area.fullscreen-layout").removeClass("overlay");
          $(".fullscreen-layout .doc_mobile_menu.left-column").animate(
            { left: "-260px" },
            300
          );
          switchs = !0;
        }
      });
    }
  });
})(jQuery);
jQuery("#ezd_searchInput").focus(function () {
  jQuery("body").addClass("ezd-search-focused");
  jQuery("form.ezd_search_form").css("z-index", "999");
});
jQuery(".focus_overlay").click(function () {
  jQuery("body").removeClass("ezd-search-focused");
  jQuery("form.ezd_search_form").css("z-index", "unset");
});
jQuery(".ezd_search_keywords ul li a").on("click", function (e) {
  e.preventDefault();
  var content = jQuery(this).text();
  jQuery("#ezd_searchInput").val(content).focus();
  ezSearchResults();
});
function ezSearchResults() {
  let keyword = jQuery("#ezd_searchInput").val();
  let noresult = jQuery("#ezd-search-results").attr("data-noresult");
  if (keyword == "") {
    jQuery("#ezd-search-results").removeClass("ajax-search").html("");
  } else {
    jQuery.ajax({
      url: eazydocs_local_object.ajaxurl,
      type: "post",
      data: { action: "eazydocs_search_results", keyword: keyword },
      beforeSend: function () {
        jQuery(".spinner-border").show();
      },
      success: function (data) {
        jQuery(".spinner-border").hide();
        jQuery(document).keyup(function (e) {
          if (e.key === "Escape") {
            jQuery("#ezd-search-results").removeClass("ajax-search").html("");
          }
        });
        if (data.length > 0) {
          jQuery("#ezd-search-results").addClass("ajax-search").html(data);
        } else {
          var data_error = '<h5 class="error title">' + noresult + "</h5>";
          jQuery("#ezd-search-results").html(data_error);
        }
      },
    });
  }
}
function ezdFetchDelay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
jQuery("#ezd_searchInput").keyup(
  ezdFetchDelay(function (e) {
    let keyword = jQuery("#ezd_searchInput").val();
    let noresult = jQuery("#ezd-search-results").attr("data-noresult");
    if (keyword == "") {
      jQuery("#ezd-search-results").removeClass("ajax-search").html("");
    } else {
      jQuery.ajax({
        url: eazydocs_local_object.ajaxurl,
        type: "post",
        data: { action: "eazydocs_search_results", keyword: keyword },
        beforeSend: function () {
          jQuery(".spinner-border").show();
        },
        success: function (data) {
          jQuery(".spinner-border").hide();
          jQuery(document).keyup(function (e) {
            if (e.key === "Escape") {
              jQuery("#ezd-search-results").removeClass("ajax-search").html("");
            }
          });
          if (data.length > 0) {
            jQuery("#ezd-search-results").addClass("ajax-search").html(data);
          } else {
            var data_error = '<h5 class="error title">' + noresult + "</h5>";
            jQuery("#ezd-search-results").html(data_error);
          }
        },
      });
    }
  }, 500)
);
(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".topic_list_item ul.navbar-nav li:not(.load-more)").hide();
    $("ul.related-doc-list li").slice(0, 4).show();
    $("#more-related").click(function (e) {
      e.preventDefault();
      $(".related-doc-list li:hidden").slice(0, 4).fadeIn("slow");
      if ($("ul.related-doc-list li:hidden").length == 0) {
        $("#more-related").fadeOut("slow");
      }
    });
  });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    $("ul.recent-doc-list li").slice(0, 4).show();
    $("#more-recent").click(function (e) {
      e.preventDefault();
      $(".recent-doc-list li:hidden").slice(0, 4).fadeIn("slow");
      if ($("ul.recent-doc-list li:hidden").length == 0) {
        $("#more-recent").fadeOut("slow");
      }
    });
  });
})(jQuery);
document.getElementById("ak_js_1").setAttribute("value", new Date().getTime());
(() => {
  "use strict";
  var t = {
      d: (e, s) => {
        for (var i in s)
          t.o(s, i) &&
            !t.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: s[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  function s(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, s) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, s);
        }),
        t
      );
    };
    this.tree = e();
    const s =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, i] of this.formData) {
      const o = t.match(s);
      if (o)
        if ("" === o.groups.array) this.tree.set(o.groups.name, i);
        else {
          const t = [
            ...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(o.groups.name);
          const s = t.pop();
          t.reduce((t, s) => {
            if (
              (/^[0-9]+$/.test(s) && (s = parseInt(s)), t.get(s) instanceof Map)
            )
              return t.get(s);
            const i = e();
            return t.set(s, i), i;
          }, this.tree).set(s, i);
        }
    }
  }
  t.r(e),
    t.d(e, {
      date: () => d,
      email: () => r,
      enum: () => f,
      file: () => m,
      maxdate: () => b,
      maxfilesize: () => z,
      maxitems: () => u,
      maxlength: () => v,
      maxnumber: () => x,
      mindate: () => y,
      minfilesize: () => A,
      minitems: () => h,
      minlength: () => g,
      minnumber: () => w,
      number: () => c,
      required: () => n,
      requiredfile: () => a,
      tel: () => l,
      url: () => p,
    }),
    (s.prototype.entries = function () {
      return this.tree.entries();
    }),
    (s.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (s.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const s = [];
        if (t instanceof Map) for (const [i, o] of t) s.push(...e(o));
        else "" !== t && s.push(t);
        return s;
      };
      return e(this.get(t));
    }),
    (s.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (s.prototype.keys = function () {
      return this.tree.keys();
    }),
    (s.prototype.values = function () {
      return this.tree.values();
    });
  const i = s;
  function o({ rule: t, field: e, error: s, ...i }) {
    (this.rule = t), (this.field = e), (this.error = s), (this.properties = i);
  }
  const n = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new o(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, s] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(s)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s)) return !1;
          const i = s.split(".");
          if (i.length < 2) return !1;
          for (const t of i) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new o(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new o(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new o(this);
    },
    d = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t.trim()))
      )
        throw new o(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      s = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (s) {
                      const t = s.groups.toplevel.toLowerCase(),
                        i = s.groups.sub.toLowerCase();
                      for (const [o, n] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === i && n.startsWith(t + "/")) || n === s[0]) &&
                          e.push(...o.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new o(this);
    },
    f = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => this.accept?.some((e) => t === String(e)))
      )
        throw new o(this);
    },
    h = function (t) {
      if (t.getAll(this.field).length < parseInt(this.threshold))
        throw new o(this);
    },
    u = function (t) {
      const e = t.getAll(this.field);
      if (parseInt(this.threshold) < e.length) throw new o(this);
    },
    g = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        0 !== s && s < parseInt(this.threshold))
      )
        throw new o(this);
    },
    v = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    },
    w = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new o(this);
    },
    x = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new o(this);
    },
    y = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new o(this);
    },
    b = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new o(this);
    },
    A = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        s < parseInt(this.threshold))
      )
        throw new o(this);
    },
    z = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        parseInt(this.threshold) < s)
      )
        throw new o(this);
    };
  var $;
  window.swv = {
    validators: e,
    validate: (t, s, n = {}) => {
      const a = (t.rules ?? []).filter(
        ({ rule: t, ...s }) =>
          "function" == typeof e[t] &&
          ("function" != typeof e[t].matches || e[t].matches(s, n))
      );
      if (!a.length) return new Map();
      const r = new i(s),
        p = a.reduce((t, s) => {
          const { rule: i, ...n } = s;
          if (t.get(n.field)?.error) return t;
          try {
            e[i].call({ rule: i, ...n }, r);
          } catch (e) {
            if (e instanceof o) return t.set(n.field, e);
          }
          return t;
        }, new Map());
      for (const t of r.keys())
        p.has(t) || p.set(t, { validInputs: r.getAll(t) });
      return p;
    },
    ...(null !== ($ = window.swv) && void 0 !== $ ? $ : {}),
  };
})();
var wpcf7 = {
  api: {
    root: "https://wordpress-theme.spider-themes.net/banca/wp-json/",
    namespace: "contact-form-7/v1",
  },
  cached: "1",
};
(() => {
  "use strict";
  const e = (e) => Math.abs(parseInt(e, 10)),
    t = (e, t) => {
      const a = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["validating", "validating"],
        ["payment_required", "payment-required"],
      ]);
      a.has(t) && (t = a.get(t)),
        Array.from(a.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      const n = e.getAttribute("data-status");
      return (
        (e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        n && n !== t && e.classList.remove(n),
        t
      );
    },
    a = (e, t, a) => {
      const n = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: a });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(n);
    },
    n = (e) => {
      const { root: t, namespace: a = "contact-form-7/v1" } = wpcf7.api;
      return r.reduceRight(
        (e, t) => (a) => t(a, e),
        (e) => {
          let n,
            r,
            {
              url: o,
              path: c,
              endpoint: s,
              headers: i,
              body: l,
              data: d,
              ...p
            } = e;
          "string" == typeof s &&
            ((n = a.replace(/^\/|\/$/g, "")),
            (r = s.replace(/^\//, "")),
            (c = r ? n + "/" + r : n)),
            "string" == typeof c &&
              (-1 !== t.indexOf("?") && (c = c.replace("?", "&")),
              (c = c.replace(/^\//, "")),
              (o = t + c)),
            (i = { Accept: "application/json, */*;q=0.1", ...i }),
            delete i["X-WP-Nonce"],
            d &&
              ((l = JSON.stringify(d)),
              (i["Content-Type"] = "application/json"));
          const u = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            f = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(o || c || window.location.href, {
              ...p,
              headers: i,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw f;
                      });
                    throw f;
                  }),
              () => {
                throw u;
              }
            );
        }
      )(e);
    },
    r = [];
  function o(e) {
    var a, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const { target: o, scope: l = e, ...d } = r;
    if (void 0 === (null === (a = e.wpcf7) || void 0 === a ? void 0 : a.schema))
      return;
    const p = { ...e.wpcf7.schema };
    if (void 0 !== o) {
      if (!e.contains(o)) return;
      if (!o.closest(".wpcf7-form-control-wrap[data-name]")) return;
      if (o.closest(".novalidate")) return;
    }
    const u = new FormData(),
      f = [];
    for (const e of l.querySelectorAll(".wpcf7-form-control-wrap"))
      if (
        !e.closest(".novalidate") &&
        (e
          .querySelectorAll(":where( input, textarea, select ):enabled")
          .forEach((e) => {
            if (e.name)
              switch (e.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                  break;
                case "checkbox":
                case "radio":
                  e.checked && u.append(e.name, e.value);
                  break;
                case "select-multiple":
                  for (const t of e.selectedOptions) u.append(e.name, t.value);
                  break;
                case "file":
                  for (const t of e.files) u.append(e.name, t);
                  break;
                default:
                  u.append(e.name, e.value);
              }
          }),
        e.dataset.name &&
          (f.push(e.dataset.name),
          e.setAttribute("data-under-validation", "1"),
          e.contains(o)))
      )
        break;
    p.rules = (null !== (n = p.rules) && void 0 !== n ? n : []).filter((e) => {
      let { field: t } = e;
      return f.includes(t);
    });
    const m = e.getAttribute("data-status");
    Promise.resolve(t(e, "validating"))
      .then((t) => {
        if (void 0 !== swv) {
          const t = swv.validate(p, u, r);
          for (const [a, { error: n, validInputs: r }] of t)
            s(e, a),
              void 0 !== n && c(e, a, n, { scope: l }),
              i(e, a, null != r ? r : []);
        }
      })
      .finally(() => {
        t(e, m),
          e
            .querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]")
            .forEach((e) => {
              e.removeAttribute("data-under-validation");
            });
      });
  }
  n.use = (e) => {
    r.unshift(e);
  };
  const c = (e, t, a, n) => {
      var r;
      const { scope: o = e, ...c } = null != n ? n : {},
        s = `${
          null === (r = e.wpcf7) || void 0 === r ? void 0 : r.unitTag
        }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
        i = e.querySelector(
          `.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`
        );
      (() => {
        const t = document.createElement("li");
        t.setAttribute("id", s),
          i && i.id
            ? t.insertAdjacentHTML("beforeend", `<a href="#${i.id}">${a}</a>`)
            : t.insertAdjacentText("beforeend", a),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(t);
      })(),
        o
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((t) => {
            if (
              "validating" === e.getAttribute("data-status") &&
              !t.dataset.underValidation
            )
              return;
            const n = document.createElement("span");
            n.classList.add("wpcf7-not-valid-tip"),
              n.setAttribute("aria-hidden", "true"),
              n.insertAdjacentText("beforeend", a),
              t.appendChild(n),
              t.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "true");
              }),
              t.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.classList.add("wpcf7-not-valid"),
                  e.setAttribute("aria-describedby", s),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity(a),
                  e.closest(".use-floating-validation-tip") &&
                    (e.addEventListener("focus", (e) => {
                      n.setAttribute("style", "display: none");
                    }),
                    n.addEventListener("click", (e) => {
                      n.setAttribute("style", "display: none");
                    }));
              });
          });
    },
    s = (e, t) => {
      var a, n;
      const r = `${
        null === (a = e.wpcf7) || void 0 === a ? void 0 : a.unitTag
      }-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
      null ===
        (n = e.wpcf7.parent.querySelector(
          `.screen-reader-response ul li#${r}`
        )) ||
        void 0 === n ||
        n.remove(),
        e
          .querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`)
          .forEach((e) => {
            var t;
            null === (t = e.querySelector(".wpcf7-not-valid-tip")) ||
              void 0 === t ||
              t.remove(),
              e.querySelectorAll("[aria-invalid]").forEach((e) => {
                e.setAttribute("aria-invalid", "false");
              }),
              e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
                e.removeAttribute("aria-describedby"),
                  e.classList.remove("wpcf7-not-valid"),
                  "function" == typeof e.setCustomValidity &&
                    e.setCustomValidity("");
              });
          });
    },
    i = (e, t, a) => {
      e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e) => {
        if ("output" === e.tagName.toLowerCase()) {
          const t = e;
          0 === a.length && a.push(t.dataset.default),
            a.slice(0, 1).forEach((e) => {
              e instanceof File && (e = e.name), (t.textContent = e);
            });
        } else
          e.querySelectorAll("output").forEach((e) => {
            e.hasAttribute("data-default")
              ? 0 === a.length
                ? e.removeAttribute("hidden")
                : e.setAttribute("hidden", "hidden")
              : e.remove();
          }),
            a.forEach((a) => {
              a instanceof File && (a = a.name);
              const n = document.createElement("output");
              n.setAttribute("name", t), (n.textContent = a), e.appendChild(n);
            });
      });
    };
  function l(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (wpcf7.blocked) return d(e), void t(e, "submitting");
    const o = new FormData(e);
    r.submitter &&
      r.submitter.name &&
      o.append(r.submitter.name, r.submitter.value);
    const s = {
      contactFormId: e.wpcf7.id,
      pluginVersion: e.wpcf7.pluginVersion,
      contactFormLocale: e.wpcf7.locale,
      unitTag: e.wpcf7.unitTag,
      containerPostId: e.wpcf7.containerPost,
      status: e.wpcf7.status,
      inputs: Array.from(o, (e) => {
        const t = e[0],
          a = e[1];
        return !t.match(/^_/) && { name: t, value: a };
      }).filter((e) => !1 !== e),
      formData: o,
    };
    n({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: o,
      wpcf7: { endpoint: "feedback", form: e, detail: s },
    })
      .then((n) => {
        const r = t(e, n.status);
        return (
          (s.status = n.status),
          (s.apiResponse = n),
          ["invalid", "unaccepted", "spam", "aborted"].includes(r)
            ? a(e, r, s)
            : ["sent", "failed"].includes(r) && a(e, `mail${r}`, s),
          a(e, "submit", s),
          n
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            t.invalid_fields.forEach((t) => {
              c(e, t.field, t.message);
            }),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  n.use((e, n) => {
    if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
      const { form: n, detail: r } = e.wpcf7;
      d(n), a(n, "beforesubmit", r), t(n, "submitting");
    }
    return n(e);
  });
  const d = (e) => {
    e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t) => {
      t.dataset.name && s(e, t.dataset.name);
    }),
      (e.wpcf7.parent.querySelector(
        '.screen-reader-response [role="status"]'
      ).innerText = ""),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function p(e) {
    const r = new FormData(e),
      o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(r, (e) => {
          const t = e[0],
            a = e[1];
          return !t.match(/^_/) && { name: t, value: a };
        }).filter((e) => !1 !== e),
        formData: r,
      };
    n({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: e, detail: o },
    })
      .then((n) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
          : t(e, "init"),
          (o.apiResponse = n),
          a(e, "reset", o);
      })
      .catch((e) => console.error(e));
  }
  n.use((e, a) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: a, detail: n } = e.wpcf7;
      d(a), t(a, "resetting");
    }
    return a(e);
  });
  const u = (e, t) => {
      for (const a in t) {
        const n = t[a];
        e.querySelectorAll(`input[name="${a}"]`).forEach((e) => {
          e.value = "";
        }),
          e
            .querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`)
            .forEach((e) => {
              e.setAttribute("src", n);
            });
        const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        r &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`)
            .forEach((e) => {
              e.value = r[1];
            });
      }
    },
    f = (e, t) => {
      for (const a in t) {
        const n = t[a][0],
          r = t[a][1];
        e.querySelectorAll(
          `.wpcf7-form-control-wrap[data-name="${a}"]`
        ).forEach((e) => {
          (e.querySelector(`input[name="${a}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = n),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value =
              r);
        });
      }
    };
  function m(t) {
    const a = new FormData(t);
    (t.wpcf7 = {
      id: e(a.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: a.get("_wpcf7_version"),
      locale: a.get("_wpcf7_locale"),
      unitTag: a.get("_wpcf7_unit_tag"),
      containerPost: e(a.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
      schema: void 0,
    }),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const a = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              }
            );
          });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const a = t.querySelector("input.wpcf7-free-text"),
            n = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (a.disabled = !n.checked),
            e.addEventListener("change", (e) => {
              (a.disabled = !n.checked),
                e.target === n && n.checked && a.focus();
            });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let a = e.value.trim();
            a &&
              !a.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== a.indexOf(".") &&
              ((a = a.replace(/^\/+/, "")), (a = "http://" + a)),
              (e.value = a);
          });
        });
      })(t),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const a = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && a.checked) ||
              (!e.classList.contains("invert") && !a.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      ((t) => {
        const a = (t, a) => {
            const n = e(t.getAttribute("data-starting-value")),
              r = e(t.getAttribute("data-maximum-value")),
              o = e(t.getAttribute("data-minimum-value")),
              c = t.classList.contains("down")
                ? n - a.value.length
                : a.value.length;
            t.setAttribute("data-current-value", c),
              (t.innerText = c),
              r && r < a.value.length
                ? t.classList.add("too-long")
                : t.classList.remove("too-long"),
              o && a.value.length < o
                ? t.classList.add("too-short")
                : t.classList.remove("too-short");
          },
          n = (e) => {
            (e = { init: !1, ...e }),
              t.querySelectorAll(".wpcf7-character-count").forEach((n) => {
                const r = n.getAttribute("data-target-name"),
                  o = t.querySelector(`[name="${r}"]`);
                o &&
                  ((o.value = o.defaultValue),
                  a(n, o),
                  e.init &&
                    o.addEventListener("keyup", (e) => {
                      a(n, o);
                    }));
              });
          };
        n({ init: !0 }),
          t.addEventListener("wpcf7reset", (e) => {
            n();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        wpcf7.submit(t, { submitter: e.submitter }), e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && f(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && u(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && f(t, e.detail.apiResponse.quiz);
      }),
      n({
        endpoint: `contact-forms/${t.wpcf7.id}/feedback/schema`,
        method: "GET",
      }).then((e) => {
        t.wpcf7.schema = e;
      }),
      t.addEventListener("change", (e) => {
        e.target.closest(".wpcf7-form-control") &&
          wpcf7.validate(t, { target: e.target });
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    "undefined" != typeof wpcf7
      ? void 0 !== wpcf7.api
        ? "function" == typeof window.fetch
          ? "function" == typeof window.FormData
            ? "function" == typeof NodeList.prototype.forEach
              ? "function" == typeof String.prototype.replaceAll
                ? ((wpcf7 = {
                    init: m,
                    submit: l,
                    reset: p,
                    validate: o,
                    ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
                  }),
                  document.querySelectorAll(".wpcf7 > form").forEach((e) => {
                    wpcf7.init(e),
                      e.closest(".wpcf7").classList.replace("no-js", "js");
                  }))
                : console.error(
                    "Your browser does not support String.replaceAll()."
                  )
              : console.error(
                  "Your browser does not support NodeList.forEach()."
                )
            : console.error("Your browser does not support window.FormData().")
          : console.error("Your browser does not support window.fetch().")
        : console.error("wpcf7.api is not defined.")
      : console.error("wpcf7 is not defined.");
  });
})();
(function ($) {
  "use strict";
  $(document).ready(function () {
    if ($(".color_switcher_zone").length > 0) {
      var switchs = !0;
      $(".dt_open_settings").on("click", function (e) {
        e.preventDefault();
        if (switchs) {
          $(this).addClass("active");
          $(".color_switcher_zone")
            .animate({ right: "0px" }, 400)
            .addClass("switcher_open");
          switchs = !1;
        } else {
          $(this).removeClass("active");
          $(".color_switcher_zone").animate({ right: "-366px" }, 400);
          switchs = !0;
        }
      });
      if ($("#grad_actionColors a").length > 0) {
        $("#grad_actionColors a").on("click", function (e) {
          e.preventDefault();
          var color = $(this).attr("href");
          $("#grad_actionColors a").removeClass("active");
          $(this).addClass("active");
        });
      }
    }
  });
  $(".body_wrapper").mouseup(function (e) {
    if (e.which == 1) {
      var container = $(".switcher_open .color_switcher_inner");
      if (container) {
        $(".color_switcher_zone").animate({ right: "-366px" }, 400);
      }
    }
  });
  $(".js-switch-btn .dtss_btn").on("click", function (e) {
    e.preventDefault();
    $(".js-switch-btn .dtss_btn").removeClass("active");
    $(this).toggleClass("active");
  });
  $(".js-switch-btn .boxed").on("click", function (e) {
    $(".container-fluid").attr("class", "container");
  });
  $(".js-switch-btn .full").on("click", function (e) {
    $(".container").attr("class", "container-fluid pl-60 pr-60");
    $(".container.custom_container").attr(
      "class",
      "container-fluid pl-60 pr-60"
    );
  });
  $(".menu-align .left-align").on("click", function (e) {
    $("#menu-main-menu").removeClass("m-auto");
    $("#navbarSupportedContent").addClass("justify-content-lg-between ms-5");
    $(".right-nav").addClass("m-0");
  });
  $(".menu-align .center-align").on("click", function (e) {
    $("#menu-main-menu").addClass("m-auto");
    $(".right-nav").addClass("m-0");
  });
  $(".menu-align .right-align").on("click", function (e) {
    $("#menu-main-menu").removeClass("m-auto");
    $("#navbarSupportedContent").removeClass("justify-content-lg-between ms-5");
    $(".right-nav").removeClass("m-0");
  });
  var colorList = [
    "000000",
    "993300",
    "333300",
    "003300",
    "000066",
    "14a800",
    "333333",
    "660000",
    "FF6633",
    "666633",
    "336633",
    "336666",
    "0066FF",
    "666699",
    "666666",
    "CC3333",
    "FF9933",
    "99CC33",
    "669966",
    "66CCCC",
    "3366FF",
    "663366",
    "999999",
    "CC66FF",
    "FFCC33",
    "99CCCC",
    "66CCFF",
    "993366",
    "FFCC99",
    "CC99FF",
  ];
  var picker = $("#color-picker");
  for (var i = 0; i < colorList.length; i++) {
    picker.append(
      '<li class="color-item" data-hex="' +
        "#" +
        colorList[i] +
        '" style="background-color:' +
        "#" +
        colorList[i] +
        ';"></li>'
    );
  }
  $("body").click(function () {
    picker.fadeOut();
  });
  $(".call-picker").click(function (event) {
    event.stopPropagation();
    picker.fadeIn();
    picker.children("li").hover(function () {
      var codeHex = $(this).data("hex");
      $(".color-holder").css("background-color", codeHex);
      $(":root").css("--primary-color", codeHex);
      $("#pickcolor").val(codeHex);
    });
  });
  $("#is_box_shadow_aj").change(function (e) {
    e.preventDefault();
    if (!$(this).is(":checked")) {
      $(
        "#bbpress-forums #new-post > fieldset.bbp-form, .main-post, .all-answers, .bbp-reply-form, .search-main, #comments, .blog_comment_box, .bb-radius "
      ).css("box-shadow", "none");
    } else {
      $(
        "#bbpress-forums #new-post > fieldset.bbp-form, .main-post, .all-answers, .bbp-reply-form, .search-main, #comments, .blog_comment_box, .bb-radius "
      ).css("box-shadow", "0 10px 40px rgb(0 0 0 / 8%)");
    }
  });
})(jQuery);
(function (root, factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.AnchorJS = factory();
    root.anchors = new root.AnchorJS();
  }
})(this, function () {
  "use strict";
  function AnchorJS(options) {
    this.options = options || {};
    this.elements = [];
    function _applyRemainingDefaultOptions(opts) {
      opts.icon = opts.hasOwnProperty("icon") ? opts.icon : "\ue9cb";
      opts.visible = opts.hasOwnProperty("visible") ? opts.visible : "hover";
      opts.placement = opts.hasOwnProperty("placement")
        ? opts.placement
        : "right";
      opts.ariaLabel = opts.hasOwnProperty("ariaLabel")
        ? opts.ariaLabel
        : "Anchor";
      opts.class = opts.hasOwnProperty("class") ? opts.class : "";
      opts.base = opts.hasOwnProperty("base") ? opts.base : "";
      opts.truncate = opts.hasOwnProperty("truncate")
        ? Math.floor(opts.truncate)
        : 64;
      opts.titleText = opts.hasOwnProperty("titleText") ? opts.titleText : "";
    }
    _applyRemainingDefaultOptions(this.options);
    this.isTouchDevice = function () {
      return !!(
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof DocumentTouch)
      );
    };
    this.add = function (selector) {
      var elements,
        elsWithIds,
        idList,
        elementID,
        i,
        index,
        count,
        tidyText,
        newTidyText,
        anchor,
        visibleOptionToUse,
        hrefBase,
        indexesToDrop = [];
      _applyRemainingDefaultOptions(this.options);
      visibleOptionToUse = this.options.visible;
      if (visibleOptionToUse === "touch") {
        visibleOptionToUse = this.isTouchDevice() ? "always" : "hover";
      }
      if (!selector) {
        selector = "h2, h3, h4, h5, h6";
      }
      elements = _getElements(selector);
      if (elements.length === 0) {
        return this;
      }
      _addBaselineStyles();
      elsWithIds = document.querySelectorAll("[id]");
      idList = [].map.call(elsWithIds, function assign(el) {
        return el.id;
      });
      for (i = 0; i < elements.length; i++) {
        if (this.hasAnchorJSLink(elements[i])) {
          indexesToDrop.push(i);
          continue;
        }
        if (elements[i].hasAttribute("id")) {
          elementID = elements[i].getAttribute("id");
        } else if (elements[i].hasAttribute("data-anchor-id")) {
          elementID = elements[i].getAttribute("data-anchor-id");
        } else {
          tidyText = this.urlify(elements[i].textContent);
          newTidyText = tidyText;
          count = 0;
          do {
            if (index !== undefined) {
              newTidyText = tidyText + "-" + count;
            }
            index = idList.indexOf(newTidyText);
            count += 1;
          } while (index !== -1);
          index = undefined;
          idList.push(newTidyText);
          elements[i].setAttribute("id", newTidyText);
          elementID = newTidyText;
        }
        anchor = document.createElement("a");
        anchor.className = "anchorjs-link " + this.options.class;
        anchor.setAttribute("aria-label", this.options.ariaLabel);
        anchor.setAttribute("data-anchorjs-icon", this.options.icon);
        if (this.options.titleText) {
          anchor.title = this.options.titleText;
        }
        hrefBase = document.querySelector("base")
          ? window.location.pathname + window.location.search
          : "";
        hrefBase = this.options.base || hrefBase;
        anchor.href = hrefBase + "#" + elementID;
        if (visibleOptionToUse === "always") {
          anchor.style.opacity = "1";
        }
        if (this.options.icon === "\ue9cb") {
          anchor.style.font = "1em/1 anchorjs-icons";
          if (this.options.placement === "left") {
            anchor.style.lineHeight = "inherit";
          }
        }
        if (this.options.placement === "left") {
          anchor.style.position = "absolute";
          anchor.style.marginLeft = "-1em";
          anchor.style.paddingRight = "0.5em";
          elements[i].insertBefore(anchor, elements[i].firstChild);
        } else {
          anchor.style.paddingLeft = "0.375em";
          elements[i].appendChild(anchor);
        }
      }
      for (i = 0; i < indexesToDrop.length; i++) {
        elements.splice(indexesToDrop[i] - i, 1);
      }
      this.elements = this.elements.concat(elements);
      return this;
    };
    this.remove = function (selector) {
      var index,
        domAnchor,
        elements = _getElements(selector);
      for (var i = 0; i < elements.length; i++) {
        domAnchor = elements[i].querySelector(".anchorjs-link");
        if (domAnchor) {
          index = this.elements.indexOf(elements[i]);
          if (index !== -1) {
            this.elements.splice(index, 1);
          }
          elements[i].removeChild(domAnchor);
        }
      }
      return this;
    };
    this.removeAll = function () {
      this.remove(this.elements);
    };
    this.urlify = function (text) {
      var nonsafeChars = /[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,
        urlText;
      if (!this.options.truncate) {
        _applyRemainingDefaultOptions(this.options);
      }
      urlText = text
        .trim()
        .replace(/\'/gi, "")
        .replace(nonsafeChars, "-")
        .replace(/-{2,}/g, "-")
        .substring(0, this.options.truncate)
        .replace(/^-+|-+$/gm, "")
        .toLowerCase();
      return urlText;
    };
    this.hasAnchorJSLink = function (el) {
      var hasLeftAnchor =
          el.firstChild &&
          (" " + el.firstChild.className + " ").indexOf(" anchorjs-link ") > -1,
        hasRightAnchor =
          el.lastChild &&
          (" " + el.lastChild.className + " ").indexOf(" anchorjs-link ") > -1;
      return hasLeftAnchor || hasRightAnchor || !1;
    };
    function _getElements(input) {
      var elements;
      if (typeof input === "string" || input instanceof String) {
        elements = [].slice.call(document.querySelectorAll(input));
      } else if (Array.isArray(input) || input instanceof NodeList) {
        elements = [].slice.call(input);
      } else {
        throw new Error("The selector provided to AnchorJS was invalid.");
      }
      return elements;
    }
    function _addBaselineStyles() {
      if (document.head.querySelector("style.anchorjs") !== null) {
        return;
      }
      var style = document.createElement("style"),
        linkRule =
          " .anchorjs-link {" +
          "   opacity: 0;" +
          "   text-decoration: none;" +
          "   -webkit-font-smoothing: antialiased;" +
          "   -moz-font-smoothing: grayscale;" +
          " }",
        hoverRule =
          " *:hover > .anchorjs-link," +
          " .anchorjs-link:focus  {" +
          "   opacity: 1;" +
          " }",
        anchorjsLinkFontFace =
          " @font-face {" +
          '   font-family: "anchorjs-icons";' +
          '   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype");' +
          " }",
        pseudoElContent =
          " [data-anchorjs-icon]::after {" +
          "   content: attr(data-anchorjs-icon);" +
          " }",
        firstStyleEl;
      style.className = "anchorjs";
      style.appendChild(document.createTextNode(""));
      firstStyleEl = document.head.querySelector('[rel="stylesheet"], style');
      if (firstStyleEl === undefined) {
        document.head.appendChild(style);
      } else {
        document.head.insertBefore(style, firstStyleEl);
      }
      style.sheet.insertRule(linkRule, style.sheet.cssRules.length);
      style.sheet.insertRule(hoverRule, style.sheet.cssRules.length);
      style.sheet.insertRule(pseudoElContent, style.sheet.cssRules.length);
      style.sheet.insertRule(anchorjsLinkFontFace, style.sheet.cssRules.length);
    }
  }
  return AnchorJS;
});
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = "transitionend",
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          r = e[n],
          a =
            r && o(r)
              ? "element"
              : null == (l = r)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    l = (t) =>
      !(!o(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    c = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    h = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? h(t.parentNode)
        : null;
    },
    d = () => {},
    u = (t) => {
      t.offsetHeight;
    },
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    p = [],
    m = () => "rtl" === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = f();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (p.length ||
              document.addEventListener("DOMContentLoaded", () => {
                p.forEach((t) => t());
              }),
            p.push(e))
          : e();
    },
    _ = (t) => {
      "function" == typeof t && t();
    },
    b = (e, i, n = !0) => {
      if (!n) return void _(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), _(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    v = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    y = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    E = /::\d+$/,
    A = {};
  let T = 1;
  const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = /^(mouseenter|mouseleave)/i,
    k = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function L(t, e) {
    return (e && `${e}::${T++}`) || t.uidEvent || T++;
  }
  function x(t) {
    const e = L(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function D(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function S(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), C.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = S(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = D(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = L(r, e.replace(y, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && j.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && j.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function I(t, e, i, n, s) {
    const o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function P(t) {
    return (t = t.replace(w, "")), O[t] || t;
  }
  const j = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = S(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void I(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  I(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(E, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            I(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  class B {
    constructor(t) {
      (t = r(t)) &&
        ((this._element = t),
        H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      b(t, e, i);
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const R = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    j.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), c(this)))
        return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class W extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        j.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = W.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  R(W, "close"), g(W);
  const $ = '[data-bs-toggle="button"]';
  class z extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function q(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function F(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  j.on(document, "click.bs.button.data-api", $, (t) => {
    t.preventDefault();
    const e = t.target.closest($);
    z.getOrCreateInstance(e).toggle();
  }),
    g(z);
  const U = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${F(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${F(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = q(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + window.pageYOffset,
          left: e.left + window.pageXOffset,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    V = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(", ");
        return this.find(e, t).filter((t) => !c(t) && l(t));
      },
    },
    K = "carousel",
    X = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    Y = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    Q = "next",
    G = "prev",
    Z = "left",
    J = "right",
    tt = { ArrowLeft: J, ArrowRight: Z },
    et = "slid.bs.carousel",
    it = "active",
    nt = ".active.carousel-item";
  class st extends B {
    constructor(t, e) {
      super(t),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(e)),
        (this._indicatorsElement = V.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return X;
    }
    static get NAME() {
      return K;
    }
    next() {
      this._slide(Q);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t) {
      t || (this._isPaused = !0),
        V.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (s(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(t) {
      this._activeElement = V.findOne(nt, this._element);
      const e = this._getItemIndex(this._activeElement);
      if (t > this._items.length - 1 || t < 0) return;
      if (this._isSliding)
        return void j.one(this._element, et, () => this.to(t));
      if (e === t) return this.pause(), void this.cycle();
      const i = t > e ? Q : G;
      this._slide(i, this._items[t]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...X,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(K, t, Y),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
    }
    _addEventListeners() {
      this._config.keyboard &&
        j.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (j.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          j.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t = (t) =>
          this._pointerEvent &&
          ("pen" === t.pointerType || "touch" === t.pointerType),
        e = (e) => {
          t(e)
            ? (this.touchStartX = e.clientX)
            : this._pointerEvent || (this.touchStartX = e.touches[0].clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (e) => {
          t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      V.find(".carousel-item img", this._element).forEach((t) => {
        j.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (j.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            j.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (j.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            j.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
            j.on(this._element, "touchend.bs.carousel", (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = tt[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(t) {
      return (
        (this._items =
          t && t.parentNode ? V.find(".carousel-item", t.parentNode) : []),
        this._items.indexOf(t)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === Q;
      return v(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(t, e) {
      const i = this._getItemIndex(t),
        n = this._getItemIndex(V.findOne(nt, this._element));
      return j.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: t,
        direction: e,
        from: n,
        to: i,
      });
    }
    _setActiveIndicatorElement(t) {
      if (this._indicatorsElement) {
        const e = V.findOne(".active", this._indicatorsElement);
        e.classList.remove(it), e.removeAttribute("aria-current");
        const i = V.find("[data-bs-target]", this._indicatorsElement);
        for (let e = 0; e < i.length; e++)
          if (
            Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(t)
          ) {
            i[e].classList.add(it), i[e].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const t = this._activeElement || V.findOne(nt, this._element);
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      e
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = e))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(t, e) {
      const i = this._directionToOrder(t),
        n = V.findOne(nt, this._element),
        s = this._getItemIndex(n),
        o = e || this._getItemByOrder(i, n),
        r = this._getItemIndex(o),
        a = Boolean(this._interval),
        l = i === Q,
        c = l ? "carousel-item-start" : "carousel-item-end",
        h = l ? "carousel-item-next" : "carousel-item-prev",
        d = this._orderToDirection(i);
      if (o && o.classList.contains(it)) return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o, d).defaultPrevented) return;
      if (!n || !o) return;
      (this._isSliding = !0),
        a && this.pause(),
        this._setActiveIndicatorElement(o),
        (this._activeElement = o);
      const f = () => {
        j.trigger(this._element, et, {
          relatedTarget: o,
          direction: d,
          from: s,
          to: r,
        });
      };
      if (this._element.classList.contains("slide")) {
        o.classList.add(h), u(o), n.classList.add(c), o.classList.add(c);
        const t = () => {
          o.classList.remove(c, h),
            o.classList.add(it),
            n.classList.remove(it, h, c),
            (this._isSliding = !1),
            setTimeout(f, 0);
        };
        this._queueCallback(t, n, !0);
      } else n.classList.remove(it), o.classList.add(it), (this._isSliding = !1), f();
      a && this.cycle();
    }
    _directionToOrder(t) {
      return [J, Z].includes(t)
        ? m()
          ? t === Z
            ? G
            : Q
          : t === Z
          ? Q
          : G
        : t;
    }
    _orderToDirection(t) {
      return [Q, G].includes(t)
        ? m()
          ? t === G
            ? Z
            : J
          : t === G
          ? J
          : Z
        : t;
    }
    static carouselInterface(t, e) {
      const i = st.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        st.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = n(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
        s = this.getAttribute("data-bs-slide-to");
      s && (i.interval = !1),
        st.carouselInterface(e, i),
        s && st.getInstance(e).to(s),
        t.preventDefault();
    }
  }
  j.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    st.dataApiClickHandler
  ),
    j.on(window, "load.bs.carousel.data-api", () => {
      const t = V.find('[data-bs-ride="carousel"]');
      for (let e = 0, i = t.length; e < i; e++)
        st.carouselInterface(t[e], st.getInstance(t[e]));
    }),
    g(st);
  const ot = "collapse",
    rt = { toggle: !0, parent: null },
    at = { toggle: "boolean", parent: "(null|element)" },
    lt = "show",
    ct = "collapse",
    ht = "collapsing",
    dt = "collapsed",
    ut = ":scope .collapse .collapse",
    ft = '[data-bs-toggle="collapse"]';
  class pt extends B {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = V.find(ft);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          s = i(e),
          o = V.find(s).filter((t) => t === this._element);
        null !== s &&
          o.length &&
          ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return rt;
    }
    static get NAME() {
      return ot;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = V.find(ut, this._config.parent);
        e = V.find(
          ".collapse.show, .collapse.collapsing",
          this._config.parent
        ).filter((e) => !t.includes(e));
      }
      const i = V.findOne(this._selector);
      if (e.length) {
        const n = e.find((t) => i !== t);
        if (((t = n ? pt.getInstance(n) : null), t && t._isTransitioning))
          return;
      }
      if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e.forEach((e) => {
        i !== e && pt.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || H.set(e, "bs.collapse", null);
      });
      const n = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[n] = ""),
            j.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        u(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = n(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              j.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _getConfig(t) {
      return (
        ((t = { ...rt, ...U.getDataAttributes(this._element), ...t }).toggle =
          Boolean(t.toggle)),
        (t.parent = r(t.parent)),
        a(ot, t, at),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = V.find(ut, this._config.parent);
      V.find(ft, this._config.parent)
        .filter((e) => !t.includes(e))
        .forEach((t) => {
          const e = n(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach((t) => {
          e ? t.classList.remove(dt) : t.classList.add(dt),
            t.setAttribute("aria-expanded", e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = pt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  j.on(document, "click.bs.collapse.data-api", ft, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this);
    V.find(e).forEach((t) => {
      pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    g(pt);
  var mt = "top",
    gt = "bottom",
    _t = "right",
    bt = "left",
    vt = "auto",
    yt = [mt, gt, _t, bt],
    wt = "start",
    Et = "end",
    At = "clippingParents",
    Tt = "viewport",
    Ot = "popper",
    Ct = "reference",
    kt = yt.reduce(function (t, e) {
      return t.concat([e + "-" + wt, e + "-" + Et]);
    }, []),
    Lt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + wt, e + "-" + Et]);
    }, []),
    xt = "beforeRead",
    Dt = "read",
    St = "afterRead",
    Nt = "beforeMain",
    It = "main",
    Pt = "afterMain",
    jt = "beforeWrite",
    Mt = "write",
    Ht = "afterWrite",
    Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
  function Rt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Wt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function $t(t) {
    return t instanceof Wt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Ft = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) &&
          Rt(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            zt(n) &&
              Rt(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Ut(t) {
    return t.split("-")[0];
  }
  function Vt(t, e) {
    var i = t.getBoundingClientRect();
    return {
      width: i.width / 1,
      height: i.height / 1,
      top: i.top / 1,
      right: i.right / 1,
      bottom: i.bottom / 1,
      left: i.left / 1,
      x: i.left / 1,
      y: i.top / 1,
    };
  }
  function Kt(t) {
    var e = Vt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Xt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Yt(t) {
    return Wt(t).getComputedStyle(t);
  }
  function Qt(t) {
    return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
  }
  function Gt(t) {
    return (
      ($t(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function Zt(t) {
    return "html" === Rt(t)
      ? t
      : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || Gt(t);
  }
  function Jt(t) {
    return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
  }
  function te(t) {
    for (var e = Wt(t), i = Jt(t); i && Qt(i) && "static" === Yt(i).position; )
      i = Jt(i);
    return i &&
      ("html" === Rt(i) || ("body" === Rt(i) && "static" === Yt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              zt(t) &&
              "fixed" === Yt(t).position
            )
              return null;
            for (
              var i = Zt(t);
              zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;

            ) {
              var n = Yt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function ee(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var ie = Math.max,
    ne = Math.min,
    se = Math.round;
  function oe(t, e, i) {
    return ie(t, ne(e, i));
  }
  function re(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function ae(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const le = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Ut(i.placement),
        l = ee(a),
        c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return re(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : ae(t, yt)
            );
          })(s.padding, i),
          d = Kt(o),
          u = "y" === l ? mt : bt,
          f = "y" === l ? gt : _t,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = te(o),
          _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          E = oe(v, w, y),
          A = l;
        i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Xt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function ce(t) {
    return t.split("-")[1];
  }
  var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function de(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: se(se(e * n) / n) || 0, y: se(se(i * n) / n) || 0 };
            })(r)
          : "function" == typeof h
          ? h(r)
          : r,
      u = d.x,
      f = void 0 === u ? 0 : u,
      p = d.y,
      m = void 0 === p ? 0 : p,
      g = r.hasOwnProperty("x"),
      _ = r.hasOwnProperty("y"),
      b = bt,
      v = mt,
      y = window;
    if (c) {
      var w = te(i),
        E = "clientHeight",
        A = "clientWidth";
      w === Wt(i) &&
        "static" !== Yt((w = Gt(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (A = "scrollWidth")),
        (w = w),
        (s !== mt && ((s !== bt && s !== _t) || o !== Et)) ||
          ((v = gt), (m -= w[E] - n.height), (m *= l ? 1 : -1)),
        (s !== bt && ((s !== mt && s !== gt) || o !== Et)) ||
          ((b = _t), (f -= w[A] - n.width), (f *= l ? 1 : -1));
    }
    var T,
      O = Object.assign({ position: a }, c && he);
    return l
      ? Object.assign(
          {},
          O,
          (((T = {})[v] = _ ? "0" : ""),
          (T[b] = g ? "0" : ""),
          (T.transform =
            (y.devicePixelRatio || 1) <= 1
              ? "translate(" + f + "px, " + m + "px)"
              : "translate3d(" + f + "px, " + m + "px, 0)"),
          T)
        )
      : Object.assign(
          {},
          O,
          (((e = {})[v] = _ ? m + "px" : ""),
          (e[b] = g ? f + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  const ue = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Ut(e.placement),
          variation: ce(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          de(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            de(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var fe = { passive: !0 };
  const pe = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Wt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, fe);
          }),
        a && l.addEventListener("resize", i.update, fe),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, fe);
            }),
            a && l.removeEventListener("resize", i.update, fe);
        }
      );
    },
    data: {},
  };
  var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return me[t];
    });
  }
  var _e = { start: "end", end: "start" };
  function be(t) {
    return t.replace(/start|end/g, function (t) {
      return _e[t];
    });
  }
  function ve(t) {
    var e = Wt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ye(t) {
    return Vt(Gt(t)).left + ve(t).scrollLeft;
  }
  function we(t) {
    var e = Yt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Ee(t) {
    return ["html", "body", "#document"].indexOf(Rt(t)) >= 0
      ? t.ownerDocument.body
      : zt(t) && we(t)
      ? t
      : Ee(Zt(t));
  }
  function Ae(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ee(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Wt(n),
      r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ae(Zt(r)));
  }
  function Te(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Oe(t, e) {
    return e === Tt
      ? Te(
          (function (t) {
            var e = Wt(t),
              i = Gt(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + ye(t), y: a }
            );
          })(t)
        )
      : zt(e)
      ? (function (t) {
          var e = Vt(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : Te(
          (function (t) {
            var e,
              i = Gt(t),
              n = ve(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = ie(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = ie(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ye(t),
              l = -n.scrollTop;
            return (
              "rtl" === Yt(s || i).direction &&
                (a += ie(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(Gt(t))
        );
  }
  function Ce(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Ut(s) : null,
      r = s ? ce(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case mt:
        e = { x: a, y: i.y - n.height };
        break;
      case gt:
        e = { x: a, y: i.y + i.height };
        break;
      case _t:
        e = { x: i.x + i.width, y: l };
        break;
      case bt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? ee(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Et:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function ke(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? At : o,
      a = i.rootBoundary,
      l = void 0 === a ? Tt : a,
      c = i.elementContext,
      h = void 0 === c ? Ot : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      m = re("number" != typeof p ? p : ae(p, yt)),
      g = h === Ot ? Ct : Ot,
      _ = t.rects.popper,
      b = t.elements[u ? g : h],
      v = (function (t, e, i) {
        var n =
            "clippingParents" === e
              ? (function (t) {
                  var e = Ae(Zt(t)),
                    i =
                      ["absolute", "fixed"].indexOf(Yt(t).position) >= 0 &&
                      zt(t)
                        ? te(t)
                        : t;
                  return $t(i)
                    ? e.filter(function (t) {
                        return $t(t) && Xt(t, i) && "body" !== Rt(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
            var n = Oe(t, i);
            return (
              (e.top = ie(n.top, e.top)),
              (e.right = ne(n.right, e.right)),
              (e.bottom = ne(n.bottom, e.bottom)),
              (e.left = ie(n.left, e.left)),
              e
            );
          }, Oe(t, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      })($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
      y = Vt(t.elements.reference),
      w = Ce({ reference: y, element: _, strategy: "absolute", placement: s }),
      E = Te(Object.assign({}, _, w)),
      A = h === Ot ? E : y,
      T = {
        top: v.top - A.top + m.top,
        bottom: A.bottom - v.bottom + m.bottom,
        left: v.left - A.left + m.left,
        right: A.right - v.right + m.right,
      },
      O = t.modifiersData.offset;
    if (h === Ot && O) {
      var C = O[s];
      Object.keys(T).forEach(function (t) {
        var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
          i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
        T[t] += C[i] * e;
      });
    }
    return T;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? Lt : l,
      h = ce(n),
      d = h
        ? a
          ? kt
          : kt.filter(function (t) {
              return ce(t) === h;
            })
        : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = ke(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Ut(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const xe = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = Ut(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if (Ut(t) === vt) return [];
                    var e = ge(t);
                    return [be(t), e, be(e)];
                  })(g)
                : [ge(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                Ut(i) === vt
                  ? Le(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = Ut(C),
            L = ce(C) === wt,
            x = [mt, gt].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = ke(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            N = x ? (L ? _t : bt) : L ? gt : mt;
          y[D] > w[D] && (N = ge(N));
          var I = ge(N),
            P = [];
          if (
            (o && P.push(S[k] <= 0),
            a && P.push(S[N] <= 0, S[I] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, P);
        }
        if (A)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function De(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Se(t) {
    return [mt, _t, gt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Ne = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ke(e, { elementContext: "reference" }),
          a = ke(e, { altBoundary: !0 }),
          l = De(r, n),
          c = De(a, s, o),
          h = Se(l),
          d = Se(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    Ie = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = Lt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = Ut(t),
                  s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Pe = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Ce({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    je = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ke(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = Ut(e.placement),
          b = ce(e.placement),
          v = !b,
          y = ee(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          C = { x: 0, y: 0 };
        if (E) {
          if (o || a) {
            var k = "y" === y ? mt : bt,
              L = "y" === y ? gt : _t,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              N = E[y] - g[L],
              I = f ? -T[x] / 2 : 0,
              P = b === wt ? A[x] : T[x],
              j = b === wt ? -T[x] : -A[x],
              M = e.elements.arrow,
              H = f && M ? Kt(M) : { width: 0, height: 0 },
              B = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              R = B[k],
              W = B[L],
              $ = oe(0, A[x], H[x]),
              z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
              q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
              F = e.elements.arrow && te(e.elements.arrow),
              U = F ? ("y" === y ? F.clientTop || 0 : F.clientLeft || 0) : 0,
              V = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement][y]
                : 0,
              K = E[y] + z - V - U,
              X = E[y] + q - V;
            if (o) {
              var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
              (E[y] = Y), (C[y] = Y - D);
            }
            if (a) {
              var Q = "x" === y ? mt : bt,
                G = "x" === y ? gt : _t,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = oe(f ? ne(J, K) : J, Z, f ? ie(tt, X) : tt);
              (E[w] = et), (C[w] = et - Z);
            }
          }
          e.modifiersData[n] = C;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Me(t, e, i) {
    void 0 === i && (i = !1);
    var n = zt(e);
    zt(e) &&
      (function (t) {
        var e = t.getBoundingClientRect();
        e.width, t.offsetWidth, e.height, t.offsetHeight;
      })(e);
    var s,
      o,
      r = Gt(e),
      a = Vt(t),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (n || (!n && !i)) &&
        (("body" !== Rt(e) || we(r)) &&
          (l =
            (s = e) !== Wt(s) && zt(s)
              ? { scrollLeft: (o = s).scrollLeft, scrollTop: o.scrollTop }
              : ve(s)),
        zt(e)
          ? (((c = Vt(e)).x += e.clientLeft), (c.y += e.clientTop))
          : r && (c.x = ye(r))),
      {
        x: a.left + l.scrollLeft - c.x,
        y: a.top + l.scrollTop - c.y,
        width: a.width,
        height: a.height,
      }
    );
  }
  function He(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Re() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function We(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: $t(t)
                  ? Ae(t)
                  : t.contextElement
                  ? Ae(t.contextElement)
                  : [],
                popper: Ae(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = He(t);
                return Bt.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Re(e, i)) {
                (a.rects = {
                  reference: Me(e, te(i), "fixed" === a.options.strategy),
                  popper: Kt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Re(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var $e = We(),
    ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }),
    qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
  const Fe = Object.freeze({
      __proto__: null,
      popperGenerator: We,
      detectOverflow: ke,
      createPopperBase: $e,
      createPopper: qe,
      createPopperLite: ze,
      top: mt,
      bottom: gt,
      right: _t,
      left: bt,
      auto: vt,
      basePlacements: yt,
      start: wt,
      end: Et,
      clippingParents: At,
      viewport: Tt,
      popper: Ot,
      reference: Ct,
      variationPlacements: kt,
      placements: Lt,
      beforeRead: xt,
      read: Dt,
      afterRead: St,
      beforeMain: Nt,
      main: It,
      afterMain: Pt,
      beforeWrite: jt,
      write: Mt,
      afterWrite: Ht,
      modifierPhases: Bt,
      applyStyles: Ft,
      arrow: le,
      computeStyles: ue,
      eventListeners: pe,
      flip: xe,
      hide: Ne,
      offset: Ie,
      popperOffsets: Pe,
      preventOverflow: je,
    }),
    Ue = "dropdown",
    Ve = "Escape",
    Ke = "Space",
    Xe = "ArrowUp",
    Ye = "ArrowDown",
    Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
    Ge = "click.bs.dropdown.data-api",
    Ze = "keydown.bs.dropdown.data-api",
    Je = "show",
    ti = '[data-bs-toggle="dropdown"]',
    ei = ".dropdown-menu",
    ii = m() ? "top-end" : "top-start",
    ni = m() ? "top-start" : "top-end",
    si = m() ? "bottom-end" : "bottom-start",
    oi = m() ? "bottom-start" : "bottom-end",
    ri = m() ? "left-start" : "right-start",
    ai = m() ? "right-start" : "left-start",
    li = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    ci = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class hi extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Ue;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      if (j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
        return;
      const e = hi.getParentFromElement(this._element);
      this._inNavbar
        ? U.setDataAttribute(this._menu, "popper", "none")
        : this._createPopper(e),
        "ontouchstart" in document.documentElement &&
          !e.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.on(t, "mouseover", d)),
        this._element.focus(),
        this._element.setAttribute("aria-expanded", !0),
        this._menu.classList.add(Je),
        this._element.classList.add(Je),
        j.trigger(this._element, "shown.bs.dropdown", t);
    }
    hide() {
      if (c(this._element) || !this._isShown(this._menu)) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove(Je),
        this._element.classList.remove(Je),
        this._element.setAttribute("aria-expanded", "false"),
        U.removeDataAttribute(this._menu, "popper"),
        j.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...U.getDataAttributes(this._element),
          ...t,
        }),
        a(Ue, t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !o(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          `${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper(t) {
      if (void 0 === Fe)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let e = this._element;
      "parent" === this._config.reference
        ? (e = t)
        : o(this._config.reference)
        ? (e = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (e = this._config.reference);
      const i = this._getPopperConfig(),
        n = i.modifiers.find(
          (t) => "applyStyles" === t.name && !1 === t.enabled
        );
      (this._popper = qe(e, this._menu, i)),
        n && U.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t = this._element) {
      return t.classList.contains(Je);
    }
    _getMenuElement() {
      return V.next(this._element, ei)[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ri;
      if (t.classList.contains("dropstart")) return ai;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = V.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter(l);
      i.length && v(i, e, t === Ye, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (t && (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)))
        return;
      const e = V.find(ti);
      for (let i = 0, n = e.length; i < n; i++) {
        const n = hi.getInstance(e[i]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._isShown()) continue;
        const s = { relatedTarget: n._element };
        if (t) {
          const e = t.composedPath(),
            i = e.includes(n._menu);
          if (
            e.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(t.target) &&
            (("keyup" === t.type && "Tab" === t.key) ||
              /input|select|option|textarea|form/i.test(t.target.tagName))
          )
            continue;
          "click" === t.type && (s.clickEvent = t);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return n(t) || t.parentNode;
    }
    static dataApiKeydownHandler(t) {
      if (
        /input|textarea/i.test(t.target.tagName)
          ? t.key === Ke ||
            (t.key !== Ve &&
              ((t.key !== Ye && t.key !== Xe) || t.target.closest(ei)))
          : !Qe.test(t.key)
      )
        return;
      const e = this.classList.contains(Je);
      if (!e && t.key === Ve) return;
      if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
      const i = this.matches(ti) ? this : V.prev(this, ti)[0],
        n = hi.getOrCreateInstance(i);
      if (t.key !== Ve)
        return t.key === Xe || t.key === Ye
          ? (e || n.show(), void n._selectMenuItem(t))
          : void ((e && t.key !== Ke) || hi.clearMenus());
      n.hide();
    }
  }
  j.on(document, Ze, ti, hi.dataApiKeydownHandler),
    j.on(document, Ze, ei, hi.dataApiKeydownHandler),
    j.on(document, Ge, hi.clearMenus),
    j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
    j.on(document, Ge, ti, function (t) {
      t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }),
    g(hi);
  const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ui = ".sticky-top";
  class fi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(di, "paddingRight", (e) => e + t),
        this._setElementAttributes(ui, "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = `${i(Number.parseFloat(s))}px`;
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(di, "paddingRight"),
        this._resetElementAttributes(ui, "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && U.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = U.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (U.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(t, e) {
      o(t) ? e(t) : V.find(t, this._element).forEach(e);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const pi = {
      className: "modal-backdrop",
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    mi = {
      className: "string",
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    },
    gi = "show",
    _i = "mousedown.bs.backdrop";
  class bi {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && u(this._getElement()),
          this._getElement().classList.add(gi),
          this._emulateAnimation(() => {
            _(t);
          }))
        : _(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(gi),
          this._emulateAnimation(() => {
            this.dispose(), _(t);
          }))
        : _(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...pi, ...("object" == typeof t ? t : {}) }).rootElement = r(
          t.rootElement
        )),
        a("backdrop", t, mi),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.append(this._getElement()),
        j.on(this._getElement(), _i, () => {
          _(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (j.off(this._element, _i),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      b(t, this._getElement(), this._config.isAnimated);
    }
  }
  const vi = { trapElement: null, autofocus: !0 },
    yi = { trapElement: "element", autofocus: "boolean" },
    wi = ".bs.focustrap",
    Ei = "backward";
  class Ai {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    activate() {
      const { trapElement: t, autofocus: e } = this._config;
      this._isActive ||
        (e && t.focus(),
        j.off(document, wi),
        j.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        j.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), j.off(document, wi));
    }
    _handleFocusin(t) {
      const { target: e } = t,
        { trapElement: i } = this._config;
      if (e === document || e === i || i.contains(e)) return;
      const n = V.focusableChildren(i);
      0 === n.length
        ? i.focus()
        : this._lastTabNavDirection === Ei
        ? n[n.length - 1].focus()
        : n[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
    }
    _getConfig(t) {
      return (
        (t = { ...vi, ...("object" == typeof t ? t : {}) }),
        a("focustrap", t, yi),
        t
      );
    }
  }
  const Ti = "modal",
    Oi = "Escape",
    Ci = { backdrop: !0, keyboard: !0, focus: !0 },
    ki = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    },
    Li = "hidden.bs.modal",
    xi = "show.bs.modal",
    Di = "resize.bs.modal",
    Si = "click.dismiss.bs.modal",
    Ni = "keydown.dismiss.bs.modal",
    Ii = "mousedown.dismiss.bs.modal",
    Pi = "modal-open",
    ji = "show",
    Mi = "modal-static";
  class Hi extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._dialog = V.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new fi());
    }
    static get Default() {
      return Ci;
    }
    static get NAME() {
      return Ti;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        j.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(Pi),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        j.on(this._dialog, Ii, () => {
          j.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const t = this._isAnimated();
      t && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        this._focustrap.deactivate(),
        this._element.classList.remove(ji),
        j.off(this._element, Si),
        j.off(this._dialog, Ii),
        this._queueCallback(() => this._hideModal(), this._element, t);
    }
    dispose() {
      [window, this._dialog].forEach((t) => j.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        this._focustrap.deactivate(),
        super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ci,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Ti, t, ki),
        t
      );
    }
    _showElement(t) {
      const e = this._isAnimated(),
        i = V.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        i && (i.scrollTop = 0),
        e && u(this._element),
        this._element.classList.add(ji),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              j.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          e
        );
    }
    _setEscapeEvent() {
      this._isShown
        ? j.on(this._element, Ni, (t) => {
            this._config.keyboard && t.key === Oi
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                t.key !== Oi ||
                this._triggerBackdropTransition();
          })
        : j.off(this._element, Ni);
    }
    _setResizeEvent() {
      this._isShown
        ? j.on(window, Di, () => this._adjustDialog())
        : j.off(window, Di);
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Pi),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            j.trigger(this._element, Li);
        });
    }
    _showBackdrop(t) {
      j.on(this._element, Si, (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains(Mi) ||
        (n || (i.overflowY = "hidden"),
        t.add(Mi),
        this._queueCallback(() => {
          t.remove(Mi),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !m()) || (i && !t && m())) &&
        (this._element.style.paddingLeft = `${e}px`),
        ((i && !t && !m()) || (!i && t && m())) &&
          (this._element.style.paddingRight = `${e}px`);
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = n(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        j.one(e, xi, (t) => {
          t.defaultPrevented ||
            j.one(e, Li, () => {
              l(this) && this.focus();
            });
        });
      const i = V.findOne(".modal.show");
      i && Hi.getInstance(i).hide(), Hi.getOrCreateInstance(e).toggle(this);
    }
  ),
    R(Hi),
    g(Hi);
  const Bi = "offcanvas",
    Ri = { backdrop: !0, keyboard: !0, scroll: !1 },
    Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
    $i = "show",
    zi = ".offcanvas.show",
    qi = "hidden.bs.offcanvas";
  class Fi extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get NAME() {
      return Bi;
    }
    static get Default() {
      return Ri;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        j.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll || new fi().hide(),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add($i),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(),
              j.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove($i),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new fi().reset(),
                j.trigger(this._element, qi);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...Ri,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        a(Bi, t, Wi),
        t
      );
    }
    _initializeBackDrop() {
      return new bi({
        className: "offcanvas-backdrop",
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        this._config.keyboard && "Escape" === t.key && this.hide();
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), c(this)))
        return;
      j.one(e, qi, () => {
        l(this) && this.focus();
      });
      const i = V.findOne(zi);
      i && i !== e && Fi.getInstance(i).hide(),
        Fi.getOrCreateInstance(e).toggle(this);
    }
  ),
    j.on(window, "load.bs.offcanvas.data-api", () =>
      V.find(zi).forEach((t) => Fi.getOrCreateInstance(t).show())
    ),
    R(Fi),
    g(Fi);
  const Ui = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ki =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Xi = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !Ui.has(i) || Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    };
  function Yi(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = s.length; t < i; t++) {
      const i = s[t],
        n = i.nodeName.toLowerCase();
      if (!Object.keys(e).includes(n)) {
        i.remove();
        continue;
      }
      const o = [].concat(...i.attributes),
        r = [].concat(e["*"] || [], e[n] || []);
      o.forEach((t) => {
        Xi(t, r) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Qi = "tooltip",
    Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Zi = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    Ji = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: m() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: m() ? "right" : "left",
    },
    tn = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    en = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    },
    nn = "fade",
    sn = "show",
    on = "show",
    rn = "out",
    an = ".tooltip-inner",
    ln = ".modal",
    cn = "hide.bs.modal",
    hn = "hover",
    dn = "focus";
  class un extends B {
    constructor(t, e) {
      if (void 0 === Fe)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return tn;
    }
    static get NAME() {
      return Qi;
    }
    static get Event() {
      return en;
    }
    static get DefaultType() {
      return Zi;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains(sn))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        j.off(this._element.closest(ln), cn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = j.trigger(this._element, this.constructor.Event.SHOW),
        e = h(this._element),
        i =
          null === e
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : e.contains(this._element);
      if (t.defaultPrevented || !i) return;
      "tooltip" === this.constructor.NAME &&
        this.tip &&
        this.getTitle() !== this.tip.querySelector(an).innerHTML &&
        (this._disposePopper(), this.tip.remove(), (this.tip = null));
      const n = this.getTipElement(),
        s = ((t) => {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        })(this.constructor.NAME);
      n.setAttribute("id", s),
        this._element.setAttribute("aria-describedby", s),
        this._config.animation && n.classList.add(nn);
      const o =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, n, this._element)
            : this._config.placement,
        r = this._getAttachment(o);
      this._addAttachmentClass(r);
      const { container: a } = this._config;
      H.set(n, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (a.append(n),
          j.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = qe(this._element, n, this._getPopperConfig(r))),
        n.classList.add(sn);
      const l = this._resolvePossibleFunction(this._config.customClass);
      l && n.classList.add(...l.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            j.on(t, "mouseover", d);
          });
      const c = this.tip.classList.contains(nn);
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            j.trigger(this._element, this.constructor.Event.SHOWN),
            t === rn && this._leave(null, this);
        },
        this.tip,
        c
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove(sn),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => j.off(t, "mouseover", d)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains(nn);
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            (this._hoverState !== on && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            j.trigger(this._element, this.constructor.Event.HIDDEN),
            this._disposePopper());
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      t.innerHTML = this._config.template;
      const e = t.children[0];
      return (
        this.setContent(e), e.classList.remove(nn, sn), (this.tip = e), this.tip
      );
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), an);
    }
    _sanitizeAndSetContent(t, e, i) {
      const n = V.findOne(i, t);
      e || !n ? this.setElementContent(n, e) : n.remove();
    }
    setElementContent(t, e) {
      if (null !== t)
        return o(e)
          ? ((e = r(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.append(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Yi(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      const t =
        this._element.getAttribute("data-bs-original-title") ||
        this._config.title;
      return this._resolvePossibleFunction(t);
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      return (
        e ||
        this.constructor.getOrCreateInstance(
          t.delegateTarget,
          this._getDelegateConfig()
        )
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
      );
    }
    _getAttachment(t) {
      return Ji[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          j.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              t === hn
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              t === hn
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          j.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            j.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        j.on(this._element.closest(ln), cn, this._hideModalHandler),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0),
        e.getTipElement().classList.contains(sn) || e._hoverState === on
          ? (e._hoverState = on)
          : (clearTimeout(e._timeout),
            (e._hoverState = on),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  e._hoverState === on && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? dn : hn] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = rn),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                e._hoverState === rn && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = U.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          Gi.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        a(Qi, t, this.constructor.DefaultType),
        t.sanitize && (t.template = Yi(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
        i = t.getAttribute("class").match(e);
      null !== i &&
        i.length > 0 &&
        i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = un.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(un);
  const fn = {
      ...un.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    pn = { ...un.DefaultType, content: "(string|element|function)" },
    mn = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class gn extends un {
    static get Default() {
      return fn;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return mn;
    }
    static get DefaultType() {
      return pn;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t) {
      this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
        this._sanitizeAndSetContent(t, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = gn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(gn);
  const _n = "scrollspy",
    bn = { offset: 10, method: "auto", target: "" },
    vn = { offset: "number", method: "string", target: "(string|element)" },
    yn = "active",
    wn = ".nav-link, .list-group-item, .dropdown-item",
    En = "position";
  class An extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        j.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return bn;
    }
    static get NAME() {
      return _n;
    }
    refresh() {
      const t =
          this._scrollElement === this._scrollElement.window ? "offset" : En,
        e = "auto" === this._config.method ? t : this._config.method,
        n = e === En ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        V.find(wn, this._config.target)
          .map((t) => {
            const s = i(t),
              o = s ? V.findOne(s) : null;
            if (o) {
              const t = o.getBoundingClientRect();
              if (t.width || t.height) return [U[e](o).top + n, s];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      j.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      return (
        ((t = {
          ...bn,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }).target = r(t.target) || document.documentElement),
        a(_n, t, vn),
        t
      );
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(t) {
      (this._activeTarget = t), this._clear();
      const e = wn
          .split(",")
          .map((e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`),
        i = V.findOne(e.join(","), this._config.target);
      i.classList.add(yn),
        i.classList.contains("dropdown-item")
          ? V.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(
              yn
            )
          : V.parents(i, ".nav, .list-group").forEach((t) => {
              V.prev(t, ".nav-link, .list-group-item").forEach((t) =>
                t.classList.add(yn)
              ),
                V.prev(t, ".nav-item").forEach((t) => {
                  V.children(t, ".nav-link").forEach((t) =>
                    t.classList.add(yn)
                  );
                });
            }),
        j.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t,
        });
    }
    _clear() {
      V.find(wn, this._config.target)
        .filter((t) => t.classList.contains(yn))
        .forEach((t) => t.classList.remove(yn));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = An.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(window, "load.bs.scrollspy.data-api", () => {
    V.find('[data-bs-spy="scroll"]').forEach((t) => new An(t));
  }),
    g(An);
  const Tn = "active",
    On = "fade",
    Cn = "show",
    kn = ".active",
    Ln = ":scope > li > .active";
  class xn extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains(Tn)
      )
        return;
      let t;
      const e = n(this._element),
        i = this._element.closest(".nav, .list-group");
      if (i) {
        const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
        (t = V.find(e, i)), (t = t[t.length - 1]);
      }
      const s = t
        ? j.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        j.trigger(this._element, "show.bs.tab", { relatedTarget: t })
          .defaultPrevented ||
        (null !== s && s.defaultPrevented)
      )
        return;
      this._activate(this._element, i);
      const o = () => {
        j.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
          j.trigger(this._element, "shown.bs.tab", { relatedTarget: t });
      };
      e ? this._activate(e, e.parentNode, o) : o();
    }
    _activate(t, e, i) {
      const n = (
          !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
            ? V.children(e, kn)
            : V.find(Ln, e)
        )[0],
        s = i && n && n.classList.contains(On),
        o = () => this._transitionComplete(t, n, i);
      n && s ? (n.classList.remove(Cn), this._queueCallback(o, t, !0)) : o();
    }
    _transitionComplete(t, e, i) {
      if (e) {
        e.classList.remove(Tn);
        const t = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
        t && t.classList.remove(Tn),
          "tab" === e.getAttribute("role") &&
            e.setAttribute("aria-selected", !1);
      }
      t.classList.add(Tn),
        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
        u(t),
        t.classList.contains(On) && t.classList.add(Cn);
      let n = t.parentNode;
      if (
        (n && "LI" === n.nodeName && (n = n.parentNode),
        n && n.classList.contains("dropdown-menu"))
      ) {
        const e = t.closest(".dropdown");
        e && V.find(".dropdown-toggle", e).forEach((t) => t.classList.add(Tn)),
          t.setAttribute("aria-expanded", !0);
      }
      i && i();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  j.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        c(this) || xn.getOrCreateInstance(this).show();
    }
  ),
    g(xn);
  const Dn = "toast",
    Sn = "hide",
    Nn = "show",
    In = "showing",
    Pn = { animation: "boolean", autohide: "boolean", delay: "number" },
    jn = { animation: !0, autohide: !0, delay: 5e3 };
  class Mn extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return Pn;
    }
    static get Default() {
      return jn;
    }
    static get NAME() {
      return Dn;
    }
    show() {
      j.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(Sn),
        u(this._element),
        this._element.classList.add(Nn),
        this._element.classList.add(In),
        this._queueCallback(
          () => {
            this._element.classList.remove(In),
              j.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains(Nn) &&
        (j.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(In),
          this._queueCallback(
            () => {
              this._element.classList.add(Sn),
                this._element.classList.remove(In),
                this._element.classList.remove(Nn),
                j.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains(Nn) &&
          this._element.classList.remove(Nn),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...jn,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        a(Dn, t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        j.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        j.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        j.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Mn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    R(Mn),
    g(Mn),
    {
      Alert: W,
      Button: z,
      Carousel: st,
      Collapse: pt,
      Dropdown: hi,
      Modal: Hi,
      Offcanvas: Fi,
      Popover: gn,
      ScrollSpy: An,
      Tab: xn,
      Toast: Mn,
      Tooltip: un,
    }
  );
});
(function (doc) {
  var scriptElm = doc.scripts[doc.scripts.length - 1];
  var warn = [
    "[ionicons] Deprecated script, please remove: " + scriptElm.outerHTML,
  ];
  warn.push(
    "To improve performance it is recommended to set the differential scripts in the head as follows:"
  );
  var parts = scriptElm.src.split("/");
  parts.pop();
  parts.push("ionicons");
  var url = parts.join("/");
  var scriptElm = doc.createElement("script");
  scriptElm.setAttribute("type", "module");
  scriptElm.src = url + "/ionicons.esm.js";
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute("data-stencil-namespace", "ionicons");
  doc.head.appendChild(scriptElm);
  scriptElm = doc.createElement("script");
  scriptElm.setAttribute("nomodule", "");
  scriptElm.src = url + "/ionicons.js";
  warn.push(scriptElm.outerHTML);
  scriptElm.setAttribute("data-stencil-namespace", "ionicons");
  doc.head.appendChild(scriptElm);
  console.warn(warn.join("\n"));
})(document);
("use strict");
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).Popper =
          {})
      );
})(this, function (e) {
  function t(e) {
    return {
      width: (e = e.getBoundingClientRect()).width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function n(e) {
    return null == e
      ? window
      : "[object Window]" !== e.toString()
      ? ((e = e.ownerDocument) && e.defaultView) || window
      : e;
  }
  function o(e) {
    return { scrollLeft: (e = n(e)).pageXOffset, scrollTop: e.pageYOffset };
  }
  function r(e) {
    return e instanceof n(e).Element || e instanceof Element;
  }
  function i(e) {
    return e instanceof n(e).HTMLElement || e instanceof HTMLElement;
  }
  function a(e) {
    return (
      "undefined" != typeof ShadowRoot &&
      (e instanceof n(e).ShadowRoot || e instanceof ShadowRoot)
    );
  }
  function s(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function f(e) {
    return (
      (r(e) ? e.ownerDocument : e.document) || window.document
    ).documentElement;
  }
  function p(e) {
    return t(f(e)).left + o(e).scrollLeft;
  }
  function c(e) {
    return n(e).getComputedStyle(e);
  }
  function l(e) {
    return (
      (e = c(e)),
      /auto|scroll|overlay|hidden/.test(e.overflow + e.overflowY + e.overflowX)
    );
  }
  function u(e, r, a) {
    void 0 === a && (a = !1);
    var c = f(r);
    e = t(e);
    var u = i(r),
      d = { scrollLeft: 0, scrollTop: 0 },
      m = { x: 0, y: 0 };
    return (
      (u || (!u && !a)) &&
        (("body" !== s(r) || l(c)) &&
          (d =
            r !== n(r) && i(r)
              ? { scrollLeft: r.scrollLeft, scrollTop: r.scrollTop }
              : o(r)),
        i(r)
          ? (((m = t(r)).x += r.clientLeft), (m.y += r.clientTop))
          : c && (m.x = p(c))),
      {
        x: e.left + d.scrollLeft - m.x,
        y: e.top + d.scrollTop - m.y,
        width: e.width,
        height: e.height,
      }
    );
  }
  function d(e) {
    var n = t(e),
      o = e.offsetWidth,
      r = e.offsetHeight;
    return (
      1 >= Math.abs(n.width - o) && (o = n.width),
      1 >= Math.abs(n.height - r) && (r = n.height),
      { x: e.offsetLeft, y: e.offsetTop, width: o, height: r }
    );
  }
  function m(e) {
    return "html" === s(e)
      ? e
      : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || f(e);
  }
  function h(e) {
    return 0 <= ["html", "body", "#document"].indexOf(s(e))
      ? e.ownerDocument.body
      : i(e) && l(e)
      ? e
      : h(m(e));
  }
  function v(e, t) {
    var o;
    void 0 === t && (t = []);
    var r = h(e);
    return (
      (e = r === (null == (o = e.ownerDocument) ? void 0 : o.body)),
      (o = n(r)),
      (r = e ? [o].concat(o.visualViewport || [], l(r) ? r : []) : r),
      (t = t.concat(r)),
      e ? t : t.concat(v(m(r)))
    );
  }
  function g(e) {
    return i(e) && "fixed" !== c(e).position ? e.offsetParent : null;
  }
  function y(e) {
    for (
      var t = n(e), o = g(e);
      o &&
      0 <= ["table", "td", "th"].indexOf(s(o)) &&
      "static" === c(o).position;

    )
      o = g(o);
    if (
      o &&
      ("html" === s(o) || ("body" === s(o) && "static" === c(o).position))
    )
      return t;
    if (!o)
      e: {
        if (
          ((o = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")),
          -1 === navigator.userAgent.indexOf("Trident") ||
            !i(e) ||
            "fixed" !== c(e).position)
        )
          for (e = m(e); i(e) && 0 > ["html", "body"].indexOf(s(e)); ) {
            var r = c(e);
            if (
              "none" !== r.transform ||
              "none" !== r.perspective ||
              "paint" === r.contain ||
              -1 !== ["transform", "perspective"].indexOf(r.willChange) ||
              (o && "filter" === r.willChange) ||
              (o && r.filter && "none" !== r.filter)
            ) {
              o = e;
              break e;
            }
            e = e.parentNode;
          }
        o = null;
      }
    return o || t;
  }
  function b(e) {
    function t(e) {
      o.add(e.name),
        []
          .concat(e.requires || [], e.requiresIfExists || [])
          .forEach(function (e) {
            o.has(e) || ((e = n.get(e)) && t(e));
          }),
        r.push(e);
    }
    var n = new Map(),
      o = new Set(),
      r = [];
    return (
      e.forEach(function (e) {
        n.set(e.name, e);
      }),
      e.forEach(function (e) {
        o.has(e.name) || t(e);
      }),
      r
    );
  }
  function w(e) {
    var t;
    return function () {
      return (
        t ||
          (t = new Promise(function (n) {
            Promise.resolve().then(function () {
              (t = void 0), n(e());
            });
          })),
        t
      );
    };
  }
  function x(e) {
    return e.split("-")[0];
  }
  function O(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && a(n))
      do {
        if (t && e.isSameNode(t)) return !0;
        t = t.parentNode || t.host;
      } while (t);
    return !1;
  }
  function j(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height,
    });
  }
  function E(e, r) {
    if ("viewport" === r) {
      r = n(e);
      var a = f(e);
      r = r.visualViewport;
      var s = a.clientWidth;
      a = a.clientHeight;
      var l = 0,
        u = 0;
      r &&
        ((s = r.width),
        (a = r.height),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
          ((l = r.offsetLeft), (u = r.offsetTop))),
        (e = j((e = { width: s, height: a, x: l + p(e), y: u })));
    } else i(r) ? (((e = t(r)).top += r.clientTop), (e.left += r.clientLeft), (e.bottom = e.top + r.clientHeight), (e.right = e.left + r.clientWidth), (e.width = r.clientWidth), (e.height = r.clientHeight), (e.x = e.left), (e.y = e.top)) : ((u = f(e)), (e = f(u)), (s = o(u)), (r = null == (a = u.ownerDocument) ? void 0 : a.body), (a = _(e.scrollWidth, e.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0)), (l = _(e.scrollHeight, e.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0)), (u = -s.scrollLeft + p(u)), (s = -s.scrollTop), "rtl" === c(r || e).direction && (u += _(e.clientWidth, r ? r.clientWidth : 0) - a), (e = j({ width: a, height: l, x: u, y: s })));
    return e;
  }
  function D(e, t, n) {
    return (
      (t =
        "clippingParents" === t
          ? (function (e) {
              var t = v(m(e)),
                n =
                  0 <= ["absolute", "fixed"].indexOf(c(e).position) && i(e)
                    ? y(e)
                    : e;
              return r(n)
                ? t.filter(function (e) {
                    return r(e) && O(e, n) && "body" !== s(e);
                  })
                : [];
            })(e)
          : [].concat(t)),
      ((n = (n = [].concat(t, [n])).reduce(function (t, n) {
        return (
          (n = E(e, n)),
          (t.top = _(n.top, t.top)),
          (t.right = U(n.right, t.right)),
          (t.bottom = U(n.bottom, t.bottom)),
          (t.left = _(n.left, t.left)),
          t
        );
      }, E(e, n[0]))).width = n.right - n.left),
      (n.height = n.bottom - n.top),
      (n.x = n.left),
      (n.y = n.top),
      n
    );
  }
  function L(e) {
    return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
  }
  function P(e) {
    var t = e.reference,
      n = e.element,
      o = (e = e.placement) ? x(e) : null;
    e = e ? e.split("-")[1] : null;
    var r = t.x + t.width / 2 - n.width / 2,
      i = t.y + t.height / 2 - n.height / 2;
    switch (o) {
      case "top":
        r = { x: r, y: t.y - n.height };
        break;
      case "bottom":
        r = { x: r, y: t.y + t.height };
        break;
      case "right":
        r = { x: t.x + t.width, y: i };
        break;
      case "left":
        r = { x: t.x - n.width, y: i };
        break;
      default:
        r = { x: t.x, y: t.y };
    }
    if (null != (o = o ? L(o) : null))
      switch (((i = "y" === o ? "height" : "width"), e)) {
        case "start":
          r[o] -= t[i] / 2 - n[i] / 2;
          break;
        case "end":
          r[o] += t[i] / 2 - n[i] / 2;
      }
    return r;
  }
  function M(e) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
  }
  function k(e, t) {
    return t.reduce(function (t, n) {
      return (t[n] = e), t;
    }, {});
  }
  function A(e, n) {
    void 0 === n && (n = {});
    var o = n;
    n = void 0 === (n = o.placement) ? e.placement : n;
    var i = o.boundary,
      a = void 0 === i ? "clippingParents" : i,
      s = void 0 === (i = o.rootBoundary) ? "viewport" : i;
    i = void 0 === (i = o.elementContext) ? "popper" : i;
    var p = o.altBoundary,
      c = void 0 !== p && p;
    o = M(
      "number" != typeof (o = void 0 === (o = o.padding) ? 0 : o) ? o : k(o, C)
    );
    var l = e.elements.reference;
    (p = e.rects.popper),
      (a = D(
        r((c = e.elements[c ? ("popper" === i ? "reference" : "popper") : i]))
          ? c
          : c.contextElement || f(e.elements.popper),
        a,
        s
      )),
      (c = P({
        reference: (s = t(l)),
        element: p,
        strategy: "absolute",
        placement: n,
      })),
      (p = j(Object.assign({}, p, c))),
      (s = "popper" === i ? p : s);
    var u = {
      top: a.top - s.top + o.top,
      bottom: s.bottom - a.bottom + o.bottom,
      left: a.left - s.left + o.left,
      right: s.right - a.right + o.right,
    };
    if (((e = e.modifiersData.offset), "popper" === i && e)) {
      var d = e[n];
      Object.keys(u).forEach(function (e) {
        var t = 0 <= ["right", "bottom"].indexOf(e) ? 1 : -1,
          n = 0 <= ["top", "bottom"].indexOf(e) ? "y" : "x";
        u[e] += d[n] * t;
      });
    }
    return u;
  }
  function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function (e) {
      return !(e && "function" == typeof e.getBoundingClientRect);
    });
  }
  function B(e) {
    void 0 === e && (e = {});
    var t = e.defaultModifiers,
      n = void 0 === t ? [] : t,
      o = void 0 === (e = e.defaultOptions) ? F : e;
    return function (e, t, i) {
      function a() {
        f.forEach(function (e) {
          return e();
        }),
          (f = []);
      }
      void 0 === i && (i = o);
      var s = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, F, o),
          modifiersData: {},
          elements: { reference: e, popper: t },
          attributes: {},
          styles: {},
        },
        f = [],
        p = !1,
        c = {
          state: s,
          setOptions: function (i) {
            return (
              a(),
              (s.options = Object.assign({}, o, s.options, i)),
              (s.scrollParents = {
                reference: r(e)
                  ? v(e)
                  : e.contextElement
                  ? v(e.contextElement)
                  : [],
                popper: v(t),
              }),
              (i = (function (e) {
                var t = b(e);
                return I.reduce(function (e, n) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === n;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(n, s.options.modifiers))
              )),
              (s.orderedModifiers = i.filter(function (e) {
                return e.enabled;
              })),
              s.orderedModifiers.forEach(function (e) {
                var t = e.name,
                  n = e.options;
                (n = void 0 === n ? {} : n),
                  "function" == typeof (e = e.effect) &&
                    ((t = e({ state: s, name: t, instance: c, options: n })),
                    f.push(t || function () {}));
              }),
              c.update()
            );
          },
          forceUpdate: function () {
            if (!p) {
              var e = s.elements,
                t = e.reference;
              if (W(t, (e = e.popper)))
                for (
                  s.rects = {
                    reference: u(t, y(e), "fixed" === s.options.strategy),
                    popper: d(e),
                  },
                    s.reset = !1,
                    s.placement = s.options.placement,
                    s.orderedModifiers.forEach(function (e) {
                      return (s.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    }),
                    t = 0;
                  t < s.orderedModifiers.length;
                  t++
                )
                  if (!0 === s.reset) (s.reset = !1), (t = -1);
                  else {
                    var n = s.orderedModifiers[t];
                    e = n.fn;
                    var o = n.options;
                    (o = void 0 === o ? {} : o),
                      (n = n.name),
                      "function" == typeof e &&
                        (s =
                          e({ state: s, options: o, name: n, instance: c }) ||
                          s);
                  }
            }
          },
          update: w(function () {
            return new Promise(function (e) {
              c.forceUpdate(), e(s);
            });
          }),
          destroy: function () {
            a(), (p = !0);
          },
        };
      return W(e, t)
        ? (c.setOptions(i).then(function (e) {
            !p && i.onFirstUpdate && i.onFirstUpdate(e);
          }),
          c)
        : c;
    };
  }
  function T(e) {
    var t,
      o = e.popper,
      r = e.popperRect,
      i = e.placement,
      a = e.offsets,
      s = e.position,
      p = e.gpuAcceleration,
      l = e.adaptive;
    if (!0 === (e = e.roundOffsets)) {
      e = a.y;
      var u = window.devicePixelRatio || 1;
      e = { x: z(z(a.x * u) / u) || 0, y: z(z(e * u) / u) || 0 };
    } else e = "function" == typeof e ? e(a) : a;
    (e = void 0 === (e = (u = e).x) ? 0 : e),
      (u = void 0 === (u = u.y) ? 0 : u);
    var d = a.hasOwnProperty("x");
    a = a.hasOwnProperty("y");
    var m,
      h = "left",
      v = "top",
      g = window;
    if (l) {
      var b = y(o),
        w = "clientHeight",
        x = "clientWidth";
      b === n(o) &&
        "static" !== c((b = f(o))).position &&
        ((w = "scrollHeight"), (x = "scrollWidth")),
        "top" === i &&
          ((v = "bottom"), (u -= b[w] - r.height), (u *= p ? 1 : -1)),
        "left" === i &&
          ((h = "right"), (e -= b[x] - r.width), (e *= p ? 1 : -1));
    }
    return (
      (o = Object.assign({ position: s }, l && J)),
      p
        ? Object.assign(
            {},
            o,
            (((m = {})[v] = a ? "0" : ""),
            (m[h] = d ? "0" : ""),
            (m.transform =
              2 > (g.devicePixelRatio || 1)
                ? "translate(" + e + "px, " + u + "px)"
                : "translate3d(" + e + "px, " + u + "px, 0)"),
            m)
          )
        : Object.assign(
            {},
            o,
            (((t = {})[v] = a ? u + "px" : ""),
            (t[h] = d ? e + "px" : ""),
            (t.transform = ""),
            t)
          )
    );
  }
  function H(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
      return $[e];
    });
  }
  function R(e) {
    return e.replace(/start|end/g, function (e) {
      return ee[e];
    });
  }
  function S(e, t, n) {
    return (
      void 0 === n && (n = { x: 0, y: 0 }),
      {
        top: e.top - t.height - n.y,
        right: e.right - t.width + n.x,
        bottom: e.bottom - t.height + n.y,
        left: e.left - t.width - n.x,
      }
    );
  }
  function q(e) {
    return ["top", "right", "bottom", "left"].some(function (t) {
      return 0 <= e[t];
    });
  }
  var C = ["top", "bottom", "right", "left"],
    N = C.reduce(function (e, t) {
      return e.concat([t + "-start", t + "-end"]);
    }, []),
    V = [].concat(C, ["auto"]).reduce(function (e, t) {
      return e.concat([t, t + "-start", t + "-end"]);
    }, []),
    I =
      "beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(
        " "
      ),
    _ = Math.max,
    U = Math.min,
    z = Math.round,
    F = { placement: "bottom", modifiers: [], strategy: "absolute" },
    X = { passive: !0 },
    Y = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          o = e.instance,
          r = (e = e.options).scroll,
          i = void 0 === r || r,
          a = void 0 === (e = e.resize) || e,
          s = n(t.elements.popper),
          f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          i &&
            f.forEach(function (e) {
              e.addEventListener("scroll", o.update, X);
            }),
          a && s.addEventListener("resize", o.update, X),
          function () {
            i &&
              f.forEach(function (e) {
                e.removeEventListener("scroll", o.update, X);
              }),
              a && s.removeEventListener("resize", o.update, X);
          }
        );
      },
      data: {},
    },
    G = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state;
        t.modifiersData[e.name] = P({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    },
    J = { top: "auto", right: "auto", bottom: "auto", left: "auto" },
    K = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = void 0 === (e = n.gpuAcceleration) || e;
        var o = n.adaptive;
        (o = void 0 === o || o),
          (n = void 0 === (n = n.roundOffsets) || n),
          (e = {
            placement: x(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: e,
          }),
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: o,
                  roundOffsets: n,
                })
              )
            )),
          null != t.modifiersData.arrow &&
            (t.styles.arrow = Object.assign(
              {},
              t.styles.arrow,
              T(
                Object.assign({}, e, {
                  offsets: t.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: n,
                })
              )
            )),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-placement": t.placement,
          }));
      },
      data: {},
    },
    Q = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            o = t.attributes[e] || {},
            r = t.elements[e];
          i(r) &&
            s(r) &&
            (Object.assign(r.style, n),
            Object.keys(o).forEach(function (e) {
              var t = o[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var o = t.elements[e],
                r = t.attributes[e] || {};
              (e = Object.keys(
                t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
              ).reduce(function (e, t) {
                return (e[t] = ""), e;
              }, {})),
                i(o) &&
                  s(o) &&
                  (Object.assign(o.style, e),
                  Object.keys(r).forEach(function (e) {
                    o.removeAttribute(e);
                  }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    },
    Z = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          o = void 0 === (e = e.options.offset) ? [0, 0] : e,
          r = (e = V.reduce(function (e, n) {
            var r = t.rects,
              i = x(n),
              a = 0 <= ["left", "top"].indexOf(i) ? -1 : 1,
              s =
                "function" == typeof o
                  ? o(Object.assign({}, r, { placement: n }))
                  : o;
            return (
              (r = (r = s[0]) || 0),
              (s = ((s = s[1]) || 0) * a),
              (i =
                0 <= ["left", "right"].indexOf(i)
                  ? { x: s, y: r }
                  : { x: r, y: s }),
              (e[n] = i),
              e
            );
          }, {}))[t.placement],
          i = r.x;
        (r = r.y),
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += i),
            (t.modifiersData.popperOffsets.y += r)),
          (t.modifiersData[n] = e);
      },
    },
    $ = { left: "right", right: "left", bottom: "top", top: "bottom" },
    ee = { start: "end", end: "start" },
    te = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        if (((e = e.name), !t.modifiersData[e]._skip)) {
          var o = n.mainAxis;
          o = void 0 === o || o;
          var r = n.altAxis;
          r = void 0 === r || r;
          var i = n.fallbackPlacements,
            a = n.padding,
            s = n.boundary,
            f = n.rootBoundary,
            p = n.altBoundary,
            c = n.flipVariations,
            l = void 0 === c || c,
            u = n.allowedAutoPlacements;
          (c = x((n = t.options.placement))),
            (i =
              i ||
              (c !== n && l
                ? (function (e) {
                    if ("auto" === x(e)) return [];
                    var t = H(e);
                    return [R(e), t, R(t)];
                  })(n)
                : [H(n)]));
          var d = [n].concat(i).reduce(function (e, n) {
            return e.concat(
              "auto" === x(n)
                ? (function (e, t) {
                    void 0 === t && (t = {});
                    var n = t.boundary,
                      o = t.rootBoundary,
                      r = t.padding,
                      i = t.flipVariations,
                      a = t.allowedAutoPlacements,
                      s = void 0 === a ? V : a,
                      f = t.placement.split("-")[1];
                    0 ===
                      (i = (t = f
                        ? i
                          ? N
                          : N.filter(function (e) {
                              return e.split("-")[1] === f;
                            })
                        : C).filter(function (e) {
                        return 0 <= s.indexOf(e);
                      })).length && (i = t);
                    var p = i.reduce(function (t, i) {
                      return (
                        (t[i] = A(e, {
                          placement: i,
                          boundary: n,
                          rootBoundary: o,
                          padding: r,
                        })[x(i)]),
                        t
                      );
                    }, {});
                    return Object.keys(p).sort(function (e, t) {
                      return p[e] - p[t];
                    });
                  })(t, {
                    placement: n,
                    boundary: s,
                    rootBoundary: f,
                    padding: a,
                    flipVariations: l,
                    allowedAutoPlacements: u,
                  })
                : n
            );
          }, []);
          (n = t.rects.reference), (i = t.rects.popper);
          var m = new Map();
          c = !0;
          for (var h = d[0], v = 0; v < d.length; v++) {
            var g = d[v],
              y = x(g),
              b = "start" === g.split("-")[1],
              w = 0 <= ["top", "bottom"].indexOf(y),
              O = w ? "width" : "height",
              j = A(t, {
                placement: g,
                boundary: s,
                rootBoundary: f,
                altBoundary: p,
                padding: a,
              });
            if (
              ((b = w ? (b ? "right" : "left") : b ? "bottom" : "top"),
              n[O] > i[O] && (b = H(b)),
              (O = H(b)),
              (w = []),
              o && w.push(0 >= j[y]),
              r && w.push(0 >= j[b], 0 >= j[O]),
              w.every(function (e) {
                return e;
              }))
            ) {
              (h = g), (c = !1);
              break;
            }
            m.set(g, w);
          }
          if (c)
            for (
              o = function (e) {
                var t = d.find(function (t) {
                  if ((t = m.get(t)))
                    return t.slice(0, e).every(function (e) {
                      return e;
                    });
                });
                if (t) return (h = t), "break";
              },
                r = l ? 3 : 1;
              0 < r && "break" !== o(r);
              r--
            );
          t.placement !== h &&
            ((t.modifiersData[e]._skip = !0),
            (t.placement = h),
            (t.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    },
    ne = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options;
        e = e.name;
        var o = n.mainAxis,
          r = void 0 === o || o,
          i = void 0 !== (o = n.altAxis) && o;
        o = void 0 === (o = n.tether) || o;
        var a = n.tetherOffset,
          s = void 0 === a ? 0 : a,
          f = A(t, {
            boundary: n.boundary,
            rootBoundary: n.rootBoundary,
            padding: n.padding,
            altBoundary: n.altBoundary,
          });
        n = x(t.placement);
        var p = t.placement.split("-")[1],
          c = !p,
          l = L(n);
        (n = "x" === l ? "y" : "x"), (a = t.modifiersData.popperOffsets);
        var u = t.rects.reference,
          m = t.rects.popper,
          h =
            "function" == typeof s
              ? s(Object.assign({}, t.rects, { placement: t.placement }))
              : s;
        if (((s = { x: 0, y: 0 }), a)) {
          if (r || i) {
            var v = "y" === l ? "top" : "left",
              g = "y" === l ? "bottom" : "right",
              b = "y" === l ? "height" : "width",
              w = a[l],
              O = a[l] + f[v],
              j = a[l] - f[g],
              E = o ? -m[b] / 2 : 0,
              D = "start" === p ? u[b] : m[b];
            (p = "start" === p ? -m[b] : -u[b]),
              (m = t.elements.arrow),
              (m = o && m ? d(m) : { width: 0, height: 0 });
            var P = t.modifiersData["arrow#persistent"]
              ? t.modifiersData["arrow#persistent"].padding
              : { top: 0, right: 0, bottom: 0, left: 0 };
            (v = P[v]),
              (g = P[g]),
              (m = _(0, U(u[b], m[b]))),
              (D = c ? u[b] / 2 - E - m - v - h : D - m - v - h),
              (u = c ? -u[b] / 2 + E + m + g + h : p + m + g + h),
              (c = t.elements.arrow && y(t.elements.arrow)),
              (h = t.modifiersData.offset
                ? t.modifiersData.offset[t.placement][l]
                : 0),
              (c =
                a[l] +
                D -
                h -
                (c ? ("y" === l ? c.clientTop || 0 : c.clientLeft || 0) : 0)),
              (u = a[l] + u - h),
              r &&
                ((r = o ? U(O, c) : O),
                (j = o ? _(j, u) : j),
                (r = _(r, U(w, j))),
                (a[l] = r),
                (s[l] = r - w)),
              i &&
                ((r = (i = a[n]) + f["x" === l ? "top" : "left"]),
                (f = i - f["x" === l ? "bottom" : "right"]),
                (r = o ? U(r, c) : r),
                (o = o ? _(f, u) : f),
                (o = _(r, U(i, o))),
                (a[n] = o),
                (s[n] = o - i));
          }
          t.modifiersData[e] = s;
        }
      },
      requiresIfExists: ["offset"],
    },
    oe = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          o = e.name,
          r = e.options,
          i = n.elements.arrow,
          a = n.modifiersData.popperOffsets,
          s = x(n.placement);
        if (
          ((e = L(s)),
          (s = 0 <= ["left", "right"].indexOf(s) ? "height" : "width"),
          i && a)
        ) {
          r = M(
            "number" !=
              typeof (r =
                "function" == typeof (r = r.padding)
                  ? r(Object.assign({}, n.rects, { placement: n.placement }))
                  : r)
              ? r
              : k(r, C)
          );
          var f = d(i),
            p = "y" === e ? "top" : "left",
            c = "y" === e ? "bottom" : "right",
            l =
              n.rects.reference[s] +
              n.rects.reference[e] -
              a[e] -
              n.rects.popper[s];
          (a = a[e] - n.rects.reference[e]),
            (a =
              (i = (i = y(i))
                ? "y" === e
                  ? i.clientHeight || 0
                  : i.clientWidth || 0
                : 0) /
                2 -
              f[s] / 2 +
              (l / 2 - a / 2)),
            (s = _(r[p], U(a, i - f[s] - r[c]))),
            (n.modifiersData[o] =
              (((t = {})[e] = s), (t.centerOffset = s - a), t));
        }
      },
      effect: function (e) {
        var t = e.state;
        if (
          null !=
          (e = void 0 === (e = e.options.element) ? "[data-popper-arrow]" : e)
        ) {
          if ("string" == typeof e && !(e = t.elements.popper.querySelector(e)))
            return;
          O(t.elements.popper, e) && (t.elements.arrow = e);
        }
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    re = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state;
        e = e.name;
        var n = t.rects.reference,
          o = t.rects.popper,
          r = t.modifiersData.preventOverflow,
          i = A(t, { elementContext: "reference" }),
          a = A(t, { altBoundary: !0 });
        (n = S(i, n)),
          (o = S(a, o, r)),
          (r = q(n)),
          (a = q(o)),
          (t.modifiersData[e] = {
            referenceClippingOffsets: n,
            popperEscapeOffsets: o,
            isReferenceHidden: r,
            hasPopperEscaped: a,
          }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": r,
            "data-popper-escaped": a,
          }));
      },
    },
    ie = B({ defaultModifiers: [Y, G, K, Q] }),
    ae = [Y, G, K, Q, Z, te, ne, oe, re],
    se = B({ defaultModifiers: ae });
  (e.applyStyles = Q),
    (e.arrow = oe),
    (e.computeStyles = K),
    (e.createPopper = se),
    (e.createPopperLite = ie),
    (e.defaultModifiers = ae),
    (e.detectOverflow = A),
    (e.eventListeners = Y),
    (e.flip = te),
    (e.hide = re),
    (e.offset = Z),
    (e.popperGenerator = B),
    (e.popperOffsets = G),
    (e.preventOverflow = ne),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
  if ("function" == typeof define && define.amd)
    define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), (a.WOW = c.exports);
  }
})(this, function (a, b) {
  "use strict";
  function c(a, b) {
    if (!(a instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(a, b) {
    return b.indexOf(a) >= 0;
  }
  function e(a, b) {
    for (var c in b)
      if (null == a[c]) {
        var d = b[c];
        a[c] = d;
      }
    return a;
  }
  function f(a) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      a
    );
  }
  function g(a) {
    var b =
        arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
      c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
      d =
        arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
      e = void 0;
    return (
      null != document.createEvent
        ? ((e = document.createEvent("CustomEvent")),
          e.initCustomEvent(a, b, c, d))
        : null != document.createEventObject
        ? ((e = document.createEventObject()), (e.eventType = a))
        : (e.eventName = a),
      e
    );
  }
  function h(a, b) {
    null != a.dispatchEvent
      ? a.dispatchEvent(b)
      : b in (null != a)
      ? a[b]()
      : "on" + b in (null != a) && a["on" + b]();
  }
  function i(a, b, c) {
    null != a.addEventListener
      ? a.addEventListener(b, c, !1)
      : null != a.attachEvent
      ? a.attachEvent("on" + b, c)
      : (a[b] = c);
  }
  function j(a, b, c) {
    null != a.removeEventListener
      ? a.removeEventListener(b, c, !1)
      : null != a.detachEvent
      ? a.detachEvent("on" + b, c)
      : delete a[b];
  }
  function k() {
    return "innerHeight" in window
      ? window.innerHeight
      : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: !0 });
  var l,
    m,
    n = (function () {
      function a(a, b) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          (d.enumerable = d.enumerable || !1),
            (d.configurable = !0),
            "value" in d && (d.writable = !0),
            Object.defineProperty(a, d.key, d);
        }
      }
      return function (b, c, d) {
        return c && a(b.prototype, c), d && a(b, d), b;
      };
    })(),
    o =
      window.WeakMap ||
      window.MozWeakMap ||
      (function () {
        function a() {
          c(this, a), (this.keys = []), (this.values = []);
        }
        return (
          n(a, [
            {
              key: "get",
              value: function (a) {
                for (var b = 0; b < this.keys.length; b++) {
                  var c = this.keys[b];
                  if (c === a) return this.values[b];
                }
              },
            },
            {
              key: "set",
              value: function (a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                  var d = this.keys[c];
                  if (d === a) return (this.values[c] = b), this;
                }
                return this.keys.push(a), this.values.push(b), this;
              },
            },
          ]),
          a
        );
      })(),
    p =
      window.MutationObserver ||
      window.WebkitMutationObserver ||
      window.MozMutationObserver ||
      ((m = l =
        (function () {
          function a() {
            c(this, a),
              "undefined" != typeof console &&
                null !== console &&
                (console.warn(
                  "MutationObserver is not supported by your browser."
                ),
                console.warn(
                  "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                ));
          }
          return n(a, [{ key: "observe", value: function () {} }]), a;
        })()),
      (l.notSupported = !0),
      m),
    q =
      window.getComputedStyle ||
      function (a) {
        var b = /(\-([a-z]){1})/g;
        return {
          getPropertyValue: function (c) {
            "float" === c && (c = "styleFloat"),
              b.test(c) &&
                c.replace(b, function (a, b) {
                  return b.toUpperCase();
                });
            var d = a.currentStyle;
            return (null != d ? d[c] : void 0) || null;
          },
        };
      },
    r = (function () {
      function a() {
        var b =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
        c(this, a),
          (this.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null,
            resetAnimation: !0,
          }),
          (this.animate = (function () {
            return "requestAnimationFrame" in window
              ? function (a) {
                  return window.requestAnimationFrame(a);
                }
              : function (a) {
                  return a();
                };
          })()),
          (this.vendors = ["moz", "webkit"]),
          (this.start = this.start.bind(this)),
          (this.resetAnimation = this.resetAnimation.bind(this)),
          (this.scrollHandler = this.scrollHandler.bind(this)),
          (this.scrollCallback = this.scrollCallback.bind(this)),
          (this.scrolled = !0),
          (this.config = e(b, this.defaults)),
          null != b.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              b.scrollContainer
            )),
          (this.animationNameCache = new o()),
          (this.wowEvent = g(this.config.boxClass));
      }
      return (
        n(a, [
          {
            key: "init",
            value: function () {
              (this.element = window.document.documentElement),
                d(document.readyState, ["interactive", "complete"])
                  ? this.start()
                  : i(document, "DOMContentLoaded", this.start),
                (this.finished = []);
            },
          },
          {
            key: "start",
            value: function () {
              var a = this;
              if (
                ((this.stopped = !1),
                (this.boxes = [].slice.call(
                  this.element.querySelectorAll("." + this.config.boxClass)
                )),
                (this.all = this.boxes.slice(0)),
                this.boxes.length)
              )
                if (this.disabled()) this.resetStyle();
                else
                  for (var b = 0; b < this.boxes.length; b++) {
                    var c = this.boxes[b];
                    this.applyStyle(c, !0);
                  }
              if (
                (this.disabled() ||
                  (i(
                    this.config.scrollContainer || window,
                    "scroll",
                    this.scrollHandler
                  ),
                  i(window, "resize", this.scrollHandler),
                  (this.interval = setInterval(this.scrollCallback, 50))),
                this.config.live)
              ) {
                var d = new p(function (b) {
                  for (var c = 0; c < b.length; c++)
                    for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                      var f = d.addedNodes[e];
                      a.doSync(f);
                    }
                });
                d.observe(document.body, { childList: !0, subtree: !0 });
              }
            },
          },
          {
            key: "stop",
            value: function () {
              (this.stopped = !0),
                j(
                  this.config.scrollContainer || window,
                  "scroll",
                  this.scrollHandler
                ),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval);
            },
          },
          {
            key: "sync",
            value: function () {
              p.notSupported && this.doSync(this.element);
            },
          },
          {
            key: "doSync",
            value: function (a) {
              if (
                (("undefined" != typeof a && null !== a) || (a = this.element),
                1 === a.nodeType)
              ) {
                a = a.parentNode || a;
                for (
                  var b = a.querySelectorAll("." + this.config.boxClass), c = 0;
                  c < b.length;
                  c++
                ) {
                  var e = b[c];
                  d(e, this.all) ||
                    (this.boxes.push(e),
                    this.all.push(e),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(e, !0),
                    (this.scrolled = !0));
                }
              }
            },
          },
          {
            key: "show",
            value: function (a) {
              return (
                this.applyStyle(a),
                (a.className = a.className + " " + this.config.animateClass),
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation &&
                  (i(a, "animationend", this.resetAnimation),
                  i(a, "oanimationend", this.resetAnimation),
                  i(a, "webkitAnimationEnd", this.resetAnimation),
                  i(a, "MSAnimationEnd", this.resetAnimation)),
                a
              );
            },
          },
          {
            key: "applyStyle",
            value: function (a, b) {
              var c = this,
                d = a.getAttribute("data-wow-duration"),
                e = a.getAttribute("data-wow-delay"),
                f = a.getAttribute("data-wow-iteration");
              return this.animate(function () {
                return c.customStyle(a, b, d, e, f);
              });
            },
          },
          {
            key: "resetStyle",
            value: function () {
              for (var a = 0; a < this.boxes.length; a++) {
                var b = this.boxes[a];
                b.style.visibility = "visible";
              }
            },
          },
          {
            key: "resetAnimation",
            value: function (a) {
              if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                var b = a.target || a.srcElement;
                b.className = b.className
                  .replace(this.config.animateClass, "")
                  .trim();
              }
            },
          },
          {
            key: "customStyle",
            value: function (a, b, c, d, e) {
              return (
                b && this.cacheAnimationName(a),
                (a.style.visibility = b ? "hidden" : "visible"),
                c && this.vendorSet(a.style, { animationDuration: c }),
                d && this.vendorSet(a.style, { animationDelay: d }),
                e && this.vendorSet(a.style, { animationIterationCount: e }),
                this.vendorSet(a.style, {
                  animationName: b ? "none" : this.cachedAnimationName(a),
                }),
                a
              );
            },
          },
          {
            key: "vendorSet",
            value: function (a, b) {
              for (var c in b)
                if (b.hasOwnProperty(c)) {
                  var d = b[c];
                  a["" + c] = d;
                  for (var e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
                  }
                }
            },
          },
          {
            key: "vendorCSS",
            value: function (a, b) {
              for (
                var c = q(a), d = c.getPropertyCSSValue(b), e = 0;
                e < this.vendors.length;
                e++
              ) {
                var f = this.vendors[e];
                d = d || c.getPropertyCSSValue("-" + f + "-" + b);
              }
              return d;
            },
          },
          {
            key: "animationName",
            value: function (a) {
              var b = void 0;
              try {
                b = this.vendorCSS(a, "animation-name").cssText;
              } catch (c) {
                b = q(a).getPropertyValue("animation-name");
              }
              return "none" === b ? "" : b;
            },
          },
          {
            key: "cacheAnimationName",
            value: function (a) {
              return this.animationNameCache.set(a, this.animationName(a));
            },
          },
          {
            key: "cachedAnimationName",
            value: function (a) {
              return this.animationNameCache.get(a);
            },
          },
          {
            key: "scrollHandler",
            value: function () {
              this.scrolled = !0;
            },
          },
          {
            key: "scrollCallback",
            value: function () {
              if (this.scrolled) {
                this.scrolled = !1;
                for (var a = [], b = 0; b < this.boxes.length; b++) {
                  var c = this.boxes[b];
                  if (c) {
                    if (this.isVisible(c)) {
                      this.show(c);
                      continue;
                    }
                    a.push(c);
                  }
                }
                (this.boxes = a),
                  this.boxes.length || this.config.live || this.stop();
              }
            },
          },
          {
            key: "offsetTop",
            value: function (a) {
              for (; void 0 === a.offsetTop; ) a = a.parentNode;
              for (var b = a.offsetTop; a.offsetParent; )
                (a = a.offsetParent), (b += a.offsetTop);
              return b;
            },
          },
          {
            key: "isVisible",
            value: function (a) {
              var b = a.getAttribute("data-wow-offset") || this.config.offset,
                c =
                  (this.config.scrollContainer &&
                    this.config.scrollContainer.scrollTop) ||
                  window.pageYOffset,
                d = c + Math.min(this.element.clientHeight, k()) - b,
                e = this.offsetTop(a),
                f = e + a.clientHeight;
              return d >= e && f >= c;
            },
          },
          {
            key: "disabled",
            value: function () {
              return !this.config.mobile && f(navigator.userAgent);
            },
          },
        ]),
        a
      );
    })();
  (b["default"] = r), (a.exports = b["default"]);
});
("use strict");
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            "function" == typeof Symbol &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        })(e);
}
function _possibleConstructorReturn(e, t) {
  return !t || ("object" !== _typeof(t) && "function" != typeof t)
    ? _assertThisInitialized(e)
    : t;
}
function _getPrototypeOf(e) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function _assertThisInitialized(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _inherits(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _setPrototypeOf(e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (e, t) {
      return (e.__proto__ = t), e;
    })(e, t);
}
function _classCallCheck(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, i.key, i);
  }
}
function _createClass(e, t, n) {
  return (
    t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
  );
}
var Emitter = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, [
        {
          key: "on",
          value: function (e, t) {
            return (
              (this._callbacks = this._callbacks || {}),
              this._callbacks[e] || (this._callbacks[e] = []),
              this._callbacks[e].push(t),
              this
            );
          },
        },
        {
          key: "emit",
          value: function (e) {
            this._callbacks = this._callbacks || {};
            var t = this._callbacks[e];
            if (t) {
              for (
                var n = arguments.length,
                  i = new Array(1 < n ? n - 1 : 0),
                  r = 1;
                r < n;
                r++
              )
                i[r - 1] = arguments[r];
              var o = !0,
                a = !1,
                l = void 0;
              try {
                for (
                  var s, u = t[Symbol.iterator]();
                  !(o = (s = u.next()).done);
                  o = !0
                )
                  s.value.apply(this, i);
              } catch (e) {
                (a = !0), (l = e);
              } finally {
                try {
                  o || null == u.return || u.return();
                } finally {
                  if (a) throw l;
                }
              }
            }
            return this;
          },
        },
        {
          key: "off",
          value: function (e, t) {
            if (!this._callbacks || 0 === arguments.length)
              return (this._callbacks = {}), this;
            var n = this._callbacks[e];
            if (!n) return this;
            if (1 === arguments.length) return delete this._callbacks[e], this;
            for (var i = 0; i < n.length; i++)
              if (n[i] === t) {
                n.splice(i, 1);
                break;
              }
            return this;
          },
        },
      ]),
      e
    );
  })(),
  Dropzone = (function () {
    function e(t, n) {
      var i, r, o;
      if (
        (_classCallCheck(this, e),
        ((i = _possibleConstructorReturn(
          this,
          _getPrototypeOf(e).call(this)
        )).element = t),
        (i.version = e.version),
        (i.defaultOptions.previewTemplate =
          i.defaultOptions.previewTemplate.replace(/\n*/g, "")),
        (i.clickableElements = []),
        (i.listeners = []),
        (i.files = []),
        "string" == typeof i.element &&
          (i.element = document.querySelector(i.element)),
        !i.element || null == i.element.nodeType)
      )
        throw new Error("Invalid dropzone element.");
      if (i.element.dropzone) throw new Error("Dropzone already attached.");
      e.instances.push(_assertThisInitialized(i)),
        (i.element.dropzone = _assertThisInitialized(i));
      var a = null != (o = e.optionsForElement(i.element)) ? o : {};
      if (
        ((i.options = e.extend({}, i.defaultOptions, a, null != n ? n : {})),
        i.options.forceFallback || !e.isBrowserSupported())
      )
        return _possibleConstructorReturn(
          i,
          i.options.fallback.call(_assertThisInitialized(i))
        );
      if (
        (null == i.options.url &&
          (i.options.url = i.element.getAttribute("action")),
        !i.options.url)
      )
        throw new Error("No URL provided.");
      if (i.options.acceptedFiles && i.options.acceptedMimeTypes)
        throw new Error(
          "You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated."
        );
      if (i.options.uploadMultiple && i.options.chunking)
        throw new Error("You cannot set both: uploadMultiple and chunking.");
      return (
        i.options.acceptedMimeTypes &&
          ((i.options.acceptedFiles = i.options.acceptedMimeTypes),
          delete i.options.acceptedMimeTypes),
        null != i.options.renameFilename &&
          (i.options.renameFile = function (e) {
            return i.options.renameFilename.call(
              _assertThisInitialized(i),
              e.name,
              e
            );
          }),
        (i.options.method = i.options.method.toUpperCase()),
        (r = i.getExistingFallback()) &&
          r.parentNode &&
          r.parentNode.removeChild(r),
        !1 !== i.options.previewsContainer &&
          (i.options.previewsContainer
            ? (i.previewsContainer = e.getElement(
                i.options.previewsContainer,
                "previewsContainer"
              ))
            : (i.previewsContainer = i.element)),
        i.options.clickable &&
          (!0 === i.options.clickable
            ? (i.clickableElements = [i.element])
            : (i.clickableElements = e.getElements(
                i.options.clickable,
                "clickable"
              ))),
        i.init(),
        i
      );
    }
    return (
      _inherits(e, Emitter),
      _createClass(e, null, [
        {
          key: "initClass",
          value: function () {
            (this.prototype.Emitter = Emitter),
              (this.prototype.events = [
                "drop",
                "dragstart",
                "dragend",
                "dragenter",
                "dragover",
                "dragleave",
                "addedfile",
                "addedfiles",
                "removedfile",
                "thumbnail",
                "error",
                "errormultiple",
                "processing",
                "processingmultiple",
                "uploadprogress",
                "totaluploadprogress",
                "sending",
                "sendingmultiple",
                "success",
                "successmultiple",
                "canceled",
                "canceledmultiple",
                "complete",
                "completemultiple",
                "reset",
                "maxfilesexceeded",
                "maxfilesreached",
                "queuecomplete",
              ]),
              (this.prototype.defaultOptions = {
                url: null,
                method: "post",
                withCredentials: !1,
                timeout: 3e4,
                parallelUploads: 2,
                uploadMultiple: !1,
                chunking: !1,
                forceChunking: !1,
                chunkSize: 2e6,
                parallelChunkUploads: !1,
                retryChunks: !1,
                retryChunksLimit: 3,
                maxFilesize: 256,
                paramName: "file",
                createImageThumbnails: !0,
                maxThumbnailFilesize: 10,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                thumbnailMethod: "crop",
                resizeWidth: null,
                resizeHeight: null,
                resizeMimeType: null,
                resizeQuality: 0.8,
                resizeMethod: "contain",
                filesizeBase: 1e3,
                maxFiles: null,
                headers: null,
                clickable: !0,
                ignoreHiddenFiles: !0,
                acceptedFiles: null,
                acceptedMimeTypes: null,
                autoProcessQueue: !0,
                autoQueue: !0,
                addRemoveLinks: !1,
                previewsContainer: null,
                hiddenInputContainer: "body",
                capture: null,
                renameFilename: null,
                renameFile: null,
                forceFallback: !1,
                dictDefaultMessage: "Drop files here to upload",
                dictFallbackMessage:
                  "Your browser does not support drag'n'drop file uploads.",
                dictFallbackText:
                  "Please use the fallback form below to upload your files like in the olden days.",
                dictFileTooBig:
                  "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                dictInvalidFileType: "You can't upload files of this type.",
                dictResponseError: "Server responded with {{statusCode}} code.",
                dictCancelUpload: "Cancel upload",
                dictUploadCanceled: "Upload canceled.",
                dictCancelUploadConfirmation:
                  "Are you sure you want to cancel this upload?",
                dictRemoveFile: "Remove file",
                dictRemoveFileConfirmation: null,
                dictMaxFilesExceeded: "You can not upload any more files.",
                dictFileSizeUnits: {
                  tb: "TB",
                  gb: "GB",
                  mb: "MB",
                  kb: "KB",
                  b: "b",
                },
                init: function () {},
                params: function (e, t, n) {
                  if (n)
                    return {
                      dzuuid: n.file.upload.uuid,
                      dzchunkindex: n.index,
                      dztotalfilesize: n.file.size,
                      dzchunksize: this.options.chunkSize,
                      dztotalchunkcount: n.file.upload.totalChunkCount,
                      dzchunkbyteoffset: n.index * this.options.chunkSize,
                    };
                },
                accept: function (e, t) {
                  return t();
                },
                chunksUploaded: function (e, t) {
                  t();
                },
                fallback: function () {
                  var t;
                  this.element.className = "".concat(
                    this.element.className,
                    " dz-browser-not-supported"
                  );
                  var n = !0,
                    i = !1,
                    r = void 0;
                  try {
                    for (
                      var o,
                        a = this.element
                          .getElementsByTagName("div")
                          [Symbol.iterator]();
                      !(n = (o = a.next()).done);
                      n = !0
                    ) {
                      var l = o.value;
                      if (/(^| )dz-message($| )/.test(l.className)) {
                        (t = l).className = "dz-message";
                        break;
                      }
                    }
                  } catch (t) {
                    (i = !0), (r = t);
                  } finally {
                    try {
                      n || null == a.return || a.return();
                    } finally {
                      if (i) throw r;
                    }
                  }
                  t ||
                    ((t = e.createElement(
                      '<div class="dz-message"><span></span></div>'
                    )),
                    this.element.appendChild(t));
                  var s = t.getElementsByTagName("span")[0];
                  return (
                    s &&
                      (null != s.textContent
                        ? (s.textContent = this.options.dictFallbackMessage)
                        : null != s.innerText &&
                          (s.innerText = this.options.dictFallbackMessage)),
                    this.element.appendChild(this.getFallbackForm())
                  );
                },
                resize: function (e, t, n, i) {
                  var r = {
                      srcX: 0,
                      srcY: 0,
                      srcWidth: e.width,
                      srcHeight: e.height,
                    },
                    o = e.width / e.height;
                  null == t && null == n
                    ? ((t = r.srcWidth), (n = r.srcHeight))
                    : null == t
                    ? (t = n * o)
                    : null == n && (n = t / o);
                  var a =
                    (t = Math.min(t, r.srcWidth)) /
                    (n = Math.min(n, r.srcHeight));
                  if (r.srcWidth > t || r.srcHeight > n)
                    if ("crop" === i)
                      a < o
                        ? ((r.srcHeight = e.height),
                          (r.srcWidth = r.srcHeight * a))
                        : ((r.srcWidth = e.width),
                          (r.srcHeight = r.srcWidth / a));
                    else {
                      if ("contain" !== i)
                        throw new Error(
                          "Unknown resizeMethod '".concat(i, "'")
                        );
                      a < o ? (n = t / o) : (t = n * o);
                    }
                  return (
                    (r.srcX = (e.width - r.srcWidth) / 2),
                    (r.srcY = (e.height - r.srcHeight) / 2),
                    (r.trgWidth = t),
                    (r.trgHeight = n),
                    r
                  );
                },
                transformFile: function (e, t) {
                  return (this.options.resizeWidth ||
                    this.options.resizeHeight) &&
                    e.type.match(/image.*/)
                    ? this.resizeImage(
                        e,
                        this.options.resizeWidth,
                        this.options.resizeHeight,
                        this.options.resizeMethod,
                        t
                      )
                    : t(e);
                },
                previewTemplate:
                  '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Check</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <title>Error</title>\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                drop: function () {
                  return this.element.classList.remove("dz-drag-hover");
                },
                dragstart: function () {},
                dragend: function () {
                  return this.element.classList.remove("dz-drag-hover");
                },
                dragenter: function () {
                  return this.element.classList.add("dz-drag-hover");
                },
                dragover: function () {
                  return this.element.classList.add("dz-drag-hover");
                },
                dragleave: function () {
                  return this.element.classList.remove("dz-drag-hover");
                },
                paste: function () {},
                reset: function () {
                  return this.element.classList.remove("dz-started");
                },
                addedfile: function (t) {
                  var n = this;
                  if (
                    (this.element === this.previewsContainer &&
                      this.element.classList.add("dz-started"),
                    this.previewsContainer)
                  ) {
                    (t.previewElement = e.createElement(
                      this.options.previewTemplate.trim()
                    )),
                      (t.previewTemplate = t.previewElement),
                      this.previewsContainer.appendChild(t.previewElement);
                    var i = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (
                        var a,
                          l = t.previewElement
                            .querySelectorAll("[data-dz-name]")
                            [Symbol.iterator]();
                        !(i = (a = l.next()).done);
                        i = !0
                      ) {
                        var s = a.value;
                        s.textContent = t.name;
                      }
                    } catch (i) {
                      (r = !0), (o = i);
                    } finally {
                      try {
                        i || null == l.return || l.return();
                      } finally {
                        if (r) throw o;
                      }
                    }
                    var u = !0,
                      c = !1,
                      d = void 0;
                    try {
                      for (
                        var p,
                          h = t.previewElement
                            .querySelectorAll("[data-dz-size]")
                            [Symbol.iterator]();
                        !(u = (p = h.next()).done);
                        u = !0
                      )
                        (s = p.value).innerHTML = this.filesize(t.size);
                    } catch (i) {
                      (c = !0), (d = i);
                    } finally {
                      try {
                        u || null == h.return || h.return();
                      } finally {
                        if (c) throw d;
                      }
                    }
                    this.options.addRemoveLinks &&
                      ((t._removeLink = e.createElement(
                        '<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'.concat(
                          this.options.dictRemoveFile,
                          "</a>"
                        )
                      )),
                      t.previewElement.appendChild(t._removeLink));
                    var f = function (i) {
                        return (
                          i.preventDefault(),
                          i.stopPropagation(),
                          t.status === e.UPLOADING
                            ? e.confirm(
                                n.options.dictCancelUploadConfirmation,
                                function () {
                                  return n.removeFile(t);
                                }
                              )
                            : n.options.dictRemoveFileConfirmation
                            ? e.confirm(
                                n.options.dictRemoveFileConfirmation,
                                function () {
                                  return n.removeFile(t);
                                }
                              )
                            : n.removeFile(t)
                        );
                      },
                      m = !0,
                      v = !1,
                      y = void 0;
                    try {
                      for (
                        var g,
                          b = t.previewElement
                            .querySelectorAll("[data-dz-remove]")
                            [Symbol.iterator]();
                        !(m = (g = b.next()).done);
                        m = !0
                      )
                        g.value.addEventListener("click", f);
                    } catch (i) {
                      (v = !0), (y = i);
                    } finally {
                      try {
                        m || null == b.return || b.return();
                      } finally {
                        if (v) throw y;
                      }
                    }
                  }
                },
                removedfile: function (e) {
                  return (
                    null != e.previewElement &&
                      null != e.previewElement.parentNode &&
                      e.previewElement.parentNode.removeChild(e.previewElement),
                    this._updateMaxFilesReachedClass()
                  );
                },
                thumbnail: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.remove("dz-file-preview");
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll("[data-dz-thumbnail]")
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      ) {
                        var l = o.value;
                        (l.alt = e.name), (l.src = t);
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                    return setTimeout(function () {
                      return e.previewElement.classList.add("dz-image-preview");
                    }, 1);
                  }
                },
                error: function (e, t) {
                  if (e.previewElement) {
                    e.previewElement.classList.add("dz-error"),
                      "String" != typeof t && t.error && (t = t.error);
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll("[data-dz-errormessage]")
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      )
                        o.value.textContent = t;
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                  }
                },
                errormultiple: function () {},
                processing: function (e) {
                  if (
                    e.previewElement &&
                    (e.previewElement.classList.add("dz-processing"),
                    e._removeLink)
                  )
                    return (e._removeLink.innerHTML =
                      this.options.dictCancelUpload);
                },
                processingmultiple: function () {},
                uploadprogress: function (e, t) {
                  if (e.previewElement) {
                    var n = !0,
                      i = !1,
                      r = void 0;
                    try {
                      for (
                        var o,
                          a = e.previewElement
                            .querySelectorAll("[data-dz-uploadprogress]")
                            [Symbol.iterator]();
                        !(n = (o = a.next()).done);
                        n = !0
                      ) {
                        var l = o.value;
                        "PROGRESS" === l.nodeName
                          ? (l.value = t)
                          : (l.style.width = "".concat(t, "%"));
                      }
                    } catch (e) {
                      (i = !0), (r = e);
                    } finally {
                      try {
                        n || null == a.return || a.return();
                      } finally {
                        if (i) throw r;
                      }
                    }
                  }
                },
                totaluploadprogress: function () {},
                sending: function () {},
                sendingmultiple: function () {},
                success: function (e) {
                  if (e.previewElement)
                    return e.previewElement.classList.add("dz-success");
                },
                successmultiple: function () {},
                canceled: function (e) {
                  return this.emit("error", e, this.options.dictUploadCanceled);
                },
                canceledmultiple: function () {},
                complete: function (e) {
                  if (
                    (e._removeLink &&
                      (e._removeLink.innerHTML = this.options.dictRemoveFile),
                    e.previewElement)
                  )
                    return e.previewElement.classList.add("dz-complete");
                },
                completemultiple: function () {},
                maxfilesexceeded: function () {},
                maxfilesreached: function () {},
                queuecomplete: function () {},
                addedfiles: function () {},
              }),
              (this.prototype._thumbnailQueue = []),
              (this.prototype._processingThumbnail = !1);
          },
        },
        {
          key: "extend",
          value: function (e) {
            for (
              var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            for (var r = 0, o = n; r < o.length; r++) {
              var a = o[r];
              for (var l in a) {
                var s = a[l];
                e[l] = s;
              }
            }
            return e;
          },
        },
      ]),
      _createClass(
        e,
        [
          {
            key: "getAcceptedFiles",
            value: function () {
              return this.files
                .filter(function (e) {
                  return e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getRejectedFiles",
            value: function () {
              return this.files
                .filter(function (e) {
                  return !e.accepted;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getFilesWithStatus",
            value: function (e) {
              return this.files
                .filter(function (t) {
                  return t.status === e;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "getQueuedFiles",
            value: function () {
              return this.getFilesWithStatus(e.QUEUED);
            },
          },
          {
            key: "getUploadingFiles",
            value: function () {
              return this.getFilesWithStatus(e.UPLOADING);
            },
          },
          {
            key: "getAddedFiles",
            value: function () {
              return this.getFilesWithStatus(e.ADDED);
            },
          },
          {
            key: "getActiveFiles",
            value: function () {
              return this.files
                .filter(function (t) {
                  return t.status === e.UPLOADING || t.status === e.QUEUED;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "init",
            value: function () {
              var t = this;
              "form" === this.element.tagName &&
                this.element.setAttribute("enctype", "multipart/form-data"),
                this.element.classList.contains("dropzone") &&
                  !this.element.querySelector(".dz-message") &&
                  this.element.appendChild(
                    e.createElement(
                      '<div class="dz-default dz-message"> <img src="img/apply-loan/upload.png" alt="upload" /> <h4 class="dz-button" type="button">Drag and drop an image</h4><p class="dz-custom-upload-text">or to <span>Browse</span> choose a file <br> PNG,JPG,PDF</p></div>'
                    )
                  ),
                this.clickableElements.length &&
                  (function n() {
                    return (
                      t.hiddenFileInput &&
                        t.hiddenFileInput.parentNode.removeChild(
                          t.hiddenFileInput
                        ),
                      (t.hiddenFileInput = document.createElement("input")),
                      t.hiddenFileInput.setAttribute("type", "file"),
                      (null === t.options.maxFiles || 1 < t.options.maxFiles) &&
                        t.hiddenFileInput.setAttribute("multiple", "multiple"),
                      (t.hiddenFileInput.className = "dz-hidden-input"),
                      null !== t.options.acceptedFiles &&
                        t.hiddenFileInput.setAttribute(
                          "accept",
                          t.options.acceptedFiles
                        ),
                      null !== t.options.capture &&
                        t.hiddenFileInput.setAttribute(
                          "capture",
                          t.options.capture
                        ),
                      (t.hiddenFileInput.style.visibility = "hidden"),
                      (t.hiddenFileInput.style.position = "absolute"),
                      (t.hiddenFileInput.style.top = "0"),
                      (t.hiddenFileInput.style.left = "0"),
                      (t.hiddenFileInput.style.height = "0"),
                      (t.hiddenFileInput.style.width = "0"),
                      e
                        .getElement(
                          t.options.hiddenInputContainer,
                          "hiddenInputContainer"
                        )
                        .appendChild(t.hiddenFileInput),
                      t.hiddenFileInput.addEventListener("change", function () {
                        var e = t.hiddenFileInput.files;
                        if (e.length) {
                          var i = !0,
                            r = !1,
                            o = void 0;
                          try {
                            for (
                              var a, l = e[Symbol.iterator]();
                              !(i = (a = l.next()).done);
                              i = !0
                            ) {
                              var s = a.value;
                              t.addFile(s);
                            }
                          } catch (e) {
                            (r = !0), (o = e);
                          } finally {
                            try {
                              i || null == l.return || l.return();
                            } finally {
                              if (r) throw o;
                            }
                          }
                        }
                        return t.emit("addedfiles", e), n();
                      })
                    );
                  })(),
                (this.URL =
                  null !== window.URL ? window.URL : window.webkitURL);
              var n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var o, a = this.events[Symbol.iterator]();
                  !(n = (o = a.next()).done);
                  n = !0
                ) {
                  var l = o.value;
                  this.on(l, this.options[l]);
                }
              } catch (n) {
                (i = !0), (r = n);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw r;
                }
              }
              function s(e) {
                var t;
                return (
                  (t = e).dataTransfer.types &&
                  t.dataTransfer.types.some(function (e) {
                    return "Files" == e;
                  }) &&
                  (e.stopPropagation(),
                  e.preventDefault ? e.preventDefault() : (e.returnValue = !1))
                );
              }
              return (
                this.on("uploadprogress", function () {
                  return t.updateTotalUploadProgress();
                }),
                this.on("removedfile", function () {
                  return t.updateTotalUploadProgress();
                }),
                this.on("canceled", function (e) {
                  return t.emit("complete", e);
                }),
                this.on("complete", function (e) {
                  if (
                    0 === t.getAddedFiles().length &&
                    0 === t.getUploadingFiles().length &&
                    0 === t.getQueuedFiles().length
                  )
                    return setTimeout(function () {
                      return t.emit("queuecomplete");
                    }, 0);
                }),
                (this.listeners = [
                  {
                    element: this.element,
                    events: {
                      dragstart: function (e) {
                        return t.emit("dragstart", e);
                      },
                      dragenter: function (e) {
                        return s(e), t.emit("dragenter", e);
                      },
                      dragover: function (e) {
                        var n;
                        try {
                          n = e.dataTransfer.effectAllowed;
                        } catch (e) {}
                        return (
                          (e.dataTransfer.dropEffect =
                            "move" === n || "linkMove" === n ? "move" : "copy"),
                          s(e),
                          t.emit("dragover", e)
                        );
                      },
                      dragleave: function (e) {
                        return t.emit("dragleave", e);
                      },
                      drop: function (e) {
                        return s(e), t.drop(e);
                      },
                      dragend: function (e) {
                        return t.emit("dragend", e);
                      },
                    },
                  },
                ]),
                this.clickableElements.forEach(function (n) {
                  return t.listeners.push({
                    element: n,
                    events: {
                      click: function (i) {
                        return (
                          (n === t.element &&
                            i.target !== t.element &&
                            !e.elementInside(
                              i.target,
                              t.element.querySelector(".dz-message")
                            )) ||
                            t.hiddenFileInput.click(),
                          !0
                        );
                      },
                    },
                  });
                }),
                this.enable(),
                this.options.init.call(this)
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              return (
                this.disable(),
                this.removeAllFiles(!0),
                null != this.hiddenFileInput &&
                  this.hiddenFileInput.parentNode &&
                  (this.hiddenFileInput.parentNode.removeChild(
                    this.hiddenFileInput
                  ),
                  (this.hiddenFileInput = null)),
                delete this.element.dropzone,
                e.instances.splice(e.instances.indexOf(this), 1)
              );
            },
          },
          {
            key: "updateTotalUploadProgress",
            value: function () {
              var e,
                t = 0,
                n = 0;
              if (this.getActiveFiles().length) {
                var i = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, l = this.getActiveFiles()[Symbol.iterator]();
                    !(i = (a = l.next()).done);
                    i = !0
                  ) {
                    var s = a.value;
                    (t += s.upload.bytesSent), (n += s.upload.total);
                  }
                } catch (e) {
                  (r = !0), (o = e);
                } finally {
                  try {
                    i || null == l.return || l.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                e = (100 * t) / n;
              } else e = 100;
              return this.emit("totaluploadprogress", e, n, t);
            },
          },
          {
            key: "_getParamName",
            value: function (e) {
              return "function" == typeof this.options.paramName
                ? this.options.paramName(e)
                : ""
                    .concat(this.options.paramName)
                    .concat(
                      this.options.uploadMultiple ? "[".concat(e, "]") : ""
                    );
            },
          },
          {
            key: "_renameFile",
            value: function (e) {
              return "function" != typeof this.options.renameFile
                ? e.name
                : this.options.renameFile(e);
            },
          },
          {
            key: "getFallbackForm",
            value: function () {
              var t, n;
              if ((t = this.getExistingFallback())) return t;
              var i = '<div class="dz-fallback">';
              this.options.dictFallbackText &&
                (i += "<p>".concat(this.options.dictFallbackText, "</p>")),
                (i += '<input type="file" name="'
                  .concat(this._getParamName(0), '" ')
                  .concat(
                    this.options.uploadMultiple
                      ? 'multiple="multiple"'
                      : void 0,
                    ' /><input type="submit" value="Upload!"></div>'
                  ));
              var r = e.createElement(i);
              return (
                "FORM" !== this.element.tagName
                  ? (n = e.createElement(
                      '<form action="'
                        .concat(
                          this.options.url,
                          '" enctype="multipart/form-data" method="'
                        )
                        .concat(this.options.method, '"></form>')
                    )).appendChild(r)
                  : (this.element.setAttribute(
                      "enctype",
                      "multipart/form-data"
                    ),
                    this.element.setAttribute("method", this.options.method)),
                null != n ? n : r
              );
            },
          },
          {
            key: "getExistingFallback",
            value: function () {
              for (
                var e = function (e) {
                    var t = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var r, o = e[Symbol.iterator]();
                        !(t = (r = o.next()).done);
                        t = !0
                      ) {
                        var a = r.value;
                        if (/(^| )fallback($| )/.test(a.className)) return a;
                      }
                    } catch (e) {
                      (n = !0), (i = e);
                    } finally {
                      try {
                        t || null == o.return || o.return();
                      } finally {
                        if (n) throw i;
                      }
                    }
                  },
                  t = 0,
                  n = ["div", "form"];
                t < n.length;
                t++
              ) {
                var i,
                  r = n[t];
                if ((i = e(this.element.getElementsByTagName(r)))) return i;
              }
            },
          },
          {
            key: "setupEventListeners",
            value: function () {
              return this.listeners.map(function (e) {
                return (function () {
                  var t = [];
                  for (var n in e.events) {
                    var i = e.events[n];
                    t.push(e.element.addEventListener(n, i, !1));
                  }
                  return t;
                })();
              });
            },
          },
          {
            key: "removeEventListeners",
            value: function () {
              return this.listeners.map(function (e) {
                return (function () {
                  var t = [];
                  for (var n in e.events) {
                    var i = e.events[n];
                    t.push(e.element.removeEventListener(n, i, !1));
                  }
                  return t;
                })();
              });
            },
          },
          {
            key: "disable",
            value: function () {
              var e = this;
              return (
                this.clickableElements.forEach(function (e) {
                  return e.classList.remove("dz-clickable");
                }),
                this.removeEventListeners(),
                (this.disabled = !0),
                this.files.map(function (t) {
                  return e.cancelUpload(t);
                })
              );
            },
          },
          {
            key: "enable",
            value: function () {
              return (
                delete this.disabled,
                this.clickableElements.forEach(function (e) {
                  return e.classList.add("dz-clickable");
                }),
                this.setupEventListeners()
              );
            },
          },
          {
            key: "filesize",
            value: function (e) {
              var t = 0,
                n = "b";
              if (0 < e) {
                for (
                  var i = ["tb", "gb", "mb", "kb", "b"], r = 0;
                  r < i.length;
                  r++
                ) {
                  var o = i[r];
                  if (Math.pow(this.options.filesizeBase, 4 - r) / 10 <= e) {
                    (t = e / Math.pow(this.options.filesizeBase, 4 - r)),
                      (n = o);
                    break;
                  }
                }
                t = Math.round(10 * t) / 10;
              }
              return "<strong>"
                .concat(t, "</strong> ")
                .concat(this.options.dictFileSizeUnits[n]);
            },
          },
          {
            key: "_updateMaxFilesReachedClass",
            value: function () {
              return null != this.options.maxFiles &&
                this.getAcceptedFiles().length >= this.options.maxFiles
                ? (this.getAcceptedFiles().length === this.options.maxFiles &&
                    this.emit("maxfilesreached", this.files),
                  this.element.classList.add("dz-max-files-reached"))
                : this.element.classList.remove("dz-max-files-reached");
            },
          },
          {
            key: "drop",
            value: function (e) {
              if (e.dataTransfer) {
                this.emit("drop", e);
                for (var t = [], n = 0; n < e.dataTransfer.files.length; n++)
                  t[n] = e.dataTransfer.files[n];
                if (t.length) {
                  var i = e.dataTransfer.items;
                  i && i.length && null != i[0].webkitGetAsEntry
                    ? this._addFilesFromItems(i)
                    : this.handleFiles(t);
                }
                this.emit("addedfiles", t);
              }
            },
          },
          {
            key: "paste",
            value: function (e) {
              if (
                null !=
                __guard__(null != e ? e.clipboardData : void 0, function (e) {
                  return e.items;
                })
              ) {
                this.emit("paste", e);
                var t = e.clipboardData.items;
                return t.length ? this._addFilesFromItems(t) : void 0;
              }
            },
          },
          {
            key: "handleFiles",
            value: function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = e[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  this.addFile(a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
            },
          },
          {
            key: "_addFilesFromItems",
            value: function (e) {
              var t = this;
              return (function () {
                var n = [],
                  i = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, l = e[Symbol.iterator]();
                    !(i = (a = l.next()).done);
                    i = !0
                  ) {
                    var s,
                      u = a.value;
                    null != u.webkitGetAsEntry && (s = u.webkitGetAsEntry())
                      ? s.isFile
                        ? n.push(t.addFile(u.getAsFile()))
                        : s.isDirectory
                        ? n.push(t._addFilesFromDirectory(s, s.name))
                        : n.push(void 0)
                      : null == u.getAsFile ||
                        (null != u.kind && "file" !== u.kind)
                      ? n.push(void 0)
                      : n.push(t.addFile(u.getAsFile()));
                  }
                } catch (n) {
                  (r = !0), (o = n);
                } finally {
                  try {
                    i || null == l.return || l.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                return n;
              })();
            },
          },
          {
            key: "_addFilesFromDirectory",
            value: function (e, t) {
              function n(e) {
                return __guardMethod__(console, "log", function (t) {
                  return t.log(e);
                });
              }
              var i = this,
                r = e.createReader();
              return (function e() {
                return r.readEntries(function (n) {
                  if (0 < n.length) {
                    var r = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var l, s = n[Symbol.iterator]();
                        !(r = (l = s.next()).done);
                        r = !0
                      ) {
                        var u = l.value;
                        u.isFile
                          ? u.file(function (e) {
                              if (
                                !i.options.ignoreHiddenFiles ||
                                "." !== e.name.substring(0, 1)
                              )
                                return (
                                  (e.fullPath = ""
                                    .concat(t, "/")
                                    .concat(e.name)),
                                  i.addFile(e)
                                );
                            })
                          : u.isDirectory &&
                            i._addFilesFromDirectory(
                              u,
                              "".concat(t, "/").concat(u.name)
                            );
                      }
                    } catch (n) {
                      (o = !0), (a = n);
                    } finally {
                      try {
                        r || null == s.return || s.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                    e();
                  }
                  return null;
                }, n);
              })();
            },
          },
          {
            key: "accept",
            value: function (t, n) {
              this.options.maxFilesize &&
              t.size > 1024 * this.options.maxFilesize * 1024
                ? n(
                    this.options.dictFileTooBig
                      .replace(
                        "{{filesize}}",
                        Math.round(t.size / 1024 / 10.24) / 100
                      )
                      .replace("{{maxFilesize}}", this.options.maxFilesize)
                  )
                : e.isValidFile(t, this.options.acceptedFiles)
                ? null != this.options.maxFiles &&
                  this.getAcceptedFiles().length >= this.options.maxFiles
                  ? (n(
                      this.options.dictMaxFilesExceeded.replace(
                        "{{maxFiles}}",
                        this.options.maxFiles
                      )
                    ),
                    this.emit("maxfilesexceeded", t))
                  : this.options.accept.call(this, t, n)
                : n(this.options.dictInvalidFileType);
            },
          },
          {
            key: "addFile",
            value: function (t) {
              var n = this;
              (t.upload = {
                uuid: e.uuidv4(),
                progress: 0,
                total: t.size,
                bytesSent: 0,
                filename: this._renameFile(t),
              }),
                this.files.push(t),
                (t.status = e.ADDED),
                this.emit("addedfile", t),
                this._enqueueThumbnail(t),
                this.accept(t, function (e) {
                  e
                    ? ((t.accepted = !1), n._errorProcessing([t], e))
                    : ((t.accepted = !0),
                      n.options.autoQueue && n.enqueueFile(t)),
                    n._updateMaxFilesReachedClass();
                });
            },
          },
          {
            key: "enqueueFiles",
            value: function (e) {
              var t = !0,
                n = !1,
                i = void 0;
              try {
                for (
                  var r, o = e[Symbol.iterator]();
                  !(t = (r = o.next()).done);
                  t = !0
                ) {
                  var a = r.value;
                  this.enqueueFile(a);
                }
              } catch (e) {
                (n = !0), (i = e);
              } finally {
                try {
                  t || null == o.return || o.return();
                } finally {
                  if (n) throw i;
                }
              }
              return null;
            },
          },
          {
            key: "enqueueFile",
            value: function (t) {
              var n = this;
              if (t.status !== e.ADDED || !0 !== t.accepted)
                throw new Error(
                  "This file can't be queued because it has already been processed or was rejected."
                );
              if (((t.status = e.QUEUED), this.options.autoProcessQueue))
                return setTimeout(function () {
                  return n.processQueue();
                }, 0);
            },
          },
          {
            key: "_enqueueThumbnail",
            value: function (e) {
              var t = this;
              if (
                this.options.createImageThumbnails &&
                e.type.match(/image.*/) &&
                e.size <= 1024 * this.options.maxThumbnailFilesize * 1024
              )
                return (
                  this._thumbnailQueue.push(e),
                  setTimeout(function () {
                    return t._processThumbnailQueue();
                  }, 0)
                );
            },
          },
          {
            key: "_processThumbnailQueue",
            value: function () {
              var e = this;
              if (
                !this._processingThumbnail &&
                0 !== this._thumbnailQueue.length
              ) {
                this._processingThumbnail = !0;
                var t = this._thumbnailQueue.shift();
                return this.createThumbnail(
                  t,
                  this.options.thumbnailWidth,
                  this.options.thumbnailHeight,
                  this.options.thumbnailMethod,
                  !0,
                  function (n) {
                    return (
                      e.emit("thumbnail", t, n),
                      (e._processingThumbnail = !1),
                      e._processThumbnailQueue()
                    );
                  }
                );
              }
            },
          },
          {
            key: "removeFile",
            value: function (t) {
              if (
                (t.status === e.UPLOADING && this.cancelUpload(t),
                (this.files = without(this.files, t)),
                this.emit("removedfile", t),
                0 === this.files.length)
              )
                return this.emit("reset");
            },
          },
          {
            key: "removeAllFiles",
            value: function (t) {
              null == t && (t = !1);
              var n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var o, a = this.files.slice()[Symbol.iterator]();
                  !(n = (o = a.next()).done);
                  n = !0
                ) {
                  var l = o.value;
                  (l.status === e.UPLOADING && !t) || this.removeFile(l);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw r;
                }
              }
              return null;
            },
          },
          {
            key: "resizeImage",
            value: function (t, n, i, r, o) {
              var a = this;
              return this.createThumbnail(t, n, i, r, !0, function (n, i) {
                if (null == i) return o(t);
                var r = a.options.resizeMimeType;
                null == r && (r = t.type);
                var l = i.toDataURL(r, a.options.resizeQuality);
                return (
                  ("image/jpeg" !== r && "image/jpg" !== r) ||
                    (l = ExifRestore.restore(t.dataURL, l)),
                  o(e.dataURItoBlob(l))
                );
              });
            },
          },
          {
            key: "createThumbnail",
            value: function (e, t, n, i, r, o) {
              var a = this,
                l = new FileReader();
              (l.onload = function () {
                (e.dataURL = l.result),
                  "image/svg+xml" !== e.type
                    ? a.createThumbnailFromUrl(e, t, n, i, r, o)
                    : null != o && o(l.result);
              }),
                l.readAsDataURL(e);
            },
          },
          {
            key: "displayExistingFile",
            value: function (e, t, n, i, r) {
              var o = this,
                a = !(4 < arguments.length && void 0 !== r) || r;
              this.emit("addedfile", e),
                this.emit("complete", e),
                a
                  ? ((e.dataURL = t),
                    this.createThumbnailFromUrl(
                      e,
                      this.options.thumbnailWidth,
                      this.options.thumbnailHeight,
                      this.options.resizeMethod,
                      this.options.fixOrientation,
                      function (t) {
                        o.emit("thumbnail", e, t), n && n();
                      },
                      i
                    ))
                  : (this.emit("thumbnail", e, t), n && n());
            },
          },
          {
            key: "createThumbnailFromUrl",
            value: function (e, t, n, i, r, o, a) {
              var l = this,
                s = document.createElement("img");
              return (
                a && (s.crossOrigin = a),
                (s.onload = function () {
                  var a = function (e) {
                    return e(1);
                  };
                  return (
                    "undefined" != typeof EXIF &&
                      null !== EXIF &&
                      r &&
                      (a = function (e) {
                        return EXIF.getData(s, function () {
                          return e(EXIF.getTag(this, "Orientation"));
                        });
                      }),
                    a(function (r) {
                      (e.width = s.width), (e.height = s.height);
                      var a = l.options.resize.call(l, e, t, n, i),
                        u = document.createElement("canvas"),
                        c = u.getContext("2d");
                      switch (
                        ((u.width = a.trgWidth),
                        (u.height = a.trgHeight),
                        4 < r &&
                          ((u.width = a.trgHeight), (u.height = a.trgWidth)),
                        r)
                      ) {
                        case 2:
                          c.translate(u.width, 0), c.scale(-1, 1);
                          break;
                        case 3:
                          c.translate(u.width, u.height), c.rotate(Math.PI);
                          break;
                        case 4:
                          c.translate(0, u.height), c.scale(1, -1);
                          break;
                        case 5:
                          c.rotate(0.5 * Math.PI), c.scale(1, -1);
                          break;
                        case 6:
                          c.rotate(0.5 * Math.PI), c.translate(0, -u.width);
                          break;
                        case 7:
                          c.rotate(0.5 * Math.PI),
                            c.translate(u.height, -u.width),
                            c.scale(-1, 1);
                          break;
                        case 8:
                          c.rotate(-0.5 * Math.PI), c.translate(-u.height, 0);
                      }
                      drawImageIOSFix(
                        c,
                        s,
                        null != a.srcX ? a.srcX : 0,
                        null != a.srcY ? a.srcY : 0,
                        a.srcWidth,
                        a.srcHeight,
                        null != a.trgX ? a.trgX : 0,
                        null != a.trgY ? a.trgY : 0,
                        a.trgWidth,
                        a.trgHeight
                      );
                      var d = u.toDataURL("image/png");
                      if (null != o) return o(d, u);
                    })
                  );
                }),
                null != o && (s.onerror = o),
                (s.src = e.dataURL)
              );
            },
          },
          {
            key: "processQueue",
            value: function () {
              var e = this.options.parallelUploads,
                t = this.getUploadingFiles().length,
                n = t;
              if (!(e <= t)) {
                var i = this.getQueuedFiles();
                if (0 < i.length) {
                  if (this.options.uploadMultiple)
                    return this.processFiles(i.slice(0, e - t));
                  for (; n < e; ) {
                    if (!i.length) return;
                    this.processFile(i.shift()), n++;
                  }
                }
              }
            },
          },
          {
            key: "processFile",
            value: function (e) {
              return this.processFiles([e]);
            },
          },
          {
            key: "processFiles",
            value: function (t) {
              var n = !0,
                i = !1,
                r = void 0;
              try {
                for (
                  var o, a = t[Symbol.iterator]();
                  !(n = (o = a.next()).done);
                  n = !0
                ) {
                  var l = o.value;
                  (l.processing = !0),
                    (l.status = e.UPLOADING),
                    this.emit("processing", l);
                }
              } catch (t) {
                (i = !0), (r = t);
              } finally {
                try {
                  n || null == a.return || a.return();
                } finally {
                  if (i) throw r;
                }
              }
              return (
                this.options.uploadMultiple &&
                  this.emit("processingmultiple", t),
                this.uploadFiles(t)
              );
            },
          },
          {
            key: "_getFilesWithXhr",
            value: function (e) {
              return this.files
                .filter(function (t) {
                  return t.xhr === e;
                })
                .map(function (e) {
                  return e;
                });
            },
          },
          {
            key: "cancelUpload",
            value: function (t) {
              if (t.status === e.UPLOADING) {
                var n = this._getFilesWithXhr(t.xhr),
                  i = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var a, l = n[Symbol.iterator]();
                    !(i = (a = l.next()).done);
                    i = !0
                  )
                    a.value.status = e.CANCELED;
                } catch (t) {
                  (r = !0), (o = t);
                } finally {
                  try {
                    i || null == l.return || l.return();
                  } finally {
                    if (r) throw o;
                  }
                }
                void 0 !== t.xhr && t.xhr.abort();
                var s = !0,
                  u = !1,
                  c = void 0;
                try {
                  for (
                    var d, p = n[Symbol.iterator]();
                    !(s = (d = p.next()).done);
                    s = !0
                  ) {
                    var h = d.value;
                    this.emit("canceled", h);
                  }
                } catch (t) {
                  (u = !0), (c = t);
                } finally {
                  try {
                    s || null == p.return || p.return();
                  } finally {
                    if (u) throw c;
                  }
                }
                this.options.uploadMultiple && this.emit("canceledmultiple", n);
              } else
                (t.status !== e.ADDED && t.status !== e.QUEUED) ||
                  ((t.status = e.CANCELED),
                  this.emit("canceled", t),
                  this.options.uploadMultiple &&
                    this.emit("canceledmultiple", [t]));
              if (this.options.autoProcessQueue) return this.processQueue();
            },
          },
          {
            key: "resolveOption",
            value: function (e) {
              if ("function" != typeof e) return e;
              for (
                var t = arguments.length,
                  n = new Array(1 < t ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                n[i - 1] = arguments[i];
              return e.apply(this, n);
            },
          },
          {
            key: "uploadFile",
            value: function (e) {
              return this.uploadFiles([e]);
            },
          },
          {
            key: "uploadFiles",
            value: function (t) {
              var n = this;
              this._transformFiles(t, function (i) {
                if (n.options.chunking) {
                  var r = i[0];
                  (t[0].upload.chunked =
                    n.options.chunking &&
                    (n.options.forceChunking || r.size > n.options.chunkSize)),
                    (t[0].upload.totalChunkCount = Math.ceil(
                      r.size / n.options.chunkSize
                    ));
                }
                if (t[0].upload.chunked) {
                  var o = t[0],
                    a = i[0];
                  o.upload.chunks = [];
                  var l = function () {
                    for (var i = 0; void 0 !== o.upload.chunks[i]; ) i++;
                    if (!(i >= o.upload.totalChunkCount)) {
                      var r = i * n.options.chunkSize,
                        l = Math.min(r + n.options.chunkSize, o.size),
                        s = {
                          name: n._getParamName(0),
                          data: a.webkitSlice
                            ? a.webkitSlice(r, l)
                            : a.slice(r, l),
                          filename: o.upload.filename,
                          chunkIndex: i,
                        };
                      (o.upload.chunks[i] = {
                        file: o,
                        index: i,
                        dataBlock: s,
                        status: e.UPLOADING,
                        progress: 0,
                        retries: 0,
                      }),
                        n._uploadData(t, [s]);
                    }
                  };
                  if (
                    ((o.upload.finishedChunkUpload = function (i) {
                      var r = !0;
                      (i.status = e.SUCCESS),
                        (i.dataBlock = null),
                        (i.xhr = null);
                      for (var a = 0; a < o.upload.totalChunkCount; a++) {
                        if (void 0 === o.upload.chunks[a]) return l();
                        o.upload.chunks[a].status !== e.SUCCESS && (r = !1);
                      }
                      r &&
                        n.options.chunksUploaded(o, function () {
                          n._finished(t, "", null);
                        });
                    }),
                    n.options.parallelChunkUploads)
                  )
                    for (var s = 0; s < o.upload.totalChunkCount; s++) l();
                  else l();
                } else {
                  for (var u = [], c = 0; c < t.length; c++)
                    u[c] = {
                      name: n._getParamName(c),
                      data: i[c],
                      filename: t[c].upload.filename,
                    };
                  n._uploadData(t, u);
                }
              });
            },
          },
          {
            key: "_getChunk",
            value: function (e, t) {
              for (var n = 0; n < e.upload.totalChunkCount; n++)
                if (
                  void 0 !== e.upload.chunks[n] &&
                  e.upload.chunks[n].xhr === t
                )
                  return e.upload.chunks[n];
            },
          },
          {
            key: "_uploadData",
            value: function (t, n) {
              var i = this,
                r = new XMLHttpRequest(),
                o = !0,
                a = !1,
                l = void 0;
              try {
                for (
                  var s, u = t[Symbol.iterator]();
                  !(o = (s = u.next()).done);
                  o = !0
                )
                  s.value.xhr = r;
              } catch (n) {
                (a = !0), (l = n);
              } finally {
                try {
                  o || null == u.return || u.return();
                } finally {
                  if (a) throw l;
                }
              }
              t[0].upload.chunked &&
                (t[0].upload.chunks[n[0].chunkIndex].xhr = r);
              var c = this.resolveOption(this.options.method, t),
                d = this.resolveOption(this.options.url, t);
              r.open(c, d, !0),
                (r.timeout = this.resolveOption(this.options.timeout, t)),
                (r.withCredentials = !!this.options.withCredentials),
                (r.onload = function (e) {
                  i._finishedUploading(t, r, e);
                }),
                (r.ontimeout = function () {
                  i._handleUploadError(
                    t,
                    r,
                    "Request timedout after ".concat(
                      i.options.timeout,
                      " seconds"
                    )
                  );
                }),
                (r.onerror = function () {
                  i._handleUploadError(t, r);
                }),
                ((null != r.upload ? r.upload : r).onprogress = function (e) {
                  return i._updateFilesUploadProgress(t, r, e);
                });
              var p = {
                Accept: "application/json",
                "Cache-Control": "no-cache",
                "X-Requested-With": "XMLHttpRequest",
              };
              for (var h in (this.options.headers &&
                e.extend(p, this.options.headers),
              p)) {
                var f = p[h];
                f && r.setRequestHeader(h, f);
              }
              var m = new FormData();
              if (this.options.params) {
                var v = this.options.params;
                for (var y in ("function" == typeof v &&
                  (v = v.call(
                    this,
                    t,
                    r,
                    t[0].upload.chunked ? this._getChunk(t[0], r) : null
                  )),
                v)) {
                  var g = v[y];
                  m.append(y, g);
                }
              }
              var b = !0,
                k = !1,
                w = void 0;
              try {
                for (
                  var F, z = t[Symbol.iterator]();
                  !(b = (F = z.next()).done);
                  b = !0
                ) {
                  var x = F.value;
                  this.emit("sending", x, r, m);
                }
              } catch (n) {
                (k = !0), (w = n);
              } finally {
                try {
                  b || null == z.return || z.return();
                } finally {
                  if (k) throw w;
                }
              }
              this.options.uploadMultiple &&
                this.emit("sendingmultiple", t, r, m),
                this._addFormElementData(m);
              for (var E = 0; E < n.length; E++) {
                var C = n[E];
                m.append(C.name, C.data, C.filename);
              }
              this.submitRequest(r, m, t);
            },
          },
          {
            key: "_transformFiles",
            value: function (e, t) {
              for (
                var n = this,
                  i = [],
                  r = 0,
                  o = function (o) {
                    n.options.transformFile.call(n, e[o], function (n) {
                      (i[o] = n), ++r === e.length && t(i);
                    });
                  },
                  a = 0;
                a < e.length;
                a++
              )
                o(a);
            },
          },
          {
            key: "_addFormElementData",
            value: function (e) {
              if ("FORM" === this.element.tagName) {
                var t = !0,
                  n = !1,
                  i = void 0;
                try {
                  for (
                    var r,
                      o = this.element
                        .querySelectorAll("input, textarea, select, button")
                        [Symbol.iterator]();
                    !(t = (r = o.next()).done);
                    t = !0
                  ) {
                    var a = r.value,
                      l = a.getAttribute("name"),
                      s = a.getAttribute("type");
                    if (((s = s && s.toLowerCase()), null != l))
                      if (
                        "SELECT" === a.tagName &&
                        a.hasAttribute("multiple")
                      ) {
                        var u = !0,
                          c = !1,
                          d = void 0;
                        try {
                          for (
                            var p, h = a.options[Symbol.iterator]();
                            !(u = (p = h.next()).done);
                            u = !0
                          ) {
                            var f = p.value;
                            f.selected && e.append(l, f.value);
                          }
                        } catch (e) {
                          (c = !0), (d = e);
                        } finally {
                          try {
                            u || null == h.return || h.return();
                          } finally {
                            if (c) throw d;
                          }
                        }
                      } else
                        (!s ||
                          ("checkbox" !== s && "radio" !== s) ||
                          a.checked) &&
                          e.append(l, a.value);
                  }
                } catch (e) {
                  (n = !0), (i = e);
                } finally {
                  try {
                    t || null == o.return || o.return();
                  } finally {
                    if (n) throw i;
                  }
                }
              }
            },
          },
          {
            key: "_updateFilesUploadProgress",
            value: function (e, t, n) {
              var i;
              if (void 0 !== n) {
                if (((i = (100 * n.loaded) / n.total), e[0].upload.chunked)) {
                  var r = e[0],
                    o = this._getChunk(r, t);
                  (o.progress = i),
                    (o.total = n.total),
                    (o.bytesSent = n.loaded),
                    (r.upload.progress = 0),
                    (r.upload.total = 0);
                  for (
                    var a = (r.upload.bytesSent = 0);
                    a < r.upload.totalChunkCount;
                    a++
                  )
                    void 0 !== r.upload.chunks[a] &&
                      void 0 !== r.upload.chunks[a].progress &&
                      ((r.upload.progress += r.upload.chunks[a].progress),
                      (r.upload.total += r.upload.chunks[a].total),
                      (r.upload.bytesSent += r.upload.chunks[a].bytesSent));
                  r.upload.progress =
                    r.upload.progress / r.upload.totalChunkCount;
                } else {
                  var l = !0,
                    s = !1,
                    u = void 0;
                  try {
                    for (
                      var c, d = e[Symbol.iterator]();
                      !(l = (c = d.next()).done);
                      l = !0
                    ) {
                      var p = c.value;
                      (p.upload.progress = i),
                        (p.upload.total = n.total),
                        (p.upload.bytesSent = n.loaded);
                    }
                  } catch (e) {
                    (s = !0), (u = e);
                  } finally {
                    try {
                      l || null == d.return || d.return();
                    } finally {
                      if (s) throw u;
                    }
                  }
                }
                var h = !0,
                  f = !1,
                  m = void 0;
                try {
                  for (
                    var v, y = e[Symbol.iterator]();
                    !(h = (v = y.next()).done);
                    h = !0
                  ) {
                    var g = v.value;
                    this.emit(
                      "uploadprogress",
                      g,
                      g.upload.progress,
                      g.upload.bytesSent
                    );
                  }
                } catch (e) {
                  (f = !0), (m = e);
                } finally {
                  try {
                    h || null == y.return || y.return();
                  } finally {
                    if (f) throw m;
                  }
                }
              } else {
                var b = !0,
                  k = !0,
                  w = !(i = 100),
                  F = void 0;
                try {
                  for (
                    var z, x = e[Symbol.iterator]();
                    !(k = (z = x.next()).done);
                    k = !0
                  ) {
                    var E = z.value;
                    (100 === E.upload.progress &&
                      E.upload.bytesSent === E.upload.total) ||
                      (b = !1),
                      (E.upload.progress = i),
                      (E.upload.bytesSent = E.upload.total);
                  }
                } catch (e) {
                  (w = !0), (F = e);
                } finally {
                  try {
                    k || null == x.return || x.return();
                  } finally {
                    if (w) throw F;
                  }
                }
                if (b) return;
                var C = !0,
                  _ = !1,
                  S = void 0;
                try {
                  for (
                    var D, T = e[Symbol.iterator]();
                    !(C = (D = T.next()).done);
                    C = !0
                  ) {
                    var L = D.value;
                    this.emit("uploadprogress", L, i, L.upload.bytesSent);
                  }
                } catch (e) {
                  (_ = !0), (S = e);
                } finally {
                  try {
                    C || null == T.return || T.return();
                  } finally {
                    if (_) throw S;
                  }
                }
              }
            },
          },
          {
            key: "_finishedUploading",
            value: function (t, n, i) {
              var r;
              if (t[0].status !== e.CANCELED && 4 === n.readyState) {
                if (
                  "arraybuffer" !== n.responseType &&
                  "blob" !== n.responseType &&
                  ((r = n.responseText),
                  n.getResponseHeader("content-type") &&
                    ~n
                      .getResponseHeader("content-type")
                      .indexOf("application/json"))
                )
                  try {
                    r = JSON.parse(r);
                  } catch (t) {
                    (i = t), (r = "Invalid JSON response from server.");
                  }
                this._updateFilesUploadProgress(t),
                  200 <= n.status && n.status < 300
                    ? t[0].upload.chunked
                      ? t[0].upload.finishedChunkUpload(this._getChunk(t[0], n))
                      : this._finished(t, r, i)
                    : this._handleUploadError(t, n, r);
              }
            },
          },
          {
            key: "_handleUploadError",
            value: function (t, n, i) {
              if (t[0].status !== e.CANCELED) {
                if (t[0].upload.chunked && this.options.retryChunks) {
                  var r = this._getChunk(t[0], n);
                  if (r.retries++ < this.options.retryChunksLimit)
                    return void this._uploadData(t, [r.dataBlock]);
                  console.warn("Retried this chunk too often. Giving up.");
                }
                this._errorProcessing(
                  t,
                  i ||
                    this.options.dictResponseError.replace(
                      "{{statusCode}}",
                      n.status
                    ),
                  n
                );
              }
            },
          },
          {
            key: "submitRequest",
            value: function (e, t) {
              e.send(t);
            },
          },
          {
            key: "_finished",
            value: function (t, n, i) {
              var r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var l, s = t[Symbol.iterator]();
                  !(r = (l = s.next()).done);
                  r = !0
                ) {
                  var u = l.value;
                  (u.status = e.SUCCESS),
                    this.emit("success", u, n, i),
                    this.emit("complete", u);
                }
              } catch (t) {
                (o = !0), (a = t);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw a;
                }
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit("successmultiple", t, n, i),
                  this.emit("completemultiple", t)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
          {
            key: "_errorProcessing",
            value: function (t, n, i) {
              var r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var l, s = t[Symbol.iterator]();
                  !(r = (l = s.next()).done);
                  r = !0
                ) {
                  var u = l.value;
                  (u.status = e.ERROR),
                    this.emit("error", u, n, i),
                    this.emit("complete", u);
                }
              } catch (t) {
                (o = !0), (a = t);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (o) throw a;
                }
              }
              if (
                (this.options.uploadMultiple &&
                  (this.emit("errormultiple", t, n, i),
                  this.emit("completemultiple", t)),
                this.options.autoProcessQueue)
              )
                return this.processQueue();
            },
          },
        ],
        [
          {
            key: "uuidv4",
            value: function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" === e ? t : (3 & t) | 8).toString(16);
                }
              );
            },
          },
        ]
      ),
      e
    );
  })();
Dropzone.initClass(),
  (Dropzone.version = "5.7.0"),
  (Dropzone.options = {}),
  (Dropzone.optionsForElement = function (e) {
    return e.getAttribute("id")
      ? Dropzone.options[camelize(e.getAttribute("id"))]
      : void 0;
  }),
  (Dropzone.instances = []),
  (Dropzone.forElement = function (e) {
    if (
      ("string" == typeof e && (e = document.querySelector(e)),
      null == (null != e ? e.dropzone : void 0))
    )
      throw new Error(
        "No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."
      );
    return e.dropzone;
  }),
  (Dropzone.autoDiscover = !0),
  (Dropzone.discover = function () {
    var e;
    if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
    else {
      e = [];
      var t = function (t) {
        return (function () {
          var n = [],
            i = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var a, l = t[Symbol.iterator]();
              !(i = (a = l.next()).done);
              i = !0
            ) {
              var s = a.value;
              /(^| )dropzone($| )/.test(s.className)
                ? n.push(e.push(s))
                : n.push(void 0);
            }
          } catch (n) {
            (r = !0), (o = n);
          } finally {
            try {
              i || null == l.return || l.return();
            } finally {
              if (r) throw o;
            }
          }
          return n;
        })();
      };
      t(document.getElementsByTagName("div")),
        t(document.getElementsByTagName("form"));
    }
    return (function () {
      var t = [],
        n = !0,
        i = !1,
        r = void 0;
      try {
        for (
          var o, a = e[Symbol.iterator]();
          !(n = (o = a.next()).done);
          n = !0
        ) {
          var l = o.value;
          !1 !== Dropzone.optionsForElement(l)
            ? t.push(new Dropzone(l))
            : t.push(void 0);
        }
      } catch (t) {
        (i = !0), (r = t);
      } finally {
        try {
          n || null == a.return || a.return();
        } finally {
          if (i) throw r;
        }
      }
      return t;
    })();
  }),
  (Dropzone.blacklistedBrowsers = [
    /opera.*(Macintosh|Windows Phone).*version\/12/i,
  ]),
  (Dropzone.isBrowserSupported = function () {
    var e = !0;
    if (
      window.File &&
      window.FileReader &&
      window.FileList &&
      window.Blob &&
      window.FormData &&
      document.querySelector
    )
      if ("classList" in document.createElement("a")) {
        var t = !0,
          n = !1,
          i = void 0;
        try {
          for (
            var r, o = Dropzone.blacklistedBrowsers[Symbol.iterator]();
            !(t = (r = o.next()).done);
            t = !0
          )
            r.value.test(navigator.userAgent) && (e = !1);
        } catch (e) {
          (n = !0), (i = e);
        } finally {
          try {
            t || null == o.return || o.return();
          } finally {
            if (n) throw i;
          }
        }
      } else e = !1;
    else e = !1;
    return e;
  }),
  (Dropzone.dataURItoBlob = function (e) {
    for (
      var t = atob(e.split(",")[1]),
        n = e.split(",")[0].split(":")[1].split(";")[0],
        i = new ArrayBuffer(t.length),
        r = new Uint8Array(i),
        o = 0,
        a = t.length,
        l = 0 <= a;
      l ? o <= a : a <= o;
      l ? o++ : o--
    )
      r[o] = t.charCodeAt(o);
    return new Blob([i], { type: n });
  });
var without = function (e, t) {
    return e
      .filter(function (e) {
        return e !== t;
      })
      .map(function (e) {
        return e;
      });
  },
  camelize = function (e) {
    return e.replace(/[\-_](\w)/g, function (e) {
      return e.charAt(1).toUpperCase();
    });
  };
(Dropzone.createElement = function (e) {
  var t = document.createElement("div");
  return (t.innerHTML = e), t.childNodes[0];
}),
  (Dropzone.elementInside = function (e, t) {
    if (e === t) return !0;
    for (; (e = e.parentNode); ) if (e === t) return !0;
    return !1;
  }),
  (Dropzone.getElement = function (e, t) {
    var n;
    if (
      ("string" == typeof e
        ? (n = document.querySelector(e))
        : null != e.nodeType && (n = e),
      null == n)
    )
      throw new Error(
        "Invalid `".concat(
          t,
          "` option provided. Please provide a CSS selector or a plain HTML element."
        )
      );
    return n;
  }),
  (Dropzone.getElements = function (e, t) {
    var n, i;
    if (e instanceof Array) {
      i = [];
      try {
        var r = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var l, s = e[Symbol.iterator]();
            !(r = (l = s.next()).done);
            r = !0
          )
            (n = l.value), i.push(this.getElement(n, t));
        } catch (e) {
          (o = !0), (a = e);
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (o) throw a;
          }
        }
      } catch (e) {
        i = null;
      }
    } else if ("string" == typeof e) {
      var u = !0,
        c = !(i = []),
        d = void 0;
      try {
        for (
          var p, h = document.querySelectorAll(e)[Symbol.iterator]();
          !(u = (p = h.next()).done);
          u = !0
        )
          (n = p.value), i.push(n);
      } catch (e) {
        (c = !0), (d = e);
      } finally {
        try {
          u || null == h.return || h.return();
        } finally {
          if (c) throw d;
        }
      }
    } else null != e.nodeType && (i = [e]);
    if (null == i || !i.length)
      throw new Error(
        "Invalid `".concat(
          t,
          "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."
        )
      );
    return i;
  }),
  (Dropzone.confirm = function (e, t, n) {
    return window.confirm(e) ? t() : null != n ? n() : void 0;
  }),
  (Dropzone.isValidFile = function (e, t) {
    if (!t) return !0;
    t = t.split(",");
    var n = e.type,
      i = n.replace(/\/.*$/, ""),
      r = !0,
      o = !1,
      a = void 0;
    try {
      for (
        var l, s = t[Symbol.iterator]();
        !(r = (l = s.next()).done);
        r = !0
      ) {
        var u = l.value;
        if ("." === (u = u.trim()).charAt(0)) {
          if (
            -1 !==
            e.name
              .toLowerCase()
              .indexOf(u.toLowerCase(), e.name.length - u.length)
          )
            return !0;
        } else if (/\/\*$/.test(u)) {
          if (i === u.replace(/\/.*$/, "")) return !0;
        } else if (n === u) return !0;
      }
    } catch (e) {
      (o = !0), (a = e);
    } finally {
      try {
        r || null == s.return || s.return();
      } finally {
        if (o) throw a;
      }
    }
    return !1;
  }),
  "undefined" != typeof jQuery &&
    null !== jQuery &&
    (jQuery.fn.dropzone = function (e) {
      return this.each(function () {
        return new Dropzone(this, e);
      });
    }),
  "undefined" != typeof module && null !== module
    ? (module.exports = Dropzone)
    : (window.Dropzone = Dropzone),
  (Dropzone.ADDED = "added"),
  (Dropzone.QUEUED = "queued"),
  (Dropzone.ACCEPTED = Dropzone.QUEUED),
  (Dropzone.UPLOADING = "uploading"),
  (Dropzone.PROCESSING = Dropzone.UPLOADING),
  (Dropzone.CANCELED = "canceled"),
  (Dropzone.ERROR = "error"),
  (Dropzone.SUCCESS = "success");
var detectVerticalSquash = function (e) {
    e.naturalWidth;
    var t = e.naturalHeight,
      n = document.createElement("canvas");
    (n.width = 1), (n.height = t);
    var i = n.getContext("2d");
    i.drawImage(e, 0, 0);
    for (var r = i.getImageData(1, 0, 1, t).data, o = 0, a = t, l = t; o < l; )
      0 === r[4 * (l - 1) + 3] ? (a = l) : (o = l), (l = (a + o) >> 1);
    var s = l / t;
    return 0 == s ? 1 : s;
  },
  drawImageIOSFix = function (e, t, n, i, r, o, a, l, s, u) {
    var c = detectVerticalSquash(t);
    return e.drawImage(t, n, i, r, o, a, l, s, u / c);
  },
  ExifRestore = (function () {
    function e() {
      _classCallCheck(this, e);
    }
    return (
      _createClass(e, null, [
        {
          key: "initClass",
          value: function () {
            this.KEY_STR =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          },
        },
        {
          key: "encode64",
          value: function (e) {
            for (
              var t = "",
                n = void 0,
                i = void 0,
                r = "",
                o = void 0,
                a = void 0,
                l = void 0,
                s = "",
                u = 0;
              (o = (n = e[u++]) >> 2),
                (a = ((3 & n) << 4) | ((i = e[u++]) >> 4)),
                (l = ((15 & i) << 2) | ((r = e[u++]) >> 6)),
                (s = 63 & r),
                isNaN(i) ? (l = s = 64) : isNaN(r) && (s = 64),
                (t =
                  t +
                  this.KEY_STR.charAt(o) +
                  this.KEY_STR.charAt(a) +
                  this.KEY_STR.charAt(l) +
                  this.KEY_STR.charAt(s)),
                (n = i = r = ""),
                (o = a = l = s = ""),
                u < e.length;

            );
            return t;
          },
        },
        {
          key: "restore",
          value: function (e, t) {
            if (!e.match("data:image/jpeg;base64,")) return t;
            var n = this.decode64(e.replace("data:image/jpeg;base64,", "")),
              i = this.slice2Segments(n),
              r = this.exifManipulation(t, i);
            return "data:image/jpeg;base64,".concat(this.encode64(r));
          },
        },
        {
          key: "exifManipulation",
          value: function (e, t) {
            var n = this.getExifArray(t),
              i = this.insertExif(e, n);
            return new Uint8Array(i);
          },
        },
        {
          key: "getExifArray",
          value: function (e) {
            for (var t = void 0, n = 0; n < e.length; ) {
              if ((255 === (t = e[n])[0]) & (225 === t[1])) return t;
              n++;
            }
            return [];
          },
        },
        {
          key: "insertExif",
          value: function (e, t) {
            var n = e.replace("data:image/jpeg;base64,", ""),
              i = this.decode64(n),
              r = i.indexOf(255, 3),
              o = i.slice(0, r),
              a = i.slice(r),
              l = o;
            return (l = l.concat(t)).concat(a);
          },
        },
        {
          key: "slice2Segments",
          value: function (e) {
            for (var t = 0, n = []; !((255 === e[t]) & (218 === e[t + 1])); ) {
              if ((255 === e[t]) & (216 === e[t + 1])) t += 2;
              else {
                var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
                  r = e.slice(t, i);
                n.push(r), (t = i);
              }
              if (t > e.length) break;
            }
            return n;
          },
        },
        {
          key: "decode64",
          value: function (e) {
            var t = void 0,
              n = void 0,
              i = "",
              r = void 0,
              o = void 0,
              a = "",
              l = 0,
              s = [];
            for (
              /[^A-Za-z0-9\+\/\=]/g.exec(e) &&
                console.warn(
                  "There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."
                ),
                e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              (t =
                (this.KEY_STR.indexOf(e.charAt(l++)) << 2) |
                ((r = this.KEY_STR.indexOf(e.charAt(l++))) >> 4)),
                (n =
                  ((15 & r) << 4) |
                  ((o = this.KEY_STR.indexOf(e.charAt(l++))) >> 2)),
                (i =
                  ((3 & o) << 6) | (a = this.KEY_STR.indexOf(e.charAt(l++)))),
                s.push(t),
                64 !== o && s.push(n),
                64 !== a && s.push(i),
                (t = n = i = ""),
                (r = o = a = ""),
                l < e.length;

            );
            return s;
          },
        },
      ]),
      e
    );
  })();
ExifRestore.initClass();
var contentLoaded = function (e, t) {
  function n(r) {
    if ("readystatechange" !== r.type || "complete" === o.readyState)
      return (
        ("load" === r.type ? e : o)[s](u + r.type, n, !1),
        !i && (i = !0) ? t.call(e, r.type || r) : void 0
      );
  }
  var i = !1,
    r = !0,
    o = e.document,
    a = o.documentElement,
    l = o.addEventListener ? "addEventListener" : "attachEvent",
    s = o.addEventListener ? "removeEventListener" : "detachEvent",
    u = o.addEventListener ? "" : "on";
  if ("complete" !== o.readyState) {
    if (o.createEventObject && a.doScroll) {
      try {
        r = !e.frameElement;
      } catch (r) {}
      r &&
        (function e() {
          try {
            a.doScroll("left");
          } catch (t) {
            return void setTimeout(e, 50);
          }
          return n("poll");
        })();
    }
    return (
      o[l](u + "DOMContentLoaded", n, !1),
      o[l](u + "readystatechange", n, !1),
      e[l](u + "load", n, !1)
    );
  }
};
function __guard__(e, t) {
  return null != e ? t(e) : void 0;
}
function __guardMethod__(e, t, n) {
  return null != e && "function" == typeof e[t] ? n(e, t) : void 0;
}
(Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) return Dropzone.discover();
}),
  contentLoaded(window, Dropzone._autoDiscoverFunction);
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);
/*! http://mths.be/smoothscroll v1.5.2 by @mathias */ (function (a, c) {
  var b = (function () {
    var d = c(a.documentElement),
      f = c(a.body),
      e;
    if (d.scrollTop()) {
      return d;
    } else {
      e = f.scrollTop();
      if (f.scrollTop(e + 1).scrollTop() == e) {
        return d;
      } else {
        return f.scrollTop(e);
      }
    }
  })();
  c.fn.smoothScroll = function (d) {
    d = ~~d || 400;
    return this.find('a[href*="#"]')
      .click(function (f) {
        var g = this.hash,
          e = c(g);
        if (
          location.pathname.replace(/^\//, "") ===
            this.pathname.replace(/^\//, "") &&
          location.hostname === this.hostname
        ) {
          if (e.length) {
            f.preventDefault();
            b.stop().animate({ scrollTop: e.offset().top }, d, function () {
              location.hash = g;
            });
          }
        }
      })
      .end();
  };
})(document, jQuery);
(function ($) {
  "use strict";
  $("#preloader").addClass("loading");
  $(window).on("load", function () {
    setTimeout(function () {
      $("#preloader").fadeOut(500, function () {
        $("#preloader").removeClass("loading");
      });
    }, 500);
  });
})(jQuery);
(function ($) {
  "use strict";
  $(document).ready(function () {
    var $window = $(window);
    var didScroll,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $("#sticky"),
      $mainNavHeight = $mainNav.outerHeight(),
      scrollTop;
    $window.on("scroll", function () {
      didScroll = !0;
      scrollTop = $(this).scrollTop();
    });
    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = !1;
      }
    }, 200);
    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.css("top", -$mainNavHeight);
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.css("top", 0);
        }
      }
      lastScrollTop = scrollTop;
    }
    function navbarFixed() {
      if ($("#sticky").length) {
        $(window).scroll(function () {
          var scroll = $(window).scrollTop();
          if (scroll) {
            $("#sticky").addClass("navbar_fixed");
          } else {
            $("#sticky").removeClass("navbar_fixed");
          }
        });
      }
    }
    navbarFixed();
    $(".navbar-nav > li .mobile_dropdown_icon").on("click", function (e) {
      $(this).parent().find("ul").first().toggle(300);
      $(this).parent().siblings().find("ul").hide(300);
    });
    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").click(function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return !1;
      });
    }
    $("header").smoothScroll();
    var $blog_banner_animation = $("blog_banner_animation");
    if ($blog_banner_animation.length > 0) {
      $blog_banner_animation.parallax({ scalarX: 10.0, scalarY: 0.0 });
    }
    var back_top_btn = $("#back-to-top");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        back_top_btn.addClass("show");
      } else {
        back_top_btn.removeClass("show");
      }
    });
    back_top_btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "300");
    });
    let $blog_details_area = $(".blog_details_area");
    let $post_social_icon = $(".post_social_icon");
    if ($blog_details_area.length > 0) {
      var social_icon_offset = $blog_details_area.offset().top;
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= social_icon_offset) {
          $post_social_icon.addClass("active");
        } else {
          $post_social_icon.removeClass("active");
        }
        if (
          $post_social_icon.offset().top + $post_social_icon.height() >
          $(".footer").offset().top
        ) {
          $post_social_icon.removeClass("active");
        }
      });
    }
    let $sort_select = $("#sort-select");
    if ($sort_select.length > 0) {
      $sort_select.niceSelect();
    }
    let $input_phone_number = $("#inputPhoneNumber");
    if ($input_phone_number.length > 0) {
      $input_phone_number.intlTelInput({
        separateDialCode: !1,
        utilsScript: "js/utils.js",
      });
    }
    let $dropzone = $("#dropzone");
    if ($dropzone.length > 0) {
      $dropzone.dropzone({ paramName: "file", url: "upload-target" });
    }
  });
})(jQuery);
var load_more_btn = {
  ajax_url:
    "https://wordpress-theme.spider-themes.net/banca/wp-admin/admin-ajax.php",
};
(function ($) {
  "use strict";
  $(document).on("click", ".load_more a:not(.loading)", function () {
    let that = $(this);
    let page = that.data("page");
    let newPage = page + 1;
    that.addClass("loading");
    console.log(newPage);
    $.ajax({
      url: load_more_btn.ajax_url,
      type: "POST",
      data: { page: page, action: "job_load_more_btn" },
      error: function (response) {
        console.log(response);
      },
      success: function (response) {
        that.data("page", newPage);
        $(".more_post_ajax").append(response);
        that.removeClass("loading");
      },
    });
  });
})(jQuery); /*! This file is auto-generated */
window.addComment = (function (v) {
  var I,
    C,
    h,
    E = v.document,
    b = {
      commentReplyClass: "comment-reply-link",
      commentReplyTitleId: "reply-title",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID",
    },
    e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
    r = "querySelector" in E && "addEventListener" in v,
    n = !!E.documentElement.dataset;
  function t() {
    d(), e && new e(o).observe(E.body, { childList: !0, subtree: !0 });
  }
  function d(e) {
    if (r && ((I = g(b.cancelReplyId)), (C = g(b.commentFormId)), I)) {
      I.addEventListener("touchstart", l), I.addEventListener("click", l);
      function t(e) {
        if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode)
          return (
            C.removeEventListener("keydown", t),
            e.preventDefault(),
            C.submit.click(),
            !1
          );
      }
      C && C.addEventListener("keydown", t);
      for (
        var n,
          d = (function (e) {
            var t = b.commentReplyClass;
            (e && e.childNodes) || (e = E);
            e = E.getElementsByClassName
              ? e.getElementsByClassName(t)
              : e.querySelectorAll("." + t);
            return e;
          })(e),
          o = 0,
          i = d.length;
        o < i;
        o++
      )
        (n = d[o]).addEventListener("touchstart", a),
          n.addEventListener("click", a);
    }
  }
  function l(e) {
    var t,
      n,
      d = g(b.temporaryFormId);
    d &&
      h &&
      ((g(b.parentIdFieldId).value = "0"),
      (t = d.textContent),
      d.parentNode.replaceChild(h, d),
      (this.style.display = "none"),
      (n =
        (d = (d = g(b.commentReplyTitleId)) && d.firstChild) && d.nextSibling),
      d &&
        d.nodeType === Node.TEXT_NODE &&
        t &&
        (n &&
          "A" === n.nodeName &&
          n.id !== b.cancelReplyId &&
          (n.style.display = ""),
        (d.textContent = t)),
      e.preventDefault());
  }
  function a(e) {
    var t = g(b.commentReplyTitleId),
      t = t && t.firstChild.textContent,
      n = this,
      d = m(n, "belowelement"),
      o = m(n, "commentid"),
      i = m(n, "respondelement"),
      r = m(n, "postid"),
      n = m(n, "replyto") || t;
    d &&
      o &&
      i &&
      r &&
      !1 === v.addComment.moveForm(d, o, i, r, n) &&
      e.preventDefault();
  }
  function o(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void d();
  }
  function m(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function g(e) {
    return E.getElementById(e);
  }
  return (
    r && "loading" !== E.readyState
      ? t()
      : r && v.addEventListener("DOMContentLoaded", t, !1),
    {
      init: d,
      moveForm: function (e, t, n, d, o) {
        var i,
          r,
          l,
          a,
          m,
          c,
          s,
          e = g(e),
          n = ((h = g(n)), g(b.parentIdFieldId)),
          y = g(b.postIdFieldId),
          p = g(b.commentReplyTitleId),
          u = (p = p && p.firstChild) && p.nextSibling;
        if (e && h && n) {
          void 0 === o && (o = p && p.textContent),
            (a = h),
            (m = b.temporaryFormId),
            (c = g(m)),
            (s = (s = g(b.commentReplyTitleId))
              ? s.firstChild.textContent
              : ""),
            c ||
              (((c = E.createElement("div")).id = m),
              (c.style.display = "none"),
              (c.textContent = s),
              a.parentNode.insertBefore(c, a)),
            d && y && (y.value = d),
            (n.value = t),
            (I.style.display = ""),
            e.parentNode.insertBefore(h, e.nextSibling),
            p &&
              p.nodeType === Node.TEXT_NODE &&
              (u &&
                "A" === u.nodeName &&
                u.id !== b.cancelReplyId &&
                (u.style.display = "none"),
              (p.textContent = o)),
            (I.onclick = function () {
              return !1;
            });
          try {
            for (var f = 0; f < C.elements.length; f++)
              if (
                ((i = C.elements[f]),
                (r = !1),
                "getComputedStyle" in v
                  ? (l = v.getComputedStyle(i))
                  : E.documentElement.currentStyle && (l = i.currentStyle),
                ((i.offsetWidth <= 0 && i.offsetHeight <= 0) ||
                  "hidden" === l.visibility) &&
                  (r = !0),
                "hidden" !== i.type && !i.disabled && !r)
              ) {
                i.focus();
                break;
              }
          } catch (e) {}
          return !1;
        }
      },
    }
  );
})(window);
(function ($) {
  "use strict";
  $(document).ready(function () {
    function createCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
    function eraseCookie(name) {
      createCookie(name, "", -1);
    }
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    var selectedNightTheme = readCookie("body_dark");
    if (
      selectedNightTheme == "true" ||
      (selectedNightTheme === null && prefersDark)
    ) {
      applyNight();
      $("#something").prop("checked", !0);
    } else {
      applyDay();
      $("#something").prop("checked", !1);
    }
    function applyNight() {
      if ($("#ball").length) {
        const ball = document.getElementById("ball");
        ball.style.left = "26px";
        ball.style.transition = ".3s linear";
        document.body.style.transition = ".3s linear";
      }
      $("body").addClass("body_dark");
    }
    function applyDay() {
      if ($("#ball").length) {
        const ball = document.getElementById("ball");
        ball.style.left = "3px";
        ball.style.transition = ".3s linear";
        document.body.style.transition = ".3s linear";
      }
      $("body").removeClass("body_dark");
    }
    $("#something").change(function () {
      if ($(this).is(":checked")) {
        applyNight();
        createCookie("body_dark", !0, 999);
      } else {
        applyDay();
        createCookie("body_dark", !1, 999);
      }
    });
  });
})(jQuery);
!(function (t) {
  "use strict";
  t.fn.counterUp = function (e) {
    var n = t.extend({ time: 400, delay: 10 }, e);
    return this.each(function () {
      var e = t(this),
        u = n;
      e.waypoint(
        function () {
          var t = [],
            n = u.time / u.delay,
            a = e.text(),
            r = /[0-9]+,[0-9]+/.test(a);
          a = a.replace(/,/g, "");
          /^[0-9]+$/.test(a);
          for (
            var o = /^[0-9]+\.[0-9]+$/.test(a),
              c = o ? (a.split(".")[1] || []).length : 0,
              s = n;
            s >= 1;
            s--
          ) {
            var i = parseInt((a / n) * s);
            if ((o && (i = parseFloat((a / n) * s).toFixed(c)), r))
              for (; /(\d+)(\d{3})/.test(i.toString()); )
                i = i.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            t.unshift(i);
          }
          e.data("counterup-nums", t), e.text("0");
          e.data("counterup-func", function () {
            e.data("counterup-nums") &&
              (e.text(e.data("counterup-nums").shift()),
              e.data("counterup-nums").length
                ? setTimeout(e.data("counterup-func"), u.delay)
                : (e.data("counterup-nums"),
                  e.data("counterup-nums", null),
                  e.data("counterup-func", null)));
          }),
            setTimeout(e.data("counterup-func"), u.delay);
        },
        { offset: "100%", triggerOnce: !0 }
      );
    });
  };
})(jQuery);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/ !(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
}); /*! pro-elements - v3.12.3 - 23-04-2023 */
(() => {
  "use strict";
  var e,
    r,
    n,
    a = {},
    _ = {};
  function __webpack_require__(e) {
    var r = _[e];
    if (void 0 !== r) return r.exports;
    var n = (_[e] = { exports: {} });
    return a[e](n, n.exports, __webpack_require__), n.exports;
  }
  (__webpack_require__.m = a),
    (e = []),
    (__webpack_require__.O = (r, n, a, _) => {
      if (!n) {
        var i = 1 / 0;
        for (o = 0; o < e.length; o++) {
          for (var [n, a, _] = e[o], c = !0, b = 0; b < n.length; b++)
            (!1 & _ || i >= _) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](n[b])
            )
              ? n.splice(b--, 1)
              : ((c = !1), _ < i && (i = _));
          if (c) {
            e.splice(o--, 1);
            var t = a();
            void 0 !== t && (r = t);
          }
        }
        return r;
      }
      _ = _ || 0;
      for (var o = e.length; o > 0 && e[o - 1][2] > _; o--) e[o] = e[o - 1];
      e[o] = [n, a, _];
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (r, n) => (__webpack_require__.f[n](e, r), r),
          []
        )
      )),
    (__webpack_require__.u = (e) =>
      714 === e
        ? "code-highlight.28a979661569ddbbf60d.bundle.min.js"
        : 721 === e
        ? "video-playlist.298cdf58d6ff89be4257.bundle.min.js"
        : 256 === e
        ? "paypal-button.3d0d5af7df85963df32c.bundle.min.js"
        : 156 === e
        ? "stripe-button.d283ce83621092402874.bundle.min.js"
        : 241 === e
        ? "progress-tracker.e19e2547639d7d9dac17.bundle.min.js"
        : 26 === e
        ? "animated-headline.ffb4bb4ce1b16b11446d.bundle.min.js"
        : 534 === e
        ? "media-carousel.aca2224ef13e6f999011.bundle.min.js"
        : 369 === e
        ? "carousel.9b02b45d7826c1c48f33.bundle.min.js"
        : 804 === e
        ? "countdown.b0ef6392ec4ff09ca2f2.bundle.min.js"
        : 888 === e
        ? "hotspot.6ab1751404c381bfe390.bundle.min.js"
        : 680 === e
        ? "form.72b77b99d67b130634d2.bundle.min.js"
        : 121 === e
        ? "gallery.8ca9a354ce039d1ba641.bundle.min.js"
        : 288 === e
        ? "lottie.147bf20db94f86cc4295.bundle.min.js"
        : 42 === e
        ? "nav-menu.bb5cce0a50480cdf695d.bundle.min.js"
        : 50 === e
        ? "popup.483b906ddaa1af17ff14.bundle.min.js"
        : 985 === e
        ? "load-more.c9f6aac03af905f4e206.bundle.min.js"
        : 287 === e
        ? "posts.e33113a212454e383747.bundle.min.js"
        : 824 === e
        ? "portfolio.042905bde20a1afccada.bundle.min.js"
        : 58 === e
        ? "share-buttons.0bdd88c45462dfb2b073.bundle.min.js"
        : 114 === e
        ? "slides.fb6b9afd278bb9c5e75b.bundle.min.js"
        : 443 === e
        ? "social.2d2e44e8608690943f29.bundle.min.js"
        : 838 === e
        ? "table-of-contents.a695231ee79a390b7620.bundle.min.js"
        : 685 === e
        ? "archive-posts.1de00dabb89a39359d7a.bundle.min.js"
        : 858 === e
        ? "search-form.0ef02f9fd5e7db2ea91b.bundle.min.js"
        : 102 === e
        ? "woocommerce-menu-cart.faa7b80e9ba9e5072070.bundle.min.js"
        : 1 === e
        ? "woocommerce-purchase-summary.46445ab1120a8c28c05c.bundle.min.js"
        : 124 === e
        ? "woocommerce-checkout-page.b18af78282979b6f74e4.bundle.min.js"
        : 859 === e
        ? "woocommerce-cart.fc30c6cb753d4098eff5.bundle.min.js"
        : 979 === e
        ? "woocommerce-my-account.3ee10d01e625dad87f73.bundle.min.js"
        : 497 === e
        ? "woocommerce-notices.da27b22c491f7cbe9158.bundle.min.js"
        : 800 === e
        ? "product-add-to-cart.023d7d31fbf96c3dbdfc.bundle.min.js"
        : 149 === e
        ? "loop.ee42cd13e555f07796a1.bundle.min.js"
        : 153 === e
        ? "loop-carousel.ca3af34f494108c4dcd8.bundle.min.js"
        : 495 === e
        ? "mega-menu.2235f3049d229a3d8ad3.bundle.min.js"
        : 157 === e
        ? "mega-menu-stretch-content.dd7b10c896a88f739622.bundle.min.js"
        : void 0),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (r = {}),
    (n = "elementor-pro:"),
    (__webpack_require__.l = (e, a, _, i) => {
      if (r[e]) r[e].push(a);
      else {
        var c, b;
        if (void 0 !== _)
          for (
            var t = document.getElementsByTagName("script"), o = 0;
            o < t.length;
            o++
          ) {
            var u = t[o];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == n + _
            ) {
              c = u;
              break;
            }
          }
        c ||
          ((b = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          __webpack_require__.nc &&
            c.setAttribute("nonce", __webpack_require__.nc),
          c.setAttribute("data-webpack", n + _),
          (c.src = e)),
          (r[e] = [a]);
        var onScriptComplete = (n, a) => {
            (c.onerror = c.onload = null), clearTimeout(d);
            var _ = r[e];
            if (
              (delete r[e],
              c.parentNode && c.parentNode.removeChild(c),
              _ && _.forEach((e) => e(a)),
              n)
            )
              return n(a);
          },
          d = setTimeout(
            onScriptComplete.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = onScriptComplete.bind(null, c.onerror)),
          (c.onload = onScriptComplete.bind(null, c.onload)),
          b && document.head.appendChild(c);
      }
    }),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var n = r.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e);
    })(),
    (() => {
      var e = { 396: 0 };
      (__webpack_require__.f.j = (r, n) => {
        var a = __webpack_require__.o(e, r) ? e[r] : void 0;
        if (0 !== a)
          if (a) n.push(a[2]);
          else if (396 != r) {
            var _ = new Promise((n, _) => (a = e[r] = [n, _]));
            n.push((a[2] = _));
            var i = __webpack_require__.p + __webpack_require__.u(r),
              c = new Error();
            __webpack_require__.l(
              i,
              (n) => {
                if (
                  __webpack_require__.o(e, r) &&
                  (0 !== (a = e[r]) && (e[r] = void 0), a)
                ) {
                  var _ = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (c.message =
                    "Loading chunk " + r + " failed.\n(" + _ + ": " + i + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = _),
                    (c.request = i),
                    a[1](c);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (__webpack_require__.O.j = (r) => 0 === e[r]);
      var webpackJsonpCallback = (r, n) => {
          var a,
            _,
            [i, c, b] = n,
            t = 0;
          if (i.some((r) => 0 !== e[r])) {
            for (a in c)
              __webpack_require__.o(c, a) && (__webpack_require__.m[a] = c[a]);
            if (b) var o = b(__webpack_require__);
          }
          for (r && r(n); t < i.length; t++)
            (_ = i[t]),
              __webpack_require__.o(e, _) && e[_] && e[_][0](),
              (e[_] = 0);
          return __webpack_require__.O(o);
        },
        r = (self.webpackChunkelementor_pro =
          self.webpackChunkelementor_pro || []);
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)));
    })();
})(); /*! elementor - v3.15.0 - 02-08-2023 */
(() => {
  "use strict";
  var e,
    r,
    _,
    t,
    i,
    a = {},
    n = {};
  function __webpack_require__(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var _ = (n[e] = { exports: {} });
    return a[e](_, _.exports, __webpack_require__), _.exports;
  }
  (__webpack_require__.m = a),
    (e = []),
    (__webpack_require__.O = (r, _, t, i) => {
      if (!_) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [_, t, i] = e[u], n = !0, c = 0; c < _.length; c++)
            (!1 & i || a >= i) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](_[c])
            )
              ? _.splice(c--, 1)
              : ((n = !1), i < a && (a = i));
          if (n) {
            e.splice(u--, 1);
            var o = t();
            void 0 !== o && (r = o);
          }
        }
        return r;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [_, t, i];
    }),
    (_ = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e;
      if ("object" == typeof e && e) {
        if (4 & t && e.__esModule) return e;
        if (16 & t && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      __webpack_require__.r(i);
      var a = {};
      r = r || [null, _({}), _([]), _(_)];
      for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
        Object.getOwnPropertyNames(n).forEach((r) => (a[r] = () => e[r]));
      return (a.default = () => e), __webpack_require__.d(i, a), i;
    }),
    (__webpack_require__.d = (e, r) => {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, { enumerable: !0, get: r[_] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (r, _) => (__webpack_require__.f[_](e, r), r),
          []
        )
      )),
    (__webpack_require__.u = (e) =>
      723 === e
        ? "lightbox.1b6e05e0607040eb8929.bundle.min.js"
        : 48 === e
        ? "text-path.b50b3e74488a4e302613.bundle.min.js"
        : 209 === e
        ? "accordion.8799675460c73eb48972.bundle.min.js"
        : 745 === e
        ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js"
        : 120 === e
        ? "counter.02cef29c589e742d4c8c.bundle.min.js"
        : 192 === e
        ? "progress.ca55d33bb06cee4e6f02.bundle.min.js"
        : 520 === e
        ? "tabs.c2af5be7f9cb3cdcf3d5.bundle.min.js"
        : 181 === e
        ? "toggle.31881477c45ff5cf9d4d.bundle.min.js"
        : 791 === e
        ? "video.fea4f8dfdf17262f23e8.bundle.min.js"
        : 268 === e
        ? "image-carousel.4455c6362492d9067512.bundle.min.js"
        : 357 === e
        ? "text-editor.2c35aafbe5bf0e127950.bundle.min.js"
        : 52 === e
        ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js"
        : 413 === e
        ? "container.3e03f0b480c65f79dee6.bundle.min.js"
        : void 0),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (i = "elementor:"),
    (__webpack_require__.l = (e, r, _, a) => {
      if (t[e]) t[e].push(r);
      else {
        var n, c;
        if (void 0 !== _)
          for (
            var o = document.getElementsByTagName("script"), u = 0;
            u < o.length;
            u++
          ) {
            var b = o[u];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == i + _
            ) {
              n = b;
              break;
            }
          }
        n ||
          ((c = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          (n.timeout = 120),
          __webpack_require__.nc &&
            n.setAttribute("nonce", __webpack_require__.nc),
          n.setAttribute("data-webpack", i + _),
          (n.src = e)),
          (t[e] = [r]);
        var onScriptComplete = (r, _) => {
            (n.onerror = n.onload = null), clearTimeout(p);
            var i = t[e];
            if (
              (delete t[e],
              n.parentNode && n.parentNode.removeChild(n),
              i && i.forEach((e) => e(_)),
              r)
            )
              return r(_);
          },
          p = setTimeout(
            onScriptComplete.bind(null, void 0, { type: "timeout", target: n }),
            12e4
          );
        (n.onerror = onScriptComplete.bind(null, n.onerror)),
          (n.onload = onScriptComplete.bind(null, n.onload)),
          c && document.head.appendChild(n);
      }
    }),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var _ = r.getElementsByTagName("script");
        _.length && (e = _[_.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e);
    })(),
    (() => {
      var e = { 162: 0 };
      (__webpack_require__.f.j = (r, _) => {
        var t = __webpack_require__.o(e, r) ? e[r] : void 0;
        if (0 !== t)
          if (t) _.push(t[2]);
          else if (162 != r) {
            var i = new Promise((_, i) => (t = e[r] = [_, i]));
            _.push((t[2] = i));
            var a = __webpack_require__.p + __webpack_require__.u(r),
              n = new Error();
            __webpack_require__.l(
              a,
              (_) => {
                if (
                  __webpack_require__.o(e, r) &&
                  (0 !== (t = e[r]) && (e[r] = void 0), t)
                ) {
                  var i = _ && ("load" === _.type ? "missing" : _.type),
                    a = _ && _.target && _.target.src;
                  (n.message =
                    "Loading chunk " + r + " failed.\n(" + i + ": " + a + ")"),
                    (n.name = "ChunkLoadError"),
                    (n.type = i),
                    (n.request = a),
                    t[1](n);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (__webpack_require__.O.j = (r) => 0 === e[r]);
      var webpackJsonpCallback = (r, _) => {
          var t,
            i,
            [a, n, c] = _,
            o = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (t in n)
              __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
            if (c) var u = c(__webpack_require__);
          }
          for (r && r(_); o < a.length; o++)
            (i = a[o]),
              __webpack_require__.o(e, i) && e[i] && e[i][0](),
              (e[i] = 0);
          return __webpack_require__.O(u);
        },
        r = (self.webpackChunkelementor = self.webpackChunkelementor || []);
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)));
    })();
})(); /*! elementor - v3.15.0 - 02-08-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [354],
  {
    381: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = (e, t) => {
        t = Array.isArray(t) ? t : [t];
        for (const n of t)
          if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0;
        return !1;
      };
    },
    8135: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              elements: ".elementor-element",
              nestedDocumentElements: ".elementor .elementor-element",
            },
            classes: { editMode: "elementor-edit-mode" },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $elements: this.$element
              .find(e.elements)
              .not(this.$element.find(e.nestedDocumentElements)),
          };
        }
        getDocumentSettings(e) {
          let t;
          if (this.isEdit) {
            t = {};
            const e = elementor.settings.page.model;
            jQuery.each(e.getActiveControls(), (n) => {
              t[n] = e.attributes[n];
            });
          } else t = this.$element.data("elementor-settings") || {};
          return this.getItems(t, e);
        }
        runElementsHandlers() {
          this.elements.$elements.each((e, t) =>
            setTimeout(() =>
              elementorFrontend.elementsHandler.runReadyTrigger(t)
            )
          );
        }
        onInit() {
          (this.$element = this.getSettings("$element")),
            super.onInit(),
            (this.isEdit = this.$element.hasClass(
              this.getSettings("classes.editMode")
            )),
            this.isEdit
              ? elementor.on("document:loaded", () => {
                  elementor.settings.page.model.on(
                    "change",
                    this.onSettingsChange.bind(this)
                  );
                })
              : this.runElementsHandlers();
        }
        onSettingsChange() {}
      }
      t.default = _default;
    },
    1292: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(2821));
      class CarouselHandlerBase extends i.default {
        getDefaultSettings() {
          return {
            selectors: {
              carousel: `.${elementorFrontend.config.swiperClass}`,
              swiperWrapper: ".swiper-wrapper",
              slideContent: ".swiper-slide",
              swiperArrow: ".elementor-swiper-button",
              paginationWrapper: ".swiper-pagination",
              paginationBullet: ".swiper-pagination-bullet",
              paginationBulletWrapper: ".swiper-pagination-bullets",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = {
              $swiperContainer: this.$element.find(e.carousel),
              $swiperWrapper: this.$element.find(e.swiperWrapper),
              $swiperArrows: this.$element.find(e.swiperArrow),
              $paginationWrapper: this.$element.find(e.paginationWrapper),
              $paginationBullets: this.$element.find(e.paginationBullet),
              $paginationBulletWrapper: this.$element.find(
                e.paginationBulletWrapper
              ),
            };
          return (t.$slides = t.$swiperContainer.find(e.slideContent)), t;
        }
        getSwiperSettings() {
          const e = this.getElementSettings(),
            t = +e.slides_to_show || 3,
            n = 1 === t,
            r = elementorFrontend.config.responsive.activeBreakpoints,
            i = { mobile: 1, tablet: n ? 1 : 2 },
            s = {
              slidesPerView: t,
              loop: "yes" === e.infinite,
              speed: e.speed,
              handleElementorBreakpoints: !0,
              breakpoints: {},
            };
          let o = t;
          Object.keys(r)
            .reverse()
            .forEach((t) => {
              const n = i[t] ? i[t] : o;
              (s.breakpoints[r[t].value] = {
                slidesPerView: +e["slides_to_show_" + t] || n,
                slidesPerGroup: +e["slides_to_scroll_" + t] || 1,
              }),
                e.image_spacing_custom &&
                  (s.breakpoints[r[t].value].spaceBetween =
                    this.getSpaceBetween(t)),
                (o = +e["slides_to_show_" + t] || n);
            }),
            "yes" === e.autoplay &&
              (s.autoplay = {
                delay: e.autoplay_speed,
                disableOnInteraction: "yes" === e.pause_on_interaction,
              }),
            n
              ? ((s.effect = e.effect),
                "fade" === e.effect && (s.fadeEffect = { crossFade: !0 }))
              : (s.slidesPerGroup = +e.slides_to_scroll || 1),
            e.image_spacing_custom && (s.spaceBetween = this.getSpaceBetween());
          const a = "arrows" === e.navigation || "both" === e.navigation,
            l =
              "dots" === e.navigation ||
              "both" === e.navigation ||
              e.pagination;
          return (
            a &&
              (s.navigation = {
                prevEl: ".elementor-swiper-button-prev",
                nextEl: ".elementor-swiper-button-next",
              }),
            l &&
              (s.pagination = {
                el: `.elementor-element-${this.getID()} .swiper-pagination`,
                type: e.pagination ? e.pagination : "bullets",
                clickable: !0,
                renderBullet: (e, t) =>
                  `<span class="${t}" data-bullet-index="${e}" aria-label="${
                    elementorFrontend.config.i18n
                      .a11yCarouselPaginationBulletMessage
                  } ${e + 1}"></span>`,
              }),
            "yes" === e.lazyload &&
              (s.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            (s.a11y = {
              enabled: !0,
              prevSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselPrevSlideMessage,
              nextSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselNextSlideMessage,
              firstSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselFirstSlideMessage,
              lastSlideMessage:
                elementorFrontend.config.i18n.a11yCarouselLastSlideMessage,
            }),
            (s.on = {
              slideChangeTransitionEnd: () => {
                this.a11ySetSlideAriaHidden();
              },
              slideChange: () => {
                this.a11ySetPaginationTabindex(), this.handleElementHandlers();
              },
            }),
            this.applyOffsetSettings(e, s, t),
            s
          );
        }
        getOffsetWidth() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return (
            elementorFrontend.utils.controls.getResponsiveControlValue(
              this.getElementSettings(),
              "offset_width",
              "size",
              e
            ) || 0
          );
        }
        applyOffsetSettings(e, t, n) {
          const r = e.offset_sides;
          if (
            (elementorFrontend.isEditMode() &&
              "NestedCarousel" === this.constructor.name) ||
            !r ||
            "none" === r
          )
            return;
          this.getOffsetWidth();
          switch (r) {
            case "right":
              this.forceSliderToShowNextSlideWhenOnLast(t, n),
                this.addClassToSwiperContainer("offset-right");
              break;
            case "left":
              this.addClassToSwiperContainer("offset-left");
              break;
            case "both":
              this.forceSliderToShowNextSlideWhenOnLast(t, n),
                this.addClassToSwiperContainer("offset-both");
          }
        }
        forceSliderToShowNextSlideWhenOnLast(e, t) {
          e.slidesPerView = t + 0.001;
        }
        addClassToSwiperContainer(e) {
          this.getDefaultElements().$swiperContainer[0].classList.add(e);
        }
        async onInit() {
          if (
            (super.onInit(...arguments),
            !this.elements.$swiperContainer.length ||
              2 > this.elements.$slides.length)
          )
            return;
          const e = elementorFrontend.utils.swiper;
          (this.swiper = await new e(
            this.elements.$swiperContainer,
            this.getSwiperSettings()
          )),
            this.elements.$swiperContainer.data("swiper", this.swiper);
          "yes" === this.getElementSettings().pause_on_hover &&
            this.togglePauseOnHover(!0),
            this.a11ySetWidgetAriaDetails(),
            this.a11ySetPaginationTabindex(),
            this.a11ySetSlideAriaHidden("initialisation");
        }
        bindEvents() {
          this.elements.$swiperArrows.on(
            "keydown",
            this.onDirectionArrowKeydown.bind(this)
          ),
            this.elements.$paginationWrapper.on(
              "keydown",
              ".swiper-pagination-bullet",
              this.onDirectionArrowKeydown.bind(this)
            ),
            this.elements.$swiperContainer.on(
              "keydown",
              ".swiper-slide",
              this.onDirectionArrowKeydown.bind(this)
            ),
            this.$element
              .find(":focusable")
              .on("focus", this.onFocusDisableAutoplay.bind(this)),
            elementorFrontend.elements.$window.on(
              "resize",
              this.getSwiperSettings.bind(this)
            );
        }
        unbindEvents() {
          this.elements.$swiperArrows.off(),
            this.elements.$paginationWrapper.off(),
            this.elements.$swiperContainer.off(),
            this.$element.find(":focusable").off(),
            elementorFrontend.elements.$window.off("resize");
        }
        onDirectionArrowKeydown(e) {
          const t = elementorFrontend.config.isRTL,
            n = e.originalEvent.code,
            r = t ? "ArrowLeft" : "ArrowRight";
          if (!(-1 !== ["ArrowLeft", "ArrowRight"].indexOf(n))) return !0;
          (t ? "ArrowRight" : "ArrowLeft") === n
            ? this.swiper.slidePrev()
            : r === n && this.swiper.slideNext();
        }
        onFocusDisableAutoplay() {
          this.swiper.autoplay.stop();
        }
        updateSwiperOption(e) {
          const t = this.getElementSettings()[e],
            n = this.swiper.params;
          switch (e) {
            case "autoplay_speed":
              n.autoplay.delay = t;
              break;
            case "speed":
              n.speed = t;
          }
          this.swiper.update();
        }
        getChangeableProperties() {
          return {
            pause_on_hover: "pauseOnHover",
            autoplay_speed: "delay",
            speed: "speed",
            arrows_position: "arrows_position",
          };
        }
        onElementChange(e) {
          if (0 === e.indexOf("image_spacing_custom"))
            return void this.updateSpaceBetween(e);
          if (this.getChangeableProperties()[e])
            if ("pause_on_hover" === e) {
              const e = this.getElementSettings("pause_on_hover");
              this.togglePauseOnHover("yes" === e);
            } else this.updateSwiperOption(e);
        }
        onEditSettingsChange(e) {
          "activeItemIndex" === e &&
            this.swiper.slideToLoop(
              this.getEditSettings("activeItemIndex") - 1
            );
        }
        getSpaceBetween() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return (
            elementorFrontend.utils.controls.getResponsiveControlValue(
              this.getElementSettings(),
              "image_spacing_custom",
              "size",
              e
            ) || 0
          );
        }
        updateSpaceBetween(e) {
          const t = e.match("image_spacing_custom_(.*)"),
            n = t ? t[1] : "desktop",
            r = this.getSpaceBetween(n);
          "desktop" !== n &&
            (this.swiper.params.breakpoints[
              elementorFrontend.config.responsive.activeBreakpoints[n].value
            ].spaceBetween = r),
            (this.swiper.params.spaceBetween = r),
            this.swiper.update();
        }
        getPaginationBullets() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "array";
          const t = this.$element.find(
            this.getSettings("selectors").paginationBullet
          );
          return "array" === e ? Array.from(t) : t;
        }
        a11ySetWidgetAriaDetails() {
          const e = this.$element;
          e.attr("aria-roledescription", "carousel"),
            e.attr(
              "aria-label",
              elementorFrontend.config.i18n.a11yCarouselWrapperAriaLabel
            );
        }
        a11ySetPaginationTabindex() {
          const e = this.swiper?.params.pagination.bulletClass,
            t = this.swiper?.params.pagination.bulletActiveClass;
          this.getPaginationBullets().forEach((e) => {
            e.classList.contains(t) || e.removeAttribute("tabindex");
          });
          const n = "ArrowLeft" === event?.code || "ArrowRight" === event?.code;
          event?.target?.classList.contains(e) &&
            n &&
            this.$element.find(`.${t}`).trigger("focus");
        }
        getSwiperWrapperTranformXValue() {
          let e = this.elements.$swiperWrapper[0]?.style.transform;
          return (
            (e = e.replace("translate3d(", "")),
            (e = e.split(",")),
            (e = parseInt(e[0].replace("px", ""))),
            e || 0
          );
        }
        a11ySetSlideAriaHidden() {
          if (
            "number" !=
            typeof ("initialisation" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "")
              ? 0
              : this.swiper?.activeIndex)
          )
            return;
          const e = this.getSwiperWrapperTranformXValue(),
            t = this.elements.$swiperWrapper[0].clientWidth;
          this.elements.$swiperContainer
            .find(this.getSettings("selectors").slideContent)
            .each((n, r) => {
              0 <= r.offsetLeft + e && t > r.offsetLeft + e
                ? (r.removeAttribute("aria-hidden"), r.removeAttribute("inert"))
                : (r.setAttribute("aria-hidden", !0),
                  r.setAttribute("inert", ""));
            });
        }
        handleElementHandlers() {}
      }
      t.default = CarouselHandlerBase;
    },
    2821: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(3090));
      class SwiperHandlerBase extends i.default {
        getInitialSlide() {
          const e = this.getEditSettings();
          return e.activeItemIndex ? e.activeItemIndex - 1 : 0;
        }
        getSlidesCount() {
          return this.elements.$slides.length;
        }
        togglePauseOnHover(e) {
          e
            ? this.elements.$swiperContainer.on({
                mouseenter: () => {
                  this.swiper.autoplay.stop();
                },
                mouseleave: () => {
                  this.swiper.autoplay.start();
                },
              })
            : this.elements.$swiperContainer.off("mouseenter mouseleave");
        }
        handleKenBurns() {
          const e = this.getSettings();
          this.$activeImageBg &&
            this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
            (this.activeItemIndex = this.swiper
              ? this.swiper.activeIndex
              : this.getInitialSlide()),
            this.swiper
              ? (this.$activeImageBg = jQuery(
                  this.swiper.slides[this.activeItemIndex]
                ).children("." + e.classes.slideBackground))
              : (this.$activeImageBg = jQuery(
                  this.elements.$slides[0]
                ).children("." + e.classes.slideBackground)),
            this.$activeImageBg.addClass(e.classes.kenBurnsActive);
        }
      }
      t.default = SwiperHandlerBase;
    },
    3090: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct(e) {
          this.isActive(e) &&
            ((this.$element = e.$element),
            (this.isEdit = this.$element.hasClass(
              "elementor-element-edit-mode"
            )),
            this.isEdit && this.addEditorListeners());
        },
        isActive: () => !0,
        isElementInTheCurrentDocument() {
          return (
            !!elementorFrontend.isEditMode() &&
            elementor.documents.currentDocument.id.toString() ===
              this.$element[0].closest(".elementor").dataset.elementorId
          );
        },
        findElement(e) {
          var t = this.$element;
          return t.find(e).filter(function () {
            return jQuery(this).parent().closest(".elementor-element").is(t);
          });
        },
        getUniqueHandlerID(e, t) {
          return (
            e || (e = this.getModelCID()),
            t || (t = this.$element),
            e + t.attr("data-element_type") + this.getConstructorID()
          );
        },
        initEditorListeners() {
          var e = this;
          if (
            ((e.editorListeners = [
              {
                event: "element:destroy",
                to: elementor.channels.data,
                callback(t) {
                  t.cid === e.getModelCID() && e.onDestroy();
                },
              },
            ]),
            e.onElementChange)
          ) {
            const t = e.getWidgetType() || e.getElementType();
            let n = "change";
            "global" !== t && (n += ":" + t),
              e.editorListeners.push({
                event: n,
                to: elementor.channels.editor,
                callback(t, n) {
                  e.getUniqueHandlerID(n.model.cid, n.$el) ===
                    e.getUniqueHandlerID() &&
                    e.onElementChange(t.model.get("name"), t, n);
                },
              });
          }
          e.onEditSettingsChange &&
            e.editorListeners.push({
              event: "change:editSettings",
              to: elementor.channels.editor,
              callback(t, n) {
                if (n.model.cid !== e.getModelCID()) return;
                const r = Object.keys(t.changed)[0];
                e.onEditSettingsChange(r, t.changed[r]);
              },
            }),
            ["page"].forEach(function (t) {
              var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
              e[n] &&
                e.editorListeners.push({
                  event: "change",
                  to: elementor.settings[t].model,
                  callback(t) {
                    e[n](t.changed);
                  },
                });
            });
        },
        getEditorListeners() {
          return (
            this.editorListeners || this.initEditorListeners(),
            this.editorListeners
          );
        },
        addEditorListeners() {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to);
          });
        },
        removeEditorListeners() {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.removeListeners(e, t.event, null, t.to);
          });
        },
        getElementType() {
          return this.$element.data("element_type");
        },
        getWidgetType() {
          const e = this.$element.data("widget_type");
          if (e) return e.split(".")[0];
        },
        getID() {
          return this.$element.data("id");
        },
        getModelCID() {
          return this.$element.data("model-cid");
        },
        getElementSettings(e) {
          let t = {};
          const n = this.getModelCID();
          if (this.isEdit && n) {
            const e = elementorFrontend.config.elements.data[n],
              r = e.attributes;
            let i = r.widgetType || r.elType;
            r.isInner && (i = "inner-" + i);
            let s = elementorFrontend.config.elements.keys[i];
            s ||
              ((s = elementorFrontend.config.elements.keys[i] = []),
              jQuery.each(e.controls, (e, t) => {
                t.frontend_available && s.push(e);
              })),
              jQuery.each(e.getActiveControls(), function (e) {
                if (-1 !== s.indexOf(e)) {
                  let n = r[e];
                  n.toJSON && (n = n.toJSON()), (t[e] = n);
                }
              });
          } else t = this.$element.data("settings") || {};
          return this.getItems(t, e);
        },
        getEditSettings(e) {
          var t = {};
          return (
            this.isEdit &&
              (t =
                elementorFrontend.config.elements.editSettings[
                  this.getModelCID()
                ].attributes),
            this.getItems(t, e)
          );
        },
        getCurrentDeviceSetting(e) {
          return elementorFrontend.getCurrentDeviceSetting(
            this.getElementSettings(),
            e
          );
        },
        onInit() {
          this.isActive(this.getSettings()) &&
            elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
        onDestroy() {
          this.isEdit && this.removeEditorListeners(),
            this.unbindEvents && this.unbindEvents();
        },
      });
    },
    2263: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(3090));
      class StretchedElement extends i.default {
        getStretchedClass() {
          return "e-stretched";
        }
        getStretchSettingName() {
          return "stretch_element";
        }
        getStretchActiveValue() {
          return "yes";
        }
        bindEvents() {
          const e = this.getUniqueHandlerID();
          elementorFrontend.addListenerOnce(e, "resize", this.stretch),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:stick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:unstick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.isEditMode() &&
              ((this.onKitChangeStretchContainerChange =
                this.onKitChangeStretchContainerChange.bind(this)),
              elementor.channels.editor.on(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              ));
        }
        unbindEvents() {
          elementorFrontend.removeListeners(
            this.getUniqueHandlerID(),
            "resize",
            this.stretch
          ),
            elementorFrontend.isEditMode() &&
              elementor.channels.editor.off(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              );
        }
        isActive(e) {
          return (
            elementorFrontend.isEditMode() ||
            e.$element.hasClass(this.getStretchedClass())
          );
        }
        getStretchElementForConfig() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null;
          return e ? this.$element.find(e) : this.$element;
        }
        getStretchElementConfig() {
          return {
            element: this.getStretchElementForConfig(),
            selectors: { container: this.getStretchContainer() },
            considerScrollbar:
              elementorFrontend.isEditMode() && elementorFrontend.config.is_rtl,
          };
        }
        initStretch() {
          (this.stretch = this.stretch.bind(this)),
            (this.stretchElement =
              new elementorModules.frontend.tools.StretchElement(
                this.getStretchElementConfig()
              ));
        }
        getStretchContainer() {
          return (
            elementorFrontend.getKitSettings("stretched_section_container") ||
            window
          );
        }
        isStretchSettingEnabled() {
          return (
            this.getElementSettings(this.getStretchSettingName()) ===
            this.getStretchActiveValue()
          );
        }
        stretch() {
          this.isStretchSettingEnabled() && this.stretchElement.stretch();
        }
        onInit() {
          this.isActive(this.getSettings()) &&
            (this.initStretch(), super.onInit(...arguments), this.stretch());
        }
        onElementChange(e) {
          this.getStretchSettingName() === e &&
            (this.isStretchSettingEnabled()
              ? this.stretch()
              : this.stretchElement.reset());
        }
        onKitChangeStretchContainerChange() {
          this.stretchElement.setSettings(
            "selectors.container",
            this.getStretchContainer()
          ),
            this.stretch();
        }
      }
      t.default = StretchedElement;
    },
    6412: (e, t, n) => {
      "use strict";
      var r = n(3203),
        i = r(n(5955)),
        s = r(n(8135)),
        o = r(n(5658)),
        a = r(n(2263)),
        l = r(n(3090)),
        c = r(n(2821)),
        u = r(n(1292)),
        d = r(n(7323)),
        h = r(n(32));
      i.default.frontend = {
        Document: s.default,
        tools: { StretchElement: o.default },
        handlers: {
          Base: l.default,
          StretchedElement: a.default,
          SwiperBase: c.default,
          CarouselBase: u.default,
          NestedTabs: d.default,
          NestedAccordion: h.default,
        },
      };
    },
    5658: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: () => ({
          element: null,
          direction: elementorFrontend.config.is_rtl ? "right" : "left",
          selectors: { container: window },
          considerScrollbar: !1,
        }),
        getDefaultElements() {
          return { $element: jQuery(this.getSettings("element")) };
        },
        stretch() {
          const e = this.getSettings();
          let t;
          try {
            t = jQuery(e.selectors.container);
          } catch (e) {}
          (t && t.length) ||
            (t = jQuery(this.getDefaultSettings().selectors.container)),
            this.reset();
          var n = this.elements.$element,
            r = t.innerWidth(),
            i = n.offset().left,
            s = "fixed" === n.css("position"),
            o = s ? 0 : i,
            a = window === t[0];
          if (!a) {
            var l = t.offset().left;
            s && (o = l), i > l && (o = i - l);
          }
          if (e.considerScrollbar && a) {
            o -= window.innerWidth - r;
          }
          s ||
            (elementorFrontend.config.is_rtl && (o = r - (n.outerWidth() + o)),
            (o = -o)),
            e.margin && (o += e.margin);
          var c = {};
          let u = r;
          e.margin && (u -= 2 * e.margin),
            (c.width = u + "px"),
            (c[e.direction] = o + "px"),
            n.css(c);
        },
        reset() {
          var e = { width: "" };
          (e[this.getSettings("direction")] = ""),
            this.elements.$element.css(e);
        },
      });
    },
    6630: (e, t) => {
      "use strict";
      function getChildrenWidth(e) {
        let t = 0;
        const n = e[0].parentNode,
          r = getComputedStyle(n),
          i = parseFloat(r.gap) || 0;
        for (let n = 0; n < e.length; n++) t += e[n].offsetWidth + i;
        return t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.changeScrollStatus = function changeScrollStatus(e, t) {
          "mousedown" === t.type
            ? (e.classList.add("e-scroll"), (e.dataset.pageX = t.pageX))
            : (e.classList.remove("e-scroll", "e-scroll-active"),
              (e.dataset.pageX = ""));
        }),
        (t.setHorizontalScrollAlignment = function setHorizontalScrollAlignment(
          e
        ) {
          let {
            element: t,
            direction: n,
            justifyCSSVariable: r,
            horizontalScrollStatus: i,
          } = e;
          if (!t) return;
          !(function isHorizontalScroll(e, t) {
            return (
              e.clientWidth < getChildrenWidth(e.children) && "enable" === t
            );
          })(t, i)
            ? t.style.setProperty(r, "")
            : (function initialScrollPosition(e, t, n) {
                const r = elementorCommon.config.isRTL;
                if ("end" === t)
                  e.style.setProperty(n, "start"),
                    (e.scrollLeft = r
                      ? -1 * getChildrenWidth(e.children)
                      : getChildrenWidth(e.children));
                else e.style.setProperty(n, "start"), (e.scrollLeft = 0);
              })(t, n, r);
        }),
        (t.setHorizontalTitleScrollValues =
          function setHorizontalTitleScrollValues(e, t, n) {
            const r = e.classList.contains("e-scroll"),
              i = "enable" === t,
              s = e.scrollWidth > e.clientWidth;
            if (!r || !i || !s) return;
            n.preventDefault();
            const o = parseFloat(e.dataset.pageX),
              a = n.pageX - o;
            let l = 0;
            l = 20 < a ? 5 : -20 > a ? -5 : a;
            (e.scrollLeft = e.scrollLeft - l),
              e.classList.add("e-scroll-active");
          });
    },
    2618: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        n(740);
      var i = r(n(7597)),
        s = r(n(381));
      class ArgsObject extends i.default {
        static getInstanceType() {
          return "ArgsObject";
        }
        constructor(e) {
          super(), (this.args = e);
        }
        requireArgument(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.args;
          if (!Object.prototype.hasOwnProperty.call(t, e))
            throw Error(`${e} is required.`);
        }
        requireArgumentType(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if ((this.requireArgument(e, n), typeof n[e] !== t))
            throw Error(`${e} invalid type: ${t}.`);
        }
        requireArgumentInstance(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if (
            (this.requireArgument(e, n),
            !(n[e] instanceof t || (0, s.default)(n[e], t)))
          )
            throw Error(`${e} invalid instance.`);
        }
        requireArgumentConstructor(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : this.args;
          if (
            (this.requireArgument(e, n),
            n[e].constructor.toString() !== t.prototype.constructor.toString())
          )
            throw Error(`${e} invalid constructor type.`);
        }
      }
      t.default = ArgsObject;
    },
    869: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ForceMethodImplementation = void 0),
        n(740);
      class ForceMethodImplementation extends Error {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          super(
            `${e.isStatic ? "static " : ""}${
              e.fullName
            }() should be implemented, please provide '${
              e.functionName || e.fullName
            }' functionality.`,
            t
          ),
            Object.keys(t).length && console.error(t),
            Error.captureStackTrace(this, ForceMethodImplementation);
        }
      }
      t.ForceMethodImplementation = ForceMethodImplementation;
      t.default = (e) => {
        const t = Error().stack.split("\n")[2].trim(),
          n = t.startsWith("at new") ? "constructor" : t.split(" ")[1],
          r = {};
        if (
          ((r.functionName = n), (r.fullName = n), r.functionName.includes("."))
        ) {
          const e = r.functionName.split(".");
          (r.className = e[0]), (r.functionName = e[1]);
        } else r.isStatic = !0;
        throw new ForceMethodImplementation(r, e);
      };
    },
    7597: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class InstanceType {
        static [Symbol.hasInstance](e) {
          let t = super[Symbol.hasInstance](e);
          if (e && !e.constructor.getInstanceType) return t;
          if (
            e &&
            (e.instanceTypes || (e.instanceTypes = []),
            t ||
              (this.getInstanceType() === e.constructor.getInstanceType() &&
                (t = !0)),
            t)
          ) {
            const t =
              this.getInstanceType === InstanceType.getInstanceType
                ? "BaseInstanceType"
                : this.getInstanceType();
            -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t);
          }
          return (
            !t &&
              e &&
              (t =
                e.instanceTypes &&
                Array.isArray(e.instanceTypes) &&
                -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
            t
          );
        }
        static getInstanceType() {
          elementorModules.ForceMethodImplementation();
        }
        constructor() {
          let e = new.target;
          const t = [];
          for (; e.__proto__ && e.__proto__.name; )
            t.push(e.__proto__), (e = e.__proto__);
          t.reverse().forEach((e) => this instanceof e);
        }
      }
      t.default = InstanceType;
    },
    1192: (e, t, n) => {
      "use strict";
      n(740);
      const Module = function () {
        const e = jQuery,
          t = arguments,
          n = this,
          r = {};
        let i;
        (this.getItems = function (e, t) {
          if (t) {
            const n = t.split("."),
              r = n.splice(0, 1);
            if (!n.length) return e[r];
            if (!e[r]) return;
            return this.getItems(e[r], n.join("."));
          }
          return e;
        }),
          (this.getSettings = function (e) {
            return this.getItems(i, e);
          }),
          (this.setSettings = function (t, r, s) {
            if ((s || (s = i), "object" == typeof t)) return e.extend(s, t), n;
            const o = t.split("."),
              a = o.splice(0, 1);
            return o.length
              ? (s[a] || (s[a] = {}), n.setSettings(o.join("."), r, s[a]))
              : ((s[a] = r), n);
          }),
          (this.getErrorMessage = function (e, t) {
            let n;
            if ("forceMethodImplementation" === e)
              n = `The method '${t}' must to be implemented in the inheritor child.`;
            else n = "An error occurs";
            return n;
          }),
          (this.forceMethodImplementation = function (e) {
            throw new Error(
              this.getErrorMessage("forceMethodImplementation", e)
            );
          }),
          (this.on = function (t, i) {
            if ("object" == typeof t)
              return (
                e.each(t, function (e) {
                  n.on(e, this);
                }),
                n
              );
            return (
              t.split(" ").forEach(function (e) {
                r[e] || (r[e] = []), r[e].push(i);
              }),
              n
            );
          }),
          (this.off = function (e, t) {
            if (!r[e]) return n;
            if (!t) return delete r[e], n;
            const i = r[e].indexOf(t);
            return (
              -1 !== i && (delete r[e][i], (r[e] = r[e].filter((e) => e))), n
            );
          }),
          (this.trigger = function (t) {
            const i = "on" + t[0].toUpperCase() + t.slice(1),
              s = Array.prototype.slice.call(arguments, 1);
            n[i] && n[i].apply(n, s);
            const o = r[t];
            return o
              ? (e.each(o, function (e, t) {
                  t.apply(n, s);
                }),
                n)
              : n;
          }),
          n.__construct.apply(n, t),
          e.each(n, function (e) {
            const t = n[e];
            "function" == typeof t &&
              (n[e] = function () {
                return t.apply(n, arguments);
              });
          }),
          (function () {
            i = n.getDefaultSettings();
            const r = t[0];
            r && e.extend(!0, i, r);
          })(),
          n.trigger("init");
      };
      (Module.prototype.__construct = function () {}),
        (Module.prototype.getDefaultSettings = function () {
          return {};
        }),
        (Module.prototype.getConstructorID = function () {
          return this.constructor.name;
        }),
        (Module.extend = function (e) {
          const t = jQuery,
            n = this,
            child = function () {
              return n.apply(this, arguments);
            };
          return (
            t.extend(child, n),
            ((child.prototype = Object.create(
              t.extend({}, n.prototype, e)
            )).constructor = child),
            (child.__super__ = n.prototype),
            child
          );
        }),
        (e.exports = Module);
    },
    6516: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(2640)).default.extend({
        getDefaultSettings: () => ({
          container: null,
          items: null,
          columnsCount: 3,
          verticalSpaceBetween: 30,
        }),
        getDefaultElements() {
          return {
            $container: jQuery(this.getSettings("container")),
            $items: jQuery(this.getSettings("items")),
          };
        },
        run() {
          var e = [],
            t = this.elements.$container.position().top,
            n = this.getSettings(),
            r = n.columnsCount;
          (t += parseInt(this.elements.$container.css("margin-top"), 10)),
            this.elements.$items.each(function (i) {
              var s = Math.floor(i / r),
                o = jQuery(this),
                a =
                  o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
              if (s) {
                var l = o.position(),
                  c = i % r,
                  u = l.top - t - e[c];
                (u -= parseInt(o.css("margin-top"), 10)),
                  (u *= -1),
                  o.css("margin-top", u + "px"),
                  (e[c] += a);
              } else e.push(a);
            });
        },
      });
      t.default = i;
    },
    400: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Scroll {
        static scrollObserver(e) {
          let t = 0;
          const n = {
            root: e.root || null,
            rootMargin: e.offset || "0px",
            threshold: (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              const t = [];
              if (e > 0 && e <= 100) {
                const n = 100 / e;
                for (let e = 0; e <= 100; e += n) t.push(e / 100);
              } else t.push(0);
              return t;
            })(e.sensitivity),
          };
          return new IntersectionObserver(function handleIntersect(n) {
            const r = n[0].boundingClientRect.y,
              i = n[0].isIntersecting,
              s = r < t ? "down" : "up",
              o = Math.abs(
                parseFloat((100 * n[0].intersectionRatio).toFixed(2))
              );
            e.callback({
              sensitivity: e.sensitivity,
              isInViewport: i,
              scrollPercentage: o,
              intersectionScrollDirection: s,
            }),
              (t = r);
          }, n);
        }
        static getElementViewportPercentage(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = e[0].getBoundingClientRect(),
            r = t.start || 0,
            i = t.end || 0,
            s = (window.innerHeight * r) / 100,
            o = (window.innerHeight * i) / 100,
            a = n.top - window.innerHeight,
            l = 0 - a + s,
            c = n.top + s + e.height() - a + o,
            u = Math.max(0, Math.min(l / c, 1));
          return parseFloat((100 * u).toFixed(2));
        }
        static getPageScrollPercentage() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
          const n = e.start || 0,
            r = e.end || 0,
            i =
              t ||
              document.documentElement.scrollHeight -
                document.documentElement.clientHeight,
            s = (i * n) / 100,
            o = i + s + (i * r) / 100;
          return (
            ((document.documentElement.scrollTop +
              document.body.scrollTop +
              s) /
              o) *
            100
          );
        }
      };
    },
    2640: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(1192)).default.extend({
        elements: null,
        getDefaultElements: () => ({}),
        bindEvents() {},
        onInit() {
          this.initElements(), this.bindEvents();
        },
        initElements() {
          this.elements = this.getDefaultElements();
        },
      });
      t.default = i;
    },
    5955: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(1192)),
        s = r(n(2640)),
        o = r(n(2618)),
        a = r(n(6516)),
        l = r(n(400)),
        c = r(n(869)),
        u = (window.elementorModules = {
          Module: i.default,
          ViewModule: s.default,
          ArgsObject: o.default,
          ForceMethodImplementation: c.default,
          utils: { Masonry: a.default, Scroll: l.default },
        });
      t.default = u;
    },
    32: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(3090));
      class NestedAccordion extends i.default {
        constructor() {
          super(...arguments), (this.animations = new Map());
        }
        getDefaultSettings() {
          return {
            selectors: {
              accordion: ".e-n-accordion",
              accordionContentContainers: ".e-n-accordion > .e-con",
              accordionItems: ".e-n-accordion-item",
              accordionItemTitles: ".e-n-accordion-item-title",
              accordionContent: ".e-n-accordion-item > .e-con",
            },
            default_state: "expanded",
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $accordion: this.findElement(e.accordion),
            $contentContainers: this.findElement(e.accordionContentContainers),
            $accordionItems: this.findElement(e.accordionItems),
            $accordionTitles: this.findElement(e.accordionItemTitles),
            $accordionContent: this.findElement(e.accordionContent),
          };
        }
        onInit() {
          super.onInit(...arguments),
            elementorFrontend.isEditMode() && this.interlaceContainers();
        }
        interlaceContainers() {
          const { $contentContainers: e, $accordionItems: t } =
            this.getDefaultElements();
          e.each((e, n) => {
            t[e].appendChild(n);
          });
        }
        bindEvents() {
          this.elements.$accordionTitles.on(
            "click",
            this.clickListener.bind(this)
          );
        }
        unbindEvents() {
          this.elements.$accordionTitles.off();
        }
        clickListener(e) {
          e.preventDefault();
          const t = e.currentTarget.parentElement,
            n = this.getSettings(),
            r = t.querySelector(n.selectors.accordionContent),
            { max_items_expended: i } = this.getElementSettings(),
            { $accordionTitles: s, $accordionItems: o } = this.elements;
          "one" === i && this.closeAllItems(o, s),
            t.open
              ? this.closeAccordionItem(t, e.currentTarget)
              : this.prepareOpenAnimation(t, e.currentTarget, r);
        }
        animateItem(e, t, n, r) {
          e.style.overflow = "hidden";
          let i = this.animations.get(e);
          i && i.cancel(),
            (i = e.animate(
              { height: [t, n] },
              { duration: this.getAnimationDuration() }
            )),
            (i.onfinish = () => this.onAnimationFinish(e, r)),
            this.animations.set(e, i);
        }
        closeAccordionItem(e, t) {
          const n = `${e.offsetHeight}px`,
            r = `${t.offsetHeight}px`;
          this.animateItem(e, n, r, !1);
        }
        prepareOpenAnimation(e, t, n) {
          (e.style.overflow = "hidden"),
            (e.style.height = `${e.offsetHeight}px`),
            (e.open = !0),
            window.requestAnimationFrame(() => this.openAccordionItem(e, t, n));
        }
        openAccordionItem(e, t, n) {
          const r = `${e.offsetHeight}px`,
            i = `${t.offsetHeight + n.offsetHeight}px`;
          this.animateItem(e, r, i, !0);
        }
        onAnimationFinish(e, t) {
          (e.open = t),
            this.animations.set(e, null),
            (e.style.height = e.style.overflow = "");
        }
        closeAllItems(e, t) {
          t.each((t, n) => {
            this.closeAccordionItem(e[t], n);
          });
        }
        getAnimationDuration() {
          const { size: e, unit: t } = this.getElementSettings(
            "n_accordion_animation_duration"
          );
          return e * ("ms" === t ? 1 : 1e3);
        }
      }
      t.default = NestedAccordion;
    },
    7323: (e, t, n) => {
      "use strict";
      var r = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = r(n(3090)),
        s = n(6630);
      class NestedTabs extends i.default {
        constructor() {
          super(...arguments), (this.resizeListenerNestedTabs = null);
        }
        getTabTitleFilterSelector(e) {
          return `[data-tab="${e}"]`;
        }
        getTabContentFilterSelector(e) {
          return `*:nth-child(${2 * e})`;
        }
        getTabIndex(e) {
          return e.getAttribute("data-tab");
        }
        getDefaultSettings() {
          return {
            selectors: {
              tablist: '[role="tablist"]',
              tabTitle: ".e-n-tab-title",
              tabContent: ".e-con",
              headingContainer: ".e-n-tabs-heading",
              activeTabContentContainers: ".e-con.e-active",
              mobileTabTitle: ".e-collapse",
            },
            classes: { active: "e-active" },
            showTabFn: "show",
            hideTabFn: "hide",
            toggleSelf: !1,
            hidePrevious: !0,
            autoExpand: !0,
            keyDirection: {
              ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
              ArrowUp: -1,
              ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
              ArrowDown: 1,
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $tabTitles: this.findElement(e.tabTitle),
            $tabContents: this.findElement(e.tabContent),
            $mobileTabTitles: this.findElement(e.mobileTabTitle),
            $headingContainer: this.findElement(e.headingContainer),
          };
        }
        activateDefaultTab() {
          const e = this.getSettings(),
            t = this.getEditSettings("activeItemIndex") || 1,
            n = { showTabFn: e.showTabFn, hideTabFn: e.hideTabFn };
          this.setSettings({ showTabFn: "show", hideTabFn: "hide" }),
            this.changeActiveTab(t),
            this.setSettings(n);
        }
        handleKeyboardNavigation(e) {
          const t = e.currentTarget,
            n = jQuery(t.closest(this.getSettings("selectors").tablist)),
            r = n.find(this.getSettings("selectors").tabTitle),
            i = "vertical" === n.attr("aria-orientation");
          switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
              if (i) return;
              break;
            case "ArrowUp":
            case "ArrowDown":
              if (!i) return;
              e.preventDefault();
              break;
            case "Home":
              return e.preventDefault(), void r.first().trigger("focus");
            case "End":
              return e.preventDefault(), void r.last().trigger("focus");
            default:
              return;
          }
          const s = t.getAttribute("data-tab") - 1,
            o = this.getSettings("keyDirection")[e.key],
            a = r[s + o];
          a
            ? a.focus()
            : -1 === s + o
            ? r.last().trigger("focus")
            : r.first().trigger("focus");
        }
        deactivateActiveTab(e) {
          const t = this.getSettings(),
            n = t.classes.active,
            r = e ? this.getTabTitleFilterSelector(e) : "." + n,
            i = e ? this.getTabContentFilterSelector(e) : "." + n,
            s = this.elements.$tabTitles.filter(r),
            o = this.elements.$tabContents.filter(i);
          s.add(o).removeClass(n),
            s.attr(this.getTitleDeactivationAttributes()),
            o[t.hideTabFn](0, () => this.onHideTabContent(o)),
            o.attr("hidden", "hidden");
        }
        getTitleDeactivationAttributes() {
          return {
            tabindex: "-1",
            "aria-selected": "false",
            "aria-expanded": "false",
          };
        }
        onHideTabContent(e) {}
        activateTab(e) {
          const t = this.getSettings(),
            n = t.classes.active,
            r = "show" === t.showTabFn ? 0 : 400;
          let i = this.elements.$tabTitles.filter(
              this.getTabTitleFilterSelector(e)
            ),
            s = this.elements.$tabContents.filter(
              this.getTabContentFilterSelector(e)
            );
          if (!i.length) {
            const t = Math.max(e - 1, 1);
            (i = this.elements.$tabTitles.filter(
              this.getTabTitleFilterSelector(t)
            )),
              (s = this.elements.$tabContents.filter(
                this.getTabContentFilterSelector(t)
              ));
          }
          i.add(s).addClass(n),
            i.attr({
              tabindex: "0",
              "aria-selected": "true",
              "aria-expanded": "true",
            }),
            s[t.showTabFn](r, () => this.onShowTabContent(s)),
            s.removeAttr("hidden");
        }
        onShowTabContent(e) {
          elementorFrontend.elements.$window.trigger(
            "elementor-pro/motion-fx/recalc"
          ),
            elementorFrontend.elements.$window.trigger(
              "elementor/nested-tabs/activate",
              e
            ),
            elementorFrontend.elements.$window.trigger(
              "elementor/bg-video/recalc"
            );
        }
        isActiveTab(e) {
          return this.elements.$tabTitles
            .filter('[data-tab="' + e + '"]')
            .hasClass(this.getSettings("classes.active"));
        }
        onTabClick(e) {
          e.preventDefault(),
            this.changeActiveTab(e.currentTarget.getAttribute("data-tab"), !0);
        }
        onTabKeyDown(e) {
          this.onKeydownAvoidUndesiredPageScrolling(e);
        }
        onTabKeyUp(e) {
          switch (e.code) {
            case "ArrowLeft":
            case "ArrowRight":
              this.handleKeyboardNavigation(e);
              break;
            case "Enter":
            case "Space":
              e.preventDefault(),
                this.changeActiveTab(
                  e.currentTarget.getAttribute("data-tab"),
                  !0
                );
          }
        }
        getTabEvents() {
          return {
            keydown: this.onTabKeyDown.bind(this),
            keyup: this.onTabKeyUp.bind(this),
            click: this.onTabClick.bind(this),
          };
        }
        getHeadingEvents() {
          const e = this.elements.$headingContainer[0];
          return {
            mousedown: s.changeScrollStatus.bind(this, e),
            mouseup: s.changeScrollStatus.bind(this, e),
            mouseleave: s.changeScrollStatus.bind(this, e),
            mousemove: s.setHorizontalTitleScrollValues.bind(
              this,
              e,
              this.getHorizontalScrollSetting()
            ),
          };
        }
        bindEvents() {
          this.elements.$tabTitles.on(this.getTabEvents()),
            this.elements.$headingContainer.on(this.getHeadingEvents());
          const e = {
            element: this.elements.$headingContainer[0],
            direction: this.getTabsDirection(),
            justifyCSSVariable: "--n-tabs-heading-justify-content",
            horizontalScrollStatus: this.getHorizontalScrollSetting(),
          };
          (this.resizeListenerNestedTabs = s.setHorizontalScrollAlignment.bind(
            this,
            e
          )),
            elementorFrontend.elements.$window.on(
              "resize",
              this.resizeListenerNestedTabs
            ),
            elementorFrontend.elements.$window.on(
              "elementor/nested-tabs/activate",
              this.reInitSwipers
            );
        }
        unbindEvents() {
          this.elements.$tabTitles.off(),
            this.elements.$headingContainer.off(),
            elementorFrontend.elements.$window.off("resize"),
            elementorFrontend.elements.$window.off(
              "elementor/nested-tabs/activate"
            );
        }
        onKeydownAvoidUndesiredPageScrolling(e) {
          ["End", "Home", "ArrowUp", "ArrowDown"].includes(e.key) &&
            this.handleKeyboardNavigation(e);
        }
        reInitSwipers(e, t) {
          const n = t.querySelectorAll(
            `.${elementorFrontend.config.swiperClass}`
          );
          for (const e of n) {
            if (!e.swiper) return;
            (e.swiper.initialized = !1), e.swiper.init();
          }
        }
        onInit() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          this.createMobileTabs(t),
            super.onInit(...t),
            this.getSettings("autoExpand") && this.activateDefaultTab();
          const r = {
            element: this.elements.$headingContainer[0],
            direction: this.getTabsDirection(),
            justifyCSSVariable: "--n-tabs-heading-justify-content",
            horizontalScrollStatus: this.getHorizontalScrollSetting(),
          };
          (0, s.setHorizontalScrollAlignment)(r);
        }
        onEditSettingsChange(e, t) {
          "activeItemIndex" === e && this.changeActiveTab(t, !1);
        }
        onElementChange(e) {
          if (this.checkSliderPropsToWatch(e)) {
            const e = {
              element: this.elements.$headingContainer[0],
              direction: this.getTabsDirection(),
              justifyCSSVariable: "--n-tabs-heading-justify-content",
              horizontalScrollStatus: this.getHorizontalScrollSetting(),
            };
            (0, s.setHorizontalScrollAlignment)(e);
          }
        }
        checkSliderPropsToWatch(e) {
          return (
            0 === e.indexOf("horizontal_scroll") ||
            0 === e.indexOf("tabs_justify_horizontal") ||
            0 === e.indexOf("tabs_title_space_between")
          );
        }
        changeActiveTab(e) {
          if (
            arguments.length > 1 &&
            void 0 !== arguments[1] &&
            arguments[1] &&
            this.isEdit &&
            this.isElementInTheCurrentDocument()
          )
            return window.top.$e.run("document/repeater/select", {
              container: elementor.getContainer(this.$element.attr("data-id")),
              index: parseInt(e),
            });
          const t = this.isActiveTab(e),
            n = this.getSettings();
          if (
            ((!n.toggleSelf && t) ||
              !n.hidePrevious ||
              this.deactivateActiveTab(),
            !n.hidePrevious && t && this.deactivateActiveTab(e),
            !t)
          ) {
            if ("none" === this.elements.$headingContainer.css("display"))
              return void this.activateMobileTab(e);
            this.activateTab(e);
          }
        }
        activateMobileTab(e) {
          setTimeout(() => {
            this.activateTab(e), this.forceActiveTabToBeInViewport(e);
          }, 10);
        }
        forceActiveTabToBeInViewport(e) {
          if (!elementorFrontend.isEditMode()) return;
          const t = this.elements.$mobileTabTitles.filter(
            this.getTabTitleFilterSelector(e)
          );
          elementor.helpers.isInViewport(t[0]) ||
            t[0].scrollIntoView({ block: "center" });
        }
        createMobileTabs(e) {
          const t = this.getSettings();
          if (elementorFrontend.isEditMode()) {
            const n = this.$element,
              r = this.findElement(".e-collapse").remove();
            let i = 1;
            if (
              (this.findElement(".e-con").each(function () {
                const e = jQuery(this),
                  r = n.find(
                    `${t.selectors.headingContainer} > *:nth-child(${i})`
                  ),
                  s = `<div class="${t.selectors.tabTitle.replace(
                    ".",
                    ""
                  )} e-collapse" data-tab="${i}" role="tab">${r.html()}</div>`;
                e.before(s), ++i;
              }),
              r.length)
            )
              return elementorModules.ViewModule.prototype.onInit.apply(
                this,
                e
              );
          }
        }
        getActiveClass() {
          return this.getSettings().classes.active;
        }
        getVisibleTabTitle(e) {
          const t = this.elements.$tabTitles.filter(e);
          return null !== t[0]?.offsetParent ? t[0] : t[1];
        }
        getKeyPressed(e) {
          const t = 9 === e?.which,
            n = e?.shiftKey;
          return !!t && n
            ? "ShiftTab"
            : !!t && !n
            ? "Tab"
            : 27 === e?.which
            ? "Escape"
            : void 0;
        }
        changeFocusFromContentContainerItemBackToTabTitle(e) {
          if (this.hasDropdownLayout()) return;
          const t = "ShiftTab" === this.getKeyPressed(e),
            n = "Tab" === this.getKeyPressed(e),
            r = "Escape" === this.getKeyPressed(e),
            i = this.itemInsideContentContainerHasFocus(0),
            s = this.itemInsideContentContainerHasFocus("last"),
            o = `.${this.getActiveClass()}`,
            a = this.getVisibleTabTitle(o),
            l = parseInt(a?.getAttribute("data-tab")),
            c = this.getTabTitleFilterSelector(l + 1),
            u = this.getVisibleTabTitle(c),
            d = n && s && !!u;
          (t && i && !!a) || r
            ? (e.preventDefault(), a?.focus())
            : d &&
              (e.preventDefault(),
              this.setTabindexOfActiveContainerItems("-1"),
              u?.focus());
        }
        changeFocusFromActiveTabTitleToContentContainer(e) {
          const t = "Tab" === this.getKeyPressed(e),
            n = this.getFocusableItemsInsideActiveContentContainer()[0],
            r = elementorFrontend.elements.window.document.activeElement,
            i = parseInt(r.getAttribute("data-tab"));
          t &&
            this.tabTitleHasActiveContentContainer(i) &&
            n &&
            (e.preventDefault(), n.trigger("focus"));
        }
        itemInsideContentContainerHasFocus(e) {
          const t = elementorFrontend.elements.window.document.activeElement,
            n = this.getFocusableItemsInsideActiveContentContainer();
          return n["last" === e ? n.length - 1 : e] === t;
        }
        getFocusableItemsInsideActiveContentContainer() {
          const e = this.getSettings();
          return this.$element
            .find(e.selectors.activeTabContentContainers)
            .find(":focusable");
        }
        setTabindexOfActiveContainerItems(e) {
          this.getFocusableItemsInsideActiveContentContainer().attr(
            "tabindex",
            e
          );
        }
        setActiveCurrentContainerItemsToFocusable() {
          const e = elementorFrontend.elements.window.document.activeElement,
            t = parseInt(e?.getAttribute("data-tab"));
          this.tabTitleHasActiveContentContainer(t) &&
            this.setTabindexOfActiveContainerItems("0");
        }
        tabTitleHasActiveContentContainer(e) {
          const t = this.elements.$tabTitles.filter(
              this.getTabTitleFilterSelector(e)
            ),
            n = t[0]?.classList.contains(`${this.getActiveClass()}`);
          return !(
            !this.elements.$tabContents.filter(
              this.getTabContentFilterSelector(e)
            ) || !n
          );
        }
        getTabsDirection() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return elementorFrontend.utils.controls.getResponsiveControlValue(
            this.getElementSettings(),
            "tabs_justify_horizontal",
            "",
            e
          );
        }
        getHorizontalScrollSetting() {
          const e = elementorFrontend.getCurrentDeviceMode();
          return elementorFrontend.utils.controls.getResponsiveControlValue(
            this.getElementSettings(),
            "horizontal_scroll",
            "",
            e
          );
        }
      }
      t.default = NestedTabs;
    },
    5089: (e, t, n) => {
      var r = n(930),
        i = n(9268),
        s = TypeError;
      e.exports = function (e) {
        if (r(e)) return e;
        throw s(i(e) + " is not a function");
      };
    },
    1378: (e, t, n) => {
      var r = n(930),
        i = String,
        s = TypeError;
      e.exports = function (e) {
        if ("object" == typeof e || r(e)) return e;
        throw s("Can't set " + i(e) + " as a prototype");
      };
    },
    6112: (e, t, n) => {
      var r = n(8759),
        i = String,
        s = TypeError;
      e.exports = function (e) {
        if (r(e)) return e;
        throw s(i(e) + " is not an object");
      };
    },
    6198: (e, t, n) => {
      var r = n(4088),
        i = n(7740),
        s = n(2871),
        createMethod = function (e) {
          return function (t, n, o) {
            var a,
              l = r(t),
              c = s(l),
              u = i(o, c);
            if (e && n != n) {
              for (; c > u; ) if ((a = l[u++]) != a) return !0;
            } else
              for (; c > u; u++)
                if ((e || u in l) && l[u] === n) return e || u || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: createMethod(!0), indexOf: createMethod(!1) };
    },
    2306: (e, t, n) => {
      var r = n(8240),
        i = r({}.toString),
        s = r("".slice);
      e.exports = function (e) {
        return s(i(e), 8, -1);
      };
    },
    375: (e, t, n) => {
      var r = n(2371),
        i = n(930),
        s = n(2306),
        o = n(211)("toStringTag"),
        a = Object,
        l =
          "Arguments" ==
          s(
            (function () {
              return arguments;
            })()
          );
      e.exports = r
        ? s
        : function (e) {
            var t, n, r;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = a(e)), o))
              ? n
              : l
              ? s(t)
              : "Object" == (r = s(t)) && i(t.callee)
              ? "Arguments"
              : r;
          };
    },
    8474: (e, t, n) => {
      var r = n(9606),
        i = n(6095),
        s = n(4399),
        o = n(7826);
      e.exports = function (e, t, n) {
        for (var a = i(t), l = o.f, c = s.f, u = 0; u < a.length; u++) {
          var d = a[u];
          r(e, d) || (n && r(n, d)) || l(e, d, c(t, d));
        }
      };
    },
    2585: (e, t, n) => {
      var r = n(5283),
        i = n(7826),
        s = n(5736);
      e.exports = r
        ? function (e, t, n) {
            return i.f(e, t, s(1, n));
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          };
    },
    5736: (e) => {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    1343: (e, t, n) => {
      var r = n(930),
        i = n(7826),
        s = n(3712),
        o = n(9444);
      e.exports = function (e, t, n, a) {
        a || (a = {});
        var l = a.enumerable,
          c = void 0 !== a.name ? a.name : t;
        if ((r(n) && s(n, c, a), a.global)) l ? (e[t] = n) : o(t, n);
        else {
          try {
            a.unsafe ? e[t] && (l = !0) : delete e[t];
          } catch (e) {}
          l
            ? (e[t] = n)
            : i.f(e, t, {
                value: n,
                enumerable: !1,
                configurable: !a.nonConfigurable,
                writable: !a.nonWritable,
              });
        }
        return e;
      };
    },
    9444: (e, t, n) => {
      var r = n(2086),
        i = Object.defineProperty;
      e.exports = function (e, t) {
        try {
          i(r, e, { value: t, configurable: !0, writable: !0 });
        } catch (n) {
          r[e] = t;
        }
        return t;
      };
    },
    5283: (e, t, n) => {
      var r = n(3677);
      e.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    7886: (e) => {
      var t = "object" == typeof document && document.all,
        n = void 0 === t && void 0 !== t;
      e.exports = { all: t, IS_HTMLDDA: n };
    },
    821: (e, t, n) => {
      var r = n(2086),
        i = n(8759),
        s = r.document,
        o = i(s) && i(s.createElement);
      e.exports = function (e) {
        return o ? s.createElement(e) : {};
      };
    },
    4999: (e) => {
      e.exports =
        ("undefined" != typeof navigator && String(navigator.userAgent)) || "";
    },
    1448: (e, t, n) => {
      var r,
        i,
        s = n(2086),
        o = n(4999),
        a = s.process,
        l = s.Deno,
        c = (a && a.versions) || (l && l.version),
        u = c && c.v8;
      u && (i = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !i &&
          o &&
          (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
          (r = o.match(/Chrome\/(\d+)/)) &&
          (i = +r[1]),
        (e.exports = i);
    },
    8684: (e) => {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    79: (e, t, n) => {
      var r = n(8240),
        i = Error,
        s = r("".replace),
        o = String(i("zxcasd").stack),
        a = /\n\s*at [^:]*:[^\n]*/,
        l = a.test(o);
      e.exports = function (e, t) {
        if (l && "string" == typeof e && !i.prepareStackTrace)
          for (; t--; ) e = s(e, a, "");
        return e;
      };
    },
    8395: (e, t, n) => {
      var r = n(2585),
        i = n(79),
        s = n(2114),
        o = Error.captureStackTrace;
      e.exports = function (e, t, n, a) {
        s && (o ? o(e, t) : r(e, "stack", i(n, a)));
      };
    },
    2114: (e, t, n) => {
      var r = n(3677),
        i = n(5736);
      e.exports = !r(function () {
        var e = Error("a");
        return (
          !("stack" in e) ||
          (Object.defineProperty(e, "stack", i(1, 7)), 7 !== e.stack)
        );
      });
    },
    1695: (e, t, n) => {
      var r = n(2086),
        i = n(4399).f,
        s = n(2585),
        o = n(1343),
        a = n(9444),
        l = n(8474),
        c = n(7189);
      e.exports = function (e, t) {
        var n,
          u,
          d,
          h,
          g,
          p = e.target,
          f = e.global,
          m = e.stat;
        if ((n = f ? r : m ? r[p] || a(p, {}) : (r[p] || {}).prototype))
          for (u in t) {
            if (
              ((h = t[u]),
              (d = e.dontCallGetSet ? (g = i(n, u)) && g.value : n[u]),
              !c(f ? u : p + (m ? "." : "#") + u, e.forced) && void 0 !== d)
            ) {
              if (typeof h == typeof d) continue;
              l(h, d);
            }
            (e.sham || (d && d.sham)) && s(h, "sham", !0), o(n, u, h, e);
          }
      };
    },
    3677: (e) => {
      e.exports = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    7258: (e, t, n) => {
      var r = n(6059),
        i = Function.prototype,
        s = i.apply,
        o = i.call;
      e.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (r
          ? o.bind(s)
          : function () {
              return o.apply(s, arguments);
            });
    },
    6059: (e, t, n) => {
      var r = n(3677);
      e.exports = !r(function () {
        var e = function () {}.bind();
        return "function" != typeof e || e.hasOwnProperty("prototype");
      });
    },
    9413: (e, t, n) => {
      var r = n(6059),
        i = Function.prototype.call;
      e.exports = r
        ? i.bind(i)
        : function () {
            return i.apply(i, arguments);
          };
    },
    4398: (e, t, n) => {
      var r = n(5283),
        i = n(9606),
        s = Function.prototype,
        o = r && Object.getOwnPropertyDescriptor,
        a = i(s, "name"),
        l = a && "something" === function something() {}.name,
        c = a && (!r || (r && o(s, "name").configurable));
      e.exports = { EXISTS: a, PROPER: l, CONFIGURABLE: c };
    },
    1518: (e, t, n) => {
      var r = n(8240),
        i = n(5089);
      e.exports = function (e, t, n) {
        try {
          return r(i(Object.getOwnPropertyDescriptor(e, t)[n]));
        } catch (e) {}
      };
    },
    8240: (e, t, n) => {
      var r = n(6059),
        i = Function.prototype,
        s = i.call,
        o = r && i.bind.bind(s, s);
      e.exports = r
        ? o
        : function (e) {
            return function () {
              return s.apply(e, arguments);
            };
          };
    },
    563: (e, t, n) => {
      var r = n(2086),
        i = n(930);
      e.exports = function (e, t) {
        return arguments.length < 2
          ? ((n = r[e]), i(n) ? n : void 0)
          : r[e] && r[e][t];
        var n;
      };
    },
    2964: (e, t, n) => {
      var r = n(5089),
        i = n(1858);
      e.exports = function (e, t) {
        var n = e[t];
        return i(n) ? void 0 : r(n);
      };
    },
    2086: (e, t, n) => {
      var check = function (e) {
        return e && e.Math == Math && e;
      };
      e.exports =
        check("object" == typeof globalThis && globalThis) ||
        check("object" == typeof window && window) ||
        check("object" == typeof self && self) ||
        check("object" == typeof n.g && n.g) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    9606: (e, t, n) => {
      var r = n(8240),
        i = n(3060),
        s = r({}.hasOwnProperty);
      e.exports =
        Object.hasOwn ||
        function hasOwn(e, t) {
          return s(i(e), t);
        };
    },
    7153: (e) => {
      e.exports = {};
    },
    6761: (e, t, n) => {
      var r = n(5283),
        i = n(3677),
        s = n(821);
      e.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(s("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    5974: (e, t, n) => {
      var r = n(8240),
        i = n(3677),
        s = n(2306),
        o = Object,
        a = r("".split);
      e.exports = i(function () {
        return !o("z").propertyIsEnumerable(0);
      })
        ? function (e) {
            return "String" == s(e) ? a(e, "") : o(e);
          }
        : o;
    },
    5070: (e, t, n) => {
      var r = n(930),
        i = n(8759),
        s = n(7530);
      e.exports = function (e, t, n) {
        var o, a;
        return (
          s &&
            r((o = t.constructor)) &&
            o !== n &&
            i((a = o.prototype)) &&
            a !== n.prototype &&
            s(e, a),
          e
        );
      };
    },
    9277: (e, t, n) => {
      var r = n(8240),
        i = n(930),
        s = n(4489),
        o = r(Function.toString);
      i(s.inspectSource) ||
        (s.inspectSource = function (e) {
          return o(e);
        }),
        (e.exports = s.inspectSource);
    },
    8945: (e, t, n) => {
      var r = n(8759),
        i = n(2585);
      e.exports = function (e, t) {
        r(t) && "cause" in t && i(e, "cause", t.cause);
      };
    },
    3278: (e, t, n) => {
      var r,
        i,
        s,
        o = n(640),
        a = n(2086),
        l = n(8759),
        c = n(2585),
        u = n(9606),
        d = n(4489),
        h = n(8944),
        g = n(7153),
        p = "Object already initialized",
        f = a.TypeError,
        m = a.WeakMap;
      if (o || d.state) {
        var v = d.state || (d.state = new m());
        (v.get = v.get),
          (v.has = v.has),
          (v.set = v.set),
          (r = function (e, t) {
            if (v.has(e)) throw f(p);
            return (t.facade = e), v.set(e, t), t;
          }),
          (i = function (e) {
            return v.get(e) || {};
          }),
          (s = function (e) {
            return v.has(e);
          });
      } else {
        var b = h("state");
        (g[b] = !0),
          (r = function (e, t) {
            if (u(e, b)) throw f(p);
            return (t.facade = e), c(e, b, t), t;
          }),
          (i = function (e) {
            return u(e, b) ? e[b] : {};
          }),
          (s = function (e) {
            return u(e, b);
          });
      }
      e.exports = {
        set: r,
        get: i,
        has: s,
        enforce: function (e) {
          return s(e) ? i(e) : r(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e)
              throw f("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      };
    },
    930: (e, t, n) => {
      var r = n(7886),
        i = r.all;
      e.exports = r.IS_HTMLDDA
        ? function (e) {
            return "function" == typeof e || e === i;
          }
        : function (e) {
            return "function" == typeof e;
          };
    },
    7189: (e, t, n) => {
      var r = n(3677),
        i = n(930),
        s = /#|\.prototype\./,
        isForced = function (e, t) {
          var n = a[o(e)];
          return n == c || (n != l && (i(t) ? r(t) : !!t));
        },
        o = (isForced.normalize = function (e) {
          return String(e).replace(s, ".").toLowerCase();
        }),
        a = (isForced.data = {}),
        l = (isForced.NATIVE = "N"),
        c = (isForced.POLYFILL = "P");
      e.exports = isForced;
    },
    1858: (e) => {
      e.exports = function (e) {
        return null == e;
      };
    },
    8759: (e, t, n) => {
      var r = n(930),
        i = n(7886),
        s = i.all;
      e.exports = i.IS_HTMLDDA
        ? function (e) {
            return "object" == typeof e ? null !== e : r(e) || e === s;
          }
        : function (e) {
            return "object" == typeof e ? null !== e : r(e);
          };
    },
    3296: (e) => {
      e.exports = !1;
    },
    2071: (e, t, n) => {
      var r = n(563),
        i = n(930),
        s = n(5516),
        o = n(1876),
        a = Object;
      e.exports = o
        ? function (e) {
            return "symbol" == typeof e;
          }
        : function (e) {
            var t = r("Symbol");
            return i(t) && s(t.prototype, a(e));
          };
    },
    2871: (e, t, n) => {
      var r = n(4005);
      e.exports = function (e) {
        return r(e.length);
      };
    },
    3712: (e, t, n) => {
      var r = n(8240),
        i = n(3677),
        s = n(930),
        o = n(9606),
        a = n(5283),
        l = n(4398).CONFIGURABLE,
        c = n(9277),
        u = n(3278),
        d = u.enforce,
        h = u.get,
        g = String,
        p = Object.defineProperty,
        f = r("".slice),
        m = r("".replace),
        v = r([].join),
        b =
          a &&
          !i(function () {
            return 8 !== p(function () {}, "length", { value: 8 }).length;
          }),
        y = String(String).split("String"),
        S = (e.exports = function (e, t, n) {
          "Symbol(" === f(g(t), 0, 7) &&
            (t = "[" + m(g(t), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!o(e, "name") || (l && e.name !== t)) &&
              (a ? p(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
            b &&
              n &&
              o(n, "arity") &&
              e.length !== n.arity &&
              p(e, "length", { value: n.arity });
          try {
            n && o(n, "constructor") && n.constructor
              ? a && p(e, "prototype", { writable: !1 })
              : e.prototype && (e.prototype = void 0);
          } catch (e) {}
          var r = d(e);
          return (
            o(r, "source") || (r.source = v(y, "string" == typeof t ? t : "")),
            e
          );
        });
      Function.prototype.toString = S(function toString() {
        return (s(this) && h(this).source) || c(this);
      }, "toString");
    },
    5681: (e) => {
      var t = Math.ceil,
        n = Math.floor;
      e.exports =
        Math.trunc ||
        function trunc(e) {
          var r = +e;
          return (r > 0 ? n : t)(r);
        };
    },
    1879: (e, t, n) => {
      var r = n(4059);
      e.exports = function (e, t) {
        return void 0 === e ? (arguments.length < 2 ? "" : t) : r(e);
      };
    },
    7826: (e, t, n) => {
      var r = n(5283),
        i = n(6761),
        s = n(8202),
        o = n(6112),
        a = n(2258),
        l = TypeError,
        c = Object.defineProperty,
        u = Object.getOwnPropertyDescriptor,
        d = "enumerable",
        h = "configurable",
        g = "writable";
      t.f = r
        ? s
          ? function defineProperty(e, t, n) {
              if (
                (o(e),
                (t = a(t)),
                o(n),
                "function" == typeof e &&
                  "prototype" === t &&
                  "value" in n &&
                  g in n &&
                  !n[g])
              ) {
                var r = u(e, t);
                r &&
                  r[g] &&
                  ((e[t] = n.value),
                  (n = {
                    configurable: h in n ? n[h] : r[h],
                    enumerable: d in n ? n[d] : r[d],
                    writable: !1,
                  }));
              }
              return c(e, t, n);
            }
          : c
        : function defineProperty(e, t, n) {
            if ((o(e), (t = a(t)), o(n), i))
              try {
                return c(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n) throw l("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          };
    },
    4399: (e, t, n) => {
      var r = n(5283),
        i = n(9413),
        s = n(7446),
        o = n(5736),
        a = n(4088),
        l = n(2258),
        c = n(9606),
        u = n(6761),
        d = Object.getOwnPropertyDescriptor;
      t.f = r
        ? d
        : function getOwnPropertyDescriptor(e, t) {
            if (((e = a(e)), (t = l(t)), u))
              try {
                return d(e, t);
              } catch (e) {}
            if (c(e, t)) return o(!i(s.f, e, t), e[t]);
          };
    },
    62: (e, t, n) => {
      var r = n(1352),
        i = n(8684).concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function getOwnPropertyNames(e) {
          return r(e, i);
        };
    },
    6952: (e, t) => {
      t.f = Object.getOwnPropertySymbols;
    },
    5516: (e, t, n) => {
      var r = n(8240);
      e.exports = r({}.isPrototypeOf);
    },
    1352: (e, t, n) => {
      var r = n(8240),
        i = n(9606),
        s = n(4088),
        o = n(6198).indexOf,
        a = n(7153),
        l = r([].push);
      e.exports = function (e, t) {
        var n,
          r = s(e),
          c = 0,
          u = [];
        for (n in r) !i(a, n) && i(r, n) && l(u, n);
        for (; t.length > c; ) i(r, (n = t[c++])) && (~o(u, n) || l(u, n));
        return u;
      };
    },
    7446: (e, t) => {
      "use strict";
      var n = {}.propertyIsEnumerable,
        r = Object.getOwnPropertyDescriptor,
        i = r && !n.call({ 1: 2 }, 1);
      t.f = i
        ? function propertyIsEnumerable(e) {
            var t = r(this, e);
            return !!t && t.enumerable;
          }
        : n;
    },
    7530: (e, t, n) => {
      var r = n(1518),
        i = n(6112),
        s = n(1378);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = r(Object.prototype, "__proto__", "set"))(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function setPrototypeOf(n, r) {
                return i(n), s(r), t ? e(n, r) : (n.__proto__ = r), n;
              };
            })()
          : void 0);
    },
    7999: (e, t, n) => {
      var r = n(9413),
        i = n(930),
        s = n(8759),
        o = TypeError;
      e.exports = function (e, t) {
        var n, a;
        if ("string" === t && i((n = e.toString)) && !s((a = r(n, e))))
          return a;
        if (i((n = e.valueOf)) && !s((a = r(n, e)))) return a;
        if ("string" !== t && i((n = e.toString)) && !s((a = r(n, e))))
          return a;
        throw o("Can't convert object to primitive value");
      };
    },
    6095: (e, t, n) => {
      var r = n(563),
        i = n(8240),
        s = n(62),
        o = n(6952),
        a = n(6112),
        l = i([].concat);
      e.exports =
        r("Reflect", "ownKeys") ||
        function ownKeys(e) {
          var t = s.f(a(e)),
            n = o.f;
          return n ? l(t, n(e)) : t;
        };
    },
    1632: (e, t, n) => {
      var r = n(7826).f;
      e.exports = function (e, t, n) {
        n in e ||
          r(e, n, {
            configurable: !0,
            get: function () {
              return t[n];
            },
            set: function (e) {
              t[n] = e;
            },
          });
      };
    },
    9586: (e, t, n) => {
      var r = n(1858),
        i = TypeError;
      e.exports = function (e) {
        if (r(e)) throw i("Can't call method on " + e);
        return e;
      };
    },
    8944: (e, t, n) => {
      var r = n(9197),
        i = n(5422),
        s = r("keys");
      e.exports = function (e) {
        return s[e] || (s[e] = i(e));
      };
    },
    4489: (e, t, n) => {
      var r = n(2086),
        i = n(9444),
        s = "__core-js_shared__",
        o = r[s] || i(s, {});
      e.exports = o;
    },
    9197: (e, t, n) => {
      var r = n(3296),
        i = n(4489);
      (e.exports = function (e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.30.1",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    },
    5558: (e, t, n) => {
      var r = n(1448),
        i = n(3677);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !i(function () {
          var e = Symbol();
          return (
            !String(e) ||
            !(Object(e) instanceof Symbol) ||
            (!Symbol.sham && r && r < 41)
          );
        });
    },
    7740: (e, t, n) => {
      var r = n(9502),
        i = Math.max,
        s = Math.min;
      e.exports = function (e, t) {
        var n = r(e);
        return n < 0 ? i(n + t, 0) : s(n, t);
      };
    },
    4088: (e, t, n) => {
      var r = n(5974),
        i = n(9586);
      e.exports = function (e) {
        return r(i(e));
      };
    },
    9502: (e, t, n) => {
      var r = n(5681);
      e.exports = function (e) {
        var t = +e;
        return t != t || 0 === t ? 0 : r(t);
      };
    },
    4005: (e, t, n) => {
      var r = n(9502),
        i = Math.min;
      e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0;
      };
    },
    3060: (e, t, n) => {
      var r = n(9586),
        i = Object;
      e.exports = function (e) {
        return i(r(e));
      };
    },
    1288: (e, t, n) => {
      var r = n(9413),
        i = n(8759),
        s = n(2071),
        o = n(2964),
        a = n(7999),
        l = n(211),
        c = TypeError,
        u = l("toPrimitive");
      e.exports = function (e, t) {
        if (!i(e) || s(e)) return e;
        var n,
          l = o(e, u);
        if (l) {
          if (
            (void 0 === t && (t = "default"), (n = r(l, e, t)), !i(n) || s(n))
          )
            return n;
          throw c("Can't convert object to primitive value");
        }
        return void 0 === t && (t = "number"), a(e, t);
      };
    },
    2258: (e, t, n) => {
      var r = n(1288),
        i = n(2071);
      e.exports = function (e) {
        var t = r(e, "string");
        return i(t) ? t : t + "";
      };
    },
    2371: (e, t, n) => {
      var r = {};
      (r[n(211)("toStringTag")] = "z"),
        (e.exports = "[object z]" === String(r));
    },
    4059: (e, t, n) => {
      var r = n(375),
        i = String;
      e.exports = function (e) {
        if ("Symbol" === r(e))
          throw TypeError("Cannot convert a Symbol value to a string");
        return i(e);
      };
    },
    9268: (e) => {
      var t = String;
      e.exports = function (e) {
        try {
          return t(e);
        } catch (e) {
          return "Object";
        }
      };
    },
    5422: (e, t, n) => {
      var r = n(8240),
        i = 0,
        s = Math.random(),
        o = r((1).toString);
      e.exports = function (e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + o(++i + s, 36);
      };
    },
    1876: (e, t, n) => {
      var r = n(5558);
      e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    8202: (e, t, n) => {
      var r = n(5283),
        i = n(3677);
      e.exports =
        r &&
        i(function () {
          return (
            42 !=
            Object.defineProperty(function () {}, "prototype", {
              value: 42,
              writable: !1,
            }).prototype
          );
        });
    },
    640: (e, t, n) => {
      var r = n(2086),
        i = n(930),
        s = r.WeakMap;
      e.exports = i(s) && /native code/.test(String(s));
    },
    211: (e, t, n) => {
      var r = n(2086),
        i = n(9197),
        s = n(9606),
        o = n(5422),
        a = n(5558),
        l = n(1876),
        c = r.Symbol,
        u = i("wks"),
        d = l ? c.for || c : (c && c.withoutSetter) || o;
      e.exports = function (e) {
        return s(u, e) || (u[e] = a && s(c, e) ? c[e] : d("Symbol." + e)), u[e];
      };
    },
    1557: (e, t, n) => {
      "use strict";
      var r = n(563),
        i = n(9606),
        s = n(2585),
        o = n(5516),
        a = n(7530),
        l = n(8474),
        c = n(1632),
        u = n(5070),
        d = n(1879),
        h = n(8945),
        g = n(8395),
        p = n(5283),
        f = n(3296);
      e.exports = function (e, t, n, m) {
        var v = "stackTraceLimit",
          b = m ? 2 : 1,
          y = e.split("."),
          S = y[y.length - 1],
          w = r.apply(null, y);
        if (w) {
          var C = w.prototype;
          if ((!f && i(C, "cause") && delete C.cause, !n)) return w;
          var T = r("Error"),
            E = t(function (e, t) {
              var n = d(m ? t : e, void 0),
                r = m ? new w(e) : new w();
              return (
                void 0 !== n && s(r, "message", n),
                g(r, E, r.stack, 2),
                this && o(C, this) && u(r, this, E),
                arguments.length > b && h(r, arguments[b]),
                r
              );
            });
          if (
            ((E.prototype = C),
            "Error" !== S
              ? a
                ? a(E, T)
                : l(E, T, { name: !0 })
              : p && v in w && (c(E, w, v), c(E, w, "prepareStackTrace")),
            l(E, w),
            !f)
          )
            try {
              C.name !== S && s(C, "name", S), (C.constructor = E);
            } catch (e) {}
          return E;
        }
      };
    },
    740: (e, t, n) => {
      var r = n(1695),
        i = n(2086),
        s = n(7258),
        o = n(1557),
        a = "WebAssembly",
        l = i[a],
        c = 7 !== Error("e", { cause: 7 }).cause,
        exportGlobalErrorCauseWrapper = function (e, t) {
          var n = {};
          (n[e] = o(e, t, c)),
            r({ global: !0, constructor: !0, arity: 1, forced: c }, n);
        },
        exportWebAssemblyErrorCauseWrapper = function (e, t) {
          if (l && l[e]) {
            var n = {};
            (n[e] = o(a + "." + e, t, c)),
              r(
                { target: a, stat: !0, constructor: !0, arity: 1, forced: c },
                n
              );
          }
        };
      exportGlobalErrorCauseWrapper("Error", function (e) {
        return function Error(t) {
          return s(e, this, arguments);
        };
      }),
        exportGlobalErrorCauseWrapper("EvalError", function (e) {
          return function EvalError(t) {
            return s(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("RangeError", function (e) {
          return function RangeError(t) {
            return s(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("ReferenceError", function (e) {
          return function ReferenceError(t) {
            return s(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("SyntaxError", function (e) {
          return function SyntaxError(t) {
            return s(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("TypeError", function (e) {
          return function TypeError(t) {
            return s(e, this, arguments);
          };
        }),
        exportGlobalErrorCauseWrapper("URIError", function (e) {
          return function URIError(t) {
            return s(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("CompileError", function (e) {
          return function CompileError(t) {
            return s(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("LinkError", function (e) {
          return function LinkError(t) {
            return s(e, this, arguments);
          };
        }),
        exportWebAssemblyErrorCauseWrapper("RuntimeError", function (e) {
          return function RuntimeError(t) {
            return s(e, this, arguments);
          };
        });
    },
    3203: (e) => {
      (e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
  (e) => {
    var t;
    (t = 6412), e((e.s = t));
  },
]);
!(function (e) {
  ("object" == typeof exports && "undefined" != typeof module) ||
  "function" != typeof define ||
  !define.amd
    ? e()
    : define("inert", e);
})(function () {
  "use strict";
  var e,
    t,
    n,
    i,
    o,
    r,
    s = function (e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function d(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function u(e, t) {
    d(this, u),
      (this._inertManager = t),
      (this._rootElement = e),
      (this._managedNodes = new Set()),
      this._rootElement.hasAttribute("aria-hidden")
        ? (this._savedAriaHidden =
            this._rootElement.getAttribute("aria-hidden"))
        : (this._savedAriaHidden = null),
      this._rootElement.setAttribute("aria-hidden", "true"),
      this._makeSubtreeUnfocusable(this._rootElement),
      (this._observer = new MutationObserver(this._onMutation.bind(this))),
      this._observer.observe(this._rootElement, {
        attributes: !0,
        childList: !0,
        subtree: !0,
      });
  }
  function h(e, t) {
    d(this, h),
      (this._node = e),
      (this._overrodeFocusMethod = !1),
      (this._inertRoots = new Set([t])),
      (this._savedTabIndex = null),
      (this._destroyed = !1),
      this.ensureUntabbable();
  }
  function l(e) {
    if ((d(this, l), !e))
      throw new Error(
        "Missing required argument; InertManager needs to wrap a document."
      );
    (this._document = e),
      (this._managedNodes = new Map()),
      (this._inertRoots = new Map()),
      (this._observer = new MutationObserver(this._watchForInert.bind(this))),
      _(e.head || e.body || e.documentElement),
      "loading" === e.readyState
        ? e.addEventListener(
            "DOMContentLoaded",
            this._onDocumentLoaded.bind(this)
          )
        : this._onDocumentLoaded();
  }
  function c(e, t, n) {
    if (e.nodeType == Node.ELEMENT_NODE) {
      var i = e;
      if ((s = (t && t(i), i.shadowRoot))) return void c(s, t, s);
      if ("content" == i.localName) {
        for (
          var o = (s = i).getDistributedNodes ? s.getDistributedNodes() : [],
            r = 0;
          r < o.length;
          r++
        )
          c(o[r], t, n);
        return;
      }
      if ("slot" == i.localName) {
        for (
          var s,
            a = (s = i).assignedNodes ? s.assignedNodes({ flatten: !0 }) : [],
            d = 0;
          d < a.length;
          d++
        )
          c(a[d], t, n);
        return;
      }
    }
    for (var u = e.firstChild; null != u; ) c(u, t, n), (u = u.nextSibling);
  }
  function _(e) {
    var t;
    e.querySelector("style#inert-style, link#inert-style") ||
      ((t = document.createElement("style")).setAttribute("id", "inert-style"),
      (t.textContent =
        "\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n"),
      e.appendChild(t));
  }
  "undefined" != typeof window &&
    ((e = Array.prototype.slice),
    (t = Element.prototype.matches || Element.prototype.msMatchesSelector),
    (n = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "details",
      "summary",
      "iframe",
      "object",
      "embed",
      "[contenteditable]",
    ].join(",")),
    s(u, [
      {
        key: "destructor",
        value: function () {
          this._observer.disconnect(),
            this._rootElement &&
              (null !== this._savedAriaHidden
                ? this._rootElement.setAttribute(
                    "aria-hidden",
                    this._savedAriaHidden
                  )
                : this._rootElement.removeAttribute("aria-hidden")),
            this._managedNodes.forEach(function (e) {
              this._unmanageNode(e.node);
            }, this),
            (this._observer = null),
            (this._rootElement = null),
            (this._managedNodes = null),
            (this._inertManager = null);
        },
      },
      {
        key: "_makeSubtreeUnfocusable",
        value: function (e) {
          var t = this,
            n =
              (c(e, function (e) {
                return t._visitNode(e);
              }),
              document.activeElement);
          if (!document.body.contains(e)) {
            for (var i = e, o = void 0; i; ) {
              if (i.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                o = i;
                break;
              }
              i = i.parentNode;
            }
            o && (n = o.activeElement);
          }
          e.contains(n) &&
            (n.blur(), n === document.activeElement && document.body.focus());
        },
      },
      {
        key: "_visitNode",
        value: function (e) {
          e.nodeType === Node.ELEMENT_NODE &&
            (e !== this._rootElement &&
              e.hasAttribute("inert") &&
              this._adoptInertRoot(e),
            (t.call(e, n) || e.hasAttribute("tabindex")) &&
              this._manageNode(e));
        },
      },
      {
        key: "_manageNode",
        value: function (e) {
          (e = this._inertManager.register(e, this)), this._managedNodes.add(e);
        },
      },
      {
        key: "_unmanageNode",
        value: function (e) {
          (e = this._inertManager.deregister(e, this)) &&
            this._managedNodes.delete(e);
        },
      },
      {
        key: "_unmanageSubtree",
        value: function (e) {
          var t = this;
          c(e, function (e) {
            return t._unmanageNode(e);
          });
        },
      },
      {
        key: "_adoptInertRoot",
        value: function (e) {
          var t = this._inertManager.getInertRoot(e);
          t ||
            (this._inertManager.setInert(e, !0),
            (t = this._inertManager.getInertRoot(e))),
            t.managedNodes.forEach(function (e) {
              this._manageNode(e.node);
            }, this);
        },
      },
      {
        key: "_onMutation",
        value: function (t, n) {
          t.forEach(function (t) {
            var n,
              i = t.target;
            "childList" === t.type
              ? (e.call(t.addedNodes).forEach(function (e) {
                  this._makeSubtreeUnfocusable(e);
                }, this),
                e.call(t.removedNodes).forEach(function (e) {
                  this._unmanageSubtree(e);
                }, this))
              : "attributes" === t.type &&
                ("tabindex" === t.attributeName
                  ? this._manageNode(i)
                  : i !== this._rootElement &&
                    "inert" === t.attributeName &&
                    i.hasAttribute("inert") &&
                    (this._adoptInertRoot(i),
                    (n = this._inertManager.getInertRoot(i)),
                    this._managedNodes.forEach(function (e) {
                      i.contains(e.node) && n._manageNode(e.node);
                    })));
          }, this);
        },
      },
      {
        key: "managedNodes",
        get: function () {
          return new Set(this._managedNodes);
        },
      },
      {
        key: "hasSavedAriaHidden",
        get: function () {
          return null !== this._savedAriaHidden;
        },
      },
      {
        key: "savedAriaHidden",
        set: function (e) {
          this._savedAriaHidden = e;
        },
        get: function () {
          return this._savedAriaHidden;
        },
      },
    ]),
    (i = u),
    s(h, [
      {
        key: "destructor",
        value: function () {
          var e;
          this._throwIfDestroyed(),
            this._node &&
              this._node.nodeType === Node.ELEMENT_NODE &&
              ((e = this._node),
              null !== this._savedTabIndex
                ? e.setAttribute("tabindex", this._savedTabIndex)
                : e.removeAttribute("tabindex"),
              this._overrodeFocusMethod && delete e.focus),
            (this._node = null),
            (this._inertRoots = null),
            (this._destroyed = !0);
        },
      },
      {
        key: "_throwIfDestroyed",
        value: function () {
          if (this.destroyed)
            throw new Error("Trying to access destroyed InertNode");
        },
      },
      {
        key: "ensureUntabbable",
        value: function () {
          var e;
          this.node.nodeType === Node.ELEMENT_NODE &&
            ((e = this.node),
            t.call(e, n)
              ? (-1 === e.tabIndex && this.hasSavedTabIndex) ||
                (e.hasAttribute("tabindex") &&
                  (this._savedTabIndex = e.tabIndex),
                e.setAttribute("tabindex", "-1"),
                e.nodeType === Node.ELEMENT_NODE &&
                  ((e.focus = function () {}),
                  (this._overrodeFocusMethod = !0)))
              : e.hasAttribute("tabindex") &&
                ((this._savedTabIndex = e.tabIndex),
                e.removeAttribute("tabindex")));
        },
      },
      {
        key: "addInertRoot",
        value: function (e) {
          this._throwIfDestroyed(), this._inertRoots.add(e);
        },
      },
      {
        key: "removeInertRoot",
        value: function (e) {
          this._throwIfDestroyed(),
            this._inertRoots.delete(e),
            0 === this._inertRoots.size && this.destructor();
        },
      },
      {
        key: "destroyed",
        get: function () {
          return this._destroyed;
        },
      },
      {
        key: "hasSavedTabIndex",
        get: function () {
          return null !== this._savedTabIndex;
        },
      },
      {
        key: "node",
        get: function () {
          return this._throwIfDestroyed(), this._node;
        },
      },
      {
        key: "savedTabIndex",
        set: function (e) {
          this._throwIfDestroyed(), (this._savedTabIndex = e);
        },
        get: function () {
          return this._throwIfDestroyed(), this._savedTabIndex;
        },
      },
    ]),
    (o = h),
    s(l, [
      {
        key: "setInert",
        value: function (e, t) {
          if (t) {
            if (
              !this._inertRoots.has(e) &&
              ((t = new i(e, this)),
              e.setAttribute("inert", ""),
              this._inertRoots.set(e, t),
              !this._document.body.contains(e))
            )
              for (var n = e.parentNode; n; )
                11 === n.nodeType && _(n), (n = n.parentNode);
          } else
            this._inertRoots.has(e) &&
              (this._inertRoots.get(e).destructor(),
              this._inertRoots.delete(e),
              e.removeAttribute("inert"));
        },
      },
      {
        key: "getInertRoot",
        value: function (e) {
          return this._inertRoots.get(e);
        },
      },
      {
        key: "register",
        value: function (e, t) {
          var n = this._managedNodes.get(e);
          return (
            void 0 !== n ? n.addInertRoot(t) : (n = new o(e, t)),
            this._managedNodes.set(e, n),
            n
          );
        },
      },
      {
        key: "deregister",
        value: function (e, t) {
          var n = this._managedNodes.get(e);
          return n
            ? (n.removeInertRoot(t),
              n.destroyed && this._managedNodes.delete(e),
              n)
            : null;
        },
      },
      {
        key: "_onDocumentLoaded",
        value: function () {
          e
            .call(this._document.querySelectorAll("[inert]"))
            .forEach(function (e) {
              this.setInert(e, !0);
            }, this),
            this._observer.observe(
              this._document.body || this._document.documentElement,
              { attributes: !0, subtree: !0, childList: !0 }
            );
        },
      },
      {
        key: "_watchForInert",
        value: function (n, i) {
          var o = this;
          n.forEach(function (n) {
            switch (n.type) {
              case "childList":
                e.call(n.addedNodes).forEach(function (n) {
                  var i;
                  n.nodeType === Node.ELEMENT_NODE &&
                    ((i = e.call(n.querySelectorAll("[inert]"))),
                    t.call(n, "[inert]") && i.unshift(n),
                    i.forEach(function (e) {
                      this.setInert(e, !0);
                    }, o));
                }, o);
                break;
              case "attributes":
                if ("inert" !== n.attributeName) return;
                var i = n.target,
                  r = i.hasAttribute("inert");
                o.setInert(i, r);
            }
          }, this);
        },
      },
    ]),
    (s = l),
    HTMLElement.prototype.hasOwnProperty("inert") ||
      ((r = new s(document)),
      Object.defineProperty(HTMLElement.prototype, "inert", {
        enumerable: !0,
        get: function () {
          return this.hasAttribute("inert");
        },
        set: function (e) {
          r.setInert(this, e);
        },
      })));
});
var runtime = (function (t) {
  "use strict";
  var r,
    e = Object.prototype,
    n = e.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, r, e) {
        t[r] = e.value;
      },
    i =
      (w = "function" == typeof Symbol ? Symbol : {}).iterator || "@@iterator",
    a = w.asyncIterator || "@@asyncIterator",
    c = w.toStringTag || "@@toStringTag";
  function u(t, r, e) {
    return (
      Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[r]
    );
  }
  try {
    u({}, "");
  } catch (e) {
    u = function (t, r, e) {
      return (t[r] = e);
    };
  }
  function h(t, e, n, i) {
    var a, c, u, h;
    (e = e && e.prototype instanceof v ? e : v),
      (e = Object.create(e.prototype)),
      (i = new O(i || []));
    return (
      o(e, "_invoke", {
        value:
          ((a = t),
          (c = n),
          (u = i),
          (h = f),
          function (t, e) {
            if (h === p) throw new Error("Generator is already running");
            if (h === y) {
              if ("throw" === t) throw e;
              return G();
            }
            for (u.method = t, u.arg = e; ; ) {
              var n = u.delegate;
              if (
                n &&
                ((n = (function t(e, n) {
                  var o = n.method,
                    i = e.iterator[o];
                  return i === r
                    ? ((n.delegate = null),
                      ("throw" === o &&
                        e.iterator.return &&
                        ((n.method = "return"),
                        (n.arg = r),
                        t(e, n),
                        "throw" === n.method)) ||
                        ("return" !== o &&
                          ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "The iterator does not provide a '" + o + "' method"
                          )))),
                      g)
                    : "throw" === (o = l(i, e.iterator, n.arg)).type
                    ? ((n.method = "throw"),
                      (n.arg = o.arg),
                      (n.delegate = null),
                      g)
                    : (i = o.arg)
                    ? i.done
                      ? ((n[e.resultName] = i.value),
                        (n.next = e.nextLoc),
                        "return" !== n.method &&
                          ((n.method = "next"), (n.arg = r)),
                        (n.delegate = null),
                        g)
                      : i
                    : ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "iterator result is not an object"
                      )),
                      (n.delegate = null),
                      g);
                })(n, u)),
                n)
              ) {
                if (n === g) continue;
                return n;
              }
              if ("next" === u.method) u.sent = u._sent = u.arg;
              else if ("throw" === u.method) {
                if (h === f) throw ((h = y), u.arg);
                u.dispatchException(u.arg);
              } else "return" === u.method && u.abrupt("return", u.arg);
              if (((h = p), "normal" === (n = l(a, c, u)).type)) {
                if (((h = u.done ? y : s), n.arg !== g))
                  return { value: n.arg, done: u.done };
              } else
                "throw" === n.type &&
                  ((h = y), (u.method = "throw"), (u.arg = n.arg));
            }
          }),
      }),
      e
    );
  }
  function l(t, r, e) {
    try {
      return { type: "normal", arg: t.call(r, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  t.wrap = h;
  var f = "suspendedStart",
    s = "suspendedYield",
    p = "executing",
    y = "completed",
    g = {};
  function v() {}
  function d() {}
  function m() {}
  var w,
    b,
    L =
      ((b =
        (b =
          (u((w = {}), i, function () {
            return this;
          }),
          Object.getPrototypeOf)) && b(b(k([])))) &&
        b !== e &&
        n.call(b, i) &&
        (w = b),
      (m.prototype = v.prototype = Object.create(w)));
  function x(t) {
    ["next", "throw", "return"].forEach(function (r) {
      u(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function E(t, r) {
    var e;
    o(this, "_invoke", {
      value: function (o, i) {
        function a() {
          return new r(function (e, a) {
            !(function e(o, i, a, c) {
              var u;
              if ("throw" !== (o = l(t[o], t, i)).type)
                return (i = (u = o.arg).value) &&
                  "object" == typeof i &&
                  n.call(i, "__await")
                  ? r.resolve(i.__await).then(
                      function (t) {
                        e("next", t, a, c);
                      },
                      function (t) {
                        e("throw", t, a, c);
                      }
                    )
                  : r.resolve(i).then(
                      function (t) {
                        (u.value = t), a(u);
                      },
                      function (t) {
                        return e("throw", t, a, c);
                      }
                    );
              c(o.arg);
            })(o, i, e, a);
          });
        }
        return (e = e ? e.then(a, a) : a());
      },
    });
  }
  function j(t) {
    var r = { tryLoc: t[0] };
    1 in t && (r.catchLoc = t[1]),
      2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
      this.tryEntries.push(r);
  }
  function _(t) {
    var r = t.completion || {};
    (r.type = "normal"), delete r.arg, (t.completion = r);
  }
  function O(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(j, this),
      this.reset(!0);
  }
  function k(t) {
    if (t) {
      var e,
        o = t[i];
      if (o) return o.call(t);
      if ("function" == typeof t.next) return t;
      if (!isNaN(t.length))
        return (
          (e = -1),
          ((o = function o() {
            for (; ++e < t.length; )
              if (n.call(t, e)) return (o.value = t[e]), (o.done = !1), o;
            return (o.value = r), (o.done = !0), o;
          }).next = o)
        );
    }
    return { next: G };
  }
  function G() {
    return { value: r, done: !0 };
  }
  return (
    o(L, "constructor", { value: (d.prototype = m), configurable: !0 }),
    o(m, "constructor", { value: d, configurable: !0 }),
    (d.displayName = u(m, c, "GeneratorFunction")),
    (t.isGeneratorFunction = function (t) {
      return (
        !!(t = "function" == typeof t && t.constructor) &&
        (t === d || "GeneratorFunction" === (t.displayName || t.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, m)
          : ((t.__proto__ = m), u(t, c, "GeneratorFunction")),
        (t.prototype = Object.create(L)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    x(E.prototype),
    u(E.prototype, a, function () {
      return this;
    }),
    (t.AsyncIterator = E),
    (t.async = function (r, e, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new E(h(r, e, n, o), i);
      return t.isGeneratorFunction(e)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    x(L),
    u(L, c, "Generator"),
    u(L, i, function () {
      return this;
    }),
    u(L, "toString", function () {
      return "[object Generator]";
    }),
    (t.keys = function (t) {
      var r,
        e = Object(t),
        n = [];
      for (r in e) n.push(r);
      return (
        n.reverse(),
        function t() {
          for (; n.length; ) {
            var r = n.pop();
            if (r in e) return (t.value = r), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (t.values = k),
    (O.prototype = {
      constructor: O,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = r),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = r),
          this.tryEntries.forEach(_),
          !t)
        )
          for (var e in this)
            "t" === e.charAt(0) &&
              n.call(this, e) &&
              !isNaN(+e.slice(1)) &&
              (this[e] = r);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var e = this;
        function o(n, o) {
          return (
            (c.type = "throw"),
            (c.arg = t),
            (e.next = n),
            o && ((e.method = "next"), (e.arg = r)),
            !!o
          );
        }
        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ("root" === a.tryLoc) return o("end");
          if (a.tryLoc <= this.prev) {
            var u = n.call(a, "catchLoc"),
              h = n.call(a, "finallyLoc");
            if (u && h) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!h) throw new Error("try statement without catch or finally");
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var o = this.tryEntries[e];
          if (
            o.tryLoc <= this.prev &&
            n.call(o, "finallyLoc") &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        var a = (i =
          i &&
          ("break" === t || "continue" === t) &&
          i.tryLoc <= r &&
          r <= i.finallyLoc
            ? null
            : i)
          ? i.completion
          : {};
        return (
          (a.type = t),
          (a.arg = r),
          i
            ? ((this.method = "next"), (this.next = i.finallyLoc), g)
            : this.complete(a)
        );
      },
      complete: function (t, r) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && r && (this.next = r),
          g
        );
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e = this.tryEntries[r];
          if (e.finallyLoc === t)
            return this.complete(e.completion, e.afterLoc), _(e), g;
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e,
            n,
            o = this.tryEntries[r];
          if (o.tryLoc === t)
            return (
              "throw" === (e = o.completion).type && ((n = e.arg), _(o)), n
            );
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, e, n) {
        return (
          (this.delegate = { iterator: k(t), resultName: e, nextLoc: n }),
          "next" === this.method && (this.arg = r),
          g
        );
      },
    }),
    t
  );
})("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  "object" == typeof globalThis
    ? (globalThis.regeneratorRuntime = runtime)
    : Function("r", "regeneratorRuntime = r")(runtime);
}
!(function (t) {
  "use strict";
  var r, n, e;
  (n = {}),
    ((e = function (t) {
      if (n[t]) return n[t].exports;
      var o = (n[t] = { i: t, l: !1, exports: {} });
      return r[t].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }).m = r =
      [
        function (t, r, n) {
          n(1), n(67), n(68), (t.exports = n(72));
        },
        function (r, n, e) {
          var o = e(2),
            i = e(36),
            u = e(57),
            c = e(56);
          e = e(62);
          o(
            { target: "Array", proto: !0 },
            {
              at: function (r) {
                var n = i(this),
                  e = u(n);
                return (r = 0 <= (r = c(r)) ? r : e + r) < 0 || e <= r
                  ? t
                  : n[r];
              },
            }
          ),
            e("at");
        },
        function (r, n, e) {
          var o = e(3),
            i = e(4).f,
            u = e(40),
            c = e(43),
            f = e(34),
            a = e(50),
            p = e(61);
          r.exports = function (r, n) {
            var e,
              s,
              y,
              l = r.target,
              v = r.global,
              b = r.stat,
              g = v ? o : b ? o[l] || f(l, {}) : (o[l] || {}).prototype;
            if (g)
              for (e in n) {
                if (
                  ((s = n[e]),
                  (y = r.noTargetGet ? (y = i(g, e)) && y.value : g[e]),
                  !p(v ? e : l + (b ? "." : "#") + e, r.forced) && y !== t)
                ) {
                  if (typeof s == typeof y) continue;
                  a(s, y);
                }
                (r.sham || (y && y.sham)) && u(s, "sham", !0), c(g, e, s, r);
              }
          };
        },
        function (t, r) {
          function n(t) {
            return t && t.Math == Math && t;
          }
          t.exports =
            n("object" == typeof globalThis && globalThis) ||
            n("object" == typeof window && window) ||
            n("object" == typeof self && self) ||
            n("object" == typeof global && global) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        function (t, r, n) {
          var e = n(5),
            o = n(7),
            i = n(8),
            u = n(9),
            c = n(10),
            f = n(15),
            a = n(35),
            p = n(38),
            s = Object.getOwnPropertyDescriptor;
          r.f = e
            ? s
            : function (t, r) {
                if (((t = c(t)), (r = f(r)), p))
                  try {
                    return s(t, r);
                  } catch (t) {}
                if (a(t, r)) return u(!o(i.f, t, r), t[r]);
              };
        },
        function (t, r, n) {
          (n = n(6)),
            (t.exports = !n(function () {
              return (
                7 !=
                Object.defineProperty({}, 1, {
                  get: function () {
                    return 7;
                  },
                })[1]
              );
            }));
        },
        function (t, r) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        function (t, r) {
          var n = Function.prototype.call;
          t.exports = n.bind
            ? n.bind(n)
            : function () {
                return n.apply(n, arguments);
              };
        },
        function (t, r, n) {
          var e = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !e.call({ 1: 2 }, 1);
          r.f = i
            ? function (t) {
                return !!(t = o(this, t)) && t.enumerable;
              }
            : e;
        },
        function (t, r) {
          t.exports = function (t, r) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: r,
            };
          };
        },
        function (t, r, n) {
          var e = n(11),
            o = n(14);
          t.exports = function (t) {
            return e(o(t));
          };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(12),
            i = n(6),
            u = n(13),
            c = e.Object,
            f = o("".split);
          t.exports = i(function () {
            return !c("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == u(t) ? f(t, "") : c(t);
              }
            : c;
        },
        function (t, r) {
          var n = Function.prototype,
            e = n.bind,
            o = n.call,
            i = e && e.bind(o);
          t.exports = e
            ? function (t) {
                return t && i(o, t);
              }
            : function (t) {
                return (
                  t &&
                  function () {
                    return o.apply(t, arguments);
                  }
                );
              };
        },
        function (t, r, n) {
          var e = (n = n(12))({}.toString),
            o = n("".slice);
          t.exports = function (t) {
            return o(e(t), 8, -1);
          };
        },
        function (r, n, e) {
          var o = e(3).TypeError;
          r.exports = function (r) {
            if (r == t) throw o("Can't call method on " + r);
            return r;
          };
        },
        function (t, r, n) {
          var e = n(16),
            o = n(19);
          t.exports = function (t) {
            return (t = e(t, "string")), o(t) ? t : t + "";
          };
        },
        function (r, n, e) {
          var o = e(3),
            i = e(7),
            u = e(17),
            c = e(19),
            f = e(26),
            a = e(29),
            p = ((e = e(30)), o.TypeError),
            s = e("toPrimitive");
          r.exports = function (r, n) {
            if (!u(r) || c(r)) return r;
            var e = f(r, s);
            if (e) {
              if (((e = i(e, r, (n = n === t ? "default" : n))), !u(e) || c(e)))
                return e;
              throw p("Can't convert object to primitive value");
            }
            return a(r, (n = n === t ? "number" : n));
          };
        },
        function (t, r, n) {
          var e = n(18);
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : e(t);
          };
        },
        function (t, r) {
          t.exports = function (t) {
            return "function" == typeof t;
          };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(20),
            i = n(18),
            u = n(21),
            c = ((n = n(22)), e.Object);
          t.exports = n
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var r = o("Symbol");
                return i(r) && u(r.prototype, c(t));
              };
        },
        function (r, n, e) {
          var o = e(3),
            i = e(18);
          r.exports = function (r, n) {
            return arguments.length < 2
              ? ((e = o[r]), i(e) ? e : t)
              : o[r] && o[r][n];
            var e;
          };
        },
        function (t, r, n) {
          (n = n(12)), (t.exports = n({}.isPrototypeOf));
        },
        function (t, r, n) {
          (n = n(23)),
            (t.exports =
              n && !Symbol.sham && "symbol" == typeof Symbol.iterator);
        },
        function (t, r, n) {
          var e = n(24);
          n = n(6);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !n(function () {
              var t = Symbol();
              return (
                !String(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && e && e < 41)
              );
            });
        },
        function (t, r, n) {
          var e,
            o,
            i = n(3),
            u = n(25);
          (n = i.process), (i = i.Deno);
          !(o = (i = (i = (n && n.versions) || (i && i.version)) && i.v8)
            ? 0 < (e = i.split("."))[0] && e[0] < 4
              ? 1
              : +(e[0] + e[1])
            : o) &&
            u &&
            (!(e = u.match(/Edge\/(\d+)/)) || 74 <= e[1]) &&
            (e = u.match(/Chrome\/(\d+)/)) &&
            (o = +e[1]),
            (t.exports = o);
        },
        function (t, r, n) {
          (n = n(20)), (t.exports = n("navigator", "userAgent") || "");
        },
        function (r, n, e) {
          var o = e(27);
          r.exports = function (r, n) {
            return null == (n = r[n]) ? t : o(n);
          };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(18),
            i = n(28),
            u = e.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw u(i(t) + " is not a function");
          };
        },
        function (t, r, n) {
          var e = n(3).String;
          t.exports = function (t) {
            try {
              return e(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(7),
            i = n(18),
            u = n(17),
            c = e.TypeError;
          t.exports = function (t, r) {
            var n, e;
            if ("string" === r && i((n = t.toString)) && !u((e = o(n, t))))
              return e;
            if (i((n = t.valueOf)) && !u((e = o(n, t)))) return e;
            if ("string" !== r && i((n = t.toString)) && !u((e = o(n, t))))
              return e;
            throw c("Can't convert object to primitive value");
          };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(31),
            i = n(35),
            u = n(37),
            c = n(23),
            f = n(22),
            a = o("wks"),
            p = e.Symbol,
            s = p && p.for,
            y = f ? p : (p && p.withoutSetter) || u;
          t.exports = function (t) {
            var r;
            return (
              (i(a, t) && (c || "string" == typeof a[t])) ||
                ((r = "Symbol." + t),
                c && i(p, t) ? (a[t] = p[t]) : (a[t] = (f && s ? s : y)(r))),
              a[t]
            );
          };
        },
        function (r, n, e) {
          var o = e(32),
            i = e(33);
          (r.exports = function (r, n) {
            return i[r] || (i[r] = n !== t ? n : {});
          })("versions", []).push({
            version: "3.19.1",
            mode: o ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
          });
        },
        function (t, r) {
          t.exports = !1;
        },
        function (t, r, n) {
          var e = n(3),
            o = n(34);
          n = e[(n = "__core-js_shared__")] || o(n, {});
          t.exports = n;
        },
        function (t, r, n) {
          var e = n(3),
            o = Object.defineProperty;
          t.exports = function (t, r) {
            try {
              o(e, t, { value: r, configurable: !0, writable: !0 });
            } catch (n) {
              e[t] = r;
            }
            return r;
          };
        },
        function (t, r, n) {
          var e = n(12),
            o = n(36),
            i = e({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, r) {
              return i(o(t), r);
            };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(14),
            i = e.Object;
          t.exports = function (t) {
            return i(o(t));
          };
        },
        function (r, n, e) {
          e = e(12);
          var o = 0,
            i = Math.random(),
            u = e((1).toString);
          r.exports = function (r) {
            return "Symbol(" + (r === t ? "" : r) + ")_" + u(++o + i, 36);
          };
        },
        function (t, r, n) {
          var e = n(5),
            o = n(6),
            i = n(39);
          t.exports =
            !e &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (t, r, n) {
          var e = n(3),
            o = ((n = n(17)), e.document),
            i = n(o) && n(o.createElement);
          t.exports = function (t) {
            return i ? o.createElement(t) : {};
          };
        },
        function (t, r, n) {
          var e = n(5),
            o = n(41),
            i = n(9);
          t.exports = e
            ? function (t, r, n) {
                return o.f(t, r, i(1, n));
              }
            : function (t, r, n) {
                return (t[r] = n), t;
              };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(5),
            i = n(38),
            u = n(42),
            c = n(15),
            f = e.TypeError,
            a = Object.defineProperty;
          r.f = o
            ? a
            : function (t, r, n) {
                if ((u(t), (r = c(r)), u(n), i))
                  try {
                    return a(t, r, n);
                  } catch (t) {}
                if ("get" in n || "set" in n)
                  throw f("Accessors not supported");
                return "value" in n && (t[r] = n.value), t;
              };
        },
        function (t, r, n) {
          var e = n(3),
            o = n(17),
            i = e.String,
            u = e.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw u(i(t) + " is not an object");
          };
        },
        function (r, n, e) {
          var o = e(3),
            i = e(18),
            u = e(35),
            c = e(40),
            f = e(34),
            a = e(44),
            p = e(45),
            s = e(49).CONFIGURABLE,
            y = p.get,
            l = p.enforce,
            v = String(String).split("String");
          (r.exports = function (r, n, e, a) {
            var p = !!a && !!a.unsafe,
              y = !!a && !!a.enumerable,
              b = !!a && !!a.noTargetGet,
              g = a && a.name !== t ? a.name : n;
            i(e) &&
              ("Symbol(" === String(g).slice(0, 7) &&
                (g = "[" + String(g).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              (!u(e, "name") || (s && e.name !== g)) && c(e, "name", g),
              (a = l(e)).source ||
                (a.source = v.join("string" == typeof g ? g : ""))),
              r !== o
                ? (p ? !b && r[n] && (y = !0) : delete r[n],
                  y ? (r[n] = e) : c(r, n, e))
                : y
                ? (r[n] = e)
                : f(n, e);
          })(Function.prototype, "toString", function () {
            return (i(this) && y(this).source) || a(this);
          });
        },
        function (t, r, n) {
          var e = n(12),
            o = n(18),
            i = ((n = n(33)), e(Function.toString));
          o(n.inspectSource) ||
            (n.inspectSource = function (t) {
              return i(t);
            }),
            (t.exports = n.inspectSource);
        },
        function (t, r, n) {
          var e,
            o,
            i,
            u,
            c,
            f,
            a,
            p,
            s = n(46),
            y = n(3),
            l = n(12),
            v = n(17),
            b = n(40),
            g = n(35),
            d = n(33),
            h = n(47),
            x = ((n = n(48)), "Object already initialized"),
            m = y.TypeError;
          y = y.WeakMap;
          (a =
            s || d.state
              ? ((e = d.state || (d.state = new y())),
                (o = l(e.get)),
                (i = l(e.has)),
                (u = l(e.set)),
                (c = function (t, r) {
                  if (i(e, t)) throw new m(x);
                  return (r.facade = t), u(e, t, r), r;
                }),
                (f = function (t) {
                  return o(e, t) || {};
                }),
                function (t) {
                  return i(e, t);
                })
              : ((n[(p = h("state"))] = !0),
                (c = function (t, r) {
                  if (g(t, p)) throw new m(x);
                  return (r.facade = t), b(t, p, r), r;
                }),
                (f = function (t) {
                  return g(t, p) ? t[p] : {};
                }),
                function (t) {
                  return g(t, p);
                })),
            (t.exports = {
              set: c,
              get: f,
              has: a,
              enforce: function (t) {
                return a(t) ? f(t) : c(t, {});
              },
              getterFor: function (t) {
                return function (r) {
                  var n;
                  if (!v(r) || (n = f(r)).type !== t)
                    throw m("Incompatible receiver, " + t + " required");
                  return n;
                };
              },
            });
        },
        function (t, r, n) {
          var e = n(3),
            o = n(18);
          (n = n(44)), (e = e.WeakMap);
          t.exports = o(e) && /native code/.test(n(e));
        },
        function (t, r, n) {
          var e = n(31),
            o = n(37),
            i = e("keys");
          t.exports = function (t) {
            return i[t] || (i[t] = o(t));
          };
        },
        function (t, r) {
          t.exports = {};
        },
        function (t, r, n) {
          var e = n(5),
            o = n(35),
            i = Function.prototype,
            u = e && Object.getOwnPropertyDescriptor;
          (o = (n = o(i, "name")) && "something" === function () {}.name),
            (i = n && (!e || (e && u(i, "name").configurable)));
          t.exports = { EXISTS: n, PROPER: o, CONFIGURABLE: i };
        },
        function (t, r, n) {
          var e = n(35),
            o = n(51),
            i = n(4),
            u = n(41);
          t.exports = function (t, r) {
            for (var n = o(r), c = u.f, f = i.f, a = 0; a < n.length; a++) {
              var p = n[a];
              e(t, p) || c(t, p, f(r, p));
            }
          };
        },
        function (t, r, n) {
          var e = n(20),
            o = n(12),
            i = n(52),
            u = n(60),
            c = n(42),
            f = o([].concat);
          t.exports =
            e("Reflect", "ownKeys") ||
            function (t) {
              var r = i.f(c(t)),
                n = u.f;
              return n ? f(r, n(t)) : r;
            };
        },
        function (t, r, n) {
          var e = n(53),
            o = n(59).concat("length", "prototype");
          r.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return e(t, o);
            };
        },
        function (t, r, n) {
          var e = n(12),
            o = n(35),
            i = n(10),
            u = n(54).indexOf,
            c = n(48),
            f = e([].push);
          t.exports = function (t, r) {
            var n,
              e = i(t),
              a = 0,
              p = [];
            for (n in e) !o(c, n) && o(e, n) && f(p, n);
            for (; r.length > a; ) o(e, (n = r[a++])) && (~u(p, n) || f(p, n));
            return p;
          };
        },
        function (t, r, n) {
          var e = n(10),
            o = n(55),
            i = n(57);
          n = function (t) {
            return function (r, n, u) {
              var c,
                f = e(r),
                a = i(f),
                p = o(u, a);
              if (t && n != n) {
                for (; p < a; ) if ((c = f[p++]) != c) return !0;
              } else
                for (; p < a; p++)
                  if ((t || p in f) && f[p] === n) return t || p || 0;
              return !t && -1;
            };
          };
          t.exports = { includes: n(!0), indexOf: n(!1) };
        },
        function (t, r, n) {
          var e = n(56),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, r) {
            return (t = e(t)) < 0 ? o(t + r, 0) : i(t, r);
          };
        },
        function (t, r) {
          var n = Math.ceil,
            e = Math.floor;
          t.exports = function (t) {
            return (t = +t) != t || 0 == t ? 0 : (0 < t ? e : n)(t);
          };
        },
        function (t, r, n) {
          var e = n(58);
          t.exports = function (t) {
            return e(t.length);
          };
        },
        function (t, r, n) {
          var e = n(56),
            o = Math.min;
          t.exports = function (t) {
            return 0 < t ? o(e(t), 9007199254740991) : 0;
          };
        },
        function (t, r) {
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        function (t, r) {
          r.f = Object.getOwnPropertySymbols;
        },
        function (t, r, n) {
          var e = n(6),
            o = n(18),
            i = /#|\.prototype\./,
            u =
              ((n = function (t, r) {
                return (t = c[u(t)]) == a || (t != f && (o(r) ? e(r) : !!r));
              }),
              (n.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase();
              })),
            c = (n.data = {}),
            f = (n.NATIVE = "N"),
            a = (n.POLYFILL = "P");
          t.exports = n;
        },
        function (r, n, e) {
          var o = e(30),
            i = e(63),
            u = ((e = e(41)), o("unscopables")),
            c = Array.prototype;
          c[u] == t && e.f(c, u, { configurable: !0, value: i(null) }),
            (r.exports = function (t) {
              c[u][t] = !0;
            });
        },
        function (r, n, e) {
          function o() {}
          function i(t) {
            return "<script>" + t + "</" + v + ">";
          }
          var u,
            c = e(42),
            f = e(64),
            a = e(59),
            p = e(48),
            s = e(66),
            y = e(39),
            l = ((e = e(47)), "prototype"),
            v = "script",
            b = e("IE_PROTO"),
            g = function () {
              try {
                u = new ActiveXObject("htmlfile");
              } catch (t) {}
              var t;
              g =
                "undefined" == typeof document || (document.domain && u)
                  ? (function (t) {
                      t.write(i("")), t.close();
                      var r = t.parentWindow.Object;
                      return (t = null), r;
                    })(u)
                  : (((t = y("iframe")).style.display = "none"),
                    s.appendChild(t),
                    (t.src = String("javascript:")),
                    (t = t.contentWindow.document).open(),
                    t.write(i("document.F=Object")),
                    t.close(),
                    t.F);
              for (var r = a.length; r--; ) delete g[l][a[r]];
              return g();
            };
          (p[b] = !0),
            (r.exports =
              Object.create ||
              function (r, n) {
                var e;
                return (
                  null !== r
                    ? ((o[l] = c(r)), (e = new o()), (o[l] = null), (e[b] = r))
                    : (e = g()),
                  n === t ? e : f(e, n)
                );
              });
        },
        function (t, r, n) {
          var e = n(5),
            o = n(41),
            i = n(42),
            u = n(10),
            c = n(65);
          t.exports = e
            ? Object.defineProperties
            : function (t, r) {
                i(t);
                for (var n, e = u(r), f = c(r), a = f.length, p = 0; p < a; )
                  o.f(t, (n = f[p++]), e[n]);
                return t;
              };
        },
        function (t, r, n) {
          var e = n(53),
            o = n(59);
          t.exports =
            Object.keys ||
            function (t) {
              return e(t, o);
            };
        },
        function (t, r, n) {
          (n = n(20)), (t.exports = n("document", "documentElement"));
        },
        function (t, r, n) {
          n(2)({ target: "Object", stat: !0 }, { hasOwn: n(35) });
        },
        function (r, n, e) {
          var o = e(2),
            i = e(12),
            u = e(14),
            c = e(56),
            f = e(69),
            a = ((e = e(6)), i("".charAt));
          o(
            {
              target: "String",
              proto: !0,
              forced: e(function () {
                return "\ud842" !== "𠮷".at(0);
              }),
            },
            {
              at: function (r) {
                var n = f(u(this)),
                  e = n.length;
                return (r = 0 <= (r = c(r)) ? r : e + r) < 0 || e <= r
                  ? t
                  : a(n, r);
              },
            }
          );
        },
        function (t, r, n) {
          var e = n(3),
            o = n(70),
            i = e.String;
          t.exports = function (t) {
            if ("Symbol" === o(t))
              throw TypeError("Cannot convert a Symbol value to a string");
            return i(t);
          };
        },
        function (r, n, e) {
          var o = e(3),
            i = e(71),
            u = e(18),
            c = e(13),
            f = e(30)("toStringTag"),
            a = o.Object,
            p =
              "Arguments" ==
              c(
                (function () {
                  return arguments;
                })()
              );
          r.exports = i
            ? c
            : function (r) {
                var n;
                return r === t
                  ? "Undefined"
                  : null === r
                  ? "Null"
                  : "string" ==
                    typeof (r = (function (t, r) {
                      try {
                        return t[r];
                      } catch (t) {}
                    })((n = a(r)), f))
                  ? r
                  : p
                  ? c(n)
                  : "Object" == (r = c(n)) && u(n.callee)
                  ? "Arguments"
                  : r;
              };
        },
        function (t, r, n) {
          var e = {};
          (e[n(30)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(e));
        },
        function (r, n, e) {
          var o = e(73),
            i = e(57),
            u = e(56),
            c = o.aTypedArray;
          (0, o.exportTypedArrayMethod)("at", function (r) {
            var n = c(this),
              e = i(n);
            return (r = 0 <= (r = u(r)) ? r : e + r) < 0 || e <= r ? t : n[r];
          });
        },
        function (r, n, e) {
          function o(t) {
            return !!y(t) && ((t = v(t)), l(C, t) || l(F, t));
          }
          var i,
            u,
            c,
            f = e(74),
            a = e(5),
            p = e(3),
            s = e(18),
            y = e(17),
            l = e(35),
            v = e(70),
            b = e(28),
            g = e(40),
            d = e(43),
            h = e(41).f,
            x = e(21),
            m = e(75),
            O = e(77),
            S = e(30),
            j = e(37),
            w = (P = p.Int8Array) && P.prototype,
            A = ((e = (e = p.Uint8ClampedArray) && e.prototype), P && m(P)),
            T = w && m(w),
            P = Object.prototype,
            _ = p.TypeError,
            E = ((S = S("toStringTag")), j("TYPED_ARRAY_TAG")),
            R = j("TYPED_ARRAY_CONSTRUCTOR"),
            I = f && !!O && "Opera" !== v(p.opera),
            C =
              ((f = !1),
              {
                Int8Array: 1,
                Uint8Array: 1,
                Uint8ClampedArray: 1,
                Int16Array: 2,
                Uint16Array: 2,
                Int32Array: 4,
                Uint32Array: 4,
                Float32Array: 4,
                Float64Array: 8,
              }),
            F = { BigInt64Array: 8, BigUint64Array: 8 };
          for (i in C) (c = (u = p[i]) && u.prototype) ? g(c, R, u) : (I = !1);
          for (i in F) (c = (u = p[i]) && u.prototype) && g(c, R, u);
          if (
            (!I || !s(A) || A === Function.prototype) &&
            ((A = function () {
              throw _("Incorrect invocation");
            }),
            I)
          )
            for (i in C) p[i] && O(p[i], A);
          if ((!I || !T || T === P) && ((T = A.prototype), I))
            for (i in C) p[i] && O(p[i].prototype, T);
          if ((I && m(e) !== T && O(e, T), a && !l(T, S)))
            for (i in ((f = !0),
            h(T, S, {
              get: function () {
                return y(this) ? this[E] : t;
              },
            }),
            C))
              p[i] && g(p[i], E, i);
          r.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: I,
            TYPED_ARRAY_CONSTRUCTOR: R,
            TYPED_ARRAY_TAG: f && E,
            aTypedArray: function (t) {
              if (o(t)) return t;
              throw _("Target is not a typed array");
            },
            aTypedArrayConstructor: function (t) {
              if (s(t) && (!O || x(A, t))) return t;
              throw _(b(t) + " is not a typed array constructor");
            },
            exportTypedArrayMethod: function (t, r, n) {
              if (a) {
                if (n)
                  for (var e in C)
                    if ((e = p[e]) && l(e.prototype, t))
                      try {
                        delete e.prototype[t];
                      } catch (t) {}
                (T[t] && !n) || d(T, t, (!n && I && w[t]) || r);
              }
            },
            exportTypedArrayStaticMethod: function (t, r, n) {
              var e, o;
              if (a) {
                if (O) {
                  if (n)
                    for (e in C)
                      if ((o = p[e]) && l(o, t))
                        try {
                          delete o[t];
                        } catch (t) {}
                  if (A[t] && !n) return;
                  try {
                    return d(A, t, (!n && I && A[t]) || r);
                  } catch (t) {}
                }
                for (e in C) !(o = p[e]) || (o[t] && !n) || d(o, t, r);
              }
            },
            isView: function (t) {
              return (
                !!y(t) && ("DataView" === (t = v(t)) || l(C, t) || l(F, t))
              );
            },
            isTypedArray: o,
            TypedArray: A,
            TypedArrayPrototype: T,
          };
        },
        function (t, r) {
          t.exports =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        },
        function (t, r, n) {
          var e = n(3),
            o = n(35),
            i = n(18),
            u = n(36),
            c = n(47),
            f = ((n = n(76)), c("IE_PROTO")),
            a = e.Object,
            p = a.prototype;
          t.exports = n
            ? a.getPrototypeOf
            : function (t) {
                var r = u(t);
                return o(r, f)
                  ? r[f]
                  : ((t = r.constructor),
                    i(t) && r instanceof t
                      ? t.prototype
                      : r instanceof a
                      ? p
                      : null);
              };
        },
        function (t, r, n) {
          (n = n(6)),
            (t.exports = !n(function () {
              function t() {}
              return (
                (t.prototype.constructor = null),
                Object.getPrototypeOf(new t()) !== t.prototype
              );
            }));
        },
        function (r, n, e) {
          var o = e(12),
            i = e(42),
            u = e(78);
          r.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var t,
                    r = !1,
                    n = {};
                  try {
                    (t = o(
                      Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        "__proto__"
                      ).set
                    ))(n, []),
                      (r = n instanceof Array);
                  } catch (n) {}
                  return function (n, e) {
                    return i(n), u(e), r ? t(n, e) : (n.__proto__ = e), n;
                  };
                })()
              : t);
        },
        function (t, r, n) {
          var e = n(3),
            o = n(18),
            i = e.String,
            u = e.TypeError;
          t.exports = function (t) {
            if ("object" == typeof t || o(t)) return t;
            throw u("Can't set " + i(t) + " as a prototype");
          };
        },
      ]),
    (e.c = n),
    (e.d = function (t, r, n) {
      e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t;
      if (4 & r && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (e.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & r && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            n,
            o,
            function (r) {
              return t[r];
            }.bind(null, o)
          );
      return n;
    }),
    (e.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (e.p = ""),
    e((e.s = 0));
})(); /*! This file is auto-generated */
!(function () {
  "use strict";
  var n = {
      d: function (t, r) {
        for (var e in r)
          n.o(r, e) &&
            !n.o(t, e) &&
            Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
      },
      o: function (n, t) {
        return Object.prototype.hasOwnProperty.call(n, t);
      },
      r: function (n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      },
    },
    t = {};
  n.r(t),
    n.d(t, {
      actions: function () {
        return S;
      },
      addAction: function () {
        return m;
      },
      addFilter: function () {
        return p;
      },
      applyFilters: function () {
        return k;
      },
      createHooks: function () {
        return f;
      },
      currentAction: function () {
        return w;
      },
      currentFilter: function () {
        return I;
      },
      defaultHooks: function () {
        return h;
      },
      didAction: function () {
        return O;
      },
      didFilter: function () {
        return j;
      },
      doAction: function () {
        return b;
      },
      doingAction: function () {
        return x;
      },
      doingFilter: function () {
        return T;
      },
      filters: function () {
        return z;
      },
      hasAction: function () {
        return _;
      },
      hasFilter: function () {
        return y;
      },
      removeAction: function () {
        return A;
      },
      removeAllActions: function () {
        return F;
      },
      removeAllFilters: function () {
        return g;
      },
      removeFilter: function () {
        return v;
      },
    });
  var r = function (n) {
    return "string" != typeof n || "" === n
      ? (console.error("The namespace must be a non-empty string."), !1)
      : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n) ||
          (console.error(
            "The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."
          ),
          !1);
  };
  var e = function (n) {
    return "string" != typeof n || "" === n
      ? (console.error("The hook name must be a non-empty string."), !1)
      : /^__/.test(n)
      ? (console.error("The hook name cannot begin with `__`."), !1)
      : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n) ||
        (console.error(
          "The hook name can only contain numbers, letters, dashes, periods and underscores."
        ),
        !1);
  };
  var o = function (n, t) {
    return function (o, i, c, s = 10) {
      const u = n[t];
      if (!e(o)) return;
      if (!r(i)) return;
      if ("function" != typeof c)
        return void console.error("The hook callback must be a function.");
      if ("number" != typeof s)
        return void console.error(
          "If specified, the hook priority must be a number."
        );
      const l = { callback: c, priority: s, namespace: i };
      if (u[o]) {
        const n = u[o].handlers;
        let t;
        for (t = n.length; t > 0 && !(s >= n[t - 1].priority); t--);
        t === n.length ? (n[t] = l) : n.splice(t, 0, l),
          u.__current.forEach((n) => {
            n.name === o && n.currentIndex >= t && n.currentIndex++;
          });
      } else u[o] = { handlers: [l], runs: 0 };
      "hookAdded" !== o && n.doAction("hookAdded", o, i, c, s);
    };
  };
  var i = function (n, t, o = !1) {
    return function (i, c) {
      const s = n[t];
      if (!e(i)) return;
      if (!o && !r(c)) return;
      if (!s[i]) return 0;
      let u = 0;
      if (o)
        (u = s[i].handlers.length), (s[i] = { runs: s[i].runs, handlers: [] });
      else {
        const n = s[i].handlers;
        for (let t = n.length - 1; t >= 0; t--)
          n[t].namespace === c &&
            (n.splice(t, 1),
            u++,
            s.__current.forEach((n) => {
              n.name === i && n.currentIndex >= t && n.currentIndex--;
            }));
      }
      return "hookRemoved" !== i && n.doAction("hookRemoved", i, c), u;
    };
  };
  var c = function (n, t) {
    return function (r, e) {
      const o = n[t];
      return void 0 !== e
        ? r in o && o[r].handlers.some((n) => n.namespace === e)
        : r in o;
    };
  };
  var s = function (n, t, r = !1) {
    return function (e, ...o) {
      const i = n[t];
      i[e] || (i[e] = { handlers: [], runs: 0 }), i[e].runs++;
      const c = i[e].handlers;
      if (!c || !c.length) return r ? o[0] : void 0;
      const s = { name: e, currentIndex: 0 };
      for (i.__current.push(s); s.currentIndex < c.length; ) {
        const n = c[s.currentIndex].callback.apply(null, o);
        r && (o[0] = n), s.currentIndex++;
      }
      return i.__current.pop(), r ? o[0] : void 0;
    };
  };
  var u = function (n, t) {
    return function () {
      var r;
      const e = n[t];
      return null !== (r = e.__current[e.__current.length - 1]?.name) &&
        void 0 !== r
        ? r
        : null;
    };
  };
  var l = function (n, t) {
    return function (r) {
      const e = n[t];
      return void 0 === r
        ? void 0 !== e.__current[0]
        : !!e.__current[0] && r === e.__current[0].name;
    };
  };
  var a = function (n, t) {
    return function (r) {
      const o = n[t];
      if (e(r)) return o[r] && o[r].runs ? o[r].runs : 0;
    };
  };
  class d {
    constructor() {
      (this.actions = Object.create(null)),
        (this.actions.__current = []),
        (this.filters = Object.create(null)),
        (this.filters.__current = []),
        (this.addAction = o(this, "actions")),
        (this.addFilter = o(this, "filters")),
        (this.removeAction = i(this, "actions")),
        (this.removeFilter = i(this, "filters")),
        (this.hasAction = c(this, "actions")),
        (this.hasFilter = c(this, "filters")),
        (this.removeAllActions = i(this, "actions", !0)),
        (this.removeAllFilters = i(this, "filters", !0)),
        (this.doAction = s(this, "actions")),
        (this.applyFilters = s(this, "filters", !0)),
        (this.currentAction = u(this, "actions")),
        (this.currentFilter = u(this, "filters")),
        (this.doingAction = l(this, "actions")),
        (this.doingFilter = l(this, "filters")),
        (this.didAction = a(this, "actions")),
        (this.didFilter = a(this, "filters"));
    }
  }
  var f = function () {
    return new d();
  };
  const h = f(),
    {
      addAction: m,
      addFilter: p,
      removeAction: A,
      removeFilter: v,
      hasAction: _,
      hasFilter: y,
      removeAllActions: F,
      removeAllFilters: g,
      doAction: b,
      applyFilters: k,
      currentAction: w,
      currentFilter: I,
      doingAction: x,
      doingFilter: T,
      didAction: O,
      didFilter: j,
      actions: S,
      filters: z,
    } = h;
  (window.wp = window.wp || {}).hooks = t;
})(); /*! This file is auto-generated */
!(function () {
  var t = {
      124: function (t, e, n) {
        var r;
        !(function () {
          "use strict";
          var i = {
            not_string: /[^s]/,
            not_bool: /[^t]/,
            not_type: /[^T]/,
            not_primitive: /[^v]/,
            number: /[diefg]/,
            numeric_arg: /[bcdiefguxX]/,
            json: /[j]/,
            not_json: /[^j]/,
            text: /^[^\x25]+/,
            modulo: /^\x25{2}/,
            placeholder:
              /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
            key: /^([a-z_][a-z_\d]*)/i,
            key_access: /^\.([a-z_][a-z_\d]*)/i,
            index_access: /^\[(\d+)\]/,
            sign: /^[+-]/,
          };
          function o(t) {
            return (function (t, e) {
              var n,
                r,
                a,
                s,
                u,
                l,
                c,
                p,
                f,
                d = 1,
                h = t.length,
                g = "";
              for (r = 0; r < h; r++)
                if ("string" == typeof t[r]) g += t[r];
                else if ("object" == typeof t[r]) {
                  if ((s = t[r]).keys)
                    for (n = e[d], a = 0; a < s.keys.length; a++) {
                      if (null == n)
                        throw new Error(
                          o(
                            '[sprintf] Cannot access property "%s" of undefined value "%s"',
                            s.keys[a],
                            s.keys[a - 1]
                          )
                        );
                      n = n[s.keys[a]];
                    }
                  else n = s.param_no ? e[s.param_no] : e[d++];
                  if (
                    (i.not_type.test(s.type) &&
                      i.not_primitive.test(s.type) &&
                      n instanceof Function &&
                      (n = n()),
                    i.numeric_arg.test(s.type) &&
                      "number" != typeof n &&
                      isNaN(n))
                  )
                    throw new TypeError(
                      o("[sprintf] expecting number but found %T", n)
                    );
                  switch ((i.number.test(s.type) && (p = n >= 0), s.type)) {
                    case "b":
                      n = parseInt(n, 10).toString(2);
                      break;
                    case "c":
                      n = String.fromCharCode(parseInt(n, 10));
                      break;
                    case "d":
                    case "i":
                      n = parseInt(n, 10);
                      break;
                    case "j":
                      n = JSON.stringify(
                        n,
                        null,
                        s.width ? parseInt(s.width) : 0
                      );
                      break;
                    case "e":
                      n = s.precision
                        ? parseFloat(n).toExponential(s.precision)
                        : parseFloat(n).toExponential();
                      break;
                    case "f":
                      n = s.precision
                        ? parseFloat(n).toFixed(s.precision)
                        : parseFloat(n);
                      break;
                    case "g":
                      n = s.precision
                        ? String(Number(n.toPrecision(s.precision)))
                        : parseFloat(n);
                      break;
                    case "o":
                      n = (parseInt(n, 10) >>> 0).toString(8);
                      break;
                    case "s":
                      (n = String(n)),
                        (n = s.precision ? n.substring(0, s.precision) : n);
                      break;
                    case "t":
                      (n = String(!!n)),
                        (n = s.precision ? n.substring(0, s.precision) : n);
                      break;
                    case "T":
                      (n = Object.prototype.toString
                        .call(n)
                        .slice(8, -1)
                        .toLowerCase()),
                        (n = s.precision ? n.substring(0, s.precision) : n);
                      break;
                    case "u":
                      n = parseInt(n, 10) >>> 0;
                      break;
                    case "v":
                      (n = n.valueOf()),
                        (n = s.precision ? n.substring(0, s.precision) : n);
                      break;
                    case "x":
                      n = (parseInt(n, 10) >>> 0).toString(16);
                      break;
                    case "X":
                      n = (parseInt(n, 10) >>> 0).toString(16).toUpperCase();
                  }
                  i.json.test(s.type)
                    ? (g += n)
                    : (!i.number.test(s.type) || (p && !s.sign)
                        ? (f = "")
                        : ((f = p ? "+" : "-"),
                          (n = n.toString().replace(i.sign, ""))),
                      (l = s.pad_char
                        ? "0" === s.pad_char
                          ? "0"
                          : s.pad_char.charAt(1)
                        : " "),
                      (c = s.width - (f + n).length),
                      (u = s.width && c > 0 ? l.repeat(c) : ""),
                      (g += s.align
                        ? f + n + u
                        : "0" === l
                        ? f + u + n
                        : u + f + n));
                }
              return g;
            })(
              (function (t) {
                if (s[t]) return s[t];
                var e,
                  n = t,
                  r = [],
                  o = 0;
                for (; n; ) {
                  if (null !== (e = i.text.exec(n))) r.push(e[0]);
                  else if (null !== (e = i.modulo.exec(n))) r.push("%");
                  else {
                    if (null === (e = i.placeholder.exec(n)))
                      throw new SyntaxError("[sprintf] unexpected placeholder");
                    if (e[2]) {
                      o |= 1;
                      var a = [],
                        u = e[2],
                        l = [];
                      if (null === (l = i.key.exec(u)))
                        throw new SyntaxError(
                          "[sprintf] failed to parse named argument key"
                        );
                      for (
                        a.push(l[1]);
                        "" !== (u = u.substring(l[0].length));

                      )
                        if (null !== (l = i.key_access.exec(u))) a.push(l[1]);
                        else {
                          if (null === (l = i.index_access.exec(u)))
                            throw new SyntaxError(
                              "[sprintf] failed to parse named argument key"
                            );
                          a.push(l[1]);
                        }
                      e[2] = a;
                    } else o |= 2;
                    if (3 === o)
                      throw new Error(
                        "[sprintf] mixing positional and named placeholders is not (yet) supported"
                      );
                    r.push({
                      placeholder: e[0],
                      param_no: e[1],
                      keys: e[2],
                      sign: e[3],
                      pad_char: e[4],
                      align: e[5],
                      width: e[6],
                      precision: e[7],
                      type: e[8],
                    });
                  }
                  n = n.substring(e[0].length);
                }
                return (s[t] = r);
              })(t),
              arguments
            );
          }
          function a(t, e) {
            return o.apply(null, [t].concat(e || []));
          }
          var s = Object.create(null);
          (e.sprintf = o),
            (e.vsprintf = a),
            "undefined" != typeof window &&
              ((window.sprintf = o),
              (window.vsprintf = a),
              void 0 ===
                (r = function () {
                  return { sprintf: o, vsprintf: a };
                }.call(e, n, e, t)) || (t.exports = r));
        })();
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r](o, o.exports, n), o.exports;
  }
  (n.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return n.d(e, { a: e }), e;
  }),
    (n.d = function (t, e) {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var r = {};
  !(function () {
    "use strict";
    n.r(r),
      n.d(r, {
        __: function () {
          return F;
        },
        _n: function () {
          return j;
        },
        _nx: function () {
          return L;
        },
        _x: function () {
          return S;
        },
        createI18n: function () {
          return x;
        },
        defaultI18n: function () {
          return _;
        },
        getLocaleData: function () {
          return v;
        },
        hasTranslation: function () {
          return D;
        },
        isRTL: function () {
          return T;
        },
        resetLocaleData: function () {
          return w;
        },
        setLocaleData: function () {
          return m;
        },
        sprintf: function () {
          return o;
        },
        subscribe: function () {
          return k;
        },
      });
    var t = n(124),
      e = n.n(t);
    const i = (function (t, e) {
      var n,
        r,
        i = 0;
      function o() {
        var o,
          a,
          s = n,
          u = arguments.length;
        t: for (; s; ) {
          if (s.args.length === arguments.length) {
            for (a = 0; a < u; a++)
              if (s.args[a] !== arguments[a]) {
                s = s.next;
                continue t;
              }
            return (
              s !== n &&
                (s === r && (r = s.prev),
                (s.prev.next = s.next),
                s.next && (s.next.prev = s.prev),
                (s.next = n),
                (s.prev = null),
                (n.prev = s),
                (n = s)),
              s.val
            );
          }
          s = s.next;
        }
        for (o = new Array(u), a = 0; a < u; a++) o[a] = arguments[a];
        return (
          (s = { args: o, val: t.apply(null, o) }),
          n ? ((n.prev = s), (s.next = n)) : (r = s),
          i === e.maxSize ? ((r = r.prev).next = null) : i++,
          (n = s),
          s.val
        );
      }
      return (
        (e = e || {}),
        (o.clear = function () {
          (n = null), (r = null), (i = 0);
        }),
        o
      );
    })(console.error);
    function o(t, ...n) {
      try {
        return e().sprintf(t, ...n);
      } catch (e) {
        return e instanceof Error && i("sprintf error: \n\n" + e.toString()), t;
      }
    }
    var a, s, u, l;
    (a = {
      "(": 9,
      "!": 8,
      "*": 7,
      "/": 7,
      "%": 7,
      "+": 6,
      "-": 6,
      "<": 5,
      "<=": 5,
      ">": 5,
      ">=": 5,
      "==": 4,
      "!=": 4,
      "&&": 3,
      "||": 2,
      "?": 1,
      "?:": 1,
    }),
      (s = ["(", "?"]),
      (u = { ")": ["("], ":": ["?", "?:"] }),
      (l = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/);
    var c = {
      "!": function (t) {
        return !t;
      },
      "*": function (t, e) {
        return t * e;
      },
      "/": function (t, e) {
        return t / e;
      },
      "%": function (t, e) {
        return t % e;
      },
      "+": function (t, e) {
        return t + e;
      },
      "-": function (t, e) {
        return t - e;
      },
      "<": function (t, e) {
        return t < e;
      },
      "<=": function (t, e) {
        return t <= e;
      },
      ">": function (t, e) {
        return t > e;
      },
      ">=": function (t, e) {
        return t >= e;
      },
      "==": function (t, e) {
        return t === e;
      },
      "!=": function (t, e) {
        return t !== e;
      },
      "&&": function (t, e) {
        return t && e;
      },
      "||": function (t, e) {
        return t || e;
      },
      "?:": function (t, e, n) {
        if (t) throw e;
        return n;
      },
    };
    function p(t) {
      var e = (function (t) {
        for (var e, n, r, i, o = [], c = []; (e = t.match(l)); ) {
          for (
            n = e[0], (r = t.substr(0, e.index).trim()) && o.push(r);
            (i = c.pop());

          ) {
            if (u[n]) {
              if (u[n][0] === i) {
                n = u[n][1] || n;
                break;
              }
            } else if (s.indexOf(i) >= 0 || a[i] < a[n]) {
              c.push(i);
              break;
            }
            o.push(i);
          }
          u[n] || c.push(n), (t = t.substr(e.index + n.length));
        }
        return (t = t.trim()) && o.push(t), o.concat(c.reverse());
      })(t);
      return function (t) {
        return (function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u = [];
          for (n = 0; n < t.length; n++) {
            if (((a = t[n]), (o = c[a]))) {
              for (r = o.length, i = Array(r); r--; ) i[r] = u.pop();
              try {
                s = o.apply(null, i);
              } catch (t) {
                return t;
              }
            } else s = e.hasOwnProperty(a) ? e[a] : +a;
            u.push(s);
          }
          return u[0];
        })(e, t);
      };
    }
    var f = { contextDelimiter: "", onMissingKey: null };
    function d(t, e) {
      var n;
      for (n in ((this.data = t),
      (this.pluralForms = {}),
      (this.options = {}),
      f))
        this.options[n] = void 0 !== e && n in e ? e[n] : f[n];
    }
    (d.prototype.getPluralForm = function (t, e) {
      var n,
        r,
        i,
        o = this.pluralForms[t];
      return (
        o ||
          ("function" !=
            typeof (i =
              (n = this.data[t][""])["Plural-Forms"] ||
              n["plural-forms"] ||
              n.plural_forms) &&
            ((r = (function (t) {
              var e, n, r;
              for (e = t.split(";"), n = 0; n < e.length; n++)
                if (0 === (r = e[n].trim()).indexOf("plural="))
                  return r.substr(7);
            })(n["Plural-Forms"] || n["plural-forms"] || n.plural_forms)),
            (i = (function (t) {
              var e = p(t);
              return function (t) {
                return +e({ n: t });
              };
            })(r))),
          (o = this.pluralForms[t] = i)),
        o(e)
      );
    }),
      (d.prototype.dcnpgettext = function (t, e, n, r, i) {
        var o, a, s;
        return (
          (o = void 0 === i ? 0 : this.getPluralForm(t, i)),
          (a = n),
          e && (a = e + this.options.contextDelimiter + n),
          (s = this.data[t][a]) && s[o]
            ? s[o]
            : (this.options.onMissingKey && this.options.onMissingKey(n, t),
              0 === o ? n : r)
        );
      });
    const h = {
        plural_forms(t) {
          return 1 === t ? 0 : 1;
        },
      },
      g = /^i18n\.(n?gettext|has_translation)(_|$)/,
      x = (t, e, n) => {
        const r = new d({}),
          i = new Set(),
          o = () => {
            i.forEach((t) => t());
          },
          a = (t, e = "default") => {
            (r.data[e] = { ...r.data[e], ...t }),
              (r.data[e][""] = { ...h, ...r.data[e]?.[""] }),
              delete r.pluralForms[e];
          },
          s = (t, e) => {
            a(t, e), o();
          },
          u = (t = "default", e, n, i, o) => (
            r.data[t] || a(void 0, t), r.dcnpgettext(t, e, n, i, o)
          ),
          l = (t = "default") => t,
          c = (t, e, r) => {
            let i = u(r, e, t);
            return n
              ? ((i = n.applyFilters("i18n.gettext_with_context", i, t, e, r)),
                n.applyFilters("i18n.gettext_with_context_" + l(r), i, t, e, r))
              : i;
          };
        if ((t && s(t, e), n)) {
          const t = (t) => {
            g.test(t) && o();
          };
          n.addAction("hookAdded", "core/i18n", t),
            n.addAction("hookRemoved", "core/i18n", t);
        }
        return {
          getLocaleData: (t = "default") => r.data[t],
          setLocaleData: s,
          addLocaleData: (t, e = "default") => {
            (r.data[e] = {
              ...r.data[e],
              ...t,
              "": { ...h, ...r.data[e]?.[""], ...t?.[""] },
            }),
              delete r.pluralForms[e],
              o();
          },
          resetLocaleData: (t, e) => {
            (r.data = {}), (r.pluralForms = {}), s(t, e);
          },
          subscribe: (t) => (i.add(t), () => i.delete(t)),
          __: (t, e) => {
            let r = u(e, void 0, t);
            return n
              ? ((r = n.applyFilters("i18n.gettext", r, t, e)),
                n.applyFilters("i18n.gettext_" + l(e), r, t, e))
              : r;
          },
          _x: c,
          _n: (t, e, r, i) => {
            let o = u(i, void 0, t, e, r);
            return n
              ? ((o = n.applyFilters("i18n.ngettext", o, t, e, r, i)),
                n.applyFilters("i18n.ngettext_" + l(i), o, t, e, r, i))
              : o;
          },
          _nx: (t, e, r, i, o) => {
            let a = u(o, i, t, e, r);
            return n
              ? ((a = n.applyFilters(
                  "i18n.ngettext_with_context",
                  a,
                  t,
                  e,
                  r,
                  i,
                  o
                )),
                n.applyFilters(
                  "i18n.ngettext_with_context_" + l(o),
                  a,
                  t,
                  e,
                  r,
                  i,
                  o
                ))
              : a;
          },
          isRTL: () => "rtl" === c("ltr", "text direction"),
          hasTranslation: (t, e, i) => {
            const o = e ? e + "" + t : t;
            let a = !!r.data?.[null != i ? i : "default"]?.[o];
            return (
              n &&
                ((a = n.applyFilters("i18n.has_translation", a, t, e, i)),
                (a = n.applyFilters(
                  "i18n.has_translation_" + l(i),
                  a,
                  t,
                  e,
                  i
                ))),
              a
            );
          },
        };
      };
    var y = window.wp.hooks;
    const b = x(void 0, void 0, y.defaultHooks);
    var _ = b;
    const v = b.getLocaleData.bind(b),
      m = b.setLocaleData.bind(b),
      w = b.resetLocaleData.bind(b),
      k = b.subscribe.bind(b),
      F = b.__.bind(b),
      S = b._x.bind(b),
      j = b._n.bind(b),
      L = b._nx.bind(b),
      T = b.isRTL.bind(b),
      D = b.hasTranslation.bind(b);
  })(),
    ((window.wp = window.wp || {}).i18n = r);
})();
wp.i18n.setLocaleData({ "text direction\u0004ltr": ["ltr"] });
var ElementorProFrontendConfig = {
  ajaxurl:
    "https://wordpress-theme.spider-themes.net/banca/wp-admin/admin-ajax.php",
  nonce: "f70f2b3039",
  urls: {
    assets:
      "https://wordpress-theme.spider-themes.net/banca/wp-content/plugins/pro-elements/assets/",
    rest: "https://wordpress-theme.spider-themes.net/banca/wp-json/",
  },
  shareButtonsNetworks: {
    facebook: { title: "Facebook", has_counter: !0 },
    twitter: { title: "Twitter" },
    linkedin: { title: "LinkedIn", has_counter: !0 },
    pinterest: { title: "Pinterest", has_counter: !0 },
    reddit: { title: "Reddit", has_counter: !0 },
    vk: { title: "VK", has_counter: !0 },
    odnoklassniki: { title: "OK", has_counter: !0 },
    tumblr: { title: "Tumblr" },
    digg: { title: "Digg" },
    skype: { title: "Skype" },
    stumbleupon: { title: "StumbleUpon", has_counter: !0 },
    mix: { title: "Mix" },
    telegram: { title: "Telegram" },
    pocket: { title: "Pocket", has_counter: !0 },
    xing: { title: "XING", has_counter: !0 },
    whatsapp: { title: "WhatsApp" },
    email: { title: "Email" },
    print: { title: "Print" },
  },
  facebook_sdk: { lang: "en_US", app_id: "" },
  lottie: {
    defaultAnimationUrl:
      "https://wordpress-theme.spider-themes.net/banca/wp-content/plugins/pro-elements/modules/lottie/assets/animations/default.json",
  },
}; /*! pro-elements - v3.12.3 - 23-04-2023 */
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([
  [819],
  {
    2: (e, t, n) => {
      "use strict";
      var s = n(3203);
      n(4242);
      var i = s(n(4774)),
        o = s(n(9575)),
        r = s(n(6254)),
        a = s(n(5161)),
        l = s(n(5039)),
        c = s(n(9210)),
        d = s(n(450)),
        u = s(n(7660));
      class ElementorProFrontend extends elementorModules.ViewModule {
        onInit() {
          super.onInit(),
            (this.config = ElementorProFrontendConfig),
            (this.modules = {}),
            this.initOnReadyComponents();
        }
        bindEvents() {
          jQuery(window).on(
            "elementor/frontend/init",
            this.onElementorFrontendInit.bind(this)
          );
        }
        initModules() {
          let e = {
            motionFX: i.default,
            sticky: o.default,
            codeHighlight: r.default,
            videoPlaylist: a.default,
            payments: l.default,
            progressTracker: c.default,
          };
          elementorProFrontend.trigger("elementor-pro/modules/init:before"),
            elementorProFrontend.trigger("elementor-pro/modules/init/before"),
            (e = elementorFrontend.hooks.applyFilters(
              "elementor-pro/frontend/handlers",
              e
            )),
            jQuery.each(e, (e, t) => {
              this.modules[e] = new t();
            }),
            (this.modules.linkActions = {
              addAction: function () {
                elementorFrontend.utils.urlActions.addAction(...arguments);
              },
            });
        }
        onElementorFrontendInit() {
          this.initModules();
        }
        initOnReadyComponents() {
          this.utils = {
            controls: new d.default(),
            DropdownMenuHeightController: u.default,
          };
        }
      }
      window.elementorProFrontend = new ElementorProFrontend();
    },
    450: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Controls {
        getControlValue(e, t, n) {
          let s;
          return (s = "object" == typeof e[t] && n ? e[t][n] : e[t]), s;
        }
        getResponsiveControlValue(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const s = elementorFrontend.getCurrentDeviceMode(),
            i = this.getControlValue(e, t, n);
          if ("widescreen" === s) {
            const s = this.getControlValue(e, `${t}_widescreen`, n);
            return s || 0 === s ? s : i;
          }
          const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
            withDesktop: !0,
          });
          let r = s,
            a = o.indexOf(s),
            l = "";
          for (; a <= o.length; ) {
            if ("desktop" === r) {
              l = i;
              break;
            }
            const s = `${t}_${r}`,
              c = this.getControlValue(e, s, n);
            if (c || 0 === c) {
              l = c;
              break;
            }
            a++, (r = o[a]);
          }
          return l;
        }
      };
    },
    7660: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class DropdownMenuHeightController {
        constructor(e) {
          this.widgetConfig = e;
        }
        calculateStickyMenuNavHeight() {
          const e =
            this.widgetConfig.elements.$dropdownMenuContainer.offset().top -
            jQuery(window).scrollTop();
          return elementorFrontend.elements.$window.height() - e;
        }
        isElementSticky() {
          return (
            this.widgetConfig.elements.$element.hasClass("elementor-sticky") ||
            this.widgetConfig.elements.$element.parents(".elementor-sticky")
              .length
          );
        }
        getMenuHeight() {
          return this.isElementSticky()
            ? this.calculateStickyMenuNavHeight() + "px"
            : this.widgetConfig.settings.dropdownMenuContainerMaxHeight;
        }
        setMenuHeight(e) {
          this.widgetConfig.elements.$dropdownMenuContainer.css(
            this.widgetConfig.settings.menuHeightCssVarName,
            e
          );
        }
        reassignMobileMenuHeight() {
          const e = this.widgetConfig.elements.$menuToggle.hasClass(
            this.widgetConfig.classes.menuToggleActiveClass
          )
            ? this.getMenuHeight()
            : 0;
          return this.setMenuHeight(e);
        }
      };
    },
    4242: (e, t, n) => {
      "use strict";
      n.p = ElementorProFrontendConfig.urls.assets + "js/";
    },
    6254: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "code-highlight",
              () => n.e(714).then(n.bind(n, 8604))
            );
        }
      }
      t.default = _default;
    },
    4774: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(3515));
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "global",
              i.default,
              null
            );
        }
      }
      t.default = _default;
    },
    3515: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(5469));
      class _default extends elementorModules.frontend.handlers.Base {
        __construct() {
          super.__construct(...arguments),
            (this.toggle = elementorFrontend.debounce(this.toggle, 200));
        }
        getDefaultSettings() {
          return { selectors: { container: ".elementor-widget-container" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $container: this.$element.find(e.container) };
        }
        bindEvents() {
          elementorFrontend.elements.$window.on("resize", this.toggle);
        }
        unbindEvents() {
          elementorFrontend.elements.$window.off("resize", this.toggle);
        }
        addCSSTransformEvents() {
          this.getElementSettings("motion_fx_motion_fx_scrolling") &&
            !this.isTransitionEventAdded &&
            ((this.isTransitionEventAdded = !0),
            this.elements.$container.on("mouseenter", () => {
              this.elements.$container.css(
                "--e-transform-transition-duration",
                ""
              );
            }));
        }
        initEffects() {
          this.effects = {
            translateY: { interaction: "scroll", actions: ["translateY"] },
            translateX: { interaction: "scroll", actions: ["translateX"] },
            rotateZ: { interaction: "scroll", actions: ["rotateZ"] },
            scale: { interaction: "scroll", actions: ["scale"] },
            opacity: { interaction: "scroll", actions: ["opacity"] },
            blur: { interaction: "scroll", actions: ["blur"] },
            mouseTrack: { interaction: "mouseMove", actions: ["translateXY"] },
            tilt: { interaction: "mouseMove", actions: ["tilt"] },
          };
        }
        prepareOptions(e) {
          const t = this.getElementSettings(),
            n = "motion_fx" === e ? "element" : "background",
            s = {};
          jQuery.each(t, (n, i) => {
            const o = new RegExp("^" + e + "_(.+?)_effect"),
              r = n.match(o);
            if (!r || !i) return;
            const a = {},
              l = r[1];
            jQuery.each(t, (t, n) => {
              const s = new RegExp(e + "_" + l + "_(.+)"),
                i = t.match(s);
              if (!i) return;
              "effect" !== i[1] &&
                ("object" == typeof n &&
                  (n = Object.keys(n.sizes).length ? n.sizes : n.size),
                (a[i[1]] = n));
            });
            const c = this.effects[l],
              d = c.interaction;
            s[d] || (s[d] = {}), c.actions.forEach((e) => (s[d][e] = a));
          });
          let i,
            o = this.$element;
          const r = this.getElementType();
          if ("element" === n && !["section", "container"].includes(r)) {
            let e;
            (i = o),
              (e =
                "column" === r
                  ? elementorFrontend.config.legacyMode.elementWrappers
                    ? ".elementor-column-wrap"
                    : ".elementor-widget-wrap"
                  : ".elementor-widget-container"),
              (o = o.find("> " + e));
          }
          const a = {
            type: n,
            interactions: s,
            elementSettings: t,
            $element: o,
            $dimensionsElement: i,
            refreshDimensions: this.isEdit,
            range: t[e + "_range"],
            classes: {
              element: "elementor-motion-effects-element",
              parent: "elementor-motion-effects-parent",
              backgroundType:
                "elementor-motion-effects-element-type-background",
              container: "elementor-motion-effects-container",
              layer: "elementor-motion-effects-layer",
              perspective: "elementor-motion-effects-perspective",
            },
          };
          return (
            a.range ||
              "fixed" !== this.getCurrentDeviceSetting("_position") ||
              (a.range = "page"),
            "fixed" === this.getCurrentDeviceSetting("_position") &&
              (a.isFixedPosition = !0),
            "background" === n &&
              "column" === this.getElementType() &&
              (a.addBackgroundLayerTo = " > .elementor-element-populated"),
            a
          );
        }
        activate(e) {
          const t = this.prepareOptions(e);
          jQuery.isEmptyObject(t.interactions) || (this[e] = new i.default(t));
        }
        deactivate(e) {
          this[e] && (this[e].destroy(), delete this[e]);
        }
        toggle() {
          const e = elementorFrontend.getCurrentDeviceMode(),
            t = this.getElementSettings();
          ["motion_fx", "background_motion_fx"].forEach((n) => {
            const s = t[n + "_devices"];
            (!s || -1 !== s.indexOf(e)) &&
            (t[n + "_motion_fx_scrolling"] || t[n + "_motion_fx_mouse"])
              ? this[n]
                ? this.refreshInstance(n)
                : this.activate(n)
              : this.deactivate(n);
          });
        }
        refreshInstance(e) {
          const t = this[e];
          if (!t) return;
          const n = this.prepareOptions(e);
          t.setSettings(n), t.refresh();
        }
        onInit() {
          super.onInit(),
            this.initEffects(),
            this.addCSSTransformEvents(),
            this.toggle();
        }
        onElementChange(e) {
          if (/motion_fx_((scrolling)|(mouse)|(devices))$/.test(e))
            return (
              "motion_fx_motion_fx_scrolling" === e &&
                this.addCSSTransformEvents(),
              void this.toggle()
            );
          const t = e.match(".*?(motion_fx|_transform)");
          if (t) {
            const e = t[0].match("(_transform)") ? "motion_fx" : t[0];
            this.refreshInstance(e), this[e] || this.activate(e);
          }
          /^_position/.test(e) &&
            ["motion_fx", "background_motion_fx"].forEach((e) => {
              this.refreshInstance(e);
            });
        }
        onDestroy() {
          super.onDestroy(),
            ["motion_fx", "background_motion_fx"].forEach((e) => {
              this.deactivate(e);
            });
        }
      }
      t.default = _default;
    },
    2292: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        getMovePointFromPassedPercents(e, t) {
          return +((t / e) * 100).toFixed(2);
        }
        getEffectValueFromMovePoint(e, t) {
          return (e * t) / 100;
        }
        getStep(e, t) {
          return "element" === this.getSettings("type")
            ? this.getElementStep(e, t)
            : this.getBackgroundStep(e, t);
        }
        getElementStep(e, t) {
          return -(e - 50) * t.speed;
        }
        getBackgroundStep(e, t) {
          const n = this.getSettings(
            "dimensions.movable" + t.axis.toUpperCase()
          );
          return -this.getEffectValueFromMovePoint(n, e);
        }
        getDirectionMovePoint(e, t, n) {
          let s;
          return (
            e < n.start
              ? "out-in" === t
                ? (s = 0)
                : "in-out" === t
                ? (s = 100)
                : ((s = this.getMovePointFromPassedPercents(n.start, e)),
                  "in-out-in" === t && (s = 100 - s))
              : e < n.end
              ? "in-out-in" === t
                ? (s = 0)
                : "out-in-out" === t
                ? (s = 100)
                : ((s = this.getMovePointFromPassedPercents(
                    n.end - n.start,
                    e - n.start
                  )),
                  "in-out" === t && (s = 100 - s))
              : "in-out" === t
              ? (s = 0)
              : "out-in" === t
              ? (s = 100)
              : ((s = this.getMovePointFromPassedPercents(
                  100 - n.end,
                  100 - e
                )),
                "in-out-in" === t && (s = 100 - s)),
            s
          );
        }
        translateX(e, t) {
          (e.axis = "x"), (e.unit = "px"), this.transform("translateX", t, e);
        }
        translateY(e, t) {
          (e.axis = "y"), (e.unit = "px"), this.transform("translateY", t, e);
        }
        translateXY(e, t, n) {
          this.translateX(e, t), this.translateY(e, n);
        }
        tilt(e, t, n) {
          const s = { speed: e.speed / 10, direction: e.direction };
          this.rotateX(s, n), this.rotateY(s, 100 - t);
        }
        rotateX(e, t) {
          (e.axis = "x"), (e.unit = "deg"), this.transform("rotateX", t, e);
        }
        rotateY(e, t) {
          (e.axis = "y"), (e.unit = "deg"), this.transform("rotateY", t, e);
        }
        rotateZ(e, t) {
          (e.unit = "deg"), this.transform("rotateZ", t, e);
        }
        scale(e, t) {
          const n = this.getDirectionMovePoint(t, e.direction, e.range);
          this.updateRulePart("transform", "scale", 1 + (e.speed * n) / 1e3);
        }
        transform(e, t, n) {
          n.direction && (t = 100 - t),
            this.updateRulePart("transform", e, this.getStep(t, n) + n.unit);
        }
        setCSSTransformVariables(e) {
          (this.CSSTransformVariables = []),
            jQuery.each(e, (e, t) => {
              const n = e.match(/_transform_(.+?)_effect/m);
              if (n && t) {
                if ("perspective" === n[1])
                  return void this.CSSTransformVariables.unshift(n[1]);
                if (this.CSSTransformVariables.includes(n[1])) return;
                this.CSSTransformVariables.push(n[1]);
              }
            });
        }
        opacity(e, t) {
          const n = this.getDirectionMovePoint(t, e.direction, e.range),
            s = e.level / 10,
            i = 1 - s + this.getEffectValueFromMovePoint(s, n);
          this.$element.css({ opacity: i, "will-change": "opacity" });
        }
        blur(e, t) {
          const n = this.getDirectionMovePoint(t, e.direction, e.range),
            s = e.level - this.getEffectValueFromMovePoint(e.level, n);
          this.updateRulePart("filter", "blur", s + "px");
        }
        updateRulePart(e, t, n) {
          this.rulesVariables[e] || (this.rulesVariables[e] = {}),
            this.rulesVariables[e][t] ||
              ((this.rulesVariables[e][t] = !0), this.updateRule(e));
          const s = `--${t}`;
          this.$element[0].style.setProperty(s, n);
        }
        updateRule(e) {
          let t = "";
          (t += this.concatTransformCSSProperties(e)),
            (t += this.concatTransformMotionEffectCSSProperties(e)),
            this.$element.css(e, t);
        }
        concatTransformCSSProperties(e) {
          let t = "";
          return (
            "transform" === e &&
              jQuery.each(this.CSSTransformVariables, (e, n) => {
                const s = n;
                n.startsWith("flip") && (n = n.replace("flip", "scale"));
                const i =
                    n.startsWith("rotate") || n.startsWith("skew")
                      ? "deg"
                      : "px",
                  o = n.startsWith("scale") ? 1 : 0 + i;
                t += `${n}(var(--e-transform-${s}, ${o}))`;
              }),
            t
          );
        }
        concatTransformMotionEffectCSSProperties(e) {
          let t = "";
          return (
            jQuery.each(this.rulesVariables[e], (e) => {
              t += `${e}(var(--${e}))`;
            }),
            t
          );
        }
        runAction(e, t, n) {
          t.affectedRange &&
            (t.affectedRange.start > n && (n = t.affectedRange.start),
            t.affectedRange.end < n && (n = t.affectedRange.end));
          for (
            var s = arguments.length, i = new Array(s > 3 ? s - 3 : 0), o = 3;
            o < s;
            o++
          )
            i[o - 3] = arguments[o];
          this[e](t, n, ...i);
        }
        refresh() {
          (this.rulesVariables = {}),
            (this.CSSTransformVariables = []),
            this.$element.css({
              transform: "",
              filter: "",
              opacity: "",
              "will-change": "",
            });
        }
        onInit() {
          (this.$element = this.getSettings("$targetElement")), this.refresh();
        }
      }
      t.default = _default;
    },
    371: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(3231));
      class _default extends elementorModules.ViewModule {
        constructor() {
          super(...arguments),
            (0, i.default)(this, "onInsideViewport", () => {
              this.run(),
                (this.animationFrameRequest = requestAnimationFrame(
                  this.onInsideViewport
                ));
            });
        }
        __construct(e) {
          (this.motionFX = e.motionFX),
            this.intersectionObservers || this.setElementInViewportObserver();
        }
        setElementInViewportObserver() {
          this.intersectionObserver =
            elementorModules.utils.Scroll.scrollObserver({
              callback: (e) => {
                e.isInViewport
                  ? this.onInsideViewport()
                  : this.removeAnimationFrameRequest();
              },
            });
          const e =
            "page" === this.motionFX.getSettings("range")
              ? elementorFrontend.elements.$body[0]
              : this.motionFX.elements.$parent[0];
          this.intersectionObserver.observe(e);
        }
        runCallback() {
          this.getSettings("callback")(...arguments);
        }
        removeIntersectionObserver() {
          this.intersectionObserver &&
            this.intersectionObserver.unobserve(
              this.motionFX.elements.$parent[0]
            );
        }
        removeAnimationFrameRequest() {
          this.animationFrameRequest &&
            cancelAnimationFrame(this.animationFrameRequest);
        }
        destroy() {
          this.removeAnimationFrameRequest(), this.removeIntersectionObserver();
        }
        onInit() {
          super.onInit();
        }
      }
      t.default = _default;
    },
    3802: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(371));
      class MouseMoveInteraction extends i.default {
        bindEvents() {
          MouseMoveInteraction.mouseTracked ||
            (elementorFrontend.elements.$window.on(
              "mousemove",
              MouseMoveInteraction.updateMousePosition
            ),
            (MouseMoveInteraction.mouseTracked = !0));
        }
        run() {
          const e = MouseMoveInteraction.mousePosition,
            t = this.oldMousePosition;
          if (t.x === e.x && t.y === e.y) return;
          this.oldMousePosition = { x: e.x, y: e.y };
          const n = (100 / innerWidth) * e.x,
            s = (100 / innerHeight) * e.y;
          this.runCallback(n, s);
        }
        onInit() {
          (this.oldMousePosition = {}), super.onInit();
        }
      }
      (t.default = MouseMoveInteraction),
        (MouseMoveInteraction.mousePosition = {}),
        (MouseMoveInteraction.updateMousePosition = (e) => {
          MouseMoveInteraction.mousePosition = { x: e.clientX, y: e.clientY };
        });
    },
    5931: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(371));
      class _default extends i.default {
        run() {
          if (pageYOffset === this.windowScrollTop) return !1;
          this.onScrollMovement(), (this.windowScrollTop = pageYOffset);
        }
        onScrollMovement() {
          this.updateMotionFxDimensions(),
            this.updateAnimation(),
            this.resetTransitionVariable();
        }
        resetTransitionVariable() {
          this.motionFX.$element.css(
            "--e-transform-transition-duration",
            "100ms"
          );
        }
        updateMotionFxDimensions() {
          this.motionFX.getSettings().refreshDimensions &&
            this.motionFX.defineDimensions();
        }
        updateAnimation() {
          let e;
          (e =
            "page" === this.motionFX.getSettings("range")
              ? elementorModules.utils.Scroll.getPageScrollPercentage()
              : this.motionFX.getSettings("isFixedPosition")
              ? elementorModules.utils.Scroll.getPageScrollPercentage(
                  {},
                  window.innerHeight
                )
              : elementorModules.utils.Scroll.getElementViewportPercentage(
                  this.motionFX.elements.$parent
                )),
            this.runCallback(e);
        }
      }
      t.default = _default;
    },
    5469: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(5931)),
        o = s(n(3802)),
        r = s(n(2292));
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            type: "element",
            $element: null,
            $dimensionsElement: null,
            addBackgroundLayerTo: null,
            interactions: {},
            refreshDimensions: !1,
            range: "viewport",
            classes: {
              element: "motion-fx-element",
              parent: "motion-fx-parent",
              backgroundType: "motion-fx-element-type-background",
              container: "motion-fx-container",
              layer: "motion-fx-layer",
              perspective: "motion-fx-perspective",
            },
          };
        }
        bindEvents() {
          (this.defineDimensions = this.defineDimensions.bind(this)),
            elementorFrontend.elements.$window.on(
              "resize elementor-pro/motion-fx/recalc",
              this.defineDimensions
            );
        }
        unbindEvents() {
          elementorFrontend.elements.$window.off(
            "resize elementor-pro/motion-fx/recalc",
            this.defineDimensions
          );
        }
        addBackgroundLayer() {
          const e = this.getSettings();
          (this.elements.$motionFXContainer = jQuery("<div>", {
            class: e.classes.container,
          })),
            (this.elements.$motionFXLayer = jQuery("<div>", {
              class: e.classes.layer,
            })),
            this.updateBackgroundLayerSize(),
            this.elements.$motionFXContainer.prepend(
              this.elements.$motionFXLayer
            );
          (e.addBackgroundLayerTo
            ? this.$element.find(e.addBackgroundLayerTo)
            : this.$element
          ).prepend(this.elements.$motionFXContainer);
        }
        removeBackgroundLayer() {
          this.elements.$motionFXContainer.remove();
        }
        updateBackgroundLayerSize() {
          const e = this.getSettings(),
            t = { x: 0, y: 0 },
            n = e.interactions.mouseMove,
            s = e.interactions.scroll;
          n &&
            n.translateXY &&
            ((t.x = 10 * n.translateXY.speed),
            (t.y = 10 * n.translateXY.speed)),
            s &&
              (s.translateX && (t.x = 10 * s.translateX.speed),
              s.translateY && (t.y = 10 * s.translateY.speed)),
            this.elements.$motionFXLayer.css({
              width: 100 + t.x + "%",
              height: 100 + t.y + "%",
            });
        }
        defineDimensions() {
          const e = this.getSettings("$dimensionsElement") || this.$element,
            t = e.offset(),
            n = {
              elementHeight: e.outerHeight(),
              elementWidth: e.outerWidth(),
              elementTop: t.top,
              elementLeft: t.left,
            };
          (n.elementRange = n.elementHeight + innerHeight),
            this.setSettings("dimensions", n),
            "background" === this.getSettings("type") &&
              this.defineBackgroundLayerDimensions();
        }
        defineBackgroundLayerDimensions() {
          const e = this.getSettings("dimensions");
          (e.layerHeight = this.elements.$motionFXLayer.height()),
            (e.layerWidth = this.elements.$motionFXLayer.width()),
            (e.movableX = e.layerWidth - e.elementWidth),
            (e.movableY = e.layerHeight - e.elementHeight),
            this.setSettings("dimensions", e);
        }
        initInteractionsTypes() {
          this.interactionsTypes = { scroll: i.default, mouseMove: o.default };
        }
        prepareSpecialActions() {
          const e = this.getSettings(),
            t = !(!e.interactions.mouseMove || !e.interactions.mouseMove.tilt);
          this.elements.$parent.toggleClass(e.classes.perspective, t);
        }
        cleanSpecialActions() {
          const e = this.getSettings();
          this.elements.$parent.removeClass(e.classes.perspective);
        }
        runInteractions() {
          var e = this;
          const t = this.getSettings();
          this.actions.setCSSTransformVariables(t.elementSettings),
            this.prepareSpecialActions(),
            jQuery.each(t.interactions, (t, n) => {
              (this.interactions[t] = new this.interactionsTypes[t]({
                motionFX: this,
                callback: function () {
                  for (
                    var t = arguments.length, s = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    s[i] = arguments[i];
                  jQuery.each(n, (t, n) => e.actions.runAction(t, n, ...s));
                },
              })),
                this.interactions[t].run();
            });
        }
        destroyInteractions() {
          this.cleanSpecialActions(),
            jQuery.each(this.interactions, (e, t) => t.destroy()),
            (this.interactions = {});
        }
        refresh() {
          this.actions.setSettings(this.getSettings()),
            "background" === this.getSettings("type") &&
              (this.updateBackgroundLayerSize(),
              this.defineBackgroundLayerDimensions()),
            this.actions.refresh(),
            this.destroyInteractions(),
            this.runInteractions();
        }
        destroy() {
          this.destroyInteractions(), this.actions.refresh();
          const e = this.getSettings();
          this.$element.removeClass(e.classes.element),
            this.elements.$parent.removeClass(e.classes.parent),
            "background" === e.type &&
              (this.$element.removeClass(e.classes.backgroundType),
              this.removeBackgroundLayer());
        }
        onInit() {
          super.onInit();
          const e = this.getSettings();
          (this.$element = e.$element),
            (this.elements.$parent = this.$element.parent()),
            this.$element.addClass(e.classes.element),
            (this.elements.$parent = this.$element.parent()),
            this.elements.$parent.addClass(e.classes.parent),
            "background" === e.type &&
              (this.$element.addClass(e.classes.backgroundType),
              this.addBackgroundLayer()),
            this.defineDimensions(),
            (e.$targetElement =
              "element" === e.type
                ? this.$element
                : this.elements.$motionFXLayer),
            (this.interactions = {}),
            (this.actions = new r.default(e)),
            this.initInteractionsTypes(),
            this.runInteractions();
        }
      }
      t.default = _default;
    },
    5039: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "paypal-button",
              () => n.e(256).then(n.bind(n, 4452))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "stripe-button",
              () => n.e(156).then(n.bind(n, 7121))
            );
        }
      }
      t.default = _default;
    },
    9210: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "progress-tracker",
              () => n.e(241).then(n.bind(n, 2177))
            );
        }
      }
      t.default = _default;
    },
    9575: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(2090));
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "section",
              i.default,
              null
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "container",
              i.default,
              null
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "widget",
              i.default,
              null
            );
        }
      }
      t.default = _default;
    },
    2090: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = elementorModules.frontend.handlers.Base.extend({
        currentConfig: {},
        debouncedReactivate: null,
        bindEvents() {
          elementorFrontend.addListenerOnce(
            this.getUniqueHandlerID() + "sticky",
            "resize",
            this.reactivateOnResize
          );
        },
        unbindEvents() {
          elementorFrontend.removeListeners(
            this.getUniqueHandlerID() + "sticky",
            "resize",
            this.reactivateOnResize
          );
        },
        isStickyInstanceActive() {
          return void 0 !== this.$element.data("sticky");
        },
        getResponsiveSetting(e) {
          const t = this.getElementSettings();
          return elementorFrontend.getCurrentDeviceSetting(t, e);
        },
        getResponsiveSettingList: (e) =>
          [
            "",
            ...Object.keys(
              elementorFrontend.config.responsive.activeBreakpoints
            ),
          ].map((t) => (t ? `${e}_${t}` : e)),
        getConfig() {
          const e = this.getElementSettings(),
            t = {
              to: e.sticky,
              offset: this.getResponsiveSetting("sticky_offset"),
              effectsOffset: this.getResponsiveSetting("sticky_effects_offset"),
              classes: {
                sticky: "elementor-sticky",
                stickyActive:
                  "elementor-sticky--active elementor-section--handles-inside",
                stickyEffects: "elementor-sticky--effects",
                spacer: "elementor-sticky__spacer",
              },
              isRTL: elementorFrontend.config.is_rtl,
              handleScrollbarWidth: elementorFrontend.isEditMode(),
            },
            n = elementorFrontend.elements.$wpAdminBar,
            s =
              this.isContainerElement(this.$element[0]) &&
              !this.isContainerElement(this.$element[0].parentElement);
          return (
            n.length &&
              "top" === e.sticky &&
              "fixed" === n.css("position") &&
              (t.offset += n.height()),
            e.sticky_parent &&
              !s &&
              (t.parent =
                ".e-container, .e-container__inner, .e-con, .e-con-inner, .elementor-widget-wrap"),
            t
          );
        },
        activate() {
          (this.currentConfig = this.getConfig()),
            this.$element.sticky(this.currentConfig);
        },
        deactivate() {
          this.isStickyInstanceActive() && this.$element.sticky("destroy");
        },
        run(e) {
          if (this.getElementSettings("sticky")) {
            var t = elementorFrontend.getCurrentDeviceMode();
            -1 !== this.getElementSettings("sticky_on").indexOf(t)
              ? !0 === e
                ? this.reactivate()
                : this.isStickyInstanceActive() || this.activate()
              : this.deactivate();
          } else this.deactivate();
        },
        reactivateOnResize() {
          clearTimeout(this.debouncedReactivate),
            (this.debouncedReactivate = setTimeout(() => {
              const e = this.getConfig();
              JSON.stringify(e) !== JSON.stringify(this.currentConfig) &&
                this.run(!0);
            }, 300));
        },
        reactivate() {
          this.deactivate(), this.activate();
        },
        onElementChange(e) {
          -1 !== ["sticky", "sticky_on"].indexOf(e) && this.run(!0);
          -1 !==
            [
              ...this.getResponsiveSettingList("sticky_offset"),
              ...this.getResponsiveSettingList("sticky_effects_offset"),
              "sticky_parent",
            ].indexOf(e) && this.reactivate();
        },
        onDeviceModeChange() {
          setTimeout(() => this.run(!0));
        },
        onInit() {
          elementorModules.frontend.handlers.Base.prototype.onInit.apply(
            this,
            arguments
          ),
            elementorFrontend.isEditMode() &&
              elementor.listenTo(elementor.channels.deviceMode, "change", () =>
                this.onDeviceModeChange()
              ),
            this.run();
        },
        onDestroy() {
          elementorModules.frontend.handlers.Base.prototype.onDestroy.apply(
            this,
            arguments
          ),
            this.deactivate();
        },
        isContainerElement: (e) =>
          ["e-container", "e-container__inner", "e-con", "e-con-inner"].some(
            (t) => e?.classList.contains(t)
          ),
      });
      t.default = n;
    },
    5161: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/video-playlist.default",
              (e) => {
                n.e(721)
                  .then(n.bind(n, 1580))
                  .then((t) => {
                    let { default: n } = t;
                    elementorFrontend.elementsHandler.addHandler(n, {
                      $element: e,
                      toggleSelf: !1,
                    });
                  });
              }
            );
        }
      }
      t.default = _default;
    },
    3231: (e, t, n) => {
      var s = n(4040);
      (e.exports = function _defineProperty(e, t, n) {
        return (
          (t = s(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    3203: (e) => {
      (e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6027: (e, t, n) => {
      var s = n(7501).default;
      (e.exports = function _toPrimitive(e, t) {
        if ("object" !== s(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var i = n.call(e, t || "default");
          if ("object" !== s(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4040: (e, t, n) => {
      var s = n(7501).default,
        i = n(6027);
      (e.exports = function _toPropertyKey(e) {
        var t = i(e, "string");
        return "symbol" === s(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7501: (e) => {
      function _typeof(t) {
        return (
          (e.exports = _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          _typeof(t)
        );
      }
      (e.exports = _typeof),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
  (e) => {
    var t;
    (t = 2), e((e.s = t));
  },
]);
!(function () {
  "use strict";
  function Waypoint(options) {
    if (!options) throw new Error("No options passed to Waypoint constructor");
    if (!options.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!options.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + keyCounter),
      (this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)),
      (this.element = this.options.element),
      (this.adapter = new Waypoint.Adapter(this.element)),
      (this.callback = options.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = Waypoint.Context.findOrCreateByElement(
        this.options.context
      )),
      Waypoint.offsetAliases[this.options.offset] &&
        (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (allWaypoints[this.key] = this),
      (keyCounter += 1);
  }
  var keyCounter = 0,
    allWaypoints = {};
  (Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  }),
    (Waypoint.prototype.trigger = function (args) {
      this.enabled && this.callback && this.callback.apply(this, args);
    }),
    (Waypoint.prototype.destroy = function () {
      this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key];
    }),
    (Waypoint.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (Waypoint.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (Waypoint.prototype.next = function () {
      return this.group.next(this);
    }),
    (Waypoint.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (Waypoint.invokeAll = function (method) {
      var allWaypointsArray = [];
      for (var waypointKey in allWaypoints)
        allWaypointsArray.push(allWaypoints[waypointKey]);
      for (var i = 0, end = allWaypointsArray.length; i < end; i++)
        allWaypointsArray[i][method]();
    }),
    (Waypoint.destroyAll = function () {
      Waypoint.invokeAll("destroy");
    }),
    (Waypoint.disableAll = function () {
      Waypoint.invokeAll("disable");
    }),
    (Waypoint.enableAll = function () {
      Waypoint.Context.refreshAll();
      for (var waypointKey in allWaypoints)
        allWaypoints[waypointKey].enabled = !0;
      return this;
    }),
    (Waypoint.refreshAll = function () {
      Waypoint.Context.refreshAll();
    }),
    (Waypoint.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (Waypoint.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (Waypoint.adapters = []),
    (Waypoint.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (Waypoint.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = Waypoint);
})(),
  (function () {
    "use strict";
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1e3 / 60);
    }
    function Context(element) {
      (this.element = element),
        (this.Adapter = Waypoint.Adapter),
        (this.adapter = new this.Adapter(element)),
        (this.key = "waypoint-context-" + keyCounter),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (element.waypointContextKey = this.key),
        (contexts[element.waypointContextKey] = this),
        (keyCounter += 1),
        Waypoint.windowContext ||
          ((Waypoint.windowContext = !0),
          (Waypoint.windowContext = new Context(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var keyCounter = 0,
      contexts = {},
      Waypoint = window.Waypoint,
      oldWindowLoad = window.onload;
    (Context.prototype.add = function (waypoint) {
      var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[axis][waypoint.key] = waypoint), this.refresh();
    }),
      (Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(
            this.waypoints.horizontal
          ),
          verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
          isWindow = this.element == this.element.window;
        horizontalEmpty &&
          verticalEmpty &&
          !isWindow &&
          (this.adapter.off(".waypoints"), delete contexts[this.key]);
      }),
      (Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
          self.handleResize(), (self.didResize = !1);
        }
        var self = this;
        this.adapter.on("resize.waypoints", function () {
          self.didResize ||
            ((self.didResize = !0),
            Waypoint.requestAnimationFrame(resizeHandler));
        });
      }),
      (Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
          self.handleScroll(), (self.didScroll = !1);
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function () {
          (self.didScroll && !Waypoint.isTouch) ||
            ((self.didScroll = !0),
            Waypoint.requestAnimationFrame(scrollHandler));
        });
      }),
      (Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll();
      }),
      (Context.prototype.handleScroll = function () {
        var triggeredGroups = {},
          axes = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var axisKey in axes) {
          var axis = axes[axisKey],
            isForward = axis.newScroll > axis.oldScroll,
            direction = isForward ? axis.forward : axis.backward;
          for (var waypointKey in this.waypoints[axisKey]) {
            var waypoint = this.waypoints[axisKey][waypointKey];
            if (null !== waypoint.triggerPoint) {
              var wasBeforeTriggerPoint =
                  axis.oldScroll < waypoint.triggerPoint,
                nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                crossedBackward =
                  !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
              (crossedForward || crossedBackward) &&
                (waypoint.queueTrigger(direction),
                (triggeredGroups[waypoint.group.id] = waypoint.group));
            }
          }
        }
        for (var groupKey in triggeredGroups)
          triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll,
        };
      }),
      (Context.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? Waypoint.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty();
      }),
      (Context.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? Waypoint.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints)
          for (var waypointKey in this.waypoints[axis])
            allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
          allWaypoints[i].destroy();
      }),
      (Context.prototype.refresh = function () {
        var axes,
          isWindow = this.element == this.element.window,
          contextOffset = isWindow ? void 0 : this.adapter.offset(),
          triggeredGroups = {};
        this.handleScroll(),
          (axes = {
            horizontal: {
              contextOffset: isWindow ? 0 : contextOffset.left,
              contextScroll: isWindow ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: isWindow ? 0 : contextOffset.top,
              contextScroll: isWindow ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var axisKey in axes) {
          var axis = axes[axisKey];
          for (var waypointKey in this.waypoints[axisKey]) {
            var contextModifier,
              wasBeforeScroll,
              nowAfterScroll,
              triggeredBackward,
              triggeredForward,
              waypoint = this.waypoints[axisKey][waypointKey],
              adjustment = waypoint.options.offset,
              oldTriggerPoint = waypoint.triggerPoint,
              elementOffset = 0,
              freshWaypoint = null == oldTriggerPoint;
            waypoint.element !== waypoint.element.window &&
              (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
              "function" == typeof adjustment
                ? (adjustment = adjustment.apply(waypoint))
                : "string" == typeof adjustment &&
                  ((adjustment = parseFloat(adjustment)),
                  waypoint.options.offset.indexOf("%") > -1 &&
                    (adjustment = Math.ceil(
                      (axis.contextDimension * adjustment) / 100
                    ))),
              (contextModifier = axis.contextScroll - axis.contextOffset),
              (waypoint.triggerPoint = Math.floor(
                elementOffset + contextModifier - adjustment
              )),
              (wasBeforeScroll = oldTriggerPoint < axis.oldScroll),
              (nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll),
              (triggeredBackward = wasBeforeScroll && nowAfterScroll),
              (triggeredForward = !wasBeforeScroll && !nowAfterScroll),
              !freshWaypoint && triggeredBackward
                ? (waypoint.queueTrigger(axis.backward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : !freshWaypoint && triggeredForward
                ? (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : freshWaypoint &&
                  axis.oldScroll >= waypoint.triggerPoint &&
                  (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group));
          }
        }
        return (
          Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups)
              triggeredGroups[groupKey].flushTriggers();
          }),
          this
        );
      }),
      (Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element);
      }),
      (Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh();
      }),
      (Context.findByElement = function (element) {
        return contexts[element.waypointContextKey];
      }),
      (window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll();
      }),
      (Waypoint.requestAnimationFrame = function (callback) {
        var requestFn =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          requestAnimationFrameShim;
        requestFn.call(window, callback);
      }),
      (Waypoint.Context = Context);
  })(),
  (function () {
    "use strict";
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint;
    }
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint;
    }
    function Group(options) {
      (this.name = options.name),
        (this.axis = options.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (groups[this.axis][this.name] = this);
    }
    var groups = { vertical: {}, horizontal: {} },
      Waypoint = window.Waypoint;
    (Group.prototype.add = function (waypoint) {
      this.waypoints.push(waypoint);
    }),
      (Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
          var waypoints = this.triggerQueues[direction],
            reverse = "up" === direction || "left" === direction;
          waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
          for (var i = 0, end = waypoints.length; i < end; i += 1) {
            var waypoint = waypoints[i];
            (waypoint.options.continuous || i === waypoints.length - 1) &&
              waypoint.trigger([direction]);
          }
        }
        this.clearTriggerQueues();
      }),
      (Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
          isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1];
      }),
      (Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null;
      }),
      (Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint);
      }),
      (Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1);
      }),
      (Group.prototype.first = function () {
        return this.waypoints[0];
      }),
      (Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options);
      }),
      (Waypoint.Group = Group);
  })(),
  (function () {
    "use strict";
    function JQueryAdapter(element) {
      this.$element = $(element);
    }
    var $ = window.jQuery,
      Waypoint = window.Waypoint;
    $.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (i, method) {
        JQueryAdapter.prototype[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          return this.$element[method].apply(this.$element, args);
        };
      }
    ),
      $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
        JQueryAdapter[method] = $[method];
      }),
      Waypoint.adapters.push({ name: "jquery", Adapter: JQueryAdapter }),
      (Waypoint.Adapter = JQueryAdapter);
  })(),
  (function () {
    "use strict";
    function createExtension(framework) {
      return function () {
        var waypoints = [],
          overrides = arguments[0];
        return (
          framework.isFunction(arguments[0]) &&
            ((overrides = framework.extend({}, arguments[1])),
            (overrides.handler = arguments[0])),
          this.each(function () {
            var options = framework.extend({}, overrides, { element: this });
            "string" == typeof options.context &&
              (options.context = framework(this).closest(options.context)[0]),
              waypoints.push(new Waypoint(options));
          }),
          waypoints
        );
      };
    }
    var Waypoint = window.Waypoint;
    window.jQuery &&
      (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
      window.Zepto &&
        (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto));
  })();
/*! jQuery UI - v1.13.2 - 2022-07-14
 * http://jqueryui.com
 * Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
  "use strict";
  var t, e, i, n, W, C, o, s, r, l, a, h, u;
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ];
  }
  function L(t, e) {
    return parseInt(x.css(t, e), 10) || 0;
  }
  function N(t) {
    return null != t && t === t.window;
  }
  (x.ui = x.ui || {}),
    (x.ui.version = "1.13.2"),
    /*!
     * jQuery UI :data 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!x.data(t, i[3]);
          },
    }),
    /*!
     * jQuery UI Disable Selection 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    /*!
     * jQuery UI Focusable 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s = t.nodeName.toLowerCase();
      return "area" === s
        ? ((o = (i = t.parentNode).name),
          !(!t.href || !o || "map" !== i.nodeName.toLowerCase()) &&
            0 < (i = x("img[usemap='#" + o + "']")).length &&
            i.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(s)
            ? (n = !t.disabled) &&
              (o = x(t).closest("fieldset")[0]) &&
              (n = !o.disabled)
            : (n = ("a" === s && t.href) || e),
          n &&
            x(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "visible" === e;
            })(x(t)));
    }),
    x.extend(x.expr.pseudos, {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, "tabindex"));
      },
    }),
    (x.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : x(this[0].form);
    }),
    /*!
     * jQuery UI Form Reset Mixin 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          x.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            x.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    /*!
     * jQuery UI Support for jQuery core 1.8.x and newer 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector ||
      ((e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (i = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (x.escapeSelector = function (t) {
        return (t + "").replace(e, i);
      })),
    (x.fn.even && x.fn.odd) ||
      x.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      }),
    /*!
     * jQuery UI Keycode 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    /*!
     * jQuery UI Labels 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + x.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype;
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e];
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i);
      },
    }),
    /*!
     * jQuery UI Position 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (h = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        var t, e, i;
        return void 0 !== n
          ? n
          : ((i = (e = x(
              "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
            )).children()[0]),
            x("body").append(e),
            (t = i.offsetWidth),
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            (n = t - i));
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = N(e[0]),
          n = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (x.fn.position = function (f) {
      var c, d, p, g, m, v, y, w, b, _, t, e;
      return f && f.of
        ? ((v =
            "string" == typeof (f = x.extend({}, f)).of
              ? x(document).find(f.of)
              : x(f.of)),
          (y = x.position.getWithinInfo(f.within)),
          (w = x.position.getScrollInfo(y)),
          (b = (f.collision || "flip").split(" ")),
          (_ = {}),
          (e =
            9 === (e = (t = v)[0]).nodeType
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: 0, left: 0 },
                }
              : N(e)
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: t.scrollTop(), left: t.scrollLeft() },
                }
              : e.preventDefault
              ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
              : {
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  offset: t.offset(),
                }),
          v[0].preventDefault && (f.at = "left top"),
          (d = e.width),
          (p = e.height),
          (m = x.extend({}, (g = e.offset))),
          x.each(["my", "at"], function () {
            var t,
              e,
              i = (f[this] || "").split(" ");
            ((i =
              1 === i.length
                ? o.test(i[0])
                  ? i.concat(["center"])
                  : s.test(i[0])
                  ? ["center"].concat(i)
                  : ["center", "center"]
                : i)[0] = o.test(i[0]) ? i[0] : "center"),
              (i[1] = s.test(i[1]) ? i[1] : "center"),
              (t = r.exec(i[0])),
              (e = r.exec(i[1])),
              (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
              (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
          }),
          1 === b.length && (b[1] = b[0]),
          "right" === f.at[0]
            ? (m.left += d)
            : "center" === f.at[0] && (m.left += d / 2),
          "bottom" === f.at[1]
            ? (m.top += p)
            : "center" === f.at[1] && (m.top += p / 2),
          (c = E(_.at, d, p)),
          (m.left += c[0]),
          (m.top += c[1]),
          this.each(function () {
            var i,
              t,
              r = x(this),
              l = r.outerWidth(),
              a = r.outerHeight(),
              e = L(this, "marginLeft"),
              n = L(this, "marginTop"),
              o = l + e + L(this, "marginRight") + w.width,
              s = a + n + L(this, "marginBottom") + w.height,
              h = x.extend({}, m),
              u = E(_.my, r.outerWidth(), r.outerHeight());
            "right" === f.my[0]
              ? (h.left -= l)
              : "center" === f.my[0] && (h.left -= l / 2),
              "bottom" === f.my[1]
                ? (h.top -= a)
                : "center" === f.my[1] && (h.top -= a / 2),
              (h.left += u[0]),
              (h.top += u[1]),
              (i = { marginLeft: e, marginTop: n }),
              x.each(["left", "top"], function (t, e) {
                x.ui.position[b[t]] &&
                  x.ui.position[b[t]][e](h, {
                    targetWidth: d,
                    targetHeight: p,
                    elemWidth: l,
                    elemHeight: a,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: s,
                    offset: [c[0] + u[0], c[1] + u[1]],
                    my: f.my,
                    at: f.at,
                    within: y,
                    elem: r,
                  });
              }),
              f.using &&
                (t = function (t) {
                  var e = g.left - h.left,
                    i = e + d - l,
                    n = g.top - h.top,
                    o = n + p - a,
                    s = {
                      target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: d,
                        height: p,
                      },
                      element: {
                        element: r,
                        left: h.left,
                        top: h.top,
                        width: l,
                        height: a,
                      },
                      horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                      vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                    };
                  d < l && C(e + i) < d && (s.horizontal = "center"),
                    p < a && C(n + o) < p && (s.vertical = "middle"),
                    W(C(e), C(i)) > W(C(n), C(o))
                      ? (s.important = "horizontal")
                      : (s.important = "vertical"),
                    f.using.call(this, t, s);
                }),
              r.offset(x.extend(h, { using: t }));
          }))
        : h.apply(this, arguments);
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i,
            n = e.within,
            o = n.isWindow ? n.scrollLeft : n.offset.left,
            n = n.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = o - s,
            l = s + e.collisionWidth - n - o;
          e.collisionWidth > n
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - n - o), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? o + n - e.collisionWidth : o)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left));
        },
        top: function (t, e) {
          var i,
            n = e.within,
            n = n.isWindow ? n.scrollTop : n.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n;
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            i = i.isWindow ? i.scrollLeft : i.offset.left,
            s = t.left - e.collisionPosition.marginLeft,
            r = s - i,
            s = s + e.collisionWidth - o - i,
            l =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            a =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            h = -2 * e.offset[0];
          r < 0
            ? ((o = t.left + l + a + h + e.collisionWidth - o - n) < 0 ||
                o < C(r)) &&
              (t.left += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.left - e.collisionPosition.marginLeft + l + a + h - i) ||
                C(n) < s) &&
              (t.left += l + a + h);
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            i = i.isWindow ? i.scrollTop : i.offset.top,
            s = t.top - e.collisionPosition.marginTop,
            r = s - i,
            s = s + e.collisionHeight - o - i,
            l =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            a =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            h = -2 * e.offset[1];
          r < 0
            ? ((o = t.top + l + a + h + e.collisionHeight - o - n) < 0 ||
                o < C(r)) &&
              (t.top += l + a + h)
            : 0 < s &&
              (0 <
                (n = t.top - e.collisionPosition.marginTop + l + a + h - i) ||
                C(n) < s) &&
              (t.top += l + a + h);
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = (i = i || e.body).nodeName ? i : e.body);
    }),
    (x.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
    }),
    /*!
     * jQuery UI Scroll Parent 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this);
            return (
              (!i || "static" !== t.css("position")) &&
              n.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : x(this[0].ownerDocument || document);
    }),
    /*!
     * jQuery UI Tabbable 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      tabbable: function (t) {
        var e = x.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && x.ui.focusable(t, i);
      },
    }),
    /*!
     * jQuery UI Unique ID 1.13.2
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      uniqueId:
        ((u = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++u);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
        });
      },
    });
  /*!
   * jQuery UI Widget 1.13.2
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var f,
    c = 0,
    d = Array.prototype.hasOwnProperty,
    p = Array.prototype.slice;
  (x.cleanData =
    ((f = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
      f(t);
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split(".")[0],
        a = l + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = x.Widget)),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr.pseudos[a.toLowerCase()] = function (t) {
          return !!x.data(t, a);
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments);
          }
          function s(t) {
            return i.prototype[e].apply(this, t);
          }
          r[e] =
            "function" != typeof n
              ? n
              : function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = o),
                    (this._superApply = s),
                    (t = n.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                };
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a }
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype;
              x.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      );
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            d.call(n[o], e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s;
      x.fn[s] = function (i) {
        var t = "string" == typeof i,
          n = p.call(arguments, 1),
          o = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r);
                  return "instance" === i
                    ? ((o = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                      : void 0
                    : x.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this));
              })),
          o
        );
      };
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = c++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: x.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t;
        if (0 === arguments.length) return x.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            s[t] = e;
          }
        return this._setOptions(s), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, n;
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (o) {
        var s = [],
          r = this;
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? ((function () {
                    var i = [];
                    o.element.each(function (t, e) {
                      x
                        .map(r.classesElementLookup, function (t) {
                          return t;
                        })
                        .some(function (t) {
                          return t.is(e);
                        }) || i.push(e);
                    }),
                      r._on(x(i), { remove: "_untrackClassesElement" });
                  })(),
                  x(x.uniqueSort(i.get().concat(o.element.get()))))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]]);
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o
          )).keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var n = this;
        x.each(n.classesElementLookup, function (t, e) {
          -1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()));
        }),
          this._off(x(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, n) {
        var o = "string" == typeof t || null === t,
          e = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = "boolean" == typeof n ? n : i),
          };
        return e.element.toggleClass(this._classes(e), n), this;
      },
      _on: function (o, s, t) {
        var r,
          l = this;
        "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? l[e] : e).apply(l, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++);
            var t = t.match(/^([\w:-]*)\s*(.*)$/),
              n = t[1] + l.eventNamespace,
              t = t[2];
            t ? r.on(n, t, i) : s.on(n, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t];
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof s &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
      x.Widget.prototype["_" + s] = function (e, t, i) {
        var n,
          o = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : s;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (n = !x.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          n && x.effects && x.effects.effect[o]
            ? e[s](t)
            : o !== s && e[o]
            ? e[o](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t();
              });
      };
    });
});
var elementorFrontendConfig = {
  environmentMode: { edit: !1, wpPreview: !1, isScriptDebug: !1 },
  i18n: {
    shareOnFacebook: "Share on Facebook",
    shareOnTwitter: "Share on Twitter",
    pinIt: "Pin it",
    download: "Download",
    downloadImage: "Download image",
    fullscreen: "Fullscreen",
    zoom: "Zoom",
    share: "Share",
    playVideo: "Play Video",
    previous: "Previous",
    next: "Next",
    close: "Close",
    a11yCarouselWrapperAriaLabel:
      "Carousel | Horizontal scrolling: Arrow Left & Right",
    a11yCarouselPrevSlideMessage: "Previous slide",
    a11yCarouselNextSlideMessage: "Next slide",
    a11yCarouselFirstSlideMessage: "This is the first slide",
    a11yCarouselLastSlideMessage: "This is the last slide",
    a11yCarouselPaginationBulletMessage: "Go to slide",
  },
  is_rtl: !1,
  breakpoints: { xs: 0, sm: 480, md: 768, lg: 1025, xl: 1440, xxl: 1600 },
  responsive: {
    breakpoints: {
      mobile: {
        label: "Mobile Portrait",
        value: 767,
        default_value: 767,
        direction: "max",
        is_enabled: !0,
      },
      mobile_extra: {
        label: "Mobile Landscape",
        value: 880,
        default_value: 880,
        direction: "max",
        is_enabled: !0,
      },
      tablet: {
        label: "Tablet Portrait",
        value: 1024,
        default_value: 1024,
        direction: "max",
        is_enabled: !0,
      },
      tablet_extra: {
        label: "Tablet Landscape",
        value: 1200,
        default_value: 1200,
        direction: "max",
        is_enabled: !0,
      },
      laptop: {
        label: "Laptop",
        value: 1366,
        default_value: 1366,
        direction: "max",
        is_enabled: !0,
      },
      widescreen: {
        label: "Widescreen",
        value: 2400,
        default_value: 2400,
        direction: "min",
        is_enabled: !0,
      },
    },
  },
  version: "3.15.1",
  is_static: !1,
  experimentalFeatures: {
    e_dom_optimization: !0,
    e_optimized_assets_loading: !0,
    additional_custom_breakpoints: !0,
    theme_builder_v2: !0,
    "landing-pages": !0,
    "page-transitions": !0,
    notes: !0,
    loop: !0,
    "form-submissions": !0,
    e_scroll_snap: !0,
  },
  urls: {
    assets:
      "https://wordpress-theme.spider-themes.net/banca/wp-content/plugins/elementor/assets/",
  },
  swiperClass: "swiper-container",
  settings: { page: [], editorPreferences: [] },
  kit: {
    active_breakpoints: [
      "viewport_mobile",
      "viewport_mobile_extra",
      "viewport_tablet",
      "viewport_tablet_extra",
      "viewport_laptop",
      "viewport_widescreen",
    ],
    global_image_lightbox: "yes",
    lightbox_enable_counter: "yes",
    lightbox_enable_fullscreen: "yes",
    lightbox_enable_zoom: "yes",
    lightbox_enable_share: "yes",
    lightbox_title_src: "title",
    lightbox_description_src: "description",
  },
  post: {
    id: 66,
    title: "FAQ%20%E2%80%93%20Banca",
    excerpt: "",
    featuredImage: !1,
  },
}; /*! elementor - v3.15.0 - 02-08-2023 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [819],
  {
    9220: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(8135));
      class _default extends elementorModules.ViewModule {
        constructor() {
          super(...arguments),
            (this.documents = {}),
            this.initDocumentClasses(),
            this.attachDocumentsClasses();
        }
        getDefaultSettings() {
          return { selectors: { document: ".elementor" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $documents: jQuery(e.document) };
        }
        initDocumentClasses() {
          (this.documentClasses = { base: i.default }),
            elementorFrontend.hooks.doAction(
              "elementor/frontend/documents-manager/init-classes",
              this
            );
        }
        addDocumentClass(e, t) {
          this.documentClasses[e] = t;
        }
        attachDocumentsClasses() {
          this.elements.$documents.each((e, t) =>
            this.attachDocumentClass(jQuery(t))
          );
        }
        attachDocumentClass(e) {
          const t = e.data(),
            n = t.elementorId,
            s = t.elementorType,
            i = this.documentClasses[s] || this.documentClasses.base;
          this.documents[n] = new i({ $element: e, id: n });
        }
      }
      t.default = _default;
    },
    9804: (e, t, n) => {
      "use strict";
      var s = n(3203),
        i = s(n(6397)),
        o = s(n(8704)),
        r = s(n(4985)),
        a = s(n(7537)),
        l = s(n(355)),
        d = s(n(2804)),
        c = s(n(3384));
      e.exports = function (e) {
        var t = this;
        const s = {};
        (this.elementsHandlers = {
          "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
          "alert.default": () => n.e(745).then(n.bind(n, 9269)),
          "counter.default": () => n.e(120).then(n.bind(n, 7884)),
          "progress.default": () => n.e(192).then(n.bind(n, 1351)),
          "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
          "toggle.default": () => n.e(181).then(n.bind(n, 2)),
          "video.default": () => n.e(791).then(n.bind(n, 5363)),
          "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
          "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
          "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602)),
        }),
          elementorFrontendConfig.experimentalFeatures["nested-elements"] &&
            ((this.elementsHandlers["nested-tabs.default"] = () =>
              Promise.resolve().then(n.bind(n, 7323))),
            (this.elementsHandlers["nested-accordion.default"] = () =>
              Promise.resolve().then(n.bind(n, 32))));
        const addElementsHandlers = () => {
            (this.elementsHandlers.section = [
              d.default,
              ...o.default,
              l.default,
              c.default,
            ]),
              (this.elementsHandlers.container = [...o.default]),
              elementorFrontend.isEditMode() &&
                this.elementsHandlers.container.push(...r.default),
              (this.elementsHandlers.column = a.default),
              e.each(this.elementsHandlers, (e, t) => {
                const n = e.split(".");
                e = n[0];
                const s = n[1] || null;
                this.attachHandler(e, t, s);
              });
          },
          isClassHandler = (e) => e.prototype?.getUniqueHandlerID;
        (this.addHandler = function (t, n) {
          const i = n.$element.data("model-cid");
          let o;
          if (i) {
            (o = t.prototype.getConstructorID()), s[i] || (s[i] = {});
            const e = s[i][o];
            e && e.onDestroy();
          }
          const r = new t(n);
          elementorFrontend.hooks.doAction(
            `frontend/element_handler_ready/${n.elementName}`,
            n.$element,
            e
          ),
            i && (s[i][o] = r);
        }),
          (this.attachHandler = (e, n, s) => {
            Array.isArray(n) || (n = [n]),
              n.forEach((n) =>
                (function (e, n) {
                  let s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "default";
                  s = s ? "." + s : "";
                  const i = e + s;
                  elementorFrontend.hooks.addAction(
                    `frontend/element_ready/${i}`,
                    (e) => {
                      if (isClassHandler(n))
                        t.addHandler(n, { $element: e, elementName: i }, !0);
                      else {
                        const s = n();
                        if (!s) return;
                        s instanceof Promise
                          ? s.then((n) => {
                              let { default: s } = n;
                              t.addHandler(
                                s,
                                { $element: e, elementName: i },
                                !0
                              );
                            })
                          : t.addHandler(
                              s,
                              { $element: e, elementName: i },
                              !0
                            );
                      }
                    }
                  );
                })(e, n, s)
              );
          }),
          (this.getHandler = function (e) {
            const t = this.elementsHandlers[e];
            return isClassHandler(t)
              ? t
              : new Promise((e) => {
                  t().then((t) => {
                    let { default: n } = t;
                    e(n);
                  });
                });
          }),
          (this.getHandlers = function (e) {
            return (
              elementorDevTools.deprecation.deprecated(
                "getHandlers",
                "3.1.0",
                "elementorFrontend.elementsHandler.getHandler"
              ),
              e ? this.getHandler(e) : this.elementsHandlers
            );
          }),
          (this.runReadyTrigger = function (t) {
            if (elementorFrontend.config.is_static) return;
            const n = jQuery(t),
              s = n.attr("data-element_type");
            if (
              s &&
              (elementorFrontend.hooks.doAction(
                "frontend/element_ready/global",
                n,
                e
              ),
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${s}`,
                n,
                e
              ),
              "widget" === s)
            ) {
              const t = n.attr("data-widget_type");
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${t}`,
                n,
                e
              );
            }
          }),
          (this.init = () => {
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/global",
              i.default
            ),
              addElementsHandlers();
          });
      };
    },
    5654: (e, t, n) => {
      "use strict";
      var s = n(3203);
      n(59);
      var i = s(n(9220)),
        o = s(n(5107)),
        r = s(n(3308)),
        a = s(n(1604)),
        l = s(n(1911)),
        d = s(n(4773)),
        c = s(n(2064)),
        u = s(n(8628)),
        h = s(n(8646)),
        m = s(n(6866)),
        g = s(n(4375)),
        p = s(n(6404)),
        f = s(n(6046)),
        v = s(n(1322)),
        b = n(6028);
      const _ = n(9469),
        y = n(9804),
        w = n(3346);
      class Frontend extends elementorModules.ViewModule {
        constructor() {
          super(...arguments),
            (this.config = elementorFrontendConfig),
            (this.config.legacyMode = {
              get elementWrappers() {
                return (
                  elementorFrontend.isEditMode() &&
                    window.top.elementorDevTools.deprecation.deprecated(
                      "elementorFrontend.config.legacyMode.elementWrappers",
                      "3.1.0",
                      "elementorFrontend.config.experimentalFeatures.e_dom_optimization"
                    ),
                  !elementorFrontend.config.experimentalFeatures
                    .e_dom_optimization
                );
              },
            }),
            this.populateActiveBreakpointsConfig();
        }
        get Module() {
          return (
            this.isEditMode() &&
              parent.elementorDevTools.deprecation.deprecated(
                "elementorFrontend.Module",
                "2.5.0",
                "elementorModules.frontend.handlers.Base"
              ),
            elementorModules.frontend.handlers.Base
          );
        }
        getDefaultSettings() {
          return {
            selectors: { elementor: ".elementor", adminBar: "#wpadminbar" },
          };
        }
        getDefaultElements() {
          const e = {
            window,
            $window: jQuery(window),
            $document: jQuery(document),
            $head: jQuery(document.head),
            $body: jQuery(document.body),
            $deviceMode: jQuery("<span>", {
              id: "elementor-device-mode",
              class: "elementor-screen-only",
            }),
          };
          return e.$body.append(e.$deviceMode), e;
        }
        bindEvents() {
          this.elements.$window.on("resize", () => this.setDeviceModeData());
        }
        getElements(e) {
          return this.getItems(this.elements, e);
        }
        getPageSettings(e) {
          const t = this.isEditMode()
            ? elementor.settings.page.model.attributes
            : this.config.settings.page;
          return this.getItems(t, e);
        }
        getGeneralSettings(e) {
          return (
            this.isEditMode() &&
              parent.elementorDevTools.deprecation.deprecated(
                "getGeneralSettings()",
                "3.0.0",
                "getKitSettings() and remove the `elementor_` prefix"
              ),
            this.getKitSettings(`elementor_${e}`)
          );
        }
        getKitSettings(e) {
          return this.getItems(this.config.kit, e);
        }
        getCurrentDeviceMode() {
          return getComputedStyle(
            this.elements.$deviceMode[0],
            ":after"
          ).content.replace(/"/g, "");
        }
        getDeviceSetting(e, t, n) {
          if ("widescreen" === e) return this.getWidescreenSetting(t, n);
          const s = elementorFrontend.breakpoints.getActiveBreakpointsList({
            largeToSmall: !0,
            withDesktop: !0,
          });
          let i = s.indexOf(e);
          for (; i > 0; ) {
            const e = t[n + "_" + s[i]];
            if (e || 0 === e) return e;
            i--;
          }
          return t[n];
        }
        getWidescreenSetting(e, t) {
          const n = t + "_widescreen";
          let s;
          return (s = e[n] ? e[n] : e[t]), s;
        }
        getCurrentDeviceSetting(e, t) {
          return this.getDeviceSetting(
            elementorFrontend.getCurrentDeviceMode(),
            e,
            t
          );
        }
        isEditMode() {
          return this.config.environmentMode.edit;
        }
        isWPPreviewMode() {
          return this.config.environmentMode.wpPreview;
        }
        initDialogsManager() {
          let e;
          this.getDialogsManager = () => (
            e || (e = new DialogsManager.Instance()), e
          );
        }
        initOnReadyComponents() {
          (this.utils = {
            youtube: new a.default(),
            vimeo: new l.default(),
            baseVideoLoader: new d.default(),
            anchors: new w(),
            get lightbox() {
              return h.default.getLightbox();
            },
            urlActions: new c.default(),
            swiper: u.default,
            environment: r.default,
            assetsLoader: new m.default(),
            escapeHTML: b.escapeHTML,
            events: p.default,
            controls: new v.default(),
          }),
            (this.modules = {
              StretchElement: elementorModules.frontend.tools.StretchElement,
              Masonry: elementorModules.utils.Masonry,
            }),
            this.elementsHandler.init(),
            this.isEditMode()
              ? elementor.once("document:loaded", () => this.onDocumentLoaded())
              : this.onDocumentLoaded();
        }
        initOnReadyElements() {
          this.elements.$wpAdminBar = this.elements.$document.find(
            this.getSettings("selectors.adminBar")
          );
        }
        addUserAgentClasses() {
          for (const [e, t] of Object.entries(r.default))
            t && this.elements.$body.addClass("e--ua-" + e);
        }
        setDeviceModeData() {
          this.elements.$body.attr(
            "data-elementor-device-mode",
            this.getCurrentDeviceMode()
          );
        }
        addListenerOnce(e, t, n, s) {
          if ((s || (s = this.elements.$window), this.isEditMode()))
            if ((this.removeListeners(e, t, s), s instanceof jQuery)) {
              const i = t + "." + e;
              s.on(i, n);
            } else s.on(t, n, e);
          else s.on(t, n);
        }
        removeListeners(e, t, n, s) {
          if ((s || (s = this.elements.$window), s instanceof jQuery)) {
            const i = t + "." + e;
            s.off(i, n);
          } else s.off(t, n, e);
        }
        debounce(e, t) {
          let n;
          return function () {
            const s = this,
              i = arguments,
              o = !n;
            clearTimeout(n),
              (n = setTimeout(() => {
                (n = null), e.apply(s, i);
              }, t)),
              o && e.apply(s, i);
          };
        }
        waypoint(e, t, n) {
          n = jQuery.extend({ offset: "100%", triggerOnce: !0 }, n);
          return e.elementorWaypoint(function () {
            const e = this.element || this,
              s = t.apply(e, arguments);
            return n.triggerOnce && this.destroy && this.destroy(), s;
          }, n);
        }
        muteMigrationTraces() {
          (jQuery.migrateMute = !0), (jQuery.migrateTrace = !1);
        }
        initModules() {
          const e = { shapes: f.default };
          elementorFrontend.trigger("elementor/modules/init:before"),
            elementorFrontend.trigger("elementor/modules/init/before"),
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              this.modulesHandlers[t] = new n();
            });
        }
        populateActiveBreakpointsConfig() {
          (this.config.responsive.activeBreakpoints = {}),
            Object.entries(this.config.responsive.breakpoints).forEach((e) => {
              let [t, n] = e;
              n.is_enabled && (this.config.responsive.activeBreakpoints[t] = n);
            });
        }
        init() {
          (this.hooks = new _()),
            (this.breakpoints = new g.default(this.config.responsive)),
            (this.storage = new o.default()),
            (this.elementsHandler = new y(jQuery)),
            (this.modulesHandlers = {}),
            this.addUserAgentClasses(),
            this.setDeviceModeData(),
            this.initDialogsManager(),
            this.isEditMode() && this.muteMigrationTraces(),
            p.default.dispatch(
              this.elements.$window,
              "elementor/frontend/init"
            ),
            this.initModules(),
            this.initOnReadyElements(),
            this.initOnReadyComponents();
        }
        onDocumentLoaded() {
          (this.documentsManager = new i.default()),
            this.trigger("components:init"),
            new h.default();
        }
      }
      (window.elementorFrontend = new Frontend()),
        elementorFrontend.isEditMode() ||
          jQuery(() => elementorFrontend.init());
    },
    4058: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundSlideshow extends elementorModules.frontend.handlers
        .SwiperBase {
        getDefaultSettings() {
          return {
            classes: {
              swiperContainer: `elementor-background-slideshow ${elementorFrontend.config.swiperClass}`,
              swiperWrapper: "swiper-wrapper",
              swiperSlide: "elementor-background-slideshow__slide swiper-slide",
              swiperPreloader: "swiper-lazy-preloader",
              slideBackground: "elementor-background-slideshow__slide__image",
              kenBurns: "elementor-ken-burns",
              kenBurnsActive: "elementor-ken-burns--active",
              kenBurnsIn: "elementor-ken-burns--in",
              kenBurnsOut: "elementor-ken-burns--out",
            },
          };
        }
        getSwiperOptions() {
          const e = this.getElementSettings(),
            t = {
              grabCursor: !1,
              slidesPerView: 1,
              slidesPerGroup: 1,
              loop: "yes" === e.background_slideshow_loop,
              speed: e.background_slideshow_transition_duration,
              autoplay: {
                delay: e.background_slideshow_slide_duration,
                stopOnLastSlide: !e.background_slideshow_loop,
              },
              handleElementorBreakpoints: !0,
              on: {
                slideChange: () => {
                  e.background_slideshow_ken_burns && this.handleKenBurns();
                },
              },
            };
          switch (
            ("yes" === e.background_slideshow_loop &&
              (t.loopedSlides = this.getSlidesCount()),
            e.background_slideshow_slide_transition)
          ) {
            case "fade":
              (t.effect = "fade"), (t.fadeEffect = { crossFade: !0 });
              break;
            case "slide_down":
              (t.autoplay.reverseDirection = !0), (t.direction = "vertical");
              break;
            case "slide_up":
              t.direction = "vertical";
          }
          return (
            "yes" === e.background_slideshow_lazyload &&
              (t.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            t
          );
        }
        buildSwiperElements() {
          const e = this.getSettings("classes"),
            t = this.getElementSettings(),
            n =
              "slide_left" === t.background_slideshow_slide_transition
                ? "ltr"
                : "rtl",
            s = jQuery("<div>", { class: e.swiperContainer, dir: n }),
            i = jQuery("<div>", { class: e.swiperWrapper }),
            o = t.background_slideshow_ken_burns,
            r = "yes" === t.background_slideshow_lazyload;
          let a = e.slideBackground;
          if (o) {
            a += " " + e.kenBurns;
            const n =
              "in" === t.background_slideshow_ken_burns_zoom_direction
                ? "kenBurnsIn"
                : "kenBurnsOut";
            a += " " + e[n];
          }
          r && (a += " swiper-lazy"),
            (this.elements.$slides = jQuery()),
            t.background_slideshow_gallery.forEach((t) => {
              const n = jQuery("<div>", { class: e.swiperSlide });
              let s;
              if (r) {
                const n = jQuery("<div>", { class: e.swiperPreloader });
                (s = jQuery("<div>", { class: a, "data-background": t.url })),
                  s.append(n);
              } else
                s = jQuery("<div>", {
                  class: a,
                  style: 'background-image: url("' + t.url + '");',
                });
              n.append(s),
                i.append(n),
                (this.elements.$slides = this.elements.$slides.add(n));
            }),
            s.append(i),
            this.$element.prepend(s),
            (this.elements.$backgroundSlideShowContainer = s);
        }
        async initSlider() {
          if (1 >= this.getSlidesCount()) return;
          const e = this.getElementSettings(),
            t = elementorFrontend.utils.swiper;
          (this.swiper = await new t(
            this.elements.$backgroundSlideShowContainer,
            this.getSwiperOptions()
          )),
            this.elements.$backgroundSlideShowContainer.data(
              "swiper",
              this.swiper
            ),
            e.background_slideshow_ken_burns && this.handleKenBurns();
        }
        activate() {
          this.buildSwiperElements(), this.initSlider();
        }
        deactivate() {
          this.swiper &&
            (this.swiper.destroy(),
            this.elements.$backgroundSlideShowContainer.remove());
        }
        run() {
          "slideshow" === this.getElementSettings("background_background")
            ? this.activate()
            : this.deactivate();
        }
        onInit() {
          super.onInit(),
            this.getElementSettings("background_slideshow_gallery") &&
              this.run();
        }
        onDestroy() {
          super.onDestroy(), this.deactivate();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundSlideshow;
    },
    9501: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundVideo extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: {
              backgroundVideoContainer: ".elementor-background-video-container",
              backgroundVideoEmbed: ".elementor-background-video-embed",
              backgroundVideoHosted: ".elementor-background-video-hosted",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = {
              $backgroundVideoContainer: this.$element.find(
                e.backgroundVideoContainer
              ),
            };
          return (
            (t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(
              e.backgroundVideoEmbed
            )),
            (t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(
              e.backgroundVideoHosted
            )),
            t
          );
        }
        calcVideosSize(e) {
          let t = "16:9";
          "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
          const n = this.elements.$backgroundVideoContainer.outerWidth(),
            s = this.elements.$backgroundVideoContainer.outerHeight(),
            i = t.split(":"),
            o = i[0] / i[1],
            r = n / s > o;
          return { width: r ? n : s * o, height: r ? n / o : s };
        }
        changeVideoSize() {
          if ("hosted" !== this.videoType && !this.player) return;
          let e;
          if (
            ("youtube" === this.videoType
              ? (e = jQuery(this.player.getIframe()))
              : "vimeo" === this.videoType
              ? (e = jQuery(this.player.element))
              : "hosted" === this.videoType &&
                (e = this.elements.$backgroundVideoHosted),
            !e)
          )
            return;
          const t = this.calcVideosSize(e);
          e.width(t.width).height(t.height);
        }
        startVideoLoop(e) {
          if (!this.player.getIframe().contentWindow) return;
          const t = this.getElementSettings(),
            n = t.background_video_start || 0,
            s = t.background_video_end;
          if (!t.background_play_once || e) {
            if ((this.player.seekTo(n), s)) {
              setTimeout(() => {
                this.startVideoLoop(!1);
              }, 1e3 * (s - n + 1));
            }
          } else this.player.stopVideo();
        }
        prepareVimeoVideo(e, t) {
          const n = this.getElementSettings(),
            s = {
              url: t,
              width: this.elements.$backgroundVideoContainer.outerWidth().width,
              autoplay: !0,
              loop: !n.background_play_once,
              transparent: !1,
              background: !0,
              muted: !0,
            };
          n.background_privacy_mode && (s.dnt = !0),
            (this.player = new e.Player(
              this.elements.$backgroundVideoContainer,
              s
            )),
            this.handleVimeoStartEndTimes(n),
            this.player.ready().then(() => {
              jQuery(this.player.element).addClass(
                "elementor-background-video-embed"
              ),
                this.changeVideoSize();
            });
        }
        handleVimeoStartEndTimes(e) {
          e.background_video_start &&
            this.player.on("play", (t) => {
              0 === t.seconds &&
                this.player.setCurrentTime(e.background_video_start);
            }),
            this.player.on("timeupdate", (t) => {
              e.background_video_end &&
                e.background_video_end < t.seconds &&
                (e.background_play_once
                  ? this.player.pause()
                  : this.player.setCurrentTime(e.background_video_start)),
                this.player.getDuration().then((n) => {
                  e.background_video_start &&
                    !e.background_video_end &&
                    t.seconds > n - 0.5 &&
                    this.player.setCurrentTime(e.background_video_start);
                });
            });
        }
        prepareYTVideo(e, t) {
          const n = this.elements.$backgroundVideoContainer,
            s = this.getElementSettings();
          let i = e.PlayerState.PLAYING;
          window.chrome && (i = e.PlayerState.UNSTARTED);
          const o = {
            videoId: t,
            events: {
              onReady: () => {
                this.player.mute(),
                  this.changeVideoSize(),
                  this.startVideoLoop(!0),
                  this.player.playVideo();
              },
              onStateChange: (t) => {
                switch (t.data) {
                  case i:
                    n.removeClass("elementor-invisible elementor-loading");
                    break;
                  case e.PlayerState.ENDED:
                    "function" == typeof this.player.seekTo &&
                      this.player.seekTo(s.background_video_start || 0),
                      s.background_play_once && this.player.destroy();
                }
              },
            },
            playerVars: { controls: 0, rel: 0, playsinline: 1 },
          };
          s.background_privacy_mode &&
            ((o.host = "https://www.youtube-nocookie.com"),
            (o.origin = window.location.hostname)),
            n.addClass("elementor-loading elementor-invisible"),
            (this.player = new e.Player(
              this.elements.$backgroundVideoEmbed[0],
              o
            ));
        }
        activate() {
          let e,
            t = this.getElementSettings("background_video_link");
          const n = this.getElementSettings("background_play_once");
          if (
            (-1 !== t.indexOf("vimeo.com")
              ? ((this.videoType = "vimeo"),
                (this.apiProvider = elementorFrontend.utils.vimeo))
              : t.match(
                  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/
                ) &&
                ((this.videoType = "youtube"),
                (this.apiProvider = elementorFrontend.utils.youtube)),
            this.apiProvider)
          )
            (e = this.apiProvider.getVideoIDFromURL(t)),
              this.apiProvider.onApiReady((n) => {
                "youtube" === this.videoType && this.prepareYTVideo(n, e),
                  "vimeo" === this.videoType && this.prepareVimeoVideo(n, t);
              });
          else {
            this.videoType = "hosted";
            const e = this.getElementSettings("background_video_start"),
              s = this.getElementSettings("background_video_end");
            (e || s) && (t += "#t=" + (e || 0) + (s ? "," + s : "")),
              this.elements.$backgroundVideoHosted
                .attr("src", t)
                .one("canplay", this.changeVideoSize.bind(this)),
              n &&
                this.elements.$backgroundVideoHosted.on("ended", () => {
                  this.elements.$backgroundVideoHosted.hide();
                });
          }
          elementorFrontend.elements.$window.on(
            "resize elementor/bg-video/recalc",
            this.changeVideoSize
          );
        }
        deactivate() {
          ("youtube" === this.videoType && this.player.getIframe()) ||
          "vimeo" === this.videoType
            ? this.player.destroy()
            : this.elements.$backgroundVideoHosted
                .removeAttr("src")
                .off("ended"),
            elementorFrontend.elements.$window.off(
              "resize",
              this.changeVideoSize
            );
        }
        run() {
          const e = this.getElementSettings();
          (e.background_play_on_mobile ||
            "mobile" !== elementorFrontend.getCurrentDeviceMode()) &&
            ("video" === e.background_background && e.background_video_link
              ? this.activate()
              : this.deactivate());
        }
        onInit() {
          super.onInit(...arguments),
            (this.changeVideoSize = this.changeVideoSize.bind(this)),
            this.run();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundVideo;
    },
    8704: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(4058)),
        o = s(n(9501)),
        r = [i.default, o.default];
      t.default = r;
    },
    7537: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = [s(n(4058)).default];
      t.default = i;
    },
    4985: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = [
        () => n.e(413).then(n.bind(n, 2929)),
        () => n.e(413).then(n.bind(n, 343)),
        () => n.e(413).then(n.bind(n, 8073)),
      ];
      t.default = s;
    },
    6397: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class GlobalHandler extends elementorModules.frontend.handlers.Base {
        getWidgetType() {
          return "global";
        }
        animate() {
          const e = this.$element,
            t = this.getAnimation();
          if ("none" === t) return void e.removeClass("elementor-invisible");
          const n = this.getElementSettings(),
            s = n._animation_delay || n.animation_delay || 0;
          e.removeClass(t),
            this.currentAnimation && e.removeClass(this.currentAnimation),
            (this.currentAnimation = t),
            setTimeout(() => {
              e.removeClass("elementor-invisible").addClass("animated " + t);
            }, s);
        }
        getAnimation() {
          return (
            this.getCurrentDeviceSetting("animation") ||
            this.getCurrentDeviceSetting("_animation")
          );
        }
        onInit() {
          if ((super.onInit(...arguments), this.getAnimation())) {
            const e = elementorModules.utils.Scroll.scrollObserver({
              callback: (t) => {
                t.isInViewport &&
                  (this.animate(), e.unobserve(this.$element[0]));
              },
            });
            e.observe(this.$element[0]);
          }
        }
        onElementChange(e) {
          /^_?animation/.test(e) && this.animate();
        }
      }
      t.default = (e) => {
        elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
          $element: e,
        });
      };
    },
    355: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class HandlesPosition extends elementorModules.frontend.handlers.Base {
        isActive() {
          return elementorFrontend.isEditMode();
        }
        isFirstSection() {
          return (
            this.$element[0] ===
            document.querySelector(
              ".elementor-edit-mode .elementor-top-section"
            )
          );
        }
        isOverflowHidden() {
          return "hidden" === this.$element.css("overflow");
        }
        getOffset() {
          if ("body" === elementor.config.document.container)
            return this.$element.offset().top;
          const e = jQuery(elementor.config.document.container);
          return this.$element.offset().top - e.offset().top;
        }
        setHandlesPosition() {
          const e = elementor.documents.getCurrent();
          if (!e || !e.container.isEditable()) return;
          const t = "elementor-section--handles-inside";
          if (elementor.settings.page.model.attributes.scroll_snap)
            return void this.$element.addClass(t);
          const n = this.isOverflowHidden();
          if (!n && !this.isFirstSection()) return;
          const s = n ? 0 : this.getOffset();
          if (s < 25) {
            this.$element.addClass(t);
            const e = this.$element.find(
              "> .elementor-element-overlay > .elementor-editor-section-settings"
            );
            s < -5 ? e.css("top", -s) : e.css("top", "");
          } else this.$element.removeClass(t);
        }
        onInit() {
          this.isActive() &&
            (this.setHandlesPosition(),
            this.$element.on("mouseenter", this.setHandlesPosition.bind(this)));
        }
      }
      t.default = HandlesPosition;
    },
    3384: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Shapes extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: { container: "> .elementor-shape-%s" },
            svgURL: elementorFrontend.config.urls.assets + "shapes/",
          };
        }
        getDefaultElements() {
          const e = {},
            t = this.getSettings("selectors");
          return (
            (e.$topContainer = this.$element.find(
              t.container.replace("%s", "top")
            )),
            (e.$bottomContainer = this.$element.find(
              t.container.replace("%s", "bottom")
            )),
            e
          );
        }
        isActive() {
          return elementorFrontend.isEditMode();
        }
        getSvgURL(e, t) {
          let n = this.getSettings("svgURL") + t + ".svg";
          return (
            elementor.config.additional_shapes &&
              e in elementor.config.additional_shapes &&
              ((n = elementor.config.additional_shapes[e]),
              -1 < t.indexOf("-negative") &&
                (n = n.replace(".svg", "-negative.svg"))),
            n
          );
        }
        buildSVG(e) {
          const t = "shape_divider_" + e,
            n = this.getElementSettings(t),
            s = this.elements["$" + e + "Container"];
          if ((s.attr("data-shape", n), !n)) return void s.empty();
          let i = n;
          this.getElementSettings(t + "_negative") && (i += "-negative");
          const o = this.getSvgURL(n, i);
          jQuery.get(o, (e) => {
            s.empty().append(e.childNodes[0]);
          }),
            this.setNegative(e);
        }
        setNegative(e) {
          this.elements["$" + e + "Container"].attr(
            "data-negative",
            !!this.getElementSettings("shape_divider_" + e + "_negative")
          );
        }
        onInit() {
          this.isActive(this.getSettings()) &&
            (super.onInit(...arguments),
            ["top", "bottom"].forEach((e) => {
              this.getElementSettings("shape_divider_" + e) && this.buildSVG(e);
            }));
        }
        onElementChange(e) {
          const t = e.match(/^shape_divider_(top|bottom)$/);
          if (t) return void this.buildSVG(t[1]);
          const n = e.match(/^shape_divider_(top|bottom)_negative$/);
          n && (this.buildSVG(n[1]), this.setNegative(n[1]));
        }
      }
      t.default = Shapes;
    },
    2804: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class StretchedSection extends elementorModules.frontend.handlers
        .StretchedElement {
        getStretchedClass() {
          return "elementor-section-stretched";
        }
        getStretchSettingName() {
          return "stretch_section";
        }
        getStretchActiveValue() {
          return "section-stretched";
        }
      }
      t.default = StretchedSection;
    },
    3346: (e, t, n) => {
      "use strict";
      var s = n(6028);
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: () => ({
          scrollDuration: 500,
          selectors: {
            links: 'a[href*="#"]',
            targets: ".elementor-element, .elementor-menu-anchor",
            scrollable: (0, s.isScrollSnapActive)() ? "body" : "html, body",
          },
        }),
        getDefaultElements() {
          return {
            $scrollable: jQuery(this.getSettings("selectors").scrollable),
          };
        },
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.handleAnchorLinks
          );
        },
        handleAnchorLinks(e) {
          var t,
            n = e.currentTarget,
            i = location.pathname === n.pathname;
          if (location.hostname === n.hostname && i && !(n.hash.length < 2)) {
            try {
              t = jQuery(n.hash).filter(this.getSettings("selectors.targets"));
            } catch (e) {
              return;
            }
            if (t.length) {
              var o = t.offset().top,
                r = elementorFrontend.elements.$wpAdminBar,
                a = jQuery(
                  ".elementor-section.elementor-sticky--active:visible"
                );
              r.length > 0 && (o -= r.height()),
                a.length > 0 &&
                  (o -= Math.max.apply(
                    null,
                    a
                      .map(function () {
                        return jQuery(this).outerHeight();
                      })
                      .get()
                  )),
                e.preventDefault(),
                (o = elementorFrontend.hooks.applyFilters(
                  "frontend/handlers/menu_anchor/scroll_top_distance",
                  o
                )),
                (0, s.isScrollSnapActive)() &&
                  elementorFrontend.elements.$body.css(
                    "scroll-snap-type",
                    "none"
                  ),
                this.elements.$scrollable.animate(
                  { scrollTop: o },
                  this.getSettings("scrollDuration"),
                  "linear",
                  () => {
                    (0, s.isScrollSnapActive)() &&
                      elementorFrontend.elements.$body.css(
                        "scroll-snap-type",
                        ""
                      );
                  }
                );
            }
          }
        },
        onInit() {
          elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
      });
    },
    6866: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class AssetsLoader {
        getScriptElement(e) {
          const t = document.createElement("script");
          return (t.src = e), t;
        }
        getStyleElement(e) {
          const t = document.createElement("link");
          return (t.rel = "stylesheet"), (t.href = e), t;
        }
        load(e, t) {
          const n = AssetsLoader.assets[e][t];
          return (
            n.loader ||
              (n.loader = new Promise((t) => {
                const s =
                  "style" === e
                    ? this.getStyleElement(n.src)
                    : this.getScriptElement(n.src);
                s.onload = () => t(!0);
                const i = "head" === n.parent ? n.parent : "body";
                document[i].appendChild(s);
              })),
            n.loader
          );
        }
      }
      t.default = AssetsLoader;
      const n = elementorFrontendConfig.environmentMode.isScriptDebug
          ? ""
          : ".min",
        s = elementorFrontendConfig.experimentalFeatures.e_swiper_latest
          ? `${elementorFrontendConfig.urls.assets}lib/swiper/v8/swiper${n}.js?ver=8.4.5`
          : `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`;
      AssetsLoader.assets = {
        script: {
          dialog: {
            src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`,
          },
          "share-link": {
            src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`,
          },
          swiper: { src: s },
        },
        style: {},
      };
    },
    1322: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Controls {
        getControlValue(e, t, n) {
          let s;
          return (s = "object" == typeof e[t] && n ? e[t][n] : e[t]), s;
        }
        getResponsiveControlValue(e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const s =
              (arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null) || elementorFrontend.getCurrentDeviceMode(),
            i = this.getControlValue(e, t, n);
          if ("widescreen" === s) {
            const s = this.getControlValue(e, `${t}_widescreen`, n);
            return s || 0 === s ? s : i;
          }
          const o = elementorFrontend.breakpoints.getActiveBreakpointsList({
            withDesktop: !0,
          });
          let r = s,
            a = o.indexOf(s),
            l = "";
          for (; a <= o.length; ) {
            if ("desktop" === r) {
              l = i;
              break;
            }
            const s = `${t}_${r}`,
              d = this.getControlValue(e, s, n);
            if (d || 0 === d) {
              l = d;
              break;
            }
            a++, (r = o[a]);
          }
          return l;
        }
      };
    },
    8646: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class LightboxManager extends elementorModules.ViewModule {
        static getLightbox() {
          const e = new Promise((e) => {
              n.e(723)
                .then(n.t.bind(n, 3896, 23))
                .then((t) => {
                  let { default: n } = t;
                  return e(new n());
                });
            }),
            t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
            s = elementorFrontend.utils.assetsLoader.load(
              "script",
              "share-link"
            );
          return Promise.all([e, t, s]).then(() => e);
        }
        getDefaultSettings() {
          return { selectors: { links: "a, [data-elementor-lightbox]" } };
        }
        getDefaultElements() {
          return { $links: jQuery(this.getSettings("selectors.links")) };
        }
        isLightboxLink(e) {
          if (
            "a" === e.tagName.toLowerCase() &&
            (e.hasAttribute("download") ||
              !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) &&
            !e.dataset.elementorLightboxVideo
          )
            return !1;
          const t = elementorFrontend.getKitSettings("global_image_lightbox"),
            n = e.dataset.elementorOpenLightbox;
          return "yes" === n || (t && "no" !== n);
        }
        async onLinkClick(e) {
          const t = e.currentTarget,
            n = jQuery(e.target),
            s = elementorFrontend.isEditMode(),
            i =
              s &&
              elementor.$previewContents
                .find("body")
                .hasClass("elementor-editor__ui-state__color-picker"),
            o = !!n.closest(".elementor-edit-area").length;
          if (!this.isLightboxLink(t))
            return void (s && o && e.preventDefault());
          if (
            (e.preventDefault(),
            s && !elementor.getPreferences("lightbox_in_editor"))
          )
            return;
          if (i) return;
          (this.isOptimizedAssetsLoading()
            ? await LightboxManager.getLightbox()
            : elementorFrontend.utils.lightbox
          ).createLightbox(t);
        }
        isOptimizedAssetsLoading() {
          return elementorFrontend.config.experimentalFeatures
            .e_optimized_assets_loading;
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            (e) => this.onLinkClick(e)
          );
        }
        onInit() {
          super.onInit(...arguments),
            this.isOptimizedAssetsLoading() &&
              !elementorFrontend.isEditMode() &&
              this.elements.$links.each((e, t) => {
                if (this.isLightboxLink(t))
                  return LightboxManager.getLightbox(), !1;
              });
        }
      }
      t.default = LightboxManager;
    },
    8628: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Swiper {
        constructor(e, t) {
          return (
            (this.config = t),
            this.config.breakpoints && (this.config = this.adjustConfig(t)),
            e instanceof jQuery && (e = e[0]),
            e
              .closest(".elementor-widget-wrap")
              ?.classList.add("e-swiper-container"),
            e.closest(".elementor-widget")?.classList.add("e-widget-swiper"),
            new Promise((t) => {
              if (
                !elementorFrontend.config.experimentalFeatures
                  .e_optimized_assets_loading
              )
                return t(this.createSwiperInstance(e, this.config));
              elementorFrontend.utils.assetsLoader
                .load("script", "swiper")
                .then(() => t(this.createSwiperInstance(e, this.config)));
            })
          );
        }
        createSwiperInstance(e, t) {
          const n = window.Swiper;
          return (n.prototype.adjustConfig = this.adjustConfig), new n(e, t);
        }
        adjustConfig(e) {
          if (!e.handleElementorBreakpoints) return e;
          const t = elementorFrontend.config.responsive.activeBreakpoints,
            n = elementorFrontend.breakpoints.getBreakpointValues();
          return (
            Object.keys(e.breakpoints).forEach((s) => {
              const i = parseInt(s);
              let o;
              if (i === t.mobile.value || i + 1 === t.mobile.value) o = 0;
              else if (
                !t.widescreen ||
                (i !== t.widescreen.value && i + 1 !== t.widescreen.value)
              ) {
                const e = n.findIndex((e) => i === e || i + 1 === e);
                o = n[e - 1];
              } else o = i;
              (e.breakpoints[o] = e.breakpoints[s]),
                (e.breakpoints[s] = {
                  slidesPerView: e.slidesPerView,
                  slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1,
                });
            }),
            e
          );
        }
      };
    },
    2064: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        n(5719);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              links:
                'a[href^="%23elementor-action"], a[href^="#elementor-action"]',
            },
          };
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.runLinkAction.bind(this)
          );
        }
        initActions() {
          this.actions = {
            lightbox: async (e) => {
              const t = await elementorFrontend.utils.lightbox;
              e.slideshow
                ? t.openSlideshow(e.slideshow, e.url)
                : (e.id && (e.type = "image"), t.showModal(e));
            },
          };
        }
        addAction(e, t) {
          this.actions[e] = t;
        }
        runAction(e) {
          const t = (e = decodeURIComponent(e)).match(/action=(.+?)&/);
          if (!t) return;
          const n = this.actions[t[1]];
          if (!n) return;
          let s = {};
          const i = e.match(/settings=(.+)/);
          i && (s = JSON.parse(atob(i[1])));
          for (
            var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), a = 1;
            a < o;
            a++
          )
            r[a - 1] = arguments[a];
          n(s, ...r);
        }
        runLinkAction(e) {
          e.preventDefault(),
            this.runAction(jQuery(e.currentTarget).attr("href"), e);
        }
        runHashAction() {
          if (!location.hash) return;
          const e = document.querySelector(
            `[data-e-action-hash="${location.hash}"], a[href*="${location.hash}"]`
          );
          e && this.runAction(e.getAttribute("data-e-action-hash"));
        }
        createActionHash(e, t) {
          return encodeURIComponent(
            `#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`
          );
        }
        onInit() {
          super.onInit(),
            this.initActions(),
            elementorFrontend.on(
              "components:init",
              this.runHashAction.bind(this)
            );
        }
      }
      t.default = _default;
    },
    6028: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isScrollSnapActive = t.escapeHTML = void 0);
      t.escapeHTML = (e) => {
        const t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        };
        return e.replace(/[&<>'"]/g, (e) => t[e] || e);
      };
      t.isScrollSnapActive = () =>
        "yes" ===
        (elementorFrontend.isEditMode()
          ? elementor.settings.page.model.attributes?.scroll_snap
          : elementorFrontend.config.settings.page?.scroll_snap);
    },
    4773: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BaseLoader extends elementorModules.ViewModule {
        getDefaultSettings() {
          return { isInserted: !1, selectors: { firstScript: "script:first" } };
        }
        getDefaultElements() {
          return {
            $firstScript: jQuery(this.getSettings("selectors.firstScript")),
          };
        }
        insertAPI() {
          this.elements.$firstScript.before(
            jQuery("<script>", { src: this.getApiURL() })
          ),
            this.setSettings("isInserted", !0);
        }
        getVideoIDFromURL(e) {
          const t = e.match(this.getURLRegex());
          return t && t[1];
        }
        onApiReady(e) {
          this.getSettings("isInserted") || this.insertAPI(),
            this.isApiLoaded()
              ? e(this.getApiObject())
              : setTimeout(() => {
                  this.onApiReady(e);
                }, 350);
        }
        getAutoplayURL(e) {
          return e.replace("&autoplay=0", "") + "&autoplay=1";
        }
      }
      t.default = BaseLoader;
    },
    1911: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(4773));
      class VimeoLoader extends i.default {
        getApiURL() {
          return "https://player.vimeo.com/api/player.js";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
        }
        isApiLoaded() {
          return window.Vimeo;
        }
        getApiObject() {
          return Vimeo;
        }
        getAutoplayURL(e) {
          const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
          return e.replace(t[0], "") + t;
        }
      }
      t.default = VimeoLoader;
    },
    1604: (e, t, n) => {
      "use strict";
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(4773));
      class YoutubeLoader extends i.default {
        getApiURL() {
          return "https://www.youtube.com/iframe_api";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
        }
        isApiLoaded() {
          return window.YT && YT.loaded;
        }
        getApiObject() {
          return YT;
        }
      }
      t.default = YoutubeLoader;
    },
    59: (e, t, n) => {
      "use strict";
      n.p = elementorFrontendConfig.urls.assets + "js/";
    },
    4375: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Breakpoints extends elementorModules.Module {
        constructor(e) {
          super(), (this.responsiveConfig = e);
        }
        getActiveBreakpointsList() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          e = { largeToSmall: !1, withDesktop: !1, ...e };
          const t = Object.keys(this.responsiveConfig.activeBreakpoints);
          if (e.withDesktop) {
            const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
            t.splice(e, 0, "desktop");
          }
          return e.largeToSmall && t.reverse(), t;
        }
        getBreakpointValues() {
          const { activeBreakpoints: e } = this.responsiveConfig,
            t = [];
          return (
            Object.values(e).forEach((e) => {
              t.push(e.value);
            }),
            t
          );
        }
        getDesktopPreviousDeviceKey() {
          let e = "";
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t),
            s = n.length;
          return (e = "min" === t[n[s - 1]].direction ? n[s - 2] : n[s - 1]), e;
        }
        getDesktopMinPoint() {
          const { activeBreakpoints: e } = this.responsiveConfig;
          return e[this.getDesktopPreviousDeviceKey()].value + 1;
        }
        getDeviceMinBreakpoint(e) {
          if ("desktop" === e) return this.getDesktopMinPoint();
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t);
          let s;
          if (n[0] === e) s = 320;
          else if ("widescreen" === e)
            s = t[e]
              ? t[e].value
              : this.responsiveConfig.breakpoints.widescreen;
          else {
            const i = n.indexOf(e);
            s = t[n[i - 1]].value + 1;
          }
          return s;
        }
        getActiveMatchRegex() {
          return new RegExp(
            this.getActiveBreakpointsList()
              .map((e) => "_" + e)
              .join("|") + "$"
          );
        }
      }
      t.default = Breakpoints;
    },
    6404: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Events = void 0);
      class Events {
        static dispatch(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null;
          (e = e instanceof jQuery ? e[0] : e),
            s && e.dispatchEvent(new CustomEvent(s, { detail: n })),
            e.dispatchEvent(new CustomEvent(t, { detail: n }));
        }
      }
      t.Events = Events;
      var n = Events;
      t.default = n;
    },
    9469: (e) => {
      "use strict";
      e.exports = function () {
        var e,
          t = Array.prototype.slice,
          n = { actions: {}, filters: {} };
        function _removeHook(e, t, s, i) {
          var o, r, a;
          if (n[e][t])
            if (s)
              if (((o = n[e][t]), i))
                for (a = o.length; a--; )
                  (r = o[a]).callback === s &&
                    r.context === i &&
                    o.splice(a, 1);
              else
                for (a = o.length; a--; ) o[a].callback === s && o.splice(a, 1);
            else n[e][t] = [];
        }
        function _addHook(e, t, s, i, o) {
          var r = { callback: s, priority: i, context: o },
            a = n[e][t];
          if (a) {
            var l = !1;
            if (
              (jQuery.each(a, function () {
                if (this.callback === s) return (l = !0), !1;
              }),
              l)
            )
              return;
            a.push(r),
              (a = (function _hookInsertSort(e) {
                for (var t, n, s, i = 1, o = e.length; i < o; i++) {
                  for (
                    t = e[i], n = i;
                    (s = e[n - 1]) && s.priority > t.priority;

                  )
                    (e[n] = e[n - 1]), --n;
                  e[n] = t;
                }
                return e;
              })(a));
          } else a = [r];
          n[e][t] = a;
        }
        function _runHook(e, t, s) {
          var i,
            o,
            r = n[e][t];
          if (!r) return "filters" === e && s[0];
          if (((o = r.length), "filters" === e))
            for (i = 0; i < o; i++) s[0] = r[i].callback.apply(r[i].context, s);
          else for (i = 0; i < o; i++) r[i].callback.apply(r[i].context, s);
          return "filters" !== e || s[0];
        }
        return (
          (e = {
            removeFilter: function removeFilter(t, n) {
              return "string" == typeof t && _removeHook("filters", t, n), e;
            },
            applyFilters: function applyFilters() {
              var n = t.call(arguments),
                s = n.shift();
              return "string" == typeof s ? _runHook("filters", s, n) : e;
            },
            addFilter: function addFilter(t, n, s, i) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("filters", t, n, (s = parseInt(s || 10, 10)), i),
                e
              );
            },
            removeAction: function removeAction(t, n) {
              return "string" == typeof t && _removeHook("actions", t, n), e;
            },
            doAction: function doAction() {
              var n = t.call(arguments),
                s = n.shift();
              return "string" == typeof s && _runHook("actions", s, n), e;
            },
            addAction: function addAction(t, n, s, i) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("actions", t, n, (s = parseInt(s || 10, 10)), i),
                e
              );
            },
          }),
          e
        );
      };
    },
    3308: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      const matchUserAgent = (e) => n.indexOf(e) >= 0,
        n = navigator.userAgent,
        s =
          (!!window.opr && !!opr.addons) ||
          !!window.opera ||
          matchUserAgent(" OPR/"),
        i = matchUserAgent("Firefox"),
        o =
          /^((?!chrome|android).)*safari/i.test(n) ||
          /constructor/i.test(window.HTMLElement) ||
          "[object SafariRemoteNotification]" ===
            (
              !window.safari ||
              ("undefined" != typeof safari && safari.pushNotification)
            ).toString(),
        r = /Trident|MSIE/.test(n) && !!document.documentMode,
        a = (!r && !!window.StyleMedia) || matchUserAgent("Edg"),
        l = !!window.chrome && matchUserAgent("Chrome") && !(a || s),
        d = matchUserAgent("Chrome") && !!window.CSS,
        c = matchUserAgent("AppleWebKit") && !d;
      var u = {
        isTouchDevice:
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0,
        appleWebkit: c,
        blink: d,
        chrome: l,
        edge: a,
        firefox: i,
        ie: r,
        mac: matchUserAgent("Macintosh"),
        opera: s,
        safari: o,
        webkit: matchUserAgent("AppleWebKit"),
      };
      t.default = u;
    },
    5107: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        get(e, t) {
          let n;
          t = t || {};
          try {
            n = t.session ? sessionStorage : localStorage;
          } catch (t) {
            return e ? void 0 : {};
          }
          let s = n.getItem("elementor");
          (s = s ? JSON.parse(s) : {}), s.__expiration || (s.__expiration = {});
          const i = s.__expiration;
          let o = [];
          e ? i[e] && (o = [e]) : (o = Object.keys(i));
          let r = !1;
          return (
            o.forEach((e) => {
              new Date(i[e]) < new Date() &&
                (delete s[e], delete i[e], (r = !0));
            }),
            r && this.save(s, t.session),
            e ? s[e] : s
          );
        }
        set(e, t, n) {
          n = n || {};
          const s = this.get(null, n);
          if (((s[e] = t), n.lifetimeInSeconds)) {
            const t = new Date();
            t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
              (s.__expiration[e] = t.getTime());
          }
          this.save(s, n.session);
        }
        save(e, t) {
          let n;
          try {
            n = t ? sessionStorage : localStorage;
          } catch (e) {
            return;
          }
          n.setItem("elementor", JSON.stringify(e));
        }
      }
      t.default = _default;
    },
    6046: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("text-path", () =>
              n.e(48).then(n.bind(n, 6468))
            );
        }
      }
      t.default = _default;
    },
    1855: (e, t, n) => {
      var s = n(5516),
        i = TypeError;
      e.exports = function (e, t) {
        if (s(t, e)) return e;
        throw i("Incorrect invocation");
      };
    },
    3621: (e) => {
      e.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1,
        },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1,
        },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
      };
    },
    5719: (e, t, n) => {
      "use strict";
      var s = n(1695),
        i = n(2086),
        o = n(563),
        r = n(5736),
        a = n(7826).f,
        l = n(9606),
        d = n(1855),
        c = n(5070),
        u = n(1879),
        h = n(3621),
        m = n(79),
        g = n(5283),
        p = n(3296),
        f = "DOMException",
        v = o("Error"),
        b = o(f),
        _ = function DOMException() {
          d(this, y);
          var e = arguments.length,
            t = u(e < 1 ? void 0 : arguments[0]),
            n = u(e < 2 ? void 0 : arguments[1], "Error"),
            s = new b(t, n),
            i = v(t);
          return (
            (i.name = f), a(s, "stack", r(1, m(i.stack, 1))), c(s, this, _), s
          );
        },
        y = (_.prototype = b.prototype),
        w = "stack" in v(f),
        k = "stack" in new b(1, 2),
        S = b && g && Object.getOwnPropertyDescriptor(i, f),
        E = !(!S || (S.writable && S.configurable)),
        M = w && !E && !k;
      s(
        { global: !0, constructor: !0, forced: p || M },
        { DOMException: M ? _ : b }
      );
      var C = o(f),
        A = C.prototype;
      if (A.constructor !== C)
        for (var D in (p || a(A, "constructor", r(1, C)), h))
          if (l(h, D)) {
            var $ = h[D],
              R = $.s;
            l(C, R) || a(C, R, r(6, $.c));
          }
    },
  },
  (e) => {
    e.O(0, [354], () => {
      return (t = 5654), e((e.s = t));
      var t;
    });
    e.O();
  },
]); /*! pro-elements - v3.12.3 - 23-04-2023 */
("use strict");
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([
  [437],
  {
    7996: (e, t, n) => {
      var s = n(3203),
        o = s(n(4042)),
        r = s(n(8528)),
        l = s(n(7857)),
        i = s(n(3184)),
        a = s(n(7043)),
        d = s(n(4223)),
        u = s(n(4231)),
        c = s(n(2741)),
        m = s(n(3513)),
        h = s(n(3002)),
        g = s(n(8650)),
        f = s(n(6701)),
        p = s(n(102)),
        _ = s(n(1748)),
        v = s(n(5438)),
        b = s(n(2439)),
        M = s(n(5032)),
        y = s(n(1474)),
        w = s(n(2105));
      const extendDefaultHandlers = (e) => ({
        ...e,
        ...{
          animatedText: o.default,
          carousel: r.default,
          countdown: l.default,
          hotspot: i.default,
          form: a.default,
          gallery: d.default,
          lottie: u.default,
          nav_menu: c.default,
          popup: m.default,
          posts: h.default,
          share_buttons: g.default,
          slides: f.default,
          social: p.default,
          themeBuilder: v.default,
          themeElements: b.default,
          woocommerce: M.default,
          tableOfContents: _.default,
          loopBuilder: y.default,
          megaMenu: w.default,
        },
      });
      elementorProFrontend.on("elementor-pro/modules/init:before", () => {
        elementorFrontend.hooks.addFilter(
          "elementor-pro/frontend/handlers",
          extendDefaultHandlers
        );
      });
    },
    8115: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.close = void 0);
      const o = new (s(n(4519)).default)("eicon"),
        r = {
          get element() {
            return o.createSvgElement("close", {
              path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
              width: 1e3,
              height: 1e3,
            });
          },
        };
      t.close = r;
    },
    4519: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3231));
      class IconsManager {
        constructor(e) {
          if (((this.prefix = `${e}-`), !IconsManager.symbolsContainer)) {
            const e = "e-font-icon-svg-symbols";
            (IconsManager.symbolsContainer = document.getElementById(e)),
              IconsManager.symbolsContainer ||
                ((IconsManager.symbolsContainer = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "svg"
                )),
                IconsManager.symbolsContainer.setAttributeNS(
                  null,
                  "style",
                  "display: none;"
                ),
                IconsManager.symbolsContainer.setAttributeNS(null, "class", e),
                document.body.appendChild(IconsManager.symbolsContainer));
          }
        }
        createSvgElement(e, t) {
          let { path: n, width: s, height: o } = t;
          const r = this.prefix + e,
            l = "#" + this.prefix + e;
          if (!IconsManager.iconsUsageList.includes(r)) {
            if (!IconsManager.symbolsContainer.querySelector(l)) {
              const e = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "symbol"
              );
              (e.id = r),
                (e.innerHTML = '<path d="' + n + '"></path>'),
                e.setAttributeNS(null, "viewBox", "0 0 " + s + " " + o),
                IconsManager.symbolsContainer.appendChild(e);
            }
            IconsManager.iconsUsageList.push(r);
          }
          const i = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
          );
          return (
            (i.innerHTML = '<use xlink:href="' + l + '" />'),
            i.setAttributeNS(null, "class", "e-font-icon-svg e-" + r),
            i
          );
        }
      }
      (t.default = IconsManager),
        (0, o.default)(IconsManager, "symbolsContainer", void 0),
        (0, o.default)(IconsManager, "iconsUsageList", []);
    },
    4042: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "animated-headline",
              () => n.e(26).then(n.bind(n, 629))
            );
        }
      }
      t.default = _default;
    },
    8528: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "media-carousel",
              () => n.e(534).then(n.bind(n, 8509))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "testimonial-carousel",
              () => n.e(369).then(n.bind(n, 4526))
            ),
            elementorFrontend.elementsHandler.attachHandler("reviews", () =>
              n.e(369).then(n.bind(n, 4526))
            );
        }
      }
      t.default = _default;
    },
    7857: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("countdown", () =>
              n.e(804).then(n.bind(n, 5449))
            );
        }
      }
      t.default = _default;
    },
    7043: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("form", [
              () => n.e(680).then(n.bind(n, 8503)),
              () => n.e(680).then(n.bind(n, 1393)),
              () => n.e(680).then(n.bind(n, 6529)),
              () => n.e(680).then(n.bind(n, 784)),
              () => n.e(680).then(n.bind(n, 2108)),
              () => n.e(680).then(n.bind(n, 5347)),
            ]),
            elementorFrontend.elementsHandler.attachHandler("subscribe", [
              () => n.e(680).then(n.bind(n, 8503)),
              () => n.e(680).then(n.bind(n, 1393)),
              () => n.e(680).then(n.bind(n, 6529)),
            ]);
        }
      }
      t.default = _default;
    },
    4223: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("gallery", () =>
              n.e(121).then(n.bind(n, 2219))
            );
        }
      }
      t.default = _default;
    },
    3184: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("hotspot", () =>
              n.e(888).then(n.bind(n, 1016))
            );
        }
      }
      t.default = _default;
    },
    1474: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            ["post", "product"].forEach((e) => {
              elementorFrontend.elementsHandler.attachHandler(
                "loop-grid",
                () => n.e(985).then(n.bind(n, 4098)),
                e
              ),
                elementorFrontend.elementsHandler.attachHandler(
                  "loop-grid",
                  () => n.e(149).then(n.bind(n, 6685)),
                  e
                ),
                elementorFrontend.elementsHandler.attachHandler(
                  "loop-carousel",
                  () => n.e(149).then(n.bind(n, 6685)),
                  e
                ),
                elementorFrontend.elementsHandler.attachHandler(
                  "loop-carousel",
                  () => n.e(153).then(n.bind(n, 7188)),
                  e
                );
            });
        }
      }
      t.default = _default;
    },
    4231: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("lottie", () =>
              n.e(288).then(n.bind(n, 1464))
            );
        }
      }
      t.default = _default;
    },
    2105: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("mega-menu", [
              () => n.e(495).then(n.bind(n, 9318)),
              () => n.e(157).then(n.bind(n, 9638)),
            ]);
        }
      }
      t.default = _default;
    },
    2741: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            jQuery.fn.smartmenus &&
              ((jQuery.SmartMenus.prototype.isCSSOn = function () {
                return !0;
              }),
              elementorFrontend.config.is_rtl &&
                (jQuery.fn.smartmenus.defaults.rightToLeftSubMenus = !0)),
            elementorFrontend.elementsHandler.attachHandler("nav-menu", () =>
              n.e(42).then(n.bind(n, 7480))
            );
        }
      }
      t.default = _default;
    },
    7107: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2635)),
        r = s(n(3467)),
        l = n(8115);
      class _default extends elementorModules.frontend.Document {
        bindEvents() {
          const e = this.getDocumentSettings("open_selector");
          e &&
            elementorFrontend.elements.$body.on(
              "click",
              e,
              this.showModal.bind(this)
            );
        }
        startTiming() {
          new r.default(this.getDocumentSettings("timing"), this).check() &&
            this.initTriggers();
        }
        initTriggers() {
          this.triggers = new o.default(
            this.getDocumentSettings("triggers"),
            this
          );
        }
        showModal(e, t) {
          const n = this.getDocumentSettings();
          if (!this.isEdit) {
            if (!elementorFrontend.isWPPreviewMode()) {
              if (this.getStorage("disable")) return;
              if (
                e &&
                elementorProFrontend.modules.popup.popupPopped &&
                n.avoid_multiple_popups
              )
                return;
            }
            (this.$element = jQuery(this.elementHTML)),
              (this.elements.$elements = this.$element.find(
                this.getSettings("selectors.elements")
              ));
          }
          const s = this.getModal(),
            o = s.getElements("closeButton");
          s.setMessage(this.$element).show(),
            this.isEdit ||
              (n.close_button_delay &&
                (o.hide(),
                clearTimeout(this.closeButtonTimeout),
                (this.closeButtonTimeout = setTimeout(
                  () => o.show(),
                  1e3 * n.close_button_delay
                ))),
              super.runElementsHandlers()),
            this.setEntranceAnimation(),
            (n.timing && n.timing.times_count) || this.countTimes(),
            (elementorProFrontend.modules.popup.popupPopped = !0),
            !this.isEdit && n.a11y_navigation && this.handleKeyboardA11y(t);
        }
        setEntranceAnimation() {
          const e = this.getModal().getElements("widgetContent"),
            t = this.getDocumentSettings(),
            n = elementorFrontend.getCurrentDeviceSetting(
              t,
              "entrance_animation"
            );
          if (
            (this.currentAnimation && e.removeClass(this.currentAnimation),
            (this.currentAnimation = n),
            !n)
          )
            return;
          const s = t.entrance_animation_duration.size;
          e.addClass(n), setTimeout(() => e.removeClass(n), 1e3 * s);
        }
        handleKeyboardA11y(e) {
          const t = this.getModal()
            .getElements("widgetContent")
            .find(":focusable");
          if (!t.length) return;
          let n = null;
          e?.currentTarget && (n = jQuery(e.currentTarget));
          const s = t[t.length - 1],
            o = t[0],
            onKeyDownPressed = (e) => {
              const t = e.shiftKey;
              if (!("Tab" === e.key || 9 === e.keyCode)) return;
              const n =
                elementorFrontend.elements.window.document.activeElement;
              if (t) {
                n === o && (s.focus(), e.preventDefault());
              } else {
                n === s && (o.focus(), e.preventDefault());
              }
            };
          o.focus();
          const r = elementorFrontend.elements.$window;
          r.on("keydown", onKeyDownPressed).on("elementor/popup/hide", () => {
            r.off("keydown", onKeyDownPressed), n && n.focus();
          });
        }
        setExitAnimation() {
          const e = this.getModal(),
            t = this.getDocumentSettings(),
            n = e.getElements("widgetContent"),
            s = elementorFrontend.getCurrentDeviceSetting(t, "exit_animation"),
            o = s ? t.entrance_animation_duration.size : 0;
          setTimeout(() => {
            s && n.removeClass(s + " reverse"),
              this.isEdit ||
                (this.$element.remove(), e.getElements("widget").hide());
          }, 1e3 * o),
            s && n.addClass(s + " reverse");
        }
        initModal() {
          let e;
          this.getModal = () => {
            if (!e) {
              const t = this.getDocumentSettings(),
                n = this.getSettings("id"),
                triggerPopupEvent = (e) => {
                  const t = "elementor/popup/" + e;
                  elementorFrontend.elements.$document.trigger(t, [n, this]),
                    window.dispatchEvent(
                      new CustomEvent(t, { detail: { id: n, instance: this } })
                    );
                };
              let s = "elementor-popup-modal";
              t.classes && (s += " " + t.classes);
              const o = {
                id: "elementor-popup-modal-" + n,
                className: s,
                closeButton: !0,
                preventScroll: t.prevent_scroll,
                onShow: () => triggerPopupEvent("show"),
                onHide: () => triggerPopupEvent("hide"),
                effects: {
                  hide: () => {
                    t.timing && t.timing.times_count && this.countTimes(),
                      this.setExitAnimation();
                  },
                  show: "show",
                },
                hide: {
                  auto: !!t.close_automatically,
                  autoDelay: 1e3 * t.close_automatically,
                  onBackgroundClick: !t.prevent_close_on_background_click,
                  onOutsideClick: !t.prevent_close_on_background_click,
                  onEscKeyPress: !t.prevent_close_on_esc_key,
                  ignore: ".flatpickr-calendar",
                },
                position: { enable: !1 },
              };
              elementorFrontend.config.experimentalFeatures.e_font_icon_svg &&
                (o.closeButtonOptions = { iconElement: l.close.element }),
                (o.closeButtonClass = "eicon-close"),
                (e = elementorFrontend
                  .getDialogsManager()
                  .createWidget("lightbox", o)),
                e.getElements("widgetContent").addClass("animated");
              const r = e.getElements("closeButton");
              this.isEdit && (r.off("click"), (e.hide = () => {})),
                this.setCloseButtonPosition();
            }
            return e;
          };
        }
        setCloseButtonPosition() {
          const e = this.getModal(),
            t = this.getDocumentSettings("close_button_position");
          e.getElements("closeButton").appendTo(
            e.getElements("outside" === t ? "widget" : "widgetContent")
          );
        }
        disable() {
          this.setStorage("disable", !0);
        }
        setStorage(e, t, n) {
          elementorFrontend.storage.set(
            `popup_${this.getSettings("id")}_${e}`,
            t,
            n
          );
        }
        getStorage(e, t) {
          return elementorFrontend.storage.get(
            `popup_${this.getSettings("id")}_${e}`,
            t
          );
        }
        countTimes() {
          const e = this.getStorage("times") || 0;
          this.setStorage("times", e + 1);
        }
        runElementsHandlers() {}
        async onInit() {
          super.onInit(),
            window.DialogsManager ||
              (await elementorFrontend.utils.assetsLoader.load(
                "script",
                "dialog"
              )),
            this.initModal(),
            this.isEdit
              ? this.showModal()
              : (this.$element.show().remove(),
                (this.elementHTML = this.$element[0].outerHTML),
                elementorFrontend.isEditMode() ||
                  (elementorFrontend.isWPPreviewMode() &&
                  elementorFrontend.config.post.id === this.getSettings("id")
                    ? this.showModal()
                    : this.startTiming()));
        }
        onSettingsChange(e) {
          const t = Object.keys(e.changed)[0];
          -1 !== t.indexOf("entrance_animation") && this.setEntranceAnimation(),
            "exit_animation" === t && this.setExitAnimation(),
            "close_button_position" === t && this.setCloseButtonPosition();
        }
      }
      t.default = _default;
    },
    3513: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(7107));
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.hooks.addAction(
              "elementor/frontend/documents-manager/init-classes",
              this.addDocumentClass
            ),
            elementorFrontend.elementsHandler.attachHandler("form", () =>
              n.e(50).then(n.bind(n, 8872))
            ),
            elementorFrontend.on("components:init", () =>
              this.onFrontendComponentsInit()
            ),
            elementorFrontend.isEditMode() ||
              elementorFrontend.isWPPreviewMode() ||
              this.setViewsAndSessions();
        }
        addDocumentClass(e) {
          e.addDocumentClass("popup", o.default);
        }
        setViewsAndSessions() {
          const e = elementorFrontend.storage.get("pageViews") || 0;
          elementorFrontend.storage.set("pageViews", e + 1);
          if (
            !elementorFrontend.storage.get("activeSession", { session: !0 })
          ) {
            elementorFrontend.storage.set("activeSession", !0, { session: !0 });
            const e = elementorFrontend.storage.get("sessions") || 0;
            elementorFrontend.storage.set("sessions", e + 1);
          }
        }
        showPopup(e, t) {
          const n = elementorFrontend.documentsManager.documents[e.id];
          if (!n) return;
          const s = n.getModal();
          e.toggle && s.isVisible() ? s.hide() : n.showModal(null, t);
        }
        closePopup(e, t) {
          const n = jQuery(t.target)
            .parents('[data-elementor-type="popup"]')
            .data("elementorId");
          if (!n) return;
          const s = elementorFrontend.documentsManager.documents[n];
          s.getModal().hide(), e.do_not_show_again && s.disable();
        }
        onFrontendComponentsInit() {
          elementorFrontend.utils.urlActions.addAction("popup:open", (e, t) =>
            this.showPopup(e, t)
          ),
            elementorFrontend.utils.urlActions.addAction(
              "popup:close",
              (e, t) => this.closePopup(e, t)
            );
        }
      }
      t.default = _default;
    },
    3467: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(6723)),
        r = s(n(3754)),
        l = s(n(6470)),
        i = s(n(221)),
        a = s(n(2193)),
        d = s(n(6195)),
        u = s(n(5247)),
        c = s(n(349)),
        m = s(n(5503));
      class _default extends elementorModules.Module {
        constructor(e, t) {
          super(e),
            (this.document = t),
            (this.timingClasses = {
              page_views: o.default,
              sessions: r.default,
              url: l.default,
              sources: i.default,
              logged_in: a.default,
              devices: d.default,
              times: u.default,
              browsers: c.default,
              schedule: m.default,
            });
        }
        check() {
          const e = this.getSettings();
          let t = !0;
          return (
            jQuery.each(this.timingClasses, (n, s) => {
              if (!e[n]) return;
              new s(e, this.document).check() || (t = !1);
            }),
            t
          );
        }
      }
      t.default = _default;
    },
    3107: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor(e, t) {
          super(e), (this.document = t);
        }
        getTimingSetting(e) {
          return this.getSettings(this.getName() + "_" + e);
        }
      }
      t.default = _default;
    },
    349: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "browsers";
        }
        check() {
          if ("all" === this.getTimingSetting("browsers")) return !0;
          const e = this.getTimingSetting("browsers_options"),
            t = elementorFrontend.utils.environment;
          return e.some((e) => t[e]);
        }
      }
      t.default = _default;
    },
    6195: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "devices";
        }
        check() {
          return (
            -1 !==
            this.getTimingSetting("devices").indexOf(
              elementorFrontend.getCurrentDeviceMode()
            )
          );
        }
      }
      t.default = _default;
    },
    2193: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "logged_in";
        }
        check() {
          const e = elementorFrontend.config.user;
          if (!e) return !0;
          if ("all" === this.getTimingSetting("users")) return !1;
          return !this.getTimingSetting("roles").filter(
            (t) => -1 !== e.roles.indexOf(t)
          ).length;
        }
      }
      t.default = _default;
    },
    6723: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "page_views";
        }
        check() {
          const e = elementorFrontend.storage.get("pageViews"),
            t = this.getName();
          let n = this.document.getStorage(t + "_initialPageViews");
          return (
            n ||
              (this.document.setStorage(t + "_initialPageViews", e), (n = e)),
            e - n >= this.getTimingSetting("views")
          );
        }
      }
      t.default = _default;
    },
    2097: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3231));
      t.default = class ScheduleUtils {
        constructor(e) {
          (0, o.default)(this, "shouldDisplay", () => {
            if (!this.settings.startDate && !this.settings.endDate) return !0;
            const e = this.getCurrentDateTime();
            return (
              (!this.settings.startDate || e >= this.settings.startDate) &&
              (!this.settings.endDate || e <= this.settings.endDate)
            );
          }),
            (this.settings = e.settings);
        }
        getCurrentDateTime() {
          let e = new Date();
          return (
            "site" === this.settings.timezone &&
              this.settings.serverDatetime &&
              (e = new Date(this.settings.serverDatetime)),
            e
          );
        }
      };
    },
    5503: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107)),
        r = s(n(2097));
      class _default extends o.default {
        constructor() {
          super(...arguments);
          const {
            schedule_timezone: e,
            schedule_start_date: t,
            schedule_end_date: n,
            schedule_server_datetime: s,
          } = this.getSettings();
          (this.settings = {
            timezone: e,
            startDate: !!t && new Date(t),
            endDate: !!n && new Date(n),
            serverDatetime: !!s && new Date(s),
          }),
            (this.scheduleUtils = new r.default({ settings: this.settings }));
        }
        getName() {
          return "schedule";
        }
        check() {
          return this.scheduleUtils.shouldDisplay();
        }
      }
      t.default = _default;
    },
    3754: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "sessions";
        }
        check() {
          const e = elementorFrontend.storage.get("sessions"),
            t = this.getName();
          let n = this.document.getStorage(t + "_initialSessions");
          return (
            n || (this.document.setStorage(t + "_initialSessions", e), (n = e)),
            e - n >= this.getTimingSetting("sessions")
          );
        }
      }
      t.default = _default;
    },
    221: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "sources";
        }
        check() {
          const e = this.getTimingSetting("sources");
          if (3 === e.length) return !0;
          const t = document.referrer.replace(/https?:\/\/(?:www\.)?/, "");
          return 0 === t.indexOf(location.host.replace("www.", ""))
            ? -1 !== e.indexOf("internal")
            : -1 !== e.indexOf("external") ||
                (-1 !== e.indexOf("search") &&
                  /^(google|yahoo|bing|yandex|baidu)\./.test(t));
        }
      }
      t.default = _default;
    },
    6237: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class TimesUtils {
        constructor(e) {
          (this.uniqueId = e.uniqueId),
            (this.settings = e.settings),
            (this.storage = e.storage);
        }
        getTimeFramesInSecounds(e) {
          return { day: 86400, week: 604800, month: 2628288 }[e];
        }
        setExpiration(e, t, n) {
          if (this.storage.get(e)) this.storage.set(e, t);
          else {
            const s = { lifetimeInSeconds: this.getTimeFramesInSecounds(n) };
            this.storage.set(e, t, s);
          }
        }
        getImpressionsCount() {
          const e = this.storage.get(this.uniqueId) ?? 0;
          return parseInt(e);
        }
        incrementImpressionsCount() {
          if (this.settings.period)
            if ("session" !== this.settings.period) {
              const e = this.getImpressionsCount();
              this.setExpiration(this.uniqueId, e + 1, this.settings.period);
            } else
              sessionStorage.setItem(
                this.uniqueId,
                parseInt(sessionStorage.getItem(this.uniqueId) ?? 0) + 1
              );
          else this.storage.set("times", (this.storage.get("times") ?? 0) + 1);
        }
        shouldCountOnOpen() {
          this.settings.countOnOpen && this.incrementImpressionsCount();
        }
        shouldDisplayPerTimeFrame() {
          return (
            this.getImpressionsCount() < this.settings.showsLimit &&
            (this.shouldCountOnOpen(), !0)
          );
        }
        shouldDisplayPerSession() {
          const e = sessionStorage.getItem(this.uniqueId) ?? 0;
          return (
            parseInt(e) < this.settings.showsLimit &&
            (this.shouldCountOnOpen(), !0)
          );
        }
        shouldDisplayBackwordCompatible() {
          let e = arguments.length > 1 ? arguments[1] : void 0;
          const t =
            parseInt(
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            ) < parseInt(e);
          return this.shouldCountOnOpen(), t;
        }
      };
    },
    5247: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107)),
        r = s(n(6237));
      class _default extends o.default {
        constructor() {
          super(...arguments),
            (this.uniqueId = `popup-${this.document.getSettings(
              "id"
            )}-impressions-count`);
          const {
            times_count: e,
            times_period: t,
            times_times: n,
          } = this.getSettings();
          (this.settings = {
            countOnOpen: e,
            period: t,
            showsLimit: parseInt(n),
          }),
            "" === this.settings.period && (this.settings.period = !1),
            ["", "close"].includes(this.settings.countOnOpen)
              ? ((this.settings.countOnOpen = !1), this.onPopupHide())
              : (this.settings.countOnOpen = !0),
            (this.utils = new r.default({
              uniqueId: this.uniqueId,
              settings: this.settings,
              storage: elementorFrontend.storage,
            }));
        }
        getName() {
          return "times";
        }
        check() {
          if (!this.settings.period) {
            const e = this.document.getStorage("times") || 0,
              t = this.getTimingSetting("times");
            return this.utils.shouldDisplayBackwordCompatible(e, t);
          }
          if ("session" !== this.settings.period) {
            if (!this.utils.shouldDisplayPerTimeFrame()) return !1;
          } else if (!this.utils.shouldDisplayPerSession()) return !1;
          return !0;
        }
        onPopupHide() {
          window.addEventListener("elementor/popup/hide", () => {
            this.utils.incrementImpressionsCount();
          });
        }
      }
      t.default = _default;
    },
    6470: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(3107));
      class _default extends o.default {
        getName() {
          return "url";
        }
        check() {
          const e = this.getTimingSetting("url"),
            t = this.getTimingSetting("action"),
            n = document.referrer;
          if ("regex" !== t) return ("hide" === t) ^ (-1 !== n.indexOf(e));
          let s;
          try {
            s = new RegExp(e);
          } catch (e) {
            return !1;
          }
          return s.test(n);
        }
      }
      t.default = _default;
    },
    2635: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(4622)),
        r = s(n(8729)),
        l = s(n(358)),
        i = s(n(62)),
        a = s(n(8811)),
        d = s(n(9758));
      class _default extends elementorModules.Module {
        constructor(e, t) {
          super(e),
            (this.document = t),
            (this.triggers = []),
            (this.triggerClasses = {
              page_load: o.default,
              scrolling: r.default,
              scrolling_to: l.default,
              click: i.default,
              inactivity: a.default,
              exit_intent: d.default,
            }),
            this.runTriggers();
        }
        runTriggers() {
          const e = this.getSettings();
          jQuery.each(this.triggerClasses, (t, n) => {
            if (!e[t]) return;
            const s = new n(e, () => this.onTriggerFired());
            s.run(), this.triggers.push(s);
          });
        }
        destroyTriggers() {
          this.triggers.forEach((e) => e.destroy()), (this.triggers = []);
        }
        onTriggerFired() {
          this.document.showModal(!0), this.destroyTriggers();
        }
      }
      t.default = _default;
    },
    2162: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor(e, t) {
          super(e), (this.callback = t);
        }
        getTriggerSetting(e) {
          return this.getSettings(this.getName() + "_" + e);
        }
      }
      t.default = _default;
    },
    62: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        constructor() {
          super(...arguments),
            (this.checkClick = this.checkClick.bind(this)),
            (this.clicksCount = 0);
        }
        getName() {
          return "click";
        }
        checkClick() {
          this.clicksCount++,
            this.clicksCount === this.getTriggerSetting("times") &&
              this.callback();
        }
        run() {
          elementorFrontend.elements.$body.on("click", this.checkClick);
        }
        destroy() {
          elementorFrontend.elements.$body.off("click", this.checkClick);
        }
      }
      t.default = _default;
    },
    9758: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        constructor() {
          super(...arguments),
            (this.detectExitIntent = this.detectExitIntent.bind(this));
        }
        getName() {
          return "exit_intent";
        }
        detectExitIntent(e) {
          e.clientY <= 0 && this.callback();
        }
        run() {
          elementorFrontend.elements.$window.on(
            "mouseleave",
            this.detectExitIntent
          );
        }
        destroy() {
          elementorFrontend.elements.$window.off(
            "mouseleave",
            this.detectExitIntent
          );
        }
      }
      t.default = _default;
    },
    8811: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        constructor() {
          super(...arguments),
            (this.restartTimer = this.restartTimer.bind(this));
        }
        getName() {
          return "inactivity";
        }
        run() {
          this.startTimer(),
            elementorFrontend.elements.$document.on(
              "keypress mousemove",
              this.restartTimer
            );
        }
        startTimer() {
          this.timeOut = setTimeout(
            this.callback,
            1e3 * this.getTriggerSetting("time")
          );
        }
        clearTimer() {
          clearTimeout(this.timeOut);
        }
        restartTimer() {
          this.clearTimer(), this.startTimer();
        }
        destroy() {
          this.clearTimer(),
            elementorFrontend.elements.$document.off(
              "keypress mousemove",
              this.restartTimer
            );
        }
      }
      t.default = _default;
    },
    4622: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        getName() {
          return "page_load";
        }
        run() {
          this.timeout = setTimeout(
            this.callback,
            1e3 * this.getTriggerSetting("delay")
          );
        }
        destroy() {
          clearTimeout(this.timeout);
        }
      }
      t.default = _default;
    },
    358: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        getName() {
          return "scrolling_to";
        }
        run() {
          let e;
          try {
            e = jQuery(this.getTriggerSetting("selector"));
          } catch (e) {
            return;
          }
          this.waypointInstance = elementorFrontend.waypoint(
            e,
            this.callback
          )[0];
        }
        destroy() {
          this.waypointInstance && this.waypointInstance.destroy();
        }
      }
      t.default = _default;
    },
    8729: (e, t, n) => {
      var s = n(3203);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = s(n(2162));
      class _default extends o.default {
        constructor() {
          super(...arguments),
            (this.checkScroll = this.checkScroll.bind(this)),
            (this.lastScrollOffset = 0);
        }
        getName() {
          return "scrolling";
        }
        checkScroll() {
          const e = scrollY > this.lastScrollOffset ? "down" : "up",
            t = this.getTriggerSetting("direction");
          if (((this.lastScrollOffset = scrollY), e !== t)) return;
          if ("up" === e) return void this.callback();
          const n = elementorFrontend.elements.$document.height() - innerHeight;
          (scrollY / n) * 100 >= this.getTriggerSetting("offset") &&
            this.callback();
        }
        run() {
          elementorFrontend.elements.$window.on("scroll", this.checkScroll);
        }
        destroy() {
          elementorFrontend.elements.$window.off("scroll", this.checkScroll);
        }
      }
      t.default = _default;
    },
    3002: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            ["classic", "full_content", "cards"].forEach((e) => {
              elementorFrontend.elementsHandler.attachHandler(
                "posts",
                () => n.e(985).then(n.bind(n, 2607)),
                e
              );
            }),
            elementorFrontend.elementsHandler.attachHandler(
              "posts",
              () => n.e(287).then(n.bind(n, 2298)),
              "classic"
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "posts",
              () => n.e(287).then(n.bind(n, 2298)),
              "full_content"
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "posts",
              () => n.e(287).then(n.bind(n, 8496)),
              "cards"
            ),
            elementorFrontend.elementsHandler.attachHandler("portfolio", () =>
              n.e(824).then(n.bind(n, 5208))
            );
        }
      }
      t.default = _default;
    },
    8650: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "share-buttons",
              () => n.e(58).then(n.bind(n, 4112))
            );
        }
      }
      t.default = _default;
    },
    6701: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("slides", () =>
              n.e(114).then(n.bind(n, 9378))
            );
        }
      }
      t.default = _default;
    },
    102: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "facebook-button",
              () => n.e(443).then(n.bind(n, 3225))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "facebook-comments",
              () => n.e(443).then(n.bind(n, 3225))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "facebook-embed",
              () => n.e(443).then(n.bind(n, 3225))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "facebook-page",
              () => n.e(443).then(n.bind(n, 3225))
            );
        }
      }
      t.default = _default;
    },
    1748: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "table-of-contents",
              () => n.e(838).then(n.bind(n, 8208))
            );
        }
      }
      t.default = _default;
    },
    5438: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            [
              "archive_classic",
              "archive_full_content",
              "archive_cards",
            ].forEach((e) => {
              elementorFrontend.elementsHandler.attachHandler(
                "archive-posts",
                () => n.e(685).then(n.bind(n, 8297)),
                e
              );
            }),
            elementorFrontend.elementsHandler.attachHandler(
              "archive-posts",
              () => n.e(685).then(n.bind(n, 8537)),
              "archive_classic"
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "archive-posts",
              () => n.e(685).then(n.bind(n, 8537)),
              "archive_full_content"
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "archive-posts",
              () => n.e(685).then(n.bind(n, 9409)),
              "archive_cards"
            ),
            jQuery(function () {
              var e = location.search.match(/theme_template_id=(\d*)/),
                t = e ? jQuery(".elementor-" + e[1]) : [];
              t.length &&
                jQuery("html, body").animate({
                  scrollTop: t.offset().top - window.innerHeight / 2,
                });
            });
        }
      }
      t.default = _default;
    },
    2439: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("search-form", () =>
              n.e(858).then(n.bind(n, 6709))
            );
        }
      }
      t.default = _default;
    },
    5032: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-menu-cart",
              () => n.e(102).then(n.bind(n, 2083))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-purchase-summary",
              () => n.e(1).then(n.bind(n, 484))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-checkout-page",
              () => n.e(124).then(n.bind(n, 9035))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-cart",
              () => n.e(859).then(n.bind(n, 7649))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-my-account",
              () => n.e(979).then(n.bind(n, 1915))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-notices",
              () => n.e(497).then(n.bind(n, 2627))
            ),
            elementorFrontend.elementsHandler.attachHandler(
              "woocommerce-product-add-to-cart",
              () => n.e(800).then(n.bind(n, 5767))
            ),
            elementorFrontend.isEditMode() &&
              elementorFrontend.on("components:init", () => {
                elementorFrontend.elements.$body.find(
                  ".elementor-widget-woocommerce-cart"
                ).length ||
                  elementorFrontend.elements.$body.append(
                    '<div class="woocommerce-cart-form">'
                  );
              });
        }
      }
      t.default = _default;
    },
    8003: (e) => {
      e.exports = wp.i18n;
    },
  },
  (e) => {
    e.O(0, [819], () => {
      return (t = 7996), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
(function ($, elementor) {
  "use strict";
  var $window = $(elementor);
  var bancaCore = {
    onInit: function () {
      var E_FRONT = elementorFrontend;
      var widgetHandlersMap = {
        "banca_counter.default": bancaCore.counterUp,
        "banca_hero.default": bancaCore.hero,
        "banca_cards.default": bancaCore.cards,
        "banca_testimonials.default": bancaCore.testimonials,
        "banca_images.default": bancaCore.images,
        "banca_loan_info.default": bancaCore.banca_loan_info,
        "banca_blog.default": bancaCore.blog_posts,
        "banca_pricing_table_switcher.default": bancaCore.pricingTableSwitcher,
      };
      $.each(widgetHandlersMap, function (widgetName, callback) {
        E_FRONT.hooks.addAction(
          "frontend/element_ready/" + widgetName,
          callback
        );
      });
    },
    pricingTableSwitcher: function ($scope) {
      if ($(".pricing_tab_btn .toggle").length) {
        $(".pricing_tab_btn .toggle").on("click", function () {
          $(this).toggleClass("clicked");
          $(".pricing_inner").toggleClass("active");
          $(".pricing_tab_btn").toggleClass("active");
        });
      }
    },
    counterUp: function ($scope) {
      var counter = $scope.find(".counter span");
      var statCounter = $scope.find(".stat-counter");
      if (counter.length > 0) {
        counter.counterUp();
        statCounter.counterUp();
      }
      var $statistics_slider = $scope.find(".statistics-slider");
      if ($statistics_slider.length > 0) {
        $statistics_slider.slick({
          dots: !0,
          arrows: !1,
          slidesToShow: 1,
          autoplay: !0,
          infinite: !0,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
        });
      }
    },
    hero: function ($scope) {
      var $animation = $scope.find(".hero_animation1");
      if ($animation.length > 0) {
        $animation.parallax({ scalarX: 10.0, scalarY: 7.0 });
      }
      var $hero_style_3 = $scope.find(".hero_style_3");
      if ($hero_style_3.length > 0) {
        $hero_style_3.parallax({ scalarX: 10.0, scalarY: 0.0 });
      }
    },
    cards: function ($scope) {
      let $feature_slider = $scope.find(".feature-slider");
      let dataRtl = $feature_slider.data("rtl");
      if ($feature_slider.length > 0) {
        $feature_slider.slick({
          dots: !0,
          arrows: !1,
          slidesToShow: 3,
          autoplay: !0,
          infinite: !0,
          rtl: dataRtl,
          autoplaySpeed: 4500,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 992,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
      }
    },
    testimonials: function ($scope) {
      let $client_slider = $scope.find(".client-slider");
      let $data_rtl_1 = $client_slider.data("rtl");
      if ($client_slider.length > 0) {
        $client_slider.slick({
          dots: !0,
          arrows: !1,
          centerMode: !1,
          slidesToShow: 3,
          autoplay: !0,
          infinite: !0,
          rtl: $data_rtl_1,
          autoplaySpeed: 5000,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
      }
      let $testimonial_slider_2 = $scope.find(".testimonial-slider-2");
      let $testimonial_slider_3 = $scope.find(".testimonial-slider-3");
      let $data_fancybox = $("[data-fancybox]");
      let $data_rtl_2 = $testimonial_slider_2.data("rtl");
      let $data_rtl_3 = $testimonial_slider_3.data("rtl");
      if ($testimonial_slider_2.length > 0) {
        $testimonial_slider_2.slick({
          dots: !1,
          arrows: !0,
          rtl: $data_rtl_2,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
          slidesToShow: 3,
          centerMode: !1,
          autoplay: !1,
          infinite: !0,
          autoplaySpeed: 7000,
          slidesToScroll: 1,
          asNavFor: $testimonial_slider_3,
          responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
          ],
        });
      }
      if ($testimonial_slider_3.length > 0) {
        $testimonial_slider_3.slick({
          dots: !1,
          rtl: $data_rtl_3,
          asNavFor: $testimonial_slider_2,
          arrows: !1,
          slidesToShow: 1,
          centerMode: !1,
          autoplay: !1,
          infinite: !0,
          slidesToScroll: 1,
          fade: !0,
        });
      }
      if ($data_fancybox.length > 0) {
        $data_fancybox.fancybox({ animationEffect: "zoom-in-out" });
      }
      let $testimonial_slider = $scope.find(".testimonial-slider");
      if ($testimonial_slider.length > 0) {
        $testimonial_slider.slick({
          dots: !1,
          arrows: !0,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
          slidesToShow: 1,
          centerPadding: "210px",
          centerMode: !0,
          autoplay: !0,
          infinite: !0,
          autoplaySpeed: 7000,
          slidesToScroll: 1,
          responsive: [
            { breakpoint: 1170, settings: { centerPadding: "100px" } },
            { breakpoint: 992, settings: { centerPadding: "50px" } },
            { breakpoint: 768, settings: { centerPadding: "0px" } },
          ],
        });
      }
      let slider4 = $scope.find(".client-slider-2");
      if (slider4.length > 0) {
        slider4.slick({
          dots: !0,
          arrows: !0,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
          centerMode: !1,
          slidesToShow: 3,
          autoplay: !0,
          infinite: !0,
          autoplaySpeed: 5000,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
      }
    },
    images: function ($scope) {
      var $images_animation = $scope.find(".banca_images_animation");
      if ($images_animation.length > 0) {
        $images_animation.parallax({ scalarX: 5.0, scalarY: 10.0 });
      }
      var $images_animation2 = $scope.find(".banca_images_animation2");
      if ($images_animation2.length > 0) {
        $images_animation2.parallax({ scalarX: 10.0, scalarY: 7.0 });
      }
      var $images_animation3 = $scope.find(".banca_images_animation3");
      if ($images_animation3.length > 0) {
        $images_animation3.parallax({ scalarX: 10.0, scalarY: 0.0 });
      }
    },
    banca_loan_info: function ($scope) {
      let select_loan_type = $scope.find("#select-loan-type");
      if (select_loan_type.length > 0) {
        select_loan_type.niceSelect();
      }
      let readOnlyClose = $scope.find("#readOnlyClose");
      let locationSelect = $scope.find("#locationSelect");
      if (readOnlyClose.length > 0) {
        readOnlyClose.click(function () {
          locationSelect.val("");
          locationSelect.focus();
        });
      }
      if (locationSelect.length > 0) {
        locationSelect.editableSelect();
      }
      let loanSlider = $scope.find(".loan-slider");
      if (loanSlider.length > 0) {
        loanSlider.slick({
          dots: !0,
          arrows: !0,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="arrow_left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="arrow_right"></i></button>',
          centerMode: !1,
          slidesToShow: 3,
          autoplay: !0,
          infinite: !0,
          autoplaySpeed: 5000,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1200,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
      }
    },
    blog_posts: function ($scope) {
      let $news_slider = $scope.find(".news-slider");
      let $data_rtl = $news_slider.data("rtl");
      if ($news_slider.length > 0) {
        $news_slider.slick({
          dots: !0,
          arrows: !1,
          centerMode: !1,
          slidesToShow: 3,
          autoplay: !1,
          infinite: !0,
          rtl: $data_rtl,
          autoplaySpeed: 7500,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 992,
              settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ],
        });
      }
    },
  };
  $window.on("elementor/frontend/init", bancaCore.onInit);
})(jQuery, window);
