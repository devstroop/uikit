import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as le, cloneElement as de, useRef as I, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
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
}, Li = $(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: i = !1,
  className: l,
  type: a = "button",
  ...r
}, _) {
  const u = [
    H.button,
    H[t],
    H[s],
    n ? H.fullWidth : null,
    i ? H.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: a, className: u, ...r });
}), Le = "_card_lt977_1", qe = "_elevated_lt977_8", Ce = "_outlined_lt977_13", Ee = "_interactive_lt977_17", Ie = "_header_lt977_35", Te = "_body_lt977_42", Ae = "_footer_lt977_52", P = {
  card: Le,
  elevated: qe,
  outlined: Ce,
  interactive: Ee,
  header: Ie,
  body: Te,
  footer: Ae
}, qi = $(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: a, ...r }, _) {
  const u = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: _,
      tabIndex: u ? 0 : void 0,
      onKeyDown: (p) => {
        a?.(p), !(!u || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
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
}, Ci = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...a }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], i].filter(Boolean).join(" "),
      ...a,
      children: l
    }
  );
}), Ye = "_xs_1uch7_2", Ze = "_sm_1uch7_7", et = "_md_1uch7_1", tt = "_lg_1uch7_17", st = "_xl_1uch7_22", nt = {
  xs: Ye,
  sm: Ze,
  md: et,
  lg: tt,
  xl: st
}, Ei = [
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
}, Ii = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, a) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: a,
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
}), lt = "_stat_1ks65_1", it = "_label_1ks65_8", ct = "_row_1ks65_16", at = "_value_1ks65_22", _t = "_delta_1ks65_28", rt = "_success_1ks65_33", dt = "_danger_1ks65_37", ft = "_neutral_1ks65_41", mt = "_hint_1ks65_45", q = {
  stat: lt,
  label: it,
  row: ct,
  value: at,
  delta: _t,
  success: rt,
  danger: dt,
  neutral: ft,
  hint: mt
}, Ti = $(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: a, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [q.stat, a].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ f("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: q.hint, children: l })
  ] });
}), ut = "_wrap_1x8tx_1", pt = "_table_1x8tx_8", ht = "_start_1x8tx_40", gt = "_center_1x8tx_44", zt = "_end_1x8tx_48", xt = "_empty_1x8tx_52", R = {
  wrap: ut,
  table: pt,
  start: ht,
  center: gt,
  end: zt,
  empty: xt
};
function Ai({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: o.map((a) => /* @__PURE__ */ e(
        "td",
        {
          className: a.align != null ? R[a.align] : void 0,
          children: a.render != null ? a.render(l) : l[a.key]
        },
        a.key
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
function Di({ icon: o, title: t, description: s, action: n, className: i }) {
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
function Vi({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: a }) {
  const r = T(), _ = T(), u = i != null ? r : n != null ? _ : null, p = le(l) && u != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        u
      ].filter((m) => typeof m == "string").join(" ") || void 0,
      "aria-invalid": i != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ f("div", { className: [K.field, a].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ f("label", { className: K.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: K.required, "aria-hidden": "true", children: "*" })
    ] }),
    p,
    i != null ? /* @__PURE__ */ e("div", { id: r, className: K.error, role: "alert", children: i }) : n != null ? /* @__PURE__ */ e("div", { id: _, className: K.hint, children: n }) : null
  ] });
}
const jt = "_label_rv97n_1", Bt = {
  label: jt
}, Hi = $(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Bt.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Lt = "_input_109wo_1", qt = "_invalid_109wo_31", Ct = "_xs_109wo_37", Et = "_sm_109wo_43", It = "_md_109wo_49", Tt = "_lg_109wo_55", At = "_xl_109wo_61", te = {
  input: Lt,
  invalid: qt,
  xs: Ct,
  sm: Et,
  md: It,
  lg: Tt,
  xl: At
}, Pi = $(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
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
}, Ri = $(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...a }, r) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: r,
      className: [se.select, se[t], s ? se.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a,
      children: n != null ? n.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : i
    }
  );
}), Ft = "_checkbox_sx3bj_1", Xt = {
  checkbox: Ft
}, Wi = $(function({ className: t, ...s }, n) {
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
function Ki({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: i
}) {
  const l = T(), a = I(null), [r, _] = A(!1), u = () => {
    a.current = window.setTimeout(() => _(!0), n);
  }, p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), _(!1);
  };
  F(() => {
    if (!r) return;
    const z = (x) => {
      x.key === "Escape" && p();
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [r]);
  const m = le(t) ? de(
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
      onMouseEnter: u,
      onMouseLeave: p,
      onFocus: u,
      onBlur: p,
      children: [
        m,
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
const ns = "_dialog_gp2l5_1", os = "_sm_gp2l5_30", ls = "_md_gp2l5_34", is = "_lg_gp2l5_38", cs = "_header_gp2l5_42", as = "_title_gp2l5_51", _s = "_description_gp2l5_58", rs = "_close_gp2l5_65", ds = "_body_gp2l5_84", fs = "_footer_gp2l5_90", L = {
  dialog: ns,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: os,
  md: ls,
  lg: is,
  header: cs,
  title: as,
  description: _s,
  close: rs,
  body: ds,
  footer: fs
};
function Fi({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: i,
  footer: l,
  size: a = "md",
  className: r
}) {
  const _ = I(null), u = T(), p = T();
  return F(() => {
    const m = _.current;
    m && (o && !m.open ? m.showModal() : !o && m.open && m.close());
  }, [o]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: _,
      className: [L.dialog, L[a], r].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? u : void 0,
      "aria-describedby": n ? p : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: L.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: u, className: L.title, children: s }),
            n && /* @__PURE__ */ e("p", { id: p, className: L.description, children: n })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: L.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        i && /* @__PURE__ */ e("div", { className: L.body, children: i }),
        l && /* @__PURE__ */ e("footer", { className: L.footer, children: l })
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
function Xi() {
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
function Ui({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: i
}) {
  const [l, a] = A([]), [r, _] = A(!1), u = I([]), p = I(/* @__PURE__ */ new Map()), m = I(!1), z = I(0), x = (d) => {
    m.current = d, _(d);
  }, h = w((d) => {
    const c = p.current.get(d);
    c && (window.clearTimeout(c.timeoutId), c.remaining = Math.max(0, c.remaining - (Date.now() - c.startedAt)));
  }, []), y = w((d) => {
    const c = p.current.get(d);
    c && (window.clearTimeout(c.timeoutId), p.current.delete(d));
  }, []), M = w(
    (d) => {
      y(d), a((c) => {
        const S = c.filter((N) => N.id !== d);
        return u.current = S, S;
      });
    },
    [y]
  ), b = w(
    (d) => {
      const c = u.current.find((S) => S.id === d);
      !c || c.leaving || (c.onAutoClose?.(), M(d));
    },
    [M]
  ), v = w(
    (d) => {
      const c = p.current.get(d);
      !c || c.remaining <= 0 || (c.startedAt = Date.now(), c.timeoutId = window.setTimeout(() => b(d), c.remaining));
    },
    [b]
  ), Z = w(() => {
    m.current || p.current.forEach((d, c) => h(c)), x(!0);
  }, [h]), ee = w(() => {
    p.current.forEach((d, c) => v(c)), x(!1);
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
      const c = u.current.find((S) => S.id === d);
      !c || c.leaving || (c.onDismiss?.(), a((S) => {
        const N = S.map((D) => D.id === d ? { ...D, leaving: !0 } : D);
        return u.current = N, N;
      }), window.setTimeout(() => M(d), Bs));
    },
    [M]
  ), ie = w(
    (d) => {
      if (d.durationMs <= 0) return;
      const c = {
        remaining: d.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(d.id, c), m.current || v(d.id);
    },
    [v]
  ), ce = w(
    (d) => {
      const c = u.current.find((N) => N.id === d.id), S = {
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
      a((N) => {
        const D = c ? N.map((ae) => ae.id === S.id ? { ...S, leaving: !1 } : ae) : [...N, S];
        return u.current = D, D;
      }), c && y(S.id), ie(S);
    },
    [t, s, ie, y]
  ), me = Y(() => ({ toast: ce }), [ce]), ue = Y(
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
        children: l.filter((c) => c.position === d).map((c) => /* @__PURE__ */ f(
          "div",
          {
            role: c.tone === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": c.closeOnClick ? "true" : "false",
            className: [
              k.toast,
              k[c.tone],
              c.leaving ? k.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: c.closeOnClick ? () => X(c.id) : void 0,
            children: [
              /* @__PURE__ */ f("div", { className: k.content, children: [
                /* @__PURE__ */ e("div", { className: k.title, children: c.title }),
                c.description && /* @__PURE__ */ e("div", { className: k.description, children: c.description }),
                (c.action || c.cancel) && /* @__PURE__ */ f("div", { className: k.actions, children: [
                  c.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: k.action,
                      onClick: () => {
                        c.action?.onClick?.(), X(c.id);
                      },
                      children: c.action.label
                    }
                  ),
                  c.cancel && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: k.cancel,
                      onClick: () => {
                        c.cancel?.onClick?.(), X(c.id);
                      },
                      children: c.cancel.label
                    }
                  )
                ] })
              ] }),
              c.dismissible && /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: k.dismiss,
                  onClick: () => X(c.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              c.showProgress && c.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: k.progress,
                  style: { animationDuration: `${c.durationMs}ms` }
                }
              )
            ]
          },
          c.id
        ))
      },
      d
    ))
  ] });
}
const qs = "_alert_eqii4_1", Cs = "_xs_eqii4_22", Es = "_sm_eqii4_32", Is = "_lg_eqii4_42", Ts = "_xl_eqii4_52", As = "_info_eqii4_63", Ds = "_success_eqii4_68", Vs = "_warning_eqii4_73", Hs = "_danger_eqii4_78", Ps = "_soft_eqii4_85", Rs = "_outline_eqii4_92", Ws = "_solid_eqii4_100", Ks = "_icon_eqii4_114", Fs = "_content_eqii4_120", Xs = "_title_eqii4_125", Us = "_body_eqii4_131", Gs = "_dismiss_eqii4_137", j = {
  alert: qs,
  xs: Cs,
  sm: Es,
  lg: Is,
  xl: Ts,
  info: As,
  success: Ds,
  warning: Vs,
  danger: Hs,
  soft: Ps,
  outline: Rs,
  solid: Ws,
  icon: Ks,
  content: Fs,
  title: Xs,
  body: Us,
  dismiss: Gs
};
function Gi({
  tone: o = "info",
  variant: t = "soft",
  size: s = "md",
  title: n,
  icon: i,
  children: l,
  dismissible: a = !1,
  onDismiss: r,
  className: _
}) {
  const [u, p] = A(!1);
  if (u)
    return null;
  const m = () => {
    p(!0), r?.();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      role: "alert",
      className: [j.alert, j[o], j[t], j[s], _].filter(Boolean).join(" "),
      children: [
        i != null && /* @__PURE__ */ e("span", { className: j.icon, "aria-hidden": "true", children: i }),
        /* @__PURE__ */ f("div", { className: j.content, children: [
          n && /* @__PURE__ */ e("div", { className: j.title, children: n }),
          l && /* @__PURE__ */ e("div", { className: j.body, children: l })
        ] }),
        a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: j.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Js = "_skeleton_35ckz_1", Qs = "_text_35ckz_35", Ys = "_circle_35ckz_40", Zs = "_rect_35ckz_44", _e = {
  skeleton: Js,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Qs,
  circle: Ys,
  rect: Zs
};
function Ji({
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
const en = "_row_15fbq_1", tn = "_start_15fbq_7", sn = "_center_15fbq_11", nn = "_end_15fbq_15", on = "_stretch_15fbq_19", ln = "_baseline_15fbq_23", cn = "_noWrap_15fbq_51", J = {
  row: en,
  start: tn,
  center: sn,
  end: nn,
  stretch: on,
  baseline: ln,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: cn
};
function Qi({
  gap: o,
  align: t = "stretch",
  justify: s = "start",
  wrap: n = !0,
  className: i,
  style: l,
  ...a
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
      ...a
    }
  );
}
const an = "_column_1pa86_1", _n = "_Size1_1pa86_6", rn = "_Size2_1pa86_7", dn = "_Size3_1pa86_8", fn = "_Size4_1pa86_9", mn = "_Size5_1pa86_10", un = "_Size6_1pa86_11", pn = "_Size7_1pa86_12", hn = "_Size8_1pa86_13", gn = "_Size9_1pa86_14", zn = "_Size10_1pa86_15", xn = "_Size11_1pa86_16", yn = "_Size12_1pa86_17", Sn = "_Offset1_1pa86_18", bn = "_Offset2_1pa86_19", vn = "_Offset3_1pa86_20", kn = "_Offset4_1pa86_21", On = "_Offset5_1pa86_22", $n = "_Offset6_1pa86_23", wn = "_Offset7_1pa86_24", Mn = "_Offset8_1pa86_25", Nn = "_Offset9_1pa86_26", jn = "_Offset10_1pa86_27", Bn = "_Offset11_1pa86_28", Ln = "_smSize1_1pa86_31", qn = "_smSize2_1pa86_32", Cn = "_smSize3_1pa86_33", En = "_smSize4_1pa86_34", In = "_smSize5_1pa86_35", Tn = "_smSize6_1pa86_36", An = "_smSize7_1pa86_37", Dn = "_smSize8_1pa86_38", Vn = "_smSize9_1pa86_39", Hn = "_smSize10_1pa86_40", Pn = "_smSize11_1pa86_41", Rn = "_smSize12_1pa86_42", Wn = "_smOffset1_1pa86_43", Kn = "_smOffset2_1pa86_44", Fn = "_smOffset3_1pa86_45", Xn = "_smOffset4_1pa86_46", Un = "_smOffset5_1pa86_47", Gn = "_smOffset6_1pa86_48", Jn = "_smOffset7_1pa86_49", Qn = "_smOffset8_1pa86_50", Yn = "_smOffset9_1pa86_51", Zn = "_smOffset10_1pa86_52", eo = "_smOffset11_1pa86_53", to = "_mdSize1_1pa86_57", so = "_mdSize2_1pa86_58", no = "_mdSize3_1pa86_59", oo = "_mdSize4_1pa86_60", lo = "_mdSize5_1pa86_61", io = "_mdSize6_1pa86_62", co = "_mdSize7_1pa86_63", ao = "_mdSize8_1pa86_64", _o = "_mdSize9_1pa86_65", ro = "_mdSize10_1pa86_66", fo = "_mdSize11_1pa86_67", mo = "_mdSize12_1pa86_68", uo = "_mdOffset1_1pa86_69", po = "_mdOffset2_1pa86_70", ho = "_mdOffset3_1pa86_71", go = "_mdOffset4_1pa86_72", zo = "_mdOffset5_1pa86_73", xo = "_mdOffset6_1pa86_74", yo = "_mdOffset7_1pa86_75", So = "_mdOffset8_1pa86_76", bo = "_mdOffset9_1pa86_77", vo = "_mdOffset10_1pa86_78", ko = "_mdOffset11_1pa86_79", Oo = "_lgSize1_1pa86_83", $o = "_lgSize2_1pa86_84", wo = "_lgSize3_1pa86_85", Mo = "_lgSize4_1pa86_86", No = "_lgSize5_1pa86_87", jo = "_lgSize6_1pa86_88", Bo = "_lgSize7_1pa86_89", Lo = "_lgSize8_1pa86_90", qo = "_lgSize9_1pa86_91", Co = "_lgSize10_1pa86_92", Eo = "_lgSize11_1pa86_93", Io = "_lgSize12_1pa86_94", To = "_lgOffset1_1pa86_95", Ao = "_lgOffset2_1pa86_96", Do = "_lgOffset3_1pa86_97", Vo = "_lgOffset4_1pa86_98", Ho = "_lgOffset5_1pa86_99", Po = "_lgOffset6_1pa86_100", Ro = "_lgOffset7_1pa86_101", Wo = "_lgOffset8_1pa86_102", Ko = "_lgOffset9_1pa86_103", Fo = "_lgOffset10_1pa86_104", Xo = "_lgOffset11_1pa86_105", Uo = "_xlSize1_1pa86_109", Go = "_xlSize2_1pa86_110", Jo = "_xlSize3_1pa86_111", Qo = "_xlSize4_1pa86_112", Yo = "_xlSize5_1pa86_113", Zo = "_xlSize6_1pa86_114", el = "_xlSize7_1pa86_115", tl = "_xlSize8_1pa86_116", sl = "_xlSize9_1pa86_117", nl = "_xlSize10_1pa86_118", ol = "_xlSize11_1pa86_119", ll = "_xlSize12_1pa86_120", il = "_xlOffset1_1pa86_121", cl = "_xlOffset2_1pa86_122", al = "_xlOffset3_1pa86_123", _l = "_xlOffset4_1pa86_124", rl = "_xlOffset5_1pa86_125", dl = "_xlOffset6_1pa86_126", fl = "_xlOffset7_1pa86_127", ml = "_xlOffset8_1pa86_128", ul = "_xlOffset9_1pa86_129", pl = "_xlOffset10_1pa86_130", hl = "_xlOffset11_1pa86_131", ne = {
  column: an,
  Size1: _n,
  Size2: rn,
  Size3: dn,
  Size4: fn,
  Size5: mn,
  Size6: un,
  Size7: pn,
  Size8: hn,
  Size9: gn,
  Size10: zn,
  Size11: xn,
  Size12: yn,
  Offset1: Sn,
  Offset2: bn,
  Offset3: vn,
  Offset4: kn,
  Offset5: On,
  Offset6: $n,
  Offset7: wn,
  Offset8: Mn,
  Offset9: Nn,
  Offset10: jn,
  Offset11: Bn,
  smSize1: Ln,
  smSize2: qn,
  smSize3: Cn,
  smSize4: En,
  smSize5: In,
  smSize6: Tn,
  smSize7: An,
  smSize8: Dn,
  smSize9: Vn,
  smSize10: Hn,
  smSize11: Pn,
  smSize12: Rn,
  smOffset1: Wn,
  smOffset2: Kn,
  smOffset3: Fn,
  smOffset4: Xn,
  smOffset5: Un,
  smOffset6: Gn,
  smOffset7: Jn,
  smOffset8: Qn,
  smOffset9: Yn,
  smOffset10: Zn,
  smOffset11: eo,
  mdSize1: to,
  mdSize2: so,
  mdSize3: no,
  mdSize4: oo,
  mdSize5: lo,
  mdSize6: io,
  mdSize7: co,
  mdSize8: ao,
  mdSize9: _o,
  mdSize10: ro,
  mdSize11: fo,
  mdSize12: mo,
  mdOffset1: uo,
  mdOffset2: po,
  mdOffset3: ho,
  mdOffset4: go,
  mdOffset5: zo,
  mdOffset6: xo,
  mdOffset7: yo,
  mdOffset8: So,
  mdOffset9: bo,
  mdOffset10: vo,
  mdOffset11: ko,
  lgSize1: Oo,
  lgSize2: $o,
  lgSize3: wo,
  lgSize4: Mo,
  lgSize5: No,
  lgSize6: jo,
  lgSize7: Bo,
  lgSize8: Lo,
  lgSize9: qo,
  lgSize10: Co,
  lgSize11: Eo,
  lgSize12: Io,
  lgOffset1: To,
  lgOffset2: Ao,
  lgOffset3: Do,
  lgOffset4: Vo,
  lgOffset5: Ho,
  lgOffset6: Po,
  lgOffset7: Ro,
  lgOffset8: Wo,
  lgOffset9: Ko,
  lgOffset10: Fo,
  lgOffset11: Xo,
  xlSize1: Uo,
  xlSize2: Go,
  xlSize3: Jo,
  xlSize4: Qo,
  xlSize5: Yo,
  xlSize6: Zo,
  xlSize7: el,
  xlSize8: tl,
  xlSize9: sl,
  xlSize10: nl,
  xlSize11: ol,
  xlSize12: ll,
  xlOffset1: il,
  xlOffset2: cl,
  xlOffset3: al,
  xlOffset4: _l,
  xlOffset5: rl,
  xlOffset6: dl,
  xlOffset7: fl,
  xlOffset8: ml,
  xlOffset9: ul,
  xlOffset10: pl,
  xlOffset11: hl
}, gl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Yi({ className: o, ...t }) {
  const s = [ne.column];
  for (const [h, y, M] of gl) {
    const b = t[y], v = t[M];
    b != null && s.push(ne[`${h}Size${b}`]), v != null && v > 0 && s.push(ne[`${h}Offset${v}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: a, sizeMd: r, offsetMd: _, sizeLg: u, offsetLg: p, sizeXl: m, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const zl = "_layout_1pcye_1", xl = "_row_1pcye_7", re = {
  layout: zl,
  row: xl
}, yl = "_footer_14whp_1", Sl = {
  footer: yl
};
function bl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [Sl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const vl = "_header_2mimk_1", kl = {
  header: vl
};
function Ol({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [kl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const $l = "_sidebar_1ktmd_1", wl = "_left_1ktmd_9", Ml = "_right_1ktmd_13", Nl = "_collapsed_1ktmd_17", jl = "_responsive_1ktmd_25", Bl = "_overlay_1ktmd_33", Ll = "_mask_1ktmd_53", C = {
  sidebar: $l,
  left: wl,
  right: Ml,
  collapsed: Nl,
  responsive: jl,
  overlay: Bl,
  mask: Ll
};
function ql({
  position: o = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: n = !1,
  onClose: i,
  className: l,
  children: a,
  ...r
}) {
  return F(() => {
    if (!n || !t || i == null) return;
    const _ = (u) => {
      u.key === "Escape" && i();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [n, t, i]), /* @__PURE__ */ f(g, { children: [
    n && t ? /* @__PURE__ */ e("div", { className: `${C.mask} se-layout-mask`, "aria-hidden": "true", onClick: i }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          C.sidebar,
          o === "right" ? C.right : C.left,
          t ? null : C.collapsed,
          s ? C.responsive : null,
          n ? [C.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...r,
        children: a
      }
    )
  ] });
}
function Zi({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], a = [], r = [];
  return xe.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === Ol ? n.push(_) : _.type === bl ? i.push(_) : _.type === ql ? (_.props.position === "right" ? r : a).push(_) : l.push(_);
  }), /* @__PURE__ */ f("div", { className: [re.layout, o].filter(Boolean).join(" "), ...s, children: [
    n,
    /* @__PURE__ */ f("div", { className: re.row, children: [
      a,
      l,
      r
    ] }),
    i
  ] });
}
const Cl = "_body_1tpk6_1", El = {
  body: Cl
};
function ec({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [El.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Il = "_track_1mkoz_1", Tl = "_bar_1mkoz_31", Al = "_primary_1mkoz_39", Dl = "_success_1mkoz_43", Vl = "_warning_1mkoz_47", Hl = "_danger_1mkoz_51", Pl = "_indeterminate_1mkoz_55", Rl = "_circular_1mkoz_69", Wl = "_fill_1mkoz_109", O = {
  track: Il,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Tl,
  primary: Al,
  success: Dl,
  warning: Vl,
  danger: Hl,
  indeterminate: Pl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Rl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Wl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function tc({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: i = "linear",
  size: l = "md",
  className: a,
  ...r
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, o)) : 0, u = t > 0 ? _ / t * 100 : 0;
  if (i === "circular") {
    const p = typeof l == "string", m = 2, z = 10.5, x = 2 * Math.PI * z, h = x * (n ? 0.75 : 1), y = n ? 0 : x * (1 - u / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: p ? void 0 : l,
        height: p ? void 0 : l,
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
          p ? O[`circular-${l}`] : null,
          n ? O.indeterminate : null,
          a
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: O.track, cx: 12, cy: 12, r: z, strokeWidth: m }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: O.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: m,
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
        a
      ].filter(Boolean).join(" "),
      ...r,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: O.bar,
          style: n ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Kl = "_wrapper_t239v_1", Fl = {
  wrapper: Kl
};
function sc({
  defaultTheme: o = "light",
  onChange: t,
  label: s = "Dark mode",
  className: n
}) {
  const [i, l] = A(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : o === "dark");
  F(() => {
    document.documentElement.dataset.theme = i ? "dark" : "light";
  }, []);
  const a = (r) => {
    const _ = r.target.checked;
    l(_), document.documentElement.dataset.theme = _ ? "dark" : "light", t?.(_ ? "dark" : "light");
  };
  return /* @__PURE__ */ f("label", { className: [Fl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Gt, { checked: i, onChange: a })
  ] });
}
const Xl = "_avatar_17s76_1", Ul = "_xs_17s76_12", Gl = "_sm_17s76_18", Jl = "_md_17s76_24", Ql = "_lg_17s76_30", Yl = "_xl_17s76_36", Zl = "_initials_17s76_42", ei = "_image_17s76_57", ti = "_status_17s76_64", si = "_online_17s76_84", ni = "_offline_17s76_88", oi = "_away_17s76_92", V = {
  avatar: Xl,
  xs: Ul,
  sm: Gl,
  md: Jl,
  lg: Ql,
  xl: Yl,
  initials: Zl,
  image: ei,
  status: ti,
  online: si,
  offline: ni,
  away: oi
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function li(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ii(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Q[t % Q.length] ?? Q[0];
}
function nc({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const a = Y(() => o ? li(o) : "?", [o]), r = Y(() => o ? ii(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: a });
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
const ci = "_root_1k1gx_1", ai = "_tabList_1k1gx_6", _i = "_underline_1k1gx_12", ri = "_pills_1k1gx_16", di = "_tab_1k1gx_6", fi = "_active_1k1gx_36", mi = "_disabled_1k1gx_50", ui = "_panel_1k1gx_64", E = {
  root: ci,
  tabList: ai,
  underline: _i,
  pills: ri,
  tab: di,
  active: fi,
  disabled: mi,
  panel: ui
};
function oc({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  className: l
}) {
  const a = T(), r = I(null), [_, u] = A(s ?? o[0]?.key ?? ""), p = t ?? _, m = (h) => {
    u(h), n?.(h);
  }, z = (h) => {
    const y = o.filter((v) => !v.disabled), M = y.findIndex((v) => v.key === p);
    let b = -1;
    h.key === "ArrowRight" ? b = (M + 1) % y.length : h.key === "ArrowLeft" ? b = (M - 1 + y.length) % y.length : h.key === "Home" ? b = 0 : h.key === "End" && (b = y.length - 1), b >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[b]?.key ?? "")}"]`
    )?.focus(), m(y[b]?.key ?? ""));
  }, x = o.find((h) => h.key === p);
  return /* @__PURE__ */ f("div", { className: [E.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [E.tabList, E[i]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: o.map((h) => {
          const y = h.key === p;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${a}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": y,
              "aria-controls": `${a}-panel-${h.key}`,
              tabIndex: y ? 0 : -1,
              disabled: h.disabled,
              className: [
                E.tab,
                y ? E.active : null,
                h.disabled ? E.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => m(h.key),
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
        id: `${a}-panel-${x.key}`,
        "aria-labelledby": `${a}-tab-${x.key}`,
        className: E.panel,
        children: x.content
      }
    )
  ] });
}
const pi = "_root_1rcwz_1", hi = "_item_1rcwz_9", gi = "_heading_1rcwz_13", zi = "_trigger_1rcwz_17", xi = "_disabled_1rcwz_34", yi = "_title_1rcwz_48", Si = "_chevron_1rcwz_52", bi = "_open_1rcwz_59", vi = "_content_1rcwz_63", B = {
  root: pi,
  item: hi,
  heading: gi,
  trigger: zi,
  disabled: xi,
  title: yi,
  chevron: Si,
  open: bi,
  content: vi
};
function lc({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const a = T(), [r, _] = A(n ?? []), u = s ?? r, p = (m) => {
    const z = u.includes(m) ? u.filter((x) => x !== m) : t ? [...u, m] : [m];
    _(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [B.root, l].filter(Boolean).join(" "), children: o.map((m) => {
    const z = u.includes(m.key), x = `${a}-panel-${m.key}`, h = `${a}-trigger-${m.key}`;
    return /* @__PURE__ */ f("div", { className: B.item, children: [
      /* @__PURE__ */ e("h3", { className: B.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: m.disabled,
          className: [
            B.trigger,
            m.disabled ? B.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(m.key),
          children: [
            /* @__PURE__ */ e("span", { className: B.title, children: m.title }),
            /* @__PURE__ */ e("span", { className: [B.chevron, z ? B.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
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
          className: B.content,
          children: m.content
        }
      )
    ] }, m.key);
  }) });
}
const ki = "_textarea_jj8z9_1", Oi = "_xs_jj8z9_25", $i = "_sm_jj8z9_30", wi = "_md_jj8z9_35", Mi = "_lg_jj8z9_40", Ni = "_xl_jj8z9_45", oe = {
  textarea: ki,
  xs: Oi,
  sm: $i,
  md: wi,
  lg: Mi,
  xl: Ni,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, ic = $(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  lc as Accordion,
  Gi as Alert,
  nc as Avatar,
  Ci as Badge,
  ec as Body,
  Li as Button,
  qi as Card,
  Wi as Checkbox,
  Yi as Column,
  Fi as Dialog,
  Di as EmptyState,
  Vi as Field,
  bl as Footer,
  Ol as Header,
  Ii as Icon,
  Pi as Input,
  Hi as Label,
  Zi as Layout,
  tc as Progress,
  Qi as Row,
  Ri as Select,
  ql as Sidebar,
  Ji as Skeleton,
  Ti as Stat,
  Gt as Switch,
  Ai as Table,
  oc as Tabs,
  ic as Textarea,
  sc as ThemeSwitcher,
  Ui as ToastProvider,
  Ki as Tooltip,
  Ei as iconNames,
  Xi as useToast
};
