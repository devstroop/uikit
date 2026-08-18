import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "../EmptyState/EmptyState";
import { Icon } from "../Icon/Icon";
import { Table } from "./Table";

describe("Table", () => {
  interface Row {
    id: string;
    name: string;
    status: string;
  }

  const rows: Row[] = [
    { id: "1", name: "Alpha", status: "active" },
    { id: "2", name: "Beta", status: "disabled" },
  ];

  it("renders headers and cell content", () => {
    render(
      <Table<Row>
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status", align: "end" },
        ]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    );
    expect(screen.getByRole("columnheader", { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Status" })).toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("disabled")).toBeInTheDocument();
  });

  it("uses the render function when provided", () => {
    render(
      <Table<Row>
        columns={[{ key: "name", header: "Name", render: (row) => row.name.toUpperCase() }]}
        rows={rows}
        rowKey={(row) => row.id}
      />,
    );
    expect(screen.getByText("ALPHA")).toBeInTheDocument();
  });

  it("shows the empty slot when there are no rows", () => {
    render(
      <Table<Row>
        columns={[{ key: "name", header: "Name" }]}
        rows={[]}
        rowKey={(row) => row.id}
        empty={<EmptyState title="Nothing here" />}
      />,
    );
    expect(screen.getByText("Nothing here")).toBeInTheDocument();
  });
});

describe("Icon", () => {
  it("renders an accessible-hidden svg for a known icon", () => {
    render(<Icon name="check" />);
    const svg = document.querySelector("svg");
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });

  it("accepts a custom size", () => {
    render(<Icon name="search" size={24} />);
    expect(document.querySelector("svg")).toHaveAttribute("width", "24");
  });
});