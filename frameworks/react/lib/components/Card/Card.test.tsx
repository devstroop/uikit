import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Field } from "../Field/Field";
import { Input } from "../Input/Input";
import { Card } from "./Card";

describe("Card", () => {
  it("renders header, body, and footer sections", () => {
    render(
      <Card header="Title" footer="Footer">
        Body
      </Card>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("renders without header/footer when omitted", () => {
    const { container } = render(<Card>Only body</Card>);
    expect(screen.getByText("Only body")).toBeInTheDocument();
    expect(container.querySelectorAll("div")).toHaveLength(2);
  });

  it("makes the interactive variant focusable and click-activated", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const { container } = render(
      <Card variant="interactive" onClick={onClick}>
        Clickable
      </Card>,
    );
    const card = container.firstElementChild as HTMLElement;
    expect(card).toHaveAttribute("tabindex", "0");
    card.focus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledTimes(1);
    await user.keyboard(" ");
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("keeps non-interactive variants out of the tab order", () => {
    const { container } = render(<Card>Plain</Card>);
    expect(container.firstElementChild).not.toHaveAttribute("tabindex");
  });

  it.each(["elevated", "outlined", "interactive", "text"] as const)(
    "applies the %s variant class",
    (variant) => {
      const { container } = render(<Card variant={variant}>V</Card>);
      expect(container.firstElementChild?.className).toContain(variant);
    },
  );
});

describe("Field", () => {
  it("associates label with the control via htmlFor", () => {
    render(
      <Field label="Username" htmlFor="username" required hint="Pick something unique">
        <Input id="username" />
      </Field>,
    );
    expect(screen.getByText("Username")).toHaveAttribute("for", "username");
    expect(screen.getByText("Pick something unique")).toBeInTheDocument();
  });

  it("shows the error message instead of the hint", () => {
    render(
      <Field label="Email" error="Invalid address" hint="We never share it">
        <Input />
      </Field>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Invalid address");
    expect(screen.queryByText("We never share it")).not.toBeInTheDocument();
  });
});