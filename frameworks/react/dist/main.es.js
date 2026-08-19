import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as le, cloneElement as de, useRef as I, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
const be = "_button_17bhu_1", ye = "_primary_17bhu_29", Se = "_secondary_17bhu_38", ve = "_ghost_17bhu_48", Oe = "_danger_17bhu_57", ke = "_success_17bhu_66", $e = "_info_17bhu_75", we = "_xs_17bhu_85", Me = "_sm_17bhu_91", Ne = "_md_17bhu_97", je = "_lg_17bhu_103", Be = "_xl_17bhu_109", Le = "_iconOnly_17bhu_115", qe = "_fullWidth_17bhu_141", H = {
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
  fullWidth: qe
}, Ci = $(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: i = !1,
  className: l,
  type: c = "button",
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
  return /* @__PURE__ */ e("button", { ref: _, type: c, className: u, ...r });
}), Ce = "_card_lt977_1", Ee = "_elevated_lt977_8", Ie = "_outlined_lt977_13", Te = "_interactive_lt977_17", Ae = "_header_lt977_35", De = "_body_lt977_42", Ve = "_footer_lt977_52", P = {
  card: Ce,
  elevated: Ee,
  outlined: Ie,
  interactive: Te,
  header: Ae,
  body: De,
  footer: Ve
}, Ei = $(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: c, ...r }, _) {
  const u = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: _,
      tabIndex: u ? 0 : void 0,
      onKeyDown: (h) => {
        c?.(h), !(!u || h.key !== "Enter" && h.key !== " ") && (h.preventDefault(), h.currentTarget.click());
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
}), He = "_badge_s3h6c_1", Pe = "_xs_s3h6c_14", Re = "_sm_s3h6c_19", We = "_md_s3h6c_24", Ke = "_lg_s3h6c_29", Fe = "_xl_s3h6c_34", Xe = "_neutral_s3h6c_40", Ue = "_primary_s3h6c_45", Ge = "_success_s3h6c_50", Je = "_warning_s3h6c_55", Qe = "_danger_s3h6c_60", Ye = "_solid_s3h6c_66", Ze = "_outline_s3h6c_91", U = {
  badge: He,
  xs: Pe,
  sm: Re,
  md: We,
  lg: Ke,
  xl: Fe,
  neutral: Xe,
  primary: Ue,
  success: Ge,
  warning: Je,
  danger: Qe,
  solid: Ye,
  outline: Ze
}, Ii = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...c }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], i].filter(Boolean).join(" "),
      ...c,
      children: l
    }
  );
}), et = "_xs_1uch7_2", tt = "_sm_1uch7_7", st = "_md_1uch7_1", nt = "_lg_1uch7_17", ot = "_xl_1uch7_22", lt = {
  xs: et,
  sm: tt,
  md: st,
  lg: nt,
  xl: ot
}, Ti = [
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
], it = {
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
}, Ai = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, c) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [r ? lt[s] : null, i].filter(Boolean).join(" "),
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
      children: it[t]
    }
  );
}), at = "_stat_1ks65_1", ct = "_label_1ks65_8", _t = "_row_1ks65_16", rt = "_value_1ks65_22", dt = "_delta_1ks65_28", ft = "_success_1ks65_33", mt = "_danger_1ks65_37", ut = "_neutral_1ks65_41", ht = "_hint_1ks65_45", q = {
  stat: at,
  label: ct,
  row: _t,
  value: rt,
  delta: dt,
  success: ft,
  danger: mt,
  neutral: ut,
  hint: ht
}, Di = $(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: c, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [q.stat, c].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ f("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: q.hint, children: l })
  ] });
}), pt = "_wrap_1x8tx_1", gt = "_table_1x8tx_8", zt = "_start_1x8tx_40", xt = "_center_1x8tx_44", bt = "_end_1x8tx_48", yt = "_empty_1x8tx_52", R = {
  wrap: pt,
  table: gt,
  start: zt,
  center: xt,
  end: bt,
  empty: yt
};
function Vi({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
const St = "_emptyState_1o7fc_1", vt = "_icon_1o7fc_13", Ot = "_title_1o7fc_18", kt = "_description_1o7fc_24", $t = "_action_1o7fc_30", W = {
  emptyState: St,
  icon: vt,
  title: Ot,
  description: kt,
  action: $t
};
function Hi({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [W.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: W.icon, children: o }),
    /* @__PURE__ */ e("div", { className: W.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: W.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: W.action, children: n })
  ] });
}
const wt = "_field_w9m4o_1", Mt = "_label_w9m4o_8", Nt = "_required_w9m4o_14", jt = "_hint_w9m4o_19", Bt = "_error_w9m4o_24", K = {
  field: wt,
  label: Mt,
  required: Nt,
  hint: jt,
  error: Bt
};
function Pi({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: c }) {
  const r = T(), _ = T(), u = i != null ? r : n != null ? _ : null, h = le(l) && u != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        u
      ].filter((m) => typeof m == "string").join(" ") || void 0,
      "aria-invalid": i != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ f("div", { className: [K.field, c].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ f("label", { className: K.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: K.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    i != null ? /* @__PURE__ */ e("div", { id: r, className: K.error, role: "alert", children: i }) : n != null ? /* @__PURE__ */ e("div", { id: _, className: K.hint, children: n }) : null
  ] });
}
const Lt = "_label_rv97n_1", qt = {
  label: Lt
}, Ri = $(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [qt.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Ct = "_input_109wo_1", Et = "_invalid_109wo_31", It = "_xs_109wo_37", Tt = "_sm_109wo_43", At = "_md_109wo_49", Dt = "_lg_109wo_55", Vt = "_xl_109wo_61", te = {
  input: Ct,
  invalid: Et,
  xs: It,
  sm: Tt,
  md: At,
  lg: Dt,
  xl: Vt
}, Wi = $(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...i
    }
  );
}), Ht = "_select_6ltg7_1", Pt = "_invalid_6ltg7_33", Rt = "_xs_6ltg7_39", Wt = "_sm_6ltg7_45", Kt = "_md_6ltg7_51", Ft = "_lg_6ltg7_57", Xt = "_xl_6ltg7_63", se = {
  select: Ht,
  invalid: Pt,
  xs: Rt,
  sm: Wt,
  md: Kt,
  lg: Ft,
  xl: Xt
}, Ki = $(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...c }, r) {
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
}), Ut = "_checkbox_sx3bj_1", Gt = {
  checkbox: Ut
}, Fi = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: [Gt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Jt = {
  switch: "_switch_1lrk0_1"
}, Qt = $(function({ className: t, ...s }, n) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: n,
      type: "checkbox",
      role: "switch",
      className: [Jt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Yt = "_trigger_4qzmh_1", Zt = "_tooltip_4qzmh_7", es = "_top_4qzmh_34", ts = "_right_4qzmh_40", ss = "_bottom_4qzmh_46", ns = "_left_4qzmh_52", os = "_arrow_4qzmh_58", G = {
  trigger: Yt,
  tooltip: Zt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: es,
  right: ts,
  bottom: ss,
  left: ns,
  arrow: os
};
function Xi({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: i
}) {
  const l = T(), c = I(null), [r, _] = A(!1), u = () => {
    c.current = window.setTimeout(() => _(!0), n);
  }, h = () => {
    c.current !== null && (window.clearTimeout(c.current), c.current = null), _(!1);
  };
  F(() => {
    if (!r) return;
    const z = (x) => {
      x.key === "Escape" && h();
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
      onMouseLeave: h,
      onFocus: u,
      onBlur: h,
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
const ls = "_dialog_gp2l5_1", is = "_sm_gp2l5_30", as = "_md_gp2l5_34", cs = "_lg_gp2l5_38", _s = "_header_gp2l5_42", rs = "_title_gp2l5_51", ds = "_description_gp2l5_58", fs = "_close_gp2l5_65", ms = "_body_gp2l5_84", us = "_footer_gp2l5_90", L = {
  dialog: ls,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: is,
  md: as,
  lg: cs,
  header: _s,
  title: rs,
  description: ds,
  close: fs,
  body: ms,
  footer: us
};
function Ui({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: i,
  footer: l,
  size: c = "md",
  className: r
}) {
  const _ = I(null), u = T(), h = T();
  return F(() => {
    const m = _.current;
    m && (o && !m.open ? m.showModal() : !o && m.open && m.close());
  }, [o]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: _,
      className: [L.dialog, L[c], r].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? u : void 0,
      "aria-describedby": n ? h : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: L.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: u, className: L.title, children: s }),
            n && /* @__PURE__ */ e("p", { id: h, className: L.description, children: n })
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
const hs = "_viewport_1ex2n_1", ps = "_topLeft_1ex2n_13", gs = "_topRight_1ex2n_20", zs = "_bottomLeft_1ex2n_25", xs = "_toast_1ex2n_30", bs = "_leaving_1ex2n_61", ys = "_info_1ex2n_77", Ss = "_success_1ex2n_82", vs = "_warning_1ex2n_87", Os = "_danger_1ex2n_92", ks = "_content_1ex2n_97", $s = "_title_1ex2n_102", ws = "_description_1ex2n_125", Ms = "_dismiss_1ex2n_132", Ns = "_actions_1ex2n_151", js = "_action_1ex2n_151", Bs = "_cancel_1ex2n_159", Ls = "_progress_1ex2n_195", O = {
  viewport: hs,
  topLeft: ps,
  topRight: gs,
  bottomLeft: zs,
  toast: xs,
  "se-toast-in": "_se-toast-in_1ex2n_1",
  leaving: bs,
  "se-toast-out": "_se-toast-out_1ex2n_1",
  info: ys,
  success: Ss,
  warning: vs,
  danger: Os,
  content: ks,
  title: $s,
  description: ws,
  dismiss: Ms,
  actions: Ns,
  action: js,
  cancel: Bs,
  progress: Ls,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Gi() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const qs = 200, Cs = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Ji({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: i
}) {
  const [l, c] = A([]), [r, _] = A(!1), u = I([]), h = I(/* @__PURE__ */ new Map()), m = I(!1), z = I(0), x = (d) => {
    m.current = d, _(d);
  }, p = w((d) => {
    const a = h.current.get(d);
    a && (window.clearTimeout(a.timeoutId), a.remaining = Math.max(0, a.remaining - (Date.now() - a.startedAt)));
  }, []), b = w((d) => {
    const a = h.current.get(d);
    a && (window.clearTimeout(a.timeoutId), h.current.delete(d));
  }, []), M = w(
    (d) => {
      b(d), c((a) => {
        const y = a.filter((N) => N.id !== d);
        return u.current = y, y;
      });
    },
    [b]
  ), S = w(
    (d) => {
      const a = u.current.find((y) => y.id === d);
      !a || a.leaving || (a.onAutoClose?.(), M(d));
    },
    [M]
  ), v = w(
    (d) => {
      const a = h.current.get(d);
      !a || a.remaining <= 0 || (a.startedAt = Date.now(), a.timeoutId = window.setTimeout(() => S(d), a.remaining));
    },
    [S]
  ), Z = w(() => {
    m.current || h.current.forEach((d, a) => p(a)), x(!0);
  }, [p]), ee = w(() => {
    h.current.forEach((d, a) => v(a)), x(!1);
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
      const a = u.current.find((y) => y.id === d);
      !a || a.leaving || (a.onDismiss?.(), c((y) => {
        const N = y.map((D) => D.id === d ? { ...D, leaving: !0 } : D);
        return u.current = N, N;
      }), window.setTimeout(() => M(d), qs));
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
      h.current.set(d.id, a), m.current || v(d.id);
    },
    [v]
  ), ae = w(
    (d) => {
      const a = u.current.find((N) => N.id === d.id), y = {
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
        return u.current = D, D;
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
          O[Cs[d]],
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
const Es = "_alert_eqii4_1", Is = "_xs_eqii4_22", Ts = "_sm_eqii4_32", As = "_lg_eqii4_42", Ds = "_xl_eqii4_52", Vs = "_info_eqii4_63", Hs = "_success_eqii4_68", Ps = "_warning_eqii4_73", Rs = "_danger_eqii4_78", Ws = "_soft_eqii4_85", Ks = "_outline_eqii4_92", Fs = "_solid_eqii4_100", Xs = "_icon_eqii4_114", Us = "_content_eqii4_120", Gs = "_title_eqii4_125", Js = "_body_eqii4_131", Qs = "_dismiss_eqii4_137", j = {
  alert: Es,
  xs: Is,
  sm: Ts,
  lg: As,
  xl: Ds,
  info: Vs,
  success: Hs,
  warning: Ps,
  danger: Rs,
  soft: Ws,
  outline: Ks,
  solid: Fs,
  icon: Xs,
  content: Us,
  title: Gs,
  body: Js,
  dismiss: Qs
};
function Qi({
  tone: o = "info",
  variant: t = "soft",
  size: s = "md",
  title: n,
  icon: i,
  children: l,
  dismissible: c = !1,
  onDismiss: r,
  className: _
}) {
  const [u, h] = A(!1);
  if (u)
    return null;
  const m = () => {
    h(!0), r?.();
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
        c && /* @__PURE__ */ e(
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
const Ys = "_skeleton_35ckz_1", Zs = "_text_35ckz_35", en = "_circle_35ckz_40", tn = "_rect_35ckz_44", _e = {
  skeleton: Ys,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Zs,
  circle: en,
  rect: tn
};
function Yi({
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
const sn = "_row_15fbq_1", nn = "_start_15fbq_7", on = "_center_15fbq_11", ln = "_end_15fbq_15", an = "_stretch_15fbq_19", cn = "_baseline_15fbq_23", _n = "_noWrap_15fbq_51", J = {
  row: sn,
  start: nn,
  center: on,
  end: ln,
  stretch: an,
  baseline: cn,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: _n
};
function Zi({
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
const rn = "_column_1pa86_1", dn = "_Size1_1pa86_6", fn = "_Size2_1pa86_7", mn = "_Size3_1pa86_8", un = "_Size4_1pa86_9", hn = "_Size5_1pa86_10", pn = "_Size6_1pa86_11", gn = "_Size7_1pa86_12", zn = "_Size8_1pa86_13", xn = "_Size9_1pa86_14", bn = "_Size10_1pa86_15", yn = "_Size11_1pa86_16", Sn = "_Size12_1pa86_17", vn = "_Offset1_1pa86_18", On = "_Offset2_1pa86_19", kn = "_Offset3_1pa86_20", $n = "_Offset4_1pa86_21", wn = "_Offset5_1pa86_22", Mn = "_Offset6_1pa86_23", Nn = "_Offset7_1pa86_24", jn = "_Offset8_1pa86_25", Bn = "_Offset9_1pa86_26", Ln = "_Offset10_1pa86_27", qn = "_Offset11_1pa86_28", Cn = "_smSize1_1pa86_31", En = "_smSize2_1pa86_32", In = "_smSize3_1pa86_33", Tn = "_smSize4_1pa86_34", An = "_smSize5_1pa86_35", Dn = "_smSize6_1pa86_36", Vn = "_smSize7_1pa86_37", Hn = "_smSize8_1pa86_38", Pn = "_smSize9_1pa86_39", Rn = "_smSize10_1pa86_40", Wn = "_smSize11_1pa86_41", Kn = "_smSize12_1pa86_42", Fn = "_smOffset1_1pa86_43", Xn = "_smOffset2_1pa86_44", Un = "_smOffset3_1pa86_45", Gn = "_smOffset4_1pa86_46", Jn = "_smOffset5_1pa86_47", Qn = "_smOffset6_1pa86_48", Yn = "_smOffset7_1pa86_49", Zn = "_smOffset8_1pa86_50", eo = "_smOffset9_1pa86_51", to = "_smOffset10_1pa86_52", so = "_smOffset11_1pa86_53", no = "_mdSize1_1pa86_57", oo = "_mdSize2_1pa86_58", lo = "_mdSize3_1pa86_59", io = "_mdSize4_1pa86_60", ao = "_mdSize5_1pa86_61", co = "_mdSize6_1pa86_62", _o = "_mdSize7_1pa86_63", ro = "_mdSize8_1pa86_64", fo = "_mdSize9_1pa86_65", mo = "_mdSize10_1pa86_66", uo = "_mdSize11_1pa86_67", ho = "_mdSize12_1pa86_68", po = "_mdOffset1_1pa86_69", go = "_mdOffset2_1pa86_70", zo = "_mdOffset3_1pa86_71", xo = "_mdOffset4_1pa86_72", bo = "_mdOffset5_1pa86_73", yo = "_mdOffset6_1pa86_74", So = "_mdOffset7_1pa86_75", vo = "_mdOffset8_1pa86_76", Oo = "_mdOffset9_1pa86_77", ko = "_mdOffset10_1pa86_78", $o = "_mdOffset11_1pa86_79", wo = "_lgSize1_1pa86_83", Mo = "_lgSize2_1pa86_84", No = "_lgSize3_1pa86_85", jo = "_lgSize4_1pa86_86", Bo = "_lgSize5_1pa86_87", Lo = "_lgSize6_1pa86_88", qo = "_lgSize7_1pa86_89", Co = "_lgSize8_1pa86_90", Eo = "_lgSize9_1pa86_91", Io = "_lgSize10_1pa86_92", To = "_lgSize11_1pa86_93", Ao = "_lgSize12_1pa86_94", Do = "_lgOffset1_1pa86_95", Vo = "_lgOffset2_1pa86_96", Ho = "_lgOffset3_1pa86_97", Po = "_lgOffset4_1pa86_98", Ro = "_lgOffset5_1pa86_99", Wo = "_lgOffset6_1pa86_100", Ko = "_lgOffset7_1pa86_101", Fo = "_lgOffset8_1pa86_102", Xo = "_lgOffset9_1pa86_103", Uo = "_lgOffset10_1pa86_104", Go = "_lgOffset11_1pa86_105", Jo = "_xlSize1_1pa86_109", Qo = "_xlSize2_1pa86_110", Yo = "_xlSize3_1pa86_111", Zo = "_xlSize4_1pa86_112", el = "_xlSize5_1pa86_113", tl = "_xlSize6_1pa86_114", sl = "_xlSize7_1pa86_115", nl = "_xlSize8_1pa86_116", ol = "_xlSize9_1pa86_117", ll = "_xlSize10_1pa86_118", il = "_xlSize11_1pa86_119", al = "_xlSize12_1pa86_120", cl = "_xlOffset1_1pa86_121", _l = "_xlOffset2_1pa86_122", rl = "_xlOffset3_1pa86_123", dl = "_xlOffset4_1pa86_124", fl = "_xlOffset5_1pa86_125", ml = "_xlOffset6_1pa86_126", ul = "_xlOffset7_1pa86_127", hl = "_xlOffset8_1pa86_128", pl = "_xlOffset9_1pa86_129", gl = "_xlOffset10_1pa86_130", zl = "_xlOffset11_1pa86_131", ne = {
  column: rn,
  Size1: dn,
  Size2: fn,
  Size3: mn,
  Size4: un,
  Size5: hn,
  Size6: pn,
  Size7: gn,
  Size8: zn,
  Size9: xn,
  Size10: bn,
  Size11: yn,
  Size12: Sn,
  Offset1: vn,
  Offset2: On,
  Offset3: kn,
  Offset4: $n,
  Offset5: wn,
  Offset6: Mn,
  Offset7: Nn,
  Offset8: jn,
  Offset9: Bn,
  Offset10: Ln,
  Offset11: qn,
  smSize1: Cn,
  smSize2: En,
  smSize3: In,
  smSize4: Tn,
  smSize5: An,
  smSize6: Dn,
  smSize7: Vn,
  smSize8: Hn,
  smSize9: Pn,
  smSize10: Rn,
  smSize11: Wn,
  smSize12: Kn,
  smOffset1: Fn,
  smOffset2: Xn,
  smOffset3: Un,
  smOffset4: Gn,
  smOffset5: Jn,
  smOffset6: Qn,
  smOffset7: Yn,
  smOffset8: Zn,
  smOffset9: eo,
  smOffset10: to,
  smOffset11: so,
  mdSize1: no,
  mdSize2: oo,
  mdSize3: lo,
  mdSize4: io,
  mdSize5: ao,
  mdSize6: co,
  mdSize7: _o,
  mdSize8: ro,
  mdSize9: fo,
  mdSize10: mo,
  mdSize11: uo,
  mdSize12: ho,
  mdOffset1: po,
  mdOffset2: go,
  mdOffset3: zo,
  mdOffset4: xo,
  mdOffset5: bo,
  mdOffset6: yo,
  mdOffset7: So,
  mdOffset8: vo,
  mdOffset9: Oo,
  mdOffset10: ko,
  mdOffset11: $o,
  lgSize1: wo,
  lgSize2: Mo,
  lgSize3: No,
  lgSize4: jo,
  lgSize5: Bo,
  lgSize6: Lo,
  lgSize7: qo,
  lgSize8: Co,
  lgSize9: Eo,
  lgSize10: Io,
  lgSize11: To,
  lgSize12: Ao,
  lgOffset1: Do,
  lgOffset2: Vo,
  lgOffset3: Ho,
  lgOffset4: Po,
  lgOffset5: Ro,
  lgOffset6: Wo,
  lgOffset7: Ko,
  lgOffset8: Fo,
  lgOffset9: Xo,
  lgOffset10: Uo,
  lgOffset11: Go,
  xlSize1: Jo,
  xlSize2: Qo,
  xlSize3: Yo,
  xlSize4: Zo,
  xlSize5: el,
  xlSize6: tl,
  xlSize7: sl,
  xlSize8: nl,
  xlSize9: ol,
  xlSize10: ll,
  xlSize11: il,
  xlSize12: al,
  xlOffset1: cl,
  xlOffset2: _l,
  xlOffset3: rl,
  xlOffset4: dl,
  xlOffset5: fl,
  xlOffset6: ml,
  xlOffset7: ul,
  xlOffset8: hl,
  xlOffset9: pl,
  xlOffset10: gl,
  xlOffset11: zl
}, xl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function ea({ className: o, ...t }) {
  const s = [ne.column];
  for (const [p, b, M] of xl) {
    const S = t[b], v = t[M];
    S != null && s.push(ne[`${p}Size${S}`]), v != null && v > 0 && s.push(ne[`${p}Offset${v}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: c, sizeMd: r, offsetMd: _, sizeLg: u, offsetLg: h, sizeXl: m, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const bl = "_layout_1pcye_1", yl = "_row_1pcye_7", re = {
  layout: bl,
  row: yl
}, Sl = "_footer_14whp_1", vl = {
  footer: Sl
};
function Ol({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [vl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const kl = "_header_2mimk_1", $l = {
  header: kl
};
function wl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [$l.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const Ml = "_sidebar_1ktmd_1", Nl = "_left_1ktmd_9", jl = "_right_1ktmd_13", Bl = "_collapsed_1ktmd_17", Ll = "_responsive_1ktmd_25", ql = "_overlay_1ktmd_33", Cl = "_mask_1ktmd_53", C = {
  sidebar: Ml,
  left: Nl,
  right: jl,
  collapsed: Bl,
  responsive: Ll,
  overlay: ql,
  mask: Cl
};
function El({
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
        children: c
      }
    )
  ] });
}
function ta({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], c = [], r = [];
  return xe.forEach(t, (_) => {
    if (!le(_)) {
      l.push(_);
      return;
    }
    _.type === wl ? n.push(_) : _.type === Ol ? i.push(_) : _.type === El ? (_.props.position === "right" ? r : c).push(_) : l.push(_);
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
const Il = "_body_1tpk6_1", Tl = {
  body: Il
};
function sa({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Tl.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Al = "_track_1mkoz_1", Dl = "_bar_1mkoz_31", Vl = "_primary_1mkoz_39", Hl = "_success_1mkoz_43", Pl = "_warning_1mkoz_47", Rl = "_danger_1mkoz_51", Wl = "_indeterminate_1mkoz_55", Kl = "_circular_1mkoz_69", Fl = "_fill_1mkoz_109", k = {
  track: Al,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Dl,
  primary: Vl,
  success: Hl,
  warning: Pl,
  danger: Rl,
  indeterminate: Wl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Kl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Fl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function na({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: i = "linear",
  size: l = "md",
  className: c,
  ...r
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, o)) : 0, u = t > 0 ? _ / t * 100 : 0;
  if (i === "circular") {
    const h = typeof l == "string", m = 2, z = 10.5, x = 2 * Math.PI * z, p = x * (n ? 0.75 : 1), b = n ? 0 : x * (1 - u / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: h ? void 0 : l,
        height: h ? void 0 : l,
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
          h ? k[`circular-${l}`] : null,
          n ? k.indeterminate : null,
          c
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: k.track, cx: 12, cy: 12, r: z, strokeWidth: m }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: k.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: m,
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
          style: n ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Xl = "_wrapper_t239v_1", Ul = {
  wrapper: Xl
};
function oa({
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
  return /* @__PURE__ */ f("label", { className: [Ul.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Qt, { checked: i, onChange: c })
  ] });
}
const Gl = "_avatar_17s76_1", Jl = "_xs_17s76_12", Ql = "_sm_17s76_18", Yl = "_md_17s76_24", Zl = "_lg_17s76_30", ei = "_xl_17s76_36", ti = "_initials_17s76_42", si = "_image_17s76_57", ni = "_status_17s76_64", oi = "_online_17s76_84", li = "_offline_17s76_88", ii = "_away_17s76_92", V = {
  avatar: Gl,
  xs: Jl,
  sm: Ql,
  md: Yl,
  lg: Zl,
  xl: ei,
  initials: ti,
  image: si,
  status: ni,
  online: oi,
  offline: li,
  away: ii
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function ai(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function ci(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Q[t % Q.length] ?? Q[0];
}
function la({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const c = Y(() => o ? ai(o) : "?", [o]), r = Y(() => o ? ci(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: c });
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
const _i = "_root_1k1gx_1", ri = "_tabList_1k1gx_6", di = "_underline_1k1gx_12", fi = "_pills_1k1gx_16", mi = "_tab_1k1gx_6", ui = "_active_1k1gx_36", hi = "_disabled_1k1gx_50", pi = "_panel_1k1gx_64", E = {
  root: _i,
  tabList: ri,
  underline: di,
  pills: fi,
  tab: mi,
  active: ui,
  disabled: hi,
  panel: pi
};
function ia({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  className: l
}) {
  const c = T(), r = I(null), [_, u] = A(s ?? o[0]?.key ?? ""), h = t ?? _, m = (p) => {
    u(p), n?.(p);
  }, z = (p) => {
    const b = o.filter((v) => !v.disabled), M = b.findIndex((v) => v.key === h);
    let S = -1;
    p.key === "ArrowRight" ? S = (M + 1) % b.length : p.key === "ArrowLeft" ? S = (M - 1 + b.length) % b.length : p.key === "Home" ? S = 0 : p.key === "End" && (S = b.length - 1), S >= 0 && (p.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[S]?.key ?? "")}"]`
    )?.focus(), m(b[S]?.key ?? ""));
  }, x = o.find((p) => p.key === h);
  return /* @__PURE__ */ f("div", { className: [E.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [E.tabList, E[i]].filter(Boolean).join(" "),
        onKeyDown: z,
        children: o.map((p) => {
          const b = p.key === h;
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
                E.tab,
                b ? E.active : null,
                p.disabled ? E.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => m(p.key),
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
        className: E.panel,
        children: x.content
      }
    )
  ] });
}
const gi = "_root_1rcwz_1", zi = "_item_1rcwz_9", xi = "_heading_1rcwz_13", bi = "_trigger_1rcwz_17", yi = "_disabled_1rcwz_34", Si = "_title_1rcwz_48", vi = "_chevron_1rcwz_52", Oi = "_open_1rcwz_59", ki = "_content_1rcwz_63", B = {
  root: gi,
  item: zi,
  heading: xi,
  trigger: bi,
  disabled: yi,
  title: Si,
  chevron: vi,
  open: Oi,
  content: ki
};
function aa({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const c = T(), [r, _] = A(n ?? []), u = s ?? r, h = (m) => {
    const z = u.includes(m) ? u.filter((x) => x !== m) : t ? [...u, m] : [m];
    _(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [B.root, l].filter(Boolean).join(" "), children: o.map((m) => {
    const z = u.includes(m.key), x = `${c}-panel-${m.key}`, p = `${c}-trigger-${m.key}`;
    return /* @__PURE__ */ f("div", { className: B.item, children: [
      /* @__PURE__ */ e("h3", { className: B.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: p,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: m.disabled,
          className: [
            B.trigger,
            m.disabled ? B.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => h(m.key),
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
          "aria-labelledby": p,
          hidden: !z,
          className: B.content,
          children: m.content
        }
      )
    ] }, m.key);
  }) });
}
const $i = "_textarea_jj8z9_1", wi = "_xs_jj8z9_25", Mi = "_sm_jj8z9_30", Ni = "_md_jj8z9_35", ji = "_lg_jj8z9_40", Bi = "_xl_jj8z9_45", oe = {
  textarea: $i,
  xs: wi,
  sm: Mi,
  md: Ni,
  lg: ji,
  xl: Bi,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, ca = $(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  aa as Accordion,
  Qi as Alert,
  la as Avatar,
  Ii as Badge,
  sa as Body,
  Ci as Button,
  Ei as Card,
  Fi as Checkbox,
  ea as Column,
  Ui as Dialog,
  Hi as EmptyState,
  Pi as Field,
  Ol as Footer,
  wl as Header,
  Ai as Icon,
  Wi as Input,
  Ri as Label,
  ta as Layout,
  na as Progress,
  Zi as Row,
  Ki as Select,
  El as Sidebar,
  Yi as Skeleton,
  Di as Stat,
  Qt as Switch,
  Vi as Table,
  ia as Tabs,
  ca as Textarea,
  oa as ThemeSwitcher,
  Ji as ToastProvider,
  Xi as Tooltip,
  Ti as iconNames,
  Gi as useToast
};
