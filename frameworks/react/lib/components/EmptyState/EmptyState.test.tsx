import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("renders the title", () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("renders icon, description, and action when provided", () => {
    render(
      <EmptyState
        icon={<span data-testid="empty-icon" />}
        title="Nothing here"
        description="Try adjusting your filters."
        action={<button>Create new</button>}
      />,
    );
    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
    expect(screen.getByText("Try adjusting your filters.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Create new" })).toBeInTheDocument();
  });

  it("renders only the title slot when other slots are omitted", () => {
    const { container } = render(<EmptyState title="Only title" />);
    const root = container.firstElementChild as HTMLElement;
    const [title] = Array.from(root.children);
    expect((title as HTMLElement).className).toContain("title");
    expect(title as HTMLElement).toHaveTextContent("Only title");
  });

  it("renders slots in fixed order: icon, title, description, action", () => {
    const { container } = render(
      <EmptyState
        icon={<span>ico</span>}
        title="Title"
        description="Desc"
        action={<button>Act</button>}
      />,
    );
    const root = container.firstElementChild as HTMLElement;
    const [icon, title, description, action] = Array.from(root.children);
    expect((icon as HTMLElement).className).toContain("icon");
    expect((title as HTMLElement).className).toContain("title");
    expect((description as HTMLElement).className).toContain("description");
    expect((action as HTMLElement).className).toContain("action");
  });

  it("applies className to the container", () => {
    const { container } = render(<EmptyState title="Hi" className="custom" />);
    expect(container.firstElementChild?.className).toContain("custom");
  });

  it("keeps action content interactive", async () => {
    const user = userEvent.setup();
    render(<EmptyState title="Empty" action={<button>Refresh</button>} />);
    const button = screen.getByRole("button", { name: "Refresh" });
    expect(button).not.toBeDisabled();
    await user.click(button);
    expect(button).toBeInTheDocument();
  });
});
