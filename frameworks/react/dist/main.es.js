import { jsx as e, jsxs as r, Fragment as h } from "react/jsx-runtime";
import { forwardRef as y, useId as N, isValidElement as J, cloneElement as ee, useRef as W, useState as L, useEffect as P, useCallback as Q, useMemo as G, useContext as se, createContext as ne, Children as oe } from "react";
const le = "_button_1pkcx_1", ae = "_primary_1pkcx_29", ce = "_secondary_1pkcx_38", ie = "_ghost_1pkcx_48", _e = "_danger_1pkcx_57", re = "_xs_1pkcx_67", de = "_sm_1pkcx_73", fe = "_md_1pkcx_79", me = "_lg_1pkcx_85", pe = "_xl_1pkcx_91", he = "_iconOnly_1pkcx_97", ue = "_fullWidth_1pkcx_123", q = {
  button: le,
  primary: ae,
  secondary: ce,
  ghost: ie,
  danger: _e,
  xs: re,
  sm: de,
  md: fe,
  lg: me,
  xl: pe,
  iconOnly: he,
  fullWidth: ue
}, oa = y(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: o = !1,
  iconOnly: a = !1,
  className: l,
  type: c = "button",
  ...i
}, _) {
  const m = [
    q.button,
    q[t],
    q[s],
    o ? q.fullWidth : null,
    a ? q.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: _, type: c, className: m, ...i });
}), ge = "_card_lt977_1", ze = "_elevated_lt977_8", xe = "_outlined_lt977_13", ye = "_interactive_lt977_17", Se = "_header_lt977_35", ve = "_body_lt977_42", be = "_footer_lt977_52", I = {
  card: ge,
  elevated: ze,
  outlined: xe,
  interactive: ye,
  header: Se,
  body: ve,
  footer: be
}, la = y(function({ variant: t = "elevated", header: s, footer: o, className: a, children: l, onKeyDown: c, ...i }, _) {
  const m = t === "interactive";
  return /* @__PURE__ */ r(
    "div",
    {
      ref: _,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (d) => {
        c?.(d), !(!m || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
      },
      className: [I.card, I[t], a].filter(Boolean).join(" "),
      ...i,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: I.header, children: s }),
        /* @__PURE__ */ e("div", { className: I.body, children: l }),
        o != null && /* @__PURE__ */ e("div", { className: I.footer, children: o })
      ]
    }
  );
}), ke = "_badge_s3h6c_1", Oe = "_xs_s3h6c_14", $e = "_sm_s3h6c_19", we = "_md_s3h6c_24", je = "_lg_s3h6c_29", Me = "_xl_s3h6c_34", Ne = "_neutral_s3h6c_40", Be = "_primary_s3h6c_45", Le = "_success_s3h6c_50", qe = "_warning_s3h6c_55", Ie = "_danger_s3h6c_60", Ce = "_solid_s3h6c_66", Ee = "_outline_s3h6c_91", V = {
  badge: ke,
  xs: Oe,
  sm: $e,
  md: we,
  lg: je,
  xl: Me,
  neutral: Ne,
  primary: Be,
  success: Le,
  warning: qe,
  danger: Ie,
  solid: Ce,
  outline: Ee
}, aa = y(function({ tone: t = "neutral", variant: s = "soft", size: o = "md", className: a, children: l, ...c }, i) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: i,
      className: [V.badge, V[o], V[t], V[s], a].filter(Boolean).join(" "),
      ...c,
      children: l
    }
  );
}), Te = "_xs_1uch7_2", He = "_sm_1uch7_7", Ve = "_md_1uch7_1", De = "_lg_1uch7_17", Ae = "_xl_1uch7_22", Re = {
  xs: Te,
  sm: He,
  md: Ve,
  lg: De,
  xl: Ae
}, ca = [
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
], We = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ r(h, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, ia = y(function({ name: t, size: s = "md", strokeWidth: o = 2, className: a, ...l }, c) {
  const i = typeof s == "string";
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: c,
      className: [i ? Re[s] : null, a].filter(Boolean).join(" "),
      width: i ? void 0 : s,
      height: i ? void 0 : s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: We[t]
    }
  );
}), Pe = "_stat_1ks65_1", Ke = "_label_1ks65_8", Fe = "_row_1ks65_16", Xe = "_value_1ks65_22", Ue = "_delta_1ks65_28", Ge = "_success_1ks65_33", Je = "_danger_1ks65_37", Qe = "_neutral_1ks65_41", Ye = "_hint_1ks65_45", $ = {
  stat: Pe,
  label: Ke,
  row: Fe,
  value: Xe,
  delta: Ue,
  success: Ge,
  danger: Je,
  neutral: Qe,
  hint: Ye
}, _a = y(function({ label: t, value: s, delta: o, deltaTone: a = "neutral", hint: l, className: c, ...i }, _) {
  return /* @__PURE__ */ r("div", { ref: _, className: [$.stat, c].filter(Boolean).join(" "), ...i, children: [
    /* @__PURE__ */ e("div", { className: $.label, children: t }),
    /* @__PURE__ */ r("div", { className: $.row, children: [
      /* @__PURE__ */ e("div", { className: $.value, children: s }),
      o != null && /* @__PURE__ */ e("div", { className: [$.delta, $[a]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: $.hint, children: l })
  ] });
}), Ze = "_wrap_1x8tx_1", et = "_table_1x8tx_8", tt = "_start_1x8tx_40", st = "_center_1x8tx_44", nt = "_end_1x8tx_48", ot = "_empty_1x8tx_52", C = {
  wrap: Ze,
  table: et,
  start: tt,
  center: st,
  end: nt,
  empty: ot
};
function ra({ columns: n, rows: t, rowKey: s, empty: o, className: a }) {
  return /* @__PURE__ */ r("div", { className: [C.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ r("table", { className: C.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: l.align != null ? C[l.align] : void 0,
          scope: "col",
          children: l.header
        },
        l.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: n.map((c) => /* @__PURE__ */ e(
        "td",
        {
          className: c.align != null ? C[c.align] : void 0,
          children: c.render != null ? c.render(l) : l[c.key]
        },
        c.key
      )) }, s(l))) })
    ] }),
    t.length === 0 && o != null && /* @__PURE__ */ e("div", { className: C.empty, children: o })
  ] });
}
const lt = "_emptyState_1o7fc_1", at = "_icon_1o7fc_13", ct = "_title_1o7fc_18", it = "_description_1o7fc_24", _t = "_action_1o7fc_30", E = {
  emptyState: lt,
  icon: at,
  title: ct,
  description: it,
  action: _t
};
function da({ icon: n, title: t, description: s, action: o, className: a }) {
  return /* @__PURE__ */ r("div", { className: [E.emptyState, a].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ e("div", { className: E.icon, children: n }),
    /* @__PURE__ */ e("div", { className: E.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: E.description, children: s }),
    o != null && /* @__PURE__ */ e("div", { className: E.action, children: o })
  ] });
}
const rt = "_field_w9m4o_1", dt = "_label_w9m4o_8", ft = "_required_w9m4o_14", mt = "_hint_w9m4o_19", pt = "_error_w9m4o_24", T = {
  field: rt,
  label: dt,
  required: ft,
  hint: mt,
  error: pt
};
function fa({ label: n, htmlFor: t, required: s, hint: o, error: a, children: l, className: c }) {
  const i = N(), _ = N(), m = a != null ? i : o != null ? _ : null, d = J(l) && m != null ? ee(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        m
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": a != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ r("div", { className: [T.field, c].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ r("label", { className: T.label, htmlFor: t, children: [
      n,
      s === !0 && /* @__PURE__ */ e("span", { className: T.required, "aria-hidden": "true", children: "*" })
    ] }),
    d,
    a != null ? /* @__PURE__ */ e("div", { id: i, className: T.error, role: "alert", children: a }) : o != null ? /* @__PURE__ */ e("div", { id: _, className: T.hint, children: o }) : null
  ] });
}
const ht = "_label_rv97n_1", ut = {
  label: ht
}, ma = y(
  function({ className: t, children: s, ...o }, a) {
    return /* @__PURE__ */ e("label", { ref: a, className: [ut.label, t].filter(Boolean).join(" "), ...o, children: s });
  }
), gt = "_input_109wo_1", zt = "_invalid_109wo_31", xt = "_xs_109wo_37", yt = "_sm_109wo_43", St = "_md_109wo_49", vt = "_lg_109wo_55", bt = "_xl_109wo_61", K = {
  input: gt,
  invalid: zt,
  xs: xt,
  sm: yt,
  md: St,
  lg: vt,
  xl: bt
}, pa = y(function({ size: t = "md", invalid: s = !1, className: o, ...a }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [K.input, K[t], s ? K.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), kt = "_select_6ltg7_1", Ot = "_invalid_6ltg7_33", $t = "_xs_6ltg7_39", wt = "_sm_6ltg7_45", jt = "_md_6ltg7_51", Mt = "_lg_6ltg7_57", Nt = "_xl_6ltg7_63", F = {
  select: kt,
  invalid: Ot,
  xs: $t,
  sm: wt,
  md: jt,
  lg: Mt,
  xl: Nt
}, ha = y(function({ size: t = "md", invalid: s = !1, options: o, children: a, className: l, ...c }, i) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: i,
      className: [F.select, F[t], s ? F.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...c,
      children: o != null ? o.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : a
    }
  );
}), Bt = "_checkbox_sx3bj_1", Lt = {
  checkbox: Bt
}, ua = y(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [Lt.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), qt = {
  switch: "_switch_1lrk0_1"
}, It = y(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [qt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), Ct = "_trigger_4qzmh_1", Et = "_tooltip_4qzmh_7", Tt = "_top_4qzmh_34", Ht = "_right_4qzmh_40", Vt = "_bottom_4qzmh_46", Dt = "_left_4qzmh_52", At = "_arrow_4qzmh_58", D = {
  trigger: Ct,
  tooltip: Et,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: Tt,
  right: Ht,
  bottom: Vt,
  left: Dt,
  arrow: At
};
function ga({
  content: n,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: a
}) {
  const l = N(), c = W(null), [i, _] = L(!1), m = () => {
    c.current = window.setTimeout(() => _(!0), o);
  }, d = () => {
    c.current !== null && (window.clearTimeout(c.current), c.current = null), _(!1);
  };
  P(() => {
    if (!i) return;
    const u = (g) => {
      g.key === "Escape" && d();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [i]);
  const f = J(t) ? ee(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        i ? l : null
      ].filter((u) => typeof u == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ r(
    "span",
    {
      className: [D.trigger, a].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: d,
      onFocus: m,
      onBlur: d,
      children: [
        f,
        i && /* @__PURE__ */ r(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [D.tooltip, D[s]].filter(Boolean).join(" "),
            children: [
              n,
              /* @__PURE__ */ e("span", { className: D.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const Rt = "_dialog_gp2l5_1", Wt = "_sm_gp2l5_30", Pt = "_md_gp2l5_34", Kt = "_lg_gp2l5_38", Ft = "_header_gp2l5_42", Xt = "_title_gp2l5_51", Ut = "_description_gp2l5_58", Gt = "_close_gp2l5_65", Jt = "_body_gp2l5_84", Qt = "_footer_gp2l5_90", k = {
  dialog: Rt,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: Wt,
  md: Pt,
  lg: Kt,
  header: Ft,
  title: Xt,
  description: Ut,
  close: Gt,
  body: Jt,
  footer: Qt
};
function za({
  open: n,
  onClose: t,
  title: s,
  description: o,
  children: a,
  footer: l,
  size: c = "md",
  className: i
}) {
  const _ = W(null), m = N(), d = N();
  return P(() => {
    const f = _.current;
    f && (n && !f.open ? f.showModal() : !n && f.open && f.close());
  }, [n]), /* @__PURE__ */ r(
    "dialog",
    {
      ref: _,
      className: [k.dialog, k[c], i].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? m : void 0,
      "aria-describedby": o ? d : void 0,
      children: [
        s && /* @__PURE__ */ r("header", { className: k.header, children: [
          /* @__PURE__ */ r("div", { children: [
            /* @__PURE__ */ e("h2", { id: m, className: k.title, children: s }),
            o && /* @__PURE__ */ e("p", { id: d, className: k.description, children: o })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: k.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { className: k.body, children: a }),
        l && /* @__PURE__ */ e("footer", { className: k.footer, children: l })
      ]
    }
  );
}
const Yt = "_viewport_wjgk1_1", Zt = "_topLeft_wjgk1_13", es = "_topRight_wjgk1_20", ts = "_bottomLeft_wjgk1_25", ss = "_toast_wjgk1_30", ns = "_info_wjgk1_55", os = "_success_wjgk1_60", ls = "_warning_wjgk1_65", as = "_danger_wjgk1_70", cs = "_content_wjgk1_75", is = "_title_wjgk1_80", _s = "_description_wjgk1_103", rs = "_dismiss_wjgk1_110", O = {
  viewport: Yt,
  topLeft: Zt,
  topRight: es,
  bottomLeft: ts,
  toast: ss,
  "se-toast-in": "_se-toast-in_wjgk1_1",
  info: ns,
  success: os,
  warning: ls,
  danger: as,
  content: cs,
  title: is,
  description: _s,
  dismiss: rs
}, te = ne(null);
function xa() {
  const n = se(te);
  if (!n)
    throw new Error("useToast must be used within a <ToastProvider>");
  return n;
}
const ds = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function ya({
  children: n,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  className: o
}) {
  const [a, l] = L([]), c = W(0), i = Q((d) => {
    l((f) => f.filter((u) => u.id !== d));
  }, []), _ = Q(
    (d) => {
      const f = ++c.current, u = {
        id: f,
        title: d.title ?? "",
        description: d.description,
        tone: d.tone ?? "info",
        durationMs: d.durationMs ?? t
      };
      l((g) => [...g, u]), u.durationMs > 0 && window.setTimeout(() => i(f), u.durationMs);
    },
    [t, i]
  ), m = G(() => ({ toast: _ }), [_]);
  return /* @__PURE__ */ r(te.Provider, { value: m, children: [
    n,
    /* @__PURE__ */ e(
      "div",
      {
        className: [
          O.viewport,
          O[ds[s]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        children: a.map((d) => /* @__PURE__ */ r(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            className: [O.toast, O[d.tone]].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ r("div", { className: O.content, children: [
                /* @__PURE__ */ e("div", { className: O.title, children: d.title }),
                d.description && /* @__PURE__ */ e("div", { className: O.description, children: d.description })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: O.dismiss,
                  onClick: () => i(d.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              )
            ]
          },
          d.id
        ))
      }
    )
  ] });
}
const fs = "_alert_5hvdc_1", ms = "_info_5hvdc_14", ps = "_success_5hvdc_20", hs = "_warning_5hvdc_26", us = "_danger_5hvdc_32", gs = "_icon_5hvdc_38", zs = "_content_5hvdc_44", xs = "_title_5hvdc_49", ys = "_body_5hvdc_55", Ss = "_dismiss_5hvdc_60", w = {
  alert: fs,
  info: ms,
  success: ps,
  warning: hs,
  danger: us,
  icon: gs,
  content: zs,
  title: xs,
  body: ys,
  dismiss: Ss
};
function Sa({
  tone: n = "info",
  title: t,
  icon: s,
  children: o,
  dismissible: a = !1,
  className: l
}) {
  const [c, i] = L(!1);
  return c ? null : /* @__PURE__ */ r(
    "div",
    {
      role: "alert",
      className: [w.alert, w[n], l].filter(Boolean).join(" "),
      children: [
        s != null && /* @__PURE__ */ e("span", { className: w.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ r("div", { className: w.content, children: [
          t && /* @__PURE__ */ e("div", { className: w.title, children: t }),
          o && /* @__PURE__ */ e("div", { className: w.body, children: o })
        ] }),
        a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: w.dismiss,
            onClick: () => i(!0),
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const vs = "_skeleton_35ckz_1", bs = "_text_35ckz_35", ks = "_circle_35ckz_40", Os = "_rect_35ckz_44", Y = {
  skeleton: vs,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: bs,
  circle: ks,
  rect: Os
};
function va({
  variant: n = "text",
  width: t,
  height: s,
  className: o
}) {
  const a = {};
  return t !== void 0 && (a.width = typeof t == "number" ? `${t}px` : t), s !== void 0 && (a.height = typeof s == "number" ? `${s}px` : s), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [Y.skeleton, Y[n], o].filter(Boolean).join(" "),
      style: a
    }
  );
}
const $s = "_row_15fbq_1", ws = "_start_15fbq_7", js = "_center_15fbq_11", Ms = "_end_15fbq_15", Ns = "_stretch_15fbq_19", Bs = "_baseline_15fbq_23", Ls = "_noWrap_15fbq_51", A = {
  row: $s,
  start: ws,
  center: js,
  end: Ms,
  stretch: Ns,
  baseline: Bs,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: Ls
};
function ba({
  gap: n,
  align: t = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: a,
  style: l,
  ...c
}) {
  const i = {
    ...n != null ? { gap: typeof n == "number" ? `${n}px` : n } : {},
    ...l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        A.row,
        A[t],
        A[`justify-${s}`],
        o ? null : A.noWrap,
        a
      ].filter(Boolean).join(" "),
      style: i,
      ...c
    }
  );
}
const qs = "_column_1pa86_1", Is = "_Size1_1pa86_6", Cs = "_Size2_1pa86_7", Es = "_Size3_1pa86_8", Ts = "_Size4_1pa86_9", Hs = "_Size5_1pa86_10", Vs = "_Size6_1pa86_11", Ds = "_Size7_1pa86_12", As = "_Size8_1pa86_13", Rs = "_Size9_1pa86_14", Ws = "_Size10_1pa86_15", Ps = "_Size11_1pa86_16", Ks = "_Size12_1pa86_17", Fs = "_Offset1_1pa86_18", Xs = "_Offset2_1pa86_19", Us = "_Offset3_1pa86_20", Gs = "_Offset4_1pa86_21", Js = "_Offset5_1pa86_22", Qs = "_Offset6_1pa86_23", Ys = "_Offset7_1pa86_24", Zs = "_Offset8_1pa86_25", en = "_Offset9_1pa86_26", tn = "_Offset10_1pa86_27", sn = "_Offset11_1pa86_28", nn = "_smSize1_1pa86_31", on = "_smSize2_1pa86_32", ln = "_smSize3_1pa86_33", an = "_smSize4_1pa86_34", cn = "_smSize5_1pa86_35", _n = "_smSize6_1pa86_36", rn = "_smSize7_1pa86_37", dn = "_smSize8_1pa86_38", fn = "_smSize9_1pa86_39", mn = "_smSize10_1pa86_40", pn = "_smSize11_1pa86_41", hn = "_smSize12_1pa86_42", un = "_smOffset1_1pa86_43", gn = "_smOffset2_1pa86_44", zn = "_smOffset3_1pa86_45", xn = "_smOffset4_1pa86_46", yn = "_smOffset5_1pa86_47", Sn = "_smOffset6_1pa86_48", vn = "_smOffset7_1pa86_49", bn = "_smOffset8_1pa86_50", kn = "_smOffset9_1pa86_51", On = "_smOffset10_1pa86_52", $n = "_smOffset11_1pa86_53", wn = "_mdSize1_1pa86_57", jn = "_mdSize2_1pa86_58", Mn = "_mdSize3_1pa86_59", Nn = "_mdSize4_1pa86_60", Bn = "_mdSize5_1pa86_61", Ln = "_mdSize6_1pa86_62", qn = "_mdSize7_1pa86_63", In = "_mdSize8_1pa86_64", Cn = "_mdSize9_1pa86_65", En = "_mdSize10_1pa86_66", Tn = "_mdSize11_1pa86_67", Hn = "_mdSize12_1pa86_68", Vn = "_mdOffset1_1pa86_69", Dn = "_mdOffset2_1pa86_70", An = "_mdOffset3_1pa86_71", Rn = "_mdOffset4_1pa86_72", Wn = "_mdOffset5_1pa86_73", Pn = "_mdOffset6_1pa86_74", Kn = "_mdOffset7_1pa86_75", Fn = "_mdOffset8_1pa86_76", Xn = "_mdOffset9_1pa86_77", Un = "_mdOffset10_1pa86_78", Gn = "_mdOffset11_1pa86_79", Jn = "_lgSize1_1pa86_83", Qn = "_lgSize2_1pa86_84", Yn = "_lgSize3_1pa86_85", Zn = "_lgSize4_1pa86_86", eo = "_lgSize5_1pa86_87", to = "_lgSize6_1pa86_88", so = "_lgSize7_1pa86_89", no = "_lgSize8_1pa86_90", oo = "_lgSize9_1pa86_91", lo = "_lgSize10_1pa86_92", ao = "_lgSize11_1pa86_93", co = "_lgSize12_1pa86_94", io = "_lgOffset1_1pa86_95", _o = "_lgOffset2_1pa86_96", ro = "_lgOffset3_1pa86_97", fo = "_lgOffset4_1pa86_98", mo = "_lgOffset5_1pa86_99", po = "_lgOffset6_1pa86_100", ho = "_lgOffset7_1pa86_101", uo = "_lgOffset8_1pa86_102", go = "_lgOffset9_1pa86_103", zo = "_lgOffset10_1pa86_104", xo = "_lgOffset11_1pa86_105", yo = "_xlSize1_1pa86_109", So = "_xlSize2_1pa86_110", vo = "_xlSize3_1pa86_111", bo = "_xlSize4_1pa86_112", ko = "_xlSize5_1pa86_113", Oo = "_xlSize6_1pa86_114", $o = "_xlSize7_1pa86_115", wo = "_xlSize8_1pa86_116", jo = "_xlSize9_1pa86_117", Mo = "_xlSize10_1pa86_118", No = "_xlSize11_1pa86_119", Bo = "_xlSize12_1pa86_120", Lo = "_xlOffset1_1pa86_121", qo = "_xlOffset2_1pa86_122", Io = "_xlOffset3_1pa86_123", Co = "_xlOffset4_1pa86_124", Eo = "_xlOffset5_1pa86_125", To = "_xlOffset6_1pa86_126", Ho = "_xlOffset7_1pa86_127", Vo = "_xlOffset8_1pa86_128", Do = "_xlOffset9_1pa86_129", Ao = "_xlOffset10_1pa86_130", Ro = "_xlOffset11_1pa86_131", X = {
  column: qs,
  Size1: Is,
  Size2: Cs,
  Size3: Es,
  Size4: Ts,
  Size5: Hs,
  Size6: Vs,
  Size7: Ds,
  Size8: As,
  Size9: Rs,
  Size10: Ws,
  Size11: Ps,
  Size12: Ks,
  Offset1: Fs,
  Offset2: Xs,
  Offset3: Us,
  Offset4: Gs,
  Offset5: Js,
  Offset6: Qs,
  Offset7: Ys,
  Offset8: Zs,
  Offset9: en,
  Offset10: tn,
  Offset11: sn,
  smSize1: nn,
  smSize2: on,
  smSize3: ln,
  smSize4: an,
  smSize5: cn,
  smSize6: _n,
  smSize7: rn,
  smSize8: dn,
  smSize9: fn,
  smSize10: mn,
  smSize11: pn,
  smSize12: hn,
  smOffset1: un,
  smOffset2: gn,
  smOffset3: zn,
  smOffset4: xn,
  smOffset5: yn,
  smOffset6: Sn,
  smOffset7: vn,
  smOffset8: bn,
  smOffset9: kn,
  smOffset10: On,
  smOffset11: $n,
  mdSize1: wn,
  mdSize2: jn,
  mdSize3: Mn,
  mdSize4: Nn,
  mdSize5: Bn,
  mdSize6: Ln,
  mdSize7: qn,
  mdSize8: In,
  mdSize9: Cn,
  mdSize10: En,
  mdSize11: Tn,
  mdSize12: Hn,
  mdOffset1: Vn,
  mdOffset2: Dn,
  mdOffset3: An,
  mdOffset4: Rn,
  mdOffset5: Wn,
  mdOffset6: Pn,
  mdOffset7: Kn,
  mdOffset8: Fn,
  mdOffset9: Xn,
  mdOffset10: Un,
  mdOffset11: Gn,
  lgSize1: Jn,
  lgSize2: Qn,
  lgSize3: Yn,
  lgSize4: Zn,
  lgSize5: eo,
  lgSize6: to,
  lgSize7: so,
  lgSize8: no,
  lgSize9: oo,
  lgSize10: lo,
  lgSize11: ao,
  lgSize12: co,
  lgOffset1: io,
  lgOffset2: _o,
  lgOffset3: ro,
  lgOffset4: fo,
  lgOffset5: mo,
  lgOffset6: po,
  lgOffset7: ho,
  lgOffset8: uo,
  lgOffset9: go,
  lgOffset10: zo,
  lgOffset11: xo,
  xlSize1: yo,
  xlSize2: So,
  xlSize3: vo,
  xlSize4: bo,
  xlSize5: ko,
  xlSize6: Oo,
  xlSize7: $o,
  xlSize8: wo,
  xlSize9: jo,
  xlSize10: Mo,
  xlSize11: No,
  xlSize12: Bo,
  xlOffset1: Lo,
  xlOffset2: qo,
  xlOffset3: Io,
  xlOffset4: Co,
  xlOffset5: Eo,
  xlOffset6: To,
  xlOffset7: Ho,
  xlOffset8: Vo,
  xlOffset9: Do,
  xlOffset10: Ao,
  xlOffset11: Ro
}, Wo = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function ka({ className: n, ...t }) {
  const s = [X.column];
  for (const [p, z, H] of Wo) {
    const S = t[z], b = t[H];
    S != null && s.push(X[`${p}Size${S}`]), b != null && b > 0 && s.push(X[`${p}Offset${b}`]);
  }
  const { size: o, offset: a, sizeSm: l, offsetSm: c, sizeMd: i, offsetMd: _, sizeLg: m, offsetLg: d, sizeXl: f, offsetXl: u, ...g } = t;
  return /* @__PURE__ */ e("div", { className: [...s, n].filter(Boolean).join(" "), ...g });
}
const Po = "_layout_1pcye_1", Ko = "_row_1pcye_7", Z = {
  layout: Po,
  row: Ko
}, Fo = "_footer_14whp_1", Xo = {
  footer: Fo
};
function Uo({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [Xo.footer, n].filter(Boolean).join(" "), ...s, children: t });
}
const Go = "_header_2mimk_1", Jo = {
  header: Go
};
function Qo({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [Jo.header, n].filter(Boolean).join(" "), ...s, children: t });
}
const Yo = "_sidebar_1ktmd_1", Zo = "_left_1ktmd_9", el = "_right_1ktmd_13", tl = "_collapsed_1ktmd_17", sl = "_responsive_1ktmd_25", nl = "_overlay_1ktmd_33", ol = "_mask_1ktmd_53", j = {
  sidebar: Yo,
  left: Zo,
  right: el,
  collapsed: tl,
  responsive: sl,
  overlay: nl,
  mask: ol
};
function ll({
  position: n = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  onClose: a,
  className: l,
  children: c,
  ...i
}) {
  return P(() => {
    if (!o || !t || a == null) return;
    const _ = (m) => {
      m.key === "Escape" && a();
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o, t, a]), /* @__PURE__ */ r(h, { children: [
    o && t ? /* @__PURE__ */ e("div", { className: `${j.mask} se-layout-mask`, "aria-hidden": "true", onClick: a }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          j.sidebar,
          n === "right" ? j.right : j.left,
          t ? null : j.collapsed,
          s ? j.responsive : null,
          o ? [j.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...i,
        children: c
      }
    )
  ] });
}
function Oa({ className: n, children: t, ...s }) {
  const o = [], a = [], l = [], c = [], i = [];
  return oe.forEach(t, (_) => {
    if (!J(_)) {
      l.push(_);
      return;
    }
    _.type === Qo ? o.push(_) : _.type === Uo ? a.push(_) : _.type === ll ? (_.props.position === "right" ? i : c).push(_) : l.push(_);
  }), /* @__PURE__ */ r("div", { className: [Z.layout, n].filter(Boolean).join(" "), ...s, children: [
    o,
    /* @__PURE__ */ r("div", { className: Z.row, children: [
      c,
      l,
      i
    ] }),
    a
  ] });
}
const al = "_body_1tpk6_1", cl = {
  body: al
};
function $a({ as: n = "main", className: t, children: s, ...o }) {
  return /* @__PURE__ */ e(n, { className: [cl.body, t].filter(Boolean).join(" "), ...o, children: s });
}
const il = "_track_1mkoz_1", _l = "_bar_1mkoz_31", rl = "_primary_1mkoz_39", dl = "_success_1mkoz_43", fl = "_warning_1mkoz_47", ml = "_danger_1mkoz_51", pl = "_indeterminate_1mkoz_55", hl = "_circular_1mkoz_69", ul = "_fill_1mkoz_109", x = {
  track: il,
  "linear-xs": "_linear-xs_1mkoz_11",
  "linear-sm": "_linear-sm_1mkoz_15",
  "linear-md": "_linear-md_1mkoz_19",
  "linear-lg": "_linear-lg_1mkoz_23",
  "linear-xl": "_linear-xl_1mkoz_27",
  bar: _l,
  primary: rl,
  success: dl,
  warning: fl,
  danger: ml,
  indeterminate: pl,
  "se-progress-slide": "_se-progress-slide_1mkoz_1",
  circular: hl,
  "circular-xs": "_circular-xs_1mkoz_75",
  "circular-sm": "_circular-sm_1mkoz_80",
  "circular-md": "_circular-md_1mkoz_85",
  "circular-lg": "_circular-lg_1mkoz_90",
  "circular-xl": "_circular-xl_1mkoz_95",
  fill: ul,
  "se-progress-spin": "_se-progress-spin_1mkoz_1"
};
function wa({
  value: n = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: o = !1,
  variant: a = "linear",
  size: l = "md",
  className: c,
  ...i
}) {
  const _ = t > 0 ? Math.min(t, Math.max(0, n)) : 0, m = t > 0 ? _ / t * 100 : 0;
  if (a === "circular") {
    const d = typeof l == "string", f = 2, u = 10.5, g = 2 * Math.PI * u, p = g * (o ? 0.75 : 1), z = o ? 0 : g * (1 - m / 100);
    return /* @__PURE__ */ r(
      "svg",
      {
        width: d ? void 0 : l,
        height: d ? void 0 : l,
        viewBox: "0 0 24 24",
        role: "progressbar",
        "aria-label": i["aria-label"],
        "aria-labelledby": i["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(_),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: i.id,
        style: i.style,
        className: [
          x.circular,
          x[s],
          d ? x[`circular-${l}`] : null,
          o ? x.indeterminate : null,
          c
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("circle", { className: x.track, cx: 12, cy: 12, r: u, strokeWidth: f }),
          /* @__PURE__ */ e(
            "circle",
            {
              className: x.fill,
              cx: 12,
              cy: 12,
              r: u,
              strokeWidth: f,
              strokeDasharray: `${p} ${g}`,
              strokeDashoffset: z
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
      "aria-valuenow": o ? void 0 : Math.round(_),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        x.track,
        x[s],
        typeof l == "string" ? x[`linear-${l}`] : null,
        o ? x.indeterminate : null,
        c
      ].filter(Boolean).join(" "),
      ...i,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: x.bar,
          style: o ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const gl = "_wrapper_t239v_1", zl = {
  wrapper: gl
};
function ja({
  defaultTheme: n = "light",
  onChange: t,
  label: s = "Dark mode",
  className: o
}) {
  const [a, l] = L(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : n === "dark");
  P(() => {
    document.documentElement.dataset.theme = a ? "dark" : "light";
  }, []);
  const c = (i) => {
    const _ = i.target.checked;
    l(_), document.documentElement.dataset.theme = _ ? "dark" : "light", t?.(_ ? "dark" : "light");
  };
  return /* @__PURE__ */ r("label", { className: [zl.wrapper, o].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(It, { checked: a, onChange: c })
  ] });
}
const xl = "_avatar_17s76_1", yl = "_xs_17s76_12", Sl = "_sm_17s76_18", vl = "_md_17s76_24", bl = "_lg_17s76_30", kl = "_xl_17s76_36", Ol = "_initials_17s76_42", $l = "_image_17s76_57", wl = "_status_17s76_64", jl = "_online_17s76_84", Ml = "_offline_17s76_88", Nl = "_away_17s76_92", B = {
  avatar: xl,
  xs: yl,
  sm: Sl,
  md: vl,
  lg: bl,
  xl: kl,
  initials: Ol,
  image: $l,
  status: wl,
  online: jl,
  offline: Ml,
  away: Nl
}, R = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function Bl(n) {
  return n.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function Ll(n) {
  let t = 0;
  for (let s = 0; s < n.length; s += 1)
    t = t * 31 + n.charCodeAt(s) >>> 0;
  return R[t % R.length] ?? R[0];
}
function Ma({
  name: n,
  src: t,
  alt: s,
  size: o = "md",
  status: a,
  className: l
}) {
  const c = G(() => n ? Bl(n) : "?", [n]), i = G(() => n ? Ll(n) : R[0], [n]), _ = t ? /* @__PURE__ */ e("img", { className: B.image, src: t, alt: s ?? n ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: B.initials, style: { background: i }, children: c });
  return /* @__PURE__ */ r(
    "span",
    {
      className: [
        B.avatar,
        B[o],
        a ? B[a] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? n ?? "avatar",
      children: [
        _,
        a && /* @__PURE__ */ e("span", { className: B.status, "aria-hidden": "true" })
      ]
    }
  );
}
const ql = "_root_1k1gx_1", Il = "_tabList_1k1gx_6", Cl = "_underline_1k1gx_12", El = "_pills_1k1gx_16", Tl = "_tab_1k1gx_6", Hl = "_active_1k1gx_36", Vl = "_disabled_1k1gx_50", Dl = "_panel_1k1gx_64", M = {
  root: ql,
  tabList: Il,
  underline: Cl,
  pills: El,
  tab: Tl,
  active: Hl,
  disabled: Vl,
  panel: Dl
};
function Na({
  items: n,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: a = "underline",
  className: l
}) {
  const c = N(), i = W(null), [_, m] = L(s ?? n[0]?.key ?? ""), d = t ?? _, f = (p) => {
    m(p), o?.(p);
  }, u = (p) => {
    const z = n.filter((b) => !b.disabled), H = z.findIndex((b) => b.key === d);
    let S = -1;
    p.key === "ArrowRight" ? S = (H + 1) % z.length : p.key === "ArrowLeft" ? S = (H - 1 + z.length) % z.length : p.key === "Home" ? S = 0 : p.key === "End" && (S = z.length - 1), S >= 0 && (p.preventDefault(), i.current?.querySelector(
      `[data-tab-key="${CSS.escape(z[S]?.key ?? "")}"]`
    )?.focus(), f(z[S]?.key ?? ""));
  }, g = n.find((p) => p.key === d);
  return /* @__PURE__ */ r("div", { className: [M.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        role: "tablist",
        className: [M.tabList, M[a]].filter(Boolean).join(" "),
        onKeyDown: u,
        children: n.map((p) => {
          const z = p.key === d;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${c}-tab-${p.key}`,
              "data-tab-key": p.key,
              "aria-selected": z,
              "aria-controls": `${c}-panel-${p.key}`,
              tabIndex: z ? 0 : -1,
              disabled: p.disabled,
              className: [
                M.tab,
                z ? M.active : null,
                p.disabled ? M.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => f(p.key),
              children: p.label
            },
            p.key
          );
        })
      }
    ),
    g && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${c}-panel-${g.key}`,
        "aria-labelledby": `${c}-tab-${g.key}`,
        className: M.panel,
        children: g.content
      }
    )
  ] });
}
const Al = "_root_1rcwz_1", Rl = "_item_1rcwz_9", Wl = "_heading_1rcwz_13", Pl = "_trigger_1rcwz_17", Kl = "_disabled_1rcwz_34", Fl = "_title_1rcwz_48", Xl = "_chevron_1rcwz_52", Ul = "_open_1rcwz_59", Gl = "_content_1rcwz_63", v = {
  root: Al,
  item: Rl,
  heading: Wl,
  trigger: Pl,
  disabled: Kl,
  title: Fl,
  chevron: Xl,
  open: Ul,
  content: Gl
};
function Ba({
  items: n,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: a,
  className: l
}) {
  const c = N(), [i, _] = L(o ?? []), m = s ?? i, d = (f) => {
    const u = m.includes(f) ? m.filter((g) => g !== f) : t ? [...m, f] : [f];
    _(u), a?.(u);
  };
  return /* @__PURE__ */ e("div", { className: [v.root, l].filter(Boolean).join(" "), children: n.map((f) => {
    const u = m.includes(f.key), g = `${c}-panel-${f.key}`, p = `${c}-trigger-${f.key}`;
    return /* @__PURE__ */ r("div", { className: v.item, children: [
      /* @__PURE__ */ e("h3", { className: v.heading, children: /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          id: p,
          "aria-expanded": u,
          "aria-controls": g,
          disabled: f.disabled,
          className: [
            v.trigger,
            f.disabled ? v.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => d(f.key),
          children: [
            /* @__PURE__ */ e("span", { className: v.title, children: f.title }),
            /* @__PURE__ */ e("span", { className: [v.chevron, u ? v.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: g,
          role: "region",
          "aria-labelledby": p,
          hidden: !u,
          className: v.content,
          children: f.content
        }
      )
    ] }, f.key);
  }) });
}
const Jl = "_textarea_jj8z9_1", Ql = "_xs_jj8z9_25", Yl = "_sm_jj8z9_30", Zl = "_md_jj8z9_35", ea = "_lg_jj8z9_40", ta = "_xl_jj8z9_45", U = {
  textarea: Jl,
  xs: Ql,
  sm: Yl,
  md: Zl,
  lg: ea,
  xl: ta,
  "resize-none": "_resize-none_jj8z9_50",
  "resize-vertical": "_resize-vertical_jj8z9_54",
  "resize-horizontal": "_resize-horizontal_jj8z9_58",
  "resize-both": "_resize-both_jj8z9_62"
}, La = y(function({ size: t = "md", resize: s = "none", className: o, ...a }, l) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: l,
      className: [
        U.textarea,
        U[t],
        U[`resize-${s}`],
        o
      ].filter(Boolean).join(" "),
      ...a
    }
  );
});
export {
  Ba as Accordion,
  Sa as Alert,
  Ma as Avatar,
  aa as Badge,
  $a as Body,
  oa as Button,
  la as Card,
  ua as Checkbox,
  ka as Column,
  za as Dialog,
  da as EmptyState,
  fa as Field,
  Uo as Footer,
  Qo as Header,
  ia as Icon,
  pa as Input,
  ma as Label,
  Oa as Layout,
  wa as Progress,
  ba as Row,
  ha as Select,
  ll as Sidebar,
  va as Skeleton,
  _a as Stat,
  It as Switch,
  ra as Table,
  Na as Tabs,
  La as Textarea,
  ja as ThemeSwitcher,
  ya as ToastProvider,
  ga as Tooltip,
  ca as iconNames,
  xa as useToast
};
