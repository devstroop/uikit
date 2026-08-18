import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeSwitcher } from "./ThemeSwitcher";

afterEach(() => {
  delete document.documentElement.dataset.theme;
});

describe("ThemeSwitcher", () => {
  it("defaults to light and writes the light theme", () => {
    render(<ThemeSwitcher />);
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("sets the dark theme when toggled on", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    await user.click(screen.getByRole("switch"));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("sets the light theme when toggled off", async () => {
    const user = userEvent.setup();
    render(<ThemeSwitcher />);
    await user.click(screen.getByRole("switch"));
    await user.click(screen.getByRole("switch"));
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("initializes checked from an existing dark theme", () => {
    document.documentElement.dataset.theme = "dark";
    render(<ThemeSwitcher />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("calls onChange with the new theme", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<ThemeSwitcher onChange={onChange} />);
    await user.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith("dark");
  });
});