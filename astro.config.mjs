import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  integrations: [react(), markdoc()],
  site: 'https://marvelle-s.github.io',
  base: '/Marvelle-Steven-Portfolio',
  output: "static",          // was "server"
  vite: {
    plugins: [tailwindcss()],
  },
});