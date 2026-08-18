import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders a span with the children", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge.tagName).toBe("SPAN");
    expect(badge).toBeInTheDocument();
  });

  it("defaults to neutral tone and soft variant", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge.className).toContain("neutral");
    expect(badge.className).toContain("soft");
  });

  it("applies the requested tone class", () => {
    render(<Badge tone="success">Ok</Badge>);
    expect(screen.getByText("Ok").className).toContain("success");
  });

  it("applies the requested variant class", () => {
    render(<Badge variant="solid">Ok</Badge>);
    expect(screen.getByText("Ok").className).toContain("solid");
  });

  it("forwards extra props and className to the span", () => {
    render(
      <Badge aria-label="status" className="custom" data-testid="badge">
        New
      </Badge>,
    );
    const badge = screen.getByTestId("badge");
    expect(badge).toHaveAttribute("aria-label", "status");
    expect(badge.className).toContain("custom");
  });

  it("forwards a ref to the span", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Badge ref={ref}>New</Badge>);
    expect(ref.current).toBe(screen.getByText("New"));
  });
});
