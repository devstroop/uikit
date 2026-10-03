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
} from "@devstroop/react-uikit";
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
    { severity: "info", icon: "info", title: "Info" },
    { severity: "success", icon: "check_circle", title: "Success" },
    { severity: "warning", icon: "warning", title: "Warning" },
    { severity: "danger", icon: "error", title: "Danger" },
  ] as const;
  return (
    <Section title="Alert · Toast">
      <div className="layout-grid">
        {(["flat", "outlined", "filled"] as const).map((variant) => (
          <Alert
            key={variant}
            variant={variant}
            severity={variant === "filled" ? "danger" : "info"}
            title={variant}
            icon={<Icon icon={variant === "filled" ? "check_circle" : "info"} size={18} />}
          >
            {variant === "flat" ? "Severity tint, default." : variant === "outlined" ? "Severity border, no tint." : "Severity fill, contrast text."}
          </Alert>
        ))}
        {matrix.map(({ severity, icon, title }) => (
          <Alert key={severity} severity={severity} title={title} dismissible icon={<Icon icon={icon} size={18} />}>
            {severity === "info" ? "A new version is available." : severity === "success" ? "The release is live." : severity === "warning" ? "Clean up soon." : "Check the pipeline logs."}
          </Alert>
        ))}
        <Alert
          variant="filled"
          severity="danger"
          title="Filled danger"
          dismissible
          icon={<Icon icon="error" size={18} />}
          onDismiss={() => console.log("alert dismissed")}
        >
          Uses --dx-color-danger-fg.
        </Alert>
        {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
          <Alert key={size} size={size} severity="info" title={size} icon={<Icon icon="info" size={16} />}>
            {size === "md" ? "Default tier" : `${size} padding · type · radius`}
          </Alert>
        ))}
        <div className="button-row">
          <Button onClick={() => toast.toast({ title: "Saved", description: "Changes are synced.", severity: "success" })}>
            Show toast
          </Button>
          <Button
            onClick={() =>
              toast.toast({
                title: "Item removed",
                severity: "info",
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
              toast.toast({ title: "Building…", id: "build", durationMs: 0, severity: "info" });
              window.setTimeout(
                () =>
                  toast.toast({
                    id: "build",
                    title: "Build succeeded",
                    description: "All checks passed.",
                    severity: "success",
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
                severity: "warning",
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
            <Button severity="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button severity="danger" onClick={() => setOpen(false)}>
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
            <Button severity="secondary">{placement}</Button>
          </Tooltip>
        ))}
        <Tooltip content="Appears after 800 ms" delayMs={800}>
          <Button variant="text">slow tooltip</Button>
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
      <Progress value={100} severity="success" aria-label="Upload complete" />
      <Progress value={55} severity="warning" aria-label="Battery level" />
      <Progress value={30} severity="danger" aria-label="Errors found" />
      <Progress indeterminate aria-label="Downloading updates" />
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Progress value={62} variant="circular" aria-label="Storage used" />
        <Progress value={100} variant="circular" severity="success" aria-label="Upload complete" />
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