import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as M, useId as D, isValidElement as le, cloneElement as de, useRef as A, useState as V, useEffect as U, useCallback as N, useMemo as ee, useContext as ge, createContext as ze, Children as xe } from "react";
const ye = "_button_1pkcx_1", be = "_primary_1pkcx_29", Se = "_secondary_1pkcx_38", ve = "_ghost_1pkcx_48", Oe = "_danger_1pkcx_57", ke = "_xs_1pkcx_67", $e = "_sm_1pkcx_73", we = "_md_1pkcx_79", Me = "_lg_1pkcx_85", Ne = "_xl_1pkcx_91", je = "_iconOnly_1pkcx_97", Be = "_fullWidth_1pkcx_123", R = {
  button: ye,
  primary: be,
  secondary: Se,
  ghost: ve,
  danger: Oe,
  xs: ke,
  sm: $e,
  md: we,
  lg: Me,
  xl: Ne,
  iconOnly: je,
  fullWidth: Be
}, Bi = M(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: i = !1,
  className: l,
  type: a = "button",
  ..._
}, r) {
  const m = [
    R.button,
    R[t],
    R[s],
    n ? R.fullWidth : null,
    i ? R.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: r, type: a, className: m, ..._ });
}), Le = "_card_lt977_1", Ce = "_elevated_lt977_8", Ee = "_outlined_lt977_13", Ie = "_interactive_lt977_17", qe = "_header_lt977_35", Te = "_body_lt977_42", Ae = "_footer_lt977_52", W = {
  card: Le,
  elevated: Ce,
  outlined: Ee,
  interactive: Ie,
  header: qe,
  body: Te,
  footer: Ae
}, Li = M(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: a, ..._ }, r) {
  const m = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: r,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (p) => {
        a?.(p), !(!m || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
      },
      className: [W.card, W[t], i].filter(Boolean).join(" "),
      ..._,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: W.header, children: s }),
        /* @__PURE__ */ e("div", { className: W.body, children: l }),
        n != null && /* @__PURE__ */ e("div", { className: W.footer, children: n })
      ]
    }
  );
}), De = "_badge_s3h6c_1", Ve = "_xs_s3h6c_14", He = "_sm_s3h6c_19", Pe = "_md_s3h6c_24", Re = "_lg_s3h6c_29", We = "_xl_s3h6c_34", Ke = "_neutral_s3h6c_40", Fe = "_primary_s3h6c_45", Xe = "_success_s3h6c_50", Ue = "_warning_s3h6c_55", Ge = "_danger_s3h6c_60", Je = "_solid_s3h6c_66", Qe = "_outline_s3h6c_91", J = {
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
}, Ci = M(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...a }, _) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: _,
      className: [J.badge, J[n], J[t], J[s], i].filter(Boolean).join(" "),
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
}, Ii = M(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, a) {
  const _ = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: a,
      className: [_ ? nt[s] : null, i].filter(Boolean).join(" "),
      width: _ ? void 0 : s,
      height: _ ? void 0 : s,
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
}, qi = M(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: a, ..._ }, r) {
  return /* @__PURE__ */ f("div", { ref: r, className: [q.stat, a].filter(Boolean).join(" "), ..._, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ f("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: q.hint, children: l })
  ] });
}), ut = "_wrap_1x8tx_1", pt = "_table_1x8tx_8", ht = "_start_1x8tx_40", gt = "_center_1x8tx_44", zt = "_end_1x8tx_48", xt = "_empty_1x8tx_52", K = {
  wrap: ut,
  table: pt,
  start: ht,
  center: gt,
  end: zt,
  empty: xt
};
function Ti({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [K.wrap, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f("table", { className: K.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: o.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: l.align != null ? K[l.align] : void 0,
          scope: "col",
          children: l.header
        },
        l.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: o.map((a) => /* @__PURE__ */ e(
        "td",
        {
          className: a.align != null ? K[a.align] : void 0,
          children: a.render != null ? a.render(l) : l[a.key]
        },
        a.key
      )) }, s(l))) })
    ] }),
    t.length === 0 && n != null && /* @__PURE__ */ e("div", { className: K.empty, children: n })
  ] });
}
const yt = "_emptyState_1o7fc_1", bt = "_icon_1o7fc_13", St = "_title_1o7fc_18", vt = "_description_1o7fc_24", Ot = "_action_1o7fc_30", F = {
  emptyState: yt,
  icon: bt,
  title: St,
  description: vt,
  action: Ot
};
function Ai({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [F.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: F.icon, children: o }),
    /* @__PURE__ */ e("div", { className: F.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: F.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: F.action, children: n })
  ] });
}
const kt = "_field_w9m4o_1", $t = "_label_w9m4o_8", wt = "_required_w9m4o_14", Mt = "_hint_w9m4o_19", Nt = "_error_w9m4o_24", X = {
  field: kt,
  label: $t,
  required: wt,
  hint: Mt,
  error: Nt
};
function Di({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: a }) {
  const _ = D(), r = D(), m = i != null ? _ : n != null ? r : null, p = le(l) && m != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        m
      ].filter((u) => typeof u == "string").join(" ") || void 0,
      "aria-invalid": i != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ f("div", { className: [X.field, a].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ f("label", { className: X.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: X.required, "aria-hidden": "true", children: "*" })
    ] }),
    p,
    i != null ? /* @__PURE__ */ e("div", { id: _, className: X.error, role: "alert", children: i }) : n != null ? /* @__PURE__ */ e("div", { id: r, className: X.hint, children: n }) : null
  ] });
}
const jt = "_label_rv97n_1", Bt = {
  label: jt
}, Vi = M(
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
}, Hi = M(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
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
}, Pi = M(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...a }, _) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: _,
      className: [se.select, se[t], s ? se.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a,
      children: n != null ? n.map((r) => /* @__PURE__ */ e("option", { value: r.value, disabled: r.disabled, children: r.label }, r.value)) : i
    }
  );
}), Ft = "_checkbox_sx3bj_1", Xt = {
  checkbox: Ft
}, Ri = M(function({ className: t, ...s }, n) {
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
}, Gt = M(function({ className: t, ...s }, n) {
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
}), Jt = "_trigger_4qzmh_1", Qt = "_tooltip_4qzmh_7", Yt = "_top_4qzmh_34", Zt = "_right_4qzmh_40", es = "_bottom_4qzmh_46", ts = "_left_4qzmh_52", ss = "_arrow_4qzmh_58", Q = {
  trigger: Jt,
  tooltip: Qt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: Yt,
  right: Zt,
  bottom: es,
  left: ts,
  arrow: ss
};
function Wi({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: i
}) {
  const l = D(), a = A(null), [_, r] = V(!1), m = () => {
    a.current = window.setTimeout(() => r(!0), n);
  }, p = () => {
    a.current !== null && (window.clearTimeout(a.current), a.current = null), r(!1);
  };
  U(() => {
    if (!_) return;
    const z = (x) => {
      x.key === "Escape" && p();
    };
    return window.addEventListener("keydown", z), () => window.removeEventListener("keydown", z);
  }, [_]);
  const u = le(t) ? de(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        _ ? l : null
      ].filter((z) => typeof z == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ f(
    "span",
    {
      className: [Q.trigger, i].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: p,
      onFocus: m,
      onBlur: p,
      children: [
        u,
        _ && /* @__PURE__ */ f(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [Q.tooltip, Q[s]].filter(Boolean).join(" "),
            children: [
              o,
              /* @__PURE__ */ e("span", { className: Q.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const ns = "_dialog_gp2l5_1", os = "_sm_gp2l5_30", ls = "_md_gp2l5_34", is = "_lg_gp2l5_38", cs = "_header_gp2l5_42", as = "_title_gp2l5_51", _s = "_description_gp2l5_58", rs = "_close_gp2l5_65", ds = "_body_gp2l5_84", fs = "_footer_gp2l5_90", E = {
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
function Ki({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: i,
  footer: l,
  size: a = "md",
  className: _
}) {
  const r = A(null), m = D(), p = D();
  return U(() => {
    const u = r.current;
    u && (o && !u.open ? u.showModal() : !o && u.open && u.close());
  }, [o]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: r,
      className: [E.dialog, E[a], _].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? m : void 0,
      "aria-describedby": n ? p : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: E.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: m, className: E.title, children: s }),
            n && /* @__PURE__ */ e("p", { id: p, className: E.description, children: n })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: E.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        i && /* @__PURE__ */ e("div", { className: E.body, children: i }),
        l && /* @__PURE__ */ e("footer", { className: E.footer, children: l })
      ]
    }
  );
}
const ms = "_viewport_1ex2n_1", us = "_topLeft_1ex2n_13", ps = "_topRight_1ex2n_20", hs = "_bottomLeft_1ex2n_25", gs = "_toast_1ex2n_30", zs = "_leaving_1ex2n_61", xs = "_info_1ex2n_77", ys = "_success_1ex2n_82", bs = "_warning_1ex2n_87", Ss = "_danger_1ex2n_92", vs = "_content_1ex2n_97", Os = "_title_1ex2n_102", ks = "_description_1ex2n_125", $s = "_dismiss_1ex2n_132", ws = "_actions_1ex2n_151", Ms = "_action_1ex2n_151", Ns = "_cancel_1ex2n_159", js = "_progress_1ex2n_195", v = {
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
  warning: bs,
  danger: Ss,
  content: vs,
  title: Os,
  description: ks,
  dismiss: $s,
  actions: ws,
  action: Ms,
  cancel: Ns,
  progress: js,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Fi() {
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
function Xi({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: i
}) {
  const [l, a] = V([]), [_, r] = V(!1), m = A([]), p = A(/* @__PURE__ */ new Map()), u = A(!1), z = A(0), x = (d) => {
    u.current = d, r(d);
  }, O = N((d) => {
    const c = p.current.get(d);
    c && (window.clearTimeout(c.timeoutId), c.remaining = Math.max(0, c.remaining - (Date.now() - c.startedAt)));
  }, []), S = N((d) => {
    const c = p.current.get(d);
    c && (window.clearTimeout(c.timeoutId), p.current.delete(d));
  }, []), h = N(
    (d) => {
      S(d), a((c) => {
        const b = c.filter((j) => j.id !== d);
        return m.current = b, b;
      });
    },
    [S]
  ), y = N(
    (d) => {
      const c = m.current.find((b) => b.id === d);
      !c || c.leaving || (c.onAutoClose?.(), h(d));
    },
    [h]
  ), k = N(
    (d) => {
      const c = p.current.get(d);
      !c || c.remaining <= 0 || (c.startedAt = Date.now(), c.timeoutId = window.setTimeout(() => y(d), c.remaining));
    },
    [y]
  ), $ = N(() => {
    u.current || p.current.forEach((d, c) => O(c)), x(!0);
  }, [O]), C = N(() => {
    p.current.forEach((d, c) => k(c)), x(!1);
  }, [k]);
  U(() => {
    if (!n) return;
    const d = () => {
      document.hidden ? $() : C();
    };
    return document.addEventListener("visibilitychange", d), () => document.removeEventListener("visibilitychange", d);
  }, [n, $, C]);
  const G = N(
    (d) => {
      const c = m.current.find((b) => b.id === d);
      !c || c.leaving || (c.onDismiss?.(), a((b) => {
        const j = b.map((H) => H.id === d ? { ...H, leaving: !0 } : H);
        return m.current = j, j;
      }), window.setTimeout(() => h(d), Bs));
    },
    [h]
  ), ie = N(
    (d) => {
      if (d.durationMs <= 0) return;
      const c = {
        remaining: d.durationMs,
        startedAt: Date.now(),
        timeoutId: 0
      };
      p.current.set(d.id, c), u.current || k(d.id);
    },
    [k]
  ), ce = N(
    (d) => {
      const c = m.current.find((j) => j.id === d.id), b = {
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
      a((j) => {
        const H = c ? j.map((ae) => ae.id === b.id ? { ...b, leaving: !1 } : ae) : [...j, b];
        return m.current = H, H;
      }), c && S(b.id), ie(b);
    },
    [t, s, ie, S]
  ), me = ee(() => ({ toast: ce }), [ce]), ue = ee(
    () => Array.from(/* @__PURE__ */ new Set([s, ...l.map((d) => d.position)])),
    [s, l]
  ), pe = n ? $ : void 0, he = n ? C : void 0;
  return /* @__PURE__ */ f(fe.Provider, { value: me, children: [
    o,
    ue.map((d) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          v.viewport,
          v[Ls[d]],
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
            "data-paused": _ ? "true" : "false",
            "data-clickable": c.closeOnClick ? "true" : "false",
            className: [
              v.toast,
              v[c.tone],
              c.leaving ? v.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: c.closeOnClick ? () => G(c.id) : void 0,
            children: [
              /* @__PURE__ */ f("div", { className: v.content, children: [
                /* @__PURE__ */ e("div", { className: v.title, children: c.title }),
                c.description && /* @__PURE__ */ e("div", { className: v.description, children: c.description }),
                (c.action || c.cancel) && /* @__PURE__ */ f("div", { className: v.actions, children: [
                  c.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: v.action,
                      onClick: () => {
                        c.action?.onClick?.(), G(c.id);
                      },
                      children: c.action.label
                    }
                  ),
                  c.cancel && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: v.cancel,
                      onClick: () => {
                        c.cancel?.onClick?.(), G(c.id);
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
                  className: v.dismiss,
                  onClick: () => G(c.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              c.showProgress && c.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: v.progress,
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
const Cs = "_alert_1i49n_1", Es = "_info_1i49n_15", Is = "_success_1i49n_20", qs = "_warning_1i49n_25", Ts = "_danger_1i49n_30", As = "_soft_1i49n_37", Ds = "_outline_1i49n_44", Vs = "_solid_1i49n_52", Hs = "_icon_1i49n_66", Ps = "_content_1i49n_72", Rs = "_title_1i49n_77", Ws = "_body_1i49n_83", Ks = "_dismiss_1i49n_88", I = {
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
function Ui({
  tone: o = "info",
  variant: t = "soft",
  title: s,
  icon: n,
  children: i,
  dismissible: l = !1,
  onDismiss: a,
  className: _
}) {
  const [r, m] = V(!1);
  if (r)
    return null;
  const p = () => {
    m(!0), a?.();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      role: "alert",
      className: [I.alert, I[o], I[t], _].filter(Boolean).join(" "),
      children: [
        n != null && /* @__PURE__ */ e("span", { className: I.icon, "aria-hidden": "true", children: n }),
        /* @__PURE__ */ f("div", { className: I.content, children: [
          s && /* @__PURE__ */ e("div", { className: I.title, children: s }),
          i && /* @__PURE__ */ e("div", { className: I.body, children: i })
        ] }),
        l && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: I.dismiss,
            onClick: p,
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
function Gi({
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
const Js = "_row_15fbq_1", Qs = "_start_15fbq_7", Ys = "_center_15fbq_11", Zs = "_end_15fbq_15", en = "_stretch_15fbq_19", tn = "_baseline_15fbq_23", sn = "_noWrap_15fbq_51", Y = {
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
function Ji({
  gap: o,
  align: t = "stretch",
  justify: s = "start",
  wrap: n = !0,
  className: i,
  style: l,
  ...a
}) {
  const _ = {
    ...o != null ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        Y.row,
        Y[t],
        Y[`justify-${s}`],
        n ? null : Y.noWrap,
        i
      ].filter(Boolean).join(" "),
      style: _,
      ...a
    }
  );
}
const nn = "_column_1pa86_1", on = "_Size1_1pa86_6", ln = "_Size2_1pa86_7", cn = "_Size3_1pa86_8", an = "_Size4_1pa86_9", _n = "_Size5_1pa86_10", rn = "_Size6_1pa86_11", dn = "_Size7_1pa86_12", fn = "_Size8_1pa86_13", mn = "_Size9_1pa86_14", un = "_Size10_1pa86_15", pn = "_Size11_1pa86_16", hn = "_Size12_1pa86_17", gn = "_Offset1_1pa86_18", zn = "_Offset2_1pa86_19", xn = "_Offset3_1pa86_20", yn = "_Offset4_1pa86_21", bn = "_Offset5_1pa86_22", Sn = "_Offset6_1pa86_23", vn = "_Offset7_1pa86_24", On = "_Offset8_1pa86_25", kn = "_Offset9_1pa86_26", $n = "_Offset10_1pa86_27", wn = "_Offset11_1pa86_28", Mn = "_smSize1_1pa86_31", Nn = "_smSize2_1pa86_32", jn = "_smSize3_1pa86_33", Bn = "_smSize4_1pa86_34", Ln = "_smSize5_1pa86_35", Cn = "_smSize6_1pa86_36", En = "_smSize7_1pa86_37", In = "_smSize8_1pa86_38", qn = "_smSize9_1pa86_39", Tn = "_smSize10_1pa86_40", An = "_smSize11_1pa86_41", Dn = "_smSize12_1pa86_42", Vn = "_smOffset1_1pa86_43", Hn = "_smOffset2_1pa86_44", Pn = "_smOffset3_1pa86_45", Rn = "_smOffset4_1pa86_46", Wn = "_smOffset5_1pa86_47", Kn = "_smOffset6_1pa86_48", Fn = "_smOffset7_1pa86_49", Xn = "_smOffset8_1pa86_50", Un = "_smOffset9_1pa86_51", Gn = "_smOffset10_1pa86_52", Jn = "_smOffset11_1pa86_53", Qn = "_mdSize1_1pa86_57", Yn = "_mdSize2_1pa86_58", Zn = "_mdSize3_1pa86_59", eo = "_mdSize4_1pa86_60", to = "_mdSize5_1pa86_61", so = "_mdSize6_1pa86_62", no = "_mdSize7_1pa86_63", oo = "_mdSize8_1pa86_64", lo = "_mdSize9_1pa86_65", io = "_mdSize10_1pa86_66", co = "_mdSize11_1pa86_67", ao = "_mdSize12_1pa86_68", _o = "_mdOffset1_1pa86_69", ro = "_mdOffset2_1pa86_70", fo = "_mdOffset3_1pa86_71", mo = "_mdOffset4_1pa86_72", uo = "_mdOffset5_1pa86_73", po = "_mdOffset6_1pa86_74", ho = "_mdOffset7_1pa86_75", go = "_mdOffset8_1pa86_76", zo = "_mdOffset9_1pa86_77", xo = "_mdOffset10_1pa86_78", yo = "_mdOffset11_1pa86_79", bo = "_lgSize1_1pa86_83", So = "_lgSize2_1pa86_84", vo = "_lgSize3_1pa86_85", Oo = "_lgSize4_1pa86_86", ko = "_lgSize5_1pa86_87", $o = "_lgSize6_1pa86_88", wo = "_lgSize7_1pa86_89", Mo = "_lgSize8_1pa86_90", No = "_lgSize9_1pa86_91", jo = "_lgSize10_1pa86_92", Bo = "_lgSize11_1pa86_93", Lo = "_lgSize12_1pa86_94", Co = "_lgOffset1_1pa86_95", Eo = "_lgOffset2_1pa86_96", Io = "_lgOffset3_1pa86_97", qo = "_lgOffset4_1pa86_98", To = "_lgOffset5_1pa86_99", Ao = "_lgOffset6_1pa86_100", Do = "_lgOffset7_1pa86_101", Vo = "_lgOffset8_1pa86_102", Ho = "_lgOffset9_1pa86_103", Po = "_lgOffset10_1pa86_104", Ro = "_lgOffset11_1pa86_105", Wo = "_xlSize1_1pa86_109", Ko = "_xlSize2_1pa86_110", Fo = "_xlSize3_1pa86_111", Xo = "_xlSize4_1pa86_112", Uo = "_xlSize5_1pa86_113", Go = "_xlSize6_1pa86_114", Jo = "_xlSize7_1pa86_115", Qo = "_xlSize8_1pa86_116", Yo = "_xlSize9_1pa86_117", Zo = "_xlSize10_1pa86_118", el = "_xlSize11_1pa86_119", tl = "_xlSize12_1pa86_120", sl = "_xlOffset1_1pa86_121", nl = "_xlOffset2_1pa86_122", ol = "_xlOffset3_1pa86_123", ll = "_xlOffset4_1pa86_124", il = "_xlOffset5_1pa86_125", cl = "_xlOffset6_1pa86_126", al = "_xlOffset7_1pa86_127", _l = "_xlOffset8_1pa86_128", rl = "_xlOffset9_1pa86_129", dl = "_xlOffset10_1pa86_130", fl = "_xlOffset11_1pa86_131", ne = {
  column: nn,
  Size1: on,
  Size2: ln,
  Size3: cn,
  Size4: an,
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
  Offset5: bn,
  Offset6: Sn,
  Offset7: vn,
  Offset8: On,
  Offset9: kn,
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
  mdSize11: co,
  mdSize12: ao,
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
  lgSize1: bo,
  lgSize2: So,
  lgSize3: vo,
  lgSize4: Oo,
  lgSize5: ko,
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
  xlOffset6: cl,
  xlOffset7: al,
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
function Qi({ className: o, ...t }) {
  const s = [ne.column];
  for (const [O, S, h] of ml) {
    const y = t[S], k = t[h];
    y != null && s.push(ne[`${O}Size${y}`]), k != null && k > 0 && s.push(ne[`${O}Offset${k}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: a, sizeMd: _, offsetMd: r, sizeLg: m, offsetLg: p, sizeXl: u, offsetXl: z, ...x } = t;
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
function bl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [yl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const Sl = "_sidebar_1ktmd_1", vl = "_left_1ktmd_9", Ol = "_right_1ktmd_13", kl = "_collapsed_1ktmd_17", $l = "_responsive_1ktmd_25", wl = "_overlay_1ktmd_33", Ml = "_mask_1ktmd_53", T = {
  sidebar: Sl,
  left: vl,
  right: Ol,
  collapsed: kl,
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
  children: a,
  ..._
}) {
  return U(() => {
    if (!n || !t || i == null) return;
    const r = (m) => {
      m.key === "Escape" && i();
    };
    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r);
  }, [n, t, i]), /* @__PURE__ */ f(g, { children: [
    n && t ? /* @__PURE__ */ e("div", { className: `${T.mask} se-layout-mask`, "aria-hidden": "true", onClick: i }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          T.sidebar,
          o === "right" ? T.right : T.left,
          t ? null : T.collapsed,
          s ? T.responsive : null,
          n ? [T.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ..._,
        children: a
      }
    )
  ] });
}
function Yi({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], a = [], _ = [];
  return xe.forEach(t, (r) => {
    if (!le(r)) {
      l.push(r);
      return;
    }
    r.type === bl ? n.push(r) : r.type === zl ? i.push(r) : r.type === Nl ? (r.props.position === "right" ? _ : a).push(r) : l.push(r);
  }), /* @__PURE__ */ f("div", { className: [re.layout, o].filter(Boolean).join(" "), ...s, children: [
    n,
    /* @__PURE__ */ f("div", { className: re.row, children: [
      a,
      l,
      _
    ] }),
    i
  ] });
}
const jl = "_body_1tpk6_1", Bl = {
  body: jl
};
function Zi({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Bl.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Ll = "_track_1mkoz_1", Cl = "_bar_1mkoz_31", El = "_primary_1mkoz_39", Il = "_success_1mkoz_43", ql = "_warning_1mkoz_47", Tl = "_danger_1mkoz_51", Al = "_indeterminate_1mkoz_55", Dl = "_circular_1mkoz_69", Vl = "_fill_1mkoz_109", w = {
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
function ec({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: i = "linear",
  size: l = "md",
  className: a,
  ..._
}) {
  const r = t > 0 ? Math.min(t, Math.max(0, o)) : 0, m = t > 0 ? r / t * 100 : 0;
  if (i === "circular") {
    const p = typeof l == "string", u = 2, z = 10.5, x = 2 * Math.PI * z, O = x * (n ? 0.75 : 1), S = n ? 0 : x * (1 - m / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: p ? void 0 : l,
        height: p ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": _["aria-label"],
        "aria-labelledby": _["aria-labelledby"],
        "aria-valuenow": n ? void 0 : Math.round(r),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: _.id,
        style: _.style,
        className: [
          w.circular,
          w[s],
          p ? w[`circular-${l}`] : null,
          n ? w.indeterminate : null,
          a
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: w.track, cx: 12, cy: 12, r: z, strokeWidth: u }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: w.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: u,
              strokeDasharray: `${O} ${x}`,
              strokeDashoffset: S
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
        w.track,
        w[s],
        typeof l == "string" ? w[`linear-${l}`] : null,
        n ? w.indeterminate : null,
        a
      ].filter(Boolean).join(" "),
      ..._,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: w.bar,
          style: n ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const Hl = "_wrapper_t239v_1", Pl = {
  wrapper: Hl
};
function tc({
  defaultTheme: o = "light",
  onChange: t,
  label: s = "Dark mode",
  className: n
}) {
  const [i, l] = V(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : o === "dark");
  U(() => {
    document.documentElement.dataset.theme = i ? "dark" : "light";
  }, []);
  const a = (_) => {
    const r = _.target.checked;
    l(r), document.documentElement.dataset.theme = r ? "dark" : "light", t?.(r ? "dark" : "light");
  };
  return /* @__PURE__ */ f("label", { className: [Pl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Gt, { checked: i, onChange: a })
  ] });
}
const Rl = "_avatar_17s76_1", Wl = "_xs_17s76_12", Kl = "_sm_17s76_18", Fl = "_md_17s76_24", Xl = "_lg_17s76_30", Ul = "_xl_17s76_36", Gl = "_initials_17s76_42", Jl = "_image_17s76_57", Ql = "_status_17s76_64", Yl = "_online_17s76_84", Zl = "_offline_17s76_88", ei = "_away_17s76_92", P = {
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
}, Z = [
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
  return Z[t % Z.length] ?? Z[0];
}
function sc({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const a = ee(() => o ? ti(o) : "?", [o]), _ = ee(() => o ? si(o) : Z[0], [o]), r = t ? /* @__PURE__ */ e("img", { className: P.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: P.initials, style: { background: _ }, children: a });
  return /* @__PURE__ */ f(
    "span",
    {
      className: [
        P.avatar,
        P[n],
        i ? P[i] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? o ?? "avatar",
      children: [
        r,
        i && /* @__PURE__ */ e("span", { className: P.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ni = "_root_jppcr_1", oi = "_left_jppcr_6", li = "_right_jppcr_7", ii = "_panel_jppcr_12", ci = "_bottom_jppcr_20", ai = "_tabList_jppcr_24", _i = "_underline_jppcr_53", ri = "_pills_jppcr_72", di = "_tab_jppcr_24", fi = "_active_jppcr_113", mi = "_disabled_jppcr_139", B = {
  root: ni,
  left: oi,
  right: li,
  panel: ii,
  bottom: ci,
  tabList: ai,
  underline: _i,
  pills: ri,
  tab: di,
  active: fi,
  disabled: mi
};
function nc({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  position: l = "top",
  className: a
}) {
  const _ = D(), r = A(null), [m, p] = V(s ?? o[0]?.key ?? ""), u = t ?? m, z = l === "left" || l === "right", x = (h) => {
    p(h), n?.(h);
  }, O = (h) => {
    const y = o.filter((C) => !C.disabled), k = y.findIndex((C) => C.key === u);
    let $ = -1;
    h.key === "ArrowRight" || z && h.key === "ArrowDown" ? $ = (k + 1) % y.length : h.key === "ArrowLeft" || z && h.key === "ArrowUp" ? $ = (k - 1 + y.length) % y.length : h.key === "Home" ? $ = 0 : h.key === "End" && ($ = y.length - 1), $ >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(y[$]?.key ?? "")}"]`
    )?.focus(), x(y[$]?.key ?? ""));
  }, S = o.find((h) => h.key === u);
  return /* @__PURE__ */ f("div", { className: [B.root, B[l], a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [B.tabList, B[i], B[l]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: o.map((h) => {
          const y = h.key === u;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${_}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": y,
              "aria-controls": `${_}-panel-${h.key}`,
              tabIndex: y ? 0 : -1,
              disabled: h.disabled,
              className: [
                B.tab,
                y ? B.active : null,
                h.disabled ? B.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => x(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    S && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${_}-panel-${S.key}`,
        "aria-labelledby": `${_}-tab-${S.key}`,
        className: B.panel,
        children: S.content
      }
    )
  ] });
}
const ui = "_root_1rcwz_1", pi = "_item_1rcwz_9", hi = "_heading_1rcwz_13", gi = "_trigger_1rcwz_17", zi = "_disabled_1rcwz_34", xi = "_title_1rcwz_48", yi = "_chevron_1rcwz_52", bi = "_open_1rcwz_59", Si = "_content_1rcwz_63", L = {
  root: ui,
  item: pi,
  heading: hi,
  trigger: gi,
  disabled: zi,
  title: xi,
  chevron: yi,
  open: bi,
  content: Si
};
function oc({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const a = D(), [_, r] = V(n ?? []), m = s ?? _, p = (u) => {
    const z = m.includes(u) ? m.filter((x) => x !== u) : t ? [...m, u] : [u];
    r(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [L.root, l].filter(Boolean).join(" "), children: o.map((u) => {
    const z = m.includes(u.key), x = `${a}-panel-${u.key}`, O = `${a}-trigger-${u.key}`;
    return /* @__PURE__ */ f("div", { className: L.item, children: [
      /* @__PURE__ */ e("h3", { className: L.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: u.disabled,
          className: [
            L.trigger,
            u.disabled ? L.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(u.key),
          children: [
            /* @__PURE__ */ e("span", { className: L.title, children: u.title }),
            /* @__PURE__ */ e("span", { className: [L.chevron, z ? L.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": O,
          hidden: !z,
          className: L.content,
          children: u.content
        }
      )
    ] }, u.key);
  }) });
}
const vi = "_textarea_jj8z9_1", Oi = "_xs_jj8z9_25", ki = "_sm_jj8z9_30", $i = "_md_jj8z9_35", wi = "_lg_jj8z9_40", Mi = "_xl_jj8z9_45", oe = {
  textarea: vi,
  xs: Oi,
  sm: ki,
  md: $i,
  lg: wi,
  xl: Mi,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, lc = M(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  oc as Accordion,
  Ui as Alert,
  sc as Avatar,
  Ci as Badge,
  Zi as Body,
  Bi as Button,
  Li as Card,
  Ri as Checkbox,
  Qi as Column,
  Ki as Dialog,
  Ai as EmptyState,
  Di as Field,
  zl as Footer,
  bl as Header,
  Ii as Icon,
  Hi as Input,
  Vi as Label,
  Yi as Layout,
  ec as Progress,
  Ji as Row,
  Pi as Select,
  Nl as Sidebar,
  Gi as Skeleton,
  qi as Stat,
  Gt as Switch,
  Ti as Table,
  nc as Tabs,
  lc as Textarea,
  tc as ThemeSwitcher,
  Xi as ToastProvider,
  Wi as Tooltip,
  Ei as iconNames,
  Fi as useToast
};
