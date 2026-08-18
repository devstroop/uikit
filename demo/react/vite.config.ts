import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@devstroop/react-ui": new URL(
        "../../frameworks/react/lib/main.ts",
        import.meta.url,
      ).pathname,
    },
  },
  esbuild: {
    jsx: "automatic",
  },
});