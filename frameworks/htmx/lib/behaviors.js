/**
 * uikit-htmx behaviors — tiny, dependency-free enhancements that HTML
 * cannot express. All hooks are data-se-* attributes; htmx attributes
 * remain available for server-driven swaps.
 *
 * Components:
 *   Tabs        [data-se-tabs] ARIA tabs: click, arrows, Home/End
 *   Accordion   [data-se-accordion] (data-se-accordion-multiple for multi)
 *   Tooltip     [data-se-tooltip] hover/focus, Escape, aria-describedby
 *   Dialog      <dialog data-se-dialog> + [data-se-dialog-open="#id"]
 *   Toast       [data-se-toast] container + window.seToast(options)
 *   Dismiss     [data-se-dismiss] removes the closest [data-se-dismissable]
 *   Interactive [data-se-interactive] Enter/Space dispatch click
 *   Sidebar     [data-se-sidebar-toggle="#id"] toggles --collapsed on the
 *               target sidebar and mirrors aria-expanded on the trigger;
 *               [data-se-sidebar-mask="#id"] closes the target drawer
 *               (Escape closes any open drawer)
 *   Theme       [data-se-theme-switch] flips data-theme on <html>
 */

(function () {
  "use strict";

  function on(selector, event, handler) {
    document.addEventListener(event, (e) => {
      const target = e.target instanceof Element ? e.target.closest(selector) : null;
      if (target) handler(target, e);
    });
  }

  /* ---------------- Tabs ---------------- */

  function activateTab(tab) {
    const root = tab.closest("[data-se-tabs]");
    if (!root) return;
    const key = tab.getAttribute("data-se-tab-key");
    root.querySelectorAll("[data-se-tab]").forEach((t) => {
      const active = t === tab;
      t.classList.toggle("se-tabs-tab--active", active);
      t.setAttribute("aria-selected", String(active));
      t.tabIndex = active ? 0 : -1;
    });
    root.querySelectorAll("[data-se-tabpanel]").forEach((panel) => {
      panel.hidden = panel.getAttribute("data-se-tab-key") !== key;
    });
  }

  on("[data-se-tab]", "click", (tab) => {
    if (tab.disabled) return;
    activateTab(tab);
    tab.focus();
  });

  on("[data-se-tablist]", "keydown", (list, e) => {
    const tabs = [...list.querySelectorAll("[data-se-tab]")].filter((t) => !t.disabled);
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    let next = -1;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next >= 0) {
      e.preventDefault();
      activateTab(tabs[next]);
      tabs[next].focus();
    }
  });

  /* ---------------- Accordion ---------------- */

  function toggleAccordion(trigger) {
    const root = trigger.closest("[data-se-accordion]");
    const item = trigger.closest("[data-se-accordion-item]");
    if (!root || !item) return;
    const panel = item.querySelector("[data-se-accordion-panel]");
    if (!panel) return;
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    if (!root.hasAttribute("data-se-accordion-multiple")) {
      root.querySelectorAll("[data-se-accordion-trigger][aria-expanded='true']").forEach((t) => {
        if (t !== trigger) {
          t.setAttribute("aria-expanded", "false");
          t.closest("[data-se-accordion-item]")?.querySelector("[data-se-accordion-panel]")?.removeAttribute("open");
        }
      });
    }
    trigger.setAttribute("aria-expanded", String(!isOpen));
    if (isOpen) panel.removeAttribute("open");
    else panel.setAttribute("open", "");
  }

  on("[data-se-accordion-trigger]", "click", (trigger) => toggleAccordion(trigger));

  /* ---------------- Tooltip ---------------- */

  on("[data-se-tooltip]", "mouseenter", (root) => scheduleTooltip(root, true));
  on("[data-se-tooltip]", "mouseleave", (root) => setTooltip(root, false));
  on("[data-se-tooltip]", "focusin", (root) => scheduleTooltip(root, true));
  on("[data-se-tooltip]", "focusout", (root) => setTooltip(root, false));
  on("[data-se-tooltip]", "keydown", (root, e) => {
    if (e.key === "Escape") setTooltip(root, false);
  });

  function scheduleTooltip(root, open) {
    clearTimeout(root._seTooltipTimer);
    if (!open) return;
    const delay = Number(root.getAttribute("data-se-delay-ms") ?? 300);
    root._seTooltipTimer = setTimeout(() => setTooltip(root, true), delay);
  }

  function setTooltip(root, open) {
    clearTimeout(root._seTooltipTimer);
    const bubble = root.querySelector("[data-se-tooltip-content]");
    const trigger = root.firstElementChild;
    if (!bubble) return;
    if (open) {
      bubble.hidden = false;
      trigger?.setAttribute("aria-describedby", bubble.id || bubble.getAttribute("data-se-tooltip-id") || "");
    } else {
      bubble.hidden = true;
      trigger?.removeAttribute("aria-describedby");
    }
  }

  /* ---------------- Dialog ---------------- */

  on("[data-se-dialog-open]", "click", (trigger) => {
    const dialog = document.querySelector(trigger.getAttribute("data-se-dialog-open"));
    if (!(dialog instanceof HTMLDialogElement)) return;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    dialog._seDialogOpener = trigger;
  });

  on("[data-se-dialog-close]", "click", (button) => {
    const dialog = button.closest("dialog");
    dialog?.close();
  });

  document.addEventListener(
    "close",
    (e) => {
      const dialog = e.target instanceof Element ? e.target.closest("dialog") : null;
      if (!dialog) return;
      const opener = dialog._seDialogOpener;
      dialog._seDialogOpener = null;
      opener?.focus();
    },
    true,
  );

  /* ---------------- Toast ---------------- */

  function toastDefaults(position) {
    let container = document.querySelector("[data-se-toast]");
    if (!container) {
      container = document.createElement("div");
      container.setAttribute("data-se-toast", "");
      container.setAttribute("aria-live", "polite");
      container.className = `se-toast-viewport se-toast-viewport--${position ?? "bottom-right"}`;
      document.body.appendChild(container);
    }
    return container;
  }

  function showToast(options) {
    const container = toastDefaults(options.position);
    const item = document.createElement("div");
    item.className = `se-toast se-toast--${options.tone ?? "info"}`;
    item.setAttribute("data-se-dismissable", "");
    item.setAttribute("role", options.tone === "danger" ? "alert" : "status");
    const content = document.createElement("div");
    content.className = "se-toast-content";
    if (options.title) {
      const title = document.createElement("div");
      title.className = "se-toast-title";
      title.textContent = options.title;
      content.appendChild(title);
    }
    if (options.description) {
      const body = document.createElement("div");
      body.className = "se-toast-description";
      body.textContent = options.description;
      content.appendChild(body);
    }
    item.appendChild(content);
    const dismiss = document.createElement("button");
    dismiss.type = "button";
    dismiss.className = "se-toast-dismiss";
    dismiss.setAttribute("aria-label", "Dismiss notification");
    dismiss.setAttribute("data-se-dismiss", "");
    dismiss.textContent = "\u00d7";
    item.appendChild(dismiss);
    container.appendChild(item);
    const duration = options.durationMs ?? 5000;
    if (duration > 0) {
      setTimeout(() => item.remove(), duration);
    }
  }

  on("[data-se-dismiss]", "click", (button) => {
    button.closest("[data-se-dismissable]")?.remove();
  });

  /* ---------------- Interactive (clickable cards etc.) ---------------- */

  on("[data-se-interactive]", "keydown", (el, e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      el.click();
    }
  });

  /* ---------------- Sidebar toggle ---------------- */

  on("[data-se-sidebar-toggle]", "click", (trigger) => {
    const selector = trigger.getAttribute("data-se-sidebar-toggle");
    const target = selector
      ? document.querySelector(selector)
      : trigger.closest("[data-se-sidebar]");
    if (!target) return;
    const collapsed = target.classList.toggle("se-sidebar--collapsed");
    trigger.setAttribute("aria-expanded", String(!collapsed));
    if (selector) {
      const mask = document.querySelector(`[data-se-sidebar-mask="${selector}"]`);
      mask?.classList.toggle("se-layout-mask--hidden", collapsed);
    }
  });

  /* ---------------- Sidebar overlay mask ---------------- */

  on("[data-se-sidebar-mask]", "click", (mask) => {
    const selector = mask.getAttribute("data-se-sidebar-mask");
    const target = selector ? document.querySelector(selector) : null;
    if (!target) return;
    target.classList.add("se-sidebar--collapsed");
    mask.classList.add("se-layout-mask--hidden");
    if (selector) {
      const trigger = document.querySelector(`[aria-controls="${selector.replace(/^#/, "")}"]`);
      trigger?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document
      .querySelectorAll("[data-se-sidebar-mask]:not(.se-layout-mask--hidden)")
      .forEach((mask) => mask.click());
  });

  /* ---------------- Theme switch ---------------- */

  function initThemeSwitches() {
    document.querySelectorAll("[data-se-theme-switch]").forEach((input) => {
      input.checked = document.documentElement.dataset.theme === "dark";
    });
  }

  initThemeSwitches();
  document.addEventListener("htmx:afterSettle", initThemeSwitches);

  on("[data-se-theme-switch]", "change", (input) => {
    document.documentElement.dataset.theme = input.checked ? "dark" : "light";
  });

  /* ---------------- API ---------------- */

  window.seToast = showToast;
  window.seUikit = { tabs: { activate: activateTab } };
})();