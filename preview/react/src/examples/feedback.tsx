import { useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  Icon,
  Progress,
  Skeleton,
  Tooltip,
  useToast,
} from "@devstroop/react-ui";
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
  return (
    <Section title="Alert · Toast">
      <div className="layout-grid">
        <Alert tone="info" title="Heads up" icon={<Icon name="info" size={18} />}>
          A new version is available.
        </Alert>
        <Alert tone="success" title="Deployed" dismissible icon={<Icon name="check-circle" size={18} />}>
          The release is live.
        </Alert>
        <Alert tone="warning" title="Storage at 90%" icon={<Icon name="alert" size={18} />}>
          Clean up soon.
        </Alert>
        <Alert tone="danger" title="Build failed" icon={<Icon name="x-circle" size={18} />}>
          Check the pipeline logs.
        </Alert>
        <Alert variant="outline" tone="info" title="Outline" icon={<Icon name="info" size={18} />}>
          Tone border, no tint.
        </Alert>
        <Alert variant="solid" tone="success" title="Solid" icon={<Icon name="check-circle" size={18} />}>
          Tone fill, contrast text.
        </Alert>
        <Alert
          variant="solid"
          tone="danger"
          title="Solid danger"
          dismissible
          icon={<Icon name="x-circle" size={18} />}
          onDismiss={() => console.log("alert dismissed")}
        >
          Uses --se-color-danger-fg.
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
      <Tooltip content="Hover or focus me">
        <Button>Tooltip</Button>
      </Tooltip>
    </Section>
  );
}

function SkeletonProgressSection() {
  return (
    <Section title="Skeleton · Progress">
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
    </Section>
  );
}