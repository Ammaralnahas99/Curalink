(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("crypto"), require("buffer")) : typeof define === "function" && define.amd ? define("keycloak", ["crypto", "buffer"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Keycloak = factory(global2.require$$0, global2.require$$1));
})(this, function(require$$0, require$$1) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var es6Promise_min = { exports: {} };
  (function(module2, exports2) {
    !function(t, e) {
      module2.exports = e();
    }(commonjsGlobal, function() {
      function t(t2) {
        var e2 = typeof t2;
        return null !== t2 && ("object" === e2 || "function" === e2);
      }
      function e(t2) {
        return "function" == typeof t2;
      }
      function n(t2) {
        W = t2;
      }
      function r(t2) {
        z = t2;
      }
      function o() {
        return function() {
          return process.nextTick(a);
        };
      }
      function i() {
        return "undefined" != typeof U ? function() {
          U(a);
        } : c();
      }
      function s() {
        var t2 = 0, e2 = new H(a), n2 = document.createTextNode("");
        return e2.observe(n2, { characterData: true }), function() {
          n2.data = t2 = ++t2 % 2;
        };
      }
      function u() {
        var t2 = new MessageChannel();
        return t2.port1.onmessage = a, function() {
          return t2.port2.postMessage(0);
        };
      }
      function c() {
        var t2 = setTimeout;
        return function() {
          return t2(a, 1);
        };
      }
      function a() {
        for (var t2 = 0; t2 < N; t2 += 2) {
          var e2 = Q[t2], n2 = Q[t2 + 1];
          e2(n2), Q[t2] = void 0, Q[t2 + 1] = void 0;
        }
        N = 0;
      }
      function f() {
        try {
          var t2 = Function("return this")().require("vertx");
          return U = t2.runOnLoop || t2.runOnContext, i();
        } catch (e2) {
          return c();
        }
      }
      function l(t2, e2) {
        var n2 = this, r2 = new this.constructor(v);
        void 0 === r2[V] && x(r2);
        var o2 = n2._state;
        if (o2) {
          var i2 = arguments[o2 - 1];
          z(function() {
            return T(o2, r2, i2, n2._result);
          });
        } else j(n2, r2, t2, e2);
        return r2;
      }
      function h(t2) {
        var e2 = this;
        if (t2 && "object" == typeof t2 && t2.constructor === e2) return t2;
        var n2 = new e2(v);
        return w(n2, t2), n2;
      }
      function v() {
      }
      function p() {
        return new TypeError("You cannot resolve a promise with itself");
      }
      function d() {
        return new TypeError("A promises callback cannot return that same promise.");
      }
      function _(t2, e2, n2, r2) {
        try {
          t2.call(e2, n2, r2);
        } catch (o2) {
          return o2;
        }
      }
      function y(t2, e2, n2) {
        z(function(t3) {
          var r2 = false, o2 = _(n2, e2, function(n3) {
            r2 || (r2 = true, e2 !== n3 ? w(t3, n3) : A(t3, n3));
          }, function(e3) {
            r2 || (r2 = true, S(t3, e3));
          }, "Settle: " + (t3._label || " unknown promise"));
          !r2 && o2 && (r2 = true, S(t3, o2));
        }, t2);
      }
      function m(t2, e2) {
        e2._state === Z ? A(t2, e2._result) : e2._state === $ ? S(t2, e2._result) : j(e2, void 0, function(e3) {
          return w(t2, e3);
        }, function(e3) {
          return S(t2, e3);
        });
      }
      function b(t2, n2, r2) {
        n2.constructor === t2.constructor && r2 === l && n2.constructor.resolve === h ? m(t2, n2) : void 0 === r2 ? A(t2, n2) : e(r2) ? y(t2, n2, r2) : A(t2, n2);
      }
      function w(e2, n2) {
        if (e2 === n2) S(e2, p());
        else if (t(n2)) {
          var r2 = void 0;
          try {
            r2 = n2.then;
          } catch (o2) {
            return void S(e2, o2);
          }
          b(e2, n2, r2);
        } else A(e2, n2);
      }
      function g(t2) {
        t2._onerror && t2._onerror(t2._result), E(t2);
      }
      function A(t2, e2) {
        t2._state === X && (t2._result = e2, t2._state = Z, 0 !== t2._subscribers.length && z(E, t2));
      }
      function S(t2, e2) {
        t2._state === X && (t2._state = $, t2._result = e2, z(g, t2));
      }
      function j(t2, e2, n2, r2) {
        var o2 = t2._subscribers, i2 = o2.length;
        t2._onerror = null, o2[i2] = e2, o2[i2 + Z] = n2, o2[i2 + $] = r2, 0 === i2 && t2._state && z(E, t2);
      }
      function E(t2) {
        var e2 = t2._subscribers, n2 = t2._state;
        if (0 !== e2.length) {
          for (var r2 = void 0, o2 = void 0, i2 = t2._result, s2 = 0; s2 < e2.length; s2 += 3) r2 = e2[s2], o2 = e2[s2 + n2], r2 ? T(n2, r2, o2, i2) : o2(i2);
          t2._subscribers.length = 0;
        }
      }
      function T(t2, n2, r2, o2) {
        var i2 = e(r2), s2 = void 0, u2 = void 0, c2 = true;
        if (i2) {
          try {
            s2 = r2(o2);
          } catch (a2) {
            c2 = false, u2 = a2;
          }
          if (n2 === s2) return void S(n2, d());
        } else s2 = o2;
        n2._state !== X || (i2 && c2 ? w(n2, s2) : c2 === false ? S(n2, u2) : t2 === Z ? A(n2, s2) : t2 === $ && S(n2, s2));
      }
      function M(t2, e2) {
        try {
          e2(function(e3) {
            w(t2, e3);
          }, function(e3) {
            S(t2, e3);
          });
        } catch (n2) {
          S(t2, n2);
        }
      }
      function P() {
        return tt++;
      }
      function x(t2) {
        t2[V] = tt++, t2._state = void 0, t2._result = void 0, t2._subscribers = [];
      }
      function C() {
        return new Error("Array Methods must be provided an Array");
      }
      function O(t2) {
        return new et(this, t2).promise;
      }
      function k(t2) {
        var e2 = this;
        return new e2(L(t2) ? function(n2, r2) {
          for (var o2 = t2.length, i2 = 0; i2 < o2; i2++) e2.resolve(t2[i2]).then(n2, r2);
        } : function(t3, e3) {
          return e3(new TypeError("You must pass an array to race."));
        });
      }
      function F(t2) {
        var e2 = this, n2 = new e2(v);
        return S(n2, t2), n2;
      }
      function Y() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
      }
      function q() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
      }
      function D() {
        var t2 = void 0;
        if ("undefined" != typeof commonjsGlobal) t2 = commonjsGlobal;
        else if ("undefined" != typeof self) t2 = self;
        else try {
          t2 = Function("return this")();
        } catch (e2) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var n2 = t2.Promise;
        if (n2) {
          var r2 = null;
          try {
            r2 = Object.prototype.toString.call(n2.resolve());
          } catch (e2) {
          }
          if ("[object Promise]" === r2 && !n2.cast) return;
        }
        t2.Promise = nt;
      }
      var K = void 0;
      K = Array.isArray ? Array.isArray : function(t2) {
        return "[object Array]" === Object.prototype.toString.call(t2);
      };
      var L = K, N = 0, U = void 0, W = void 0, z = function(t2, e2) {
        Q[N] = t2, Q[N + 1] = e2, N += 2, 2 === N && (W ? W(a) : R());
      }, B = "undefined" != typeof window ? window : void 0, G = B || {}, H = G.MutationObserver || G.WebKitMutationObserver, I = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, Q = new Array(1e3), R = void 0;
      R = I ? o() : H ? s() : J ? u() : void 0 === B && "function" == typeof commonjsRequire ? f() : c();
      var V = Math.random().toString(36).substring(2), X = void 0, Z = 1, $ = 2, tt = 0, et = function() {
        function t2(t3, e2) {
          this._instanceConstructor = t3, this.promise = new t3(v), this.promise[V] || x(this.promise), L(e2) ? (this.length = e2.length, this._remaining = e2.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e2), 0 === this._remaining && A(this.promise, this._result))) : S(this.promise, C());
        }
        return t2.prototype._enumerate = function(t3) {
          for (var e2 = 0; this._state === X && e2 < t3.length; e2++) this._eachEntry(t3[e2], e2);
        }, t2.prototype._eachEntry = function(t3, e2) {
          var n2 = this._instanceConstructor, r2 = n2.resolve;
          if (r2 === h) {
            var o2 = void 0, i2 = void 0, s2 = false;
            try {
              o2 = t3.then;
            } catch (u2) {
              s2 = true, i2 = u2;
            }
            if (o2 === l && t3._state !== X) this._settledAt(t3._state, e2, t3._result);
            else if ("function" != typeof o2) this._remaining--, this._result[e2] = t3;
            else if (n2 === nt) {
              var c2 = new n2(v);
              s2 ? S(c2, i2) : b(c2, t3, o2), this._willSettleAt(c2, e2);
            } else this._willSettleAt(new n2(function(e3) {
              return e3(t3);
            }), e2);
          } else this._willSettleAt(r2(t3), e2);
        }, t2.prototype._settledAt = function(t3, e2, n2) {
          var r2 = this.promise;
          r2._state === X && (this._remaining--, t3 === $ ? S(r2, n2) : this._result[e2] = n2), 0 === this._remaining && A(r2, this._result);
        }, t2.prototype._willSettleAt = function(t3, e2) {
          var n2 = this;
          j(t3, void 0, function(t4) {
            return n2._settledAt(Z, e2, t4);
          }, function(t4) {
            return n2._settledAt($, e2, t4);
          });
        }, t2;
      }(), nt = function() {
        function t2(e2) {
          this[V] = P(), this._result = this._state = void 0, this._subscribers = [], v !== e2 && ("function" != typeof e2 && Y(), this instanceof t2 ? M(this, e2) : q());
        }
        return t2.prototype["catch"] = function(t3) {
          return this.then(null, t3);
        }, t2.prototype["finally"] = function(t3) {
          var n2 = this, r2 = n2.constructor;
          return e(t3) ? n2.then(function(e2) {
            return r2.resolve(t3()).then(function() {
              return e2;
            });
          }, function(e2) {
            return r2.resolve(t3()).then(function() {
              throw e2;
            });
          }) : n2.then(t3, t3);
        }, t2;
      }();
      return nt.prototype.then = l, nt.all = O, nt.race = k, nt.resolve = h, nt.reject = F, nt._setScheduler = n, nt._setAsap = r, nt._asap = z, nt.polyfill = D, nt.Promise = nt, nt;
    });
  })(es6Promise_min);
  var es6Promise_minExports = es6Promise_min.exports;
  var sha256$1 = { exports: {} };
  /**
   * [js-sha256]{@link https://github.com/emn178/js-sha256}
   *
   * @version 0.11.0
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2024
   * @license MIT
   */
  (function(module2) {
    (function() {
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = commonjsGlobal;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && true && module2.exports;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is224) {
        return function(message) {
          return new Sha256(is224, true).update(message)[outputType]();
        };
      };
      var createMethod = function(is224) {
        var method = createOutputMethod("hex", is224);
        if (NODE_JS) {
          method = nodeWrap(method, is224);
        }
        method.create = function() {
          return new Sha256(is224);
        };
        method.update = function(message) {
          return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createOutputMethod(type, is224);
        }
        return method;
      };
      var nodeWrap = function(method, is224) {
        var crypto = require$$0;
        var Buffer = require$$1.Buffer;
        var algorithm = is224 ? "sha224" : "sha256";
        var bufferFrom;
        if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
          bufferFrom = Buffer.from;
        } else {
          bufferFrom = function(message) {
            return new Buffer(message);
          };
        }
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash(algorithm).update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
            return crypto.createHash(algorithm).update(bufferFrom(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message) {
          return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod("hex", is224);
        method.create = function(key) {
          return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
          return method.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
      };
      function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is224) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
      }
      Sha256.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index = 0, i, length = message.length, blocks2 = this.blocks;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            this.block = blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
              blocks2[i >>> 2] |= message[index] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index < length && i < 64; ++index) {
              code = message.charCodeAt(index);
              if (code < 128) {
                blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >>> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
          this.chromeBugWorkAround = true;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >>> 28 & 15] + HEX_CHARS[h4 >>> 24 & 15] + HEX_CHARS[h4 >>> 20 & 15] + HEX_CHARS[h4 >>> 16 & 15] + HEX_CHARS[h4 >>> 12 & 15] + HEX_CHARS[h4 >>> 8 & 15] + HEX_CHARS[h4 >>> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >>> 28 & 15] + HEX_CHARS[h5 >>> 24 & 15] + HEX_CHARS[h5 >>> 20 & 15] + HEX_CHARS[h5 >>> 16 & 15] + HEX_CHARS[h5 >>> 12 & 15] + HEX_CHARS[h5 >>> 8 & 15] + HEX_CHARS[h5 >>> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >>> 28 & 15] + HEX_CHARS[h6 >>> 24 & 15] + HEX_CHARS[h6 >>> 20 & 15] + HEX_CHARS[h6 >>> 16 & 15] + HEX_CHARS[h6 >>> 12 & 15] + HEX_CHARS[h6 >>> 8 & 15] + HEX_CHARS[h6 >>> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >>> 28 & 15] + HEX_CHARS[h7 >>> 24 & 15] + HEX_CHARS[h7 >>> 20 & 15] + HEX_CHARS[h7 >>> 16 & 15] + HEX_CHARS[h7 >>> 12 & 15] + HEX_CHARS[h7 >>> 8 & 15] + HEX_CHARS[h7 >>> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >>> 24 & 255,
          h0 >>> 16 & 255,
          h0 >>> 8 & 255,
          h0 & 255,
          h1 >>> 24 & 255,
          h1 >>> 16 & 255,
          h1 >>> 8 & 255,
          h1 & 255,
          h2 >>> 24 & 255,
          h2 >>> 16 & 255,
          h2 >>> 8 & 255,
          h2 & 255,
          h3 >>> 24 & 255,
          h3 >>> 16 & 255,
          h3 >>> 8 & 255,
          h3 & 255,
          h4 >>> 24 & 255,
          h4 >>> 16 & 255,
          h4 >>> 8 & 255,
          h4 & 255,
          h5 >>> 24 & 255,
          h5 >>> 16 & 255,
          h5 >>> 8 & 255,
          h5 & 255,
          h6 >>> 24 & 255,
          h6 >>> 16 & 255,
          h6 >>> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >>> 24 & 255, h7 >>> 16 & 255, h7 >>> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer;
      };
      function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === "string") {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >>> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >>> 12;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >>> 18;
              bytes[index++] = 128 | code >>> 12 & 63;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        } else {
          if (type === "object") {
            if (key === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
              key = new Uint8Array(key);
            } else if (!Array.isArray(key)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key.length > 64) {
          key = new Sha256(is224, true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports2 = createMethod();
      exports2.sha256 = exports2;
      exports2.sha224 = createMethod(true);
      exports2.sha256.hmac = createHmacMethod();
      exports2.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module2.exports = exports2;
      } else {
        root.sha256 = exports2.sha256;
        root.sha224 = exports2.sha224;
      }
    })();
  })(sha256$1);
  var sha256Exports = sha256$1.exports;
  var sha256 = /* @__PURE__ */ getDefaultExportFromCjs(sha256Exports);
  class InvalidTokenError extends Error {
  }
  InvalidTokenError.prototype.name = "InvalidTokenError";
  function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
      let code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = "0" + code;
      }
      return "%" + code;
    }));
  }
  function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += "==";
        break;
      case 3:
        output += "=";
        break;
      default:
        throw new Error("base64 string is not of the correct length");
    }
    try {
      return b64DecodeUnicode(output);
    } catch (err) {
      return atob(output);
    }
  }
  function jwtDecode(token, options) {
    if (typeof token !== "string") {
      throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
      throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
      decoded = base64UrlDecode(part);
    } catch (e) {
      throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
      return JSON.parse(decoded);
    } catch (e) {
      throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
  }
  if (typeof es6Promise_minExports.Promise === "undefined") {
    throw Error("Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.");
  }
  function Keycloak(config) {
    if (!(this instanceof Keycloak)) {
      throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");
    }
    var kc = this;
    var adapter;
    var refreshQueue = [];
    var callbackStorage;
    var loginIframe = {
      enable: true,
      callbackList: [],
      interval: 5
    };
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if ((scripts[i].src.indexOf("keycloak.js") !== -1 || scripts[i].src.indexOf("keycloak.min.js") !== -1) && scripts[i].src.indexOf("version=") !== -1) {
        kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf("version=") + 8).split("&")[0];
      }
    }
    var useNonce = true;
    var logInfo = createLogger(console.info);
    var logWarn = createLogger(console.warn);
    kc.init = function(initOptions) {
      if (kc.didInitialize) {
        throw new Error("A 'Keycloak' instance can only be initialized once.");
      }
      kc.didInitialize = true;
      kc.authenticated = false;
      callbackStorage = createCallbackStorage();
      var adapters = ["default", "cordova", "cordova-native"];
      if (initOptions && adapters.indexOf(initOptions.adapter) > -1) {
        adapter = loadAdapter(initOptions.adapter);
      } else if (initOptions && typeof initOptions.adapter === "object") {
        adapter = initOptions.adapter;
      } else {
        if (window.Cordova || window.cordova) {
          adapter = loadAdapter("cordova");
        } else {
          adapter = loadAdapter();
        }
      }
      if (initOptions) {
        if (typeof initOptions.useNonce !== "undefined") {
          useNonce = initOptions.useNonce;
        }
        if (typeof initOptions.checkLoginIframe !== "undefined") {
          loginIframe.enable = initOptions.checkLoginIframe;
        }
        if (initOptions.checkLoginIframeInterval) {
          loginIframe.interval = initOptions.checkLoginIframeInterval;
        }
        if (initOptions.onLoad === "login-required") {
          kc.loginRequired = true;
        }
        if (initOptions.responseMode) {
          if (initOptions.responseMode === "query" || initOptions.responseMode === "fragment") {
            kc.responseMode = initOptions.responseMode;
          } else {
            throw "Invalid value for responseMode";
          }
        }
        if (initOptions.flow) {
          switch (initOptions.flow) {
            case "standard":
              kc.responseType = "code";
              break;
            case "implicit":
              kc.responseType = "id_token token";
              break;
            case "hybrid":
              kc.responseType = "code id_token token";
              break;
            default:
              throw "Invalid value for flow";
          }
          kc.flow = initOptions.flow;
        }
        if (initOptions.timeSkew != null) {
          kc.timeSkew = initOptions.timeSkew;
        }
        if (initOptions.redirectUri) {
          kc.redirectUri = initOptions.redirectUri;
        }
        if (initOptions.silentCheckSsoRedirectUri) {
          kc.silentCheckSsoRedirectUri = initOptions.silentCheckSsoRedirectUri;
        }
        if (typeof initOptions.silentCheckSsoFallback === "boolean") {
          kc.silentCheckSsoFallback = initOptions.silentCheckSsoFallback;
        } else {
          kc.silentCheckSsoFallback = true;
        }
        if (typeof initOptions.pkceMethod !== "undefined") {
          if (initOptions.pkceMethod !== "S256" && initOptions.pkceMethod !== false) {
            throw new TypeError(`Invalid value for pkceMethod', expected 'S256' or false but got ${initOptions.pkceMethod}.`);
          }
          kc.pkceMethod = initOptions.pkceMethod;
        } else {
          kc.pkceMethod = "S256";
        }
        if (typeof initOptions.enableLogging === "boolean") {
          kc.enableLogging = initOptions.enableLogging;
        } else {
          kc.enableLogging = false;
        }
        if (initOptions.logoutMethod === "POST") {
          kc.logoutMethod = "POST";
        } else {
          kc.logoutMethod = "GET";
        }
        if (typeof initOptions.scope === "string") {
          kc.scope = initOptions.scope;
        }
        if (typeof initOptions.acrValues === "string") {
          kc.acrValues = initOptions.acrValues;
        }
        if (typeof initOptions.messageReceiveTimeout === "number" && initOptions.messageReceiveTimeout > 0) {
          kc.messageReceiveTimeout = initOptions.messageReceiveTimeout;
        } else {
          kc.messageReceiveTimeout = 1e4;
        }
      }
      if (!kc.responseMode) {
        kc.responseMode = "fragment";
      }
      if (!kc.responseType) {
        kc.responseType = "code";
        kc.flow = "standard";
      }
      var promise = createPromise();
      var initPromise = createPromise();
      initPromise.promise.then(function() {
        kc.onReady && kc.onReady(kc.authenticated);
        promise.setSuccess(kc.authenticated);
      }).catch(function(error) {
        promise.setError(error);
      });
      var configPromise = loadConfig();
      function onLoad() {
        var doLogin = function(prompt) {
          if (!prompt) {
            options.prompt = "none";
          }
          if (initOptions && initOptions.locale) {
            options.locale = initOptions.locale;
          }
          kc.login(options).then(function() {
            initPromise.setSuccess();
          }).catch(function(error) {
            initPromise.setError(error);
          });
        };
        var checkSsoSilently = function() {
          var ifrm = document.createElement("iframe");
          var src = kc.createLoginUrl({ prompt: "none", redirectUri: kc.silentCheckSsoRedirectUri });
          ifrm.setAttribute("src", src);
          ifrm.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin");
          ifrm.setAttribute("title", "keycloak-silent-check-sso");
          ifrm.style.display = "none";
          document.body.appendChild(ifrm);
          var messageCallback = function(event) {
            if (event.origin !== window.location.origin || ifrm.contentWindow !== event.source) {
              return;
            }
            var oauth = parseCallback(event.data);
            processCallback(oauth, initPromise);
            document.body.removeChild(ifrm);
            window.removeEventListener("message", messageCallback);
          };
          window.addEventListener("message", messageCallback);
        };
        var options = {};
        switch (initOptions.onLoad) {
          case "check-sso":
            if (loginIframe.enable) {
              setupCheckLoginIframe().then(function() {
                checkLoginIframe().then(function(unchanged) {
                  if (!unchanged) {
                    kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
                  } else {
                    initPromise.setSuccess();
                  }
                }).catch(function(error) {
                  initPromise.setError(error);
                });
              });
            } else {
              kc.silentCheckSsoRedirectUri ? checkSsoSilently() : doLogin(false);
            }
            break;
          case "login-required":
            doLogin(true);
            break;
          default:
            throw "Invalid value for onLoad";
        }
      }
      function processInit() {
        var callback = parseCallback(window.location.href);
        if (callback) {
          window.history.replaceState(window.history.state, null, callback.newUrl);
        }
        if (callback && callback.valid) {
          return setupCheckLoginIframe().then(function() {
            processCallback(callback, initPromise);
          }).catch(function(error) {
            initPromise.setError(error);
          });
        } else if (initOptions) {
          if (initOptions.token && initOptions.refreshToken) {
            setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);
            if (loginIframe.enable) {
              setupCheckLoginIframe().then(function() {
                checkLoginIframe().then(function(unchanged) {
                  if (unchanged) {
                    kc.onAuthSuccess && kc.onAuthSuccess();
                    initPromise.setSuccess();
                    scheduleCheckIframe();
                  } else {
                    initPromise.setSuccess();
                  }
                }).catch(function(error) {
                  initPromise.setError(error);
                });
              });
            } else {
              kc.updateToken(-1).then(function() {
                kc.onAuthSuccess && kc.onAuthSuccess();
                initPromise.setSuccess();
              }).catch(function(error) {
                kc.onAuthError && kc.onAuthError();
                if (initOptions.onLoad) {
                  onLoad();
                } else {
                  initPromise.setError(error);
                }
              });
            }
          } else if (initOptions.onLoad) {
            onLoad();
          } else {
            initPromise.setSuccess();
          }
        } else {
          initPromise.setSuccess();
        }
      }
      function domReady() {
        var promise2 = createPromise();
        var checkReadyState = function() {
          if (document.readyState === "interactive" || document.readyState === "complete") {
            document.removeEventListener("readystatechange", checkReadyState);
            promise2.setSuccess();
          }
        };
        document.addEventListener("readystatechange", checkReadyState);
        checkReadyState();
        return promise2.promise;
      }
      configPromise.then(function() {
        domReady().then(check3pCookiesSupported).then(processInit).catch(function(error) {
          promise.setError(error);
        });
      });
      configPromise.catch(function(error) {
        promise.setError(error);
      });
      return promise.promise;
    };
    kc.login = function(options) {
      return adapter.login(options);
    };
    function generateRandomData(len) {
      var array = null;
      var crypto = window.crypto || window.msCrypto;
      if (crypto && crypto.getRandomValues && window.Uint8Array) {
        array = new Uint8Array(len);
        crypto.getRandomValues(array);
        return array;
      }
      array = new Array(len);
      for (var j = 0; j < array.length; j++) {
        array[j] = Math.floor(256 * Math.random());
      }
      return array;
    }
    function generateCodeVerifier(len) {
      return generateRandomString(len, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
    }
    function generateRandomString(len, alphabet) {
      var randomData = generateRandomData(len);
      var chars = new Array(len);
      for (var i2 = 0; i2 < len; i2++) {
        chars[i2] = alphabet.charCodeAt(randomData[i2] % alphabet.length);
      }
      return String.fromCharCode.apply(null, chars);
    }
    function generatePkceChallenge(pkceMethod, codeVerifier) {
      if (pkceMethod !== "S256") {
        throw new TypeError(`Invalid value for 'pkceMethod', expected 'S256' but got '${pkceMethod}'.`);
      }
      const hashBytes = new Uint8Array(sha256.arrayBuffer(codeVerifier));
      const encodedHash = bytesToBase64(hashBytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      return encodedHash;
    }
    function buildClaimsParameter(requestedAcr) {
      var claims = {
        id_token: {
          acr: requestedAcr
        }
      };
      return JSON.stringify(claims);
    }
    kc.createLoginUrl = function(options) {
      var state = createUUID();
      var nonce = createUUID();
      var redirectUri = adapter.redirectUri(options);
      var callbackState = {
        state,
        nonce,
        redirectUri: encodeURIComponent(redirectUri),
        loginOptions: options
      };
      if (options && options.prompt) {
        callbackState.prompt = options.prompt;
      }
      var baseUrl;
      if (options && options.action == "register") {
        baseUrl = kc.endpoints.register();
      } else {
        baseUrl = kc.endpoints.authorize();
      }
      var scope = options && options.scope || kc.scope;
      if (!scope) {
        scope = "openid";
      } else if (scope.indexOf("openid") === -1) {
        scope = "openid " + scope;
      }
      var url = baseUrl + "?client_id=" + encodeURIComponent(kc.clientId) + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&state=" + encodeURIComponent(state) + "&response_mode=" + encodeURIComponent(kc.responseMode) + "&response_type=" + encodeURIComponent(kc.responseType) + "&scope=" + encodeURIComponent(scope);
      if (useNonce) {
        url = url + "&nonce=" + encodeURIComponent(nonce);
      }
      if (options && options.prompt) {
        url += "&prompt=" + encodeURIComponent(options.prompt);
      }
      if (options && options.maxAge) {
        url += "&max_age=" + encodeURIComponent(options.maxAge);
      }
      if (options && options.loginHint) {
        url += "&login_hint=" + encodeURIComponent(options.loginHint);
      }
      if (options && options.idpHint) {
        url += "&kc_idp_hint=" + encodeURIComponent(options.idpHint);
      }
      if (options && options.action && options.action != "register") {
        url += "&kc_action=" + encodeURIComponent(options.action);
      }
      if (options && options.locale) {
        url += "&ui_locales=" + encodeURIComponent(options.locale);
      }
      if (options && options.acr) {
        var claimsParameter = buildClaimsParameter(options.acr);
        url += "&claims=" + encodeURIComponent(claimsParameter);
      }
      if (options && options.acrValues || kc.acrValues) {
        url += "&acr_values=" + encodeURIComponent(options.acrValues || kc.acrValues);
      }
      if (kc.pkceMethod) {
        var codeVerifier = generateCodeVerifier(96);
        callbackState.pkceCodeVerifier = codeVerifier;
        var pkceChallenge = generatePkceChallenge(kc.pkceMethod, codeVerifier);
        url += "&code_challenge=" + pkceChallenge;
        url += "&code_challenge_method=" + kc.pkceMethod;
      }
      callbackStorage.add(callbackState);
      return url;
    };
    kc.logout = function(options) {
      return adapter.logout(options);
    };
    kc.createLogoutUrl = function(options) {
      const logoutMethod = options?.logoutMethod ?? kc.logoutMethod;
      if (logoutMethod === "POST") {
        return kc.endpoints.logout();
      }
      var url = kc.endpoints.logout() + "?client_id=" + encodeURIComponent(kc.clientId) + "&post_logout_redirect_uri=" + encodeURIComponent(adapter.redirectUri(options, false));
      if (kc.idToken) {
        url += "&id_token_hint=" + encodeURIComponent(kc.idToken);
      }
      return url;
    };
    kc.register = function(options) {
      return adapter.register(options);
    };
    kc.createRegisterUrl = function(options) {
      if (!options) {
        options = {};
      }
      options.action = "register";
      return kc.createLoginUrl(options);
    };
    kc.createAccountUrl = function(options) {
      var realm = getRealmUrl();
      var url = void 0;
      if (typeof realm !== "undefined") {
        url = realm + "/account?referrer=" + encodeURIComponent(kc.clientId) + "&referrer_uri=" + encodeURIComponent(adapter.redirectUri(options));
      }
      return url;
    };
    kc.accountManagement = function() {
      return adapter.accountManagement();
    };
    kc.hasRealmRole = function(role) {
      var access = kc.realmAccess;
      return !!access && access.roles.indexOf(role) >= 0;
    };
    kc.hasResourceRole = function(role, resource) {
      if (!kc.resourceAccess) {
        return false;
      }
      var access = kc.resourceAccess[resource || kc.clientId];
      return !!access && access.roles.indexOf(role) >= 0;
    };
    kc.loadUserProfile = function() {
      var url = getRealmUrl() + "/account";
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Authorization", "bearer " + kc.token);
      var promise = createPromise();
      req.onreadystatechange = function() {
        if (req.readyState == 4) {
          if (req.status == 200) {
            kc.profile = JSON.parse(req.responseText);
            promise.setSuccess(kc.profile);
          } else {
            promise.setError();
          }
        }
      };
      req.send();
      return promise.promise;
    };
    kc.loadUserInfo = function() {
      var url = kc.endpoints.userinfo();
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.setRequestHeader("Accept", "application/json");
      req.setRequestHeader("Authorization", "bearer " + kc.token);
      var promise = createPromise();
      req.onreadystatechange = function() {
        if (req.readyState == 4) {
          if (req.status == 200) {
            kc.userInfo = JSON.parse(req.responseText);
            promise.setSuccess(kc.userInfo);
          } else {
            promise.setError();
          }
        }
      };
      req.send();
      return promise.promise;
    };
    kc.isTokenExpired = function(minValidity) {
      if (!kc.tokenParsed || !kc.refreshToken && kc.flow != "implicit") {
        throw "Not authenticated";
      }
      if (kc.timeSkew == null) {
        logInfo("[KEYCLOAK] Unable to determine if token is expired as timeskew is not set");
        return true;
      }
      var expiresIn = kc.tokenParsed["exp"] - Math.ceil((/* @__PURE__ */ new Date()).getTime() / 1e3) + kc.timeSkew;
      if (minValidity) {
        if (isNaN(minValidity)) {
          throw "Invalid minValidity";
        }
        expiresIn -= minValidity;
      }
      return expiresIn < 0;
    };
    kc.updateToken = function(minValidity) {
      var promise = createPromise();
      if (!kc.refreshToken) {
        promise.setError();
        return promise.promise;
      }
      minValidity = minValidity || 5;
      var exec = function() {
        var refreshToken = false;
        if (minValidity == -1) {
          refreshToken = true;
          logInfo("[KEYCLOAK] Refreshing token: forced refresh");
        } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
          refreshToken = true;
          logInfo("[KEYCLOAK] Refreshing token: token expired");
        }
        if (!refreshToken) {
          promise.setSuccess(false);
        } else {
          var params = "grant_type=refresh_token&refresh_token=" + kc.refreshToken;
          var url = kc.endpoints.token();
          refreshQueue.push(promise);
          if (refreshQueue.length == 1) {
            var req = new XMLHttpRequest();
            req.open("POST", url, true);
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            req.withCredentials = true;
            params += "&client_id=" + encodeURIComponent(kc.clientId);
            var timeLocal = (/* @__PURE__ */ new Date()).getTime();
            req.onreadystatechange = function() {
              if (req.readyState == 4) {
                if (req.status == 200) {
                  logInfo("[KEYCLOAK] Token refreshed");
                  timeLocal = (timeLocal + (/* @__PURE__ */ new Date()).getTime()) / 2;
                  var tokenResponse = JSON.parse(req.responseText);
                  setToken(tokenResponse["access_token"], tokenResponse["refresh_token"], tokenResponse["id_token"], timeLocal);
                  kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                  for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                    p.setSuccess(true);
                  }
                } else {
                  logWarn("[KEYCLOAK] Failed to refresh token");
                  if (req.status == 400) {
                    kc.clearToken();
                  }
                  kc.onAuthRefreshError && kc.onAuthRefreshError();
                  for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                    p.setError(true);
                  }
                }
              }
            };
            req.send(params);
          }
        }
      };
      if (loginIframe.enable) {
        var iframePromise = checkLoginIframe();
        iframePromise.then(function() {
          exec();
        }).catch(function(error) {
          promise.setError(error);
        });
      } else {
        exec();
      }
      return promise.promise;
    };
    kc.clearToken = function() {
      if (kc.token) {
        setToken(null, null, null);
        kc.onAuthLogout && kc.onAuthLogout();
        if (kc.loginRequired) {
          kc.login();
        }
      }
    };
    function getRealmUrl() {
      if (typeof kc.authServerUrl !== "undefined") {
        if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == "/") {
          return kc.authServerUrl + "realms/" + encodeURIComponent(kc.realm);
        } else {
          return kc.authServerUrl + "/realms/" + encodeURIComponent(kc.realm);
        }
      } else {
        return void 0;
      }
    }
    function getOrigin() {
      if (!window.location.origin) {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
      } else {
        return window.location.origin;
      }
    }
    function processCallback(oauth, promise) {
      var code = oauth.code;
      var error = oauth.error;
      var prompt = oauth.prompt;
      var timeLocal = (/* @__PURE__ */ new Date()).getTime();
      if (oauth["kc_action_status"]) {
        kc.onActionUpdate && kc.onActionUpdate(oauth["kc_action_status"]);
      }
      if (error) {
        if (prompt != "none") {
          if (oauth.error_description && oauth.error_description === "authentication_expired") {
            kc.login(oauth.loginOptions);
          } else {
            var errorData = { error, error_description: oauth.error_description };
            kc.onAuthError && kc.onAuthError(errorData);
            promise && promise.setError(errorData);
          }
        } else {
          promise && promise.setSuccess();
        }
        return;
      } else if (kc.flow != "standard" && (oauth.access_token || oauth.id_token)) {
        authSuccess(oauth.access_token, null, oauth.id_token, true);
      }
      if (kc.flow != "implicit" && code) {
        var params = "code=" + code + "&grant_type=authorization_code";
        var url = kc.endpoints.token();
        var req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        params += "&client_id=" + encodeURIComponent(kc.clientId);
        params += "&redirect_uri=" + oauth.redirectUri;
        if (oauth.pkceCodeVerifier) {
          params += "&code_verifier=" + oauth.pkceCodeVerifier;
        }
        req.withCredentials = true;
        req.onreadystatechange = function() {
          if (req.readyState == 4) {
            if (req.status == 200) {
              var tokenResponse = JSON.parse(req.responseText);
              authSuccess(tokenResponse["access_token"], tokenResponse["refresh_token"], tokenResponse["id_token"], kc.flow === "standard");
              scheduleCheckIframe();
            } else {
              kc.onAuthError && kc.onAuthError();
              promise && promise.setError();
            }
          }
        };
        req.send(params);
      }
      function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
        timeLocal = (timeLocal + (/* @__PURE__ */ new Date()).getTime()) / 2;
        setToken(accessToken, refreshToken, idToken, timeLocal);
        if (useNonce && (kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce)) {
          logInfo("[KEYCLOAK] Invalid nonce, clearing token");
          kc.clearToken();
          promise && promise.setError();
        } else {
          if (fulfillPromise) {
            kc.onAuthSuccess && kc.onAuthSuccess();
            promise && promise.setSuccess();
          }
        }
      }
    }
    function loadConfig(url) {
      var promise = createPromise();
      var configUrl;
      if (!config) {
        configUrl = "keycloak.json";
      } else if (typeof config === "string") {
        configUrl = config;
      }
      function setupOidcEndoints(oidcConfiguration) {
        if (!oidcConfiguration) {
          kc.endpoints = {
            authorize: function() {
              return getRealmUrl() + "/protocol/openid-connect/auth";
            },
            token: function() {
              return getRealmUrl() + "/protocol/openid-connect/token";
            },
            logout: function() {
              return getRealmUrl() + "/protocol/openid-connect/logout";
            },
            checkSessionIframe: function() {
              var src = getRealmUrl() + "/protocol/openid-connect/login-status-iframe.html";
              if (kc.iframeVersion) {
                src = src + "?version=" + kc.iframeVersion;
              }
              return src;
            },
            thirdPartyCookiesIframe: function() {
              var src = getRealmUrl() + "/protocol/openid-connect/3p-cookies/step1.html";
              if (kc.iframeVersion) {
                src = src + "?version=" + kc.iframeVersion;
              }
              return src;
            },
            register: function() {
              return getRealmUrl() + "/protocol/openid-connect/registrations";
            },
            userinfo: function() {
              return getRealmUrl() + "/protocol/openid-connect/userinfo";
            }
          };
        } else {
          kc.endpoints = {
            authorize: function() {
              return oidcConfiguration.authorization_endpoint;
            },
            token: function() {
              return oidcConfiguration.token_endpoint;
            },
            logout: function() {
              if (!oidcConfiguration.end_session_endpoint) {
                throw "Not supported by the OIDC server";
              }
              return oidcConfiguration.end_session_endpoint;
            },
            checkSessionIframe: function() {
              if (!oidcConfiguration.check_session_iframe) {
                throw "Not supported by the OIDC server";
              }
              return oidcConfiguration.check_session_iframe;
            },
            register: function() {
              throw 'Redirection to "Register user" page not supported in standard OIDC mode';
            },
            userinfo: function() {
              if (!oidcConfiguration.userinfo_endpoint) {
                throw "Not supported by the OIDC server";
              }
              return oidcConfiguration.userinfo_endpoint;
            }
          };
        }
      }
      if (configUrl) {
        var req = new XMLHttpRequest();
        req.open("GET", configUrl, true);
        req.setRequestHeader("Accept", "application/json");
        req.onreadystatechange = function() {
          if (req.readyState == 4) {
            if (req.status == 200 || fileLoaded(req)) {
              var config2 = JSON.parse(req.responseText);
              kc.authServerUrl = config2["auth-server-url"];
              kc.realm = config2["realm"];
              kc.clientId = config2["resource"];
              setupOidcEndoints(null);
              promise.setSuccess();
            } else {
              promise.setError();
            }
          }
        };
        req.send();
      } else {
        if (!config.clientId) {
          throw "clientId missing";
        }
        kc.clientId = config.clientId;
        var oidcProvider = config["oidcProvider"];
        if (!oidcProvider) {
          if (!config["url"]) {
            var scripts2 = document.getElementsByTagName("script");
            for (var i2 = 0; i2 < scripts2.length; i2++) {
              if (scripts2[i2].src.match(/.*keycloak\.js/)) {
                config.url = scripts2[i2].src.substr(0, scripts2[i2].src.indexOf("/js/keycloak.js"));
                break;
              }
            }
          }
          if (!config.realm) {
            throw "realm missing";
          }
          kc.authServerUrl = config.url;
          kc.realm = config.realm;
          setupOidcEndoints(null);
          promise.setSuccess();
        } else {
          if (typeof oidcProvider === "string") {
            var oidcProviderConfigUrl;
            if (oidcProvider.charAt(oidcProvider.length - 1) == "/") {
              oidcProviderConfigUrl = oidcProvider + ".well-known/openid-configuration";
            } else {
              oidcProviderConfigUrl = oidcProvider + "/.well-known/openid-configuration";
            }
            var req = new XMLHttpRequest();
            req.open("GET", oidcProviderConfigUrl, true);
            req.setRequestHeader("Accept", "application/json");
            req.onreadystatechange = function() {
              if (req.readyState == 4) {
                if (req.status == 200 || fileLoaded(req)) {
                  var oidcProviderConfig = JSON.parse(req.responseText);
                  setupOidcEndoints(oidcProviderConfig);
                  promise.setSuccess();
                } else {
                  promise.setError();
                }
              }
            };
            req.send();
          } else {
            setupOidcEndoints(oidcProvider);
            promise.setSuccess();
          }
        }
      }
      return promise.promise;
    }
    function fileLoaded(xhr) {
      return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith("file:");
    }
    function setToken(token, refreshToken, idToken, timeLocal) {
      if (kc.tokenTimeoutHandle) {
        clearTimeout(kc.tokenTimeoutHandle);
        kc.tokenTimeoutHandle = null;
      }
      if (refreshToken) {
        kc.refreshToken = refreshToken;
        kc.refreshTokenParsed = jwtDecode(refreshToken);
      } else {
        delete kc.refreshToken;
        delete kc.refreshTokenParsed;
      }
      if (idToken) {
        kc.idToken = idToken;
        kc.idTokenParsed = jwtDecode(idToken);
      } else {
        delete kc.idToken;
        delete kc.idTokenParsed;
      }
      if (token) {
        kc.token = token;
        kc.tokenParsed = jwtDecode(token);
        kc.sessionId = kc.tokenParsed.sid;
        kc.authenticated = true;
        kc.subject = kc.tokenParsed.sub;
        kc.realmAccess = kc.tokenParsed.realm_access;
        kc.resourceAccess = kc.tokenParsed.resource_access;
        if (timeLocal) {
          kc.timeSkew = Math.floor(timeLocal / 1e3) - kc.tokenParsed.iat;
        }
        if (kc.timeSkew != null) {
          logInfo("[KEYCLOAK] Estimated time difference between browser and server is " + kc.timeSkew + " seconds");
          if (kc.onTokenExpired) {
            var expiresIn = (kc.tokenParsed["exp"] - (/* @__PURE__ */ new Date()).getTime() / 1e3 + kc.timeSkew) * 1e3;
            logInfo("[KEYCLOAK] Token expires in " + Math.round(expiresIn / 1e3) + " s");
            if (expiresIn <= 0) {
              kc.onTokenExpired();
            } else {
              kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
            }
          }
        }
      } else {
        delete kc.token;
        delete kc.tokenParsed;
        delete kc.subject;
        delete kc.realmAccess;
        delete kc.resourceAccess;
        kc.authenticated = false;
      }
    }
    function createUUID() {
      var hexDigits = "0123456789abcdef";
      var s = generateRandomString(36, hexDigits).split("");
      s[14] = "4";
      s[19] = hexDigits.substr(s[19] & 3 | 8, 1);
      s[8] = s[13] = s[18] = s[23] = "-";
      var uuid = s.join("");
      return uuid;
    }
    function parseCallback(url) {
      var oauth = parseCallbackUrl(url);
      if (!oauth) {
        return;
      }
      var oauthState = callbackStorage.get(oauth.state);
      if (oauthState) {
        oauth.valid = true;
        oauth.redirectUri = oauthState.redirectUri;
        oauth.storedNonce = oauthState.nonce;
        oauth.prompt = oauthState.prompt;
        oauth.pkceCodeVerifier = oauthState.pkceCodeVerifier;
        oauth.loginOptions = oauthState.loginOptions;
      }
      return oauth;
    }
    function parseCallbackUrl(url) {
      var supportedParams;
      switch (kc.flow) {
        case "standard":
          supportedParams = ["code", "state", "session_state", "kc_action_status", "iss"];
          break;
        case "implicit":
          supportedParams = ["access_token", "token_type", "id_token", "state", "session_state", "expires_in", "kc_action_status", "iss"];
          break;
        case "hybrid":
          supportedParams = ["access_token", "token_type", "id_token", "code", "state", "session_state", "expires_in", "kc_action_status", "iss"];
          break;
      }
      supportedParams.push("error");
      supportedParams.push("error_description");
      supportedParams.push("error_uri");
      var queryIndex = url.indexOf("?");
      var fragmentIndex = url.indexOf("#");
      var newUrl;
      var parsed;
      if (kc.responseMode === "query" && queryIndex !== -1) {
        newUrl = url.substring(0, queryIndex);
        parsed = parseCallbackParams(url.substring(queryIndex + 1, fragmentIndex !== -1 ? fragmentIndex : url.length), supportedParams);
        if (parsed.paramsString !== "") {
          newUrl += "?" + parsed.paramsString;
        }
        if (fragmentIndex !== -1) {
          newUrl += url.substring(fragmentIndex);
        }
      } else if (kc.responseMode === "fragment" && fragmentIndex !== -1) {
        newUrl = url.substring(0, fragmentIndex);
        parsed = parseCallbackParams(url.substring(fragmentIndex + 1), supportedParams);
        if (parsed.paramsString !== "") {
          newUrl += "#" + parsed.paramsString;
        }
      }
      if (parsed && parsed.oauthParams) {
        if (kc.flow === "standard" || kc.flow === "hybrid") {
          if ((parsed.oauthParams.code || parsed.oauthParams.error) && parsed.oauthParams.state) {
            parsed.oauthParams.newUrl = newUrl;
            return parsed.oauthParams;
          }
        } else if (kc.flow === "implicit") {
          if ((parsed.oauthParams.access_token || parsed.oauthParams.error) && parsed.oauthParams.state) {
            parsed.oauthParams.newUrl = newUrl;
            return parsed.oauthParams;
          }
        }
      }
    }
    function parseCallbackParams(paramsString, supportedParams) {
      var p = paramsString.split("&");
      var result = {
        paramsString: "",
        oauthParams: {}
      };
      for (var i2 = 0; i2 < p.length; i2++) {
        var split = p[i2].indexOf("=");
        var key = p[i2].slice(0, split);
        if (supportedParams.indexOf(key) !== -1) {
          result.oauthParams[key] = p[i2].slice(split + 1);
        } else {
          if (result.paramsString !== "") {
            result.paramsString += "&";
          }
          result.paramsString += p[i2];
        }
      }
      return result;
    }
    function createPromise() {
      var p = {
        setSuccess: function(result) {
          p.resolve(result);
        },
        setError: function(result) {
          p.reject(result);
        }
      };
      p.promise = new es6Promise_minExports.Promise(function(resolve, reject) {
        p.resolve = resolve;
        p.reject = reject;
      });
      return p;
    }
    function applyTimeoutToPromise(promise, timeout, errorMessage) {
      var timeoutHandle = null;
      var timeoutPromise = new es6Promise_minExports.Promise(function(resolve, reject) {
        timeoutHandle = setTimeout(function() {
          reject({ "error": errorMessage });
        }, timeout);
      });
      return es6Promise_minExports.Promise.race([promise, timeoutPromise]).finally(function() {
        clearTimeout(timeoutHandle);
      });
    }
    function setupCheckLoginIframe() {
      var promise = createPromise();
      if (!loginIframe.enable) {
        promise.setSuccess();
        return promise.promise;
      }
      if (loginIframe.iframe) {
        promise.setSuccess();
        return promise.promise;
      }
      var iframe = document.createElement("iframe");
      loginIframe.iframe = iframe;
      iframe.onload = function() {
        var authUrl = kc.endpoints.authorize();
        if (authUrl.charAt(0) === "/") {
          loginIframe.iframeOrigin = getOrigin();
        } else {
          loginIframe.iframeOrigin = authUrl.substring(0, authUrl.indexOf("/", 8));
        }
        promise.setSuccess();
      };
      var src = kc.endpoints.checkSessionIframe();
      iframe.setAttribute("src", src);
      iframe.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin");
      iframe.setAttribute("title", "keycloak-session-iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      var messageCallback = function(event) {
        if (event.origin !== loginIframe.iframeOrigin || loginIframe.iframe.contentWindow !== event.source) {
          return;
        }
        if (!(event.data == "unchanged" || event.data == "changed" || event.data == "error")) {
          return;
        }
        if (event.data != "unchanged") {
          kc.clearToken();
        }
        var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);
        for (var i2 = callbacks.length - 1; i2 >= 0; --i2) {
          var promise2 = callbacks[i2];
          if (event.data == "error") {
            promise2.setError();
          } else {
            promise2.setSuccess(event.data == "unchanged");
          }
        }
      };
      window.addEventListener("message", messageCallback, false);
      return promise.promise;
    }
    function scheduleCheckIframe() {
      if (loginIframe.enable) {
        if (kc.token) {
          setTimeout(function() {
            checkLoginIframe().then(function(unchanged) {
              if (unchanged) {
                scheduleCheckIframe();
              }
            });
          }, loginIframe.interval * 1e3);
        }
      }
    }
    function checkLoginIframe() {
      var promise = createPromise();
      if (loginIframe.iframe && loginIframe.iframeOrigin) {
        var msg = kc.clientId + " " + (kc.sessionId ? kc.sessionId : "");
        loginIframe.callbackList.push(promise);
        var origin = loginIframe.iframeOrigin;
        if (loginIframe.callbackList.length == 1) {
          loginIframe.iframe.contentWindow.postMessage(msg, origin);
        }
      } else {
        promise.setSuccess();
      }
      return promise.promise;
    }
    function check3pCookiesSupported() {
      var promise = createPromise();
      if (loginIframe.enable || kc.silentCheckSsoRedirectUri) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", kc.endpoints.thirdPartyCookiesIframe());
        iframe.setAttribute("sandbox", "allow-storage-access-by-user-activation allow-scripts allow-same-origin");
        iframe.setAttribute("title", "keycloak-3p-check-iframe");
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        var messageCallback = function(event) {
          if (iframe.contentWindow !== event.source) {
            return;
          }
          if (event.data !== "supported" && event.data !== "unsupported") {
            return;
          } else if (event.data === "unsupported") {
            logWarn(
              "[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:\n\n - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).\n - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).\n\nFor more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers"
            );
            loginIframe.enable = false;
            if (kc.silentCheckSsoFallback) {
              kc.silentCheckSsoRedirectUri = false;
            }
          }
          document.body.removeChild(iframe);
          window.removeEventListener("message", messageCallback);
          promise.setSuccess();
        };
        window.addEventListener("message", messageCallback, false);
      } else {
        promise.setSuccess();
      }
      return applyTimeoutToPromise(promise.promise, kc.messageReceiveTimeout, "Timeout when waiting for 3rd party check iframe message.");
    }
    function loadAdapter(type) {
      if (!type || type == "default") {
        return {
          login: function(options) {
            window.location.assign(kc.createLoginUrl(options));
            return createPromise().promise;
          },
          logout: async function(options) {
            const logoutMethod = options?.logoutMethod ?? kc.logoutMethod;
            if (logoutMethod === "GET") {
              window.location.replace(kc.createLogoutUrl(options));
              return;
            }
            const logoutUrl = kc.createLogoutUrl(options);
            const response = await fetch(logoutUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams({
                id_token_hint: kc.idToken,
                client_id: kc.clientId,
                post_logout_redirect_uri: adapter.redirectUri(options, false)
              })
            });
            if (response.redirected) {
              window.location.href = response.url;
              return;
            }
            if (response.ok) {
              window.location.reload();
              return;
            }
            throw new Error("Logout failed, request returned an error code.");
          },
          register: function(options) {
            window.location.assign(kc.createRegisterUrl(options));
            return createPromise().promise;
          },
          accountManagement: function() {
            var accountUrl = kc.createAccountUrl();
            if (typeof accountUrl !== "undefined") {
              window.location.href = accountUrl;
            } else {
              throw "Not supported by the OIDC server";
            }
            return createPromise().promise;
          },
          redirectUri: function(options, encodeHash) {
            if (options && options.redirectUri) {
              return options.redirectUri;
            } else if (kc.redirectUri) {
              return kc.redirectUri;
            } else {
              return location.href;
            }
          }
        };
      }
      if (type == "cordova") {
        loginIframe.enable = false;
        var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
          if (window.cordova && window.cordova.InAppBrowser) {
            return window.cordova.InAppBrowser.open(loginUrl, target, options);
          } else {
            return window.open(loginUrl, target, options);
          }
        };
        var shallowCloneCordovaOptions = function(userOptions) {
          if (userOptions && userOptions.cordovaOptions) {
            return Object.keys(userOptions.cordovaOptions).reduce(function(options, optionName) {
              options[optionName] = userOptions.cordovaOptions[optionName];
              return options;
            }, {});
          } else {
            return {};
          }
        };
        var formatCordovaOptions = function(cordovaOptions) {
          return Object.keys(cordovaOptions).reduce(function(options, optionName) {
            options.push(optionName + "=" + cordovaOptions[optionName]);
            return options;
          }, []).join(",");
        };
        var createCordovaOptions = function(userOptions) {
          var cordovaOptions = shallowCloneCordovaOptions(userOptions);
          cordovaOptions.location = "no";
          if (userOptions && userOptions.prompt == "none") {
            cordovaOptions.hidden = "yes";
          }
          return formatCordovaOptions(cordovaOptions);
        };
        var getCordovaRedirectUri = function() {
          return kc.redirectUri || "http://localhost";
        };
        return {
          login: function(options) {
            var promise = createPromise();
            var cordovaOptions = createCordovaOptions(options);
            var loginUrl = kc.createLoginUrl(options);
            var ref = cordovaOpenWindowWrapper(loginUrl, "_blank", cordovaOptions);
            var completed = false;
            var closed = false;
            var closeBrowser = function() {
              closed = true;
              ref.close();
            };
            ref.addEventListener("loadstart", function(event) {
              if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                var callback = parseCallback(event.url);
                processCallback(callback, promise);
                closeBrowser();
                completed = true;
              }
            });
            ref.addEventListener("loaderror", function(event) {
              if (!completed) {
                if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                  var callback = parseCallback(event.url);
                  processCallback(callback, promise);
                  closeBrowser();
                  completed = true;
                } else {
                  promise.setError();
                  closeBrowser();
                }
              }
            });
            ref.addEventListener("exit", function(event) {
              if (!closed) {
                promise.setError({
                  reason: "closed_by_user"
                });
              }
            });
            return promise.promise;
          },
          logout: function(options) {
            var promise = createPromise();
            var logoutUrl = kc.createLogoutUrl(options);
            var ref = cordovaOpenWindowWrapper(logoutUrl, "_blank", "location=no,hidden=yes,clearcache=yes");
            var error;
            ref.addEventListener("loadstart", function(event) {
              if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                ref.close();
              }
            });
            ref.addEventListener("loaderror", function(event) {
              if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                ref.close();
              } else {
                error = true;
                ref.close();
              }
            });
            ref.addEventListener("exit", function(event) {
              if (error) {
                promise.setError();
              } else {
                kc.clearToken();
                promise.setSuccess();
              }
            });
            return promise.promise;
          },
          register: function(options) {
            var promise = createPromise();
            var registerUrl = kc.createRegisterUrl();
            var cordovaOptions = createCordovaOptions(options);
            var ref = cordovaOpenWindowWrapper(registerUrl, "_blank", cordovaOptions);
            ref.addEventListener("loadstart", function(event) {
              if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                ref.close();
                var oauth = parseCallback(event.url);
                processCallback(oauth, promise);
              }
            });
            return promise.promise;
          },
          accountManagement: function() {
            var accountUrl = kc.createAccountUrl();
            if (typeof accountUrl !== "undefined") {
              var ref = cordovaOpenWindowWrapper(accountUrl, "_blank", "location=no");
              ref.addEventListener("loadstart", function(event) {
                if (event.url.indexOf(getCordovaRedirectUri()) == 0) {
                  ref.close();
                }
              });
            } else {
              throw "Not supported by the OIDC server";
            }
          },
          redirectUri: function(options) {
            return getCordovaRedirectUri();
          }
        };
      }
      if (type == "cordova-native") {
        loginIframe.enable = false;
        return {
          login: function(options) {
            var promise = createPromise();
            var loginUrl = kc.createLoginUrl(options);
            universalLinks.subscribe("keycloak", function(event) {
              universalLinks.unsubscribe("keycloak");
              window.cordova.plugins.browsertab.close();
              var oauth = parseCallback(event.url);
              processCallback(oauth, promise);
            });
            window.cordova.plugins.browsertab.openUrl(loginUrl);
            return promise.promise;
          },
          logout: function(options) {
            var promise = createPromise();
            var logoutUrl = kc.createLogoutUrl(options);
            universalLinks.subscribe("keycloak", function(event) {
              universalLinks.unsubscribe("keycloak");
              window.cordova.plugins.browsertab.close();
              kc.clearToken();
              promise.setSuccess();
            });
            window.cordova.plugins.browsertab.openUrl(logoutUrl);
            return promise.promise;
          },
          register: function(options) {
            var promise = createPromise();
            var registerUrl = kc.createRegisterUrl(options);
            universalLinks.subscribe("keycloak", function(event) {
              universalLinks.unsubscribe("keycloak");
              window.cordova.plugins.browsertab.close();
              var oauth = parseCallback(event.url);
              processCallback(oauth, promise);
            });
            window.cordova.plugins.browsertab.openUrl(registerUrl);
            return promise.promise;
          },
          accountManagement: function() {
            var accountUrl = kc.createAccountUrl();
            if (typeof accountUrl !== "undefined") {
              window.cordova.plugins.browsertab.openUrl(accountUrl);
            } else {
              throw "Not supported by the OIDC server";
            }
          },
          redirectUri: function(options) {
            if (options && options.redirectUri) {
              return options.redirectUri;
            } else if (kc.redirectUri) {
              return kc.redirectUri;
            } else {
              return "http://localhost";
            }
          }
        };
      }
      throw "invalid adapter type: " + type;
    }
    var LocalStorage = function() {
      if (!(this instanceof LocalStorage)) {
        return new LocalStorage();
      }
      localStorage.setItem("kc-test", "test");
      localStorage.removeItem("kc-test");
      var cs = this;
      function clearExpired() {
        var time = (/* @__PURE__ */ new Date()).getTime();
        for (var i2 = 0; i2 < localStorage.length; i2++) {
          var key = localStorage.key(i2);
          if (key && key.indexOf("kc-callback-") == 0) {
            var value = localStorage.getItem(key);
            if (value) {
              try {
                var expires = JSON.parse(value).expires;
                if (!expires || expires < time) {
                  localStorage.removeItem(key);
                }
              } catch (err) {
                localStorage.removeItem(key);
              }
            }
          }
        }
      }
      cs.get = function(state) {
        if (!state) {
          return;
        }
        var key = "kc-callback-" + state;
        var value = localStorage.getItem(key);
        if (value) {
          localStorage.removeItem(key);
          value = JSON.parse(value);
        }
        clearExpired();
        return value;
      };
      cs.add = function(state) {
        clearExpired();
        var key = "kc-callback-" + state.state;
        state.expires = (/* @__PURE__ */ new Date()).getTime() + 60 * 60 * 1e3;
        localStorage.setItem(key, JSON.stringify(state));
      };
    };
    var CookieStorage = function() {
      if (!(this instanceof CookieStorage)) {
        return new CookieStorage();
      }
      var cs = this;
      cs.get = function(state) {
        if (!state) {
          return;
        }
        var value = getCookie("kc-callback-" + state);
        setCookie("kc-callback-" + state, "", cookieExpiration(-100));
        if (value) {
          return JSON.parse(value);
        }
      };
      cs.add = function(state) {
        setCookie("kc-callback-" + state.state, JSON.stringify(state), cookieExpiration(60));
      };
      cs.removeItem = function(key) {
        setCookie(key, "", cookieExpiration(-100));
      };
      var cookieExpiration = function(minutes) {
        var exp = /* @__PURE__ */ new Date();
        exp.setTime(exp.getTime() + minutes * 60 * 1e3);
        return exp;
      };
      var getCookie = function(key) {
        var name = key + "=";
        var ca = document.cookie.split(";");
        for (var i2 = 0; i2 < ca.length; i2++) {
          var c = ca[i2];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      };
      var setCookie = function(key, value, expirationDate) {
        var cookie = key + "=" + value + "; expires=" + expirationDate.toUTCString() + "; ";
        document.cookie = cookie;
      };
    };
    function createCallbackStorage() {
      try {
        return new LocalStorage();
      } catch (err) {
      }
      return new CookieStorage();
    }
    function createLogger(fn) {
      return function() {
        if (kc.enableLogging) {
          fn.apply(console, Array.prototype.slice.call(arguments));
        }
      };
    }
  }
  function bytesToBase64(bytes) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  }
  return Keycloak;
});
var bigInt = function(undefined2) {
  "use strict";
  var BASE = 1e7, LOG_BASE = 7, MAX_INT = 9007199254740992, MAX_INT_ARR = smallToArray(MAX_INT), DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
  var supportsNativeBigInt = typeof BigInt === "function";
  function Integer(v, radix, alphabet, caseSensitive) {
    if (typeof v === "undefined") return Integer[0];
    if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
    return parseValue(v);
  }
  function BigInteger(value, sign) {
    this.value = value;
    this.sign = sign;
    this.isSmall = false;
  }
  BigInteger.prototype = Object.create(Integer.prototype);
  function SmallInteger(value) {
    this.value = value;
    this.sign = value < 0;
    this.isSmall = true;
  }
  SmallInteger.prototype = Object.create(Integer.prototype);
  function NativeBigInt(value) {
    this.value = value;
  }
  NativeBigInt.prototype = Object.create(Integer.prototype);
  function isPrecise(n) {
    return -MAX_INT < n && n < MAX_INT;
  }
  function smallToArray(n) {
    if (n < 1e7) return [n];
    if (n < 1e14) return [n % 1e7, Math.floor(n / 1e7)];
    return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
  }
  function arrayToSmall(arr) {
    trim(arr);
    var length = arr.length;
    if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
      switch (length) {
        case 0:
          return 0;
        case 1:
          return arr[0];
        case 2:
          return arr[0] + arr[1] * BASE;
        default:
          return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
      }
    }
    return arr;
  }
  function trim(v) {
    var i2 = v.length;
    while (v[--i2] === 0) ;
    v.length = i2 + 1;
  }
  function createArray(length) {
    var x = new Array(length);
    var i2 = -1;
    while (++i2 < length) {
      x[i2] = 0;
    }
    return x;
  }
  function truncate(n) {
    if (n > 0) return Math.floor(n);
    return Math.ceil(n);
  }
  function add(a, b) {
    var l_a = a.length, l_b = b.length, r = new Array(l_a), carry = 0, base = BASE, sum, i2;
    for (i2 = 0; i2 < l_b; i2++) {
      sum = a[i2] + b[i2] + carry;
      carry = sum >= base ? 1 : 0;
      r[i2] = sum - carry * base;
    }
    while (i2 < l_a) {
      sum = a[i2] + carry;
      carry = sum === base ? 1 : 0;
      r[i2++] = sum - carry * base;
    }
    if (carry > 0) r.push(carry);
    return r;
  }
  function addAny(a, b) {
    if (a.length >= b.length) return add(a, b);
    return add(b, a);
  }
  function addSmall(a, carry) {
    var l = a.length, r = new Array(l), base = BASE, sum, i2;
    for (i2 = 0; i2 < l; i2++) {
      sum = a[i2] - base + carry;
      carry = Math.floor(sum / base);
      r[i2] = sum - carry * base;
      carry += 1;
    }
    while (carry > 0) {
      r[i2++] = carry % base;
      carry = Math.floor(carry / base);
    }
    return r;
  }
  BigInteger.prototype.add = function(v) {
    var n = parseValue(v);
    if (this.sign !== n.sign) {
      return this.subtract(n.negate());
    }
    var a = this.value, b = n.value;
    if (n.isSmall) {
      return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
    }
    return new BigInteger(addAny(a, b), this.sign);
  };
  BigInteger.prototype.plus = BigInteger.prototype.add;
  SmallInteger.prototype.add = function(v) {
    var n = parseValue(v);
    var a = this.value;
    if (a < 0 !== n.sign) {
      return this.subtract(n.negate());
    }
    var b = n.value;
    if (n.isSmall) {
      if (isPrecise(a + b)) return new SmallInteger(a + b);
      b = smallToArray(Math.abs(b));
    }
    return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
  };
  SmallInteger.prototype.plus = SmallInteger.prototype.add;
  NativeBigInt.prototype.add = function(v) {
    return new NativeBigInt(this.value + parseValue(v).value);
  };
  NativeBigInt.prototype.plus = NativeBigInt.prototype.add;
  function subtract(a, b) {
    var a_l = a.length, b_l = b.length, r = new Array(a_l), borrow = 0, base = BASE, i2, difference;
    for (i2 = 0; i2 < b_l; i2++) {
      difference = a[i2] - borrow - b[i2];
      if (difference < 0) {
        difference += base;
        borrow = 1;
      } else borrow = 0;
      r[i2] = difference;
    }
    for (i2 = b_l; i2 < a_l; i2++) {
      difference = a[i2] - borrow;
      if (difference < 0) difference += base;
      else {
        r[i2++] = difference;
        break;
      }
      r[i2] = difference;
    }
    for (; i2 < a_l; i2++) {
      r[i2] = a[i2];
    }
    trim(r);
    return r;
  }
  function subtractAny(a, b, sign) {
    var value;
    if (compareAbs(a, b) >= 0) {
      value = subtract(a, b);
    } else {
      value = subtract(b, a);
      sign = !sign;
    }
    value = arrayToSmall(value);
    if (typeof value === "number") {
      if (sign) value = -value;
      return new SmallInteger(value);
    }
    return new BigInteger(value, sign);
  }
  function subtractSmall(a, b, sign) {
    var l = a.length, r = new Array(l), carry = -b, base = BASE, i2, difference;
    for (i2 = 0; i2 < l; i2++) {
      difference = a[i2] + carry;
      carry = Math.floor(difference / base);
      difference %= base;
      r[i2] = difference < 0 ? difference + base : difference;
    }
    r = arrayToSmall(r);
    if (typeof r === "number") {
      if (sign) r = -r;
      return new SmallInteger(r);
    }
    return new BigInteger(r, sign);
  }
  BigInteger.prototype.subtract = function(v) {
    var n = parseValue(v);
    if (this.sign !== n.sign) {
      return this.add(n.negate());
    }
    var a = this.value, b = n.value;
    if (n.isSmall) return subtractSmall(a, Math.abs(b), this.sign);
    return subtractAny(a, b, this.sign);
  };
  BigInteger.prototype.minus = BigInteger.prototype.subtract;
  SmallInteger.prototype.subtract = function(v) {
    var n = parseValue(v);
    var a = this.value;
    if (a < 0 !== n.sign) {
      return this.add(n.negate());
    }
    var b = n.value;
    if (n.isSmall) {
      return new SmallInteger(a - b);
    }
    return subtractSmall(b, Math.abs(a), a >= 0);
  };
  SmallInteger.prototype.minus = SmallInteger.prototype.subtract;
  NativeBigInt.prototype.subtract = function(v) {
    return new NativeBigInt(this.value - parseValue(v).value);
  };
  NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;
  BigInteger.prototype.negate = function() {
    return new BigInteger(this.value, !this.sign);
  };
  SmallInteger.prototype.negate = function() {
    var sign = this.sign;
    var small = new SmallInteger(-this.value);
    small.sign = !sign;
    return small;
  };
  NativeBigInt.prototype.negate = function() {
    return new NativeBigInt(-this.value);
  };
  BigInteger.prototype.abs = function() {
    return new BigInteger(this.value, false);
  };
  SmallInteger.prototype.abs = function() {
    return new SmallInteger(Math.abs(this.value));
  };
  NativeBigInt.prototype.abs = function() {
    return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
  };
  function multiplyLong(a, b) {
    var a_l = a.length, b_l = b.length, l = a_l + b_l, r = createArray(l), base = BASE, product, carry, i2, a_i, b_j;
    for (i2 = 0; i2 < a_l; ++i2) {
      a_i = a[i2];
      for (var j = 0; j < b_l; ++j) {
        b_j = b[j];
        product = a_i * b_j + r[i2 + j];
        carry = Math.floor(product / base);
        r[i2 + j] = product - carry * base;
        r[i2 + j + 1] += carry;
      }
    }
    trim(r);
    return r;
  }
  function multiplySmall(a, b) {
    var l = a.length, r = new Array(l), base = BASE, carry = 0, product, i2;
    for (i2 = 0; i2 < l; i2++) {
      product = a[i2] * b + carry;
      carry = Math.floor(product / base);
      r[i2] = product - carry * base;
    }
    while (carry > 0) {
      r[i2++] = carry % base;
      carry = Math.floor(carry / base);
    }
    return r;
  }
  function shiftLeft(x, n) {
    var r = [];
    while (n-- > 0) r.push(0);
    return r.concat(x);
  }
  function multiplyKaratsuba(x, y) {
    var n = Math.max(x.length, y.length);
    if (n <= 30) return multiplyLong(x, y);
    n = Math.ceil(n / 2);
    var b = x.slice(n), a = x.slice(0, n), d = y.slice(n), c = y.slice(0, n);
    var ac = multiplyKaratsuba(a, c), bd = multiplyKaratsuba(b, d), abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));
    var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
    trim(product);
    return product;
  }
  function useKaratsuba(l1, l2) {
    return -0.012 * l1 - 0.012 * l2 + 15e-6 * l1 * l2 > 0;
  }
  BigInteger.prototype.multiply = function(v) {
    var n = parseValue(v), a = this.value, b = n.value, sign = this.sign !== n.sign, abs;
    if (n.isSmall) {
      if (b === 0) return Integer[0];
      if (b === 1) return this;
      if (b === -1) return this.negate();
      abs = Math.abs(b);
      if (abs < BASE) {
        return new BigInteger(multiplySmall(a, abs), sign);
      }
      b = smallToArray(abs);
    }
    if (useKaratsuba(a.length, b.length)) return new BigInteger(multiplyKaratsuba(a, b), sign);
    return new BigInteger(multiplyLong(a, b), sign);
  };
  BigInteger.prototype.times = BigInteger.prototype.multiply;
  function multiplySmallAndArray(a, b, sign) {
    if (a < BASE) {
      return new BigInteger(multiplySmall(b, a), sign);
    }
    return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
  }
  SmallInteger.prototype._multiplyBySmall = function(a) {
    if (isPrecise(a.value * this.value)) {
      return new SmallInteger(a.value * this.value);
    }
    return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
  };
  BigInteger.prototype._multiplyBySmall = function(a) {
    if (a.value === 0) return Integer[0];
    if (a.value === 1) return this;
    if (a.value === -1) return this.negate();
    return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
  };
  SmallInteger.prototype.multiply = function(v) {
    return parseValue(v)._multiplyBySmall(this);
  };
  SmallInteger.prototype.times = SmallInteger.prototype.multiply;
  NativeBigInt.prototype.multiply = function(v) {
    return new NativeBigInt(this.value * parseValue(v).value);
  };
  NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;
  function square(a) {
    var l = a.length, r = createArray(l + l), base = BASE, product, carry, i2, a_i, a_j;
    for (i2 = 0; i2 < l; i2++) {
      a_i = a[i2];
      carry = 0 - a_i * a_i;
      for (var j = i2; j < l; j++) {
        a_j = a[j];
        product = 2 * (a_i * a_j) + r[i2 + j] + carry;
        carry = Math.floor(product / base);
        r[i2 + j] = product - carry * base;
      }
      r[i2 + l] = carry;
    }
    trim(r);
    return r;
  }
  BigInteger.prototype.square = function() {
    return new BigInteger(square(this.value), false);
  };
  SmallInteger.prototype.square = function() {
    var value = this.value * this.value;
    if (isPrecise(value)) return new SmallInteger(value);
    return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
  };
  NativeBigInt.prototype.square = function(v) {
    return new NativeBigInt(this.value * this.value);
  };
  function divMod1(a, b) {
    var a_l = a.length, b_l = b.length, base = BASE, result = createArray(b.length), divisorMostSignificantDigit = b[b_l - 1], lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)), remainder = multiplySmall(a, lambda), divisor = multiplySmall(b, lambda), quotientDigit, shift, carry, borrow, i2, l, q;
    if (remainder.length <= a_l) remainder.push(0);
    divisor.push(0);
    divisorMostSignificantDigit = divisor[b_l - 1];
    for (shift = a_l - b_l; shift >= 0; shift--) {
      quotientDigit = base - 1;
      if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
        quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
      }
      carry = 0;
      borrow = 0;
      l = divisor.length;
      for (i2 = 0; i2 < l; i2++) {
        carry += quotientDigit * divisor[i2];
        q = Math.floor(carry / base);
        borrow += remainder[shift + i2] - (carry - q * base);
        carry = q;
        if (borrow < 0) {
          remainder[shift + i2] = borrow + base;
          borrow = -1;
        } else {
          remainder[shift + i2] = borrow;
          borrow = 0;
        }
      }
      while (borrow !== 0) {
        quotientDigit -= 1;
        carry = 0;
        for (i2 = 0; i2 < l; i2++) {
          carry += remainder[shift + i2] - base + divisor[i2];
          if (carry < 0) {
            remainder[shift + i2] = carry + base;
            carry = 0;
          } else {
            remainder[shift + i2] = carry;
            carry = 1;
          }
        }
        borrow += carry;
      }
      result[shift] = quotientDigit;
    }
    remainder = divModSmall(remainder, lambda)[0];
    return [arrayToSmall(result), arrayToSmall(remainder)];
  }
  function divMod2(a, b) {
    var a_l = a.length, b_l = b.length, result = [], part = [], base = BASE, guess, xlen, highx, highy, check;
    while (a_l) {
      part.unshift(a[--a_l]);
      trim(part);
      if (compareAbs(part, b) < 0) {
        result.push(0);
        continue;
      }
      xlen = part.length;
      highx = part[xlen - 1] * base + part[xlen - 2];
      highy = b[b_l - 1] * base + b[b_l - 2];
      if (xlen > b_l) {
        highx = (highx + 1) * base;
      }
      guess = Math.ceil(highx / highy);
      do {
        check = multiplySmall(b, guess);
        if (compareAbs(check, part) <= 0) break;
        guess--;
      } while (guess);
      result.push(guess);
      part = subtract(part, check);
    }
    result.reverse();
    return [arrayToSmall(result), arrayToSmall(part)];
  }
  function divModSmall(value, lambda) {
    var length = value.length, quotient = createArray(length), base = BASE, i2, q, remainder, divisor;
    remainder = 0;
    for (i2 = length - 1; i2 >= 0; --i2) {
      divisor = remainder * base + value[i2];
      q = truncate(divisor / lambda);
      remainder = divisor - q * lambda;
      quotient[i2] = q | 0;
    }
    return [quotient, remainder | 0];
  }
  function divModAny(self2, v) {
    var value, n = parseValue(v);
    if (supportsNativeBigInt) {
      return [new NativeBigInt(self2.value / n.value), new NativeBigInt(self2.value % n.value)];
    }
    var a = self2.value, b = n.value;
    var quotient;
    if (b === 0) throw new Error("Cannot divide by zero");
    if (self2.isSmall) {
      if (n.isSmall) {
        return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
      }
      return [Integer[0], self2];
    }
    if (n.isSmall) {
      if (b === 1) return [self2, Integer[0]];
      if (b == -1) return [self2.negate(), Integer[0]];
      var abs = Math.abs(b);
      if (abs < BASE) {
        value = divModSmall(a, abs);
        quotient = arrayToSmall(value[0]);
        var remainder = value[1];
        if (self2.sign) remainder = -remainder;
        if (typeof quotient === "number") {
          if (self2.sign !== n.sign) quotient = -quotient;
          return [new SmallInteger(quotient), new SmallInteger(remainder)];
        }
        return [new BigInteger(quotient, self2.sign !== n.sign), new SmallInteger(remainder)];
      }
      b = smallToArray(abs);
    }
    var comparison = compareAbs(a, b);
    if (comparison === -1) return [Integer[0], self2];
    if (comparison === 0) return [Integer[self2.sign === n.sign ? 1 : -1], Integer[0]];
    if (a.length + b.length <= 200) value = divMod1(a, b);
    else value = divMod2(a, b);
    quotient = value[0];
    var qSign = self2.sign !== n.sign, mod = value[1], mSign = self2.sign;
    if (typeof quotient === "number") {
      if (qSign) quotient = -quotient;
      quotient = new SmallInteger(quotient);
    } else quotient = new BigInteger(quotient, qSign);
    if (typeof mod === "number") {
      if (mSign) mod = -mod;
      mod = new SmallInteger(mod);
    } else mod = new BigInteger(mod, mSign);
    return [quotient, mod];
  }
  BigInteger.prototype.divmod = function(v) {
    var result = divModAny(this, v);
    return { quotient: result[0], remainder: result[1] };
  };
  NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;
  BigInteger.prototype.divide = function(v) {
    return divModAny(this, v)[0];
  };
  NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function(v) {
    return new NativeBigInt(this.value / parseValue(v).value);
  };
  SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;
  BigInteger.prototype.mod = function(v) {
    return divModAny(this, v)[1];
  };
  NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function(v) {
    return new NativeBigInt(this.value % parseValue(v).value);
  };
  SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;
  BigInteger.prototype.pow = function(v) {
    var n = parseValue(v), a = this.value, b = n.value, value, x, y;
    if (b === 0) return Integer[1];
    if (a === 0) return Integer[0];
    if (a === 1) return Integer[1];
    if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
    if (n.sign) {
      return Integer[0];
    }
    if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
    if (this.isSmall) {
      if (isPrecise(value = Math.pow(a, b))) return new SmallInteger(truncate(value));
    }
    x = this;
    y = Integer[1];
    while (true) {
      if (b & true) {
        y = y.times(x);
        --b;
      }
      if (b === 0) break;
      b /= 2;
      x = x.square();
    }
    return y;
  };
  SmallInteger.prototype.pow = BigInteger.prototype.pow;
  NativeBigInt.prototype.pow = function(v) {
    var n = parseValue(v);
    var a = this.value, b = n.value;
    var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
    if (b === _0) return Integer[1];
    if (a === _0) return Integer[0];
    if (a === _1) return Integer[1];
    if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
    if (n.isNegative()) return new NativeBigInt(_0);
    var x = this;
    var y = Integer[1];
    while (true) {
      if ((b & _1) === _1) {
        y = y.times(x);
        --b;
      }
      if (b === _0) break;
      b /= _2;
      x = x.square();
    }
    return y;
  };
  BigInteger.prototype.modPow = function(exp, mod) {
    exp = parseValue(exp);
    mod = parseValue(mod);
    if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
    var r = Integer[1], base = this.mod(mod);
    if (exp.isNegative()) {
      exp = exp.multiply(Integer[-1]);
      base = base.modInv(mod);
    }
    while (exp.isPositive()) {
      if (base.isZero()) return Integer[0];
      if (exp.isOdd()) r = r.multiply(base).mod(mod);
      exp = exp.divide(2);
      base = base.square().mod(mod);
    }
    return r;
  };
  NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;
  function compareAbs(a, b) {
    if (a.length !== b.length) {
      return a.length > b.length ? 1 : -1;
    }
    for (var i2 = a.length - 1; i2 >= 0; i2--) {
      if (a[i2] !== b[i2]) return a[i2] > b[i2] ? 1 : -1;
    }
    return 0;
  }
  BigInteger.prototype.compareAbs = function(v) {
    var n = parseValue(v), a = this.value, b = n.value;
    if (n.isSmall) return 1;
    return compareAbs(a, b);
  };
  SmallInteger.prototype.compareAbs = function(v) {
    var n = parseValue(v), a = Math.abs(this.value), b = n.value;
    if (n.isSmall) {
      b = Math.abs(b);
      return a === b ? 0 : a > b ? 1 : -1;
    }
    return -1;
  };
  NativeBigInt.prototype.compareAbs = function(v) {
    var a = this.value;
    var b = parseValue(v).value;
    a = a >= 0 ? a : -a;
    b = b >= 0 ? b : -b;
    return a === b ? 0 : a > b ? 1 : -1;
  };
  BigInteger.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var n = parseValue(v), a = this.value, b = n.value;
    if (this.sign !== n.sign) {
      return n.sign ? 1 : -1;
    }
    if (n.isSmall) {
      return this.sign ? -1 : 1;
    }
    return compareAbs(a, b) * (this.sign ? -1 : 1);
  };
  BigInteger.prototype.compareTo = BigInteger.prototype.compare;
  SmallInteger.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var n = parseValue(v), a = this.value, b = n.value;
    if (n.isSmall) {
      return a == b ? 0 : a > b ? 1 : -1;
    }
    if (a < 0 !== n.sign) {
      return a < 0 ? -1 : 1;
    }
    return a < 0 ? 1 : -1;
  };
  SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;
  NativeBigInt.prototype.compare = function(v) {
    if (v === Infinity) {
      return -1;
    }
    if (v === -Infinity) {
      return 1;
    }
    var a = this.value;
    var b = parseValue(v).value;
    return a === b ? 0 : a > b ? 1 : -1;
  };
  NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;
  BigInteger.prototype.equals = function(v) {
    return this.compare(v) === 0;
  };
  NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;
  BigInteger.prototype.notEquals = function(v) {
    return this.compare(v) !== 0;
  };
  NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;
  BigInteger.prototype.greater = function(v) {
    return this.compare(v) > 0;
  };
  NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;
  BigInteger.prototype.lesser = function(v) {
    return this.compare(v) < 0;
  };
  NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;
  BigInteger.prototype.greaterOrEquals = function(v) {
    return this.compare(v) >= 0;
  };
  NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;
  BigInteger.prototype.lesserOrEquals = function(v) {
    return this.compare(v) <= 0;
  };
  NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;
  BigInteger.prototype.isEven = function() {
    return (this.value[0] & 1) === 0;
  };
  SmallInteger.prototype.isEven = function() {
    return (this.value & 1) === 0;
  };
  NativeBigInt.prototype.isEven = function() {
    return (this.value & BigInt(1)) === BigInt(0);
  };
  BigInteger.prototype.isOdd = function() {
    return (this.value[0] & 1) === 1;
  };
  SmallInteger.prototype.isOdd = function() {
    return (this.value & 1) === 1;
  };
  NativeBigInt.prototype.isOdd = function() {
    return (this.value & BigInt(1)) === BigInt(1);
  };
  BigInteger.prototype.isPositive = function() {
    return !this.sign;
  };
  SmallInteger.prototype.isPositive = function() {
    return this.value > 0;
  };
  NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;
  BigInteger.prototype.isNegative = function() {
    return this.sign;
  };
  SmallInteger.prototype.isNegative = function() {
    return this.value < 0;
  };
  NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;
  BigInteger.prototype.isUnit = function() {
    return false;
  };
  SmallInteger.prototype.isUnit = function() {
    return Math.abs(this.value) === 1;
  };
  NativeBigInt.prototype.isUnit = function() {
    return this.abs().value === BigInt(1);
  };
  BigInteger.prototype.isZero = function() {
    return false;
  };
  SmallInteger.prototype.isZero = function() {
    return this.value === 0;
  };
  NativeBigInt.prototype.isZero = function() {
    return this.value === BigInt(0);
  };
  BigInteger.prototype.isDivisibleBy = function(v) {
    var n = parseValue(v);
    if (n.isZero()) return false;
    if (n.isUnit()) return true;
    if (n.compareAbs(2) === 0) return this.isEven();
    return this.mod(n).isZero();
  };
  NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;
  function isBasicPrime(v) {
    var n = v.abs();
    if (n.isUnit()) return false;
    if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
    if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
    if (n.lesser(49)) return true;
  }
  function millerRabinTest(n, a) {
    var nPrev = n.prev(), b = nPrev, r = 0, d, t, i2, x;
    while (b.isEven()) b = b.divide(2), r++;
    next: for (i2 = 0; i2 < a.length; i2++) {
      if (n.lesser(a[i2])) continue;
      x = bigInt(a[i2]).modPow(b, n);
      if (x.isUnit() || x.equals(nPrev)) continue;
      for (d = r - 1; d != 0; d--) {
        x = x.square().mod(n);
        if (x.isUnit()) return false;
        if (x.equals(nPrev)) continue next;
      }
      return false;
    }
    return true;
  }
  BigInteger.prototype.isPrime = function(strict) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined2) return isPrime;
    var n = this.abs();
    var bits = n.bitLength();
    if (bits <= 64) return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    var logN = Math.log(2) * bits.toJSNumber();
    var t = Math.ceil(strict === true ? 2 * Math.pow(logN, 2) : logN);
    for (var a = [], i2 = 0; i2 < t; i2++) {
      a.push(bigInt(i2 + 2));
    }
    return millerRabinTest(n, a);
  };
  NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;
  BigInteger.prototype.isProbablePrime = function(iterations, rng) {
    var isPrime = isBasicPrime(this);
    if (isPrime !== undefined2) return isPrime;
    var n = this.abs();
    var t = iterations === undefined2 ? 5 : iterations;
    for (var a = [], i2 = 0; i2 < t; i2++) {
      a.push(bigInt.randBetween(2, n.minus(2), rng));
    }
    return millerRabinTest(n, a);
  };
  NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;
  BigInteger.prototype.modInv = function(n) {
    var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
    while (!newR.isZero()) {
      q = r.divide(newR);
      lastT = t;
      lastR = r;
      t = newT;
      r = newR;
      newT = lastT.subtract(q.multiply(newT));
      newR = lastR.subtract(q.multiply(newR));
    }
    if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
    if (t.compare(0) === -1) {
      t = t.add(n);
    }
    if (this.isNegative()) {
      return t.negate();
    }
    return t;
  };
  NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;
  BigInteger.prototype.next = function() {
    var value = this.value;
    if (this.sign) {
      return subtractSmall(value, 1, this.sign);
    }
    return new BigInteger(addSmall(value, 1), this.sign);
  };
  SmallInteger.prototype.next = function() {
    var value = this.value;
    if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
    return new BigInteger(MAX_INT_ARR, false);
  };
  NativeBigInt.prototype.next = function() {
    return new NativeBigInt(this.value + BigInt(1));
  };
  BigInteger.prototype.prev = function() {
    var value = this.value;
    if (this.sign) {
      return new BigInteger(addSmall(value, 1), true);
    }
    return subtractSmall(value, 1, this.sign);
  };
  SmallInteger.prototype.prev = function() {
    var value = this.value;
    if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
    return new BigInteger(MAX_INT_ARR, true);
  };
  NativeBigInt.prototype.prev = function() {
    return new NativeBigInt(this.value - BigInt(1));
  };
  var powersOfTwo = [1];
  while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
  var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];
  function shift_isSmall(n) {
    return Math.abs(n) <= BASE;
  }
  BigInteger.prototype.shiftLeft = function(v) {
    var n = parseValue(v).toJSNumber();
    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }
    if (n < 0) return this.shiftRight(-n);
    var result = this;
    if (result.isZero()) return result;
    while (n >= powers2Length) {
      result = result.multiply(highestPower2);
      n -= powers2Length - 1;
    }
    return result.multiply(powersOfTwo[n]);
  };
  NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;
  BigInteger.prototype.shiftRight = function(v) {
    var remQuo;
    var n = parseValue(v).toJSNumber();
    if (!shift_isSmall(n)) {
      throw new Error(String(n) + " is too large for shifting.");
    }
    if (n < 0) return this.shiftLeft(-n);
    var result = this;
    while (n >= powers2Length) {
      if (result.isZero() || result.isNegative() && result.isUnit()) return result;
      remQuo = divModAny(result, highestPower2);
      result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
      n -= powers2Length - 1;
    }
    remQuo = divModAny(result, powersOfTwo[n]);
    return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
  };
  NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;
  function bitwise(x, y, fn) {
    y = parseValue(y);
    var xSign = x.isNegative(), ySign = y.isNegative();
    var xRem = xSign ? x.not() : x, yRem = ySign ? y.not() : y;
    var xDigit = 0, yDigit = 0;
    var xDivMod = null, yDivMod = null;
    var result = [];
    while (!xRem.isZero() || !yRem.isZero()) {
      xDivMod = divModAny(xRem, highestPower2);
      xDigit = xDivMod[1].toJSNumber();
      if (xSign) {
        xDigit = highestPower2 - 1 - xDigit;
      }
      yDivMod = divModAny(yRem, highestPower2);
      yDigit = yDivMod[1].toJSNumber();
      if (ySign) {
        yDigit = highestPower2 - 1 - yDigit;
      }
      xRem = xDivMod[0];
      yRem = yDivMod[0];
      result.push(fn(xDigit, yDigit));
    }
    var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
    for (var i2 = result.length - 1; i2 >= 0; i2 -= 1) {
      sum = sum.multiply(highestPower2).add(bigInt(result[i2]));
    }
    return sum;
  }
  BigInteger.prototype.not = function() {
    return this.negate().prev();
  };
  NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;
  BigInteger.prototype.and = function(n) {
    return bitwise(this, n, function(a, b) {
      return a & b;
    });
  };
  NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;
  BigInteger.prototype.or = function(n) {
    return bitwise(this, n, function(a, b) {
      return a | b;
    });
  };
  NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;
  BigInteger.prototype.xor = function(n) {
    return bitwise(this, n, function(a, b) {
      return a ^ b;
    });
  };
  NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;
  var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
  function roughLOB(n) {
    var v = n.value, x = typeof v === "number" ? v | LOBMASK_I : typeof v === "bigint" ? v | BigInt(LOBMASK_I) : v[0] + v[1] * BASE | LOBMASK_BI;
    return x & -x;
  }
  function integerLogarithm(value, base) {
    if (base.compareTo(value) <= 0) {
      var tmp = integerLogarithm(value, base.square(base));
      var p = tmp.p;
      var e = tmp.e;
      var t = p.multiply(base);
      return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p, e: e * 2 };
    }
    return { p: bigInt(1), e: 0 };
  }
  BigInteger.prototype.bitLength = function() {
    var n = this;
    if (n.compareTo(bigInt(0)) < 0) {
      n = n.negate().subtract(bigInt(1));
    }
    if (n.compareTo(bigInt(0)) === 0) {
      return bigInt(0);
    }
    return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
  };
  NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;
  function max(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.greater(b) ? a : b;
  }
  function min(a, b) {
    a = parseValue(a);
    b = parseValue(b);
    return a.lesser(b) ? a : b;
  }
  function gcd(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    if (a.equals(b)) return a;
    if (a.isZero()) return b;
    if (b.isZero()) return a;
    var c = Integer[1], d, t;
    while (a.isEven() && b.isEven()) {
      d = min(roughLOB(a), roughLOB(b));
      a = a.divide(d);
      b = b.divide(d);
      c = c.multiply(d);
    }
    while (a.isEven()) {
      a = a.divide(roughLOB(a));
    }
    do {
      while (b.isEven()) {
        b = b.divide(roughLOB(b));
      }
      if (a.greater(b)) {
        t = b;
        b = a;
        a = t;
      }
      b = b.subtract(a);
    } while (!b.isZero());
    return c.isUnit() ? a : a.multiply(c);
  }
  function lcm(a, b) {
    a = parseValue(a).abs();
    b = parseValue(b).abs();
    return a.divide(gcd(a, b)).multiply(b);
  }
  function randBetween(a, b, rng) {
    a = parseValue(a);
    b = parseValue(b);
    var usedRNG = rng || Math.random;
    var low = min(a, b), high = max(a, b);
    var range = high.subtract(low).add(1);
    if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
    var digits = toBase(range, BASE).value;
    var result = [], restricted = true;
    for (var i2 = 0; i2 < digits.length; i2++) {
      var top = restricted ? digits[i2] + (i2 + 1 < digits.length ? digits[i2 + 1] / BASE : 0) : BASE;
      var digit = truncate(usedRNG() * top);
      result.push(digit);
      if (digit < digits[i2]) restricted = false;
    }
    return low.add(Integer.fromArray(result, BASE, false));
  }
  var parseBase = function(text, base, alphabet, caseSensitive) {
    alphabet = alphabet || DEFAULT_ALPHABET;
    text = String(text);
    if (!caseSensitive) {
      text = text.toLowerCase();
      alphabet = alphabet.toLowerCase();
    }
    var length = text.length;
    var i2;
    var absBase = Math.abs(base);
    var alphabetValues = {};
    for (i2 = 0; i2 < alphabet.length; i2++) {
      alphabetValues[alphabet[i2]] = i2;
    }
    for (i2 = 0; i2 < length; i2++) {
      var c = text[i2];
      if (c === "-") continue;
      if (c in alphabetValues) {
        if (alphabetValues[c] >= absBase) {
          if (c === "1" && absBase === 1) continue;
          throw new Error(c + " is not a valid digit in base " + base + ".");
        }
      }
    }
    base = parseValue(base);
    var digits = [];
    var isNegative = text[0] === "-";
    for (i2 = isNegative ? 1 : 0; i2 < text.length; i2++) {
      var c = text[i2];
      if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
      else if (c === "<") {
        var start = i2;
        do {
          i2++;
        } while (text[i2] !== ">" && i2 < text.length);
        digits.push(parseValue(text.slice(start + 1, i2)));
      } else throw new Error(c + " is not a valid character");
    }
    return parseBaseFromArray(digits, base, isNegative);
  };
  function parseBaseFromArray(digits, base, isNegative) {
    var val = Integer[0], pow = Integer[1], i2;
    for (i2 = digits.length - 1; i2 >= 0; i2--) {
      val = val.add(digits[i2].times(pow));
      pow = pow.times(base);
    }
    return isNegative ? val.negate() : val;
  }
  function stringify(digit, alphabet) {
    alphabet = alphabet || DEFAULT_ALPHABET;
    if (digit < alphabet.length) {
      return alphabet[digit];
    }
    return "<" + digit + ">";
  }
  function toBase(n, base) {
    base = bigInt(base);
    if (base.isZero()) {
      if (n.isZero()) return { value: [0], isNegative: false };
      throw new Error("Cannot convert nonzero numbers to base 0.");
    }
    if (base.equals(-1)) {
      if (n.isZero()) return { value: [0], isNegative: false };
      if (n.isNegative()) return { value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber())).map(Array.prototype.valueOf, [1, 0])), isNegative: false };
      var arr = Array.apply(null, Array(n.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      arr.unshift([1]);
      return { value: [].concat.apply([], arr), isNegative: false };
    }
    var neg = false;
    if (n.isNegative() && base.isPositive()) {
      neg = true;
      n = n.abs();
    }
    if (base.isUnit()) {
      if (n.isZero()) return { value: [0], isNegative: false };
      return { value: Array.apply(null, Array(n.toJSNumber())).map(Number.prototype.valueOf, 1), isNegative: neg };
    }
    var out = [];
    var left = n, divmod;
    while (left.isNegative() || left.compareAbs(base) >= 0) {
      divmod = left.divmod(base);
      left = divmod.quotient;
      var digit = divmod.remainder;
      if (digit.isNegative()) {
        digit = base.minus(digit).abs();
        left = left.next();
      }
      out.push(digit.toJSNumber());
    }
    out.push(left.toJSNumber());
    return { value: out.reverse(), isNegative: neg };
  }
  function toBaseString(n, base, alphabet) {
    var arr = toBase(n, base);
    return (arr.isNegative ? "-" : "") + arr.value.map(function(x) {
      return stringify(x, alphabet);
    }).join("");
  }
  BigInteger.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  SmallInteger.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  NativeBigInt.prototype.toArray = function(radix) {
    return toBase(this, radix);
  };
  BigInteger.prototype.toString = function(radix, alphabet) {
    if (radix === undefined2) radix = 10;
    if (radix !== 10 || alphabet) return toBaseString(this, radix, alphabet);
    var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
    while (--l >= 0) {
      digit = String(v[l]);
      str += zeros.slice(digit.length) + digit;
    }
    var sign = this.sign ? "-" : "";
    return sign + str;
  };
  SmallInteger.prototype.toString = function(radix, alphabet) {
    if (radix === undefined2) radix = 10;
    if (radix != 10 || alphabet) return toBaseString(this, radix, alphabet);
    return String(this.value);
  };
  NativeBigInt.prototype.toString = SmallInteger.prototype.toString;
  NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function() {
    return this.toString();
  };
  BigInteger.prototype.valueOf = function() {
    return parseInt(this.toString(), 10);
  };
  BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;
  SmallInteger.prototype.valueOf = function() {
    return this.value;
  };
  SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
  NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function() {
    return parseInt(this.toString(), 10);
  };
  function parseStringValue(v) {
    if (isPrecise(+v)) {
      var x = +v;
      if (x === truncate(x)) return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
      throw new Error("Invalid integer: " + v);
    }
    var sign = v[0] === "-";
    if (sign) v = v.slice(1);
    var split = v.split(/e/i);
    if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
    if (split.length === 2) {
      var exp = split[1];
      if (exp[0] === "+") exp = exp.slice(1);
      exp = +exp;
      if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
      var text = split[0];
      var decimalPlace = text.indexOf(".");
      if (decimalPlace >= 0) {
        exp -= text.length - decimalPlace - 1;
        text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
      }
      if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
      text += new Array(exp + 1).join("0");
      v = text;
    }
    var isValid = /^([0-9][0-9]*)$/.test(v);
    if (!isValid) throw new Error("Invalid integer: " + v);
    if (supportsNativeBigInt) {
      return new NativeBigInt(BigInt(sign ? "-" + v : v));
    }
    var r = [], max2 = v.length, l = LOG_BASE, min2 = max2 - l;
    while (max2 > 0) {
      r.push(+v.slice(min2, max2));
      min2 -= l;
      if (min2 < 0) min2 = 0;
      max2 -= l;
    }
    trim(r);
    return new BigInteger(r, sign);
  }
  function parseNumberValue(v) {
    if (supportsNativeBigInt) {
      return new NativeBigInt(BigInt(v));
    }
    if (isPrecise(v)) {
      if (v !== truncate(v)) throw new Error(v + " is not an integer.");
      return new SmallInteger(v);
    }
    return parseStringValue(v.toString());
  }
  function parseValue(v) {
    if (typeof v === "number") {
      return parseNumberValue(v);
    }
    if (typeof v === "string") {
      return parseStringValue(v);
    }
    if (typeof v === "bigint") {
      return new NativeBigInt(v);
    }
    return v;
  }
  for (var i = 0; i < 1e3; i++) {
    Integer[i] = parseValue(i);
    if (i > 0) Integer[-i] = parseValue(-i);
  }
  Integer.one = Integer[1];
  Integer.zero = Integer[0];
  Integer.minusOne = Integer[-1];
  Integer.max = max;
  Integer.min = min;
  Integer.gcd = gcd;
  Integer.lcm = lcm;
  Integer.isInstance = function(x) {
    return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt;
  };
  Integer.randBetween = randBetween;
  Integer.fromArray = function(digits, base, isNegative) {
    return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
  };
  return Integer;
}();
if (typeof module !== "undefined" && module.hasOwnProperty("exports")) {
  module.exports = bigInt;
}
if (typeof define === "function" && define.amd) {
  define(function() {
    return bigInt;
  });
}
(function(a, b) {
  if ("function" == typeof define && define.amd) define([], b);
  else if ("undefined" != typeof exports) b();
  else {
    b(), a.FileSaver = { exports: {} }.exports;
  }
})(this, function() {
  "use strict";
  function b(a2, b2) {
    return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
  }
  function c(a2, b2, c2) {
    var d2 = new XMLHttpRequest();
    d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
      g(d2.response, b2, c2);
    }, d2.onerror = function() {
      console.error("could not download file");
    }, d2.send();
  }
  function d(a2) {
    var b2 = new XMLHttpRequest();
    b2.open("HEAD", a2, false);
    try {
      b2.send();
    } catch (a3) {
    }
    return 200 <= b2.status && 299 >= b2.status;
  }
  function e(a2) {
    try {
      a2.dispatchEvent(new MouseEvent("click"));
    } catch (c2) {
      var b2 = document.createEvent("MouseEvents");
      b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
    }
  }
  var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
  } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
    var i = f.URL || f.webkitURL, j = document.createElement("a");
    g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
      i.revokeObjectURL(j.href);
    }, 4e4), setTimeout(function() {
      e(j);
    }, 0));
  } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
    if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
    else if (d(f2)) c(f2, g2, h);
    else {
      var i = document.createElement("a");
      i.href = f2, i.target = "_blank", setTimeout(function() {
        e(i);
      });
    }
  } : function(b2, d2, e2, g2) {
    if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
    var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((j || h && i || a) && "undefined" != typeof FileReader) {
      var k = new FileReader();
      k.onloadend = function() {
        var a2 = k.result;
        a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
      }, k.readAsDataURL(b2);
    } else {
      var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
      g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
        l.revokeObjectURL(m);
      }, 4e4);
    }
  });
  f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
});
var DCM4CHE = DCM4CHE || {};
DCM4CHE.elementName = /* @__PURE__ */ function(dictionary) {
  var tables = [dictionary], forTag = function(tag, privateCreator) {
    var i = tables.length, value;
    if (tag.slice(4) === "0000")
      return "Group Length";
    if ("02468ACE".indexOf(tag.charAt(3)) < 0) {
      if (tag.slice(4, 6) === "00")
        return "Private Creator";
      tag = tag.slice(0, 4) + "xx" + tag.slice(6);
    } else {
      privateCreator = void 0;
      switch (tag.slice(0, 2)) {
        case "10":
          switch (tag.slice(2, 4)) {
            case "00":
              if ("012345".indexOf(tag.charAt(7)) >= 0)
                tag = "1000xxx" + tag.slice(7);
              break;
            case "10":
              tag = "1010xxxx";
              break;
          }
          break;
        case "7F":
          if (tag.slice(2, 4) === "E0")
            break;
        case "50":
        case "60":
          tag = tag.slice(0, 2) + "xx" + tag.slice(4);
      }
    }
    while (i--) {
      if (privateCreator === tables[i].privateCreator) {
        value = tables[i][tag];
        if (value)
          return value;
      }
    }
    if (tag === "all") {
      return dictionary;
    }
    return void 0;
  };
  return {
    addDictionary: function(dictionary2) {
      tables.push(dictionary2);
    },
    forTag
  };
}({
  "privateCreator": void 0,
  "00000000": "Command Group Length",
  "00000001": "Command Length to End",
  "00000002": "Affected SOP Class UID",
  "00000003": "Requested SOP Class UID",
  "00000010": "Command Recognition Code",
  "00000100": "Command Field",
  "00000110": "Message ID",
  "00000120": "Message ID Being Responded To",
  "00000200": "Initiator",
  "00000300": "Receiver",
  "00000400": "Find Location",
  "00000600": "Move Destination",
  "00000700": "Priority",
  "00000800": "Command Data Set Type",
  "00000850": "Number of Matches",
  "00000860": "Response Sequence Number",
  "00000900": "Status",
  "00000901": "Offending Element",
  "00000902": "Error Comment",
  "00000903": "Error ID",
  "00001000": "Affected SOP Instance UID",
  "00001001": "Requested SOP Instance UID",
  "00001002": "Event Type ID",
  "00001005": "Attribute Identifier List",
  "00001008": "Action Type ID",
  "00001020": "Number of Remaining Sub-operations",
  "00001021": "Number of Completed Sub-operations",
  "00001022": "Number of Failed Sub-operations",
  "00001023": "Number of Warning Sub-operations",
  "00001030": "Move Originator Application Entity Title",
  "00001031": "Move Originator Message ID",
  "00004000": "Dialog Receiver",
  "00004010": "Terminal Type",
  "00005010": "Message Set ID",
  "00005020": "End Message ID",
  "00005110": "Display Format",
  "00005120": "Page Position ID",
  "00005130": "Text Format ID",
  "00005140": "Normal/Reverse",
  "00005150": "Add Gray Scale",
  "00005160": "Borders",
  "00005170": "Copies",
  "00005180": "Command Magnification Type",
  "00005190": "Erase",
  "000051A0": "Print",
  "000051B0": "Overlays",
  "00020000": "File Meta Information Group Length",
  "00020001": "File Meta Information Version",
  "00020002": "Media Storage SOP Class UID",
  "00020003": "Media Storage SOP Instance UID",
  "00020010": "Transfer Syntax UID",
  "00020012": "Implementation Class UID",
  "00020013": "Implementation Version Name",
  "00020016": "Source Application Entity Title",
  "00020017": "Sending Application Entity Title",
  "00020018": "Receiving Application Entity Title",
  "00020026": "Source Presentation Address",
  "00020027": "Sending Presentation Address",
  "00020028": "Receiving Presentation Address",
  "00020031": "RTV Meta Information Version",
  "00020032": "RTV Communication SOP Class UID",
  "00020033": "RTV Communication SOP Instance UID",
  "00020035": "RTV Source Identifier",
  "00020036": "RTV Flow Identifier",
  "00020037": "RTV Flow RTP Sampling Rate",
  "00020038": "RTV Flow Actual Frame Duration",
  "00020100": "Private Information Creator UID",
  "00020102": "Private Information",
  "00041130": "File-set ID",
  "00041141": "File-set Descriptor File ID",
  "00041142": "Specific Character Set of File-set Descriptor File",
  "00041200": "Offset of the First Directory Record of the Root Directory Entity",
  "00041202": "Offset of the Last Directory Record of the Root Directory Entity",
  "00041212": "File-set Consistency Flag",
  "00041220": "Directory Record Sequence",
  "00041400": "Offset of the Next Directory Record",
  "00041410": "Record In-use Flag",
  "00041420": "Offset of Referenced Lower-Level Directory Entity",
  "00041430": "Directory Record Type",
  "00041432": "Private Record UID",
  "00041500": "Referenced File ID",
  "00041504": "MRDR Directory Record Offset",
  "00041510": "Referenced SOP Class UID in File",
  "00041511": "Referenced SOP Instance UID in File",
  "00041512": "Referenced Transfer Syntax UID in File",
  "0004151A": "Referenced Related General SOP Class UID in File",
  "00041600": "Number of References",
  "00080001": "Length to End",
  "00080005": "Specific Character Set",
  "00080006": "Language Code Sequence",
  "00080008": "Image Type",
  "00080010": "Recognition Code",
  "00080012": "Instance Creation Date",
  "00080013": "Instance Creation Time",
  "00080014": "Instance Creator UID",
  "00080015": "Instance Coercion DateTime",
  "00080016": "SOP Class UID",
  "00080017": "Acquisition UID",
  "00080018": "SOP Instance UID",
  "00080019": "Pyramid UID",
  "0008001A": "Related General SOP Class UID",
  "0008001B": "Original Specialized SOP Class UID",
  "0008001C": "Synthetic Data",
  "0008001D": "Sensitive Content Code Sequence",
  "00080020": "Study Date",
  "00080021": "Series Date",
  "00080022": "Acquisition Date",
  "00080023": "Content Date",
  "00080024": "Overlay Date",
  "00080025": "Curve Date",
  "0008002A": "Acquisition DateTime",
  "00080030": "Study Time",
  "00080031": "Series Time",
  "00080032": "Acquisition Time",
  "00080033": "Content Time",
  "00080034": "Overlay Time",
  "00080035": "Curve Time",
  "00080040": "Data Set Type",
  "00080041": "Data Set Subtype",
  "00080042": "Nuclear Medicine Series Type",
  "00080050": "Accession Number",
  "00080051": "Issuer of Accession Number Sequence",
  "00080052": "Query/Retrieve Level",
  "00080053": "Query/Retrieve View",
  "00080054": "Retrieve AE Title",
  "00080055": "Station AE Title",
  "00080056": "Instance Availability",
  "00080058": "Failed SOP Instance UID List",
  "00080060": "Modality",
  "00080061": "Modalities in Study",
  "00080062": "SOP Classes in Study",
  "00080063": "Anatomic Regions in Study Code Sequence",
  "00080064": "Conversion Type",
  "00080068": "Presentation Intent Type",
  "00080070": "Manufacturer",
  "00080080": "Institution Name",
  "00080081": "Institution Address",
  "00080082": "Institution Code Sequence",
  "00080090": "Referring Physician's Name",
  "00080092": "Referring Physician's Address",
  "00080094": "Referring Physician's Telephone Numbers",
  "00080096": "Referring Physician Identification Sequence",
  "0008009C": "Consulting Physician's Name",
  "0008009D": "Consulting Physician Identification Sequence",
  "00080100": "Code Value",
  "00080101": "Extended Code Value",
  "00080102": "Coding Scheme Designator",
  "00080103": "Coding Scheme Version",
  "00080104": "Code Meaning",
  "00080105": "Mapping Resource",
  "00080106": "Context Group Version",
  "00080107": "Context Group Local Version",
  "00080108": "Extended Code Meaning",
  "00080109": "Coding Scheme Resources Sequence",
  "0008010A": "Coding Scheme URL Type",
  "0008010B": "Context Group Extension Flag",
  "0008010C": "Coding Scheme UID",
  "0008010D": "Context Group Extension Creator UID",
  "0008010E": "Coding Scheme URL",
  "0008010F": "Context Identifier",
  "00080110": "Coding Scheme Identification Sequence",
  "00080112": "Coding Scheme Registry",
  "00080114": "Coding Scheme External ID",
  "00080115": "Coding Scheme Name",
  "00080116": "Coding Scheme Responsible Organization",
  "00080117": "Context UID",
  "00080118": "Mapping Resource UID",
  "00080119": "Long Code Value",
  "00080120": "URN Code Value",
  "00080121": "Equivalent Code Sequence",
  "00080122": "Mapping Resource Name",
  "00080123": "Context Group Identification Sequence",
  "00080124": "Mapping Resource Identification Sequence",
  "00080201": "Timezone Offset From UTC",
  "00080220": "Responsible Group Code Sequence",
  "00080221": "Equipment Modality",
  "00080222": "Manufacturer's Related Model Group",
  "00080300": "Private Data Element Characteristics Sequence",
  "00080301": "Private Group Reference",
  "00080302": "Private Creator Reference",
  "00080303": "Block Identifying Information Status",
  "00080304": "Nonidentifying Private Elements",
  "00080306": "Identifying Private Elements",
  "00080305": "Deidentification Action Sequence",
  "00080307": "Deidentification Action",
  "00080308": "Private Data Element",
  "00080309": "Private Data Element Value Multiplicity",
  "0008030A": "Private Data Element Value Representation",
  "0008030B": "Private Data Element Number of Items",
  "0008030C": "Private Data Element Name",
  "0008030D": "Private Data Element Keyword",
  "0008030E": "Private Data Element Description",
  "0008030F": "Private Data Element Encoding",
  "00080310": "Private Data Element Definition Sequence",
  "00080400": "Scope of Inventory Sequence",
  "00080401": "Inventory Purpose",
  "00080402": "Inventory Instance Description",
  "00080403": "Inventory Level",
  "00080404": "Item Inventory DateTime",
  "00080405": "Removed from Operational Use",
  "00080406": "Reason for Removal Code Sequence",
  "00080407": "Stored Instance Base URI",
  "00080408": "Folder Access URI",
  "00080409": "File Access URI",
  "0008040A": "Container File Type",
  "0008040B": "Filename in Container",
  "0008040C": "File Offset in Container",
  "0008040D": "File Length in Container",
  "0008040E": "Stored Instance Transfer Syntax UID",
  "0008040F": "Extended Matching Mechanisms",
  "00080410": "Range Matching Sequence",
  "00080411": "List of UID Matching Sequence",
  "00080412": "Empty Value Matching Sequence",
  "00080413": "General Matching Sequence",
  "00080414": "Requested Status Interval",
  "00080415": "Retain Instances",
  "00080416": "Expiration DateTime",
  "00080417": "Transaction Status",
  "00080418": "Transaction Status Comment",
  "00080419": "File Set Access Sequence",
  "0008041A": "File Access Sequence",
  "0008041B": "Record Key",
  "0008041C": "Prior Record Key",
  "0008041D": "Metadata Sequence",
  "0008041E": "Updated Metadata Sequence",
  "0008041F": "Study Update DateTime",
  "00080420": "Inventory Access End Points Sequence",
  "00080421": "Study Access End Points Sequence",
  "00080422": "Incorporated Inventory Instance Sequence",
  "00080423": "Inventoried Studies Sequence",
  "00080424": "Inventoried Series Sequence",
  "00080425": "Inventoried Instances Sequence",
  "00080426": "Inventory Completion Status",
  "00080427": "Number of Study Records in Instance",
  "00080428": "Total Number of Study Records",
  "00080429": "Maximum Number of Records",
  "00081000": "Network ID",
  "00081010": "Station Name",
  "00081030": "Study Description",
  "00081032": "Procedure Code Sequence",
  "0008103E": "Series Description",
  "0008103F": "Series Description Code Sequence",
  "00081040": "Institutional Department Name",
  "00081041": "Institutional Department Type Code Sequence",
  "00081048": "Physician(s) of Record",
  "00081049": "Physician(s) of Record Identification Sequence",
  "00081050": "Performing Physician's Name",
  "00081052": "Performing Physician Identification Sequence",
  "00081060": "Name of Physician(s) Reading Study",
  "00081062": "Physician(s) Reading Study Identification Sequence",
  "00081070": "Operators' Name",
  "00081072": "Operator Identification Sequence",
  "00081080": "Admitting Diagnoses Description",
  "00081084": "Admitting Diagnoses Code Sequence",
  "00081088": "Pyramid Description",
  "00081090": "Manufacturer's Model Name",
  "00081100": "Referenced Results Sequence",
  "00081110": "Referenced Study Sequence",
  "00081111": "Referenced Performed Procedure Step Sequence",
  "00081112": "Referenced Instances by SOP Class Sequence",
  "00081115": "Referenced Series Sequence",
  "00081120": "Referenced Patient Sequence",
  "00081125": "Referenced Visit Sequence",
  "00081130": "Referenced Overlay Sequence",
  "00081134": "Referenced Stereometric Instance Sequence",
  "0008113A": "Referenced Waveform Sequence",
  "00081140": "Referenced Image Sequence",
  "00081145": "Referenced Curve Sequence",
  "0008114A": "Referenced Instance Sequence",
  "0008114B": "Referenced Real World Value Mapping Instance Sequence",
  "0008114C": "Referenced Segmentation Sequence",
  "0008114D": "Referenced Surface Segmentation Sequence",
  "00081150": "Referenced SOP Class UID",
  "00081155": "Referenced SOP Instance UID",
  "00081156": "Definition Source Sequence",
  "0008115A": "SOP Classes Supported",
  "00081160": "Referenced Frame Number",
  "00081161": "Simple Frame List",
  "00081162": "Calculated Frame List",
  "00081163": "Time Range",
  "00081164": "Frame Extraction Sequence",
  "00081167": "Multi-frame Source SOP Instance UID",
  "00081190": "Retrieve URL",
  "00081195": "Transaction UID",
  "00081196": "Warning Reason",
  "00081197": "Failure Reason",
  "00081198": "Failed SOP Sequence",
  "00081199": "Referenced SOP Sequence",
  "0008119A": "Other Failures Sequence",
  "0008119B": "Failed Study Sequence",
  "00081200": "Studies Containing Other Referenced Instances Sequence",
  "00081250": "Related Series Sequence",
  "00081301": "Principal Diagnosis Code Sequence",
  "00081302": "Primary Diagnosis Code Sequence",
  "00081303": "Secondary Diagnoses Code Sequence",
  "00081304": "Histological Diagnoses Code Sequence",
  "00082110": "Lossy Image Compression (Retired)",
  "00082111": "Derivation Description",
  "00082112": "Source Image Sequence",
  "00082120": "Stage Name",
  "00082122": "Stage Number",
  "00082124": "Number of Stages",
  "00082127": "View Name",
  "00082128": "View Number",
  "00082129": "Number of Event Timers",
  "0008212A": "Number of Views in Stage",
  "00082130": "Event Elapsed Time(s)",
  "00082132": "Event Timer Name(s)",
  "00082133": "Event Timer Sequence",
  "00082134": "Event Time Offset",
  "00082135": "Event Code Sequence",
  "00082142": "Start Trim",
  "00082143": "Stop Trim",
  "00082144": "Recommended Display Frame Rate",
  "00082200": "Transducer Position",
  "00082204": "Transducer Orientation",
  "00082208": "Anatomic Structure",
  "00082218": "Anatomic Region Sequence",
  "00082220": "Anatomic Region Modifier Sequence",
  "00082228": "Primary Anatomic Structure Sequence",
  "00082229": "Anatomic Structure, Space or Region Sequence",
  "00082230": "Primary Anatomic Structure Modifier Sequence",
  "00082240": "Transducer Position Sequence",
  "00082242": "Transducer Position Modifier Sequence",
  "00082244": "Transducer Orientation Sequence",
  "00082246": "Transducer Orientation Modifier Sequence",
  "00082251": "Anatomic Structure Space Or Region Code Sequence (Trial)",
  "00082253": "Anatomic Portal Of Entrance Code Sequence (Trial)",
  "00082255": "Anatomic Approach Direction Code Sequence (Trial)",
  "00082256": "Anatomic Perspective Description (Trial)",
  "00082257": "Anatomic Perspective Code Sequence (Trial)",
  "00082258": "Anatomic Location Of Examining Instrument Description (Trial)",
  "00082259": "Anatomic Location Of Examining Instrument Code Sequence (Trial)",
  "0008225A": "Anatomic Structure Space Or Region Modifier Code Sequence (Trial)",
  "0008225C": "On Axis Background Anatomic Structure Code Sequence (Trial)",
  "00083001": "Alternate Representation Sequence",
  "00083002": "Available Transfer Syntax UID",
  "00083010": "Irradiation Event UID",
  "00083011": "Source Irradiation Event Sequence",
  "00083012": "Radiopharmaceutical Administration Event UID",
  "00084000": "Identifying Comments",
  "00089007": "Frame Type",
  "00089092": "Referenced Image Evidence Sequence",
  "00089121": "Referenced Raw Data Sequence",
  "00089123": "Creator-Version UID",
  "00089124": "Derivation Image Sequence",
  "00089154": "Source Image Evidence Sequence",
  "00089205": "Pixel Presentation",
  "00089206": "Volumetric Properties",
  "00089207": "Volume Based Calculation Technique",
  "00089208": "Complex Image Component",
  "00089209": "Acquisition Contrast",
  "00089215": "Derivation Code Sequence",
  "00089237": "Referenced Presentation State Sequence",
  "00089410": "Referenced Other Plane Sequence",
  "00089458": "Frame Display Sequence",
  "00089459": "Recommended Display Frame Rate in Float",
  "00089460": "Skip Frame Range Flag",
  "00100010": "Patient's Name",
  "00100011": "Person Names to Use Sequence",
  "00100012": "Name to Use",
  "00100013": "Name to Use Comment",
  "00100014": "Third Person Pronouns Sequence",
  "00100015": "Pronoun Code Sequence",
  "00100016": "Pronoun Comment",
  "00100020": "Patient ID",
  "00100021": "Issuer of Patient ID",
  "00100022": "Type of Patient ID",
  "00100024": "Issuer of Patient ID Qualifiers Sequence",
  "00100026": "Source Patient Group Identification Sequence",
  "00100027": "Group of Patients Identification Sequence",
  "00100028": "Subject Relative Position in Image",
  "00100030": "Patient's Birth Date",
  "00100032": "Patient's Birth Time",
  "00100033": "Patient's Birth Date in Alternative Calendar",
  "00100034": "Patient's Death Date in Alternative Calendar",
  "00100035": "Patient's Alternative Calendar",
  "00100040": "Patient's Sex",
  "00100041": "Gender Identity Sequence",
  "00100042": "Sex Parameters for Clinical Use Category Comment",
  "00100043": "Sex Parameters for Clinical Use Category Sequence",
  "00100044": "Gender Identity Code Sequence",
  "00100045": "Gender Identity Comment",
  "00100046": "Sex Parameters for Clinical Use Category Code Sequence",
  "00100047": "Sex Parameters for Clinical Use Category Reference",
  "00100050": "Patient's Insurance Plan Code Sequence",
  "00100101": "Patient's Primary Language Code Sequence",
  "00100102": "Patient's Primary Language Modifier Code Sequence",
  "00100200": "Quality Control Subject",
  "00100201": "Quality Control Subject Type Code Sequence",
  "00100212": "Strain Description",
  "00100213": "Strain Nomenclature",
  "00100214": "Strain Stock Number",
  "00100215": "Strain Source Registry Code Sequence",
  "00100216": "Strain Stock Sequence",
  "00100217": "Strain Source",
  "00100218": "Strain Additional Information",
  "00100219": "Strain Code Sequence",
  "00100221": "Genetic Modifications Sequence",
  "00100222": "Genetic Modifications Description",
  "00100223": "Genetic Modifications Nomenclature",
  "00100229": "Genetic Modifications Code Sequence",
  "00101000": "Other Patient IDs",
  "00101001": "Other Patient Names",
  "00101002": "Other Patient IDs Sequence",
  "00101005": "Patient's Birth Name",
  "00101010": "Patient's Age",
  "00101020": "Patient's Size",
  "00101021": "Patient's Size Code Sequence",
  "00101022": "Patient's Body Mass Index",
  "00101023": "Measured AP Dimension",
  "00101024": "Measured Lateral Dimension",
  "00101030": "Patient's Weight",
  "00101040": "Patient's Address",
  "00101050": "Insurance Plan Identification",
  "00101060": "Patient's Mother's Birth Name",
  "00101080": "Military Rank",
  "00101081": "Branch of Service",
  "00101090": "Medical Record Locator",
  "00101100": "Referenced Patient Photo Sequence",
  "00102000": "Medical Alerts",
  "00102110": "Allergies",
  "00102150": "Country of Residence",
  "00102152": "Region of Residence",
  "00102154": "Patient's Telephone Numbers",
  "00102155": "Patient's Telecom Information",
  "00102160": "Ethnic Group",
  "00102161": "Ethnic Group Code Sequence",
  "00102162": "Ethnic Groups",
  "00102180": "Occupation",
  "001021A0": "Smoking Status",
  "001021B0": "Additional Patient History",
  "001021C0": "Pregnancy Status",
  "001021D0": "Last Menstrual Date",
  "001021F0": "Patient's Religious Preference",
  "00102201": "Patient Species Description",
  "00102202": "Patient Species Code Sequence",
  "00102203": "Patient's Sex Neutered",
  "00102210": "Anatomical Orientation Type",
  "00102292": "Patient Breed Description",
  "00102293": "Patient Breed Code Sequence",
  "00102294": "Breed Registration Sequence",
  "00102295": "Breed Registration Number",
  "00102296": "Breed Registry Code Sequence",
  "00102297": "Responsible Person",
  "00102298": "Responsible Person Role",
  "00102299": "Responsible Organization",
  "00104000": "Patient Comments",
  "00109431": "Examined Body Thickness",
  "00120010": "Clinical Trial Sponsor Name",
  "00120020": "Clinical Trial Protocol ID",
  "00120021": "Clinical Trial Protocol Name",
  "00120022": "Issuer of Clinical Trial Protocol ID",
  "00120023": "Other Clinical Trial Protocol IDs Sequence",
  "00120030": "Clinical Trial Site ID",
  "00120031": "Clinical Trial Site Name",
  "00120032": "Issuer of Clinical Trial Site ID",
  "00120040": "Clinical Trial Subject ID",
  "00120041": "Issuer of Clinical Trial Subject ID",
  "00120042": "Clinical Trial Subject Reading ID",
  "00120043": "Issuer of Clinical Trial Subject Reading ID",
  "00120050": "Clinical Trial Time Point ID",
  "00120051": "Clinical Trial Time Point Description",
  "00120052": "Longitudinal Temporal Offset from Event",
  "00120053": "Longitudinal Temporal Event Type",
  "00120054": "Clinical Trial Time Point Type Code Sequence",
  "00120055": "Issuer of Clinical Trial Time Point ID",
  "00120060": "Clinical Trial Coordinating Center Name",
  "00120062": "Patient Identity Removed",
  "00120063": "De-identification Method",
  "00120064": "De-identification Method Code Sequence",
  "00120071": "Clinical Trial Series ID",
  "00120072": "Clinical Trial Series Description",
  "00120073": "Issuer of Clinical Trial Series ID",
  "00120081": "Clinical Trial Protocol Ethics Committee Name",
  "00120082": "Clinical Trial Protocol Ethics Committee Approval Number",
  "00120083": "Consent for Clinical Trial Use Sequence",
  "00120084": "Distribution Type",
  "00120085": "Consent for Distribution Flag",
  "00120086": "Ethics Committee Approval Effectiveness Start Date",
  "00120087": "Ethics Committee Approval Effectiveness End Date",
  "00140023": "CAD File Format",
  "00140024": "Component Reference System",
  "00140025": "Component Manufacturing Procedure",
  "00140028": "Component Manufacturer",
  "00140030": "Material Thickness",
  "00140032": "Material Pipe Diameter",
  "00140034": "Material Isolation Diameter",
  "00140042": "Material Grade",
  "00140044": "Material Properties Description",
  "00140045": "Material Properties File Format (Retired)",
  "00140046": "Material Notes",
  "00140050": "Component Shape",
  "00140052": "Curvature Type",
  "00140054": "Outer Diameter",
  "00140056": "Inner Diameter",
  "00140100": "Component Welder IDs",
  "00140101": "Secondary Approval Status",
  "00140102": "Secondary Review Date",
  "00140103": "Secondary Review Time",
  "00140104": "Secondary Reviewer Name",
  "00140105": "Repair ID",
  "00140106": "Multiple Component Approval Sequence",
  "00140107": "Other Approval Status",
  "00140108": "Other Secondary Approval Status",
  "00140200": "Data Element Label Sequence",
  "00140201": "Data Element Label Item Sequence",
  "00140202": "Data Element",
  "00140203": "Data Element Name",
  "00140204": "Data Element Description",
  "00140205": "Data Element Conditionality",
  "00140206": "Data Element Minimum Characters",
  "00140207": "Data Element Maximum Characters",
  "00141010": "Actual Environmental Conditions",
  "00141020": "Expiry Date",
  "00141040": "Environmental Conditions",
  "00142002": "Evaluator Sequence",
  "00142004": "Evaluator Number",
  "00142006": "Evaluator Name",
  "00142008": "Evaluation Attempt",
  "00142012": "Indication Sequence",
  "00142014": "Indication Number",
  "00142016": "Indication Label",
  "00142018": "Indication Description",
  "0014201A": "Indication Type",
  "0014201C": "Indication Disposition",
  "0014201E": "Indication ROI Sequence",
  "00142030": "Indication Physical Property Sequence",
  "00142032": "Property Label",
  "00142202": "Coordinate System Number of Axes",
  "00142204": "Coordinate System Axes Sequence",
  "00142206": "Coordinate System Axis Description",
  "00142208": "Coordinate System Data Set Mapping",
  "0014220A": "Coordinate System Axis Number",
  "0014220C": "Coordinate System Axis Type",
  "0014220E": "Coordinate System Axis Units",
  "00142210": "Coordinate System Axis Values",
  "00142220": "Coordinate System Transform Sequence",
  "00142222": "Transform Description",
  "00142224": "Transform Number of Axes",
  "00142226": "Transform Order of Axes",
  "00142228": "Transformed Axis Units",
  "0014222A": "Coordinate System Transform Rotation and Scale Matrix",
  "0014222C": "Coordinate System Transform Translation Matrix",
  "00143011": "Internal Detector Frame Time",
  "00143012": "Number of Frames Integrated",
  "00143020": "Detector Temperature Sequence",
  "00143022": "Sensor Name",
  "00143024": "Horizontal Offset of Sensor",
  "00143026": "Vertical Offset of Sensor",
  "00143028": "Sensor Temperature",
  "00143040": "Dark Current Sequence",
  "00143050": "Dark Current Counts",
  "00143060": "Gain Correction Reference Sequence",
  "00143070": "Air Counts",
  "00143071": "KV Used in Gain Calibration",
  "00143072": "MA Used in Gain Calibration",
  "00143073": "Number of Frames Used for Integration",
  "00143074": "Filter Material Used in Gain Calibration",
  "00143075": "Filter Thickness Used in Gain Calibration",
  "00143076": "Date of Gain Calibration",
  "00143077": "Time of Gain Calibration",
  "00143080": "Bad Pixel Image",
  "00143099": "Calibration Notes",
  "00143100": "Linearity Correction Technique",
  "00143101": "Beam Hardening Correction Technique",
  "00144002": "Pulser Equipment Sequence",
  "00144004": "Pulser Type",
  "00144006": "Pulser Notes",
  "00144008": "Receiver Equipment Sequence",
  "0014400A": "Amplifier Type",
  "0014400C": "Receiver Notes",
  "0014400E": "Pre-Amplifier Equipment Sequence",
  "0014400F": "Pre-Amplifier Notes",
  "00144010": "Transmit Transducer Sequence",
  "00144011": "Receive Transducer Sequence",
  "00144012": "Number of Elements",
  "00144013": "Element Shape",
  "00144014": "Element Dimension A",
  "00144015": "Element Dimension B",
  "00144016": "Element Pitch A",
  "00144017": "Measured Beam Dimension A",
  "00144018": "Measured Beam Dimension B",
  "00144019": "Location of Measured Beam Diameter",
  "0014401A": "Nominal Frequency",
  "0014401B": "Measured Center Frequency",
  "0014401C": "Measured Bandwidth",
  "0014401D": "Element Pitch B",
  "00144020": "Pulser Settings Sequence",
  "00144022": "Pulse Width",
  "00144024": "Excitation Frequency",
  "00144026": "Modulation Type",
  "00144028": "Damping",
  "00144030": "Receiver Settings Sequence",
  "00144031": "Acquired Soundpath Length",
  "00144032": "Acquisition Compression Type",
  "00144033": "Acquisition Sample Size",
  "00144034": "Rectifier Smoothing",
  "00144035": "DAC Sequence",
  "00144036": "DAC Type",
  "00144038": "DAC Gain Points",
  "0014403A": "DAC Time Points",
  "0014403C": "DAC Amplitude",
  "00144040": "Pre-Amplifier Settings Sequence",
  "00144050": "Transmit Transducer Settings Sequence",
  "00144051": "Receive Transducer Settings Sequence",
  "00144052": "Incident Angle",
  "00144054": "Coupling Technique",
  "00144056": "Coupling Medium",
  "00144057": "Coupling Velocity",
  "00144058": "Probe Center Location X",
  "00144059": "Probe Center Location Z",
  "0014405A": "Sound Path Length",
  "0014405C": "Delay Law Identifier",
  "00144060": "Gate Settings Sequence",
  "00144062": "Gate Threshold",
  "00144064": "Velocity of Sound",
  "00144070": "Calibration Settings Sequence",
  "00144072": "Calibration Procedure",
  "00144074": "Procedure Version",
  "00144076": "Procedure Creation Date",
  "00144078": "Procedure Expiration Date",
  "0014407A": "Procedure Last Modified Date",
  "0014407C": "Calibration Time",
  "0014407E": "Calibration Date",
  "00144080": "Probe Drive Equipment Sequence",
  "00144081": "Drive Type",
  "00144082": "Probe Drive Notes",
  "00144083": "Drive Probe Sequence",
  "00144084": "Probe Inductance",
  "00144085": "Probe Resistance",
  "00144086": "Receive Probe Sequence",
  "00144087": "Probe Drive Settings Sequence",
  "00144088": "Bridge Resistors",
  "00144089": "Probe Orientation Angle",
  "0014408B": "User Selected Gain Y",
  "0014408C": "User Selected Phase",
  "0014408D": "User Selected Offset X",
  "0014408E": "User Selected Offset Y",
  "00144091": "Channel Settings Sequence",
  "00144092": "Channel Threshold",
  "0014409A": "Scanner Settings Sequence",
  "0014409B": "Scan Procedure",
  "0014409C": "Translation Rate X",
  "0014409D": "Translation Rate Y",
  "0014409F": "Channel Overlap",
  "001440A0": "Image Quality Indicator Type",
  "001440A1": "Image Quality Indicator Material",
  "001440A2": "Image Quality Indicator Size",
  "00144101": "Wave Dimensions Definition Sequence",
  "00144102": "Wave Dimension Number",
  "00144103": "Wave Dimension Description",
  "00144104": "Wave Dimension Unit",
  "00144105": "Wave Dimension Value Type",
  "00144106": "Wave Dimension Values Sequence",
  "00144107": "Referenced Wave Dimension",
  "00144108": "Integer Numeric Value",
  "00144109": "Byte Numeric Value",
  "0014410A": "Short Numeric Value",
  "0014410B": "Single Precision Floating Point Numeric Value",
  "0014410C": "Double Precision Floating Point Numeric Value",
  "00145002": "LINAC Energy",
  "00145004": "LINAC Output",
  "00145100": "Active Aperture",
  "00145101": "Total Aperture",
  "00145102": "Aperture Elevation",
  "00145103": "Main Lobe Angle",
  "00145104": "Main Roof Angle",
  "00145105": "Connector Type",
  "00145106": "Wedge Model Number",
  "00145107": "Wedge Angle Float",
  "00145108": "Wedge Roof Angle",
  "00145109": "Wedge Element 1 Position",
  "0014510A": "Wedge Material Velocity",
  "0014510B": "Wedge Material",
  "0014510C": "Wedge Offset Z",
  "0014510D": "Wedge Origin Offset X",
  "0014510E": "Wedge Time Delay",
  "0014510F": "Wedge Name",
  "00145110": "Wedge Manufacturer Name",
  "00145111": "Wedge Description",
  "00145112": "Nominal Beam Angle",
  "00145113": "Wedge Offset X",
  "00145114": "Wedge Offset Y",
  "00145115": "Wedge Total Length",
  "00145116": "Wedge In Contact Length",
  "00145117": "Wedge Front Gap",
  "00145118": "Wedge Total Height",
  "00145119": "Wedge Front Height",
  "0014511A": "Wedge Rear Height",
  "0014511B": "Wedge Total Width",
  "0014511C": "Wedge In Contact Width",
  "0014511D": "Wedge Chamfer Height",
  "0014511E": "Wedge Curve",
  "0014511F": "Radius Along the Wedge",
  "00146001": "Thermal Camera Settings Sequence",
  "00146002": "Acquisition Frame Rate",
  "00146003": "Integration Time",
  "00146004": "Number of Calibration Frames",
  "00146005": "Number of Rows in Full Acquisition Image",
  "00146006": "Number Of Columns in Full Acquisition Image",
  "00146007": "Thermal Source Settings Sequence",
  "00146008": "Source Horizontal Pitch",
  "00146009": "Source Vertical Pitch",
  "0014600A": "Source Horizontal Scan Speed",
  "0014600B": "Thermal Source Modulation Frequency",
  "0014600C": "Induction Source Setting Sequence",
  "0014600D": "Coil Frequency",
  "0014600E": "Current Amplitude Across Coil",
  "0014600F": "Flash Source Setting Sequence",
  "00146010": "Flash Duration",
  "00146011": "Flash Frame Number",
  "00146012": "Laser Source Setting Sequence",
  "00146013": "Horizontal Laser Spot Dimension",
  "00146014": "Vertical Laser Spot Dimension",
  "00146015": "Laser Wavelength",
  "00146016": "Laser Power",
  "00146017": "Forced Gas Setting Sequence",
  "00146018": "Vibration Source Setting Sequence",
  "00146019": "Vibration Excitation Frequency",
  "0014601A": "Vibration Excitation Voltage",
  "0014601B": "Thermography Data Capture Method",
  "0014601C": "Thermal Technique",
  "0014601D": "Thermal Camera Core Sequence",
  "0014601E": "Detector Wavelength Range",
  "0014601F": "Thermal Camera Calibration Type",
  "00146020": "Acquisition Image Counter",
  "00146021": "Front Panel Temperature",
  "00146022": "Air Gap Temperature",
  "00146023": "Vertical Pixel Size",
  "00146024": "Horizontal Pixel Size",
  "00146025": "Data Streaming Protocol",
  "00146026": "Lens Sequence",
  "00146027": "Field of View",
  "00146028": "Lens Filter Manufacturer",
  "00146029": "Cutoff Filter Type",
  "0014602A": "Lens Filter Cut-Off Wavelength",
  "0014602B": "Thermal Source Sequence",
  "0014602C": "Thermal Source Motion State",
  "0014602D": "Thermal Source Motion Type",
  "0014602E": "Induction Heating Sequence",
  "0014602F": "Coil Configuration ID",
  "00146030": "Number of Turns in Coil",
  "00146031": "Shape of Individual Turn",
  "00146032": "Size of Individual Turn",
  "00146033": "Distance Between Turns",
  "00146034": "Flash Heating Sequence",
  "00146035": "Number of Lamps",
  "00146036": "Flash Synchronization Protocol",
  "00146037": "Flash Modification Status",
  "00146038": "Laser Heating Sequence",
  "00146039": "Laser Manufacturer",
  "0014603A": "Laser Model Number",
  "0014603B": "Laser Type Description",
  "0014603C": "Forced Gas Heating Sequence",
  "0014603D": "Gas Used for Heating/Cooling Part",
  "0014603E": "Vibration/Sonic Heating Sequence",
  "0014603F": "Probe Manufacturer",
  "00146040": "Probe Model Number",
  "00146041": "Aperture Size",
  "00146042": "Probe Resonant Frequency",
  "00146043": "Heat Source Description",
  "00146044": "Surface Preparation with Optical Coating",
  "00146045": "Optical Coating Type",
  "00146046": "Thermal Conductivity of Exposed Surface",
  "00146047": "Material Density",
  "00146048": "Specific Heat of Inspection Surface",
  "00146049": "Emissivity of Inspection Surface",
  "0014604A": "Electromagnetic Classification of Inspection Surface",
  "0014604C": "Moving Window Size",
  "0014604D": "Moving Window Type",
  "0014604E": "Moving Window Weights",
  "0014604F": "Moving Window Pitch",
  "00146050": "Moving Window Padding Scheme",
  "00146051": "Moving Window Padding Length",
  "00146052": "Spatial Filtering Parameters Sequence",
  "00146053": "Spatial Filtering Scheme",
  "00146056": "Horizontal Moving Window Size",
  "00146057": "Vertical Moving Window Size",
  "00146059": "Polynomial Fitting Sequence",
  "0014605A": "Fitting Data Type",
  "0014605B": "Operation on Time Axis Before Fitting",
  "0014605C": "Operation on Pixel Intensity Before Fitting",
  "0014605D": "Order of Polynomial",
  "0014605E": "Independent Variable for Polynomial Fit",
  "0014605F": "PolynomialCoefficients",
  "00146060": "Thermography Pixel Data Unit",
  "00160001": "White Point",
  "00160002": "Primary Chromaticities",
  "00160003": "Battery Level",
  "00160004": "Exposure Time in Seconds",
  "00160005": "F-Number",
  "00160006": "OECF Rows",
  "00160007": "OECF Columns",
  "00160008": "OECF Column Names",
  "00160009": "OECF Values",
  "0016000A": "Spatial Frequency Response Rows",
  "0016000B": "Spatial Frequency Response Columns",
  "0016000C": "Spatial Frequency Response Column Names",
  "0016000D": "Spatial Frequency Response Values",
  "0016000E": "Color Filter Array Pattern Rows",
  "0016000F": "Color Filter Array Pattern Columns",
  "00160010": "Color Filter Array Pattern Values",
  "00160011": "Flash Firing Status",
  "00160012": "Flash Return Status",
  "00160013": "Flash Mode",
  "00160014": "Flash Function Present",
  "00160015": "Flash Red Eye Mode",
  "00160016": "Exposure Program",
  "00160017": "Spectral Sensitivity",
  "00160018": "Photographic Sensitivity",
  "00160019": "Self Timer Mode",
  "0016001A": "Sensitivity Type",
  "0016001B": "Standard Output Sensitivity",
  "0016001C": "Recommended Exposure Index",
  "0016001D": "ISO Speed",
  "0016001E": "ISO Speed Latitude yyy",
  "0016001F": "ISO Speed Latitude zzz",
  "00160020": "EXIF Version",
  "00160021": "Shutter Speed Value",
  "00160022": "Aperture Value",
  "00160023": "Brightness Value",
  "00160024": "Exposure Bias Value",
  "00160025": "Max Aperture Value",
  "00160026": "Subject Distance",
  "00160027": "Metering Mode",
  "00160028": "Light Source",
  "00160029": "Focal Length",
  "0016002A": "Subject Area",
  "0016002B": "Maker Note",
  "00160030": "Temperature",
  "00160031": "Humidity",
  "00160032": "Pressure",
  "00160033": "Water Depth",
  "00160034": "Acceleration",
  "00160035": "Camera Elevation Angle",
  "00160036": "Flash Energy",
  "00160037": "Subject Location",
  "00160038": "Photographic Exposure Index",
  "00160039": "Sensing Method",
  "0016003A": "File Source",
  "0016003B": "Scene Type",
  "00160041": "Custom Rendered",
  "00160042": "Exposure Mode",
  "00160043": "White Balance",
  "00160044": "Digital Zoom Ratio",
  "00160045": "Focal Length In 35mm Film",
  "00160046": "Scene Capture Type",
  "00160047": "Gain Control",
  "00160048": "Contrast",
  "00160049": "Saturation",
  "0016004A": "Sharpness",
  "0016004B": "Device Setting Description",
  "0016004C": "Subject Distance Range",
  "0016004D": "Camera Owner Name",
  "0016004E": "Lens Specification",
  "0016004F": "Lens Make",
  "00160050": "Lens Model",
  "00160051": "Lens Serial Number",
  "00160061": "Interoperability Index",
  "00160062": "Interoperability Version",
  "00160070": "GPS Version ID",
  "00160071": "GPS Latitude Ref",
  "00160072": "GPS Latitude",
  "00160073": "GPS Longitude Ref",
  "00160074": "GPS Longitude",
  "00160075": "GPS Altitude Ref",
  "00160076": "GPS Altitude",
  "00160077": "GPS Time Stamp",
  "00160078": "GPS Satellites",
  "00160079": "GPS Status",
  "0016007A": "GPS Measure Mode",
  "0016007B": "GPS DOP",
  "0016007C": "GPS Speed Ref",
  "0016007D": "GPS Speed",
  "0016007E": "GPS Track Ref",
  "0016007F": "GPS Track",
  "00160080": "GPS Img Direction Ref",
  "00160081": "GPS Img Direction",
  "00160082": "GPS Map Datum",
  "00160083": "GPS Dest Latitude Ref",
  "00160084": "GPS Dest Latitude",
  "00160085": "GPS Dest Longitude Ref",
  "00160086": "GPS Dest Longitude",
  "00160087": "GPS Dest Bearing Ref",
  "00160088": "GPS Dest Bearing",
  "00160089": "GPS Dest Distance Ref",
  "0016008A": "GPS Dest Distance",
  "0016008B": "GPS Processing Method",
  "0016008C": "GPS Area Information",
  "0016008D": "GPS Date Stamp",
  "0016008E": "GPS Differential",
  "00161001": "Light Source Polarization",
  "00161002": "Emitter Color Temperature",
  "00161003": "Contact Method",
  "00161004": "Immersion Media",
  "00161005": "Optical Magnification Factor",
  "00180010": "Contrast/Bolus Agent",
  "00180012": "Contrast/Bolus Agent Sequence",
  "00180013": "Contrast/Bolus T1 Relaxivity",
  "00180014": "Contrast/Bolus Administration Route Sequence",
  "00180015": "Body Part Examined",
  "00180020": "Scanning Sequence",
  "00180021": "Sequence Variant",
  "00180022": "Scan Options",
  "00180023": "MR Acquisition Type",
  "00180024": "Sequence Name",
  "00180025": "Angio Flag",
  "00180026": "Intervention Drug Information Sequence",
  "00180027": "Intervention Drug Stop Time",
  "00180028": "Intervention Drug Dose",
  "00180029": "Intervention Drug Code Sequence",
  "0018002A": "Additional Drug Sequence",
  "00180030": "Radionuclide",
  "00180031": "Radiopharmaceutical",
  "00180032": "Energy Window Centerline",
  "00180033": "Energy Window Total Width",
  "00180034": "Intervention Drug Name",
  "00180035": "Intervention Drug Start Time",
  "00180036": "Intervention Sequence",
  "00180037": "Therapy Type",
  "00180038": "Intervention Status",
  "00180039": "Therapy Description",
  "0018003A": "Intervention Description",
  "00180040": "Cine Rate",
  "00180042": "Initial Cine Run State",
  "00180050": "Slice Thickness",
  "00180060": "KVP",
  "00180070": "Counts Accumulated",
  "00180071": "Acquisition Termination Condition",
  "00180072": "Effective Duration",
  "00180073": "Acquisition Start Condition",
  "00180074": "Acquisition Start Condition Data",
  "00180075": "Acquisition Termination Condition Data",
  "00180080": "Repetition Time",
  "00180081": "Echo Time",
  "00180082": "Inversion Time",
  "00180083": "Number of Averages",
  "00180084": "Imaging Frequency",
  "00180085": "Imaged Nucleus",
  "00180086": "Echo Number(s)",
  "00180087": "Magnetic Field Strength",
  "00180088": "Spacing Between Slices",
  "00180089": "Number of Phase Encoding Steps",
  "00180090": "Data Collection Diameter",
  "00180091": "Echo Train Length",
  "00180093": "Percent Sampling",
  "00180094": "Percent Phase Field of View",
  "00180095": "Pixel Bandwidth",
  "00181000": "Device Serial Number",
  "00181002": "Device UID",
  "00181003": "Device ID",
  "00181004": "Plate ID",
  "00181005": "Generator ID",
  "00181006": "Grid ID",
  "00181007": "Cassette ID",
  "00181008": "Gantry ID",
  "00181009": "Unique Device Identifier",
  "0018100A": "UDI Sequence",
  "0018100B": "Manufacturer's Device Class UID",
  "00181010": "Secondary Capture Device ID",
  "00181011": "Hardcopy Creation Device ID",
  "00181012": "Date of Secondary Capture",
  "00181014": "Time of Secondary Capture",
  "00181016": "Secondary Capture Device Manufacturer",
  "00181017": "Hardcopy Device Manufacturer",
  "00181018": "Secondary Capture Device Manufacturer's Model Name",
  "00181019": "Secondary Capture Device Software Versions",
  "0018101A": "Hardcopy Device Software Version",
  "0018101B": "Hardcopy Device Manufacturer's Model Name",
  "00181020": "Software Versions",
  "00181022": "Video Image Format Acquired",
  "00181023": "Digital Image Format Acquired",
  "00181030": "Protocol Name",
  "00181040": "Contrast/Bolus Route",
  "00181041": "Contrast/Bolus Volume",
  "00181042": "Contrast/Bolus Start Time",
  "00181043": "Contrast/Bolus Stop Time",
  "00181044": "Contrast/Bolus Total Dose",
  "00181045": "Syringe Counts",
  "00181046": "Contrast Flow Rate",
  "00181047": "Contrast Flow Duration",
  "00181048": "Contrast/Bolus Ingredient",
  "00181049": "Contrast/Bolus Ingredient Concentration",
  "00181050": "Spatial Resolution",
  "00181060": "Trigger Time",
  "00181061": "Trigger Source or Type",
  "00181062": "Nominal Interval",
  "00181063": "Frame Time",
  "00181064": "Cardiac Framing Type",
  "00181065": "Frame Time Vector",
  "00181066": "Frame Delay",
  "00181067": "Image Trigger Delay",
  "00181068": "Multiplex Group Time Offset",
  "00181069": "Trigger Time Offset",
  "0018106A": "Synchronization Trigger",
  "0018106C": "Synchronization Channel",
  "0018106E": "Trigger Sample Position",
  "00181070": "Radiopharmaceutical Route",
  "00181071": "Radiopharmaceutical Volume",
  "00181072": "Radiopharmaceutical Start Time",
  "00181073": "Radiopharmaceutical Stop Time",
  "00181074": "Radionuclide Total Dose",
  "00181075": "Radionuclide Half Life",
  "00181076": "Radionuclide Positron Fraction",
  "00181077": "Radiopharmaceutical Specific Activity",
  "00181078": "Radiopharmaceutical Start DateTime",
  "00181079": "Radiopharmaceutical Stop DateTime",
  "00181080": "Beat Rejection Flag",
  "00181081": "Low R-R Value",
  "00181082": "High R-R Value",
  "00181083": "Intervals Acquired",
  "00181084": "Intervals Rejected",
  "00181085": "PVC Rejection",
  "00181086": "Skip Beats",
  "00181088": "Heart Rate",
  "00181090": "Cardiac Number of Images",
  "00181094": "Trigger Window",
  "00181100": "Reconstruction Diameter",
  "00181110": "Distance Source to Detector",
  "00181111": "Distance Source to Patient",
  "00181114": "Estimated Radiographic Magnification Factor",
  "00181120": "Gantry/Detector Tilt",
  "00181121": "Gantry/Detector Slew",
  "00181130": "Table Height",
  "00181131": "Table Traverse",
  "00181134": "Table Motion",
  "00181135": "Table Vertical Increment",
  "00181136": "Table Lateral Increment",
  "00181137": "Table Longitudinal Increment",
  "00181138": "Table Angle",
  "0018113A": "Table Type",
  "00181140": "Rotation Direction",
  "00181141": "Angular Position",
  "00181142": "Radial Position",
  "00181143": "Scan Arc",
  "00181144": "Angular Step",
  "00181145": "Center of Rotation Offset",
  "00181146": "Rotation Offset",
  "00181147": "Field of View Shape",
  "00181149": "Field of View Dimension(s)",
  "00181150": "Exposure Time",
  "00181151": "X-Ray Tube Current",
  "00181152": "Exposure",
  "00181153": "Exposure in \xB5As",
  "00181154": "Average Pulse Width",
  "00181155": "Radiation Setting",
  "00181156": "Rectification Type",
  "0018115A": "Radiation Mode",
  "0018115E": "Image and Fluoroscopy Area Dose Product",
  "00181160": "Filter Type",
  "00181161": "Type of Filters",
  "00181162": "Intensifier Size",
  "00181164": "Imager Pixel Spacing",
  "00181166": "Grid",
  "00181170": "Generator Power",
  "00181180": "Collimator/grid Name",
  "00181181": "Collimator Type",
  "00181182": "Focal Distance",
  "00181183": "X Focus Center",
  "00181184": "Y Focus Center",
  "00181190": "Focal Spot(s)",
  "00181191": "Anode Target Material",
  "001811A0": "Body Part Thickness",
  "001811A2": "Compression Force",
  "001811A3": "Compression Pressure",
  "001811A4": "Paddle Description",
  "001811A5": "Compression Contact Area",
  "001811B0": "Acquisition Mode",
  "001811B1": "Dose Mode Name",
  "001811B2": "Acquired Subtraction Mask Flag",
  "001811B3": "Fluoroscopy Persistence Flag",
  "001811B4": "Fluoroscopy Last Image Hold Persistence Flag",
  "001811B5": "Upper Limit Number Of Persistent Fluoroscopy Frames",
  "001811B6": "Contrast/Bolus Auto Injection Trigger Flag",
  "001811B7": "Contrast/Bolus Injection Delay",
  "001811B8": "XA Acquisition Phase Details Sequence",
  "001811B9": "XA Acquisition Frame Rate",
  "001811BA": "XA Plane Details Sequence",
  "001811BB": "Acquisition Field of View Label",
  "001811BC": "X-Ray Filter Details Sequence",
  "001811BD": "XA Acquisition Duration",
  "001811BE": "Reconstruction Pipeline Type",
  "001811BF": "Image Filter Details Sequence",
  "001811C0": "Applied Mask Subtraction Flag",
  "001811C1": "Requested Series Description Code Sequence",
  "00181200": "Date of Last Calibration",
  "00181201": "Time of Last Calibration",
  "00181202": "DateTime of Last Calibration",
  "00181203": "Calibration DateTime",
  "00181204": "Date of Manufacture",
  "00181205": "Date of Installation",
  "00181210": "Convolution Kernel",
  "00181240": "Upper/Lower Pixel Values",
  "00181242": "Actual Frame Duration",
  "00181243": "Count Rate",
  "00181244": "Preferred Playback Sequencing",
  "00181250": "Receive Coil Name",
  "00181251": "Transmit Coil Name",
  "00181260": "Plate Type",
  "00181261": "Phosphor Type",
  "00181271": "Water Equivalent Diameter",
  "00181272": "Water Equivalent Diameter Calculation Method Code Sequence",
  "00181300": "Scan Velocity",
  "00181301": "Whole Body Technique",
  "00181302": "Scan Length",
  "00181310": "Acquisition Matrix",
  "00181312": "In-plane Phase Encoding Direction",
  "00181314": "Flip Angle",
  "00181315": "Variable Flip Angle Flag",
  "00181316": "SAR",
  "00181318": "dB/dt",
  "00181320": "B1rms",
  "00181400": "Acquisition Device Processing Description",
  "00181401": "Acquisition Device Processing Code",
  "00181402": "Cassette Orientation",
  "00181403": "Cassette Size",
  "00181404": "Exposures on Plate",
  "00181405": "Relative X-Ray Exposure",
  "00181411": "Exposure Index",
  "00181412": "Target Exposure Index",
  "00181413": "Deviation Index",
  "00181450": "Column Angulation",
  "00181460": "Tomo Layer Height",
  "00181470": "Tomo Angle",
  "00181480": "Tomo Time",
  "00181490": "Tomo Type",
  "00181491": "Tomo Class",
  "00181495": "Number of Tomosynthesis Source Images",
  "00181500": "Positioner Motion",
  "00181508": "Positioner Type",
  "00181510": "Positioner Primary Angle",
  "00181511": "Positioner Secondary Angle",
  "00181520": "Positioner Primary Angle Increment",
  "00181521": "Positioner Secondary Angle Increment",
  "00181530": "Detector Primary Angle",
  "00181531": "Detector Secondary Angle",
  "00181600": "Shutter Shape",
  "00181602": "Shutter Left Vertical Edge",
  "00181604": "Shutter Right Vertical Edge",
  "00181606": "Shutter Upper Horizontal Edge",
  "00181608": "Shutter Lower Horizontal Edge",
  "00181610": "Center of Circular Shutter",
  "00181612": "Radius of Circular Shutter",
  "00181620": "Vertices of the Polygonal Shutter",
  "00181622": "Shutter Presentation Value",
  "00181623": "Shutter Overlay Group",
  "00181624": "Shutter Presentation Color CIELab Value",
  "00181630": "Outline Shape Type",
  "00181631": "Outline Left Vertical Edge",
  "00181632": "Outline Right Vertical Edge",
  "00181633": "Outline Upper Horizontal Edge",
  "00181634": "Outline Lower Horizontal Edge",
  "00181635": "Center of Circular Outline",
  "00181636": "Diameter of Circular Outline",
  "00181637": "Number of Polygonal Vertices",
  "00181638": "Vertices of the Polygonal Outline",
  "00181700": "Collimator Shape",
  "00181702": "Collimator Left Vertical Edge",
  "00181704": "Collimator Right Vertical Edge",
  "00181706": "Collimator Upper Horizontal Edge",
  "00181708": "Collimator Lower Horizontal Edge",
  "00181710": "Center of Circular Collimator",
  "00181712": "Radius of Circular Collimator",
  "00181720": "Vertices of the Polygonal Collimator",
  "00181800": "Acquisition Time Synchronized",
  "00181801": "Time Source",
  "00181802": "Time Distribution Protocol",
  "00181803": "NTP Source Address",
  "00182001": "Page Number Vector",
  "00182002": "Frame Label Vector",
  "00182003": "Frame Primary Angle Vector",
  "00182004": "Frame Secondary Angle Vector",
  "00182005": "Slice Location Vector",
  "00182006": "Display Window Label Vector",
  "00182010": "Nominal Scanned Pixel Spacing",
  "00182020": "Digitizing Device Transport Direction",
  "00182030": "Rotation of Scanned Film",
  "00182041": "Biopsy Target Sequence",
  "00182042": "Target UID",
  "00182043": "Localizing Cursor Position",
  "00182044": "Calculated Target Position",
  "00182045": "Target Label",
  "00182046": "Displayed Z Value",
  "00183100": "IVUS Acquisition",
  "00183101": "IVUS Pullback Rate",
  "00183102": "IVUS Gated Rate",
  "00183103": "IVUS Pullback Start Frame Number",
  "00183104": "IVUS Pullback Stop Frame Number",
  "00183105": "Lesion Number",
  "00184000": "Acquisition Comments",
  "00185000": "Output Power",
  "00185010": "Transducer Data",
  "00185011": "Transducer Identification Sequence",
  "00185012": "Focus Depth",
  "00185020": "Processing Function",
  "00185021": "Postprocessing Function",
  "00185022": "Mechanical Index",
  "00185024": "Bone Thermal Index",
  "00185026": "Cranial Thermal Index",
  "00185027": "Soft Tissue Thermal Index",
  "00185028": "Soft Tissue-focus Thermal Index",
  "00185029": "Soft Tissue-surface Thermal Index",
  "00185030": "Dynamic Range",
  "00185040": "Total Gain",
  "00185050": "Depth of Scan Field",
  "00185100": "Patient Position",
  "00185101": "View Position",
  "00185104": "Projection Eponymous Name Code Sequence",
  "00185210": "Image Transformation Matrix",
  "00185212": "Image Translation Vector",
  "00186000": "Sensitivity",
  "00186011": "Sequence of Ultrasound Regions",
  "00186012": "Region Spatial Format",
  "00186014": "Region Data Type",
  "00186016": "Region Flags",
  "00186018": "Region Location Min X0",
  "0018601A": "Region Location Min Y0",
  "0018601C": "Region Location Max X1",
  "0018601E": "Region Location Max Y1",
  "00186020": "Reference Pixel X0",
  "00186022": "Reference Pixel Y0",
  "00186024": "Physical Units X Direction",
  "00186026": "Physical Units Y Direction",
  "00186028": "Reference Pixel Physical Value X",
  "0018602A": "Reference Pixel Physical Value Y",
  "0018602C": "Physical Delta X",
  "0018602E": "Physical Delta Y",
  "00186030": "Transducer Frequency",
  "00186031": "Transducer Type",
  "00186032": "Pulse Repetition Frequency",
  "00186034": "Doppler Correction Angle",
  "00186036": "Steering Angle",
  "00186038": "Doppler Sample Volume X Position (Retired)",
  "00186039": "Doppler Sample Volume X Position",
  "0018603A": "Doppler Sample Volume Y Position (Retired)",
  "0018603B": "Doppler Sample Volume Y Position",
  "0018603C": "TM-Line Position X0 (Retired)",
  "0018603D": "TM-Line Position X0",
  "0018603E": "TM-Line Position Y0 (Retired)",
  "0018603F": "TM-Line Position Y0",
  "00186040": "TM-Line Position X1 (Retired)",
  "00186041": "TM-Line Position X1",
  "00186042": "TM-Line Position Y1 (Retired)",
  "00186043": "TM-Line Position Y1",
  "00186044": "Pixel Component Organization",
  "00186046": "Pixel Component Mask",
  "00186048": "Pixel Component Range Start",
  "0018604A": "Pixel Component Range Stop",
  "0018604C": "Pixel Component Physical Units",
  "0018604E": "Pixel Component Data Type",
  "00186050": "Number of Table Break Points",
  "00186052": "Table of X Break Points",
  "00186054": "Table of Y Break Points",
  "00186056": "Number of Table Entries",
  "00186058": "Table of Pixel Values",
  "0018605A": "Table of Parameter Values",
  "00186060": "R Wave Time Vector",
  "00186070": "Active Image Area Overlay Group",
  "00187000": "Detector Conditions Nominal Flag",
  "00187001": "Detector Temperature",
  "00187004": "Detector Type",
  "00187005": "Detector Configuration",
  "00187006": "Detector Description",
  "00187008": "Detector Mode",
  "0018700A": "Detector ID",
  "0018700C": "Date of Last Detector Calibration",
  "0018700E": "Time of Last Detector Calibration",
  "00187010": "Exposures on Detector Since Last Calibration",
  "00187011": "Exposures on Detector Since Manufactured",
  "00187012": "Detector Time Since Last Exposure",
  "00187014": "Detector Active Time",
  "00187016": "Detector Activation Offset From Exposure",
  "0018701A": "Detector Binning",
  "00187020": "Detector Element Physical Size",
  "00187022": "Detector Element Spacing",
  "00187024": "Detector Active Shape",
  "00187026": "Detector Active Dimension(s)",
  "00187028": "Detector Active Origin",
  "0018702A": "Detector Manufacturer Name",
  "0018702B": "Detector Manufacturer's Model Name",
  "00187030": "Field of View Origin",
  "00187032": "Field of View Rotation",
  "00187034": "Field of View Horizontal Flip",
  "00187036": "Pixel Data Area Origin Relative To FOV",
  "00187038": "Pixel Data Area Rotation Angle Relative To FOV",
  "00187040": "Grid Absorbing Material",
  "00187041": "Grid Spacing Material",
  "00187042": "Grid Thickness",
  "00187044": "Grid Pitch",
  "00187046": "Grid Aspect Ratio",
  "00187048": "Grid Period",
  "0018704C": "Grid Focal Distance",
  "00187050": "Filter Material",
  "00187052": "Filter Thickness Minimum",
  "00187054": "Filter Thickness Maximum",
  "00187056": "Filter Beam Path Length Minimum",
  "00187058": "Filter Beam Path Length Maximum",
  "00187060": "Exposure Control Mode",
  "00187062": "Exposure Control Mode Description",
  "00187064": "Exposure Status",
  "00187065": "Phototimer Setting",
  "00188150": "Exposure Time in \xB5S",
  "00188151": "X-Ray Tube Current in \xB5A",
  "00189004": "Content Qualification",
  "00189005": "Pulse Sequence Name",
  "00189006": "MR Imaging Modifier Sequence",
  "00189008": "Echo Pulse Sequence",
  "00189009": "Inversion Recovery",
  "00189010": "Flow Compensation",
  "00189011": "Multiple Spin Echo",
  "00189012": "Multi-planar Excitation",
  "00189014": "Phase Contrast",
  "00189015": "Time of Flight Contrast",
  "00189016": "Spoiling",
  "00189017": "Steady State Pulse Sequence",
  "00189018": "Echo Planar Pulse Sequence",
  "00189019": "Tag Angle First Axis",
  "00189020": "Magnetization Transfer",
  "00189021": "T2 Preparation",
  "00189022": "Blood Signal Nulling",
  "00189024": "Saturation Recovery",
  "00189025": "Spectrally Selected Suppression",
  "00189026": "Spectrally Selected Excitation",
  "00189027": "Spatial Pre-saturation",
  "00189028": "Tagging",
  "00189029": "Oversampling Phase",
  "00189030": "Tag Spacing First Dimension",
  "00189032": "Geometry of k-Space Traversal",
  "00189033": "Segmented k-Space Traversal",
  "00189034": "Rectilinear Phase Encode Reordering",
  "00189035": "Tag Thickness",
  "00189036": "Partial Fourier Direction",
  "00189037": "Cardiac Synchronization Technique",
  "00189041": "Receive Coil Manufacturer Name",
  "00189042": "MR Receive Coil Sequence",
  "00189043": "Receive Coil Type",
  "00189044": "Quadrature Receive Coil",
  "00189045": "Multi-Coil Definition Sequence",
  "00189046": "Multi-Coil Configuration",
  "00189047": "Multi-Coil Element Name",
  "00189048": "Multi-Coil Element Used",
  "00189049": "MR Transmit Coil Sequence",
  "00189050": "Transmit Coil Manufacturer Name",
  "00189051": "Transmit Coil Type",
  "00189052": "Spectral Width",
  "00189053": "Chemical Shift Reference",
  "00189054": "Volume Localization Technique",
  "00189058": "MR Acquisition Frequency Encoding Steps",
  "00189059": "De-coupling",
  "00189060": "De-coupled Nucleus",
  "00189061": "De-coupling Frequency",
  "00189062": "De-coupling Method",
  "00189063": "De-coupling Chemical Shift Reference",
  "00189064": "k-space Filtering",
  "00189065": "Time Domain Filtering",
  "00189066": "Number of Zero Fills",
  "00189067": "Baseline Correction",
  "00189069": "Parallel Reduction Factor In-plane",
  "00189070": "Cardiac R-R Interval Specified",
  "00189073": "Acquisition Duration",
  "00189074": "Frame Acquisition DateTime",
  "00189075": "Diffusion Directionality",
  "00189076": "Diffusion Gradient Direction Sequence",
  "00189077": "Parallel Acquisition",
  "00189078": "Parallel Acquisition Technique",
  "00189079": "Inversion Times",
  "00189080": "Metabolite Map Description",
  "00189081": "Partial Fourier",
  "00189082": "Effective Echo Time",
  "00189083": "Metabolite Map Code Sequence",
  "00189084": "Chemical Shift Sequence",
  "00189085": "Cardiac Signal Source",
  "00189087": "Diffusion b-value",
  "00189089": "Diffusion Gradient Orientation",
  "00189090": "Velocity Encoding Direction",
  "00189091": "Velocity Encoding Minimum Value",
  "00189092": "Velocity Encoding Acquisition Sequence",
  "00189093": "Number of k-Space Trajectories",
  "00189094": "Coverage of k-Space",
  "00189095": "Spectroscopy Acquisition Phase Rows",
  "00189096": "Parallel Reduction Factor In-plane (Retired)",
  "00189098": "Transmitter Frequency",
  "00189100": "Resonant Nucleus",
  "00189101": "Frequency Correction",
  "00189103": "MR Spectroscopy FOV/Geometry Sequence",
  "00189104": "Slab Thickness",
  "00189105": "Slab Orientation",
  "00189106": "Mid Slab Position",
  "00189107": "MR Spatial Saturation Sequence",
  "00189112": "MR Timing and Related Parameters Sequence",
  "00189114": "MR Echo Sequence",
  "00189115": "MR Modifier Sequence",
  "00189117": "MR Diffusion Sequence",
  "00189118": "Cardiac Synchronization Sequence",
  "00189119": "MR Averages Sequence",
  "00189125": "MR FOV/Geometry Sequence",
  "00189126": "Volume Localization Sequence",
  "00189127": "Spectroscopy Acquisition Data Columns",
  "00189147": "Diffusion Anisotropy Type",
  "00189151": "Frame Reference DateTime",
  "00189152": "MR Metabolite Map Sequence",
  "00189155": "Parallel Reduction Factor out-of-plane",
  "00189159": "Spectroscopy Acquisition Out-of-plane Phase Steps",
  "00189166": "Bulk Motion Status",
  "00189168": "Parallel Reduction Factor Second In-plane",
  "00189169": "Cardiac Beat Rejection Technique",
  "00189170": "Respiratory Motion Compensation Technique",
  "00189171": "Respiratory Signal Source",
  "00189172": "Bulk Motion Compensation Technique",
  "00189173": "Bulk Motion Signal Source",
  "00189174": "Applicable Safety Standard Agency",
  "00189175": "Applicable Safety Standard Description",
  "00189176": "Operating Mode Sequence",
  "00189177": "Operating Mode Type",
  "00189178": "Operating Mode",
  "00189179": "Specific Absorption Rate Definition",
  "00189180": "Gradient Output Type",
  "00189181": "Specific Absorption Rate Value",
  "00189182": "Gradient Output",
  "00189183": "Flow Compensation Direction",
  "00189184": "Tagging Delay",
  "00189185": "Respiratory Motion Compensation Technique Description",
  "00189186": "Respiratory Signal Source ID",
  "00189195": "Chemical Shift Minimum Integration Limit in Hz",
  "00189196": "Chemical Shift Maximum Integration Limit in Hz",
  "00189197": "MR Velocity Encoding Sequence",
  "00189198": "First Order Phase Correction",
  "00189199": "Water Referenced Phase Correction",
  "00189200": "MR Spectroscopy Acquisition Type",
  "00189214": "Respiratory Cycle Position",
  "00189217": "Velocity Encoding Maximum Value",
  "00189218": "Tag Spacing Second Dimension",
  "00189219": "Tag Angle Second Axis",
  "00189220": "Frame Acquisition Duration",
  "00189226": "MR Image Frame Type Sequence",
  "00189227": "MR Spectroscopy Frame Type Sequence",
  "00189231": "MR Acquisition Phase Encoding Steps in-plane",
  "00189232": "MR Acquisition Phase Encoding Steps out-of-plane",
  "00189234": "Spectroscopy Acquisition Phase Columns",
  "00189236": "Cardiac Cycle Position",
  "00189239": "Specific Absorption Rate Sequence",
  "00189240": "RF Echo Train Length",
  "00189241": "Gradient Echo Train Length",
  "00189250": "Arterial Spin Labeling Contrast",
  "00189251": "MR Arterial Spin Labeling Sequence",
  "00189252": "ASL Technique Description",
  "00189253": "ASL Slab Number",
  "00189254": "ASL Slab Thickness",
  "00189255": "ASL Slab Orientation",
  "00189256": "ASL Mid Slab Position",
  "00189257": "ASL Context",
  "00189258": "ASL Pulse Train Duration",
  "00189259": "ASL Crusher Flag",
  "0018925A": "ASL Crusher Flow Limit",
  "0018925B": "ASL Crusher Description",
  "0018925C": "ASL Bolus Cut-off Flag",
  "0018925D": "ASL Bolus Cut-off Timing Sequence",
  "0018925E": "ASL Bolus Cut-off Technique",
  "0018925F": "ASL Bolus Cut-off Delay Time",
  "00189260": "ASL Slab Sequence",
  "00189295": "Chemical Shift Minimum Integration Limit in ppm",
  "00189296": "Chemical Shift Maximum Integration Limit in ppm",
  "00189297": "Water Reference Acquisition",
  "00189298": "Echo Peak Position",
  "00189301": "CT Acquisition Type Sequence",
  "00189302": "Acquisition Type",
  "00189303": "Tube Angle",
  "00189304": "CT Acquisition Details Sequence",
  "00189305": "Revolution Time",
  "00189306": "Single Collimation Width",
  "00189307": "Total Collimation Width",
  "00189308": "CT Table Dynamics Sequence",
  "00189309": "Table Speed",
  "00189310": "Table Feed per Rotation",
  "00189311": "Spiral Pitch Factor",
  "00189312": "CT Geometry Sequence",
  "00189313": "Data Collection Center (Patient)",
  "00189314": "CT Reconstruction Sequence",
  "00189315": "Reconstruction Algorithm",
  "00189316": "Convolution Kernel Group",
  "00189317": "Reconstruction Field of View",
  "00189318": "Reconstruction Target Center (Patient)",
  "00189319": "Reconstruction Angle",
  "00189320": "Image Filter",
  "00189321": "CT Exposure Sequence",
  "00189322": "Reconstruction Pixel Spacing",
  "00189323": "Exposure Modulation Type",
  "00189324": "Estimated Dose Saving",
  "00189325": "CT X-Ray Details Sequence",
  "00189326": "CT Position Sequence",
  "00189327": "Table Position",
  "00189328": "Exposure Time in ms",
  "00189329": "CT Image Frame Type Sequence",
  "00189330": "X-Ray Tube Current in mA",
  "00189332": "Exposure in mAs",
  "00189333": "Constant Volume Flag",
  "00189334": "Fluoroscopy Flag",
  "00189335": "Distance Source to Data Collection Center",
  "00189337": "Contrast/Bolus Agent Number",
  "00189338": "Contrast/Bolus Ingredient Code Sequence",
  "00189340": "Contrast Administration Profile Sequence",
  "00189341": "Contrast/Bolus Usage Sequence",
  "00189342": "Contrast/Bolus Agent Administered",
  "00189343": "Contrast/Bolus Agent Detected",
  "00189344": "Contrast/Bolus Agent Phase",
  "00189345": "CTDIvol",
  "00189346": "CTDI Phantom Type Code Sequence",
  "00189351": "Calcium Scoring Mass Factor Patient",
  "00189352": "Calcium Scoring Mass Factor Device",
  "00189353": "Energy Weighting Factor",
  "00189360": "CT Additional X-Ray Source Sequence",
  "00189361": "Multi-energy CT Acquisition",
  "00189362": "Multi-energy CT Acquisition Sequence",
  "00189363": "Multi-energy CT Processing Sequence",
  "00189364": "Multi-energy CT Characteristics Sequence",
  "00189365": "Multi-energy CT X-Ray Source Sequence",
  "00189366": "X-Ray Source Index",
  "00189367": "X-Ray Source ID",
  "00189368": "Multi-energy Source Technique",
  "00189369": "Source Start DateTime",
  "0018936A": "Source End DateTime",
  "0018936B": "Switching Phase Number",
  "0018936C": "Switching Phase Nominal Duration",
  "0018936D": "Switching Phase Transition Duration",
  "0018936E": "Effective Bin Energy",
  "0018936F": "Multi-energy CT X-Ray Detector Sequence",
  "00189370": "X-Ray Detector Index",
  "00189371": "X-Ray Detector ID",
  "00189372": "Multi-energy Detector Type",
  "00189373": "X-Ray Detector Label",
  "00189374": "Nominal Max Energy",
  "00189375": "Nominal Min Energy",
  "00189376": "Referenced X-Ray Detector Index",
  "00189377": "Referenced X-Ray Source Index",
  "00189378": "Referenced Path Index",
  "00189379": "Multi-energy CT Path Sequence",
  "0018937A": "Multi-energy CT Path Index",
  "0018937B": "Multi-energy Acquisition Description",
  "0018937C": "Monoenergetic Energy Equivalent",
  "0018937D": "Material Code Sequence",
  "0018937E": "Decomposition Method",
  "0018937F": "Decomposition Description",
  "00189380": "Decomposition Algorithm Identification Sequence",
  "00189381": "Decomposition Material Sequence",
  "00189382": "Material Attenuation Sequence",
  "00189383": "Photon Energy",
  "00189384": "X-Ray Mass Attenuation Coefficient",
  "00189401": "Projection Pixel Calibration Sequence",
  "00189402": "Distance Source to Isocenter",
  "00189403": "Distance Object to Table Top",
  "00189404": "Object Pixel Spacing in Center of Beam",
  "00189405": "Positioner Position Sequence",
  "00189406": "Table Position Sequence",
  "00189407": "Collimator Shape Sequence",
  "00189410": "Planes in Acquisition",
  "00189412": "XA/XRF Frame Characteristics Sequence",
  "00189417": "Frame Acquisition Sequence",
  "00189420": "X-Ray Receptor Type",
  "00189423": "Acquisition Protocol Name",
  "00189424": "Acquisition Protocol Description",
  "00189425": "Contrast/Bolus Ingredient Opaque",
  "00189426": "Distance Receptor Plane to Detector Housing",
  "00189427": "Intensifier Active Shape",
  "00189428": "Intensifier Active Dimension(s)",
  "00189429": "Physical Detector Size",
  "00189430": "Position of Isocenter Projection",
  "00189432": "Field of View Sequence",
  "00189433": "Field of View Description",
  "00189434": "Exposure Control Sensing Regions Sequence",
  "00189435": "Exposure Control Sensing Region Shape",
  "00189436": "Exposure Control Sensing Region Left Vertical Edge",
  "00189437": "Exposure Control Sensing Region Right Vertical Edge",
  "00189438": "Exposure Control Sensing Region Upper Horizontal Edge",
  "00189439": "Exposure Control Sensing Region Lower Horizontal Edge",
  "00189440": "Center of Circular Exposure Control Sensing Region",
  "00189441": "Radius of Circular Exposure Control Sensing Region",
  "00189442": "Vertices of the Polygonal Exposure Control Sensing Region",
  "00189447": "Column Angulation (Patient)",
  "00189449": "Beam Angle",
  "00189451": "Frame Detector Parameters Sequence",
  "00189452": "Calculated Anatomy Thickness",
  "00189455": "Calibration Sequence",
  "00189456": "Object Thickness Sequence",
  "00189457": "Plane Identification",
  "00189461": "Field of View Dimension(s) in Float",
  "00189462": "Isocenter Reference System Sequence",
  "00189463": "Positioner Isocenter Primary Angle",
  "00189464": "Positioner Isocenter Secondary Angle",
  "00189465": "Positioner Isocenter Detector Rotation Angle",
  "00189466": "Table X Position to Isocenter",
  "00189467": "Table Y Position to Isocenter",
  "00189468": "Table Z Position to Isocenter",
  "00189469": "Table Horizontal Rotation Angle",
  "00189470": "Table Head Tilt Angle",
  "00189471": "Table Cradle Tilt Angle",
  "00189472": "Frame Display Shutter Sequence",
  "00189473": "Acquired Image Area Dose Product",
  "00189474": "C-arm Positioner Tabletop Relationship",
  "00189476": "X-Ray Geometry Sequence",
  "00189477": "Irradiation Event Identification Sequence",
  "00189504": "X-Ray 3D Frame Type Sequence",
  "00189506": "Contributing Sources Sequence",
  "00189507": "X-Ray 3D Acquisition Sequence",
  "00189508": "Primary Positioner Scan Arc",
  "00189509": "Secondary Positioner Scan Arc",
  "00189510": "Primary Positioner Scan Start Angle",
  "00189511": "Secondary Positioner Scan Start Angle",
  "00189514": "Primary Positioner Increment",
  "00189515": "Secondary Positioner Increment",
  "00189516": "Start Acquisition DateTime",
  "00189517": "End Acquisition DateTime",
  "00189518": "Primary Positioner Increment Sign",
  "00189519": "Secondary Positioner Increment Sign",
  "00189524": "Application Name",
  "00189525": "Application Version",
  "00189526": "Application Manufacturer",
  "00189527": "Algorithm Type",
  "00189528": "Algorithm Description",
  "00189530": "X-Ray 3D Reconstruction Sequence",
  "00189531": "Reconstruction Description",
  "00189538": "Per Projection Acquisition Sequence",
  "00189541": "Detector Position Sequence",
  "00189542": "X-Ray Acquisition Dose Sequence",
  "00189543": "X-Ray Source Isocenter Primary Angle",
  "00189544": "X-Ray Source Isocenter Secondary Angle",
  "00189545": "Breast Support Isocenter Primary Angle",
  "00189546": "Breast Support Isocenter Secondary Angle",
  "00189547": "Breast Support X Position to Isocenter",
  "00189548": "Breast Support Y Position to Isocenter",
  "00189549": "Breast Support Z Position to Isocenter",
  "00189550": "Detector Isocenter Primary Angle",
  "00189551": "Detector Isocenter Secondary Angle",
  "00189552": "Detector X Position to Isocenter",
  "00189553": "Detector Y Position to Isocenter",
  "00189554": "Detector Z Position to Isocenter",
  "00189555": "X-Ray Grid Sequence",
  "00189556": "X-Ray Filter Sequence",
  "00189557": "Detector Active Area TLHC Position",
  "00189558": "Detector Active Area Orientation",
  "00189559": "Positioner Primary Angle Direction",
  "00189601": "Diffusion b-matrix Sequence",
  "00189602": "Diffusion b-value XX",
  "00189603": "Diffusion b-value XY",
  "00189604": "Diffusion b-value XZ",
  "00189605": "Diffusion b-value YY",
  "00189606": "Diffusion b-value YZ",
  "00189607": "Diffusion b-value ZZ",
  "00189621": "Functional MR Sequence",
  "00189622": "Functional Settling Phase Frames Present",
  "00189623": "Functional Sync Pulse",
  "00189624": "Settling Phase Frame",
  "00189701": "Decay Correction DateTime",
  "00189715": "Start Density Threshold",
  "00189716": "Start Relative Density Difference Threshold",
  "00189717": "Start Cardiac Trigger Count Threshold",
  "00189718": "Start Respiratory Trigger Count Threshold",
  "00189719": "Termination Counts Threshold",
  "00189720": "Termination Density Threshold",
  "00189721": "Termination Relative Density Threshold",
  "00189722": "Termination Time Threshold",
  "00189723": "Termination Cardiac Trigger Count Threshold",
  "00189724": "Termination Respiratory Trigger Count Threshold",
  "00189725": "Detector Geometry",
  "00189726": "Transverse Detector Separation",
  "00189727": "Axial Detector Dimension",
  "00189729": "Radiopharmaceutical Agent Number",
  "00189732": "PET Frame Acquisition Sequence",
  "00189733": "PET Detector Motion Details Sequence",
  "00189734": "PET Table Dynamics Sequence",
  "00189735": "PET Position Sequence",
  "00189736": "PET Frame Correction Factors Sequence",
  "00189737": "Radiopharmaceutical Usage Sequence",
  "00189738": "Attenuation Correction Source",
  "00189739": "Number of Iterations",
  "00189740": "Number of Subsets",
  "00189749": "PET Reconstruction Sequence",
  "00189751": "PET Frame Type Sequence",
  "00189755": "Time of Flight Information Used",
  "00189756": "Reconstruction Type",
  "00189758": "Decay Corrected",
  "00189759": "Attenuation Corrected",
  "00189760": "Scatter Corrected",
  "00189761": "Dead Time Corrected",
  "00189762": "Gantry Motion Corrected",
  "00189763": "Patient Motion Corrected",
  "00189764": "Count Loss Normalization Corrected",
  "00189765": "Randoms Corrected",
  "00189766": "Non-uniform Radial Sampling Corrected",
  "00189767": "Sensitivity Calibrated",
  "00189768": "Detector Normalization Correction",
  "00189769": "Iterative Reconstruction Method",
  "00189770": "Attenuation Correction Temporal Relationship",
  "00189771": "Patient Physiological State Sequence",
  "00189772": "Patient Physiological State Code Sequence",
  "00189801": "Depth(s) of Focus",
  "00189803": "Excluded Intervals Sequence",
  "00189804": "Exclusion Start DateTime",
  "00189805": "Exclusion Duration",
  "00189806": "US Image Description Sequence",
  "00189807": "Image Data Type Sequence",
  "00189808": "Data Type",
  "00189809": "Transducer Scan Pattern Code Sequence",
  "0018980B": "Aliased Data Type",
  "0018980C": "Position Measuring Device Used",
  "0018980D": "Transducer Geometry Code Sequence",
  "0018980E": "Transducer Beam Steering Code Sequence",
  "0018980F": "Transducer Application Code Sequence",
  "00189810": "Zero Velocity Pixel Value",
  "00189821": "Photoacoustic Excitation Characteristics Sequence",
  "00189822": "Excitation Spectral Width",
  "00189823": "Excitation Energy",
  "00189824": "Excitation Pulse Duration",
  "00189825": "Excitation Wavelength Sequence",
  "00189826": "Excitation Wavelength",
  "00189828": "Illumination Translation Flag",
  "00189829": "Acoustic Coupling Medium Flag",
  "0018982A": "Acoustic Coupling Medium Code Sequence",
  "0018982B": "Acoustic Coupling Medium Temperature",
  "0018982C": "Transducer Response Sequence",
  "0018982D": "Center Frequency",
  "0018982E": "Fractional Bandwidth",
  "0018982F": "Lower Cutoff Frequency",
  "00189830": "Upper Cutoff Frequency",
  "00189831": "Transducer Technology Sequence",
  "00189832": "Sound Speed Correction Mechanism Code Sequence",
  "00189833": "Object Sound Speed",
  "00189834": "Acoustic Coupling Medium Sound Speed",
  "00189835": "Photoacoustic Image Frame Type Sequence",
  "00189836": "Image Data Type Code Sequence",
  "00189900": "Reference Location Label",
  "00189901": "Reference Location Description",
  "00189902": "Reference Basis Code Sequence",
  "00189903": "Reference Geometry Code Sequence",
  "00189904": "Offset Distance",
  "00189905": "Offset Direction",
  "00189906": "Potential Scheduled Protocol Code Sequence",
  "00189907": "Potential Requested Procedure Code Sequence",
  "00189908": "Potential Reasons for Procedure",
  "00189909": "Potential Reasons for Procedure Code Sequence",
  "0018990A": "Potential Diagnostic Tasks",
  "0018990B": "Contraindications Code Sequence",
  "0018990C": "Referenced Defined Protocol Sequence",
  "0018990D": "Referenced Performed Protocol Sequence",
  "0018990E": "Predecessor Protocol Sequence",
  "0018990F": "Protocol Planning Information",
  "00189910": "Protocol Design Rationale",
  "00189911": "Patient Specification Sequence",
  "00189912": "Model Specification Sequence",
  "00189913": "Parameters Specification Sequence",
  "00189914": "Instruction Sequence",
  "00189915": "Instruction Index",
  "00189916": "Instruction Text",
  "00189917": "Instruction Description",
  "00189918": "Instruction Performed Flag",
  "00189919": "Instruction Performed DateTime",
  "0018991A": "Instruction Performance Comment",
  "0018991B": "Patient Positioning Instruction Sequence",
  "0018991C": "Positioning Method Code Sequence",
  "0018991D": "Positioning Landmark Sequence",
  "0018991E": "Target Frame of Reference UID",
  "0018991F": "Acquisition Protocol Element Specification Sequence",
  "00189920": "Acquisition Protocol Element Sequence",
  "00189921": "Protocol Element Number",
  "00189922": "Protocol Element Name",
  "00189923": "Protocol Element Characteristics Summary",
  "00189924": "Protocol Element Purpose",
  "00189930": "Acquisition Motion",
  "00189931": "Acquisition Start Location Sequence",
  "00189932": "Acquisition End Location Sequence",
  "00189933": "Reconstruction Protocol Element Specification Sequence",
  "00189934": "Reconstruction Protocol Element Sequence",
  "00189935": "Storage Protocol Element Specification Sequence",
  "00189936": "Storage Protocol Element Sequence",
  "00189937": "Requested Series Description",
  "00189938": "Source Acquisition Protocol Element Number",
  "00189939": "Source Acquisition Beam Number",
  "0018993A": "Source Reconstruction Protocol Element Number",
  "0018993B": "Reconstruction Start Location Sequence",
  "0018993C": "Reconstruction End Location Sequence",
  "0018993D": "Reconstruction Algorithm Sequence",
  "0018993E": "Reconstruction Target Center Location Sequence",
  "00189941": "Image Filter Description",
  "00189942": "CTDIvol Notification Trigger",
  "00189943": "DLP Notification Trigger",
  "00189944": "Auto KVP Selection Type",
  "00189945": "Auto KVP Upper Bound",
  "00189946": "Auto KVP Lower Bound",
  "00189947": "Protocol Defined Patient Position",
  "0018A001": "Contributing Equipment Sequence",
  "0018A002": "Contribution DateTime",
  "0018A003": "Contribution Description",
  "0020000D": "Study Instance UID",
  "0020000E": "Series Instance UID",
  "00200010": "Study ID",
  "00200011": "Series Number",
  "00200012": "Acquisition Number",
  "00200013": "Instance Number",
  "00200014": "Isotope Number",
  "00200015": "Phase Number",
  "00200016": "Interval Number",
  "00200017": "Time Slot Number",
  "00200018": "Angle Number",
  "00200019": "Item Number",
  "00200020": "Patient Orientation",
  "00200022": "Overlay Number",
  "00200024": "Curve Number",
  "00200026": "LUT Number",
  "00200027": "Pyramid Label",
  "00200030": "Image Position",
  "00200032": "Image Position (Patient)",
  "00200035": "Image Orientation",
  "00200037": "Image Orientation (Patient)",
  "00200050": "Location",
  "00200052": "Frame of Reference UID",
  "00200060": "Laterality",
  "00200062": "Image Laterality",
  "00200070": "Image Geometry Type",
  "00200080": "Masking Image",
  "002000AA": "Report Number",
  "00200100": "Temporal Position Identifier",
  "00200105": "Number of Temporal Positions",
  "00200110": "Temporal Resolution",
  "00200200": "Synchronization Frame of Reference UID",
  "00200242": "SOP Instance UID of Concatenation Source",
  "00201000": "Series in Study",
  "00201001": "Acquisitions in Series",
  "00201002": "Images in Acquisition",
  "00201003": "Images in Series",
  "00201004": "Acquisitions in Study",
  "00201005": "Images in Study",
  "00201020": "Reference",
  "0020103F": "Target Position Reference Indicator",
  "00201040": "Position Reference Indicator",
  "00201041": "Slice Location",
  "00201070": "Other Study Numbers",
  "00201200": "Number of Patient Related Studies",
  "00201202": "Number of Patient Related Series",
  "00201204": "Number of Patient Related Instances",
  "00201206": "Number of Study Related Series",
  "00201208": "Number of Study Related Instances",
  "00201209": "Number of Series Related Instances",
  "002031xx": "Source Image IDs",
  "00203401": "Modifying Device ID",
  "00203402": "Modified Image ID",
  "00203403": "Modified Image Date",
  "00203404": "Modifying Device Manufacturer",
  "00203405": "Modified Image Time",
  "00203406": "Modified Image Description",
  "00204000": "Image Comments",
  "00205000": "Original Image Identification",
  "00205002": "Original Image Identification Nomenclature",
  "00209056": "Stack ID",
  "00209057": "In-Stack Position Number",
  "00209071": "Frame Anatomy Sequence",
  "00209072": "Frame Laterality",
  "00209111": "Frame Content Sequence",
  "00209113": "Plane Position Sequence",
  "00209116": "Plane Orientation Sequence",
  "00209128": "Temporal Position Index",
  "00209153": "Nominal Cardiac Trigger Delay Time",
  "00209154": "Nominal Cardiac Trigger Time Prior To R-Peak",
  "00209155": "Actual Cardiac Trigger Time Prior To R-Peak",
  "00209156": "Frame Acquisition Number",
  "00209157": "Dimension Index Values",
  "00209158": "Frame Comments",
  "00209161": "Concatenation UID",
  "00209162": "In-concatenation Number",
  "00209163": "In-concatenation Total Number",
  "00209164": "Dimension Organization UID",
  "00209165": "Dimension Index Pointer",
  "00209167": "Functional Group Pointer",
  "00209170": "Unassigned Shared Converted Attributes Sequence",
  "00209171": "Unassigned Per-Frame Converted Attributes Sequence",
  "00209172": "Conversion Source Attributes Sequence",
  "00209213": "Dimension Index Private Creator",
  "00209221": "Dimension Organization Sequence",
  "00209222": "Dimension Index Sequence",
  "00209228": "Concatenation Frame Offset Number",
  "00209238": "Functional Group Private Creator",
  "00209241": "Nominal Percentage of Cardiac Phase",
  "00209245": "Nominal Percentage of Respiratory Phase",
  "00209246": "Starting Respiratory Amplitude",
  "00209247": "Starting Respiratory Phase",
  "00209248": "Ending Respiratory Amplitude",
  "00209249": "Ending Respiratory Phase",
  "00209250": "Respiratory Trigger Type",
  "00209251": "R-R Interval Time Nominal",
  "00209252": "Actual Cardiac Trigger Delay Time",
  "00209253": "Respiratory Synchronization Sequence",
  "00209254": "Respiratory Interval Time",
  "00209255": "Nominal Respiratory Trigger Delay Time",
  "00209256": "Respiratory Trigger Delay Threshold",
  "00209257": "Actual Respiratory Trigger Delay Time",
  "00209301": "Image Position (Volume)",
  "00209302": "Image Orientation (Volume)",
  "00209307": "Ultrasound Acquisition Geometry",
  "00209308": "Apex Position",
  "00209309": "Volume to Transducer Mapping Matrix",
  "0020930A": "Volume to Table Mapping Matrix",
  "0020930B": "Volume to Transducer Relationship",
  "0020930C": "Patient Frame of Reference Source",
  "0020930D": "Temporal Position Time Offset",
  "0020930E": "Plane Position (Volume) Sequence",
  "0020930F": "Plane Orientation (Volume) Sequence",
  "00209310": "Temporal Position Sequence",
  "00209311": "Dimension Organization Type",
  "00209312": "Volume Frame of Reference UID",
  "00209313": "Table Frame of Reference UID",
  "00209421": "Dimension Description Label",
  "00209450": "Patient Orientation in Frame Sequence",
  "00209453": "Frame Label",
  "00209518": "Acquisition Index",
  "00209529": "Contributing SOP Instances Reference Sequence",
  "00209536": "Reconstruction Index",
  "00220001": "Light Path Filter Pass-Through Wavelength",
  "00220002": "Light Path Filter Pass Band",
  "00220003": "Image Path Filter Pass-Through Wavelength",
  "00220004": "Image Path Filter Pass Band",
  "00220005": "Patient Eye Movement Commanded",
  "00220006": "Patient Eye Movement Command Code Sequence",
  "00220007": "Spherical Lens Power",
  "00220008": "Cylinder Lens Power",
  "00220009": "Cylinder Axis",
  "0022000A": "Emmetropic Magnification",
  "0022000B": "Intra Ocular Pressure",
  "0022000C": "Horizontal Field of View",
  "0022000D": "Pupil Dilated",
  "0022000E": "Degree of Dilation",
  "0022000F": "Vertex Distance",
  "00220010": "Stereo Baseline Angle",
  "00220011": "Stereo Baseline Displacement",
  "00220012": "Stereo Horizontal Pixel Offset",
  "00220013": "Stereo Vertical Pixel Offset",
  "00220014": "Stereo Rotation",
  "00220015": "Acquisition Device Type Code Sequence",
  "00220016": "Illumination Type Code Sequence",
  "00220017": "Light Path Filter Type Stack Code Sequence",
  "00220018": "Image Path Filter Type Stack Code Sequence",
  "00220019": "Lenses Code Sequence",
  "0022001A": "Channel Description Code Sequence",
  "0022001B": "Refractive State Sequence",
  "0022001C": "Mydriatic Agent Code Sequence",
  "0022001D": "Relative Image Position Code Sequence",
  "0022001E": "Camera Angle of View",
  "00220020": "Stereo Pairs Sequence",
  "00220021": "Left Image Sequence",
  "00220022": "Right Image Sequence",
  "00220028": "Stereo Pairs Present",
  "00220030": "Axial Length of the Eye",
  "00220031": "Ophthalmic Frame Location Sequence",
  "00220032": "Reference Coordinates",
  "00220035": "Depth Spatial Resolution",
  "00220036": "Maximum Depth Distortion",
  "00220037": "Along-scan Spatial Resolution",
  "00220038": "Maximum Along-scan Distortion",
  "00220039": "Ophthalmic Image Orientation",
  "00220041": "Depth of Transverse Image",
  "00220042": "Mydriatic Agent Concentration Units Sequence",
  "00220048": "Across-scan Spatial Resolution",
  "00220049": "Maximum Across-scan Distortion",
  "0022004E": "Mydriatic Agent Concentration",
  "00220055": "Illumination Wave Length",
  "00220056": "Illumination Power",
  "00220057": "Illumination Bandwidth",
  "00220058": "Mydriatic Agent Sequence",
  "00221007": "Ophthalmic Axial Measurements Right Eye Sequence",
  "00221008": "Ophthalmic Axial Measurements Left Eye Sequence",
  "00221009": "Ophthalmic Axial Measurements Device Type",
  "00221010": "Ophthalmic Axial Length Measurements Type",
  "00221012": "Ophthalmic Axial Length Sequence",
  "00221019": "Ophthalmic Axial Length",
  "00221024": "Lens Status Code Sequence",
  "00221025": "Vitreous Status Code Sequence",
  "00221028": "IOL Formula Code Sequence",
  "00221029": "IOL Formula Detail",
  "00221033": "Keratometer Index",
  "00221035": "Source of Ophthalmic Axial Length Code Sequence",
  "00221036": "Source of Corneal Size Data Code Sequence",
  "00221037": "Target Refraction",
  "00221039": "Refractive Procedure Occurred",
  "00221040": "Refractive Surgery Type Code Sequence",
  "00221044": "Ophthalmic Ultrasound Method Code Sequence",
  "00221045": "Surgically Induced Astigmatism Sequence",
  "00221046": "Type of Optical Correction",
  "00221047": "Toric IOL Power Sequence",
  "00221048": "Predicted Toric Error Sequence",
  "00221049": "Pre-Selected for Implantation",
  "0022104A": "Toric IOL Power for Exact Emmetropia Sequence",
  "0022104B": "Toric IOL Power for Exact Target Refraction Sequence",
  "00221050": "Ophthalmic Axial Length Measurements Sequence",
  "00221053": "IOL Power",
  "00221054": "Predicted Refractive Error",
  "00221059": "Ophthalmic Axial Length Velocity",
  "00221065": "Lens Status Description",
  "00221066": "Vitreous Status Description",
  "00221090": "IOL Power Sequence",
  "00221092": "Lens Constant Sequence",
  "00221093": "IOL Manufacturer",
  "00221094": "Lens Constant Description",
  "00221095": "Implant Name",
  "00221096": "Keratometry Measurement Type Code Sequence",
  "00221097": "Implant Part Number",
  "00221100": "Referenced Ophthalmic Axial Measurements Sequence",
  "00221101": "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
  "00221103": "Refractive Error Before Refractive Surgery Code Sequence",
  "00221121": "IOL Power For Exact Emmetropia",
  "00221122": "IOL Power For Exact Target Refraction",
  "00221125": "Anterior Chamber Depth Definition Code Sequence",
  "00221127": "Lens Thickness Sequence",
  "00221128": "Anterior Chamber Depth Sequence",
  "0022112A": "Calculation Comment Sequence",
  "0022112B": "Calculation Comment Type",
  "0022112C": "Calculation Comment",
  "00221130": "Lens Thickness",
  "00221131": "Anterior Chamber Depth",
  "00221132": "Source of Lens Thickness Data Code Sequence",
  "00221133": "Source of Anterior Chamber Depth Data Code Sequence",
  "00221134": "Source of Refractive Measurements Sequence",
  "00221135": "Source of Refractive Measurements Code Sequence",
  "00221140": "Ophthalmic Axial Length Measurement Modified",
  "00221150": "Ophthalmic Axial Length Data Source Code Sequence",
  "00221153": "Ophthalmic Axial Length Acquisition Method Code Sequence",
  "00221155": "Signal to Noise Ratio",
  "00221159": "Ophthalmic Axial Length Data Source Description",
  "00221210": "Ophthalmic Axial Length Measurements Total Length Sequence",
  "00221211": "Ophthalmic Axial Length Measurements Segmental Length Sequence",
  "00221212": "Ophthalmic Axial Length Measurements Length Summation Sequence",
  "00221220": "Ultrasound Ophthalmic Axial Length Measurements Sequence",
  "00221225": "Optical Ophthalmic Axial Length Measurements Sequence",
  "00221230": "Ultrasound Selected Ophthalmic Axial Length Sequence",
  "00221250": "Ophthalmic Axial Length Selection Method Code Sequence",
  "00221255": "Optical Selected Ophthalmic Axial Length Sequence",
  "00221257": "Selected Segmental Ophthalmic Axial Length Sequence",
  "00221260": "Selected Total Ophthalmic Axial Length Sequence",
  "00221262": "Ophthalmic Axial Length Quality Metric Sequence",
  "00221265": "Ophthalmic Axial Length Quality Metric Type Code Sequence",
  "00221273": "Ophthalmic Axial Length Quality Metric Type Description",
  "00221300": "Intraocular Lens Calculations Right Eye Sequence",
  "00221310": "Intraocular Lens Calculations Left Eye Sequence",
  "00221330": "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
  "00221415": "Ophthalmic Mapping Device Type",
  "00221420": "Acquisition Method Code Sequence",
  "00221423": "Acquisition Method Algorithm Sequence",
  "00221436": "Ophthalmic Thickness Map Type Code Sequence",
  "00221443": "Ophthalmic Thickness Mapping Normals Sequence",
  "00221445": "Retinal Thickness Definition Code Sequence",
  "00221450": "Pixel Value Mapping to Coded Concept Sequence",
  "00221452": "Mapped Pixel Value",
  "00221454": "Pixel Value Mapping Explanation",
  "00221458": "Ophthalmic Thickness Map Quality Threshold Sequence",
  "00221460": "Ophthalmic Thickness Map Threshold Quality Rating",
  "00221463": "Anatomic Structure Reference Point",
  "00221465": "Registration to Localizer Sequence",
  "00221466": "Registered Localizer Units",
  "00221467": "Registered Localizer Top Left Hand Corner",
  "00221468": "Registered Localizer Bottom Right Hand Corner",
  "00221470": "Ophthalmic Thickness Map Quality Rating Sequence",
  "00221472": "Relevant OPT Attributes Sequence",
  "00221512": "Transformation Method Code Sequence",
  "00221513": "Transformation Algorithm Sequence",
  "00221515": "Ophthalmic Axial Length Method",
  "00221517": "Ophthalmic FOV",
  "00221518": "Two Dimensional to Three Dimensional Map Sequence",
  "00221525": "Wide Field Ophthalmic Photography Quality Rating Sequence",
  "00221526": "Wide Field Ophthalmic Photography Quality Threshold Sequence",
  "00221527": "Wide Field Ophthalmic Photography Threshold Quality Rating",
  "00221528": "X Coordinates Center Pixel View Angle",
  "00221529": "Y Coordinates Center Pixel View Angle",
  "00221530": "Number of Map Points",
  "00221531": "Two Dimensional to Three Dimensional Map Data",
  "00221612": "Derivation Algorithm Sequence",
  "00221615": "Ophthalmic Image Type Code Sequence",
  "00221616": "Ophthalmic Image Type Description",
  "00221618": "Scan Pattern Type Code Sequence",
  "00221620": "Referenced Surface Mesh Identification Sequence",
  "00221622": "Ophthalmic Volumetric Properties Flag",
  "00221623": "Ophthalmic Anatomic Reference Point Frame Coordinate",
  "00221624": "Ophthalmic Anatomic Reference Point X-Coordinate",
  "00221626": "Ophthalmic Anatomic Reference Point Y-Coordinate",
  "00221627": "Ophthalmic En Face Volume Descriptor Sequence",
  "00221628": "Ophthalmic En Face Image Quality Rating Sequence",
  "00221629": "Ophthalmic En Face Volume Descriptor Scope",
  "00221630": "Quality Threshold",
  "00221632": "Ophthalmic Anatomic Reference Point Sequence",
  "00221633": "Ophthalmic Anatomic Reference Point Localization Type",
  "00221634": "Primary Anatomic Structure Item Index",
  "00221640": "OCT B-scan Analysis Acquisition Parameters Sequence",
  "00221642": "Number of B-scans Per Frame",
  "00221643": "B-scan Slab Thickness",
  "00221644": "Distance Between B-scan Slabs",
  "00221645": "B-scan Cycle Time",
  "00221646": "B-scan Cycle Time Vector",
  "00221649": "A-scan Rate",
  "00221650": "B-scan Rate",
  "00221658": "Surface Mesh Z-Pixel Offset",
  "00240010": "Visual Field Horizontal Extent",
  "00240011": "Visual Field Vertical Extent",
  "00240012": "Visual Field Shape",
  "00240016": "Screening Test Mode Code Sequence",
  "00240018": "Maximum Stimulus Luminance",
  "00240020": "Background Luminance",
  "00240021": "Stimulus Color Code Sequence",
  "00240024": "Background Illumination Color Code Sequence",
  "00240025": "Stimulus Area",
  "00240028": "Stimulus Presentation Time",
  "00240032": "Fixation Sequence",
  "00240033": "Fixation Monitoring Code Sequence",
  "00240034": "Visual Field Catch Trial Sequence",
  "00240035": "Fixation Checked Quantity",
  "00240036": "Patient Not Properly Fixated Quantity",
  "00240037": "Presented Visual Stimuli Data Flag",
  "00240038": "Number of Visual Stimuli",
  "00240039": "Excessive Fixation Losses Data Flag",
  "00240040": "Excessive Fixation Losses",
  "00240042": "Stimuli Retesting Quantity",
  "00240044": "Comments on Patient's Performance of Visual Field",
  "00240045": "False Negatives Estimate Flag",
  "00240046": "False Negatives Estimate",
  "00240048": "Negative Catch Trials Quantity",
  "00240050": "False Negatives Quantity",
  "00240051": "Excessive False Negatives Data Flag",
  "00240052": "Excessive False Negatives",
  "00240053": "False Positives Estimate Flag",
  "00240054": "False Positives Estimate",
  "00240055": "Catch Trials Data Flag",
  "00240056": "Positive Catch Trials Quantity",
  "00240057": "Test Point Normals Data Flag",
  "00240058": "Test Point Normals Sequence",
  "00240059": "Global Deviation Probability Normals Flag",
  "00240060": "False Positives Quantity",
  "00240061": "Excessive False Positives Data Flag",
  "00240062": "Excessive False Positives",
  "00240063": "Visual Field Test Normals Flag",
  "00240064": "Results Normals Sequence",
  "00240065": "Age Corrected Sensitivity Deviation Algorithm Sequence",
  "00240066": "Global Deviation From Normal",
  "00240067": "Generalized Defect Sensitivity Deviation Algorithm Sequence",
  "00240068": "Localized Deviation From Normal",
  "00240069": "Patient Reliability Indicator",
  "00240070": "Visual Field Mean Sensitivity",
  "00240071": "Global Deviation Probability",
  "00240072": "Local Deviation Probability Normals Flag",
  "00240073": "Localized Deviation Probability",
  "00240074": "Short Term Fluctuation Calculated",
  "00240075": "Short Term Fluctuation",
  "00240076": "Short Term Fluctuation Probability Calculated",
  "00240077": "Short Term Fluctuation Probability",
  "00240078": "Corrected Localized Deviation From Normal Calculated",
  "00240079": "Corrected Localized Deviation From Normal",
  "00240080": "Corrected Localized Deviation From Normal Probability Calculated",
  "00240081": "Corrected Localized Deviation From Normal Probability",
  "00240083": "Global Deviation Probability Sequence",
  "00240085": "Localized Deviation Probability Sequence",
  "00240086": "Foveal Sensitivity Measured",
  "00240087": "Foveal Sensitivity",
  "00240088": "Visual Field Test Duration",
  "00240089": "Visual Field Test Point Sequence",
  "00240090": "Visual Field Test Point X-Coordinate",
  "00240091": "Visual Field Test Point Y-Coordinate",
  "00240092": "Age Corrected Sensitivity Deviation Value",
  "00240093": "Stimulus Results",
  "00240094": "Sensitivity Value",
  "00240095": "Retest Stimulus Seen",
  "00240096": "Retest Sensitivity Value",
  "00240097": "Visual Field Test Point Normals Sequence",
  "00240098": "Quantified Defect",
  "00240100": "Age Corrected Sensitivity Deviation Probability Value",
  "00240102": "Generalized Defect Corrected Sensitivity Deviation Flag",
  "00240103": "Generalized Defect Corrected Sensitivity Deviation Value",
  "00240104": "Generalized Defect Corrected Sensitivity Deviation Probability Value",
  "00240105": "Minimum Sensitivity Value",
  "00240106": "Blind Spot Localized",
  "00240107": "Blind Spot X-Coordinate",
  "00240108": "Blind Spot Y-Coordinate",
  "00240110": "Visual Acuity Measurement Sequence",
  "00240112": "Refractive Parameters Used on Patient Sequence",
  "00240113": "Measurement Laterality",
  "00240114": "Ophthalmic Patient Clinical Information Left Eye Sequence",
  "00240115": "Ophthalmic Patient Clinical Information Right Eye Sequence",
  "00240117": "Foveal Point Normative Data Flag",
  "00240118": "Foveal Point Probability Value",
  "00240120": "Screening Baseline Measured",
  "00240122": "Screening Baseline Measured Sequence",
  "00240124": "Screening Baseline Type",
  "00240126": "Screening Baseline Value",
  "00240202": "Algorithm Source",
  "00240306": "Data Set Name",
  "00240307": "Data Set Version",
  "00240308": "Data Set Source",
  "00240309": "Data Set Description",
  "00240317": "Visual Field Test Reliability Global Index Sequence",
  "00240320": "Visual Field Global Results Index Sequence",
  "00240325": "Data Observation Sequence",
  "00240338": "Index Normals Flag",
  "00240341": "Index Probability",
  "00240344": "Index Probability Sequence",
  "00280002": "Samples per Pixel",
  "00280003": "Samples per Pixel Used",
  "00280004": "Photometric Interpretation",
  "00280005": "Image Dimensions",
  "00280006": "Planar Configuration",
  "00280008": "Number of Frames",
  "00280009": "Frame Increment Pointer",
  "0028000A": "Frame Dimension Pointer",
  "00280010": "Rows",
  "00280011": "Columns",
  "00280012": "Planes",
  "00280014": "Ultrasound Color Data Present",
  "00280030": "Pixel Spacing",
  "00280031": "Zoom Factor",
  "00280032": "Zoom Center",
  "00280034": "Pixel Aspect Ratio",
  "00280040": "Image Format",
  "00280050": "Manipulated Image",
  "00280051": "Corrected Image",
  "0028005F": "Compression Recognition Code",
  "00280060": "Compression Code",
  "00280061": "Compression Originator",
  "00280062": "Compression Label",
  "00280063": "Compression Description",
  "00280065": "Compression Sequence",
  "00280066": "Compression Step Pointers",
  "00280068": "Repeat Interval",
  "00280069": "Bits Grouped",
  "00280070": "Perimeter Table",
  "00280071": "Perimeter Value",
  "00280080": "Predictor Rows",
  "00280081": "Predictor Columns",
  "00280082": "Predictor Constants",
  "00280090": "Blocked Pixels",
  "00280091": "Block Rows",
  "00280092": "Block Columns",
  "00280093": "Row Overlap",
  "00280094": "Column Overlap",
  "00280100": "Bits Allocated",
  "00280101": "Bits Stored",
  "00280102": "High Bit",
  "00280103": "Pixel Representation",
  "00280104": "Smallest Valid Pixel Value",
  "00280105": "Largest Valid Pixel Value",
  "00280106": "Smallest Image Pixel Value",
  "00280107": "Largest Image Pixel Value",
  "00280108": "Smallest Pixel Value in Series",
  "00280109": "Largest Pixel Value in Series",
  "00280110": "Smallest Image Pixel Value in Plane",
  "00280111": "Largest Image Pixel Value in Plane",
  "00280120": "Pixel Padding Value",
  "00280121": "Pixel Padding Range Limit",
  "00280122": "Float Pixel Padding Value",
  "00280123": "Double Float Pixel Padding Value",
  "00280124": "Float Pixel Padding Range Limit",
  "00280125": "Double Float Pixel Padding Range Limit",
  "00280200": "Image Location",
  "00280300": "Quality Control Image",
  "00280301": "Burned In Annotation",
  "00280302": "Recognizable Visual Features",
  "00280303": "Longitudinal Temporal Information Modified",
  "00280304": "Referenced Color Palette Instance UID",
  "00280400": "Transform Label",
  "00280401": "Transform Version Number",
  "00280402": "Number of Transform Steps",
  "00280403": "Sequence of Compressed Data",
  "00280404": "Details of Coefficients",
  "002804x0": "Rows For Nth Order Coefficients",
  "002804x1": "Columns For Nth Order Coefficients",
  "002804x2": "Coefficient Coding",
  "002804x3": "Coefficient Coding Pointers",
  "00280700": "DCT Label",
  "00280701": "Data Block Description",
  "00280702": "Data Block",
  "00280710": "Normalization Factor Format",
  "00280720": "Zonal Map Number Format",
  "00280721": "Zonal Map Location",
  "00280722": "Zonal Map Format",
  "00280730": "Adaptive Map Format",
  "00280740": "Code Number Format",
  "002808x0": "Code Label",
  "002808x2": "Number of Tables",
  "002808x3": "Code Table Location",
  "002808x4": "Bits For Code Word",
  "002808x8": "Image Data Location",
  "00280A02": "Pixel Spacing Calibration Type",
  "00280A04": "Pixel Spacing Calibration Description",
  "00281040": "Pixel Intensity Relationship",
  "00281041": "Pixel Intensity Relationship Sign",
  "00281050": "Window Center",
  "00281051": "Window Width",
  "00281052": "Rescale Intercept",
  "00281053": "Rescale Slope",
  "00281054": "Rescale Type",
  "00281055": "Window Center & Width Explanation",
  "00281056": "VOI LUT Function",
  "00281080": "Gray Scale",
  "00281090": "Recommended Viewing Mode",
  "00281100": "Gray Lookup Table Descriptor",
  "00281101": "Red Palette Color Lookup Table Descriptor",
  "00281102": "Green Palette Color Lookup Table Descriptor",
  "00281103": "Blue Palette Color Lookup Table Descriptor",
  "00281104": "Alpha Palette Color Lookup Table Descriptor",
  "00281111": "Large Red Palette Color Lookup Table Descriptor",
  "00281112": "Large Green Palette Color Lookup Table Descriptor",
  "00281113": "Large Blue Palette Color Lookup Table Descriptor",
  "00281199": "Palette Color Lookup Table UID",
  "00281200": "Gray Lookup Table Data",
  "00281201": "Red Palette Color Lookup Table Data",
  "00281202": "Green Palette Color Lookup Table Data",
  "00281203": "Blue Palette Color Lookup Table Data",
  "00281204": "Alpha Palette Color Lookup Table Data",
  "00281211": "Large Red Palette Color Lookup Table Data",
  "00281212": "Large Green Palette Color Lookup Table Data",
  "00281213": "Large Blue Palette Color Lookup Table Data",
  "00281214": "Large Palette Color Lookup Table UID",
  "00281221": "Segmented Red Palette Color Lookup Table Data",
  "00281222": "Segmented Green Palette Color Lookup Table Data",
  "00281223": "Segmented Blue Palette Color Lookup Table Data",
  "00281224": "Segmented Alpha Palette Color Lookup Table Data",
  "00281230": "Stored Value Color Range Sequence",
  "00281231": "Minimum Stored Value Mapped",
  "00281232": "Maximum Stored Value Mapped",
  "00281300": "Breast Implant Present",
  "00281350": "Partial View",
  "00281351": "Partial View Description",
  "00281352": "Partial View Code Sequence",
  "0028135A": "Spatial Locations Preserved",
  "00281401": "Data Frame Assignment Sequence",
  "00281402": "Data Path Assignment",
  "00281403": "Bits Mapped to Color Lookup Table",
  "00281404": "Blending LUT 1 Sequence",
  "00281405": "Blending LUT 1 Transfer Function",
  "00281406": "Blending Weight Constant",
  "00281407": "Blending Lookup Table Descriptor",
  "00281408": "Blending Lookup Table Data",
  "0028140B": "Enhanced Palette Color Lookup Table Sequence",
  "0028140C": "Blending LUT 2 Sequence",
  "0028140D": "Blending LUT 2 Transfer Function",
  "0028140E": "Data Path ID",
  "0028140F": "RGB LUT Transfer Function",
  "00281410": "Alpha LUT Transfer Function",
  "00282000": "ICC Profile",
  "00282002": "Color Space",
  "00282110": "Lossy Image Compression",
  "00282112": "Lossy Image Compression Ratio",
  "00282114": "Lossy Image Compression Method",
  "00283000": "Modality LUT Sequence",
  "00283001": "Variable Modality LUT Sequence",
  "00283002": "LUT Descriptor",
  "00283003": "LUT Explanation",
  "00283004": "Modality LUT Type",
  "00283006": "LUT Data",
  "00283010": "VOI LUT Sequence",
  "00283110": "Softcopy VOI LUT Sequence",
  "00284000": "Image Presentation Comments",
  "00285000": "Bi-Plane Acquisition Sequence",
  "00286010": "Representative Frame Number",
  "00286020": "Frame Numbers of Interest (FOI)",
  "00286022": "Frame of Interest Description",
  "00286023": "Frame of Interest Type",
  "00286030": "Mask Pointer(s)",
  "00286040": "R Wave Pointer",
  "00286100": "Mask Subtraction Sequence",
  "00286101": "Mask Operation",
  "00286102": "Applicable Frame Range",
  "00286110": "Mask Frame Numbers",
  "00286112": "Contrast Frame Averaging",
  "00286114": "Mask Sub-pixel Shift",
  "00286120": "TID Offset",
  "00286190": "Mask Operation Explanation",
  "00287000": "Equipment Administrator Sequence",
  "00287001": "Number of Display Subsystems",
  "00287002": "Current Configuration ID",
  "00287003": "Display Subsystem ID",
  "00287004": "Display Subsystem Name",
  "00287005": "Display Subsystem Description",
  "00287006": "System Status",
  "00287007": "System Status Comment",
  "00287008": "Target Luminance Characteristics Sequence",
  "00287009": "Luminance Characteristics ID",
  "0028700A": "Display Subsystem Configuration Sequence",
  "0028700B": "Configuration ID",
  "0028700C": "Configuration Name",
  "0028700D": "Configuration Description",
  "0028700E": "Referenced Target Luminance Characteristics ID",
  "0028700F": "QA Results Sequence",
  "00287010": "Display Subsystem QA Results Sequence",
  "00287011": "Configuration QA Results Sequence",
  "00287012": "Measurement Equipment Sequence",
  "00287013": "Measurement Functions",
  "00287014": "Measurement Equipment Type",
  "00287015": "Visual Evaluation Result Sequence",
  "00287016": "Display Calibration Result Sequence",
  "00287017": "DDL Value",
  "00287018": "CIExy White Point",
  "00287019": "Display Function Type",
  "0028701A": "Gamma Value",
  "0028701B": "Number of Luminance Points",
  "0028701C": "Luminance Response Sequence",
  "0028701D": "Target Minimum Luminance",
  "0028701E": "Target Maximum Luminance",
  "0028701F": "Luminance Value",
  "00287020": "Luminance Response Description",
  "00287021": "White Point Flag",
  "00287022": "Display Device Type Code Sequence",
  "00287023": "Display Subsystem Sequence",
  "00287024": "Luminance Result Sequence",
  "00287025": "Ambient Light Value Source",
  "00287026": "Measured Characteristics",
  "00287027": "Luminance Uniformity Result Sequence",
  "00287028": "Visual Evaluation Test Sequence",
  "00287029": "Test Result",
  "0028702A": "Test Result Comment",
  "0028702B": "Test Image Validation",
  "0028702C": "Test Pattern Code Sequence",
  "0028702D": "Measurement Pattern Code Sequence",
  "0028702E": "Visual Evaluation Method Code Sequence",
  "00287FE0": "Pixel Data Provider URL",
  "00289001": "Data Point Rows",
  "00289002": "Data Point Columns",
  "00289003": "Signal Domain Columns",
  "00289099": "Largest Monochrome Pixel Value",
  "00289108": "Data Representation",
  "00289110": "Pixel Measures Sequence",
  "00289132": "Frame VOI LUT Sequence",
  "00289145": "Pixel Value Transformation Sequence",
  "00289235": "Signal Domain Rows",
  "00289411": "Display Filter Percentage",
  "00289415": "Frame Pixel Shift Sequence",
  "00289416": "Subtraction Item ID",
  "00289422": "Pixel Intensity Relationship LUT Sequence",
  "00289443": "Frame Pixel Data Properties Sequence",
  "00289444": "Geometrical Properties",
  "00289445": "Geometric Maximum Distortion",
  "00289446": "Image Processing Applied",
  "00289454": "Mask Selection Mode",
  "00289474": "LUT Function",
  "00289478": "Mask Visibility Percentage",
  "00289501": "Pixel Shift Sequence",
  "00289502": "Region Pixel Shift Sequence",
  "00289503": "Vertices of the Region",
  "00289505": "Multi-frame Presentation Sequence",
  "00289506": "Pixel Shift Frame Range",
  "00289507": "LUT Frame Range",
  "00289520": "Image to Equipment Mapping Matrix",
  "00289537": "Equipment Coordinate System Identification",
  "0032000A": "Study Status ID",
  "0032000C": "Study Priority ID",
  "00320012": "Study ID Issuer",
  "00320032": "Study Verified Date",
  "00320033": "Study Verified Time",
  "00320034": "Study Read Date",
  "00320035": "Study Read Time",
  "00321000": "Scheduled Study Start Date",
  "00321001": "Scheduled Study Start Time",
  "00321010": "Scheduled Study Stop Date",
  "00321011": "Scheduled Study Stop Time",
  "00321020": "Scheduled Study Location",
  "00321021": "Scheduled Study Location AE Title",
  "00321030": "Reason for Study",
  "00321031": "Requesting Physician Identification Sequence",
  "00321032": "Requesting Physician",
  "00321033": "Requesting Service",
  "00321034": "Requesting Service Code Sequence",
  "00321040": "Study Arrival Date",
  "00321041": "Study Arrival Time",
  "00321050": "Study Completion Date",
  "00321051": "Study Completion Time",
  "00321055": "Study Component Status ID",
  "00321060": "Requested Procedure Description",
  "00321064": "Requested Procedure Code Sequence",
  "00321065": "Requested Laterality Code Sequence",
  "00321066": "Reason for Visit",
  "00321067": "Reason for Visit Code Sequence",
  "00321070": "Requested Contrast Agent",
  "00324000": "Study Comments",
  "00340001": "Flow Identifier Sequence",
  "00340002": "Flow Identifier",
  "00340003": "Flow Transfer Syntax UID",
  "00340004": "Flow RTP Sampling Rate",
  "00340005": "Source Identifier",
  "00340007": "Frame Origin Timestamp",
  "00340008": "Includes Imaging Subject",
  "00340009": "Frame Usefulness Group Sequence",
  "0034000A": "Real-Time Bulk Data Flow Sequence",
  "0034000B": "Camera Position Group Sequence",
  "0034000C": "Includes Information",
  "0034000D": "Time of Frame Group Sequence",
  "00380004": "Referenced Patient Alias Sequence",
  "00380008": "Visit Status ID",
  "00380010": "Admission ID",
  "00380011": "Issuer of Admission ID",
  "00380014": "Issuer of Admission ID Sequence",
  "00380016": "Route of Admissions",
  "0038001A": "Scheduled Admission Date",
  "0038001B": "Scheduled Admission Time",
  "0038001C": "Scheduled Discharge Date",
  "0038001D": "Scheduled Discharge Time",
  "0038001E": "Scheduled Patient Institution Residence",
  "00380020": "Admitting Date",
  "00380021": "Admitting Time",
  "00380030": "Discharge Date",
  "00380032": "Discharge Time",
  "00380040": "Discharge Diagnosis Description",
  "00380044": "Discharge Diagnosis Code Sequence",
  "00380050": "Special Needs",
  "00380060": "Service Episode ID",
  "00380061": "Issuer of Service Episode ID",
  "00380062": "Service Episode Description",
  "00380064": "Issuer of Service Episode ID Sequence",
  "00380100": "Pertinent Documents Sequence",
  "00380101": "Pertinent Resources Sequence",
  "00380102": "Resource Description",
  "00380300": "Current Patient Location",
  "00380400": "Patient's Institution Residence",
  "00380500": "Patient State",
  "00380502": "Patient Clinical Trial Participation Sequence",
  "00384000": "Visit Comments",
  "003A0004": "Waveform Originality",
  "003A0005": "Number of Waveform Channels",
  "003A0010": "Number of Waveform Samples",
  "003A001A": "Sampling Frequency",
  "003A0020": "Multiplex Group Label",
  "003A0200": "Channel Definition Sequence",
  "003A0202": "Waveform Channel Number",
  "003A0203": "Channel Label",
  "003A0205": "Channel Status",
  "003A0208": "Channel Source Sequence",
  "003A0209": "Channel Source Modifiers Sequence",
  "003A020A": "Source Waveform Sequence",
  "003A020C": "Channel Derivation Description",
  "003A0210": "Channel Sensitivity",
  "003A0211": "Channel Sensitivity Units Sequence",
  "003A0212": "Channel Sensitivity Correction Factor",
  "003A0213": "Channel Baseline",
  "003A0214": "Channel Time Skew",
  "003A0215": "Channel Sample Skew",
  "003A0218": "Channel Offset",
  "003A021A": "Waveform Bits Stored",
  "003A0220": "Filter Low Frequency",
  "003A0221": "Filter High Frequency",
  "003A0222": "Notch Filter Frequency",
  "003A0223": "Notch Filter Bandwidth",
  "003A0230": "Waveform Data Display Scale",
  "003A0231": "Waveform Display Background CIELab Value",
  "003A0240": "Waveform Presentation Group Sequence",
  "003A0241": "Presentation Group Number",
  "003A0242": "Channel Display Sequence",
  "003A0244": "Channel Recommended Display CIELab Value",
  "003A0245": "Channel Position",
  "003A0246": "Display Shading Flag",
  "003A0247": "Fractional Channel Display Scale",
  "003A0248": "Absolute Channel Display Scale",
  "003A0300": "Multiplexed Audio Channels Description Code Sequence",
  "003A0301": "Channel Identification Code",
  "003A0302": "Channel Mode",
  "003A0310": "Multiplex Group UID",
  "003A0311": "Powerline Frequency",
  "003A0312": "Channel Impedance Sequence",
  "003A0313": "Impedance Value",
  "003A0314": "Impedance Measurement DateTime",
  "003A0315": "Impedance Measurement Frequency",
  "003A0316": "Impedance Measurement Current Type",
  "003A0317": "Waveform Amplifier Type",
  "003A0318": "Filter Low Frequency Characteristics Sequence",
  "003A0319": "Filter High Frequency Characteristics Sequence",
  "003A0320": "Summarized Filter Lookup Table Sequence",
  "003A0321": "Notch Filter Characteristics Sequence",
  "003A0322": "Waveform Filter Type",
  "003A0323": "Analog Filter Characteristics Sequence",
  "003A0324": "Analog Filter Roll Off ",
  "003A0325": "Analog Filter Type Code Sequence",
  "003A0326": "Digital Filter Characteristics Sequence",
  "003A0327": "Digital Filter Order",
  "003A0328": "Digital Filter Type Code Sequence",
  "003A0329": "Waveform Filter Description",
  "003A032A": "Filter Lookup Table Sequence",
  "003A032B": "Filter Lookup Table Description",
  "003A032C": "Frequency Encoding Code Sequence",
  "003A032D": "Magnitude Encoding Code Sequence",
  "003A032E": "Filter Lookup Table Data",
  "00400001": "Scheduled Station AE Title",
  "00400002": "Scheduled Procedure Step Start Date",
  "00400003": "Scheduled Procedure Step Start Time",
  "00400004": "Scheduled Procedure Step End Date",
  "00400005": "Scheduled Procedure Step End Time",
  "00400006": "Scheduled Performing Physician's Name",
  "00400007": "Scheduled Procedure Step Description",
  "00400008": "Scheduled Protocol Code Sequence",
  "00400009": "Scheduled Procedure Step ID",
  "0040000A": "Stage Code Sequence",
  "0040000B": "Scheduled Performing Physician Identification Sequence",
  "00400010": "Scheduled Station Name",
  "00400011": "Scheduled Procedure Step Location",
  "00400012": "Pre-Medication",
  "00400020": "Scheduled Procedure Step Status",
  "00400026": "Order Placer Identifier Sequence",
  "00400027": "Order Filler Identifier Sequence",
  "00400031": "Local Namespace Entity ID",
  "00400032": "Universal Entity ID",
  "00400033": "Universal Entity ID Type",
  "00400035": "Identifier Type Code",
  "00400036": "Assigning Facility Sequence",
  "00400039": "Assigning Jurisdiction Code Sequence",
  "0040003A": "Assigning Agency or Department Code Sequence",
  "00400100": "Scheduled Procedure Step Sequence",
  "00400220": "Referenced Non-Image Composite SOP Instance Sequence",
  "00400241": "Performed Station AE Title",
  "00400242": "Performed Station Name",
  "00400243": "Performed Location",
  "00400244": "Performed Procedure Step Start Date",
  "00400245": "Performed Procedure Step Start Time",
  "00400250": "Performed Procedure Step End Date",
  "00400251": "Performed Procedure Step End Time",
  "00400252": "Performed Procedure Step Status",
  "00400253": "Performed Procedure Step ID",
  "00400254": "Performed Procedure Step Description",
  "00400255": "Performed Procedure Type Description",
  "00400260": "Performed Protocol Code Sequence",
  "00400261": "Performed Protocol Type",
  "00400270": "Scheduled Step Attributes Sequence",
  "00400275": "Request Attributes Sequence",
  "00400280": "Comments on the Performed Procedure Step",
  "00400281": "Performed Procedure Step Discontinuation Reason Code Sequence",
  "00400293": "Quantity Sequence",
  "00400294": "Quantity",
  "00400295": "Measuring Units Sequence",
  "00400296": "Billing Item Sequence",
  "00400300": "Total Time of Fluoroscopy",
  "00400301": "Total Number of Exposures",
  "00400302": "Entrance Dose",
  "00400303": "Exposed Area",
  "00400306": "Distance Source to Entrance",
  "00400307": "Distance Source to Support",
  "0040030E": "Exposure Dose Sequence",
  "00400310": "Comments on Radiation Dose",
  "00400312": "X-Ray Output",
  "00400314": "Half Value Layer",
  "00400316": "Organ Dose",
  "00400318": "Organ Exposed",
  "00400320": "Billing Procedure Step Sequence",
  "00400321": "Film Consumption Sequence",
  "00400324": "Billing Supplies and Devices Sequence",
  "00400330": "Referenced Procedure Step Sequence",
  "00400340": "Performed Series Sequence",
  "00400400": "Comments on the Scheduled Procedure Step",
  "00400440": "Protocol Context Sequence",
  "00400441": "Content Item Modifier Sequence",
  "00400500": "Scheduled Specimen Sequence",
  "0040050A": "Specimen Accession Number",
  "00400512": "Container Identifier",
  "00400513": "Issuer of the Container Identifier Sequence",
  "00400515": "Alternate Container Identifier Sequence",
  "00400518": "Container Type Code Sequence",
  "0040051A": "Container Description",
  "00400520": "Container Component Sequence",
  "00400550": "Specimen Sequence",
  "00400551": "Specimen Identifier",
  "00400552": "Specimen Description Sequence (Trial)",
  "00400553": "Specimen Description (Trial)",
  "00400554": "Specimen UID",
  "00400555": "Acquisition Context Sequence",
  "00400556": "Acquisition Context Description",
  "0040059A": "Specimen Type Code Sequence",
  "00400560": "Specimen Description Sequence",
  "00400562": "Issuer of the Specimen Identifier Sequence",
  "00400600": "Specimen Short Description",
  "00400602": "Specimen Detailed Description",
  "00400610": "Specimen Preparation Sequence",
  "00400612": "Specimen Preparation Step Content Item Sequence",
  "00400620": "Specimen Localization Content Item Sequence",
  "004006FA": "Slide Identifier",
  "00400710": "Whole Slide Microscopy Image Frame Type Sequence",
  "0040071A": "Image Center Point Coordinates Sequence",
  "0040072A": "X Offset in Slide Coordinate System",
  "0040073A": "Y Offset in Slide Coordinate System",
  "0040074A": "Z Offset in Slide Coordinate System",
  "004008D8": "Pixel Spacing Sequence",
  "004008DA": "Coordinate System Axis Code Sequence",
  "004008EA": "Measurement Units Code Sequence",
  "004009F8": "Vital Stain Code Sequence (Trial)",
  "00401001": "Requested Procedure ID",
  "00401002": "Reason for the Requested Procedure",
  "00401003": "Requested Procedure Priority",
  "00401004": "Patient Transport Arrangements",
  "00401005": "Requested Procedure Location",
  "00401006": "Placer Order Number / Procedure",
  "00401007": "Filler Order Number / Procedure",
  "00401008": "Confidentiality Code",
  "00401009": "Reporting Priority",
  "0040100A": "Reason for Requested Procedure Code Sequence",
  "00401010": "Names of Intended Recipients of Results",
  "00401011": "Intended Recipients of Results Identification Sequence",
  "00401012": "Reason For Performed Procedure Code Sequence",
  "00401060": "Requested Procedure Description (Trial)",
  "00401101": "Person Identification Code Sequence",
  "00401102": "Person's Address",
  "00401103": "Person's Telephone Numbers",
  "00401104": "Person's Telecom Information",
  "00401400": "Requested Procedure Comments",
  "00402001": "Reason for the Imaging Service Request",
  "00402004": "Issue Date of Imaging Service Request",
  "00402005": "Issue Time of Imaging Service Request",
  "00402006": "Placer Order Number / Imaging Service Request (Retired)",
  "00402007": "Filler Order Number / Imaging Service Request (Retired)",
  "00402008": "Order Entered By",
  "00402009": "Order Enterer's Location",
  "00402010": "Order Callback Phone Number",
  "00402011": "Order Callback Telecom Information",
  "00402016": "Placer Order Number / Imaging Service Request",
  "00402017": "Filler Order Number / Imaging Service Request",
  "00402400": "Imaging Service Request Comments",
  "00403001": "Confidentiality Constraint on Patient Data Description",
  "00404001": "General Purpose Scheduled Procedure Step Status",
  "00404002": "General Purpose Performed Procedure Step Status",
  "00404003": "General Purpose Scheduled Procedure Step Priority",
  "00404004": "Scheduled Processing Applications Code Sequence",
  "00404005": "Scheduled Procedure Step Start DateTime",
  "00404006": "Multiple Copies Flag",
  "00404007": "Performed Processing Applications Code Sequence",
  "00404008": "Scheduled Procedure Step Expiration DateTime",
  "00404009": "Human Performer Code Sequence",
  "00404010": "Scheduled Procedure Step Modification DateTime",
  "00404011": "Expected Completion DateTime",
  "00404015": "Resulting General Purpose Performed Procedure Steps Sequence",
  "00404016": "Referenced General Purpose Scheduled Procedure Step Sequence",
  "00404018": "Scheduled Workitem Code Sequence",
  "00404019": "Performed Workitem Code Sequence",
  "00404020": "Input Availability Flag",
  "00404021": "Input Information Sequence",
  "00404022": "Relevant Information Sequence",
  "00404023": "Referenced General Purpose Scheduled Procedure Step Transaction UID",
  "00404025": "Scheduled Station Name Code Sequence",
  "00404026": "Scheduled Station Class Code Sequence",
  "00404027": "Scheduled Station Geographic Location Code Sequence",
  "00404028": "Performed Station Name Code Sequence",
  "00404029": "Performed Station Class Code Sequence",
  "00404030": "Performed Station Geographic Location Code Sequence",
  "00404031": "Requested Subsequent Workitem Code Sequence",
  "00404032": "Non-DICOM Output Code Sequence",
  "00404033": "Output Information Sequence",
  "00404034": "Scheduled Human Performers Sequence",
  "00404035": "Actual Human Performers Sequence",
  "00404036": "Human Performer's Organization",
  "00404037": "Human Performer's Name",
  "00404040": "Raw Data Handling",
  "00404041": "Input Readiness State",
  "00404050": "Performed Procedure Step Start DateTime",
  "00404051": "Performed Procedure Step End DateTime",
  "00404052": "Procedure Step Cancellation DateTime",
  "00404070": "Output Destination Sequence",
  "00404071": "DICOM Storage Sequence",
  "00404072": "STOW-RS Storage Sequence",
  "00404073": "Storage URL",
  "00404074": "XDS Storage Sequence",
  "00408302": "Entrance Dose in mGy",
  "00408303": "Entrance Dose Derivation",
  "00409092": "Parametric Map Frame Type Sequence",
  "00409094": "Referenced Image Real World Value Mapping Sequence",
  "00409096": "Real World Value Mapping Sequence",
  "00409098": "Pixel Value Mapping Code Sequence",
  "00409210": "LUT Label",
  "00409211": "Real World Value Last Value Mapped",
  "00409212": "Real World Value LUT Data",
  "00409213": "Double Float Real World Value Last Value Mapped",
  "00409214": "Double Float Real World Value First Value Mapped",
  "00409216": "Real World Value First Value Mapped",
  "00409220": "Quantity Definition Sequence",
  "00409224": "Real World Value Intercept",
  "00409225": "Real World Value Slope",
  "0040A007": "Findings Flag (Trial)",
  "0040A010": "Relationship Type",
  "0040A020": "Findings Sequence (Trial)",
  "0040A021": "Findings Group UID (Trial)",
  "0040A022": "Referenced Findings Group UID (Trial)",
  "0040A023": "Findings Group Recording Date (Trial)",
  "0040A024": "Findings Group Recording Time (Trial)",
  "0040A026": "Findings Source Category Code Sequence (Trial)",
  "0040A027": "Verifying Organization",
  "0040A028": "Documenting Organization Identifier Code Sequence (Trial)",
  "0040A030": "Verification DateTime",
  "0040A032": "Observation DateTime",
  "0040A033": "Observation Start DateTime",
  "0040A034": "Effective Start DateTime",
  "0040A035": "Effective Stop DateTime",
  "0040A040": "Value Type",
  "0040A043": "Concept Name Code Sequence",
  "0040A047": "Measurement Precision Description (Trial)",
  "0040A050": "Continuity Of Content",
  "0040A057": "Urgency or Priority Alerts (Trial)",
  "0040A060": "Sequencing Indicator (Trial)",
  "0040A066": "Document Identifier Code Sequence (Trial)",
  "0040A067": "Document Author (Trial)",
  "0040A068": "Document Author Identifier Code Sequence (Trial)",
  "0040A070": "Identifier Code Sequence (Trial)",
  "0040A073": "Verifying Observer Sequence",
  "0040A074": "Object Binary Identifier (Trial)",
  "0040A075": "Verifying Observer Name",
  "0040A076": "Documenting Observer Identifier Code Sequence (Trial)",
  "0040A078": "Author Observer Sequence",
  "0040A07A": "Participant Sequence",
  "0040A07C": "Custodial Organization Sequence",
  "0040A080": "Participation Type",
  "0040A082": "Participation DateTime",
  "0040A084": "Observer Type",
  "0040A085": "Procedure Identifier Code Sequence (Trial)",
  "0040A088": "Verifying Observer Identification Code Sequence",
  "0040A089": "Object Directory Binary Identifier (Trial)",
  "0040A090": "Equivalent CDA Document Sequence",
  "0040A0B0": "Referenced Waveform Channels",
  "0040A110": "Date of Document or Verbal Transaction (Trial)",
  "0040A112": "Time of Document Creation or Verbal Transaction (Trial)",
  "0040A120": "DateTime",
  "0040A121": "Date",
  "0040A122": "Time",
  "0040A123": "Person Name",
  "0040A124": "UID",
  "0040A125": "Report Status ID (Trial)",
  "0040A130": "Temporal Range Type",
  "0040A132": "Referenced Sample Positions",
  "0040A136": "Referenced Frame Numbers",
  "0040A138": "Referenced Time Offsets",
  "0040A13A": "Referenced DateTime",
  "0040A160": "Text Value",
  "0040A161": "Floating Point Value",
  "0040A162": "Rational Numerator Value",
  "0040A163": "Rational Denominator Value",
  "0040A167": "Observation Category Code Sequence (Trial)",
  "0040A168": "Concept Code Sequence",
  "0040A16A": "Bibliographic Citation (Trial)",
  "0040A170": "Purpose of Reference Code Sequence",
  "0040A171": "Observation UID",
  "0040A172": "Referenced Observation UID (Trial)",
  "0040A173": "Referenced Observation Class (Trial)",
  "0040A174": "Referenced Object Observation Class (Trial)",
  "0040A180": "Annotation Group Number",
  "0040A192": "Observation Date (Trial)",
  "0040A193": "Observation Time (Trial)",
  "0040A194": "Measurement Automation (Trial)",
  "0040A195": "Modifier Code Sequence",
  "0040A224": "Identification Description (Trial)",
  "0040A290": "Coordinates Set Geometric Type (Trial)",
  "0040A296": "Algorithm Code Sequence (Trial)",
  "0040A297": "Algorithm Description (Trial)",
  "0040A29A": "Pixel Coordinates Set (Trial)",
  "0040A300": "Measured Value Sequence",
  "0040A301": "Numeric Value Qualifier Code Sequence",
  "0040A307": "Current Observer (Trial)",
  "0040A30A": "Numeric Value",
  "0040A313": "Referenced Accession Sequence (Trial)",
  "0040A33A": "Report Status Comment (Trial)",
  "0040A340": "Procedure Context Sequence (Trial)",
  "0040A352": "Verbal Source (Trial)",
  "0040A353": "Address (Trial)",
  "0040A354": "Telephone Number (Trial)",
  "0040A358": "Verbal Source Identifier Code Sequence (Trial)",
  "0040A360": "Predecessor Documents Sequence",
  "0040A370": "Referenced Request Sequence",
  "0040A372": "Performed Procedure Code Sequence",
  "0040A375": "Current Requested Procedure Evidence Sequence",
  "0040A380": "Report Detail Sequence (Trial)",
  "0040A385": "Pertinent Other Evidence Sequence",
  "0040A390": "HL7 Structured Document Reference Sequence",
  "0040A402": "Observation Subject UID (Trial)",
  "0040A403": "Observation Subject Class (Trial)",
  "0040A404": "Observation Subject Type Code Sequence (Trial)",
  "0040A491": "Completion Flag",
  "0040A492": "Completion Flag Description",
  "0040A493": "Verification Flag",
  "0040A494": "Archive Requested",
  "0040A496": "Preliminary Flag",
  "0040A504": "Content Template Sequence",
  "0040A525": "Identical Documents Sequence",
  "0040A600": "Observation Subject Context Flag (Trial)",
  "0040A601": "Observer Context Flag (Trial)",
  "0040A603": "Procedure Context Flag (Trial)",
  "0040A730": "Content Sequence",
  "0040A731": "Relationship Sequence (Trial)",
  "0040A732": "Relationship Type Code Sequence (Trial)",
  "0040A744": "Language Code Sequence (Trial)",
  "0040A801": "Tabulated Values Sequence",
  "0040A802": "Number of Table Rows",
  "0040A803": "Number of Table Columns",
  "0040A804": "Table Row Number",
  "0040A805": "Table Column Number",
  "0040A806": "Table Row Definition Sequence",
  "0040A807": "Table Column Definition Sequence",
  "0040A808": "Cell Values Sequence",
  "0040A992": "Uniform Resource Locator (Trial)",
  "0040B020": "Waveform Annotation Sequence",
  "0040B030": "Structured Waveform Annotation Sequence",
  "0040B031": "Waveform Annotation Display Selection Sequence",
  "0040B032": "Referenced Montage Index",
  "0040B033": "Waveform Textual Annotation Sequence",
  "0040B034": "Annotation DateTime",
  "0040B035": "Displayed Waveform Segment Sequence",
  "0040B036": "Segment Definition DateTime",
  "0040B037": "Montage Activation Sequence",
  "0040B038": "Montage Activation Time Offset",
  "0040B039": "Waveform Montage Sequence",
  "0040B03A": "Referenced Montage Channel Number",
  "0040B03B": "Montage Name",
  "0040B03C": "Montage Channel Sequence",
  "0040B03D": "Montage Index",
  "0040B03E": "Montage Channel Number",
  "0040B03F": "Montage Channel Label",
  "0040B040": "Montage Channel Source Code Sequence",
  "0040B041": "Contributing Channel Sources Sequence",
  "0040B042": "Channel Weight",
  "0040DB00": "Template Identifier",
  "0040DB06": "Template Version",
  "0040DB07": "Template Local Version",
  "0040DB0B": "Template Extension Flag",
  "0040DB0C": "Template Extension Organization UID",
  "0040DB0D": "Template Extension Creator UID",
  "0040DB73": "Referenced Content Item Identifier",
  "0040E001": "HL7 Instance Identifier",
  "0040E004": "HL7 Document Effective Time",
  "0040E006": "HL7 Document Type Code Sequence",
  "0040E008": "Document Class Code Sequence",
  "0040E010": "Retrieve URI",
  "0040E011": "Retrieve Location UID",
  "0040E020": "Type of Instances",
  "0040E021": "DICOM Retrieval Sequence",
  "0040E022": "DICOM Media Retrieval Sequence",
  "0040E023": "WADO Retrieval Sequence",
  "0040E024": "XDS Retrieval Sequence",
  "0040E025": "WADO-RS Retrieval Sequence",
  "0040E030": "Repository Unique ID",
  "0040E031": "Home Community ID",
  "00420010": "Document Title",
  "00420011": "Encapsulated Document",
  "00420012": "MIME Type of Encapsulated Document",
  "00420013": "Source Instance Sequence",
  "00420014": "List of MIME Types",
  "00420015": "Encapsulated Document Length",
  "00440001": "Product Package Identifier",
  "00440002": "Substance Administration Approval",
  "00440003": "Approval Status Further Description",
  "00440004": "Approval Status DateTime",
  "00440007": "Product Type Code Sequence",
  "00440008": "Product Name",
  "00440009": "Product Description",
  "0044000A": "Product Lot Identifier",
  "0044000B": "Product Expiration DateTime",
  "00440010": "Substance Administration DateTime",
  "00440011": "Substance Administration Notes",
  "00440012": "Substance Administration Device ID",
  "00440013": "Product Parameter Sequence",
  "00440019": "Substance Administration Parameter Sequence",
  "00440100": "Approval Sequence",
  "00440101": "Assertion Code Sequence",
  "00440102": "Assertion UID",
  "00440103": "Asserter Identification Sequence",
  "00440104": "Assertion DateTime",
  "00440105": "Assertion Expiration DateTime",
  "00440106": "Assertion Comments",
  "00440107": "Related Assertion Sequence",
  "00440108": "Referenced Assertion UID",
  "00440109": "Approval Subject Sequence",
  "0044010A": "Organizational Role Code Sequence",
  "00440110": "RT Assertions Sequence",
  "00460012": "Lens Description",
  "00460014": "Right Lens Sequence",
  "00460015": "Left Lens Sequence",
  "00460016": "Unspecified Laterality Lens Sequence",
  "00460018": "Cylinder Sequence",
  "00460028": "Prism Sequence",
  "00460030": "Horizontal Prism Power",
  "00460032": "Horizontal Prism Base",
  "00460034": "Vertical Prism Power",
  "00460036": "Vertical Prism Base",
  "00460038": "Lens Segment Type",
  "00460040": "Optical Transmittance",
  "00460042": "Channel Width",
  "00460044": "Pupil Size",
  "00460046": "Corneal Size",
  "00460047": "Corneal Size Sequence",
  "00460050": "Autorefraction Right Eye Sequence",
  "00460052": "Autorefraction Left Eye Sequence",
  "00460060": "Distance Pupillary Distance",
  "00460062": "Near Pupillary Distance",
  "00460063": "Intermediate Pupillary Distance",
  "00460064": "Other Pupillary Distance",
  "00460070": "Keratometry Right Eye Sequence",
  "00460071": "Keratometry Left Eye Sequence",
  "00460074": "Steep Keratometric Axis Sequence",
  "00460075": "Radius of Curvature",
  "00460076": "Keratometric Power",
  "00460077": "Keratometric Axis",
  "00460080": "Flat Keratometric Axis Sequence",
  "00460092": "Background Color",
  "00460094": "Optotype",
  "00460095": "Optotype Presentation",
  "00460097": "Subjective Refraction Right Eye Sequence",
  "00460098": "Subjective Refraction Left Eye Sequence",
  "00460100": "Add Near Sequence",
  "00460101": "Add Intermediate Sequence",
  "00460102": "Add Other Sequence",
  "00460104": "Add Power",
  "00460106": "Viewing Distance",
  "00460110": "Cornea Measurements Sequence",
  "00460111": "Source of Cornea Measurement Data Code Sequence",
  "00460112": "Steep Corneal Axis Sequence",
  "00460113": "Flat Corneal Axis Sequence",
  "00460114": "Corneal Power",
  "00460115": "Corneal Axis",
  "00460116": "Cornea Measurement Method Code Sequence",
  "00460117": "Refractive Index of Cornea",
  "00460118": "Refractive Index of Aqueous Humor",
  "00460121": "Visual Acuity Type Code Sequence",
  "00460122": "Visual Acuity Right Eye Sequence",
  "00460123": "Visual Acuity Left Eye Sequence",
  "00460124": "Visual Acuity Both Eyes Open Sequence",
  "00460125": "Viewing Distance Type",
  "00460135": "Visual Acuity Modifiers",
  "00460137": "Decimal Visual Acuity",
  "00460139": "Optotype Detailed Definition",
  "00460145": "Referenced Refractive Measurements Sequence",
  "00460146": "Sphere Power",
  "00460147": "Cylinder Power",
  "00460201": "Corneal Topography Surface",
  "00460202": "Corneal Vertex Location",
  "00460203": "Pupil Centroid X-Coordinate",
  "00460204": "Pupil Centroid Y-Coordinate",
  "00460205": "Equivalent Pupil Radius",
  "00460207": "Corneal Topography Map Type Code Sequence",
  "00460208": "Vertices of the Outline of Pupil",
  "00460210": "Corneal Topography Mapping Normals Sequence",
  "00460211": "Maximum Corneal Curvature Sequence",
  "00460212": "Maximum Corneal Curvature",
  "00460213": "Maximum Corneal Curvature Location",
  "00460215": "Minimum Keratometric Sequence",
  "00460218": "Simulated Keratometric Cylinder Sequence",
  "00460220": "Average Corneal Power",
  "00460224": "Corneal I-S Value",
  "00460227": "Analyzed Area",
  "00460230": "Surface Regularity Index",
  "00460232": "Surface Asymmetry Index",
  "00460234": "Corneal Eccentricity Index",
  "00460236": "Keratoconus Prediction Index",
  "00460238": "Decimal Potential Visual Acuity",
  "00460242": "Corneal Topography Map Quality Evaluation",
  "00460244": "Source Image Corneal Processed Data Sequence",
  "00460247": "Corneal Point Location",
  "00460248": "Corneal Point Estimated",
  "00460249": "Axial Power",
  "00460250": "Tangential Power",
  "00460251": "Refractive Power",
  "00460252": "Relative Elevation",
  "00460253": "Corneal Wavefront",
  "00480001": "Imaged Volume Width",
  "00480002": "Imaged Volume Height",
  "00480003": "Imaged Volume Depth",
  "00480006": "Total Pixel Matrix Columns",
  "00480007": "Total Pixel Matrix Rows",
  "00480008": "Total Pixel Matrix Origin Sequence",
  "00480010": "Specimen Label in Image",
  "00480011": "Focus Method",
  "00480012": "Extended Depth of Field",
  "00480013": "Number of Focal Planes",
  "00480014": "Distance Between Focal Planes",
  "00480015": "Recommended Absent Pixel CIELab Value",
  "00480100": "Illuminator Type Code Sequence",
  "00480102": "Image Orientation (Slide)",
  "00480105": "Optical Path Sequence",
  "00480106": "Optical Path Identifier",
  "00480107": "Optical Path Description",
  "00480108": "Illumination Color Code Sequence",
  "00480110": "Specimen Reference Sequence",
  "00480111": "Condenser Lens Power",
  "00480112": "Objective Lens Power",
  "00480113": "Objective Lens Numerical Aperture",
  "00480114": "Confocal Mode",
  "00480115": "Tissue Location",
  "00480116": "Confocal Microscopy Image Frame Type Sequence",
  "00480117": "Image Acquisition Depth",
  "00480120": "Palette Color Lookup Table Sequence",
  "00480200": "Referenced Image Navigation Sequence",
  "00480201": "Top Left Hand Corner of Localizer Area",
  "00480202": "Bottom Right Hand Corner of Localizer Area",
  "00480207": "Optical Path Identification Sequence",
  "0048021A": "Plane Position (Slide) Sequence",
  "0048021E": "Column Position In Total Image Pixel Matrix",
  "0048021F": "Row Position In Total Image Pixel Matrix",
  "00480301": "Pixel Origin Interpretation",
  "00480302": "Number of Optical Paths",
  "00480303": "Total Pixel Matrix Focal Planes",
  "00480304": "Tiles Overlap",
  "00500004": "Calibration Image",
  "00500010": "Device Sequence",
  "00500012": "Container Component Type Code Sequence",
  "00500013": "Container Component Thickness",
  "00500014": "Device Length",
  "00500015": "Container Component Width",
  "00500016": "Device Diameter",
  "00500017": "Device Diameter Units",
  "00500018": "Device Volume",
  "00500019": "Inter-Marker Distance",
  "0050001A": "Container Component Material",
  "0050001B": "Container Component ID",
  "0050001C": "Container Component Length",
  "0050001D": "Container Component Diameter",
  "0050001E": "Container Component Description",
  "00500020": "Device Description",
  "00500021": "Long Device Description",
  "00520001": "Contrast/Bolus Ingredient Percent by Volume",
  "00520002": "OCT Focal Distance",
  "00520003": "Beam Spot Size",
  "00520004": "Effective Refractive Index",
  "00520006": "OCT Acquisition Domain",
  "00520007": "OCT Optical Center Wavelength",
  "00520008": "Axial Resolution",
  "00520009": "Ranging Depth",
  "00520011": "A-line Rate",
  "00520012": "A-lines Per Frame",
  "00520013": "Catheter Rotational Rate",
  "00520014": "A-line Pixel Spacing",
  "00520016": "Mode of Percutaneous Access Sequence",
  "00520025": "Intravascular OCT Frame Type Sequence",
  "00520026": "OCT Z Offset Applied",
  "00520027": "Intravascular Frame Content Sequence",
  "00520028": "Intravascular Longitudinal Distance",
  "00520029": "Intravascular OCT Frame Content Sequence",
  "00520030": "OCT Z Offset Correction",
  "00520031": "Catheter Direction of Rotation",
  "00520033": "Seam Line Location",
  "00520034": "First A-line Location",
  "00520036": "Seam Line Index",
  "00520038": "Number of Padded A-lines",
  "00520039": "Interpolation Type",
  "0052003A": "Refractive Index Applied",
  "00540010": "Energy Window Vector",
  "00540011": "Number of Energy Windows",
  "00540012": "Energy Window Information Sequence",
  "00540013": "Energy Window Range Sequence",
  "00540014": "Energy Window Lower Limit",
  "00540015": "Energy Window Upper Limit",
  "00540016": "Radiopharmaceutical Information Sequence",
  "00540017": "Residual Syringe Counts",
  "00540018": "Energy Window Name",
  "00540020": "Detector Vector",
  "00540021": "Number of Detectors",
  "00540022": "Detector Information Sequence",
  "00540030": "Phase Vector",
  "00540031": "Number of Phases",
  "00540032": "Phase Information Sequence",
  "00540033": "Number of Frames in Phase",
  "00540036": "Phase Delay",
  "00540038": "Pause Between Frames",
  "00540039": "Phase Description",
  "00540050": "Rotation Vector",
  "00540051": "Number of Rotations",
  "00540052": "Rotation Information Sequence",
  "00540053": "Number of Frames in Rotation",
  "00540060": "R-R Interval Vector",
  "00540061": "Number of R-R Intervals",
  "00540062": "Gated Information Sequence",
  "00540063": "Data Information Sequence",
  "00540070": "Time Slot Vector",
  "00540071": "Number of Time Slots",
  "00540072": "Time Slot Information Sequence",
  "00540073": "Time Slot Time",
  "00540080": "Slice Vector",
  "00540081": "Number of Slices",
  "00540090": "Angular View Vector",
  "00540100": "Time Slice Vector",
  "00540101": "Number of Time Slices",
  "00540200": "Start Angle",
  "00540202": "Type of Detector Motion",
  "00540210": "Trigger Vector",
  "00540211": "Number of Triggers in Phase",
  "00540220": "View Code Sequence",
  "00540222": "View Modifier Code Sequence",
  "00540300": "Radionuclide Code Sequence",
  "00540302": "Administration Route Code Sequence",
  "00540304": "Radiopharmaceutical Code Sequence",
  "00540306": "Calibration Data Sequence",
  "00540308": "Energy Window Number",
  "00540400": "Image ID",
  "00540410": "Patient Orientation Code Sequence",
  "00540412": "Patient Orientation Modifier Code Sequence",
  "00540414": "Patient Gantry Relationship Code Sequence",
  "00540500": "Slice Progression Direction",
  "00540501": "Scan Progression Direction",
  "00541000": "Series Type",
  "00541001": "Units",
  "00541002": "Counts Source",
  "00541004": "Reprojection Method",
  "00541006": "SUV Type",
  "00541100": "Randoms Correction Method",
  "00541101": "Attenuation Correction Method",
  "00541102": "Decay Correction",
  "00541103": "Reconstruction Method",
  "00541104": "Detector Lines of Response Used",
  "00541105": "Scatter Correction Method",
  "00541200": "Axial Acceptance",
  "00541201": "Axial Mash",
  "00541202": "Transverse Mash",
  "00541203": "Detector Element Size",
  "00541210": "Coincidence Window Width",
  "00541220": "Secondary Counts Type",
  "00541300": "Frame Reference Time",
  "00541310": "Primary (Prompts) Counts Accumulated",
  "00541311": "Secondary Counts Accumulated",
  "00541320": "Slice Sensitivity Factor",
  "00541321": "Decay Factor",
  "00541322": "Dose Calibration Factor",
  "00541323": "Scatter Fraction Factor",
  "00541324": "Dead Time Factor",
  "00541330": "Image Index",
  "00541400": "Counts Included",
  "00541401": "Dead Time Correction Flag",
  "00603000": "Histogram Sequence",
  "00603002": "Histogram Number of Bins",
  "00603004": "Histogram First Bin Value",
  "00603006": "Histogram Last Bin Value",
  "00603008": "Histogram Bin Width",
  "00603010": "Histogram Explanation",
  "00603020": "Histogram Data",
  "00620001": "Segmentation Type",
  "00620002": "Segment Sequence",
  "00620003": "Segmented Property Category Code Sequence",
  "00620004": "Segment Number",
  "00620005": "Segment Label",
  "00620006": "Segment Description",
  "00620007": "Segmentation Algorithm Identification Sequence",
  "00620008": "Segment Algorithm Type",
  "00620009": "Segment Algorithm Name",
  "0062000A": "Segment Identification Sequence",
  "0062000B": "Referenced Segment Number",
  "0062000C": "Recommended Display Grayscale Value",
  "0062000D": "Recommended Display CIELab Value",
  "0062000E": "Maximum Fractional Value",
  "0062000F": "Segmented Property Type Code Sequence",
  "00620010": "Segmentation Fractional Type",
  "00620011": "Segmented Property Type Modifier Code Sequence",
  "00620012": "Used Segments Sequence",
  "00620013": "Segments Overlap",
  "00620020": "Tracking ID",
  "00620021": "Tracking UID",
  "00640002": "Deformable Registration Sequence",
  "00640003": "Source Frame of Reference UID",
  "00640005": "Deformable Registration Grid Sequence",
  "00640007": "Grid Dimensions",
  "00640008": "Grid Resolution",
  "00640009": "Vector Grid Data",
  "0064000F": "Pre Deformation Matrix Registration Sequence",
  "00640010": "Post Deformation Matrix Registration Sequence",
  "00660001": "Number of Surfaces",
  "00660002": "Surface Sequence",
  "00660003": "Surface Number",
  "00660004": "Surface Comments",
  "00660005": "Surface Offset",
  "00660009": "Surface Processing",
  "0066000A": "Surface Processing Ratio",
  "0066000B": "Surface Processing Description",
  "0066000C": "Recommended Presentation Opacity",
  "0066000D": "Recommended Presentation Type",
  "0066000E": "Finite Volume",
  "00660010": "Manifold",
  "00660011": "Surface Points Sequence",
  "00660012": "Surface Points Normals Sequence",
  "00660013": "Surface Mesh Primitives Sequence",
  "00660015": "Number of Surface Points",
  "00660016": "Point Coordinates Data",
  "00660017": "Point Position Accuracy",
  "00660018": "Mean Point Distance",
  "00660019": "Maximum Point Distance",
  "0066001A": "Points Bounding Box Coordinates",
  "0066001B": "Axis of Rotation",
  "0066001C": "Center of Rotation",
  "0066001E": "Number of Vectors",
  "0066001F": "Vector Dimensionality",
  "00660020": "Vector Accuracy",
  "00660021": "Vector Coordinate Data",
  "00660022": "Double Point Coordinates Data",
  "00660023": "Triangle Point Index List",
  "00660024": "Edge Point Index List",
  "00660025": "Vertex Point Index List",
  "00660026": "Triangle Strip Sequence",
  "00660027": "Triangle Fan Sequence",
  "00660028": "Line Sequence",
  "00660029": "Primitive Point Index List",
  "0066002A": "Surface Count",
  "0066002B": "Referenced Surface Sequence",
  "0066002C": "Referenced Surface Number",
  "0066002D": "Segment Surface Generation Algorithm Identification Sequence",
  "0066002E": "Segment Surface Source Instance Sequence",
  "0066002F": "Algorithm Family Code Sequence",
  "00660030": "Algorithm Name Code Sequence",
  "00660031": "Algorithm Version",
  "00660032": "Algorithm Parameters",
  "00660034": "Facet Sequence",
  "00660035": "Surface Processing Algorithm Identification Sequence",
  "00660036": "Algorithm Name",
  "00660037": "Recommended Point Radius",
  "00660038": "Recommended Line Thickness",
  "00660040": "Long Primitive Point Index List",
  "00660041": "Long Triangle Point Index List",
  "00660042": "Long Edge Point Index List",
  "00660043": "Long Vertex Point Index List",
  "00660101": "Track Set Sequence",
  "00660102": "Track Sequence",
  "00660103": "Recommended Display CIELab Value List",
  "00660104": "Tracking Algorithm Identification Sequence",
  "00660105": "Track Set Number",
  "00660106": "Track Set Label",
  "00660107": "Track Set Description",
  "00660108": "Track Set Anatomical Type Code Sequence",
  "00660121": "Measurements Sequence",
  "00660124": "Track Set Statistics Sequence",
  "00660125": "Floating Point Values",
  "00660129": "Track Point Index List",
  "00660130": "Track Statistics Sequence",
  "00660132": "Measurement Values Sequence",
  "00660133": "Diffusion Acquisition Code Sequence",
  "00660134": "Diffusion Model Code Sequence",
  "00686210": "Implant Size",
  "00686221": "Implant Template Version",
  "00686222": "Replaced Implant Template Sequence",
  "00686223": "Implant Type",
  "00686224": "Derivation Implant Template Sequence",
  "00686225": "Original Implant Template Sequence",
  "00686226": "Effective DateTime",
  "00686230": "Implant Target Anatomy Sequence",
  "00686260": "Information From Manufacturer Sequence",
  "00686265": "Notification From Manufacturer Sequence",
  "00686270": "Information Issue DateTime",
  "00686280": "Information Summary",
  "006862A0": "Implant Regulatory Disapproval Code Sequence",
  "006862A5": "Overall Template Spatial Tolerance",
  "006862C0": "HPGL Document Sequence",
  "006862D0": "HPGL Document ID",
  "006862D5": "HPGL Document Label",
  "006862E0": "View Orientation Code Sequence",
  "006862F0": "View Orientation Modifier Code Sequence",
  "006862F2": "HPGL Document Scaling",
  "00686300": "HPGL Document",
  "00686310": "HPGL Contour Pen Number",
  "00686320": "HPGL Pen Sequence",
  "00686330": "HPGL Pen Number",
  "00686340": "HPGL Pen Label",
  "00686345": "HPGL Pen Description",
  "00686346": "Recommended Rotation Point",
  "00686347": "Bounding Rectangle",
  "00686350": "Implant Template 3D Model Surface Number",
  "00686360": "Surface Model Description Sequence",
  "00686380": "Surface Model Label",
  "00686390": "Surface Model Scaling Factor",
  "006863A0": "Materials Code Sequence",
  "006863A4": "Coating Materials Code Sequence",
  "006863A8": "Implant Type Code Sequence",
  "006863AC": "Fixation Method Code Sequence",
  "006863B0": "Mating Feature Sets Sequence",
  "006863C0": "Mating Feature Set ID",
  "006863D0": "Mating Feature Set Label",
  "006863E0": "Mating Feature Sequence",
  "006863F0": "Mating Feature ID",
  "00686400": "Mating Feature Degree of Freedom Sequence",
  "00686410": "Degree of Freedom ID",
  "00686420": "Degree of Freedom Type",
  "00686430": "2D Mating Feature Coordinates Sequence",
  "00686440": "Referenced HPGL Document ID",
  "00686450": "2D Mating Point",
  "00686460": "2D Mating Axes",
  "00686470": "2D Degree of Freedom Sequence",
  "00686490": "3D Degree of Freedom Axis",
  "006864A0": "Range of Freedom",
  "006864C0": "3D Mating Point",
  "006864D0": "3D Mating Axes",
  "006864F0": "2D Degree of Freedom Axis",
  "00686500": "Planning Landmark Point Sequence",
  "00686510": "Planning Landmark Line Sequence",
  "00686520": "Planning Landmark Plane Sequence",
  "00686530": "Planning Landmark ID",
  "00686540": "Planning Landmark Description",
  "00686545": "Planning Landmark Identification Code Sequence",
  "00686550": "2D Point Coordinates Sequence",
  "00686560": "2D Point Coordinates",
  "00686590": "3D Point Coordinates",
  "006865A0": "2D Line Coordinates Sequence",
  "006865B0": "2D Line Coordinates",
  "006865D0": "3D Line Coordinates",
  "006865E0": "2D Plane Coordinates Sequence",
  "006865F0": "2D Plane Intersection",
  "00686610": "3D Plane Origin",
  "00686620": "3D Plane Normal",
  "00687001": "Model Modification",
  "00687002": "Model Mirroring",
  "00687003": "Model Usage Code Sequence",
  "00687004": "Model Group UID",
  "00687005": "Relative URI Reference Within Encapsulated Document",
  "006A0001": "Annotation Coordinate Type",
  "006A0002": "Annotation Group Sequence",
  "006A0003": "Annotation Group UID",
  "006A0005": "Annotation Group Label",
  "006A0006": "Annotation Group Description",
  "006A0007": "Annotation Group Generation Type",
  "006A0008": "Annotation Group Algorithm Identification Sequence",
  "006A0009": "Annotation Property Category Code Sequence",
  "006A000A": "Annotation Property Type Code Sequence",
  "006A000B": "Annotation Property Type Modifier Code Sequence",
  "006A000C": "Number of Annotations",
  "006A000D": "Annotation Applies to All Optical Paths",
  "006A000E": "Referenced Optical Path Identifier",
  "006A000F": "Annotation Applies to All Z Planes",
  "006A0010": "Common Z Coordinate Value",
  "006A0011": "Annotation Index List",
  "00700001": "Graphic Annotation Sequence",
  "00700002": "Graphic Layer",
  "00700003": "Bounding Box Annotation Units",
  "00700004": "Anchor Point Annotation Units",
  "00700005": "Graphic Annotation Units",
  "00700006": "Unformatted Text Value",
  "00700008": "Text Object Sequence",
  "00700009": "Graphic Object Sequence",
  "00700010": "Bounding Box Top Left Hand Corner",
  "00700011": "Bounding Box Bottom Right Hand Corner",
  "00700012": "Bounding Box Text Horizontal Justification",
  "00700014": "Anchor Point",
  "00700015": "Anchor Point Visibility",
  "00700020": "Graphic Dimensions",
  "00700021": "Number of Graphic Points",
  "00700022": "Graphic Data",
  "00700023": "Graphic Type",
  "00700024": "Graphic Filled",
  "00700040": "Image Rotation (Retired)",
  "00700041": "Image Horizontal Flip",
  "00700042": "Image Rotation",
  "00700050": "Displayed Area Top Left Hand Corner (Trial)",
  "00700051": "Displayed Area Bottom Right Hand Corner (Trial)",
  "00700052": "Displayed Area Top Left Hand Corner",
  "00700053": "Displayed Area Bottom Right Hand Corner",
  "0070005A": "Displayed Area Selection Sequence",
  "00700060": "Graphic Layer Sequence",
  "00700062": "Graphic Layer Order",
  "00700066": "Graphic Layer Recommended Display Grayscale Value",
  "00700067": "Graphic Layer Recommended Display RGB Value",
  "00700068": "Graphic Layer Description",
  "00700080": "Content Label",
  "00700081": "Content Description",
  "00700082": "Presentation Creation Date",
  "00700083": "Presentation Creation Time",
  "00700084": "Content Creator's Name",
  "00700086": "Content Creator's Identification Code Sequence",
  "00700087": "Alternate Content Description Sequence",
  "00700100": "Presentation Size Mode",
  "00700101": "Presentation Pixel Spacing",
  "00700102": "Presentation Pixel Aspect Ratio",
  "00700103": "Presentation Pixel Magnification Ratio",
  "00700207": "Graphic Group Label",
  "00700208": "Graphic Group Description",
  "00700209": "Compound Graphic Sequence",
  "00700226": "Compound Graphic Instance ID",
  "00700227": "Font Name",
  "00700228": "Font Name Type",
  "00700229": "CSS Font Name",
  "00700230": "Rotation Angle",
  "00700231": "Text Style Sequence",
  "00700232": "Line Style Sequence",
  "00700233": "Fill Style Sequence",
  "00700234": "Graphic Group Sequence",
  "00700241": "Text Color CIELab Value",
  "00700242": "Horizontal Alignment",
  "00700243": "Vertical Alignment",
  "00700244": "Shadow Style",
  "00700245": "Shadow Offset X",
  "00700246": "Shadow Offset Y",
  "00700247": "Shadow Color CIELab Value",
  "00700248": "Underlined",
  "00700249": "Bold",
  "00700250": "Italic",
  "00700251": "Pattern On Color CIELab Value",
  "00700252": "Pattern Off Color CIELab Value",
  "00700253": "Line Thickness",
  "00700254": "Line Dashing Style",
  "00700255": "Line Pattern",
  "00700256": "Fill Pattern",
  "00700257": "Fill Mode",
  "00700258": "Shadow Opacity",
  "00700261": "Gap Length",
  "00700262": "Diameter of Visibility",
  "00700273": "Rotation Point",
  "00700274": "Tick Alignment",
  "00700278": "Show Tick Label",
  "00700279": "Tick Label Alignment",
  "00700282": "Compound Graphic Units",
  "00700284": "Pattern On Opacity",
  "00700285": "Pattern Off Opacity",
  "00700287": "Major Ticks Sequence",
  "00700288": "Tick Position",
  "00700289": "Tick Label",
  "00700294": "Compound Graphic Type",
  "00700295": "Graphic Group ID",
  "00700306": "Shape Type",
  "00700308": "Registration Sequence",
  "00700309": "Matrix Registration Sequence",
  "0070030A": "Matrix Sequence",
  "0070030B": "Frame of Reference to Displayed Coordinate System Transformation Matrix",
  "0070030C": "Frame of Reference Transformation Matrix Type",
  "0070030D": "Registration Type Code Sequence",
  "0070030F": "Fiducial Description",
  "00700310": "Fiducial Identifier",
  "00700311": "Fiducial Identifier Code Sequence",
  "00700312": "Contour Uncertainty Radius",
  "00700314": "Used Fiducials Sequence",
  "00700315": "Used RT Structure Set ROI Sequence",
  "00700318": "Graphic Coordinates Data Sequence",
  "0070031A": "Fiducial UID",
  "0070031B": "Referenced Fiducial UID",
  "0070031C": "Fiducial Set Sequence",
  "0070031E": "Fiducial Sequence",
  "0070031F": "Fiducials Property Category Code Sequence",
  "00700401": "Graphic Layer Recommended Display CIELab Value",
  "00700402": "Blending Sequence",
  "00700403": "Relative Opacity",
  "00700404": "Referenced Spatial Registration Sequence",
  "00700405": "Blending Position",
  "00701101": "Presentation Display Collection UID",
  "00701102": "Presentation Sequence Collection UID",
  "00701103": "Presentation Sequence Position Index",
  "00701104": "Rendered Image Reference Sequence",
  "00701201": "Volumetric Presentation State Input Sequence",
  "00701202": "Presentation Input Type",
  "00701203": "Input Sequence Position Index",
  "00701204": "Crop",
  "00701205": "Cropping Specification Index",
  "00701206": "Compositing Method",
  "00701207": "Volumetric Presentation Input Number",
  "00701208": "Image Volume Geometry",
  "00701209": "Volumetric Presentation Input Set UID",
  "0070120A": "Volumetric Presentation Input Set Sequence",
  "0070120B": "Global Crop",
  "0070120C": "Global Cropping Specification Index",
  "0070120D": "Rendering Method",
  "00701301": "Volume Cropping Sequence",
  "00701302": "Volume Cropping Method",
  "00701303": "Bounding Box Crop",
  "00701304": "Oblique Cropping Plane Sequence",
  "00701305": "Plane",
  "00701306": "Plane Normal",
  "00701309": "Cropping Specification Number",
  "00701501": "Multi-Planar Reconstruction Style",
  "00701502": "MPR Thickness Type",
  "00701503": "MPR Slab Thickness",
  "00701505": "MPR Top Left Hand Corner",
  "00701507": "MPR View Width Direction",
  "00701508": "MPR View Width",
  "0070150C": "Number of Volumetric Curve Points",
  "0070150D": "Volumetric Curve Points",
  "00701511": "MPR View Height Direction",
  "00701512": "MPR View Height",
  "00701602": "Render Projection",
  "00701603": "Viewpoint Position",
  "00701604": "Viewpoint LookAt Point",
  "00701605": "Viewpoint Up Direction",
  "00701606": "Render Field of View",
  "00701607": "Sampling Step Size",
  "00701701": "Shading Style",
  "00701702": "Ambient Reflection Intensity",
  "00701703": "Light Direction",
  "00701704": "Diffuse Reflection Intensity",
  "00701705": "Specular Reflection Intensity",
  "00701706": "Shininess",
  "00701801": "Presentation State Classification Component Sequence",
  "00701802": "Component Type",
  "00701803": "Component Input Sequence",
  "00701804": "Volumetric Presentation Input Index",
  "00701805": "Presentation State Compositor Component Sequence",
  "00701806": "Weighting Transfer Function Sequence",
  "00701807": "Weighting Lookup Table Descriptor",
  "00701808": "Weighting Lookup Table Data",
  "00701901": "Volumetric Annotation Sequence",
  "00701903": "Referenced Structured Context Sequence",
  "00701904": "Referenced Content Item",
  "00701905": "Volumetric Presentation Input Annotation Sequence",
  "00701907": "Annotation Clipping",
  "00701A01": "Presentation Animation Style",
  "00701A03": "Recommended Animation Rate",
  "00701A04": "Animation Curve Sequence",
  "00701A05": "Animation Step Size",
  "00701A06": "Swivel Range",
  "00701A07": "Volumetric Curve Up Directions",
  "00701A08": "Volume Stream Sequence",
  "00701A09": "RGBA Transfer Function Description",
  "00701B01": "Advanced Blending Sequence",
  "00701B02": "Blending Input Number",
  "00701B03": "Blending Display Input Sequence",
  "00701B04": "Blending Display Sequence",
  "00701B06": "Blending Mode",
  "00701B07": "Time Series Blending",
  "00701B08": "Geometry for Display",
  "00701B11": "Threshold Sequence",
  "00701B12": "Threshold Value Sequence",
  "00701B13": "Threshold Type",
  "00701B14": "Threshold Value",
  "00720002": "Hanging Protocol Name",
  "00720004": "Hanging Protocol Description",
  "00720006": "Hanging Protocol Level",
  "00720008": "Hanging Protocol Creator",
  "0072000A": "Hanging Protocol Creation DateTime",
  "0072000C": "Hanging Protocol Definition Sequence",
  "0072000E": "Hanging Protocol User Identification Code Sequence",
  "00720010": "Hanging Protocol User Group Name",
  "00720012": "Source Hanging Protocol Sequence",
  "00720014": "Number of Priors Referenced",
  "00720020": "Image Sets Sequence",
  "00720022": "Image Set Selector Sequence",
  "00720024": "Image Set Selector Usage Flag",
  "00720026": "Selector Attribute",
  "00720028": "Selector Value Number",
  "00720030": "Time Based Image Sets Sequence",
  "00720032": "Image Set Number",
  "00720034": "Image Set Selector Category",
  "00720038": "Relative Time",
  "0072003A": "Relative Time Units",
  "0072003C": "Abstract Prior Value",
  "0072003E": "Abstract Prior Code Sequence",
  "00720040": "Image Set Label",
  "00720050": "Selector Attribute VR",
  "00720052": "Selector Sequence Pointer",
  "00720054": "Selector Sequence Pointer Private Creator",
  "00720056": "Selector Attribute Private Creator",
  "0072005E": "Selector AE Value",
  "0072005F": "Selector AS Value",
  "00720060": "Selector AT Value",
  "00720061": "Selector DA Value",
  "00720062": "Selector CS Value",
  "00720063": "Selector DT Value",
  "00720064": "Selector IS Value",
  "00720065": "Selector OB Value",
  "00720066": "Selector LO Value",
  "00720067": "Selector OF Value",
  "00720068": "Selector LT Value",
  "00720069": "Selector OW Value",
  "0072006A": "Selector PN Value",
  "0072006B": "Selector TM Value",
  "0072006C": "Selector SH Value",
  "0072006D": "Selector UN Value",
  "0072006E": "Selector ST Value",
  "0072006F": "Selector UC Value",
  "00720070": "Selector UT Value",
  "00720071": "Selector UR Value",
  "00720072": "Selector DS Value",
  "00720073": "Selector OD Value",
  "00720074": "Selector FD Value",
  "00720075": "Selector OL Value",
  "00720076": "Selector FL Value",
  "00720078": "Selector UL Value",
  "0072007A": "Selector US Value",
  "0072007C": "Selector SL Value",
  "0072007E": "Selector SS Value",
  "0072007F": "Selector UI Value",
  "00720080": "Selector Code Sequence Value",
  "00720081": "Selector OV Value",
  "00720082": "Selector SV Value",
  "00720083": "Selector UV Value",
  "00720100": "Number of Screens",
  "00720102": "Nominal Screen Definition Sequence",
  "00720104": "Number of Vertical Pixels",
  "00720106": "Number of Horizontal Pixels",
  "00720108": "Display Environment Spatial Position",
  "0072010A": "Screen Minimum Grayscale Bit Depth",
  "0072010C": "Screen Minimum Color Bit Depth",
  "0072010E": "Application Maximum Repaint Time",
  "00720200": "Display Sets Sequence",
  "00720202": "Display Set Number",
  "00720203": "Display Set Label",
  "00720204": "Display Set Presentation Group",
  "00720206": "Display Set Presentation Group Description",
  "00720208": "Partial Data Display Handling",
  "00720210": "Synchronized Scrolling Sequence",
  "00720212": "Display Set Scrolling Group",
  "00720214": "Navigation Indicator Sequence",
  "00720216": "Navigation Display Set",
  "00720218": "Reference Display Sets",
  "00720300": "Image Boxes Sequence",
  "00720302": "Image Box Number",
  "00720304": "Image Box Layout Type",
  "00720306": "Image Box Tile Horizontal Dimension",
  "00720308": "Image Box Tile Vertical Dimension",
  "00720310": "Image Box Scroll Direction",
  "00720312": "Image Box Small Scroll Type",
  "00720314": "Image Box Small Scroll Amount",
  "00720316": "Image Box Large Scroll Type",
  "00720318": "Image Box Large Scroll Amount",
  "00720320": "Image Box Overlap Priority",
  "00720330": "Cine Relative to Real-Time",
  "00720400": "Filter Operations Sequence",
  "00720402": "Filter-by Category",
  "00720404": "Filter-by Attribute Presence",
  "00720406": "Filter-by Operator",
  "00720420": "Structured Display Background CIELab Value",
  "00720421": "Empty Image Box CIELab Value",
  "00720422": "Structured Display Image Box Sequence",
  "00720424": "Structured Display Text Box Sequence",
  "00720427": "Referenced First Frame Sequence",
  "00720430": "Image Box Synchronization Sequence",
  "00720432": "Synchronized Image Box List",
  "00720434": "Type of Synchronization",
  "00720500": "Blending Operation Type",
  "00720510": "Reformatting Operation Type",
  "00720512": "Reformatting Thickness",
  "00720514": "Reformatting Interval",
  "00720516": "Reformatting Operation Initial View Direction",
  "00720520": "3D Rendering Type",
  "00720600": "Sorting Operations Sequence",
  "00720602": "Sort-by Category",
  "00720604": "Sorting Direction",
  "00720700": "Display Set Patient Orientation",
  "00720702": "VOI Type",
  "00720704": "Pseudo-Color Type",
  "00720705": "Pseudo-Color Palette Instance Reference Sequence",
  "00720706": "Show Grayscale Inverted",
  "00720710": "Show Image True Size Flag",
  "00720712": "Show Graphic Annotation Flag",
  "00720714": "Show Patient Demographics Flag",
  "00720716": "Show Acquisition Techniques Flag",
  "00720717": "Display Set Horizontal Justification",
  "00720718": "Display Set Vertical Justification",
  "00740120": "Continuation Start Meterset",
  "00740121": "Continuation End Meterset",
  "00741000": "Procedure Step State",
  "00741002": "Procedure Step Progress Information Sequence",
  "00741004": "Procedure Step Progress",
  "00741006": "Procedure Step Progress Description",
  "00741007": "Procedure Step Progress Parameters Sequence",
  "00741008": "Procedure Step Communications URI Sequence",
  "0074100A": "Contact URI",
  "0074100C": "Contact Display Name",
  "0074100E": "Procedure Step Discontinuation Reason Code Sequence",
  "00741020": "Beam Task Sequence",
  "00741022": "Beam Task Type",
  "00741024": "Beam Order Index (Trial)",
  "00741025": "Autosequence Flag",
  "00741026": "Table Top Vertical Adjusted Position",
  "00741027": "Table Top Longitudinal Adjusted Position",
  "00741028": "Table Top Lateral Adjusted Position",
  "0074102A": "Patient Support Adjusted Angle",
  "0074102B": "Table Top Eccentric Adjusted Angle",
  "0074102C": "Table Top Pitch Adjusted Angle",
  "0074102D": "Table Top Roll Adjusted Angle",
  "00741030": "Delivery Verification Image Sequence",
  "00741032": "Verification Image Timing",
  "00741034": "Double Exposure Flag",
  "00741036": "Double Exposure Ordering",
  "00741038": "Double Exposure Meterset (Trial)",
  "0074103A": "Double Exposure Field Delta (Trial)",
  "00741040": "Related Reference RT Image Sequence",
  "00741042": "General Machine Verification Sequence",
  "00741044": "Conventional Machine Verification Sequence",
  "00741046": "Ion Machine Verification Sequence",
  "00741048": "Failed Attributes Sequence",
  "0074104A": "Overridden Attributes Sequence",
  "0074104C": "Conventional Control Point Verification Sequence",
  "0074104E": "Ion Control Point Verification Sequence",
  "00741050": "Attribute Occurrence Sequence",
  "00741052": "Attribute Occurrence Pointer",
  "00741054": "Attribute Item Selector",
  "00741056": "Attribute Occurrence Private Creator",
  "00741057": "Selector Sequence Pointer Items",
  "00741200": "Scheduled Procedure Step Priority",
  "00741202": "Worklist Label",
  "00741204": "Procedure Step Label",
  "00741210": "Scheduled Processing Parameters Sequence",
  "00741212": "Performed Processing Parameters Sequence",
  "00741216": "Unified Procedure Step Performed Procedure Sequence",
  "00741220": "Related Procedure Step Sequence",
  "00741222": "Procedure Step Relationship Type",
  "00741224": "Replaced Procedure Step Sequence",
  "00741230": "Deletion Lock",
  "00741234": "Receiving AE",
  "00741236": "Requesting AE",
  "00741238": "Reason for Cancellation",
  "00741242": "SCP Status",
  "00741244": "Subscription List Status",
  "00741246": "Unified Procedure Step List Status",
  "00741324": "Beam Order Index",
  "00741338": "Double Exposure Meterset",
  "0074133A": "Double Exposure Field Delta",
  "00741401": "Brachy Task Sequence",
  "00741402": "Continuation Start Total Reference Air Kerma",
  "00741403": "Continuation End Total Reference Air Kerma",
  "00741404": "Continuation Pulse Number",
  "00741405": "Channel Delivery Order Sequence",
  "00741406": "Referenced Channel Number",
  "00741407": "Start Cumulative Time Weight",
  "00741408": "End Cumulative Time Weight",
  "00741409": "Omitted Channel Sequence",
  "0074140A": "Reason for Channel Omission",
  "0074140B": "Reason for Channel Omission Description",
  "0074140C": "Channel Delivery Order Index",
  "0074140D": "Channel Delivery Continuation Sequence",
  "0074140E": "Omitted Application Setup Sequence",
  "00760001": "Implant Assembly Template Name",
  "00760003": "Implant Assembly Template Issuer",
  "00760006": "Implant Assembly Template Version",
  "00760008": "Replaced Implant Assembly Template Sequence",
  "0076000A": "Implant Assembly Template Type",
  "0076000C": "Original Implant Assembly Template Sequence",
  "0076000E": "Derivation Implant Assembly Template Sequence",
  "00760010": "Implant Assembly Template Target Anatomy Sequence",
  "00760020": "Procedure Type Code Sequence",
  "00760030": "Surgical Technique",
  "00760032": "Component Types Sequence",
  "00760034": "Component Type Code Sequence",
  "00760036": "Exclusive Component Type",
  "00760038": "Mandatory Component Type",
  "00760040": "Component Sequence",
  "00760055": "Component ID",
  "00760060": "Component Assembly Sequence",
  "00760070": "Component 1 Referenced ID",
  "00760080": "Component 1 Referenced Mating Feature Set ID",
  "00760090": "Component 1 Referenced Mating Feature ID",
  "007600A0": "Component 2 Referenced ID",
  "007600B0": "Component 2 Referenced Mating Feature Set ID",
  "007600C0": "Component 2 Referenced Mating Feature ID",
  "00780001": "Implant Template Group Name",
  "00780010": "Implant Template Group Description",
  "00780020": "Implant Template Group Issuer",
  "00780024": "Implant Template Group Version",
  "00780026": "Replaced Implant Template Group Sequence",
  "00780028": "Implant Template Group Target Anatomy Sequence",
  "0078002A": "Implant Template Group Members Sequence",
  "0078002E": "Implant Template Group Member ID",
  "00780050": "3D Implant Template Group Member Matching Point",
  "00780060": "3D Implant Template Group Member Matching Axes",
  "00780070": "Implant Template Group Member Matching 2D Coordinates Sequence",
  "00780090": "2D Implant Template Group Member Matching Point",
  "007800A0": "2D Implant Template Group Member Matching Axes",
  "007800B0": "Implant Template Group Variation Dimension Sequence",
  "007800B2": "Implant Template Group Variation Dimension Name",
  "007800B4": "Implant Template Group Variation Dimension Rank Sequence",
  "007800B6": "Referenced Implant Template Group Member ID",
  "007800B8": "Implant Template Group Variation Dimension Rank",
  "00800001": "Surface Scan Acquisition Type Code Sequence",
  "00800002": "Surface Scan Mode Code Sequence",
  "00800003": "Registration Method Code Sequence",
  "00800004": "Shot Duration Time",
  "00800005": "Shot Offset Time",
  "00800006": "Surface Point Presentation Value Data",
  "00800007": "Surface Point Color CIELab Value Data",
  "00800008": "UV Mapping Sequence",
  "00800009": "Texture Label",
  "00800010": "U Value Data",
  "00800011": "V Value Data",
  "00800012": "Referenced Texture Sequence",
  "00800013": "Referenced Surface Data Sequence",
  "00820001": "Assessment Summary",
  "00820003": "Assessment Summary Description",
  "00820004": "Assessed SOP Instance Sequence",
  "00820005": "Referenced Comparison SOP Instance Sequence",
  "00820006": "Number of Assessment Observations",
  "00820007": "Assessment Observations Sequence",
  "00820008": "Observation Significance",
  "0082000A": "Observation Description",
  "0082000C": "Structured Constraint Observation Sequence",
  "00820010": "Assessed Attribute Value Sequence",
  "00820016": "Assessment Set ID",
  "00820017": "Assessment Requester Sequence",
  "00820018": "Selector Attribute Name",
  "00820019": "Selector Attribute Keyword",
  "00820021": "Assessment Type Code Sequence",
  "00820022": "Observation Basis Code Sequence",
  "00820023": "Assessment Label",
  "00820032": "Constraint Type",
  "00820033": "Specification Selection Guidance",
  "00820034": "Constraint Value Sequence",
  "00820035": "Recommended Default Value Sequence",
  "00820036": "Constraint Violation Significance",
  "00820037": "Constraint Violation Condition",
  "00820038": "Modifiable Constraint Flag",
  "00880130": "Storage Media File-set ID",
  "00880140": "Storage Media File-set UID",
  "00880200": "Icon Image Sequence",
  "00880904": "Topic Title",
  "00880906": "Topic Subject",
  "00880910": "Topic Author",
  "00880912": "Topic Keywords",
  "01000410": "SOP Instance Status",
  "01000420": "SOP Authorization DateTime",
  "01000424": "SOP Authorization Comment",
  "01000426": "Authorization Equipment Certification Number",
  "04000005": "MAC ID Number",
  "04000010": "MAC Calculation Transfer Syntax UID",
  "04000015": "MAC Algorithm",
  "04000020": "Data Elements Signed",
  "04000100": "Digital Signature UID",
  "04000105": "Digital Signature DateTime",
  "04000110": "Certificate Type",
  "04000115": "Certificate of Signer",
  "04000120": "Signature",
  "04000305": "Certified Timestamp Type",
  "04000310": "Certified Timestamp",
  "04000401": "Digital Signature Purpose Code Sequence",
  "04000402": "Referenced Digital Signature Sequence",
  "04000403": "Referenced SOP Instance MAC Sequence",
  "04000404": "MAC",
  "04000500": "Encrypted Attributes Sequence",
  "04000510": "Encrypted Content Transfer Syntax UID",
  "04000520": "Encrypted Content",
  "04000550": "Modified Attributes Sequence",
  "04000551": "Nonconforming Modified Attributes Sequence",
  "04000552": "Nonconforming Data Element Value",
  "04000561": "Original Attributes Sequence",
  "04000562": "Attribute Modification DateTime",
  "04000563": "Modifying System",
  "04000564": "Source of Previous Values",
  "04000565": "Reason for the Attribute Modification",
  "04000600": "Instance Origin Status",
  "1000xxx0": "Escape Triplet",
  "1000xxx1": "Run Length Triplet",
  "1000xxx2": "Huffman Table Size",
  "1000xxx3": "Huffman Table Triplet",
  "1000xxx4": "Shift Table Size",
  "1000xxx5": "Shift Table Triplet",
  "1010xxxx": "Zonal Map",
  "20000010": "Number of Copies",
  "2000001E": "Printer Configuration Sequence",
  "20000020": "Print Priority",
  "20000030": "Medium Type",
  "20000040": "Film Destination",
  "20000050": "Film Session Label",
  "20000060": "Memory Allocation",
  "20000061": "Maximum Memory Allocation",
  "20000062": "Color Image Printing Flag",
  "20000063": "Collation Flag",
  "20000065": "Annotation Flag",
  "20000067": "Image Overlay Flag",
  "20000069": "Presentation LUT Flag",
  "2000006A": "Image Box Presentation LUT Flag",
  "200000A0": "Memory Bit Depth",
  "200000A1": "Printing Bit Depth",
  "200000A2": "Media Installed Sequence",
  "200000A4": "Other Media Available Sequence",
  "200000A8": "Supported Image Display Formats Sequence",
  "20000500": "Referenced Film Box Sequence",
  "20000510": "Referenced Stored Print Sequence",
  "20100010": "Image Display Format",
  "20100030": "Annotation Display Format ID",
  "20100040": "Film Orientation",
  "20100050": "Film Size ID",
  "20100052": "Printer Resolution ID",
  "20100054": "Default Printer Resolution ID",
  "20100060": "Magnification Type",
  "20100080": "Smoothing Type",
  "201000A6": "Default Magnification Type",
  "201000A7": "Other Magnification Types Available",
  "201000A8": "Default Smoothing Type",
  "201000A9": "Other Smoothing Types Available",
  "20100100": "Border Density",
  "20100110": "Empty Image Density",
  "20100120": "Min Density",
  "20100130": "Max Density",
  "20100140": "Trim",
  "20100150": "Configuration Information",
  "20100152": "Configuration Information Description",
  "20100154": "Maximum Collated Films",
  "2010015E": "Illumination",
  "20100160": "Reflected Ambient Light",
  "20100376": "Printer Pixel Spacing",
  "20100500": "Referenced Film Session Sequence",
  "20100510": "Referenced Image Box Sequence",
  "20100520": "Referenced Basic Annotation Box Sequence",
  "20200010": "Image Box Position",
  "20200020": "Polarity",
  "20200030": "Requested Image Size",
  "20200040": "Requested Decimate/Crop Behavior",
  "20200050": "Requested Resolution ID",
  "202000A0": "Requested Image Size Flag",
  "202000A2": "Decimate/Crop Result",
  "20200110": "Basic Grayscale Image Sequence",
  "20200111": "Basic Color Image Sequence",
  "20200130": "Referenced Image Overlay Box Sequence",
  "20200140": "Referenced VOI LUT Box Sequence",
  "20300010": "Annotation Position",
  "20300020": "Text String",
  "20400010": "Referenced Overlay Plane Sequence",
  "20400011": "Referenced Overlay Plane Groups",
  "20400020": "Overlay Pixel Data Sequence",
  "20400060": "Overlay Magnification Type",
  "20400070": "Overlay Smoothing Type",
  "20400072": "Overlay or Image Magnification",
  "20400074": "Magnify to Number of Columns",
  "20400080": "Overlay Foreground Density",
  "20400082": "Overlay Background Density",
  "20400090": "Overlay Mode",
  "20400100": "Threshold Density",
  "20400500": "Referenced Image Box Sequence (Retired)",
  "20500010": "Presentation LUT Sequence",
  "20500020": "Presentation LUT Shape",
  "20500500": "Referenced Presentation LUT Sequence",
  "21000010": "Print Job ID",
  "21000020": "Execution Status",
  "21000030": "Execution Status Info",
  "21000040": "Creation Date",
  "21000050": "Creation Time",
  "21000070": "Originator",
  "21000140": "Destination AE",
  "21000160": "Owner ID",
  "21000170": "Number of Films",
  "21000500": "Referenced Print Job Sequence (Pull Stored Print)",
  "21100010": "Printer Status",
  "21100020": "Printer Status Info",
  "21100030": "Printer Name",
  "21100099": "Print Queue ID",
  "21200010": "Queue Status",
  "21200050": "Print Job Description Sequence",
  "21200070": "Referenced Print Job Sequence",
  "21300010": "Print Management Capabilities Sequence",
  "21300015": "Printer Characteristics Sequence",
  "21300030": "Film Box Content Sequence",
  "21300040": "Image Box Content Sequence",
  "21300050": "Annotation Content Sequence",
  "21300060": "Image Overlay Box Content Sequence",
  "21300080": "Presentation LUT Content Sequence",
  "213000A0": "Proposed Study Sequence",
  "213000C0": "Original Image Sequence",
  "22000001": "Label Using Information Extracted From Instances",
  "22000002": "Label Text",
  "22000003": "Label Style Selection",
  "22000004": "Media Disposition",
  "22000005": "Barcode Value",
  "22000006": "Barcode Symbology",
  "22000007": "Allow Media Splitting",
  "22000008": "Include Non-DICOM Objects",
  "22000009": "Include Display Application",
  "2200000A": "Preserve Composite Instances After Media Creation",
  "2200000B": "Total Number of Pieces of Media Created",
  "2200000C": "Requested Media Application Profile",
  "2200000D": "Referenced Storage Media Sequence",
  "2200000E": "Failure Attributes",
  "2200000F": "Allow Lossy Compression",
  "22000020": "Request Priority",
  "30020002": "RT Image Label",
  "30020003": "RT Image Name",
  "30020004": "RT Image Description",
  "3002000A": "Reported Values Origin",
  "3002000C": "RT Image Plane",
  "3002000D": "X-Ray Image Receptor Translation",
  "3002000E": "X-Ray Image Receptor Angle",
  "30020010": "RT Image Orientation",
  "30020011": "Image Plane Pixel Spacing",
  "30020012": "RT Image Position",
  "30020020": "Radiation Machine Name",
  "30020022": "Radiation Machine SAD",
  "30020024": "Radiation Machine SSD",
  "30020026": "RT Image SID",
  "30020028": "Source to Reference Object Distance",
  "30020029": "Fraction Number",
  "30020030": "Exposure Sequence",
  "30020032": "Meterset Exposure",
  "30020034": "Diaphragm Position",
  "30020040": "Fluence Map Sequence",
  "30020041": "Fluence Data Source",
  "30020042": "Fluence Data Scale",
  "30020050": "Primary Fluence Mode Sequence",
  "30020051": "Fluence Mode",
  "30020052": "Fluence Mode ID",
  "30020100": "Selected Frame Number",
  "30020101": "Selected Frame Functional Groups Sequence",
  "30020102": "RT Image Frame General Content Sequence",
  "30020103": "RT Image Frame Context Sequence",
  "30020104": "RT Image Scope Sequence",
  "30020105": "Beam Modifier Coordinates Presence Flag",
  "30020106": "Start Cumulative Meterset",
  "30020107": "Stop Cumulative Meterset",
  "30020108": "RT Acquisition Patient Position Sequence",
  "30020109": "RT Image Frame Imaging Device Position Sequence",
  "3002010A": "RT Image Frame kV Radiation Acquisition Sequence",
  "3002010B": "RT Image Frame MV Radiation Acquisition Sequence",
  "3002010C": "RT Image Frame Radiation Acquisition Sequence",
  "3002010D": "Imaging Source Position Sequence",
  "3002010E": "Image Receptor Position Sequence",
  "3002010F": "Device Position to Equipment Mapping Matrix",
  "30020110": "Device Position Parameter Sequence",
  "30020111": "Imaging Source Location Specification Type",
  "30020112": "Imaging Device Location Matrix Sequence",
  "30020113": "Imaging Device Location Parameter Sequence",
  "30020114": "Imaging Aperture Sequence",
  "30020115": "Imaging Aperture Specification Type",
  "30020116": "Number of Acquisition Devices",
  "30020117": "Acquisition Device Sequence",
  "30020118": "Acquisition Task Sequence",
  "30020119": "Acquisition Task Workitem Code Sequence",
  "3002011A": "Acquisition Subtask Sequence",
  "3002011B": "Subtask Workitem Code Sequence",
  "3002011C": "Acquisition Task Index",
  "3002011D": "Acquisition Subtask Index",
  "3002011E": "Referenced Baseline Parameters RT Radiation Instance Sequence",
  "3002011F": "Position Acquisition Template Identification Sequence",
  "30020120": "Position Acquisition Template ID",
  "30020121": "Position Acquisition Template Name",
  "30020122": "Position Acquisition Template Code Sequence",
  "30020123": "Position Acquisition Template Description",
  "30020124": "Acquisition Task Applicability Sequence",
  "30020125": "Projection Imaging Acquisition Parameter Sequence",
  "30020126": "CT Imaging Acquisition Parameter Sequence",
  "30020127": "KV Imaging Generation Parameters Sequence",
  "30020128": "MV Imaging Generation Parameters Sequence",
  "30020129": "Acquisition Signal Type",
  "3002012A": "Acquisition Method",
  "3002012B": "Scan Start Position Sequence",
  "3002012C": "Scan Stop Position Sequence",
  "3002012D": "Imaging Source to Beam Modifier Definition Plane Distance",
  "3002012E": "Scan Arc Type",
  "3002012F": "Detector Positioning Type",
  "30020130": "Additional RT Accessory Device Sequence",
  "30020131": "Device-Specific Acquisition Parameter Sequence",
  "30020132": "Referenced Position Reference Instance Sequence",
  "30020133": "Energy Derivation Code Sequence",
  "30020134": "Maximum Cumulative Meterset Exposure",
  "30020135": "Acquisition Initiation Sequence",
  "30020136": "RT Cone-Beam Imaging Geometry Sequence",
  "30040001": "DVH Type",
  "30040002": "Dose Units",
  "30040004": "Dose Type",
  "30040005": "Spatial Transform of Dose",
  "30040006": "Dose Comment",
  "30040008": "Normalization Point",
  "3004000A": "Dose Summation Type",
  "3004000C": "Grid Frame Offset Vector",
  "3004000E": "Dose Grid Scaling",
  "30040010": "RT Dose ROI Sequence",
  "30040012": "Dose Value",
  "30040014": "Tissue Heterogeneity Correction",
  "30040016": "Recommended Isodose Level Sequence",
  "30040020": "Dose Unit Code Sequence",
  "30040021": "RT Dose Interpreted Type Code Sequence",
  "30040022": "RT Dose Interpreted Type Code Modifier Sequence",
  "30040023": "Dose Radiobiological Interpretation Sequence",
  "30040024": "RT Dose Intent Code Sequence",
  "30040040": "DVH Normalization Point",
  "30040042": "DVH Normalization Dose Value",
  "30040050": "DVH Sequence",
  "30040052": "DVH Dose Scaling",
  "30040054": "DVH Volume Units",
  "30040056": "DVH Number of Bins",
  "30040058": "DVH Data",
  "30040060": "DVH Referenced ROI Sequence",
  "30040062": "DVH ROI Contribution Type",
  "30040070": "DVH Minimum Dose",
  "30040072": "DVH Maximum Dose",
  "30040074": "DVH Mean Dose",
  "30040080": "Dose Calculation Model Sequence",
  "30040081": "Dose Calculation Algorithm Sequence",
  "30040082": "Commissioning Status",
  "30040083": "Dose Calculation Model Parameter Sequence",
  "30040084": "Dose Deposition Calculation Medium",
  "30060002": "Structure Set Label",
  "30060004": "Structure Set Name",
  "30060006": "Structure Set Description",
  "30060008": "Structure Set Date",
  "30060009": "Structure Set Time",
  "30060010": "Referenced Frame of Reference Sequence",
  "30060012": "RT Referenced Study Sequence",
  "30060014": "RT Referenced Series Sequence",
  "30060016": "Contour Image Sequence",
  "30060018": "Predecessor Structure Set Sequence",
  "30060020": "Structure Set ROI Sequence",
  "30060022": "ROI Number",
  "30060024": "Referenced Frame of Reference UID",
  "30060026": "ROI Name",
  "30060028": "ROI Description",
  "3006002A": "ROI Display Color",
  "3006002C": "ROI Volume",
  "3006002D": "ROI DateTime",
  "3006002E": "ROI Observation DateTime",
  "30060030": "RT Related ROI Sequence",
  "30060033": "RT ROI Relationship",
  "30060036": "ROI Generation Algorithm",
  "30060037": "ROI Derivation Algorithm Identification Sequence",
  "30060038": "ROI Generation Description",
  "30060039": "ROI Contour Sequence",
  "30060040": "Contour Sequence",
  "30060042": "Contour Geometric Type",
  "30060044": "Contour Slab Thickness",
  "30060045": "Contour Offset Vector",
  "30060046": "Number of Contour Points",
  "30060048": "Contour Number",
  "30060049": "Attached Contours",
  "3006004A": "Source Pixel Planes Characteristics Sequence",
  "3006004B": "Source Series Sequence",
  "3006004C": "Source Series Information Sequence",
  "3006004D": "ROI Creator Sequence",
  "3006004E": "ROI Interpreter Sequence",
  "3006004F": "ROI Observation Context Code Sequence",
  "30060050": "Contour Data",
  "30060080": "RT ROI Observations Sequence",
  "30060082": "Observation Number",
  "30060084": "Referenced ROI Number",
  "30060085": "ROI Observation Label",
  "30060086": "RT ROI Identification Code Sequence",
  "30060088": "ROI Observation Description",
  "300600A0": "Related RT ROI Observations Sequence",
  "300600A4": "RT ROI Interpreted Type",
  "300600A6": "ROI Interpreter",
  "300600B0": "ROI Physical Properties Sequence",
  "300600B2": "ROI Physical Property",
  "300600B4": "ROI Physical Property Value",
  "300600B6": "ROI Elemental Composition Sequence",
  "300600B7": "ROI Elemental Composition Atomic Number",
  "300600B8": "ROI Elemental Composition Atomic Mass Fraction",
  "300600B9": "Additional RT ROI Identification Code Sequence",
  "300600C0": "Frame of Reference Relationship Sequence",
  "300600C2": "Related Frame of Reference UID",
  "300600C4": "Frame of Reference Transformation Type",
  "300600C6": "Frame of Reference Transformation Matrix",
  "300600C8": "Frame of Reference Transformation Comment",
  "300600C9": "Patient Location Coordinates Sequence",
  "300600CA": "Patient Location Coordinates Code Sequence",
  "300600CB": "Patient Support Position Sequence",
  "30080010": "Measured Dose Reference Sequence",
  "30080012": "Measured Dose Description",
  "30080014": "Measured Dose Type",
  "30080016": "Measured Dose Value",
  "30080020": "Treatment Session Beam Sequence",
  "30080021": "Treatment Session Ion Beam Sequence",
  "30080022": "Current Fraction Number",
  "30080024": "Treatment Control Point Date",
  "30080025": "Treatment Control Point Time",
  "3008002A": "Treatment Termination Status",
  "3008002B": "Treatment Termination Code",
  "3008002C": "Treatment Verification Status",
  "30080030": "Referenced Treatment Record Sequence",
  "30080032": "Specified Primary Meterset",
  "30080033": "Specified Secondary Meterset",
  "30080036": "Delivered Primary Meterset",
  "30080037": "Delivered Secondary Meterset",
  "3008003A": "Specified Treatment Time",
  "3008003B": "Delivered Treatment Time",
  "30080040": "Control Point Delivery Sequence",
  "30080041": "Ion Control Point Delivery Sequence",
  "30080042": "Specified Meterset",
  "30080044": "Delivered Meterset",
  "30080045": "Meterset Rate Set",
  "30080046": "Meterset Rate Delivered",
  "30080047": "Scan Spot Metersets Delivered",
  "30080048": "Dose Rate Delivered",
  "30080050": "Treatment Summary Calculated Dose Reference Sequence",
  "30080052": "Cumulative Dose to Dose Reference",
  "30080054": "First Treatment Date",
  "30080056": "Most Recent Treatment Date",
  "3008005A": "Number of Fractions Delivered",
  "30080060": "Override Sequence",
  "30080061": "Parameter Sequence Pointer",
  "30080062": "Override Parameter Pointer",
  "30080063": "Parameter Item Index",
  "30080064": "Measured Dose Reference Number",
  "30080065": "Parameter Pointer",
  "30080066": "Override Reason",
  "30080067": "Parameter Value Number",
  "30080068": "Corrected Parameter Sequence",
  "3008006A": "Correction Value",
  "30080070": "Calculated Dose Reference Sequence",
  "30080072": "Calculated Dose Reference Number",
  "30080074": "Calculated Dose Reference Description",
  "30080076": "Calculated Dose Reference Dose Value",
  "30080078": "Start Meterset",
  "3008007A": "End Meterset",
  "30080080": "Referenced Measured Dose Reference Sequence",
  "30080082": "Referenced Measured Dose Reference Number",
  "30080090": "Referenced Calculated Dose Reference Sequence",
  "30080092": "Referenced Calculated Dose Reference Number",
  "300800A0": "Beam Limiting Device Leaf Pairs Sequence",
  "300800A1": "Enhanced RT Beam Limiting Device Sequence",
  "300800A2": "Enhanced RT Beam Limiting Opening Sequence",
  "300800A3": "Enhanced RT Beam Limiting Device Definition Flag",
  "300800A4": "Parallel RT Beam Delimiter Opening Extents",
  "300800B0": "Recorded Wedge Sequence",
  "300800C0": "Recorded Compensator Sequence",
  "300800D0": "Recorded Block Sequence",
  "300800D1": "Recorded Block Slab Sequence",
  "300800E0": "Treatment Summary Measured Dose Reference Sequence",
  "300800F0": "Recorded Snout Sequence",
  "300800F2": "Recorded Range Shifter Sequence",
  "300800F4": "Recorded Lateral Spreading Device Sequence",
  "300800F6": "Recorded Range Modulator Sequence",
  "30080100": "Recorded Source Sequence",
  "30080105": "Source Serial Number",
  "30080110": "Treatment Session Application Setup Sequence",
  "30080116": "Application Setup Check",
  "30080120": "Recorded Brachy Accessory Device Sequence",
  "30080122": "Referenced Brachy Accessory Device Number",
  "30080130": "Recorded Channel Sequence",
  "30080132": "Specified Channel Total Time",
  "30080134": "Delivered Channel Total Time",
  "30080136": "Specified Number of Pulses",
  "30080138": "Delivered Number of Pulses",
  "3008013A": "Specified Pulse Repetition Interval",
  "3008013C": "Delivered Pulse Repetition Interval",
  "30080140": "Recorded Source Applicator Sequence",
  "30080142": "Referenced Source Applicator Number",
  "30080150": "Recorded Channel Shield Sequence",
  "30080152": "Referenced Channel Shield Number",
  "30080160": "Brachy Control Point Delivered Sequence",
  "30080162": "Safe Position Exit Date",
  "30080164": "Safe Position Exit Time",
  "30080166": "Safe Position Return Date",
  "30080168": "Safe Position Return Time",
  "30080171": "Pulse Specific Brachy Control Point Delivered Sequence",
  "30080172": "Pulse Number",
  "30080173": "Brachy Pulse Control Point Delivered Sequence",
  "30080200": "Current Treatment Status",
  "30080202": "Treatment Status Comment",
  "30080220": "Fraction Group Summary Sequence",
  "30080223": "Referenced Fraction Number",
  "30080224": "Fraction Group Type",
  "30080230": "Beam Stopper Position",
  "30080240": "Fraction Status Summary Sequence",
  "30080250": "Treatment Date",
  "30080251": "Treatment Time",
  "300A0002": "RT Plan Label",
  "300A0003": "RT Plan Name",
  "300A0004": "RT Plan Description",
  "300A0006": "RT Plan Date",
  "300A0007": "RT Plan Time",
  "300A0009": "Treatment Protocols",
  "300A000A": "Plan Intent",
  "300A000B": "Treatment Sites",
  "300A000C": "RT Plan Geometry",
  "300A000E": "Prescription Description",
  "300A0010": "Dose Reference Sequence",
  "300A0012": "Dose Reference Number",
  "300A0013": "Dose Reference UID",
  "300A0014": "Dose Reference Structure Type",
  "300A0015": "Nominal Beam Energy Unit",
  "300A0016": "Dose Reference Description",
  "300A0018": "Dose Reference Point Coordinates",
  "300A001A": "Nominal Prior Dose",
  "300A0020": "Dose Reference Type",
  "300A0021": "Constraint Weight",
  "300A0022": "Delivery Warning Dose",
  "300A0023": "Delivery Maximum Dose",
  "300A0025": "Target Minimum Dose",
  "300A0026": "Target Prescription Dose",
  "300A0027": "Target Maximum Dose",
  "300A0028": "Target Underdose Volume Fraction",
  "300A002A": "Organ at Risk Full-volume Dose",
  "300A002B": "Organ at Risk Limit Dose",
  "300A002C": "Organ at Risk Maximum Dose",
  "300A002D": "Organ at Risk Overdose Volume Fraction",
  "300A0040": "Tolerance Table Sequence",
  "300A0042": "Tolerance Table Number",
  "300A0043": "Tolerance Table Label",
  "300A0044": "Gantry Angle Tolerance",
  "300A0046": "Beam Limiting Device Angle Tolerance",
  "300A0048": "Beam Limiting Device Tolerance Sequence",
  "300A004A": "Beam Limiting Device Position Tolerance",
  "300A004B": "Snout Position Tolerance",
  "300A004C": "Patient Support Angle Tolerance",
  "300A004E": "Table Top Eccentric Angle Tolerance",
  "300A004F": "Table Top Pitch Angle Tolerance",
  "300A0050": "Table Top Roll Angle Tolerance",
  "300A0051": "Table Top Vertical Position Tolerance",
  "300A0052": "Table Top Longitudinal Position Tolerance",
  "300A0053": "Table Top Lateral Position Tolerance",
  "300A0054": "Table Top Position Alignment UID",
  "300A0055": "RT Plan Relationship",
  "300A0070": "Fraction Group Sequence",
  "300A0071": "Fraction Group Number",
  "300A0072": "Fraction Group Description",
  "300A0078": "Number of Fractions Planned",
  "300A0079": "Number of Fraction Pattern Digits Per Day",
  "300A007A": "Repeat Fraction Cycle Length",
  "300A007B": "Fraction Pattern",
  "300A0080": "Number of Beams",
  "300A0082": "Beam Dose Specification Point",
  "300A0083": "Referenced Dose Reference UID",
  "300A0084": "Beam Dose",
  "300A0086": "Beam Meterset",
  "300A0088": "Beam Dose Point Depth",
  "300A0089": "Beam Dose Point Equivalent Depth",
  "300A008A": "Beam Dose Point SSD",
  "300A008B": "Beam Dose Meaning",
  "300A008C": "Beam Dose Verification Control Point Sequence",
  "300A008D": "Average Beam Dose Point Depth",
  "300A008E": "Average Beam Dose Point Equivalent Depth",
  "300A008F": "Average Beam Dose Point SSD",
  "300A0090": "Beam Dose Type",
  "300A0091": "Alternate Beam Dose",
  "300A0092": "Alternate Beam Dose Type",
  "300A0093": "Depth Value Averaging Flag",
  "300A0094": "Beam Dose Point Source to External Contour Distance",
  "300A00A0": "Number of Brachy Application Setups",
  "300A00A2": "Brachy Application Setup Dose Specification Point",
  "300A00A4": "Brachy Application Setup Dose",
  "300A00B0": "Beam Sequence",
  "300A00B2": "Treatment Machine Name",
  "300A00B3": "Primary Dosimeter Unit",
  "300A00B4": "Source-Axis Distance",
  "300A00B6": "Beam Limiting Device Sequence",
  "300A00B8": "RT Beam Limiting Device Type",
  "300A00BA": "Source to Beam Limiting Device Distance",
  "300A00BB": "Isocenter to Beam Limiting Device Distance",
  "300A00BC": "Number of Leaf/Jaw Pairs",
  "300A00BE": "Leaf Position Boundaries",
  "300A00C0": "Beam Number",
  "300A00C2": "Beam Name",
  "300A00C3": "Beam Description",
  "300A00C4": "Beam Type",
  "300A00C5": "Beam Delivery Duration Limit",
  "300A00C6": "Radiation Type",
  "300A00C7": "High-Dose Technique Type",
  "300A00C8": "Reference Image Number",
  "300A00CA": "Planned Verification Image Sequence",
  "300A00CC": "Imaging Device-Specific Acquisition Parameters",
  "300A00CE": "Treatment Delivery Type",
  "300A00D0": "Number of Wedges",
  "300A00D1": "Wedge Sequence",
  "300A00D2": "Wedge Number",
  "300A00D3": "Wedge Type",
  "300A00D4": "Wedge ID",
  "300A00D5": "Wedge Angle",
  "300A00D6": "Wedge Factor",
  "300A00D7": "Total Wedge Tray Water-Equivalent Thickness",
  "300A00D8": "Wedge Orientation",
  "300A00D9": "Isocenter to Wedge Tray Distance",
  "300A00DA": "Source to Wedge Tray Distance",
  "300A00DB": "Wedge Thin Edge Position",
  "300A00DC": "Bolus ID",
  "300A00DD": "Bolus Description",
  "300A00DE": "Effective Wedge Angle",
  "300A00E0": "Number of Compensators",
  "300A00E1": "Material ID",
  "300A00E2": "Total Compensator Tray Factor",
  "300A00E3": "Compensator Sequence",
  "300A00E4": "Compensator Number",
  "300A00E5": "Compensator ID",
  "300A00E6": "Source to Compensator Tray Distance",
  "300A00E7": "Compensator Rows",
  "300A00E8": "Compensator Columns",
  "300A00E9": "Compensator Pixel Spacing",
  "300A00EA": "Compensator Position",
  "300A00EB": "Compensator Transmission Data",
  "300A00EC": "Compensator Thickness Data",
  "300A00ED": "Number of Boli",
  "300A00EE": "Compensator Type",
  "300A00EF": "Compensator Tray ID",
  "300A00F0": "Number of Blocks",
  "300A00F2": "Total Block Tray Factor",
  "300A00F3": "Total Block Tray Water-Equivalent Thickness",
  "300A00F4": "Block Sequence",
  "300A00F5": "Block Tray ID",
  "300A00F6": "Source to Block Tray Distance",
  "300A00F7": "Isocenter to Block Tray Distance",
  "300A00F8": "Block Type",
  "300A00F9": "Accessory Code",
  "300A00FA": "Block Divergence",
  "300A00FB": "Block Mounting Position",
  "300A00FC": "Block Number",
  "300A00FE": "Block Name",
  "300A0100": "Block Thickness",
  "300A0102": "Block Transmission",
  "300A0104": "Block Number of Points",
  "300A0106": "Block Data",
  "300A0107": "Applicator Sequence",
  "300A0108": "Applicator ID",
  "300A0109": "Applicator Type",
  "300A010A": "Applicator Description",
  "300A010C": "Cumulative Dose Reference Coefficient",
  "300A010E": "Final Cumulative Meterset Weight",
  "300A0110": "Number of Control Points",
  "300A0111": "Control Point Sequence",
  "300A0112": "Control Point Index",
  "300A0114": "Nominal Beam Energy",
  "300A0115": "Dose Rate Set",
  "300A0116": "Wedge Position Sequence",
  "300A0118": "Wedge Position",
  "300A011A": "Beam Limiting Device Position Sequence",
  "300A011C": "Leaf/Jaw Positions",
  "300A011E": "Gantry Angle",
  "300A011F": "Gantry Rotation Direction",
  "300A0120": "Beam Limiting Device Angle",
  "300A0121": "Beam Limiting Device Rotation Direction",
  "300A0122": "Patient Support Angle",
  "300A0123": "Patient Support Rotation Direction",
  "300A0124": "Table Top Eccentric Axis Distance",
  "300A0125": "Table Top Eccentric Angle",
  "300A0126": "Table Top Eccentric Rotation Direction",
  "300A0128": "Table Top Vertical Position",
  "300A0129": "Table Top Longitudinal Position",
  "300A012A": "Table Top Lateral Position",
  "300A012C": "Isocenter Position",
  "300A012E": "Surface Entry Point",
  "300A0130": "Source to Surface Distance",
  "300A0131": "Average Beam Dose Point Source to External Contour Distance",
  "300A0132": "Source to External Contour Distance",
  "300A0133": "External Contour Entry Point",
  "300A0134": "Cumulative Meterset Weight",
  "300A0140": "Table Top Pitch Angle",
  "300A0142": "Table Top Pitch Rotation Direction",
  "300A0144": "Table Top Roll Angle",
  "300A0146": "Table Top Roll Rotation Direction",
  "300A0148": "Head Fixation Angle",
  "300A014A": "Gantry Pitch Angle",
  "300A014C": "Gantry Pitch Rotation Direction",
  "300A014E": "Gantry Pitch Angle Tolerance",
  "300A0150": "Fixation Eye",
  "300A0151": "Chair Head Frame Position",
  "300A0152": "Head Fixation Angle Tolerance",
  "300A0153": "Chair Head Frame Position Tolerance",
  "300A0154": "Fixation Light Azimuthal Angle Tolerance",
  "300A0155": "Fixation Light Polar Angle Tolerance",
  "300A0180": "Patient Setup Sequence",
  "300A0182": "Patient Setup Number",
  "300A0183": "Patient Setup Label",
  "300A0184": "Patient Additional Position",
  "300A0190": "Fixation Device Sequence",
  "300A0192": "Fixation Device Type",
  "300A0194": "Fixation Device Label",
  "300A0196": "Fixation Device Description",
  "300A0198": "Fixation Device Position",
  "300A0199": "Fixation Device Pitch Angle",
  "300A019A": "Fixation Device Roll Angle",
  "300A01A0": "Shielding Device Sequence",
  "300A01A2": "Shielding Device Type",
  "300A01A4": "Shielding Device Label",
  "300A01A6": "Shielding Device Description",
  "300A01A8": "Shielding Device Position",
  "300A01B0": "Setup Technique",
  "300A01B2": "Setup Technique Description",
  "300A01B4": "Setup Device Sequence",
  "300A01B6": "Setup Device Type",
  "300A01B8": "Setup Device Label",
  "300A01BA": "Setup Device Description",
  "300A01BC": "Setup Device Parameter",
  "300A01D0": "Setup Reference Description",
  "300A01D2": "Table Top Vertical Setup Displacement",
  "300A01D4": "Table Top Longitudinal Setup Displacement",
  "300A01D6": "Table Top Lateral Setup Displacement",
  "300A0200": "Brachy Treatment Technique",
  "300A0202": "Brachy Treatment Type",
  "300A0206": "Treatment Machine Sequence",
  "300A0210": "Source Sequence",
  "300A0212": "Source Number",
  "300A0214": "Source Type",
  "300A0216": "Source Manufacturer",
  "300A0218": "Active Source Diameter",
  "300A021A": "Active Source Length",
  "300A021B": "Source Model ID",
  "300A021C": "Source Description",
  "300A0222": "Source Encapsulation Nominal Thickness",
  "300A0224": "Source Encapsulation Nominal Transmission",
  "300A0226": "Source Isotope Name",
  "300A0228": "Source Isotope Half Life",
  "300A0229": "Source Strength Units",
  "300A022A": "Reference Air Kerma Rate",
  "300A022B": "Source Strength",
  "300A022C": "Source Strength Reference Date",
  "300A022E": "Source Strength Reference Time",
  "300A0230": "Application Setup Sequence",
  "300A0232": "Application Setup Type",
  "300A0234": "Application Setup Number",
  "300A0236": "Application Setup Name",
  "300A0238": "Application Setup Manufacturer",
  "300A0240": "Template Number",
  "300A0242": "Template Type",
  "300A0244": "Template Name",
  "300A0250": "Total Reference Air Kerma",
  "300A0260": "Brachy Accessory Device Sequence",
  "300A0262": "Brachy Accessory Device Number",
  "300A0263": "Brachy Accessory Device ID",
  "300A0264": "Brachy Accessory Device Type",
  "300A0266": "Brachy Accessory Device Name",
  "300A026A": "Brachy Accessory Device Nominal Thickness",
  "300A026C": "Brachy Accessory Device Nominal Transmission",
  "300A0271": "Channel Effective Length",
  "300A0272": "Channel Inner Length",
  "300A0273": "Afterloader Channel ID",
  "300A0274": "Source Applicator Tip Length",
  "300A0280": "Channel Sequence",
  "300A0282": "Channel Number",
  "300A0284": "Channel Length",
  "300A0286": "Channel Total Time",
  "300A0288": "Source Movement Type",
  "300A028A": "Number of Pulses",
  "300A028C": "Pulse Repetition Interval",
  "300A0290": "Source Applicator Number",
  "300A0291": "Source Applicator ID",
  "300A0292": "Source Applicator Type",
  "300A0294": "Source Applicator Name",
  "300A0296": "Source Applicator Length",
  "300A0298": "Source Applicator Manufacturer",
  "300A029C": "Source Applicator Wall Nominal Thickness",
  "300A029E": "Source Applicator Wall Nominal Transmission",
  "300A02A0": "Source Applicator Step Size",
  "300A02A1": "Applicator Shape Referenced ROI Number",
  "300A02A2": "Transfer Tube Number",
  "300A02A4": "Transfer Tube Length",
  "300A02B0": "Channel Shield Sequence",
  "300A02B2": "Channel Shield Number",
  "300A02B3": "Channel Shield ID",
  "300A02B4": "Channel Shield Name",
  "300A02B8": "Channel Shield Nominal Thickness",
  "300A02BA": "Channel Shield Nominal Transmission",
  "300A02C8": "Final Cumulative Time Weight",
  "300A02D0": "Brachy Control Point Sequence",
  "300A02D2": "Control Point Relative Position",
  "300A02D4": "Control Point 3D Position",
  "300A02D6": "Cumulative Time Weight",
  "300A02E0": "Compensator Divergence",
  "300A02E1": "Compensator Mounting Position",
  "300A02E2": "Source to Compensator Distance",
  "300A02E3": "Total Compensator Tray Water-Equivalent Thickness",
  "300A02E4": "Isocenter to Compensator Tray Distance",
  "300A02E5": "Compensator Column Offset",
  "300A02E6": "Isocenter to Compensator Distances",
  "300A02E7": "Compensator Relative Stopping Power Ratio",
  "300A02E8": "Compensator Milling Tool Diameter",
  "300A02EA": "Ion Range Compensator Sequence",
  "300A02EB": "Compensator Description",
  "300A02EC": "Compensator Surface Representation Flag",
  "300A0302": "Radiation Mass Number",
  "300A0304": "Radiation Atomic Number",
  "300A0306": "Radiation Charge State",
  "300A0308": "Scan Mode",
  "300A0309": "Modulated Scan Mode Type",
  "300A030A": "Virtual Source-Axis Distances",
  "300A030C": "Snout Sequence",
  "300A030D": "Snout Position",
  "300A030F": "Snout ID",
  "300A0312": "Number of Range Shifters",
  "300A0314": "Range Shifter Sequence",
  "300A0316": "Range Shifter Number",
  "300A0318": "Range Shifter ID",
  "300A0320": "Range Shifter Type",
  "300A0322": "Range Shifter Description",
  "300A0330": "Number of Lateral Spreading Devices",
  "300A0332": "Lateral Spreading Device Sequence",
  "300A0334": "Lateral Spreading Device Number",
  "300A0336": "Lateral Spreading Device ID",
  "300A0338": "Lateral Spreading Device Type",
  "300A033A": "Lateral Spreading Device Description",
  "300A033C": "Lateral Spreading Device Water Equivalent Thickness",
  "300A0340": "Number of Range Modulators",
  "300A0342": "Range Modulator Sequence",
  "300A0344": "Range Modulator Number",
  "300A0346": "Range Modulator ID",
  "300A0348": "Range Modulator Type",
  "300A034A": "Range Modulator Description",
  "300A034C": "Beam Current Modulation ID",
  "300A0350": "Patient Support Type",
  "300A0352": "Patient Support ID",
  "300A0354": "Patient Support Accessory Code",
  "300A0355": "Tray Accessory Code",
  "300A0356": "Fixation Light Azimuthal Angle",
  "300A0358": "Fixation Light Polar Angle",
  "300A035A": "Meterset Rate",
  "300A0360": "Range Shifter Settings Sequence",
  "300A0362": "Range Shifter Setting",
  "300A0364": "Isocenter to Range Shifter Distance",
  "300A0366": "Range Shifter Water Equivalent Thickness",
  "300A0370": "Lateral Spreading Device Settings Sequence",
  "300A0372": "Lateral Spreading Device Setting",
  "300A0374": "Isocenter to Lateral Spreading Device Distance",
  "300A0380": "Range Modulator Settings Sequence",
  "300A0382": "Range Modulator Gating Start Value",
  "300A0384": "Range Modulator Gating Stop Value",
  "300A0386": "Range Modulator Gating Start Water Equivalent Thickness",
  "300A0388": "Range Modulator Gating Stop Water Equivalent Thickness",
  "300A038A": "Isocenter to Range Modulator Distance",
  "300A038F": "Scan Spot Time Offset",
  "300A0390": "Scan Spot Tune ID",
  "300A0391": "Scan Spot Prescribed Indices",
  "300A0392": "Number of Scan Spot Positions",
  "300A0393": "Scan Spot Reordered",
  "300A0394": "Scan Spot Position Map",
  "300A0395": "Scan Spot Reordering Allowed",
  "300A0396": "Scan Spot Meterset Weights",
  "300A0398": "Scanning Spot Size",
  "300A0399": "Scan Spot Sizes Delivered",
  "300A039A": "Number of Paintings",
  "300A039B": "Scan Spot Gantry Angles",
  "300A039C": "Scan Spot Patient Support Angles",
  "300A03A0": "Ion Tolerance Table Sequence",
  "300A03A2": "Ion Beam Sequence",
  "300A03A4": "Ion Beam Limiting Device Sequence",
  "300A03A6": "Ion Block Sequence",
  "300A03A8": "Ion Control Point Sequence",
  "300A03AA": "Ion Wedge Sequence",
  "300A03AC": "Ion Wedge Position Sequence",
  "300A0401": "Referenced Setup Image Sequence",
  "300A0402": "Setup Image Comment",
  "300A0410": "Motion Synchronization Sequence",
  "300A0412": "Control Point Orientation",
  "300A0420": "General Accessory Sequence",
  "300A0421": "General Accessory ID",
  "300A0422": "General Accessory Description",
  "300A0423": "General Accessory Type",
  "300A0424": "General Accessory Number",
  "300A0425": "Source to General Accessory Distance",
  "300A0426": "Isocenter to General Accessory Distance",
  "300A0431": "Applicator Geometry Sequence",
  "300A0432": "Applicator Aperture Shape",
  "300A0433": "Applicator Opening",
  "300A0434": "Applicator Opening X",
  "300A0435": "Applicator Opening Y",
  "300A0436": "Source to Applicator Mounting Position Distance",
  "300A0440": "Number of Block Slab Items",
  "300A0441": "Block Slab Sequence",
  "300A0442": "Block Slab Thickness",
  "300A0443": "Block Slab Number",
  "300A0450": "Device Motion Control Sequence",
  "300A0451": "Device Motion Execution Mode",
  "300A0452": "Device Motion Observation Mode",
  "300A0453": "Device Motion Parameter Code Sequence",
  "300A0501": "Distal Depth Fraction",
  "300A0502": "Distal Depth",
  "300A0503": "Nominal Range Modulation Fractions",
  "300A0504": "Nominal Range Modulated Region Depths",
  "300A0505": "Depth Dose Parameters Sequence",
  "300A0506": "Delivered Depth Dose Parameters Sequence",
  "300A0507": "Delivered Distal Depth Fraction",
  "300A0508": "Delivered Distal Depth",
  "300A0509": "Delivered Nominal Range Modulation Fractions",
  "300A0510": "Delivered Nominal Range Modulated Region Depths",
  "300A0511": "Delivered Reference Dose Definition",
  "300A0512": "Reference Dose Definition",
  "300A0600": "RT Control Point Index",
  "300A0601": "Radiation Generation Mode Index",
  "300A0602": "Referenced Defined Device Index",
  "300A0603": "Radiation Dose Identification Index",
  "300A0604": "Number of RT Control Points",
  "300A0605": "Referenced Radiation Generation Mode Index",
  "300A0606": "Treatment Position Index",
  "300A0607": "Referenced Device Index",
  "300A0608": "Treatment Position Group Label",
  "300A0609": "Treatment Position Group UID",
  "300A060A": "Treatment Position Group Sequence",
  "300A060B": "Referenced Treatment Position Index",
  "300A060C": "Referenced Radiation Dose Identification Index",
  "300A060D": "RT Accessory Holder Water-Equivalent Thickness",
  "300A060E": "Referenced RT Accessory Holder Device Index",
  "300A060F": "RT Accessory Holder Slot Existence Flag",
  "300A0610": "RT Accessory Holder Slot Sequence",
  "300A0611": "RT Accessory Holder Slot ID",
  "300A0612": "RT Accessory Holder Slot Distance",
  "300A0613": "RT Accessory Slot Distance",
  "300A0614": "RT Accessory Holder Definition Sequence",
  "300A0615": "RT Accessory Device Slot ID",
  "300A0616": "RT Radiation Sequence",
  "300A0617": "Radiation Dose Sequence",
  "300A0618": "Radiation Dose Identification Sequence",
  "300A0619": "Radiation Dose Identification Label",
  "300A061A": "Reference Dose Type",
  "300A061B": "Primary Dose Value Indicator",
  "300A061C": "Dose Values Sequence",
  "300A061D": "Dose Value Purpose",
  "300A061E": "Reference Dose Point Coordinates",
  "300A061F": "Radiation Dose Values Parameters Sequence",
  "300A0620": "Meterset to Dose Mapping Sequence",
  "300A0621": "Expected In-Vivo Measurement Values Sequence",
  "300A0622": "Expected In-Vivo Measurement Value Index",
  "300A0623": "Radiation Dose In-Vivo Measurement Label",
  "300A0624": "Radiation Dose Central Axis Displacement",
  "300A0625": "Radiation Dose Value",
  "300A0626": "Radiation Dose Source to Skin Distance",
  "300A0627": "Radiation Dose Measurement Point Coordinates",
  "300A0628": "Radiation Dose Source to External Contour Distance",
  "300A0629": "RT Tolerance Set Sequence",
  "300A062A": "RT Tolerance Set Label",
  "300A062B": "Attribute Tolerance Values Sequence",
  "300A062C": "Tolerance Value",
  "300A062D": "Patient Support Position Tolerance Sequence",
  "300A062E": "Treatment Time Limit",
  "300A062F": "C-Arm Photon-Electron Control Point Sequence",
  "300A0630": "Referenced RT Radiation Sequence",
  "300A0631": "Referenced RT Instance Sequence",
  "300A0632": "Referenced RT Patient Setup Sequence",
  "300A0634": "Source to Patient Surface Distance",
  "300A0635": "Treatment Machine Special Mode Code Sequence",
  "300A0636": "Intended Number of Fractions",
  "300A0637": "RT Radiation Set Intent",
  "300A0638": "RT Radiation Physical and Geometric Content Detail Flag",
  "300A0639": "RT Record Flag",
  "300A063A": "Treatment Device Identification Sequence",
  "300A063B": "Referenced RT Physician Intent Sequence",
  "300A063C": "Cumulative Meterset",
  "300A063D": "Delivery Rate",
  "300A063E": "Delivery Rate Unit Sequence",
  "300A063F": "Treatment Position Sequence",
  "300A0640": "Radiation Source-Axis Distance",
  "300A0641": "Number of RT Beam Limiting Devices",
  "300A0642": "RT Beam Limiting Device Proximal Distance",
  "300A0643": "RT Beam Limiting Device Distal Distance",
  "300A0644": "Parallel RT Beam Delimiter Device Orientation Label Code Sequence",
  "300A0645": "Beam Modifier Orientation Angle",
  "300A0646": "Fixed RT Beam Delimiter Device Sequence",
  "300A0647": "Parallel RT Beam Delimiter Device Sequence",
  "300A0648": "Number of Parallel RT Beam Delimiters",
  "300A0649": "Parallel RT Beam Delimiter Boundaries",
  "300A064A": "Parallel RT Beam Delimiter Positions",
  "300A064B": "RT Beam Limiting Device Offset",
  "300A064C": "RT Beam Delimiter Geometry Sequence",
  "300A064D": "RT Beam Limiting Device Definition Sequence",
  "300A064E": "Parallel RT Beam Delimiter Opening Mode",
  "300A064F": "Parallel RT Beam Delimiter Leaf Mounting Side",
  "300A0650": "Patient Setup UID",
  "300A0651": "Wedge Definition Sequence",
  "300A0652": "Radiation Beam Wedge Angle",
  "300A0653": "Radiation Beam Wedge Thin Edge Distance",
  "300A0654": "Radiation Beam Effective Wedge Angle",
  "300A0655": "Number of Wedge Positions",
  "300A0656": "RT Beam Limiting Device Opening Sequence",
  "300A0657": "Number of RT Beam Limiting Device Openings",
  "300A0658": "Radiation Dosimeter Unit Sequence",
  "300A0659": "RT Device Distance Reference Location Code Sequence",
  "300A065A": "Radiation Device Configuration and Commissioning Key Sequence",
  "300A065B": "Patient Support Position Parameter Sequence",
  "300A065C": "Patient Support Position Specification Method",
  "300A065D": "Patient Support Position Device Parameter Sequence",
  "300A065E": "Device Order Index",
  "300A065F": "Patient Support Position Parameter Order Index",
  "300A0660": "Patient Support Position Device Tolerance Sequence",
  "300A0661": "Patient Support Position Tolerance Order Index",
  "300A0662": "Compensator Definition Sequence",
  "300A0663": "Compensator Map Orientation",
  "300A0664": "Compensator Proximal Thickness Map",
  "300A0665": "Compensator Distal Thickness Map",
  "300A0666": "Compensator Base Plane Offset",
  "300A0667": "Compensator Shape Fabrication Code Sequence",
  "300A0668": "Compensator Shape Sequence",
  "300A0669": "Radiation Beam Compensator Milling Tool Diameter",
  "300A066A": "Block Definition Sequence",
  "300A066B": "Block Edge Data",
  "300A066C": "Block Orientation",
  "300A066D": "Radiation Beam Block Thickness",
  "300A066E": "Radiation Beam Block Slab Thickness",
  "300A066F": "Block Edge Data Sequence",
  "300A0670": "Number of RT Accessory Holders",
  "300A0671": "General Accessory Definition Sequence",
  "300A0672": "Number of General Accessories",
  "300A0673": "Bolus Definition Sequence",
  "300A0674": "Number of Boluses",
  "300A0675": "Equipment Frame of Reference UID",
  "300A0676": "Equipment Frame of Reference Description",
  "300A0677": "Equipment Reference Point Coordinates Sequence",
  "300A0678": "Equipment Reference Point Code Sequence",
  "300A0679": "RT Beam Limiting Device Angle",
  "300A067A": "Source Roll Angle",
  "300A067B": "Radiation GenerationMode Sequence",
  "300A067C": "Radiation GenerationMode Label",
  "300A067D": "Radiation GenerationMode Description",
  "300A067E": "Radiation GenerationMode Machine Code Sequence",
  "300A067F": "Radiation Type Code Sequence",
  "300A0680": "Nominal Energy",
  "300A0681": "Minimum Nominal Energy",
  "300A0682": "Maximum Nominal Energy",
  "300A0683": "Radiation Fluence Modifier Code Sequence",
  "300A0684": "Energy Unit Code Sequence",
  "300A0685": "Number of Radiation GenerationModes",
  "300A0686": "Patient Support Devices Sequence",
  "300A0687": "Number of Patient Support Devices",
  "300A0688": "RT Beam Modifier Definition Distance",
  "300A0689": "Beam Area Limit Sequence",
  "300A068A": "Referenced RT Prescription Sequence",
  "300A068B": "Dose Value Interpretation",
  "300A0700": "Treatment Session UID",
  "300A0701": "RT Radiation Usage",
  "300A0702": "Referenced RT Radiation Set Sequence",
  "300A0703": "Referenced RT Radiation Record Sequence",
  "300A0704": "RT Radiation Set Delivery Number",
  "300A0705": "Clinical Fraction Number",
  "300A0706": "RT Treatment Fraction Completion Status",
  "300A0707": "RT Radiation Set Usage",
  "300A0708": "Treatment Delivery Continuation Flag",
  "300A0709": "Treatment Record Content Origin",
  "300A0714": "RT Treatment Termination Status",
  "300A0715": "RT Treatment Termination Reason Code Sequence",
  "300A0716": "Machine-Specific Treatment Termination Code Sequence",
  "300A0722": "RT Radiation Salvage Record Control Point Sequence",
  "300A0723": "Starting Meterset Value Known Flag",
  "300A0730": "Treatment Termination Description",
  "300A0731": "Treatment Tolerance Violation Sequence",
  "300A0732": "Treatment Tolerance Violation Category",
  "300A0733": "Treatment Tolerance Violation Attribute Sequence",
  "300A0734": "Treatment Tolerance Violation Description",
  "300A0735": "Treatment Tolerance Violation Identification",
  "300A0736": "Treatment Tolerance Violation DateTime",
  "300A073A": "Recorded RT Control Point DateTime",
  "300A073B": "Referenced Radiation RT Control Point Index",
  "300A073E": "Alternate Value Sequence",
  "300A073F": "Confirmation Sequence",
  "300A0740": "Interlock Sequence",
  "300A0741": "Interlock DateTime",
  "300A0742": "Interlock Description",
  "300A0743": "Interlock Originating Device Sequence",
  "300A0744": "Interlock Code Sequence",
  "300A0745": "Interlock Resolution Code Sequence",
  "300A0746": "Interlock Resolution User Sequence",
  "300A0760": "Override DateTime",
  "300A0761": "Treatment Tolerance Violation Type Code Sequence",
  "300A0762": "Treatment Tolerance Violation Cause Code Sequence",
  "300A0772": "Measured Meterset to Dose Mapping Sequence",
  "300A0773": "Referenced Expected In-Vivo Measurement Value Index",
  "300A0774": "Dose Measurement Device Code Sequence",
  "300A0780": "Additional Parameter Recording Instance Sequence",
  "300A0783": "Interlock Origin Description",
  "300A0784": "RT Patient Position Scope Sequence",
  "300A0785": "Referenced Treatment Position Group UID",
  "300A0786": "Radiation Order Index",
  "300A0787": "Omitted Radiation Sequence",
  "300A0788": "Reason for Omission Code Sequence",
  "300A0789": "RT Delivery Start Patient Position Sequence",
  "300A078A": "RT Treatment Preparation Patient Position Sequence",
  "300A078B": "Referenced RT Treatment Preparation Sequence",
  "300A078C": "Referenced Patient Setup Photo Sequence",
  "300A078D": "Patient Treatment Preparation Method Code Sequence",
  "300A078E": "Patient Treatment Preparation Procedure Parameter Description",
  "300A078F": "Patient Treatment Preparation Device Sequence",
  "300A0790": "Patient Treatment Preparation Procedure Sequence ",
  "300A0791": "Patient Treatment Preparation Procedure Code Sequence",
  "300A0792": "Patient Treatment Preparation Method Description",
  "300A0793": "Patient Treatment Preparation Procedure Parameter Sequence",
  "300A0794": "Patient Setup Photo Description",
  "300A0795": "Patient Treatment Preparation Procedure Index",
  "300A0796": "Referenced Patient Setup Procedure Index",
  "300A0797": "RT Radiation Task Sequence",
  "300A0798": "RT Patient Position Displacement Sequence",
  "300A0799": "RT Patient Position Sequence",
  "300A079A": "Displacement Reference Label",
  "300A079B": "Displacement Matrix",
  "300A079C": "Patient Support Displacement Sequence",
  "300A079D": "Displacement Reference Location Code Sequence",
  "300A079E": "RT Radiation Set Delivery Usage",
  "300A079F": "Patient Treatment Preparation Sequence",
  "300A07A0": "Patient to Equipment Relationship Sequence",
  "300A07A1": "Imaging Equipment to Treatment Delivery Device Relationship Sequence",
  "300C0002": "Referenced RT Plan Sequence",
  "300C0004": "Referenced Beam Sequence",
  "300C0006": "Referenced Beam Number",
  "300C0007": "Referenced Reference Image Number",
  "300C0008": "Start Cumulative Meterset Weight",
  "300C0009": "End Cumulative Meterset Weight",
  "300C000A": "Referenced Brachy Application Setup Sequence",
  "300C000C": "Referenced Brachy Application Setup Number",
  "300C000E": "Referenced Source Number",
  "300C0020": "Referenced Fraction Group Sequence",
  "300C0022": "Referenced Fraction Group Number",
  "300C0040": "Referenced Verification Image Sequence",
  "300C0042": "Referenced Reference Image Sequence",
  "300C0050": "Referenced Dose Reference Sequence",
  "300C0051": "Referenced Dose Reference Number",
  "300C0055": "Brachy Referenced Dose Reference Sequence",
  "300C0060": "Referenced Structure Set Sequence",
  "300C006A": "Referenced Patient Setup Number",
  "300C0080": "Referenced Dose Sequence",
  "300C00A0": "Referenced Tolerance Table Number",
  "300C00B0": "Referenced Bolus Sequence",
  "300C00C0": "Referenced Wedge Number",
  "300C00D0": "Referenced Compensator Number",
  "300C00E0": "Referenced Block Number",
  "300C00F0": "Referenced Control Point Index",
  "300C00F2": "Referenced Control Point Sequence",
  "300C00F4": "Referenced Start Control Point Index",
  "300C00F6": "Referenced Stop Control Point Index",
  "300C0100": "Referenced Range Shifter Number",
  "300C0102": "Referenced Lateral Spreading Device Number",
  "300C0104": "Referenced Range Modulator Number",
  "300C0111": "Omitted Beam Task Sequence",
  "300C0112": "Reason for Omission",
  "300C0113": "Reason for Omission Description",
  "300C0114": "Prescription Overview Sequence",
  "300C0115": "Total Prescription Dose",
  "300C0116": "Plan Overview Sequence",
  "300C0117": "Plan Overview Index",
  "300C0118": "Referenced Plan Overview Index",
  "300C0119": "Number of Fractions Included",
  "300C0120": "Dose Calibration Conditions Sequence",
  "300C0121": "Absorbed Dose to Meterset Ratio",
  "300C0122": "Delineated Radiation Field Size",
  "300C0123": "Dose Calibration Conditions Verified Flag",
  "300C0124": "Calibration Reference Point Depth",
  "300C0125": "Gating Beam Hold Transition Sequence",
  "300C0126": "Beam Hold Transition",
  "300C0127": "Beam Hold Transition DateTime",
  "300C0128": "Beam Hold Originating Device Sequence",
  "300C0129": "Beam Hold Transition Trigger Source",
  "300E0002": "Approval Status",
  "300E0004": "Review Date",
  "300E0005": "Review Time",
  "300E0008": "Reviewer Name",
  "30100001": "Radiobiological Dose Effect Sequence",
  "30100002": "Radiobiological Dose Effect Flag",
  "30100003": "Effective Dose Calculation Method Category Code Sequence",
  "30100004": "Effective Dose Calculation Method Code Sequence",
  "30100005": "Effective Dose Calculation Method Description",
  "30100006": "Conceptual Volume UID",
  "30100007": "Originating SOP Instance Reference Sequence",
  "30100008": "Conceptual Volume Constituent Sequence",
  "30100009": "Equivalent Conceptual Volume Instance Reference Sequence",
  "3010000A": "Equivalent Conceptual Volumes Sequence",
  "3010000B": "Referenced Conceptual Volume UID",
  "3010000C": "Conceptual Volume Combination Expression",
  "3010000D": "Conceptual Volume Constituent Index",
  "3010000E": "Conceptual Volume Combination Flag",
  "3010000F": "Conceptual Volume Combination Description",
  "30100010": "Conceptual Volume Segmentation Defined Flag",
  "30100011": "Conceptual Volume Segmentation Reference Sequence",
  "30100012": "Conceptual Volume Constituent Segmentation Reference Sequence",
  "30100013": "Constituent Conceptual Volume UID",
  "30100014": "Derivation Conceptual Volume Sequence",
  "30100015": "Source Conceptual Volume UID",
  "30100016": "Conceptual Volume Derivation Algorithm Sequence",
  "30100017": "Conceptual Volume Description",
  "30100018": "Source Conceptual Volume Sequence",
  "30100019": "Author Identification Sequence",
  "3010001A": "Manufacturer's Model Version",
  "3010001B": "Device Alternate Identifier",
  "3010001C": "Device Alternate Identifier Type",
  "3010001D": "Device Alternate Identifier Format",
  "3010001E": "Segmentation Creation Template Label",
  "3010001F": "Segmentation Template UID",
  "30100020": "Referenced Segment Reference Index",
  "30100021": "Segment Reference Sequence",
  "30100022": "Segment Reference Index",
  "30100023": "Direct Segment Reference Sequence",
  "30100024": "Combination Segment Reference Sequence",
  "30100025": "Conceptual Volume Sequence",
  "30100026": "Segmented RT Accessory Device Sequence",
  "30100027": "Segment Characteristics Sequence",
  "30100028": "Related Segment Characteristics Sequence",
  "30100029": "Segment Characteristics Precedence",
  "3010002A": "RT Segment Annotation Sequence",
  "3010002B": "Segment Annotation Category Code Sequence",
  "3010002C": "Segment Annotation Type Code Sequence",
  "3010002D": "Device Label",
  "3010002E": "Device Type Code Sequence",
  "3010002F": "Segment Annotation Type Modifier Code Sequence",
  "30100030": "Patient Equipment Relationship Code Sequence",
  "30100031": "Referenced Fiducials UID",
  "30100032": "Patient Treatment Orientation Sequence",
  "30100033": "User Content Label",
  "30100034": "User Content Long Label",
  "30100035": "Entity Label",
  "30100036": "Entity Name",
  "30100037": "Entity Description",
  "30100038": "Entity Long Label",
  "30100039": "Device Index",
  "3010003A": "RT Treatment Phase Index",
  "3010003B": "RT Treatment Phase UID",
  "3010003C": "RT Prescription Index",
  "3010003D": "RT Segment Annotation Index",
  "3010003E": "Basis RT Treatment Phase Index",
  "3010003F": "Related RT Treatment Phase Index",
  "30100040": "Referenced RT Treatment Phase Index",
  "30100041": "Referenced RT Prescription Index",
  "30100042": "Referenced Parent RT Prescription Index",
  "30100043": "Manufacturer's Device Identifier",
  "30100044": "Instance-Level Referenced Performed Procedure Step Sequence",
  "30100045": "RT Treatment Phase Intent Presence Flag",
  "30100046": "Radiotherapy Treatment Type",
  "30100047": "Teletherapy Radiation Type",
  "30100048": "Brachytherapy Source Type",
  "30100049": "Referenced RT Treatment Phase Sequence",
  "3010004A": "Referenced Direct Segment Instance Sequence",
  "3010004B": "Intended RT Treatment Phase Sequence",
  "3010004C": "Intended Phase Start Date",
  "3010004D": "Intended Phase End Date",
  "3010004E": "RT Treatment Phase Interval Sequence",
  "3010004F": "Temporal Relationship Interval Anchor",
  "30100050": "Minimum Number of Interval Days",
  "30100051": "Maximum Number of Interval Days",
  "30100052": "Pertinent SOP Classes in Study",
  "30100053": "Pertinent SOP Classes in Series",
  "30100054": "RT Prescription Label",
  "30100055": "RT Physician Intent Predecessor Sequence",
  "30100056": "RT Treatment Approach Label",
  "30100057": "RT Physician Intent Sequence",
  "30100058": "RT Physician Intent Index",
  "30100059": "RT Treatment Intent Type",
  "3010005A": "RT Physician Intent Narrative",
  "3010005B": "RT Protocol Code Sequence",
  "3010005C": "Reason for Superseding",
  "3010005D": "RT Diagnosis Code Sequence",
  "3010005E": "Referenced RT Physician Intent Index",
  "3010005F": "RT Physician Intent Input Instance Sequence",
  "30100060": "RT Anatomic Prescription Sequence",
  "30100061": "Prior Treatment Dose Description",
  "30100062": "Prior Treatment Reference Sequence",
  "30100063": "Dosimetric Objective Evaluation Scope",
  "30100064": "Therapeutic Role Category Code Sequence",
  "30100065": "Therapeutic Role Type Code Sequence",
  "30100066": "Conceptual Volume Optimization Precedence",
  "30100067": "Conceptual Volume Category Code Sequence",
  "30100068": "Conceptual Volume Blocking Constraint",
  "30100069": "Conceptual Volume Type Code Sequence",
  "3010006A": "Conceptual Volume Type Modifier Code Sequence",
  "3010006B": "RT Prescription Sequence",
  "3010006C": "Dosimetric Objective Sequence",
  "3010006D": "Dosimetric Objective Type Code Sequence",
  "3010006E": "Dosimetric Objective UID",
  "3010006F": "Referenced Dosimetric Objective UID",
  "30100070": "Dosimetric Objective Parameter Sequence",
  "30100071": "Referenced Dosimetric Objectives Sequence",
  "30100073": "Absolute Dosimetric Objective Flag",
  "30100074": "Dosimetric Objective Weight",
  "30100075": "Dosimetric Objective Purpose",
  "30100076": "Planning Input Information Sequence",
  "30100077": "Treatment Site",
  "30100078": "Treatment Site Code Sequence",
  "30100079": "Fraction Pattern Sequence",
  "3010007A": "Treatment Technique Notes",
  "3010007B": "Prescription Notes",
  "3010007C": "Number of Interval Fractions",
  "3010007D": "Number of Fractions",
  "3010007E": "Intended Delivery Duration",
  "3010007F": "Fractionation Notes",
  "30100080": "RT Treatment Technique Code Sequence",
  "30100081": "Prescription Notes Sequence",
  "30100082": "Fraction-Based Relationship Sequence",
  "30100083": "Fraction-Based Relationship Interval Anchor",
  "30100084": "Minimum Hours between Fractions",
  "30100085": "Intended Fraction Start Time",
  "30100086": "Intended Start Day of Week",
  "30100087": "Weekday Fraction Pattern Sequence",
  "30100088": "Delivery Time Structure Code Sequence",
  "30100089": "Treatment Site Modifier Code Sequence",
  "30100090": "Robotic Base Location Indicator",
  "30100091": "Robotic Path Node Set Code Sequence",
  "30100092": "Robotic Node Identifier",
  "30100093": "RT Treatment Source Coordinates",
  "30100094": "Radiation Source Coordinate SystemYaw Angle",
  "30100095": "Radiation Source Coordinate SystemRoll Angle",
  "30100096": "Radiation Source Coordinate System Pitch Angle",
  "30100097": "Robotic Path Control Point Sequence",
  "30100098": "Tomotherapeutic Control Point Sequence",
  "30100099": "Tomotherapeutic Leaf Open Durations",
  "3010009A": "Tomotherapeutic Leaf Initial Closed Durations",
  "301000A0": "Conceptual Volume Identification Sequence",
  "40000010": "Arbitrary",
  "40004000": "Text Comments",
  "40080040": "Results ID",
  "40080042": "Results ID Issuer",
  "40080050": "Referenced Interpretation Sequence",
  "400800FF": "Report Production Status (Trial)",
  "40080100": "Interpretation Recorded Date",
  "40080101": "Interpretation Recorded Time",
  "40080102": "Interpretation Recorder",
  "40080103": "Reference to Recorded Sound",
  "40080108": "Interpretation Transcription Date",
  "40080109": "Interpretation Transcription Time",
  "4008010A": "Interpretation Transcriber",
  "4008010B": "Interpretation Text",
  "4008010C": "Interpretation Author",
  "40080111": "Interpretation Approver Sequence",
  "40080112": "Interpretation Approval Date",
  "40080113": "Interpretation Approval Time",
  "40080114": "Physician Approving Interpretation",
  "40080115": "Interpretation Diagnosis Description",
  "40080117": "Interpretation Diagnosis Code Sequence",
  "40080118": "Results Distribution List Sequence",
  "40080119": "Distribution Name",
  "4008011A": "Distribution Address",
  "40080200": "Interpretation ID",
  "40080202": "Interpretation ID Issuer",
  "40080210": "Interpretation Type ID",
  "40080212": "Interpretation Status ID",
  "40080300": "Impressions",
  "40084000": "Results Comments",
  "40100001": "Low Energy Detectors",
  "40100002": "High Energy Detectors",
  "40100004": "Detector Geometry Sequence",
  "40101001": "Threat ROI Voxel Sequence",
  "40101004": "Threat ROI Base",
  "40101005": "Threat ROI Extents",
  "40101006": "Threat ROI Bitmap",
  "40101007": "Route Segment ID",
  "40101008": "Gantry Type",
  "40101009": "OOI Owner Type",
  "4010100A": "Route Segment Sequence",
  "40101010": "Potential Threat Object ID",
  "40101011": "Threat Sequence",
  "40101012": "Threat Category",
  "40101013": "Threat Category Description",
  "40101014": "ATD Ability Assessment",
  "40101015": "ATD Assessment Flag",
  "40101016": "ATD Assessment Probability",
  "40101017": "Mass",
  "40101018": "Density",
  "40101019": "Z Effective",
  "4010101A": "Boarding Pass ID",
  "4010101B": "Center of Mass",
  "4010101C": "Center of PTO",
  "4010101D": "Bounding Polygon",
  "4010101E": "Route Segment Start Location ID",
  "4010101F": "Route Segment End Location ID",
  "40101020": "Route Segment Location ID Type",
  "40101021": "Abort Reason",
  "40101023": "Volume of PTO",
  "40101024": "Abort Flag",
  "40101025": "Route Segment Start Time",
  "40101026": "Route Segment End Time",
  "40101027": "TDR Type",
  "40101028": "International Route Segment",
  "40101029": "Threat Detection Algorithm and Version",
  "4010102A": "Assigned Location",
  "4010102B": "Alarm Decision Time",
  "40101031": "Alarm Decision",
  "40101033": "Number of Total Objects",
  "40101034": "Number of Alarm Objects",
  "40101037": "PTO Representation Sequence",
  "40101038": "ATD Assessment Sequence",
  "40101039": "TIP Type",
  "4010103A": "DICOS Version",
  "40101041": "OOI Owner Creation Time",
  "40101042": "OOI Type",
  "40101043": "OOI Size",
  "40101044": "Acquisition Status",
  "40101045": "Basis Materials Code Sequence",
  "40101046": "Phantom Type",
  "40101047": "OOI Owner Sequence",
  "40101048": "Scan Type",
  "40101051": "Itinerary ID",
  "40101052": "Itinerary ID Type",
  "40101053": "Itinerary ID Assigning Authority",
  "40101054": "Route ID",
  "40101055": "Route ID Assigning Authority",
  "40101056": "Inbound Arrival Type",
  "40101058": "Carrier ID",
  "40101059": "Carrier ID Assigning Authority",
  "40101060": "Source Orientation",
  "40101061": "Source Position",
  "40101062": "Belt Height",
  "40101064": "Algorithm Routing Code Sequence",
  "40101067": "Transport Classification",
  "40101068": "OOI Type Descriptor",
  "40101069": "Total Processing Time",
  "4010106C": "Detector Calibration Data",
  "4010106D": "Additional Screening Performed",
  "4010106E": "Additional Inspection Selection Criteria",
  "4010106F": "Additional Inspection Method Sequence",
  "40101070": "AIT Device Type",
  "40101071": "QR Measurements Sequence",
  "40101072": "Target Material Sequence",
  "40101073": "SNR Threshold",
  "40101075": "Image Scale Representation",
  "40101076": "Referenced PTO Sequence",
  "40101077": "Referenced TDR Instance Sequence",
  "40101078": "PTO Location Description",
  "40101079": "Anomaly Locator Indicator Sequence",
  "4010107A": "Anomaly Locator Indicator",
  "4010107B": "PTO Region Sequence",
  "4010107C": "Inspection Selection Criteria",
  "4010107D": "Secondary Inspection Method Sequence",
  "4010107E": "PRCS to RCS Orientation",
  "4FFE0001": "MAC Parameters Sequence",
  "50xx0005": "Curve Dimensions",
  "50xx0010": "Number of Points",
  "50xx0020": "Type of Data",
  "50xx0022": "Curve Description",
  "50xx0030": "Axis Units",
  "50xx0040": "Axis Labels",
  "50xx0103": "Data Value Representation",
  "50xx0104": "Minimum Coordinate Value",
  "50xx0105": "Maximum Coordinate Value",
  "50xx0106": "Curve Range",
  "50xx0110": "Curve Data Descriptor",
  "50xx0112": "Coordinate Start Value",
  "50xx0114": "Coordinate Step Value",
  "50xx1001": "Curve Activation Layer",
  "50xx2000": "Audio Type",
  "50xx2002": "Audio Sample Format",
  "50xx2004": "Number of Channels",
  "50xx2006": "Number of Samples",
  "50xx2008": "Sample Rate",
  "50xx200A": "Total Time",
  "50xx200C": "Audio Sample Data",
  "50xx200E": "Audio Comments",
  "50xx2500": "Curve Label",
  "50xx2600": "Curve Referenced Overlay Sequence",
  "50xx2610": "Curve Referenced Overlay Group",
  "50xx3000": "Curve Data",
  "52009229": "Shared Functional Groups Sequence",
  "52009230": "Per-Frame Functional Groups Sequence",
  "54000100": "Waveform Sequence",
  "54000110": "Channel Minimum Value",
  "54000112": "Channel Maximum Value",
  "54001004": "Waveform Bits Allocated",
  "54001006": "Waveform Sample Interpretation",
  "5400100A": "Waveform Padding Value",
  "54001010": "Waveform Data",
  "56000010": "First Order Phase Correction Angle",
  "56000020": "Spectroscopy Data",
  "60xx0010": "Overlay Rows",
  "60xx0011": "Overlay Columns",
  "60xx0012": "Overlay Planes",
  "60xx0015": "Number of Frames in Overlay",
  "60xx0022": "Overlay Description",
  "60xx0040": "Overlay Type",
  "60xx0045": "Overlay Subtype",
  "60xx0050": "Overlay Origin",
  "60xx0051": "Image Frame Origin",
  "60xx0052": "Overlay Plane Origin",
  "60xx0060": "Overlay Compression Code",
  "60xx0061": "Overlay Compression Originator",
  "60xx0062": "Overlay Compression Label",
  "60xx0063": "Overlay Compression Description",
  "60xx0066": "Overlay Compression Step Pointers",
  "60xx0068": "Overlay Repeat Interval",
  "60xx0069": "Overlay Bits Grouped",
  "60xx0100": "Overlay Bits Allocated",
  "60xx0102": "Overlay Bit Position",
  "60xx0110": "Overlay Format",
  "60xx0200": "Overlay Location",
  "60xx0800": "Overlay Code Label",
  "60xx0802": "Overlay Number of Tables",
  "60xx0803": "Overlay Code Table Location",
  "60xx0804": "Overlay Bits For Code Word",
  "60xx1001": "Overlay Activation Layer",
  "60xx1100": "Overlay Descriptor - Gray",
  "60xx1101": "Overlay Descriptor - Red",
  "60xx1102": "Overlay Descriptor - Green",
  "60xx1103": "Overlay Descriptor - Blue",
  "60xx1200": "Overlays - Gray",
  "60xx1201": "Overlays - Red",
  "60xx1202": "Overlays - Green",
  "60xx1203": "Overlays - Blue",
  "60xx1301": "ROI Area",
  "60xx1302": "ROI Mean",
  "60xx1303": "ROI Standard Deviation",
  "60xx1500": "Overlay Label",
  "60xx3000": "Overlay Data",
  "60xx4000": "Overlay Comments",
  "7FE00001": "Extended Offset Table",
  "7FE00002": "Extended Offset Table Lengths",
  "7FE00003": "Encapsulated Pixel Data Value Total Length",
  "7FE00008": "Float Pixel Data",
  "7FE00009": "Double Float Pixel Data",
  "7FE00010": "Pixel Data",
  "7FE00020": "Coefficients SDVN",
  "7FE00030": "Coefficients SDHN",
  "7FE00040": "Coefficients SDDN",
  "7Fxx0010": "Variable Pixel Data",
  "7Fxx0011": "Variable Next Data Group",
  "7Fxx0020": "Variable Coefficients SDVN",
  "7Fxx0030": "Variable Coefficients SDHN",
  "7Fxx0040": "Variable Coefficients SDDN",
  "FFFAFFFA": "Digital Signatures Sequence",
  "FFFCFFFC": "Data Set Trailing Padding",
  "FFFEE000": "Item",
  "FFFEE00D": "Item Delimitation Item",
  "FFFEE0DD": "Sequence Delimitation Item"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DCM4CHEE Archive 5",
  "7777xx10": "Patient Create Date Time",
  "7777xx11": "Patient Update Date Time",
  "7777xx12": "Patient Verification Date Time",
  "7777xx13": "Patient Verification Status",
  "7777xx14": "Failed Verifications of Patient",
  "7777xx15": "Dominant Patient Sequence",
  "7777xx16": "Logical Patient ID",
  "7777xx20": "Study Receive Date Time",
  "7777xx21": "Study Update Date Time",
  "7777xx22": "Study Access Date Time",
  "7777xx23": "Study Expiration Date",
  "7777xx24": "Study Rejection State",
  "7777xx25": "Study Completeness",
  "7777xx26": "Failed Retrieves of Study",
  "7777xx27": "Study Access Control ID",
  "7777xx28": "Storage IDs of Study",
  "7777xx29": "Study Size in KB",
  "7777xx2A": "Study Size Bytes",
  "7777xx2B": "Study Expiration State",
  "7777xx2C": "Study Expiration Exporter ID",
  "7777xx2D": "Study Modified Date Time",
  "7777xx30": "Series Receive Date Time",
  "7777xx31": "Series Update Date Time",
  "7777xx33": "Series Expiration Date",
  "7777xx34": "Series Rejection State",
  "7777xx35": "Series Completeness",
  "7777xx36": "Failed Retrieves of Series",
  "7777xx37": "Sending Application Entity Title of Series",
  "7777xx38": "Scheduled Metadata Update Date Time of Series",
  "7777xx39": "Scheduled Instance Record Purge Date Time of Series",
  "7777xx3A": "Instance Record Purge State of Series",
  "7777xx3B": "Series Metadata Storage ID",
  "7777xx3C": "Series Metadata Storage Path",
  "7777xx3D": "Series Metadata Storage Object Size",
  "7777xx3E": "Series Metadata Storage Object Digest",
  "7777xx3F": "Series Metadata Storage Object Status",
  "7777xx40": "Instance Receive Date Time",
  "7777xx41": "Instance Update Date Time",
  "7777xx42": "Rejection Code Sequence",
  "7777xx43": "Instance External Retrieve AE Title",
  "7777xx44": "Series External Retrieve AE Title",
  "7777xx45": "Study External Retrieve AE Title",
  "7777xx46": "Series Access Control ID",
  "7777xx50": "Storage ID",
  "7777xx51": "Storage Path",
  "7777xx52": "Storage Transfer Syntax UID",
  "7777xx53": "Storage Object Size",
  "7777xx54": "Storage Object Digest",
  "7777xx55": "Other Storage Sequence",
  "7777xx56": "Storage Object Status",
  "7777xx57": "Storage Object Multi-Reference",
  "7777xx60": "Scheduled Storage Verification Date Time of Series",
  "7777xx61": "Failures of last Storage Verification of Series",
  "7777xx62": "Scheduled Compression Date Time of Series",
  "7777xx63": "Failures of last Compression of Series",
  "7777xx64": "Series Expiration State",
  "7777xx65": "Series Expiration Exporter ID",
  "7777xx66": "Series Metadata Creation Date Time",
  "7777xx67": "Series Metadata Update Failures",
  "7777xx68": "Receiving Application Entity Title of Series",
  "7777xx69": "Sending Presentation Address of Series",
  "7777xx6A": "Receiving Presentation Address of Series",
  "7777xx6B": "Sending HL7 Application of Series",
  "7777xx6C": "Sending HL7 Facility of Series",
  "7777xx6D": "Receiving HL7 Application of Series",
  "7777xx6E": "Receiving HL7 Facility of Series",
  "7777xx6F": "Series Modified Date Time",
  "7777xx70": "MPPS Create Date Time",
  "7777xx71": "MPPS Update Date Time",
  "7777xxE0": "X-Road Person Status",
  "7777xxE1": "X-Road Data Status"
});
var DCM4CHE = DCM4CHE || {};
DCM4CHE.SOPClass = /* @__PURE__ */ function(dictionary) {
  var nameOf = function(uid) {
    if (uid === "all") {
      return dictionary;
    } else {
      return dictionary[uid] || uid;
    }
  };
  return {
    nameOf
  };
}({
  "1.2.840.10008.1.1": "Verification SOP Class",
  "1.2.840.10008.1.3.10": "Media Storage Directory Storage",
  "1.2.840.10008.1.9": "Basic Study Content Notification SOP Class (Retired)",
  "1.2.840.10008.1.20.1": "Storage Commitment Push Model SOP Class",
  "1.2.840.10008.1.20.2": "Storage Commitment Pull Model SOP Class (Retired)",
  "1.2.840.10008.1.40": "Procedural Event Logging SOP Class",
  "1.2.840.10008.1.42": "Substance Administration Logging SOP Class",
  "1.2.840.10008.3.1.2.1.1": "Detached Patient Management SOP Class (Retired)",
  "1.2.840.10008.3.1.2.2.1": "Detached Visit Management SOP Class (Retired)",
  "1.2.840.10008.3.1.2.3.1": "Detached Study Management SOP Class (Retired)",
  "1.2.840.10008.3.1.2.3.2": "Study Component Management SOP Class (Retired)",
  "1.2.840.10008.3.1.2.3.3": "Modality Performed Procedure Step SOP Class",
  "1.2.840.10008.3.1.2.3.4": "Modality Performed Procedure Step Retrieve SOP Class",
  "1.2.840.10008.3.1.2.3.5": "Modality Performed Procedure Step Notification SOP Class",
  "1.2.840.10008.3.1.2.5.1": "Detached Results Management SOP Class (Retired)",
  "1.2.840.10008.3.1.2.6.1": "Detached Interpretation Management SOP Class (Retired)",
  "1.2.840.10008.5.1.1.1": "Basic Film Session SOP Class",
  "1.2.840.10008.5.1.1.2": "Basic Film Box SOP Class",
  "1.2.840.10008.5.1.1.4": "Basic Grayscale Image Box SOP Class",
  "1.2.840.10008.5.1.1.4.1": "Basic Color Image Box SOP Class",
  "1.2.840.10008.5.1.1.4.2": "Referenced Image Box SOP Class (Retired)",
  "1.2.840.10008.5.1.1.14": "Print Job SOP Class",
  "1.2.840.10008.5.1.1.15": "Basic Annotation Box SOP Class",
  "1.2.840.10008.5.1.1.16": "Printer SOP Class",
  "1.2.840.10008.5.1.1.16.376": "Printer Configuration Retrieval SOP Class",
  "1.2.840.10008.5.1.1.22": "VOI LUT Box SOP Class",
  "1.2.840.10008.5.1.1.23": "Presentation LUT SOP Class",
  "1.2.840.10008.5.1.1.24": "Image Overlay Box SOP Class (Retired)",
  "1.2.840.10008.5.1.1.24.1": "Basic Print Image Overlay Box SOP Class (Retired)",
  "1.2.840.10008.5.1.1.26": "Print Queue Management SOP Class (Retired)",
  "1.2.840.10008.5.1.1.27": "Stored Print Storage SOP Class (Retired)",
  "1.2.840.10008.5.1.1.29": "Hardcopy Grayscale Image Storage SOP Class (Retired)",
  "1.2.840.10008.5.1.1.30": "Hardcopy Color Image Storage SOP Class (Retired)",
  "1.2.840.10008.5.1.1.31": "Pull Print Request SOP Class (Retired)",
  "1.2.840.10008.5.1.1.33": "Media Creation Management SOP Class UID",
  "1.2.840.10008.5.1.1.40": "Display System SOP Class",
  "1.2.840.10008.5.1.4.1.1.1": "Computed Radiography Image Storage",
  "1.2.840.10008.5.1.4.1.1.1.1": "Digital X-Ray Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.1.1.1": "Digital X-Ray Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.1.2": "Digital Mammography X-Ray Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.1.2.1": "Digital Mammography X-Ray Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.1.3": "Digital Intra-Oral X-Ray Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.1.3.1": "Digital Intra-Oral X-Ray Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.2": "CT Image Storage",
  "1.2.840.10008.5.1.4.1.1.2.1": "Enhanced CT Image Storage",
  "1.2.840.10008.5.1.4.1.1.2.2": "Legacy Converted Enhanced CT Image Storage",
  "1.2.840.10008.5.1.4.1.1.3": "Ultrasound Multi-frame Image Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.3.1": "Ultrasound Multi-frame Image Storage",
  "1.2.840.10008.5.1.4.1.1.4": "MR Image Storage",
  "1.2.840.10008.5.1.4.1.1.4.1": "Enhanced MR Image Storage",
  "1.2.840.10008.5.1.4.1.1.4.2": "MR Spectroscopy Storage",
  "1.2.840.10008.5.1.4.1.1.4.3": "Enhanced MR Color Image Storage",
  "1.2.840.10008.5.1.4.1.1.4.4": "Legacy Converted Enhanced MR Image Storage",
  "1.2.840.10008.5.1.4.1.1.5": "Nuclear Medicine Image Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.6": "Ultrasound Image Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.6.1": "Ultrasound Image Storage",
  "1.2.840.10008.5.1.4.1.1.6.2": "Enhanced US Volume Storage",
  "1.2.840.10008.5.1.4.1.1.6.3": "Photoacoustic Image Storage",
  "1.2.840.10008.5.1.4.1.1.7": "Secondary Capture Image Storage",
  "1.2.840.10008.5.1.4.1.1.7.1": "Multi-frame Single Bit Secondary Capture Image Storage",
  "1.2.840.10008.5.1.4.1.1.7.2": "Multi-frame Grayscale Byte Secondary Capture Image Storage",
  "1.2.840.10008.5.1.4.1.1.7.3": "Multi-frame Grayscale Word Secondary Capture Image Storage",
  "1.2.840.10008.5.1.4.1.1.7.4": "Multi-frame True Color Secondary Capture Image Storage",
  "1.2.840.10008.5.1.4.1.1.8": "Standalone Overlay Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.9": "Standalone Curve Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.9.1": "Waveform Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.9.1.1": "12-lead ECG Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.1.2": "General ECG Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.1.3": "Ambulatory ECG Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.1.4": "General 32-bit ECG Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.2.1": "Hemodynamic Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.3.1": "Cardiac Electrophysiology Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.4.1": "Basic Voice Audio Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.4.2": "General Audio Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.5.1": "Arterial Pulse Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.6.1": "Respiratory Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.6.2": "Multi-channel Respiratory Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.7.1": "Routine Scalp Electroencephalogram Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.7.2": "Electromyogram Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.7.3": "Electrooculogram Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.7.4": "Sleep Electroencephalogram Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.8.1": "Body Position Waveform Storage",
  "1.2.840.10008.5.1.4.1.1.9.100.1": "Waveform Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.9.100.2": "Waveform Acquisition Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.10": "Standalone Modality LUT Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.11": "Standalone VOI LUT Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.11.1": "Grayscale Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.2": "Color Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.3": "Pseudo-Color Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.4": "Blending Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.5": "XA/XRF Grayscale Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.6": "Grayscale Planar MPR Volumetric Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.7": "Compositing Planar MPR Volumetric Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.8": "Advanced Blending Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.9": "Volume Rendering Volumetric Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.10": "Segmented Volume Rendering Volumetric Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.11": "Multiple Volume Rendering Volumetric Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.11.12": "Variable Modality LUT Softcopy Presentation State Storage",
  "1.2.840.10008.5.1.4.1.1.12.1": "X-Ray Angiographic Image Storage",
  "1.2.840.10008.5.1.4.1.1.12.1.1": "Enhanced XA Image Storage",
  "1.2.840.10008.5.1.4.1.1.12.2": "X-Ray Radiofluoroscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.12.2.1": "Enhanced XRF Image Storage",
  "1.2.840.10008.5.1.4.1.1.12.3": "X-Ray Angiographic Bi-Plane Image Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.12.77": "Zeiss OPT File (Retired)",
  "1.2.840.10008.5.1.4.1.1.13.1.1": "X-Ray 3D Angiographic Image Storage",
  "1.2.840.10008.5.1.4.1.1.13.1.2": "X-Ray 3D Craniofacial Image Storage",
  "1.2.840.10008.5.1.4.1.1.13.1.3": "Breast Tomosynthesis Image Storage",
  "1.2.840.10008.5.1.4.1.1.13.1.4": "Breast Projection X-Ray Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.13.1.5": "Breast Projection X-Ray Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.14.1": "Intravascular Optical Coherence Tomography Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.14.2": "Intravascular Optical Coherence Tomography Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.20": "Nuclear Medicine Image Storage",
  "1.2.840.10008.5.1.4.1.1.30": "Parametric Map Storage",
  "1.2.840.10008.5.1.4.1.1.40": "MR Image Storage Zero Padded (Retired)",
  "1.2.840.10008.5.1.4.1.1.66": "Raw Data Storage",
  "1.2.840.10008.5.1.4.1.1.66.1": "Spatial Registration Storage",
  "1.2.840.10008.5.1.4.1.1.66.2": "Spatial Fiducials Storage",
  "1.2.840.10008.5.1.4.1.1.66.3": "Deformable Spatial Registration Storage",
  "1.2.840.10008.5.1.4.1.1.66.4": "Segmentation Storage",
  "1.2.840.10008.5.1.4.1.1.66.5": "Surface Segmentation Storage",
  "1.2.840.10008.5.1.4.1.1.66.6": "Tractography Results Storage",
  "1.2.840.10008.5.1.4.1.1.66.7": "Label Map Segmentation Storage",
  "1.2.840.10008.5.1.4.1.1.66.8": "Height Map Segmentation Storage",
  "1.2.840.10008.5.1.4.1.1.67": "Real World Value Mapping Storage",
  "1.2.840.10008.5.1.4.1.1.68.1": "Surface Scan Mesh Storage",
  "1.2.840.10008.5.1.4.1.1.68.2": "Surface Scan Point Cloud Storage",
  "1.2.840.10008.5.1.4.1.1.77.1": "VL Image Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.77.2": "VL Multi-frame Image Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.77.1.1": "VL Endoscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.1.1": "Video Endoscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.2": "VL Microscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.2.1": "Video Microscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.3": "VL Slide-Coordinates Microscopic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.4": "VL Photographic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.4.1": "Video Photographic Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.1": "Ophthalmic Photography 8 Bit Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.2": "Ophthalmic Photography 16 Bit Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.3": "Stereometric Relationship Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.4": "Ophthalmic Tomography Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.5": "Wide Field Ophthalmic Photography Stereographic Projection Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.6": "Wide Field Ophthalmic Photography 3D Coordinates Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.7": "Ophthalmic Optical Coherence Tomography En Face Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.5.8": "Ophthalmic Optical Coherence Tomography B-scan Volume Analysis Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.6": "VL Whole Slide Microscopy Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.7": "Dermoscopic Photography Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.8": "Confocal Microscopy Image Storage",
  "1.2.840.10008.5.1.4.1.1.77.1.9": "Confocal Microscopy Tiled Pyramidal Image Storage",
  "1.2.840.10008.5.1.4.1.1.78.1": "Lensometry Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.2": "Autorefraction Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.3": "Keratometry Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.4": "Subjective Refraction Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.5": "Visual Acuity Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.6": "Spectacle Prescription Report Storage",
  "1.2.840.10008.5.1.4.1.1.78.7": "Ophthalmic Axial Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.78.8": "Intraocular Lens Calculations Storage",
  "1.2.840.10008.5.1.4.1.1.79.1": "Macular Grid Thickness and Volume Report Storage",
  "1.2.840.10008.5.1.4.1.1.80.1": "Ophthalmic Visual Field Static Perimetry Measurements Storage",
  "1.2.840.10008.5.1.4.1.1.81.1": "Ophthalmic Thickness Map Storage",
  "1.2.840.10008.5.1.4.1.1.82.1": "Corneal Topography Map Storage",
  "1.2.840.10008.5.1.4.1.1.88.1": "Text SR Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.88.2": "Audio SR Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.88.3": "Detail SR Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.88.4": "Comprehensive SR Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.1.1.88.11": "Basic Text SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.22": "Enhanced SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.33": "Comprehensive SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.34": "Comprehensive 3D SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.35": "Extensible SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.40": "Procedure Log Storage",
  "1.2.840.10008.5.1.4.1.1.88.50": "Mammography CAD SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.59": "Key Object Selection Document Storage",
  "1.2.840.10008.5.1.4.1.1.88.65": "Chest CAD SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.67": "X-Ray Radiation Dose SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.68": "Radiopharmaceutical Radiation Dose SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.69": "Colon CAD SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.70": "Implantation Plan SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.71": "Acquisition Context SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.72": "Simplified Adult Echo SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.73": "Patient Radiation Dose SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.74": "Planned Imaging Agent Administration SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.75": "Performed Imaging Agent Administration SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.76": "Enhanced X-Ray Radiation Dose SR Storage",
  "1.2.840.10008.5.1.4.1.1.88.77": "Waveform Annotation SR Storage",
  "1.2.840.10008.5.1.4.1.1.90.1": "Content Assessment Results Storage",
  "1.2.840.10008.5.1.4.1.1.91.1": "Microscopy Bulk Simple Annotations Storage",
  "1.2.840.10008.5.1.4.1.1.104.1": "Encapsulated PDF Storage",
  "1.2.840.10008.5.1.4.1.1.104.2": "Encapsulated CDA Storage",
  "1.2.840.10008.5.1.4.1.1.104.3": "Encapsulated STL Storage",
  "1.2.840.10008.5.1.4.1.1.104.4": "Encapsulated OBJ Storage",
  "1.2.840.10008.5.1.4.1.1.104.5": "Encapsulated MTL Storage",
  "1.2.840.10008.5.1.4.1.1.128": "Positron Emission Tomography Image Storage",
  "1.2.840.10008.5.1.4.1.1.128.1": "Legacy Converted Enhanced PET Image Storage",
  "1.2.840.10008.5.1.4.1.1.129": "Standalone PET Curve Storage (Retired)",
  "1.2.840.10008.5.1.4.1.1.130": "Enhanced PET Image Storage",
  "1.2.840.10008.5.1.4.1.1.131": "Basic Structured Display Storage",
  "1.2.840.10008.5.1.4.1.1.200.1": "CT Defined Procedure Protocol Storage",
  "1.2.840.10008.5.1.4.1.1.200.2": "CT Performed Procedure Protocol Storage",
  "1.2.840.10008.5.1.4.1.1.200.3": "Protocol Approval Storage",
  "1.2.840.10008.5.1.4.1.1.200.4": "Protocol Approval Information Model - FIND",
  "1.2.840.10008.5.1.4.1.1.200.5": "Protocol Approval Information Model - MOVE",
  "1.2.840.10008.5.1.4.1.1.200.6": "Protocol Approval Information Model - GET",
  "1.2.840.10008.5.1.4.1.1.200.7": "XA Defined Procedure Protocol Storage",
  "1.2.840.10008.5.1.4.1.1.200.8": "XA Performed Procedure Protocol Storage",
  "1.2.840.10008.5.1.4.1.1.201.1": "Inventory Storage",
  "1.2.840.10008.5.1.4.1.1.201.2": "Inventory - FIND",
  "1.2.840.10008.5.1.4.1.1.201.3": "Inventory - MOVE",
  "1.2.840.10008.5.1.4.1.1.201.4": "Inventory - GET",
  "1.2.840.10008.5.1.4.1.1.201.5": "Inventory Creation",
  "1.2.840.10008.5.1.4.1.1.201.6": "Repository Query",
  "1.2.840.10008.5.1.4.1.1.481.1": "RT Image Storage",
  "1.2.840.10008.5.1.4.1.1.481.2": "RT Dose Storage",
  "1.2.840.10008.5.1.4.1.1.481.3": "RT Structure Set Storage",
  "1.2.840.10008.5.1.4.1.1.481.4": "RT Beams Treatment Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.5": "RT Plan Storage",
  "1.2.840.10008.5.1.4.1.1.481.6": "RT Brachy Treatment Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.7": "RT Treatment Summary Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.8": "RT Ion Plan Storage",
  "1.2.840.10008.5.1.4.1.1.481.9": "RT Ion Beams Treatment Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.10": "RT Physician Intent Storage",
  "1.2.840.10008.5.1.4.1.1.481.11": "RT Segment Annotation Storage",
  "1.2.840.10008.5.1.4.1.1.481.12": "RT Radiation Set Storage",
  "1.2.840.10008.5.1.4.1.1.481.13": "C-Arm Photon-Electron Radiation Storage",
  "1.2.840.10008.5.1.4.1.1.481.14": "Tomotherapeutic Radiation Storage",
  "1.2.840.10008.5.1.4.1.1.481.15": "Robotic-Arm Radiation Storage",
  "1.2.840.10008.5.1.4.1.1.481.16": "RT Radiation Record Set Storage",
  "1.2.840.10008.5.1.4.1.1.481.17": "RT Radiation Salvage Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.18": "Tomotherapeutic Radiation Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.19": "C-Arm Photon-Electron Radiation Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.20": "Robotic Radiation Record Storage",
  "1.2.840.10008.5.1.4.1.1.481.21": "RT Radiation Set Delivery Instruction Storage",
  "1.2.840.10008.5.1.4.1.1.481.22": "RT Treatment Preparation Storage",
  "1.2.840.10008.5.1.4.1.1.481.23": "Enhanced RT Image Storage",
  "1.2.840.10008.5.1.4.1.1.481.24": "Enhanced Continuous RT Image Storage",
  "1.2.840.10008.5.1.4.1.1.481.25": "RT Patient Position Acquisition Instruction Storage",
  "1.2.840.10008.5.1.4.1.1.501.1": "DICOS CT Image Storage",
  "1.2.840.10008.5.1.4.1.1.501.2.1": "DICOS Digital X-Ray Image Storage - For Presentation",
  "1.2.840.10008.5.1.4.1.1.501.2.2": "DICOS Digital X-Ray Image Storage - For Processing",
  "1.2.840.10008.5.1.4.1.1.501.3": "DICOS Threat Detection Report Storage",
  "1.2.840.10008.5.1.4.1.1.501.4": "DICOS 2D AIT Storage",
  "1.2.840.10008.5.1.4.1.1.501.5": "DICOS 3D AIT Storage",
  "1.2.840.10008.5.1.4.1.1.501.6": "DICOS Quadrupole Resonance (QR) Storage",
  "1.2.840.10008.5.1.4.1.1.601.1": "Eddy Current Image Storage",
  "1.2.840.10008.5.1.4.1.1.601.2": "Eddy Current Multi-frame Image Storage",
  "1.2.840.10008.5.1.4.1.1.601.3": "Thermography Image Storage",
  "1.2.840.10008.5.1.4.1.1.601.4": "Thermography Multi-frame Image Storage",
  "1.2.840.10008.5.1.4.1.1.601.5": "Ultrasound Waveform Storage",
  "1.2.840.10008.5.1.4.1.2.1.1": "Patient Root Query/Retrieve Information Model - FIND",
  "1.2.840.10008.5.1.4.1.2.1.2": "Patient Root Query/Retrieve Information Model - MOVE",
  "1.2.840.10008.5.1.4.1.2.1.3": "Patient Root Query/Retrieve Information Model - GET",
  "1.2.840.10008.5.1.4.1.2.2.1": "Study Root Query/Retrieve Information Model - FIND",
  "1.2.840.10008.5.1.4.1.2.2.2": "Study Root Query/Retrieve Information Model - MOVE",
  "1.2.840.10008.5.1.4.1.2.2.3": "Study Root Query/Retrieve Information Model - GET",
  "1.2.840.10008.5.1.4.1.2.3.1": "Patient/Study Only Query/Retrieve Information Model - FIND (Retired)",
  "1.2.840.10008.5.1.4.1.2.3.2": "Patient/Study Only Query/Retrieve Information Model - MOVE (Retired)",
  "1.2.840.10008.5.1.4.1.2.3.3": "Patient/Study Only Query/Retrieve Information Model - GET (Retired)",
  "1.2.840.10008.5.1.4.1.2.4.2": "Composite Instance Root Retrieve - MOVE",
  "1.2.840.10008.5.1.4.1.2.4.3": "Composite Instance Root Retrieve - GET",
  "1.2.840.10008.5.1.4.1.2.5.3": "Composite Instance Retrieve Without Bulk Data - GET",
  "1.2.840.10008.5.1.4.20.1": "Defined Procedure Protocol Information Model - FIND",
  "1.2.840.10008.5.1.4.20.2": "Defined Procedure Protocol Information Model - MOVE",
  "1.2.840.10008.5.1.4.20.3": "Defined Procedure Protocol Information Model - GET",
  "1.2.840.10008.5.1.4.31": "Modality Worklist Information Model - FIND",
  "1.2.840.10008.5.1.4.32.1": "General Purpose Worklist Information Model - FIND (Retired)",
  "1.2.840.10008.5.1.4.32.2": "General Purpose Scheduled Procedure Step SOP Class (Retired)",
  "1.2.840.10008.5.1.4.32.3": "General Purpose Performed Procedure Step SOP Class (Retired)",
  "1.2.840.10008.5.1.4.33": "Instance Availability Notification SOP Class",
  "1.2.840.10008.5.1.4.34.1": "RT Beams Delivery Instruction Storage - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.2": "RT Conventional Machine Verification - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.3": "RT Ion Machine Verification - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.4.1": "Unified Procedure Step - Push SOP Class - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.4.2": "Unified Procedure Step - Watch SOP Class - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.4.3": "Unified Procedure Step - Pull SOP Class - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.4.4": "Unified Procedure Step - Event SOP Class - Trial (Retired)",
  "1.2.840.10008.5.1.4.34.6.1": "Unified Procedure Step - Push SOP Class",
  "1.2.840.10008.5.1.4.34.6.2": "Unified Procedure Step - Watch SOP Class",
  "1.2.840.10008.5.1.4.34.6.3": "Unified Procedure Step - Pull SOP Class",
  "1.2.840.10008.5.1.4.34.6.4": "Unified Procedure Step - Event SOP Class",
  "1.2.840.10008.5.1.4.34.6.5": "Unified Procedure Step - Query SOP Class",
  "1.2.840.10008.5.1.4.34.7": "RT Beams Delivery Instruction Storage",
  "1.2.840.10008.5.1.4.34.8": "RT Conventional Machine Verification",
  "1.2.840.10008.5.1.4.34.9": "RT Ion Machine Verification",
  "1.2.840.10008.5.1.4.34.10": "RT Brachy Application Setup Delivery Instruction Storage",
  "1.2.840.10008.5.1.4.37.1": "General Relevant Patient Information Query",
  "1.2.840.10008.5.1.4.37.2": "Breast Imaging Relevant Patient Information Query",
  "1.2.840.10008.5.1.4.37.3": "Cardiac Relevant Patient Information Query",
  "1.2.840.10008.5.1.4.38.1": "Hanging Protocol Storage",
  "1.2.840.10008.5.1.4.38.2": "Hanging Protocol Information Model - FIND",
  "1.2.840.10008.5.1.4.38.3": "Hanging Protocol Information Model - MOVE",
  "1.2.840.10008.5.1.4.38.4": "Hanging Protocol Information Model - GET",
  "1.2.840.10008.5.1.4.39.1": "Color Palette Storage",
  "1.2.840.10008.5.1.4.39.2": "Color Palette Query/Retrieve Information Model - FIND",
  "1.2.840.10008.5.1.4.39.3": "Color Palette Query/Retrieve Information Model - MOVE",
  "1.2.840.10008.5.1.4.39.4": "Color Palette Query/Retrieve Information Model - GET",
  "1.2.840.10008.5.1.4.41": "Product Characteristics Query SOP Class",
  "1.2.840.10008.5.1.4.42": "Substance Approval Query SOP Class",
  "1.2.840.10008.5.1.4.43.1": "Generic Implant Template Storage",
  "1.2.840.10008.5.1.4.43.2": "Generic Implant Template Information Model - FIND",
  "1.2.840.10008.5.1.4.43.3": "Generic Implant Template Information Model - MOVE",
  "1.2.840.10008.5.1.4.43.4": "Generic Implant Template Information Model - GET",
  "1.2.840.10008.5.1.4.44.1": "Implant Assembly Template Storage",
  "1.2.840.10008.5.1.4.44.2": "Implant Assembly Template Information Model - FIND",
  "1.2.840.10008.5.1.4.44.3": "Implant Assembly Template Information Model - MOVE",
  "1.2.840.10008.5.1.4.44.4": "Implant Assembly Template Information Model - GET",
  "1.2.840.10008.5.1.4.45.1": "Implant Template Group Storage",
  "1.2.840.10008.5.1.4.45.2": "Implant Template Group Information Model - FIND",
  "1.2.840.10008.5.1.4.45.3": "Implant Template Group Information Model - MOVE",
  "1.2.840.10008.5.1.4.45.4": "Implant Template Group Information Model - GET",
  "1.2.840.10008.10.1": "Video Endoscopic Image Real-Time Communication",
  "1.2.840.10008.10.2": "Video Photographic Image Real-Time Communication",
  "1.2.840.10008.10.3": "Audio Waveform Real-Time Communication",
  "1.2.840.10008.10.4": "Rendition Selection Document Real-Time Communication",
  "1.2.40.0.13.1.5.1.4.1.1.104.1": "Private Dcm4che Encapsulated Genozip Storage",
  "1.2.40.0.13.1.5.1.4.1.1.104.2": "Private Dcm4che Encapsulated Bzip2 VCF Storage",
  "1.2.40.0.13.1.5.1.4.1.1.104.3": "Private Dcm4che Encapsulated Bzip2 Document Storage",
  "1.2.124.113532.3500.7": "Private Agfa Basic Attribute Presentation State",
  "1.2.124.113532.3500.8.1": "Private Agfa Arrival Transaction",
  "1.2.124.113532.3500.8.2": "Private Agfa Dictation Transaction",
  "1.2.124.113532.3500.8.3": "Private Agfa Report Transcription Transaction",
  "1.2.124.113532.3500.8.4": "Private Agfa Report Approval Transaction",
  "1.2.276.0.48.5.1.4.1.1.7": "Private TomTec Annotation Storage",
  "1.2.392.200036.9116.7.8.1.1.1": "Private Toshiba US Image Storage",
  "1.2.392.200036.9125.1.1.2": "Private Fuji CR Image Storage",
  "1.2.528.1.1001.5.1.1.1": "Private GE Collage Storage",
  "1.2.826.0.1.3680043.293.1.0.1": "Private ERAD Practice Builder Report Text Storage",
  "1.2.826.0.1.3680043.293.1.0.2": "Private ERAD Practice Builder Report Dictation Storage",
  "1.2.840.113543.6.6.1.3.10001": "Private Philips HP Live 3D 01 Storage",
  "1.2.840.113543.6.6.1.3.10002": "Private Philips HP Live 3D 02 Storage",
  "1.2.840.113619.4.26": "Private GE 3D Model Storage",
  "1.2.840.113619.4.3": "Private GE Dicom CT Image Info Object",
  "1.2.840.113619.4.4": "Private GE Dicom Display Image Info Object",
  "1.2.840.113619.4.2": "Private GE Dicom MR Image Info Object",
  "1.2.840.113619.4.27": "Private GE eNTEGRA Protocol or NM Genie Storage",
  "1.2.840.113619.4.30": "Private GE PET Raw Data Storage",
  "1.2.840.113619.4.5.249": "Private GE RT Plan Storage",
  "1.3.6.1.4.1.5962.301.1": "Private PixelMed Legacy Converted Enhanced CT Image Storage",
  "1.3.6.1.4.1.5962.301.2": "Private PixelMed Legacy Converted Enhanced MR Image Storage",
  "1.3.6.1.4.1.5962.301.3": "Private PixelMed Legacy Converted Enhanced PET Image Storage",
  "1.3.6.1.4.1.5962.301.9": "Private PixelMed Floating Point Image Storage",
  "1.3.12.2.1107.5.9.1": "Private Siemens CSA Non Image Storage",
  "1.3.12.2.1107.5.99.3.10": "Private Siemens CT MR Volume Storage",
  "1.3.12.2.1107.5.99.3.11": "Private Siemens AX Frame Sets Storage",
  "1.3.46.670589.2.3.1.1": "Private Philips Specialised XA Storage",
  "1.3.46.670589.2.4.1.1": "Private Philips CX Image Storage",
  "1.3.46.670589.2.5.1.1": "Private Philips 3D Presentation State Storage",
  "1.3.46.670589.2.8.1.1": "Private Philips VRML Storage",
  "1.3.46.670589.2.11.1.1": "Private Philips Volume Set Storage",
  "1.3.46.670589.5.0.1": "Private Philips Volume Storage (Retired)",
  "1.3.46.670589.5.0.1.1": "Private Philips Volume Storage",
  "1.3.46.670589.5.0.2": "Private Philips 3D Object Storage (Retired)",
  "1.3.46.670589.5.0.2.1": "Private Philips 3D Object Storage",
  "1.3.46.670589.5.0.3": "Private Philips Surface Storage (Retired)",
  "1.3.46.670589.5.0.3.1": "Private Philips Surface Storage",
  "1.3.46.670589.5.0.4": "Private Philips Composite Object Storage",
  "1.3.46.670589.5.0.7": "Private Philips MR Cardio Profile Storage",
  "1.3.46.670589.5.0.8": "Private Philips MR Cardio Storage (Retired)",
  "1.3.46.670589.5.0.8.1": "Private Philips MR Cardio Storage",
  "1.3.46.670589.5.0.9": "Private Philips CT Synthetic Image Storage",
  "1.3.46.670589.5.0.10": "Private Philips MR Synthetic Image Storage",
  "1.3.46.670589.5.0.11": "Private Philips MR Cardio Analysis Storage (Retired)",
  "1.3.46.670589.5.0.11.1": "Private Philips MR Cardio Analysis Storage",
  "1.3.46.670589.5.0.12": "Private Philips CX Synthetic Image Storage",
  "1.3.46.670589.5.0.13": "Private Philips Perfusion Storage",
  "1.3.46.670589.5.0.14": "Private Philips Perfusion Image Storage",
  "1.3.46.670589.7.8.1618510091": "Private Philips X-Ray MF Storage",
  "1.3.46.670589.7.8.1618510092": "Private Philips Live Run Storage",
  "1.3.46.670589.7.8.16185100129": "Private Philips Run Storage",
  "1.3.46.670589.7.8.16185100130": "Private Philips Reconstruction Storage",
  "1.3.46.670589.11.0.0.12.1": "Private Philips MR Spectrum Storage",
  "1.3.46.670589.11.0.0.12.2": "Private Philips MR Series Data Storage",
  "1.3.46.670589.11.0.0.12.3": "Private Philips MR Color Image Storage",
  "1.3.46.670589.11.0.0.12.4": "Private Philips MR Examcard Storage",
  "2.16.840.1.114033.5.1.4.1.1.130": "Private PMOD Multi-frame Image Storage"
});
var DCM4CHE = DCM4CHE || {};
DCM4CHE.TransferSyntax = /* @__PURE__ */ function(dictionary) {
  var nameOf = function(uid) {
    if (uid === "all") {
      return dictionary;
    } else {
      return dictionary[uid] || uid;
    }
  };
  return {
    nameOf
  };
}({
  "1.2.840.10008.1.2": "Implicit VR Little Endian",
  "1.2.840.10008.1.2.1": "Explicit VR Little Endian",
  "1.2.840.10008.1.2.1.98": "Encapsulated Uncompressed Explicit VR Little Endian",
  "1.2.840.10008.1.2.1.99": "Deflated Explicit VR Little Endian",
  "1.2.840.10008.1.2.2": "Explicit VR Big Endian (Retired)",
  "1.2.840.10008.1.2.4.50": "JPEG Baseline (Process 1)",
  "1.2.840.10008.1.2.4.51": "JPEG Extended (Process 2 & 4)",
  "1.2.840.10008.1.2.4.52": "JPEG Extended (Process 3 & 5) (Retired)",
  "1.2.840.10008.1.2.4.53": "JPEG Spectral Selection, Non-Hierarchical (Process 6 & 8) (Retired)",
  "1.2.840.10008.1.2.4.54": "JPEG Spectral Selection, Non-Hierarchical (Process 7 & 9) (Retired)",
  "1.2.840.10008.1.2.4.55": "JPEG Full Progression, Non-Hierarchical (Process 10 & 12) (Retired)",
  "1.2.840.10008.1.2.4.56": "JPEG Full Progression, Non-Hierarchical (Process 11 & 13) (Retired)",
  "1.2.840.10008.1.2.4.57": "JPEG Lossless, Non-Hierarchical (Process 14)",
  "1.2.840.10008.1.2.4.58": "JPEG Lossless, Non-Hierarchical (Process 15) (Retired)",
  "1.2.840.10008.1.2.4.59": "JPEG Extended, Hierarchical (Process 16 & 18) (Retired)",
  "1.2.840.10008.1.2.4.60": "JPEG Extended, Hierarchical (Process 17 & 19) (Retired)",
  "1.2.840.10008.1.2.4.61": "JPEG Spectral Selection, Hierarchical (Process 20 & 22) (Retired)",
  "1.2.840.10008.1.2.4.62": "JPEG Spectral Selection, Hierarchical (Process 21 & 23) (Retired)",
  "1.2.840.10008.1.2.4.63": "JPEG Full Progression, Hierarchical (Process 24 & 26) (Retired)",
  "1.2.840.10008.1.2.4.64": "JPEG Full Progression, Hierarchical (Process 25 & 27) (Retired)",
  "1.2.840.10008.1.2.4.65": "JPEG Lossless, Hierarchical (Process 28) (Retired)",
  "1.2.840.10008.1.2.4.66": "JPEG Lossless, Hierarchical (Process 29) (Retired)",
  "1.2.840.10008.1.2.4.70": "JPEG Lossless, Non-Hierarchical, First-Order Prediction (Process 14 [Selection Value 1])",
  "1.2.840.10008.1.2.4.80": "JPEG-LS Lossless Image Compression",
  "1.2.840.10008.1.2.4.81": "JPEG-LS Lossy (Near-Lossless) Image Compression",
  "1.2.840.10008.1.2.4.90": "JPEG 2000 Image Compression (Lossless Only)",
  "1.2.840.10008.1.2.4.91": "JPEG 2000 Image Compression",
  "1.2.840.10008.1.2.4.92": "JPEG 2000 Part 2 Multi-component Image Compression (Lossless Only)",
  "1.2.840.10008.1.2.4.93": "JPEG 2000 Part 2 Multi-component Image Compression",
  "1.2.840.10008.1.2.4.94": "JPIP Referenced",
  "1.2.840.10008.1.2.4.95": "JPIP Referenced Deflate",
  "1.2.840.10008.1.2.4.100": "MPEG2 Main Profile / Main Level",
  "1.2.840.10008.1.2.4.100.1": "Fragmentable MPEG2 Main Profile / Main Level",
  "1.2.840.10008.1.2.4.101": "MPEG2 Main Profile / High Level",
  "1.2.840.10008.1.2.4.101.1": "Fragmentable MPEG2 Main Profile / High Level",
  "1.2.840.10008.1.2.4.102": "MPEG-4 AVC/H.264 High Profile / Level 4.1",
  "1.2.840.10008.1.2.4.102.1": "Fragmentable MPEG-4 AVC/H.264 High Profile / Level 4.1",
  "1.2.840.10008.1.2.4.103": "MPEG-4 AVC/H.264 BD-compatible High Profile / Level 4.1",
  "1.2.840.10008.1.2.4.103.1": "Fragmentable MPEG-4 AVC/H.264 BD-compatible High Profile / Level 4.1",
  "1.2.840.10008.1.2.4.104": "MPEG-4 AVC/H.264 High Profile / Level 4.2 For 2D Video",
  "1.2.840.10008.1.2.4.104.1": "Fragmentable MPEG-4 AVC/H.264 High Profile / Level 4.2 For 2D Video",
  "1.2.840.10008.1.2.4.105": "MPEG-4 AVC/H.264 High Profile / Level 4.2 For 3D Video",
  "1.2.840.10008.1.2.4.105.1": "Fragmentable MPEG-4 AVC/H.264 High Profile / Level 4.2 For 3D Video",
  "1.2.840.10008.1.2.4.106": "MPEG-4 AVC/H.264 Stereo High Profile / Level 4.2",
  "1.2.840.10008.1.2.4.106.1": "Fragmentable MPEG-4 AVC/H.264 Stereo High Profile / Level 4.2",
  "1.2.840.10008.1.2.4.107": "HEVC/H.265 Main Profile / Level 5.1",
  "1.2.840.10008.1.2.4.108": "HEVC/H.265 Main 10 Profile / Level 5.1",
  "1.2.840.10008.1.2.4.110": "JPEG XL Lossless",
  "1.2.840.10008.1.2.4.111": "JPEG XL JPEG Recompression",
  "1.2.840.10008.1.2.4.112": "JPEG XL",
  "1.2.840.10008.1.2.4.201": "High-Throughput JPEG 2000 Image Compression (Lossless Only)",
  "1.2.840.10008.1.2.4.202": "High-Throughput JPEG 2000 with RPCL Options Image Compression (Lossless Only)",
  "1.2.840.10008.1.2.4.203": "High-Throughput JPEG 2000 Image Compression",
  "1.2.840.10008.1.2.4.204": "JPIP HTJ2K Referenced",
  "1.2.840.10008.1.2.4.205": "JPIP HTJ2K Referenced Deflate",
  "1.2.840.10008.1.2.5": "RLE Lossless",
  "1.2.840.10008.1.2.6.1": "RFC 2557 MIME encapsulation (Retired)",
  "1.2.840.10008.1.2.6.2": "XML Encoding (Retired)",
  "1.2.840.10008.1.2.7.1": "SMPTE ST 2110-20 Uncompressed Progressive Active Video",
  "1.2.840.10008.1.2.7.2": "SMPTE ST 2110-20 Uncompressed Interlaced Active Video",
  "1.2.840.10008.1.2.7.3": "SMPTE ST 2110-30 PCM Digital Audio",
  "1.2.840.10008.1.2.8.1": "Deflated Image Frame Compression",
  "1.2.840.10008.1.20": "Papyrus 3 Implicit VR Little Endian (Retired)"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ELSCINT1",
  "0003xx01": "Offset List Structure",
  "00E1xx01": "Data Dictionary Version",
  "00E1xx05": "?",
  "00E1xx06": "?",
  "00E1xx07": "?",
  "00E1xx14": "?",
  "00E1xx18": "?",
  "00E1xx21": "DLP Total",
  "00E1xx22": "Presentation Relative Center",
  "00E1xx23": "Presentation Relative Part",
  "00E1xx24": "Presentation Horizontal Invert",
  "00E1xx25": "Presentation Vertical Invert",
  "00E1xx2A": "?",
  "00E1xx30": "?",
  "00E1xx31": "?",
  "00E1xx32": "?",
  "00E1xx37": "Total Dose Savings",
  "00E1xx39": "?",
  "00E1xx3E": "?",
  "00E1xx3F": "?",
  "00E1xx40": "Image Label",
  "00E1xx41": "?",
  "00E1xx42": "?",
  "00E1xx43": "?",
  "00E1xx50": "Acquisition Duration",
  "00E1xx51": "Series Label",
  "00E1xx60": "?",
  "00E1xx61": "Protocol File Name",
  "00E1xx62": "?",
  "00E1xx63": "Patient Language",
  "00E1xx65": "Patient Data Modification Date",
  "00E1xx6A": "?",
  "00E1xx6B": "?",
  "00E1xxA0": "?",
  "00E1xxC2": "?",
  "00E1xxC4": "?",
  "00E1xxCF": "?",
  "00E1xxEB": "?",
  "00E1xxEC": "?",
  "00E3xx00": "?",
  "00E3xx18": "?",
  "00E3xx1F": "?",
  "01E1xx18": "?",
  "01E1xx21": "?",
  "01E1xx26": "Phantom Type",
  "01E1xx34": "?",
  "01E1xx40": "?",
  "01E1xx41": "?",
  "01E1xx55": "Reference Sequence",
  "01E1xx56": "Reference Type",
  "01E1xx57": "Reference Level",
  "01F1xx01": "Acquisition Type",
  "01F1xx02": "Focal Spot Resolution",
  "01F1xx03": "Concurrent Slices Generation",
  "01F1xx04": "Angular Sampling Density",
  "01F1xx05": "Reconstruction Arc",
  "01F1xx06": "?",
  "01F1xx07": "Table Velocity",
  "01F1xx08": "Acquisition Length",
  "01F1xx0A": "Edge Enhancement Weight",
  "01F1xx0B": "?",
  "01F1xx0C": "Scanner Relative Center",
  "01F1xx0D": "Rotation Angle",
  "01F1xx0E": "?",
  "01F1xx26": "Pitch",
  "01F1xx27": "Rotation Time",
  "01F1xx28": "Table Increment",
  "01F1xx30": "?",
  "01F1xx32": "Image View Convention",
  "01F1xx33": "Cycle Time",
  "01F1xx36": "?",
  "01F1xx37": "?",
  "01F1xx38": "?",
  "01F1xx39": "?",
  "01F1xx40": "?",
  "01F1xx42": "?",
  "01F1xx43": "?",
  "01F1xx44": "?",
  "01F1xx45": "?",
  "01F1xx46": "?",
  "01F1xx47": "?",
  "01F1xx49": "?",
  "01F1xx4A": "?",
  "01F1xx4B": "?",
  "01F1xx4C": "?",
  "01F1xx4D": "?",
  "01F1xx4E": "?",
  "01F1xx4F": "Detectors Layers",
  "01F1xx53": "?",
  "01F3xx01": "?",
  "01F3xx02": "?",
  "01F3xx03": "?",
  "01F3xx04": "?",
  "01F3xx11": "PS Sequence",
  "01F3xx12": "?",
  "01F3xx13": "?",
  "01F3xx14": "?",
  "01F3xx15": "?",
  "01F3xx16": "?",
  "01F3xx17": "?",
  "01F3xx18": "?",
  "01F3xx19": "?",
  "01F3xx23": "?",
  "01F3xx24": "?",
  "01F7xx10": "?",
  "01F7xx11": "?",
  "01F7xx13": "?",
  "01F7xx14": "?",
  "01F7xx15": "?",
  "01F7xx16": "?",
  "01F7xx17": "?",
  "01F7xx18": "?",
  "01F7xx19": "?",
  "01F7xx1A": "?",
  "01F7xx1B": "?",
  "01F7xx1C": "?",
  "01F7xx1E": "?",
  "01F7xx1F": "?",
  "01F7xx22": "?",
  "01F7xx23": "?",
  "01F7xx25": "?",
  "01F7xx26": "?",
  "01F7xx27": "?",
  "01F7xx28": "?",
  "01F7xx29": "?",
  "01F7xx2B": "?",
  "01F7xx2C": "?",
  "01F7xx2D": "?",
  "01F7xx2E": "?",
  "01F7xx30": "?",
  "01F7xx31": "?",
  "01F7xx5C": "?",
  "01F7xx70": "?",
  "01F7xx73": "?",
  "01F7xx74": "?",
  "01F7xx75": "?",
  "01F7xx7F": "?",
  "01F7xx9B": "iDose Level",
  "01F7xxCB": "keV",
  "01F7xxCC": "SBI Version",
  "01F7xxCD": "SC CT Equivalent",
  "01F7xxCE": "Reference SBI Type",
  "01F7xxD3": "Burned Spectral Annotations",
  "01F7xxD4": "Head Body",
  "01F7xxD6": "Spectral Level",
  "01F9xx01": "SP Filter",
  "01F9xx04": "Adaptive Filter",
  "01F9xx05": "Recon Increment",
  "01F9xx08": "?",
  "01F9xx09": "?",
  "0601xx00": "Implementation Version",
  "0601xx20": "Relative Table Position",
  "0601xx21": "Relative Table Height",
  "0601xx30": "Surview Direction",
  "0601xx31": "Surview Length",
  "0601xx50": "Image View Type",
  "0601xx70": "Batch Number",
  "0601xx71": "Batch Size",
  "0601xx72": "Batch Slice Number",
  "07A1xx01": "Number Of Series In Study",
  "07A1xx02": "Number Of Images In Series",
  "07A1xx03": "Last Update Time",
  "07A1xx04": "Last Update Date",
  "07A1xx07": "?",
  "07A1xx08": "?",
  "07A1xx09": "?",
  "07A1xx0A": "Tamar Compressed Pixel Data",
  "07A1xx0C": "?",
  "07A1xx10": "Tamar Software Version",
  "07A1xx11": "Tamar Compression Type",
  "07A1xx12": "?",
  "07A1xx13": "?",
  "07A1xx14": "Protection Flag",
  "07A1xx16": "?",
  "07A1xx18": "?",
  "07A1xx19": "?",
  "07A1xx1C": "?",
  "07A1xx2A": "Tamar Study Status",
  "07A1xx2B": "?",
  "07A1xx36": "Tamar Source AE",
  "07A1xx3D": "?",
  "07A1xx40": "Tamar Study Body Part",
  "07A1xx42": "?",
  "07A1xx43": "Tamar Study Priority",
  "07A1xx45": "?",
  "07A1xx47": "?",
  "07A1xx4A": "?",
  "07A1xx4D": "Tamar Exclude Tags List",
  "07A1xx50": "Tamar Site ID",
  "07A1xx56": "?",
  "07A1xx58": "Tamar Study Published",
  "07A1xx5D": "Tamar Study Creation Date",
  "07A1xx5F": "Tamar Study Has Bookmark",
  "07A1xx70": "?",
  "07A1xx71": "?",
  "07A1xx75": "Tamar Source Image Type",
  "07A1xx76": "?",
  "07A1xx85": "Tamar Translate Flags",
  "07A1xx87": "?",
  "07A1xx88": "?",
  "07A1xx8C": "?",
  "07A1xx94": "?",
  "07A1xx96": "?",
  "07A1xx97": "?",
  "07A1xx98": "?",
  "07A1xx9F": "?",
  "07A1xxC3": "?",
  "07A1xxC5": "Tamar Exclude Tags Size",
  "07A1xxC6": "Tamar Exclude Tags Total Size",
  "07A1xxC7": "Tamar Is Hcff Header",
  "07A1xxD0": "?",
  "07A3xx01": "Tamar Exe Software Version",
  "07A3xx03": "Tamar Study Has Sticky Note",
  "07A3xx05": "Tamar Mp Save Pr",
  "07A3xx06": "Tamar Original Pr Modality",
  "07A3xx09": "?",
  "07A3xx0F": "Tamar Original Curve Type",
  "07A3xx10": "Tamar Original Curve Desc",
  "07A3xx13": "?",
  "07A3xx14": "Tamar Procedure Code",
  "07A3xx15": "Tamar Patient Location",
  "07A3xx17": "Tamar Order Status",
  "07A3xx19": "Tamar Reading Physician Last Name",
  "07A3xx1A": "Tamar Reading Physician First Name",
  "07A3xx1B": "?",
  "07A3xx1C": "Tamar Signing Physician Last Name",
  "07A3xx1D": "Tamar Signing Physician First Name",
  "07A3xx1E": "Tamar Signing Physician ID",
  "07A3xx1F": "?",
  "07A3xx22": "?",
  "07A3xx23": "Tamar Misc String 5",
  "07A3xx31": "?",
  "07A3xx34": "Tamar Study Age",
  "07A3xx43": "Tamar Pan Side Details",
  "07A3xx53": "_007A3_xx53_",
  "07A3xx54": "_007A3_xx54_",
  "07A3xx55": "Tamar Study Has Mammo Cad",
  "07A3xx5C": "_07A3xx5C_",
  "07A3xx61": "Tamar Nondicom Annotations",
  "07A3xx62": "Tamar Nondicom Annotations Sequence",
  "07A3xx63": "?",
  "07A3xx64": "?",
  "07A3xx65": "?",
  "07A3xx66": "?",
  "07A3xx80": "?",
  "07A3xx8F": "?",
  "07A3xx92": "?",
  "07A3xx93": "?",
  "07A3xx99": "Tamar Is Doc Type",
  "07A3xx9C": "Tamar Study Has Key Image",
  "07A3xx9F": "?",
  "07A3xxB4": "?",
  "07A3xxB9": "Tamar Key Series Indication",
  "07A3xxBB": "Tamar Study Has Key Series",
  "07A3xxC0": "Tamar Grid Token Load Sequence",
  "07A3xxC1": "Tamar Grid Token Target Grid Name",
  "07A3xxC2": "Tamar Grid Token Speed",
  "07A3xxC3": "Tamar Grid Token Security",
  "07A3xxC4": "Tamar Grid Token Next Host",
  "07A3xxC5": "Tamar Grid Token Next Host Port",
  "07A3xxC6": "Tamar Grid Token Query Sequence",
  "07A3xxC8": "Tamar Grid Token AE",
  "07A3xxC9": "Tamar Grid Token Tunneled",
  "07A3xxCA": "Tamar Grid Token Archive Sequence",
  "07A3xxCB": "Tamar Grid Token Location Sequence",
  "07A3xxCC": "Tamar Grid Token Version",
  "07A3xxD0": "Tamar Original Nested Elements Sequence",
  "07A3xxD1": "Tamar Nested Element Number",
  "07A3xxD2": "Tamar Nested Text Line Visibility",
  "07A3xxD3": "Tamar Nested Text Default Location",
  "07A3xxD4": "Tamar Nested Text Location X",
  "07A3xxD5": "Tamar Nested Text Location Y",
  "07A3xxD6": "Tamar Nested Type Of Data",
  "07A3xxE3": "?",
  "07A3xxF2": "?",
  "07A3xxF5": "?",
  "07A3xxFA": "?",
  "07A3xxFB": "?",
  "07A5xx00": "?",
  "07A5xx54": "Tamar Reports Update Date",
  "07A5xx56": "Tamar Referring Physicians Study Read",
  "07A5xx59": "?",
  "07A5xx62": "Tamar Study Institution Name",
  "07A5xx63": "?",
  "07A5xx69": "Tamar Original Storing AE",
  "07A5xxAE": "?",
  "07A5xxC8": "?",
  "5001xx19": "?",
  "5001xx70": "?",
  "5001xx71": "?",
  "5003xx19": "?",
  "5005xx10": "?",
  "5005xx19": "?",
  "6001xx10": "Text Overlay Flag",
  "6001xx30": "?",
  "6001xx90": "?",
  "7FDFxxF0": "?",
  "7FDFxxFF": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ACUSON:1.2.840.113680.1.0:7ffe",
  "7fdfxx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ACUSON:1.2.840.113680.1.0:7f10",
  "7fdfxx02": "?",
  "7fdfxx0b": "?",
  "7fdfxx0c": "?",
  "7fdfxx20": "?",
  "7fdfxx22": "?",
  "7fdfxx00": "?",
  "7fdfxx01": "?",
  "7fdfxx0d": "?",
  "7fdfxx10": "?",
  "7fdfxx24": "?",
  "7fdfxx25": "?",
  "7fdfxx26": "?",
  "7fdfxx27": "?",
  "7fdfxx28": "?",
  "7fdfxx29": "?",
  "7fdfxx2a": "?",
  "7fdfxx2b": "?",
  "7fdfxx2c": "?",
  "7fdfxx30": "?",
  "7fdfxx31": "?",
  "7fdfxx32": "?",
  "7fdfxx33": "?",
  "7fdfxx34": "?",
  "7fdfxx35": "?",
  "7fdfxx36": "?",
  "7fdfxx37": "?",
  "7fdfxx38": "?",
  "7fdfxx50": "?",
  "7fdfxx52": "?",
  "7fdfxx54": "?",
  "7fdfxx60": "?",
  "7fdfxx61": "?",
  "7fdfxx62": "?",
  "7fdfxx63": "?",
  "7fdfxx64": "?",
  "7fdfxx65": "?",
  "7fdfxx66": "?",
  "7fdfxx67": "?",
  "7fdfxx68": "?",
  "7fdfxx69": "?",
  "7fdfxx6a": "?",
  "7fdfxx6b": "?",
  "7fdfxx6c": "?",
  "7fdfxx72": "?",
  "7fdfxx73": "?",
  "7fdfxx74": "?",
  "7fdfxx75": "?",
  "7fdfxx76": "?",
  "7fdfxx77": "?",
  "7fdfxx78": "?",
  "7fdfxx79": "?",
  "7fdfxx7a": "?",
  "7fdfxx7b": "?",
  "7fdfxx7c": "?",
  "7fdfxx7d": "?",
  "7fdfxx7e": "?",
  "7fdfxx7f": "?",
  "7fdfxx80": "?",
  "7fdfxx81": "?",
  "7fdfxx82": "?",
  "7fdfxx83": "?",
  "7fdfxx85": "?",
  "7fdfxx89": "?",
  "7fdfxx8a": "?",
  "7fdfxx8b": "?",
  "7fdfxx8c": "?",
  "7fdfxx8d": "?",
  "7fdfxx86": "?",
  "7fdfxx88": "?",
  "7fdfxxf1": "?",
  "7fdfxxf5": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ACUSON",
  "0009xx00": "?",
  "0009xx01": "?",
  "0009xx02": "?",
  "0009xx03": "?",
  "0009xx04": "?",
  "0009xx05": "?",
  "0009xx06": "?",
  "0009xx07": "?",
  "0009xx08": "?",
  "0009xx09": "?",
  "0009xx0a": "?",
  "0009xx0b": "?",
  "0009xx0c": "?",
  "0009xx0d": "?",
  "0009xx0e": "?",
  "0009xx0f": "?",
  "0009xx10": "?",
  "0009xx11": "?",
  "0009xx12": "?",
  "0009xx13": "?",
  "0009xx14": "?",
  "0009xx15": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ACUSON:1.2.840.113680.1.0:0910",
  "0009xx00": "?",
  "0009xx01": "?",
  "0009xx02": "Patient Registration Custom Field 1",
  "0009xx03": "Patient Registration Custom Field 2",
  "0009xx04": "Indications",
  "0009xx0f": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AGFA_ADC_Compact",
  "0019xx30": "Data stream from cassette",
  "0019xx40": "Set of destination Ids",
  "0019xx50": "Set of processing codes",
  "0019xx60": "Number of series in study",
  "0019xx61": "Session Number",
  "0019xx62": "ID station name",
  "0019xx70": "Number of images in series",
  "0019xx71": "Break condition",
  "0019xx72": "Wait (or Hold) flag",
  "0019xx73": "ScanRes flag",
  "0019xx74": "Operation code",
  "0019xx95": "Image quality"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Agfa ADC NX",
  "0019xx07": "?",
  "0019xx09": "?",
  "0019xx21": "?",
  "0019xx28": "?",
  "0019xxF0": "User Defined field 1",
  "0019xxF1": "User Defined field 2",
  "0019xxF2": "User Defined field 3",
  "0019xxF3": "User Defined field 4",
  "0019xxF4": "User Defined field 5",
  "0019xxF5": "Cassette Orientation",
  "0019xxF6": "Plate Sensitivity",
  "0019xxF7": "Plate Erasability",
  "0019xxF8": "?",
  "0019xxFA": "?",
  "0019xxFC": "?",
  "0019xxFD": "?",
  "0019xxFE": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AGFA-AG_HPState",
  "0011xx11": "?",
  "0019xxA0": "?",
  "0019xxA1": "?",
  "0019xxA2": "?",
  "0019xxA3": "?",
  "0019xxA4": "?",
  "0071xx18": "?",
  "0071xx19": "?",
  "0071xx1A": "?",
  "0071xx1C": "?",
  "0071xx1E": "?",
  "0071xx20": "?",
  "0071xx21": "?",
  "0071xx22": "?",
  "0071xx23": "?",
  "0071xx24": "?",
  "0071xx2B": "?",
  "0071xx2C": "?",
  "0071xx2D": "?",
  "0073xx23": "?",
  "0073xx24": "?",
  "0073xx28": "?",
  "0073xx80": "?",
  "0075xx10": "?",
  "0087xx01": "?",
  "0087xx02": "?",
  "0087xx03": "?",
  "0087xx04": "?",
  "0087xx05": "?",
  "0087xx06": "?",
  "0087xx07": "?",
  "0087xx08": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AGFA",
  "0009xx10": "?",
  "0009xx11": "?",
  "0009xx13": "?",
  "0009xx14": "?",
  "0009xx15": "?",
  "0019xx05": "Cassette Data Stream",
  "0019xx10": "Image Processing Parameters",
  "0019xx11": "Identification Data",
  "0019xx13": "Sensitometry Name",
  "0019xx14": "Window Level List",
  "0019xx15": "Dose Monitoring",
  "0019xx16": "Other Info",
  "0019xx1A": "Clipped Exposure Deviation",
  "0019xx1B": "Logarithmic PLT Full Scale",
  "0019xx60": "Total Number Series",
  "0019xx61": "Session Number",
  "0019xx62": "ID Station Name",
  "0019xx65": "Number of Images in Study to be Transmitted",
  "0019xx70": "Total Number Images",
  "0019xx80": "Geometrical Transformations",
  "0019xx81": "Roam Origin",
  "0019xx82": "Zoom Factor",
  "0019xx93": "Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "agfa/displayableImages",
  "2E13xx10": "?",
  "2E13xx11": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AGFA KOSD 1.0",
  "0035xx00": "?",
  "0035xx03": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AGFA PACS Archive Mirroring 1.0",
  "0031xx00": "?",
  "0031xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "agfa/xeroverse",
  "7FDBxx99": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AgilityOverlay",
  "0071xx01": "?",
  "0071xx02": "?",
  "0071xx03": "?",
  "0071xx05": "?",
  "0071xx06": "?",
  "0071xx07": "?",
  "0071xx08": "?",
  "0071xx09": "?",
  "0071xx0A": "?",
  "0071xx10": "?",
  "0071xx11": "?",
  "0071xx12": "?",
  "0071xx13": "?",
  "0071xx14": "?",
  "0071xx15": "?",
  "0071xx16": "?",
  "0071xx17": "?",
  "0071xx18": "?",
  "0071xx19": "?",
  "0071xx1B": "?",
  "0071xx1C": "?",
  "0071xx1D": "?",
  "0071xx22": "?",
  "0071xx2C": "?",
  "0071xx2D": "?",
  "0071xx2E": "?",
  "0071xx50": "?",
  "0071xx51": "?",
  "0071xx52": "?",
  "0071xx53": "?",
  "0071xx54": "?",
  "0071xx55": "?",
  "0071xx56": "?",
  "0071xx57": "?",
  "0071xx59": "?",
  "0071xx5A": "?",
  "0071xx5B": "?",
  "0071xx5C": "?",
  "0071xx5D": "?",
  "0071xx60": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AgilityRuntime",
  "0011xx20": "?",
  "0011xx21": "?",
  "0011xx22": "?",
  "0029xx11": "?",
  "0029xx12": "?",
  "0029xx13": "?",
  "0029xx14": "?",
  "0029xx1F": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA LINKED ATTRIBUTES 1.0",
  "0031xx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA MARKUP 1.0",
  "0029xx00": "Markup1",
  "0029xx01": "Markup2",
  "0029xx02": "Markup3",
  "0029xx03": "Markup4",
  "0029xx04": "Markup5",
  "0029xx05": "Markup6",
  "0029xx06": "Markup7",
  "0029xx07": "Markup8",
  "0029xx08": "Markup9",
  "0029xx09": "Markup10",
  "0029xx10": "Markup11",
  "0029xx11": "Markup12",
  "0029xx12": "Markup13",
  "0029xx13": "Markup14",
  "0029xx14": "Markup15"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA OBJECT ATTRIBUTES 1.0",
  "0033xx02": "?",
  "0033xx04": "?",
  "0033xx06": "?",
  "0033xx08": "?",
  "0033xx0A": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA OBJECT DOCUMENT 1.0",
  "0029xx00": "IMPAX Object Document",
  "0029xx01": "IMPAX Markup XML Stored"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA OBJECT UTF8 ATTRIBUTES 1.0",
  "0033xx02": "?",
  "0033xx04": "?",
  "0033xx06": "?",
  "0033xx08": "?",
  "0033xx0A": "?",
  "0033xx0C": "?",
  "0033xx0E": "?",
  "0033xx13": "?",
  "0033xx14": "?",
  "0033xx15": "?",
  "0033xx16": "?",
  "0033xx19": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "MITRA PRESENTATION 1.0",
  "0029xx00": "Rotation",
  "0029xx01": "Window Width",
  "0029xx02": "Window Centre",
  "0029xx03": "Invert",
  "0029xx04": "Has Tabstop",
  "0029xx05": "Smooth Rotation",
  "0029xx10": "?",
  "0029xx11": "?",
  "0029xx12": "?",
  "0029xx13": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "CARDIO-D.R. 1.0",
  "0009xx00": "File Location",
  "0009xx01": "File Size",
  "0009xx40": "Alternate Image Sequence",
  "0019xx00": "Image Blanking Shape",
  "0019xx02": "Image Blanking Left Vertical Edge",
  "0019xx04": "Image Blanking Right Vertical Edge",
  "0019xx06": "Image Blanking Upper Horizontal Edge",
  "0019xx08": "Image Blanking Lower Horizontal Edge",
  "0019xx10": "Center of Circular Image Blanking",
  "0019xx12": "Radius of Circular Image Blanking",
  "0019xx30": "Maximum Image Frame Size",
  "0021xx13": "Image Sequence Number",
  "0029xx00": "Edge Enhancement Sequence",
  "0029xx01": "Convolution Kernel Size",
  "0029xx02": "Convolution Kernel Coefficients",
  "0029xx03": "Edge Enhancement Gain"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DIDI TO PCR 1.1",
  "0019xx22": "Route AET",
  "0019xx23": "PCR Print Scale",
  "0019xx24": "PCR Print Job End",
  "0019xx25": "PCR No Film Copies",
  "0019xx26": "PCR Film Layout Position",
  "0019xx27": "PCR Print Report Name",
  "0019xx70": "RAD Protocol Printer",
  "0019xx71": "RAD Protocol Medium",
  "0019xx89": "Exposure Index",
  "0019xx8A": "Collimator X",
  "0019xx8B": "Collimator Y",
  "0019xx8C": "Print Marker",
  "0019xx8D": "RGDV Name",
  "0019xx8E": "Acqd Sensitivity",
  "0019xx8F": "Processing Category",
  "0019xx90": "Unprocessed Flag",
  "0019xx91": "Key Values",
  "0019xx92": "Destination Postprocessing Function",
  "0019xxA0": "Version",
  "0019xxA1": "Ranging Mode",
  "0019xxA2": "Abdomen Brightness",
  "0019xxA3": "Fixed Brightness",
  "0019xxA4": "Detail Contrast",
  "0019xxA5": "Contrast Balance",
  "0019xxA6": "Structure Boost",
  "0019xxA7": "Structure Preference",
  "0019xxA8": "Noise Robustness",
  "0019xxA9": "Noise Dose Limit",
  "0019xxAA": "Noise Dose Step",
  "0019xxAB": "Noise Frequency Limit",
  "0019xxAC": "Weak Contrast Limit",
  "0019xxAD": "Strong Contrast Limit",
  "0019xxAE": "Structure Boost Offset",
  "0019xxAF": "Smooth Gain",
  "0019xxB0": "Measure Field 1",
  "0019xxB1": "Measure Field 2",
  "0019xxB2": "Key Percentile 1",
  "0019xxB3": "Key Percentile 2",
  "0019xxB4": "Density LUT",
  "0019xxB5": "Brightness",
  "0019xxB6": "Gamma",
  "0089xx10": "Stamp Image Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS IMAGING DD 001",
  "2001xx01": "Chemical Shift",
  "2001xx02": "Chemical Shift Number MR",
  "2001xx03": "Diffusion B-Factor",
  "2001xx04": "Diffusion Direction",
  "2001xx05": "Graphic Annotation ParentID",
  "2001xx06": "Image Enhanced",
  "2001xx07": "Image Type End Diastole or End Systole",
  "2001xx08": "Phase Number",
  "2001xx09": "Image Prepulse Delay",
  "2001xx0A": "Image Plane Number",
  "2001xx0B": "Image Orientation",
  "2001xx0C": "Arrhythmia Rejection",
  "2001xx0E": "Cardiac Cycled",
  "2001xx0F": "Cardiac Gate Width",
  "2001xx10": "Cardiac Sync",
  "2001xx11": "Diffusion Echo Time",
  "2001xx12": "Dynamic Series",
  "2001xx13": "EPI Factor",
  "2001xx14": "Number of Echoes",
  "2001xx15": "Number of Locations",
  "2001xx16": "Number of PC Directions",
  "2001xx17": "Number of Phases",
  "2001xx18": "Number of Slices",
  "2001xx19": "Partial Matrix Scanned",
  "2001xx1A": "PC Velocity",
  "2001xx1B": "Prepulse Delay",
  "2001xx1C": "Prepulse Type",
  "2001xx1D": "Reconstruction Number",
  "2001xx1E": "Reformat Accuracy",
  "2001xx1F": "Respiration Sync",
  "2001xx20": "Scanning Technique",
  "2001xx21": "SPIR",
  "2001xx22": "Water-Fat Shift",
  "2001xx23": "Flip Angle",
  "2001xx24": "Series is Interactive",
  "2001xx25": "Echo Time Display",
  "2001xx26": "Presentation State Subtraction Active",
  "2001xx29": "?",
  "2001xx2B": "?",
  "2001xx2D": "Number of Slices in Stack",
  "2001xx32": "Stack Radial Angle",
  "2001xx33": "Stack Radial Axis",
  "2001xx35": "Stack Slice Number",
  "2001xx36": "Stack Type",
  "2001xx39": "?",
  "2001xx3D": "Contour Fill Color",
  "2001xx3F": "Displayed Area Zoom Interpolation Method",
  "2001xx43": "Ellipse Display Shutter Major Axis First End Point",
  "2001xx44": "Ellipse Display Shutter Major Axis Second End Point",
  "2001xx45": "Ellipse Display Shutter Other Axis First End Point",
  "2001xx46": "Graphic Line Style",
  "2001xx47": "Graphic Line Width",
  "2001xx48": "Graphic Annotation ID",
  "2001xx4B": "Interpolation Method",
  "2001xx4C": "Poly Line Begin Point Style",
  "2001xx4D": "Poly Line End Point Style",
  "2001xx4E": "Window Smoothing Taste",
  "2001xx50": "Graphic Marker Type",
  "2001xx51": "Overlay Plane ID",
  "2001xx52": "Image Presentation State UID",
  "2001xx53": "Presentation GL Transform Invert",
  "2001xx54": "Contour Fill Transparency",
  "2001xx55": "Graphic Line Color",
  "2001xx56": "Graphic Type",
  "2001xx58": "Contrast Transfer Taste",
  "2001xx5A": "Graphic Annotation Model",
  "2001xx5D": "Measurement Text Units",
  "2001xx5E": "Measurement Text Type",
  "2001xx5F": "Stack Sequence",
  "2001xx60": "Number of Stacks",
  "2001xx61": "Series Transmitted",
  "2001xx62": "Series Committed",
  "2001xx63": "Examination Source",
  "2001xx64": "Text Type",
  "2001xx65": "Graphic Overlay Plane",
  "2001xx67": "Linear Presentation GL Transform Shape Sub",
  "2001xx68": "Linear Modality GL Transform",
  "2001xx69": "Display Shutter",
  "2001xx6A": "Spatial Transformation",
  "2001xx6B": "?",
  "2001xx6D": "Text Font",
  "2001xx6E": "Series Type",
  "2001xx71": "Graphic Constraint",
  "2001xx72": "Ellipse Display Shutter Other Axis Second End Point",
  "2001xx74": "?",
  "2001xx75": "?",
  "2001xx76": "Number of Frames",
  "2001xx77": "GL Transform Type",
  "2001xx7A": "Window Rounding Factor",
  "2001xx7B": "Acquisition Number",
  "2001xx7C": "Frame Number",
  "2001xx80": "?",
  "2001xx81": "Number of Dynamic Scans",
  "2001xx82": "Echo Train Length",
  "2001xx83": "Imaging Frequency",
  "2001xx84": "Inversion Time",
  "2001xx85": "Magnetic Field Strength",
  "2001xx86": "Number of Phase Encoding Steps",
  "2001xx87": "Imaged Nucleus",
  "2001xx88": "Number of Averages",
  "2001xx89": "Phase FOV Percent",
  "2001xx8A": "Sampling Percent",
  "2001xx8B": "Transmitting Coil",
  "2001xx90": "Text Foreground Color",
  "2001xx91": "Text Background Color",
  "2001xx92": "Text Shadow Color",
  "2001xx93": "Text Style",
  "2001xx9A": "?",
  "2001xx9B": "Graphic Number",
  "2001xx9C": "Graphic Annotation Label",
  "2001xx9F": "Pixel Processing Kernel Size",
  "2001xxA1": "Is Raw Image",
  "2001xxA3": "Text Color Foreground",
  "2001xxA4": "Text Color Background",
  "2001xxA5": "Text Color Shadow",
  "2001xxC8": "Exam Card Name",
  "2001xxCC": "Derivation Description",
  "2001xxDA": "?",
  "2001xxF1": "Prospective Motion Correction",
  "2001xxF2": "Retrospective Motion Correction"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR",
  "0009xx10": "SPI Release",
  "0009xx12": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR IMAGING DD 001",
  "2005xx00": "Image Angulation AP",
  "2005xx01": "Image Angulation FH",
  "2005xx02": "Image Angulation RL",
  "2005xx04": "Image Display Orientation",
  "2005xx05": "Synergy Reconstruction Type",
  "2005xx08": "Image Offcenter AP",
  "2005xx09": "Image Offcenter FH",
  "2005xx0A": "Image OffCentre RL",
  "2005xx0B": "Max FP",
  "2005xx0C": "Min FP",
  "2005xx0D": "Scale Intercept",
  "2005xx0E": "Scale Slope",
  "2005xx0F": "Window Center",
  "2005xx10": "Window Width",
  "2005xx11": "Image Type",
  "2005xx12": "Cardiac Gating",
  "2005xx13": "Development Mode",
  "2005xx14": "Diffusion",
  "2005xx15": "Fat Saturation",
  "2005xx16": "Flow Compensation",
  "2005xx17": "Fourier Interpolation",
  "2005xx18": "Hardcopy Protocol",
  "2005xx19": "Inverse Reconstructed",
  "2005xx1A": "Label Syntax",
  "2005xx1B": "Magnetization Prepared",
  "2005xx1C": "Magnetization Transfer Contrast",
  "2005xx1D": "Measurement Scan Resolution",
  "2005xx1E": "MIP Protocol",
  "2005xx1F": "MPR Protocol",
  "2005xx20": "Number of Chemical Shift",
  "2005xx21": "Number of Mixes",
  "2005xx22": "Number of References",
  "2005xx23": "Number of Slabs",
  "2005xx25": "Number of Volumes",
  "2005xx26": "Over Sampling Phase",
  "2005xx27": "Package Mode",
  "2005xx28": "Partial Fourier Frequency",
  "2005xx29": "PartialFourierPhase",
  "2005xx2A": "Patient Reference ID",
  "2005xx2B": "Percent Scan Complete",
  "2005xx2C": "Phase Encode Reordering",
  "2005xx2D": "PlanScan Survey Number of Images",
  "2005xx2E": "PPG PPU Gating",
  "2005xx2F": "Spatial Presaturation",
  "2005xx30": "Repetition Time",
  "2005xx31": "Respiratory Gating",
  "2005xx32": "Sample Representation",
  "2005xx33": "Acquisition Duration",
  "2005xx34": "Segmented KSpace",
  "2005xx35": "Data Type",
  "2005xx36": "Is Cardiac",
  "2005xx37": "Is Spectro",
  "2005xx38": "Spoiled",
  "2005xx39": "Steady State",
  "2005xx3A": "Sub Anatomy",
  "2005xx3B": "Time Reversed Steady State",
  "2005xx3C": "Tilt Optimized Nonsaturated Excitation",
  "2005xx3D": "Number of RR Interval Ranges",
  "2005xx3E": "RR Intervals Distribution",
  "2005xx3F": "PlanScan Acquisition Number",
  "2005xx48": "Referenced Acquisition Number",
  "2005xx49": "Referenced Chemical Shift Number",
  "2005xx4A": "Referenced Dynamic Scan Number",
  "2005xx4B": "Referenced Echo Number",
  "2005xx4C": "Referenced Entity",
  "2005xx4D": "Referenced Image Type",
  "2005xx4E": "Slab FOV RL",
  "2005xx4F": "Slab Offcentre AP",
  "2005xx50": "Slab Offcentre FH",
  "2005xx51": "Slab Offcentre RL",
  "2005xx52": "Slab Type",
  "2005xx53": "Slab View Axis",
  "2005xx54": "Volume Angulation AP",
  "2005xx55": "Volume Angulation FH",
  "2005xx56": "Volume Angulation RL",
  "2005xx57": "Volume FOV AP",
  "2005xx58": "Volume FOV FH",
  "2005xx59": "Volume FOV RL",
  "2005xx5A": "Volume Offcentre AP",
  "2005xx5B": "Volume Offcentre FH",
  "2005xx5C": "Volume Offcentre RL",
  "2005xx5D": "Volume Type",
  "2005xx5E": "Volume View Axis",
  "2005xx5F": "Study Origin",
  "2005xx60": "Study Sequence Number",
  "2005xx61": "Prepulse Type",
  "2005xx63": "fMRI Status Indication",
  "2005xx64": "Reference Phase Number",
  "2005xx65": "Reference Reconstruction Number",
  "2005xx66": "Reference Scanning Sequence",
  "2005xx67": "Reference Slice Number",
  "2005xx68": "Reference Type",
  "2005xx69": "Slab Angulation AP",
  "2005xx6A": "Slab Angulation FH",
  "2005xx6B": "Slab Angulation RL",
  "2005xx6C": "Slab FOV AP",
  "2005xx6D": "Slab FOV FH",
  "2005xx6E": "Scanning Sequence",
  "2005xx6F": "Acquisition Type",
  "2005xx70": "Hardcopy Protocol EasyVision",
  "2005xx71": "Stack Angulation AP",
  "2005xx72": "Stack Angulation FH",
  "2005xx73": "Stack Angulation RL",
  "2005xx74": "Stack FOV AP",
  "2005xx75": "Stack FOV FH",
  "2005xx76": "Stack FOV RL",
  "2005xx78": "Stack Offcentre AP",
  "2005xx79": "Stack Offcentre FH",
  "2005xx7A": "Stack Offcentre RL",
  "2005xx7B": "Stack Preparation Direction",
  "2005xx7E": "Stack Slice Distance",
  "2005xx80": "Series PlanScan",
  "2005xx81": "Stack View Axis",
  "2005xx83": "Series Slab",
  "2005xx84": "Series Reference",
  "2005xx85": "Series Volume",
  "2005xx86": "Number of Geometry",
  "2005xx9E": "Series Geometry",
  "2005xx9F": "Spectral Selective Excitation Pulse",
  "2005xxA0": "Dynamic Scan Begin Time",
  "2005xxA1": "Syncra Scan Type",
  "2005xxA2": "Is COCA",
  "2005xxA3": "Stack Coil ID",
  "2005xxA4": "Stack CBB Coil 1",
  "2005xxA5": "Stack CBB Coil 2",
  "2005xxA6": "Stack Channel Combination Bitmask",
  "2005xxA7": "Stack Coil Connection",
  "2005xxA8": "Inversion Time",
  "2005xxA9": "Geometry Correction",
  "2005xxB0": "Diffusion Direction RL",
  "2005xxB1": "Diffusion Direction AP",
  "2005xxB2": "Diffusion Direction FH",
  "2005xxC0": "Scan Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR R5.5/PART",
  "0019xx00": "Field of View"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR R5.6/PART",
  "0019xx00": "Field of View"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR SPECTRO;1",
  "0019xx01": "?",
  "0019xx02": "?",
  "0019xx03": "?",
  "0019xx04": "?",
  "0019xx05": "?",
  "0019xx06": "?",
  "0019xx07": "?",
  "0019xx08": "?",
  "0019xx09": "?",
  "0019xx10": "?",
  "0019xx12": "?",
  "0019xx13": "?",
  "0019xx14": "?",
  "0019xx15": "?",
  "0019xx16": "?",
  "0019xx17": "?",
  "0019xx18": "?",
  "0019xx20": "?",
  "0019xx21": "?",
  "0019xx22": "?",
  "0019xx23": "?",
  "0019xx24": "?",
  "0019xx25": "?",
  "0019xx26": "?",
  "0019xx27": "?",
  "0019xx28": "?",
  "0019xx29": "?",
  "0019xx31": "?",
  "0019xx32": "?",
  "0019xx41": "?",
  "0019xx42": "?",
  "0019xx43": "?",
  "0019xx45": "?",
  "0019xx46": "?",
  "0019xx47": "?",
  "0019xx48": "?",
  "0019xx49": "?",
  "0019xx50": "?",
  "0019xx60": "?",
  "0019xx61": "?",
  "0019xx70": "?",
  "0019xx71": "?",
  "0019xx72": "?",
  "0019xx73": "?",
  "0019xx74": "?",
  "0019xx76": "?",
  "0019xx77": "?",
  "0019xx78": "?",
  "0019xx79": "?",
  "0019xx80": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR/LAST",
  "0019xx09": "Main Magnetic Field",
  "0019xx0e": "Flow Compensation",
  "0019xxB7": "?",
  "0019xxE4": "?",
  "0019xxE5": "?",
  "0019xxb1": "Minimum RR Interval",
  "0019xxb2": "Maximum RR Interval",
  "0019xxb3": "Number of Rejections",
  "0019xxb4": "Number of RR Intervals",
  "0019xxb5": "Arrhythmia Rejection",
  "0019xxc0": "?",
  "0019xxc6": "Cycled Multiple Slice",
  "0019xxce": "REST",
  "0019xxd5": "?",
  "0019xxd6": "Fourier Interpolation",
  "0019xxd9": "?",
  "0019xxe0": "Prepulse",
  "0019xxe1": "Prepulse Delay",
  "0019xxe2": "?",
  "0019xxe3": "?",
  "0019xxf0": "WS Protocol String 1",
  "0019xxf1": "WS Protocol String 2",
  "0019xxf2": "WS Protocol String 3",
  "0019xxf3": "WS Protocol String 4",
  "0021xx00": "?",
  "0021xx10": "?",
  "0021xx20": "?",
  "0021xx21": "Slice Gap",
  "0021xx22": "Stack Radial Angle",
  "0027xx00": "?",
  "0027xx11": "?",
  "0027xx12": "?",
  "0027xx13": "?",
  "0027xx14": "?",
  "0027xx15": "?",
  "0027xx16": "?",
  "0029xx10": "FP Min",
  "0029xx20": "FP Max",
  "0029xx30": "Scaled Minimum",
  "0029xx40": "Scaled Maximum",
  "0029xx50": "Window Minimum",
  "0029xx60": "Window Maximum",
  "0029xx61": "?",
  "0029xx62": "?",
  "0029xx70": "?",
  "0029xx71": "?",
  "0029xx72": "?",
  "0029xx80": "View Center",
  "0029xx81": "View Size",
  "0029xx82": "View Zoom",
  "0029xx83": "View Transform",
  "0041xx07": "?",
  "0041xx09": "?",
  "6001xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR/PART",
  "0019xx00": "Field of View",
  "0019xx01": "Stack Type",
  "0019xx02": "?",
  "0019xx03": "?",
  "0019xx05": "CC Angulation",
  "0019xx06": "AP Angulation",
  "0019xx07": "LR Angulation",
  "0019xx08": "Patient Orientation 1",
  "0019xx09": "Patient Orientation",
  "0019xx0a": "Slice Orientation",
  "0019xx0b": "LR Offcenter",
  "0019xx0c": "CC Offcenter",
  "0019xx0d": "AP Offcenter",
  "0019xx0e": "?",
  "0019xx0f": "Number of Slices",
  "0019xx10": "Slice Factor",
  "0019xx11": "Echo Times",
  "0019xx14": "?",
  "0019xx15": "Dynamic Study",
  "0019xx18": "Heartbeat Interval",
  "0019xx19": "Repetition Time FFE",
  "0019xx1a": "FFE Flip Angle",
  "0019xx1b": "Number of Scans",
  "0019xx1c": "?",
  "0019xx1d": "?",
  "0019xx1e": "?",
  "0019xx21": "?",
  "0019xx22": "Dynamic Scan Time Begin",
  "0019xx23": "?",
  "0019xx24": "?",
  "0019xx25": "?",
  "0019xx26": "?",
  "0019xx27": "?",
  "0019xx28": "?",
  "0019xx29": "?",
  "0019xx30": "?",
  "0019xx31": "?",
  "0019xx40": "?",
  "0019xx45": "Reconstruction Resolution",
  "0019xx50": "?",
  "0019xx51": "?",
  "0019xx52": "?",
  "0019xx53": "?",
  "0019xx54": "?",
  "0019xx55": "?",
  "0019xx56": "?",
  "0019xx57": "?",
  "0019xx58": "?",
  "0019xx59": "?",
  "0019xx60": "?",
  "0019xx61": "?",
  "0019xx62": "?",
  "0019xx63": "?",
  "0019xx64": "Repetition Time SE",
  "0019xx65": "Repetition Time IR",
  "0019xx66": "?",
  "0019xx67": "?",
  "0019xx69": "Number of Phases",
  "0019xx6a": "Cardiac Frequency",
  "0019xx6b": "Inversion Delay",
  "0019xx6c": "Gate Delay",
  "0019xx6d": "Gate Width",
  "0019xx6e": "Trigger Delay Time",
  "0019xx70": "?",
  "0019xx80": "Number of Chemical Shifts",
  "0019xx81": "Chemical Shift",
  "0019xx84": "Number of Rows",
  "0019xx85": "Number of Samples",
  "0019xx8A": "?",
  "0019xx8B": "?",
  "0019xx8C": "?",
  "0019xx8D": "?",
  "0019xx8E": "?",
  "0019xx8F": "?",
  "0019xx94": "Magnetization Transfer Contrast",
  "0019xx95": "Spectral Presaturation With Inversion Recovery",
  "0019xx96": "?",
  "0019xx97": "?",
  "0019xxB4": "?",
  "0019xxB5": "?",
  "0019xxB6": "?",
  "0019xxD1": "?",
  "0019xxD3": "?",
  "0019xxF0": "?",
  "0019xxF6": "?",
  "0019xxF7": "?",
  "0019xxF8": "?",
  "0019xxF9": "?",
  "0019xxFA": "?",
  "0019xxFB": "?",
  "0019xxa0": "?",
  "0019xxa1": "?",
  "0019xxa3": "?",
  "0019xxa4": "?",
  "0019xxc0": "Trigger Delay Times",
  "0019xxc8": "?",
  "0019xxc9": "Foldover Direction Transverse",
  "0019xxca": "Foldover Direction Sagittal",
  "0019xxcb": "Foldover Direction Coronal",
  "0019xxcc": "?",
  "0019xxcd": "?",
  "0019xxce": "?",
  "0019xxcf": "Number of Echoes",
  "0019xxd0": "Scan Resolution",
  "0019xxd2": "Water Fat Shift",
  "0019xxd4": "Artifact Reduction",
  "0019xxd5": "?",
  "0019xxd6": "?",
  "0019xxd7": "Scan Percentage",
  "0019xxd8": "Halfscan",
  "0019xxd9": "EPI Factor",
  "0019xxda": "Turbo Factor",
  "0019xxdb": "?",
  "0019xxe0": "Percentage of Scan Completed",
  "0019xxe1": "Prepulse Delay",
  "0019xxe3": "Phase Contrast Velocity",
  "0019xxfc": "Resonance Frequency",
  "0021xx00": "Reconstruction Number",
  "0021xx06": "?",
  "0021xx08": "?",
  "0021xx09": "?",
  "0021xx0a": "?",
  "0021xx0f": "?",
  "0021xx10": "Image Type",
  "0021xx13": "?",
  "0021xx15": "?",
  "0021xx20": "Slice Number",
  "0021xx21": "Slice Gap",
  "0021xx30": "Echo Number",
  "0021xx31": "Patient Reference ID",
  "0021xx35": "Chemical Shift Number",
  "0021xx40": "Phase Number",
  "0021xx50": "Dynamic Scan Number",
  "0021xx60": "Number of Rows In Object",
  "0021xx61": "Row Number",
  "0021xx62": "?",
  "0029xx00": "?",
  "0029xx04": "?",
  "0029xx10": "?",
  "0029xx11": "?",
  "0029xx20": "?",
  "0029xx31": "?",
  "0029xx32": "?",
  "0029xx50": "?",
  "0029xx51": "?",
  "0029xx52": "?",
  "0029xx53": "?",
  "0029xxd5": "Slice Thickness"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR/PART 12",
  "0009xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR/PART 6",
  "0019xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS MR/PART 7",
  "0019xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS NM -Private",
  "7051xx00": "Current Segment",
  "7051xx01": "Number of Segments",
  "7051xx02": "Segment Start Position",
  "7051xx03": "Segment Stop Position",
  "7051xx04": "Relative COR offset - X direction",
  "7051xx05": "Relative COR offset - Z direction",
  "7051xx06": "Current Rotation Number",
  "7051xx07": "Number of Rotations",
  "7051xx10": "Alignment Translations",
  "7051xx11": "Alignment Rotations",
  "7051xx12": "Alignment Timestamp",
  "7051xx15": "Related Xray Series Instance UID",
  "7051xx25": "?",
  "7051xx26": "?",
  "7051xx27": "?",
  "7051xx28": "?",
  "7051xx29": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS XCT -Private",
  "7051xx01": "Attenuation Threshold",
  "7051xx02": "DLPEstimate"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PHILIPS-MR-1",
  "0019xx11": "Chemical Shift Number",
  "0019xx12": "Phase Number",
  "0021xx01": "Reconstruction Number",
  "0021xx02": "Slice Number"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PMS-THORA-5.1",
  "0089xx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips EV Imaging DD 022",
  "2007xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 001",
  "2001xx01": "Chemical Shift",
  "2001xx02": "Chemical Shift Number MR",
  "2001xx03": "Diffusion B-Factor",
  "2001xx04": "Diffusion Direction",
  "2001xx05": "Graphic Annotation ParentID",
  "2001xx06": "Image Enhanced",
  "2001xx07": "Image Type End Diastole or End Systole",
  "2001xx08": "Phase Number",
  "2001xx09": "Image Prepulse Delay",
  "2001xx0A": "Slice Number",
  "2001xx0B": "Slice Orientation",
  "2001xx0C": "Arrhythmia Rejection",
  "2001xx0E": "Cardiac Cycled",
  "2001xx0F": "Cardiac Gate Width",
  "2001xx10": "Cardiac Sync",
  "2001xx11": "Diffusion Echo Time",
  "2001xx12": "Dynamic Series",
  "2001xx13": "EPI Factor",
  "2001xx14": "Number of Echoes",
  "2001xx15": "Number of Locations",
  "2001xx16": "Number of PC Directions",
  "2001xx17": "Number of Phases",
  "2001xx18": "Number of Slices",
  "2001xx19": "Partial Matrix Scanned",
  "2001xx1A": "PC Velocity",
  "2001xx1B": "Prepulse Delay",
  "2001xx1C": "Prepulse Type",
  "2001xx1D": "Reconstruction Number",
  "2001xx1E": "Reformat Accuracy",
  "2001xx1F": "Respiration Sync",
  "2001xx20": "Scanning Technique",
  "2001xx21": "SPIR",
  "2001xx22": "Water-Fat Shift",
  "2001xx23": "Flip Angle",
  "2001xx24": "Series is Interactive",
  "2001xx25": "Echo Time Display",
  "2001xx26": "Presentation State Subtraction Active",
  "2001xx29": "?",
  "2001xx2B": "?",
  "2001xx2D": "Number of Slices in Stack",
  "2001xx32": "Stack Radial Angle",
  "2001xx33": "Stack Radial Axis",
  "2001xx35": "Stack Slice Number",
  "2001xx36": "Stack Type",
  "2001xx39": "?",
  "2001xx3D": "Contour Fill Color",
  "2001xx3F": "Displayed Area Zoom Interpolation Method",
  "2001xx43": "Ellipse Display Shutter Major Axis First End Point",
  "2001xx44": "Ellipse Display Shutter Major Axis Second End Point",
  "2001xx45": "Ellipse Display Shutter Other Axis First End Point",
  "2001xx46": "Graphic Line Style",
  "2001xx47": "Graphic Line Width",
  "2001xx48": "Graphic Annotation ID",
  "2001xx4B": "Interpolation Method",
  "2001xx4C": "Poly Line Begin Point Style",
  "2001xx4D": "Poly Line End Point Style",
  "2001xx4E": "Window Smoothing Taste",
  "2001xx50": "Graphic Marker Type",
  "2001xx51": "Overlay Plane ID",
  "2001xx52": "Image Presentation State UID",
  "2001xx53": "Presentation GL Transform Invert",
  "2001xx54": "Contour Fill Transparency",
  "2001xx55": "Graphic Line Color",
  "2001xx56": "Graphic Type",
  "2001xx58": "Contrast Transfer Taste",
  "2001xx5A": "Graphic Annotation Model",
  "2001xx5D": "Measurement Text Units",
  "2001xx5E": "Measurement Text Type",
  "2001xx5F": "Stack Sequence",
  "2001xx60": "Number of Stacks",
  "2001xx61": "Series Transmitted",
  "2001xx62": "Series Committed",
  "2001xx63": "Examination Source",
  "2001xx64": "Text Type",
  "2001xx65": "Graphic Overlay Plane",
  "2001xx67": "Linear Presentation GL Transform Shape Sub",
  "2001xx68": "Linear Modality GL Transform",
  "2001xx69": "Display Shutter",
  "2001xx6A": "Spatial Transformation",
  "2001xx6B": "?",
  "2001xx6D": "Text Font",
  "2001xx6E": "Series Type",
  "2001xx71": "Graphic Constraint",
  "2001xx72": "Ellipse Display Shutter Other Axis Second End Point",
  "2001xx74": "?",
  "2001xx75": "?",
  "2001xx76": "Number of Frames",
  "2001xx77": "GL Transform Type",
  "2001xx7A": "Window Rounding Factor",
  "2001xx7B": "Acquisition Number",
  "2001xx7C": "Frame Number",
  "2001xx80": "?",
  "2001xx81": "Number of Dynamic Scans",
  "2001xx82": "Echo Train Length",
  "2001xx83": "Imaging Frequency",
  "2001xx84": "Inversion Time",
  "2001xx85": "Magnetic Field Strength",
  "2001xx86": "Number of Phase Encoding Steps",
  "2001xx87": "Imaged Nucleus",
  "2001xx88": "Number of Averages",
  "2001xx89": "Phase FOV Percent",
  "2001xx8A": "Sampling Percent",
  "2001xx8B": "Transmitting Coil",
  "2001xx90": "Text Foreground Color",
  "2001xx91": "Text Background Color",
  "2001xx92": "Text Shadow Color",
  "2001xx93": "Text Style",
  "2001xx9A": "?",
  "2001xx9B": "Graphic Number",
  "2001xx9C": "Graphic Annotation Label",
  "2001xx9F": "Pixel Processing Kernel Size",
  "2001xxA1": "Is Raw Image",
  "2001xxA3": "Text Color Foreground",
  "2001xxA4": "Text Color Background",
  "2001xxA5": "Text Color Shadow",
  "2001xxC8": "Exam Card Name",
  "2001xxCC": "Derivation Description",
  "2001xxDA": "?",
  "2001xxF1": "Prospective Motion Correction",
  "2001xxF2": "Retrospective Motion Correction"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 002",
  "2001xx01": "?",
  "2001xx02": "?",
  "2001xx13": "?",
  "2001xx14": "?",
  "2001xx15": "?",
  "2001xx16": "?",
  "2001xx17": "?",
  "2001xx18": "?",
  "2001xx19": "?",
  "2001xx1A": "?",
  "2001xx1B": "?",
  "2001xx1C": "?",
  "2001xx1D": "?",
  "2001xx1E": "?",
  "2001xx1F": "?",
  "2001xx20": "?",
  "2001xx21": "?",
  "2001xx22": "?",
  "2001xx23": "?",
  "2001xx24": "?",
  "2001xx25": "?",
  "2001xx26": "?",
  "2001xx27": "?",
  "2001xx28": "?",
  "2001xx29": "?",
  "2001xx2A": "?",
  "2001xx2B": "?",
  "2001xx2C": "?",
  "2001xx2D": "?",
  "2001xx2E": "?",
  "2001xx2F": "?",
  "2001xx30": "?",
  "2001xx31": "?",
  "2001xx32": "?",
  "2001xx33": "?",
  "2001xx34": "?",
  "2001xx35": "?",
  "2001xx36": "?",
  "2001xx37": "?",
  "2001xx39": "?",
  "2001xx3A": "?",
  "2001xx3B": "?",
  "2001xx3C": "?",
  "2001xx3D": "?",
  "2001xx3E": "?",
  "2001xx3F": "?",
  "2001xx40": "?",
  "2001xx6B": "?",
  "2001xx6C": "?",
  "2001xx72": "?",
  "2001xx73": "?",
  "2001xxB8": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 065",
  "4007xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 067",
  "4001xx00": "",
  "4001xx01": "?",
  "4001xx08": "?",
  "4001xx09": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 070",
  "4001xx10": "?",
  "4001xx11": "?",
  "4001xx12": "?",
  "4001xx13": "?",
  "4001xx16": "?",
  "4001xx17": "?",
  "4001xx18": "?",
  "4001xx1C": "",
  "4001xx1D": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 073",
  "4007xx48": "?",
  "4007xx4B": "?",
  "4007xx4C": "?",
  "4007xx4D": "?",
  "4007xx4E": "?",
  "4007xx4F": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 124",
  "1001xx03": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips Imaging DD 129",
  "2001xx00": "Presentation State Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 001",
  "2005xx00": "Image Angulation AP",
  "2005xx01": "Image Angulation FH",
  "2005xx02": "Image Angulation RL",
  "2005xx03": "Image Annotation Count",
  "2005xx04": "Image Display Orientation",
  "2005xx05": "Synergy Reconstruction Type",
  "2005xx07": "Image Line Count",
  "2005xx08": "Image Offcenter AP",
  "2005xx09": "Image Offcenter FH",
  "2005xx0A": "Image OffCentre RL",
  "2005xx0B": "Max FP",
  "2005xx0C": "Min FP",
  "2005xx0D": "Scale Intercept",
  "2005xx0E": "Scale Slope",
  "2005xx0F": "Window Center",
  "2005xx10": "Window Width",
  "2005xx11": "Image Type",
  "2005xx12": "Cardiac Gating",
  "2005xx13": "Development Mode",
  "2005xx14": "Diffusion",
  "2005xx15": "Fat Saturation",
  "2005xx16": "Flow Compensation",
  "2005xx17": "Fourier Interpolation",
  "2005xx18": "Hardcopy Protocol",
  "2005xx19": "Inverse Reconstructed",
  "2005xx1A": "Label Syntax",
  "2005xx1B": "Magnetization Prepared",
  "2005xx1C": "Magnetization Transfer Contrast",
  "2005xx1D": "Measurement Scan Resolution",
  "2005xx1E": "MIP Protocol",
  "2005xx1F": "MPR Protocol",
  "2005xx20": "Number of Chemical Shifts",
  "2005xx21": "Number of Mixes",
  "2005xx22": "Number of References",
  "2005xx23": "Number of Slabs",
  "2005xx25": "Number of Volumes",
  "2005xx26": "Over Sampling Phase",
  "2005xx27": "Package Mode",
  "2005xx28": "Partial Fourier Frequency",
  "2005xx29": "PartialFourierPhase",
  "2005xx2A": "Patient Reference ID",
  "2005xx2B": "Percent Scan Complete",
  "2005xx2C": "Phase Encode Reordering",
  "2005xx2D": "PlanScan Survey Number of Images",
  "2005xx2E": "PPG PPU Gating",
  "2005xx2F": "Spatial Presaturation",
  "2005xx30": "Repetition Time",
  "2005xx31": "Respiratory Gating",
  "2005xx32": "Sample Representation",
  "2005xx33": "Acquisition Duration",
  "2005xx34": "Segmented KSpace",
  "2005xx35": "Data Type",
  "2005xx36": "Is Cardiac",
  "2005xx37": "Is Spectro",
  "2005xx38": "Spoiled",
  "2005xx39": "Steady State",
  "2005xx3A": "Sub Anatomy",
  "2005xx3B": "Time Reversed Steady State",
  "2005xx3C": "Tilt Optimized Nonsaturated Excitation",
  "2005xx3D": "Number of RR Interval Ranges",
  "2005xx3E": "RR Intervals Distribution",
  "2005xx3F": "PlanScan Acquisition Number",
  "2005xx40": "PlanScan Survey Chemical Shift Number",
  "2005xx41": "PlanScan Survey Dynamic Scan Number",
  "2005xx42": "PlanScan Survey Echo Number",
  "2005xx43": "PlanScan Survey Image Type",
  "2005xx44": "PlanScan Survey Phase Number",
  "2005xx45": "PlanScan Survey Reconstruction Number",
  "2005xx46": "PlanScan Survey Scanning Sequence",
  "2005xx47": "PlanScan Survey Slice Number",
  "2005xx48": "Referenced Acquisition Number",
  "2005xx49": "Referenced Chemical Shift Number",
  "2005xx4A": "Referenced Dynamic Scan Number",
  "2005xx4B": "Referenced Echo Number",
  "2005xx4C": "Referenced Entity",
  "2005xx4D": "Referenced Image Type",
  "2005xx4E": "Slab FOV RL",
  "2005xx4F": "Slab Offcentre AP",
  "2005xx50": "Slab Offcentre FH",
  "2005xx51": "Slab Offcentre RL",
  "2005xx52": "Slab Type",
  "2005xx53": "Slab View Axis",
  "2005xx54": "Volume Angulation AP",
  "2005xx55": "Volume Angulation FH",
  "2005xx56": "Volume Angulation RL",
  "2005xx57": "Volume FOV AP",
  "2005xx58": "Volume FOV FH",
  "2005xx59": "Volume FOV RL",
  "2005xx5A": "Volume Offcentre AP",
  "2005xx5B": "Volume Offcentre FH",
  "2005xx5C": "Volume Offcentre RL",
  "2005xx5D": "Volume Type",
  "2005xx5E": "Volume View Axis",
  "2005xx5F": "Study Origin",
  "2005xx60": "Study Sequence Number",
  "2005xx61": "Prepulse Type",
  "2005xx63": "fMRI Status Indication",
  "2005xx64": "Reference Phase Number",
  "2005xx65": "Reference Reconstruction Number",
  "2005xx66": "Reference Scanning Sequence",
  "2005xx67": "Reference Slice Number",
  "2005xx68": "Reference Type",
  "2005xx69": "Slab Angulation AP",
  "2005xx6A": "Slab Angulation FH",
  "2005xx6B": "Slab Angulation RL",
  "2005xx6C": "Slab FOV AP",
  "2005xx6D": "Slab FOV FH",
  "2005xx6E": "Scanning Sequence",
  "2005xx6F": "Acquisition Type",
  "2005xx70": "Hardcopy Protocol EasyVision",
  "2005xx71": "Stack Angulation AP",
  "2005xx72": "Stack Angulation FH",
  "2005xx73": "Stack Angulation RL",
  "2005xx74": "Stack FOV AP",
  "2005xx75": "Stack FOV FH",
  "2005xx76": "Stack FOV RL",
  "2005xx78": "Stack Offcentre AP",
  "2005xx79": "Stack Offcentre FH",
  "2005xx7A": "Stack Offcentre RL",
  "2005xx7B": "Stack Preparation Direction",
  "2005xx7E": "Stack Slice Distance",
  "2005xx80": "Series PlanScan",
  "2005xx81": "Stack View Axis",
  "2005xx83": "Series Slab",
  "2005xx84": "Series Reference",
  "2005xx85": "Series Volume",
  "2005xx86": "Number of Geometry",
  "2005xx87": "Number of Geometry Slices",
  "2005xx88": "Geom Angulation AP",
  "2005xx89": "Geom Angulation FH",
  "2005xx8A": "Geom Angulation RL",
  "2005xx8B": "Geom FOV AP",
  "2005xx8C": "Geom FOV FH",
  "2005xx8D": "Geom FOV RL",
  "2005xx8E": "Geom OffCentre AP",
  "2005xx8F": "Geom OffCentre FH",
  "2005xx90": "Geom OffCentre RL",
  "2005xx91": "Geom Preparation Direct",
  "2005xx92": "Geom Radial Angle",
  "2005xx93": "Geom Radial Axis",
  "2005xx94": "Geom Slice Distance",
  "2005xx95": "Geom Slice Number",
  "2005xx96": "Geom Type",
  "2005xx97": "Geom ViewA xis",
  "2005xx98": "Geom Colour",
  "2005xx99": "Geom Application Type",
  "2005xx9A": "Geom Id",
  "2005xx9B": "Geom Application Name",
  "2005xx9C": "Geom Label Name",
  "2005xx9D": "Geom Line Style",
  "2005xx9E": "Series Geometry",
  "2005xx9F": "SeriesSpectral Selective Excitation Pulse",
  "2005xxA0": "Dynamic Scan Begin Time",
  "2005xxA1": "Syncra Scan Type",
  "2005xxA2": "Is COCA",
  "2005xxA3": "Stack Coil ID",
  "2005xxA4": "Stack CBB Coil 1",
  "2005xxA5": "Stack CBB Coil 2",
  "2005xxA6": "Stack Channel Combination Bitmask",
  "2005xxA7": "Stack Coil Connection",
  "2005xxA8": "Inversion Time",
  "2005xxA9": "Geometry Correction",
  "2005xxB0": "Diffusion Direction RL",
  "2005xxB1": "Diffusion Direction AP",
  "2005xxB2": "Diffusion Direction FH",
  "2005xxC0": "Scan Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 002",
  "2005xx15": "User Name",
  "2005xx16": "Pass Word",
  "2005xx17": "Server Name",
  "2005xx18": "Data Base Name",
  "2005xx19": "RootName",
  "2005xx20": "DMI Application Name",
  "2005xx2D": "Root Id",
  "2005xx32": "Blob Data Object Array",
  "2005xx34": "Series Transaction UID",
  "2005xx35": "Parent ID",
  "2005xx36": "Parent Type",
  "2005xx37": "Blob Name",
  "2005xx38": "Application Name",
  "2005xx39": "Type Name",
  "2005xx40": "Version String",
  "2005xx41": "Comment String",
  "2005xx42": "Blob In File",
  "2005xx43": "Actual Blob Size",
  "2005xx44": "Blob Data",
  "2005xx45": "Blob Filename",
  "2005xx46": "Blob Offset",
  "2005xx47": "Blob Flag",
  "2005xx99": "Number of Request Excerpts"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 003",
  "2005xx00": "Number of SOP Common",
  "2005xx01": "Number of Film Consumption",
  "2005xx13": "Number of Codes",
  "2005xx34": "Number of Image Per Series Ref",
  "2005xx43": "No Date of Last Calibration",
  "2005xx44": "No Time of Last Calibration",
  "2005xx45": "Number of Software Version",
  "2005xx47": "Number of Patient Other Names",
  "2005xx48": "Number of Req Recipe of Results",
  "2005xx49": "Number of Series Operators Name",
  "2005xx50": "Number of Series Performing Physicians Name",
  "2005xx51": "Number of Study Admitting Diagnostic Description",
  "2005xx52": "Number of Study Patient Contrast Allergies",
  "2005xx53": "Number of Study Patient Medical Alerts",
  "2005xx54": "Number of Study Physicians of Record",
  "2005xx55": "Number of Study Physicians Reading Study",
  "2005xx56": "Number of SC Software Versions",
  "2005xx57": "Number of Running Attributes",
  "2005xx70": "Spectrum Pixel Data",
  "2005xx81": "Default Image UID",
  "2005xx82": "Running Attributes"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 004",
  "2005xx00": "Spectrum Extra Number",
  "2005xx01": "Spectrum Kx Coordinate",
  "2005xx02": "Spectrum Ky Coordinate",
  "2005xx03": "Spectrum Location Number",
  "2005xx04": "Spectrum Mix Number",
  "2005xx05": "Spectrum X Coordinate",
  "2005xx06": "Spectrum Y Coordinate",
  "2005xx07": "Spectrum DC Level",
  "2005xx08": "Spectrum Noise Level",
  "2005xx09": "Spectrum Begin Time",
  "2005xx10": "Spectrum Echo Time",
  "2005xx12": "Spectrum Inversion Time",
  "2005xx13": "Spectrum Number",
  "2005xx14": "Spectrum Number of Averages",
  "2005xx15": "Spectrum Number of Samples",
  "2005xx16": "Spectrum Scan Sequence Number",
  "2005xx17": "Spectrum Number of Peaks",
  "2005xx18": "Spectrum Peak",
  "2005xx19": "Spectrum Peak Intensity",
  "2005xx20": "Spectrum Peak Label",
  "2005xx21": "Spectrum Peak Phase",
  "2005xx22": "Spectrum Peak Position",
  "2005xx23": "Spectrum Peak Type",
  "2005xx24": "Spectrum Peak Width",
  "2005xx25": "Spectro SI B0 Correction",
  "2005xx26": "Spectro B0 Echo Top Position",
  "2005xx27": "Spectro Complex Component",
  "2005xx28": "Spectro Data Origin",
  "2005xx29": "Spectro Echo Top Position",
  "2005xx30": "InPlane Transforms",
  "2005xx31": "Number of Spectra Acquired",
  "2005xx33": "Phase Encoding Echo Top Positions",
  "2005xx34": "Physical Quantity for Chemical Shift",
  "2005xx35": "Physical Quantity Spatial",
  "2005xx36": "Reference Frequency",
  "2005xx37": "Sample Offset",
  "2005xx38": "Sample Pitch",
  "2005xx39": "Search Interval for Peaks",
  "2005xx40": "Signal Domain for Chemical Shift",
  "2005xx41": "Signal Domain Spatial",
  "2005xx42": "Signal Type",
  "2005xx43": "Spectro Additional Rotations",
  "2005xx44": "Spectro Display Ranges",
  "2005xx45": "Spectro Echo Acquisition",
  "2005xx46": "Spectro Frequency Unit",
  "2005xx47": "Spectro Gamma",
  "2005xx48": "Spectro Hidden Line Removal",
  "2005xx49": "Spectro Horizontal Shift",
  "2005xx50": "Spectro Horizontal Window",
  "2005xx51": "Spectro Number of Display Ranges",
  "2005xx52": "Spectro Number of Echo Pulses",
  "2005xx53": "Spectro Processing History",
  "2005xx54": "Spectro Scan Type",
  "2005xx55": "Spectro SI CS Intervals",
  "2005xx56": "Spectro SI Mode",
  "2005xx57": "Spectro Spectral BW",
  "2005xx58": "Spectro Title Line",
  "2005xx59": "Spectro Turbo Echo Spacing",
  "2005xx60": "Spectro Vertical Shift",
  "2005xx61": "Spectro Vertical Window",
  "2005xx62": "Spectro Offset",
  "2005xx63": "Spectrum Pitch",
  "2005xx64": "Volume Selection",
  "2005xx70": "Number Mixes Spectro",
  "2005xx71": "Series SP Mix",
  "2005xx72": "SP Mix T Resolution",
  "2005xx73": "SP Mix KX Resolution",
  "2005xx74": "SP Mix KY Resolution",
  "2005xx75": "SP Mix F Resolution",
  "2005xx76": "SP Mix X Resolution",
  "2005xx77": "SP Mix Y Resolution",
  "2005xx78": "SP Mix Number of Spectra Intended",
  "2005xx79": "SP Mix Number of Averages",
  "2005xx80": "Number of MF Image Objects",
  "2005xx81": "ScanoGram Survey Number of Images",
  "2005xx82": "Number of Procedure Codes",
  "2005xx83": "Sort Attributes",
  "2005xx84": "Number of Sort Attributes",
  "2005xx85": "Image Display Direction",
  "2005xx86": "Inset Scanogram",
  "2005xx87": "Display Layout Number of Columns",
  "2005xx88": "Display Layout Number of Rows",
  "2005xx89": "Viewing Protocol",
  "2005xx90": "Stack Coil Function",
  "2005xx91": "Patient Name Job In Params",
  "2005xx92": "Geolink ID",
  "2005xx93": "Station Number",
  "2005xx94": "Processing History",
  "2005xx95": "View Procedure String",
  "2005xx96": "Flow Images Present",
  "2005xx97": "Anatomic Region Code Value",
  "2005xx98": "Mobiview Enabled",
  "2005xx99": "IViewBold Enabled"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 005",
  "2005xx00": "Volume View Enabled",
  "2005xx01": "Number of Study Reference",
  "2005xx02": "SPS Code",
  "2005xx03": "Number of SPS Codes",
  "2005xx04": "?",
  "2005xx06": "Number of PS Specific Character Sets",
  "2005xx07": "Number of Specific Character Set",
  "2005xx09": "Rescale Intercept Original",
  "2005xx0A": "Rescale Slope Original",
  "2005xx0B": "Rescale Type Original",
  "2005xx0E": "Private Shared Sequence",
  "2005xx0F": "Private Per-Frame Sequence",
  "2005xx10": "MF Conv Treat Spectro Mix Number",
  "2005xx11": "MF Private Referenced SOP Instance UID",
  "2005xx12": "Diffusion B Value Number",
  "2005xx13": "Gradient Orientation Number",
  "2005xx14": "Number of Diffusion B Values",
  "2005xx15": "Number of Diffusion Gradient Orientations",
  "2005xx16": "Plan Mode",
  "2005xx17": "Diffusion B Matrix",
  "2005xx18": "Operating Mode Type",
  "2005xx19": "Operating Mode",
  "2005xx1A": "Fat Saturation Technique",
  "2005xx1B": "Version Number Deleted Images",
  "2005xx1C": "Version Number Deleted Spectra",
  "2005xx1D": "Version Number Deleted Blobsets",
  "2005xx1E": "LUT1 Offset",
  "2005xx1F": "LUT1 Range",
  "2005xx20": "LUT1 Begin Color",
  "2005xx21": "LUT1 End Color",
  "2005xx22": "LUT2 Offset",
  "2005xx23": "LUT2 Range",
  "2005xx24": "LUT2 Begin Color",
  "2005xx25": "LUT2 End Color",
  "2005xx26": "Viewing Hardcopy Only",
  "2005xx27": "",
  "2005xx28": "Number of Label Types",
  "2005xx29": "Label Type",
  "2005xx2A": "Exam Print Status",
  "2005xx2B": "Exam Export Status",
  "2005xx2C": "Exam Storage Commit Status",
  "2005xx2D": "Exam Media Write Status",
  "2005xx2E": "dBdt",
  "2005xx2F": "Proton SAR",
  "2005xx30": "Non Proton SAR",
  "2005xx31": "Local SAR",
  "2005xx32": "Safety Override Mode",
  "2005xx33": "EV DVD Job In Params Datetime",
  "2005xx34": "DVD Job In Params Volume Label",
  "2005xx35": "Spectro Examcard",
  "2005xx36": "Referenced Series Instance UID",
  "2005xx37": "Color LUT Type",
  "2005xx38": "?",
  "2005xx39": "?",
  "2005xx3A": "Data Dictionary Contents Version",
  "2005xx3B": "Is Coil Survey",
  "2005xx3C": "Stack Table Position Longitudinal",
  "2005xx3D": "Stack Table Position Lateral",
  "2005xx3E": "Stack Posterior Coil Position",
  "2005xx3F": "Active Implantable Medical Device Limits Applied",
  "2005xx40": "Active Implantable Medical Device Head SAR Limit",
  "2005xx41": "Active Implantable Medical Device Whole Body SAR Limit",
  "2005xx42": "Active Implantable Medical Device B1 RMS Limit",
  "2005xx43": "Active Implantable Medical Device dbDt Limit",
  "2005xx44": "TFE Factor",
  "2005xx45": "Attenuation Correction",
  "2005xx46": "FWHM Shim",
  "2005xx47": "Power Optimization",
  "2005xx48": "Coil Q",
  "2005xx49": "Receiver Gain",
  "2005xx4A": "Data Window Duration",
  "2005xx4B": "Mixing Time",
  "2005xx4C": "First Echo Time",
  "2005xx4D": "Is B0 Series",
  "2005xx4E": "Is B1 Series",
  "2005xx4F": "Volume Select",
  "2005xx50": "Number of Patient Other IDs",
  "2005xx51": "Original Series Number",
  "2005xx52": "Original Series Instance UID",
  "2005xx53": "Split Series Job Params",
  "2005xx54": "Preferred Dimension for Splitting",
  "2005xx55": "Velocity Encoding Direction",
  "2005xx56": "Contrast/Bolus Number of Injections",
  "2005xx57": "Contrast/Bolus Agent Code",
  "2005xx58": "Contrast/Bolus Administration Route Code",
  "2005xx59": "Contrast/Bolus Volume",
  "2005xx5A": "Contrast/Bolus Ingredient Concentration",
  "2005xx5B": "Contrast/Bolus Dynamic Number",
  "2005xx5C": "Contrast/Bolus Sequence",
  "2005xx5D": "Contrast/Bolus ID",
  "2005xx60": "LUT to RGB Job Params",
  "2005xx90": "Original VOI LUT Sequence",
  "2005xx91": "Original Modality LUT Sequence",
  "2005xx92": "Specific Energy Dose"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips MR Imaging DD 006",
  "2005xx53": "MRE Frequency",
  "2005xx54": "MRE Amplitude",
  "2005xx55": "MREMEG Frequency",
  "2005xx56": "MREMEG Pairs",
  "2005xx57": "MREMEG Direction",
  "2005xx58": "MREMEG Amplitude",
  "2005xx59": "MRE Number of Phase Delays",
  "2005xx60": "MRE Number of Motion Cycles",
  "2005xx61": "MRE Motion MEG Phase Delay",
  "2005xx62": "MRE Inversion Algorithm Version",
  "2005xx63": "Sagittal Slice Order",
  "2005xx64": "Coronal Slice Order",
  "2005xx65": "Transversal Slice Order",
  "2005xx66": "Series Orientation",
  "2005xx67": "MR Stack Reverse",
  "2005xx68": "MRE Phase Delay Number",
  "2005xx71": "Number of Inversion Delays",
  "2005xx72": "Inversion Delay Time",
  "2005xx73": "Inversion Delay Number",
  "2005xx74": "Max DB DT",
  "2005xx75": "Max SAR",
  "2005xx76": "SAR Type",
  "2005xx78": "Metal Implant Status",
  "2005xx79": "Orientation Mirror Flip",
  "2005xx81": "SAR Operation Mode",
  "2005xx82": "Spatial Gradient",
  "2005xx83": "Additional Constraints",
  "2005xx85": "Gradient Slew Rate",
  "2005xx86": "?",
  "2005xx87": "B1 RMS",
  "2005xx92": "Contrast Information Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips NM Private Group",
  "7043xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips PET Private Group",
  "0511xx00": "Private Data",
  "7053xx00": "SUV Factor",
  "7053xx03": "Original File Name",
  "7053xx04": "?",
  "7053xx05": "Worklist Info File Name",
  "7053xx06": "?",
  "7053xx07": "?",
  "7053xx08": "?",
  "7053xx09": "Activity Concentration Scale Factor",
  "7053xx0F": "?",
  "7053xx10": "?",
  "7053xx11": "?",
  "7053xx12": "?",
  "7053xx13": "?",
  "7053xx14": "?",
  "7053xx15": "?",
  "7053xx16": "?",
  "7053xx17": "?",
  "7053xx18": "?",
  "7053xxC2": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips RAD Imaging DD 001",
  "200Bxx00": "?",
  "200Bxx01": "?",
  "200Bxx02": "?",
  "200Bxx05": "?",
  "200Bxx11": "?",
  "200Bxx27": "?",
  "200Bxx28": "?",
  "200Bxx29": "?",
  "200Bxx2A": "?",
  "200Bxx2B": "?",
  "200Bxx2C": "?",
  "200Bxx2D": "?",
  "200Bxx3B": "?",
  "200Bxx40": "?",
  "200Bxx41": "?",
  "200Bxx42": "?",
  "200Bxx43": "?",
  "200Bxx47": "?",
  "200Bxx48": "?",
  "200Bxx4C": "?",
  "200Bxx4D": "?",
  "200Bxx4F": "?",
  "200Bxx52": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips RAD Imaging DD 097",
  "200Bxx00": "?",
  "200Bxx01": "?",
  "200Bxx02": "?",
  "200Bxx50": "?",
  "200Bxx51": "?",
  "200Bxx52": "?",
  "200Bxx53": "?",
  "200Bxx54": "?",
  "200Bxx60": "?",
  "200Bxx63": "?",
  "200Bxx65": "?",
  "200Bxx6E": "?",
  "200Bxx72": "?",
  "200Bxx73": "?",
  "200Bxx74": "?",
  "200Bxx75": "?",
  "200Bxx76": "?",
  "200Bxx78": "?",
  "200Bxx79": "?",
  "200Bxx7A": "?",
  "200Bxx7B": "?",
  "200Bxx7C": "?",
  "200Bxx7D": "?",
  "200Bxx7E": "?",
  "200Bxx81": "?",
  "200Bxx82": "?",
  "200Bxx85": "?",
  "200Bxx86": "?",
  "200Bxx88": "?",
  "200Bxx89": "?",
  "200Bxx90": "?",
  "200Bxx96": "?",
  "200Bxx99": "?",
  "200Bxx9A": "?",
  "200Bxx9B": "?",
  "200BxxA0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 017",
  "200Dxx05": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 021",
  "200Dxx07": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 023",
  "200Dxx37": "?",
  "200Dxx38": "?",
  "200Dxx45": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 033",
  "200Dxx00": "?",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx0D": "Private Native Data Type",
  "200Dxx0F": "?",
  "200Dxx10": "Private Native Total Num Sample",
  "200Dxx11": "Native Data Sample Size",
  "200Dxx14": "?",
  "200Dxx15": "?",
  "200Dxx21": "Private Native Data Instance Num",
  "200Dxx22": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 034",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx0E": "?",
  "200Dxx0F": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx12": "?",
  "200Dxx13": "?",
  "200Dxx14": "?",
  "200Dxx17": "?",
  "200Dxx18": "?",
  "200Dxx1B": "?",
  "200Dxx1C": "?",
  "200Dxx1D": "?",
  "200Dxx1E": "?",
  "200Dxx1F": "?",
  "200Dxx20": "?",
  "200Dxx21": "?",
  "200Dxx22": "?",
  "200Dxx23": "?",
  "200Dxx24": "?",
  "200Dxx25": "?",
  "200Dxx26": "?",
  "200Dxx27": "?",
  "200Dxx28": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 035",
  "200Dxx01": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 036",
  "200Dxx15": "?",
  "200Dxx16": "?",
  "200Dxx17": "?",
  "200Dxx18": "?",
  "200Dxx19": "?",
  "200Dxx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 037",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx06": "?",
  "200Dxx08": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx0E": "?",
  "200Dxx0F": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 038",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 039",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx12": "?",
  "200Dxx13": "?",
  "200Dxx14": "?",
  "200Dxx15": "?",
  "200Dxx50": "?",
  "200Dxx51": "?",
  "200Dxx52": "?",
  "200Dxx53": "?",
  "200Dxx54": "?",
  "200Dxx55": "?",
  "200Dxx56": "?",
  "200Dxx57": "?",
  "200Dxx58": "?",
  "200Dxx59": "?",
  "200Dxx60": "?",
  "200Dxx61": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 040",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 041",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx12": "?",
  "200Dxx13": "?",
  "200Dxx14": "?",
  "200Dxx15": "?",
  "200Dxx16": "?",
  "200Dxx17": "?",
  "200Dxx18": "?",
  "200Dxx19": "?",
  "200Dxx1A": "?",
  "200Dxx1B": "?",
  "200Dxx1C": "?",
  "200Dxx22": "?",
  "200Dxx23": "?",
  "200Dxx24": "?",
  "200Dxx25": "?",
  "200Dxx26": "?",
  "200Dxx27": "?",
  "200Dxx28": "?",
  "200Dxx29": "?",
  "200Dxx30": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 042",
  "200Dxx15": "?",
  "200Dxx16": "?",
  "200Dxx20": "?",
  "200Dxx30": "?",
  "200Dxx31": "?",
  "200Dxx40": "?",
  "200Dxx50": "?",
  "200Dxx51": "?",
  "200Dxx52": "?",
  "200Dxx53": "?",
  "200Dxx54": "?",
  "200Dxx55": "?",
  "200Dxx56": "?",
  "200Dxx57": "?",
  "200Dxx58": "?",
  "200Dxx59": "?",
  "200Dxx5A": "?",
  "200Dxx5B": "?",
  "200Dxx5C": "?",
  "200Dxx5D": "?",
  "200Dxx5E": "?",
  "200Dxx5F": "?",
  "200Dxx60": "?",
  "200Dxx70": "?",
  "200Dxx71": "?",
  "200Dxx72": "?",
  "200Dxx73": "?",
  "200Dxx74": "?",
  "200Dxx75": "?",
  "200Dxx76": "?",
  "200Dxx77": "?",
  "200Dxx78": "?",
  "200Dxx8C": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 043",
  "200Dxx05": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx0E": "?",
  "200Dxx0F": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx17": "?",
  "200Dxx1A": "?",
  "200Dxx1B": "?",
  "200Dxx1E": "?",
  "200Dxx1F": "?",
  "200Dxx21": "?",
  "200Dxx23": "?",
  "200Dxx24": "?",
  "200Dxx25": "?",
  "200Dxx26": "?",
  "200Dxx27": "?",
  "200Dxx28": "?",
  "200Dxx29": "?",
  "200Dxx2A": "?",
  "200Dxx2B": "?",
  "200Dxx2C": "?",
  "200Dxx2D": "?",
  "200Dxx2E": "?",
  "200Dxx2F": "?",
  "200Dxx30": "?",
  "200Dxx31": "?",
  "200Dxx32": "?",
  "200Dxx33": "?",
  "200Dxx34": "?",
  "200Dxx35": "?",
  "200Dxx36": "?",
  "200Dxx37": "?",
  "200Dxx38": "?",
  "200Dxx39": "?",
  "200Dxx40": "?",
  "200Dxx41": "?",
  "200Dxx42": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 045",
  "200DxxF1": "?",
  "200DxxF3": "?",
  "200DxxF4": "?",
  "200DxxF5": "?",
  "200DxxF6": "?",
  "200DxxF8": "?",
  "200DxxFA": "?",
  "200DxxFB": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 046",
  "200Dxx17": "?",
  "200Dxx19": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 048",
  "200Dxx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 065",
  "200Dxx07": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 066",
  "200Dxx00": "?",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 109",
  "200Dxx00": "?",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx0E": "?",
  "200Dxx0F": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx12": "?",
  "200Dxx13": "?",
  "200Dxx14": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips US Imaging DD 113",
  "200Dxx01": "?",
  "200Dxx02": "?",
  "200Dxx03": "?",
  "200Dxx04": "?",
  "200Dxx05": "?",
  "200Dxx06": "?",
  "200Dxx07": "?",
  "200Dxx08": "?",
  "200Dxx09": "?",
  "200Dxx0A": "?",
  "200Dxx0B": "?",
  "200Dxx0C": "?",
  "200Dxx0D": "?",
  "200Dxx0E": "?",
  "200Dxx0F": "?",
  "200Dxx10": "?",
  "200Dxx11": "?",
  "200Dxx12": "?",
  "200Dxx13": "?",
  "200Dxx14": "?",
  "200Dxx15": "?",
  "200Dxx17": "?",
  "200Dxx18": "?",
  "200Dxx19": "?",
  "200Dxx1A": "?",
  "200Dxx1B": "?",
  "200Dxx1C": "?",
  "200Dxx1D": "?",
  "200Dxx1E": "?",
  "200Dxx1F": "?",
  "200Dxx20": "?",
  "200Dxx21": "?",
  "200Dxx22": "?",
  "200Dxx24": "?",
  "200Dxx25": "?",
  "200Dxx26": "?",
  "200Dxx27": "?",
  "200Dxx28": "?",
  "200Dxx31": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Philips X-ray Imaging DD 001",
  "2003xx00": "?",
  "2003xx01": "?",
  "2003xx02": "?",
  "2003xx03": "?",
  "2003xx06": "?",
  "2003xx09": "?",
  "2003xx10": "?",
  "2003xx11": "?",
  "2003xx12": "?",
  "2003xx13": "?",
  "2003xx14": "?",
  "2003xx15": "?",
  "2003xx16": "?",
  "2003xx17": "?",
  "2003xx18": "?",
  "2003xx19": "?",
  "2003xx22": "?",
  "2003xx24": "?",
  "2003xx25": "?",
  "2003xx26": "?",
  "2003xx27": "?",
  "2003xx28": "?",
  "2003xx29": "?",
  "2003xx2A": "?",
  "2003xx2B": "?",
  "2003xx2C": "?",
  "2003xx2D": "?",
  "2003xx2E": "?",
  "2003xx30": "?",
  "2003xx31": "?",
  "2003xx32": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI Release 1",
  "0009xx08": "?",
  "0009xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P Release 1",
  "0009xx00": "Data Object Recognition Code",
  "0009xx04": "Image Data Consistency",
  "0009xx08": "?",
  "0009xx10": "?",
  "0009xx12": "?",
  "0009xx15": "Unique Identifier",
  "0009xx16": "?",
  "0009xx18": "?",
  "0009xx21": "?",
  "0009xx31": "PACS Unique Identifier",
  "0009xx34": "Cluster Unique Identifier",
  "0009xx38": "System Unique Identifier",
  "0009xx39": "?",
  "0009xx51": "Study Unique Identifier",
  "0009xx61": "Series Unique Identifier",
  "0009xx91": "?",
  "0009xxA0": "?",
  "0009xxF2": "?",
  "0009xxF3": "?",
  "0009xxF4": "?",
  "0009xxF5": "?",
  "0009xxF7": "?",
  "0011xx10": "Patient Entry ID",
  "0011xx20": "?",
  "0011xx21": "?",
  "0011xx22": "?",
  "0011xx30": "?",
  "0011xx31": "?",
  "0011xx32": "?",
  "0019xx00": "?",
  "0019xx01": "?",
  "0019xx02": "?",
  "0019xx10": "Mains Frequency",
  "0019xx25": "Original Pixel Data Quality",
  "0019xx30": "ECG Triggering",
  "0019xx31": "ECG 1 Offset",
  "0019xx32": "ECG 2 Offset 1",
  "0019xx33": "ECG 2 Offset 2",
  "0019xx50": "Video Scan Mode",
  "0019xx51": "Video LineRate",
  "0019xx60": "Xray Technique",
  "0019xx61": "Image Identifier Fromat",
  "0019xx62": "Iris Diaphragm",
  "0019xx63": "Filter",
  "0019xx64": "Cine Parallel",
  "0019xx65": "Cine Master",
  "0019xx70": "Exposure Channel",
  "0019xx71": "Exposure Channel First Image",
  "0019xx72": "Processing Channel",
  "0019xx80": "Acquisition Delay",
  "0019xx81": "Relative Image Time",
  "0019xx90": "Video White Compression",
  "0019xxA0": "Angulation",
  "0019xxA1": "Rotation",
  "0021xx14": "?",
  "0029xx00": "?",
  "0029xx20": "Pixel Aspect Ratio",
  "0029xx25": "Processed Pixel Data Quality",
  "0029xx30": "?",
  "0029xx38": "?",
  "0029xx60": "?",
  "0029xx61": "?",
  "0029xx67": "?",
  "0029xx70": "Window ID",
  "0029xx71": "Video Invert Subtracted",
  "0029xx72": "Video Invert Nonsubtracted",
  "0029xx77": "Window Select Status",
  "0029xx78": "ECG Display Printing ID",
  "0029xx79": "ECG Display Printing",
  "0029xx7E": "ECG Display Printing Enable Status",
  "0029xx7F": "ECG Display Printing Select Status",
  "0029xx80": "Physiological Display ID",
  "0029xx81": "Preferred Physiological Channel Display",
  "0029xx8E": "Physiological Display Enable Status",
  "0029xx8F": "Physiological Display Select Status",
  "0029xx90": "?",
  "0029xx91": "?",
  "0029xx9F": "?",
  "0029xxA0": "?",
  "0029xxA1": "?",
  "0029xxAF": "?",
  "0029xxB0": "?",
  "0029xxB1": "?",
  "0029xxBF": "?",
  "0029xxC0": "Functional Shutter ID",
  "0029xxC1": "Field Of Shutter",
  "0029xxC5": "Field Of Shutter Rectangle",
  "0029xxCE": "Shutter Enable Status",
  "0029xxCF": "Shutter Select Status",
  "7FE1xx10": "Pixel Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P Release 1;1",
  "0009xxC0": "?",
  "0009xxC1": "?",
  "0019xx00": "Physiological Data Type",
  "0019xx01": "Physiological Data Channel And Kind",
  "0019xx02": "Sample Bits Allocated",
  "0019xx03": "Sample Bits Stored",
  "0019xx04": "Sample High Bit",
  "0019xx05": "Sample Representation",
  "0019xx06": "Smallest Sample Value",
  "0019xx07": "Largest Sample Value",
  "0019xx08": "Number Of Samples",
  "0019xx09": "Sample Data",
  "0019xx0A": "Sample Rate",
  "0019xx10": "Physiological Data Type 2",
  "0019xx11": "Physiological Data Channel And Kind 2",
  "0019xx12": "Sample Bits Allocated 2",
  "0019xx13": "Sample Bits Stored 2",
  "0019xx14": "Sample High Bit 2",
  "0019xx15": "Sample Representation 2",
  "0019xx16": "Smallest Sample Value 2",
  "0019xx17": "Largest Sample Value 2",
  "0019xx18": "Number Of Samples 2",
  "0019xx19": "Sample Data 2",
  "0019xx1A": "Sample Rate 2",
  "0029xx00": "Zoom ID",
  "0029xx01": "Zoom Rectangle",
  "0029xx03": "Zoom Factor",
  "0029xx04": "Zoom Function",
  "0029xx0E": "Zoom Enable Status",
  "0029xx0F": "Zoom Select Status",
  "0029xx40": "Magnifying Glass ID",
  "0029xx41": "Magnifying Glass Rectangle",
  "0029xx43": "Magnifying Glass Factor",
  "0029xx44": "Magnifying Glass Function",
  "0029xx4E": "Magnifying Glass Enable Status",
  "0029xx4F": "Magnifying Glass Select Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P Release 1;2",
  "0029xx00": "Subtraction Mask ID",
  "0029xx04": "Masking Function",
  "0029xx0C": "Proprietary Masking Parameters",
  "0029xx1E": "Subtraction Mask Enable Status",
  "0029xx1F": "Subtraction Mask Select Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P Release 1;3",
  "0029xx00": "Image Enhancement ID",
  "0029xx01": "Image Enhancement",
  "0029xx02": "Convolution ID",
  "0029xx03": "Convolution Type",
  "0029xx04": "Convolution Kernel Size ID",
  "0029xx05": "Convolution Kernel Size",
  "0029xx06": "Convolution Kernel",
  "0029xx0C": "Enhancement Gain",
  "0029xx1E": "Image Enhancement Enable Status",
  "0029xx1F": "Image Enhancement Select Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P Release 2;1",
  "0011xx18": "?",
  "0023xx0D": "?",
  "0023xx0E": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-CTBE Release 1",
  "0019xx00": "?",
  "0019xx02": "?",
  "0019xx03": "?",
  "0019xx04": "?",
  "0019xx05": "?",
  "0019xx0B": "?",
  "0019xx0C": "?",
  "0019xx14": "?",
  "0019xx18": "?",
  "0019xx19": "?",
  "0019xx1A": "?",
  "0019xx1B": "?",
  "0019xx1C": "?",
  "0019xx1D": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-CTBE-Private Release 1",
  "0021xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-GV-CT Release 1",
  "0009xx00": "?",
  "0009xx10": "?",
  "0009xx20": "?",
  "0009xx30": "?",
  "0009xx40": "?",
  "0009xx50": "?",
  "0009xx60": "?",
  "0009xx70": "?",
  "0009xx75": "?",
  "0009xx80": "?",
  "0009xx90": "?",
  "0019xx08": "?",
  "0019xx09": "?",
  "0019xx0A": "?",
  "0019xx10": "?",
  "0019xx20": "?",
  "0019xx50": "?",
  "0019xx60": "?",
  "0019xx61": "?",
  "0019xx63": "?",
  "0019xx64": "?",
  "0019xx65": "?",
  "0019xx70": "?",
  "0019xx80": "?",
  "0019xx81": "?",
  "0019xx90": "?",
  "0019xxA0": "?",
  "0019xxA1": "?",
  "0019xxA2": "?",
  "0019xxA3": "?",
  "0019xxB0": "?",
  "0019xxB1": "?",
  "0021xx20": "?",
  "0021xx30": "?",
  "0021xx40": "?",
  "0021xx50": "?",
  "0021xx60": "?",
  "0021xx70": "?",
  "0021xx80": "?",
  "0021xx90": "?",
  "0021xxA0": "?",
  "0021xxA1": "?",
  "0021xxA2": "?",
  "0021xxA3": "?",
  "0021xxA4": "?",
  "0021xxB0": "?",
  "0021xxC0": "?",
  "0029xx10": "?",
  "0029xx30": "?",
  "0029xx31": "?",
  "0029xx32": "?",
  "0029xx33": "?",
  "0029xx80": "?",
  "0029xx90": "?",
  "0029xxD0": "?",
  "0029xxD1": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-PCR Release 2",
  "0019xx10": "?",
  "0019xx20": "?",
  "0019xx21": "?",
  "0019xx30": "?",
  "0019xx40": "?",
  "0019xx60": "?",
  "0019xx80": "?",
  "0019xx90": "?",
  "0019xxA1": "?",
  "0019xxA3": "?",
  "0019xxA4": "?",
  "0019xxA5": "?",
  "0019xxA6": "?",
  "0019xxA7": "?",
  "0019xxA8": "?",
  "0019xxA9": "?",
  "0019xxAA": "?",
  "0019xxAB": "?",
  "0019xxAC": "?",
  "0019xxAD": "?",
  "0019xxAE": "?",
  "0019xxAF": "?",
  "0019xxB0": "?",
  "0019xxB1": "?",
  "0019xxB2": "?",
  "0019xxB3": "?",
  "0019xxB4": "?",
  "0019xxB5": "?",
  "0019xxB6": "?",
  "0019xxB7": "?",
  "0019xxB8": "?",
  "0019xxB9": "?",
  "0019xxBA": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private-CWS Release 1",
  "0021xx00": "Window Of Images ID",
  "0021xx01": "Window Of Images Type",
  "0021xx02": "WindowOfImagesScope"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private-DCI Release 1",
  "0019xx10": "?",
  "0019xx11": "?",
  "0019xx12": "?",
  "0019xx13": "?",
  "0019xx14": "?",
  "0019xx15": "?",
  "0019xx16": "?",
  "0019xx17": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private-DiDi Release 1",
  "0019xx00": "Post Mode String",
  "0019xx01": "Post Data",
  "0019xx10": "Image Header"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_CDS Release 1",
  "0021xx40": "?",
  "0029xx00": "?",
  "0029xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1",
  "0019xx30": "?",
  "0019xx31": "?",
  "0029xx0D": "?",
  "0029xx0E": "?",
  "0029xx0F": "?",
  "0029xx10": "?",
  "0029xx12": "?",
  "0029xx1B": "?",
  "0029xx1C": "?",
  "0029xx1D": "?",
  "0029xx1E": "?",
  "0029xx20": "?",
  "0029xx21": "?",
  "0029xx4C": "?",
  "0029xx4D": "?",
  "0029xx4E": "?",
  "0029xx4F": "?",
  "0029xx50": "?",
  "0029xx51": "?",
  "0029xx67": "?",
  "0029xx68": "?",
  "0029xx6A": "?",
  "0029xx6B": "?",
  "0029xx72": "?",
  "0029xx91": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1;1",
  "0029xx00": "?",
  "0029xx05": "?",
  "0029xx06": "?",
  "0029xx20": "?",
  "0029xx21": "?",
  "0029xxC0": "?",
  "0029xxC1": "?",
  "0029xxCB": "?",
  "0029xxCC": "?",
  "0029xxCD": "?",
  "0029xxD0": "?",
  "0029xxD1": "?",
  "0029xxD2": "?",
  "0029xxD3": "?",
  "0029xxD4": "?",
  "0029xxD5": "?",
  "0029xxD6": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1;2",
  "0029xx00": "?",
  "0029xx01": "?",
  "0029xx02": "?",
  "0029xx03": "?",
  "0029xx04": "?",
  "0029xx05": "?",
  "0029xx30": "?",
  "0029xxA0": "?",
  "0029xxA1": "?",
  "0029xxA2": "?",
  "0029xxA3": "?",
  "0029xxA5": "?",
  "0029xxA6": "?",
  "0029xxD9": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1;3",
  "0029xx00": "?",
  "0029xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1;4",
  "0029xxD6": "?",
  "0029xxD7": "?",
  "0029xxD8": "?",
  "0029xxD9": "?",
  "0029xxDA": "?",
  "0029xxDC": "?",
  "0029xxDD": "?",
  "0029xxE0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-Private_ICS Release 1;5",
  "0029xx50": "?",
  "0029xx55": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-XSB-DCI Release 1",
  "0019xx10": "Video Beam Boost",
  "0019xx11": "Channel Generating Video Sync",
  "0019xx12": "Video Gain",
  "0019xx13": "Video Offset",
  "0019xx20": "RTD Data Compression Factor"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI-P-XSB-VISUB Release 1",
  "0019xx00": "?",
  "0019xx10": "?",
  "0019xx11": "?",
  "0019xx12": "?",
  "0019xx20": "?",
  "0019xx40": "?",
  "0019xx50": "?",
  "0029xx00": "?",
  "0029xx01": "?",
  "0029xx02": "?",
  "0029xx0F": "?",
  "0029xx10": "?",
  "0029xx11": "?",
  "0029xx12": "?",
  "0029xx1F": "?",
  "0029xx20": "?",
  "0029xx21": "?",
  "0029xx22": "?",
  "0029xx2F": "?",
  "0029xx30": "?",
  "0029xx31": "?",
  "0029xx32": "?",
  "0029xx3F": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "BioPri3D",
  "0011xx20": "?",
  "0011xx24": "?",
  "0011xx30": "?",
  "0011xx31": "?",
  "0011xx32": "?",
  "0011xx39": "?",
  "0011xx3A": "?",
  "0011xxD0": "?",
  "0011xxE0": "?",
  "0011xxE1": "?",
  "0011xxE2": "?",
  "0011xxE3": "?",
  "0011xxE4": "?",
  "0011xxE5": "?",
  "0063xx0C": "?",
  "0063xx35": "?",
  "0063xx20": "?",
  "0063xx21": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "CARDIO-D.R. 1.0",
  "0029xx00": "Edge Enhancement Sequence",
  "0029xx01": "Convolution Kernel Size",
  "0029xx02": "Convolution Kernel Coefficients",
  "0029xx03": "Edge Enhancement Gain",
  "0029xxAC": "Displayed Area Bottom Right Hand Corner Fractional",
  "0029xxAD": "Displayed Area Top Left Hand Corner Fractional"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DIGISCAN IMAGE",
  "0029xx31": "?",
  "0029xx32": "?",
  "0029xx33": "?",
  "0029xx34": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ESOFT_DICOM_ECAT_OWNERCODE",
  "0015xx00": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "FFP DATA",
  "0009xx01": "CR Header Information"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "ISI",
  "0009xx01": "SIENET General Purpose IMGEF"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "KINETDX",
  "0021xxA6": "",
  "0021xxA5": "?",
  "0021xxA8": "?",
  "0021xxAA": "",
  "0021xxAB": "?",
  "0021xxAC": "?",
  "0021xxB4": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "KINETDX_GRAPHICS",
  "0021xxA4": ""
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "PMI Private Calibration Module Version 2.0",
  "2121xx01": "Calibration Method",
  "2121xx02": "Calibration Method Info",
  "2121xx03": "Calibration Object Size",
  "2121xx04": "Calibration Object S Dev",
  "2121xx05": "Calibration Horizontal Pixel Spacing",
  "2121xx06": "Calibration Vertical Pixel Spacing",
  "2121xx08": "Calibration File Name",
  "2121xx09": "Calibration Frame Number",
  "2121xx0A": "Calibration Object Unit",
  "2121xx0B": "Averaged Calibrations Performed",
  "2121xx0C": "Auto Magnify Factor",
  "2121xx0D": "Horizontal Pixel S Dev",
  "2121xx0E": "Vertical Pixel S Dev"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "POLYTRON-SMS 2.5",
  "0009xx02": "?",
  "0009xx04": "?",
  "0009xx06": "?",
  "0089xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SHS MagicView 300",
  "0029xx02": "?",
  "0029xx03": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS AX INSPACE_EP",
  "0009xx50": "?",
  "0009xx51": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CM VA0  ACQU",
  "0019xx10": "Parameter File Name",
  "0019xx11": "Sequence File Name",
  "0019xx12": "Sequence File Owner",
  "0019xx13": "Sequence Description",
  "0019xx14": "EPI File Name"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CM VA0  CMS",
  "0009xx00": "Number of Measurements",
  "0009xx10": "Storage Mode",
  "0009xx12": "Evaluation Mask - Image",
  "0009xx26": "Last Move Date",
  "0009xx27": "Last Move Time",
  "0011xx0A": "?",
  "0011xx10": "Registration Date",
  "0011xx11": "Registration Time",
  "0011xx22": "?",
  "0011xx23": "Used Patient Weight",
  "0011xx40": "Organ Code",
  "0013xx00": "Modifying Physician",
  "0013xx10": "Modification Date",
  "0013xx12": "Modification Time",
  "0013xx20": "Patient Name",
  "0013xx22": "Patient Id",
  "0013xx30": "Patient Birthdate",
  "0013xx31": "Patient Weight",
  "0013xx32": "Patients Maiden Name",
  "0013xx33": "Referring Physician",
  "0013xx34": "Admitting Diagnosis",
  "0013xx35": "Patient Sex",
  "0013xx40": "Procedure Description",
  "0013xx42": "Patient Rest Direction",
  "0013xx44": "Patient Position",
  "0013xx46": "View Direction",
  "0013xx50": "?",
  "0013xx51": "?",
  "0013xx52": "?",
  "0013xx53": "?",
  "0013xx54": "?",
  "0013xx55": "?",
  "0013xx56": "?",
  "0019xx10": "Net Frequency",
  "0019xx20": "Measurement Mode",
  "0019xx30": "Calculation Mode",
  "0019xx50": "Noise Level",
  "0019xx60": "Number of Data Bytes",
  "0019xx70": "?",
  "0019xx80": "?",
  "0021xx20": "FoV",
  "0021xx22": "Image Magnification Factor",
  "0021xx24": "Image Scroll Offset",
  "0021xx26": "Image Pixel Offset",
  "0021xx60": "Image Position",
  "0021xx61": "Image Normal",
  "0021xx63": "Image Distance",
  "0021xx65": "Image Positioning History Mask",
  "0021xx6A": "Image Row",
  "0021xx6B": "Image Column",
  "0021xx70": "Patient Orientation Set1",
  "0021xx71": "Patient Orientation Set2",
  "0021xx80": "Study Name",
  "0021xx82": "Study Type",
  "0029xx10": "Window Style",
  "0029xx11": "?",
  "0029xx13": "?",
  "0029xx20": "Pixel Quality Code",
  "0029xx22": "Pixel Quality Value",
  "0029xx50": "Archive Code",
  "0029xx51": "Exposure Code",
  "0029xx52": "Sort Code",
  "0029xx53": "?",
  "0029xx60": "Splash",
  "0051xx10": "Image Text",
  "6021xx00": "Image Graphics Format Code",
  "6021xx10": "Image Graphics",
  "7FE1xx00": "Binary Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CM VA0  LAB",
  "0009xx10": "Generator Identification Label",
  "0009xx11": "Gantry Identification Label",
  "0009xx12": "X-Ray Tube Identification Label",
  "0009xx13": "Detector Identification Label",
  "0009xx14": "DAS Identification Label",
  "0009xx15": "SMI Identification Label",
  "0009xx16": "CPU Identification Label",
  "0009xx20": "Header Version"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CSA ENVELOPE",
  "0029xx10": "syngo Report Data",
  "0029xx11": "syngo Report Presentation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CSA HEADER",
  "0029xx08": "CSA Image Header Type",
  "0029xx09": "CSA Image Header Version",
  "0029xx10": "CSA Image Header Info",
  "0029xx18": "CSA Series Header Type",
  "0029xx19": "CSA Series Header Version",
  "0029xx20": "CSA Series Header Info"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CSA NON-IMAGE",
  "0029xx08": "CSA Data Type",
  "0029xx09": "CSA Data Version",
  "0029xx10": "CSA Data Info",
  "7FE1xx10": "CSA Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CSA REPORT",
  "0029xx08": "Report Type",
  "0029xx09": "Report Version",
  "0029xx15": "SR Variant",
  "0029xx17": "SC SOP Instance UID"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT APPL DATASET",
  "0029xx00": "Dual Energy Algorithm Parameters",
  "0029xx01": "Valid CT Volume MBox Tasks",
  "0029xx02": "Scan Options",
  "0029xx03": "Acquisition Date and Time",
  "0029xx04": "Acquisition Number",
  "0029xx05": "Dynamic Data",
  "0029xx06": "Image Orientation Patient",
  "0029xx07": "Frame Of Reference Uid",
  "0029xx08": "Patient Position",
  "0029xx09": "Convolution Kernel",
  "0029xx10": "Kvp",
  "0029xx11": "Reconstruction Diameter",
  "0029xx12": "Rescale Intercept",
  "0029xx13": "Rescale Slope",
  "0029xx14": "Slice Thickness",
  "0029xx15": "Table Height",
  "0029xx16": "Gantry Detector Tilt",
  "0029xx17": "Pixel Spacing",
  "0029xx18": "Volume PatientPosition Not Equal",
  "0029xx19": "Volume LossyImageCompression Not Equal",
  "0029xx20": "Volume ConvolutionKernel Not Equal",
  "0029xx21": "Volume PixelSpacing Not Equal",
  "0029xx22": "Volume Kvp Not Equal",
  "0029xx23": "Volume ReconstructionDiameter Not Equal",
  "0029xx24": "Volume TableHeight Not Equal",
  "0029xx25": "Volume Has Gaps",
  "0029xx26": "Volume Number Of Missing Images",
  "0029xx27": "Volume Max Gap",
  "0029xx28": "Volume Position Of Gaps",
  "0029xx29": "Calibration Factor",
  "0029xx2A": "Flash Mode",
  "0029xx2B": "Warnings",
  "0029xx2C": "Volume HighBit Not Equal",
  "0029xx2D": "Volume ImageType Not Equal",
  "0029xx2E": "ImageType 0",
  "0029xx2F": "ImageType 1",
  "0029xx30": "ImageType 2",
  "0029xx31": "ImageType 3",
  "0029xx32": "PhotometricInterpretation not MONOCHROME2",
  "0029xx33": "First Acquisition Date",
  "0029xx34": "Last Acquisition Date",
  "0029xx35": "First Acquisition Time",
  "0029xx36": "Last Acquisition Time",
  "0029xx37": "Internal Data",
  "0029xx38": "Ranges SOM7",
  "0029xx39": "Calculated Gantry Detector Tilt",
  "0029xx40": "Volume Slice Distance",
  "0029xx41": "First Slice Z Coordinate ",
  "0029xx42": "Last Slice Z Coordinate ",
  "0029xx43": "Content DateTime",
  "0029xx44": "Delta Time",
  "0029xx45": "Frame Count"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT APPL EVIDENCEDOCUMENT",
  "0029xx00": "Private Task Datamodel"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT APPL MEASUREMENT",
  "0029xx00": "Oncology Segmentation Measurement Values",
  "0029xx01": "Oncology Measurement Recist Standard",
  "0029xx10": "DualEnergy ROI Annotation Mode"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT APPL PRESENTATION",
  "0029xx00": "Translucent Mode",
  "0029xx01": "Translucent Window Size",
  "0029xx02": "Panoramic Mode",
  "0029xx03": "Panoramic Inner Width",
  "0029xx04": "Display Unseen Areas",
  "0029xx05": "Unseen Areas Color",
  "0029xx06": "Display Tagged Data",
  "0029xx07": "Tagged Color",
  "0029xx08": "Tagged Sample Thickness",
  "0029xx09": "Tagged Threshold",
  "0029xx10": "Kernel Filter"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT APPL TMP DATAMODEL",
  "0029xx00": "CT Task Common DataModel"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  COAD",
  "0019xx10": "Distance Source To Source Side Collimator",
  "0019xx11": "Distance Source To Detector Side Collimator",
  "0019xx20": "Number of Possible Channels",
  "0019xx21": "Mean Channel Number",
  "0019xx22": "Detector Spacing",
  "0019xx23": "Detector Center",
  "0019xx24": "Reading Integration Time",
  "0019xx50": "Detector Alignment",
  "0019xx52": "? ",
  "0019xx54": "? ",
  "0019xx60": "Focus Alignment",
  "0019xx65": "Focal Spot Deflection Amplitude",
  "0019xx66": "Focal Spot Deflection Phase",
  "0019xx67": "Focal Spot Deflection Offset",
  "0019xx70": "Water Scaling Factor",
  "0019xx71": "Interpolation Factor",
  "0019xx80": "Patient Region",
  "0019xx82": "Patient Phase of Life",
  "0019xx90": "Osteo Offset",
  "0019xx92": "Osteo Regression Line Slope",
  "0019xx93": "Osteo Regression Line Intercept",
  "0019xx94": "Osteo Standardization Code",
  "0019xx96": "Osteo Phantom Number",
  "0019xxA0": "?",
  "0019xxA1": "?",
  "0019xxA2": "?",
  "0019xxA3": "?",
  "0019xxA4": "?",
  "0019xxA5": "?",
  "0019xxA6": "?",
  "0019xxA7": "?",
  "0019xxA8": "?",
  "0019xxA9": "?",
  "0019xxAA": "?",
  "0019xxAB": "?",
  "0019xxAC": "?",
  "0019xxAD": "?",
  "0019xxAE": "?",
  "0019xxAF": "?",
  "0019xxB0": "Feed per Rotation",
  "0019xxB1": "?",
  "0019xxBD": "Pulmo Trigger Level",
  "0019xxBE": "Expiratoric Reserve Volume",
  "0019xxBF": "Vital Capacity",
  "0019xxC0": "Pulmo Water",
  "0019xxC1": "Pulmo Air",
  "0019xxC2": "Pulmo Date",
  "0019xxC3": "Pulmo Time",
  "0019xxC4": "?",
  "0019xxC5": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  GEN",
  "0019xx10": "Source Side Collimator Aperture",
  "0019xx11": "Detector Side Collimator Aperture",
  "0019xx20": "Exposure Time",
  "0019xx21": "Exposure Current",
  "0019xx25": "KVP Generator Power Current",
  "0019xx26": "Generator Voltage",
  "0019xx40": "Master Control Mask",
  "0019xx42": "Processing Mask",
  "0019xx44": "?",
  "0019xx45": "?",
  "0019xx62": "Number of Virtuell Channels",
  "0019xx70": "Number of Readings",
  "0019xx71": "?",
  "0019xx74": "Number of Projections",
  "0019xx75": "Number of Bytes",
  "0019xx80": "Reconstruction Algorithm Set",
  "0019xx81": "Reconstruction Algorithm Index",
  "0019xx82": "Regeneration Software Version",
  "0019xx88": "?",
  "0021xx10": "Rotation Angle",
  "0021xx11": "Start Angle",
  "0021xx20": "?",
  "0021xx30": "Topogram Tube Position",
  "0021xx32": "Length of Topogram",
  "0021xx34": "Topogram Correction Factor",
  "0021xx36": "Maximum Table Position",
  "0021xx40": "Table Move Direction Code",
  "0021xx45": "VOI Start Row",
  "0021xx46": "VOI Stop Row",
  "0021xx47": "VOI Start Column",
  "0021xx48": "VOI Stop Column",
  "0021xx49": "VOI Start Slice",
  "0021xx4A": "VOI Stop Slice",
  "0021xx50": "Vector Start Row",
  "0021xx51": "Vector Row Step",
  "0021xx52": "Vector Start Column",
  "0021xx53": "Vector Column Step",
  "0021xx60": "Range Type Code",
  "0021xx62": "Reference Type Code",
  "0021xx70": "Object Orientation",
  "0021xx72": "Light Orientation",
  "0021xx75": "Light Brightness",
  "0021xx76": "Light Contrast",
  "0021xx7A": "Overlay Threshold",
  "0021xx7B": "Surface Threshold",
  "0021xx7C": "Grey Scale Threshold",
  "0021xxA0": "?",
  "0021xxA2": "?",
  "0021xxA7": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  IDE",
  "0009xx10": "?",
  "0009xx30": "?",
  "0009xx31": "?",
  "0009xx32": "?",
  "0009xx34": "?",
  "0009xx40": "?",
  "0009xx42": "?",
  "0009xx50": "?",
  "0009xx51": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  ORI",
  "0009xx20": "?",
  "0009xx30": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  OST",
  "6021xx00": "Osteo Contour Comment",
  "6021xx10": "Osteo Contour Buffer"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS CT VA0  RAW",
  "0021xx10": "Creation Mask",
  "0021xx20": "Evaluation Mask",
  "0021xx30": "Extended Processing Mask",
  "0021xx40": "?",
  "0021xx41": "?",
  "0021xx42": "?",
  "0021xx43": "?",
  "0021xx44": "?",
  "0021xx50": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS DFR.01 MANIPULATED",
  "0017xx11": "?",
  "0017xx12": "?",
  "0017xx14": "?",
  "0017xx15": "?",
  "0017xx25": "?",
  "0017xx27": "?",
  "0017xx29": "Edge Enhancement ",
  "0017xx30": "Harmonization %",
  "0017xx31": "?",
  "0017xx32": "?",
  "0017xx33": "?",
  "0017xx35": "?",
  "0017xx37": "?",
  "0017xx38": "?",
  "0017xx71": "Landmark",
  "0017xx72": "?",
  "0017xx73": "?",
  "0017xx74": "?",
  "0017xx77": "Pixel Shift horizonta",
  "0017xx78": "Pixel Shift vertical",
  "0017xx79": "?",
  "0017xx7A": "?",
  "0017xx80": "?",
  "0017xx83": "Left Marker",
  "0017xx84": "Right Marker",
  "0017xxA1": "?",
  "0017xxA2": "Image Name Extension 1",
  "0017xxA3": "Image Name Extension 2"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS DFR.01 ORIGINAL",
  "0017xx11": "?",
  "0017xx12": "?",
  "0017xx14": "?",
  "0017xx15": "?",
  "0017xx16": "?",
  "0017xx18": "?",
  "0017xx21": "?",
  "0017xx22": "?",
  "0017xx23": "?",
  "0017xx24": "?",
  "0017xx25": "?",
  "0017xx26": "?",
  "0017xx27": "?",
  "0017xx2A": "?",
  "0017xx30": "?",
  "0017xx31": "?",
  "0017xx32": "?",
  "0017xx33": "?",
  "0017xx37": "?",
  "0017xx38": "?",
  "0017xx41": "?",
  "0017xx43": "?",
  "0017xx44": "?",
  "0017xx45": "?",
  "0017xx46": "?",
  "0017xx47": "?",
  "0017xx48": "?",
  "0017xx49": "?",
  "0017xx4A": "?",
  "0017xx51": "?",
  "0017xx52": "?",
  "0017xx61": "?",
  "0017xx62": "?",
  "0017xx71": "?",
  "0017xx72": "?",
  "0017xx73": "?",
  "0017xx74": "?",
  "0017xx79": "?",
  "0017xx7A": "?",
  "0017xx7B": "?",
  "0017xxA0": "?",
  "0017xxC1": "?",
  "0017xxC2": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS DICOM",
  "0009xx10": "?",
  "0009xx12": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS DLR.01",
  "0019xx10": "Measurement Mode",
  "0019xx11": "Image Type",
  "0019xx15": "Software Version",
  "0019xx20": "MPM Code",
  "0019xx21": "Latitude",
  "0019xx22": "Sensitivity",
  "0019xx23": "EDR",
  "0019xx24": "L Fix",
  "0019xx25": "S Fix",
  "0019xx26": "Preset Mode",
  "0019xx27": "Region",
  "0019xx28": "Subregion",
  "0019xx30": "Orientation",
  "0019xx31": "Mark On Film",
  "0019xx32": "Rotation On DRC",
  "0019xx40": "Reader Type",
  "0019xx41": "Sub Modality",
  "0019xx42": "Reader Serial Number",
  "0019xx50": "Cassette Scale",
  "0019xx51": "Cassette Matrix",
  "0019xx52": "Cassette Submatrix",
  "0019xx53": "Barcode",
  "0019xx60": "GT - Contrast Type",
  "0019xx61": "GA - Rotation Amount",
  "0019xx62": "GC - Rotation Center",
  "0019xx63": "GS - Density Shift",
  "0019xx64": "RN - Frequency Rank",
  "0019xx65": "RE - Frequency Enhancement",
  "0019xx66": "RT - Frequency Type",
  "0019xx67": "Kernel Length",
  "0019xx68": "Kernel Mode",
  "0019xx69": "Convolution Mode",
  "0019xx70": "PLA Source",
  "0019xx71": "PLA Destination",
  "0019xx75": "UID Original Image",
  "0019xx76": "?",
  "0019xx80": "Reader Header",
  "0019xx90": "PLA of Secondary Destination",
  "0019xxA0": "?",
  "0019xxA1": "?",
  "0041xx10": "Number of Hardcopies",
  "0041xx20": "Film Format",
  "0041xx30": "Film Size",
  "0041xx31": "Full Film Format"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS IKM CKS CXRCAD FINDINGS",
  "0029xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS IKM CKS LUNGCAD BMK",
  "0029xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS IMAGE SHADOW ATTRIBUTES",
  "0021xx01": "?",
  "0021xx02": "?",
  "0021xx03": "?",
  "0021xx04": "?",
  "0021xx05": "?",
  "0021xx06": "?",
  "0021xx1A": "?",
  "0021xx1C": "?",
  "0021xx1F": "?",
  "0021xx20": "?",
  "0021xx22": "?",
  "0021xx24": "?",
  "0021xx25": "?",
  "0021xx26": "?",
  "0021xx27": "?",
  "0021xx2A": "?",
  "0021xx2B": "?",
  "0021xx2C": "?",
  "0021xx2D": "?",
  "0021xx2E": "?",
  "0021xx33": "?",
  "0021xx34": "?",
  "0021xx35": "?",
  "0021xx37": "?",
  "0021xx3A": "?",
  "0021xx3B": "?",
  "0021xx3C": "?",
  "0021xx3D": "?",
  "0021xx3F": "?",
  "0021xx40": "?",
  "0021xx41": "?",
  "0021xx42": "?",
  "0021xx43": "?",
  "0021xx44": "?",
  "0021xx45": "?",
  "0021xx46": "?",
  "0021xx47": "?",
  "0021xx48": "?",
  "0021xx49": "?",
  "0021xx4B": "?",
  "0021xx4E": "?",
  "0021xx4F": "?",
  "0021xx51": "?",
  "0021xx52": "?",
  "0021xx53": "?",
  "0021xx54": "?",
  "0021xx56": "?",
  "0021xx58": "?",
  "0021xx59": "?",
  "0021xx5A": "?",
  "0021xx5B": "?",
  "0021xx5E": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS ISI",
  "0003xx08": "ISI Command Field",
  "0003xx11": "Attach ID Application Code",
  "0003xx12": "Attach ID Message Count",
  "0003xx13": "Attach ID Date",
  "0003xx14": "Attach ID Time",
  "0003xx20": "Message Type",
  "0003xx30": "Max Waiting Date",
  "0003xx31": "Max Waiting Time",
  "0009xx01": "RIS Patient Info IMGEF",
  "0011xx03": "Patient UID",
  "0011xx04": "Patient ID",
  "0011xx0A": "Case ID",
  "0011xx22": "Request ID",
  "0011xx23": "Examination UID",
  "0011xxA1": "Patient Registration Date",
  "0011xxA2": "Patient Registration Time",
  "0011xxB0": "Patient Last Name",
  "0011xxB2": "Patient First Name",
  "0011xxB4": "Patient Hospital Status",
  "0011xxBC": "Current Location Time",
  "0011xxC0": "Patient Insurance Status",
  "0011xxD0": "Patient Billing Type",
  "0011xxD2": "Patient Billing Address",
  "0031xx12": "Examination Reason",
  "0031xx30": "Requested Date",
  "0031xx32": "Worklist Request Start Time",
  "0031xx33": "Worklist Request End Time",
  "0031xx4A": "Requested Time",
  "0031xx80": "Requested Location",
  "0055xx46": "Current Ward",
  "0193xx02": "RIS Key",
  "0307xx01": "RIS Worklist IMGEF",
  "0309xx01": "RIS Report IMGEF",
  "4009xx01": "Report ID",
  "4009xx20": "Report Status",
  "4009xx30": "Report Creation Date",
  "4009xx70": "Report Approving Physician",
  "4009xxE0": "Report Text",
  "4009xxE1": "Report Author",
  "4009xxE3": "Reporting Radiologist"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED",
  "0009xx10": "Recognition Code",
  "0009xx30": "Byte Offset of Original Header",
  "0009xx31": "Length of Original Header",
  "0009xx40": "Byte Offset of Pixelmatrix",
  "0009xx41": "Length of Pixelmatrix In Bytes",
  "0009xx50": "?",
  "0009xx51": "?",
  "0009xxF5": "PDM EFID Placeholder",
  "0009xxF6": "PDM Data Object Type Extension",
  "0021xx10": "Zoom",
  "0021xx11": "Target",
  "0021xx12": "Tube Angle",
  "0021xx20": "ROI Mask",
  "7001xx10": "Dummy",
  "7003xx10": "Header"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED DISPLAY",
  "0029xx04": "Photometric Interpretation",
  "0029xx10": "Rows of Submatrix",
  "0029xx11": "Columns of Submatrix",
  "0029xx20": "?",
  "0029xx21": "?",
  "0029xx50": "Origin of Submatrix",
  "0029xx80": "?",
  "0029xx99": "Shutter Type",
  "0029xxA0": "Rows of Rectangular Shutter",
  "0029xxA1": "Columns of Rectangular Shutter",
  "0029xxA2": "Origin of Rectangular Shutter",
  "0029xxB0": "Radius of Circular Shutter",
  "0029xxB2": "Origin of Circular Shutter",
  "0029xxC1": "Contour of Irregular Shutter"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED DISPLAY 0000",
  "0029xx99": "?",
  "0029xxC1": "?",
  "0029xxB0": "?",
  "0029xxB2": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED DISPLAY 0001",
  "0029xx99": "?",
  "0029xxA0": "?",
  "0029xxA1": "?",
  "0029xxA2": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED ECAT FILE INFO",
  "0021xx00": "ECAT_Main_Header",
  "0021xx01": "ECAT_Image_Subheader"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED HG",
  "0029xx10": "List of Group Numbers",
  "0029xx15": "List of Shadow Owner Codes",
  "0029xx20": "List of Element Numbers",
  "0029xx30": "List of Total Display Length",
  "0029xx40": "List of Display Prefix",
  "0029xx50": "List of Display Postfix",
  "0029xx60": "List of Text Position",
  "0029xx70": "List of Text Concatenation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED MAMMO",
  "0029xx5A": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED MG",
  "0029xx10": "List of Group Numbers",
  "0029xx15": "List of Shadow Owner Codes",
  "0029xx20": "List of Element Numbers",
  "0029xx30": "List of Total Display Length",
  "0029xx40": "List of Display Prefix",
  "0029xx50": "List of Display Postfix",
  "0029xx60": "List of Text Position",
  "0029xx70": "List of Text Concatenation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED NM",
  "0009xx80": "?",
  "0011xx10": "?",
  "0017xx00": "?",
  "0017xx20": "?",
  "0017xx70": "?",
  "0017xx80": "?",
  "0019xx08": "?",
  "0019xx0F": "Siemens ICON Data Type",
  "0019xx16": "?",
  "0019xxA5": "Number of Repeats per Phase",
  "0019xxA6": "Cycles per Repeat",
  "0019xxA7": "Repeat Start Time",
  "0019xxA8": "Repeat Stop Time",
  "0019xxA9": "Effective Repeat Time",
  "0019xxAA": "Acquired Cycles per Repeat",
  "0019xx93": "?",
  "0019xxA1": "?",
  "0019xxA3": "?",
  "0019xxC3": "?",
  "0021xx00": "ECAT_Main_Header",
  "0021xx01": "ECAT_Image_Subheader",
  "0021xx10": "?",
  "0023xx01": "DICOM Reader flag",
  "0029xx08": "Modality Image Header Type",
  "0029xx09": "Modality Image Header Version",
  "0029xx10": "Modality Image Header Info",
  "0031xx01": "?",
  "0031xx0C": "?",
  "0031xx0F": "?",
  "0031xx10": "?",
  "0031xx12": "?",
  "0031xx13": "?",
  "0031xx14": "?",
  "0031xx15": "?",
  "0031xx16": "?",
  "0031xx17": "?",
  "0031xx20": "?",
  "0031xx21": "?",
  "0033xx00": "Flood Correction Matrix Detector 1",
  "0033xx01": "Flood Correction Matrix Detector 2",
  "0033xx10": "COR Data for Detector 1",
  "0033xx11": "COR Data for Detector 2",
  "0033xx14": "MHR ( Y-Shif",
  "0033xx15": "MHR ( Y-Shif",
  "0033xx18": "NCO Data for detector 1",
  "0033xx19": "NCO Data for detector 2",
  "0033xx1A": "?",
  "0033xx20": "Bed correction angle",
  "0033xx21": "Gantry correction angle",
  "0033xx22": "Bed U/D correction data",
  "0033xx23": "Gantry L/R Correction Data",
  "0033xx24": "BackProjection Correction angle head 1",
  "0033xx25": "BackProjection Correction angle head 2",
  "0033xx28": "MHR calibrations",
  "0033xx29": "Crystal thickness",
  "0033xx30": "Preset name used for acquisition",
  "0033xx31": "Camera Config Angle",
  "0033xx32": "Crystal Type",
  "0033xx33": "Coin Gantry Step",
  "0033xx34": "Wholebody bed step",
  "0033xx35": "Weight Factor Table For Coincidence Acquisitions",
  "0033xx36": "Coincidence weight factor table",
  "0033xx37": "Starburst flags at image acq time",
  "0033xx38": "Pixel Scale factor",
  "0035xx00": "Specialized Tomo Type",
  "0035xx01": "Energy Window Type",
  "0035xx02": "Start and End Row Illuminated By Wind Position",
  "0035xx03": "Blank Scan Image For Profile",
  "0035xx04": "Repeat Number of the Original Dynamic SPECT",
  "0035xx05": "Phase Number of the Original Dynamic SPECT",
  "0035xx06": "Siemens Profile 2 Image Subtype",
  "0039xx00": "Toshiba CBF Activity Results",
  "0039xx01": "Related CT Series Instance UID",
  "0041xx01": "Whole Body Tomo Position Index",
  "0041xx02": "Whole Body Tomo Number of Positions",
  "0041xx03": "Horizontal Table Position of CT scan",
  "0041xx04": "Effective Energy fo CT Scan",
  "0041xx05": "Long Linear Drive Information for Detector 1",
  "0041xx06": "Long Linear Drive Information for Detector 2",
  "0041xx07": "Trunnion Information for Detector 1",
  "0041xx08": "Trunnion Information for Detector 2",
  "0041xx09": "Broad Beam Factor",
  "0041xx0A": "Original Wholebody Position",
  "0041xx0B": "Wholebody Scan Range",
  "0041xx10": "Effective Emission Energy",
  "0041xx11": "Gated Frame Duration",
  "0041xx30": "?",
  "0041xx32": "?",
  "0043xx01": "Detector View Angle",
  "0043xx02": "Transformation Matrix",
  "0043xx03": "View Dependent Y Shift MHR For Detector 1",
  "0043xx04": "View Dependent Y Shift MHR For Detector 2",
  "0045xx01": "Planar Processing String",
  "0055xx04": "Prompt Window Width",
  "0055xx05": "Random Window Width",
  "0055xx20": "?",
  "0055xx22": "?",
  "0055xx24": "?",
  "0055xx30": "?",
  "0055xx32": "?",
  "0055xx34": "?",
  "0055xx40": "?",
  "0055xx42": "?",
  "0055xx44": "?",
  "0055xx4C": "?",
  "0055xx4D": "?",
  "0055xx51": "?",
  "0055xx52": "?",
  "0055xx53": "?",
  "0055xx55": "?",
  "0055xx5C": "?",
  "0055xx6D": "?",
  "0055xx7E": "Collimator Thickness mm",
  "0055xx7F": "Collimator Angular Resolution radians",
  "0055xxA8": "?",
  "0055xxC0": "Useful Field of View",
  "0055xxC2": "?",
  "0055xxC3": "?",
  "0055xxC4": "?",
  "0055xxD0": "?",
  "0057xx01": "Syngo MI DICOM Original Image Type",
  "0057xx02": "Dose Calibration Factor",
  "0057xx03": "Units",
  "0057xx04": "Decay Correction",
  "0057xx05": "Radionuclide Half Life",
  "0057xx06": "Rescale Intercept",
  "0057xx07": "Rescale Slope",
  "0057xx08": "Frame Reference Time",
  "0057xx09": "Number of Radiopharmaceutical Information Sequence",
  "0057xx0A": "Decay Factor",
  "0057xx0B": "Counts Source",
  "0057xx0C": "Radionuclide Positron Fraction",
  "0057xx0E": "Trigger Time of CT Slice",
  "0061xx01": "X Principal Ray Offset",
  "0061xx05": "Y Principal Ray Offset",
  "0061xx09": "X Principal Ray Angle",
  "0061xx0A": "Y Principal Ray Angle",
  "0061xx0B": "X Short Focal Length",
  "0061xx0C": "Y Short Focal Length",
  "0061xx0D": "X Long Focal Length",
  "0061xx0E": "Y Long Focal Length",
  "0061xx0F": "X Focal Scaling",
  "0061xx10": "Y Focal Scaling",
  "0061xx11": "X Motion Correction Shift",
  "0061xx15": "Y Motion Correction Shift",
  "0061xx19": "X Heart Center",
  "0061xx1A": "Y Heart Center",
  "0061xx1B": "Z Heart Center",
  "0061xx1C": "Image Pixel Content Type",
  "0061xx1D": "Auto Save Corrected Series",
  "0061xx1E": "Distorted Series Instance UID",
  "0061xx21": "Recon Range",
  "0061xx22": "Recon Orientation",
  "0061xx23": "Recon Selected Angular Range",
  "0061xx24": "Recon Transverse Angle",
  "0061xx25": "Recon Sagittal Angle",
  "0061xx26": "Recon X Mask Size",
  "0061xx27": "Recon Y Mask Size",
  "0061xx28": "Recon X Image Center",
  "0061xx29": "Recon Y Image Center",
  "0061xx2A": "Recon Z Image Center",
  "0061xx2B": "Recon X Zoom",
  "0061xx2C": "Recon Y Zoom",
  "0061xx2D": "Recon Threshold",
  "0061xx2E": "Recon Output Pixel Size",
  "0061xx2F": "Scatter Estimation Method",
  "0061xx30": "Scatter Estimation Method Mode",
  "0061xx31": "Scatter Estimation Lower Window Weights",
  "0061xx32": "Scatter Estimation Upper Window Weights",
  "0061xx33": "Scatter Estimation Window Mode",
  "0061xx34": "Scatter Estimation Filter",
  "0061xx35": "Recon RawTomo Input UID",
  "0061xx36": "Recon CT Input UID",
  "0061xx37": "Recon Z Mask Size",
  "0061xx38": "Recon X Mask Center",
  "0061xx39": "Recon Y Mask Center",
  "0061xx3A": "Recon Z Mask Center",
  "0061xx51": "Raw Tomo Series UID",
  "0061xx52": "LowRes CT Series UID",
  "0061xx53": "HighRes CT Series UID",
  "7FE3xx14": "Minimum Pixel in Frame",
  "7FE3xx15": "Maximum Pixel in Frame",
  "7FE3xx16": "?",
  "7FE3xx1B": "?",
  "7FE3xx1C": "?",
  "7FE3xx1E": "?",
  "7FE3xx26": "?",
  "7FE3xx27": "?",
  "7FE3xx28": "?",
  "7FE3xx29": "Number of R-Waves in Frame"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED OCS BEAM DISPLAY INFO",
  "0039xx76": "Beam Display Properties"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED OCS PUBLIC RT PLAN ATTRIBUTES",
  "0039xx01": "External Attributes"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED OCS SS VERSION INFO",
  "0039xx76": "Structure Set Predecessor"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED PT",
  "0071xx21": "Registration Matrix UID",
  "0071xx22": "Decay Correction DateTime",
  "0071xx23": "Volume Index",
  "0071xx24": "Time Slice Duration"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED PT WAVEFORM",
  "0071xx46": "Starting Respiratory Amplitude",
  "0071xx47": "Starting Respiratory Phase",
  "0071xx48": "Ending Respiratory Amplitude",
  "0071xx49": "Ending Respiratory Phase",
  "0071xx50": "Respiratory Trigger Type"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SMS USG ANTARES",
  "0019xx00": "?",
  "0019xx03": "?",
  "0019xx0C": "?",
  "0019xx0D": "?",
  "0019xx0E": "?",
  "0019xx95": "?",
  "0019xx20": "?",
  "0019xx21": "?",
  "0019xx22": "?",
  "0019xx23": "?",
  "0019xx24": "?",
  "0019xx25": "?",
  "0019xx26": "?",
  "0019xx27": "?",
  "0019xx28": "?",
  "0019xx29": "?",
  "0019xx2A": "?",
  "0019xx2D": "?",
  "0019xx2E": "?",
  "0019xx31": "",
  "0019xx3A": "?",
  "0019xx3B": "?",
  "0019xx40": "?",
  "0019xx41": "?",
  "0019xx42": "?",
  "0019xx43": "?",
  "0019xx44": "?",
  "0019xx46": "?",
  "0019xx47": "?",
  "0019xx48": "?",
  "0019xx49": "?",
  "0019xx54": "?",
  "0019xx60": "?",
  "0019xx61": "?",
  "0019xx62": "?",
  "0019xx63": "?",
  "0019xx65": "?",
  "0019xx66": "?",
  "0019xx67": "?",
  "0019xx69": "?",
  "0019xx6A": "?",
  "0019xx6C": "?",
  "0019xx72": "?",
  "0019xx80": "?",
  "0019xx81": "?",
  "0019xx82": "?",
  "0019xx83": "?",
  "0019xx86": "?",
  "0019xx87": "?",
  "0019xx88": "?",
  "0019xxA0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SMS USG ANTARES 3D VOLUME",
  "0039xx00": "Release Version",
  "0039xx03": "Volume Acquisition Duration",
  "0039xx04": "Volume Raw Data Type",
  "0039xx05": "Scan Type",
  "0039xx06": "Z Lateral Min",
  "0039xx07": "Z Lateral Span",
  "0039xx08": "Z Radius of Curvature",
  "0039xx09": "Wobble Correction",
  "0039xx10": "Scale Along Width",
  "0039xx11": "Scale Along Height",
  "0039xx12": "Scale Along Depth",
  "0039xx13": "Buffer Size",
  "0039xx14": "Acquisition Rate",
  "0039xx15": "Depth Min cm",
  "0039xx16": "Is Left Right Flipped Enabled",
  "0039xx17": "Is Up Down Flipped Enabled",
  "0039xx18": "Is Volume Geom Accurate",
  "0039xx19": "BByte Mask Offset",
  "0039xx20": "BByte Mask Size",
  "0039xx22": "Acq Plane Rotation Deg",
  "0039xx23": "Beam Axial Span",
  "0039xx24": "Beam Lateral Min",
  "0039xx25": "Beam Lateral Span",
  "0039xx26": "Beam Axial Min",
  "0039xx27": "Num Display Samples",
  "0039xx28": "DVolume Width",
  "0039xx29": "DVolume Depth",
  "0039xx30": "DVolume Height",
  "0039xx31": "DVolume Pos X",
  "0039xx32": "DVolume Pos Y",
  "0039xx33": "DVolume Pos Z",
  "0039xx34": "DBeam Axial Min",
  "0039xx35": "DBeam Axial Span",
  "0039xx37": "DBeam Lateral Span",
  "0039xx38": "Number of Volumes in Sequence",
  "0039xx39": "DByte Mask Offset",
  "0039xx40": "DByte Mask Size",
  "0039xx50": "Private Creator Version of Bookmark",
  "0039xx51": "BCut Plane Enable",
  "0039xx52": "BMpr Color Map Index",
  "0039xx53": "BMpr Dynamic Range Db",
  "0039xx54": "BMpr Gray Map Index",
  "0039xx55": "BVolume Render Mode",
  "0039xx56": "BVr Brightness",
  "0039xx57": "BVr Contrast",
  "0039xx58": "BVr Color Map Index",
  "0039xx59": "BVr Dynamic Range Db",
  "0039xx5A": "BVr Gray Map Index",
  "0039xx5C": "BVr Threshold High",
  "0039xx5D": "BVr Threshold Low",
  "0039xx5E": "BPre Process Filter Mix",
  "0039xx5F": "CCut Plane Enable",
  "0039xx60": "CFront Clip Mode",
  "0039xx61": "CMpr Color Map Index",
  "0039xx62": "CMpr Color Flow Priority Index",
  "0039xx63": "CVolume Render Mode",
  "0039xx64": "CVr Color Map Index",
  "0039xx65": "CVr Color Flow Priority Index",
  "0039xx66": "CVr Opacity",
  "0039xx67": "CVr Threshold High",
  "0039xx68": "CVr Threshold Low",
  "0039xx69": "Voi Mode",
  "0039xx6A": "Voi Rotation Offset Deg",
  "0039xx6B": "Voi Size Ratio X",
  "0039xx6C": "Voi Size Ratio Y",
  "0039xx6D": "Voi Size Ratio Z",
  "0039xx6E": "Voi Sync Plane",
  "0039xx6F": "Voi View Mode",
  "0039xx70": "Vr Orientation A",
  "0039xx71": "Mpr Orientation A",
  "0039xx72": "Vr Offset Vector",
  "0039xx73": "Blending Ratio",
  "0039xx74": "Fusion Blend Mode",
  "0039xx75": "Quality Factor",
  "0039xx76": "Renderer Type",
  "0039xx77": "Slice Mode",
  "0039xx78": "Active Quad",
  "0039xx79": "Screen Mode",
  "0039xx7A": "Cut Plane Side",
  "0039xx7B": "Wireframe Mode",
  "0039xx7C": "Crossmark Mode",
  "0039xx7D": "Mpr Display Type",
  "0039xx7E": "Volume Display Type",
  "0039xx7F": "Last Reset",
  "0039xx80": "Last Non Full Screen Mode",
  "0039xx81": "Mpr Tool Index",
  "0039xx82": "Voi Tool Index",
  "0039xx83": "Tool Loop Mode",
  "0039xx84": "Volume Arb Mode",
  "0039xx85": "Mpr Zoom Enabled",
  "0039xx86": "Is Volume Zoom Enabled",
  "0039xx87": "Zoom Level Mpr",
  "0039xx88": "Zoom Level Volume",
  "0039xx89": "Is Auto Rotate Enabled",
  "0039xx8A": "Auto Rotate Axis",
  "0039xx8B": "Auto Rotate Range Index",
  "0039xx8C": "Auto Rotate Speed Index",
  "0039xx8D": "CVr Brightness",
  "0039xx8E": "CFlow State Index",
  "0039xx8F": "BSubmode Index",
  "0039xx90": "CSubmode Index",
  "0039xx91": "Cut Plane",
  "0039xx92": "Bookmark Chunk Id",
  "0039xx93": "Sequence Min Chunk Id",
  "0039xx94": "Sequence Max Chunk Id",
  "0039xx95": "Volume Rate Hz",
  "0039xx9A": "Voi Position Offset X",
  "0039xx9B": "Voi Position Offset Y",
  "0039xx9C": "Voi Position Offset Z",
  "0039xx9D": "Vr Tool Index",
  "0039xx9E": "Shading Percent",
  "0039xx9F": "Volume Type",
  "0039xxA0": "Vr Quad Display Type",
  "0039xxA1": "Mpr Center Location",
  "0039xxE0": "Slice Range Type",
  "0039xxE1": "Slice MPR Plane",
  "0039xxE2": "Slice Layout",
  "0039xxE3": "Slice Spacing",
  "0039xxE4": "Thin Vr Mode",
  "0039xxE5": "Thin Vr Thickness",
  "0039xxE6": "Curved TOP VOI Pivot X",
  "0039xxE7": "Curved TOP VOI Pivot Y",
  "0039xxE8": "Curved TOP VOI Pivot Z",
  "0039xxE9": "Curved TOP VOI Quadrant",
  "0039xxEA": "?",
  "0039xxED": "?",
  "0039xxEE": "?",
  "0039xxEF": "?",
  "0039xxF0": "?",
  "0039xxF1": "?",
  "0039xxF2": "?",
  "0039xxF3": "?",
  "0039xxF4": "?",
  "0039xxF5": "?",
  "0039xxF6": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SMS USG S2000",
  "0019xx00": "Private Creator Version",
  "0019xx03": "Frame Rate",
  "0019xx0C": "Burned in Graphics",
  "0019xx0D": "SieClear Index",
  "0019xx0E": "?",
  "0019xx20": "B-Mode Submode",
  "0019xx21": "B-Mode Dynamic Range",
  "0019xx22": "B-Mode Overall Gain",
  "0019xx23": "B-Mode Resolution/Speed Index",
  "0019xx24": "B-Mode Edge Enhance Index",
  "0019xx25": "B-Mode Persistence Index",
  "0019xx26": "B-Mode Map Index",
  "0019xx27": "?",
  "0019xx28": "?",
  "0019xx29": "?",
  "0019xx2A": "B-Mode Tint Type",
  "0019xx2D": "B-Mode Tint Index",
  "0019xx2E": "ClarifyVE Index",
  "0019xx30": "?",
  "0019xx31": "?",
  "0019xx3A": "Image Flag",
  "0019xx3B": "?",
  "0019xx40": "Color Flow State",
  "0019xx41": "Color Flow Wall Filter Index",
  "0019xx42": "Color Flow Submode",
  "0019xx43": "Color Flow Overall Gain",
  "0019xx44": "Color Flow Resolution/Speed Index",
  "0019xx46": "Color Flow Smooth Index",
  "0019xx47": "Color Flow Persistence Index",
  "0019xx48": "Color Flow Map Index",
  "0019xx49": "Color Flow Priority Index",
  "0019xx54": "Color Flow Maximum Velocity",
  "0019xx60": "Doppler Dynamic Range",
  "0019xx61": "Doppler Overall Gain",
  "0019xx62": "Doppler Wall Filter",
  "0019xx63": "Doppler Gate Size",
  "0019xx65": "Doppler Map Index",
  "0019xx66": "Doppler Submode",
  "0019xx67": "?",
  "0019xx69": "Doppler Time/Freq Res Index",
  "0019xx6A": "Doppler Trace Inverted",
  "0019xx6C": "Doppler Tint Type",
  "0019xx72": "Doppler Tint Index",
  "0019xx80": "M-Mode Dynamic Range",
  "0019xx81": "M-Mode Overall Gain",
  "0019xx82": "M-Mode Edge Enhance Index",
  "0019xx83": "M-Mode Map Index",
  "0019xx86": "M-Mode Tint Type",
  "0019xx87": "M-Mode Submode",
  "0019xx88": "M-Mode Tint Index",
  "0019xx95": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SMS USG S2000 3D VOLUME",
  "0039xx50": "Private Creator Version of Bookmark",
  "0039xx51": "BCut Plane Enable",
  "0039xx52": "BMpr Color Map Index",
  "0039xx53": "BMpr Dynamic Range Db",
  "0039xx54": "BMpr Gray Map Index",
  "0039xx55": "BVolume Render Mode",
  "0039xx56": "BVr Brightness",
  "0039xx57": "BVr Contrast",
  "0039xx58": "BVr Color Map Index",
  "0039xx59": "BVr Dynamic Range Db",
  "0039xx5A": "BVr Gray Map Index",
  "0039xx5C": "BVr Threshold High",
  "0039xx5D": "BVr Threshold Low",
  "0039xx5E": "BPre Process Filter Mix",
  "0039xx5F": "CCut Plane Enable",
  "0039xx60": "CFront Clip Mode",
  "0039xx61": "CMpr Color Map Index",
  "0039xx62": "CMpr Color Flow Priority Index",
  "0039xx63": "CVolume Render Mode",
  "0039xx64": "CVr Color Map Index",
  "0039xx65": "CVr Color Flow Priority Index",
  "0039xx66": "CVr Opacity",
  "0039xx67": "CVr Threshold High",
  "0039xx68": "CVr Threshold Low",
  "0039xx69": "Voi Mode",
  "0039xx6A": "Voi Rotation Offset Deg",
  "0039xx6B": "Voi Size Ratio X",
  "0039xx6C": "Voi Size Ratio Y",
  "0039xx6D": "Voi Size Ratio Z",
  "0039xx6E": "Voi Sync Plane",
  "0039xx6F": "Voi View Mode",
  "0039xx70": "Vr Orientation A",
  "0039xx71": "Mpr Orientation A",
  "0039xx72": "Vr Offset Vector",
  "0039xx73": "Blending Ratio",
  "0039xx74": "Fusion Blend Mode",
  "0039xx75": "Quality Factor",
  "0039xx76": "Renderer Type",
  "0039xx77": "Slice Mode",
  "0039xx78": "Active Quad",
  "0039xx79": "Screen Mode",
  "0039xx7A": "Cut Plane Side",
  "0039xx7B": "Wireframe Mode",
  "0039xx7C": "Crossmark Mode",
  "0039xx7D": "Mpr Display Type",
  "0039xx7E": "Volume Display Type",
  "0039xx7F": "Last Reset",
  "0039xx80": "Last Non Full Screen Mode",
  "0039xx81": "Mpr Tool Index",
  "0039xx82": "Voi Tool Index",
  "0039xx83": "Tool Loop Mode",
  "0039xx84": "Volume Arb Mode",
  "0039xx85": "Mpr Zoom Enabled",
  "0039xx86": "Is Volume Zoom Enabled",
  "0039xx87": "Zoom Level Mpr",
  "0039xx88": "Zoom Level Volume",
  "0039xx89": "Is Auto Rotate Enabled",
  "0039xx8A": "Auto Rotate Axis",
  "0039xx8B": "Auto Rotate Range Index",
  "0039xx8C": "Auto Rotate Speed Index",
  "0039xx8D": "CVr Brightness",
  "0039xx8E": "CFlow State Index",
  "0039xx8F": "BSubmode Index",
  "0039xx90": "CSubmode Index",
  "0039xx91": "Cut Plane",
  "0039xx92": "Bookmark Chunk Id",
  "0039xx93": "Sequence Min Chunk Id",
  "0039xx94": "Sequence Max Chunk Id",
  "0039xx95": "Volume Rate Hz",
  "0039xx9A": "Voi Position Offset X",
  "0039xx9B": "Voi Position Offset Y",
  "0039xx9C": "Voi Position Offset Z",
  "0039xx9D": "Vr Tool Index",
  "0039xx9E": "Shading Percent",
  "0039xx9F": "Volume Type",
  "0039xxA0": "Vr Quad Display Type",
  "0039xxA1": "Mpr Center Location",
  "0039xxE0": "Slice Range Type",
  "0039xxE1": "Slice MPR Plane",
  "0039xxE2": "Slice Layout",
  "0039xxE3": "Slice Spacing",
  "0039xxE4": "Thin Vr Mode",
  "0039xxE5": "Thin Vr Thickness",
  "0039xxE6": "Curved TOP VOI Pivot X",
  "0039xxE7": "Curved TOP VOI Pivot Y",
  "0039xxE8": "Curved TOP VOI Pivot Z",
  "0039xxE9": "Curved TOP VOI Quadrant",
  "0039xxEA": "?",
  "0039xxED": "?",
  "0039xxEE": "?",
  "0039xxEF": "?",
  "0039xxF0": "?",
  "0039xxF1": "?",
  "0039xxF2": "?",
  "0039xxF3": "?",
  "0039xxF4": "?",
  "0039xxF5": "?",
  "0039xxF6": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SP DXMG WH AWS 1",
  "0019xx01": "AEC Coordinates",
  "0019xx02": "AEC Coordinates Size",
  "0019xx10": "Derivation Description",
  "0041xx02": "Reason for the Requested Procedure",
  "0051xx10": "?",
  "0051xx20": "?",
  "0051xx21": "?",
  "0051xx32": "?",
  "0051xx37": "?",
  "0051xx50": "?",
  "0051xx60": "Primary Positioner Scan Arc",
  "0051xx61": "Secondary Positioner Scan Arc",
  "0051xx62": "Primary Positioner Scan Start Angle",
  "0051xx63": "Secondary Positioner Scan Start Angle",
  "0051xx64": "Primary Positioner Increment",
  "0051xx65": "Secondary Positioner Increment",
  "0055xx01": "Projection View Display String"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MED SYNGO RT",
  "300Bxx10": "Plan Type",
  "300Bxx11": "Delivery Warning Dose Comment",
  "300Bxx12": "Imager Organ Program",
  "300Bxx13": "XA Image SID",
  "300Bxx14": "XA Image Receptor Angle",
  "300Bxx15": "Target Prescription Dose Type",
  "300Bxx16": "Referenced Target ROI Number",
  "300Bxx17": "RT Private Data",
  "300Bxx18": "Referenced Siemens Non Image Sequence",
  "300Bxx19": "Verification Method",
  "300Bxx20": "Alternative Treatment Machine Name Sequence",
  "300Bxx24": "Imager Angular Angle",
  "300Bxx25": "Imager Isocentric Angle",
  "300Bxx26": "Imager Vertical Position",
  "300Bxx27": "Imager Longitudinal Position",
  "300Bxx28": "Imager Lateral Position",
  "300Bxx29": "Imager Angular Rotation Direction",
  "300Bxx2A": "Imager Isocentric Rotation Direction",
  "300Bxx2B": "Requested Scanning Spot Size",
  "300Bxx2C": "Imager Orbital Angle",
  "300Bxx2E": "Imaging Technique",
  "300Bxx2F": "Imager Orbital Rotation Direction",
  "300Bxx30": "Patient Barcode",
  "300Bxx31": "Beam Modifier Type",
  "300Bxx32": "Source to Range Shifter Distance",
  "300Bxx33": "Treatment Room Name",
  "300Bxx60": "Ordered Referenced Beam Numbers",
  "300Bxx66": "Fraction Delivery Notes",
  "300Bxx67": "Record ID",
  "300Bxx76": "Fraction Group Code",
  "300Bxx77": "Referenced Treatment Beam Number",
  "300Bxx78": "Fraction Dose to Dose Reference",
  "300Bxx80": "Referenced Target ROI Sequence",
  "300Bxx82": "Target ROI Lateral Expansion Margin",
  "300Bxx83": "Target ROI Distal Expansion Margin",
  "300Bxx84": "Target ROI Proximal Expansion Margin",
  "300Bxx85": "Scan Grid Lateral Distance",
  "300Bxx86": "Scan Grid Longitudinal Distance",
  "300Bxx87": "Beam Weight",
  "300Bxx89": "Point on Plane",
  "300Bxx8A": "Norm Vector of Plane",
  "300Bxx8B": "Plane Thickness",
  "300Bxx90": "Treatment Approval Sequence",
  "300Bxx98": "Treatment Room Temperature",
  "300Bxx99": "Treatment Room Air Pressure",
  "300Bxx9B": "Split Plane Sequence",
  "300Bxx9C": "Display Color",
  "300Bxx9D": "Beam Group Name",
  "300BxxA0": "Expire DateTime",
  "300BxxA1": "Checksum Encryption Code",
  "300BxxA2": "Setup Type",
  "300BxxA3": "Number of Therapy Detectors",
  "300BxxA4": "Therapy Detector Sequence",
  "300BxxA5": "Therapy Detector Number",
  "300BxxA6": "Therapy Detector Setup ID",
  "300BxxA7": "Therapy Detector Settings Sequence",
  "300BxxA8": "Referenced Therapy Detector Number",
  "300BxxA9": "Therapy Detector Position",
  "300BxxB0": "Scan Spot Resumption Index",
  "300BxxB1": "Phantom Detector Measurements",
  "300BxxB2": "Treatment Events",
  "300BxxC0": "Dose Optimization Constraint Sequence",
  "300BxxC8": "Target Maximum Dose Constraint",
  "300BxxC9": "Target Maximum Dose Constraint Weight",
  "300BxxCA": "Target Minimum Dose Constraint",
  "300BxxCB": "Target Minimum Dose Constraint Weight",
  "300BxxCC": "Organ At Risk Maximum Dose Constraint",
  "300BxxCD": "Organ At Risk Maximum Dose Constraint Weight",
  "300BxxCE": "DVH Constraint Sequence",
  "300BxxCF": "DVH Constraint Volume Limit",
  "300BxxD0": "DVH Constraint Volume Units",
  "300BxxD1": "DVH Constraint Dose Limit",
  "300BxxD3": "DVH Constraint Direction",
  "300BxxD4": "DVH Constraint Weight",
  "300BxxD5": "Optimized Dose Type",
  "300BxxD6": "Dose Calculation and Optimization Parameters",
  "300BxxD7": "Applied Renormalization Factor",
  "300BxxD8": "Dose Constraint Status",
  "300BxxD9": "Organ At Risk Minimum Dose Constraint",
  "300BxxDA": "Organ At Risk Minimum Dose Constraint Weight",
  "300BxxE0": "Base Data Group Sequence",
  "300BxxE1": "Physics Base Data Group ID",
  "300BxxE2": "Biological Base Data Group ID",
  "300BxxE3": "Imaging Base Data Group ID",
  "300BxxE4": "Dosimetric Base Data Group ID",
  "300BxxE5": "Configuration Baseline",
  "300BxxE6": "Configuration Objects",
  "300BxxE7": "Confidence Measure Units",
  "300BxxE8": "Confidence Measure Value",
  "300BxxE9": "Imager Organ Program Name",
  "300BxxEB": "Body Region",
  "300BxxEC": "Prefinalized Status",
  "300BxxED": "Dosimetric Checksum Encryption Code",
  "300BxxEE": "Referenced Report Sequence",
  "300BxxEF": "Maintain Checksum Compatibility",
  "300BxxF0": "Dose Statistical Uncertainty",
  "300BxxF1": "Interpreted Radiation Type"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MEDCOM HEADER",
  "0029xx08": "MedCom Header Type",
  "0029xx09": "MedCom Header Version",
  "0029xx10": "MedCom Header Info",
  "0029xx20": "MedCom History Information",
  "0029xx31": "PMTF Information 1",
  "0029xx32": "PMTF Information 2",
  "0029xx33": "PMTF Information 3",
  "0029xx34": "PMTF Information 4",
  "0029xx35": "PMTF Information 5",
  "0029xx40": "Application Header Sequence",
  "0029xx41": "Application Header Type",
  "0029xx42": "Application Header ID",
  "0029xx43": "Application Header Version",
  "0029xx44": "Application Header Info",
  "0029xx50": "Workflow Control Flags",
  "0029xx51": "Archive Management Flag Keep Online",
  "0029xx52": "Archive Management Flag Do Not Archive",
  "0029xx53": "Image Location Status",
  "0029xx54": "Estimated Retrieve Time",
  "0029xx55": "Data Size of Retrieved Images",
  "0029xx70": "Siemens Link Sequenc",
  "0029xx71": "Referenced Ta",
  "0029xx72": "Referenced Tag Typ",
  "0029xx73": "Referenced Value Lengt",
  "0029xx74": "Referenced Object Device Typ",
  "0029xx75": "Referenced Object Device Locatio",
  "0029xx76": "Referenced Object I",
  "0029xx77": "Referenced Object Offse"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MEDCOM HEADER2",
  "0029xx60": "Series Work Flow Statu"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MEDCOM OOG",
  "0029xx08": "MedCom OOG Type",
  "0029xx09": "MedCom OOG Version",
  "0029xx10": "MedCom OOG Info"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MI RWVM SUV",
  "0041xx01": "SUV Decay Correction Method"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR CM 03",
  "0021xx01": "?",
  "0021xx02": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR DATAMAPPING ATTRIBUTES",
  "0011xx01": "Reprocessing Info",
  "0011xx02": "Data Role Type",
  "0011xx03": "Data Role Name",
  "0011xx04": "Rescan Name",
  "0011xx05": "?",
  "0011xx06": "Cardiac Type Name",
  "0011xx07": "Cardiac Type Name L2",
  "0011xx08": "Misc Indicator",
  "0011xx09": "?",
  "0011xx0A": "?",
  "0011xx0B": "?",
  "0011xx0C": "Split Bagging Name",
  "0011xx0D": "Split Sub Bagging Name",
  "0011xx0E": "Stage Sub Bagging Name",
  "0011xx0F": "Is Internal Data Role"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR EXTRACTED CSA HEADER",
  "0025xx01": "Extracted MR Header Information Sequence",
  "0025xx02": "Extracted MR Header Creator Identification Code",
  "0025xx03": "Extracted MR Header Tag"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR FOR 06",
  "0021xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR HEADER",
  "0019xx08": "?",
  "0019xx09": "?",
  "0019xx0A": "Number of Images in Mosaic",
  "0019xx0B": "Slice Measurement Duration",
  "0019xx0C": "B Value",
  "0019xx0D": "Diffusion Directionality",
  "0019xx0E": "Diffusion Gradient Direction",
  "0019xx0F": "Gradient Mode",
  "0019xx11": "Flow Compensation",
  "0019xx12": "Table Position Origin",
  "0019xx13": "Ima Abs Table Position",
  "0019xx14": "Ima Rel Table Position",
  "0019xx15": "Slice Position PCS",
  "0019xx16": "Time After Start",
  "0019xx17": "Slice Resolution",
  "0019xx18": "Real Dwell Time",
  "0019xx23": "?",
  "0019xx25": "?",
  "0019xx26": "?",
  "0019xx27": "B Matrix",
  "0019xx28": "Bandwidth per Pixel Phase Encode",
  "0019xx29": "Mosaic Ref Acq Times",
  "0051xx08": "CSA Image Header Type",
  "0051xx09": "CSA Image Header Version",
  "0051xx0A": "?",
  "0051xx0B": "Acquisition Matrix Text",
  "0051xx0C": "?",
  "0051xx0D": "?",
  "0051xx0E": "?",
  "0051xx0F": "Coil String",
  "0051xx11": "?",
  "0051xx12": "?",
  "0051xx13": "Positive PCS Directions",
  "0051xx15": "?",
  "0051xx16": "?",
  "0051xx17": "?",
  "0051xx18": "?",
  "0051xx19": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR IMA",
  "0021xx01": "MR Image Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR MRS 05",
  "0021xx01": "Transmitter Reference Amplitude",
  "0021xx02": "Hamming Filter Width",
  "0021xx03": "CSI Gridshift Vector",
  "0021xx04": "Mixing Time",
  "0021xx40": "Series Protocol Instance",
  "0021xx41": "Spectro Result Type",
  "0021xx42": "Spectro Result Extend Type",
  "0021xx43": "Post Proc Protocol",
  "0021xx44": "Rescan Level",
  "0021xx45": "Spectro Algo Result",
  "0021xx46": "Spectro Display Params",
  "0021xx47": "Voxel Number",
  "0021xx48": "APR Sequence",
  "0021xx49": "Sync Data",
  "0021xx4A": "Post Proc Detailed Protocol",
  "0021xx4B": "Spectro Result Extend Type Detailed"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR N3D",
  "0021xx30": "Background Color DR Sequence",
  "0021xx31": "Background Color",
  "0021xx36": "Field Map DR Sequence",
  "0021xx37": "Visible",
  "0021xx38": "Tinting Color",
  "0021xx39": "Tinting Enabled",
  "0021xx3A": "Volume ID",
  "0021xx3B": "Volume ID As Bound",
  "0021xx41": "Floating MPR Color LUT DR Sequence",
  "0021xx42": "RGBA LUT",
  "0021xx43": "Blend Factor",
  "0021xx44": "RGBA LUT Data Sequence",
  "0021xx45": "Color LUT",
  "0021xx4A": "Ortho MPR ColorLUT DR Sequence",
  "0021xx4B": "VRT Color LUT DR Sequence",
  "0021xx4D": "Pwl Transfer Function Data Sequence",
  "0021xx4C": "Pwl Transfer Function Sequence",
  "0021xx4E": "Pwl Vertex Index",
  "0021xx50": "Pwl Vertex Sequence",
  "0021xx51": "Floating MPR Render DR Sequence",
  "0021xx52": "Primary Show Hide",
  "0021xx56": "Alpha Dependent Fieldmap",
  "0021xx57": "Volume Filter",
  "0021xx5A": "Ortho MPR Render DR Sequence",
  "0021xx5B": "VRT Render DR Sequence",
  "0021xx53": "Secondary Show Hide",
  "0021xx54": "Primary Shading Index",
  "0021xx55": "Secondary Shading Index",
  "0021xx58": "Bounding Box Color",
  "0021xx59": "Scene Interaction On",
  "0021xx60": "Clip Plane DR Sequence",
  "0021xx61": "Plane Center",
  "0021xx62": "Plane Normal",
  "0021xx63": "Plane Scale",
  "0021xx64": "Plane Enable GL Clip",
  "0021xx65": "Plane Handle Ratio",
  "0021xx66": "Plane Bounding Points",
  "0021xx67": "Plane Motion Matrix",
  "0021xx68": "Plane Shift Velocity",
  "0021xx69": "Plane Enabled",
  "0021xx6A": "Plane Rotate Velocity",
  "0021xx6B": "Plane Show Graphics",
  "0021xx73": "Plane Single Selection Mode",
  "0021xx74": "Plane Alignment",
  "0021xx75": "Plane Selected",
  "0021xx70": "Split Plane DR Sequence",
  "0021xx71": "Floating MPR DR Sequence",
  "0021xx6E": "Plane MPR Locked",
  "0021xx6F": "Plane Scaling Disabled",
  "0021xx72": "Ortho MPR DR Sequence",
  "0021xx6C": "Offset",
  "0021xx6D": "Ortho MPR At Bounding Box",
  "0021xx76": "Clustering DR Sequence",
  "0021xx77": "Cluster Size",
  "0021xx78": "Clustering Enabled",
  "0021xx79": "Cluster Mask Vol ID",
  "0021xx80": "Head Masking DR Sequence",
  "0021xx81": "Masking Range",
  "0021xx82": "Mask Enabled",
  "0021xx83": "Brain Masking DR Sequence",
  "0021xx84": "Masking Status DR Sequence",
  "0021xx85": "VRT Masking DR Sequence",
  "0021xx86": "Ortho MPR Masking DR Sequence",
  "0021xx87": "Floating MPR Masking DR Sequence",
  "0021xx88": "Align DR Sequence",
  "0021xx89": "Registration Matrix",
  "0021xx90": "Functional Evaluation DR Sequence",
  "0021xx91": "Frame Acquition Numbers",
  "0021xx92": "Show Cursor",
  "0021xx93": "Current Frame",
  "0021xx94": "Plot Area",
  "0021xx95": "Plot Text Position",
  "0021xx96": "Base Line Points",
  "0021xx97": "Active Points",
  "0021xx98": "Show Label",
  "0021xx99": "Mean Plot",
  "0021xx9A": "Motion Plot",
  "0021xx9B": "Activate Normallized Curve",
  "0021xx9C": "Plot Size",
  "0021xxA0": "PlotDR Sequence",
  "0021xxA1": "Title",
  "0021xxA2": "Auto Scale",
  "0021xxA3": "Fixed Scale",
  "0021xxA5": "Label X",
  "0021xxA6": "Label Y",
  "0021xxA7": "Legend",
  "0021xxA8": "Scroll Bar X",
  "0021xxA9": "Scroll Bar Y",
  "0021xxAA": "Connect Scroll X",
  "0021xxAB": "Plot ID",
  "0021xxAC": "Plot Position",
  "0021xxB0": "Curve DR Sequence",
  "0021xxB1": "Curve ID",
  "0021xxB2": "Plot Type",
  "0021xxB3": "Curve Values",
  "0021xxB4": "Line Color",
  "0021xxB5": "Marker Color",
  "0021xxB6": "Line Filled",
  "0021xxB7": "Label",
  "0021xxB8": "Show Marker",
  "0021xxB9": "Marker Shape",
  "0021xxBA": "Smoothing Algo",
  "0021xxBB": "Marker Size",
  "0021xxBC": "Line Style",
  "0021xxBD": "Line Pattern",
  "0021xxBE": "Line Width",
  "0021xxC0": "VRT Filter DR Sequence",
  "0021xxC1": "Filter Type",
  "0021xxC2": "Current Active Plane"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR PHOENIX ATTRIBUTES",
  "0021xx01": "Mds Mode Mask",
  "0021xx02": "Dixon",
  "0021xx03": "Sequence File Name",
  "0021xxF1": "Count of Pseudo Attributes"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR PS 04",
  "0021xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR SDI 02",
  "0021xx01": "Number of Images in Mosaic",
  "0021xx02": "Slice Normal Vector",
  "0021xx03": "Slice Measurement Duration",
  "0021xx04": "Time After Start",
  "0021xx05": "B Value",
  "0021xx06": "ICE Dims",
  "0021xx1A": "RF SWD Data Type",
  "0021xx1B": "MoCoQ Measure",
  "0021xx1C": "Phase Encoding Direction Positive",
  "0021xx1D": "Pixel File",
  "0021xx1F": "FMRI Stimul Info",
  "0021xx20": "Voxel in Plane Rot",
  "0021xx21": "Diffusion Directionality 4MF",
  "0021xx22": "Voxel Thickness",
  "0021xx23": "B Matrix",
  "0021xx24": "Multistep Index",
  "0021xx25": "Comp Adjusted Param",
  "0021xx26": "Comp Algorithm",
  "0021xx27": "Voxel NormalC or",
  "0021xx29": "Flow Encoding Direction String",
  "0021xx2A": "Voxel Normal Sag",
  "0021xx2B": "Voxel Position Sag",
  "0021xx2C": "Voxel Normal Tra",
  "0021xx2D": "Voxel Position Tra",
  "0021xx2E": "Used Channel Mask",
  "0021xx2F": "Repetition Time Effective",
  "0021xx30": "CSI Image Orientation Patient",
  "0021xx32": "CSI Slice Location",
  "0021xx33": "Echo Column Position",
  "0021xx34": "Flow VENC",
  "0021xx35": "Measured Fourier Lines",
  "0021xx36": "LQ Algorithm",
  "0021xx37": "Voxel Position Cor",
  "0021xx38": "Filter2",
  "0021xx39": "FMRI Stimul Level",
  "0021xx3A": "Voxel Readout FOV",
  "0021xx3B": "Normalize Manipulated",
  "0021xx3C": "RBMoCoRot",
  "0021xx3D": "Comp Manual Adjusted",
  "0021xx3F": "Spectrum Text Region Label",
  "0021xx40": "Voxel Phase FOV",
  "0021xx41": "GSWD Data Type",
  "0021xx42": "Real Dwell Time",
  "0021xx43": "Comp Job ID",
  "0021xx44": "Comp Blended",
  "0021xx45": "Ima Abs Table Position",
  "0021xx46": "Diffusion Gradient Direction",
  "0021xx47": "Flow Encoding Direction",
  "0021xx48": "Echo Partition Position",
  "0021xx49": "Echo Line Position",
  "0021xx4B": "Comp Auto Param",
  "0021xx4C": "Original Image Number",
  "0021xx4D": "Original Series Number",
  "0021xx4E": "Actual 3D Ima Part Number",
  "0021xx4F": "Ima Coil String",
  "0021xx50": "CSI Pixel Spacing",
  "0021xx51": "Sequence Mask",
  "0021xx52": "Image Group",
  "0021xx53": "Bandwidth Per Pixel Phase Encode",
  "0021xx54": "Non Planar Image",
  "0021xx55": "Pixel File Name",
  "0021xx56": "Ima PAT Mode Text",
  "0021xx57": "CSI Image Position Patient",
  "0021xx58": "Acquisition Matrix Text",
  "0021xx59": "Ima Rel Table Position",
  "0021xx5A": "RBMoCoTrans",
  "0021xx5B": "Slice Position PCS",
  "0021xx5C": "CSI Slice Thickness",
  "0021xx5E": "Protocol Slice Number",
  "0021xx5F": "Filter1",
  "0021xx60": "Transmitting Coil",
  "0021xx61": "Number of Averages N4",
  "0021xx62": "Mosaic Ref Acq Times",
  "0021xx63": "Auto Inline Image Filter Enabled",
  "0021xx65": "QC Data",
  "0021xx66": "Exam Landmarks",
  "0021xx67": "Exam Data Role",
  "0021xx68": "MR Diffusion",
  "0021xx69": "Real World Value Mapping",
  "0021xx70": "Data Set Info",
  "0021xx71": "Used Channel String",
  "0021xx72": "Phase ContrastN4",
  "0021xx73": "MR Velocity Encoding",
  "0021xx74": "Velocity Encoding Direction N4",
  "0021xx75": "Image Type 4MF",
  "0021xx76": "Image History",
  "0021xx77": "SequenceI nfo",
  "0021xx78": "Image Type Visible",
  "0021xx79": "Distortion Correction Type",
  "0021xx80": "Image Filter Type",
  "0021xxFE": "Siemens MR SDI Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR SDS 01",
  "0021xxFE": "Siemens MR SDS Sequence",
  "0021xx01": "Used Patient Weight",
  "0021xx02": "SAR Whole Body",
  "0021xx03": "MR Protocol",
  "0021xx04": "Slice Array Concatenations",
  "0021xx05": "Rel Table Position",
  "0021xx06": "Coil For Gradient",
  "0021xx07": "Long Model Name",
  "0021xx08": "Gradient Mode",
  "0021xx09": "PAT Mode Text",
  "0021xx0A": "SW Correction Factor",
  "0021xx0B": "RF Power Error Indicator",
  "0021xx0C": "Positive PCS Directions",
  "0021xx0D": "Protocol Change History",
  "0021xx0E": "Data File Name",
  "0021xx0F": "Stimlim",
  "0021xx10": "MR Protocol Version",
  "0021xx11": "Phase Gradient Amplitude",
  "0021xx12": "Readout OS",
  "0021xx13": "tpuls max",
  "0021xx14": "Number of Prescans",
  "0021xx15": "Measurement Index",
  "0021xx16": "dBdt Threshold",
  "0021xx17": "Selection Gradient Amplitude",
  "0021xx18": "RF SWD Most Critical Aspect",
  "0021xx19": "MR Phoenix Protocol",
  "0021xx1A": "Coil String",
  "0021xx1B": "Slice Resolution",
  "0021xx1C": "Stim max online",
  "0021xx1D": "Operation Mode Flag",
  "0021xx1E": "Auto Align Matrix",
  "0021xx1F": "Coil Tuning Reflection",
  "0021xx20": "Representative Image",
  "0021xx22": "Sequence File Owner",
  "0021xx23": "RF Watchdog Mask",
  "0021xx24": "Post Proc Protocol",
  "0021xx25": "Table Position Origin",
  "0021xx26": "Misc Sequence Param",
  "0021xx27": "Isocentered",
  "0021xx2A": "Coil ID",
  "0021xx2B": "Pat Rein Pattern",
  "0021xx2C": "SED",
  "0021xx2D": "SAR Most Critical Aspect",
  "0021xx2E": "Stimm on mode",
  "0021xx2F": "Gradient Delay Time",
  "0021xx30": "Readout Gradient Amplitude",
  "0021xx31": "Abs Table Position",
  "0021xx32": "RF SWD Operation Mode",
  "0021xx33": "Coil for Gradient2",
  "0021xx34": "Stim Factor",
  "0021xx35": "Stim max ges norm online",
  "0021xx36": "dBdt max",
  "0021xx38": "Transmitter Calibration",
  "0021xx39": "MR EVA Protocol",
  "0021xx3B": "dBdt Limit",
  "0021xx3C": "VF Model Info",
  "0021xx3D": "Phase Slice Oversampling",
  "0021xx3E": "VF Settings",
  "0021xx3F": "Auto Align Data",
  "0021xx40": "FMRI Model Parameters",
  "0021xx41": "FMRI Model Info",
  "0021xx42": "FMRI External Parameters",
  "0021xx43": "FMRI External Info",
  "0021xx44": "B1 RMS",
  "0021xx45": "B1 RMS Supervision",
  "0021xx46": "Tales Reference Power",
  "0021xx47": "Safety Standard",
  "0021xx48": "DICOM Image Flavor",
  "0021xx49": "DICOM Acquisition Contrast",
  "0021xx50": "RF Echo Train Length 4MF",
  "0021xx51": "Gradient Echo Train Length 4MF",
  "0021xx52": "Version Info",
  "0021xx53": "Laterality 4MF"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR VA0  COAD",
  "0019xx12": "Magnetic Field Strength",
  "0019xx14": "ADC Voltage",
  "0019xx16": "ADC Offset",
  "0019xx20": "Transmitter Amplitude",
  "0019xx21": "Number of Transmitter Amplitudes",
  "0019xx22": "Transmitter Attenuator",
  "0019xx24": "Transmitter Calibration",
  "0019xx26": "Transmitter Reference",
  "0019xx50": "Receiver Total Gain",
  "0019xx51": "Receiver Amplifier Gain",
  "0019xx52": "Receiver Preamplifier Gain",
  "0019xx54": "Receiver Cable Attenuation",
  "0019xx55": "Receiver Reference Gain",
  "0019xx56": "Receiver Filter Frequency",
  "0019xx60": "Reconstruction Scale Factor",
  "0019xx62": "Reference Scale Factor",
  "0019xx70": "Phase Gradient Amplitude",
  "0019xx71": "Readout Gradient Amplitude",
  "0019xx72": "Selection Gradient Amplitude",
  "0019xx80": "Gradient Delay Time",
  "0019xx82": "Total Gradient Delay Time",
  "0019xx90": "Sensitivity Correction Label",
  "0019xx91": "Saturation Phase Encoding Vector Coronal Component",
  "0019xx92": "Saturation Readout Vector Coronal Component",
  "0019xxA0": "RF Watchdog Mask",
  "0019xxA1": "EPI Reconstruction Slope",
  "0019xxA2": "RF Power Error Indicator",
  "0019xxA5": "Specific Absorption Rate Whole Body",
  "0019xxA6": "Specific Energy Dose",
  "0019xxB0": "Adjustment Status Mask",
  "0019xxC1": "EPI Capacity",
  "0019xxC2": "EPI Inductance",
  "0019xxC3": "EPI Switch Configuration Code",
  "0019xxC4": "EPI Switch Hardware Code",
  "0019xxC5": "EPI Switch Delay Time",
  "0019xxD1": "Flow Sensitivity",
  "0019xxD2": "Calculation Submode",
  "0019xxD3": "Field of View Ratio",
  "0019xxD4": "Base Raw Matrix Size",
  "0019xxD5": "2D Oversampling Lines",
  "0019xxD6": "3D Phase Oversampling Partitions",
  "0019xxD7": "Echo Line Position",
  "0019xxD8": "Echo Column Position",
  "0019xxD9": "Lines Per Segment",
  "0019xxDA": "Phase Coding Direction"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR VA0  GEN",
  "0019xx10": "Total Measurement Time Nominal",
  "0019xx11": "Total Measurement Time Current",
  "0019xx12": "Start Delay Time",
  "0019xx13": "Dwell Time",
  "0019xx14": "Number of Phases",
  "0019xx16": "Sequence Control Mask",
  "0019xx18": "Measurement Status Mask",
  "0019xx20": "Number of Fourier Lines Nominal",
  "0019xx21": "Number of Fourier Lines Current",
  "0019xx26": "Number of Fourier Lines after Zero",
  "0019xx28": "First Measured Fourier Line",
  "0019xx30": "Acquisition Columns",
  "0019xx31": "Reconstruction Columns",
  "0019xx40": "Array Coil Element Number",
  "0019xx41": "Array Coil Element Select Mask",
  "0019xx42": "Array Coil Element Data Mask",
  "0019xx43": "Array Coil Element To ADC Connect",
  "0019xx44": "Array Coil Element Noise Level",
  "0019xx45": "Array Coil ADC Pair Number",
  "0019xx46": "Array Coil Combination Mask",
  "0019xx50": "Number of Averages Current",
  "0019xx60": "Flip Angle",
  "0019xx70": "Number of Prescans",
  "0019xx81": "Filter Type for Raw Data",
  "0019xx82": "Filter Parameter for Raw Data",
  "0019xx83": "Filter Type for Image Data",
  "0019xx84": "Filter Parameter for Image Data",
  "0019xx85": "Filter Type for Phase Correction",
  "0019xx86": "Filter Parameter for Phase Correction",
  "0019xx87": "Normalization Filter Type for Image Data",
  "0019xx88": "Normalization Filter Parameter for Image Data",
  "0019xx90": "Number of Saturation Regions",
  "0019xx91": "Saturation Phase Encoding Vector Sagittal Component",
  "0019xx92": "Saturation Readout Vector Sagittal Component",
  "0019xx93": "EPI Stimulation Monitor Mode",
  "0019xx94": "Image Rotation Angle",
  "0019xx96": "Coil ID Mask",
  "0019xx97": "Coil Class Mask",
  "0019xx98": "Coil Position",
  "0019xxA0": "EPI Reconstruction Phase",
  "0019xxA1": "EPI Reconstruction Slope",
  "0021xx20": "Phase Correction Rows Sequence",
  "0021xx21": "Phase Correction Columns Sequence",
  "0021xx22": "Phase Correction Rows Reconstruction",
  "0021xx24": "Phase Correction Columns Reconstruction",
  "0021xx30": "Number of 3D Raw Partitions Nominal",
  "0021xx31": "Number of 3D Raw Partitions Current",
  "0021xx34": "Number of 3D Image Partitions",
  "0021xx36": "Actual 3D Image Partition Number",
  "0021xx39": "Slab Thickness",
  "0021xx40": "Number of Slices Nominal",
  "0021xx41": "Number of Slices Current",
  "0021xx42": "Current Slice Number",
  "0021xx43": "Current Group Number",
  "0021xx44": "Current Slice Distance Factor",
  "0021xx45": "MIP Start Row",
  "0021xx46": "MIP Stop Row",
  "0021xx47": "MIP Start Column",
  "0021xx48": "MIP Stop Column",
  "0021xx49": "MIP Start Slice",
  "0021xx4A": "MIP Stop Slice",
  "0021xx4F": "Order of Slices",
  "0021xx50": "Signal Mask",
  "0021xx52": "Delay After Trigger",
  "0021xx53": "RR Interval",
  "0021xx54": "Number of Trigger Pulses",
  "0021xx56": "Repetition Time Effective",
  "0021xx57": "Gate Phase",
  "0021xx58": "Gate Threshold",
  "0021xx59": "Gated Ratio",
  "0021xx60": "Number of Interpolated Images",
  "0021xx70": "Number of Echoes",
  "0021xx72": "Second Echo Time",
  "0021xx73": "Second Repetition Time",
  "0021xx80": "Cardiac Code",
  "0021xx91": "Saturation Phase Encoding Vector Transverse Component",
  "0021xx92": "Saturation Readout Vector Transverse Component",
  "0021xx93": "EPI Change Value of Magnitude",
  "0021xx94": "EPI Change Value of X Component",
  "0021xx95": "EPI Change Value of Y Component",
  "0021xx96": "EPI Change Value of Z Component"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS MR VA0  RAW",
  "0021xx00": "Sequence Type",
  "0021xx01": "Vector Size Original",
  "0021xx02": "Vector Size Extended",
  "0021xx03": "Acquired Spectral Range",
  "0021xx04": "VOI Position",
  "0021xx05": "VOI Size",
  "0021xx06": "CSI Matrix Size Original",
  "0021xx07": "CSI Matrix Size Extended",
  "0021xx08": "Spatial Grid Shift",
  "0021xx09": "Signal Limits Minimum",
  "0021xx10": "Signal Limits Maximum",
  "0021xx11": "Spec Info Mask",
  "0021xx12": "EPI Time Rate of Change of Magnitude",
  "0021xx13": "EPI Time Rate of Change of X Component",
  "0021xx14": "EPI Time Rate of Change of Y Component",
  "0021xx15": "EPI Time Rate of Change of Z Component",
  "0021xx16": "EPI Time Rate of Change Legal Limit 1",
  "0021xx17": "EPI Operation Mode Flag",
  "0021xx18": "EPI Field Calculation Safety Factor",
  "0021xx19": "EPI Legal Limit 1 of Change Value",
  "0021xx20": "EPI Legal Limit 2 of Change Value",
  "0021xx21": "EPI Rise Time",
  "0021xx30": "Array Coil ADC Offset",
  "0021xx31": "Array Coil Preamplifier Gain",
  "0021xx50": "Saturation Type",
  "0021xx51": "Saturation Normal Vector",
  "0021xx52": "Saturation Position Vector",
  "0021xx53": "Saturation Thickness",
  "0021xx54": "Saturation Width",
  "0021xx55": "Saturation Distance"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS NUMARIS II",
  "7FE3xx00": "Image Graphics Format Code",
  "7FE3xx10": "Image Graphics",
  "7FE3xx20": "Image Graphics Dummy"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS RA GEN",
  "0011xx20": "?",
  "0011xx25": "?",
  "0011xx26": "?",
  "0011xx30": "?",
  "0011xx35": "?",
  "0011xx40": "?",
  "0019xx15": "?",
  "0019xx1F": "?",
  "0019xx20": "?",
  "0019xx22": "?",
  "0019xx24": "?",
  "0019xx26": "?",
  "0019xx28": "?",
  "0019xx2C": "?",
  "0019xx2A": "?",
  "0019xx2E": "?",
  "0019xx30": "?",
  "0019xx34": "?",
  "0019xx36": "?",
  "0019xx38": "?",
  "0019xx3A": "?",
  "0019xx3C": "?",
  "0019xx3E": "?",
  "0019xx32": "?",
  "0019xx40": "?",
  "0019xx42": "?",
  "0019xx44": "?",
  "0019xx46": "?",
  "0019xx48": "?",
  "0019xx4A": "?",
  "0019xx4C": "?",
  "0019xx50": "?",
  "0019xx52": "?",
  "0019xx54": "?",
  "0019xx56": "?",
  "0019xx58": "?",
  "0019xx5A": "?",
  "0019xx5C": "?",
  "0019xx5E": "?",
  "0019xx60": "?",
  "0019xx62": "?",
  "0019xx64": "?",
  "0019xx66": "?",
  "0019xx68": "?",
  "0019xx6A": "?",
  "0019xx70": "?",
  "0019xx72": "?",
  "0019xx74": "?",
  "0019xx76": "?",
  "0019xx78": "?",
  "0019xx7A": "?",
  "0019xx7C": "?",
  "0019xx7E": "?",
  "0019xx80": "?",
  "0019xx82": "?",
  "0019xx84": "?",
  "0019xx86": "?",
  "0019xx88": "?",
  "0019xx8A": "?",
  "0019xx8C": "?",
  "0019xx8E": "?",
  "0019xx92": "?",
  "0019xx96": "?",
  "0019xx98": "?",
  "0019xx9A": "?",
  "0019xx9C": "?",
  "0019xx9E": "?",
  "0019xx94": "?",
  "0019xxA2": "?",
  "0019xxA4": "?",
  "0019xxA5": "?",
  "0019xxA6": "?",
  "0019xxA7": "?",
  "0019xxA8": "?",
  "0019xxA9": "?",
  "0019xxAA": "?",
  "0019xxAB": "?",
  "0019xxAC": "?",
  "0019xxAD": "?",
  "0019xxFF": "?",
  "0021xx15": "?",
  "0021xx20": "?",
  "0021xx25": "?",
  "0021xx27": "?",
  "0021xx28": "?",
  "0021xx30": "?",
  "0021xx40": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS RA PLANE A",
  "0011xx28": "?",
  "0011xx29": "?",
  "0011xx2A": "?",
  "0011xx2B": "?",
  "0011xx2C": "?",
  "0019xx15": "?",
  "0019xx18": "?",
  "0019xx19": "?",
  "0019xx1A": "?",
  "0019xx1B": "?",
  "0019xx1C": "?",
  "0019xx1D": "?",
  "0019xx1E": "?",
  "0019xx1F": "?",
  "0019xx20": "?",
  "0019xx22": "?",
  "0019xx24": "?",
  "0019xx26": "?",
  "0019xx28": "?",
  "0019xx2A": "?",
  "0019xx2C": "?",
  "0019xx2E": "?",
  "0019xx30": "?",
  "0019xx32": "?",
  "0019xx34": "?",
  "0019xx36": "?",
  "0019xx38": "?",
  "0019xx3A": "?",
  "0019xx3C": "?",
  "0019xx3E": "?",
  "0019xx40": "?",
  "0019xx42": "?",
  "0019xx44": "?",
  "0019xx46": "?",
  "0019xx48": "?",
  "0019xx4A": "?",
  "0019xx4C": "?",
  "0019xx4E": "?",
  "0019xx50": "?",
  "0019xx52": "?",
  "0019xx54": "?",
  "0019xx56": "?",
  "0019xx58": "?",
  "0019xx5A": "?",
  "0019xx5C": "?",
  "0019xx5E": "?",
  "0019xx60": "?",
  "0019xx62": "?",
  "0019xx64": "?",
  "0019xx66": "?",
  "0019xx68": "?",
  "0019xx6A": "?",
  "0019xx6C": "?",
  "0019xx6E": "?",
  "0019xx70": "?",
  "0019xx72": "?",
  "0019xx74": "?",
  "0019xx76": "?",
  "0019xx78": "?",
  "0019xx7A": "?",
  "0019xx7C": "?",
  "0019xx7E": "?",
  "0019xx80": "?",
  "0019xx82": "?",
  "0019xx84": "?",
  "0019xx86": "?",
  "0019xx88": "?",
  "0019xx8A": "?",
  "0019xx8C": "?",
  "0019xx8E": "?",
  "0019xx90": "?",
  "0019xx92": "?",
  "0019xx94": "?",
  "0019xx96": "?",
  "0019xx98": "?",
  "0019xx9A": "?",
  "0019xx9C": "?",
  "0019xx9E": "?",
  "0019xxA0": "?",
  "0019xxA2": "?",
  "0019xxA4": "?",
  "0019xxA6": "?",
  "0019xxA8": "?",
  "0019xxAA": "?",
  "0019xxAC": "?",
  "0019xxAE": "?",
  "0019xxB0": "?",
  "0019xxB1": "?",
  "0019xxB2": "?",
  "0019xxB3": "?",
  "0019xxB4": "?",
  "0019xxB5": "?",
  "0019xxB6": "?",
  "0019xxB7": "?",
  "0019xxB8": "?",
  "0019xxB9": "?",
  "0019xxBB": "?",
  "0019xxBC": "?",
  "0019xxBD": "?",
  "0019xxBE": "?",
  "0019xxBF": "?",
  "0019xxC0": "?",
  "0019xxC1": "?",
  "0019xxC2": "?",
  "0019xxC3": "?",
  "0019xxC4": "?",
  "0019xxC5": "?",
  "0019xxC6": "?",
  "0019xxC7": "?",
  "0019xxC8": "?",
  "0019xxC9": "?",
  "0019xxCA": "?",
  "0019xxCB": "?",
  "0019xxCC": "?",
  "0019xxCD": "?",
  "0019xxCE": "?",
  "0019xxCF": "?",
  "0019xxD1": "?",
  "0019xxD2": "?",
  "0019xxD3": "?",
  "0019xxD4": "?",
  "0019xxD5": "?",
  "0019xxD6": "?",
  "0019xxD7": "?",
  "0019xxD8": "?",
  "0019xxD9": "?",
  "0019xxDA": "?",
  "0019xxDB": "?",
  "0019xxDC": "?",
  "0019xxDD": "?",
  "0019xxDE": "?",
  "0019xxDF": "?",
  "0019xxE0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS RA PLANE B",
  "0011xx28": "?",
  "0011xx29": "?",
  "0011xx2A": "?",
  "0011xx2B": "?",
  "0011xx2C": "?",
  "0019xx15": "?",
  "0019xx18": "?",
  "0019xx19": "?",
  "0019xx1A": "?",
  "0019xx1B": "?",
  "0019xx1C": "?",
  "0019xx1D": "?",
  "0019xx1E": "?",
  "0019xx1F": "?",
  "0019xx20": "?",
  "0019xx22": "?",
  "0019xx24": "?",
  "0019xx26": "?",
  "0019xx28": "?",
  "0019xx2A": "?",
  "0019xx2C": "?",
  "0019xx2E": "?",
  "0019xx30": "?",
  "0019xx32": "?",
  "0019xx34": "?",
  "0019xx36": "?",
  "0019xx38": "?",
  "0019xx3A": "?",
  "0019xx3C": "?",
  "0019xx3E": "?",
  "0019xx40": "?",
  "0019xx42": "?",
  "0019xx44": "?",
  "0019xx46": "?",
  "0019xx48": "?",
  "0019xx4A": "?",
  "0019xx4C": "?",
  "0019xx4E": "?",
  "0019xx50": "?",
  "0019xx52": "?",
  "0019xx54": "?",
  "0019xx56": "?",
  "0019xx58": "?",
  "0019xx5A": "?",
  "0019xx5C": "?",
  "0019xx5E": "?",
  "0019xx60": "?",
  "0019xx62": "?",
  "0019xx64": "?",
  "0019xx66": "?",
  "0019xx68": "?",
  "0019xx6A": "?",
  "0019xx6C": "?",
  "0019xx6E": "?",
  "0019xx70": "?",
  "0019xx72": "?",
  "0019xx74": "?",
  "0019xx76": "?",
  "0019xx78": "?",
  "0019xx7A": "?",
  "0019xx7C": "?",
  "0019xx7E": "?",
  "0019xx80": "?",
  "0019xx82": "?",
  "0019xx84": "?",
  "0019xx86": "?",
  "0019xx88": "?",
  "0019xx8A": "?",
  "0019xx8C": "?",
  "0019xx8E": "?",
  "0019xx90": "?",
  "0019xx92": "?",
  "0019xx94": "?",
  "0019xx96": "?",
  "0019xx98": "?",
  "0019xx9A": "?",
  "0019xx9C": "?",
  "0019xx9E": "?",
  "0019xxA0": "?",
  "0019xxA2": "?",
  "0019xxA4": "?",
  "0019xxA6": "?",
  "0019xxA8": "?",
  "0019xxAA": "?",
  "0019xxAC": "?",
  "0019xxAE": "?",
  "0019xxB0": "?",
  "0019xxB1": "?",
  "0019xxB2": "?",
  "0019xxB3": "?",
  "0019xxB4": "?",
  "0019xxB5": "?",
  "0019xxB6": "?",
  "0019xxB7": "?",
  "0019xxB8": "?",
  "0019xxB9": "?",
  "0019xxBB": "?",
  "0019xxBC": "?",
  "0019xxBD": "?",
  "0019xxBE": "?",
  "0019xxBF": "?",
  "0019xxC0": "?",
  "0019xxC1": "?",
  "0019xxC2": "?",
  "0019xxC3": "?",
  "0019xxC4": "?",
  "0019xxC5": "?",
  "0019xxC6": "?",
  "0019xxC7": "?",
  "0019xxC8": "?",
  "0019xxC9": "?",
  "0019xxCA": "?",
  "0019xxCB": "?",
  "0019xxCC": "?",
  "0019xxCD": "?",
  "0019xxCE": "?",
  "0019xxCF": "?",
  "0019xxD1": "?",
  "0019xxD2": "?",
  "0019xxD3": "?",
  "0019xxD4": "?",
  "0019xxD5": "?",
  "0019xxD6": "?",
  "0019xxD7": "?",
  "0019xxD8": "?",
  "0019xxD9": "?",
  "0019xxDA": "?",
  "0019xxDB": "?",
  "0019xxDC": "?",
  "0019xxDD": "?",
  "0019xxDE": "?",
  "0019xxDF": "?",
  "0019xxE0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS RIS",
  "0011xx10": "Patient UID",
  "0011xx11": "Patient ID",
  "0011xx20": "Patient Registration Date",
  "0011xx21": "Patient Registration Time",
  "0011xx30": "Patientname RIS",
  "0011xx31": "Patientprename RIS",
  "0011xx40": "Patient Hospital Status",
  "0011xx41": "Medical Alerts",
  "0011xx42": "Contrast Allergies",
  "0031xx10": "Request UID",
  "0031xx45": "Requesting Physician",
  "0031xx50": "Requested Physician",
  "0033xx10": "Patient Study UID"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SERIES SHADOW ATTRIBUTES",
  "0021xx01": "?",
  "0021xx02": "?",
  "0021xx03": "?",
  "0021xx04": "?",
  "0021xx05": "?",
  "0021xx06": "?",
  "0021xx07": "?",
  "0021xx08": "?",
  "0021xx09": "?",
  "0021xx0A": "?",
  "0021xx0C": "?",
  "0021xx0D": "?",
  "0021xx0F": "?",
  "0021xx10": "?",
  "0021xx11": "?",
  "0021xx12": "?",
  "0021xx13": "?",
  "0021xx14": "?",
  "0021xx16": "?",
  "0021xx17": "?",
  "0021xx18": "?",
  "0021xx19": "?",
  "0021xx1A": "?",
  "0021xx1B": "?",
  "0021xx1C": "?",
  "0021xx1D": "?",
  "0021xx1F": "?",
  "0021xx22": "?",
  "0021xx23": "?",
  "0021xx25": "?",
  "0021xx26": "?",
  "0021xx27": "?",
  "0021xx2A": "?",
  "0021xx2B": "?",
  "0021xx2C": "?",
  "0021xx2D": "?",
  "0021xx2E": "?",
  "0021xx2F": "?",
  "0021xx30": "?",
  "0021xx31": "?",
  "0021xx32": "?",
  "0021xx33": "?",
  "0021xx34": "?",
  "0021xx35": "?",
  "0021xx36": "?",
  "0021xx38": "?",
  "0021xx3B": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SIENET",
  "0019xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SMS-AX  ACQ 1.0",
  "0021xx00": "Acquisition Type",
  "0021xx01": "Acquisition Mode",
  "0021xx02": "Footswitch Index",
  "0021xx03": "Acquisition Room",
  "0021xx04": "Current Time Product",
  "0021xx05": "Imager Receptor Dose",
  "0021xx06": "Skin Dose Percent",
  "0021xx07": "Skin Dose Accumulation",
  "0021xx08": "Skin Dose Rate",
  "0021xx09": "Impac Filename",
  "0021xx0A": "Copper Filter",
  "0021xx0B": "Measuring Field",
  "0021xx0C": "Post Blanking Circle",
  "0021xx0D": "Dyna Angles",
  "0021xx0E": "Total Steps",
  "0021xx0F": "Dyna X-Ray Info",
  "0021xx10": "Modality LUT Input Gamma",
  "0021xx11": "Modality LUT Output Gamma",
  "0021xx12": "SH_STPAR",
  "0021xx13": "Acquisition Zoom",
  "0021xx14": "Dyna Angulation Step",
  "0021xx15": "DDO Value",
  "0021xx16": "DR Single Flag",
  "0021xx17": "Source to Isocente",
  "0021xx18": "Pressure Data",
  "0021xx19": "ECG Index Array",
  "0021xx1A": "FD Flag",
  "0021xx1B": "SH_ZOOM",
  "0021xx1C": "SH_COLPAR",
  "0021xx1D": "K-Factor",
  "0021xx1E": "EVE",
  "0021xx1F": "Total Scene Time",
  "0021xx20": "Restore Flag",
  "0021xx21": "Stand Movement Flag",
  "0021xx22": "FD Rows",
  "0021xx23": "FD Columns",
  "0021xx24": "Table Movement Flag",
  "0021xx26": "Crispy XPI Filter Value",
  "0021xx27": "IC Stent Flag",
  "0021xx28": "Gamma LUT Sequence",
  "0021xx29": "Acquisition Scene Time",
  "0021xx2A": "3D Cardiac Phase Center",
  "0021xx2B": "3D Cardiac Phase Width",
  "0021xx30": "Organ Program Info",
  "0021xx3A": "DDO Kernel size",
  "0021xx3B": "mAs Modulation",
  "0021xx3C": "3D R-Peak Reference Time",
  "0021xx3D": "ECG Frame Time Vector",
  "0021xx3E": "ECG Start Time of Run",
  "0021xx40": "Gamma LUT Descriptor",
  "0021xx41": "Gamma LUT Type",
  "0021xx42": "Gamma LUT Data",
  "0021xx43": "Global Gain",
  "0021xx44": "Global Offset",
  "0021xx45": "DIPP Mode",
  "0021xx46": "Artis System Type",
  "0021xx47": "Artis Table Type",
  "0021xx48": "Artis Table Top Type",
  "0021xx49": "Water Value",
  "0021xx51": "3D Positioner Primary Start Angle",
  "0021xx52": "3D Positioner Secondary Start Angle",
  "0021xx53": "Stand Position",
  "0021xx54": "Rotation Angle",
  "0021xx55": "Image Rotation",
  "0021xx56": "Table Coordinates",
  "0021xx57": "Isocenter Table Position",
  "0021xx58": "Table Object Distance",
  "0021xx59": "Carm Coordinate System",
  "0021xx5A": "Robot Axes",
  "0021xx5B": "Table Coordinate System",
  "0021xx5C": "Patient Coordinate System",
  "0021xx5D": "Angulation",
  "0021xx5E": "Orbital",
  "0021xx61": "Large Volume Overlap",
  "0021xx62": "Reconstruction Preset",
  "0021xx63": "3D Start Angle",
  "0021xx64": "3D Planned Angle",
  "0021xx65": "3D Rotation Plane Alpha",
  "0021xx66": "3D Rotation Plane Beta",
  "0021xx67": "3D First Image Angle",
  "0021xx68": "3D Trigger Angle",
  "0021xx71": "Detector Rotation",
  "0021xx72": "Physical Detector Rotation",
  "0021xx81": "Table Tilt",
  "0021xx82": "Table Rotation",
  "0021xx83": "Table Cradle Tilt",
  "0021xxA0": "Crispy1 Container",
  "0021xxA3": "3D Cardiac Trigger Sequence",
  "0021xxA4": "3D Frame Reference Date Time",
  "0021xxA5": "3D Cardiac Trigger Delay Time",
  "0021xxA6": "3D R-R Interval Time Measure"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SMS-AX  ORIGINAL IMAGE INFO 1.0",
  "0025xx00": "View Native",
  "0025xx01": "Original Series Number",
  "0025xx02": "Original Image Number",
  "0025xx03": "Win Center",
  "0025xx04": "Win Width",
  "0025xx05": "Win Brightness",
  "0025xx06": "Win Contrast",
  "0025xx07": "Original Frame Number",
  "0025xx08": "Original Mask Frame Number",
  "0025xx09": "Opac",
  "0025xx0A": "Original Number of Frames",
  "0025xx0B": "Original Scene Duration",
  "0025xx0C": "Identifier LOID",
  "0025xx0D": "Original Scene VFR Info",
  "0025xx0E": "Original Frame ECG Position",
  "0025xx0F": "Original ECG 1st Frame Offset",
  "0025xx10": "Zoom Flag",
  "0025xx11": "Flexible Pixel Shift",
  "0025xx12": "Number of Mask Frames",
  "0025xx13": "Number of Fill Frames",
  "0025xx14": "Series Number",
  "0025xx15": "Image Number",
  "0025xx16": "Ready Processing Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SMS-AX  QUANT 1.0",
  "0023xx00": "Horizontal Calibration Pixel Size",
  "0023xx01": "Vertical Calibration Pixel Size",
  "0023xx02": "Calibration Object",
  "0023xx03": "Calibration Object Size",
  "0023xx04": "Calibration Method",
  "0023xx05": "Filename",
  "0023xx06": "Frame Number",
  "0023xx07": "Calibration Factor Multiplicity",
  "0023xx08": "Calibration Table Object Distance"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SMS-AX  VIEW 1.0",
  "0019xx00": "Review Mode",
  "0019xx01": "Anatomical Background Percent",
  "0019xx02": "Number of Phases",
  "0019xx03": "Apply Anatomical Background",
  "0019xx04": "Pixel Shift Array",
  "0019xx05": "Brightness",
  "0019xx06": "Contrast",
  "0019xx07": "Enabled Shutters",
  "0019xx08": "Native Edge Enhancement Percent Gain",
  "0019xx09": "Native Edge Enhancement LUT Index",
  "0019xx0A": "Native Edge Enhancement Kernel Size",
  "0019xx0B": "Subtracted Edge Enhancement Percent Gain",
  "0019xx0C": "Subtracted Edge Enhancement LUT Index",
  "0019xx0D": "Subtracted Edge Enhancement Kernel Size",
  "0019xx0E": "Fade Percent",
  "0019xx0F": "Flipped Before Laterality Applied",
  "0019xx10": "Apply Fade",
  "0019xx11": "Reference Images Taken Flag",
  "0019xx12": "Zoom",
  "0019xx13": "Pan X",
  "0019xx14": "Pan Y",
  "0019xx15": "Native Edge Enhancement Adv Percent Gain",
  "0019xx16": "Subtracted Edge Enhancement Adv Percent Gain",
  "0019xx17": "Invert Flag",
  "0019xx1A": "Quant 1K Overlay",
  "0019xx1B": "Original Resolution",
  "0019xx1C": "Auto Window Center",
  "0019xx1D": "Auto Window Width",
  "0019xx1E": "Auto Window Correct Value",
  "0019xx1F": "Sigmoid Window Parameter",
  "0019xx41": "Dispayed Area Top Left Hand Corner",
  "0019xx42": "Dispayed Area Bottom Right Hand Corner"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO 3D FUSION MATRIX",
  "0029xx08": "Object Series Instance UID",
  "0029xx09": "Model Series Instance UID",
  "0029xx10": "Matrix Referenced Series Instance UID"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO ADVANCED PRESENTATION",
  "0029xx00": "Presentation Nam",
  "0029xx01": "Presentation Typ",
  "0029xx02": "Advanced Presentation Sequenc",
  "0029xx03": "Time Point Sequenc",
  "0029xx04": "Base Image Sequenc",
  "0029xx05": "Overlay Image Sequenc",
  "0029xx06": "Registration Instance Sequenc",
  "0029xx07": "Real World Value Mapping Instance Sequenc",
  "0029xx08": "Measurement Sequenc",
  "0029xx09": "Measurement UI",
  "0029xx10": "Segmentation Sequence",
  "0029xx11": "Segmentation UI",
  "0029xx12": "Navigation Sequenc",
  "0029xx13": "Navigation Nam",
  "0029xx14": "Auto Navigation Directio",
  "0029xx15": "Auto Navigation Frame Rat",
  "0029xx16": "Auto Navigation Mod",
  "0029xx17": "Auto Navigation Realtime Spee",
  "0029xx18": "Auto Navigation Strateg",
  "0029xx19": "Auto Navigation Realtime Fla",
  "0029xx20": "Index Navigation Current Inde",
  "0029xx21": "Index Auto Navigation Skipping Degre",
  "0029xx22": "Volume Navigation Minimum Pixel Spacin",
  "0029xx23": "Volume Navigation Scroll Uni",
  "0029xx24": "Volume Navigation Step Siz",
  "0029xx25": "Volume Navigation Jump Siz",
  "0029xx26": "Referenced Registration Numbe",
  "0029xx27": "Real World Value Mapping UI",
  "0029xx28": "Channel Alpha Value",
  "0029xx30": "Measurement Application Name",
  "0029xx31": "Measurement Data Sequenc",
  "0029xx32": "Measurement Typ",
  "0029xx33": "Measurement Frame of Reference UI",
  "0029xx34": "Measurement UID",
  "0029xx35": "Measurement Application Numbe",
  "0029xx36": "Measurement Application Number Prefix Tex",
  "0029xx37": "Measurement Graphic Is Visible Flag",
  "0029xx38": "Referenced Syngo UID",
  "0029xx39": "Clinical Finding UID",
  "0029xx3A": "Measurement Evaluation String Value",
  "0029xx3B": "Measurement Evaluation Integer Value",
  "0029xx3C": "Measurement Evaluation Decimal Value",
  "0029xx3D": "Measurement Line Show Center Flag",
  "0029xx3E": "Measurement Angle Show ArrowTip Flag",
  "0029xx3F": "Camera Home Settings Sequence",
  "0029xx40": "Camera Zoom",
  "0029xx41": "Camera Positio",
  "0029xx42": "Camera Orientatio",
  "0029xx43": "Camera Far Clip Plan",
  "0029xx44": "Camera Near Clip Plan",
  "0029xx45": "Camera Thicknes",
  "0029xx46": "Camera ViewPort Siz",
  "0029xx47": "Camera Aspect Rati",
  "0029xx48": "Camera Projection Typ",
  "0029xx49": "Camera Field of Vie",
  "0029xx4A": "Camera Image Plane Distanc",
  "0029xx4B": "Camera Image Maximum Heigh",
  "0029xx4C": "Camera Image Minimum Heigh",
  "0029xx4D": "Parallel Shift Interval M",
  "0029xx4E": "Parallel Shift BoundingBox Minimu",
  "0029xx4F": "Parallel Shift BoundingBox Maximu",
  "0029xx50": "Renderer Vertex Is Characteristic Flag",
  "0029xx51": "Renderer Thickness Usage Fla",
  "0029xx52": "Renderer Threshol",
  "0029xx53": "Renderer Materia",
  "0029xx54": "Renderer DirectionalLight Colo",
  "0029xx55": "Renderer DirectionalLight Directio",
  "0029xx56": "Renderer DirectionalLight TwoSide Usage Fla",
  "0029xx57": "Renderer PWL TransferFunction Sequenc",
  "0029xx58": "Renderer PWL Vertex Inde",
  "0029xx59": "Renderer PWL Vertex Colo",
  "0029xx5A": "Renderer Is Camera Required Fla",
  "0029xx5B": "Renderer Do Depth Test Flag",
  "0029xx5C": "Renderer Directional Light Usage Fla",
  "0029xx5D": "Renderer Thickness Sequenc",
  "0029xx5E": "Renderer Slice Spacing Sequence",
  "0029xx5F": "Renderer Sampling Distance",
  "0029xx60": "Renderer Initial Sampling Distance",
  "0029xx61": "Segmentation Display Data Sequenc",
  "0029xx62": "Segmentation Display Data UI",
  "0029xx63": "Segmentation Display Parameter Sequenc",
  "0029xx64": "Segmentation Display Parameter Typ",
  "0029xx65": "Segmentation Display Visibilit",
  "0029xx66": "Segmentation Display Colo",
  "0029xx67": "Segmentation Display is Selected Flag",
  "0029xx68": "Segmentation Additional Information Blob",
  "0029xx69": "Hash Code Value",
  "0029xx6A": "Segmentation Version Identifier",
  "0029xx70": "Segmentation Volume Size",
  "0029xx71": "Registration Referenced Frame",
  "0029xx72": "Registration Referenced Registrations",
  "0029xx73": "Registration Creation Algorithm Name",
  "0029xx74": "ECG Graphic Type",
  "0029xx7A": "Segmentation Volume Storage Data Type",
  "0029xx7B": "Segmentation Volume Model Matrix",
  "0029xx80": "Camera Rotation Axis",
  "0029xx81": "Overlay Hidden Display Attributes",
  "0029xx82": "Presentation State Group Identifier",
  "0029xx83": "Temporary Smallest Image Pixel Value",
  "0029xx84": "Camera Rotation Cente",
  "0029xx85": "Camera Rotation Center Usage Fla",
  "0029xx86": "Camera Parallel Epipe",
  "0029xx87": "Camera Max Zoom In Factor",
  "0029xx88": "Camera Min Zoom In Factor",
  "0029xx89": "Temporary Largest Image Pixel Value",
  "0029xx8A": "Camera Rotation Axis Usage Flag",
  "0029xx8B": "Measurement Surface Normal",
  "0029xx8C": "Measurement Ellipsoid Model Matrix",
  "0029xx8D": "Measurement Evaluation DataRole ID",
  "0029xx8E": "Measurement Algorithm Type",
  "0029xx91": "Measurement Evaluation DataRole Sequenc",
  "0029xx92": "Measurement Evaluation DataRole Ite",
  "0029xx93": "Measurement Evaluation Sequenc",
  "0029xx94": "Measurement Evaluation Valu",
  "0029xx95": "Measurement Evaluation I",
  "0029xx96": "Measurement Data Point",
  "0029xx97": "Measurement Data Angle",
  "0029xx98": "Measurement Data Slic",
  "0029xx99": "Measurement Data Slice Thicknes",
  "0029xx9A": "Measurement Referenced Frames Sequenc",
  "0029xx9B": "Measurement Evaluation Longest Distanc",
  "0029xx9C": "Measurement Evaluation Centroi",
  "0029xx9D": "Measurement Data Bounding Box",
  "0029xx9E": "Measurement Text",
  "0029xx9F": "Measurement Diameter",
  "0029xxA0": "Image Rotation Fractiona",
  "0029xxA1": "Preset Name",
  "0029xxA2": "Fusion LUT Sequence",
  "0029xxA3": "Fusion LUT Is Active Flag",
  "0029xxA5": "Syngo UID",
  "0029xxA6": "Presentation Version Identifie",
  "0029xxA7": "Presentation Module Sequenc",
  "0029xxA8": "Presentation Module Typ",
  "0029xxA9": "Presentation State Sequenc",
  "0029xxAA": "LUT Inverted Flag",
  "0029xxAB": "Softcopy VOI LUT Viewing Index",
  "0029xxAC": "Displayed Area Bottom Right Hand Corner Fractional",
  "0029xxAD": "Displayed Area Top Left Hand Corner Fractional",
  "0029xxAE": "Measurement Alpha",
  "0029xxAF": "Measurement Bitmap",
  "0029xxB0": "Current Frame Number",
  "0029xxB1": "Image Text View Name",
  "0029xxB2": "Image Text View Content Sequence",
  "0029xxB3": "Image Text Line Names",
  "0029xxB4": "ImageText Line Values",
  "0029xxB5": "?",
  "0029xxB6": "Measurement Link Evaluation Text Flag",
  "0029xxB7": "Measurement Evaluation Text Position Vector",
  "0029xxB8": "Image Text Alpha Blending Line Value",
  "0029xxC1": "Task Data Sequence",
  "0029xxC2": "Task Data Type",
  "0029xxC3": "Task Data Version",
  "0029xxC4": "Task Data Description",
  "0029xxC5": "Task Data",
  "0029xxC6": "Task Data Size",
  "0029xxC9": "Clip Plane Sequence",
  "0029xxCA": "Clip Plane Center",
  "0029xxCB": "Clip Plane Normal",
  "0029xxCC": "Clip Plane Scale",
  "0029xxCD": "Clip Plane Use Thickness Flag",
  "0029xxCE": "Clip Plane Thickness",
  "0029xxCF": "Image Sequence",
  "0029xxD0": "Clip Plane Enable Clip",
  "0029xxD1": "Clip Plane Handle Ratio",
  "0029xxD2": "Clip Plane Bounding Points",
  "0029xxD3": "Clip Plane Motion Matrix",
  "0029xxD4": "Clip Plane Shift Velocity",
  "0029xxD5": "Clip Plane Enabled Flag",
  "0029xxD6": "Clip Plane Rotate Velocity",
  "0029xxD7": "Clip Plane Show Graphics Flag",
  "0029xxE0": "Crop Box Size",
  "0029xxE1": "Crop Box Enabled Flag",
  "0029xxE2": "Crop Box Absolute Origin",
  "0029xxE3": "Crop Box Show Graphics Flag",
  "0029xxF1": "Curved Camera Coordinates",
  "0029xxF2": "Curved Camera Point of Interest",
  "0029xxF3": "Curved Camera Point of Interest Usage Flag",
  "0029xxF4": "Curved Camera Thickness",
  "0029xxF5": "Curved Camera Extrusion Length",
  "0029xxF6": "Curved Camera Rotation Axis Mode",
  "0029xxF7": "Curved Camera Roll Rotation Axis",
  "0029xxF8": "Curved Camera View Port Height",
  "0029xxF9": "Curved Camera Cut Direction",
  "0029xxFA": "Curved Camera Pan Vector",
  "0029xxFB": "Clinical Finding ID",
  "0029xxFC": "Measurement Is Circle Flag",
  "0029xxFD": "Measurement Application Type ID"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO DATA PADDING",
  "7FDFxxFC": "Pixel Data Leading Padding"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO ENCAPSULATED DOCUMENT DATA",
  "0087xx20": "Study Model",
  "0087xx30": "Report XML Schema",
  "0087xx40": "Report Identifier"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO ENHANCED IDATASET API",
  "0027xx01": "Business Unit Code",
  "0027xx02": "Application Type",
  "0027xx03": "Application Attributes Sequenc"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO EVIDENCE DOCUMENT DATA",
  "0077xx10": "Evidence Document Template Name",
  "0077xx11": "Evidence Document Template Version",
  "0077xx20": "Clinical Finding Data",
  "0077xx21": "Metadata",
  "0077xx30": "Implementation Version",
  "0077xx40": "Predecessor",
  "0077xx50": "Logical ID",
  "0077xx60": "Application Data",
  "0077xx70": "Owner Clinical Task Name",
  "0077xx71": "Owner Task Name",
  "0077xx72": "Owner Supported Templates",
  "0077xx80": "Volume Catalog"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO FRAME SET",
  "0029xx10": "Image Frame Sequence",
  "0029xx12": "Type of Progression",
  "0029xx14": "Representation Level",
  "0029xx16": "Representation Information Sequenc",
  "0029xx18": "Number of Representations",
  "0029xx20": "Representation Pixel Offse"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO FUNCTION ASSIGNMENT",
  "0029xx01": "Data Reference"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO INDEX SERVICE",
  "0009xx20": "Object Insertion Date",
  "0009xxA0": "Sender System Device Name",
  "0009xx40": "Last Access Time",
  "0009xx41": "Delete Protected Status",
  "0009xx42": "Received from Archive Status",
  "0009xx43": "Archive Status",
  "0009xx44": "Location",
  "0009xx45": "Logical Deleted Status",
  "0009xx46": "Insert Time",
  "0009xx47": "Visible Instances on Series Level",
  "0009xx48": "Unarchived Instances",
  "0009xx49": "Visible Instances on Study Level",
  "0009xx31": "Series Object States",
  "0009xx30": "Instance Object States",
  "0009xx50": "Hidden Instance"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO INSTANCE MANIFEST",
  "0009xx00": "Temporary Original Header Sequence",
  "0009xx10": "syngo Index Source AE Title"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO LAYOUT PROTOCOL",
  "0073xx02": "Hanging Protocol Excellence Rank",
  "0073xx04": "Template Data Role ID",
  "0073xx06": "Data Sharing Flag",
  "0073xx08": "Bagging Operations Sequence",
  "0073xx10": "Synchronization Type",
  "0073xx12": "Custom Filter Type",
  "0073xx14": "Custom Sorter Type",
  "0073xx16": "Reference Template Data Role ID",
  "0073xx18": "Model Template Data Role ID",
  "0073xx20": "Selector DT Value",
  "0073xx22": "Selector DA Value",
  "0073xx24": "Selector TM Value",
  "0073xx26": "Selector UI Value",
  "0073xx28": "Referenced Template Data Role",
  "0073xx30": "Custom Property Sequence",
  "0073xx32": "Custom Property Type",
  "0073xx34": "Custom Property Name",
  "0073xx36": "Custom Property Value",
  "0073xx38": "Layout Property Sequence",
  "0073xx40": "Synchronization Sequence",
  "0073xx42": "Presentation Creator Type",
  "0073xx44": "Cine Navigation Type",
  "0073xx48": "Semantic Naming Strategy",
  "0073xx50": "Parameter String",
  "0073xx52": "Sorting Order",
  "0073xx54": "syngo Template Type",
  "0073xx56": "Sorter Type",
  "0073xx58": "Data Display Protocol Version",
  "0073xx5A": "Timepoint Value",
  "0073xx5B": "Sharing Group Sequence",
  "0073xx5C": "Template Selector Operator",
  "0073xx5D": "Sharing Type",
  "0073xx60": "Viewport Definitions Sequenc",
  "0073xx62": "Protocol Type",
  "0073xx64": "Template Selector Sequence",
  "0073xx66": "Default Template",
  "0073xx68": "Is Preferred",
  "0073xx6A": "Timepoint Initial Value Sequence",
  "0073xx6C": "Timepoint Variable",
  "0073xx70": "Display Protocol Name",
  "0073xx72": "Display Protocol Description",
  "0073xx74": "Display Protocol Level",
  "0073xx76": "Display Protocol Creator",
  "0073xx78": "Display Protocol Creation Datetime",
  "0073xx7A": "Referenced Data Protocol",
  "0073xx7C": "Display Protocol Excellence Rank",
  "0073xx7E": "Layout Sequence",
  "0073xx80": "Layout Number",
  "0073xx82": "Layout Description",
  "0073xx84": "Segment Sequence",
  "0073xx86": "Segment Number",
  "0073xx88": "Segment Description",
  "0073xx8A": "Segment Type",
  "0073xx8C": "Tile Horizontal Dimension",
  "0073xx8E": "Tile Vertical Dimension",
  "0073xx90": "Fill Order",
  "0073xx92": "Segment Small Scroll Type",
  "0073xx94": "Segment Small Scroll Amount",
  "0073xx96": "Segment Large Scroll Type",
  "0073xx98": "Segment Large Scroll Amount",
  "0073xx9A": "Segment Overlap Priority",
  "0073xx9C": "Data Role View Sequence",
  "0073xx9E": "Data Role View Number",
  "0073xxA2": "Referenced Data Role",
  "0073xxA4": "Sharing Enabled",
  "0073xxA8": "Referenced Data Role Views",
  "0073xxB0": "Data Protocol Nam",
  "0073xxB2": "Data Protocol Description",
  "0073xxB4": "Data Protocol Level",
  "0073xxB6": "Data Protocol Creator",
  "0073xxB8": "Data Protocol Creation Datetime",
  "0073xxBA": "Data Protocol Excellence Rank",
  "0073xxBC": "Data Protocol Definition Sequence",
  "0073xxBE": "Data Role Sequence",
  "0073xxC0": "Data Role Number",
  "0073xxC2": "Data Role Name",
  "0073xxC6": "Selector Operations Sequence",
  "0073xxC8": "Selector Usage Flag",
  "0073xxCA": "Select by Attribute Presence",
  "0073xxCC": "Select by Category",
  "0073xxCE": "Select by Operator",
  "0073xxD0": "Custom Selector Type",
  "0073xxD2": "Selector Operator",
  "0073xxD4": "Reformatting Require",
  "0073xxD6": "Registration Data Sequence",
  "0073xxD8": "Reference Data Role Number",
  "0073xxDA": "Model Data Sequence",
  "0073xxDC": "Model Data Role Number",
  "0073xxDE": "Fusion Display Sequence",
  "0073xxE0": "Transparency",
  "0073xxE2": "Time Point",
  "0073xxE4": "First Time Point Token",
  "0073xxE6": "Last Time Point Token",
  "0073xxE8": "Intermediate Time Point Token",
  "0073xxEA": "Data Processor Sequence",
  "0073xxEC": "Data Processor Type",
  "0073xxEE": "Template Data Role Sequence",
  "0073xxF0": "View Sequence",
  "0073xxF4": "View Type",
  "0073xxF6": "Custom Bagging Type",
  "0073xxF8": "Referenced Display Segment Number",
  "0073xxFA": "Data Role Type",
  "0073xx46": "Internal Flag",
  "0073xxFC": "Unassigned Flag",
  "0073xxFE": "Initial Display Scroll Position",
  "0073xxFF": "VRT Preset"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO OBJECT GRAPHICS",
  "0071xx00": "Graphic Object Sequence",
  "0071xx01": "Fill Style Version",
  "0071xx02": "Fill Background Color",
  "0071xx03": "Fill Foreground Color",
  "0071xx04": "Fill Mode",
  "0071xx05": "Fill Pattern",
  "0071xx06": "Line Style Version",
  "0071xx07": "Line Background Color",
  "0071xx08": "Line Foreground Color",
  "0071xx09": "Line Type",
  "0071xx10": "Line Thickness",
  "0071xx11": "Line Shadow X Offset",
  "0071xx12": "Line Shadow Y Offset",
  "0071xx13": "Shadow Style",
  "0071xx14": "Shadow Color",
  "0071xx15": "Stipple Pattern",
  "0071xx16": "Line Anti Aliasing",
  "0071xx17": "Line-Z-Blend Flag",
  "0071xx18": "Text Style Version",
  "0071xx19": "Text Color",
  "0071xx20": "Text Horizontal Align",
  "0071xx21": "Text Vertical Align",
  "0071xx22": "Text Shadow X Offset",
  "0071xx23": "Text Shadow Y Offset",
  "0071xx24": "Text Shadow Style",
  "0071xx25": "Text Shadow Color",
  "0071xx26": "Text Log Font",
  "0071xx27": "Text-Z-Blend Flag",
  "0071xx28": "Graphic Bit Mask",
  "0071xx29": "Visiblility Flag",
  "0071xx30": "Graphic Sensitivity",
  "0071xx31": "Graphic Pick Mode Type",
  "0071xx32": "Graphic Layer",
  "0071xx33": "Graphic Object Version",
  "0071xx34": "Graphic Coordinate System",
  "0071xx35": "Graphic Custom Attributes",
  "0071xx36": "Graphic Custom Attributes Key",
  "0071xx37": "Graphic Custom Attributes Value",
  "0071xx38": "Graphic View Name",
  "0071xx39": "Graphic Data",
  "0071xx40": "Graphic Type",
  "0071xx41": "Number of Graphic Points",
  "0071xx42": "Axis Main Tick Length",
  "0071xx43": "Axis Detail Tick Length",
  "0071xx44": "Axis Main Tick Spacing",
  "0071xx45": "Axis Detail Tick Spacing",
  "0071xx46": "Axis Main Tick Count",
  "0071xx47": "Axis Detail Tick Count",
  "0071xx48": "Axis Tick Behavior",
  "0071xx49": "Axis Tick Aligment",
  "0071xx50": "Axis Step",
  "0071xx51": "Axis Step Index",
  "0071xx52": "Axis Text Format",
  "0071xx53": "Axis Show Center Text Flag",
  "0071xx54": "Axis Show Tick Text Flag",
  "0071xx55": "Bitmap X Orientation",
  "0071xx56": "Bitmap Y Orientation",
  "0071xx57": "Graphic Blob",
  "0071xx58": "Graphic Interpolation",
  "0071xx59": "Graphic Angle",
  "0071xx60": "Graphic Size",
  "0071xx61": "Cut Line Side",
  "0071xx62": "Graphic Tip Length",
  "0071xx63": "Cut Line Arrow Length",
  "0071xx64": "Line Gap Length",
  "0071xx65": "Graphic Circle Radius",
  "0071xx66": "Line Distance Move",
  "0071xx67": "Line Marker Length",
  "0071xx68": "Graphic Center",
  "0071xx69": "Range Center Area Top Left",
  "0071xx70": "Range Center Area Bottom Right",
  "0071xx71": "Range Tilt",
  "0071xx72": "Range Minimum Tilt",
  "0071xx73": "Range Maximum Tilt",
  "0071xx74": "Graphic Width",
  "0071xx75": "Range Minimum Width",
  "0071xx76": "Range Maximum Width",
  "0071xx77": "Graphic Height",
  "0071xx78": "Range Feed",
  "0071xx79": "Range Direction",
  "0071xx80": "Range Show Scans",
  "0071xx81": "Range Minimum Scan Distance",
  "0071xx82": "Range Orthogonal Height",
  "0071xx83": "Graphic Position",
  "0071xx84": "Graphic Closed Flag",
  "0071xx85": "Range Line Tip Mode",
  "0071xx86": "Graphic List Count",
  "0071xx87": "Axis Flip Text Flag",
  "0071xx88": "Curve Diagram Type",
  "0071xx89": "Graphic Start Angle",
  "0071xx90": "Graphic End Angle",
  "0071xx91": "Live Wire Smoothness",
  "0071xx92": "Live Wire Spline Flag",
  "0071xx93": "Ellipse Circle Flag",
  "0071xx94": "Graphic Square Flag",
  "0071xx95": "Curve Section Start Index",
  "0071xx96": "Curve Section End Index",
  "0071xx97": "Marker Alpha",
  "0071xx98": "Table Row Count",
  "0071xx99": "Table Column Count",
  "0071xx9A": "Table Row Height",
  "0071xx9B": "Table Column Width",
  "0071xx9C": "Rectangle Selection Segment Offset",
  "0071xx9D": "Graphic Text",
  "0071xxA0": "Axis Tick Spacing Coordinate System",
  "0071xxA1": "Axis Diagram Grid Type",
  "0071xxA2": "Polar Plot Circle Count",
  "0071xxA3": "Polar Plot Lines-per-Circle",
  "0071xxA4": "Polar Plot Compartment Count",
  "0071xxA5": "Polar Plot Radius Weight",
  "0071xxA6": "Circle Segment Outer Radius",
  "0071xxA7": "Circle Segment Clockwise Flag",
  "0071xxA8": "Axis Diagram Auto Resize Flag",
  "0071xxA9": "Axis Diagram Step Start",
  "0071xxB0": "Group Root",
  "0071xxB1": "Group Name",
  "0071xxB2": "Graphic Annotation Sequence",
  "0071xxB3": "Text Minimum Height",
  "0071xxB4": "Text Font Scaling Factor",
  "0071xxB5": "Text Maximum Extensions",
  "0071xxB6": "Text Segment Size",
  "0071xxB7": "Graphic Object Reference Label"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO PRINT SERVICE",
  "0029xx10": "Sheet Numbe"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO REGISTRATION",
  "0071xx20": "Registered Image Sequence",
  "0071xx21": "Registration Is Validated Flag"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO SOP CLASS PACKING",
  "0031xx10": "SOP Class Packing Sequence",
  "0031xx20": "Packing Version",
  "0031xx21": "Packing Originator",
  "0031xx30": "Original SOP Class UID",
  "0031xx31": "Original Study Instance UID",
  "0031xx32": "Original Series Instance UID",
  "0031xx33": "Original SOP Instance UID",
  "0031xx34": "Original Transfer Syntax UID",
  "0031xx40": "Attributes to Set to Zero Length",
  "0031xx41": "Attributes to Remove",
  "0031xx50": "Original Rows",
  "0031xx51": "Original Columns",
  "0031xx58": "Original Image Type",
  "0031xx60": "Original Modality",
  "0031xx70": "Sequence of Original StreamCchunks",
  "0031xx71": "Start Tag of a Stream Chunk",
  "0031xx72": "End Tag of a Stream Chunk",
  "0031xx73": "Stream Chunk is a Payload",
  "0031xx80": "Stream Chunk"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO TIME POINT SERVICE",
  "0029xx01": "Time Point I",
  "0029xx02": "Time Point Information",
  "0029xx50": "Studies in Time Point Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO ULTRA-SOUND TOYON DATA STREAMING",
  "7FD1xx01": "Padding",
  "7FD1xx09": "Volume Version ID",
  "7FD1xx10": "Volume Payload",
  "7FD1xx11": "After Payload"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO VOLUME",
  "0029xx12": "Slices",
  "0029xx14": "Volume Histogram",
  "0029xx18": "Volume Level",
  "0029xx30": "Voxel Spacing",
  "0029xx32": "Volume Position (Patient)",
  "0029xx37": "Volume Orientation (Patient)",
  "0029xx40": "Resampling Flag",
  "0029xx42": "Normalization Flag",
  "0029xx44": "SubVolume Sequence",
  "0029xx46": "Histogram Number Of Bins",
  "0029xx47": "Volume Histogram Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS SYNGO WORKFLOW",
  "0031xx10": "Internal Patient UID",
  "0031xx11": "Patients Death Indicator",
  "0031xx12": "Patients Death Date",
  "0031xx13": "Patients Death Time",
  "0031xx14": "VIP Indicator",
  "0031xx15": "Emergency Flag",
  "0031xx20": "Internal Visit UID",
  "0031xx25": "Internal ISR UID",
  "0031xx32": "Control State",
  "0031xx34": "Local Flag",
  "0031xx36": "Referenced Studies",
  "0031xx40": "Workflow ID",
  "0031xx41": "Workflow Description",
  "0031xx42": "Workflow Control State",
  "0031xx43": "Workflow Ad Hoc Flag",
  "0031xx44": "Hybrid Flag",
  "0031xx50": "Workitem ID",
  "0031xx51": "Workitem Name",
  "0031xx52": "Workitem Type",
  "0031xx53": "Workitem Roles",
  "0031xx54": "Workitem Description",
  "0031xx55": "Workitem Control State",
  "0031xx56": "Claiming User",
  "0031xx57": "Claiming Host",
  "0031xx58": "Taskflow ID",
  "0031xx59": "Taskflow Name",
  "0031xx5A": "Failed Flag",
  "0031xx5B": "Scheduled Time",
  "0031xx5C": "Workitem Ad Hoc Flag",
  "0031xx5D": "Patient Update Pending Flag",
  "0031xx5E": "Patient Mixup Flag",
  "0031xx60": "Client ID",
  "0031xx61": "Template ID",
  "0031xx81": "Institution Name",
  "0031xx82": "Institution Address",
  "0031xx83": "Institution Code Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS Selma",
  "0019xx06": "?",
  "0019xx07": "?",
  "0019xx08": "?",
  "0019xx26": "?",
  "0019xx29": "?",
  "0019xx30": "?",
  "0019xx31": "?",
  "0019xx32": "?",
  "0019xx33": "?",
  "0019xx34": "?",
  "0019xx35": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS Ultrasound S2000",
  "0021xx00": "Nipple Position",
  "0021xx01": "ABVS Clip Derived From Volume"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS Ultrasound SC2000",
  "0019xx2D": "B-mode Tint Index",
  "0019xx72": "Doppler Tint Index",
  "0019xx88": "M-mode Tint Index",
  "0019xx89": "?",
  "0119xx00": "Acoustic Meta Information Version",
  "0119xx01": "Common Acoustic Meta Information",
  "0119xx02": "Multi Stream Sequence",
  "0119xx03": "Acoustic Data Sequence",
  "0119xx04": "Per Transaction Acoustic Control Informatio",
  "0119xx05": "Acoustic Data Offset",
  "0119xx06": "Acoustic Data Length",
  "0119xx07": "Footer Offset",
  "0119xx08": "Footer Length",
  "0119xx09": "Acoustic Stream Number",
  "0119xx10": "Acoustic Stream Type",
  "0119xx11": "Stage Timer Time",
  "0119xx12": "Stop Watch Time",
  "0119xx13": "Volume Rate",
  "0119xx21": "?",
  "0129xx00": "MPR View Sequence",
  "0129xx02": "Bookmark UID",
  "0129xx03": "Plane Origin Vector",
  "0129xx04": "Row Vector",
  "0129xx05": "Column Vector",
  "0129xx06": "Visualization Sequence",
  "0129xx08": "Visualization Informatio",
  "0129xx09": "Application State Sequence",
  "0129xx10": "Application State Informatio",
  "0129xx11": "Referenced Bookmark Sequence",
  "0129xx12": "Referenced Bookmark UID",
  "0129xx20": "Cine Parameters Sequence",
  "0129xx21": "Cine Parameters Schem",
  "0129xx22": "Values of Cine Parameters",
  "0129xx29": "",
  "0129xx30": "Raw Data Object Type",
  "0139xx01": "Physio Capture ROI",
  "0149xx01": "Vector of BROI Points",
  "0149xx02": "Start/End Timestamps of Strip Stream",
  "0149xx03": "Timestamps of Visible R-waves",
  "7FD1xx01": "Acoustic Image and Footer Data",
  "7FD1xx09": "Volume Version ID",
  "7FD1xx10": "Volume Payload",
  "7FD1xx11": "After Payload"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS WH SR 1.0",
  "0071xx01": "?",
  "0071xx02": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIEMENS_FLCOMPACT_VA01A_PROC",
  "0017xx0A": "?",
  "0017xx0B": "?",
  "0017xx0C": "?",
  "0017xx0D": "?",
  "0017xx0E": "?",
  "0017xx0F": "?",
  "0017xx10": "?",
  "0017xx11": "?",
  "0017xx14": "?",
  "0017xx16": "?",
  "0017xx17": "?",
  "0017xx18": "?",
  "0017xx19": "?",
  "0017xx1A": "?",
  "0017xx1B": "?",
  "0017xx1C": "?",
  "0017xx1E": "?",
  "0017xx1F": "?",
  "0017xx20": "?",
  "0017xx21": "?",
  "0017xx22": "?",
  "0017xx23": "?",
  "0017xx24": "?",
  "0017xx25": "?",
  "0017xx26": "?",
  "0017xx27": "?",
  "0017xx28": "?",
  "0017xx29": "?",
  "0017xx48": "?",
  "0017xx49": "?",
  "0017xx4D": "?",
  "0017xx4E": "?",
  "0017xx4F": "?",
  "0017xx50": "?",
  "0017xx51": "?",
  "0017xx52": "?",
  "0017xx53": "?",
  "0017xx54": "?",
  "0017xx55": "?",
  "0017xx5C": "?",
  "0017xx64": "?",
  "0017xx66": "?",
  "0017xx67": "?",
  "0017xx68": "?",
  "0017xx85": "?",
  "0017xx86": "?",
  "0017xx87": "?",
  "0017xx88": "?",
  "0017xx89": "?",
  "0017xx8A": "?",
  "0017xx8B": "?",
  "0017xx8C": "?",
  "0017xx8D": "?",
  "0017xx8E": "?",
  "0017xx8F": "?",
  "0017xxA0": "?",
  "0017xxA1": "?",
  "0017xxA2": "?",
  "0017xxA3": "?",
  "0017xxA4": "?",
  "0017xxA5": "?",
  "0017xxA6": "?",
  "0017xxAA": "?",
  "0017xxB0": "?",
  "0017xxC0": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SIENET",
  "0009xx01": "SIENET Command Field",
  "0009xx14": "Receiver PLA",
  "0009xx16": "Transfer Priority",
  "0009xx29": "Actual User",
  "0009xx70": "?",
  "0009xx71": "?",
  "0009xx72": "?",
  "0009xx73": "?",
  "0009xx74": "?",
  "0009xx75": "?",
  "0091xx20": "RIS Patient Name",
  "0093xx02": "?",
  "0095xx01": "Examination Folder ID",
  "0095xx04": "Folder Reported Status",
  "0095xx05": "Folder Reporting Radiologist",
  "0095xx07": "SIENET ISA PLA",
  "0095xx0C": "?",
  "0097xx03": "?",
  "0097xx05": "?",
  "0099xx02": "Data Object Attributes",
  "0099xx05": "?",
  "00A5xx05": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SMIL_PB79",
  "0079xx00": "Analgesia",
  "0079xx01": "Anesthesia",
  "0079xx02": "Bed Motion",
  "0079xx03": "Food Access",
  "0079xx04": "Histogram Version",
  "0079xx06": "Injection Decay Correction",
  "0079xx07": "Isotope",
  "0079xx08": "Other Drugs",
  "0079xx09": "RebinningType",
  "0079xx0A": "Rebinning Version",
  "0079xx0B": "Reconstruction",
  "0079xx0C": "ReconstructionVersion",
  "0079xx0D": "Injected Compounds",
  "0079xx0E": "Study Model",
  "0079xx0F": "Subject Genus",
  "0079xx10": "Subject Phenotype",
  "0079xx11": "Version",
  "0079xx12": "Water Access",
  "0079xx13": "X Offset",
  "0079xx14": "Y Offset",
  "0079xx15": "Zoom",
  "0079xx17": "Subject Orientation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SMIO_PB7B",
  "007Bxx00": "Units"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SMIO_PB7D",
  "007Dxx01": "Geometry",
  "007Dxx02": "Spacing",
  "007Dxx03": "Origin"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "SPI",
  "0029xx60": "Compression Algorithm"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens Ultrasound Miscellaneous",
  "0019xx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens: Thorax/Multix FD Image Stamp",
  "0023xx00": "?",
  "0023xx01": "?",
  "0023xx02": "?",
  "0023xx03": "?",
  "0023xx04": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens: Thorax/Multix FD Lab Settings",
  "0019xx00": "?",
  "0019xx01": "?",
  "0019xx02": "Total Dose Area Product uGy*cm*cm",
  "0019xx03": "?",
  "0019xx04": "?",
  "0019xx05": "?",
  "0019xx06": "Table Object Distance",
  "0019xx07": "Table Detector Distance",
  "0019xx08": "Ortho Step Distance",
  "0021xx08": "Auto Window Flag",
  "0021xx09": "Auto Window Center",
  "0021xx0A": "Auto Window Width",
  "0021xx0B": "Filter ID",
  "0021xx14": "Anatomic Correct View",
  "0021xx15": "Auto Window Shift",
  "0021xx16": "Auto Window Expansion",
  "0021xx17": "System Type",
  "0021xx30": "Anatomic Sort Number",
  "0021xx31": "AcquisitionSortNumber"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens: Thorax/Multix FD Post Processing",
  "0021xx00": "?",
  "0021xx01": "?",
  "0021xx02": "?",
  "0021xx03": "?",
  "0021xx04": "?",
  "0021xx05": "?",
  "0021xx06": "?",
  "0021xx07": "?",
  "0021xx08": "Auto Window Flag",
  "0021xx09": "Auto Window Center",
  "0021xx0A": "Auto Window Width",
  "0021xx0B": "Filter ID",
  "0021xx0C": "?",
  "0021xx0D": "?",
  "0021xx0E": "Dose Control Value",
  "0021xx0F": "?",
  "0021xx10": "?",
  "0021xx11": "?",
  "0021xx12": "?",
  "0021xx13": "?",
  "0021xx14": "Anatomic Correct View",
  "0021xx15": "Auto Window Shift",
  "0021xx16": "Auto Window Expansion",
  "0021xx17": "System Type",
  "0021xx18": "Detector Type",
  "0021xx30": "Anatomic Sort Number",
  "0021xx31": "Acquisition Sort Number"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens: Thorax/Multix FD Raw Image Settings",
  "0025xx00": "Raw Image Amplification",
  "0025xx01": "Gamma LUT",
  "0025xx02": "?",
  "0025xx03": "?",
  "0025xx04": "?",
  "0025xx05": "?",
  "0025xx06": "?",
  "0025xx07": "?",
  "0025xx08": "?",
  "0025xx09": "?",
  "0025xx0A": "?",
  "0025xx0B": "?",
  "0025xx0C": "Harmonization Kernel",
  "0025xx0D": "Harmonization Gain",
  "0025xx0E": "Edge Enhancement Kernel",
  "0025xx0F": "Edge Enhancement Gain",
  "0025xx10": "Internal Value",
  "0025xx11": "?",
  "0025xx12": "?",
  "0025xx13": "?",
  "0025xx14": "?",
  "0025xx15": "?",
  "0025xx16": "?",
  "0025xx17": "?",
  "0025xx18": "Auto Gain",
  "0025xx19": "Ortho Subsampling",
  "0025xx1A": "Image Crop Upper Left",
  "0025xx1B": "Image Crop Upper Right",
  "0025xx1C": "Image Crop Lower Left",
  "0025xx1D": "Image Crop Lower Right",
  "0025xx30": "Manual Cropping",
  "0025xx31": "Gamma LUT Parameter 1",
  "0025xx32": "Gamma LUT Parameter 2",
  "0025xx33": "Gamma LUT Parameter 3",
  "0025xx34": "Gamma LUT Parameter 4",
  "0025xx35": "Gamma LUT Name",
  "0025xx36": "?",
  "0025xx37": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Siemens: Thorax/Multix FD Version",
  "0017xx00": "?",
  "0017xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "syngoDynamics",
  "0021xxAE": "?",
  "0021xxB0": "?",
  "0021xxB1": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "syngoDynamics_Reporting",
  "0021xxAD": "Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "1.2.840.113708.794.1.1.2.0",
  "0087xx10": "Media Type",
  "0087xx20": "Media Location",
  "0087xx30": "Storage File ID",
  "0087xx40": "Study or Image Size in MB",
  "0087xx50": "Estimated Retrieve Time"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI Annotations_01",
  "3101xx10": "Annotation Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI Annotations_02",
  "3101xx20": "Annotation Sequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI ImageContextExt_01",
  "3107xxA0": "Window Function",
  "3107xxB0": "Window Slope"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI ImageContext_01",
  "3109xx10": "Window Invert",
  "3109xx20": "Window Center",
  "3109xx30": "Window Width",
  "3109xx40": "Pixel Aspect Ratio Swap",
  "3109xx50": "Enable Averaging",
  "3109xx60": "Quality",
  "3109xx70": "Viewport Annotation Level",
  "3109xx80": "Show Image Annotation",
  "3109xx90": "Show Image Overlay"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI ImageTransform_01",
  "3107xx10": "Transformation Matrix",
  "3107xx20": "Center Offset",
  "3107xx30": "Magnification",
  "3107xx40": "Magnification Type",
  "3107xx50": "Displayed Area",
  "3107xx60": "Calibration Factor"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI Sequence AnnotElements_01",
  "3105xx10": "Annotation Element Position",
  "3105xx20": "Annotation Element Text"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI Sequence Annotations_01",
  "3103xx10": "Annotation Sequence",
  "3103xx20": "Annotation UID",
  "3103xx30": "Annotation Color",
  "3103xx50": "Annotation Line Style",
  "3103xx60": "Annotation Elements",
  "3103xx70": "Annotation Label",
  "3103xx80": "Annotation Creator",
  "3103xx90": "Annotation Modifiers",
  "3103xxA0": "Annotation Creation Date",
  "3103xxB0": "Annotation Creation Time",
  "3103xxC0": "Annotation Modification Dates",
  "3103xxD0": "Annotation Mofification Times",
  "3103xxE0": "Annotation Frame Number"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI Sequence Annotations_02",
  "3103xx10": "Annotation Sequence",
  "3103xx20": "Annotation UID",
  "3103xx30": "Annotation Color",
  "3103xx50": "Annotation Line Style",
  "3103xx60": "Annotation Elements",
  "3103xx70": "Annotation Label",
  "3103xx80": "Annotation Creator",
  "3103xx90": "Annotation Modifiers",
  "3103xxA0": "Annotation Creation Date",
  "3103xxB0": "Annotation Creation Time",
  "3103xxC0": "Annotation Modification Dates",
  "3103xxD0": "Annotation Modification Times",
  "3103xxE0": "Annotation Frame Number"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "AMI StudyExtensions_01",
  "3111xx01": "Last Released Annot Label"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "APEX_PRIVATE",
  "0027xx11": "Bed Position"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/Centricity Radiology Web/Version 1.0",
  "4109xx01": "Mammography Laterality",
  "4109xx02": "Mammography View Name",
  "4109xx03": "Mammography View Modifier"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/Centricity Radiology Web/Version 2.0",
  "4111xx01": "Secondary Spine Label",
  "4111xx02": "Additional tags for Presentation State"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/Print/Version 5.1",
  "4101xx01": "Mask State",
  "4101xx02": "Annotations",
  "4101xx03": "Font",
  "4101xx04": "Font Size",
  "4101xx05": "Font Relative Size",
  "4101xx06": "Overlay",
  "4101xx07": "Pixel Rep",
  "4101xx08": "Annotation Level",
  "4101xx09": "Show Caliper"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/RadStore/Version 1.0",
  "3113xx01": "?",
  "3113xx02": "Internal Id of Study",
  "3113xx03": "Internal Id of Series",
  "3113xx04": "Internal Id of Instance",
  "3113xx11": "?",
  "3113xx12": "Instance State",
  "3113xx13": "Date Last Modified",
  "3113xx14": "Date Last Accessed",
  "3113xx15": "?",
  "3113xx16": "Instance Size in Bytes",
  "3113xx17": "Library Id",
  "3113xx18": "Pathnames",
  "3113xx19": "Driver Path",
  "3113xx1A": "Source",
  "3113xx1B": "Destination",
  "3113xx1C": "Medium Id",
  "3113xx1D": "Archive Id",
  "3113xx1E": "Instance Origin",
  "3113xx21": "Instance Version",
  "3113xx22": "?",
  "3113xx23": "Instance File Location",
  "3113xx31": "?",
  "3113xx32": "?",
  "3113xx33": "?",
  "3113xx35": "Image Medium Location",
  "3113xx36": "Image Medium Label",
  "3113xx37": "Image Medium State",
  "3113xx38": "Series Medium Location",
  "3113xx39": "Series Medium Label",
  "3113xx3A": "Series Medium State",
  "3113xx3B": "Study Medium Location",
  "3113xx3C": "Study Medium Label",
  "3113xx3D": "Study Medium State",
  "3113xx52": "Study State",
  "3113xx53": "Series State",
  "3113xx55": "Image State Text",
  "3113xx56": "Series State Text",
  "3113xx57": "Study State Text",
  "3113xx60": "Expiration",
  "3113xx69": "Deleted Tags"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/RadWorks/Version 5.0",
  "3109xx01": "Worklist Filename",
  "3109xx02": "NEW/SEEN Status",
  "3109xx03": "Delete Lock",
  "3109xx04": "?",
  "3109xx05": "?",
  "3109xx06": "?",
  "3109xx07": "?",
  "3109xx08": "Receive Origin",
  "3109xx09": "Folder",
  "3109xx0A": "Receive Date",
  "3109xx0B": "Receive Time",
  "3109xx0C": "Prior",
  "3109xx0D": "STAT Study",
  "3109xx0E": "Is Key Image Or Study",
  "3109xx10": "Local Study",
  "3109xx11": "Result Message",
  "3109xx12": "Current User",
  "3109xx13": "System Date",
  "3109xx14": "System Time",
  "3109xx19": "Worklist Name",
  "3109xx20": "Worklist UID",
  "3109xx21": "Hostname",
  "3109xx22": "DICOM AE Title",
  "3109xx23": "DICOM Port Number",
  "3109xx24": "Destination Name",
  "3109xx25": "Origin Name",
  "3109xx26": "Modality Study Instance UID",
  "3109xx27": "Exam Routing",
  "3109xx28": "Notification Comments",
  "3109xx29": "Transaction Comments",
  "3109xx2A": "Send Flag",
  "3109xx2B": "Print Flag",
  "3109xx2C": "Archive Flag",
  "3109xx30": "Requesting Facility Name",
  "3109xx31": "Requesting Procedure Name",
  "3109xx32": "Requesting Procedure Code",
  "3109xx33": "Request Storage Commitment",
  "3109xx34": "Requested Compression",
  "3109xx35": "Study Sequence",
  "3109xx37": "Replaced Study UID",
  "3109xx38": "Teaching ACR Code",
  "3109xx39": "Teaching Special Interest Code",
  "3109xx40": "Number of Study Related Images",
  "3109xx41": "Study Locked",
  "3109xx42": "Workstation Name",
  "3109xx43": "Archive Status",
  "3109xxEE": "Internal List UID",
  "3109xxEF": "Action (Add,Remove,Change)"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/RadWorks/Version 6.0",
  "4103xx01": "Non-existent tags",
  "4103xx02": "Non-existent objects",
  "4105xx01": "Annotation Type",
  "4105xx02": "Annotation Value",
  "4105xx03": "Cutline Image UID",
  "4105xx04": "Cutline Set UID",
  "4105xx05": "Annotation Color (RGB)",
  "4105xx06": "Annotation Line Style",
  "4105xx07": "Annotation Label",
  "4105xx08": "Annotation Creator",
  "4105xx09": "Annotation Creation Date",
  "4105xx0A": "Annotation Creation Time",
  "4105xx0B": "Annotation Modification Sequence",
  "4105xx0C": "Annotation Modifier",
  "4105xx0D": "Annotation Modification Date",
  "4105xx0E": "Annotation Modification Time",
  "4105xx10": "?",
  "4105xx11": "?",
  "4107xx01": "Requested Palette Color LUT"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/RadWorks/Version 6.0/Summary",
  "3109xx01": "Status",
  "3109xx11": "Receive Origin Site Name",
  "3109xx12": "Receive Origin Description",
  "3109xx15": "Receive Date",
  "3109xx16": "Receive Time"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Applicare/Workflow/Version 1.0",
  "3113xx01": "Order Control",
  "3113xx10": "Scheduled Action Item Code Value",
  "3113xx11": "Scheduled Action Item Coding Scheme Designator",
  "3113xx12": "Scheduled Action Item Code Meaning",
  "3113xx15": "Requested Action Item Code Value",
  "3113xx16": "Requested Action Item Coding Scheme Designator",
  "3113xx17": "Requested Action Item Code Meaning",
  "3113xx20": "Performed Action Item Code Value",
  "3113xx21": "Performed Action Item Coding Scheme Designator",
  "3113xx22": "Performed Action Item Code Meaning",
  "3113xx25": "Performed Procedure Code Value",
  "3113xx26": "Performed Procedure Coding Scheme Designator",
  "3113xx27": "Performed Procedure Code Meaning",
  "3113xx30": "Referenced Image SOP Class UID",
  "3113xx31": "Referenced Image SOP Instance UID",
  "3113xxE0": "Locked By Hostname",
  "3113xxE1": "Locked By User",
  "3113xxE2": "KfEdit Lock User"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DLX_ANNOT_01",
  "70XXxx04": "TextAnnotation",
  "70XXxx05": "Box",
  "70XXxx07": "ArrowEnd"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DLX_EXAMS_01",
  "0015xx01": "Stenosis Calibration Ratio",
  "0015xx02": "Stenosis Magnification",
  "0015xx03": "Cardiac Calibration Ratio"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DLX_LKUP_01",
  "60XXxx01": "Gray Palette Color Lookup Table Descriptor",
  "60XXxx02": "Gray Palette Color Lookup Table Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DLX_PATNT_01",
  "0011xx01": "Patient DOB"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DLX_SERIE_01",
  "0019xx01": "Angle Value L Arm",
  "0019xx02": "Angle Value P Arm",
  "0019xx03": "Angle Value C Arm",
  "0019xx04": "Angle Label L Arm",
  "0019xx05": "Angle Label P Arm",
  "0019xx06": "Angle Label C Arm",
  "0019xx07": "Procedure Name",
  "0019xx08": "Exam Name",
  "0019xx09": "Patient Size",
  "0019xx0A": "Record View",
  "0019xx10": "Injector Delay",
  "0019xx11": "Auto Inject",
  "0019xx14": "Acquisition Mode",
  "0019xx15": "Camera Rotation Enabled",
  "0019xx16": "Reverse Sweep",
  "0019xx17": "User Spatial Filter Strength",
  "0019xx18": "User Zoom Factor",
  "0019xx19": "X Zoom Center",
  "0019xx1A": "Y Zoom Center",
  "0019xx1B": "Focus",
  "0019xx1C": "Dose",
  "0019xx1D": "Side Mark",
  "0019xx1E": "Percentage Landscape",
  "0019xx1F": "Exposure Duration",
  "0019xx20": "Ip Address",
  "0019xx21": "Table position Z (vertica",
  "0019xx22": "Table position X (longitudina",
  "0019xx23": "Table position Y (latera",
  "0019xx24": "Lambda cm Pincushion Distortion",
  "0019xx25": "LV Regression Slope Coefficient",
  "0019xx26": "LV Regression Intercept Coefficient",
  "0019xx27": "Image chain FWHM psf mm min",
  "0019xx28": "Image chain FWHM psf mm max"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "DL_INTERNAL_USE",
  "0015xx8F": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE ??? From Adantage Review CS",
  "0019xx30": "CR EDR Mode",
  "0019xx40": "CR Latitude",
  "0019xx50": "CR Group Number",
  "0019xx70": "CR Image Serial Number",
  "0019xx80": "CR Bar Code Number",
  "0019xx90": "CR Film Output Exposures"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE Generic Data",
  "6001xx50": "?",
  "6001xx51": "?",
  "6001xx52": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE Informatics Data",
  "3003xx00": "?",
  "3003xx01": "?",
  "3003xx02": "?",
  "3003xx03": "?",
  "3003xx04": "?",
  "3003xx05": "?",
  "3003xx06": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE LUT Asymmetry Parameter",
  "0045xx67": "LUT Assymetry"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEHC_CT_ADVAPP_001",
  "0053xx20": "Shuttle Flag",
  "0053xx40": "Iterative Recon Annotation",
  "0053xx41": "Iterative Recon Mode",
  "0053xx42": "Iterative Recon Configuration",
  "0053xx43": "Iterative Recon Level",
  "0053xx60": "Recon Flip Rotate Anno",
  "0053xx61": "High Resolution Flag",
  "0053xx62": "Respiratory Flag",
  "0053xx64": "Shutter Mode",
  "0053xx65": "Shutter Mode Percent",
  "0053xx66": "Image Browser Annotation",
  "0053xx67": "Overlapped Recon Flag",
  "0053xx68": "Row Number Anotation Flag",
  "0053xx6A": "ODM Flag",
  "0053xx6B": "ODM Reduction Percent",
  "0053xx7D": "SubOptimal IQ String",
  "0053xx9D": "MARs Annotation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEIIS",
  "004Bxx13": "?",
  "004Bxx15": "?",
  "0009xx10": "GE Private Image Thumbnail Sequence",
  "0009xx12": "?",
  "0029xx10": "Shift Count",
  "0029xx12": "Offset",
  "0029xx14": "Actual Frame Number",
  "0905xx30": "Assigning Authority For Patient ID",
  "0907xx10": "Original Study Instance UID",
  "0907xx20": "Original Series Instance UID",
  "0907xx30": "Original SOP Instance UID",
  "7FD1xx10": "Compression Type",
  "7FD1xx20": "Multiframe Offsets",
  "7FD1xx30": "Multi-Resolution Levels",
  "7FD1xx40": "Subband Rows",
  "7FD1xx50": "Subband Columns",
  "7FD1xx60": "Subband Bytecounts"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEIIS PACS",
  "0903xx10": "Reject Image Flag",
  "0903xx11": "Significant Flag",
  "0903xx12": "Confidential Flag",
  "0903xx20": "?",
  "0907xx21": "Prefetch Algorithm",
  "0907xx22": "Limit Recent Studies",
  "0907xx23": "Limit Oldest Studies",
  "0907xx24": "Limit Recent Months",
  "0907xx31": "Exclude Study UIDs"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEIIS_IW",
  "0075xx02": "?",
  "0075xx05": "?",
  "0075xx10": "?",
  "0075xx11": "?",
  "0075xx16": "?",
  "0075xx17": "?",
  "0075xx19": "?",
  "0075xx1B": "?",
  "0075xx1A": "?",
  "0075xx60": "?",
  "0075xx61": "?",
  "0075xx62": "?",
  "0075xx63": "?",
  "0075xx69": "?",
  "0075xx70": "?",
  "0075xx71": "?",
  "0075xx72": "?",
  "0075xx73": "?",
  "0075xx74": "?",
  "0075xx75": "?",
  "0075xx76": "?",
  "0075xx77": "?",
  "0075xx79": "?",
  "0075xx7A": "?",
  "0075xx7B": "?",
  "0075xx7C": "?",
  "0075xx7D": "?",
  "0075xx7E": "?",
  "0075xx7F": "?",
  "0075xx81": "?",
  "0075xx82": "?",
  "0075xx83": "?",
  "0075xx84": "?",
  "0075xx85": "?",
  "0075xx86": "?",
  "0075xx87": "?",
  "0075xx88": "?",
  "0075xx89": "?",
  "0075xx8A": "?",
  "0075xx8F": "?",
  "0075xx90": "?",
  "0075xx91": "?",
  "0075xx93": "?",
  "0075xx94": "?",
  "0075xx95": "?",
  "0075xxB5": "?",
  "0075xxB6": "?",
  "0075xxC0": "?",
  "0075xxC1": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEIIS_RA1000",
  "0071xx01": "?",
  "0071xx20": "?",
  "0071xx21": "?",
  "0071xx22": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS-IT/Centricity RA600/7.0",
  "4113xx10": "Number of images in study"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_0039",
  "0039xx95": "SR Application Name"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_3DSTATE_001",
  "0047xxE9": "?",
  "0047xxEA": "?",
  "0047xxEB": "?",
  "0047xxEC": "?",
  "0047xxED": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_3D_INTVL_01",
  "0023xx01": "X-Ray Marker Sequence",
  "0023xx02": "Marker ID",
  "0023xx03": "Marker Type",
  "0023xx04": "Marker Size",
  "0023xx05": "Marker Color CIELab Value",
  "0023xx06": "Marker Label",
  "0023xx07": "Marker Visible State",
  "0023xx08": "Marker Description",
  "0023xx10": "Marker Points Sequence",
  "0023xx11": "Marker Point ID",
  "0023xx12": "Marker Point Position",
  "0023xx13": "Marker Point Size",
  "0023xx14": "Marker Point Color CIELab Value",
  "0023xx16": "Marker Point Visible State",
  "0023xx17": "Marker Point Order",
  "0023xx18": "Volume Manual Registration",
  "0023xx20": "Volumes Threshold",
  "0023xx25": "Cut Plane Activation Flag",
  "0023xx26": "Cut Plane Position Value",
  "0023xx27": "Cut Plane Normal Value",
  "0023xx28": "Volume Scaling Factor",
  "0023xx29": "ROI to Table Top Distance",
  "0023xx30": "DRR Threshold",
  "0023xx31": "Volume Table Position",
  "0023xx32": "Rendering Mode",
  "0023xx33": "3D Object Opacity",
  "0023xx34": "Invert Image",
  "0023xx35": "Enhance Full",
  "0023xx36": "Zoom",
  "0023xx37": "Roam",
  "0023xx38": "Window Level",
  "0023xx39": "Window Width",
  "0023xx40": "BMC Setting",
  "0023xx41": "Back View Setting",
  "0023xx42": "Sub Volume Visibility",
  "0023xx43": "3D Landmarks Visibility",
  "0023xx44": "Ablation Point Visibility"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACQU_01",
  "0009xx24": "?",
  "0009xx25": "?",
  "0009xx3E": "?",
  "0009xx3F": "?",
  "0009xx42": "?",
  "0009xx43": "?",
  "0009xxF8": "?",
  "0009xxFB": "?",
  "0019xx01": "?",
  "0019xx02": "Number Of Cells In Detector",
  "0019xx03": "Cell Number At Theta",
  "0019xx04": "Cell Spacing",
  "0019xx05": "?",
  "0019xx06": "?",
  "0019xx0E": "?",
  "0019xx0F": "Horizontal Frame Of Reference",
  "0019xx11": "Series Contrast",
  "0019xx12": "Last Pseq",
  "0019xx13": "Start Number For Baseline",
  "0019xx14": "End Number For Baseline",
  "0019xx15": "Start Number For Enhanced Scans",
  "0019xx16": "End Number For Enhanced Scans",
  "0019xx17": "Series Plane",
  "0019xx18": "First Scan RAS",
  "0019xx19": "First Scan Location",
  "0019xx1A": "Last Scan RAS",
  "0019xx1B": "Last Scan Location",
  "0019xx1E": "Display Field Of View",
  "0019xx20": "?",
  "0019xx22": "?",
  "0019xx23": "Table Speed [mm/rotation]",
  "0019xx24": "Mid Scan Time [sec]",
  "0019xx25": "Mid Scan Flag",
  "0019xx26": "Tube Azimuth [degrees]",
  "0019xx27": "Rotation Speed (Gantry Period)",
  "0019xx2A": "Xray On Position",
  "0019xx2B": "Xray Off Position",
  "0019xx2C": "Number of Triggers",
  "0019xx2D": "?",
  "0019xx2E": "Angle Of First View",
  "0019xx2F": "Trigger Frequency",
  "0019xx39": "Scan FOV Type",
  "0019xx3A": "?",
  "0019xx3B": "?",
  "0019xx3C": "?",
  "0019xx3E": "?",
  "0019xx3F": "?",
  "0019xx40": "Stat Recon Flag",
  "0019xx41": "Compute Type",
  "0019xx42": "Segment Number",
  "0019xx43": "Total Segments Required",
  "0019xx44": "Interscan Delay",
  "0019xx47": "View Compression Factor",
  "0019xx48": "?",
  "0019xx49": "?",
  "0019xx4A": "Total Number Of Ref Channels",
  "0019xx4B": "Data Size For Scan Data",
  "0019xx52": "Recon Post Processing Flag",
  "0019xx54": "?",
  "0019xx57": "CT Water Number",
  "0019xx58": "CT Bone Number",
  "0019xx5A": "Acquisition Duration",
  "0019xx5D": "?",
  "0019xx5E": "Number Of Channels 1 To 512",
  "0019xx5F": "Increment Between Channels",
  "0019xx60": "Starting View",
  "0019xx61": "Number Of Views",
  "0019xx62": "Increment Between Views",
  "0019xx6A": "Dependant On Number Of Views Processed",
  "0019xx6B": "Field Of View In Detector Cells",
  "0019xx70": "Value Of Back Projection Button",
  "0019xx71": "Set If Fatq Estimates Were Used",
  "0019xx72": "Z Channel Avg Over Views",
  "0019xx73": "Avg Of Left Ref Channels Over Views",
  "0019xx74": "Max Left Channel Over Views",
  "0019xx75": "Avg Of Right Ref Channels Over Views",
  "0019xx76": "Max Right Channel Over Views",
  "0019xx7D": "Second Echo",
  "0019xx7E": "Number Of Echos",
  "0019xx7F": "Table Delta",
  "0019xx81": "Contiguous",
  "0019xx82": "?",
  "0019xx83": "?",
  "0019xx84": "Peak SAR",
  "0019xx85": "Monitor SAR",
  "0019xx86": "?",
  "0019xx87": "Cardiac Repetition Time",
  "0019xx88": "Images Per Cardiac Cycle",
  "0019xx8A": "Actual Receive Gain Analog",
  "0019xx8B": "Actual Receive Gain Digital",
  "0019xx8D": "Delay After Trigger",
  "0019xx8F": "Swap Phase Frequency",
  "0019xx90": "Pause Interval",
  "0019xx91": "Pause Time",
  "0019xx92": "Slice Offset On Frequency Axis",
  "0019xx93": "Auto Prescan Center Frequency",
  "0019xx94": "Auto Prescan Transmit Gain",
  "0019xx95": "Auto Prescan Analog Receiver Gain",
  "0019xx96": "Auto Prescan Digital Receiver Gain",
  "0019xx97": "Bitmap Defining CVs",
  "0019xx98": "Center Frequency Method",
  "0019xx99": "?",
  "0019xx9B": "Pulse Sequence Mode",
  "0019xx9C": "Pulse Sequence Name",
  "0019xx9D": "Pulse Sequence Date",
  "0019xx9E": "Internal Pulse Sequence Name",
  "0019xx9F": "Transmitting Coil",
  "0019xxA0": "Surface Coil Type",
  "0019xxA1": "Extremity Coil Flag",
  "0019xxA2": "Raw Data Run Number",
  "0019xxA3": "Calibrated Field Strength",
  "0019xxA4": "SAT Fat Water Bone",
  "0019xxA5": "Receive Bandwidth",
  "0019xxA7": "User Data 0",
  "0019xxA8": "User Data 1",
  "0019xxA9": "User Data 2",
  "0019xxAA": "User Data 3",
  "0019xxAB": "User Data 4",
  "0019xxAC": "User Data 5",
  "0019xxAD": "User Data 6",
  "0019xxAE": "User Data 7",
  "0019xxAF": "User Data 8",
  "0019xxB0": "User Data 9",
  "0019xxB1": "User Data 10",
  "0019xxB2": "User Data 11",
  "0019xxB3": "User Data 12",
  "0019xxB4": "User Data 13",
  "0019xxB5": "User Data 14",
  "0019xxB6": "User Data 15",
  "0019xxB7": "User Data 16",
  "0019xxB8": "User Data 17",
  "0019xxB9": "User Data 18",
  "0019xxBA": "User Data 19",
  "0019xxBB": "User Data 20",
  "0019xxBC": "User Data 21",
  "0019xxBD": "User Data 22",
  "0019xxBE": "Projection Angle",
  "0019xxC0": "Saturation Planes",
  "0019xxC1": "Surface Coil Intensity Correction Flag",
  "0019xxC2": "SAT Location R",
  "0019xxC3": "SAT Location L",
  "0019xxC4": "SAT Location A",
  "0019xxC5": "SAT Location P",
  "0019xxC6": "SAT Location H",
  "0019xxC7": "SAT Location F",
  "0019xxC8": "SAT Thickness R L",
  "0019xxC9": "SAT Thickness A P",
  "0019xxCA": "SAT Thickness H F",
  "0019xxCB": "PhaseContrast Flow Axis",
  "0019xxCC": "Velocity Encoding",
  "0019xxCD": "Thickness Disclaimer",
  "0019xxCE": "Prescan Type",
  "0019xxCF": "Prescan Status",
  "0019xxD0": "Raw Data Type",
  "0019xxD2": "Projection Algorithm",
  "0019xxD3": "Projection Algorithm Name",
  "0019xxD4": "?",
  "0019xxD5": "Fractional Echo",
  "0019xxD6": "Prep Pulse",
  "0019xxD7": "Cardiac Phases",
  "0019xxD8": "Variable Echo Flag",
  "0019xxD9": "Concatenated Sat or DTI Diffusion Direction",
  "0019xxDA": "Reference Channel Used",
  "0019xxDB": "Back Projector Coefficient",
  "0019xxDC": "Primary Speed Correction Used",
  "0019xxDD": "Overrange Correction Used",
  "0019xxDE": "Dynamic Z Alpha Value",
  "0019xxDF": "User Data 23 or DTI Diffusion Direction",
  "0019xxE0": "User Data 24 or DTI Diffusion Direction",
  "0019xxE1": "?",
  "0019xxE2": "Velocity Encode Scale",
  "0019xxE3": "?",
  "0019xxE4": "?",
  "0019xxE5": "?",
  "0019xxE6": "?",
  "0019xxE8": "?",
  "0019xxE9": "?",
  "0019xxEB": "?",
  "0019xxEC": "?",
  "0019xxF0": "?",
  "0019xxF1": "?",
  "0019xxF2": "Fast Phases",
  "0019xxF3": "?",
  "0019xxF4": "?",
  "0019xxF9": "Transmit Gain"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_1.0 BLOCK1",
  "0023xx00": "CR Exposure Menu Code",
  "0023xx10": "CR Exposure Menu String",
  "0023xx20": "CR EDR Mode",
  "0023xx30": "CR Latitude",
  "0023xx40": "CR Group Number",
  "0023xx50": "CR Image Serial Number",
  "0023xx60": "CR Bar Code Number",
  "0023xx70": "CR Film Output Exposure",
  "0023xx80": "CR Film Format",
  "0023xx90": "CR S Shift String"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_1.0 BLOCK2",
  "0023xx00": "CR S Shift",
  "0023xx10": "CR C Shift",
  "0023xx20": "CR GT",
  "0023xx30": "CR GA",
  "0023xx40": "CR GC",
  "0023xx50": "CR GS",
  "0023xx60": "CR RT",
  "0023xx70": "CR RE",
  "0023xx80": "CR RN",
  "0023xx90": "CR DRT"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_1.0 BLOCK3",
  "0023xx00": "CR DRE",
  "0023xx10": "CR DRN",
  "0023xx20": "CR ORE",
  "0023xx30": "CR ORN",
  "0023xx40": "CR ORD",
  "0023xx50": "CR Cassette Size",
  "0023xx60": "CR Machine ID",
  "0023xx70": "CR Machine Type",
  "0023xx80": "CR Technician Code",
  "0023xx90": "CR Energy Subtraction Parameters"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_2.0 BLOCK1",
  "0023xx00": "CR Exposure Menu Code",
  "0023xx10": "CR Exposure Menu String",
  "0023xx20": "CR EDR Mode",
  "0023xx30": "CR Latitude",
  "0023xx40": "CR Group Number",
  "0023xx50": "CR Image Serial Number",
  "0023xx60": "CR Bar Code Number",
  "0023xx70": "CR Film Output Exposure",
  "0023xx80": "CR Film Format",
  "0023xx90": "CR S Shift String"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_2.0 BLOCK2",
  "0023xx00": "CR S Shift",
  "0023xx10": "CR C Shift",
  "0023xx20": "CR GT",
  "0023xx30": "CR GA",
  "0023xx40": "CR GC",
  "0023xx50": "CR GS",
  "0023xx60": "CR RT",
  "0023xx70": "CR RE",
  "0023xx80": "CR RN",
  "0023xx90": "CR DRT"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ACRQA_2.0 BLOCK3",
  "0023xx00": "CR DRE",
  "0023xx10": "CR DRN",
  "0023xx20": "CR ORE",
  "0023xx30": "CR ORN",
  "0023xx40": "CR ORD",
  "0023xx50": "CR Cassette Size",
  "0023xx60": "CR Machine ID",
  "0023xx70": "CR Machine Type",
  "0023xx80": "CR Technician Code",
  "0023xx90": "CR Energy Subtraction Parameters",
  "0023xxF0": "CR Distribution Code",
  "0023xxFF": "CR Shutters Applied"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ADWSoft_3D1",
  "0047xx01": "Reconstruction Parameters Sequence",
  "0047xx50": "Volume Voxel Count",
  "0047xx51": "Volume Segment Count",
  "0047xx53": "Volume Slice Size",
  "0047xx54": "Volume Slice Count",
  "0047xx55": "Volume Threshold Value",
  "0047xx57": "Volume Voxel Ratio",
  "0047xx58": "Volume Voxel Size",
  "0047xx59": "Volume Z Position Size",
  "0047xx60": "Volume Base Line",
  "0047xx61": "Volume Center Point",
  "0047xx63": "Volume Skew Base",
  "0047xx64": "Volume Registration Transform Rotation Matrix",
  "0047xx65": "Volume Registration Transform Translation Vector",
  "0047xx70": "KVP List",
  "0047xx71": "XRay Tube Current List",
  "0047xx72": "Exposure List",
  "0047xx80": "Acquisition DLX Identifier",
  "0047xx85": "Acquisition DLX 2D Series Sequence",
  "0047xx89": "Contrast Agent Volume List",
  "0047xx8A": "Number Of Injections",
  "0047xx8B": "Frame Count",
  "0047xx91": "XA 3D Reconstruction Algorithm Name",
  "0047xx92": "XA 3D Reconstruction Algorithm Version",
  "0047xx93": "DLX Calibration Date",
  "0047xx94": "DLX Calibration Time",
  "0047xx95": "DLX Calibration Status",
  "0047xx96": "Used Frames",
  "0047xx98": "Transform Count",
  "0047xx99": "Transform Sequence",
  "0047xx9A": "Transform Rotation Matrix",
  "0047xx9B": "Transform Translation Vector",
  "0047xx9C": "Transform Label",
  "0047xxB0": "Wireframe List",
  "0047xxB1": "Wireframe Count",
  "0047xxB2": "Location System",
  "0047xxB5": "Wireframe Name",
  "0047xxB6": "Wireframe Group Name",
  "0047xxB7": "Wireframe Color",
  "0047xxB8": "Wireframe Attributes",
  "0047xxB9": "Wireframe Point Count",
  "0047xxBA": "Wireframe Timestamp",
  "0047xxBB": "Wireframe Point List",
  "0047xxBC": "Wireframe Points Coordinates",
  "0047xxC0": "Volume Upper Left High Corner RAS",
  "0047xxC1": "Volume Slice To RAS Rotation Matrix",
  "0047xxC2": "Volume Upper Left High Corner TLOC",
  "0047xxD1": "Volume Segment List",
  "0047xxD2": "Volume Gradient List",
  "0047xxD3": "Volume Density List",
  "0047xxD4": "Volume Z Position List",
  "0047xxD5": "Volume Original Index List"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ADWSoft_DPO",
  "0039xx80": "Private Entity Number",
  "0039xx85": "Private Entity Date",
  "0039xx90": "Private Entity Time",
  "0039xx95": "Private Entity Launch Command",
  "0039xxAA": "Private Entity Type"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_ADWSoft_DPO1",
  "0039xx95": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_AWSOFT_CD1",
  "0039xx65": "Reference to Study UID",
  "0039xx70": "Reference to Series UID",
  "0039xx75": "Reference to Original Instance Number",
  "0039xx80": "DPO Number",
  "0039xx85": "DPO Date",
  "0039xx90": "DPO Time",
  "0039xx95": "DPO Invocation String",
  "0039xxAA": "DPO Type",
  "0039xxFF": "DPO Data"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_AWSoft_SB1",
  "0039xx50": "Reference to Study UID",
  "0039xx51": "Reference to Series UID",
  "0039xx52": "Reference to Original Instance Number",
  "0039xx95": "Private Entity Launch Command"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_CTHD_01",
  "0033xx02": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_CT_CARDIAC_001",
  "0049xx01": "CT Cardiac Sequence",
  "0049xx02": "Heart Rate At Confirm",
  "0049xx03": "Avg Heart Rate Prior To Confirm",
  "0049xx04": "Min Heart Rate Prior To Confirm",
  "0049xx05": "Max Heart Rate Prior To Confirm",
  "0049xx06": "Std Dev Heart Rate Prior To Confirm",
  "0049xx07": "Num Heart Rate Samples Prior To Confirm",
  "0049xx08": "Auto Heart Rate Detect Predict",
  "0049xx09": "System Optimized Heart Rate",
  "0049xx0A": "Ekg Monitor Type",
  "0049xx0B": "Num Recon Sectors",
  "0049xx0C": "Rpeak Time Stamps",
  "0049xx16": "Ekg Gating Type",
  "0049xx1B": "Ekg Wave Time Off First Data Point",
  "0049xx22": "Temporal Alg",
  "0049xx23": "Phase Location",
  "0049xx24": "Pre Blended Cycle 1",
  "0049xx25": "Pre Blended Cycle 2",
  "0049xx26": "Compression Alg"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_CT_HINO_01",
  "004Bxx01": "Beam Thickess",
  "004Bxx02": "R Time",
  "004Bxx03": "HBC Number"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_CT_VES_01",
  "0051xx01": "CTVESequence"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DL_FRAME_01",
  "0025xx02": "Frame ID",
  "0025xx03": "Distance Source to Detector",
  "0025xx04": "Distance Source to Patient",
  "0025xx05": "Distance Source to Skin",
  "0025xx06": "Positioner Primary Angle",
  "0025xx07": "Positioner Secondary Angle",
  "0025xx08": "Beam Orientation",
  "0025xx09": "L Arm Angle",
  "0025xx0A": "Frame Sequence",
  "0025xx10": "Pivot Angle",
  "0025xx1A": "Arc Angle",
  "0025xx1B": "Table Vertical Position",
  "0025xx1C": "Table Longitudinal Position",
  "0025xx1D": "Table Lateral Position",
  "0025xx1E": "Beam Cover Area",
  "0025xx1F": "kVP Actual",
  "0025xx20": "mAS Actual",
  "0025xx21": "PW Actual",
  "0025xx22": "Kvp Commanded",
  "0025xx23": "Mas Commanded",
  "0025xx24": "Pw Commanded",
  "0025xx25": "Grid",
  "0025xx26": "Sensor Feedback",
  "0025xx27": "Target Entrance Dose",
  "0025xx28": "Cnr Commanded",
  "0025xx29": "Contrast Commanded",
  "0025xx2A": "EPT Actual",
  "0025xx2B": "Spectral Filter Znb",
  "0025xx2C": "Spectral Filter Weight",
  "0025xx2D": "Spectral Filter Density",
  "0025xx2E": "Spectral Filter Thickness",
  "0025xx2F": "Spectral Filter Status",
  "0025xx30": "FOV Dimension",
  "0025xx33": "FOV Origin",
  "0025xx34": "Collimator Left Vertical Edge",
  "0025xx35": "Collimator Right Vertical Edge",
  "0025xx36": "Collimator Up Horizontal Edge",
  "0025xx37": "Collimator Low Horizontal Edge",
  "0025xx38": "Vertices Polygonal Collimator",
  "0025xx39": "Contour Filter Distance",
  "0025xx3A": "Contour Filter Angle",
  "0025xx3B": "Table Rotation Status",
  "0025xx3C": "Internal Label Frame"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DL_IMG_01",
  "0019xx0B": "FOV Dimension Double",
  "0019xx2B": "Distance to table top",
  "0019xx30": "Image File Name",
  "0019xx31": "Default Spatial Filter Family",
  "0019xx32": "Default Spatial Filter Strength",
  "0019xx33": "Min Saturation Dose",
  "0019xx34": "Detector Gain",
  "0019xx35": "Patient Dose Limit",
  "0019xx36": "Preproc Image Rate Max",
  "0019xx37": "Sensor Roi Shape",
  "0019xx38": "Sensor Roi x Position",
  "0019xx39": "Sensor Roi y Position",
  "0019xx3A": "Sensor Roi x Size",
  "0019xx3B": "Sensor Roi y Size",
  "0019xx3D": "Noise Sensitivity",
  "0019xx3E": "Sharp Sensitivity",
  "0019xx3F": "Contrast Sensitivity",
  "0019xx40": "Lag Sensitivity",
  "0019xx41": "Tube",
  "0019xx42": "Detector Size Rows",
  "0019xx43": "Detector Size Columns",
  "0019xx44": "Min Object Size",
  "0019xx45": "Max Object Size",
  "0019xx46": "Max Object Speed",
  "0019xx47": "Object Back Motion",
  "0019xx48": "Exposure Trajectory Family",
  "0019xx49": "Window Time Duration",
  "0019xx4A": "Positioner Angle Display Mode",
  "0019xx4B": "Detector Origin",
  "0019xx4C": "?",
  "0019xx4E": "Default Brightness and Contrast",
  "0019xx4F": "User Brightness and Contrast",
  "0019xx50": "Source Series Number",
  "0019xx51": "Source Image Number",
  "0019xx52": "Source Frame Number",
  "0019xx53": "Source Series Item Id",
  "0019xx54": "Source Image Item Id",
  "0019xx55": "Source Frame Item Id",
  "0019xx60": "Number of Points Before Acquisition",
  "0019xx61": "Curve Data Before Acquisition",
  "0019xx62": "Number of Points Trigger",
  "0019xx63": "Curve Data Trigger",
  "0019xx64": "ECG Synchronization",
  "0019xx65": "ECG Delay Mode",
  "0019xx66": "ECG Delay Vector",
  "0019xx67": "?",
  "0019xx68": "?",
  "0019xx69": "?",
  "0019xx7A": "?",
  "0019xx7B": "?",
  "0019xx7C": "?",
  "0019xx80": "Image Dose",
  "0019xx81": "Calibration Frame",
  "0019xx82": "Calibration Object",
  "0019xx83": "Calibration Object Size mm",
  "0019xx84": "Calibration Factor",
  "0019xx85": "Calibration Date",
  "0019xx86": "Calibration Time",
  "0019xx87": "Calibration Accuracy",
  "0019xx88": "Calibration Extended",
  "0019xx89": "Calibration Image Original",
  "0019xx8A": "Calibration Frame Original",
  "0019xx8B": "Calibration nb points uif",
  "0019xx8C": "Calibration Points Row",
  "0019xx8D": "Calibration Points Column",
  "0019xx8E": "Calibration Magnification Ratio",
  "0019xx8F": "Calibration Software Version",
  "0019xx90": "Extended Calibration Software Version",
  "0019xx91": "Calibration Return Code",
  "0019xx92": "Detector Rotation Angle",
  "0019xx93": "Spatial Change",
  "0019xx94": "Inconsistent Flag",
  "0019xx95": "Horizontal and Vertical Image Flip",
  "0019xx96": "Internal Label Image",
  "0019xx97": "Angle 1 increment",
  "0019xx98": "Angle 2 increment",
  "0019xx99": "Angle 3 increment",
  "0019xx9A": "Sensor Feedback",
  "0019xx9B": "Grid",
  "0019xx9C": "Default Mask Pixel Shift",
  "0019xx9D": "Applicable Review Mode",
  "0019xx9E": "Log LUT Control Points",
  "0019xx9F": "Exp LUT SUB Control Points",
  "0019xxA0": "ABD Value",
  "0019xxA1": "Subtraction Window Center",
  "0019xxA2": "Subtraction Window Width",
  "0019xxA3": "Image Rotation",
  "0019xxA4": "Auto Injection Enabled",
  "0019xxA5": "Injection Phase",
  "0019xxA6": "Injection Delay",
  "0019xxA7": "Reference Injection Frame Number",
  "0019xxA8": "Injection Duration",
  "0019xxA9": "EPT",
  "0019xxAA": "Can Downscan 512",
  "0019xxAB": "Current Spatial Filter Strength",
  "0019xxAC": "Brightness Sensitivity",
  "0019xxAD": "Exp LUT NOSUB Control Points",
  "0019xxAF": "?",
  "0019xxB0": "?",
  "0019xxB1": "Acquisition Mode Description",
  "0019xxB2": "Acquisition Mode Description Label",
  "0019xxB3": "?",
  "0019xxB8": "?",
  "0019xxBA": "Acquisition Region",
  "0019xxBB": "Acquisition SUB Mode",
  "0019xxBC": "Table Cradle Angle",
  "0019xxBD": "Table Rotation Status Vector",
  "0019xxBE": "Source to Image Distance per Frame Vector",
  "0019xxC2": "?",
  "0019xxC3": "Table Rotation Angle Increment",
  "0019xxC4": "?",
  "0019xxC7": "Patient Position per Image",
  "0019xxD7": "Table X Position to Iso\u2010center Increment",
  "0019xxD8": "Table Y Position to Iso\u2010center Increment",
  "0019xxD9": "Table Z Position to Iso\u2010center Increment",
  "0019xxDA": "Table Head Tilt Angle Increment",
  "0019xxDC": "?",
  "0019xxDE": "Acquisition Plane",
  "0019xxDD": "?",
  "0019xxE0": "?",
  "0019xxE9": "Source to Detector Distance per Frame Vector",
  "0019xxEA": "Table Rotation Angle",
  "0019xxEB": "Table X Position to Iso\u2010center",
  "0019xxEC": "Table Y Position to Iso\u2010center",
  "0019xxED": "Table Z Position to Iso\u2010center",
  "0019xxEE": "Table Head Tilt Angle",
  "0019xxEF": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DL_PATNT_01",
  "0011xx80": "Patient Instance Uid",
  "0011xx81": "Last Study Number",
  "0011xx82": "Patient Repaired",
  "0011xx83": "Lock Demographics"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DL_SERIES_01",
  "0015xx85": "Series File Name",
  "0015xx87": "Number of Images",
  "0015xx8C": "Sent Flag",
  "0015xx8D": "Item Locked",
  "0019xx4C": "Internal Label",
  "0019xx4D": "Browser Hide"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DL_STUDY_01",
  "0015xx80": "Study Dose",
  "0015xx81": "Study Total Dap",
  "0015xx82": "Fluoro Dose Area Product",
  "0015xx83": "Study Fluoro Time",
  "0015xx84": "Cine Dose Area Product",
  "0015xx85": "Study Record Time",
  "0015xx86": "Last XA Number",
  "0015xx88": "Def Operator Name",
  "0015xx89": "Def Performing Physician Name",
  "0015xx8A": "Def Patient Orientation",
  "0015xx8B": "Last Sc Number",
  "0015xx8E": "Common Series Instance UID",
  "0015xx8F": "Study Number",
  "0015xx92": "?",
  "0015xx93": "?",
  "0015xx94": "?",
  "0015xx95": "?",
  "0015xx96": "?",
  "0015xx97": "?",
  "0015xx98": "?",
  "0015xx99": "?",
  "0015xx9A": "?",
  "0015xx9B": "?",
  "0015xx9C": "?",
  "0015xx9D": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_DRS_1",
  "0037xx10": "ReferringDepartment",
  "0037xx20": "ScreenNumber",
  "0037xx40": "LeftOrientation",
  "0037xx42": "RightOrientation",
  "0037xx50": "Inversion",
  "0037xx60": "DSA"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_FALCON_03",
  "0045xx55": "A_Coefficients used in Multiresolution Algorithm",
  "0045xx62": "User Window Center",
  "0045xx63": "User Window Width",
  "0045xx65": "Requested Detector Entrance Dose",
  "0045xx67": "VOI LUT Assymmetry Parameter Beta",
  "0045xx69": "Collimator Rotation",
  "0045xx72": "Collimator Width",
  "0045xx73": "Collimator Height"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_FUNCTOOL_01",
  "0051xx01": "Group Name",
  "0051xx02": "Function Name",
  "0051xx03": "Bias",
  "0051xx04": "Scale",
  "0051xx05": "Parameter Count",
  "0051xx06": "Parameters",
  "0051xx07": "Version",
  "0051xx08": "Color Ramp Index",
  "0051xx09": "Window Width",
  "0051xx0A": "Window Level",
  "0051xx0B": "B-Value",
  "0051xx0C": "Wizard State Data Siz",
  "0051xx0D": "Wizard State",
  "0051xx0E": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_GDXE_ATHENAV2_INTERNAL_USE",
  "7FDFxx10": "Pixel Data References",
  "7FDFxx11": "Pixel Data References (temporary)",
  "7FDFxx20": "Auto Push Tag",
  "7FDFxx25": "PPS Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_GDXE_FALCON_04",
  "0011xx03": "Processed Series UID",
  "0011xx04": "Acquisition Type",
  "0011xx05": "Acquisition UID",
  "0011xx06": "Image Dose",
  "0011xx07": "Study Dose",
  "0011xx08": "Study DAP",
  "0011xx09": "Non-Digital Exposures",
  "0011xx10": "Total Exposures",
  "0011xx11": "ROI",
  "0011xx12": "Patient Size String",
  "0011xx13": "SPS UID",
  "0011xx14": "?",
  "0011xx15": "Detector ARC Gain",
  "0011xx16": "Processing Debug Info",
  "0011xx17": "Override Mode",
  "0011xx19": "Film Speed Selection",
  "0011xx27": "?",
  "0011xx28": "?",
  "0011xx29": "?",
  "0011xx30": "?",
  "0011xx31": "Detected Field of View",
  "0011xx32": "Adjusted Field of View",
  "0011xx33": "Detector Exposure Index",
  "0011xx34": "Compensated Detector Exposure",
  "0011xx35": "Uncompensated Detector Exposure",
  "0011xx36": "Median Anatomy Count Value",
  "0011xx37": "DEI Lower & Upper Limit Values",
  "0011xx38": "Shift Vector for Pasting",
  "0011xx39": "Image Number in Pasting",
  "0011xx40": "Pasting Overlap",
  "0011xx41": "Sub-image Collimator Vertices",
  "0011xx42": "View IP",
  "0011xx43": "Keystone Coordinates",
  "0011xx44": "Receptor Type",
  "0011xx46": "?",
  "0011xx47": "?",
  "0011xx59": "?",
  "0011xx60": "?",
  "0011xx6D": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_GENIE_1",
  "0009xx01": "?",
  "0009xx10": "Study Name",
  "0009xx11": "Study Flags",
  "0009xx12": "Study Type",
  "0009xx1E": "Dataset UID",
  "0009xx20": "Series Object Name",
  "0009xx21": "Series Flags",
  "0009xx22": "User Orientation",
  "0009xx23": "Initiation Type",
  "0009xx24": "Initiation Delay",
  "0009xx25": "Initiation Count Rate",
  "0009xx26": "Number Energy Sets",
  "0009xx27": "Number Detectors",
  "0009xx28": "Number RR Windows",
  "0009xx29": "Number MG Time Slots",
  "0009xx2A": "Number View Sets",
  "0009xx2B": "Trigger History UID",
  "0009xx2C": "Series Comments",
  "0009xx2D": "Track Beat Average",
  "0009xx2E": "Distance Prescribed",
  "0009xx2F": "Table Direction",
  "0009xx30": "?",
  "0009xx33": "Rotational Continuous Speed",
  "0009xx34": "Gantry Motion Type (Retired)",
  "0009xx35": "Gantry Locus Type",
  "0009xx37": "Starting Heart Rate",
  "0009xx38": "RR Window Width",
  "0009xx39": "RR Window Offset",
  "0009xx3A": "Percent Cycle Imaged",
  "0009xx40": "Patient Object Name",
  "0009xx41": "Patient Flags",
  "0009xx42": "Patient Creation Date",
  "0009xx43": "Patient Creation Time",
  "0009xx44": "Num Views Acquired (Retired)",
  "0009xx45": "?",
  "0009xx46": "?",
  "0011xx0A": "Series Type",
  "0011xx0B": "Effective Series Duration",
  "0011xx0C": "Num Beats",
  "0011xx0D": "Radio Nuclide Name",
  "0011xx10": "Dataset Object Name",
  "0011xx11": "Dataset Modified",
  "0011xx12": "Dataset Name",
  "0011xx13": "Dataset Type",
  "0011xx14": "Completion Time",
  "0011xx15": "Detector Number",
  "0011xx16": "Energy Number",
  "0011xx17": "RR Interval Window Number",
  "0011xx18": "MG Bin Number",
  "0011xx19": "Radius Of Rotation",
  "0011xx1A": "Detector Count Zone",
  "0011xx1B": "Num Energy Windows",
  "0011xx1C": "Energy Offset",
  "0011xx1D": "Energy Range",
  "0011xx1E": "Energy Width (Retired)",
  "0011xx1F": "Image Orientation",
  "0011xx21": "Acq Zoom (Retired)",
  "0011xx22": "Acq Pan (Retired)",
  "0011xx23": "Use FOV Mask",
  "0011xx24": "FOV Mask Y Cutoff Angle",
  "0011xx25": "FOV Mask Cutoff Angle",
  "0011xx26": "Table Orientation",
  "0011xx27": "ROI Top Left",
  "0011xx28": "ROI Bottom Right",
  "0011xx29": "Uniformity Mean",
  "0011xx2A": "Phase Duration (Retired)",
  "0011xx2C": "View X Adjustment",
  "0011xx2D": "View Y Adjustment",
  "0011xx2E": "Pixel Overflow Flag",
  "0011xx2F": "Overflow Level",
  "0011xx30": "Picture Object Name",
  "0011xx31": "Acquisition Parent UID",
  "0011xx32": "Processing Parent UID",
  "0011xx33": "Energy Correct Name",
  "0011xx34": "Spatial Correct Name",
  "0011xx35": "Tuning Calib Name",
  "0011xx36": "Uniformity Correct Name",
  "0011xx37": "Acquisition Specific Correct Name",
  "0011xx38": "Byte Order",
  "0011xx39": "Compression Type",
  "0011xx3A": "Picture Format",
  "0011xx3B": "Pixel Scale",
  "0011xx3C": "Pixel Offset",
  "0011xx3D": "Energy Peak (Retired)",
  "0011xx3E": "FOV Shape",
  "0011xx3F": "Dataset Flags",
  "0011xx40": "Viewing Object Name",
  "0011xx41": "Orientation Angle",
  "0011xx42": "Rotation Angle",
  "0011xx43": "Window Inverse Flag",
  "0011xx44": "Threshold Center",
  "0011xx45": "Threshold Width",
  "0011xx46": "Interpolation Type",
  "0011xx50": "Where Object Name",
  "0011xx55": "Period",
  "0011xx56": "ElapsedTime",
  "0011xx57": "FOV",
  "0011xx61": "Image Size",
  "0011xx62": "Linear FOV",
  "0011xx63": "Spatial Offset",
  "0011xx64": "Spatial Orientation",
  "0011xx65": "Reference Dataset UID",
  "0011xx66": "Starcam Reference Dataset",
  "0011xx67": "Reference Frame Number",
  "0011xx68": "Cursor Length",
  "0011xx69": "Number of Cursors",
  "0011xx6A": "Cursor Coordinates",
  "0011xx6B": "Recon Options Flag",
  "0011xx6C": "Motion Threshold",
  "0011xx6D": "Motion Curve UID",
  "0011xx6E": "Recon Type",
  "0011xx6F": "Pre Filter Type",
  "0011xx71": "Back Proj Filter Type",
  "0011xx72": "Recon Arc",
  "0011xx73": "Recon Pan AP Offset",
  "0011xx74": "Recon Pan LR Offset",
  "0011xx75": "Recon Area",
  "0011xx76": "Start View",
  "0011xx77": "Attenuation Type",
  "0011xx78": "Dua lEnergy Processing",
  "0011xx79": "Pre Filter Param",
  "0011xx7A": "Pre Filter Param 2",
  "0011xx7B": "Back Proj Filter Param",
  "0011xx7C": "Back Proj Filter Param 2",
  "0011xx7D": "Attenuation Coef",
  "0011xx7E": "Ref Slice Width",
  "0011xx7F": "Ref Trans Pixel Volume",
  "0011xx81": "Attenuation Threshold",
  "0011xx82": "Interpolation Distance",
  "0011xx83": "Interpolation Center X",
  "0011xx84": "Interpolation Center Y",
  "0011xx85": "Quant Filter Flag",
  "0011xx86": "Head Conversion",
  "0011xx87": "Slice Width Pixels",
  "0011xx88": "Rfmtr Trans Ref",
  "0011xx89": "Rfmtr Trans Ref mm",
  "0011xx8A": "Two Line Trans Ref",
  "0011xx8B": "Three-D Zero",
  "0011xx8C": "Three-D Zero Length",
  "0011xx8D": "Three-D Zero In",
  "0013xx10": "Digital FOV",
  "0013xx11": "Source Translator",
  "0013xx12": "RAL Flags",
  "0013xx13": "eNTEGRA Frame Sequence",
  "0013xx14": "Original Image Number",
  "0013xx15": "Fscalar",
  "0013xx16": "AutoTrack Peak",
  "0013xx17": "AutoTrack Width",
  "0013xx18": "Transmission Scan Time",
  "0013xx19": "Transmission Mask Width",
  "0013xx1A": "Copper Attenuator Thickness",
  "0013xx1B": "Det Ang Separation",
  "0013xx1C": "Axial Acceptance Angle",
  "0013xx1D": "Theta Acceptance Value",
  "0013xx1E": "Tomo View Offset",
  "0013xx20": "Accepted Beats Time",
  "0013xx21": "Threshold",
  "0013xx22": "Linear Depth",
  "0013xx23": "Unif Date Time",
  "0013xx24": "Series Accepted Beats",
  "0013xx25": "Series Rejected Beats",
  "0013xx26": "Study Comments",
  "0015xx10": "Frame Termination Condition",
  "0015xx11": "Frame Termination Value",
  "0015xx12": "Num ECT Phases",
  "0015xx13": "Num WB Scans",
  "0015xx14": "ECT Phase Num",
  "0015xx15": "WB Scan Num",
  "0015xx16": "Comb Head Number",
  "0015xx17": "Preceding Beat",
  "0019xx5F": "?",
  "0033xx07": "Original SOP Instance UID",
  "0033xx08": "eNTEGRA Data Object Type",
  "0033xx10": "Modified",
  "0033xx11": "Name",
  "0033xx16": "Protocol Data UID",
  "0033xx17": "Date",
  "0033xx18": "Time",
  "0033xx19": "Protocol Data Flags",
  "0033xx1A": "Protocol Name",
  "0033xx1B": "Relevant Data UID",
  "0033xx1C": "Bulk Data",
  "0033xx1D": "Int Data",
  "0033xx1E": "Double Data",
  "0033xx1F": "String Data",
  "0033xx20": "Bulk Data Format",
  "0033xx21": "Int Data Format",
  "0033xx22": "Double Data Format",
  "0033xx23": "String Data Format",
  "0033xx24": "Description",
  "0033xx30": "Allocate Trigger Buffer",
  "0033xx33": "Number of Triggers",
  "0033xx34": "Trigger Size",
  "0033xx35": "Trigger Data Size",
  "0033xx36": "Trigger Data",
  "0035xx01": "Start Angle",
  "0055xx12": "eNTEGRA Energy Window Information Sequence",
  "0055xx13": "eNTEGRA Energy Window Range Sequence",
  "0055xx22": "eNTEGRA Detector Information Sequence",
  "0055xx52": "eNTEGRA Rotation Information Sequence",
  "0055xx62": "eNTEGRA Gated Information Sequence",
  "0055xx63": "eNTEGRA Data Information Sequence",
  "0055xx64": "SDO Double Data Sequence",
  "0055xx65": "?",
  "5001xx03": "Cid",
  "5001xx04": "Srid",
  "5001xx05": "SOP Class UID",
  "5001xx06": "SOP Instance UID",
  "5001xx07": "Curve Type",
  "5001xx08": "Graph Type",
  "5001xx09": "Legend",
  "5001xx0A": "X Units",
  "5001xx0B": "Y Units",
  "5001xx0C": "Edit",
  "5001xx0D": "Suspend",
  "5001xx0E": "Style Line",
  "5001xx0F": "Style Fill",
  "5001xx10": "Style Colour",
  "5001xx11": "Style Width",
  "5001xx12": "Style Point",
  "5001xx13": "Style P Colour",
  "5001xx14": "Style P Size",
  "5001xx15": "Segments",
  "5001xx16": "Seg Type",
  "5001xx17": "Seg Start",
  "5001xx18": "Seg End",
  "5001xx19": "Seg Style Line",
  "5001xx1A": "SegStyleFill",
  "5001xx1B": "Seg Style Colour",
  "5001xx1C": "Seg Style Width",
  "5001xx1D": "Seg Style Point",
  "5001xx1E": "Seg Style P Colour",
  "5001xx1F": "Seg Style P Size",
  "5001xx20": "Seg Name",
  "5001xx21": "Seg Allow Dir Int",
  "5001xx22": "Text Annots",
  "5001xx23": "Txt X",
  "5001xx24": "Txt Y",
  "5001xx25": "Txt Text",
  "5001xx26": "Txt Name",
  "5001xx30": "ROI Name",
  "5001xx31": "Derived From Image UID",
  "5001xx32": "Derived From Images",
  "5001xx33": "Curve Flags",
  "5001xx34": "Curve Name",
  "5001xx36": "Curve UID",
  "5001xx37": "ROI Area",
  "5001xx3A": "Software Version",
  "5001xx3B": "Start Date",
  "5001xx3C": "Completion Date",
  "5001xx3D": "Detector Name",
  "5001xx47": "Normal Color",
  "5001xx48": "Name Font",
  "5001xx49": "Fill Pattern",
  "5001xx4A": "Line Style",
  "5001xx4B": "Line Dash Length",
  "5001xx4C": "Line Thickness",
  "5001xx4D": "Interactivity",
  "5001xx4E": "Name Pos",
  "5001xx4F": "Name Display",
  "5001xx50": "Label",
  "5001xx51": "Bp Seg",
  "5001xx52": "Bp Seg Pairs",
  "5001xx53": "Seed Space",
  "5001xx54": "Seeds",
  "5001xx55": "Shape",
  "5001xx56": "Shape Tilt",
  "5001xx59": "Shape Pts Space",
  "5001xx5A": "Shape Ctrl Pts Counts",
  "5001xx5B": "Shape Ctrl Pts",
  "5001xx5C": "Shape Ctrl P Space",
  "5001xx5D": "ROI Flags",
  "5001xx5E": "Frame Number",
  "5001xx5F": "ID",
  "5001xx60": "Dataset ROI Mapping"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_GNHD_01",
  "0033xx01": "?",
  "0033xx02": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_HELIOS_01",
  "0045xx01": "Number of Macro Rows in Detector",
  "0045xx02": "Macro width at ISO Center",
  "0045xx03": "DAS type",
  "0045xx04": "DAS gain",
  "0045xx05": "DAS Temprature",
  "0045xx06": "Table Direction",
  "0045xx07": "Z smoothing Factor",
  "0045xx08": "View Weighting Mode",
  "0045xx09": "Sigma Row number",
  "0045xx0A": "Minimum DAS value",
  "0045xx0B": "Maximum Offset Value",
  "0045xx0C": "Number of Views shifted",
  "0045xx0D": "Z tracking Flag",
  "0045xx0E": "Mean Z error",
  "0045xx0F": "Z tracking Error",
  "0045xx10": "Start View 2A",
  "0045xx11": "Number of Views 2A",
  "0045xx12": "Start View 1A",
  "0045xx13": "Sigma Mode",
  "0045xx14": "Number of Views 1A",
  "0045xx15": "Start View 2B",
  "0045xx16": "Number Views 2B",
  "0045xx17": "Start View 1B",
  "0045xx18": "Number of Views 1B",
  "0045xx21": "Iterbone Flag",
  "0045xx22": "Peristaltic Flag",
  "0045xx30": "Cardiac Recon Algorithm",
  "0045xx31": "Avg Heart Rate For Image",
  "0045xx32": "Temporal Resolution",
  "0045xx33": "Pct Rpeak Delay",
  "0045xx34": "?",
  "0045xx36": "Ekg Full Ma Start Phase",
  "0045xx37": "Ekg Full Ma End Phase",
  "0045xx38": "Ekg Modulation Max Ma",
  "0045xx39": "Ekg Modulation Min Ma",
  "0045xx3B": "Noise Reduction Image Filter Desc",
  "0045xx50": "Temporal Center View Angle",
  "0045xx51": "Recon Center View Angle",
  "0045xx52": "WideCone Masking",
  "0045xx53": "WideCone Corner Blending Radius",
  "0045xx54": "WideCone Corner Blending Radius Offset",
  "0045xx55": "Internal Recon Algorithm",
  "0045xx60": "Patient Centering",
  "0045xx61": "Patient Attenuation",
  "0045xx62": "Water Equivalent Diameter",
  "0045xx63": "Projection Measure",
  "0045xx64": "Oval Ratio",
  "0045xx65": "Ellipse Orientation"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IDEN_01",
  "0009xx01": "Full Fidelity",
  "0009xx02": "Suite Id",
  "0009xx04": "Product Id",
  "0009xx17": "?",
  "0009xx1A": "?",
  "0009xx20": "?",
  "0009xx27": "Image Actual Date",
  "0009xx2F": "?",
  "0009xx30": "Service Id",
  "0009xx31": "Mobile Location Number",
  "0009xxE2": "?",
  "0009xxE3": "Equipment UID",
  "0009xxE6": "Genesis Version Now",
  "0009xxE7": "Exam Record Checksum",
  "0009xxE8": "Series Suite ID",
  "0009xxE9": "Actual Series Data Time Stamp"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IDI_01",
  "0073xx20": "Height Map Plane Distance",
  "0073xx21": "Height Map Plane Offset",
  "0073xx30": "Height Map Plane Indices",
  "0073xx31": "X Map Plane Indices",
  "0073xx32": "Y Map Plane Indices",
  "0073xx40": "Central Projection Detector Secondary Angle",
  "0073xx50": "Detector Active Dimensions"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IMAG_01",
  "0027xx06": "Image Archive Flag",
  "0027xx10": "Scout Type",
  "0027xx1C": "Vma Mamp",
  "0027xx1D": "Vma Phase",
  "0027xx1E": "Vma Mod",
  "0027xx1F": "Vma Clip or Noise Index by 10",
  "0027xx20": "Smart Scan On Off Flag",
  "0027xx30": "Foreign Image Revision",
  "0027xx31": "Imaging Mode",
  "0027xx32": "Pulse Sequence",
  "0027xx33": "Imaging Options",
  "0027xx35": "Plane Type",
  "0027xx36": "Oblique Plane",
  "0027xx40": "RAS Letter Of Image Location",
  "0027xx41": "Image Location",
  "0027xx42": "Center R Coord Of Plane Image",
  "0027xx43": "Center A Coord Of Plane Image",
  "0027xx44": "Center S Coord Of Plane Image",
  "0027xx45": "Normal R Coord",
  "0027xx46": "Normal A Coord",
  "0027xx47": "Normal S Coord",
  "0027xx48": "R Coord Of Top Right Corner",
  "0027xx49": "A Coord Of Top Right Corner",
  "0027xx4A": "S Coord Of Top Right Corner",
  "0027xx4B": "R Coord Of Bottom Right Corner",
  "0027xx4C": "A Coord Of Bottom Right Corner",
  "0027xx4D": "S Coord Of Bottom Right Corner",
  "0027xx50": "Table Start Location (Scout)",
  "0027xx51": "Table End Location (Scout)",
  "0027xx52": "RAS Letter For Side Of Image",
  "0027xx53": "RAS Letter For Anterior Posterior",
  "0027xx54": "RAS Letter For Scout Start Loc",
  "0027xx55": "RAS Letter For Scout End Loc",
  "0027xx60": "Image Dimension X",
  "0027xx61": "Image Dimension Y",
  "0027xx62": "Number Of Excitations"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IMPS_01",
  "0029xx04": "Lower Range Of Pixels",
  "0029xx15": "Lower Range Of Pixels1",
  "0029xx16": "Upper Range Of Pixels1",
  "0029xx17": "Lower Range Of Pixels2",
  "0029xx18": "Upper Range Of Pixels2",
  "0029xx1A": "Length Of Total Header In Bytes",
  "0029xx26": "Version Of Header Structure",
  "0029xx34": "Advantage Comp Overflow",
  "0029xx35": "Advantage Comp Underflow"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IQTB_IDEN_47",
  "0047xx02": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_IT_US_REPORT",
  "0045xx11": "Vivid excel file",
  "0045xx12": "Vivid CHM file",
  "0045xx13": "Vivid PDF file"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_LUNAR_RAW",
  "7003xx01": "enCORE File Name",
  "7003xx02": "enCORE File Data",
  "7003xx03": "enCORE File Length",
  "7003xx04": "enCORE File Modified Time"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_PARM_01",
  "0043xx01": "Bitmap Of Prescan Options",
  "0043xx02": "Gradient Offset In X",
  "0043xx03": "Gradient Offset In Y",
  "0043xx04": "Gradient Offset In Z",
  "0043xx05": "Image Is Original Or Unoriginal",
  "0043xx06": "Number Of EPI Shots",
  "0043xx07": "Views Per Segment",
  "0043xx08": "Respiratory Rate In BPM",
  "0043xx09": "Respiratory Trigger Point",
  "0043xx0A": "Type Of Receiver Used",
  "0043xx0B": "dB/dt Peak Rate Of Change Of Gradient Field",
  "0043xx0C": "dB/dt Limits In Units Of Percent",
  "0043xx0D": "PSD Estimated Limit",
  "0043xx0E": "PSD Estimated Limit In Tesla Per Second",
  "0043xx0F": "SAR Avg Head",
  "0043xx10": "Window Value",
  "0043xx11": "Total Input Views",
  "0043xx12": "Xray Chain",
  "0043xx13": "Recon Kernel Parameters",
  "0043xx14": "Calibration Parameters",
  "0043xx15": "Total Output Views",
  "0043xx16": "Number Of Overranges",
  "0043xx17": "IBH Image Scale Factors",
  "0043xx18": "BBH Coefficients",
  "0043xx19": "Number Of BBH Chains To Blend",
  "0043xx1A": "Starting Channel Number",
  "0043xx1B": "PPScan Parameters",
  "0043xx1C": "GE Image Integrity",
  "0043xx1D": "Level Value",
  "0043xx1E": "Delta Start Time",
  "0043xx1F": "Max Overranges In A View",
  "0043xx20": "Avg Overranges All Views",
  "0043xx21": "Corrected Afterglow Terms",
  "0043xx25": "Reference Channels",
  "0043xx26": "No Views Ref Channels Blocked",
  "0043xx27": "Scan Pitch Ratio",
  "0043xx28": "Unique Image Identifier",
  "0043xx29": "Histogram Tables",
  "0043xx2A": "User Defined Data",
  "0043xx2B": "Private Scan Options",
  "0043xx2C": "Effective Echo Spacing",
  "0043xx2D": "Filter Mode",
  "0043xx2E": "String Slop Field 2",
  "0043xx2F": "Image Type (Real,Imaginary,Phase,Magnitude)",
  "0043xx30": "Vas Collapse Flag",
  "0043xx31": "Recon Center Coordinates",
  "0043xx32": "Vas Flags",
  "0043xx33": "Neg Scan Spacing",
  "0043xx34": "Offset Frequency",
  "0043xx35": "User Usage Tag",
  "0043xx36": "User Fill Map MSW",
  "0043xx37": "User Fill Map LSW",
  "0043xx38": "User 25 To User 48",
  "0043xx39": "Slop Integer 6 To Slop Integer 9",
  "0043xx40": "Trigger On Position",
  "0043xx41": "Degree Of Rotation",
  "0043xx42": "DAS Trigger Source",
  "0043xx43": "DAS Fpa Gain",
  "0043xx44": "DAS Output Source",
  "0043xx45": "DAS Ad Input",
  "0043xx46": "DAS Cal Mode",
  "0043xx47": "DAS Cal Frequency",
  "0043xx48": "DAS Reg Xm",
  "0043xx49": "DAS Auto Zero",
  "0043xx4A": "Starting Channel Of View",
  "0043xx4B": "DAS Xm Pattern",
  "0043xx4C": "TGGC Trigger Mode",
  "0043xx4D": "Start Scan To Xray On Delay",
  "0043xx4E": "Duration Of Xray On",
  "0043xx60": "Slop Integer 10 To Slop Integer 17",
  "0043xx61": "Scanner Study Entity UID",
  "0043xx62": "Scanner Study ID",
  "0043xx63": "Raw Data ID",
  "0043xx64": "Recon Filter",
  "0043xx65": "Motion Correction Indicator",
  "0043xx66": "Helical Correction Indicator",
  "0043xx67": "IBO Correction Indicator",
  "0043xx68": "XT Correction Indicator",
  "0043xx69": "Q-cal Correction Indicator",
  "0043xx6A": "AV Correction Indicator",
  "0043xx6B": "L-MDK Correction Indicator",
  "0043xx6C": "Detector Row",
  "0043xx6D": "Area Size",
  "0043xx6E": "Auto mA Mode",
  "0043xx6F": "Scanner Table Entry + Gradient Coil Selected",
  "0043xx70": "Paradigm Name",
  "0043xx71": "Paradigm Description",
  "0043xx72": "Paradigm UID",
  "0043xx73": "Experiment Type",
  "0043xx74": "Number of Rest Volumes",
  "0043xx75": "Number of Active Volumes",
  "0043xx76": "Number of Dummy Scans",
  "0043xx77": "Application Name",
  "0043xx78": "Application Version",
  "0043xx79": "Slices Per Volume",
  "0043xx7A": "Expected Time Points",
  "0043xx7B": "Regressor Values",
  "0043xx7C": "Delay After Slice Group",
  "0043xx7D": "Recon Mode Flag Word",
  "0043xx7E": "PACC Specific Information",
  "0043xx7F": "Reserved",
  "0043xx80": "Coil ID Data",
  "0043xx81": "GE Coil Name",
  "0043xx82": "System Configuration Information",
  "0043xx83": "Asset R Factors",
  "0043xx84": "Additional Asset Data",
  "0043xx85": "Debug Data (Text Format)",
  "0043xx86": "Debug Data (Binary Format)",
  "0043xx88": "PURE Acquisition Calibration Series UID",
  "0043xx89": "Governing Body, dB/dt, and SAR definition",
  "0043xx8A": "Private In-Plane Phase Encoding Direction",
  "0043xx8B": "FMRI Binary Data Block",
  "0043xx8C": "Voxel Location",
  "0043xx8D": "SAT Band Locations",
  "0043xx8E": "Spectro Prescan Values",
  "0043xx8F": "Spectro Parameters",
  "0043xx90": "SAR Definition",
  "0043xx91": "SAR Value",
  "0043xx92": "Image Error Text",
  "0043xx93": "Spectro Quantitation Values",
  "0043xx94": "Spectro Ratio Values",
  "0043xx95": "Prescan Reuse String",
  "0043xx96": "Content Qualification",
  "0043xx97": "Image Filtering Parameters",
  "0043xx98": "ASSET Acquisition Calibration Series UID",
  "0043xx99": "Extended Options",
  "0043xx9A": "Rx Stack Identification"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_PATI_01",
  "0011xx10": "Patient Status"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_PETD_01",
  "0009xx01": "Implementation Version Name",
  "0009xx02": "Patient ID",
  "0009xx03": "Patient Compatible Version",
  "0009xx04": "Patient Software Version",
  "0009xx05": "Patient DateTime",
  "0009xx06": "Patient Type",
  "0009xx07": "Exam ID",
  "0009xx08": "Exam Compatible Version",
  "0009xx09": "Exam Software Version",
  "0009xx0A": "Scan ID",
  "0009xx0B": "Scan Compatible Version",
  "0009xx0C": "Scan Software Version",
  "0009xx0D": "Scan Date Time",
  "0009xx0E": "Scan Ready",
  "0009xx0F": "Scan Description",
  "0009xx10": "Hospital Name",
  "0009xx11": "Scanner Description",
  "0009xx12": "Manufacturer",
  "0009xx13": "FOR Identifier",
  "0009xx14": "Landmark Name",
  "0009xx15": "Landmark Abbrev",
  "0009xx16": "Patient Position",
  "0009xx17": "Scan Perspective",
  "0009xx18": "Scan Type",
  "0009xx19": "Scan Mode",
  "0009xx1A": "Start Condition",
  "0009xx1B": "Start Condition Data",
  "0009xx1C": "Sel Stop Condition",
  "0009xx1D": "Sel Stop Condition Data",
  "0009xx1E": "Collect Deadtime",
  "0009xx1F": "Collect Singles",
  "0009xx20": "Collect Count Rate",
  "0009xx21": "Count Rate Period",
  "0009xx22": "Delayed Events",
  "0009xx23": "Delayed Bias",
  "0009xx24": "Word Size",
  "0009xx25": "Axial Acceptance",
  "0009xx26": "Axial Angle 3D",
  "0009xx27": "Theta Compression",
  "0009xx28": "Axial Compression",
  "0009xx29": "Gantry Tilt Angle",
  "0009xx2A": "Collimation",
  "0009xx2B": "Scan FOV",
  "0009xx2C": "Axial FOV",
  "0009xx2D": "Event Separation",
  "0009xx2E": "Mask Width",
  "0009xx2F": "Binning Mode",
  "0009xx30": "Trig Rej Method",
  "0009xx31": "Number For Reject",
  "0009xx32": "Lower Reject Limit",
  "0009xx33": "Upper Reject Limit",
  "0009xx34": "Triggers Acquired",
  "0009xx35": "Triggers Rejected",
  "0009xx36": "Tracer Name",
  "0009xx37": "Batch Description",
  "0009xx38": "Tracer Activity",
  "0009xx39": "Measured Date Time",
  "0009xx3A": "Pre Inj Volume",
  "0009xx3B": "Administered Date Time",
  "0009xx3C": "Post Injected Activity",
  "0009xx3D": "Post Injected Date Time",
  "0009xx3E": "Radio Nuclide Name",
  "0009xx3F": "Half Life",
  "0009xx40": "Positron Fraction",
  "0009xx41": "Source 1 Holder",
  "0009xx42": "Source 1 Activity",
  "0009xx43": "Source 1 Meas DT",
  "0009xx44": "Source 1 Radio Nuclide",
  "0009xx45": "Source 1 Half Life",
  "0009xx46": "Source 2 Holder",
  "0009xx47": "Source 2 Activity",
  "0009xx48": "Source 2 Meas DT",
  "0009xx49": "Source 2 Radio Nuclide",
  "0009xx4A": "Source 2 Half Life",
  "0009xx4B": "Source Speed",
  "0009xx4C": "Source Location",
  "0009xx4D": "Emission Present",
  "0009xx4E": "Lower Axial Acc",
  "0009xx4F": "Upper Axial Acc",
  "0009xx50": "Lower Coinc Limit",
  "0009xx51": "Upper Coinc Limit",
  "0009xx52": "Coinc Delay Offset",
  "0009xx53": "Coinc Output Mode",
  "0009xx54": "Upper Energy Limit",
  "0009xx55": "Lower Energy Limit",
  "0009xx56": "Normal Cal ID",
  "0009xx57": "Normal 2D Cal ID",
  "0009xx58": "Blank Cal ID",
  "0009xx59": "WC Cal ID",
  "0009xx5A": "Derived",
  "0009xx5B": "Contrast Agent",
  "0009xx5C": "frame_id",
  "0009xx5D": "scan_id",
  "0009xx5E": "exam_id",
  "0009xx5F": "patient_id",
  "0009xx60": "compatible_version",
  "0009xx61": "software_version",
  "0009xx62": "where_is_frame",
  "0009xx63": "frame_size",
  "0009xx64": "file_exists",
  "0009xx65": "patient_entry",
  "0009xx66": "table_height",
  "0009xx67": "table_z_position",
  "0009xx68": "landmark_datetime",
  "0009xx69": "slice_count",
  "0009xx6A": "start_location",
  "0009xx6B": "acq_delay",
  "0009xx6C": "acq_start",
  "0009xx6D": "acq_duration",
  "0009xx6E": "acq_bin_dur",
  "0009xx6F": "acq_bin_start",
  "0009xx70": "actual_stop_cond",
  "0009xx71": "total_prompts",
  "0009xx72": "total_delays",
  "0009xx73": "frame_valid",
  "0009xx74": "validity_info",
  "0009xx75": "archived",
  "0009xx76": "compression",
  "0009xx77": "uncompressed_size",
  "0009xx78": "accum_bin_dur",
  "0009xx79": "Image Set Compatible Version",
  "0009xx7A": "Image Set Software Version",
  "0009xx7B": "Image Set Date Time",
  "0009xx7C": "Image Set Source",
  "0009xx7D": "Image Set Contents",
  "0009xx7E": "Image Set Type",
  "0009xx7F": "Image Set Reference",
  "0009xx80": "Multi Patient",
  "0009xx81": "Number of Normals",
  "0009xx82": "Color Map ID",
  "0009xx83": "Window Level Type",
  "0009xx84": "Rotate",
  "0009xx85": "Flip",
  "0009xx86": "Zoom",
  "0009xx87": "PanX",
  "0009xx88": "PanY",
  "0009xx89": "Window Level Min",
  "0009xx8A": "Window Level Max",
  "0009xx8B": "ReconMethod",
  "0009xx8C": "Attenuation",
  "0009xx8D": "Attenuation Coefficient",
  "0009xx8E": "BP Filter",
  "0009xx8F": "BP Filter Cutoff",
  "0009xx90": "BP Filter Order",
  "0009xx91": "BP Filter Center I",
  "0009xx92": "BP Filter Center P",
  "0009xx93": "Atten Smooth",
  "0009xx94": "Atten Smooth Param",
  "0009xx95": "Angle Smooth Param",
  "0009xx96": "Well CounterCal ID",
  "0009xx97": "Trans Scan ID",
  "0009xx98": "Norm Cal ID",
  "0009xx99": "Blnk Cal ID",
  "0009xx9A": "CAC Edge Threshold",
  "0009xx9B": "CAC Skull Offset",
  "0009xx9C": "Emiss Sub ID",
  "0009xx9D": "Radial Filter 3D",
  "0009xx9E": "Radial Cutoff 3D",
  "0009xx9F": "Axial Filter 3D",
  "0009xxA0": "Axial Cutoff 3D",
  "0009xxA1": "Axial Start",
  "0009xxA2": "Axial Spacing",
  "0009xxA3": "Axial Angles Used",
  "0009xxA6": "slice_number",
  "0009xxA7": "total_counts",
  "0009xxA8": "other_atts",
  "0009xxA9": "other_atts_size",
  "0009xxAB": "bp_center_x",
  "0009xxAC": "bp_center_y",
  "0009xxAD": "trans_frame_id",
  "0009xxAE": "tpluse_frame_id",
  "0009xxB1": "profile_spacing",
  "0009xxB2": "IR Num Iterations",
  "0009xxB3": "IR Num Subsets",
  "0009xxB4": "IR Recon FOV",
  "0009xxB5": "IR Corr Model",
  "0009xxB6": "IR Loop Filter",
  "0009xxB7": "IR Pre Filt Param",
  "0009xxB8": "IR Loop Filt Param",
  "0009xxB9": "Response Filt Param",
  "0009xxBA": "Post Filter",
  "0009xxBB": "Post Filter Param",
  "0009xxBC": "IR Regularize",
  "0009xxBD": "IR Regularize Param",
  "0009xxBE": "AC BP Filter",
  "0009xxBF": "AC BP Filt Cutoff",
  "0009xxC0": "AC BP Filt Order",
  "0009xxC1": "AC Img Smooth",
  "0009xxC2": "AC Img Smooth Parm",
  "0009xxC3": "Scatter Method",
  "0009xxC4": "Scatter Num Iter",
  "0009xxC5": "Scatter Parm",
  "0009xxC6": "seg_qc_parm",
  "0009xxC7": "overlap",
  "0009xxC8": "ovlp_frm_id",
  "0009xxC9": "ovlp_trans_frm_id",
  "0009xxCA": "ovlp_tpulse_frm_id",
  "0009xxCB": "vqc_x_axis_trans",
  "0009xxCC": "vqc_x_axis_tilt",
  "0009xxCD": "vqc_y_axis_trans",
  "0009xxCE": "vqc_y_axis_swivel",
  "0009xxCF": "vqc_z_axis_trans",
  "0009xxD0": "vqc_z_axis_roll",
  "0009xxD1": "ctac_conv_scale",
  "0009xxD2": "image_set_id",
  "0009xxD3": "contrast_route",
  "0009xxD5": "loop_filter_parm",
  "0009xxD6": "image_one_loc",
  "0009xxD7": "image_index_loc",
  "0009xxD8": "frame_number",
  "0009xxD9": "list_file_exists",
  "0009xxDA": "where_is_list_frame",
  "0009xxDB": "ir_z_filter_flag",
  "0009xxDC": "ir_z_filter_ratio",
  "0009xxDD": "num_of_rr_interval",
  "0009xxDE": "num_of_time_slots",
  "0009xxDF": "num_of_slices",
  "0009xxE0": "num_of_time_slices",
  "0009xxE1": "unlisted_scan",
  "0009xxE2": "rest_stress",
  "0009xxE3": "phase percentage",
  "0009xxE4": "?",
  "0009xxE5": "left shift",
  "0009xxE6": "posterior shift",
  "0009xxE7": "superior shift",
  "0009xxE8": "acq_bin_num",
  "0009xxE9": "acq_bin_dur_percent",
  "0009xxEA": "?",
  "0009xxEB": "?",
  "0009xxEC": "?",
  "0011xx01": "?",
  "0011xx18": "?",
  "0013xx01": "?",
  "0017xx01": "correction_cal_id",
  "0017xx04": "cal_datetime",
  "0017xx05": "cal_datetime",
  "0017xx06": "cal_type",
  "0017xx07": "where_is_corr",
  "0017xx08": "corr_file_size",
  "0017xx0A": "scan_datetime",
  "0017xx0B": "norm_2d_cal_id",
  "0017xx0C": "hosp_identifier",
  "0019xx01": "wc_cal_id",
  "0019xx07": "cal_hardware",
  "0019xx08": "coefficients",
  "0019xx09": "activity_factor_hr",
  "0019xx0A": "activity_factor_hs",
  "0019xx0B": "activity_factor_3d",
  "0019xx0F": "meas_activity",
  "0019xx10": "meas_datetime",
  "0019xx11": "axial_filter_3d",
  "0019xx12": "axial_cutoff_3d",
  "0019xx13": "default_flag",
  "0019xx15": "wc_cal_rec_method",
  "0019xx16": "activity_factor_2d",
  "0019xx17": "isotope",
  "0021xx01": "raw_data_type",
  "0021xx02": "raw_data_size",
  "0023xx01": "raw_data_blob",
  "5001xx01": "Curve ID",
  "5001xx02": "Curve Compatible Version",
  "5001xx03": "Curve Software Version",
  "5001xx04": "Statistics Type",
  "5001xx05": "How Derived",
  "5001xx06": "How Derived Size",
  "5001xx08": "Deadtime",
  "5003xx01": "Graph Sequence",
  "5003xx02": "Graph ID",
  "5003xx03": "Graph Compatible Version",
  "5003xx04": "Graph Software Version",
  "5003xx05": "Title",
  "5003xx06": "Graph Date Time",
  "5003xx07": "Graph Description",
  "5003xx08": "Title Font Name",
  "5003xx09": "Title Font Size",
  "5003xx0A": "Footer",
  "5003xx0B": "Footer Font Size",
  "5003xx0C": "Foreground Color",
  "5003xx0D": "Background Color",
  "5003xx0E": "Graph Border",
  "5003xx0F": "Graph Width",
  "5003xx10": "Graph Height",
  "5003xx11": "Grid",
  "5003xx12": "Label Font Name",
  "5003xx13": "Label Font Size",
  "5003xx14": "Axes Color",
  "5003xx15": "X Axis Label",
  "5003xx16": "X Axis Units",
  "5003xx17": "X Major Tics",
  "5003xx18": "X Axis Min",
  "5003xx19": "X Axis Max",
  "5003xx1A": "Y Axis Label",
  "5003xx1B": "Y Axis Units",
  "5003xx1C": "Y Major Tics",
  "5003xx1D": "Y Axis Min",
  "5003xx1E": "Y Axis Max",
  "5003xx1F": "Legend Font Name",
  "5003xx20": "Legend Font Size",
  "5003xx21": "Legend Location X",
  "5003xx22": "Legend Location Y",
  "5003xx23": "Legend Width",
  "5003xx24": "Legend Height",
  "5003xx25": "Legend Border",
  "5005xx01": "Curve Presentation Sequence",
  "5005xx02": "Curve Presentation ID",
  "5005xx05": "Curve Presentation Compatible Version",
  "5005xx06": "Curve Presentation Software Version",
  "5005xx07": "Curve Label",
  "5005xx08": "Color",
  "5005xx09": "Line Type",
  "5005xx0A": "Line Width",
  "5005xx0B": "Point Symbol",
  "5005xx0C": "Point Symbol Dim",
  "5005xx0D": "Point Color"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_RELA_01",
  "0021xx03": "Series From Which Prescribed",
  "0021xx05": "Genesis Version Now",
  "0021xx07": "Series Record Checksum",
  "0021xx15": "?",
  "0021xx16": "?",
  "0021xx19": "Acq Recon Record Checksum",
  "0021xx20": "Table Start Location",
  "0021xx36": "Image From Which Prescribed",
  "0021xx37": "Screen Format",
  "0021xx4A": "Anatomical Reference For Scout",
  "0021xx4E": "?",
  "0021xx4F": "Locations In Acquisition",
  "0021xx50": "Graphically Prescribed",
  "0021xx51": "Rotation From Source X Rot",
  "0021xx52": "Rotation From Source Y Rot",
  "0021xx53": "Rotation From Source Z Rot",
  "0021xx54": "Image Position",
  "0021xx55": "Image Orientation",
  "0021xx56": "Num 3D slabs",
  "0021xx57": "Locs per 3D slab",
  "0021xx58": "Overlaps",
  "0021xx59": "Image Filtering 0.5/0.2T",
  "0021xx5A": "Diffusion direction",
  "0021xx5B": "Tagging Flip Angle",
  "0021xx5C": "Tagging Orientation",
  "0021xx5D": "Tag Spacing",
  "0021xx5E": "RTIA_timer",
  "0021xx5F": "Fps",
  "0021xx70": "?",
  "0021xx71": "?",
  "0021xx81": "Auto Window Level Alpha",
  "0021xx82": "Auto Window Level Beta",
  "0021xx83": "Auto Window Level Window",
  "0021xx84": "Auto Window Level Level",
  "0021xx90": "Tube Focal Spot Position",
  "0021xx91": "Biopsy Position",
  "0021xx92": "Biopsy T Location",
  "0021xx93": "Biopsy Ref Location"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_SEND_02",
  "0045xx55": "A_Coefficients used in Multiresolution Algorithm",
  "0045xx62": "User Window Center",
  "0045xx63": "User Window Width",
  "0045xx65": "Requested Detector Entrance Dose",
  "0045xx67": "VOI LUT Assymmetry Parameter Beta",
  "0045xx69": "Collimator Rotation",
  "0045xx72": "Collimator Width",
  "0045xx73": "Collimator Height"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_SENOCRYSTAL_V1",
  "0055xx00": "Clinical View",
  "0055xx01": "Exposure Dose",
  "0055xx02": "Implant Displacement",
  "0055xx03": "Paddle Type",
  "0055xx04": "Processing Type",
  "0055xx05": "Windowing Type",
  "0055xx06": "Saturation",
  "0055xx07": "Clip"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_SENO_02",
  "0045xx01": "Digital Senograph Configuration",
  "0045xx02": "System Series Description",
  "0045xx03": "Track",
  "0045xx04": "AES",
  "0045xx06": "Angulation",
  "0045xx07": "Compression Thickness",
  "0045xx08": "Compression Force",
  "0045xx09": "Real Magnification Factor",
  "0045xx0A": "Displayed Magnification Factor",
  "0045xx0B": "Senograph Type",
  "0045xx0C": "Integration Time",
  "0045xx0D": "ROI Origin X and Y",
  "0045xx0E": "Correction Type",
  "0045xx0F": "Acquisition Type",
  "0045xx10": "CCD Temperature",
  "0045xx11": "Receptor Size cm X and Y",
  "0045xx12": "Receptor Size Pixels X and Y",
  "0045xx13": "Screen",
  "0045xx14": "Pixel Pitch Microns",
  "0045xx15": "Pixel Depth Bits",
  "0045xx16": "Binning Factor X and Y",
  "0045xx17": "Quantum Gain",
  "0045xx18": "Electron/EDU Ratio",
  "0045xx19": "Electronic Gain",
  "0045xx1A": "IDS Data Buffer",
  "0045xx1B": "Clinical View",
  "0045xx1C": "Breast Laterality",
  "0045xx1D": "Mean Of Raw Gray Levels",
  "0045xx1E": "Mean Of Offset Gray Levels",
  "0045xx1F": "Mean Of Corrected Gray Levels",
  "0045xx20": "Mean Of Region Gray Levels",
  "0045xx21": "Mean Of Log Region Gray Levels",
  "0045xx22": "Standard Deviation Of Raw Gray Levels",
  "0045xx23": "Standard Deviation Of Corrected Gray Levels",
  "0045xx24": "Standard Deviation Of Region Gray Levels",
  "0045xx25": "Standard Deviation Of Log Region Gray Levels",
  "0045xx26": "MAO Buffer",
  "0045xx27": "Set Number",
  "0045xx28": "WindowingType (LINEAR or GAMMA)",
  "0045xx29": "WindowingParameters",
  "0045xx2A": "Crosshair Cursor X Coordinates",
  "0045xx2B": "Crosshair Cursor Y Coordinates",
  "0045xx2C": "Reference Landmark A X 3D Coordinates",
  "0045xx2D": "Reference Landmark A Y 3D Coordinates",
  "0045xx2E": "Reference Landmark A Z 3D Coordinates",
  "0045xx2F": "Reference Landmark A X Image Coordinates",
  "0045xx30": "Reference Landmark A Y Image Coordinates",
  "0045xx31": "Reference Landmark B X 3D Coordinates",
  "0045xx32": "Reference Landmark B Y 3D Coordinates",
  "0045xx33": "Reference Landmark B Z 3D Coordinates",
  "0045xx34": "Reference Landmark B X Image Coordinates",
  "0045xx35": "Reference Landmark B Y Image Coordinates",
  "0045xx36": "X-Ray Source X Location",
  "0045xx37": "X-Ray Source Y Locatio",
  "0045xx38": "X-Ray Source Z Locatio",
  "0045xx39": "Vignette Rows",
  "0045xx3A": "Vignette Columns",
  "0045xx3B": "Vignette Bits Allocated",
  "0045xx3C": "Vignette Bits Stored",
  "0045xx3D": "Vignette High Bit",
  "0045xx3E": "Vignette Pixel Representation",
  "0045xx3F": "Vignette Pixel Data",
  "0045xx49": "Radiological Thickness",
  "0045xx50": "Fallback Instance UID (CR or SC)",
  "0045xx51": "Fallback Series UID (CR or SC)",
  "0045xx52": "Raw Diagnostic Low",
  "0045xx53": "Raw Diagnostic High",
  "0045xx54": "Exponent",
  "0045xx55": "A Coefficients",
  "0045xx56": "Noise Reduction Sensitivity",
  "0045xx57": "Noise Reduction Threshold",
  "0045xx58": "Mu",
  "0045xx59": "Threshold",
  "0045xx60": "Breast ROI X",
  "0045xx61": "Breast ROI Y",
  "0045xx62": "User Window Center",
  "0045xx63": "User Window Width",
  "0045xx64": "Segmentation Threshold",
  "0045xx65": "Detector Entrance Dose",
  "0045xx66": "Asymmetrical Collimation Information",
  "0045xx71": "STX Buffer",
  "0045xx72": "Image Crop Point",
  "0045xx90": "Premium View Beta",
  "0045xxA0": "Signal Average Factor",
  "0045xxA1": "Organ Dose for Source Images",
  "0045xxA2": "Entrance dose in mGy for Source Images",
  "0045xxA4": "Organ Dose in dGy for Complete DBT Sequence",
  "0045xxA6": "SOP Instance UID for Lossy Compression",
  "0045xxA7": "Reconstruction Parameters",
  "0045xxA8": "Entrance Dose in dGy for Complete DBT Sequence",
  "0045xxA9": "Replacement Image",
  "0045xxAA": "Replaced Image Sequence",
  "0045xxAB": "Cumulative Organ Dose in dGy",
  "0045xxAC": "Cumulative Entrance dose in mGy",
  "0045xxAD": "Paddle Properties"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_SERS_01",
  "0025xx06": "Last Pulse Sequence Used",
  "0025xx07": "Images In Series",
  "0025xx10": "Landmark Counter",
  "0025xx11": "Number Of Acquisitions",
  "0025xx14": "Indicates Number Of Updates To Header",
  "0025xx17": "Series Complete Flag",
  "0025xx18": "Number Of Images Archived",
  "0025xx19": "Last Instance Number Used",
  "0025xx1A": "Primary Receiver Suite And Host",
  "0025xx1B": "Protocol Data Block (compressed)"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_STDY_01",
  "0023xx01": "Number Of Series In Study",
  "0023xx02": "Number Of Unarchived Series",
  "0023xx10": "Reference Image Field",
  "0023xx50": "Summary Image",
  "0023xx70": "Start Time Secs In First Axial",
  "0023xx74": "Number Of Updates To Header",
  "0023xx7D": "Indicates If Study Has Complete Info",
  "0023xx80": "Has MPPS Related Tags"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_Ultrasound_ExamGroup_001",
  "6005xx10": "?",
  "6005xx20": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_Ultrasound_ImageGroup_001",
  "6003xx10": "?",
  "6003xx11": "?",
  "6003xx12": "?",
  "6003xx15": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_Ultrasound_MovieGroup_001",
  "7FE1xx01": "?",
  "7FE1xx02": "?",
  "7FE1xx03": "?",
  "7FE1xx08": "?",
  "7FE1xx10": "?",
  "7FE1xx12": "?",
  "7FE1xx18": "?",
  "7FE1xx20": "?",
  "7FE1xx24": "?",
  "7FE1xx26": "?",
  "7FE1xx30": "?",
  "7FE1xx32": "?",
  "7FE1xx36": "?",
  "7FE1xx37": "?",
  "7FE1xx3A": "?",
  "7FE1xx3C": "?",
  "7FE1xx43": "?",
  "7FE1xx48": "?",
  "7FE1xx49": "?",
  "7FE1xx51": "?",
  "7FE1xx52": "?",
  "7FE1xx53": "?",
  "7FE1xx54": "?",
  "7FE1xx55": "?",
  "7FE1xx57": "?",
  "7FE1xx60": "?",
  "7FE1xx61": "?",
  "7FE1xx62": "?",
  "7FE1xx69": "?",
  "7FE1xx70": "?",
  "7FE1xx71": "?",
  "7FE1xx72": "?",
  "7FE1xx73": "?",
  "7FE1xx74": "?",
  "7FE1xx75": "?",
  "7FE1xx77": "?",
  "7FE1xx79": "?",
  "7FE1xx83": "?",
  "7FE1xx84": "?",
  "7FE1xx85": "?",
  "7FE1xx86": "?",
  "7FE1xx87": "?",
  "7FE1xx88": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_VXTL_USERDATA_01",
  "0047xx11": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_XELPRV_01",
  "0033xx08": "?",
  "0033xx10": "?",
  "0033xx11": "?",
  "0033xx16": "?",
  "0033xx17": "?",
  "0033xx18": "?",
  "0033xx19": "?",
  "0033xx1A": "?",
  "0033xx1B": "?",
  "0033xx1C": "?",
  "0033xx1D": "?",
  "0033xx1E": "?",
  "0033xx1F": "?",
  "0033xx20": "?",
  "0033xx21": "?",
  "0033xx22": "?",
  "0033xx23": "?",
  "0033xx24": "?",
  "0033xx70": "?",
  "0033xx71": "?",
  "0033xx72": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_XR3DCAL_01",
  "0021xx20": "Generalized Calibration"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GEMS_YMHD_01",
  "0033xx05": "?",
  "0033xx06": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE_GENESIS_REV3.0",
  "0019xx39": "Axial Type",
  "0019xx8F": "Swap Phase Frequency",
  "0019xx9C": "Pulse Sequence Name",
  "0019xx9F": "Coil Type",
  "0019xxA4": "SAT Fat Water Bone",
  "0019xxC0": "Bitmap Of SAT Selections",
  "0019xxC1": "Surface Coil Intensity Correction Flag",
  "0019xxCB": "Phase Contrast Flow Axis",
  "0019xxCC": "Phase Contrast Velocity Encoding",
  "0019xxD5": "Fractional Echo",
  "0019xxD8": "Variable Echo Flag",
  "0019xxD9": "Concatenated Sat",
  "0019xxF2": "Number Of Phases",
  "0043xx1E": "Delta Start Time",
  "0043xx27": "Scan Pitch Ratio"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "GE_GROUP",
  "6005xx10": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "KRETZ_US",
  "7FE1xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "Mayo/IBM Archive Project",
  "0021xx01": "?",
  "0021xx10": "?",
  "0021xx11": "?",
  "0021xx12": "?",
  "0021xx13": "?",
  "0021xx14": "?",
  "0021xx15": "?",
  "0021xx16": "?",
  "0021xx17": "?",
  "0021xx18": "?",
  "0021xx19": "?",
  "0021xx1A": "?",
  "0021xx1B": "?",
  "0021xx1C": "?",
  "0021xx1D": "?",
  "0021xx1E": "?",
  "0021xx1F": "?",
  "0021xx20": "?",
  "0021xx40": "?",
  "0021xx41": "?",
  "0021xx50": "?",
  "0021xx60": "?",
  "0021xx65": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "QUASAR_INTERNAL_USE",
  "0009xx01": "Rate Vector",
  "0009xx02": "Count Vector",
  "0009xx03": "Time Vector",
  "0009xx07": "Angle Vector",
  "0009xx08": "Camera Shape",
  "0009xx10": "Whole Body Spots",
  "0009xx11": "Worklist Flag",
  "0009xx12": "?",
  "0009xx13": "Sequence Type",
  "0009xx14": "Sequence Name",
  "0009xx15": "Average RR Time Vector",
  "0009xx16": "Low Limit Vector",
  "0009xx17": "High Limit Vector",
  "0009xx18": "Begin Index Vector",
  "0009xx19": "End Index Vector",
  "0009xx1A": "Raw Time Vector",
  "0009xx1B": "Image Type String",
  "0009xx1D": "?",
  "0009xx1E": "?",
  "0009xx22": "?",
  "0009xx23": "?",
  "0009xx39": "?",
  "0009xx40": "?",
  "0009xx41": "?",
  "0009xx42": "?",
  "0009xx44": "?",
  "0009xx45": "?",
  "0009xx48": "?",
  "0037xx10": "?",
  "0037xx1B": "?",
  "0037xx30": "?",
  "0037xx40": "?",
  "0037xx50": "?",
  "0037xx60": "?",
  "0037xx70": "?",
  "0037xx71": "?",
  "0037xx72": "?",
  "0037xx73": "?",
  "0037xx78": "?",
  "0037xx90": "?",
  "0037xx92": "?",
  "0041xx01": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "REPORT_FROM_APP",
  "0039xx95": "?"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "RadWorksTBR",
  "3111xx02": "Compression Type",
  "3111xxFF": "Query Result"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "http://www.gemedicalsystems.com/it_solutions/bamwallthickness/1.0",
  "3118xx10": "BAM WallThickness Session Date/Time",
  "3118xx20": "BAM WallThickness Session Creator",
  "3118xx30": "BAM WallThickness Session Completion Flag",
  "3118xx40": "BAM WallThickness File Sequence",
  "3118xx50": "BAM WallThickness File Name",
  "3118xx60": "BAM WallThickness File Content"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "http://www.gemedicalsystems.com/it_solutions/orthoview/2.1",
  "3117xx10": "OrthoView Session Date/Time",
  "3117xx20": "OrthoView Session Creator",
  "3117xx30": "OrthoView Session Completion Flag",
  "3117xx40": "OrthoView File Sequence",
  "3117xx50": "OrthoView File Name",
  "3117xx60": "OrthoView File Content"
});
DCM4CHE.elementName.addDictionary({
  "privateCreator": "http://www.gemedicalsystems.com/it_solutions/rad_pacs/",
  "3115xx01": "Reference to pacs study",
  "3115xx02": "Reference to pacs image",
  "3115xx03": "Pacs examnotes flag"
});
