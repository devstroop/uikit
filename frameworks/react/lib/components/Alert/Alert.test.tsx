import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
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
});