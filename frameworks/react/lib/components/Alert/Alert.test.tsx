import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role=alert and content", () => {
    render(<Alert title="Heads up">Something changed.</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Heads up");
    expect(alert).toHaveTextContent("Something changed.");
  });

  it("applies the tone class", () => {
    render(<Alert tone="danger" title="Error" />);
    expect(screen.getByRole("alert").className).toContain("danger");
  });

  it("disappears after dismissing", async () => {
    const user = userEvent.setup();
    render(<Alert title="Heads up" dismissible />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("fires onDismiss when dismissed", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    render(<Alert title="Heads up" dismissible onDismiss={onDismiss} />);
    await user.click(screen.getByRole("button", { name: "Dismiss alert" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it("applies the variant class", () => {
    render(<Alert title="Heads up" variant="solid" />);
    expect(screen.getByRole("alert").className).toContain("solid");
  });

  it.each(["xs", "sm", "md", "lg", "xl"] as const)("applies the %s size class", (size) => {
    render(<Alert title="Heads up" size={size} />);
    expect(screen.getByRole("alert").className).toContain(size);
  });

  it("renders the icon aria-hidden before the content", () => {
    render(<Alert title="Heads up" icon={<span>icon</span>} />);
    const icon = screen.getByText("icon");
    const wrapper = icon.parentElement;
    expect(wrapper).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("alert").firstElementChild).toBe(wrapper);
  });
});