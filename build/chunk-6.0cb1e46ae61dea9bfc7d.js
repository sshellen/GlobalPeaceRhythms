(window.webpackJsonp = window.webpackJsonp || []).push([
  [6, 1],
  {
    365: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        s = t.n(r),
        l = t(373),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(367)),
        d = t.n(c),
        p = t(549),
        u = t(377),
        f = t.n(u),
        m = t(378),
        B = t.n(m),
        C = function () {
          var n = !1,
            e = document.body,
            t = document.createElement("div");
          t.classList.add("overlay");
          var i = function () {
            n
              ? (e.classList.remove("fixed"),
                e.removeChild(t),
                (n = !1),
                p.a.to("#flyoutMenu", {
                  duration: 0.5,
                  right: "-100%",
                  onComplete: function () {
                    document.getElementById("rolloverMenuClose").style.opacity =
                      "0";
                  },
                }))
              : ((n = !0),
                e.classList.add("fixed"),
                e.appendChild(t),
                p.a.to("#flyoutMenu", {
                  duration: 0.3,
                  right: 0,
                  onComplete: function () {
                    var n = document.getElementById("rolloverMenuClose"),
                      e = window.innerWidth;
                    console.log(e),
                      (n.style.width = e - 100 + "px"),
                      (n.style.opacity = "1.0");
                  },
                }));
          };
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "div",
              { className: "topPage tablet" },
              o.a.createElement(
                "div",
                { className: "topRow" },
                o.a.createElement("img", { src: d.a, className: "logo" }),
                o.a.createElement(
                  "div",
                  { className: "topRight" },
                  o.a.createElement(
                    "button",
                    { className: "blueButton" },
                    "DONATE"
                  ),
                  o.a.createElement(
                    a.Link,
                    { onClick: i },
                    o.a.createElement("img", {
                      src: f.a,
                      className: "hamburgerMenu",
                      alt: "hamburger menu",
                    })
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "div",
                { id: "flyoutMenu" },
                o.a.createElement(
                  "div",
                  { className: "menuItems" },
                  o.a.createElement(
                    "div",
                    { className: "close", id: "rolloverMenuClose" },
                    o.a.createElement(
                      "a",
                      { onClick: i },
                      o.a.createElement("img", { src: B.a })
                    )
                  ),
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/about" }, "ABOUT")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      "ARTISTS",
                      o.a.createElement(
                        "ul",
                        null,
                        o.a.createElement(
                          "li",
                          null,
                          o.a.createElement(
                            a.Link,
                            { to: "/viewartists" },
                            "VIEW ALL ARTISTS"
                          )
                        ),
                        o.a.createElement(
                          "li",
                          null,
                          o.a.createElement(
                            a.Link,
                            { to: "/contribute" },
                            "CONTRIBUTE AS AN ARTIST"
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/news" }, "NEWS")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/events" }, "EVENTS")
                    ),
                    o.a.createElement(
                      "li",
                      { onClick: i },
                      o.a.createElement(a.Link, { to: "/contact" }, "CONTACT")
                    )
                  )
                )
              )
            )
          );
        };
      e.a = function () {
        var n,
          e = !1;
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "header",
            { className: "topPage desktop" },
            o.a.createElement(
              a.Link,
              { to: "/Home" },
              o.a.createElement("img", { src: d.a })
            ),
            o.a.createElement(
              "div",
              { className: "topRight" },
              o.a.createElement(
                "div",
                { className: "search" },
                o.a.createElement(
                  "button",
                  { className: "blueButton" },
                  "DONATE"
                )
              ),
              o.a.createElement(
                "div",
                { className: "topNav" },
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/About" }, "ABOUT")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      {
                        id: "artistsLink",
                        to: "viewartists",
                        onMouseOver: function (t) {
                          return (function (t, i) {
                            var o =
                                window.innerWidth > 1440
                                  ? Math.round((window.innerWidth - 1440) / 2)
                                  : 0,
                              a = t.target.getBoundingClientRect(),
                              r = document.getElementsByClassName(i)[0];
                            (r.style.left = Math.round(a.x) - o + "px"),
                              (r.style.top = Math.round(a.y + a.height) + "px"),
                              r.classList.add("showMenu"),
                              (e = !0),
                              (n = setTimeout(function () {
                                !0 === e && r.classList.remove("showMenu");
                              }, 1e3));
                          })(t, "artistsLink");
                        },
                      },
                      "ARTISTS"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/news" }, "NEWS")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/events" }, "EVENTS")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, { to: "/contact" }, "CONTACT")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              {
                className: "pulldownMenu artistsLink",
                onMouseLeave: function (n) {
                  return (
                    (t = "artistsLink"),
                    void (
                      !0 === e &&
                      ((e = !1),
                      document
                        .getElementsByClassName(t)[0]
                        .classList.remove("showMenu"))
                    )
                  );
                  var t;
                },
                onMouseOver: function () {
                  return clearTimeout(n);
                },
              },
              o.a.createElement(
                "ul",
                null,
                o.a.createElement(
                  "li",
                  null,
                  o.a.createElement(
                    a.Link,
                    { to: "/viewartists" },
                    "VIEW ALL ARTISTS"
                  )
                ),
                o.a.createElement(
                  "li",
                  null,
                  o.a.createElement(
                    a.Link,
                    { to: "/contribute" },
                    "CONTRIBUTE AS AN ARTIST"
                  )
                )
              )
            )
          ),
          o.a.createElement(C, null)
        );
      };
    },
    366: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        s = t.n(r),
        l = t(379),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(383)),
        d = t.n(c),
        p = t(384),
        u = t.n(p),
        f = t(385),
        m = t.n(f),
        B = t(386),
        C = t.n(B);
      e.a = function () {
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "footer",
            { className: "desktop" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "div",
                  { className: "multiColList" },
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Global Peace Media")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(
                        a.Link,
                        null,
                        "Farming and Sustainability"
                      )
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Free Education")
                    )
                  ),
                  o.a.createElement(
                    "ul",
                    null,
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "Free Music Progams")
                    ),
                    o.a.createElement(
                      "li",
                      null,
                      o.a.createElement(a.Link, null, "World Hunger")
                    )
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: "CTAs" },
                o.a.createElement(
                  "div",
                  { className: "newsLetter" },
                  o.a.createElement(
                    "label",
                    { htmlFor: "" },
                    "Sign up for our newsletter"
                  ),
                  o.a.createElement("input", {
                    type: "text",
                    placeholder: "Email",
                  }),
                  o.a.createElement(
                    "button",
                    { className: "blueHalfButton" },
                    "SUBSCRIBE"
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          ),
          o.a.createElement(
            "footer",
            { className: "tablet" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Global Peace Media")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      null,
                      "Farming and Sustainability"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Education")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Music Progams")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "World Hunger")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "bottom" },
              o.a.createElement(
                "div",
                { className: "newsLetter" },
                o.a.createElement(
                  "label",
                  { htmlFor: "footerEmail" },
                  "Sign up for our newsletter"
                ),
                o.a.createElement("input", {
                  id: "footerEmail",
                  type: "text",
                  placeholder: "Email",
                }),
                o.a.createElement(
                  "button",
                  { className: "blueHalfButton" },
                  "SUBSCRIBE"
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          ),
          o.a.createElement(
            "footer",
            { className: "mobile" },
            o.a.createElement(
              "div",
              { className: "top" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Company"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "About")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Contact Us")
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Music"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Artists")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Events")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "News")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "bottom" },
              o.a.createElement(
                "div",
                null,
                o.a.createElement("h3", null, "Resources"),
                o.a.createElement(
                  "ul",
                  null,
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Global Peace Media")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(
                      a.Link,
                      null,
                      "Farming and Sustainability"
                    )
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Education")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Drug Abuse Awareness")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "Free Music Progams")
                  ),
                  o.a.createElement(
                    "li",
                    null,
                    o.a.createElement(a.Link, null, "World Hunger")
                  )
                )
              )
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                "div",
                { className: "newsLetter" },
                o.a.createElement(
                  "label",
                  { htmlFor: "" },
                  "Sign up for our newsletter"
                ),
                o.a.createElement("input", {
                  type: "text",
                  placeholder: "Email",
                }),
                o.a.createElement(
                  "button",
                  { className: "blueHalfButton" },
                  "SUBSCRIBE"
                )
              )
            ),
            o.a.createElement(
              "div",
              { className: "socialMedia" },
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: d.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: u.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: m.a })
              ),
              o.a.createElement(
                a.Link,
                null,
                o.a.createElement("img", { src: C.a })
              )
            ),
            o.a.createElement(
              "div",
              { className: "copyright" },
              "© 2022 Global Peace Rhythms"
            )
          )
        );
      };
    },
    367: function (n, e, t) {
      n.exports = t.p + "img/fab535062748af9fe09ba06909e72e56.png";
    },
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
        return M;
      }),
        t.d(e, "b", function () {
          return W;
        });
      var i = t(1),
        o = t.n(i),
        a = t(106),
        r = t.n(a),
        s = t(617),
        l = t(105),
        A = t.n(l),
        c = t(387),
        d = { insert: "head", singleton: !1 },
        p = (A()(c.a, d), c.a.locals, t(391)),
        u = t.n(p),
        f = t(151),
        m = t(368),
        B = t.n(m),
        C = t(369),
        E = t.n(C),
        g = t(370),
        x = t.n(g),
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
      function v(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function w(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function I(n, e, t) {
        return (
          e && w(n.prototype, e),
          t && w(n, t),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
      }
      function _(n, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (n.prototype = Object.create(e && e.prototype, {
          constructor: { value: n, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          e && k(n, e);
      }
      function k(n, e) {
        return (k =
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
            i = L(n);
          if (e) {
            var o = L(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return z(this, t);
        };
      }
      function z(n, e) {
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
      function L(n) {
        return (L = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      var N = (function (n) {
          _(t, n);
          var e = j(t);
          function t(n) {
            return v(this, t), e.call(this, n);
          }
          return (
            I(t, [
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
        M = (function (n) {
          _(t, n);
          var e = j(t);
          function t() {
            return v(this, t), e.apply(this, arguments);
          }
          return (
            I(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.artist,
                    t = n.closeHandler;
                  return !0 === n.open
                    ? o.a.createElement(
                        N,
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
                              o.a.createElement("img", { src: u.a })
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
                                  src: ""
                                    .concat(
                                      "https://globalpeacerhythms.herokuapp.com"
                                    )
                                    .concat(
                                      e.image.data.attributes.formats.medium.url
                                    ),
                                }),
                                o.a.createElement(
                                  "div",
                                  { className: "socialMedia" },
                                  e.facebook &&
                                    null !== e.facebook &&
                                    o.a.createElement(
                                      f.Link,
                                      { to: e.facebook },
                                      o.a.createElement("img", { src: E.a })
                                    ),
                                  e.twitter &&
                                    null !== e.twitter &&
                                    o.a.createElement(
                                      f.Link,
                                      { to: e.twitter },
                                      o.a.createElement("img", { src: B.a })
                                    ),
                                  e.youtube &&
                                    null !== e.youtube &&
                                    o.a.createElement(
                                      f.Link,
                                      { to: e.youtube },
                                      o.a.createElement("img", { src: x.a })
                                    ),
                                  e.instagram &&
                                    null !== e.instagram &&
                                    o.a.createElement(
                                      f.Link,
                                      { to: e.instagram },
                                      o.a.createElement("img", { src: b.a })
                                    )
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "rightCol" },
                                o.a.createElement("h2", null, e.name),
                                o.a.createElement(s.a, {
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
        W = (function (n) {
          _(t, n);
          var e = j(t);
          function t() {
            return v(this, t), e.apply(this, arguments);
          }
          return (
            I(t, [
              {
                key: "render",
                value: function () {
                  var n = this.props,
                    e = n.spotlight,
                    t = n.closeHandler;
                  return !0 === n.open
                    ? o.a.createElement(
                        N,
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
                              o.a.createElement("img", { src: u.a })
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
                                      src: ""
                                        .concat(
                                          "https://globalpeacerhythms.herokuapp.com"
                                        )
                                        .concat(
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
                                o.a.createElement(s.a, {
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
    373: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(374),
        l = t(375),
        A = t(376),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    374: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .topPage.tablet {\n    display: none;\n  }\n  #flyoutMenu {\n    display: none;\n  }\n  .desktop.topPage {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n\n  .desktop.topPage img {\n    width: 200px;\n  }\n\n  .desktop.topPage .topRight {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n  }\n\n  .desktop.topPage .search {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .desktop.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n\n  .desktop.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n  }\n  .desktop.topPage .pulldownMenu {\n    display: none;\n    position: absolute;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    margin-left: -10px;\n    padding-top: 10px;\n  }\n  .desktop.topPage .pulldownMenu ul {\n    background-color: #011526;\n    margin: 0;\n    padding: 0;\n    opacity: 0.9;\n  }\n  .desktop.topPage .pulldownMenu ul li {\n    margin: 0;\n    padding: 10px 10px;\n    list-style: none;\n    cursor: pointer;\n  }\n  .desktop.topPage .pulldownMenu ul li a,\n  .desktop.topPage .pulldownMenu ul li a:visited,\n  .desktop.topPage .pulldownMenu ul li a:active,\n  .desktop.topPage .pulldownMenu ul li a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .desktop.topPage .pulldownMenu ul li:hover a,\n  .desktop.topPage .pulldownMenu ul li:hover a:visited,\n  .desktop.topPage .pulldownMenu ul li:hover a:active,\n  .desktop.topPage .pulldownMenu ul li:hover a:hover {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .desktop.topPage .pulldownMenu ul li:hover {\n    background-color: #fff;\n    color: #011526;\n  }\n  .desktop.topPage .pulldownMenu.showMenu {\n    display: block;\n  }\n  .topNav ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    margin: 15px 0 0 0;\n  }\n  .topNav ul li {\n    margin-left: 20px;\n  }\n\n  .topNav a {\n    color: #fff;\n    text-decoration: none;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;IACnB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;EACpB;EACA;IACE,aAAa;IACb,kBAAkB;IAClB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,YAAY;EACd;EACA;IACE,SAAS;IACT,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;EACA;;;;IAIE,WAAW;IACX,qBAAqB;EACvB;EACA;;;;IAIE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,sBAAsB;IACtB,cAAc;EAChB;EACA;IACE,cAAc;EAChB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,qBAAqB;IACrB,+BAA+B;IAC/B,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .topPage.tablet {\n    display: none;\n  }\n  #flyoutMenu {\n    display: none;\n  }\n  .desktop.topPage {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n\n  .desktop.topPage img {\n    width: 200px;\n  }\n\n  .desktop.topPage .topRight {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    justify-content: center;\n  }\n\n  .desktop.topPage .search {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .desktop.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n\n  .desktop.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n  }\n  .desktop.topPage .pulldownMenu {\n    display: none;\n    position: absolute;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    margin-left: -10px;\n    padding-top: 10px;\n  }\n  .desktop.topPage .pulldownMenu ul {\n    background-color: #011526;\n    margin: 0;\n    padding: 0;\n    opacity: 0.9;\n  }\n  .desktop.topPage .pulldownMenu ul li {\n    margin: 0;\n    padding: 10px 10px;\n    list-style: none;\n    cursor: pointer;\n  }\n  .desktop.topPage .pulldownMenu ul li a,\n  .desktop.topPage .pulldownMenu ul li a:visited,\n  .desktop.topPage .pulldownMenu ul li a:active,\n  .desktop.topPage .pulldownMenu ul li a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .desktop.topPage .pulldownMenu ul li:hover a,\n  .desktop.topPage .pulldownMenu ul li:hover a:visited,\n  .desktop.topPage .pulldownMenu ul li:hover a:active,\n  .desktop.topPage .pulldownMenu ul li:hover a:hover {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .desktop.topPage .pulldownMenu ul li:hover {\n    background-color: #fff;\n    color: #011526;\n  }\n  .desktop.topPage .pulldownMenu.showMenu {\n    display: block;\n  }\n  .topNav ul {\n    display: flex;\n    flex-direction: row;\n    list-style: none;\n    margin: 15px 0 0 0;\n  }\n  .topNav ul li {\n    margin-left: 20px;\n  }\n\n  .topNav a {\n    color: #fff;\n    text-decoration: none;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    375: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .topPage.desktop {\n    display: none;\n  }\n  .topNav ul {\n    display: none;\n  }\n\n  .tablet.topPage {\n    display: flex;\n    flex-direction: column;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    align-items: flex-start;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n  .tablet.topPage .topRow {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tablet.topPage .logo {\n    width: 150px;\n  }\n  .tablet.topPage .topRow .topRight {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .tablet.topPage .topRow .topRight button {\n    margin-right: 20px;\n  }\n  .tablet.topPage .topRow .topRight .hamburgerMenu {\n    width: 20px;\n  }\n  .tablet.topPage .bottomRow {\n    width: 100%;\n  }\n  .tablet.topPage .search {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .tablet.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n\n  .tablet.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n    width: 100%;\n  }\n  #flyoutMenu {\n    position: absolute;\n    display: flex;\n    top: 0;\n    right: -100%;\n    width: 90%;\n    height: 100%;\n    background-color: #011526;\n    z-index: 3000;\n    box-sizing: border-box;\n  }\n  #flyoutMenu ul {\n    padding: 0;\n    margin: 10px 0 0 10px;\n  }\n  #flyoutMenu ul li {\n    list-style: none;\n    margin-top: 20px;\n  }\n  #flyoutMenu ul li {\n    cursor: pointer;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n  }\n\n  #flyoutMenu h2 {\n    margin: 0 0 0 20px;\n    padding-top: 20px;\n  }\n  #flyoutMenu ul {\n    margin: 0 0 0 20px;\n    padding-top: 10px;\n  }\n  #flyoutMenu h2 {\n    font-family: montserrat-SemiBold;\n    font-size: 18px;\n  }\n  #flyoutMenu .menuItems {\n    position: relative;\n    width: 90%;\n  }\n  #flyoutMenu .menuItems a,\n  #flyoutMenu .menuItems a:visited,\n  #flyoutMenu .menuItems a:active,\n  #flyoutMenu .menuItems a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .overlay {\n    position: absolute;\n    background: rgba(1, 21, 38, 0.8);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n  }\n  #flyoutMenu .close {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 20px 0 20px 0;\n    z-index: 4000;\n    box-sizing: border-box;\n    opacity: 0;\n  }\n  #flyoutMenu .close img {\n    width: 60%;\n  }\n  .fixed {\n    position: fixed;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;IACtB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,QAAQ;IACR,YAAY;EACd;EACA;IACE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,YAAY;EACd;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;EAChC;EACA;IACE,kBAAkB;EACpB;EACA;IACE,WAAW;EACb;EACA;IACE,WAAW;EACb;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,WAAW;EACb;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,aAAa;IACb,MAAM;IACN,YAAY;IACZ,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,aAAa;IACb,sBAAsB;EACxB;EACA;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,WAAW;IACX,+BAA+B;EACjC;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,gCAAgC;IAChC,eAAe;EACjB;EACA;IACE,kBAAkB;IAClB,UAAU;EACZ;EACA;;;;IAIE,WAAW;IACX,qBAAqB;EACvB;EACA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,aAAa;EACf;EACA;IACE,aAAa;IACb,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .topPage.desktop {\n    display: none;\n  }\n  .topNav ul {\n    display: none;\n  }\n\n  .tablet.topPage {\n    display: flex;\n    flex-direction: column;\n    background-color: #011526;\n    color: #fff;\n    padding: 10px 20px;\n    box-sizing: border-box;\n    align-items: flex-start;\n    position: sticky;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n  }\n  .tablet.topPage .topRow {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tablet.topPage .logo {\n    width: 150px;\n  }\n  .tablet.topPage .topRow .topRight {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .tablet.topPage .topRow .topRight button {\n    margin-right: 20px;\n  }\n  .tablet.topPage .topRow .topRight .hamburgerMenu {\n    width: 20px;\n  }\n  .tablet.topPage .bottomRow {\n    width: 100%;\n  }\n  .tablet.topPage .search {\n    display: flex;\n    flex-direction: column;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .tablet.topPage .search input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n\n  .tablet.topPage .search input {\n    border-radius: 30px;\n    margin-right: 20px;\n    width: 100%;\n  }\n  #flyoutMenu {\n    position: absolute;\n    display: flex;\n    top: 0;\n    right: -100%;\n    width: 90%;\n    height: 100%;\n    background-color: #011526;\n    z-index: 3000;\n    box-sizing: border-box;\n  }\n  #flyoutMenu ul {\n    padding: 0;\n    margin: 10px 0 0 10px;\n  }\n  #flyoutMenu ul li {\n    list-style: none;\n    margin-top: 20px;\n  }\n  #flyoutMenu ul li {\n    cursor: pointer;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n  }\n\n  #flyoutMenu h2 {\n    margin: 0 0 0 20px;\n    padding-top: 20px;\n  }\n  #flyoutMenu ul {\n    margin: 0 0 0 20px;\n    padding-top: 10px;\n  }\n  #flyoutMenu h2 {\n    font-family: montserrat-SemiBold;\n    font-size: 18px;\n  }\n  #flyoutMenu .menuItems {\n    position: relative;\n    width: 90%;\n  }\n  #flyoutMenu .menuItems a,\n  #flyoutMenu .menuItems a:visited,\n  #flyoutMenu .menuItems a:active,\n  #flyoutMenu .menuItems a:hover {\n    color: #fff;\n    text-decoration: none;\n  }\n  .overlay {\n    position: absolute;\n    background: rgba(1, 21, 38, 0.8);\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 2000;\n  }\n  #flyoutMenu .close {\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 20px 0 20px 0;\n    z-index: 4000;\n    box-sizing: border-box;\n    opacity: 0;\n  }\n  #flyoutMenu .close img {\n    width: 60%;\n  }\n  .fixed {\n    position: fixed;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    376: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .topNav ul {\n    display: none;\n  }\n\n  #flyoutMenu .close img {\n    width: 50%;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/TopPage/css/600Max.css"],
          names: [],
          mappings: "AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .topNav ul {\n    display: none;\n  }\n\n  #flyoutMenu .close img {\n    width: 50%;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    377: function (n, e, t) {
      n.exports = t.p + "img/73312ec0bc36b0d13d6564556dd48b4c.png";
    },
    378: function (n, e, t) {
      n.exports = t.p + "img/c3108da5bfa82743d06de316baf22dfc.png";
    },
    379: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(380),
        l = t(381),
        A = t(382),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    380: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.tablet {\n    display: none;\n  }\n  footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n  footer .top div:nth-child(2) {\n    margin-left: 40px;\n  }\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 30px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,qBAAqB;EACvB;EACA;IACE,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;;IAGE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.tablet {\n    display: none;\n  }\n  footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n  footer .top div:nth-child(2) {\n    margin-left: 40px;\n  }\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 30px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    381: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) and (min-width: 600px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,wBAAwB;IACxB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;;IAGE,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) and (min-width: 600px) {\n  footer.desktop {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 40px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n  footer .bottom {\n    display: flex;\n    justify-content: stretch;\n    align-items: flex-end;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n  footer .newsLetter {\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 12px;\n    border: 1px solid #eee;\n    padding: 5px;\n  }\n  footer .top,\n  footer .bottom,\n  footer .newsLetter {\n    margin-top: 30px;\n  }\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    382: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  footer.tablet {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 20px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 8px 20px;\n    font-size: 14px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .blueButton {\n    border-radius: 30px;\n  }\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Footer/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;EACf;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,SAAS;IACT,UAAU;EACZ;;EAEA;IACE,mBAAmB;EACrB;;EAEA;;;IAGE,+BAA+B;IAC/B,qBAAqB;IACrB,WAAW;EACb;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;EACvB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;EACvB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,eAAe;EACjB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,+BAA+B;IAC/B,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,4BAA4B;EAC9B;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  footer.tablet {\n    display: none;\n  }\n  footer.mobile {\n    display: none;\n  }\n  footer {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    width: 100%;\n    background-color: #011526;\n    color: #fff;\n    padding: 30px 20px;\n    box-sizing: border-box;\n  }\n\n  footer .top {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n  }\n\n  footer h3 {\n    margin: 0 0 20px 0;\n    font-size: 16px;\n  }\n\n  footer ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  footer ul li {\n    margin-bottom: 10px;\n  }\n\n  footer ul li a,\n  footer ul li a:visited,\n  footer ul li a:active {\n    font-family: "Lato", sans-serif;\n    text-decoration: none;\n    color: #fff;\n  }\n\n  footer ul li a:hover {\n    text-decoration: underline;\n  }\n\n  footer .multiColList {\n    display: flex;\n  }\n\n  footer .multiColList ul {\n    margin-right: 40px;\n  }\n\n  .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n\n  footer .CTAs {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n  }\n\n  footer .socialMedia {\n    display: flex;\n    justify-content: center;\n    margin-top: 60px;\n    text-decoration: none;\n  }\n\n  footer .socialMedia img {\n    width: 50px;\n    padding: 0 10px;\n  }\n\n  footer .copyright {\n    margin-top: 20px;\n    display: flex;\n    justify-content: center;\n    font-size: 12px;\n  }\n\n  footer .newsLetter label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 14px;\n  }\n  footer .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    padding: 8px 20px;\n    font-size: 14px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n  .blueButton {\n    border-radius: 30px;\n  }\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    383: function (n, e, t) {
      n.exports = t.p + "img/88959800bb9253028d6ba5a62c21dea0.png";
    },
    384: function (n, e, t) {
      n.exports = t.p + "img/5ab20b563082f36527e23032115cf6b7.png";
    },
    385: function (n, e, t) {
      n.exports = t.p + "img/14257a9af5a7c3a35a8d212fd46e5ae2.png";
    },
    386: function (n, e, t) {
      n.exports = t.p + "img/87baee5488abe6d0af6c427bb0cf26df.png";
    },
    387: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(388),
        l = t(389),
        A = t(390),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
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
        s = t(535),
        l = t(536),
        A = t(537),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
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
    550: function (n, e, t) {
      "use strict";
      var i = t(1),
        o = t.n(i),
        a = t(151),
        r = t(105),
        s = t.n(r),
        l = t(534),
        A = { insert: "head", singleton: !1 },
        c = (s()(l.a, A), l.a.locals, t(372)),
        d = t(368),
        p = t.n(d),
        u = t(369),
        f = t.n(u),
        m = t(370),
        B = t.n(m),
        C = t(371),
        E = t.n(C);
      function g(n, e) {
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
              s = !1;
            try {
              for (
                t = t.call(n);
                !(r = (i = t.next()).done) &&
                (a.push(i.value), !e || a.length !== e);
                r = !0
              );
            } catch (l) {
              (s = !0), (o = l);
            } finally {
              try {
                r || null == t.return || t.return();
              } finally {
                if (s) throw o;
              }
            }
            return a;
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return x(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return x(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function x(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
        return i;
      }
      e.a = function (n) {
        var e = n.artist,
          t = g(Object(i.useState)(!1), 2),
          r = t[0],
          s = t[1],
          l = e.description.substr(0, 100) + " ...";
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            "div",
            { className: "artist" },
            o.a.createElement("img", {
              src: ""
                .concat("https://globalpeacerhythms.herokuapp.com")
                .concat(e.image.data.attributes.formats.thumbnail.url),
            }),
            o.a.createElement(
              "div",
              { className: "description" },
              o.a.createElement("h3", { className: "name" }, e.name),
              o.a.createElement("p", { className: "teaser" }, l),
              o.a.createElement(
                "button",
                {
                  className: "blueButton",
                  onClick: function () {
                    return s(!0);
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
                  o.a.createElement("img", { src: f.a })
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
                  o.a.createElement("img", { src: B.a })
                ),
              e.instagram &&
                null !== e.instagram &&
                o.a.createElement(
                  a.Link,
                  { to: e.instagram },
                  o.a.createElement("img", { src: E.a })
                )
            )
          ),
          o.a.createElement(c.a, {
            open: r,
            artist: e,
            closeHandler: function () {
              s(!1);
            },
          })
        );
      };
    },
    553: function (n, e, t) {
      var i = {
        "./af": 395,
        "./af.js": 395,
        "./ar": 396,
        "./ar-dz": 397,
        "./ar-dz.js": 397,
        "./ar-kw": 398,
        "./ar-kw.js": 398,
        "./ar-ly": 399,
        "./ar-ly.js": 399,
        "./ar-ma": 400,
        "./ar-ma.js": 400,
        "./ar-sa": 401,
        "./ar-sa.js": 401,
        "./ar-tn": 402,
        "./ar-tn.js": 402,
        "./ar.js": 396,
        "./az": 403,
        "./az.js": 403,
        "./be": 404,
        "./be.js": 404,
        "./bg": 405,
        "./bg.js": 405,
        "./bm": 406,
        "./bm.js": 406,
        "./bn": 407,
        "./bn-bd": 408,
        "./bn-bd.js": 408,
        "./bn.js": 407,
        "./bo": 409,
        "./bo.js": 409,
        "./br": 410,
        "./br.js": 410,
        "./bs": 411,
        "./bs.js": 411,
        "./ca": 412,
        "./ca.js": 412,
        "./cs": 413,
        "./cs.js": 413,
        "./cv": 414,
        "./cv.js": 414,
        "./cy": 415,
        "./cy.js": 415,
        "./da": 416,
        "./da.js": 416,
        "./de": 417,
        "./de-at": 418,
        "./de-at.js": 418,
        "./de-ch": 419,
        "./de-ch.js": 419,
        "./de.js": 417,
        "./dv": 420,
        "./dv.js": 420,
        "./el": 421,
        "./el.js": 421,
        "./en-au": 422,
        "./en-au.js": 422,
        "./en-ca": 423,
        "./en-ca.js": 423,
        "./en-gb": 424,
        "./en-gb.js": 424,
        "./en-ie": 425,
        "./en-ie.js": 425,
        "./en-il": 426,
        "./en-il.js": 426,
        "./en-in": 427,
        "./en-in.js": 427,
        "./en-nz": 428,
        "./en-nz.js": 428,
        "./en-sg": 429,
        "./en-sg.js": 429,
        "./eo": 430,
        "./eo.js": 430,
        "./es": 431,
        "./es-do": 432,
        "./es-do.js": 432,
        "./es-mx": 433,
        "./es-mx.js": 433,
        "./es-us": 434,
        "./es-us.js": 434,
        "./es.js": 431,
        "./et": 435,
        "./et.js": 435,
        "./eu": 436,
        "./eu.js": 436,
        "./fa": 437,
        "./fa.js": 437,
        "./fi": 438,
        "./fi.js": 438,
        "./fil": 439,
        "./fil.js": 439,
        "./fo": 440,
        "./fo.js": 440,
        "./fr": 441,
        "./fr-ca": 442,
        "./fr-ca.js": 442,
        "./fr-ch": 443,
        "./fr-ch.js": 443,
        "./fr.js": 441,
        "./fy": 444,
        "./fy.js": 444,
        "./ga": 445,
        "./ga.js": 445,
        "./gd": 446,
        "./gd.js": 446,
        "./gl": 447,
        "./gl.js": 447,
        "./gom-deva": 448,
        "./gom-deva.js": 448,
        "./gom-latn": 449,
        "./gom-latn.js": 449,
        "./gu": 450,
        "./gu.js": 450,
        "./he": 451,
        "./he.js": 451,
        "./hi": 452,
        "./hi.js": 452,
        "./hr": 453,
        "./hr.js": 453,
        "./hu": 454,
        "./hu.js": 454,
        "./hy-am": 455,
        "./hy-am.js": 455,
        "./id": 456,
        "./id.js": 456,
        "./is": 457,
        "./is.js": 457,
        "./it": 458,
        "./it-ch": 459,
        "./it-ch.js": 459,
        "./it.js": 458,
        "./ja": 460,
        "./ja.js": 460,
        "./jv": 461,
        "./jv.js": 461,
        "./ka": 462,
        "./ka.js": 462,
        "./kk": 463,
        "./kk.js": 463,
        "./km": 464,
        "./km.js": 464,
        "./kn": 465,
        "./kn.js": 465,
        "./ko": 466,
        "./ko.js": 466,
        "./ku": 467,
        "./ku.js": 467,
        "./ky": 468,
        "./ky.js": 468,
        "./lb": 469,
        "./lb.js": 469,
        "./lo": 470,
        "./lo.js": 470,
        "./lt": 471,
        "./lt.js": 471,
        "./lv": 472,
        "./lv.js": 472,
        "./me": 473,
        "./me.js": 473,
        "./mi": 474,
        "./mi.js": 474,
        "./mk": 475,
        "./mk.js": 475,
        "./ml": 476,
        "./ml.js": 476,
        "./mn": 477,
        "./mn.js": 477,
        "./mr": 478,
        "./mr.js": 478,
        "./ms": 479,
        "./ms-my": 480,
        "./ms-my.js": 480,
        "./ms.js": 479,
        "./mt": 481,
        "./mt.js": 481,
        "./my": 482,
        "./my.js": 482,
        "./nb": 483,
        "./nb.js": 483,
        "./ne": 484,
        "./ne.js": 484,
        "./nl": 485,
        "./nl-be": 486,
        "./nl-be.js": 486,
        "./nl.js": 485,
        "./nn": 487,
        "./nn.js": 487,
        "./oc-lnc": 488,
        "./oc-lnc.js": 488,
        "./pa-in": 489,
        "./pa-in.js": 489,
        "./pl": 490,
        "./pl.js": 490,
        "./pt": 491,
        "./pt-br": 492,
        "./pt-br.js": 492,
        "./pt.js": 491,
        "./ro": 493,
        "./ro.js": 493,
        "./ru": 494,
        "./ru.js": 494,
        "./sd": 495,
        "./sd.js": 495,
        "./se": 496,
        "./se.js": 496,
        "./si": 497,
        "./si.js": 497,
        "./sk": 498,
        "./sk.js": 498,
        "./sl": 499,
        "./sl.js": 499,
        "./sq": 500,
        "./sq.js": 500,
        "./sr": 501,
        "./sr-cyrl": 502,
        "./sr-cyrl.js": 502,
        "./sr.js": 501,
        "./ss": 503,
        "./ss.js": 503,
        "./sv": 504,
        "./sv.js": 504,
        "./sw": 505,
        "./sw.js": 505,
        "./ta": 506,
        "./ta.js": 506,
        "./te": 507,
        "./te.js": 507,
        "./tet": 508,
        "./tet.js": 508,
        "./tg": 509,
        "./tg.js": 509,
        "./th": 510,
        "./th.js": 510,
        "./tk": 511,
        "./tk.js": 511,
        "./tl-ph": 512,
        "./tl-ph.js": 512,
        "./tlh": 513,
        "./tlh.js": 513,
        "./tr": 514,
        "./tr.js": 514,
        "./tzl": 515,
        "./tzl.js": 515,
        "./tzm": 516,
        "./tzm-latn": 517,
        "./tzm-latn.js": 517,
        "./tzm.js": 516,
        "./ug-cn": 518,
        "./ug-cn.js": 518,
        "./uk": 519,
        "./uk.js": 519,
        "./ur": 520,
        "./ur.js": 520,
        "./uz": 521,
        "./uz-latn": 522,
        "./uz-latn.js": 522,
        "./uz.js": 521,
        "./vi": 523,
        "./vi.js": 523,
        "./x-pseudo": 524,
        "./x-pseudo.js": 524,
        "./yo": 525,
        "./yo.js": 525,
        "./zh-cn": 526,
        "./zh-cn.js": 526,
        "./zh-hk": 527,
        "./zh-hk.js": 527,
        "./zh-mo": 528,
        "./zh-mo.js": 528,
        "./zh-tw": 529,
        "./zh-tw.js": 529,
      };
      function o(n) {
        var e = a(n);
        return t(e);
      }
      function a(n) {
        if (!t.o(i, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return i[n];
      }
      (o.keys = function () {
        return Object.keys(i);
      }),
        (o.resolve = a),
        (n.exports = o),
        (o.id = 553);
    },
    566: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(567),
        l = t(568),
        A = t(569),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    567: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (min-width: 901px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .sideBar {\n    max-width: 400px;\n    min-width: 250px;\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 21px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n\n  .sideBar .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,WAAW;EACb;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,cAAc;IACd,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;IACzB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,aAAa;EACf;;EAEA;IACE,0BAA0B;IAC1B,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,+BAA+B;IAC/B,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (min-width: 901px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .sideBar {\n    max-width: 400px;\n    min-width: 250px;\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 21px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n\n  .sideBar .newsLetter input {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    568: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: lato;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n\n  .sideBar {\n    max-width: 100%;\n    min-width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 50px;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n  .sideBar .newsLetter input {\n    font-family: lato;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,sBAAsB;IACtB,WAAW;EACb;;EAEA;;IAEE,yBAAyB;IACzB,WAAW;IACX,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,eAAe;IACf,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;;;IAGE,cAAc;IACd,qBAAqB;EACvB;;EAEA;IACE,cAAc;IACd,0BAA0B;EAC5B;;EAEA;IACE,yBAAyB;IACzB,WAAW;IACX,+BAA+B;IAC/B,eAAe;IACf,aAAa;EACf;;EAEA;IACE,0BAA0B;IAC1B,6BAA6B;IAC7B,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;IACjB,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,iBAAiB;IACjB,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,mBAAmB,EAAE,gDAAgD;EACvE;;EAEA,iFAAiF;EACjF;IACE,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,SAAS;IACT,QAAQ;IACR,WAAW;IACX,YAAY;EACd;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .sideBar {\n    height: 100%;\n  }\n\n  .sideBar .newsLetter {\n    margin-bottom: 50px;\n  }\n\n  .sideBar .newsLetter input {\n    height: auto;\n    box-sizing: border-box;\n    width: 100%;\n  }\n\n  .blueButton,\n  .blueHalfButton {\n    background-color: #047ac3;\n    color: #fff;\n    border: 0;\n    font-family: lato;\n    font-weight: bold;\n    padding: 5px 10px;\n    font-size: 12px;\n    border: 1px solid #fff;\n    box-sizing: border-box;\n    text-align: center;\n  }\n\n  .blueButton {\n    border-radius: 30px;\n  }\n\n  .blueHalfButton {\n    border-radius: 0 30px 30px 0;\n  }\n\n  .sideBar .blueButton {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    margin-left: auto;\n  }\n\n  .sideBar {\n    max-width: 100%;\n    min-width: 100%;\n    box-sizing: border-box;\n    margin-bottom: 50px;\n  }\n\n  .sideBar .navOption {\n    border: 1px solid #011526;\n    background-color: #fff;\n    text-align: center;\n    font-family: "Lato", sans-serif;\n    font-size: 18px;\n    color: #011526;\n    padding: 20px 10px;\n    margin-bottom: 10px;\n  }\n\n  .sideBar .navOption a,\n  .sideBar .navOption a:visited,\n  .sideBar .navOption a:active {\n    color: #011526;\n    text-decoration: none;\n  }\n\n  .sideBar .navOption a:hover {\n    color: #011526;\n    text-decoration: underline;\n  }\n\n  .sideBar .content {\n    background-color: #1f61a6;\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    padding: 20px;\n  }\n\n  .sideBar .content h2 {\n    border-top: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    padding: 10px 0;\n    text-align: center;\n    font-weight: bold;\n    font-size: 18px;\n  }\n\n  .sideBar .content img {\n    width: 100%;\n    border: 1px solid #eee;\n  }\n\n  .sideBar .title {\n    font-weight: bold;\n    font-size: 18px;\n    margin-top: 10px;\n  }\n  .sideBar .newsLetter input {\n    font-family: lato;\n    font-size: 14px;\n    border: 1px solid #eee;\n    padding: 8px;\n  }\n  .container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */\n  }\n\n  /* Then style the iframe to fit in the container div with full height and width */\n  .responsive-iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    569: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/Sidebar/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 900px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    571: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(572),
        l = t(573),
        A = t(574),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    572: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.eventsNews {\n  background-color: #fff;\n}\n.eventsNewsCols {\n  padding: 0 20px;\n}\n\n.eventsNewsCols {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 80px;\n}\n.eventsNewsCols h2 {\n  margin: 0 0 10px 0;\n}\n.eventsNewsCols h2 a:visited,\n.eventsNewsCols h2 a:active {\n  text-decoration: none;\n  color: #011526;\n}\n.eventsNewsCols h2 a:hover {\n  text-decoration: underline;\n}\n.eventsCol.middleCol {\n  padding: 0 30px;\n}\n.eventsCol h2 {\n  font-size: 28px;\n}\n.eventNewsCol .learnMore,\n.recentEventCol .learnMore {\n  margin-top: 10px;\n}\n.eventNewsCol {\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  height: 120px;\n  border-bottom: 1px solid #ccc;\n}\n.eventNewsCol:nth-last-child(1) {\n  border-bottom: none;\n}\n.eventNewsCol .title,\n.eventNewsCol .date,\n.recentEventCol .date {\n  font-weight: bold;\n}\n.eventNewsCol .title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .recentEventThumb img {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.eventNewsCol .teaser,\n.recentEventCol .teaser {\n  margin-top: 5px;\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/styles.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,sBAAsB;AACxB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,+BAA+B;EAC/B,eAAe;EACf,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;;EAEE,gBAAgB;AAClB;AACA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,mBAAmB;AACrB;AACA;;;EAGE,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,sBAAsB;AACxB;AACA;;EAEE,eAAe;AACjB",
          sourcesContent: [
            '.eventsNews {\n  background-color: #fff;\n}\n.eventsNewsCols {\n  padding: 0 20px;\n}\n\n.eventsNewsCols {\n  font-family: "Lato", sans-serif;\n  font-size: 14px;\n  color: #242124;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 80px;\n}\n.eventsNewsCols h2 {\n  margin: 0 0 10px 0;\n}\n.eventsNewsCols h2 a:visited,\n.eventsNewsCols h2 a:active {\n  text-decoration: none;\n  color: #011526;\n}\n.eventsNewsCols h2 a:hover {\n  text-decoration: underline;\n}\n.eventsCol.middleCol {\n  padding: 0 30px;\n}\n.eventsCol h2 {\n  font-size: 28px;\n}\n.eventNewsCol .learnMore,\n.recentEventCol .learnMore {\n  margin-top: 10px;\n}\n.eventNewsCol {\n  padding-bottom: 20px;\n  margin-bottom: 30px;\n  height: 120px;\n  border-bottom: 1px solid #ccc;\n}\n.eventNewsCol:nth-last-child(1) {\n  border-bottom: none;\n}\n.eventNewsCol .title,\n.eventNewsCol .date,\n.recentEventCol .date {\n  font-weight: bold;\n}\n.eventNewsCol .title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.eventsCol.recentEventCol .recentEventThumb img {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n.eventNewsCol .teaser,\n.recentEventCol .teaser {\n  margin-top: 5px;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    573: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .eventsNews {\n    background-color: #fff;\n  }\n  .eventsNewsCols {\n    padding: 0 20px;\n  }\n  .eventsNewsCols {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 80px;\n  }\n\n  .eventsNewsCols h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .eventsNewsCols h2 a:visited,\n  .eventsNewsCols h2 a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .eventsNewsCols h2 a:hover {\n    text-decoration: underline;\n  }\n\n  .eventsCol {\n    padding: 0;\n  }\n\n  .eventNewsCol .learnMore,\n  .recentEventCol .learnMore {\n    margin-top: 10px;\n  }\n\n  .recentEventCol {\n    margin-bottom: 50px;\n  }\n  .eventNewsCol {\n    margin-bottom: 30px;\n  }\n\n  .eventNewsCol .title,\n  .eventNewsCol .date {\n    font-weight: bold;\n  }\n\n  .eventNewsCol .title {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .eventNewsCol.recentEventCol .title {\n    font-size: 21px;\n  }\n\n  .eventNewsCol.recentEventCol .recentEventThumb img {\n    width: 100%;\n  }\n\n  .eventNewsCol .teaser {\n    margin-top: 5px;\n  }\n  .eventsCol.middleCol {\n    padding: 0;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/900Max.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,eAAe;EACjB;EACA;IACE,+BAA+B;IAC/B,eAAe;IACf,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,oBAAoB;EACtB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;;IAEE,qBAAqB;IACrB,cAAc;EAChB;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,UAAU;EACZ;;EAEA;;IAEE,gBAAgB;EAClB;;EAEA;IACE,mBAAmB;EACrB;EACA;IACE,mBAAmB;EACrB;;EAEA;;IAEE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;EACjB;EACA;IACE,UAAU;EACZ;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .eventsNews {\n    background-color: #fff;\n  }\n  .eventsNewsCols {\n    padding: 0 20px;\n  }\n  .eventsNewsCols {\n    font-family: "Lato", sans-serif;\n    font-size: 14px;\n    color: #242124;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding-bottom: 80px;\n  }\n\n  .eventsNewsCols h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .eventsNewsCols h2 a:visited,\n  .eventsNewsCols h2 a:active {\n    text-decoration: none;\n    color: #011526;\n  }\n\n  .eventsNewsCols h2 a:hover {\n    text-decoration: underline;\n  }\n\n  .eventsCol {\n    padding: 0;\n  }\n\n  .eventNewsCol .learnMore,\n  .recentEventCol .learnMore {\n    margin-top: 10px;\n  }\n\n  .recentEventCol {\n    margin-bottom: 50px;\n  }\n  .eventNewsCol {\n    margin-bottom: 30px;\n  }\n\n  .eventNewsCol .title,\n  .eventNewsCol .date {\n    font-weight: bold;\n  }\n\n  .eventNewsCol .title {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  .eventNewsCol.recentEventCol .title {\n    font-size: 21px;\n  }\n\n  .eventNewsCol.recentEventCol .recentEventThumb img {\n    width: 100%;\n  }\n\n  .eventNewsCol .teaser {\n    margin-top: 5px;\n  }\n  .eventsCol.middleCol {\n    padding: 0;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    574: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .eventsCol h2 {\n    font-size: 21px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/HomeEventsAndNews/css/600Max.css",
          ],
          names: [],
          mappings: "AAAA;EACE;IACE,eAAe;EACjB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .eventsCol h2 {\n    font-size: 21px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    582: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(583),
        l = t(584),
        A = t(585),
        c = t(586),
        d = r()(o.a);
      d.i(s.a),
        d.i(l.a),
        d.i(A.a),
        d.i(c.a),
        d.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = d);
    },
    583: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (min-width: 901px) {\n  .tablet.artistTiles {\n    display: none;\n  }\n\n  .desktop.artistTiles {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;EAC7B;AACF",
          sourcesContent: [
            "@media only screen and (min-width: 901px) {\n  .tablet.artistTiles {\n    display: none;\n  }\n\n  .desktop.artistTiles {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    584: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n  .desktop.artistTiles {\n    display: none;\n  }\n  .tablet.artistTiles {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-start;\n    margin-bottom: 50px;\n  }\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;EACf;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;EACrB;AACF",
          sourcesContent: [
            "@media only screen and (max-width: 900px) {\n  .desktop.artistTiles {\n    display: none;\n  }\n  .tablet.artistTiles {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: flex-start;\n    margin-bottom: 50px;\n  }\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    585: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        "@media only screen and (max-width: 900px) {\n}\n",
        "",
        {
          version: 3,
          sources: ["webpack://./src/Components/ArtistTiles/css/600Max.css"],
          names: [],
          mappings: "AAAA;AACA",
          sourcesContent: ["@media only screen and (max-width: 900px) {\n}\n"],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    586: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        ".splide__container {\n  box-sizing: border-box;\n  position: relative;\n}\n.splide__list {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform-style: preserve-3d;\n}\n.splide.is-initialized:not(.is-active) .splide__list {\n  display: block;\n}\n.splide__pagination {\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 0;\n  pointer-events: none;\n}\n.splide__pagination li {\n  display: inline-block;\n  line-height: 1;\n  list-style-type: none;\n  margin: 0;\n  pointer-events: auto;\n}\n.splide__progress__bar {\n  width: 0;\n}\n.splide {\n  outline: none;\n  position: relative;\n  visibility: hidden;\n}\n.splide.is-initialized,\n.splide.is-rendered {\n  visibility: visible;\n}\n.splide__slide {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  box-sizing: border-box;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  list-style-type: none !important;\n  margin: 0;\n  outline: none;\n  position: relative;\n}\n.splide__slide img {\n  vertical-align: bottom;\n}\n.splide__slider {\n  position: relative;\n}\n.splide__spinner {\n  animation: splide-loading 1s linear infinite;\n  border: 2px solid #999;\n  border-left-color: transparent;\n  border-radius: 50%;\n  bottom: 0;\n  contain: strict;\n  display: inline-block;\n  height: 20px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n}\n.splide__track {\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n}\n@keyframes splide-loading {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n.splide--draggable > .splide__slider > .splide__track,\n.splide--draggable > .splide__track {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.splide--fade > .splide__slider > .splide__track > .splide__list,\n.splide--fade > .splide__track > .splide__list {\n  display: block;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--fade > .splide__track > .splide__list > .splide__slide {\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--fade > .splide__track > .splide__list > .splide__slide.is-active {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n.splide--rtl {\n  direction: rtl;\n}\n.splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,\n.splide--ttb.is-active > .splide__track > .splide__list {\n  display: block;\n}\n.splide__arrow {\n  -ms-flex-align: center;\n  align-items: center;\n  background: #ccc;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2em;\n  -ms-flex-pack: center;\n  justify-content: center;\n  opacity: 0.7;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 2em;\n  z-index: 1;\n}\n.splide__arrow svg {\n  fill: #000;\n  height: 1.2em;\n  width: 1.2em;\n}\n.splide__arrow:hover {\n  opacity: 0.9;\n}\n.splide__arrow:focus {\n  outline: none;\n}\n.splide__arrow--prev {\n  left: 1em;\n}\n.splide__arrow--prev svg {\n  transform: scaleX(-1);\n}\n.splide__arrow--next {\n  right: 1em;\n}\n.splide__pagination {\n  bottom: -1em;\n  left: 0;\n  padding: 0 1em;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n.splide__pagination__page {\n  background: #011526;\n  border: 0;\n  border-radius: 50%;\n  display: inline-block;\n  height: 8px;\n  margin: 3px;\n  opacity: 0.7;\n  padding: 0;\n  transition: transform 0.2s linear;\n  width: 8px;\n}\n.splide__pagination__page.is-active {\n  background: #ccc;\n  transform: scale(1.4);\n}\n.splide__pagination__page:hover {\n  cursor: pointer;\n  opacity: 0.9;\n}\n.splide__pagination__page:focus {\n  outline: none;\n}\n.splide__progress__bar {\n  background: #ccc;\n  height: 3px;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--nav > .splide__track > .splide__list > .splide__slide {\n  border: 3px solid transparent;\n  cursor: pointer;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {\n  border: 3px solid #000;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide:focus,\n.splide--nav > .splide__track > .splide__list > .splide__slide:focus {\n  outline: none;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {\n  left: auto;\n  right: 1em;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: scaleX(1);\n}\n.splide--rtl > .splide__arrows .splide__arrow--next,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {\n  left: 1em;\n  right: auto;\n}\n.splide--rtl > .splide__arrows .splide__arrow--next svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: scaleX(-1);\n}\n.splide--ttb > .splide__arrows .splide__arrow,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow {\n  left: 50%;\n  transform: translate(-50%);\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {\n  top: 1em;\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: rotate(-90deg);\n}\n.splide--ttb > .splide__arrows .splide__arrow--next,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {\n  bottom: 1em;\n  top: auto;\n}\n.splide--ttb > .splide__arrows .splide__arrow--next svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: rotate(90deg);\n}\n.splide--ttb > .splide__pagination,\n.splide--ttb > .splide__slider > .splide__pagination {\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  left: auto;\n  padding: 1em 0;\n  right: 0.5em;\n  top: 0;\n}\n",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/Components/ArtistTiles/css/splide.min.css",
          ],
          names: [],
          mappings:
            "AAAA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,qBAAqB;EACrB,4BAA4B;AAC9B;AACA;EACE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,uBAAuB;EACvB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,SAAS;EACT,oBAAoB;AACtB;AACA;EACE,QAAQ;AACV;AACA;EACE,aAAa;EACb,kBAAkB;EAClB,kBAAkB;AACpB;AACA;;EAEE,mBAAmB;AACrB;AACA;EACE,mCAAmC;EACnC,2BAA2B;EAC3B,sBAAsB;EACtB,oBAAoB;EACpB,cAAc;EACd,gCAAgC;EAChC,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,4CAA4C;EAC5C,sBAAsB;EACtB,8BAA8B;EAC9B,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,qBAAqB;EACrB,YAAY;EACZ,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,wBAAwB;EAC1B;AACF;AACA;;EAEE,yBAAyB;EACzB,qBAAqB;EACrB,iBAAiB;AACnB;AACA;;EAEE,cAAc;AAChB;AACA;;;;;;EAME,OAAO;EACP,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,UAAU;AACZ;AACA;;;;;;EAME,UAAU;EACV,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,cAAc;AAChB;AACA;;EAEE,cAAc;AAChB;AACA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,aAAa;EACb,WAAW;EACX,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;EACZ,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,UAAU;EACV,UAAU;AACZ;AACA;EACE,UAAU;EACV,aAAa;EACb,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,SAAS;AACX;AACA;EACE,qBAAqB;AACvB;AACA;EACE,UAAU;AACZ;AACA;EACE,YAAY;EACZ,OAAO;EACP,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,SAAS;EACT,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,UAAU;EACV,iCAAiC;EACjC,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;;;;;;EAME,6BAA6B;EAC7B,eAAe;AACjB;AACA;;;;;;EAME,sBAAsB;AACxB;AACA;;;;;;EAME,aAAa;AACf;AACA;;;;;;;EAOE,UAAU;EACV,UAAU;AACZ;AACA;;;;;;;;EAQE,oBAAoB;AACtB;AACA;;;;;;;EAOE,SAAS;EACT,WAAW;AACb;AACA;;;;;;;;EAQE,qBAAqB;AACvB;AACA;;;;;;;EAOE,SAAS;EACT,0BAA0B;AAC5B;AACA;;;;;;;EAOE,QAAQ;AACV;AACA;;;;;;;;EAQE,yBAAyB;AAC3B;AACA;;;;;;;EAOE,WAAW;EACX,SAAS;AACX;AACA;;;;;;;;EAQE,wBAAwB;AAC1B;AACA;;EAEE,SAAS;EACT,oBAAoB;EACpB,aAAa;EACb,0BAA0B;EAC1B,sBAAsB;EACtB,UAAU;EACV,cAAc;EACd,YAAY;EACZ,MAAM;AACR",
          sourcesContent: [
            ".splide__container {\n  box-sizing: border-box;\n  position: relative;\n}\n.splide__list {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n  transform-style: preserve-3d;\n}\n.splide.is-initialized:not(.is-active) .splide__list {\n  display: block;\n}\n.splide__pagination {\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin: 0;\n  pointer-events: none;\n}\n.splide__pagination li {\n  display: inline-block;\n  line-height: 1;\n  list-style-type: none;\n  margin: 0;\n  pointer-events: auto;\n}\n.splide__progress__bar {\n  width: 0;\n}\n.splide {\n  outline: none;\n  position: relative;\n  visibility: hidden;\n}\n.splide.is-initialized,\n.splide.is-rendered {\n  visibility: visible;\n}\n.splide__slide {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  box-sizing: border-box;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  list-style-type: none !important;\n  margin: 0;\n  outline: none;\n  position: relative;\n}\n.splide__slide img {\n  vertical-align: bottom;\n}\n.splide__slider {\n  position: relative;\n}\n.splide__spinner {\n  animation: splide-loading 1s linear infinite;\n  border: 2px solid #999;\n  border-left-color: transparent;\n  border-radius: 50%;\n  bottom: 0;\n  contain: strict;\n  display: inline-block;\n  height: 20px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 20px;\n}\n.splide__track {\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n}\n@keyframes splide-loading {\n  0% {\n    transform: rotate(0);\n  }\n  to {\n    transform: rotate(1turn);\n  }\n}\n.splide--draggable > .splide__slider > .splide__track,\n.splide--draggable > .splide__track {\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.splide--fade > .splide__slider > .splide__track > .splide__list,\n.splide--fade > .splide__track > .splide__list {\n  display: block;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--fade > .splide__track > .splide__list > .splide__slide {\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n}\n.splide--fade\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--fade > .splide__track > .splide__list > .splide__slide.is-active {\n  opacity: 1;\n  position: relative;\n  z-index: 1;\n}\n.splide--rtl {\n  direction: rtl;\n}\n.splide--ttb.is-active > .splide__slider > .splide__track > .splide__list,\n.splide--ttb.is-active > .splide__track > .splide__list {\n  display: block;\n}\n.splide__arrow {\n  -ms-flex-align: center;\n  align-items: center;\n  background: #ccc;\n  border: 0;\n  border-radius: 50%;\n  cursor: pointer;\n  display: -ms-flexbox;\n  display: flex;\n  height: 2em;\n  -ms-flex-pack: center;\n  justify-content: center;\n  opacity: 0.7;\n  padding: 0;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 2em;\n  z-index: 1;\n}\n.splide__arrow svg {\n  fill: #000;\n  height: 1.2em;\n  width: 1.2em;\n}\n.splide__arrow:hover {\n  opacity: 0.9;\n}\n.splide__arrow:focus {\n  outline: none;\n}\n.splide__arrow--prev {\n  left: 1em;\n}\n.splide__arrow--prev svg {\n  transform: scaleX(-1);\n}\n.splide__arrow--next {\n  right: 1em;\n}\n.splide__pagination {\n  bottom: -1em;\n  left: 0;\n  padding: 0 1em;\n  position: absolute;\n  right: 0;\n  z-index: 1;\n}\n.splide__pagination__page {\n  background: #011526;\n  border: 0;\n  border-radius: 50%;\n  display: inline-block;\n  height: 8px;\n  margin: 3px;\n  opacity: 0.7;\n  padding: 0;\n  transition: transform 0.2s linear;\n  width: 8px;\n}\n.splide__pagination__page.is-active {\n  background: #ccc;\n  transform: scale(1.4);\n}\n.splide__pagination__page:hover {\n  cursor: pointer;\n  opacity: 0.9;\n}\n.splide__pagination__page:focus {\n  outline: none;\n}\n.splide__progress__bar {\n  background: #ccc;\n  height: 3px;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide,\n.splide--nav > .splide__track > .splide__list > .splide__slide {\n  border: 3px solid transparent;\n  cursor: pointer;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide.is-active,\n.splide--nav > .splide__track > .splide__list > .splide__slide.is-active {\n  border: 3px solid #000;\n}\n.splide--nav\n  > .splide__slider\n  > .splide__track\n  > .splide__list\n  > .splide__slide:focus,\n.splide--nav > .splide__track > .splide__list > .splide__slide:focus {\n  outline: none;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev {\n  left: auto;\n  right: 1em;\n}\n.splide--rtl > .splide__arrows .splide__arrow--prev svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: scaleX(1);\n}\n.splide--rtl > .splide__arrows .splide__arrow--next,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next {\n  left: 1em;\n  right: auto;\n}\n.splide--rtl > .splide__arrows .splide__arrow--next svg,\n.splide--rtl\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--rtl > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: scaleX(-1);\n}\n.splide--ttb > .splide__arrows .splide__arrow,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow {\n  left: 50%;\n  transform: translate(-50%);\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev {\n  top: 1em;\n}\n.splide--ttb > .splide__arrows .splide__arrow--prev svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--prev\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--prev svg {\n  transform: rotate(-90deg);\n}\n.splide--ttb > .splide__arrows .splide__arrow--next,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next {\n  bottom: 1em;\n  top: auto;\n}\n.splide--ttb > .splide__arrows .splide__arrow--next svg,\n.splide--ttb\n  > .splide__slider\n  > .splide__track\n  > .splide__arrows\n  .splide__arrow--next\n  svg,\n.splide--ttb > .splide__track > .splide__arrows .splide__arrow--next svg {\n  transform: rotate(90deg);\n}\n.splide--ttb > .splide__pagination,\n.splide--ttb > .splide__slider > .splide__pagination {\n  bottom: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  left: auto;\n  padding: 1em 0;\n  right: 0.5em;\n  top: 0;\n}\n",
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    587: function (n, e, t) {
      n.exports = t.p + "img/d7aed5df3e1fa7810ce054fa4ecbf755.png";
    },
    588: function (n, e, t) {
      n.exports = t.p + "img/ffd4ef54b8c9f3dd71d5d04326325314.png";
    },
    589: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a),
        s = t(590),
        l = t(591),
        A = t(592),
        c = r()(o.a);
      c.i(s.a),
        c.i(l.a),
        c.i(A.a),
        c.push([
          n.i,
          "\n",
          "",
          { version: 3, sources: [], names: [], mappings: "", sourceRoot: "" },
        ]),
        (e.a = c);
    },
    590: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '.newsLetter input {\n  margin-right: 3px;\n}\n\n.homeBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.homeBanner img {\n  width: 100%;\n}\n\n.homeBanner .bannerContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n}\n\n.homeBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 1em;\n  padding: 0 20px;\n}\n.homeBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 21px;\n  text-align: center;\n  padding: 0 20px;\n}\n.homeBanner .blueButton {\n  margin-top: 3em;\n}\n\ndiv.featuredArtists {\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/styles.css"],
          names: [],
          mappings:
            "AAAA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,uCAAuC;EACvC,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,+BAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,WAAW;EACX,sBAAsB;AACxB",
          sourcesContent: [
            '.newsLetter input {\n  margin-right: 3px;\n}\n\n.homeBanner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n\n.homeBanner img {\n  width: 100%;\n}\n\n.homeBanner .bannerContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n}\n\n.homeBanner .slogan {\n  color: #fff;\n  font-family: "Libre Baskerville", serif;\n  font-weight: bold;\n  font-size: 48px;\n  text-align: center;\n  margin-bottom: 1em;\n  padding: 0 20px;\n}\n.homeBanner .tagline {\n  color: #fff;\n  font-family: "Lato", sans-serif;\n  font-weight: bold;\n  font-size: 21px;\n  text-align: center;\n  padding: 0 20px;\n}\n.homeBanner .blueButton {\n  margin-top: 3em;\n}\n\ndiv.featuredArtists {\n  padding: 0 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n  box-sizing: border-box;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    591: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 900px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    margin-bottom: 0.5em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 18px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 1em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/900Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;EACpB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 900px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 32px;\n    text-align: center;\n    margin-bottom: 0.5em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 18px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 1em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    592: function (n, e, t) {
      "use strict";
      var i = t(31),
        o = t.n(i),
        a = t(32),
        r = t.n(a)()(o.a);
      r.push([
        n.i,
        '@media only screen and (max-width: 599px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n    min-height: 180px;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 28px;\n    text-align: center;\n    margin-bottom: 0.3em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 0.5em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://./src/Pages/Home/css/600Max.css"],
          names: [],
          mappings:
            "AAAA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,WAAW;IACX,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,WAAW;IACX,uCAAuC;IACvC,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,+BAA+B;IAC/B,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,wBAAwB;IACxB,WAAW;IACX,sBAAsB;EACxB;AACF",
          sourcesContent: [
            '@media only screen and (max-width: 599px) {\n  .homeBanner {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n  }\n\n  .homeBanner img {\n    width: 100%;\n    min-width: 800px;\n    overflow: hidden;\n  }\n\n  .homeBanner .bannerContent {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding: 0 20px;\n    position: absolute;\n    min-height: 180px;\n  }\n  .homeBanner .slogan {\n    color: #fff;\n    font-family: "Libre Baskerville", serif;\n    font-weight: bold;\n    font-size: 28px;\n    text-align: center;\n    margin-bottom: 0.3em;\n    padding: 0 20px;\n  }\n\n  .homeBanner .tagline {\n    color: #fff;\n    font-family: "Lato", sans-serif;\n    font-weight: bold;\n    font-size: 16px;\n    text-align: center;\n    padding: 0 20px;\n  }\n\n  .homeBanner .blueButton {\n    margin-top: 0.5em;\n  }\n\n  div.featuredArtists {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (e.a = r);
    },
    593: function (n, e, t) {
      n.exports = t.p + "img/d3cf498373a40ea44fdacc90c5da4073.png";
    },
    618: function (n, e, t) {
      "use strict";
      t.r(e);
      var i = t(1),
        o = t.n(i),
        a = t(393),
        r = t.n(a),
        s = t(365),
        l = t(151),
        A = t(105),
        c = t.n(A),
        d = t(566),
        p = { insert: "head", singleton: !1 };
      c()(d.a, p), d.a.locals;
      function u(n, e) {
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
              s = !1;
            try {
              for (
                t = t.call(n);
                !(r = (i = t.next()).done) &&
                (a.push(i.value), !e || a.length !== e);
                r = !0
              );
            } catch (l) {
              (s = !0), (o = l);
            } finally {
              try {
                r || null == t.return || t.return();
              } finally {
                if (s) throw o;
              }
            }
            return a;
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return f(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return f(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function f(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
        return i;
      }
      var m = function () {
          var n = u(Object(i.useState)({}), 2),
            e = n[0],
            t = n[1];
          return (
            Object(i.useEffect)(function () {
              fetch(
                "".concat(
                  "https://globalpeacerhythms.herokuapp.com",
                  "/api/spotlights?populate=*"
                ),
                {
                  method: "get",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  try {
                    t(n.data[0].attributes);
                  } catch (e) {
                    console.log("error: ", e);
                  }
                });
              return function () {
                t([]);
              };
            }, []),
            o.a.createElement(
              "aside",
              { className: "sideBar" },
              o.a.createElement(
                "div",
                { className: "navOption" },
                o.a.createElement(
                  l.Link,
                  { to: "/viewartists" },
                  "VIEW ALL ARTISTS"
                )
              ),
              o.a.createElement(
                "div",
                { className: "navOption" },
                o.a.createElement(
                  l.Link,
                  { to: "/contribute" },
                  "CONTRIBUTE AS AN ARTIST"
                )
              ),
              e &&
                e.image &&
                o.a.createElement(
                  "div",
                  { className: "content" },
                  o.a.createElement("h2", null, "In The Spotlight"),
                  o.a.createElement(
                    "div",
                    { className: "media" },
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
                          src: ""
                            .concat("https://globalpeacerhythms.herokuapp.com")
                            .concat(e.image.data.attributes.formats.medium.url),
                        }),
                        o.a.createElement(
                          "div",
                          { className: "tagline" },
                          e.imageTagline
                        )
                      )
                  ),
                  o.a.createElement("div", { className: "title" }, e.name),
                  o.a.createElement("p", null, e.description),
                  o.a.createElement(
                    l.Link,
                    { className: "learnMore white", to: e.url },
                    "LEARN MORE"
                  ),
                  o.a.createElement("hr", { className: "whiteSeparator" }),
                  o.a.createElement(
                    "h3",
                    null,
                    "Stay up to do date with Global Peace Rhythms."
                  ),
                  o.a.createElement(
                    "div",
                    { className: "newsLetter" },
                    o.a.createElement(
                      "label",
                      { htmlFor: "newsletterSidebar" },
                      "Sign up for our newsletter"
                    ),
                    o.a.createElement("input", {
                      type: "text",
                      placeholder: "Email",
                      id: "newsletterSidebar",
                    }),
                    o.a.createElement(
                      "button",
                      { className: "sidebar blueButton" },
                      "SUBSCRIBE"
                    )
                  )
                )
            )
          );
        },
        B = t(366),
        C = t(364),
        E = t.n(C),
        g = t(571),
        x = { insert: "head", singleton: !1 };
      c()(g.a, x), g.a.locals;
      function h(n, e) {
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
              s = !1;
            try {
              for (
                t = t.call(n);
                !(r = (i = t.next()).done) &&
                (a.push(i.value), !e || a.length !== e);
                r = !0
              );
            } catch (l) {
              (s = !0), (o = l);
            } finally {
              try {
                r || null == t.return || t.return();
              } finally {
                if (s) throw o;
              }
            }
            return a;
          })(n, e) ||
          (function (n, e) {
            if (!n) return;
            if ("string" == typeof n) return b(n, e);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(n);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return b(n, e);
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function b(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
        return i;
      }
      var y = function () {
          var n = h(Object(i.useState)([]), 2),
            e = n[0],
            t = n[1],
            a = h(Object(i.useState)([]), 2),
            r = a[0],
            s = a[1];
          Object(i.useEffect)(function () {
            fetch(
              "".concat(
                "https://globalpeacerhythms.herokuapp.com",
                "/api/news-articles?sort[0]=date%3Aasc&populate=*"
              ),
              { method: "get", headers: { "Content-Type": "application/json" } }
            )
              .then(function (n) {
                return n.json();
              })
              .then(function (n) {
                try {
                  t(n.data);
                } catch (e) {
                  console.log("error: ", e);
                }
              });
            return function () {
              t([]);
            };
          }, []),
            Object(i.useEffect)(function () {
              fetch(
                "".concat(
                  "https://globalpeacerhythms.herokuapp.com",
                  "/api/events?sort[0]=date%3Aasc&populate=*"
                ),
                {
                  method: "get",
                  headers: { "Content-Type": "application/json" },
                }
              )
                .then(function (n) {
                  return n.json();
                })
                .then(function (n) {
                  try {
                    s(n.data);
                  } catch (e) {
                    console.log("error: ", e);
                  }
                });
              return function () {
                s([]);
              };
            }, []);
          return o.a.createElement(
            "section",
            { className: "eventsNews" },
            o.a.createElement("h1", null, "Events & News"),
            o.a.createElement(
              "div",
              { className: "eventsNewsCols" },
              r.length > 0 &&
                o.a.createElement(
                  "div",
                  { className: "eventsCol recentEventCol" },
                  o.a.createElement(
                    "div",
                    { className: "recentEventThumb" },
                    o.a.createElement("img", {
                      src: ""
                        .concat("https://globalpeacerhythms.herokuapp.com")
                        .concat(
                          r[0].attributes.image.data.attributes.formats.medium
                            .url
                        ),
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { className: "title" },
                    r[0].attributes.name
                  ),
                  o.a.createElement(
                    "div",
                    { className: "date" },
                    " ",
                    E()(r[0].attributes.date)
                      .utc()
                      .format("MM/DD/YYYY,  h:mm a")
                  ),
                  o.a.createElement(
                    "div",
                    { className: "teaser" },
                    r[0].attributes.description.substr(0, 100) + " ..."
                  ),
                  o.a.createElement(
                    l.Link,
                    { className: "learnMore black" },
                    "LEARN MORE"
                  )
                ),
              o.a.createElement(
                "div",
                { className: "eventsCol middleCol" },
                o.a.createElement(
                  "h2",
                  null,
                  o.a.createElement(l.Link, null, "Events")
                ),
                r &&
                  r.map(function (n, e) {
                    if (e < 3) {
                      var t = n.attributes.description.substr(0, 100) + " ...";
                      return o.a.createElement(
                        "div",
                        { className: "eventNewsCol", key: n.id },
                        o.a.createElement(
                          "div",
                          { className: "title" },
                          n.attributes.name
                        ),
                        o.a.createElement(
                          "div",
                          { className: "date" },
                          E()(n.attributes.date)
                            .utc()
                            .format("MM/DD/YYYY,  h:mm a")
                        ),
                        o.a.createElement("div", { className: "teaser" }, t),
                        o.a.createElement(
                          l.Link,
                          { className: "learnMore black" },
                          "LEARN MORE"
                        )
                      );
                    }
                  })
              ),
              o.a.createElement(
                "div",
                { className: "eventsCol" },
                o.a.createElement(
                  "h2",
                  null,
                  o.a.createElement(l.Link, null, "News")
                ),
                e &&
                  e.map(function (n, e) {
                    if (e < 3) {
                      var t = n.attributes.description.substr(0, 100) + " ...";
                      return o.a.createElement(
                        "div",
                        { className: "eventNewsCol", key: n.id },
                        o.a.createElement(
                          "div",
                          { className: "title" },
                          n.attributes.title
                        ),
                        o.a.createElement("div", { className: "teaser" }, t),
                        o.a.createElement(
                          l.Link,
                          { className: "learnMore black" },
                          "LEARN MORE"
                        )
                      );
                    }
                  })
              )
            )
          );
        },
        v = t(550),
        w = t(582),
        I = { insert: "head", singleton: !1 },
        _ = (c()(w.a, I), w.a.locals, t(587)),
        k = t.n(_),
        j = t(588),
        z = t.n(j),
        L = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 };
      function N(n) {
        n.length = 0;
      }
      function M(n) {
        return !R(n) && "object" == typeof n;
      }
      function W(n) {
        return Array.isArray(n);
      }
      function S(n) {
        return "string" == typeof n;
      }
      function P(n) {
        return void 0 === n;
      }
      function R(n) {
        return null === n;
      }
      function T(n) {
        return n instanceof HTMLElement;
      }
      function O(n) {
        return W(n) ? n : [n];
      }
      function U(n, e) {
        O(n).forEach(e);
      }
      function Y(n, e) {
        return n.indexOf(e) > -1;
      }
      function q(n, e) {
        return n.push(...O(e)), n;
      }
      var X = Array.prototype;
      function F(n, e, t) {
        return X.slice.call(n, e, t);
      }
      function D(n, e, t) {
        n &&
          U(e, (e) => {
            e && n.classList[t ? "add" : "remove"](e);
          });
      }
      function H(n, e) {
        D(n, S(e) ? e.split(" ") : e, !0);
      }
      function Z(n, e) {
        U(e, n.appendChild.bind(n));
      }
      function $(n, e) {
        U(n, (n) => {
          const t = e.parentNode;
          t && t.insertBefore(n, e);
        });
      }
      function Q(n, e) {
        return T(n) && (n.msMatchesSelector || n.matches).call(n, e);
      }
      function G(n, e) {
        return n ? F(n.children).filter((n) => Q(n, e)) : [];
      }
      function V(n, e) {
        return e ? G(n, e)[0] : n.firstElementChild;
      }
      function J(n, e, t) {
        if (n) {
          let i = Object.keys(n);
          i = t ? i.reverse() : i;
          for (let t = 0; t < i.length; t++) {
            const o = i[t];
            if ("__proto__" !== o && !1 === e(n[o], o)) break;
          }
        }
        return n;
      }
      function K(n) {
        return (
          F(arguments, 1).forEach((e) => {
            J(e, (t, i) => {
              n[i] = e[i];
            });
          }),
          n
        );
      }
      function nn(n, e) {
        return (
          J(e, (e, t) => {
            W(e)
              ? (n[t] = e.slice())
              : M(e)
              ? (n[t] = nn(M(n[t]) ? n[t] : {}, e))
              : (n[t] = e);
          }),
          n
        );
      }
      function en(n, e) {
        n &&
          U(e, (e) => {
            n.removeAttribute(e);
          });
      }
      function tn(n, e, t) {
        M(e)
          ? J(e, (e, t) => {
              tn(n, t, e);
            })
          : R(t)
          ? en(n, e)
          : n.setAttribute(e, String(t));
      }
      function on(n, e, t) {
        const i = document.createElement(n);
        return e && (S(e) ? H(i, e) : tn(i, e)), t && Z(t, i), i;
      }
      function an(n, e, t) {
        if (P(t)) return getComputedStyle(n)[e];
        if (!R(t)) {
          const { style: i } = n;
          (t = "" + t), i[e] !== t && (i[e] = t);
        }
      }
      function rn(n, e) {
        an(n, "display", e);
      }
      function sn(n, e) {
        return n.getAttribute(e);
      }
      function ln(n, e) {
        return n && n.classList.contains(e);
      }
      function An(n) {
        return n.getBoundingClientRect();
      }
      function cn(n) {
        U(n, (n) => {
          n && n.parentNode && n.parentNode.removeChild(n);
        });
      }
      function dn(n) {
        return V(new DOMParser().parseFromString(n, "text/html").body);
      }
      function pn(n, e) {
        n.preventDefault(),
          e && (n.stopPropagation(), n.stopImmediatePropagation());
      }
      function un(n, e) {
        return n && n.querySelector(e);
      }
      function fn(n, e) {
        return F(n.querySelectorAll(e));
      }
      function mn(n, e) {
        D(n, e, !1);
      }
      function Bn(n) {
        return S(n) ? n : n ? n + "px" : "";
      }
      function Cn(n, e = "") {
        if (!n) throw new Error("[splide] " + e);
      }
      function En(n) {
        setTimeout(n);
      }
      var gn = () => {};
      function xn(n) {
        return requestAnimationFrame(n);
      }
      var { min: hn, max: bn, floor: yn, ceil: vn, abs: wn } = Math;
      function In(n, e, t, i) {
        const o = hn(e, t),
          a = bn(e, t);
        return i ? o < n && n < a : o <= n && n <= a;
      }
      function _n(n, e, t) {
        const i = hn(e, t),
          o = bn(e, t);
        return hn(bn(i, n), o);
      }
      function kn(n) {
        return +(n > 0) - +(n < 0);
      }
      function jn(n, e) {
        return (
          U(e, (e) => {
            n = n.replace("%s", "" + e);
          }),
          n
        );
      }
      function zn(n) {
        return n < 10 ? "0" + n : "" + n;
      }
      var Ln = {};
      function Nn(n) {
        const { event: e } = n,
          t = {};
        let i = [];
        function o(n, e, t) {
          a(n, e, (n, e) => {
            i = i.filter(
              (i) =>
                !!(i[0] !== n || i[1] !== e || (t && i[2] !== t)) ||
                (n.removeEventListener(e, i[2], i[3]), !1)
            );
          });
        }
        function a(n, e, t) {
          U(n, (n) => {
            n && e.split(" ").forEach(t.bind(null, n));
          });
        }
        function r() {
          (i = i.filter((n) => o(n[0], n[1]))), e.offBy(t);
        }
        return (
          e.on("destroy", r, t),
          {
            on: function (n, i, o) {
              e.on(n, i, t, o);
            },
            off: function (n) {
              e.off(n, t);
            },
            emit: e.emit,
            bind: function (n, e, t, o) {
              a(n, e, (n, e) => {
                i.push([n, e, t, o]), n.addEventListener(e, t, o);
              });
            },
            unbind: o,
            destroy: r,
          }
        );
      }
      function Mn(n, e, t, i) {
        const { now: o } = Date;
        let a,
          r,
          s = 0,
          l = !0,
          A = 0;
        function c() {
          if (!l) {
            const r = o() - a;
            if (
              (r >= n ? ((s = 1), (a = o())) : (s = r / n),
              t && t(s),
              1 === s && (e(), i && ++A >= i))
            )
              return d();
            xn(c);
          }
        }
        function d() {
          l = !0;
        }
        function p() {
          cancelAnimationFrame(r), (s = 0), (r = 0), (l = !0);
        }
        return {
          start: function (e) {
            !e && p(), (a = o() - (e ? s * n : 0)), (l = !1), xn(c);
          },
          rewind: function () {
            (a = o()), (s = 0), t && t(s);
          },
          pause: d,
          cancel: p,
          set: function (e) {
            n = e;
          },
          isPaused: function () {
            return l;
          },
        };
      }
      function Wn(n, e) {
        let t;
        return function () {
          t ||
            ((t = Mn(
              e || 0,
              () => {
                n.apply(this, arguments), (t = null);
              },
              null,
              1
            )),
            t.start());
        };
      }
      var Sn = {
        marginRight: ["marginBottom", "marginLeft"],
        autoWidth: ["autoHeight"],
        fixedWidth: ["fixedHeight"],
        paddingLeft: ["paddingTop", "paddingRight"],
        paddingRight: ["paddingBottom", "paddingLeft"],
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: ["ArrowUp", "ArrowRight"],
        ArrowRight: ["ArrowDown", "ArrowLeft"],
      };
      var Pn = ["is-active", "is-visible", "is-prev", "is-next", "is-loading"],
        Rn = {
          slide: "splide__slide",
          clone: "splide__slide--clone",
          arrows: "splide__arrows",
          arrow: "splide__arrow",
          prev: "splide__arrow--prev",
          next: "splide__arrow--next",
          pagination: "splide__pagination",
          page: "splide__pagination__page",
          spinner: "splide__spinner",
        };
      var Tn = [
        "role",
        "aria-controls",
        "aria-current",
        "aria-label",
        "aria-hidden",
        "aria-orientation",
        "tabindex",
        "disabled",
      ];
      function On(n, e, t, i) {
        const { on: o, emit: a, bind: r, destroy: s } = Nn(n),
          { Components: l, root: A, options: c } = n,
          { isNavigation: d, updateOnMove: p } = c,
          { resolve: u } = l.Direction,
          f = sn(i, "style"),
          m = t > -1,
          B = V(i, ".splide__slide__container"),
          C = c.focusableNodes && fn(i, c.focusableNodes);
        let E;
        function g() {
          const o = m ? t : e,
            a = jn(c.i18n.slideX, o + 1),
            r = n.splides.map((n) => n.splide.root.id).join(" ");
          tn(i, "aria-label", a),
            tn(i, "aria-controls", r),
            tn(i, "role", "menuitem"),
            b(y());
        }
        function x() {
          E || h();
        }
        function h() {
          if (!E) {
            const { index: t } = n;
            b(y()),
              (function (n) {
                const e = !n && (!y() || m);
                tn(i, "aria-hidden", e || null),
                  tn(i, "tabindex", !e && c.slideFocus ? 0 : null),
                  C &&
                    C.forEach((n) => {
                      tn(n, "tabindex", e ? -1 : null);
                    });
                n !== ln(i, "is-visible") &&
                  (D(i, "is-visible", n), a(n ? "visible" : "hidden", v));
              })(
                (function () {
                  if (n.is("fade")) return y();
                  const e = An(l.Elements.track),
                    t = An(i),
                    o = u("left"),
                    a = u("right");
                  return yn(e[o]) <= vn(t[o]) && yn(t[a]) <= vn(e[a]);
                })()
              ),
              D(i, "is-prev", e === t - 1),
              D(i, "is-next", e === t + 1);
          }
        }
        function b(n) {
          n !== ln(i, "is-active") &&
            (D(i, "is-active", n),
            d && tn(i, "aria-current", n || null),
            a(n ? "active" : "inactive", v));
        }
        function y() {
          const { index: i } = n;
          return i === e || (c.cloneStatus && i === t);
        }
        const v = {
          index: e,
          slideIndex: t,
          slide: i,
          container: B,
          isClone: m,
          mount: function () {
            m || (i.id = `${A.id}-slide${zn(e + 1)}`),
              r(i, "click keydown", (n) => {
                a("click" === n.type ? "click" : "slide:keydown", v, n);
              }),
              o(["refresh", "repositioned", "shifted", "moved", "scrolled"], h),
              o("navigation:mounted", g),
              p && o("move", x);
          },
          destroy: function () {
            (E = !0), s(), mn(i, Pn), en(i, Tn), tn(i, "style", f);
          },
          update: h,
          style: function (n, e, t) {
            an((t && B) || i, n, e);
          },
          isWithin: function (t, i) {
            let o = wn(t - e);
            return (
              m || (!c.rewind && !n.is("loop")) || (o = hn(o, n.length - o)),
              o <= i
            );
          },
        };
        return v;
      }
      var Un = { passive: !1, capture: !0 };
      var Yn = ["Left", "Right", "Up", "Down"];
      var qn = [" ", "Enter", "Spacebar"];
      var Xn = Object.freeze({
          __proto__: null,
          Options: function (n, e, t) {
            const i = Wn(l);
            let o, a, r;
            function s(n) {
              n && removeEventListener("resize", i);
            }
            function l() {
              const e = ((i = (n) => n[1].matches), F(a).filter(i)[0] || []);
              var i;
              e[0] !== r &&
                (function (e) {
                  const i = t.breakpoints[e] || o;
                  i.destroy
                    ? ((n.options = o), n.destroy("completely" === i.destroy))
                    : (n.state.is(5) && (s(!0), n.mount()), (n.options = i));
                })((r = e[0]));
            }
            return {
              setup: function () {
                try {
                  nn(t, JSON.parse(sn(n.root, "data-splide")));
                } catch (i) {
                  Cn(!1, i.message);
                }
                o = nn({}, t);
                const { breakpoints: e } = t;
                if (e) {
                  const n = "min" === t.mediaQuery;
                  (a = Object.keys(e)
                    .sort((e, t) => (n ? +t - +e : +e - +t))
                    .map((e) => [
                      e,
                      matchMedia(`(${n ? "min" : "max"}-width:${e}px)`),
                    ])),
                    l();
                }
              },
              mount: function () {
                a && addEventListener("resize", i);
              },
              destroy: s,
            };
          },
          Direction: function (n, e, t) {
            return {
              resolve: function (n, e) {
                const { direction: i } = t;
                return (
                  Sn[n]["rtl" !== i || e ? ("ttb" === i ? 0 : -1) : 1] || n
                );
              },
              orient: function (n) {
                return n * ("rtl" === t.direction ? 1 : -1);
              },
            };
          },
          Elements: function (n, e, t) {
            const { on: i } = Nn(n),
              { root: o } = n,
              a = {},
              r = [];
            let s, l, A, c;
            function d() {
              !(function () {
                (l = V(o, ".splide__slider")),
                  (A = un(o, ".splide__track")),
                  (c = V(A, ".splide__list")),
                  Cn(A && c, "A track/list element is missing."),
                  q(r, G(c, ".splide__slide:not(.splide__slide--clone)"));
                const n = m(".splide__autoplay"),
                  e = m(".splide__arrows");
                K(a, {
                  root: o,
                  slider: l,
                  track: A,
                  list: c,
                  slides: r,
                  arrows: e,
                  autoplay: n,
                  prev: un(e, ".splide__arrow--prev"),
                  next: un(e, ".splide__arrow--next"),
                  bar: un(m(".splide__progress"), ".splide__progress__bar"),
                  play: un(n, ".splide__play"),
                  pause: un(n, ".splide__pause"),
                });
              })(),
                (function () {
                  const n =
                    o.id ||
                    ((e = "splide"), `${e}${zn((Ln[e] = (Ln[e] || 0) + 1))}`);
                  var e;
                  (o.id = n),
                    (A.id = A.id || n + "-track"),
                    (c.id = c.id || n + "-list");
                })(),
                H(o, (s = B()));
            }
            function p() {
              [o, A, c].forEach((n) => {
                en(n, "style");
              }),
                N(r),
                mn(o, s);
            }
            function u() {
              p(), d();
            }
            function f() {
              mn(o, s), H(o, (s = B()));
            }
            function m(n) {
              return V(o, n) || V(l, n);
            }
            function B() {
              return [
                "splide--" + t.type,
                "splide--" + t.direction,
                t.drag && "splide--draggable",
                t.isNavigation && "splide--nav",
                "is-active",
              ];
            }
            return K(a, {
              setup: d,
              mount: function () {
                i("refresh", u, 8), i("updated", f);
              },
              destroy: p,
            });
          },
          Slides: function (n, e, t) {
            const { on: i, emit: o, bind: a } = Nn(n),
              { slides: r, list: s } = e.Elements,
              l = [];
            function A() {
              r.forEach((n, e) => {
                p(n, e, -1);
              });
            }
            function c() {
              f((n) => {
                n.destroy();
              }),
                N(l);
            }
            function d() {
              c(), A();
            }
            function p(e, t, i) {
              const o = On(n, t, i, e);
              o.mount(), l.push(o);
            }
            function u(n) {
              return n ? m((n) => !n.isClone) : l;
            }
            function f(n, e) {
              u(e).forEach(n);
            }
            function m(n) {
              return l.filter(
                "function" == typeof n
                  ? n
                  : (e) => (S(n) ? Q(e.slide, n) : Y(O(n), e.index))
              );
            }
            return {
              mount: function () {
                A(),
                  i("refresh", d),
                  i(["mounted", "refresh"], () => {
                    l.sort((n, e) => n.index - e.index);
                  });
              },
              destroy: c,
              update: function () {
                f((n) => {
                  n.update();
                });
              },
              register: p,
              get: u,
              getIn: function (n) {
                const { Controller: i } = e,
                  o = i.toIndex(n),
                  a = i.hasFocus() ? 1 : t.perPage;
                return m((n) => In(n.index, o, o + a - 1));
              },
              getAt: function (n) {
                return m(n)[0];
              },
              add: function (n, e) {
                U(n, (n) => {
                  if ((S(n) && (n = dn(n)), T(n))) {
                    const i = r[e];
                    i ? $(n, i) : Z(s, n),
                      H(n, t.classes.slide),
                      (function (n, e) {
                        const t = fn(n, "img");
                        let { length: i } = t;
                        i
                          ? t.forEach((n) => {
                              a(n, "load error", () => {
                                --i || e();
                              });
                            })
                          : e();
                      })(n, o.bind(null, "resize"));
                  }
                }),
                  o("refresh");
              },
              remove: function (n) {
                cn(m(n).map((n) => n.slide)), o("refresh");
              },
              forEach: f,
              filter: m,
              style: function (n, e, t) {
                f((i) => {
                  i.style(n, e, t);
                });
              },
              getLength: function (n) {
                return n ? r.length : l.length;
              },
              isEnough: function () {
                return l.length > t.perPage;
              },
            };
          },
          Layout: function (n, e, t) {
            const { on: i, bind: o, emit: a } = Nn(n),
              { Slides: r } = e,
              { resolve: s } = e.Direction,
              { root: l, track: A, list: c } = e.Elements,
              { getAt: d } = r;
            let p, u;
            function f() {
              (u = null),
                (p = "ttb" === t.direction),
                an(l, "maxWidth", Bn(t.width)),
                an(A, s("paddingLeft"), B(!1)),
                an(A, s("paddingRight"), B(!0)),
                m();
            }
            function m() {
              const n = An(l);
              (u && u.width === n.width && u.height === n.height) ||
                (an(
                  A,
                  "height",
                  (function () {
                    let n = "";
                    p &&
                      ((n = C()),
                      Cn(n, "height or heightRatio is missing."),
                      (n = `calc(${n} - ${B(!1)} - ${B(!0)})`));
                    return n;
                  })()
                ),
                r.style(s("marginRight"), Bn(t.gap)),
                r.style(
                  "width",
                  (t.autoWidth ? "" : Bn(t.fixedWidth) || (p ? "" : E())) ||
                    null
                ),
                r.style(
                  "height",
                  Bn(t.fixedHeight) ||
                    (p ? (t.autoHeight ? "" : E()) : C()) ||
                    null,
                  !0
                ),
                (u = n),
                a("resized"));
            }
            function B(n) {
              const { padding: e } = t,
                i = s(n ? "right" : "left");
              return (e && Bn(e[i] || (M(e) ? 0 : e))) || "0px";
            }
            function C() {
              return Bn(t.height || An(c).width * t.heightRatio);
            }
            function E() {
              const n = Bn(t.gap);
              return `calc((100%${n && " + " + n})/${t.perPage || 1}${
                n && " - " + n
              })`;
            }
            function g(n, e) {
              const t = d(n);
              if (t) {
                const n = An(t.slide)[s("right")],
                  i = An(c)[s("left")];
                return wn(n - i) + (e ? 0 : x());
              }
              return 0;
            }
            function x() {
              const n = d(0);
              return (n && parseFloat(an(n.slide, s("marginRight")))) || 0;
            }
            return {
              mount: function () {
                f(),
                  o(window, "resize load", Wn(a.bind(this, "resize"))),
                  i(["updated", "refresh"], f),
                  i("resize", m);
              },
              listSize: function () {
                return An(c)[s("width")];
              },
              slideSize: function (n, e) {
                const t = d(n || 0);
                return t ? An(t.slide)[s("width")] + (e ? 0 : x()) : 0;
              },
              sliderSize: function () {
                return g(n.length - 1, !0) - g(-1, !0);
              },
              totalSize: g,
              getPadding: function (n) {
                return (
                  parseFloat(an(A, s("padding" + (n ? "Right" : "Left")))) || 0
                );
              },
            };
          },
          Clones: function (n, e, t) {
            const { on: i, emit: o } = Nn(n),
              { Elements: a, Slides: r } = e,
              { resolve: s } = e.Direction,
              l = [];
            let A;
            function c() {
              (A = f()) &&
                (!(function (e) {
                  const i = r.get().slice(),
                    { length: o } = i;
                  if (o) {
                    for (; i.length < e; ) q(i, i);
                    q(i.slice(-e), i.slice(0, e)).forEach((s, A) => {
                      const c = A < e,
                        d = (function (e, i) {
                          const o = e.cloneNode(!0);
                          return (
                            H(o, t.classes.clone),
                            (o.id = `${n.root.id}-clone${zn(i + 1)}`),
                            o
                          );
                        })(s.slide, A);
                      c ? $(d, i[0].slide) : Z(a.list, d),
                        q(l, d),
                        r.register(d, A - e + (c ? 0 : o), s.index);
                    });
                  }
                })(A),
                o("resize"));
            }
            function d() {
              cn(l), N(l);
            }
            function p() {
              d(), c();
            }
            function u() {
              A < f() && o("refresh");
            }
            function f() {
              let { clones: e } = t;
              if (n.is("loop")) {
                if (!e) {
                  const i = (function (n, e) {
                    if (S(e)) {
                      const t = on(
                        "div",
                        { style: `width: ${e}; position: absolute;` },
                        n
                      );
                      (e = An(t).width), cn(t);
                    }
                    return e;
                  })(a.list, t[s("fixedWidth")]);
                  e =
                    ((i && vn(An(a.track)[s("width")] / i)) ||
                      (t[s("autoWidth")] && n.length) ||
                      t.perPage) * (t.drag ? (t.flickMaxPages || 1) + 1 : 2);
                }
              } else e = 0;
              return e;
            }
            return {
              mount: function () {
                c(), i("refresh", p), i(["updated", "resize"], u);
              },
              destroy: d,
            };
          },
          Move: function (n, e, t) {
            const { on: i, emit: o } = Nn(n),
              {
                slideSize: a,
                getPadding: r,
                totalSize: s,
                listSize: l,
                sliderSize: A,
              } = e.Layout,
              { resolve: c, orient: d } = e.Direction,
              { list: p, track: u } = e.Elements;
            let f;
            function m() {
              b() || (e.Scroll.cancel(), B(n.index), o("repositioned"));
            }
            function B(n) {
              C(g(n, !0));
            }
            function C(e, t) {
              if (!n.is("fade")) {
                const i = t
                  ? e
                  : (function (e) {
                      if (n.is("loop")) {
                        const n = d(e - x()),
                          t = y(!1, e) && n < 0,
                          i = y(!0, e) && n > 0;
                        (t || i) && (e = E(e, i));
                      }
                      return e;
                    })(e);
                (p.style.transform = `translate${c("X")}(${i}px)`),
                  e !== i && o("shifted");
              }
            }
            function E(n, e) {
              const t = n - h(e),
                i = A();
              return (n -= d(i * (vn(wn(t) / i) || 1)) * (e ? 1 : -1));
            }
            function g(e, i) {
              const o = d(
                s(e - 1) -
                  (function (n) {
                    const { focus: e } = t;
                    return "center" === e
                      ? (l() - a(n, !0)) / 2
                      : +e * a(n) || 0;
                  })(e)
              );
              return i
                ? (function (e) {
                    t.trimSpace &&
                      n.is("slide") &&
                      (e = _n(e, 0, d(A() - l())));
                    return e;
                  })(o)
                : o;
            }
            function x() {
              const n = c("left");
              return An(p)[n] - An(u)[n] + d(r(!1));
            }
            function h(n) {
              return g(n ? e.Controller.getEnd() : 0, !!t.trimSpace);
            }
            function b() {
              return n.state.is(4) && t.waitForTransition;
            }
            function y(n, e) {
              e = P(e) ? x() : e;
              const t = !0 !== n && d(e) < d(h(!1)),
                i = !1 !== n && d(e) > d(h(!0));
              return t || i;
            }
            return {
              mount: function () {
                (f = e.Transition),
                  i(["mounted", "resized", "updated", "refresh"], m);
              },
              destroy: function () {
                en(p, "style");
              },
              move: function (i, a, r, s) {
                if (!b()) {
                  const { set: l } = n.state,
                    A = x();
                  i !== a && (f.cancel(), C(E(A, i > a), !0)),
                    l(4),
                    o("move", a, r, i),
                    f.start(a, () => {
                      l(3),
                        o("moved", a, r, i),
                        "move" === t.trimSpace && i !== r && A === x()
                          ? e.Controller.go(i > r ? ">" : "<", !1, s)
                          : s && s();
                    });
                }
              },
              jump: B,
              translate: C,
              shift: E,
              cancel: function () {
                C(x()), f.cancel();
              },
              toIndex: function (n) {
                const t = e.Slides.get();
                let i = 0,
                  o = 1 / 0;
                for (let e = 0; e < t.length; e++) {
                  const a = t[e].index,
                    r = wn(g(a, !0) - n);
                  if (!(r <= o)) break;
                  (o = r), (i = a);
                }
                return i;
              },
              toPosition: g,
              getPosition: x,
              getLimit: h,
              isBusy: b,
              exceededLimit: y,
            };
          },
          Controller: function (n, e, t) {
            const { on: i } = Nn(n),
              { Move: o } = e,
              { getPosition: a, getLimit: r } = o,
              { isEnough: s, getLength: l } = e.Slides,
              A = n.is("loop"),
              c = n.is("slide");
            let d,
              p,
              u,
              f = t.start || 0,
              m = f;
            function B() {
              (d = l(!0)),
                (p = t.perMove),
                (u = t.perPage),
                (f = _n(f, 0, d - 1));
            }
            function C(n, t, i, a, r) {
              const s = t ? n : I(n);
              e.Scroll.scroll(t || i ? o.toPosition(s, !0) : n, a, () => {
                _(o.toIndex(o.getPosition())), r && r();
              });
            }
            function E(n) {
              return x(!1, n);
            }
            function g(n) {
              return x(!0, n);
            }
            function x(n, e) {
              const t = p || (k() ? 1 : u),
                i = h(f + t * (n ? -1 : 1), f);
              return -1 !== i ||
                !c ||
                ((o = a()), (s = r(!n)), (l = 1), wn(o - s) < l)
                ? e
                  ? i
                  : y(i)
                : n
                ? 0
                : b();
              var o, s, l;
            }
            function h(n, e, i) {
              if (s()) {
                const o = b();
                n < 0 || n > o
                  ? (n =
                      In(0, n, e, !0) || In(o, e, n, !0)
                        ? v(w(n))
                        : A
                        ? p || k()
                          ? n
                          : n < 0
                          ? -(d % u || u)
                          : d
                        : t.rewind
                        ? n < 0
                          ? o
                          : 0
                        : -1)
                  : i || n === e || (n = p ? n : v(w(e) + (n < e ? -1 : 1)));
              } else n = -1;
              return n;
            }
            function b() {
              let n = d - u;
              return (k() || (A && p)) && (n = d - 1), bn(n, 0);
            }
            function y(n) {
              return A ? (s() ? (n % d) + (n < 0 ? d : 0) : -1) : n;
            }
            function v(n) {
              return _n(k() ? n : u * n, 0, b());
            }
            function w(n) {
              return (
                k() || ((n = In(n, d - u, d - 1) ? d - 1 : n), (n = yn(n / u))),
                n
              );
            }
            function I(n) {
              const e = o.toIndex(n);
              return c ? _n(e, 0, b()) : e;
            }
            function _(n) {
              n !== f && ((m = f), (f = n));
            }
            function k() {
              return !P(t.focus) || t.isNavigation;
            }
            return {
              mount: function () {
                B(), i(["updated", "refresh"], B, 9);
              },
              go: function (n, e, i) {
                const a = (function (n) {
                  let e = f;
                  if (S(n)) {
                    const [, t, i] = n.match(/([+\-<>])(\d+)?/) || [];
                    "+" === t || "-" === t
                      ? (e = h(f + +`${t}${+i || 1}`, f, !0))
                      : ">" === t
                      ? (e = i ? v(+i) : E(!0))
                      : "<" === t && (e = g(!0));
                  } else e = A ? n : _n(n, 0, b());
                  return e;
                })(n);
                if (t.useScroll) C(a, !0, !0, t.speed, i);
                else {
                  const n = y(a);
                  n > -1 &&
                    !o.isBusy() &&
                    (e || n !== f) &&
                    (_(n), o.move(a, n, m, i));
                }
              },
              scroll: C,
              getNext: E,
              getPrev: g,
              getAdjacent: x,
              getEnd: b,
              setIndex: _,
              getIndex: function (n) {
                return n ? m : f;
              },
              toIndex: v,
              toPage: w,
              toDest: I,
              hasFocus: k,
            };
          },
          Arrows: function (n, e, t) {
            const { on: i, bind: o, emit: a } = Nn(n),
              { classes: r, i18n: s } = t,
              { Elements: l, Controller: A } = e;
            let c,
              d = l.arrows,
              p = l.prev,
              u = l.next;
            const f = {};
            function m() {
              if (
                (t.arrows &&
                  ((p && u) ||
                    ((d = on("div", r.arrows)),
                    (p = B(!0)),
                    (u = B(!1)),
                    (c = !0),
                    Z(d, [p, u]),
                    $(d, V(("slider" === t.arrows && l.slider) || n.root)))),
                p && u)
              )
                if (f.prev) rn(d, !1 === t.arrows ? "none" : "");
                else {
                  const { id: n } = l.track;
                  tn(p, "aria-controls", n),
                    tn(u, "aria-controls", n),
                    (f.prev = p),
                    (f.next = u),
                    (function () {
                      const { go: n } = A;
                      i(
                        ["mounted", "moved", "updated", "refresh", "scrolled"],
                        C
                      ),
                        o(u, "click", () => {
                          n(">", !0);
                        }),
                        o(p, "click", () => {
                          n("<", !0);
                        });
                    })(),
                    a("arrows:mounted", p, u);
                }
            }
            function B(n) {
              return dn(
                `<button class="${r.arrow} ${
                  n ? r.prev : r.next
                }" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${
                  t.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
                }" />`
              );
            }
            function C() {
              const e = n.index,
                t = A.getPrev(),
                i = A.getNext(),
                o = t > -1 && e < t ? s.last : s.prev,
                r = i > -1 && e > i ? s.first : s.next;
              (p.disabled = t < 0),
                (u.disabled = i < 0),
                tn(p, "aria-label", o),
                tn(u, "aria-label", r),
                a("arrows:updated", p, u, t, i);
            }
            return {
              arrows: f,
              mount: function () {
                m(), i("updated", m);
              },
              destroy: function () {
                c ? cn(d) : (en(p, Tn), en(u, Tn));
              },
            };
          },
          Autoplay: function (n, e, t) {
            const { on: i, bind: o, emit: a } = Nn(n),
              r = Mn(t.interval, n.go.bind(n, ">"), function (n) {
                const { bar: e } = l;
                e && an(e, "width", 100 * n + "%"), a("autoplay:playing", n);
              }),
              { isPaused: s } = r,
              { Elements: l } = e;
            let A, c, d;
            function p(n) {
              const e = n ? "pause" : "play",
                i = l[e];
              i &&
                (tn(i, "aria-controls", l.track.id),
                tn(i, "aria-label", t.i18n[e]),
                o(i, "click", n ? f : u));
            }
            function u() {
              s() &&
                e.Slides.isEnough() &&
                (r.start(!t.resetProgress),
                (c = A = d = !1),
                a("autoplay:play"));
            }
            function f(n = !0) {
              s() || (r.pause(), a("autoplay:pause")), (d = n);
            }
            function m() {
              d || (A || c ? f(!1) : u());
            }
            function B() {
              const i = e.Slides.getAt(n.index);
              r.set((i && +sn(i.slide, "data-splide-interval")) || t.interval);
            }
            return {
              mount: function () {
                const { autoplay: n } = t;
                n &&
                  (p(!0),
                  p(!1),
                  (function () {
                    const { root: n } = l;
                    t.pauseOnHover &&
                      o(n, "mouseenter mouseleave", (n) => {
                        (A = "mouseenter" === n.type), m();
                      });
                    t.pauseOnFocus &&
                      o(n, "focusin focusout", (n) => {
                        (c = "focusin" === n.type), m();
                      });
                    i(["move", "scroll", "refresh"], r.rewind), i("move", B);
                  })(),
                  "pause" !== n && u());
              },
              destroy: r.cancel,
              play: u,
              pause: f,
              isPaused: s,
            };
          },
          Cover: function (n, e, t) {
            const { on: i } = Nn(n);
            function o(n) {
              e.Slides.forEach((e) => {
                const t = V(e.container || e.slide, "img");
                t && t.src && a(n, t, e);
              });
            }
            function a(n, e, t) {
              t.style(
                "background",
                n ? `center/cover no-repeat url("${e.src}")` : "",
                !0
              ),
                rn(e, n ? "none" : "");
            }
            return {
              mount: function () {
                t.cover &&
                  (i("lazyload:loaded", (n, e) => {
                    a(!0, n, e);
                  }),
                  i(["mounted", "updated", "refresh"], o.bind(null, !0)));
              },
              destroy: function () {
                o(!1);
              },
            };
          },
          Scroll: function (n, e, t) {
            const { on: i, emit: o } = Nn(n),
              { Move: a } = e,
              { getPosition: r, getLimit: s, exceededLimit: l } = a;
            let A, c;
            function d(e, i, f, m) {
              const B = r();
              let C = 1;
              var E;
              (i = i || ((E = wn(e - B)), bn(E / 1.5, 800))),
                (c = f),
                u(),
                (A = Mn(
                  i,
                  p,
                  (i) => {
                    const o = r(),
                      A =
                        (B +
                          (e - B) *
                            (function (n) {
                              const { easingFunc: e } = t;
                              return e ? e(n) : 1 - Math.pow(1 - n, 4);
                            })(i) -
                          r()) *
                        C;
                    var c;
                    a.translate(o + A),
                      n.is("slide") &&
                        !m &&
                        l() &&
                        ((C *= 0.6),
                        wn(A) < 10 && ((c = l(!1)), d(s(!c), 600, null, !0)));
                  },
                  1
                )),
                o("scroll"),
                A.start();
            }
            function p() {
              const e = r(),
                t = a.toIndex(e);
              In(t, 0, n.length - 1) || a.translate(a.shift(e, t > 0), !0),
                c && c(),
                o("scrolled");
            }
            function u() {
              A && A.cancel();
            }
            function f() {
              A && !A.isPaused() && (u(), p());
            }
            return {
              mount: function () {
                i("move", u), i(["updated", "refresh"], f);
              },
              destroy: u,
              scroll: d,
              cancel: f,
            };
          },
          Drag: function (n, e, t) {
            const { on: i, emit: o, bind: a, unbind: r } = Nn(n),
              { Move: s, Scroll: l, Controller: A } = e,
              { track: c } = e.Elements,
              { resolve: d, orient: p } = e.Direction,
              { getPosition: u, exceededLimit: f } = s;
            let m,
              B,
              C,
              E,
              g,
              x,
              h,
              b,
              y,
              v = !1;
            function w() {
              const { drag: n } = t;
              P(!n), (g = "free" === n);
            }
            function I(n) {
              if (!b) {
                const { noDrag: e } = t,
                  i = S(n),
                  o = !e || !Q(n.target, e);
                (h = !1),
                  !o ||
                    (!i && n.button) ||
                    (s.isBusy()
                      ? pn(n, !0)
                      : ((y = i ? c : window),
                        (C = null),
                        (E = null),
                        a(y, "touchmove mousemove", _, Un),
                        a(y, "touchend touchcancel mouseup", k, Un),
                        s.cancel(),
                        l.cancel(),
                        j(n)));
              }
            }
            function _(e) {
              if ((E || o("drag"), (E = e), e.cancelable)) {
                const i = N(e) - N(B);
                if (x) {
                  s.translate(
                    m +
                      (function (e) {
                        return e / (v && n.is("slide") ? 5 : 1);
                      })(i)
                  );
                  const t = W(e) - W(B) > 200,
                    a = v !== (v = f());
                  (t || a) && j(e), o("dragging"), (h = !0), pn(e);
                } else {
                  let { dragMinThreshold: n } = t;
                  (n = M(n) ? n : { mouse: 0, touch: +n || 10 }),
                    (x = wn(i) > (S(e) ? n.touch : n.mouse)),
                    L() && pn(e);
                }
              }
            }
            function k(i) {
              r(y, "touchmove mousemove", _),
                r(y, "touchend touchcancel mouseup", k);
              const { index: a } = n;
              if (E) {
                if (x || (i.cancelable && L())) {
                  const o = (function (e) {
                      if (n.is("loop") || !v) {
                        const n = (B === E && C) || B,
                          t = N(E) - N(n),
                          i = W(e) - W(n),
                          o = W(e) - W(E) < 200;
                        if (i && o) return t / i;
                      }
                      return 0;
                    })(i),
                    r = (function (n) {
                      return (
                        u() +
                        kn(n) *
                          hn(
                            wn(n) * (t.flickPower || 600),
                            g
                              ? 1 / 0
                              : e.Layout.listSize() * (t.flickMaxPages || 1)
                          )
                      );
                    })(o);
                  g
                    ? A.scroll(r)
                    : n.is("fade")
                    ? A.go(a + p(kn(o)))
                    : A.go(A.toDest(r), !0),
                    pn(i);
                }
                o("dragged");
              } else g || u() === s.toPosition(a) || A.go(a, !0);
              x = !1;
            }
            function j(n) {
              (C = B), (B = n), (m = u());
            }
            function z(n) {
              !b && h && pn(n, !0);
            }
            function L() {
              return wn(N(E) - N(B)) > wn(N(E, !0) - N(B, !0));
            }
            function N(n, e) {
              return (S(n) ? n.touches[0] : n)["page" + d(e ? "Y" : "X")];
            }
            function W(n) {
              return n.timeStamp;
            }
            function S(n) {
              return (
                "undefined" != typeof TouchEvent && n instanceof TouchEvent
              );
            }
            function P(n) {
              b = n;
            }
            return {
              mount: function () {
                a(c, "touchmove mousemove", gn, Un),
                  a(c, "touchend touchcancel mouseup", gn, Un),
                  a(c, "touchstart mousedown", I, Un),
                  a(c, "click", z, { capture: !0 }),
                  a(c, "dragstart", pn),
                  i(["mounted", "updated"], w);
              },
              disable: P,
              isDragging: function () {
                return x;
              },
            };
          },
          Keyboard: function (n, e, t) {
            const { on: i, bind: o, unbind: a } = Nn(n),
              { root: r } = n,
              { resolve: s } = e.Direction;
            let l, A;
            function c() {
              const { keyboard: n } = t;
              n &&
                ("focused" === n
                  ? ((l = r), tn(r, "tabindex", 0))
                  : (l = window),
                o(l, "keydown", f));
            }
            function d() {
              a(l, "keydown"), T(l) && en(l, "tabindex");
            }
            function p() {
              const n = A;
              (A = !0),
                En(() => {
                  A = n;
                });
            }
            function u() {
              d(), c();
            }
            function f(e) {
              if (!A) {
                const { key: t } = e,
                  i = Y(Yn, t) ? "Arrow" + t : t;
                i === s("ArrowLeft")
                  ? n.go("<")
                  : i === s("ArrowRight") && n.go(">");
              }
            }
            return {
              mount: function () {
                c(), i("updated", u), i("move", p);
              },
              destroy: d,
              disable: function (n) {
                A = n;
              },
            };
          },
          LazyLoad: function (n, e, t) {
            const { on: i, off: o, bind: a, emit: r } = Nn(n),
              s = "sequential" === t.lazyLoad;
            let l = [],
              A = 0;
            function c() {
              p(), d();
            }
            function d() {
              e.Slides.forEach((n) => {
                fn(
                  n.slide,
                  "[data-splide-lazy], [data-splide-lazy-srcset]"
                ).forEach((e) => {
                  const i = sn(e, "data-splide-lazy"),
                    o = sn(e, "data-splide-lazy-srcset");
                  if (i !== e.src || o !== e.srcset) {
                    const a = t.classes.spinner,
                      r = e.parentElement,
                      s = V(r, "." + a) || on("span", a, r);
                    tn(s, "role", "presentation"),
                      l.push({
                        _img: e,
                        _Slide: n,
                        src: i,
                        srcset: o,
                        _spinner: s,
                      }),
                      !e.src && rn(e, "none");
                  }
                });
              }),
                s && m();
            }
            function p() {
              (A = 0), (l = []);
            }
            function u() {
              (l = l.filter((e) => {
                const i = t.perPage * ((t.preloadPages || 1) + 1) - 1;
                return !e._Slide.isWithin(n.index, i) || f(e);
              })),
                l.length || o("moved");
            }
            function f(n) {
              const { _img: e } = n;
              H(n._Slide.slide, "is-loading"),
                a(e, "load error", (e) => {
                  !(function (n, e) {
                    const { _Slide: t } = n;
                    mn(t.slide, "is-loading"),
                      e ||
                        (cn(n._spinner),
                        rn(n._img, ""),
                        r("lazyload:loaded", n._img, t),
                        r("resize"));
                    s && m();
                  })(n, "error" === e.type);
                }),
                ["srcset", "src"].forEach((t) => {
                  n[t] &&
                    (tn(e, t, n[t]),
                    en(
                      e,
                      "src" === t
                        ? "data-splide-lazy"
                        : "data-splide-lazy-srcset"
                    ));
                });
            }
            function m() {
              A < l.length && f(l[A++]);
            }
            return {
              mount: function () {
                t.lazyLoad &&
                  (d(),
                  i("refresh", c),
                  s || i(["mounted", "refresh", "moved", "scrolled"], u));
              },
              destroy: p,
            };
          },
          Pagination: function (n, e, t) {
            const { on: i, emit: o, bind: a, unbind: r } = Nn(n),
              { Slides: s, Elements: l, Controller: A } = e,
              { hasFocus: c, getIndex: d } = A,
              p = [];
            let u;
            function f() {
              m(),
                t.pagination &&
                  s.isEnough() &&
                  (!(function () {
                    const { length: e } = n,
                      { classes: i, i18n: o, perPage: r } = t,
                      A = ("slider" === t.pagination && l.slider) || l.root,
                      d = c() ? e : vn(e / r);
                    u = on("ul", i.pagination, A);
                    for (let n = 0; n < d; n++) {
                      const e = on("li", null, u),
                        t = on("button", { class: i.page, type: "button" }, e),
                        l = s.getIn(n).map((n) => n.slide.id),
                        A = !c() && r > 1 ? o.pageX : o.slideX;
                      a(t, "click", B.bind(null, n)),
                        tn(t, "aria-controls", l.join(" ")),
                        tn(t, "aria-label", jn(A, n + 1)),
                        p.push({ li: e, button: t, page: n });
                    }
                  })(),
                  o("pagination:mounted", { list: u, items: p }, C(n.index)),
                  E());
            }
            function m() {
              u &&
                (cn(u),
                p.forEach((n) => {
                  r(n.button, "click");
                }),
                N(p),
                (u = null));
            }
            function B(n) {
              A.go(">" + n, !0, () => {
                const e = s.getAt(A.toIndex(n));
                var t;
                e &&
                  (((t = e.slide).setActive && t.setActive()) ||
                    t.focus({ preventScroll: !0 }));
              });
            }
            function C(n) {
              return p[A.toPage(n)];
            }
            function E() {
              const n = C(d(!0)),
                e = C(d());
              n && (mn(n.button, "is-active"), en(n.button, "aria-current")),
                e &&
                  (H(e.button, "is-active"), tn(e.button, "aria-current", !0)),
                o("pagination:updated", { list: u, items: p }, n, e);
            }
            return {
              items: p,
              mount: function () {
                f(), i(["updated", "refresh"], f), i(["move", "scrolled"], E);
              },
              destroy: m,
              getAt: C,
              update: E,
            };
          },
          Sync: function (n, e, t) {
            const { list: i } = e.Elements,
              o = [];
            function a() {
              n.splides.forEach((e) => {
                var t;
                !e.isParent &&
                  ((t = e.splide),
                  [n, t].forEach((e) => {
                    const i = Nn(e),
                      a = e === n ? t : n;
                    i.on("move", (n, e, t) => {
                      a.go(a.is("loop") ? t : n);
                    }),
                      o.push(i);
                  }));
              }),
                t.isNavigation &&
                  (function () {
                    const e = Nn(n),
                      { on: t } = e;
                    t("click", l),
                      t("slide:keydown", A),
                      t(["mounted", "updated"], s),
                      tn(i, "role", "menu"),
                      o.push(e),
                      e.emit("navigation:mounted", n.splides);
                  })();
            }
            function r() {
              en(i, Tn),
                o.forEach((n) => {
                  n.destroy();
                }),
                N(o);
            }
            function s() {
              tn(
                i,
                "aria-orientation",
                "ttb" !== t.direction ? "horizontal" : null
              );
            }
            function l(e) {
              n.go(e.index);
            }
            function A(n, e) {
              Y(qn, e.key) && (l(n), pn(e));
            }
            return {
              mount: a,
              destroy: r,
              remount: function () {
                r(), a();
              },
            };
          },
          Wheel: function (n, e, t) {
            const { bind: i } = Nn(n);
            function o(i) {
              if (i.cancelable) {
                const { deltaY: o } = i;
                if (o) {
                  const a = o < 0;
                  n.go(a ? "<" : ">"),
                    (function (i) {
                      return (
                        !t.releaseWheel ||
                        n.state.is(4) ||
                        -1 !== e.Controller.getAdjacent(i)
                      );
                    })(a) && pn(i);
                }
              }
            }
            return {
              mount: function () {
                t.wheel && i(e.Elements.track, "wheel", o, Un);
              },
            };
          },
        }),
        Fn = {
          type: "slide",
          speed: 400,
          waitForTransition: !0,
          perPage: 1,
          cloneStatus: !0,
          arrows: !0,
          pagination: !0,
          interval: 5e3,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          resetProgress: !0,
          keyboard: !0,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          drag: !0,
          direction: "ltr",
          slideFocus: !0,
          trimSpace: !0,
          focusableNodes: "a, button, textarea, input, select, iframe",
          classes: Rn,
          i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
            slideX: "Go to slide %s",
            pageX: "Go to page %s",
            play: "Start autoplay",
            pause: "Pause autoplay",
          },
        };
      function Dn(n, e, t) {
        const { on: i } = Nn(n);
        return {
          mount: function () {
            i(["mounted", "refresh"], () => {
              En(() => {
                e.Slides.style(
                  "transition",
                  `opacity ${t.speed}ms ${t.easing}`
                );
              });
            });
          },
          start: function (n, t) {
            const { track: i } = e.Elements;
            an(i, "height", Bn(An(i).height)),
              En(() => {
                t(), an(i, "height", "");
              });
          },
          cancel: gn,
        };
      }
      function Hn(n, e, t) {
        const { bind: i } = Nn(n),
          { Move: o, Controller: a } = e,
          { list: r } = e.Elements;
        let s;
        function l() {
          A("");
        }
        function A(n) {
          an(r, "transition", n);
        }
        return {
          mount: function () {
            i(r, "transitionend", (n) => {
              n.target === r && s && (l(), s());
            });
          },
          start: function (e, i) {
            const r = o.toPosition(e, !0),
              l = o.getPosition(),
              c = (function (e) {
                const { rewindSpeed: i } = t;
                if (n.is("slide") && i) {
                  const n = a.getIndex(!0),
                    t = a.getEnd();
                  if ((0 === n && e >= t) || (n >= t && 0 === e)) return i;
                }
                return t.speed;
              })(e);
            wn(r - l) >= 1 && c >= 1
              ? (A(`transform ${c}ms ${t.easing}`), o.translate(r, !0), (s = i))
              : (o.jump(e), i());
          },
          cancel: l,
        };
      }
      var Zn = class {
          constructor(n, e) {
            (this.event = (function () {
              let n = {};
              function e(e, i) {
                t(e, (e, t) => {
                  const o = n[e];
                  n[e] =
                    o &&
                    o.filter((n) =>
                      n._key ? n._key !== i : i || n._namespace !== t
                    );
                });
              }
              function t(n, e) {
                O(n)
                  .join(" ")
                  .split(" ")
                  .forEach((n) => {
                    const t = n.split(".");
                    e(t[0], t[1]);
                  });
              }
              return {
                on: function (e, i, o, a = 10) {
                  t(e, (e, t) => {
                    (n[e] = n[e] || []),
                      q(n[e], {
                        _event: e,
                        _callback: i,
                        _namespace: t,
                        _priority: a,
                        _key: o,
                      }).sort((n, e) => n._priority - e._priority);
                  });
                },
                off: e,
                offBy: function (t) {
                  J(n, (n, i) => {
                    e(i, t);
                  });
                },
                emit: function (e) {
                  (n[e] || []).forEach((n) => {
                    n._callback.apply(n, F(arguments, 1));
                  });
                },
                destroy: function () {
                  n = {};
                },
              };
            })()),
              (this.Components = {}),
              (this.state = (function (n) {
                let e = n;
                return {
                  set: function (n) {
                    e = n;
                  },
                  is: function (n) {
                    return Y(O(n), e);
                  },
                };
              })(1)),
              (this.splides = []),
              (this._options = {}),
              (this._Extensions = {});
            const t = S(n) ? un(document, n) : n;
            Cn(t, t + " is invalid."),
              (this.root = t),
              nn(Fn, Zn.defaults),
              nn(nn(this._options, Fn), e || {});
          }
          mount(n, e) {
            const { state: t, Components: i } = this;
            Cn(t.is([1, 5]), "Already mounted!"),
              t.set(1),
              (this._Components = i),
              (this._Transition =
                e || this._Transition || (this.is("fade") ? Dn : Hn)),
              (this._Extensions = n || this._Extensions);
            return (
              J(
                K({}, Xn, this._Extensions, { Transition: this._Transition }),
                (n, e) => {
                  const t = n(this, i, this._options);
                  (i[e] = t), t.setup && t.setup();
                }
              ),
              J(i, (n) => {
                n.mount && n.mount();
              }),
              this.emit("mounted"),
              H(this.root, "is-initialized"),
              t.set(3),
              this.emit("ready"),
              this
            );
          }
          sync(n) {
            return (
              this.splides.push({ splide: n }),
              n.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._Components.Sync.remount(), n.Components.Sync.remount()),
              this
            );
          }
          go(n) {
            return this._Components.Controller.go(n), this;
          }
          on(n, e) {
            return this.event.on(n, e, null, 20), this;
          }
          off(n) {
            return this.event.off(n), this;
          }
          emit(n) {
            return this.event.emit(n, ...F(arguments, 1)), this;
          }
          add(n, e) {
            return this._Components.Slides.add(n, e), this;
          }
          remove(n) {
            return this._Components.Slides.remove(n), this;
          }
          is(n) {
            return this._options.type === n;
          }
          refresh() {
            return this.emit("refresh"), this;
          }
          destroy(n = !0) {
            const { event: e, state: t } = this;
            return (
              t.is(1)
                ? e.on("ready", this.destroy.bind(this, n), this)
                : (J(
                    this._Components,
                    (e) => {
                      e.destroy && e.destroy(n);
                    },
                    !0
                  ),
                  e.emit("destroy"),
                  e.destroy(),
                  n && N(this.splides),
                  t.set(5)),
              this
            );
          }
          get options() {
            return this._options;
          }
          set options(n) {
            const { _options: e } = this;
            nn(e, n), this.state.is(1) || this.emit("updated", e);
          }
          get length() {
            return this._Components.Slides.getLength(!0);
          }
          get index() {
            return this._Components.Controller.getIndex();
          }
        },
        $n = Zn;
      ($n.defaults = {}), ($n.STATES = L);
      var Qn = [
        ["mounted", "onMounted"],
        ["ready", "onReady"],
        ["move", "onMove"],
        ["moved", "onMoved"],
        ["click", "onClick"],
        ["active", "onActive"],
        ["inactive", "onInactive"],
        ["visible", "onVisible"],
        ["hidden", "onHidden"],
        ["refresh", "onRefresh"],
        ["updated", "onUpdated"],
        ["resize", "onResize"],
        ["resized", "onResized"],
        ["drag", "onDrag"],
        ["dragging", "onDragging"],
        ["dragged", "onDragged"],
        ["scroll", "onScroll"],
        ["scrolled", "onScrolled"],
        ["destroy", "onDestroy"],
        ["arrows:mounted", "onArrowsMounted"],
        ["arrows:updated", "onArrowsUpdated"],
        ["pagination:mounted", "onPaginationMounted"],
        ["pagination:updated", "onPaginationUpdated"],
        ["navigation:mounted", "onNavigationMounted"],
        ["autoplay:play", "onAutoplayPlay"],
        ["autoplay:playing", "onAutoplayPlaying"],
        ["autoplay:pause", "onAutoplayPause"],
        ["lazyload:loaded", "onLazyLoadLoaded"],
      ];
      function Gn(...n) {
        return n.filter(Boolean).join(" ");
      }
      function Vn(n) {
        return null !== n && "object" == typeof n;
      }
      function Jn(n, e) {
        const t = n;
        return (
          (function (n, e) {
            if (n) {
              const t = Object.keys(n);
              for (let i = 0; i < t.length; i++) {
                const o = t[i];
                if ("__proto__" !== o && !1 === e(n[o], o)) break;
              }
            }
          })(e, (n, e) => {
            Array.isArray(n)
              ? (t[e] = n.slice())
              : Vn(n)
              ? (t[e] = Jn(Vn(t[e]) ? t[e] : {}, n))
              : (t[e] = n);
          }),
          t
        );
      }
      var Kn = class extends o.a.Component {
          constructor() {
            super(...arguments),
              (this.splideRef = o.a.createRef()),
              (this.slides = []);
          }
          componentDidMount() {
            const { options: n, Extensions: e, Transition: t } = this.props,
              { current: i } = this.splideRef;
            i &&
              ((this.splide = new $n(i, n)),
              this.bind(this.splide),
              this.splide.mount(e, t),
              (this.options = Jn({}, n || {})),
              (this.slides = this.getSlides()));
          }
          componentWillUnmount() {
            this.splide && (this.splide.destroy(), (this.splide = void 0)),
              (this.options = void 0),
              (this.slides.length = 0);
          }
          componentDidUpdate() {
            if (!this.splide) return;
            const { options: n } = this.props;
            n &&
              !(function n(e, t) {
                if (Array.isArray(e) && Array.isArray(t))
                  return (
                    e.length === t.length && !e.some((e, i) => !n(e, t[i]))
                  );
                if (Vn(e) && Vn(t)) {
                  const i = Object.keys(e),
                    o = Object.keys(t);
                  return (
                    i.length === o.length &&
                    !i.some(
                      (i) =>
                        !Object.prototype.hasOwnProperty.call(t, i) ||
                        !n(e[i], t[i])
                    )
                  );
                }
                return e === t;
              })(this.options, n) &&
              ((this.splide.options = n), (this.options = Jn({}, n)));
            const e = this.getSlides();
            var t, i;
            (t = this.slides),
              (i = e),
              (t.length !== i.length || t.some((n, e) => n !== i[e])) &&
                (this.splide.refresh(), (this.slides = e));
          }
          sync(n) {
            var e;
            null == (e = this.splide) || e.sync(n);
          }
          go(n) {
            var e;
            null == (e = this.splide) || e.go(n);
          }
          getSlides() {
            var n;
            if (this.splide) {
              const e =
                null == (n = this.splide.Components.Elements)
                  ? void 0
                  : n.list.children;
              return (e && Array.prototype.slice.call(e)) || [];
            }
            return [];
          }
          bind(n) {
            Qn.forEach(([e, t]) => {
              const i = this.props[t];
              "function" == typeof i &&
                n.on(e, (...e) => {
                  i(n, ...e);
                });
            });
          }
          renderTrack() {
            return o.a.createElement(
              "div",
              { className: "splide__track" },
              o.a.createElement(
                "ul",
                { className: "splide__list" },
                this.props.children
              )
            );
          }
          render() {
            const {
              id: n,
              className: e,
              hasSliderWrapper: t,
              hasAutoplayProgress: i,
              hasAutoplayControls: a,
              playButtonLabel: r = "Play",
              pauseButtonLabel: s = "Pause",
              renderControls: l,
            } = this.props;
            return o.a.createElement(
              "div",
              { id: n, className: Gn("splide", e), ref: this.splideRef },
              t
                ? o.a.createElement(
                    "div",
                    { className: "splide__slider" },
                    this.renderTrack()
                  )
                : this.renderTrack(),
              i &&
                o.a.createElement(
                  "div",
                  { className: "splide__progress" },
                  o.a.createElement("div", {
                    className: "splide__progress__bar",
                  })
                ),
              a &&
                o.a.createElement(
                  "div",
                  { className: "splide__autoplay" },
                  o.a.createElement("button", { className: "splide__play" }, r),
                  o.a.createElement("button", { className: "splide__pause" }, s)
                ),
              l && l()
            );
          }
        },
        ne = ({ children: n, className: e, ...t }) =>
          o.a.createElement(
            "li",
            { className: Gn("splide__slide", e), ...t },
            n
          ),
        ee = function (n) {
          var e = n.artists;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              "section",
              { className: "artistTiles desktop" },
              e.map(function (n, e) {
                return (
                  e < 5 &&
                  o.a.createElement(v.a, {
                    key: "artist".concat(e),
                    artist: n.attributes,
                  })
                );
              })
            ),
            o.a.createElement(
              "section",
              { className: "artistTiles tablet" },
              o.a.createElement(
                Kn,
                {
                  options: {
                    width: "100vw",
                    gap: "1rem",
                    focus: "center",
                    pagination: !0,
                    keyboard: "focused",
                    arrows: !0,
                    speed: 400,
                    waitForTransition: !1,
                    easing: "ease",
                    padding: 10,
                    perPage: 2,
                  },
                  renderControls: function () {
                    return o.a.createElement(
                      "div",
                      { className: "splide__arrows" },
                      o.a.createElement(
                        "button",
                        { class: "splide__arrow splide__arrow--prev" },
                        o.a.createElement("img", { src: z.a })
                      ),
                      o.a.createElement(
                        "button",
                        { class: "splide__arrow splide__arrow--next" },
                        o.a.createElement("img", { src: k.a })
                      )
                    );
                  },
                },
                e.map(function (n, e) {
                  return (
                    e < 5 &&
                    o.a.createElement(
                      ne,
                      { key: "splide".concat(e) },
                      o.a.createElement(v.a, {
                        key: "artist".concat(e),
                        artist: n.attributes,
                      })
                    )
                  );
                })
              )
            )
          );
        },
        te = t(589),
        ie = { insert: "head", singleton: !1 },
        oe = (c()(te.a, ie), te.a.locals, t(593)),
        ae = t.n(oe);
      function re(n) {
        return (re =
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
      function se(n, e, t, i, o, a, r) {
        try {
          var s = n[a](r),
            l = s.value;
        } catch (A) {
          return void t(A);
        }
        s.done ? e(l) : Promise.resolve(l).then(i, o);
      }
      function le(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (i, o) {
            var a = n.apply(e, t);
            function r(n) {
              se(a, i, o, r, s, "next", n);
            }
            function s(n) {
              se(a, i, o, r, s, "throw", n);
            }
            r(void 0);
          });
        };
      }
      function Ae(n, e) {
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
        }
      }
      function ce(n, e) {
        return (ce =
          Object.setPrototypeOf ||
          function (n, e) {
            return (n.__proto__ = e), n;
          })(n, e);
      }
      function de(n) {
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
            i = fe(n);
          if (e) {
            var o = fe(this).constructor;
            t = Reflect.construct(i, arguments, o);
          } else t = i.apply(this, arguments);
          return pe(this, t);
        };
      }
      function pe(n, e) {
        if (e && ("object" === re(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return ue(n);
      }
      function ue(n) {
        if (void 0 === n)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return n;
      }
      function fe(n) {
        return (fe = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (n) {
              return n.__proto__ || Object.getPrototypeOf(n);
            })(n);
      }
      var me = (function (n) {
        !(function (n, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (n.prototype = Object.create(e && e.prototype, {
            constructor: { value: n, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            e && ce(n, e);
        })(l, n);
        var e,
          t,
          i,
          a = de(l);
        function l(n) {
          var e, t, i, o;
          return (
            (function (n, e) {
              if (!(n instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, l),
            (e = a.call(this, n)),
            (t = ue(e)),
            (i = "fetchData"),
            (o = le(
              regeneratorRuntime.mark(function n() {
                var e, t, i;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (e = r.a.stringify({
                            filters: { featured: { $eq: !0 } },
                          })),
                          (t = ""
                            .concat(
                              "https://globalpeacerhythms.herokuapp.com",
                              "/api/artists?"
                            )
                            .concat(e, "&populate=*")),
                          console.log(t),
                          (n.next = 5),
                          fetch(t, {
                            method: "get",
                            headers: { "Content-Type": "application/json" },
                          })
                        );
                      case 5:
                        return (i = n.sent), n.abrupt("return", i);
                      case 7:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )),
            i in t
              ? Object.defineProperty(t, i, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[i] = o),
            (e.state = { artists: [] }),
            e
          );
        }
        return (
          (e = l),
          (t = [
            {
              key: "componentDidMount",
              value: function () {
                var n = this;
                this.fetchData()
                  .then(function (n) {
                    return n.json();
                  })
                  .then(function (e) {
                    n.setState({ artists: e.data });
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var n = this;
                return o.a.createElement(
                  "div",
                  null,
                  o.a.createElement(s.a, null),
                  o.a.createElement(
                    "div",
                    { className: "homeBanner" },
                    o.a.createElement(
                      "div",
                      { className: "bannerContent" },
                      o.a.createElement(
                        "div",
                        { className: "slogan" },
                        "Create a Better World Through Music"
                      ),
                      o.a.createElement(
                        "p",
                        { className: "tagline" },
                        "Global Peace Rhythms features artists who are making positive changes on earth."
                      ),
                      o.a.createElement(
                        "button",
                        {
                          className: "blueButton",
                          onClick: function () {
                            return n.props.history.push("./about");
                          },
                        },
                        "LEARN MORE"
                      )
                    ),
                    o.a.createElement("img", { src: ae.a })
                  ),
                  o.a.createElement(
                    "main",
                    null,
                    o.a.createElement("h1", null, "Featured Artists"),
                    o.a.createElement(
                      "div",
                      { className: "featuredArtists" },
                      this.state.artists &&
                        this.state.artists.length > 0 &&
                        o.a.createElement(ee, { artists: this.state.artists }),
                      o.a.createElement(m, null)
                    ),
                    o.a.createElement(y, null)
                  ),
                  o.a.createElement(B.a, null)
                );
              },
            },
          ]) && Ae(e.prototype, t),
          i && Ae(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          l
        );
      })(o.a.Component);
      e.default = me;
    },
  },
]);
