import defaultCss from "../../../themes/default/tokens.css?inline";
import fluentCss from "../../../themes/fluent/tokens.css?inline";
import githubCss from "../../../themes/github/tokens.css?inline";
import materialCss from "../../../themes/material/tokens.css?inline";
import material3Css from "../../../themes/material-3/tokens.css?inline";
import shadcnCss from "../../../themes/shadcn/tokens.css?inline";

export interface Theme {
  id: string;
  label: string;
  css: string;
}

export const THEMES: Theme[] = [
  { id: "default", label: "Default", css: defaultCss },
  { id: "fluent", label: "Fluent 2", css: fluentCss },
  { id: "github", label: "GitHub (Primer)", css: githubCss },
  { id: "material", label: "Material 2", css: materialCss },
  { id: "material-3", label: "Material 3", css: material3Css },
  { id: "shadcn", label: "shadcn/ui", css: shadcnCss },
];