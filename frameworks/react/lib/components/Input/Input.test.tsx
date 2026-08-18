import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders a native input with an accessible name", () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByRole("textbox", { name: "Email" })).toBeInTheDocument();
  });

  it("defaults to size=md and applies the sm size class", () => {
    const { rerender } = render(<Input />);
    expect(screen.getByRole("textbox").className).toContain("md");
    rerender(<Input size="sm" />);
    expect(screen.getByRole("textbox").className).toContain("sm");
  });

  it("sets aria-invalid only when invalid", () => {
    const { rerender } = render(<Input />);
    expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-invalid");
    rerender(<Input invalid />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies the invalid class when invalid", () => {
    render(<Input invalid />);
    expect(screen.getByRole("textbox").className).toContain("invalid");
  });

  it("forwards InputHTMLAttributes", () => {
    render(<Input type="email" placeholder="you@example.com" disabled />);
    const input = screen.getByPlaceholderText("you@example.com");
    expect(input).toHaveAttribute("type", "email");
    expect(input).toBeDisabled();
  });

  it("merges a custom className", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards typing to onChange and blocks input when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(<Input aria-label="Search" onChange={onChange} />);
    await user.type(screen.getByRole("textbox", { name: "Search" }), "abc");
    expect(onChange).toHaveBeenCalledTimes(3);
    rerender(<Input aria-label="Search" onChange={onChange} disabled />);
    await user.type(screen.getByRole("textbox", { name: "Search" }), "def");
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});