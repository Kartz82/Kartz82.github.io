import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Root GitHub Pages user sites use "/". Change this to "/repo-name/" for project pages.
  base: "/",
});
