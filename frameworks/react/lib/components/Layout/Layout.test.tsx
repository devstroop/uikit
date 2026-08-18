import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Body } from "../Body/Body";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";
import { Layout } from "./Layout";

function layout(container: HTMLElement) {
  const root = container.firstElementChild;
  const row = root?.querySelector(":scope > div");
  const children = (node: Element | null | undefined) =>
    node ? [...node.children] : [];
  return { root, row, children: children(root), rowChildren: children(row) };
}

describe("Layout", () => {
  it("renders header above, footer below, sidebars flanking body", () => {
    const { container } = render(
      <Layout>
        <Header />
        <Sidebar />
        <Body />
        <Footer />
      </Layout>,
    );
    const { children, rowChildren } = layout(container);
    expect(children[0]?.tagName).toBe("HEADER");
    expect(children[children.length - 1]?.tagName).toBe("FOOTER");
    expect(rowChildren[0]?.tagName).toBe("ASIDE");
    expect(rowChildren[1]?.tagName).toBe("MAIN");
  });

  it("arranges sections by region, not authored order", () => {
    const { container } = render(
      <Layout>
        <Footer />
        <Body />
        <Header />
        <Sidebar />
      </Layout>,
    );
    const { children, rowChildren } = layout(container);
    expect(children[0]?.tagName).toBe("HEADER");
    expect(children[children.length - 1]?.tagName).toBe("FOOTER");
    expect(rowChildren[0]?.tagName).toBe("ASIDE");
    expect(rowChildren[1]?.tagName).toBe("MAIN");
  });

  it("places right sidebars after the body", () => {
    const { container } = render(
      <Layout>
        <Sidebar position="right" />
        <Body />
      </Layout>,
    );
    const { rowChildren } = layout(container);
    expect(rowChildren[0]?.tagName).toBe("MAIN");
    expect(rowChildren[1]?.tagName).toBe("ASIDE");
    expect(rowChildren[1]?.className).toContain("right");
  });

  it("renders a body-only layout", () => {
    const { container } = render(<Layout>{<Body>page</Body>}</Layout>);
    const { rowChildren } = layout(container);
    expect(rowChildren.length).toBe(1);
    expect(rowChildren[0]?.tagName).toBe("MAIN");
  });

  it("spreads attributes and styles onto the root div", () => {
    const { container } = render(
      <Layout id="shell" style={{ minHeight: 320 }} data-test="x" />,
    );
    const root = container.firstElementChild;
    expect(root?.getAttribute("id")).toBe("shell");
    expect(root?.getAttribute("data-test")).toBe("x");
    expect(root?.getAttribute("style")).toContain("min-height: 320px");
  });
});