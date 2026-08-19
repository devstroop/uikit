import { jsx as e, jsxs as f, Fragment as g } from "react/jsx-runtime";
import { forwardRef as $, useId as T, isValidElement as ie, cloneElement as de, useRef as I, useState as A, useEffect as F, useCallback as w, useMemo as Y, useContext as ge, createContext as ze, Children as xe } from "react";
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
}, El = $(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: n = !1,
  iconOnly: l = !1,
  className: i,
  type: c = "button",
  ...r
}, _) {
  const u = [
    H.button,
    H[t],
    H[s],
    n ? H.fullWidth : null,
    l ? H.iconOnly : null,
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: c, className: u, ...r });
}), Ce = "_card_80b0o_1", Ee = "_elevated_80b0o_8", Ie = "_outlined_80b0o_13", Te = "_interactive_80b0o_17", Ae = "_text_80b0o_25", De = "_header_80b0o_41", Ve = "_body_80b0o_48", He = "_footer_80b0o_58", P = {
  card: Ce,
  elevated: Ee,
  outlined: Ie,
  interactive: Te,
  text: Ae,
  header: De,
  body: Ve,
  footer: He
}, Il = $(function({ variant: t = "elevated", header: s, footer: n, className: l, children: i, onKeyDown: c, ...r }, _) {
  const u = t === "interactive";
  return /* @__PURE__ */ f(
    "div",
    {
      ref: _,
      tabIndex: u ? 0 : void 0,
      onKeyDown: (h) => {
        c?.(h), !(!u || h.key !== "Enter" && h.key !== " ") && (h.preventDefault(), h.currentTarget.click());
      },
      className: [P.card, P[t], l].filter(Boolean).join(" "),
      ...r,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: P.header, children: s }),
        /* @__PURE__ */ e("div", { className: P.body, children: i }),
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
}, Tl = $(function({ tone: t = "neutral", variant: s = "soft", size: n = "md", className: l, children: i, ...c }, r) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: r,
      className: [U.badge, U[n], U[t], U[s], l].filter(Boolean).join(" "),
      ...c,
      children: i
    }
  );
}), tt = "_xs_1uch7_2", st = "_sm_1uch7_7", nt = "_md_1uch7_1", ot = "_lg_1uch7_17", it = "_xl_1uch7_22", lt = {
  xs: tt,
  sm: st,
  md: nt,
  lg: ot,
  xl: it
}, Al = [
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
}, Dl = $(function({ name: t, size: s = "md", strokeWidth: n = 2, className: l, ...i }, c) {
  const r = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [r ? lt[s] : null, l].filter(Boolean).join(" "),
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
      ...i,
      children: at[t]
    }
  );
}), ct = "_stat_1ks65_1", _t = "_label_1ks65_8", rt = "_row_1ks65_16", dt = "_value_1ks65_22", ft = "_delta_1ks65_28", mt = "_success_1ks65_33", ut = "_danger_1ks65_37", ht = "_neutral_1ks65_41", pt = "_hint_1ks65_45", q = {
  stat: ct,
  label: _t,
  row: rt,
  value: dt,
  delta: ft,
  success: mt,
  danger: ut,
  neutral: ht,
  hint: pt
}, Vl = $(function({ label: t, value: s, delta: n, deltaTone: l = "neutral", hint: i, className: c, ...r }, _) {
  return /* @__PURE__ */ f("div", { ref: _, className: [q.stat, c].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: q.label, children: t }),
    /* @__PURE__ */ f("div", { className: q.row, children: [
      /* @__PURE__ */ e("div", { className: q.value, children: s }),
      n != null && /* @__PURE__ */ e("div", { className: [q.delta, q[l]].join(" "), children: n })
    ] }),
    i != null && /* @__PURE__ */ e("div", { className: q.hint, children: i })
  ] });
}), gt = "_wrap_1x8tx_1", zt = "_table_1x8tx_8", xt = "_start_1x8tx_40", bt = "_center_1x8tx_44", yt = "_end_1x8tx_48", St = "_empty_1x8tx_52", R = {
  wrap: gt,
  table: zt,
  start: xt,
  center: bt,
  end: yt,
  empty: St
};
function Hl({ columns: o, rows: t, rowKey: s, empty: n, className: l }) {
  return /* @__PURE__ */ f("div", { className: [R.wrap, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ f("table", { className: R.table, children: [
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
const vt = "_emptyState_1o7fc_1", Ot = "_icon_1o7fc_13", kt = "_title_1o7fc_18", $t = "_description_1o7fc_24", wt = "_action_1o7fc_30", W = {
  emptyState: vt,
  icon: Ot,
  title: kt,
  description: $t,
  action: wt
};
function Pl({ icon: o, title: t, description: s, action: n, className: l }) {
  return /* @__PURE__ */ f("div", { className: [W.emptyState, l].filter(Boolean).join(" "), children: [
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
function Rl({ label: o, htmlFor: t, required: s, hint: n, error: l, children: i, className: c }) {
  const r = T(), _ = T(), u = l != null ? r : n != null ? _ : null, h = ie(i) && u != null ? de(
    i,
    {
      "aria-describedby": [
        i.props["aria-describedby"],
        u
      ].filter((m) => typeof m == "string").join(" ") || void 0,
      "aria-invalid": l != null ? !0 : i.props["aria-invalid"]
    }
  ) : i;
  return /* @__PURE__ */ f("div", { className: [K.field, c].filter(Boolean).join(" "), children: [
    o != null && /* @__PURE__ */ f("label", { className: K.label, htmlFor: t, children: [
      o,
      s === !0 && /* @__PURE__ */ e("span", { className: K.required, "aria-hidden": "true", children: "*" })
    ] }),
    h,
    l != null ? /* @__PURE__ */ e("div", { id: r, className: K.error, role: "alert", children: l }) : n != null ? /* @__PURE__ */ e("div", { id: _, className: K.hint, children: n }) : null
  ] });
}
const qt = "_label_rv97n_1", Ct = {
  label: qt
}, Wl = $(
  function({ className: t, children: s, ...n }, l) {
    return /* @__PURE__ */ e("label", { ref: l, className: [Ct.label, t].filter(Boolean).join(" "), ...n, children: s });
  }
), Et = "_input_109wo_1", It = "_invalid_109wo_31", Tt = "_xs_109wo_37", At = "_sm_109wo_43", Dt = "_md_109wo_49", Vt = "_lg_109wo_55", Ht = "_xl_109wo_61", te = {
  input: Et,
  invalid: It,
  xs: Tt,
  sm: At,
  md: Dt,
  lg: Vt,
  xl: Ht
}, Kl = $(function({ size: t = "md", invalid: s = !1, className: n, ...l }, i) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: i,
      className: [te.input, te[t], s ? te.invalid : null, n].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...l
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
}, Fl = $(function({ size: t = "md", invalid: s = !1, options: n, children: l, className: i, ...c }, r) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: r,
      className: [se.select, se[t], s ? se.invalid : null, i].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c,
      children: n != null ? n.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : l
    }
  );
}), Gt = "_checkbox_sx3bj_1", Jt = {
  checkbox: Gt
}, Xl = $(function({ className: t, ...s }, n) {
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
}), Zt = "_trigger_4qzmh_1", es = "_tooltip_4qzmh_7", ts = "_top_4qzmh_34", ss = "_right_4qzmh_40", ns = "_bottom_4qzmh_46", os = "_left_4qzmh_52", is = "_arrow_4qzmh_58", G = {
  trigger: Zt,
  tooltip: es,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: ts,
  right: ss,
  bottom: ns,
  left: os,
  arrow: is
};
function Ul({
  content: o,
  children: t,
  placement: s = "top",
  delayMs: n = 300,
  className: l
}) {
  const i = T(), c = I(null), [r, _] = A(!1), u = () => {
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
  const m = ie(t) ? de(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        r ? i : null
      ].filter((z) => typeof z == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ f(
    "span",
    {
      className: [G.trigger, l].filter(Boolean).join(" "),
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
            id: i,
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
const ls = "_dialog_gp2l5_1", as = "_sm_gp2l5_30", cs = "_md_gp2l5_34", _s = "_lg_gp2l5_38", rs = "_header_gp2l5_42", ds = "_title_gp2l5_51", fs = "_description_gp2l5_58", ms = "_close_gp2l5_65", us = "_body_gp2l5_84", hs = "_footer_gp2l5_90", L = {
  dialog: ls,
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
function Gl({
  open: o,
  onClose: t,
  title: s,
  description: n,
  children: l,
  footer: i,
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
        l && /* @__PURE__ */ e("div", { className: L.body, children: l }),
        i && /* @__PURE__ */ e("footer", { className: L.footer, children: i })
      ]
    }
  );
}
const ps = "_viewport_1ex2n_1", gs = "_topLeft_1ex2n_13", zs = "_topRight_1ex2n_20", xs = "_bottomLeft_1ex2n_25", bs = "_toast_1ex2n_30", ys = "_leaving_1ex2n_61", Ss = "_info_1ex2n_77", vs = "_success_1ex2n_82", Os = "_warning_1ex2n_87", ks = "_danger_1ex2n_92", $s = "_content_1ex2n_97", ws = "_title_1ex2n_102", Ms = "_description_1ex2n_125", Ns = "_dismiss_1ex2n_132", js = "_actions_1ex2n_151", Bs = "_action_1ex2n_151", Ls = "_cancel_1ex2n_159", qs = "_progress_1ex2n_195", O = {
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
  progress: qs,
  "se-toast-progress": "_se-toast-progress_1ex2n_1"
}, fe = ze(null);
function Jl() {
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
function Ql({
  children: o,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  pauseOnHover: n = !0,
  className: l
}) {
  const [i, c] = A([]), [r, _] = A(!1), u = I([]), h = I(/* @__PURE__ */ new Map()), m = I(!1), z = I(0), x = (d) => {
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
      }), window.setTimeout(() => M(d), Cs));
    },
    [M]
  ), le = w(
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
      }), a && b(y.id), le(y);
    },
    [t, s, le, b]
  ), me = Y(() => ({ toast: ae }), [ae]), ue = Y(
    () => Array.from(/* @__PURE__ */ new Set([s, ...i.map((d) => d.position)])),
    [s, i]
  ), he = n ? Z : void 0, pe = n ? ee : void 0;
  return /* @__PURE__ */ f(fe.Provider, { value: me, children: [
    o,
    ue.map((d) => /* @__PURE__ */ e(
      "div",
      {
        className: [
          O.viewport,
          O[Es[d]],
          l
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        onMouseEnter: he,
        onMouseLeave: pe,
        children: i.filter((a) => a.position === d).map((a) => /* @__PURE__ */ f(
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
const Is = "_alert_eqii4_1", Ts = "_xs_eqii4_22", As = "_sm_eqii4_32", Ds = "_lg_eqii4_42", Vs = "_xl_eqii4_52", Hs = "_info_eqii4_63", Ps = "_success_eqii4_68", Rs = "_warning_eqii4_73", Ws = "_danger_eqii4_78", Ks = "_soft_eqii4_85", Fs = "_outline_eqii4_92", Xs = "_solid_eqii4_100", Us = "_icon_eqii4_114", Gs = "_content_eqii4_120", Js = "_title_eqii4_125", Qs = "_body_eqii4_131", Ys = "_dismiss_eqii4_137", j = {
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
function Yl({
  tone: o = "info",
  variant: t = "soft",
  size: s = "md",
  title: n,
  icon: l,
  children: i,
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
        l != null && /* @__PURE__ */ e("span", { className: j.icon, "aria-hidden": "true", children: l }),
        /* @__PURE__ */ f("div", { className: j.content, children: [
          n && /* @__PURE__ */ e("div", { className: j.title, children: n }),
          i && /* @__PURE__ */ e("div", { className: j.body, children: i })
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
const Zs = "_skeleton_35ckz_1", en = "_text_35ckz_35", tn = "_circle_35ckz_40", sn = "_rect_35ckz_44", _e = {
  skeleton: Zs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: en,
  circle: tn,
  rect: sn
};
function Zl({
  variant: o = "text",
  width: t,
  height: s,
  className: n
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (l.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [_e.skeleton, _e[o], n].filter(Boolean).join(" "),
      style: l
    }
  );
}
const nn = "_row_15fbq_1", on = "_start_15fbq_7", ln = "_center_15fbq_11", an = "_end_15fbq_15", cn = "_stretch_15fbq_19", _n = "_baseline_15fbq_23", rn = "_noWrap_15fbq_51", J = {
  row: nn,
  start: on,
  center: ln,
  end: an,
  stretch: cn,
  baseline: _n,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: rn
};
function ea({
  gap: o,
  align: t = "stretch",
  justify: s = "start",
  wrap: n = !0,
  className: l,
  style: i,
  ...c
}) {
  const r = {
    ...o != null ? { gap: typeof o == "number" ? `${o}px` : o } : {},
    ...i
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        J.row,
        J[t],
        J[`justify-${s}`],
        n ? null : J.noWrap,
        l
      ].filter(Boolean).join(" "),
      style: r,
      ...c
    }
  );
}
const dn = "_column_1pa86_1", fn = "_Size1_1pa86_6", mn = "_Size2_1pa86_7", un = "_Size3_1pa86_8", hn = "_Size4_1pa86_9", pn = "_Size5_1pa86_10", gn = "_Size6_1pa86_11", zn = "_Size7_1pa86_12", xn = "_Size8_1pa86_13", bn = "_Size9_1pa86_14", yn = "_Size10_1pa86_15", Sn = "_Size11_1pa86_16", vn = "_Size12_1pa86_17", On = "_Offset1_1pa86_18", kn = "_Offset2_1pa86_19", $n = "_Offset3_1pa86_20", wn = "_Offset4_1pa86_21", Mn = "_Offset5_1pa86_22", Nn = "_Offset6_1pa86_23", jn = "_Offset7_1pa86_24", Bn = "_Offset8_1pa86_25", Ln = "_Offset9_1pa86_26", qn = "_Offset10_1pa86_27", Cn = "_Offset11_1pa86_28", En = "_smSize1_1pa86_31", In = "_smSize2_1pa86_32", Tn = "_smSize3_1pa86_33", An = "_smSize4_1pa86_34", Dn = "_smSize5_1pa86_35", Vn = "_smSize6_1pa86_36", Hn = "_smSize7_1pa86_37", Pn = "_smSize8_1pa86_38", Rn = "_smSize9_1pa86_39", Wn = "_smSize10_1pa86_40", Kn = "_smSize11_1pa86_41", Fn = "_smSize12_1pa86_42", Xn = "_smOffset1_1pa86_43", Un = "_smOffset2_1pa86_44", Gn = "_smOffset3_1pa86_45", Jn = "_smOffset4_1pa86_46", Qn = "_smOffset5_1pa86_47", Yn = "_smOffset6_1pa86_48", Zn = "_smOffset7_1pa86_49", eo = "_smOffset8_1pa86_50", to = "_smOffset9_1pa86_51", so = "_smOffset10_1pa86_52", no = "_smOffset11_1pa86_53", oo = "_mdSize1_1pa86_57", io = "_mdSize2_1pa86_58", lo = "_mdSize3_1pa86_59", ao = "_mdSize4_1pa86_60", co = "_mdSize5_1pa86_61", _o = "_mdSize6_1pa86_62", ro = "_mdSize7_1pa86_63", fo = "_mdSize8_1pa86_64", mo = "_mdSize9_1pa86_65", uo = "_mdSize10_1pa86_66", ho = "_mdSize11_1pa86_67", po = "_mdSize12_1pa86_68", go = "_mdOffset1_1pa86_69", zo = "_mdOffset2_1pa86_70", xo = "_mdOffset3_1pa86_71", bo = "_mdOffset4_1pa86_72", yo = "_mdOffset5_1pa86_73", So = "_mdOffset6_1pa86_74", vo = "_mdOffset7_1pa86_75", Oo = "_mdOffset8_1pa86_76", ko = "_mdOffset9_1pa86_77", $o = "_mdOffset10_1pa86_78", wo = "_mdOffset11_1pa86_79", Mo = "_lgSize1_1pa86_83", No = "_lgSize2_1pa86_84", jo = "_lgSize3_1pa86_85", Bo = "_lgSize4_1pa86_86", Lo = "_lgSize5_1pa86_87", qo = "_lgSize6_1pa86_88", Co = "_lgSize7_1pa86_89", Eo = "_lgSize8_1pa86_90", Io = "_lgSize9_1pa86_91", To = "_lgSize10_1pa86_92", Ao = "_lgSize11_1pa86_93", Do = "_lgSize12_1pa86_94", Vo = "_lgOffset1_1pa86_95", Ho = "_lgOffset2_1pa86_96", Po = "_lgOffset3_1pa86_97", Ro = "_lgOffset4_1pa86_98", Wo = "_lgOffset5_1pa86_99", Ko = "_lgOffset6_1pa86_100", Fo = "_lgOffset7_1pa86_101", Xo = "_lgOffset8_1pa86_102", Uo = "_lgOffset9_1pa86_103", Go = "_lgOffset10_1pa86_104", Jo = "_lgOffset11_1pa86_105", Qo = "_xlSize1_1pa86_109", Yo = "_xlSize2_1pa86_110", Zo = "_xlSize3_1pa86_111", ei = "_xlSize4_1pa86_112", ti = "_xlSize5_1pa86_113", si = "_xlSize6_1pa86_114", ni = "_xlSize7_1pa86_115", oi = "_xlSize8_1pa86_116", ii = "_xlSize9_1pa86_117", li = "_xlSize10_1pa86_118", ai = "_xlSize11_1pa86_119", ci = "_xlSize12_1pa86_120", _i = "_xlOffset1_1pa86_121", ri = "_xlOffset2_1pa86_122", di = "_xlOffset3_1pa86_123", fi = "_xlOffset4_1pa86_124", mi = "_xlOffset5_1pa86_125", ui = "_xlOffset6_1pa86_126", hi = "_xlOffset7_1pa86_127", pi = "_xlOffset8_1pa86_128", gi = "_xlOffset9_1pa86_129", zi = "_xlOffset10_1pa86_130", xi = "_xlOffset11_1pa86_131", ne = {
  column: dn,
  Size1: fn,
  Size2: mn,
  Size3: un,
  Size4: hn,
  Size5: pn,
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
  mdSize2: io,
  mdSize3: lo,
  mdSize4: ao,
  mdSize5: co,
  mdSize6: _o,
  mdSize7: ro,
  mdSize8: fo,
  mdSize9: mo,
  mdSize10: uo,
  mdSize11: ho,
  mdSize12: po,
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
  xlSize4: ei,
  xlSize5: ti,
  xlSize6: si,
  xlSize7: ni,
  xlSize8: oi,
  xlSize9: ii,
  xlSize10: li,
  xlSize11: ai,
  xlSize12: ci,
  xlOffset1: _i,
  xlOffset2: ri,
  xlOffset3: di,
  xlOffset4: fi,
  xlOffset5: mi,
  xlOffset6: ui,
  xlOffset7: hi,
  xlOffset8: pi,
  xlOffset9: gi,
  xlOffset10: zi,
  xlOffset11: xi
}, bi = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function ta({ className: o, ...t }) {
  const s = [ne.column];
  for (const [p, b, M] of bi) {
    const S = t[b], v = t[M];
    S != null && s.push(ne[`${p}Size${S}`]), v != null && v > 0 && s.push(ne[`${p}Offset${v}`]);
  }
  const { size: n, offset: l, sizeSm: i, offsetSm: c, sizeMd: r, offsetMd: _, sizeLg: u, offsetLg: h, sizeXl: m, offsetXl: z, ...x } = t;
  return /* @__PURE__ */ e("div", { className: [...s, o].filter(Boolean).join(" "), ...x });
}
const yi = "_layout_1pcye_1", Si = "_row_1pcye_7", re = {
  layout: yi,
  row: Si
}, vi = "_footer_14whp_1", Oi = {
  footer: vi
};
function ki({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [Oi.footer, o].filter(Boolean).join(" "), ...s, children: t });
}
const $i = "_header_2mimk_1", wi = {
  header: $i
};
function Mi({ className: o, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [wi.header, o].filter(Boolean).join(" "), ...s, children: t });
}
const Ni = "_sidebar_1ktmd_1", ji = "_left_1ktmd_9", Bi = "_right_1ktmd_13", Li = "_collapsed_1ktmd_17", qi = "_responsive_1ktmd_25", Ci = "_overlay_1ktmd_33", Ei = "_mask_1ktmd_53", C = {
  sidebar: Ni,
  left: ji,
  right: Bi,
  collapsed: Li,
  responsive: qi,
  overlay: Ci,
  mask: Ei
};
function Ii({
  position: o = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: n = !1,
  onClose: l,
  className: i,
  children: c,
  ...r
}) {
  return F(() => {
    if (!n || !t || l == null) return;
    const _ = (u) => {
      u.key === "Escape" && l();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [n, t, l]), /* @__PURE__ */ f(g, { children: [
    n && t ? /* @__PURE__ */ e("div", { className: `${C.mask} se-layout-mask`, "aria-hidden": "true", onClick: l }) : null,
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
        ...r,
        children: c
      }
    )
  ] });
}
function sa({ className: o, children: t, ...s }) {
  const n = [], l = [], i = [], c = [], r = [];
  return xe.forEach(t, (_) => {
    if (!ie(_)) {
      i.push(_);
      return;
    }
    _.type === Mi ? n.push(_) : _.type === ki ? l.push(_) : _.type === Ii ? (_.props.position === "right" ? r : c).push(_) : i.push(_);
  }), /* @__PURE__ */ f("div", { className: [re.layout, o].filter(Boolean).join(" "), ...s, children: [
    n,
    /* @__PURE__ */ f("div", { className: re.row, children: [
      c,
      i,
      r
    ] }),
    l
  ] });
}
const Ti = "_body_1tpk6_1", Ai = {
  body: Ti
};
function na({ as: o = "main", className: t, children: s, ...n }) {
  return /* @__PURE__ */ e(o, { className: [Ai.body, t].filter(Boolean).join(" "), ...n, children: s });
}
const Di = "_track_1mkoz_1", Vi = "_bar_1mkoz_31", Hi = "_primary_1mkoz_39", Pi = "_success_1mkoz_43", Ri = "_warning_1mkoz_47", Wi = "_danger_1mkoz_51", Ki = "_indeterminate_1mkoz_55", Fi = "_circular_1mkoz_69", Xi = "_fill_1mkoz_109", k = {
  track: Di,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: Vi,
  primary: Hi,
  success: Pi,
  warning: Ri,
  danger: Wi,
  indeterminate: Ki,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: Fi,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: Xi,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function oa({
  value: o = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: n = !1,
  variant: l = "linear",
  size: i = "md",
  className: c,
  ...r
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, o)) : 0, u = t > 0 ? _ / t * 100 : 0;
  if (l === "circular") {
    const h = typeof i == "string", m = 2, z = 10.5, x = 2 * Math.PI * z, p = x * (n ? 0.75 : 1), b = n ? 0 : x * (1 - u / 100);
    return /* @__PURE__ */ f(
      "svg",
      {
        width: h ? void 0 : i,
        height: h ? void 0 : i,
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
          h ? k[`circular-${i}`] : null,
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
        typeof i == "string" ? k[`linear-${i}`] : null,
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
const Ui = "_wrapper_t239v_1", Gi = {
  wrapper: Ui
};
function ia({
  defaultTheme: o = "light",
  onChange: t,
  label: s = "Dark mode",
  className: n
}) {
  const [l, i] = A(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : o === "dark");
  F(() => {
    document.documentElement.dataset.theme = l ? "dark" : "light";
  }, []);
  const c = (r) => {
    const _ = r.target.checked;
    i(_), document.documentElement.dataset.theme = _ ? "dark" : "light", t?.(_ ? "dark" : "light");
  };
  return /* @__PURE__ */ f("label", { className: [Gi.wrapper, n].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(Yt, { checked: l, onChange: c })
  ] });
}
const Ji = "_avatar_17s76_1", Qi = "_xs_17s76_12", Yi = "_sm_17s76_18", Zi = "_md_17s76_24", el = "_lg_17s76_30", tl = "_xl_17s76_36", sl = "_initials_17s76_42", nl = "_image_17s76_57", ol = "_status_17s76_64", il = "_online_17s76_84", ll = "_offline_17s76_88", al = "_away_17s76_92", V = {
  avatar: Ji,
  xs: Qi,
  sm: Yi,
  md: Zi,
  lg: el,
  xl: tl,
  initials: sl,
  image: nl,
  status: ol,
  online: il,
  offline: ll,
  away: al
}, Q = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function cl(o) {
  return o.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function _l(o) {
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
  status: l,
  className: i
}) {
  const c = Y(() => o ? cl(o) : "?", [o]), r = Y(() => o ? _l(o) : Q[0], [o]), _ = t ? /* @__PURE__ */ e("img", { className: V.image, src: t, alt: s ?? o ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: V.initials, style: { background: r }, children: c });
  return /* @__PURE__ */ f(
    "span",
    {
      className: [
        V.avatar,
        V[n],
        l ? V[l] : null,
        i
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? o ?? "avatar",
      children: [
        _,
        l && /* @__PURE__ */ e("span", { className: V.status, "aria-hidden": "true" })
      ]
    }
  );
}
const rl = "_root_1k1gx_1", dl = "_tabList_1k1gx_6", fl = "_underline_1k1gx_12", ml = "_pills_1k1gx_16", ul = "_tab_1k1gx_6", hl = "_active_1k1gx_36", pl = "_disabled_1k1gx_50", gl = "_panel_1k1gx_64", E = {
  root: rl,
  tabList: dl,
  underline: fl,
  pills: ml,
  tab: ul,
  active: hl,
  disabled: pl,
  panel: gl
};
function aa({
  items: o,
  value: t,
  defaultValue: s,
  onChange: n,
  variant: l = "underline",
  className: i
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
  return /* @__PURE__ */ f("div", { className: [E.root, i].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [E.tabList, E[l]].filter(Boolean).join(" "),
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
const zl = "_root_1rcwz_1", xl = "_item_1rcwz_9", bl = "_heading_1rcwz_13", yl = "_trigger_1rcwz_17", Sl = "_disabled_1rcwz_34", vl = "_title_1rcwz_48", Ol = "_chevron_1rcwz_52", kl = "_open_1rcwz_59", $l = "_content_1rcwz_63", B = {
  root: zl,
  item: xl,
  heading: bl,
  trigger: yl,
  disabled: Sl,
  title: vl,
  chevron: Ol,
  open: kl,
  content: $l
};
function ca({
  items: o,
  multiple: t = !1,
  value: s,
  defaultValue: n,
  onChange: l,
  className: i
}) {
  const c = T(), [r, _] = A(n ?? []), u = s ?? r, h = (m) => {
    const z = u.includes(m) ? u.filter((x) => x !== m) : t ? [...u, m] : [m];
    _(z), l?.(z);
  };
  return /* @__PURE__ */ e("div", { className: [B.root, i].filter(Boolean).join(" "), children: o.map((m) => {
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
const wl = "_textarea_jj8z9_1", Ml = "_xs_jj8z9_25", Nl = "_sm_jj8z9_30", jl = "_md_jj8z9_35", Bl = "_lg_jj8z9_40", Ll = "_xl_jj8z9_45", oe = {
  textarea: wl,
  xs: Ml,
  sm: Nl,
  md: jl,
  lg: Bl,
  xl: Ll,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, _a = $(function({ size: t = "md", resize: s = "none", className: n, ...l }, i) {
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
      ...l
    }
  );
});
export {
  ca as Accordion,
  Yl as Alert,
  la as Avatar,
  Tl as Badge,
  na as Body,
  El as Button,
  Il as Card,
  Xl as Checkbox,
  ta as Column,
  Gl as Dialog,
  Pl as EmptyState,
  Rl as Field,
  ki as Footer,
  Mi as Header,
  Dl as Icon,
  Kl as Input,
  Wl as Label,
  sa as Layout,
  oa as Progress,
  ea as Row,
  Fl as Select,
  Ii as Sidebar,
  Zl as Skeleton,
  Vl as Stat,
  Yt as Switch,
  Hl as Table,
  aa as Tabs,
  _a as Textarea,
  ia as ThemeSwitcher,
  Ql as ToastProvider,
  Ul as Tooltip,
  Al as iconNames,
  Jl as useToast
};
