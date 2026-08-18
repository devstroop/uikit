/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      include: ["lib"],
      exclude: ["**/*.test.tsx", "**/*.test.d.ts"],
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    lib: {
      entry: "lib/main.ts",
      formats: ["es", "cjs"],
      cssFileName: "style",
      fileName: (format) => (format === "es" ? "main.es.js" : "main.cjs.js"),
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    cssCodeSplit: false,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});