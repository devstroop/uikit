import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as M, useId as D, isValidElement as le, cloneElement as de, useRef as A, useState as V, useEffect as U, useCallback as N, useMemo as ee, useContext as ge, createContext as ze, Children as xe } from "react";
const be = "_button_17bhu_1", ye = "_primary_17bhu_29", Se = "_secondary_17bhu_38", ve = "_ghost_17bhu_48", Oe = "_danger_17bhu_57", ke = "_success_17bhu_66", $e = "_info_17bhu_75", we = "_xs_17bhu_85", Me = "_sm_17bhu_91", Ne = "_md_17bhu_97", je = "_lg_17bhu_103", Be = "_xl_17bhu_109", Le = "_iconOnly_17bhu_115", Ce = "_fullWidth_17bhu_141", R = {
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
}, Ci = M(function({
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
}), Ee = "_card_lt977_1", Ie = "_elevated_lt977_8", qe = "_outlined_lt977_13", Te = "_interactive_lt977_17", Ae = "_header_lt977_35", De = "_body_lt977_42", Ve = "_footer_lt977_52", W = {
  card: Ee,
  elevated: Ie,
  outlined: qe,
  interactive: Te,
  header: Ae,
  body: De,
  footer: Ve
}, Ei = M(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: a, ..._ }, r) {
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
}), He = "_badge_s3h6c_1", Pe = "_xs_s3h6c_14", Re = "_sm_s3h6c_19", We = "_md_s3h6c_24", Ke = "_lg_s3h6c_29", Fe = "_xl_s3h6c_34", Xe = "_neutral_s3h6c_40", Ue = "_primary_s3h6c_45", Ge = "_success_s3h6c_50", Je = "_warning_s3h6c_55", Qe = "_danger_s3h6c_60", Ye = "_solid_s3h6c_66", Ze = "_outline_s3h6c_91", J = {
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
}, Ii = M(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...a }, _) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: _,
      className: [J.badge, J[n], J[t], J[s], i].filter(Boolean).join(" "),
      ...a,
      children: l
    }
  );
}), et = "_xs_1uch7_2", tt = "_sm_1uch7_7", st = "_md_1uch7_1", nt = "_lg_1uch7_17", ot = "_xl_1uch7_22", lt = {
  xs: et,
  sm: tt,
  md: st,
  lg: nt,
  xl: ot
}, qi = [
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
}, Ti = M(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, a) {
  const _ = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: a,
      className: [_ ? lt[s] : null, i].filter(Boolean).join(" "),
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
      children: it[t]
    }
  );
}), ct = "_stat_1ks65_1", at = "_label_1ks65_8", _t = "_row_1ks65_16", rt = "_value_1ks65_22", dt = "_delta_1ks65_28", ft = "_success_1ks65_33", mt = "_danger_1ks65_37", ut = "_neutral_1ks65_41", pt = "_hint_1ks65_45", q = {
  stat: ct,
  label: at,
  row: _t,
  value: rt,
  delta: dt,
  success: ft,
  danger: mt,
  neutral: ut,
  hint: pt
}, Ai = M(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: a, ..._ }, r) {
  return /* @__PURE__ */ f("div", { ref: r, className: [q.stat, a].filter(Boolean).join(" "), ..._, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ f("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: q.hint, children: l })
  ] });
}), ht = "_wrap_1x8tx_1", gt = "_table_1x8tx_8", zt = "_start_1x8tx_40", xt = "_center_1x8tx_44", bt = "_end_1x8tx_48", yt = "_empty_1x8tx_52", K = {
  wrap: ht,
  table: gt,
  start: zt,
  center: xt,
  end: bt,
  empty: yt
};
function Di({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
const St = "_emptyState_1o7fc_1", vt = "_icon_1o7fc_13", Ot = "_title_1o7fc_18", kt = "_description_1o7fc_24", $t = "_action_1o7fc_30", F = {
  emptyState: St,
  icon: vt,
  title: Ot,
  description: kt,
  action: $t
};
function Vi({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [F.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: F.icon, children: o }),
    /* @__PURE__ */ e("div", { className: F.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: F.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: F.action, children: n })
  ] });
}
const wt = "_field_w9m4o_1", Mt = "_label_w9m4o_8", Nt = "_required_w9m4o_14", jt = "_hint_w9m4o_19", Bt = "_error_w9m4o_24", X = {
  field: wt,
  label: Mt,
  required: Nt,
  hint: jt,
  error: Bt
};
function Hi({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: a }) {
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
const Lt = "_label_rv97n_1", Ct = {
  label: Lt
}, Pi = M(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Ct.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Et = "_input_109wo_1", It = "_invalid_109wo_31", qt = "_xs_109wo_37", Tt = "_sm_109wo_43", At = "_md_109wo_49", Dt = "_lg_109wo_55", Vt = "_xl_109wo_61", te = {
  input: Et,
  invalid: It,
  xs: qt,
  sm: Tt,
  md: At,
  lg: Dt,
  xl: Vt
}, Ri = M(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
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
}, Wi = M(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...a }, _) {
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
}), Ut = "_checkbox_sx3bj_1", Gt = {
  checkbox: Ut
}, Ki = M(function({ className: t, ...s }, n) {
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
}, Qt = M(function({ className: t, ...s }, n) {
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
}), Yt = "_trigger_4qzmh_1", Zt = "_tooltip_4qzmh_7", es = "_top_4qzmh_34", ts = "_right_4qzmh_40", ss = "_bottom_4qzmh_46", ns = "_left_4qzmh_52", os = "_arrow_4qzmh_58", Q = {
  trigger: Yt,
  tooltip: Zt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: es,
  right: ts,
  bottom: ss,
  left: ns,
  arrow: os
};
function Fi({
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
const ls = "_dialog_gp2l5_1", is = "_sm_gp2l5_30", cs = "_md_gp2l5_34", as = "_lg_gp2l5_38", _s = "_header_gp2l5_42", rs = "_title_gp2l5_51", ds = "_description_gp2l5_58", fs = "_close_gp2l5_65", ms = "_body_gp2l5_84", us = "_footer_gp2l5_90", E = {
  dialog: ls,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: is,
  md: cs,
  lg: as,
  header: _s,
  title: rs,
  description: ds,
  close: fs,
  body: ms,
  footer: us
};
function Xi({
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
const ps = "_viewport_1ex2n_1", hs = "_topLeft_1ex2n_13", gs = "_topRight_1ex2n_20", zs = "_bottomLeft_1ex2n_25", xs = "_toast_1ex2n_30", bs = "_leaving_1ex2n_61", ys = "_info_1ex2n_77", Ss = "_success_1ex2n_82", vs = "_warning_1ex2n_87", Os = "_danger_1ex2n_92", ks = "_content_1ex2n_97", $s = "_title_1ex2n_102", ws = "_description_1ex2n_125", Ms = "_dismiss_1ex2n_132", Ns = "_actions_1ex2n_151", js = "_action_1ex2n_151", Bs = "_cancel_1ex2n_159", Ls = "_progress_1ex2n_195", v = {
  viewport: ps,
  topLeft: hs,
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
function Ui() {
  const o = ge(fe);
  if (!o)
    throw new Error("useToast must be used within a <ToastProvider>");
  return o;
}
const Cs = 200, Es = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function Gi({
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
        const y = c.filter((j) => j.id !== d);
        return m.current = y, y;
      });
    },
    [S]
  ), b = N(
    (d) => {
      const c = m.current.find((y) => y.id === d);
      !c || c.leaving || (c.onAutoClose?.(), h(d));
    },
    [h]
  ), k = N(
    (d) => {
      const c = p.current.get(d);
      !c || c.remaining <= 0 || (c.startedAt = Date.now(), c.timeoutId = window.setTimeout(() => b(d), c.remaining));
    },
    [b]
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
      const c = m.current.find((y) => y.id === d);
      !c || c.leaving || (c.onDismiss?.(), a((y) => {
        const j = y.map((H) => H.id === d ? { ...H, leaving: !0 } : H);
        return m.current = j, j;
      }), window.setTimeout(() => h(d), Cs));
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
      const c = m.current.find((j) => j.id === d.id), y = {
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
        const H = c ? j.map((ae) => ae.id === y.id ? { ...y, leaving: !1 } : ae) : [...j, y];
        return m.current = H, H;
      }), c && S(y.id), ie(y);
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
          v[Es[d]],
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
const Is = "_alert_1i49n_1", qs = "_info_1i49n_15", Ts = "_success_1i49n_20", As = "_warning_1i49n_25", Ds = "_danger_1i49n_30", Vs = "_soft_1i49n_37", Hs = "_outline_1i49n_44", Ps = "_solid_1i49n_52", Rs = "_icon_1i49n_66", Ws = "_content_1i49n_72", Ks = "_title_1i49n_77", Fs = "_body_1i49n_83", Xs = "_dismiss_1i49n_88", I = {
  alert: Is,
  info: qs,
  success: Ts,
  warning: As,
  danger: Ds,
  soft: Vs,
  outline: Hs,
  solid: Ps,
  icon: Rs,
  content: Ws,
  title: Ks,
  body: Fs,
  dismiss: Xs
};
function Ji({
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
const Us = "_skeleton_35ckz_1", Gs = "_text_35ckz_35", Js = "_circle_35ckz_40", Qs = "_rect_35ckz_44", _e = {
  skeleton: Us,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: Gs,
  circle: Js,
  rect: Qs
};
function Qi({
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
const Ys = "_row_15fbq_1", Zs = "_start_15fbq_7", en = "_center_15fbq_11", tn = "_end_15fbq_15", sn = "_stretch_15fbq_19", nn = "_baseline_15fbq_23", on = "_noWrap_15fbq_51", Y = {
  row: Ys,
  start: Zs,
  center: en,
  end: tn,
  stretch: sn,
  baseline: nn,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: on
};
function Yi({
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
const ln = "_column_1pa86_1", cn = "_Size1_1pa86_6", an = "_Size2_1pa86_7", _n = "_Size3_1pa86_8", rn = "_Size4_1pa86_9", dn = "_Size5_1pa86_10", fn = "_Size6_1pa86_11", mn = "_Size7_1pa86_12", un = "_Size8_1pa86_13", pn = "_Size9_1pa86_14", hn = "_Size10_1pa86_15", gn = "_Size11_1pa86_16", zn = "_Size12_1pa86_17", xn = "_Offset1_1pa86_18", bn = "_Offset2_1pa86_19", yn = "_Offset3_1pa86_20", Sn = "_Offset4_1pa86_21", vn = "_Offset5_1pa86_22", On = "_Offset6_1pa86_23", kn = "_Offset7_1pa86_24", $n = "_Offset8_1pa86_25", wn = "_Offset9_1pa86_26", Mn = "_Offset10_1pa86_27", Nn = "_Offset11_1pa86_28", jn = "_smSize1_1pa86_31", Bn = "_smSize2_1pa86_32", Ln = "_smSize3_1pa86_33", Cn = "_smSize4_1pa86_34", En = "_smSize5_1pa86_35", In = "_smSize6_1pa86_36", qn = "_smSize7_1pa86_37", Tn = "_smSize8_1pa86_38", An = "_smSize9_1pa86_39", Dn = "_smSize10_1pa86_40", Vn = "_smSize11_1pa86_41", Hn = "_smSize12_1pa86_42", Pn = "_smOffset1_1pa86_43", Rn = "_smOffset2_1pa86_44", Wn = "_smOffset3_1pa86_45", Kn = "_smOffset4_1pa86_46", Fn = "_smOffset5_1pa86_47", Xn = "_smOffset6_1pa86_48", Un = "_smOffset7_1pa86_49", Gn = "_smOffset8_1pa86_50", Jn = "_smOffset9_1pa86_51", Qn = "_smOffset10_1pa86_52", Yn = "_smOffset11_1pa86_53", Zn = "_mdSize1_1pa86_57", eo = "_mdSize2_1pa86_58", to = "_mdSize3_1pa86_59", so = "_mdSize4_1pa86_60", no = "_mdSize5_1pa86_61", oo = "_mdSize6_1pa86_62", lo = "_mdSize7_1pa86_63", io = "_mdSize8_1pa86_64", co = "_mdSize9_1pa86_65", ao = "_mdSize10_1pa86_66", _o = "_mdSize11_1pa86_67", ro = "_mdSize12_1pa86_68", fo = "_mdOffset1_1pa86_69", mo = "_mdOffset2_1pa86_70", uo = "_mdOffset3_1pa86_71", po = "_mdOffset4_1pa86_72", ho = "_mdOffset5_1pa86_73", go = "_mdOffset6_1pa86_74", zo = "_mdOffset7_1pa86_75", xo = "_mdOffset8_1pa86_76", bo = "_mdOffset9_1pa86_77", yo = "_mdOffset10_1pa86_78", So = "_mdOffset11_1pa86_79", vo = "_lgSize1_1pa86_83", Oo = "_lgSize2_1pa86_84", ko = "_lgSize3_1pa86_85", $o = "_lgSize4_1pa86_86", wo = "_lgSize5_1pa86_87", Mo = "_lgSize6_1pa86_88", No = "_lgSize7_1pa86_89", jo = "_lgSize8_1pa86_90", Bo = "_lgSize9_1pa86_91", Lo = "_lgSize10_1pa86_92", Co = "_lgSize11_1pa86_93", Eo = "_lgSize12_1pa86_94", Io = "_lgOffset1_1pa86_95", qo = "_lgOffset2_1pa86_96", To = "_lgOffset3_1pa86_97", Ao = "_lgOffset4_1pa86_98", Do = "_lgOffset5_1pa86_99", Vo = "_lgOffset6_1pa86_100", Ho = "_lgOffset7_1pa86_101", Po = "_lgOffset8_1pa86_102", Ro = "_lgOffset9_1pa86_103", Wo = "_lgOffset10_1pa86_104", Ko = "_lgOffset11_1pa86_105", Fo = "_xlSize1_1pa86_109", Xo = "_xlSize2_1pa86_110", Uo = "_xlSize3_1pa86_111", Go = "_xlSize4_1pa86_112", Jo = "_xlSize5_1pa86_113", Qo = "_xlSize6_1pa86_114", Yo = "_xlSize7_1pa86_115", Zo = "_xlSize8_1pa86_116", el = "_xlSize9_1pa86_117", tl = "_xlSize10_1pa86_118", sl = "_xlSize11_1pa86_119", nl = "_xlSize12_1pa86_120", ol = "_xlOffset1_1pa86_121", ll = "_xlOffset2_1pa86_122", il = "_xlOffset3_1pa86_123", cl = "_xlOffset4_1pa86_124", al = "_xlOffset5_1pa86_125", _l = "_xlOffset6_1pa86_126", rl = "_xlOffset7_1pa86_127", dl = "_xlOffset8_1pa86_128", fl = "_xlOffset9_1pa86_129", ml = "_xlOffset10_1pa86_130", ul = "_xlOffset11_1pa86_131", ne = {
  column: ln,
  Size1: cn,
  Size2: an,
  Size3: _n,
  Size4: rn,
  Size5: dn,
  Size6: fn,
  Size7: mn,
  Size8: un,
  Size9: pn,
  Size10: hn,
  Size11: gn,
  Size12: zn,
  Offset1: xn,
  Offset2: bn,
  Offset3: yn,
  Offset4: Sn,
  Offset5: vn,
  Offset6: On,
  Offset7: kn,
  Offset8: $n,
  Offset9: wn,
  Offset10: Mn,
  Offset11: Nn,
  smSize1: jn,
  smSize2: Bn,
  smSize3: Ln,
  smSize4: Cn,
  smSize5: En,
  smSize6: In,
  smSize7: qn,
  smSize8: Tn,
  smSize9: An,
  smSize10: Dn,
  smSize11: Vn,
  smSize12: Hn,
  smOffset1: Pn,
  smOffset2: Rn,
  smOffset3: Wn,
  smOffset4: Kn,
  smOffset5: Fn,
  smOffset6: Xn,
  smOffset7: Un,
  smOffset8: Gn,
  smOffset9: Jn,
  smOffset10: Qn,
  smOffset11: Yn,
  mdSize1: Zn,
  mdSize2: eo,
  mdSize3: to,
  mdSize4: so,
  mdSize5: no,
  mdSize6: oo,
  mdSize7: lo,
  mdSize8: io,
  mdSize9: co,
  mdSize10: ao,
  mdSize11: _o,
  mdSize12: ro,
  mdOffset1: fo,
  mdOffset2: mo,
  mdOffset3: uo,
  mdOffset4: po,
  mdOffset5: ho,
  mdOffset6: go,
  mdOffset7: zo,
  mdOffset8: xo,
  mdOffset9: bo,
  mdOffset10: yo,
  mdOffset11: So,
  lgSize1: vo,
  lgSize2: Oo,
  lgSize3: ko,
  lgSize4: $o,
  lgSize5: wo,
  lgSize6: Mo,
  lgSize7: No,
  lgSize8: jo,
  lgSize9: Bo,
  lgSize10: Lo,
  lgSize11: Co,
  lgSize12: Eo,
  lgOffset1: Io,
  lgOffset2: qo,
  lgOffset3: To,
  lgOffset4: Ao,
  lgOffset5: Do,
  lgOffset6: Vo,
  lgOffset7: Ho,
  lgOffset8: Po,
  lgOffset9: Ro,
  lgOffset10: Wo,
  lgOffset11: Ko,
  xlSize1: Fo,
  xlSize2: Xo,
  xlSize3: Uo,
  xlSize4: Go,
  xlSize5: Jo,
  xlSize6: Qo,
  xlSize7: Yo,
  xlSize8: Zo,
  xlSize9: el,
  xlSize10: tl,
  xlSize11: sl,
  xlSize12: nl,
  xlOffset1: ol,
  xlOffset2: ll,
  xlOffset3: il,
  xlOffset4: cl,
  xlOffset5: al,
  xlOffset6: _l,
  xlOffset7: rl,
  xlOffset8: dl,
  xlOffset9: fl,
  xlOffset10: ml,
  xlOffset11: ul
}, pl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function Zi({ className: o, ...t }) {
  const s = [ne.column];
  for (const [O, S, h] of pl) {
    const b = t[S], k = t[h];
    b != null && s.push(ne[`${O}Size${b}`]), k != null && k > 0 && s.push(ne[`${O}Offset${k}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: a, sizeMd: _, offsetMd: r, sizeLg: m, offsetLg: p, sizeXl: u, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const hl = "_layout_1pcye_1", gl = "_row_1pcye_7", re = {
  layout: hl,
  row: gl
}, zl = "_footer_14whp_1", xl = {
  footer: zl
};
function bl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [xl.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const yl = "_header_2mimk_1", Sl = {
  header: yl
};
function vl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [Sl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const Ol = "_sidebar_1ktmd_1", kl = "_left_1ktmd_9", $l = "_right_1ktmd_13", wl = "_collapsed_1ktmd_17", Ml = "_responsive_1ktmd_25", Nl = "_overlay_1ktmd_33", jl = "_mask_1ktmd_53", T = {
  sidebar: Ol,
  left: kl,
  right: $l,
  collapsed: wl,
  responsive: Ml,
  overlay: Nl,
  mask: jl
};
function Bl({
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
function ec({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], a = [], _ = [];
  return xe.forEach(t, (r) => {
    if (!le(r)) {
      l.push(r);
      return;
    }
    r.type === vl ? n.push(r) : r.type === bl ? i.push(r) : r.type === Bl ? (r.props.position === "right" ? _ : a).push(r) : l.push(r);
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
const Ll = "_body_1tpk6_1", Cl = {
  body: Ll
};
function tc({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Cl.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const El = "_track_1mkoz_1", Il = "_bar_1mkoz_31", ql = "_primary_1mkoz_39", Tl = "_success_1mkoz_43", Al = "_warning_1mkoz_47", Dl = "_danger_1mkoz_51", Vl = "_indeterminate_1mkoz_55", Hl = "_circular_1mkoz_69", Pl = "_fill_1mkoz_109", w = {
  track: El,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Il,
  primary: ql,
  success: Tl,
  warning: Al,
  danger: Dl,
  indeterminate: Vl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Hl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Pl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function sc({
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
const Rl = "_wrapper_t239v_1", Wl = {
  wrapper: Rl
};
function nc({
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
  return /* @__PURE__ */ f("label", { className: [Wl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Qt, { checked: i, onChange: a })
  ] });
}
const Kl = "_avatar_17s76_1", Fl = "_xs_17s76_12", Xl = "_sm_17s76_18", Ul = "_md_17s76_24", Gl = "_lg_17s76_30", Jl = "_xl_17s76_36", Ql = "_initials_17s76_42", Yl = "_image_17s76_57", Zl = "_status_17s76_64", ei = "_online_17s76_84", ti = "_offline_17s76_88", si = "_away_17s76_92", P = {
  avatar: Kl,
  xs: Fl,
  sm: Xl,
  md: Ul,
  lg: Gl,
  xl: Jl,
  initials: Ql,
  image: Yl,
  status: Zl,
  online: ei,
  offline: ti,
  away: si
}, Z = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function ni(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function oi(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Z[t % Z.length] ?? Z[0];
}
function oc({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const a = ee(() => o ? ni(o) : "?", [o]), _ = ee(() => o ? oi(o) : Z[0], [o]), r = t ? /* @__PURE__ */ e("img", { className: P.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: P.initials, style: { background: _ }, children: a });
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
const li = "_root_jppcr_1", ii = "_left_jppcr_6", ci = "_right_jppcr_7", ai = "_panel_jppcr_12", _i = "_bottom_jppcr_20", ri = "_tabList_jppcr_24", di = "_underline_jppcr_53", fi = "_pills_jppcr_72", mi = "_tab_jppcr_24", ui = "_active_jppcr_113", pi = "_disabled_jppcr_139", B = {
  root: li,
  left: ii,
  right: ci,
  panel: ai,
  bottom: _i,
  tabList: ri,
  underline: di,
  pills: fi,
  tab: mi,
  active: ui,
  disabled: pi
};
function lc({
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
    const b = o.filter((C) => !C.disabled), k = b.findIndex((C) => C.key === u);
    let $ = -1;
    h.key === "ArrowRight" || z && h.key === "ArrowDown" ? $ = (k + 1) % b.length : h.key === "ArrowLeft" || z && h.key === "ArrowUp" ? $ = (k - 1 + b.length) % b.length : h.key === "Home" ? $ = 0 : h.key === "End" && ($ = b.length - 1), $ >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[$]?.key ?? "")}"]`
    )?.focus(), x(b[$]?.key ?? ""));
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
          const b = h.key === u;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${_}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": b,
              "aria-controls": `${_}-panel-${h.key}`,
              tabIndex: b ? 0 : -1,
              disabled: h.disabled,
              className: [
                B.tab,
                b ? B.active : null,
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
const hi = "_root_1rcwz_1", gi = "_item_1rcwz_9", zi = "_heading_1rcwz_13", xi = "_trigger_1rcwz_17", bi = "_disabled_1rcwz_34", yi = "_title_1rcwz_48", Si = "_chevron_1rcwz_52", vi = "_open_1rcwz_59", Oi = "_content_1rcwz_63", L = {
  root: hi,
  item: gi,
  heading: zi,
  trigger: xi,
  disabled: bi,
  title: yi,
  chevron: Si,
  open: vi,
  content: Oi
};
function ic({
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
const ki = "_textarea_jj8z9_1", $i = "_xs_jj8z9_25", wi = "_sm_jj8z9_30", Mi = "_md_jj8z9_35", Ni = "_lg_jj8z9_40", ji = "_xl_jj8z9_45", oe = {
  textarea: ki,
  xs: $i,
  sm: wi,
  md: Mi,
  lg: Ni,
  xl: ji,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, cc = M(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  ic as Accordion,
  Ji as Alert,
  oc as Avatar,
  Ii as Badge,
  tc as Body,
  Ci as Button,
  Ei as Card,
  Ki as Checkbox,
  Zi as Column,
  Xi as Dialog,
  Vi as EmptyState,
  Hi as Field,
  bl as Footer,
  vl as Header,
  Ti as Icon,
  Ri as Input,
  Pi as Label,
  ec as Layout,
  sc as Progress,
  Yi as Row,
  Wi as Select,
  Bl as Sidebar,
  Qi as Skeleton,
  Ai as Stat,
  Qt as Switch,
  Di as Table,
  lc as Tabs,
  cc as Textarea,
  nc as ThemeSwitcher,
  Gi as ToastProvider,
  Fi as Tooltip,
  qi as iconNames,
  Ui as useToast
};
