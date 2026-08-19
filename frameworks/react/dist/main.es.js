import { jsx as e, jsxs as d, Fragment as g } from "react/jsx-runtime";
import { forwardRef as k, useId as T, isValidElement as ie, cloneElement as de, useRef as I, useState as A, useEffect as F, useCallback as w, useMemo as Q, useContext as ge, createContext as ze, Children as ye } from "react";
const Se = "_button_1pn05_1", be = "_primary_1pn05_29", ve = "_secondary_1pn05_38", xe = "_ghost_1pn05_48", Oe = "_danger_1pn05_57", ke = "_xs_1pn05_67", we = "_sm_1pn05_72", $e = "_md_1pn05_77", Me = "_lg_1pn05_82", Ne = "_iconOnly_1pn05_87", je = "_fullWidth_1pn05_109", H = {
  button: Se,
  primary: be,
  secondary: ve,
  ghost: xe,
  danger: Oe,
  xs: ke,
  sm: we,
  md: $e,
  lg: Me,
  iconOnly: Ne,
  fullWidth: je
}, ca = k(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: a = !1,
  className: i,
  type: c = "button",
  ...f
}, r) {
  const m = [
    H.button,
    H[t],
    H[s],
    n ? H.fullWidth : null,
    a ? H.iconOnly : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: r, type: c, className: m, ...f });
}), Be = "_card_lt977_1", Le = "_elevated_lt977_8", qe = "_outlined_lt977_13", Ce = "_interactive_lt977_17", Ee = "_header_lt977_35", Ie = "_body_lt977_42", Te = "_footer_lt977_52", P = {
  card: Be,
  elevated: Le,
  outlined: qe,
  interactive: Ce,
  header: Ee,
  body: Ie,
  footer: Te
}, ra = k(function({ variant: t = "elevated", header: s, footer: n, className: a, children: i, onKeyDown: c, ...f }, r) {
  const m = t === "interactive";
  return /* @__PURE__ */ d(
    "div",
    {
      ref: r,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (p) => {
        c?.(p), !(!m || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
      },
      className: [P.card, P[t], a].filter(Boolean).join(" "),
      ...f,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: P.header, children: s }),
        /* @__PURE__ */ e("div", { className: P.body, children: i }),
        n != null && /* @__PURE__ */ e("div", { className: P.footer, children: n })
      ]
    }
  );
}), Ae = "_badge_1qyhg_1", De = "_neutral_1qyhg_15", Ve = "_primary_1qyhg_20", He = "_success_1qyhg_25", Pe = "_warning_1qyhg_30", Re = "_danger_1qyhg_35", We = "_solid_1qyhg_41", Ke = "_outline_1qyhg_66", ee = {
  badge: Ae,
  neutral: De,
  primary: Ve,
  success: He,
  warning: Pe,
  danger: Re,
  solid: We,
  outline: Ke
}, _a = k(function({ tone: t = "neutral", variant: s = "soft", className: n, children: a, ...i }, c) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: c,
      className: [ee.badge, ee[t], ee[s], n].filter(Boolean).join(" "),
      ...i,
      children: a
    }
  );
}), da = [
  "check",
  "close",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "search",
  "plus",
  "minus",
  "alert",
  "info",
  "arrow-right",
  "arrow-left",
  "external-link",
  "copy",
  "trash",
  "edit",
  "settings",
  "user",
  "users",
  "download",
  "upload",
  "menu",
  "more-horizontal",
  "mail",
  "lock",
  "eye",
  "eye-off",
  "refresh",
  "calendar",
  "clock",
  "check-circle",
  "x-circle",
  "shield",
  "globe",
  "file",
  "folder",
  "home",
  "key",
  "link"
], Fe = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ d(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, fa = k(function({ name: t, size: s = 16, strokeWidth: n = 2, className: a, ...i }, c) {
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: a,
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...i,
      children: Fe[t]
    }
  );
}), Xe = "_stat_1ks65_1", Ue = "_label_1ks65_8", Ge = "_row_1ks65_16", Je = "_value_1ks65_22", Qe = "_delta_1ks65_28", Ye = "_success_1ks65_33", Ze = "_danger_1ks65_37", et = "_neutral_1ks65_41", tt = "_hint_1ks65_45", q = {
  stat: Xe,
  label: Ue,
  row: Ge,
  value: Je,
  delta: Qe,
  success: Ye,
  danger: Ze,
  neutral: et,
  hint: tt
}, ma = k(function({ label: t, value: s, delta: n, deltaTone: a = "neutral", hint: i, className: c, ...f }, r) {
  return /* @__PURE__ */ d("div", { ref: r, className: [q.stat, c].filter(Boolean).join(" "), ...f, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ d("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[a]].join(" "), children: n })
    ] }),
    i != null && /* @__PURE__ */ e("div", { className: q.hint, children: i })
  ] });
}), st = "_wrap_1x8tx_1", nt = "_table_1x8tx_8", ot = "_start_1x8tx_40", it = "_center_1x8tx_44", at = "_end_1x8tx_48", lt = "_empty_1x8tx_52", R = {
  wrap: st,
  table: nt,
  start: ot,
  center: it,
  end: at,
  empty: lt
};
function ua({ columns: o, rows: t, rowKey: s, empty: n, className: a }) {
  return /* @__PURE__ */ d("div", { className: [R.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ d("table", { className: R.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: o.map((i) => /* @__PURE__ */ e(
        "th",
        {
          className: i.align != null ? R[i.align] : void 0,
          scope: "col",
          children: i.header
        },
        i.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((i) => /* @__PURE__ */ e("tr", { children: o.map((c) => /* @__PURE__ */ e(
        "td",
        {
          className: c.align != null ? R[c.align] : void 0,
          children: c.render != null ? c.render(i) : i[c.key]
        },
        c.key
      )) }, s(i))) })
    ] }),
    t.length === 0 && n != null && /* @__PURE__ */ e("div", { className: R.empty, children: n })
  ] });
}
const ct = "_emptyState_1o7fc_1", rt = "_icon_1o7fc_13", _t = "_title_1o7fc_18", dt = "_description_1o7fc_24", ft = "_action_1o7fc_30", W = {
  emptyState: ct,
  icon: rt,
  title: _t,
  description: dt,
  action: ft
};
function pa({ icon: o, title: t, description: s, action: n, className: a }) {
  return /* @__PURE__ */ d("div", { className: [W.emptyState, a].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: W.icon, children: o }),
    /* @__PURE__ */ e("div", { className: W.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: W.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: W.action, children: n })
  ] });
}
const mt = "_field_w9m4o_1", ut = "_label_w9m4o_8", pt = "_required_w9m4o_14", ht = "_hint_w9m4o_19", gt = "_error_w9m4o_24", K = {
  field: mt,
  label: ut,
  required: pt,
  hint: ht,
  error: gt
};
function ha({ label: o, htmlFor: t, required: s, hint: n, error: a, children: i, className: c }) {
  const f = T(), r = T(), m = a != null ? f : n != null ? r : null, p = ie(i) && m != null ? de(
    i,
    {
      "aria-describedby": [
        i.props["aria-describedby"],
        m
      ].filter((u) => typeof u == "string").join(" ") || void 0,
      "aria-invalid": a != null ? !0 : i.props["aria-invalid"]
    }
  ) : i;
  return /* @__PURE__ */ d("div", { className: [K.field, c].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ d("label", { className: K.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: K.required, "aria-hidden": "true", children: "*" })
    ] }),
    p,
    a != null ? /* @__PURE__ */ e("div", { id: f, className: K.error, role: "alert", children: a }) : n != null ? /* @__PURE__ */ e("div", { id: r, className: K.hint, children: n }) : null
  ] });
}
const zt = "_label_rv97n_1", yt = {
  label: zt
}, ga = k(
  function({ className: t, children: s, ...n }, a) {
    return /* @__PURE__ */ e("label", { ref: a, className: [yt.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), St = "_input_1l72d_1", bt = "_invalid_1l72d_30", vt = "_sm_1l72d_36", xt = "_md_1l72d_41", Ot = "_lg_1l72d_47", te = {
  input: St,
  invalid: bt,
  sm: vt,
  md: xt,
  lg: Ot
}, za = k(function({ size: t = "md", invalid: s = !1, className: n, ...a }, i) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: i,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), kt = "_select_1t5a4_1", wt = "_invalid_1t5a4_32", $t = "_sm_1t5a4_38", Mt = "_md_1t5a4_43", Nt = "_lg_1t5a4_49", se = {
  select: kt,
  invalid: wt,
  sm: $t,
  md: Mt,
  lg: Nt
}, ya = k(function({ size: t = "md", invalid: s = !1, options: n, children: a, className: i, ...c }, f) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: f,
      className: [se.select, se[t], s ? se.invalid : null, i].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c,
      children: n != null ? n.map((r) => /* @__PURE__ */ e("option", { value: r.value, disabled: r.disabled, children: r.label }, r.value)) : a
    }
  );
}), jt = "_checkbox_sx3bj_1", Bt = {
  checkbox: jt
}, Sa = k(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: [Bt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Lt = {
  switch: "_switch_1lrk0_1"
}, qt = k(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      role: "switch",
      className: [Lt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Ct = "_trigger_4qzmh_1", Et = "_tooltip_4qzmh_7", It = "_top_4qzmh_34", Tt = "_right_4qzmh_40", At = "_bottom_4qzmh_46", Dt = "_left_4qzmh_52", Vt = "_arrow_4qzmh_58", U = {
  trigger: Ct,
  tooltip: Et,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: It,
  right: Tt,
  bottom: At,
  left: Dt,
  arrow: Vt
};
function ba({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: a
}) {
  const i = T(), c = I(null), [f, r] = A(!1), m = () => {
    c.current = window.setTimeout(() => r(!0), n);
  }, p = () => {
    c.current !== null && (window.clearTimeout(c.current), c.current = null), r(!1);
  };
  F(() => {
    if (!f) return;
    const z = (y) => {
      y.key === "Escape" && p();
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [f]);
  const u = ie(t) ? de(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        f ? i : null
      ].filter((z) => typeof z == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ d(
    "span",
    {
      className: [U.trigger, a].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: p,
      onFocus: m,
      onBlur: p,
      children: [
        u,
        f && /* @__PURE__ */ d(
          "span",
          {
            role: "tooltip",
            id: i,
            className: [U.tooltip, U[s]].filter(Boolean).join(" "),
            children: [
              o,
              /* @__PURE__ */ e("span", { className: U.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Ht = "_dialog_gp2l5_1", Pt = "_sm_gp2l5_30", Rt = "_md_gp2l5_34", Wt = "_lg_gp2l5_38", Kt = "_header_gp2l5_42", Ft = "_title_gp2l5_51", Xt = "_description_gp2l5_58", Ut = "_close_gp2l5_65", Gt = "_body_gp2l5_84", Jt = "_footer_gp2l5_90", B = {
  dialog: Ht,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: Pt,
  md: Rt,
  lg: Wt,
  header: Kt,
  title: Ft,
  description: Xt,
  close: Ut,
  body: Gt,
  footer: Jt
};
function va({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: a,
  footer: i,
  size: c = "md",
  className: f
}) {
  const r = I(null), m = T(), p = T();
  return F(() => {
    const u = r.current;
    u && (o && !u.open ? u.showModal() : !o && u.open && u.close());
  }, [o]), /* @__PURE__ */ d(
    "dialog",
    {
      ref: r,
      className: [B.dialog, B[c], f].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? m : void 0,
      "aria-describedby": n ? p : void 0,
      children: [
        s && /* @__PURE__ */ d("header", { className: B.header, children: [
          /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ e("h2", { id: m, className: B.title, children: s }),
            n && /* @__PURE__ */ e("p", { id: p, className: B.description, children: n })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: B.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { className: B.body, children: a }),
        i && /* @__PURE__ */ e("footer", { className: B.footer, children: i })
      ]
    }
  );
}
const Qt = "_viewport_1ex2n_1", Yt = "_topLeft_1ex2n_13", Zt = "_topRight_1ex2n_20", es = "_bottomLeft_1ex2n_25", ts = "_toast_1ex2n_30", ss = "_leaving_1ex2n_61", ns = "_info_1ex2n_77", os = "_success_1ex2n_82", is = "_warning_1ex2n_87", as = "_danger_1ex2n_92", ls = "_content_1ex2n_97", cs = "_title_1ex2n_102", rs = "_description_1ex2n_125", _s = "_dismiss_1ex2n_132", ds = "_actions_1ex2n_151", fs = "_action_1ex2n_151", ms = "_cancel_1ex2n_159", us = "_progress_1ex2n_195", O = {
  viewport: Qt,
  topLeft: Yt,
  topRight: Zt,
  bottomLeft: es,
  toast: ts,
  "se-toast-in": "_se-toast-in_1ex2n_1",
  leaving: ss,
  "se-toast-out": "_se-toast-out_1ex2n_1",
  info: ns,
  success: os,
  warning: is,
  danger: as,
  content: ls,
  title: cs,
  description: rs,
  dismiss: _s,
  actions: ds,
  action: fs,
  cancel: ms,
  progress: us,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function xa() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const ps = 200, hs = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Oa({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: a
}) {
  const [i, c] = A([]), [f, r] = A(!1), m = I([]), p = I(/* @__PURE__ */ new Map()), u = I(!1), z = I(0), y = (_) => {
    u.current = _, r(_);
  }, h = w((_) => {
    const l = p.current.get(_);
    l && (window.clearTimeout(l.timeoutId), l.remaining = Math.max(0, l.remaining - (Date.now() - l.startedAt)));
  }, []), S = w((_) => {
    const l = p.current.get(_);
    l && (window.clearTimeout(l.timeoutId), p.current.delete(_));
  }, []), $ = w(
    (_) => {
      S(_), c((l) => {
        const b = l.filter((M) => M.id !== _);
        return m.current = b, b;
      });
    },
    [S]
  ), v = w(
    (_) => {
      const l = m.current.find((b) => b.id === _);
      !l || l.leaving || (l.onAutoClose?.(), $(_));
    },
    [$]
  ), x = w(
    (_) => {
      const l = p.current.get(_);
      !l || l.remaining <= 0 || (l.startedAt = Date.now(), l.timeoutId = window.setTimeout(() => v(_), l.remaining));
    },
    [v]
  ), Y = w(() => {
    u.current || p.current.forEach((_, l) => h(l)), y(!0);
  }, [h]), Z = w(() => {
    p.current.forEach((_, l) => x(l)), y(!1);
  }, [x]);
  F(() => {
    if (!n) return;
    const _ = () => {
      document.hidden ? Y() : Z();
    };
    return document.addEventListener("visibilitychange", _), () => document.removeEventListener("visibilitychange", _);
  }, [n, Y, Z]);
  const X = w(
    (_) => {
      const l = m.current.find((b) => b.id === _);
      !l || l.leaving || (l.onDismiss?.(), c((b) => {
        const M = b.map((D) => D.id === _ ? { ...D, leaving: !0 } : D);
        return m.current = M, M;
      }), window.setTimeout(() => $(_), ps));
    },
    [$]
  ), ae = w(
    (_) => {
      if (_.durationMs <= 0) return;
      const l = {
        remaining: _.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(_.id, l), u.current || x(_.id);
    },
    [x]
  ), le = w(
    (_) => {
      const l = m.current.find((M) => M.id === _.id), b = {
        id: _.id ?? ++z.current,
        title: _.title,
        description: _.description,
        tone: _.tone ?? "info",
        durationMs: _.durationMs ?? t,
        action: _.action,
        cancel: _.cancel,
        dismissible: _.dismissible ?? !0,
        closeOnClick: _.closeOnClick ?? !1,
        showProgress: _.showProgress ?? !1,
        position: _.position ?? s,
        onDismiss: _.onDismiss,
        onAutoClose: _.onAutoClose
      };
      c((M) => {
        const D = l ? M.map((ce) => ce.id === b.id ? { ...b, leaving: !1 } : ce) : [...M, b];
        return m.current = D, D;
      }), l && S(b.id), ae(b);
    },
    [t, s, ae, S]
  ), me = Q(() => ({ toast: le }), [le]), ue = Q(
    () => Array.from(/* @__PURE__ */ new Set([s, ...i.map((_) => _.position)])),
    [s, i]
  ), pe = n ? Y : void 0, he = n ? Z : void 0;
  return /* @__PURE__ */ d(fe.Provider, { value: me, children: [
    o,
    ue.map((_) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          O.viewport,
          O[hs[_]],
          a
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: pe,
        onMouseLeave: he,
        children: i.filter((l) => l.position === _).map((l) => /* @__PURE__ */ d(
          "div",
          {
            role: l.tone === "danger" ? "alert" : "status",
            "data-paused": f ? "true" : "false",
            "data-clickable": l.closeOnClick ? "true" : "false",
            className: [
              O.toast,
              O[l.tone],
              l.leaving ? O.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: l.closeOnClick ? () => X(l.id) : void 0,
            children: [
              /* @__PURE__ */ d("div", { className: O.content, children: [
                /* @__PURE__ */ e("div", { className: O.title, children: l.title }),
                l.description && /* @__PURE__ */ e("div", { className: O.description, children: l.description }),
                (l.action || l.cancel) && /* @__PURE__ */ d("div", { className: O.actions, children: [
                  l.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: O.action,
                      onClick: () => {
                        l.action?.onClick?.(), X(l.id);
                      },
                      children: l.action.label
                    }
                  ),
                  l.cancel && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: O.cancel,
                      onClick: () => {
                        l.cancel?.onClick?.(), X(l.id);
                      },
                      children: l.cancel.label
                    }
                  )
                ] })
              ] }),
              l.dismissible && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: O.dismiss,
                  onClick: () => X(l.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              l.showProgress && l.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: O.progress,
                  style: { animationDuration: `${l.durationMs}ms` }
                }
              )
            ]
          },
          l.id
        ))
      },
      _
    ))
  ] });
}
const gs = "_alert_1i49n_1", zs = "_info_1i49n_15", ys = "_success_1i49n_20", Ss = "_warning_1i49n_25", bs = "_danger_1i49n_30", vs = "_soft_1i49n_37", xs = "_outline_1i49n_44", Os = "_solid_1i49n_52", ks = "_icon_1i49n_66", ws = "_content_1i49n_72", $s = "_title_1i49n_77", Ms = "_body_1i49n_83", Ns = "_dismiss_1i49n_88", L = {
  alert: gs,
  info: zs,
  success: ys,
  warning: Ss,
  danger: bs,
  soft: vs,
  outline: xs,
  solid: Os,
  icon: ks,
  content: ws,
  title: $s,
  body: Ms,
  dismiss: Ns
};
function ka({
  tone: o = "info",
  variant: t = "soft",
  title: s,
  icon: n,
  children: a,
  dismissible: i = !1,
  onDismiss: c,
  className: f
}) {
  const [r, m] = A(!1);
  if (r)
    return null;
  const p = () => {
    m(!0), c?.();
  };
  return /* @__PURE__ */ d(
    "div",
    {
      role: "alert",
      className: [L.alert, L[o], L[t], f].filter(Boolean).join(" "),
      children: [
        n != null && /* @__PURE__ */ e("span", { className: L.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ d("div", { className: L.content, children: [
          s && /* @__PURE__ */ e("div", { className: L.title, children: s }),
          a && /* @__PURE__ */ e("div", { className: L.body, children: a })
        ] }),
        i && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: L.dismiss,
            onClick: p,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const js = "_skeleton_35ckz_1", Bs = "_text_35ckz_35", Ls = "_circle_35ckz_40", qs = "_rect_35ckz_44", re = {
  skeleton: js,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Bs,
  circle: Ls,
  rect: qs
};
function wa({
  variant: o = "text",
  width: t,
  height: s,
  className: n
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (a.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [re.skeleton, re[o], n].filter(Boolean).join(" "),
      style: a
    }
  );
}
const Cs = "_row_15fbq_1", Es = "_start_15fbq_7", Is = "_center_15fbq_11", Ts = "_end_15fbq_15", As = "_stretch_15fbq_19", Ds = "_baseline_15fbq_23", Vs = "_noWrap_15fbq_51", G = {
  row: Cs,
  start: Es,
  center: Is,
  end: Ts,
  stretch: As,
  baseline: Ds,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: Vs
};
function $a({
  gap: o,
  align: t = "stretch",
  justify: s = "start",
  wrap: n = !0,
  className: a,
  style: i,
  ...c
}) {
  const f = {
    ...o != null ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...i
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        G.row,
        G[t],
        G[`justify-${s}`],
        n ? null : G.noWrap,
        a
      ].filter(Boolean).join(" "),
      style: f,
      ...c
    }
  );
}
const Hs = "_column_1pa86_1", Ps = "_Size1_1pa86_6", Rs = "_Size2_1pa86_7", Ws = "_Size3_1pa86_8", Ks = "_Size4_1pa86_9", Fs = "_Size5_1pa86_10", Xs = "_Size6_1pa86_11", Us = "_Size7_1pa86_12", Gs = "_Size8_1pa86_13", Js = "_Size9_1pa86_14", Qs = "_Size10_1pa86_15", Ys = "_Size11_1pa86_16", Zs = "_Size12_1pa86_17", en = "_Offset1_1pa86_18", tn = "_Offset2_1pa86_19", sn = "_Offset3_1pa86_20", nn = "_Offset4_1pa86_21", on = "_Offset5_1pa86_22", an = "_Offset6_1pa86_23", ln = "_Offset7_1pa86_24", cn = "_Offset8_1pa86_25", rn = "_Offset9_1pa86_26", _n = "_Offset10_1pa86_27", dn = "_Offset11_1pa86_28", fn = "_smSize1_1pa86_31", mn = "_smSize2_1pa86_32", un = "_smSize3_1pa86_33", pn = "_smSize4_1pa86_34", hn = "_smSize5_1pa86_35", gn = "_smSize6_1pa86_36", zn = "_smSize7_1pa86_37", yn = "_smSize8_1pa86_38", Sn = "_smSize9_1pa86_39", bn = "_smSize10_1pa86_40", vn = "_smSize11_1pa86_41", xn = "_smSize12_1pa86_42", On = "_smOffset1_1pa86_43", kn = "_smOffset2_1pa86_44", wn = "_smOffset3_1pa86_45", $n = "_smOffset4_1pa86_46", Mn = "_smOffset5_1pa86_47", Nn = "_smOffset6_1pa86_48", jn = "_smOffset7_1pa86_49", Bn = "_smOffset8_1pa86_50", Ln = "_smOffset9_1pa86_51", qn = "_smOffset10_1pa86_52", Cn = "_smOffset11_1pa86_53", En = "_mdSize1_1pa86_57", In = "_mdSize2_1pa86_58", Tn = "_mdSize3_1pa86_59", An = "_mdSize4_1pa86_60", Dn = "_mdSize5_1pa86_61", Vn = "_mdSize6_1pa86_62", Hn = "_mdSize7_1pa86_63", Pn = "_mdSize8_1pa86_64", Rn = "_mdSize9_1pa86_65", Wn = "_mdSize10_1pa86_66", Kn = "_mdSize11_1pa86_67", Fn = "_mdSize12_1pa86_68", Xn = "_mdOffset1_1pa86_69", Un = "_mdOffset2_1pa86_70", Gn = "_mdOffset3_1pa86_71", Jn = "_mdOffset4_1pa86_72", Qn = "_mdOffset5_1pa86_73", Yn = "_mdOffset6_1pa86_74", Zn = "_mdOffset7_1pa86_75", eo = "_mdOffset8_1pa86_76", to = "_mdOffset9_1pa86_77", so = "_mdOffset10_1pa86_78", no = "_mdOffset11_1pa86_79", oo = "_lgSize1_1pa86_83", io = "_lgSize2_1pa86_84", ao = "_lgSize3_1pa86_85", lo = "_lgSize4_1pa86_86", co = "_lgSize5_1pa86_87", ro = "_lgSize6_1pa86_88", _o = "_lgSize7_1pa86_89", fo = "_lgSize8_1pa86_90", mo = "_lgSize9_1pa86_91", uo = "_lgSize10_1pa86_92", po = "_lgSize11_1pa86_93", ho = "_lgSize12_1pa86_94", go = "_lgOffset1_1pa86_95", zo = "_lgOffset2_1pa86_96", yo = "_lgOffset3_1pa86_97", So = "_lgOffset4_1pa86_98", bo = "_lgOffset5_1pa86_99", vo = "_lgOffset6_1pa86_100", xo = "_lgOffset7_1pa86_101", Oo = "_lgOffset8_1pa86_102", ko = "_lgOffset9_1pa86_103", wo = "_lgOffset10_1pa86_104", $o = "_lgOffset11_1pa86_105", Mo = "_xlSize1_1pa86_109", No = "_xlSize2_1pa86_110", jo = "_xlSize3_1pa86_111", Bo = "_xlSize4_1pa86_112", Lo = "_xlSize5_1pa86_113", qo = "_xlSize6_1pa86_114", Co = "_xlSize7_1pa86_115", Eo = "_xlSize8_1pa86_116", Io = "_xlSize9_1pa86_117", To = "_xlSize10_1pa86_118", Ao = "_xlSize11_1pa86_119", Do = "_xlSize12_1pa86_120", Vo = "_xlOffset1_1pa86_121", Ho = "_xlOffset2_1pa86_122", Po = "_xlOffset3_1pa86_123", Ro = "_xlOffset4_1pa86_124", Wo = "_xlOffset5_1pa86_125", Ko = "_xlOffset6_1pa86_126", Fo = "_xlOffset7_1pa86_127", Xo = "_xlOffset8_1pa86_128", Uo = "_xlOffset9_1pa86_129", Go = "_xlOffset10_1pa86_130", Jo = "_xlOffset11_1pa86_131", ne = {
  column: Hs,
  Size1: Ps,
  Size2: Rs,
  Size3: Ws,
  Size4: Ks,
  Size5: Fs,
  Size6: Xs,
  Size7: Us,
  Size8: Gs,
  Size9: Js,
  Size10: Qs,
  Size11: Ys,
  Size12: Zs,
  Offset1: en,
  Offset2: tn,
  Offset3: sn,
  Offset4: nn,
  Offset5: on,
  Offset6: an,
  Offset7: ln,
  Offset8: cn,
  Offset9: rn,
  Offset10: _n,
  Offset11: dn,
  smSize1: fn,
  smSize2: mn,
  smSize3: un,
  smSize4: pn,
  smSize5: hn,
  smSize6: gn,
  smSize7: zn,
  smSize8: yn,
  smSize9: Sn,
  smSize10: bn,
  smSize11: vn,
  smSize12: xn,
  smOffset1: On,
  smOffset2: kn,
  smOffset3: wn,
  smOffset4: $n,
  smOffset5: Mn,
  smOffset6: Nn,
  smOffset7: jn,
  smOffset8: Bn,
  smOffset9: Ln,
  smOffset10: qn,
  smOffset11: Cn,
  mdSize1: En,
  mdSize2: In,
  mdSize3: Tn,
  mdSize4: An,
  mdSize5: Dn,
  mdSize6: Vn,
  mdSize7: Hn,
  mdSize8: Pn,
  mdSize9: Rn,
  mdSize10: Wn,
  mdSize11: Kn,
  mdSize12: Fn,
  mdOffset1: Xn,
  mdOffset2: Un,
  mdOffset3: Gn,
  mdOffset4: Jn,
  mdOffset5: Qn,
  mdOffset6: Yn,
  mdOffset7: Zn,
  mdOffset8: eo,
  mdOffset9: to,
  mdOffset10: so,
  mdOffset11: no,
  lgSize1: oo,
  lgSize2: io,
  lgSize3: ao,
  lgSize4: lo,
  lgSize5: co,
  lgSize6: ro,
  lgSize7: _o,
  lgSize8: fo,
  lgSize9: mo,
  lgSize10: uo,
  lgSize11: po,
  lgSize12: ho,
  lgOffset1: go,
  lgOffset2: zo,
  lgOffset3: yo,
  lgOffset4: So,
  lgOffset5: bo,
  lgOffset6: vo,
  lgOffset7: xo,
  lgOffset8: Oo,
  lgOffset9: ko,
  lgOffset10: wo,
  lgOffset11: $o,
  xlSize1: Mo,
  xlSize2: No,
  xlSize3: jo,
  xlSize4: Bo,
  xlSize5: Lo,
  xlSize6: qo,
  xlSize7: Co,
  xlSize8: Eo,
  xlSize9: Io,
  xlSize10: To,
  xlSize11: Ao,
  xlSize12: Do,
  xlOffset1: Vo,
  xlOffset2: Ho,
  xlOffset3: Po,
  xlOffset4: Ro,
  xlOffset5: Wo,
  xlOffset6: Ko,
  xlOffset7: Fo,
  xlOffset8: Xo,
  xlOffset9: Uo,
  xlOffset10: Go,
  xlOffset11: Jo
}, Qo = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Ma({ className: o, ...t }) {
  const s = [ne.column];
  for (const [h, S, $] of Qo) {
    const v = t[S], x = t[$];
    v != null && s.push(ne[`${h}Size${v}`]), x != null && x > 0 && s.push(ne[`${h}Offset${x}`]);
  }
  const { size: n, offset: a, sizeSm: i, offsetSm: c, sizeMd: f, offsetMd: r, sizeLg: m, offsetLg: p, sizeXl: u, offsetXl: z, ...y } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...y });
}
const Yo = "_layout_1pcye_1", Zo = "_row_1pcye_7", _e = {
  layout: Yo,
  row: Zo
}, ei = "_footer_14whp_1", ti = {
  footer: ei
};
function si({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [ti.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const ni = "_header_2mimk_1", oi = {
  header: ni
};
function ii({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [oi.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const ai = "_sidebar_1ktmd_1", li = "_left_1ktmd_9", ci = "_right_1ktmd_13", ri = "_collapsed_1ktmd_17", _i = "_responsive_1ktmd_25", di = "_overlay_1ktmd_33", fi = "_mask_1ktmd_53", C = {
  sidebar: ai,
  left: li,
  right: ci,
  collapsed: ri,
  responsive: _i,
  overlay: di,
  mask: fi
};
function mi({
  position: o = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: n = !1,
  onClose: a,
  className: i,
  children: c,
  ...f
}) {
  return F(() => {
    if (!n || !t || a == null) return;
    const r = (m) => {
      m.key === "Escape" && a();
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [n, t, a]), /* @__PURE__ */ d(g, { children: [
    n && t ? /* @__PURE__ */ e("div", { className: `${C.mask} se-layout-mask`, "aria-hidden": "true", onClick: a }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          C.sidebar,
          o === "right" ? C.right : C.left,
          t ? null : C.collapsed,
          s ? C.responsive : null,
          n ? [C.overlay, "se-sidebar--overlay"] : null,
          i
        ].flat().filter(Boolean).join(" "),
        ...f,
        children: c
      }
    )
  ] });
}
function Na({ className: o, children: t, ...s }) {
  const n = [], a = [], i = [], c = [], f = [];
  return ye.forEach(t, (r) => {
    if (!ie(r)) {
      i.push(r);
      return;
    }
    r.type === ii ? n.push(r) : r.type === si ? a.push(r) : r.type === mi ? (r.props.position === "right" ? f : c).push(r) : i.push(r);
  }), /* @__PURE__ */ d("div", { className: [_e.layout, o].filter(Boolean).join(" "), ...s, children: [
    n,
    /* @__PURE__ */ d("div", { className: _e.row, children: [
      c,
      i,
      f
    ] }),
    a
  ] });
}
const ui = "_body_1tpk6_1", pi = {
  body: ui
};
function ja({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [pi.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const hi = "_track_1s0q1_1", gi = "_bar_1s0q1_10", zi = "_primary_1s0q1_18", yi = "_success_1s0q1_22", Si = "_warning_1s0q1_26", bi = "_danger_1s0q1_30", vi = "_indeterminate_1s0q1_34", xi = "_circular_1s0q1_48", Oi = "_fill_1s0q1_61", N = {
  track: hi,
  bar: gi,
  primary: zi,
  success: yi,
  warning: Si,
  danger: bi,
  indeterminate: vi,
  "se-progress-slide": "_se-progress-slide_1s0q1_1",
  circular: xi,
  fill: Oi,
  "se-progress-spin": "_se-progress-spin_1s0q1_1"
};
function Ba({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: a = "linear",
  size: i = 64,
  className: c,
  ...f
}) {
  const r = t > 0 ? Math.min(t, Math.max(0, o)) : 0, m = t > 0 ? r / t * 100 : 0;
  if (a === "circular") {
    const u = Math.max(i / 2 - 6, 2), z = 2 * Math.PI * u, y = z * (n ? 0.75 : 1), h = n ? 0 : z * (1 - m / 100);
    return /* @__PURE__ */ d(
      "svg",
      {
        width: i,
        height: i,
        viewBox: `0 0 ${i} ${i}`,
        role: "progressbar",
        "aria-label": f["aria-label"],
        "aria-labelledby": f["aria-labelledby"],
        "aria-valuenow": n ? void 0 : Math.round(r),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: f.id,
        style: f.style,
        className: [
          N.circular,
          N[s],
          n ? N.indeterminate : null,
          c
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e(
            "circle",
            {
              className: N.track,
              cx: i / 2,
              cy: i / 2,
              r: u
            }
          ),
          /* @__PURE__ */ e(
            "circle",
            {
              className: N.fill,
              cx: i / 2,
              cy: i / 2,
              r: u,
              strokeDasharray: `${y} ${z}`,
              strokeDashoffset: h
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": n ? void 0 : Math.round(r),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        N.track,
        N[s],
        n ? N.indeterminate : null,
        c
      ].filter(Boolean).join(" "),
      ...f,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: N.bar,
          style: n ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const ki = "_wrapper_t239v_1", wi = {
  wrapper: ki
};
function La({
  defaultTheme: o = "light",
  onChange: t,
  label: s = "Dark mode",
  className: n
}) {
  const [a, i] = A(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : o === "dark");
  F(() => {
    document.documentElement.dataset.theme = a ? "dark" : "light";
  }, []);
  const c = (f) => {
    const r = f.target.checked;
    i(r), document.documentElement.dataset.theme = r ? "dark" : "light", t?.(r ? "dark" : "light");
  };
  return /* @__PURE__ */ d("label", { className: [wi.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(qt, { checked: a, onChange: c })
  ] });
}
const $i = "_avatar_52omy_1", Mi = "_sm_52omy_12", Ni = "_md_52omy_18", ji = "_lg_52omy_24", Bi = "_initials_52omy_30", Li = "_image_52omy_45", qi = "_status_52omy_52", Ci = "_online_52omy_72", Ei = "_offline_52omy_76", Ii = "_away_52omy_80", V = {
  avatar: $i,
  sm: Mi,
  md: Ni,
  lg: ji,
  initials: Bi,
  image: Li,
  status: qi,
  online: Ci,
  offline: Ei,
  away: Ii
}, J = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function Ti(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Ai(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return J[t % J.length] ?? J[0];
}
function qa({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: a,
  className: i
}) {
  const c = Q(() => o ? Ti(o) : "?", [o]), f = Q(() => o ? Ai(o) : J[0], [o]), r = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: f }, children: c });
  return /* @__PURE__ */ d(
    "span",
    {
      className: [
        V.avatar,
        V[n],
        a ? V[a] : null,
        i
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? o ?? "avatar",
      children: [
        r,
        a && /* @__PURE__ */ e("span", { className: V.status, "aria-hidden": "true" })
      ]
    }
  );
}
const Di = "_root_1k1gx_1", Vi = "_tabList_1k1gx_6", Hi = "_underline_1k1gx_12", Pi = "_pills_1k1gx_16", Ri = "_tab_1k1gx_6", Wi = "_active_1k1gx_36", Ki = "_disabled_1k1gx_50", Fi = "_panel_1k1gx_64", E = {
  root: Di,
  tabList: Vi,
  underline: Hi,
  pills: Pi,
  tab: Ri,
  active: Wi,
  disabled: Ki,
  panel: Fi
};
function Ca({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: a = "underline",
  className: i
}) {
  const c = T(), f = I(null), [r, m] = A(s ?? o[0]?.key ?? ""), p = t ?? r, u = (h) => {
    m(h), n?.(h);
  }, z = (h) => {
    const S = o.filter((x) => !x.disabled), $ = S.findIndex((x) => x.key === p);
    let v = -1;
    h.key === "ArrowRight" ? v = ($ + 1) % S.length : h.key === "ArrowLeft" ? v = ($ - 1 + S.length) % S.length : h.key === "Home" ? v = 0 : h.key === "End" && (v = S.length - 1), v >= 0 && (h.preventDefault(), f.current?.querySelector(
      `[data-tab-key="${CSS.escape(S[v]?.key ?? "")}"]`
    )?.focus(), u(S[v]?.key ?? ""));
  }, y = o.find((h) => h.key === p);
  return /* @__PURE__ */ d("div", { className: [E.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: f,
        role: "tablist",
        className: [E.tabList, E[a]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: o.map((h) => {
          const S = h.key === p;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": S,
              "aria-controls": `${c}-panel-${h.key}`,
              tabIndex: S ? 0 : -1,
              disabled: h.disabled,
              className: [
                E.tab,
                S ? E.active : null,
                h.disabled ? E.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => u(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    y && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${c}-panel-${y.key}`,
        "aria-labelledby": `${c}-tab-${y.key}`,
        className: E.panel,
        children: y.content
      }
    )
  ] });
}
const Xi = "_root_1rcwz_1", Ui = "_item_1rcwz_9", Gi = "_heading_1rcwz_13", Ji = "_trigger_1rcwz_17", Qi = "_disabled_1rcwz_34", Yi = "_title_1rcwz_48", Zi = "_chevron_1rcwz_52", ea = "_open_1rcwz_59", ta = "_content_1rcwz_63", j = {
  root: Xi,
  item: Ui,
  heading: Gi,
  trigger: Ji,
  disabled: Qi,
  title: Yi,
  chevron: Zi,
  open: ea,
  content: ta
};
function Ea({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: a,
  className: i
}) {
  const c = T(), [f, r] = A(n ?? []), m = s ?? f, p = (u) => {
    const z = m.includes(u) ? m.filter((y) => y !== u) : t ? [...m, u] : [u];
    r(z), a?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [j.root, i].filter(Boolean).join(" "), children: o.map((u) => {
    const z = m.includes(u.key), y = `${c}-panel-${u.key}`, h = `${c}-trigger-${u.key}`;
    return /* @__PURE__ */ d("div", { className: j.item, children: [
      /* @__PURE__ */ e("h3", { className: j.heading, children: /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": z,
          "aria-controls": y,
          disabled: u.disabled,
          className: [
            j.trigger,
            u.disabled ? j.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(u.key),
          children: [
            /* @__PURE__ */ e("span", { className: j.title, children: u.title }),
            /* @__PURE__ */ e("span", { className: [j.chevron, z ? j.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: y,
          role: "region",
          "aria-labelledby": h,
          hidden: !z,
          className: j.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const sa = "_textarea_t3a4a_1", na = "_sm_t3a4a_24", oa = "_md_t3a4a_28", ia = "_lg_t3a4a_32", oe = {
  textarea: sa,
  sm: na,
  md: oa,
  lg: ia,
  "resize-none": "_resize-none_t3a4a_36",
  "resize-vertical": "_resize-vertical_t3a4a_40",
  "resize-horizontal": "_resize-horizontal_t3a4a_44",
  "resize-both": "_resize-both_t3a4a_48"
}, Ia = k(function({ size: t = "md", resize: s = "none", className: n, ...a }, i) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: i,
      className: [
        oe.textarea,
        oe[t],
        oe[`resize-${s}`],
        n
      ].filter(Boolean).join(" "),
      ...a
    }
  );
});
export {
  Ea as Accordion,
  ka as Alert,
  qa as Avatar,
  _a as Badge,
  ja as Body,
  ca as Button,
  ra as Card,
  Sa as Checkbox,
  Ma as Column,
  va as Dialog,
  pa as EmptyState,
  ha as Field,
  si as Footer,
  ii as Header,
  fa as Icon,
  za as Input,
  ga as Label,
  Na as Layout,
  Ba as Progress,
  $a as Row,
  ya as Select,
  mi as Sidebar,
  wa as Skeleton,
  ma as Stat,
  qt as Switch,
  ua as Table,
  Ca as Tabs,
  Ia as Textarea,
  La as ThemeSwitcher,
  Oa as ToastProvider,
  ba as Tooltip,
  da as iconNames,
  xa as useToast
};
