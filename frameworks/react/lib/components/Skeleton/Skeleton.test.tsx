import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders with text variant by default and is aria-hidden", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstElementChild).toHaveAttribute("aria-hidden", "true");
    expect(container.firstElementChild?.className).toContain("text");
  });

  it("applies variant, width, and height", () => {
    const { container } = render(<Skeleton variant="circle" width={48} height="3rem" />);
    const element = container.firstElementChild;
    expect(element?.className).toContain("circle");
    expect(element?.getAttribute("style")).toContain("width: 48px");
    expect(element?.getAttribute("style")).toContain("height: 3rem");
  });
});