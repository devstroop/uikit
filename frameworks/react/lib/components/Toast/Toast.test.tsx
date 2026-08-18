import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ToastProvider, useToast } from "./Toast";

function ToastTester({ message = "Saved!" }: { message?: string }) {
  const { toast } = useToast();
  return (
    <button type="button" onClick={() => toast({ title: message, tone: "success" })}>
      Fire
    </button>
  );
}

describe("Toast", () => {
  it("exposes toast via useToast and renders the notification", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester />
      </ToastProvider>,
    );
    expect(screen.queryByText("Saved!")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Fire" }));
    expect(screen.getByText("Saved!")).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders description and dismisses on button click", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    await user.click(screen.getByRole("button", { name: "Dismiss notification" }));
    expect(screen.queryByText("Saved!")).not.toBeInTheDocument();
  });

  it("throws when useToast is used outside the provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ToastTester />)).toThrow(
      "useToast must be used within a <ToastProvider>",
    );
    spy.mockRestore();
  });
});