import { render } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Icon, iconNames } from "./Icon";

describe("Icon", () => {
  it("renders an inline svg with aria-hidden and focusable=false by default", () => {
    const { container } = render(<Icon name="check" />);
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("focusable", "false");
  });

  it("applies default size (md tier), viewBox, and strokeWidth", () => {
    const { container } = render(<Icon name="check" />);
    const svg = container.querySelector("svg");
    expect(svg).not.toHaveAttribute("width");
    expect(svg).toHaveClass(/md/);
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    expect(svg).toHaveAttribute("stroke-width", "2");
  });

  it("maps size tiers to the font-size scale classes", () => {
    const { container, rerender } = render(<Icon name="user" size="xs" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(/xs/);
    rerender(<Icon name="user" size="xl" />);
    expect(container.querySelector("svg")).toHaveClass(/xl/);
  });

  it("honors numeric size and strokeWidth props", () => {
    const { container } = render(<Icon name="user" size={24} strokeWidth={1.5} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
    expect(svg).toHaveAttribute("stroke-width", "1.5");
  });

  it("renders the glyph path for the requested name", () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelectorAll("path").length).toBeGreaterThan(0);
  });

  it("allows overriding aria-hidden via props", () => {
    const { container } = render(<Icon name="info" aria-hidden={false} role="img" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "false");
    expect(svg).toHaveAttribute("role", "img");
  });

  it("forwards className and a ref to the svg", () => {
    const ref = createRef<SVGSVGElement>();
    const { container } = render(<Icon name="close" ref={ref} className="my-icon" />);
    expect(ref.current).toBe(container.querySelector("svg"));
    expect(ref.current).toHaveClass("my-icon");
  });

  it("exports 40 icon names", () => {
    expect(iconNames).toHaveLength(40);
    expect(iconNames).toContain("check");
    expect(iconNames).toContain("chevron-down");
    expect(iconNames).toContain("settings");
    expect(iconNames).toContain("link");
  });
});