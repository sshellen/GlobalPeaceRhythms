(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    368: function (n, e, t) {
      n.exports = t.p + "img/d931a92227a2f16728baabff0f699ace.png";
    },
    369: function (n, e, t) {
      n.exports = t.p + "img/dfd5298816cab6623710e16ce353328b.png";
    },
    370: function (n, e, t) {
      n.exports = t.p + "img/c37039c91572ebd494c8b44d30f2b181.png";
    },
    371: function (n, e, t) {
      n.exports = t.p + "img/464e58eb2268d6e0a5c80058510a7438.png";
    },
    372: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return R;
      }),
        t.d(e, "b", function () {
          return L;
        });
      var i = t(1),
        o = t.n(i),
        a = t(106),
        r = t.n(a),
        A = t(617),
        s = t(105),
        l = t.n(s),
        c = t(387),
        f = { insert: "head", singleton: !1 },
        p = (l()(c.a, f), c.a.locals, t(391)),
        d = t.n(p),
        B = t(151),
        m = t(368),
        C = t.n(m),
        g = t(369),
        u = t.n(g),
        x = t(370),
        E = t.n(x),
        h = t(371),
        b = t.n(h);
      function y(n) {
        return (y =
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
      function w(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function I(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function v(n, e, t) {
        return (
          e && I(n.prototype, e),
          t && I(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      function k(n, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (n.prototype = Object.create(e && e.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e && z(n, e);
      }
      function z(n, e) {
        return (z =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function j(n) {
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
            i = N(n);
          if (e) {
            var o = N(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return W(this, t);
        };
      }
      function W(n, e) {
        if (e && ("object" === y(e) || "function" == typeof e)) return e;
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
      function N(n) {
        return (N = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      var O = (function (n) {
          k(t, n);
          var e = j(t);
          function t(n) {
            return w(this, t), e.call(this, n);
          }
          return (
            v(t, [
              {
                key: "resizeContent",
                value: function () {
                  (this.lbDiv = document.getElementById("lightbox")),
                    (this.lbDiv.style.width = window.innerWidth + "px"),
                    (this.lbDiv.style.height = window.innerHeight + "px");
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  document.body.classList.add("fixed"),
                    this.resizeContent(),
                    window.addEventListener("resize", this.resizeContent);
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  document.body.classList.remove("fixed"),
                    window.removeEventListener("resize", this.resizeContent);
                },
              },
              {
                key: "render",
                value: function () {
                  return r.a.createPortal(this.props.children, document.body);
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        R = (function (n) {
          k(t, n);
          var e = j(t);
          function t() {
            return w(this, t), e.apply(this, arguments);
          }
          return (
            v(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.artist,
                    t = n.closeHandler;
                  return !0 === n.open
                    ? o.a.createElement(
                        O,
                        null,
                        o.a.createElement(
                          "div",
                          { id: "lightbox", className: "lightbox" },
                          o.a.createElement(
                            "div",
                            { className: "close" },
                            o.a.createElement(
                              "a",
                              { onClick: t },
                              o.a.createElement("img", { src: d.a })
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "content" },
                            o.a.createElement(
                              "div",
                              { className: "lightboxCols" },
                              o.a.createElement(
                                "div",
                                { className: "leftCol" },
                                o.a.createElement("img", {
                                  className: "profileImg",
                                  src: "".concat(
                                    e.image.data.attributes.formats.medium.url
                                  ),
                                }),
                                o.a.createElement(
                                  "div",
                                  { className: "socialMedia" },
                                  e.facebook &&
                                    null !== e.facebook &&
                                    o.a.createElement(
                                      B.Link,
                                      { to: e.facebook },
                                      o.a.createElement("img", { src: u.a })
                                    ),
                                  e.twitter &&
                                    null !== e.twitter &&
                                    o.a.createElement(
                                      B.Link,
                                      { to: e.twitter },
                                      o.a.createElement("img", { src: C.a })
                                    ),
                                  e.youtube &&
                                    null !== e.youtube &&
                                    o.a.createElement(
                                      B.Link,
                                      { to: e.youtube },
                                      o.a.createElement("img", { src: E.a })
                                    ),
                                  e.instagram &&
                                    null !== e.instagram &&
                                    o.a.createElement(
                                      B.Link,
                                      { to: e.instagram },
                                      o.a.createElement("img", { src: b.a })
                                    )
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "rightCol" },
                                o.a.createElement("h2", null, e.name),
                                o.a.createElement(A.a, {
                                  children: e.description,
                                }),
                                o.a.createElement(
                                  "div",
                                  { className: "info" },
                                  o.a.createElement(
                                    "div",
                                    { className: "label" },
                                    "LOCATION: "
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "description" },
                                    e.location
                                  )
                                ),
                                o.a.createElement(
                                  "div",
                                  { className: "info" },
                                  o.a.createElement(
                                    "div",
                                    { className: "label" },
                                    "WEBSITE: "
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "description" },
                                    o.a.createElement(
                                      "a",
                                      { href: e.website },
                                      e.website
                                    )
                                  )
                                )
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "buttonRow" },
                              o.a.createElement(
                                "button",
                                { className: "blueButton", onClick: t },
                                "CLOSE"
                              )
                            )
                          )
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.a.Component),
        L = (function (n) {
          k(t, n);
          var e = j(t);
          function t() {
            return w(this, t), e.apply(this, arguments);
          }
          return (
            v(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.spotlight,
                    t = n.closeHandler;
                  return !0 === n.open
                    ? o.a.createElement(
                        O,
                        null,
                        o.a.createElement(
                          "div",
                          { id: "lightbox", className: "lightbox" },
                          o.a.createElement(
                            "div",
                            { className: "close" },
                            o.a.createElement(
                              "a",
                              { onClick: t },
                              o.a.createElement("img", { src: d.a })
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "content" },
                            o.a.createElement(
                              "div",
                              { className: "lightboxCols" },
                              o.a.createElement(
                                "div",
                                { className: "leftCol" },
                                null !== e.videoURL &&
                                  o.a.createElement(
                                    o.a.Fragment,
                                    null,
                                    o.a.createElement(
                                      "div",
                                      { className: "container" },
                                      o.a.createElement("iframe", {
                                        className: "responsive-iframe",
                                        src: e.videoURL,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow:
                                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: !0,
                                      })
                                    ),
                                    o.a.createElement(
                                      "div",
                                      { className: "tagline" },
                                      e.videoTagline
                                    )
                                  ),
                                null === e.videoURL &&
                                  e.image.data.attributes.formats &&
                                  o.a.createElement(
                                    o.a.Fragment,
                                    null,
                                    o.a.createElement("img", {
                                      src: "".concat(
                                        e.image.data.attributes.formats.medium
                                          .url
                                      ),
                                    }),
                                    o.a.createElement(
                                      "div",
                                      { className: "tagline" },
                                      e.tagline
                                    )
                                  )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "rightCol" },
                                o.a.createElement("h2", null, e.name),
                                o.a.createElement(A.a, {
                                  children: e.description,
                                }),
                                o.a.createElement(
                                  "a",
                                  { className: "learnMore black", href: e.url },
                                  "VISIT SITE"
                                )
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "buttonRow" },
                              o.a.createElement(
                                "button",
                                { className: "blueButton", onClick: t },
                                "CLOSE"
                              )
                            )
                          )
                        )
                      )
                    : null;
                },
              },
            ]),
            t
          );
        })(o.a.Component);
    },
    387: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(388),
        s = t(389),
        l = t(390),
        c = r()(o.a);
      c.i(A.a),
        c.i(s.a),
        c.i(l.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    388: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .lightbox {\n    position: absolute;\n    background: #fff;\n    color: #242124;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  .lightbox h2 {\n    font-family: "Libre Baskerville", serif;\n    font-size: 36px;\n    margin: 0;\n    color: #011526;\n  }\n\n  .lightbox p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 10px 0 30px 0;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n  }\n\n  .content .lightboxCols {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin: 30px 0;\n  }\n\n  .content .lightboxCols .leftCol img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n\n  .content .lightboxCols .rightCol {\n    margin-left: 40px;\n  }\n  .content .lightboxCols .leftCol {\n    width: 100%;\n  }\n  .content .lightboxCols .leftCol .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia a {\n    margin: 0 10px;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 50px;\n  }\n  .lightbox .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .lightbox .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,MAAM;IACN,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,uCAAuC;IACvC,eAAe;IACf,SAAS;IACT,cAAc;EAChB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,yBAAyB;EAC3B;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;EAChB;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;EACb;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,+BAA+B;IAC/B,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;EAClB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .lightbox {\n    position: absolute;\n    background: #fff;\n    color: #242124;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    background-color: #fff;\n    padding: 50px;\n    box-sizing: border-box;\n  }\n  .lightbox h2 {\n    font-family: "Libre Baskerville", serif;\n    font-size: 36px;\n    margin: 0;\n    color: #011526;\n  }\n\n  .lightbox p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 10px 0 30px 0;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n  }\n\n  .content .lightboxCols {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    margin: 30px 0;\n  }\n\n  .content .lightboxCols .leftCol img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n\n  .content .lightboxCols .rightCol {\n    margin-left: 40px;\n  }\n  .content .lightboxCols .leftCol {\n    width: 100%;\n  }\n  .content .lightboxCols .leftCol .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia a {\n    margin: 0 10px;\n  }\n\n  .content .lightboxCols .leftCol .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n    margin-top: 50px;\n  }\n  .lightbox .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .lightbox .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    389: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow-y: scroll;\n    padding: 40px;\n    box-sizing: border-box;\n  }\n\n  .lightbox .content {\n    display: flex;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n    vertical-align: top;\n    height: 100%;\n  }\n\n  .lightbox .content img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n  .lightbox .content p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 0 0 30px 0;\n    padding: 0;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n  .content .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  .content .socialMedia a {\n    margin: 0 10px;\n  }\n  .content .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/LightboxTemplates/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,kBAAkB;IAClB,sBAAsB;IACtB,MAAM;IACN,OAAO;IACP,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,2BAA2B;IAC3B,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,WAAW;IACX,yBAAyB;EAC3B;EACA;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;EACrB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,WAAW;EACb;EACA;IACE,cAAc;EAChB;EACA;IACE,YAAY;IACZ,WAAW;EACb;EACA;IACE,+BAA+B;IAC/B,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,eAAe;IACf,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 899px) {\n  .lightbox {\n    position: absolute;\n    background-color: #fff;\n    top: 0;\n    left: 0;\n    z-index: 1000;\n    overflow-y: scroll;\n    padding: 40px;\n    box-sizing: border-box;\n  }\n\n  .lightbox .content {\n    display: flex;\n    flex-flow: column;\n    justify-content: flex-start;\n    align-items: center;\n    vertical-align: top;\n    height: 100%;\n  }\n\n  .lightbox .content img.profileImg {\n    width: 100%;\n    min-width: 300px;\n    border: 1px solid #ddd;\n  }\n  .lightbox .content p {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    margin: 0 0 30px 0;\n    padding: 0;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .lightbox .close {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .lightbox .close img {\n    width: 30px;\n    height: 30px;\n    padding: 0 0 20px 0;\n  }\n  .content .socialMedia {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 20px 0;\n    width: 100%;\n  }\n  .content .socialMedia a {\n    margin: 0 10px;\n  }\n  .content .socialMedia img {\n    height: 30px;\n    width: 30px;\n  }\n  .info {\n    font-family: "Lato", sans-serif;\n    display: flex;\n    justify-content: flex-start;\n    align-items: left;\n    font-size: 12px;\n    margin: 20px 0;\n  }\n\n  .info .label {\n    margin-right: 10px;\n    font-weight: bold;\n  }\n\n  .info .description a:visited,\n  .info .description a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .info .description a:hover {\n    text-decoration: underline;\n  }\n\n  .lightbox .buttonRow {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 50px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    390: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "",
        "",
        { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
      ]),
        (e.a = r);
    },
    391: function (n, e, t) {
      n.exports = t.p + "img/bd46e24f89ca096d76b9cc818531d180.png";
    },
    394: function (n, e) {},
    534: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(535),
        s = t(536),
        l = t(537),
        c = r()(o.a);
      c.i(A.a),
        c.i(s.a),
        c.i(l.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    535: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.artist {\n  font-family: "Lato", sans-serif;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 300px;\n  margin: 0 20px 20px 0;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.artist img {\n  width: 100%;\n}\n\n.artist .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 0 10px;\n  width: inherit;\n  font-size: 14px;\n}\n\n.artist .description .teaser {\n  color: #242124;\n}\n\n.artist .description h3.name {\n  text-align: center;\n  color: #242124;\n  font-size: 21px;\n  color: #011526;\n  margin: 10px 0 0 0;\n  padding: 0;\n}\n\n.artist .description .blueButton {\n  text-align: center;\n  margin: 30px 0 30px 0;\n}\n\n.artist .info {\n  display: flex;\n  align-items: left;\n  font-size: 11px;\n  padding: 5px 10px 0 10px;\n}\n\n.artist .info .label {\n  width: 30%;\n}\n\n.artist .socialMedia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n.artist .socialMedia a {\n  margin: 0 10px;\n}\n.artist .socialMedia img {\n  height: 20px;\n  width: 20px;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,+BAA+B;EAC/B,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,WAAW;AACb",
          sourcesContent: [
            '.artist {\n  font-family: "Lato", sans-serif;\n  box-sizing: border-box;\n  min-width: 200px;\n  max-width: 300px;\n  margin: 0 20px 20px 0;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.artist img {\n  width: 100%;\n}\n\n.artist .description {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #fff;\n  padding: 0 10px;\n  width: inherit;\n  font-size: 14px;\n}\n\n.artist .description .teaser {\n  color: #242124;\n}\n\n.artist .description h3.name {\n  text-align: center;\n  color: #242124;\n  font-size: 21px;\n  color: #011526;\n  margin: 10px 0 0 0;\n  padding: 0;\n}\n\n.artist .description .blueButton {\n  text-align: center;\n  margin: 30px 0 30px 0;\n}\n\n.artist .info {\n  display: flex;\n  align-items: left;\n  font-size: 11px;\n  padding: 5px 10px 0 10px;\n}\n\n.artist .info .label {\n  width: 30%;\n}\n\n.artist .socialMedia {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n}\n.artist .socialMedia a {\n  margin: 0 10px;\n}\n.artist .socialMedia img {\n  height: 20px;\n  width: 20px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    536: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 14px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    font-size: 18px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n\n  .artist .socialMedia {\n    margin-top: 20px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,+BAA+B;IAC/B,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,wBAAwB;EAC1B;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,gBAAgB;EAClB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 14px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    font-size: 18px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n\n  .artist .socialMedia {\n    margin-top: 20px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    537: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 12px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    color: #242124;\n    font-size: 16px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n  .artist .socialMedia img {\n    height: 14px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Tile/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,+BAA+B;IAC/B,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;IACxB,sBAAsB;IACtB,sBAAsB;EACxB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,cAAc;IACd,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,wBAAwB;EAC1B;;EAEA;IACE,WAAW;EACb;EACA;IACE,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .artist {\n    font-family: "Lato", sans-serif;\n    box-sizing: border-box;\n    min-width: 150px;\n    max-width: 300px;\n    margin: 0 10px 20px 10px;\n    background-color: #fff;\n    border: 1px solid #eee;\n  }\n\n  .artist img {\n    width: 100%;\n  }\n\n  .artist .description {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #fff;\n    padding: 0 10px;\n    width: inherit;\n    font-size: 12px;\n  }\n\n  .artist .description .teaser {\n    color: #242124;\n  }\n\n  .artist .description h3.name {\n    text-align: center;\n    color: #242124;\n    font-size: 16px;\n    color: #011526;\n    margin: 10px 0 0 0;\n    padding: 0;\n  }\n\n  .artist .description .blueButton {\n    text-align: center;\n    margin: 30px 0 30px 0;\n  }\n\n  .artist .info {\n    display: flex;\n    align-items: left;\n    font-size: 11px;\n    padding: 5px 10px 0 10px;\n  }\n\n  .artist .info .label {\n    width: 80px;\n  }\n  .artist .socialMedia img {\n    height: 14px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    538: function (n, e, t) {
      n.exports = t.p + "img/de73701c7e56c5d89ca3729be69d0f93.svg";
    },
    539: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(540),
        s = t(541),
        l = t(542),
        c = r()(o.a);
      c.i(A.a),
        c.i(s.a),
        c.i(l.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    540: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.spotlightBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.spotlightBanner img {\n  width: 100%;\n}\n\n.spotlightBanner .bannerContent {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n}\n.spotlightBanner .bannerContent .leftCol,\n.spotlightBanner .bannerContent .rightCol {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.spotlightBanner .bannerContent .leftCol {\n  padding: 0 80px 0 0;\n}\n\n.spotlightBanner .bannerContent .rightCol {\n  padding: 0 0 0 80px;\n}\n.spotlightBanner .bannerContent .rightCol a,\n.spotlightBanner .bannerContent .rightCol a:visited,\n.spotlightBanner .bannerContent .rightCol a:active {\n  color: #fff;\n}\n.spotlightBanner .bannerContent .rightCol img {\n  width: 100%;\n  max-width: 240px;\n}\n.spotlightBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 0.5em;\n}\n.spotlightBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n}\n.spotlightBanner .blueButton {\n  margin-top: 1em;\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,sBAAsB;EACtB,kBAAkB;AACpB;AACA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;;;EAGE,WAAW;AACb;AACA;EACE,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,uCAAuC;EACvC,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,WAAW;EACX,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB",
          sourcesContent: [
            '.spotlightBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.spotlightBanner img {\n  width: 100%;\n}\n\n.spotlightBanner .bannerContent {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n}\n.spotlightBanner .bannerContent .leftCol,\n.spotlightBanner .bannerContent .rightCol {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.spotlightBanner .bannerContent .leftCol {\n  padding: 0 80px 0 0;\n}\n\n.spotlightBanner .bannerContent .rightCol {\n  padding: 0 0 0 80px;\n}\n.spotlightBanner .bannerContent .rightCol a,\n.spotlightBanner .bannerContent .rightCol a:visited,\n.spotlightBanner .bannerContent .rightCol a:active {\n  color: #fff;\n}\n.spotlightBanner .bannerContent .rightCol img {\n  width: 100%;\n  max-width: 240px;\n}\n.spotlightBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 0.5em;\n}\n.spotlightBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n}\n.spotlightBanner .blueButton {\n  margin-top: 1em;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    541: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner img {\n    width: 100%;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0 20px 0 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    padding: 0 0 0 20px;\n  }\n\n  .spotlightBanner .bannerContent .rightCol img {\n    width: 100%;\n    max-width: 180px;\n  }\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.5em;\n  }\n  .spotlightBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,oBAAoB;EACtB;EACA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner img {\n    width: 100%;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0 20px 0 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    padding: 0 0 0 20px;\n  }\n\n  .spotlightBanner .bannerContent .rightCol img {\n    width: 100%;\n    max-width: 180px;\n  }\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.5em;\n  }\n  .spotlightBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    margin-top: 20px;\n  }\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    542: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    min-height: 180px;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    display: none;\n  }\n\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.3em;\n  }\n\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/SpotlightBanner/css/600Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;EACnB;EACA;;IAEE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,oBAAoB;EACtB;;EAEA;IACE,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .spotlightBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    max-height: 400px;\n  }\n\n  .spotlightBanner .bannerContent {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    min-height: 180px;\n  }\n  .spotlightBanner .bannerContent .leftCol,\n  .spotlightBanner .bannerContent .rightCol {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .spotlightBanner .bannerContent .leftCol {\n    padding: 0;\n  }\n\n  .spotlightBanner .bannerContent .rightCol {\n    display: none;\n  }\n\n  .spotlightBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    padding: 0 20px;\n    margin-bottom: 0.3em;\n  }\n\n  .spotlightBanner .blueButton {\n    margin-top: 1em;\n  }\n  .spotlightBanner .blueButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n    border-radius: 30px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    543: function (n, e, t) {
      n.exports = t.p + "img/2ef9a56fa2b5ccd813806e850f5de24d.png";
    },
    544: function (n, e, t) {
      "use strict";
      var i = t(105),
        o = t.n(i),
        a = t(545),
        r = { insert: "head", singleton: !1 };
      o()(a.a, r), a.a.locals;
    },
    545: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        A = t(546),
        s = t(547),
        l = t(548),
        c = r()(o.a);
      c.i(A.a),
        c.i(s.a),
        c.i(l.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    546: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.artists {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.artists section {\n  width: 100%;\n}\n.artistTiles {\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n.artistTiles h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  color: #242124;\n  font-weight: bold;\n  text-align: center;\n  margin: 30px 0;\n  width: 100%;\n}\n.artists .viewHeading {\n  font-family: "Lato", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  margin: 0 0 20px 20px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\naside.filterNav {\n  display: flex;\n  flex-direction: column;\n  margin: 0 20px 20px 0;\n  min-width: 240px;\n}\naside.filterNav .buttonBar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n}\naside.filterNav .navOption {\n  border: 1px solid #011526;\n  background-color: #fff;\n  text-align: left;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  color: #011526;\n  padding: 15px 8px;\n  cursor: pointer;\n}\naside.filterNav .navOption.selected {\n  background-color: #011526;\n  color: #fff;\n}\n\naside.filterNav .navOption a,\naside.filterNav .navOption a:visited,\naside.filterNav .navOption a:active {\n  color: #011526;\n  text-decoration: none;\n}\n\naside.filterNav .navOption a:hover {\n  color: #011526;\n  text-decoration: underline;\n}\n.genre {\n  display: flex;\n  flex-direction: column;\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  font-size: 14px;\n}\n.genre input {\n  background: #fff;\n  border: 1px solid #999;\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n.genre .formRow {\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.formHeader {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 0 0;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.formHeader h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n}\n.formHeader svg {\n  transition: all 200ms;\n}\n.formHeader svg.show {\n  margin-left: 10px;\n  transform: rotate(-90deg);\n}\n.formHeader svg.hide {\n  margin-left: 10px;\n  transform: rotate(0deg);\n}\n.contribute {\n  margin-bottom: 50px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.contribute form {\n  max-width: 600px;\n  box-sizing: border-box;\n  margin-left: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n}\n.contribute .formRow {\n  display: flex;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.contribute form input,\n.contribute form textarea {\n  background-color: #fff;\n  border: 1px solid #999;\n}\n.contribute input,\n.contribute textarea {\n  width: 100%;\n  padding: 5px;\n}\n\n.contribute form label {\n  width: 100px;\n  font-size: 14px;\n}\n.contribute .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  font-family: "Lato", sans-serif;\n}\n.contribute .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.instructions {\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  margin: 40px 20px;\n  font-size: 14px;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,WAAW;AACb;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,6BAA6B;EAC7B,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,gBAAgB;EAChB,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;;;EAGE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,+BAA+B;EAC/B,cAAc;EACd,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,+BAA+B;EAC/B,eAAe;EACf,SAAS;EACT,UAAU;AACZ;AACA;EACE,qBAAqB;AACvB;AACA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,mBAAmB;EACnB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,+BAA+B;EAC/B,eAAe;AACjB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;EACtB,sBAAsB;AACxB;AACA;;EAEE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;EACE,+BAA+B;EAC/B,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB",
          sourcesContent: [
            '.artists {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  padding: 0 20px;\n  box-sizing: border-box;\n}\n.artists section {\n  width: 100%;\n}\n.artistTiles {\n  margin-left: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n.artistTiles h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  color: #242124;\n  font-weight: bold;\n  text-align: center;\n  margin: 30px 0;\n  width: 100%;\n}\n.artists .viewHeading {\n  font-family: "Lato", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  margin: 0 0 20px 20px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\naside.filterNav {\n  display: flex;\n  flex-direction: column;\n  margin: 0 20px 20px 0;\n  min-width: 240px;\n}\naside.filterNav .buttonBar {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 20px;\n}\naside.filterNav .navOption {\n  border: 1px solid #011526;\n  background-color: #fff;\n  text-align: left;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 16px;\n  color: #011526;\n  padding: 15px 8px;\n  cursor: pointer;\n}\naside.filterNav .navOption.selected {\n  background-color: #011526;\n  color: #fff;\n}\n\naside.filterNav .navOption a,\naside.filterNav .navOption a:visited,\naside.filterNav .navOption a:active {\n  color: #011526;\n  text-decoration: none;\n}\n\naside.filterNav .navOption a:hover {\n  color: #011526;\n  text-decoration: underline;\n}\n.genre {\n  display: flex;\n  flex-direction: column;\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  font-size: 14px;\n}\n.genre input {\n  background: #fff;\n  border: 1px solid #999;\n  margin-right: 5px;\n  width: 20px;\n  height: 20px;\n}\n.genre .formRow {\n  display: flex;\n  margin: 10px 0;\n  align-items: center;\n}\n\n.formHeader {\n  display: flex;\n  align-items: center;\n  margin: 20px 0 0 0;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.formHeader h3 {\n  font-family: "Lato", sans-serif;\n  font-size: 18px;\n  margin: 0;\n  padding: 0;\n}\n.formHeader svg {\n  transition: all 200ms;\n}\n.formHeader svg.show {\n  margin-left: 10px;\n  transform: rotate(-90deg);\n}\n.formHeader svg.hide {\n  margin-left: 10px;\n  transform: rotate(0deg);\n}\n.contribute {\n  margin-bottom: 50px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.contribute form {\n  max-width: 600px;\n  box-sizing: border-box;\n  margin-left: 20px;\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n}\n.contribute .formRow {\n  display: flex;\n  margin-top: 10px;\n  box-sizing: border-box;\n}\n.contribute form input,\n.contribute form textarea {\n  background-color: #fff;\n  border: 1px solid #999;\n}\n.contribute input,\n.contribute textarea {\n  width: 100%;\n  padding: 5px;\n}\n\n.contribute form label {\n  width: 100px;\n  font-size: 14px;\n}\n.contribute .requiredFields {\n  margin-top: 20px;\n  font-size: 12px;\n  font-family: "Lato", sans-serif;\n}\n.contribute .buttonBar {\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  justify-content: flex-end;\n}\n.instructions {\n  font-family: "Lato", sans-serif;\n  color: #242124;\n  margin: 40px 20px;\n  font-size: 14px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    547: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .artists {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n  .artists section {\n    width: 100%;\n  }\n\n  .artists .viewHeading {\n    font-family: "Lato", sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 10px;\n  }\n  aside.filterNav {\n    display: flex;\n    flex-direction: column;\n    margin: 0 0 20px 0;\n    min-width: 240px;\n  }\n  aside.filterNav .buttonBar {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  aside.filterNav .navOption {\n    text-align: center;\n  }\n  aside.filterNav .navOption.selected {\n    background-color: #011526;\n    color: #fff;\n  }\n\n  .genre {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: left;\n  }\n  .genre .rightCol {\n    margin-left: 40px;\n  }\n  .genre input {\n    background: #fff;\n    border: 1px solid #999;\n    margin-right: 5px;\n    width: 20px;\n    height: 20px;\n  }\n  .genre .formRow {\n    display: flex;\n    margin: 10px 0;\n    align-items: center;\n  }\n  h3.formHeader {\n    margin: 20px 0 0 0;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #ccc;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n  }\n  .contribute {\n    margin-bottom: 50px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .contribute form {\n    max-width: 600px;\n    box-sizing: border-box;\n    margin-left: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n  .contribute .formRow {\n    display: flex;\n    margin-top: 10px;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,WAAW;IACX,eAAe;IACf,sBAAsB;EACxB;EACA;IACE,WAAW;EACb;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,6BAA6B;IAC7B,oBAAoB;EACtB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,mBAAmB;EACrB;EACA;IACE,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,WAAW;EACb;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;EACvB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;IACjB,WAAW;IACX,YAAY;EACd;EACA;IACE,aAAa;IACb,cAAc;IACd,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,oBAAoB;IACpB,6BAA6B;IAC7B,+BAA+B;IAC/B,eAAe;EACjB;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,sBAAsB;EACxB;EACA;IACE,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;IACjB,+BAA+B;IAC/B,eAAe;EACjB;EACA;IACE,aAAa;IACb,gBAAgB;IAChB,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .artists {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    width: 100%;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n  .artists section {\n    width: 100%;\n  }\n\n  .artists .viewHeading {\n    font-family: "Lato", sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 0 20px 0;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 10px;\n  }\n  aside.filterNav {\n    display: flex;\n    flex-direction: column;\n    margin: 0 0 20px 0;\n    min-width: 240px;\n  }\n  aside.filterNav .buttonBar {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-bottom: 20px;\n  }\n  aside.filterNav .navOption {\n    text-align: center;\n  }\n  aside.filterNav .navOption.selected {\n    background-color: #011526;\n    color: #fff;\n  }\n\n  .genre {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: left;\n  }\n  .genre .rightCol {\n    margin-left: 40px;\n  }\n  .genre input {\n    background: #fff;\n    border: 1px solid #999;\n    margin-right: 5px;\n    width: 20px;\n    height: 20px;\n  }\n  .genre .formRow {\n    display: flex;\n    margin: 10px 0;\n    align-items: center;\n  }\n  h3.formHeader {\n    margin: 20px 0 0 0;\n    padding-bottom: 10px;\n    border-bottom: 1px solid #ccc;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n  }\n  .contribute {\n    margin-bottom: 50px;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .contribute form {\n    max-width: 600px;\n    box-sizing: border-box;\n    margin-left: 20px;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n  .contribute .formRow {\n    display: flex;\n    margin-top: 10px;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    548: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n\n  .artistTiles {\n    margin-left: 20px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Artists/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 599px) {\n  h1 {\n    font-size: 21px;\n  }\n\n  .artistTiles {\n    margin-left: 20px;\n    display: flex;\n    flex-flow: row wrap;\n    align-items: stretch;\n    justify-content: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    550: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        A = t.n(r),
        s = t(534),
        l = { insert: "head", singleton: !1 },
        c = (A()(s.a, l), s.a.locals, t(372)),
        f = t(368),
        p = t.n(f),
        d = t(369),
        B = t.n(d),
        m = t(370),
        C = t.n(m),
        g = t(371),
        u = t.n(g);
      function x(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null == t) return;
            var i,
              o,
              a = [],
              r = !0,
              A = !1;
            try {
              for (
                t = t.call(n);
                !(r = (i = t.next()).done) &&
                (a.push(i.value), !e || a.length !== e);
                r = !0
              );
            } catch (s) {
              (A = !0), (o = s);
            } finally {
              try {
                r || null == t.return || t.return();
              } finally {
                if (A) throw o;
              }
            }
            return a;
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return E(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return E(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function E(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
        return i;
      }
      e.a = function (n) {
        var e = n.artist,
          t = x(Object(i.useState)(!1), 2),
          r = t[0],
          A = t[1],
          s = e && e.description ? e.description.substr(0, 100) + " ..." : "";
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: "artist" },
            e &&
              null !== e.image &&
              o.a.createElement("img", {
                src: "".concat(e.image.data.attributes.formats.thumbnail.url),
              }),
            o.a.createElement(
              "div",
              { className: "description" },
              o.a.createElement("h3", { className: "name" }, e.name),
              o.a.createElement("p", { className: "teaser" }, s),
              o.a.createElement(
                "button",
                {
                  className: "blueButton",
                  onClick: function () {
                    return A(!0);
                  },
                },
                "LEARN MORE"
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              e.facebook &&
                null !== e.facebook &&
                o.a.createElement(
                  a.Link,
                  { to: e.facebook },
                  o.a.createElement("img", { src: B.a })
                ),
              e.twitter &&
                null !== e.twitter &&
                o.a.createElement(
                  a.Link,
                  { to: e.twitter },
                  o.a.createElement("img", { src: p.a })
                ),
              e.youtube &&
                null !== e.youtube &&
                o.a.createElement(
                  a.Link,
                  { to: e.youtube },
                  o.a.createElement("img", { src: C.a })
                ),
              e.instagram &&
                null !== e.instagram &&
                o.a.createElement(
                  a.Link,
                  { to: e.instagram },
                  o.a.createElement("img", { src: u.a })
                )
            )
          ),
          o.a.createElement(c.a, {
            open: r,
            artist: e,
            closeHandler: function () {
              A(!1);
            },
          })
        );
      };
    },
    551: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(372),
        r = t(105),
        A = t.n(r),
        s = t(539),
        l = { insert: "head", singleton: !1 },
        c = (A()(s.a, l), s.a.locals, t(543)),
        f = t.n(c);
      function p(n) {
        return (p =
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
      function d(n, e, t, i, o, a, r) {
        try {
          var A = n[a](r),
            s = A.value;
        } catch (l) {
          return void t(l);
        }
        A.done ? e(s) : Promise.resolve(s).then(i, o);
      }
      function B(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function m(n, e) {
        return (m =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function C(n) {
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
            i = x(n);
          if (e) {
            var o = x(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return g(this, t);
        };
      }
      function g(n, e) {
        if (e && ("object" === p(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return u(n);
      }
      function u(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return n;
      }
      function x(n) {
        return (x = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function E(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var h = (function (n) {
        !(function (n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && m(n, e);
        })(A, n);
        var e,
          t,
          i,
          r = C(A);
        function A(n) {
          var e;
          return (
            (function (n, e) {
              if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, A),
            E(
              u((e = r.call(this, n))),
              "fetchData",
              (function () {
                var n,
                  e =
                    ((n = regeneratorRuntime.mark(function n(e) {
                      var t, i;
                      return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (t = e),
                                (n.next = 3),
                                fetch(t, {
                                  method: "get",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                              );
                            case 3:
                              return (i = n.sent), n.abrupt("return", i);
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })),
                    function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (i, o) {
                        var a = n.apply(e, t);
                        function r(n) {
                          d(a, i, o, r, A, "next", n);
                        }
                        function A(n) {
                          d(a, i, o, r, A, "throw", n);
                        }
                        r(void 0);
                      });
                    });
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            E(u(e), "closeHandler", function () {
              e.setState({ openState: !1 });
            }),
            (e.state = { spotlight: [], openState: !1 }),
            e
          );
        }
        return (
          (e = A),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                var n = this;
                this.fetchData(
                  "".concat(
                    "https://globalpeacerhythms.herokuapp.com",
                    "/api/spotlights?populate=*"
                  )
                )
                  .then(function (n) {
                    return n.json();
                  })
                  .then(function (e) {
                    n.setState({ spotlight: [e.data[0].attributes] });
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var n = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(
                    "div",
                    { className: "spotlightBanner" },
                    this.state.spotlight &&
                      this.state.spotlight.length > 0 &&
                      this.state.spotlight.map(function (e) {
                        return o.a.createElement(
                          "div",
                          {
                            className: "bannerContent",
                            key: "spotlight".concat(e.id),
                          },
                          o.a.createElement(
                            "div",
                            { className: "leftCol" },
                            o.a.createElement(
                              "div",
                              { className: "slogan" },
                              "In the Spotlight"
                            ),
                            o.a.createElement(
                              "p",
                              { className: "tagline" },
                              e.name
                            ),
                            o.a.createElement(
                              "button",
                              {
                                className: "blueButton",
                                onClick: function () {
                                  return n.setState({ openState: !0 });
                                },
                              },
                              "LEARN MORE"
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "rightCol" },
                            o.a.createElement("img", {
                              src: "".concat(
                                e.logo.data.attributes.formats.thumbnail.url
                              ),
                            }),
                            o.a.createElement(
                              "div",
                              { className: "tagline" },
                              o.a.createElement("a", { href: e.url }, e.tagline)
                            )
                          )
                        );
                      }),
                    o.a.createElement("img", { src: f.a })
                  ),
                  o.a.createElement(a.b, {
                    open: this.state.openState,
                    spotlight: this.state.spotlight[0],
                    closeHandler: this.closeHandler,
                  })
                );
              },
            },
          ]) && B(e.prototype, t),
          i && B(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          A
        );
      })(o.a.Component);
      e.a = h;
    },
    615: function (n, e, t) {
      "use strict";
      t.r(e);
      var i = t(1),
        o = t.n(i),
        a = t(550),
        r = t(551),
        A = (t(538), t(393)),
        s = t.n(A),
        l = (t(544), t(365)),
        c = t(366);
      function f(n) {
        return (f =
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
      function p(n, e, t, i, o, a, r) {
        try {
          var A = n[a](r),
            s = A.value;
        } catch (l) {
          return void t(l);
        }
        A.done ? e(s) : Promise.resolve(s).then(i, o);
      }
      function d(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function B(n, e) {
        return (B =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function m(n) {
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
            i = u(n);
          if (e) {
            var o = u(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return C(this, t);
        };
      }
      function C(n, e) {
        if (e && ("object" === f(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return g(n);
      }
      function g(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return n;
      }
      function u(n) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      function x(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var E = (function (n) {
        !(function (n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && B(n, e);
        })(f, n);
        var e,
          t,
          i,
          A = m(f);
        function f(n) {
          var e;
          return (
            (function (n, e) {
              if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, f),
            x(g((e = A.call(this, n))), "filter", function () {
              var n = e.state.genres,
                t = [],
                i = {},
                o = {};
              for (var a in n)
                if (!0 === n[a]) {
                  var r = {},
                    A = {};
                  (A.$eq = a), (r.genre = A), t.push(r);
                }
              (i.$or = t), (o.filters = i);
              var l = s.a.stringify(o);
              e.fetchData(
                ""
                  .concat(
                    "https://globalpeacerhythms.herokuapp.com",
                    "/api/artists?"
                  )
                  .concat(l, "&populate=*")
              )
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  e.setState({ artists: n.data });
                });
            }),
            x(g(e), "toggleGenres", function () {
              e.state.showFilter
                ? e.setState({ showFilter: !1 }, function () {
                    e.showHidePaddle.classList.add("hide"),
                      e.showHidePaddle.classList.remove("show");
                    var n = e.state.genres,
                      t = {};
                    for (var i in n) (n[i] = !1), (t = n);
                    e.setState({ genres: t }, e.filter);
                  })
                : e.setState({ showFilter: !0 }, function () {
                    e.showHidePaddle.classList.add("show"),
                      e.showHidePaddle.classList.remove("hide");
                  });
            }),
            x(g(e), "toggleFilterOption", function (n) {
              var t = n.target.checked,
                i = n.target.value,
                o = e.state.genres,
                a = {};
              for (var r in o) r === i && (o[r] = !!t), (a = o);
              e.setState({ genres: a }, e.filter);
            }),
            x(
              g(e),
              "fetchData",
              (function () {
                var n,
                  e =
                    ((n = regeneratorRuntime.mark(function n(e) {
                      var t, i;
                      return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (t = e),
                                (n.next = 3),
                                fetch(t, {
                                  method: "get",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                              );
                            case 3:
                              return (i = n.sent), n.abrupt("return", i);
                            case 5:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })),
                    function () {
                      var e = this,
                        t = arguments;
                      return new Promise(function (i, o) {
                        var a = n.apply(e, t);
                        function r(n) {
                          p(a, i, o, r, A, "next", n);
                        }
                        function A(n) {
                          p(a, i, o, r, A, "throw", n);
                        }
                        r(void 0);
                      });
                    });
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()
            ),
            (e.state = {
              artists: [],
              genres: {
                Rock: !1,
                RandB: !1,
                Blues: !1,
                Jazz: !1,
                HipHop: !1,
                Folk: !1,
                Reggae: !1,
                Pop: !1,
                Country: !1,
                Other: !1,
              },
              showFilter: !0,
            }),
            e
          );
        }
        return (
          (e = f),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                var n = this;
                this.fetchData(
                  "".concat(
                    "https://globalpeacerhythms.herokuapp.com",
                    "/api/artists?populate=*"
                  )
                )
                  .then(function (n) {
                    return n.json();
                  })
                  .then(function (e) {
                    n.setState({ artists: e.data });
                  }),
                  (this.showHidePaddle =
                    document.getElementById("showHidePaddle"));
              },
            },
            {
              key: "render",
              value: function () {
                var n = this;
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(l.a, null),
                  o.a.createElement(r.a, null),
                  o.a.createElement("h1", null, "Artists"),
                  o.a.createElement(
                    "main",
                    { className: "artists" },
                    o.a.createElement(
                      "aside",
                      { className: "filterNav" },
                      o.a.createElement(
                        "div",
                        { className: "buttonBar" },
                        o.a.createElement(
                          "button",
                          {
                            className: "navOption selected",
                            onClick: function () {
                              return n.props.history.push("./viewartists");
                            },
                          },
                          "VIEW ARTISTS"
                        ),
                        o.a.createElement(
                          "button",
                          {
                            className: "navOption",
                            onClick: function () {
                              return n.props.history.push("./contribute");
                            },
                          },
                          "CONTRIBUTE AS AN ARTIST"
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "formHeader", onClick: this.toggleGenres },
                        o.a.createElement("h3", null, "VIEW GENRE"),
                        o.a.createElement(
                          "div",
                          { className: "leftPaddle" },
                          o.a.createElement(
                            "a",
                            {
                              onClick: function () {
                                return n.changeDate("decrement");
                              },
                            },
                            o.a.createElement(
                              "svg",
                              {
                                className: "show",
                                id: "showHidePaddle",
                                width: "12",
                                height: "32",
                                viewBox: "0 0 20 38",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                              o.a.createElement("path", {
                                id: "leftPaddle",
                                d: "M0 21L24 0.215393L24 41.7846L0 21Z",
                                fill: "#011526",
                              })
                            )
                          )
                        )
                      ),
                      this.state.showFilter &&
                        o.a.createElement(
                          "form",
                          { name: "genre", className: "genre" },
                          o.a.createElement(
                            "div",
                            { className: "leftCol" },
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Rock",
                                value: "Rock",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Rock" },
                                "Rock"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "RandB",
                                value: "RandB",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "RandB" },
                                "R&B"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Jazz",
                                value: "Jazz",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Jazz" },
                                "Jazz"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "HipHop",
                                value: "HipHop",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "HipHop" },
                                "Hip Hop"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Blues",
                                value: "Blues",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Blues" },
                                "Blues"
                              )
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "rightCol" },
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Folk",
                                value: "Folk",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Folk" },
                                "Folk"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Reggae",
                                value: "Reggae",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Reggae" },
                                "Reggae"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Pop",
                                value: "Pop",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Pop" },
                                "Pop"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Country",
                                value: "Country",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Country" },
                                "Country"
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "formRow" },
                              o.a.createElement("input", {
                                type: "checkbox",
                                id: "Other",
                                value: "Other",
                                onChange: function (e) {
                                  return n.toggleFilterOption(e);
                                },
                              }),
                              " ",
                              o.a.createElement(
                                "label",
                                { htmlFor: "Other" },
                                "Other"
                              )
                            )
                          )
                        )
                    ),
                    o.a.createElement(
                      "section",
                      null,
                      o.a.createElement(
                        "h2",
                        { className: "viewHeading" },
                        "View Artists"
                      ),
                      o.a.createElement(
                        "div",
                        { className: "artistTiles" },
                        this.state.artists &&
                          this.state.artists.map(function (n, e) {
                            return o.a.createElement(a.a, {
                              key: "artist".concat(e),
                              artist: n.attributes,
                            });
                          }),
                        this.state.artists &&
                          0 === this.state.artists.length &&
                          o.a.createElement("h3", null, "No results found.")
                      )
                    )
                  ),
                  o.a.createElement(c.a, null)
                );
              },
            },
          ]) && d(e.prototype, t),
          i && d(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          f
        );
      })(o.a.Component);
      e.default = E;
    },
  },
]);