import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll } from "vitest";

import "@testing-library/jest-dom/vitest";

beforeAll(() => {
  if (typeof window !== "undefined" && !window.HTMLDialogElement.prototype.showModal) {
    window.HTMLDialogElement.prototype.showModal = function showModal() {
      this.setAttribute("open", "");
    };
    window.HTMLDialogElement.prototype.close = function close() {
      this.removeAttribute("open");
      this.dispatchEvent(new Event("close"));
    };
    Object.defineProperty(window.HTMLDialogElement.prototype, "open", {
      configurable: true,
      get() {
        return this.hasAttribute("open");
      },
    });
  }
});

afterEach(() => {
  cleanup();
});