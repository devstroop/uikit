import { useState } from "react";
import {
  Body,
  Breadcrumb,
  Button,
  Carousel,
  Colorpicker,
  Column,
  Datepicker,
  DropZone,
  FabMenu,
  Footer,
  Header,
  Layout,
  Mask,
  Menu,
  Numeric,
  Pager,
  PanelMenu,
  Password,
  ProfileMenu,
  Splitter,
  Steps,
  Toc,
  Rating,
  Row,
  SecurityCode,
  Sidebar,
  SignaturePad,
  Slider,
  Stack,
  Textbox,
  Timespanpicker,
  Typography,
  Upload,
} from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function ShellExamples() {
  return (
    <>
      <GridSection />
      <StackSection />
      <TypographySection />
      <UtilitiesSection />
      <TokenSamplesSection />
      <TextInputsSection />
      <PickerSection />
      <SpecialInputsSection />
      <PagerSection />
      <MenuFamilySection />
      <StepsSplitterSection />
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

function TypographySection() {
  return (
    <Section title="Typography">
      <div className="layout-grid">
        <div>
          <Typography variant="display-1">Display 1 — fluid clamp() scale</Typography>
          <Typography variant="display-2">Display 2 — tighter tracking</Typography>
          <Typography variant="display-3">Display 3</Typography>
          <Typography variant="display-4">Display 4</Typography>
          <Typography variant="display-5">Display 5</Typography>
          <Typography variant="display-6">Display 6</Typography>
        </div>
        <div>
          <Typography variant="overline">Overline</Typography>
          <Typography variant="body-1">
            Body 1 — 0.875rem at 1.429 line-height. The default text style for
            paragraphs and prose across the system.
          </Typography>
          <Typography variant="body-2">
            Body 2 — same size at 1.5 line-height for relaxed reading.
          </Typography>
          <Typography variant="caption">
            Caption — 0.75rem metadata in the muted text color.
          </Typography>
        </div>
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
        <div className="dt-display-flex" style={{ gap: "1rem", flexWrap: "wrap" }}>
          <span className="dt-p-1 u-swatch">.dt-p-1 (4px)</span>
          <span className="dt-p-3 u-swatch">.dt-p-3 (12px)</span>
          <span className="dt-p-6 u-swatch">.dt-p-6 (24px)</span>
          <span className="dt-p-12 u-swatch">.dt-p-12 (48px)</span>
        </div>
        <div className="dt-display-flex" style={{ flexWrap: "wrap" }}>
          <span className="u-swatch-plain">A</span>
          <span className="dt-mx-3 u-swatch-plain">.dt-mx-3 on B</span>
          <span className="u-swatch-plain">C</span>
        </div>
        <div className="dt-mt-4 dt-mb-2 u-cell">.dt-mt-4 pushes this card down · .dt-mb-2 below</div>
        <div className="dt-mx-auto dt-w-fit-content u-cell">.dt-mx-auto centers this fit-content block</div>
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

function PickerSection() {
  const [color, setColor] = useState("#2563eb");
  const [paletteColor, setPaletteColor] = useState("#ff2800");
  return (
    <Section title="Pickers" className="dt-form-grid">
      <div>
        <strong>Datepicker</strong>
        <Datepicker ariaLabel="Datepicker md" defaultValue="2026-08-20" format="yyyy-MM-dd" allowClear />
        <Datepicker
          ariaLabel="Datepicker with time"
          defaultValue="2026-08-20 14:30"
          format="yyyy-MM-dd HH:mm"
          showTime
          showButton
          size="sm"
        />
        <Datepicker ariaLabel="Inline datepicker" defaultValue="2026-08-20" format="yyyy-MM-dd" inline />
      </div>
      <div>
        <strong>Timespanpicker</strong>
        <Timespanpicker
          ariaLabel="Timespanpicker full"
          defaultValue="1.02:30:00"
          precision="second"
          showDays
          showHours
          showMinutes
          showSeconds
        />
        <Timespanpicker
          ariaLabel="Timespanpicker hours/minutes"
          defaultValue="02:30"
          precision="minute"
          showHours
          showMinutes
          size="sm"
        />
      </div>
      <div>
        <strong>Colorpicker</strong>
        <Colorpicker
          value={color}
          onChange={setColor}
          showSaturation
          showRgba
          showPalette
          showArrow
          aria-label="Colorpicker"
        />
        <Colorpicker
          value={paletteColor}
          onChange={setPaletteColor}
          showPalette
          showButton
          size="sm"
          aria-label="Colorpicker palette"
        />
      </div>
      <div>
        <strong>Slider</strong>
        <Slider label="Volume" value={40} min={0} max={100} />
        <Slider label="Temperature" value={25} min={10} max={50} step={5} />
        <Slider
          label="Price range"
          range
          valueMin={20}
          valueMax={80}
          min={0}
          max={100}
          minLabel="Min price"
          maxLabel="Max price"
        />
        <div style={{ height: 160 }}>
          <Slider label="Vertical" value={70} min={0} max={100} orientation="vertical" />
        </div>
      </div>
      <div>
        <strong>Rating</strong>
        <Rating value={3} ariaLabel="Interactive rating" clearLabel="Clear rating" />
        <Rating value={4} readOnly ariaLabel="Readonly rating" />
      </div>
    </Section>
  );
}

function SpecialInputsSection() {
  const [code, setCode] = useState("");
  const [signature, setSignature] = useState("");
  const [uploaded, setUploaded] = useState<string[]>([]);
  const [dropped, setDropped] = useState<string[]>([]);
  return (
    <Section title="Special inputs" className="dt-form-grid">
      <div>
        <strong>SecurityCode</strong>
        <SecurityCode length={6} value={code} onChange={setCode} label="Verification code" />
        <p className="hint">Value: {code || "—"}</p>
        <SecurityCode length={4} size="sm" label="PIN" />
      </div>
      <div>
        <strong>SignaturePad</strong>
        <SignaturePad
          onChange={(v) => setSignature(v)}
          ariaLabel="Signature"
          height={120}
        />
        <p className="hint">{signature ? "Signature captured" : "Draw above"}</p>
      </div>
      <div>
        <strong>Upload</strong>
        <Upload
          url="/api/files"
          multiple
          chooseText="Choose files"
          onComplete={(name) => setUploaded((prev) => [...prev, name])}
        />
        <p className="hint">
          {uploaded.length > 0 ? `Completed: ${uploaded.join(", ")}` : "Pick a file to upload (demo endpoint)"}
        </p>
      </div>
      <div>
        <strong>DropZone</strong>
        <DropZone
          accept="image/*"
          multiple
          label="Drop images here or browse"
          onDrop={(files) => setDropped([...files].map((f) => f.name))}
        />
        <p className="hint">
          {dropped.length > 0 ? `Dropped: ${dropped.join(", ")}` : "Drag an image here"}
        </p>
      </div>
    </Section>
  );
}

function PagerSection() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
    <Section title="Pager">
      <div>
        <strong>Default</strong>
        <Pager
          count={100}
          pageSize={pageSize}
          page={page}
          onPageChange={({ page: p }) => setPage(p)}
          onPageSizeChange={setPageSize}
          pageSizeOptions={[10, 20, 50]}
          ariaLabel="Pagination default"
        />
        <p className="hint">
          Page {page} of {Math.ceil(100 / pageSize)} (pageSize {pageSize})
        </p>
      </div>
      <div>
        <strong>Many pages (ellipsis)</strong>
        <Pager
          count={1000}
          pageSize={10}
          page={5}
          pageNumbersCount={5}
          onPageChange={() => {}}
          ariaLabel="Pagination many pages"
        />
      </div>
      <div>
        <strong>Center aligned</strong>
        <Pager count={35} pageSize={10} page={2} horizontalAlign="center" onPageChange={() => {}} ariaLabel="Pagination center" />
      </div>
      <div>
        <strong>Custom summary</strong>
        <Pager
          count={42}
          pageSize={10}
          page={1}
          pagingSummaryTemplate={({ count, pageNumber, pageCount }) => `Showing ${count} items — page ${pageNumber}/${pageCount}`}
          onPageChange={() => {}}
          ariaLabel="Pagination custom summary"
        />
      </div>
    </Section>
  );
}

function MenuFamilySection() {
  const menuItems = [
    { text: "Home", value: "home", path: "/" },
    {
      text: "Products",
      value: "products",
      children: [
        { text: "Laptops", value: "laptops", path: "/products/laptops" },
        { text: "Phones", value: "phones", path: "/products/phones" },
      ],
    },
    { text: "About", value: "about", path: "/about" },
  ];
  const panelItems = [
    { text: "Dashboard", icon: "◆", value: "dash" },
    {
      text: "Settings",
      icon: "⚙",
      value: "settings",
      children: [
        { text: "Profile", value: "profile" },
        { text: "Security", value: "security" },
      ],
    },
  ];
  const profileItems = [
    { text: "Profile", path: "/profile" },
    { text: "Settings", path: "/settings" },
    { text: "Sign out", path: "/logout" },
  ];
  const fabItems = [
    { text: "Create", icon: "+", value: "create" },
    { text: "Upload", icon: "↑", value: "upload" },
  ];
  const breadcrumbItems = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/products" },
    { text: "Laptops", path: "/products/laptops" },
  ];
  return (
    <Section title="Menu family · Menu · PanelMenu · ProfileMenu · FabMenu · Breadcrumb" className="dt-form-grid">
      <div>
        <strong>Menu</strong>
        <Menu items={menuItems} ariaLabel="Demo menu" />
      </div>
      <div>
        <strong>PanelMenu</strong>
        <PanelMenu items={panelItems} ariaLabel="Demo panel menu" />
      </div>
      <div>
        <strong>ProfileMenu</strong>
        <ProfileMenu
          items={profileItems}
          trigger={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--dt-color-primary)", color: "var(--dt-color-primary-fg)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>A</span> Alice</span>}
          ariaLabel="Demo profile menu"
        />
      </div>
      <div>
        <strong>FabMenu</strong>
        <div style={{ position: "relative", height: 120, border: "1px dashed var(--dt-color-border)", borderRadius: "var(--dt-radius-md)" }}>
          <FabMenu items={fabItems} position="bottom-right" ariaLabel="Demo fab menu" />
        </div>
      </div>
      <div>
        <strong>Breadcrumb</strong>
        <Breadcrumb items={breadcrumbItems} ariaLabel="Demo breadcrumb" />
      </div>
    </Section>
  );
}

