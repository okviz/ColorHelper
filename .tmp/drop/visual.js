/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) { if (!a.document)
        throw new Error("jQuery requires a window with a document"); return b(a); } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    "use strict";
    var c = [], d = a.document, e = Object.getPrototypeOf, f = c.slice, g = c.concat, h = c.push, i = c.indexOf, j = {}, k = j.toString, l = j.hasOwnProperty, m = l.toString, n = m.call(Object), o = {};
    function p(a, b) { b = b || d; var c = b.createElement("script"); c.text = a, b.head.appendChild(c).parentNode.removeChild(c); }
    var q = "3.1.1", r = function (a, b) { return new r.fn.init(a, b); }, s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, t = /^-ms-/, u = /-([a-z])/g, v = function (a, b) { return b.toUpperCase(); };
    r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function () { return f.call(this); }, get: function (a) { return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]; }, pushStack: function (a) { var b = r.merge(this.constructor(), a); return b.prevObject = this, b; }, each: function (a) { return r.each(this, a); }, map: function (a) { return this.pushStack(r.map(this, function (b, c) { return a.call(b, c, b); })); }, slice: function () { return this.pushStack(f.apply(this, arguments)); }, first: function () { return this.eq(0); }, last: function () { return this.eq(-1); }, eq: function (a) { var b = this.length, c = +a + (a < 0 ? b : 0); return this.pushStack(c >= 0 && c < b ? [this[c]] : []); }, end: function () { return this.prevObject || this.constructor(); }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () { var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
        if (null != (a = arguments[h]))
            for (b in a)
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d)); return g; }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) { throw new Error(a); }, noop: function () { }, isFunction: function (a) { return "function" === r.type(a); }, isArray: Array.isArray, isWindow: function (a) { return null != a && a === a.window; }, isNumeric: function (a) { var b = r.type(a); return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a)); }, isPlainObject: function (a) { var b, c; return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n)); }, isEmptyObject: function (a) { var b; for (b in a)
            return !1; return !0; }, type: function (a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a; }, globalEval: function (a) { p(a); }, camelCase: function (a) { return a.replace(t, "ms-").replace(u, v); }, nodeName: function (a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase(); }, each: function (a, b) { var c, d = 0; if (w(a)) {
            for (c = a.length; d < c; d++)
                if (b.call(a[d], d, a[d]) === !1)
                    break;
        }
        else
            for (d in a)
                if (b.call(a[d], d, a[d]) === !1)
                    break; return a; }, trim: function (a) { return null == a ? "" : (a + "").replace(s, ""); }, makeArray: function (a, b) { var c = b || []; return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c; }, inArray: function (a, b, c) { return null == b ? -1 : i.call(b, a, c); }, merge: function (a, b) { for (var c = +b.length, d = 0, e = a.length; d < c; d++)
            a[e++] = b[d]; return a.length = e, a; }, grep: function (a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
            d = !b(a[f], f), d !== h && e.push(a[f]); return e; }, map: function (a, b, c) { var d, e, f = 0, h = []; if (w(a))
            for (d = a.length; f < d; f++)
                e = b(a[f], f, c), null != e && h.push(e);
        else
            for (f in a)
                e = b(a[f], f, c), null != e && h.push(e); return g.apply([], h); }, guid: 1, proxy: function (a, b) { var c, d, e; if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a))
            return d = f.call(arguments, 2), e = function () { return a.apply(b || this, d.concat(f.call(arguments))); }, e.guid = a.guid = a.guid || r.guid++, e; }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) { j["[object " + b + "]"] = b.toLowerCase(); });
    function w(a) { var b = !!a && "length" in a && a.length, c = r.type(a); return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a); }
    var x = function (a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) { return a === b && (l = !0), 0; }, C = {}.hasOwnProperty, D = [], E = D.pop, F = D.push, G = D.push, H = D.slice, I = function (a, b) { for (var c = 0, d = a.length; c < d; c++)
        if (a[c] === b)
            return c; return -1; }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", K = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]", N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", O = new RegExp(K + "+", "g"), P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"), Q = new RegExp("^" + K + "*," + K + "*"), R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"), S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"), T = new RegExp(N), U = new RegExp("^" + L + "$"), V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") }, W = /^(?:input|select|textarea|button)$/i, X = /^h\d$/i, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /[+~]/, _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"), aa = function (a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320); }, ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ca = function (a, b) { return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a; }, da = function () { m(); }, ea = ta(function (a) { return a.disabled === !0 && ("form" in a || "label" in a); }, { dir: "parentNode", next: "legend" }); try {
        G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    }
    catch (fa) {
        G = { apply: D.length ? function (a, b) { F.apply(a, H.call(b)); } : function (a, b) { var c = a.length, d = 0; while (a[c++] = b[d++])
                ; a.length = c - 1; } };
    } function ga(a, b, d, e) { var f, h, j, k, l, o, r, s = b && b.ownerDocument, w = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w)
        return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a)))
            if (f = l[1]) {
                if (9 === w) {
                    if (!(j = b.getElementById(f)))
                        return d;
                    if (j.id === f)
                        return d.push(j), d;
                }
                else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
                    return d.push(j), d;
            }
            else {
                if (l[2])
                    return G.apply(d, b.getElementsByTagName(a)), d;
                if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName)
                    return G.apply(d, b.getElementsByClassName(f)), d;
            }
        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
            if (1 !== w)
                s = b, r = a;
            else if ("object" !== b.nodeName.toLowerCase()) {
                (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;
                while (h--)
                    o[h] = "#" + k + " " + sa(o[h]);
                r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
            }
            if (r)
                try {
                    return G.apply(d, s.querySelectorAll(r)), d;
                }
                catch (x) { }
                finally {
                    k === u && b.removeAttribute("id");
                }
        }
    } return i(a.replace(P, "$1"), b, d, e); } function ha() { var a = []; function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e; } return b; } function ia(a) { return a[u] = !0, a; } function ja(a) { var b = n.createElement("fieldset"); try {
        return !!a(b);
    }
    catch (c) {
        return !1;
    }
    finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
    } } function ka(a, b) { var c = a.split("|"), e = c.length; while (e--)
        d.attrHandle[c[e]] = b; } function la(a, b) { var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex; if (d)
        return d; if (c)
        while (c = c.nextSibling)
            if (c === b)
                return -1; return a ? 1 : -1; } function ma(a) { return function (b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a; }; } function na(a) { return function (b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a; }; } function oa(a) { return function (b) { return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a; }; } function pa(a) { return ia(function (b) { return b = +b, ia(function (c, d) { var e, f = a([], c.length, b), g = f.length; while (g--)
        c[e = f[g]] && (c[e] = !(d[e] = c[e])); }); }); } function qa(a) { return a && "undefined" != typeof a.getElementsByTagName && a; } c = ga.support = {}, f = ga.isXML = function (a) { var b = a && (a.ownerDocument || a).documentElement; return !!b && "HTML" !== b.nodeName; }, m = ga.setDocument = function (a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) { return a.className = "i", !a.getAttribute("className"); }), c.getElementsByTagName = ja(function (a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length; }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length; }), c.getById ? (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { return a.getAttribute("id") === b; }; }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) {
        var c = b.getElementById(a);
        return c ? [c] : [];
    } }) : (d.filter.ID = function (a) { var b = a.replace(_, aa); return function (a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b; }; }, d.find.ID = function (a, b) { if ("undefined" != typeof b.getElementById && p) {
        var c, d, e, f = b.getElementById(a);
        if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a)
                return [f];
            e = b.getElementsByName(a), d = 0;
            while (f = e[d++])
                if (c = f.getAttributeNode("id"), c && c.value === a)
                    return [f];
        }
        return [];
    } }), d.find.TAG = c.getElementsByTagName ? function (a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0; } : function (a, b) { var c, d = [], e = 0, f = b.getElementsByTagName(a); if ("*" === a) {
        while (c = f[e++])
            1 === c.nodeType && d.push(c);
        return d;
    } return f; }, d.find.CLASS = c.getElementsByClassName && function (a, b) { if ("undefined" != typeof b.getElementsByClassName && p)
        return b.getElementsByClassName(a); }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]"); }), ja(function (a) { a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"; var b = n.createElement("input"); b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:"); })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) { c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N); }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) { var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))); } : function (a, b) { if (b)
        while (b = b.parentNode)
            if (b === a)
                return !0; return !1; }, B = b ? function (a, b) { if (a === b)
        return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1); } : function (a, b) { if (a === b)
        return l = !0, 0; var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b]; if (!e || !f)
        return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0; if (e === f)
        return la(a, b); c = a; while (c = c.parentNode)
        g.unshift(c); c = b; while (c = c.parentNode)
        h.unshift(c); while (g[d] === h[d])
        d++; return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0; }, n) : n; }, ga.matches = function (a, b) { return ga(a, null, null, b); }, ga.matchesSelector = function (a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
        try {
            var d = s.call(a, b);
            if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                return d;
        }
        catch (e) { } return ga(b, n, null, [a]).length > 0; }, ga.contains = function (a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b); }, ga.attr = function (a, b) { (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()], f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null; }, ga.escape = function (a) { return (a + "").replace(ba, ca); }, ga.error = function (a) { throw new Error("Syntax error, unrecognized expression: " + a); }, ga.uniqueSort = function (a) { var b, d = [], e = 0, f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++])
            b === a[f] && (e = d.push(f));
        while (e--)
            a.splice(d[e], 1);
    } return k = null, a; }, e = ga.getText = function (a) { var b, c = "", d = 0, f = a.nodeType; if (f) {
        if (1 === f || 9 === f || 11 === f) {
            if ("string" == typeof a.textContent)
                return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling)
                c += e(a);
        }
        else if (3 === f || 4 === f)
            return a.nodeValue;
    }
    else
        while (b = a[d++])
            c += e(b); return c; }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (a) { return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4); }, CHILD: function (a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a; }, PSEUDO: function (a) { var b, c = !a[6] && a[2]; return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)); } }, filter: { TAG: function (a) { var b = a.replace(_, aa).toLowerCase(); return "*" === a ? function () { return !0; } : function (a) { return a.nodeName && a.nodeName.toLowerCase() === b; }; }, CLASS: function (a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || ""); }); }, ATTR: function (a, b, c) { return function (d) { var e = ga.attr(d, a); return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-")); }; }, CHILD: function (a, b, c, d, e) { var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) { return !!a.parentNode; } : function (b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1; if (q) {
                if (f) {
                    while (p) {
                        m = b;
                        while (m = m[p])
                            if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                return !1;
                        o = p = "only" === a && !o && "nextSibling";
                    }
                    return !0;
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                    m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                        if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t];
                            break;
                        }
                }
                else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b))
                            break;
                return t -= e, t === d || t % d === 0 && t / d >= 0;
            } }; }, PSEUDO: function (a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) { var d, f = e(a, b), g = f.length; while (g--)
                d = I(a, f[g]), a[d] = !(c[d] = f[g]); }) : function (a) { return e(a, 0, c); }) : e; } }, pseudos: { not: ia(function (a) { var b = [], c = [], d = h(a.replace(P, "$1")); return d[u] ? ia(function (a, b, c, e) { var f, g = d(a, null, e, []), h = a.length; while (h--)
                (f = g[h]) && (a[h] = !(b[h] = f)); }) : function (a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop(); }; }), has: ia(function (a) { return function (b) { return ga(a, b).length > 0; }; }), contains: ia(function (a) { return a = a.replace(_, aa), function (b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1; }; }), lang: ia(function (a) { return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) { var c; do
                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            while ((b = b.parentNode) && 1 === b.nodeType); return !1; }; }), target: function (b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id; }, root: function (a) { return a === o; }, focus: function (a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex); }, enabled: oa(!1), disabled: oa(!0), checked: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected; }, selected: function (a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0; }, empty: function (a) { for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6)
                    return !1; return !0; }, parent: function (a) { return !d.pseudos.empty(a); }, header: function (a) { return X.test(a.nodeName); }, input: function (a) { return W.test(a.nodeName); }, button: function (a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b; }, text: function (a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()); }, first: pa(function () { return [0]; }), last: pa(function (a, b) { return [b - 1]; }), eq: pa(function (a, b, c) { return [c < 0 ? c + b : c]; }), even: pa(function (a, b) { for (var c = 0; c < b; c += 2)
                a.push(c); return a; }), odd: pa(function (a, b) { for (var c = 1; c < b; c += 2)
                a.push(c); return a; }), lt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; --d >= 0;)
                a.push(d); return a; }), gt: pa(function (a, b, c) { for (var d = c < 0 ? c + b : c; ++d < b;)
                a.push(d); return a; }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        d.pseudos[b] = ma(b); for (b in { submit: !0, reset: !0 })
        d.pseudos[b] = na(b); function ra() { } ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function (a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k)
        return b ? 0 : k.slice(0); h = a, i = [], j = d.preFilter; while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));
        for (g in d.filter)
            !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        if (!c)
            break;
    } return b ? h.length : h ? ga.error(a) : z(a, i).slice(0); }; function sa(a) { for (var b = 0, c = a.length, d = ""; b < c; b++)
        d += a[b].value; return d; } function ta(a, b, c) { var d = b.dir, e = b.next, f = e || d, g = c && "parentNode" === f, h = x++; return b.first ? function (b, c, e) { while (b = b[d])
        if (1 === b.nodeType || g)
            return a(b, c, e); return !1; } : function (b, c, i) { var j, k, l, m = [w, h]; if (i) {
        while (b = b[d])
            if ((1 === b.nodeType || g) && a(b, c, i))
                return !0;
    }
    else
        while (b = b[d])
            if (1 === b.nodeType || g)
                if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase())
                    b = b[d] || b;
                else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                        return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i))
                        return !0;
                } return !1; }; } function ua(a) { return a.length > 1 ? function (b, c, d) { var e = a.length; while (e--)
        if (!a[e](b, c, d))
            return !1; return !0; } : a[0]; } function va(a, b, c) { for (var d = 0, e = b.length; d < e; d++)
        ga(a, b[d], c); return c; } function wa(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h))); return g; } function xa(a, b, c, d, e, f) { return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) { var j, k, l, m = [], n = [], o = g.length, p = f || va(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : wa(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) {
        j = wa(r, n), d(j, [], h, i), k = j.length;
        while (k--)
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
    } if (f) {
        if (e || a) {
            if (e) {
                j = [], k = r.length;
                while (k--)
                    (l = r[k]) && j.push(q[k] = l);
                e(null, r = [], j, i);
            }
            k = r.length;
            while (k--)
                (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
        }
    }
    else
        r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r); }); } function ya(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) { return a === b; }, h, !0), l = ta(function (a) { return I(b, a) > -1; }, h, !0), m = [function (a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e; }]; i < f; i++)
        if (c = d.relative[a[i].type])
            m = [ta(ua(m), c)];
        else {
            if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                for (e = ++i; e < f; e++)
                    if (d.relative[a[e].type])
                        break;
                return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
            }
            m.push(c);
        } return ua(m); } function za(a, b) { var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) { var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
        if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
            while (q = a[o++])
                if (q(l, g || n, h)) {
                    i.push(l);
                    break;
                }
            k && (w = y);
        }
        c && ((l = !q && l) && r--, f && t.push(l));
    } if (r += s, c && s !== r) {
        o = 0;
        while (q = b[o++])
            q(t, u, g, h);
        if (f) {
            if (r > 0)
                while (s--)
                    t[s] || u[s] || (u[s] = E.call(i));
            u = wa(u);
        }
        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
    } return k && (w = y, j = v), t; }; return c ? ia(f) : f; } return h = ga.compile = function (a, b) { var c, d = [], e = [], f = A[a + " "]; if (!f) {
        b || (b = g(a)), c = b.length;
        while (c--)
            f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        f = A(a, za(e, d)), f.selector = a;
    } return f; }, i = ga.select = function (a, b, c, e) { var f, i, j, k, l, m = "function" == typeof a && a, n = !e && g(a = m.selector || a); if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
            if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b)
                return c;
            m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }
        f = V.needsContext.test(a) ? 0 : i.length;
        while (f--) {
            if (j = i[f], d.relative[k = j.type])
                break;
            if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                if (i.splice(f, 1), a = e.length && sa(i), !a)
                    return G.apply(c, e), c;
                break;
            }
        }
    } return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c; }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) { return 1 & a.compareDocumentPosition(n.createElement("fieldset")); }), ja(function (a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href"); }) || ka("type|href|height|width", function (a, b, c) { if (!c)
        return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2); }), c.attributes && ja(function (a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value"); }) || ka("value", function (a, b, c) { if (!c && "input" === a.nodeName.toLowerCase())
        return a.defaultValue; }), ja(function (a) { return null == a.getAttribute("disabled"); }) || ka(J, function (a, b, c) { var d; if (!c)
        return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null; }), ga; }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function (a, b, c) { var d = [], e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
            if (e && r(a).is(c))
                break;
            d.push(a);
        } return d; }, z = function (a, b) { for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a); return c; }, A = r.expr.match.needsContext, B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, C = /^.[^:#\[\.,]*$/;
    function D(a, b, c) { return r.isFunction(b) ? r.grep(a, function (a, d) { return !!b.call(a, d, a) !== c; }) : b.nodeType ? r.grep(a, function (a) { return a === b !== c; }) : "string" != typeof b ? r.grep(a, function (a) { return i.call(b, a) > -1 !== c; }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) { return i.call(b, a) > -1 !== c && 1 === a.nodeType; })); }
    r.filter = function (a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) { return 1 === a.nodeType; })); }, r.fn.extend({ find: function (a) { var b, c, d = this.length, e = this; if ("string" != typeof a)
            return this.pushStack(r(a).filter(function () { for (b = 0; b < d; b++)
                if (r.contains(e[b], this))
                    return !0; })); for (c = this.pushStack([]), b = 0; b < d; b++)
            r.find(a, e[b], c); return d > 1 ? r.uniqueSort(c) : c; }, filter: function (a) { return this.pushStack(D(this, a || [], !1)); }, not: function (a) { return this.pushStack(D(this, a || [], !0)); }, is: function (a) { return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length; } });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, G = r.fn.init = function (a, b, c) { var e, f; if (!a)
        return this; if (c = c || E, "string" == typeof a) {
        if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b)
            return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
        if (e[1]) {
            if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                for (e in b)
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
            return this;
        }
        return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    } return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this); };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/, I = { children: !0, contents: !0, next: !0, prev: !0 };
    r.fn.extend({ has: function (a) { var b = r(a, this), c = b.length; return this.filter(function () { for (var a = 0; a < c; a++)
            if (r.contains(this, b[a]))
                return !0; }); }, closest: function (a, b) { var c, d = 0, e = this.length, f = [], g = "string" != typeof a && r(a); if (!A.test(a))
            for (; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    } return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f); }, index: function (a) { return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1; }, add: function (a, b) { return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b)))); }, addBack: function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)); } });
    function J(a, b) { while ((a = a[b]) && 1 !== a.nodeType)
        ; return a; }
    r.each({ parent: function (a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null; }, parents: function (a) { return y(a, "parentNode"); }, parentsUntil: function (a, b, c) { return y(a, "parentNode", c); }, next: function (a) { return J(a, "nextSibling"); }, prev: function (a) { return J(a, "previousSibling"); }, nextAll: function (a) { return y(a, "nextSibling"); }, prevAll: function (a) { return y(a, "previousSibling"); }, nextUntil: function (a, b, c) { return y(a, "nextSibling", c); }, prevUntil: function (a, b, c) { return y(a, "previousSibling", c); }, siblings: function (a) { return z((a.parentNode || {}).firstChild, a); }, children: function (a) { return z(a.firstChild); }, contents: function (a) { return a.contentDocument || r.merge([], a.childNodes); } }, function (a, b) { r.fn[a] = function (c, d) { var e = r.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e); }; });
    var K = /[^\x20\t\r\n\f]+/g;
    function L(a) { var b = {}; return r.each(a.match(K) || [], function (a, c) { b[c] = !0; }), b; }
    r.Callbacks = function (a) { a = "string" == typeof a ? L(a) : r.extend({}, a); var b, c, d, e, f = [], g = [], h = -1, i = function () { for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();
        while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
    } a.memory || (c = !1), b = !1, e && (f = c ? [] : ""); }, j = { add: function () { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { r.each(b, function (b, c) { r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c); }); }(arguments), c && !b && i()), this; }, remove: function () { return r.each(arguments, function (a, b) { var c; while ((c = r.inArray(b, f, c)) > -1)
            f.splice(c, 1), c <= h && h--; }), this; }, has: function (a) { return a ? r.inArray(a, f) > -1 : f.length > 0; }, empty: function () { return f && (f = []), this; }, disable: function () { return e = g = [], f = c = "", this; }, disabled: function () { return !f; }, lock: function () { return e = g = [], c || b || (f = c = ""), this; }, locked: function () { return !!e; }, fireWith: function (a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this; }, fire: function () { return j.fireWith(this, arguments), this; }, fired: function () { return !!d; } }; return j; };
    function M(a) { return a; }
    function N(a) { throw a; }
    function O(a, b, c) { var d; try {
        a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
    }
    catch (a) {
        c.call(void 0, a);
    } }
    r.extend({ Deferred: function (b) { var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]], d = "pending", e = { state: function () { return d; }, always: function () { return f.done(arguments).fail(arguments), this; }, "catch": function (a) { return e.then(null, a); }, pipe: function () { var a = arguments; return r.Deferred(function (b) { r.each(c, function (c, d) { var e = r.isFunction(a[d[4]]) && a[d[4]]; f[d[1]](function () { var a = e && e.apply(this, arguments); a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments); }); }), a = null; }).promise(); }, then: function (b, d, e) { var f = 0; function g(b, c, d, e) { return function () { var h = this, i = arguments, j = function () { var a, j; if (!(b < f)) {
                if (a = d.apply(h, i), a === c.promise())
                    throw new TypeError("Thenable self-resolution");
                j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
            } }, k = e ? j : function () { try {
                j();
            }
            catch (a) {
                r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
            } }; b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k)); }; } return r.Deferred(function (a) { c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N)); }).promise(); }, promise: function (a) { return null != a ? r.extend(a, e) : e; } }, f = {}; return r.each(c, function (a, b) { var g = b[2], h = b[5]; e[b[1]] = g.add, h && g.add(function () { d = h; }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () { return f[b[0] + "With"](this === f ? void 0 : this, arguments), this; }, f[b[0] + "With"] = g.fireWith; }), e.promise(f), b && b.call(f, f), f; }, when: function (a) { var b = arguments.length, c = b, d = Array(c), e = f.call(arguments), g = r.Deferred(), h = function (a) { return function (c) { d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e); }; }; if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then)))
            return g.then(); while (c--)
            O(e[c], h(c), g.reject); return g.promise(); } });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function (b, c) { a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c); }, r.readyException = function (b) { a.setTimeout(function () { throw b; }); };
    var Q = r.Deferred();
    r.fn.ready = function (a) { return Q.then(a)["catch"](function (a) { r.readyException(a); }), this; }, r.extend({ isReady: !1, readyWait: 1, holdReady: function (a) { a ? r.readyWait++ : r.ready(!0); }, ready: function (a) { (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r])); } }), r.ready.then = Q.then;
    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready();
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function (a, b, c, d, e, f, g) { var h = 0, i = a.length, j = null == c; if ("object" === r.type(c)) {
        e = !0;
        for (h in c)
            S(a, b, h, c[h], !0, f, g);
    }
    else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) { return j.call(r(a), c); })), b))
        for (; h < i; h++)
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f; }, T = function (a) { return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType; };
    function U() { this.expando = r.expando + U.uid++; }
    U.uid = 1, U.prototype = { cache: function (a) { var b = a[this.expando]; return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b; }, set: function (a, b, c) { var d, e = this.cache(a); if ("string" == typeof b)
            e[r.camelCase(b)] = c;
        else
            for (d in b)
                e[r.camelCase(d)] = b[d]; return e; }, get: function (a, b) { return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]; }, access: function (a, b, c) { return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b); }, remove: function (a, b) { var c, d = a[this.expando]; if (void 0 !== d) {
            if (void 0 !== b) {
                r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                while (c--)
                    delete d[b[c]];
            }
            (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
        } }, hasData: function (a) { var b = a[this.expando]; return void 0 !== b && !r.isEmptyObject(b); } };
    var V = new U, W = new U, X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Y = /[A-Z]/g;
    function Z(a) { return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a); }
    function $(a, b, c) { var d; if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = Z(c);
            }
            catch (e) { }
            W.set(a, b, c);
        }
        else
            c = void 0; return c; }
    r.extend({ hasData: function (a) { return W.hasData(a) || V.hasData(a); }, data: function (a, b, c) { return W.access(a, b, c); }, removeData: function (a, b) { W.remove(a, b); }, _data: function (a, b, c) { return V.access(a, b, c); }, _removeData: function (a, b) { V.remove(a, b); } }), r.fn.extend({ data: function (a, b) { var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) {
            if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                c = g.length;
                while (c--)
                    g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                V.set(f, "hasDataAttrs", !0);
            }
            return e;
        } return "object" == typeof a ? this.each(function () { W.set(this, a); }) : S(this, function (b) { var c; if (f && void 0 === b) {
            if (c = W.get(f, a), void 0 !== c)
                return c;
            if (c = $(f, a), void 0 !== c)
                return c;
        }
        else
            this.each(function () { W.set(this, a, b); }); }, null, b, arguments.length > 1, null, !0); }, removeData: function (a) { return this.each(function () { W.remove(this, a); }); } }), r.extend({ queue: function (a, b, c) { var d; if (a)
            return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []; }, dequeue: function (a, b) { b = b || "fx"; var c = r.queue(a, b), d = c.length, e = c.shift(), f = r._queueHooks(a, b), g = function () { r.dequeue(a, b); }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire(); }, _queueHooks: function (a, b) { var c = b + "queueHooks"; return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () { V.remove(a, [b + "queue", c]); }) }); } }), r.fn.extend({ queue: function (a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () { var c = r.queue(this, a, b); r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a); }); }, dequeue: function (a) { return this.each(function () { r.dequeue(this, a); }); }, clearQueue: function (a) { return this.queue(a || "fx", []); }, promise: function (a, b) { var c, d = 1, e = r.Deferred(), f = this, g = this.length, h = function () { --d || e.resolveWith(f, [f]); }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--)
            c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b); } });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"), ba = ["Top", "Right", "Bottom", "Left"], ca = function (a, b) { return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display"); }, da = function (a, b, c, d) { var e, f, g = {}; for (f in b)
        g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d || []); for (f in b)
        a.style[f] = g[f]; return e; };
    function ea(a, b, c, d) { var e, f = 1, g = 20, h = d ? function () { return d.cur(); } : function () { return r.css(a, b, ""); }, i = h(), j = c && c[3] || (r.cssNumber[b] ? "" : "px"), k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b)); if (k && k[3] !== j) {
        j = j || k[3], c = c || [], k = +i || 1;
        do
            f = f || ".5", k /= f, r.style(a, b, k + j);
        while (f !== (f = h() / i) && 1 !== f && --g);
    } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e; }
    var fa = {};
    function ga(a) { var b, c = a.ownerDocument, d = a.nodeName, e = fa[d]; return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e); }
    function ha(a, b) { for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
        d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c))); for (f = 0; f < g; f++)
        null != e[f] && (a[f].style.display = e[f]); return a; }
    r.fn.extend({ show: function () { return ha(this, !0); }, hide: function () { return ha(this); }, toggle: function (a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () { ca(this) ? r(this).show() : r(this).hide(); }); } });
    var ia = /^(?:checkbox|radio)$/i, ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ka = /^$|\/(?:java|ecma)script/i, la = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;
    function ma(a, b) { var c; return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c; }
    function na(a, b) { for (var c = 0, d = a.length; c < d; c++)
        V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval")); }
    var oa = /<|&#?\w+;/;
    function pa(a, b, c, d, e) { for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
        if (f = a[n], f || 0 === f)
            if ("object" === r.type(f))
                r.merge(m, f.nodeType ? [f] : f);
            else if (oa.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
                while (k--)
                    g = g.lastChild;
                r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            }
            else
                m.push(b.createTextNode(f)); l.textContent = "", n = 0; while (f = m[n++])
        if (d && r.inArray(f, d) > -1)
            e && e.push(f);
        else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++])
                ka.test(f.type || "") && c.push(f);
        } return l; }
    !function () { var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input"); c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue; }();
    var qa = d.documentElement, ra = /^key/, sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ta = /^([^.]*)(?:\.(.+)|)/;
    function ua() { return !0; }
    function va() { return !1; }
    function wa() { try {
        return d.activeElement;
    }
    catch (a) { } }
    function xa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) {
        "string" != typeof c && (d = d || c, c = void 0);
        for (h in b)
            xa(a, h, c, d, b[h], f);
        return a;
    } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1)
        e = va;
    else if (!e)
        return a; return 1 === f && (g = e, e = function (a) { return r().off(a), g.apply(this, arguments); }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () { r.event.add(this, b, e, d, c); }); }
    r.event = { global: {}, add: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a); if (q) {
            c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) { return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0; }), b = (b || "").match(K) || [""], j = b.length;
            while (j--)
                h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        } }, remove: function (a, b, c, d, e) { var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a); if (q && (i = q.events)) {
            b = (b || "").match(K) || [""], j = b.length;
            while (j--)
                if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)
                        k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                }
                else
                    for (n in i)
                        r.event.remove(a, n + b[j], c, d, !0);
            r.isEmptyObject(i) && V.remove(a, "handle events");
        } }, dispatch: function (a) { var b = r.event.fix(a), c, d, e, f, g, h, i = new Array(arguments.length), j = (V.get(this, "events") || {})[b.type] || [], k = r.event.special[b.type] || {}; for (i[0] = b, c = 1; c < arguments.length; c++)
            i[c] = arguments[c]; if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
            h = r.event.handlers.call(this, b, j), c = 0;
            while ((f = h[c++]) && !b.isPropagationStopped()) {
                b.currentTarget = f.elem, d = 0;
                while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
                    b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
            }
            return k.postDispatch && k.postDispatch.call(this, b), b.result;
        } }, handlers: function (a, b) { var c, d, e, f, g, h = [], i = b.delegateCount, j = a.target; if (i && j.nodeType && !("click" === a.type && a.button >= 1))
            for (; j !== this; j = j.parentNode || this)
                if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                    for (f = [], g = {}, c = 0; c < i; c++)
                        d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                    f.length && h.push({ elem: j, handlers: f });
                } return j = this, i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h; }, addProp: function (a, b) { Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () { if (this.originalEvent)
                return b(this.originalEvent); } : function () { if (this.originalEvent)
                return this.originalEvent[a]; }, set: function (b) { Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b }); } }); }, fix: function (a) { return a[r.expando] ? a : new r.Event(a); }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== wa() && this.focus)
                    return this.focus(), !1; }, delegateType: "focusin" }, blur: { trigger: function () { if (this === wa() && this.blur)
                    return this.blur(), !1; }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && r.nodeName(this, "input"))
                    return this.click(), !1; }, _default: function (a) { return r.nodeName(a.target, "a"); } }, beforeunload: { postDispatch: function (a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result); } } } }, r.removeEvent = function (a, b, c) { a.removeEventListener && a.removeEventListener(b, c); }, r.Event = function (a, b) { return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b); }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: va, isPropagationStopped: va, isImmediatePropagationStopped: va, isSimulated: !1, preventDefault: function () { var a = this.originalEvent; this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault(); }, stopPropagation: function () { var a = this.originalEvent; this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation(); }, stopImmediatePropagation: function () { var a = this.originalEvent; this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation(); } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (a) { var b = a.button; return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which; } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) { r.event.special[a] = { delegateType: b, bindType: b, handle: function (a) { var c, d = this, e = a.relatedTarget, f = a.handleObj; return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c; } }; }), r.fn.extend({ on: function (a, b, c, d) { return xa(this, a, b, c, d); }, one: function (a, b, c, d) { return xa(this, a, b, c, d, 1); }, off: function (a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj)
            return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) {
            for (e in a)
                this.off(e, b, a[e]);
            return this;
        } return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function () { r.event.remove(this, a, c, b); }); } });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, za = /<script|<style|<link/i, Aa = /checked\s*(?:[^=]|=\s*.checked.)/i, Ba = /^true\/(.*)/, Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Da(a, b) { return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a; }
    function Ea(a) { return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a; }
    function Fa(a) { var b = Ba.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a; }
    function Ga(a, b) { var c, d, e, f, g, h, i, j; if (1 === b.nodeType) {
        if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
            delete g.handle, g.events = {};
            for (e in j)
                for (c = 0, d = j[e].length; c < d; c++)
                    r.event.add(b, e, j[e][c]);
        }
        W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
    } }
    function Ha(a, b) { var c = b.nodeName.toLowerCase(); "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue); }
    function Ia(a, b, c, d) { b = g.apply([], b); var e, f, h, i, j, k, l = 0, m = a.length, n = m - 1, q = b[0], s = r.isFunction(q); if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q))
        return a.each(function (e) { var f = a.eq(e); s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d); }); if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
        for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++)
            j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
        if (i)
            for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++)
                j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k));
    } return a; }
    function Ja(a, b, c) { for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
        c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d)); return a; }
    r.extend({ htmlPrefilter: function (a) { return a.replace(ya, "<$1></$2>"); }, clone: function (a, b, c) { var d, e, f, g, h = a.cloneNode(!0), i = r.contains(a.ownerDocument, a); if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
            for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++)
                Ha(f[d], g[d]); if (b)
            if (c)
                for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++)
                    Ga(f[d], g[d]);
            else
                Ga(a, h); return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h; }, cleanData: function (a) { for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
            if (T(c)) {
                if (b = c[V.expando]) {
                    if (b.events)
                        for (d in b.events)
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[V.expando] = void 0;
                }
                c[W.expando] && (c[W.expando] = void 0);
            } } }), r.fn.extend({ detach: function (a) { return Ja(this, a, !0); }, remove: function (a) { return Ja(this, a); }, text: function (a) { return S(this, function (a) { return void 0 === a ? r.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a); }); }, null, a, arguments.length); }, append: function () { return Ia(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = Da(this, a);
            b.appendChild(a);
        } }); }, prepend: function () { return Ia(this, arguments, function (a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = Da(this, a);
            b.insertBefore(a, b.firstChild);
        } }); }, before: function () { return Ia(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this); }); }, after: function () { return Ia(this, arguments, function (a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling); }); }, empty: function () { for (var a, b = 0; null != (a = this[b]); b++)
            1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = ""); return this; }, clone: function (a, b) { return a = null != a && a, b = null == b ? a : b, this.map(function () { return r.clone(this, a, b); }); }, html: function (a) { return S(this, function (a) { var b = this[0] || {}, c = 0, d = this.length; if (void 0 === a && 1 === b.nodeType)
            return b.innerHTML; if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = r.htmlPrefilter(a);
            try {
                for (; c < d; c++)
                    b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                b = 0;
            }
            catch (e) { }
        } b && this.empty().append(a); }, null, a, arguments.length); }, replaceWith: function () { var a = []; return Ia(this, arguments, function (b) { var c = this.parentNode; r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this)); }, a); } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) { r.fn[a] = function (a) { for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get()); return this.pushStack(d); }; });
    var Ka = /^margin/, La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"), Ma = function (b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b); };
    !function () { function b() { if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null;
    } } var c, e, f, g, h = d.createElement("div"), i = d.createElement("div"); i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function () { return b(), c; }, boxSizingReliable: function () { return b(), e; }, pixelMarginRight: function () { return b(), f; }, reliableMarginLeft: function () { return b(), g; } })); }();
    function Na(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g; }
    function Oa(a, b) { return { get: function () { return a() ? void delete this.get : (this.get = b).apply(this, arguments); } }; }
    var Pa = /^(none|table(?!-c[ea]).+)/, Qa = { position: "absolute", visibility: "hidden", display: "block" }, Ra = { letterSpacing: "0", fontWeight: "400" }, Sa = ["Webkit", "Moz", "ms"], Ta = d.createElement("div").style;
    function Ua(a) { if (a in Ta)
        return a; var b = a[0].toUpperCase() + a.slice(1), c = Sa.length; while (c--)
        if (a = Sa[c] + b, a in Ta)
            return a; }
    function Va(a, b, c) { var d = aa.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b; }
    function Wa(a, b, c, d, e) { var f, g = 0; for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)
        "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e))); return g; }
    function Xa(a, b, c) { var d, e = !0, f = Ma(a), g = "border-box" === r.css(a, "boxSizing", !1, f); if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
        if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d))
            return d;
        e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
    } return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"; }
    r.extend({ cssHooks: { opacity: { get: function (a, b) { if (b) {
                    var c = Na(a, "opacity");
                    return "" === c ? "1" : c;
                } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function (a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = r.camelCase(b), i = a.style;
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
        } }, css: function (a, b, c, d) { var e, f, g, h = r.camelCase(b); return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e; } }), r.each(["height", "width"], function (a, b) { r.cssHooks[b] = { get: function (a, c, d) { if (c)
            return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function () { return Xa(a, b, d); }); }, set: function (a, c, d) { var e, f = d && Ma(a), g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f); return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g); } }; }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) { if (b)
        return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, { marginLeft: 0 }, function () { return a.getBoundingClientRect().left; })) + "px"; }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) { r.cssHooks[a + b] = { expand: function (c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++)
            e[a + ba[d] + b] = f[d] || f[d - 2] || f[0]; return e; } }, Ka.test(a) || (r.cssHooks[a + b].set = Va); }), r.fn.extend({ css: function (a, b) { return S(this, function (a, b, c) { var d, e, f = {}, g = 0; if (r.isArray(b)) {
            for (d = Ma(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d);
            return f;
        } return void 0 !== c ? r.style(a, b, c) : r.css(a, b); }, a, b, arguments.length > 1); } });
    function Ya(a, b, c, d, e) { return new Ya.prototype.init(a, b, c, d, e); }
    r.Tween = Ya, Ya.prototype = { constructor: Ya, init: function (a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px"); }, cur: function () { var a = Ya.propHooks[this.prop]; return a && a.get ? a.get(this) : Ya.propHooks._default.get(this); }, run: function (a) { var b, c = Ya.propHooks[this.prop]; return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this; } }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = { _default: { get: function (a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0); }, set: function (a) { r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit); } } }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = { set: function (a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now); } }, r.easing = { linear: function (a) { return a; }, swing: function (a) { return .5 - Math.cos(a * Math.PI) / 2; }, _default: "swing" }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/, ab = /queueHooks$/;
    function bb() { $a && (a.requestAnimationFrame(bb), r.fx.tick()); }
    function cb() { return a.setTimeout(function () { Za = void 0; }), Za = r.now(); }
    function db(a, b) { var c, d = 0, e = { height: a }; for (b = b ? 1 : 0; d < 4; d += 2 - b)
        c = ba[d], e["margin" + c] = e["padding" + c] = a; return b && (e.opacity = e.width = a), e; }
    function eb(a, b, c) { for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
        if (d = e[f].call(c, b, a))
            return d; }
    function fb(a, b, c) { var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b, m = this, n = {}, o = a.style, p = a.nodeType && ca(a), q = V.get(a, "fxshow"); c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () { g.unqueued || h(); }), g.unqueued++, m.always(function () { m.always(function () { g.unqueued--, r.queue(a, "fx").length || g.empty.fire(); }); })); for (d in b)
        if (e = b[d], _a.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])
                    continue;
                p = !0;
            }
            n[d] = q && q[d] || r.style(a, d);
        } if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
        l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () { o.display = j; }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () { o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]; })), i = !1;
        for (d in n)
            i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ha([a], !0), m.done(function () { p || ha([a]), V.remove(a, "fxshow"); for (d in n)
                r.style(a, d, n[d]); })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
    } }
    function gb(a, b) { var c, d, e, f, g; for (c in a)
        if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)
                c in a || (a[c] = f[c], b[c] = e);
        }
        else
            b[d] = e; }
    function hb(a, b, c) { var d, e, f = 0, g = hb.prefilters.length, h = r.Deferred().always(function () { delete i.elem; }), i = function () { if (e)
        return !1; for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++)
        j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1); }, j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Za || cb(), duration: c.duration, tweens: [], createTween: function (b, c) { var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d; }, stop: function (b) { var c = 0, d = b ? j.tweens.length : 0; if (e)
            return this; for (e = !0; c < d; c++)
            j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this; } }), k = j.props; for (gb(k, j.opts.specialEasing); f < g; f++)
        if (d = hb.prefilters[f].call(j, a, k, j.opts))
            return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d; return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always); }
    r.Animation = r.extend(hb, { tweeners: { "*": [function (a, b) { var c = this.createTween(a, b); return ea(c.elem, a, aa.exec(b), c), c; }] }, tweener: function (a, b) { r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K); for (var c, d = 0, e = a.length; d < e; d++)
            c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b); }, prefilters: [fb], prefilter: function (a, b) { b ? hb.prefilters.unshift(a) : hb.prefilters.push(a); } }), r.speed = function (a, b, c) { var e = a && "object" == typeof a ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b }; return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () { r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue); }, e; }, r.fn.extend({ fadeTo: function (a, b, c, d) { return this.filter(ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d); }, animate: function (a, b, c, d) { var e = r.isEmptyObject(a), f = r.speed(b, c, d), g = function () { var b = hb(this, r.extend({}, a), f); (e || V.get(this, "finish")) && b.stop(!0); }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g); }, stop: function (a, b, c) { var d = function (a) { var b = a.stop; delete a.stop, b(c); }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () { var b = !0, e = null != a && a + "queueHooks", f = r.timers, g = V.get(this); if (e)
            g[e] && g[e].stop && d(g[e]);
        else
            for (e in g)
                g[e] && g[e].stop && ab.test(e) && d(g[e]); for (e = f.length; e--;)
            f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); !b && c || r.dequeue(this, a); }); }, finish: function (a) { return a !== !1 && (a = a || "fx"), this.each(function () { var b, c = V.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = r.timers, g = d ? d.length : 0; for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
            f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; b < g; b++)
            d[b] && d[b].finish && d[b].finish.call(this); delete c.finish; }); } }), r.each(["toggle", "show", "hide"], function (a, b) { var c = r.fn[b]; r.fn[b] = function (a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e); }; }), r.each({ slideDown: db("show"), slideUp: db("hide"), slideToggle: db("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) { r.fn[a] = function (a, c, d) { return this.animate(b, a, c, d); }; }), r.timers = [], r.fx.tick = function () { var a, b = 0, c = r.timers; for (Za = r.now(); b < c.length; b++)
        a = c[b], a() || c[b] !== a || c.splice(b--, 1); c.length || r.fx.stop(), Za = void 0; }, r.fx.timer = function (a) { r.timers.push(a), a() ? r.fx.start() : r.timers.pop(); }, r.fx.interval = 13, r.fx.start = function () { $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval)); }, r.fx.stop = function () { a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null; }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) { return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) { var e = a.setTimeout(c, b); d.stop = function () { a.clearTimeout(e); }; }); }, function () { var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option")); a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value; }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({ attr: function (a, b) { return S(this, r.attr, a, b, arguments.length > 1); }, removeAttr: function (a) { return this.each(function () { r.removeAttr(this, a); }); } }), r.extend({ attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                    void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function (a, b) { if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                    var c = a.value;
                    return a.setAttribute("type", b), c && (a.value = c), b;
                } } } }, removeAttr: function (a, b) { var c, d = 0, e = b && b.match(K); if (e && 1 === a.nodeType)
            while (c = e[d++])
                a.removeAttribute(c); } }), ib = { set: function (a, b, c) { return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c; } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) { var c = jb[b] || r.find.attr; jb[b] = function (a, b, d) { var e, f, g = b.toLowerCase(); return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e; }; });
    var kb = /^(?:input|select|textarea|button)$/i, lb = /^(?:a|area)$/i;
    r.fn.extend({ prop: function (a, b) { return S(this, r.prop, a, b, arguments.length > 1); }, removeProp: function (a) { return this.each(function () { delete this[r.propFix[a] || a]; }); } }), r.extend({ prop: function (a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f)
            return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]; }, propHooks: { tabIndex: { get: function (a) { var b = r.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1; } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function (a) { var b = a.parentNode; return b && b.parentNode && b.parentNode.selectedIndex, null; }, set: function (a) { var b = a.parentNode; b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex); } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { r.propFix[this.toLowerCase()] = this; });
    function mb(a) { var b = a.match(K) || []; return b.join(" "); }
    function nb(a) { return a.getAttribute && a.getAttribute("class") || ""; }
    r.fn.extend({ addClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a))
            return this.each(function (b) { r(this).addClass(a.call(this, b, nb(this))); }); if ("string" == typeof a && a) {
            b = a.match(K) || [];
            while (c = this[i++])
                if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++])
                        d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = mb(d), e !== h && c.setAttribute("class", h);
                }
        } return this; }, removeClass: function (a) { var b, c, d, e, f, g, h, i = 0; if (r.isFunction(a))
            return this.each(function (b) { r(this).removeClass(a.call(this, b, nb(this))); }); if (!arguments.length)
            return this.attr("class", ""); if ("string" == typeof a && a) {
            b = a.match(K) || [];
            while (c = this[i++])
                if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++])
                        while (d.indexOf(" " + f + " ") > -1)
                            d = d.replace(" " + f + " ", " ");
                    h = mb(d), e !== h && c.setAttribute("class", h);
                }
        } return this; }, toggleClass: function (a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) { r(this).toggleClass(a.call(this, c, nb(this), b), b); }) : this.each(function () { var b, d, e, f; if ("string" === c) {
            d = 0, e = r(this), f = a.match(K) || [];
            while (b = f[d++])
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        }
        else
            void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || "")); }); }, hasClass: function (a) { var b, c, d = 0; b = " " + a + " "; while (c = this[d++])
            if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1)
                return !0; return !1; } });
    var ob = /\r/g;
    r.fn.extend({ val: function (a) { var b, c, d, e = this[0]; {
            if (arguments.length)
                return d = r.isFunction(a), this.each(function (c) { var e; 1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) { return null == a ? "" : a + ""; })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)); });
            if (e)
                return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c);
        } } }), r.extend({ valHooks: { option: { get: function (a) { var b = r.find.attr(a, "value"); return null != b ? b : mb(r.text(a)); } }, select: { get: function (a) { var b, c, d, e = a.options, f = a.selectedIndex, g = "select-one" === a.type, h = g ? null : [], i = g ? f + 1 : e.length; for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                    if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g)
                            return b;
                        h.push(b);
                    } return h; }, set: function (a, b) { var c, d, e = a.options, f = r.makeArray(b), g = e.length; while (g--)
                    d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0); return c || (a.selectedIndex = -1), f; } } } }), r.each(["radio", "checkbox"], function () { r.valHooks[this] = { set: function (a, b) { if (r.isArray(b))
            return a.checked = r.inArray(r(a).val(), b) > -1; } }, o.checkOn || (r.valHooks[this].get = function (a) { return null === a.getAttribute("value") ? "on" : a.value; }); });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, { trigger: function (b, c, e, f) { var g, h, i, j, k, m, n, o = [e || d], p = l.call(b, "type") ? b.type : b, q = l.call(b, "namespace") ? b.namespace.split(".") : []; if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
            if (!f && !n.noBubble && !r.isWindow(e)) {
                for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode)
                    o.push(h), i = h;
                i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
            }
            g = 0;
            while ((h = o[g++]) && !b.isPropagationStopped())
                b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
            return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
        } }, simulate: function (a, b, c) { var d = r.extend(new r.Event, c, { type: a, isSimulated: !0 }); r.event.trigger(d, null, b); } }), r.fn.extend({ trigger: function (a, b) { return this.each(function () { r.event.trigger(a, b, this); }); }, triggerHandler: function (a, b) { var c = this[0]; if (c)
            return r.event.trigger(a, b, c, !0); } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) { r.fn[b] = function (a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b); }; }), r.fn.extend({ hover: function (a, b) { return this.mouseenter(a).mouseleave(b || a); } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) { var c = function (a) { r.event.simulate(b, a.target, r.event.fix(a)); }; r.event.special[b] = { setup: function () { var d = this.ownerDocument || this, e = V.access(d, b); e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1); }, teardown: function () { var d = this.ownerDocument || this, e = V.access(d, b) - 1; e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b)); } }; });
    var qb = a.location, rb = r.now(), sb = /\?/;
    r.parseXML = function (b) { var c; if (!b || "string" != typeof b)
        return null; try {
        c = (new a.DOMParser).parseFromString(b, "text/xml");
    }
    catch (d) {
        c = void 0;
    } return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c; };
    var tb = /\[\]$/, ub = /\r?\n/g, vb = /^(?:submit|button|image|reset|file)$/i, wb = /^(?:input|select|textarea|keygen)/i;
    function xb(a, b, c, d) { var e; if (r.isArray(b))
        r.each(b, function (b, e) { c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d); });
    else if (c || "object" !== r.type(b))
        d(a, b);
    else
        for (e in b)
            xb(a + "[" + e + "]", b[e], c, d); }
    r.param = function (a, b) { var c, d = [], e = function (a, b) { var c = r.isFunction(b) ? b() : b; d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c); }; if (r.isArray(a) || a.jquery && !r.isPlainObject(a))
        r.each(a, function () { e(this.name, this.value); });
    else
        for (c in a)
            xb(c, a[c], b, e); return d.join("&"); }, r.fn.extend({ serialize: function () { return r.param(this.serializeArray()); }, serializeArray: function () { return this.map(function () { var a = r.prop(this, "elements"); return a ? r.makeArray(a) : this; }).filter(function () { var a = this.type; return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a)); }).map(function (a, b) { var c = r(this).val(); return null == c ? null : r.isArray(c) ? r.map(c, function (a) { return { name: b.name, value: a.replace(ub, "\r\n") }; }) : { name: b.name, value: c.replace(ub, "\r\n") }; }).get(); } });
    var yb = /%20/g, zb = /#.*$/, Ab = /([?&])_=[^&]*/, Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm, Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Db = /^(?:GET|HEAD)$/, Eb = /^\/\//, Fb = {}, Gb = {}, Hb = "*/".concat("*"), Ib = d.createElement("a");
    Ib.href = qb.href;
    function Jb(a) { return function (b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0, f = b.toLowerCase().match(K) || []; if (r.isFunction(c))
        while (d = f[e++])
            "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c); }; }
    function Kb(a, b, c, d) { var e = {}, f = a === Gb; function g(h) { var i; return e[h] = !0, r.each(a[h] || [], function (a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1); }), i; } return g(b.dataTypes[0]) || !e["*"] && g("*"); }
    function Lb(a, b) { var c, d, e = r.ajaxSettings.flatOptions || {}; for (c in b)
        void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]); return d && r.extend(!0, a, d), a; }
    function Mb(a, b, c) { var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0])
        i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type")); if (d)
        for (e in h)
            if (h[e] && h[e].test(d)) {
                i.unshift(e);
                break;
            } if (i[0] in c)
        f = i[0];
    else {
        for (e in c) {
            if (!i[0] || a.converters[e + " " + i[0]]) {
                f = e;
                break;
            }
            g || (g = e);
        }
        f = f || g;
    } if (f)
        return f !== i[0] && i.unshift(f), c[f]; }
    function Nb(a, b, c, d) { var e, f, g, h, i, j = {}, k = a.dataTypes.slice(); if (k[1])
        for (g in a.converters)
            j[g.toLowerCase()] = a.converters[g]; f = k.shift(); while (f)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
            if ("*" === f)
                f = i;
            else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break;
                        }
                if (g !== !0)
                    if (g && a["throws"])
                        b = g(b);
                    else
                        try {
                            b = g(b);
                        }
                        catch (l) {
                            return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                        }
            } return { state: "success", data: b }; }
    r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (a, b) { return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a); }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function (b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c), p = o.context || o, q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event, s = r.Deferred(), t = r.Callbacks("once memory"), u = o.statusCode || {}, v = {}, w = {}, x = "canceled", y = { readyState: 0, getResponseHeader: function (a) { var b; if (k) {
                if (!h) {
                    h = {};
                    while (b = Bb.exec(g))
                        h[b[1].toLowerCase()] = b[2];
                }
                b = h[a.toLowerCase()];
            } return null == b ? null : b; }, getAllResponseHeaders: function () { return k ? g : null; }, setRequestHeader: function (a, b) { return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this; }, overrideMimeType: function (a) { return null == k && (o.mimeType = a), this; }, statusCode: function (a) { var b; if (a)
                if (k)
                    y.always(a[y.status]);
                else
                    for (b in a)
                        u[b] = [u[b], a[b]]; return this; }, abort: function (a) { var b = a || x; return e && e.abort(b), A(0, b), this; } }; if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
            j = d.createElement("a");
            try {
                j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
            }
            catch (z) {
                o.crossDomain = !0;
            }
        } if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k)
            return y; l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]); for (m in o.headers)
            y.setRequestHeader(m, o.headers[m]); if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
            return y.abort(); if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
            if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k)
                return y;
            o.async && o.timeout > 0 && (i = a.setTimeout(function () { y.abort("timeout"); }, o.timeout));
            try {
                k = !1, e.send(v, A);
            }
            catch (z) {
                if (k)
                    throw z;
                A(-1, z);
            }
        }
        else
            A(-1, "No Transport"); function A(b, c, d, h) { var j, m, n, v, w, x = c; k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop"))); } return y; }, getJSON: function (a, b, c) { return r.get(a, b, c, "json"); }, getScript: function (a, b) { return r.get(a, void 0, b, "script"); } }), r.each(["get", "post"], function (a, b) { r[b] = function (a, c, d, e) { return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a)); }; }), r._evalUrl = function (a) { return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }); }, r.fn.extend({ wrapAll: function (a) { var b; return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () { var a = this; while (a.firstElementChild)
            a = a.firstElementChild; return a; }).append(this)), this; }, wrapInner: function (a) { return r.isFunction(a) ? this.each(function (b) { r(this).wrapInner(a.call(this, b)); }) : this.each(function () { var b = r(this), c = b.contents(); c.length ? c.wrapAll(a) : b.append(a); }); }, wrap: function (a) { var b = r.isFunction(a); return this.each(function (c) { r(this).wrapAll(b ? a.call(this, c) : a); }); }, unwrap: function (a) { return this.parent(a).not("body").each(function () { r(this).replaceWith(this.childNodes); }), this; } }), r.expr.pseudos.hidden = function (a) { return !r.expr.pseudos.visible(a); }, r.expr.pseudos.visible = function (a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length); }, r.ajaxSettings.xhr = function () { try {
        return new a.XMLHttpRequest;
    }
    catch (b) { } };
    var Ob = { 0: 200, 1223: 204 }, Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) { var c, d; if (o.cors || Pb && !b.crossDomain)
        return { send: function (e, f) { var g, h = b.xhr(); if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                for (g in b.xhrFields)
                    h[g] = b.xhrFields[g]; b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (g in e)
                h.setRequestHeader(g, e[g]); c = function (a) { return function () { c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders())); }; }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () { 4 === h.readyState && a.setTimeout(function () { c && d(); }); }, c = c("abort"); try {
                h.send(b.hasContent && b.data || null);
            }
            catch (i) {
                if (c)
                    throw i;
            } }, abort: function () { c && c(); } }; }), r.ajaxPrefilter(function (a) { a.crossDomain && (a.contents.script = !1); }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (a) { return r.globalEval(a), a; } } }), r.ajaxPrefilter("script", function (a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET"); }), r.ajaxTransport("script", function (a) { if (a.crossDomain) {
        var b, c;
        return { send: function (e, f) { b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) { b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type); }), d.head.appendChild(b[0]); }, abort: function () { c && c(); } };
    } });
    var Qb = [], Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var a = Qb.pop() || r.expando + "_" + rb++; return this[a] = !0, a; } }), r.ajaxPrefilter("json jsonp", function (b, c, d) { var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data"); if (h || "jsonp" === b.dataTypes[0])
        return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () { return g || r.error(e + " was not called"), g[0]; }, b.dataTypes[0] = "json", f = a[e], a[e] = function () { g = arguments; }, d.always(function () { void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0; }), "script"; }), o.createHTMLDocument = function () { var a = d.implementation.createHTMLDocument("").body; return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length; }(), r.parseHTML = function (a, b, c) { if ("string" != typeof a)
        return []; "boolean" == typeof b && (c = b, b = !1); var e, f, g; return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes)); }, r.fn.load = function (a, b, c) { var d, e, f, g = this, h = a.indexOf(" "); return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) { f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a); }).always(c && function (a, b) { g.each(function () { c.apply(this, f || [a.responseText, b, a]); }); }), this; }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) { r.fn[b] = function (a) { return this.on(b, a); }; }), r.expr.pseudos.animated = function (a) { return r.grep(r.timers, function (b) { return a === b.elem; }).length; };
    function Sb(a) { return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView; }
    r.offset = { setOffset: function (a, b, c) { var d, e, f, g, h, i, j, k = r.css(a, "position"), l = r(a), m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m); } }, r.fn.extend({ offset: function (a) { if (arguments.length)
            return void 0 === a ? this : this.each(function (b) { r.offset.setOffset(this, a, b); }); var b, c, d, e, f = this[0]; if (f)
            return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 }; }, position: function () { if (this[0]) {
            var a, b, c = this[0], d = { top: 0, left: 0 };
            return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
        } }, offsetParent: function () { return this.map(function () { var a = this.offsetParent; while (a && "static" === r.css(a, "position"))
            a = a.offsetParent; return a || qa; }); } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) { var c = "pageYOffset" === b; r.fn[a] = function (d) { return S(this, function (a, d, e) { var f = Sb(a); return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e); }, a, d, arguments.length); }; }), r.each(["top", "left"], function (a, b) { r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) { if (c)
        return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c; }); }), r.each({ Height: "height", Width: "width" }, function (a, b) { r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) { r.fn[d] = function (e, f) { var g = arguments.length && (c || "boolean" != typeof e), h = c || (e === !0 || f === !0 ? "margin" : "border"); return S(this, function (b, c, e) { var f; return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h); }, b, g ? e : void 0, g); }; }); }), r.fn.extend({ bind: function (a, b, c) { return this.on(a, null, b, c); }, unbind: function (a, b) { return this.off(a, null, b); }, delegate: function (a, b, c, d) { return this.on(b, a, c, d); }, undelegate: function (a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c); } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () { return r; });
    var Tb = a.jQuery, Ub = a.$;
    return r.noConflict = function (b) { return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r; }, b || (a.jQuery = a.$ = r), r;
});
/*!
 * Globalize
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (window, undefined) {
    var Globalize, 
    // private variables
    regexHex, regexInfinity, regexParseFloat, regexTrim, 
    // private JavaScript utility functions
    arrayIndexOf, endsWith, extend, isArray, isFunction, isObject, startsWith, trim, truncate, zeroPad, 
    // private Globalization utility functions
    appendPreOrPostMatch, expandFormat, formatDate, formatNumber, getTokenRegExp, getEra, getEraYear, parseExact, parseNegativePattern;
    // Global variable (Globalize) or CommonJS module (globalize)
    Globalize = function (cultureSelector) {
        return new Globalize.prototype.init(cultureSelector);
    };
    if (typeof require !== "undefined" &&
        typeof exports !== "undefined" &&
        typeof module !== "undefined") {
        // Assume CommonJS
        module.exports = Globalize;
    }
    else {
        // Export as global variable
        window.Globalize = Globalize;
    }
    Globalize.cultures = {};
    Globalize.prototype = {
        constructor: Globalize,
        init: function (cultureSelector) {
            this.cultures = Globalize.cultures;
            this.cultureSelector = cultureSelector;
            return this;
        }
    };
    Globalize.prototype.init.prototype = Globalize.prototype;
    // 1. When defining a culture, all fields are required except the ones stated as optional.
    // 2. Each culture should have a ".calendars" object with at least one calendar named "standard"
    //    which serves as the default calendar in use by that culture.
    // 3. Each culture should have a ".calendar" object which is the current calendar being used,
    //    it may be dynamically changed at any time to one of the calendars in ".calendars".
    Globalize.cultures["default"] = {
        // A unique name for the culture in the form <language code>-<country/region code>
        name: "en",
        // the name of the culture in the english language
        englishName: "English",
        // the name of the culture in its own language
        nativeName: "English",
        // whether the culture uses right-to-left text
        isRTL: false,
        // "language" is used for so-called "specific" cultures.
        // For example, the culture "es-CL" means "Spanish, in Chili".
        // It represents the Spanish-speaking culture as it is in Chili,
        // which might have different formatting rules or even translations
        // than Spanish in Spain. A "neutral" culture is one that is not
        // specific to a region. For example, the culture "es" is the generic
        // Spanish culture, which may be a more generalized version of the language
        // that may or may not be what a specific culture expects.
        // For a specific culture like "es-CL", the "language" field refers to the
        // neutral, generic culture information for the language it is using.
        // This is not always a simple matter of the string before the dash.
        // For example, the "zh-Hans" culture is netural (Simplified Chinese).
        // And the "zh-SG" culture is Simplified Chinese in Singapore, whose lanugage
        // field is "zh-CHS", not "zh".
        // This field should be used to navigate from a specific culture to it's
        // more general, neutral culture. If a culture is already as general as it
        // can get, the language may refer to itself.
        language: "en",
        // numberFormat defines general number formatting rules, like the digits in
        // each grouping, the group separator, and how negative numbers are displayed.
        numberFormat: {
            // [negativePattern]
            // Note, numberFormat.pattern has no "positivePattern" unlike percent and currency,
            // but is still defined as an array for consistency with them.
            //   negativePattern: one of "(n)|-n|- n|n-|n -"
            pattern: ["-n"],
            // number of decimal places normally shown
            decimals: 2,
            // string that separates number groups, as in 1,000,000
            ",": ",",
            // string that separates a number from the fractional portion, as in 1.99
            ".": ".",
            // array of numbers indicating the size of each number group.
            // TODO: more detailed description and example
            groupSizes: [3],
            // symbol used for positive numbers
            "+": "+",
            // symbol used for negative numbers
            "-": "-",
            // symbol used for NaN (Not-A-Number)
            "NaN": "NaN",
            // symbol used for Negative Infinity
            negativeInfinity: "-Infinity",
            // symbol used for Positive Infinity
            positiveInfinity: "Infinity",
            percent: {
                // [negativePattern, positivePattern]
                //   negativePattern: one of "-n %|-n%|-%n|%-n|%n-|n-%|n%-|-% n|n %-|% n-|% -n|n- %"
                //   positivePattern: one of "n %|n%|%n|% n"
                pattern: ["-n %", "n %"],
                // number of decimal places normally shown
                decimals: 2,
                // array of numbers indicating the size of each number group.
                // TODO: more detailed description and example
                groupSizes: [3],
                // string that separates number groups, as in 1,000,000
                ",": ",",
                // string that separates a number from the fractional portion, as in 1.99
                ".": ".",
                // symbol used to represent a percentage
                symbol: "%"
            },
            currency: {
                // [negativePattern, positivePattern]
                //   negativePattern: one of "($n)|-$n|$-n|$n-|(n$)|-n$|n-$|n$-|-n $|-$ n|n $-|$ n-|$ -n|n- $|($ n)|(n $)"
                //   positivePattern: one of "$n|n$|$ n|n $"
                pattern: ["($n)", "$n"],
                // number of decimal places normally shown
                decimals: 2,
                // array of numbers indicating the size of each number group.
                // TODO: more detailed description and example
                groupSizes: [3],
                // string that separates number groups, as in 1,000,000
                ",": ",",
                // string that separates a number from the fractional portion, as in 1.99
                ".": ".",
                // symbol used to represent currency
                symbol: "$"
            }
        },
        // calendars defines all the possible calendars used by this culture.
        // There should be at least one defined with name "standard", and is the default
        // calendar used by the culture.
        // A calendar contains information about how dates are formatted, information about
        // the calendar's eras, a standard set of the date formats,
        // translations for day and month names, and if the calendar is not based on the Gregorian
        // calendar, conversion functions to and from the Gregorian calendar.
        calendars: {
            standard: {
                // name that identifies the type of calendar this is
                name: "Gregorian_USEnglish",
                // separator of parts of a date (e.g. "/" in 11/05/1955)
                "/": "/",
                // separator of parts of a time (e.g. ":" in 05:44 PM)
                ":": ":",
                // the first day of the week (0 = Sunday, 1 = Monday, etc)
                firstDay: 0,
                days: {
                    // full day names
                    names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    // abbreviated day names
                    namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    // shortest day names
                    namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                },
                months: {
                    // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                    names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                    // abbreviated month names
                    namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
                },
                // AM and PM designators in one of these forms:
                // The usual view, and the upper and lower case versions
                //   [ standard, lowercase, uppercase ]
                // The culture does not use AM or PM (likely all standard date formats use 24 hour time)
                //   null
                AM: ["AM", "am", "AM"],
                PM: ["PM", "pm", "PM"],
                eras: [
                    // eras in reverse chronological order.
                    // name: the name of the era in this culture (e.g. A.D., C.E.)
                    // start: when the era starts in ticks (gregorian, gmt), null if it is the earliest supported era.
                    // offset: offset in years from gregorian calendar
                    {
                        "name": "A.D.",
                        "start": null,
                        "offset": 0
                    }
                ],
                // when a two digit year is given, it will never be parsed as a four digit
                // year greater than this year (in the appropriate era for the culture)
                // Set it as a full year (e.g. 2029) or use an offset format starting from
                // the current year: "+19" would correspond to 2029 if the current year 2010.
                twoDigitYearMax: 2029,
                // set of predefined date and time patterns used by the culture
                // these represent the format someone in this culture would expect
                // to see given the portions of the date that are shown.
                patterns: {
                    // short date pattern
                    d: "M/d/yyyy",
                    // long date pattern
                    D: "dddd, MMMM dd, yyyy",
                    // short time pattern
                    t: "h:mm tt",
                    // long time pattern
                    T: "h:mm:ss tt",
                    // long date, short time pattern
                    f: "dddd, MMMM dd, yyyy h:mm tt",
                    // long date, long time pattern
                    F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                    // month/day pattern
                    M: "MMMM dd",
                    // month/year pattern
                    Y: "yyyy MMMM",
                    // S is a sortable format that does not vary by culture
                    S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss"
                }
            }
        },
        // For localized strings
        messages: {}
    };
    Globalize.cultures["default"].calendar = Globalize.cultures["default"].calendars.standard;
    Globalize.cultures.en = Globalize.cultures["default"];
    Globalize.cultureSelector = "en";
    //
    // private variables
    //
    regexHex = /^0x[a-f0-9]+$/i;
    regexInfinity = /^[+\-]?infinity$/i;
    regexParseFloat = /^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/;
    regexTrim = /^\s+|\s+$/g;
    //
    // private JavaScript utility functions
    //
    arrayIndexOf = function (array, item) {
        if (array.indexOf) {
            return array.indexOf(item);
        }
        for (var i = 0, length = array.length; i < length; i++) {
            if (array[i] === item) {
                return i;
            }
        }
        return -1;
    };
    endsWith = function (value, pattern) {
        return value.substr(value.length - pattern.length) === pattern;
    };
    extend = function () {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }
        for (; i < length; i++) {
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (isObject(copy) || (copyIsArray = isArray(copy)))) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && isArray(src) ? src : [];
                        }
                        else {
                            clone = src && isObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        target[name] = extend(deep, clone, copy);
                    }
                    else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        // Return the modified object
        return target;
    };
    isArray = Array.isArray || function (obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    isFunction = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Function]";
    };
    isObject = function (obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    };
    startsWith = function (value, pattern) {
        return value.indexOf(pattern) === 0;
    };
    trim = function (value) {
        return (value + "").replace(regexTrim, "");
    };
    truncate = function (value) {
        if (isNaN(value)) {
            return NaN;
        }
        return Math[value < 0 ? "ceil" : "floor"](value);
    };
    zeroPad = function (str, count, left) {
        var l;
        for (l = str.length; l < count; l += 1) {
            str = (left ? ("0" + str) : (str + "0"));
        }
        return str;
    };
    //
    // private Globalization utility functions
    //
    appendPreOrPostMatch = function (preMatch, strings) {
        // appends pre- and post- token match strings while removing escaped characters.
        // Returns a single quote count which is used to determine if the token occurs
        // in a string literal.
        var quoteCount = 0, escaped = false;
        for (var i = 0, il = preMatch.length; i < il; i++) {
            var c = preMatch.charAt(i);
            switch (c) {
                case "\'":
                    if (escaped) {
                        strings.push("\'");
                    }
                    else {
                        quoteCount++;
                    }
                    escaped = false;
                    break;
                case "\\":
                    if (escaped) {
                        strings.push("\\");
                    }
                    escaped = !escaped;
                    break;
                default:
                    strings.push(c);
                    escaped = false;
                    break;
            }
        }
        return quoteCount;
    };
    expandFormat = function (cal, format) {
        // expands unspecified or single character date formats into the full pattern.
        format = format || "F";
        var pattern, patterns = cal.patterns, len = format.length;
        if (len === 1) {
            pattern = patterns[format];
            if (!pattern) {
                throw "Invalid date format string \'" + format + "\'.";
            }
            format = pattern;
        }
        else if (len === 2 && format.charAt(0) === "%") {
            // %X escape format -- intended as a custom format string that is only one character, not a built-in format.
            format = format.charAt(1);
        }
        return format;
    };
    formatDate = function (value, format, culture) {
        var cal = culture.calendar, convert = cal.convert, ret;
        if (!format || !format.length || format === "i") {
            if (culture && culture.name.length) {
                if (convert) {
                    // non-gregorian calendar, so we cannot use built-in toLocaleString()
                    ret = formatDate(value, cal.patterns.F, culture);
                }
                else {
                    var eraDate = new Date(value.getTime()), era = getEra(value, cal.eras);
                    eraDate.setFullYear(getEraYear(value, cal, era));
                    ret = eraDate.toLocaleString();
                }
            }
            else {
                ret = value.toString();
            }
            return ret;
        }
        var eras = cal.eras, sortable = format === "s";
        format = expandFormat(cal, format);
        // Start with an empty string
        ret = [];
        var hour, zeros = ["0", "00", "000"], foundDay, checkedDay, dayPartRegExp = /([^d]|^)(d|dd)([^d]|$)/g, quoteCount = 0, tokenRegExp = getTokenRegExp(), converted;
        function padZeros(num, c) {
            var r, s = num + "";
            if (c > 1 && s.length < c) {
                r = (zeros[c - 2] + s);
                return r.substr(r.length - c, c);
            }
            else {
                r = s;
            }
            return r;
        }
        function hasDay() {
            if (foundDay || checkedDay) {
                return foundDay;
            }
            foundDay = dayPartRegExp.test(format);
            checkedDay = true;
            return foundDay;
        }
        function getPart(date, part) {
            if (converted) {
                return converted[part];
            }
            switch (part) {
                case 0:
                    return date.getFullYear();
                case 1:
                    return date.getMonth();
                case 2:
                    return date.getDate();
                default:
                    throw "Invalid part value " + part;
            }
        }
        if (!sortable && convert) {
            converted = convert.fromGregorian(value);
        }
        for (;;) {
            // Save the current index
            var index = tokenRegExp.lastIndex, 
            // Look for the next pattern
            ar = tokenRegExp.exec(format);
            // Append the text before the pattern (or the end of the string if not found)
            var preMatch = format.slice(index, ar ? ar.index : format.length);
            quoteCount += appendPreOrPostMatch(preMatch, ret);
            if (!ar) {
                break;
            }
            // do not replace any matches that occur inside a string literal.
            if (quoteCount % 2) {
                ret.push(ar[0]);
                continue;
            }
            var current = ar[0], clength = current.length;
            switch (current) {
                case "ddd":
                //Day of the week, as a three-letter abbreviation
                case "dddd":
                    // Day of the week, using the full name
                    var names = (clength === 3) ? cal.days.namesAbbr : cal.days.names;
                    ret.push(names[value.getDay()]);
                    break;
                case "d":
                // Day of month, without leading zero for single-digit days
                case "dd":
                    // Day of month, with leading zero for single-digit days
                    foundDay = true;
                    ret.push(padZeros(getPart(value, 2), clength));
                    break;
                case "MMM":
                // Month, as a three-letter abbreviation
                case "MMMM":
                    // Month, using the full name
                    var part = getPart(value, 1);
                    ret.push((cal.monthsGenitive && hasDay()) ?
                        (cal.monthsGenitive[clength === 3 ? "namesAbbr" : "names"][part]) :
                        (cal.months[clength === 3 ? "namesAbbr" : "names"][part]));
                    break;
                case "M":
                // Month, as digits, with no leading zero for single-digit months
                case "MM":
                    // Month, as digits, with leading zero for single-digit months
                    ret.push(padZeros(getPart(value, 1) + 1, clength));
                    break;
                case "y":
                // Year, as two digits, but with no leading zero for years less than 10
                case "yy":
                // Year, as two digits, with leading zero for years less than 10
                case "yyyy":
                    // Year represented by four full digits
                    part = converted ? converted[0] : getEraYear(value, cal, getEra(value, eras), sortable);
                    if (clength < 4) {
                        part = part % 100;
                    }
                    ret.push(padZeros(part, clength));
                    break;
                case "h":
                // Hours with no leading zero for single-digit hours, using 12-hour clock
                case "hh":
                    // Hours with leading zero for single-digit hours, using 12-hour clock
                    hour = value.getHours() % 12;
                    if (hour === 0)
                        hour = 12;
                    ret.push(padZeros(hour, clength));
                    break;
                case "H":
                // Hours with no leading zero for single-digit hours, using 24-hour clock
                case "HH":
                    // Hours with leading zero for single-digit hours, using 24-hour clock
                    ret.push(padZeros(value.getHours(), clength));
                    break;
                case "m":
                // Minutes with no leading zero for single-digit minutes
                case "mm":
                    // Minutes with leading zero for single-digit minutes
                    ret.push(padZeros(value.getMinutes(), clength));
                    break;
                case "s":
                // Seconds with no leading zero for single-digit seconds
                case "ss":
                    // Seconds with leading zero for single-digit seconds
                    ret.push(padZeros(value.getSeconds(), clength));
                    break;
                case "t":
                // One character am/pm indicator ("a" or "p")
                case "tt":
                    // Multicharacter am/pm indicator
                    part = value.getHours() < 12 ? (cal.AM ? cal.AM[0] : " ") : (cal.PM ? cal.PM[0] : " ");
                    ret.push(clength === 1 ? part.charAt(0) : part);
                    break;
                case "f":
                // Deciseconds
                case "ff":
                // Centiseconds
                case "fff":
                    // Milliseconds
                    ret.push(padZeros(value.getMilliseconds(), 3).substr(0, clength));
                    break;
                case "z":
                // Time zone offset, no leading zero
                case "zz":
                    // Time zone offset with leading zero
                    hour = value.getTimezoneOffset() / 60;
                    ret.push((hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), clength));
                    break;
                case "zzz":
                    // Time zone offset with leading zero
                    hour = value.getTimezoneOffset() / 60;
                    ret.push((hour <= 0 ? "+" : "-") + padZeros(Math.floor(Math.abs(hour)), 2) +
                        // Hard coded ":" separator, rather than using cal.TimeSeparator
                        // Repeated here for consistency, plus ":" was already assumed in date parsing.
                        ":" + padZeros(Math.abs(value.getTimezoneOffset() % 60), 2));
                    break;
                case "g":
                case "gg":
                    if (cal.eras) {
                        ret.push(cal.eras[getEra(value, eras)].name);
                    }
                    break;
                case "/":
                    ret.push(cal["/"]);
                    break;
                default:
                    throw "Invalid date format pattern \'" + current + "\'.";
            }
        }
        return ret.join("");
    };
    // formatNumber
    (function () {
        var expandNumber;
        expandNumber = function (number, precision, formatInfo) {
            var groupSizes = formatInfo.groupSizes, curSize = groupSizes[0], curGroupIndex = 1, factor = Math.pow(10, precision), rounded = Math.round(number * factor) / factor;
            if (!isFinite(rounded)) {
                rounded = number;
            }
            number = rounded;
            var numberString = number + "", right = "", split = numberString.split(/e/i), exponent = split.length > 1 ? parseInt(split[1], 10) : 0;
            numberString = split[0];
            split = numberString.split(".");
            numberString = split[0];
            right = split.length > 1 ? split[1] : "";
            var l;
            if (exponent > 0) {
                right = zeroPad(right, exponent, false);
                numberString += right.slice(0, exponent);
                right = right.substr(exponent);
            }
            else if (exponent < 0) {
                exponent = -exponent;
                numberString = zeroPad(numberString, exponent + 1, true);
                right = numberString.slice(-exponent, numberString.length) + right;
                numberString = numberString.slice(0, -exponent);
            }
            if (precision > 0) {
                right = formatInfo["."] +
                    ((right.length > precision) ? right.slice(0, precision) : zeroPad(right, precision));
            }
            else {
                right = "";
            }
            var stringIndex = numberString.length - 1, sep = formatInfo[","], ret = "";
            while (stringIndex >= 0) {
                if (curSize === 0 || curSize > stringIndex) {
                    return numberString.slice(0, stringIndex + 1) + (ret.length ? (sep + ret + right) : right);
                }
                ret = numberString.slice(stringIndex - curSize + 1, stringIndex + 1) + (ret.length ? (sep + ret) : "");
                stringIndex -= curSize;
                if (curGroupIndex < groupSizes.length) {
                    curSize = groupSizes[curGroupIndex];
                    curGroupIndex++;
                }
            }
            return numberString.slice(0, stringIndex + 1) + sep + ret + right;
        };
        formatNumber = function (value, format, culture) {
            if (!isFinite(value)) {
                if (value === Infinity) {
                    return culture.numberFormat.positiveInfinity;
                }
                if (value === -Infinity) {
                    return culture.numberFormat.negativeInfinity;
                }
                return culture.numberFormat["NaN"];
            }
            if (!format || format === "i") {
                return culture.name.length ? value.toLocaleString() : value.toString();
            }
            format = format || "D";
            var nf = culture.numberFormat, number = Math.abs(value), precision = -1, pattern;
            if (format.length > 1)
                precision = parseInt(format.slice(1), 10);
            var current = format.charAt(0).toUpperCase(), formatInfo;
            switch (current) {
                case "D":
                    pattern = "n";
                    number = truncate(number);
                    if (precision !== -1) {
                        number = zeroPad("" + number, precision, true);
                    }
                    if (value < 0)
                        number = "-" + number;
                    break;
                case "N":
                    formatInfo = nf;
                /* falls through */
                case "C":
                    formatInfo = formatInfo || nf.currency;
                /* falls through */
                case "P":
                    formatInfo = formatInfo || nf.percent;
                    pattern = value < 0 ? formatInfo.pattern[0] : (formatInfo.pattern[1] || "n");
                    if (precision === -1)
                        precision = formatInfo.decimals;
                    number = expandNumber(number * (current === "P" ? 100 : 1), precision, formatInfo);
                    break;
                default:
                    throw "Bad number format specifier: " + current;
            }
            var patternParts = /n|\$|-|%/g, ret = "";
            for (;;) {
                var index = patternParts.lastIndex, ar = patternParts.exec(pattern);
                ret += pattern.slice(index, ar ? ar.index : pattern.length);
                if (!ar) {
                    break;
                }
                switch (ar[0]) {
                    case "n":
                        ret += number;
                        break;
                    case "$":
                        ret += nf.currency.symbol;
                        break;
                    case "-":
                        // don't make 0 negative
                        if (/[1-9]/.test(number)) {
                            ret += nf["-"];
                        }
                        break;
                    case "%":
                        ret += nf.percent.symbol;
                        break;
                }
            }
            return ret;
        };
    }());
    getTokenRegExp = function () {
        // regular expression for matching date and time tokens in format strings.
        return (/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g);
    };
    getEra = function (date, eras) {
        if (!eras)
            return 0;
        var start, ticks = date.getTime();
        for (var i = 0, l = eras.length; i < l; i++) {
            start = eras[i].start;
            if (start === null || ticks >= start) {
                return i;
            }
        }
        return 0;
    };
    getEraYear = function (date, cal, era, sortable) {
        var year = date.getFullYear();
        if (!sortable && cal.eras) {
            // convert normal gregorian year to era-shifted gregorian
            // year by subtracting the era offset
            year -= cal.eras[era].offset;
        }
        return year;
    };
    // parseExact
    (function () {
        var expandYear, getDayIndex, getMonthIndex, getParseRegExp, outOfRange, toUpper, toUpperArray;
        expandYear = function (cal, year) {
            // expands 2-digit year into 4 digits.
            if (year < 100) {
                var now = new Date(), era = getEra(now), curr = getEraYear(now, cal, era), twoDigitYearMax = cal.twoDigitYearMax;
                twoDigitYearMax = typeof twoDigitYearMax === "string" ? new Date().getFullYear() % 100 + parseInt(twoDigitYearMax, 10) : twoDigitYearMax;
                year += curr - (curr % 100);
                if (year > twoDigitYearMax) {
                    year -= 100;
                }
            }
            return year;
        };
        getDayIndex = function (cal, value, abbr) {
            var ret, days = cal.days, upperDays = cal._upperDays;
            if (!upperDays) {
                cal._upperDays = upperDays = [
                    toUpperArray(days.names),
                    toUpperArray(days.namesAbbr),
                    toUpperArray(days.namesShort)
                ];
            }
            value = toUpper(value);
            if (abbr) {
                ret = arrayIndexOf(upperDays[1], value);
                if (ret === -1) {
                    ret = arrayIndexOf(upperDays[2], value);
                }
            }
            else {
                ret = arrayIndexOf(upperDays[0], value);
            }
            return ret;
        };
        getMonthIndex = function (cal, value, abbr) {
            var months = cal.months, monthsGen = cal.monthsGenitive || cal.months, upperMonths = cal._upperMonths, upperMonthsGen = cal._upperMonthsGen;
            if (!upperMonths) {
                cal._upperMonths = upperMonths = [
                    toUpperArray(months.names),
                    toUpperArray(months.namesAbbr)
                ];
                cal._upperMonthsGen = upperMonthsGen = [
                    toUpperArray(monthsGen.names),
                    toUpperArray(monthsGen.namesAbbr)
                ];
            }
            value = toUpper(value);
            var i = arrayIndexOf(abbr ? upperMonths[1] : upperMonths[0], value);
            if (i < 0) {
                i = arrayIndexOf(abbr ? upperMonthsGen[1] : upperMonthsGen[0], value);
            }
            return i;
        };
        getParseRegExp = function (cal, format) {
            // converts a format string into a regular expression with groups that
            // can be used to extract date fields from a date string.
            // check for a cached parse regex.
            var re = cal._parseRegExp;
            if (!re) {
                cal._parseRegExp = re = {};
            }
            else {
                var reFormat = re[format];
                if (reFormat) {
                    return reFormat;
                }
            }
            // expand single digit formats, then escape regular expression characters.
            var expFormat = expandFormat(cal, format).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g, "\\\\$1"), regexp = ["^"], groups = [], index = 0, quoteCount = 0, tokenRegExp = getTokenRegExp(), match;
            // iterate through each date token found.
            while ((match = tokenRegExp.exec(expFormat)) !== null) {
                var preMatch = expFormat.slice(index, match.index);
                index = tokenRegExp.lastIndex;
                // don't replace any matches that occur inside a string literal.
                quoteCount += appendPreOrPostMatch(preMatch, regexp);
                if (quoteCount % 2) {
                    regexp.push(match[0]);
                    continue;
                }
                // add a regex group for the token.
                var m = match[0], len = m.length, add;
                switch (m) {
                    case "dddd":
                    case "ddd":
                    case "MMMM":
                    case "MMM":
                    case "gg":
                    case "g":
                        add = "(\\D+)";
                        break;
                    case "tt":
                    case "t":
                        add = "(\\D*)";
                        break;
                    case "yyyy":
                    case "fff":
                    case "ff":
                    case "f":
                        add = "(\\d{" + len + "})";
                        break;
                    case "dd":
                    case "d":
                    case "MM":
                    case "M":
                    case "yy":
                    case "y":
                    case "HH":
                    case "H":
                    case "hh":
                    case "h":
                    case "mm":
                    case "m":
                    case "ss":
                    case "s":
                        add = "(\\d\\d?)";
                        break;
                    case "zzz":
                        add = "([+-]?\\d\\d?:\\d{2})";
                        break;
                    case "zz":
                    case "z":
                        add = "([+-]?\\d\\d?)";
                        break;
                    case "/":
                        add = "(\\/)";
                        break;
                    default:
                        throw "Invalid date format pattern \'" + m + "\'.";
                }
                if (add) {
                    regexp.push(add);
                }
                groups.push(match[0]);
            }
            appendPreOrPostMatch(expFormat.slice(index), regexp);
            regexp.push("$");
            // allow whitespace to differ when matching formats.
            var regexpStr = regexp.join("").replace(/\s+/g, "\\s+"), parseRegExp = { "regExp": regexpStr, "groups": groups };
            // cache the regex for this format.
            return re[format] = parseRegExp;
        };
        outOfRange = function (value, low, high) {
            return value < low || value > high;
        };
        toUpper = function (value) {
            // "he-IL" has non-breaking space in weekday names.
            return value.split("\u00A0").join(" ").toUpperCase();
        };
        toUpperArray = function (arr) {
            var results = [];
            for (var i = 0, l = arr.length; i < l; i++) {
                results[i] = toUpper(arr[i]);
            }
            return results;
        };
        parseExact = function (value, format, culture) {
            // try to parse the date string by matching against the format string
            // while using the specified culture for date field names.
            value = trim(value);
            var cal = culture.calendar, 
            // convert date formats into regular expressions with groupings.
            // use the regexp to determine the input format and extract the date fields.
            parseInfo = getParseRegExp(cal, format), match = new RegExp(parseInfo.regExp).exec(value);
            if (match === null) {
                return null;
            }
            // found a date format that matches the input.
            var groups = parseInfo.groups, era = null, year = null, month = null, date = null, weekDay = null, hour = 0, hourOffset, min = 0, sec = 0, msec = 0, tzMinOffset = null, pmHour = false;
            // iterate the format groups to extract and set the date fields.
            for (var j = 0, jl = groups.length; j < jl; j++) {
                var matchGroup = match[j + 1];
                if (matchGroup) {
                    var current = groups[j], clength = current.length, matchInt = parseInt(matchGroup, 10);
                    switch (current) {
                        case "dd":
                        case "d":
                            // Day of month.
                            date = matchInt;
                            // check that date is generally in valid range, also checking overflow below.
                            if (outOfRange(date, 1, 31))
                                return null;
                            break;
                        case "MMM":
                        case "MMMM":
                            month = getMonthIndex(cal, matchGroup, clength === 3);
                            if (outOfRange(month, 0, 11))
                                return null;
                            break;
                        case "M":
                        case "MM":
                            // Month.
                            month = matchInt - 1;
                            if (outOfRange(month, 0, 11))
                                return null;
                            break;
                        case "y":
                        case "yy":
                        case "yyyy":
                            year = clength < 4 ? expandYear(cal, matchInt) : matchInt;
                            if (outOfRange(year, 0, 9999))
                                return null;
                            break;
                        case "h":
                        case "hh":
                            // Hours (12-hour clock).
                            hour = matchInt;
                            if (hour === 12)
                                hour = 0;
                            if (outOfRange(hour, 0, 11))
                                return null;
                            break;
                        case "H":
                        case "HH":
                            // Hours (24-hour clock).
                            hour = matchInt;
                            if (outOfRange(hour, 0, 23))
                                return null;
                            break;
                        case "m":
                        case "mm":
                            // Minutes.
                            min = matchInt;
                            if (outOfRange(min, 0, 59))
                                return null;
                            break;
                        case "s":
                        case "ss":
                            // Seconds.
                            sec = matchInt;
                            if (outOfRange(sec, 0, 59))
                                return null;
                            break;
                        case "tt":
                        case "t":
                            // AM/PM designator.
                            // see if it is standard, upper, or lower case PM. If not, ensure it is at least one of
                            // the AM tokens. If not, fail the parse for this format.
                            pmHour = cal.PM && (matchGroup === cal.PM[0] || matchGroup === cal.PM[1] || matchGroup === cal.PM[2]);
                            if (!pmHour && (!cal.AM || (matchGroup !== cal.AM[0] && matchGroup !== cal.AM[1] && matchGroup !== cal.AM[2])))
                                return null;
                            break;
                        case "f":
                        // Deciseconds.
                        case "ff":
                        // Centiseconds.
                        case "fff":
                            // Milliseconds.
                            msec = matchInt * Math.pow(10, 3 - clength);
                            if (outOfRange(msec, 0, 999))
                                return null;
                            break;
                        case "ddd":
                        // Day of week.
                        case "dddd":
                            // Day of week.
                            weekDay = getDayIndex(cal, matchGroup, clength === 3);
                            if (outOfRange(weekDay, 0, 6))
                                return null;
                            break;
                        case "zzz":
                            // Time zone offset in +/- hours:min.
                            var offsets = matchGroup.split(/:/);
                            if (offsets.length !== 2)
                                return null;
                            hourOffset = parseInt(offsets[0], 10);
                            if (outOfRange(hourOffset, -12, 13))
                                return null;
                            var minOffset = parseInt(offsets[1], 10);
                            if (outOfRange(minOffset, 0, 59))
                                return null;
                            tzMinOffset = (hourOffset * 60) + (startsWith(matchGroup, "-") ? -minOffset : minOffset);
                            break;
                        case "z":
                        case "zz":
                            // Time zone offset in +/- hours.
                            hourOffset = matchInt;
                            if (outOfRange(hourOffset, -12, 13))
                                return null;
                            tzMinOffset = hourOffset * 60;
                            break;
                        case "g":
                        case "gg":
                            var eraName = matchGroup;
                            if (!eraName || !cal.eras)
                                return null;
                            eraName = trim(eraName.toLowerCase());
                            for (var i = 0, l = cal.eras.length; i < l; i++) {
                                if (eraName === cal.eras[i].name.toLowerCase()) {
                                    era = i;
                                    break;
                                }
                            }
                            // could not find an era with that name
                            if (era === null)
                                return null;
                            break;
                    }
                }
            }
            var result = new Date(), defaultYear, convert = cal.convert;
            defaultYear = convert ? convert.fromGregorian(result)[0] : result.getFullYear();
            if (year === null) {
                year = defaultYear;
            }
            else if (cal.eras) {
                // year must be shifted to normal gregorian year
                // but not if year was not specified, its already normal gregorian
                // per the main if clause above.
                year += cal.eras[(era || 0)].offset;
            }
            // set default day and month to 1 and January, so if unspecified, these are the defaults
            // instead of the current day/month.
            if (month === null) {
                month = 0;
            }
            if (date === null) {
                date = 1;
            }
            // now have year, month, and date, but in the culture's calendar.
            // convert to gregorian if necessary
            if (convert) {
                result = convert.toGregorian(year, month, date);
                // conversion failed, must be an invalid match
                if (result === null)
                    return null;
            }
            else {
                // have to set year, month and date together to avoid overflow based on current date.
                result.setFullYear(year, month, date);
                // check to see if date overflowed for specified month (only checked 1-31 above).
                if (result.getDate() !== date)
                    return null;
                // invalid day of week.
                if (weekDay !== null && result.getDay() !== weekDay) {
                    return null;
                }
            }
            // if pm designator token was found make sure the hours fit the 24-hour clock.
            if (pmHour && hour < 12) {
                hour += 12;
            }
            result.setHours(hour, min, sec, msec);
            if (tzMinOffset !== null) {
                // adjust timezone to utc before applying local offset.
                var adjustedMin = result.getMinutes() - (tzMinOffset + result.getTimezoneOffset());
                // Safari limits hours and minutes to the range of -127 to 127.  We need to use setHours
                // to ensure both these fields will not exceed this range.	adjustedMin will range
                // somewhere between -1440 and 1500, so we only need to split this into hours.
                result.setHours(result.getHours() + parseInt(adjustedMin / 60, 10), adjustedMin % 60);
            }
            return result;
        };
    }());
    parseNegativePattern = function (value, nf, negativePattern) {
        var neg = nf["-"], pos = nf["+"], ret;
        switch (negativePattern) {
            case "n -":
                neg = " " + neg;
                pos = " " + pos;
            /* falls through */
            case "n-":
                if (endsWith(value, neg)) {
                    ret = ["-", value.substr(0, value.length - neg.length)];
                }
                else if (endsWith(value, pos)) {
                    ret = ["+", value.substr(0, value.length - pos.length)];
                }
                break;
            case "- n":
                neg += " ";
                pos += " ";
            /* falls through */
            case "-n":
                if (startsWith(value, neg)) {
                    ret = ["-", value.substr(neg.length)];
                }
                else if (startsWith(value, pos)) {
                    ret = ["+", value.substr(pos.length)];
                }
                break;
            case "(n)":
                if (startsWith(value, "(") && endsWith(value, ")")) {
                    ret = ["-", value.substr(1, value.length - 2)];
                }
                break;
        }
        return ret || ["", value];
    };
    //
    // public instance functions
    //
    Globalize.prototype.findClosestCulture = function (cultureSelector) {
        return Globalize.findClosestCulture.call(this, cultureSelector);
    };
    Globalize.prototype.format = function (value, format, cultureSelector) {
        return Globalize.format.call(this, value, format, cultureSelector);
    };
    Globalize.prototype.localize = function (key, cultureSelector) {
        return Globalize.localize.call(this, key, cultureSelector);
    };
    Globalize.prototype.parseInt = function (value, radix, cultureSelector) {
        return Globalize.parseInt.call(this, value, radix, cultureSelector);
    };
    Globalize.prototype.parseFloat = function (value, radix, cultureSelector) {
        return Globalize.parseFloat.call(this, value, radix, cultureSelector);
    };
    Globalize.prototype.culture = function (cultureSelector) {
        return Globalize.culture.call(this, cultureSelector);
    };
    //
    // public singleton functions
    //
    Globalize.addCultureInfo = function (cultureName, baseCultureName, info) {
        var base = {}, isNew = false;
        if (typeof cultureName !== "string") {
            // cultureName argument is optional string. If not specified, assume info is first
            // and only argument. Specified info deep-extends current culture.
            info = cultureName;
            cultureName = this.culture().name;
            base = this.cultures[cultureName];
        }
        else if (typeof baseCultureName !== "string") {
            // baseCultureName argument is optional string. If not specified, assume info is second
            // argument. Specified info deep-extends specified culture.
            // If specified culture does not exist, create by deep-extending default
            info = baseCultureName;
            isNew = (this.cultures[cultureName] == null);
            base = this.cultures[cultureName] || this.cultures["default"];
        }
        else {
            // cultureName and baseCultureName specified. Assume a new culture is being created
            // by deep-extending an specified base culture
            isNew = true;
            base = this.cultures[baseCultureName];
        }
        this.cultures[cultureName] = extend(true, {}, base, info);
        // Make the standard calendar the current culture if it's a new culture
        if (isNew) {
            this.cultures[cultureName].calendar = this.cultures[cultureName].calendars.standard;
        }
    };
    Globalize.findClosestCulture = function (name) {
        var match;
        if (!name) {
            return this.findClosestCulture(this.cultureSelector) || this.cultures["default"];
        }
        if (typeof name === "string") {
            name = name.split(",");
        }
        if (isArray(name)) {
            var lang, cultures = this.cultures, list = name, i, l = list.length, prioritized = [];
            for (i = 0; i < l; i++) {
                name = trim(list[i]);
                var pri, parts = name.split(";");
                lang = trim(parts[0]);
                if (parts.length === 1) {
                    pri = 1;
                }
                else {
                    name = trim(parts[1]);
                    if (name.indexOf("q=") === 0) {
                        name = name.substr(2);
                        pri = parseFloat(name);
                        pri = isNaN(pri) ? 0 : pri;
                    }
                    else {
                        pri = 1;
                    }
                }
                prioritized.push({ lang: lang, pri: pri });
            }
            prioritized.sort(function (a, b) {
                if (a.pri < b.pri) {
                    return 1;
                }
                else if (a.pri > b.pri) {
                    return -1;
                }
                return 0;
            });
            // exact match
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                match = cultures[lang];
                if (match) {
                    return match;
                }
            }
            // neutral language match
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                do {
                    var index = lang.lastIndexOf("-");
                    if (index === -1) {
                        break;
                    }
                    // strip off the last part. e.g. en-US => en
                    lang = lang.substr(0, index);
                    match = cultures[lang];
                    if (match) {
                        return match;
                    }
                } while (1);
            }
            // last resort: match first culture using that language
            for (i = 0; i < l; i++) {
                lang = prioritized[i].lang;
                for (var cultureKey in cultures) {
                    var culture = cultures[cultureKey];
                    if (culture.language == lang) {
                        return culture;
                    }
                }
            }
        }
        else if (typeof name === "object") {
            return name;
        }
        return match || null;
    };
    Globalize.format = function (value, format, cultureSelector) {
        var culture = this.findClosestCulture(cultureSelector);
        if (value instanceof Date) {
            value = formatDate(value, format, culture);
        }
        else if (typeof value === "number") {
            value = formatNumber(value, format, culture);
        }
        return value;
    };
    Globalize.localize = function (key, cultureSelector) {
        return this.findClosestCulture(cultureSelector).messages[key] ||
            this.cultures["default"].messages[key];
    };
    Globalize.parseDate = function (value, formats, culture) {
        culture = this.findClosestCulture(culture);
        var date, prop, patterns;
        if (formats) {
            if (typeof formats === "string") {
                formats = [formats];
            }
            if (formats.length) {
                for (var i = 0, l = formats.length; i < l; i++) {
                    var format = formats[i];
                    if (format) {
                        date = parseExact(value, format, culture);
                        if (date) {
                            break;
                        }
                    }
                }
            }
        }
        else {
            patterns = culture.calendar.patterns;
            for (prop in patterns) {
                date = parseExact(value, patterns[prop], culture);
                if (date) {
                    break;
                }
            }
        }
        return date || null;
    };
    Globalize.parseInt = function (value, radix, cultureSelector) {
        return truncate(Globalize.parseFloat(value, radix, cultureSelector));
    };
    Globalize.parseFloat = function (value, radix, cultureSelector) {
        // radix argument is optional
        if (typeof radix !== "number") {
            cultureSelector = radix;
            radix = 10;
        }
        var culture = this.findClosestCulture(cultureSelector);
        var ret = NaN, nf = culture.numberFormat;
        if (value.indexOf(culture.numberFormat.currency.symbol) > -1) {
            // remove currency symbol
            value = value.replace(culture.numberFormat.currency.symbol, "");
            // replace decimal seperator
            value = value.replace(culture.numberFormat.currency["."], culture.numberFormat["."]);
        }
        //Remove percentage character from number string before parsing
        if (value.indexOf(culture.numberFormat.percent.symbol) > -1) {
            value = value.replace(culture.numberFormat.percent.symbol, "");
        }
        // remove spaces: leading, trailing and between - and number. Used for negative currency pt-BR
        value = value.replace(/ /g, "");
        // allow infinity or hexidecimal
        if (regexInfinity.test(value)) {
            ret = parseFloat(value);
        }
        else if (!radix && regexHex.test(value)) {
            ret = parseInt(value, 16);
        }
        else {
            // determine sign and number
            var signInfo = parseNegativePattern(value, nf, nf.pattern[0]), sign = signInfo[0], num = signInfo[1];
            // #44 - try parsing as "(n)"
            if (sign === "" && nf.pattern[0] !== "(n)") {
                signInfo = parseNegativePattern(value, nf, "(n)");
                sign = signInfo[0];
                num = signInfo[1];
            }
            // try parsing as "-n"
            if (sign === "" && nf.pattern[0] !== "-n") {
                signInfo = parseNegativePattern(value, nf, "-n");
                sign = signInfo[0];
                num = signInfo[1];
            }
            sign = sign || "+";
            // determine exponent and number
            var exponent, intAndFraction, exponentPos = num.indexOf("e");
            if (exponentPos < 0)
                exponentPos = num.indexOf("E");
            if (exponentPos < 0) {
                intAndFraction = num;
                exponent = null;
            }
            else {
                intAndFraction = num.substr(0, exponentPos);
                exponent = num.substr(exponentPos + 1);
            }
            // determine decimal position
            var integer, fraction, decSep = nf["."], decimalPos = intAndFraction.indexOf(decSep);
            if (decimalPos < 0) {
                integer = intAndFraction;
                fraction = null;
            }
            else {
                integer = intAndFraction.substr(0, decimalPos);
                fraction = intAndFraction.substr(decimalPos + decSep.length);
            }
            // handle groups (e.g. 1,000,000)
            var groupSep = nf[","];
            integer = integer.split(groupSep).join("");
            var altGroupSep = groupSep.replace(/\u00A0/g, " ");
            if (groupSep !== altGroupSep) {
                integer = integer.split(altGroupSep).join("");
            }
            // build a natively parsable number string
            var p = sign + integer;
            if (fraction !== null) {
                p += "." + fraction;
            }
            if (exponent !== null) {
                // exponent itself may have a number patternd
                var expSignInfo = parseNegativePattern(exponent, nf, "-n");
                p += "e" + (expSignInfo[0] || "+") + expSignInfo[1];
            }
            if (regexParseFloat.test(p)) {
                ret = parseFloat(p);
            }
        }
        return ret;
    };
    Globalize.culture = function (cultureSelector) {
        // setter
        if (typeof cultureSelector !== "undefined") {
            this.cultureSelector = cultureSelector;
        }
        // getter
        return this.findClosestCulture(cultureSelector) || this.cultures["default"];
    };
}(this));
/*
 * Globalize Culture en-US
 *
 * http://github.com/jquery/globalize
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * This file was generated by the Globalize Culture Generator
 * Translation: bugs found in this file need to be fixed in the generator
 */
(function (window, undefined) {
    var Globalize;
    if (typeof require !== "undefined" &&
        typeof exports !== "undefined" &&
        typeof module !== "undefined") {
        // Assume CommonJS
        Globalize = require("globalize");
    }
    else {
        // Global variable
        Globalize = window.Globalize;
    }
    Globalize.addCultureInfo("en-US", "default", {
        name: "en-US",
        englishName: "English (United States)"
    });
}(this));
!function () {
    function n(n) { return n && (n.ownerDocument || n.document || n).documentElement; }
    function t(n) { return n && (n.ownerDocument && n.ownerDocument.defaultView || n.document && n || n.defaultView); }
    function e(n, t) { return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN; }
    function r(n) { return null === n ? NaN : +n; }
    function i(n) { return !isNaN(n); }
    function u(n) { return { left: function (t, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
            var u = r + i >>> 1;
            n(t[u], e) < 0 ? r = u + 1 : i = u;
        } return r; }, right: function (t, e, r, i) { for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length); i > r;) {
            var u = r + i >>> 1;
            n(t[u], e) > 0 ? i = u : r = u + 1;
        } return r; } }; }
    function o(n) { return n.length; }
    function a(n) { for (var t = 1; n * t % 1;)
        t *= 10; return t; }
    function l(n, t) { for (var e in t)
        Object.defineProperty(n.prototype, e, { value: t[e], enumerable: !1 }); }
    function c() { this._ = Object.create(null); }
    function f(n) { return (n += "") === bo || n[0] === _o ? _o + n : n; }
    function s(n) { return (n += "")[0] === _o ? n.slice(1) : n; }
    function h(n) { return f(n) in this._; }
    function p(n) { return (n = f(n)) in this._ && delete this._[n]; }
    function g() { var n = []; for (var t in this._)
        n.push(s(t)); return n; }
    function v() { var n = 0; for (var t in this._)
        ++n; return n; }
    function d() { for (var n in this._)
        return !1; return !0; }
    function y() { this._ = Object.create(null); }
    function m(n) { return n; }
    function M(n, t, e) { return function () { var r = e.apply(t, arguments); return r === t ? n : r; }; }
    function x(n, t) { if (t in n)
        return t; t = t.charAt(0).toUpperCase() + t.slice(1); for (var e = 0, r = wo.length; r > e; ++e) {
        var i = wo[e] + t;
        if (i in n)
            return i;
    } }
    function b() { }
    function _() { }
    function w(n) { function t() { for (var t, r = e, i = -1, u = r.length; ++i < u;)
        (t = r[i].on) && t.apply(this, arguments); return n; } var e = [], r = new c; return t.on = function (t, i) { var u, o = r.get(t); return arguments.length < 2 ? o && o.on : (o && (o.on = null, e = e.slice(0, u = e.indexOf(o)).concat(e.slice(u + 1)), r.remove(t)), i && e.push(r.set(t, { on: i })), n); }, t; }
    function S() { ao.event.preventDefault(); }
    function k() { for (var n, t = ao.event; n = t.sourceEvent;)
        t = n; return t; }
    function N(n) { for (var t = new _, e = 0, r = arguments.length; ++e < r;)
        t[arguments[e]] = w(t); return t.of = function (e, r) { return function (i) { try {
        var u = i.sourceEvent = ao.event;
        i.target = n, ao.event = i, t[i.type].apply(e, r);
    }
    finally {
        ao.event = u;
    } }; }, t; }
    function E(n) { return ko(n, Co), n; }
    function A(n) { return "function" == typeof n ? n : function () { return No(n, this); }; }
    function C(n) { return "function" == typeof n ? n : function () { return Eo(n, this); }; }
    function z(n, t) { function e() { this.removeAttribute(n); } function r() { this.removeAttributeNS(n.space, n.local); } function i() { this.setAttribute(n, t); } function u() { this.setAttributeNS(n.space, n.local, t); } function o() { var e = t.apply(this, arguments); null == e ? this.removeAttribute(n) : this.setAttribute(n, e); } function a() { var e = t.apply(this, arguments); null == e ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, e); } return n = ao.ns.qualify(n), null == t ? n.local ? r : e : "function" == typeof t ? n.local ? a : o : n.local ? u : i; }
    function L(n) { return n.trim().replace(/\s+/g, " "); }
    function q(n) { return new RegExp("(?:^|\\s+)" + ao.requote(n) + "(?:\\s+|$)", "g"); }
    function T(n) { return (n + "").trim().split(/^|\s+/); }
    function R(n, t) { function e() { for (var e = -1; ++e < i;)
        n[e](this, t); } function r() { for (var e = -1, r = t.apply(this, arguments); ++e < i;)
        n[e](this, r); } n = T(n).map(D); var i = n.length; return "function" == typeof t ? r : e; }
    function D(n) { var t = q(n); return function (e, r) { if (i = e.classList)
        return r ? i.add(n) : i.remove(n); var i = e.getAttribute("class") || ""; r ? (t.lastIndex = 0, t.test(i) || e.setAttribute("class", L(i + " " + n))) : e.setAttribute("class", L(i.replace(t, " "))); }; }
    function P(n, t, e) { function r() { this.style.removeProperty(n); } function i() { this.style.setProperty(n, t, e); } function u() { var r = t.apply(this, arguments); null == r ? this.style.removeProperty(n) : this.style.setProperty(n, r, e); } return null == t ? r : "function" == typeof t ? u : i; }
    function U(n, t) { function e() { delete this[n]; } function r() { this[n] = t; } function i() { var e = t.apply(this, arguments); null == e ? delete this[n] : this[n] = e; } return null == t ? e : "function" == typeof t ? i : r; }
    function j(n) { function t() { var t = this.ownerDocument, e = this.namespaceURI; return e === zo && t.documentElement.namespaceURI === zo ? t.createElement(n) : t.createElementNS(e, n); } function e() { return this.ownerDocument.createElementNS(n.space, n.local); } return "function" == typeof n ? n : (n = ao.ns.qualify(n)).local ? e : t; }
    function F() { var n = this.parentNode; n && n.removeChild(this); }
    function H(n) { return { __data__: n }; }
    function O(n) { return function () { return Ao(this, n); }; }
    function I(n) { return arguments.length || (n = e), function (t, e) { return t && e ? n(t.__data__, e.__data__) : !t - !e; }; }
    function Y(n, t) { for (var e = 0, r = n.length; r > e; e++)
        for (var i, u = n[e], o = 0, a = u.length; a > o; o++)
            (i = u[o]) && t(i, o, e); return n; }
    function Z(n) { return ko(n, qo), n; }
    function V(n) { var t, e; return function (r, i, u) { var o, a = n[u].update, l = a.length; for (u != e && (e = u, t = 0), i >= t && (t = i + 1); !(o = a[t]) && ++t < l;)
        ; return o; }; }
    function X(n, t, e) { function r() { var t = this[o]; t && (this.removeEventListener(n, t, t.$), delete this[o]); } function i() { var i = l(t, co(arguments)); r.call(this), this.addEventListener(n, this[o] = i, i.$ = e), i._ = t; } function u() { var t, e = new RegExp("^__on([^.]+)" + ao.requote(n) + "$"); for (var r in this)
        if (t = r.match(e)) {
            var i = this[r];
            this.removeEventListener(t[1], i, i.$), delete this[r];
        } } var o = "__on" + n, a = n.indexOf("."), l = $; a > 0 && (n = n.slice(0, a)); var c = To.get(n); return c && (n = c, l = B), a ? t ? i : r : t ? b : u; }
    function $(n, t) { return function (e) { var r = ao.event; ao.event = e, t[0] = this.__data__; try {
        n.apply(this, t);
    }
    finally {
        ao.event = r;
    } }; }
    function B(n, t) { var e = $(n, t); return function (n) { var t = this, r = n.relatedTarget; r && (r === t || 8 & r.compareDocumentPosition(t)) || e.call(t, n); }; }
    function W(e) { var r = ".dragsuppress-" + ++Do, i = "click" + r, u = ao.select(t(e)).on("touchmove" + r, S).on("dragstart" + r, S).on("selectstart" + r, S); if (null == Ro && (Ro = "onselectstart" in e ? !1 : x(e.style, "userSelect")), Ro) {
        var o = n(e).style, a = o[Ro];
        o[Ro] = "none";
    } return function (n) { if (u.on(r, null), Ro && (o[Ro] = a), n) {
        var t = function () { u.on(i, null); };
        u.on(i, function () { S(), t(); }, !0), setTimeout(t, 0);
    } }; }
    function J(n, e) { e.changedTouches && (e = e.changedTouches[0]); var r = n.ownerSVGElement || n; if (r.createSVGPoint) {
        var i = r.createSVGPoint();
        if (0 > Po) {
            var u = t(n);
            if (u.scrollX || u.scrollY) {
                r = ao.select("body").append("svg").style({ position: "absolute", top: 0, left: 0, margin: 0, padding: 0, border: "none" }, "important");
                var o = r[0][0].getScreenCTM();
                Po = !(o.f || o.e), r.remove();
            }
        }
        return Po ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i = i.matrixTransform(n.getScreenCTM().inverse()), [i.x, i.y];
    } var a = n.getBoundingClientRect(); return [e.clientX - a.left - n.clientLeft, e.clientY - a.top - n.clientTop]; }
    function G() { return ao.event.changedTouches[0].identifier; }
    function K(n) { return n > 0 ? 1 : 0 > n ? -1 : 0; }
    function Q(n, t, e) { return (t[0] - n[0]) * (e[1] - n[1]) - (t[1] - n[1]) * (e[0] - n[0]); }
    function nn(n) { return n > 1 ? 0 : -1 > n ? Fo : Math.acos(n); }
    function tn(n) { return n > 1 ? Io : -1 > n ? -Io : Math.asin(n); }
    function en(n) { return ((n = Math.exp(n)) - 1 / n) / 2; }
    function rn(n) { return ((n = Math.exp(n)) + 1 / n) / 2; }
    function un(n) { return ((n = Math.exp(2 * n)) - 1) / (n + 1); }
    function on(n) { return (n = Math.sin(n / 2)) * n; }
    function an() { }
    function ln(n, t, e) { return this instanceof ln ? (this.h = +n, this.s = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof ln ? new ln(n.h, n.s, n.l) : _n("" + n, wn, ln) : new ln(n, t, e); }
    function cn(n, t, e) { function r(n) { return n > 360 ? n -= 360 : 0 > n && (n += 360), 60 > n ? u + (o - u) * n / 60 : 180 > n ? o : 240 > n ? u + (o - u) * (240 - n) / 60 : u; } function i(n) { return Math.round(255 * r(n)); } var u, o; return n = isNaN(n) ? 0 : (n %= 360) < 0 ? n + 360 : n, t = isNaN(t) ? 0 : 0 > t ? 0 : t > 1 ? 1 : t, e = 0 > e ? 0 : e > 1 ? 1 : e, o = .5 >= e ? e * (1 + t) : e + t - e * t, u = 2 * e - o, new mn(i(n + 120), i(n), i(n - 120)); }
    function fn(n, t, e) { return this instanceof fn ? (this.h = +n, this.c = +t, void (this.l = +e)) : arguments.length < 2 ? n instanceof fn ? new fn(n.h, n.c, n.l) : n instanceof hn ? gn(n.l, n.a, n.b) : gn((n = Sn((n = ao.rgb(n)).r, n.g, n.b)).l, n.a, n.b) : new fn(n, t, e); }
    function sn(n, t, e) { return isNaN(n) && (n = 0), isNaN(t) && (t = 0), new hn(e, Math.cos(n *= Yo) * t, Math.sin(n) * t); }
    function hn(n, t, e) { return this instanceof hn ? (this.l = +n, this.a = +t, void (this.b = +e)) : arguments.length < 2 ? n instanceof hn ? new hn(n.l, n.a, n.b) : n instanceof fn ? sn(n.h, n.c, n.l) : Sn((n = mn(n)).r, n.g, n.b) : new hn(n, t, e); }
    function pn(n, t, e) { var r = (n + 16) / 116, i = r + t / 500, u = r - e / 200; return i = vn(i) * na, r = vn(r) * ta, u = vn(u) * ea, new mn(yn(3.2404542 * i - 1.5371385 * r - .4985314 * u), yn(-.969266 * i + 1.8760108 * r + .041556 * u), yn(.0556434 * i - .2040259 * r + 1.0572252 * u)); }
    function gn(n, t, e) { return n > 0 ? new fn(Math.atan2(e, t) * Zo, Math.sqrt(t * t + e * e), n) : new fn(NaN, NaN, n); }
    function vn(n) { return n > .206893034 ? n * n * n : (n - 4 / 29) / 7.787037; }
    function dn(n) { return n > .008856 ? Math.pow(n, 1 / 3) : 7.787037 * n + 4 / 29; }
    function yn(n) { return Math.round(255 * (.00304 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055)); }
    function mn(n, t, e) { return this instanceof mn ? (this.r = ~~n, this.g = ~~t, void (this.b = ~~e)) : arguments.length < 2 ? n instanceof mn ? new mn(n.r, n.g, n.b) : _n("" + n, mn, cn) : new mn(n, t, e); }
    function Mn(n) { return new mn(n >> 16, n >> 8 & 255, 255 & n); }
    function xn(n) { return Mn(n) + ""; }
    function bn(n) { return 16 > n ? "0" + Math.max(0, n).toString(16) : Math.min(255, n).toString(16); }
    function _n(n, t, e) { var r, i, u, o = 0, a = 0, l = 0; if (r = /([a-z]+)\((.*)\)/.exec(n = n.toLowerCase()))
        switch (i = r[2].split(","), r[1]) {
            case "hsl": return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
            case "rgb": return t(Nn(i[0]), Nn(i[1]), Nn(i[2]));
        } return (u = ua.get(n)) ? t(u.r, u.g, u.b) : (null == n || "#" !== n.charAt(0) || isNaN(u = parseInt(n.slice(1), 16)) || (4 === n.length ? (o = (3840 & u) >> 4, o = o >> 4 | o, a = 240 & u, a = a >> 4 | a, l = 15 & u, l = l << 4 | l) : 7 === n.length && (o = (16711680 & u) >> 16, a = (65280 & u) >> 8, l = 255 & u)), t(o, a, l)); }
    function wn(n, t, e) { var r, i, u = Math.min(n /= 255, t /= 255, e /= 255), o = Math.max(n, t, e), a = o - u, l = (o + u) / 2; return a ? (i = .5 > l ? a / (o + u) : a / (2 - o - u), r = n == o ? (t - e) / a + (e > t ? 6 : 0) : t == o ? (e - n) / a + 2 : (n - t) / a + 4, r *= 60) : (r = NaN, i = l > 0 && 1 > l ? 0 : r), new ln(r, i, l); }
    function Sn(n, t, e) { n = kn(n), t = kn(t), e = kn(e); var r = dn((.4124564 * n + .3575761 * t + .1804375 * e) / na), i = dn((.2126729 * n + .7151522 * t + .072175 * e) / ta), u = dn((.0193339 * n + .119192 * t + .9503041 * e) / ea); return hn(116 * i - 16, 500 * (r - i), 200 * (i - u)); }
    function kn(n) { return (n /= 255) <= .04045 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4); }
    function Nn(n) { var t = parseFloat(n); return "%" === n.charAt(n.length - 1) ? Math.round(2.55 * t) : t; }
    function En(n) { return "function" == typeof n ? n : function () { return n; }; }
    function An(n) { return function (t, e, r) { return 2 === arguments.length && "function" == typeof e && (r = e, e = null), Cn(t, e, n, r); }; }
    function Cn(n, t, e, r) { function i() { var n, t = l.status; if (!t && Ln(l) || t >= 200 && 300 > t || 304 === t) {
        try {
            n = e.call(u, l);
        }
        catch (r) {
            return void o.error.call(u, r);
        }
        o.load.call(u, n);
    }
    else
        o.error.call(u, l); } var u = {}, o = ao.dispatch("beforesend", "progress", "load", "error"), a = {}, l = new XMLHttpRequest, c = null; return !this.XDomainRequest || "withCredentials" in l || !/^(http(s)?:)?\/\//.test(n) || (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = i : l.onreadystatechange = function () { l.readyState > 3 && i(); }, l.onprogress = function (n) { var t = ao.event; ao.event = n; try {
        o.progress.call(u, l);
    }
    finally {
        ao.event = t;
    } }, u.header = function (n, t) { return n = (n + "").toLowerCase(), arguments.length < 2 ? a[n] : (null == t ? delete a[n] : a[n] = t + "", u); }, u.mimeType = function (n) { return arguments.length ? (t = null == n ? null : n + "", u) : t; }, u.responseType = function (n) { return arguments.length ? (c = n, u) : c; }, u.response = function (n) { return e = n, u; }, ["get", "post"].forEach(function (n) { u[n] = function () { return u.send.apply(u, [n].concat(co(arguments))); }; }), u.send = function (e, r, i) { if (2 === arguments.length && "function" == typeof r && (i = r, r = null), l.open(e, n, !0), null == t || "accept" in a || (a.accept = t + ",*/*"), l.setRequestHeader)
        for (var f in a)
            l.setRequestHeader(f, a[f]); return null != t && l.overrideMimeType && l.overrideMimeType(t), null != c && (l.responseType = c), null != i && u.on("error", i).on("load", function (n) { i(null, n); }), o.beforesend.call(u, l), l.send(null == r ? null : r), u; }, u.abort = function () { return l.abort(), u; }, ao.rebind(u, o, "on"), null == r ? u : u.get(zn(r)); }
    function zn(n) { return 1 === n.length ? function (t, e) { n(null == t ? e : null); } : n; }
    function Ln(n) { var t = n.responseType; return t && "text" !== t ? n.response : n.responseText; }
    function qn(n, t, e) { var r = arguments.length; 2 > r && (t = 0), 3 > r && (e = Date.now()); var i = e + t, u = { c: n, t: i, n: null }; return aa ? aa.n = u : oa = u, aa = u, la || (ca = clearTimeout(ca), la = 1, fa(Tn)), u; }
    function Tn() { var n = Rn(), t = Dn() - n; t > 24 ? (isFinite(t) && (clearTimeout(ca), ca = setTimeout(Tn, t)), la = 0) : (la = 1, fa(Tn)); }
    function Rn() { for (var n = Date.now(), t = oa; t;)
        n >= t.t && t.c(n - t.t) && (t.c = null), t = t.n; return n; }
    function Dn() { for (var n, t = oa, e = 1 / 0; t;)
        t.c ? (t.t < e && (e = t.t), t = (n = t).n) : t = n ? n.n = t.n : oa = t.n; return aa = n, e; }
    function Pn(n, t) { return t - (n ? Math.ceil(Math.log(n) / Math.LN10) : 1); }
    function Un(n, t) { var e = Math.pow(10, 3 * xo(8 - t)); return { scale: t > 8 ? function (n) { return n / e; } : function (n) { return n * e; }, symbol: n }; }
    function jn(n) { var t = n.decimal, e = n.thousands, r = n.grouping, i = n.currency, u = r && e ? function (n, t) { for (var i = n.length, u = [], o = 0, a = r[0], l = 0; i > 0 && a > 0 && (l + a + 1 > t && (a = Math.max(1, t - l)), u.push(n.substring(i -= a, i + a)), !((l += a + 1) > t));)
        a = r[o = (o + 1) % r.length]; return u.reverse().join(e); } : m; return function (n) { var e = ha.exec(n), r = e[1] || " ", o = e[2] || ">", a = e[3] || "-", l = e[4] || "", c = e[5], f = +e[6], s = e[7], h = e[8], p = e[9], g = 1, v = "", d = "", y = !1, m = !0; switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === o) && (c = r = "0", o = "="), p) {
        case "n":
            s = !0, p = "g";
            break;
        case "%":
            g = 100, d = "%", p = "f";
            break;
        case "p":
            g = 100, d = "%", p = "r";
            break;
        case "b":
        case "o":
        case "x":
        case "X": "#" === l && (v = "0" + p.toLowerCase());
        case "c": m = !1;
        case "d":
            y = !0, h = 0;
            break;
        case "s": g = -1, p = "r";
    } "$" === l && (v = i[0], d = i[1]), "r" != p || h || (p = "g"), null != h && ("g" == p ? h = Math.max(1, Math.min(21, h)) : "e" != p && "f" != p || (h = Math.max(0, Math.min(20, h)))), p = pa.get(p) || Fn; var M = c && s; return function (n) { var e = d; if (y && n % 1)
        return ""; var i = 0 > n || 0 === n && 0 > 1 / n ? (n = -n, "-") : "-" === a ? "" : a; if (0 > g) {
        var l = ao.formatPrefix(n, h);
        n = l.scale(n), e = l.symbol + d;
    }
    else
        n *= g; n = p(n, h); var x, b, _ = n.lastIndexOf("."); if (0 > _) {
        var w = m ? n.lastIndexOf("e") : -1;
        0 > w ? (x = n, b = "") : (x = n.substring(0, w), b = n.substring(w));
    }
    else
        x = n.substring(0, _), b = t + n.substring(_ + 1); !c && s && (x = u(x, 1 / 0)); var S = v.length + x.length + b.length + (M ? 0 : i.length), k = f > S ? new Array(S = f - S + 1).join(r) : ""; return M && (x = u(k + x, k.length ? f - b.length : 1 / 0)), i += v, n = x + b, ("<" === o ? i + n + k : ">" === o ? k + i + n : "^" === o ? k.substring(0, S >>= 1) + i + n + k.substring(S) : i + (M ? n : k + n)) + e; }; }; }
    function Fn(n) { return n + ""; }
    function Hn() { this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]); }
    function On(n, t, e) { function r(t) { var e = n(t), r = u(e, 1); return r - t > t - e ? e : r; } function i(e) { return t(e = n(new va(e - 1)), 1), e; } function u(n, e) { return t(n = new va(+n), e), n; } function o(n, r, u) { var o = i(n), a = []; if (u > 1)
        for (; r > o;)
            e(o) % u || a.push(new Date(+o)), t(o, 1);
    else
        for (; r > o;)
            a.push(new Date(+o)), t(o, 1); return a; } function a(n, t, e) { try {
        va = Hn;
        var r = new Hn;
        return r._ = n, o(r, t, e);
    }
    finally {
        va = Date;
    } } n.floor = n, n.round = r, n.ceil = i, n.offset = u, n.range = o; var l = n.utc = In(n); return l.floor = l, l.round = In(r), l.ceil = In(i), l.offset = In(u), l.range = a, n; }
    function In(n) { return function (t, e) { try {
        va = Hn;
        var r = new Hn;
        return r._ = t, n(r, e)._;
    }
    finally {
        va = Date;
    } }; }
    function Yn(n) { function t(n) { function t(t) { for (var e, i, u, o = [], a = -1, l = 0; ++a < r;)
        37 === n.charCodeAt(a) && (o.push(n.slice(l, a)), null != (i = ya[e = n.charAt(++a)]) && (e = n.charAt(++a)), (u = A[e]) && (e = u(t, null == i ? "e" === e ? " " : "0" : i)), o.push(e), l = a + 1); return o.push(n.slice(l, a)), o.join(""); } var r = n.length; return t.parse = function (t) { var r = { y: 1900, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0, Z: null }, i = e(r, n, t, 0); if (i != t.length)
        return null; "p" in r && (r.H = r.H % 12 + 12 * r.p); var u = null != r.Z && va !== Hn, o = new (u ? Hn : va); return "j" in r ? o.setFullYear(r.y, 0, r.j) : "W" in r || "U" in r ? ("w" in r || (r.w = "W" in r ? 1 : 0), o.setFullYear(r.y, 0, 1), o.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (o.getDay() + 5) % 7 : r.w + 7 * r.U - (o.getDay() + 6) % 7)) : o.setFullYear(r.y, r.m, r.d), o.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), u ? o._ : o; }, t.toString = function () { return n; }, t; } function e(n, t, e, r) { for (var i, u, o, a = 0, l = t.length, c = e.length; l > a;) {
        if (r >= c)
            return -1;
        if (i = t.charCodeAt(a++), 37 === i) {
            if (o = t.charAt(a++), u = C[o in ya ? t.charAt(a++) : o], !u || (r = u(n, e, r)) < 0)
                return -1;
        }
        else if (i != e.charCodeAt(r++))
            return -1;
    } return r; } function r(n, t, e) { _.lastIndex = 0; var r = _.exec(t.slice(e)); return r ? (n.w = w.get(r[0].toLowerCase()), e + r[0].length) : -1; } function i(n, t, e) { x.lastIndex = 0; var r = x.exec(t.slice(e)); return r ? (n.w = b.get(r[0].toLowerCase()), e + r[0].length) : -1; } function u(n, t, e) { N.lastIndex = 0; var r = N.exec(t.slice(e)); return r ? (n.m = E.get(r[0].toLowerCase()), e + r[0].length) : -1; } function o(n, t, e) { S.lastIndex = 0; var r = S.exec(t.slice(e)); return r ? (n.m = k.get(r[0].toLowerCase()), e + r[0].length) : -1; } function a(n, t, r) { return e(n, A.c.toString(), t, r); } function l(n, t, r) { return e(n, A.x.toString(), t, r); } function c(n, t, r) { return e(n, A.X.toString(), t, r); } function f(n, t, e) { var r = M.get(t.slice(e, e += 2).toLowerCase()); return null == r ? -1 : (n.p = r, e); } var s = n.dateTime, h = n.date, p = n.time, g = n.periods, v = n.days, d = n.shortDays, y = n.months, m = n.shortMonths; t.utc = function (n) { function e(n) { try {
        va = Hn;
        var t = new va;
        return t._ = n, r(t);
    }
    finally {
        va = Date;
    } } var r = t(n); return e.parse = function (n) { try {
        va = Hn;
        var t = r.parse(n);
        return t && t._;
    }
    finally {
        va = Date;
    } }, e.toString = r.toString, e; }, t.multi = t.utc.multi = ct; var M = ao.map(), x = Vn(v), b = Xn(v), _ = Vn(d), w = Xn(d), S = Vn(y), k = Xn(y), N = Vn(m), E = Xn(m); g.forEach(function (n, t) { M.set(n.toLowerCase(), t); }); var A = { a: function (n) { return d[n.getDay()]; }, A: function (n) { return v[n.getDay()]; }, b: function (n) { return m[n.getMonth()]; }, B: function (n) { return y[n.getMonth()]; }, c: t(s), d: function (n, t) { return Zn(n.getDate(), t, 2); }, e: function (n, t) { return Zn(n.getDate(), t, 2); }, H: function (n, t) { return Zn(n.getHours(), t, 2); }, I: function (n, t) { return Zn(n.getHours() % 12 || 12, t, 2); }, j: function (n, t) { return Zn(1 + ga.dayOfYear(n), t, 3); }, L: function (n, t) { return Zn(n.getMilliseconds(), t, 3); }, m: function (n, t) { return Zn(n.getMonth() + 1, t, 2); }, M: function (n, t) { return Zn(n.getMinutes(), t, 2); }, p: function (n) { return g[+(n.getHours() >= 12)]; }, S: function (n, t) { return Zn(n.getSeconds(), t, 2); }, U: function (n, t) { return Zn(ga.sundayOfYear(n), t, 2); }, w: function (n) { return n.getDay(); }, W: function (n, t) { return Zn(ga.mondayOfYear(n), t, 2); }, x: t(h), X: t(p), y: function (n, t) { return Zn(n.getFullYear() % 100, t, 2); }, Y: function (n, t) { return Zn(n.getFullYear() % 1e4, t, 4); }, Z: at, "%": function () { return "%"; } }, C = { a: r, A: i, b: u, B: o, c: a, d: tt, e: tt, H: rt, I: rt, j: et, L: ot, m: nt, M: it, p: f, S: ut, U: Bn, w: $n, W: Wn, x: l, X: c, y: Gn, Y: Jn, Z: Kn, "%": lt }; return t; }
    function Zn(n, t, e) { var r = 0 > n ? "-" : "", i = (r ? -n : n) + "", u = i.length; return r + (e > u ? new Array(e - u + 1).join(t) + i : i); }
    function Vn(n) { return new RegExp("^(?:" + n.map(ao.requote).join("|") + ")", "i"); }
    function Xn(n) { for (var t = new c, e = -1, r = n.length; ++e < r;)
        t.set(n[e].toLowerCase(), e); return t; }
    function $n(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 1)); return r ? (n.w = +r[0], e + r[0].length) : -1; }
    function Bn(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e)); return r ? (n.U = +r[0], e + r[0].length) : -1; }
    function Wn(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e)); return r ? (n.W = +r[0], e + r[0].length) : -1; }
    function Jn(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 4)); return r ? (n.y = +r[0], e + r[0].length) : -1; }
    function Gn(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.y = Qn(+r[0]), e + r[0].length) : -1; }
    function Kn(n, t, e) { return /^[+-]\d{4}$/.test(t = t.slice(e, e + 5)) ? (n.Z = -t, e + 5) : -1; }
    function Qn(n) { return n + (n > 68 ? 1900 : 2e3); }
    function nt(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.m = r[0] - 1, e + r[0].length) : -1; }
    function tt(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.d = +r[0], e + r[0].length) : -1; }
    function et(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 3)); return r ? (n.j = +r[0], e + r[0].length) : -1; }
    function rt(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.H = +r[0], e + r[0].length) : -1; }
    function it(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.M = +r[0], e + r[0].length) : -1; }
    function ut(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 2)); return r ? (n.S = +r[0], e + r[0].length) : -1; }
    function ot(n, t, e) { ma.lastIndex = 0; var r = ma.exec(t.slice(e, e + 3)); return r ? (n.L = +r[0], e + r[0].length) : -1; }
    function at(n) { var t = n.getTimezoneOffset(), e = t > 0 ? "-" : "+", r = xo(t) / 60 | 0, i = xo(t) % 60; return e + Zn(r, "0", 2) + Zn(i, "0", 2); }
    function lt(n, t, e) { Ma.lastIndex = 0; var r = Ma.exec(t.slice(e, e + 1)); return r ? e + r[0].length : -1; }
    function ct(n) { for (var t = n.length, e = -1; ++e < t;)
        n[e][0] = this(n[e][0]); return function (t) { for (var e = 0, r = n[e]; !r[1](t);)
        r = n[++e]; return r[0](t); }; }
    function ft() { }
    function st(n, t, e) { var r = e.s = n + t, i = r - n, u = r - i; e.t = n - u + (t - i); }
    function ht(n, t) { n && wa.hasOwnProperty(n.type) && wa[n.type](n, t); }
    function pt(n, t, e) { var r, i = -1, u = n.length - e; for (t.lineStart(); ++i < u;)
        r = n[i], t.point(r[0], r[1], r[2]); t.lineEnd(); }
    function gt(n, t) { var e = -1, r = n.length; for (t.polygonStart(); ++e < r;)
        pt(n[e], t, 1); t.polygonEnd(); }
    function vt() { function n(n, t) { n *= Yo, t = t * Yo / 2 + Fo / 4; var e = n - r, o = e >= 0 ? 1 : -1, a = o * e, l = Math.cos(t), c = Math.sin(t), f = u * c, s = i * l + f * Math.cos(a), h = f * o * Math.sin(a); ka.add(Math.atan2(h, s)), r = n, i = l, u = c; } var t, e, r, i, u; Na.point = function (o, a) { Na.point = n, r = (t = o) * Yo, i = Math.cos(a = (e = a) * Yo / 2 + Fo / 4), u = Math.sin(a); }, Na.lineEnd = function () { n(t, e); }; }
    function dt(n) { var t = n[0], e = n[1], r = Math.cos(e); return [r * Math.cos(t), r * Math.sin(t), Math.sin(e)]; }
    function yt(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2]; }
    function mt(n, t) { return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]]; }
    function Mt(n, t) { n[0] += t[0], n[1] += t[1], n[2] += t[2]; }
    function xt(n, t) { return [n[0] * t, n[1] * t, n[2] * t]; }
    function bt(n) { var t = Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]); n[0] /= t, n[1] /= t, n[2] /= t; }
    function _t(n) { return [Math.atan2(n[1], n[0]), tn(n[2])]; }
    function wt(n, t) { return xo(n[0] - t[0]) < Uo && xo(n[1] - t[1]) < Uo; }
    function St(n, t) { n *= Yo; var e = Math.cos(t *= Yo); kt(e * Math.cos(n), e * Math.sin(n), Math.sin(t)); }
    function kt(n, t, e) { ++Ea, Ca += (n - Ca) / Ea, za += (t - za) / Ea, La += (e - La) / Ea; }
    function Nt() { function n(n, i) { n *= Yo; var u = Math.cos(i *= Yo), o = u * Math.cos(n), a = u * Math.sin(n), l = Math.sin(i), c = Math.atan2(Math.sqrt((c = e * l - r * a) * c + (c = r * o - t * l) * c + (c = t * a - e * o) * c), t * o + e * a + r * l); Aa += c, qa += c * (t + (t = o)), Ta += c * (e + (e = a)), Ra += c * (r + (r = l)), kt(t, e, r); } var t, e, r; ja.point = function (i, u) { i *= Yo; var o = Math.cos(u *= Yo); t = o * Math.cos(i), e = o * Math.sin(i), r = Math.sin(u), ja.point = n, kt(t, e, r); }; }
    function Et() { ja.point = St; }
    function At() { function n(n, t) { n *= Yo; var e = Math.cos(t *= Yo), o = e * Math.cos(n), a = e * Math.sin(n), l = Math.sin(t), c = i * l - u * a, f = u * o - r * l, s = r * a - i * o, h = Math.sqrt(c * c + f * f + s * s), p = r * o + i * a + u * l, g = h && -nn(p) / h, v = Math.atan2(h, p); Da += g * c, Pa += g * f, Ua += g * s, Aa += v, qa += v * (r + (r = o)), Ta += v * (i + (i = a)), Ra += v * (u + (u = l)), kt(r, i, u); } var t, e, r, i, u; ja.point = function (o, a) { t = o, e = a, ja.point = n, o *= Yo; var l = Math.cos(a *= Yo); r = l * Math.cos(o), i = l * Math.sin(o), u = Math.sin(a), kt(r, i, u); }, ja.lineEnd = function () { n(t, e), ja.lineEnd = Et, ja.point = St; }; }
    function Ct(n, t) { function e(e, r) { return e = n(e, r), t(e[0], e[1]); } return n.invert && t.invert && (e.invert = function (e, r) { return e = t.invert(e, r), e && n.invert(e[0], e[1]); }), e; }
    function zt() { return !0; }
    function Lt(n, t, e, r, i) { var u = [], o = []; if (n.forEach(function (n) { if (!((t = n.length - 1) <= 0)) {
        var t, e = n[0], r = n[t];
        if (wt(e, r)) {
            i.lineStart();
            for (var a = 0; t > a; ++a)
                i.point((e = n[a])[0], e[1]);
            return void i.lineEnd();
        }
        var l = new Tt(e, n, null, !0), c = new Tt(e, null, l, !1);
        l.o = c, u.push(l), o.push(c), l = new Tt(r, n, null, !1), c = new Tt(r, null, l, !0), l.o = c, u.push(l), o.push(c);
    } }), o.sort(t), qt(u), qt(o), u.length) {
        for (var a = 0, l = e, c = o.length; c > a; ++a)
            o[a].e = l = !l;
        for (var f, s, h = u[0];;) {
            for (var p = h, g = !0; p.v;)
                if ((p = p.n) === h)
                    return;
            f = p.z, i.lineStart();
            do {
                if (p.v = p.o.v = !0, p.e) {
                    if (g)
                        for (var a = 0, c = f.length; c > a; ++a)
                            i.point((s = f[a])[0], s[1]);
                    else
                        r(p.x, p.n.x, 1, i);
                    p = p.n;
                }
                else {
                    if (g) {
                        f = p.p.z;
                        for (var a = f.length - 1; a >= 0; --a)
                            i.point((s = f[a])[0], s[1]);
                    }
                    else
                        r(p.x, p.p.x, -1, i);
                    p = p.p;
                }
                p = p.o, f = p.z, g = !g;
            } while (!p.v);
            i.lineEnd();
        }
    } }
    function qt(n) { if (t = n.length) {
        for (var t, e, r = 0, i = n[0]; ++r < t;)
            i.n = e = n[r], e.p = i, i = e;
        i.n = e = n[0], e.p = i;
    } }
    function Tt(n, t, e, r) { this.x = n, this.z = t, this.o = e, this.e = r, this.v = !1, this.n = this.p = null; }
    function Rt(n, t, e, r) { return function (i, u) { function o(t, e) { var r = i(t, e); n(t = r[0], e = r[1]) && u.point(t, e); } function a(n, t) { var e = i(n, t); d.point(e[0], e[1]); } function l() { m.point = a, d.lineStart(); } function c() { m.point = o, d.lineEnd(); } function f(n, t) { v.push([n, t]); var e = i(n, t); x.point(e[0], e[1]); } function s() { x.lineStart(), v = []; } function h() { f(v[0][0], v[0][1]), x.lineEnd(); var n, t = x.clean(), e = M.buffer(), r = e.length; if (v.pop(), g.push(v), v = null, r)
        if (1 & t) {
            n = e[0];
            var i, r = n.length - 1, o = -1;
            if (r > 0) {
                for (b || (u.polygonStart(), b = !0), u.lineStart(); ++o < r;)
                    u.point((i = n[o])[0], i[1]);
                u.lineEnd();
            }
        }
        else
            r > 1 && 2 & t && e.push(e.pop().concat(e.shift())), p.push(e.filter(Dt)); } var p, g, v, d = t(u), y = i.invert(r[0], r[1]), m = { point: o, lineStart: l, lineEnd: c, polygonStart: function () { m.point = f, m.lineStart = s, m.lineEnd = h, p = [], g = []; }, polygonEnd: function () { m.point = o, m.lineStart = l, m.lineEnd = c, p = ao.merge(p); var n = Ot(y, g); p.length ? (b || (u.polygonStart(), b = !0), Lt(p, Ut, n, e, u)) : n && (b || (u.polygonStart(), b = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), b && (u.polygonEnd(), b = !1), p = g = null; }, sphere: function () { u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd(); } }, M = Pt(), x = t(M), b = !1; return m; }; }
    function Dt(n) { return n.length > 1; }
    function Pt() { var n, t = []; return { lineStart: function () { t.push(n = []); }, point: function (t, e) { n.push([t, e]); }, lineEnd: b, buffer: function () { var e = t; return t = [], n = null, e; }, rejoin: function () { t.length > 1 && t.push(t.pop().concat(t.shift())); } }; }
    function Ut(n, t) { return ((n = n.x)[0] < 0 ? n[1] - Io - Uo : Io - n[1]) - ((t = t.x)[0] < 0 ? t[1] - Io - Uo : Io - t[1]); }
    function jt(n) { var t, e = NaN, r = NaN, i = NaN; return { lineStart: function () { n.lineStart(), t = 1; }, point: function (u, o) { var a = u > 0 ? Fo : -Fo, l = xo(u - e); xo(l - Fo) < Uo ? (n.point(e, r = (r + o) / 2 > 0 ? Io : -Io), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), n.point(u, r), t = 0) : i !== a && l >= Fo && (xo(e - i) < Uo && (e -= i * Uo), xo(u - a) < Uo && (u -= a * Uo), r = Ft(e, r, u, o), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(a, r), t = 0), n.point(e = u, r = o), i = a; }, lineEnd: function () { n.lineEnd(), e = r = NaN; }, clean: function () { return 2 - t; } }; }
    function Ft(n, t, e, r) { var i, u, o = Math.sin(n - e); return xo(o) > Uo ? Math.atan((Math.sin(t) * (u = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(n)) / (i * u * o)) : (t + r) / 2; }
    function Ht(n, t, e, r) { var i; if (null == n)
        i = e * Io, r.point(-Fo, i), r.point(0, i), r.point(Fo, i), r.point(Fo, 0), r.point(Fo, -i), r.point(0, -i), r.point(-Fo, -i), r.point(-Fo, 0), r.point(-Fo, i);
    else if (xo(n[0] - t[0]) > Uo) {
        var u = n[0] < t[0] ? Fo : -Fo;
        i = e * u / 2, r.point(-u, i), r.point(0, i), r.point(u, i);
    }
    else
        r.point(t[0], t[1]); }
    function Ot(n, t) { var e = n[0], r = n[1], i = [Math.sin(e), -Math.cos(e), 0], u = 0, o = 0; ka.reset(); for (var a = 0, l = t.length; l > a; ++a) {
        var c = t[a], f = c.length;
        if (f)
            for (var s = c[0], h = s[0], p = s[1] / 2 + Fo / 4, g = Math.sin(p), v = Math.cos(p), d = 1;;) {
                d === f && (d = 0), n = c[d];
                var y = n[0], m = n[1] / 2 + Fo / 4, M = Math.sin(m), x = Math.cos(m), b = y - h, _ = b >= 0 ? 1 : -1, w = _ * b, S = w > Fo, k = g * M;
                if (ka.add(Math.atan2(k * _ * Math.sin(w), v * x + k * Math.cos(w))), u += S ? b + _ * Ho : b, S ^ h >= e ^ y >= e) {
                    var N = mt(dt(s), dt(n));
                    bt(N);
                    var E = mt(i, N);
                    bt(E);
                    var A = (S ^ b >= 0 ? -1 : 1) * tn(E[2]);
                    (r > A || r === A && (N[0] || N[1])) && (o += S ^ b >= 0 ? 1 : -1);
                }
                if (!d++)
                    break;
                h = y, g = M, v = x, s = n;
            }
    } return (-Uo > u || Uo > u && -Uo > ka) ^ 1 & o; }
    function It(n) { function t(n, t) { return Math.cos(n) * Math.cos(t) > u; } function e(n) { var e, u, l, c, f; return { lineStart: function () { c = l = !1, f = 1; }, point: function (s, h) { var p, g = [s, h], v = t(s, h), d = o ? v ? 0 : i(s, h) : v ? i(s + (0 > s ? Fo : -Fo), h) : 0; if (!e && (c = l = v) && n.lineStart(), v !== l && (p = r(e, g), (wt(e, p) || wt(g, p)) && (g[0] += Uo, g[1] += Uo, v = t(g[0], g[1]))), v !== l)
            f = 0, v ? (n.lineStart(), p = r(g, e), n.point(p[0], p[1])) : (p = r(e, g), n.point(p[0], p[1]), n.lineEnd()), e = p;
        else if (a && e && o ^ v) {
            var y;
            d & u || !(y = r(g, e, !0)) || (f = 0, o ? (n.lineStart(), n.point(y[0][0], y[0][1]), n.point(y[1][0], y[1][1]), n.lineEnd()) : (n.point(y[1][0], y[1][1]), n.lineEnd(), n.lineStart(), n.point(y[0][0], y[0][1])));
        } !v || e && wt(e, g) || n.point(g[0], g[1]), e = g, l = v, u = d; }, lineEnd: function () { l && n.lineEnd(), e = null; }, clean: function () { return f | (c && l) << 1; } }; } function r(n, t, e) { var r = dt(n), i = dt(t), o = [1, 0, 0], a = mt(r, i), l = yt(a, a), c = a[0], f = l - c * c; if (!f)
        return !e && n; var s = u * l / f, h = -u * c / f, p = mt(o, a), g = xt(o, s), v = xt(a, h); Mt(g, v); var d = p, y = yt(g, d), m = yt(d, d), M = y * y - m * (yt(g, g) - 1); if (!(0 > M)) {
        var x = Math.sqrt(M), b = xt(d, (-y - x) / m);
        if (Mt(b, g), b = _t(b), !e)
            return b;
        var _, w = n[0], S = t[0], k = n[1], N = t[1];
        w > S && (_ = w, w = S, S = _);
        var E = S - w, A = xo(E - Fo) < Uo, C = A || Uo > E;
        if (!A && k > N && (_ = k, k = N, N = _), C ? A ? k + N > 0 ^ b[1] < (xo(b[0] - w) < Uo ? k : N) : k <= b[1] && b[1] <= N : E > Fo ^ (w <= b[0] && b[0] <= S)) {
            var z = xt(d, (-y + x) / m);
            return Mt(z, g), [b, _t(z)];
        }
    } } function i(t, e) { var r = o ? n : Fo - n, i = 0; return -r > t ? i |= 1 : t > r && (i |= 2), -r > e ? i |= 4 : e > r && (i |= 8), i; } var u = Math.cos(n), o = u > 0, a = xo(u) > Uo, l = ve(n, 6 * Yo); return Rt(t, e, l, o ? [0, -n] : [-Fo, n - Fo]); }
    function Yt(n, t, e, r) { return function (i) { var u, o = i.a, a = i.b, l = o.x, c = o.y, f = a.x, s = a.y, h = 0, p = 1, g = f - l, v = s - c; if (u = n - l, g || !(u > 0)) {
        if (u /= g, 0 > g) {
            if (h > u)
                return;
            p > u && (p = u);
        }
        else if (g > 0) {
            if (u > p)
                return;
            u > h && (h = u);
        }
        if (u = e - l, g || !(0 > u)) {
            if (u /= g, 0 > g) {
                if (u > p)
                    return;
                u > h && (h = u);
            }
            else if (g > 0) {
                if (h > u)
                    return;
                p > u && (p = u);
            }
            if (u = t - c, v || !(u > 0)) {
                if (u /= v, 0 > v) {
                    if (h > u)
                        return;
                    p > u && (p = u);
                }
                else if (v > 0) {
                    if (u > p)
                        return;
                    u > h && (h = u);
                }
                if (u = r - c, v || !(0 > u)) {
                    if (u /= v, 0 > v) {
                        if (u > p)
                            return;
                        u > h && (h = u);
                    }
                    else if (v > 0) {
                        if (h > u)
                            return;
                        p > u && (p = u);
                    }
                    return h > 0 && (i.a = { x: l + h * g, y: c + h * v }), 1 > p && (i.b = { x: l + p * g, y: c + p * v }), i;
                }
            }
        }
    } }; }
    function Zt(n, t, e, r) { function i(r, i) { return xo(r[0] - n) < Uo ? i > 0 ? 0 : 3 : xo(r[0] - e) < Uo ? i > 0 ? 2 : 1 : xo(r[1] - t) < Uo ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2; } function u(n, t) { return o(n.x, t.x); } function o(n, t) { var e = i(n, 1), r = i(t, 1); return e !== r ? e - r : 0 === e ? t[1] - n[1] : 1 === e ? n[0] - t[0] : 2 === e ? n[1] - t[1] : t[0] - n[0]; } return function (a) { function l(n) { for (var t = 0, e = d.length, r = n[1], i = 0; e > i; ++i)
        for (var u, o = 1, a = d[i], l = a.length, c = a[0]; l > o; ++o)
            u = a[o], c[1] <= r ? u[1] > r && Q(c, u, n) > 0 && ++t : u[1] <= r && Q(c, u, n) < 0 && --t, c = u; return 0 !== t; } function c(u, a, l, c) { var f = 0, s = 0; if (null == u || (f = i(u, l)) !== (s = i(a, l)) || o(u, a) < 0 ^ l > 0) {
        do
            c.point(0 === f || 3 === f ? n : e, f > 1 ? r : t);
        while ((f = (f + l + 4) % 4) !== s);
    }
    else
        c.point(a[0], a[1]); } function f(i, u) { return i >= n && e >= i && u >= t && r >= u; } function s(n, t) { f(n, t) && a.point(n, t); } function h() { C.point = g, d && d.push(y = []), S = !0, w = !1, b = _ = NaN; } function p() { v && (g(m, M), x && w && E.rejoin(), v.push(E.buffer())), C.point = s, w && a.lineEnd(); } function g(n, t) { n = Math.max(-Ha, Math.min(Ha, n)), t = Math.max(-Ha, Math.min(Ha, t)); var e = f(n, t); if (d && y.push([n, t]), S)
        m = n, M = t, x = e, S = !1, e && (a.lineStart(), a.point(n, t));
    else if (e && w)
        a.point(n, t);
    else {
        var r = { a: { x: b, y: _ }, b: { x: n, y: t } };
        A(r) ? (w || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), e || a.lineEnd(), k = !1) : e && (a.lineStart(), a.point(n, t), k = !1);
    } b = n, _ = t, w = e; } var v, d, y, m, M, x, b, _, w, S, k, N = a, E = Pt(), A = Yt(n, t, e, r), C = { point: s, lineStart: h, lineEnd: p, polygonStart: function () { a = E, v = [], d = [], k = !0; }, polygonEnd: function () { a = N, v = ao.merge(v); var t = l([n, r]), e = k && t, i = v.length; (e || i) && (a.polygonStart(), e && (a.lineStart(), c(null, null, 1, a), a.lineEnd()), i && Lt(v, u, t, c, a), a.polygonEnd()), v = d = y = null; } }; return C; }; }
    function Vt(n) { var t = 0, e = Fo / 3, r = ae(n), i = r(t, e); return i.parallels = function (n) { return arguments.length ? r(t = n[0] * Fo / 180, e = n[1] * Fo / 180) : [t / Fo * 180, e / Fo * 180]; }, i; }
    function Xt(n, t) { function e(n, t) { var e = Math.sqrt(u - 2 * i * Math.sin(t)) / i; return [e * Math.sin(n *= i), o - e * Math.cos(n)]; } var r = Math.sin(n), i = (r + Math.sin(t)) / 2, u = 1 + r * (2 * i - r), o = Math.sqrt(u) / i; return e.invert = function (n, t) { var e = o - t; return [Math.atan2(n, e) / i, tn((u - (n * n + e * e) * i * i) / (2 * i))]; }, e; }
    function $t() { function n(n, t) { Ia += i * n - r * t, r = n, i = t; } var t, e, r, i; $a.point = function (u, o) { $a.point = n, t = r = u, e = i = o; }, $a.lineEnd = function () { n(t, e); }; }
    function Bt(n, t) { Ya > n && (Ya = n), n > Va && (Va = n), Za > t && (Za = t), t > Xa && (Xa = t); }
    function Wt() { function n(n, t) { o.push("M", n, ",", t, u); } function t(n, t) { o.push("M", n, ",", t), a.point = e; } function e(n, t) { o.push("L", n, ",", t); } function r() { a.point = n; } function i() { o.push("Z"); } var u = Jt(4.5), o = [], a = { point: n, lineStart: function () { a.point = t; }, lineEnd: r, polygonStart: function () { a.lineEnd = i; }, polygonEnd: function () { a.lineEnd = r, a.point = n; }, pointRadius: function (n) { return u = Jt(n), a; }, result: function () { if (o.length) {
            var n = o.join("");
            return o = [], n;
        } } }; return a; }
    function Jt(n) { return "m0," + n + "a" + n + "," + n + " 0 1,1 0," + -2 * n + "a" + n + "," + n + " 0 1,1 0," + 2 * n + "z"; }
    function Gt(n, t) { Ca += n, za += t, ++La; }
    function Kt() { function n(n, r) { var i = n - t, u = r - e, o = Math.sqrt(i * i + u * u); qa += o * (t + n) / 2, Ta += o * (e + r) / 2, Ra += o, Gt(t = n, e = r); } var t, e; Wa.point = function (r, i) { Wa.point = n, Gt(t = r, e = i); }; }
    function Qt() { Wa.point = Gt; }
    function ne() { function n(n, t) { var e = n - r, u = t - i, o = Math.sqrt(e * e + u * u); qa += o * (r + n) / 2, Ta += o * (i + t) / 2, Ra += o, o = i * n - r * t, Da += o * (r + n), Pa += o * (i + t), Ua += 3 * o, Gt(r = n, i = t); } var t, e, r, i; Wa.point = function (u, o) { Wa.point = n, Gt(t = r = u, e = i = o); }, Wa.lineEnd = function () { n(t, e); }; }
    function te(n) { function t(t, e) { n.moveTo(t + o, e), n.arc(t, e, o, 0, Ho); } function e(t, e) { n.moveTo(t, e), a.point = r; } function r(t, e) { n.lineTo(t, e); } function i() { a.point = t; } function u() { n.closePath(); } var o = 4.5, a = { point: t, lineStart: function () { a.point = e; }, lineEnd: i, polygonStart: function () { a.lineEnd = u; }, polygonEnd: function () { a.lineEnd = i, a.point = t; }, pointRadius: function (n) { return o = n, a; }, result: b }; return a; }
    function ee(n) {
        function t(n) { return (a ? r : e)(n); }
        function e(t) { return ue(t, function (e, r) { e = n(e, r), t.point(e[0], e[1]); }); }
        function r(t) {
            function e(e, r) { e = n(e, r), t.point(e[0], e[1]); }
            function r() { M = NaN, S.point = u, t.lineStart(); }
            function u(e, r) { var u = dt([e, r]), o = n(e, r); i(M, x, m, b, _, w, M = o[0], x = o[1], m = e, b = u[0], _ = u[1], w = u[2], a, t), t.point(M, x); }
            function o() { S.point = e, t.lineEnd(); }
            function l() {
                r(), S.point = c, S.lineEnd = f;
            }
            function c(n, t) { u(s = n, h = t), p = M, g = x, v = b, d = _, y = w, S.point = u; }
            function f() { i(M, x, m, b, _, w, p, g, s, v, d, y, a, t), S.lineEnd = o, o(); }
            var s, h, p, g, v, d, y, m, M, x, b, _, w, S = { point: e, lineStart: r, lineEnd: o, polygonStart: function () { t.polygonStart(), S.lineStart = l; }, polygonEnd: function () { t.polygonEnd(), S.lineStart = r; } };
            return S;
        }
        function i(t, e, r, a, l, c, f, s, h, p, g, v, d, y) { var m = f - t, M = s - e, x = m * m + M * M; if (x > 4 * u && d--) {
            var b = a + p, _ = l + g, w = c + v, S = Math.sqrt(b * b + _ * _ + w * w), k = Math.asin(w /= S), N = xo(xo(w) - 1) < Uo || xo(r - h) < Uo ? (r + h) / 2 : Math.atan2(_, b), E = n(N, k), A = E[0], C = E[1], z = A - t, L = C - e, q = M * z - m * L;
            (q * q / x > u || xo((m * z + M * L) / x - .5) > .3 || o > a * p + l * g + c * v) && (i(t, e, r, a, l, c, A, C, N, b /= S, _ /= S, w, d, y), y.point(A, C), i(A, C, N, b, _, w, f, s, h, p, g, v, d, y));
        } }
        var u = .5, o = Math.cos(30 * Yo), a = 16;
        return t.precision = function (n) { return arguments.length ? (a = (u = n * n) > 0 && 16, t) : Math.sqrt(u); }, t;
    }
    function re(n) { var t = ee(function (t, e) { return n([t * Zo, e * Zo]); }); return function (n) { return le(t(n)); }; }
    function ie(n) { this.stream = n; }
    function ue(n, t) { return { point: t, sphere: function () { n.sphere(); }, lineStart: function () { n.lineStart(); }, lineEnd: function () { n.lineEnd(); }, polygonStart: function () { n.polygonStart(); }, polygonEnd: function () { n.polygonEnd(); } }; }
    function oe(n) { return ae(function () { return n; })(); }
    function ae(n) { function t(n) { return n = a(n[0] * Yo, n[1] * Yo), [n[0] * h + l, c - n[1] * h]; } function e(n) { return n = a.invert((n[0] - l) / h, (c - n[1]) / h), n && [n[0] * Zo, n[1] * Zo]; } function r() { a = Ct(o = se(y, M, x), u); var n = u(v, d); return l = p - n[0] * h, c = g + n[1] * h, i(); } function i() { return f && (f.valid = !1, f = null), t; } var u, o, a, l, c, f, s = ee(function (n, t) { return n = u(n, t), [n[0] * h + l, c - n[1] * h]; }), h = 150, p = 480, g = 250, v = 0, d = 0, y = 0, M = 0, x = 0, b = Fa, _ = m, w = null, S = null; return t.stream = function (n) { return f && (f.valid = !1), f = le(b(o, s(_(n)))), f.valid = !0, f; }, t.clipAngle = function (n) { return arguments.length ? (b = null == n ? (w = n, Fa) : It((w = +n) * Yo), i()) : w; }, t.clipExtent = function (n) { return arguments.length ? (S = n, _ = n ? Zt(n[0][0], n[0][1], n[1][0], n[1][1]) : m, i()) : S; }, t.scale = function (n) { return arguments.length ? (h = +n, r()) : h; }, t.translate = function (n) { return arguments.length ? (p = +n[0], g = +n[1], r()) : [p, g]; }, t.center = function (n) { return arguments.length ? (v = n[0] % 360 * Yo, d = n[1] % 360 * Yo, r()) : [v * Zo, d * Zo]; }, t.rotate = function (n) { return arguments.length ? (y = n[0] % 360 * Yo, M = n[1] % 360 * Yo, x = n.length > 2 ? n[2] % 360 * Yo : 0, r()) : [y * Zo, M * Zo, x * Zo]; }, ao.rebind(t, s, "precision"), function () { return u = n.apply(this, arguments), t.invert = u.invert && e, r(); }; }
    function le(n) { return ue(n, function (t, e) { n.point(t * Yo, e * Yo); }); }
    function ce(n, t) { return [n, t]; }
    function fe(n, t) { return [n > Fo ? n - Ho : -Fo > n ? n + Ho : n, t]; }
    function se(n, t, e) { return n ? t || e ? Ct(pe(n), ge(t, e)) : pe(n) : t || e ? ge(t, e) : fe; }
    function he(n) { return function (t, e) { return t += n, [t > Fo ? t - Ho : -Fo > t ? t + Ho : t, e]; }; }
    function pe(n) { var t = he(n); return t.invert = he(-n), t; }
    function ge(n, t) { function e(n, t) { var e = Math.cos(t), a = Math.cos(n) * e, l = Math.sin(n) * e, c = Math.sin(t), f = c * r + a * i; return [Math.atan2(l * u - f * o, a * r - c * i), tn(f * u + l * o)]; } var r = Math.cos(n), i = Math.sin(n), u = Math.cos(t), o = Math.sin(t); return e.invert = function (n, t) { var e = Math.cos(t), a = Math.cos(n) * e, l = Math.sin(n) * e, c = Math.sin(t), f = c * u - l * o; return [Math.atan2(l * u + c * o, a * r + f * i), tn(f * r - a * i)]; }, e; }
    function ve(n, t) { var e = Math.cos(n), r = Math.sin(n); return function (i, u, o, a) { var l = o * t; null != i ? (i = de(e, i), u = de(e, u), (o > 0 ? u > i : i > u) && (i += o * Ho)) : (i = n + o * Ho, u = n - .5 * l); for (var c, f = i; o > 0 ? f > u : u > f; f -= l)
        a.point((c = _t([e, -r * Math.cos(f), -r * Math.sin(f)]))[0], c[1]); }; }
    function de(n, t) { var e = dt(t); e[0] -= n, bt(e); var r = nn(-e[1]); return ((-e[2] < 0 ? -r : r) + 2 * Math.PI - Uo) % (2 * Math.PI); }
    function ye(n, t, e) { var r = ao.range(n, t - Uo, e).concat(t); return function (n) { return r.map(function (t) { return [n, t]; }); }; }
    function me(n, t, e) { var r = ao.range(n, t - Uo, e).concat(t); return function (n) { return r.map(function (t) { return [t, n]; }); }; }
    function Me(n) { return n.source; }
    function xe(n) { return n.target; }
    function be(n, t, e, r) { var i = Math.cos(t), u = Math.sin(t), o = Math.cos(r), a = Math.sin(r), l = i * Math.cos(n), c = i * Math.sin(n), f = o * Math.cos(e), s = o * Math.sin(e), h = 2 * Math.asin(Math.sqrt(on(r - t) + i * o * on(e - n))), p = 1 / Math.sin(h), g = h ? function (n) { var t = Math.sin(n *= h) * p, e = Math.sin(h - n) * p, r = e * l + t * f, i = e * c + t * s, o = e * u + t * a; return [Math.atan2(i, r) * Zo, Math.atan2(o, Math.sqrt(r * r + i * i)) * Zo]; } : function () { return [n * Zo, t * Zo]; }; return g.distance = h, g; }
    function _e() { function n(n, i) { var u = Math.sin(i *= Yo), o = Math.cos(i), a = xo((n *= Yo) - t), l = Math.cos(a); Ja += Math.atan2(Math.sqrt((a = o * Math.sin(a)) * a + (a = r * u - e * o * l) * a), e * u + r * o * l), t = n, e = u, r = o; } var t, e, r; Ga.point = function (i, u) { t = i * Yo, e = Math.sin(u *= Yo), r = Math.cos(u), Ga.point = n; }, Ga.lineEnd = function () { Ga.point = Ga.lineEnd = b; }; }
    function we(n, t) { function e(t, e) { var r = Math.cos(t), i = Math.cos(e), u = n(r * i); return [u * i * Math.sin(t), u * Math.sin(e)]; } return e.invert = function (n, e) { var r = Math.sqrt(n * n + e * e), i = t(r), u = Math.sin(i), o = Math.cos(i); return [Math.atan2(n * u, r * o), Math.asin(r && e * u / r)]; }, e; }
    function Se(n, t) { function e(n, t) { o > 0 ? -Io + Uo > t && (t = -Io + Uo) : t > Io - Uo && (t = Io - Uo); var e = o / Math.pow(i(t), u); return [e * Math.sin(u * n), o - e * Math.cos(u * n)]; } var r = Math.cos(n), i = function (n) { return Math.tan(Fo / 4 + n / 2); }, u = n === t ? Math.sin(n) : Math.log(r / Math.cos(t)) / Math.log(i(t) / i(n)), o = r * Math.pow(i(n), u) / u; return u ? (e.invert = function (n, t) { var e = o - t, r = K(u) * Math.sqrt(n * n + e * e); return [Math.atan2(n, e) / u, 2 * Math.atan(Math.pow(o / r, 1 / u)) - Io]; }, e) : Ne; }
    function ke(n, t) { function e(n, t) { var e = u - t; return [e * Math.sin(i * n), u - e * Math.cos(i * n)]; } var r = Math.cos(n), i = n === t ? Math.sin(n) : (r - Math.cos(t)) / (t - n), u = r / i + n; return xo(i) < Uo ? ce : (e.invert = function (n, t) { var e = u - t; return [Math.atan2(n, e) / i, u - K(i) * Math.sqrt(n * n + e * e)]; }, e); }
    function Ne(n, t) { return [n, Math.log(Math.tan(Fo / 4 + t / 2))]; }
    function Ee(n) { var t, e = oe(n), r = e.scale, i = e.translate, u = e.clipExtent; return e.scale = function () { var n = r.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.translate = function () { var n = i.apply(e, arguments); return n === e ? t ? e.clipExtent(null) : e : n; }, e.clipExtent = function (n) { var o = u.apply(e, arguments); if (o === e) {
        if (t = null == n) {
            var a = Fo * r(), l = i();
            u([[l[0] - a, l[1] - a], [l[0] + a, l[1] + a]]);
        }
    }
    else
        t && (o = null); return o; }, e.clipExtent(null); }
    function Ae(n, t) { return [Math.log(Math.tan(Fo / 4 + t / 2)), -n]; }
    function Ce(n) { return n[0]; }
    function ze(n) { return n[1]; }
    function Le(n) { for (var t = n.length, e = [0, 1], r = 2, i = 2; t > i; i++) {
        for (; r > 1 && Q(n[e[r - 2]], n[e[r - 1]], n[i]) <= 0;)
            --r;
        e[r++] = i;
    } return e.slice(0, r); }
    function qe(n, t) { return n[0] - t[0] || n[1] - t[1]; }
    function Te(n, t, e) { return (e[0] - t[0]) * (n[1] - t[1]) < (e[1] - t[1]) * (n[0] - t[0]); }
    function Re(n, t, e, r) { var i = n[0], u = e[0], o = t[0] - i, a = r[0] - u, l = n[1], c = e[1], f = t[1] - l, s = r[1] - c, h = (a * (l - c) - s * (i - u)) / (s * o - a * f); return [i + h * o, l + h * f]; }
    function De(n) { var t = n[0], e = n[n.length - 1]; return !(t[0] - e[0] || t[1] - e[1]); }
    function Pe() { rr(this), this.edge = this.site = this.circle = null; }
    function Ue(n) { var t = cl.pop() || new Pe; return t.site = n, t; }
    function je(n) { Be(n), ol.remove(n), cl.push(n), rr(n); }
    function Fe(n) { var t = n.circle, e = t.x, r = t.cy, i = { x: e, y: r }, u = n.P, o = n.N, a = [n]; je(n); for (var l = u; l.circle && xo(e - l.circle.x) < Uo && xo(r - l.circle.cy) < Uo;)
        u = l.P, a.unshift(l), je(l), l = u; a.unshift(l), Be(l); for (var c = o; c.circle && xo(e - c.circle.x) < Uo && xo(r - c.circle.cy) < Uo;)
        o = c.N, a.push(c), je(c), c = o; a.push(c), Be(c); var f, s = a.length; for (f = 1; s > f; ++f)
        c = a[f], l = a[f - 1], nr(c.edge, l.site, c.site, i); l = a[0], c = a[s - 1], c.edge = Ke(l.site, c.site, null, i), $e(l), $e(c); }
    function He(n) { for (var t, e, r, i, u = n.x, o = n.y, a = ol._; a;)
        if (r = Oe(a, o) - u, r > Uo)
            a = a.L;
        else {
            if (i = u - Ie(a, o), !(i > Uo)) {
                r > -Uo ? (t = a.P, e = a) : i > -Uo ? (t = a, e = a.N) : t = e = a;
                break;
            }
            if (!a.R) {
                t = a;
                break;
            }
            a = a.R;
        } var l = Ue(n); if (ol.insert(t, l), t || e) {
        if (t === e)
            return Be(t), e = Ue(t.site), ol.insert(l, e), l.edge = e.edge = Ke(t.site, l.site), $e(t), void $e(e);
        if (!e)
            return void (l.edge = Ke(t.site, l.site));
        Be(t), Be(e);
        var c = t.site, f = c.x, s = c.y, h = n.x - f, p = n.y - s, g = e.site, v = g.x - f, d = g.y - s, y = 2 * (h * d - p * v), m = h * h + p * p, M = v * v + d * d, x = { x: (d * m - p * M) / y + f, y: (h * M - v * m) / y + s };
        nr(e.edge, c, g, x), l.edge = Ke(c, n, null, x), e.edge = Ke(n, g, null, x), $e(t), $e(e);
    } }
    function Oe(n, t) { var e = n.site, r = e.x, i = e.y, u = i - t; if (!u)
        return r; var o = n.P; if (!o)
        return -(1 / 0); e = o.site; var a = e.x, l = e.y, c = l - t; if (!c)
        return a; var f = a - r, s = 1 / u - 1 / c, h = f / c; return s ? (-h + Math.sqrt(h * h - 2 * s * (f * f / (-2 * c) - l + c / 2 + i - u / 2))) / s + r : (r + a) / 2; }
    function Ie(n, t) { var e = n.N; if (e)
        return Oe(e, t); var r = n.site; return r.y === t ? r.x : 1 / 0; }
    function Ye(n) { this.site = n, this.edges = []; }
    function Ze(n) { for (var t, e, r, i, u, o, a, l, c, f, s = n[0][0], h = n[1][0], p = n[0][1], g = n[1][1], v = ul, d = v.length; d--;)
        if (u = v[d], u && u.prepare())
            for (a = u.edges, l = a.length, o = 0; l > o;)
                f = a[o].end(), r = f.x, i = f.y, c = a[++o % l].start(), t = c.x, e = c.y, (xo(r - t) > Uo || xo(i - e) > Uo) && (a.splice(o, 0, new tr(Qe(u.site, f, xo(r - s) < Uo && g - i > Uo ? { x: s, y: xo(t - s) < Uo ? e : g } : xo(i - g) < Uo && h - r > Uo ? { x: xo(e - g) < Uo ? t : h, y: g } : xo(r - h) < Uo && i - p > Uo ? { x: h, y: xo(t - h) < Uo ? e : p } : xo(i - p) < Uo && r - s > Uo ? { x: xo(e - p) < Uo ? t : s, y: p } : null), u.site, null)), ++l); }
    function Ve(n, t) { return t.angle - n.angle; }
    function Xe() { rr(this), this.x = this.y = this.arc = this.site = this.cy = null; }
    function $e(n) { var t = n.P, e = n.N; if (t && e) {
        var r = t.site, i = n.site, u = e.site;
        if (r !== u) {
            var o = i.x, a = i.y, l = r.x - o, c = r.y - a, f = u.x - o, s = u.y - a, h = 2 * (l * s - c * f);
            if (!(h >= -jo)) {
                var p = l * l + c * c, g = f * f + s * s, v = (s * p - c * g) / h, d = (l * g - f * p) / h, s = d + a, y = fl.pop() || new Xe;
                y.arc = n, y.site = i, y.x = v + o, y.y = s + Math.sqrt(v * v + d * d), y.cy = s, n.circle = y;
                for (var m = null, M = ll._; M;)
                    if (y.y < M.y || y.y === M.y && y.x <= M.x) {
                        if (!M.L) {
                            m = M.P;
                            break;
                        }
                        M = M.L;
                    }
                    else {
                        if (!M.R) {
                            m = M;
                            break;
                        }
                        M = M.R;
                    }
                ll.insert(m, y), m || (al = y);
            }
        }
    } }
    function Be(n) { var t = n.circle; t && (t.P || (al = t.N), ll.remove(t), fl.push(t), rr(t), n.circle = null); }
    function We(n) { for (var t, e = il, r = Yt(n[0][0], n[0][1], n[1][0], n[1][1]), i = e.length; i--;)
        t = e[i], (!Je(t, n) || !r(t) || xo(t.a.x - t.b.x) < Uo && xo(t.a.y - t.b.y) < Uo) && (t.a = t.b = null, e.splice(i, 1)); }
    function Je(n, t) { var e = n.b; if (e)
        return !0; var r, i, u = n.a, o = t[0][0], a = t[1][0], l = t[0][1], c = t[1][1], f = n.l, s = n.r, h = f.x, p = f.y, g = s.x, v = s.y, d = (h + g) / 2, y = (p + v) / 2; if (v === p) {
        if (o > d || d >= a)
            return;
        if (h > g) {
            if (u) {
                if (u.y >= c)
                    return;
            }
            else
                u = { x: d, y: l };
            e = { x: d, y: c };
        }
        else {
            if (u) {
                if (u.y < l)
                    return;
            }
            else
                u = { x: d, y: c };
            e = { x: d, y: l };
        }
    }
    else if (r = (h - g) / (v - p), i = y - r * d, -1 > r || r > 1)
        if (h > g) {
            if (u) {
                if (u.y >= c)
                    return;
            }
            else
                u = { x: (l - i) / r, y: l };
            e = { x: (c - i) / r, y: c };
        }
        else {
            if (u) {
                if (u.y < l)
                    return;
            }
            else
                u = { x: (c - i) / r, y: c };
            e = { x: (l - i) / r, y: l };
        }
    else if (v > p) {
        if (u) {
            if (u.x >= a)
                return;
        }
        else
            u = { x: o, y: r * o + i };
        e = { x: a, y: r * a + i };
    }
    else {
        if (u) {
            if (u.x < o)
                return;
        }
        else
            u = { x: a, y: r * a + i };
        e = { x: o, y: r * o + i };
    } return n.a = u, n.b = e, !0; }
    function Ge(n, t) { this.l = n, this.r = t, this.a = this.b = null; }
    function Ke(n, t, e, r) { var i = new Ge(n, t); return il.push(i), e && nr(i, n, t, e), r && nr(i, t, n, r), ul[n.i].edges.push(new tr(i, n, t)), ul[t.i].edges.push(new tr(i, t, n)), i; }
    function Qe(n, t, e) { var r = new Ge(n, null); return r.a = t, r.b = e, il.push(r), r; }
    function nr(n, t, e, r) { n.a || n.b ? n.l === e ? n.b = r : n.a = r : (n.a = r, n.l = t, n.r = e); }
    function tr(n, t, e) { var r = n.a, i = n.b; this.edge = n, this.site = t, this.angle = e ? Math.atan2(e.y - t.y, e.x - t.x) : n.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y); }
    function er() { this._ = null; }
    function rr(n) { n.U = n.C = n.L = n.R = n.P = n.N = null; }
    function ir(n, t) { var e = t, r = t.R, i = e.U; i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e; }
    function ur(n, t) { var e = t, r = t.L, i = e.U; i ? i.L === e ? i.L = r : i.R = r : n._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e; }
    function or(n) { for (; n.L;)
        n = n.L; return n; }
    function ar(n, t) { var e, r, i, u = n.sort(lr).pop(); for (il = [], ul = new Array(n.length), ol = new er, ll = new er;;)
        if (i = al, u && (!i || u.y < i.y || u.y === i.y && u.x < i.x))
            u.x === e && u.y === r || (ul[u.i] = new Ye(u), He(u), e = u.x, r = u.y), u = n.pop();
        else {
            if (!i)
                break;
            Fe(i.arc);
        } t && (We(t), Ze(t)); var o = { cells: ul, edges: il }; return ol = ll = il = ul = null, o; }
    function lr(n, t) { return t.y - n.y || t.x - n.x; }
    function cr(n, t, e) { return (n.x - e.x) * (t.y - n.y) - (n.x - t.x) * (e.y - n.y); }
    function fr(n) { return n.x; }
    function sr(n) { return n.y; }
    function hr() { return { leaf: !0, nodes: [], point: null, x: null, y: null }; }
    function pr(n, t, e, r, i, u) { if (!n(t, e, r, i, u)) {
        var o = .5 * (e + i), a = .5 * (r + u), l = t.nodes;
        l[0] && pr(n, l[0], e, r, o, a), l[1] && pr(n, l[1], o, r, i, a), l[2] && pr(n, l[2], e, a, o, u), l[3] && pr(n, l[3], o, a, i, u);
    } }
    function gr(n, t, e, r, i, u, o) { var a, l = 1 / 0; return function c(n, f, s, h, p) { if (!(f > u || s > o || r > h || i > p)) {
        if (g = n.point) {
            var g, v = t - n.x, d = e - n.y, y = v * v + d * d;
            if (l > y) {
                var m = Math.sqrt(l = y);
                r = t - m, i = e - m, u = t + m, o = e + m, a = g;
            }
        }
        for (var M = n.nodes, x = .5 * (f + h), b = .5 * (s + p), _ = t >= x, w = e >= b, S = w << 1 | _, k = S + 4; k > S; ++S)
            if (n = M[3 & S])
                switch (3 & S) {
                    case 0:
                        c(n, f, s, x, b);
                        break;
                    case 1:
                        c(n, x, s, h, b);
                        break;
                    case 2:
                        c(n, f, b, x, p);
                        break;
                    case 3: c(n, x, b, h, p);
                }
    } }(n, r, i, u, o), a; }
    function vr(n, t) { n = ao.rgb(n), t = ao.rgb(t); var e = n.r, r = n.g, i = n.b, u = t.r - e, o = t.g - r, a = t.b - i; return function (n) { return "#" + bn(Math.round(e + u * n)) + bn(Math.round(r + o * n)) + bn(Math.round(i + a * n)); }; }
    function dr(n, t) { var e, r = {}, i = {}; for (e in n)
        e in t ? r[e] = Mr(n[e], t[e]) : i[e] = n[e]; for (e in t)
        e in n || (i[e] = t[e]); return function (n) { for (e in r)
        i[e] = r[e](n); return i; }; }
    function yr(n, t) { return n = +n, t = +t, function (e) { return n * (1 - e) + t * e; }; }
    function mr(n, t) { var e, r, i, u = hl.lastIndex = pl.lastIndex = 0, o = -1, a = [], l = []; for (n += "", t += ""; (e = hl.exec(n)) && (r = pl.exec(t));)
        (i = r.index) > u && (i = t.slice(u, i), a[o] ? a[o] += i : a[++o] = i), (e = e[0]) === (r = r[0]) ? a[o] ? a[o] += r : a[++o] = r : (a[++o] = null, l.push({ i: o, x: yr(e, r) })), u = pl.lastIndex; return u < t.length && (i = t.slice(u), a[o] ? a[o] += i : a[++o] = i), a.length < 2 ? l[0] ? (t = l[0].x, function (n) { return t(n) + ""; }) : function () { return t; } : (t = l.length, function (n) { for (var e, r = 0; t > r; ++r)
        a[(e = l[r]).i] = e.x(n); return a.join(""); }); }
    function Mr(n, t) { for (var e, r = ao.interpolators.length; --r >= 0 && !(e = ao.interpolators[r](n, t));)
        ; return e; }
    function xr(n, t) { var e, r = [], i = [], u = n.length, o = t.length, a = Math.min(n.length, t.length); for (e = 0; a > e; ++e)
        r.push(Mr(n[e], t[e])); for (; u > e; ++e)
        i[e] = n[e]; for (; o > e; ++e)
        i[e] = t[e]; return function (n) { for (e = 0; a > e; ++e)
        i[e] = r[e](n); return i; }; }
    function br(n) { return function (t) { return 0 >= t ? 0 : t >= 1 ? 1 : n(t); }; }
    function _r(n) { return function (t) { return 1 - n(1 - t); }; }
    function wr(n) { return function (t) { return .5 * (.5 > t ? n(2 * t) : 2 - n(2 - 2 * t)); }; }
    function Sr(n) { return n * n; }
    function kr(n) { return n * n * n; }
    function Nr(n) { if (0 >= n)
        return 0; if (n >= 1)
        return 1; var t = n * n, e = t * n; return 4 * (.5 > n ? e : 3 * (n - t) + e - .75); }
    function Er(n) { return function (t) { return Math.pow(t, n); }; }
    function Ar(n) { return 1 - Math.cos(n * Io); }
    function Cr(n) { return Math.pow(2, 10 * (n - 1)); }
    function zr(n) { return 1 - Math.sqrt(1 - n * n); }
    function Lr(n, t) { var e; return arguments.length < 2 && (t = .45), arguments.length ? e = t / Ho * Math.asin(1 / n) : (n = 1, e = t / 4), function (r) { return 1 + n * Math.pow(2, -10 * r) * Math.sin((r - e) * Ho / t); }; }
    function qr(n) { return n || (n = 1.70158), function (t) { return t * t * ((n + 1) * t - n); }; }
    function Tr(n) { return 1 / 2.75 > n ? 7.5625 * n * n : 2 / 2.75 > n ? 7.5625 * (n -= 1.5 / 2.75) * n + .75 : 2.5 / 2.75 > n ? 7.5625 * (n -= 2.25 / 2.75) * n + .9375 : 7.5625 * (n -= 2.625 / 2.75) * n + .984375; }
    function Rr(n, t) { n = ao.hcl(n), t = ao.hcl(t); var e = n.h, r = n.c, i = n.l, u = t.h - e, o = t.c - r, a = t.l - i; return isNaN(o) && (o = 0, r = isNaN(r) ? t.c : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) { return sn(e + u * n, r + o * n, i + a * n) + ""; }; }
    function Dr(n, t) { n = ao.hsl(n), t = ao.hsl(t); var e = n.h, r = n.s, i = n.l, u = t.h - e, o = t.s - r, a = t.l - i; return isNaN(o) && (o = 0, r = isNaN(r) ? t.s : r), isNaN(u) ? (u = 0, e = isNaN(e) ? t.h : e) : u > 180 ? u -= 360 : -180 > u && (u += 360), function (n) { return cn(e + u * n, r + o * n, i + a * n) + ""; }; }
    function Pr(n, t) { n = ao.lab(n), t = ao.lab(t); var e = n.l, r = n.a, i = n.b, u = t.l - e, o = t.a - r, a = t.b - i; return function (n) { return pn(e + u * n, r + o * n, i + a * n) + ""; }; }
    function Ur(n, t) { return t -= n, function (e) { return Math.round(n + t * e); }; }
    function jr(n) { var t = [n.a, n.b], e = [n.c, n.d], r = Hr(t), i = Fr(t, e), u = Hr(Or(e, t, -i)) || 0; t[0] * e[1] < e[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-e[0], e[1])) * Zo, this.translate = [n.e, n.f], this.scale = [r, u], this.skew = u ? Math.atan2(i, u) * Zo : 0; }
    function Fr(n, t) { return n[0] * t[0] + n[1] * t[1]; }
    function Hr(n) { var t = Math.sqrt(Fr(n, n)); return t && (n[0] /= t, n[1] /= t), t; }
    function Or(n, t, e) { return n[0] += e * t[0], n[1] += e * t[1], n; }
    function Ir(n) { return n.length ? n.pop() + "," : ""; }
    function Yr(n, t, e, r) { if (n[0] !== t[0] || n[1] !== t[1]) {
        var i = e.push("translate(", null, ",", null, ")");
        r.push({ i: i - 4, x: yr(n[0], t[0]) }, { i: i - 2, x: yr(n[1], t[1]) });
    }
    else
        (t[0] || t[1]) && e.push("translate(" + t + ")"); }
    function Zr(n, t, e, r) { n !== t ? (n - t > 180 ? t += 360 : t - n > 180 && (n += 360), r.push({ i: e.push(Ir(e) + "rotate(", null, ")") - 2, x: yr(n, t) })) : t && e.push(Ir(e) + "rotate(" + t + ")"); }
    function Vr(n, t, e, r) { n !== t ? r.push({ i: e.push(Ir(e) + "skewX(", null, ")") - 2, x: yr(n, t) }) : t && e.push(Ir(e) + "skewX(" + t + ")"); }
    function Xr(n, t, e, r) { if (n[0] !== t[0] || n[1] !== t[1]) {
        var i = e.push(Ir(e) + "scale(", null, ",", null, ")");
        r.push({ i: i - 4, x: yr(n[0], t[0]) }, { i: i - 2, x: yr(n[1], t[1]) });
    }
    else
        1 === t[0] && 1 === t[1] || e.push(Ir(e) + "scale(" + t + ")"); }
    function $r(n, t) { var e = [], r = []; return n = ao.transform(n), t = ao.transform(t), Yr(n.translate, t.translate, e, r), Zr(n.rotate, t.rotate, e, r), Vr(n.skew, t.skew, e, r), Xr(n.scale, t.scale, e, r), n = t = null, function (n) { for (var t, i = -1, u = r.length; ++i < u;)
        e[(t = r[i]).i] = t.x(n); return e.join(""); }; }
    function Br(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return (e - n) / t; }; }
    function Wr(n, t) { return t = (t -= n = +n) || 1 / t, function (e) { return Math.max(0, Math.min(1, (e - n) / t)); }; }
    function Jr(n) { for (var t = n.source, e = n.target, r = Kr(t, e), i = [t]; t !== r;)
        t = t.parent, i.push(t); for (var u = i.length; e !== r;)
        i.splice(u, 0, e), e = e.parent; return i; }
    function Gr(n) { for (var t = [], e = n.parent; null != e;)
        t.push(n), n = e, e = e.parent; return t.push(n), t; }
    function Kr(n, t) { if (n === t)
        return n; for (var e = Gr(n), r = Gr(t), i = e.pop(), u = r.pop(), o = null; i === u;)
        o = i, i = e.pop(), u = r.pop(); return o; }
    function Qr(n) { n.fixed |= 2; }
    function ni(n) { n.fixed &= -7; }
    function ti(n) { n.fixed |= 4, n.px = n.x, n.py = n.y; }
    function ei(n) { n.fixed &= -5; }
    function ri(n, t, e) { var r = 0, i = 0; if (n.charge = 0, !n.leaf)
        for (var u, o = n.nodes, a = o.length, l = -1; ++l < a;)
            u = o[l], null != u && (ri(u, t, e), n.charge += u.charge, r += u.charge * u.cx, i += u.charge * u.cy); if (n.point) {
        n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
        var c = t * e[n.point.index];
        n.charge += n.pointCharge = c, r += c * n.point.x, i += c * n.point.y;
    } n.cx = r / n.charge, n.cy = i / n.charge; }
    function ii(n, t) { return ao.rebind(n, t, "sort", "children", "value"), n.nodes = n, n.links = fi, n; }
    function ui(n, t) { for (var e = [n]; null != (n = e.pop());)
        if (t(n), (i = n.children) && (r = i.length))
            for (var r, i; --r >= 0;)
                e.push(i[r]); }
    function oi(n, t) { for (var e = [n], r = []; null != (n = e.pop());)
        if (r.push(n), (u = n.children) && (i = u.length))
            for (var i, u, o = -1; ++o < i;)
                e.push(u[o]); for (; null != (n = r.pop());)
        t(n); }
    function ai(n) { return n.children; }
    function li(n) { return n.value; }
    function ci(n, t) { return t.value - n.value; }
    function fi(n) { return ao.merge(n.map(function (n) { return (n.children || []).map(function (t) { return { source: n, target: t }; }); })); }
    function si(n) { return n.x; }
    function hi(n) { return n.y; }
    function pi(n, t, e) { n.y0 = t, n.y = e; }
    function gi(n) { return ao.range(n.length); }
    function vi(n) { for (var t = -1, e = n[0].length, r = []; ++t < e;)
        r[t] = 0; return r; }
    function di(n) { for (var t, e = 1, r = 0, i = n[0][1], u = n.length; u > e; ++e)
        (t = n[e][1]) > i && (r = e, i = t); return r; }
    function yi(n) { return n.reduce(mi, 0); }
    function mi(n, t) { return n + t[1]; }
    function Mi(n, t) { return xi(n, Math.ceil(Math.log(t.length) / Math.LN2 + 1)); }
    function xi(n, t) { for (var e = -1, r = +n[0], i = (n[1] - r) / t, u = []; ++e <= t;)
        u[e] = i * e + r; return u; }
    function bi(n) { return [ao.min(n), ao.max(n)]; }
    function _i(n, t) { return n.value - t.value; }
    function wi(n, t) { var e = n._pack_next; n._pack_next = t, t._pack_prev = n, t._pack_next = e, e._pack_prev = t; }
    function Si(n, t) { n._pack_next = t, t._pack_prev = n; }
    function ki(n, t) { var e = t.x - n.x, r = t.y - n.y, i = n.r + t.r; return .999 * i * i > e * e + r * r; }
    function Ni(n) { function t(n) { f = Math.min(n.x - n.r, f), s = Math.max(n.x + n.r, s), h = Math.min(n.y - n.r, h), p = Math.max(n.y + n.r, p); } if ((e = n.children) && (c = e.length)) {
        var e, r, i, u, o, a, l, c, f = 1 / 0, s = -(1 / 0), h = 1 / 0, p = -(1 / 0);
        if (e.forEach(Ei), r = e[0], r.x = -r.r, r.y = 0, t(r), c > 1 && (i = e[1], i.x = i.r, i.y = 0, t(i), c > 2))
            for (u = e[2], zi(r, i, u), t(u), wi(r, u), r._pack_prev = u, wi(u, i), i = r._pack_next, o = 3; c > o; o++) {
                zi(r, i, u = e[o]);
                var g = 0, v = 1, d = 1;
                for (a = i._pack_next; a !== i; a = a._pack_next, v++)
                    if (ki(a, u)) {
                        g = 1;
                        break;
                    }
                if (1 == g)
                    for (l = r._pack_prev; l !== a._pack_prev && !ki(l, u); l = l._pack_prev, d++)
                        ;
                g ? (d > v || v == d && i.r < r.r ? Si(r, i = a) : Si(r = l, i), o--) : (wi(r, u), i = u, t(u));
            }
        var y = (f + s) / 2, m = (h + p) / 2, M = 0;
        for (o = 0; c > o; o++)
            u = e[o], u.x -= y, u.y -= m, M = Math.max(M, u.r + Math.sqrt(u.x * u.x + u.y * u.y));
        n.r = M, e.forEach(Ai);
    } }
    function Ei(n) { n._pack_next = n._pack_prev = n; }
    function Ai(n) { delete n._pack_next, delete n._pack_prev; }
    function Ci(n, t, e, r) { var i = n.children; if (n.x = t += r * n.x, n.y = e += r * n.y, n.r *= r, i)
        for (var u = -1, o = i.length; ++u < o;)
            Ci(i[u], t, e, r); }
    function zi(n, t, e) { var r = n.r + e.r, i = t.x - n.x, u = t.y - n.y; if (r && (i || u)) {
        var o = t.r + e.r, a = i * i + u * u;
        o *= o, r *= r;
        var l = .5 + (r - o) / (2 * a), c = Math.sqrt(Math.max(0, 2 * o * (r + a) - (r -= a) * r - o * o)) / (2 * a);
        e.x = n.x + l * i + c * u, e.y = n.y + l * u - c * i;
    }
    else
        e.x = n.x + r, e.y = n.y; }
    function Li(n, t) { return n.parent == t.parent ? 1 : 2; }
    function qi(n) { var t = n.children; return t.length ? t[0] : n.t; }
    function Ti(n) { var t, e = n.children; return (t = e.length) ? e[t - 1] : n.t; }
    function Ri(n, t, e) { var r = e / (t.i - n.i); t.c -= r, t.s += e, n.c += r, t.z += e, t.m += e; }
    function Di(n) { for (var t, e = 0, r = 0, i = n.children, u = i.length; --u >= 0;)
        t = i[u], t.z += e, t.m += e, e += t.s + (r += t.c); }
    function Pi(n, t, e) { return n.a.parent === t.parent ? n.a : e; }
    function Ui(n) { return 1 + ao.max(n, function (n) { return n.y; }); }
    function ji(n) { return n.reduce(function (n, t) { return n + t.x; }, 0) / n.length; }
    function Fi(n) { var t = n.children; return t && t.length ? Fi(t[0]) : n; }
    function Hi(n) { var t, e = n.children; return e && (t = e.length) ? Hi(e[t - 1]) : n; }
    function Oi(n) { return { x: n.x, y: n.y, dx: n.dx, dy: n.dy }; }
    function Ii(n, t) { var e = n.x + t[3], r = n.y + t[0], i = n.dx - t[1] - t[3], u = n.dy - t[0] - t[2]; return 0 > i && (e += i / 2, i = 0), 0 > u && (r += u / 2, u = 0), { x: e, y: r, dx: i, dy: u }; }
    function Yi(n) { var t = n[0], e = n[n.length - 1]; return e > t ? [t, e] : [e, t]; }
    function Zi(n) { return n.rangeExtent ? n.rangeExtent() : Yi(n.range()); }
    function Vi(n, t, e, r) { var i = e(n[0], n[1]), u = r(t[0], t[1]); return function (n) { return u(i(n)); }; }
    function Xi(n, t) { var e, r = 0, i = n.length - 1, u = n[r], o = n[i]; return u > o && (e = r, r = i, i = e, e = u, u = o, o = e), n[r] = t.floor(u), n[i] = t.ceil(o), n; }
    function $i(n) { return n ? { floor: function (t) { return Math.floor(t / n) * n; }, ceil: function (t) { return Math.ceil(t / n) * n; } } : Sl; }
    function Bi(n, t, e, r) { var i = [], u = [], o = 0, a = Math.min(n.length, t.length) - 1; for (n[a] < n[0] && (n = n.slice().reverse(), t = t.slice().reverse()); ++o <= a;)
        i.push(e(n[o - 1], n[o])), u.push(r(t[o - 1], t[o])); return function (t) { var e = ao.bisect(n, t, 1, a) - 1; return u[e](i[e](t)); }; }
    function Wi(n, t, e, r) { function i() { var i = Math.min(n.length, t.length) > 2 ? Bi : Vi, l = r ? Wr : Br; return o = i(n, t, l, e), a = i(t, n, l, Mr), u; } function u(n) { return o(n); } var o, a; return u.invert = function (n) { return a(n); }, u.domain = function (t) { return arguments.length ? (n = t.map(Number), i()) : n; }, u.range = function (n) { return arguments.length ? (t = n, i()) : t; }, u.rangeRound = function (n) { return u.range(n).interpolate(Ur); }, u.clamp = function (n) { return arguments.length ? (r = n, i()) : r; }, u.interpolate = function (n) { return arguments.length ? (e = n, i()) : e; }, u.ticks = function (t) { return Qi(n, t); }, u.tickFormat = function (t, e) { return nu(n, t, e); }, u.nice = function (t) { return Gi(n, t), i(); }, u.copy = function () { return Wi(n, t, e, r); }, i(); }
    function Ji(n, t) { return ao.rebind(n, t, "range", "rangeRound", "interpolate", "clamp"); }
    function Gi(n, t) { return Xi(n, $i(Ki(n, t)[2])), Xi(n, $i(Ki(n, t)[2])), n; }
    function Ki(n, t) { null == t && (t = 10); var e = Yi(n), r = e[1] - e[0], i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)), u = t / r * i; return .15 >= u ? i *= 10 : .35 >= u ? i *= 5 : .75 >= u && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e; }
    function Qi(n, t) { return ao.range.apply(ao, Ki(n, t)); }
    function nu(n, t, e) { var r = Ki(n, t); if (e) {
        var i = ha.exec(e);
        if (i.shift(), "s" === i[8]) {
            var u = ao.formatPrefix(Math.max(xo(r[0]), xo(r[1])));
            return i[7] || (i[7] = "." + tu(u.scale(r[2]))), i[8] = "f", e = ao.format(i.join("")), function (n) { return e(u.scale(n)) + u.symbol; };
        }
        i[7] || (i[7] = "." + eu(i[8], r)), e = i.join("");
    }
    else
        e = ",." + tu(r[2]) + "f"; return ao.format(e); }
    function tu(n) { return -Math.floor(Math.log(n) / Math.LN10 + .01); }
    function eu(n, t) { var e = tu(t[2]); return n in kl ? Math.abs(e - tu(Math.max(xo(t[0]), xo(t[1])))) + +("e" !== n) : e - 2 * ("%" === n); }
    function ru(n, t, e, r) { function i(n) { return (e ? Math.log(0 > n ? 0 : n) : -Math.log(n > 0 ? 0 : -n)) / Math.log(t); } function u(n) { return e ? Math.pow(t, n) : -Math.pow(t, -n); } function o(t) { return n(i(t)); } return o.invert = function (t) { return u(n.invert(t)); }, o.domain = function (t) { return arguments.length ? (e = t[0] >= 0, n.domain((r = t.map(Number)).map(i)), o) : r; }, o.base = function (e) { return arguments.length ? (t = +e, n.domain(r.map(i)), o) : t; }, o.nice = function () { var t = Xi(r.map(i), e ? Math : El); return n.domain(t), r = t.map(u), o; }, o.ticks = function () { var n = Yi(r), o = [], a = n[0], l = n[1], c = Math.floor(i(a)), f = Math.ceil(i(l)), s = t % 1 ? 2 : t; if (isFinite(f - c)) {
        if (e) {
            for (; f > c; c++)
                for (var h = 1; s > h; h++)
                    o.push(u(c) * h);
            o.push(u(c));
        }
        else
            for (o.push(u(c)); c++ < f;)
                for (var h = s - 1; h > 0; h--)
                    o.push(u(c) * h);
        for (c = 0; o[c] < a; c++)
            ;
        for (f = o.length; o[f - 1] > l; f--)
            ;
        o = o.slice(c, f);
    } return o; }, o.tickFormat = function (n, e) { if (!arguments.length)
        return Nl; arguments.length < 2 ? e = Nl : "function" != typeof e && (e = ao.format(e)); var r = Math.max(1, t * n / o.ticks().length); return function (n) { var o = n / u(Math.round(i(n))); return t - .5 > o * t && (o *= t), r >= o ? e(n) : ""; }; }, o.copy = function () { return ru(n.copy(), t, e, r); }, Ji(o, n); }
    function iu(n, t, e) { function r(t) { return n(i(t)); } var i = uu(t), u = uu(1 / t); return r.invert = function (t) { return u(n.invert(t)); }, r.domain = function (t) { return arguments.length ? (n.domain((e = t.map(Number)).map(i)), r) : e; }, r.ticks = function (n) { return Qi(e, n); }, r.tickFormat = function (n, t) { return nu(e, n, t); }, r.nice = function (n) { return r.domain(Gi(e, n)); }, r.exponent = function (o) { return arguments.length ? (i = uu(t = o), u = uu(1 / t), n.domain(e.map(i)), r) : t; }, r.copy = function () { return iu(n.copy(), t, e); }, Ji(r, n); }
    function uu(n) { return function (t) { return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n); }; }
    function ou(n, t) { function e(e) { return u[((i.get(e) || ("range" === t.t ? i.set(e, n.push(e)) : NaN)) - 1) % u.length]; } function r(t, e) { return ao.range(n.length).map(function (n) { return t + e * n; }); } var i, u, o; return e.domain = function (r) { if (!arguments.length)
        return n; n = [], i = new c; for (var u, o = -1, a = r.length; ++o < a;)
        i.has(u = r[o]) || i.set(u, n.push(u)); return e[t.t].apply(e, t.a); }, e.range = function (n) { return arguments.length ? (u = n, o = 0, t = { t: "range", a: arguments }, e) : u; }, e.rangePoints = function (i, a) { arguments.length < 2 && (a = 0); var l = i[0], c = i[1], f = n.length < 2 ? (l = (l + c) / 2, 0) : (c - l) / (n.length - 1 + a); return u = r(l + f * a / 2, f), o = 0, t = { t: "rangePoints", a: arguments }, e; }, e.rangeRoundPoints = function (i, a) { arguments.length < 2 && (a = 0); var l = i[0], c = i[1], f = n.length < 2 ? (l = c = Math.round((l + c) / 2), 0) : (c - l) / (n.length - 1 + a) | 0; return u = r(l + Math.round(f * a / 2 + (c - l - (n.length - 1 + a) * f) / 2), f), o = 0, t = { t: "rangeRoundPoints", a: arguments }, e; }, e.rangeBands = function (i, a, l) { arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a); var c = i[1] < i[0], f = i[c - 0], s = i[1 - c], h = (s - f) / (n.length - a + 2 * l); return u = r(f + h * l, h), c && u.reverse(), o = h * (1 - a), t = { t: "rangeBands", a: arguments }, e; }, e.rangeRoundBands = function (i, a, l) { arguments.length < 2 && (a = 0), arguments.length < 3 && (l = a); var c = i[1] < i[0], f = i[c - 0], s = i[1 - c], h = Math.floor((s - f) / (n.length - a + 2 * l)); return u = r(f + Math.round((s - f - (n.length - a) * h) / 2), h), c && u.reverse(), o = Math.round(h * (1 - a)), t = { t: "rangeRoundBands", a: arguments }, e; }, e.rangeBand = function () { return o; }, e.rangeExtent = function () { return Yi(t.a[0]); }, e.copy = function () { return ou(n, t); }, e.domain(n); }
    function au(n, t) { function u() { var e = 0, r = t.length; for (a = []; ++e < r;)
        a[e - 1] = ao.quantile(n, e / r); return o; } function o(n) { return isNaN(n = +n) ? void 0 : t[ao.bisect(a, n)]; } var a; return o.domain = function (t) { return arguments.length ? (n = t.map(r).filter(i).sort(e), u()) : n; }, o.range = function (n) { return arguments.length ? (t = n, u()) : t; }, o.quantiles = function () { return a; }, o.invertExtent = function (e) { return e = t.indexOf(e), 0 > e ? [NaN, NaN] : [e > 0 ? a[e - 1] : n[0], e < a.length ? a[e] : n[n.length - 1]]; }, o.copy = function () { return au(n, t); }, u(); }
    function lu(n, t, e) { function r(t) { return e[Math.max(0, Math.min(o, Math.floor(u * (t - n))))]; } function i() { return u = e.length / (t - n), o = e.length - 1, r; } var u, o; return r.domain = function (e) { return arguments.length ? (n = +e[0], t = +e[e.length - 1], i()) : [n, t]; }, r.range = function (n) { return arguments.length ? (e = n, i()) : e; }, r.invertExtent = function (t) { return t = e.indexOf(t), t = 0 > t ? NaN : t / u + n, [t, t + 1 / u]; }, r.copy = function () { return lu(n, t, e); }, i(); }
    function cu(n, t) { function e(e) { return e >= e ? t[ao.bisect(n, e)] : void 0; } return e.domain = function (t) { return arguments.length ? (n = t, e) : n; }, e.range = function (n) { return arguments.length ? (t = n, e) : t; }, e.invertExtent = function (e) { return e = t.indexOf(e), [n[e - 1], n[e]]; }, e.copy = function () { return cu(n, t); }, e; }
    function fu(n) { function t(n) { return +n; } return t.invert = t, t.domain = t.range = function (e) { return arguments.length ? (n = e.map(t), t) : n; }, t.ticks = function (t) { return Qi(n, t); }, t.tickFormat = function (t, e) { return nu(n, t, e); }, t.copy = function () { return fu(n); }, t; }
    function su() { return 0; }
    function hu(n) { return n.innerRadius; }
    function pu(n) { return n.outerRadius; }
    function gu(n) { return n.startAngle; }
    function vu(n) { return n.endAngle; }
    function du(n) { return n && n.padAngle; }
    function yu(n, t, e, r) { return (n - e) * t - (t - r) * n > 0 ? 0 : 1; }
    function mu(n, t, e, r, i) { var u = n[0] - t[0], o = n[1] - t[1], a = (i ? r : -r) / Math.sqrt(u * u + o * o), l = a * o, c = -a * u, f = n[0] + l, s = n[1] + c, h = t[0] + l, p = t[1] + c, g = (f + h) / 2, v = (s + p) / 2, d = h - f, y = p - s, m = d * d + y * y, M = e - r, x = f * p - h * s, b = (0 > y ? -1 : 1) * Math.sqrt(Math.max(0, M * M * m - x * x)), _ = (x * y - d * b) / m, w = (-x * d - y * b) / m, S = (x * y + d * b) / m, k = (-x * d + y * b) / m, N = _ - g, E = w - v, A = S - g, C = k - v; return N * N + E * E > A * A + C * C && (_ = S, w = k), [[_ - l, w - c], [_ * e / M, w * e / M]]; }
    function Mu(n) { function t(t) { function o() { c.push("M", u(n(f), a)); } for (var l, c = [], f = [], s = -1, h = t.length, p = En(e), g = En(r); ++s < h;)
        i.call(this, l = t[s], s) ? f.push([+p.call(this, l, s), +g.call(this, l, s)]) : f.length && (o(), f = []); return f.length && o(), c.length ? c.join("") : null; } var e = Ce, r = ze, i = zt, u = xu, o = u.key, a = .7; return t.x = function (n) { return arguments.length ? (e = n, t) : e; }, t.y = function (n) { return arguments.length ? (r = n, t) : r; }, t.defined = function (n) { return arguments.length ? (i = n, t) : i; }, t.interpolate = function (n) { return arguments.length ? (o = "function" == typeof n ? u = n : (u = Tl.get(n) || xu).key, t) : o; }, t.tension = function (n) { return arguments.length ? (a = n, t) : a; }, t; }
    function xu(n) { return n.length > 1 ? n.join("L") : n + "Z"; }
    function bu(n) { return n.join("L") + "Z"; }
    function _u(n) { for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;)
        i.push("H", (r[0] + (r = n[t])[0]) / 2, "V", r[1]); return e > 1 && i.push("H", r[0]), i.join(""); }
    function wu(n) { for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;)
        i.push("V", (r = n[t])[1], "H", r[0]); return i.join(""); }
    function Su(n) { for (var t = 0, e = n.length, r = n[0], i = [r[0], ",", r[1]]; ++t < e;)
        i.push("H", (r = n[t])[0], "V", r[1]); return i.join(""); }
    function ku(n, t) { return n.length < 4 ? xu(n) : n[1] + Au(n.slice(1, -1), Cu(n, t)); }
    function Nu(n, t) { return n.length < 3 ? bu(n) : n[0] + Au((n.push(n[0]), n), Cu([n[n.length - 2]].concat(n, [n[1]]), t)); }
    function Eu(n, t) { return n.length < 3 ? xu(n) : n[0] + Au(n, Cu(n, t)); }
    function Au(n, t) { if (t.length < 1 || n.length != t.length && n.length != t.length + 2)
        return xu(n); var e = n.length != t.length, r = "", i = n[0], u = n[1], o = t[0], a = o, l = 1; if (e && (r += "Q" + (u[0] - 2 * o[0] / 3) + "," + (u[1] - 2 * o[1] / 3) + "," + u[0] + "," + u[1], i = n[1], l = 2), t.length > 1) {
        a = t[1], u = n[l], l++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
        for (var c = 2; c < t.length; c++, l++)
            u = n[l], a = t[c], r += "S" + (u[0] - a[0]) + "," + (u[1] - a[1]) + "," + u[0] + "," + u[1];
    } if (e) {
        var f = n[l];
        r += "Q" + (u[0] + 2 * a[0] / 3) + "," + (u[1] + 2 * a[1] / 3) + "," + f[0] + "," + f[1];
    } return r; }
    function Cu(n, t) { for (var e, r = [], i = (1 - t) / 2, u = n[0], o = n[1], a = 1, l = n.length; ++a < l;)
        e = u, u = o, o = n[a], r.push([i * (o[0] - e[0]), i * (o[1] - e[1])]); return r; }
    function zu(n) { if (n.length < 3)
        return xu(n); var t = 1, e = n.length, r = n[0], i = r[0], u = r[1], o = [i, i, i, (r = n[1])[0]], a = [u, u, u, r[1]], l = [i, ",", u, "L", Ru(Pl, o), ",", Ru(Pl, a)]; for (n.push(n[e - 1]); ++t <= e;)
        r = n[t], o.shift(), o.push(r[0]), a.shift(), a.push(r[1]), Du(l, o, a); return n.pop(), l.push("L", r), l.join(""); }
    function Lu(n) { if (n.length < 4)
        return xu(n); for (var t, e = [], r = -1, i = n.length, u = [0], o = [0]; ++r < 3;)
        t = n[r], u.push(t[0]), o.push(t[1]); for (e.push(Ru(Pl, u) + "," + Ru(Pl, o)), --r; ++r < i;)
        t = n[r], u.shift(), u.push(t[0]), o.shift(), o.push(t[1]), Du(e, u, o); return e.join(""); }
    function qu(n) { for (var t, e, r = -1, i = n.length, u = i + 4, o = [], a = []; ++r < 4;)
        e = n[r % i], o.push(e[0]), a.push(e[1]); for (t = [Ru(Pl, o), ",", Ru(Pl, a)], --r; ++r < u;)
        e = n[r % i], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), Du(t, o, a); return t.join(""); }
    function Tu(n, t) { var e = n.length - 1; if (e)
        for (var r, i, u = n[0][0], o = n[0][1], a = n[e][0] - u, l = n[e][1] - o, c = -1; ++c <= e;)
            r = n[c], i = c / e, r[0] = t * r[0] + (1 - t) * (u + i * a), r[1] = t * r[1] + (1 - t) * (o + i * l); return zu(n); }
    function Ru(n, t) { return n[0] * t[0] + n[1] * t[1] + n[2] * t[2] + n[3] * t[3]; }
    function Du(n, t, e) { n.push("C", Ru(Rl, t), ",", Ru(Rl, e), ",", Ru(Dl, t), ",", Ru(Dl, e), ",", Ru(Pl, t), ",", Ru(Pl, e)); }
    function Pu(n, t) { return (t[1] - n[1]) / (t[0] - n[0]); }
    function Uu(n) { for (var t = 0, e = n.length - 1, r = [], i = n[0], u = n[1], o = r[0] = Pu(i, u); ++t < e;)
        r[t] = (o + (o = Pu(i = u, u = n[t + 1]))) / 2; return r[t] = o, r; }
    function ju(n) { for (var t, e, r, i, u = [], o = Uu(n), a = -1, l = n.length - 1; ++a < l;)
        t = Pu(n[a], n[a + 1]), xo(t) < Uo ? o[a] = o[a + 1] = 0 : (e = o[a] / t, r = o[a + 1] / t, i = e * e + r * r, i > 9 && (i = 3 * t / Math.sqrt(i), o[a] = i * e, o[a + 1] = i * r)); for (a = -1; ++a <= l;)
        i = (n[Math.min(l, a + 1)][0] - n[Math.max(0, a - 1)][0]) / (6 * (1 + o[a] * o[a])), u.push([i || 0, o[a] * i || 0]); return u; }
    function Fu(n) { return n.length < 3 ? xu(n) : n[0] + Au(n, ju(n)); }
    function Hu(n) { for (var t, e, r, i = -1, u = n.length; ++i < u;)
        t = n[i], e = t[0], r = t[1] - Io, t[0] = e * Math.cos(r), t[1] = e * Math.sin(r); return n; }
    function Ou(n) {
        function t(t) {
            function l() { v.push("M", a(n(y), s), f, c(n(d.reverse()), s), "Z"); }
            for (var h, p, g, v = [], d = [], y = [], m = -1, M = t.length, x = En(e), b = En(i), _ = e === r ? function () {
                return p;
            } : En(r), w = i === u ? function () { return g; } : En(u); ++m < M;)
                o.call(this, h = t[m], m) ? (d.push([p = +x.call(this, h, m), g = +b.call(this, h, m)]), y.push([+_.call(this, h, m), +w.call(this, h, m)])) : d.length && (l(), d = [], y = []);
            return d.length && l(), v.length ? v.join("") : null;
        }
        var e = Ce, r = Ce, i = 0, u = ze, o = zt, a = xu, l = a.key, c = a, f = "L", s = .7;
        return t.x = function (n) { return arguments.length ? (e = r = n, t) : r; }, t.x0 = function (n) { return arguments.length ? (e = n, t) : e; }, t.x1 = function (n) { return arguments.length ? (r = n, t) : r; }, t.y = function (n) { return arguments.length ? (i = u = n, t) : u; }, t.y0 = function (n) { return arguments.length ? (i = n, t) : i; }, t.y1 = function (n) { return arguments.length ? (u = n, t) : u; }, t.defined = function (n) { return arguments.length ? (o = n, t) : o; }, t.interpolate = function (n) { return arguments.length ? (l = "function" == typeof n ? a = n : (a = Tl.get(n) || xu).key, c = a.reverse || a, f = a.closed ? "M" : "L", t) : l; }, t.tension = function (n) { return arguments.length ? (s = n, t) : s; }, t;
    }
    function Iu(n) { return n.radius; }
    function Yu(n) { return [n.x, n.y]; }
    function Zu(n) { return function () { var t = n.apply(this, arguments), e = t[0], r = t[1] - Io; return [e * Math.cos(r), e * Math.sin(r)]; }; }
    function Vu() { return 64; }
    function Xu() { return "circle"; }
    function $u(n) { var t = Math.sqrt(n / Fo); return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"; }
    function Bu(n) { return function () { var t, e, r; (t = this[n]) && (r = t[e = t.active]) && (r.timer.c = null, r.timer.t = NaN, --t.count ? delete t[e] : delete this[n], t.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index)); }; }
    function Wu(n, t, e) { return ko(n, Yl), n.namespace = t, n.id = e, n; }
    function Ju(n, t, e, r) { var i = n.id, u = n.namespace; return Y(n, "function" == typeof e ? function (n, o, a) { n[u][i].tween.set(t, r(e.call(n, n.__data__, o, a))); } : (e = r(e), function (n) { n[u][i].tween.set(t, e); })); }
    function Gu(n) { return null == n && (n = ""), function () { this.textContent = n; }; }
    function Ku(n) { return null == n ? "__transition__" : "__transition_" + n + "__"; }
    function Qu(n, t, e, r, i) { function u(n) { var t = v.delay; return f.t = t + l, n >= t ? o(n - t) : void (f.c = o); } function o(e) { var i = g.active, u = g[i]; u && (u.timer.c = null, u.timer.t = NaN, --g.count, delete g[i], u.event && u.event.interrupt.call(n, n.__data__, u.index)); for (var o in g)
        if (r > +o) {
            var c = g[o];
            c.timer.c = null, c.timer.t = NaN, --g.count, delete g[o];
        } f.c = a, qn(function () { return f.c && a(e || 1) && (f.c = null, f.t = NaN), 1; }, 0, l), g.active = r, v.event && v.event.start.call(n, n.__data__, t), p = [], v.tween.forEach(function (e, r) { (r = r.call(n, n.__data__, t)) && p.push(r); }), h = v.ease, s = v.duration; } function a(i) { for (var u = i / s, o = h(u), a = p.length; a > 0;)
        p[--a].call(n, o); return u >= 1 ? (v.event && v.event.end.call(n, n.__data__, t), --g.count ? delete g[r] : delete n[e], 1) : void 0; } var l, f, s, h, p, g = n[e] || (n[e] = { active: 0, count: 0 }), v = g[r]; v || (l = i.time, f = qn(u, 0, l), v = g[r] = { tween: new c, time: l, timer: f, delay: i.delay, duration: i.duration, ease: i.ease, index: t }, i = null, ++g.count); }
    function no(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(" + (isFinite(r) ? r : e(n)) + ",0)"; }); }
    function to(n, t, e) { n.attr("transform", function (n) { var r = t(n); return "translate(0," + (isFinite(r) ? r : e(n)) + ")"; }); }
    function eo(n) { return n.toISOString(); }
    function ro(n, t, e) { function r(t) { return n(t); } function i(n, e) { var r = n[1] - n[0], i = r / e, u = ao.bisect(Kl, i); return u == Kl.length ? [t.year, Ki(n.map(function (n) { return n / 31536e6; }), e)[2]] : u ? t[i / Kl[u - 1] < Kl[u] / i ? u - 1 : u] : [tc, Ki(n, e)[2]]; } return r.invert = function (t) { return io(n.invert(t)); }, r.domain = function (t) { return arguments.length ? (n.domain(t), r) : n.domain().map(io); }, r.nice = function (n, t) { function e(e) { return !isNaN(e) && !n.range(e, io(+e + 1), t).length; } var u = r.domain(), o = Yi(u), a = null == n ? i(o, 10) : "number" == typeof n && i(o, n); return a && (n = a[0], t = a[1]), r.domain(Xi(u, t > 1 ? { floor: function (t) { for (; e(t = n.floor(t));)
            t = io(t - 1); return t; }, ceil: function (t) { for (; e(t = n.ceil(t));)
            t = io(+t + 1); return t; } } : n)); }, r.ticks = function (n, t) { var e = Yi(r.domain()), u = null == n ? i(e, 10) : "number" == typeof n ? i(e, n) : !n.range && [{ range: n }, t]; return u && (n = u[0], t = u[1]), n.range(e[0], io(+e[1] + 1), 1 > t ? 1 : t); }, r.tickFormat = function () { return e; }, r.copy = function () { return ro(n.copy(), t, e); }, Ji(r, n); }
    function io(n) { return new Date(n); }
    function uo(n) { return JSON.parse(n.responseText); }
    function oo(n) { var t = fo.createRange(); return t.selectNode(fo.body), t.createContextualFragment(n.responseText); }
    var ao = { version: "3.5.17" }, lo = [].slice, co = function (n) { return lo.call(n); }, fo = this.document;
    if (fo)
        try {
            co(fo.documentElement.childNodes)[0].nodeType;
        }
        catch (so) {
            co = function (n) { for (var t = n.length, e = new Array(t); t--;)
                e[t] = n[t]; return e; };
        }
    if (Date.now || (Date.now = function () { return +new Date; }), fo)
        try {
            fo.createElement("DIV").style.setProperty("opacity", 0, "");
        }
        catch (ho) {
            var po = this.Element.prototype, go = po.setAttribute, vo = po.setAttributeNS, yo = this.CSSStyleDeclaration.prototype, mo = yo.setProperty;
            po.setAttribute = function (n, t) { go.call(this, n, t + ""); }, po.setAttributeNS = function (n, t, e) { vo.call(this, n, t, e + ""); }, yo.setProperty = function (n, t, e) { mo.call(this, n, t + "", e); };
        }
    ao.ascending = e, ao.descending = function (n, t) { return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN; }, ao.min = function (n, t) { var e, r, i = -1, u = n.length; if (1 === arguments.length) {
        for (; ++i < u;)
            if (null != (r = n[i]) && r >= r) {
                e = r;
                break;
            }
        for (; ++i < u;)
            null != (r = n[i]) && e > r && (e = r);
    }
    else {
        for (; ++i < u;)
            if (null != (r = t.call(n, n[i], i)) && r >= r) {
                e = r;
                break;
            }
        for (; ++i < u;)
            null != (r = t.call(n, n[i], i)) && e > r && (e = r);
    } return e; }, ao.max = function (n, t) { var e, r, i = -1, u = n.length; if (1 === arguments.length) {
        for (; ++i < u;)
            if (null != (r = n[i]) && r >= r) {
                e = r;
                break;
            }
        for (; ++i < u;)
            null != (r = n[i]) && r > e && (e = r);
    }
    else {
        for (; ++i < u;)
            if (null != (r = t.call(n, n[i], i)) && r >= r) {
                e = r;
                break;
            }
        for (; ++i < u;)
            null != (r = t.call(n, n[i], i)) && r > e && (e = r);
    } return e; }, ao.extent = function (n, t) { var e, r, i, u = -1, o = n.length; if (1 === arguments.length) {
        for (; ++u < o;)
            if (null != (r = n[u]) && r >= r) {
                e = i = r;
                break;
            }
        for (; ++u < o;)
            null != (r = n[u]) && (e > r && (e = r), r > i && (i = r));
    }
    else {
        for (; ++u < o;)
            if (null != (r = t.call(n, n[u], u)) && r >= r) {
                e = i = r;
                break;
            }
        for (; ++u < o;)
            null != (r = t.call(n, n[u], u)) && (e > r && (e = r), r > i && (i = r));
    } return [e, i]; }, ao.sum = function (n, t) { var e, r = 0, u = n.length, o = -1; if (1 === arguments.length)
        for (; ++o < u;)
            i(e = +n[o]) && (r += e);
    else
        for (; ++o < u;)
            i(e = +t.call(n, n[o], o)) && (r += e); return r; }, ao.mean = function (n, t) { var e, u = 0, o = n.length, a = -1, l = o; if (1 === arguments.length)
        for (; ++a < o;)
            i(e = r(n[a])) ? u += e : --l;
    else
        for (; ++a < o;)
            i(e = r(t.call(n, n[a], a))) ? u += e : --l; return l ? u / l : void 0; }, ao.quantile = function (n, t) { var e = (n.length - 1) * t + 1, r = Math.floor(e), i = +n[r - 1], u = e - r; return u ? i + u * (n[r] - i) : i; }, ao.median = function (n, t) { var u, o = [], a = n.length, l = -1; if (1 === arguments.length)
        for (; ++l < a;)
            i(u = r(n[l])) && o.push(u);
    else
        for (; ++l < a;)
            i(u = r(t.call(n, n[l], l))) && o.push(u); return o.length ? ao.quantile(o.sort(e), .5) : void 0; }, ao.variance = function (n, t) { var e, u, o = n.length, a = 0, l = 0, c = -1, f = 0; if (1 === arguments.length)
        for (; ++c < o;)
            i(e = r(n[c])) && (u = e - a, a += u / ++f, l += u * (e - a));
    else
        for (; ++c < o;)
            i(e = r(t.call(n, n[c], c))) && (u = e - a, a += u / ++f, l += u * (e - a)); return f > 1 ? l / (f - 1) : void 0; }, ao.deviation = function () { var n = ao.variance.apply(this, arguments); return n ? Math.sqrt(n) : n; };
    var Mo = u(e);
    ao.bisectLeft = Mo.left, ao.bisect = ao.bisectRight = Mo.right, ao.bisector = function (n) { return u(1 === n.length ? function (t, r) { return e(n(t), r); } : n); }, ao.shuffle = function (n, t, e) { (u = arguments.length) < 3 && (e = n.length, 2 > u && (t = 0)); for (var r, i, u = e - t; u;)
        i = Math.random() * u-- | 0, r = n[u + t], n[u + t] = n[i + t], n[i + t] = r; return n; }, ao.permute = function (n, t) { for (var e = t.length, r = new Array(e); e--;)
        r[e] = n[t[e]]; return r; }, ao.pairs = function (n) { for (var t, e = 0, r = n.length - 1, i = n[0], u = new Array(0 > r ? 0 : r); r > e;)
        u[e] = [t = i, i = n[++e]]; return u; }, ao.transpose = function (n) { if (!(i = n.length))
        return []; for (var t = -1, e = ao.min(n, o), r = new Array(e); ++t < e;)
        for (var i, u = -1, a = r[t] = new Array(i); ++u < i;)
            a[u] = n[u][t]; return r; }, ao.zip = function () { return ao.transpose(arguments); }, ao.keys = function (n) { var t = []; for (var e in n)
        t.push(e); return t; }, ao.values = function (n) { var t = []; for (var e in n)
        t.push(n[e]); return t; }, ao.entries = function (n) { var t = []; for (var e in n)
        t.push({ key: e, value: n[e] }); return t; }, ao.merge = function (n) { for (var t, e, r, i = n.length, u = -1, o = 0; ++u < i;)
        o += n[u].length; for (e = new Array(o); --i >= 0;)
        for (r = n[i], t = r.length; --t >= 0;)
            e[--o] = r[t]; return e; };
    var xo = Math.abs;
    ao.range = function (n, t, e) { if (arguments.length < 3 && (e = 1, arguments.length < 2 && (t = n, n = 0)), (t - n) / e === 1 / 0)
        throw new Error("infinite range"); var r, i = [], u = a(xo(e)), o = -1; if (n *= u, t *= u, e *= u, 0 > e)
        for (; (r = n + e * ++o) > t;)
            i.push(r / u);
    else
        for (; (r = n + e * ++o) < t;)
            i.push(r / u); return i; }, ao.map = function (n, t) { var e = new c; if (n instanceof c)
        n.forEach(function (n, t) { e.set(n, t); });
    else if (Array.isArray(n)) {
        var r, i = -1, u = n.length;
        if (1 === arguments.length)
            for (; ++i < u;)
                e.set(i, n[i]);
        else
            for (; ++i < u;)
                e.set(t.call(n, r = n[i], i), r);
    }
    else
        for (var o in n)
            e.set(o, n[o]); return e; };
    var bo = "__proto__", _o = "\x00";
    l(c, { has: h, get: function (n) { return this._[f(n)]; }, set: function (n, t) { return this._[f(n)] = t; }, remove: p, keys: g, values: function () { var n = []; for (var t in this._)
            n.push(this._[t]); return n; }, entries: function () { var n = []; for (var t in this._)
            n.push({ key: s(t), value: this._[t] }); return n; }, size: v, empty: d, forEach: function (n) { for (var t in this._)
            n.call(this, s(t), this._[t]); } }), ao.nest = function () { function n(t, o, a) { if (a >= u.length)
        return r ? r.call(i, o) : e ? o.sort(e) : o; for (var l, f, s, h, p = -1, g = o.length, v = u[a++], d = new c; ++p < g;)
        (h = d.get(l = v(f = o[p]))) ? h.push(f) : d.set(l, [f]); return t ? (f = t(), s = function (e, r) { f.set(e, n(t, r, a)); }) : (f = {}, s = function (e, r) { f[e] = n(t, r, a); }), d.forEach(s), f; } function t(n, e) { if (e >= u.length)
        return n; var r = [], i = o[e++]; return n.forEach(function (n, i) { r.push({ key: n, values: t(i, e) }); }), i ? r.sort(function (n, t) { return i(n.key, t.key); }) : r; } var e, r, i = {}, u = [], o = []; return i.map = function (t, e) { return n(e, t, 0); }, i.entries = function (e) { return t(n(ao.map, e, 0), 0); }, i.key = function (n) { return u.push(n), i; }, i.sortKeys = function (n) { return o[u.length - 1] = n, i; }, i.sortValues = function (n) { return e = n, i; }, i.rollup = function (n) { return r = n, i; }, i; }, ao.set = function (n) { var t = new y; if (n)
        for (var e = 0, r = n.length; r > e; ++e)
            t.add(n[e]); return t; }, l(y, { has: h, add: function (n) { return this._[f(n += "")] = !0, n; }, remove: p, values: g, size: v, empty: d, forEach: function (n) { for (var t in this._)
            n.call(this, s(t)); } }), ao.behavior = {}, ao.rebind = function (n, t) { for (var e, r = 1, i = arguments.length; ++r < i;)
        n[e = arguments[r]] = M(n, t, t[e]); return n; };
    var wo = ["webkit", "ms", "moz", "Moz", "o", "O"];
    ao.dispatch = function () { for (var n = new _, t = -1, e = arguments.length; ++t < e;)
        n[arguments[t]] = w(n); return n; }, _.prototype.on = function (n, t) { var e = n.indexOf("."), r = ""; if (e >= 0 && (r = n.slice(e + 1), n = n.slice(0, e)), n)
        return arguments.length < 2 ? this[n].on(r) : this[n].on(r, t); if (2 === arguments.length) {
        if (null == t)
            for (n in this)
                this.hasOwnProperty(n) && this[n].on(r, null);
        return this;
    } }, ao.event = null, ao.requote = function (n) { return n.replace(So, "\\$&"); };
    var So = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, ko = {}.__proto__ ? function (n, t) { n.__proto__ = t; } : function (n, t) { for (var e in t)
        n[e] = t[e]; }, No = function (n, t) { return t.querySelector(n); }, Eo = function (n, t) { return t.querySelectorAll(n); }, Ao = function (n, t) { var e = n.matches || n[x(n, "matchesSelector")]; return (Ao = function (n, t) { return e.call(n, t); })(n, t); };
    "function" == typeof Sizzle && (No = function (n, t) { return Sizzle(n, t)[0] || null; }, Eo = Sizzle, Ao = Sizzle.matchesSelector), ao.selection = function () { return ao.select(fo.documentElement); };
    var Co = ao.selection.prototype = [];
    Co.select = function (n) { var t, e, r, i, u = []; n = A(n); for (var o = -1, a = this.length; ++o < a;) {
        u.push(t = []), t.parentNode = (r = this[o]).parentNode;
        for (var l = -1, c = r.length; ++l < c;)
            (i = r[l]) ? (t.push(e = n.call(i, i.__data__, l, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : t.push(null);
    } return E(u); }, Co.selectAll = function (n) { var t, e, r = []; n = C(n); for (var i = -1, u = this.length; ++i < u;)
        for (var o = this[i], a = -1, l = o.length; ++a < l;)
            (e = o[a]) && (r.push(t = co(n.call(e, e.__data__, a, i))), t.parentNode = e); return E(r); };
    var zo = "http://www.w3.org/1999/xhtml", Lo = { svg: "http://www.w3.org/2000/svg", xhtml: zo, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
    ao.ns = { prefix: Lo, qualify: function (n) { var t = n.indexOf(":"), e = n; return t >= 0 && "xmlns" !== (e = n.slice(0, t)) && (n = n.slice(t + 1)), Lo.hasOwnProperty(e) ? { space: Lo[e], local: n } : n; } }, Co.attr = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n) {
            var e = this.node();
            return n = ao.ns.qualify(n), n.local ? e.getAttributeNS(n.space, n.local) : e.getAttribute(n);
        }
        for (t in n)
            this.each(z(t, n[t]));
        return this;
    } return this.each(z(n, t)); }, Co.classed = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n) {
            var e = this.node(), r = (n = T(n)).length, i = -1;
            if (t = e.classList) {
                for (; ++i < r;)
                    if (!t.contains(n[i]))
                        return !1;
            }
            else
                for (t = e.getAttribute("class"); ++i < r;)
                    if (!q(n[i]).test(t))
                        return !1;
            return !0;
        }
        for (t in n)
            this.each(R(t, n[t]));
        return this;
    } return this.each(R(n, t)); }, Co.style = function (n, e, r) { var i = arguments.length; if (3 > i) {
        if ("string" != typeof n) {
            2 > i && (e = "");
            for (r in n)
                this.each(P(r, n[r], e));
            return this;
        }
        if (2 > i) {
            var u = this.node();
            return t(u).getComputedStyle(u, null).getPropertyValue(n);
        }
        r = "";
    } return this.each(P(n, e, r)); }, Co.property = function (n, t) { if (arguments.length < 2) {
        if ("string" == typeof n)
            return this.node()[n];
        for (t in n)
            this.each(U(t, n[t]));
        return this;
    } return this.each(U(n, t)); }, Co.text = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.textContent = null == t ? "" : t; } : null == n ? function () { this.textContent = ""; } : function () { this.textContent = n; }) : this.node().textContent; }, Co.html = function (n) { return arguments.length ? this.each("function" == typeof n ? function () { var t = n.apply(this, arguments); this.innerHTML = null == t ? "" : t; } : null == n ? function () { this.innerHTML = ""; } : function () { this.innerHTML = n; }) : this.node().innerHTML; }, Co.append = function (n) { return n = j(n), this.select(function () { return this.appendChild(n.apply(this, arguments)); }); }, Co.insert = function (n, t) { return n = j(n), t = A(t), this.select(function () { return this.insertBefore(n.apply(this, arguments), t.apply(this, arguments) || null); }); }, Co.remove = function () { return this.each(F); }, Co.data = function (n, t) { function e(n, e) { var r, i, u, o = n.length, s = e.length, h = Math.min(o, s), p = new Array(s), g = new Array(s), v = new Array(o); if (t) {
        var d, y = new c, m = new Array(o);
        for (r = -1; ++r < o;)
            (i = n[r]) && (y.has(d = t.call(i, i.__data__, r)) ? v[r] = i : y.set(d, i), m[r] = d);
        for (r = -1; ++r < s;)
            (i = y.get(d = t.call(e, u = e[r], r))) ? i !== !0 && (p[r] = i, i.__data__ = u) : g[r] = H(u), y.set(d, !0);
        for (r = -1; ++r < o;)
            r in m && y.get(m[r]) !== !0 && (v[r] = n[r]);
    }
    else {
        for (r = -1; ++r < h;)
            i = n[r], u = e[r], i ? (i.__data__ = u, p[r] = i) : g[r] = H(u);
        for (; s > r; ++r)
            g[r] = H(e[r]);
        for (; o > r; ++r)
            v[r] = n[r];
    } g.update = p, g.parentNode = p.parentNode = v.parentNode = n.parentNode, a.push(g), l.push(p), f.push(v); } var r, i, u = -1, o = this.length; if (!arguments.length) {
        for (n = new Array(o = (r = this[0]).length); ++u < o;)
            (i = r[u]) && (n[u] = i.__data__);
        return n;
    } var a = Z([]), l = E([]), f = E([]); if ("function" == typeof n)
        for (; ++u < o;)
            e(r = this[u], n.call(r, r.parentNode.__data__, u));
    else
        for (; ++u < o;)
            e(r = this[u], n); return l.enter = function () { return a; }, l.exit = function () { return f; }, l; }, Co.datum = function (n) { return arguments.length ? this.property("__data__", n) : this.property("__data__"); }, Co.filter = function (n) { var t, e, r, i = []; "function" != typeof n && (n = O(n)); for (var u = 0, o = this.length; o > u; u++) {
        i.push(t = []), t.parentNode = (e = this[u]).parentNode;
        for (var a = 0, l = e.length; l > a; a++)
            (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
    } return E(i); }, Co.order = function () { for (var n = -1, t = this.length; ++n < t;)
        for (var e, r = this[n], i = r.length - 1, u = r[i]; --i >= 0;)
            (e = r[i]) && (u && u !== e.nextSibling && u.parentNode.insertBefore(e, u), u = e); return this; }, Co.sort = function (n) { n = I.apply(this, arguments); for (var t = -1, e = this.length; ++t < e;)
        this[t].sort(n); return this.order(); }, Co.each = function (n) { return Y(this, function (t, e, r) { n.call(t, t.__data__, e, r); }); }, Co.call = function (n) { var t = co(arguments); return n.apply(t[0] = this, t), this; }, Co.empty = function () { return !this.node(); }, Co.node = function () { for (var n = 0, t = this.length; t > n; n++)
        for (var e = this[n], r = 0, i = e.length; i > r; r++) {
            var u = e[r];
            if (u)
                return u;
        } return null; }, Co.size = function () { var n = 0; return Y(this, function () { ++n; }), n; };
    var qo = [];
    ao.selection.enter = Z, ao.selection.enter.prototype = qo, qo.append = Co.append, qo.empty = Co.empty, qo.node = Co.node, qo.call = Co.call, qo.size = Co.size, qo.select = function (n) { for (var t, e, r, i, u, o = [], a = -1, l = this.length; ++a < l;) {
        r = (i = this[a]).update, o.push(t = []), t.parentNode = i.parentNode;
        for (var c = -1, f = i.length; ++c < f;)
            (u = i[c]) ? (t.push(r[c] = e = n.call(i.parentNode, u.__data__, c, a)), e.__data__ = u.__data__) : t.push(null);
    } return E(o); }, qo.insert = function (n, t) { return arguments.length < 2 && (t = V(this)), Co.insert.call(this, n, t); }, ao.select = function (t) { var e; return "string" == typeof t ? (e = [No(t, fo)], e.parentNode = fo.documentElement) : (e = [t], e.parentNode = n(t)), E([e]); }, ao.selectAll = function (n) { var t; return "string" == typeof n ? (t = co(Eo(n, fo)), t.parentNode = fo.documentElement) : (t = co(n), t.parentNode = null), E([t]); }, Co.on = function (n, t, e) { var r = arguments.length; if (3 > r) {
        if ("string" != typeof n) {
            2 > r && (t = !1);
            for (e in n)
                this.each(X(e, n[e], t));
            return this;
        }
        if (2 > r)
            return (r = this.node()["__on" + n]) && r._;
        e = !1;
    } return this.each(X(n, t, e)); };
    var To = ao.map({ mouseenter: "mouseover", mouseleave: "mouseout" });
    fo && To.forEach(function (n) { "on" + n in fo && To.remove(n); });
    var Ro, Do = 0;
    ao.mouse = function (n) { return J(n, k()); };
    var Po = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
    ao.touch = function (n, t, e) { if (arguments.length < 3 && (e = t, t = k().changedTouches), t)
        for (var r, i = 0, u = t.length; u > i; ++i)
            if ((r = t[i]).identifier === e)
                return J(n, r); }, ao.behavior.drag = function () { function n() { this.on("mousedown.drag", u).on("touchstart.drag", o); } function e(n, t, e, u, o) { return function () { function a() { var n, e, r = t(h, v); r && (n = r[0] - M[0], e = r[1] - M[1], g |= n | e, M = r, p({ type: "drag", x: r[0] + c[0], y: r[1] + c[1], dx: n, dy: e })); } function l() { t(h, v) && (y.on(u + d, null).on(o + d, null), m(g), p({ type: "dragend" })); } var c, f = this, s = ao.event.target.correspondingElement || ao.event.target, h = f.parentNode, p = r.of(f, arguments), g = 0, v = n(), d = ".drag" + (null == v ? "" : "-" + v), y = ao.select(e(s)).on(u + d, a).on(o + d, l), m = W(s), M = t(h, v); i ? (c = i.apply(f, arguments), c = [c.x - M[0], c.y - M[1]]) : c = [0, 0], p({ type: "dragstart" }); }; } var r = N(n, "drag", "dragstart", "dragend"), i = null, u = e(b, ao.mouse, t, "mousemove", "mouseup"), o = e(G, ao.touch, m, "touchmove", "touchend"); return n.origin = function (t) { return arguments.length ? (i = t, n) : i; }, ao.rebind(n, r, "on"); }, ao.touches = function (n, t) { return arguments.length < 2 && (t = k().touches), t ? co(t).map(function (t) { var e = J(n, t); return e.identifier = t.identifier, e; }) : []; };
    var Uo = 1e-6, jo = Uo * Uo, Fo = Math.PI, Ho = 2 * Fo, Oo = Ho - Uo, Io = Fo / 2, Yo = Fo / 180, Zo = 180 / Fo, Vo = Math.SQRT2, Xo = 2, $o = 4;
    ao.interpolateZoom = function (n, t) { var e, r, i = n[0], u = n[1], o = n[2], a = t[0], l = t[1], c = t[2], f = a - i, s = l - u, h = f * f + s * s; if (jo > h)
        r = Math.log(c / o) / Vo, e = function (n) { return [i + n * f, u + n * s, o * Math.exp(Vo * n * r)]; };
    else {
        var p = Math.sqrt(h), g = (c * c - o * o + $o * h) / (2 * o * Xo * p), v = (c * c - o * o - $o * h) / (2 * c * Xo * p), d = Math.log(Math.sqrt(g * g + 1) - g), y = Math.log(Math.sqrt(v * v + 1) - v);
        r = (y - d) / Vo, e = function (n) { var t = n * r, e = rn(d), a = o / (Xo * p) * (e * un(Vo * t + d) - en(d)); return [i + a * f, u + a * s, o * e / rn(Vo * t + d)]; };
    } return e.duration = 1e3 * r, e; }, ao.behavior.zoom = function () { function n(n) { n.on(L, s).on(Wo + ".zoom", p).on("dblclick.zoom", g).on(R, h); } function e(n) { return [(n[0] - k.x) / k.k, (n[1] - k.y) / k.k]; } function r(n) { return [n[0] * k.k + k.x, n[1] * k.k + k.y]; } function i(n) { k.k = Math.max(A[0], Math.min(A[1], n)); } function u(n, t) { t = r(t), k.x += n[0] - t[0], k.y += n[1] - t[1]; } function o(t, e, r, o) { t.__chart__ = { x: k.x, y: k.y, k: k.k }, i(Math.pow(2, o)), u(d = e, r), t = ao.select(t), C > 0 && (t = t.transition().duration(C)), t.call(n.event); } function a() { b && b.domain(x.range().map(function (n) { return (n - k.x) / k.k; }).map(x.invert)), w && w.domain(_.range().map(function (n) { return (n - k.y) / k.k; }).map(_.invert)); } function l(n) { z++ || n({ type: "zoomstart" }); } function c(n) { a(), n({ type: "zoom", scale: k.k, translate: [k.x, k.y] }); } function f(n) { --z || (n({ type: "zoomend" }), d = null); } function s() { function n() { a = 1, u(ao.mouse(i), h), c(o); } function r() { s.on(q, null).on(T, null), p(a), f(o); } var i = this, o = D.of(i, arguments), a = 0, s = ao.select(t(i)).on(q, n).on(T, r), h = e(ao.mouse(i)), p = W(i); Il.call(i), l(o); } function h() { function n() { var n = ao.touches(g); return p = k.k, n.forEach(function (n) { n.identifier in d && (d[n.identifier] = e(n)); }), n; } function t() { var t = ao.event.target; ao.select(t).on(x, r).on(b, a), _.push(t); for (var e = ao.event.changedTouches, i = 0, u = e.length; u > i; ++i)
        d[e[i].identifier] = null; var l = n(), c = Date.now(); if (1 === l.length) {
        if (500 > c - M) {
            var f = l[0];
            o(g, f, d[f.identifier], Math.floor(Math.log(k.k) / Math.LN2) + 1), S();
        }
        M = c;
    }
    else if (l.length > 1) {
        var f = l[0], s = l[1], h = f[0] - s[0], p = f[1] - s[1];
        y = h * h + p * p;
    } } function r() { var n, t, e, r, o = ao.touches(g); Il.call(g); for (var a = 0, l = o.length; l > a; ++a, r = null)
        if (e = o[a], r = d[e.identifier]) {
            if (t)
                break;
            n = e, t = r;
        } if (r) {
        var f = (f = e[0] - n[0]) * f + (f = e[1] - n[1]) * f, s = y && Math.sqrt(f / y);
        n = [(n[0] + e[0]) / 2, (n[1] + e[1]) / 2], t = [(t[0] + r[0]) / 2, (t[1] + r[1]) / 2], i(s * p);
    } M = null, u(n, t), c(v); } function a() { if (ao.event.touches.length) {
        for (var t = ao.event.changedTouches, e = 0, r = t.length; r > e; ++e)
            delete d[t[e].identifier];
        for (var i in d)
            return void n();
    } ao.selectAll(_).on(m, null), w.on(L, s).on(R, h), N(), f(v); } var p, g = this, v = D.of(g, arguments), d = {}, y = 0, m = ".zoom-" + ao.event.changedTouches[0].identifier, x = "touchmove" + m, b = "touchend" + m, _ = [], w = ao.select(g), N = W(g); t(), l(v), w.on(L, null).on(R, t); } function p() { var n = D.of(this, arguments); m ? clearTimeout(m) : (Il.call(this), v = e(d = y || ao.mouse(this)), l(n)), m = setTimeout(function () { m = null, f(n); }, 50), S(), i(Math.pow(2, .002 * Bo()) * k.k), u(d, v), c(n); } function g() { var n = ao.mouse(this), t = Math.log(k.k) / Math.LN2; o(this, n, e(n), ao.event.shiftKey ? Math.ceil(t) - 1 : Math.floor(t) + 1); } var v, d, y, m, M, x, b, _, w, k = { x: 0, y: 0, k: 1 }, E = [960, 500], A = Jo, C = 250, z = 0, L = "mousedown.zoom", q = "mousemove.zoom", T = "mouseup.zoom", R = "touchstart.zoom", D = N(n, "zoomstart", "zoom", "zoomend"); return Wo || (Wo = "onwheel" in fo ? (Bo = function () { return -ao.event.deltaY * (ao.event.deltaMode ? 120 : 1); }, "wheel") : "onmousewheel" in fo ? (Bo = function () { return ao.event.wheelDelta; }, "mousewheel") : (Bo = function () { return -ao.event.detail; }, "MozMousePixelScroll")), n.event = function (n) { n.each(function () { var n = D.of(this, arguments), t = k; Hl ? ao.select(this).transition().each("start.zoom", function () { k = this.__chart__ || { x: 0, y: 0, k: 1 }, l(n); }).tween("zoom:zoom", function () { var e = E[0], r = E[1], i = d ? d[0] : e / 2, u = d ? d[1] : r / 2, o = ao.interpolateZoom([(i - k.x) / k.k, (u - k.y) / k.k, e / k.k], [(i - t.x) / t.k, (u - t.y) / t.k, e / t.k]); return function (t) { var r = o(t), a = e / r[2]; this.__chart__ = k = { x: i - r[0] * a, y: u - r[1] * a, k: a }, c(n); }; }).each("interrupt.zoom", function () { f(n); }).each("end.zoom", function () { f(n); }) : (this.__chart__ = k, l(n), c(n), f(n)); }); }, n.translate = function (t) { return arguments.length ? (k = { x: +t[0], y: +t[1], k: k.k }, a(), n) : [k.x, k.y]; }, n.scale = function (t) { return arguments.length ? (k = { x: k.x, y: k.y, k: null }, i(+t), a(), n) : k.k; }, n.scaleExtent = function (t) { return arguments.length ? (A = null == t ? Jo : [+t[0], +t[1]], n) : A; }, n.center = function (t) { return arguments.length ? (y = t && [+t[0], +t[1]], n) : y; }, n.size = function (t) { return arguments.length ? (E = t && [+t[0], +t[1]], n) : E; }, n.duration = function (t) { return arguments.length ? (C = +t, n) : C; }, n.x = function (t) { return arguments.length ? (b = t, x = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : b; }, n.y = function (t) { return arguments.length ? (w = t, _ = t.copy(), k = { x: 0, y: 0, k: 1 }, n) : w; }, ao.rebind(n, D, "on"); };
    var Bo, Wo, Jo = [0, 1 / 0];
    ao.color = an, an.prototype.toString = function () { return this.rgb() + ""; }, ao.hsl = ln;
    var Go = ln.prototype = new an;
    Go.brighter = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, this.l / n); }, Go.darker = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new ln(this.h, this.s, n * this.l); }, Go.rgb = function () { return cn(this.h, this.s, this.l); }, ao.hcl = fn;
    var Ko = fn.prototype = new an;
    Ko.brighter = function (n) { return new fn(this.h, this.c, Math.min(100, this.l + Qo * (arguments.length ? n : 1))); }, Ko.darker = function (n) { return new fn(this.h, this.c, Math.max(0, this.l - Qo * (arguments.length ? n : 1))); }, Ko.rgb = function () { return sn(this.h, this.c, this.l).rgb(); }, ao.lab = hn;
    var Qo = 18, na = .95047, ta = 1, ea = 1.08883, ra = hn.prototype = new an;
    ra.brighter = function (n) { return new hn(Math.min(100, this.l + Qo * (arguments.length ? n : 1)), this.a, this.b); }, ra.darker = function (n) { return new hn(Math.max(0, this.l - Qo * (arguments.length ? n : 1)), this.a, this.b); }, ra.rgb = function () { return pn(this.l, this.a, this.b); }, ao.rgb = mn;
    var ia = mn.prototype = new an;
    ia.brighter = function (n) { n = Math.pow(.7, arguments.length ? n : 1); var t = this.r, e = this.g, r = this.b, i = 30; return t || e || r ? (t && i > t && (t = i), e && i > e && (e = i), r && i > r && (r = i), new mn(Math.min(255, t / n), Math.min(255, e / n), Math.min(255, r / n))) : new mn(i, i, i); }, ia.darker = function (n) { return n = Math.pow(.7, arguments.length ? n : 1), new mn(n * this.r, n * this.g, n * this.b); }, ia.hsl = function () { return wn(this.r, this.g, this.b); }, ia.toString = function () { return "#" + bn(this.r) + bn(this.g) + bn(this.b); };
    var ua = ao.map({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 });
    ua.forEach(function (n, t) { ua.set(n, Mn(t)); }), ao.functor = En, ao.xhr = An(m), ao.dsv = function (n, t) { function e(n, e, u) { arguments.length < 3 && (u = e, e = null); var o = Cn(n, t, null == e ? r : i(e), u); return o.row = function (n) { return arguments.length ? o.response(null == (e = n) ? r : i(n)) : e; }, o; } function r(n) { return e.parse(n.responseText); } function i(n) { return function (t) { return e.parse(t.responseText, n); }; } function u(t) { return t.map(o).join(n); } function o(n) { return a.test(n) ? '"' + n.replace(/\"/g, '""') + '"' : n; } var a = new RegExp('["' + n + "\n]"), l = n.charCodeAt(0); return e.parse = function (n, t) { var r; return e.parseRows(n, function (n, e) { if (r)
        return r(n, e - 1); var i = new Function("d", "return {" + n.map(function (n, t) { return JSON.stringify(n) + ": d[" + t + "]"; }).join(",") + "}"); r = t ? function (n, e) { return t(i(n), e); } : i; }); }, e.parseRows = function (n, t) { function e() { if (f >= c)
        return o; if (i)
        return i = !1, u; var t = f; if (34 === n.charCodeAt(t)) {
        for (var e = t; e++ < c;)
            if (34 === n.charCodeAt(e)) {
                if (34 !== n.charCodeAt(e + 1))
                    break;
                ++e;
            }
        f = e + 2;
        var r = n.charCodeAt(e + 1);
        return 13 === r ? (i = !0, 10 === n.charCodeAt(e + 2) && ++f) : 10 === r && (i = !0), n.slice(t + 1, e).replace(/""/g, '"');
    } for (; c > f;) {
        var r = n.charCodeAt(f++), a = 1;
        if (10 === r)
            i = !0;
        else if (13 === r)
            i = !0, 10 === n.charCodeAt(f) && (++f, ++a);
        else if (r !== l)
            continue;
        return n.slice(t, f - a);
    } return n.slice(t); } for (var r, i, u = {}, o = {}, a = [], c = n.length, f = 0, s = 0; (r = e()) !== o;) {
        for (var h = []; r !== u && r !== o;)
            h.push(r), r = e();
        t && null == (h = t(h, s++)) || a.push(h);
    } return a; }, e.format = function (t) { if (Array.isArray(t[0]))
        return e.formatRows(t); var r = new y, i = []; return t.forEach(function (n) { for (var t in n)
        r.has(t) || i.push(r.add(t)); }), [i.map(o).join(n)].concat(t.map(function (t) { return i.map(function (n) { return o(t[n]); }).join(n); })).join("\n"); }, e.formatRows = function (n) { return n.map(u).join("\n"); }, e; }, ao.csv = ao.dsv(",", "text/csv"), ao.tsv = ao.dsv("	", "text/tab-separated-values");
    var oa, aa, la, ca, fa = this[x(this, "requestAnimationFrame")] || function (n) { setTimeout(n, 17); };
    ao.timer = function () { qn.apply(this, arguments); }, ao.timer.flush = function () { Rn(), Dn(); }, ao.round = function (n, t) { return t ? Math.round(n * (t = Math.pow(10, t))) / t : Math.round(n); };
    var sa = ["y", "z", "a", "f", "p", "n", "\xb5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);
    ao.formatPrefix = function (n, t) { var e = 0; return (n = +n) && (0 > n && (n *= -1), t && (n = ao.round(n, Pn(n, t))), e = 1 + Math.floor(1e-12 + Math.log(n) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), sa[8 + e / 3]; };
    var ha = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, pa = ao.map({ b: function (n) { return n.toString(2); }, c: function (n) { return String.fromCharCode(n); }, o: function (n) { return n.toString(8); }, x: function (n) { return n.toString(16); }, X: function (n) { return n.toString(16).toUpperCase(); }, g: function (n, t) { return n.toPrecision(t); }, e: function (n, t) { return n.toExponential(t); }, f: function (n, t) { return n.toFixed(t); }, r: function (n, t) { return (n = ao.round(n, Pn(n, t))).toFixed(Math.max(0, Math.min(20, Pn(n * (1 + 1e-15), t)))); } }), ga = ao.time = {}, va = Date;
    Hn.prototype = { getDate: function () { return this._.getUTCDate(); }, getDay: function () { return this._.getUTCDay(); }, getFullYear: function () { return this._.getUTCFullYear(); }, getHours: function () { return this._.getUTCHours(); }, getMilliseconds: function () { return this._.getUTCMilliseconds(); }, getMinutes: function () { return this._.getUTCMinutes(); }, getMonth: function () { return this._.getUTCMonth(); }, getSeconds: function () { return this._.getUTCSeconds(); }, getTime: function () { return this._.getTime(); }, getTimezoneOffset: function () { return 0; }, valueOf: function () { return this._.valueOf(); }, setDate: function () { da.setUTCDate.apply(this._, arguments); }, setDay: function () { da.setUTCDay.apply(this._, arguments); }, setFullYear: function () { da.setUTCFullYear.apply(this._, arguments); }, setHours: function () { da.setUTCHours.apply(this._, arguments); }, setMilliseconds: function () { da.setUTCMilliseconds.apply(this._, arguments); }, setMinutes: function () { da.setUTCMinutes.apply(this._, arguments); }, setMonth: function () { da.setUTCMonth.apply(this._, arguments); }, setSeconds: function () { da.setUTCSeconds.apply(this._, arguments); }, setTime: function () { da.setTime.apply(this._, arguments); } };
    var da = Date.prototype;
    ga.year = On(function (n) { return n = ga.day(n), n.setMonth(0, 1), n; }, function (n, t) { n.setFullYear(n.getFullYear() + t); }, function (n) { return n.getFullYear(); }), ga.years = ga.year.range, ga.years.utc = ga.year.utc.range, ga.day = On(function (n) { var t = new va(2e3, 0); return t.setFullYear(n.getFullYear(), n.getMonth(), n.getDate()), t; }, function (n, t) { n.setDate(n.getDate() + t); }, function (n) { return n.getDate() - 1; }), ga.days = ga.day.range, ga.days.utc = ga.day.utc.range, ga.dayOfYear = function (n) { var t = ga.year(n); return Math.floor((n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5); }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (n, t) { t = 7 - t; var e = ga[n] = On(function (n) { return (n = ga.day(n)).setDate(n.getDate() - (n.getDay() + t) % 7), n; }, function (n, t) { n.setDate(n.getDate() + 7 * Math.floor(t)); }, function (n) { var e = ga.year(n).getDay(); return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7) - (e !== t); }); ga[n + "s"] = e.range, ga[n + "s"].utc = e.utc.range, ga[n + "OfYear"] = function (n) { var e = ga.year(n).getDay(); return Math.floor((ga.dayOfYear(n) + (e + t) % 7) / 7); }; }), ga.week = ga.sunday, ga.weeks = ga.sunday.range, ga.weeks.utc = ga.sunday.utc.range, ga.weekOfYear = ga.sundayOfYear;
    var ya = { "-": "", _: " ", 0: "0" }, ma = /^\s*\d+/, Ma = /^%/;
    ao.locale = function (n) { return { numberFormat: jn(n), timeFormat: Yn(n) }; };
    var xa = ao.locale({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], dateTime: "%a %b %e %X %Y", date: "%m/%d/%Y", time: "%H:%M:%S", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
    ao.format = xa.numberFormat, ao.geo = {}, ft.prototype = { s: 0, t: 0, add: function (n) { st(n, this.t, ba), st(ba.s, this.s, this), this.s ? this.t += ba.t : this.s = ba.t; }, reset: function () { this.s = this.t = 0; }, valueOf: function () { return this.s; } };
    var ba = new ft;
    ao.geo.stream = function (n, t) { n && _a.hasOwnProperty(n.type) ? _a[n.type](n, t) : ht(n, t); };
    var _a = { Feature: function (n, t) { ht(n.geometry, t); }, FeatureCollection: function (n, t) { for (var e = n.features, r = -1, i = e.length; ++r < i;)
            ht(e[r].geometry, t); } }, wa = { Sphere: function (n, t) { t.sphere(); }, Point: function (n, t) { n = n.coordinates, t.point(n[0], n[1], n[2]); }, MultiPoint: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
            n = e[r], t.point(n[0], n[1], n[2]); }, LineString: function (n, t) { pt(n.coordinates, t, 0); }, MultiLineString: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
            pt(e[r], t, 0); }, Polygon: function (n, t) { gt(n.coordinates, t); }, MultiPolygon: function (n, t) { for (var e = n.coordinates, r = -1, i = e.length; ++r < i;)
            gt(e[r], t); }, GeometryCollection: function (n, t) { for (var e = n.geometries, r = -1, i = e.length; ++r < i;)
            ht(e[r], t); } };
    ao.geo.area = function (n) { return Sa = 0, ao.geo.stream(n, Na), Sa; };
    var Sa, ka = new ft, Na = { sphere: function () { Sa += 4 * Fo; }, point: b, lineStart: b, lineEnd: b, polygonStart: function () { ka.reset(), Na.lineStart = vt; }, polygonEnd: function () { var n = 2 * ka; Sa += 0 > n ? 4 * Fo + n : n, Na.lineStart = Na.lineEnd = Na.point = b; } };
    ao.geo.bounds = function () { function n(n, t) { M.push(x = [f = n, h = n]), s > t && (s = t), t > p && (p = t); } function t(t, e) { var r = dt([t * Yo, e * Yo]); if (y) {
        var i = mt(y, r), u = [i[1], -i[0], 0], o = mt(u, i);
        bt(o), o = _t(o);
        var l = t - g, c = l > 0 ? 1 : -1, v = o[0] * Zo * c, d = xo(l) > 180;
        if (d ^ (v > c * g && c * t > v)) {
            var m = o[1] * Zo;
            m > p && (p = m);
        }
        else if (v = (v + 360) % 360 - 180, d ^ (v > c * g && c * t > v)) {
            var m = -o[1] * Zo;
            s > m && (s = m);
        }
        else
            s > e && (s = e), e > p && (p = e);
        d ? g > t ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t) : h >= f ? (f > t && (f = t), t > h && (h = t)) : t > g ? a(f, t) > a(f, h) && (h = t) : a(t, h) > a(f, h) && (f = t);
    }
    else
        n(t, e); y = r, g = t; } function e() { b.point = t; } function r() { x[0] = f, x[1] = h, b.point = n, y = null; } function i(n, e) { if (y) {
        var r = n - g;
        m += xo(r) > 180 ? r + (r > 0 ? 360 : -360) : r;
    }
    else
        v = n, d = e; Na.point(n, e), t(n, e); } function u() { Na.lineStart(); } function o() { i(v, d), Na.lineEnd(), xo(m) > Uo && (f = -(h = 180)), x[0] = f, x[1] = h, y = null; } function a(n, t) { return (t -= n) < 0 ? t + 360 : t; } function l(n, t) { return n[0] - t[0]; } function c(n, t) { return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n; } var f, s, h, p, g, v, d, y, m, M, x, b = { point: n, lineStart: e, lineEnd: r, polygonStart: function () { b.point = i, b.lineStart = u, b.lineEnd = o, m = 0, Na.polygonStart(); }, polygonEnd: function () { Na.polygonEnd(), b.point = n, b.lineStart = e, b.lineEnd = r, 0 > ka ? (f = -(h = 180), s = -(p = 90)) : m > Uo ? p = 90 : -Uo > m && (s = -90), x[0] = f, x[1] = h; } }; return function (n) { p = h = -(f = s = 1 / 0), M = [], ao.geo.stream(n, b); var t = M.length; if (t) {
        M.sort(l);
        for (var e, r = 1, i = M[0], u = [i]; t > r; ++r)
            e = M[r], c(e[0], i) || c(e[1], i) ? (a(i[0], e[1]) > a(i[0], i[1]) && (i[1] = e[1]), a(e[0], i[1]) > a(i[0], i[1]) && (i[0] = e[0])) : u.push(i = e);
        for (var o, e, g = -(1 / 0), t = u.length - 1, r = 0, i = u[t]; t >= r; i = e, ++r)
            e = u[r], (o = a(i[1], e[0])) > g && (g = o, f = e[0], h = i[1]);
    } return M = x = null, f === 1 / 0 || s === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[f, s], [h, p]]; }; }(), ao.geo.centroid = function (n) { Ea = Aa = Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, ja); var t = Da, e = Pa, r = Ua, i = t * t + e * e + r * r; return jo > i && (t = qa, e = Ta, r = Ra, Uo > Aa && (t = Ca, e = za, r = La), i = t * t + e * e + r * r, jo > i) ? [NaN, NaN] : [Math.atan2(e, t) * Zo, tn(r / Math.sqrt(i)) * Zo]; };
    var Ea, Aa, Ca, za, La, qa, Ta, Ra, Da, Pa, Ua, ja = { sphere: b, point: St, lineStart: Nt, lineEnd: Et, polygonStart: function () { ja.lineStart = At; }, polygonEnd: function () { ja.lineStart = Nt; } }, Fa = Rt(zt, jt, Ht, [-Fo, -Fo / 2]), Ha = 1e9;
    ao.geo.clipExtent = function () { var n, t, e, r, i, u, o = { stream: function (n) { return i && (i.valid = !1), i = u(n), i.valid = !0, i; }, extent: function (a) { return arguments.length ? (u = Zt(n = +a[0][0], t = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), o) : [[n, t], [e, r]]; } }; return o.extent([[0, 0], [960, 500]]); }, (ao.geo.conicEqualArea = function () { return Vt(Xt); }).raw = Xt, ao.geo.albers = function () { return ao.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070); }, ao.geo.albersUsa = function () { function n(n) { var u = n[0], o = n[1]; return t = null, e(u, o), t || (r(u, o), t) || i(u, o), t; } var t, e, r, i, u = ao.geo.albers(), o = ao.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), a = ao.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = { point: function (n, e) { t = [n, e]; } }; return n.invert = function (n) { var t = u.scale(), e = u.translate(), r = (n[0] - e[0]) / t, i = (n[1] - e[1]) / t; return (i >= .12 && .234 > i && r >= -.425 && -.214 > r ? o : i >= .166 && .234 > i && r >= -.214 && -.115 > r ? a : u).invert(n); }, n.stream = function (n) { var t = u.stream(n), e = o.stream(n), r = a.stream(n); return { point: function (n, i) { t.point(n, i), e.point(n, i), r.point(n, i); }, sphere: function () { t.sphere(), e.sphere(), r.sphere(); }, lineStart: function () { t.lineStart(), e.lineStart(), r.lineStart(); }, lineEnd: function () { t.lineEnd(), e.lineEnd(), r.lineEnd(); }, polygonStart: function () { t.polygonStart(), e.polygonStart(), r.polygonStart(); }, polygonEnd: function () { t.polygonEnd(), e.polygonEnd(), r.polygonEnd(); } }; }, n.precision = function (t) { return arguments.length ? (u.precision(t), o.precision(t), a.precision(t), n) : u.precision(); }, n.scale = function (t) { return arguments.length ? (u.scale(t), o.scale(.35 * t), a.scale(t), n.translate(u.translate())) : u.scale(); }, n.translate = function (t) { if (!arguments.length)
        return u.translate(); var c = u.scale(), f = +t[0], s = +t[1]; return e = u.translate(t).clipExtent([[f - .455 * c, s - .238 * c], [f + .455 * c, s + .238 * c]]).stream(l).point, r = o.translate([f - .307 * c, s + .201 * c]).clipExtent([[f - .425 * c + Uo, s + .12 * c + Uo], [f - .214 * c - Uo, s + .234 * c - Uo]]).stream(l).point, i = a.translate([f - .205 * c, s + .212 * c]).clipExtent([[f - .214 * c + Uo, s + .166 * c + Uo], [f - .115 * c - Uo, s + .234 * c - Uo]]).stream(l).point, n; }, n.scale(1070); };
    var Oa, Ia, Ya, Za, Va, Xa, $a = { point: b, lineStart: b, lineEnd: b, polygonStart: function () { Ia = 0, $a.lineStart = $t; }, polygonEnd: function () { $a.lineStart = $a.lineEnd = $a.point = b, Oa += xo(Ia / 2); } }, Ba = { point: Bt, lineStart: b, lineEnd: b, polygonStart: b, polygonEnd: b }, Wa = { point: Gt, lineStart: Kt, lineEnd: Qt, polygonStart: function () { Wa.lineStart = ne; }, polygonEnd: function () { Wa.point = Gt, Wa.lineStart = Kt, Wa.lineEnd = Qt; } };
    ao.geo.path = function () { function n(n) { return n && ("function" == typeof a && u.pointRadius(+a.apply(this, arguments)), o && o.valid || (o = i(u)), ao.geo.stream(n, o)), u.result(); } function t() { return o = null, n; } var e, r, i, u, o, a = 4.5; return n.area = function (n) { return Oa = 0, ao.geo.stream(n, i($a)), Oa; }, n.centroid = function (n) { return Ca = za = La = qa = Ta = Ra = Da = Pa = Ua = 0, ao.geo.stream(n, i(Wa)), Ua ? [Da / Ua, Pa / Ua] : Ra ? [qa / Ra, Ta / Ra] : La ? [Ca / La, za / La] : [NaN, NaN]; }, n.bounds = function (n) { return Va = Xa = -(Ya = Za = 1 / 0), ao.geo.stream(n, i(Ba)), [[Ya, Za], [Va, Xa]]; }, n.projection = function (n) { return arguments.length ? (i = (e = n) ? n.stream || re(n) : m, t()) : e; }, n.context = function (n) { return arguments.length ? (u = null == (r = n) ? new Wt : new te(n), "function" != typeof a && u.pointRadius(a), t()) : r; }, n.pointRadius = function (t) { return arguments.length ? (a = "function" == typeof t ? t : (u.pointRadius(+t), +t), n) : a; }, n.projection(ao.geo.albersUsa()).context(null); }, ao.geo.transform = function (n) { return { stream: function (t) { var e = new ie(t); for (var r in n)
            e[r] = n[r]; return e; } }; }, ie.prototype = { point: function (n, t) { this.stream.point(n, t); }, sphere: function () { this.stream.sphere(); }, lineStart: function () { this.stream.lineStart(); }, lineEnd: function () { this.stream.lineEnd(); }, polygonStart: function () { this.stream.polygonStart(); }, polygonEnd: function () { this.stream.polygonEnd(); } }, ao.geo.projection = oe, ao.geo.projectionMutator = ae, (ao.geo.equirectangular = function () { return oe(ce); }).raw = ce.invert = ce, ao.geo.rotation = function (n) { function t(t) { return t = n(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t; } return n = se(n[0] % 360 * Yo, n[1] * Yo, n.length > 2 ? n[2] * Yo : 0), t.invert = function (t) { return t = n.invert(t[0] * Yo, t[1] * Yo), t[0] *= Zo, t[1] *= Zo, t; }, t; }, fe.invert = ce, ao.geo.circle = function () { function n() { var n = "function" == typeof r ? r.apply(this, arguments) : r, t = se(-n[0] * Yo, -n[1] * Yo, 0).invert, i = []; return e(null, null, 1, { point: function (n, e) { i.push(n = t(n, e)), n[0] *= Zo, n[1] *= Zo; } }), { type: "Polygon", coordinates: [i] }; } var t, e, r = [0, 0], i = 6; return n.origin = function (t) { return arguments.length ? (r = t, n) : r; }, n.angle = function (r) { return arguments.length ? (e = ve((t = +r) * Yo, i * Yo), n) : t; }, n.precision = function (r) { return arguments.length ? (e = ve(t * Yo, (i = +r) * Yo), n) : i; }, n.angle(90); }, ao.geo.distance = function (n, t) { var e, r = (t[0] - n[0]) * Yo, i = n[1] * Yo, u = t[1] * Yo, o = Math.sin(r), a = Math.cos(r), l = Math.sin(i), c = Math.cos(i), f = Math.sin(u), s = Math.cos(u); return Math.atan2(Math.sqrt((e = s * o) * e + (e = c * f - l * s * a) * e), l * f + c * s * a); }, ao.geo.graticule = function () { function n() { return { type: "MultiLineString", coordinates: t() }; } function t() { return ao.range(Math.ceil(u / d) * d, i, d).map(h).concat(ao.range(Math.ceil(c / y) * y, l, y).map(p)).concat(ao.range(Math.ceil(r / g) * g, e, g).filter(function (n) { return xo(n % d) > Uo; }).map(f)).concat(ao.range(Math.ceil(a / v) * v, o, v).filter(function (n) { return xo(n % y) > Uo; }).map(s)); } var e, r, i, u, o, a, l, c, f, s, h, p, g = 10, v = g, d = 90, y = 360, m = 2.5; return n.lines = function () { return t().map(function (n) { return { type: "LineString", coordinates: n }; }); }, n.outline = function () { return { type: "Polygon", coordinates: [h(u).concat(p(l).slice(1), h(i).reverse().slice(1), p(c).reverse().slice(1))] }; }, n.extent = function (t) { return arguments.length ? n.majorExtent(t).minorExtent(t) : n.minorExtent(); }, n.majorExtent = function (t) { return arguments.length ? (u = +t[0][0], i = +t[1][0], c = +t[0][1], l = +t[1][1], u > i && (t = u, u = i, i = t), c > l && (t = c, c = l, l = t), n.precision(m)) : [[u, c], [i, l]]; }, n.minorExtent = function (t) { return arguments.length ? (r = +t[0][0], e = +t[1][0], a = +t[0][1], o = +t[1][1], r > e && (t = r, r = e, e = t), a > o && (t = a, a = o, o = t), n.precision(m)) : [[r, a], [e, o]]; }, n.step = function (t) { return arguments.length ? n.majorStep(t).minorStep(t) : n.minorStep(); }, n.majorStep = function (t) { return arguments.length ? (d = +t[0], y = +t[1], n) : [d, y]; }, n.minorStep = function (t) { return arguments.length ? (g = +t[0], v = +t[1], n) : [g, v]; }, n.precision = function (t) { return arguments.length ? (m = +t, f = ye(a, o, 90), s = me(r, e, m), h = ye(c, l, 90), p = me(u, i, m), n) : m; }, n.majorExtent([[-180, -90 + Uo], [180, 90 - Uo]]).minorExtent([[-180, -80 - Uo], [180, 80 + Uo]]); }, ao.geo.greatArc = function () { function n() { return { type: "LineString", coordinates: [t || r.apply(this, arguments), e || i.apply(this, arguments)] }; } var t, e, r = Me, i = xe; return n.distance = function () { return ao.geo.distance(t || r.apply(this, arguments), e || i.apply(this, arguments)); }, n.source = function (e) { return arguments.length ? (r = e, t = "function" == typeof e ? null : e, n) : r; }, n.target = function (t) { return arguments.length ? (i = t, e = "function" == typeof t ? null : t, n) : i; }, n.precision = function () { return arguments.length ? n : 0; }, n; }, ao.geo.interpolate = function (n, t) { return be(n[0] * Yo, n[1] * Yo, t[0] * Yo, t[1] * Yo); }, ao.geo.length = function (n) { return Ja = 0, ao.geo.stream(n, Ga), Ja; };
    var Ja, Ga = { sphere: b, point: b, lineStart: _e, lineEnd: b, polygonStart: b, polygonEnd: b }, Ka = we(function (n) { return Math.sqrt(2 / (1 + n)); }, function (n) { return 2 * Math.asin(n / 2); });
    (ao.geo.azimuthalEqualArea = function () { return oe(Ka); }).raw = Ka;
    var Qa = we(function (n) { var t = Math.acos(n); return t && t / Math.sin(t); }, m);
    (ao.geo.azimuthalEquidistant = function () { return oe(Qa); }).raw = Qa, (ao.geo.conicConformal = function () { return Vt(Se); }).raw = Se, (ao.geo.conicEquidistant = function () { return Vt(ke); }).raw = ke;
    var nl = we(function (n) { return 1 / n; }, Math.atan);
    (ao.geo.gnomonic = function () { return oe(nl); }).raw = nl, Ne.invert = function (n, t) { return [n, 2 * Math.atan(Math.exp(t)) - Io]; }, (ao.geo.mercator = function () { return Ee(Ne); }).raw = Ne;
    var tl = we(function () { return 1; }, Math.asin);
    (ao.geo.orthographic = function () { return oe(tl); }).raw = tl;
    var el = we(function (n) { return 1 / (1 + n); }, function (n) { return 2 * Math.atan(n); });
    (ao.geo.stereographic = function () { return oe(el); }).raw = el, Ae.invert = function (n, t) { return [-t, 2 * Math.atan(Math.exp(n)) - Io]; }, (ao.geo.transverseMercator = function () { var n = Ee(Ae), t = n.center, e = n.rotate; return n.center = function (n) { return n ? t([-n[1], n[0]]) : (n = t(), [n[1], -n[0]]); }, n.rotate = function (n) { return n ? e([n[0], n[1], n.length > 2 ? n[2] + 90 : 90]) : (n = e(), [n[0], n[1], n[2] - 90]); }, e([0, 0, 90]); }).raw = Ae, ao.geom = {}, ao.geom.hull = function (n) { function t(n) { if (n.length < 3)
        return []; var t, i = En(e), u = En(r), o = n.length, a = [], l = []; for (t = 0; o > t; t++)
        a.push([+i.call(this, n[t], t), +u.call(this, n[t], t), t]); for (a.sort(qe), t = 0; o > t; t++)
        l.push([a[t][0], -a[t][1]]); var c = Le(a), f = Le(l), s = f[0] === c[0], h = f[f.length - 1] === c[c.length - 1], p = []; for (t = c.length - 1; t >= 0; --t)
        p.push(n[a[c[t]][2]]); for (t = +s; t < f.length - h; ++t)
        p.push(n[a[f[t]][2]]); return p; } var e = Ce, r = ze; return arguments.length ? t(n) : (t.x = function (n) { return arguments.length ? (e = n, t) : e; }, t.y = function (n) { return arguments.length ? (r = n, t) : r; }, t); }, ao.geom.polygon = function (n) { return ko(n, rl), n; };
    var rl = ao.geom.polygon.prototype = [];
    rl.area = function () { for (var n, t = -1, e = this.length, r = this[e - 1], i = 0; ++t < e;)
        n = r, r = this[t], i += n[1] * r[0] - n[0] * r[1]; return .5 * i; }, rl.centroid = function (n) { var t, e, r = -1, i = this.length, u = 0, o = 0, a = this[i - 1]; for (arguments.length || (n = -1 / (6 * this.area())); ++r < i;)
        t = a, a = this[r], e = t[0] * a[1] - a[0] * t[1], u += (t[0] + a[0]) * e, o += (t[1] + a[1]) * e; return [u * n, o * n]; }, rl.clip = function (n) { for (var t, e, r, i, u, o, a = De(n), l = -1, c = this.length - De(this), f = this[c - 1]; ++l < c;) {
        for (t = n.slice(), n.length = 0, i = this[l], u = t[(r = t.length - a) - 1], e = -1; ++e < r;)
            o = t[e], Te(o, f, i) ? (Te(u, f, i) || n.push(Re(u, o, f, i)), n.push(o)) : Te(u, f, i) && n.push(Re(u, o, f, i)), u = o;
        a && n.push(n[0]), f = i;
    } return n; };
    var il, ul, ol, al, ll, cl = [], fl = [];
    Ye.prototype.prepare = function () { for (var n, t = this.edges, e = t.length; e--;)
        n = t[e].edge, n.b && n.a || t.splice(e, 1); return t.sort(Ve), t.length; }, tr.prototype = { start: function () { return this.edge.l === this.site ? this.edge.a : this.edge.b; }, end: function () { return this.edge.l === this.site ? this.edge.b : this.edge.a; } }, er.prototype = { insert: function (n, t) { var e, r, i; if (n) {
            if (t.P = n, t.N = n.N, n.N && (n.N.P = t), n.N = t, n.R) {
                for (n = n.R; n.L;)
                    n = n.L;
                n.L = t;
            }
            else
                n.R = t;
            e = n;
        }
        else
            this._ ? (n = or(this._), t.P = null, t.N = n, n.P = n.L = t, e = n) : (t.P = t.N = null, this._ = t, e = null); for (t.L = t.R = null, t.U = e, t.C = !0, n = t; e && e.C;)
            r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.R && (ir(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ur(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, n = r) : (n === e.L && (ur(this, e), n = e, e = n.U), e.C = !1, r.C = !0, ir(this, r))), e = n.U; this._.C = !1; }, remove: function (n) { n.N && (n.N.P = n.P), n.P && (n.P.N = n.N), n.N = n.P = null; var t, e, r, i = n.U, u = n.L, o = n.R; if (e = u ? o ? or(o) : u : o, i ? i.L === n ? i.L = e : i.R = e : this._ = e, u && o ? (r = e.C, e.C = n.C, e.L = u, u.U = e, e !== o ? (i = e.U, e.U = n.U, n = e.R, i.L = n, e.R = o, o.U = e) : (e.U = i, i = e, n = e.R)) : (r = n.C, n = e), n && (n.U = i), !r) {
            if (n && n.C)
                return void (n.C = !1);
            do {
                if (n === this._)
                    break;
                if (n === i.L) {
                    if (t = i.R, t.C && (t.C = !1, i.C = !0, ir(this, i), t = i.R), t.L && t.L.C || t.R && t.R.C) {
                        t.R && t.R.C || (t.L.C = !1, t.C = !0, ur(this, t), t = i.R), t.C = i.C, i.C = t.R.C = !1, ir(this, i), n = this._;
                        break;
                    }
                }
                else if (t = i.L, t.C && (t.C = !1, i.C = !0, ur(this, i), t = i.L), t.L && t.L.C || t.R && t.R.C) {
                    t.L && t.L.C || (t.R.C = !1, t.C = !0, ir(this, t), t = i.L), t.C = i.C, i.C = t.L.C = !1, ur(this, i), n = this._;
                    break;
                }
                t.C = !0, n = i, i = i.U;
            } while (!n.C);
            n && (n.C = !1);
        } } }, ao.geom.voronoi = function (n) { function t(n) { var t = new Array(n.length), r = a[0][0], i = a[0][1], u = a[1][0], o = a[1][1]; return ar(e(n), a).cells.forEach(function (e, a) { var l = e.edges, c = e.site, f = t[a] = l.length ? l.map(function (n) { var t = n.start(); return [t.x, t.y]; }) : c.x >= r && c.x <= u && c.y >= i && c.y <= o ? [[r, o], [u, o], [u, i], [r, i]] : []; f.point = n[a]; }), t; } function e(n) { return n.map(function (n, t) { return { x: Math.round(u(n, t) / Uo) * Uo, y: Math.round(o(n, t) / Uo) * Uo, i: t }; }); } var r = Ce, i = ze, u = r, o = i, a = sl; return n ? t(n) : (t.links = function (n) { return ar(e(n)).edges.filter(function (n) { return n.l && n.r; }).map(function (t) { return { source: n[t.l.i], target: n[t.r.i] }; }); }, t.triangles = function (n) { var t = []; return ar(e(n)).cells.forEach(function (e, r) { for (var i, u, o = e.site, a = e.edges.sort(Ve), l = -1, c = a.length, f = a[c - 1].edge, s = f.l === o ? f.r : f.l; ++l < c;)
        i = f, u = s, f = a[l].edge, s = f.l === o ? f.r : f.l, r < u.i && r < s.i && cr(o, u, s) < 0 && t.push([n[r], n[u.i], n[s.i]]); }), t; }, t.x = function (n) { return arguments.length ? (u = En(r = n), t) : r; }, t.y = function (n) { return arguments.length ? (o = En(i = n), t) : i; }, t.clipExtent = function (n) { return arguments.length ? (a = null == n ? sl : n, t) : a === sl ? null : a; }, t.size = function (n) { return arguments.length ? t.clipExtent(n && [[0, 0], n]) : a === sl ? null : a && a[1]; }, t); };
    var sl = [[-1e6, -1e6], [1e6, 1e6]];
    ao.geom.delaunay = function (n) { return ao.geom.voronoi().triangles(n); }, ao.geom.quadtree = function (n, t, e, r, i) { function u(n) { function u(n, t, e, r, i, u, o, a) { if (!isNaN(e) && !isNaN(r))
        if (n.leaf) {
            var l = n.x, f = n.y;
            if (null != l)
                if (xo(l - e) + xo(f - r) < .01)
                    c(n, t, e, r, i, u, o, a);
                else {
                    var s = n.point;
                    n.x = n.y = n.point = null, c(n, s, l, f, i, u, o, a), c(n, t, e, r, i, u, o, a);
                }
            else
                n.x = e, n.y = r, n.point = t;
        }
        else
            c(n, t, e, r, i, u, o, a); } function c(n, t, e, r, i, o, a, l) { var c = .5 * (i + a), f = .5 * (o + l), s = e >= c, h = r >= f, p = h << 1 | s; n.leaf = !1, n = n.nodes[p] || (n.nodes[p] = hr()), s ? i = c : a = c, h ? o = f : l = f, u(n, t, e, r, i, o, a, l); } var f, s, h, p, g, v, d, y, m, M = En(a), x = En(l); if (null != t)
        v = t, d = e, y = r, m = i;
    else if (y = m = -(v = d = 1 / 0), s = [], h = [], g = n.length, o)
        for (p = 0; g > p; ++p)
            f = n[p], f.x < v && (v = f.x), f.y < d && (d = f.y), f.x > y && (y = f.x), f.y > m && (m = f.y), s.push(f.x), h.push(f.y);
    else
        for (p = 0; g > p; ++p) {
            var b = +M(f = n[p], p), _ = +x(f, p);
            v > b && (v = b), d > _ && (d = _), b > y && (y = b), _ > m && (m = _), s.push(b), h.push(_);
        } var w = y - v, S = m - d; w > S ? m = d + w : y = v + S; var k = hr(); if (k.add = function (n) { u(k, n, +M(n, ++p), +x(n, p), v, d, y, m); }, k.visit = function (n) { pr(n, k, v, d, y, m); }, k.find = function (n) { return gr(k, n[0], n[1], v, d, y, m); }, p = -1, null == t) {
        for (; ++p < g;)
            u(k, n[p], s[p], h[p], v, d, y, m);
        --p;
    }
    else
        n.forEach(k.add); return s = h = n = f = null, k; } var o, a = Ce, l = ze; return (o = arguments.length) ? (a = fr, l = sr, 3 === o && (i = e, r = t, e = t = 0), u(n)) : (u.x = function (n) { return arguments.length ? (a = n, u) : a; }, u.y = function (n) { return arguments.length ? (l = n, u) : l; }, u.extent = function (n) { return arguments.length ? (null == n ? t = e = r = i = null : (t = +n[0][0], e = +n[0][1], r = +n[1][0], i = +n[1][1]), u) : null == t ? null : [[t, e], [r, i]]; }, u.size = function (n) { return arguments.length ? (null == n ? t = e = r = i = null : (t = e = 0, r = +n[0], i = +n[1]), u) : null == t ? null : [r - t, i - e]; }, u); }, ao.interpolateRgb = vr, ao.interpolateObject = dr, ao.interpolateNumber = yr, ao.interpolateString = mr;
    var hl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, pl = new RegExp(hl.source, "g");
    ao.interpolate = Mr, ao.interpolators = [function (n, t) { var e = typeof t; return ("string" === e ? ua.has(t.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(t) ? vr : mr : t instanceof an ? vr : Array.isArray(t) ? xr : "object" === e && isNaN(t) ? dr : yr)(n, t); }], ao.interpolateArray = xr;
    var gl = function () { return m; }, vl = ao.map({ linear: gl, poly: Er, quad: function () { return Sr; }, cubic: function () { return kr; }, sin: function () { return Ar; }, exp: function () { return Cr; }, circle: function () { return zr; }, elastic: Lr, back: qr, bounce: function () { return Tr; } }), dl = ao.map({ "in": m, out: _r, "in-out": wr, "out-in": function (n) { return wr(_r(n)); } });
    ao.ease = function (n) { var t = n.indexOf("-"), e = t >= 0 ? n.slice(0, t) : n, r = t >= 0 ? n.slice(t + 1) : "in"; return e = vl.get(e) || gl, r = dl.get(r) || m, br(r(e.apply(null, lo.call(arguments, 1)))); }, ao.interpolateHcl = Rr, ao.interpolateHsl = Dr, ao.interpolateLab = Pr, ao.interpolateRound = Ur, ao.transform = function (n) { var t = fo.createElementNS(ao.ns.prefix.svg, "g"); return (ao.transform = function (n) { if (null != n) {
        t.setAttribute("transform", n);
        var e = t.transform.baseVal.consolidate();
    } return new jr(e ? e.matrix : yl); })(n); }, jr.prototype.toString = function () { return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"; };
    var yl = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
    ao.interpolateTransform = $r, ao.layout = {}, ao.layout.bundle = function () { return function (n) { for (var t = [], e = -1, r = n.length; ++e < r;)
        t.push(Jr(n[e])); return t; }; }, ao.layout.chord = function () { function n() { var n, c, s, h, p, g = {}, v = [], d = ao.range(u), y = []; for (e = [], r = [], n = 0, h = -1; ++h < u;) {
        for (c = 0, p = -1; ++p < u;)
            c += i[h][p];
        v.push(c), y.push(ao.range(u)), n += c;
    } for (o && d.sort(function (n, t) { return o(v[n], v[t]); }), a && y.forEach(function (n, t) { n.sort(function (n, e) { return a(i[t][n], i[t][e]); }); }), n = (Ho - f * u) / n, c = 0, h = -1; ++h < u;) {
        for (s = c, p = -1; ++p < u;) {
            var m = d[h], M = y[m][p], x = i[m][M], b = c, _ = c += x * n;
            g[m + "-" + M] = { index: m, subindex: M, startAngle: b, endAngle: _, value: x };
        }
        r[m] = { index: m, startAngle: s, endAngle: c, value: v[m] }, c += f;
    } for (h = -1; ++h < u;)
        for (p = h - 1; ++p < u;) {
            var w = g[h + "-" + p], S = g[p + "-" + h];
            (w.value || S.value) && e.push(w.value < S.value ? { source: S, target: w } : { source: w, target: S });
        } l && t(); } function t() { e.sort(function (n, t) { return l((n.source.value + n.target.value) / 2, (t.source.value + t.target.value) / 2); }); } var e, r, i, u, o, a, l, c = {}, f = 0; return c.matrix = function (n) { return arguments.length ? (u = (i = n) && i.length, e = r = null, c) : i; }, c.padding = function (n) { return arguments.length ? (f = n, e = r = null, c) : f; }, c.sortGroups = function (n) { return arguments.length ? (o = n, e = r = null, c) : o; }, c.sortSubgroups = function (n) { return arguments.length ? (a = n, e = null, c) : a; }, c.sortChords = function (n) { return arguments.length ? (l = n, e && t(), c) : l; }, c.chords = function () { return e || n(), e; }, c.groups = function () { return r || n(), r; }, c; }, ao.layout.force = function () { function n(n) { return function (t, e, r, i) { if (t.point !== n) {
        var u = t.cx - n.x, o = t.cy - n.y, a = i - e, l = u * u + o * o;
        if (l > a * a / y) {
            if (v > l) {
                var c = t.charge / l;
                n.px -= u * c, n.py -= o * c;
            }
            return !0;
        }
        if (t.point && l && v > l) {
            var c = t.pointCharge / l;
            n.px -= u * c, n.py -= o * c;
        }
    } return !t.charge; }; } function t(n) { n.px = ao.event.x, n.py = ao.event.y, l.resume(); } var e, r, i, u, o, a, l = {}, c = ao.dispatch("start", "tick", "end"), f = [1, 1], s = .9, h = ml, p = Ml, g = -30, v = xl, d = .1, y = .64, M = [], x = []; return l.tick = function () { if ((i *= .99) < .005)
        return e = null, c.end({ type: "end", alpha: i = 0 }), !0; var t, r, l, h, p, v, y, m, b, _ = M.length, w = x.length; for (r = 0; w > r; ++r)
        l = x[r], h = l.source, p = l.target, m = p.x - h.x, b = p.y - h.y, (v = m * m + b * b) && (v = i * o[r] * ((v = Math.sqrt(v)) - u[r]) / v, m *= v, b *= v, p.x -= m * (y = h.weight + p.weight ? h.weight / (h.weight + p.weight) : .5), p.y -= b * y, h.x += m * (y = 1 - y), h.y += b * y); if ((y = i * d) && (m = f[0] / 2, b = f[1] / 2, r = -1, y))
        for (; ++r < _;)
            l = M[r], l.x += (m - l.x) * y, l.y += (b - l.y) * y; if (g)
        for (ri(t = ao.geom.quadtree(M), i, a), r = -1; ++r < _;)
            (l = M[r]).fixed || t.visit(n(l)); for (r = -1; ++r < _;)
        l = M[r], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * s, l.y -= (l.py - (l.py = l.y)) * s); c.tick({ type: "tick", alpha: i }); }, l.nodes = function (n) { return arguments.length ? (M = n, l) : M; }, l.links = function (n) { return arguments.length ? (x = n, l) : x; }, l.size = function (n) { return arguments.length ? (f = n, l) : f; }, l.linkDistance = function (n) { return arguments.length ? (h = "function" == typeof n ? n : +n, l) : h; }, l.distance = l.linkDistance, l.linkStrength = function (n) { return arguments.length ? (p = "function" == typeof n ? n : +n, l) : p; }, l.friction = function (n) { return arguments.length ? (s = +n, l) : s; }, l.charge = function (n) { return arguments.length ? (g = "function" == typeof n ? n : +n, l) : g; }, l.chargeDistance = function (n) { return arguments.length ? (v = n * n, l) : Math.sqrt(v); }, l.gravity = function (n) { return arguments.length ? (d = +n, l) : d; }, l.theta = function (n) { return arguments.length ? (y = n * n, l) : Math.sqrt(y); }, l.alpha = function (n) { return arguments.length ? (n = +n, i ? n > 0 ? i = n : (e.c = null, e.t = NaN, e = null, c.end({ type: "end", alpha: i = 0 })) : n > 0 && (c.start({ type: "start", alpha: i = n }), e = qn(l.tick)), l) : i; }, l.start = function () { function n(n, r) { if (!e) {
        for (e = new Array(i), l = 0; i > l; ++l)
            e[l] = [];
        for (l = 0; c > l; ++l) {
            var u = x[l];
            e[u.source.index].push(u.target), e[u.target.index].push(u.source);
        }
    } for (var o, a = e[t], l = -1, f = a.length; ++l < f;)
        if (!isNaN(o = a[l][n]))
            return o; return Math.random() * r; } var t, e, r, i = M.length, c = x.length, s = f[0], v = f[1]; for (t = 0; i > t; ++t)
        (r = M[t]).index = t, r.weight = 0; for (t = 0; c > t; ++t)
        r = x[t], "number" == typeof r.source && (r.source = M[r.source]), "number" == typeof r.target && (r.target = M[r.target]), ++r.source.weight, ++r.target.weight; for (t = 0; i > t; ++t)
        r = M[t], isNaN(r.x) && (r.x = n("x", s)), isNaN(r.y) && (r.y = n("y", v)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y); if (u = [], "function" == typeof h)
        for (t = 0; c > t; ++t)
            u[t] = +h.call(this, x[t], t);
    else
        for (t = 0; c > t; ++t)
            u[t] = h; if (o = [], "function" == typeof p)
        for (t = 0; c > t; ++t)
            o[t] = +p.call(this, x[t], t);
    else
        for (t = 0; c > t; ++t)
            o[t] = p; if (a = [], "function" == typeof g)
        for (t = 0; i > t; ++t)
            a[t] = +g.call(this, M[t], t);
    else
        for (t = 0; i > t; ++t)
            a[t] = g; return l.resume(); }, l.resume = function () { return l.alpha(.1); }, l.stop = function () { return l.alpha(0); }, l.drag = function () { return r || (r = ao.behavior.drag().origin(m).on("dragstart.force", Qr).on("drag.force", t).on("dragend.force", ni)), arguments.length ? void this.on("mouseover.force", ti).on("mouseout.force", ei).call(r) : r; }, ao.rebind(l, c, "on"); };
    var ml = 20, Ml = 1, xl = 1 / 0;
    ao.layout.hierarchy = function () { function n(i) { var u, o = [i], a = []; for (i.depth = 0; null != (u = o.pop());)
        if (a.push(u), (c = e.call(n, u, u.depth)) && (l = c.length)) {
            for (var l, c, f; --l >= 0;)
                o.push(f = c[l]), f.parent = u, f.depth = u.depth + 1;
            r && (u.value = 0), u.children = c;
        }
        else
            r && (u.value = +r.call(n, u, u.depth) || 0), delete u.children; return oi(i, function (n) { var e, i; t && (e = n.children) && e.sort(t), r && (i = n.parent) && (i.value += n.value); }), a; } var t = ci, e = ai, r = li; return n.sort = function (e) { return arguments.length ? (t = e, n) : t; }, n.children = function (t) { return arguments.length ? (e = t, n) : e; }, n.value = function (t) { return arguments.length ? (r = t, n) : r; }, n.revalue = function (t) { return r && (ui(t, function (n) { n.children && (n.value = 0); }), oi(t, function (t) { var e; t.children || (t.value = +r.call(n, t, t.depth) || 0), (e = t.parent) && (e.value += t.value); })), t; }, n; }, ao.layout.partition = function () { function n(t, e, r, i) { var u = t.children; if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, u && (o = u.length)) {
        var o, a, l, c = -1;
        for (r = t.value ? r / t.value : 0; ++c < o;)
            n(a = u[c], e, l = a.value * r, i), e += l;
    } } function t(n) { var e = n.children, r = 0; if (e && (i = e.length))
        for (var i, u = -1; ++u < i;)
            r = Math.max(r, t(e[u])); return 1 + r; } function e(e, u) { var o = r.call(this, e, u); return n(o[0], 0, i[0], i[1] / t(o[0])), o; } var r = ao.layout.hierarchy(), i = [1, 1]; return e.size = function (n) { return arguments.length ? (i = n, e) : i; }, ii(e, r); }, ao.layout.pie = function () { function n(o) { var a, l = o.length, c = o.map(function (e, r) { return +t.call(n, e, r); }), f = +("function" == typeof r ? r.apply(this, arguments) : r), s = ("function" == typeof i ? i.apply(this, arguments) : i) - f, h = Math.min(Math.abs(s) / l, +("function" == typeof u ? u.apply(this, arguments) : u)), p = h * (0 > s ? -1 : 1), g = ao.sum(c), v = g ? (s - l * p) / g : 0, d = ao.range(l), y = []; return null != e && d.sort(e === bl ? function (n, t) { return c[t] - c[n]; } : function (n, t) { return e(o[n], o[t]); }), d.forEach(function (n) { y[n] = { data: o[n], value: a = c[n], startAngle: f, endAngle: f += a * v + p, padAngle: h }; }), y; } var t = Number, e = bl, r = 0, i = Ho, u = 0; return n.value = function (e) { return arguments.length ? (t = e, n) : t; }, n.sort = function (t) { return arguments.length ? (e = t, n) : e; }, n.startAngle = function (t) { return arguments.length ? (r = t, n) : r; }, n.endAngle = function (t) { return arguments.length ? (i = t, n) : i; }, n.padAngle = function (t) { return arguments.length ? (u = t, n) : u; }, n; };
    var bl = {};
    ao.layout.stack = function () { function n(a, l) { if (!(h = a.length))
        return a; var c = a.map(function (e, r) { return t.call(n, e, r); }), f = c.map(function (t) { return t.map(function (t, e) { return [u.call(n, t, e), o.call(n, t, e)]; }); }), s = e.call(n, f, l); c = ao.permute(c, s), f = ao.permute(f, s); var h, p, g, v, d = r.call(n, f, l), y = c[0].length; for (g = 0; y > g; ++g)
        for (i.call(n, c[0][g], v = d[g], f[0][g][1]), p = 1; h > p; ++p)
            i.call(n, c[p][g], v += f[p - 1][g][1], f[p][g][1]); return a; } var t = m, e = gi, r = vi, i = pi, u = si, o = hi; return n.values = function (e) { return arguments.length ? (t = e, n) : t; }, n.order = function (t) { return arguments.length ? (e = "function" == typeof t ? t : _l.get(t) || gi, n) : e; }, n.offset = function (t) { return arguments.length ? (r = "function" == typeof t ? t : wl.get(t) || vi, n) : r; }, n.x = function (t) { return arguments.length ? (u = t, n) : u; }, n.y = function (t) { return arguments.length ? (o = t, n) : o; }, n.out = function (t) { return arguments.length ? (i = t, n) : i; }, n; };
    var _l = ao.map({ "inside-out": function (n) { var t, e, r = n.length, i = n.map(di), u = n.map(yi), o = ao.range(r).sort(function (n, t) { return i[n] - i[t]; }), a = 0, l = 0, c = [], f = []; for (t = 0; r > t; ++t)
            e = o[t], l > a ? (a += u[e], c.push(e)) : (l += u[e], f.push(e)); return f.reverse().concat(c); }, reverse: function (n) { return ao.range(n.length).reverse(); }, "default": gi }), wl = ao.map({ silhouette: function (n) { var t, e, r, i = n.length, u = n[0].length, o = [], a = 0, l = []; for (e = 0; u > e; ++e) {
            for (t = 0, r = 0; i > t; t++)
                r += n[t][e][1];
            r > a && (a = r), o.push(r);
        } for (e = 0; u > e; ++e)
            l[e] = (a - o[e]) / 2; return l; }, wiggle: function (n) { var t, e, r, i, u, o, a, l, c, f = n.length, s = n[0], h = s.length, p = []; for (p[0] = l = c = 0, e = 1; h > e; ++e) {
            for (t = 0, i = 0; f > t; ++t)
                i += n[t][e][1];
            for (t = 0, u = 0, a = s[e][0] - s[e - 1][0]; f > t; ++t) {
                for (r = 0, o = (n[t][e][1] - n[t][e - 1][1]) / (2 * a); t > r; ++r)
                    o += (n[r][e][1] - n[r][e - 1][1]) / a;
                u += o * n[t][e][1];
            }
            p[e] = l -= i ? u / i * a : 0, c > l && (c = l);
        } for (e = 0; h > e; ++e)
            p[e] -= c; return p; }, expand: function (n) { var t, e, r, i = n.length, u = n[0].length, o = 1 / i, a = []; for (e = 0; u > e; ++e) {
            for (t = 0, r = 0; i > t; t++)
                r += n[t][e][1];
            if (r)
                for (t = 0; i > t; t++)
                    n[t][e][1] /= r;
            else
                for (t = 0; i > t; t++)
                    n[t][e][1] = o;
        } for (e = 0; u > e; ++e)
            a[e] = 0; return a; }, zero: vi });
    ao.layout.histogram = function () { function n(n, u) { for (var o, a, l = [], c = n.map(e, this), f = r.call(this, c, u), s = i.call(this, f, c, u), u = -1, h = c.length, p = s.length - 1, g = t ? 1 : 1 / h; ++u < p;)
        o = l[u] = [], o.dx = s[u + 1] - (o.x = s[u]), o.y = 0; if (p > 0)
        for (u = -1; ++u < h;)
            a = c[u], a >= f[0] && a <= f[1] && (o = l[ao.bisect(s, a, 1, p) - 1], o.y += g, o.push(n[u])); return l; } var t = !0, e = Number, r = bi, i = Mi; return n.value = function (t) { return arguments.length ? (e = t, n) : e; }, n.range = function (t) { return arguments.length ? (r = En(t), n) : r; }, n.bins = function (t) { return arguments.length ? (i = "number" == typeof t ? function (n) { return xi(n, t); } : En(t), n) : i; }, n.frequency = function (e) { return arguments.length ? (t = !!e, n) : t; }, n; }, ao.layout.pack = function () { function n(n, u) { var o = e.call(this, n, u), a = o[0], l = i[0], c = i[1], f = null == t ? Math.sqrt : "function" == typeof t ? t : function () { return t; }; if (a.x = a.y = 0, oi(a, function (n) { n.r = +f(n.value); }), oi(a, Ni), r) {
        var s = r * (t ? 1 : Math.max(2 * a.r / l, 2 * a.r / c)) / 2;
        oi(a, function (n) { n.r += s; }), oi(a, Ni), oi(a, function (n) { n.r -= s; });
    } return Ci(a, l / 2, c / 2, t ? 1 : 1 / Math.max(2 * a.r / l, 2 * a.r / c)), o; } var t, e = ao.layout.hierarchy().sort(_i), r = 0, i = [1, 1]; return n.size = function (t) { return arguments.length ? (i = t, n) : i; }, n.radius = function (e) { return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, n) : t; }, n.padding = function (t) { return arguments.length ? (r = +t, n) : r; }, ii(n, e); }, ao.layout.tree = function () { function n(n, i) { var f = o.call(this, n, i), s = f[0], h = t(s); if (oi(h, e), h.parent.m = -h.z, ui(h, r), c)
        ui(s, u);
    else {
        var p = s, g = s, v = s;
        ui(s, function (n) { n.x < p.x && (p = n), n.x > g.x && (g = n), n.depth > v.depth && (v = n); });
        var d = a(p, g) / 2 - p.x, y = l[0] / (g.x + a(g, p) / 2 + d), m = l[1] / (v.depth || 1);
        ui(s, function (n) { n.x = (n.x + d) * y, n.y = n.depth * m; });
    } return f; } function t(n) { for (var t, e = { A: null, children: [n] }, r = [e]; null != (t = r.pop());)
        for (var i, u = t.children, o = 0, a = u.length; a > o; ++o)
            r.push((u[o] = i = { _: u[o], parent: t, children: (i = u[o].children) && i.slice() || [], A: null, a: null, z: 0, m: 0, c: 0, s: 0, t: null, i: o }).a = i); return e.children[0]; } function e(n) { var t = n.children, e = n.parent.children, r = n.i ? e[n.i - 1] : null; if (t.length) {
        Di(n);
        var u = (t[0].z + t[t.length - 1].z) / 2;
        r ? (n.z = r.z + a(n._, r._), n.m = n.z - u) : n.z = u;
    }
    else
        r && (n.z = r.z + a(n._, r._)); n.parent.A = i(n, r, n.parent.A || e[0]); } function r(n) { n._.x = n.z + n.parent.m, n.m += n.parent.m; } function i(n, t, e) { if (t) {
        for (var r, i = n, u = n, o = t, l = i.parent.children[0], c = i.m, f = u.m, s = o.m, h = l.m; o = Ti(o), i = qi(i), o && i;)
            l = qi(l), u = Ti(u), u.a = n, r = o.z + s - i.z - c + a(o._, i._), r > 0 && (Ri(Pi(o, n, e), n, r), c += r, f += r), s += o.m, c += i.m, h += l.m, f += u.m;
        o && !Ti(u) && (u.t = o, u.m += s - f), i && !qi(l) && (l.t = i, l.m += c - h, e = n);
    } return e; } function u(n) { n.x *= l[0], n.y = n.depth * l[1]; } var o = ao.layout.hierarchy().sort(null).value(null), a = Li, l = [1, 1], c = null; return n.separation = function (t) { return arguments.length ? (a = t, n) : a; }, n.size = function (t) { return arguments.length ? (c = null == (l = t) ? u : null, n) : c ? null : l; }, n.nodeSize = function (t) { return arguments.length ? (c = null == (l = t) ? null : u, n) : c ? l : null; }, ii(n, o); }, ao.layout.cluster = function () { function n(n, u) { var o, a = t.call(this, n, u), l = a[0], c = 0; oi(l, function (n) { var t = n.children; t && t.length ? (n.x = ji(t), n.y = Ui(t)) : (n.x = o ? c += e(n, o) : 0, n.y = 0, o = n); }); var f = Fi(l), s = Hi(l), h = f.x - e(f, s) / 2, p = s.x + e(s, f) / 2; return oi(l, i ? function (n) { n.x = (n.x - l.x) * r[0], n.y = (l.y - n.y) * r[1]; } : function (n) { n.x = (n.x - h) / (p - h) * r[0], n.y = (1 - (l.y ? n.y / l.y : 1)) * r[1]; }), a; } var t = ao.layout.hierarchy().sort(null).value(null), e = Li, r = [1, 1], i = !1; return n.separation = function (t) { return arguments.length ? (e = t, n) : e; }, n.size = function (t) { return arguments.length ? (i = null == (r = t), n) : i ? null : r; }, n.nodeSize = function (t) { return arguments.length ? (i = null != (r = t), n) : i ? r : null; }, ii(n, t); }, ao.layout.treemap = function () {
        function n(n, t) { for (var e, r, i = -1, u = n.length; ++i < u;)
            r = (e = n[i]).value * (0 > t ? 0 : t), e.area = isNaN(r) || 0 >= r ? 0 : r; }
        function t(e) { var u = e.children; if (u && u.length) {
            var o, a, l, c = s(e), f = [], h = u.slice(), g = 1 / 0, v = "slice" === p ? c.dx : "dice" === p ? c.dy : "slice-dice" === p ? 1 & e.depth ? c.dy : c.dx : Math.min(c.dx, c.dy);
            for (n(h, c.dx * c.dy / e.value), f.area = 0; (l = h.length) > 0;)
                f.push(o = h[l - 1]), f.area += o.area, "squarify" !== p || (a = r(f, v)) <= g ? (h.pop(), g = a) : (f.area -= f.pop().area, i(f, v, c, !1), v = Math.min(c.dx, c.dy), f.length = f.area = 0, g = 1 / 0);
            f.length && (i(f, v, c, !0), f.length = f.area = 0), u.forEach(t);
        } }
        function e(t) { var r = t.children; if (r && r.length) {
            var u, o = s(t), a = r.slice(), l = [];
            for (n(a, o.dx * o.dy / t.value), l.area = 0; u = a.pop();)
                l.push(u), l.area += u.area, null != u.z && (i(l, u.z ? o.dx : o.dy, o, !a.length), l.length = l.area = 0);
            r.forEach(e);
        } }
        function r(n, t) { for (var e, r = n.area, i = 0, u = 1 / 0, o = -1, a = n.length; ++o < a;)
            (e = n[o].area) && (u > e && (u = e), e > i && (i = e)); return r *= r, t *= t, r ? Math.max(t * i * g / r, r / (t * u * g)) : 1 / 0; }
        function i(n, t, e, r) {
            var i, u = -1, o = n.length, a = e.x, c = e.y, f = t ? l(n.area / t) : 0;
            if (t == e.dx) {
                for ((r || f > e.dy) && (f = e.dy); ++u < o;)
                    i = n[u], i.x = a, i.y = c, i.dy = f, a += i.dx = Math.min(e.x + e.dx - a, f ? l(i.area / f) : 0);
                i.z = !0, i.dx += e.x + e.dx - a, e.y += f, e.dy -= f;
            }
            else {
                for ((r || f > e.dx) && (f = e.dx); ++u < o;)
                    i = n[u], i.x = a, i.y = c, i.dx = f, c += i.dy = Math.min(e.y + e.dy - c, f ? l(i.area / f) : 0);
                i.z = !1, i.dy += e.y + e.dy - c, e.x += f, e.dx -= f;
            }
        }
        function u(r) { var i = o || a(r), u = i[0]; return u.x = u.y = 0, u.value ? (u.dx = c[0], u.dy = c[1]) : u.dx = u.dy = 0, o && a.revalue(u), n([u], u.dx * u.dy / u.value), (o ? e : t)(u), h && (o = i), i; }
        var o, a = ao.layout.hierarchy(), l = Math.round, c = [1, 1], f = null, s = Oi, h = !1, p = "squarify", g = .5 * (1 + Math.sqrt(5));
        return u.size = function (n) { return arguments.length ? (c = n, u) : c; }, u.padding = function (n) { function t(t) { var e = n.call(u, t, t.depth); return null == e ? Oi(t) : Ii(t, "number" == typeof e ? [e, e, e, e] : e); } function e(t) { return Ii(t, n); } if (!arguments.length)
            return f; var r; return s = null == (f = n) ? Oi : "function" == (r = typeof n) ? t : "number" === r ? (n = [n, n, n, n], e) : e, u; }, u.round = function (n) { return arguments.length ? (l = n ? Math.round : Number, u) : l != Number; }, u.sticky = function (n) { return arguments.length ? (h = n, o = null, u) : h; }, u.ratio = function (n) { return arguments.length ? (g = n, u) : g; }, u.mode = function (n) { return arguments.length ? (p = n + "", u) : p; }, ii(u, a);
    }, ao.random = { normal: function (n, t) { var e = arguments.length; return 2 > e && (t = 1), 1 > e && (n = 0), function () { var e, r, i; do
            e = 2 * Math.random() - 1, r = 2 * Math.random() - 1, i = e * e + r * r;
        while (!i || i > 1); return n + t * e * Math.sqrt(-2 * Math.log(i) / i); }; }, logNormal: function () { var n = ao.random.normal.apply(ao, arguments); return function () { return Math.exp(n()); }; }, bates: function (n) { var t = ao.random.irwinHall(n); return function () { return t() / n; }; }, irwinHall: function (n) { return function () { for (var t = 0, e = 0; n > e; e++)
            t += Math.random(); return t; }; } }, ao.scale = {};
    var Sl = { floor: m, ceil: m };
    ao.scale.linear = function () { return Wi([0, 1], [0, 1], Mr, !1); };
    var kl = { s: 1, g: 1, p: 1, r: 1, e: 1 };
    ao.scale.log = function () { return ru(ao.scale.linear().domain([0, 1]), 10, !0, [1, 10]); };
    var Nl = ao.format(".0e"), El = { floor: function (n) { return -Math.ceil(-n); }, ceil: function (n) { return -Math.floor(-n); } };
    ao.scale.pow = function () { return iu(ao.scale.linear(), 1, [0, 1]); }, ao.scale.sqrt = function () { return ao.scale.pow().exponent(.5); }, ao.scale.ordinal = function () { return ou([], { t: "range", a: [[]] }); }, ao.scale.category10 = function () { return ao.scale.ordinal().range(Al); }, ao.scale.category20 = function () { return ao.scale.ordinal().range(Cl); }, ao.scale.category20b = function () { return ao.scale.ordinal().range(zl); }, ao.scale.category20c = function () { return ao.scale.ordinal().range(Ll); };
    var Al = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(xn), Cl = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(xn), zl = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(xn), Ll = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(xn);
    ao.scale.quantile = function () { return au([], []); }, ao.scale.quantize = function () { return lu(0, 1, [0, 1]); }, ao.scale.threshold = function () { return cu([.5], [0, 1]); }, ao.scale.identity = function () { return fu([0, 1]); }, ao.svg = {}, ao.svg.arc = function () { function n() { var n = Math.max(0, +e.apply(this, arguments)), c = Math.max(0, +r.apply(this, arguments)), f = o.apply(this, arguments) - Io, s = a.apply(this, arguments) - Io, h = Math.abs(s - f), p = f > s ? 0 : 1; if (n > c && (g = c, c = n, n = g), h >= Oo)
        return t(c, p) + (n ? t(n, 1 - p) : "") + "Z"; var g, v, d, y, m, M, x, b, _, w, S, k, N = 0, E = 0, A = []; if ((y = (+l.apply(this, arguments) || 0) / 2) && (d = u === ql ? Math.sqrt(n * n + c * c) : +u.apply(this, arguments), p || (E *= -1), c && (E = tn(d / c * Math.sin(y))), n && (N = tn(d / n * Math.sin(y)))), c) {
        m = c * Math.cos(f + E), M = c * Math.sin(f + E), x = c * Math.cos(s - E), b = c * Math.sin(s - E);
        var C = Math.abs(s - f - 2 * E) <= Fo ? 0 : 1;
        if (E && yu(m, M, x, b) === p ^ C) {
            var z = (f + s) / 2;
            m = c * Math.cos(z), M = c * Math.sin(z), x = b = null;
        }
    }
    else
        m = M = 0; if (n) {
        _ = n * Math.cos(s - N), w = n * Math.sin(s - N), S = n * Math.cos(f + N), k = n * Math.sin(f + N);
        var L = Math.abs(f - s + 2 * N) <= Fo ? 0 : 1;
        if (N && yu(_, w, S, k) === 1 - p ^ L) {
            var q = (f + s) / 2;
            _ = n * Math.cos(q), w = n * Math.sin(q), S = k = null;
        }
    }
    else
        _ = w = 0; if (h > Uo && (g = Math.min(Math.abs(c - n) / 2, +i.apply(this, arguments))) > .001) {
        v = c > n ^ p ? 0 : 1;
        var T = g, R = g;
        if (Fo > h) {
            var D = null == S ? [_, w] : null == x ? [m, M] : Re([m, M], [S, k], [x, b], [_, w]), P = m - D[0], U = M - D[1], j = x - D[0], F = b - D[1], H = 1 / Math.sin(Math.acos((P * j + U * F) / (Math.sqrt(P * P + U * U) * Math.sqrt(j * j + F * F))) / 2), O = Math.sqrt(D[0] * D[0] + D[1] * D[1]);
            R = Math.min(g, (n - O) / (H - 1)), T = Math.min(g, (c - O) / (H + 1));
        }
        if (null != x) {
            var I = mu(null == S ? [_, w] : [S, k], [m, M], c, T, p), Y = mu([x, b], [_, w], c, T, p);
            g === T ? A.push("M", I[0], "A", T, ",", T, " 0 0,", v, " ", I[1], "A", c, ",", c, " 0 ", 1 - p ^ yu(I[1][0], I[1][1], Y[1][0], Y[1][1]), ",", p, " ", Y[1], "A", T, ",", T, " 0 0,", v, " ", Y[0]) : A.push("M", I[0], "A", T, ",", T, " 0 1,", v, " ", Y[0]);
        }
        else
            A.push("M", m, ",", M);
        if (null != S) {
            var Z = mu([m, M], [S, k], n, -R, p), V = mu([_, w], null == x ? [m, M] : [x, b], n, -R, p);
            g === R ? A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", V[1], "A", n, ",", n, " 0 ", p ^ yu(V[1][0], V[1][1], Z[1][0], Z[1][1]), ",", 1 - p, " ", Z[1], "A", R, ",", R, " 0 0,", v, " ", Z[0]) : A.push("L", V[0], "A", R, ",", R, " 0 0,", v, " ", Z[0]);
        }
        else
            A.push("L", _, ",", w);
    }
    else
        A.push("M", m, ",", M), null != x && A.push("A", c, ",", c, " 0 ", C, ",", p, " ", x, ",", b), A.push("L", _, ",", w), null != S && A.push("A", n, ",", n, " 0 ", L, ",", 1 - p, " ", S, ",", k); return A.push("Z"), A.join(""); } function t(n, t) { return "M0," + n + "A" + n + "," + n + " 0 1," + t + " 0," + -n + "A" + n + "," + n + " 0 1," + t + " 0," + n; } var e = hu, r = pu, i = su, u = ql, o = gu, a = vu, l = du; return n.innerRadius = function (t) { return arguments.length ? (e = En(t), n) : e; }, n.outerRadius = function (t) { return arguments.length ? (r = En(t), n) : r; }, n.cornerRadius = function (t) { return arguments.length ? (i = En(t), n) : i; }, n.padRadius = function (t) { return arguments.length ? (u = t == ql ? ql : En(t), n) : u; }, n.startAngle = function (t) { return arguments.length ? (o = En(t), n) : o; }, n.endAngle = function (t) { return arguments.length ? (a = En(t), n) : a; }, n.padAngle = function (t) { return arguments.length ? (l = En(t), n) : l; }, n.centroid = function () { var n = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2, t = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - Io; return [Math.cos(t) * n, Math.sin(t) * n]; }, n; };
    var ql = "auto";
    ao.svg.line = function () { return Mu(m); };
    var Tl = ao.map({ linear: xu, "linear-closed": bu, step: _u, "step-before": wu, "step-after": Su, basis: zu, "basis-open": Lu, "basis-closed": qu, bundle: Tu, cardinal: Eu, "cardinal-open": ku, "cardinal-closed": Nu, monotone: Fu });
    Tl.forEach(function (n, t) { t.key = n, t.closed = /-closed$/.test(n); });
    var Rl = [0, 2 / 3, 1 / 3, 0], Dl = [0, 1 / 3, 2 / 3, 0], Pl = [0, 1 / 6, 2 / 3, 1 / 6];
    ao.svg.line.radial = function () { var n = Mu(Hu); return n.radius = n.x, delete n.x, n.angle = n.y, delete n.y, n; }, wu.reverse = Su, Su.reverse = wu, ao.svg.area = function () { return Ou(m); }, ao.svg.area.radial = function () { var n = Ou(Hu); return n.radius = n.x, delete n.x, n.innerRadius = n.x0, delete n.x0, n.outerRadius = n.x1, delete n.x1, n.angle = n.y, delete n.y, n.startAngle = n.y0, delete n.y0, n.endAngle = n.y1, delete n.y1, n; }, ao.svg.chord = function () { function n(n, a) { var l = t(this, u, n, a), c = t(this, o, n, a); return "M" + l.p0 + r(l.r, l.p1, l.a1 - l.a0) + (e(l, c) ? i(l.r, l.p1, l.r, l.p0) : i(l.r, l.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + i(c.r, c.p1, l.r, l.p0)) + "Z"; } function t(n, t, e, r) { var i = t.call(n, e, r), u = a.call(n, i, r), o = l.call(n, i, r) - Io, f = c.call(n, i, r) - Io; return { r: u, a0: o, a1: f, p0: [u * Math.cos(o), u * Math.sin(o)], p1: [u * Math.cos(f), u * Math.sin(f)] }; } function e(n, t) { return n.a0 == t.a0 && n.a1 == t.a1; } function r(n, t, e) { return "A" + n + "," + n + " 0 " + +(e > Fo) + ",1 " + t; } function i(n, t, e, r) { return "Q 0,0 " + r; } var u = Me, o = xe, a = Iu, l = gu, c = vu; return n.radius = function (t) { return arguments.length ? (a = En(t), n) : a; }, n.source = function (t) { return arguments.length ? (u = En(t), n) : u; }, n.target = function (t) { return arguments.length ? (o = En(t), n) : o; }, n.startAngle = function (t) { return arguments.length ? (l = En(t), n) : l; }, n.endAngle = function (t) { return arguments.length ? (c = En(t), n) : c; }, n; }, ao.svg.diagonal = function () { function n(n, i) { var u = t.call(this, n, i), o = e.call(this, n, i), a = (u.y + o.y) / 2, l = [u, { x: u.x, y: a }, { x: o.x, y: a }, o]; return l = l.map(r), "M" + l[0] + "C" + l[1] + " " + l[2] + " " + l[3]; } var t = Me, e = xe, r = Yu; return n.source = function (e) { return arguments.length ? (t = En(e), n) : t; }, n.target = function (t) { return arguments.length ? (e = En(t), n) : e; }, n.projection = function (t) { return arguments.length ? (r = t, n) : r; }, n; }, ao.svg.diagonal.radial = function () { var n = ao.svg.diagonal(), t = Yu, e = n.projection; return n.projection = function (n) { return arguments.length ? e(Zu(t = n)) : t; }, n; }, ao.svg.symbol = function () { function n(n, r) { return (Ul.get(t.call(this, n, r)) || $u)(e.call(this, n, r)); } var t = Xu, e = Vu; return n.type = function (e) { return arguments.length ? (t = En(e), n) : t; }, n.size = function (t) { return arguments.length ? (e = En(t), n) : e; }, n; };
    var Ul = ao.map({ circle: $u, cross: function (n) { var t = Math.sqrt(n / 5) / 2; return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"; }, diamond: function (n) { var t = Math.sqrt(n / (2 * Fl)), e = t * Fl; return "M0," + -t + "L" + e + ",0 0," + t + " " + -e + ",0Z"; }, square: function (n) { var t = Math.sqrt(n) / 2; return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"; }, "triangle-down": function (n) { var t = Math.sqrt(n / jl), e = t * jl / 2; return "M0," + e + "L" + t + "," + -e + " " + -t + "," + -e + "Z"; }, "triangle-up": function (n) { var t = Math.sqrt(n / jl), e = t * jl / 2; return "M0," + -e + "L" + t + "," + e + " " + -t + "," + e + "Z"; } });
    ao.svg.symbolTypes = Ul.keys();
    var jl = Math.sqrt(3), Fl = Math.tan(30 * Yo);
    Co.transition = function (n) { for (var t, e, r = Hl || ++Zl, i = Ku(n), u = [], o = Ol || { time: Date.now(), ease: Nr, delay: 0, duration: 250 }, a = -1, l = this.length; ++a < l;) {
        u.push(t = []);
        for (var c = this[a], f = -1, s = c.length; ++f < s;)
            (e = c[f]) && Qu(e, f, i, r, o), t.push(e);
    } return Wu(u, i, r); }, Co.interrupt = function (n) { return this.each(null == n ? Il : Bu(Ku(n))); };
    var Hl, Ol, Il = Bu(Ku()), Yl = [], Zl = 0;
    Yl.call = Co.call, Yl.empty = Co.empty, Yl.node = Co.node, Yl.size = Co.size, ao.transition = function (n, t) { return n && n.transition ? Hl ? n.transition(t) : n : ao.selection().transition(n); }, ao.transition.prototype = Yl, Yl.select = function (n) { var t, e, r, i = this.id, u = this.namespace, o = []; n = A(n); for (var a = -1, l = this.length; ++a < l;) {
        o.push(t = []);
        for (var c = this[a], f = -1, s = c.length; ++f < s;)
            (r = c[f]) && (e = n.call(r, r.__data__, f, a)) ? ("__data__" in r && (e.__data__ = r.__data__), Qu(e, f, u, i, r[u][i]), t.push(e)) : t.push(null);
    } return Wu(o, u, i); }, Yl.selectAll = function (n) { var t, e, r, i, u, o = this.id, a = this.namespace, l = []; n = C(n); for (var c = -1, f = this.length; ++c < f;)
        for (var s = this[c], h = -1, p = s.length; ++h < p;)
            if (r = s[h]) {
                u = r[a][o], e = n.call(r, r.__data__, h, c), l.push(t = []);
                for (var g = -1, v = e.length; ++g < v;)
                    (i = e[g]) && Qu(i, g, a, o, u), t.push(i);
            } return Wu(l, a, o); }, Yl.filter = function (n) { var t, e, r, i = []; "function" != typeof n && (n = O(n)); for (var u = 0, o = this.length; o > u; u++) {
        i.push(t = []);
        for (var e = this[u], a = 0, l = e.length; l > a; a++)
            (r = e[a]) && n.call(r, r.__data__, a, u) && t.push(r);
    } return Wu(i, this.namespace, this.id); }, Yl.tween = function (n, t) { var e = this.id, r = this.namespace; return arguments.length < 2 ? this.node()[r][e].tween.get(n) : Y(this, null == t ? function (t) { t[r][e].tween.remove(n); } : function (i) { i[r][e].tween.set(n, t); }); }, Yl.attr = function (n, t) { function e() { this.removeAttribute(a); } function r() { this.removeAttributeNS(a.space, a.local); } function i(n) { return null == n ? e : (n += "", function () { var t, e = this.getAttribute(a); return e !== n && (t = o(e, n), function (n) { this.setAttribute(a, t(n)); }); }); } function u(n) { return null == n ? r : (n += "", function () { var t, e = this.getAttributeNS(a.space, a.local); return e !== n && (t = o(e, n), function (n) { this.setAttributeNS(a.space, a.local, t(n)); }); }); } if (arguments.length < 2) {
        for (t in n)
            this.attr(t, n[t]);
        return this;
    } var o = "transform" == n ? $r : Mr, a = ao.ns.qualify(n); return Ju(this, "attr." + n, t, a.local ? u : i); }, Yl.attrTween = function (n, t) { function e(n, e) { var r = t.call(this, n, e, this.getAttribute(i)); return r && function (n) { this.setAttribute(i, r(n)); }; } function r(n, e) { var r = t.call(this, n, e, this.getAttributeNS(i.space, i.local)); return r && function (n) { this.setAttributeNS(i.space, i.local, r(n)); }; } var i = ao.ns.qualify(n); return this.tween("attr." + n, i.local ? r : e); }, Yl.style = function (n, e, r) { function i() { this.style.removeProperty(n); } function u(e) { return null == e ? i : (e += "", function () { var i, u = t(this).getComputedStyle(this, null).getPropertyValue(n); return u !== e && (i = Mr(u, e), function (t) { this.style.setProperty(n, i(t), r); }); }); } var o = arguments.length; if (3 > o) {
        if ("string" != typeof n) {
            2 > o && (e = "");
            for (r in n)
                this.style(r, n[r], e);
            return this;
        }
        r = "";
    } return Ju(this, "style." + n, e, u); }, Yl.styleTween = function (n, e, r) { function i(i, u) { var o = e.call(this, i, u, t(this).getComputedStyle(this, null).getPropertyValue(n)); return o && function (t) { this.style.setProperty(n, o(t), r); }; } return arguments.length < 3 && (r = ""), this.tween("style." + n, i); }, Yl.text = function (n) { return Ju(this, "text", n, Gu); }, Yl.remove = function () { var n = this.namespace; return this.each("end.transition", function () { var t; this[n].count < 2 && (t = this.parentNode) && t.removeChild(this); }); }, Yl.ease = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].ease : ("function" != typeof n && (n = ao.ease.apply(ao, arguments)), Y(this, function (r) { r[e][t].ease = n; })); }, Yl.delay = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].delay : Y(this, "function" == typeof n ? function (r, i, u) { r[e][t].delay = +n.call(r, r.__data__, i, u); } : (n = +n, function (r) { r[e][t].delay = n; })); }, Yl.duration = function (n) { var t = this.id, e = this.namespace; return arguments.length < 1 ? this.node()[e][t].duration : Y(this, "function" == typeof n ? function (r, i, u) { r[e][t].duration = Math.max(1, n.call(r, r.__data__, i, u)); } : (n = Math.max(1, n), function (r) { r[e][t].duration = n; })); }, Yl.each = function (n, t) { var e = this.id, r = this.namespace; if (arguments.length < 2) {
        var i = Ol, u = Hl;
        try {
            Hl = e, Y(this, function (t, i, u) { Ol = t[r][e], n.call(t, t.__data__, i, u); });
        }
        finally {
            Ol = i, Hl = u;
        }
    }
    else
        Y(this, function (i) { var u = i[r][e]; (u.event || (u.event = ao.dispatch("start", "end", "interrupt"))).on(n, t); }); return this; }, Yl.transition = function () { for (var n, t, e, r, i = this.id, u = ++Zl, o = this.namespace, a = [], l = 0, c = this.length; c > l; l++) {
        a.push(n = []);
        for (var t = this[l], f = 0, s = t.length; s > f; f++)
            (e = t[f]) && (r = e[o][i], Qu(e, f, o, u, { time: r.time, ease: r.ease, delay: r.delay + r.duration, duration: r.duration })), n.push(e);
    } return Wu(a, o, u); }, ao.svg.axis = function () { function n(n) { n.each(function () { var n, c = ao.select(this), f = this.__chart__ || e, s = this.__chart__ = e.copy(), h = null == l ? s.ticks ? s.ticks.apply(s, a) : s.domain() : l, p = null == t ? s.tickFormat ? s.tickFormat.apply(s, a) : m : t, g = c.selectAll(".tick").data(h, s), v = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Uo), d = ao.transition(g.exit()).style("opacity", Uo).remove(), y = ao.transition(g.order()).style("opacity", 1), M = Math.max(i, 0) + o, x = Zi(s), b = c.selectAll(".domain").data([0]), _ = (b.enter().append("path").attr("class", "domain"), ao.transition(b)); v.append("line"), v.append("text"); var w, S, k, N, E = v.select("line"), A = y.select("line"), C = g.select("text").text(p), z = v.select("text"), L = y.select("text"), q = "top" === r || "left" === r ? -1 : 1; if ("bottom" === r || "top" === r ? (n = no, w = "x", k = "y", S = "x2", N = "y2", C.attr("dy", 0 > q ? "0em" : ".71em").style("text-anchor", "middle"), _.attr("d", "M" + x[0] + "," + q * u + "V0H" + x[1] + "V" + q * u)) : (n = to, w = "y", k = "x", S = "y2", N = "x2", C.attr("dy", ".32em").style("text-anchor", 0 > q ? "end" : "start"), _.attr("d", "M" + q * u + "," + x[0] + "H0V" + x[1] + "H" + q * u)), E.attr(N, q * i), z.attr(k, q * M), A.attr(S, 0).attr(N, q * i), L.attr(w, 0).attr(k, q * M), s.rangeBand) {
        var T = s, R = T.rangeBand() / 2;
        f = s = function (n) { return T(n) + R; };
    }
    else
        f.rangeBand ? f = s : d.call(n, s, f); v.call(n, f, s), y.call(n, s, s); }); } var t, e = ao.scale.linear(), r = Vl, i = 6, u = 6, o = 3, a = [10], l = null; return n.scale = function (t) { return arguments.length ? (e = t, n) : e; }, n.orient = function (t) { return arguments.length ? (r = t in Xl ? t + "" : Vl, n) : r; }, n.ticks = function () { return arguments.length ? (a = co(arguments), n) : a; }, n.tickValues = function (t) { return arguments.length ? (l = t, n) : l; }, n.tickFormat = function (e) { return arguments.length ? (t = e, n) : t; }, n.tickSize = function (t) { var e = arguments.length; return e ? (i = +t, u = +arguments[e - 1], n) : i; }, n.innerTickSize = function (t) { return arguments.length ? (i = +t, n) : i; }, n.outerTickSize = function (t) { return arguments.length ? (u = +t, n) : u; }, n.tickPadding = function (t) { return arguments.length ? (o = +t, n) : o; }, n.tickSubdivide = function () { return arguments.length && n; }, n; };
    var Vl = "bottom", Xl = { top: 1, right: 1, bottom: 1, left: 1 };
    ao.svg.brush = function () { function n(t) { t.each(function () { var t = ao.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u), o = t.selectAll(".background").data([0]); o.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move"); var a = t.selectAll(".resize").data(v, m); a.exit().remove(), a.enter().append("g").attr("class", function (n) { return "resize " + n; }).style("cursor", function (n) { return $l[n]; }).append("rect").attr("x", function (n) { return /[ew]$/.test(n) ? -3 : null; }).attr("y", function (n) { return /^[ns]/.test(n) ? -3 : null; }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), a.style("display", n.empty() ? "none" : null); var l, s = ao.transition(t), h = ao.transition(o); c && (l = Zi(c), h.attr("x", l[0]).attr("width", l[1] - l[0]), r(s)), f && (l = Zi(f), h.attr("y", l[0]).attr("height", l[1] - l[0]), i(s)), e(s); }); } function e(n) { n.selectAll(".resize").attr("transform", function (n) { return "translate(" + s[+/e$/.test(n)] + "," + h[+/^s/.test(n)] + ")"; }); } function r(n) { n.select(".extent").attr("x", s[0]), n.selectAll(".extent,.n>rect,.s>rect").attr("width", s[1] - s[0]); } function i(n) { n.select(".extent").attr("y", h[0]), n.selectAll(".extent,.e>rect,.w>rect").attr("height", h[1] - h[0]); } function u() { function u() { 32 == ao.event.keyCode && (C || (M = null, L[0] -= s[1], L[1] -= h[1], C = 2), S()); } function v() { 32 == ao.event.keyCode && 2 == C && (L[0] += s[1], L[1] += h[1], C = 0, S()); } function d() { var n = ao.mouse(b), t = !1; x && (n[0] += x[0], n[1] += x[1]), C || (ao.event.altKey ? (M || (M = [(s[0] + s[1]) / 2, (h[0] + h[1]) / 2]), L[0] = s[+(n[0] < M[0])], L[1] = h[+(n[1] < M[1])]) : M = null), E && y(n, c, 0) && (r(k), t = !0), A && y(n, f, 1) && (i(k), t = !0), t && (e(k), w({ type: "brush", mode: C ? "move" : "resize" })); } function y(n, t, e) { var r, i, u = Zi(t), l = u[0], c = u[1], f = L[e], v = e ? h : s, d = v[1] - v[0]; return C && (l -= f, c -= d + f), r = (e ? g : p) ? Math.max(l, Math.min(c, n[e])) : n[e], C ? i = (r += f) + d : (M && (f = Math.max(l, Math.min(c, 2 * M[e] - r))), r > f ? (i = r, r = f) : i = f), v[0] != r || v[1] != i ? (e ? a = null : o = null, v[0] = r, v[1] = i, !0) : void 0; } function m() { d(), k.style("pointer-events", "all").selectAll(".resize").style("display", n.empty() ? "none" : null), ao.select("body").style("cursor", null), q.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), z(), w({ type: "brushend" }); } var M, x, b = this, _ = ao.select(ao.event.target), w = l.of(b, arguments), k = ao.select(b), N = _.datum(), E = !/^(n|s)$/.test(N) && c, A = !/^(e|w)$/.test(N) && f, C = _.classed("extent"), z = W(b), L = ao.mouse(b), q = ao.select(t(b)).on("keydown.brush", u).on("keyup.brush", v); if (ao.event.changedTouches ? q.on("touchmove.brush", d).on("touchend.brush", m) : q.on("mousemove.brush", d).on("mouseup.brush", m), k.interrupt().selectAll("*").interrupt(), C)
        L[0] = s[0] - L[0], L[1] = h[0] - L[1];
    else if (N) {
        var T = +/w$/.test(N), R = +/^n/.test(N);
        x = [s[1 - T] - L[0], h[1 - R] - L[1]], L[0] = s[T], L[1] = h[R];
    }
    else
        ao.event.altKey && (M = L.slice()); k.style("pointer-events", "none").selectAll(".resize").style("display", null), ao.select("body").style("cursor", _.style("cursor")), w({ type: "brushstart" }), d(); } var o, a, l = N(n, "brushstart", "brush", "brushend"), c = null, f = null, s = [0, 0], h = [0, 0], p = !0, g = !0, v = Bl[0]; return n.event = function (n) { n.each(function () { var n = l.of(this, arguments), t = { x: s, y: h, i: o, j: a }, e = this.__chart__ || t; this.__chart__ = t, Hl ? ao.select(this).transition().each("start.brush", function () { o = e.i, a = e.j, s = e.x, h = e.y, n({ type: "brushstart" }); }).tween("brush:brush", function () { var e = xr(s, t.x), r = xr(h, t.y); return o = a = null, function (i) { s = t.x = e(i), h = t.y = r(i), n({ type: "brush", mode: "resize" }); }; }).each("end.brush", function () { o = t.i, a = t.j, n({ type: "brush", mode: "resize" }), n({ type: "brushend" }); }) : (n({ type: "brushstart" }), n({ type: "brush", mode: "resize" }), n({ type: "brushend" })); }); }, n.x = function (t) { return arguments.length ? (c = t, v = Bl[!c << 1 | !f], n) : c; }, n.y = function (t) { return arguments.length ? (f = t, v = Bl[!c << 1 | !f], n) : f; }, n.clamp = function (t) { return arguments.length ? (c && f ? (p = !!t[0], g = !!t[1]) : c ? p = !!t : f && (g = !!t), n) : c && f ? [p, g] : c ? p : f ? g : null; }, n.extent = function (t) { var e, r, i, u, l; return arguments.length ? (c && (e = t[0], r = t[1], f && (e = e[0], r = r[0]), o = [e, r], c.invert && (e = c(e), r = c(r)), e > r && (l = e, e = r, r = l), e == s[0] && r == s[1] || (s = [e, r])), f && (i = t[0], u = t[1], c && (i = i[1], u = u[1]), a = [i, u], f.invert && (i = f(i), u = f(u)), i > u && (l = i, i = u, u = l), i == h[0] && u == h[1] || (h = [i, u])), n) : (c && (o ? (e = o[0], r = o[1]) : (e = s[0], r = s[1], c.invert && (e = c.invert(e), r = c.invert(r)), e > r && (l = e, e = r, r = l))), f && (a ? (i = a[0], u = a[1]) : (i = h[0], u = h[1], f.invert && (i = f.invert(i), u = f.invert(u)), i > u && (l = i, i = u, u = l))), c && f ? [[e, i], [r, u]] : c ? [e, r] : f && [i, u]); }, n.clear = function () { return n.empty() || (s = [0, 0], h = [0, 0], o = a = null), n; }, n.empty = function () { return !!c && s[0] == s[1] || !!f && h[0] == h[1]; }, ao.rebind(n, l, "on"); };
    var $l = { n: "ns-resize", e: "ew-resize", s: "ns-resize", w: "ew-resize", nw: "nwse-resize", ne: "nesw-resize", se: "nwse-resize", sw: "nesw-resize" }, Bl = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []], Wl = ga.format = xa.timeFormat, Jl = Wl.utc, Gl = Jl("%Y-%m-%dT%H:%M:%S.%LZ");
    Wl.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? eo : Gl, eo.parse = function (n) { var t = new Date(n); return isNaN(t) ? null : t; }, eo.toString = Gl.toString, ga.second = On(function (n) { return new va(1e3 * Math.floor(n / 1e3)); }, function (n, t) { n.setTime(n.getTime() + 1e3 * Math.floor(t)); }, function (n) { return n.getSeconds(); }), ga.seconds = ga.second.range, ga.seconds.utc = ga.second.utc.range, ga.minute = On(function (n) { return new va(6e4 * Math.floor(n / 6e4)); }, function (n, t) { n.setTime(n.getTime() + 6e4 * Math.floor(t)); }, function (n) { return n.getMinutes(); }), ga.minutes = ga.minute.range, ga.minutes.utc = ga.minute.utc.range, ga.hour = On(function (n) { var t = n.getTimezoneOffset() / 60; return new va(36e5 * (Math.floor(n / 36e5 - t) + t)); }, function (n, t) { n.setTime(n.getTime() + 36e5 * Math.floor(t)); }, function (n) { return n.getHours(); }), ga.hours = ga.hour.range, ga.hours.utc = ga.hour.utc.range, ga.month = On(function (n) { return n = ga.day(n), n.setDate(1), n; }, function (n, t) { n.setMonth(n.getMonth() + t); }, function (n) { return n.getMonth(); }), ga.months = ga.month.range, ga.months.utc = ga.month.utc.range;
    var Kl = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Ql = [[ga.second, 1], [ga.second, 5], [ga.second, 15], [ga.second, 30], [ga.minute, 1], [ga.minute, 5], [ga.minute, 15], [ga.minute, 30], [ga.hour, 1], [ga.hour, 3], [ga.hour, 6], [ga.hour, 12], [ga.day, 1], [ga.day, 2], [ga.week, 1], [ga.month, 1], [ga.month, 3], [ga.year, 1]], nc = Wl.multi([[".%L", function (n) { return n.getMilliseconds(); }], [":%S", function (n) { return n.getSeconds(); }], ["%I:%M", function (n) { return n.getMinutes(); }], ["%I %p", function (n) { return n.getHours(); }], ["%a %d", function (n) { return n.getDay() && 1 != n.getDate(); }], ["%b %d", function (n) { return 1 != n.getDate(); }], ["%B", function (n) { return n.getMonth(); }], ["%Y", zt]]), tc = { range: function (n, t, e) { return ao.range(Math.ceil(n / e) * e, +t, e).map(io); }, floor: m, ceil: m };
    Ql.year = ga.year, ga.scale = function () { return ro(ao.scale.linear(), Ql, nc); };
    var ec = Ql.map(function (n) { return [n[0].utc, n[1]]; }), rc = Jl.multi([[".%L", function (n) { return n.getUTCMilliseconds(); }], [":%S", function (n) { return n.getUTCSeconds(); }], ["%I:%M", function (n) { return n.getUTCMinutes(); }], ["%I %p", function (n) { return n.getUTCHours(); }], ["%a %d", function (n) { return n.getUTCDay() && 1 != n.getUTCDate(); }], ["%b %d", function (n) { return 1 != n.getUTCDate(); }], ["%B", function (n) { return n.getUTCMonth(); }], ["%Y", zt]]);
    ec.year = ga.year.utc, ga.scale.utc = function () { return ro(ao.scale.linear(), ec, rc); }, ao.text = An(function (n) { return n.responseText; }), ao.json = function (n, t) { return Cn(n, "application/json", uo, t); }, ao.html = function (n, t) { return Cn(n, "text/html", oo, t); }, ao.xml = An(function (n) { return n.responseXML; }), "function" == typeof define && define.amd ? (this.d3 = ao, define(ao)) : "object" == typeof module && module.exports ? module.exports = ao : this.d3 = ao;
}();
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C;
            (function (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C) {
                /**
                 * Singleton reference of ColorPalette.
                 *
                 * @instance
                 */
                var colorManager;
                /**
                 * Factory method for creating a ColorPalette.
                 *
                 * @function
                 * @param {IColorInfo[]} colors - Array of ColorInfo objects that contain
                 *                                hex values for colors.
                 */
                function createColorPalette(colors) {
                    if (!colorManager)
                        colorManager = new ColorPalette(colors);
                    return colorManager;
                }
                PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.createColorPalette = createColorPalette;
                var ColorPalette = (function () {
                    function ColorPalette(colors) {
                        this.colorPalette = {};
                        this.colorIndex = 0;
                        this.colors = colors;
                    }
                    /**
                     * Gets color from colorPalette and returns an IColorInfo
                     *
                     * @function
                     * @param {string} key - Key of assign color in colorPalette.
                     */
                    ColorPalette.prototype.getColor = function (key) {
                        var color = this.colorPalette[key];
                        if (color) {
                            return color;
                        }
                        var colors = this.colors;
                        color = this.colorPalette[key] = colors[this.colorIndex++];
                        if (this.colorIndex >= colors.length) {
                            this.colorIndex = 0;
                        }
                        return color;
                    };
                    /**
                     * resets colorIndex to 0
                     *
                     * @function
                     */
                    ColorPalette.prototype.reset = function () {
                        this.colorIndex = 0;
                        return this;
                    };
                    /**
                     * Clears colorPalette of cached keys and colors
                     *
                     * @function
                     */
                    ColorPalette.prototype.clear = function () {
                        this.colorPalette = {};
                    };
                    return ColorPalette;
                }());
            })(PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C || (visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C;
            (function (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C) {
                /**
                 * Gets property value for a particular object.
                 *
                 * @function
                 * @param {DataViewObjects} objects - Map of defined objects.
                 * @param {string} objectName       - Name of desired object.
                 * @param {string} propertyName     - Name of desired property.
                 * @param {T} defaultValue          - Default value of desired property.
                 */
                function getValue(objects, objectName, propertyName, defaultValue) {
                    if (objects) {
                        var object = objects[objectName];
                        if (object) {
                            var property = object[propertyName];
                            if (property !== undefined) {
                                return property;
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.getValue = getValue;
                /**
                 * Gets property value for a particular object in a category.
                 *
                 * @function
                 * @param {DataViewCategoryColumn} category - List of category objects.
                 * @param {number} index                    - Index of category object.
                 * @param {string} objectName               - Name of desired object.
                 * @param {string} propertyName             - Name of desired property.
                 * @param {T} defaultValue                  - Default value of desired property.
                 */
                function getCategoricalObjectValue(category, index, objectName, propertyName, defaultValue) {
                    var categoryObjects = category.objects;
                    if (categoryObjects) {
                        var categoryObject = categoryObjects[index];
                        if (categoryObject) {
                            var object = categoryObject[objectName];
                            if (object) {
                                var property = object[propertyName];
                                if (property !== undefined) {
                                    return property;
                                }
                            }
                        }
                    }
                    return defaultValue;
                }
                PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.getCategoricalObjectValue = getCategoricalObjectValue;
            })(PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C || (visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C;
            (function (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C) {
                var TextUtility;
                (function (TextUtility) {
                    var canvasCtx;
                    var ellipsis = '...';
                    function ensureCanvas() {
                        if (canvasCtx)
                            return;
                        var canvas = document.createElement('canvas');
                        canvasCtx = canvas.getContext("2d");
                    }
                    /**
                     * Measures text width at a high speed using a canvas element
                     * @param textProperties The text properties (including text content) to use for text measurement.
                     */
                    function measureTextWidth(textProperties) {
                        ensureCanvas();
                        canvasCtx.font =
                            (textProperties.fontStyle || "") + " " +
                                (textProperties.fontVariant || "") + " " +
                                (textProperties.fontWeight || "") + " " +
                                textProperties.fontSize + " " +
                                (textProperties.fontFamily);
                        return canvasCtx.measureText(textProperties.text).width;
                    }
                    TextUtility.measureTextWidth = measureTextWidth;
                    TextUtility.measureTextWidth = measureTextWidth;
                    /**
                     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
                     * @param textProperties The text properties (including text content) to use for text measurement.
                     * @param maxWidth The maximum width available for rendering the text.
                     */
                    function getTailoredTextOrDefault(textProperties, maxWidth) {
                        ensureCanvas();
                        var strLength = textProperties.text.length;
                        if (strLength === 0)
                            return textProperties.text;
                        var width = measureTextWidth(textProperties);
                        if (width < maxWidth)
                            return textProperties.text;
                        // Create a copy of the textProperties so we don't modify the one that's passed in.
                        var copiedTextProperties = Object.create(textProperties);
                        // Take the properties and apply them to svgTextElement
                        // Then, do the binary search to figure out the substring we want
                        // Set the substring on textElement argument
                        var text = copiedTextProperties.text = ellipsis + copiedTextProperties.text;
                        var min = 1;
                        var max = text.length;
                        var i = ellipsis.length;
                        while (min <= max) {
                            // num | 0 prefered to Math.floor(num) for performance benefits
                            i = (min + max) / 2 | 0;
                            copiedTextProperties.text = text.substr(0, i);
                            width = measureTextWidth(copiedTextProperties);
                            if (maxWidth > width)
                                min = i + 1;
                            else if (maxWidth < width)
                                max = i - 1;
                            else
                                break;
                        }
                        // Since the search algorithm almost never finds an exact match,
                        // it will pick one of the closest two, which could result in a
                        // value bigger with than 'maxWidth' thus we need to go back by 
                        // one to guarantee a smaller width than 'maxWidth'.
                        copiedTextProperties.text = text.substr(0, i);
                        width = measureTextWidth(copiedTextProperties);
                        if (width > maxWidth)
                            i--;
                        return text.substr(ellipsis.length, i - ellipsis.length) + ellipsis;
                    }
                    TextUtility.getTailoredTextOrDefault = getTailoredTextOrDefault;
                    function truncateAxis(text, width) {
                        text.each(function () {
                            var text = d3.select(this), truncatedText = TextUtility.getTailoredTextOrDefault({ text: text.text(), fontFamily: 'sans-serif', fontSize: '11px' }, width);
                            text.text(truncatedText);
                        });
                    }
                    TextUtility.truncateAxis = truncateAxis;
                    function wrapAxis(text, width, textProperties, notEnclose) {
                        text.each(function () {
                            var text = d3.select(this), title = text.text(), words = title.split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.1, // ems
                            y = parseFloat(text.attr("y")) || 0, x = parseFloat(text.attr("x")) || 0, dy = parseFloat(text.attr("dy")) || 0, tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
                            while (word = words.pop()) {
                                line.push(word);
                                tspan.text(line.join(" "));
                                var node = tspan.node();
                                if (node.getComputedTextLength() > width) {
                                    line.pop();
                                    if (notEnclose)
                                        tspan.text(line.join(" "));
                                    else
                                        tspan.text(TextUtility.getTailoredTextOrDefault({ text: line.join(" "), fontFamily: (textProperties ? textProperties.fontFamily : 'sans-serif'), fontSize: (textProperties ? textProperties.fontSize : '11px') }, width));
                                    line = [word];
                                    tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em");
                                    if (notEnclose)
                                        tspan.text(word);
                                    else
                                        tspan.text(TextUtility.getTailoredTextOrDefault({ text: word, fontFamily: (textProperties ? textProperties.fontFamily : 'sans-serif'), fontSize: (textProperties ? textProperties.fontSize : '11px') }, width));
                                }
                            }
                            text.append("title").text(title);
                        });
                    }
                    TextUtility.wrapAxis = wrapAxis;
                })(TextUtility = PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.TextUtility || (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.TextUtility = {}));
                var PixelConverter;
                (function (PixelConverter) {
                    var PxPtRatio = 4 / 3;
                    var PixelString = 'px';
                    /**
                     * Appends 'px' to the end of number value for use as pixel string in styles
                     */
                    function toString(px) {
                        return px + PixelString;
                    }
                    PixelConverter.toString = toString;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a string for font-size property
                     * e.g. fromPoint(8) => '24px'
                     */
                    function fromPoint(pt) {
                        return toString(fromPointToPixel(pt));
                    }
                    PixelConverter.fromPoint = fromPoint;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a number for font-size property
                     * e.g. fromPoint(8) => 24px
                     */
                    function fromPointToPixel(pt) {
                        return (PxPtRatio * pt);
                    }
                    PixelConverter.fromPointToPixel = fromPointToPixel;
                    /**
                     * Converts pixel value (px) to pt
                     * e.g. toPoint(24) => 8
                     */
                    function toPoint(px) {
                        return px / PxPtRatio;
                    }
                    PixelConverter.toPoint = toPoint;
                })(PixelConverter = PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.PixelConverter || (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.PixelConverter = {}));
            })(PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C || (visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 * OKViz Utilities
 * v1.2.0
*/
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual_1) {
            var PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C;
            (function (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C) {
                var OKVizUtility;
                (function (OKVizUtility) {
                    var Formatter = (function () {
                        function Formatter() {
                            this._cachedFormatters = {};
                            Globalize = window.Globalize;
                            if (Formatter._instance) {
                                console.log("Error: use Formatter.getInstance() instead of new.");
                                return;
                            }
                            Formatter._instance = this;
                        }
                        Formatter.getInstance = function () {
                            return Formatter._instance;
                        };
                        Formatter.getFormatter = function (properties) {
                            var singleton = Formatter._instance;
                            var key = JSON.stringify(properties);
                            var pbiFormatter;
                            if (key in singleton._cachedFormatters) {
                                pbiFormatter = singleton._cachedFormatters[key];
                            }
                            else {
                                pbiFormatter = powerbi.visuals.valueFormatter.create(properties);
                                singleton._cachedFormatters[key] = pbiFormatter;
                            }
                            return pbiFormatter;
                        };
                        Formatter.format = function (value, properties) {
                            var formatter = Formatter.getFormatter(properties);
                            return formatter.format(value);
                        };
                        Formatter.getAxisDatesFormatter = function (dateFrom, dateTo) {
                            var dateDiff = dateFrom;
                            if (dateTo) {
                                if (dateFrom > dateTo) {
                                    var tmpDate = dateFrom;
                                    dateFrom = dateTo;
                                    dateTo = tmpDate;
                                }
                                dateDiff = (dateTo - dateFrom);
                            }
                            var seconds = dateDiff / 1000;
                            var minutes = seconds / 60;
                            var hours = minutes / 60;
                            var days = hours / 24;
                            var months = days / 31;
                            var years = days / 365;
                            var format = '%x';
                            if (Math.floor(years) > 0) {
                                format = '%Y';
                            }
                            else if (Math.floor(months) > 1) {
                                format = '%b %Y';
                            }
                            else if (Math.floor(days) > 0) {
                                format = '%b %e';
                            }
                            else if (Math.floor(hours) > 6) {
                                format = '%I:00 %p';
                            }
                            else if (Math.floor(minutes) > 0) {
                                format = '%I:%M %p';
                            }
                            return d3.time.format(format);
                        };
                        Formatter._instance = new Formatter();
                        return Formatter;
                    }());
                    OKVizUtility.Formatter = Formatter;
                    //Need capability:  "t": { "properties": { "u": { "type": { "text": true } } } }
                    function t(visual, element, options, host, features) {
                        if (!options || !options.dataViews || !options.dataViews[0] || !options.dataViews[0].metadata || !options.dataViews[0].metadata.objects)
                            return;
                        if (options.type !== powerbi.VisualUpdateType.Data && options.type !== powerbi.VisualUpdateType.ViewMode && options.type !== powerbi.VisualUpdateType.All)
                            return;
                        var persistU = false;
                        var u = PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.getValue(options.dataViews[0].metadata.objects, "t", "u", null);
                        if (!u) {
                            u = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                                return v.toString(16);
                            });
                            persistU = true;
                        }
                        var lang = navigator.language || navigator.userLanguage;
                        var cli = (window.location ? (window.location.host == 'app.powerbi.com' ? 'app.powerbi.com' : 'localhost') : '');
                        var cd = '';
                        if (features) {
                            for (var key in features)
                                cd += '&' + key + '=' + features[key];
                        }
                        var url = 'https://www.google-analytics.com/collect?v=1&t=screenview&tid=UA-7095697-25&cid=' + u + '&an=' + visual[0] + '&av=' + visual[1] + '&ul=' + lang + '&cd=' + cli + cd;
                        var sc = '';
                        var el = (element instanceof d3.selection ? element : d3.select(element instanceof jQuery ? element[0] : element));
                        var t = el.select('img.okty');
                        if (t.empty()) {
                            t = el.append('img')
                                .classed('okty', true)
                                .style({ 'width': 0, 'height': 0, 'position': 'absolute', 'visibility': 'hidden' });
                            sc = '&sc=start';
                        }
                        t.attr('src', url + sc + '&nocache=' + new Date().getTime());
                        if (persistU) {
                            host.persistProperties({
                                merge: [{
                                        objectName: 't',
                                        selector: null,
                                        properties: { 'u': u },
                                    }]
                            });
                        }
                    }
                    OKVizUtility.t = t;
                    function normalizeHex(hex) {
                        if (hex.substring(0, 1) !== "#")
                            hex = '#' + hex;
                        if (hex.length == 4)
                            hex += hex.substr(1, 3);
                        return hex;
                    }
                    OKVizUtility.normalizeHex = normalizeHex;
                    function hexToRGB(hex) {
                        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizeHex(hex));
                        return result ? {
                            r: parseInt(result[1], 16),
                            g: parseInt(result[2], 16),
                            b: parseInt(result[3], 16)
                        } : hex;
                    }
                    OKVizUtility.hexToRGB = hexToRGB;
                    function RGBToHex(rgb) {
                        return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
                    }
                    OKVizUtility.RGBToHex = RGBToHex;
                    function saturateColor(hex, percent, baseColor) {
                        if (baseColor) {
                            //Pretty saturation
                            var RGB = hexToRGB(hex);
                            var baseRGB = hexToRGB(baseColor);
                            var returnRGB = {
                                r: Math.round(baseRGB.r + ((RGB.r - baseRGB.r) * percent)),
                                g: Math.round(baseRGB.g + ((RGB.g - baseRGB.g) * percent)),
                                b: Math.round(baseRGB.b + ((RGB.b - baseRGB.b) * percent))
                            };
                            return RGBToHex(returnRGB);
                        }
                        else {
                            //Real saturation
                            var HSL = HexToHSL(hex);
                            HSL.s *= percent;
                            return HSLToHex(HSL);
                        }
                    }
                    OKVizUtility.saturateColor = saturateColor;
                    function HexToHSL(hex) {
                        var rgb = hexToRGB(hex);
                        var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min, l = (max + min) / 2, h = 0, s = 0;
                        if (delta == 0)
                            h = 0;
                        else if (max == r)
                            h = 60 * (((g - b) / delta) % 6);
                        else if (max == g)
                            h = 60 * (((b - r) / delta) + 2);
                        else
                            h = 60 * (((r - g) / delta) + 4);
                        if (delta == 0)
                            s = 0;
                        else
                            s = (delta / (1 - Math.abs(2 * l - 1)));
                        return {
                            h: h,
                            s: s,
                            l: l
                        };
                    }
                    OKVizUtility.HexToHSL = HexToHSL;
                    function HSLToHex(hsl) {
                        var h = hsl.h, s = hsl.s, l = hsl.l, c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r, g, b;
                        if (h < 60) {
                            r = c;
                            g = x;
                            b = 0;
                        }
                        else if (h < 120) {
                            r = x;
                            g = c;
                            b = 0;
                        }
                        else if (h < 180) {
                            r = 0;
                            g = c;
                            b = x;
                        }
                        else if (h < 240) {
                            r = 0;
                            g = x;
                            b = c;
                        }
                        else if (h < 300) {
                            r = x;
                            g = 0;
                            b = c;
                        }
                        else {
                            r = c;
                            g = 0;
                            b = x;
                        }
                        var normalizeRGB = function (color, m) {
                            color = Math.floor((color + m) * 255);
                            if (color < 0)
                                color = 0;
                            return color;
                        };
                        return RGBToHex({
                            r: normalizeRGB(r, m),
                            g: normalizeRGB(g, m),
                            b: normalizeRGB(b, m)
                        });
                    }
                    OKVizUtility.HSLToHex = HSLToHex;
                    function autoTextColor(backColor, normalColor, invertedColor) {
                        var rgbColor = hexToRGB(backColor);
                        var o = Math.round(((rgbColor.r * 299) + (rgbColor.g * 587) + (rgbColor.b * 114)) / 1000);
                        return (o > 125 ? (normalColor ? normalColor : shadeBlend(-0.6, normalizeHex(backColor), null)) : (invertedColor ? invertedColor : '#ffffff'));
                    }
                    OKVizUtility.autoTextColor = autoTextColor;
                    //http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors - Version 2 Universal
                    function shadeBlend(p, c0, c1) {
                        var n = p < 0 ? p * -1 : p, u = Math.round, w = parseInt;
                        if (c0.length > 7) {
                            var f = c0.split(","), t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","), R = w(f[0].slice(4)), G = w(f[1]), B = w(f[2]);
                            return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")";
                        }
                        else {
                            var f1 = w(c0.slice(1), 16), t1 = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16), R1 = f1 >> 16, G1 = f1 >> 8 & 0x00FF, B1 = f1 & 0x0000FF;
                            return "#" + (0x1000000 + (u(((t1 >> 16) - R1) * n) + R1) * 0x10000 + (u(((t1 >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t1 & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1);
                        }
                    }
                    OKVizUtility.shadeBlend = shadeBlend;
                    //Beta
                    function getTextSize(text, fontSize, rotation) {
                        var $element = $("<text />")
                            .text(text)
                            .css({
                            "font-size": fontSize + "px",
                            "font-family": "sans-serif"
                        });
                        if (rotation > 0)
                            $element.css("transform", "rotate(" + rotation + ")");
                        var bbox = $element[0].getBoundingClientRect();
                        return { width: bbox.width, height: bbox.height };
                    }
                    OKVizUtility.getTextSize = getTextSize;
                    function isValidURL(URL) {
                        if (typeof URL === 'undefined' || !URL)
                            return false;
                        if (URL.length > 2083)
                            return false;
                        if (String(URL).substr(0, 4).toLowerCase() !== 'http')
                            return false; //This solve regex problems with binary strings
                        var pattern = new RegExp('^(https?:\\/\\/)?' +
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +
                            '((\\d{1,3}\\.){3}\\d{1,3}))' +
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
                            '(\\?[;&a-z\\d%_.~+=-]*)?' +
                            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                        return pattern.test(URL);
                    }
                    OKVizUtility.isValidURL = isValidURL;
                    function makeMeasureReadable(value) {
                        if (value === undefined) {
                            return '(Blank)';
                        }
                        else if (Object.prototype.toString.call(value) === '[object Date]') {
                            var dateFormat = d3.time.format('%b %e, %Y'); //%x
                            return dateFormat(value);
                        }
                        else if (isValidURL(value)) {
                            return makeURLReadable(value);
                        }
                        else {
                            return String(value).substr(0, 256);
                        }
                    }
                    OKVizUtility.makeMeasureReadable = makeMeasureReadable;
                    ;
                    function makeURLReadable(URL) {
                        var returnName = URL;
                        if (returnName) {
                            var parts = String(returnName).split(/[\\/.]/).slice(-2, -1);
                            if (parts.length > 0)
                                returnName = parts[0].replace('_', ' ').replace('-', ' ');
                        }
                        return returnName;
                    }
                    OKVizUtility.makeURLReadable = makeURLReadable;
                    //Simple order comparation - it is fast and works with visual properties that have always the same order
                    function objectsAreEqual(obj1, obj2) {
                        var a = JSON.stringify(obj1), b = JSON.stringify(obj2);
                        if (!a)
                            a = '';
                        if (!b)
                            b = '';
                        return (a.split('').sort().join('') == b.split('').sort().join(''));
                    }
                    OKVizUtility.objectsAreEqual = objectsAreEqual;
                    //Get base palette for states using OKViz color scheme
                    function defaultPaletteForStates(length, comparison) {
                        var bestPosition = 5 + 1;
                        var grayScheme = ['#999', '#8f8f8f', '#858585', '#7a7a7a', '#707070', '#666', '#5c5c5c', '#525252', '#474747', '#3d3d3d', '#333'];
                        var redScheme = ['#fcb1af', '#fc9d9c', '#fc8b88', '#fc7775', '#fa6461', '#fd625e', '#fa3e3d', '#fa2c2d', '#ef131a', '#db1217', '#b40e12'];
                        var greenScheme = ['#99d5d7', '#7cc9cc', '#4cb7bd', '#5fbdc1', '#48adb2', '#399599', '#328285', '#307376', '#2a6567', '#245759', '#1e484a'];
                        var scheme = (comparison.indexOf('<') > -1 ? redScheme : (comparison == '=' ? grayScheme : greenScheme));
                        var colors = [];
                        if (length <= bestPosition) {
                            colors = scheme.slice(bestPosition - length, bestPosition);
                        }
                        else {
                            colors = scheme.slice(0, Math.min(length, scheme.length));
                            if (colors.length < length)
                                colors = colors.concat(Array.apply(null, Array(length - colors.length)).map(function () { return '#333'; }));
                        }
                        return colors;
                    }
                    OKVizUtility.defaultPaletteForStates = defaultPaletteForStates;
                    function severeAlert(element, title, message, height, top) {
                        d3.selectAll('.OKVizAlert').remove();
                        spinner();
                        if (element) {
                            var icon = '<svg width="31px" height="31px" viewBox="0 0 31 31"><g><path style= "fill:#212121" d="M15.5,0C6.9,0,0,6.9,0,15.5C0,24.1,6.9,31,15.5,31S31,24.1,31,15.5C31,6.9,24.1,0,15.5,0z M15.5,29C8,29,2,23,2,15.5S8,2,15.5,2S29,8,29,15.5S23,29,15.5,29z"/><path style= "fill:#212121" d="M22.1,9.2c-0.4-0.4-1-0.4-1.4,0l-5.2,5.2l-5.2-5.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.2,5.2 l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l5.2-5.2l5.2,5.2c0.2,0.2,0.4,0.3,0.7,0.3 s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-5.2-5.2l5.2-5.2C22.5,10.2,22.5,9.6,22.1,9.2z"/></g></svg>';
                            element.append('div')
                                .classed('OKVizAlert', true)
                                .style({
                                'position': 'absolute',
                                'left': '0',
                                'top': (top ? top + 'px' : '0'),
                                'z-index': '99999',
                                'display': 'table',
                                'height': (height ? height + 'px' : '100%'),
                                'width': '100%',
                                'background': '#f4f4f4'
                            })
                                .append('div')
                                .html(icon + "<br>" + title.toUpperCase() + "<br>" + message)
                                .style({
                                "display": "table-cell",
                                "font-family": "'Segoe UI'wf_segoe-ui_normal,helvetica,arial,sans-serif",
                                "font-size": "14px",
                                "color": "#212121",
                                "padding": "10px",
                                "text-align": "center",
                                "vertical-align": "middle"
                            });
                        }
                    }
                    OKVizUtility.severeAlert = severeAlert;
                    /*
                        Append the following CSS to your visual.less:
            
                        @-webkit-keyframes sk-scaleout {
                            0% { -webkit-transform: scale(0) }
                            100% { -webkit-transform: scale(1.0); opacity: 0; }
                        }
            
                        @keyframes sk-scaleout {
                            0% { -webkit-transform: scale(0); transform: scale(0); }
                            100% { -webkit-transform: scale(1.0); transform: scale(1.0); opacity: 0; }
                        }
                    */
                    function spinner(element) {
                        setTimeout(function () {
                            d3.selectAll('.OKVizSpinner').remove();
                            if (element) {
                                element.append('div')
                                    .classed('OKVizSpinner', true)
                                    .style({
                                    'position': 'absolute',
                                    'left': '50%',
                                    'top': '50%',
                                    'z-index': '99998',
                                    'width': '40px',
                                    'height': '40px',
                                    'margin-top': '-20px',
                                    'margin-left': '-20px',
                                    'background-color': '#333',
                                    'border-radius': '100%',
                                    '-webkit-animation': 'sk-scaleout 1.0s infinite ease-in-out',
                                    'animation': 'sk-scaleout 1.0s infinite ease-in-out'
                                })
                                    .append('div');
                            }
                        }, 1);
                    }
                    OKVizUtility.spinner = spinner;
                })(OKVizUtility = PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.OKVizUtility || (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.OKVizUtility = {}));
            })(PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = visual_1.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C || (visual_1.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Color Helper by OKViz
 *  v1.0.0
 *
 *  Copyright (c) SQLBI. OKViz is a trademark of SQLBI Corp.
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C;
            (function (PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C) {
                function defaultSettings() {
                    return {
                        dataPoint: {}
                    };
                }
                function visualTransform(options, host) {
                    //Get DataViews
                    var dataViews = options.dataViews;
                    var hasDataViews = (dataViews && dataViews[0]);
                    var hasCategoricalData = (hasDataViews && dataViews[0].categorical && dataViews[0].categorical.categories && dataViews[0].categorical.categories[0].source && dataViews[0].categorical.values);
                    var hasSettings = (hasDataViews && dataViews[0].metadata && dataViews[0].metadata.objects);
                    var dataMax = 0;
                    //var colorPalette: IColorPalette = createColorPalette(host.colors).reset();
                    //Get Settings
                    var settings = defaultSettings();
                    if (hasSettings) {
                        var objects = dataViews[0].metadata.objects;
                        settings = {
                            dataPoint: {}
                        };
                    }
                    //Get DataPoints
                    var dataPoints = [];
                    if (hasCategoricalData) {
                        var category = dataViews[0].categorical.categories[0];
                        var dataValue = dataViews[0].categorical.values[0];
                        for (var i = 0; i < Math.max(category.values.length, dataValue.values.length); i++) {
                            var defaultColor = {
                                solid: {
                                    color: host.colorPalette.getColor(category.values[i]).value
                                }
                            };
                            dataPoints.push({
                                category: category.values[i],
                                value: dataValue.values[i],
                                color: PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.getCategoricalObjectValue(category, i, 'dataPoint', 'fill', defaultColor).solid.color,
                                selectionId: host.createSelectionIdBuilder()
                                    .withCategory(category, i)
                                    .createSelectionId()
                            });
                        }
                        dataMax = dataValue.maxLocal;
                    }
                    return {
                        dataPoints: dataPoints,
                        dataMax: dataMax,
                        settings: settings,
                    };
                }
                var Visual = (function () {
                    function Visual(options) {
                        this.host = options.host;
                        this.selectionManager = options.host.createSelectionManager();
                        this.model = { dataPoints: [], dataMax: 0, settings: {} };
                        this.element = options.element;
                        var filter = $('<svg id="filter"><defs><filter id="normal"><feColorMatrix values="1 0 0 0 0				0 1 0 0 0				0 0 1 0 0				0 0 0 1 0"/></filter><filter id="protanopia" color-interpolation-filters="sRGB"><feColorMatrix values="0.152286 1.052583 -0.204868 0 0				0.114503 0.786281 0.099216 0 0				-0.003882 -0.048116 1.051998 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="protanomaly" color-interpolation-filters="sRGB"><feColorMatrix values="0.458064 0.679578 -0.137642 0 0				0.092785 0.846313 0.060902 0 0				-0.007494 -0.016807 1.024301 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="deuteranopia" color-interpolation-filters="sRGB"><feColorMatrix values="0.367322 0.860646 -0.227968 0 0				0.280085 0.672501 0.047413 0 0				-0.011820 0.042940 0.968881 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="deuteranomaly" color-interpolation-filters="sRGB"><feColorMatrix values="0.547494 0.607765 -0.155259 0 0				0.181692 0.781742 0.036566 0 0				-0.010410 0.027275 0.983136 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="tritanopia" color-interpolation-filters="sRGB"><feColorMatrix values="1.255528 -0.076749 -0.178779 0 0				-0.078411 0.930809 0.147602 0 0				0.004733 0.691367 0.303900 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="tritanomaly" color-interpolation-filters="sRGB"><feColorMatrix values="1.017277 0.027029 -0.044306 0 0				-0.006113 0.958479 0.047634 0 0				0.006379 0.248708 0.744913 0 0				0 0 0 1 0"/><feComponentTransfer><feFuncB type="gamma" exponent=".9"/><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="achromatopsia" color-interpolation-filters="sRGB"><feColorMatrix values="0.212656 0.715158 0.072186 0 0				0.212656 0.715158 0.072186 0 0				0.212656 0.715158 0.072186 0 0				0 0 0 1 0"/><feColorMatrix type="saturate" values="0" color-interpolation-filters="sRGB"/><feComponentTransfer><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/><feFuncB type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="achromatomaly" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0.5"/><feComponentTransfer><feFuncR type="gamma" exponent=".9"/><feFuncG type="gamma" exponent=".9"/><feFuncB type="gamma" exponent=".9"/></feComponentTransfer></filter><filter id="low-contrast" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope=".5" intercept=".25"/><feFuncG type="linear" slope=".5" intercept=".25"/><feFuncB type="linear" slope=".5" intercept=".25"/></feComponentTransfer></filter></defs></svg>');
                        filter.appendTo(this.element);
                        var diseases = [
                            'Protanopia',
                            'Protanomaly',
                            'Deuteranopia',
                            'Deuteranomaly',
                            'Tritanopia',
                            'Tritanomaly',
                            'Achromatopsia',
                            'Achromatomaly'
                        ];
                        this.dropdown = $('<div />').addClass('dropdown').attr('drag-resize-disabled', 'true').appendTo(this.element);
                        var selectBox = $('<select />');
                        $('<option value="">Normal vision</option>').appendTo(selectBox);
                        for (var i = 0; i < diseases.length; i++) {
                            var disease = diseases[i];
                            $('<option value="' + i + '">' + diseases[i] + '</option>').appendTo(selectBox);
                        }
                        var self = this;
                        selectBox.on('change', function (e) {
                            e.preventDefault();
                            var urlWithFilterId = '';
                            var diseaseIndex = $(this).val();
                            if (diseaseIndex != '')
                                urlWithFilterId = 'url(#' + diseases[parseInt(diseaseIndex)].toLowerCase() + ')';
                            $('.arc').css({
                                'filter': urlWithFilterId,
                                '-webkit-filter': urlWithFilterId
                            });
                        });
                        selectBox.appendTo(this.dropdown);
                        this.svg = d3.select(this.element)
                            .append('svg')
                            .classed('chart', true);
                    }
                    Visual.prototype.update = function (options) {
                        this.model = visualTransform(options, this.host);
                        var width = options.viewport.width;
                        var height = options.viewport.height;
                        //Calculate radius
                        var hw = height / width;
                        var denom = 2 + (1 / (1 + Math.exp(-5 * (hw - 1))));
                        var radius = Math.min(height, width) / denom;
                        d3.selectAll('g').remove();
                        var svg = this.svg
                            .attr({
                            width: width,
                            height: height
                        })
                            .append("g")
                            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
                        var color = d3.scale.ordinal()
                            .range(this.model.dataPoints.map(function (d) { return d.color; }));
                        var arc = d3.svg.arc()
                            .outerRadius(radius * 0.8)
                            .innerRadius(radius * 0.45);
                        var outerArc = d3.svg.arc()
                            .outerRadius(radius * 0.8)
                            .innerRadius(radius * 0.9);
                        var pie = d3.layout.pie()
                            .sort(null)
                            .value(function (d) { return d.value; });
                        var g = svg.selectAll(".arc")
                            .data(pie(this.model.dataPoints))
                            .enter().append("g")
                            .attr("class", "arc");
                        var polyline = g.append("polyline");
                        polyline.transition().duration(0)
                            .attrTween("points", function (d) {
                            this._current = this._current || d;
                            var interpolate = d3.interpolate(this._current, d);
                            this._current = interpolate(0);
                            return function (t) {
                                var d2 = interpolate(t);
                                var pos = outerArc.centroid(d2);
                                pos[0] = radius * 0.85 * (midAngle(d2) < Math.PI ? 1 : -1);
                                return [arc.centroid(d2), outerArc.centroid(d2), pos];
                            };
                        });
                        g.append("path")
                            .attr("d", arc)
                            .style("fill", function (d) { return d.data.color; });
                        var text = g.append("text")
                            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                            .attr("dy", ".35em")
                            .style({
                            "font-size": "11px",
                            "fill": "#777",
                            "font-family": "wf_standard-font,helvetica,arial,sans-serif"
                        })
                            .text(function (d) { return d.data.category; });
                        function midAngle(d) {
                            return d.startAngle + (d.endAngle - d.startAngle) / 2;
                        }
                        text.transition().duration(0)
                            .attrTween("transform", function (d) {
                            this._current = this._current || d;
                            var interpolate = d3.interpolate(this._current, d);
                            this._current = interpolate(0);
                            return function (t) {
                                var d2 = interpolate(t);
                                var pos = outerArc.centroid(d2);
                                pos[0] = radius * 0.9 * (midAngle(d2) < Math.PI ? 1 : -1);
                                return "translate(" + pos + ")";
                            };
                        })
                            .styleTween("text-anchor", function (d) {
                            this._current = this._current || d;
                            var interpolate = d3.interpolate(this._current, d);
                            this._current = interpolate(0);
                            return function (t) {
                                var d2 = interpolate(t);
                                return midAngle(d2) < Math.PI ? "start" : "end";
                            };
                        });
                        $('select', this.dropdown).trigger('change');
                        PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.OKVizUtility.t(['Color Helper', '1.0.0'], this.element, options, this.host);
                    };
                    Visual.prototype.destroy = function () {
                        //TODO: Perform any cleanup tasks here
                    };
                    Visual.prototype.enumerateObjectInstances = function (options) {
                        var objectName = options.objectName;
                        var objectEnumeration = [];
                        switch (objectName) {
                            case 'dataPoint':
                                for (var _i = 0, _a = this.model.dataPoints; _i < _a.length; _i++) {
                                    var dataPoint = _a[_i];
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        displayName: dataPoint.category,
                                        properties: {
                                            fill: {
                                                solid: {
                                                    color: dataPoint.color
                                                }
                                            }
                                        },
                                        selector: dataPoint.selectionId.getSelector()
                                    });
                                }
                                break;
                        }
                        ;
                        return objectEnumeration;
                    };
                    return Visual;
                }());
                PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.Visual = Visual;
            })(PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C || (visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C = {
                name: 'PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C',
                displayName: 'Color Helper by OKViz',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '1.3.0',
                create: function (options) { return new powerbi.extensibility.visual.PBI_CV_38DEEC6A_D7BC_4935_B2D6_FFAD07818B7C.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map