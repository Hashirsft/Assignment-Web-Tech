(function () {
    function z(a, b) {
        if (this instanceof y)
            throw new TypeError("Symbol is not a constructor");
        return new A(B + (D || "") + "_" + C++, D)
    }

    function A(a, b) {
        this.g = a;
        H(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }

    if (x)
        return x;
    A.prototype.toString = function () {
        return this.g
    };
    var B = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        C = 0;
    return y
});
r("Symbol.iterator", function (a) {
    if (a)
        return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = E[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && H(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function () {
                return F(G(this))
            }
        })
    }
    return a
});
function F(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function () {
        return this
    };
    return a
}
function G(a, b) {
    a instanceof String && (a += "");
    var c = 0
        , d = !1
        , e = {
            next: function () {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function () {
        return e
    };
    return e
}
r("Array.prototype.keys", function (a) {
    return a ? a : function () {
        return G(this, function (b) {
            return b
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var H = this || self;
/*

 SPDX-License-Identifier: Apache-2.0
*/
var I = {};
function J(a) {
    if (I !== I)
        throw Error("Bad secret");
    this.g = a
}
J.prototype.toString = function () {
    return this.g
}
