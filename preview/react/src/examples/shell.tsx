import { useState } from "react";
import {
  Body,
  Button,
  Column,
  Footer,
  Header,
  Layout,
  Mask,
  Numeric,
  Password,
  Row,
  Sidebar,
  Stack,
  Textbox,
} from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function ShellExamples() {
  return (
    <>
      <GridSection />
      <StackSection />
      <UtilitiesSection />
      <TokenSamplesSection />
      <TextInputsSection />
      <AppShellSection />
    </>
  );
}

function GridSection() {
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
        <Row justify="center">
          <Column size={2} className="grid-cell">
            2
          </Column>
          <Column size={2} className="grid-cell">
            2
          </Column>
        </Row>
        <Row justify="end">
          <Column size={3} className="grid-cell">
            end
          </Column>
        </Row>
        <Row align="center" style={{ minHeight: 96 }}>
          <Column size={4} className="grid-cell">
            align
          </Column>
          <Column size={4} className="grid-cell" style={{ paddingBlock: 24 }}>
            center
          </Column>
          <Column size={4} className="grid-cell">
            row
          </Column>
        </Row>
        <Row>
          <Column size={12} className="grid-cell">
            <Row>
              <Column size={6} className="grid-cell">
                nested
              </Column>
              <Column size={6} className="grid-cell">
                rows
              </Column>
            </Row>
          </Column>
        </Row>
        <Row gap={8}>
          <Column size={4} className="grid-cell">
            gap-8
          </Column>
          <Column size={4} className="grid-cell">
            px
          </Column>
          <Column size={4} className="grid-cell">
            gutter
          </Column>
        </Row>
        <Row gap="sm">
          <Column size={4} className="grid-cell">
            gap sm
          </Column>
          <Column size={4} className="grid-cell">
            space-2
          </Column>
          <Column size={4} className="grid-cell">
            (8 px)
          </Column>
        </Row>
        <Row gap="xl">
          <Column size={4} className="grid-cell">
            gap xl
          </Column>
          <Column size={4} className="grid-cell">
            space-5
          </Column>
          <Column size={4} className="grid-cell">
            (24 px)
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
        <Row wrap="wrap-reverse" justify="space-between" rowGap="md" style={{ minHeight: 72 }}>
          <Column size={3} className="grid-cell">
            wrap-reverse
          </Column>
          <Column size={3} className="grid-cell">
            space-between
          </Column>
          <Column size={3} className="grid-cell">
            rowGap md
          </Column>
        </Row>
        <Row>
          <Column size={4} className="grid-cell">
            order default
          </Column>
          <Column size={4} orderSm="last" className="grid-cell">
            orderSm last
          </Column>
          <Column size={4} className="grid-cell">
            third
          </Column>
        </Row>
        <Row>
          <Column sizeXxl={6} className="grid-cell">
            sizeXxl 6 (≥ 2560px)
          </Column>
          <Column sizeXxl={6} className="grid-cell">
            sizeXxl 6
          </Column>
        </Row>
      </div>
    </Section>
  );
}

function StackSection() {
  return (
    <Section title="Stack">
      <div className="layout-grid">
        <Stack orientation="vertical" gap="md">
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>
            Stack vertical · gap md
          </div>
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>
            Item 2
          </div>
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>
            Item 3
          </div>
        </Stack>
        <Stack orientation="horizontal" wrap="wrap-reverse" justify="space-between" gap="sm">
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>A</div>
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>B</div>
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>C</div>
        </Stack>
        <Stack orientation="horizontal" reverse align="center" gap="lg">
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "0.5rem" }}>
            First (renders right)
          </div>
          <div style={{ border: "1px solid var(--dt-color-border)", padding: "1rem" }}>Second</div>
        </Stack>
      </div>
    </Section>
  );
}

function UtilitiesSection() {
  return (
    <Section title="Utilities">
      <div className="layout-grid">
        <div className="dt-display-flex" style={{ gap: "0.5rem" }}>
          <span className="dt-display-block u-cell">block</span>
          <span className="dt-display-flex u-cell">flex</span>
          <span className="dt-display-grid u-cell">grid</span>
        </div>
        <div className="dt-display-flex dt-justify-content-space-between dt-align-items-center" style={{ minHeight: 64 }}>
          <span className="u-cell">start</span>
          <span className="u-cell">middle</span>
          <span className="u-cell">end</span>
        </div>
        <div className="dt-overflow-auto u-cell" style={{ maxHeight: 64 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </div>
        <div className="dt-w-50 u-cell">.dt-w-50</div>
        <div className="dt-w-fit-content u-cell">.dt-w-fit-content</div>
        <div className="dt-max-w-50 u-cell">.dt-max-w-50</div>
        <div className="dt-h-25 u-cell">.dt-h-25</div>
        <div className="dt-display-flex dt-display-md-block dt-w-100 dt-w-md-50 u-cell">
          block at ≥ 768px · width 100% below / 50% from md
        </div>
      </div>
    </Section>
  );
}

function TokenSamplesSection() {
  const tones = ["primary", "secondary", "info", "success", "warning", "danger"] as const;
  return (
    <Section title="Border / outline tokens">
      <div className="layout-grid">
        <div className="dt-display-flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          {tones.map((tone) => (
            <span
              key={tone}
              className="u-cell"
              style={{ border: `2px solid var(--dt-color-border-${tone})` }}
            >
              border-{tone}
            </span>
          ))}
        </div>
        <div className="dt-display-flex" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
          {tones.map((tone) => (
            <span
              key={tone}
              className="u-cell"
              style={{ border: `2px dashed var(--dt-color-outline-${tone})` }}
            >
              outline-{tone}
            </span>
          ))}
        </div>
        <p style={{ fontSize: "var(--dt-font-size-sm)", color: "var(--dt-color-text-muted)" }}>
          Focus-visible rings on tonal controls use <code>outline-*</code> tokens (button/secondary →
          outline-secondary, etc.). All border/outline tokens hold ≥ 3:1 vs bg/surface (WCAG 1.4.11).
        </p>
      </div>
    </Section>
  );
}

