import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@devstroop/react-ui": new URL(
        "../../frameworks/react/lib/main.ts",
        import.meta.url,
      ).pathname,
      react: new URL("../../node_modules/react", import.meta.url).pathname,
      "react-dom": new URL("../../node_modules/react-dom", import.meta.url).pathname,
      "react-dom/client": new URL(
        "../../node_modules/react-dom/client",
        import.meta.url,
      ).pathname,
    },
  },
  esbuild: {
    jsx: "automatic",
  },
});