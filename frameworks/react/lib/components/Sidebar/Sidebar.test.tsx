import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("renders an aside with the sidebar class, defaulting to left", () => {
    const { container } = render(<Sidebar>nav</Sidebar>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("ASIDE");
    expect(element?.className).toContain("sidebar");
    expect(element?.className).toContain("left");
    expect(element?.className).not.toContain("right");
    expect(element?.className).not.toContain("collapsed");
  });

  it("applies the right class for position right", () => {
    const { container } = render(<Sidebar position="right" />);
    const cls = container.firstElementChild?.className ?? "";
    expect(cls).toContain("right");
    expect(cls).not.toContain("left");
  });

  it("applies the collapsed class when expanded is false", () => {
    const { container } = render(<Sidebar expanded={false} />);
    expect(container.firstElementChild?.className).toContain("collapsed");
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(<Sidebar id="s1" aria-label="Nav" />);
    expect(container.firstElementChild?.getAttribute("id")).toBe("s1");
    expect(container.firstElementChild?.getAttribute("aria-label")).toBe("Nav");
  });
});