import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tooltip } from "./Tooltip";

describe("Tooltip", () => {
  it("shows on hover with role=tooltip", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
    await user.hover(screen.getByRole("button"));
    expect(await screen.findByRole("tooltip")).toHaveTextContent("More info");
  });

  it("hides on unhover", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByRole("button");
    await user.hover(button);
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    await user.unhover(button);
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(),
    );
  });

  it("wires aria-describedby to the trigger when open", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByRole("button");
    await user.hover(button);
    const tooltip = await screen.findByRole("tooltip");
    expect(button).toHaveAttribute("aria-describedby", tooltip.id);
  });

  it("preserves a consumer-supplied aria-describedby on the trigger", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button" aria-describedby="hint-id">
          Hover me
        </button>
      </Tooltip>,
    );
    const button = screen.getByRole("button");
    await user.hover(button);
    const tooltip = await screen.findByRole("tooltip");
    expect(button).toHaveAttribute("aria-describedby", `hint-id ${tooltip.id}`);
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="More info" delayMs={0}>
        <button type="button">Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByRole("button");
    await user.hover(button);
    expect(await screen.findByRole("tooltip")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("tooltip")).not.toBeInTheDocument(),
    );
  });
});