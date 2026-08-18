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
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "150");
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
});