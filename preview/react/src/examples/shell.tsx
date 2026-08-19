import { useState } from "react";
import { Body, Button, Column, Footer, Header, Layout, Row, Sidebar } from "@devstroop/react-ui";
import { Section } from "./section";

export function ShellExamples() {
  return (
    <>
      <GridSection />
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
          <span style={{ color: "var(--se-color-text-muted)" }}>© 2026 Example</span>
        </Footer>
      </Layout>
      <Layout
        style={{
          width: "100%",
          minHeight: 320,
          marginTop: 16,
          border: "1px dashed var(--se-color-border)",
          borderRadius: "var(--se-radius-md)",
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