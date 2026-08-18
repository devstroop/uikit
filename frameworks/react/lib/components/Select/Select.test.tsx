import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

const options = [
  { value: "us", label: "United States" },
  { value: "eu", label: "Europe" },
];

describe("Select", () => {
  it("renders a native select with options from the options prop", () => {
    render(<Select aria-label="Region" options={options} />);
    const select = screen.getByRole("combobox", { name: "Region" });
    expect(select).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "United States" })).toHaveValue("us");
    expect(screen.getByRole("option", { name: "Europe" })).toHaveValue("eu");
  });

  it("marks an option disabled when its disabled flag is set", () => {
    render(
      <Select
        aria-label="Region"
        options={[
          { value: "us", label: "United States", disabled: true },
          { value: "eu", label: "Europe" },
        ]}
      />,
    );
    expect(screen.getByRole("option", { name: "United States" })).toBeDisabled();
    expect(screen.getByRole("option", { name: "Europe" })).not.toBeDisabled();
  });

  it("renders children when options is omitted", () => {
    render(
      <Select aria-label="Region">
        <option value="us">United States</option>
        <option value="eu">Europe</option>
      </Select>,
    );
    expect(screen.getByRole("option", { name: "Europe" })).toHaveValue("eu");
  });

  it("gives options precedence over children", () => {
    render(
      <Select aria-label="Region" options={[{ value: "a", label: "From Options" }]}>
        <option value="b">From Children</option>
      </Select>,
    );
    expect(screen.getByRole("option", { name: "From Options" })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: "From Children" })).not.toBeInTheDocument();
  });

  it("sets aria-invalid only when invalid", () => {
    const { rerender } = render(<Select aria-label="Region" options={options} />);
    expect(screen.getByRole("combobox")).not.toHaveAttribute("aria-invalid");
    rerender(<Select aria-label="Region" options={options} invalid />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies size and invalid classes", () => {
    const { rerender } = render(<Select aria-label="Region" options={options} />);
    expect(screen.getByRole("combobox").className).toContain("md");
    rerender(<Select aria-label="Region" size="sm" invalid options={options} />);
    const select = screen.getByRole("combobox");
    expect(select.className).toContain("sm");
    expect(select.className).toContain("invalid");
  });

  it("forwards native select attributes", () => {
    render(
      <Select aria-label="Region" name="region" disabled options={options} />,
    );
    const select = screen.getByRole("combobox", { name: "Region" });
    expect(select).toHaveAttribute("name", "region");
    expect(select).toBeDisabled();
  });

  it("reports the selected value through onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Select aria-label="Region" onChange={onChange} options={options} />);
    await user.selectOptions(screen.getByRole("combobox", { name: "Region" }), "eu");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("combobox", { name: "Region" })).toHaveValue("eu");
  });
});