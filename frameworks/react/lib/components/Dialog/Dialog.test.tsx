import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("is hidden when closed and visible when open", () => {
    const { rerender } = render(
      <Dialog open={false} onClose={() => {}} title="Settings" />,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    rerender(<Dialog open={true} onClose={() => {}} title="Settings" />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("renders title, description, and footer content", () => {
    render(
      <Dialog
        open
        onClose={() => {}}
        title="Settings"
        description="Tune your preferences"
        footer={<button type="button">Save</button>}
      >
        Body content
      </Dialog>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveTextContent("Settings");
    expect(dialog).toHaveTextContent("Tune your preferences");
    expect(dialog).toHaveTextContent("Body content");
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("calls onClose from the close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Dialog open onClose={onClose} title="Settings" />);
    await user.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when closed programmatically (close event)", () => {
    const onClose = vi.fn();
    const { rerender } = render(<Dialog open onClose={onClose} title="Settings" />);
    rerender(<Dialog open={false} onClose={onClose} title="Settings" />);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});