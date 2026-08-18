import { jsx as e, jsxs as c, Fragment as u } from "react/jsx-runtime";
import { forwardRef as y, useId as H, isValidElement as G, cloneElement as J, useRef as A, useState as I, useEffect as Q, useCallback as O, useMemo as R, useContext as Y, createContext as Z } from "react";
const ee = "_button_g8pqx_1", te = "_primary_g8pqx_29", ne = "_secondary_g8pqx_38", ae = "_ghost_g8pqx_48", se = "_danger_g8pqx_57", le = "_sm_g8pqx_67", oe = "_md_g8pqx_72", ie = "_lg_g8pqx_77", ce = "_fullWidth_g8pqx_82", C = {
  button: ee,
  primary: te,
  secondary: ne,
  ghost: ae,
  danger: se,
  sm: le,
  md: oe,
  lg: ie,
  fullWidth: ce
}, En = y(function({ variant: t = "primary", size: n = "md", fullWidth: s = !1, className: l, type: o = "button", ...i }, d) {
  const _ = [
    C.button,
    C[t],
    C[n],
    s ? C.fullWidth : null,
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("button", { ref: d, type: o, className: _, ...i });
}), re = "_card_1w07p_1", de = "_elevated_1w07p_8", _e = "_outlined_1w07p_13", he = "_interactive_1w07p_17", ue = "_header_1w07p_35", pe = "_body_1w07p_42", me = "_footer_1w07p_51", z = {
  card: re,
  elevated: de,
  outlined: _e,
  interactive: he,
  header: ue,
  body: pe,
  footer: me
}, An = y(function({ variant: t = "elevated", header: n, footer: s, className: l, children: o, onKeyDown: i, ...d }, _) {
  const r = t === "interactive";
  return /* @__PURE__ */ c(
    "div",
    {
      ref: _,
      tabIndex: r ? 0 : void 0,
      onKeyDown: (m) => {
        i?.(m), !(!r || m.key !== "Enter" && m.key !== " ") && (m.preventDefault(), m.currentTarget.click());
      },
      className: [z.card, z[t], l].filter(Boolean).join(" "),
      ...d,
      children: [
        n != null && /* @__PURE__ */ e("div", { className: z.header, children: n }),
        /* @__PURE__ */ e("div", { className: z.body, children: o }),
        s != null && /* @__PURE__ */ e("div", { className: z.footer, children: s })
      ]
    }
  );
}), fe = "_badge_1as2w_1", ge = "_neutral_1as2w_15", ve = "_primary_1as2w_20", ye = "_success_1as2w_25", be = "_warning_1as2w_30", xe = "_danger_1as2w_35", we = "_solid_1as2w_41", Me = "_outline_1as2w_66", D = {
  badge: fe,
  neutral: ge,
  primary: ve,
  success: ye,
  warning: be,
  danger: xe,
  solid: we,
  outline: Me
}, Dn = y(function({ tone: t = "neutral", variant: n = "soft", className: s, children: l, ...o }, i) {
  return /* @__PURE__ */ e(
    "span",
    {
      ref: i,
      className: [D.badge, D[t], D[n], s].filter(Boolean).join(" "),
      ...o,
      children: l
    }
  );
}), Kn = [
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
], $e = {
  check: /* @__PURE__ */ e("path", { d: "M20 6L9 17l-5-5" }),
  close: /* @__PURE__ */ e("path", { d: "M18 6L6 18M6 6l12 12" }),
  "chevron-down": /* @__PURE__ */ e("path", { d: "M6 9l6 6 6-6" }),
  "chevron-left": /* @__PURE__ */ e("path", { d: "M15 18l-6-6 6-6" }),
  "chevron-right": /* @__PURE__ */ e("path", { d: "M9 18l6-6-6-6" }),
  "chevron-up": /* @__PURE__ */ e("path", { d: "M18 15l-6-6-6 6" }),
  search: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "11", cy: "11", r: "7" }),
    /* @__PURE__ */ e("path", { d: "M21 21l-4.3-4.3" })
  ] }),
  plus: /* @__PURE__ */ e("path", { d: "M12 5v14M5 12h14" }),
  minus: /* @__PURE__ */ e("path", { d: "M5 12h14" }),
  alert: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" }),
    /* @__PURE__ */ e("path", { d: "M12 9v4M12 17h.01" })
  ] }),
  info: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 16v-4M12 8h.01" })
  ] }),
  "arrow-right": /* @__PURE__ */ e("path", { d: "M5 12h14M12 5l7 7-7 7" }),
  "arrow-left": /* @__PURE__ */ e("path", { d: "M19 12H5M12 19l-7-7 7-7" }),
  "external-link": /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
    /* @__PURE__ */ e("path", { d: "M15 3h6v6M10 14L21 3" })
  ] }),
  copy: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" })
  ] }),
  trash: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e("path", { d: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6" }) }),
  edit: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" }),
    /* @__PURE__ */ e("path", { d: "M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4 9.5-9.5z" })
  ] }),
  settings: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ e("path", { d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" })
  ] }),
  user: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "7", r: "4" })
  ] }),
  users: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" }),
    /* @__PURE__ */ e("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ e("path", { d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" })
  ] }),
  download: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }),
  upload: /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" }),
  menu: /* @__PURE__ */ e("path", { d: "M3 12h18M3 6h18M3 18h18" }),
  "more-horizontal": /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "19", cy: "12", r: "1" }),
    /* @__PURE__ */ e("circle", { cx: "5", cy: "12", r: "1" })
  ] }),
  mail: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M22 6l-10 7L2 6" })
  ] }),
  lock: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M7 11V7a5 5 0 0110 0v4" })
  ] }),
  eye: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "3" })
  ] }),
  "eye-off": /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19M14.12 14.12a3 3 0 11-4.24-4.24" }),
    /* @__PURE__ */ e("path", { d: "M1 1l22 22" })
  ] }),
  refresh: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M23 4v6h-6M1 20v-6h6" }),
    /* @__PURE__ */ e("path", { d: "M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" })
  ] }),
  calendar: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }),
    /* @__PURE__ */ e("path", { d: "M16 2v4M8 2v4M3 10h18" })
  ] }),
  clock: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M12 6v6l4 2" })
  ] }),
  "check-circle": /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M22 11.08V12a10 10 0 11-5.93-9.14" }),
    /* @__PURE__ */ e("path", { d: "M22 4L12 14.01l-3-3" })
  ] }),
  "x-circle": /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M15 9l-6 6M9 9l6 6" })
  ] }),
  shield: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  globe: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e("path", { d: "M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" })
  ] }),
  file: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" }),
    /* @__PURE__ */ e("path", { d: "M14 2v6h6M16 13H8M16 17H8M10 9H8" })
  ] }),
  folder: /* @__PURE__ */ e("path", { d: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" }),
  home: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }),
    /* @__PURE__ */ e("path", { d: "M9 22V12h6v10" })
  ] }),
  key: /* @__PURE__ */ e(u, { children: /* @__PURE__ */ e("path", { d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" }) }),
  link: /* @__PURE__ */ c(u, { children: [
    /* @__PURE__ */ e("path", { d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" }),
    /* @__PURE__ */ e("path", { d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" })
  ] })
}, Fn = y(function({ name: t, size: n = 16, strokeWidth: s = 2, className: l, ...o }, i) {
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
      strokeWidth: s,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      ...o,
      children: $e[t]
    }
  );
}), ke = "_stat_17lcz_1", Ne = "_label_17lcz_8", je = "_row_17lcz_16", ze = "_value_17lcz_22", Be = "_delta_17lcz_28", qe = "_success_17lcz_33", Le = "_danger_17lcz_37", He = "_neutral_17lcz_41", Ie = "_hint_17lcz_45", M = {
  stat: ke,
  label: Ne,
  row: je,
  value: ze,
  delta: Be,
  success: qe,
  danger: Le,
  neutral: He,
  hint: Ie
}, Pn = y(function({ label: t, value: n, delta: s, deltaTone: l = "neutral", hint: o, className: i, ...d }, _) {
  return /* @__PURE__ */ c("div", { ref: _, className: [M.stat, i].filter(Boolean).join(" "), ...d, children: [
    /* @__PURE__ */ e("div", { className: M.label, children: t }),
    /* @__PURE__ */ c("div", { className: M.row, children: [
      /* @__PURE__ */ e("div", { className: M.value, children: n }),
      s != null && /* @__PURE__ */ e("div", { className: [M.delta, M[l]].join(" "), children: s })
    ] }),
    o != null && /* @__PURE__ */ e("div", { className: M.hint, children: o })
  ] });
}), Ve = "_wrap_1x8tx_1", Ce = "_table_1x8tx_8", Te = "_start_1x8tx_40", Se = "_center_1x8tx_44", Ee = "_end_1x8tx_48", Ae = "_empty_1x8tx_52", B = {
  wrap: Ve,
  table: Ce,
  start: Te,
  center: Se,
  end: Ee,
  empty: Ae
};
function Rn({ columns: a, rows: t, rowKey: n, empty: s, className: l }) {
  return /* @__PURE__ */ c("div", { className: [B.wrap, l].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ c("table", { className: B.table, children: [
      /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: a.map((o) => /* @__PURE__ */ e(
        "th",
        {
          className: o.align != null ? B[o.align] : void 0,
          scope: "col",
          children: o.header
        },
        o.key
      )) }) }),
      /* @__PURE__ */ e("tbody", { children: t.map((o) => /* @__PURE__ */ e("tr", { children: a.map((i) => /* @__PURE__ */ e(
        "td",
        {
          className: i.align != null ? B[i.align] : void 0,
          children: i.render != null ? i.render(o) : o[i.key]
        },
        i.key
      )) }, n(o))) })
    ] }),
    t.length === 0 && s != null && /* @__PURE__ */ e("div", { className: B.empty, children: s })
  ] });
}
const De = "_emptyState_1ilgs_1", Ke = "_icon_1ilgs_11", Fe = "_title_1ilgs_16", Pe = "_description_1ilgs_22", Re = "_action_1ilgs_28", q = {
  emptyState: De,
  icon: Ke,
  title: Fe,
  description: Pe,
  action: Re
};
function Wn({ icon: a, title: t, description: n, action: s, className: l }) {
  return /* @__PURE__ */ c("div", { className: [q.emptyState, l].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ e("div", { className: q.icon, children: a }),
    /* @__PURE__ */ e("div", { className: q.title, children: t }),
    n != null && /* @__PURE__ */ e("div", { className: q.description, children: n }),
    s != null && /* @__PURE__ */ e("div", { className: q.action, children: s })
  ] });
}
const We = "_field_1i47m_1", Oe = "_label_1i47m_8", Ue = "_required_1i47m_14", Ge = "_hint_1i47m_19", Je = "_error_1i47m_24", L = {
  field: We,
  label: Oe,
  required: Ue,
  hint: Ge,
  error: Je
};
function On({ label: a, htmlFor: t, required: n, hint: s, error: l, children: o, className: i }) {
  const d = H(), _ = H(), r = l != null ? d : s != null ? _ : null, m = G(o) && r != null ? J(
    o,
    {
      "aria-describedby": [
        o.props["aria-describedby"],
        r
      ].filter((h) => typeof h == "string").join(" ") || void 0,
      "aria-invalid": l != null ? !0 : o.props["aria-invalid"]
    }
  ) : o;
  return /* @__PURE__ */ c("div", { className: [L.field, i].filter(Boolean).join(" "), children: [
    a != null && /* @__PURE__ */ c("label", { className: L.label, htmlFor: t, children: [
      a,
      n === !0 && /* @__PURE__ */ e("span", { className: L.required, "aria-hidden": "true", children: "*" })
    ] }),
    m,
    l != null ? /* @__PURE__ */ e("div", { id: d, className: L.error, role: "alert", children: l }) : s != null ? /* @__PURE__ */ e("div", { id: _, className: L.hint, children: s }) : null
  ] });
}
const Qe = "_label_twicg_1", Xe = {
  label: Qe
}, Un = y(
  function({ className: t, children: n, ...s }, l) {
    return /* @__PURE__ */ e("label", { ref: l, className: [Xe.label, t].filter(Boolean).join(" "), ...s, children: n });
  }
), Ye = "_input_1ju3m_1", Ze = "_invalid_1ju3m_30", et = "_sm_1ju3m_36", tt = "_md_1ju3m_41", K = {
  input: Ye,
  invalid: Ze,
  sm: et,
  md: tt
}, Gn = y(function({ size: t = "md", invalid: n = !1, className: s, ...l }, o) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: o,
      className: [K.input, K[t], n ? K.invalid : null, s].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...l
    }
  );
}), nt = "_select_sn5nh_1", at = "_invalid_sn5nh_32", st = "_sm_sn5nh_38", lt = "_md_sn5nh_43", F = {
  select: nt,
  invalid: at,
  sm: st,
  md: lt
}, Jn = y(function({ size: t = "md", invalid: n = !1, options: s, children: l, className: o, ...i }, d) {
  return /* @__PURE__ */ e(
    "select",
    {
      ref: d,
      className: [F.select, F[t], n ? F.invalid : null, o].filter(Boolean).join(" "),
      "aria-invalid": n || void 0,
      ...i,
      children: s != null ? s.map((_) => /* @__PURE__ */ e("option", { value: _.value, disabled: _.disabled, children: _.label }, _.value)) : l
    }
  );
}), ot = "_checkbox_sx3bj_1", it = {
  checkbox: ot
}, Qn = y(function({ className: t, ...n }, s) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: s,
      type: "checkbox",
      className: [it.checkbox, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), ct = {
  switch: "_switch_1lrk0_1"
}, Xn = y(function({ className: t, ...n }, s) {
  return /* @__PURE__ */ e(
    "input",
    {
      ref: s,
      type: "checkbox",
      role: "switch",
      className: [ct.switch, t].filter(Boolean).join(" "),
      ...n
    }
  );
}), rt = "_trigger_4qzmh_1", dt = "_tooltip_4qzmh_7", _t = "_top_4qzmh_34", ht = "_right_4qzmh_40", ut = "_bottom_4qzmh_46", pt = "_left_4qzmh_52", mt = "_arrow_4qzmh_58", T = {
  trigger: rt,
  tooltip: dt,
  "se-tooltip-in": "_se-tooltip-in_4qzmh_1",
  top: _t,
  right: ht,
  bottom: ut,
  left: pt,
  arrow: mt
};
function Yn({
  content: a,
  children: t,
  placement: n = "top",
  delayMs: s = 300,
  className: l
}) {
  const o = H(), i = A(null), [d, _] = I(!1), r = () => {
    i.current = window.setTimeout(() => _(!0), s);
  }, m = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null), _(!1);
  };
  Q(() => {
    if (!d) return;
    const f = (g) => {
      g.key === "Escape" && m();
    };
    return window.addEventListener("keydown", f), () => window.removeEventListener("keydown", f);
  }, [d]);
  const h = G(t) ? J(
    t,
    {
      "aria-describedby": [
        t.props["aria-describedby"],
        d ? o : null
      ].filter((f) => typeof f == "string").join(" ") || void 0
    }
  ) : t;
  return /* @__PURE__ */ c(
    "span",
    {
      className: [T.trigger, l].filter(Boolean).join(" "),
      onMouseEnter: r,
      onMouseLeave: m,
      onFocus: r,
      onBlur: m,
      children: [
        h,
        d && /* @__PURE__ */ c(
          "span",
          {
            role: "tooltip",
            id: o,
            className: [T.tooltip, T[n]].filter(Boolean).join(" "),
            children: [
              a,
              /* @__PURE__ */ e("span", { className: T.arrow, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}
const ft = "_dialog_1ji7h_1", gt = "_sm_1ji7h_30", vt = "_md_1ji7h_34", yt = "_lg_1ji7h_38", bt = "_header_1ji7h_42", xt = "_title_1ji7h_51", wt = "_description_1ji7h_58", Mt = "_close_1ji7h_65", $t = "_body_1ji7h_84", kt = "_footer_1ji7h_90", x = {
  dialog: ft,
  "se-dialog-in": "_se-dialog-in_1ji7h_1",
  sm: gt,
  md: vt,
  lg: yt,
  header: bt,
  title: xt,
  description: wt,
  close: Mt,
  body: $t,
  footer: kt
};
function Zn({
  open: a,
  onClose: t,
  title: n,
  description: s,
  children: l,
  footer: o,
  size: i = "md",
  className: d
}) {
  const _ = A(null);
  return Q(() => {
    const r = _.current;
    r && (a && !r.open ? r.showModal() : !a && r.open && r.close());
  }, [a]), /* @__PURE__ */ c(
    "dialog",
    {
      ref: _,
      className: [x.dialog, x[i], d].filter(Boolean).join(" "),
      onClose: t,
      "aria-labelledby": "se-dialog-title",
      "aria-describedby": s ? "se-dialog-desc" : void 0,
      children: [
        n && /* @__PURE__ */ c("header", { className: x.header, children: [
          /* @__PURE__ */ c("div", { children: [
            /* @__PURE__ */ e("h2", { id: "se-dialog-title", className: x.title, children: n }),
            s && /* @__PURE__ */ e("p", { id: "se-dialog-desc", className: x.description, children: s })
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
const Nt = "_viewport_3d2q7_1", jt = "_toast_3d2q7_13", zt = "_info_3d2q7_39", Bt = "_success_3d2q7_43", qt = "_warning_3d2q7_47", Lt = "_danger_3d2q7_51", Ht = "_content_3d2q7_55", It = "_title_3d2q7_60", Vt = "_description_3d2q7_66", Ct = "_dismiss_3d2q7_73", $ = {
  viewport: Nt,
  toast: jt,
  "se-toast-in": "_se-toast-in_3d2q7_1",
  info: zt,
  success: Bt,
  warning: qt,
  danger: Lt,
  content: Ht,
  title: It,
  description: Vt,
  dismiss: Ct
}, X = Z(null);
function ea() {
  const a = Y(X);
  if (!a)
    throw new Error("useToast must be used within a <ToastProvider>");
  return a;
}
function ta({
  children: a,
  durationMs: t = 4e3,
  className: n
}) {
  const [s, l] = I([]), o = A(0), i = O((r) => {
    l((m) => m.filter((h) => h.id !== r));
  }, []), d = O(
    (r) => {
      const m = ++o.current, h = {
        id: m,
        title: r.title ?? "",
        description: r.description,
        tone: r.tone ?? "info",
        durationMs: r.durationMs ?? t
      };
      l((f) => [...f, h]), h.durationMs > 0 && window.setTimeout(() => i(m), h.durationMs);
    },
    [t, i]
  ), _ = R(() => ({ toast: d }), [d]);
  return /* @__PURE__ */ c(X.Provider, { value: _, children: [
    a,
    /* @__PURE__ */ e(
      "div",
      {
        className: [$.viewport, n].filter(Boolean).join(" "),
        "aria-live": "polite",
        "aria-atomic": "false",
        children: s.map((r) => /* @__PURE__ */ c(
          "div",
          {
            role: "status",
            className: [$.toast, $[r.tone]].filter(Boolean).join(" "),
            children: [
              /* @__PURE__ */ c("div", { className: $.content, children: [
                /* @__PURE__ */ e("div", { className: $.title, children: r.title }),
                r.description && /* @__PURE__ */ e("div", { className: $.description, children: r.description })
              ] }),
              /* @__PURE__ */ e(
                "button",
                {
                  type: "button",
                  className: $.dismiss,
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
const Tt = "_alert_1y1n2_1", St = "_info_1y1n2_12", Et = "_success_1y1n2_17", At = "_warning_1y1n2_22", Dt = "_danger_1y1n2_27", Kt = "_content_1y1n2_32", Ft = "_title_1y1n2_37", Pt = "_body_1y1n2_42", Rt = "_dismiss_1y1n2_48", N = {
  alert: Tt,
  info: St,
  success: Et,
  warning: At,
  danger: Dt,
  content: Kt,
  title: Ft,
  body: Pt,
  dismiss: Rt
};
function na({
  tone: a = "info",
  title: t,
  children: n,
  dismissible: s = !1,
  className: l
}) {
  const [o, i] = I(!1);
  return o ? null : /* @__PURE__ */ c(
    "div",
    {
      role: "alert",
      className: [N.alert, N[a], l].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ c("div", { className: N.content, children: [
          t && /* @__PURE__ */ e("div", { className: N.title, children: t }),
          n && /* @__PURE__ */ e("div", { className: N.body, children: n })
        ] }),
        s && /* @__PURE__ */ e(
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
function aa({
  variant: a = "text",
  width: t,
  height: n,
  className: s
}) {
  const l = {};
  return t !== void 0 && (l.width = typeof t == "number" ? `${t}px` : t), n !== void 0 && (l.height = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": "true",
      className: [U.skeleton, U[a], s].filter(Boolean).join(" "),
      style: l
    }
  );
}
const Jt = "_track_1j6pv_1", Qt = "_bar_1j6pv_10", Xt = "_primary_1j6pv_18", Yt = "_success_1j6pv_22", Zt = "_warning_1j6pv_26", en = "_danger_1j6pv_30", tn = "_indeterminate_1j6pv_34", S = {
  track: Jt,
  bar: Qt,
  primary: Xt,
  success: Yt,
  warning: Zt,
  danger: en,
  indeterminate: tn,
  "se-progress-slide": "_se-progress-slide_1j6pv_1"
};
function sa({
  value: a = 0,
  max: t = 100,
  tone: n = "primary",
  indeterminate: s = !1,
  className: l,
  ...o
}) {
  const i = t > 0 ? Math.min(t, Math.max(0, a)) : 0, d = t > 0 ? i / t * 100 : 0;
  return /* @__PURE__ */ e(
    "div",
    {
      role: "progressbar",
      "aria-valuenow": s ? void 0 : Math.round(i),
      "aria-valuemin": 0,
      "aria-valuemax": t,
      className: [
        S.track,
        S[n],
        s ? S.indeterminate : null,
        l
      ].filter(Boolean).join(" "),
      ...o,
      children: /* @__PURE__ */ e(
        "div",
        {
          className: S.bar,
          style: s ? void 0 : { width: `${d}%` }
        }
      )
    }
  );
}
const nn = "_avatar_h5xoe_1", an = "_sm_h5xoe_12", sn = "_md_h5xoe_17", ln = "_lg_h5xoe_22", on = "_initials_h5xoe_27", cn = "_image_h5xoe_42", rn = "_status_h5xoe_49", dn = "_online_h5xoe_59", _n = "_offline_h5xoe_63", hn = "_away_h5xoe_67", j = {
  avatar: nn,
  sm: an,
  md: sn,
  lg: ln,
  initials: on,
  image: cn,
  status: rn,
  online: dn,
  offline: _n,
  away: hn
}, E = ["#2563eb", "#7c3aed", "#059669", "#d97706", "#dc2626", "#0ea5e9"];
function un(a) {
  return a.split(/\s+/).filter(Boolean).slice(0, 2).map((t) => t[0]?.toUpperCase() ?? "").join("");
}
function pn(a) {
  let t = 0;
  for (let n = 0; n < a.length; n += 1)
    t = t * 31 + a.charCodeAt(n) >>> 0;
  return E[t % E.length] ?? E[0];
}
function la({
  name: a,
  src: t,
  alt: n,
  size: s = "md",
  status: l,
  className: o
}) {
  const i = R(() => a ? un(a) : "?", [a]), d = R(() => a ? pn(a) : E[0], [a]), _ = t ? /* @__PURE__ */ e("img", { className: j.image, src: t, alt: n ?? a ?? "" }) : /* @__PURE__ */ e("span", { "aria-hidden": "true", className: j.initials, style: { background: d }, children: i });
  return /* @__PURE__ */ c(
    "span",
    {
      className: [
        j.avatar,
        j[s],
        l ? j[l] : null,
        o
      ].filter(Boolean).join(" "),
      role: "img",
      "aria-label": n ?? a ?? "avatar",
      children: [
        _,
        l && /* @__PURE__ */ e("span", { className: j.status, "aria-hidden": "true" })
      ]
    }
  );
}
const mn = "_root_1k1gx_1", fn = "_tabList_1k1gx_6", gn = "_underline_1k1gx_12", vn = "_pills_1k1gx_16", yn = "_tab_1k1gx_6", bn = "_active_1k1gx_36", xn = "_disabled_1k1gx_50", wn = "_panel_1k1gx_64", k = {
  root: mn,
  tabList: fn,
  underline: gn,
  pills: vn,
  tab: yn,
  active: bn,
  disabled: xn,
  panel: wn
};
function oa({
  items: a,
  value: t,
  defaultValue: n,
  onChange: s,
  variant: l = "underline",
  className: o
}) {
  const i = H(), d = A(null), [_, r] = I(n ?? a[0]?.key ?? ""), m = t ?? _, h = (p) => {
    r(p), s?.(p);
  }, f = (p) => {
    const v = a.filter((V) => !V.disabled), W = v.findIndex((V) => V.key === m);
    let w = -1;
    p.key === "ArrowRight" ? w = (W + 1) % v.length : p.key === "ArrowLeft" ? w = (W - 1 + v.length) % v.length : p.key === "Home" ? w = 0 : p.key === "End" && (w = v.length - 1), w >= 0 && (p.preventDefault(), d.current?.querySelector(
      `[data-tab-key="${CSS.escape(v[w]?.key ?? "")}"]`
    )?.focus(), h(v[w]?.key ?? ""));
  }, g = a.find((p) => p.key === m);
  return /* @__PURE__ */ c("div", { className: [k.root, o].filter(Boolean).join(" "), children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: d,
        role: "tablist",
        className: [k.tabList, k[l]].filter(Boolean).join(" "),
        onKeyDown: f,
        children: a.map((p) => {
          const v = p.key === m;
          return /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              role: "tab",
              id: `${i}-tab-${p.key}`,
              "data-tab-key": p.key,
              "aria-selected": v,
              "aria-controls": `${i}-panel-${p.key}`,
              tabIndex: v ? 0 : -1,
              disabled: p.disabled,
              className: [
                k.tab,
                v ? k.active : null,
                p.disabled ? k.disabled : null
              ].filter(Boolean).join(" "),
              onClick: () => h(p.key),
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
        className: k.panel,
        children: g.content
      }
    )
  ] });
}
const Mn = "_root_1rcwz_1", $n = "_item_1rcwz_9", kn = "_heading_1rcwz_13", Nn = "_trigger_1rcwz_17", jn = "_disabled_1rcwz_34", zn = "_title_1rcwz_48", Bn = "_chevron_1rcwz_52", qn = "_open_1rcwz_59", Ln = "_content_1rcwz_63", b = {
  root: Mn,
  item: $n,
  heading: kn,
  trigger: Nn,
  disabled: jn,
  title: zn,
  chevron: Bn,
  open: qn,
  content: Ln
};
function ia({
  items: a,
  multiple: t = !1,
  value: n,
  defaultValue: s,
  onChange: l,
  className: o
}) {
  const i = H(), [d, _] = I(s ?? []), r = n ?? d, m = (h) => {
    const f = r.includes(h) ? r.filter((g) => g !== h) : t ? [...r, h] : [h];
    _(f), l?.(f);
  };
  return /* @__PURE__ */ e("div", { className: [b.root, o].filter(Boolean).join(" "), children: a.map((h) => {
    const f = r.includes(h.key), g = `${i}-panel-${h.key}`, p = `${i}-trigger-${h.key}`;
    return /* @__PURE__ */ c("div", { className: b.item, children: [
      /* @__PURE__ */ e("h3", { className: b.heading, children: /* @__PURE__ */ c(
        "button",
        {
          type: "button",
          id: p,
          "aria-expanded": f,
          "aria-controls": g,
          disabled: h.disabled,
          className: [
            b.trigger,
            h.disabled ? b.disabled : null
          ].filter(Boolean).join(" "),
          onClick: () => m(h.key),
          children: [
            /* @__PURE__ */ e("span", { className: b.title, children: h.title }),
            /* @__PURE__ */ e("span", { className: [b.chevron, f ? b.open : null].filter(Boolean).join(" "), "aria-hidden": "true", children: "▾" })
          ]
        }
      ) }),
      /* @__PURE__ */ e(
        "div",
        {
          id: g,
          role: "region",
          "aria-labelledby": p,
          hidden: !f,
          className: b.content,
          children: h.content
        }
      )
    ] }, h.key);
  }) });
}
const Hn = "_textarea_t3a4a_1", In = "_sm_t3a4a_24", Vn = "_md_t3a4a_28", Cn = "_lg_t3a4a_32", P = {
  textarea: Hn,
  sm: In,
  md: Vn,
  lg: Cn,
  "resize-none": "_resize-none_t3a4a_36",
  "resize-vertical": "_resize-vertical_t3a4a_40",
  "resize-horizontal": "_resize-horizontal_t3a4a_44",
  "resize-both": "_resize-both_t3a4a_48"
}, ca = y(function({ size: t = "md", resize: n = "none", className: s, ...l }, o) {
  return /* @__PURE__ */ e(
    "textarea",
    {
      ref: o,
      className: [
        P.textarea,
        P[t],
        P[`resize-${n}`],
        s
      ].filter(Boolean).join(" "),
      ...l
    }
  );
});
export {
  ia as Accordion,
  na as Alert,
  la as Avatar,
  Dn as Badge,
  En as Button,
  An as Card,
  Qn as Checkbox,
  Zn as Dialog,
  Wn as EmptyState,
  On as Field,
  Fn as Icon,
  Gn as Input,
  Un as Label,
  sa as Progress,
  Jn as Select,
  aa as Skeleton,
  Pn as Stat,
  Xn as Switch,
  Rn as Table,
  oa as Tabs,
  ca as Textarea,
  ta as ToastProvider,
  Yn as Tooltip,
  Kn as iconNames,
  ea as useToast
};
