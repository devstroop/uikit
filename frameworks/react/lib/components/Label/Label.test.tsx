import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Label } from "./Label";
import { Input } from "../Input/Input";

describe("Label", () => {
  it("renders a native <label> with the given text", () => {
    const { container } = render(<Label>Email</Label>);
    expect(container.querySelector("label")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("associates with a control via htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>,
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("transfers focus to the associated control on click", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>,
    );
    await user.click(screen.getByText("Email"));
    expect(screen.getByLabelText("Email")).toHaveFocus();
  });

  it("forwards LabelHTMLAttributes", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Label htmlFor="name" id="label-id" aria-describedby="hint" onClick={onClick}>
        Name
      </Label>,
    );
    const label = screen.getByText("Name");
    expect(label).toHaveAttribute("id", "label-id");
    expect(label).toHaveAttribute("aria-describedby", "hint");
    await user.click(label);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("merges a custom className", () => {
    render(<Label className="custom-class">Email</Label>);
    expect(screen.getByText("Email")).toHaveClass("custom-class");
  });
});