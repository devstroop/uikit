import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as le, cloneElement as de, useRef as q, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
const be = "_button_17bhu_1", ye = "_primary_17bhu_29", Se = "_secondary_17bhu_38", ve = "_ghost_17bhu_48", Oe = "_danger_17bhu_57", ke = "_success_17bhu_66", $e = "_info_17bhu_75", we = "_xs_17bhu_85", Me = "_sm_17bhu_91", Ne = "_md_17bhu_97", je = "_lg_17bhu_103", Be = "_xl_17bhu_109", Le = "_iconOnly_17bhu_115", Ce = "_fullWidth_17bhu_141", H = {
  button: be,
  primary: ye,
  secondary: Se,
  ghost: ve,
  danger: Oe,
  success: ke,
  info: $e,
  xs: we,
  sm: Me,
  md: Ne,
  lg: je,
  xl: Be,
  iconOnly: Le,
  fullWidth: Ce
}, Bi = $(function({
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
}), Ee = "_card_80b0o_1", Ie = "_elevated_80b0o_8", qe = "_outlined_80b0o_13", Te = "_interactive_80b0o_17", Ae = "_text_80b0o_25", De = "_header_80b0o_41", Ve = "_body_80b0o_48", He = "_footer_80b0o_58", P = {
  card: Ee,
  elevated: Ie,
  outlined: qe,
  interactive: Te,
  text: Ae,
  header: De,
  body: Ve,
  footer: He
}, Li = $(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: c, ...r }, _) {
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
}), Pe = "_badge_s3h6c_1", Re = "_xs_s3h6c_14", We = "_sm_s3h6c_19", Ke = "_md_s3h6c_24", Fe = "_lg_s3h6c_29", Xe = "_xl_s3h6c_34", Ue = "_neutral_s3h6c_40", Ge = "_primary_s3h6c_45", Je = "_success_s3h6c_50", Qe = "_warning_s3h6c_55", Ye = "_danger_s3h6c_60", Ze = "_solid_s3h6c_66", et = "_outline_s3h6c_91", U = {
  badge: Pe,
  xs: Re,
  sm: We,
  md: Ke,
  lg: Fe,
  xl: Xe,
  neutral: Ue,
  primary: Ge,
  success: Je,
  warning: Qe,
  danger: Ye,
  solid: Ze,
  outline: et
}, Ci = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...c }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], i].filter(Boolean).join(" "),
      ...c,
      children: l
    }
  );
}), tt = "_xs_1uch7_2", st = "_sm_1uch7_7", nt = "_md_1uch7_1", ot = "_lg_1uch7_17", lt = "_xl_1uch7_22", it = {
  xs: tt,
  sm: st,
  md: nt,
  lg: ot,
  xl: lt
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
], at = {
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
}, Ii = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, c) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [r ? it[s] : null, i].filter(Boolean).join(" "),
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
      children: at[t]
    }
  );
}), ct = "_stat_1ks65_1", _t = "_label_1ks65_8", rt = "_row_1ks65_16", dt = "_value_1ks65_22", ft = "_delta_1ks65_28", mt = "_success_1ks65_33", ut = "_danger_1ks65_37", ht = "_neutral_1ks65_41", pt = "_hint_1ks65_45", C = {
  stat: ct,
  label: _t,
  row: rt,
  value: dt,
  delta: ft,
  success: mt,
  danger: ut,
  neutral: ht,
  hint: pt
}, qi = $(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: c, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [C.stat, c].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: C.label, children: t }),
    /* @__PURE__ */ f("div", { className: C.row, children: [
      /* @__PURE__ */ e("div", { className: C.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [C.delta, C[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: C.hint, children: l })
  ] });
}), gt = "_wrap_1x8tx_1", zt = "_table_1x8tx_8", xt = "_start_1x8tx_40", bt = "_center_1x8tx_44", yt = "_end_1x8tx_48", St = "_empty_1x8tx_52", R = {
  wrap: gt,
  table: zt,
  start: xt,
  center: bt,
  end: yt,
  empty: St
};
function Ti({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
const vt = "_emptyState_1o7fc_1", Ot = "_icon_1o7fc_13", kt = "_title_1o7fc_18", $t = "_description_1o7fc_24", wt = "_action_1o7fc_30", W = {
  emptyState: vt,
  icon: Ot,
  title: kt,
  description: $t,
  action: wt
};
function Ai({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [W.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: W.icon, children: o }),
    /* @__PURE__ */ e("div", { className: W.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: W.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: W.action, children: n })
  ] });
}
const Mt = "_field_w9m4o_1", Nt = "_label_w9m4o_8", jt = "_required_w9m4o_14", Bt = "_hint_w9m4o_19", Lt = "_error_w9m4o_24", K = {
  field: Mt,
  label: Nt,
  required: jt,
  hint: Bt,
  error: Lt
};
function Di({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: c }) {
  const r = T(), _ = T(), m = i != null ? r : n != null ? _ : null, u = le(l) && m != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        m
      ].filter((h) => typeof h == "string").join(" ") || void 0,
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
const Ct = "_label_rv97n_1", Et = {
  label: Ct
}, Vi = $(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Et.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), It = "_input_109wo_1", qt = "_invalid_109wo_31", Tt = "_xs_109wo_37", At = "_sm_109wo_43", Dt = "_md_109wo_49", Vt = "_lg_109wo_55", Ht = "_xl_109wo_61", te = {
  input: It,
  invalid: qt,
  xs: Tt,
  sm: At,
  md: Dt,
  lg: Vt,
  xl: Ht
}, Hi = $(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...i
    }
  );
}), Pt = "_select_6ltg7_1", Rt = "_invalid_6ltg7_33", Wt = "_xs_6ltg7_39", Kt = "_sm_6ltg7_45", Ft = "_md_6ltg7_51", Xt = "_lg_6ltg7_57", Ut = "_xl_6ltg7_63", se = {
  select: Pt,
  invalid: Rt,
  xs: Wt,
  sm: Kt,
  md: Ft,
  lg: Xt,
  xl: Ut
}, Pi = $(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...c }, r) {
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
}), Gt = "_checkbox_sx3bj_1", Jt = {
  checkbox: Gt
}, Ri = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: [Jt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Qt = {
  switch: "_switch_1lrk0_1"
}, Yt = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      role: "switch",
      className: [Qt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Zt = "_trigger_4qzmh_1", es = "_tooltip_4qzmh_7", ts = "_top_4qzmh_34", ss = "_right_4qzmh_40", ns = "_bottom_4qzmh_46", os = "_left_4qzmh_52", ls = "_arrow_4qzmh_58", G = {
  trigger: Zt,
  tooltip: es,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: ts,
  right: ss,
  bottom: ns,
  left: os,
  arrow: ls
};
function Wi({
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
  const h = le(t) ? de(
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
        h,
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
const is = "_dialog_gp2l5_1", as = "_sm_gp2l5_30", cs = "_md_gp2l5_34", _s = "_lg_gp2l5_38", rs = "_header_gp2l5_42", ds = "_title_gp2l5_51", fs = "_description_gp2l5_58", ms = "_close_gp2l5_65", us = "_body_gp2l5_84", hs = "_footer_gp2l5_90", B = {
  dialog: is,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: as,
  md: cs,
  lg: _s,
  header: rs,
  title: ds,
  description: fs,
  close: ms,
  body: us,
  footer: hs
};
function Ki({
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
    const h = _.current;
    h && (o && !h.open ? h.showModal() : !o && h.open && h.close());
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
const ps = "_viewport_1ex2n_1", gs = "_topLeft_1ex2n_13", zs = "_topRight_1ex2n_20", xs = "_bottomLeft_1ex2n_25", bs = "_toast_1ex2n_30", ys = "_leaving_1ex2n_61", Ss = "_info_1ex2n_77", vs = "_success_1ex2n_82", Os = "_warning_1ex2n_87", ks = "_danger_1ex2n_92", $s = "_content_1ex2n_97", ws = "_title_1ex2n_102", Ms = "_description_1ex2n_125", Ns = "_dismiss_1ex2n_132", js = "_actions_1ex2n_151", Bs = "_action_1ex2n_151", Ls = "_cancel_1ex2n_159", Cs = "_progress_1ex2n_195", O = {
  viewport: ps,
  topLeft: gs,
  topRight: zs,
  bottomLeft: xs,
  toast: bs,
  "se-toast-in": "_se-toast-in_1ex2n_1",
  leaving: ys,
  "se-toast-out": "_se-toast-out_1ex2n_1",
  info: Ss,
  success: vs,
  warning: Os,
  danger: ks,
  content: $s,
  title: ws,
  description: Ms,
  dismiss: Ns,
  actions: js,
  action: Bs,
  cancel: Ls,
  progress: Cs,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Fi() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const Es = 200, Is = {
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
  const [l, c] = A([]), [r, _] = A(!1), m = q([]), u = q(/* @__PURE__ */ new Map()), h = q(!1), z = q(0), x = (d) => {
    h.current = d, _(d);
  }, p = w((d) => {
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
    h.current || u.current.forEach((d, a) => p(a)), x(!0);
  }, [p]), ee = w(() => {
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
      }), window.setTimeout(() => M(d), Es));
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
      u.current.set(d.id, a), h.current || v(d.id);
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
  ), he = n ? Z : void 0, pe = n ? ee : void 0;
  return /* @__PURE__ */ f(fe.Provider, { value: me, children: [
    o,
    ue.map((d) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          O.viewport,
          O[Is[d]],
          i
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: he,
        onMouseLeave: pe,
        children: l.filter((a) => a.position === d).map((a) => /* @__PURE__ */ f(
          "div",
          {
            role: a.tone === "danger" ? "alert" : "status",
            "data-paused": r ? "true" : "false",
            "data-clickable": a.closeOnClick ? "true" : "false",
            className: [
              O.toast,
              O[a.tone],
              a.leaving ? O.leaving : ""
            ].filter(Boolean).join(" "),
            onClick: a.closeOnClick ? () => X(a.id) : void 0,
            children: [
              /* @__PURE__ */ f("div", { className: O.content, children: [
                /* @__PURE__ */ e("div", { className: O.title, children: a.title }),
                a.description && /* @__PURE__ */ e("div", { className: O.description, children: a.description }),
                (a.action || a.cancel) && /* @__PURE__ */ f("div", { className: O.actions, children: [
                  a.action && /* @__PURE__ */ e(
                    "button",
                    {
                      type: "button",
                      className: O.action,
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
                      className: O.cancel,
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
                  className: O.dismiss,
                  onClick: () => X(a.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              ),
              a.showProgress && a.durationMs > 0 && /* @__PURE__ */ e(
                "div",
                {
                  className: O.progress,
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
const qs = "_alert_1i49n_1", Ts = "_info_1i49n_15", As = "_success_1i49n_20", Ds = "_warning_1i49n_25", Vs = "_danger_1i49n_30", Hs = "_soft_1i49n_37", Ps = "_outline_1i49n_44", Rs = "_solid_1i49n_52", Ws = "_icon_1i49n_66", Ks = "_content_1i49n_72", Fs = "_title_1i49n_77", Xs = "_body_1i49n_83", Us = "_dismiss_1i49n_88", L = {
  alert: qs,
  info: Ts,
  success: As,
  warning: Ds,
  danger: Vs,
  soft: Hs,
  outline: Ps,
  solid: Rs,
  icon: Ws,
  content: Ks,
  title: Fs,
  body: Xs,
  dismiss: Us
};
function Ui({
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
const Gs = "_skeleton_35ckz_1", Js = "_text_35ckz_35", Qs = "_circle_35ckz_40", Ys = "_rect_35ckz_44", _e = {
  skeleton: Gs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Js,
  circle: Qs,
  rect: Ys
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
const Zs = "_row_15fbq_1", en = "_start_15fbq_7", tn = "_center_15fbq_11", sn = "_end_15fbq_15", nn = "_stretch_15fbq_19", on = "_baseline_15fbq_23", ln = "_noWrap_15fbq_51", J = {
  row: Zs,
  start: en,
  center: tn,
  end: sn,
  stretch: nn,
  baseline: on,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: ln
};
function Ji({
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
const an = "_column_1pa86_1", cn = "_Size1_1pa86_6", _n = "_Size2_1pa86_7", rn = "_Size3_1pa86_8", dn = "_Size4_1pa86_9", fn = "_Size5_1pa86_10", mn = "_Size6_1pa86_11", un = "_Size7_1pa86_12", hn = "_Size8_1pa86_13", pn = "_Size9_1pa86_14", gn = "_Size10_1pa86_15", zn = "_Size11_1pa86_16", xn = "_Size12_1pa86_17", bn = "_Offset1_1pa86_18", yn = "_Offset2_1pa86_19", Sn = "_Offset3_1pa86_20", vn = "_Offset4_1pa86_21", On = "_Offset5_1pa86_22", kn = "_Offset6_1pa86_23", $n = "_Offset7_1pa86_24", wn = "_Offset8_1pa86_25", Mn = "_Offset9_1pa86_26", Nn = "_Offset10_1pa86_27", jn = "_Offset11_1pa86_28", Bn = "_smSize1_1pa86_31", Ln = "_smSize2_1pa86_32", Cn = "_smSize3_1pa86_33", En = "_smSize4_1pa86_34", In = "_smSize5_1pa86_35", qn = "_smSize6_1pa86_36", Tn = "_smSize7_1pa86_37", An = "_smSize8_1pa86_38", Dn = "_smSize9_1pa86_39", Vn = "_smSize10_1pa86_40", Hn = "_smSize11_1pa86_41", Pn = "_smSize12_1pa86_42", Rn = "_smOffset1_1pa86_43", Wn = "_smOffset2_1pa86_44", Kn = "_smOffset3_1pa86_45", Fn = "_smOffset4_1pa86_46", Xn = "_smOffset5_1pa86_47", Un = "_smOffset6_1pa86_48", Gn = "_smOffset7_1pa86_49", Jn = "_smOffset8_1pa86_50", Qn = "_smOffset9_1pa86_51", Yn = "_smOffset10_1pa86_52", Zn = "_smOffset11_1pa86_53", eo = "_mdSize1_1pa86_57", to = "_mdSize2_1pa86_58", so = "_mdSize3_1pa86_59", no = "_mdSize4_1pa86_60", oo = "_mdSize5_1pa86_61", lo = "_mdSize6_1pa86_62", io = "_mdSize7_1pa86_63", ao = "_mdSize8_1pa86_64", co = "_mdSize9_1pa86_65", _o = "_mdSize10_1pa86_66", ro = "_mdSize11_1pa86_67", fo = "_mdSize12_1pa86_68", mo = "_mdOffset1_1pa86_69", uo = "_mdOffset2_1pa86_70", ho = "_mdOffset3_1pa86_71", po = "_mdOffset4_1pa86_72", go = "_mdOffset5_1pa86_73", zo = "_mdOffset6_1pa86_74", xo = "_mdOffset7_1pa86_75", bo = "_mdOffset8_1pa86_76", yo = "_mdOffset9_1pa86_77", So = "_mdOffset10_1pa86_78", vo = "_mdOffset11_1pa86_79", Oo = "_lgSize1_1pa86_83", ko = "_lgSize2_1pa86_84", $o = "_lgSize3_1pa86_85", wo = "_lgSize4_1pa86_86", Mo = "_lgSize5_1pa86_87", No = "_lgSize6_1pa86_88", jo = "_lgSize7_1pa86_89", Bo = "_lgSize8_1pa86_90", Lo = "_lgSize9_1pa86_91", Co = "_lgSize10_1pa86_92", Eo = "_lgSize11_1pa86_93", Io = "_lgSize12_1pa86_94", qo = "_lgOffset1_1pa86_95", To = "_lgOffset2_1pa86_96", Ao = "_lgOffset3_1pa86_97", Do = "_lgOffset4_1pa86_98", Vo = "_lgOffset5_1pa86_99", Ho = "_lgOffset6_1pa86_100", Po = "_lgOffset7_1pa86_101", Ro = "_lgOffset8_1pa86_102", Wo = "_lgOffset9_1pa86_103", Ko = "_lgOffset10_1pa86_104", Fo = "_lgOffset11_1pa86_105", Xo = "_xlSize1_1pa86_109", Uo = "_xlSize2_1pa86_110", Go = "_xlSize3_1pa86_111", Jo = "_xlSize4_1pa86_112", Qo = "_xlSize5_1pa86_113", Yo = "_xlSize6_1pa86_114", Zo = "_xlSize7_1pa86_115", el = "_xlSize8_1pa86_116", tl = "_xlSize9_1pa86_117", sl = "_xlSize10_1pa86_118", nl = "_xlSize11_1pa86_119", ol = "_xlSize12_1pa86_120", ll = "_xlOffset1_1pa86_121", il = "_xlOffset2_1pa86_122", al = "_xlOffset3_1pa86_123", cl = "_xlOffset4_1pa86_124", _l = "_xlOffset5_1pa86_125", rl = "_xlOffset6_1pa86_126", dl = "_xlOffset7_1pa86_127", fl = "_xlOffset8_1pa86_128", ml = "_xlOffset9_1pa86_129", ul = "_xlOffset10_1pa86_130", hl = "_xlOffset11_1pa86_131", ne = {
  column: an,
  Size1: cn,
  Size2: _n,
  Size3: rn,
  Size4: dn,
  Size5: fn,
  Size6: mn,
  Size7: un,
  Size8: hn,
  Size9: pn,
  Size10: gn,
  Size11: zn,
  Size12: xn,
  Offset1: bn,
  Offset2: yn,
  Offset3: Sn,
  Offset4: vn,
  Offset5: On,
  Offset6: kn,
  Offset7: $n,
  Offset8: wn,
  Offset9: Mn,
  Offset10: Nn,
  Offset11: jn,
  smSize1: Bn,
  smSize2: Ln,
  smSize3: Cn,
  smSize4: En,
  smSize5: In,
  smSize6: qn,
  smSize7: Tn,
  smSize8: An,
  smSize9: Dn,
  smSize10: Vn,
  smSize11: Hn,
  smSize12: Pn,
  smOffset1: Rn,
  smOffset2: Wn,
  smOffset3: Kn,
  smOffset4: Fn,
  smOffset5: Xn,
  smOffset6: Un,
  smOffset7: Gn,
  smOffset8: Jn,
  smOffset9: Qn,
  smOffset10: Yn,
  smOffset11: Zn,
  mdSize1: eo,
  mdSize2: to,
  mdSize3: so,
  mdSize4: no,
  mdSize5: oo,
  mdSize6: lo,
  mdSize7: io,
  mdSize8: ao,
  mdSize9: co,
  mdSize10: _o,
  mdSize11: ro,
  mdSize12: fo,
  mdOffset1: mo,
  mdOffset2: uo,
  mdOffset3: ho,
  mdOffset4: po,
  mdOffset5: go,
  mdOffset6: zo,
  mdOffset7: xo,
  mdOffset8: bo,
  mdOffset9: yo,
  mdOffset10: So,
  mdOffset11: vo,
  lgSize1: Oo,
  lgSize2: ko,
  lgSize3: $o,
  lgSize4: wo,
  lgSize5: Mo,
  lgSize6: No,
  lgSize7: jo,
  lgSize8: Bo,
  lgSize9: Lo,
  lgSize10: Co,
  lgSize11: Eo,
  lgSize12: Io,
  lgOffset1: qo,
  lgOffset2: To,
  lgOffset3: Ao,
  lgOffset4: Do,
  lgOffset5: Vo,
  lgOffset6: Ho,
  lgOffset7: Po,
  lgOffset8: Ro,
  lgOffset9: Wo,
  lgOffset10: Ko,
  lgOffset11: Fo,
  xlSize1: Xo,
  xlSize2: Uo,
  xlSize3: Go,
  xlSize4: Jo,
  xlSize5: Qo,
  xlSize6: Yo,
  xlSize7: Zo,
  xlSize8: el,
  xlSize9: tl,
  xlSize10: sl,
  xlSize11: nl,
  xlSize12: ol,
  xlOffset1: ll,
  xlOffset2: il,
  xlOffset3: al,
  xlOffset4: cl,
  xlOffset5: _l,
  xlOffset6: rl,
  xlOffset7: dl,
  xlOffset8: fl,
  xlOffset9: ml,
  xlOffset10: ul,
  xlOffset11: hl
}, pl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Qi({ className: o, ...t }) {
  const s = [ne.column];
  for (const [p, b, M] of pl) {
    const S = t[b], v = t[M];
    S != null && s.push(ne[`${p}Size${S}`]), v != null && v > 0 && s.push(ne[`${p}Offset${v}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: c, sizeMd: r, offsetMd: _, sizeLg: m, offsetLg: u, sizeXl: h, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const gl = "_layout_1pcye_1", zl = "_row_1pcye_7", re = {
  layout: gl,
  row: zl
}, xl = "_footer_14whp_1", bl = {
  footer: xl
};
function yl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [bl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const Sl = "_header_2mimk_1", vl = {
  header: Sl
};
function Ol({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [vl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const kl = "_sidebar_1ktmd_1", $l = "_left_1ktmd_9", wl = "_right_1ktmd_13", Ml = "_collapsed_1ktmd_17", Nl = "_responsive_1ktmd_25", jl = "_overlay_1ktmd_33", Bl = "_mask_1ktmd_53", E = {
  sidebar: kl,
  left: $l,
  right: wl,
  collapsed: Ml,
  responsive: Nl,
  overlay: jl,
  mask: Bl
};
function Ll({
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
function Yi({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], c = [], r = [];
  return xe.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === Ol ? n.push(_) : _.type === yl ? i.push(_) : _.type === Ll ? (_.props.position === "right" ? r : c).push(_) : l.push(_);
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
const Cl = "_body_1tpk6_1", El = {
  body: Cl
};
function Zi({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [El.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Il = "_track_1mkoz_1", ql = "_bar_1mkoz_31", Tl = "_primary_1mkoz_39", Al = "_success_1mkoz_43", Dl = "_warning_1mkoz_47", Vl = "_danger_1mkoz_51", Hl = "_indeterminate_1mkoz_55", Pl = "_circular_1mkoz_69", Rl = "_fill_1mkoz_109", k = {
  track: Il,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: ql,
  primary: Tl,
  success: Al,
  warning: Dl,
  danger: Vl,
  indeterminate: Hl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Pl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Rl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function ea({
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
    const u = typeof l == "string", h = 2, z = 10.5, x = 2 * Math.PI * z, p = x * (n ? 0.75 : 1), b = n ? 0 : x * (1 - m / 100);
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
          k.circular,
          k[s],
          u ? k[`circular-${l}`] : null,
          n ? k.indeterminate : null,
          c
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: k.track, cx: 12, cy: 12, r: z, strokeWidth: h }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: k.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: h,
              strokeDasharray: `${p} ${x}`,
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
        k.track,
        k[s],
        typeof l == "string" ? k[`linear-${l}`] : null,
        n ? k.indeterminate : null,
        c
      ].filter(Boolean).join(" "),
      ...r,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: k.bar,
          style: n ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const Wl = "_wrapper_t239v_1", Kl = {
  wrapper: Wl
};
function ta({
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
  return /* @__PURE__ */ f("label", { className: [Kl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Yt, { checked: i, onChange: c })
  ] });
}
const Fl = "_avatar_17s76_1", Xl = "_xs_17s76_12", Ul = "_sm_17s76_18", Gl = "_md_17s76_24", Jl = "_lg_17s76_30", Ql = "_xl_17s76_36", Yl = "_initials_17s76_42", Zl = "_image_17s76_57", ei = "_status_17s76_64", ti = "_online_17s76_84", si = "_offline_17s76_88", ni = "_away_17s76_92", V = {
  avatar: Fl,
  xs: Xl,
  sm: Ul,
  md: Gl,
  lg: Jl,
  xl: Ql,
  initials: Yl,
  image: Zl,
  status: ei,
  online: ti,
  offline: si,
  away: ni
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function oi(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function li(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Q[t % Q.length] ?? Q[0];
}
function sa({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const c = Y(() => o ? oi(o) : "?", [o]), r = Y(() => o ? li(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: c });
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
const ii = "_root_1k1gx_1", ai = "_tabList_1k1gx_6", ci = "_underline_1k1gx_12", _i = "_pills_1k1gx_16", ri = "_tab_1k1gx_6", di = "_active_1k1gx_36", fi = "_disabled_1k1gx_50", mi = "_panel_1k1gx_64", I = {
  root: ii,
  tabList: ai,
  underline: ci,
  pills: _i,
  tab: ri,
  active: di,
  disabled: fi,
  panel: mi
};
function na({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  className: l
}) {
  const c = T(), r = q(null), [_, m] = A(s ?? o[0]?.key ?? ""), u = t ?? _, h = (p) => {
    m(p), n?.(p);
  }, z = (p) => {
    const b = o.filter((v) => !v.disabled), M = b.findIndex((v) => v.key === u);
    let S = -1;
    p.key === "ArrowRight" ? S = (M + 1) % b.length : p.key === "ArrowLeft" ? S = (M - 1 + b.length) % b.length : p.key === "Home" ? S = 0 : p.key === "End" && (S = b.length - 1), S >= 0 && (p.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[S]?.key ?? "")}"]`
    )?.focus(), h(b[S]?.key ?? ""));
  }, x = o.find((p) => p.key === u);
  return /* @__PURE__ */ f("div", { className: [I.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [I.tabList, I[i]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: o.map((p) => {
          const b = p.key === u;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${p.key}`,
              "data-tab-key": p.key,
              "aria-selected": b,
              "aria-controls": `${c}-panel-${p.key}`,
              tabIndex: b ? 0 : -1,
              disabled: p.disabled,
              className: [
                I.tab,
                b ? I.active : null,
                p.disabled ? I.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => h(p.key),
              children: p.label
            },
            p.key
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
const ui = "_root_1rcwz_1", hi = "_item_1rcwz_9", pi = "_heading_1rcwz_13", gi = "_trigger_1rcwz_17", zi = "_disabled_1rcwz_34", xi = "_title_1rcwz_48", bi = "_chevron_1rcwz_52", yi = "_open_1rcwz_59", Si = "_content_1rcwz_63", j = {
  root: ui,
  item: hi,
  heading: pi,
  trigger: gi,
  disabled: zi,
  title: xi,
  chevron: bi,
  open: yi,
  content: Si
};
function oa({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const c = T(), [r, _] = A(n ?? []), m = s ?? r, u = (h) => {
    const z = m.includes(h) ? m.filter((x) => x !== h) : t ? [...m, h] : [h];
    _(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [j.root, l].filter(Boolean).join(" "), children: o.map((h) => {
    const z = m.includes(h.key), x = `${c}-panel-${h.key}`, p = `${c}-trigger-${h.key}`;
    return /* @__PURE__ */ f("div", { className: j.item, children: [
      /* @__PURE__ */ e("h3", { className: j.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: p,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: h.disabled,
          className: [
            j.trigger,
            h.disabled ? j.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => u(h.key),
          children: [
            /* @__PURE__ */ e("span", { className: j.title, children: h.title }),
            /* @__PURE__ */ e("span", { className: [j.chevron, z ? j.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: x,
          role: "region",
          "aria-labelledby": p,
          hidden: !z,
          className: j.content,
          children: h.content
        }
      )
    ] }, h.key);
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
}, la = $(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  oa as Accordion,
  Ui as Alert,
  sa as Avatar,
  Ci as Badge,
  Zi as Body,
  Bi as Button,
  Li as Card,
  Ri as Checkbox,
  Qi as Column,
  Ki as Dialog,
  Ai as EmptyState,
  Di as Field,
  yl as Footer,
  Ol as Header,
  Ii as Icon,
  Hi as Input,
  Vi as Label,
  Yi as Layout,
  ea as Progress,
  Ji as Row,
  Pi as Select,
  Ll as Sidebar,
  Gi as Skeleton,
  qi as Stat,
  Yt as Switch,
  Ti as Table,
  na as Tabs,
  la as Textarea,
  ta as ThemeSwitcher,
  Xi as ToastProvider,
  Wi as Tooltip,
  Ei as iconNames,
  Fi as useToast
};
