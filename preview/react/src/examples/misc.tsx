import { Accordion, Button, Tabs } from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function MiscExamples() {
  return (
    <>
      <ButtonSection />
      <TabsAccordionSection />
    </>
  );
}

function ButtonSection() {
  return (
    <Section title="Button">
      {(["primary", "secondary", "ghost", "danger", "success", "info"] as const).map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
      <Button disabled>disabled</Button>
      <Button size="sm">sm</Button>
      <Button size="lg">lg</Button>
      <Button size="xs">xs</Button>
      <Button iconOnly aria-label="Add item">+</Button>
    </Section>
  );
}

function TabsAccordionSection() {
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
      <Tabs
        position="left"
        items={[
          { key: "design", label: "Design", content: <p>Design content</p> },
          { key: "code", label: "Code", content: <p>Code content</p> },
          { key: "ship", label: "Ship", content: <p>Ship content</p> },
        ]}
      />
    </Section>
  );
}