import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Dialog,
  Icon,
  Progress,
  Skeleton,
  Tooltip,
  useToast,
} from "@devstroop/react-uikitkit";
import { Section } from "./section";

export function FeedbackExamples() {
  return (
    <>
      <AlertToastSection />
      <OverlaySection />
      <SkeletonProgressSection />
    </>
  );
}

function AlertToastSection() {
  const toast = useToast();
  const matrix = [
    { tone: "info", icon: "info", title: "Info" },
    { tone: "success", icon: "check-circle", title: "Success" },
    { tone: "warning", icon: "alert", title: "Warning" },
    { tone: "danger", icon: "x-circle", title: "Danger" },
  ] as const;
  return (
    <Section title="Alert · Toast">
      <div className="layout-grid">
        {(["soft", "outline", "solid"] as const).map((variant) => (
          <Alert
            key={variant}
            variant={variant}
            tone={variant === "solid" ? "danger" : "info"}
            title={variant}
            icon={<Icon name={variant === "solid" ? "check-circle" : "info"} size={18} />}
          >
            {variant === "soft" ? "Tone tint, default." : variant === "outline" ? "Tone border, no tint." : "Tone fill, contrast text."}
          </Alert>
        ))}
        {matrix.map(({ tone, icon, title }) => (
          <Alert key={tone} tone={tone} title={title} dismissible icon={<Icon name={icon} size={18} />}>
            {tone === "info" ? "A new version is available." : tone === "success" ? "The release is live." : tone === "warning" ? "Clean up soon." : "Check the pipeline logs."}
          </Alert>
        ))}
        <Alert
          variant="solid"
          tone="danger"
          title="Solid danger"
          dismissible
          icon={<Icon name="x-circle" size={18} />}
          onDismiss={() => console.log("alert dismissed")}
        >
          Uses --dt-color-danger-fg.
        </Alert>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <Alert key={size} size={size} tone="info" title={size} icon={<Icon name="info" size={16} />}>
            {size === "md" ? "Default tier" : `${size} padding · type · radius`}
          </Alert>
        ))}
        <div className="button-row">
          <Button onClick={() => toast.toast({ title: "Saved", description: "Changes are synced.", tone: "success" })}>
            Show toast
          </Button>
          <Button
            onClick={() =>
              toast.toast({
                title: "Item removed",
                tone: "info",
                action: { label: "Undo", onClick: () => console.log("undo") },
                cancel: { label: "Dismiss" },
                showProgress: true,
                durationMs: 6000,
              })
            }
          >
            Toast with action
          </Button>
          <Button
            onClick={() => {
              toast.toast({ title: "Building…", id: "build", durationMs: 0, tone: "info" });
              window.setTimeout(
                () =>
                  toast.toast({
                    id: "build",
                    title: "Build succeeded",
                    description: "All checks passed.",
                    tone: "success",
                  }),
                1500,
              );
            }}
          >
            Loading → success
          </Button>
          <Button
            onClick={() =>
              toast.toast({
                title: "Click me to dismiss",
                description: "Persistent, closeOnClick.",
                tone: "warning",
                durationMs: 0,
                closeOnClick: true,
                showProgress: false,
              })
            }
          >
            Persistent toast
          </Button>
          <Button
            onClick={() =>
              toast.toast({
                title: "Top-left corner",
                position: "top-left",
                durationMs: 3000,
              })
            }
          >
            Toast top-left
          </Button>
        </div>
      </div>
    </Section>
  );
}

function OverlaySection() {
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
      <div className="button-row">
        {(["top", "bottom", "left", "right"] as const).map((placement) => (
          <Tooltip key={placement} content={`${placement} tooltip`} placement={placement}>
            <Button variant="secondary">{placement}</Button>
          </Tooltip>
        ))}
        <Tooltip content="Appears after 800 ms" delayMs={800}>
          <Button variant="ghost">slow tooltip</Button>
        </Tooltip>
      </div>
    </Section>
  );
}

function SkeletonProgressSection() {
  return (
    <Section title="Skeleton · Progress">
      <Progress value={0} aria-label="Empty progress" />
      <Progress value={62} aria-label="Storage used" />
      <Progress value={100} tone="success" aria-label="Upload complete" />
      <Progress value={55} tone="warning" aria-label="Battery level" />
      <Progress value={30} tone="danger" aria-label="Errors found" />
      <Progress indeterminate aria-label="Downloading updates" />
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Progress value={62} variant="circular" aria-label="Storage used" />
        <Progress value={100} variant="circular" tone="success" aria-label="Upload complete" />
        <Progress variant="circular" indeterminate aria-label="Downloading updates" />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Progress value={60} variant="circular" size="xs" aria-label="Extra small" />
        <Progress value={60} variant="circular" size="sm" aria-label="Small" />
        <Progress value={60} variant="circular" size="md" aria-label="Medium" />
        <Progress value={60} variant="circular" size="lg" aria-label="Large" />
        <Progress value={60} variant="circular" size="xl" aria-label="Extra large" />
      </div>
      <Skeleton width={180} variant="text" />
      <Skeleton width={48} height={48} variant="circle" />
      <Skeleton width={180} height={72} variant="rect" />
      <Card variant="outlined" style={{ maxWidth: 280, width: "100%" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <Skeleton width={40} height={40} variant="circle" />
          <div style={{ flexGrow: 1 }}>
            <Skeleton width="60%" variant="text" />
            <Skeleton width="85%" variant="text" />
          </div>
        </div>
        <Skeleton width="100%" height={64} variant="rect" />
      </Card>
    </Section>
  );
}