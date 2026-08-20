import { useState } from "react";
import {
  Autocomplete,
  Checkboxlist,
  Dropdown,
  Listbox,
  Radiobuttonlist,
  Selectbar,
  Splitbutton,
  Togglebutton,
} from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function SelectionExamples() {
  return (
    <>
      <DropdownSection />
      <AutocompleteSection />
      <ListboxSection />
      <CheckboxlistSection />
      <RadiobuttonlistSection />
      <SelectbarSection />
      <TogglebuttonSection />
      <SplitbuttonSection />
    </>
  );
}

const colorOptions = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "grey", label: "Grey", disabled: true },
];

function DropdownSection() {
  const [color, setColor] = useState<string | undefined>();
  return (
    <Section title="Dropdown">
      <div className="preview-grid">
        <Dropdown options={colorOptions} aria-label="Favorite color" placeholder="Pick a color" />
        <Dropdown
          options={colorOptions}
          aria-label="Controlled color"
          value={color}
          onChange={setColor}
        />
        <Dropdown
          options={colorOptions}
          aria-label="Invalid color"
          defaultValue="green"
          invalid
        />
        <Dropdown options={colorOptions} aria-label="Disabled color" defaultValue="red" disabled />
        <Dropdown options={colorOptions} aria-label="Small color" size="sm" defaultValue="blue" />
        <Dropdown options={colorOptions} aria-label="Large color" size="lg" defaultValue="green" />
      </div>
    </Section>
  );
}

function AutocompleteSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "durian", label: "Durian", disabled: true },
  ];
  return (
    <Section title="Autocomplete">
      <div className="preview-grid">
        <Autocomplete options={fruitOptions} aria-label="Pick a fruit" placeholder="Type to filter…" />
        <Autocomplete
          options={fruitOptions}
          aria-label="Fruit on select"
          onSelect={(value) => setSelected(value)}
        />
        <Autocomplete options={fruitOptions} aria-label="Invalid fruit" invalid />
        <Autocomplete options={fruitOptions} aria-label="Disabled fruit" disabled />
      </div>
      <p>Selected: {selected ?? "none"}</p>
    </Section>
  );
}

function ListboxSection() {
  const [single, setSingle] = useState<string | null>("red");
  const [multi, setMulti] = useState<string[]>(["en"]);
  const langOptions = [
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German", disabled: true },
  ];
  return (
    <Section title="Listbox">
      <div className="preview-grid">
        <Listbox
          options={colorOptions}
          aria-label="Destination"
          value={single ?? undefined}
          onChange={(v) => setSingle(v as string)}
          style={{ maxHeight: 180 }}
        />
        <Listbox
          options={langOptions}
          multiple
          aria-label="Languages"
          value={multi}
          onChange={(v) => setMulti(v as string[])}
          style={{ maxHeight: 180 }}
        />
      </div>
      <p>
        Single: {single ?? "none"} · Multiple: {multi.join(", ")}
      </p>
    </Section>
  );
}

function CheckboxlistSection() {
  const [selected, setSelected] = useState<string[]>(["email"]);
  const options = [
    { value: "email", label: "Email" },
    { value: "sms", label: "SMS" },
    { value: "push", label: "Push" },
    { value: "carrier", label: "Carrier pigeon", disabled: true },
  ];
  return (
    <Section title="Checkboxlist">
      <Checkboxlist
        legend="Notifications"
        name="notifications"
        options={options}
        value={selected}
        onChange={setSelected}
      />
      <p>Selected: {selected.join(", ") || "none"}</p>
    </Section>
  );
}

function RadiobuttonlistSection() {
  const [delivery, setDelivery] = useState<string>("standard");
  const options = [
    { value: "standard", label: "Standard (2–4 days)" },
    { value: "express", label: "Express (next day)" },
    { value: "same-day", label: "Same day" },
    { value: "drone", label: "Drone", disabled: true },
  ];
  return (
    <Section title="Radiobuttonlist">
      <Radiobuttonlist
        legend="Delivery"
        name="delivery"
        options={options}
        value={delivery}
        onChange={setDelivery}
      />
      <p>Selected: {delivery}</p>
    </Section>
  );
}

function SelectbarSection() {
  const [align, setAlign] = useState("left");
  const alignOptions = [
    { value: "left", label: "Left" },
    { value: "center", label: "Center" },
    { value: "right", label: "Right" },
  ];
  return (
    <Section title="Selectbar">
      <div className="preview-grid">
        <Selectbar options={alignOptions} aria-label="Alignment" value={align} onChange={setAlign} />
        <Selectbar
          options={[
            { value: "50", label: "50%" },
            { value: "100", label: "100%" },
            { value: "200", label: "200%", disabled: true },
          ]}
          aria-label="Zoom"
          size="sm"
          defaultValue="100"
        />
        <Selectbar options={alignOptions} aria-label="Large alignment" size="lg" defaultValue="center" />
      </div>
    </Section>
  );
}

function TogglebuttonSection() {
  const [bold, setBold] = useState(false);
  return (
    <Section title="Togglebutton">
      <div className="preview-grid">
        <Togglebutton pressed={bold} onChange={setBold} aria-label="Bold">
          Bold
        </Togglebutton>
        <Togglebutton aria-label="Small italic" size="sm">
          Italic
        </Togglebutton>
        <Togglebutton aria-label="Large underline" size="lg">
          Underline
        </Togglebutton>
        <Togglebutton aria-label="Disabled strike" disabled>
          Strike
        </Togglebutton>
      </div>
      <p>Bold: {String(bold)}</p>
    </Section>
  );
}

function SplitbuttonSection() {
  const [message, setMessage] = useState("Idle");
  const items = [
    { key: "save-as", label: "Save as…", onClick: () => setMessage("Item: save-as") },
    { key: "duplicate", label: "Duplicate", onClick: () => setMessage("Item: duplicate") },
    { key: "archive", label: "Archive", disabled: true },
    { key: "delete", label: "Delete", danger: true, onClick: () => setMessage("Item: delete") },
  ];
  return (
    <Section title="Splitbutton">
      <div className="preview-grid">
        <Splitbutton
          label="Save"
          onClick={() => setMessage("Saved")}
          items={items}
        />
        <Splitbutton label="Share" items={items} size="sm" onClick={() => setMessage("Shared")} />
        <Splitbutton label="Export" items={items} size="lg" />
        <Splitbutton label="Disabled" items={items} disabled />
      </div>
      <p>{message}</p>
    </Section>
  );
}