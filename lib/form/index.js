import { defineComponent as Ep, ref as Xr, onMounted as xp, watch as Sp, resolveComponent as di, createBlock as Dn, openBlock as ze, mergeProps as Zr, unref as qt, withCtx as Gn, createElementBlock as kr, createVNode as Cp, Fragment as vi, renderList as Gl, createCommentVNode as Rn, resolveDynamicComponent as hi, renderSlot as pi, nextTick as Tp } from "vue";
var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dp(Xt) {
  return Xt && Xt.__esModule && Object.prototype.hasOwnProperty.call(Xt, "default") ? Xt.default : Xt;
}
var ir = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var Rp = ir.exports, Wl;
function Ip() {
  return Wl || (Wl = 1, function(Xt, In) {
    (function() {
      var o, i = "4.17.21", t = 200, r = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", f = "Expected a function", l = "Invalid `variable` option passed into `_.template`", u = "__lodash_hash_undefined__", g = 500, E = "__lodash_placeholder__", h = 1, y = 2, v = 4, s = 1, d = 2, c = 1, m = 2, p = 4, A = 8, x = 16, S = 32, D = 64, R = 128, P = 256, B = 512, I = 30, C = "...", M = 800, F = 16, w = 1, O = 2, U = 3, b = 1 / 0, Q = 9007199254740991, j = 17976931348623157e292, z = NaN, W = 4294967295, q = W - 1, ut = W >>> 1, _ = [
        ["ary", R],
        ["bind", c],
        ["bindKey", m],
        ["curry", A],
        ["curryRight", x],
        ["flip", B],
        ["partial", S],
        ["partialRight", D],
        ["rearg", P]
      ], ft = "[object Arguments]", at = "[object Array]", tt = "[object AsyncFunction]", et = "[object Boolean]", lt = "[object Date]", mt = "[object DOMException]", Dt = "[object Error]", Ht = "[object Function]", fe = "[object GeneratorFunction]", _t = "[object Map]", Kt = "[object Number]", vn = "[object Null]", te = "[object Object]", re = "[object Promise]", He = "[object Proxy]", Se = "[object RegExp]", zt = "[object Set]", je = "[object String]", we = "[object Symbol]", Ke = "[object Undefined]", Ce = "[object WeakMap]", hn = "[object WeakSet]", Te = "[object ArrayBuffer]", he = "[object DataView]", pe = "[object Float32Array]", De = "[object Float64Array]", Ue = "[object Int8Array]", ct = "[object Int16Array]", nt = "[object Int32Array]", At = "[object Uint8Array]", Et = "[object Uint8ClampedArray]", it = "[object Uint16Array]", rt = "[object Uint32Array]", vt = /\b__p \+= '';/g, yt = /\b(__p \+=) '' \+/g, Rt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Qt = /&(?:amp|lt|gt|quot|#39);/g, oe = /[&<>"']/g, Re = RegExp(Qt.source), ie = RegExp(oe.source), pn = /<%-([\s\S]+?)%>/g, Pn = /<%([\s\S]+?)%>/g, ar = /<%=([\s\S]+?)%>/g, Kl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jl = /^\w*$/, Xl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _r = /[\\^$.*+?()[\]{}|]/g, Zl = RegExp(_r.source), to = /^\s+/, kl = /\s/, ql = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _l = /\{\n\/\* \[wrapped with (.+)\] \*/, tu = /,? & /, eu = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, nu = /[()=,{}\[\]\/\s]/, ru = /\\(\\)?/g, ou = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, mi = /\w*$/, iu = /^[-+]0x[0-9a-f]+$/i, au = /^0b[01]+$/i, lu = /^\[object .+?Constructor\]$/, uu = /^0o[0-7]+$/i, fu = /^(?:0|[1-9]\d*)$/, su = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, lr = /($^)/, cu = /['\n\r\u2028\u2029\\]/g, ur = "\\ud800-\\udfff", du = "\\u0300-\\u036f", vu = "\\ufe20-\\ufe2f", hu = "\\u20d0-\\u20ff", Ai = du + vu + hu, yi = "\\u2700-\\u27bf", Ei = "a-z\\xdf-\\xf6\\xf8-\\xff", pu = "\\xac\\xb1\\xd7\\xf7", gu = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", mu = "\\u2000-\\u206f", Au = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xi = "A-Z\\xc0-\\xd6\\xd8-\\xde", Si = "\\ufe0e\\ufe0f", Ci = pu + gu + mu + Au, eo = "['’]", yu = "[" + ur + "]", Ti = "[" + Ci + "]", fr = "[" + Ai + "]", Di = "\\d+", Eu = "[" + yi + "]", Ri = "[" + Ei + "]", Ii = "[^" + ur + Ci + Di + yi + Ei + xi + "]", no = "\\ud83c[\\udffb-\\udfff]", xu = "(?:" + fr + "|" + no + ")", Pi = "[^" + ur + "]", ro = "(?:\\ud83c[\\udde6-\\uddff]){2}", oo = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mn = "[" + xi + "]", Mi = "\\u200d", Ni = "(?:" + Ri + "|" + Ii + ")", Su = "(?:" + Mn + "|" + Ii + ")", Bi = "(?:" + eo + "(?:d|ll|m|re|s|t|ve))?", Li = "(?:" + eo + "(?:D|LL|M|RE|S|T|VE))?", Fi = xu + "?", Oi = "[" + Si + "]?", Cu = "(?:" + Mi + "(?:" + [Pi, ro, oo].join("|") + ")" + Oi + Fi + ")*", Tu = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Du = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Hi = Oi + Fi + Cu, Ru = "(?:" + [Eu, ro, oo].join("|") + ")" + Hi, Iu = "(?:" + [Pi + fr + "?", fr, ro, oo, yu].join("|") + ")", Pu = RegExp(eo, "g"), Mu = RegExp(fr, "g"), io = RegExp(no + "(?=" + no + ")|" + Iu + Hi, "g"), Nu = RegExp([
        Mn + "?" + Ri + "+" + Bi + "(?=" + [Ti, Mn, "$"].join("|") + ")",
        Su + "+" + Li + "(?=" + [Ti, Mn + Ni, "$"].join("|") + ")",
        Mn + "?" + Ni + "+" + Bi,
        Mn + "+" + Li,
        Du,
        Tu,
        Di,
        Ru
      ].join("|"), "g"), Bu = RegExp("[" + Mi + ur + Ai + Si + "]"), Lu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fu = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Ou = -1, Ut = {};
      Ut[pe] = Ut[De] = Ut[Ue] = Ut[ct] = Ut[nt] = Ut[At] = Ut[Et] = Ut[it] = Ut[rt] = !0, Ut[ft] = Ut[at] = Ut[Te] = Ut[et] = Ut[he] = Ut[lt] = Ut[Dt] = Ut[Ht] = Ut[_t] = Ut[Kt] = Ut[te] = Ut[Se] = Ut[zt] = Ut[je] = Ut[Ce] = !1;
      var wt = {};
      wt[ft] = wt[at] = wt[Te] = wt[he] = wt[et] = wt[lt] = wt[pe] = wt[De] = wt[Ue] = wt[ct] = wt[nt] = wt[_t] = wt[Kt] = wt[te] = wt[Se] = wt[zt] = wt[je] = wt[we] = wt[At] = wt[Et] = wt[it] = wt[rt] = !0, wt[Dt] = wt[Ht] = wt[Ce] = !1;
      var Hu = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, wu = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Uu = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, bu = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, $u = parseFloat, Qu = parseInt, wi = typeof qr == "object" && qr && qr.Object === Object && qr, Yu = typeof self == "object" && self && self.Object === Object && self, Zt = wi || Yu || Function("return this")(), ao = In && !In.nodeType && In, gn = ao && !0 && Xt && !Xt.nodeType && Xt, Ui = gn && gn.exports === ao, lo = Ui && wi.process, Ie = function() {
        try {
          var G = gn && gn.require && gn.require("util").types;
          return G || lo && lo.binding && lo.binding("util");
        } catch {
        }
      }(), bi = Ie && Ie.isArrayBuffer, $i = Ie && Ie.isDate, Qi = Ie && Ie.isMap, Yi = Ie && Ie.isRegExp, zi = Ie && Ie.isSet, Gi = Ie && Ie.isTypedArray;
      function ge(G, J, K) {
        switch (K.length) {
          case 0:
            return G.call(J);
          case 1:
            return G.call(J, K[0]);
          case 2:
            return G.call(J, K[0], K[1]);
          case 3:
            return G.call(J, K[0], K[1], K[2]);
        }
        return G.apply(J, K);
      }
      function zu(G, J, K, st) {
        for (var xt = -1, Bt = G == null ? 0 : G.length; ++xt < Bt; ) {
          var Vt = G[xt];
          J(st, Vt, K(Vt), G);
        }
        return st;
      }
      function Pe(G, J) {
        for (var K = -1, st = G == null ? 0 : G.length; ++K < st && J(G[K], K, G) !== !1; )
          ;
        return G;
      }
      function Gu(G, J) {
        for (var K = G == null ? 0 : G.length; K-- && J(G[K], K, G) !== !1; )
          ;
        return G;
      }
      function Wi(G, J) {
        for (var K = -1, st = G == null ? 0 : G.length; ++K < st; )
          if (!J(G[K], K, G))
            return !1;
        return !0;
      }
      function rn(G, J) {
        for (var K = -1, st = G == null ? 0 : G.length, xt = 0, Bt = []; ++K < st; ) {
          var Vt = G[K];
          J(Vt, K, G) && (Bt[xt++] = Vt);
        }
        return Bt;
      }
      function sr(G, J) {
        var K = G == null ? 0 : G.length;
        return !!K && Nn(G, J, 0) > -1;
      }
      function uo(G, J, K) {
        for (var st = -1, xt = G == null ? 0 : G.length; ++st < xt; )
          if (K(J, G[st]))
            return !0;
        return !1;
      }
      function bt(G, J) {
        for (var K = -1, st = G == null ? 0 : G.length, xt = Array(st); ++K < st; )
          xt[K] = J(G[K], K, G);
        return xt;
      }
      function on(G, J) {
        for (var K = -1, st = J.length, xt = G.length; ++K < st; )
          G[xt + K] = J[K];
        return G;
      }
      function fo(G, J, K, st) {
        var xt = -1, Bt = G == null ? 0 : G.length;
        for (st && Bt && (K = G[++xt]); ++xt < Bt; )
          K = J(K, G[xt], xt, G);
        return K;
      }
      function Wu(G, J, K, st) {
        var xt = G == null ? 0 : G.length;
        for (st && xt && (K = G[--xt]); xt--; )
          K = J(K, G[xt], xt, G);
        return K;
      }
      function so(G, J) {
        for (var K = -1, st = G == null ? 0 : G.length; ++K < st; )
          if (J(G[K], K, G))
            return !0;
        return !1;
      }
      var Vu = co("length");
      function ju(G) {
        return G.split("");
      }
      function Ku(G) {
        return G.match(eu) || [];
      }
      function Vi(G, J, K) {
        var st;
        return K(G, function(xt, Bt, Vt) {
          if (J(xt, Bt, Vt))
            return st = Bt, !1;
        }), st;
      }
      function cr(G, J, K, st) {
        for (var xt = G.length, Bt = K + (st ? 1 : -1); st ? Bt-- : ++Bt < xt; )
          if (J(G[Bt], Bt, G))
            return Bt;
        return -1;
      }
      function Nn(G, J, K) {
        return J === J ? af(G, J, K) : cr(G, ji, K);
      }
      function Ju(G, J, K, st) {
        for (var xt = K - 1, Bt = G.length; ++xt < Bt; )
          if (st(G[xt], J))
            return xt;
        return -1;
      }
      function ji(G) {
        return G !== G;
      }
      function Ki(G, J) {
        var K = G == null ? 0 : G.length;
        return K ? ho(G, J) / K : z;
      }
      function co(G) {
        return function(J) {
          return J == null ? o : J[G];
        };
      }
      function vo(G) {
        return function(J) {
          return G == null ? o : G[J];
        };
      }
      function Ji(G, J, K, st, xt) {
        return xt(G, function(Bt, Vt, Ot) {
          K = st ? (st = !1, Bt) : J(K, Bt, Vt, Ot);
        }), K;
      }
      function Xu(G, J) {
        var K = G.length;
        for (G.sort(J); K--; )
          G[K] = G[K].value;
        return G;
      }
      function ho(G, J) {
        for (var K, st = -1, xt = G.length; ++st < xt; ) {
          var Bt = J(G[st]);
          Bt !== o && (K = K === o ? Bt : K + Bt);
        }
        return K;
      }
      function po(G, J) {
        for (var K = -1, st = Array(G); ++K < G; )
          st[K] = J(K);
        return st;
      }
      function Zu(G, J) {
        return bt(J, function(K) {
          return [K, G[K]];
        });
      }
      function Xi(G) {
        return G && G.slice(0, _i(G) + 1).replace(to, "");
      }
      function me(G) {
        return function(J) {
          return G(J);
        };
      }
      function go(G, J) {
        return bt(J, function(K) {
          return G[K];
        });
      }
      function Wn(G, J) {
        return G.has(J);
      }
      function Zi(G, J) {
        for (var K = -1, st = G.length; ++K < st && Nn(J, G[K], 0) > -1; )
          ;
        return K;
      }
      function ki(G, J) {
        for (var K = G.length; K-- && Nn(J, G[K], 0) > -1; )
          ;
        return K;
      }
      function ku(G, J) {
        for (var K = G.length, st = 0; K--; )
          G[K] === J && ++st;
        return st;
      }
      var qu = vo(Hu), _u = vo(wu);
      function tf(G) {
        return "\\" + bu[G];
      }
      function ef(G, J) {
        return G == null ? o : G[J];
      }
      function Bn(G) {
        return Bu.test(G);
      }
      function nf(G) {
        return Lu.test(G);
      }
      function rf(G) {
        for (var J, K = []; !(J = G.next()).done; )
          K.push(J.value);
        return K;
      }
      function mo(G) {
        var J = -1, K = Array(G.size);
        return G.forEach(function(st, xt) {
          K[++J] = [xt, st];
        }), K;
      }
      function qi(G, J) {
        return function(K) {
          return G(J(K));
        };
      }
      function an(G, J) {
        for (var K = -1, st = G.length, xt = 0, Bt = []; ++K < st; ) {
          var Vt = G[K];
          (Vt === J || Vt === E) && (G[K] = E, Bt[xt++] = K);
        }
        return Bt;
      }
      function dr(G) {
        var J = -1, K = Array(G.size);
        return G.forEach(function(st) {
          K[++J] = st;
        }), K;
      }
      function of(G) {
        var J = -1, K = Array(G.size);
        return G.forEach(function(st) {
          K[++J] = [st, st];
        }), K;
      }
      function af(G, J, K) {
        for (var st = K - 1, xt = G.length; ++st < xt; )
          if (G[st] === J)
            return st;
        return -1;
      }
      function lf(G, J, K) {
        for (var st = K + 1; st--; )
          if (G[st] === J)
            return st;
        return st;
      }
      function Ln(G) {
        return Bn(G) ? ff(G) : Vu(G);
      }
      function be(G) {
        return Bn(G) ? sf(G) : ju(G);
      }
      function _i(G) {
        for (var J = G.length; J-- && kl.test(G.charAt(J)); )
          ;
        return J;
      }
      var uf = vo(Uu);
      function ff(G) {
        for (var J = io.lastIndex = 0; io.test(G); )
          ++J;
        return J;
      }
      function sf(G) {
        return G.match(io) || [];
      }
      function cf(G) {
        return G.match(Nu) || [];
      }
      var df = function G(J) {
        J = J == null ? Zt : Fn.defaults(Zt.Object(), J, Fn.pick(Zt, Fu));
        var K = J.Array, st = J.Date, xt = J.Error, Bt = J.Function, Vt = J.Math, Ot = J.Object, Ao = J.RegExp, vf = J.String, Me = J.TypeError, vr = K.prototype, hf = Bt.prototype, On = Ot.prototype, hr = J["__core-js_shared__"], pr = hf.toString, Ft = On.hasOwnProperty, pf = 0, ta = function() {
          var e = /[^.]+$/.exec(hr && hr.keys && hr.keys.IE_PROTO || "");
          return e ? "Symbol(src)_1." + e : "";
        }(), gr = On.toString, gf = pr.call(Ot), mf = Zt._, Af = Ao(
          "^" + pr.call(Ft).replace(_r, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), mr = Ui ? J.Buffer : o, ln = J.Symbol, Ar = J.Uint8Array, ea = mr ? mr.allocUnsafe : o, yr = qi(Ot.getPrototypeOf, Ot), na = Ot.create, ra = On.propertyIsEnumerable, Er = vr.splice, oa = ln ? ln.isConcatSpreadable : o, Vn = ln ? ln.iterator : o, mn = ln ? ln.toStringTag : o, xr = function() {
          try {
            var e = Sn(Ot, "defineProperty");
            return e({}, "", {}), e;
          } catch {
          }
        }(), yf = J.clearTimeout !== Zt.clearTimeout && J.clearTimeout, Ef = st && st.now !== Zt.Date.now && st.now, xf = J.setTimeout !== Zt.setTimeout && J.setTimeout, Sr = Vt.ceil, Cr = Vt.floor, yo = Ot.getOwnPropertySymbols, Sf = mr ? mr.isBuffer : o, ia = J.isFinite, Cf = vr.join, Tf = qi(Ot.keys, Ot), jt = Vt.max, ee = Vt.min, Df = st.now, Rf = J.parseInt, aa = Vt.random, If = vr.reverse, Eo = Sn(J, "DataView"), jn = Sn(J, "Map"), xo = Sn(J, "Promise"), Hn = Sn(J, "Set"), Kn = Sn(J, "WeakMap"), Jn = Sn(Ot, "create"), Tr = Kn && new Kn(), wn = {}, Pf = Cn(Eo), Mf = Cn(jn), Nf = Cn(xo), Bf = Cn(Hn), Lf = Cn(Kn), Dr = ln ? ln.prototype : o, Xn = Dr ? Dr.valueOf : o, la = Dr ? Dr.toString : o;
        function L(e) {
          if (Yt(e) && !St(e) && !(e instanceof Mt)) {
            if (e instanceof Ne)
              return e;
            if (Ft.call(e, "__wrapped__"))
              return ul(e);
          }
          return new Ne(e);
        }
        var Un = /* @__PURE__ */ function() {
          function e() {
          }
          return function(n) {
            if (!$t(n))
              return {};
            if (na)
              return na(n);
            e.prototype = n;
            var a = new e();
            return e.prototype = o, a;
          };
        }();
        function Rr() {
        }
        function Ne(e, n) {
          this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
        }
        L.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: pn,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Pn,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ar,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: L
          }
        }, L.prototype = Rr.prototype, L.prototype.constructor = L, Ne.prototype = Un(Rr.prototype), Ne.prototype.constructor = Ne;
        function Mt(e) {
          this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = [];
        }
        function Ff() {
          var e = new Mt(this.__wrapped__);
          return e.__actions__ = se(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = se(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = se(this.__views__), e;
        }
        function Of() {
          if (this.__filtered__) {
            var e = new Mt(this);
            e.__dir__ = -1, e.__filtered__ = !0;
          } else
            e = this.clone(), e.__dir__ *= -1;
          return e;
        }
        function Hf() {
          var e = this.__wrapped__.value(), n = this.__dir__, a = St(e), T = n < 0, N = a ? e.length : 0, H = Ks(0, N, this.__views__), $ = H.start, Y = H.end, V = Y - $, X = T ? Y : $ - 1, Z = this.__iteratees__, k = Z.length, ot = 0, dt = ee(V, this.__takeCount__);
          if (!a || !T && N == V && dt == V)
            return Ba(e, this.__actions__);
          var pt = [];
          t:
            for (; V-- && ot < dt; ) {
              X += n;
              for (var Tt = -1, gt = e[X]; ++Tt < k; ) {
                var Pt = Z[Tt], Nt = Pt.iteratee, Ee = Pt.type, ue = Nt(gt);
                if (Ee == O)
                  gt = ue;
                else if (!ue) {
                  if (Ee == w)
                    continue t;
                  break t;
                }
              }
              pt[ot++] = gt;
            }
          return pt;
        }
        Mt.prototype = Un(Rr.prototype), Mt.prototype.constructor = Mt;
        function An(e) {
          var n = -1, a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a; ) {
            var T = e[n];
            this.set(T[0], T[1]);
          }
        }
        function wf() {
          this.__data__ = Jn ? Jn(null) : {}, this.size = 0;
        }
        function Uf(e) {
          var n = this.has(e) && delete this.__data__[e];
          return this.size -= n ? 1 : 0, n;
        }
        function bf(e) {
          var n = this.__data__;
          if (Jn) {
            var a = n[e];
            return a === u ? o : a;
          }
          return Ft.call(n, e) ? n[e] : o;
        }
        function $f(e) {
          var n = this.__data__;
          return Jn ? n[e] !== o : Ft.call(n, e);
        }
        function Qf(e, n) {
          var a = this.__data__;
          return this.size += this.has(e) ? 0 : 1, a[e] = Jn && n === o ? u : n, this;
        }
        An.prototype.clear = wf, An.prototype.delete = Uf, An.prototype.get = bf, An.prototype.has = $f, An.prototype.set = Qf;
        function Je(e) {
          var n = -1, a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a; ) {
            var T = e[n];
            this.set(T[0], T[1]);
          }
        }
        function Yf() {
          this.__data__ = [], this.size = 0;
        }
        function zf(e) {
          var n = this.__data__, a = Ir(n, e);
          if (a < 0)
            return !1;
          var T = n.length - 1;
          return a == T ? n.pop() : Er.call(n, a, 1), --this.size, !0;
        }
        function Gf(e) {
          var n = this.__data__, a = Ir(n, e);
          return a < 0 ? o : n[a][1];
        }
        function Wf(e) {
          return Ir(this.__data__, e) > -1;
        }
        function Vf(e, n) {
          var a = this.__data__, T = Ir(a, e);
          return T < 0 ? (++this.size, a.push([e, n])) : a[T][1] = n, this;
        }
        Je.prototype.clear = Yf, Je.prototype.delete = zf, Je.prototype.get = Gf, Je.prototype.has = Wf, Je.prototype.set = Vf;
        function Xe(e) {
          var n = -1, a = e == null ? 0 : e.length;
          for (this.clear(); ++n < a; ) {
            var T = e[n];
            this.set(T[0], T[1]);
          }
        }
        function jf() {
          this.size = 0, this.__data__ = {
            hash: new An(),
            map: new (jn || Je)(),
            string: new An()
          };
        }
        function Kf(e) {
          var n = $r(this, e).delete(e);
          return this.size -= n ? 1 : 0, n;
        }
        function Jf(e) {
          return $r(this, e).get(e);
        }
        function Xf(e) {
          return $r(this, e).has(e);
        }
        function Zf(e, n) {
          var a = $r(this, e), T = a.size;
          return a.set(e, n), this.size += a.size == T ? 0 : 1, this;
        }
        Xe.prototype.clear = jf, Xe.prototype.delete = Kf, Xe.prototype.get = Jf, Xe.prototype.has = Xf, Xe.prototype.set = Zf;
        function yn(e) {
          var n = -1, a = e == null ? 0 : e.length;
          for (this.__data__ = new Xe(); ++n < a; )
            this.add(e[n]);
        }
        function kf(e) {
          return this.__data__.set(e, u), this;
        }
        function qf(e) {
          return this.__data__.has(e);
        }
        yn.prototype.add = yn.prototype.push = kf, yn.prototype.has = qf;
        function $e(e) {
          var n = this.__data__ = new Je(e);
          this.size = n.size;
        }
        function _f() {
          this.__data__ = new Je(), this.size = 0;
        }
        function ts(e) {
          var n = this.__data__, a = n.delete(e);
          return this.size = n.size, a;
        }
        function es(e) {
          return this.__data__.get(e);
        }
        function ns(e) {
          return this.__data__.has(e);
        }
        function rs(e, n) {
          var a = this.__data__;
          if (a instanceof Je) {
            var T = a.__data__;
            if (!jn || T.length < t - 1)
              return T.push([e, n]), this.size = ++a.size, this;
            a = this.__data__ = new Xe(T);
          }
          return a.set(e, n), this.size = a.size, this;
        }
        $e.prototype.clear = _f, $e.prototype.delete = ts, $e.prototype.get = es, $e.prototype.has = ns, $e.prototype.set = rs;
        function ua(e, n) {
          var a = St(e), T = !a && Tn(e), N = !a && !T && dn(e), H = !a && !T && !N && Yn(e), $ = a || T || N || H, Y = $ ? po(e.length, vf) : [], V = Y.length;
          for (var X in e)
            (n || Ft.call(e, X)) && !($ && // Safari 9 has enumerable `arguments.length` in strict mode.
            (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            N && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            H && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
            _e(X, V))) && Y.push(X);
          return Y;
        }
        function fa(e) {
          var n = e.length;
          return n ? e[Lo(0, n - 1)] : o;
        }
        function os(e, n) {
          return Qr(se(e), En(n, 0, e.length));
        }
        function is(e) {
          return Qr(se(e));
        }
        function So(e, n, a) {
          (a !== o && !Qe(e[n], a) || a === o && !(n in e)) && Ze(e, n, a);
        }
        function Zn(e, n, a) {
          var T = e[n];
          (!(Ft.call(e, n) && Qe(T, a)) || a === o && !(n in e)) && Ze(e, n, a);
        }
        function Ir(e, n) {
          for (var a = e.length; a--; )
            if (Qe(e[a][0], n))
              return a;
          return -1;
        }
        function as(e, n, a, T) {
          return un(e, function(N, H, $) {
            n(T, N, a(N), $);
          }), T;
        }
        function sa(e, n) {
          return e && We(n, Jt(n), e);
        }
        function ls(e, n) {
          return e && We(n, de(n), e);
        }
        function Ze(e, n, a) {
          n == "__proto__" && xr ? xr(e, n, {
            configurable: !0,
            enumerable: !0,
            value: a,
            writable: !0
          }) : e[n] = a;
        }
        function Co(e, n) {
          for (var a = -1, T = n.length, N = K(T), H = e == null; ++a < T; )
            N[a] = H ? o : ri(e, n[a]);
          return N;
        }
        function En(e, n, a) {
          return e === e && (a !== o && (e = e <= a ? e : a), n !== o && (e = e >= n ? e : n)), e;
        }
        function Be(e, n, a, T, N, H) {
          var $, Y = n & h, V = n & y, X = n & v;
          if (a && ($ = N ? a(e, T, N, H) : a(e)), $ !== o)
            return $;
          if (!$t(e))
            return e;
          var Z = St(e);
          if (Z) {
            if ($ = Xs(e), !Y)
              return se(e, $);
          } else {
            var k = ne(e), ot = k == Ht || k == fe;
            if (dn(e))
              return Oa(e, Y);
            if (k == te || k == ft || ot && !N) {
              if ($ = V || ot ? {} : _a(e), !Y)
                return V ? bs(e, ls($, e)) : Us(e, sa($, e));
            } else {
              if (!wt[k])
                return N ? e : {};
              $ = Zs(e, k, Y);
            }
          }
          H || (H = new $e());
          var dt = H.get(e);
          if (dt)
            return dt;
          H.set(e, $), Pl(e) ? e.forEach(function(gt) {
            $.add(Be(gt, n, a, gt, e, H));
          }) : Rl(e) && e.forEach(function(gt, Pt) {
            $.set(Pt, Be(gt, n, a, Pt, e, H));
          });
          var pt = X ? V ? Go : zo : V ? de : Jt, Tt = Z ? o : pt(e);
          return Pe(Tt || e, function(gt, Pt) {
            Tt && (Pt = gt, gt = e[Pt]), Zn($, Pt, Be(gt, n, a, Pt, e, H));
          }), $;
        }
        function us(e) {
          var n = Jt(e);
          return function(a) {
            return ca(a, e, n);
          };
        }
        function ca(e, n, a) {
          var T = a.length;
          if (e == null)
            return !T;
          for (e = Ot(e); T--; ) {
            var N = a[T], H = n[N], $ = e[N];
            if ($ === o && !(N in e) || !H($))
              return !1;
          }
          return !0;
        }
        function da(e, n, a) {
          if (typeof e != "function")
            throw new Me(f);
          return rr(function() {
            e.apply(o, a);
          }, n);
        }
        function kn(e, n, a, T) {
          var N = -1, H = sr, $ = !0, Y = e.length, V = [], X = n.length;
          if (!Y)
            return V;
          a && (n = bt(n, me(a))), T ? (H = uo, $ = !1) : n.length >= t && (H = Wn, $ = !1, n = new yn(n));
          t:
            for (; ++N < Y; ) {
              var Z = e[N], k = a == null ? Z : a(Z);
              if (Z = T || Z !== 0 ? Z : 0, $ && k === k) {
                for (var ot = X; ot--; )
                  if (n[ot] === k)
                    continue t;
                V.push(Z);
              } else H(n, k, T) || V.push(Z);
            }
          return V;
        }
        var un = $a(Ge), va = $a(Do, !0);
        function fs(e, n) {
          var a = !0;
          return un(e, function(T, N, H) {
            return a = !!n(T, N, H), a;
          }), a;
        }
        function Pr(e, n, a) {
          for (var T = -1, N = e.length; ++T < N; ) {
            var H = e[T], $ = n(H);
            if ($ != null && (Y === o ? $ === $ && !ye($) : a($, Y)))
              var Y = $, V = H;
          }
          return V;
        }
        function ss(e, n, a, T) {
          var N = e.length;
          for (a = Ct(a), a < 0 && (a = -a > N ? 0 : N + a), T = T === o || T > N ? N : Ct(T), T < 0 && (T += N), T = a > T ? 0 : Nl(T); a < T; )
            e[a++] = n;
          return e;
        }
        function ha(e, n) {
          var a = [];
          return un(e, function(T, N, H) {
            n(T, N, H) && a.push(T);
          }), a;
        }
        function kt(e, n, a, T, N) {
          var H = -1, $ = e.length;
          for (a || (a = qs), N || (N = []); ++H < $; ) {
            var Y = e[H];
            n > 0 && a(Y) ? n > 1 ? kt(Y, n - 1, a, T, N) : on(N, Y) : T || (N[N.length] = Y);
          }
          return N;
        }
        var To = Qa(), pa = Qa(!0);
        function Ge(e, n) {
          return e && To(e, n, Jt);
        }
        function Do(e, n) {
          return e && pa(e, n, Jt);
        }
        function Mr(e, n) {
          return rn(n, function(a) {
            return tn(e[a]);
          });
        }
        function xn(e, n) {
          n = sn(n, e);
          for (var a = 0, T = n.length; e != null && a < T; )
            e = e[Ve(n[a++])];
          return a && a == T ? e : o;
        }
        function ga(e, n, a) {
          var T = n(e);
          return St(e) ? T : on(T, a(e));
        }
        function ae(e) {
          return e == null ? e === o ? Ke : vn : mn && mn in Ot(e) ? js(e) : ic(e);
        }
        function Ro(e, n) {
          return e > n;
        }
        function cs(e, n) {
          return e != null && Ft.call(e, n);
        }
        function ds(e, n) {
          return e != null && n in Ot(e);
        }
        function vs(e, n, a) {
          return e >= ee(n, a) && e < jt(n, a);
        }
        function Io(e, n, a) {
          for (var T = a ? uo : sr, N = e[0].length, H = e.length, $ = H, Y = K(H), V = 1 / 0, X = []; $--; ) {
            var Z = e[$];
            $ && n && (Z = bt(Z, me(n))), V = ee(Z.length, V), Y[$] = !a && (n || N >= 120 && Z.length >= 120) ? new yn($ && Z) : o;
          }
          Z = e[0];
          var k = -1, ot = Y[0];
          t:
            for (; ++k < N && X.length < V; ) {
              var dt = Z[k], pt = n ? n(dt) : dt;
              if (dt = a || dt !== 0 ? dt : 0, !(ot ? Wn(ot, pt) : T(X, pt, a))) {
                for ($ = H; --$; ) {
                  var Tt = Y[$];
                  if (!(Tt ? Wn(Tt, pt) : T(e[$], pt, a)))
                    continue t;
                }
                ot && ot.push(pt), X.push(dt);
              }
            }
          return X;
        }
        function hs(e, n, a, T) {
          return Ge(e, function(N, H, $) {
            n(T, a(N), H, $);
          }), T;
        }
        function qn(e, n, a) {
          n = sn(n, e), e = rl(e, n);
          var T = e == null ? e : e[Ve(Fe(n))];
          return T == null ? o : ge(T, e, a);
        }
        function ma(e) {
          return Yt(e) && ae(e) == ft;
        }
        function ps(e) {
          return Yt(e) && ae(e) == Te;
        }
        function gs(e) {
          return Yt(e) && ae(e) == lt;
        }
        function _n(e, n, a, T, N) {
          return e === n ? !0 : e == null || n == null || !Yt(e) && !Yt(n) ? e !== e && n !== n : ms(e, n, a, T, _n, N);
        }
        function ms(e, n, a, T, N, H) {
          var $ = St(e), Y = St(n), V = $ ? at : ne(e), X = Y ? at : ne(n);
          V = V == ft ? te : V, X = X == ft ? te : X;
          var Z = V == te, k = X == te, ot = V == X;
          if (ot && dn(e)) {
            if (!dn(n))
              return !1;
            $ = !0, Z = !1;
          }
          if (ot && !Z)
            return H || (H = new $e()), $ || Yn(e) ? Za(e, n, a, T, N, H) : Ws(e, n, V, a, T, N, H);
          if (!(a & s)) {
            var dt = Z && Ft.call(e, "__wrapped__"), pt = k && Ft.call(n, "__wrapped__");
            if (dt || pt) {
              var Tt = dt ? e.value() : e, gt = pt ? n.value() : n;
              return H || (H = new $e()), N(Tt, gt, a, T, H);
            }
          }
          return ot ? (H || (H = new $e()), Vs(e, n, a, T, N, H)) : !1;
        }
        function As(e) {
          return Yt(e) && ne(e) == _t;
        }
        function Po(e, n, a, T) {
          var N = a.length, H = N, $ = !T;
          if (e == null)
            return !H;
          for (e = Ot(e); N--; ) {
            var Y = a[N];
            if ($ && Y[2] ? Y[1] !== e[Y[0]] : !(Y[0] in e))
              return !1;
          }
          for (; ++N < H; ) {
            Y = a[N];
            var V = Y[0], X = e[V], Z = Y[1];
            if ($ && Y[2]) {
              if (X === o && !(V in e))
                return !1;
            } else {
              var k = new $e();
              if (T)
                var ot = T(X, Z, V, e, n, k);
              if (!(ot === o ? _n(Z, X, s | d, T, k) : ot))
                return !1;
            }
          }
          return !0;
        }
        function Aa(e) {
          if (!$t(e) || tc(e))
            return !1;
          var n = tn(e) ? Af : lu;
          return n.test(Cn(e));
        }
        function ys(e) {
          return Yt(e) && ae(e) == Se;
        }
        function Es(e) {
          return Yt(e) && ne(e) == zt;
        }
        function xs(e) {
          return Yt(e) && jr(e.length) && !!Ut[ae(e)];
        }
        function ya(e) {
          return typeof e == "function" ? e : e == null ? ve : typeof e == "object" ? St(e) ? Sa(e[0], e[1]) : xa(e) : Yl(e);
        }
        function Mo(e) {
          if (!nr(e))
            return Tf(e);
          var n = [];
          for (var a in Ot(e))
            Ft.call(e, a) && a != "constructor" && n.push(a);
          return n;
        }
        function Ss(e) {
          if (!$t(e))
            return oc(e);
          var n = nr(e), a = [];
          for (var T in e)
            T == "constructor" && (n || !Ft.call(e, T)) || a.push(T);
          return a;
        }
        function No(e, n) {
          return e < n;
        }
        function Ea(e, n) {
          var a = -1, T = ce(e) ? K(e.length) : [];
          return un(e, function(N, H, $) {
            T[++a] = n(N, H, $);
          }), T;
        }
        function xa(e) {
          var n = Vo(e);
          return n.length == 1 && n[0][2] ? el(n[0][0], n[0][1]) : function(a) {
            return a === e || Po(a, e, n);
          };
        }
        function Sa(e, n) {
          return Ko(e) && tl(n) ? el(Ve(e), n) : function(a) {
            var T = ri(a, e);
            return T === o && T === n ? oi(a, e) : _n(n, T, s | d);
          };
        }
        function Nr(e, n, a, T, N) {
          e !== n && To(n, function(H, $) {
            if (N || (N = new $e()), $t(H))
              Cs(e, n, $, a, Nr, T, N);
            else {
              var Y = T ? T(Xo(e, $), H, $ + "", e, n, N) : o;
              Y === o && (Y = H), So(e, $, Y);
            }
          }, de);
        }
        function Cs(e, n, a, T, N, H, $) {
          var Y = Xo(e, a), V = Xo(n, a), X = $.get(V);
          if (X) {
            So(e, a, X);
            return;
          }
          var Z = H ? H(Y, V, a + "", e, n, $) : o, k = Z === o;
          if (k) {
            var ot = St(V), dt = !ot && dn(V), pt = !ot && !dt && Yn(V);
            Z = V, ot || dt || pt ? St(Y) ? Z = Y : Gt(Y) ? Z = se(Y) : dt ? (k = !1, Z = Oa(V, !0)) : pt ? (k = !1, Z = Ha(V, !0)) : Z = [] : or(V) || Tn(V) ? (Z = Y, Tn(Y) ? Z = Bl(Y) : (!$t(Y) || tn(Y)) && (Z = _a(V))) : k = !1;
          }
          k && ($.set(V, Z), N(Z, V, T, H, $), $.delete(V)), So(e, a, Z);
        }
        function Ca(e, n) {
          var a = e.length;
          if (a)
            return n += n < 0 ? a : 0, _e(n, a) ? e[n] : o;
        }
        function Ta(e, n, a) {
          n.length ? n = bt(n, function(H) {
            return St(H) ? function($) {
              return xn($, H.length === 1 ? H[0] : H);
            } : H;
          }) : n = [ve];
          var T = -1;
          n = bt(n, me(ht()));
          var N = Ea(e, function(H, $, Y) {
            var V = bt(n, function(X) {
              return X(H);
            });
            return { criteria: V, index: ++T, value: H };
          });
          return Xu(N, function(H, $) {
            return ws(H, $, a);
          });
        }
        function Ts(e, n) {
          return Da(e, n, function(a, T) {
            return oi(e, T);
          });
        }
        function Da(e, n, a) {
          for (var T = -1, N = n.length, H = {}; ++T < N; ) {
            var $ = n[T], Y = xn(e, $);
            a(Y, $) && tr(H, sn($, e), Y);
          }
          return H;
        }
        function Ds(e) {
          return function(n) {
            return xn(n, e);
          };
        }
        function Bo(e, n, a, T) {
          var N = T ? Ju : Nn, H = -1, $ = n.length, Y = e;
          for (e === n && (n = se(n)), a && (Y = bt(e, me(a))); ++H < $; )
            for (var V = 0, X = n[H], Z = a ? a(X) : X; (V = N(Y, Z, V, T)) > -1; )
              Y !== e && Er.call(Y, V, 1), Er.call(e, V, 1);
          return e;
        }
        function Ra(e, n) {
          for (var a = e ? n.length : 0, T = a - 1; a--; ) {
            var N = n[a];
            if (a == T || N !== H) {
              var H = N;
              _e(N) ? Er.call(e, N, 1) : Ho(e, N);
            }
          }
          return e;
        }
        function Lo(e, n) {
          return e + Cr(aa() * (n - e + 1));
        }
        function Rs(e, n, a, T) {
          for (var N = -1, H = jt(Sr((n - e) / (a || 1)), 0), $ = K(H); H--; )
            $[T ? H : ++N] = e, e += a;
          return $;
        }
        function Fo(e, n) {
          var a = "";
          if (!e || n < 1 || n > Q)
            return a;
          do
            n % 2 && (a += e), n = Cr(n / 2), n && (e += e);
          while (n);
          return a;
        }
        function It(e, n) {
          return Zo(nl(e, n, ve), e + "");
        }
        function Is(e) {
          return fa(zn(e));
        }
        function Ps(e, n) {
          var a = zn(e);
          return Qr(a, En(n, 0, a.length));
        }
        function tr(e, n, a, T) {
          if (!$t(e))
            return e;
          n = sn(n, e);
          for (var N = -1, H = n.length, $ = H - 1, Y = e; Y != null && ++N < H; ) {
            var V = Ve(n[N]), X = a;
            if (V === "__proto__" || V === "constructor" || V === "prototype")
              return e;
            if (N != $) {
              var Z = Y[V];
              X = T ? T(Z, V, Y) : o, X === o && (X = $t(Z) ? Z : _e(n[N + 1]) ? [] : {});
            }
            Zn(Y, V, X), Y = Y[V];
          }
          return e;
        }
        var Ia = Tr ? function(e, n) {
          return Tr.set(e, n), e;
        } : ve, Ms = xr ? function(e, n) {
          return xr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ai(n),
            writable: !0
          });
        } : ve;
        function Ns(e) {
          return Qr(zn(e));
        }
        function Le(e, n, a) {
          var T = -1, N = e.length;
          n < 0 && (n = -n > N ? 0 : N + n), a = a > N ? N : a, a < 0 && (a += N), N = n > a ? 0 : a - n >>> 0, n >>>= 0;
          for (var H = K(N); ++T < N; )
            H[T] = e[T + n];
          return H;
        }
        function Bs(e, n) {
          var a;
          return un(e, function(T, N, H) {
            return a = n(T, N, H), !a;
          }), !!a;
        }
        function Br(e, n, a) {
          var T = 0, N = e == null ? T : e.length;
          if (typeof n == "number" && n === n && N <= ut) {
            for (; T < N; ) {
              var H = T + N >>> 1, $ = e[H];
              $ !== null && !ye($) && (a ? $ <= n : $ < n) ? T = H + 1 : N = H;
            }
            return N;
          }
          return Oo(e, n, ve, a);
        }
        function Oo(e, n, a, T) {
          var N = 0, H = e == null ? 0 : e.length;
          if (H === 0)
            return 0;
          n = a(n);
          for (var $ = n !== n, Y = n === null, V = ye(n), X = n === o; N < H; ) {
            var Z = Cr((N + H) / 2), k = a(e[Z]), ot = k !== o, dt = k === null, pt = k === k, Tt = ye(k);
            if ($)
              var gt = T || pt;
            else X ? gt = pt && (T || ot) : Y ? gt = pt && ot && (T || !dt) : V ? gt = pt && ot && !dt && (T || !Tt) : dt || Tt ? gt = !1 : gt = T ? k <= n : k < n;
            gt ? N = Z + 1 : H = Z;
          }
          return ee(H, q);
        }
        function Pa(e, n) {
          for (var a = -1, T = e.length, N = 0, H = []; ++a < T; ) {
            var $ = e[a], Y = n ? n($) : $;
            if (!a || !Qe(Y, V)) {
              var V = Y;
              H[N++] = $ === 0 ? 0 : $;
            }
          }
          return H;
        }
        function Ma(e) {
          return typeof e == "number" ? e : ye(e) ? z : +e;
        }
        function Ae(e) {
          if (typeof e == "string")
            return e;
          if (St(e))
            return bt(e, Ae) + "";
          if (ye(e))
            return la ? la.call(e) : "";
          var n = e + "";
          return n == "0" && 1 / e == -b ? "-0" : n;
        }
        function fn(e, n, a) {
          var T = -1, N = sr, H = e.length, $ = !0, Y = [], V = Y;
          if (a)
            $ = !1, N = uo;
          else if (H >= t) {
            var X = n ? null : zs(e);
            if (X)
              return dr(X);
            $ = !1, N = Wn, V = new yn();
          } else
            V = n ? [] : Y;
          t:
            for (; ++T < H; ) {
              var Z = e[T], k = n ? n(Z) : Z;
              if (Z = a || Z !== 0 ? Z : 0, $ && k === k) {
                for (var ot = V.length; ot--; )
                  if (V[ot] === k)
                    continue t;
                n && V.push(k), Y.push(Z);
              } else N(V, k, a) || (V !== Y && V.push(k), Y.push(Z));
            }
          return Y;
        }
        function Ho(e, n) {
          return n = sn(n, e), e = rl(e, n), e == null || delete e[Ve(Fe(n))];
        }
        function Na(e, n, a, T) {
          return tr(e, n, a(xn(e, n)), T);
        }
        function Lr(e, n, a, T) {
          for (var N = e.length, H = T ? N : -1; (T ? H-- : ++H < N) && n(e[H], H, e); )
            ;
          return a ? Le(e, T ? 0 : H, T ? H + 1 : N) : Le(e, T ? H + 1 : 0, T ? N : H);
        }
        function Ba(e, n) {
          var a = e;
          return a instanceof Mt && (a = a.value()), fo(n, function(T, N) {
            return N.func.apply(N.thisArg, on([T], N.args));
          }, a);
        }
        function wo(e, n, a) {
          var T = e.length;
          if (T < 2)
            return T ? fn(e[0]) : [];
          for (var N = -1, H = K(T); ++N < T; )
            for (var $ = e[N], Y = -1; ++Y < T; )
              Y != N && (H[N] = kn(H[N] || $, e[Y], n, a));
          return fn(kt(H, 1), n, a);
        }
        function La(e, n, a) {
          for (var T = -1, N = e.length, H = n.length, $ = {}; ++T < N; ) {
            var Y = T < H ? n[T] : o;
            a($, e[T], Y);
          }
          return $;
        }
        function Uo(e) {
          return Gt(e) ? e : [];
        }
        function bo(e) {
          return typeof e == "function" ? e : ve;
        }
        function sn(e, n) {
          return St(e) ? e : Ko(e, n) ? [e] : ll(Lt(e));
        }
        var Ls = It;
        function cn(e, n, a) {
          var T = e.length;
          return a = a === o ? T : a, !n && a >= T ? e : Le(e, n, a);
        }
        var Fa = yf || function(e) {
          return Zt.clearTimeout(e);
        };
        function Oa(e, n) {
          if (n)
            return e.slice();
          var a = e.length, T = ea ? ea(a) : new e.constructor(a);
          return e.copy(T), T;
        }
        function $o(e) {
          var n = new e.constructor(e.byteLength);
          return new Ar(n).set(new Ar(e)), n;
        }
        function Fs(e, n) {
          var a = n ? $o(e.buffer) : e.buffer;
          return new e.constructor(a, e.byteOffset, e.byteLength);
        }
        function Os(e) {
          var n = new e.constructor(e.source, mi.exec(e));
          return n.lastIndex = e.lastIndex, n;
        }
        function Hs(e) {
          return Xn ? Ot(Xn.call(e)) : {};
        }
        function Ha(e, n) {
          var a = n ? $o(e.buffer) : e.buffer;
          return new e.constructor(a, e.byteOffset, e.length);
        }
        function wa(e, n) {
          if (e !== n) {
            var a = e !== o, T = e === null, N = e === e, H = ye(e), $ = n !== o, Y = n === null, V = n === n, X = ye(n);
            if (!Y && !X && !H && e > n || H && $ && V && !Y && !X || T && $ && V || !a && V || !N)
              return 1;
            if (!T && !H && !X && e < n || X && a && N && !T && !H || Y && a && N || !$ && N || !V)
              return -1;
          }
          return 0;
        }
        function ws(e, n, a) {
          for (var T = -1, N = e.criteria, H = n.criteria, $ = N.length, Y = a.length; ++T < $; ) {
            var V = wa(N[T], H[T]);
            if (V) {
              if (T >= Y)
                return V;
              var X = a[T];
              return V * (X == "desc" ? -1 : 1);
            }
          }
          return e.index - n.index;
        }
        function Ua(e, n, a, T) {
          for (var N = -1, H = e.length, $ = a.length, Y = -1, V = n.length, X = jt(H - $, 0), Z = K(V + X), k = !T; ++Y < V; )
            Z[Y] = n[Y];
          for (; ++N < $; )
            (k || N < H) && (Z[a[N]] = e[N]);
          for (; X--; )
            Z[Y++] = e[N++];
          return Z;
        }
        function ba(e, n, a, T) {
          for (var N = -1, H = e.length, $ = -1, Y = a.length, V = -1, X = n.length, Z = jt(H - Y, 0), k = K(Z + X), ot = !T; ++N < Z; )
            k[N] = e[N];
          for (var dt = N; ++V < X; )
            k[dt + V] = n[V];
          for (; ++$ < Y; )
            (ot || N < H) && (k[dt + a[$]] = e[N++]);
          return k;
        }
        function se(e, n) {
          var a = -1, T = e.length;
          for (n || (n = K(T)); ++a < T; )
            n[a] = e[a];
          return n;
        }
        function We(e, n, a, T) {
          var N = !a;
          a || (a = {});
          for (var H = -1, $ = n.length; ++H < $; ) {
            var Y = n[H], V = T ? T(a[Y], e[Y], Y, a, e) : o;
            V === o && (V = e[Y]), N ? Ze(a, Y, V) : Zn(a, Y, V);
          }
          return a;
        }
        function Us(e, n) {
          return We(e, jo(e), n);
        }
        function bs(e, n) {
          return We(e, ka(e), n);
        }
        function Fr(e, n) {
          return function(a, T) {
            var N = St(a) ? zu : as, H = n ? n() : {};
            return N(a, e, ht(T, 2), H);
          };
        }
        function bn(e) {
          return It(function(n, a) {
            var T = -1, N = a.length, H = N > 1 ? a[N - 1] : o, $ = N > 2 ? a[2] : o;
            for (H = e.length > 3 && typeof H == "function" ? (N--, H) : o, $ && le(a[0], a[1], $) && (H = N < 3 ? o : H, N = 1), n = Ot(n); ++T < N; ) {
              var Y = a[T];
              Y && e(n, Y, T, H);
            }
            return n;
          });
        }
        function $a(e, n) {
          return function(a, T) {
            if (a == null)
              return a;
            if (!ce(a))
              return e(a, T);
            for (var N = a.length, H = n ? N : -1, $ = Ot(a); (n ? H-- : ++H < N) && T($[H], H, $) !== !1; )
              ;
            return a;
          };
        }
        function Qa(e) {
          return function(n, a, T) {
            for (var N = -1, H = Ot(n), $ = T(n), Y = $.length; Y--; ) {
              var V = $[e ? Y : ++N];
              if (a(H[V], V, H) === !1)
                break;
            }
            return n;
          };
        }
        function $s(e, n, a) {
          var T = n & c, N = er(e);
          function H() {
            var $ = this && this !== Zt && this instanceof H ? N : e;
            return $.apply(T ? a : this, arguments);
          }
          return H;
        }
        function Ya(e) {
          return function(n) {
            n = Lt(n);
            var a = Bn(n) ? be(n) : o, T = a ? a[0] : n.charAt(0), N = a ? cn(a, 1).join("") : n.slice(1);
            return T[e]() + N;
          };
        }
        function $n(e) {
          return function(n) {
            return fo($l(bl(n).replace(Pu, "")), e, "");
          };
        }
        function er(e) {
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return new e();
              case 1:
                return new e(n[0]);
              case 2:
                return new e(n[0], n[1]);
              case 3:
                return new e(n[0], n[1], n[2]);
              case 4:
                return new e(n[0], n[1], n[2], n[3]);
              case 5:
                return new e(n[0], n[1], n[2], n[3], n[4]);
              case 6:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
              case 7:
                return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
            }
            var a = Un(e.prototype), T = e.apply(a, n);
            return $t(T) ? T : a;
          };
        }
        function Qs(e, n, a) {
          var T = er(e);
          function N() {
            for (var H = arguments.length, $ = K(H), Y = H, V = Qn(N); Y--; )
              $[Y] = arguments[Y];
            var X = H < 3 && $[0] !== V && $[H - 1] !== V ? [] : an($, V);
            if (H -= X.length, H < a)
              return ja(
                e,
                n,
                Or,
                N.placeholder,
                o,
                $,
                X,
                o,
                o,
                a - H
              );
            var Z = this && this !== Zt && this instanceof N ? T : e;
            return ge(Z, this, $);
          }
          return N;
        }
        function za(e) {
          return function(n, a, T) {
            var N = Ot(n);
            if (!ce(n)) {
              var H = ht(a, 3);
              n = Jt(n), a = function(Y) {
                return H(N[Y], Y, N);
              };
            }
            var $ = e(n, a, T);
            return $ > -1 ? N[H ? n[$] : $] : o;
          };
        }
        function Ga(e) {
          return qe(function(n) {
            var a = n.length, T = a, N = Ne.prototype.thru;
            for (e && n.reverse(); T--; ) {
              var H = n[T];
              if (typeof H != "function")
                throw new Me(f);
              if (N && !$ && br(H) == "wrapper")
                var $ = new Ne([], !0);
            }
            for (T = $ ? T : a; ++T < a; ) {
              H = n[T];
              var Y = br(H), V = Y == "wrapper" ? Wo(H) : o;
              V && Jo(V[0]) && V[1] == (R | A | S | P) && !V[4].length && V[9] == 1 ? $ = $[br(V[0])].apply($, V[3]) : $ = H.length == 1 && Jo(H) ? $[Y]() : $.thru(H);
            }
            return function() {
              var X = arguments, Z = X[0];
              if ($ && X.length == 1 && St(Z))
                return $.plant(Z).value();
              for (var k = 0, ot = a ? n[k].apply(this, X) : Z; ++k < a; )
                ot = n[k].call(this, ot);
              return ot;
            };
          });
        }
        function Or(e, n, a, T, N, H, $, Y, V, X) {
          var Z = n & R, k = n & c, ot = n & m, dt = n & (A | x), pt = n & B, Tt = ot ? o : er(e);
          function gt() {
            for (var Pt = arguments.length, Nt = K(Pt), Ee = Pt; Ee--; )
              Nt[Ee] = arguments[Ee];
            if (dt)
              var ue = Qn(gt), xe = ku(Nt, ue);
            if (T && (Nt = Ua(Nt, T, N, dt)), H && (Nt = ba(Nt, H, $, dt)), Pt -= xe, dt && Pt < X) {
              var Wt = an(Nt, ue);
              return ja(
                e,
                n,
                Or,
                gt.placeholder,
                a,
                Nt,
                Wt,
                Y,
                V,
                X - Pt
              );
            }
            var Ye = k ? a : this, nn = ot ? Ye[e] : e;
            return Pt = Nt.length, Y ? Nt = ac(Nt, Y) : pt && Pt > 1 && Nt.reverse(), Z && V < Pt && (Nt.length = V), this && this !== Zt && this instanceof gt && (nn = Tt || er(nn)), nn.apply(Ye, Nt);
          }
          return gt;
        }
        function Wa(e, n) {
          return function(a, T) {
            return hs(a, e, n(T), {});
          };
        }
        function Hr(e, n) {
          return function(a, T) {
            var N;
            if (a === o && T === o)
              return n;
            if (a !== o && (N = a), T !== o) {
              if (N === o)
                return T;
              typeof a == "string" || typeof T == "string" ? (a = Ae(a), T = Ae(T)) : (a = Ma(a), T = Ma(T)), N = e(a, T);
            }
            return N;
          };
        }
        function Qo(e) {
          return qe(function(n) {
            return n = bt(n, me(ht())), It(function(a) {
              var T = this;
              return e(n, function(N) {
                return ge(N, T, a);
              });
            });
          });
        }
        function wr(e, n) {
          n = n === o ? " " : Ae(n);
          var a = n.length;
          if (a < 2)
            return a ? Fo(n, e) : n;
          var T = Fo(n, Sr(e / Ln(n)));
          return Bn(n) ? cn(be(T), 0, e).join("") : T.slice(0, e);
        }
        function Ys(e, n, a, T) {
          var N = n & c, H = er(e);
          function $() {
            for (var Y = -1, V = arguments.length, X = -1, Z = T.length, k = K(Z + V), ot = this && this !== Zt && this instanceof $ ? H : e; ++X < Z; )
              k[X] = T[X];
            for (; V--; )
              k[X++] = arguments[++Y];
            return ge(ot, N ? a : this, k);
          }
          return $;
        }
        function Va(e) {
          return function(n, a, T) {
            return T && typeof T != "number" && le(n, a, T) && (a = T = o), n = en(n), a === o ? (a = n, n = 0) : a = en(a), T = T === o ? n < a ? 1 : -1 : en(T), Rs(n, a, T, e);
          };
        }
        function Ur(e) {
          return function(n, a) {
            return typeof n == "string" && typeof a == "string" || (n = Oe(n), a = Oe(a)), e(n, a);
          };
        }
        function ja(e, n, a, T, N, H, $, Y, V, X) {
          var Z = n & A, k = Z ? $ : o, ot = Z ? o : $, dt = Z ? H : o, pt = Z ? o : H;
          n |= Z ? S : D, n &= ~(Z ? D : S), n & p || (n &= -4);
          var Tt = [
            e,
            n,
            N,
            dt,
            k,
            pt,
            ot,
            Y,
            V,
            X
          ], gt = a.apply(o, Tt);
          return Jo(e) && ol(gt, Tt), gt.placeholder = T, il(gt, e, n);
        }
        function Yo(e) {
          var n = Vt[e];
          return function(a, T) {
            if (a = Oe(a), T = T == null ? 0 : ee(Ct(T), 292), T && ia(a)) {
              var N = (Lt(a) + "e").split("e"), H = n(N[0] + "e" + (+N[1] + T));
              return N = (Lt(H) + "e").split("e"), +(N[0] + "e" + (+N[1] - T));
            }
            return n(a);
          };
        }
        var zs = Hn && 1 / dr(new Hn([, -0]))[1] == b ? function(e) {
          return new Hn(e);
        } : fi;
        function Ka(e) {
          return function(n) {
            var a = ne(n);
            return a == _t ? mo(n) : a == zt ? of(n) : Zu(n, e(n));
          };
        }
        function ke(e, n, a, T, N, H, $, Y) {
          var V = n & m;
          if (!V && typeof e != "function")
            throw new Me(f);
          var X = T ? T.length : 0;
          if (X || (n &= -97, T = N = o), $ = $ === o ? $ : jt(Ct($), 0), Y = Y === o ? Y : Ct(Y), X -= N ? N.length : 0, n & D) {
            var Z = T, k = N;
            T = N = o;
          }
          var ot = V ? o : Wo(e), dt = [
            e,
            n,
            a,
            T,
            N,
            Z,
            k,
            H,
            $,
            Y
          ];
          if (ot && rc(dt, ot), e = dt[0], n = dt[1], a = dt[2], T = dt[3], N = dt[4], Y = dt[9] = dt[9] === o ? V ? 0 : e.length : jt(dt[9] - X, 0), !Y && n & (A | x) && (n &= -25), !n || n == c)
            var pt = $s(e, n, a);
          else n == A || n == x ? pt = Qs(e, n, Y) : (n == S || n == (c | S)) && !N.length ? pt = Ys(e, n, a, T) : pt = Or.apply(o, dt);
          var Tt = ot ? Ia : ol;
          return il(Tt(pt, dt), e, n);
        }
        function Ja(e, n, a, T) {
          return e === o || Qe(e, On[a]) && !Ft.call(T, a) ? n : e;
        }
        function Xa(e, n, a, T, N, H) {
          return $t(e) && $t(n) && (H.set(n, e), Nr(e, n, o, Xa, H), H.delete(n)), e;
        }
        function Gs(e) {
          return or(e) ? o : e;
        }
        function Za(e, n, a, T, N, H) {
          var $ = a & s, Y = e.length, V = n.length;
          if (Y != V && !($ && V > Y))
            return !1;
          var X = H.get(e), Z = H.get(n);
          if (X && Z)
            return X == n && Z == e;
          var k = -1, ot = !0, dt = a & d ? new yn() : o;
          for (H.set(e, n), H.set(n, e); ++k < Y; ) {
            var pt = e[k], Tt = n[k];
            if (T)
              var gt = $ ? T(Tt, pt, k, n, e, H) : T(pt, Tt, k, e, n, H);
            if (gt !== o) {
              if (gt)
                continue;
              ot = !1;
              break;
            }
            if (dt) {
              if (!so(n, function(Pt, Nt) {
                if (!Wn(dt, Nt) && (pt === Pt || N(pt, Pt, a, T, H)))
                  return dt.push(Nt);
              })) {
                ot = !1;
                break;
              }
            } else if (!(pt === Tt || N(pt, Tt, a, T, H))) {
              ot = !1;
              break;
            }
          }
          return H.delete(e), H.delete(n), ot;
        }
        function Ws(e, n, a, T, N, H, $) {
          switch (a) {
            case he:
              if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
                return !1;
              e = e.buffer, n = n.buffer;
            case Te:
              return !(e.byteLength != n.byteLength || !H(new Ar(e), new Ar(n)));
            case et:
            case lt:
            case Kt:
              return Qe(+e, +n);
            case Dt:
              return e.name == n.name && e.message == n.message;
            case Se:
            case je:
              return e == n + "";
            case _t:
              var Y = mo;
            case zt:
              var V = T & s;
              if (Y || (Y = dr), e.size != n.size && !V)
                return !1;
              var X = $.get(e);
              if (X)
                return X == n;
              T |= d, $.set(e, n);
              var Z = Za(Y(e), Y(n), T, N, H, $);
              return $.delete(e), Z;
            case we:
              if (Xn)
                return Xn.call(e) == Xn.call(n);
          }
          return !1;
        }
        function Vs(e, n, a, T, N, H) {
          var $ = a & s, Y = zo(e), V = Y.length, X = zo(n), Z = X.length;
          if (V != Z && !$)
            return !1;
          for (var k = V; k--; ) {
            var ot = Y[k];
            if (!($ ? ot in n : Ft.call(n, ot)))
              return !1;
          }
          var dt = H.get(e), pt = H.get(n);
          if (dt && pt)
            return dt == n && pt == e;
          var Tt = !0;
          H.set(e, n), H.set(n, e);
          for (var gt = $; ++k < V; ) {
            ot = Y[k];
            var Pt = e[ot], Nt = n[ot];
            if (T)
              var Ee = $ ? T(Nt, Pt, ot, n, e, H) : T(Pt, Nt, ot, e, n, H);
            if (!(Ee === o ? Pt === Nt || N(Pt, Nt, a, T, H) : Ee)) {
              Tt = !1;
              break;
            }
            gt || (gt = ot == "constructor");
          }
          if (Tt && !gt) {
            var ue = e.constructor, xe = n.constructor;
            ue != xe && "constructor" in e && "constructor" in n && !(typeof ue == "function" && ue instanceof ue && typeof xe == "function" && xe instanceof xe) && (Tt = !1);
          }
          return H.delete(e), H.delete(n), Tt;
        }
        function qe(e) {
          return Zo(nl(e, o, cl), e + "");
        }
        function zo(e) {
          return ga(e, Jt, jo);
        }
        function Go(e) {
          return ga(e, de, ka);
        }
        var Wo = Tr ? function(e) {
          return Tr.get(e);
        } : fi;
        function br(e) {
          for (var n = e.name + "", a = wn[n], T = Ft.call(wn, n) ? a.length : 0; T--; ) {
            var N = a[T], H = N.func;
            if (H == null || H == e)
              return N.name;
          }
          return n;
        }
        function Qn(e) {
          var n = Ft.call(L, "placeholder") ? L : e;
          return n.placeholder;
        }
        function ht() {
          var e = L.iteratee || li;
          return e = e === li ? ya : e, arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function $r(e, n) {
          var a = e.__data__;
          return _s(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map;
        }
        function Vo(e) {
          for (var n = Jt(e), a = n.length; a--; ) {
            var T = n[a], N = e[T];
            n[a] = [T, N, tl(N)];
          }
          return n;
        }
        function Sn(e, n) {
          var a = ef(e, n);
          return Aa(a) ? a : o;
        }
        function js(e) {
          var n = Ft.call(e, mn), a = e[mn];
          try {
            e[mn] = o;
            var T = !0;
          } catch {
          }
          var N = gr.call(e);
          return T && (n ? e[mn] = a : delete e[mn]), N;
        }
        var jo = yo ? function(e) {
          return e == null ? [] : (e = Ot(e), rn(yo(e), function(n) {
            return ra.call(e, n);
          }));
        } : si, ka = yo ? function(e) {
          for (var n = []; e; )
            on(n, jo(e)), e = yr(e);
          return n;
        } : si, ne = ae;
        (Eo && ne(new Eo(new ArrayBuffer(1))) != he || jn && ne(new jn()) != _t || xo && ne(xo.resolve()) != re || Hn && ne(new Hn()) != zt || Kn && ne(new Kn()) != Ce) && (ne = function(e) {
          var n = ae(e), a = n == te ? e.constructor : o, T = a ? Cn(a) : "";
          if (T)
            switch (T) {
              case Pf:
                return he;
              case Mf:
                return _t;
              case Nf:
                return re;
              case Bf:
                return zt;
              case Lf:
                return Ce;
            }
          return n;
        });
        function Ks(e, n, a) {
          for (var T = -1, N = a.length; ++T < N; ) {
            var H = a[T], $ = H.size;
            switch (H.type) {
              case "drop":
                e += $;
                break;
              case "dropRight":
                n -= $;
                break;
              case "take":
                n = ee(n, e + $);
                break;
              case "takeRight":
                e = jt(e, n - $);
                break;
            }
          }
          return { start: e, end: n };
        }
        function Js(e) {
          var n = e.match(_l);
          return n ? n[1].split(tu) : [];
        }
        function qa(e, n, a) {
          n = sn(n, e);
          for (var T = -1, N = n.length, H = !1; ++T < N; ) {
            var $ = Ve(n[T]);
            if (!(H = e != null && a(e, $)))
              break;
            e = e[$];
          }
          return H || ++T != N ? H : (N = e == null ? 0 : e.length, !!N && jr(N) && _e($, N) && (St(e) || Tn(e)));
        }
        function Xs(e) {
          var n = e.length, a = new e.constructor(n);
          return n && typeof e[0] == "string" && Ft.call(e, "index") && (a.index = e.index, a.input = e.input), a;
        }
        function _a(e) {
          return typeof e.constructor == "function" && !nr(e) ? Un(yr(e)) : {};
        }
        function Zs(e, n, a) {
          var T = e.constructor;
          switch (n) {
            case Te:
              return $o(e);
            case et:
            case lt:
              return new T(+e);
            case he:
              return Fs(e, a);
            case pe:
            case De:
            case Ue:
            case ct:
            case nt:
            case At:
            case Et:
            case it:
            case rt:
              return Ha(e, a);
            case _t:
              return new T();
            case Kt:
            case je:
              return new T(e);
            case Se:
              return Os(e);
            case zt:
              return new T();
            case we:
              return Hs(e);
          }
        }
        function ks(e, n) {
          var a = n.length;
          if (!a)
            return e;
          var T = a - 1;
          return n[T] = (a > 1 ? "& " : "") + n[T], n = n.join(a > 2 ? ", " : " "), e.replace(ql, `{
/* [wrapped with ` + n + `] */
`);
        }
        function qs(e) {
          return St(e) || Tn(e) || !!(oa && e && e[oa]);
        }
        function _e(e, n) {
          var a = typeof e;
          return n = n ?? Q, !!n && (a == "number" || a != "symbol" && fu.test(e)) && e > -1 && e % 1 == 0 && e < n;
        }
        function le(e, n, a) {
          if (!$t(a))
            return !1;
          var T = typeof n;
          return (T == "number" ? ce(a) && _e(n, a.length) : T == "string" && n in a) ? Qe(a[n], e) : !1;
        }
        function Ko(e, n) {
          if (St(e))
            return !1;
          var a = typeof e;
          return a == "number" || a == "symbol" || a == "boolean" || e == null || ye(e) ? !0 : Jl.test(e) || !Kl.test(e) || n != null && e in Ot(n);
        }
        function _s(e) {
          var n = typeof e;
          return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
        }
        function Jo(e) {
          var n = br(e), a = L[n];
          if (typeof a != "function" || !(n in Mt.prototype))
            return !1;
          if (e === a)
            return !0;
          var T = Wo(a);
          return !!T && e === T[0];
        }
        function tc(e) {
          return !!ta && ta in e;
        }
        var ec = hr ? tn : ci;
        function nr(e) {
          var n = e && e.constructor, a = typeof n == "function" && n.prototype || On;
          return e === a;
        }
        function tl(e) {
          return e === e && !$t(e);
        }
        function el(e, n) {
          return function(a) {
            return a == null ? !1 : a[e] === n && (n !== o || e in Ot(a));
          };
        }
        function nc(e) {
          var n = Wr(e, function(T) {
            return a.size === g && a.clear(), T;
          }), a = n.cache;
          return n;
        }
        function rc(e, n) {
          var a = e[1], T = n[1], N = a | T, H = N < (c | m | R), $ = T == R && a == A || T == R && a == P && e[7].length <= n[8] || T == (R | P) && n[7].length <= n[8] && a == A;
          if (!(H || $))
            return e;
          T & c && (e[2] = n[2], N |= a & c ? 0 : p);
          var Y = n[3];
          if (Y) {
            var V = e[3];
            e[3] = V ? Ua(V, Y, n[4]) : Y, e[4] = V ? an(e[3], E) : n[4];
          }
          return Y = n[5], Y && (V = e[5], e[5] = V ? ba(V, Y, n[6]) : Y, e[6] = V ? an(e[5], E) : n[6]), Y = n[7], Y && (e[7] = Y), T & R && (e[8] = e[8] == null ? n[8] : ee(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = N, e;
        }
        function oc(e) {
          var n = [];
          if (e != null)
            for (var a in Ot(e))
              n.push(a);
          return n;
        }
        function ic(e) {
          return gr.call(e);
        }
        function nl(e, n, a) {
          return n = jt(n === o ? e.length - 1 : n, 0), function() {
            for (var T = arguments, N = -1, H = jt(T.length - n, 0), $ = K(H); ++N < H; )
              $[N] = T[n + N];
            N = -1;
            for (var Y = K(n + 1); ++N < n; )
              Y[N] = T[N];
            return Y[n] = a($), ge(e, this, Y);
          };
        }
        function rl(e, n) {
          return n.length < 2 ? e : xn(e, Le(n, 0, -1));
        }
        function ac(e, n) {
          for (var a = e.length, T = ee(n.length, a), N = se(e); T--; ) {
            var H = n[T];
            e[T] = _e(H, a) ? N[H] : o;
          }
          return e;
        }
        function Xo(e, n) {
          if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
            return e[n];
        }
        var ol = al(Ia), rr = xf || function(e, n) {
          return Zt.setTimeout(e, n);
        }, Zo = al(Ms);
        function il(e, n, a) {
          var T = n + "";
          return Zo(e, ks(T, lc(Js(T), a)));
        }
        function al(e) {
          var n = 0, a = 0;
          return function() {
            var T = Df(), N = F - (T - a);
            if (a = T, N > 0) {
              if (++n >= M)
                return arguments[0];
            } else
              n = 0;
            return e.apply(o, arguments);
          };
        }
        function Qr(e, n) {
          var a = -1, T = e.length, N = T - 1;
          for (n = n === o ? T : n; ++a < n; ) {
            var H = Lo(a, N), $ = e[H];
            e[H] = e[a], e[a] = $;
          }
          return e.length = n, e;
        }
        var ll = nc(function(e) {
          var n = [];
          return e.charCodeAt(0) === 46 && n.push(""), e.replace(Xl, function(a, T, N, H) {
            n.push(N ? H.replace(ru, "$1") : T || a);
          }), n;
        });
        function Ve(e) {
          if (typeof e == "string" || ye(e))
            return e;
          var n = e + "";
          return n == "0" && 1 / e == -b ? "-0" : n;
        }
        function Cn(e) {
          if (e != null) {
            try {
              return pr.call(e);
            } catch {
            }
            try {
              return e + "";
            } catch {
            }
          }
          return "";
        }
        function lc(e, n) {
          return Pe(_, function(a) {
            var T = "_." + a[0];
            n & a[1] && !sr(e, T) && e.push(T);
          }), e.sort();
        }
        function ul(e) {
          if (e instanceof Mt)
            return e.clone();
          var n = new Ne(e.__wrapped__, e.__chain__);
          return n.__actions__ = se(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
        }
        function uc(e, n, a) {
          (a ? le(e, n, a) : n === o) ? n = 1 : n = jt(Ct(n), 0);
          var T = e == null ? 0 : e.length;
          if (!T || n < 1)
            return [];
          for (var N = 0, H = 0, $ = K(Sr(T / n)); N < T; )
            $[H++] = Le(e, N, N += n);
          return $;
        }
        function fc(e) {
          for (var n = -1, a = e == null ? 0 : e.length, T = 0, N = []; ++n < a; ) {
            var H = e[n];
            H && (N[T++] = H);
          }
          return N;
        }
        function sc() {
          var e = arguments.length;
          if (!e)
            return [];
          for (var n = K(e - 1), a = arguments[0], T = e; T--; )
            n[T - 1] = arguments[T];
          return on(St(a) ? se(a) : [a], kt(n, 1));
        }
        var cc = It(function(e, n) {
          return Gt(e) ? kn(e, kt(n, 1, Gt, !0)) : [];
        }), dc = It(function(e, n) {
          var a = Fe(n);
          return Gt(a) && (a = o), Gt(e) ? kn(e, kt(n, 1, Gt, !0), ht(a, 2)) : [];
        }), vc = It(function(e, n) {
          var a = Fe(n);
          return Gt(a) && (a = o), Gt(e) ? kn(e, kt(n, 1, Gt, !0), o, a) : [];
        });
        function hc(e, n, a) {
          var T = e == null ? 0 : e.length;
          return T ? (n = a || n === o ? 1 : Ct(n), Le(e, n < 0 ? 0 : n, T)) : [];
        }
        function pc(e, n, a) {
          var T = e == null ? 0 : e.length;
          return T ? (n = a || n === o ? 1 : Ct(n), n = T - n, Le(e, 0, n < 0 ? 0 : n)) : [];
        }
        function gc(e, n) {
          return e && e.length ? Lr(e, ht(n, 3), !0, !0) : [];
        }
        function mc(e, n) {
          return e && e.length ? Lr(e, ht(n, 3), !0) : [];
        }
        function Ac(e, n, a, T) {
          var N = e == null ? 0 : e.length;
          return N ? (a && typeof a != "number" && le(e, n, a) && (a = 0, T = N), ss(e, n, a, T)) : [];
        }
        function fl(e, n, a) {
          var T = e == null ? 0 : e.length;
          if (!T)
            return -1;
          var N = a == null ? 0 : Ct(a);
          return N < 0 && (N = jt(T + N, 0)), cr(e, ht(n, 3), N);
        }
        function sl(e, n, a) {
          var T = e == null ? 0 : e.length;
          if (!T)
            return -1;
          var N = T - 1;
          return a !== o && (N = Ct(a), N = a < 0 ? jt(T + N, 0) : ee(N, T - 1)), cr(e, ht(n, 3), N, !0);
        }
        function cl(e) {
          var n = e == null ? 0 : e.length;
          return n ? kt(e, 1) : [];
        }
        function yc(e) {
          var n = e == null ? 0 : e.length;
          return n ? kt(e, b) : [];
        }
        function Ec(e, n) {
          var a = e == null ? 0 : e.length;
          return a ? (n = n === o ? 1 : Ct(n), kt(e, n)) : [];
        }
        function xc(e) {
          for (var n = -1, a = e == null ? 0 : e.length, T = {}; ++n < a; ) {
            var N = e[n];
            T[N[0]] = N[1];
          }
          return T;
        }
        function dl(e) {
          return e && e.length ? e[0] : o;
        }
        function Sc(e, n, a) {
          var T = e == null ? 0 : e.length;
          if (!T)
            return -1;
          var N = a == null ? 0 : Ct(a);
          return N < 0 && (N = jt(T + N, 0)), Nn(e, n, N);
        }
        function Cc(e) {
          var n = e == null ? 0 : e.length;
          return n ? Le(e, 0, -1) : [];
        }
        var Tc = It(function(e) {
          var n = bt(e, Uo);
          return n.length && n[0] === e[0] ? Io(n) : [];
        }), Dc = It(function(e) {
          var n = Fe(e), a = bt(e, Uo);
          return n === Fe(a) ? n = o : a.pop(), a.length && a[0] === e[0] ? Io(a, ht(n, 2)) : [];
        }), Rc = It(function(e) {
          var n = Fe(e), a = bt(e, Uo);
          return n = typeof n == "function" ? n : o, n && a.pop(), a.length && a[0] === e[0] ? Io(a, o, n) : [];
        });
        function Ic(e, n) {
          return e == null ? "" : Cf.call(e, n);
        }
        function Fe(e) {
          var n = e == null ? 0 : e.length;
          return n ? e[n - 1] : o;
        }
        function Pc(e, n, a) {
          var T = e == null ? 0 : e.length;
          if (!T)
            return -1;
          var N = T;
          return a !== o && (N = Ct(a), N = N < 0 ? jt(T + N, 0) : ee(N, T - 1)), n === n ? lf(e, n, N) : cr(e, ji, N, !0);
        }
        function Mc(e, n) {
          return e && e.length ? Ca(e, Ct(n)) : o;
        }
        var Nc = It(vl);
        function vl(e, n) {
          return e && e.length && n && n.length ? Bo(e, n) : e;
        }
        function Bc(e, n, a) {
          return e && e.length && n && n.length ? Bo(e, n, ht(a, 2)) : e;
        }
        function Lc(e, n, a) {
          return e && e.length && n && n.length ? Bo(e, n, o, a) : e;
        }
        var Fc = qe(function(e, n) {
          var a = e == null ? 0 : e.length, T = Co(e, n);
          return Ra(e, bt(n, function(N) {
            return _e(N, a) ? +N : N;
          }).sort(wa)), T;
        });
        function Oc(e, n) {
          var a = [];
          if (!(e && e.length))
            return a;
          var T = -1, N = [], H = e.length;
          for (n = ht(n, 3); ++T < H; ) {
            var $ = e[T];
            n($, T, e) && (a.push($), N.push(T));
          }
          return Ra(e, N), a;
        }
        function ko(e) {
          return e == null ? e : If.call(e);
        }
        function Hc(e, n, a) {
          var T = e == null ? 0 : e.length;
          return T ? (a && typeof a != "number" && le(e, n, a) ? (n = 0, a = T) : (n = n == null ? 0 : Ct(n), a = a === o ? T : Ct(a)), Le(e, n, a)) : [];
        }
        function wc(e, n) {
          return Br(e, n);
        }
        function Uc(e, n, a) {
          return Oo(e, n, ht(a, 2));
        }
        function bc(e, n) {
          var a = e == null ? 0 : e.length;
          if (a) {
            var T = Br(e, n);
            if (T < a && Qe(e[T], n))
              return T;
          }
          return -1;
        }
        function $c(e, n) {
          return Br(e, n, !0);
        }
        function Qc(e, n, a) {
          return Oo(e, n, ht(a, 2), !0);
        }
        function Yc(e, n) {
          var a = e == null ? 0 : e.length;
          if (a) {
            var T = Br(e, n, !0) - 1;
            if (Qe(e[T], n))
              return T;
          }
          return -1;
        }
        function zc(e) {
          return e && e.length ? Pa(e) : [];
        }
        function Gc(e, n) {
          return e && e.length ? Pa(e, ht(n, 2)) : [];
        }
        function Wc(e) {
          var n = e == null ? 0 : e.length;
          return n ? Le(e, 1, n) : [];
        }
        function Vc(e, n, a) {
          return e && e.length ? (n = a || n === o ? 1 : Ct(n), Le(e, 0, n < 0 ? 0 : n)) : [];
        }
        function jc(e, n, a) {
          var T = e == null ? 0 : e.length;
          return T ? (n = a || n === o ? 1 : Ct(n), n = T - n, Le(e, n < 0 ? 0 : n, T)) : [];
        }
        function Kc(e, n) {
          return e && e.length ? Lr(e, ht(n, 3), !1, !0) : [];
        }
        function Jc(e, n) {
          return e && e.length ? Lr(e, ht(n, 3)) : [];
        }
        var Xc = It(function(e) {
          return fn(kt(e, 1, Gt, !0));
        }), Zc = It(function(e) {
          var n = Fe(e);
          return Gt(n) && (n = o), fn(kt(e, 1, Gt, !0), ht(n, 2));
        }), kc = It(function(e) {
          var n = Fe(e);
          return n = typeof n == "function" ? n : o, fn(kt(e, 1, Gt, !0), o, n);
        });
        function qc(e) {
          return e && e.length ? fn(e) : [];
        }
        function _c(e, n) {
          return e && e.length ? fn(e, ht(n, 2)) : [];
        }
        function td(e, n) {
          return n = typeof n == "function" ? n : o, e && e.length ? fn(e, o, n) : [];
        }
        function qo(e) {
          if (!(e && e.length))
            return [];
          var n = 0;
          return e = rn(e, function(a) {
            if (Gt(a))
              return n = jt(a.length, n), !0;
          }), po(n, function(a) {
            return bt(e, co(a));
          });
        }
        function hl(e, n) {
          if (!(e && e.length))
            return [];
          var a = qo(e);
          return n == null ? a : bt(a, function(T) {
            return ge(n, o, T);
          });
        }
        var ed = It(function(e, n) {
          return Gt(e) ? kn(e, n) : [];
        }), nd = It(function(e) {
          return wo(rn(e, Gt));
        }), rd = It(function(e) {
          var n = Fe(e);
          return Gt(n) && (n = o), wo(rn(e, Gt), ht(n, 2));
        }), od = It(function(e) {
          var n = Fe(e);
          return n = typeof n == "function" ? n : o, wo(rn(e, Gt), o, n);
        }), id = It(qo);
        function ad(e, n) {
          return La(e || [], n || [], Zn);
        }
        function ld(e, n) {
          return La(e || [], n || [], tr);
        }
        var ud = It(function(e) {
          var n = e.length, a = n > 1 ? e[n - 1] : o;
          return a = typeof a == "function" ? (e.pop(), a) : o, hl(e, a);
        });
        function pl(e) {
          var n = L(e);
          return n.__chain__ = !0, n;
        }
        function fd(e, n) {
          return n(e), e;
        }
        function Yr(e, n) {
          return n(e);
        }
        var sd = qe(function(e) {
          var n = e.length, a = n ? e[0] : 0, T = this.__wrapped__, N = function(H) {
            return Co(H, e);
          };
          return n > 1 || this.__actions__.length || !(T instanceof Mt) || !_e(a) ? this.thru(N) : (T = T.slice(a, +a + (n ? 1 : 0)), T.__actions__.push({
            func: Yr,
            args: [N],
            thisArg: o
          }), new Ne(T, this.__chain__).thru(function(H) {
            return n && !H.length && H.push(o), H;
          }));
        });
        function cd() {
          return pl(this);
        }
        function dd() {
          return new Ne(this.value(), this.__chain__);
        }
        function vd() {
          this.__values__ === o && (this.__values__ = Ml(this.value()));
          var e = this.__index__ >= this.__values__.length, n = e ? o : this.__values__[this.__index__++];
          return { done: e, value: n };
        }
        function hd() {
          return this;
        }
        function pd(e) {
          for (var n, a = this; a instanceof Rr; ) {
            var T = ul(a);
            T.__index__ = 0, T.__values__ = o, n ? N.__wrapped__ = T : n = T;
            var N = T;
            a = a.__wrapped__;
          }
          return N.__wrapped__ = e, n;
        }
        function gd() {
          var e = this.__wrapped__;
          if (e instanceof Mt) {
            var n = e;
            return this.__actions__.length && (n = new Mt(this)), n = n.reverse(), n.__actions__.push({
              func: Yr,
              args: [ko],
              thisArg: o
            }), new Ne(n, this.__chain__);
          }
          return this.thru(ko);
        }
        function md() {
          return Ba(this.__wrapped__, this.__actions__);
        }
        var Ad = Fr(function(e, n, a) {
          Ft.call(e, a) ? ++e[a] : Ze(e, a, 1);
        });
        function yd(e, n, a) {
          var T = St(e) ? Wi : fs;
          return a && le(e, n, a) && (n = o), T(e, ht(n, 3));
        }
        function Ed(e, n) {
          var a = St(e) ? rn : ha;
          return a(e, ht(n, 3));
        }
        var xd = za(fl), Sd = za(sl);
        function Cd(e, n) {
          return kt(zr(e, n), 1);
        }
        function Td(e, n) {
          return kt(zr(e, n), b);
        }
        function Dd(e, n, a) {
          return a = a === o ? 1 : Ct(a), kt(zr(e, n), a);
        }
        function gl(e, n) {
          var a = St(e) ? Pe : un;
          return a(e, ht(n, 3));
        }
        function ml(e, n) {
          var a = St(e) ? Gu : va;
          return a(e, ht(n, 3));
        }
        var Rd = Fr(function(e, n, a) {
          Ft.call(e, a) ? e[a].push(n) : Ze(e, a, [n]);
        });
        function Id(e, n, a, T) {
          e = ce(e) ? e : zn(e), a = a && !T ? Ct(a) : 0;
          var N = e.length;
          return a < 0 && (a = jt(N + a, 0)), Kr(e) ? a <= N && e.indexOf(n, a) > -1 : !!N && Nn(e, n, a) > -1;
        }
        var Pd = It(function(e, n, a) {
          var T = -1, N = typeof n == "function", H = ce(e) ? K(e.length) : [];
          return un(e, function($) {
            H[++T] = N ? ge(n, $, a) : qn($, n, a);
          }), H;
        }), Md = Fr(function(e, n, a) {
          Ze(e, a, n);
        });
        function zr(e, n) {
          var a = St(e) ? bt : Ea;
          return a(e, ht(n, 3));
        }
        function Nd(e, n, a, T) {
          return e == null ? [] : (St(n) || (n = n == null ? [] : [n]), a = T ? o : a, St(a) || (a = a == null ? [] : [a]), Ta(e, n, a));
        }
        var Bd = Fr(function(e, n, a) {
          e[a ? 0 : 1].push(n);
        }, function() {
          return [[], []];
        });
        function Ld(e, n, a) {
          var T = St(e) ? fo : Ji, N = arguments.length < 3;
          return T(e, ht(n, 4), a, N, un);
        }
        function Fd(e, n, a) {
          var T = St(e) ? Wu : Ji, N = arguments.length < 3;
          return T(e, ht(n, 4), a, N, va);
        }
        function Od(e, n) {
          var a = St(e) ? rn : ha;
          return a(e, Vr(ht(n, 3)));
        }
        function Hd(e) {
          var n = St(e) ? fa : Is;
          return n(e);
        }
        function wd(e, n, a) {
          (a ? le(e, n, a) : n === o) ? n = 1 : n = Ct(n);
          var T = St(e) ? os : Ps;
          return T(e, n);
        }
        function Ud(e) {
          var n = St(e) ? is : Ns;
          return n(e);
        }
        function bd(e) {
          if (e == null)
            return 0;
          if (ce(e))
            return Kr(e) ? Ln(e) : e.length;
          var n = ne(e);
          return n == _t || n == zt ? e.size : Mo(e).length;
        }
        function $d(e, n, a) {
          var T = St(e) ? so : Bs;
          return a && le(e, n, a) && (n = o), T(e, ht(n, 3));
        }
        var Qd = It(function(e, n) {
          if (e == null)
            return [];
          var a = n.length;
          return a > 1 && le(e, n[0], n[1]) ? n = [] : a > 2 && le(n[0], n[1], n[2]) && (n = [n[0]]), Ta(e, kt(n, 1), []);
        }), Gr = Ef || function() {
          return Zt.Date.now();
        };
        function Yd(e, n) {
          if (typeof n != "function")
            throw new Me(f);
          return e = Ct(e), function() {
            if (--e < 1)
              return n.apply(this, arguments);
          };
        }
        function Al(e, n, a) {
          return n = a ? o : n, n = e && n == null ? e.length : n, ke(e, R, o, o, o, o, n);
        }
        function yl(e, n) {
          var a;
          if (typeof n != "function")
            throw new Me(f);
          return e = Ct(e), function() {
            return --e > 0 && (a = n.apply(this, arguments)), e <= 1 && (n = o), a;
          };
        }
        var _o = It(function(e, n, a) {
          var T = c;
          if (a.length) {
            var N = an(a, Qn(_o));
            T |= S;
          }
          return ke(e, T, n, a, N);
        }), El = It(function(e, n, a) {
          var T = c | m;
          if (a.length) {
            var N = an(a, Qn(El));
            T |= S;
          }
          return ke(n, T, e, a, N);
        });
        function xl(e, n, a) {
          n = a ? o : n;
          var T = ke(e, A, o, o, o, o, o, n);
          return T.placeholder = xl.placeholder, T;
        }
        function Sl(e, n, a) {
          n = a ? o : n;
          var T = ke(e, x, o, o, o, o, o, n);
          return T.placeholder = Sl.placeholder, T;
        }
        function Cl(e, n, a) {
          var T, N, H, $, Y, V, X = 0, Z = !1, k = !1, ot = !0;
          if (typeof e != "function")
            throw new Me(f);
          n = Oe(n) || 0, $t(a) && (Z = !!a.leading, k = "maxWait" in a, H = k ? jt(Oe(a.maxWait) || 0, n) : H, ot = "trailing" in a ? !!a.trailing : ot);
          function dt(Wt) {
            var Ye = T, nn = N;
            return T = N = o, X = Wt, $ = e.apply(nn, Ye), $;
          }
          function pt(Wt) {
            return X = Wt, Y = rr(Pt, n), Z ? dt(Wt) : $;
          }
          function Tt(Wt) {
            var Ye = Wt - V, nn = Wt - X, zl = n - Ye;
            return k ? ee(zl, H - nn) : zl;
          }
          function gt(Wt) {
            var Ye = Wt - V, nn = Wt - X;
            return V === o || Ye >= n || Ye < 0 || k && nn >= H;
          }
          function Pt() {
            var Wt = Gr();
            if (gt(Wt))
              return Nt(Wt);
            Y = rr(Pt, Tt(Wt));
          }
          function Nt(Wt) {
            return Y = o, ot && T ? dt(Wt) : (T = N = o, $);
          }
          function Ee() {
            Y !== o && Fa(Y), X = 0, T = V = N = Y = o;
          }
          function ue() {
            return Y === o ? $ : Nt(Gr());
          }
          function xe() {
            var Wt = Gr(), Ye = gt(Wt);
            if (T = arguments, N = this, V = Wt, Ye) {
              if (Y === o)
                return pt(V);
              if (k)
                return Fa(Y), Y = rr(Pt, n), dt(V);
            }
            return Y === o && (Y = rr(Pt, n)), $;
          }
          return xe.cancel = Ee, xe.flush = ue, xe;
        }
        var zd = It(function(e, n) {
          return da(e, 1, n);
        }), Gd = It(function(e, n, a) {
          return da(e, Oe(n) || 0, a);
        });
        function Wd(e) {
          return ke(e, B);
        }
        function Wr(e, n) {
          if (typeof e != "function" || n != null && typeof n != "function")
            throw new Me(f);
          var a = function() {
            var T = arguments, N = n ? n.apply(this, T) : T[0], H = a.cache;
            if (H.has(N))
              return H.get(N);
            var $ = e.apply(this, T);
            return a.cache = H.set(N, $) || H, $;
          };
          return a.cache = new (Wr.Cache || Xe)(), a;
        }
        Wr.Cache = Xe;
        function Vr(e) {
          if (typeof e != "function")
            throw new Me(f);
          return function() {
            var n = arguments;
            switch (n.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, n[0]);
              case 2:
                return !e.call(this, n[0], n[1]);
              case 3:
                return !e.call(this, n[0], n[1], n[2]);
            }
            return !e.apply(this, n);
          };
        }
        function Vd(e) {
          return yl(2, e);
        }
        var jd = Ls(function(e, n) {
          n = n.length == 1 && St(n[0]) ? bt(n[0], me(ht())) : bt(kt(n, 1), me(ht()));
          var a = n.length;
          return It(function(T) {
            for (var N = -1, H = ee(T.length, a); ++N < H; )
              T[N] = n[N].call(this, T[N]);
            return ge(e, this, T);
          });
        }), ti = It(function(e, n) {
          var a = an(n, Qn(ti));
          return ke(e, S, o, n, a);
        }), Tl = It(function(e, n) {
          var a = an(n, Qn(Tl));
          return ke(e, D, o, n, a);
        }), Kd = qe(function(e, n) {
          return ke(e, P, o, o, o, n);
        });
        function Jd(e, n) {
          if (typeof e != "function")
            throw new Me(f);
          return n = n === o ? n : Ct(n), It(e, n);
        }
        function Xd(e, n) {
          if (typeof e != "function")
            throw new Me(f);
          return n = n == null ? 0 : jt(Ct(n), 0), It(function(a) {
            var T = a[n], N = cn(a, 0, n);
            return T && on(N, T), ge(e, this, N);
          });
        }
        function Zd(e, n, a) {
          var T = !0, N = !0;
          if (typeof e != "function")
            throw new Me(f);
          return $t(a) && (T = "leading" in a ? !!a.leading : T, N = "trailing" in a ? !!a.trailing : N), Cl(e, n, {
            leading: T,
            maxWait: n,
            trailing: N
          });
        }
        function kd(e) {
          return Al(e, 1);
        }
        function qd(e, n) {
          return ti(bo(n), e);
        }
        function _d() {
          if (!arguments.length)
            return [];
          var e = arguments[0];
          return St(e) ? e : [e];
        }
        function tv(e) {
          return Be(e, v);
        }
        function ev(e, n) {
          return n = typeof n == "function" ? n : o, Be(e, v, n);
        }
        function nv(e) {
          return Be(e, h | v);
        }
        function rv(e, n) {
          return n = typeof n == "function" ? n : o, Be(e, h | v, n);
        }
        function ov(e, n) {
          return n == null || ca(e, n, Jt(n));
        }
        function Qe(e, n) {
          return e === n || e !== e && n !== n;
        }
        var iv = Ur(Ro), av = Ur(function(e, n) {
          return e >= n;
        }), Tn = ma(/* @__PURE__ */ function() {
          return arguments;
        }()) ? ma : function(e) {
          return Yt(e) && Ft.call(e, "callee") && !ra.call(e, "callee");
        }, St = K.isArray, lv = bi ? me(bi) : ps;
        function ce(e) {
          return e != null && jr(e.length) && !tn(e);
        }
        function Gt(e) {
          return Yt(e) && ce(e);
        }
        function uv(e) {
          return e === !0 || e === !1 || Yt(e) && ae(e) == et;
        }
        var dn = Sf || ci, fv = $i ? me($i) : gs;
        function sv(e) {
          return Yt(e) && e.nodeType === 1 && !or(e);
        }
        function cv(e) {
          if (e == null)
            return !0;
          if (ce(e) && (St(e) || typeof e == "string" || typeof e.splice == "function" || dn(e) || Yn(e) || Tn(e)))
            return !e.length;
          var n = ne(e);
          if (n == _t || n == zt)
            return !e.size;
          if (nr(e))
            return !Mo(e).length;
          for (var a in e)
            if (Ft.call(e, a))
              return !1;
          return !0;
        }
        function dv(e, n) {
          return _n(e, n);
        }
        function vv(e, n, a) {
          a = typeof a == "function" ? a : o;
          var T = a ? a(e, n) : o;
          return T === o ? _n(e, n, o, a) : !!T;
        }
        function ei(e) {
          if (!Yt(e))
            return !1;
          var n = ae(e);
          return n == Dt || n == mt || typeof e.message == "string" && typeof e.name == "string" && !or(e);
        }
        function hv(e) {
          return typeof e == "number" && ia(e);
        }
        function tn(e) {
          if (!$t(e))
            return !1;
          var n = ae(e);
          return n == Ht || n == fe || n == tt || n == He;
        }
        function Dl(e) {
          return typeof e == "number" && e == Ct(e);
        }
        function jr(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Q;
        }
        function $t(e) {
          var n = typeof e;
          return e != null && (n == "object" || n == "function");
        }
        function Yt(e) {
          return e != null && typeof e == "object";
        }
        var Rl = Qi ? me(Qi) : As;
        function pv(e, n) {
          return e === n || Po(e, n, Vo(n));
        }
        function gv(e, n, a) {
          return a = typeof a == "function" ? a : o, Po(e, n, Vo(n), a);
        }
        function mv(e) {
          return Il(e) && e != +e;
        }
        function Av(e) {
          if (ec(e))
            throw new xt(r);
          return Aa(e);
        }
        function yv(e) {
          return e === null;
        }
        function Ev(e) {
          return e == null;
        }
        function Il(e) {
          return typeof e == "number" || Yt(e) && ae(e) == Kt;
        }
        function or(e) {
          if (!Yt(e) || ae(e) != te)
            return !1;
          var n = yr(e);
          if (n === null)
            return !0;
          var a = Ft.call(n, "constructor") && n.constructor;
          return typeof a == "function" && a instanceof a && pr.call(a) == gf;
        }
        var ni = Yi ? me(Yi) : ys;
        function xv(e) {
          return Dl(e) && e >= -Q && e <= Q;
        }
        var Pl = zi ? me(zi) : Es;
        function Kr(e) {
          return typeof e == "string" || !St(e) && Yt(e) && ae(e) == je;
        }
        function ye(e) {
          return typeof e == "symbol" || Yt(e) && ae(e) == we;
        }
        var Yn = Gi ? me(Gi) : xs;
        function Sv(e) {
          return e === o;
        }
        function Cv(e) {
          return Yt(e) && ne(e) == Ce;
        }
        function Tv(e) {
          return Yt(e) && ae(e) == hn;
        }
        var Dv = Ur(No), Rv = Ur(function(e, n) {
          return e <= n;
        });
        function Ml(e) {
          if (!e)
            return [];
          if (ce(e))
            return Kr(e) ? be(e) : se(e);
          if (Vn && e[Vn])
            return rf(e[Vn]());
          var n = ne(e), a = n == _t ? mo : n == zt ? dr : zn;
          return a(e);
        }
        function en(e) {
          if (!e)
            return e === 0 ? e : 0;
          if (e = Oe(e), e === b || e === -b) {
            var n = e < 0 ? -1 : 1;
            return n * j;
          }
          return e === e ? e : 0;
        }
        function Ct(e) {
          var n = en(e), a = n % 1;
          return n === n ? a ? n - a : n : 0;
        }
        function Nl(e) {
          return e ? En(Ct(e), 0, W) : 0;
        }
        function Oe(e) {
          if (typeof e == "number")
            return e;
          if (ye(e))
            return z;
          if ($t(e)) {
            var n = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = $t(n) ? n + "" : n;
          }
          if (typeof e != "string")
            return e === 0 ? e : +e;
          e = Xi(e);
          var a = au.test(e);
          return a || uu.test(e) ? Qu(e.slice(2), a ? 2 : 8) : iu.test(e) ? z : +e;
        }
        function Bl(e) {
          return We(e, de(e));
        }
        function Iv(e) {
          return e ? En(Ct(e), -Q, Q) : e === 0 ? e : 0;
        }
        function Lt(e) {
          return e == null ? "" : Ae(e);
        }
        var Pv = bn(function(e, n) {
          if (nr(n) || ce(n)) {
            We(n, Jt(n), e);
            return;
          }
          for (var a in n)
            Ft.call(n, a) && Zn(e, a, n[a]);
        }), Ll = bn(function(e, n) {
          We(n, de(n), e);
        }), Jr = bn(function(e, n, a, T) {
          We(n, de(n), e, T);
        }), Mv = bn(function(e, n, a, T) {
          We(n, Jt(n), e, T);
        }), Nv = qe(Co);
        function Bv(e, n) {
          var a = Un(e);
          return n == null ? a : sa(a, n);
        }
        var Lv = It(function(e, n) {
          e = Ot(e);
          var a = -1, T = n.length, N = T > 2 ? n[2] : o;
          for (N && le(n[0], n[1], N) && (T = 1); ++a < T; )
            for (var H = n[a], $ = de(H), Y = -1, V = $.length; ++Y < V; ) {
              var X = $[Y], Z = e[X];
              (Z === o || Qe(Z, On[X]) && !Ft.call(e, X)) && (e[X] = H[X]);
            }
          return e;
        }), Fv = It(function(e) {
          return e.push(o, Xa), ge(Fl, o, e);
        });
        function Ov(e, n) {
          return Vi(e, ht(n, 3), Ge);
        }
        function Hv(e, n) {
          return Vi(e, ht(n, 3), Do);
        }
        function wv(e, n) {
          return e == null ? e : To(e, ht(n, 3), de);
        }
        function Uv(e, n) {
          return e == null ? e : pa(e, ht(n, 3), de);
        }
        function bv(e, n) {
          return e && Ge(e, ht(n, 3));
        }
        function $v(e, n) {
          return e && Do(e, ht(n, 3));
        }
        function Qv(e) {
          return e == null ? [] : Mr(e, Jt(e));
        }
        function Yv(e) {
          return e == null ? [] : Mr(e, de(e));
        }
        function ri(e, n, a) {
          var T = e == null ? o : xn(e, n);
          return T === o ? a : T;
        }
        function zv(e, n) {
          return e != null && qa(e, n, cs);
        }
        function oi(e, n) {
          return e != null && qa(e, n, ds);
        }
        var Gv = Wa(function(e, n, a) {
          n != null && typeof n.toString != "function" && (n = gr.call(n)), e[n] = a;
        }, ai(ve)), Wv = Wa(function(e, n, a) {
          n != null && typeof n.toString != "function" && (n = gr.call(n)), Ft.call(e, n) ? e[n].push(a) : e[n] = [a];
        }, ht), Vv = It(qn);
        function Jt(e) {
          return ce(e) ? ua(e) : Mo(e);
        }
        function de(e) {
          return ce(e) ? ua(e, !0) : Ss(e);
        }
        function jv(e, n) {
          var a = {};
          return n = ht(n, 3), Ge(e, function(T, N, H) {
            Ze(a, n(T, N, H), T);
          }), a;
        }
        function Kv(e, n) {
          var a = {};
          return n = ht(n, 3), Ge(e, function(T, N, H) {
            Ze(a, N, n(T, N, H));
          }), a;
        }
        var Jv = bn(function(e, n, a) {
          Nr(e, n, a);
        }), Fl = bn(function(e, n, a, T) {
          Nr(e, n, a, T);
        }), Xv = qe(function(e, n) {
          var a = {};
          if (e == null)
            return a;
          var T = !1;
          n = bt(n, function(H) {
            return H = sn(H, e), T || (T = H.length > 1), H;
          }), We(e, Go(e), a), T && (a = Be(a, h | y | v, Gs));
          for (var N = n.length; N--; )
            Ho(a, n[N]);
          return a;
        });
        function Zv(e, n) {
          return Ol(e, Vr(ht(n)));
        }
        var kv = qe(function(e, n) {
          return e == null ? {} : Ts(e, n);
        });
        function Ol(e, n) {
          if (e == null)
            return {};
          var a = bt(Go(e), function(T) {
            return [T];
          });
          return n = ht(n), Da(e, a, function(T, N) {
            return n(T, N[0]);
          });
        }
        function qv(e, n, a) {
          n = sn(n, e);
          var T = -1, N = n.length;
          for (N || (N = 1, e = o); ++T < N; ) {
            var H = e == null ? o : e[Ve(n[T])];
            H === o && (T = N, H = a), e = tn(H) ? H.call(e) : H;
          }
          return e;
        }
        function _v(e, n, a) {
          return e == null ? e : tr(e, n, a);
        }
        function th(e, n, a, T) {
          return T = typeof T == "function" ? T : o, e == null ? e : tr(e, n, a, T);
        }
        var Hl = Ka(Jt), wl = Ka(de);
        function eh(e, n, a) {
          var T = St(e), N = T || dn(e) || Yn(e);
          if (n = ht(n, 4), a == null) {
            var H = e && e.constructor;
            N ? a = T ? new H() : [] : $t(e) ? a = tn(H) ? Un(yr(e)) : {} : a = {};
          }
          return (N ? Pe : Ge)(e, function($, Y, V) {
            return n(a, $, Y, V);
          }), a;
        }
        function nh(e, n) {
          return e == null ? !0 : Ho(e, n);
        }
        function rh(e, n, a) {
          return e == null ? e : Na(e, n, bo(a));
        }
        function oh(e, n, a, T) {
          return T = typeof T == "function" ? T : o, e == null ? e : Na(e, n, bo(a), T);
        }
        function zn(e) {
          return e == null ? [] : go(e, Jt(e));
        }
        function ih(e) {
          return e == null ? [] : go(e, de(e));
        }
        function ah(e, n, a) {
          return a === o && (a = n, n = o), a !== o && (a = Oe(a), a = a === a ? a : 0), n !== o && (n = Oe(n), n = n === n ? n : 0), En(Oe(e), n, a);
        }
        function lh(e, n, a) {
          return n = en(n), a === o ? (a = n, n = 0) : a = en(a), e = Oe(e), vs(e, n, a);
        }
        function uh(e, n, a) {
          if (a && typeof a != "boolean" && le(e, n, a) && (n = a = o), a === o && (typeof n == "boolean" ? (a = n, n = o) : typeof e == "boolean" && (a = e, e = o)), e === o && n === o ? (e = 0, n = 1) : (e = en(e), n === o ? (n = e, e = 0) : n = en(n)), e > n) {
            var T = e;
            e = n, n = T;
          }
          if (a || e % 1 || n % 1) {
            var N = aa();
            return ee(e + N * (n - e + $u("1e-" + ((N + "").length - 1))), n);
          }
          return Lo(e, n);
        }
        var fh = $n(function(e, n, a) {
          return n = n.toLowerCase(), e + (a ? Ul(n) : n);
        });
        function Ul(e) {
          return ii(Lt(e).toLowerCase());
        }
        function bl(e) {
          return e = Lt(e), e && e.replace(su, qu).replace(Mu, "");
        }
        function sh(e, n, a) {
          e = Lt(e), n = Ae(n);
          var T = e.length;
          a = a === o ? T : En(Ct(a), 0, T);
          var N = a;
          return a -= n.length, a >= 0 && e.slice(a, N) == n;
        }
        function ch(e) {
          return e = Lt(e), e && ie.test(e) ? e.replace(oe, _u) : e;
        }
        function dh(e) {
          return e = Lt(e), e && Zl.test(e) ? e.replace(_r, "\\$&") : e;
        }
        var vh = $n(function(e, n, a) {
          return e + (a ? "-" : "") + n.toLowerCase();
        }), hh = $n(function(e, n, a) {
          return e + (a ? " " : "") + n.toLowerCase();
        }), ph = Ya("toLowerCase");
        function gh(e, n, a) {
          e = Lt(e), n = Ct(n);
          var T = n ? Ln(e) : 0;
          if (!n || T >= n)
            return e;
          var N = (n - T) / 2;
          return wr(Cr(N), a) + e + wr(Sr(N), a);
        }
        function mh(e, n, a) {
          e = Lt(e), n = Ct(n);
          var T = n ? Ln(e) : 0;
          return n && T < n ? e + wr(n - T, a) : e;
        }
        function Ah(e, n, a) {
          e = Lt(e), n = Ct(n);
          var T = n ? Ln(e) : 0;
          return n && T < n ? wr(n - T, a) + e : e;
        }
        function yh(e, n, a) {
          return a || n == null ? n = 0 : n && (n = +n), Rf(Lt(e).replace(to, ""), n || 0);
        }
        function Eh(e, n, a) {
          return (a ? le(e, n, a) : n === o) ? n = 1 : n = Ct(n), Fo(Lt(e), n);
        }
        function xh() {
          var e = arguments, n = Lt(e[0]);
          return e.length < 3 ? n : n.replace(e[1], e[2]);
        }
        var Sh = $n(function(e, n, a) {
          return e + (a ? "_" : "") + n.toLowerCase();
        });
        function Ch(e, n, a) {
          return a && typeof a != "number" && le(e, n, a) && (n = a = o), a = a === o ? W : a >>> 0, a ? (e = Lt(e), e && (typeof n == "string" || n != null && !ni(n)) && (n = Ae(n), !n && Bn(e)) ? cn(be(e), 0, a) : e.split(n, a)) : [];
        }
        var Th = $n(function(e, n, a) {
          return e + (a ? " " : "") + ii(n);
        });
        function Dh(e, n, a) {
          return e = Lt(e), a = a == null ? 0 : En(Ct(a), 0, e.length), n = Ae(n), e.slice(a, a + n.length) == n;
        }
        function Rh(e, n, a) {
          var T = L.templateSettings;
          a && le(e, n, a) && (n = o), e = Lt(e), n = Jr({}, n, T, Ja);
          var N = Jr({}, n.imports, T.imports, Ja), H = Jt(N), $ = go(N, H), Y, V, X = 0, Z = n.interpolate || lr, k = "__p += '", ot = Ao(
            (n.escape || lr).source + "|" + Z.source + "|" + (Z === ar ? ou : lr).source + "|" + (n.evaluate || lr).source + "|$",
            "g"
          ), dt = "//# sourceURL=" + (Ft.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ou + "]") + `
`;
          e.replace(ot, function(gt, Pt, Nt, Ee, ue, xe) {
            return Nt || (Nt = Ee), k += e.slice(X, xe).replace(cu, tf), Pt && (Y = !0, k += `' +
__e(` + Pt + `) +
'`), ue && (V = !0, k += `';
` + ue + `;
__p += '`), Nt && (k += `' +
((__t = (` + Nt + `)) == null ? '' : __t) +
'`), X = xe + gt.length, gt;
          }), k += `';
`;
          var pt = Ft.call(n, "variable") && n.variable;
          if (!pt)
            k = `with (obj) {
` + k + `
}
`;
          else if (nu.test(pt))
            throw new xt(l);
          k = (V ? k.replace(vt, "") : k).replace(yt, "$1").replace(Rt, "$1;"), k = "function(" + (pt || "obj") + `) {
` + (pt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Y ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + k + `return __p
}`;
          var Tt = Ql(function() {
            return Bt(H, dt + "return " + k).apply(o, $);
          });
          if (Tt.source = k, ei(Tt))
            throw Tt;
          return Tt;
        }
        function Ih(e) {
          return Lt(e).toLowerCase();
        }
        function Ph(e) {
          return Lt(e).toUpperCase();
        }
        function Mh(e, n, a) {
          if (e = Lt(e), e && (a || n === o))
            return Xi(e);
          if (!e || !(n = Ae(n)))
            return e;
          var T = be(e), N = be(n), H = Zi(T, N), $ = ki(T, N) + 1;
          return cn(T, H, $).join("");
        }
        function Nh(e, n, a) {
          if (e = Lt(e), e && (a || n === o))
            return e.slice(0, _i(e) + 1);
          if (!e || !(n = Ae(n)))
            return e;
          var T = be(e), N = ki(T, be(n)) + 1;
          return cn(T, 0, N).join("");
        }
        function Bh(e, n, a) {
          if (e = Lt(e), e && (a || n === o))
            return e.replace(to, "");
          if (!e || !(n = Ae(n)))
            return e;
          var T = be(e), N = Zi(T, be(n));
          return cn(T, N).join("");
        }
        function Lh(e, n) {
          var a = I, T = C;
          if ($t(n)) {
            var N = "separator" in n ? n.separator : N;
            a = "length" in n ? Ct(n.length) : a, T = "omission" in n ? Ae(n.omission) : T;
          }
          e = Lt(e);
          var H = e.length;
          if (Bn(e)) {
            var $ = be(e);
            H = $.length;
          }
          if (a >= H)
            return e;
          var Y = a - Ln(T);
          if (Y < 1)
            return T;
          var V = $ ? cn($, 0, Y).join("") : e.slice(0, Y);
          if (N === o)
            return V + T;
          if ($ && (Y += V.length - Y), ni(N)) {
            if (e.slice(Y).search(N)) {
              var X, Z = V;
              for (N.global || (N = Ao(N.source, Lt(mi.exec(N)) + "g")), N.lastIndex = 0; X = N.exec(Z); )
                var k = X.index;
              V = V.slice(0, k === o ? Y : k);
            }
          } else if (e.indexOf(Ae(N), Y) != Y) {
            var ot = V.lastIndexOf(N);
            ot > -1 && (V = V.slice(0, ot));
          }
          return V + T;
        }
        function Fh(e) {
          return e = Lt(e), e && Re.test(e) ? e.replace(Qt, uf) : e;
        }
        var Oh = $n(function(e, n, a) {
          return e + (a ? " " : "") + n.toUpperCase();
        }), ii = Ya("toUpperCase");
        function $l(e, n, a) {
          return e = Lt(e), n = a ? o : n, n === o ? nf(e) ? cf(e) : Ku(e) : e.match(n) || [];
        }
        var Ql = It(function(e, n) {
          try {
            return ge(e, o, n);
          } catch (a) {
            return ei(a) ? a : new xt(a);
          }
        }), Hh = qe(function(e, n) {
          return Pe(n, function(a) {
            a = Ve(a), Ze(e, a, _o(e[a], e));
          }), e;
        });
        function wh(e) {
          var n = e == null ? 0 : e.length, a = ht();
          return e = n ? bt(e, function(T) {
            if (typeof T[1] != "function")
              throw new Me(f);
            return [a(T[0]), T[1]];
          }) : [], It(function(T) {
            for (var N = -1; ++N < n; ) {
              var H = e[N];
              if (ge(H[0], this, T))
                return ge(H[1], this, T);
            }
          });
        }
        function Uh(e) {
          return us(Be(e, h));
        }
        function ai(e) {
          return function() {
            return e;
          };
        }
        function bh(e, n) {
          return e == null || e !== e ? n : e;
        }
        var $h = Ga(), Qh = Ga(!0);
        function ve(e) {
          return e;
        }
        function li(e) {
          return ya(typeof e == "function" ? e : Be(e, h));
        }
        function Yh(e) {
          return xa(Be(e, h));
        }
        function zh(e, n) {
          return Sa(e, Be(n, h));
        }
        var Gh = It(function(e, n) {
          return function(a) {
            return qn(a, e, n);
          };
        }), Wh = It(function(e, n) {
          return function(a) {
            return qn(e, a, n);
          };
        });
        function ui(e, n, a) {
          var T = Jt(n), N = Mr(n, T);
          a == null && !($t(n) && (N.length || !T.length)) && (a = n, n = e, e = this, N = Mr(n, Jt(n)));
          var H = !($t(a) && "chain" in a) || !!a.chain, $ = tn(e);
          return Pe(N, function(Y) {
            var V = n[Y];
            e[Y] = V, $ && (e.prototype[Y] = function() {
              var X = this.__chain__;
              if (H || X) {
                var Z = e(this.__wrapped__), k = Z.__actions__ = se(this.__actions__);
                return k.push({ func: V, args: arguments, thisArg: e }), Z.__chain__ = X, Z;
              }
              return V.apply(e, on([this.value()], arguments));
            });
          }), e;
        }
        function Vh() {
          return Zt._ === this && (Zt._ = mf), this;
        }
        function fi() {
        }
        function jh(e) {
          return e = Ct(e), It(function(n) {
            return Ca(n, e);
          });
        }
        var Kh = Qo(bt), Jh = Qo(Wi), Xh = Qo(so);
        function Yl(e) {
          return Ko(e) ? co(Ve(e)) : Ds(e);
        }
        function Zh(e) {
          return function(n) {
            return e == null ? o : xn(e, n);
          };
        }
        var kh = Va(), qh = Va(!0);
        function si() {
          return [];
        }
        function ci() {
          return !1;
        }
        function _h() {
          return {};
        }
        function tp() {
          return "";
        }
        function ep() {
          return !0;
        }
        function np(e, n) {
          if (e = Ct(e), e < 1 || e > Q)
            return [];
          var a = W, T = ee(e, W);
          n = ht(n), e -= W;
          for (var N = po(T, n); ++a < e; )
            n(a);
          return N;
        }
        function rp(e) {
          return St(e) ? bt(e, Ve) : ye(e) ? [e] : se(ll(Lt(e)));
        }
        function op(e) {
          var n = ++pf;
          return Lt(e) + n;
        }
        var ip = Hr(function(e, n) {
          return e + n;
        }, 0), ap = Yo("ceil"), lp = Hr(function(e, n) {
          return e / n;
        }, 1), up = Yo("floor");
        function fp(e) {
          return e && e.length ? Pr(e, ve, Ro) : o;
        }
        function sp(e, n) {
          return e && e.length ? Pr(e, ht(n, 2), Ro) : o;
        }
        function cp(e) {
          return Ki(e, ve);
        }
        function dp(e, n) {
          return Ki(e, ht(n, 2));
        }
        function vp(e) {
          return e && e.length ? Pr(e, ve, No) : o;
        }
        function hp(e, n) {
          return e && e.length ? Pr(e, ht(n, 2), No) : o;
        }
        var pp = Hr(function(e, n) {
          return e * n;
        }, 1), gp = Yo("round"), mp = Hr(function(e, n) {
          return e - n;
        }, 0);
        function Ap(e) {
          return e && e.length ? ho(e, ve) : 0;
        }
        function yp(e, n) {
          return e && e.length ? ho(e, ht(n, 2)) : 0;
        }
        return L.after = Yd, L.ary = Al, L.assign = Pv, L.assignIn = Ll, L.assignInWith = Jr, L.assignWith = Mv, L.at = Nv, L.before = yl, L.bind = _o, L.bindAll = Hh, L.bindKey = El, L.castArray = _d, L.chain = pl, L.chunk = uc, L.compact = fc, L.concat = sc, L.cond = wh, L.conforms = Uh, L.constant = ai, L.countBy = Ad, L.create = Bv, L.curry = xl, L.curryRight = Sl, L.debounce = Cl, L.defaults = Lv, L.defaultsDeep = Fv, L.defer = zd, L.delay = Gd, L.difference = cc, L.differenceBy = dc, L.differenceWith = vc, L.drop = hc, L.dropRight = pc, L.dropRightWhile = gc, L.dropWhile = mc, L.fill = Ac, L.filter = Ed, L.flatMap = Cd, L.flatMapDeep = Td, L.flatMapDepth = Dd, L.flatten = cl, L.flattenDeep = yc, L.flattenDepth = Ec, L.flip = Wd, L.flow = $h, L.flowRight = Qh, L.fromPairs = xc, L.functions = Qv, L.functionsIn = Yv, L.groupBy = Rd, L.initial = Cc, L.intersection = Tc, L.intersectionBy = Dc, L.intersectionWith = Rc, L.invert = Gv, L.invertBy = Wv, L.invokeMap = Pd, L.iteratee = li, L.keyBy = Md, L.keys = Jt, L.keysIn = de, L.map = zr, L.mapKeys = jv, L.mapValues = Kv, L.matches = Yh, L.matchesProperty = zh, L.memoize = Wr, L.merge = Jv, L.mergeWith = Fl, L.method = Gh, L.methodOf = Wh, L.mixin = ui, L.negate = Vr, L.nthArg = jh, L.omit = Xv, L.omitBy = Zv, L.once = Vd, L.orderBy = Nd, L.over = Kh, L.overArgs = jd, L.overEvery = Jh, L.overSome = Xh, L.partial = ti, L.partialRight = Tl, L.partition = Bd, L.pick = kv, L.pickBy = Ol, L.property = Yl, L.propertyOf = Zh, L.pull = Nc, L.pullAll = vl, L.pullAllBy = Bc, L.pullAllWith = Lc, L.pullAt = Fc, L.range = kh, L.rangeRight = qh, L.rearg = Kd, L.reject = Od, L.remove = Oc, L.rest = Jd, L.reverse = ko, L.sampleSize = wd, L.set = _v, L.setWith = th, L.shuffle = Ud, L.slice = Hc, L.sortBy = Qd, L.sortedUniq = zc, L.sortedUniqBy = Gc, L.split = Ch, L.spread = Xd, L.tail = Wc, L.take = Vc, L.takeRight = jc, L.takeRightWhile = Kc, L.takeWhile = Jc, L.tap = fd, L.throttle = Zd, L.thru = Yr, L.toArray = Ml, L.toPairs = Hl, L.toPairsIn = wl, L.toPath = rp, L.toPlainObject = Bl, L.transform = eh, L.unary = kd, L.union = Xc, L.unionBy = Zc, L.unionWith = kc, L.uniq = qc, L.uniqBy = _c, L.uniqWith = td, L.unset = nh, L.unzip = qo, L.unzipWith = hl, L.update = rh, L.updateWith = oh, L.values = zn, L.valuesIn = ih, L.without = ed, L.words = $l, L.wrap = qd, L.xor = nd, L.xorBy = rd, L.xorWith = od, L.zip = id, L.zipObject = ad, L.zipObjectDeep = ld, L.zipWith = ud, L.entries = Hl, L.entriesIn = wl, L.extend = Ll, L.extendWith = Jr, ui(L, L), L.add = ip, L.attempt = Ql, L.camelCase = fh, L.capitalize = Ul, L.ceil = ap, L.clamp = ah, L.clone = tv, L.cloneDeep = nv, L.cloneDeepWith = rv, L.cloneWith = ev, L.conformsTo = ov, L.deburr = bl, L.defaultTo = bh, L.divide = lp, L.endsWith = sh, L.eq = Qe, L.escape = ch, L.escapeRegExp = dh, L.every = yd, L.find = xd, L.findIndex = fl, L.findKey = Ov, L.findLast = Sd, L.findLastIndex = sl, L.findLastKey = Hv, L.floor = up, L.forEach = gl, L.forEachRight = ml, L.forIn = wv, L.forInRight = Uv, L.forOwn = bv, L.forOwnRight = $v, L.get = ri, L.gt = iv, L.gte = av, L.has = zv, L.hasIn = oi, L.head = dl, L.identity = ve, L.includes = Id, L.indexOf = Sc, L.inRange = lh, L.invoke = Vv, L.isArguments = Tn, L.isArray = St, L.isArrayBuffer = lv, L.isArrayLike = ce, L.isArrayLikeObject = Gt, L.isBoolean = uv, L.isBuffer = dn, L.isDate = fv, L.isElement = sv, L.isEmpty = cv, L.isEqual = dv, L.isEqualWith = vv, L.isError = ei, L.isFinite = hv, L.isFunction = tn, L.isInteger = Dl, L.isLength = jr, L.isMap = Rl, L.isMatch = pv, L.isMatchWith = gv, L.isNaN = mv, L.isNative = Av, L.isNil = Ev, L.isNull = yv, L.isNumber = Il, L.isObject = $t, L.isObjectLike = Yt, L.isPlainObject = or, L.isRegExp = ni, L.isSafeInteger = xv, L.isSet = Pl, L.isString = Kr, L.isSymbol = ye, L.isTypedArray = Yn, L.isUndefined = Sv, L.isWeakMap = Cv, L.isWeakSet = Tv, L.join = Ic, L.kebabCase = vh, L.last = Fe, L.lastIndexOf = Pc, L.lowerCase = hh, L.lowerFirst = ph, L.lt = Dv, L.lte = Rv, L.max = fp, L.maxBy = sp, L.mean = cp, L.meanBy = dp, L.min = vp, L.minBy = hp, L.stubArray = si, L.stubFalse = ci, L.stubObject = _h, L.stubString = tp, L.stubTrue = ep, L.multiply = pp, L.nth = Mc, L.noConflict = Vh, L.noop = fi, L.now = Gr, L.pad = gh, L.padEnd = mh, L.padStart = Ah, L.parseInt = yh, L.random = uh, L.reduce = Ld, L.reduceRight = Fd, L.repeat = Eh, L.replace = xh, L.result = qv, L.round = gp, L.runInContext = G, L.sample = Hd, L.size = bd, L.snakeCase = Sh, L.some = $d, L.sortedIndex = wc, L.sortedIndexBy = Uc, L.sortedIndexOf = bc, L.sortedLastIndex = $c, L.sortedLastIndexBy = Qc, L.sortedLastIndexOf = Yc, L.startCase = Th, L.startsWith = Dh, L.subtract = mp, L.sum = Ap, L.sumBy = yp, L.template = Rh, L.times = np, L.toFinite = en, L.toInteger = Ct, L.toLength = Nl, L.toLower = Ih, L.toNumber = Oe, L.toSafeInteger = Iv, L.toString = Lt, L.toUpper = Ph, L.trim = Mh, L.trimEnd = Nh, L.trimStart = Bh, L.truncate = Lh, L.unescape = Fh, L.uniqueId = op, L.upperCase = Oh, L.upperFirst = ii, L.each = gl, L.eachRight = ml, L.first = dl, ui(L, function() {
          var e = {};
          return Ge(L, function(n, a) {
            Ft.call(L.prototype, a) || (e[a] = n);
          }), e;
        }(), { chain: !1 }), L.VERSION = i, Pe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
          L[e].placeholder = L;
        }), Pe(["drop", "take"], function(e, n) {
          Mt.prototype[e] = function(a) {
            a = a === o ? 1 : jt(Ct(a), 0);
            var T = this.__filtered__ && !n ? new Mt(this) : this.clone();
            return T.__filtered__ ? T.__takeCount__ = ee(a, T.__takeCount__) : T.__views__.push({
              size: ee(a, W),
              type: e + (T.__dir__ < 0 ? "Right" : "")
            }), T;
          }, Mt.prototype[e + "Right"] = function(a) {
            return this.reverse()[e](a).reverse();
          };
        }), Pe(["filter", "map", "takeWhile"], function(e, n) {
          var a = n + 1, T = a == w || a == U;
          Mt.prototype[e] = function(N) {
            var H = this.clone();
            return H.__iteratees__.push({
              iteratee: ht(N, 3),
              type: a
            }), H.__filtered__ = H.__filtered__ || T, H;
          };
        }), Pe(["head", "last"], function(e, n) {
          var a = "take" + (n ? "Right" : "");
          Mt.prototype[e] = function() {
            return this[a](1).value()[0];
          };
        }), Pe(["initial", "tail"], function(e, n) {
          var a = "drop" + (n ? "" : "Right");
          Mt.prototype[e] = function() {
            return this.__filtered__ ? new Mt(this) : this[a](1);
          };
        }), Mt.prototype.compact = function() {
          return this.filter(ve);
        }, Mt.prototype.find = function(e) {
          return this.filter(e).head();
        }, Mt.prototype.findLast = function(e) {
          return this.reverse().find(e);
        }, Mt.prototype.invokeMap = It(function(e, n) {
          return typeof e == "function" ? new Mt(this) : this.map(function(a) {
            return qn(a, e, n);
          });
        }), Mt.prototype.reject = function(e) {
          return this.filter(Vr(ht(e)));
        }, Mt.prototype.slice = function(e, n) {
          e = Ct(e);
          var a = this;
          return a.__filtered__ && (e > 0 || n < 0) ? new Mt(a) : (e < 0 ? a = a.takeRight(-e) : e && (a = a.drop(e)), n !== o && (n = Ct(n), a = n < 0 ? a.dropRight(-n) : a.take(n - e)), a);
        }, Mt.prototype.takeRightWhile = function(e) {
          return this.reverse().takeWhile(e).reverse();
        }, Mt.prototype.toArray = function() {
          return this.take(W);
        }, Ge(Mt.prototype, function(e, n) {
          var a = /^(?:filter|find|map|reject)|While$/.test(n), T = /^(?:head|last)$/.test(n), N = L[T ? "take" + (n == "last" ? "Right" : "") : n], H = T || /^find/.test(n);
          N && (L.prototype[n] = function() {
            var $ = this.__wrapped__, Y = T ? [1] : arguments, V = $ instanceof Mt, X = Y[0], Z = V || St($), k = function(Pt) {
              var Nt = N.apply(L, on([Pt], Y));
              return T && ot ? Nt[0] : Nt;
            };
            Z && a && typeof X == "function" && X.length != 1 && (V = Z = !1);
            var ot = this.__chain__, dt = !!this.__actions__.length, pt = H && !ot, Tt = V && !dt;
            if (!H && Z) {
              $ = Tt ? $ : new Mt(this);
              var gt = e.apply($, Y);
              return gt.__actions__.push({ func: Yr, args: [k], thisArg: o }), new Ne(gt, ot);
            }
            return pt && Tt ? e.apply(this, Y) : (gt = this.thru(k), pt ? T ? gt.value()[0] : gt.value() : gt);
          });
        }), Pe(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
          var n = vr[e], a = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", T = /^(?:pop|shift)$/.test(e);
          L.prototype[e] = function() {
            var N = arguments;
            if (T && !this.__chain__) {
              var H = this.value();
              return n.apply(St(H) ? H : [], N);
            }
            return this[a](function($) {
              return n.apply(St($) ? $ : [], N);
            });
          };
        }), Ge(Mt.prototype, function(e, n) {
          var a = L[n];
          if (a) {
            var T = a.name + "";
            Ft.call(wn, T) || (wn[T] = []), wn[T].push({ name: n, func: a });
          }
        }), wn[Or(o, m).name] = [{
          name: "wrapper",
          func: o
        }], Mt.prototype.clone = Ff, Mt.prototype.reverse = Of, Mt.prototype.value = Hf, L.prototype.at = sd, L.prototype.chain = cd, L.prototype.commit = dd, L.prototype.next = vd, L.prototype.plant = pd, L.prototype.reverse = gd, L.prototype.toJSON = L.prototype.valueOf = L.prototype.value = md, L.prototype.first = L.prototype.head, Vn && (L.prototype[Vn] = hd), L;
      }, Fn = df();
      gn ? ((gn.exports = Fn)._ = Fn, ao._ = Fn) : Zt._ = Fn;
    }).call(Rp);
  }(ir, ir.exports)), ir.exports;
}
var Vl = Ip(), gi = { exports: {} }, jl;
function Pp() {
  return jl || (jl = 1, function(Xt, In) {
    (function(i, t) {
      Xt.exports = t();
    })(window, function() {
      return (
        /******/
        function(o) {
          var i = {};
          function t(r) {
            if (i[r])
              return i[r].exports;
            var f = i[r] = {
              /******/
              i: r,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return o[r].call(f.exports, f, f.exports, t), f.l = !0, f.exports;
          }
          return t.m = o, t.c = i, t.d = function(r, f, l) {
            t.o(r, f) || Object.defineProperty(r, f, { enumerable: !0, get: l });
          }, t.r = function(r) {
            typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(r, "__esModule", { value: !0 });
          }, t.t = function(r, f) {
            if (f & 1 && (r = t(r)), f & 8 || f & 4 && typeof r == "object" && r && r.__esModule) return r;
            var l = /* @__PURE__ */ Object.create(null);
            if (t.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: r }), f & 2 && typeof r != "string") for (var u in r) t.d(l, u, (function(g) {
              return r[g];
            }).bind(null, u));
            return l;
          }, t.n = function(r) {
            var f = r && r.__esModule ? (
              /******/
              function() {
                return r.default;
              }
            ) : (
              /******/
              function() {
                return r;
              }
            );
            return t.d(f, "a", f), f;
          }, t.o = function(r, f) {
            return Object.prototype.hasOwnProperty.call(r, f);
          }, t.p = "", t(t.s = 141);
        }([
          /* 0 */
          /***/
          function(o, i) {
            function t(r) {
              return r && r.__esModule ? r : {
                default: r
              };
            }
            o.exports = t;
          },
          /* 1 */
          /***/
          function(o, i, t) {
            o.exports = t(142);
          },
          /* 2 */
          /***/
          function(o, i, t) {
            t.r(i), t.d(i, "__extends", function() {
              return f;
            }), t.d(i, "__assign", function() {
              return l;
            }), t.d(i, "__rest", function() {
              return u;
            }), t.d(i, "__decorate", function() {
              return g;
            }), t.d(i, "__param", function() {
              return E;
            }), t.d(i, "__metadata", function() {
              return h;
            }), t.d(i, "__awaiter", function() {
              return y;
            }), t.d(i, "__generator", function() {
              return v;
            }), t.d(i, "__createBinding", function() {
              return s;
            }), t.d(i, "__exportStar", function() {
              return d;
            }), t.d(i, "__values", function() {
              return c;
            }), t.d(i, "__read", function() {
              return m;
            }), t.d(i, "__spread", function() {
              return p;
            }), t.d(i, "__spreadArrays", function() {
              return A;
            }), t.d(i, "__spreadArray", function() {
              return x;
            }), t.d(i, "__await", function() {
              return S;
            }), t.d(i, "__asyncGenerator", function() {
              return D;
            }), t.d(i, "__asyncDelegator", function() {
              return R;
            }), t.d(i, "__asyncValues", function() {
              return P;
            }), t.d(i, "__makeTemplateObject", function() {
              return B;
            }), t.d(i, "__importStar", function() {
              return C;
            }), t.d(i, "__importDefault", function() {
              return M;
            }), t.d(i, "__classPrivateFieldGet", function() {
              return F;
            }), t.d(i, "__classPrivateFieldSet", function() {
              return w;
            });
            /*! *****************************************************************************
            		Copyright (c) Microsoft Corporation.
            
            		Permission to use, copy, modify, and/or distribute this software for any
            		purpose with or without fee is hereby granted.
            
            		THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            		REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            		AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            		INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            		LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            		OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            		PERFORMANCE OF THIS SOFTWARE.
            		***************************************************************************** */
            var r = function(O, U) {
              return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(b, Q) {
                b.__proto__ = Q;
              } || function(b, Q) {
                for (var j in Q) Object.prototype.hasOwnProperty.call(Q, j) && (b[j] = Q[j]);
              }, r(O, U);
            };
            function f(O, U) {
              if (typeof U != "function" && U !== null)
                throw new TypeError("Class extends value " + String(U) + " is not a constructor or null");
              r(O, U);
              function b() {
                this.constructor = O;
              }
              O.prototype = U === null ? Object.create(U) : (b.prototype = U.prototype, new b());
            }
            var l = function() {
              return l = Object.assign || function(U) {
                for (var b, Q = 1, j = arguments.length; Q < j; Q++) {
                  b = arguments[Q];
                  for (var z in b) Object.prototype.hasOwnProperty.call(b, z) && (U[z] = b[z]);
                }
                return U;
              }, l.apply(this, arguments);
            };
            function u(O, U) {
              var b = {};
              for (var Q in O) Object.prototype.hasOwnProperty.call(O, Q) && U.indexOf(Q) < 0 && (b[Q] = O[Q]);
              if (O != null && typeof Object.getOwnPropertySymbols == "function")
                for (var j = 0, Q = Object.getOwnPropertySymbols(O); j < Q.length; j++)
                  U.indexOf(Q[j]) < 0 && Object.prototype.propertyIsEnumerable.call(O, Q[j]) && (b[Q[j]] = O[Q[j]]);
              return b;
            }
            function g(O, U, b, Q) {
              var j = arguments.length, z = j < 3 ? U : Q === null ? Q = Object.getOwnPropertyDescriptor(U, b) : Q, W;
              if (typeof Reflect == "object" && typeof Reflect.decorate == "function") z = Reflect.decorate(O, U, b, Q);
              else for (var q = O.length - 1; q >= 0; q--) (W = O[q]) && (z = (j < 3 ? W(z) : j > 3 ? W(U, b, z) : W(U, b)) || z);
              return j > 3 && z && Object.defineProperty(U, b, z), z;
            }
            function E(O, U) {
              return function(b, Q) {
                U(b, Q, O);
              };
            }
            function h(O, U) {
              if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(O, U);
            }
            function y(O, U, b, Q) {
              function j(z) {
                return z instanceof b ? z : new b(function(W) {
                  W(z);
                });
              }
              return new (b || (b = Promise))(function(z, W) {
                function q(ft) {
                  try {
                    _(Q.next(ft));
                  } catch (at) {
                    W(at);
                  }
                }
                function ut(ft) {
                  try {
                    _(Q.throw(ft));
                  } catch (at) {
                    W(at);
                  }
                }
                function _(ft) {
                  ft.done ? z(ft.value) : j(ft.value).then(q, ut);
                }
                _((Q = Q.apply(O, U || [])).next());
              });
            }
            function v(O, U) {
              var b = { label: 0, sent: function() {
                if (z[0] & 1) throw z[1];
                return z[1];
              }, trys: [], ops: [] }, Q, j, z, W;
              return W = { next: q(0), throw: q(1), return: q(2) }, typeof Symbol == "function" && (W[Symbol.iterator] = function() {
                return this;
              }), W;
              function q(_) {
                return function(ft) {
                  return ut([_, ft]);
                };
              }
              function ut(_) {
                if (Q) throw new TypeError("Generator is already executing.");
                for (; b; ) try {
                  if (Q = 1, j && (z = _[0] & 2 ? j.return : _[0] ? j.throw || ((z = j.return) && z.call(j), 0) : j.next) && !(z = z.call(j, _[1])).done) return z;
                  switch (j = 0, z && (_ = [_[0] & 2, z.value]), _[0]) {
                    case 0:
                    case 1:
                      z = _;
                      break;
                    case 4:
                      return b.label++, { value: _[1], done: !1 };
                    case 5:
                      b.label++, j = _[1], _ = [0];
                      continue;
                    case 7:
                      _ = b.ops.pop(), b.trys.pop();
                      continue;
                    default:
                      if (z = b.trys, !(z = z.length > 0 && z[z.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                        b = 0;
                        continue;
                      }
                      if (_[0] === 3 && (!z || _[1] > z[0] && _[1] < z[3])) {
                        b.label = _[1];
                        break;
                      }
                      if (_[0] === 6 && b.label < z[1]) {
                        b.label = z[1], z = _;
                        break;
                      }
                      if (z && b.label < z[2]) {
                        b.label = z[2], b.ops.push(_);
                        break;
                      }
                      z[2] && b.ops.pop(), b.trys.pop();
                      continue;
                  }
                  _ = U.call(O, b);
                } catch (ft) {
                  _ = [6, ft], j = 0;
                } finally {
                  Q = z = 0;
                }
                if (_[0] & 5) throw _[1];
                return { value: _[0] ? _[1] : void 0, done: !0 };
              }
            }
            var s = Object.create ? function(O, U, b, Q) {
              Q === void 0 && (Q = b), Object.defineProperty(O, Q, { enumerable: !0, get: function() {
                return U[b];
              } });
            } : function(O, U, b, Q) {
              Q === void 0 && (Q = b), O[Q] = U[b];
            };
            function d(O, U) {
              for (var b in O) b !== "default" && !Object.prototype.hasOwnProperty.call(U, b) && s(U, O, b);
            }
            function c(O) {
              var U = typeof Symbol == "function" && Symbol.iterator, b = U && O[U], Q = 0;
              if (b) return b.call(O);
              if (O && typeof O.length == "number") return {
                next: function() {
                  return O && Q >= O.length && (O = void 0), { value: O && O[Q++], done: !O };
                }
              };
              throw new TypeError(U ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function m(O, U) {
              var b = typeof Symbol == "function" && O[Symbol.iterator];
              if (!b) return O;
              var Q = b.call(O), j, z = [], W;
              try {
                for (; (U === void 0 || U-- > 0) && !(j = Q.next()).done; ) z.push(j.value);
              } catch (q) {
                W = { error: q };
              } finally {
                try {
                  j && !j.done && (b = Q.return) && b.call(Q);
                } finally {
                  if (W) throw W.error;
                }
              }
              return z;
            }
            function p() {
              for (var O = [], U = 0; U < arguments.length; U++)
                O = O.concat(m(arguments[U]));
              return O;
            }
            function A() {
              for (var O = 0, U = 0, b = arguments.length; U < b; U++) O += arguments[U].length;
              for (var Q = Array(O), j = 0, U = 0; U < b; U++)
                for (var z = arguments[U], W = 0, q = z.length; W < q; W++, j++)
                  Q[j] = z[W];
              return Q;
            }
            function x(O, U) {
              for (var b = 0, Q = U.length, j = O.length; b < Q; b++, j++)
                O[j] = U[b];
              return O;
            }
            function S(O) {
              return this instanceof S ? (this.v = O, this) : new S(O);
            }
            function D(O, U, b) {
              if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
              var Q = b.apply(O, U || []), j, z = [];
              return j = {}, W("next"), W("throw"), W("return"), j[Symbol.asyncIterator] = function() {
                return this;
              }, j;
              function W(tt) {
                Q[tt] && (j[tt] = function(et) {
                  return new Promise(function(lt, mt) {
                    z.push([tt, et, lt, mt]) > 1 || q(tt, et);
                  });
                });
              }
              function q(tt, et) {
                try {
                  ut(Q[tt](et));
                } catch (lt) {
                  at(z[0][3], lt);
                }
              }
              function ut(tt) {
                tt.value instanceof S ? Promise.resolve(tt.value.v).then(_, ft) : at(z[0][2], tt);
              }
              function _(tt) {
                q("next", tt);
              }
              function ft(tt) {
                q("throw", tt);
              }
              function at(tt, et) {
                tt(et), z.shift(), z.length && q(z[0][0], z[0][1]);
              }
            }
            function R(O) {
              var U, b;
              return U = {}, Q("next"), Q("throw", function(j) {
                throw j;
              }), Q("return"), U[Symbol.iterator] = function() {
                return this;
              }, U;
              function Q(j, z) {
                U[j] = O[j] ? function(W) {
                  return (b = !b) ? { value: S(O[j](W)), done: j === "return" } : z ? z(W) : W;
                } : z;
              }
            }
            function P(O) {
              if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
              var U = O[Symbol.asyncIterator], b;
              return U ? U.call(O) : (O = typeof c == "function" ? c(O) : O[Symbol.iterator](), b = {}, Q("next"), Q("throw"), Q("return"), b[Symbol.asyncIterator] = function() {
                return this;
              }, b);
              function Q(z) {
                b[z] = O[z] && function(W) {
                  return new Promise(function(q, ut) {
                    W = O[z](W), j(q, ut, W.done, W.value);
                  });
                };
              }
              function j(z, W, q, ut) {
                Promise.resolve(ut).then(function(_) {
                  z({ value: _, done: q });
                }, W);
              }
            }
            function B(O, U) {
              return Object.defineProperty ? Object.defineProperty(O, "raw", { value: U }) : O.raw = U, O;
            }
            var I = Object.create ? function(O, U) {
              Object.defineProperty(O, "default", { enumerable: !0, value: U });
            } : function(O, U) {
              O.default = U;
            };
            function C(O) {
              if (O && O.__esModule) return O;
              var U = {};
              if (O != null) for (var b in O) b !== "default" && Object.prototype.hasOwnProperty.call(O, b) && s(U, O, b);
              return I(U, O), U;
            }
            function M(O) {
              return O && O.__esModule ? O : { default: O };
            }
            function F(O, U) {
              if (!U.has(O))
                throw new TypeError("attempted to get private field on non-instance");
              return U.get(O);
            }
            function w(O, U, b) {
              if (!U.has(O))
                throw new TypeError("attempted to set private field on non-instance");
              return U.set(O, b), b;
            }
          },
          /* 3 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(89)), u = r(t(4)), g = r(t(26)), E = r(t(17)), h = r(t(121)), y = r(t(27)), v = r(t(91)), s = r(t(70)), d = r(t(28)), c = r(t(57));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.DomElement = void 0;
            var m = t(2), p = t(6), A = [];
            function x(I) {
              var C = document.createElement("div");
              C.innerHTML = I;
              var M = C.children;
              return p.toArray(M);
            }
            function S(I) {
              return I ? I instanceof HTMLCollection || I instanceof NodeList : !1;
            }
            function D(I) {
              var C = document.querySelectorAll(I);
              return p.toArray(C);
            }
            function R(I) {
              var C = [], M = [];
              return (0, l.default)(I) ? C = I : C = I.split(";"), (0, u.default)(C).call(C, function(F) {
                var w, O = (0, g.default)(w = F.split(":")).call(w, function(U) {
                  return (0, E.default)(U).call(U);
                });
                O.length === 2 && M.push(O[0] + ":" + O[1]);
              }), M;
            }
            var P = (
              /** @class */
              function() {
                function I(C) {
                  if (this.elems = [], this.length = this.elems.length, this.dataSource = new h.default(), !!C) {
                    if (C instanceof I)
                      return C;
                    var M = [], F = C instanceof Node ? C.nodeType : -1;
                    if (this.selector = C, F === 1 || F === 9)
                      M = [C];
                    else if (S(C))
                      M = p.toArray(C);
                    else if (C instanceof Array)
                      M = C;
                    else if (typeof C == "string") {
                      var w, O = (0, E.default)(w = C.replace(`/
/mg`, "")).call(w);
                      (0, y.default)(O).call(O, "<") === 0 ? M = x(O) : M = D(O);
                    }
                    var U = M.length;
                    if (!U)
                      return this;
                    for (var b = 0; b < U; b++)
                      this.elems.push(M[b]);
                    this.length = U;
                  }
                }
                return (0, f.default)(I.prototype, "id", {
                  /**
                   * 获取元素 id
                   */
                  get: function() {
                    return this.elems[0].id;
                  },
                  enumerable: !1,
                  configurable: !0
                }), I.prototype.forEach = function(C) {
                  for (var M = 0; M < this.length; M++) {
                    var F = this.elems[M], w = C.call(F, F, M);
                    if (w === !1)
                      break;
                  }
                  return this;
                }, I.prototype.clone = function(C) {
                  var M;
                  C === void 0 && (C = !1);
                  var F = [];
                  return (0, u.default)(M = this.elems).call(M, function(w) {
                    F.push(w.cloneNode(!!C));
                  }), B(F);
                }, I.prototype.get = function(C) {
                  C === void 0 && (C = 0);
                  var M = this.length;
                  return C >= M && (C = C % M), B(this.elems[C]);
                }, I.prototype.first = function() {
                  return this.get(0);
                }, I.prototype.last = function() {
                  var C = this.length;
                  return this.get(C - 1);
                }, I.prototype.on = function(C, M, F) {
                  var w;
                  return C ? (typeof M == "function" && (F = M, M = ""), (0, u.default)(w = this).call(w, function(O) {
                    if (!M) {
                      O.addEventListener(C, F);
                      return;
                    }
                    var U = function(Q) {
                      var j = Q.target;
                      j.matches(M) && F.call(j, Q);
                    };
                    O.addEventListener(C, U), A.push({
                      elem: O,
                      selector: M,
                      fn: F,
                      agentFn: U
                    });
                  })) : this;
                }, I.prototype.off = function(C, M, F) {
                  var w;
                  return C ? (typeof M == "function" && (F = M, M = ""), (0, u.default)(w = this).call(w, function(O) {
                    if (M) {
                      for (var U = -1, b = 0; b < A.length; b++) {
                        var Q = A[b];
                        if (Q.selector === M && Q.fn === F && Q.elem === O) {
                          U = b;
                          break;
                        }
                      }
                      if (U !== -1) {
                        var j = (0, v.default)(A).call(A, U, 1)[0].agentFn;
                        O.removeEventListener(C, j);
                      }
                    } else
                      O.removeEventListener(C, F);
                  })) : this;
                }, I.prototype.attr = function(C, M) {
                  var F;
                  return M == null ? this.elems[0].getAttribute(C) || "" : (0, u.default)(F = this).call(F, function(w) {
                    w.setAttribute(C, M);
                  });
                }, I.prototype.removeAttr = function(C) {
                  var M;
                  (0, u.default)(M = this).call(M, function(F) {
                    F.removeAttribute(C);
                  });
                }, I.prototype.addClass = function(C) {
                  var M;
                  return C ? (0, u.default)(M = this).call(M, function(F) {
                    if (F.className) {
                      var w = F.className.split(/\s/);
                      w = (0, s.default)(w).call(w, function(O) {
                        return !!(0, E.default)(O).call(O);
                      }), (0, y.default)(w).call(w, C) < 0 && w.push(C), F.className = w.join(" ");
                    } else
                      F.className = C;
                  }) : this;
                }, I.prototype.removeClass = function(C) {
                  var M;
                  return C ? (0, u.default)(M = this).call(M, function(F) {
                    if (F.className) {
                      var w = F.className.split(/\s/);
                      w = (0, s.default)(w).call(w, function(O) {
                        return O = (0, E.default)(O).call(O), !(!O || O === C);
                      }), F.className = w.join(" ");
                    }
                  }) : this;
                }, I.prototype.hasClass = function(C) {
                  if (!C)
                    return !1;
                  var M = this.elems[0];
                  if (!M.className)
                    return !1;
                  var F = M.className.split(/\s/);
                  return (0, d.default)(F).call(F, C);
                }, I.prototype.css = function(C, M) {
                  var F, w;
                  return M == "" ? w = "" : w = C + ":" + M + ";", (0, u.default)(F = this).call(F, function(O) {
                    var U, b = (0, E.default)(U = O.getAttribute("style") || "").call(U);
                    if (b) {
                      var Q = R(b);
                      Q = (0, g.default)(Q).call(Q, function(j) {
                        return (0, y.default)(j).call(j, C) === 0 ? w : j;
                      }), w != "" && (0, y.default)(Q).call(Q, w) < 0 && Q.push(w), w == "" && (Q = R(Q)), O.setAttribute("style", Q.join("; "));
                    } else
                      O.setAttribute("style", w);
                  });
                }, I.prototype.getBoundingClientRect = function() {
                  var C = this.elems[0];
                  return C.getBoundingClientRect();
                }, I.prototype.show = function() {
                  return this.css("display", "block");
                }, I.prototype.hide = function() {
                  return this.css("display", "none");
                }, I.prototype.children = function() {
                  var C = this.elems[0];
                  return C ? B(C.children) : null;
                }, I.prototype.childNodes = function() {
                  var C = this.elems[0];
                  return C ? B(C.childNodes) : null;
                }, I.prototype.replaceChildAll = function(C) {
                  for (var M = this.getNode(), F = this.elems[0]; F.hasChildNodes(); )
                    M.firstChild && F.removeChild(M.firstChild);
                  this.append(C);
                }, I.prototype.append = function(C) {
                  var M;
                  return (0, u.default)(M = this).call(M, function(F) {
                    (0, u.default)(C).call(C, function(w) {
                      F.appendChild(w);
                    });
                  });
                }, I.prototype.remove = function() {
                  var C;
                  return (0, u.default)(C = this).call(C, function(M) {
                    if (M.remove)
                      M.remove();
                    else {
                      var F = M.parentElement;
                      F && F.removeChild(M);
                    }
                  });
                }, I.prototype.isContain = function(C) {
                  var M = this.elems[0], F = C.elems[0];
                  return M.contains(F);
                }, I.prototype.getNodeName = function() {
                  var C = this.elems[0];
                  return C.nodeName;
                }, I.prototype.getNode = function(C) {
                  C === void 0 && (C = 0);
                  var M;
                  return M = this.elems[C], M;
                }, I.prototype.find = function(C) {
                  var M = this.elems[0];
                  return B(M.querySelectorAll(C));
                }, I.prototype.text = function(C) {
                  if (C) {
                    var F;
                    return (0, u.default)(F = this).call(F, function(w) {
                      w.innerHTML = C;
                    });
                  } else {
                    var M = this.elems[0];
                    return M.innerHTML.replace(/<[^>]+>/g, function() {
                      return "";
                    });
                  }
                }, I.prototype.html = function(C) {
                  var M = this.elems[0];
                  return C ? (M.innerHTML = C, this) : M.innerHTML;
                }, I.prototype.val = function() {
                  var C, M = this.elems[0];
                  return (0, E.default)(C = M.value).call(C);
                }, I.prototype.focus = function() {
                  var C;
                  return (0, u.default)(C = this).call(C, function(M) {
                    M.focus();
                  });
                }, I.prototype.prev = function() {
                  var C = this.elems[0];
                  return B(C.previousElementSibling);
                }, I.prototype.next = function() {
                  var C = this.elems[0];
                  return B(C.nextElementSibling);
                }, I.prototype.getNextSibling = function() {
                  var C = this.elems[0];
                  return B(C.nextSibling);
                }, I.prototype.parent = function() {
                  var C = this.elems[0];
                  return B(C.parentElement);
                }, I.prototype.parentUntil = function(C, M) {
                  var F = M || this.elems[0];
                  if (F.nodeName === "BODY")
                    return null;
                  var w = F.parentElement;
                  return w === null ? null : w.matches(C) ? B(w) : this.parentUntil(C, w);
                }, I.prototype.parentUntilEditor = function(C, M, F) {
                  var w = F || this.elems[0];
                  if (B(w).equal(M.$textContainerElem) || B(w).equal(M.$toolbarElem))
                    return null;
                  var O = w.parentElement;
                  return O === null ? null : O.matches(C) ? B(O) : this.parentUntilEditor(C, M, O);
                }, I.prototype.equal = function(C) {
                  return C instanceof I ? this.elems[0] === C.elems[0] : C instanceof HTMLElement ? this.elems[0] === C : !1;
                }, I.prototype.insertBefore = function(C) {
                  var M, F = B(C), w = F.elems[0];
                  return w ? (0, u.default)(M = this).call(M, function(O) {
                    var U = w.parentNode;
                    U == null || U.insertBefore(O, w);
                  }) : this;
                }, I.prototype.insertAfter = function(C) {
                  var M, F = B(C), w = F.elems[0], O = w && w.nextSibling;
                  return w ? (0, u.default)(M = this).call(M, function(U) {
                    var b = w.parentNode;
                    O ? b.insertBefore(U, O) : b.appendChild(U);
                  }) : this;
                }, I.prototype.data = function(C, M) {
                  if (M != null)
                    this.dataSource.set(C, M);
                  else
                    return this.dataSource.get(C);
                }, I.prototype.getNodeTop = function(C) {
                  if (this.length < 1)
                    return this;
                  var M = this.parent();
                  return C.$textElem.equal(this) || C.$textElem.equal(M) ? this : (M.prior = this, M.getNodeTop(C));
                }, I.prototype.getOffsetData = function() {
                  var C = this.elems[0];
                  return {
                    top: C.offsetTop,
                    left: C.offsetLeft,
                    width: C.offsetWidth,
                    height: C.offsetHeight,
                    parent: C.offsetParent
                  };
                }, I.prototype.scrollTop = function(C) {
                  var M = this.elems[0];
                  M.scrollTo({
                    top: C
                  });
                }, I;
              }()
            );
            i.DomElement = P;
            function B() {
              for (var I = [], C = 0; C < arguments.length; C++)
                I[C] = arguments[C];
              return new ((0, c.default)(P).apply(P, m.__spreadArrays([void 0], I)))();
            }
            i.default = B;
          },
          /* 4 */
          /***/
          function(o, i, t) {
            o.exports = t(180);
          },
          /* 5 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(71).f, l = t(101), u = t(9), g = t(40), E = t(19), h = t(16), y = function(v) {
              var s = function(d, c, m) {
                if (this instanceof v) {
                  switch (arguments.length) {
                    case 0:
                      return new v();
                    case 1:
                      return new v(d);
                    case 2:
                      return new v(d, c);
                  }
                  return new v(d, c, m);
                }
                return v.apply(this, arguments);
              };
              return s.prototype = v.prototype, s;
            };
            o.exports = function(v, s) {
              var d = v.target, c = v.global, m = v.stat, p = v.proto, A = c ? r : m ? r[d] : (r[d] || {}).prototype, x = c ? u : u[d] || (u[d] = {}), S = x.prototype, D, R, P, B, I, C, M, F, w;
              for (B in s)
                D = l(c ? B : d + (m ? "." : "#") + B, v.forced), R = !D && A && h(A, B), C = x[B], R && (v.noTargetGet ? (w = f(A, B), M = w && w.value) : M = A[B]), I = R && M ? M : s[B], !(R && typeof C == typeof I) && (v.bind && R ? F = g(I, r) : v.wrap && R ? F = y(I) : p && typeof I == "function" ? F = g(Function.call, I) : F = I, (v.sham || I && I.sham || C && C.sham) && E(F, "sham", !0), x[B] = F, p && (P = d + "Prototype", h(u, P) || E(u, P, {}), u[P][B] = I, v.real && S && !S[B] && E(S, B, I)));
            };
          },
          /* 6 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(92)), l = r(t(1)), u = r(t(256)), g = r(t(45)), E = r(t(46)), h = r(t(89)), y = r(t(26));
            (0, l.default)(i, "__esModule", {
              value: !0
            }), i.hexToRgb = i.getRandomCode = i.toArray = i.deepClone = i.isFunction = i.debounce = i.throttle = i.arrForEach = i.forEach = i.replaceSpecialSymbol = i.replaceHtmlSymbol = i.getRandom = i.UA = void 0;
            var v = t(2), s = (
              /** @class */
              function() {
                function C() {
                  this._ua = navigator.userAgent;
                  var M = this._ua.match(/(Edge?)\/(\d+)/);
                  this.isOldEdge = !!(M && M[1] == "Edge" && (0, u.default)(M[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
                }
                return C.prototype.isIE = function() {
                  return "ActiveXObject" in window;
                }, C.prototype.isWebkit = function() {
                  return /webkit/i.test(this._ua);
                }, C;
              }()
            );
            i.UA = new s();
            function d(C) {
              var M;
              return C === void 0 && (C = ""), C + (0, g.default)(M = Math.random().toString()).call(M, 2);
            }
            i.getRandom = d;
            function c(C) {
              return C.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
            }
            i.replaceHtmlSymbol = c;
            function m(C) {
              return C.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
            }
            i.replaceSpecialSymbol = m;
            function p(C, M) {
              for (var F in C)
                if (Object.prototype.hasOwnProperty.call(C, F)) {
                  var w = M(F, C[F]);
                  if (w === !1)
                    break;
                }
            }
            i.forEach = p;
            function A(C, M) {
              var F, w, O, U = C.length || 0;
              for (F = 0; F < U && (w = C[F], O = M.call(C, w, F), O !== !1); F++)
                ;
            }
            i.arrForEach = A;
            function x(C, M) {
              M === void 0 && (M = 200);
              var F = !1;
              return function() {
                for (var w = this, O = [], U = 0; U < arguments.length; U++)
                  O[U] = arguments[U];
                F || (F = !0, (0, E.default)(function() {
                  F = !1, C.call.apply(C, v.__spreadArrays([w], O));
                }, M));
              };
            }
            i.throttle = x;
            function S(C, M) {
              M === void 0 && (M = 200);
              var F = 0;
              return function() {
                for (var w = this, O = [], U = 0; U < arguments.length; U++)
                  O[U] = arguments[U];
                F && window.clearTimeout(F), F = (0, E.default)(function() {
                  F = 0, C.call.apply(C, v.__spreadArrays([w], O));
                }, M);
              };
            }
            i.debounce = S;
            function D(C) {
              return typeof C == "function";
            }
            i.isFunction = D;
            function R(C) {
              if ((0, f.default)(C) !== "object" || typeof C == "function" || C === null)
                return C;
              var M;
              (0, h.default)(C) && (M = []), (0, h.default)(C) || (M = {});
              for (var F in C)
                Object.prototype.hasOwnProperty.call(C, F) && (M[F] = R(C[F]));
              return M;
            }
            i.deepClone = R;
            function P(C) {
              return (0, g.default)(Array.prototype).call(C);
            }
            i.toArray = P;
            function B() {
              var C;
              return (0, g.default)(C = Math.random().toString(36)).call(C, -5);
            }
            i.getRandomCode = B;
            function I(C) {
              var M = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(C);
              if (M == null) return null;
              var F = (0, y.default)(M).call(M, function(b) {
                return (0, u.default)(b, 16);
              }), w = F[1], O = F[2], U = F[3];
              return "rgb(" + w + ", " + O + ", " + U + ")";
            }
            i.hexToRgb = I;
          },
          /* 7 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.EMPTY_P_REGEX = i.EMPTY_P_LAST_REGEX = i.EMPTY_P = i.urlRegex = i.EMPTY_FN = void 0;
            function l() {
            }
            i.EMPTY_FN = l, i.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, i.EMPTY_P = '<p data-we-empty-p=""><br></p>', i.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, i.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
          },
          /* 8 */
          /***/
          function(o, i, t) {
            (function(r) {
              var f = function(l) {
                return l && l.Math == Math && l;
              };
              o.exports = // eslint-disable-next-line no-undef
              f(typeof globalThis == "object" && globalThis) || f(typeof window == "object" && window) || f(typeof self == "object" && self) || f(typeof r == "object" && r) || // eslint-disable-next-line no-new-func
              Function("return this")();
            }).call(this, t(145));
          },
          /* 9 */
          /***/
          function(o, i) {
            o.exports = {};
          },
          /* 10 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(74), l = t(16), u = t(64), g = t(76), E = t(106), h = f("wks"), y = r.Symbol, v = E ? y : y && y.withoutSetter || u;
            o.exports = function(s) {
              return l(h, s) || (g && l(y, s) ? h[s] = y[s] : h[s] = v("Symbol." + s)), h[s];
            };
          },
          /* 11 */
          /***/
          function(o, i) {
            o.exports = function(t) {
              try {
                return !!t();
              } catch {
                return !0;
              }
            };
          },
          /* 12 */
          /***/
          function(o, i, t) {
            var r = t(9), f = t(16), l = t(93), u = t(18).f;
            o.exports = function(g) {
              var E = r.Symbol || (r.Symbol = {});
              f(E, g) || u(E, g, {
                value: l.f(g)
              });
            };
          },
          /* 13 */
          /***/
          function(o, i) {
            o.exports = function(t) {
              return typeof t == "object" ? t !== null : typeof t == "function";
            };
          },
          /* 14 */
          /***/
          function(o, i, t) {
            var r = t(11);
            o.exports = !r(function() {
              return Object.defineProperty({}, 1, { get: function() {
                return 7;
              } })[1] != 7;
            });
          },
          /* 15 */
          /***/
          function(o, i, t) {
            var r = t(9);
            o.exports = function(f) {
              return r[f + "Prototype"];
            };
          },
          /* 16 */
          /***/
          function(o, i) {
            var t = {}.hasOwnProperty;
            o.exports = function(r, f) {
              return t.call(r, f);
            };
          },
          /* 17 */
          /***/
          function(o, i, t) {
            o.exports = t(192);
          },
          /* 18 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(100), l = t(25), u = t(60), g = Object.defineProperty;
            i.f = r ? g : function(h, y, v) {
              if (l(h), y = u(y, !0), l(v), f) try {
                return g(h, y, v);
              } catch {
              }
              if ("get" in v || "set" in v) throw TypeError("Accessors not supported");
              return "value" in v && (h[y] = v.value), h;
            };
          },
          /* 19 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(18), l = t(48);
            o.exports = r ? function(u, g, E) {
              return f.f(u, g, l(1, E));
            } : function(u, g, E) {
              return u[g] = E, u;
            };
          },
          /* 20 */
          /***/
          function(o, i, t) {
            var r = /* @__PURE__ */ function() {
              var A;
              return function() {
                return typeof A > "u" && (A = !!(window && document && document.all && !window.atob)), A;
              };
            }(), f = /* @__PURE__ */ function() {
              var A = {};
              return function(S) {
                if (typeof A[S] > "u") {
                  var D = document.querySelector(S);
                  if (window.HTMLIFrameElement && D instanceof window.HTMLIFrameElement)
                    try {
                      D = D.contentDocument.head;
                    } catch {
                      D = null;
                    }
                  A[S] = D;
                }
                return A[S];
              };
            }(), l = [];
            function u(p) {
              for (var A = -1, x = 0; x < l.length; x++)
                if (l[x].identifier === p) {
                  A = x;
                  break;
                }
              return A;
            }
            function g(p, A) {
              for (var x = {}, S = [], D = 0; D < p.length; D++) {
                var R = p[D], P = A.base ? R[0] + A.base : R[0], B = x[P] || 0, I = "".concat(P, " ").concat(B);
                x[P] = B + 1;
                var C = u(I), M = {
                  css: R[1],
                  media: R[2],
                  sourceMap: R[3]
                };
                C !== -1 ? (l[C].references++, l[C].updater(M)) : l.push({
                  identifier: I,
                  updater: m(M, A),
                  references: 1
                }), S.push(I);
              }
              return S;
            }
            function E(p) {
              var A = document.createElement("style"), x = p.attributes || {};
              if (typeof x.nonce > "u") {
                var S = t.nc;
                S && (x.nonce = S);
              }
              if (Object.keys(x).forEach(function(R) {
                A.setAttribute(R, x[R]);
              }), typeof p.insert == "function")
                p.insert(A);
              else {
                var D = f(p.insert || "head");
                if (!D)
                  throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                D.appendChild(A);
              }
              return A;
            }
            function h(p) {
              if (p.parentNode === null)
                return !1;
              p.parentNode.removeChild(p);
            }
            var y = /* @__PURE__ */ function() {
              var A = [];
              return function(S, D) {
                return A[S] = D, A.filter(Boolean).join(`
`);
              };
            }();
            function v(p, A, x, S) {
              var D = x ? "" : S.media ? "@media ".concat(S.media, " {").concat(S.css, "}") : S.css;
              if (p.styleSheet)
                p.styleSheet.cssText = y(A, D);
              else {
                var R = document.createTextNode(D), P = p.childNodes;
                P[A] && p.removeChild(P[A]), P.length ? p.insertBefore(R, P[A]) : p.appendChild(R);
              }
            }
            function s(p, A, x) {
              var S = x.css, D = x.media, R = x.sourceMap;
              if (D ? p.setAttribute("media", D) : p.removeAttribute("media"), R && typeof btoa < "u" && (S += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R)))), " */")), p.styleSheet)
                p.styleSheet.cssText = S;
              else {
                for (; p.firstChild; )
                  p.removeChild(p.firstChild);
                p.appendChild(document.createTextNode(S));
              }
            }
            var d = null, c = 0;
            function m(p, A) {
              var x, S, D;
              if (A.singleton) {
                var R = c++;
                x = d || (d = E(A)), S = v.bind(null, x, R, !1), D = v.bind(null, x, R, !0);
              } else
                x = E(A), S = s.bind(null, x, A), D = function() {
                  h(x);
                };
              return S(p), function(B) {
                if (B) {
                  if (B.css === p.css && B.media === p.media && B.sourceMap === p.sourceMap)
                    return;
                  S(p = B);
                } else
                  D();
              };
            }
            o.exports = function(p, A) {
              A = A || {}, !A.singleton && typeof A.singleton != "boolean" && (A.singleton = r()), p = p || [];
              var x = g(p, A);
              return function(D) {
                if (D = D || [], Object.prototype.toString.call(D) === "[object Array]") {
                  for (var R = 0; R < x.length; R++) {
                    var P = x[R], B = u(P);
                    l[B].references--;
                  }
                  for (var I = g(D, A), C = 0; C < x.length; C++) {
                    var M = x[C], F = u(M);
                    l[F].references === 0 && (l[F].updater(), l.splice(F, 1));
                  }
                  x = I;
                }
              };
            };
          },
          /* 21 */
          /***/
          function(o, i, t) {
            o.exports = function(l) {
              var u = [];
              return u.toString = function() {
                return this.map(function(E) {
                  var h = r(E, l);
                  return E[2] ? "@media ".concat(E[2], " {").concat(h, "}") : h;
                }).join("");
              }, u.i = function(g, E, h) {
                typeof g == "string" && (g = [[null, g, ""]]);
                var y = {};
                if (h)
                  for (var v = 0; v < this.length; v++) {
                    var s = this[v][0];
                    s != null && (y[s] = !0);
                  }
                for (var d = 0; d < g.length; d++) {
                  var c = [].concat(g[d]);
                  h && y[c[0]] || (E && (c[2] ? c[2] = "".concat(E, " and ").concat(c[2]) : c[2] = E), u.push(c));
                }
              }, u;
            };
            function r(l, u) {
              var g = l[1] || "", E = l[3];
              if (!E)
                return g;
              if (u && typeof btoa == "function") {
                var h = f(E), y = E.sources.map(function(v) {
                  return "/*# sourceURL=".concat(E.sourceRoot || "").concat(v, " */");
                });
                return [g].concat(y).concat([h]).join(`
`);
              }
              return [g].join(`
`);
            }
            function f(l) {
              var u = btoa(unescape(encodeURIComponent(JSON.stringify(l)))), g = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u);
              return "/*# ".concat(g, " */");
            }
          },
          /* 22 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(11), l = t(16), u = Object.defineProperty, g = {}, E = function(h) {
              throw h;
            };
            o.exports = function(h, y) {
              if (l(g, h)) return g[h];
              y || (y = {});
              var v = [][h], s = l(y, "ACCESSORS") ? y.ACCESSORS : !1, d = l(y, 0) ? y[0] : E, c = l(y, 1) ? y[1] : void 0;
              return g[h] = !!v && !f(function() {
                if (s && !r) return !0;
                var m = { length: -1 };
                s ? u(m, 1, { enumerable: !0, get: E }) : m[1] = 1, v.call(m, d, c);
              });
            };
          },
          /* 23 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(95)), g = (
              /** @class */
              function(E) {
                l.__extends(h, E);
                function h(y, v) {
                  return E.call(this, y, v) || this;
                }
                return h;
              }(u.default)
            );
            i.default = g;
          },
          /* 24 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(46));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = g.__importDefault(t(95)), y = g.__importDefault(t(134)), v = (
              /** @class */
              function(s) {
                g.__extends(d, s);
                function d(c, m, p) {
                  var A = s.call(this, c, m) || this;
                  p.title = m.i18next.t("menus.dropListMenu." + p.title);
                  var x = m.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
                  if (x !== "" && p.type === "list") {
                    var S;
                    (0, l.default)(S = p.list).call(S, function(R) {
                      var P = R.$elem, B = E.default(P.children());
                      if (B.length > 0) {
                        var I = B == null ? void 0 : B.getNodeName();
                        I && I === "I" && P.addClass(x);
                      }
                    });
                  }
                  var D = new y.default(A, p);
                  return A.dropList = D, c.on("click", function() {
                    var R;
                    m.selection.getRange() != null && (c.css("z-index", m.zIndex.get("menu")), (0, l.default)(R = m.txt.eventHooks.dropListMenuHoverEvents).call(R, function(P) {
                      return P();
                    }), D.show());
                  }).on("mouseleave", function() {
                    c.css("z-index", "auto"), D.hideTimeoutId = (0, u.default)(function() {
                      D.hide();
                    });
                  }), A;
                }
                return d;
              }(h.default)
            );
            i.default = v;
          },
          /* 25 */
          /***/
          function(o, i, t) {
            var r = t(13);
            o.exports = function(f) {
              if (!r(f))
                throw TypeError(String(f) + " is not an object");
              return f;
            };
          },
          /* 26 */
          /***/
          function(o, i, t) {
            o.exports = t(188);
          },
          /* 27 */
          /***/
          function(o, i, t) {
            o.exports = t(201);
          },
          /* 28 */
          /***/
          function(o, i, t) {
            o.exports = t(213);
          },
          /* 29 */
          /***/
          function(o, i, t) {
            o.exports = t(283);
          },
          /* 30 */
          /***/
          function(o, i, t) {
            var r = t(72), f = t(49);
            o.exports = function(l) {
              return r(f(l));
            };
          },
          /* 31 */
          /***/
          function(o, i, t) {
            var r = t(49);
            o.exports = function(f) {
              return Object(r(f));
            };
          },
          /* 32 */
          /***/
          function(o, i, t) {
            var r = t(40), f = t(72), l = t(31), u = t(35), g = t(88), E = [].push, h = function(y) {
              var v = y == 1, s = y == 2, d = y == 3, c = y == 4, m = y == 6, p = y == 5 || m;
              return function(A, x, S, D) {
                for (var R = l(A), P = f(R), B = r(x, S, 3), I = u(P.length), C = 0, M = D || g, F = v ? M(A, I) : s ? M(A, 0) : void 0, w, O; I > C; C++) if ((p || C in P) && (w = P[C], O = B(w, C, R), y)) {
                  if (v) F[C] = O;
                  else if (O) switch (y) {
                    case 3:
                      return !0;
                    // some
                    case 5:
                      return w;
                    // find
                    case 6:
                      return C;
                    // findIndex
                    case 2:
                      E.call(F, w);
                  }
                  else if (c) return !1;
                }
                return m ? -1 : d || c ? c : F;
              };
            };
            o.exports = {
              // `Array.prototype.forEach` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
              forEach: h(0),
              // `Array.prototype.map` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.map
              map: h(1),
              // `Array.prototype.filter` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.filter
              filter: h(2),
              // `Array.prototype.some` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.some
              some: h(3),
              // `Array.prototype.every` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.every
              every: h(4),
              // `Array.prototype.find` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.find
              find: h(5),
              // `Array.prototype.findIndex` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
              findIndex: h(6)
            };
          },
          /* 33 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(29)), g = r(t(132));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var E = t(2), h = E.__importDefault(t(3)), y = t(7), v = (
              /** @class */
              function() {
                function s(d, c) {
                  this.menu = d, this.conf = c, this.$container = h.default('<div class="w-e-panel-container"></div>');
                  var m = d.editor;
                  m.txt.eventHooks.clickEvents.push(s.hideCurAllPanels), m.txt.eventHooks.toolbarClickEvents.push(s.hideCurAllPanels), m.txt.eventHooks.dropListMenuHoverEvents.push(s.hideCurAllPanels);
                }
                return s.prototype.create = function() {
                  var d = this, c = this.menu;
                  if (!s.createdMenus.has(c)) {
                    var m = this.conf, p = this.$container, A = m.width || 300, x = c.editor.$toolbarElem.getBoundingClientRect(), S = c.$elem.getBoundingClientRect(), D = x.height + x.top - S.top, R = (x.width - A) / 2 + x.left - S.left, P = 300;
                    Math.abs(R) > P && (S.left < document.documentElement.clientWidth / 2 ? R = -S.width / 2 : R = -A + S.width / 2), p.css("width", A + "px").css("margin-top", D + "px").css("margin-left", R + "px").css("z-index", c.editor.zIndex.get("panel"));
                    var B = h.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                    p.append(B), B.on("click", function() {
                      d.remove();
                    });
                    var I = h.default('<ul class="w-e-panel-tab-title"></ul>'), C = h.default('<div class="w-e-panel-tab-content"></div>');
                    p.append(I).append(C);
                    var M = m.height;
                    M && C.css("height", M + "px").css("overflow-y", "auto");
                    var F = m.tabs || [], w = [], O = [];
                    (0, l.default)(F).call(F, function(b, Q) {
                      if (b) {
                        var j = b.title || "", z = b.tpl || "", W = h.default('<li class="w-e-item">' + j + "</li>");
                        I.append(W);
                        var q = h.default(z);
                        C.append(q), w.push(W), O.push(q), Q === 0 ? (W.data("active", !0), W.addClass("w-e-active")) : q.hide(), W.on("click", function() {
                          W.data("active") || ((0, l.default)(w).call(w, function(ut) {
                            ut.data("active", !1), ut.removeClass("w-e-active");
                          }), (0, l.default)(O).call(O, function(ut) {
                            ut.hide();
                          }), W.data("active", !0), W.addClass("w-e-active"), q.show());
                        });
                      }
                    }), p.on("click", function(b) {
                      b.stopPropagation();
                    }), c.$elem.append(p), m.setLinkValue && m.setLinkValue(p, "text"), m.setLinkValue && m.setLinkValue(p, "link"), (0, l.default)(F).call(F, function(b, Q) {
                      if (b) {
                        var j = b.events || [];
                        (0, l.default)(j).call(j, function(z) {
                          var W, q = z.selector, ut = z.type, _ = z.fn || y.EMPTY_FN, ft = O[Q], at = (W = z.bindEnter) !== null && W !== void 0 ? W : !1, tt = function(lt) {
                            return E.__awaiter(d, void 0, void 0, function() {
                              var mt;
                              return E.__generator(this, function(Dt) {
                                switch (Dt.label) {
                                  case 0:
                                    return lt.stopPropagation(), [
                                      4,
                                      _(lt)
                                      // 执行完事件之后，是否要关闭 panel
                                    ];
                                  case 1:
                                    return mt = Dt.sent(), mt && this.remove(), [
                                      2
                                      /*return*/
                                    ];
                                }
                              });
                            });
                          };
                          (0, u.default)(ft).call(ft, q).on(ut, tt), at && ut === "click" && ft.on("keyup", function(et) {
                            et.keyCode == 13 && tt(et);
                          });
                        });
                      }
                    });
                    var U = (0, u.default)(p).call(p, "input[type=text],textarea");
                    U.length && U.get(0).focus(), s.hideCurAllPanels(), c.setPanel(this), s.createdMenus.add(c);
                  }
                }, s.prototype.remove = function() {
                  var d = this.menu, c = this.$container;
                  c && c.remove(), s.createdMenus.delete(d);
                }, s.hideCurAllPanels = function() {
                  var d;
                  s.createdMenus.size !== 0 && (0, l.default)(d = s.createdMenus).call(d, function(c) {
                    var m = c.panel;
                    m && m.remove();
                  });
                }, s.createdMenus = new g.default(), s;
              }()
            );
            i.default = v;
          },
          /* 34 */
          /***/
          function(o, i) {
            var t = {}.toString;
            o.exports = function(r) {
              return t.call(r).slice(8, -1);
            };
          },
          /* 35 */
          /***/
          function(o, i, t) {
            var r = t(62), f = Math.min;
            o.exports = function(l) {
              return l > 0 ? f(r(l), 9007199254740991) : 0;
            };
          },
          /* 36 */
          /***/
          function(o, i, t) {
            var r = t(9), f = t(8), l = function(u) {
              return typeof u == "function" ? u : void 0;
            };
            o.exports = function(u, g) {
              return arguments.length < 2 ? l(r[u]) || l(f[u]) : r[u] && r[u][g] || f[u] && f[u][g];
            };
          },
          /* 37 */
          /***/
          function(o, i, t) {
            var r = t(81), f = t(18).f, l = t(19), u = t(16), g = t(170), E = t(10), h = E("toStringTag");
            o.exports = function(y, v, s, d) {
              if (y) {
                var c = s ? y : y.prototype;
                u(c, h) || f(c, h, { configurable: !0, value: v }), d && !r && l(c, "toString", g);
              }
            };
          },
          /* 38 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(95)), g = (
              /** @class */
              function(E) {
                l.__extends(h, E);
                function h(y, v) {
                  return E.call(this, y, v) || this;
                }
                return h.prototype.setPanel = function(y) {
                  this.panel = y;
                }, h;
              }(u.default)
            );
            i.default = g;
          },
          /* 39 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(57));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = (
              /** @class */
              function() {
                function y(v, s, d) {
                  this.editor = v, this.$targetElem = s, this.conf = d, this._show = !1, this._isInsertTextContainer = !1;
                  var c = E.default("<div></div>");
                  c.addClass("w-e-tooltip"), this.$container = c;
                }
                return y.prototype.getPositionData = function() {
                  var v = this.$container, s = 0, d = 0, c = 20, m = document.documentElement.scrollTop, p = this.$targetElem.getBoundingClientRect(), A = this.editor.$textElem.getBoundingClientRect(), x = this.$targetElem.getOffsetData(), S = E.default(x.parent), D = this.editor.$textElem.elems[0].scrollTop;
                  if (this._isInsertTextContainer = S.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
                    var R = S.getBoundingClientRect().height, P = x.top, B = x.left, I = x.height, C = P - D;
                    C > c + 5 ? (s = C - c - 15, v.addClass("w-e-tooltip-up")) : C + I + c < R ? (s = C + I + 10, v.addClass("w-e-tooltip-down")) : (s = (C > 0 ? C : 0) + c + 10, v.addClass("w-e-tooltip-down")), B < 0 ? d = 0 : d = B;
                  } else
                    p.top < c || p.top - A.top < c ? (s = p.bottom + m + 5, v.addClass("w-e-tooltip-down")) : (s = p.top + m - c - 15, v.addClass("w-e-tooltip-up")), p.left < 0 ? d = 0 : d = p.left;
                  return {
                    top: s,
                    left: d
                  };
                }, y.prototype.appendMenus = function() {
                  var v = this, s = this.conf, d = this.editor, c = this.$targetElem, m = this.$container;
                  (0, l.default)(s).call(s, function(p, A) {
                    var x = p.$elem, S = E.default("<div></div>");
                    S.addClass("w-e-tooltip-item-wrapper "), S.append(x), m.append(S), x.on("click", function(D) {
                      D.preventDefault();
                      var R = p.onClick(d, c);
                      R && v.remove();
                    });
                  });
                }, y.prototype.create = function() {
                  var v, s, d = this.editor, c = this.$container;
                  this.appendMenus();
                  var m = this.getPositionData(), p = m.top, A = m.left;
                  c.css("top", p + "px"), c.css("left", A + "px"), c.css("z-index", d.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(c) : E.default("body").append(c), this._show = !0, d.beforeDestroy((0, u.default)(v = this.remove).call(v, this)), d.txt.eventHooks.onBlurEvents.push((0, u.default)(s = this.remove).call(s, this));
                }, y.prototype.remove = function() {
                  this.$container.remove(), this._show = !1;
                }, (0, f.default)(y.prototype, "isShow", {
                  /**
                   * 是否显示
                   */
                  get: function() {
                    return this._show;
                  },
                  enumerable: !1,
                  configurable: !0
                }), y;
              }()
            );
            i.default = h;
          },
          /* 40 */
          /***/
          function(o, i, t) {
            var r = t(41);
            o.exports = function(f, l, u) {
              if (r(f), l === void 0) return f;
              switch (u) {
                case 0:
                  return function() {
                    return f.call(l);
                  };
                case 1:
                  return function(g) {
                    return f.call(l, g);
                  };
                case 2:
                  return function(g, E) {
                    return f.call(l, g, E);
                  };
                case 3:
                  return function(g, E, h) {
                    return f.call(l, g, E, h);
                  };
              }
              return function() {
                return f.apply(l, arguments);
              };
            };
          },
          /* 41 */
          /***/
          function(o, i) {
            o.exports = function(t) {
              if (typeof t != "function")
                throw TypeError(String(t) + " is not a function");
              return t;
            };
          },
          /* 42 */
          /***/
          function(o, i, t) {
            var r = t(165), f = t(8), l = t(13), u = t(19), g = t(16), E = t(63), h = t(51), y = f.WeakMap, v, s, d, c = function(R) {
              return d(R) ? s(R) : v(R, {});
            }, m = function(R) {
              return function(P) {
                var B;
                if (!l(P) || (B = s(P)).type !== R)
                  throw TypeError("Incompatible receiver, " + R + " required");
                return B;
              };
            };
            if (r) {
              var p = new y(), A = p.get, x = p.has, S = p.set;
              v = function(R, P) {
                return S.call(p, R, P), P;
              }, s = function(R) {
                return A.call(p, R) || {};
              }, d = function(R) {
                return x.call(p, R);
              };
            } else {
              var D = E("state");
              h[D] = !0, v = function(R, P) {
                return u(R, D, P), P;
              }, s = function(R) {
                return g(R, D) ? R[D] : {};
              }, d = function(R) {
                return g(R, D);
              };
            }
            o.exports = {
              set: v,
              get: s,
              has: d,
              enforce: c,
              getterFor: m
            };
          },
          /* 43 */
          /***/
          function(o, i) {
            o.exports = !0;
          },
          /* 44 */
          /***/
          function(o, i) {
            o.exports = {};
          },
          /* 45 */
          /***/
          function(o, i, t) {
            o.exports = t(261);
          },
          /* 46 */
          /***/
          function(o, i, t) {
            o.exports = t(265);
          },
          /* 47 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createElementFragment = i.createDocumentFragment = i.createElement = i.insertBefore = i.getEndPoint = i.getStartPoint = i.updateRange = i.filterSelectionNodes = void 0;
            var u = t(2), g = t(137), E = u.__importDefault(t(3));
            function h(A) {
              var x = [];
              return (0, l.default)(A).call(A, function(S) {
                var D = S.getNodeName();
                if (D !== g.ListType.OrderedList && D !== g.ListType.UnorderedList)
                  x.push(S);
                else if (S.prior)
                  x.push(S.prior);
                else {
                  var R = S.children();
                  R == null || (0, l.default)(R).call(R, function(P) {
                    x.push(E.default(P));
                  });
                }
              }), x;
            }
            i.filterSelectionNodes = h;
            function y(A, x, S) {
              var D = A.selection, R = document.createRange();
              x.length > 1 ? (R.setStart(x.elems[0], 0), R.setEnd(x.elems[x.length - 1], x.elems[x.length - 1].childNodes.length)) : R.selectNodeContents(x.elems[0]), S && R.collapse(!1), D.saveRange(R), D.restoreSelection();
            }
            i.updateRange = y;
            function v(A) {
              var x;
              return A.prior ? A.prior : E.default((x = A.children()) === null || x === void 0 ? void 0 : x.elems[0]);
            }
            i.getStartPoint = v;
            function s(A) {
              var x;
              return A.prior ? A.prior : E.default((x = A.children()) === null || x === void 0 ? void 0 : x.last().elems[0]);
            }
            i.getEndPoint = s;
            function d(A, x, S) {
              S === void 0 && (S = null), A.parent().elems[0].insertBefore(x, S);
            }
            i.insertBefore = d;
            function c(A) {
              return document.createElement(A);
            }
            i.createElement = c;
            function m() {
              return document.createDocumentFragment();
            }
            i.createDocumentFragment = m;
            function p(A, x, S) {
              return S === void 0 && (S = "li"), (0, l.default)(A).call(A, function(D) {
                var R = c(S);
                R.innerHTML = D.html(), x.appendChild(R), D.remove();
              }), x;
            }
            i.createElementFragment = p;
          },
          /* 48 */
          /***/
          function(o, i) {
            o.exports = function(t, r) {
              return {
                enumerable: !(t & 1),
                configurable: !(t & 2),
                writable: !(t & 4),
                value: r
              };
            };
          },
          /* 49 */
          /***/
          function(o, i) {
            o.exports = function(t) {
              if (t == null) throw TypeError("Can't call method on " + t);
              return t;
            };
          },
          /* 50 */
          /***/
          function(o, i, t) {
            var r = t(164).charAt, f = t(42), l = t(75), u = "String Iterator", g = f.set, E = f.getterFor(u);
            l(String, "String", function(h) {
              g(this, {
                type: u,
                string: String(h),
                index: 0
              });
            }, function() {
              var y = E(this), v = y.string, s = y.index, d;
              return s >= v.length ? { value: void 0, done: !0 } : (d = r(v, s), y.index += d.length, { value: d, done: !1 });
            });
          },
          /* 51 */
          /***/
          function(o, i) {
            o.exports = {};
          },
          /* 52 */
          /***/
          function(o, i, t) {
            var r = t(107), f = t(80);
            o.exports = Object.keys || function(u) {
              return r(u, f);
            };
          },
          /* 53 */
          /***/
          function(o, i, t) {
            var r = t(19);
            o.exports = function(f, l, u, g) {
              g && g.enumerable ? f[l] = u : r(f, l, u);
            };
          },
          /* 54 */
          /***/
          function(o, i, t) {
            t(173);
            var r = t(174), f = t(8), l = t(65), u = t(19), g = t(44), E = t(10), h = E("toStringTag");
            for (var y in r) {
              var v = f[y], s = v && v.prototype;
              s && l(s) !== h && u(s, h, y), g[y] = g.Array;
            }
          },
          /* 55 */
          /***/
          function(o, i, t) {
            var r = t(34);
            o.exports = Array.isArray || function(l) {
              return r(l) == "Array";
            };
          },
          /* 56 */
          /***/
          function(o, i, t) {
            var r = t(11), f = t(10), l = t(86), u = f("species");
            o.exports = function(g) {
              return l >= 51 || !r(function() {
                var E = [], h = E.constructor = {};
                return h[u] = function() {
                  return { foo: 1 };
                }, E[g](Boolean).foo !== 1;
              });
            };
          },
          /* 57 */
          /***/
          function(o, i, t) {
            o.exports = t(222);
          },
          /* 58 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.ListHandle = void 0;
            var l = t(2), u = l.__importDefault(t(373)), g = (
              /** @class */
              /* @__PURE__ */ function() {
                function E(h) {
                  this.options = h, this.selectionRangeElem = new u.default();
                }
                return E;
              }()
            );
            i.ListHandle = g;
          },
          /* 59 */
          /***/
          function(o, i, t) {
            var r = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, l = f && !r.call({ 1: 2 }, 1);
            i.f = l ? function(g) {
              var E = f(this, g);
              return !!E && E.enumerable;
            } : r;
          },
          /* 60 */
          /***/
          function(o, i, t) {
            var r = t(13);
            o.exports = function(f, l) {
              if (!r(f)) return f;
              var u, g;
              if (l && typeof (u = f.toString) == "function" && !r(g = u.call(f)) || typeof (u = f.valueOf) == "function" && !r(g = u.call(f)) || !l && typeof (u = f.toString) == "function" && !r(g = u.call(f))) return g;
              throw TypeError("Can't convert object to primitive value");
            };
          },
          /* 61 */
          /***/
          function(o, i) {
          },
          /* 62 */
          /***/
          function(o, i) {
            var t = Math.ceil, r = Math.floor;
            o.exports = function(f) {
              return isNaN(f = +f) ? 0 : (f > 0 ? r : t)(f);
            };
          },
          /* 63 */
          /***/
          function(o, i, t) {
            var r = t(74), f = t(64), l = r("keys");
            o.exports = function(u) {
              return l[u] || (l[u] = f(u));
            };
          },
          /* 64 */
          /***/
          function(o, i) {
            var t = 0, r = Math.random();
            o.exports = function(f) {
              return "Symbol(" + String(f === void 0 ? "" : f) + ")_" + (++t + r).toString(36);
            };
          },
          /* 65 */
          /***/
          function(o, i, t) {
            var r = t(81), f = t(34), l = t(10), u = l("toStringTag"), g = f(/* @__PURE__ */ function() {
              return arguments;
            }()) == "Arguments", E = function(h, y) {
              try {
                return h[y];
              } catch {
              }
            };
            o.exports = r ? f : function(h) {
              var y, v, s;
              return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (v = E(y = Object(h), u)) == "string" ? v : g ? f(y) : (s = f(y)) == "Object" && typeof y.callee == "function" ? "Arguments" : s;
            };
          },
          /* 66 */
          /***/
          function(o, i, t) {
            var r = t(25), f = t(112), l = t(35), u = t(40), g = t(113), E = t(114), h = function(v, s) {
              this.stopped = v, this.result = s;
            }, y = o.exports = function(v, s, d, c, m) {
              var p = u(s, d, c ? 2 : 1), A, x, S, D, R, P, B;
              if (m)
                A = v;
              else {
                if (x = g(v), typeof x != "function") throw TypeError("Target is not iterable");
                if (f(x)) {
                  for (S = 0, D = l(v.length); D > S; S++)
                    if (R = c ? p(r(B = v[S])[0], B[1]) : p(v[S]), R && R instanceof h) return R;
                  return new h(!1);
                }
                A = x.call(v);
              }
              for (P = A.next; !(B = P.call(A)).done; )
                if (R = E(A, p, B.value, c), typeof R == "object" && R && R instanceof h) return R;
              return new h(!1);
            };
            y.stop = function(v) {
              return new h(!0, v);
            };
          },
          /* 67 */
          /***/
          function(o, i, t) {
            var r = t(11);
            o.exports = function(f, l) {
              var u = [][f];
              return !!u && r(function() {
                u.call(null, l || function() {
                  throw 1;
                }, 1);
              });
            };
          },
          /* 68 */
          /***/
          function(o, i) {
            o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
          },
          /* 69 */
          /***/
          function(o, i, t) {
            var r = t(60), f = t(18), l = t(48);
            o.exports = function(u, g, E) {
              var h = r(g);
              h in u ? f.f(u, h, l(0, E)) : u[h] = E;
            };
          },
          /* 70 */
          /***/
          function(o, i, t) {
            o.exports = t(209);
          },
          /* 71 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(59), l = t(48), u = t(30), g = t(60), E = t(16), h = t(100), y = Object.getOwnPropertyDescriptor;
            i.f = r ? y : function(s, d) {
              if (s = u(s), d = g(d, !0), h) try {
                return y(s, d);
              } catch {
              }
              if (E(s, d)) return l(!f.f.call(s, d), s[d]);
            };
          },
          /* 72 */
          /***/
          function(o, i, t) {
            var r = t(11), f = t(34), l = "".split;
            o.exports = r(function() {
              return !Object("z").propertyIsEnumerable(0);
            }) ? function(u) {
              return f(u) == "String" ? l.call(u, "") : Object(u);
            } : Object;
          },
          /* 73 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(13), l = r.document, u = f(l) && f(l.createElement);
            o.exports = function(g) {
              return u ? l.createElement(g) : {};
            };
          },
          /* 74 */
          /***/
          function(o, i, t) {
            var r = t(43), f = t(103);
            (o.exports = function(l, u) {
              return f[l] || (f[l] = u !== void 0 ? u : {});
            })("versions", []).push({
              version: "3.6.4",
              mode: r ? "pure" : "global",
              copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            });
          },
          /* 75 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(167), l = t(105), u = t(171), g = t(37), E = t(19), h = t(53), y = t(10), v = t(43), s = t(44), d = t(104), c = d.IteratorPrototype, m = d.BUGGY_SAFARI_ITERATORS, p = y("iterator"), A = "keys", x = "values", S = "entries", D = function() {
              return this;
            };
            o.exports = function(R, P, B, I, C, M, F) {
              f(B, P, I);
              var w = function(_) {
                if (_ === C && j) return j;
                if (!m && _ in b) return b[_];
                switch (_) {
                  case A:
                    return function() {
                      return new B(this, _);
                    };
                  case x:
                    return function() {
                      return new B(this, _);
                    };
                  case S:
                    return function() {
                      return new B(this, _);
                    };
                }
                return function() {
                  return new B(this);
                };
              }, O = P + " Iterator", U = !1, b = R.prototype, Q = b[p] || b["@@iterator"] || C && b[C], j = !m && Q || w(C), z = P == "Array" && b.entries || Q, W, q, ut;
              if (z && (W = l(z.call(new R())), c !== Object.prototype && W.next && (!v && l(W) !== c && (u ? u(W, c) : typeof W[p] != "function" && E(W, p, D)), g(W, O, !0, !0), v && (s[O] = D))), C == x && Q && Q.name !== x && (U = !0, j = function() {
                return Q.call(this);
              }), (!v || F) && b[p] !== j && E(b, p, j), s[P] = j, C)
                if (q = {
                  values: w(x),
                  keys: M ? j : w(A),
                  entries: w(S)
                }, F) for (ut in q)
                  (m || U || !(ut in b)) && h(b, ut, q[ut]);
                else r({ target: P, proto: !0, forced: m || U }, q);
              return q;
            };
          },
          /* 76 */
          /***/
          function(o, i, t) {
            var r = t(11);
            o.exports = !!Object.getOwnPropertySymbols && !r(function() {
              return !String(Symbol());
            });
          },
          /* 77 */
          /***/
          function(o, i, t) {
            var r = t(25), f = t(169), l = t(80), u = t(51), g = t(108), E = t(73), h = t(63), y = ">", v = "<", s = "prototype", d = "script", c = h("IE_PROTO"), m = function() {
            }, p = function(R) {
              return v + d + y + R + v + "/" + d + y;
            }, A = function(R) {
              R.write(p("")), R.close();
              var P = R.parentWindow.Object;
              return R = null, P;
            }, x = function() {
              var R = E("iframe"), P = "java" + d + ":", B;
              return R.style.display = "none", g.appendChild(R), R.src = String(P), B = R.contentWindow.document, B.open(), B.write(p("document.F=Object")), B.close(), B.F;
            }, S, D = function() {
              try {
                S = document.domain && new ActiveXObject("htmlfile");
              } catch {
              }
              D = S ? A(S) : x();
              for (var R = l.length; R--; ) delete D[s][l[R]];
              return D();
            };
            u[c] = !0, o.exports = Object.create || function(P, B) {
              var I;
              return P !== null ? (m[s] = r(P), I = new m(), m[s] = null, I[c] = P) : I = D(), B === void 0 ? I : f(I, B);
            };
          },
          /* 78 */
          /***/
          function(o, i, t) {
            var r = t(30), f = t(35), l = t(79), u = function(g) {
              return function(E, h, y) {
                var v = r(E), s = f(v.length), d = l(y, s), c;
                if (g && h != h) {
                  for (; s > d; )
                    if (c = v[d++], c != c) return !0;
                } else for (; s > d; d++)
                  if ((g || d in v) && v[d] === h) return g || d || 0;
                return !g && -1;
              };
            };
            o.exports = {
              // `Array.prototype.includes` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.includes
              includes: u(!0),
              // `Array.prototype.indexOf` method
              // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
              indexOf: u(!1)
            };
          },
          /* 79 */
          /***/
          function(o, i, t) {
            var r = t(62), f = Math.max, l = Math.min;
            o.exports = function(u, g) {
              var E = r(u);
              return E < 0 ? f(E + g, 0) : l(E, g);
            };
          },
          /* 80 */
          /***/
          function(o, i) {
            o.exports = [
              "constructor",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "toLocaleString",
              "toString",
              "valueOf"
            ];
          },
          /* 81 */
          /***/
          function(o, i, t) {
            var r = t(10), f = r("toStringTag"), l = {};
            l[f] = "z", o.exports = String(l) === "[object z]";
          },
          /* 82 */
          /***/
          function(o, i) {
            o.exports = function() {
            };
          },
          /* 83 */
          /***/
          function(o, i) {
            o.exports = function(t, r, f) {
              if (!(t instanceof r))
                throw TypeError("Incorrect " + (f ? f + " " : "") + "invocation");
              return t;
            };
          },
          /* 84 */
          /***/
          function(o, i, t) {
            var r = t(36);
            o.exports = r("navigator", "userAgent") || "";
          },
          /* 85 */
          /***/
          function(o, i, t) {
            var r = t(41), f = function(l) {
              var u, g;
              this.promise = new l(function(E, h) {
                if (u !== void 0 || g !== void 0) throw TypeError("Bad Promise constructor");
                u = E, g = h;
              }), this.resolve = r(u), this.reject = r(g);
            };
            o.exports.f = function(l) {
              return new f(l);
            };
          },
          /* 86 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(84), l = r.process, u = l && l.versions, g = u && u.v8, E, h;
            g ? (E = g.split("."), h = E[0] + E[1]) : f && (E = f.match(/Edge\/(\d+)/), (!E || E[1] >= 74) && (E = f.match(/Chrome\/(\d+)/), E && (h = E[1]))), o.exports = h && +h;
          },
          /* 87 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(6), h = u.__importDefault(t(267)), y = u.__importDefault(t(280)), v = u.__importDefault(t(281)), s = u.__importDefault(t(282)), d = u.__importDefault(t(301)), c = u.__importStar(t(416)), m = u.__importDefault(t(417)), p = u.__importDefault(t(418)), A = u.__importDefault(t(419)), x = u.__importStar(t(420)), S = u.__importDefault(t(423)), D = u.__importDefault(t(424)), R = u.__importDefault(t(425)), P = u.__importDefault(t(427)), B = u.__importDefault(t(437)), I = u.__importDefault(t(440)), C = u.__importStar(t(441)), M = u.__importDefault(t(23)), F = u.__importDefault(t(134)), w = u.__importDefault(t(24)), O = u.__importDefault(t(33)), U = u.__importDefault(t(38)), b = u.__importDefault(t(39)), Q = 1, j = (
              /** @class */
              function() {
                function z(W, q) {
                  this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + Q++, this.toolbarSelector = W, this.textSelector = q, c.selectorValidator(this), this.config = E.deepClone(h.default), this.$toolbarElem = g.default("<div></div>"), this.$textContainerElem = g.default("<div></div>"), this.$textElem = g.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new y.default(this), this.cmd = new v.default(this), this.txt = new s.default(this), this.menus = new d.default(this), this.zIndex = new D.default(), this.change = new R.default(this), this.history = new P.default(this), this.onSelectionChange = new I.default(this);
                  var ut = B.default(this), _ = ut.disable, ft = ut.enable;
                  this.disable = _, this.enable = ft, this.isEnable = !0;
                }
                return z.prototype.initSelection = function(W) {
                  m.default(this, W);
                }, z.prototype.create = function() {
                  this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), A.default(this), c.default(this), this.txt.init(), this.menus.init(), x.default(this), this.initSelection(!0), p.default(this), this.change.observe(), this.history.observe(), C.default(this);
                }, z.prototype.beforeDestroy = function(W) {
                  return this.beforeDestroyHooks.push(W), this;
                }, z.prototype.destroy = function() {
                  var W, q = this;
                  (0, l.default)(W = this.beforeDestroyHooks).call(W, function(ut) {
                    return ut.call(q);
                  }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
                }, z.prototype.fullScreen = function() {
                  x.setFullScreen(this);
                }, z.prototype.unFullScreen = function() {
                  x.setUnFullScreen(this);
                }, z.prototype.scrollToHead = function(W) {
                  S.default(this, W);
                }, z.registerMenu = function(W, q) {
                  !q || typeof q != "function" || (z.globalCustomMenuConstructorList[W] = q);
                }, z.prototype.registerPlugin = function(W, q) {
                  C.registerPlugin(W, q, this.pluginsFunctionList);
                }, z.registerPlugin = function(W, q) {
                  C.registerPlugin(W, q, z.globalPluginsFunctionList);
                }, z.$ = g.default, z.BtnMenu = M.default, z.DropList = F.default, z.DropListMenu = w.default, z.Panel = O.default, z.PanelMenu = U.default, z.Tooltip = b.default, z.globalCustomMenuConstructorList = {}, z.globalPluginsFunctionList = {}, z;
              }()
            );
            i.default = j;
          },
          /* 88 */
          /***/
          function(o, i, t) {
            var r = t(13), f = t(55), l = t(10), u = l("species");
            o.exports = function(g, E) {
              var h;
              return f(g) && (h = g.constructor, typeof h == "function" && (h === Array || f(h.prototype)) ? h = void 0 : r(h) && (h = h[u], h === null && (h = void 0))), new (h === void 0 ? Array : h)(E === 0 ? 0 : E);
            };
          },
          /* 89 */
          /***/
          function(o, i, t) {
            o.exports = t(185);
          },
          /* 90 */
          /***/
          function(o, i, t) {
            var r = t(49), f = t(68), l = "[" + f + "]", u = RegExp("^" + l + l + "*"), g = RegExp(l + l + "*$"), E = function(h) {
              return function(y) {
                var v = String(r(y));
                return h & 1 && (v = v.replace(u, "")), h & 2 && (v = v.replace(g, "")), v;
              };
            };
            o.exports = {
              // `String.prototype.{ trimLeft, trimStart }` methods
              // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
              start: E(1),
              // `String.prototype.{ trimRight, trimEnd }` methods
              // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
              end: E(2),
              // `String.prototype.trim` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.trim
              trim: E(3)
            };
          },
          /* 91 */
          /***/
          function(o, i, t) {
            o.exports = t(205);
          },
          /* 92 */
          /***/
          function(o, i, t) {
            var r = t(227), f = t(230);
            function l(u) {
              "@babel/helpers - typeof";
              return typeof f == "function" && typeof r == "symbol" ? o.exports = l = function(E) {
                return typeof E;
              } : o.exports = l = function(E) {
                return E && typeof f == "function" && E.constructor === f && E !== f.prototype ? "symbol" : typeof E;
              }, l(u);
            }
            o.exports = l;
          },
          /* 93 */
          /***/
          function(o, i, t) {
            var r = t(10);
            i.f = r;
          },
          /* 94 */
          /***/
          function(o, i, t) {
            o.exports = t(306);
          },
          /* 95 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(33)), E = (
              /** @class */
              function() {
                function h(y, v) {
                  var s = this;
                  this.$elem = y, this.editor = v, this._active = !1, y.on("click", function(d) {
                    var c;
                    g.default.hideCurAllPanels(), (0, l.default)(c = v.txt.eventHooks.menuClickEvents).call(c, function(m) {
                      return m();
                    }), d.stopPropagation(), v.selection.getRange() != null && s.clickHandler(d);
                  });
                }
                return h.prototype.clickHandler = function(y) {
                }, h.prototype.active = function() {
                  this._active = !0, this.$elem.addClass("w-e-active");
                }, h.prototype.unActive = function() {
                  this._active = !1, this.$elem.removeClass("w-e-active");
                }, (0, f.default)(h.prototype, "isActive", {
                  /**
                   * 是否处于激活状态
                   */
                  get: function() {
                    return this._active;
                  },
                  enumerable: !1,
                  configurable: !0
                }), h;
              }()
            );
            i.default = E;
          },
          /* 96 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.getParentNodeA = i.EXTRA_TAG = void 0, i.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
            function u(E) {
              for (var h = E.elems[0]; h && (0, l.default)(y = i.EXTRA_TAG).call(y, h.nodeName); ) {
                var y;
                if (h = h.parentElement, h.nodeName === "A")
                  return h;
              }
            }
            i.getParentNodeA = u;
            function g(E) {
              var h, y = E.selection.getSelectionContainerElem();
              if (!(!((h = y == null ? void 0 : y.elems) === null || h === void 0) && h.length))
                return !1;
              if (y.getNodeName() === "A")
                return !0;
              var v = u(y);
              return !!(v && v.nodeName === "A");
            }
            i.default = g;
          },
          /* 97 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(57)), u = r(t(4)), g = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var E = t(2), h = t(6), y = E.__importDefault(t(135)), v = E.__importDefault(t(136)), s = (
              /** @class */
              function() {
                function d(c) {
                  this.editor = c;
                }
                return d.prototype.insertImg = function(c, m, p) {
                  var A = this.editor, x = A.config, S = "validate.", D = function(M, F) {
                    return F === void 0 && (F = S), A.i18next.t(F + M);
                  }, R = c.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                  R = R.replace("'", '"');
                  var P = "";
                  p && (P = p.replace("'", '"'), P = "data-href='" + encodeURIComponent(P) + "' ");
                  var B = "";
                  m && (B = m.replace(/</g, "&lt;").replace(/>/g, "&gt;"), B = B.replace("'", '"'), B = "alt='" + B + "' "), A.cmd.do("insertHTML", "<img src='" + R + "' " + B + P + 'style="max-width:100%;" contenteditable="false"/>'), x.linkImgCallback(c, m, p);
                  var I = document.createElement("img");
                  I.onload = function() {
                    I = null;
                  }, I.onerror = function() {
                    x.customAlert(D("插入图片错误"), "error", "wangEditor: " + D("插入图片错误") + "，" + D("图片链接") + ' "' + c + '"，' + D("下载链接失败")), I = null;
                  }, I.onabort = function() {
                    return I = null;
                  }, I.src = c;
                }, d.prototype.uploadImg = function(c) {
                  var m = this;
                  if (c.length) {
                    var p = this.editor, A = p.config, x = "validate.", S = function(tt) {
                      return p.i18next.t(x + tt);
                    }, D = A.uploadImgServer, R = A.uploadImgShowBase64, P = A.uploadImgMaxSize, B = P / 1024 / 1024, I = A.uploadImgMaxLength, C = A.uploadFileName, M = A.uploadImgParams, F = A.uploadImgParamsWithUrl, w = A.uploadImgHeaders, O = A.uploadImgHooks, U = A.uploadImgTimeout, b = A.withCredentials, Q = A.customUploadImg;
                    if (!(!Q && !D && !R)) {
                      var j = [], z = [];
                      if (h.arrForEach(c, function(at) {
                        if (at) {
                          var tt = at.name || at.type.replace("/", "."), et = at.size;
                          if (!(!tt || !et)) {
                            var lt = p.config.uploadImgAccept.join("|"), mt = ".(" + lt + ")$", Dt = new RegExp(mt, "i");
                            if (Dt.test(tt) === !1) {
                              z.push("【" + tt + "】" + S("不是图片"));
                              return;
                            }
                            if (P < et) {
                              z.push("【" + tt + "】" + S("大于") + " " + B + "M");
                              return;
                            }
                            j.push(at);
                          }
                        }
                      }), z.length) {
                        A.customAlert(S("图片验证未通过") + `: 
` + z.join(`
`), "warning");
                        return;
                      }
                      if (j.length === 0) {
                        A.customAlert(S("传入的文件不合法"), "warning");
                        return;
                      }
                      if (j.length > I) {
                        A.customAlert(S("一次最多上传") + I + S("张图片"), "warning");
                        return;
                      }
                      if (Q && typeof Q == "function") {
                        var W;
                        Q(j, (0, l.default)(W = this.insertImg).call(W, this));
                        return;
                      }
                      var q = new FormData();
                      if ((0, u.default)(j).call(j, function(at, tt) {
                        var et = C || at.name;
                        j.length > 1 && (et = et + (tt + 1)), q.append(et, at);
                      }), D) {
                        var ut = D.split("#");
                        D = ut[0];
                        var _ = ut[1] || "";
                        (0, u.default)(h).call(h, M, function(at, tt) {
                          F && ((0, g.default)(D).call(D, "?") > 0 ? D += "&" : D += "?", D = D + at + "=" + tt), q.append(at, tt);
                        }), _ && (D += "#" + _);
                        var ft = y.default(D, {
                          timeout: U,
                          formData: q,
                          headers: w,
                          withCredentials: !!b,
                          beforeSend: function(tt) {
                            if (O.before) return O.before(tt, p, j);
                          },
                          onTimeout: function(tt) {
                            A.customAlert(S("上传图片超时"), "error"), O.timeout && O.timeout(tt, p);
                          },
                          onProgress: function(tt, et) {
                            var lt = new v.default(p);
                            et.lengthComputable && (tt = et.loaded / et.total, lt.show(tt));
                          },
                          onError: function(tt) {
                            A.customAlert(S("上传图片错误"), "error", S("上传图片错误") + "，" + S("服务器返回状态") + ": " + tt.status), O.error && O.error(tt, p);
                          },
                          onFail: function(tt, et) {
                            A.customAlert(S("上传图片失败"), "error", S("上传图片返回结果错误") + ("，" + S("返回结果") + ": ") + et), O.fail && O.fail(tt, p, et);
                          },
                          onSuccess: function(tt, et) {
                            if (O.customInsert) {
                              var lt;
                              O.customInsert((0, l.default)(lt = m.insertImg).call(lt, m), et, p);
                              return;
                            }
                            if (et.errno != "0") {
                              A.customAlert(S("上传图片失败"), "error", S("上传图片返回结果错误") + "，" + S("返回结果") + " errno=" + et.errno), O.fail && O.fail(tt, p, et);
                              return;
                            }
                            var mt = et.data;
                            (0, u.default)(mt).call(mt, function(Dt) {
                              typeof Dt == "string" ? m.insertImg(Dt) : m.insertImg(Dt.url, Dt.alt, Dt.href);
                            }), O.success && O.success(tt, p, et);
                          }
                        });
                        typeof ft == "string" && A.customAlert(ft, "error");
                        return;
                      }
                      R && h.arrForEach(c, function(at) {
                        var tt = m, et = new FileReader();
                        et.readAsDataURL(at), et.onload = function() {
                          if (this.result) {
                            var lt = this.result.toString();
                            tt.insertImg(lt, lt);
                          }
                        };
                      });
                    }
                  }
                }, d;
              }()
            );
            i.default = s;
          },
          /* 98 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(410)), u = r(t(4)), g = r(t(45));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.dealTextNode = i.isAllTodo = i.isTodo = i.getCursorNextNode = void 0;
            function E(d) {
              return d.length ? d.attr("class") === "w-e-todo" : !1;
            }
            i.isTodo = E;
            function h(d) {
              var c = d.selection.getSelectionRangeTopNodes();
              if (c.length !== 0)
                return (0, l.default)(c).call(c, function(m) {
                  return E(m);
                });
            }
            i.isAllTodo = h;
            function y(d, c, m) {
              var p;
              if (d.hasChildNodes()) {
                var A = d.cloneNode(), x = !1;
                c.nodeValue === "" && (x = !0);
                var S = [];
                return (0, u.default)(p = d.childNodes).call(p, function(D) {
                  if (!v(D, c) && x && (A.appendChild(D.cloneNode(!0)), D.nodeName !== "BR" && S.push(D)), v(D, c)) {
                    if (D.nodeType === 1) {
                      var R = y(D, c, m);
                      R && R.textContent !== "" && (A == null || A.appendChild(R));
                    }
                    if (D.nodeType === 3 && c.isEqualNode(D)) {
                      var P = s(D, m);
                      A.textContent = P;
                    }
                    x = !0;
                  }
                }), (0, u.default)(S).call(S, function(D) {
                  var R = D;
                  R.remove();
                }), A;
              }
            }
            i.getCursorNextNode = y;
            function v(d, c) {
              return d.nodeType === 3 ? d.nodeValue === c.nodeValue : d.contains(c);
            }
            function s(d, c, m) {
              m === void 0 && (m = !0);
              var p = d.nodeValue, A = p == null ? void 0 : (0, g.default)(p).call(p, 0, c);
              if (p = p == null ? void 0 : (0, g.default)(p).call(p, c), !m) {
                var x = p;
                p = A, A = x;
              }
              return d.nodeValue = A, p;
            }
            i.dealTextNode = s;
          },
          /* 99 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(430), u = (
              /** @class */
              function() {
                function g(E) {
                  this.maxSize = E, this.isRe = !1, this.data = new l.CeilStack(E), this.revokeData = new l.CeilStack(E);
                }
                return (0, f.default)(g.prototype, "size", {
                  /**
                   * 返回当前栈中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                   */
                  get: function() {
                    return [this.data.size, this.revokeData.size];
                  },
                  enumerable: !1,
                  configurable: !0
                }), g.prototype.resetMaxSize = function(E) {
                  this.data.resetMax(E), this.revokeData.resetMax(E);
                }, g.prototype.save = function(E) {
                  return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(E), this;
                }, g.prototype.revoke = function(E) {
                  !this.isRe && (this.isRe = !0);
                  var h = this.data.outstack();
                  return h ? (this.revokeData.instack(h), E(h), !0) : !1;
                }, g.prototype.restore = function(E) {
                  !this.isRe && (this.isRe = !0);
                  var h = this.revokeData.outstack();
                  return h ? (this.data.instack(h), E(h), !0) : !1;
                }, g;
              }()
            );
            i.default = u;
          },
          /* 100 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(11), l = t(73);
            o.exports = !r && !f(function() {
              return Object.defineProperty(l("div"), "a", {
                get: function() {
                  return 7;
                }
              }).a != 7;
            });
          },
          /* 101 */
          /***/
          function(o, i, t) {
            var r = t(11), f = /#|\.prototype\./, l = function(y, v) {
              var s = g[u(y)];
              return s == h ? !0 : s == E ? !1 : typeof v == "function" ? r(v) : !!v;
            }, u = l.normalize = function(y) {
              return String(y).replace(f, ".").toLowerCase();
            }, g = l.data = {}, E = l.NATIVE = "N", h = l.POLYFILL = "P";
            o.exports = l;
          },
          /* 102 */
          /***/
          function(o, i, t) {
            var r = t(103), f = Function.toString;
            typeof r.inspectSource != "function" && (r.inspectSource = function(l) {
              return f.call(l);
            }), o.exports = r.inspectSource;
          },
          /* 103 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(166), l = "__core-js_shared__", u = r[l] || f(l, {});
            o.exports = u;
          },
          /* 104 */
          /***/
          function(o, i, t) {
            var r = t(105), f = t(19), l = t(16), u = t(10), g = t(43), E = u("iterator"), h = !1, y = function() {
              return this;
            }, v, s, d;
            [].keys && (d = [].keys(), "next" in d ? (s = r(r(d)), s !== Object.prototype && (v = s)) : h = !0), v == null && (v = {}), !g && !l(v, E) && f(v, E, y), o.exports = {
              IteratorPrototype: v,
              BUGGY_SAFARI_ITERATORS: h
            };
          },
          /* 105 */
          /***/
          function(o, i, t) {
            var r = t(16), f = t(31), l = t(63), u = t(168), g = l("IE_PROTO"), E = Object.prototype;
            o.exports = u ? Object.getPrototypeOf : function(h) {
              return h = f(h), r(h, g) ? h[g] : typeof h.constructor == "function" && h instanceof h.constructor ? h.constructor.prototype : h instanceof Object ? E : null;
            };
          },
          /* 106 */
          /***/
          function(o, i, t) {
            var r = t(76);
            o.exports = r && !Symbol.sham && typeof Symbol.iterator == "symbol";
          },
          /* 107 */
          /***/
          function(o, i, t) {
            var r = t(16), f = t(30), l = t(78).indexOf, u = t(51);
            o.exports = function(g, E) {
              var h = f(g), y = 0, v = [], s;
              for (s in h) !r(u, s) && r(h, s) && v.push(s);
              for (; E.length > y; ) r(h, s = E[y++]) && (~l(v, s) || v.push(s));
              return v;
            };
          },
          /* 108 */
          /***/
          function(o, i, t) {
            var r = t(36);
            o.exports = r("document", "documentElement");
          },
          /* 109 */
          /***/
          function(o, i, t) {
            var r = t(8);
            o.exports = r.Promise;
          },
          /* 110 */
          /***/
          function(o, i, t) {
            var r = t(53);
            o.exports = function(f, l, u) {
              for (var g in l)
                u && u.unsafe && f[g] ? f[g] = l[g] : r(f, g, l[g], u);
              return f;
            };
          },
          /* 111 */
          /***/
          function(o, i, t) {
            var r = t(36), f = t(18), l = t(10), u = t(14), g = l("species");
            o.exports = function(E) {
              var h = r(E), y = f.f;
              u && h && !h[g] && y(h, g, {
                configurable: !0,
                get: function() {
                  return this;
                }
              });
            };
          },
          /* 112 */
          /***/
          function(o, i, t) {
            var r = t(10), f = t(44), l = r("iterator"), u = Array.prototype;
            o.exports = function(g) {
              return g !== void 0 && (f.Array === g || u[l] === g);
            };
          },
          /* 113 */
          /***/
          function(o, i, t) {
            var r = t(65), f = t(44), l = t(10), u = l("iterator");
            o.exports = function(g) {
              if (g != null) return g[u] || g["@@iterator"] || f[r(g)];
            };
          },
          /* 114 */
          /***/
          function(o, i, t) {
            var r = t(25);
            o.exports = function(f, l, u, g) {
              try {
                return g ? l(r(u)[0], u[1]) : l(u);
              } catch (h) {
                var E = f.return;
                throw E !== void 0 && r(E.call(f)), h;
              }
            };
          },
          /* 115 */
          /***/
          function(o, i, t) {
            var r = t(10), f = r("iterator"), l = !1;
            try {
              var u = 0, g = {
                next: function() {
                  return { done: !!u++ };
                },
                return: function() {
                  l = !0;
                }
              };
              g[f] = function() {
                return this;
              }, Array.from(g, function() {
                throw 2;
              });
            } catch {
            }
            o.exports = function(E, h) {
              if (!h && !l) return !1;
              var y = !1;
              try {
                var v = {};
                v[f] = function() {
                  return {
                    next: function() {
                      return { done: y = !0 };
                    }
                  };
                }, E(v);
              } catch {
              }
              return y;
            };
          },
          /* 116 */
          /***/
          function(o, i, t) {
            var r = t(25), f = t(41), l = t(10), u = l("species");
            o.exports = function(g, E) {
              var h = r(g).constructor, y;
              return h === void 0 || (y = r(h)[u]) == null ? E : f(y);
            };
          },
          /* 117 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(11), l = t(34), u = t(40), g = t(108), E = t(73), h = t(118), y = r.location, v = r.setImmediate, s = r.clearImmediate, d = r.process, c = r.MessageChannel, m = r.Dispatch, p = 0, A = {}, x = "onreadystatechange", S, D, R, P = function(M) {
              if (A.hasOwnProperty(M)) {
                var F = A[M];
                delete A[M], F();
              }
            }, B = function(M) {
              return function() {
                P(M);
              };
            }, I = function(M) {
              P(M.data);
            }, C = function(M) {
              r.postMessage(M + "", y.protocol + "//" + y.host);
            };
            (!v || !s) && (v = function(F) {
              for (var w = [], O = 1; arguments.length > O; ) w.push(arguments[O++]);
              return A[++p] = function() {
                (typeof F == "function" ? F : Function(F)).apply(void 0, w);
              }, S(p), p;
            }, s = function(F) {
              delete A[F];
            }, l(d) == "process" ? S = function(M) {
              d.nextTick(B(M));
            } : m && m.now ? S = function(M) {
              m.now(B(M));
            } : c && !h ? (D = new c(), R = D.port2, D.port1.onmessage = I, S = u(R.postMessage, R, 1)) : r.addEventListener && typeof postMessage == "function" && !r.importScripts && !f(C) && y.protocol !== "file:" ? (S = C, r.addEventListener("message", I, !1)) : x in E("script") ? S = function(M) {
              g.appendChild(E("script"))[x] = function() {
                g.removeChild(this), P(M);
              };
            } : S = function(M) {
              setTimeout(B(M), 0);
            }), o.exports = {
              set: v,
              clear: s
            };
          },
          /* 118 */
          /***/
          function(o, i, t) {
            var r = t(84);
            o.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
          },
          /* 119 */
          /***/
          function(o, i, t) {
            var r = t(25), f = t(13), l = t(85);
            o.exports = function(u, g) {
              if (r(u), f(g) && g.constructor === u) return g;
              var E = l.f(u), h = E.resolve;
              return h(g), E.promise;
            };
          },
          /* 120 */
          /***/
          function(o, i) {
            o.exports = function(t) {
              try {
                return { error: !1, value: t() };
              } catch (r) {
                return { error: !0, value: r };
              }
            };
          },
          /* 121 */
          /***/
          function(o, i, t) {
            o.exports = t(197);
          },
          /* 122 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(8), l = t(123), u = t(11), g = t(19), E = t(66), h = t(83), y = t(13), v = t(37), s = t(18).f, d = t(32).forEach, c = t(14), m = t(42), p = m.set, A = m.getterFor;
            o.exports = function(x, S, D) {
              var R = x.indexOf("Map") !== -1, P = x.indexOf("Weak") !== -1, B = R ? "set" : "add", I = f[x], C = I && I.prototype, M = {}, F;
              if (!c || typeof I != "function" || !(P || C.forEach && !u(function() {
                new I().entries().next();
              })))
                F = D.getConstructor(S, x, R, B), l.REQUIRED = !0;
              else {
                F = S(function(O, U) {
                  p(h(O, F, x), {
                    type: x,
                    collection: new I()
                  }), U != null && E(U, O[B], O, R);
                });
                var w = A(x);
                d(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(O) {
                  var U = O == "add" || O == "set";
                  O in C && !(P && O == "clear") && g(F.prototype, O, function(b, Q) {
                    var j = w(this).collection;
                    if (!U && P && !y(b)) return O == "get" ? void 0 : !1;
                    var z = j[O](b === 0 ? 0 : b, Q);
                    return U ? this : z;
                  });
                }), P || s(F.prototype, "size", {
                  configurable: !0,
                  get: function() {
                    return w(this).collection.size;
                  }
                });
              }
              return v(F, x, !1, !0), M[x] = F, r({ global: !0, forced: !0 }, M), P || D.setStrong(F, x, R), F;
            };
          },
          /* 123 */
          /***/
          function(o, i, t) {
            var r = t(51), f = t(13), l = t(16), u = t(18).f, g = t(64), E = t(200), h = g("meta"), y = 0, v = Object.isExtensible || function() {
              return !0;
            }, s = function(A) {
              u(A, h, { value: {
                objectID: "O" + ++y,
                // object ID
                weakData: {}
                // weak collections IDs
              } });
            }, d = function(A, x) {
              if (!f(A)) return typeof A == "symbol" ? A : (typeof A == "string" ? "S" : "P") + A;
              if (!l(A, h)) {
                if (!v(A)) return "F";
                if (!x) return "E";
                s(A);
              }
              return A[h].objectID;
            }, c = function(A, x) {
              if (!l(A, h)) {
                if (!v(A)) return !0;
                if (!x) return !1;
                s(A);
              }
              return A[h].weakData;
            }, m = function(A) {
              return E && p.REQUIRED && v(A) && !l(A, h) && s(A), A;
            }, p = o.exports = {
              REQUIRED: !1,
              fastKey: d,
              getWeakData: c,
              onFreeze: m
            };
            r[h] = !0;
          },
          /* 124 */
          /***/
          function(o, i, t) {
            var r = t(18).f, f = t(77), l = t(110), u = t(40), g = t(83), E = t(66), h = t(75), y = t(111), v = t(14), s = t(123).fastKey, d = t(42), c = d.set, m = d.getterFor;
            o.exports = {
              getConstructor: function(p, A, x, S) {
                var D = p(function(I, C) {
                  g(I, D, A), c(I, {
                    type: A,
                    index: f(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }), v || (I.size = 0), C != null && E(C, I[S], I, x);
                }), R = m(A), P = function(I, C, M) {
                  var F = R(I), w = B(I, C), O, U;
                  return w ? w.value = M : (F.last = w = {
                    index: U = s(C, !0),
                    key: C,
                    value: M,
                    previous: O = F.last,
                    next: void 0,
                    removed: !1
                  }, F.first || (F.first = w), O && (O.next = w), v ? F.size++ : I.size++, U !== "F" && (F.index[U] = w)), I;
                }, B = function(I, C) {
                  var M = R(I), F = s(C), w;
                  if (F !== "F") return M.index[F];
                  for (w = M.first; w; w = w.next)
                    if (w.key == C) return w;
                };
                return l(D.prototype, {
                  // 23.1.3.1 Map.prototype.clear()
                  // 23.2.3.2 Set.prototype.clear()
                  clear: function() {
                    for (var C = this, M = R(C), F = M.index, w = M.first; w; )
                      w.removed = !0, w.previous && (w.previous = w.previous.next = void 0), delete F[w.index], w = w.next;
                    M.first = M.last = void 0, v ? M.size = 0 : C.size = 0;
                  },
                  // 23.1.3.3 Map.prototype.delete(key)
                  // 23.2.3.4 Set.prototype.delete(value)
                  delete: function(I) {
                    var C = this, M = R(C), F = B(C, I);
                    if (F) {
                      var w = F.next, O = F.previous;
                      delete M.index[F.index], F.removed = !0, O && (O.next = w), w && (w.previous = O), M.first == F && (M.first = w), M.last == F && (M.last = O), v ? M.size-- : C.size--;
                    }
                    return !!F;
                  },
                  // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                  // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                  forEach: function(C) {
                    for (var M = R(this), F = u(C, arguments.length > 1 ? arguments[1] : void 0, 3), w; w = w ? w.next : M.first; )
                      for (F(w.value, w.key, this); w && w.removed; ) w = w.previous;
                  },
                  // 23.1.3.7 Map.prototype.has(key)
                  // 23.2.3.7 Set.prototype.has(value)
                  has: function(C) {
                    return !!B(this, C);
                  }
                }), l(D.prototype, x ? {
                  // 23.1.3.6 Map.prototype.get(key)
                  get: function(C) {
                    var M = B(this, C);
                    return M && M.value;
                  },
                  // 23.1.3.9 Map.prototype.set(key, value)
                  set: function(C, M) {
                    return P(this, C === 0 ? 0 : C, M);
                  }
                } : {
                  // 23.2.3.1 Set.prototype.add(value)
                  add: function(C) {
                    return P(this, C = C === 0 ? 0 : C, C);
                  }
                }), v && r(D.prototype, "size", {
                  get: function() {
                    return R(this).size;
                  }
                }), D;
              },
              setStrong: function(p, A, x) {
                var S = A + " Iterator", D = m(A), R = m(S);
                h(p, A, function(P, B) {
                  c(this, {
                    type: S,
                    target: P,
                    state: D(P),
                    kind: B,
                    last: void 0
                  });
                }, function() {
                  for (var P = R(this), B = P.kind, I = P.last; I && I.removed; ) I = I.previous;
                  return !P.target || !(P.last = I = I ? I.next : P.state.first) ? (P.target = void 0, { value: void 0, done: !0 }) : B == "keys" ? { value: I.key, done: !1 } : B == "values" ? { value: I.value, done: !1 } : { value: [I.key, I.value], done: !1 };
                }, x ? "entries" : "values", !x, !0), y(A);
              }
            };
          },
          /* 125 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("iterator");
          },
          /* 126 */
          /***/
          function(o, i, t) {
            var r = t(107), f = t(80), l = f.concat("length", "prototype");
            i.f = Object.getOwnPropertyNames || function(g) {
              return r(g, l);
            };
          },
          /* 127 */
          /***/
          function(o, i) {
            i.f = Object.getOwnPropertySymbols;
          },
          /* 128 */
          /***/
          function(o, i, t) {
            o.exports = t(268);
          },
          /* 129 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              zIndex: 1e4
            };
          },
          /* 130 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              focus: !0,
              height: 300,
              placeholder: "请输入正文",
              zIndexFullScreen: 10002,
              showFullScreen: !0
            };
          },
          /* 131 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.getPasteImgs = i.getPasteHtml = i.getPasteText = void 0;
            var u = t(2), g = t(6), E = u.__importDefault(t(292));
            function h(s) {
              var d = s.clipboardData, c = "";
              return d == null ? c = window.clipboardData && window.clipboardData.getData("text") : c = d.getData("text/plain"), g.replaceHtmlSymbol(c);
            }
            i.getPasteText = h;
            function y(s, d, c) {
              d === void 0 && (d = !0), c === void 0 && (c = !1);
              var m = s.clipboardData, p = "";
              if (m && (p = m.getData("text/html")), !p) {
                var A = h(s);
                if (!A)
                  return "";
                p = "<p>" + A + "</p>";
              }
              return p = p.replace(/<(\d)/gm, function(x, S) {
                return "&lt;" + S;
              }), p = p.replace(/<(\/?meta.*?)>/gim, ""), p = E.default(p, d, c), p;
            }
            i.getPasteHtml = y;
            function v(s) {
              var d, c = [], m = h(s);
              if (m)
                return c;
              var p = (d = s.clipboardData) === null || d === void 0 ? void 0 : d.items;
              return p && (0, l.default)(g).call(g, p, function(A, x) {
                var S = x.type;
                /image/i.test(S) && c.push(x.getAsFile());
              }), c;
            }
            i.getPasteImgs = v;
          },
          /* 132 */
          /***/
          function(o, i, t) {
            o.exports = t(294);
          },
          /* 133 */
          /***/
          function(o, i, t) {
            o.exports = t(310);
          },
          /* 134 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(46));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = t(7), y = (
              /** @class */
              function() {
                function v(s, d) {
                  var c = this;
                  this.hideTimeoutId = 0, this.menu = s, this.conf = d;
                  var m = E.default('<div class="w-e-droplist"></div>'), p = E.default("<p>" + d.title + "</p>");
                  p.addClass("w-e-dp-title"), m.append(p);
                  var A = d.list || [], x = d.type || "list", S = d.clickHandler || h.EMPTY_FN, D = E.default('<ul class="' + (x === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
                  (0, l.default)(A).call(A, function(R) {
                    var P = R.$elem, B = R.value, I = E.default('<li class="w-e-item"></li>');
                    P && (I.append(P), D.append(I), I.on("click", function(C) {
                      S(B), C.stopPropagation(), c.hideTimeoutId = (0, u.default)(function() {
                        c.hide();
                      });
                    }));
                  }), m.append(D), m.on("mouseleave", function() {
                    c.hideTimeoutId = (0, u.default)(function() {
                      c.hide();
                    });
                  }), this.$container = m, this.rendered = !1, this._show = !1;
                }
                return v.prototype.show = function() {
                  this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                  var s = this.menu, d = s.$elem, c = this.$container;
                  if (!this._show) {
                    if (this.rendered)
                      c.show();
                    else {
                      var m = d.getBoundingClientRect().height || 0, p = this.conf.width || 100;
                      c.css("margin-top", m + "px").css("width", p + "px"), d.append(c), this.rendered = !0;
                    }
                    this._show = !0;
                  }
                }, v.prototype.hide = function() {
                  var s = this.$container;
                  this._show && (s.hide(), this._show = !1);
                }, (0, f.default)(v.prototype, "isShow", {
                  get: function() {
                    return this._show;
                  },
                  enumerable: !1,
                  configurable: !0
                }), v;
              }()
            );
            i.default = y;
          },
          /* 135 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(92)), l = r(t(1)), u = r(t(4));
            (0, l.default)(i, "__esModule", {
              value: !0
            });
            var g = t(6);
            function E(h, y) {
              var v = new XMLHttpRequest();
              if (v.open("POST", h), v.timeout = y.timeout || 10 * 1e3, v.ontimeout = function() {
                console.error("wangEditor - 请求超时"), y.onTimeout && y.onTimeout(v);
              }, v.upload && (v.upload.onprogress = function(d) {
                var c = d.loaded / d.total;
                y.onProgress && y.onProgress(c, d);
              }), y.headers && (0, u.default)(g).call(g, y.headers, function(d, c) {
                v.setRequestHeader(d, c);
              }), v.withCredentials = !!y.withCredentials, y.beforeSend) {
                var s = y.beforeSend(v);
                if (s && (0, f.default)(s) === "object" && s.prevent)
                  return s.msg;
              }
              return v.onreadystatechange = function() {
                if (v.readyState === 4) {
                  var d = v.status;
                  if (!(d < 200) && !(d >= 300 && d < 400)) {
                    if (d >= 400) {
                      console.error("wangEditor - XHR 报错，状态码 " + d), y.onError && y.onError(v);
                      return;
                    }
                    var c = v.responseText, m;
                    if ((0, f.default)(c) !== "object")
                      try {
                        m = JSON.parse(c);
                      } catch {
                        console.error("wangEditor - 返回结果不是 JSON 格式", c), y.onFail && y.onFail(v, c);
                        return;
                      }
                    else
                      m = c;
                    y.onSuccess(v, m);
                  }
                }
              }, v.send(y.formData || null), v;
            }
            i.default = E;
          },
          /* 136 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(342)), u = r(t(46));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = (
              /** @class */
              function() {
                function y(v) {
                  this.editor = v, this.$textContainer = v.$textContainerElem, this.$bar = E.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
                }
                return y.prototype.show = function(v) {
                  var s = this;
                  if (!this.isShow) {
                    this.isShow = !0;
                    var d = this.$bar, c = this.$textContainer;
                    c.append(d), (0, l.default)() - this.time > 100 && v <= 1 && (d.css("width", v * 100 + "%"), this.time = (0, l.default)());
                    var m = this.timeoutId;
                    m && clearTimeout(m), this.timeoutId = (0, u.default)(function() {
                      s.hide();
                    }, 500);
                  }
                }, y.prototype.hide = function() {
                  var v = this.$bar;
                  v.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
                }, y;
              }()
            );
            i.default = h;
          },
          /* 137 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.ListType = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(24)), E = t(47), h = l.__importStar(t(371)), y;
            (function(s) {
              s.OrderedList = "OL", s.UnorderedList = "UL";
            })(y = i.ListType || (i.ListType = {}));
            var v = (
              /** @class */
              function(s) {
                l.__extends(d, s);
                function d(c) {
                  var m = this, p = u.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`), A = {
                    width: 130,
                    title: "序列",
                    type: "list",
                    list: [{
                      $elem: u.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + c.i18next.t("menus.dropListMenu.list.无序列表") + `
                        <p>`),
                      value: y.UnorderedList
                    }, {
                      $elem: u.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + c.i18next.t("menus.dropListMenu.list.有序列表") + `
                        <p>`),
                      value: y.OrderedList
                    }],
                    clickHandler: function(S) {
                      m.command(S);
                    }
                  };
                  return m = s.call(this, p, c, A) || this, m;
                }
                return d.prototype.command = function(c) {
                  var m = this.editor, p = m.selection.getSelectionContainerElem();
                  p !== void 0 && (this.handleSelectionRangeNodes(c), this.tryChangeActive());
                }, d.prototype.validator = function(c, m, p) {
                  return !(!c.length || !m.length || p.equal(c) || p.equal(m));
                }, d.prototype.handleSelectionRangeNodes = function(c) {
                  var m = this.editor, p = m.selection, A = c.toLowerCase(), x = p.getSelectionContainerElem(), S = p.getSelectionStartElem().getNodeTop(m), D = p.getSelectionEndElem().getNodeTop(m);
                  if (this.validator(S, D, m.$textElem)) {
                    var R = p.getRange(), P = R == null ? void 0 : R.collapsed;
                    m.$textElem.equal(x) || (x = x.getNodeTop(m));
                    var B = {
                      editor: m,
                      listType: c,
                      listTarget: A,
                      $selectionElem: x,
                      $startElem: S,
                      $endElem: D
                    }, I;
                    this.isOrderElem(x) ? I = h.ClassType.Wrap : this.isOrderElem(S) && this.isOrderElem(D) ? I = h.ClassType.Join : this.isOrderElem(S) ? I = h.ClassType.StartJoin : this.isOrderElem(D) ? I = h.ClassType.EndJoin : I = h.ClassType.Other;
                    var C = new h.default(h.createListHandle(I, B, R));
                    E.updateRange(m, C.getSelectionRangeElem(), !!P);
                  }
                }, d.prototype.isOrderElem = function(c) {
                  var m = c.getNodeName();
                  return m === y.OrderedList || m === y.UnorderedList;
                }, d.prototype.tryChangeActive = function() {
                }, d;
              }(g.default)
            );
            i.default = v;
          },
          /* 138 */
          /***/
          function(o, i, t) {
            o.exports = t(395);
          },
          /* 139 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function l(u) {
              var g = u.selection.getSelectionContainerElem();
              return g != null && g.length ? !!(g.getNodeName() == "CODE" || g.getNodeName() == "PRE" || g.parent().getNodeName() == "CODE" || g.parent().getNodeName() == "PRE" || /hljs/.test(g.parent().attr("class"))) : !1;
            }
            i.default = l;
          },
          /* 140 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.todo = void 0;
            var u = t(2), g = u.__importDefault(t(3)), E = (
              /** @class */
              function() {
                function y(v) {
                  var s;
                  this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = g.default(this.template), this.$child = (s = v == null ? void 0 : v.childNodes()) === null || s === void 0 ? void 0 : s.clone(!0);
                }
                return y.prototype.init = function() {
                  var v = this.$child, s = this.getInputContainer();
                  v && v.insertAfter(s);
                }, y.prototype.getInput = function() {
                  var v = this.$todo, s = (0, l.default)(v).call(v, "input");
                  return s;
                }, y.prototype.getInputContainer = function() {
                  var v = this.getInput().parent();
                  return v;
                }, y.prototype.getTodo = function() {
                  return this.$todo;
                }, y;
              }()
            );
            i.todo = E;
            function h(y) {
              var v = new E(y);
              return v.init(), v;
            }
            i.default = h;
          },
          /* 141 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2);
            t(146), t(148), t(152), t(154), t(156), t(158), t(160);
            var u = l.__importDefault(t(87));
            l.__exportStar(t(442), i), i.default = u.default;
          },
          /* 142 */
          /***/
          function(o, i, t) {
            var r = t(143);
            o.exports = r;
          },
          /* 143 */
          /***/
          function(o, i, t) {
            t(144);
            var r = t(9), f = r.Object, l = o.exports = function(g, E, h) {
              return f.defineProperty(g, E, h);
            };
            f.defineProperty.sham && (l.sham = !0);
          },
          /* 144 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(14), l = t(18);
            r({ target: "Object", stat: !0, forced: !f, sham: !f }, {
              defineProperty: l.f
            });
          },
          /* 145 */
          /***/
          function(o, i) {
            var t;
            t = /* @__PURE__ */ function() {
              return this;
            }();
            try {
              t = t || new Function("return this")();
            } catch {
              typeof window == "object" && (t = window);
            }
            o.exports = t;
          },
          /* 146 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(147);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 147 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), o.exports = i;
          },
          /* 148 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(149);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 149 */
          /***/
          function(o, i, t) {
            var r = t(21), f = t(150), l = t(151);
            i = r(!1);
            var u = f(l);
            i.push([o.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + u + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), o.exports = i;
          },
          /* 150 */
          /***/
          function(o, i, t) {
            o.exports = function(r, f) {
              return f || (f = {}), r = r && r.__esModule ? r.default : r, typeof r != "string" ? r : (/^['"].*['"]$/.test(r) && (r = r.slice(1, -1)), f.hash && (r += f.hash), /["'() \t\n]/.test(r) || f.needQuotes ? '"'.concat(r.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : r);
            };
          },
          /* 151 */
          /***/
          function(o, i, t) {
            t.r(i), i.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
          },
          /* 152 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(153);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 153 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), o.exports = i;
          },
          /* 154 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(155);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 155 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), o.exports = i;
          },
          /* 156 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(157);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 157 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), o.exports = i;
          },
          /* 158 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(159);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 159 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), o.exports = i;
          },
          /* 160 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(161));
            Element.prototype.matches || (Element.prototype.matches = function(l) {
              var u = this.ownerDocument.querySelectorAll(l), g = u.length;
              for (g; g >= 0 && u.item(g) !== this; g--)
                ;
              return g > -1;
            }), f.default || (window.Promise = f.default);
          },
          /* 161 */
          /***/
          function(o, i, t) {
            o.exports = t(162);
          },
          /* 162 */
          /***/
          function(o, i, t) {
            var r = t(163);
            o.exports = r;
          },
          /* 163 */
          /***/
          function(o, i, t) {
            t(61), t(50), t(54), t(175), t(178), t(179);
            var r = t(9);
            o.exports = r.Promise;
          },
          /* 164 */
          /***/
          function(o, i, t) {
            var r = t(62), f = t(49), l = function(u) {
              return function(g, E) {
                var h = String(f(g)), y = r(E), v = h.length, s, d;
                return y < 0 || y >= v ? u ? "" : void 0 : (s = h.charCodeAt(y), s < 55296 || s > 56319 || y + 1 === v || (d = h.charCodeAt(y + 1)) < 56320 || d > 57343 ? u ? h.charAt(y) : s : u ? h.slice(y, y + 2) : (s - 55296 << 10) + (d - 56320) + 65536);
              };
            };
            o.exports = {
              // `String.prototype.codePointAt` method
              // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
              codeAt: l(!1),
              // `String.prototype.at` method
              // https://github.com/mathiasbynens/String.prototype.at
              charAt: l(!0)
            };
          },
          /* 165 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(102), l = r.WeakMap;
            o.exports = typeof l == "function" && /native code/.test(f(l));
          },
          /* 166 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(19);
            o.exports = function(l, u) {
              try {
                f(r, l, u);
              } catch {
                r[l] = u;
              }
              return u;
            };
          },
          /* 167 */
          /***/
          function(o, i, t) {
            var r = t(104).IteratorPrototype, f = t(77), l = t(48), u = t(37), g = t(44), E = function() {
              return this;
            };
            o.exports = function(h, y, v) {
              var s = y + " Iterator";
              return h.prototype = f(r, { next: l(1, v) }), u(h, s, !1, !0), g[s] = E, h;
            };
          },
          /* 168 */
          /***/
          function(o, i, t) {
            var r = t(11);
            o.exports = !r(function() {
              function f() {
              }
              return f.prototype.constructor = null, Object.getPrototypeOf(new f()) !== f.prototype;
            });
          },
          /* 169 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(18), l = t(25), u = t(52);
            o.exports = r ? Object.defineProperties : function(E, h) {
              l(E);
              for (var y = u(h), v = y.length, s = 0, d; v > s; ) f.f(E, d = y[s++], h[d]);
              return E;
            };
          },
          /* 170 */
          /***/
          function(o, i, t) {
            var r = t(81), f = t(65);
            o.exports = r ? {}.toString : function() {
              return "[object " + f(this) + "]";
            };
          },
          /* 171 */
          /***/
          function(o, i, t) {
            var r = t(25), f = t(172);
            o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
              var l = !1, u = {}, g;
              try {
                g = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, g.call(u, []), l = u instanceof Array;
              } catch {
              }
              return function(h, y) {
                return r(h), f(y), l ? g.call(h, y) : h.__proto__ = y, h;
              };
            }() : void 0);
          },
          /* 172 */
          /***/
          function(o, i, t) {
            var r = t(13);
            o.exports = function(f) {
              if (!r(f) && f !== null)
                throw TypeError("Can't set " + String(f) + " as a prototype");
              return f;
            };
          },
          /* 173 */
          /***/
          function(o, i, t) {
            var r = t(30), f = t(82), l = t(44), u = t(42), g = t(75), E = "Array Iterator", h = u.set, y = u.getterFor(E);
            o.exports = g(Array, "Array", function(v, s) {
              h(this, {
                type: E,
                target: r(v),
                // target
                index: 0,
                // next index
                kind: s
                // kind
              });
            }, function() {
              var v = y(this), s = v.target, d = v.kind, c = v.index++;
              return !s || c >= s.length ? (v.target = void 0, { value: void 0, done: !0 }) : d == "keys" ? { value: c, done: !1 } : d == "values" ? { value: s[c], done: !1 } : { value: [c, s[c]], done: !1 };
            }, "values"), l.Arguments = l.Array, f("keys"), f("values"), f("entries");
          },
          /* 174 */
          /***/
          function(o, i) {
            o.exports = {
              CSSRuleList: 0,
              CSSStyleDeclaration: 0,
              CSSValueList: 0,
              ClientRectList: 0,
              DOMRectList: 0,
              DOMStringList: 0,
              DOMTokenList: 1,
              DataTransferItemList: 0,
              FileList: 0,
              HTMLAllCollection: 0,
              HTMLCollection: 0,
              HTMLFormElement: 0,
              HTMLSelectElement: 0,
              MediaList: 0,
              MimeTypeArray: 0,
              NamedNodeMap: 0,
              NodeList: 1,
              PaintRequestList: 0,
              Plugin: 0,
              PluginArray: 0,
              SVGLengthList: 0,
              SVGNumberList: 0,
              SVGPathSegList: 0,
              SVGPointList: 0,
              SVGStringList: 0,
              SVGTransformList: 0,
              SourceBufferList: 0,
              StyleSheetList: 0,
              TextTrackCueList: 0,
              TextTrackList: 0,
              TouchList: 0
            };
          },
          /* 175 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(43), l = t(8), u = t(36), g = t(109), E = t(53), h = t(110), y = t(37), v = t(111), s = t(13), d = t(41), c = t(83), m = t(34), p = t(102), A = t(66), x = t(115), S = t(116), D = t(117).set, R = t(176), P = t(119), B = t(177), I = t(85), C = t(120), M = t(42), F = t(101), w = t(10), O = t(86), U = w("species"), b = "Promise", Q = M.get, j = M.set, z = M.getterFor(b), W = g, q = l.TypeError, ut = l.document, _ = l.process, ft = u("fetch"), at = I.f, tt = at, et = m(_) == "process", lt = !!(ut && ut.createEvent && l.dispatchEvent), mt = "unhandledrejection", Dt = "rejectionhandled", Ht = 0, fe = 1, _t = 2, Kt = 1, vn = 2, te, re, He, Se, zt = F(b, function() {
              var ct = p(W) !== String(W);
              if (!ct && (O === 66 || !et && typeof PromiseRejectionEvent != "function") || f && !W.prototype.finally) return !0;
              if (O >= 51 && /native code/.test(W)) return !1;
              var nt = W.resolve(1), At = function(it) {
                it(function() {
                }, function() {
                });
              }, Et = nt.constructor = {};
              return Et[U] = At, !(nt.then(function() {
              }) instanceof At);
            }), je = zt || !x(function(ct) {
              W.all(ct).catch(function() {
              });
            }), we = function(ct) {
              var nt;
              return s(ct) && typeof (nt = ct.then) == "function" ? nt : !1;
            }, Ke = function(ct, nt, At) {
              if (!nt.notified) {
                nt.notified = !0;
                var Et = nt.reactions;
                R(function() {
                  for (var it = nt.value, rt = nt.state == fe, vt = 0; Et.length > vt; ) {
                    var yt = Et[vt++], Rt = rt ? yt.ok : yt.fail, Qt = yt.resolve, oe = yt.reject, Re = yt.domain, ie, pn, Pn;
                    try {
                      Rt ? (rt || (nt.rejection === vn && he(ct, nt), nt.rejection = Kt), Rt === !0 ? ie = it : (Re && Re.enter(), ie = Rt(it), Re && (Re.exit(), Pn = !0)), ie === yt.promise ? oe(q("Promise-chain cycle")) : (pn = we(ie)) ? pn.call(ie, Qt, oe) : Qt(ie)) : oe(it);
                    } catch (ar) {
                      Re && !Pn && Re.exit(), oe(ar);
                    }
                  }
                  nt.reactions = [], nt.notified = !1, At && !nt.rejection && hn(ct, nt);
                });
              }
            }, Ce = function(ct, nt, At) {
              var Et, it;
              lt ? (Et = ut.createEvent("Event"), Et.promise = nt, Et.reason = At, Et.initEvent(ct, !1, !0), l.dispatchEvent(Et)) : Et = { promise: nt, reason: At }, (it = l["on" + ct]) ? it(Et) : ct === mt && B("Unhandled promise rejection", At);
            }, hn = function(ct, nt) {
              D.call(l, function() {
                var At = nt.value, Et = Te(nt), it;
                if (Et && (it = C(function() {
                  et ? _.emit("unhandledRejection", At, ct) : Ce(mt, ct, At);
                }), nt.rejection = et || Te(nt) ? vn : Kt, it.error))
                  throw it.value;
              });
            }, Te = function(ct) {
              return ct.rejection !== Kt && !ct.parent;
            }, he = function(ct, nt) {
              D.call(l, function() {
                et ? _.emit("rejectionHandled", ct) : Ce(Dt, ct, nt.value);
              });
            }, pe = function(ct, nt, At, Et) {
              return function(it) {
                ct(nt, At, it, Et);
              };
            }, De = function(ct, nt, At, Et) {
              nt.done || (nt.done = !0, Et && (nt = Et), nt.value = At, nt.state = _t, Ke(ct, nt, !0));
            }, Ue = function(ct, nt, At, Et) {
              if (!nt.done) {
                nt.done = !0, Et && (nt = Et);
                try {
                  if (ct === At) throw q("Promise can't be resolved itself");
                  var it = we(At);
                  it ? R(function() {
                    var rt = { done: !1 };
                    try {
                      it.call(
                        At,
                        pe(Ue, ct, rt, nt),
                        pe(De, ct, rt, nt)
                      );
                    } catch (vt) {
                      De(ct, rt, vt, nt);
                    }
                  }) : (nt.value = At, nt.state = fe, Ke(ct, nt, !1));
                } catch (rt) {
                  De(ct, { done: !1 }, rt, nt);
                }
              }
            };
            zt && (W = function(nt) {
              c(this, W, b), d(nt), te.call(this);
              var At = Q(this);
              try {
                nt(pe(Ue, this, At), pe(De, this, At));
              } catch (Et) {
                De(this, At, Et);
              }
            }, te = function(nt) {
              j(this, {
                type: b,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: Ht,
                value: void 0
              });
            }, te.prototype = h(W.prototype, {
              // `Promise.prototype.then` method
              // https://tc39.github.io/ecma262/#sec-promise.prototype.then
              then: function(nt, At) {
                var Et = z(this), it = at(S(this, W));
                return it.ok = typeof nt == "function" ? nt : !0, it.fail = typeof At == "function" && At, it.domain = et ? _.domain : void 0, Et.parent = !0, Et.reactions.push(it), Et.state != Ht && Ke(this, Et, !1), it.promise;
              },
              // `Promise.prototype.catch` method
              // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
              catch: function(ct) {
                return this.then(void 0, ct);
              }
            }), re = function() {
              var ct = new te(), nt = Q(ct);
              this.promise = ct, this.resolve = pe(Ue, ct, nt), this.reject = pe(De, ct, nt);
            }, I.f = at = function(ct) {
              return ct === W || ct === He ? new re(ct) : tt(ct);
            }, !f && typeof g == "function" && (Se = g.prototype.then, E(g.prototype, "then", function(nt, At) {
              var Et = this;
              return new W(function(it, rt) {
                Se.call(Et, it, rt);
              }).then(nt, At);
            }, { unsafe: !0 }), typeof ft == "function" && r({ global: !0, enumerable: !0, forced: !0 }, {
              // eslint-disable-next-line no-unused-vars
              fetch: function(nt) {
                return P(W, ft.apply(l, arguments));
              }
            }))), r({ global: !0, wrap: !0, forced: zt }, {
              Promise: W
            }), y(W, b, !1, !0), v(b), He = u(b), r({ target: b, stat: !0, forced: zt }, {
              // `Promise.reject` method
              // https://tc39.github.io/ecma262/#sec-promise.reject
              reject: function(nt) {
                var At = at(this);
                return At.reject.call(void 0, nt), At.promise;
              }
            }), r({ target: b, stat: !0, forced: f || zt }, {
              // `Promise.resolve` method
              // https://tc39.github.io/ecma262/#sec-promise.resolve
              resolve: function(nt) {
                return P(f && this === He ? W : this, nt);
              }
            }), r({ target: b, stat: !0, forced: je }, {
              // `Promise.all` method
              // https://tc39.github.io/ecma262/#sec-promise.all
              all: function(nt) {
                var At = this, Et = at(At), it = Et.resolve, rt = Et.reject, vt = C(function() {
                  var yt = d(At.resolve), Rt = [], Qt = 0, oe = 1;
                  A(nt, function(Re) {
                    var ie = Qt++, pn = !1;
                    Rt.push(void 0), oe++, yt.call(At, Re).then(function(Pn) {
                      pn || (pn = !0, Rt[ie] = Pn, --oe || it(Rt));
                    }, rt);
                  }), --oe || it(Rt);
                });
                return vt.error && rt(vt.value), Et.promise;
              },
              // `Promise.race` method
              // https://tc39.github.io/ecma262/#sec-promise.race
              race: function(nt) {
                var At = this, Et = at(At), it = Et.reject, rt = C(function() {
                  var vt = d(At.resolve);
                  A(nt, function(yt) {
                    vt.call(At, yt).then(Et.resolve, it);
                  });
                });
                return rt.error && it(rt.value), Et.promise;
              }
            });
          },
          /* 176 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(71).f, l = t(34), u = t(117).set, g = t(118), E = r.MutationObserver || r.WebKitMutationObserver, h = r.process, y = r.Promise, v = l(h) == "process", s = f(r, "queueMicrotask"), d = s && s.value, c, m, p, A, x, S, D, R;
            d || (c = function() {
              var P, B;
              for (v && (P = h.domain) && P.exit(); m; ) {
                B = m.fn, m = m.next;
                try {
                  B();
                } catch (I) {
                  throw m ? A() : p = void 0, I;
                }
              }
              p = void 0, P && P.enter();
            }, v ? A = function() {
              h.nextTick(c);
            } : E && !g ? (x = !0, S = document.createTextNode(""), new E(c).observe(S, { characterData: !0 }), A = function() {
              S.data = x = !x;
            }) : y && y.resolve ? (D = y.resolve(void 0), R = D.then, A = function() {
              R.call(D, c);
            }) : A = function() {
              u.call(r, c);
            }), o.exports = d || function(P) {
              var B = { fn: P, next: void 0 };
              p && (p.next = B), m || (m = B, A()), p = B;
            };
          },
          /* 177 */
          /***/
          function(o, i, t) {
            var r = t(8);
            o.exports = function(f, l) {
              var u = r.console;
              u && u.error && (arguments.length === 1 ? u.error(f) : u.error(f, l));
            };
          },
          /* 178 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(41), l = t(85), u = t(120), g = t(66);
            r({ target: "Promise", stat: !0 }, {
              allSettled: function(h) {
                var y = this, v = l.f(y), s = v.resolve, d = v.reject, c = u(function() {
                  var m = f(y.resolve), p = [], A = 0, x = 1;
                  g(h, function(S) {
                    var D = A++, R = !1;
                    p.push(void 0), x++, m.call(y, S).then(function(P) {
                      R || (R = !0, p[D] = { status: "fulfilled", value: P }, --x || s(p));
                    }, function(P) {
                      R || (R = !0, p[D] = { status: "rejected", reason: P }, --x || s(p));
                    });
                  }), --x || s(p);
                });
                return c.error && d(c.value), v.promise;
              }
            });
          },
          /* 179 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(43), l = t(109), u = t(11), g = t(36), E = t(116), h = t(119), y = t(53), v = !!l && u(function() {
              l.prototype.finally.call({ then: function() {
              } }, function() {
              });
            });
            r({ target: "Promise", proto: !0, real: !0, forced: v }, {
              finally: function(s) {
                var d = E(this, g("Promise")), c = typeof s == "function";
                return this.then(
                  c ? function(m) {
                    return h(d, s()).then(function() {
                      return m;
                    });
                  } : s,
                  c ? function(m) {
                    return h(d, s()).then(function() {
                      throw m;
                    });
                  } : s
                );
              }
            }), !f && typeof l == "function" && !l.prototype.finally && y(l.prototype, "finally", g("Promise").prototype.finally);
          },
          /* 180 */
          /***/
          function(o, i, t) {
            t(54);
            var r = t(181), f = t(65), l = Array.prototype, u = {
              DOMTokenList: !0,
              NodeList: !0
            };
            o.exports = function(g) {
              var E = g.forEach;
              return g === l || g instanceof Array && E === l.forEach || u.hasOwnProperty(f(g)) ? r : E;
            };
          },
          /* 181 */
          /***/
          function(o, i, t) {
            var r = t(182);
            o.exports = r;
          },
          /* 182 */
          /***/
          function(o, i, t) {
            t(183);
            var r = t(15);
            o.exports = r("Array").forEach;
          },
          /* 183 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(184);
            r({ target: "Array", proto: !0, forced: [].forEach != f }, {
              forEach: f
            });
          },
          /* 184 */
          /***/
          function(o, i, t) {
            var r = t(32).forEach, f = t(67), l = t(22), u = f("forEach"), g = l("forEach");
            o.exports = !u || !g ? function(h) {
              return r(this, h, arguments.length > 1 ? arguments[1] : void 0);
            } : [].forEach;
          },
          /* 185 */
          /***/
          function(o, i, t) {
            var r = t(186);
            o.exports = r;
          },
          /* 186 */
          /***/
          function(o, i, t) {
            t(187);
            var r = t(9);
            o.exports = r.Array.isArray;
          },
          /* 187 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(55);
            r({ target: "Array", stat: !0 }, {
              isArray: f
            });
          },
          /* 188 */
          /***/
          function(o, i, t) {
            var r = t(189);
            o.exports = r;
          },
          /* 189 */
          /***/
          function(o, i, t) {
            var r = t(190), f = Array.prototype;
            o.exports = function(l) {
              var u = l.map;
              return l === f || l instanceof Array && u === f.map ? r : u;
            };
          },
          /* 190 */
          /***/
          function(o, i, t) {
            t(191);
            var r = t(15);
            o.exports = r("Array").map;
          },
          /* 191 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(32).map, l = t(56), u = t(22), g = l("map"), E = u("map");
            r({ target: "Array", proto: !0, forced: !g || !E }, {
              map: function(y) {
                return f(this, y, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 192 */
          /***/
          function(o, i, t) {
            var r = t(193);
            o.exports = r;
          },
          /* 193 */
          /***/
          function(o, i, t) {
            var r = t(194), f = String.prototype;
            o.exports = function(l) {
              var u = l.trim;
              return typeof l == "string" || l === f || l instanceof String && u === f.trim ? r : u;
            };
          },
          /* 194 */
          /***/
          function(o, i, t) {
            t(195);
            var r = t(15);
            o.exports = r("String").trim;
          },
          /* 195 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(90).trim, l = t(196);
            r({ target: "String", proto: !0, forced: l("trim") }, {
              trim: function() {
                return f(this);
              }
            });
          },
          /* 196 */
          /***/
          function(o, i, t) {
            var r = t(11), f = t(68), l = "​᠎";
            o.exports = function(u) {
              return r(function() {
                return !!f[u]() || l[u]() != l || f[u].name !== u;
              });
            };
          },
          /* 197 */
          /***/
          function(o, i, t) {
            var r = t(198);
            o.exports = r;
          },
          /* 198 */
          /***/
          function(o, i, t) {
            t(199), t(61), t(50), t(54);
            var r = t(9);
            o.exports = r.Map;
          },
          /* 199 */
          /***/
          function(o, i, t) {
            var r = t(122), f = t(124);
            o.exports = r("Map", function(l) {
              return function() {
                return l(this, arguments.length ? arguments[0] : void 0);
              };
            }, f);
          },
          /* 200 */
          /***/
          function(o, i, t) {
            var r = t(11);
            o.exports = !r(function() {
              return Object.isExtensible(Object.preventExtensions({}));
            });
          },
          /* 201 */
          /***/
          function(o, i, t) {
            var r = t(202);
            o.exports = r;
          },
          /* 202 */
          /***/
          function(o, i, t) {
            var r = t(203), f = Array.prototype;
            o.exports = function(l) {
              var u = l.indexOf;
              return l === f || l instanceof Array && u === f.indexOf ? r : u;
            };
          },
          /* 203 */
          /***/
          function(o, i, t) {
            t(204);
            var r = t(15);
            o.exports = r("Array").indexOf;
          },
          /* 204 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(78).indexOf, l = t(67), u = t(22), g = [].indexOf, E = !!g && 1 / [1].indexOf(1, -0) < 0, h = l("indexOf"), y = u("indexOf", { ACCESSORS: !0, 1: 0 });
            r({ target: "Array", proto: !0, forced: E || !h || !y }, {
              indexOf: function(s) {
                return E ? g.apply(this, arguments) || 0 : f(this, s, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 205 */
          /***/
          function(o, i, t) {
            var r = t(206);
            o.exports = r;
          },
          /* 206 */
          /***/
          function(o, i, t) {
            var r = t(207), f = Array.prototype;
            o.exports = function(l) {
              var u = l.splice;
              return l === f || l instanceof Array && u === f.splice ? r : u;
            };
          },
          /* 207 */
          /***/
          function(o, i, t) {
            t(208);
            var r = t(15);
            o.exports = r("Array").splice;
          },
          /* 208 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(79), l = t(62), u = t(35), g = t(31), E = t(88), h = t(69), y = t(56), v = t(22), s = y("splice"), d = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), c = Math.max, m = Math.min, p = 9007199254740991, A = "Maximum allowed length exceeded";
            r({ target: "Array", proto: !0, forced: !s || !d }, {
              splice: function(S, D) {
                var R = g(this), P = u(R.length), B = f(S, P), I = arguments.length, C, M, F, w, O, U;
                if (I === 0 ? C = M = 0 : I === 1 ? (C = 0, M = P - B) : (C = I - 2, M = m(c(l(D), 0), P - B)), P + C - M > p)
                  throw TypeError(A);
                for (F = E(R, M), w = 0; w < M; w++)
                  O = B + w, O in R && h(F, w, R[O]);
                if (F.length = M, C < M) {
                  for (w = B; w < P - M; w++)
                    O = w + M, U = w + C, O in R ? R[U] = R[O] : delete R[U];
                  for (w = P; w > P - M + C; w--) delete R[w - 1];
                } else if (C > M)
                  for (w = P - M; w > B; w--)
                    O = w + M - 1, U = w + C - 1, O in R ? R[U] = R[O] : delete R[U];
                for (w = 0; w < C; w++)
                  R[w + B] = arguments[w + 2];
                return R.length = P - M + C, F;
              }
            });
          },
          /* 209 */
          /***/
          function(o, i, t) {
            var r = t(210);
            o.exports = r;
          },
          /* 210 */
          /***/
          function(o, i, t) {
            var r = t(211), f = Array.prototype;
            o.exports = function(l) {
              var u = l.filter;
              return l === f || l instanceof Array && u === f.filter ? r : u;
            };
          },
          /* 211 */
          /***/
          function(o, i, t) {
            t(212);
            var r = t(15);
            o.exports = r("Array").filter;
          },
          /* 212 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(32).filter, l = t(56), u = t(22), g = l("filter"), E = u("filter");
            r({ target: "Array", proto: !0, forced: !g || !E }, {
              filter: function(y) {
                return f(this, y, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 213 */
          /***/
          function(o, i, t) {
            var r = t(214);
            o.exports = r;
          },
          /* 214 */
          /***/
          function(o, i, t) {
            var r = t(215), f = t(217), l = Array.prototype, u = String.prototype;
            o.exports = function(g) {
              var E = g.includes;
              return g === l || g instanceof Array && E === l.includes ? r : typeof g == "string" || g === u || g instanceof String && E === u.includes ? f : E;
            };
          },
          /* 215 */
          /***/
          function(o, i, t) {
            t(216);
            var r = t(15);
            o.exports = r("Array").includes;
          },
          /* 216 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(78).includes, l = t(82), u = t(22), g = u("indexOf", { ACCESSORS: !0, 1: 0 });
            r({ target: "Array", proto: !0, forced: !g }, {
              includes: function(h) {
                return f(this, h, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), l("includes");
          },
          /* 217 */
          /***/
          function(o, i, t) {
            t(218);
            var r = t(15);
            o.exports = r("String").includes;
          },
          /* 218 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(219), l = t(49), u = t(221);
            r({ target: "String", proto: !0, forced: !u("includes") }, {
              includes: function(E) {
                return !!~String(l(this)).indexOf(f(E), arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 219 */
          /***/
          function(o, i, t) {
            var r = t(220);
            o.exports = function(f) {
              if (r(f))
                throw TypeError("The method doesn't accept regular expressions");
              return f;
            };
          },
          /* 220 */
          /***/
          function(o, i, t) {
            var r = t(13), f = t(34), l = t(10), u = l("match");
            o.exports = function(g) {
              var E;
              return r(g) && ((E = g[u]) !== void 0 ? !!E : f(g) == "RegExp");
            };
          },
          /* 221 */
          /***/
          function(o, i, t) {
            var r = t(10), f = r("match");
            o.exports = function(l) {
              var u = /./;
              try {
                "/./"[l](u);
              } catch {
                try {
                  return u[f] = !1, "/./"[l](u);
                } catch {
                }
              }
              return !1;
            };
          },
          /* 222 */
          /***/
          function(o, i, t) {
            var r = t(223);
            o.exports = r;
          },
          /* 223 */
          /***/
          function(o, i, t) {
            var r = t(224), f = Function.prototype;
            o.exports = function(l) {
              var u = l.bind;
              return l === f || l instanceof Function && u === f.bind ? r : u;
            };
          },
          /* 224 */
          /***/
          function(o, i, t) {
            t(225);
            var r = t(15);
            o.exports = r("Function").bind;
          },
          /* 225 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(226);
            r({ target: "Function", proto: !0 }, {
              bind: f
            });
          },
          /* 226 */
          /***/
          function(o, i, t) {
            var r = t(41), f = t(13), l = [].slice, u = {}, g = function(E, h, y) {
              if (!(h in u)) {
                for (var v = [], s = 0; s < h; s++) v[s] = "a[" + s + "]";
                u[h] = Function("C,a", "return new C(" + v.join(",") + ")");
              }
              return u[h](E, y);
            };
            o.exports = Function.bind || function(h) {
              var y = r(this), v = l.call(arguments, 1), s = function() {
                var c = v.concat(l.call(arguments));
                return this instanceof s ? g(y, c.length, c) : y.apply(h, c);
              };
              return f(y.prototype) && (s.prototype = y.prototype), s;
            };
          },
          /* 227 */
          /***/
          function(o, i, t) {
            o.exports = t(228);
          },
          /* 228 */
          /***/
          function(o, i, t) {
            var r = t(229);
            o.exports = r;
          },
          /* 229 */
          /***/
          function(o, i, t) {
            t(125), t(50), t(54);
            var r = t(93);
            o.exports = r.f("iterator");
          },
          /* 230 */
          /***/
          function(o, i, t) {
            o.exports = t(231);
          },
          /* 231 */
          /***/
          function(o, i, t) {
            var r = t(232);
            t(251), t(252), t(253), t(254), t(255), o.exports = r;
          },
          /* 232 */
          /***/
          function(o, i, t) {
            t(233), t(61), t(234), t(236), t(237), t(238), t(239), t(125), t(240), t(241), t(242), t(243), t(244), t(245), t(246), t(247), t(248), t(249), t(250);
            var r = t(9);
            o.exports = r.Symbol;
          },
          /* 233 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(11), l = t(55), u = t(13), g = t(31), E = t(35), h = t(69), y = t(88), v = t(56), s = t(10), d = t(86), c = s("isConcatSpreadable"), m = 9007199254740991, p = "Maximum allowed index exceeded", A = d >= 51 || !f(function() {
              var R = [];
              return R[c] = !1, R.concat()[0] !== R;
            }), x = v("concat"), S = function(R) {
              if (!u(R)) return !1;
              var P = R[c];
              return P !== void 0 ? !!P : l(R);
            }, D = !A || !x;
            r({ target: "Array", proto: !0, forced: D }, {
              concat: function(P) {
                var B = g(this), I = y(B, 0), C = 0, M, F, w, O, U;
                for (M = -1, w = arguments.length; M < w; M++)
                  if (U = M === -1 ? B : arguments[M], S(U)) {
                    if (O = E(U.length), C + O > m) throw TypeError(p);
                    for (F = 0; F < O; F++, C++) F in U && h(I, C, U[F]);
                  } else {
                    if (C >= m) throw TypeError(p);
                    h(I, C++, U);
                  }
                return I.length = C, I;
              }
            });
          },
          /* 234 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(8), l = t(36), u = t(43), g = t(14), E = t(76), h = t(106), y = t(11), v = t(16), s = t(55), d = t(13), c = t(25), m = t(31), p = t(30), A = t(60), x = t(48), S = t(77), D = t(52), R = t(126), P = t(235), B = t(127), I = t(71), C = t(18), M = t(59), F = t(19), w = t(53), O = t(74), U = t(63), b = t(51), Q = t(64), j = t(10), z = t(93), W = t(12), q = t(37), ut = t(42), _ = t(32).forEach, ft = U("hidden"), at = "Symbol", tt = "prototype", et = j("toPrimitive"), lt = ut.set, mt = ut.getterFor(at), Dt = Object[tt], Ht = f.Symbol, fe = l("JSON", "stringify"), _t = I.f, Kt = C.f, vn = P.f, te = M.f, re = O("symbols"), He = O("op-symbols"), Se = O("string-to-symbol-registry"), zt = O("symbol-to-string-registry"), je = O("wks"), we = f.QObject, Ke = !we || !we[tt] || !we[tt].findChild, Ce = g && y(function() {
              return S(Kt({}, "a", {
                get: function() {
                  return Kt(this, "a", { value: 7 }).a;
                }
              })).a != 7;
            }) ? function(it, rt, vt) {
              var yt = _t(Dt, rt);
              yt && delete Dt[rt], Kt(it, rt, vt), yt && it !== Dt && Kt(Dt, rt, yt);
            } : Kt, hn = function(it, rt) {
              var vt = re[it] = S(Ht[tt]);
              return lt(vt, {
                type: at,
                tag: it,
                description: rt
              }), g || (vt.description = rt), vt;
            }, Te = h ? function(it) {
              return typeof it == "symbol";
            } : function(it) {
              return Object(it) instanceof Ht;
            }, he = function(rt, vt, yt) {
              rt === Dt && he(He, vt, yt), c(rt);
              var Rt = A(vt, !0);
              return c(yt), v(re, Rt) ? (yt.enumerable ? (v(rt, ft) && rt[ft][Rt] && (rt[ft][Rt] = !1), yt = S(yt, { enumerable: x(0, !1) })) : (v(rt, ft) || Kt(rt, ft, x(1, {})), rt[ft][Rt] = !0), Ce(rt, Rt, yt)) : Kt(rt, Rt, yt);
            }, pe = function(rt, vt) {
              c(rt);
              var yt = p(vt), Rt = D(yt).concat(At(yt));
              return _(Rt, function(Qt) {
                (!g || Ue.call(yt, Qt)) && he(rt, Qt, yt[Qt]);
              }), rt;
            }, De = function(rt, vt) {
              return vt === void 0 ? S(rt) : pe(S(rt), vt);
            }, Ue = function(rt) {
              var vt = A(rt, !0), yt = te.call(this, vt);
              return this === Dt && v(re, vt) && !v(He, vt) ? !1 : yt || !v(this, vt) || !v(re, vt) || v(this, ft) && this[ft][vt] ? yt : !0;
            }, ct = function(rt, vt) {
              var yt = p(rt), Rt = A(vt, !0);
              if (!(yt === Dt && v(re, Rt) && !v(He, Rt))) {
                var Qt = _t(yt, Rt);
                return Qt && v(re, Rt) && !(v(yt, ft) && yt[ft][Rt]) && (Qt.enumerable = !0), Qt;
              }
            }, nt = function(rt) {
              var vt = vn(p(rt)), yt = [];
              return _(vt, function(Rt) {
                !v(re, Rt) && !v(b, Rt) && yt.push(Rt);
              }), yt;
            }, At = function(rt) {
              var vt = rt === Dt, yt = vn(vt ? He : p(rt)), Rt = [];
              return _(yt, function(Qt) {
                v(re, Qt) && (!vt || v(Dt, Qt)) && Rt.push(re[Qt]);
              }), Rt;
            };
            if (E || (Ht = function() {
              if (this instanceof Ht) throw TypeError("Symbol is not a constructor");
              var rt = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), vt = Q(rt), yt = function(Rt) {
                this === Dt && yt.call(He, Rt), v(this, ft) && v(this[ft], vt) && (this[ft][vt] = !1), Ce(this, vt, x(1, Rt));
              };
              return g && Ke && Ce(Dt, vt, { configurable: !0, set: yt }), hn(vt, rt);
            }, w(Ht[tt], "toString", function() {
              return mt(this).tag;
            }), w(Ht, "withoutSetter", function(it) {
              return hn(Q(it), it);
            }), M.f = Ue, C.f = he, I.f = ct, R.f = P.f = nt, B.f = At, z.f = function(it) {
              return hn(j(it), it);
            }, g && (Kt(Ht[tt], "description", {
              configurable: !0,
              get: function() {
                return mt(this).description;
              }
            }), u || w(Dt, "propertyIsEnumerable", Ue, { unsafe: !0 }))), r({ global: !0, wrap: !0, forced: !E, sham: !E }, {
              Symbol: Ht
            }), _(D(je), function(it) {
              W(it);
            }), r({ target: at, stat: !0, forced: !E }, {
              // `Symbol.for` method
              // https://tc39.github.io/ecma262/#sec-symbol.for
              for: function(it) {
                var rt = String(it);
                if (v(Se, rt)) return Se[rt];
                var vt = Ht(rt);
                return Se[rt] = vt, zt[vt] = rt, vt;
              },
              // `Symbol.keyFor` method
              // https://tc39.github.io/ecma262/#sec-symbol.keyfor
              keyFor: function(rt) {
                if (!Te(rt)) throw TypeError(rt + " is not a symbol");
                if (v(zt, rt)) return zt[rt];
              },
              useSetter: function() {
                Ke = !0;
              },
              useSimple: function() {
                Ke = !1;
              }
            }), r({ target: "Object", stat: !0, forced: !E, sham: !g }, {
              // `Object.create` method
              // https://tc39.github.io/ecma262/#sec-object.create
              create: De,
              // `Object.defineProperty` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperty
              defineProperty: he,
              // `Object.defineProperties` method
              // https://tc39.github.io/ecma262/#sec-object.defineproperties
              defineProperties: pe,
              // `Object.getOwnPropertyDescriptor` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
              getOwnPropertyDescriptor: ct
            }), r({ target: "Object", stat: !0, forced: !E }, {
              // `Object.getOwnPropertyNames` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
              getOwnPropertyNames: nt,
              // `Object.getOwnPropertySymbols` method
              // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
              getOwnPropertySymbols: At
            }), r({ target: "Object", stat: !0, forced: y(function() {
              B.f(1);
            }) }, {
              getOwnPropertySymbols: function(rt) {
                return B.f(m(rt));
              }
            }), fe) {
              var Et = !E || y(function() {
                var it = Ht();
                return fe([it]) != "[null]" || fe({ a: it }) != "{}" || fe(Object(it)) != "{}";
              });
              r({ target: "JSON", stat: !0, forced: Et }, {
                // eslint-disable-next-line no-unused-vars
                stringify: function(rt, vt, yt) {
                  for (var Rt = [rt], Qt = 1, oe; arguments.length > Qt; ) Rt.push(arguments[Qt++]);
                  if (oe = vt, !(!d(vt) && rt === void 0 || Te(rt)))
                    return s(vt) || (vt = function(Re, ie) {
                      if (typeof oe == "function" && (ie = oe.call(this, Re, ie)), !Te(ie)) return ie;
                    }), Rt[1] = vt, fe.apply(null, Rt);
                }
              });
            }
            Ht[tt][et] || F(Ht[tt], et, Ht[tt].valueOf), q(Ht, at), b[ft] = !0;
          },
          /* 235 */
          /***/
          function(o, i, t) {
            var r = t(30), f = t(126).f, l = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], g = function(E) {
              try {
                return f(E);
              } catch {
                return u.slice();
              }
            };
            o.exports.f = function(h) {
              return u && l.call(h) == "[object Window]" ? g(h) : f(r(h));
            };
          },
          /* 236 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("asyncIterator");
          },
          /* 237 */
          /***/
          function(o, i) {
          },
          /* 238 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("hasInstance");
          },
          /* 239 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("isConcatSpreadable");
          },
          /* 240 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("match");
          },
          /* 241 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("matchAll");
          },
          /* 242 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("replace");
          },
          /* 243 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("search");
          },
          /* 244 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("species");
          },
          /* 245 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("split");
          },
          /* 246 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("toPrimitive");
          },
          /* 247 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("toStringTag");
          },
          /* 248 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("unscopables");
          },
          /* 249 */
          /***/
          function(o, i, t) {
            var r = t(37);
            r(Math, "Math", !0);
          },
          /* 250 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(37);
            f(r.JSON, "JSON", !0);
          },
          /* 251 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("asyncDispose");
          },
          /* 252 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("dispose");
          },
          /* 253 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("observable");
          },
          /* 254 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("patternMatch");
          },
          /* 255 */
          /***/
          function(o, i, t) {
            var r = t(12);
            r("replaceAll");
          },
          /* 256 */
          /***/
          function(o, i, t) {
            o.exports = t(257);
          },
          /* 257 */
          /***/
          function(o, i, t) {
            var r = t(258);
            o.exports = r;
          },
          /* 258 */
          /***/
          function(o, i, t) {
            t(259);
            var r = t(9);
            o.exports = r.parseInt;
          },
          /* 259 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(260);
            r({ global: !0, forced: parseInt != f }, {
              parseInt: f
            });
          },
          /* 260 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(90).trim, l = t(68), u = r.parseInt, g = /^[+-]?0[Xx]/, E = u(l + "08") !== 8 || u(l + "0x16") !== 22;
            o.exports = E ? function(y, v) {
              var s = f(String(y));
              return u(s, v >>> 0 || (g.test(s) ? 16 : 10));
            } : u;
          },
          /* 261 */
          /***/
          function(o, i, t) {
            var r = t(262);
            o.exports = r;
          },
          /* 262 */
          /***/
          function(o, i, t) {
            var r = t(263), f = Array.prototype;
            o.exports = function(l) {
              var u = l.slice;
              return l === f || l instanceof Array && u === f.slice ? r : u;
            };
          },
          /* 263 */
          /***/
          function(o, i, t) {
            t(264);
            var r = t(15);
            o.exports = r("Array").slice;
          },
          /* 264 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(13), l = t(55), u = t(79), g = t(35), E = t(30), h = t(69), y = t(10), v = t(56), s = t(22), d = v("slice"), c = s("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), m = y("species"), p = [].slice, A = Math.max;
            r({ target: "Array", proto: !0, forced: !d || !c }, {
              slice: function(S, D) {
                var R = E(this), P = g(R.length), B = u(S, P), I = u(D === void 0 ? P : D, P), C, M, F;
                if (l(R) && (C = R.constructor, typeof C == "function" && (C === Array || l(C.prototype)) ? C = void 0 : f(C) && (C = C[m], C === null && (C = void 0)), C === Array || C === void 0))
                  return p.call(R, B, I);
                for (M = new (C === void 0 ? Array : C)(A(I - B, 0)), F = 0; B < I; B++, F++) B in R && h(M, F, R[B]);
                return M.length = F, M;
              }
            });
          },
          /* 265 */
          /***/
          function(o, i, t) {
            t(266);
            var r = t(9);
            o.exports = r.setTimeout;
          },
          /* 266 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(8), l = t(84), u = [].slice, g = /MSIE .\./.test(l), E = function(h) {
              return function(y, v) {
                var s = arguments.length > 2, d = s ? u.call(arguments, 2) : void 0;
                return h(s ? function() {
                  (typeof y == "function" ? y : Function(y)).apply(this, d);
                } : y, v);
              };
            };
            r({ global: !0, bind: !0, forced: g }, {
              // `setTimeout` method
              // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
              setTimeout: E(f.setTimeout),
              // `setInterval` method
              // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
              setInterval: E(f.setInterval)
            });
          },
          /* 267 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(128));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(272)), E = u.__importDefault(t(273)), h = u.__importDefault(t(129)), y = u.__importDefault(t(274)), v = u.__importDefault(t(275)), s = u.__importDefault(t(276)), d = u.__importDefault(t(130)), c = u.__importDefault(t(277)), m = u.__importDefault(t(278)), p = u.__importDefault(t(279)), A = (0, l.default)(
              {},
              g.default,
              E.default,
              h.default,
              v.default,
              y.default,
              s.default,
              d.default,
              c.default,
              m.default,
              p.default,
              //链接校验的配置函数
              {
                linkCheck: function(S, D) {
                  return !0;
                }
              }
            );
            i.default = A;
          },
          /* 268 */
          /***/
          function(o, i, t) {
            var r = t(269);
            o.exports = r;
          },
          /* 269 */
          /***/
          function(o, i, t) {
            t(270);
            var r = t(9);
            o.exports = r.Object.assign;
          },
          /* 270 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(271);
            r({ target: "Object", stat: !0, forced: Object.assign !== f }, {
              assign: f
            });
          },
          /* 271 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(11), l = t(52), u = t(127), g = t(59), E = t(31), h = t(72), y = Object.assign, v = Object.defineProperty;
            o.exports = !y || f(function() {
              if (r && y({ b: 1 }, y(v({}, "a", {
                enumerable: !0,
                get: function() {
                  v(this, "b", {
                    value: 3,
                    enumerable: !1
                  });
                }
              }), { b: 2 })).b !== 1) return !0;
              var s = {}, d = {}, c = Symbol(), m = "abcdefghijklmnopqrst";
              return s[c] = 7, m.split("").forEach(function(p) {
                d[p] = p;
              }), y({}, s)[c] != 7 || l(y({}, d)).join("") != m;
            }) ? function(d, c) {
              for (var m = E(d), p = arguments.length, A = 1, x = u.f, S = g.f; p > A; )
                for (var D = h(arguments[A++]), R = x ? l(D).concat(x(D)) : l(D), P = R.length, B = 0, I; P > B; )
                  I = R[B++], (!r || S.call(D, I)) && (m[I] = D[I]);
              return m;
            } : y;
          },
          /* 272 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              menus: [
                "head",
                "bold",
                "fontSize",
                // 'customFontSize',
                "fontName",
                "italic",
                "underline",
                "strikeThrough",
                "indent",
                "lineHeight",
                "foreColor",
                "backColor",
                "link",
                "list",
                "todo",
                "justify",
                "quote",
                "emoticon",
                "image",
                "video",
                "table",
                "code",
                "splitLine",
                "undo",
                "redo"
              ],
              fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
              //  fontNames: [{ name: '宋体', value: '宋体' }],
              fontSizes: {
                "x-small": {
                  name: "10px",
                  value: "1"
                },
                small: {
                  name: "13px",
                  value: "2"
                },
                normal: {
                  name: "16px",
                  value: "3"
                },
                large: {
                  name: "18px",
                  value: "4"
                },
                "x-large": {
                  name: "24px",
                  value: "5"
                },
                "xx-large": {
                  name: "32px",
                  value: "6"
                },
                "xxx-large": {
                  name: "48px",
                  value: "7"
                }
              },
              // customFontSize: [ // 该菜单暂时不用 - 王福朋 20200924
              //     { value: '9px', text: '9' },
              //     { value: '10px', text: '10' },
              //     { value: '12px', text: '12' },
              //     { value: '14px', text: '14' },
              //     { value: '16px', text: '16' },
              //     { value: '20px', text: '20' },
              //     { value: '42px', text: '42' },
              //     { value: '72px', text: '72' },
              // ],
              colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
              //插入代码语言配置
              languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
              languageTab: "　　　　",
              /**
               * 表情配置菜单
               * 如果为emoji表情直接作为元素插入
               * emoticon:Array<EmotionsType>
               */
              emotions: [{
                // tab 的标题
                title: "表情",
                // type -> 'emoji' / 'image'
                type: "emoji",
                // content -> 数组
                content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣".split(/\s/)
              }, {
                // tab 的标题
                title: "手势",
                // type -> 'emoji' / 'image'
                type: "emoji",
                // content -> 数组
                content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(/\s/)
              }],
              lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
              undoLimit: 20,
              indentation: "2em",
              showMenuTooltips: !0,
              // 菜单栏tooltip为上标还是下标
              menuTooltipPosition: "up"
            };
          },
          /* 273 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(7);
            function u(g, E, h) {
              window.alert(g), h && console.error("wangEditor: " + h);
            }
            i.default = {
              onchangeTimeout: 200,
              onchange: null,
              onfocus: l.EMPTY_FN,
              onblur: l.EMPTY_FN,
              onCatalogChange: null,
              customAlert: u
            };
          },
          /* 274 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              // 粘贴过滤样式，默认开启
              pasteFilterStyle: !0,
              // 粘贴内容时，忽略图片。默认关闭
              pasteIgnoreImg: !1,
              // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
              // IE 暂时不支持
              pasteTextHandle: function(u) {
                return u;
              }
            };
          },
          /* 275 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              styleWithCSS: !1
            };
          },
          /* 276 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(7);
            i.default = {
              // 网络图片校验的配置函数
              linkImgCheck: function(g, E, h) {
                return !0;
              },
              // 显示“插入网络图片”
              showLinkImg: !0,
              // 显示“插入图片alt”
              showLinkImgAlt: !0,
              // 显示“插入图片href”
              showLinkImgHref: !0,
              // 插入图片成功之后的回调函数
              linkImgCallback: l.EMPTY_FN,
              // accept
              uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
              // 服务端地址
              uploadImgServer: "",
              // 使用 base64 存储图片
              uploadImgShowBase64: !1,
              // 上传图片的最大体积，默认 5M
              uploadImgMaxSize: 5 * 1024 * 1024,
              // 一次最多上传多少个图片
              uploadImgMaxLength: 100,
              // 自定义上传图片的名称
              uploadFileName: "",
              // 上传图片自定义参数
              uploadImgParams: {},
              // 自定义参数拼接到 url 中
              uploadImgParamsWithUrl: !1,
              // 上传图片自定义 header
              uploadImgHeaders: {},
              // 钩子函数
              uploadImgHooks: {},
              // 上传图片超时时间 ms
              uploadImgTimeout: 10 * 1e3,
              // 跨域带 cookie
              withCredentials: !1,
              // 自定义上传
              customUploadImg: null,
              // 从媒体库上传
              uploadImgFromMedia: null
            };
          },
          /* 277 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.default = {
              lang: "zh-CN",
              languages: {
                "zh-CN": {
                  wangEditor: {
                    重置: "重置",
                    插入: "插入",
                    默认: "默认",
                    创建: "创建",
                    修改: "修改",
                    如: "如",
                    请输入正文: "请输入正文",
                    menus: {
                      title: {
                        标题: "标题",
                        加粗: "加粗",
                        字号: "字号",
                        字体: "字体",
                        斜体: "斜体",
                        下划线: "下划线",
                        删除线: "删除线",
                        缩进: "缩进",
                        行高: "行高",
                        文字颜色: "文字颜色",
                        背景色: "背景色",
                        链接: "链接",
                        序列: "序列",
                        对齐: "对齐",
                        引用: "引用",
                        表情: "表情",
                        图片: "图片",
                        视频: "视频",
                        表格: "表格",
                        代码: "代码",
                        分割线: "分割线",
                        恢复: "恢复",
                        撤销: "撤销",
                        全屏: "全屏",
                        取消全屏: "取消全屏",
                        待办事项: "待办事项"
                      },
                      dropListMenu: {
                        设置标题: "设置标题",
                        背景颜色: "背景颜色",
                        文字颜色: "文字颜色",
                        设置字号: "设置字号",
                        设置字体: "设置字体",
                        设置缩进: "设置缩进",
                        对齐方式: "对齐方式",
                        设置行高: "设置行高",
                        序列: "序列",
                        head: {
                          正文: "正文"
                        },
                        indent: {
                          增加缩进: "增加缩进",
                          减少缩进: "减少缩进"
                        },
                        justify: {
                          靠左: "靠左",
                          居中: "居中",
                          靠右: "靠右",
                          两端: "两端"
                        },
                        list: {
                          无序列表: "无序列表",
                          有序列表: "有序列表"
                        }
                      },
                      panelMenus: {
                        emoticon: {
                          默认: "默认",
                          新浪: "新浪",
                          emoji: "emoji",
                          手势: "手势"
                        },
                        image: {
                          上传图片: "上传图片",
                          网络图片: "网络图片",
                          图片地址: "图片地址",
                          图片文字说明: "图片文字说明",
                          跳转链接: "跳转链接"
                        },
                        link: {
                          链接: "链接",
                          链接文字: "链接文字",
                          取消链接: "取消链接",
                          查看链接: "查看链接"
                        },
                        video: {
                          插入视频: "插入视频",
                          上传视频: "上传视频"
                        },
                        table: {
                          行: "行",
                          列: "列",
                          的: "的",
                          表格: "表格",
                          添加行: "添加行",
                          删除行: "删除行",
                          添加列: "添加列",
                          删除列: "删除列",
                          设置表头: "设置表头",
                          取消表头: "取消表头",
                          插入表格: "插入表格",
                          删除表格: "删除表格"
                        },
                        code: {
                          删除代码: "删除代码",
                          修改代码: "修改代码",
                          插入代码: "插入代码"
                        }
                      }
                    },
                    validate: {
                      张图片: "张图片",
                      大于: "大于",
                      图片链接: "图片链接",
                      不是图片: "不是图片",
                      返回结果: "返回结果",
                      上传图片超时: "上传图片超时",
                      上传图片错误: "上传图片错误",
                      上传图片失败: "上传图片失败",
                      插入图片错误: "插入图片错误",
                      一次最多上传: "一次最多上传",
                      下载链接失败: "下载链接失败",
                      图片验证未通过: "图片验证未通过",
                      服务器返回状态: "服务器返回状态",
                      上传图片返回结果错误: "上传图片返回结果错误",
                      请替换为支持的图片类型: "请替换为支持的图片类型",
                      您插入的网络图片无法识别: "您插入的网络图片无法识别",
                      您刚才插入的图片链接未通过编辑器校验: "您刚才插入的图片链接未通过编辑器校验",
                      插入视频错误: "插入视频错误",
                      视频链接: "视频链接",
                      不是视频: "不是视频",
                      视频验证未通过: "视频验证未通过",
                      个视频: "个视频",
                      上传视频超时: "上传视频超时",
                      上传视频错误: "上传视频错误",
                      上传视频失败: "上传视频失败",
                      上传视频返回结果错误: "上传视频返回结果错误"
                    }
                  }
                },
                en: {
                  wangEditor: {
                    重置: "reset",
                    插入: "insert",
                    默认: "default",
                    创建: "create",
                    修改: "edit",
                    如: "like",
                    请输入正文: "please enter the text",
                    menus: {
                      title: {
                        标题: "head",
                        加粗: "bold",
                        字号: "font size",
                        字体: "font family",
                        斜体: "italic",
                        下划线: "underline",
                        删除线: "strikethrough",
                        缩进: "indent",
                        行高: "line heihgt",
                        文字颜色: "font color",
                        背景色: "background",
                        链接: "link",
                        序列: "numbered list",
                        对齐: "align",
                        引用: "quote",
                        表情: "emoticons",
                        图片: "image",
                        视频: "media",
                        表格: "table",
                        代码: "code",
                        分割线: "split line",
                        恢复: "redo",
                        撤销: "undo",
                        全屏: "fullscreen",
                        取消全屏: "cancel fullscreen",
                        待办事项: "todo"
                      },
                      dropListMenu: {
                        设置标题: "title",
                        背景颜色: "background",
                        文字颜色: "font color",
                        设置字号: "font size",
                        设置字体: "font family",
                        设置缩进: "indent",
                        对齐方式: "align",
                        设置行高: "line heihgt",
                        序列: "list",
                        head: {
                          正文: "text"
                        },
                        indent: {
                          增加缩进: "indent",
                          减少缩进: "outdent"
                        },
                        justify: {
                          靠左: "left",
                          居中: "center",
                          靠右: "right",
                          两端: "justify"
                        },
                        list: {
                          无序列表: "unordered",
                          有序列表: "ordered"
                        }
                      },
                      panelMenus: {
                        emoticon: {
                          表情: "emoji",
                          手势: "gesture"
                        },
                        image: {
                          上传图片: "upload image",
                          网络图片: "network image",
                          图片地址: "image link",
                          图片文字说明: "image alt",
                          跳转链接: "hyperlink"
                        },
                        link: {
                          链接: "link",
                          链接文字: "link text",
                          取消链接: "unlink",
                          查看链接: "view links"
                        },
                        video: {
                          插入视频: "insert video",
                          上传视频: "upload local video"
                        },
                        table: {
                          行: "rows",
                          列: "columns",
                          的: " ",
                          表格: "table",
                          添加行: "insert row",
                          删除行: "delete row",
                          添加列: "insert column",
                          删除列: "delete column",
                          设置表头: "set header",
                          取消表头: "cancel header",
                          插入表格: "insert table",
                          删除表格: "delete table"
                        },
                        code: {
                          删除代码: "delete code",
                          修改代码: "edit code",
                          插入代码: "insert code"
                        }
                      }
                    },
                    validate: {
                      张图片: "images",
                      大于: "greater than",
                      图片链接: "image link",
                      不是图片: "is not image",
                      返回结果: "return results",
                      上传图片超时: "upload image timeout",
                      上传图片错误: "upload image error",
                      上传图片失败: "upload image failed",
                      插入图片错误: "insert image error",
                      一次最多上传: "once most at upload",
                      下载链接失败: "download link failed",
                      图片验证未通过: "image validate failed",
                      服务器返回状态: "server return status",
                      上传图片返回结果错误: "upload image return results error",
                      请替换为支持的图片类型: "please replace with a supported image type",
                      您插入的网络图片无法识别: "the network picture you inserted is not recognized",
                      您刚才插入的图片链接未通过编辑器校验: "the image link you just inserted did not pass the editor verification",
                      插入视频错误: "insert video error",
                      视频链接: "video link",
                      不是视频: "is not video",
                      视频验证未通过: "video validate failed",
                      个视频: "videos",
                      上传视频超时: "upload video timeout",
                      上传视频错误: "upload video error",
                      上传视频失败: "upload video failed",
                      上传视频返回结果错误: "upload video return results error"
                    }
                  }
                }
              }
            };
          },
          /* 278 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(6);
            function u() {
              return !!(l.UA.isIE() || l.UA.isOldEdge);
            }
            i.default = {
              compatibleMode: u,
              historyMaxSize: 30
            };
          },
          /* 279 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(7);
            i.default = {
              // 插入网络视频前的回调函数
              onlineVideoCheck: function(g) {
                return !0;
              },
              // 插入网络视频成功之后的回调函数
              onlineVideoCallback: l.EMPTY_FN,
              // 显示“插入视频”
              showLinkVideo: !0,
              // accept
              uploadVideoAccept: ["mp4"],
              // 服务端地址
              uploadVideoServer: "",
              // 上传视频的最大体积，默认 1024M
              uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
              // 一次最多上传多少个视频
              // uploadVideoMaxLength: 2,
              // 自定义上传视频的名称
              uploadVideoName: "",
              // 上传视频自定义参数
              uploadVideoParams: {},
              // 自定义参数拼接到 url 中
              uploadVideoParamsWithUrl: !1,
              // 上传视频自定义 header
              uploadVideoHeaders: {},
              // 钩子函数
              uploadVideoHooks: {},
              // 上传视频超时时间 ms 默认2个小时
              uploadVideoTimeout: 1e3 * 60 * 60 * 2,
              // 跨域带 cookie
              withVideoCredentials: !1,
              // 自定义上传
              customUploadVideo: null,
              // 自定义插入视频
              customInsertVideo: null
            };
          },
          /* 280 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(6), h = t(7), y = (
              /** @class */
              function() {
                function v(s) {
                  this._currentRange = null, this.editor = s;
                }
                return v.prototype.getRange = function() {
                  return this._currentRange;
                }, v.prototype.saveRange = function(s) {
                  if (s) {
                    this._currentRange = s;
                    return;
                  }
                  var d = window.getSelection();
                  if (d.rangeCount !== 0) {
                    var c = d.getRangeAt(0), m = this.getSelectionContainerElem(c);
                    if (m != null && m.length && !(m.attr("contenteditable") === "false" || m.parentUntil("[contenteditable=false]"))) {
                      var p = this.editor, A = p.$textElem;
                      if (A.isContain(m)) {
                        if (A.elems[0] === m.elems[0]) {
                          var x;
                          if ((0, l.default)(x = A.html()).call(x) === h.EMPTY_P) {
                            var S = A.children(), D = S == null ? void 0 : S.last();
                            p.selection.createRangeByElem(D, !0, !0), p.selection.restoreSelection();
                          }
                        }
                        this._currentRange = c;
                      }
                    }
                  }
                }, v.prototype.collapseRange = function(s) {
                  s === void 0 && (s = !1);
                  var d = this._currentRange;
                  d && d.collapse(s);
                }, v.prototype.getSelectionText = function() {
                  var s = this._currentRange;
                  return s ? s.toString() : "";
                }, v.prototype.getSelectionContainerElem = function(s) {
                  var d;
                  d = s || this._currentRange;
                  var c;
                  if (d)
                    return c = d.commonAncestorContainer, g.default(c.nodeType === 1 ? c : c.parentNode);
                }, v.prototype.getSelectionStartElem = function(s) {
                  var d;
                  d = s || this._currentRange;
                  var c;
                  if (d)
                    return c = d.startContainer, g.default(c.nodeType === 1 ? c : c.parentNode);
                }, v.prototype.getSelectionEndElem = function(s) {
                  var d;
                  d = s || this._currentRange;
                  var c;
                  if (d)
                    return c = d.endContainer, g.default(c.nodeType === 1 ? c : c.parentNode);
                }, v.prototype.isSelectionEmpty = function() {
                  var s = this._currentRange;
                  return !!(s && s.startContainer && s.startContainer === s.endContainer && s.startOffset === s.endOffset);
                }, v.prototype.restoreSelection = function() {
                  var s = window.getSelection(), d = this._currentRange;
                  s && d && (s.removeAllRanges(), s.addRange(d));
                }, v.prototype.createEmptyRange = function() {
                  var s = this.editor, d = this.getRange(), c;
                  if (d && this.isSelectionEmpty())
                    try {
                      E.UA.isWebkit() ? (s.cmd.do("insertHTML", "&#8203;"), d.setEnd(d.endContainer, d.endOffset + 1), this.saveRange(d)) : (c = g.default("<strong>&#8203;</strong>"), s.cmd.do("insertElem", c), this.createRangeByElem(c, !0));
                    } catch {
                    }
                }, v.prototype.createRangeByElems = function(s, d) {
                  var c = window.getSelection ? window.getSelection() : document.getSelection();
                  c == null || c.removeAllRanges();
                  var m = document.createRange();
                  m.setStart(s, 0), m.setEnd(d, d.childNodes.length || 1), this.saveRange(m), this.restoreSelection();
                }, v.prototype.createRangeByElem = function(s, d, c) {
                  if (s.length) {
                    var m = s.elems[0], p = document.createRange();
                    c ? p.selectNodeContents(m) : p.selectNode(m), d != null && (p.collapse(d), d || (this.saveRange(p), this.editor.selection.moveCursor(m))), this.saveRange(p);
                  }
                }, v.prototype.getSelectionRangeTopNodes = function() {
                  var s, d, c, m = (s = this.getSelectionStartElem()) === null || s === void 0 ? void 0 : s.getNodeTop(this.editor), p = (d = this.getSelectionEndElem()) === null || d === void 0 ? void 0 : d.getNodeTop(this.editor);
                  return c = this.recordSelectionNodes(g.default(m), g.default(p)), c;
                }, v.prototype.moveCursor = function(s, d) {
                  var c, m = this.getRange(), p = s.nodeType === 3 ? (c = s.nodeValue) === null || c === void 0 ? void 0 : c.length : s.childNodes.length;
                  (E.UA.isFirefox || E.UA.isIE()) && p !== 0 && (s.nodeType === 3 || s.childNodes[p - 1].nodeName === "BR") && (p = p - 1);
                  var A = d ?? p;
                  m && s && (m.setStart(s, A), m.setEnd(s, A), this.restoreSelection());
                }, v.prototype.getCursorPos = function() {
                  var s = window.getSelection();
                  return s == null ? void 0 : s.anchorOffset;
                }, v.prototype.clearWindowSelectionRange = function() {
                  var s = window.getSelection();
                  s && s.removeAllRanges();
                }, v.prototype.recordSelectionNodes = function(s, d) {
                  var c = [], m = !0;
                  try {
                    for (var p = s, A = this.editor.$textElem; m; ) {
                      var x = p == null ? void 0 : p.getNodeTop(this.editor);
                      x.getNodeName() === "BODY" && (m = !1), x.length > 0 && (c.push(g.default(p)), d != null && d.equal(x) || A.equal(x) ? m = !1 : p = x.getNextSibling());
                    }
                  } catch {
                    m = !1;
                  }
                  return c;
                }, v.prototype.setRangeToElem = function(s) {
                  var d = this.getRange();
                  d == null || d.setStart(s, 0), d == null || d.setEnd(s, 0);
                }, v;
              }()
            );
            i.default = y;
          },
          /* 281 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = (
              /** @class */
              function() {
                function E(h) {
                  this.editor = h;
                }
                return E.prototype.do = function(h, y) {
                  var v = this.editor;
                  v.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
                  var s = v.selection;
                  if (s.getRange()) {
                    switch (s.restoreSelection(), h) {
                      case "insertHTML":
                        this.insertHTML(y);
                        break;
                      case "insertElem":
                        this.insertElem(y);
                        break;
                      default:
                        this.execCommand(h, y);
                        break;
                    }
                    v.menus.changeActive(), s.saveRange(), s.restoreSelection();
                  }
                }, E.prototype.insertHTML = function(h) {
                  var y = this.editor, v = y.selection.getRange();
                  if (v != null) {
                    if (this.queryCommandSupported("insertHTML"))
                      this.execCommand("insertHTML", h);
                    else if (v.insertNode) {
                      if (v.deleteContents(), u.default(h).elems.length > 0)
                        v.insertNode(u.default(h).elems[0]);
                      else {
                        var s = document.createElement("p");
                        s.appendChild(document.createTextNode(h)), v.insertNode(s);
                      }
                      y.selection.collapseRange();
                    }
                  }
                }, E.prototype.insertElem = function(h) {
                  var y = this.editor, v = y.selection.getRange();
                  v != null && v.insertNode && (v.deleteContents(), v.insertNode(h.elems[0]));
                }, E.prototype.execCommand = function(h, y) {
                  document.execCommand(h, !1, y);
                }, E.prototype.queryCommandValue = function(h) {
                  return document.queryCommandValue(h);
                }, E.prototype.queryCommandState = function(h) {
                  return document.queryCommandState(h);
                }, E.prototype.queryCommandSupported = function(h) {
                  return document.queryCommandSupported(h);
                }, E;
              }()
            );
            i.default = g;
          },
          /* 282 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29)), u = r(t(4)), g = r(t(17)), E = r(t(27)), h = r(t(46));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var y = t(2), v = y.__importDefault(t(3)), s = y.__importDefault(t(287)), d = t(6), c = y.__importDefault(t(299)), m = y.__importDefault(t(300)), p = t(7), A = (
              /** @class */
              function() {
                function x(S) {
                  this.editor = S, this.eventHooks = {
                    onBlurEvents: [],
                    changeEvents: [],
                    dropEvents: [],
                    clickEvents: [],
                    keydownEvents: [],
                    keyupEvents: [],
                    tabUpEvents: [],
                    tabDownEvents: [],
                    enterUpEvents: [],
                    enterDownEvents: [],
                    deleteUpEvents: [],
                    deleteDownEvents: [],
                    pasteEvents: [],
                    linkClickEvents: [],
                    codeClickEvents: [],
                    textScrollEvents: [],
                    toolbarClickEvents: [],
                    imgClickEvents: [],
                    imgDragBarMouseDownEvents: [],
                    tableClickEvents: [],
                    menuClickEvents: [],
                    dropListMenuHoverEvents: [],
                    splitLineEvents: [],
                    videoClickEvents: []
                  };
                }
                return x.prototype.init = function() {
                  this._saveRange(), this._bindEventHooks(), s.default(this);
                }, x.prototype.togglePlaceholder = function() {
                  var S, D = this.html(), R = (0, l.default)(S = this.editor.$textContainerElem).call(S, ".placeholder");
                  R.hide(), !this.editor.isComposing && (!D || D === " ") && R.show();
                }, x.prototype.clear = function() {
                  this.html(p.EMPTY_P);
                }, x.prototype.html = function(S) {
                  var D = this.editor, R = D.$textElem;
                  if (S == null) {
                    var P = R.html();
                    P = P.replace(/\u200b/gm, ""), P = P.replace(/<p><\/p>/gim, ""), P = P.replace(p.EMPTY_P_LAST_REGEX, ""), P = P.replace(p.EMPTY_P_REGEX, "<p>");
                    var B = P.match(/<(img|br|hr|input)[^>]*>/gi);
                    return B !== null && (0, u.default)(B).call(B, function(I) {
                      I.match(/\/>/) || (P = P.replace(I, I.substring(0, I.length - 1) + "/>"));
                    }), P;
                  }
                  S = (0, g.default)(S).call(S), S === "" && (S = p.EMPTY_P), (0, E.default)(S).call(S, "<") !== 0 && (S = "<p>" + S + "</p>"), R.html(S), D.initSelection();
                }, x.prototype.setJSON = function(S) {
                  var D = m.default(S).children(), R = this.editor, P = R.$textElem;
                  D && P.replaceChildAll(D);
                }, x.prototype.getJSON = function() {
                  var S = this.editor, D = S.$textElem;
                  return c.default(D);
                }, x.prototype.text = function(S) {
                  var D = this.editor, R = D.$textElem;
                  if (S == null) {
                    var P = R.text();
                    return P = P.replace(/\u200b/gm, ""), P;
                  }
                  R.text("<p>" + S + "</p>"), D.initSelection();
                }, x.prototype.append = function(S) {
                  var D = this.editor;
                  (0, E.default)(S).call(S, "<") !== 0 && (S = "<p>" + S + "</p>"), this.html(this.html() + S), D.initSelection();
                }, x.prototype._saveRange = function() {
                  var S = this.editor, D = S.$textElem, R = v.default(document);
                  function P() {
                    S.selection.saveRange(), S.menus.changeActive();
                  }
                  D.on("keyup", P);
                  function B() {
                    P(), D.off("click", B);
                  }
                  D.on("click", B);
                  function I() {
                    P(), R.off("mouseup", I);
                  }
                  function C() {
                    R.on("mouseup", I), D.off("mouseleave", C);
                  }
                  D.on("mousedown", function() {
                    D.on("mouseleave", C);
                  }), D.on("mouseup", function(M) {
                    D.off("mouseleave", C), (0, h.default)(function() {
                      var F = S.selection, w = F.getRange();
                      w !== null && P();
                    }, 0);
                  });
                }, x.prototype._bindEventHooks = function() {
                  var S = this.editor, D = S.$textElem, R = this.eventHooks;
                  D.on("click", function(B) {
                    var I = R.clickEvents;
                    (0, u.default)(I).call(I, function(C) {
                      return C(B);
                    });
                  }), D.on("keyup", function(B) {
                    if (B.keyCode === 13) {
                      var I = R.enterUpEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("keyup", function(B) {
                    var I = R.keyupEvents;
                    (0, u.default)(I).call(I, function(C) {
                      return C(B);
                    });
                  }), D.on("keydown", function(B) {
                    var I = R.keydownEvents;
                    (0, u.default)(I).call(I, function(C) {
                      return C(B);
                    });
                  }), D.on("keyup", function(B) {
                    if (!(B.keyCode !== 8 && B.keyCode !== 46)) {
                      var I = R.deleteUpEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("keydown", function(B) {
                    if (!(B.keyCode !== 8 && B.keyCode !== 46)) {
                      var I = R.deleteDownEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("paste", function(B) {
                    if (!d.UA.isIE()) {
                      B.preventDefault();
                      var I = R.pasteEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("keydown", function(B) {
                    // 编辑器处于聚焦状态下（多编辑器实例） || 当前处于兼容模式（兼容模式撤销/恢复后不聚焦，所以直接过，但会造成多编辑器同时撤销/恢复）
                    (S.isFocus || S.isCompatibleMode) && (B.ctrlKey || B.metaKey) && B.keyCode === 90 && (B.preventDefault(), B.shiftKey ? S.history.restore() : S.history.revoke());
                  }), D.on("keyup", function(B) {
                    if (B.keyCode === 9) {
                      B.preventDefault();
                      var I = R.tabUpEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("keydown", function(B) {
                    if (B.keyCode === 9) {
                      B.preventDefault();
                      var I = R.tabDownEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on(
                    "scroll",
                    // 使用节流
                    d.throttle(function(B) {
                      var I = R.textScrollEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }, 100)
                  );
                  function P(B) {
                    B.preventDefault();
                  }
                  v.default(document).on("dragleave", P).on("drop", P).on("dragenter", P).on("dragover", P), S.beforeDestroy(function() {
                    v.default(document).off("dragleave", P).off("drop", P).off("dragenter", P).off("dragover", P);
                  }), D.on("drop", function(B) {
                    B.preventDefault();
                    var I = R.dropEvents;
                    (0, u.default)(I).call(I, function(C) {
                      return C(B);
                    });
                  }), D.on("click", function(B) {
                    var I = null, C = B.target, M = v.default(C);
                    if (M.getNodeName() === "A")
                      I = M;
                    else {
                      var F = M.parentUntil("a");
                      F != null && (I = F);
                    }
                    if (I) {
                      var w = R.linkClickEvents;
                      (0, u.default)(w).call(w, function(O) {
                        return O(I);
                      });
                    }
                  }), D.on("click", function(B) {
                    var I = null, C = B.target, M = v.default(C);
                    if (M.getNodeName() === "IMG" && !M.elems[0].getAttribute("data-emoji") && (B.stopPropagation(), I = M), !!I) {
                      var F = R.imgClickEvents;
                      (0, u.default)(F).call(F, function(w) {
                        return w(I);
                      });
                    }
                  }), D.on("click", function(B) {
                    var I = null, C = B.target, M = v.default(C);
                    if (M.getNodeName() === "PRE")
                      I = M;
                    else {
                      var F = M.parentUntil("pre");
                      F !== null && (I = F);
                    }
                    if (I) {
                      var w = R.codeClickEvents;
                      (0, u.default)(w).call(w, function(O) {
                        return O(I);
                      });
                    }
                  }), D.on("click", function(B) {
                    var I = null, C = B.target, M = v.default(C);
                    if (M.getNodeName() === "HR" && (I = M), !!I) {
                      S.selection.createRangeByElem(I), S.selection.restoreSelection();
                      var F = R.splitLineEvents;
                      (0, u.default)(F).call(F, function(w) {
                        return w(I);
                      });
                    }
                  }), S.$toolbarElem.on("click", function(B) {
                    var I = R.toolbarClickEvents;
                    (0, u.default)(I).call(I, function(C) {
                      return C(B);
                    });
                  }), S.$textContainerElem.on("mousedown", function(B) {
                    var I = B.target, C = v.default(I);
                    if (C.hasClass("w-e-img-drag-rb")) {
                      var M = R.imgDragBarMouseDownEvents;
                      (0, u.default)(M).call(M, function(F) {
                        return F();
                      });
                    }
                  }), D.on("click", function(B) {
                    var I = null, C = B.target;
                    if (I = v.default(C).parentUntilEditor("TABLE", S, C), !!I) {
                      var M = R.tableClickEvents;
                      (0, u.default)(M).call(M, function(F) {
                        return F(I, B);
                      });
                    }
                  }), D.on("keydown", function(B) {
                    if (B.keyCode === 13) {
                      var I = R.enterDownEvents;
                      (0, u.default)(I).call(I, function(C) {
                        return C(B);
                      });
                    }
                  }), D.on("click", function(B) {
                    var I = null, C = B.target, M = v.default(C);
                    if (M.getNodeName() === "VIDEO" && (B.stopPropagation(), I = M), !!I) {
                      var F = R.videoClickEvents;
                      (0, u.default)(F).call(F, function(w) {
                        return w(I);
                      });
                    }
                  });
                }, x;
              }()
            );
            i.default = A;
          },
          /* 283 */
          /***/
          function(o, i, t) {
            var r = t(284);
            o.exports = r;
          },
          /* 284 */
          /***/
          function(o, i, t) {
            var r = t(285), f = Array.prototype;
            o.exports = function(l) {
              var u = l.find;
              return l === f || l instanceof Array && u === f.find ? r : u;
            };
          },
          /* 285 */
          /***/
          function(o, i, t) {
            t(286);
            var r = t(15);
            o.exports = r("Array").find;
          },
          /* 286 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(32).find, l = t(82), u = t(22), g = "find", E = !0, h = u(g);
            g in [] && Array(1)[g](function() {
              E = !1;
            }), r({ target: "Array", proto: !0, forced: E || !h }, {
              find: function(v) {
                return f(this, v, arguments.length > 1 ? arguments[1] : void 0);
              }
            }), l(g);
          },
          /* 287 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(288)), g = l.__importStar(t(289)), E = l.__importDefault(t(290)), h = l.__importDefault(t(291)), y = l.__importDefault(t(298));
            function v(s) {
              var d = s.editor, c = s.eventHooks;
              u.default(d, c.enterUpEvents, c.enterDownEvents), g.default(d, c.deleteUpEvents, c.deleteDownEvents), g.cutToKeepP(d, c.keyupEvents), E.default(d, c.tabDownEvents), h.default(d, c.pasteEvents), y.default(d, c.imgClickEvents);
            }
            i.default = v;
          },
          /* 288 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(7), E = u.__importDefault(t(3));
            function h(y, v, s) {
              function d(p) {
                var A, x = E.default(g.EMPTY_P);
                if (x.insertBefore(p), (0, l.default)(A = p.html()).call(A, "<img") >= 0) {
                  x.remove();
                  return;
                }
                y.selection.createRangeByElem(x, !0, !0), y.selection.restoreSelection(), p.remove();
              }
              function c() {
                var p = y.$textElem, A = y.selection.getSelectionContainerElem(), x = A.parent();
                if (x.html() === "<code><br></code>") {
                  d(x);
                  return;
                }
                if (A.getNodeName() === "FONT" && A.text() === "" && A.attr("face") === "monospace") {
                  d(x);
                  return;
                }
                if (x.equal(p)) {
                  var S = A.getNodeName();
                  S === "P" && A.attr("data-we-empty-p") === null || A.text() || d(A);
                }
              }
              v.push(c);
              function m(p) {
                var A;
                y.selection.saveRange((A = getSelection()) === null || A === void 0 ? void 0 : A.getRangeAt(0));
                var x = y.selection.getSelectionContainerElem();
                x.id === y.textElemId && (p.preventDefault(), y.cmd.do("insertHTML", "<p><br></p>"));
              }
              s.push(m);
            }
            i.default = h;
          },
          /* 289 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17)), u = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.cutToKeepP = void 0;
            var g = t(2), E = t(7), h = g.__importDefault(t(3));
            function y(s, d, c) {
              function m() {
                var A = s.$textElem, x = s.$textElem.html(), S = s.$textElem.text(), D = (0, l.default)(x).call(x), R = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', E.EMPTY_P];
                if (/^\s*$/.test(S) && (!D || (0, u.default)(R).call(R, D))) {
                  A.html(E.EMPTY_P);
                  var P = A.getNode();
                  s.selection.createRangeByElems(P.childNodes[0], P.childNodes[0]);
                  var B = s.selection.getSelectionContainerElem();
                  s.selection.restoreSelection(), s.selection.moveCursor(B.getNode(), 0);
                }
              }
              d.push(m);
              function p(A) {
                var x, S = s.$textElem, D = (0, l.default)(x = S.html().toLowerCase()).call(x);
                if (D === E.EMPTY_P) {
                  A.preventDefault();
                  return;
                }
              }
              c.push(p);
            }
            function v(s, d) {
              function c(m) {
                var p;
                if (m.keyCode === 88) {
                  var A = s.$textElem, x = (0, l.default)(p = A.html().toLowerCase()).call(p);
                  if (!x || x === "<br>") {
                    var S = h.default(E.EMPTY_P);
                    A.html(" "), A.append(S), s.selection.createRangeByElem(S, !1, !0), s.selection.restoreSelection(), s.selection.moveCursor(S.getNode(), 0);
                  }
                }
              }
              d.push(c);
            }
            i.cutToKeepP = v, i.default = y;
          },
          /* 290 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function l(u, g) {
              function E() {
                if (u.cmd.queryCommandSupported("insertHTML")) {
                  var h = u.selection.getSelectionContainerElem();
                  if (h) {
                    var y = h.parent(), v = h.getNodeName(), s = y.getNodeName();
                    v == "CODE" || s === "CODE" || s === "PRE" || /hljs/.test(s) ? u.cmd.do("insertHTML", u.config.languageTab) : u.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
                  }
                }
              }
              g.push(E);
            }
            i.default = l;
          },
          /* 291 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17)), u = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(131), E = t(6), h = t(7);
            function y(m) {
              var p, A = (0, l.default)(p = m.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(p), x = document.createElement("div");
              return x.innerHTML = A, x.innerHTML.replace(/<p><\/p>/gim, "");
            }
            function v(m) {
              var p = m.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
              return p;
            }
            function s(m) {
              var p;
              if (m === "") return !1;
              var A = document.createElement("div");
              return A.innerHTML = m, ((p = A.firstChild) === null || p === void 0 ? void 0 : p.nodeName) === "P";
            }
            function d(m) {
              if (!(m != null && m.length)) return !1;
              var p = m.elems[0];
              return p.nodeName === "P" && p.innerHTML === "<br>";
            }
            function c(m, p) {
              function A(x) {
                var S = m.config, D = S.pasteFilterStyle, R = S.pasteIgnoreImg, P = S.pasteTextHandle, B = g.getPasteHtml(x, D, R), I = g.getPasteText(x);
                I = I.replace(/\n/gm, "<br>");
                var C = m.selection.getSelectionContainerElem();
                if (C) {
                  var M = C == null ? void 0 : C.getNodeName(), F = C == null ? void 0 : C.getNodeTop(m), w = "";
                  if (F.elems[0] && (w = F == null ? void 0 : F.getNodeName()), M === "CODE" || w === "PRE") {
                    P && E.isFunction(P) && (I = "" + (P(I) || "")), m.cmd.do("insertHTML", v(I));
                    return;
                  }
                  if (h.urlRegex.test(I) && D) {
                    P && E.isFunction(P) && (I = "" + (P(I) || ""));
                    var O = I.replace(h.urlRegex, function(ut) {
                      return '<a href="' + ut + '" target="_blank">' + ut + "</a>";
                    }), U = m.selection.getRange(), b = document.createElement("div"), Q = document.createDocumentFragment();
                    if (b.innerHTML = O, U == null) return;
                    for (; b.childNodes.length; )
                      Q.append(b.childNodes[0]);
                    var j = Q.querySelectorAll("a");
                    (0, u.default)(j).call(j, function(ut) {
                      ut.innerText = ut.href;
                    }), U.insertNode && (U.deleteContents(), U.insertNode(Q)), m.selection.clearWindowSelectionRange();
                    return;
                  }
                  if (B)
                    try {
                      P && E.isFunction(P) && (B = "" + (P(B) || ""));
                      var z = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(B);
                      if (z && D)
                        m.cmd.do("insertHTML", "" + y(I));
                      else {
                        var W = y(B);
                        if (s(W)) {
                          var q = m.$textElem;
                          if (m.cmd.do("insertHTML", W), q.equal(C)) {
                            m.selection.createEmptyRange();
                            return;
                          }
                          d(F) && F.remove();
                        } else
                          m.cmd.do("insertHTML", W);
                      }
                    } catch {
                      P && E.isFunction(P) && (I = "" + (P(I) || "")), m.cmd.do("insertHTML", "" + y(I));
                    }
                }
              }
              p.push(A);
            }
            i.default = c;
          },
          /* 292 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17)), u = r(t(4)), g = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var E = t(2), h = t(293), y = E.__importDefault(t(297));
            function v(p) {
              var A = /<span>.*?<\/span>/gi, x = /<span>(.*?)<\/span>/;
              return p.replace(A, function(S) {
                var D = S.match(x);
                return D == null ? "" : D[1];
              });
            }
            function s(p, A) {
              var x;
              return p = (0, l.default)(x = p.toLowerCase()).call(x), !!(h.IGNORE_TAGS.has(p) || A && p === "img");
            }
            function d(p, A) {
              var x = "";
              x = "<" + p;
              var S = [];
              (0, u.default)(A).call(A, function(R) {
                S.push(R.name + '="' + R.value + '"');
              }), S.length > 0 && (x = x + " " + S.join(" "));
              var D = h.EMPTY_TAGS.has(p);
              return x = x + (D ? "/" : "") + ">", x;
            }
            function c(p) {
              return "</" + p + ">";
            }
            function m(p, A, x) {
              A === void 0 && (A = !0), x === void 0 && (x = !1);
              var S = [], D = "";
              function R(C) {
                C = (0, l.default)(C).call(C), C && (h.EMPTY_TAGS.has(C) || (D = C));
              }
              function P() {
                D = "";
              }
              var B = new y.default();
              B.parse(p, {
                startElement: function(M, F) {
                  if (R(M), !s(M, x)) {
                    var w = h.NECESSARY_ATTRS.get(M) || [], O = [];
                    (0, u.default)(F).call(F, function(b) {
                      var Q = b.name;
                      if (Q === "style") {
                        A || O.push(b);
                        return;
                      }
                      (0, g.default)(w).call(w, Q) !== !1 && O.push(b);
                    });
                    var U = d(M, O);
                    S.push(U);
                  }
                },
                characters: function(M) {
                  M && (s(D, x) || S.push(M));
                },
                endElement: function(M) {
                  if (!s(M, x)) {
                    var F = c(M);
                    S.push(F), P();
                  }
                },
                comment: function(M) {
                  R(M);
                }
              });
              var I = S.join("");
              return I = v(I), I;
            }
            i.default = m;
          },
          /* 293 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(132)), u = r(t(121));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.TOP_LEVEL_TAGS = i.EMPTY_TAGS = i.NECESSARY_ATTRS = i.IGNORE_TAGS = void 0, i.IGNORE_TAGS = new l.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), i.NECESSARY_ATTRS = new u.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), i.EMPTY_TAGS = new l.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), i.TOP_LEVEL_TAGS = new l.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
          },
          /* 294 */
          /***/
          function(o, i, t) {
            var r = t(295);
            o.exports = r;
          },
          /* 295 */
          /***/
          function(o, i, t) {
            t(296), t(61), t(50), t(54);
            var r = t(9);
            o.exports = r.Set;
          },
          /* 296 */
          /***/
          function(o, i, t) {
            var r = t(122), f = t(124);
            o.exports = r("Set", function(l) {
              return function() {
                return l(this, arguments.length ? arguments[0] : void 0);
              };
            }, f);
          },
          /* 297 */
          /***/
          function(o, i) {
            function t() {
            }
            t.prototype = {
              handler: null,
              // regexps
              startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
              endTagRe: /^<\/([^>\s]+)[^>]*>/m,
              attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
              parse: function(r, f) {
                f && (this.contentHandler = f);
                for (var l, u, g, E = !1, h = this; r.length > 0; )
                  r.substring(0, 4) == "<!--" ? (g = r.indexOf("-->"), g != -1 ? (this.contentHandler.comment(r.substring(4, g)), r = r.substring(g + 3), E = !1) : E = !0) : r.substring(0, 2) == "</" ? this.endTagRe.test(r) ? (l = RegExp.lastMatch, u = RegExp.rightContext, l.replace(this.endTagRe, function() {
                    return h.parseEndTag.apply(h, arguments);
                  }), r = u, E = !1) : E = !0 : r.charAt(0) == "<" && (this.startTagRe.test(r) ? (l = RegExp.lastMatch, u = RegExp.rightContext, l.replace(this.startTagRe, function() {
                    return h.parseStartTag.apply(h, arguments);
                  }), r = u, E = !1) : E = !0), E && (g = r.indexOf("<"), g == -1 ? (this.contentHandler.characters(r), r = "") : (this.contentHandler.characters(r.substring(0, g)), r = r.substring(g))), E = !0;
              },
              parseStartTag: function(r, f, l) {
                var u = this.parseAttributes(f, l);
                this.contentHandler.startElement(f, u);
              },
              parseEndTag: function(r, f) {
                this.contentHandler.endElement(f);
              },
              parseAttributes: function(r, f) {
                var l = this, u = [];
                return f.replace(this.attrRe, function(g, E, h, y, v, s, d, c) {
                  u.push(l.parseAttribute(r, g, E, h, y, v, s, d, c));
                }), u;
              },
              parseAttribute: function(r, f, l) {
                var u = "";
                arguments[7] ? u = arguments[8] : arguments[5] ? u = arguments[6] : arguments[3] && (u = arguments[4]);
                var g = !u && !arguments[3];
                return { name: l, value: g ? null : u };
              }
            }, o.exports = t;
          },
          /* 298 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function l(u, g) {
              function E(h) {
                u.selection.createRangeByElem(h), u.selection.restoreSelection();
              }
              g.push(E);
            }
            i.default = l;
          },
          /* 299 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(6), E = u.__importDefault(t(3));
            function h(y) {
              var v = [], s = y.childNodes() || [];
              return (0, l.default)(s).call(s, function(d) {
                var c, m = d.nodeType;
                if (m === 3 && (c = d.textContent || "", c = g.replaceHtmlSymbol(c)), m === 1) {
                  c = {}, c = c, c.tag = d.nodeName.toLowerCase();
                  for (var p = [], A = d.attributes, x = A.length || 0, S = 0; S < x; S++) {
                    var D = A[S];
                    p.push({
                      name: D.name,
                      value: D.value
                    });
                  }
                  c.attrs = p, c.children = h(E.default(d));
                }
                c && v.push(c);
              }), v;
            }
            i.default = h;
          },
          /* 300 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(92)), l = r(t(1)), u = r(t(4));
            (0, l.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3));
            function h(y, v) {
              v === void 0 && (v = document.createElement("div"));
              var s = v;
              return (0, u.default)(y).call(y, function(d) {
                var c;
                if (typeof d == "string" && (c = document.createTextNode(d)), (0, f.default)(d) === "object") {
                  var m;
                  c = document.createElement(d.tag), (0, u.default)(m = d.attrs).call(m, function(p) {
                    E.default(c).attr(p.name, p.value);
                  }), d.children && d.children.length > 0 && h(d.children, c.getRootNode());
                }
                c && s.appendChild(c);
              }), E.default(s);
            }
            i.default = h;
          },
          /* 301 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(89)), u = r(t(70)), g = r(t(28)), E = r(t(302)), h = r(t(4)), y = r(t(94)), v = r(t(133)), s = r(t(46)), d = r(t(57));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var c = t(2), m = c.__importDefault(t(87)), p = c.__importDefault(t(314)), A = c.__importDefault(t(3)), x = (
              /** @class */
              function() {
                function S(D) {
                  this.editor = D, this.menuList = [], this.constructorList = p.default;
                }
                return S.prototype.extend = function(D, R) {
                  !R || typeof R != "function" || (this.constructorList[D] = R);
                }, S.prototype.init = function() {
                  var D, R, P = this, B = this.editor.config, I = B.excludeMenus;
                  (0, l.default)(I) === !1 && (I = []), B.menus = (0, u.default)(D = B.menus).call(D, function(Q) {
                    return (0, g.default)(I).call(I, Q) === !1;
                  });
                  var C = (0, E.default)(m.default.globalCustomMenuConstructorList);
                  C = (0, u.default)(C).call(C, function(Q) {
                    return (0, g.default)(I).call(I, Q);
                  }), (0, h.default)(C).call(C, function(Q) {
                    delete m.default.globalCustomMenuConstructorList[Q];
                  }), (0, h.default)(R = B.menus).call(R, function(Q) {
                    var j = P.constructorList[Q];
                    P._initMenuList(Q, j);
                  });
                  for (var M = 0, F = (0, y.default)(m.default.globalCustomMenuConstructorList); M < F.length; M++) {
                    var w = F[M], O = w[0], U = w[1], b = U;
                    this._initMenuList(O, b);
                  }
                  this._addToToolbar(), B.showMenuTooltips && this._bindMenuTooltips();
                }, S.prototype._initMenuList = function(D, R) {
                  var P;
                  if (!(R == null || typeof R != "function"))
                    if ((0, v.default)(P = this.menuList).call(P, function(I) {
                      return I.key === D;
                    }))
                      console.warn("菜单名称重复:" + D);
                    else {
                      var B = new R(this.editor);
                      B.key = D, this.menuList.push(B);
                    }
                }, S.prototype._bindMenuTooltips = function() {
                  var D = this.editor, R = D.$toolbarElem, P = D.config, B = P.menuTooltipPosition, I = A.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + B + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
                  I.css("visibility", "hidden"), R.append(I), I.css("z-index", D.zIndex.get("tooltip"));
                  var C = 0;
                  function M() {
                    C && clearTimeout(C);
                  }
                  function F() {
                    M(), I.css("visibility", "hidden");
                  }
                  R.on("mouseover", function(w) {
                    var O = w.target, U = A.default(O), b, Q;
                    if (U.isContain(R)) {
                      F();
                      return;
                    }
                    if (U.parentUntil(".w-e-droplist") != null)
                      F();
                    else if (U.attr("data-title"))
                      b = U.attr("data-title"), Q = U;
                    else {
                      var j = U.parentUntil(".w-e-menu");
                      j != null && (b = j.attr("data-title"), Q = j);
                    }
                    if (b && Q) {
                      M();
                      var z = Q.getOffsetData();
                      I.text(D.i18next.t("menus.title." + b));
                      var W = I.getOffsetData(), q = z.left + z.width / 2 - W.width / 2;
                      I.css("left", q + "px"), B === "up" ? I.css("top", z.top - W.height - 8 + "px") : B === "down" && I.css("top", z.top + z.height + 8 + "px"), C = (0, s.default)(function() {
                        I.css("visibility", "visible");
                      }, 200);
                    } else
                      F();
                  }).on("mouseleave", function() {
                    F();
                  });
                }, S.prototype._addToToolbar = function() {
                  var D, R = this.editor, P = R.$toolbarElem;
                  (0, h.default)(D = this.menuList).call(D, function(B) {
                    var I = B.$elem;
                    I && P.append(I);
                  });
                }, S.prototype.menuFind = function(D) {
                  for (var R = this.menuList, P = 0, B = R.length; P < B; P++)
                    if (R[P].key === D) return R[P];
                  return R[0];
                }, S.prototype.changeActive = function() {
                  var D;
                  (0, h.default)(D = this.menuList).call(D, function(R) {
                    var P;
                    (0, s.default)((0, d.default)(P = R.tryChangeActive).call(P, R), 100);
                  });
                }, S;
              }()
            );
            i.default = x;
          },
          /* 302 */
          /***/
          function(o, i, t) {
            o.exports = t(303);
          },
          /* 303 */
          /***/
          function(o, i, t) {
            var r = t(304);
            o.exports = r;
          },
          /* 304 */
          /***/
          function(o, i, t) {
            t(305);
            var r = t(9);
            o.exports = r.Object.keys;
          },
          /* 305 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(31), l = t(52), u = t(11), g = u(function() {
              l(1);
            });
            r({ target: "Object", stat: !0, forced: g }, {
              keys: function(h) {
                return l(f(h));
              }
            });
          },
          /* 306 */
          /***/
          function(o, i, t) {
            var r = t(307);
            o.exports = r;
          },
          /* 307 */
          /***/
          function(o, i, t) {
            t(308);
            var r = t(9);
            o.exports = r.Object.entries;
          },
          /* 308 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(309).entries;
            r({ target: "Object", stat: !0 }, {
              entries: function(u) {
                return f(u);
              }
            });
          },
          /* 309 */
          /***/
          function(o, i, t) {
            var r = t(14), f = t(52), l = t(30), u = t(59).f, g = function(E) {
              return function(h) {
                for (var y = l(h), v = f(y), s = v.length, d = 0, c = [], m; s > d; )
                  m = v[d++], (!r || u.call(y, m)) && c.push(E ? [m, y[m]] : y[m]);
                return c;
              };
            };
            o.exports = {
              // `Object.entries` method
              // https://tc39.github.io/ecma262/#sec-object.entries
              entries: g(!0),
              // `Object.values` method
              // https://tc39.github.io/ecma262/#sec-object.values
              values: g(!1)
            };
          },
          /* 310 */
          /***/
          function(o, i, t) {
            var r = t(311);
            o.exports = r;
          },
          /* 311 */
          /***/
          function(o, i, t) {
            var r = t(312), f = Array.prototype;
            o.exports = function(l) {
              var u = l.some;
              return l === f || l instanceof Array && u === f.some ? r : u;
            };
          },
          /* 312 */
          /***/
          function(o, i, t) {
            t(313);
            var r = t(15);
            o.exports = r("Array").some;
          },
          /* 313 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(32).some, l = t(67), u = t(22), g = l("some"), E = u("some");
            r({ target: "Array", proto: !0, forced: !g || !E }, {
              some: function(y) {
                return f(this, y, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 314 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(315)), g = l.__importDefault(t(316)), E = l.__importDefault(t(321)), h = l.__importDefault(t(326)), y = l.__importDefault(t(327)), v = l.__importDefault(t(328)), s = l.__importDefault(t(329)), d = l.__importDefault(t(331)), c = l.__importDefault(t(333)), m = l.__importDefault(t(334)), p = l.__importDefault(t(337)), A = l.__importDefault(t(338)), x = l.__importDefault(t(339)), S = l.__importDefault(t(350)), D = l.__importDefault(t(365)), R = l.__importDefault(t(369)), P = l.__importDefault(t(137)), B = l.__importDefault(t(378)), I = l.__importDefault(t(380)), C = l.__importDefault(t(381)), M = l.__importDefault(t(382)), F = l.__importDefault(t(401)), w = l.__importDefault(t(406)), O = l.__importDefault(t(409));
            i.default = {
              bold: u.default,
              head: g.default,
              italic: h.default,
              link: E.default,
              underline: y.default,
              strikeThrough: v.default,
              fontName: s.default,
              fontSize: d.default,
              justify: c.default,
              quote: m.default,
              backColor: p.default,
              foreColor: A.default,
              video: x.default,
              image: S.default,
              indent: D.default,
              emoticon: R.default,
              list: P.default,
              lineHeight: B.default,
              undo: I.default,
              redo: C.default,
              table: M.default,
              code: F.default,
              splitLine: w.default,
              todo: O.default
            };
          },
          /* 315 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(23)), g = l.__importDefault(t(3)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = g.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor, s = v.selection.isSelectionEmpty();
                  s && v.selection.createEmptyRange(), v.cmd.do("bold"), s && (v.selection.collapseRange(), v.selection.restoreSelection());
                }, y.prototype.tryChangeActive = function() {
                  var v = this.editor;
                  v.cmd.queryCommandState("bold") ? this.active() : this.unActive();
                }, y;
              }(u.default)
            );
            i.default = E;
          },
          /* 316 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(27)), u = r(t(29)), g = r(t(4)), E = r(t(317)), h = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var y = t(2), v = y.__importDefault(t(24)), s = y.__importDefault(t(3)), d = t(6), c = t(7), m = (
              /** @class */
              function(p) {
                y.__extends(A, p);
                function A(x) {
                  var S = this, D = s.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'), R = {
                    width: 100,
                    title: "设置标题",
                    type: "list",
                    list: [{
                      $elem: s.default("<h1>H1</h1>"),
                      value: "<h1>"
                    }, {
                      $elem: s.default("<h2>H2</h2>"),
                      value: "<h2>"
                    }, {
                      $elem: s.default("<h3>H3</h3>"),
                      value: "<h3>"
                    }, {
                      $elem: s.default("<h4>H4</h4>"),
                      value: "<h4>"
                    }, {
                      $elem: s.default("<h5>H5</h5>"),
                      value: "<h5>"
                    }, {
                      $elem: s.default("<p>" + x.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                      value: "<p>"
                    }],
                    clickHandler: function(I) {
                      S.command(I);
                    }
                  };
                  S = p.call(this, D, x, R) || this;
                  var P = x.config.onCatalogChange;
                  return P && (S.oldCatalogs = [], S.addListenerCatalog(), S.getCatalogs()), S;
                }
                return A.prototype.command = function(x) {
                  var S = this.editor, D = S.selection.getSelectionContainerElem();
                  if (D && S.$textElem.equal(D))
                    this.setMultilineHead(x);
                  else {
                    var R;
                    if ((0, l.default)(R = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(R, s.default(D).getNodeName()) > -1)
                      return;
                    S.cmd.do("formatBlock", x);
                  }
                  x !== "<p>" && this.addUidForSelectionElem();
                }, A.prototype.addUidForSelectionElem = function() {
                  var x = this.editor, S = x.selection.getSelectionContainerElem(), D = d.getRandomCode();
                  s.default(S).attr("id", D);
                }, A.prototype.addListenerCatalog = function() {
                  var x = this, S = this.editor;
                  S.txt.eventHooks.changeEvents.push(function() {
                    x.getCatalogs();
                  });
                }, A.prototype.getCatalogs = function() {
                  var x = this.editor, S = this.editor.$textElem, D = x.config.onCatalogChange, R = (0, u.default)(S).call(S, "h1,h2,h3,h4,h5"), P = [];
                  (0, g.default)(R).call(R, function(B, I) {
                    var C = s.default(B), M = C.attr("id"), F = C.getNodeName(), w = C.text();
                    M || (M = d.getRandomCode(), C.attr("id", M)), w && P.push({
                      tag: F,
                      id: M,
                      text: w
                    });
                  }), (0, E.default)(this.oldCatalogs) !== (0, E.default)(P) && (this.oldCatalogs = P, D && D(P));
                }, A.prototype.setMultilineHead = function(x) {
                  var S = this, D, R, P = this.editor, B = P.selection, I = (D = B.getSelectionContainerElem()) === null || D === void 0 ? void 0 : D.elems[0], C = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], M = s.default(B.getSelectionStartElem()), F = s.default(B.getSelectionEndElem());
                  F.elems[0].outerHTML === s.default(c.EMPTY_P).elems[0].outerHTML && !F.elems[0].nextSibling && (F = F.prev());
                  var w = [];
                  w.push(M.getNodeTop(P));
                  var O = [], U = (R = B.getRange()) === null || R === void 0 ? void 0 : R.commonAncestorContainer.childNodes;
                  U == null || (0, g.default)(U).call(U, function(j, z) {
                    j === w[0].getNode() && O.push(z), j === F.getNodeTop(P).getNode() && O.push(z);
                  });
                  for (var b = 0; w[b].getNode() !== F.getNodeTop(P).getNode(); ) {
                    if (!w[b].elems[0]) return;
                    var Q = s.default(w[b].next().getNode());
                    w.push(Q), b++;
                  }
                  w == null || (0, g.default)(w).call(w, function(j, z) {
                    if (!S.hasTag(j, C)) {
                      var W = s.default(x), q = j.parent().getNode();
                      W.html("" + j.html()), q.insertBefore(W.getNode(), j.getNode()), j.remove();
                    }
                  }), B.createRangeByElems(I.children[O[0]], I.children[O[1]]);
                }, A.prototype.hasTag = function(x, S) {
                  var D = this, R;
                  if (!x) return !1;
                  if ((0, h.default)(S).call(S, x == null ? void 0 : x.getNodeName())) return !0;
                  var P = !1;
                  return (R = x.children()) === null || R === void 0 || (0, g.default)(R).call(R, function(B) {
                    P = D.hasTag(s.default(B), S);
                  }), P;
                }, A.prototype.tryChangeActive = function() {
                  var x = this.editor, S = /^h/i, D = x.cmd.queryCommandValue("formatBlock");
                  S.test(D) ? this.active() : this.unActive();
                }, A;
              }(v.default)
            );
            i.default = m;
          },
          /* 317 */
          /***/
          function(o, i, t) {
            o.exports = t(318);
          },
          /* 318 */
          /***/
          function(o, i, t) {
            var r = t(319);
            o.exports = r;
          },
          /* 319 */
          /***/
          function(o, i, t) {
            t(320);
            var r = t(9);
            r.JSON || (r.JSON = { stringify: JSON.stringify }), o.exports = function(l, u, g) {
              return r.JSON.stringify.apply(null, arguments);
            };
          },
          /* 320 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(36), l = t(11), u = f("JSON", "stringify"), g = /[\uD800-\uDFFF]/g, E = /^[\uD800-\uDBFF]$/, h = /^[\uDC00-\uDFFF]$/, y = function(s, d, c) {
              var m = c.charAt(d - 1), p = c.charAt(d + 1);
              return E.test(s) && !h.test(p) || h.test(s) && !E.test(m) ? "\\u" + s.charCodeAt(0).toString(16) : s;
            }, v = l(function() {
              return u("\uDF06\uD834") !== '"\\udf06\\ud834"' || u("\uDEAD") !== '"\\udead"';
            });
            u && r({ target: "JSON", stat: !0, forced: v }, {
              // eslint-disable-next-line no-unused-vars
              stringify: function(d, c, m) {
                var p = u.apply(null, arguments);
                return typeof p == "string" ? p.replace(g, y) : p;
              }
            });
          },
          /* 321 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(38)), E = u.__importDefault(t(3)), h = u.__importDefault(t(322)), y = u.__importStar(t(96)), v = u.__importDefault(t(33)), s = u.__importDefault(t(324)), d = t(7), c = (
              /** @class */
              function(m) {
                u.__extends(p, m);
                function p(A) {
                  var x = this, S = E.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>');
                  return x = m.call(this, S, A) || this, s.default(A), x;
                }
                return p.prototype.clickHandler = function() {
                  var A = this.editor, x, S = A.selection.getSelectionContainerElem(), D = A.$textElem, R = D.html(), P = (0, l.default)(R).call(R);
                  if (P === d.EMPTY_P) {
                    var B = D.children();
                    A.selection.createRangeByElem(B, !0, !0), S = A.selection.getSelectionContainerElem();
                  }
                  if (!(S && A.$textElem.equal(S)))
                    if (this.isActive) {
                      var I = "", C = "";
                      if (x = A.selection.getSelectionContainerElem(), !x)
                        return;
                      if (x.getNodeName() !== "A") {
                        var M = y.getParentNodeA(x);
                        x = E.default(M);
                      }
                      I = x.elems[0].innerText, C = x.attr("href"), this.createPanel(I, C);
                    } else
                      A.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(A.selection.getSelectionText(), "");
                }, p.prototype.createPanel = function(A, x) {
                  var S = h.default(this.editor, A, x), D = new v.default(this, S);
                  D.create();
                }, p.prototype.tryChangeActive = function() {
                  var A = this.editor;
                  y.default(A) ? this.active() : this.unActive();
                }, p;
              }(g.default)
            );
            i.default = c;
          },
          /* 322 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(28)), u = r(t(17)), g = r(t(29));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var E = t(2), h = t(6), y = E.__importDefault(t(3)), v = E.__importStar(t(96)), s = t(323);
            function d(c, m, p) {
              var A = h.getRandom("input-link"), x = h.getRandom("input-text"), S = h.getRandom("btn-ok"), D = h.getRandom("btn-del"), R = v.default(c) ? "inline-block" : "none", P;
              function B() {
                if (v.default(c)) {
                  var w = c.selection.getSelectionContainerElem();
                  w && (c.selection.createRangeByElem(w), c.selection.restoreSelection(), P = w);
                }
              }
              function I(w, O) {
                var U = w.replace(/</g, "&lt;").replace(/>/g, "&gt;"), b = y.default('<a target="_blank">' + U + "</a>"), Q = b.elems[0];
                Q.innerText = w, Q.href = O, v.default(c) && B(), c.cmd.do("insertElem", b);
              }
              function C() {
                if (v.default(c))
                  if (B(), P.getNodeName() === "A") {
                    var w, O = P.elems[0], U = O.parentElement;
                    U && (0, l.default)(w = v.EXTRA_TAG).call(w, U.nodeName) ? U.innerHTML = O.innerHTML : c.cmd.do("insertHTML", "<span>" + O.innerHTML + "</span>");
                  } else {
                    var b = v.getParentNodeA(P), Q = b.innerHTML;
                    c.cmd.do("insertHTML", "<span>" + Q + "</span>");
                  }
              }
              function M(w, O) {
                var U = c.config.linkCheck(w, O);
                if (U !== void 0) {
                  if (U === !0)
                    return !0;
                  c.config.customAlert(U, "warning");
                }
                return !1;
              }
              var F = {
                width: 300,
                height: 0,
                // 拼接字符串的：xss 攻击：
                //    如值为："><img src=1 onerror=alert(/xss/)>， 插入后：value=""><img src=1 onerror=alert(/xss/)>", 插入一个img元素
                // panel 中可包含多个 tab
                tabs: [{
                  // tab 的标题
                  title: c.i18next.t("menus.panelMenus.link.链接"),
                  // 模板
                  tpl: `<div>
                        <input
                            id="` + x + `"
                            type="text"
                            class="block"
                            placeholder="` + c.i18next.t("menus.panelMenus.link.链接文字") + `"/>
                        </td>
                        <input
                            id="` + A + `"
                            type="text"
                            class="block"
                            placeholder="` + c.i18next.t("如") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + S + `" class="right">
                                ` + c.i18next.t("插入") + `
                            </button>
                            <button type="button" id="` + D + '" class="gray right" style="display:' + R + `">
                                ` + c.i18next.t("menus.panelMenus.link.取消链接") + `
                            </button>
                        </div>
                    </div>`,
                  // 事件绑定
                  events: [
                    // 插入链接
                    {
                      selector: "#" + S,
                      type: "click",
                      fn: function() {
                        var O, U, b, Q, j, z = c.selection.getSelectionContainerElem(), W = z == null ? void 0 : z.elems[0];
                        c.selection.restoreSelection();
                        var q = c.selection.getSelectionRangeTopNodes()[0].getNode(), ut = window.getSelection(), _ = y.default("#" + A), ft = y.default("#" + x), at = (0, u.default)(O = _.val()).call(O), tt = (0, u.default)(U = ft.val()).call(U), et = "";
                        ut && !(ut != null && ut.isCollapsed) && (et = (Q = s.insertHtml(ut, q)) === null || Q === void 0 ? void 0 : (0, u.default)(Q).call(Q));
                        var lt = et == null ? void 0 : et.replace(/<.*?>/g, ""), mt = (j = lt == null ? void 0 : lt.length) !== null && j !== void 0 ? j : 0;
                        if (mt <= tt.length) {
                          var Dt = tt.substring(0, mt), Ht = tt.substring(mt);
                          lt === Dt && (tt = lt + Ht);
                        }
                        if (at && (tt || (tt = at), !!M(tt, at))) {
                          if ((W == null ? void 0 : W.nodeName) === "A")
                            return W.setAttribute("href", at), W.innerText = tt, !0;
                          if ((W == null ? void 0 : W.nodeName) !== "A" && (0, l.default)(b = v.EXTRA_TAG).call(b, W.nodeName)) {
                            var fe = v.getParentNodeA(z);
                            if (fe)
                              return fe.setAttribute("href", at), W.innerText = tt, !0;
                          }
                          return I(tt, at), !0;
                        }
                      },
                      bindEnter: !0
                    },
                    // 取消链接
                    {
                      selector: "#" + D,
                      type: "click",
                      fn: function() {
                        return C(), !0;
                      }
                    }
                  ]
                }],
                /**
                 * 设置input的值，分别为文案和链接地址设置值
                 *
                 * 利用dom 设置链接文案的值，防止回填拼接引号问题, 出现xss攻击
                 *
                 * @param $container 对应上面生成的dom容器
                 * @param type text | link
                 */
                setLinkValue: function(O, U) {
                  var b = "", Q = "", j;
                  U === "text" && (b = "#" + x, Q = m), U === "link" && (b = "#" + A, Q = p), j = (0, g.default)(O).call(O, b).elems[0], j.value = Q;
                }
              };
              return F;
            }
            i.default = d;
          },
          /* 323 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.insertHtml = i.createPartHtml = i.makeHtmlString = i.getTopNode = void 0;
            function u(s, d) {
              var c = s, m = s;
              do {
                if (c.textContent === d) break;
                m = c, c.parentNode && (c = c == null ? void 0 : c.parentNode);
              } while ((c == null ? void 0 : c.nodeName) !== "P");
              return m;
            }
            i.getTopNode = u;
            function g(s, d) {
              var c = s.nodeName, m = "";
              if (s.nodeType === 3 || /^(h|H)[1-6]$/.test(c))
                return d;
              if (s.nodeType === 1) {
                var p = s.getAttribute("style"), A = s.getAttribute("face"), x = s.getAttribute("color");
                p && (m = m + (' style="' + p + '"')), A && (m = m + (' face="' + A + '"')), x && (m = m + (' color="' + x + '"'));
              }
              return c = c.toLowerCase(), "<" + c + m + ">" + d + "</" + c + ">";
            }
            i.makeHtmlString = g;
            function E(s, d, c, m) {
              var p, A = (p = d.textContent) === null || p === void 0 ? void 0 : p.substring(c, m), x = d, S = "";
              do
                S = g(x, A ?? ""), A = S, x = x == null ? void 0 : x.parentElement;
              while (x && x.textContent !== s);
              return S;
            }
            i.createPartHtml = E;
            function h(s, d) {
              var c, m, p, A, x, S = s.anchorNode, D = s.focusNode, R = s.anchorOffset, P = s.focusOffset, B = (c = d.textContent) !== null && c !== void 0 ? c : "", I = y(d), C = "", M = "", F = "", w = "", O = S, U = D, b = S;
              if (S != null && S.isEqualNode(D ?? null)) {
                var Q = E(B, S, R, P);
                return Q = v(I, Q), Q;
              }
              for (S && (M = E(B, S, R ?? 0)), D && (w = E(B, D, 0, P)), S && (O = u(S, B)), D && (U = u(D, B)), b = (m = O == null ? void 0 : O.nextSibling) !== null && m !== void 0 ? m : S; !(b != null && b.isEqualNode(U ?? null)); ) {
                var j = b == null ? void 0 : b.nodeName;
                if (j === "#text")
                  F = F + (b == null ? void 0 : b.textContent);
                else {
                  var z = (A = (p = b == null ? void 0 : b.firstChild) === null || p === void 0 ? void 0 : p.parentElement) === null || A === void 0 ? void 0 : A.innerHTML;
                  b && (F = F + g(b, z ?? ""));
                }
                var W = (x = b == null ? void 0 : b.nextSibling) !== null && x !== void 0 ? x : b;
                if (W === b) break;
                b = W;
              }
              return C = "" + M + F + w, C = v(I, C), C;
            }
            i.insertHtml = h;
            function y(s) {
              for (var d, c = (d = s.textContent) !== null && d !== void 0 ? d : "", m = []; (s == null ? void 0 : s.textContent) === c; )
                s.nodeName !== "P" && s.nodeName !== "TABLE" && m.push(s), s = s.childNodes[0];
              return m;
            }
            function v(s, d) {
              return (0, l.default)(s).call(s, function(c) {
                d = g(c, d);
              }), d;
            }
          },
          /* 324 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(325));
            function g(E) {
              u.default(E);
            }
            i.default = g;
          },
          /* 325 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = u.__importDefault(t(39)), h = t(96);
            function y(s) {
              var d;
              function c(p) {
                var A = [{
                  $elem: g.default("<span>" + s.i18next.t("menus.panelMenus.link.查看链接") + "</span>"),
                  onClick: function(S, D) {
                    var R = D.attr("href");
                    return window.open(R, "_target"), !0;
                  }
                }, {
                  $elem: g.default("<span>" + s.i18next.t("menus.panelMenus.link.取消链接") + "</span>"),
                  onClick: function(S, D) {
                    var R, P;
                    S.selection.createRangeByElem(D), S.selection.restoreSelection();
                    var B = D.childNodes();
                    if ((B == null ? void 0 : B.getNodeName()) === "IMG") {
                      var I = (P = (R = S.selection.getSelectionContainerElem()) === null || R === void 0 ? void 0 : R.children()) === null || P === void 0 ? void 0 : P.elems[0].children[0];
                      S.cmd.do("insertHTML", `<img 
                                src=` + (I == null ? void 0 : I.getAttribute("src")) + ` 
                                style=` + (I == null ? void 0 : I.getAttribute("style")) + ">");
                    } else {
                      var C, M = D.elems[0], F = M.innerHTML, w = M.parentElement;
                      w && (0, l.default)(C = h.EXTRA_TAG).call(C, w.nodeName) ? w.innerHTML = F : S.cmd.do("insertHTML", "<span>" + F + "</span>");
                    }
                    return !0;
                  }
                }];
                d = new E.default(s, p, A), d.create();
              }
              function m() {
                d && (d.remove(), d = null);
              }
              return {
                showLinkTooltip: c,
                hideLinkTooltip: m
              };
            }
            function v(s) {
              var d = y(s), c = d.showLinkTooltip, m = d.hideLinkTooltip;
              s.txt.eventHooks.linkClickEvents.push(c), s.txt.eventHooks.clickEvents.push(m), s.txt.eventHooks.keyupEvents.push(m), s.txt.eventHooks.toolbarClickEvents.push(m), s.txt.eventHooks.menuClickEvents.push(m), s.txt.eventHooks.textScrollEvents.push(m);
            }
            i.default = v;
          },
          /* 326 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(23)), g = l.__importDefault(t(3)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = g.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor, s = v.selection.isSelectionEmpty();
                  s && v.selection.createEmptyRange(), v.cmd.do("italic"), s && (v.selection.collapseRange(), v.selection.restoreSelection());
                }, y.prototype.tryChangeActive = function() {
                  var v = this.editor;
                  v.cmd.queryCommandState("italic") ? this.active() : this.unActive();
                }, y;
              }(u.default)
            );
            i.default = E;
          },
          /* 327 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(23)), g = l.__importDefault(t(3)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = g.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor, s = v.selection.isSelectionEmpty();
                  s && v.selection.createEmptyRange(), v.cmd.do("underline"), s && (v.selection.collapseRange(), v.selection.restoreSelection());
                }, y.prototype.tryChangeActive = function() {
                  var v = this.editor;
                  v.cmd.queryCommandState("underline") ? this.active() : this.unActive();
                }, y;
              }(u.default)
            );
            i.default = E;
          },
          /* 328 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(23)), g = l.__importDefault(t(3)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = g.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor, s = v.selection.isSelectionEmpty();
                  s && v.selection.createEmptyRange(), v.cmd.do("strikeThrough"), s && (v.selection.collapseRange(), v.selection.restoreSelection());
                }, y.prototype.tryChangeActive = function() {
                  var v = this.editor;
                  v.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
                }, y;
              }(u.default)
            );
            i.default = E;
          },
          /* 329 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(24)), g = l.__importDefault(t(3)), E = l.__importDefault(t(330)), h = (
              /** @class */
              function(y) {
                l.__extends(v, y);
                function v(s) {
                  var d = this, c = g.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`), m = new E.default(s.config.fontNames), p = {
                    width: 100,
                    title: "设置字体",
                    type: "list",
                    list: m.getItemList(),
                    clickHandler: function(x) {
                      d.command(x);
                    }
                  };
                  return d = y.call(this, c, s, p) || this, d;
                }
                return v.prototype.command = function(s) {
                  var d, c = this.editor, m = c.selection.isSelectionEmpty(), p = (d = c.selection.getSelectionContainerElem()) === null || d === void 0 ? void 0 : d.elems[0];
                  if (p != null) {
                    var A = (p == null ? void 0 : p.nodeName.toLowerCase()) !== "p", x = (p == null ? void 0 : p.getAttribute("face")) === s;
                    if (m) {
                      if (A && !x) {
                        var S = c.selection.getSelectionRangeTopNodes();
                        c.selection.createRangeByElem(S[0]), c.selection.moveCursor(S[0].elems[0]);
                      }
                      c.selection.setRangeToElem(p), c.selection.createEmptyRange();
                    }
                    c.cmd.do("fontName", s), m && (c.selection.collapseRange(), c.selection.restoreSelection());
                  }
                }, v.prototype.tryChangeActive = function() {
                }, v;
              }(u.default)
            );
            i.default = h;
          },
          /* 330 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = (
              /** @class */
              function() {
                function h(y) {
                  var v = this;
                  this.itemList = [], (0, l.default)(y).call(y, function(s) {
                    var d = typeof s == "string" ? s : s.value, c = typeof s == "string" ? s : s.name;
                    v.itemList.push({
                      $elem: g.default(`<p style="font-family:'` + d + `'">` + c + "</p>"),
                      value: c
                    });
                  });
                }
                return h.prototype.getItemList = function() {
                  return this.itemList;
                }, h;
              }()
            );
            i.default = E;
          },
          /* 331 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(24)), g = l.__importDefault(t(3)), E = l.__importDefault(t(332)), h = (
              /** @class */
              function(y) {
                l.__extends(v, y);
                function v(s) {
                  var d = this, c = g.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), m = new E.default(s.config.fontSizes), p = {
                    width: 160,
                    title: "设置字号",
                    type: "list",
                    list: m.getItemList(),
                    clickHandler: function(x) {
                      d.command(x);
                    }
                  };
                  return d = y.call(this, c, s, p) || this, d;
                }
                return v.prototype.command = function(s) {
                  var d, c = this.editor, m = c.selection.isSelectionEmpty(), p = (d = c.selection.getSelectionContainerElem()) === null || d === void 0 ? void 0 : d.elems[0];
                  p != null && (c.cmd.do("fontSize", s), m && (c.selection.collapseRange(), c.selection.restoreSelection()));
                }, v.prototype.tryChangeActive = function() {
                }, v;
              }(u.default)
            );
            i.default = h;
          },
          /* 332 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = (
              /** @class */
              function() {
                function E(h) {
                  this.itemList = [];
                  for (var y in h) {
                    var v = h[y];
                    this.itemList.push({
                      $elem: u.default('<p style="font-size:' + y + '">' + v.name + "</p>"),
                      value: v.value
                    });
                  }
                }
                return E.prototype.getItemList = function() {
                  return this.itemList;
                }, E;
              }()
            );
            i.default = g;
          },
          /* 333 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(24)), h = g.__importDefault(t(3)), y = ["LI"], v = ["BLOCKQUOTE"], s = (
              /** @class */
              function(d) {
                g.__extends(c, d);
                function c(m) {
                  var p = this, A = h.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'), x = {
                    width: 100,
                    title: "对齐方式",
                    type: "list",
                    list: [{
                      $elem: h.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.靠左") + `
                        </p>`),
                      value: "left"
                    }, {
                      $elem: h.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.居中") + `
                        </p>`),
                      value: "center"
                    }, {
                      $elem: h.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.靠右") + `
                        </p>`),
                      value: "right"
                    }, {
                      $elem: h.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + m.i18next.t("menus.dropListMenu.justify.两端") + `
                        </p>`),
                      value: "justify"
                    }],
                    clickHandler: function(D) {
                      p.command(D);
                    }
                  };
                  return p = d.call(this, A, m, x) || this, p;
                }
                return c.prototype.command = function(m) {
                  var p = this.editor, A = p.selection, x = A.getSelectionContainerElem();
                  A.saveRange();
                  var S = p.selection.getSelectionRangeTopNodes();
                  if (x != null && x.length)
                    if (this.isSpecialNode(x, S[0]) || this.isSpecialTopNode(S[0])) {
                      var D = this.getSpecialNodeUntilTop(x, S[0]);
                      if (D == null) return;
                      h.default(D).css("text-align", m);
                    } else
                      (0, l.default)(S).call(S, function(R) {
                        R.css("text-align", m);
                      });
                  A.restoreSelection();
                }, c.prototype.getSpecialNodeUntilTop = function(m, p) {
                  for (var A = m.elems[0], x = p.elems[0]; A != null; ) {
                    if ((0, u.default)(y).call(y, A == null ? void 0 : A.nodeName) !== -1 || A.parentNode === x)
                      return A;
                    A = A.parentNode;
                  }
                  return A;
                }, c.prototype.isSpecialNode = function(m, p) {
                  var A = this.getSpecialNodeUntilTop(m, p);
                  return A == null ? !1 : (0, u.default)(y).call(y, A.nodeName) !== -1;
                }, c.prototype.isSpecialTopNode = function(m) {
                  var p;
                  return m == null ? !1 : (0, u.default)(v).call(v, (p = m.elems[0]) === null || p === void 0 ? void 0 : p.nodeName) !== -1;
                }, c.prototype.tryChangeActive = function() {
                }, c;
              }(E.default)
            );
            i.default = s;
          },
          /* 334 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = u.__importDefault(t(23)), h = u.__importDefault(t(335)), y = u.__importDefault(t(336)), v = t(7), s = (
              /** @class */
              function(d) {
                u.__extends(c, d);
                function c(m) {
                  var p = this, A = g.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
                  return p = d.call(this, A, m) || this, h.default(m), p;
                }
                return c.prototype.clickHandler = function() {
                  var m, p, A = this.editor, x = A.selection.isSelectionEmpty(), S = A.selection.getSelectionRangeTopNodes(), D = S[S.length - 1], R = this.getTopNodeName();
                  if (R === "BLOCKQUOTE") {
                    var P = g.default(D.childNodes()), B = P.length, I = D;
                    (0, l.default)(P).call(P, function(w) {
                      var O = g.default(w);
                      O.insertAfter(I), I = O;
                    }), D.remove(), A.selection.moveCursor(P.elems[B - 1]), this.tryChangeActive();
                  } else {
                    var C = y.default(S);
                    if (A.$textElem.equal(D)) {
                      var M = (m = A.selection.getSelectionContainerElem()) === null || m === void 0 ? void 0 : m.elems[0];
                      A.selection.createRangeByElems(M.children[0], M.children[0]), S = A.selection.getSelectionRangeTopNodes(), C = y.default(S), D.append(C);
                    } else
                      C.insertAfter(D);
                    this.delSelectNode(S);
                    var F = (p = C.childNodes()) === null || p === void 0 ? void 0 : p.last().getNode();
                    if (F == null) return;
                    F.textContent ? A.selection.moveCursor(F) : A.selection.moveCursor(F, 0), this.tryChangeActive(), g.default(v.EMPTY_P).insertAfter(C);
                    return;
                  }
                  x && (A.selection.collapseRange(), A.selection.restoreSelection());
                }, c.prototype.tryChangeActive = function() {
                  var m, p = this.editor, A = (m = p.selection.getSelectionRangeTopNodes()[0]) === null || m === void 0 ? void 0 : m.getNodeName();
                  A === "BLOCKQUOTE" ? this.active() : this.unActive();
                }, c.prototype.getTopNodeName = function() {
                  var m = this.editor, p = m.selection.getSelectionRangeTopNodes()[0], A = p == null ? void 0 : p.getNodeName();
                  return A;
                }, c.prototype.delSelectNode = function(m) {
                  (0, l.default)(m).call(m, function(p) {
                    p.remove();
                  });
                }, c;
              }(E.default)
            );
            i.default = s;
          },
          /* 335 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = t(7), g = l.__importDefault(t(3));
            function E(h) {
              function y(v) {
                var s, d = h.selection.getSelectionContainerElem(), c = h.selection.getSelectionRangeTopNodes()[0];
                if ((c == null ? void 0 : c.getNodeName()) === "BLOCKQUOTE") {
                  if (d.getNodeName() === "BLOCKQUOTE") {
                    var m = (s = d.childNodes()) === null || s === void 0 ? void 0 : s.getNode();
                    h.selection.moveCursor(m);
                  }
                  if (d.text() === "") {
                    v.preventDefault(), d.remove();
                    var p = g.default(u.EMPTY_P);
                    p.insertAfter(c), h.selection.moveCursor(p.getNode(), 0);
                  }
                  c.text() === "" && c.remove();
                }
              }
              h.txt.eventHooks.enterDownEvents.push(y);
            }
            i.default = E;
          },
          /* 336 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3));
            function E(h) {
              var y = g.default("<blockquote></blockquote>");
              return (0, l.default)(h).call(h, function(v) {
                y.append(v.clone(!0));
              }), y;
            }
            i.default = E;
          },
          /* 337 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(24)), E = u.__importDefault(t(3)), h = t(6), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  var c, m = this, p = E.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), A = {
                    width: 120,
                    title: "背景颜色",
                    // droplist 内容以 block 形式展示
                    type: "inline-block",
                    list: (0, l.default)(c = d.config.colors).call(c, function(x) {
                      return {
                        $elem: E.default('<i style="color:' + x + ';" class="w-e-icon-paint-brush"></i>'),
                        value: x
                      };
                    }),
                    clickHandler: function(S) {
                      m.command(S);
                    }
                  };
                  return m = v.call(this, p, d, A) || this, m;
                }
                return s.prototype.command = function(d) {
                  var c, m = this.editor, p = m.selection.isSelectionEmpty(), A = (c = m.selection.getSelectionContainerElem()) === null || c === void 0 ? void 0 : c.elems[0];
                  if (A != null) {
                    var x = (A == null ? void 0 : A.nodeName.toLowerCase()) !== "p", S = A == null ? void 0 : A.style.backgroundColor, D = h.hexToRgb(d) === S;
                    if (p) {
                      if (x && !D) {
                        var R = m.selection.getSelectionRangeTopNodes();
                        m.selection.createRangeByElem(R[0]), m.selection.moveCursor(R[0].elems[0]);
                      }
                      m.selection.createEmptyRange();
                    }
                    m.cmd.do("backColor", d), p && (m.selection.collapseRange(), m.selection.restoreSelection());
                  }
                }, s.prototype.tryChangeActive = function() {
                }, s;
              }(g.default)
            );
            i.default = y;
          },
          /* 338 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(24)), E = u.__importDefault(t(3)), h = (
              /** @class */
              function(y) {
                u.__extends(v, y);
                function v(s) {
                  var d, c = this, m = E.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`), p = {
                    width: 120,
                    title: "文字颜色",
                    // droplist 内容以 block 形式展示
                    type: "inline-block",
                    list: (0, l.default)(d = s.config.colors).call(d, function(A) {
                      return {
                        $elem: E.default('<i style="color:' + A + ';" class="w-e-icon-pencil2"></i>'),
                        value: A
                      };
                    }),
                    clickHandler: function(x) {
                      c.command(x);
                    }
                  };
                  return c = y.call(this, m, s, p) || this, c;
                }
                return v.prototype.command = function(s) {
                  var d, c = this.editor, m = c.selection.isSelectionEmpty(), p = (d = c.selection.getSelectionContainerElem()) === null || d === void 0 ? void 0 : d.elems[0];
                  if (p != null) {
                    var A = c.selection.getSelectionText();
                    if (p.nodeName === "A" && p.textContent === A) {
                      var x = E.default("<span>&#8203;</span>").getNode();
                      p.appendChild(x);
                    }
                    c.cmd.do("foreColor", s), m && (c.selection.collapseRange(), c.selection.restoreSelection());
                  }
                }, v.prototype.tryChangeActive = function() {
                }, v;
              }(g.default)
            );
            i.default = h;
          },
          /* 339 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(33)), E = l.__importDefault(t(38)), h = l.__importDefault(t(340)), y = l.__importDefault(t(346)), v = (
              /** @class */
              function(s) {
                l.__extends(d, s);
                function d(c) {
                  var m = this, p = u.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
                  return m = s.call(this, p, c) || this, y.default(c), m;
                }
                return d.prototype.clickHandler = function() {
                  this.createPanel("");
                }, d.prototype.createPanel = function(c) {
                  var m = h.default(this.editor, c), p = new g.default(this, m);
                  p.create();
                }, d.prototype.tryChangeActive = function() {
                }, d;
              }(E.default)
            );
            i.default = v;
          },
          /* 340 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(6), E = u.__importDefault(t(3)), h = u.__importDefault(t(341)), y = t(7);
            function v(s, d) {
              var c = s.config, m = new h.default(s), p = g.getRandom("input-iframe"), A = g.getRandom("btn-ok"), x = g.getRandom("input-upload"), S = g.getRandom("btn-local-ok");
              function D(I) {
                s.cmd.do("insertHTML", I + y.EMPTY_P), s.config.onlineVideoCallback(I);
              }
              function R(I) {
                var C = s.config.onlineVideoCheck(I);
                return C === !0 ? !0 : (typeof C == "string" && s.config.customAlert(C, "error"), !1);
              }
              var P = [{
                // tab 的标题
                title: s.i18next.t("menus.panelMenus.video.上传视频"),
                tpl: `<div class="w-e-up-video-container">
                    <div id="` + S + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + x + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
                events: [
                  // 触发选择视频
                  {
                    selector: "#" + S,
                    type: "click",
                    fn: function() {
                      var C = E.default("#" + x), M = C.elems[0];
                      if (M)
                        M.click();
                      else
                        return !0;
                    }
                  },
                  // 选择视频完毕
                  {
                    selector: "#" + x,
                    type: "change",
                    fn: function() {
                      var C = E.default("#" + x), M = C.elems[0];
                      if (!M)
                        return !0;
                      var F = M.files;
                      return F.length && m.uploadVideo(F), !0;
                    }
                  }
                ]
              }, {
                // tab 的标题
                title: s.i18next.t("menus.panelMenus.video.插入视频"),
                // 模板
                tpl: `<div>
                    <input 
                        id="` + p + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + s.i18next.t("如") + `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + A + `" class="right">
                            ` + s.i18next.t("插入") + `
                        </button>
                    </div>
                </div>`,
                // 事件绑定
                events: [
                  // 插入视频
                  {
                    selector: "#" + A,
                    type: "click",
                    fn: function() {
                      var C, M = E.default("#" + p), F = (0, l.default)(C = M.val()).call(C);
                      if (F && R(F))
                        return D(F), !0;
                    },
                    bindEnter: !0
                  }
                ]
              }], B = {
                width: 300,
                height: 0,
                // panel 中可包含多个 tab
                tabs: []
              };
              return window.FileReader && (c.uploadVideoServer || c.customUploadVideo) && B.tabs.push(P[0]), c.showLinkVideo && B.tabs.push(P[1]), B;
            }
            i.default = v;
          },
          /* 341 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(133)), u = r(t(57)), g = r(t(4)), E = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var h = t(2), y = t(6), v = h.__importDefault(t(135)), s = h.__importDefault(t(136)), d = t(7), c = t(6), m = (
              /** @class */
              function() {
                function p(A) {
                  this.editor = A;
                }
                return p.prototype.uploadVideo = function(A) {
                  var x = this;
                  if (A.length) {
                    var S = this.editor, D = S.config, R = "validate.", P = function(lt) {
                      return S.i18next.t(R + lt);
                    }, B = D.uploadVideoServer, I = D.uploadVideoMaxSize, C = I / 1024, M = D.uploadVideoName, F = D.uploadVideoParams, w = D.uploadVideoParamsWithUrl, O = D.uploadVideoHeaders, U = D.uploadVideoHooks, b = D.uploadVideoTimeout, Q = D.withVideoCredentials, j = D.customUploadVideo, z = D.uploadVideoAccept, W = [], q = [];
                    if (y.arrForEach(A, function(et) {
                      var lt = et.name, mt = et.size / 1024 / 1024;
                      if (!(!lt || !mt)) {
                        if (!(z instanceof Array)) {
                          q.push("【" + z + "】" + P("uploadVideoAccept 不是Array"));
                          return;
                        }
                        if (!(0, l.default)(z).call(z, function(Dt) {
                          return Dt === lt.split(".")[lt.split(".").length - 1];
                        })) {
                          q.push("【" + lt + "】" + P("不是视频"));
                          return;
                        }
                        if (C < mt) {
                          q.push("【" + lt + "】" + P("大于") + " " + C + "M");
                          return;
                        }
                        W.push(et);
                      }
                    }), q.length) {
                      D.customAlert(P("视频验证未通过") + `: 
` + q.join(`
`), "warning");
                      return;
                    }
                    if (W.length === 0) {
                      D.customAlert(P("传入的文件不合法"), "warning");
                      return;
                    }
                    if (j && typeof j == "function") {
                      var ut;
                      j(W, (0, u.default)(ut = this.insertVideo).call(ut, this));
                      return;
                    }
                    var _ = new FormData();
                    if ((0, g.default)(W).call(W, function(et, lt) {
                      var mt = M || et.name;
                      W.length > 1 && (mt = mt + (lt + 1)), _.append(mt, et);
                    }), B) {
                      var ft = B.split("#");
                      B = ft[0];
                      var at = ft[1] || "";
                      (0, g.default)(y).call(y, F, function(et, lt) {
                        w && ((0, E.default)(B).call(B, "?") > 0 ? B += "&" : B += "?", B = B + et + "=" + lt), _.append(et, lt);
                      }), at && (B += "#" + at);
                      var tt = v.default(B, {
                        timeout: b,
                        formData: _,
                        headers: O,
                        withCredentials: !!Q,
                        beforeSend: function(lt) {
                          if (U.before) return U.before(lt, S, W);
                        },
                        onTimeout: function(lt) {
                          D.customAlert(P("上传视频超时"), "error"), U.timeout && U.timeout(lt, S);
                        },
                        onProgress: function(lt, mt) {
                          var Dt = new s.default(S);
                          mt.lengthComputable && (lt = mt.loaded / mt.total, Dt.show(lt));
                        },
                        onError: function(lt) {
                          D.customAlert(P("上传视频错误"), "error", P("上传视频错误") + "，" + P("服务器返回状态") + ": " + lt.status), U.error && U.error(lt, S);
                        },
                        onFail: function(lt, mt) {
                          D.customAlert(P("上传视频失败"), "error", P("上传视频返回结果错误") + ("，" + P("返回结果") + ": ") + mt), U.fail && U.fail(lt, S, mt);
                        },
                        onSuccess: function(lt, mt) {
                          if (U.customInsert) {
                            var Dt;
                            U.customInsert((0, u.default)(Dt = x.insertVideo).call(Dt, x), mt, S);
                            return;
                          }
                          if (mt.errno != "0") {
                            D.customAlert(P("上传视频失败"), "error", P("上传视频返回结果错误") + "，" + P("返回结果") + " errno=" + mt.errno), U.fail && U.fail(lt, S, mt);
                            return;
                          }
                          var Ht = mt.data;
                          x.insertVideo(Ht.url), U.success && U.success(lt, S, mt);
                        }
                      });
                      typeof tt == "string" && D.customAlert(tt, "error");
                    }
                  }
                }, p.prototype.insertVideo = function(A) {
                  var x = this.editor, S = x.config, D = "validate.", R = function(I, C) {
                    return C === void 0 && (C = D), x.i18next.t(C + I);
                  };
                  if (!S.customInsertVideo)
                    c.UA.isFirefox ? x.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + A + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : x.cmd.do("insertHTML", '<video src="' + A + '" controls="controls" style="max-width:100%"></video>' + d.EMPTY_P);
                  else {
                    S.customInsertVideo(A);
                    return;
                  }
                  var P = document.createElement("video");
                  P.onload = function() {
                    P = null;
                  }, P.onerror = function() {
                    S.customAlert(R("插入视频错误"), "error", "wangEditor: " + R("插入视频错误") + "，" + R("视频链接") + ' "' + A + '"，' + R("下载链接失败")), P = null;
                  }, P.onabort = function() {
                    return P = null;
                  }, P.src = A;
                }, p;
              }()
            );
            i.default = m;
          },
          /* 342 */
          /***/
          function(o, i, t) {
            o.exports = t(343);
          },
          /* 343 */
          /***/
          function(o, i, t) {
            var r = t(344);
            o.exports = r;
          },
          /* 344 */
          /***/
          function(o, i, t) {
            t(345);
            var r = t(9);
            o.exports = r.Date.now;
          },
          /* 345 */
          /***/
          function(o, i, t) {
            var r = t(5);
            r({ target: "Date", stat: !0 }, {
              now: function() {
                return (/* @__PURE__ */ new Date()).getTime();
              }
            });
          },
          /* 346 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(347)), g = l.__importDefault(t(349));
            function E(h) {
              u.default(h), g.default(h);
            }
            i.default = E;
          },
          /* 347 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createShowHideFn = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(39)), E = l.__importDefault(t(348));
            function h(v) {
              var s, d = function(A, x) {
                return x === void 0 && (x = ""), v.i18next.t(x + A);
              };
              function c(p) {
                var A = [{
                  $elem: u.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function(S, D) {
                    return D.remove(), !0;
                  }
                }, {
                  $elem: u.default("<span>100%</span>"),
                  onClick: function(S, D) {
                    return D.attr("width", "100%"), D.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>50%</span>"),
                  onClick: function(S, D) {
                    return D.attr("width", "50%"), D.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>30%</span>"),
                  onClick: function(S, D) {
                    return D.attr("width", "30%"), D.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>" + d("重置") + "</span>"),
                  onClick: function(S, D) {
                    return D.removeAttr("width"), D.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>" + d("menus.justify.靠左") + "</span>"),
                  onClick: function(S, D) {
                    return E.default(D, "left"), !0;
                  }
                }, {
                  $elem: u.default("<span>" + d("menus.justify.居中") + "</span>"),
                  onClick: function(S, D) {
                    return E.default(D, "center"), !0;
                  }
                }, {
                  $elem: u.default("<span>" + d("menus.justify.靠右") + "</span>"),
                  onClick: function(S, D) {
                    return E.default(D, "right"), !0;
                  }
                }];
                s = new g.default(v, p, A), s.create();
              }
              function m() {
                s && (s.remove(), s = null);
              }
              return {
                showVideoTooltip: c,
                hideVideoTooltip: m
              };
            }
            i.createShowHideFn = h;
            function y(v) {
              var s = h(v), d = s.showVideoTooltip, c = s.hideVideoTooltip;
              v.txt.eventHooks.videoClickEvents.push(d), v.txt.eventHooks.clickEvents.push(c), v.txt.eventHooks.keyupEvents.push(c), v.txt.eventHooks.toolbarClickEvents.push(c), v.txt.eventHooks.menuClickEvents.push(c), v.txt.eventHooks.textScrollEvents.push(c), v.txt.eventHooks.changeEvents.push(c);
            }
            i.default = y;
          },
          /* 348 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(28));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3));
            function E(y, v) {
              var s = ["P"], d = h(y, s);
              d && g.default(d).css("text-align", v);
            }
            i.default = E;
            function h(y, v) {
              for (var s, d = y.elems[0]; d != null; ) {
                if ((0, l.default)(v).call(v, d == null ? void 0 : d.nodeName))
                  return d;
                if (((s = d == null ? void 0 : d.parentNode) === null || s === void 0 ? void 0 : s.nodeName) === "BODY")
                  return null;
                d = d.parentNode;
              }
              return d;
            }
          },
          /* 349 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(6);
            function u(g) {
              if (l.UA.isFirefox) {
                var E = g.txt, h = g.selection, y = E.eventHooks.keydownEvents;
                y.push(function(v) {
                  var s = h.getSelectionContainerElem();
                  if (s) {
                    var d = s.getNodeTop(g), c = d.length && d.prev().length ? d.prev() : null;
                    c && c.attr("data-we-video-p") && h.getCursorPos() === 0 && v.keyCode === 8 && c.remove();
                  }
                });
              }
            }
            i.default = u;
          },
          /* 350 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(7), E = u.__importDefault(t(3)), h = u.__importDefault(t(33)), y = u.__importDefault(t(38)), v = u.__importDefault(t(351)), s = u.__importDefault(t(364)), d = (
              /** @class */
              function(c) {
                u.__extends(m, c);
                function m(p) {
                  var A = this, x = E.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'), S = s.default(p);
                  if (S.onlyUploadConf) {
                    var D;
                    x = S.onlyUploadConf.$elem, (0, l.default)(D = S.onlyUploadConf.events).call(D, function(R) {
                      var P = R.type, B = R.fn || g.EMPTY_FN;
                      x.on(P, function(I) {
                        I.stopPropagation(), B(I);
                      });
                    });
                  }
                  return A = c.call(this, x, p) || this, A.imgPanelConfig = S, v.default(p), A;
                }
                return m.prototype.clickHandler = function() {
                  this.imgPanelConfig.onlyUploadConf || this.createPanel();
                }, m.prototype.createPanel = function() {
                  var p = this.imgPanelConfig, A = new h.default(this, p);
                  this.setPanel(A), A.create();
                }, m.prototype.tryChangeActive = function() {
                }, m;
              }(y.default)
            );
            i.default = d;
          },
          /* 351 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(352)), g = l.__importDefault(t(353)), E = l.__importDefault(t(354)), h = l.__importDefault(t(362)), y = l.__importDefault(t(363));
            function v(s) {
              u.default(s), g.default(s), E.default(s), h.default(s), y.default(s);
            }
            i.default = v;
          },
          /* 352 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = t(131), g = l.__importDefault(t(97));
            function E(s, d) {
              var c = s.config, m = c.pasteFilterStyle, p = c.pasteIgnoreImg, A = u.getPasteHtml(d, m, p);
              if (A) return !0;
              var x = u.getPasteText(d);
              return !!x;
            }
            function h(s, d) {
              for (var c, m = ((c = d.clipboardData) === null || c === void 0 ? void 0 : c.types) || [], p = 0; p < m.length; p++) {
                var A = m[p];
                if (A === "Files")
                  return !0;
              }
              return !1;
            }
            function y(s, d) {
              if (!(!h(d, s) && E(d, s))) {
                var c = u.getPasteImgs(s);
                if (c.length) {
                  var m = new g.default(d);
                  m.uploadImg(c);
                }
              }
            }
            function v(s) {
              s.txt.eventHooks.pasteEvents.unshift(function(d) {
                y(d, s);
              });
            }
            i.default = v;
          },
          /* 353 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(97));
            function g(E) {
              function h(y) {
                var v = y.dataTransfer && y.dataTransfer.files;
                if (!(!v || !v.length)) {
                  var s = new u.default(E);
                  s.uploadImg(v);
                }
              }
              E.txt.eventHooks.dropEvents.push(h);
            }
            i.default = g;
          },
          /* 354 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29)), u = r(t(355));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createShowHideFn = void 0;
            var g = t(2), E = g.__importDefault(t(3));
            t(360);
            var h = t(6);
            function y(m, p, A, x, S) {
              m.attr("style", "width:" + p + "px; height:" + A + "px; left:" + x + "px; top:" + S + "px;");
            }
            function v(m, p) {
              var A = E.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
              return A.hide(), p.append(A), A;
            }
            function s(m, p, A) {
              var x = m.getBoundingClientRect(), S = A.getBoundingClientRect(), D = S.width.toFixed(2), R = S.height.toFixed(2);
              (0, l.default)(p).call(p, ".w-e-img-drag-show-size").text(D + "px * " + R + "px"), y(p, (0, u.default)(D), (0, u.default)(R), S.left - x.left, S.top - x.top), p.show();
            }
            function d(m) {
              var p = m.$textContainerElem, A, x = v(m, p);
              function S(P, B) {
                P.on("click", function(I) {
                  I.stopPropagation();
                }), P.on("mousedown", ".w-e-img-drag-rb", function(I) {
                  if (I.preventDefault(), !A) return;
                  var C = I.clientX, M = I.clientY, F = B.getBoundingClientRect(), w = A.getBoundingClientRect(), O = w.width, U = w.height, b = w.left - F.left, Q = w.top - F.top, j = O / U, z = O, W = U, q = E.default(document);
                  function ut() {
                    q.off("mousemove", _), q.off("mouseup", ft);
                  }
                  function _(at) {
                    at.stopPropagation(), at.preventDefault(), z = O + (at.clientX - C), W = U + (at.clientY - M), z / W != j && (W = z / j), z = (0, u.default)(z.toFixed(2)), W = (0, u.default)(W.toFixed(2)), (0, l.default)(P).call(P, ".w-e-img-drag-show-size").text(z.toFixed(2).replace(".00", "") + "px * " + W.toFixed(2).replace(".00", "") + "px"), y(P, z, W, b, Q);
                  }
                  q.on("mousemove", _);
                  function ft() {
                    A.attr("width", z + ""), A.attr("height", W + "");
                    var at = A.getBoundingClientRect();
                    y(P, z, W, at.left - F.left, at.top - F.top), ut();
                  }
                  q.on("mouseup", ft), q.on("mouseleave", ut);
                });
              }
              function D(P) {
                if (h.UA.isIE()) return !1;
                P && (A = P, s(p, x, A));
              }
              function R() {
                (0, l.default)(p).call(p, ".w-e-img-drag-mask").hide();
              }
              return S(x, p), E.default(document).on("click", R), m.beforeDestroy(function() {
                E.default(document).off("click", R);
              }), {
                showDrag: D,
                hideDrag: R
              };
            }
            i.createShowHideFn = d;
            function c(m) {
              var p = d(m), A = p.showDrag, x = p.hideDrag;
              m.txt.eventHooks.imgClickEvents.push(A), m.txt.eventHooks.textScrollEvents.push(x), m.txt.eventHooks.keyupEvents.push(x), m.txt.eventHooks.toolbarClickEvents.push(x), m.txt.eventHooks.menuClickEvents.push(x), m.txt.eventHooks.changeEvents.push(x);
            }
            i.default = c;
          },
          /* 355 */
          /***/
          function(o, i, t) {
            o.exports = t(356);
          },
          /* 356 */
          /***/
          function(o, i, t) {
            var r = t(357);
            o.exports = r;
          },
          /* 357 */
          /***/
          function(o, i, t) {
            t(358);
            var r = t(9);
            o.exports = r.parseFloat;
          },
          /* 358 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(359);
            r({ global: !0, forced: parseFloat != f }, {
              parseFloat: f
            });
          },
          /* 359 */
          /***/
          function(o, i, t) {
            var r = t(8), f = t(90).trim, l = t(68), u = r.parseFloat, g = 1 / u(l + "-0") !== -1 / 0;
            o.exports = g ? function(h) {
              var y = f(String(h)), v = u(y);
              return v === 0 && y.charAt(0) == "-" ? -0 : v;
            } : u;
          },
          /* 360 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(361);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 361 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), o.exports = i;
          },
          /* 362 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createShowHideFn = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(39));
            function E(y) {
              var v, s = function(p, A) {
                return A === void 0 && (A = ""), y.i18next.t(A + p);
              };
              function d(m) {
                var p = [{
                  $elem: u.default("<span class='w-e-icon-trash-o'></span>"),
                  onClick: function(x, S) {
                    return x.selection.createRangeByElem(S), x.selection.restoreSelection(), x.cmd.do("delete"), !0;
                  }
                }, {
                  $elem: u.default("<span>30%</span>"),
                  onClick: function(x, S) {
                    return S.attr("width", "30%"), S.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>50%</span>"),
                  onClick: function(x, S) {
                    return S.attr("width", "50%"), S.removeAttr("height"), !0;
                  }
                }, {
                  $elem: u.default("<span>100%</span>"),
                  onClick: function(x, S) {
                    return S.attr("width", "100%"), S.removeAttr("height"), !0;
                  }
                }];
                p.push({
                  $elem: u.default("<span>" + s("重置") + "</span>"),
                  onClick: function(x, S) {
                    return S.removeAttr("width"), S.removeAttr("height"), !0;
                  }
                }), m.attr("data-href") && p.push({
                  $elem: u.default("<span>" + s("查看链接") + "</span>"),
                  onClick: function(x, S) {
                    var D = S.attr("data-href");
                    return D && (D = decodeURIComponent(D), window.open(D, "_target")), !0;
                  }
                }), v = new g.default(y, m, p), v.create();
              }
              function c() {
                v && (v.remove(), v = null);
              }
              return {
                showImgTooltip: d,
                hideImgTooltip: c
              };
            }
            i.createShowHideFn = E;
            function h(y) {
              var v = E(y), s = v.showImgTooltip, d = v.hideImgTooltip;
              y.txt.eventHooks.imgClickEvents.push(s), y.txt.eventHooks.clickEvents.push(d), y.txt.eventHooks.keyupEvents.push(d), y.txt.eventHooks.toolbarClickEvents.push(d), y.txt.eventHooks.menuClickEvents.push(d), y.txt.eventHooks.textScrollEvents.push(d), y.txt.eventHooks.imgDragBarMouseDownEvents.push(d), y.txt.eventHooks.changeEvents.push(d);
            }
            i.default = h;
          },
          /* 363 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function l(u) {
              var g = u.txt, E = u.selection, h = g.eventHooks.keydownEvents;
              h.push(function(y) {
                var v = E.getSelectionContainerElem(), s = E.getRange();
                if (!(!s || !v || y.keyCode !== 8 || !E.isSelectionEmpty())) {
                  var d = s.startContainer, c = s.startOffset, m = null;
                  if (c === 0)
                    for (; d !== v.elems[0] && v.elems[0].contains(d) && d.parentNode && !m; ) {
                      if (d.previousSibling) {
                        m = d.previousSibling;
                        break;
                      }
                      d = d.parentNode;
                    }
                  else d.nodeType !== 3 && (m = d.childNodes[c - 1]);
                  if (m) {
                    for (var p = m; p.childNodes.length; )
                      p = p.childNodes[p.childNodes.length - 1];
                    p instanceof HTMLElement && p.tagName === "IMG" && (p.remove(), y.preventDefault());
                  }
                }
              });
            }
            i.default = l;
          },
          /* 364 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26)), u = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = t(6), y = g.__importDefault(t(97));
            function v(s) {
              var d, c = s.config, m = new y.default(s), p = h.getRandom("up-trigger-id"), A = h.getRandom("up-file-id"), x = h.getRandom("input-link-url"), S = h.getRandom("input-link-url-alt"), D = h.getRandom("input-link-url-href"), R = h.getRandom("btn-link"), P = "menus.panelMenus.image.", B = function(j, z) {
                return z === void 0 && (z = P), s.i18next.t(z + j);
              };
              function I(Q, j, z) {
                var W = c.linkImgCheck(Q);
                return W === !0 ? !0 : (typeof W == "string" && c.customAlert(W, "error"), !1);
              }
              var C = c.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', M = (0, l.default)(d = c.uploadImgAccept).call(d, function(Q) {
                return "image/" + Q;
              }).join(","), F = function(j, z, W) {
                return '<div class="' + j + '" data-title="' + W + `">
            <div id="` + p + `" class="w-e-up-btn">
                <i class="` + z + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + A + '" type="file" ' + C + ' accept="' + M + `"/>
            </div>
        </div>`;
              }, w = [
                // 触发选择图片
                {
                  selector: "#" + p,
                  type: "click",
                  fn: function() {
                    var j = c.uploadImgFromMedia;
                    if (j && typeof j == "function")
                      return j(), !0;
                    var z = E.default("#" + A), W = z.elems[0];
                    if (W)
                      W.click();
                    else
                      return !0;
                  }
                },
                // 选择图片完毕
                {
                  selector: "#" + A,
                  type: "change",
                  fn: function() {
                    var j = E.default("#" + A), z = j.elems[0];
                    if (!z)
                      return !0;
                    var W = z.files;
                    return W != null && W.length && m.uploadImg(W), z && (z.value = ""), !0;
                  }
                }
              ], O = [`<input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + B("图片地址") + '"/>'];
              c.showLinkImgAlt && O.push(`
        <input
            id="` + S + `"
            type="text"
            class="block"
            placeholder="` + B("图片文字说明") + '"/>'), c.showLinkImgHref && O.push(`
        <input
            id="` + D + `"
            type="text"
            class="block"
            placeholder="` + B("跳转链接") + '"/>');
              var U = [
                // first tab
                {
                  // 标题
                  title: B("上传图片"),
                  // 模板
                  tpl: F("w-e-up-img-container", "w-e-icon-upload2", ""),
                  // 事件绑定
                  events: w
                },
                // second tab
                {
                  title: B("网络图片"),
                  tpl: `<div>
                    ` + O.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + R + '" class="right">' + B("插入", "") + `</button>
                    </div>
                </div>`,
                  events: [{
                    selector: "#" + R,
                    type: "click",
                    fn: function() {
                      var j, z = E.default("#" + x), W = (0, u.default)(j = z.val()).call(j);
                      if (W) {
                        var q;
                        if (c.showLinkImgAlt) {
                          var ut;
                          q = (0, u.default)(ut = E.default("#" + S).val()).call(ut);
                        }
                        var _;
                        if (c.showLinkImgHref) {
                          var ft;
                          _ = (0, u.default)(ft = E.default("#" + D).val()).call(ft);
                        }
                        if (I(W))
                          return m.insertImg(W, q, _), !0;
                      }
                    },
                    bindEnter: !0
                  }]
                }
              ], b = {
                width: 300,
                height: 0,
                tabs: [],
                onlyUploadConf: {
                  $elem: E.default(F("w-e-menu", "w-e-icon-image", "图片")),
                  events: w
                }
              };
              return window.FileReader && (c.uploadImgShowBase64 || c.uploadImgServer || c.customUploadImg || c.uploadImgFromMedia) && b.tabs.push(U[0]), c.showLinkImg && (b.tabs.push(U[1]), b.onlyUploadConf = void 0), b;
            }
            i.default = v;
          },
          /* 365 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = u.__importDefault(t(24)), h = u.__importDefault(t(366)), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  var c = this, m = g.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), p = {
                    width: 130,
                    title: "设置缩进",
                    type: "list",
                    list: [{
                      $elem: g.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + d.i18next.t("menus.dropListMenu.indent.增加缩进") + `
                        <p>`),
                      value: "increase"
                    }, {
                      $elem: g.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + d.i18next.t("menus.dropListMenu.indent.减少缩进") + `
                        <p>`),
                      value: "decrease"
                    }],
                    clickHandler: function(x) {
                      c.command(x);
                    }
                  };
                  return c = v.call(this, m, d, p) || this, c;
                }
                return s.prototype.command = function(d) {
                  var c = this.editor, m = c.selection.getSelectionContainerElem();
                  if (m && c.$textElem.equal(m)) {
                    var p = c.selection.getSelectionRangeTopNodes();
                    p.length > 0 && (0, l.default)(p).call(p, function(A) {
                      h.default(g.default(A), d, c);
                    });
                  } else
                    m && m.length > 0 && (0, l.default)(m).call(m, function(A) {
                      h.default(g.default(A), d, c);
                    });
                  c.selection.restoreSelection(), this.tryChangeActive();
                }, s.prototype.tryChangeActive = function() {
                  var d = this.editor, c = d.selection.getSelectionStartElem(), m = g.default(c).getNodeTop(d);
                  m.length <= 0 || (m.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
                }, s;
              }(E.default)
            );
            i.default = y;
          },
          /* 366 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(45)), u = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(367)), h = g.__importDefault(t(368)), y = /^(\d+)(\w+)$/, v = /^(\d+)%$/;
            function s(c) {
              var m = c.config.indentation;
              if (typeof m == "string") {
                if (y.test(m)) {
                  var p, A = (0, l.default)(p = (0, u.default)(m).call(m).match(y)).call(p, 1, 3), x = A[0], S = A[1];
                  return {
                    value: Number(x),
                    unit: S
                  };
                } else if (v.test(m))
                  return {
                    value: Number((0, u.default)(m).call(m).match(v)[1]),
                    unit: "%"
                  };
              } else if (m.value !== void 0 && m.unit)
                return m;
              return {
                value: 2,
                unit: "em"
              };
            }
            function d(c, m, p) {
              var A = c.getNodeTop(p), x = /^(P|H[0-9]*)$/;
              x.test(A.getNodeName()) && (m === "increase" ? E.default(A, s(p)) : m === "decrease" && h.default(A, s(p)));
            }
            i.default = d;
          },
          /* 367 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(45));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function u(g, E) {
              var h = g.elems[0];
              if (h.style.paddingLeft === "")
                g.css("padding-left", E.value + E.unit);
              else {
                var y = h.style.paddingLeft, v = (0, l.default)(y).call(y, 0, y.length - E.unit.length), s = Number(v) + E.value;
                g.css("padding-left", "" + s + E.unit);
              }
            }
            i.default = u;
          },
          /* 368 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(45));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function u(g, E) {
              var h = g.elems[0];
              if (h.style.paddingLeft !== "") {
                var y = h.style.paddingLeft, v = (0, l.default)(y).call(y, 0, y.length - E.unit.length), s = Number(v) - E.value;
                s > 0 ? g.css("padding-left", "" + s + E.unit) : g.css("padding-left", "");
              }
            }
            i.default = u;
          },
          /* 369 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(38)), E = l.__importDefault(t(33)), h = l.__importDefault(t(370)), y = (
              /** @class */
              function(v) {
                l.__extends(s, v);
                function s(d) {
                  var c = this, m = u.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
                  return c = v.call(this, m, d) || this, c;
                }
                return s.prototype.createPanel = function() {
                  var d = h.default(this.editor), c = new E.default(this, d);
                  c.create();
                }, s.prototype.clickHandler = function() {
                  this.createPanel();
                }, s.prototype.tryChangeActive = function() {
                }, s;
              }(g.default)
            );
            i.default = y;
          },
          /* 370 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26)), u = r(t(70)), g = r(t(17));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var E = t(2), h = E.__importDefault(t(3));
            function y(v) {
              var s = v.config.emotions;
              function d(p) {
                var A = [];
                if (p.type == "image") {
                  var x;
                  A = (0, l.default)(x = p.content).call(x, function(D) {
                    return typeof D == "string" ? "" : '<span  title="' + D.alt + `">
                    <img class="eleImg" data-emoji="` + D.alt + '" style src="' + D.src + '" alt="[' + D.alt + `]">
                </span>`;
                  }), A = (0, u.default)(A).call(A, function(D) {
                    return D !== "";
                  });
                } else {
                  var S;
                  A = (0, l.default)(S = p.content).call(S, function(D) {
                    return '<span class="eleImg" title="' + D + '">' + D + "</span>";
                  });
                }
                return A.join("").replace(/&nbsp;/g, "");
              }
              var c = (0, l.default)(s).call(s, function(p) {
                return {
                  title: v.i18next.t("menus.panelMenus.emoticon." + p.title),
                  // 判断type类型如果是image则以img的形式插入否则以内容
                  tpl: "<div>" + d(p) + "</div>",
                  events: [{
                    selector: ".eleImg",
                    type: "click",
                    fn: function(x) {
                      var S = h.default(x.target), D = S.getNodeName(), R;
                      if (D === "IMG") {
                        var P;
                        R = (0, g.default)(P = S.parent().html()).call(P);
                      } else
                        R = "<span>" + S.html() + "</span>";
                      return v.cmd.do("insertHTML", R), !0;
                    }
                  }]
                };
              }), m = {
                width: 300,
                height: 230,
                tabs: c
              };
              return m;
            }
            i.default = y;
          },
          /* 371 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createListHandle = i.ClassType = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(372)), E = l.__importDefault(t(374)), h = l.__importDefault(t(375)), y = l.__importDefault(t(376)), v = l.__importDefault(t(377)), s;
            (function(p) {
              p.Wrap = "WrapListHandle", p.Join = "JoinListHandle", p.StartJoin = "StartJoinListHandle", p.EndJoin = "EndJoinListHandle", p.Other = "OtherListHandle";
            })(s = i.ClassType || (i.ClassType = {}));
            var d = {
              WrapListHandle: g.default,
              JoinListHandle: E.default,
              StartJoinListHandle: h.default,
              EndJoinListHandle: y.default,
              OtherListHandle: v.default
            };
            function c(p, A, x) {
              if (p === s.Other && x === void 0)
                throw new Error("other 类需要传入 range");
              return p !== s.Other ? new d[p](A) : new d[p](A, x);
            }
            i.createListHandle = c;
            var m = (
              /** @class */
              function() {
                function p(A) {
                  this.handle = A, this.handle.exec();
                }
                return p.prototype.getSelectionRangeElem = function() {
                  return u.default(this.handle.selectionRangeElem.get());
                }, p;
              }()
            );
            i.default = m;
          },
          /* 372 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(58), h = t(47), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  return v.call(this, d) || this;
                }
                return s.prototype.exec = function() {
                  var d = this.options, c = d.listType, m = d.listTarget, p = d.$selectionElem, A = d.$startElem, x = d.$endElem, S, D = [], R = p == null ? void 0 : p.getNodeName(), P = A.prior, B = x.prior;
                  if (!A.prior && !x.prior || !(P != null && P.prev().length) && !(B != null && B.next().length)) {
                    var I;
                    (0, l.default)(I = p == null ? void 0 : p.children()).call(I, function(b) {
                      D.push(g.default(b));
                    }), R === c ? S = h.createElementFragment(
                      D,
                      h.createDocumentFragment(),
                      // 创建 文档片段
                      "p"
                    ) : (S = h.createElement(m), (0, l.default)(D).call(D, function(b) {
                      S.appendChild(b.elems[0]);
                    })), this.selectionRangeElem.set(S), h.insertBefore(p, S, p.elems[0]), p.remove();
                  } else {
                    for (var C = P; C.length; )
                      D.push(C), B != null && B.equal(C) ? C = g.default(void 0) : (
                        // 结束
                        C = C.next()
                      );
                    var M = P.prev(), F = B.next();
                    if (R === c ? S = h.createElementFragment(
                      D,
                      h.createDocumentFragment(),
                      // 创建 文档片段
                      "p"
                    ) : (S = h.createElement(m), (0, l.default)(D).call(D, function(b) {
                      S.append(b.elems[0]);
                    })), M.length && F.length) {
                      for (var w = []; F.length; )
                        w.push(F), F = F.next();
                      var O = h.createElement(R);
                      (0, l.default)(w).call(w, function(b) {
                        O.append(b.elems[0]);
                      }), g.default(O).insertAfter(p), this.selectionRangeElem.set(S);
                      var U = p.next();
                      U.length ? h.insertBefore(p, S, U.elems[0]) : p.parent().elems[0].append(S);
                    } else if (!M.length)
                      this.selectionRangeElem.set(S), h.insertBefore(p, S, p.elems[0]);
                    else {
                      this.selectionRangeElem.set(S);
                      var U = p.next();
                      U.length ? h.insertBefore(p, S, U.elems[0]) : p.parent().elems[0].append(S);
                    }
                  }
                }, s;
              }(E.ListHandle)
            );
            i.default = y;
          },
          /* 373 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = (
              /** @class */
              function() {
                function g() {
                  this._element = null;
                }
                return g.prototype.set = function(E) {
                  if (E instanceof DocumentFragment) {
                    var h, y = [];
                    (0, l.default)(h = E.childNodes).call(h, function(v) {
                      y.push(v);
                    }), E = y;
                  }
                  this._element = E;
                }, g.prototype.get = function() {
                  return this._element;
                }, g.prototype.clear = function() {
                  this._element = null;
                }, g;
              }()
            );
            i.default = u;
          },
          /* 374 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(58), h = t(47), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  return v.call(this, d) || this;
                }
                return s.prototype.exec = function() {
                  var d, c, m, p, A, x, S, D = this.options, R = D.editor, P = D.listType, B = D.listTarget, I = D.$startElem, C = D.$endElem, M, F = R.selection.getSelectionRangeTopNodes(), w = I == null ? void 0 : I.getNodeName(), O = C == null ? void 0 : C.getNodeName();
                  if (w === O)
                    if (F.length > 2)
                      if (F.shift(), F.pop(), M = h.createElementFragment(
                        h.filterSelectionNodes(F),
                        // 过滤 $nodes 获取到符合要求的选中元素节点
                        h.createDocumentFragment()
                        // 创建 文档片段
                      ), w === P)
                        (d = C.children()) === null || d === void 0 || (0, l.default)(d).call(d, function(at) {
                          M.append(at);
                        }), C.remove(), this.selectionRangeElem.set(M), I.elems[0].append(M);
                      else {
                        for (var U = document.createDocumentFragment(), b = document.createDocumentFragment(), Q = h.getStartPoint(I); Q.length; ) {
                          var j = Q.elems[0];
                          Q = Q.next(), U.append(j);
                        }
                        for (var z = h.getEndPoint(C), W = []; z.length; )
                          W.unshift(z.elems[0]), z = z.prev();
                        (0, l.default)(W).call(W, function(at) {
                          b.append(at);
                        });
                        var q = h.createElement(B);
                        q.append(U), q.append(M), q.append(b), M = q, this.selectionRangeElem.set(M), g.default(q).insertAfter(I), !(!((c = I.children()) === null || c === void 0) && c.length) && I.remove(), !(!((m = C.children()) === null || m === void 0) && m.length) && C.remove();
                      }
                    else {
                      F.length = 0;
                      for (var Q = h.getStartPoint(I); Q.length; )
                        F.push(Q), Q = Q.next();
                      for (var z = h.getEndPoint(C), W = []; z.length; )
                        W.unshift(z), z = z.prev();
                      F.push.apply(F, W), w === P ? (M = h.createElementFragment(F, h.createDocumentFragment(), "p"), this.selectionRangeElem.set(M), h.insertBefore(I, M, C.elems[0])) : (M = h.createElement(B), (0, l.default)(F).call(F, function(lt) {
                        M.append(lt.elems[0]);
                      }), this.selectionRangeElem.set(M), g.default(M).insertAfter(I)), !(!((p = I.children()) === null || p === void 0) && p.length) && C.remove(), !(!((A = C.children()) === null || A === void 0) && A.length) && C.remove();
                    }
                  else {
                    for (var ut = [], z = h.getEndPoint(C); z.length; )
                      ut.unshift(z), z = z.prev();
                    for (var _ = [], Q = h.getStartPoint(I); Q.length; )
                      _.push(Q), Q = Q.next();
                    if (M = h.createDocumentFragment(), F.shift(), F.pop(), (0, l.default)(_).call(_, function(et) {
                      return M.append(et.elems[0]);
                    }), M = h.createElementFragment(
                      h.filterSelectionNodes(F),
                      // 序列中间的数据 - 进行数据过滤
                      M
                    ), (0, l.default)(ut).call(ut, function(et) {
                      return M.append(et.elems[0]);
                    }), this.selectionRangeElem.set(M), w === P)
                      I.elems[0].append(M), !(!((x = C.children()) === null || x === void 0) && x.length) && C.remove();
                    else if (!((S = C.children()) === null || S === void 0) && S.length) {
                      var ft = C.children();
                      h.insertBefore(ft, M, ft.elems[0]);
                    } else
                      C.elems[0].append(M);
                  }
                }, s;
              }(E.ListHandle)
            );
            i.default = y;
          },
          /* 375 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(58), h = t(47), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  return v.call(this, d) || this;
                }
                return s.prototype.exec = function() {
                  var d, c = this.options, m = c.editor, p = c.listType, A = c.listTarget, x = c.$startElem, S, D = m.selection.getSelectionRangeTopNodes(), R = x == null ? void 0 : x.getNodeName();
                  D.shift();
                  for (var P = [], B = h.getStartPoint(x); B.length; )
                    P.push(B), B = B.next();
                  R === p ? (S = h.createDocumentFragment(), (0, l.default)(P).call(P, function(I) {
                    return S.append(I.elems[0]);
                  }), S = h.createElementFragment(
                    h.filterSelectionNodes(D),
                    // 过滤元素节点数据
                    S
                  ), this.selectionRangeElem.set(S), x.elems[0].append(S)) : (S = h.createElement(A), (0, l.default)(P).call(P, function(I) {
                    return S.append(I.elems[0]);
                  }), S = h.createElementFragment(
                    h.filterSelectionNodes(D),
                    // 过滤普通节点
                    S
                  ), this.selectionRangeElem.set(S), g.default(S).insertAfter(x), !(!((d = x.children()) === null || d === void 0) && d.length) && x.remove());
                }, s;
              }(E.ListHandle)
            );
            i.default = y;
          },
          /* 376 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(58), h = t(47), y = (
              /** @class */
              function(v) {
                u.__extends(s, v);
                function s(d) {
                  return v.call(this, d) || this;
                }
                return s.prototype.exec = function() {
                  var d, c, m = this.options, p = m.editor, A = m.listType, x = m.listTarget, S = m.$endElem, D, R = p.selection.getSelectionRangeTopNodes(), P = S == null ? void 0 : S.getNodeName();
                  R.pop();
                  for (var B = [], I = h.getEndPoint(S); I.length; )
                    B.unshift(I), I = I.prev();
                  if (P === A)
                    if (D = h.createElementFragment(
                      h.filterSelectionNodes(R),
                      // 过滤元素节点数据
                      h.createDocumentFragment()
                      // 创建 文档片段
                    ), (0, l.default)(B).call(B, function(F) {
                      return D.append(F.elems[0]);
                    }), this.selectionRangeElem.set(D), !((d = S.children()) === null || d === void 0) && d.length) {
                      var C = S.children();
                      h.insertBefore(C, D, C.elems[0]);
                    } else
                      S.elems[0].append(D);
                  else {
                    var M = h.filterSelectionNodes(R);
                    M.push.apply(M, B), D = h.createElementFragment(
                      M,
                      h.createElement(x)
                      // 创建 序列节点
                    ), this.selectionRangeElem.set(D), g.default(D).insertBefore(S), !(!((c = S.children()) === null || c === void 0) && c.length) && S.remove();
                  }
                }, s;
              }(E.ListHandle)
            );
            i.default = y;
          },
          /* 377 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = t(58), g = t(47), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v, s) {
                  var d = h.call(this, v) || this;
                  return d.range = s, d;
                }
                return y.prototype.exec = function() {
                  var v = this.options, s = v.editor, d = v.listTarget, c = s.selection.getSelectionRangeTopNodes(), m = g.createElementFragment(
                    g.filterSelectionNodes(c),
                    // 过滤选取的元素
                    g.createElement(d)
                    // 创建 序列节点
                  );
                  this.selectionRangeElem.set(m), this.range.insertNode(m);
                }, y;
              }(u.ListHandle)
            );
            i.default = E;
          },
          /* 378 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(24)), h = g.__importDefault(t(3)), y = g.__importDefault(t(379)), v = (
              /** @class */
              function(s) {
                g.__extends(d, s);
                function d(c) {
                  var m = this, p = h.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`), A = new y.default(c, c.config.lineHeights), x = {
                    width: 100,
                    title: "设置行高",
                    type: "list",
                    list: A.getItemList(),
                    clickHandler: function(D) {
                      c.selection.saveRange(), m.command(D);
                    }
                  };
                  return m = s.call(this, p, c, x) || this, m;
                }
                return d.prototype.command = function(c) {
                  var m = this.editor;
                  m.selection.restoreSelection();
                  var p = h.default(m.selection.getSelectionContainerElem());
                  if (p.elems.length) {
                    if (p && m.$textElem.equal(p)) {
                      for (var A = !1, x = h.default(m.selection.getSelectionStartElem()).elems[0], S = h.default(m.selection.getSelectionEndElem()).elems[0], D = this.getDom(x), R = this.getDom(S), P = p.elems[0].children, B = 0; B < P.length; B++) {
                        var I = P[B];
                        if (h.default(I).getNodeName() === "P" && (I === D && (A = !0), A && (h.default(I).css("line-height", c), I === R))) {
                          A = !1;
                          return;
                        }
                      }
                      m.selection.createRangeByElems(x, S);
                      return;
                    }
                    var C = p.elems[0], M = this.getDom(C);
                    h.default(M).getNodeName() === "P" && (h.default(M).css("line-height", c), m.selection.createRangeByElems(M, M));
                  }
                }, d.prototype.getDom = function(c) {
                  var m = h.default(c).elems[0];
                  if (!m.parentNode)
                    return m;
                  function p(A, x) {
                    var S = h.default(A.parentNode);
                    return x.$textElem.equal(S) ? A : p(S.elems[0], x);
                  }
                  return m = p(m, this.editor), m;
                }, d.prototype.styleProcessing = function(c) {
                  var m = "";
                  return (0, l.default)(c).call(c, function(p) {
                    p !== "" && (0, u.default)(p).call(p, "line-height") === -1 && (m = m + p + ";");
                  }), m;
                }, d.prototype.setRange = function(c, m) {
                  var p = this.editor, A = window.getSelection ? window.getSelection() : document.getSelection();
                  A == null || A.removeAllRanges();
                  var x = document.createRange(), S = c, D = m;
                  x.setStart(S, 0), x.setEnd(D, 1), A == null || A.addRange(x), p.selection.saveRange(), A == null || A.removeAllRanges(), p.selection.restoreSelection();
                }, d.prototype.tryChangeActive = function() {
                  var c = this.editor, m = c.selection.getSelectionContainerElem();
                  if (!(m && c.$textElem.equal(m))) {
                    var p = h.default(c.selection.getSelectionStartElem());
                    if (p.length !== 0) {
                      p = this.getDom(p.elems[0]);
                      var A = p.getAttribute("style") ? p.getAttribute("style") : "";
                      A && (0, u.default)(A).call(A, "line-height") !== -1 ? this.active() : this.unActive();
                    }
                  }
                }, d;
              }(E.default)
            );
            i.default = v;
          },
          /* 379 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = (
              /** @class */
              function() {
                function h(y, v) {
                  var s = this;
                  this.itemList = [{
                    $elem: g.default("<span>" + y.i18next.t("默认") + "</span>"),
                    value: ""
                  }], (0, l.default)(v).call(v, function(d) {
                    s.itemList.push({
                      $elem: g.default("<span>" + d + "</span>"),
                      value: d
                    });
                  });
                }
                return h.prototype.getItemList = function() {
                  return this.itemList;
                }, h;
              }()
            );
            i.default = E;
          },
          /* 380 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(23)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = u.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor;
                  v.history.revoke();
                  var s = v.$textElem.children();
                  if (s != null && s.length) {
                    var d = s.last();
                    v.selection.createRangeByElem(d, !1, !0), v.selection.restoreSelection();
                  }
                }, y.prototype.tryChangeActive = function() {
                  this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
                }, y;
              }(g.default)
            );
            i.default = E;
          },
          /* 381 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(23)), E = (
              /** @class */
              function(h) {
                l.__extends(y, h);
                function y(v) {
                  var s = this, d = u.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
                  return s = h.call(this, d, v) || this, s;
                }
                return y.prototype.clickHandler = function() {
                  var v = this.editor;
                  v.history.restore();
                  var s = v.$textElem.children();
                  if (s != null && s.length) {
                    var d = s.last();
                    v.selection.createRangeByElem(d, !1, !0), v.selection.restoreSelection();
                  }
                }, y.prototype.tryChangeActive = function() {
                  this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
                }, y;
              }(g.default)
            );
            i.default = E;
          },
          /* 382 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(38)), g = l.__importDefault(t(3)), E = l.__importDefault(t(383)), h = l.__importDefault(t(33)), y = l.__importDefault(t(392)), v = (
              /** @class */
              function(s) {
                l.__extends(d, s);
                function d(c) {
                  var m = this, p = g.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>');
                  return m = s.call(this, p, c) || this, y.default(c), m;
                }
                return d.prototype.clickHandler = function() {
                  this.createPanel();
                }, d.prototype.createPanel = function() {
                  var c = E.default(this.editor), m = new h.default(this, c);
                  m.create();
                }, d.prototype.tryChangeActive = function() {
                }, d;
              }(u.default)
            );
            i.default = v;
          },
          /* 383 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(384));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(6), E = u.__importDefault(t(3));
            t(389);
            var h = u.__importDefault(t(391));
            function y(s) {
              return s > 0 && (0, l.default)(s);
            }
            function v(s) {
              var d = new h.default(s), c = g.getRandom("w-col-id"), m = g.getRandom("w-row-id"), p = g.getRandom("btn-link"), A = "menus.panelMenus.table.", x = function(P) {
                return s.i18next.t(P);
              }, S = [{
                title: x(A + "插入表格"),
                tpl: `<div>
                    <div class="w-e-table">
                        <span>` + x("创建") + `</span>
                        <input id="` + m + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + x(A + "行") + `</span>
                        <input id="` + c + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (x(A + "列") + x(A + "的") + x(A + "表格")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + p + '" class="right">' + x("插入") + `</button>
                    </div>
                </div>`,
                events: [{
                  selector: "#" + p,
                  type: "click",
                  fn: function() {
                    var P = Number(E.default("#" + c).val()), B = Number(E.default("#" + m).val());
                    return y(B) && y(P) ? (d.createAction(B, P), !0) : (s.config.customAlert("表格行列请输入正整数", "warning"), !1);
                  },
                  bindEnter: !0
                }]
              }], D = {
                width: 330,
                height: 0,
                tabs: []
              };
              return D.tabs.push(S[0]), D;
            }
            i.default = v;
          },
          /* 384 */
          /***/
          function(o, i, t) {
            o.exports = t(385);
          },
          /* 385 */
          /***/
          function(o, i, t) {
            var r = t(386);
            o.exports = r;
          },
          /* 386 */
          /***/
          function(o, i, t) {
            t(387);
            var r = t(9);
            o.exports = r.Number.isInteger;
          },
          /* 387 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(388);
            r({ target: "Number", stat: !0 }, {
              isInteger: f
            });
          },
          /* 388 */
          /***/
          function(o, i, t) {
            var r = t(13), f = Math.floor;
            o.exports = function(u) {
              return !r(u) && isFinite(u) && f(u) === u;
            };
          },
          /* 389 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(390);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 390 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), o.exports = i;
          },
          /* 391 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = t(7), g = l.__importDefault(t(3)), E = (
              /** @class */
              function() {
                function h(y) {
                  this.editor = y;
                }
                return h.prototype.createAction = function(y, v) {
                  var s = this.editor, d = g.default(s.selection.getSelectionContainerElem()), c = g.default(d.elems[0]).parentUntilEditor("UL", s), m = g.default(d.elems[0]).parentUntilEditor("OL", s);
                  if (!(c || m)) {
                    var p = this.createTableHtml(y, v);
                    s.cmd.do("insertHTML", p);
                  }
                }, h.prototype.createTableHtml = function(y, v) {
                  for (var s = "", d = "", c = 0; c < y; c++) {
                    d = "";
                    for (var m = 0; m < v; m++)
                      c === 0 ? d = d + "<th></th>" : d = d + "<td></td>";
                    s = s + "<tr>" + d + "</tr>";
                  }
                  var p = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + s + ("</tbody></table>" + u.EMPTY_P);
                  return p;
                }, h;
              }()
            );
            i.default = E;
          },
          /* 392 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(393)), g = t(400);
            function E(h) {
              u.default(h), g.bindEventKeyboardEvent(h), g.bindClickEvent(h);
            }
            i.default = E;
          },
          /* 393 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(39)), E = l.__importDefault(t(394)), h = l.__importDefault(t(399)), y = t(7);
            function v(m) {
              var p;
              function A(S) {
                var D = new h.default(m), R = "menus.panelMenus.table.", P = function(C, M) {
                  return M === void 0 && (M = R), m.i18next.t(M + C);
                }, B = [{
                  // $elem: $("<span class='w-e-icon-trash-o'></span>"),
                  $elem: u.default("<span>" + P("删除表格") + "</span>"),
                  onClick: function(C, M) {
                    return C.selection.createRangeByElem(M), C.selection.restoreSelection(), C.cmd.do("insertHTML", y.EMPTY_P), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("添加行") + "</span>"),
                  onClick: function(C, M) {
                    var F = s(C);
                    if (F)
                      return !0;
                    var w = u.default(C.selection.getSelectionStartElem()), O = D.getRowNode(w.elems[0]);
                    if (!O)
                      return !0;
                    var U = Number(D.getCurrentRowIndex(M.elems[0], O)), b = D.getTableHtml(M.elems[0]), Q = D.getTableHtml(E.default.ProcessingRow(u.default(b), U).elems[0]);
                    return Q = c(M, Q), C.selection.createRangeByElem(M), C.selection.restoreSelection(), C.cmd.do("insertHTML", Q), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("删除行") + "</span>"),
                  onClick: function(C, M) {
                    var F = s(C);
                    if (F)
                      return !0;
                    var w = u.default(C.selection.getSelectionStartElem()), O = D.getRowNode(w.elems[0]);
                    if (!O)
                      return !0;
                    var U = Number(D.getCurrentRowIndex(M.elems[0], O)), b = D.getTableHtml(M.elems[0]), Q = E.default.DeleteRow(u.default(b), U).elems[0].children[0].children.length, j = "";
                    return C.selection.createRangeByElem(M), C.selection.restoreSelection(), Q === 0 ? j = y.EMPTY_P : j = D.getTableHtml(E.default.DeleteRow(u.default(b), U).elems[0]), j = c(M, j), C.cmd.do("insertHTML", j), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("添加列") + "</span>"),
                  onClick: function(C, M) {
                    var F = s(C);
                    if (F)
                      return !0;
                    var w = u.default(C.selection.getSelectionStartElem()), O = D.getCurrentColIndex(w.elems[0]), U = D.getTableHtml(M.elems[0]), b = D.getTableHtml(E.default.ProcessingCol(u.default(U), O).elems[0]);
                    return b = c(M, b), C.selection.createRangeByElem(M), C.selection.restoreSelection(), C.cmd.do("insertHTML", b), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("删除列") + "</span>"),
                  onClick: function(C, M) {
                    var F = s(C);
                    if (F)
                      return !0;
                    var w = u.default(C.selection.getSelectionStartElem()), O = D.getCurrentColIndex(w.elems[0]), U = D.getTableHtml(M.elems[0]), b = E.default.DeleteCol(u.default(U), O), Q = b.elems[0].children[0].children[0].children.length, j = "";
                    return C.selection.createRangeByElem(M), C.selection.restoreSelection(), Q === 0 ? j = y.EMPTY_P : j = D.getTableHtml(b.elems[0]), j = c(M, j), C.cmd.do("insertHTML", j), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("设置表头") + "</span>"),
                  onClick: function(C, M) {
                    var F = s(C);
                    if (F)
                      return !0;
                    var w = u.default(C.selection.getSelectionStartElem()), O = D.getRowNode(w.elems[0]);
                    if (!O)
                      return !0;
                    var U = Number(D.getCurrentRowIndex(M.elems[0], O));
                    U !== 0 && (U = 0);
                    var b = D.getTableHtml(M.elems[0]), Q = D.getTableHtml(E.default.setTheHeader(u.default(b), U, "th").elems[0]);
                    return Q = c(M, Q), C.selection.createRangeByElem(M), C.selection.restoreSelection(), C.cmd.do("insertHTML", Q), !0;
                  }
                }, {
                  $elem: u.default("<span>" + P("取消表头") + "</span>"),
                  onClick: function(C, M) {
                    var F = u.default(C.selection.getSelectionStartElem()), w = D.getRowNode(F.elems[0]);
                    if (!w)
                      return !0;
                    var O = Number(D.getCurrentRowIndex(M.elems[0], w));
                    O !== 0 && (O = 0);
                    var U = D.getTableHtml(M.elems[0]), b = D.getTableHtml(E.default.setTheHeader(u.default(U), O, "td").elems[0]);
                    return b = c(M, b), C.selection.createRangeByElem(M), C.selection.restoreSelection(), C.cmd.do("insertHTML", b), !0;
                  }
                }];
                p = new g.default(m, S, B), p.create();
              }
              function x() {
                p && (p.remove(), p = null);
              }
              return {
                showTableTooltip: A,
                hideTableTooltip: x
              };
            }
            function s(m) {
              var p = m.selection.getSelectionStartElem(), A = m.selection.getSelectionEndElem();
              return (p == null ? void 0 : p.elems[0]) !== (A == null ? void 0 : A.elems[0]);
            }
            function d(m) {
              var p = v(m), A = p.showTableTooltip, x = p.hideTableTooltip;
              m.txt.eventHooks.tableClickEvents.push(A), m.txt.eventHooks.clickEvents.push(x), m.txt.eventHooks.keyupEvents.push(x), m.txt.eventHooks.toolbarClickEvents.push(x), m.txt.eventHooks.menuClickEvents.push(x), m.txt.eventHooks.textScrollEvents.push(x);
            }
            i.default = d;
            function c(m, p) {
              var A = m.elems[0].nextSibling;
              return (!A || A.innerHTML === "<br>") && (p += "" + y.EMPTY_P), p;
            }
          },
          /* 394 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(45)), u = r(t(91)), g = r(t(4)), E = r(t(138));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var h = t(2), y = h.__importDefault(t(3));
            function v(x, S) {
              for (var D = A(x), R = (0, l.default)(Array.prototype).apply(D.children), P = R[0].children.length, B = document.createElement("tr"), I = 0; I < P; I++) {
                var C = document.createElement("td");
                B.appendChild(C);
              }
              return (0, u.default)(R).call(R, S + 1, 0, B), p(D, R), y.default(D.parentNode);
            }
            function s(x, S) {
              for (var D = A(x), R = (0, l.default)(Array.prototype).apply(D.children), P = function(C) {
                var M, F = [];
                for ((0, g.default)(M = (0, E.default)(R[C].children)).call(M, function(U) {
                  F.push(U);
                }); R[C].children.length !== 0; )
                  R[C].removeChild(R[C].children[0]);
                var w = y.default(F[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
                (0, u.default)(F).call(F, S + 1, 0, w);
                for (var O = 0; O < F.length; O++)
                  R[C].appendChild(F[O]);
              }, B = 0; B < R.length; B++)
                P(B);
              return p(D, R), y.default(D.parentNode);
            }
            function d(x, S) {
              var D = A(x), R = (0, l.default)(Array.prototype).apply(D.children);
              return (0, u.default)(R).call(R, S, 1), p(D, R), y.default(D.parentNode);
            }
            function c(x, S) {
              for (var D = A(x), R = (0, l.default)(Array.prototype).apply(D.children), P = function(C) {
                var M, F = [];
                for ((0, g.default)(M = (0, E.default)(R[C].children)).call(M, function(O) {
                  F.push(O);
                }); R[C].children.length !== 0; )
                  R[C].removeChild(R[C].children[0]);
                (0, u.default)(F).call(F, S, 1);
                for (var w = 0; w < F.length; w++)
                  R[C].appendChild(F[w]);
              }, B = 0; B < R.length; B++)
                P(B);
              return p(D, R), y.default(D.parentNode);
            }
            function m(x, S, D) {
              for (var R = A(x), P = (0, l.default)(Array.prototype).apply(R.children), B = P[S].children, I = document.createElement("tr"), C = function(w) {
                var O, U = document.createElement(D), b = B[w];
                (0, g.default)(O = (0, E.default)(b.childNodes)).call(O, function(Q) {
                  U.appendChild(Q);
                }), I.appendChild(U);
              }, M = 0; M < B.length; M++)
                C(M);
              return (0, u.default)(P).call(P, S, 1, I), p(R, P), y.default(R.parentNode);
            }
            function p(x, S) {
              for (; x.children.length !== 0; )
                x.removeChild(x.children[0]);
              for (var D = 0; D < S.length; D++)
                x.appendChild(S[D]);
            }
            function A(x) {
              var S = x.elems[0].children[0];
              return S.nodeName === "COLGROUP" && (S = x.elems[0].children[x.elems[0].children.length - 1]), S;
            }
            i.default = {
              ProcessingRow: v,
              ProcessingCol: s,
              DeleteRow: d,
              DeleteCol: c,
              setTheHeader: m
            };
          },
          /* 395 */
          /***/
          function(o, i, t) {
            var r = t(396);
            o.exports = r;
          },
          /* 396 */
          /***/
          function(o, i, t) {
            t(50), t(397);
            var r = t(9);
            o.exports = r.Array.from;
          },
          /* 397 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(398), l = t(115), u = !l(function(g) {
              Array.from(g);
            });
            r({ target: "Array", stat: !0, forced: u }, {
              from: f
            });
          },
          /* 398 */
          /***/
          function(o, i, t) {
            var r = t(40), f = t(31), l = t(114), u = t(112), g = t(35), E = t(69), h = t(113);
            o.exports = function(v) {
              var s = f(v), d = typeof this == "function" ? this : Array, c = arguments.length, m = c > 1 ? arguments[1] : void 0, p = m !== void 0, A = h(s), x = 0, S, D, R, P, B, I;
              if (p && (m = r(m, c > 2 ? arguments[2] : void 0, 2)), A != null && !(d == Array && u(A)))
                for (P = A.call(s), B = P.next, D = new d(); !(R = B.call(P)).done; x++)
                  I = p ? l(P, m, [R.value, x], !0) : R.value, E(D, x, I);
              else
                for (S = g(s.length), D = new d(S); S > x; x++)
                  I = p ? m(s[x], x) : s[x], E(D, x, I);
              return D.length = x, D;
            };
          },
          /* 399 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(138));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(3)), h = (
              /** @class */
              function() {
                function y(v) {
                  this.editor = v;
                }
                return y.prototype.getRowNode = function(v) {
                  var s, d = E.default(v).elems[0];
                  return d.parentNode && (d = (s = E.default(d).parentUntil("TR", d)) === null || s === void 0 ? void 0 : s.elems[0]), d;
                }, y.prototype.getCurrentRowIndex = function(v, s) {
                  var d, c = 0, m = v.children[0];
                  return m.nodeName === "COLGROUP" && (m = v.children[v.children.length - 1]), (0, l.default)(d = (0, u.default)(m.children)).call(d, function(p, A) {
                    p === s && (c = A);
                  }), c;
                }, y.prototype.getCurrentColIndex = function(v) {
                  var s, d, c = 0, m = E.default(v).getNodeName() === "TD" || E.default(v).getNodeName() === "TH" ? v : (d = E.default(v).parentUntil("TD", v)) === null || d === void 0 ? void 0 : d.elems[0], p = E.default(m).parent();
                  return (0, l.default)(s = (0, u.default)(p.elems[0].children)).call(s, function(A, x) {
                    A === m && (c = x);
                  }), c;
                }, y.prototype.getTableHtml = function(v) {
                  var s = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + E.default(v).html() + "</table>";
                  return s;
                }, y;
              }()
            );
            i.default = h;
          },
          /* 400 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.bindEventKeyboardEvent = i.bindClickEvent = void 0;
            var l = t(2), u = l.__importDefault(t(3));
            function g(y) {
              if (!y.length)
                return !1;
              var v = y.elems[0];
              return v.nodeName === "P" && v.innerHTML === "<br>";
            }
            function E(y) {
              function v(s, d) {
                if (d.detail >= 3) {
                  var c = window.getSelection();
                  if (c) {
                    var m = c.focusNode, p = c.anchorNode, A = u.default(p == null ? void 0 : p.parentElement);
                    if (!s.isContain(u.default(m))) {
                      var x = A.elems[0].tagName === "TD" ? A : A.parentUntilEditor("td", y);
                      if (x) {
                        var S = y.selection.getRange();
                        S == null || S.setEnd(x.elems[0], x.elems[0].childNodes.length), y.selection.restoreSelection();
                      }
                    }
                  }
                }
              }
              y.txt.eventHooks.tableClickEvents.push(v);
            }
            i.bindClickEvent = E;
            function h(y) {
              var v = y.txt, s = y.selection, d = v.eventHooks.keydownEvents;
              d.push(function(c) {
                y.selection.saveRange();
                var m = s.getSelectionContainerElem();
                if (m) {
                  var p = m.getNodeTop(y), A = p.length && p.prev().length ? p.prev() : null;
                  if (A && A.getNodeName() === "TABLE" && s.isSelectionEmpty() && s.getCursorPos() === 0 && c.keyCode === 8) {
                    var x = p.next(), S = !!x.length;
                    S && g(p) && (p.remove(), y.selection.setRangeToElem(x.elems[0])), c.preventDefault();
                  }
                }
              });
            }
            i.bindEventKeyboardEvent = h;
          },
          /* 401 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.formatCodeHtml = void 0;
            var u = t(2), g = u.__importDefault(t(38)), E = u.__importDefault(t(3)), h = t(6), y = u.__importDefault(t(402)), v = u.__importDefault(t(139)), s = u.__importDefault(t(33)), d = u.__importDefault(t(403));
            function c(p, A) {
              if (!A) return A;
              return A = S(A), A = x(A), A = h.replaceSpecialSymbol(A), A;
              function x(D) {
                var R = D.match(/<pre[\s|\S]+?\/pre>/g);
                return R === null || (0, l.default)(R).call(R, function(P) {
                  D = D.replace(P, P.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
                }), D;
              }
              function S(D) {
                var R, P = D.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
                if (!P || !P.length) return D;
                for (var B = (0, l.default)(R = h.deepClone(P)).call(R, function(C) {
                  return C = C.replace(/<span\sclass="hljs[^>]+>/, ""), C.replace(/<\/span>/, "");
                }), I = 0; I < P.length; I++)
                  D = D.replace(P[I], B[I]);
                return S(D);
              }
            }
            i.formatCodeHtml = c;
            var m = (
              /** @class */
              function(p) {
                u.__extends(A, p);
                function A(x) {
                  var S = this, D = E.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>');
                  return S = p.call(this, D, x) || this, d.default(x), S;
                }
                return A.prototype.insertLineCode = function(x) {
                  var S = this.editor, D = E.default("<code>" + x + "</code>");
                  S.cmd.do("insertElem", D), S.selection.createRangeByElem(D, !1), S.selection.restoreSelection();
                }, A.prototype.clickHandler = function() {
                  var x = this.editor, S = x.selection.getSelectionText();
                  this.isActive || (x.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(S));
                }, A.prototype.createPanel = function(x, S) {
                  var D = y.default(this.editor, x, S), R = new s.default(this, D);
                  R.create();
                }, A.prototype.tryChangeActive = function() {
                  var x = this.editor;
                  v.default(x) ? this.active() : this.unActive();
                }, A;
              }(g.default)
            );
            i.default = m;
          },
          /* 402 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(26));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = t(6), E = u.__importDefault(t(3)), h = u.__importDefault(t(139)), y = t(7);
            function v(s, d, c) {
              var m, p = g.getRandom("input-iframe"), A = g.getRandom("select"), x = g.getRandom("btn-ok");
              function S(B, I) {
                var C, M = h.default(s);
                M && D();
                var F = (C = s.selection.getSelectionStartElem()) === null || C === void 0 ? void 0 : C.elems[0].innerHTML;
                F && s.cmd.do("insertHTML", y.EMPTY_P);
                var w = I.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                s.highlight && (w = s.highlight.highlightAuto(w).value), s.cmd.do("insertHTML", '<pre><code class="' + B + '">' + w + "</code></pre>");
                var O = s.selection.getSelectionStartElem(), U = O == null ? void 0 : O.getNodeTop(s);
                (U == null ? void 0 : U.getNextSibling().elems.length) === 0 && E.default(y.EMPTY_P).insertAfter(U);
              }
              function D() {
                if (h.default(s)) {
                  var B = s.selection.getSelectionStartElem(), I = B == null ? void 0 : B.getNodeTop(s);
                  I && (s.selection.createRangeByElem(I), s.selection.restoreSelection());
                }
              }
              var R = function(I) {
                return s.i18next.t(I);
              }, P = {
                width: 500,
                height: 0,
                // panel 中可包含多个 tab
                tabs: [{
                  // tab 的标题
                  title: R("menus.panelMenus.code.插入代码"),
                  // 模板
                  tpl: `<div>
                        <select name="" id="` + A + `">
                            ` + (0, l.default)(m = s.config.languageType).call(m, function(B) {
                    return "<option " + (c == B ? "selected" : "") + ' value ="' + B + '">' + B + "</option>";
                  }) + `
                        </select>
                        <textarea id="` + p + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + d.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + x + '" class="right">' + (h.default(s) ? R("修改") : R("插入")) + `</button>
                        </div>
                    </div>`,
                  // 事件绑定
                  events: [
                    // 插入链接
                    {
                      selector: "#" + x,
                      type: "click",
                      fn: function() {
                        var I = document.getElementById(p), C = E.default("#" + A), M = C.val(), F = I.value;
                        if (F)
                          return h.default(s) ? !1 : (S(M, F), !0);
                      }
                    }
                  ]
                }]
              };
              return P;
            }
            i.default = v;
          },
          /* 403 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(404)), g = l.__importDefault(t(405));
            function E(h) {
              u.default(h), g.default(h);
            }
            i.default = E;
          },
          /* 404 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.createShowHideFn = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(39));
            function E(y) {
              var v;
              function s(c) {
                var m = "menus.panelMenus.code.", p = function(S, D) {
                  return D === void 0 && (D = m), y.i18next.t(D + S);
                }, A = [{
                  $elem: u.default("<span>" + p("删除代码") + "</span>"),
                  onClick: function(S, D) {
                    return D.remove(), !0;
                  }
                }];
                v = new g.default(y, c, A), v.create();
              }
              function d() {
                v && (v.remove(), v = null);
              }
              return {
                showCodeTooltip: s,
                hideCodeTooltip: d
              };
            }
            i.createShowHideFn = E;
            function h(y) {
              var v = E(y), s = v.showCodeTooltip, d = v.hideCodeTooltip;
              y.txt.eventHooks.codeClickEvents.push(s), y.txt.eventHooks.clickEvents.push(d), y.txt.eventHooks.toolbarClickEvents.push(d), y.txt.eventHooks.menuClickEvents.push(d), y.txt.eventHooks.textScrollEvents.push(d);
            }
            i.default = h;
          },
          /* 405 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = t(7), g = l.__importDefault(t(3));
            function E(h) {
              var y = h.$textElem, v = h.selection, s = h.txt, d = s.eventHooks.keydownEvents;
              d.push(function(c) {
                var m;
                if (c.keyCode === 40) {
                  var p = v.getSelectionContainerElem(), A = (m = y.children()) === null || m === void 0 ? void 0 : m.last();
                  if ((p == null ? void 0 : p.elems[0].tagName) === "XMP" && (A == null ? void 0 : A.elems[0].tagName) === "PRE") {
                    var x = g.default(u.EMPTY_P);
                    y.append(x);
                  }
                }
              }), d.push(function(c) {
                h.selection.saveRange();
                var m = v.getSelectionContainerElem();
                if (m) {
                  var p = m.getNodeTop(h), A = p == null ? void 0 : p.prev(), x = p == null ? void 0 : p.getNextSibling();
                  if (A.length && (A == null ? void 0 : A.getNodeName()) === "PRE" && x.length === 0 && v.getCursorPos() === 0 && c.keyCode === 8) {
                    var S = g.default(u.EMPTY_P);
                    y.append(S);
                  }
                }
              });
            }
            i.default = E;
          },
          /* 406 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(23)), g = l.__importDefault(t(3)), E = l.__importDefault(t(407)), h = t(6), y = t(7), v = (
              /** @class */
              function(s) {
                l.__extends(d, s);
                function d(c) {
                  var m = this, p = g.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>');
                  return m = s.call(this, p, c) || this, E.default(c), m;
                }
                return d.prototype.clickHandler = function() {
                  var c = this.editor, m = c.selection.getRange(), p = c.selection.getSelectionContainerElem();
                  if (p != null && p.length) {
                    var A = g.default(p.elems[0]), x = A.parentUntil("TABLE", p.elems[0]), S = A.children();
                    A.getNodeName() !== "CODE" && (x && g.default(x.elems[0]).getNodeName() === "TABLE" || S && S.length !== 0 && g.default(S.elems[0]).getNodeName() === "IMG" && !(m != null && m.collapsed) || this.createSplitLine());
                  }
                }, d.prototype.createSplitLine = function() {
                  var c = "<hr/>" + y.EMPTY_P;
                  h.UA.isFirefox && (c = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", c);
                }, d.prototype.tryChangeActive = function() {
                }, d;
              }(u.default)
            );
            i.default = v;
          },
          /* 407 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(408));
            function g(E) {
              u.default(E);
            }
            i.default = g;
          },
          /* 408 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = l.__importDefault(t(39));
            function E(y) {
              var v;
              function s(c) {
                var m = [{
                  $elem: u.default("<span>" + y.i18next.t("menus.panelMenus.删除") + "</span>"),
                  onClick: function(A, x) {
                    return A.selection.createRangeByElem(x), A.selection.restoreSelection(), A.cmd.do("delete"), !0;
                  }
                }];
                v = new g.default(y, c, m), v.create();
              }
              function d() {
                v && (v.remove(), v = null);
              }
              return {
                showSplitLineTooltip: s,
                hideSplitLineTooltip: d
              };
            }
            function h(y) {
              var v = E(y), s = v.showSplitLineTooltip, d = v.hideSplitLineTooltip;
              y.txt.eventHooks.splitLineEvents.push(s), y.txt.eventHooks.clickEvents.push(d), y.txt.eventHooks.keyupEvents.push(d), y.txt.eventHooks.toolbarClickEvents.push(d), y.txt.eventHooks.menuClickEvents.push(d), y.txt.eventHooks.textScrollEvents.push(d);
            }
            i.default = h;
          },
          /* 409 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = u.__importDefault(t(23)), h = t(98), y = u.__importDefault(t(415)), v = u.__importDefault(t(140)), s = (
              /** @class */
              function(d) {
                u.__extends(c, d);
                function c(m) {
                  var p = this, A = g.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
                  return p = d.call(this, A, m) || this, y.default(m), p;
                }
                return c.prototype.clickHandler = function() {
                  var m = this.editor;
                  h.isAllTodo(m) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
                }, c.prototype.tryChangeActive = function() {
                  h.isAllTodo(this.editor) ? this.active() : this.unActive();
                }, c.prototype.setTodo = function() {
                  var m = this.editor, p = m.selection.getSelectionRangeTopNodes();
                  (0, l.default)(p).call(p, function(A) {
                    var x, S = A == null ? void 0 : A.getNodeName();
                    if (S === "P") {
                      var D = v.default(A), R = D.getTodo(), P = (x = R.children()) === null || x === void 0 ? void 0 : x.getNode();
                      R.insertAfter(A), m.selection.moveCursor(P), A.remove();
                    }
                  }), this.tryChangeActive();
                }, c.prototype.cancelTodo = function() {
                  var m = this.editor, p = m.selection.getSelectionRangeTopNodes();
                  (0, l.default)(p).call(p, function(A) {
                    var x, S, D, R = (S = (x = A.childNodes()) === null || x === void 0 ? void 0 : x.childNodes()) === null || S === void 0 ? void 0 : S.clone(!0), P = g.default("<p></p>");
                    P.append(R), P.insertAfter(A), (D = P.childNodes()) === null || D === void 0 || D.get(0).remove(), m.selection.moveCursor(P.getNode()), A.remove();
                  });
                }, c;
              }(E.default)
            );
            i.default = s;
          },
          /* 410 */
          /***/
          function(o, i, t) {
            o.exports = t(411);
          },
          /* 411 */
          /***/
          function(o, i, t) {
            var r = t(412);
            o.exports = r;
          },
          /* 412 */
          /***/
          function(o, i, t) {
            var r = t(413), f = Array.prototype;
            o.exports = function(l) {
              var u = l.every;
              return l === f || l instanceof Array && u === f.every ? r : u;
            };
          },
          /* 413 */
          /***/
          function(o, i, t) {
            t(414);
            var r = t(15);
            o.exports = r("Array").every;
          },
          /* 414 */
          /***/
          function(o, i, t) {
            var r = t(5), f = t(32).every, l = t(67), u = t(22), g = l("every"), E = u("every");
            r({ target: "Array", proto: !0, forced: !g || !E }, {
              every: function(y) {
                return f(this, y, arguments.length > 1 ? arguments[1] : void 0);
              }
            });
          },
          /* 415 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3)), E = t(98), h = u.__importDefault(t(140)), y = t(98), v = t(7);
            function s(d) {
              function c(x) {
                var S, D;
                if (E.isAllTodo(d)) {
                  x.preventDefault();
                  var R = d.selection, P = R.getSelectionRangeTopNodes()[0], B = (S = P.childNodes()) === null || S === void 0 ? void 0 : S.get(0), I = (D = window.getSelection()) === null || D === void 0 ? void 0 : D.anchorNode, C = R.getRange();
                  if (!(C != null && C.collapsed)) {
                    var M = C == null ? void 0 : C.commonAncestorContainer.childNodes, F = C == null ? void 0 : C.startContainer, w = C == null ? void 0 : C.endContainer, O = C == null ? void 0 : C.startOffset, U = C == null ? void 0 : C.endOffset, b = 0, Q = 0, j = [];
                    M == null || (0, l.default)(M).call(M, function(lt, mt) {
                      lt.contains(F) && (b = mt), lt.contains(w) && (Q = mt);
                    }), Q - b > 1 && (M == null || (0, l.default)(M).call(M, function(lt, mt) {
                      mt <= b || mt >= Q || j.push(lt);
                    }), (0, l.default)(j).call(j, function(lt) {
                      lt.remove();
                    })), y.dealTextNode(F, O), y.dealTextNode(w, U, !1), d.selection.moveCursor(w, 0);
                  }
                  if (P.text() === "") {
                    var z = g.default(v.EMPTY_P);
                    z.insertAfter(P), R.moveCursor(z.getNode()), P.remove();
                    return;
                  }
                  var W = R.getCursorPos(), q = E.getCursorNextNode(B == null ? void 0 : B.getNode(), I, W), ut = h.default(g.default(q)), _ = ut.getInputContainer(), ft = _.parent().getNode(), at = ut.getTodo(), tt = _.getNode().nextSibling;
                  if ((B == null ? void 0 : B.text()) === "" && (B == null || B.append(g.default("<br>"))), at.insertAfter(P), !tt || (tt == null ? void 0 : tt.textContent) === "") {
                    if ((tt == null ? void 0 : tt.nodeName) !== "BR") {
                      var et = g.default("<br>");
                      et.insertAfter(_);
                    }
                    R.moveCursor(ft, 1);
                  } else
                    R.moveCursor(ft);
                }
              }
              function m(x) {
                var S, D;
                if (E.isAllTodo(d)) {
                  var R = d.selection, P = R.getSelectionRangeTopNodes()[0], B = (S = P.childNodes()) === null || S === void 0 ? void 0 : S.getNode(), I = g.default("<p></p>"), C = I.getNode(), M = (D = window.getSelection()) === null || D === void 0 ? void 0 : D.anchorNode, F = R.getCursorPos(), w = M.previousSibling;
                  if (P.text() === "") {
                    x.preventDefault();
                    var O = g.default(v.EMPTY_P);
                    O.insertAfter(P), P.remove(), R.moveCursor(O.getNode(), 0);
                    return;
                  }
                  if ((w == null ? void 0 : w.nodeName) === "SPAN" && w.childNodes[0].nodeName === "INPUT" && F === 0) {
                    var U;
                    x.preventDefault(), B == null || (0, l.default)(U = B.childNodes).call(U, function(b, Q) {
                      Q !== 0 && C.appendChild(b.cloneNode(!0));
                    }), I.insertAfter(P), P.remove();
                  }
                }
              }
              function p() {
                var x = d.selection, S = x.getSelectionRangeTopNodes()[0];
                S && y.isTodo(S) && S.text() === "" && (g.default(v.EMPTY_P).insertAfter(S), S.remove());
              }
              function A(x) {
                x && x.target instanceof HTMLInputElement && x.target.type === "checkbox" && (x.target.checked ? x.target.setAttribute("checked", "true") : x.target.removeAttribute("checked"));
              }
              d.txt.eventHooks.enterDownEvents.push(c), d.txt.eventHooks.deleteUpEvents.push(p), d.txt.eventHooks.deleteDownEvents.push(m), d.txt.eventHooks.clickEvents.push(A);
            }
            i.default = s;
          },
          /* 416 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.selectorValidator = void 0;
            var l = t(2), u = l.__importDefault(t(3)), g = t(6), E = t(7), h = l.__importDefault(t(130)), y = {
              border: "1px solid #c9d8db",
              toolbarBgColor: "#FFF",
              toolbarBottomBorder: "1px solid #EEE"
            };
            function v(d) {
              var c = d.toolbarSelector, m = u.default(c), p = d.textSelector, A = d.config, x = A.height, S = d.i18next, D = u.default("<div></div>"), R = u.default("<div></div>"), P, B, I = null;
              p == null ? (B = m.children(), m.append(D).append(R), D.css("background-color", y.toolbarBgColor).css("border", y.border).css("border-bottom", y.toolbarBottomBorder), R.css("border", y.border).css("border-top", "none").css("height", x + "px")) : (m.append(D), I = u.default(p).children(), u.default(p).append(R), B = R.children()), P = u.default("<div></div>"), P.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
              var C, M = d.config.placeholder;
              M !== h.default.placeholder ? C = u.default("<div>" + M + "</div>") : C = u.default("<div>" + S.t(M) + "</div>"), C.addClass("placeholder"), B && B.length ? (P.append(B), C.hide()) : P.append(u.default(E.EMPTY_P)), I && I.length && (P.append(I), C.hide()), R.append(P), R.append(C), D.addClass("w-e-toolbar").css("z-index", d.zIndex.get("toolbar")), R.addClass("w-e-text-container"), R.css("z-index", d.zIndex.get()), P.addClass("w-e-text");
              var F = g.getRandom("toolbar-elem");
              D.attr("id", F);
              var w = g.getRandom("text-elem");
              P.attr("id", w);
              var O = R.getBoundingClientRect().height, U = P.getBoundingClientRect().height;
              O !== U && P.css("min-height", O + "px"), d.$toolbarElem = D, d.$textContainerElem = R, d.$textElem = P, d.toolbarElemId = F, d.textElemId = w;
            }
            i.default = v;
            function s(d) {
              var c = "data-we-id", m = /^wangEditor-\d+$/, p = d.textSelector, A = d.toolbarSelector, x = {
                bar: u.default("<div></div>"),
                text: u.default("<div></div>")
              };
              if (A == null)
                throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
              if (x.bar = u.default(A), !x.bar.elems.length)
                throw new Error("无效的节点选择器：" + A);
              if (m.test(x.bar.attr(c)))
                throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
              if (p) {
                if (x.text = u.default(p), !x.text.elems.length)
                  throw new Error("无效的节点选择器：" + p);
                if (m.test(x.text.attr(c)))
                  throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
              }
              x.bar.attr(c, d.id), x.text.attr(c, d.id), d.beforeDestroy(function() {
                x.bar.removeAttr(c), x.text.removeAttr(c);
              });
            }
            i.selectorValidator = s;
          },
          /* 417 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(3)), g = t(7);
            function E(h, y) {
              var v = h.$textElem, s = v.children();
              if (!s || !s.length) {
                v.append(u.default(g.EMPTY_P)), E(h);
                return;
              }
              var d = s.last();
              if (y) {
                var c = d.html().toLowerCase(), m = d.getNodeName();
                if (c !== "<br>" && c !== "<br/>" || m !== "P") {
                  v.append(u.default(g.EMPTY_P)), E(h);
                  return;
                }
              }
              h.selection.createRangeByElem(d, !1, !0), h.config.focus ? h.selection.restoreSelection() : h.selection.clearWindowSelectionRange();
            }
            i.default = E;
          },
          /* 418 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3));
            function E(c) {
              h(c), y(c), v(c);
            }
            function h(c) {
              c.txt.eventHooks.changeEvents.push(function() {
                var m = c.config.onchange;
                if (m) {
                  var p = c.txt.html() || "";
                  c.isFocus = !0, m(p);
                }
                c.txt.togglePlaceholder();
              });
            }
            function y(c) {
              c.isFocus = !1;
              function m(p) {
                var A = p.target, x = g.default(A), S = c.$textElem, D = c.$toolbarElem, R = S.isContain(x), P = D.isContain(x), B = D.elems[0] == p.target;
                if (R)
                  c.isFocus || d(c), c.isFocus = !0;
                else {
                  if (P && !B || !c.isFocus)
                    return;
                  s(c), c.isFocus = !1;
                }
              }
              document.activeElement === c.$textElem.elems[0] && c.config.focus && (d(c), c.isFocus = !0), g.default(document).on("click", m), c.beforeDestroy(function() {
                g.default(document).off("click", m);
              });
            }
            function v(c) {
              c.$textElem.on("compositionstart", function() {
                c.isComposing = !0, c.txt.togglePlaceholder();
              }).on("compositionend", function() {
                c.isComposing = !1, c.txt.togglePlaceholder();
              });
            }
            function s(c) {
              var m, p = c.config, A = p.onblur, x = c.txt.html() || "";
              (0, l.default)(m = c.txt.eventHooks.onBlurEvents).call(m, function(S) {
                return S();
              }), A(x);
            }
            function d(c) {
              var m = c.config, p = m.onfocus, A = c.txt.html() || "";
              p(A);
            }
            i.default = E;
          },
          /* 419 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            function l(u) {
              var g = u.config, E = g.lang, h = g.languages;
              if (u.i18next != null) {
                try {
                  u.i18next.init({
                    ns: "wangEditor",
                    lng: E,
                    defaultNS: "wangEditor",
                    resources: h
                  });
                } catch (y) {
                  throw new Error("i18next:" + y);
                }
                return;
              }
              u.i18next = {
                t: function(v) {
                  var s = v.split(".");
                  return s[s.length - 1];
                }
              };
            }
            i.default = l;
          },
          /* 420 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.setUnFullScreen = i.setFullScreen = void 0;
            var u = t(2), g = u.__importDefault(t(3));
            t(421);
            var E = "w-e-icon-fullscreen", h = "w-e-icon-fullscreen_exit", y = "w-e-full-screen-editor";
            i.setFullScreen = function(s) {
              var d = g.default(s.toolbarSelector), c = s.$textContainerElem, m = s.$toolbarElem, p = (0, l.default)(m).call(m, "i." + E), A = s.config;
              p.removeClass(E), p.addClass(h), d.addClass(y), d.css("z-index", A.zIndexFullScreen);
              var x = m.getBoundingClientRect();
              c.css("height", "calc(100% - " + x.height + "px)");
            }, i.setUnFullScreen = function(s) {
              var d = g.default(s.toolbarSelector), c = s.$textContainerElem, m = s.$toolbarElem, p = (0, l.default)(m).call(m, "i." + h), A = s.config;
              p.removeClass(h), p.addClass(E), d.removeClass(y), d.css("z-index", "auto"), c.css("height", A.height + "px");
            };
            var v = function(d) {
              if (!d.textSelector && d.config.showFullScreen) {
                var c = d.$toolbarElem, m = g.default(`<div class="w-e-menu" data-title="全屏">
            <i class="` + E + `"></i>
        </div>`);
                m.on("click", function(p) {
                  var A, x = (0, l.default)(A = g.default(p.currentTarget)).call(A, "i");
                  x.hasClass(E) ? (m.attr("data-title", "取消全屏"), i.setFullScreen(d)) : (m.attr("data-title", "全屏"), i.setUnFullScreen(d));
                }), c.append(m);
              }
            };
            i.default = v;
          },
          /* 421 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(422);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 422 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), o.exports = i;
          },
          /* 423 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = function(E, h) {
              var y, v = E.isEnable ? E.$textElem : (0, l.default)(y = E.$textContainerElem).call(y, ".w-e-content-mantle"), s = (0, l.default)(v).call(v, "[id='" + h + "']"), d = s.getOffsetData().top;
              v.scrollTop(d);
            };
            i.default = u;
          },
          /* 424 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(129)), g = {
              menu: 2,
              panel: 2,
              toolbar: 1,
              tooltip: 1,
              textContainer: 1
            }, E = (
              /** @class */
              function() {
                function h() {
                  this.tier = g, this.baseZIndex = u.default.zIndex;
                }
                return h.prototype.get = function(y) {
                  return y && this.tier[y] ? this.baseZIndex + this.tier[y] : this.baseZIndex;
                }, h.prototype.init = function(y) {
                  this.baseZIndex == u.default.zIndex && (this.baseZIndex = y.config.zIndex);
                }, h;
              }()
            );
            i.default = E;
          },
          /* 425 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(70)), u = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var g = t(2), E = g.__importDefault(t(426)), h = t(6), y = t(7);
            function v(d, c) {
              return (0, l.default)(d).call(d, function(m) {
                var p = m.type, A = m.target, x = m.attributeName;
                return p != "attributes" || p == "attributes" && (x == "contenteditable" || A != c);
              });
            }
            var s = (
              /** @class */
              function(d) {
                g.__extends(c, d);
                function c(m) {
                  var p = d.call(this, function(A, x) {
                    var S;
                    if (A = v(A, x.target), (S = p.data).push.apply(S, A), m.isCompatibleMode)
                      p.asyncSave();
                    else if (!m.isComposing)
                      return p.asyncSave();
                  }) || this;
                  return p.editor = m, p.data = [], p.asyncSave = y.EMPTY_FN, p;
                }
                return c.prototype.save = function() {
                  this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
                }, c.prototype.emit = function() {
                  var m;
                  (0, u.default)(m = this.editor.txt.eventHooks.changeEvents).call(m, function(p) {
                    return p();
                  });
                }, c.prototype.observe = function() {
                  var m = this;
                  d.prototype.observe.call(this, this.editor.$textElem.elems[0]);
                  var p = this.editor.config.onchangeTimeout;
                  this.asyncSave = h.debounce(function() {
                    m.save();
                  }, p), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
                    m.asyncSave();
                  });
                }, c;
              }(E.default)
            );
            i.default = s;
          },
          /* 426 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = (
              /** @class */
              function() {
                function u(g, E) {
                  var h = this;
                  this.options = {
                    subtree: !0,
                    childList: !0,
                    attributes: !0,
                    attributeOldValue: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                  }, this.callback = function(y) {
                    g(y, h);
                  }, this.observer = new MutationObserver(this.callback), E && (this.options = E);
                }
                return (0, f.default)(u.prototype, "target", {
                  get: function() {
                    return this.node;
                  },
                  enumerable: !1,
                  configurable: !0
                }), u.prototype.observe = function(g) {
                  this.node instanceof Node || (this.node = g, this.connect());
                }, u.prototype.connect = function() {
                  if (this.node)
                    return this.observer.observe(this.node, this.options), this;
                  throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点");
                }, u.prototype.disconnect = function() {
                  var g = this.observer.takeRecords();
                  g.length && this.callback(g), this.observer.disconnect();
                }, u;
              }()
            );
            i.default = l;
          },
          /* 427 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(428)), g = l.__importDefault(t(435)), E = l.__importDefault(t(436)), h = (
              /** @class */
              function() {
                function y(v) {
                  this.editor = v, this.content = new u.default(v), this.scroll = new g.default(v), this.range = new E.default(v);
                }
                return (0, f.default)(y.prototype, "size", {
                  /**
                   *  获取缓存中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                   */
                  get: function() {
                    return this.scroll.size;
                  },
                  enumerable: !1,
                  configurable: !0
                }), y.prototype.observe = function() {
                  this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
                }, y.prototype.save = function(v) {
                  v.length && (this.content.save(v), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
                }, y.prototype.revoke = function() {
                  this.editor.change.disconnect();
                  var v = this.content.revoke();
                  v && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), v && this.editor.change.emit();
                }, y.prototype.restore = function() {
                  this.editor.change.disconnect();
                  var v = this.content.restore();
                  v && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), v && this.editor.change.emit();
                }, y;
              }()
            );
            i.default = h;
          },
          /* 428 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(429)), g = l.__importDefault(t(433)), E = (
              /** @class */
              function() {
                function h(y) {
                  this.editor = y;
                }
                return h.prototype.observe = function() {
                  this.editor.isCompatibleMode ? this.cache = new g.default(this.editor) : this.cache = new u.default(this.editor), this.cache.observe();
                }, h.prototype.save = function(y) {
                  this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(y);
                }, h.prototype.revoke = function() {
                  var y;
                  return (y = this.cache) === null || y === void 0 ? void 0 : y.revoke();
                }, h.prototype.restore = function() {
                  var y;
                  return (y = this.cache) === null || y === void 0 ? void 0 : y.restore();
                }, h;
              }()
            );
            i.default = E;
          },
          /* 429 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(99)), g = l.__importDefault(t(431)), E = t(432), h = (
              /** @class */
              function(y) {
                l.__extends(v, y);
                function v(s) {
                  var d = y.call(this, s.config.historyMaxSize) || this;
                  return d.editor = s, d;
                }
                return v.prototype.observe = function() {
                  this.resetMaxSize(this.editor.config.historyMaxSize);
                }, v.prototype.compile = function(s) {
                  return this.save(g.default(s)), this;
                }, v.prototype.revoke = function() {
                  return y.prototype.revoke.call(this, function(s) {
                    E.revoke(s);
                  });
                }, v.prototype.restore = function() {
                  return y.prototype.restore.call(this, function(s) {
                    E.restore(s);
                  });
                }, v;
              }(u.default)
            );
            i.default = h;
          },
          /* 430 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.CeilStack = void 0;
            var l = (
              /** @class */
              function() {
                function u(g) {
                  g === void 0 && (g = 0), this.data = [], this.max = 0, this.reset = !1, g = Math.abs(g), g && (this.max = g);
                }
                return u.prototype.resetMax = function(g) {
                  g = Math.abs(g), !this.reset && !isNaN(g) && (this.max = g, this.reset = !0);
                }, (0, f.default)(u.prototype, "size", {
                  /**
                   * 当前栈中的数据条数
                   */
                  get: function() {
                    return this.data.length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), u.prototype.instack = function(g) {
                  return this.data.unshift(g), this.max && this.size > this.max && (this.data.length = this.max), this;
                }, u.prototype.outstack = function() {
                  return this.data.shift();
                }, u.prototype.clear = function() {
                  return this.data.length = 0, this;
                }, u;
              }()
            );
            i.CeilStack = l;
          },
          /* 431 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(27));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.compliePosition = i.complieNodes = i.compileValue = i.compileType = void 0;
            var g = t(6);
            function E(m) {
              switch (m) {
                case "childList":
                  return "node";
                case "attributes":
                  return "attr";
                default:
                  return "text";
              }
            }
            i.compileType = E;
            function h(m) {
              switch (m.type) {
                case "attributes":
                  return m.target.getAttribute(m.attributeName) || "";
                case "characterData":
                  return m.target.textContent;
                default:
                  return "";
              }
            }
            i.compileValue = h;
            function y(m) {
              var p = {};
              return m.addedNodes.length && (p.add = g.toArray(m.addedNodes)), m.removedNodes.length && (p.remove = g.toArray(m.removedNodes)), p;
            }
            i.complieNodes = y;
            function v(m) {
              var p;
              return m.previousSibling ? p = {
                type: "before",
                target: m.previousSibling
              } : m.nextSibling ? p = {
                type: "after",
                target: m.nextSibling
              } : p = {
                type: "parent",
                target: m.target
              }, p;
            }
            i.compliePosition = v;
            var s = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
            function d(m) {
              var p = [], A = !1, x = [];
              return (0, l.default)(m).call(m, function(S, D) {
                var R = {
                  type: E(S.type),
                  target: S.target,
                  attr: S.attributeName || "",
                  value: h(S) || "",
                  oldValue: S.oldValue || "",
                  nodes: y(S),
                  position: v(S)
                };
                if (p.push(R), !!g.UA.isFirefox) {
                  if (A && S.addedNodes.length && S.addedNodes[0].nodeType == 1) {
                    var P = S.addedNodes[0], B = {
                      type: "node",
                      target: P,
                      attr: "",
                      value: "",
                      oldValue: "",
                      nodes: {
                        add: [A]
                      },
                      position: {
                        type: "parent",
                        target: P
                      }
                    };
                    (0, u.default)(s).call(s, P.nodeName) != -1 ? (B.nodes.add = g.toArray(P.childNodes), p.push(B)) : A.nodeType == 3 ? (c(P, x) && (B.nodes.add = g.toArray(P.childNodes)), p.push(B)) : (0, u.default)(s).call(s, S.target.nodeName) == -1 && c(P, x) && (B.nodes.add = g.toArray(P.childNodes), p.push(B));
                  }
                  R.type == "node" && S.removedNodes.length == 1 ? (A = S.removedNodes[0], x.push(A)) : (A = !1, x.length = 0);
                }
              }), p;
            }
            i.default = d;
            function c(m, p) {
              for (var A = 0, x = p.length - 1; x > 0 && m.contains(p[x]); x--)
                A++;
              return A;
            }
          },
          /* 432 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(4)), u = r(t(94));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.restore = i.revoke = void 0;
            function g(x, S) {
              var D = x.position.target;
              switch (x.position.type) {
                // reference 在这些节点的前面
                case "before":
                  D.nextSibling ? (D = D.nextSibling, (0, l.default)(S).call(S, function(R) {
                    x.target.insertBefore(R, D);
                  })) : (0, l.default)(S).call(S, function(R) {
                    x.target.appendChild(R);
                  });
                  break;
                // reference 在这些节点的后面
                case "after":
                  (0, l.default)(S).call(S, function(R) {
                    x.target.insertBefore(R, D);
                  });
                  break;
                // parent
                // reference 是这些节点的父节点
                default:
                  (0, l.default)(S).call(S, function(R) {
                    D.appendChild(R);
                  });
                  break;
              }
            }
            function E(x) {
              for (var S = 0, D = (0, u.default)(x.nodes); S < D.length; S++) {
                var R = D[S], P = R[0], B = R[1];
                switch (P) {
                  // 反向操作，将这些节点从 DOM 中移除
                  case "add":
                    (0, l.default)(B).call(B, function(I) {
                      x.target.removeChild(I);
                    });
                    break;
                  // remove（反向操作，将这些节点添加到 DOM 中）
                  default: {
                    g(x, B);
                    break;
                  }
                }
              }
            }
            function h(x) {
              var S = x.target;
              x.oldValue == null ? S.removeAttribute(x.attr) : S.setAttribute(x.attr, x.oldValue);
            }
            function y(x) {
              x.target.textContent = x.oldValue;
            }
            var v = {
              node: E,
              text: y,
              attr: h
            };
            function s(x) {
              for (var S = x.length - 1; S > -1; S--) {
                var D = x[S];
                v[D.type](D);
              }
            }
            i.revoke = s;
            function d(x) {
              for (var S = 0, D = (0, u.default)(x.nodes); S < D.length; S++) {
                var R = D[S], P = R[0], B = R[1];
                switch (P) {
                  case "add": {
                    g(x, B);
                    break;
                  }
                  // remove
                  default: {
                    (0, l.default)(B).call(B, function(I) {
                      I.parentNode.removeChild(I);
                    });
                    break;
                  }
                }
              }
            }
            function c(x) {
              x.target.textContent = x.value;
            }
            function m(x) {
              x.target.setAttribute(x.attr, x.value);
            }
            var p = {
              node: d,
              text: c,
              attr: m
            };
            function A(x) {
              for (var S = 0, D = x; S < D.length; S++) {
                var R = D[S];
                p[R.type](R);
              }
            }
            i.restore = A;
          },
          /* 433 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(434), u = (
              /** @class */
              function() {
                function g(E) {
                  this.editor = E, this.data = new l.TailChain();
                }
                return g.prototype.observe = function() {
                  this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
                }, g.prototype.save = function() {
                  return this.data.insertLast(this.editor.$textElem.html()), this;
                }, g.prototype.revoke = function() {
                  var E = this.data.prev();
                  return E ? (this.editor.$textElem.html(E), !0) : !1;
                }, g.prototype.restore = function() {
                  var E = this.data.next();
                  return E ? (this.editor.$textElem.html(E), !0) : !1;
                }, g;
              }()
            );
            i.default = u;
          },
          /* 434 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(91));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.TailChain = void 0;
            var u = (
              /** @class */
              function() {
                function g() {
                  this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
                }
                return g.prototype.resetMax = function(E) {
                  E = Math.abs(E), E && (this.max = E);
                }, (0, f.default)(g.prototype, "size", {
                  /**
                   * 当前链表的长度
                   */
                  get: function() {
                    return this.data.length;
                  },
                  enumerable: !1,
                  configurable: !0
                }), g.prototype.insertLast = function(E) {
                  if (this.isRe) {
                    var h;
                    (0, l.default)(h = this.data).call(h, this.point + 1), this.isRe = !1;
                  }
                  for (this.data.push(E); this.max && this.size > this.max; )
                    this.data.shift();
                  return this.point = this.size - 1, this;
                }, g.prototype.current = function() {
                  return this.data[this.point];
                }, g.prototype.prev = function() {
                  if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
                    this.point = 0;
                    return;
                  }
                  return this.current();
                }, g.prototype.next = function() {
                  if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
                    this.point = this.size - 1;
                    return;
                  }
                  return this.current();
                }, g;
              }()
            );
            i.TailChain = u;
          },
          /* 435 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(99)), g = (
              /** @class */
              function(E) {
                l.__extends(h, E);
                function h(y) {
                  var v = E.call(this, y.config.historyMaxSize) || this;
                  return v.editor = y, v.last = 0, v.target = y.$textElem.elems[0], v;
                }
                return h.prototype.observe = function() {
                  var y = this;
                  this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
                    y.last = y.target.scrollTop;
                  }), this.resetMaxSize(this.editor.config.historyMaxSize);
                }, h.prototype.save = function() {
                  return E.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
                }, h.prototype.revoke = function() {
                  var y = this;
                  return E.prototype.revoke.call(this, function(v) {
                    y.target.scrollTop = v[0];
                  });
                }, h.prototype.restore = function() {
                  var y = this;
                  return E.prototype.restore.call(this, function(v) {
                    y.target.scrollTop = v[1];
                  });
                }, h;
              }(u.default)
            );
            i.default = g;
          },
          /* 436 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = t(2), u = l.__importDefault(t(99)), g = l.__importDefault(t(3)), E = t(6);
            function h(v) {
              return {
                start: [v.startContainer, v.startOffset],
                end: [v.endContainer, v.endOffset],
                root: v.commonAncestorContainer,
                collapsed: v.collapsed
              };
            }
            var y = (
              /** @class */
              function(v) {
                l.__extends(s, v);
                function s(d) {
                  var c = v.call(this, d.config.historyMaxSize) || this;
                  return c.editor = d, c.lastRange = h(document.createRange()), c.root = d.$textElem.elems[0], c.updateLastRange = E.debounce(function() {
                    c.lastRange = h(c.rangeHandle);
                  }, d.config.onchangeTimeout), c;
                }
                return (0, f.default)(s.prototype, "rangeHandle", {
                  /**
                   * 获取 Range 对象
                   */
                  get: function() {
                    var c = document.getSelection();
                    return c && c.rangeCount ? c.getRangeAt(0) : document.createRange();
                  },
                  enumerable: !1,
                  configurable: !0
                }), s.prototype.observe = function() {
                  var d = this;
                  this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
                  function c() {
                    var p = d.rangeHandle;
                    (d.root === p.commonAncestorContainer || d.root.contains(p.commonAncestorContainer)) && (d.editor.isComposing || d.updateLastRange());
                  }
                  function m(p) {
                    (p.key == "Backspace" || p.key == "Delete") && d.updateLastRange();
                  }
                  g.default(document).on("selectionchange", c), this.editor.beforeDestroy(function() {
                    g.default(document).off("selectionchange", c);
                  }), d.editor.$textElem.on("keydown", m);
                }, s.prototype.save = function() {
                  var d = h(this.rangeHandle);
                  return v.prototype.save.call(this, [this.lastRange, d]), this.lastRange = d, this;
                }, s.prototype.set = function(d) {
                  try {
                    if (d) {
                      var c = this.rangeHandle;
                      return c.setStart.apply(c, d.start), c.setEnd.apply(c, d.end), this.editor.menus.changeActive(), !0;
                    }
                  } catch {
                    return !1;
                  }
                  return !1;
                }, s.prototype.revoke = function() {
                  var d = this;
                  return v.prototype.revoke.call(this, function(c) {
                    d.set(c[0]);
                  });
                }, s.prototype.restore = function() {
                  var d = this;
                  return v.prototype.restore.call(this, function(c) {
                    d.set(c[1]);
                  });
                }, s;
              }(u.default)
            );
            i.default = y;
          },
          /* 437 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(29));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var u = t(2), g = u.__importDefault(t(3));
            t(438);
            function E(h) {
              var y = !1, v, s;
              h.txt.eventHooks.changeEvents.push(function() {
                y && (0, l.default)(v).call(v, ".w-e-content-preview").html(h.$textElem.html());
              });
              function d() {
                if (!y) {
                  h.$textElem.hide();
                  var m = h.zIndex.get("textContainer"), p = h.txt.html();
                  v = g.default('<div class="w-e-content-mantle" style="z-index:' + m + `">
                <div class="w-e-content-preview w-e-text">` + p + `</div>
            </div>`), h.$textContainerElem.append(v);
                  var A = h.zIndex.get("menu");
                  s = g.default('<div class="w-e-menue-mantle" style="z-index:' + A + '"></div>'), h.$toolbarElem.append(s), y = !0, h.isEnable = !1;
                }
              }
              function c() {
                y && (v.remove(), s.remove(), h.$textElem.show(), y = !1, h.isEnable = !0);
              }
              return {
                disable: d,
                enable: c
              };
            }
            i.default = E;
          },
          /* 438 */
          /***/
          function(o, i, t) {
            var r = t(20), f = t(439);
            f = f.__esModule ? f.default : f, typeof f == "string" && (f = [[o.i, f, ""]]);
            var l = {};
            l.insert = "head", l.singleton = !1, r(f, l), o.exports = f.locals || {};
          },
          /* 439 */
          /***/
          function(o, i, t) {
            var r = t(21);
            i = r(!1), i.push([o.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), o.exports = i;
          },
          /* 440 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
            var l = (
              /** @class */
              function() {
                function u(g) {
                  var E = this;
                  this.editor = g;
                  var h = function() {
                    var v = document.activeElement;
                    v === g.$textElem.elems[0] && E.emit();
                  };
                  window.document.addEventListener("selectionchange", h), this.editor.beforeDestroy(function() {
                    window.document.removeEventListener("selectionchange", h);
                  });
                }
                return u.prototype.emit = function() {
                  var g, E = this.editor.config.onSelectionChange;
                  if (E) {
                    var h = this.editor.selection;
                    h.saveRange(), h.isSelectionEmpty() || E({
                      // 当前文本
                      text: h.getSelectionText(),
                      // 当前的html
                      html: (g = h.getSelectionContainerElem()) === null || g === void 0 ? void 0 : g.elems[0].innerHTML,
                      // select对象
                      selection: h
                    });
                  }
                }, u;
              }()
            );
            i.default = l;
          },
          /* 441 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1)), l = r(t(128)), u = r(t(94)), g = r(t(4));
            (0, f.default)(i, "__esModule", {
              value: !0
            }), i.registerPlugin = void 0;
            var E = t(2), h = E.__importDefault(t(87)), y = t(6);
            function v(d, c, m) {
              if (!d)
                throw new TypeError("name is not define");
              if (!c)
                throw new TypeError("options is not define");
              if (!c.intention)
                throw new TypeError("options.intention is not define");
              if (c.intention && typeof c.intention != "function")
                throw new TypeError("options.intention is not function");
              m[d] && console.warn("plugin " + d + " 已存在，已覆盖。"), m[d] = c;
            }
            i.registerPlugin = v;
            function s(d) {
              var c = (0, l.default)({}, y.deepClone(h.default.globalPluginsFunctionList), y.deepClone(d.pluginsFunctionList)), m = (0, u.default)(c);
              (0, g.default)(m).call(m, function(p) {
                var A = p[0], x = p[1];
                console.info("plugin " + A + " initializing");
                var S = x.intention, D = x.config;
                S(d, D), console.info("plugin " + A + " initialization complete");
              });
            }
            i.default = s;
          },
          /* 442 */
          /***/
          function(o, i, t) {
            var r = t(0), f = r(t(1));
            (0, f.default)(i, "__esModule", {
              value: !0
            });
          }
          /******/
        ]).default
      );
    });
  }(gi)), gi.exports;
}
var Mp = Pp();
const Np = /* @__PURE__ */ Dp(Mp), Bp = {
  key: 2,
  id: "editor"
}, Lp = /* @__PURE__ */ Ep({
  __name: "index",
  props: {
    // 表单的配置项
    // 每个配置项包含以下属性:
    // - type: 表单组件类型(如input, select等)
    // - value: 默认值
    // - label: 标签文本
    // - prop: 字段名
    // - rules: 验证规则
    // - attrs: 额外属性
    options: {
      type: Array,
      required: !0
    },
    // 用户自定义上传方法
    httpRequest: {
      type: Function,
      required: !1
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-change",
    "on-progress",
    "before-remove",
    "before-upload",
    "on-exceed"
  ],
  setup(Xt, { expose: In, emit: o }) {
    let i = o, t = Xt, r = Xr({}), f = Xr({}), l = Xr(), u = Xr(), g = () => {
      if (t.options && t.options.length) {
        let D = {}, R = {};
        t.options.map((P) => {
          D[P.prop] = P.value, R[P.prop] = P.rules, P.type === "editor" && Tp(() => {
            if (document.getElementById("editor")) {
              const B = new Np("#editor");
              B.config.placeholder = P.placeholder, B.create(), B.txt.html(P.value), B.config.onchange = (I) => {
                r.value[P.prop] = I;
              }, u.value = B;
            }
          });
        }), r.value = Vl.cloneDeep(D), f.value = Vl.cloneDeep(R);
      }
    };
    In({
      resetFields: () => {
        var D;
        if ((D = l.value) == null || D.resetFields(), t.options && t.options.length) {
          let R = t.options.find((P) => P.type === "editor");
          u.value.txt.html((R == null ? void 0 : R.value) || "");
        }
      },
      validate: () => {
        var D;
        return (D = l.value) == null ? void 0 : D.validate();
      },
      getFormData: () => r.value
    }), xp(() => {
      g();
    }), Sp(
      () => t.options,
      () => {
        g();
      },
      {
        deep: !0
        // 深度监听，确保能检测到数组和对象内部的变化
      }
    );
    let v = (D) => {
      i("on-preview", D);
    }, s = (D) => {
      i("on-remove", D);
    }, d = (D, R, P) => {
      let B = t.options.find((I) => I.type === "upload");
      r.value[B.prop] = P, i("on-success", D, R, P);
    }, c = (D, R, P) => {
      i("on-error", D, R, P);
    }, m = (D, R) => {
      i("on-change", D, R);
    }, p = (D, R, P) => {
      i("on-progress", D, R, P);
    }, A = (D, R) => {
      i("before-remove", D, R);
    }, x = (D) => {
      i("before-upload", D);
    }, S = (D, R) => {
      i("on-exceed", D, R);
    };
    return (D, R) => {
      const P = di("el-upload"), B = di("el-form-item"), I = di("el-form");
      return ze(), Dn(I, Zr({
        ref_key: "form",
        ref: l,
        model: qt(r),
        rules: qt(f)
      }, D.$attrs, { "validate-on-rule-change": !1 }), {
        default: Gn(() => [
          (ze(!0), kr(
            vi,
            null,
            Gl(Xt.options, (C, M) => (ze(), kr(
              vi,
              { key: M },
              [
                !C.children || !C.children.length ? (ze(), Dn(B, {
                  key: 0,
                  label: C.label,
                  prop: C.prop
                }, {
                  default: Gn(() => [
                    C.type !== "upload" && C.type !== "editor" ? (ze(), Dn(hi(`el-${C.type}`), Zr({
                      key: 0,
                      ref_for: !0
                    }, C.attrs, {
                      modelValue: qt(r)[C.prop],
                      "onUpdate:modelValue": (F) => qt(r)[C.prop] = F
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])) : Rn("v-if", !0),
                    Rn(" 上传组件 "),
                    C.type === "upload" ? (ze(), Dn(P, Zr({
                      key: 1,
                      ref_for: !0
                    }, C.uploadAttrs, {
                      "on-preview": qt(v),
                      "on-remove": qt(s),
                      "on-success": qt(d),
                      "on-error": qt(c),
                      "on-change": qt(m),
                      "on-progress": qt(p),
                      "before-remove": qt(A),
                      "before-upload": qt(x),
                      "http-request": Xt.httpRequest,
                      "on-exceed": qt(S)
                    }), {
                      default: Gn(() => [
                        pi(D.$slots, "uploadArea"),
                        pi(D.$slots, "uploadTip")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-change", "on-progress", "before-remove", "before-upload", "http-request", "on-exceed"])) : Rn("v-if", !0),
                    Rn(" 富文本编辑器 "),
                    C.type === "editor" ? (ze(), kr("div", Bp)) : Rn("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : Rn("v-if", !0),
                C.children && C.children.length ? (ze(), Dn(B, {
                  key: 1,
                  label: C.label,
                  prop: C.prop
                }, {
                  default: Gn(() => [
                    (ze(), Dn(hi(`el-${C.type}`), Zr({ ref_for: !0 }, C.attrs, {
                      modelValue: qt(r)[C.prop],
                      "onUpdate:modelValue": (F) => qt(r)[C.prop] = F
                    }), {
                      default: Gn(() => [
                        (ze(!0), kr(
                          vi,
                          null,
                          Gl(C.children, (F, w) => (ze(), Dn(hi(`el-${F.type}`), {
                            key: w,
                            label: F.label,
                            value: F.value
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop"])) : Rn("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          Cp(B, null, {
            default: Gn(() => [
              pi(D.$slots, "action", {
                form: qt(l),
                model: qt(r)
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"]);
    };
  }
}), Op = {
  install(Xt) {
    Xt.component("j-form", Lp);
  }
};
export {
  Op as default
};
