import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as le, cloneElement as de, useRef as q, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
const ye = "_button_1pkcx_1", Se = "_primary_1pkcx_29", be = "_secondary_1pkcx_38", ve = "_ghost_1pkcx_48", ke = "_danger_1pkcx_57", Oe = "_xs_1pkcx_67", $e = "_sm_1pkcx_73", we = "_md_1pkcx_79", Me = "_lg_1pkcx_85", Ne = "_xl_1pkcx_91", je = "_iconOnly_1pkcx_97", Be = "_fullWidth_1pkcx_123", H = {
  button: ye,
  primary: Se,
  secondary: be,
  ghost: ve,
  danger: ke,
  xs: Oe,
  sm: $e,
  md: we,
  lg: Me,
  xl: Ne,
  iconOnly: je,
  fullWidth: Be
}, Mi = $(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: i = !1,
  className: l,
  type: c = "button",
  ...r
}, _) {
  const m = [
    H.button,
    H[t],
    H[s],
    n ? H.fullWidth : null,
    i ? H.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: c, className: m, ...r });
}), Le = "_card_lt977_1", Ce = "_elevated_lt977_8", Ee = "_outlined_lt977_13", Ie = "_interactive_lt977_17", qe = "_header_lt977_35", Te = "_body_lt977_42", Ae = "_footer_lt977_52", P = {
  card: Le,
  elevated: Ce,
  outlined: Ee,
  interactive: Ie,
  header: qe,
  body: Te,
  footer: Ae
}, Ni = $(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: c, ...r }, _) {
  const m = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: _,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (u) => {
        c?.(u), !(!m || u.key !== "Enter" && u.key !== " ") && (u.preventDefault(), u.currentTarget.click());
      },
      className: [P.card, P[t], i].filter(Boolean).join(" "),
      ...r,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: P.header, children: s }),
        /* @__PURE__ */ e("div", { className: P.body, children: l }),
        n != null && /* @__PURE__ */ e("div", { className: P.footer, children: n })
      ]
    }
  );
}), De = "_badge_s3h6c_1", Ve = "_xs_s3h6c_14", He = "_sm_s3h6c_19", Pe = "_md_s3h6c_24", Re = "_lg_s3h6c_29", We = "_xl_s3h6c_34", Ke = "_neutral_s3h6c_40", Fe = "_primary_s3h6c_45", Xe = "_success_s3h6c_50", Ue = "_warning_s3h6c_55", Ge = "_danger_s3h6c_60", Je = "_solid_s3h6c_66", Qe = "_outline_s3h6c_91", U = {
  badge: De,
  xs: Ve,
  sm: He,
  md: Pe,
  lg: Re,
  xl: We,
  neutral: Ke,
  primary: Fe,
  success: Xe,
  warning: Ue,
  danger: Ge,
  solid: Je,
  outline: Qe
}, ji = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...c }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], i].filter(Boolean).join(" "),
      ...c,
      children: l
    }
  );
}), Ye = "_xs_1uch7_2", Ze = "_sm_1uch7_7", et = "_md_1uch7_1", tt = "_lg_1uch7_17", st = "_xl_1uch7_22", nt = {
  xs: Ye,
  sm: Ze,
  md: et,
  lg: tt,
  xl: st
}, Bi = [
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
], ot = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(g, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ f(g, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Li = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, c) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [r ? nt[s] : null, i].filter(Boolean).join(" "),
      width: r ? void 0 : s,
      height: r ? void 0 : s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: ot[t]
    }
  );
}), lt = "_stat_1ks65_1", it = "_label_1ks65_8", at = "_row_1ks65_16", ct = "_value_1ks65_22", _t = "_delta_1ks65_28", rt = "_success_1ks65_33", dt = "_danger_1ks65_37", ft = "_neutral_1ks65_41", mt = "_hint_1ks65_45", C = {
  stat: lt,
  label: it,
  row: at,
  value: ct,
  delta: _t,
  success: rt,
  danger: dt,
  neutral: ft,
  hint: mt
}, Ci = $(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: c, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [C.stat, c].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: C.label, children: t }),
    /* @__PURE__ */ f("div", { className: C.row, children: [
      /* @__PURE__ */ e("div", { className: C.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [C.delta, C[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: C.hint, children: l })
  ] });
}), ut = "_wrap_1x8tx_1", pt = "_table_1x8tx_8", ht = "_start_1x8tx_40", gt = "_center_1x8tx_44", zt = "_end_1x8tx_48", xt = "_empty_1x8tx_52", R = {
  wrap: ut,
  table: pt,
  start: ht,
  center: gt,
  end: zt,
  empty: xt
};
function Ei({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [R.wrap, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f("table", { className: R.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: o.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: l.align != null ? R[l.align] : void 0,
          scope: "col",
          children: l.header
        },
        l.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: o.map((c) => /* @__PURE__ */ e(
        "td",
        {
          className: c.align != null ? R[c.align] : void 0,
          children: c.render != null ? c.render(l) : l[c.key]
        },
        c.key
      )) }, s(l))) })
    ] }),
    t.length === 0 && n != null && /* @__PURE__ */ e("div", { className: R.empty, children: n })
  ] });
}
const yt = "_emptyState_1o7fc_1", St = "_icon_1o7fc_13", bt = "_title_1o7fc_18", vt = "_description_1o7fc_24", kt = "_action_1o7fc_30", W = {
  emptyState: yt,
  icon: St,
  title: bt,
  description: vt,
  action: kt
};
function Ii({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [W.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: W.icon, children: o }),
    /* @__PURE__ */ e("div", { className: W.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: W.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: W.action, children: n })
  ] });
}
const Ot = "_field_w9m4o_1", $t = "_label_w9m4o_8", wt = "_required_w9m4o_14", Mt = "_hint_w9m4o_19", Nt = "_error_w9m4o_24", K = {
  field: Ot,
  label: $t,
  required: wt,
  hint: Mt,
  error: Nt
};
function qi({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: c }) {
  const r = T(), _ = T(), m = i != null ? r : n != null ? _ : null, u = le(l) && m != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        m
      ].filter((p) => typeof p == "string").join(" ") || void 0,
      "aria-invalid": i != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ f("div", { className: [K.field, c].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ f("label", { className: K.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: K.required, "aria-hidden": "true", children: "*" })
    ] }),
    u,
    i != null ? /* @__PURE__ */ e("div", { id: r, className: K.error, role: "alert", children: i }) : n != null ? /* @__PURE__ */ e("div", { id: _, className: K.hint, children: n }) : null
  ] });
}
const jt = "_label_rv97n_1", Bt = {
  label: jt
}, Ti = $(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Bt.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Lt = "_input_109wo_1", Ct = "_invalid_109wo_31", Et = "_xs_109wo_37", It = "_sm_109wo_43", qt = "_md_109wo_49", Tt = "_lg_109wo_55", At = "_xl_109wo_61", te = {
  input: Lt,
  invalid: Ct,
  xs: Et,
  sm: It,
  md: qt,
  lg: Tt,
  xl: At
}, Ai = $(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...i
    }
  );
}), Dt = "_select_6ltg7_1", Vt = "_invalid_6ltg7_33", Ht = "_xs_6ltg7_39", Pt = "_sm_6ltg7_45", Rt = "_md_6ltg7_51", Wt = "_lg_6ltg7_57", Kt = "_xl_6ltg7_63", se = {
  select: Dt,
  invalid: Vt,
  xs: Ht,
  sm: Pt,
  md: Rt,
  lg: Wt,
  xl: Kt
}, Di = $(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...c }, r) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: r,
      className: [se.select, se[t], s ? se.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c,
      children: n != null ? n.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : i
    }
  );
}), Ft = "_checkbox_sx3bj_1", Xt = {
  checkbox: Ft
}, Vi = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: [Xt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Ut = {
  switch: "_switch_1lrk0_1"
}, Gt = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      role: "switch",
      className: [Ut.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Jt = "_trigger_4qzmh_1", Qt = "_tooltip_4qzmh_7", Yt = "_top_4qzmh_34", Zt = "_right_4qzmh_40", es = "_bottom_4qzmh_46", ts = "_left_4qzmh_52", ss = "_arrow_4qzmh_58", G = {
  trigger: Jt,
  tooltip: Qt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: Yt,
  right: Zt,
  bottom: es,
  left: ts,
  arrow: ss
};
function Hi({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: i
}) {
  const l = T(), c = q(null), [r, _] = A(!1), m = () => {
    c.current = window.setTimeout(() => _(!0), n);
  }, u = () => {
    c.current !== null && (window.clearTimeout(c.current), c.current = null), _(!1);
  };
  F(() => {
    if (!r) return;
    const z = (x) => {
      x.key === "Escape" && u();
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [r]);
  const p = le(t) ? de(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        r ? l : null
      ].filter((z) => typeof z == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ f(
    "span",
    {
      className: [G.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: u,
      onFocus: m,
      onBlur: u,
      children: [
        p,
        r && /* @__PURE__ */ f(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [G.tooltip, G[s]].filter(Boolean).join(" "),
            children: [
              o,
              /* @__PURE__ */ e("span", { className: G.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const ns = "_dialog_gp2l5_1", os = "_sm_gp2l5_30", ls = "_md_gp2l5_34", is = "_lg_gp2l5_38", as = "_header_gp2l5_42", cs = "_title_gp2l5_51", _s = "_description_gp2l5_58", rs = "_close_gp2l5_65", ds = "_body_gp2l5_84", fs = "_footer_gp2l5_90", B = {
  dialog: ns,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: os,
  md: ls,
  lg: is,
  header: as,
  title: cs,
  description: _s,
  close: rs,
  body: ds,
  footer: fs
};
function Pi({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: i,
  footer: l,
  size: c = "md",
  className: r
}) {
  const _ = q(null), m = T(), u = T();
  return F(() => {
    const p = _.current;
    p && (o && !p.open ? p.showModal() : !o && p.open && p.close());
  }, [o]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: _,
      className: [B.dialog, B[c], r].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? m : void 0,
      "aria-describedby": n ? u : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: B.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: m, className: B.title, children: s }),
            n && /* @__PURE__ */ e("p", { id: u, className: B.description, children: n })
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
        i && /* @__PURE__ */ e("div", { className: B.body, children: i }),
        l && /* @__PURE__ */ e("footer", { className: B.footer, children: l })
      ]
    }
  );
}
const ms = "_viewport_1ex2n_1", us = "_topLeft_1ex2n_13", ps = "_topRight_1ex2n_20", hs = "_bottomLeft_1ex2n_25", gs = "_toast_1ex2n_30", zs = "_leaving_1ex2n_61", xs = "_info_1ex2n_77", ys = "_success_1ex2n_82", Ss = "_warning_1ex2n_87", bs = "_danger_1ex2n_92", vs = "_content_1ex2n_97", ks = "_title_1ex2n_102", Os = "_description_1ex2n_125", $s = "_dismiss_1ex2n_132", ws = "_actions_1ex2n_151", Ms = "_action_1ex2n_151", Ns = "_cancel_1ex2n_159", js = "_progress_1ex2n_195", k = {
  viewport: ms,
  topLeft: us,
  topRight: ps,
  bottomLeft: hs,
  toast: gs,
  "se-toast-in": "_se-toast-in_1ex2n_1",
  leaving: zs,
  "se-toast-out": "_se-toast-out_1ex2n_1",
  info: xs,
  success: ys,
  warning: Ss,
  danger: bs,
  content: vs,
  title: ks,
  description: Os,
  dismiss: $s,
  actions: ws,
  action: Ms,
  cancel: Ns,
  progress: js,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Ri() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const Bs = 200, Ls = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Wi({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: i
}) {
  const [l, c] = A([]), [r, _] = A(!1), m = q([]), u = q(/* @__PURE__ */ new Map()), p = q(!1), z = q(0), x = (d) => {
    p.current = d, _(d);
  }, h = w((d) => {
    const a = u.current.get(d);
    a && (window.clearTimeout(a.timeoutId), a.remaining = Math.max(0, a.remaining - (Date.now() - a.startedAt)));
  }, []), y = w((d) => {
    const a = u.current.get(d);
    a && (window.clearTimeout(a.timeoutId), u.current.delete(d));
  }, []), M = w(
    (d) => {
      y(d), c((a) => {
        const S = a.filter((N) => N.id !== d);
        return m.current = S, S;
      });
    },
    [y]
  ), b = w(
    (d) => {
      const a = m.current.find((S) => S.id === d);
      !a || a.leaving || (a.onAutoClose?.(), M(d));
    },
    [M]
  ), v = w(
    (d) => {
      const a = u.current.get(d);
      !a || a.remaining <= 0 || (a.startedAt = Date.now(), a.timeoutId = window.setTimeout(() => b(d), a.remaining));
    },
    [b]
  ), Z = w(() => {
    p.current || u.current.forEach((d, a) => h(a)), x(!0);
  }, [h]), ee = w(() => {
    u.current.forEach((d, a) => v(a)), x(!1);
  }, [v]);
  F(() => {
    if (!n) return;
    const d = () => {
      document.hidden ? Z() : ee();
    };
    return document.addEventListener("visibilitychange", d), () => document.removeEventListener("visibilitychange", d);
  }, [n, Z, ee]);
  const X = w(
    (d) => {
      const a = m.current.find((S) => S.id === d);
      !a || a.leaving || (a.onDismiss?.(), c((S) => {
        const N = S.map((D) => D.id === d ? { ...D, leaving: !0 } : D);
        return m.current = N, N;
      }), window.setTimeout(() => M(d), Bs));
    },
    [M]
  ), ie = w(
    (d) => {
      if (d.durationMs <= 0) return;
      const a = {
        remaining: d.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      u.current.set(d.id, a), p.current || v(d.id);
    },
    [v]
  ), ae = w(
    (d) => {
      const a = m.current.find((N) => N.id === d.id), S = {
        id: d.id ?? ++z.current,
        title: d.title,
        description: d.description,
        tone: d.tone ?? "info",
        durationMs: d.durationMs ?? t,
        action: d.action,
        cancel: d.cancel,
        dismissible: d.dismissible ?? !0,
        closeOnClick: d.closeOnClick ?? !1,
        showProgress: d.showProgress ?? !1,
        position: d.position ?? s,
        onDismiss: d.onDismiss,
        onAutoClose: d.onAutoClose
      };
      c((N) => {
        const D = a ? N.map((ce) => ce.id === S.id ? { ...S, leaving: !1 } : ce) : [...N, S];
        return m.current = D, D;
      }), a && y(S.id), ie(S);
    },
    [t, s, ie, y]
  ), me = Y(() => ({ toast: ae }), [ae]), ue = Y(
    () => Array.from(/* @__PURE__ */ new Set([s, ...l.map((d) => d.position)])),
    [s, l]
  ), pe = n ? Z : void 0, he = n ? ee : void 0;
  return /* @__PURE__ */ f(fe.Provider, { value: me, children: [
    o,
    ue.map((d) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          k.viewport,
          k[Ls[d]],
          i
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: pe,
        onMouseLeave: he,
        children: l.filter((a) => a.position === d).map((a) => /* @__PURE__ */ f(
          "div",
          {
            role: a.tone === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": a.closeOnClick ? "true" : "false",
            className: [
              k.toast,
              k[a.tone],
              a.leaving ? k.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: a.closeOnClick ? () => X(a.id) : void 0,
            children: [
              /* @__PURE__ */ f("div", { className: k.content, children: [
                /* @__PURE__ */ e("div", { className: k.title, children: a.title }),
                a.description && /* @__PURE__ */ e("div", { className: k.description, children: a.description }),
                (a.action || a.cancel) && /* @__PURE__ */ f("div", { className: k.actions, children: [
                  a.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: k.action,
                      onClick: () => {
                        a.action?.onClick?.(), X(a.id);
                      },
                      children: a.action.label
                    }
                  ),
                  a.cancel && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: k.cancel,
                      onClick: () => {
                        a.cancel?.onClick?.(), X(a.id);
                      },
                      children: a.cancel.label
                    }
                  )
                ] })
              ] }),
              a.dismissible && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: k.dismiss,
                  onClick: () => X(a.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              a.showProgress && a.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: k.progress,
                  style: { animationDuration: `${a.durationMs}ms` }
                }
              )
            ]
          },
          a.id
        ))
      },
      d
    ))
  ] });
}
const Cs = "_alert_1i49n_1", Es = "_info_1i49n_15", Is = "_success_1i49n_20", qs = "_warning_1i49n_25", Ts = "_danger_1i49n_30", As = "_soft_1i49n_37", Ds = "_outline_1i49n_44", Vs = "_solid_1i49n_52", Hs = "_icon_1i49n_66", Ps = "_content_1i49n_72", Rs = "_title_1i49n_77", Ws = "_body_1i49n_83", Ks = "_dismiss_1i49n_88", L = {
  alert: Cs,
  info: Es,
  success: Is,
  warning: qs,
  danger: Ts,
  soft: As,
  outline: Ds,
  solid: Vs,
  icon: Hs,
  content: Ps,
  title: Rs,
  body: Ws,
  dismiss: Ks
};
function Ki({
  tone: o = "info",
  variant: t = "soft",
  title: s,
  icon: n,
  children: i,
  dismissible: l = !1,
  onDismiss: c,
  className: r
}) {
  const [_, m] = A(!1);
  if (_)
    return null;
  const u = () => {
    m(!0), c?.();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      role: "alert",
      className: [L.alert, L[o], L[t], r].filter(Boolean).join(" "),
      children: [
        n != null && /* @__PURE__ */ e("span", { className: L.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ f("div", { className: L.content, children: [
          s && /* @__PURE__ */ e("div", { className: L.title, children: s }),
          i && /* @__PURE__ */ e("div", { className: L.body, children: i })
        ] }),
        l && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: L.dismiss,
            onClick: u,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Fs = "_skeleton_35ckz_1", Xs = "_text_35ckz_35", Us = "_circle_35ckz_40", Gs = "_rect_35ckz_44", _e = {
  skeleton: Fs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Xs,
  circle: Us,
  rect: Gs
};
function Fi({
  variant: o = "text",
  width: t,
  height: s,
  className: n
}) {
  const i = {};
  return t !== void 0 && (i.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (i.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [_e.skeleton, _e[o], n].filter(Boolean).join(" "),
      style: i
    }
  );
}
const Js = "_row_15fbq_1", Qs = "_start_15fbq_7", Ys = "_center_15fbq_11", Zs = "_end_15fbq_15", en = "_stretch_15fbq_19", tn = "_baseline_15fbq_23", sn = "_noWrap_15fbq_51", J = {
  row: Js,
  start: Qs,
  center: Ys,
  end: Zs,
  stretch: en,
  baseline: tn,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: sn
};
function Xi({
  gap: o,
  align: t = "stretch",
  justify: s = "start",
  wrap: n = !0,
  className: i,
  style: l,
  ...c
}) {
  const r = {
    ...o != null ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        J.row,
        J[t],
        J[`justify-${s}`],
        n ? null : J.noWrap,
        i
      ].filter(Boolean).join(" "),
      style: r,
      ...c
    }
  );
}
const nn = "_column_1pa86_1", on = "_Size1_1pa86_6", ln = "_Size2_1pa86_7", an = "_Size3_1pa86_8", cn = "_Size4_1pa86_9", _n = "_Size5_1pa86_10", rn = "_Size6_1pa86_11", dn = "_Size7_1pa86_12", fn = "_Size8_1pa86_13", mn = "_Size9_1pa86_14", un = "_Size10_1pa86_15", pn = "_Size11_1pa86_16", hn = "_Size12_1pa86_17", gn = "_Offset1_1pa86_18", zn = "_Offset2_1pa86_19", xn = "_Offset3_1pa86_20", yn = "_Offset4_1pa86_21", Sn = "_Offset5_1pa86_22", bn = "_Offset6_1pa86_23", vn = "_Offset7_1pa86_24", kn = "_Offset8_1pa86_25", On = "_Offset9_1pa86_26", $n = "_Offset10_1pa86_27", wn = "_Offset11_1pa86_28", Mn = "_smSize1_1pa86_31", Nn = "_smSize2_1pa86_32", jn = "_smSize3_1pa86_33", Bn = "_smSize4_1pa86_34", Ln = "_smSize5_1pa86_35", Cn = "_smSize6_1pa86_36", En = "_smSize7_1pa86_37", In = "_smSize8_1pa86_38", qn = "_smSize9_1pa86_39", Tn = "_smSize10_1pa86_40", An = "_smSize11_1pa86_41", Dn = "_smSize12_1pa86_42", Vn = "_smOffset1_1pa86_43", Hn = "_smOffset2_1pa86_44", Pn = "_smOffset3_1pa86_45", Rn = "_smOffset4_1pa86_46", Wn = "_smOffset5_1pa86_47", Kn = "_smOffset6_1pa86_48", Fn = "_smOffset7_1pa86_49", Xn = "_smOffset8_1pa86_50", Un = "_smOffset9_1pa86_51", Gn = "_smOffset10_1pa86_52", Jn = "_smOffset11_1pa86_53", Qn = "_mdSize1_1pa86_57", Yn = "_mdSize2_1pa86_58", Zn = "_mdSize3_1pa86_59", eo = "_mdSize4_1pa86_60", to = "_mdSize5_1pa86_61", so = "_mdSize6_1pa86_62", no = "_mdSize7_1pa86_63", oo = "_mdSize8_1pa86_64", lo = "_mdSize9_1pa86_65", io = "_mdSize10_1pa86_66", ao = "_mdSize11_1pa86_67", co = "_mdSize12_1pa86_68", _o = "_mdOffset1_1pa86_69", ro = "_mdOffset2_1pa86_70", fo = "_mdOffset3_1pa86_71", mo = "_mdOffset4_1pa86_72", uo = "_mdOffset5_1pa86_73", po = "_mdOffset6_1pa86_74", ho = "_mdOffset7_1pa86_75", go = "_mdOffset8_1pa86_76", zo = "_mdOffset9_1pa86_77", xo = "_mdOffset10_1pa86_78", yo = "_mdOffset11_1pa86_79", So = "_lgSize1_1pa86_83", bo = "_lgSize2_1pa86_84", vo = "_lgSize3_1pa86_85", ko = "_lgSize4_1pa86_86", Oo = "_lgSize5_1pa86_87", $o = "_lgSize6_1pa86_88", wo = "_lgSize7_1pa86_89", Mo = "_lgSize8_1pa86_90", No = "_lgSize9_1pa86_91", jo = "_lgSize10_1pa86_92", Bo = "_lgSize11_1pa86_93", Lo = "_lgSize12_1pa86_94", Co = "_lgOffset1_1pa86_95", Eo = "_lgOffset2_1pa86_96", Io = "_lgOffset3_1pa86_97", qo = "_lgOffset4_1pa86_98", To = "_lgOffset5_1pa86_99", Ao = "_lgOffset6_1pa86_100", Do = "_lgOffset7_1pa86_101", Vo = "_lgOffset8_1pa86_102", Ho = "_lgOffset9_1pa86_103", Po = "_lgOffset10_1pa86_104", Ro = "_lgOffset11_1pa86_105", Wo = "_xlSize1_1pa86_109", Ko = "_xlSize2_1pa86_110", Fo = "_xlSize3_1pa86_111", Xo = "_xlSize4_1pa86_112", Uo = "_xlSize5_1pa86_113", Go = "_xlSize6_1pa86_114", Jo = "_xlSize7_1pa86_115", Qo = "_xlSize8_1pa86_116", Yo = "_xlSize9_1pa86_117", Zo = "_xlSize10_1pa86_118", el = "_xlSize11_1pa86_119", tl = "_xlSize12_1pa86_120", sl = "_xlOffset1_1pa86_121", nl = "_xlOffset2_1pa86_122", ol = "_xlOffset3_1pa86_123", ll = "_xlOffset4_1pa86_124", il = "_xlOffset5_1pa86_125", al = "_xlOffset6_1pa86_126", cl = "_xlOffset7_1pa86_127", _l = "_xlOffset8_1pa86_128", rl = "_xlOffset9_1pa86_129", dl = "_xlOffset10_1pa86_130", fl = "_xlOffset11_1pa86_131", ne = {
  column: nn,
  Size1: on,
  Size2: ln,
  Size3: an,
  Size4: cn,
  Size5: _n,
  Size6: rn,
  Size7: dn,
  Size8: fn,
  Size9: mn,
  Size10: un,
  Size11: pn,
  Size12: hn,
  Offset1: gn,
  Offset2: zn,
  Offset3: xn,
  Offset4: yn,
  Offset5: Sn,
  Offset6: bn,
  Offset7: vn,
  Offset8: kn,
  Offset9: On,
  Offset10: $n,
  Offset11: wn,
  smSize1: Mn,
  smSize2: Nn,
  smSize3: jn,
  smSize4: Bn,
  smSize5: Ln,
  smSize6: Cn,
  smSize7: En,
  smSize8: In,
  smSize9: qn,
  smSize10: Tn,
  smSize11: An,
  smSize12: Dn,
  smOffset1: Vn,
  smOffset2: Hn,
  smOffset3: Pn,
  smOffset4: Rn,
  smOffset5: Wn,
  smOffset6: Kn,
  smOffset7: Fn,
  smOffset8: Xn,
  smOffset9: Un,
  smOffset10: Gn,
  smOffset11: Jn,
  mdSize1: Qn,
  mdSize2: Yn,
  mdSize3: Zn,
  mdSize4: eo,
  mdSize5: to,
  mdSize6: so,
  mdSize7: no,
  mdSize8: oo,
  mdSize9: lo,
  mdSize10: io,
  mdSize11: ao,
  mdSize12: co,
  mdOffset1: _o,
  mdOffset2: ro,
  mdOffset3: fo,
  mdOffset4: mo,
  mdOffset5: uo,
  mdOffset6: po,
  mdOffset7: ho,
  mdOffset8: go,
  mdOffset9: zo,
  mdOffset10: xo,
  mdOffset11: yo,
  lgSize1: So,
  lgSize2: bo,
  lgSize3: vo,
  lgSize4: ko,
  lgSize5: Oo,
  lgSize6: $o,
  lgSize7: wo,
  lgSize8: Mo,
  lgSize9: No,
  lgSize10: jo,
  lgSize11: Bo,
  lgSize12: Lo,
  lgOffset1: Co,
  lgOffset2: Eo,
  lgOffset3: Io,
  lgOffset4: qo,
  lgOffset5: To,
  lgOffset6: Ao,
  lgOffset7: Do,
  lgOffset8: Vo,
  lgOffset9: Ho,
  lgOffset10: Po,
  lgOffset11: Ro,
  xlSize1: Wo,
  xlSize2: Ko,
  xlSize3: Fo,
  xlSize4: Xo,
  xlSize5: Uo,
  xlSize6: Go,
  xlSize7: Jo,
  xlSize8: Qo,
  xlSize9: Yo,
  xlSize10: Zo,
  xlSize11: el,
  xlSize12: tl,
  xlOffset1: sl,
  xlOffset2: nl,
  xlOffset3: ol,
  xlOffset4: ll,
  xlOffset5: il,
  xlOffset6: al,
  xlOffset7: cl,
  xlOffset8: _l,
  xlOffset9: rl,
  xlOffset10: dl,
  xlOffset11: fl
}, ml = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Ui({ className: o, ...t }) {
  const s = [ne.column];
  for (const [h, y, M] of ml) {
    const b = t[y], v = t[M];
    b != null && s.push(ne[`${h}Size${b}`]), v != null && v > 0 && s.push(ne[`${h}Offset${v}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: c, sizeMd: r, offsetMd: _, sizeLg: m, offsetLg: u, sizeXl: p, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const ul = "_layout_1pcye_1", pl = "_row_1pcye_7", re = {
  layout: ul,
  row: pl
}, hl = "_footer_14whp_1", gl = {
  footer: hl
};
function zl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [gl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const xl = "_header_2mimk_1", yl = {
  header: xl
};
function Sl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [yl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const bl = "_sidebar_1ktmd_1", vl = "_left_1ktmd_9", kl = "_right_1ktmd_13", Ol = "_collapsed_1ktmd_17", $l = "_responsive_1ktmd_25", wl = "_overlay_1ktmd_33", Ml = "_mask_1ktmd_53", E = {
  sidebar: bl,
  left: vl,
  right: kl,
  collapsed: Ol,
  responsive: $l,
  overlay: wl,
  mask: Ml
};
function Nl({
  position: o = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: n = !1,
  onClose: i,
  className: l,
  children: c,
  ...r
}) {
  return F(() => {
    if (!n || !t || i == null) return;
    const _ = (m) => {
      m.key === "Escape" && i();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [n, t, i]), /* @__PURE__ */ f(g, { children: [
    n && t ? /* @__PURE__ */ e("div", { className: `${E.mask} se-layout-mask`, "aria-hidden": "true", onClick: i }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          E.sidebar,
          o === "right" ? E.right : E.left,
          t ? null : E.collapsed,
          s ? E.responsive : null,
          n ? [E.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...r,
        children: c
      }
    )
  ] });
}
function Gi({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], c = [], r = [];
  return xe.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === Sl ? n.push(_) : _.type === zl ? i.push(_) : _.type === Nl ? (_.props.position === "right" ? r : c).push(_) : l.push(_);
  }), /* @__PURE__ */ f("div", { className: [re.layout, o].filter(Boolean).join(" "), ...s, children: [
    n,
    /* @__PURE__ */ f("div", { className: re.row, children: [
      c,
      l,
      r
    ] }),
    i
  ] });
}
const jl = "_body_1tpk6_1", Bl = {
  body: jl
};
function Ji({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Bl.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Ll = "_track_1mkoz_1", Cl = "_bar_1mkoz_31", El = "_primary_1mkoz_39", Il = "_success_1mkoz_43", ql = "_warning_1mkoz_47", Tl = "_danger_1mkoz_51", Al = "_indeterminate_1mkoz_55", Dl = "_circular_1mkoz_69", Vl = "_fill_1mkoz_109", O = {
  track: Ll,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Cl,
  primary: El,
  success: Il,
  warning: ql,
  danger: Tl,
  indeterminate: Al,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Dl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Vl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function Qi({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: i = "linear",
  size: l = "md",
  className: c,
  ...r
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, o)) : 0, m = t > 0 ? _ / t * 100 : 0;
  if (i === "circular") {
    const u = typeof l == "string", p = 2, z = 10.5, x = 2 * Math.PI * z, h = x * (n ? 0.75 : 1), y = n ? 0 : x * (1 - m / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: u ? void 0 : l,
        height: u ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": r["aria-label"],
        "aria-labelledby": r["aria-labelledby"],
        "aria-valuenow": n ? void 0 : Math.round(_),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: r.id,
        style: r.style,
        className: [
          O.circular,
          O[s],
          u ? O[`circular-${l}`] : null,
          n ? O.indeterminate : null,
          c
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: O.track, cx: 12, cy: 12, r: z, strokeWidth: p }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: O.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: p,
              strokeDasharray: `${h} ${x}`,
              strokeDashoffset: y
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
      "aria-valuenow": n ? void 0 : Math.round(_),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        O.track,
        O[s],
        typeof l == "string" ? O[`linear-${l}`] : null,
        n ? O.indeterminate : null,
        c
      ].filter(Boolean).join(" "),
      ...r,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: O.bar,
          style: n ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const Hl = "_wrapper_t239v_1", Pl = {
  wrapper: Hl
};
function Yi({
  defaultTheme: o = "light",
  onChange: t,
  label: s = "Dark mode",
  className: n
}) {
  const [i, l] = A(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : o === "dark");
  F(() => {
    document.documentElement.dataset.theme = i ? "dark" : "light";
  }, []);
  const c = (r) => {
    const _ = r.target.checked;
    l(_), document.documentElement.dataset.theme = _ ? "dark" : "light", t?.(_ ? "dark" : "light");
  };
  return /* @__PURE__ */ f("label", { className: [Pl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Gt, { checked: i, onChange: c })
  ] });
}
const Rl = "_avatar_17s76_1", Wl = "_xs_17s76_12", Kl = "_sm_17s76_18", Fl = "_md_17s76_24", Xl = "_lg_17s76_30", Ul = "_xl_17s76_36", Gl = "_initials_17s76_42", Jl = "_image_17s76_57", Ql = "_status_17s76_64", Yl = "_online_17s76_84", Zl = "_offline_17s76_88", ei = "_away_17s76_92", V = {
  avatar: Rl,
  xs: Wl,
  sm: Kl,
  md: Fl,
  lg: Xl,
  xl: Ul,
  initials: Gl,
  image: Jl,
  status: Ql,
  online: Yl,
  offline: Zl,
  away: ei
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function ti(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function si(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Q[t % Q.length] ?? Q[0];
}
function Zi({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const c = Y(() => o ? ti(o) : "?", [o]), r = Y(() => o ? si(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: c });
  return /* @__PURE__ */ f(
    "span",
    {
      className: [
        V.avatar,
        V[n],
        i ? V[i] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? o ?? "avatar",
      children: [
        _,
        i && /* @__PURE__ */ e("span", { className: V.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ni = "_root_1k1gx_1", oi = "_tabList_1k1gx_6", li = "_underline_1k1gx_12", ii = "_pills_1k1gx_16", ai = "_tab_1k1gx_6", ci = "_active_1k1gx_36", _i = "_disabled_1k1gx_50", ri = "_panel_1k1gx_64", I = {
  root: ni,
  tabList: oi,
  underline: li,
  pills: ii,
  tab: ai,
  active: ci,
  disabled: _i,
  panel: ri
};
function ea({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  className: l
}) {
  const c = T(), r = q(null), [_, m] = A(s ?? o[0]?.key ?? ""), u = t ?? _, p = (h) => {
    m(h), n?.(h);
  }, z = (h) => {
    const y = o.filter((v) => !v.disabled), M = y.findIndex((v) => v.key === u);
    let b = -1;
    h.key === "ArrowRight" ? b = (M + 1) % y.length : h.key === "ArrowLeft" ? b = (M - 1 + y.length) % y.length : h.key === "Home" ? b = 0 : h.key === "End" && (b = y.length - 1), b >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[b]?.key ?? "")}"]`
    )?.focus(), p(y[b]?.key ?? ""));
  }, x = o.find((h) => h.key === u);
  return /* @__PURE__ */ f("div", { className: [I.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [I.tabList, I[i]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: o.map((h) => {
          const y = h.key === u;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": y,
              "aria-controls": `${c}-panel-${h.key}`,
              tabIndex: y ? 0 : -1,
              disabled: h.disabled,
              className: [
                I.tab,
                y ? I.active : null,
                h.disabled ? I.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => p(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    x && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${c}-panel-${x.key}`,
        "aria-labelledby": `${c}-tab-${x.key}`,
        className: I.panel,
        children: x.content
      }
    )
  ] });
}
const di = "_root_1rcwz_1", fi = "_item_1rcwz_9", mi = "_heading_1rcwz_13", ui = "_trigger_1rcwz_17", pi = "_disabled_1rcwz_34", hi = "_title_1rcwz_48", gi = "_chevron_1rcwz_52", zi = "_open_1rcwz_59", xi = "_content_1rcwz_63", j = {
  root: di,
  item: fi,
  heading: mi,
  trigger: ui,
  disabled: pi,
  title: hi,
  chevron: gi,
  open: zi,
  content: xi
};
function ta({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const c = T(), [r, _] = A(n ?? []), m = s ?? r, u = (p) => {
    const z = m.includes(p) ? m.filter((x) => x !== p) : t ? [...m, p] : [p];
    _(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [j.root, l].filter(Boolean).join(" "), children: o.map((p) => {
    const z = m.includes(p.key), x = `${c}-panel-${p.key}`, h = `${c}-trigger-${p.key}`;
    return /* @__PURE__ */ f("div", { className: j.item, children: [
      /* @__PURE__ */ e("h3", { className: j.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: p.disabled,
          className: [
            j.trigger,
            p.disabled ? j.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(p.key),
          children: [
            /* @__PURE__ */ e("span", { className: j.title, children: p.title }),
            /* @__PURE__ */ e("span", { className: [j.chevron, z ? j.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": h,
          hidden: !z,
          className: j.content,
          children: p.content
        }
      )
    ] }, p.key);
  }) });
}
const yi = "_textarea_jj8z9_1", Si = "_xs_jj8z9_25", bi = "_sm_jj8z9_30", vi = "_md_jj8z9_35", ki = "_lg_jj8z9_40", Oi = "_xl_jj8z9_45", oe = {
  textarea: yi,
  xs: Si,
  sm: bi,
  md: vi,
  lg: ki,
  xl: Oi,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, sa = $(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      className: [
        oe.textarea,
        oe[t],
        oe[`resize-${s}`],
        n
      ].filter(Boolean).join(" "),
      ...i
    }
  );
});
export {
  ta as Accordion,
  Ki as Alert,
  Zi as Avatar,
  ji as Badge,
  Ji as Body,
  Mi as Button,
  Ni as Card,
  Vi as Checkbox,
  Ui as Column,
  Pi as Dialog,
  Ii as EmptyState,
  qi as Field,
  zl as Footer,
  Sl as Header,
  Li as Icon,
  Ai as Input,
  Ti as Label,
  Gi as Layout,
  Qi as Progress,
  Xi as Row,
  Di as Select,
  Nl as Sidebar,
  Fi as Skeleton,
  Ci as Stat,
  Gt as Switch,
  Ei as Table,
  ea as Tabs,
  sa as Textarea,
  Yi as ThemeSwitcher,
  Wi as ToastProvider,
  Hi as Tooltip,
  Bi as iconNames,
  Ri as useToast
};