function TextInputsSection() {
  const [qty, setQty] = useState<number | null>(3);
  return (
    <Section title="Text inputs · Textbox · Password · Mask · Numeric" className="dt-form-grid">
      <div>
        <strong>Textbox</strong>
        <Textbox placeholder="sm" size="sm" aria-label="Textbox sm" />
        <Textbox placeholder="md" aria-label="Textbox md" />
        <Textbox placeholder="lg" size="lg" aria-label="Textbox lg" />
        <Textbox placeholder="Invalid" invalid aria-label="Textbox invalid" />
        <Textbox placeholder="Disabled" disabled aria-label="Textbox disabled" />
      </div>
      <div>
        <strong>Password</strong>
        <Password placeholder="sm" size="sm" aria-label="Password sm" />
        <Password placeholder="md" aria-label="Password md" />
        <Password placeholder="lg" size="lg" aria-label="Password lg" />
        <Password placeholder="Invalid" invalid aria-label="Password invalid" />
        <Password placeholder="Disabled" disabled aria-label="Password disabled" />
      </div>
      <div>
        <strong>Mask</strong>
        <Mask mask="(###) ###-####" placeholder="(123) 456-7890" aria-label="Phone" />
        <Mask mask="##/##/####" placeholder="MM/DD/YYYY" size="sm" aria-label="Date" />
        <Mask mask="###-##-####" placeholder="123-45-6789" aria-label="SSN" />
      </div>
      <div>
        <strong>Numeric</strong>
        <Numeric
          aria-label="Quantity"
          value={qty}
          min={0}
          max={10}
          onChange={setQty}
        />
        <Numeric
          aria-label="Rating"
          defaultValue={3}
          min={0}
          max={5}
          step={1}
          size="sm"
        />
        <Numeric
          aria-label="Step 5"
          defaultValue={0}
          min={0}
          step={5}
          placeholder="steps of 5"
        />
        <Numeric aria-label="Disabled" defaultValue={2} disabled />
      </div>
    </Section>
  );
}

function AppShellSection() {
  const [expanded, setExpanded] = useState(true);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  return (
    <Section title="App Shell · Layout · Header · Sidebar · Body · Footer">
      <Layout
        style={{
          width: "100%",
          minHeight: 420,
          border: "1px dashed var(--dt-color-border)",
          borderRadius: "var(--dt-radius-md)",
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
        <Sidebar id="shell-sidebar" aria-label="App shell navigation" expanded={expanded} responsive>
          <nav aria-label="Demo navigation">
            <ul className="shell-nav">
              {["Dashboard", "Users", "Settings"].map((item, index) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    size="sm"
                    style={{ width: "100%", justifyContent: "flex-start" }}
                    aria-current={index === 0 ? "page" : undefined}
                  >
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
          <span style={{ color: "var(--dt-color-text-muted)" }}>© 2026 Example</span>
        </Footer>
      </Layout>
      <Layout
        style={{
          width: "100%",
          minHeight: 320,
          marginTop: 16,
          border: "1px dashed var(--dt-color-border)",
          borderRadius: "var(--dt-radius-md)",
          overflow: "hidden",
        }}
      >
        <Header aria-label="Drawers header">
          <span style={{ fontWeight: 600 }}>Overlay drawers</span>
          <span style={{ flexGrow: 1 }} />
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setLeftOpen(!leftOpen)}
            aria-expanded={leftOpen}
            aria-controls="drawer-left"
          >
            {leftOpen ? "Close left" : "Open left"}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setRightOpen(!rightOpen)}
            aria-expanded={rightOpen}
            aria-controls="drawer-right"
          >
            {rightOpen ? "Close right" : "Open right"}
          </Button>
        </Header>
        <Body as="div" aria-label="Drawers body">
          <Row>
            <Column size={12} className="grid-cell">
              Body content — drawers overlay this from either edge. Escape or the mask closes them.
            </Column>
          </Row>
        </Body>
        <Sidebar
          id="drawer-left"
          position="left"
          overlay
          expanded={leftOpen}
          onClose={() => setLeftOpen(false)}
          aria-label="Left drawer navigation"
        >
          <nav aria-label="Left drawer demo navigation">
            <ul className="shell-nav">
              {["Inbox", "Sent", "Archive"].map((item) => (
                <li key={item}>
                  <Button variant="ghost" size="sm" style={{ width: "100%", justifyContent: "flex-start" }}>
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </Sidebar>
        <Sidebar
          id="drawer-right"
          position="right"
          overlay
          expanded={rightOpen}
          onClose={() => setRightOpen(false)}
          aria-label="Right drawer navigation"
        >
          <nav aria-label="Right drawer demo navigation">
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
      </Layout>
    </Section>
  );
}