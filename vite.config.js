import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2015",
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "universal-font-picker",
      fileName: (format) => `universal-font-picker.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames(chunk) {
          if (chunk.name === "style.css") {
            return "universal-font-picker.css";
          }
          return chunk.name || "";
        },
      },
    },
  },
});
