import { jsx as e, jsxs as c, Fragment as d } from "react/jsx-runtime";
import { forwardRef as g, useId as R, useRef as A, useState as H, isValidElement as J, cloneElement as Q, useEffect as X, useCallback as O, useMemo as K, useContext as Y, createContext as Z } from "react";
const ee = "_button_g8pqx_1", te = "_primary_g8pqx_29", ne = "_secondary_g8pqx_38", se = "_ghost_g8pqx_48", ae = "_danger_g8pqx_57", le = "_sm_g8pqx_67", oe = "_md_g8pqx_72", ie = "_lg_g8pqx_77", ce = "_fullWidth_g8pqx_82", C = {
  button: ee,
  primary: te,
  secondary: ne,
  ghost: se,
  danger: ae,
  sm: le,
  md: oe,
  lg: ie,
  fullWidth: ce
}, An = g(function({ variant: t = "primary", size: n = "md", fullWidth: a = !1, className: l, type: o = "button", ...i }, u) {
  const m = [
    C.button,
    C[t],
    C[n],
    a ? C.fullWidth : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: u, type: o, className: m, ...i });
}), re = "_card_1fmz3_1", de = "_elevated_1fmz3_8", _e = "_outlined_1fmz3_13", he = "_interactive_1fmz3_17", ue = "_header_1fmz3_30", me = "_body_1fmz3_37", pe = "_footer_1fmz3_46", z = {
  card: re,
  elevated: de,
  outlined: _e,
  interactive: he,
  header: ue,
  body: me,
  footer: pe
}, En = g(function({ variant: t = "elevated", header: n, footer: a, className: l, children: o, ...i }, u) {
  return /* @__PURE__ */ c(
    "div",
    {
      ref: u,
      className: [z.card, z[t], l].filter(Boolean).join(" "),
      ...i,
      children: [
        n != null && /* @__PURE__ */ e("div", { className: z.header, children: n }),
        /* @__PURE__ */ e("div", { className: z.body, children: o }),
        a != null && /* @__PURE__ */ e("div", { className: z.footer, children: a })
      ]
    }
  );
}), fe = "_badge_1as2w_1", ge = "_neutral_1as2w_15", ve = "_primary_1as2w_20", be = "_success_1as2w_25", ye = "_warning_1as2w_30", xe = "_danger_1as2w_35", Me = "_solid_1as2w_41", $e = "_outline_1as2w_66", E = {
  badge: fe,
  neutral: ge,
  primary: ve,
  success: be,
  warning: ye,
  danger: xe,
  solid: Me,
  outline: $e
}, Dn = g(function({ tone: t = "neutral", variant: n = "soft", className: a, children: l, ...o }, i) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: i,
      className: [E.badge, E[t], E[n], a].filter(Boolean).join(" "),
      ...o,
      children: l
    }
  );
}), Fn = [
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
], ke = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(d, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ c(d, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Pn = g(function({ name: t, size: n = 16, strokeWidth: a = 2, className: l, ...o }, i) {
  return /* @__PURE__ */ e(
    "svg",
    {
      ref: i,
      className: l,
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: a,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...o,
      children: ke[t]
    }
  );
}), we = "_stat_17lcz_1", Ne = "_label_17lcz_8", je = "_row_17lcz_16", ze = "_value_17lcz_22", Be = "_delta_17lcz_28", qe = "_success_17lcz_33", Le = "_danger_17lcz_37", He = "_neutral_17lcz_41", Ve = "_hint_17lcz_45", $ = {
  stat: we,
  label: Ne,
  row: je,
  value: ze,
  delta: Be,
  success: qe,
  danger: Le,
  neutral: He,
  hint: Ve
}, Kn = g(function({ label: t, value: n, delta: a, deltaTone: l = "neutral", hint: o, className: i, ...u }, m) {
  return /* @__PURE__ */ c("div", { ref: m, className: [$.stat, i].filter(Boolean).join(" "), ...u, children: [
    /* @__PURE__ */ e("div", { className: $.label, children: t }),
    /* @__PURE__ */ c("div", { className: $.row, children: [
      /* @__PURE__ */ e("div", { className: $.value, children: n }),
      a != null && /* @__PURE__ */ e("div", { className: [$.delta, $[l]].join(" "), children: a })
    ] }),
    o != null && /* @__PURE__ */ e("div", { className: $.hint, children: o })
  ] });
}), Ce = "_wrap_1x8tx_1", Se = "_table_1x8tx_8", Te = "_start_1x8tx_40", Ie = "_center_1x8tx_44", Ae = "_end_1x8tx_48", Ee = "_empty_1x8tx_52", B = {
  wrap: Ce,
  table: Se,
  start: Te,
  center: Ie,
  end: Ae,
  empty: Ee
};
function Rn({ columns: s, rows: t, rowKey: n, empty: a, className: l }) {
  return /* @__PURE__ */ c("div", { className: [B.wrap, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ c("table", { className: B.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: s.map((o) => /* @__PURE__ */ e(
        "th",
        {
          className: o.align != null ? B[o.align] : void 0,
          scope: "col",
          children: o.header
        },
        o.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((o) => /* @__PURE__ */ e("tr", { children: s.map((i) => /* @__PURE__ */ e(
        "td",
        {
          className: i.align != null ? B[i.align] : void 0,
          children: i.render != null ? i.render(o) : o[i.key]
        },
        i.key
      )) }, n(o))) })
    ] }),
    t.length === 0 && a != null && /* @__PURE__ */ e("div", { className: B.empty, children: a })
  ] });
}
const De = "_emptyState_1ilgs_1", Fe = "_icon_1ilgs_11", Pe = "_title_1ilgs_16", Ke = "_description_1ilgs_22", Re = "_action_1ilgs_28", q = {
  emptyState: De,
  icon: Fe,
  title: Pe,
  description: Ke,
  action: Re
};
function Wn({ icon: s, title: t, description: n, action: a, className: l }) {
  return /* @__PURE__ */ c("div", { className: [q.emptyState, l].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ e("div", { className: q.icon, children: s }),
    /* @__PURE__ */ e("div", { className: q.title, children: t }),
    n != null && /* @__PURE__ */ e("div", { className: q.description, children: n }),
    a != null && /* @__PURE__ */ e("div", { className: q.action, children: a })
  ] });
}
const We = "_field_1i47m_1", Oe = "_label_1i47m_8", Ue = "_required_1i47m_14", Ge = "_hint_1i47m_19", Je = "_error_1i47m_24", L = {
  field: We,
  label: Oe,
  required: Ue,
  hint: Ge,
  error: Je
};
function On({ label: s, htmlFor: t, required: n, hint: a, error: l, children: o, className: i }) {
  return /* @__PURE__ */ c("div", { className: [L.field, i].filter(Boolean).join(" "), children: [
    s != null && /* @__PURE__ */ c("label", { className: L.label, htmlFor: t, children: [
      s,
      n === !0 && /* @__PURE__ */ e("span", { className: L.required, "aria-hidden": "true", children: "*" })
    ] }),
    o,
    l != null ? /* @__PURE__ */ e("div", { className: L.error, role: "alert", children: l }) : a != null ? /* @__PURE__ */ e("div", { className: L.hint, children: a }) : null
  ] });
}
const Qe = "_label_twicg_1", Xe = {
  label: Qe
}, Un = g(
  function({ className: t, children: n, ...a }, l) {
    return /* @__PURE__ */ e("label", { ref: l, className: [Xe.label, t].filter(Boolean).join(" "), ...a, children: n });
  }
), Ye = "_input_1ju3m_1", Ze = "_invalid_1ju3m_30", et = "_sm_1ju3m_36", tt = "_md_1ju3m_41", D = {
  input: Ye,
  invalid: Ze,
  sm: et,
  md: tt
}, Gn = g(function({ size: t = "md", invalid: n = !1, className: a, ...l }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      className: [D.input, D[t], n ? D.invalid : null, a].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...l
    }
  );
}), nt = "_select_sn5nh_1", st = "_invalid_sn5nh_32", at = "_sm_sn5nh_38", lt = "_md_sn5nh_43", F = {
  select: nt,
  invalid: st,
  sm: at,
  md: lt
}, Jn = g(function({ size: t = "md", invalid: n = !1, options: a, children: l, className: o, ...i }, u) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: u,
      className: [F.select, F[t], n ? F.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i,
      children: a != null ? a.map((m) => /* @__PURE__ */ e("option", { value: m.value, disabled: m.disabled, children: m.label }, m.value)) : l
    }
  );
}), ot = "_checkbox_sx3bj_1", it = {
  checkbox: ot
}, Qn = g(function({ className: t, ...n }, a) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: a,
      type: "checkbox",
      className: [it.checkbox, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), ct = {
  switch: "_switch_1lrk0_1"
}, Xn = g(function({ className: t, ...n }, a) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: a,
      type: "checkbox",
      role: "switch",
      className: [ct.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), rt = "_trigger_4qzmh_1", dt = "_tooltip_4qzmh_7", _t = "_top_4qzmh_34", ht = "_right_4qzmh_40", ut = "_bottom_4qzmh_46", mt = "_left_4qzmh_52", pt = "_arrow_4qzmh_58", S = {
  trigger: rt,
  tooltip: dt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: _t,
  right: ht,
  bottom: ut,
  left: mt,
  arrow: pt
};
function Yn({
  content: s,
  children: t,
  placement: n = "top",
  delayMs: a = 300,
  className: l
}) {
  const o = R(), i = A(null), [u, m] = H(!1), r = () => {
    i.current = window.setTimeout(() => m(!0), a);
  }, p = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null), m(!1);
  }, _ = J(t) ? Q(t, {
    "aria-describedby": u ? o : void 0
  }) : t;
  return /* @__PURE__ */ c(
    "span",
    {
      className: [S.trigger, l].filter(Boolean).join(" "),
      onMouseEnter: r,
      onMouseLeave: p,
      onFocus: r,
      onBlur: p,
      children: [
        _,
        u && /* @__PURE__ */ c(
          "span",
          {
            role: "tooltip",
            id: o,
            className: [S.tooltip, S[n]].filter(Boolean).join(" "),
            children: [
              s,
              /* @__PURE__ */ e("span", { className: S.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const ft = "_dialog_1ji7h_1", gt = "_sm_1ji7h_30", vt = "_md_1ji7h_34", bt = "_lg_1ji7h_38", yt = "_header_1ji7h_42", xt = "_title_1ji7h_51", Mt = "_description_1ji7h_58", $t = "_close_1ji7h_65", kt = "_body_1ji7h_84", wt = "_footer_1ji7h_90", x = {
  dialog: ft,
  "se-dialog-in": "_se-dialog-in_1ji7h_1",
  sm: gt,
  md: vt,
  lg: bt,
  header: yt,
  title: xt,
  description: Mt,
  close: $t,
  body: kt,
  footer: wt
};
function Zn({
  open: s,
  onClose: t,
  title: n,
  description: a,
  children: l,
  footer: o,
  size: i = "md",
  className: u
}) {
  const m = A(null);
  return X(() => {
    const r = m.current;
    r && (s && !r.open ? r.showModal() : !s && r.open && r.close());
  }, [s]), /* @__PURE__ */ c(
    "dialog",
    {
      ref: m,
      className: [x.dialog, x[i], u].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": "se-dialog-title",
      "aria-describedby": a ? "se-dialog-desc" : void 0,
      children: [
        n && /* @__PURE__ */ c("header", { className: x.header, children: [
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ e("h2", { id: "se-dialog-title", className: x.title, children: n }),
            a && /* @__PURE__ */ e("p", { id: "se-dialog-desc", className: x.description, children: a })
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
        l && /* @__PURE__ */ e("div", { className: x.body, children: l }),
        o && /* @__PURE__ */ e("footer", { className: x.footer, children: o })
      ]
    }
  );
}
const Nt = "_viewport_3d2q7_1", jt = "_toast_3d2q7_13", zt = "_info_3d2q7_39", Bt = "_success_3d2q7_43", qt = "_warning_3d2q7_47", Lt = "_danger_3d2q7_51", Ht = "_content_3d2q7_55", Vt = "_title_3d2q7_60", Ct = "_description_3d2q7_66", St = "_dismiss_3d2q7_73", k = {
  viewport: Nt,
  toast: jt,
  "se-toast-in": "_se-toast-in_3d2q7_1",
  info: zt,
  success: Bt,
  warning: qt,
  danger: Lt,
  content: Ht,
  title: Vt,
  description: Ct,
  dismiss: St
}, G = Z(null);
function es() {
  const s = Y(G);
  if (!s)
    throw new Error("useToast must be used within a <ToastProvider>");
  return s;
}
function ts({
  children: s,
  durationMs: t = 4e3,
  className: n
}) {
  const [a, l] = H([]), o = A(0), i = O((r) => {
    l((p) => p.filter((_) => _.id !== r));
  }, []), u = O(
    (r) => {
      const p = ++o.current, _ = {
        id: p,
        title: r.title ?? "",
        description: r.description,
        tone: r.tone ?? "info",
        durationMs: r.durationMs ?? t
      };
      l((v) => [...v, _]), _.durationMs > 0 && window.setTimeout(() => i(p), _.durationMs);
    },
    [t, i]
  ), m = K(() => ({ toast: u }), [u]);
  return /* @__PURE__ */ c(G.Provider, { value: m, children: [
    s,
    /* @__PURE__ */ e(
      "div",
      {
        className: [k.viewport, n].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        children: a.map((r) => /* @__PURE__ */ c(
          "div",
          {
            role: "status",
            className: [k.toast, k[r.tone]].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ c("div", { className: k.content, children: [
                /* @__PURE__ */ e("div", { className: k.title, children: r.title }),
                r.description && /* @__PURE__ */ e("div", { className: k.description, children: r.description })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: k.dismiss,
                  onClick: () => i(r.id),
                  "aria-label": "Dismiss notification",
                  children: "×"
                }
              )
            ]
          },
          r.id
        ))
      }
    )
  ] });
}
const Tt = "_alert_1jbhm_1", It = "_info_1jbhm_12", At = "_success_1jbhm_17", Et = "_warning_1jbhm_22", Dt = "_danger_1jbhm_27", Ft = "_content_1jbhm_32", Pt = "_title_1jbhm_37", Kt = "_body_1jbhm_42", Rt = "_dismiss_1jbhm_48", N = {
  alert: Tt,
  info: It,
  success: At,
  warning: Et,
  danger: Dt,
  content: Ft,
  title: Pt,
  body: Kt,
  dismiss: Rt
};
function ns({
  tone: s = "info",
  title: t,
  children: n,
  dismissible: a = !1,
  className: l
}) {
  const [o, i] = H(!1);
  return o ? null : /* @__PURE__ */ c(
    "div",
    {
      role: "alert",
      className: [N.alert, N[s], l].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ c("div", { className: N.content, children: [
          t && /* @__PURE__ */ e("div", { className: N.title, children: t }),
          n && /* @__PURE__ */ e("div", { className: N.body, children: n })
        ] }),
        a && /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: N.dismiss,
            onClick: () => i(!0),
            "aria-label": "Dismiss alert",
            children: "×"
          }
        )
      ]
    }
  );
}
const Wt = "_skeleton_um7ls_1", Ot = "_text_um7ls_25", Ut = "_circle_um7ls_30", Gt = "_rect_um7ls_34", U = {
  skeleton: Wt,
  "se-skeleton-shimmer": "_se-skeleton-shimmer_um7ls_1",
  text: Ot,
  circle: Ut,
  rect: Gt
};
function ss({
  variant: s = "text",
  width: t,
  height: n,
  className: a
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [U.skeleton, U[s], a].filter(Boolean).join(" "),
      style: l
    }
  );
}
const Jt = "_track_1j6pv_1", Qt = "_bar_1j6pv_10", Xt = "_primary_1j6pv_18", Yt = "_success_1j6pv_22", Zt = "_warning_1j6pv_26", en = "_danger_1j6pv_30", tn = "_indeterminate_1j6pv_34", T = {
  track: Jt,
  bar: Qt,
  primary: Xt,
  success: Yt,
  warning: Zt,
  danger: en,
  indeterminate: tn,
  "se-progress-slide": "_se-progress-slide_1j6pv_1"
};
function as({
  value: s = 0,
  max: t = 100,
  tone: n = "primary",
  indeterminate: a = !1,
  className: l,
  ...o
}) {
  const i = t > 0 ? Math.min(100, Math.max(0, s / t * 100)) : 0;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": a ? void 0 : Math.round(s),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        T.track,
        T[n],
        a ? T.indeterminate : null,
        l
      ].filter(Boolean).join(" "),
      ...o,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: T.bar,
          style: a ? void 0 : { width: `${i}%` }
        }
      )
    }
  );
}
const nn = "_avatar_h5xoe_1", sn = "_sm_h5xoe_12", an = "_md_h5xoe_17", ln = "_lg_h5xoe_22", on = "_initials_h5xoe_27", cn = "_image_h5xoe_42", rn = "_status_h5xoe_49", dn = "_online_h5xoe_59", _n = "_offline_h5xoe_63", hn = "_away_h5xoe_67", j = {
  avatar: nn,
  sm: sn,
  md: an,
  lg: ln,
  initials: on,
  image: cn,
  status: rn,
  online: dn,
  offline: _n,
  away: hn
}, I = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0ea5e9"];
function un(s) {
  return s.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function mn(s) {
  let t = 0;
  for (let n = 0; n < s.length; n += 1)
    t = t * 31 + s.charCodeAt(n) >>> 0;
  return I[t % I.length] ?? I[0];
}
function ls({
  name: s,
  src: t,
  alt: n,
  size: a = "md",
  status: l,
  className: o
}) {
  const i = K(() => s ? un(s) : "?", [s]), u = K(() => s ? mn(s) : I[0], [s]), m = t ? /* @__PURE__ */ e("img", { className: j.image, src: t, alt: n ?? s ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: j.initials, style: { background: u }, children: i });
  return /* @__PURE__ */ c(
    "span",
    {
      className: [
        j.avatar,
        j[a],
        l ? j[l] : null,
        o
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": n ?? s ?? "avatar",
      children: [
        m,
        l && /* @__PURE__ */ e("span", { className: j.status, "aria-hidden": "true" })
      ]
    }
  );
}
const pn = "_root_1k1gx_1", fn = "_tabList_1k1gx_6", gn = "_underline_1k1gx_12", vn = "_pills_1k1gx_16", bn = "_tab_1k1gx_6", yn = "_active_1k1gx_36", xn = "_disabled_1k1gx_50", Mn = "_panel_1k1gx_64", w = {
  root: pn,
  tabList: fn,
  underline: gn,
  pills: vn,
  tab: bn,
  active: yn,
  disabled: xn,
  panel: Mn
};
function os({
  items: s,
  value: t,
  defaultValue: n,
  onChange: a,
  variant: l = "underline",
  className: o
}) {
  const i = R(), u = A(null), [m, r] = H(n ?? s[0]?.key ?? ""), p = t ?? m, _ = (h) => {
    r(h), a?.(h);
  }, v = (h) => {
    const f = s.filter((V) => !V.disabled), W = f.findIndex((V) => V.key === p);
    let M = -1;
    h.key === "ArrowRight" ? M = (W + 1) % f.length : h.key === "ArrowLeft" ? M = (W - 1 + f.length) % f.length : h.key === "Home" ? M = 0 : h.key === "End" && (M = f.length - 1), M >= 0 && (h.preventDefault(), u.current?.querySelector(
      `[data-tab-key="${CSS.escape(f[M]?.key ?? "")}"]`
    )?.focus(), _(f[M]?.key ?? ""));
  }, b = s.find((h) => h.key === p);
  return /* @__PURE__ */ c("div", { className: [w.root, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        role: "tablist",
        className: [w.tabList, w[l]].filter(Boolean).join(" "),
        onKeyDown: v,
        children: s.map((h) => {
          const f = h.key === p;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${i}-tab-${h.key}`,
              "data-tab-key": h.key,
              "aria-selected": f,
              "aria-controls": `${i}-panel-${h.key}`,
              tabIndex: f ? 0 : -1,
              disabled: h.disabled,
              className: [
                w.tab,
                f ? w.active : null,
                h.disabled ? w.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => _(h.key),
              children: h.label
            },
            h.key
          );
        })
      }
    ),
    b && /* @__PURE__ */ e(
      "div",
      {
        role: "tabpanel",
        id: `${i}-panel-${b.key}`,
        "aria-labelledby": `${i}-tab-${b.key}`,
        className: w.panel,
        children: b.content
      }
    )
  ] });
}
const $n = "_root_1rcwz_1", kn = "_item_1rcwz_9", wn = "_heading_1rcwz_13", Nn = "_trigger_1rcwz_17", jn = "_disabled_1rcwz_34", zn = "_title_1rcwz_48", Bn = "_chevron_1rcwz_52", qn = "_open_1rcwz_59", Ln = "_content_1rcwz_63", y = {
  root: $n,
  item: kn,
  heading: wn,
  trigger: Nn,
  disabled: jn,
  title: zn,
  chevron: Bn,
  open: qn,
  content: Ln
};
function is({
  items: s,
  multiple: t = !1,
  value: n,
  defaultValue: a,
  onChange: l,
  className: o
}) {
  const i = R(), [u, m] = H(a ?? []), r = n ?? u, p = (_) => {
    const v = r.includes(_) ? r.filter((b) => b !== _) : t ? [...r, _] : [_];
    m(v), l?.(v);
  };
  return /* @__PURE__ */ e("div", { className: [y.root, o].filter(Boolean).join(" "), children: s.map((_) => {
    const v = r.includes(_.key), b = `${i}-panel-${_.key}`, h = `${i}-trigger-${_.key}`;
    return /* @__PURE__ */ c("div", { className: y.item, children: [
      /* @__PURE__ */ e("h3", { className: y.heading, children: /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          id: h,
          "aria-expanded": v,
          "aria-controls": b,
          disabled: _.disabled,
          className: [
            y.trigger,
            _.disabled ? y.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => p(_.key),
          children: [
            /* @__PURE__ */ e("span", { className: y.title, children: _.title }),
            /* @__PURE__ */ e("span", { className: [y.chevron, v ? y.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: b,
          role: "region",
          "aria-labelledby": h,
          hidden: !v,
          className: y.content,
          children: _.content
        }
      )
    ] }, _.key);
  }) });
}
const Hn = "_textarea_nhhkd_1", Vn = "_sm_nhhkd_24", Cn = "_md_nhhkd_28", Sn = "_lg_nhhkd_32", P = {
  textarea: Hn,
  sm: Vn,
  md: Cn,
  lg: Sn,
  "resize-none": "_resize-none_nhhkd_36",
  "resize-vertical": "_resize-vertical_nhhkd_40",
  "resize-horizontal": "_resize-horizontal_nhhkd_44",
  "resize-both": "_resize-both_nhhkd_48"
}, cs = g(function({ size: t = "md", resize: n = "none", className: a, ...l }, o) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: o,
      className: [
        P.textarea,
        P[t],
        P[`resize-${n}`],
        a
      ].filter(Boolean).join(" "),
      ...l
    }
  );
});
export {
  is as Accordion,
  ns as Alert,
  ls as Avatar,
  Dn as Badge,
  An as Button,
  En as Card,
  Qn as Checkbox,
  Zn as Dialog,
  Wn as EmptyState,
  On as Field,
  Pn as Icon,
  Gn as Input,
  Un as Label,
  as as Progress,
  Jn as Select,
  ss as Skeleton,
  Kn as Stat,
  Xn as Switch,
  Rn as Table,
  os as Tabs,
  cs as Textarea,
  ts as ToastProvider,
  Yn as Tooltip,
  Fn as iconNames,
  es as useToast
};
