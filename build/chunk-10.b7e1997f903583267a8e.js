(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    594: function (n, e, t) {
      "use strict";
      var o = t(31),
        i = t.n(o),
        A = t(32),
        r = t.n(A),
        a = t(595),
        l = t(596),
        s = t(597),
        f = r()(i.a);
      f.i(a.a),
        f.i(l.a),
        f.i(s.a),
        f.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = f);
    },
    595: function (n, e, t) {
      "use strict";
      var o = t(31),
        i = t.n(o),
        A = t(32),
        r = t.n(A)()(i.a);
      r.push([
        n.i,
        'body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  background-color: #242124;\n}\n#app {\n  width: 100%;\n  max-width: 1440px;\n  background: #f5f5f5;\n}\n\n.blueButton,\n.blueHalfButton {\n  background-color: #047ac3;\n  color: #fff;\n  border: 0;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  padding: 8px 20px;\n  font-size: 14px;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  text-align: center;\n}\n.blueButton {\n  border-radius: 30px;\n}\n.blueHalfButton {\n  border-radius: 0 30px 30px 0;\n}\n\nh1 {\n  font-family: "Libre Baskerville", serif;\n  font-size: 36px;\n  color: #011526;\n  font-weight: bold;\n  padding: 40px 20px;\n  margin: 0;\n}\n.about {\n  display: flex;\n  padding: 0 20px 40px 20px;\n  box-sizing: border-box;\n}\n.about p {\n  margin: 0 0 20px 0;\n  padding: 0;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n}\n.about h3 {\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 21px;\n  color: #011526;\n  text-align: center;\n  margin-top: 50px;\n}\n.about .leftCol {\n  width: 50%;\n  min-width: 400px;\n}\n.about .rightCol {\n  width: 50%;\n  margin-left: 40px;\n}\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,yBAAyB;EACzB,WAAW;EACX,SAAS;EACT,+BAA+B;EAC/B,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uCAAuC;EACvC,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,+BAA+B;EAC/B,eAAe;EACf,cAAc;AAChB;AACA;EACE,+BAA+B;EAC/B,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,mBAAmB,EAAE,gDAAgD;AACvE;;AAEA,iFAAiF;AACjF;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;AACd",
          sourcesContent: [
            'body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  background-color: #242124;\n}\n#app {\n  width: 100%;\n  max-width: 1440px;\n  background: #f5f5f5;\n}\n\n.blueButton,\n.blueHalfButton {\n  background-color: #047ac3;\n  color: #fff;\n  border: 0;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  padding: 8px 20px;\n  font-size: 14px;\n  border: 1px solid #fff;\n  box-sizing: border-box;\n  text-align: center;\n}\n.blueButton {\n  border-radius: 30px;\n}\n.blueHalfButton {\n  border-radius: 0 30px 30px 0;\n}\n\nh1 {\n  font-family: "Libre Baskerville", serif;\n  font-size: 36px;\n  color: #011526;\n  font-weight: bold;\n  padding: 40px 20px;\n  margin: 0;\n}\n.about {\n  display: flex;\n  padding: 0 20px 40px 20px;\n  box-sizing: border-box;\n}\n.about p {\n  margin: 0 0 20px 0;\n  padding: 0;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n}\n.about h3 {\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-style: italic;\n  font-size: 21px;\n  color: #011526;\n  text-align: center;\n  margin-top: 50px;\n}\n.about .leftCol {\n  width: 50%;\n  min-width: 400px;\n}\n.about .rightCol {\n  width: 50%;\n  margin-left: 40px;\n}\n.container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n}\n\n/* Then style the iframe to fit in the container div with full height and width */\n.responsive-iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    596: function (n, e, t) {
      "use strict";
      var o = t(31),
        i = t.n(o),
        A = t(32),
        r = t.n(A)()(i.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  h1 {\n    font-size: 28px;\n  }\n  .about {\n    flex-direction: column;\n  }\n  .about .leftCol {\n    width: 100%;\n    min-width: 100%;\n  }\n  .about .rightCol {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 30px;\n  }\n  .about h3 {\n    font-size: 18px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,WAAW;IACX,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,eAAe;EACjB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,WAAW;IACX,eAAe;EACjB;EACA;IACE,WAAW;IACX,cAAc;IACd,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  h1 {\n    font-size: 28px;\n  }\n  .about {\n    flex-direction: column;\n  }\n  .about .leftCol {\n    width: 100%;\n    min-width: 100%;\n  }\n  .about .rightCol {\n    width: 100%;\n    margin-left: 0;\n    margin-top: 30px;\n  }\n  .about h3 {\n    font-size: 18px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    597: function (n, e, t) {
      "use strict";
      var o = t(31),
        i = t.n(o),
        A = t(32),
        r = t.n(A)()(i.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  h1 {\n    font-size: 21px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/About/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,WAAW;IACX,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  #app {\n    width: 100%;\n    max-width: 1440px;\n    background: #f5f5f5;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  h1 {\n    font-size: 21px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    619: function (n, e, t) {
      "use strict";
      t.r(e);
      var o = t(1),
        i = t.n(o),
        A = t(365),
        r = t(366),
        a = t(105),
        l = t.n(a),
        s = t(594),
        f = { insert: "head", singleton: !1 };
      l()(s.a, f), s.a.locals;
      function u(n) {
        return (u =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (n) {
                return typeof n;
              }
            : function (n) {
                return n &&
                  "function" == typeof Symbol &&
                  n.constructor === Symbol &&
                  n !== Symbol.prototype
                  ? "symbol"
                  : typeof n;
              })(n);
      }
      function c(n, e) {
        for (var t = 0; t < e.length; t++) {
          var o = e[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      function p(n, e) {
        return (p =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function d(n) {
        var e = (function () {
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
          } catch (n) {
            return !1;
          }
        })();
        return function () {
          var t,
            o = b(n);
          if (e) {
            var i = b(this).constructor;
            t = Reflect.construct(o, arguments, i);
          } else t = o.apply(this, arguments);
          return B(this, t);
        };
      }
      function B(n, e) {
        if (e && ("object" === u(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (n) {
          if (void 0 === n)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return n;
        })(n);
      }
      function b(n) {
        return (b = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      var C = (function (n) {
        !(function (n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && p(n, e);
        })(l, n);
        var e,
          t,
          o,
          a = d(l);
        function l(n) {
          return (
            (function (n, e) {
              if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            a.call(this, n)
          );
        }
        return (
          (e = l),
          (t = [
            {
              key: "render",
              value: function () {
                return i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(A.a, null),
                  i.a.createElement(
                    "main",
                    null,
                    i.a.createElement("h1", null, "About"),
                    i.a.createElement(
                      "div",
                      { className: "about" },
                      i.a.createElement(
                        "div",
                        { className: "leftCol" },
                        i.a.createElement(
                          "div",
                          { className: "container" },
                          i.a.createElement("iframe", {
                            className: "responsive-iframe",
                            src: "https://www.youtube.com/embed/byqA_CilT6c",
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow:
                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                          })
                        )
                      ),
                      i.a.createElement(
                        "div",
                        { className: "rightCol" },
                        i.a.createElement(
                          "p",
                          null,
                          i.a.createElement(
                            "strong",
                            null,
                            "Past history will teach us that in times of great Turmoil and Crisis, it is often the artists and musicians that inspire the people to have hope."
                          ),
                          " ",
                          "The last so-called plague on the Planet was during the 16th century, and was called the Black Plague."
                        ),
                        i.a.createElement(
                          "p",
                          null,
                          "Remember what happened after that to turn society around? The Renaissance happened. It was the artists, musicians and creative people of all kinds, that inspired the people to find new ways of living and thinking on the planet."
                        ),
                        i.a.createElement(
                          "p",
                          null,
                          "Artists have lost their livelihood as this pandemic has caused a near extinction of the performing arts since all the performing venues, museums, galleries etc. have been shut down."
                        ),
                        i.a.createElement(
                          "p",
                          null,
                          "GLOBAL PEACE RHYTHMS will feature artists and musicians from all over the world who are using their talents and art both for positive social change in the world and are also encouraging and inspiring people to also take action to create a better world."
                        ),
                        i.a.createElement(
                          "h3",
                          null,
                          i.a.createElement(
                            "span",
                            { style: { whiteSpace: "nowrap" } },
                            "The arts have always been the soul of a culture."
                          ),
                          i.a.createElement("br", null),
                          "When art dies... the culture dies."
                        )
                      )
                    )
                  ),
                  i.a.createElement(r.a, null)
                );
              },
            },
          ]) && c(e.prototype, t),
          o && c(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(i.a.Component);
      e.default = C;
    },
  },
]);