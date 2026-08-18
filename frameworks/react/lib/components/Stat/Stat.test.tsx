import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stat } from "./Stat";

describe("Stat", () => {
  it("renders the label and value", () => {
    render(<Stat label="Revenue" value="$12,345" />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
    expect(screen.getByText("$12,345")).toBeInTheDocument();
  });

  it("accepts a ReactNode value", () => {
    render(<Stat label="Uptime" value={<span>99.9%</span>} />);
    expect(screen.getByText("99.9%")).toBeInTheDocument();
  });

  it("renders the delta only when provided, with neutral tone by default", () => {
    const { rerender } = render(<Stat label="Revenue" value="10" />);
    expect(screen.queryByText("+5%")).not.toBeInTheDocument();
    rerender(<Stat label="Revenue" value="10" delta="+5%" />);
    const delta = screen.getByText("+5%");
    expect(delta).toBeInTheDocument();
    expect(delta.className).toContain("delta");
    expect(delta.className).toContain("neutral");
  });

  it("applies success and danger tones to the delta", () => {
    const { rerender } = render(
      <Stat label="Revenue" value="10" delta="+5%" deltaTone="success" />,
    );
    expect(screen.getByText("+5%").className).toContain("success");
    rerender(<Stat label="Revenue" value="10" delta="-5%" deltaTone="danger" />);
    expect(screen.getByText("-5%").className).toContain("danger");
  });

  it("renders the hint when provided and omits it otherwise", () => {
    const { rerender } = render(<Stat label="Revenue" value="10" />);
    expect(screen.queryByText("vs last quarter")).not.toBeInTheDocument();
    rerender(<Stat label="Revenue" value="10" hint="vs last quarter" />);
    expect(screen.getByText("vs last quarter")).toBeInTheDocument();
  });

  it("renders label, value, delta, and hint in the documented DOM slots", () => {
    const { container } = render(
      <Stat label="Revenue" value="10" delta="+5%" hint="vs last quarter" />,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("stat");
    const label = screen.getByText("Revenue");
    const value = screen.getByText("10");
    const delta = screen.getByText("+5%");
    const hint = screen.getByText("vs last quarter");
    expect(label.parentElement).toBe(root);
    expect(value.parentElement).toBe(delta.parentElement);
    expect(hint.parentElement).toBe(root);
  });

  it("forwards props to the outer div", () => {
    render(<Stat label="Revenue" value="10" data-testid="stat" className="custom-class" />);
    expect(screen.getByTestId("stat")).toHaveClass("custom-class");
  });
});