import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as M, useId as D, isValidElement as le, cloneElement as de, useRef as A, useState as V, useEffect as U, useCallback as N, useMemo as ee, useContext as ge, createContext as ze, Children as xe } from "react";
const be = "_button_17bhu_1", ye = "_primary_17bhu_29", Se = "_secondary_17bhu_38", ve = "_ghost_17bhu_48", Oe = "_danger_17bhu_57", ke = "_success_17bhu_66", $e = "_info_17bhu_75", we = "_xs_17bhu_85", Me = "_sm_17bhu_91", Ne = "_md_17bhu_97", je = "_lg_17bhu_103", Be = "_xl_17bhu_109", Le = "_iconOnly_17bhu_115", qe = "_fullWidth_17bhu_141", R = {
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
}, Ai = M(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: i = !1,
  className: l,
  type: a = "button",
  ..._
}, r) {
  const u = [
    R.button,
    R[t],
    R[s],
    n ? R.fullWidth : null,
    i ? R.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: r, type: a, className: u, ..._ });
}), Ce = "_card_80b0o_1", Ee = "_elevated_80b0o_8", Ie = "_outlined_80b0o_13", Te = "_interactive_80b0o_17", Ae = "_text_80b0o_25", De = "_header_80b0o_41", Ve = "_body_80b0o_48", He = "_footer_80b0o_58", W = {
  card: Ce,
  elevated: Ee,
  outlined: Ie,
  interactive: Te,
  text: Ae,
  header: De,
  body: Ve,
  footer: He
}, Di = M(function({ variant: t = "elevated", header: s, footer: n, className: i, children: l, onKeyDown: a, ..._ }, r) {
  const u = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: r,
      tabIndex: u ? 0 : void 0,
      onKeyDown: (p) => {
        a?.(p), !(!u || p.key !== "Enter" && p.key !== " ") && (p.preventDefault(), p.currentTarget.click());
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
}), Pe = "_badge_s3h6c_1", Re = "_xs_s3h6c_14", We = "_sm_s3h6c_19", Ke = "_md_s3h6c_24", Fe = "_lg_s3h6c_29", Xe = "_xl_s3h6c_34", Ue = "_neutral_s3h6c_40", Ge = "_primary_s3h6c_45", Je = "_success_s3h6c_50", Qe = "_warning_s3h6c_55", Ye = "_danger_s3h6c_60", Ze = "_solid_s3h6c_66", et = "_outline_s3h6c_91", J = {
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
}, Vi = M(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: i, children: l, ...a }, _) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: _,
      className: [J.badge, J[n], J[t], J[s], i].filter(Boolean).join(" "),
      ...a,
      children: l
    }
  );
}), tt = "_xs_1uch7_2", st = "_sm_1uch7_7", nt = "_md_1uch7_1", ot = "_lg_1uch7_17", lt = "_xl_1uch7_22", it = {
  xs: tt,
  sm: st,
  md: nt,
  lg: ot,
  xl: lt
}, Hi = [
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
], ct = {
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
}, Pi = M(function({ name: t, size: s = "md", strokeWidth: n = 2, className: i, ...l }, a) {
  const _ = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: a,
      className: [_ ? it[s] : null, i].filter(Boolean).join(" "),
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
      children: ct[t]
    }
  );
}), at = "_stat_1ks65_1", _t = "_label_1ks65_8", rt = "_row_1ks65_16", dt = "_value_1ks65_22", ft = "_delta_1ks65_28", mt = "_success_1ks65_33", ut = "_danger_1ks65_37", pt = "_neutral_1ks65_41", ht = "_hint_1ks65_45", I = {
  stat: at,
  label: _t,
  row: rt,
  value: dt,
  delta: ft,
  success: mt,
  danger: ut,
  neutral: pt,
  hint: ht
}, Ri = M(function({ label: t, value: s, delta: n, deltaTone: i = "neutral", hint: l, className: a, ..._ }, r) {
  return /* @__PURE__ */ f("div", { ref: r, className: [I.stat, a].filter(Boolean).join(" "), ..._, children: [
    /* @__PURE__ */ e("div", { className: I.label, children: t }),
    /* @__PURE__ */ f("div", { className: I.row, children: [
      /* @__PURE__ */ e("div", { className: I.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [I.delta, I[i]].join(" "), children: n })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: I.hint, children: l })
  ] });
}), gt = "_wrap_1x8tx_1", zt = "_table_1x8tx_8", xt = "_start_1x8tx_40", bt = "_center_1x8tx_44", yt = "_end_1x8tx_48", St = "_empty_1x8tx_52", K = {
  wrap: gt,
  table: zt,
  start: xt,
  center: bt,
  end: yt,
  empty: St
};
function Wi({ columns: o, rows: t, rowKey: s, empty: n, className: i }) {
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
const vt = "_emptyState_1o7fc_1", Ot = "_icon_1o7fc_13", kt = "_title_1o7fc_18", $t = "_description_1o7fc_24", wt = "_action_1o7fc_30", F = {
  emptyState: vt,
  icon: Ot,
  title: kt,
  description: $t,
  action: wt
};
function Ki({ icon: o, title: t, description: s, action: n, className: i }) {
  return /* @__PURE__ */ f("div", { className: [F.emptyState, i].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ e("div", { className: F.icon, children: o }),
    /* @__PURE__ */ e("div", { className: F.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: F.description, children: s }),
    n != null && /* @__PURE__ */ e("div", { className: F.action, children: n })
  ] });
}
const Mt = "_field_w9m4o_1", Nt = "_label_w9m4o_8", jt = "_required_w9m4o_14", Bt = "_hint_w9m4o_19", Lt = "_error_w9m4o_24", X = {
  field: Mt,
  label: Nt,
  required: jt,
  hint: Bt,
  error: Lt
};
function Fi({ label: o, htmlFor: t, required: s, hint: n, error: i, children: l, className: a }) {
  const _ = D(), r = D(), u = i != null ? _ : n != null ? r : null, p = le(l) && u != null ? de(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        u
      ].filter((m) => typeof m == "string").join(" ") || void 0,
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
const qt = "_label_rv97n_1", Ct = {
  label: qt
}, Xi = M(
  function({ className: t, children: s, ...n }, i) {
    return /* @__PURE__ */ e("label", { ref: i, className: [Ct.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Et = "_input_109wo_1", It = "_invalid_109wo_31", Tt = "_xs_109wo_37", At = "_sm_109wo_43", Dt = "_md_109wo_49", Vt = "_lg_109wo_55", Ht = "_xl_109wo_61", te = {
  input: Et,
  invalid: It,
  xs: Tt,
  sm: At,
  md: Dt,
  lg: Vt,
  xl: Ht
}, Ui = M(function({ size: t = "md", invalid: s = !1, className: n, ...i }, l) {
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
}, Gi = M(function({ size: t = "md", invalid: s = !1, options: n, children: i, className: l, ...a }, _) {
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
}), Gt = "_checkbox_sx3bj_1", Jt = {
  checkbox: Gt
}, Ji = M(function({ className: t, ...s }, n) {
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
}, Yt = M(function({ className: t, ...s }, n) {
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
}), Zt = "_trigger_4qzmh_1", es = "_tooltip_4qzmh_7", ts = "_top_4qzmh_34", ss = "_right_4qzmh_40", ns = "_bottom_4qzmh_46", os = "_left_4qzmh_52", ls = "_arrow_4qzmh_58", Q = {
  trigger: Zt,
  tooltip: es,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: ts,
  right: ss,
  bottom: ns,
  left: os,
  arrow: ls
};
function Qi({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: i
}) {
  const l = D(), a = A(null), [_, r] = V(!1), u = () => {
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
  const m = le(t) ? de(
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
      onMouseEnter: u,
      onMouseLeave: p,
      onFocus: u,
      onBlur: p,
      children: [
        m,
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
const is = "_dialog_gp2l5_1", cs = "_sm_gp2l5_30", as = "_md_gp2l5_34", _s = "_lg_gp2l5_38", rs = "_header_gp2l5_42", ds = "_title_gp2l5_51", fs = "_description_gp2l5_58", ms = "_close_gp2l5_65", us = "_body_gp2l5_84", ps = "_footer_gp2l5_90", E = {
  dialog: is,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: cs,
  md: as,
  lg: _s,
  header: rs,
  title: ds,
  description: fs,
  close: ms,
  body: us,
  footer: ps
};
function Yi({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: i,
  footer: l,
  size: a = "md",
  className: _
}) {
  const r = A(null), u = D(), p = D();
  return U(() => {
    const m = r.current;
    m && (o && !m.open ? m.showModal() : !o && m.open && m.close());
  }, [o]), /* @__PURE__ */ f(
    "dialog",
    {
      ref: r,
      className: [E.dialog, E[a], _].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? u : void 0,
      "aria-describedby": n ? p : void 0,
      children: [
        s && /* @__PURE__ */ f("header", { className: E.header, children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ e("h2", { id: u, className: E.title, children: s }),
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
const hs = "_viewport_1ex2n_1", gs = "_topLeft_1ex2n_13", zs = "_topRight_1ex2n_20", xs = "_bottomLeft_1ex2n_25", bs = "_toast_1ex2n_30", ys = "_leaving_1ex2n_61", Ss = "_info_1ex2n_77", vs = "_success_1ex2n_82", Os = "_warning_1ex2n_87", ks = "_danger_1ex2n_92", $s = "_content_1ex2n_97", ws = "_title_1ex2n_102", Ms = "_description_1ex2n_125", Ns = "_dismiss_1ex2n_132", js = "_actions_1ex2n_151", Bs = "_action_1ex2n_151", Ls = "_cancel_1ex2n_159", qs = "_progress_1ex2n_195", v = {
  viewport: hs,
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
  progress: qs,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Zi() {
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
function ec({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: i
}) {
  const [l, a] = V([]), [_, r] = V(!1), u = A([]), p = A(/* @__PURE__ */ new Map()), m = A(!1), z = A(0), x = (d) => {
    m.current = d, r(d);
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
        return u.current = y, y;
      });
    },
    [S]
  ), b = N(
    (d) => {
      const c = u.current.find((y) => y.id === d);
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
    m.current || p.current.forEach((d, c) => O(c)), x(!0);
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
      const c = u.current.find((y) => y.id === d);
      !c || c.leaving || (c.onDismiss?.(), a((y) => {
        const j = y.map((H) => H.id === d ? { ...H, leaving: !0 } : H);
        return u.current = j, j;
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
      p.current.set(d.id, c), m.current || k(d.id);
    },
    [k]
  ), ce = N(
    (d) => {
      const c = u.current.find((j) => j.id === d.id), y = {
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
        return u.current = H, H;
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
const Is = "_alert_eqii4_1", Ts = "_xs_eqii4_22", As = "_sm_eqii4_32", Ds = "_lg_eqii4_42", Vs = "_xl_eqii4_52", Hs = "_info_eqii4_63", Ps = "_success_eqii4_68", Rs = "_warning_eqii4_73", Ws = "_danger_eqii4_78", Ks = "_soft_eqii4_85", Fs = "_outline_eqii4_92", Xs = "_solid_eqii4_100", Us = "_icon_eqii4_114", Gs = "_content_eqii4_120", Js = "_title_eqii4_125", Qs = "_body_eqii4_131", Ys = "_dismiss_eqii4_137", B = {
  alert: Is,
  xs: Ts,
  sm: As,
  lg: Ds,
  xl: Vs,
  info: Hs,
  success: Ps,
  warning: Rs,
  danger: Ws,
  soft: Ks,
  outline: Fs,
  solid: Xs,
  icon: Us,
  content: Gs,
  title: Js,
  body: Qs,
  dismiss: Ys
};
function tc({
  tone: o = "info",
  variant: t = "soft",
  size: s = "md",
  title: n,
  icon: i,
  children: l,
  dismissible: a = !1,
  onDismiss: _,
  className: r
}) {
  const [u, p] = V(!1);
  if (u)
    return null;
  const m = () => {
    p(!0), _?.();
  };
  return /* @__PURE__ */ f(
    "div",
    {
      role: "alert",
      className: [B.alert, B[o], B[t], B[s], r].filter(Boolean).join(" "),
      children: [
        i != null && /* @__PURE__ */ e("span", { className: B.icon, "aria-hidden": "true", children: i }),
        /* @__PURE__ */ f("div", { className: B.content, children: [
          n && /* @__PURE__ */ e("div", { className: B.title, children: n }),
          l && /* @__PURE__ */ e("div", { className: B.body, children: l })
        ] }),
        a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: B.dismiss,
            onClick: m,
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Zs = "_skeleton_35ckz_1", en = "_text_35ckz_35", tn = "_circle_35ckz_40", sn = "_rect_35ckz_44", _e = {
  skeleton: Zs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: en,
  circle: tn,
  rect: sn
};
function sc({
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
const nn = "_row_15fbq_1", on = "_start_15fbq_7", ln = "_center_15fbq_11", cn = "_end_15fbq_15", an = "_stretch_15fbq_19", _n = "_baseline_15fbq_23", rn = "_noWrap_15fbq_51", Y = {
  row: nn,
  start: on,
  center: ln,
  end: cn,
  stretch: an,
  baseline: _n,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: rn
};
function nc({
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
const dn = "_column_1pa86_1", fn = "_Size1_1pa86_6", mn = "_Size2_1pa86_7", un = "_Size3_1pa86_8", pn = "_Size4_1pa86_9", hn = "_Size5_1pa86_10", gn = "_Size6_1pa86_11", zn = "_Size7_1pa86_12", xn = "_Size8_1pa86_13", bn = "_Size9_1pa86_14", yn = "_Size10_1pa86_15", Sn = "_Size11_1pa86_16", vn = "_Size12_1pa86_17", On = "_Offset1_1pa86_18", kn = "_Offset2_1pa86_19", $n = "_Offset3_1pa86_20", wn = "_Offset4_1pa86_21", Mn = "_Offset5_1pa86_22", Nn = "_Offset6_1pa86_23", jn = "_Offset7_1pa86_24", Bn = "_Offset8_1pa86_25", Ln = "_Offset9_1pa86_26", qn = "_Offset10_1pa86_27", Cn = "_Offset11_1pa86_28", En = "_smSize1_1pa86_31", In = "_smSize2_1pa86_32", Tn = "_smSize3_1pa86_33", An = "_smSize4_1pa86_34", Dn = "_smSize5_1pa86_35", Vn = "_smSize6_1pa86_36", Hn = "_smSize7_1pa86_37", Pn = "_smSize8_1pa86_38", Rn = "_smSize9_1pa86_39", Wn = "_smSize10_1pa86_40", Kn = "_smSize11_1pa86_41", Fn = "_smSize12_1pa86_42", Xn = "_smOffset1_1pa86_43", Un = "_smOffset2_1pa86_44", Gn = "_smOffset3_1pa86_45", Jn = "_smOffset4_1pa86_46", Qn = "_smOffset5_1pa86_47", Yn = "_smOffset6_1pa86_48", Zn = "_smOffset7_1pa86_49", eo = "_smOffset8_1pa86_50", to = "_smOffset9_1pa86_51", so = "_smOffset10_1pa86_52", no = "_smOffset11_1pa86_53", oo = "_mdSize1_1pa86_57", lo = "_mdSize2_1pa86_58", io = "_mdSize3_1pa86_59", co = "_mdSize4_1pa86_60", ao = "_mdSize5_1pa86_61", _o = "_mdSize6_1pa86_62", ro = "_mdSize7_1pa86_63", fo = "_mdSize8_1pa86_64", mo = "_mdSize9_1pa86_65", uo = "_mdSize10_1pa86_66", po = "_mdSize11_1pa86_67", ho = "_mdSize12_1pa86_68", go = "_mdOffset1_1pa86_69", zo = "_mdOffset2_1pa86_70", xo = "_mdOffset3_1pa86_71", bo = "_mdOffset4_1pa86_72", yo = "_mdOffset5_1pa86_73", So = "_mdOffset6_1pa86_74", vo = "_mdOffset7_1pa86_75", Oo = "_mdOffset8_1pa86_76", ko = "_mdOffset9_1pa86_77", $o = "_mdOffset10_1pa86_78", wo = "_mdOffset11_1pa86_79", Mo = "_lgSize1_1pa86_83", No = "_lgSize2_1pa86_84", jo = "_lgSize3_1pa86_85", Bo = "_lgSize4_1pa86_86", Lo = "_lgSize5_1pa86_87", qo = "_lgSize6_1pa86_88", Co = "_lgSize7_1pa86_89", Eo = "_lgSize8_1pa86_90", Io = "_lgSize9_1pa86_91", To = "_lgSize10_1pa86_92", Ao = "_lgSize11_1pa86_93", Do = "_lgSize12_1pa86_94", Vo = "_lgOffset1_1pa86_95", Ho = "_lgOffset2_1pa86_96", Po = "_lgOffset3_1pa86_97", Ro = "_lgOffset4_1pa86_98", Wo = "_lgOffset5_1pa86_99", Ko = "_lgOffset6_1pa86_100", Fo = "_lgOffset7_1pa86_101", Xo = "_lgOffset8_1pa86_102", Uo = "_lgOffset9_1pa86_103", Go = "_lgOffset10_1pa86_104", Jo = "_lgOffset11_1pa86_105", Qo = "_xlSize1_1pa86_109", Yo = "_xlSize2_1pa86_110", Zo = "_xlSize3_1pa86_111", el = "_xlSize4_1pa86_112", tl = "_xlSize5_1pa86_113", sl = "_xlSize6_1pa86_114", nl = "_xlSize7_1pa86_115", ol = "_xlSize8_1pa86_116", ll = "_xlSize9_1pa86_117", il = "_xlSize10_1pa86_118", cl = "_xlSize11_1pa86_119", al = "_xlSize12_1pa86_120", _l = "_xlOffset1_1pa86_121", rl = "_xlOffset2_1pa86_122", dl = "_xlOffset3_1pa86_123", fl = "_xlOffset4_1pa86_124", ml = "_xlOffset5_1pa86_125", ul = "_xlOffset6_1pa86_126", pl = "_xlOffset7_1pa86_127", hl = "_xlOffset8_1pa86_128", gl = "_xlOffset9_1pa86_129", zl = "_xlOffset10_1pa86_130", xl = "_xlOffset11_1pa86_131", ne = {
  column: dn,
  Size1: fn,
  Size2: mn,
  Size3: un,
  Size4: pn,
  Size5: hn,
  Size6: gn,
  Size7: zn,
  Size8: xn,
  Size9: bn,
  Size10: yn,
  Size11: Sn,
  Size12: vn,
  Offset1: On,
  Offset2: kn,
  Offset3: $n,
  Offset4: wn,
  Offset5: Mn,
  Offset6: Nn,
  Offset7: jn,
  Offset8: Bn,
  Offset9: Ln,
  Offset10: qn,
  Offset11: Cn,
  smSize1: En,
  smSize2: In,
  smSize3: Tn,
  smSize4: An,
  smSize5: Dn,
  smSize6: Vn,
  smSize7: Hn,
  smSize8: Pn,
  smSize9: Rn,
  smSize10: Wn,
  smSize11: Kn,
  smSize12: Fn,
  smOffset1: Xn,
  smOffset2: Un,
  smOffset3: Gn,
  smOffset4: Jn,
  smOffset5: Qn,
  smOffset6: Yn,
  smOffset7: Zn,
  smOffset8: eo,
  smOffset9: to,
  smOffset10: so,
  smOffset11: no,
  mdSize1: oo,
  mdSize2: lo,
  mdSize3: io,
  mdSize4: co,
  mdSize5: ao,
  mdSize6: _o,
  mdSize7: ro,
  mdSize8: fo,
  mdSize9: mo,
  mdSize10: uo,
  mdSize11: po,
  mdSize12: ho,
  mdOffset1: go,
  mdOffset2: zo,
  mdOffset3: xo,
  mdOffset4: bo,
  mdOffset5: yo,
  mdOffset6: So,
  mdOffset7: vo,
  mdOffset8: Oo,
  mdOffset9: ko,
  mdOffset10: $o,
  mdOffset11: wo,
  lgSize1: Mo,
  lgSize2: No,
  lgSize3: jo,
  lgSize4: Bo,
  lgSize5: Lo,
  lgSize6: qo,
  lgSize7: Co,
  lgSize8: Eo,
  lgSize9: Io,
  lgSize10: To,
  lgSize11: Ao,
  lgSize12: Do,
  lgOffset1: Vo,
  lgOffset2: Ho,
  lgOffset3: Po,
  lgOffset4: Ro,
  lgOffset5: Wo,
  lgOffset6: Ko,
  lgOffset7: Fo,
  lgOffset8: Xo,
  lgOffset9: Uo,
  lgOffset10: Go,
  lgOffset11: Jo,
  xlSize1: Qo,
  xlSize2: Yo,
  xlSize3: Zo,
  xlSize4: el,
  xlSize5: tl,
  xlSize6: sl,
  xlSize7: nl,
  xlSize8: ol,
  xlSize9: ll,
  xlSize10: il,
  xlSize11: cl,
  xlSize12: al,
  xlOffset1: _l,
  xlOffset2: rl,
  xlOffset3: dl,
  xlOffset4: fl,
  xlOffset5: ml,
  xlOffset6: ul,
  xlOffset7: pl,
  xlOffset8: hl,
  xlOffset9: gl,
  xlOffset10: zl,
  xlOffset11: xl
}, bl = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function oc({ className: o, ...t }) {
  const s = [ne.column];
  for (const [O, S, h] of bl) {
    const b = t[S], k = t[h];
    b != null && s.push(ne[`${O}Size${b}`]), k != null && k > 0 && s.push(ne[`${O}Offset${k}`]);
  }
  const { size: n, offset: i, sizeSm: l, offsetSm: a, sizeMd: _, offsetMd: r, sizeLg: u, offsetLg: p, sizeXl: m, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const yl = "_layout_1pcye_1", Sl = "_row_1pcye_7", re = {
  layout: yl,
  row: Sl
}, vl = "_footer_14whp_1", Ol = {
  footer: vl
};
function kl({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [Ol.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const $l = "_header_2mimk_1", wl = {
  header: $l
};
function Ml({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [wl.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const Nl = "_sidebar_1ktmd_1", jl = "_left_1ktmd_9", Bl = "_right_1ktmd_13", Ll = "_collapsed_1ktmd_17", ql = "_responsive_1ktmd_25", Cl = "_overlay_1ktmd_33", El = "_mask_1ktmd_53", T = {
  sidebar: Nl,
  left: jl,
  right: Bl,
  collapsed: Ll,
  responsive: ql,
  overlay: Cl,
  mask: El
};
function Il({
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
    const r = (u) => {
      u.key === "Escape" && i();
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
function lc({ className: o, children: t, ...s }) {
  const n = [], i = [], l = [], a = [], _ = [];
  return xe.forEach(t, (r) => {
    if (!le(r)) {
      l.push(r);
      return;
    }
    r.type === Ml ? n.push(r) : r.type === kl ? i.push(r) : r.type === Il ? (r.props.position === "right" ? _ : a).push(r) : l.push(r);
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
const Tl = "_body_1tpk6_1", Al = {
  body: Tl
};
function ic({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Al.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Dl = "_track_1mkoz_1", Vl = "_bar_1mkoz_31", Hl = "_primary_1mkoz_39", Pl = "_success_1mkoz_43", Rl = "_warning_1mkoz_47", Wl = "_danger_1mkoz_51", Kl = "_indeterminate_1mkoz_55", Fl = "_circular_1mkoz_69", Xl = "_fill_1mkoz_109", w = {
  track: Dl,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Vl,
  primary: Hl,
  success: Pl,
  warning: Rl,
  danger: Wl,
  indeterminate: Kl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Fl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Xl,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function cc({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: i = "linear",
  size: l = "md",
  className: a,
  ..._
}) {
  const r = t > 0 ? Math.min(t, Math.max(0, o)) : 0, u = t > 0 ? r / t * 100 : 0;
  if (i === "circular") {
    const p = typeof l == "string", m = 2, z = 10.5, x = 2 * Math.PI * z, O = x * (n ? 0.75 : 1), S = n ? 0 : x * (1 - u / 100);
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
          /* @__PURE__ */ e("circle", { className: w.track, cx: 12, cy: 12, r: z, strokeWidth: m }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: w.fill,
              cx: 12,
              cy: 12,
              r: z,
              strokeWidth: m,
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
          style: n ? void 0 : { width: `${u}%` }
        }
      )
    }
  );
}
const Ul = "_wrapper_t239v_1", Gl = {
  wrapper: Ul
};
function ac({
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
  return /* @__PURE__ */ f("label", { className: [Gl.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Yt, { checked: i, onChange: a })
  ] });
}
const Jl = "_avatar_17s76_1", Ql = "_xs_17s76_12", Yl = "_sm_17s76_18", Zl = "_md_17s76_24", ei = "_lg_17s76_30", ti = "_xl_17s76_36", si = "_initials_17s76_42", ni = "_image_17s76_57", oi = "_status_17s76_64", li = "_online_17s76_84", ii = "_offline_17s76_88", ci = "_away_17s76_92", P = {
  avatar: Jl,
  xs: Ql,
  sm: Yl,
  md: Zl,
  lg: ei,
  xl: ti,
  initials: si,
  image: ni,
  status: oi,
  online: li,
  offline: ii,
  away: ci
}, Z = [
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
function _i(o) {
  let t = 0;
  for (let s = 0; s < o.length; s += 1)
    t = t * 31 + o.charCodeAt(s) >>> 0;
  return Z[t % Z.length] ?? Z[0];
}
function _c({
  name: o,
  src: t,
  alt: s,
  size: n = "md",
  status: i,
  className: l
}) {
  const a = ee(() => o ? ai(o) : "?", [o]), _ = ee(() => o ? _i(o) : Z[0], [o]), r = t ? /* @__PURE__ */ e("img", { className: P.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: P.initials, style: { background: _ }, children: a });
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
const ri = "_root_jppcr_1", di = "_left_jppcr_6", fi = "_right_jppcr_7", mi = "_panel_jppcr_12", ui = "_bottom_jppcr_20", pi = "_tabList_jppcr_24", hi = "_underline_jppcr_53", gi = "_pills_jppcr_72", zi = "_tab_jppcr_24", xi = "_active_jppcr_113", bi = "_disabled_jppcr_139", L = {
  root: ri,
  left: di,
  right: fi,
  panel: mi,
  bottom: ui,
  tabList: pi,
  underline: hi,
  pills: gi,
  tab: zi,
  active: xi,
  disabled: bi
};
function rc({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: i = "underline",
  position: l = "top",
  className: a
}) {
  const _ = D(), r = A(null), [u, p] = V(s ?? o[0]?.key ?? ""), m = t ?? u, z = l === "left" || l === "right", x = (h) => {
    p(h), n?.(h);
  }, O = (h) => {
    const b = o.filter((C) => !C.disabled), k = b.findIndex((C) => C.key === m);
    let $ = -1;
    h.key === "ArrowRight" || z && h.key === "ArrowDown" ? $ = (k + 1) % b.length : h.key === "ArrowLeft" || z && h.key === "ArrowUp" ? $ = (k - 1 + b.length) % b.length : h.key === "Home" ? $ = 0 : h.key === "End" && ($ = b.length - 1), $ >= 0 && (h.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(b[$]?.key ?? "")}"]`
    )?.focus(), x(b[$]?.key ?? ""));
  }, S = o.find((h) => h.key === m);
  return /* @__PURE__ */ f("div", { className: [L.root, L[l], a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [L.tabList, L[i], L[l]].filter(Boolean).join(" "),
        onKeyDown: O,
        children: o.map((h) => {
          const b = h.key === m;
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
                L.tab,
                b ? L.active : null,
                h.disabled ? L.disabled : null
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
        className: L.panel,
        children: S.content
      }
    )
  ] });
}
const yi = "_root_1rcwz_1", Si = "_item_1rcwz_9", vi = "_heading_1rcwz_13", Oi = "_trigger_1rcwz_17", ki = "_disabled_1rcwz_34", $i = "_title_1rcwz_48", wi = "_chevron_1rcwz_52", Mi = "_open_1rcwz_59", Ni = "_content_1rcwz_63", q = {
  root: yi,
  item: Si,
  heading: vi,
  trigger: Oi,
  disabled: ki,
  title: $i,
  chevron: wi,
  open: Mi,
  content: Ni
};
function dc({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: i,
  className: l
}) {
  const a = D(), [_, r] = V(n ?? []), u = s ?? _, p = (m) => {
    const z = u.includes(m) ? u.filter((x) => x !== m) : t ? [...u, m] : [m];
    r(z), i?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [q.root, l].filter(Boolean).join(" "), children: o.map((m) => {
    const z = u.includes(m.key), x = `${a}-panel-${m.key}`, O = `${a}-trigger-${m.key}`;
    return /* @__PURE__ */ f("div", { className: q.item, children: [
      /* @__PURE__ */ e("h3", { className: q.heading, children: /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          id: O,
          "aria-expanded": z,
          "aria-controls": x,
          disabled: m.disabled,
          className: [
            q.trigger,
            m.disabled ? q.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(m.key),
          children: [
            /* @__PURE__ */ e("span", { className: q.title, children: m.title }),
            /* @__PURE__ */ e("span", { className: [q.chevron, z ? q.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
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
          className: q.content,
          children: m.content
        }
      )
    ] }, m.key);
  }) });
}
const ji = "_textarea_jj8z9_1", Bi = "_xs_jj8z9_25", Li = "_sm_jj8z9_30", qi = "_md_jj8z9_35", Ci = "_lg_jj8z9_40", Ei = "_xl_jj8z9_45", oe = {
  textarea: ji,
  xs: Bi,
  sm: Li,
  md: qi,
  lg: Ci,
  xl: Ei,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, fc = M(function({ size: t = "md", resize: s = "none", className: n, ...i }, l) {
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
  dc as Accordion,
  tc as Alert,
  _c as Avatar,
  Vi as Badge,
  ic as Body,
  Ai as Button,
  Di as Card,
  Ji as Checkbox,
  oc as Column,
  Yi as Dialog,
  Ki as EmptyState,
  Fi as Field,
  kl as Footer,
  Ml as Header,
  Pi as Icon,
  Ui as Input,
  Xi as Label,
  lc as Layout,
  cc as Progress,
  nc as Row,
  Gi as Select,
  Il as Sidebar,
  sc as Skeleton,
  Ri as Stat,
  Yt as Switch,
  Wi as Table,
  rc as Tabs,
  fc as Textarea,
  ac as ThemeSwitcher,
  ec as ToastProvider,
  Qi as Tooltip,
  Hi as iconNames,
  Zi as useToast
};
