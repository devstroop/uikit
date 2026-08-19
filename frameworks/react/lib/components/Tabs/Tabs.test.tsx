import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./Tabs";

const items = [
  { key: "overview", label: "Overview", content: <p>Overview panel</p> },
  { key: "activity", label: "Activity", content: <p>Activity panel</p> },
  { key: "settings", label: "Settings", content: <p>Settings panel</p> },
];

describe("Tabs", () => {
  it("renders the tablist and active panel", () => {
    render(<Tabs items={items} defaultValue="overview" />);
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Overview" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Overview panel");
  });

  it("switches tabs on click and notifies onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Tabs items={items} defaultValue="overview" onChange={onChange} />);
    await user.click(screen.getByRole("tab", { name: "Activity" }));
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Activity panel");
    expect(onChange).toHaveBeenCalledWith("activity");
  });

  it("supports arrow-key navigation with roving tabindex", async () => {
    const user = userEvent.setup();
    render(<Tabs items={items} defaultValue="overview" />);
    const overview = screen.getByRole("tab", { name: "Overview" });
    const activity = screen.getByRole("tab", { name: "Activity" });
    overview.focus();
    await user.keyboard("{ArrowRight}");
    expect(activity).toHaveFocus();
    expect(activity).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Activity panel");
  });

  it.each(["left", "right"] as const)("uses Up/Down arrows for the %s position", async (position) => {
    const user = userEvent.setup();
    render(<Tabs items={items} defaultValue="overview" position={position} />);
    const overview = screen.getByRole("tab", { name: "Overview" });
    const activity = screen.getByRole("tab", { name: "Activity" });
    overview.focus();
    await user.keyboard("{ArrowDown}");
    expect(activity).toHaveFocus();
    expect(activity).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{ArrowUp}");
    expect(overview).toHaveFocus();
    expect(overview).toHaveAttribute("aria-selected", "true");
  });

  it("applies the position class to root and tablist", () => {
    render(<Tabs items={items} defaultValue="overview" position="bottom" />);
    expect(screen.getByRole("tablist").parentElement?.className).toContain("bottom");
    expect(screen.getByRole("tablist").className).toContain("bottom");
  });

  it("ignores disabled tabs in keyboard navigation", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        items={[
          { key: "a", label: "A", content: <p>A</p> },
          { key: "b", label: "B", content: <p>B</p>, disabled: true },
        ]}
        defaultValue="a"
      />,
    );
    screen.getByRole("tab", { name: "A" }).focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "A" })).toHaveFocus();
  });
});