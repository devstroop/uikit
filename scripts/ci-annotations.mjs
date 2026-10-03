/**
 * CI annotations bridge: every `✗` error line printed by the validators
 * is mirrored as a GitHub Actions `::error::` workflow command, so
 * violations show up as file-level annotations on the PR instead of
 * being buried in job logs. No-op outside GitHub Actions.
 *
 *   import "./ci-annotations.mjs";   (side-effect module)
 */

if (process.env.GITHUB_ACTIONS) {
  const orig = console.error;
  console.error = (...args) => {
    orig(...args);
    if (typeof args[0] === "string" && args[0].includes("✗")) {
      orig(`::error::${args[0].replace(/^\s*✗\s*/, "")}`);
    }
  };
}

export {};
