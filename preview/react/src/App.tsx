import { ToastProvider } from "@devstroop/react-uikitkit";
import { DataDisplayExamples } from "./examples/data-display";
import { FeedbackExamples } from "./examples/feedback";
import { FormExamples, FormContainerExamples } from "./examples/forms";
import { MiscExamples } from "./examples/misc";
import { SelectionExamples } from "./examples/selection";
import { ShellExamples } from "./examples/shell";

export function App() {
  return (
    <ToastProvider>
      <main>
        <ShellExamples />
        <MiscExamples />
        <FormExamples />
        <FormContainerExamples />
        <SelectionExamples />
        <DataDisplayExamples />
        <FeedbackExamples />
      </main>
    </ToastProvider>
  );
}