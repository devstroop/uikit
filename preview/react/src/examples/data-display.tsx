import { useState } from "react";
import { Avatar, Badge, Button, Card, Column, DataFilter, DataGrid, EmptyState, Icon, Row, Stat, Table } from "@devstroop/react-uikitkit";
import { Section } from "./section";

const TONES = ["primary", "success", "warning", "danger"] as const;

export function DataDisplayExamples() {
  return (
    <>
      <TableSection />
      <DataGridSection />
      <DataFilterSection />
      <BadgeSection />
      <StatSection />
      <CardSection />
      <AvatarSection />
      <IconSection />
      <EmptyStateSection />
    </>
  );
}

function TableSection() {
  const rows = [
    { id: 1, name: "alice", role: "admin", status: "active" },
    { id: 2, name: "bob", role: "editor", status: "active" },
    { id: 3, name: "carol", role: "viewer", status: "paused" },
  ];
  return (
    <Section title="Table">
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "role", header: "Role", render: (r) => <span style={{ color: "var(--dt-color-text-muted)" }}>{r.role}</span> },
          { key: "status", header: "Status", align: "center", render: (r) => <Badge tone={r.status === "active" ? "success" : "warning"}>{r.status}</Badge> },
          { key: "actions", header: "Actions", align: "end", render: () => <Button variant="ghost" size="xs">…</Button> },
        ]}
        rows={rows}
        rowKey={(r) => String(r.id)}
      />
    </Section>
  );
}

const PEOPLE = [
  { id: 1, name: "John Carter", role: "admin", status: "active", age: 30 },
  { id: 2, name: "Jane Doe", role: "editor", status: "active", age: 25 },
  { id: 3, name: "Bob Vance", role: "viewer", status: "paused", age: 40 },
  { id: 4, name: "Alice Wong", role: "editor", status: "active", age: 22 },
  { id: 5, name: "Charlie Fox", role: "viewer", status: "paused", age: 35 },
];

function DataGridSection() {
  const [selected, setSelected] = useState<(string | number)[]>([]);
  return (
    <Section title="DataGrid">
      <DataGrid
        columns={[
          { property: "name", title: "Name", type: "string", sortable: true, frozen: true, width: "9rem" },
          { property: "age", title: "Age", type: "number", align: "center", sortable: true },
          { property: "role", title: "Role", type: "string", filterable: true },
          { property: "status", title: "Status", type: "enum", filterable: true },
        ]}
        rows={PEOPLE}
        rowKey={(r) => String(r.id)}
        allowSorting
        allowMultiColumnSorting
        showSortIndex
        allowFiltering
        allowPaging
        pageSize={3}
        pageSizeOptions={[3, 5, 10]}
        pagerPosition="TopAndBottom"
        selectionMode="Multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        showColumnPicker
        allowColumnResize
        allowColumnReorder
        ariaLabel="People grid"
        onRowClick={(r) => console.log("row", r.name)}
      />
      <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--dt-color-fg-muted)" }}>
        Selected: {selected.join(", ") || "none"}
      </p>
    </Section>
  );
}

function DataFilterSection() {
  const [filtered, setFiltered] = useState(PEOPLE);
  return (
    <Section title="DataFilter">
      <Row gap="md">
        <Column>
          <DataFilter
            properties={[
              { name: "name", title: "Name", type: "string" },
              { name: "age", title: "Age", type: "number" },
              { name: "status", title: "Status", type: "enum", values: [
                { value: "active", label: "Active" },
                { value: "paused", label: "Paused" },
              ] },
            ]}
            items={PEOPLE}
            viewChanged={(items) => setFiltered([...items])}
          />
        </Column>
        <Column>
          <Table
            columns={[
              { key: "name", header: "Name" },
              { key: "role", header: "Role" },
              { key: "age", header: "Age", align: "center" },
            ]}
            rows={filtered}
            rowKey={(r) => String(r.id)}
            empty="No rows match the filter"
          />
        </Column>
      </Row>
    </Section>
  );
}

function BadgeSection() {
  return (
    <Section title="Badge">
      {(["soft", "solid", "outline"] as const).map((v) => (
        <span key={v} style={{ display: "inline-flex", gap: 8 }}>
          {TONES.map((t) => (
            <Badge key={t} tone={t} variant={v}>
              {t}
            </Badge>
          ))}
        </span>
      ))}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
          <Badge key={s} tone="primary" size={s}>
            {s}
          </Badge>
        ))}
      </div>
    </Section>
  );
}

function StatSection() {
  return (
    <Section title="Stat">
      <div className="layout-grid">
        <Row>
          <Column>
            <Card variant="outlined">
              <Stat label="Active users" value="12,483" delta="+8.2%" hint="last 30 days" />
            </Card>
          </Column>
          <Column>
            <Card variant="outlined">
              <Stat label="Error rate" value="0.31%" delta="-0.4%" deltaTone="success" />
            </Card>
          </Column>
          <Column>
            <Card variant="outlined">
              <Stat label="Uptime" value="99.98%" deltaTone="danger" delta="-0.02%" />
            </Card>
          </Column>
        </Row>
      </div>
    </Section>
  );
}

function CardSection() {
  return (
    <Section title="Card">
      <Card header="Elevated" footer="footer">
        Box-shadow + border, the default.
      </Card>
      <Card variant="outlined" header="Outlined">
        Border only.
      </Card>
      <Card variant="interactive" header="Interactive" onClick={() => alert("card clicked")}>
        Tab to it, press Enter — keyboard operable.
      </Card>
      <Card variant="text" header="Text">
        Flat — no border, no shadow, transparent background.
      </Card>
    </Section>
  );
}

function AvatarSection() {
  return (
    <Section title="Avatar">
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Avatar name="Ada Lovelace" size="sm" />
        <Avatar name="Grace Hopper" />
        <Avatar name="Alan Turing" size="lg" />
        <Avatar name="Kathleen Booth" size="xl" />
        <Avatar name="Rebecca Birbeck" status="online" />
        <Avatar name="John Williams" status="away" />
        <Avatar name="Alice Smith" status="offline" />
      </div>
    </Section>
  );
}

function IconSection() {
  const names = ["check", "alert", "info", "search", "settings", "user", "mail", "lock", "globe", "shield", "folder", "plus"] as const;
  return (
    <Section title="Icon">
      {names.map((n) => (
        <span key={n} title={n}>
          <Icon name={n} />
        </span>
      ))}
      <div className="dt-icon-row" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((s) => (
          <span key={s} title={s}>
            <Icon name="settings" size={s} />
          </span>
        ))}
      </div>
    </Section>
  );
}

function EmptyStateSection() {
  return (
    <Section title="EmptyState">
      <EmptyState icon={<Icon name="folder" size={32} />} title="No projects yet" description="Create your first project to get started." action={<Button size="lg">New project</Button>} />
    </Section>
  );
}