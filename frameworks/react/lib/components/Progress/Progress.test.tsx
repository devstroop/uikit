import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders a progressbar with aria values", () => {
    render(<Progress value={40} max={100} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });

  it("clamps value to the max", () => {
    render(<Progress value={150} max={100} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "100");
  });

  it("clamps negative values to zero", () => {
    render(<Progress value={-20} max={100} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0");
  });

  it("renders indeterminate without aria-valuenow", () => {
    render(<Progress indeterminate />);
    const bar = screen.getByRole("progressbar");
    expect(bar).not.toHaveAttribute("aria-valuenow");
    expect(bar.className).toContain("indeterminate");
  });

  it("applies the tone class", () => {
    render(<Progress value={10} tone="success" />);
    expect(screen.getByRole("progressbar").className).toContain("success");
  });

  it("renders circular progress on an svg with aria values", () => {
    render(<Progress value={40} max={100} variant="circular" />);
    const bar = screen.getByRole("progressbar");
    expect(bar.tagName).toBe("svg");
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
    expect(bar.getAttribute("class")).toContain("circular");
  });

  it("computes circular dash geometry from the value (normalized 24-unit viewBox)", () => {
    render(<Progress value={50} max={100} variant="circular" size={64} />);
    const fill = document.querySelector("circle:nth-of-type(2)");
    const radius = 10.5;
    const circumference = 2 * Math.PI * radius;
    expect(fill?.getAttribute("stroke-dasharray")).toBe(`${circumference} ${circumference}`);
    expect(fill?.getAttribute("stroke-dashoffset")).toBeCloseTo(circumference * 0.5, 4);
  });

  it("maps size tiers to circular diameter classes", () => {
    const { container } = render(<Progress value={10} variant="circular" size="xl" />);
    expect(container.querySelector("svg")?.getAttribute("class")).toContain("circular-xl");
  });

  it("maps size tiers to linear thickness classes", () => {
    const { container } = render(<Progress value={10} size="lg" />);
    expect(container.querySelector("div")?.getAttribute("class")).toContain("linear-lg");
  });

  it("rotates circular indeterminate without aria-valuenow", () => {
    render(<Progress indeterminate variant="circular" />);
    const bar = screen.getByRole("progressbar");
    expect(bar).not.toHaveAttribute("aria-valuenow");
    expect(bar.getAttribute("class")).toContain("indeterminate");
  });
});