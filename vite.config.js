import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/goit_test/",
  plugins: [react()],
  server: {
    errorOverlay: true,
    clearScreen: false,
  },
});
