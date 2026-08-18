import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Body } from "./Body";

describe("Body", () => {
  it("renders a main element with the body class", () => {
    const { container } = render(<Body>content</Body>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("MAIN");
    expect(element?.className).toContain("body");
  });

  it("renders a div instead of main when as is div", () => {
    const { container } = render(<Body as="div">content</Body>);
    expect(container.firstElementChild?.tagName).toBe("DIV");
    expect(container.firstElementChild?.className).toContain("body");
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(<Body id="b1" aria-label="Content" />);
    expect(container.firstElementChild?.getAttribute("id")).toBe("b1");
    expect(container.firstElementChild?.getAttribute("aria-label")).toBe("Content");
  });
});