function StepsSplitterSection() {
  const [step, setStep] = useState(1);
  const carouselItems = [
    <div key="1" style={{ padding: 24, background: "var(--dt-color-surface)", border: "1px solid var(--dt-color-border)", borderRadius: "var(--dt-radius-md)" }}>Slide 1</div>,
    <div key="2" style={{ padding: 24, background: "var(--dt-color-surface)", border: "1px solid var(--dt-color-border)", borderRadius: "var(--dt-radius-md)" }}>Slide 2</div>,
    <div key="3" style={{ padding: 24, background: "var(--dt-color-surface)", border: "1px solid var(--dt-color-border)", borderRadius: "var(--dt-radius-md)" }}>Slide 3</div>,
  ];
  return (
    <Section title="Steps · Splitter · Toc · Carousel" className="dt-form-grid">
      <div>
        <strong>Steps</strong>
        <Steps
          items={[{ text: "Cart" }, { text: "Shipping" }, { text: "Payment" }, { text: "Review" }]}
          selectedIndex={step}
          onChange={setStep}
          ariaLabel="Demo steps"
        />
        <p className="hint">Active: {step + 1} of 4</p>
      </div>
      <div>
        <strong>Splitter</strong>
        <div style={{ height: 120, border: "1px solid var(--dt-color-border)", borderRadius: "var(--dt-radius-md)", overflow: "hidden" }}>
          <Splitter
            orientation="horizontal"
            panes={[
              { size: "40%", min: "20%", collapsible: true, label: "Left", children: <div style={{ padding: 12 }}>Left pane</div> },
              { size: "60%", label: "Right", children: <div style={{ padding: 12 }}>Right pane</div> },
            ]}
            ariaLabel="Demo splitter"
          />
        </div>
      </div>
      <div>
        <strong>Toc</strong>
        <Toc
          items={[
            { text: "Introduction", selector: "#toc-intro" },
            { text: "Usage", selector: "#toc-usage" },
            { text: "API", selector: "#toc-api" },
          ]}
          ariaLabel="Demo toc"
        />
      </div>
      <div>
        <strong>Carousel</strong>
        <Carousel items={carouselItems} ariaLabel="Demo carousel" showArrows showIndicators />
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