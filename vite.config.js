import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// W.S. Tungsten Korea — marketing website build config.
// On `vite build` the site is served from a GitHub Pages project subpath
// (https://<user>.github.io/ws-tungsten-korea/), so assets must be prefixed
// with that base. The dev server stays at root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/ws-tungsten-korea/" : "/",
  plugins: [react()],
  server: { port: 5173, open: true },
}));
