import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders a footer element with the footer class", () => {
    const { container } = render(<Footer>content</Footer>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("FOOTER");
    expect(element?.className).toContain("footer");
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(<Footer id="f1" aria-label="Site" />);
    expect(container.firstElementChild?.getAttribute("id")).toBe("f1");
    expect(container.firstElementChild?.getAttribute("aria-label")).toBe("Site");
  });
});