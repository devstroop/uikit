import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Field } from "./Field";

describe("Field", () => {
  it("renders a label with htmlFor when label is provided", () => {
    render(
      <Field label="Email" htmlFor="email">
        <input id="email" />
      </Field>,
    );
    const label = screen.getByText("Email");
    expect(label.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "email");
  });

  it("clicking the label focuses the associated control", async () => {
    const user = userEvent.setup();
    render(
      <Field label="Name" htmlFor="name">
        <input id="name" />
      </Field>,
    );
    await user.click(screen.getByText("Name"));
    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("renders the required marker as aria-hidden", () => {
    render(
      <Field label="Email" required>
        <input aria-label="Email" />
      </Field>,
    );
    const marker = screen.getByText("*");
    expect(marker).toHaveAttribute("aria-hidden", "true");
  });

  it("renders error with role=alert", () => {
    render(
      <Field label="Email" error="Email is required">
        <input aria-label="Email" />
      </Field>,
    );
    const error = screen.getByRole("alert");
    expect(error).toHaveTextContent("Email is required");
  });

  it("renders hint when no error is present", () => {
    render(
      <Field label="Email" hint="We will never share it.">
        <input aria-label="Email" />
      </Field>,
    );
    expect(screen.getByText("We will never share it.")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("prefers error over hint when both are set", () => {
    render(
      <Field label="Email" hint="Some hint" error="Some error">
        <input aria-label="Email" />
      </Field>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Some error");
    expect(screen.queryByText("Some hint")).not.toBeInTheDocument();
  });

  it("does not wire aria-describedby or aria-invalid to the child control", () => {
    render(
      <Field label="Email" htmlFor="email" error="Invalid email">
        <input id="email" />
      </Field>,
    );
    const input = screen.getByRole("textbox");
    expect(input).not.toHaveAttribute("aria-describedby");
    expect(input).not.toHaveAttribute("aria-invalid");
  });

  it("renders children without a label", () => {
    const { container } = render(
      <Field>
        <input aria-label="Solo" />
      </Field>,
    );
    expect(screen.getByRole("textbox", { name: "Solo" })).toBeInTheDocument();
    expect(container.querySelector("label")).not.toBeInTheDocument();
  });
});