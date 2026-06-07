import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This repository is a GitHub "project" repo, so GitHub Pages serves the site
// from https://abrar0205.github.io/abrar0205/. The base path must match the
// repository name for assets to resolve correctly.
export default defineConfig({
  plugins: [react()],
  base: "/abrar0205/",
});
