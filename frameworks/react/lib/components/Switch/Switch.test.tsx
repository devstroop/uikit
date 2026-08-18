import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders as a switch input", () => {
    render(<Switch aria-label="Notifications" />);
    const input = screen.getByRole("switch", { name: "Notifications" });
    expect(input).toHaveAttribute("type", "checkbox");
  });

  it("reflects the checked state", () => {
    render(<Switch aria-label="Notifications" defaultChecked />);
    expect(screen.getByRole("switch")).toBeChecked();
  });
});