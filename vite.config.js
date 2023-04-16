import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://h0wter.github.io/goit_test/",
  plugins: [react()],
});
