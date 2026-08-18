import { useState, type ReactNode } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Dialog,
  EmptyState,
  Field,
  Icon,
  Input,
  Label,
  Progress,
  Select,
  Skeleton,
  Stat,
  Switch,
  Table,
  Tabs,
  Textarea,
  ToastProvider,
  Tooltip,
  useToast,
} from "@devstroop/react-ui";

const TONES = ["primary", "success", "warning", "danger"] as const;

function Buttons() {
  return (
    <Row title="Button">
      {(["primary", "secondary", "ghost", "danger"] as const).map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
      <Button disabled>disabled</Button>
      <Button size="sm">sm</Button>
      <Button size="lg">lg</Button>
    </Row>
  );
}

function Cards() {
  return (
    <Row title="Card">
      <Card header="Elevated" footer="footer">
        Box-shadow + border, the default.
      </Card>
      <Card variant="outlined" header="Outlined">
        Border only.
      </Card>
      <Card variant="interactive" header="Interactive" onClick={() => alert("card clicked")}>
        Tab to it, press Enter — keyboard operable.
      </Card>
    </Row>
  );
}

function Badges() {
  return (
    <Row title="Badge">
      {(["soft", "solid", "outline"] as const).map((v) => (
        <span key={v} style={{ display: "inline-flex", gap: 8 }}>
          {TONES.map((t) => (
            <Badge key={t} tone={t} variant={v}>
              {t}
            </Badge>
          ))}
        </span>
      ))}
    </Row>
  );
}

function Icons() {
  const names = ["check", "alert", "info", "search", "settings", "user", "mail", "lock", "globe", "shield"] as const;
  return (
    <Row title="Icon">
      {names.map((n) => (
        <span key={n} title={n}>
          <Icon name={n} />
        </span>
      ))}
    </Row>
  );
}

function Stats() {
  return (
    <Row title="Stat">
      <Stat label="Active users" value="12,483" delta="+8.2%" hint="last 30 days" />
      <Stat label="Error rate" value="0.31%" delta="-0.4%" deltaTone="success" />
      <Stat label="Uptime" value="99.98%" deltaTone="danger" delta="-0.02%" />
    </Row>
  );
}

function Tables() {
  const rows = [
    { id: 1, name: "alice", status: "active" },
    { id: 2, name: "bob", status: "active" },
    { id: 3, name: "carol", status: "paused" },
  ];
  return (
    <Row title="Table">
      <Table
        columns={[
          { key: "name", header: "Name" },
          { key: "status", header: "Status", align: "center", render: (r) => <Badge tone={r.status === "active" ? "success" : "warning"}>{r.status}</Badge> },
        ]}
        rows={rows}
        rowKey={(r) => String(r.id)}
      />
    </Row>
  );
}

function EmptyStates() {
  return (
    <Row title="EmptyState">
      <EmptyState icon={<Icon name="folder" size={32} />} title="No projects yet" description="Create your first project to get started." action={<Button size="sm">New project</Button>} />
    </Row>
  );
}

function FormControls() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(true);
  return (
    <Row title="Field · Label · Input · Select · Textarea · Checkbox · Switch">
      <Field label="Email" htmlFor="f-email" hint="We never share it.">
        <Input id="f-email" type="email" placeholder="you@example.com" />
      </Field>
      <Field label="Display name" htmlFor="f-name" required error="Name is required">
        <Input id="f-name" defaultValue="" />
      </Field>
      <Field label="Framework" htmlFor="f-fw">
        <Select
          id="f-fw"
          options={[
            { value: "react", label: "React" },
            { value: "htmx", label: "htmx" },
            { value: "blazor", label: "Blazor" },
          ]}
        />
      </Field>
      <Field label="Notes" htmlFor="f-notes">
        <Textarea id="f-notes" rows={3} placeholder="Anything else?" />
      </Field>
      <Label htmlFor="f-naked">Standalone label</Label>
      <Label htmlFor="f-check">
        <Checkbox id="f-check" checked={checked} onChange={() => setChecked(!checked)} />
        Subscribe to updates
      </Label>
      <Label htmlFor="f-switch">
        <Switch id="f-switch" checked={switched} onChange={() => setSwitched(!switched)} />
        Dark mode in app
      </Label>
    </Row>
  );
}

function Feedback() {
  const toast = useToast();
  return (
    <Row title="Progress · Skeleton · Alert · Toast">
      <Progress value={62} aria-label="Storage used" />
      <Progress value={140} max={100} aria-label="Tasks complete" />
      <Progress indeterminate aria-label="Downloading updates" />
      <Skeleton width={180} height={20} />
      <Alert tone="success" title="Deployed" dismissible>
        The release is live.
      </Alert>
      <Alert tone="danger" title="Build failed">
        Check the pipeline logs.
      </Alert>
      <Button onClick={() => toast.toast({ title: "Saved", description: "Changes are synced.", tone: "success" })}>
        Show toast
      </Button>
    </Row>
  );
}

function Overlays() {
  const [open, setOpen] = useState(false);
  return (
    <Row title="Dialog · Tabs · Accordion · Tooltip · Avatar">
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Confirm deletion"
        description="This cannot be undone."
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </>
        }
      >
        The workspace and all of its branches will be removed.
      </Dialog>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Tabs
        variant="pills"
        items={[
          { key: "overview", label: "Overview", content: <p>Overview content</p> },
          { key: "activity", label: "Activity", content: <p>Activity content</p> },
          { key: "settings", label: "Settings", content: <p>Settings content</p> },
        ]}
      />
      <Accordion
        multiple
        items={[
          { key: "a", title: "What is this?", content: <p>A theme playground.</p> },
          { key: "b", title: "Which systems?", content: <p>Six design systems, one token model.</p> },
        ]}
      />
      <Tooltip content="Hover or focus me">
        <Button>Tooltip</Button>
      </Tooltip>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Avatar name="Ada Lovelace" status="online" />
        <Avatar name="Grace Hopper" status="away" />
        <Avatar name="Alan Turing" status="offline" />
      </div>
    </Row>
  );
}

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row-content">{children}</div>
    </section>
  );
}

export function App() {
  return (
    <ToastProvider>
      <main>
        <Buttons />
        <Cards />
        <Badges />
        <Icons />
        <Stats />
        <Tables />
        <EmptyStates />
        <FormControls />
        <Feedback />
        <Overlays />
      </main>
    </ToastProvider>
  );
}