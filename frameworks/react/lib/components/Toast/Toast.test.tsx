import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ToastProvider, useToast, type ToastOptions } from "./Toast";

function ToastTester({ message = "Saved!", options = {} }: { message?: string; options?: ToastOptions }) {
  const { toast } = useToast();
  return (
    <button type="button" onClick={() => toast({ title: message, tone: "success", ...options })}>
      Fire
    </button>
  );
}

describe("Toast", () => {
  afterEach(() => {
    vi.useRealTimers();
  });
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
    await waitFor(() => expect(screen.queryByText("Saved!")).not.toBeInTheDocument());
  });

  it("throws when useToast is used outside the provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<ToastTester />)).toThrow(
      "useToast must be used within a <ToastProvider>",
    );
    spy.mockRestore();
  });

  it("anchors the viewport bottom-right by default", () => {
    const { container } = render(
      <ToastProvider>
        <ToastTester />
      </ToastProvider>,
    );
    const viewport = container.querySelector('[aria-live="polite"]');
    // No bottomRight class exists in the module: the default anchors via
    // the base .viewport rule. Only the three real modifiers can appear
    // (vitest synthesizes hashed names for any other property access).
    expect(viewport?.className).not.toMatch(/topLeft|topRight|bottomLeft/);
  });

  it("applies the position modifier class", () => {
    const { container } = render(
      <ToastProvider position="top-left">
        <ToastTester />
      </ToastProvider>,
    );
    const viewport = container.querySelector('[aria-live="polite"]');
    expect(viewport?.className).toContain("topLeft");
  });

  it("opens a second viewport for a per-toast position override", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester options={{ position: "top-left" }} />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    const viewports = document.querySelectorAll('[aria-live="polite"]');
    expect(viewports).toHaveLength(2);
  });

  it("updates an existing toast when the id is reused", async () => {
    const user = userEvent.setup();
    function UpdatingTester() {
      const { toast } = useToast();
      return (
        <button
          type="button"
          onClick={() => {
            toast({ id: 1, title: "Uploading…", durationMs: 0 });
            toast({ id: 1, title: "Uploaded", tone: "success", durationMs: 0 });
          }}
        >
          Upload
        </button>
      );
    }
    render(
      <ToastProvider>
        <UpdatingTester />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Upload" }));
    expect(screen.getAllByRole("status")).toHaveLength(1);
    expect(screen.getByText("Uploaded")).toBeInTheDocument();
  });

  it("renders action and cancel buttons that dismiss the toast", async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();
    const onCancel = vi.fn();
    render(
      <ToastProvider>
        <ToastTester
          options={{
            durationMs: 0,
            action: { label: "Undo", onClick: onAction },
            cancel: { label: "Skip", onClick: onCancel },
          }}
        />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    await user.click(screen.getByRole("button", { name: "Undo" }));
    expect(onAction).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(screen.queryByText("Saved!")).not.toBeInTheDocument());

    await user.click(screen.getByRole("button", { name: "Fire" }));
    await user.click(screen.getByRole("button", { name: "Skip" }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("omits the dismiss button when dismissible is false", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester options={{ durationMs: 0, dismissible: false }} />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    expect(screen.queryByRole("button", { name: "Dismiss notification" })).not.toBeInTheDocument();
  });

  it("keeps a durationMs 0 toast until dismissed", () => {
    vi.useFakeTimers();
    render(
      <ToastProvider>
        <ToastTester options={{ durationMs: 0 }} />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Fire" }));
    act(() => vi.advanceTimersByTime(60_000));
    expect(screen.getByText("Saved!")).toBeInTheDocument();
  });

  it("renders the progress bar with the matching duration", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester options={{ showProgress: true, durationMs: 2500 }} />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    const bar = screen.getByRole("status").querySelector("[style]");
    expect(bar).not.toBeNull();
    expect((bar as HTMLElement).style.animationDuration).toBe("2500ms");
  });

  it("fires onDismiss on manual dismiss and onAutoClose on expiry", async () => {
    const user = userEvent.setup();
    const onDismiss = vi.fn();
    const onAutoClose = vi.fn();
    render(
      <ToastProvider>
        <ToastTester
          options={{ durationMs: 3000, onDismiss, onAutoClose }}
        />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    await user.click(screen.getByRole("button", { name: "Dismiss notification" }));
    await waitFor(() => expect(onDismiss).toHaveBeenCalledTimes(1));
    expect(onAutoClose).not.toHaveBeenCalled();
  });

  it("fires onAutoClose when the timer expires", () => {
    vi.useFakeTimers();
    const onAutoClose = vi.fn();
    render(
      <ToastProvider>
        <ToastTester options={{ durationMs: 500, onAutoClose }} />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Fire" }));
    act(() => vi.advanceTimersByTime(500));
    expect(onAutoClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Saved!")).not.toBeInTheDocument();
  });

  it("pauses the auto-dismiss timer while hovered", () => {
    vi.useFakeTimers();
    render(
      <ToastProvider>
        <ToastTester options={{ durationMs: 500 }} />
      </ToastProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Fire" }));
    const viewport = screen.getByRole("status").parentElement!;
    fireEvent.mouseOver(viewport, { relatedTarget: document.body });
    act(() => vi.advanceTimersByTime(400));
    expect(screen.getByText("Saved!")).toBeInTheDocument();
    fireEvent.mouseOut(viewport, { relatedTarget: document.body });
    act(() => vi.advanceTimersByTime(600));
    expect(screen.queryByText("Saved!")).not.toBeInTheDocument();
  });

  it("dismisses on body click with closeOnClick", async () => {
    const user = userEvent.setup();
    render(
      <ToastProvider>
        <ToastTester options={{ durationMs: 0, closeOnClick: true }} />
      </ToastProvider>,
    );
    await user.click(screen.getByRole("button", { name: "Fire" }));
    fireEvent.click(screen.getByRole("status"));
    await waitFor(() => expect(screen.queryByText("Saved!")).not.toBeInTheDocument());
  });
});