import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders a header element with the header class", () => {
    const { container } = render(<Header>content</Header>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("HEADER");
    expect(element?.className).toContain("header");
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(<Header id="h1" aria-label="Top" />);
    expect(container.firstElementChild?.getAttribute("id")).toBe("h1");
    expect(container.firstElementChild?.getAttribute("aria-label")).toBe("Top");
  });
});