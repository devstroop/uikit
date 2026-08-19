import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Row } from "./Row";

describe("Row", () => {
  it("renders a div with the row class and default wrap", () => {
    const { container } = render(<Row>content</Row>);
    const element = container.firstElementChild;
    expect(element?.tagName).toBe("DIV");
    expect(element?.className).toContain("row");
    expect(element?.className).not.toContain("noWrap");
  });

  it("applies align and justify modifier classes", () => {
    const { container } = render(<Row align="center" justify="between" />);
    const element = container.firstElementChild;
    expect(element?.className).toContain("center");
    expect(element?.className).toContain("justify-between");
  });

  it("turns numeric gap into px and passes strings through", () => {
    const { container, rerender } = render(<Row gap={24} />);
    expect(container.firstElementChild?.getAttribute("style")).toContain("gap: 24px");
    rerender(<Row gap="2rem" />);
    expect(container.firstElementChild?.getAttribute("style")).toContain("gap: 2rem");
  });

  it("maps xs–xl gap tiers to token classes", () => {
    const { container, rerender } = render(<Row gap="sm" />);
    const element = container.firstElementChild as HTMLElement;
    expect(element.className).toContain("gapSm");
    expect(element.getAttribute("style")).toBeNull();
    rerender(<Row gap="xl" />);
    expect((container.firstElementChild as HTMLElement).className).toContain("gapXl");
  });

  it("applies no-wrap when wrap is false", () => {
    const { container } = render(<Row wrap={false} />);
    expect(container.firstElementChild?.className).toContain("noWrap");
  });

  it("spreads attributes onto the div", () => {
    const { container } = render(<Row id="r1" aria-label="row" />);
    const element = container.firstElementChild;
    expect(element?.getAttribute("id")).toBe("r1");
    expect(element?.getAttribute("aria-label")).toBe("row");
  });
});