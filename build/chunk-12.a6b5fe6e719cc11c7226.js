(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    602: function (e, n, t) {
      "use strict";
      var r = t(31),
        i = t.n(r),
        a = t(32),
        o = t.n(a),
        c = t(603),
        s = t(604),
        A = t(605),
        l = o()(i.a);
      l.i(c.a),
        l.i(s.a),
        l.i(A.a),
        l.push([
          e.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (n.a = l);
    },
    603: function (e, n, t) {
      "use strict";
      var r = t(31),
        i = t.n(r),
        a = t(32),
        o = t.n(a)()(i.a);
      o.push([
        e.i,
        '.article {\n  display: flex;\n  margin: 20px;\n  padding-bottom: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n}\n.article:last-child {\n  border-bottom: none;\n}\n.article article {\n  width: 50%;\n}\n.article .media {\n  width: 50%;\n  max-width: 400px;\n  margin-left: 40px;\n}\n.article img,\n.article iframe {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.tagline {\n  font-size: 11px;\n  margin: 2px 0;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/News/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EACf,6BAA6B;AAC/B;AACA;EACE,mBAAmB;AACrB;AACA;EACE,UAAU;AACZ;AACA;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;EAEE,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,mBAAmB,EAAE,gDAAgD;AACvE;;AAEA,iFAAiF;AACjF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;EACf,aAAa;AACf",
          sourcesContent: [
            '.article {\n  display: flex;\n  margin: 20px;\n  padding-bottom: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  border-bottom: 1px solid #ccc;\n}\n.article:last-child {\n  border-bottom: none;\n}\n.article article {\n  width: 50%;\n}\n.article .media {\n  width: 50%;\n  max-width: 400px;\n  margin-left: 40px;\n}\n.article img,\n.article iframe {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n.tagline {\n  font-size: 11px;\n  margin: 2px 0;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (n.a = o);
    },
    604: function (e, n, t) {
      "use strict";
      var r = t(31),
        i = t.n(r),
        a = t(32),
        o = t.n(a)()(i.a);
      o.push([
        e.i,
        '@media only screen and (max-width: 900px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .article {\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n    padding-bottom: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border-bottom: 1px solid #ccc;\n  }\n  .article:last-child {\n    border-bottom: none;\n  }\n  .article article {\n    order: 2;\n    width: 100%;\n  }\n  .article .media {\n    order: 1;\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .article img,\n  .article iframe {\n    width: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/News/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,WAAW;IACX,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,oBAAoB;IACpB,+BAA+B;IAC/B,eAAe;IACf,6BAA6B;EAC/B;EACA;IACE,mBAAmB;EACrB;EACA;IACE,QAAQ;IACR,WAAW;EACb;EACA;IACE,QAAQ;IACR,WAAW;IACX,eAAe;IACf,cAAc;EAChB;EACA;;IAEE,WAAW;EACb;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .article {\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n    padding-bottom: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border-bottom: 1px solid #ccc;\n  }\n  .article:last-child {\n    border-bottom: none;\n  }\n  .article article {\n    order: 2;\n    width: 100%;\n  }\n  .article .media {\n    order: 1;\n    width: 100%;\n    max-width: 100%;\n    margin-left: 0;\n  }\n  .article img,\n  .article iframe {\n    width: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (n.a = o);
    },
    605: function (e, n, t) {
      "use strict";
      var r = t(31),
        i = t.n(r),
        a = t(32),
        o = t.n(a)()(i.a);
      o.push([
        e.i,
        "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/News/css/600Max.css"],
          names: [],
          mappings: "AAAA;EACE;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (n.a = o);
    },
    621: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(1),
        i = t.n(r),
        a = t(617),
        o = t(365),
        c = t(366),
        s = t(105),
        A = t.n(s),
        l = t(602),
        u = { insert: "head", singleton: !1 };
      A()(l.a, u), l.a.locals;
      function f(e) {
        return (f =
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
      function p(e, n, t, r, i, a, o) {
        try {
          var c = e[a](o),
            s = c.value;
        } catch (A) {
          return void t(A);
        }
        c.done ? n(s) : Promise.resolve(s).then(r, i);
      }
      function d(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, i) {
            var a = e.apply(n, t);
            function o(e) {
              p(a, r, i, o, c, "next", e);
            }
            function c(e) {
              p(a, r, i, o, c, "throw", e);
            }
            o(void 0);
          });
        };
      }
      function m(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, n) {
        return (h =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      function b(e) {
        var n = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var t,
            r = w(e);
          if (n) {
            var i = w(this).constructor;
            t = Reflect.construct(r, arguments, i);
          } else t = r.apply(this, arguments);
          return E(this, t);
        };
      }
      function E(e, n) {
        if (n && ("object" === f(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return C(e);
      }
      function C(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function w(e) {
        return (w = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      var y = (function (e) {
        !(function (e, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(n && n.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            n && h(e, n);
        })(A, e);
        var n,
          t,
          r,
          s = b(A);
        function A(e) {
          var n, t, r, i;
          return (
            (function (e, n) {
              if (!(e instanceof n))
                throw new TypeError("Cannot call a class as a function");
            })(this, A),
            (n = s.call(this, e)),
            (t = C(n)),
            (r = "fetchData"),
            (i = d(
              regeneratorRuntime.mark(function e() {
                var n;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "".concat(
                              "https://globalpeacerhythms.herokuapp.com",
                              "/api/news-articles?populate=*"
                            ),
                            {
                              method: "get",
                              headers: { "Content-Type": "application/json" },
                            }
                          )
                        );
                      case 2:
                        return (n = e.sent), e.abrupt("return", n);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            r in t
              ? Object.defineProperty(t, r, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[r] = i),
            (n.state = { news: [] }),
            n
          );
        }
        return (
          (n = A),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this;
                this.fetchData()
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (n) {
                    e.setState({ news: n.data });
                  });
              },
            },
            {
              key: "render",
              value: function () {
                return i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(o.a, null),
                  i.a.createElement(
                    "main",
                    null,
                    i.a.createElement("h1", null, "News"),
                    i.a.createElement(
                      "div",
                      { className: "news" },
                      this.state.news &&
                        this.state.news.length > 0 &&
                        this.state.news.map(function (e) {
                          if (!0 !== e.attributes.archived)
                            return i.a.createElement(
                              "article",
                              {
                                className: "article",
                                key: "article-".concat(e.id),
                              },
                              i.a.createElement(
                                "article",
                                null,
                                i.a.createElement(
                                  "h3",
                                  null,
                                  e.attributes.title
                                ),
                                i.a.createElement(a.a, {
                                  children: e.attributes.description,
                                })
                              ),
                              i.a.createElement(
                                "div",
                                { className: "media" },
                                null !== e.attributes.videoURL &&
                                  i.a.createElement(
                                    i.a.Fragment,
                                    null,
                                    i.a.createElement(
                                      "div",
                                      { className: "container" },
                                      i.a.createElement("iframe", {
                                        className: "responsive-iframe",
                                        src: e.attributes.videoURL,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow:
                                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: !0,
                                      })
                                    ),
                                    i.a.createElement(
                                      "div",
                                      { className: "tagline" },
                                      e.attributes.videoTagline
                                    )
                                  ),
                                null === e.attributes.videoURL &&
                                  e.attributes.image.data.attributes.formats &&
                                  i.a.createElement(
                                    i.a.Fragment,
                                    null,
                                    i.a.createElement("img", {
                                      src: "".concat(
                                        e.attributes.image.data.attributes
                                          .formats.medium.url
                                      ),
                                    }),
                                    i.a.createElement(
                                      "div",
                                      { className: "tagline" },
                                      e.attributes.imageTagline
                                    )
                                  )
                              )
                            );
                        })
                    )
                  ),
                  i.a.createElement(c.a, null)
                );
              },
            },
          ]) && m(n.prototype, t),
          r && m(n, r),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          A
        );
      })(i.a.Component);
      n.default = y;
    },
  },
]);
