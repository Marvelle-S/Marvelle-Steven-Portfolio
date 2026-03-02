// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],
  site: 'https://marvelle-s.github.io',
  base: '/Marvelle-Steven-Portfolio',
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});