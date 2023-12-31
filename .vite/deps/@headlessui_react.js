import {
  require_react_dom
} from "./chunk-RVSLBP3T.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-computed.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t14, e6, n5) => e6 in t14 ? i(t14, e6, { enumerable: true, configurable: true, writable: true, value: n5 }) : t14[e6] = n5;
var r = (t14, e6, n5) => (d(t14, typeof e6 != "symbol" ? e6 + "" : e6, n5), n5);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e6) {
    this.current !== e6 && (this.handoffState = "pending", this.currentId = 0, this.current = e6);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e6, f12) => {
  s.isServer ? (0, import_react.useEffect)(e6, f12) : (0, import_react.useLayoutEffect)(e6, f12);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e6) {
  let r11 = (0, import_react2.useRef)(e6);
  return l(() => {
    r11.current = e6;
  }, [e6]), r11;
}

// node_modules/@headlessui/react/dist/hooks/use-computed.js
function i2(e6, o11) {
  let [u8, t14] = (0, import_react3.useState)(e6), r11 = s2(e6);
  return l(() => t14(r11.current), [r11, t14, ...o11]), u8;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t3(e6) {
  typeof queueMicrotask == "function" ? queueMicrotask(e6) : Promise.resolve().then(e6).catch((o11) => setTimeout(() => {
    throw o11;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n5 = [], r11 = { addEventListener(e6, t14, s17, a11) {
    return e6.addEventListener(t14, s17, a11), r11.add(() => e6.removeEventListener(t14, s17, a11));
  }, requestAnimationFrame(...e6) {
    let t14 = requestAnimationFrame(...e6);
    return r11.add(() => cancelAnimationFrame(t14));
  }, nextFrame(...e6) {
    return r11.requestAnimationFrame(() => r11.requestAnimationFrame(...e6));
  }, setTimeout(...e6) {
    let t14 = setTimeout(...e6);
    return r11.add(() => clearTimeout(t14));
  }, microTask(...e6) {
    let t14 = { current: true };
    return t3(() => {
      t14.current && e6[0]();
    }), r11.add(() => {
      t14.current = false;
    });
  }, style(e6, t14, s17) {
    let a11 = e6.style.getPropertyValue(t14);
    return Object.assign(e6.style, { [t14]: s17 }), this.add(() => {
      Object.assign(e6.style, { [t14]: a11 });
    });
  }, group(e6) {
    let t14 = o2();
    return e6(t14), this.add(() => t14.dispose());
  }, add(e6) {
    return n5.push(e6), () => {
      let t14 = n5.indexOf(e6);
      if (t14 >= 0)
        for (let s17 of n5.splice(t14, 1))
          s17();
    };
  }, dispose() {
    for (let e6 of n5.splice(0))
      e6();
  } };
  return r11;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e6] = (0, import_react4.useState)(o2);
  return (0, import_react4.useEffect)(() => () => e6.dispose(), [e6]), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react5 = __toESM(require_react(), 1);
var o4 = function(t14) {
  let e6 = s2(t14);
  return import_react5.default.useCallback((...r11) => e6.current(...r11), [e6]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react6 = __toESM(require_react(), 1);
function l2() {
  let [e6, f12] = (0, import_react6.useState)(s.isHandoffComplete);
  return e6 && s.isHandoffComplete === false && f12(false), (0, import_react6.useEffect)(() => {
    e6 !== true && f12(true);
  }, [e6]), (0, import_react6.useEffect)(() => s.handoff(), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o6;
var I = (o6 = import_react7.default.useId) != null ? o6 : function() {
  let n5 = l2(), [e6, u8] = import_react7.default.useState(n5 ? () => s.nextId() : null);
  return l(() => {
    e6 === null && u8(s.nextId());
  }, [e6]), e6 != null ? "" + e6 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
function u(r11, n5, ...a11) {
  if (r11 in n5) {
    let e6 = n5[r11];
    return typeof e6 == "function" ? e6(...a11) : e6;
  }
  let t14 = new Error(`Tried to handle "${r11}" but there is no handler defined. Only defined handlers are: ${Object.keys(n5).map((e6) => `"${e6}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t14, u), t14;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function e(r11) {
  return s.isServer ? null : r11 instanceof Node ? r11.ownerDocument : r11 != null && r11.hasOwnProperty("current") && r11.current instanceof Node ? r11.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e6) => `${e6}:not([tabindex='-1'])`).join(",");
var L = ((r11) => (r11[r11.First = 1] = "First", r11[r11.Previous = 2] = "Previous", r11[r11.Next = 4] = "Next", r11[r11.Last = 8] = "Last", r11[r11.WrapAround = 16] = "WrapAround", r11[r11.NoScroll = 32] = "NoScroll", r11))(L || {});
var N = ((o11) => (o11[o11.Error = 0] = "Error", o11[o11.Overflow = 1] = "Overflow", o11[o11.Success = 2] = "Success", o11[o11.Underflow = 3] = "Underflow", o11))(N || {});
var T = ((n5) => (n5[n5.Previous = -1] = "Previous", n5[n5.Next = 1] = "Next", n5))(T || {});
function E(e6 = document.body) {
  return e6 == null ? [] : Array.from(e6.querySelectorAll(f)).sort((t14, n5) => Math.sign((t14.tabIndex || Number.MAX_SAFE_INTEGER) - (n5.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F = ((n5) => (n5[n5.Strict = 0] = "Strict", n5[n5.Loose = 1] = "Loose", n5))(F || {});
function h(e6, t14 = 0) {
  var n5;
  return e6 === ((n5 = e(e6)) == null ? void 0 : n5.body) ? false : u(t14, { [0]() {
    return e6.matches(f);
  }, [1]() {
    let l11 = e6;
    for (; l11 !== null; ) {
      if (l11.matches(f))
        return true;
      l11 = l11.parentElement;
    }
    return false;
  } });
}
function g(e6) {
  let t14 = e(e6);
  o2().nextFrame(() => {
    t14 && !h(t14.activeElement, 0) && S(e6);
  });
}
function S(e6) {
  e6 == null || e6.focus({ preventScroll: true });
}
var H = ["textarea", "input"].join(",");
function w(e6) {
  var t14, n5;
  return (n5 = (t14 = e6 == null ? void 0 : e6.matches) == null ? void 0 : t14.call(e6, H)) != null ? n5 : false;
}
function A(e6, t14 = (n5) => n5) {
  return e6.slice().sort((n5, l11) => {
    let o11 = t14(n5), i10 = t14(l11);
    if (o11 === null || i10 === null)
      return 0;
    let r11 = o11.compareDocumentPosition(i10);
    return r11 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r11 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v(e6, t14) {
  return I2(E(), t14, { relativeTo: e6 });
}
function I2(e6, t14, { sorted: n5 = true, relativeTo: l11 = null, skipElements: o11 = [] } = {}) {
  let i10 = Array.isArray(e6) ? e6.length > 0 ? e6[0].ownerDocument : document : e6.ownerDocument, r11 = Array.isArray(e6) ? n5 ? A(e6) : e6 : E(e6);
  o11.length > 0 && r11.length > 1 && (r11 = r11.filter((s17) => !o11.includes(s17))), l11 = l11 != null ? l11 : i10.activeElement;
  let d15 = (() => {
    if (t14 & 5)
      return 1;
    if (t14 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (t14 & 1)
      return 0;
    if (t14 & 2)
      return Math.max(0, r11.indexOf(l11)) - 1;
    if (t14 & 4)
      return Math.max(0, r11.indexOf(l11)) + 1;
    if (t14 & 8)
      return r11.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p9 = t14 & 32 ? { preventScroll: true } : {}, c10 = 0, a11 = r11.length, u8;
  do {
    if (c10 >= a11 || c10 + a11 <= 0)
      return 0;
    let s17 = x6 + c10;
    if (t14 & 16)
      s17 = (s17 + a11) % a11;
    else {
      if (s17 < 0)
        return 3;
      if (s17 >= a11)
        return 1;
    }
    u8 = r11[s17], u8 == null || u8.focus(p9), c10 += d15;
  } while (u8 !== i10.activeElement);
  return t14 & 6 && w(u8) && u8.select(), u8.hasAttribute("tabindex") || u8.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react8 = __toESM(require_react(), 1);
function d2(e6, r11, n5) {
  let o11 = s2(r11);
  (0, import_react8.useEffect)(() => {
    function t14(u8) {
      o11.current(u8);
    }
    return document.addEventListener(e6, t14, n5), () => document.removeEventListener(e6, t14, n5);
  }, [e6, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function L2(m11, E7, c10 = true) {
  let i10 = (0, import_react9.useRef)(false);
  (0, import_react9.useEffect)(() => {
    requestAnimationFrame(() => {
      i10.current = c10;
    });
  }, [c10]);
  function f12(e6, o11) {
    if (!i10.current || e6.defaultPrevented)
      return;
    let l11 = function r11(t14) {
      return typeof t14 == "function" ? r11(t14()) : Array.isArray(t14) || t14 instanceof Set ? t14 : [t14];
    }(m11), n5 = o11(e6);
    if (n5 !== null && n5.getRootNode().contains(n5)) {
      for (let r11 of l11) {
        if (r11 === null)
          continue;
        let t14 = r11 instanceof HTMLElement ? r11 : r11.current;
        if (t14 != null && t14.contains(n5) || e6.composed && e6.composedPath().includes(t14))
          return;
      }
      return !h(n5, F.Loose) && n5.tabIndex !== -1 && e6.preventDefault(), E7(e6, n5);
    }
  }
  let u8 = (0, import_react9.useRef)(null);
  d2("mousedown", (e6) => {
    var o11, l11;
    i10.current && (u8.current = ((l11 = (o11 = e6.composedPath) == null ? void 0 : o11.call(e6)) == null ? void 0 : l11[0]) || e6.target);
  }, true), d2("click", (e6) => {
    u8.current && (f12(e6, () => u8.current), u8.current = null);
  }, true), d2("blur", (e6) => f12(e6, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react10 = __toESM(require_react(), 1);
function i3(t14) {
  var n5;
  if (t14.type)
    return t14.type;
  let e6 = (n5 = t14.as) != null ? n5 : "button";
  if (typeof e6 == "string" && e6.toLowerCase() === "button")
    return "button";
}
function s6(t14, e6) {
  let [n5, u8] = (0, import_react10.useState)(() => i3(t14));
  return l(() => {
    u8(i3(t14));
  }, [t14.type, t14.as]), l(() => {
    n5 || e6.current && e6.current instanceof HTMLButtonElement && !e6.current.hasAttribute("type") && u8("button");
  }, [n5, e6]), n5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react11 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t14, n5 = true) {
  return Object.assign(t14, { [u2]: n5 });
}
function y(...t14) {
  let n5 = (0, import_react11.useRef)(t14);
  (0, import_react11.useEffect)(() => {
    n5.current = t14;
  }, [t14]);
  let c10 = o4((e6) => {
    for (let o11 of n5.current)
      o11 != null && (typeof o11 == "function" ? o11(e6) : o11.current = e6);
  });
  return t14.every((e6) => e6 == null || (e6 == null ? void 0 : e6[u2])) ? void 0 : c10;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react12 = __toESM(require_react(), 1);
function F2({ container: e6, accept: t14, walk: r11, enabled: c10 = true }) {
  let o11 = (0, import_react12.useRef)(t14), l11 = (0, import_react12.useRef)(r11);
  (0, import_react12.useEffect)(() => {
    o11.current = t14, l11.current = r11;
  }, [t14, r11]), l(() => {
    if (!e6 || !c10)
      return;
    let n5 = e(e6);
    if (!n5)
      return;
    let f12 = o11.current, p9 = l11.current, d15 = Object.assign((i10) => f12(i10), { acceptNode: f12 }), u8 = n5.createTreeWalker(e6, NodeFilter.SHOW_ELEMENT, d15, false);
    for (; u8.nextNode(); )
      p9(u8.currentNode);
  }, [e6, c10, o11, l11]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function f2(r11) {
  throw new Error("Unexpected object: " + r11);
}
var a2 = ((e6) => (e6[e6.First = 0] = "First", e6[e6.Previous = 1] = "Previous", e6[e6.Next = 2] = "Next", e6[e6.Last = 3] = "Last", e6[e6.Specific = 4] = "Specific", e6[e6.Nothing = 5] = "Nothing", e6))(a2 || {});
function x(r11, n5) {
  let t14 = n5.resolveItems();
  if (t14.length <= 0)
    return null;
  let l11 = n5.resolveActiveIndex(), s17 = l11 != null ? l11 : -1, d15 = (() => {
    switch (r11.focus) {
      case 0:
        return t14.findIndex((e6) => !n5.resolveDisabled(e6));
      case 1: {
        let e6 = t14.slice().reverse().findIndex((i10, c10, u8) => s17 !== -1 && u8.length - c10 - 1 >= s17 ? false : !n5.resolveDisabled(i10));
        return e6 === -1 ? e6 : t14.length - 1 - e6;
      }
      case 2:
        return t14.findIndex((e6, i10) => i10 <= s17 ? false : !n5.resolveDisabled(e6));
      case 3: {
        let e6 = t14.slice().reverse().findIndex((i10) => !n5.resolveDisabled(i10));
        return e6 === -1 ? e6 : t14.length - 1 - e6;
      }
      case 4:
        return t14.findIndex((e6) => n5.resolveId(e6) === r11.id);
      case 5:
        return null;
      default:
        f2(r11);
    }
  })();
  return d15 === -1 ? l11 : d15;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function e2(...n5) {
  return n5.filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var j = ((a11) => (a11[a11.None = 0] = "None", a11[a11.RenderStrategy = 1] = "RenderStrategy", a11[a11.Static = 2] = "Static", a11))(j || {});
var w2 = ((e6) => (e6[e6.Unmount = 0] = "Unmount", e6[e6.Hidden = 1] = "Hidden", e6))(w2 || {});
function D({ ourProps: r11, theirProps: t14, slot: e6, defaultTag: a11, features: s17, visible: n5 = true, name: l11 }) {
  let o11 = h2(t14, r11);
  if (n5)
    return m3(o11, e6, a11, l11);
  let f12 = s17 != null ? s17 : 0;
  if (f12 & 2) {
    let { static: i10 = false, ...u8 } = o11;
    if (i10)
      return m3(u8, e6, a11, l11);
  }
  if (f12 & 1) {
    let { unmount: i10 = true, ...u8 } = o11;
    return u(i10 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m3({ ...u8, hidden: true, style: { display: "none" } }, e6, a11, l11);
    } });
  }
  return m3(o11, e6, a11, l11);
}
function m3(r11, t14 = {}, e6, a11) {
  var y5;
  let { as: s17 = e6, children: n5, refName: l11 = "ref", ...o11 } = g2(r11, ["unmount", "static"]), f12 = r11.ref !== void 0 ? { [l11]: r11.ref } : {}, i10 = typeof n5 == "function" ? n5(t14) : n5;
  "className" in o11 && o11.className && typeof o11.className == "function" && (o11.className = o11.className(t14));
  let u8 = {};
  if (t14) {
    let d15 = false, c10 = [];
    for (let [p9, F9] of Object.entries(t14))
      typeof F9 == "boolean" && (d15 = true), F9 === true && c10.push(p9);
    d15 && (u8["data-headlessui-state"] = c10.join(" "));
  }
  if (s17 === import_react13.Fragment && Object.keys(P(o11)).length > 0) {
    if (!(0, import_react13.isValidElement)(i10) || Array.isArray(i10) && i10.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a11} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o11).map((p9) => `  - ${p9}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p9) => `  - ${p9}`).join(`
`)].join(`
`));
    let d15 = e2((y5 = i10.props) == null ? void 0 : y5.className, o11.className), c10 = d15 ? { className: d15 } : {};
    return (0, import_react13.cloneElement)(i10, Object.assign({}, h2(i10.props, P(g2(o11, ["ref"]))), u8, f12, O(i10.ref, f12.ref), c10));
  }
  return (0, import_react13.createElement)(s17, Object.assign({}, g2(o11, ["ref"]), s17 !== import_react13.Fragment && f12, s17 !== import_react13.Fragment && u8), i10);
}
function O(...r11) {
  return { ref: r11.every((t14) => t14 == null) ? void 0 : (t14) => {
    for (let e6 of r11)
      e6 != null && (typeof e6 == "function" ? e6(t14) : e6.current = t14);
  } };
}
function h2(...r11) {
  var a11;
  if (r11.length === 0)
    return {};
  if (r11.length === 1)
    return r11[0];
  let t14 = {}, e6 = {};
  for (let s17 of r11)
    for (let n5 in s17)
      n5.startsWith("on") && typeof s17[n5] == "function" ? ((a11 = e6[n5]) != null || (e6[n5] = []), e6[n5].push(s17[n5])) : t14[n5] = s17[n5];
  if (t14.disabled || t14["aria-disabled"])
    return Object.assign(t14, Object.fromEntries(Object.keys(e6).map((s17) => [s17, void 0])));
  for (let s17 in e6)
    Object.assign(t14, { [s17](n5, ...l11) {
      let o11 = e6[s17];
      for (let f12 of o11) {
        if ((n5 instanceof Event || (n5 == null ? void 0 : n5.nativeEvent) instanceof Event) && n5.defaultPrevented)
          return;
        f12(n5, ...l11);
      }
    } });
  return t14;
}
function L3(r11) {
  var t14;
  return Object.assign((0, import_react13.forwardRef)(r11), { displayName: (t14 = r11.displayName) != null ? t14 : r11.name });
}
function P(r11) {
  let t14 = Object.assign({}, r11);
  for (let e6 in t14)
    t14[e6] === void 0 && delete t14[e6];
  return t14;
}
function g2(r11, t14 = []) {
  let e6 = Object.assign({}, r11);
  for (let a11 of t14)
    a11 in e6 && delete e6[a11];
  return e6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n5) {
  let e6 = n5.parentElement, l11 = null;
  for (; e6 && !(e6 instanceof HTMLFieldSetElement); )
    e6 instanceof HTMLLegendElement && (l11 = e6), e6 = e6.parentElement;
  let t14 = (e6 == null ? void 0 : e6.getAttribute("disabled")) === "";
  return t14 && i5(l11) ? false : t14;
}
function i5(n5) {
  if (!n5)
    return false;
  let e6 = n5.previousElementSibling;
  for (; e6 !== null; ) {
    if (e6 instanceof HTMLLegendElement)
      return false;
    e6 = e6.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/utils/form.js
function e3(n5 = {}, r11 = null, t14 = []) {
  for (let [i10, o11] of Object.entries(n5))
    f3(t14, s7(r11, i10), o11);
  return t14;
}
function s7(n5, r11) {
  return n5 ? n5 + "[" + r11 + "]" : r11;
}
function f3(n5, r11, t14) {
  if (Array.isArray(t14))
    for (let [i10, o11] of t14.entries())
      f3(n5, s7(r11, i10.toString()), o11);
  else
    t14 instanceof Date ? n5.push([r11, t14.toISOString()]) : typeof t14 == "boolean" ? n5.push([r11, t14 ? "1" : "0"]) : typeof t14 == "string" ? n5.push([r11, t14]) : typeof t14 == "number" ? n5.push([r11, `${t14}`]) : t14 == null ? n5.push([r11, ""]) : e3(t14, r11, n5);
}
function p2(n5) {
  var t14;
  let r11 = (t14 = n5 == null ? void 0 : n5.form) != null ? t14 : n5.closest("form");
  if (r11) {
    for (let i10 of r11.elements)
      if (i10.tagName === "INPUT" && i10.type === "submit" || i10.tagName === "BUTTON" && i10.type === "submit" || i10.nodeName === "INPUT" && i10.type === "image") {
        i10.click();
        return;
      }
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a3 = "div";
var p3 = ((e6) => (e6[e6.None = 1] = "None", e6[e6.Focusable = 2] = "Focusable", e6[e6.Hidden = 4] = "Hidden", e6))(p3 || {});
function s8(t14, o11) {
  let { features: n5 = 1, ...e6 } = t14, d15 = { ref: o11, "aria-hidden": (n5 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n5 & 4) === 4 && (n5 & 2) !== 2 && { display: "none" } } };
  return D({ ourProps: d15, theirProps: e6, slot: {}, defaultTag: a3, name: "Hidden" });
}
var c2 = L3(s8);

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react14 = __toESM(require_react(), 1);
var n = (0, import_react14.createContext)(null);
n.displayName = "OpenClosedContext";
var d4 = ((e6) => (e6[e6.Open = 1] = "Open", e6[e6.Closed = 2] = "Closed", e6[e6.Closing = 4] = "Closing", e6[e6.Opening = 8] = "Opening", e6))(d4 || {});
function C() {
  return (0, import_react14.useContext)(n);
}
function c3({ value: o11, children: r11 }) {
  return import_react14.default.createElement(n.Provider, { value: o11 }, r11);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r11) => (r11.Space = " ", r11.Enter = "Enter", r11.Escape = "Escape", r11.Backspace = "Backspace", r11.Delete = "Delete", r11.ArrowLeft = "ArrowLeft", r11.ArrowUp = "ArrowUp", r11.ArrowRight = "ArrowRight", r11.ArrowDown = "ArrowDown", r11.Home = "Home", r11.End = "End", r11.PageUp = "PageUp", r11.PageDown = "PageDown", r11.Tab = "Tab", r11))(o8 || {});

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react15 = __toESM(require_react(), 1);
function T4(l11, r11, c10) {
  let [i10, s17] = (0, import_react15.useState)(c10), e6 = l11 !== void 0, t14 = (0, import_react15.useRef)(e6), u8 = (0, import_react15.useRef)(false), d15 = (0, import_react15.useRef)(false);
  return e6 && !t14.current && !u8.current ? (u8.current = true, t14.current = e6, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e6 && t14.current && !d15.current && (d15.current = true, t14.current = e6, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e6 ? l11 : i10, o4((n5) => (e6 || s17(n5), r11 == null ? void 0 : r11(n5)))];
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react16 = __toESM(require_react(), 1);
function m4(u8, t14) {
  let e6 = (0, import_react16.useRef)([]), r11 = o4(u8);
  (0, import_react16.useEffect)(() => {
    let o11 = [...e6.current];
    for (let [n5, a11] of t14.entries())
      if (e6.current[n5] !== a11) {
        let l11 = r11(t14, o11);
        return e6.current = t14, l11;
      }
  }, [r11, ...t14]);
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react17 = __toESM(require_react(), 1);
function t6(e6) {
  return [e6.screenX, e6.screenY];
}
function u3() {
  let e6 = (0, import_react17.useRef)([-1, -1]);
  return { wasMoved(r11) {
    let n5 = t6(r11);
    return e6.current[0] === n5[0] && e6.current[1] === n5[1] ? false : (e6.current = n5, true);
  }, update(r11) {
    e6.current = t6(r11);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t7() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i6() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n2() {
  return t7() || i6();
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var Be = ((e6) => (e6[e6.Open = 0] = "Open", e6[e6.Closed = 1] = "Closed", e6))(Be || {});
var ke = ((e6) => (e6[e6.Single = 0] = "Single", e6[e6.Multi = 1] = "Multi", e6))(ke || {});
var we = ((e6) => (e6[e6.Pointer = 0] = "Pointer", e6[e6.Other = 1] = "Other", e6))(we || {});
var Ue = ((n5) => (n5[n5.OpenCombobox = 0] = "OpenCombobox", n5[n5.CloseCombobox = 1] = "CloseCombobox", n5[n5.GoToOption = 2] = "GoToOption", n5[n5.RegisterOption = 3] = "RegisterOption", n5[n5.UnregisterOption = 4] = "UnregisterOption", n5[n5.RegisterLabel = 5] = "RegisterLabel", n5))(Ue || {});
function re(t14, l11 = (e6) => e6) {
  let e6 = t14.activeOptionIndex !== null ? t14.options[t14.activeOptionIndex] : null, r11 = A(l11(t14.options.slice()), (s17) => s17.dataRef.current.domRef.current), i10 = e6 ? r11.indexOf(e6) : null;
  return i10 === -1 && (i10 = null), { options: r11, activeOptionIndex: i10 };
}
var He = { [1](t14) {
  var l11;
  return (l11 = t14.dataRef.current) != null && l11.disabled || t14.comboboxState === 1 ? t14 : { ...t14, activeOptionIndex: null, comboboxState: 1 };
}, [0](t14) {
  var e6;
  if ((e6 = t14.dataRef.current) != null && e6.disabled || t14.comboboxState === 0)
    return t14;
  let l11 = t14.activeOptionIndex;
  if (t14.dataRef.current) {
    let { isSelected: r11 } = t14.dataRef.current, i10 = t14.options.findIndex((s17) => r11(s17.dataRef.current.value));
    i10 !== -1 && (l11 = i10);
  }
  return { ...t14, comboboxState: 0, activeOptionIndex: l11 };
}, [2](t14, l11) {
  var i10, s17, n5, d15;
  if ((i10 = t14.dataRef.current) != null && i10.disabled || (s17 = t14.dataRef.current) != null && s17.optionsRef.current && !((n5 = t14.dataRef.current) != null && n5.optionsPropsRef.current.static) && t14.comboboxState === 1)
    return t14;
  let e6 = re(t14);
  if (e6.activeOptionIndex === null) {
    let o11 = e6.options.findIndex((u8) => !u8.dataRef.current.disabled);
    o11 !== -1 && (e6.activeOptionIndex = o11);
  }
  let r11 = x(l11, { resolveItems: () => e6.options, resolveActiveIndex: () => e6.activeOptionIndex, resolveId: (o11) => o11.id, resolveDisabled: (o11) => o11.dataRef.current.disabled });
  return { ...t14, ...e6, activeOptionIndex: r11, activationTrigger: (d15 = l11.trigger) != null ? d15 : 1 };
}, [3]: (t14, l11) => {
  var s17, n5;
  let e6 = { id: l11.id, dataRef: l11.dataRef }, r11 = re(t14, (d15) => [...d15, e6]);
  t14.activeOptionIndex === null && (s17 = t14.dataRef.current) != null && s17.isSelected(l11.dataRef.current.value) && (r11.activeOptionIndex = r11.options.indexOf(e6));
  let i10 = { ...t14, ...r11, activationTrigger: 1 };
  return (n5 = t14.dataRef.current) != null && n5.__demoMode && t14.dataRef.current.value === void 0 && (i10.activeOptionIndex = 0), i10;
}, [4]: (t14, l11) => {
  let e6 = re(t14, (r11) => {
    let i10 = r11.findIndex((s17) => s17.id === l11.id);
    return i10 !== -1 && r11.splice(i10, 1), r11;
  });
  return { ...t14, ...e6, activationTrigger: 1 };
}, [5]: (t14, l11) => ({ ...t14, labelId: l11.id }) };
var ae = (0, import_react18.createContext)(null);
ae.displayName = "ComboboxActionsContext";
function $(t14) {
  let l11 = (0, import_react18.useContext)(ae);
  if (l11 === null) {
    let e6 = new Error(`<${t14} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, $), e6;
  }
  return l11;
}
var le = (0, import_react18.createContext)(null);
le.displayName = "ComboboxDataContext";
function H2(t14) {
  let l11 = (0, import_react18.useContext)(le);
  if (l11 === null) {
    let e6 = new Error(`<${t14} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e6, H2), e6;
  }
  return l11;
}
function Ne(t14, l11) {
  return u(l11.type, He, t14, l11);
}
var Ge = import_react18.Fragment;
function Xe(t14, l11) {
  let { value: e6, defaultValue: r11, onChange: i10, name: s17, by: n5 = (p9, T7) => p9 === T7, disabled: d15 = false, __demoMode: o11 = false, nullable: u8 = false, multiple: P7 = false, ...f12 } = t14, [O3 = P7 ? [] : void 0, m11] = T4(e6, i10, r11), [g6, c10] = (0, import_react18.useReducer)(Ne, { dataRef: (0, import_react18.createRef)(), comboboxState: o11 ? 0 : 1, options: [], activeOptionIndex: null, activationTrigger: 1, labelId: null }), C4 = (0, import_react18.useRef)(false), N5 = (0, import_react18.useRef)({ static: false, hold: false }), F9 = (0, import_react18.useRef)(null), _4 = (0, import_react18.useRef)(null), h10 = (0, import_react18.useRef)(null), B4 = (0, import_react18.useRef)(null), V7 = o4(typeof n5 == "string" ? (p9, T7) => {
    let v5 = n5;
    return (p9 == null ? void 0 : p9[v5]) === (T7 == null ? void 0 : T7[v5]);
  } : n5), G3 = (0, import_react18.useCallback)((p9) => u(b6.mode, { [1]: () => O3.some((T7) => V7(T7, p9)), [0]: () => V7(O3, p9) }), [O3]), b6 = (0, import_react18.useMemo)(() => ({ ...g6, optionsPropsRef: N5, labelRef: F9, inputRef: _4, buttonRef: h10, optionsRef: B4, value: O3, defaultValue: r11, disabled: d15, mode: P7 ? 1 : 0, get activeOptionIndex() {
    if (C4.current && g6.activeOptionIndex === null && g6.options.length > 0) {
      let p9 = g6.options.findIndex((T7) => !T7.dataRef.current.disabled);
      if (p9 !== -1)
        return p9;
    }
    return g6.activeOptionIndex;
  }, compare: V7, isSelected: G3, nullable: u8, __demoMode: o11 }), [O3, r11, d15, P7, u8, o11, g6]), L7 = (0, import_react18.useRef)(b6.activeOptionIndex !== null ? b6.options[b6.activeOptionIndex] : null);
  (0, import_react18.useEffect)(() => {
    let p9 = b6.activeOptionIndex !== null ? b6.options[b6.activeOptionIndex] : null;
    L7.current !== p9 && (L7.current = p9);
  }), l(() => {
    g6.dataRef.current = b6;
  }, [b6]), L2([b6.buttonRef, b6.inputRef, b6.optionsRef], () => oe4.closeCombobox(), b6.comboboxState === 0);
  let y5 = (0, import_react18.useMemo)(() => ({ open: b6.comboboxState === 0, disabled: d15, activeIndex: b6.activeOptionIndex, activeOption: b6.activeOptionIndex === null ? null : b6.options[b6.activeOptionIndex].dataRef.current.value, value: O3 }), [b6, d15, O3]), a11 = o4((p9) => {
    let T7 = b6.options.find((v5) => v5.id === p9);
    T7 && j5(T7.dataRef.current.value);
  }), I7 = o4(() => {
    if (b6.activeOptionIndex !== null) {
      let { dataRef: p9, id: T7 } = b6.options[b6.activeOptionIndex];
      j5(p9.current.value), oe4.goToOption(a2.Specific, T7);
    }
  }), S9 = o4(() => {
    c10({ type: 0 }), C4.current = true;
  }), X7 = o4(() => {
    c10({ type: 1 }), C4.current = false;
  }), q6 = o4((p9, T7, v5) => (C4.current = false, p9 === a2.Specific ? c10({ type: 2, focus: a2.Specific, id: T7, trigger: v5 }) : c10({ type: 2, focus: p9, trigger: v5 }))), Q6 = o4((p9, T7) => (c10({ type: 3, id: p9, dataRef: T7 }), () => {
    var v5;
    ((v5 = L7.current) == null ? void 0 : v5.id) === p9 && (C4.current = true), c10({ type: 4, id: p9 });
  })), Y7 = o4((p9) => (c10({ type: 5, id: p9 }), () => c10({ type: 5, id: null }))), j5 = o4((p9) => u(b6.mode, { [0]() {
    return m11 == null ? void 0 : m11(p9);
  }, [1]() {
    let T7 = b6.value.slice(), v5 = T7.findIndex((J5) => V7(J5, p9));
    return v5 === -1 ? T7.push(p9) : T7.splice(v5, 1), m11 == null ? void 0 : m11(T7);
  } })), oe4 = (0, import_react18.useMemo)(() => ({ onChange: j5, registerOption: Q6, registerLabel: Y7, goToOption: q6, closeCombobox: X7, openCombobox: S9, selectActiveOption: I7, selectOption: a11 }), []), ce4 = l11 === null ? {} : { ref: l11 }, Z6 = (0, import_react18.useRef)(null), Te4 = p();
  return (0, import_react18.useEffect)(() => {
    Z6.current && r11 !== void 0 && Te4.addEventListener(Z6.current, "reset", () => {
      j5(r11);
    });
  }, [Z6, j5]), import_react18.default.createElement(ae.Provider, { value: oe4 }, import_react18.default.createElement(le.Provider, { value: b6 }, import_react18.default.createElement(c3, { value: u(b6.comboboxState, { [0]: d4.Open, [1]: d4.Closed }) }, s17 != null && O3 != null && e3({ [s17]: O3 }).map(([p9, T7], v5) => import_react18.default.createElement(c2, { features: p3.Hidden, ref: v5 === 0 ? (J5) => {
    var ie4;
    Z6.current = (ie4 = J5 == null ? void 0 : J5.closest("form")) != null ? ie4 : null;
  } : void 0, ...P({ key: p9, as: "input", type: "hidden", hidden: true, readOnly: true, name: p9, value: T7 }) })), D({ ourProps: ce4, theirProps: f12, slot: y5, defaultTag: Ge, name: "Combobox" }))));
}
var je = "input";
function Je(t14, l11) {
  var G3, b6, L7, y5;
  let e6 = I(), { id: r11 = `headlessui-combobox-input-${e6}`, onChange: i10, displayValue: s17, type: n5 = "text", ...d15 } = t14, o11 = H2("Combobox.Input"), u8 = $("Combobox.Input"), P7 = y(o11.inputRef, l11), f12 = (0, import_react18.useRef)(false), O3 = p(), m11 = function() {
    var a11;
    return typeof s17 == "function" && o11.value !== void 0 ? (a11 = s17(o11.value)) != null ? a11 : "" : typeof o11.value == "string" ? o11.value : "";
  }();
  m4(([a11, I7], [S9, X7]) => {
    f12.current || o11.inputRef.current && (X7 === 0 && I7 === 1 || a11 !== S9) && (o11.inputRef.current.value = a11);
  }, [m11, o11.comboboxState]), m4(([a11], [I7]) => {
    if (a11 === 0 && I7 === 1) {
      let S9 = o11.inputRef.current;
      if (!S9)
        return;
      let X7 = S9.value, { selectionStart: q6, selectionEnd: Q6, selectionDirection: Y7 } = S9;
      S9.value = "", S9.value = X7, Y7 !== null ? S9.setSelectionRange(q6, Q6, Y7) : S9.setSelectionRange(q6, Q6);
    }
  }, [o11.comboboxState]);
  let g6 = (0, import_react18.useRef)(false), c10 = o4(() => {
    g6.current = true;
  }), C4 = o4(() => {
    setTimeout(() => {
      g6.current = false;
    });
  }), N5 = o4((a11) => {
    switch (f12.current = true, a11.key) {
      case o8.Backspace:
      case o8.Delete:
        if (o11.mode !== 0 || !o11.nullable)
          return;
        let I7 = a11.currentTarget;
        O3.requestAnimationFrame(() => {
          I7.value === "" && (u8.onChange(null), o11.optionsRef.current && (o11.optionsRef.current.scrollTop = 0), u8.goToOption(a2.Nothing));
        });
        break;
      case o8.Enter:
        if (f12.current = false, o11.comboboxState !== 0 || g6.current)
          return;
        if (a11.preventDefault(), a11.stopPropagation(), o11.activeOptionIndex === null) {
          u8.closeCombobox();
          return;
        }
        u8.selectActiveOption(), o11.mode === 0 && u8.closeCombobox();
        break;
      case o8.ArrowDown:
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u(o11.comboboxState, { [0]: () => {
          u8.goToOption(a2.Next);
        }, [1]: () => {
          u8.openCombobox();
        } });
      case o8.ArrowUp:
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u(o11.comboboxState, { [0]: () => {
          u8.goToOption(a2.Previous);
        }, [1]: () => {
          u8.openCombobox(), O3.nextFrame(() => {
            o11.value || u8.goToOption(a2.Last);
          });
        } });
      case o8.Home:
        if (a11.shiftKey)
          break;
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.First);
      case o8.PageUp:
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.First);
      case o8.End:
        if (a11.shiftKey)
          break;
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.Last);
      case o8.PageDown:
        return f12.current = false, a11.preventDefault(), a11.stopPropagation(), u8.goToOption(a2.Last);
      case o8.Escape:
        return f12.current = false, o11.comboboxState !== 0 ? void 0 : (a11.preventDefault(), o11.optionsRef.current && !o11.optionsPropsRef.current.static && a11.stopPropagation(), u8.closeCombobox());
      case o8.Tab:
        if (f12.current = false, o11.comboboxState !== 0)
          return;
        o11.mode === 0 && u8.selectActiveOption(), u8.closeCombobox();
        break;
    }
  }), F9 = o4((a11) => {
    u8.openCombobox(), i10 == null || i10(a11);
  }), _4 = o4(() => {
    f12.current = false;
  }), h10 = i2(() => {
    if (o11.labelId)
      return [o11.labelId].join(" ");
  }, [o11.labelId]), B4 = (0, import_react18.useMemo)(() => ({ open: o11.comboboxState === 0, disabled: o11.disabled }), [o11]), V7 = { ref: P7, id: r11, role: "combobox", type: n5, "aria-controls": (G3 = o11.optionsRef.current) == null ? void 0 : G3.id, "aria-expanded": o11.disabled ? void 0 : o11.comboboxState === 0, "aria-activedescendant": o11.activeOptionIndex === null || (b6 = o11.options[o11.activeOptionIndex]) == null ? void 0 : b6.id, "aria-labelledby": h10, "aria-autocomplete": "list", defaultValue: (y5 = (L7 = t14.defaultValue) != null ? L7 : o11.defaultValue !== void 0 ? s17 == null ? void 0 : s17(o11.defaultValue) : null) != null ? y5 : o11.defaultValue, disabled: o11.disabled, onCompositionStart: c10, onCompositionEnd: C4, onKeyDown: N5, onChange: F9, onBlur: _4 };
  return D({ ourProps: V7, theirProps: d15, slot: B4, defaultTag: je, name: "Combobox.Input" });
}
var Ke = "button";
function We(t14, l11) {
  var g6;
  let e6 = H2("Combobox.Button"), r11 = $("Combobox.Button"), i10 = y(e6.buttonRef, l11), s17 = I(), { id: n5 = `headlessui-combobox-button-${s17}`, ...d15 } = t14, o11 = p(), u8 = o4((c10) => {
    switch (c10.key) {
      case o8.ArrowDown:
        return c10.preventDefault(), c10.stopPropagation(), e6.comboboxState === 1 && r11.openCombobox(), o11.nextFrame(() => {
          var C4;
          return (C4 = e6.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        });
      case o8.ArrowUp:
        return c10.preventDefault(), c10.stopPropagation(), e6.comboboxState === 1 && (r11.openCombobox(), o11.nextFrame(() => {
          e6.value || r11.goToOption(a2.Last);
        })), o11.nextFrame(() => {
          var C4;
          return (C4 = e6.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        });
      case o8.Escape:
        return e6.comboboxState !== 0 ? void 0 : (c10.preventDefault(), e6.optionsRef.current && !e6.optionsPropsRef.current.static && c10.stopPropagation(), r11.closeCombobox(), o11.nextFrame(() => {
          var C4;
          return (C4 = e6.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
        }));
      default:
        return;
    }
  }), P7 = o4((c10) => {
    if (r3(c10.currentTarget))
      return c10.preventDefault();
    e6.comboboxState === 0 ? r11.closeCombobox() : (c10.preventDefault(), r11.openCombobox()), o11.nextFrame(() => {
      var C4;
      return (C4 = e6.inputRef.current) == null ? void 0 : C4.focus({ preventScroll: true });
    });
  }), f12 = i2(() => {
    if (e6.labelId)
      return [e6.labelId, n5].join(" ");
  }, [e6.labelId, n5]), O3 = (0, import_react18.useMemo)(() => ({ open: e6.comboboxState === 0, disabled: e6.disabled, value: e6.value }), [e6]), m11 = { ref: i10, id: n5, type: s6(t14, e6.buttonRef), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (g6 = e6.optionsRef.current) == null ? void 0 : g6.id, "aria-expanded": e6.disabled ? void 0 : e6.comboboxState === 0, "aria-labelledby": f12, disabled: e6.disabled, onClick: P7, onKeyDown: u8 };
  return D({ ourProps: m11, theirProps: d15, slot: O3, defaultTag: Ke, name: "Combobox.Button" });
}
var $e = "label";
function qe(t14, l11) {
  let e6 = I(), { id: r11 = `headlessui-combobox-label-${e6}`, ...i10 } = t14, s17 = H2("Combobox.Label"), n5 = $("Combobox.Label"), d15 = y(s17.labelRef, l11);
  l(() => n5.registerLabel(r11), [r11]);
  let o11 = o4(() => {
    var f12;
    return (f12 = s17.inputRef.current) == null ? void 0 : f12.focus({ preventScroll: true });
  }), u8 = (0, import_react18.useMemo)(() => ({ open: s17.comboboxState === 0, disabled: s17.disabled }), [s17]);
  return D({ ourProps: { ref: d15, id: r11, onClick: o11 }, theirProps: i10, slot: u8, defaultTag: $e, name: "Combobox.Label" });
}
var Qe = "ul";
var Ye = j.RenderStrategy | j.Static;
function Ze(t14, l11) {
  let e6 = I(), { id: r11 = `headlessui-combobox-options-${e6}`, hold: i10 = false, ...s17 } = t14, n5 = H2("Combobox.Options"), d15 = y(n5.optionsRef, l11), o11 = C(), u8 = (() => o11 !== null ? (o11 & d4.Open) === d4.Open : n5.comboboxState === 0)();
  l(() => {
    var m11;
    n5.optionsPropsRef.current.static = (m11 = t14.static) != null ? m11 : false;
  }, [n5.optionsPropsRef, t14.static]), l(() => {
    n5.optionsPropsRef.current.hold = i10;
  }, [n5.optionsPropsRef, i10]), F2({ container: n5.optionsRef.current, enabled: n5.comboboxState === 0, accept(m11) {
    return m11.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : m11.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(m11) {
    m11.setAttribute("role", "none");
  } });
  let P7 = i2(() => {
    var m11, g6;
    return (g6 = n5.labelId) != null ? g6 : (m11 = n5.buttonRef.current) == null ? void 0 : m11.id;
  }, [n5.labelId, n5.buttonRef.current]), f12 = (0, import_react18.useMemo)(() => ({ open: n5.comboboxState === 0 }), [n5]), O3 = { "aria-labelledby": P7, role: "listbox", "aria-multiselectable": n5.mode === 1 ? true : void 0, id: r11, ref: d15 };
  return D({ ourProps: O3, theirProps: s17, slot: f12, defaultTag: Qe, features: Ye, visible: u8, name: "Combobox.Options" });
}
var ze = "li";
function eo(t14, l11) {
  var b6, L7;
  let e6 = I(), { id: r11 = `headlessui-combobox-option-${e6}`, disabled: i10 = false, value: s17, ...n5 } = t14, d15 = H2("Combobox.Option"), o11 = $("Combobox.Option"), u8 = d15.activeOptionIndex !== null ? d15.options[d15.activeOptionIndex].id === r11 : false, P7 = d15.isSelected(s17), f12 = (0, import_react18.useRef)(null), O3 = s2({ disabled: i10, value: s17, domRef: f12, textValue: (L7 = (b6 = f12.current) == null ? void 0 : b6.textContent) == null ? void 0 : L7.toLowerCase() }), m11 = y(l11, f12), g6 = o4(() => o11.selectOption(r11));
  l(() => o11.registerOption(r11, O3), [O3, r11]);
  let c10 = (0, import_react18.useRef)(!d15.__demoMode);
  l(() => {
    if (!d15.__demoMode)
      return;
    let y5 = o2();
    return y5.requestAnimationFrame(() => {
      c10.current = true;
    }), y5.dispose;
  }, []), l(() => {
    if (d15.comboboxState !== 0 || !u8 || !c10.current || d15.activationTrigger === 0)
      return;
    let y5 = o2();
    return y5.requestAnimationFrame(() => {
      var a11, I7;
      (I7 = (a11 = f12.current) == null ? void 0 : a11.scrollIntoView) == null || I7.call(a11, { block: "nearest" });
    }), y5.dispose;
  }, [f12, u8, d15.comboboxState, d15.activationTrigger, d15.activeOptionIndex]);
  let C4 = o4((y5) => {
    if (i10)
      return y5.preventDefault();
    g6(), d15.mode === 0 && o11.closeCombobox(), n2() || requestAnimationFrame(() => {
      var a11;
      return (a11 = d15.inputRef.current) == null ? void 0 : a11.focus();
    });
  }), N5 = o4(() => {
    if (i10)
      return o11.goToOption(a2.Nothing);
    o11.goToOption(a2.Specific, r11);
  }), F9 = u3(), _4 = o4((y5) => F9.update(y5)), h10 = o4((y5) => {
    F9.wasMoved(y5) && (i10 || u8 || o11.goToOption(a2.Specific, r11, 0));
  }), B4 = o4((y5) => {
    F9.wasMoved(y5) && (i10 || u8 && (d15.optionsPropsRef.current.hold || o11.goToOption(a2.Nothing)));
  }), V7 = (0, import_react18.useMemo)(() => ({ active: u8, selected: P7, disabled: i10 }), [u8, P7, i10]);
  return D({ ourProps: { id: r11, ref: m11, role: "option", tabIndex: i10 === true ? void 0 : -1, "aria-disabled": i10 === true ? true : void 0, "aria-selected": P7, disabled: void 0, onClick: C4, onFocus: N5, onPointerEnter: _4, onMouseEnter: _4, onPointerMove: h10, onMouseMove: h10, onPointerLeave: B4, onMouseLeave: B4 }, theirProps: n5, slot: V7, defaultTag: ze, name: "Combobox.Option" });
}
var oo = L3(Xe);
var to = L3(We);
var no = L3(Je);
var ro = L3(qe);
var ao = L3(Ze);
var lo = L3(eo);
var Ko = Object.assign(oo, { Input: no, Button: to, Label: ro, Options: ao, Option: lo });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react29 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react19 = __toESM(require_react(), 1);
function s10(e6, r11, n5) {
  let o11 = s2(r11);
  (0, import_react19.useEffect)(() => {
    function t14(i10) {
      o11.current(i10);
    }
    return window.addEventListener(e6, t14, n5), () => window.removeEventListener(e6, t14, n5);
  }, [e6, n5]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s11 = ((r11) => (r11[r11.Forwards = 0] = "Forwards", r11[r11.Backwards = 1] = "Backwards", r11))(s11 || {});
function n3() {
  let e6 = (0, import_react20.useRef)(0);
  return s10("keydown", (o11) => {
    o11.key === "Tab" && (e6.current = o11.shiftKey ? 1 : 0);
  }, true), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react21 = __toESM(require_react(), 1);
function f6() {
  let e6 = (0, import_react21.useRef)(false);
  return l(() => (e6.current = true, () => {
    e6.current = false;
  }), []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react22 = __toESM(require_react(), 1);
function n4(...e6) {
  return (0, import_react22.useMemo)(() => e(...e6), [...e6]);
}

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react23 = __toESM(require_react(), 1);
function E5(n5, e6, a11, t14) {
  let i10 = s2(a11);
  (0, import_react23.useEffect)(() => {
    n5 = n5 != null ? n5 : window;
    function r11(o11) {
      i10.current(o11);
    }
    return n5.addEventListener(e6, r11, t14), () => n5.removeEventListener(e6, r11, t14);
  }, [n5, e6, t14]);
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P2(t14) {
  if (!t14)
    return /* @__PURE__ */ new Set();
  if (typeof t14 == "function")
    return new Set(t14());
  let n5 = /* @__PURE__ */ new Set();
  for (let e6 of t14.current)
    e6.current instanceof HTMLElement && n5.add(e6.current);
  return n5;
}
var J = "div";
var h3 = ((r11) => (r11[r11.None = 1] = "None", r11[r11.InitialFocus = 2] = "InitialFocus", r11[r11.TabLock = 4] = "TabLock", r11[r11.FocusLock = 8] = "FocusLock", r11[r11.RestoreFocus = 16] = "RestoreFocus", r11[r11.All = 30] = "All", r11))(h3 || {});
function X(t14, n5) {
  let e6 = (0, import_react24.useRef)(null), o11 = y(e6, n5), { initialFocus: u8, containers: i10, features: r11 = 30, ...l11 } = t14;
  l2() || (r11 = 1);
  let m11 = n4(e6);
  Q({ ownerDocument: m11 }, Boolean(r11 & 16));
  let c10 = Y({ ownerDocument: m11, container: e6, initialFocus: u8 }, Boolean(r11 & 2));
  Z({ ownerDocument: m11, container: e6, containers: i10, previousActiveElement: c10 }, Boolean(r11 & 8));
  let v5 = n3(), R3 = o4((s17) => {
    let T7 = e6.current;
    if (!T7)
      return;
    ((B4) => B4())(() => {
      u(v5.current, { [s11.Forwards]: () => {
        I2(T7, L.First, { skipElements: [s17.relatedTarget] });
      }, [s11.Backwards]: () => {
        I2(T7, L.Last, { skipElements: [s17.relatedTarget] });
      } });
    });
  }), _4 = p(), H8 = (0, import_react24.useRef)(false), j5 = { ref: o11, onKeyDown(s17) {
    s17.key == "Tab" && (H8.current = true, _4.requestAnimationFrame(() => {
      H8.current = false;
    }));
  }, onBlur(s17) {
    let T7 = P2(i10);
    e6.current instanceof HTMLElement && T7.add(e6.current);
    let E7 = s17.relatedTarget;
    E7 instanceof HTMLElement && E7.dataset.headlessuiFocusGuard !== "true" && (S2(T7, E7) || (H8.current ? I2(e6.current, u(v5.current, { [s11.Forwards]: () => L.Next, [s11.Backwards]: () => L.Previous }) | L.WrapAround, { relativeTo: s17.target }) : s17.target instanceof HTMLElement && S(s17.target)));
  } };
  return import_react24.default.createElement(import_react24.default.Fragment, null, Boolean(r11 & 4) && import_react24.default.createElement(c2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }), D({ ourProps: j5, theirProps: l11, defaultTag: J, name: "FocusTrap" }), Boolean(r11 & 4) && import_react24.default.createElement(c2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: p3.Focusable }));
}
var z2 = L3(X);
var ye = Object.assign(z2, { features: h3 });
var a4 = [];
if (typeof window != "undefined" && typeof document != "undefined") {
  let t14 = function(n5) {
    n5.target instanceof HTMLElement && n5.target !== document.body && a4[0] !== n5.target && (a4.unshift(n5.target), a4 = a4.filter((e6) => e6 != null && e6.isConnected), a4.splice(10));
  };
  handle = t14;
  window.addEventListener("click", t14, { capture: true }), window.addEventListener("mousedown", t14, { capture: true }), window.addEventListener("focus", t14, { capture: true }), document.body.addEventListener("click", t14, { capture: true }), document.body.addEventListener("mousedown", t14, { capture: true }), document.body.addEventListener("focus", t14, { capture: true });
}
var handle;
function D3(t14 = true) {
  let n5 = (0, import_react24.useRef)(a4.slice());
  return m4(([e6], [o11]) => {
    o11 === true && e6 === false && t3(() => {
      n5.current.splice(0);
    }), o11 === false && e6 === true && (n5.current = a4.slice());
  }, [t14, a4, n5]), o4(() => {
    var e6;
    return (e6 = n5.current.find((o11) => o11 != null && o11.isConnected)) != null ? e6 : null;
  });
}
function Q({ ownerDocument: t14 }, n5) {
  let e6 = D3(n5);
  m4(() => {
    n5 || (t14 == null ? void 0 : t14.activeElement) === (t14 == null ? void 0 : t14.body) && S(e6());
  }, [n5]);
  let o11 = (0, import_react24.useRef)(false);
  (0, import_react24.useEffect)(() => (o11.current = false, () => {
    o11.current = true, t3(() => {
      o11.current && S(e6());
    });
  }), []);
}
function Y({ ownerDocument: t14, container: n5, initialFocus: e6 }, o11) {
  let u8 = (0, import_react24.useRef)(null), i10 = f6();
  return m4(() => {
    if (!o11)
      return;
    let r11 = n5.current;
    r11 && t3(() => {
      if (!i10.current)
        return;
      let l11 = t14 == null ? void 0 : t14.activeElement;
      if (e6 != null && e6.current) {
        if ((e6 == null ? void 0 : e6.current) === l11) {
          u8.current = l11;
          return;
        }
      } else if (r11.contains(l11)) {
        u8.current = l11;
        return;
      }
      e6 != null && e6.current ? S(e6.current) : I2(r11, L.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), u8.current = t14 == null ? void 0 : t14.activeElement;
    });
  }, [o11]), u8;
}
function Z({ ownerDocument: t14, container: n5, containers: e6, previousActiveElement: o11 }, u8) {
  let i10 = f6();
  E5(t14 == null ? void 0 : t14.defaultView, "focus", (r11) => {
    if (!u8 || !i10.current)
      return;
    let l11 = P2(e6);
    n5.current instanceof HTMLElement && l11.add(n5.current);
    let m11 = o11.current;
    if (!m11)
      return;
    let c10 = r11.target;
    c10 && c10 instanceof HTMLElement ? S2(l11, c10) ? (o11.current = c10, S(c10)) : (r11.preventDefault(), r11.stopPropagation(), S(m11)) : S(o11.current);
  }, true);
}
function S2(t14, n5) {
  for (let e6 of t14)
    if (e6.contains(n5))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react26 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react25 = __toESM(require_react(), 1);
var e4 = (0, import_react25.createContext)(false);
function l5() {
  return (0, import_react25.useContext)(e4);
}
function P3(o11) {
  return import_react25.default.createElement(e4.Provider, { value: o11.force }, o11.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function H3(u8) {
  let a11 = l5(), o11 = (0, import_react26.useContext)(c5), e6 = n4(u8), [l11, n5] = (0, import_react26.useState)(() => {
    if (!a11 && o11 !== null || s.isServer)
      return null;
    let t14 = e6 == null ? void 0 : e6.getElementById("headlessui-portal-root");
    if (t14)
      return t14;
    if (e6 === null)
      return null;
    let r11 = e6.createElement("div");
    return r11.setAttribute("id", "headlessui-portal-root"), e6.body.appendChild(r11);
  });
  return (0, import_react26.useEffect)(() => {
    l11 !== null && (e6 != null && e6.body.contains(l11) || e6 == null || e6.body.appendChild(l11));
  }, [l11, e6]), (0, import_react26.useEffect)(() => {
    a11 || o11 !== null && n5(o11.current);
  }, [o11, n5, a11]), l11;
}
var O2 = import_react26.Fragment;
function _(u8, a11) {
  let o11 = u8, e6 = (0, import_react26.useRef)(null), l11 = y(T2((p9) => {
    e6.current = p9;
  }), a11), n5 = n4(e6), t14 = H3(e6), [r11] = (0, import_react26.useState)(() => {
    var p9;
    return s.isServer ? null : (p9 = n5 == null ? void 0 : n5.createElement("div")) != null ? p9 : null;
  }), y5 = l2(), f12 = (0, import_react26.useRef)(false);
  return l(() => {
    if (f12.current = false, !(!t14 || !r11))
      return t14.contains(r11) || (r11.setAttribute("data-headlessui-portal", ""), t14.appendChild(r11)), () => {
        f12.current = true, t3(() => {
          var p9;
          f12.current && (!t14 || !r11 || (r11 instanceof Node && t14.contains(r11) && t14.removeChild(r11), t14.childNodes.length <= 0 && ((p9 = t14.parentElement) == null || p9.removeChild(t14))));
        });
      };
  }, [t14, r11]), y5 ? !t14 || !r11 ? null : (0, import_react_dom.createPortal)(D({ ourProps: { ref: l11 }, theirProps: o11, defaultTag: O2, name: "Portal" }), r11) : null;
}
var F3 = import_react26.Fragment;
var c5 = (0, import_react26.createContext)(null);
function U2(u8, a11) {
  let { target: o11, ...e6 } = u8, n5 = { ref: y(a11) };
  return import_react26.default.createElement(c5.Provider, { value: o11 }, D({ ourProps: n5, theirProps: e6, defaultTag: F3, name: "Popover.Group" }));
}
var S3 = L3(_);
var j2 = L3(U2);
var te = Object.assign(S3, { Group: j2 });

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react27 = __toESM(require_react(), 1);
var d8 = (0, import_react27.createContext)(null);
function f7() {
  let r11 = (0, import_react27.useContext)(d8);
  if (r11 === null) {
    let t14 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t14, f7), t14;
  }
  return r11;
}
function M() {
  let [r11, t14] = (0, import_react27.useState)([]);
  return [r11.length > 0 ? r11.join(" ") : void 0, (0, import_react27.useMemo)(() => function(e6) {
    let i10 = o4((s17) => (t14((o11) => [...o11, s17]), () => t14((o11) => {
      let p9 = o11.slice(), c10 = p9.indexOf(s17);
      return c10 !== -1 && p9.splice(c10, 1), p9;
    }))), n5 = (0, import_react27.useMemo)(() => ({ register: i10, slot: e6.slot, name: e6.name, props: e6.props }), [i10, e6.slot, e6.name, e6.props]);
    return import_react27.default.createElement(d8.Provider, { value: n5 }, e6.children);
  }, [t14])];
}
var S4 = "p";
function h4(r11, t14) {
  let a11 = I(), { id: e6 = `headlessui-description-${a11}`, ...i10 } = r11, n5 = f7(), s17 = y(t14);
  l(() => n5.register(e6), [e6, n5.register]);
  let o11 = { ref: s17, ...n5.props, id: e6 };
  return D({ ourProps: o11, theirProps: i10, slot: n5.slot || {}, defaultTag: S4, name: n5.name || "Description" });
}
var y2 = L3(h4);
var b2 = Object.assign(y2, {});

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react28 = __toESM(require_react(), 1);
var a5 = (0, import_react28.createContext)(() => {
});
a5.displayName = "StackContext";
var s13 = ((e6) => (e6[e6.Add = 0] = "Add", e6[e6.Remove = 1] = "Remove", e6))(s13 || {});
function x4() {
  return (0, import_react28.useContext)(a5);
}
function M2({ children: i10, onUpdate: r11, type: e6, element: n5, enabled: u8 }) {
  let l11 = x4(), o11 = o4((...t14) => {
    r11 == null || r11(...t14), l11(...t14);
  });
  return l(() => {
    let t14 = u8 === void 0 || u8 === true;
    return t14 && o11(0, e6, n5), () => {
      t14 && o11(1, e6, n5);
    };
  }, [o11, e6, n5, u8]), import_react28.default.createElement(a5.Provider, { value: o11 }, i10);
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l7 = __toESM(require_react(), 1);
function i8(e6, t14) {
  return e6 === t14 && (e6 !== 0 || 1 / e6 === 1 / t14) || e6 !== e6 && t14 !== t14;
}
var d10 = typeof Object.is == "function" ? Object.is : i8;
var { useState: u5, useEffect: h5, useLayoutEffect: f8, useDebugValue: p5 } = l7;
function y3(e6, t14, c10) {
  const a11 = t14(), [{ inst: n5 }, o11] = u5({ inst: { value: a11, getSnapshot: t14 } });
  return f8(() => {
    n5.value = a11, n5.getSnapshot = t14, r6(n5) && o11({ inst: n5 });
  }, [e6, a11, t14]), h5(() => (r6(n5) && o11({ inst: n5 }), e6(() => {
    r6(n5) && o11({ inst: n5 });
  })), [e6]), p5(a11), a11;
}
function r6(e6) {
  const t14 = e6.getSnapshot, c10 = e6.value;
  try {
    const a11 = t14();
    return !d10(c10, a11);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t11(r11, e6, n5) {
  return e6();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r7 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s14 = !r7;
var c7 = s14 ? t11 : y3;
var a6 = "useSyncExternalStore" in e5 ? ((n5) => n5.useSyncExternalStore)(e5) : c7;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S5(t14) {
  return a6(t14.subscribe, t14.getSnapshot, t14.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o11, r11) {
  let t14 = o11(), n5 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t14;
  }, subscribe(e6) {
    return n5.add(e6), () => n5.delete(e6);
  }, dispatch(e6, ...s17) {
    let i10 = r11[e6].call(t14, ...s17);
    i10 && (t14 = i10, n5.forEach((c10) => c10()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c8() {
  let o11;
  return { before({ doc: e6 }) {
    var l11;
    let n5 = e6.documentElement;
    o11 = ((l11 = e6.defaultView) != null ? l11 : window).innerWidth - n5.clientWidth;
  }, after({ doc: e6, d: n5 }) {
    let t14 = e6.documentElement, l11 = t14.clientWidth - t14.offsetWidth, r11 = o11 - l11;
    n5.style(t14, "paddingRight", `${r11}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function p6() {
  if (!t7())
    return {};
  let o11;
  return { before() {
    o11 = window.pageYOffset;
  }, after({ doc: r11, d: l11, meta: s17 }) {
    function i10(e6) {
      return s17.containers.flatMap((t14) => t14()).some((t14) => t14.contains(e6));
    }
    l11.style(r11.body, "marginTop", `-${o11}px`), window.scrollTo(0, 0);
    let n5 = null;
    l11.addEventListener(r11, "click", (e6) => {
      if (e6.target instanceof HTMLElement)
        try {
          let t14 = e6.target.closest("a");
          if (!t14)
            return;
          let { hash: c10 } = new URL(t14.href), a11 = r11.querySelector(c10);
          a11 && !i10(a11) && (n5 = a11);
        } catch {
        }
    }, true), l11.addEventListener(r11, "touchmove", (e6) => {
      e6.target instanceof HTMLElement && !i10(e6.target) && e6.preventDefault();
    }, { passive: false }), l11.add(() => {
      window.scrollTo(0, window.pageYOffset + o11), n5 && n5.isConnected && (n5.scrollIntoView({ block: "nearest" }), n5 = null);
    });
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l8() {
  return { before({ doc: e6, d: o11 }) {
    o11.style(e6.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m8(e6) {
  let n5 = {};
  for (let t14 of e6)
    Object.assign(n5, t14(n5));
  return n5;
}
var a8 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e6, n5) {
  var o11;
  let t14 = (o11 = this.get(e6)) != null ? o11 : { doc: e6, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t14.count++, t14.meta.add(n5), this.set(e6, t14), this;
}, POP(e6, n5) {
  let t14 = this.get(e6);
  return t14 && (t14.count--, t14.meta.delete(n5)), this;
}, SCROLL_PREVENT({ doc: e6, d: n5, meta: t14 }) {
  let o11 = { doc: e6, d: n5, meta: m8(t14) }, c10 = [p6(), c8(), l8()];
  c10.forEach(({ before: r11 }) => r11 == null ? void 0 : r11(o11)), c10.forEach(({ after: r11 }) => r11 == null ? void 0 : r11(o11));
}, SCROLL_ALLOW({ d: e6 }) {
  e6.dispose();
}, TEARDOWN({ doc: e6 }) {
  this.delete(e6);
} });
a8.subscribe(() => {
  let e6 = a8.getSnapshot(), n5 = /* @__PURE__ */ new Map();
  for (let [t14] of e6)
    n5.set(t14, t14.documentElement.style.overflow);
  for (let t14 of e6.values()) {
    let o11 = n5.get(t14.doc) === "hidden", c10 = t14.count !== 0;
    (c10 && !o11 || !c10 && o11) && a8.dispatch(t14.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t14), t14.count === 0 && a8.dispatch("TEARDOWN", t14);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p7(e6, r11, n5) {
  let f12 = S5(a8), o11 = e6 ? f12.get(e6) : void 0, i10 = o11 ? o11.count > 0 : false;
  return l(() => {
    if (!(!e6 || !r11))
      return a8.dispatch("PUSH", e6, n5), () => a8.dispatch("POP", e6, n5);
  }, [r11, e6]), i10;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u6 = /* @__PURE__ */ new Map();
var t12 = /* @__PURE__ */ new Map();
function h6(r11, l11 = true) {
  l(() => {
    var o11;
    if (!l11)
      return;
    let e6 = typeof r11 == "function" ? r11() : r11.current;
    if (!e6)
      return;
    function a11() {
      var d15;
      if (!e6)
        return;
      let i10 = (d15 = t12.get(e6)) != null ? d15 : 1;
      if (i10 === 1 ? t12.delete(e6) : t12.set(e6, i10 - 1), i10 !== 1)
        return;
      let n5 = u6.get(e6);
      n5 && (n5["aria-hidden"] === null ? e6.removeAttribute("aria-hidden") : e6.setAttribute("aria-hidden", n5["aria-hidden"]), e6.inert = n5.inert, u6.delete(e6));
    }
    let f12 = (o11 = t12.get(e6)) != null ? o11 : 0;
    return t12.set(e6, f12 + 1), f12 !== 0 || (u6.set(e6, { "aria-hidden": e6.getAttribute("aria-hidden"), inert: e6.inert }), e6.setAttribute("aria-hidden", "true"), e6.inert = true), a11;
  }, [r11, l11]);
}

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Se = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(Se || {});
var Fe = ((e6) => (e6[e6.SetTitleId = 0] = "SetTitleId", e6))(Fe || {});
var ke2 = { [0](t14, e6) {
  return t14.titleId === e6.id ? t14 : { ...t14, titleId: e6.id };
} };
var M3 = (0, import_react29.createContext)(null);
M3.displayName = "DialogContext";
function S6(t14) {
  let e6 = (0, import_react29.useContext)(M3);
  if (e6 === null) {
    let o11 = new Error(`<${t14} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, S6), o11;
  }
  return e6;
}
function xe2(t14, e6, o11 = () => [document.body]) {
  p7(t14, e6, (s17) => {
    var n5;
    return { containers: [...(n5 = s17.containers) != null ? n5 : [], o11] };
  });
}
function _e(t14, e6) {
  return u(e6.type, ke2, t14, e6);
}
var Me = "div";
var He2 = j.RenderStrategy | j.Static;
function Ie(t14, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-${o11}`, open: n5, onClose: l11, initialFocus: d15, __demoMode: c10 = false, ...D8 } = t14, [P7, F9] = (0, import_react29.useState)(0), i10 = C();
  n5 === void 0 && i10 !== null && (n5 = (i10 & d4.Open) === d4.Open);
  let m11 = (0, import_react29.useRef)(null), Q6 = y(m11, e6), y5 = (0, import_react29.useRef)(null), p9 = n4(m11), U5 = t14.hasOwnProperty("open") || i10 !== null, N5 = t14.hasOwnProperty("onClose");
  if (!U5 && !N5)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!U5)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!N5)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n5 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n5}`);
  if (typeof l11 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l11}`);
  let u8 = n5 ? 0 : 1, [E7, Z6] = (0, import_react29.useReducer)(_e, { titleId: null, descriptionId: null, panelRef: (0, import_react29.createRef)() }), A6 = o4(() => l11(false)), Y7 = o4((r11) => Z6({ type: 0, id: r11 })), k3 = l2() ? c10 ? false : u8 === 0 : false, x6 = P7 > 1, $6 = (0, import_react29.useContext)(M3) !== null, ee4 = x6 ? "parent" : "leaf", W = i10 !== null ? (i10 & d4.Closing) === d4.Closing : false, te4 = (() => $6 || W ? false : k3)(), oe4 = (0, import_react29.useCallback)(() => {
    var r11, f12;
    return (f12 = Array.from((r11 = p9 == null ? void 0 : p9.querySelectorAll("body > *")) != null ? r11 : []).find((a11) => a11.id === "headlessui-portal-root" ? false : a11.contains(y5.current) && a11 instanceof HTMLElement)) != null ? f12 : null;
  }, [y5]);
  h6(oe4, te4);
  let re5 = (() => x6 ? true : k3)(), ne6 = (0, import_react29.useCallback)(() => {
    var r11, f12;
    return (f12 = Array.from((r11 = p9 == null ? void 0 : p9.querySelectorAll("[data-headlessui-portal]")) != null ? r11 : []).find((a11) => a11.contains(y5.current) && a11 instanceof HTMLElement)) != null ? f12 : null;
  }, [y5]);
  h6(ne6, re5);
  let H8 = o4(() => {
    var f12, a11;
    return [...Array.from((f12 = p9 == null ? void 0 : p9.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? f12 : []).filter((T7) => !(T7 === document.body || T7 === document.head || !(T7 instanceof HTMLElement) || T7.contains(y5.current) || E7.panelRef.current && T7.contains(E7.panelRef.current))), (a11 = E7.panelRef.current) != null ? a11 : m11.current];
  }), le5 = (() => !(!k3 || x6))();
  L2(() => H8(), A6, le5);
  let ae3 = (() => !(x6 || u8 !== 0))();
  E5(p9 == null ? void 0 : p9.defaultView, "keydown", (r11) => {
    ae3 && (r11.defaultPrevented || r11.key === o8.Escape && (r11.preventDefault(), r11.stopPropagation(), A6()));
  });
  let ie4 = (() => !(W || u8 !== 0 || $6))();
  xe2(p9, ie4, H8), (0, import_react29.useEffect)(() => {
    if (u8 !== 0 || !m11.current)
      return;
    let r11 = new ResizeObserver((f12) => {
      for (let a11 of f12) {
        let T7 = a11.target.getBoundingClientRect();
        T7.x === 0 && T7.y === 0 && T7.width === 0 && T7.height === 0 && A6();
      }
    });
    return r11.observe(m11.current), () => r11.disconnect();
  }, [u8, m11, A6]);
  let [se5, pe4] = M(), de3 = (0, import_react29.useMemo)(() => [{ dialogState: u8, close: A6, setTitleId: Y7 }, E7], [u8, E7, A6, Y7]), J5 = (0, import_react29.useMemo)(() => ({ open: u8 === 0 }), [u8]), ue5 = { ref: Q6, id: s17, role: "dialog", "aria-modal": u8 === 0 ? true : void 0, "aria-labelledby": E7.titleId, "aria-describedby": se5 };
  return import_react29.default.createElement(M2, { type: "Dialog", enabled: u8 === 0, element: m11, onUpdate: o4((r11, f12) => {
    f12 === "Dialog" && u(r11, { [s13.Add]: () => F9((a11) => a11 + 1), [s13.Remove]: () => F9((a11) => a11 - 1) });
  }) }, import_react29.default.createElement(P3, { force: true }, import_react29.default.createElement(te, null, import_react29.default.createElement(M3.Provider, { value: de3 }, import_react29.default.createElement(te.Group, { target: m11 }, import_react29.default.createElement(P3, { force: false }, import_react29.default.createElement(pe4, { slot: J5, name: "Dialog.Description" }, import_react29.default.createElement(ye, { initialFocus: d15, containers: H8, features: k3 ? u(ee4, { parent: ye.features.RestoreFocus, leaf: ye.features.All & ~ye.features.FocusLock }) : ye.features.None }, D({ ourProps: ue5, theirProps: D8, slot: J5, defaultTag: Me, features: He2, visible: u8 === 0, name: "Dialog" })))))))), import_react29.default.createElement(c2, { features: p3.Hidden, ref: y5 }));
}
var we2 = "div";
function Be2(t14, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-overlay-${o11}`, ...n5 } = t14, [{ dialogState: l11, close: d15 }] = S6("Dialog.Overlay"), c10 = y(e6), D8 = o4((i10) => {
    if (i10.target === i10.currentTarget) {
      if (r3(i10.currentTarget))
        return i10.preventDefault();
      i10.preventDefault(), i10.stopPropagation(), d15();
    }
  }), P7 = (0, import_react29.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return D({ ourProps: { ref: c10, id: s17, "aria-hidden": true, onClick: D8 }, theirProps: n5, slot: P7, defaultTag: we2, name: "Dialog.Overlay" });
}
var Ge2 = "div";
function Ue2(t14, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-backdrop-${o11}`, ...n5 } = t14, [{ dialogState: l11 }, d15] = S6("Dialog.Backdrop"), c10 = y(e6);
  (0, import_react29.useEffect)(() => {
    if (d15.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [d15.panelRef]);
  let D8 = (0, import_react29.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return import_react29.default.createElement(P3, { force: true }, import_react29.default.createElement(te, null, D({ ourProps: { ref: c10, id: s17, "aria-hidden": true }, theirProps: n5, slot: D8, defaultTag: Ge2, name: "Dialog.Backdrop" })));
}
var Ne2 = "div";
function Ye2(t14, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-panel-${o11}`, ...n5 } = t14, [{ dialogState: l11 }, d15] = S6("Dialog.Panel"), c10 = y(e6, d15.panelRef), D8 = (0, import_react29.useMemo)(() => ({ open: l11 === 0 }), [l11]), P7 = o4((i10) => {
    i10.stopPropagation();
  });
  return D({ ourProps: { ref: c10, id: s17, onClick: P7 }, theirProps: n5, slot: D8, defaultTag: Ne2, name: "Dialog.Panel" });
}
var $e2 = "h2";
function We2(t14, e6) {
  let o11 = I(), { id: s17 = `headlessui-dialog-title-${o11}`, ...n5 } = t14, [{ dialogState: l11, setTitleId: d15 }] = S6("Dialog.Title"), c10 = y(e6);
  (0, import_react29.useEffect)(() => (d15(s17), () => d15(null)), [s17, d15]);
  let D8 = (0, import_react29.useMemo)(() => ({ open: l11 === 0 }), [l11]);
  return D({ ourProps: { ref: c10, id: s17 }, theirProps: n5, slot: D8, defaultTag: $e2, name: "Dialog.Title" });
}
var Je2 = L3(Ie);
var Xe2 = L3(Ue2);
var je2 = L3(Ye2);
var Ke2 = L3(Be2);
var Ve = L3(We2);
var St = Object.assign(Je2, { Backdrop: Xe2, Panel: je2, Overlay: Ke2, Title: Ve, Description: b2 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react31 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react30 = __toESM(require_react(), 1);
var t13;
var a9 = (t13 = import_react30.default.startTransition) != null ? t13 : function(i10) {
  i10();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(q || {});
var z3 = ((t14) => (t14[t14.ToggleDisclosure = 0] = "ToggleDisclosure", t14[t14.CloseDisclosure = 1] = "CloseDisclosure", t14[t14.SetButtonId = 2] = "SetButtonId", t14[t14.SetPanelId = 3] = "SetPanelId", t14[t14.LinkPanel = 4] = "LinkPanel", t14[t14.UnlinkPanel = 5] = "UnlinkPanel", t14))(z3 || {});
var Q2 = { [0]: (e6) => ({ ...e6, disclosureState: u(e6.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e6) => e6.disclosureState === 1 ? e6 : { ...e6, disclosureState: 1 }, [4](e6) {
  return e6.linkedPanel === true ? e6 : { ...e6, linkedPanel: true };
}, [5](e6) {
  return e6.linkedPanel === false ? e6 : { ...e6, linkedPanel: false };
}, [2](e6, n5) {
  return e6.buttonId === n5.buttonId ? e6 : { ...e6, buttonId: n5.buttonId };
}, [3](e6, n5) {
  return e6.panelId === n5.panelId ? e6 : { ...e6, panelId: n5.panelId };
} };
var k = (0, import_react31.createContext)(null);
k.displayName = "DisclosureContext";
function M4(e6) {
  let n5 = (0, import_react31.useContext)(k);
  if (n5 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, M4), o11;
  }
  return n5;
}
var v2 = (0, import_react31.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function w3(e6) {
  let n5 = (0, import_react31.useContext)(v2);
  if (n5 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, w3), o11;
  }
  return n5;
}
var H4 = (0, import_react31.createContext)(null);
H4.displayName = "DisclosurePanelContext";
function V() {
  return (0, import_react31.useContext)(H4);
}
function Y2(e6, n5) {
  return u(n5.type, Q2, e6, n5);
}
var Z2 = import_react31.Fragment;
function ee(e6, n5) {
  let { defaultOpen: o11 = false, ...u8 } = e6, T7 = (0, import_react31.useRef)(null), l11 = y(n5, T2((a11) => {
    T7.current = a11;
  }, e6.as === void 0 || e6.as === import_react31.Fragment)), t14 = (0, import_react31.useRef)(null), f12 = (0, import_react31.useRef)(null), s17 = (0, import_react31.useReducer)(Y2, { disclosureState: o11 ? 0 : 1, linkedPanel: false, buttonRef: f12, panelRef: t14, buttonId: null, panelId: null }), [{ disclosureState: i10, buttonId: c10 }, D8] = s17, d15 = o4((a11) => {
    D8({ type: 1 });
    let r11 = e(T7);
    if (!r11 || !c10)
      return;
    let p9 = (() => a11 ? a11 instanceof HTMLElement ? a11 : a11.current instanceof HTMLElement ? a11.current : r11.getElementById(c10) : r11.getElementById(c10))();
    p9 == null || p9.focus();
  }), P7 = (0, import_react31.useMemo)(() => ({ close: d15 }), [d15]), b6 = (0, import_react31.useMemo)(() => ({ open: i10 === 0, close: d15 }), [i10, d15]), y5 = { ref: l11 };
  return import_react31.default.createElement(k.Provider, { value: s17 }, import_react31.default.createElement(v2.Provider, { value: P7 }, import_react31.default.createElement(c3, { value: u(i10, { [0]: d4.Open, [1]: d4.Closed }) }, D({ ourProps: y5, theirProps: u8, slot: b6, defaultTag: Z2, name: "Disclosure" }))));
}
var te2 = "button";
function ne(e6, n5) {
  let o11 = I(), { id: u8 = `headlessui-disclosure-button-${o11}`, ...T7 } = e6, [l11, t14] = M4("Disclosure.Button"), f12 = V(), s17 = f12 === null ? false : f12 === l11.panelId, i10 = (0, import_react31.useRef)(null), c10 = y(i10, n5, s17 ? null : l11.buttonRef);
  (0, import_react31.useEffect)(() => {
    if (!s17)
      return t14({ type: 2, buttonId: u8 }), () => {
        t14({ type: 2, buttonId: null });
      };
  }, [u8, t14, s17]);
  let D8 = o4((r11) => {
    var p9;
    if (s17) {
      if (l11.disclosureState === 1)
        return;
      switch (r11.key) {
        case o8.Space:
        case o8.Enter:
          r11.preventDefault(), r11.stopPropagation(), t14({ type: 0 }), (p9 = l11.buttonRef.current) == null || p9.focus();
          break;
      }
    } else
      switch (r11.key) {
        case o8.Space:
        case o8.Enter:
          r11.preventDefault(), r11.stopPropagation(), t14({ type: 0 });
          break;
      }
  }), d15 = o4((r11) => {
    switch (r11.key) {
      case o8.Space:
        r11.preventDefault();
        break;
    }
  }), P7 = o4((r11) => {
    var p9;
    r3(r11.currentTarget) || e6.disabled || (s17 ? (t14({ type: 0 }), (p9 = l11.buttonRef.current) == null || p9.focus()) : t14({ type: 0 }));
  }), b6 = (0, import_react31.useMemo)(() => ({ open: l11.disclosureState === 0 }), [l11]), y5 = s6(e6, i10), a11 = s17 ? { ref: c10, type: y5, onKeyDown: D8, onClick: P7 } : { ref: c10, id: u8, type: y5, "aria-expanded": e6.disabled ? void 0 : l11.disclosureState === 0, "aria-controls": l11.linkedPanel ? l11.panelId : void 0, onKeyDown: D8, onKeyUp: d15, onClick: P7 };
  return D({ ourProps: a11, theirProps: T7, slot: b6, defaultTag: te2, name: "Disclosure.Button" });
}
var le2 = "div";
var oe = j.RenderStrategy | j.Static;
function re2(e6, n5) {
  let o11 = I(), { id: u8 = `headlessui-disclosure-panel-${o11}`, ...T7 } = e6, [l11, t14] = M4("Disclosure.Panel"), { close: f12 } = w3("Disclosure.Panel"), s17 = y(n5, l11.panelRef, (P7) => {
    a9(() => t14({ type: P7 ? 4 : 5 }));
  });
  (0, import_react31.useEffect)(() => (t14({ type: 3, panelId: u8 }), () => {
    t14({ type: 3, panelId: null });
  }), [u8, t14]);
  let i10 = C(), c10 = (() => i10 !== null ? (i10 & d4.Open) === d4.Open : l11.disclosureState === 0)(), D8 = (0, import_react31.useMemo)(() => ({ open: l11.disclosureState === 0, close: f12 }), [l11, f12]), d15 = { ref: s17, id: u8 };
  return import_react31.default.createElement(H4.Provider, { value: l11.panelId }, D({ ourProps: d15, theirProps: T7, slot: D8, defaultTag: le2, features: oe, visible: c10, name: "Disclosure.Panel" }));
}
var se2 = L3(ee);
var ue2 = L3(ne);
var ie = L3(re2);
var ve = Object.assign(se2, { Button: ue2, Panel: ie });

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react32 = __toESM(require_react(), 1);
var _e2 = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(_e2 || {});
var Ue3 = ((o11) => (o11[o11.Single = 0] = "Single", o11[o11.Multi = 1] = "Multi", o11))(Ue3 || {});
var Be3 = ((o11) => (o11[o11.Pointer = 0] = "Pointer", o11[o11.Other = 1] = "Other", o11))(Be3 || {});
var He3 = ((i10) => (i10[i10.OpenListbox = 0] = "OpenListbox", i10[i10.CloseListbox = 1] = "CloseListbox", i10[i10.GoToOption = 2] = "GoToOption", i10[i10.Search = 3] = "Search", i10[i10.ClearSearch = 4] = "ClearSearch", i10[i10.RegisterOption = 5] = "RegisterOption", i10[i10.UnregisterOption = 6] = "UnregisterOption", i10[i10.RegisterLabel = 7] = "RegisterLabel", i10))(He3 || {});
function $2(e6, r11 = (o11) => o11) {
  let o11 = e6.activeOptionIndex !== null ? e6.options[e6.activeOptionIndex] : null, n5 = A(r11(e6.options.slice()), (t14) => t14.dataRef.current.domRef.current), a11 = o11 ? n5.indexOf(o11) : null;
  return a11 === -1 && (a11 = null), { options: n5, activeOptionIndex: a11 };
}
var Ge3 = { [1](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 ? e6 : { ...e6, activeOptionIndex: null, listboxState: 1 };
}, [0](e6) {
  if (e6.dataRef.current.disabled || e6.listboxState === 0)
    return e6;
  let r11 = e6.activeOptionIndex, { isSelected: o11 } = e6.dataRef.current, n5 = e6.options.findIndex((a11) => o11(a11.dataRef.current.value));
  return n5 !== -1 && (r11 = n5), { ...e6, listboxState: 0, activeOptionIndex: r11 };
}, [2](e6, r11) {
  var a11;
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let o11 = $2(e6), n5 = x(r11, { resolveItems: () => o11.options, resolveActiveIndex: () => o11.activeOptionIndex, resolveId: (t14) => t14.id, resolveDisabled: (t14) => t14.dataRef.current.disabled });
  return { ...e6, ...o11, searchQuery: "", activeOptionIndex: n5, activationTrigger: (a11 = r11.trigger) != null ? a11 : 1 };
}, [3]: (e6, r11) => {
  if (e6.dataRef.current.disabled || e6.listboxState === 1)
    return e6;
  let n5 = e6.searchQuery !== "" ? 0 : 1, a11 = e6.searchQuery + r11.value.toLowerCase(), u8 = (e6.activeOptionIndex !== null ? e6.options.slice(e6.activeOptionIndex + n5).concat(e6.options.slice(0, e6.activeOptionIndex + n5)) : e6.options).find((i10) => {
    var b6;
    return !i10.dataRef.current.disabled && ((b6 = i10.dataRef.current.textValue) == null ? void 0 : b6.startsWith(a11));
  }), c10 = u8 ? e6.options.indexOf(u8) : -1;
  return c10 === -1 || c10 === e6.activeOptionIndex ? { ...e6, searchQuery: a11 } : { ...e6, searchQuery: a11, activeOptionIndex: c10, activationTrigger: 1 };
}, [4](e6) {
  return e6.dataRef.current.disabled || e6.listboxState === 1 || e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "" };
}, [5]: (e6, r11) => {
  let o11 = { id: r11.id, dataRef: r11.dataRef }, n5 = $2(e6, (a11) => [...a11, o11]);
  return e6.activeOptionIndex === null && e6.dataRef.current.isSelected(r11.dataRef.current.value) && (n5.activeOptionIndex = n5.options.indexOf(o11)), { ...e6, ...n5 };
}, [6]: (e6, r11) => {
  let o11 = $2(e6, (n5) => {
    let a11 = n5.findIndex((t14) => t14.id === r11.id);
    return a11 !== -1 && n5.splice(a11, 1), n5;
  });
  return { ...e6, ...o11, activationTrigger: 1 };
}, [7]: (e6, r11) => ({ ...e6, labelId: r11.id }) };
var z4 = (0, import_react32.createContext)(null);
z4.displayName = "ListboxActionsContext";
function U3(e6) {
  let r11 = (0, import_react32.useContext)(z4);
  if (r11 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, U3), o11;
  }
  return r11;
}
var J2 = (0, import_react32.createContext)(null);
J2.displayName = "ListboxDataContext";
function B(e6) {
  let r11 = (0, import_react32.useContext)(J2);
  if (r11 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, B), o11;
  }
  return r11;
}
function Ne3(e6, r11) {
  return u(r11.type, Ge3, e6, r11);
}
var je3 = import_react32.Fragment;
function Ve2(e6, r11) {
  let { value: o11, defaultValue: n5, name: a11, onChange: t14, by: u8 = (s17, f12) => s17 === f12, disabled: c10 = false, horizontal: i10 = false, multiple: b6 = false, ...A6 } = e6;
  const m11 = i10 ? "horizontal" : "vertical";
  let P7 = y(r11), [g6 = b6 ? [] : void 0, v5] = T4(o11, t14, n5), [S9, p9] = (0, import_react32.useReducer)(Ne3, { dataRef: (0, import_react32.createRef)(), listboxState: 1, options: [], searchQuery: "", labelId: null, activeOptionIndex: null, activationTrigger: 1 }), l11 = (0, import_react32.useRef)({ static: false, hold: false }), x6 = (0, import_react32.useRef)(null), E7 = (0, import_react32.useRef)(null), W = (0, import_react32.useRef)(null), C4 = o4(typeof u8 == "string" ? (s17, f12) => {
    let O3 = u8;
    return (s17 == null ? void 0 : s17[O3]) === (f12 == null ? void 0 : f12[O3]);
  } : u8), L7 = (0, import_react32.useCallback)((s17) => u(d15.mode, { [1]: () => g6.some((f12) => C4(f12, s17)), [0]: () => C4(g6, s17) }), [g6]), d15 = (0, import_react32.useMemo)(() => ({ ...S9, value: g6, disabled: c10, mode: b6 ? 1 : 0, orientation: m11, compare: C4, isSelected: L7, optionsPropsRef: l11, labelRef: x6, buttonRef: E7, optionsRef: W }), [g6, c10, b6, S9]);
  l(() => {
    S9.dataRef.current = d15;
  }, [d15]), L2([d15.buttonRef, d15.optionsRef], (s17, f12) => {
    var O3;
    p9({ type: 1 }), h(f12, F.Loose) || (s17.preventDefault(), (O3 = d15.buttonRef.current) == null || O3.focus());
  }, d15.listboxState === 0);
  let H8 = (0, import_react32.useMemo)(() => ({ open: d15.listboxState === 0, disabled: c10, value: g6 }), [d15, c10, g6]), ne6 = o4((s17) => {
    let f12 = d15.options.find((O3) => O3.id === s17);
    f12 && F9(f12.dataRef.current.value);
  }), ie4 = o4(() => {
    if (d15.activeOptionIndex !== null) {
      let { dataRef: s17, id: f12 } = d15.options[d15.activeOptionIndex];
      F9(s17.current.value), p9({ type: 2, focus: a2.Specific, id: f12 });
    }
  }), re5 = o4(() => p9({ type: 0 })), ae3 = o4(() => p9({ type: 1 })), le5 = o4((s17, f12, O3) => s17 === a2.Specific ? p9({ type: 2, focus: a2.Specific, id: f12, trigger: O3 }) : p9({ type: 2, focus: s17, trigger: O3 })), se5 = o4((s17, f12) => (p9({ type: 5, id: s17, dataRef: f12 }), () => p9({ type: 6, id: s17 }))), pe4 = o4((s17) => (p9({ type: 7, id: s17 }), () => p9({ type: 7, id: null }))), F9 = o4((s17) => u(d15.mode, { [0]() {
    return v5 == null ? void 0 : v5(s17);
  }, [1]() {
    let f12 = d15.value.slice(), O3 = f12.findIndex((M8) => C4(M8, s17));
    return O3 === -1 ? f12.push(s17) : f12.splice(O3, 1), v5 == null ? void 0 : v5(f12);
  } })), ue5 = o4((s17) => p9({ type: 3, value: s17 })), de3 = o4(() => p9({ type: 4 })), ce4 = (0, import_react32.useMemo)(() => ({ onChange: F9, registerOption: se5, registerLabel: pe4, goToOption: le5, closeListbox: ae3, openListbox: re5, selectActiveOption: ie4, selectOption: ne6, search: ue5, clearSearch: de3 }), []), fe4 = { ref: P7 }, G3 = (0, import_react32.useRef)(null), Te4 = p();
  return (0, import_react32.useEffect)(() => {
    G3.current && n5 !== void 0 && Te4.addEventListener(G3.current, "reset", () => {
      F9(n5);
    });
  }, [G3, F9]), import_react32.default.createElement(z4.Provider, { value: ce4 }, import_react32.default.createElement(J2.Provider, { value: d15 }, import_react32.default.createElement(c3, { value: u(d15.listboxState, { [0]: d4.Open, [1]: d4.Closed }) }, a11 != null && g6 != null && e3({ [a11]: g6 }).map(([s17, f12], O3) => import_react32.default.createElement(c2, { features: p3.Hidden, ref: O3 === 0 ? (M8) => {
    var q6;
    G3.current = (q6 = M8 == null ? void 0 : M8.closest("form")) != null ? q6 : null;
  } : void 0, ...P({ key: s17, as: "input", type: "hidden", hidden: true, readOnly: true, name: s17, value: f12 }) })), D({ ourProps: fe4, theirProps: A6, slot: H8, defaultTag: je3, name: "Listbox" }))));
}
var Ke3 = "button";
function Qe2(e6, r11) {
  var S9;
  let o11 = I(), { id: n5 = `headlessui-listbox-button-${o11}`, ...a11 } = e6, t14 = B("Listbox.Button"), u8 = U3("Listbox.Button"), c10 = y(t14.buttonRef, r11), i10 = p(), b6 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p9.preventDefault(), u8.openListbox(), i10.nextFrame(() => {
          t14.value || u8.goToOption(a2.First);
        });
        break;
      case o8.ArrowUp:
        p9.preventDefault(), u8.openListbox(), i10.nextFrame(() => {
          t14.value || u8.goToOption(a2.Last);
        });
        break;
    }
  }), A6 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
        p9.preventDefault();
        break;
    }
  }), m11 = o4((p9) => {
    if (r3(p9.currentTarget))
      return p9.preventDefault();
    t14.listboxState === 0 ? (u8.closeListbox(), i10.nextFrame(() => {
      var l11;
      return (l11 = t14.buttonRef.current) == null ? void 0 : l11.focus({ preventScroll: true });
    })) : (p9.preventDefault(), u8.openListbox());
  }), P7 = i2(() => {
    if (t14.labelId)
      return [t14.labelId, n5].join(" ");
  }, [t14.labelId, n5]), g6 = (0, import_react32.useMemo)(() => ({ open: t14.listboxState === 0, disabled: t14.disabled, value: t14.value }), [t14]), v5 = { ref: c10, id: n5, type: s6(e6, t14.buttonRef), "aria-haspopup": "listbox", "aria-controls": (S9 = t14.optionsRef.current) == null ? void 0 : S9.id, "aria-expanded": t14.disabled ? void 0 : t14.listboxState === 0, "aria-labelledby": P7, disabled: t14.disabled, onKeyDown: b6, onKeyUp: A6, onClick: m11 };
  return D({ ourProps: v5, theirProps: a11, slot: g6, defaultTag: Ke3, name: "Listbox.Button" });
}
var We3 = "label";
function Xe3(e6, r11) {
  let o11 = I(), { id: n5 = `headlessui-listbox-label-${o11}`, ...a11 } = e6, t14 = B("Listbox.Label"), u8 = U3("Listbox.Label"), c10 = y(t14.labelRef, r11);
  l(() => u8.registerLabel(n5), [n5]);
  let i10 = o4(() => {
    var m11;
    return (m11 = t14.buttonRef.current) == null ? void 0 : m11.focus({ preventScroll: true });
  }), b6 = (0, import_react32.useMemo)(() => ({ open: t14.listboxState === 0, disabled: t14.disabled }), [t14]);
  return D({ ourProps: { ref: c10, id: n5, onClick: i10 }, theirProps: a11, slot: b6, defaultTag: We3, name: "Listbox.Label" });
}
var $e3 = "ul";
var ze2 = j.RenderStrategy | j.Static;
function Je3(e6, r11) {
  var p9;
  let o11 = I(), { id: n5 = `headlessui-listbox-options-${o11}`, ...a11 } = e6, t14 = B("Listbox.Options"), u8 = U3("Listbox.Options"), c10 = y(t14.optionsRef, r11), i10 = p(), b6 = p(), A6 = C(), m11 = (() => A6 !== null ? (A6 & d4.Open) === d4.Open : t14.listboxState === 0)();
  (0, import_react32.useEffect)(() => {
    var x6;
    let l11 = t14.optionsRef.current;
    l11 && t14.listboxState === 0 && l11 !== ((x6 = e(l11)) == null ? void 0 : x6.activeElement) && l11.focus({ preventScroll: true });
  }, [t14.listboxState, t14.optionsRef]);
  let P7 = o4((l11) => {
    switch (b6.dispose(), l11.key) {
      case o8.Space:
        if (t14.searchQuery !== "")
          return l11.preventDefault(), l11.stopPropagation(), u8.search(l11.key);
      case o8.Enter:
        if (l11.preventDefault(), l11.stopPropagation(), t14.activeOptionIndex !== null) {
          let { dataRef: x6 } = t14.options[t14.activeOptionIndex];
          u8.onChange(x6.current.value);
        }
        t14.mode === 0 && (u8.closeListbox(), o2().nextFrame(() => {
          var x6;
          return (x6 = t14.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        }));
        break;
      case u(t14.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return l11.preventDefault(), l11.stopPropagation(), u8.goToOption(a2.Next);
      case u(t14.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return l11.preventDefault(), l11.stopPropagation(), u8.goToOption(a2.Previous);
      case o8.Home:
      case o8.PageUp:
        return l11.preventDefault(), l11.stopPropagation(), u8.goToOption(a2.First);
      case o8.End:
      case o8.PageDown:
        return l11.preventDefault(), l11.stopPropagation(), u8.goToOption(a2.Last);
      case o8.Escape:
        return l11.preventDefault(), l11.stopPropagation(), u8.closeListbox(), i10.nextFrame(() => {
          var x6;
          return (x6 = t14.buttonRef.current) == null ? void 0 : x6.focus({ preventScroll: true });
        });
      case o8.Tab:
        l11.preventDefault(), l11.stopPropagation();
        break;
      default:
        l11.key.length === 1 && (u8.search(l11.key), b6.setTimeout(() => u8.clearSearch(), 350));
        break;
    }
  }), g6 = i2(() => {
    var l11, x6, E7;
    return (E7 = (l11 = t14.labelRef.current) == null ? void 0 : l11.id) != null ? E7 : (x6 = t14.buttonRef.current) == null ? void 0 : x6.id;
  }, [t14.labelRef.current, t14.buttonRef.current]), v5 = (0, import_react32.useMemo)(() => ({ open: t14.listboxState === 0 }), [t14]), S9 = { "aria-activedescendant": t14.activeOptionIndex === null || (p9 = t14.options[t14.activeOptionIndex]) == null ? void 0 : p9.id, "aria-multiselectable": t14.mode === 1 ? true : void 0, "aria-labelledby": g6, "aria-orientation": t14.orientation, id: n5, onKeyDown: P7, role: "listbox", tabIndex: 0, ref: c10 };
  return D({ ourProps: S9, theirProps: a11, slot: v5, defaultTag: $e3, features: ze2, visible: m11, name: "Listbox.Options" });
}
var qe2 = "li";
function Ye3(e6, r11) {
  let o11 = I(), { id: n5 = `headlessui-listbox-option-${o11}`, disabled: a11 = false, value: t14, ...u8 } = e6, c10 = B("Listbox.Option"), i10 = U3("Listbox.Option"), b6 = c10.activeOptionIndex !== null ? c10.options[c10.activeOptionIndex].id === n5 : false, A6 = c10.isSelected(t14), m11 = (0, import_react32.useRef)(null), P7 = s2({ disabled: a11, value: t14, domRef: m11, get textValue() {
    var L7, d15;
    return (d15 = (L7 = m11.current) == null ? void 0 : L7.textContent) == null ? void 0 : d15.toLowerCase();
  } }), g6 = y(r11, m11);
  l(() => {
    if (c10.listboxState !== 0 || !b6 || c10.activationTrigger === 0)
      return;
    let L7 = o2();
    return L7.requestAnimationFrame(() => {
      var d15, H8;
      (H8 = (d15 = m11.current) == null ? void 0 : d15.scrollIntoView) == null || H8.call(d15, { block: "nearest" });
    }), L7.dispose;
  }, [m11, b6, c10.listboxState, c10.activationTrigger, c10.activeOptionIndex]), l(() => i10.registerOption(n5, P7), [P7, n5]);
  let v5 = o4((L7) => {
    if (a11)
      return L7.preventDefault();
    i10.onChange(t14), c10.mode === 0 && (i10.closeListbox(), o2().nextFrame(() => {
      var d15;
      return (d15 = c10.buttonRef.current) == null ? void 0 : d15.focus({ preventScroll: true });
    }));
  }), S9 = o4(() => {
    if (a11)
      return i10.goToOption(a2.Nothing);
    i10.goToOption(a2.Specific, n5);
  }), p9 = u3(), l11 = o4((L7) => p9.update(L7)), x6 = o4((L7) => {
    p9.wasMoved(L7) && (a11 || b6 || i10.goToOption(a2.Specific, n5, 0));
  }), E7 = o4((L7) => {
    p9.wasMoved(L7) && (a11 || b6 && i10.goToOption(a2.Nothing));
  }), W = (0, import_react32.useMemo)(() => ({ active: b6, selected: A6, disabled: a11 }), [b6, A6, a11]);
  return D({ ourProps: { id: n5, ref: g6, role: "option", tabIndex: a11 === true ? void 0 : -1, "aria-disabled": a11 === true ? true : void 0, "aria-selected": A6, disabled: void 0, onClick: v5, onFocus: S9, onPointerEnter: l11, onMouseEnter: l11, onPointerMove: x6, onMouseMove: x6, onPointerLeave: E7, onMouseLeave: E7 }, theirProps: u8, slot: W, defaultTag: qe2, name: "Listbox.Option" });
}
var Ze2 = L3(Ve2);
var et = L3(Qe2);
var tt = L3(Xe3);
var ot = L3(Je3);
var nt = L3(Ye3);
var Bt = Object.assign(Ze2, { Button: et, Label: tt, Options: ot, Option: nt });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react33 = __toESM(require_react(), 1);
var pe2 = ((r11) => (r11[r11.Open = 0] = "Open", r11[r11.Closed = 1] = "Closed", r11))(pe2 || {});
var ce2 = ((r11) => (r11[r11.Pointer = 0] = "Pointer", r11[r11.Other = 1] = "Other", r11))(ce2 || {});
var me2 = ((a11) => (a11[a11.OpenMenu = 0] = "OpenMenu", a11[a11.CloseMenu = 1] = "CloseMenu", a11[a11.GoToItem = 2] = "GoToItem", a11[a11.Search = 3] = "Search", a11[a11.ClearSearch = 4] = "ClearSearch", a11[a11.RegisterItem = 5] = "RegisterItem", a11[a11.UnregisterItem = 6] = "UnregisterItem", a11))(me2 || {});
function w4(e6, u8 = (r11) => r11) {
  let r11 = e6.activeItemIndex !== null ? e6.items[e6.activeItemIndex] : null, i10 = A(u8(e6.items.slice()), (t14) => t14.dataRef.current.domRef.current), s17 = r11 ? i10.indexOf(r11) : null;
  return s17 === -1 && (s17 = null), { items: i10, activeItemIndex: s17 };
}
var de = { [1](e6) {
  return e6.menuState === 1 ? e6 : { ...e6, activeItemIndex: null, menuState: 1 };
}, [0](e6) {
  return e6.menuState === 0 ? e6 : { ...e6, menuState: 0 };
}, [2]: (e6, u8) => {
  var s17;
  let r11 = w4(e6), i10 = x(u8, { resolveItems: () => r11.items, resolveActiveIndex: () => r11.activeItemIndex, resolveId: (t14) => t14.id, resolveDisabled: (t14) => t14.dataRef.current.disabled });
  return { ...e6, ...r11, searchQuery: "", activeItemIndex: i10, activationTrigger: (s17 = u8.trigger) != null ? s17 : 1 };
}, [3]: (e6, u8) => {
  let i10 = e6.searchQuery !== "" ? 0 : 1, s17 = e6.searchQuery + u8.value.toLowerCase(), o11 = (e6.activeItemIndex !== null ? e6.items.slice(e6.activeItemIndex + i10).concat(e6.items.slice(0, e6.activeItemIndex + i10)) : e6.items).find((l11) => {
    var m11;
    return ((m11 = l11.dataRef.current.textValue) == null ? void 0 : m11.startsWith(s17)) && !l11.dataRef.current.disabled;
  }), a11 = o11 ? e6.items.indexOf(o11) : -1;
  return a11 === -1 || a11 === e6.activeItemIndex ? { ...e6, searchQuery: s17 } : { ...e6, searchQuery: s17, activeItemIndex: a11, activationTrigger: 1 };
}, [4](e6) {
  return e6.searchQuery === "" ? e6 : { ...e6, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e6, u8) => {
  let r11 = w4(e6, (i10) => [...i10, { id: u8.id, dataRef: u8.dataRef }]);
  return { ...e6, ...r11 };
}, [6]: (e6, u8) => {
  let r11 = w4(e6, (i10) => {
    let s17 = i10.findIndex((t14) => t14.id === u8.id);
    return s17 !== -1 && i10.splice(s17, 1), i10;
  });
  return { ...e6, ...r11, activationTrigger: 1 };
} };
var U4 = (0, import_react33.createContext)(null);
U4.displayName = "MenuContext";
function F5(e6) {
  let u8 = (0, import_react33.useContext)(U4);
  if (u8 === null) {
    let r11 = new Error(`<${e6} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r11, F5), r11;
  }
  return u8;
}
function fe2(e6, u8) {
  return u(u8.type, de, e6, u8);
}
var Te2 = import_react33.Fragment;
function ye3(e6, u8) {
  let r11 = (0, import_react33.useReducer)(fe2, { menuState: 1, buttonRef: (0, import_react33.createRef)(), itemsRef: (0, import_react33.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i10, itemsRef: s17, buttonRef: t14 }, o11] = r11, a11 = y(u8);
  L2([t14, s17], (g6, A6) => {
    var I7;
    o11({ type: 1 }), h(A6, F.Loose) || (g6.preventDefault(), (I7 = t14.current) == null || I7.focus());
  }, i10 === 0);
  let l11 = o4(() => {
    o11({ type: 1 });
  }), m11 = (0, import_react33.useMemo)(() => ({ open: i10 === 0, close: l11 }), [i10, l11]), M8 = e6, f12 = { ref: a11 };
  return import_react33.default.createElement(U4.Provider, { value: r11 }, import_react33.default.createElement(c3, { value: u(i10, { [0]: d4.Open, [1]: d4.Closed }) }, D({ ourProps: f12, theirProps: M8, slot: m11, defaultTag: Te2, name: "Menu" })));
}
var Ie2 = "button";
function Me2(e6, u8) {
  var I7;
  let r11 = I(), { id: i10 = `headlessui-menu-button-${r11}`, ...s17 } = e6, [t14, o11] = F5("Menu.Button"), a11 = y(t14.buttonRef, u8), l11 = p(), m11 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        p9.preventDefault(), p9.stopPropagation(), o11({ type: 0 }), l11.nextFrame(() => o11({ type: 2, focus: a2.First }));
        break;
      case o8.ArrowUp:
        p9.preventDefault(), p9.stopPropagation(), o11({ type: 0 }), l11.nextFrame(() => o11({ type: 2, focus: a2.Last }));
        break;
    }
  }), M8 = o4((p9) => {
    switch (p9.key) {
      case o8.Space:
        p9.preventDefault();
        break;
    }
  }), f12 = o4((p9) => {
    if (r3(p9.currentTarget))
      return p9.preventDefault();
    e6.disabled || (t14.menuState === 0 ? (o11({ type: 1 }), l11.nextFrame(() => {
      var R3;
      return (R3 = t14.buttonRef.current) == null ? void 0 : R3.focus({ preventScroll: true });
    })) : (p9.preventDefault(), o11({ type: 0 })));
  }), g6 = (0, import_react33.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), A6 = { ref: a11, id: i10, type: s6(e6, t14.buttonRef), "aria-haspopup": "menu", "aria-controls": (I7 = t14.itemsRef.current) == null ? void 0 : I7.id, "aria-expanded": e6.disabled ? void 0 : t14.menuState === 0, onKeyDown: m11, onKeyUp: M8, onClick: f12 };
  return D({ ourProps: A6, theirProps: s17, slot: g6, defaultTag: Ie2, name: "Menu.Button" });
}
var ge3 = "div";
var Re = j.RenderStrategy | j.Static;
function Ae(e6, u8) {
  var R3, E7;
  let r11 = I(), { id: i10 = `headlessui-menu-items-${r11}`, ...s17 } = e6, [t14, o11] = F5("Menu.Items"), a11 = y(t14.itemsRef, u8), l11 = n4(t14.itemsRef), m11 = p(), M8 = C(), f12 = (() => M8 !== null ? (M8 & d4.Open) === d4.Open : t14.menuState === 0)();
  (0, import_react33.useEffect)(() => {
    let n5 = t14.itemsRef.current;
    n5 && t14.menuState === 0 && n5 !== (l11 == null ? void 0 : l11.activeElement) && n5.focus({ preventScroll: true });
  }, [t14.menuState, t14.itemsRef, l11]), F2({ container: t14.itemsRef.current, enabled: t14.menuState === 0, accept(n5) {
    return n5.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n5.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n5) {
    n5.setAttribute("role", "none");
  } });
  let g6 = o4((n5) => {
    var S9, O3;
    switch (m11.dispose(), n5.key) {
      case o8.Space:
        if (t14.searchQuery !== "")
          return n5.preventDefault(), n5.stopPropagation(), o11({ type: 3, value: n5.key });
      case o8.Enter:
        if (n5.preventDefault(), n5.stopPropagation(), o11({ type: 1 }), t14.activeItemIndex !== null) {
          let { dataRef: c10 } = t14.items[t14.activeItemIndex];
          (O3 = (S9 = c10.current) == null ? void 0 : S9.domRef.current) == null || O3.click();
        }
        g(t14.buttonRef.current);
        break;
      case o8.ArrowDown:
        return n5.preventDefault(), n5.stopPropagation(), o11({ type: 2, focus: a2.Next });
      case o8.ArrowUp:
        return n5.preventDefault(), n5.stopPropagation(), o11({ type: 2, focus: a2.Previous });
      case o8.Home:
      case o8.PageUp:
        return n5.preventDefault(), n5.stopPropagation(), o11({ type: 2, focus: a2.First });
      case o8.End:
      case o8.PageDown:
        return n5.preventDefault(), n5.stopPropagation(), o11({ type: 2, focus: a2.Last });
      case o8.Escape:
        n5.preventDefault(), n5.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          var c10;
          return (c10 = t14.buttonRef.current) == null ? void 0 : c10.focus({ preventScroll: true });
        });
        break;
      case o8.Tab:
        n5.preventDefault(), n5.stopPropagation(), o11({ type: 1 }), o2().nextFrame(() => {
          v(t14.buttonRef.current, n5.shiftKey ? L.Previous : L.Next);
        });
        break;
      default:
        n5.key.length === 1 && (o11({ type: 3, value: n5.key }), m11.setTimeout(() => o11({ type: 4 }), 350));
        break;
    }
  }), A6 = o4((n5) => {
    switch (n5.key) {
      case o8.Space:
        n5.preventDefault();
        break;
    }
  }), I7 = (0, import_react33.useMemo)(() => ({ open: t14.menuState === 0 }), [t14]), p9 = { "aria-activedescendant": t14.activeItemIndex === null || (R3 = t14.items[t14.activeItemIndex]) == null ? void 0 : R3.id, "aria-labelledby": (E7 = t14.buttonRef.current) == null ? void 0 : E7.id, id: i10, onKeyDown: g6, onKeyUp: A6, role: "menu", tabIndex: 0, ref: a11 };
  return D({ ourProps: p9, theirProps: s17, slot: I7, defaultTag: ge3, features: Re, visible: f12, name: "Menu.Items" });
}
var be2 = import_react33.Fragment;
function Ee(e6, u8) {
  let r11 = I(), { id: i10 = `headlessui-menu-item-${r11}`, disabled: s17 = false, ...t14 } = e6, [o11, a11] = F5("Menu.Item"), l11 = o11.activeItemIndex !== null ? o11.items[o11.activeItemIndex].id === i10 : false, m11 = (0, import_react33.useRef)(null), M8 = y(u8, m11);
  l(() => {
    if (o11.menuState !== 0 || !l11 || o11.activationTrigger === 0)
      return;
    let c10 = o2();
    return c10.requestAnimationFrame(() => {
      var b6, _4;
      (_4 = (b6 = m11.current) == null ? void 0 : b6.scrollIntoView) == null || _4.call(b6, { block: "nearest" });
    }), c10.dispose;
  }, [m11, l11, o11.menuState, o11.activationTrigger, o11.activeItemIndex]);
  let f12 = (0, import_react33.useRef)({ disabled: s17, domRef: m11 });
  l(() => {
    f12.current.disabled = s17;
  }, [f12, s17]), l(() => {
    var c10, b6;
    f12.current.textValue = (b6 = (c10 = m11.current) == null ? void 0 : c10.textContent) == null ? void 0 : b6.toLowerCase();
  }, [f12, m11]), l(() => (a11({ type: 5, id: i10, dataRef: f12 }), () => a11({ type: 6, id: i10 })), [f12, i10]);
  let g6 = o4(() => {
    a11({ type: 1 });
  }), A6 = o4((c10) => {
    if (s17)
      return c10.preventDefault();
    a11({ type: 1 }), g(o11.buttonRef.current);
  }), I7 = o4(() => {
    if (s17)
      return a11({ type: 2, focus: a2.Nothing });
    a11({ type: 2, focus: a2.Specific, id: i10 });
  }), p9 = u3(), R3 = o4((c10) => p9.update(c10)), E7 = o4((c10) => {
    p9.wasMoved(c10) && (s17 || l11 || a11({ type: 2, focus: a2.Specific, id: i10, trigger: 0 }));
  }), n5 = o4((c10) => {
    p9.wasMoved(c10) && (s17 || l11 && a11({ type: 2, focus: a2.Nothing }));
  }), S9 = (0, import_react33.useMemo)(() => ({ active: l11, disabled: s17, close: g6 }), [l11, s17, g6]);
  return D({ ourProps: { id: i10, ref: M8, role: "menuitem", tabIndex: s17 === true ? void 0 : -1, "aria-disabled": s17 === true ? true : void 0, disabled: void 0, onClick: A6, onFocus: I7, onPointerEnter: R3, onMouseEnter: R3, onPointerMove: E7, onMouseMove: E7, onPointerLeave: n5, onMouseLeave: n5 }, theirProps: t14, slot: S9, defaultTag: be2, name: "Menu.Item" });
}
var Se2 = L3(ye3);
var Pe = L3(Me2);
var ve2 = L3(Ae);
var xe4 = L3(Ee);
var ot2 = Object.assign(Se2, { Button: Pe, Items: ve2, Item: xe4 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react34 = __toESM(require_react(), 1);
var Fe2 = ((s17) => (s17[s17.Open = 0] = "Open", s17[s17.Closed = 1] = "Closed", s17))(Fe2 || {});
var Ie3 = ((t14) => (t14[t14.TogglePopover = 0] = "TogglePopover", t14[t14.ClosePopover = 1] = "ClosePopover", t14[t14.SetButton = 2] = "SetButton", t14[t14.SetButtonId = 3] = "SetButtonId", t14[t14.SetPanel = 4] = "SetPanel", t14[t14.SetPanelId = 5] = "SetPanelId", t14))(Ie3 || {});
var xe5 = { [0]: (o11) => ({ ...o11, popoverState: u(o11.popoverState, { [0]: 1, [1]: 0 }) }), [1](o11) {
  return o11.popoverState === 1 ? o11 : { ...o11, popoverState: 1 };
}, [2](o11, l11) {
  return o11.button === l11.button ? o11 : { ...o11, button: l11.button };
}, [3](o11, l11) {
  return o11.buttonId === l11.buttonId ? o11 : { ...o11, buttonId: l11.buttonId };
}, [4](o11, l11) {
  return o11.panel === l11.panel ? o11 : { ...o11, panel: l11.panel };
}, [5](o11, l11) {
  return o11.panelId === l11.panelId ? o11 : { ...o11, panelId: l11.panelId };
} };
var le3 = (0, import_react34.createContext)(null);
le3.displayName = "PopoverContext";
function Q3(o11) {
  let l11 = (0, import_react34.useContext)(le3);
  if (l11 === null) {
    let s17 = new Error(`<${o11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s17, Q3), s17;
  }
  return l11;
}
var ae2 = (0, import_react34.createContext)(null);
ae2.displayName = "PopoverAPIContext";
function pe3(o11) {
  let l11 = (0, import_react34.useContext)(ae2);
  if (l11 === null) {
    let s17 = new Error(`<${o11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s17, pe3), s17;
  }
  return l11;
}
var se3 = (0, import_react34.createContext)(null);
se3.displayName = "PopoverGroupContext";
function ve3() {
  return (0, import_react34.useContext)(se3);
}
var Z4 = (0, import_react34.createContext)(null);
Z4.displayName = "PopoverPanelContext";
function Le() {
  return (0, import_react34.useContext)(Z4);
}
function Me3(o11, l11) {
  return u(l11.type, xe5, o11, l11);
}
var Be4 = "div";
function De(o11, l11) {
  var B4;
  let s17 = (0, import_react34.useRef)(null), R3 = y(l11, T2((e6) => {
    s17.current = e6;
  })), C4 = (0, import_react34.useRef)([]), r11 = (0, import_react34.useReducer)(Me3, { popoverState: 1, buttons: C4, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react34.createRef)(), afterPanelSentinel: (0, import_react34.createRef)() }), [{ popoverState: t14, button: a11, buttonId: v5, panel: f12, panelId: F9, beforePanelSentinel: T7, afterPanelSentinel: d15 }, i10] = r11, p9 = n4((B4 = s17.current) != null ? B4 : a11), P7 = (0, import_react34.useMemo)(() => {
    if (!a11 || !f12)
      return false;
    for (let N5 of document.querySelectorAll("body > *"))
      if (Number(N5 == null ? void 0 : N5.contains(a11)) ^ Number(N5 == null ? void 0 : N5.contains(f12)))
        return true;
    let e6 = E(), n5 = e6.indexOf(a11), A6 = (n5 + e6.length - 1) % e6.length, g6 = (n5 + 1) % e6.length, G3 = e6[A6], Te4 = e6[g6];
    return !f12.contains(G3) && !f12.contains(Te4);
  }, [a11, f12]), S9 = s2(v5), y5 = s2(F9), x6 = (0, import_react34.useMemo)(() => ({ buttonId: S9, panelId: y5, close: () => i10({ type: 1 }) }), [S9, y5, i10]), O3 = ve3(), L7 = O3 == null ? void 0 : O3.registerPopover, j5 = o4(() => {
    var e6;
    return (e6 = O3 == null ? void 0 : O3.isFocusWithinPopoverGroup()) != null ? e6 : (p9 == null ? void 0 : p9.activeElement) && ((a11 == null ? void 0 : a11.contains(p9.activeElement)) || (f12 == null ? void 0 : f12.contains(p9.activeElement)));
  });
  (0, import_react34.useEffect)(() => L7 == null ? void 0 : L7(x6), [L7, x6]), E5(p9 == null ? void 0 : p9.defaultView, "focus", (e6) => {
    var n5, A6, g6, G3;
    t14 === 0 && (j5() || a11 && f12 && e6.target !== window && ((A6 = (n5 = T7.current) == null ? void 0 : n5.contains) != null && A6.call(n5, e6.target) || (G3 = (g6 = d15.current) == null ? void 0 : g6.contains) != null && G3.call(g6, e6.target) || i10({ type: 1 })));
  }, true), L2([a11, f12], (e6, n5) => {
    i10({ type: 1 }), h(n5, F.Loose) || (e6.preventDefault(), a11 == null || a11.focus());
  }, t14 === 0);
  let M8 = o4((e6) => {
    i10({ type: 1 });
    let n5 = (() => e6 ? e6 instanceof HTMLElement ? e6 : "current" in e6 && e6.current instanceof HTMLElement ? e6.current : a11 : a11)();
    n5 == null || n5.focus();
  }), u8 = (0, import_react34.useMemo)(() => ({ close: M8, isPortalled: P7 }), [M8, P7]), m11 = (0, import_react34.useMemo)(() => ({ open: t14 === 0, close: M8 }), [t14, M8]), E7 = o11, c10 = { ref: R3 };
  return import_react34.default.createElement(Z4.Provider, { value: null }, import_react34.default.createElement(le3.Provider, { value: r11 }, import_react34.default.createElement(ae2.Provider, { value: u8 }, import_react34.default.createElement(c3, { value: u(t14, { [0]: d4.Open, [1]: d4.Closed }) }, D({ ourProps: c10, theirProps: E7, slot: m11, defaultTag: Be4, name: "Popover" })))));
}
var he = "button";
function He4(o11, l11) {
  let s17 = I(), { id: R3 = `headlessui-popover-button-${s17}`, ...C4 } = o11, [r11, t14] = Q3("Popover.Button"), { isPortalled: a11 } = pe3("Popover.Button"), v5 = (0, import_react34.useRef)(null), f12 = `headlessui-focus-sentinel-${I()}`, F9 = ve3(), T7 = F9 == null ? void 0 : F9.closeOthers, i10 = Le() !== null;
  (0, import_react34.useEffect)(() => {
    if (!i10)
      return t14({ type: 3, buttonId: R3 }), () => {
        t14({ type: 3, buttonId: null });
      };
  }, [i10, R3, t14]);
  let [p9] = (0, import_react34.useState)(() => Symbol()), P7 = y(v5, l11, i10 ? null : (e6) => {
    if (e6)
      r11.buttons.current.push(p9);
    else {
      let n5 = r11.buttons.current.indexOf(p9);
      n5 !== -1 && r11.buttons.current.splice(n5, 1);
    }
    r11.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e6 && t14({ type: 2, button: e6 });
  }), S9 = y(v5, l11), y5 = n4(v5), x6 = o4((e6) => {
    var n5, A6, g6;
    if (i10) {
      if (r11.popoverState === 1)
        return;
      switch (e6.key) {
        case o8.Space:
        case o8.Enter:
          e6.preventDefault(), (A6 = (n5 = e6.target).click) == null || A6.call(n5), t14({ type: 1 }), (g6 = r11.button) == null || g6.focus();
          break;
      }
    } else
      switch (e6.key) {
        case o8.Space:
        case o8.Enter:
          e6.preventDefault(), e6.stopPropagation(), r11.popoverState === 1 && (T7 == null || T7(r11.buttonId)), t14({ type: 0 });
          break;
        case o8.Escape:
          if (r11.popoverState !== 0)
            return T7 == null ? void 0 : T7(r11.buttonId);
          if (!v5.current || y5 != null && y5.activeElement && !v5.current.contains(y5.activeElement))
            return;
          e6.preventDefault(), e6.stopPropagation(), t14({ type: 1 });
          break;
      }
  }), O3 = o4((e6) => {
    i10 || e6.key === o8.Space && e6.preventDefault();
  }), L7 = o4((e6) => {
    var n5, A6;
    r3(e6.currentTarget) || o11.disabled || (i10 ? (t14({ type: 1 }), (n5 = r11.button) == null || n5.focus()) : (e6.preventDefault(), e6.stopPropagation(), r11.popoverState === 1 && (T7 == null || T7(r11.buttonId)), t14({ type: 0 }), (A6 = r11.button) == null || A6.focus()));
  }), j5 = o4((e6) => {
    e6.preventDefault(), e6.stopPropagation();
  }), M8 = r11.popoverState === 0, u8 = (0, import_react34.useMemo)(() => ({ open: M8 }), [M8]), m11 = s6(o11, v5), E7 = i10 ? { ref: S9, type: m11, onKeyDown: x6, onClick: L7 } : { ref: P7, id: r11.buttonId, type: m11, "aria-expanded": o11.disabled ? void 0 : r11.popoverState === 0, "aria-controls": r11.panel ? r11.panelId : void 0, onKeyDown: x6, onKeyUp: O3, onClick: L7, onMouseDown: j5 }, c10 = n3(), B4 = o4(() => {
    let e6 = r11.panel;
    if (!e6)
      return;
    function n5() {
      u(c10.current, { [s11.Forwards]: () => I2(e6, L.First), [s11.Backwards]: () => I2(e6, L.Last) }) === N.Error && I2(E().filter((g6) => g6.dataset.headlessuiFocusGuard !== "true"), u(c10.current, { [s11.Forwards]: L.Next, [s11.Backwards]: L.Previous }), { relativeTo: r11.button });
    }
    n5();
  });
  return import_react34.default.createElement(import_react34.default.Fragment, null, D({ ourProps: E7, theirProps: C4, slot: u8, defaultTag: he, name: "Popover.Button" }), M8 && !i10 && a11 && import_react34.default.createElement(c2, { id: f12, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: B4 }));
}
var Ge4 = "div";
var _e3 = j.RenderStrategy | j.Static;
function ke3(o11, l11) {
  let s17 = I(), { id: R3 = `headlessui-popover-overlay-${s17}`, ...C4 } = o11, [{ popoverState: r11 }, t14] = Q3("Popover.Overlay"), a11 = y(l11), v5 = C(), f12 = (() => v5 !== null ? (v5 & d4.Open) === d4.Open : r11 === 0)(), F9 = o4((i10) => {
    if (r3(i10.currentTarget))
      return i10.preventDefault();
    t14({ type: 1 });
  }), T7 = (0, import_react34.useMemo)(() => ({ open: r11 === 0 }), [r11]);
  return D({ ourProps: { ref: a11, id: R3, "aria-hidden": true, onClick: F9 }, theirProps: C4, slot: T7, defaultTag: Ge4, features: _e3, visible: f12, name: "Popover.Overlay" });
}
var we3 = "div";
var Ne4 = j.RenderStrategy | j.Static;
function Ue4(o11, l11) {
  let s17 = I(), { id: R3 = `headlessui-popover-panel-${s17}`, focus: C4 = false, ...r11 } = o11, [t14, a11] = Q3("Popover.Panel"), { close: v5, isPortalled: f12 } = pe3("Popover.Panel"), F9 = `headlessui-focus-sentinel-before-${I()}`, T7 = `headlessui-focus-sentinel-after-${I()}`, d15 = (0, import_react34.useRef)(null), i10 = y(d15, l11, (u8) => {
    a11({ type: 4, panel: u8 });
  }), p9 = n4(d15);
  l(() => (a11({ type: 5, panelId: R3 }), () => {
    a11({ type: 5, panelId: null });
  }), [R3, a11]);
  let P7 = C(), S9 = (() => P7 !== null ? (P7 & d4.Open) === d4.Open : t14.popoverState === 0)(), y5 = o4((u8) => {
    var m11;
    switch (u8.key) {
      case o8.Escape:
        if (t14.popoverState !== 0 || !d15.current || p9 != null && p9.activeElement && !d15.current.contains(p9.activeElement))
          return;
        u8.preventDefault(), u8.stopPropagation(), a11({ type: 1 }), (m11 = t14.button) == null || m11.focus();
        break;
    }
  });
  (0, import_react34.useEffect)(() => {
    var u8;
    o11.static || t14.popoverState === 1 && ((u8 = o11.unmount) == null || u8) && a11({ type: 4, panel: null });
  }, [t14.popoverState, o11.unmount, o11.static, a11]), (0, import_react34.useEffect)(() => {
    if (!C4 || t14.popoverState !== 0 || !d15.current)
      return;
    let u8 = p9 == null ? void 0 : p9.activeElement;
    d15.current.contains(u8) || I2(d15.current, L.First);
  }, [C4, d15, t14.popoverState]);
  let x6 = (0, import_react34.useMemo)(() => ({ open: t14.popoverState === 0, close: v5 }), [t14, v5]), O3 = { ref: i10, id: R3, onKeyDown: y5, onBlur: C4 && t14.popoverState === 0 ? (u8) => {
    var E7, c10, B4, e6, n5;
    let m11 = u8.relatedTarget;
    m11 && d15.current && ((E7 = d15.current) != null && E7.contains(m11) || (a11({ type: 1 }), ((B4 = (c10 = t14.beforePanelSentinel.current) == null ? void 0 : c10.contains) != null && B4.call(c10, m11) || (n5 = (e6 = t14.afterPanelSentinel.current) == null ? void 0 : e6.contains) != null && n5.call(e6, m11)) && m11.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, L7 = n3(), j5 = o4(() => {
    let u8 = d15.current;
    if (!u8)
      return;
    function m11() {
      u(L7.current, { [s11.Forwards]: () => {
        var c10;
        I2(u8, L.First) === N.Error && ((c10 = t14.afterPanelSentinel.current) == null || c10.focus());
      }, [s11.Backwards]: () => {
        var E7;
        (E7 = t14.button) == null || E7.focus({ preventScroll: true });
      } });
    }
    m11();
  }), M8 = o4(() => {
    let u8 = d15.current;
    if (!u8)
      return;
    function m11() {
      u(L7.current, { [s11.Forwards]: () => {
        var A6;
        if (!t14.button)
          return;
        let E7 = E(), c10 = E7.indexOf(t14.button), B4 = E7.slice(0, c10 + 1), n5 = [...E7.slice(c10 + 1), ...B4];
        for (let g6 of n5.slice())
          if (g6.dataset.headlessuiFocusGuard === "true" || (A6 = t14.panel) != null && A6.contains(g6)) {
            let G3 = n5.indexOf(g6);
            G3 !== -1 && n5.splice(G3, 1);
          }
        I2(n5, L.First, { sorted: false });
      }, [s11.Backwards]: () => {
        var c10;
        I2(u8, L.Previous) === N.Error && ((c10 = t14.button) == null || c10.focus());
      } });
    }
    m11();
  });
  return import_react34.default.createElement(Z4.Provider, { value: R3 }, S9 && f12 && import_react34.default.createElement(c2, { id: F9, ref: t14.beforePanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: j5 }), D({ ourProps: O3, theirProps: r11, slot: x6, defaultTag: we3, features: Ne4, visible: S9, name: "Popover.Panel" }), S9 && f12 && import_react34.default.createElement(c2, { id: T7, ref: t14.afterPanelSentinel, features: p3.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: M8 }));
}
var Ke4 = "div";
function We4(o11, l11) {
  let s17 = (0, import_react34.useRef)(null), R3 = y(s17, l11), [C4, r11] = (0, import_react34.useState)([]), t14 = o4((p9) => {
    r11((P7) => {
      let S9 = P7.indexOf(p9);
      if (S9 !== -1) {
        let y5 = P7.slice();
        return y5.splice(S9, 1), y5;
      }
      return P7;
    });
  }), a11 = o4((p9) => (r11((P7) => [...P7, p9]), () => t14(p9))), v5 = o4(() => {
    var S9;
    let p9 = e(s17);
    if (!p9)
      return false;
    let P7 = p9.activeElement;
    return (S9 = s17.current) != null && S9.contains(P7) ? true : C4.some((y5) => {
      var x6, O3;
      return ((x6 = p9.getElementById(y5.buttonId.current)) == null ? void 0 : x6.contains(P7)) || ((O3 = p9.getElementById(y5.panelId.current)) == null ? void 0 : O3.contains(P7));
    });
  }), f12 = o4((p9) => {
    for (let P7 of C4)
      P7.buttonId.current !== p9 && P7.close();
  }), F9 = (0, import_react34.useMemo)(() => ({ registerPopover: a11, unregisterPopover: t14, isFocusWithinPopoverGroup: v5, closeOthers: f12 }), [a11, t14, v5, f12]), T7 = (0, import_react34.useMemo)(() => ({}), []), d15 = o11, i10 = { ref: R3 };
  return import_react34.default.createElement(se3.Provider, { value: F9 }, D({ ourProps: i10, theirProps: d15, slot: T7, defaultTag: Ke4, name: "Popover.Group" }));
}
var je4 = L3(De);
var Ve3 = L3(He4);
var $e4 = L3(ke3);
var Je4 = L3(Ue4);
var Xe4 = L3(We4);
var Lt = Object.assign(je4, { Button: Ve3, Overlay: $e4, Panel: Je4, Group: Xe4 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react35 = __toESM(require_react(), 1);
function b3(g6 = 0) {
  let [t14, l11] = (0, import_react35.useState)(g6), u8 = (0, import_react35.useCallback)((e6) => l11((a11) => a11 | e6), [t14]), n5 = (0, import_react35.useCallback)((e6) => Boolean(t14 & e6), [t14]), o11 = (0, import_react35.useCallback)((e6) => l11((a11) => a11 & ~e6), [l11]), s17 = (0, import_react35.useCallback)((e6) => l11((a11) => a11 ^ e6), [l11]);
  return { flags: t14, addFlag: u8, hasFlag: n5, removeFlag: o11, toggleFlag: s17 };
}

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react36 = __toESM(require_react(), 1);
var d11 = (0, import_react36.createContext)(null);
function u7() {
  let o11 = (0, import_react36.useContext)(d11);
  if (o11 === null) {
    let t14 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t14, u7), t14;
  }
  return o11;
}
function H6() {
  let [o11, t14] = (0, import_react36.useState)([]);
  return [o11.length > 0 ? o11.join(" ") : void 0, (0, import_react36.useMemo)(() => function(e6) {
    let s17 = o4((r11) => (t14((l11) => [...l11, r11]), () => t14((l11) => {
      let n5 = l11.slice(), p9 = n5.indexOf(r11);
      return p9 !== -1 && n5.splice(p9, 1), n5;
    }))), a11 = (0, import_react36.useMemo)(() => ({ register: s17, slot: e6.slot, name: e6.name, props: e6.props }), [s17, e6.slot, e6.name, e6.props]);
    return import_react36.default.createElement(d11.Provider, { value: a11 }, e6.children);
  }, [t14])];
}
var A3 = "label";
function h9(o11, t14) {
  let i10 = I(), { id: e6 = `headlessui-label-${i10}`, passive: s17 = false, ...a11 } = o11, r11 = u7(), l11 = y(t14);
  l(() => r11.register(e6), [e6, r11.register]);
  let n5 = { ref: l11, ...r11.props, id: e6 };
  return s17 && ("onClick" in n5 && (delete n5.htmlFor, delete n5.onClick), "onClick" in a11 && delete a11.onClick), D({ ourProps: n5, theirProps: a11, slot: r11.slot || {}, defaultTag: A3, name: r11.name || "Label" });
}
var v3 = L3(h9);
var M5 = Object.assign(v3, {});

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var Ge5 = ((t14) => (t14[t14.RegisterOption = 0] = "RegisterOption", t14[t14.UnregisterOption = 1] = "UnregisterOption", t14))(Ge5 || {});
var Ce2 = { [0](r11, o11) {
  let t14 = [...r11.options, { id: o11.id, element: o11.element, propsRef: o11.propsRef }];
  return { ...r11, options: A(t14, (a11) => a11.element.current) };
}, [1](r11, o11) {
  let t14 = r11.options.slice(), a11 = r11.options.findIndex((f12) => f12.id === o11.id);
  return a11 === -1 ? r11 : (t14.splice(a11, 1), { ...r11, options: t14 });
} };
var B3 = (0, import_react37.createContext)(null);
B3.displayName = "RadioGroupDataContext";
function oe2(r11) {
  let o11 = (0, import_react37.useContext)(B3);
  if (o11 === null) {
    let t14 = new Error(`<${r11} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, oe2), t14;
  }
  return o11;
}
var $4 = (0, import_react37.createContext)(null);
$4.displayName = "RadioGroupActionsContext";
function ne2(r11) {
  let o11 = (0, import_react37.useContext)($4);
  if (o11 === null) {
    let t14 = new Error(`<${r11} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, ne2), t14;
  }
  return o11;
}
function ke4(r11, o11) {
  return u(o11.type, Ce2, r11, o11);
}
var Le2 = "div";
function he2(r11, o11) {
  let t14 = I(), { id: a11 = `headlessui-radiogroup-${t14}`, value: f12, defaultValue: E7, name: _4, onChange: v5, by: D8 = (e6, i10) => e6 === i10, disabled: G3 = false, ...H8 } = r11, T7 = o4(typeof D8 == "string" ? (e6, i10) => {
    let n5 = D8;
    return (e6 == null ? void 0 : e6[n5]) === (i10 == null ? void 0 : i10[n5]);
  } : D8), [C4, k3] = (0, import_react37.useReducer)(ke4, { options: [] }), p9 = C4.options, [w6, U5] = H6(), [m11, L7] = M(), h10 = (0, import_react37.useRef)(null), N5 = y(h10, o11), [l11, F9] = T4(f12, v5, E7), u8 = (0, import_react37.useMemo)(() => p9.find((e6) => !e6.propsRef.current.disabled), [p9]), y5 = (0, import_react37.useMemo)(() => p9.some((e6) => T7(e6.propsRef.current.value, l11)), [p9, l11]), d15 = o4((e6) => {
    var n5;
    if (G3 || T7(e6, l11))
      return false;
    let i10 = (n5 = p9.find((c10) => T7(c10.propsRef.current.value, e6))) == null ? void 0 : n5.propsRef.current;
    return i10 != null && i10.disabled ? false : (F9 == null || F9(e6), true);
  });
  F2({ container: h10.current, accept(e6) {
    return e6.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e6) {
    e6.setAttribute("role", "none");
  } });
  let W = o4((e6) => {
    let i10 = h10.current;
    if (!i10)
      return;
    let n5 = e(i10), c10 = p9.filter((s17) => s17.propsRef.current.disabled === false).map((s17) => s17.element.current);
    switch (e6.key) {
      case o8.Enter:
        p2(e6.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (e6.preventDefault(), e6.stopPropagation(), I2(c10, L.Previous | L.WrapAround) === N.Success) {
          let b6 = p9.find((K4) => K4.element.current === (n5 == null ? void 0 : n5.activeElement));
          b6 && d15(b6.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (e6.preventDefault(), e6.stopPropagation(), I2(c10, L.Next | L.WrapAround) === N.Success) {
          let b6 = p9.find((K4) => K4.element.current === (n5 == null ? void 0 : n5.activeElement));
          b6 && d15(b6.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          e6.preventDefault(), e6.stopPropagation();
          let s17 = p9.find((b6) => b6.element.current === (n5 == null ? void 0 : n5.activeElement));
          s17 && d15(s17.propsRef.current.value);
        }
        break;
    }
  }), x6 = o4((e6) => (k3({ type: 0, ...e6 }), () => k3({ type: 1, id: e6.id }))), R3 = (0, import_react37.useMemo)(() => ({ value: l11, firstOption: u8, containsCheckedOption: y5, disabled: G3, compare: T7, ...C4 }), [l11, u8, y5, G3, T7, C4]), I7 = (0, import_react37.useMemo)(() => ({ registerOption: x6, change: d15 }), [x6, d15]), ie4 = { ref: N5, id: a11, role: "radiogroup", "aria-labelledby": w6, "aria-describedby": m11, onKeyDown: W }, ae3 = (0, import_react37.useMemo)(() => ({ value: l11 }), [l11]), S9 = (0, import_react37.useRef)(null), pe4 = p();
  return (0, import_react37.useEffect)(() => {
    S9.current && E7 !== void 0 && pe4.addEventListener(S9.current, "reset", () => {
      d15(E7);
    });
  }, [S9, d15]), import_react37.default.createElement(L7, { name: "RadioGroup.Description" }, import_react37.default.createElement(U5, { name: "RadioGroup.Label" }, import_react37.default.createElement($4.Provider, { value: I7 }, import_react37.default.createElement(B3.Provider, { value: R3 }, _4 != null && l11 != null && e3({ [_4]: l11 }).map(([e6, i10], n5) => import_react37.default.createElement(c2, { features: p3.Hidden, ref: n5 === 0 ? (c10) => {
    var s17;
    S9.current = (s17 = c10 == null ? void 0 : c10.closest("form")) != null ? s17 : null;
  } : void 0, ...P({ key: e6, as: "input", type: "radio", checked: i10 != null, hidden: true, readOnly: true, name: e6, value: i10 }) })), D({ ourProps: ie4, theirProps: H8, slot: ae3, defaultTag: Le2, name: "RadioGroup" })))));
}
var Fe3 = ((t14) => (t14[t14.Empty = 1] = "Empty", t14[t14.Active = 2] = "Active", t14))(Fe3 || {});
var xe6 = "div";
function _e4(r11, o11) {
  var x6;
  let t14 = I(), { id: a11 = `headlessui-radiogroup-option-${t14}`, value: f12, disabled: E7 = false, ..._4 } = r11, v5 = (0, import_react37.useRef)(null), D8 = y(v5, o11), [G3, H8] = H6(), [T7, C4] = M(), { addFlag: k3, removeFlag: p9, hasFlag: w6 } = b3(1), U5 = s2({ value: f12, disabled: E7 }), m11 = oe2("RadioGroup.Option"), L7 = ne2("RadioGroup.Option");
  l(() => L7.registerOption({ id: a11, element: v5, propsRef: U5 }), [a11, L7, v5, r11]);
  let h10 = o4((R3) => {
    var I7;
    if (r3(R3.currentTarget))
      return R3.preventDefault();
    L7.change(f12) && (k3(2), (I7 = v5.current) == null || I7.focus());
  }), N5 = o4((R3) => {
    if (r3(R3.currentTarget))
      return R3.preventDefault();
    k3(2);
  }), l11 = o4(() => p9(2)), F9 = ((x6 = m11.firstOption) == null ? void 0 : x6.id) === a11, u8 = m11.disabled || E7, y5 = m11.compare(m11.value, f12), d15 = { ref: D8, id: a11, role: "radio", "aria-checked": y5 ? "true" : "false", "aria-labelledby": G3, "aria-describedby": T7, "aria-disabled": u8 ? true : void 0, tabIndex: (() => u8 ? -1 : y5 || !m11.containsCheckedOption && F9 ? 0 : -1)(), onClick: u8 ? void 0 : h10, onFocus: u8 ? void 0 : N5, onBlur: u8 ? void 0 : l11 }, W = (0, import_react37.useMemo)(() => ({ checked: y5, disabled: u8, active: w6(2) }), [y5, u8, w6]);
  return import_react37.default.createElement(C4, { name: "RadioGroup.Description" }, import_react37.default.createElement(H8, { name: "RadioGroup.Label" }, D({ ourProps: d15, theirProps: _4, slot: W, defaultTag: xe6, name: "RadioGroup.Option" })));
}
var we4 = L3(he2);
var Ie4 = L3(_e4);
var mt = Object.assign(we4, { Option: Ie4, Label: M5, Description: b2 });

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react38 = __toESM(require_react(), 1);
var b5 = (0, import_react38.createContext)(null);
b5.displayName = "GroupContext";
var V5 = import_react38.Fragment;
function Y5(p9) {
  var t14;
  let [n5, c10] = (0, import_react38.useState)(null), [d15, m11] = H6(), [r11, f12] = M(), a11 = (0, import_react38.useMemo)(() => ({ switch: n5, setSwitch: c10, labelledby: d15, describedby: r11 }), [n5, c10, d15, r11]), h10 = {}, T7 = p9;
  return import_react38.default.createElement(f12, { name: "Switch.Description" }, import_react38.default.createElement(m11, { name: "Switch.Label", props: { htmlFor: (t14 = a11.switch) == null ? void 0 : t14.id, onClick(o11) {
    n5 && (o11.currentTarget.tagName === "LABEL" && o11.preventDefault(), n5.click(), n5.focus({ preventScroll: true }));
  } } }, import_react38.default.createElement(b5.Provider, { value: a11 }, D({ ourProps: h10, theirProps: T7, defaultTag: V5, name: "Switch.Group" }))));
}
var Z5 = "button";
function ee3(p9, n5) {
  let c10 = I(), { id: d15 = `headlessui-switch-${c10}`, checked: m11, defaultChecked: r11 = false, onChange: f12, name: a11, value: h10, ...T7 } = p9, t14 = (0, import_react38.useContext)(b5), o11 = (0, import_react38.useRef)(null), D8 = y(o11, n5, t14 === null ? null : t14.setSwitch), [i10, s17] = T4(m11, f12, r11), y5 = o4(() => s17 == null ? void 0 : s17(!i10)), g6 = o4((e6) => {
    if (r3(e6.currentTarget))
      return e6.preventDefault();
    e6.preventDefault(), y5();
  }), C4 = o4((e6) => {
    e6.key === o8.Space ? (e6.preventDefault(), y5()) : e6.key === o8.Enter && p2(e6.currentTarget);
  }), L7 = o4((e6) => e6.preventDefault()), v5 = (0, import_react38.useMemo)(() => ({ checked: i10 }), [i10]), G3 = { id: d15, ref: D8, role: "switch", type: s6(p9, o11), tabIndex: 0, "aria-checked": i10, "aria-labelledby": t14 == null ? void 0 : t14.labelledby, "aria-describedby": t14 == null ? void 0 : t14.describedby, onClick: g6, onKeyUp: C4, onKeyPress: L7 }, R3 = p();
  return (0, import_react38.useEffect)(() => {
    var S9;
    let e6 = (S9 = o11.current) == null ? void 0 : S9.closest("form");
    e6 && r11 !== void 0 && R3.addEventListener(e6, "reset", () => {
      s17(r11);
    });
  }, [o11, s17]), import_react38.default.createElement(import_react38.default.Fragment, null, a11 != null && i10 && import_react38.default.createElement(c2, { features: p3.Hidden, ...P({ as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i10, name: a11, value: h10 }) }), D({ ourProps: G3, theirProps: T7, slot: v5, defaultTag: Z5, name: "Switch" }));
}
var te3 = L3(ee3);
var ne3 = Y5;
var ve4 = Object.assign(te3, { Group: ne3, Label: M5, Description: b2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react39 = __toESM(require_react(), 1);
function p8({ onFocus: n5 }) {
  let [r11, o11] = (0, import_react39.useState)(true);
  return r11 ? import_react39.default.createElement(c2, { as: "button", type: "button", features: p3.Focusable, onFocus: (a11) => {
    a11.preventDefault();
    let e6, u8 = 50;
    function t14() {
      if (u8-- <= 0) {
        e6 && cancelAnimationFrame(e6);
        return;
      }
      if (n5()) {
        o11(false), cancelAnimationFrame(e6);
        return;
      }
      e6 = requestAnimationFrame(t14);
    }
    e6 = requestAnimationFrame(t14);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var r10 = __toESM(require_react(), 1);
var s16 = r10.createContext(null);
function a10() {
  return { groups: /* @__PURE__ */ new Map(), get(n5, t14) {
    var c10;
    let e6 = this.groups.get(n5);
    e6 || (e6 = /* @__PURE__ */ new Map(), this.groups.set(n5, e6));
    let l11 = (c10 = e6.get(t14)) != null ? c10 : 0;
    e6.set(t14, l11 + 1);
    let o11 = Array.from(e6.keys()).indexOf(t14);
    function i10() {
      let u8 = e6.get(t14);
      u8 > 1 ? e6.set(t14, u8 - 1) : e6.delete(t14);
    }
    return [o11, i10];
  } };
}
function C3({ children: n5 }) {
  let t14 = r10.useRef(a10());
  return r10.createElement(s16.Provider, { value: t14 }, n5);
}
function d12(n5) {
  let t14 = r10.useContext(s16);
  if (!t14)
    throw new Error("You must wrap your component in a <StableCollection>");
  let e6 = f10(), [l11, o11] = t14.current.get(n5, e6);
  return r10.useEffect(() => o11, []), l11;
}
function f10() {
  var l11, o11, i10;
  let n5 = (i10 = (o11 = (l11 = r10.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : l11.ReactCurrentOwner) == null ? void 0 : o11.current) != null ? i10 : null;
  if (!n5)
    return Symbol();
  let t14 = [], e6 = n5;
  for (; e6; )
    t14.push(e6.index), e6 = e6.return;
  return "$." + t14.join(".");
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var ue4 = ((t14) => (t14[t14.Forwards = 0] = "Forwards", t14[t14.Backwards = 1] = "Backwards", t14))(ue4 || {});
var Te3 = ((o11) => (o11[o11.Less = -1] = "Less", o11[o11.Equal = 0] = "Equal", o11[o11.Greater = 1] = "Greater", o11))(Te3 || {});
var de2 = ((r11) => (r11[r11.SetSelectedIndex = 0] = "SetSelectedIndex", r11[r11.RegisterTab = 1] = "RegisterTab", r11[r11.UnregisterTab = 2] = "UnregisterTab", r11[r11.RegisterPanel = 3] = "RegisterPanel", r11[r11.UnregisterPanel = 4] = "UnregisterPanel", r11))(de2 || {});
var ce3 = { [0](e6, n5) {
  var u8;
  let t14 = A(e6.tabs, (T7) => T7.current), o11 = A(e6.panels, (T7) => T7.current), s17 = t14.filter((T7) => {
    var l11;
    return !((l11 = T7.current) != null && l11.hasAttribute("disabled"));
  }), r11 = { ...e6, tabs: t14, panels: o11 };
  if (n5.index < 0 || n5.index > t14.length - 1) {
    let T7 = u(Math.sign(n5.index - e6.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(n5.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    return s17.length === 0 ? r11 : { ...r11, selectedIndex: u(T7, { [0]: () => t14.indexOf(s17[0]), [1]: () => t14.indexOf(s17[s17.length - 1]) }) };
  }
  let i10 = t14.slice(0, n5.index), b6 = [...t14.slice(n5.index), ...i10].find((T7) => s17.includes(T7));
  if (!b6)
    return r11;
  let c10 = (u8 = t14.indexOf(b6)) != null ? u8 : e6.selectedIndex;
  return c10 === -1 && (c10 = e6.selectedIndex), { ...r11, selectedIndex: c10 };
}, [1](e6, n5) {
  var r11;
  if (e6.tabs.includes(n5.tab))
    return e6;
  let t14 = e6.tabs[e6.selectedIndex], o11 = A([...e6.tabs, n5.tab], (i10) => i10.current), s17 = (r11 = o11.indexOf(t14)) != null ? r11 : e6.selectedIndex;
  return s17 === -1 && (s17 = e6.selectedIndex), { ...e6, tabs: o11, selectedIndex: s17 };
}, [2](e6, n5) {
  return { ...e6, tabs: e6.tabs.filter((t14) => t14 !== n5.tab) };
}, [3](e6, n5) {
  return e6.panels.includes(n5.panel) ? e6 : { ...e6, panels: A([...e6.panels, n5.panel], (t14) => t14.current) };
}, [4](e6, n5) {
  return { ...e6, panels: e6.panels.filter((t14) => t14 !== n5.panel) };
} };
var X5 = (0, import_react40.createContext)(null);
X5.displayName = "TabsDataContext";
function M7(e6) {
  let n5 = (0, import_react40.useContext)(X5);
  if (n5 === null) {
    let t14 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, M7), t14;
  }
  return n5;
}
var $5 = (0, import_react40.createContext)(null);
$5.displayName = "TabsActionsContext";
function q4(e6) {
  let n5 = (0, import_react40.useContext)($5);
  if (n5 === null) {
    let t14 = new Error(`<${e6} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, q4), t14;
  }
  return n5;
}
function fe3(e6, n5) {
  return u(n5.type, ce3, e6, n5);
}
var be3 = import_react40.Fragment;
function me4(e6, n5) {
  let { defaultIndex: t14 = 0, vertical: o11 = false, manual: s17 = false, onChange: r11, selectedIndex: i10 = null, ...R3 } = e6;
  const b6 = o11 ? "vertical" : "horizontal", c10 = s17 ? "manual" : "auto";
  let u8 = i10 !== null, T7 = y(n5), [l11, d15] = (0, import_react40.useReducer)(fe3, { selectedIndex: i10 != null ? i10 : t14, tabs: [], panels: [] }), y5 = (0, import_react40.useMemo)(() => ({ selectedIndex: l11.selectedIndex }), [l11.selectedIndex]), m11 = s2(r11 || (() => {
  })), x6 = s2(l11.tabs), E7 = (0, import_react40.useMemo)(() => ({ orientation: b6, activation: c10, ...l11 }), [b6, c10, l11]), S9 = o4((p9) => (d15({ type: 1, tab: p9 }), () => d15({ type: 2, tab: p9 }))), A6 = o4((p9) => (d15({ type: 3, panel: p9 }), () => d15({ type: 4, panel: p9 }))), L7 = o4((p9) => {
    C4.current !== p9 && m11.current(p9), u8 || d15({ type: 0, index: p9 });
  }), C4 = s2(u8 ? e6.selectedIndex : l11.selectedIndex), N5 = (0, import_react40.useMemo)(() => ({ registerTab: S9, registerPanel: A6, change: L7 }), []);
  l(() => {
    d15({ type: 0, index: i10 != null ? i10 : t14 });
  }, [i10]), l(() => {
    if (C4.current === void 0 || l11.tabs.length <= 0)
      return;
    let p9 = A(l11.tabs, (a11) => a11.current);
    p9.some((a11, f12) => l11.tabs[f12] !== a11) && L7(p9.indexOf(l11.tabs[C4.current]));
  });
  let B4 = { ref: T7 };
  return import_react40.default.createElement(C3, null, import_react40.default.createElement($5.Provider, { value: N5 }, import_react40.default.createElement(X5.Provider, { value: E7 }, E7.tabs.length <= 0 && import_react40.default.createElement(p8, { onFocus: () => {
    var p9, I7;
    for (let a11 of x6.current)
      if (((p9 = a11.current) == null ? void 0 : p9.tabIndex) === 0)
        return (I7 = a11.current) == null || I7.focus(), true;
    return false;
  } }), D({ ourProps: B4, theirProps: R3, slot: y5, defaultTag: be3, name: "Tabs" }))));
}
var Pe2 = "div";
function ge4(e6, n5) {
  let { orientation: t14, selectedIndex: o11 } = M7("Tab.List"), s17 = y(n5);
  return D({ ourProps: { ref: s17, role: "tablist", "aria-orientation": t14 }, theirProps: e6, slot: { selectedIndex: o11 }, defaultTag: Pe2, name: "Tabs.List" });
}
var ye4 = "button";
function xe7(e6, n5) {
  var p9, I7;
  let t14 = I(), { id: o11 = `headlessui-tabs-tab-${t14}`, ...s17 } = e6, { orientation: r11, activation: i10, selectedIndex: R3, tabs: b6, panels: c10 } = M7("Tab"), u8 = q4("Tab"), T7 = M7("Tab"), l11 = (0, import_react40.useRef)(null), d15 = y(l11, n5);
  l(() => u8.registerTab(l11), [u8, l11]);
  let y5 = d12("tabs"), m11 = b6.indexOf(l11);
  m11 === -1 && (m11 = y5);
  let x6 = m11 === R3, E7 = o4((a11) => {
    var j5;
    let f12 = a11();
    if (f12 === N.Success && i10 === "auto") {
      let W = (j5 = e(l11)) == null ? void 0 : j5.activeElement, z5 = T7.tabs.findIndex((te4) => te4.current === W);
      z5 !== -1 && u8.change(z5);
    }
    return f12;
  }), S9 = o4((a11) => {
    let f12 = b6.map((W) => W.current).filter(Boolean);
    if (a11.key === o8.Space || a11.key === o8.Enter) {
      a11.preventDefault(), a11.stopPropagation(), u8.change(m11);
      return;
    }
    switch (a11.key) {
      case o8.Home:
      case o8.PageUp:
        return a11.preventDefault(), a11.stopPropagation(), E7(() => I2(f12, L.First));
      case o8.End:
      case o8.PageDown:
        return a11.preventDefault(), a11.stopPropagation(), E7(() => I2(f12, L.Last));
    }
    if (E7(() => u(r11, { vertical() {
      return a11.key === o8.ArrowUp ? I2(f12, L.Previous | L.WrapAround) : a11.key === o8.ArrowDown ? I2(f12, L.Next | L.WrapAround) : N.Error;
    }, horizontal() {
      return a11.key === o8.ArrowLeft ? I2(f12, L.Previous | L.WrapAround) : a11.key === o8.ArrowRight ? I2(f12, L.Next | L.WrapAround) : N.Error;
    } })) === N.Success)
      return a11.preventDefault();
  }), A6 = (0, import_react40.useRef)(false), L7 = o4(() => {
    var a11;
    A6.current || (A6.current = true, (a11 = l11.current) == null || a11.focus(), u8.change(m11), t3(() => {
      A6.current = false;
    }));
  }), C4 = o4((a11) => {
    a11.preventDefault();
  }), N5 = (0, import_react40.useMemo)(() => ({ selected: x6 }), [x6]), B4 = { ref: d15, onKeyDown: S9, onMouseDown: C4, onClick: L7, id: o11, role: "tab", type: s6(e6, l11), "aria-controls": (I7 = (p9 = c10[m11]) == null ? void 0 : p9.current) == null ? void 0 : I7.id, "aria-selected": x6, tabIndex: x6 ? 0 : -1 };
  return D({ ourProps: B4, theirProps: s17, slot: N5, defaultTag: ye4, name: "Tabs.Tab" });
}
var Ee2 = "div";
function Ae2(e6, n5) {
  let { selectedIndex: t14 } = M7("Tab.Panels"), o11 = y(n5), s17 = (0, import_react40.useMemo)(() => ({ selectedIndex: t14 }), [t14]);
  return D({ ourProps: { ref: o11 }, theirProps: e6, slot: s17, defaultTag: Ee2, name: "Tabs.Panels" });
}
var Re2 = "div";
var Le3 = j.RenderStrategy | j.Static;
function De2(e6, n5) {
  var E7, S9, A6, L7;
  let t14 = I(), { id: o11 = `headlessui-tabs-panel-${t14}`, tabIndex: s17 = 0, ...r11 } = e6, { selectedIndex: i10, tabs: R3, panels: b6 } = M7("Tab.Panel"), c10 = q4("Tab.Panel"), u8 = (0, import_react40.useRef)(null), T7 = y(u8, n5);
  l(() => c10.registerPanel(u8), [c10, u8]);
  let l11 = d12("panels"), d15 = b6.indexOf(u8);
  d15 === -1 && (d15 = l11);
  let y5 = d15 === i10, m11 = (0, import_react40.useMemo)(() => ({ selected: y5 }), [y5]), x6 = { ref: T7, id: o11, role: "tabpanel", "aria-labelledby": (S9 = (E7 = R3[d15]) == null ? void 0 : E7.current) == null ? void 0 : S9.id, tabIndex: y5 ? s17 : -1 };
  return !y5 && ((A6 = r11.unmount) == null || A6) && !((L7 = r11.static) != null && L7) ? import_react40.default.createElement(c2, { as: "span", ...x6 }) : D({ ourProps: x6, theirProps: r11, slot: m11, defaultTag: Re2, features: Le3, visible: y5, name: "Tabs.Panel" });
}
var Se3 = L3(xe7);
var Ie5 = L3(me4);
var Fe4 = L3(ge4);
var he3 = L3(Ae2);
var Me4 = L3(De2);
var rt = Object.assign(Se3, { Group: Ie5, List: Fe4, Panels: he3, Panel: Me4 });

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react41 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l10(r11) {
  let e6 = { called: false };
  return (...t14) => {
    if (!e6.called)
      return e6.called = true, r11(...t14);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d13(t14, ...e6) {
  t14 && e6.length > 0 && t14.classList.add(...e6);
}
function v4(t14, ...e6) {
  t14 && e6.length > 0 && t14.classList.remove(...e6);
}
function F8(t14, e6) {
  let n5 = o2();
  if (!t14)
    return n5.dispose;
  let { transitionDuration: m11, transitionDelay: o11 } = getComputedStyle(t14), [u8, p9] = [m11, o11].map((a11) => {
    let [r11 = 0] = a11.split(",").filter(Boolean).map((i10) => i10.includes("ms") ? parseFloat(i10) : parseFloat(i10) * 1e3).sort((i10, f12) => f12 - i10);
    return r11;
  }), l11 = u8 + p9;
  if (l11 !== 0) {
    n5.group((r11) => {
      r11.setTimeout(() => {
        e6(), r11.dispose();
      }, l11), r11.addEventListener(t14, "transitionrun", (i10) => {
        i10.target === i10.currentTarget && r11.dispose();
      });
    });
    let a11 = n5.addEventListener(t14, "transitionend", (r11) => {
      r11.target === r11.currentTarget && (e6(), a11());
    });
  } else
    e6();
  return n5.add(() => e6()), n5.dispose;
}
function y4(t14, e6, n5, m11) {
  let o11 = n5 ? "enter" : "leave", u8 = o2(), p9 = m11 !== void 0 ? l10(m11) : () => {
  };
  o11 === "enter" && (t14.removeAttribute("hidden"), t14.style.display = "");
  let l11 = u(o11, { enter: () => e6.enter, leave: () => e6.leave }), a11 = u(o11, { enter: () => e6.enterTo, leave: () => e6.leaveTo }), r11 = u(o11, { enter: () => e6.enterFrom, leave: () => e6.leaveFrom });
  return v4(t14, ...e6.enter, ...e6.enterTo, ...e6.enterFrom, ...e6.leave, ...e6.leaveFrom, ...e6.leaveTo, ...e6.entered), d13(t14, ...l11, ...r11), u8.nextFrame(() => {
    v4(t14, ...r11), d13(t14, ...a11), F8(t14, () => (v4(t14, ...l11), d13(t14, ...e6.entered), p9()));
  }), u8.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D7({ container: i10, direction: t14, classes: o11, onStart: s17, onStop: u8 }) {
  let a11 = f6(), c10 = p(), r11 = s2(t14);
  l(() => {
    let e6 = o2();
    c10.add(e6.dispose);
    let n5 = i10.current;
    if (n5 && r11.current !== "idle" && a11.current)
      return e6.dispose(), s17.current(r11.current), e6.add(y4(n5, o11.current, r11.current === "enter", () => {
        e6.dispose(), u8.current(r11.current);
      })), e6.dispose;
  }, [t14]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S8(n5 = "") {
  return n5.split(" ").filter((t14) => t14.trim().length > 1);
}
var A5 = (0, import_react41.createContext)(null);
A5.displayName = "TransitionContext";
var Ee3 = ((r11) => (r11.Visible = "visible", r11.Hidden = "hidden", r11))(Ee3 || {});
function be4() {
  let n5 = (0, import_react41.useContext)(A5);
  if (n5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n5;
}
function Se4() {
  let n5 = (0, import_react41.useContext)(I6);
  if (n5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return n5;
}
var I6 = (0, import_react41.createContext)(null);
I6.displayName = "NestingContext";
function _3(n5) {
  return "children" in n5 ? _3(n5.children) : n5.current.filter(({ el: t14 }) => t14.current !== null).filter(({ state: t14 }) => t14 === "visible").length > 0;
}
function ne5(n5, t14) {
  let r11 = s2(n5), o11 = (0, import_react41.useRef)([]), y5 = f6(), N5 = p(), p9 = o4((s17, e6 = w2.Hidden) => {
    let a11 = o11.current.findIndex(({ el: i10 }) => i10 === s17);
    a11 !== -1 && (u(e6, { [w2.Unmount]() {
      o11.current.splice(a11, 1);
    }, [w2.Hidden]() {
      o11.current[a11].state = "hidden";
    } }), N5.microTask(() => {
      var i10;
      !_3(o11) && y5.current && ((i10 = r11.current) == null || i10.call(r11));
    }));
  }), x6 = o4((s17) => {
    let e6 = o11.current.find(({ el: a11 }) => a11 === s17);
    return e6 ? e6.state !== "visible" && (e6.state = "visible") : o11.current.push({ el: s17, state: "visible" }), () => p9(s17, w2.Unmount);
  }), m11 = (0, import_react41.useRef)([]), c10 = (0, import_react41.useRef)(Promise.resolve()), u8 = (0, import_react41.useRef)({ enter: [], leave: [], idle: [] }), h10 = o4((s17, e6, a11) => {
    m11.current.splice(0), t14 && (t14.chains.current[e6] = t14.chains.current[e6].filter(([i10]) => i10 !== s17)), t14 == null || t14.chains.current[e6].push([s17, new Promise((i10) => {
      m11.current.push(i10);
    })]), t14 == null || t14.chains.current[e6].push([s17, new Promise((i10) => {
      Promise.all(u8.current[e6].map(([l11, T7]) => T7)).then(() => i10());
    })]), e6 === "enter" ? c10.current = c10.current.then(() => t14 == null ? void 0 : t14.wait.current).then(() => a11(e6)) : a11(e6);
  }), v5 = o4((s17, e6, a11) => {
    Promise.all(u8.current[e6].splice(0).map(([i10, l11]) => l11)).then(() => {
      var i10;
      (i10 = m11.current.shift()) == null || i10();
    }).then(() => a11(e6));
  });
  return (0, import_react41.useMemo)(() => ({ children: o11, register: x6, unregister: p9, onStart: h10, onStop: v5, wait: c10, chains: u8 }), [x6, p9, o11, h10, v5, u8, c10]);
}
function xe8() {
}
var Pe3 = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function re4(n5) {
  var r11;
  let t14 = {};
  for (let o11 of Pe3)
    t14[o11] = (r11 = n5[o11]) != null ? r11 : xe8;
  return t14;
}
function Re3(n5) {
  let t14 = (0, import_react41.useRef)(re4(n5));
  return (0, import_react41.useEffect)(() => {
    t14.current = re4(n5);
  }, [n5]), t14;
}
var ye5 = "div";
var ie3 = j.RenderStrategy;
function Ne5(n5, t14) {
  let { beforeEnter: r11, afterEnter: o11, beforeLeave: y5, afterLeave: N5, enter: p9, enterFrom: x6, enterTo: m11, entered: c10, leave: u8, leaveFrom: h10, leaveTo: v5, ...s17 } = n5, e6 = (0, import_react41.useRef)(null), a11 = y(e6, t14), i10 = s17.unmount ? w2.Unmount : w2.Hidden, { show: l11, appear: T7, initial: se5 } = be4(), [g6, M8] = (0, import_react41.useState)(l11 ? "visible" : "hidden"), z5 = Se4(), { register: F9, unregister: L7 } = z5, U5 = (0, import_react41.useRef)(null);
  (0, import_react41.useEffect)(() => F9(e6), [F9, e6]), (0, import_react41.useEffect)(() => {
    if (i10 === w2.Hidden && e6.current) {
      if (l11 && g6 !== "visible") {
        M8("visible");
        return;
      }
      return u(g6, { ["hidden"]: () => L7(e6), ["visible"]: () => F9(e6) });
    }
  }, [g6, e6, F9, L7, l11, i10]);
  let j5 = s2({ enter: S8(p9), enterFrom: S8(x6), enterTo: S8(m11), entered: S8(c10), leave: S8(u8), leaveFrom: S8(h10), leaveTo: S8(v5) }), w6 = Re3({ beforeEnter: r11, afterEnter: o11, beforeLeave: y5, afterLeave: N5 }), k3 = l2();
  (0, import_react41.useEffect)(() => {
    if (k3 && g6 === "visible" && e6.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e6, g6, k3]);
  let G3 = se5 && !T7, ae3 = (() => !k3 || G3 || U5.current === l11 ? "idle" : l11 ? "enter" : "leave")(), H8 = b3(0), le5 = o4((C4) => u(C4, { enter: () => {
    H8.addFlag(d4.Opening), w6.current.beforeEnter();
  }, leave: () => {
    H8.addFlag(d4.Closing), w6.current.beforeLeave();
  }, idle: () => {
  } })), ue5 = o4((C4) => u(C4, { enter: () => {
    H8.removeFlag(d4.Opening), w6.current.afterEnter();
  }, leave: () => {
    H8.removeFlag(d4.Closing), w6.current.afterLeave();
  }, idle: () => {
  } })), O3 = ne5(() => {
    M8("hidden"), L7(e6);
  }, z5);
  D7({ container: e6, classes: j5, direction: ae3, onStart: s2((C4) => {
    O3.onStart(e6, C4, le5);
  }), onStop: s2((C4) => {
    O3.onStop(e6, C4, ue5), C4 === "leave" && !_3(O3) && (M8("hidden"), L7(e6));
  }) }), (0, import_react41.useEffect)(() => {
    G3 && (i10 === w2.Hidden ? U5.current = null : U5.current = l11);
  }, [l11, G3, g6]);
  let B4 = s17, Te4 = { ref: a11 };
  return T7 && l11 && s.isServer && (B4 = { ...B4, className: e2(s17.className, ...j5.current.enter, ...j5.current.enterFrom) }), import_react41.default.createElement(I6.Provider, { value: O3 }, import_react41.default.createElement(c3, { value: u(g6, { ["visible"]: d4.Open, ["hidden"]: d4.Closed }) | H8.flags }, D({ ourProps: Te4, theirProps: B4, defaultTag: ye5, features: ie3, visible: g6 === "visible", name: "Transition.Child" })));
}
function He5(n5, t14) {
  let { show: r11, appear: o11 = false, unmount: y5, ...N5 } = n5, p9 = (0, import_react41.useRef)(null), x6 = y(p9, t14);
  l2();
  let m11 = C();
  if (r11 === void 0 && m11 !== null && (r11 = (m11 & d4.Open) === d4.Open), ![true, false].includes(r11))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c10, u8] = (0, import_react41.useState)(r11 ? "visible" : "hidden"), h10 = ne5(() => {
    u8("hidden");
  }), [v5, s17] = (0, import_react41.useState)(true), e6 = (0, import_react41.useRef)([r11]);
  l(() => {
    v5 !== false && e6.current[e6.current.length - 1] !== r11 && (e6.current.push(r11), s17(false));
  }, [e6, r11]);
  let a11 = (0, import_react41.useMemo)(() => ({ show: r11, appear: o11, initial: v5 }), [r11, o11, v5]);
  (0, import_react41.useEffect)(() => {
    if (r11)
      u8("visible");
    else if (!_3(h10))
      u8("hidden");
    else {
      let l11 = p9.current;
      if (!l11)
        return;
      let T7 = l11.getBoundingClientRect();
      T7.x === 0 && T7.y === 0 && T7.width === 0 && T7.height === 0 && u8("hidden");
    }
  }, [r11, h10]);
  let i10 = { unmount: y5 };
  return import_react41.default.createElement(I6.Provider, { value: h10 }, import_react41.default.createElement(A5.Provider, { value: a11 }, D({ ourProps: { ...i10, as: import_react41.Fragment, children: import_react41.default.createElement(oe3, { ref: x6, ...i10, ...N5 }) }, theirProps: {}, defaultTag: import_react41.Fragment, features: ie3, visible: c10 === "visible", name: "Transition" })));
}
function De3(n5, t14) {
  let r11 = (0, import_react41.useContext)(A5) !== null, o11 = C() !== null;
  return import_react41.default.createElement(import_react41.default.Fragment, null, !r11 && o11 ? import_react41.default.createElement(q5, { ref: t14, ...n5 }) : import_react41.default.createElement(oe3, { ref: t14, ...n5 }));
}
var q5 = L3(He5);
var oe3 = L3(Ne5);
var Fe5 = L3(De3);
var tt2 = Object.assign(q5, { Child: Fe5, Root: q5 });
export {
  Ko as Combobox,
  St as Dialog,
  ve as Disclosure,
  ye as FocusTrap,
  Bt as Listbox,
  ot2 as Menu,
  Lt as Popover,
  te as Portal,
  mt as RadioGroup,
  ve4 as Switch,
  rt as Tab,
  tt2 as Transition
};
//# sourceMappingURL=@headlessui_react.js.map
