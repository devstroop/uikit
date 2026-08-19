import { useState } from "react";
import { Checkbox, Field, Input, Label, Select, Switch, Textarea } from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function FormExamples() {
  const [checked, setChecked] = useState(false);
  const [switched, setSwitched] = useState(true);
  return (
    <Section title="Field · Label · Input · Select · Textarea · Checkbox · Switch" className="dt-form-grid">
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
      <Field label="Other types" htmlFor="f-types">
        <Input id="f-password" type="password" placeholder="password" aria-label="Password" />
        <Input id="f-number" type="number" placeholder="number" defaultValue={42} aria-label="Number" />
        <Input id="f-date" type="date" aria-label="Date" />
      </Field>
      <Field label="Disabled" htmlFor="f-disabled" hint="Not editable.">
        <Input id="f-disabled" defaultValue="Locked" disabled />
        <Select id="f-disabled-select" aria-label="Disabled select" disabled options={[{ value: "locked", label: "Locked" }]} />
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
      <Label htmlFor="f-check-disabled">
        <Checkbox id="f-check-disabled" disabled />
        Disabled checkbox
      </Label>
      <Label htmlFor="f-switch-disabled">
        <Switch id="f-switch-disabled" disabled />
        Disabled switch
      </Label>
    </Section>
  );
}