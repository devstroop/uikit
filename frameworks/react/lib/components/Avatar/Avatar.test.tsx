import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders initials for a two-part name", () => {
    render(<Avatar name="Jane Doe" />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Jane Doe");
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders a single initial for a one-part name", () => {
    render(<Avatar name="alice" />);
    expect(screen.getByText("A")).toBeInTheDocument();
  });

  it("renders the image when src is provided", () => {
    const { container } = render(
      <Avatar name="Jane Doe" src="https://example.com/jane.png" alt="Jane" />,
    );
    const img = container.querySelector("img");
    expect(img).toBeTruthy();
    expect(img).toHaveAttribute("src", "https://example.com/jane.png");
    expect(img).toHaveAttribute("alt", "Jane");
  });

  it("renders a status dot when status is set", () => {
    render(<Avatar name="Jane Doe" status="online" />);
    expect(screen.getByRole("img").className).toContain("online");
  });
});