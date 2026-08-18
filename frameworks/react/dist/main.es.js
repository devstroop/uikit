import { jsx as e, jsxs as _, Fragment as h } from "react/jsx-runtime";
import { forwardRef as y, useId as j, isValidElement as J, cloneElement as ee, useRef as R, useState as B, useEffect as P, useCallback as Q, useMemo as G, useContext as se, createContext as ne, Children as oe } from "react";
const le = "_button_1pn05_1", ae = "_primary_1pn05_29", ie = "_secondary_1pn05_38", ce = "_ghost_1pn05_48", _e = "_danger_1pn05_57", re = "_xs_1pn05_67", de = "_sm_1pn05_72", fe = "_md_1pn05_77", me = "_lg_1pn05_82", pe = "_iconOnly_1pn05_87", he = "_fullWidth_1pn05_109", L = {
  button: le,
  primary: ae,
  secondary: ie,
  ghost: ce,
  danger: _e,
  xs: re,
  sm: de,
  md: fe,
  lg: me,
  iconOnly: pe,
  fullWidth: he
}, Hl = y(function({
  variant: t = "primary",
  size: s = "md",
  fullWidth: o = !1,
  iconOnly: a = !1,
  className: l,
  type: i = "button",
  ...r
}, c) {
  const m = [
    L.button,
    L[t],
    L[s],
    o ? L.fullWidth : null,
    a ? L.iconOnly : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: c, type: i, className: m, ...r });
}), ue = "_card_lt977_1", ge = "_elevated_lt977_8", ze = "_outlined_lt977_13", ye = "_interactive_lt977_17", Se = "_header_lt977_35", be = "_body_lt977_42", ve = "_footer_lt977_52", I = {
  card: ue,
  elevated: ge,
  outlined: ze,
  interactive: ye,
  header: Se,
  body: be,
  footer: ve
}, Vl = y(function({ variant: t = "elevated", header: s, footer: o, className: a, children: l, onKeyDown: i, ...r }, c) {
  const m = t === "interactive";
  return /* @__PURE__ */ _(
    "div",
    {
      ref: c,
      tabIndex: m ? 0 : void 0,
      onKeyDown: (d) => {
        i?.(d), !(!m || d.key !== "Enter" && d.key !== " ") && (d.preventDefault(), d.currentTarget.click());
      },
      className: [I.card, I[t], a].filter(Boolean).join(" "),
      ...r,
      children: [
        s != null && /* @__PURE__ */ e("div", { className: I.header, children: s }),
        /* @__PURE__ */ e("div", { className: I.body, children: l }),
        o != null && /* @__PURE__ */ e("div", { className: I.footer, children: o })
      ]
    }
  );
}), Oe = "_badge_1qyhg_1", xe = "_neutral_1qyhg_15", ke = "_primary_1qyhg_20", we = "_success_1qyhg_25", $e = "_warning_1qyhg_30", Me = "_danger_1qyhg_35", Ne = "_solid_1qyhg_41", je = "_outline_1qyhg_66", W = {
  badge: Oe,
  neutral: xe,
  primary: ke,
  success: we,
  warning: $e,
  danger: Me,
  solid: Ne,
  outline: je
}, Dl = y(function({ tone: t = "neutral", variant: s = "soft", className: o, children: a, ...l }, i) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: i,
      className: [W.badge, W[t], W[s], o].filter(Boolean).join(" "),
      ...l,
      children: a
    }
  );
}), Al = [
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
], qe = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(h, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ _(h, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Rl = y(function({ name: t, size: s = 16, strokeWidth: o = 2, className: a, ...l }, i) {
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: i,
      className: a,
      width: s,
      height: s,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: o,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...l,
      children: qe[t]
    }
  );
}), Be = "_stat_1ks65_1", Le = "_label_1ks65_8", Ie = "_row_1ks65_16", Ce = "_value_1ks65_22", Ee = "_delta_1ks65_28", Te = "_success_1ks65_33", He = "_danger_1ks65_37", Ve = "_neutral_1ks65_41", De = "_hint_1ks65_45", w = {
  stat: Be,
  label: Le,
  row: Ie,
  value: Ce,
  delta: Ee,
  success: Te,
  danger: He,
  neutral: Ve,
  hint: De
}, Pl = y(function({ label: t, value: s, delta: o, deltaTone: a = "neutral", hint: l, className: i, ...r }, c) {
  return /* @__PURE__ */ _("div", { ref: c, className: [w.stat, i].filter(Boolean).join(" "), ...r, children: [
    /* @__PURE__ */ e("div", { className: w.label, children: t }),
    /* @__PURE__ */ _("div", { className: w.row, children: [
      /* @__PURE__ */ e("div", { className: w.value, children: s }),
      o != null && /* @__PURE__ */ e("div", { className: [w.delta, w[a]].join(" "), children: o })
    ] }),
    l != null && /* @__PURE__ */ e("div", { className: w.hint, children: l })
  ] });
}), Ae = "_wrap_1x8tx_1", Re = "_table_1x8tx_8", Pe = "_start_1x8tx_40", We = "_center_1x8tx_44", Ke = "_end_1x8tx_48", Fe = "_empty_1x8tx_52", C = {
  wrap: Ae,
  table: Re,
  start: Pe,
  center: We,
  end: Ke,
  empty: Fe
};
function Wl({ columns: n, rows: t, rowKey: s, empty: o, className: a }) {
  return /* @__PURE__ */ _("div", { className: [C.wrap, a].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ _("table", { className: C.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((l) => /* @__PURE__ */ e(
        "th",
        {
          className: l.align != null ? C[l.align] : void 0,
          scope: "col",
          children: l.header
        },
        l.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((l) => /* @__PURE__ */ e("tr", { children: n.map((i) => /* @__PURE__ */ e(
        "td",
        {
          className: i.align != null ? C[i.align] : void 0,
          children: i.render != null ? i.render(l) : l[i.key]
        },
        i.key
      )) }, s(l))) })
    ] }),
    t.length === 0 && o != null && /* @__PURE__ */ e("div", { className: C.empty, children: o })
  ] });
}
const Xe = "_emptyState_1o7fc_1", Ue = "_icon_1o7fc_13", Ge = "_title_1o7fc_18", Je = "_description_1o7fc_24", Qe = "_action_1o7fc_30", E = {
  emptyState: Xe,
  icon: Ue,
  title: Ge,
  description: Je,
  action: Qe
};
function Kl({ icon: n, title: t, description: s, action: o, className: a }) {
  return /* @__PURE__ */ _("div", { className: [E.emptyState, a].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ e("div", { className: E.icon, children: n }),
    /* @__PURE__ */ e("div", { className: E.title, children: t }),
    s != null && /* @__PURE__ */ e("div", { className: E.description, children: s }),
    o != null && /* @__PURE__ */ e("div", { className: E.action, children: o })
  ] });
}
const Ye = "_field_w9m4o_1", Ze = "_label_w9m4o_8", et = "_required_w9m4o_14", tt = "_hint_w9m4o_19", st = "_error_w9m4o_24", T = {
  field: Ye,
  label: Ze,
  required: et,
  hint: tt,
  error: st
};
function Fl({ label: n, htmlFor: t, required: s, hint: o, error: a, children: l, className: i }) {
  const r = j(), c = j(), m = a != null ? r : o != null ? c : null, d = J(l) && m != null ? ee(
    l,
    {
      "aria-describedby": [
        l.props["aria-describedby"],
        m
      ].filter((f) => typeof f == "string").join(" ") || void 0,
      "aria-invalid": a != null ? !0 : l.props["aria-invalid"]
    }
  ) : l;
  return /* @__PURE__ */ _("div", { className: [T.field, i].filter(Boolean).join(" "), children: [
    n != null && /* @__PURE__ */ _("label", { className: T.label, htmlFor: t, children: [
      n,
      s === !0 && /* @__PURE__ */ e("span", { className: T.required, "aria-hidden": "true", children: "*" })
    ] }),
    d,
    a != null ? /* @__PURE__ */ e("div", { id: r, className: T.error, role: "alert", children: a }) : o != null ? /* @__PURE__ */ e("div", { id: c, className: T.hint, children: o }) : null
  ] });
}
const nt = "_label_rv97n_1", ot = {
  label: nt
}, Xl = y(
  function({ className: t, children: s, ...o }, a) {
    return /* @__PURE__ */ e("label", { ref: a, className: [ot.label, t].filter(Boolean).join(" "), ...o, children: s });
  }
), lt = "_input_1l72d_1", at = "_invalid_1l72d_30", it = "_sm_1l72d_36", ct = "_md_1l72d_41", _t = "_lg_1l72d_47", K = {
  input: lt,
  invalid: at,
  sm: it,
  md: ct,
  lg: _t
}, Ul = y(function({ size: t = "md", invalid: s = !1, className: o, ...a }, l) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: l,
      className: [K.input, K[t], s ? K.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...a
    }
  );
}), rt = "_select_1t5a4_1", dt = "_invalid_1t5a4_32", ft = "_sm_1t5a4_38", mt = "_md_1t5a4_43", pt = "_lg_1t5a4_49", F = {
  select: rt,
  invalid: dt,
  sm: ft,
  md: mt,
  lg: pt
}, Gl = y(function({ size: t = "md", invalid: s = !1, options: o, children: a, className: l, ...i }, r) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: r,
      className: [F.select, F[t], s ? F.invalid : null, l].filter(Boolean).join(" "),
      "aria-invalid": s || void 0,
      ...i,
      children: o != null ? o.map((c) => /* @__PURE__ */ e("option", { value: c.value, disabled: c.disabled, children: c.label }, c.value)) : a
    }
  );
}), ht = "_checkbox_sx3bj_1", ut = {
  checkbox: ht
}, Jl = y(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      className: [ut.checkbox, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), gt = {
  switch: "_switch_1lrk0_1"
}, zt = y(function({ className: t, ...s }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      type: "checkbox",
      role: "switch",
      className: [gt.switch, t].filter(Boolean).join(" "),
      ...s
    }
  );
}), yt = "_trigger_4qzmh_1", St = "_tooltip_4qzmh_7", bt = "_top_4qzmh_34", vt = "_right_4qzmh_40", Ot = "_bottom_4qzmh_46", xt = "_left_4qzmh_52", kt = "_arrow_4qzmh_58", V = {
  trigger: yt,
  tooltip: St,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: bt,
  right: vt,
  bottom: Ot,
  left: xt,
  arrow: kt
};
function Ql({
  content: n,
  children: t,
  placement: s = "top",
  delayMs: o = 300,
  className: a
}) {
  const l = j(), i = R(null), [r, c] = B(!1), m = () => {
    i.current = window.setTimeout(() => c(!0), o);
  }, d = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null), c(!1);
  };
  P(() => {
    if (!r) return;
    const u = (g) => {
      g.key === "Escape" && d();
    };
    return window.addEventListener("keydown", u), () => window.removeEventListener("keydown", u);
  }, [r]);
  const f = J(t) ? ee(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        r ? l : null
      ].filter((u) => typeof u == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ _(
    "span",
    {
      className: [V.trigger, a].filter(Boolean).join(" "),
      onMouseEnter: m,
      onMouseLeave: d,
      onFocus: m,
      onBlur: d,
      children: [
        f,
        r && /* @__PURE__ */ _(
          "span",
          {
            role: "tooltip",
            id: l,
            className: [V.tooltip, V[s]].filter(Boolean).join(" "),
            children: [
              n,
              /* @__PURE__ */ e("span", { className: V.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const wt = "_dialog_gp2l5_1", $t = "_sm_gp2l5_30", Mt = "_md_gp2l5_34", Nt = "_lg_gp2l5_38", jt = "_header_gp2l5_42", qt = "_title_gp2l5_51", Bt = "_description_gp2l5_58", Lt = "_close_gp2l5_65", It = "_body_gp2l5_84", Ct = "_footer_gp2l5_90", x = {
  dialog: wt,
  "se-dialog-in": "_se-dialog-in_gp2l5_1",
  sm: $t,
  md: Mt,
  lg: Nt,
  header: jt,
  title: qt,
  description: Bt,
  close: Lt,
  body: It,
  footer: Ct
};
function Yl({
  open: n,
  onClose: t,
  title: s,
  description: o,
  children: a,
  footer: l,
  size: i = "md",
  className: r
}) {
  const c = R(null), m = j(), d = j();
  return P(() => {
    const f = c.current;
    f && (n && !f.open ? f.showModal() : !n && f.open && f.close());
  }, [n]), /* @__PURE__ */ _(
    "dialog",
    {
      ref: c,
      className: [x.dialog, x[i], r].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": s ? m : void 0,
      "aria-describedby": o ? d : void 0,
      children: [
        s && /* @__PURE__ */ _("header", { className: x.header, children: [
          /* @__PURE__ */ _("div", { children: [
            /* @__PURE__ */ e("h2", { id: m, className: x.title, children: s }),
            o && /* @__PURE__ */ e("p", { id: d, className: x.description, children: o })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: x.close,
              onClick: t,
              "aria-label": "Close dialog",
              children: "×"
            }
          )
        ] }),
        a && /* @__PURE__ */ e("div", { className: x.body, children: a }),
        l && /* @__PURE__ */ e("footer", { className: x.footer, children: l })
      ]
    }
  );
}
const Et = "_viewport_wjgk1_1", Tt = "_topLeft_wjgk1_13", Ht = "_topRight_wjgk1_20", Vt = "_bottomLeft_wjgk1_25", Dt = "_toast_wjgk1_30", At = "_info_wjgk1_55", Rt = "_success_wjgk1_60", Pt = "_warning_wjgk1_65", Wt = "_danger_wjgk1_70", Kt = "_content_wjgk1_75", Ft = "_title_wjgk1_80", Xt = "_description_wjgk1_103", Ut = "_dismiss_wjgk1_110", k = {
  viewport: Et,
  topLeft: Tt,
  topRight: Ht,
  bottomLeft: Vt,
  toast: Dt,
  "se-toast-in": "_se-toast-in_wjgk1_1",
  info: At,
  success: Rt,
  warning: Pt,
  danger: Wt,
  content: Kt,
  title: Ft,
  description: Xt,
  dismiss: Ut
}, te = ne(null);
function Zl() {
  const n = se(te);
  if (!n)
    throw new Error("useToast must be used within a <ToastProvider>");
  return n;
}
const Gt = {
  "top-left": "topLeft",
  "top-right": "topRight",
  "bottom-left": "bottomLeft",
  "bottom-right": "bottomRight"
};
function ea({
  children: n,
  durationMs: t = 4e3,
  position: s = "bottom-right",
  className: o
}) {
  const [a, l] = B([]), i = R(0), r = Q((d) => {
    l((f) => f.filter((u) => u.id !== d));
  }, []), c = Q(
    (d) => {
      const f = ++i.current, u = {
        id: f,
        title: d.title ?? "",
        description: d.description,
        tone: d.tone ?? "info",
        durationMs: d.durationMs ?? t
      };
      l((g) => [...g, u]), u.durationMs > 0 && window.setTimeout(() => r(f), u.durationMs);
    },
    [t, r]
  ), m = G(() => ({ toast: c }), [c]);
  return /* @__PURE__ */ _(te.Provider, { value: m, children: [
    n,
    /* @__PURE__ */ e(
      "div",
      {
        className: [
          k.viewport,
          k[Gt[s]],
          o
        ].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        children: a.map((d) => /* @__PURE__ */ _(
          "div",
          {
            role: d.tone === "danger" ? "alert" : "status",
            className: [k.toast, k[d.tone]].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ _("div", { className: k.content, children: [
                /* @__PURE__ */ e("div", { className: k.title, children: d.title }),
                d.description && /* @__PURE__ */ e("div", { className: k.description, children: d.description })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: k.dismiss,
                  onClick: () => r(d.id),
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
const Jt = "_alert_5hvdc_1", Qt = "_info_5hvdc_14", Yt = "_success_5hvdc_20", Zt = "_warning_5hvdc_26", es = "_danger_5hvdc_32", ts = "_icon_5hvdc_38", ss = "_content_5hvdc_44", ns = "_title_5hvdc_49", os = "_body_5hvdc_55", ls = "_dismiss_5hvdc_60", $ = {
  alert: Jt,
  info: Qt,
  success: Yt,
  warning: Zt,
  danger: es,
  icon: ts,
  content: ss,
  title: ns,
  body: os,
  dismiss: ls
};
function ta({
  tone: n = "info",
  title: t,
  icon: s,
  children: o,
  dismissible: a = !1,
  className: l
}) {
  const [i, r] = B(!1);
  return i ? null : /* @__PURE__ */ _(
    "div",
    {
      role: "alert",
      className: [$.alert, $[n], l].filter(Boolean).join(" "),
      children: [
        s != null && /* @__PURE__ */ e("span", { className: $.icon, "aria-hidden": "true", children: s }),
        /* @__PURE__ */ _("div", { className: $.content, children: [
          t && /* @__PURE__ */ e("div", { className: $.title, children: t }),
          o && /* @__PURE__ */ e("div", { className: $.body, children: o })
        ] }),
        a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: $.dismiss,
            onClick: () => r(!0),
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const as = "_skeleton_35ckz_1", is = "_text_35ckz_35", cs = "_circle_35ckz_40", _s = "_rect_35ckz_44", Y = {
  skeleton: as,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_35ckz_1",
  text: is,
  circle: cs,
  rect: _s
};
function sa({
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
const rs = "_row_15fbq_1", ds = "_start_15fbq_7", fs = "_center_15fbq_11", ms = "_end_15fbq_15", ps = "_stretch_15fbq_19", hs = "_baseline_15fbq_23", us = "_noWrap_15fbq_51", D = {
  row: rs,
  start: ds,
  center: fs,
  end: ms,
  stretch: ps,
  baseline: hs,
  "justify-start": "_justify-start_15fbq_27",
  "justify-center": "_justify-center_15fbq_31",
  "justify-end": "_justify-end_15fbq_35",
  "justify-between": "_justify-between_15fbq_39",
  "justify-around": "_justify-around_15fbq_43",
  "justify-evenly": "_justify-evenly_15fbq_47",
  noWrap: us
};
function na({
  gap: n,
  align: t = "stretch",
  justify: s = "start",
  wrap: o = !0,
  className: a,
  style: l,
  ...i
}) {
  const r = {
    ...n != null ? { gap: typeof n == "number" ? `${n}px` : n } : {},
    ...l
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: [
        D.row,
        D[t],
        D[`justify-${s}`],
        o ? null : D.noWrap,
        a
      ].filter(Boolean).join(" "),
      style: r,
      ...i
    }
  );
}
const gs = "_column_1pa86_1", zs = "_Size1_1pa86_6", ys = "_Size2_1pa86_7", Ss = "_Size3_1pa86_8", bs = "_Size4_1pa86_9", vs = "_Size5_1pa86_10", Os = "_Size6_1pa86_11", xs = "_Size7_1pa86_12", ks = "_Size8_1pa86_13", ws = "_Size9_1pa86_14", $s = "_Size10_1pa86_15", Ms = "_Size11_1pa86_16", Ns = "_Size12_1pa86_17", js = "_Offset1_1pa86_18", qs = "_Offset2_1pa86_19", Bs = "_Offset3_1pa86_20", Ls = "_Offset4_1pa86_21", Is = "_Offset5_1pa86_22", Cs = "_Offset6_1pa86_23", Es = "_Offset7_1pa86_24", Ts = "_Offset8_1pa86_25", Hs = "_Offset9_1pa86_26", Vs = "_Offset10_1pa86_27", Ds = "_Offset11_1pa86_28", As = "_smSize1_1pa86_31", Rs = "_smSize2_1pa86_32", Ps = "_smSize3_1pa86_33", Ws = "_smSize4_1pa86_34", Ks = "_smSize5_1pa86_35", Fs = "_smSize6_1pa86_36", Xs = "_smSize7_1pa86_37", Us = "_smSize8_1pa86_38", Gs = "_smSize9_1pa86_39", Js = "_smSize10_1pa86_40", Qs = "_smSize11_1pa86_41", Ys = "_smSize12_1pa86_42", Zs = "_smOffset1_1pa86_43", en = "_smOffset2_1pa86_44", tn = "_smOffset3_1pa86_45", sn = "_smOffset4_1pa86_46", nn = "_smOffset5_1pa86_47", on = "_smOffset6_1pa86_48", ln = "_smOffset7_1pa86_49", an = "_smOffset8_1pa86_50", cn = "_smOffset9_1pa86_51", _n = "_smOffset10_1pa86_52", rn = "_smOffset11_1pa86_53", dn = "_mdSize1_1pa86_57", fn = "_mdSize2_1pa86_58", mn = "_mdSize3_1pa86_59", pn = "_mdSize4_1pa86_60", hn = "_mdSize5_1pa86_61", un = "_mdSize6_1pa86_62", gn = "_mdSize7_1pa86_63", zn = "_mdSize8_1pa86_64", yn = "_mdSize9_1pa86_65", Sn = "_mdSize10_1pa86_66", bn = "_mdSize11_1pa86_67", vn = "_mdSize12_1pa86_68", On = "_mdOffset1_1pa86_69", xn = "_mdOffset2_1pa86_70", kn = "_mdOffset3_1pa86_71", wn = "_mdOffset4_1pa86_72", $n = "_mdOffset5_1pa86_73", Mn = "_mdOffset6_1pa86_74", Nn = "_mdOffset7_1pa86_75", jn = "_mdOffset8_1pa86_76", qn = "_mdOffset9_1pa86_77", Bn = "_mdOffset10_1pa86_78", Ln = "_mdOffset11_1pa86_79", In = "_lgSize1_1pa86_83", Cn = "_lgSize2_1pa86_84", En = "_lgSize3_1pa86_85", Tn = "_lgSize4_1pa86_86", Hn = "_lgSize5_1pa86_87", Vn = "_lgSize6_1pa86_88", Dn = "_lgSize7_1pa86_89", An = "_lgSize8_1pa86_90", Rn = "_lgSize9_1pa86_91", Pn = "_lgSize10_1pa86_92", Wn = "_lgSize11_1pa86_93", Kn = "_lgSize12_1pa86_94", Fn = "_lgOffset1_1pa86_95", Xn = "_lgOffset2_1pa86_96", Un = "_lgOffset3_1pa86_97", Gn = "_lgOffset4_1pa86_98", Jn = "_lgOffset5_1pa86_99", Qn = "_lgOffset6_1pa86_100", Yn = "_lgOffset7_1pa86_101", Zn = "_lgOffset8_1pa86_102", eo = "_lgOffset9_1pa86_103", to = "_lgOffset10_1pa86_104", so = "_lgOffset11_1pa86_105", no = "_xlSize1_1pa86_109", oo = "_xlSize2_1pa86_110", lo = "_xlSize3_1pa86_111", ao = "_xlSize4_1pa86_112", io = "_xlSize5_1pa86_113", co = "_xlSize6_1pa86_114", _o = "_xlSize7_1pa86_115", ro = "_xlSize8_1pa86_116", fo = "_xlSize9_1pa86_117", mo = "_xlSize10_1pa86_118", po = "_xlSize11_1pa86_119", ho = "_xlSize12_1pa86_120", uo = "_xlOffset1_1pa86_121", go = "_xlOffset2_1pa86_122", zo = "_xlOffset3_1pa86_123", yo = "_xlOffset4_1pa86_124", So = "_xlOffset5_1pa86_125", bo = "_xlOffset6_1pa86_126", vo = "_xlOffset7_1pa86_127", Oo = "_xlOffset8_1pa86_128", xo = "_xlOffset9_1pa86_129", ko = "_xlOffset10_1pa86_130", wo = "_xlOffset11_1pa86_131", X = {
  column: gs,
  Size1: zs,
  Size2: ys,
  Size3: Ss,
  Size4: bs,
  Size5: vs,
  Size6: Os,
  Size7: xs,
  Size8: ks,
  Size9: ws,
  Size10: $s,
  Size11: Ms,
  Size12: Ns,
  Offset1: js,
  Offset2: qs,
  Offset3: Bs,
  Offset4: Ls,
  Offset5: Is,
  Offset6: Cs,
  Offset7: Es,
  Offset8: Ts,
  Offset9: Hs,
  Offset10: Vs,
  Offset11: Ds,
  smSize1: As,
  smSize2: Rs,
  smSize3: Ps,
  smSize4: Ws,
  smSize5: Ks,
  smSize6: Fs,
  smSize7: Xs,
  smSize8: Us,
  smSize9: Gs,
  smSize10: Js,
  smSize11: Qs,
  smSize12: Ys,
  smOffset1: Zs,
  smOffset2: en,
  smOffset3: tn,
  smOffset4: sn,
  smOffset5: nn,
  smOffset6: on,
  smOffset7: ln,
  smOffset8: an,
  smOffset9: cn,
  smOffset10: _n,
  smOffset11: rn,
  mdSize1: dn,
  mdSize2: fn,
  mdSize3: mn,
  mdSize4: pn,
  mdSize5: hn,
  mdSize6: un,
  mdSize7: gn,
  mdSize8: zn,
  mdSize9: yn,
  mdSize10: Sn,
  mdSize11: bn,
  mdSize12: vn,
  mdOffset1: On,
  mdOffset2: xn,
  mdOffset3: kn,
  mdOffset4: wn,
  mdOffset5: $n,
  mdOffset6: Mn,
  mdOffset7: Nn,
  mdOffset8: jn,
  mdOffset9: qn,
  mdOffset10: Bn,
  mdOffset11: Ln,
  lgSize1: In,
  lgSize2: Cn,
  lgSize3: En,
  lgSize4: Tn,
  lgSize5: Hn,
  lgSize6: Vn,
  lgSize7: Dn,
  lgSize8: An,
  lgSize9: Rn,
  lgSize10: Pn,
  lgSize11: Wn,
  lgSize12: Kn,
  lgOffset1: Fn,
  lgOffset2: Xn,
  lgOffset3: Un,
  lgOffset4: Gn,
  lgOffset5: Jn,
  lgOffset6: Qn,
  lgOffset7: Yn,
  lgOffset8: Zn,
  lgOffset9: eo,
  lgOffset10: to,
  lgOffset11: so,
  xlSize1: no,
  xlSize2: oo,
  xlSize3: lo,
  xlSize4: ao,
  xlSize5: io,
  xlSize6: co,
  xlSize7: _o,
  xlSize8: ro,
  xlSize9: fo,
  xlSize10: mo,
  xlSize11: po,
  xlSize12: ho,
  xlOffset1: uo,
  xlOffset2: go,
  xlOffset3: zo,
  xlOffset4: yo,
  xlOffset5: So,
  xlOffset6: bo,
  xlOffset7: vo,
  xlOffset8: Oo,
  xlOffset9: xo,
  xlOffset10: ko,
  xlOffset11: wo
}, $o = [
  ["", "size", "offset"],
  ["sm", "sizeSm", "offsetSm"],
  ["md", "sizeMd", "offsetMd"],
  ["lg", "sizeLg", "offsetLg"],
  ["xl", "sizeXl", "offsetXl"]
];
function oa({ className: n, ...t }) {
  const s = [X.column];
  for (const [p, z, H] of $o) {
    const S = t[z], O = t[H];
    S != null && s.push(X[`${p}Size${S}`]), O != null && O > 0 && s.push(X[`${p}Offset${O}`]);
  }
  const { size: o, offset: a, sizeSm: l, offsetSm: i, sizeMd: r, offsetMd: c, sizeLg: m, offsetLg: d, sizeXl: f, offsetXl: u, ...g } = t;
  return /* @__PURE__ */ e("div", { className: [...s, n].filter(Boolean).join(" "), ...g });
}
const Mo = "_layout_1pcye_1", No = "_row_1pcye_7", Z = {
  layout: Mo,
  row: No
}, jo = "_footer_14whp_1", qo = {
  footer: jo
};
function Bo({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("footer", { className: [qo.footer, n].filter(Boolean).join(" "), ...s, children: t });
}
const Lo = "_header_2mimk_1", Io = {
  header: Lo
};
function Co({ className: n, children: t, ...s }) {
  return /* @__PURE__ */ e("header", { className: [Io.header, n].filter(Boolean).join(" "), ...s, children: t });
}
const Eo = "_sidebar_1ktmd_1", To = "_left_1ktmd_9", Ho = "_right_1ktmd_13", Vo = "_collapsed_1ktmd_17", Do = "_responsive_1ktmd_25", Ao = "_overlay_1ktmd_33", Ro = "_mask_1ktmd_53", M = {
  sidebar: Eo,
  left: To,
  right: Ho,
  collapsed: Vo,
  responsive: Do,
  overlay: Ao,
  mask: Ro
};
function Po({
  position: n = "left",
  expanded: t = !0,
  responsive: s = !1,
  overlay: o = !1,
  onClose: a,
  className: l,
  children: i,
  ...r
}) {
  return P(() => {
    if (!o || !t || a == null) return;
    const c = (m) => {
      m.key === "Escape" && a();
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [o, t, a]), /* @__PURE__ */ _(h, { children: [
    o && t ? /* @__PURE__ */ e("div", { className: `${M.mask} se-layout-mask`, "aria-hidden": "true", onClick: a }) : null,
    /* @__PURE__ */ e(
      "aside",
      {
        className: [
          M.sidebar,
          n === "right" ? M.right : M.left,
          t ? null : M.collapsed,
          s ? M.responsive : null,
          o ? [M.overlay, "se-sidebar--overlay"] : null,
          l
        ].flat().filter(Boolean).join(" "),
        ...r,
        children: i
      }
    )
  ] });
}
function la({ className: n, children: t, ...s }) {
  const o = [], a = [], l = [], i = [], r = [];
  return oe.forEach(t, (c) => {
    if (!J(c)) {
      l.push(c);
      return;
    }
    c.type === Co ? o.push(c) : c.type === Bo ? a.push(c) : c.type === Po ? (c.props.position === "right" ? r : i).push(c) : l.push(c);
  }), /* @__PURE__ */ _("div", { className: [Z.layout, n].filter(Boolean).join(" "), ...s, children: [
    o,
    /* @__PURE__ */ _("div", { className: Z.row, children: [
      i,
      l,
      r
    ] }),
    a
  ] });
}
const Wo = "_body_1tpk6_1", Ko = {
  body: Wo
};
function aa({ as: n = "main", className: t, children: s, ...o }) {
  return /* @__PURE__ */ e(n, { className: [Ko.body, t].filter(Boolean).join(" "), ...o, children: s });
}
const Fo = "_track_1s0q1_1", Xo = "_bar_1s0q1_10", Uo = "_primary_1s0q1_18", Go = "_success_1s0q1_22", Jo = "_warning_1s0q1_26", Qo = "_danger_1s0q1_30", Yo = "_indeterminate_1s0q1_34", Zo = "_circular_1s0q1_48", el = "_fill_1s0q1_61", b = {
  track: Fo,
  bar: Xo,
  primary: Uo,
  success: Go,
  warning: Jo,
  danger: Qo,
  indeterminate: Yo,
  "se-progress-slide": "_se-progress-slide_1s0q1_1",
  circular: Zo,
  fill: el,
  "se-progress-spin": "_se-progress-spin_1s0q1_1"
};
function ia({
  value: n = 0,
  max: t = 100,
  tone: s = "primary",
  indeterminate: o = !1,
  variant: a = "linear",
  size: l = 64,
  className: i,
  ...r
}) {
  const c = t > 0 ? Math.min(t, Math.max(0, n)) : 0, m = t > 0 ? c / t * 100 : 0;
  if (a === "circular") {
    const f = Math.max(l / 2 - 6, 2), u = 2 * Math.PI * f, g = u * (o ? 0.75 : 1), p = o ? 0 : u * (1 - m / 100);
    return /* @__PURE__ */ _(
      "svg",
      {
        width: l,
        height: l,
        viewBox: `0 0 ${l} ${l}`,
        role: "progressbar",
        "aria-label": r["aria-label"],
        "aria-labelledby": r["aria-labelledby"],
        "aria-valuenow": o ? void 0 : Math.round(c),
        "aria-valuemin": 0,
        "aria-valuemax": t,
        id: r.id,
        style: r.style,
        className: [
          b.circular,
          b[s],
          o ? b.indeterminate : null,
          i
        ].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e(
            "circle",
            {
              className: b.track,
              cx: l / 2,
              cy: l / 2,
              r: f
            }
          ),
          /* @__PURE__ */ e(
            "circle",
            {
              className: b.fill,
              cx: l / 2,
              cy: l / 2,
              r: f,
              strokeDasharray: `${g} ${u}`,
              strokeDashoffset: p
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
      "aria-valuenow": o ? void 0 : Math.round(c),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        b.track,
        b[s],
        o ? b.indeterminate : null,
        i
      ].filter(Boolean).join(" "),
      ...r,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: b.bar,
          style: o ? void 0 : { width: `${m}%` }
        }
      )
    }
  );
}
const tl = "_wrapper_t239v_1", sl = {
  wrapper: tl
};
function ca({
  defaultTheme: n = "light",
  onChange: t,
  label: s = "Dark mode",
  className: o
}) {
  const [a, l] = B(() => (typeof document < "u" ? document.documentElement.dataset.theme : void 0) === "dark" ? !0 : n === "dark");
  P(() => {
    document.documentElement.dataset.theme = a ? "dark" : "light";
  }, []);
  const i = (r) => {
    const c = r.target.checked;
    l(c), document.documentElement.dataset.theme = c ? "dark" : "light", t?.(c ? "dark" : "light");
  };
  return /* @__PURE__ */ _("label", { className: [sl.wrapper, o].filter(Boolean).join(" "), children: [
    s,
    /* @__PURE__ */ e(zt, { checked: a, onChange: i })
  ] });
}
const nl = "_avatar_52omy_1", ol = "_sm_52omy_12", ll = "_md_52omy_18", al = "_lg_52omy_24", il = "_initials_52omy_30", cl = "_image_52omy_45", _l = "_status_52omy_52", rl = "_online_52omy_72", dl = "_offline_52omy_76", fl = "_away_52omy_80", q = {
  avatar: nl,
  sm: ol,
  md: ll,
  lg: al,
  initials: il,
  image: cl,
  status: _l,
  online: rl,
  offline: dl,
  away: fl
}, A = [
  "var(--se-color-palette-0)",
  "var(--se-color-palette-1)",
  "var(--se-color-palette-2)",
  "var(--se-color-palette-3)",
  "var(--se-color-palette-4)",
  "var(--se-color-palette-5)"
];
function ml(n) {
  return n.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function pl(n) {
  let t = 0;
  for (let s = 0; s < n.length; s += 1)
    t = t * 31 + n.charCodeAt(s) >>> 0;
  return A[t % A.length] ?? A[0];
}
function _a({
  name: n,
  src: t,
  alt: s,
  size: o = "md",
  status: a,
  className: l
}) {
  const i = G(() => n ? ml(n) : "?", [n]), r = G(() => n ? pl(n) : A[0], [n]), c = t ? /* @__PURE__ */ e("img", { className: q.image, src: t, alt: s ?? n ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: q.initials, style: { background: r }, children: i });
  return /* @__PURE__ */ _(
    "span",
    {
      className: [
        q.avatar,
        q[o],
        a ? q[a] : null,
        l
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": s ?? n ?? "avatar",
      children: [
        c,
        a && /* @__PURE__ */ e("span", { className: q.status, "aria-hidden": "true" })
      ]
    }
  );
}
const hl = "_root_1k1gx_1", ul = "_tabList_1k1gx_6", gl = "_underline_1k1gx_12", zl = "_pills_1k1gx_16", yl = "_tab_1k1gx_6", Sl = "_active_1k1gx_36", bl = "_disabled_1k1gx_50", vl = "_panel_1k1gx_64", N = {
  root: hl,
  tabList: ul,
  underline: gl,
  pills: zl,
  tab: yl,
  active: Sl,
  disabled: bl,
  panel: vl
};
function ra({
  items: n,
  value: t,
  defaultValue: s,
  onChange: o,
  variant: a = "underline",
  className: l
}) {
  const i = j(), r = R(null), [c, m] = B(s ?? n[0]?.key ?? ""), d = t ?? c, f = (p) => {
    m(p), o?.(p);
  }, u = (p) => {
    const z = n.filter((O) => !O.disabled), H = z.findIndex((O) => O.key === d);
    let S = -1;
    p.key === "ArrowRight" ? S = (H + 1) % z.length : p.key === "ArrowLeft" ? S = (H - 1 + z.length) % z.length : p.key === "Home" ? S = 0 : p.key === "End" && (S = z.length - 1), S >= 0 && (p.preventDefault(), r.current?.querySelector(
      `[data-tab-key="${CSS.escape(z[S]?.key ?? "")}"]`
    )?.focus(), f(z[S]?.key ?? ""));
  }, g = n.find((p) => p.key === d);
  return /* @__PURE__ */ _("div", { className: [N.root, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: r,
        role: "tablist",
        className: [N.tabList, N[a]].filter(Boolean).join(" "),
        onKeyDown: u,
        children: n.map((p) => {
          const z = p.key === d;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${i}-tab-${p.key}`,
              "data-tab-key": p.key,
              "aria-selected": z,
              "aria-controls": `${i}-panel-${p.key}`,
              tabIndex: z ? 0 : -1,
              disabled: p.disabled,
              className: [
                N.tab,
                z ? N.active : null,
                p.disabled ? N.disabled : null
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
        id: `${i}-panel-${g.key}`,
        "aria-labelledby": `${i}-tab-${g.key}`,
        className: N.panel,
        children: g.content
      }
    )
  ] });
}
const Ol = "_root_1rcwz_1", xl = "_item_1rcwz_9", kl = "_heading_1rcwz_13", wl = "_trigger_1rcwz_17", $l = "_disabled_1rcwz_34", Ml = "_title_1rcwz_48", Nl = "_chevron_1rcwz_52", jl = "_open_1rcwz_59", ql = "_content_1rcwz_63", v = {
  root: Ol,
  item: xl,
  heading: kl,
  trigger: wl,
  disabled: $l,
  title: Ml,
  chevron: Nl,
  open: jl,
  content: ql
};
function da({
  items: n,
  multiple: t = !1,
  value: s,
  defaultValue: o,
  onChange: a,
  className: l
}) {
  const i = j(), [r, c] = B(o ?? []), m = s ?? r, d = (f) => {
    const u = m.includes(f) ? m.filter((g) => g !== f) : t ? [...m, f] : [f];
    c(u), a?.(u);
  };
  return /* @__PURE__ */ e("div", { className: [v.root, l].filter(Boolean).join(" "), children: n.map((f) => {
    const u = m.includes(f.key), g = `${i}-panel-${f.key}`, p = `${i}-trigger-${f.key}`;
    return /* @__PURE__ */ _("div", { className: v.item, children: [
      /* @__PURE__ */ e("h3", { className: v.heading, children: /* @__PURE__ */ _(
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
const Bl = "_textarea_t3a4a_1", Ll = "_sm_t3a4a_24", Il = "_md_t3a4a_28", Cl = "_lg_t3a4a_32", U = {
  textarea: Bl,
  sm: Ll,
  md: Il,
  lg: Cl,
  "resize-none": "_resize-none_t3a4a_36",
  "resize-vertical": "_resize-vertical_t3a4a_40",
  "resize-horizontal": "_resize-horizontal_t3a4a_44",
  "resize-both": "_resize-both_t3a4a_48"
}, fa = y(function({ size: t = "md", resize: s = "none", className: o, ...a }, l) {
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
  da as Accordion,
  ta as Alert,
  _a as Avatar,
  Dl as Badge,
  aa as Body,
  Hl as Button,
  Vl as Card,
  Jl as Checkbox,
  oa as Column,
  Yl as Dialog,
  Kl as EmptyState,
  Fl as Field,
  Bo as Footer,
  Co as Header,
  Rl as Icon,
  Ul as Input,
  Xl as Label,
  la as Layout,
  ia as Progress,
  na as Row,
  Gl as Select,
  Po as Sidebar,
  sa as Skeleton,
  Pl as Stat,
  zt as Switch,
  Wl as Table,
  ra as Tabs,
  fa as Textarea,
  ca as ThemeSwitcher,
  ea as ToastProvider,
  Ql as Tooltip,
  Al as iconNames,
  Zl as useToast
};
