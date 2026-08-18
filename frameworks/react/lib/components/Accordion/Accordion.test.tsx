import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Accordion } from "./Accordion";

const items = [
  { key: "one", title: "Item one", content: <p>First body</p> },
  { key: "two", title: "Item two", content: <p>Second body</p> },
];

describe("Accordion", () => {
  it("renders collapsed by default with aria-expanded=false", () => {
    render(<Accordion items={items} />);
    expect(screen.getByRole("button", { name: "Item one" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("expands on click and collapses on second click", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    const trigger = screen.getByRole("button", { name: "Item one" });
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region")).toHaveTextContent("First body");
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("keeps a single panel open when multiple is false", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    await user.click(screen.getByRole("button", { name: "Item one" }));
    await user.click(screen.getByRole("button", { name: "Item two" }));
    expect(screen.getAllByRole("region")).toHaveLength(1);
  });

  it("allows multiple panels when multiple is true", async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} multiple />);
    await user.click(screen.getByRole("button", { name: "Item one" }));
    await user.click(screen.getByRole("button", { name: "Item two" }));
    expect(screen.getAllByRole("region")).toHaveLength(2);
  });

  it("notifies onChange with the open keys", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Accordion items={items} onChange={onChange} />);
    await user.click(screen.getByRole("button", { name: "Item one" }));
    expect(onChange).toHaveBeenCalledWith(["one"]);
  });
});