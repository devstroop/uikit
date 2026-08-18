import { useState, type ReactNode } from "react";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Body,
  Button,
  Card,
  Checkbox,
  Column,
  Dialog,
  EmptyState,
  Field,
  Footer,
  Header,
  Icon,
  Input,
  Label,
  Layout,
  Progress,
  Row,
  Select,
  Sidebar,
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

function Grid() {
  return (
    <Section title="Grid · Row · Column">
      <div className="layout-grid">
        <Row>
          <Column size={12} className="grid-cell">
            12
          </Column>
        </Row>
        <Row>
          <Column size={6} className="grid-cell">
            6
          </Column>
          <Column size={6} className="grid-cell">
            6
          </Column>
        </Row>
        <Row>
          <Column size={4} className="grid-cell">
            4
          </Column>
          <Column size={4} className="grid-cell">
            4
          </Column>
          <Column size={4} className="grid-cell">
            4
          </Column>
        </Row>
        <Row>
          <Column size={12} sizeMd={6} sizeLg={3} className="grid-cell">
            12 · md-6 · lg-3
          </Column>
          <Column size={12} sizeMd={6} sizeLg={3} className="grid-cell">
            12 · md-6 · lg-3
          </Column>
          <Column size={12} sizeMd={6} sizeLg={3} className="grid-cell">
            12 · md-6 · lg-3
          </Column>
          <Column size={12} sizeMd={6} sizeLg={3} className="grid-cell">
            12 · md-6 · lg-3
          </Column>
        </Row>
        <Row>
          <Column size={4} offset={4} className="grid-cell">
            4 · offset-4
          </Column>
        </Row>
        <Row justify="between">
          <Column size={2} className="grid-cell">
            2
          </Column>
          <Column size={2} className="grid-cell">
            2
          </Column>
          <Column size={2} className="grid-cell">
            2
          </Column>
        </Row>
        <Row>
          <Column className="grid-cell">
            auto
          </Column>
          <Column className="grid-cell">
            auto
          </Column>
        </Row>
      </div>
    </Section>
  );
}

