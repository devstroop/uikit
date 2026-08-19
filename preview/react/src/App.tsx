import { ToastProvider } from "@devstroop/react-ui";
import { DataDisplayExamples } from "./examples/data-display";
import { FeedbackExamples } from "./examples/feedback";
import { FormExamples } from "./examples/forms";
import { MiscExamples } from "./examples/misc";
import { ShellExamples } from "./examples/shell";

export function App() {
  return (
    <ToastProvider>
      <main>
        <ShellExamples />
        <MiscExamples />
        <FormExamples />
        <DataDisplayExamples />
        <FeedbackExamples />
      </main>
    </ToastProvider>
  );
}