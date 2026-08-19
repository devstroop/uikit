import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as le, cloneElement as de, useRef as q, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
const be = "_button_1pkcx_1", ye = "_primary_1pkcx_29", Se = "_secondary_1pkcx_38", ve = "_ghost_1pkcx_48", ke = "_danger_1pkcx_57", Oe = "_xs_1pkcx_67", $e = "_sm_1pkcx_73", we = "_md_1pkcx_79", Me = "_lg_1pkcx_85", Ne = "_xl_1pkcx_91", je = "_iconOnly_1pkcx_97", Be = "_fullWidth_1pkcx_123", H = {
  button: be,
  primary: ye,
  secondary: Se,
  ghost: ve,
  danger: ke,
  xs: Oe,
  sm: $e,
  md: we,
  lg: Me,
  xl: Ne,
  iconOnly: je,
  fullWidth: Be
}, Ni = $(function({
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
}), Le = "_card_80b0o_1", Ce = "_elevated_80b0o_8", Ee = "_outlined_80b0o_13", Ie = "_interactive_80b0o_17", qe = "_text_80b0o_25", Te = "_header_80b0o_41", Ae = "_body_80b0o_48", De = "_footer_80b0o_58", P = {
  card: Le,
  elevated: Ce,
  outlined: Ee,
  interactive: Ie,
  text: qe,
  header: Te,
  body: Ae,
  footer: De
}, ji = $(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: c, ...r }, _) {
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
}), Ve = "_badge_s3h6c_1", He = "_xs_s3h6c_14", Pe = "_sm_s3h6c_19", Re = "_md_s3h6c_24", We = "_lg_s3h6c_29", Ke = "_xl_s3h6c_34", Fe = "_neutral_s3h6c_40", Xe = "_primary_s3h6c_45", Ue = "_success_s3h6c_50", Ge = "_warning_s3h6c_55", Je = "_danger_s3h6c_60", Qe = "_solid_s3h6c_66", Ye = "_outline_s3h6c_91", U = {
  badge: Ve,
  xs: He,
  sm: Pe,
  md: Re,
  lg: We,
  xl: Ke,
  neutral: Fe,
  primary: Xe,
  success: Ue,
  warning: Ge,
  danger: Je,
  solid: Qe,
  outline: Ye
}, Bi = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...c }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], i].filter(Boolean).join(" "),
      ...c,
      children: l
    }
  );
}), Ze = "_xs_1uch7_2", et = "_sm_1uch7_7", tt = "_md_1uch7_1", st = "_lg_1uch7_17", nt = "_xl_1uch7_22", ot = {
  xs: Ze,
  sm: et,
  md: tt,
  lg: st,
  xl: nt
}, Li = [
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
], lt = {
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
}, Ci = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, c) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [r ? ot[s] : null, i].filter(Boolean).join(" "),
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
      children: lt[t]
    }
  );
}), it = "_stat_1ks65_1", at = "_label_1ks65_8", ct = "_row_1ks65_16", _t = "_value_1ks65_22", rt = "_delta_1ks65_28", dt = "_success_1ks65_33", ft = "_danger_1ks65_37", mt = "_neutral_1ks65_41", ut = "_hint_1ks65_45", C = {
  stat: it,
  label: at,
  row: ct,
  value: _t,
  delta: rt,
  success: dt,
  danger: ft,
  neutral: mt,
  hint: ut
}, Ei = $(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: c, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [C.stat, c].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: C.label, children: t }),
    /* @__PURE__ */ f("div", { className: C.row, children: [
      /* @__PURE__ */ e("div", { className: C.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [C.delta, C[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: C.hint, children: l })
  ] });
}), pt = "_wrap_1x8tx_1", ht = "_table_1x8tx_8", gt = "_start_1x8tx_40", zt = "_center_1x8tx_44", xt = "_end_1x8tx_48", bt = "_empty_1x8tx_52", R = {
  wrap: pt,
  table: ht,
  start: gt,
  center: zt,
  end: xt,
  empty: bt
};
function Ii({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
const yt = "_emptyState_1o7fc_1", St = "_icon_1o7fc_13", vt = "_title_1o7fc_18", kt = "_description_1o7fc_24", Ot = "_action_1o7fc_30", W = {
  emptyState: yt,
  icon: St,
  title: vt,
  description: kt,
  action: Ot
};
function qi({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [W.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: W.icon, children: o }),
    /* @__PURE__ */ e("div", { className: W.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: W.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: W.action, children: n })
  ] });
}
const $t = "_field_w9m4o_1", wt = "_label_w9m4o_8", Mt = "_required_w9m4o_14", Nt = "_hint_w9m4o_19", jt = "_error_w9m4o_24", K = {
  field: $t,
  label: wt,
  required: Mt,
  hint: Nt,
  error: jt
};
function Ti({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: c }) {
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
const Bt = "_label_rv97n_1", Lt = {
  label: Bt
}, Ai = $(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Lt.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Ct = "_input_109wo_1", Et = "_invalid_109wo_31", It = "_xs_109wo_37", qt = "_sm_109wo_43", Tt = "_md_109wo_49", At = "_lg_109wo_55", Dt = "_xl_109wo_61", te = {
  input: Ct,
  invalid: Et,
  xs: It,
  sm: qt,
  md: Tt,
  lg: At,
  xl: Dt
}, Di = $(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...i
    }
  );
}), Vt = "_select_6ltg7_1", Ht = "_invalid_6ltg7_33", Pt = "_xs_6ltg7_39", Rt = "_sm_6ltg7_45", Wt = "_md_6ltg7_51", Kt = "_lg_6ltg7_57", Ft = "_xl_6ltg7_63", se = {
  select: Vt,
  invalid: Ht,
  xs: Pt,
  sm: Rt,
  md: Wt,
  lg: Kt,
  xl: Ft
}, Vi = $(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...c }, r) {
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
}), Xt = "_checkbox_sx3bj_1", Ut = {
  checkbox: Xt
}, Hi = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: [Ut.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Gt = {
  switch: "_switch_1lrk0_1"
}, Jt = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      role: "switch",
      className: [Gt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Qt = "_trigger_4qzmh_1", Yt = "_tooltip_4qzmh_7", Zt = "_top_4qzmh_34", es = "_right_4qzmh_40", ts = "_bottom_4qzmh_46", ss = "_left_4qzmh_52", ns = "_arrow_4qzmh_58", G = {
  trigger: Qt,
  tooltip: Yt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: Zt,
  right: es,
  bottom: ts,
  left: ss,
  arrow: ns
};
function Pi({
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
const os = "_dialog_gp2l5_1", ls = "_sm_gp2l5_30", is = "_md_gp2l5_34", as = "_lg_gp2l5_38", cs = "_header_gp2l5_42", _s = "_title_gp2l5_51", rs = "_description_gp2l5_58", ds = "_close_gp2l5_65", fs = "_body_gp2l5_84", ms = "_footer_gp2l5_90", B = {
  dialog: os,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: ls,
  md: is,
  lg: as,
  header: cs,
  title: _s,
  description: rs,
  close: ds,
  body: fs,
  footer: ms
};
function Ri({
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
const us = "_viewport_1ex2n_1", ps = "_topLeft_1ex2n_13", hs = "_topRight_1ex2n_20", gs = "_bottomLeft_1ex2n_25", zs = "_toast_1ex2n_30", xs = "_leaving_1ex2n_61", bs = "_info_1ex2n_77", ys = "_success_1ex2n_82", Ss = "_warning_1ex2n_87", vs = "_danger_1ex2n_92", ks = "_content_1ex2n_97", Os = "_title_1ex2n_102", $s = "_description_1ex2n_125", ws = "_dismiss_1ex2n_132", Ms = "_actions_1ex2n_151", Ns = "_action_1ex2n_151", js = "_cancel_1ex2n_159", Bs = "_progress_1ex2n_195", k = {
  viewport: us,
  topLeft: ps,
  topRight: hs,
  bottomLeft: gs,
  toast: zs,
  "se-toast-in": "_se-toast-in_1ex2n_1",
  leaving: xs,
  "se-toast-out": "_se-toast-out_1ex2n_1",
  info: bs,
  success: ys,
  warning: Ss,
  danger: vs,
  content: ks,
  title: Os,
  description: $s,
  dismiss: ws,
  actions: Ms,
  action: Ns,
  cancel: js,
  progress: Bs,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Wi() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const Ls = 200, Cs = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Ki({
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
  }, []), b = w((d) => {
    const a = u.current.get(d);
    a && (window.clearTimeout(a.timeoutId), u.current.delete(d));
  }, []), M = w(
    (d) => {
      b(d), c((a) => {
        const y = a.filter((N) => N.id !== d);
        return m.current = y, y;
      });
    },
    [b]
  ), S = w(
    (d) => {
      const a = m.current.find((y) => y.id === d);
      !a || a.leaving || (a.onAutoClose?.(), M(d));
    },
    [M]
  ), v = w(
    (d) => {
      const a = u.current.get(d);
      !a || a.remaining <= 0 || (a.startedAt = Date.now(), a.timeoutId = window.setTimeout(() => S(d), a.remaining));
    },
    [S]
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
      const a = m.current.find((y) => y.id === d);
      !a || a.leaving || (a.onDismiss?.(), c((y) => {
        const N = y.map((D) => D.id === d ? { ...D, leaving: !0 } : D);
        return m.current = N, N;
      }), window.setTimeout(() => M(d), Ls));
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
      const a = m.current.find((N) => N.id === d.id), y = {
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
        const D = a ? N.map((ce) => ce.id === y.id ? { ...y, leaving: !1 } : ce) : [...N, y];
        return m.current = D, D;
      }), a && b(y.id), ie(y);
    },
    [t, s, ie, b]
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
          k[Cs[d]],
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
const Es = "_alert_1i49n_1", Is = "_info_1i49n_15", qs = "_success_1i49n_20", Ts = "_warning_1i49n_25", As = "_danger_1i49n_30", Ds = "_soft_1i49n_37", Vs = "_outline_1i49n_44", Hs = "_solid_1i49n_52", Ps = "_icon_1i49n_66", Rs = "_content_1i49n_72", Ws = "_title_1i49n_77", Ks = "_body_1i49n_83", Fs = "_dismiss_1i49n_88", L = {
  alert: Es,
  info: Is,
  success: qs,
  warning: Ts,
  danger: As,
  soft: Ds,
  outline: Vs,
  solid: Hs,
  icon: Ps,
  content: Rs,
  title: Ws,
  body: Ks,
  dismiss: Fs
};
function Fi({
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
const Xs = "_skeleton_35ckz_1", Us = "_text_35ckz_35", Gs = "_circle_35ckz_40", Js = "_rect_35ckz_44", _e = {
  skeleton: Xs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Us,
  circle: Gs,
  rect: Js
};
function Xi({
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
const Qs = "_row_15fbq_1", Ys = "_start_15fbq_7", Zs = "_center_15fbq_11", en = "_end_15fbq_15", tn = "_stretch_15fbq_19", sn = "_baseline_15fbq_23", nn = "_noWrap_15fbq_51", J = {
  row: Qs,
  start: Ys,
  center: Zs,
  end: en,
  stretch: tn,
  baseline: sn,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: nn
};
function Ui({
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
const on = "_column_1pa86_1", ln = "_Size1_1pa86_6", an = "_Size2_1pa86_7", cn = "_Size3_1pa86_8", _n = "_Size4_1pa86_9", rn = "_Size5_1pa86_10", dn = "_Size6_1pa86_11", fn = "_Size7_1pa86_12", mn = "_Size8_1pa86_13", un = "_Size9_1pa86_14", pn = "_Size10_1pa86_15", hn = "_Size11_1pa86_16", gn = "_Size12_1pa86_17", zn = "_Offset1_1pa86_18", xn = "_Offset2_1pa86_19", bn = "_Offset3_1pa86_20", yn = "_Offset4_1pa86_21", Sn = "_Offset5_1pa86_22", vn = "_Offset6_1pa86_23", kn = "_Offset7_1pa86_24", On = "_Offset8_1pa86_25", $n = "_Offset9_1pa86_26", wn = "_Offset10_1pa86_27", Mn = "_Offset11_1pa86_28", Nn = "_smSize1_1pa86_31", jn = "_smSize2_1pa86_32", Bn = "_smSize3_1pa86_33", Ln = "_smSize4_1pa86_34", Cn = "_smSize5_1pa86_35", En = "_smSize6_1pa86_36", In = "_smSize7_1pa86_37", qn = "_smSize8_1pa86_38", Tn = "_smSize9_1pa86_39", An = "_smSize10_1pa86_40", Dn = "_smSize11_1pa86_41", Vn = "_smSize12_1pa86_42", Hn = "_smOffset1_1pa86_43", Pn = "_smOffset2_1pa86_44", Rn = "_smOffset3_1pa86_45", Wn = "_smOffset4_1pa86_46", Kn = "_smOffset5_1pa86_47", Fn = "_smOffset6_1pa86_48", Xn = "_smOffset7_1pa86_49", Un = "_smOffset8_1pa86_50", Gn = "_smOffset9_1pa86_51", Jn = "_smOffset10_1pa86_52", Qn = "_smOffset11_1pa86_53", Yn = "_mdSize1_1pa86_57", Zn = "_mdSize2_1pa86_58", eo = "_mdSize3_1pa86_59", to = "_mdSize4_1pa86_60", so = "_mdSize5_1pa86_61", no = "_mdSize6_1pa86_62", oo = "_mdSize7_1pa86_63", lo = "_mdSize8_1pa86_64", io = "_mdSize9_1pa86_65", ao = "_mdSize10_1pa86_66", co = "_mdSize11_1pa86_67", _o = "_mdSize12_1pa86_68", ro = "_mdOffset1_1pa86_69", fo = "_mdOffset2_1pa86_70", mo = "_mdOffset3_1pa86_71", uo = "_mdOffset4_1pa86_72", po = "_mdOffset5_1pa86_73", ho = "_mdOffset6_1pa86_74", go = "_mdOffset7_1pa86_75", zo = "_mdOffset8_1pa86_76", xo = "_mdOffset9_1pa86_77", bo = "_mdOffset10_1pa86_78", yo = "_mdOffset11_1pa86_79", So = "_lgSize1_1pa86_83", vo = "_lgSize2_1pa86_84", ko = "_lgSize3_1pa86_85", Oo = "_lgSize4_1pa86_86", $o = "_lgSize5_1pa86_87", wo = "_lgSize6_1pa86_88", Mo = "_lgSize7_1pa86_89", No = "_lgSize8_1pa86_90", jo = "_lgSize9_1pa86_91", Bo = "_lgSize10_1pa86_92", Lo = "_lgSize11_1pa86_93", Co = "_lgSize12_1pa86_94", Eo = "_lgOffset1_1pa86_95", Io = "_lgOffset2_1pa86_96", qo = "_lgOffset3_1pa86_97", To = "_lgOffset4_1pa86_98", Ao = "_lgOffset5_1pa86_99", Do = "_lgOffset6_1pa86_100", Vo = "_lgOffset7_1pa86_101", Ho = "_lgOffset8_1pa86_102", Po = "_lgOffset9_1pa86_103", Ro = "_lgOffset10_1pa86_104", Wo = "_lgOffset11_1pa86_105", Ko = "_xlSize1_1pa86_109", Fo = "_xlSize2_1pa86_110", Xo = "_xlSize3_1pa86_111", Uo = "_xlSize4_1pa86_112", Go = "_xlSize5_1pa86_113", Jo = "_xlSize6_1pa86_114", Qo = "_xlSize7_1pa86_115", Yo = "_xlSize8_1pa86_116", Zo = "_xlSize9_1pa86_117", el = "_xlSize10_1pa86_118", tl = "_xlSize11_1pa86_119", sl = "_xlSize12_1pa86_120", nl = "_xlOffset1_1pa86_121", ol = "_xlOffset2_1pa86_122", ll = "_xlOffset3_1pa86_123", il = "_xlOffset4_1pa86_124", al = "_xlOffset5_1pa86_125", cl = "_xlOffset6_1pa86_126", _l = "_xlOffset7_1pa86_127", rl = "_xlOffset8_1pa86_128", dl = "_xlOffset9_1pa86_129", fl = "_xlOffset10_1pa86_130", ml = "_xlOffset11_1pa86_131", ne = {
  column: on,
  Size1: ln,
  Size2: an,
  Size3: cn,
  Size4: _n,
  Size5: rn,
  Size6: dn,
  Size7: fn,
  Size8: mn,
  Size9: un,
  Size10: pn,
  Size11: hn,
  Size12: gn,
  Offset1: zn,
  Offset2: xn,
  Offset3: bn,
  Offset4: yn,
  Offset5: Sn,
  Offset6: vn,
  Offset7: kn,
  Offset8: On,
  Offset9: $n,
  Offset10: wn,
  Offset11: Mn,
  smSize1: Nn,
  smSize2: jn,
  smSize3: Bn,
  smSize4: Ln,
  smSize5: Cn,
  smSize6: En,
  smSize7: In,
  smSize8: qn,
  smSize9: Tn,
  smSize10: An,
  smSize11: Dn,
  smSize12: Vn,
  smOffset1: Hn,
  smOffset2: Pn,
  smOffset3: Rn,
  smOffset4: Wn,
  smOffset5: Kn,
  smOffset6: Fn,
  smOffset7: Xn,
  smOffset8: Un,
  smOffset9: Gn,
  smOffset10: Jn,
  smOffset11: Qn,
  mdSize1: Yn,
  mdSize2: Zn,
  mdSize3: eo,
  mdSize4: to,
  mdSize5: so,
  mdSize6: no,
  mdSize7: oo,
  mdSize8: lo,
  mdSize9: io,
  mdSize10: ao,
  mdSize11: co,
  mdSize12: _o,
  mdOffset1: ro,
  mdOffset2: fo,
  mdOffset3: mo,
  mdOffset4: uo,
  mdOffset5: po,
  mdOffset6: ho,
  mdOffset7: go,
  mdOffset8: zo,
  mdOffset9: xo,
  mdOffset10: bo,
  mdOffset11: yo,
  lgSize1: So,
  lgSize2: vo,
  lgSize3: ko,
  lgSize4: Oo,
  lgSize5: $o,
  lgSize6: wo,
  lgSize7: Mo,
  lgSize8: No,
  lgSize9: jo,
  lgSize10: Bo,
  lgSize11: Lo,
  lgSize12: Co,
  lgOffset1: Eo,
  lgOffset2: Io,
  lgOffset3: qo,
  lgOffset4: To,
  lgOffset5: Ao,
  lgOffset6: Do,
  lgOffset7: Vo,
  lgOffset8: Ho,
  lgOffset9: Po,
  lgOffset10: Ro,
  lgOffset11: Wo,
  xlSize1: Ko,
  xlSize2: Fo,
  xlSize3: Xo,
  xlSize4: Uo,
  xlSize5: Go,
  xlSize6: Jo,
  xlSize7: Qo,
  xlSize8: Yo,
  xlSize9: Zo,
  xlSize10: el,
  xlSize11: tl,
  xlSize12: sl,
  xlOffset1: nl,
  xlOffset2: ol,
  xlOffset3: ll,
  xlOffset4: il,
  xlOffset5: al,
  xlOffset6: cl,
  xlOffset7: _l,
  xlOffset8: rl,
  xlOffset9: dl,
  xlOffset10: fl,
  xlOffset11: ml
}, ul = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Gi({ className: o, ...t }) {
  const s = [ne.column];
  for (const [h, b, M] of ul) {
    const S = t[b], v = t[M];
    S != null && s.push(ne[`${h}Size${S}`]), v != null && v > 0 && s.push(ne[`${h}Offset${v}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: c, sizeMd: r, offsetMd: _, sizeLg: m, offsetLg: u, sizeXl: p, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const pl = "_layout_1pcye_1", hl = "_row_1pcye_7", re = {
  layout: pl,
  row: hl
}, gl = "_footer_14whp_1", zl = {
  footer: gl
};
function xl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [zl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const bl = "_header_2mimk_1", yl = {
  header: bl
};
function Sl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [yl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const vl = "_sidebar_1ktmd_1", kl = "_left_1ktmd_9", Ol = "_right_1ktmd_13", $l = "_collapsed_1ktmd_17", wl = "_responsive_1ktmd_25", Ml = "_overlay_1ktmd_33", Nl = "_mask_1ktmd_53", E = {
  sidebar: vl,
  left: kl,
  right: Ol,
  collapsed: $l,
  responsive: wl,
  overlay: Ml,
  mask: Nl
};
function jl({
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
function Ji({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], c = [], r = [];
  return xe.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === Sl ? n.push(_) : _.type === xl ? i.push(_) : _.type === jl ? (_.props.position === "right" ? r : c).push(_) : l.push(_);
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
const Bl = "_body_1tpk6_1", Ll = {
  body: Bl
};
function Qi({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Ll.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Cl = "_track_1mkoz_1", El = "_bar_1mkoz_31", Il = "_primary_1mkoz_39", ql = "_success_1mkoz_43", Tl = "_warning_1mkoz_47", Al = "_danger_1mkoz_51", Dl = "_indeterminate_1mkoz_55", Vl = "_circular_1mkoz_69", Hl = "_fill_1mkoz_109", O = {
  track: Cl,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: El,
  primary: Il,
  success: ql,
  warning: Tl,
  danger: Al,
  indeterminate: Dl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Vl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Hl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function Yi({
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
    const u = typeof l == "string", p = 2, z = 10.5, x = 2 * Math.PI * z, h = x * (n ? 0.75 : 1), b = n ? 0 : x * (1 - m / 100);
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
              strokeDashoffset: b
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
const Pl = "_wrapper_t239v_1", Rl = {
  wrapper: Pl
};
function Zi({
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
  return /* @__PURE__ */ f("label", { className: [Rl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Jt, { checked: i, onChange: c })
  ] });
}
const Wl = "_avatar_17s76_1", Kl = "_xs_17s76_12", Fl = "_sm_17s76_18", Xl = "_md_17s76_24", Ul = "_lg_17s76_30", Gl = "_xl_17s76_36", Jl = "_initials_17s76_42", Ql = "_image_17s76_57", Yl = "_status_17s76_64", Zl = "_online_17s76_84", ei = "_offline_17s76_88", ti = "_away_17s76_92", V = {
  avatar: Wl,
  xs: Kl,
  sm: Fl,
  md: Xl,
  lg: Ul,
  xl: Gl,
  initials: Jl,
  image: Ql,
  status: Yl,
  online: Zl,
  offline: ei,
  away: ti
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function si(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ni(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Q[t % Q.length] ?? Q[0];
}
function ea({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const c = Y(() => o ? si(o) : "?", [o]), r = Y(() => o ? ni(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: c });
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
const oi = "_root_1k1gx_1", li = "_tabList_1k1gx_6", ii = "_underline_1k1gx_12", ai = "_pills_1k1gx_16", ci = "_tab_1k1gx_6", _i = "_active_1k1gx_36", ri = "_disabled_1k1gx_50", di = "_panel_1k1gx_64", I = {
  root: oi,
  tabList: li,
  underline: ii,
  pills: ai,
  tab: ci,
  active: _i,
  disabled: ri,
  panel: di
};
function ta({
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
    const b = o.filter((v) => !v.disabled), M = b.findIndex((v) => v.key === u);
    let S = -1;
    h.key === "ArrowRight" ? S = (M + 1) % b.length : h.key === "ArrowLeft" ? S = (M - 1 + b.length) % b.length : h.key === "Home" ? S = 0 : h.key === "End" && (S = b.length - 1), S >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[S]?.key ?? "")}"]`
    )?.focus(), p(b[S]?.key ?? ""));
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
          const b = h.key === u;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": b,
              "aria-controls": `${c}-panel-${h.key}`,
              tabIndex: b ? 0 : -1,
              disabled: h.disabled,
              className: [
                I.tab,
                b ? I.active : null,
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
const fi = "_root_1rcwz_1", mi = "_item_1rcwz_9", ui = "_heading_1rcwz_13", pi = "_trigger_1rcwz_17", hi = "_disabled_1rcwz_34", gi = "_title_1rcwz_48", zi = "_chevron_1rcwz_52", xi = "_open_1rcwz_59", bi = "_content_1rcwz_63", j = {
  root: fi,
  item: mi,
  heading: ui,
  trigger: pi,
  disabled: hi,
  title: gi,
  chevron: zi,
  open: xi,
  content: bi
};
function sa({
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
const yi = "_textarea_jj8z9_1", Si = "_xs_jj8z9_25", vi = "_sm_jj8z9_30", ki = "_md_jj8z9_35", Oi = "_lg_jj8z9_40", $i = "_xl_jj8z9_45", oe = {
  textarea: yi,
  xs: Si,
  sm: vi,
  md: ki,
  lg: Oi,
  xl: $i,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, na = $(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  sa as Accordion,
  Fi as Alert,
  ea as Avatar,
  Bi as Badge,
  Qi as Body,
  Ni as Button,
  ji as Card,
  Hi as Checkbox,
  Gi as Column,
  Ri as Dialog,
  qi as EmptyState,
  Ti as Field,
  xl as Footer,
  Sl as Header,
  Ci as Icon,
  Di as Input,
  Ai as Label,
  Ji as Layout,
  Yi as Progress,
  Ui as Row,
  Vi as Select,
  jl as Sidebar,
  Xi as Skeleton,
  Ei as Stat,
  Jt as Switch,
  Ii as Table,
  ta as Tabs,
  na as Textarea,
  Zi as ThemeSwitcher,
  Ki as ToastProvider,
  Pi as Tooltip,
  Li as iconNames,
  Wi as useToast
};