function AppShell() {
  const [expanded, setExpanded] = useState(true);
  return (
    <Section title="App Shell · Layout · Header · Sidebar · Body · Footer">
      <Layout
        style={{
          width: "100%",
          minHeight: 420,
          border: "1px dashed var(--se-color-border)",
          borderRadius: "var(--se-radius-md)",
          overflow: "hidden",
        }}
      >
        <Header aria-label="App shell header">
          <span style={{ fontWeight: 600 }}>App title</span>
          <span style={{ flexGrow: 1 }} />
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="shell-sidebar"
          >
            {expanded ? "Collapse sidebar" : "Expand sidebar"}
          </Button>
        </Header>
        <Sidebar id="shell-sidebar" aria-label="App shell navigation" expanded={expanded}>
          <nav aria-label="Demo navigation">
            <ul className="shell-nav">
              {["Dashboard", "Users", "Settings"].map((item) => (
                <li key={item}>
                  <Button variant="ghost" size="sm" style={{ width: "100%", justifyContent: "flex-start" }}>
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </Sidebar>
        <Body as="div" aria-label="App shell body">
          <Row>
            <Column size={12} sizeMd={6} className="grid-cell">
              Body content
            </Column>
            <Column size={12} sizeMd={6} className="grid-cell">
              Row/Column inside the shell
            </Column>
          </Row>
        </Body>
        <Footer aria-label="App shell footer">
          <span style={{ color: "var(--se-color-text-muted)" }}>© 2026 Example</span>
        </Footer>
      </Layout>
    </Section>
  );
}

function Buttons() {
  return (
    <Section title="Button">
      {(["primary", "secondary", "ghost", "danger"] as const).map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
      <Button disabled>disabled</Button>
      <Button size="sm">sm</Button>
      <Button size="lg">lg</Button>
    </Section>
  );
}

function FormControls() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(true);
  return (
    <Section title="Field · Label · Input · Select · Textarea · Checkbox · Switch">
      <Field label="Email" htmlFor="f-email" hint="We never share it.">
        <Input id="f-email-sm" size="sm" placeholder="small" />
        <Input id="f-email" type="email" placeholder="you@example.com" />
        <Input id="f-email-lg" size="lg" placeholder="large" />
      </Field>
      <Field label="Display name" htmlFor="f-name" required error="Name is required">
        <Input id="f-name" defaultValue="" />
      </Field>
      <Field label="Framework" htmlFor="f-fw">
        <Select
          id="f-fw-sm"
          size="sm"
          aria-label="Framework (small)"
          options={[{ value: "sm", label: "Small" }]}
        />
        <Select
          id="f-fw"
          options={[
            { value: "react", label: "React" },
            { value: "htmx", label: "htmx" },
            { value: "blazor", label: "Blazor" },
          ]}
        />
        <Select
          id="f-fw-lg"
          size="lg"
          aria-label="Framework (large)"
          options={[{ value: "lg", label: "Large" }]}
        />
      </Field>
      <Field label="Notes" htmlFor="f-notes">
        <Textarea id="f-notes-sm" size="sm" rows={2} placeholder="small" />
        <Textarea id="f-notes" rows={3} placeholder="Anything else?" />
        <Textarea id="f-notes-lg" size="lg" rows={4} placeholder="large" />
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
    </Section>
  );
}

function Tables() {
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

function Badges() {
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

function Stats() {
  return (
    <Section title="Stat">
      <Stat label="Active users" value="12,483" delta="+8.2%" hint="last 30 days" />
      <Stat label="Error rate" value="0.31%" delta="-0.4%" deltaTone="success" />
      <Stat label="Uptime" value="99.98%" deltaTone="danger" delta="-0.02%" />
    </Section>
  );
}

function Cards() {
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
    </Section>
  );
}

function Avatars() {
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

function Icons() {
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

function SkeletonProgress() {
  return (
    <Section title="Skeleton · Progress">
      <Progress value={62} aria-label="Storage used" />
      <Progress value={100} tone="success" aria-label="Upload complete" />
      <Progress value={55} tone="warning" aria-label="Battery level" />
      <Progress value={30} tone="danger" aria-label="Errors found" />
      <Progress indeterminate aria-label="Downloading updates" />
      <Skeleton width={180} variant="text" />
      <Skeleton width={48} height={48} variant="circle" />
      <Skeleton width={180} height={72} variant="rect" />
    </Section>
  );
}

function EmptyStates() {
  return (
    <Section title="EmptyState">
      <EmptyState icon={<Icon name="folder" size={32} />} title="No projects yet" description="Create your first project to get started." action={<Button size="sm">New project</Button>} />
    </Section>
  );
}

function Feedback() {
  const toast = useToast();
  return (
    <Section title="Alert · Toast">
      <Alert tone="info" title="Heads up">
        A new version is available.
      </Alert>
      <Alert tone="success" title="Deployed" dismissible>
        The release is live.
      </Alert>
      <Alert tone="warning" title="Storage at 90%">
        Clean up soon.
      </Alert>
      <Alert tone="danger" title="Build failed">
        Check the pipeline logs.
      </Alert>
      <Button onClick={() => toast.toast({ title: "Saved", description: "Changes are synced.", tone: "success" })}>
        Show toast
      </Button>
    </Section>
  );
}

function Overlays() {
  const [open, setOpen] = useState(false);
  return (
    <Section title="Dialog · Tooltip">
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
      <Tooltip content="Hover or focus me">
        <Button>Tooltip</Button>
      </Tooltip>
    </Section>
  );
}

function Navigation() {
  return (
    <Section title="Tabs · Accordion">
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
    </Section>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
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
        <Grid />
        <AppShell />
        <Buttons />
        <FormControls />
        <Tables />
        <Badges />
        <Stats />
        <Cards />
        <Avatars />
        <Icons />
        <SkeletonProgress />
        <EmptyStates />
        <Feedback />
        <Overlays />
        <Navigation />
      </main>
    </ToastProvider>
  );
}