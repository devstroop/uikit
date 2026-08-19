import { Avatar, Badge, Button, Card, Column, EmptyState, Icon, Row, Stat, Table } from "@devstroop/react-ui";
import { Section } from "./section";

const TONES = ["primary", "success", "warning", "danger"] as const;

export function DataDisplayExamples() {
  return (
    <>
      <TableSection />
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
    { id: 1, name: "alice", status: "active" },
    { id: 2, name: "bob", status: "active" },
    { id: 3, name: "carol", status: "paused" },
  ];
  return (
    <Section title="Table">
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status", align: "center", render: (r) => <Badge tone={r.status === "active" ? "success" : "warning"}>{r.status}</Badge> },
        ]}
        rows={rows}
        rowKey={(r) => String(r.id)}
      />
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
        <Avatar name="Rebecca Birbeck" status="online" />
        <Avatar name="John Williams" status="away" />
        <Avatar name="Alice Smith" status="offline" />
      </div>
    </Section>
  );
}

function IconSection() {
  const names = ["check", "alert", "info", "search", "settings", "user", "mail", "lock", "globe", "shield"] as const;
  return (
    <Section title="Icon">
      {names.map((n) => (
        <span key={n} title={n}>
          <Icon name={n} />
        </span>
      ))}
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