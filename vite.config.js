import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// W.S. Tungsten Korea — marketing website build config.
export default defineConfig({
  plugins: [react()],
  server: { port: 5173, open: true },
});
