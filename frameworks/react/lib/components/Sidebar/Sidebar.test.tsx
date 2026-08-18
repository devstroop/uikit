import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  it("renders an aside with the sidebar class, defaulting to left", () => {
    const { container } = render(<Sidebar>nav</Sidebar>);
    const element = container.querySelector("aside");
    expect(element?.tagName).toBe("ASIDE");
    expect(element?.className).toContain("sidebar");
    expect(element?.className).toContain("left");
    expect(element?.className).not.toContain("right");
    expect(element?.className).not.toContain("collapsed");
  });

  it("applies the right class for position right", () => {
    const { container } = render(<Sidebar position="right" />);
    const cls = container.querySelector("aside")?.className ?? "";
    expect(cls).toContain("right");
    expect(cls).not.toContain("left");
  });

  it("applies the collapsed class when expanded is false", () => {
    const { container } = render(<Sidebar expanded={false} />);
    expect(container.querySelector("aside")?.className).toContain("collapsed");
  });

  it("applies the responsive class when responsive is true", () => {
    const { container } = render(<Sidebar responsive />);
    expect(container.querySelector("aside")?.className).toContain("responsive");
  });

  it("applies the overlay class and global hook when overlay is true", () => {
    const { container } = render(<Sidebar overlay />);
    const cls = container.querySelector("aside")?.className ?? "";
    expect(cls).toContain("overlay");
    expect(cls).toContain("se-sidebar--overlay");
  });

  it("renders an aria-hidden mask when overlay and expanded", () => {
    const { container } = render(<Sidebar overlay />);
    const mask = container.querySelector('[aria-hidden="true"]');
    expect(mask).not.toBeNull();
  });

  it("renders no mask when overlay and collapsed", () => {
    const { container } = render(<Sidebar overlay expanded={false} />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it("renders no mask without overlay", () => {
    const { container } = render(<Sidebar />);
    expect(container.querySelector('[aria-hidden="true"]')).toBeNull();
  });

  it("calls onClose when the mask is clicked", async () => {
    const onClose = vi.fn();
    const { container } = render(<Sidebar overlay onClose={onClose} />);
    const mask = container.querySelector('[aria-hidden="true"]');
    expect(mask).not.toBeNull();
    await userEvent.click(mask as HTMLElement);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape while the drawer is open", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Sidebar overlay onClose={onClose} />);
    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("ignores Escape when the drawer is closed", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<Sidebar overlay expanded={false} onClose={onClose} />);
    await user.keyboard("{Escape}");
    expect(onClose).not.toHaveBeenCalled();
  });

  it("spreads attributes onto the element", () => {
    const { container } = render(<Sidebar id="s1" aria-label="Nav" />);
    expect(container.querySelector("aside")?.getAttribute("id")).toBe("s1");
    expect(container.querySelector("aside")?.getAttribute("aria-label")).toBe("Nav");
  });
});