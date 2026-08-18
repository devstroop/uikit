import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders a textarea and forwards value/onChange", () => {
    const onChange = () => {};
    render(<Textarea value="hello" onChange={onChange} aria-label="Notes" />);
    expect(screen.getByLabelText("Notes")).toHaveValue("hello");
  });

  it("defaults to md size with no resize", () => {
    const { container } = render(<Textarea aria-label="Notes" />);
    const element = container.firstElementChild;
    expect(element?.className).toContain("md");
    expect(element?.className).toContain("resize-none");
  });

  it("applies size and resize classes", () => {
    const { container } = render(<Textarea size="lg" resize="vertical" aria-label="Notes" />);
    const element = container.firstElementChild;
    expect(element?.className).toContain("lg");
    expect(element?.className).toContain("resize-vertical");
  });

  it("forwards className passthrough", () => {
    render(<Textarea className="custom" aria-label="Notes" />);
    expect(screen.getByLabelText("Notes").className).toContain("custom");
  });
});