// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  
  // 1. Keep these - they are correct for your URL
  site: 'https://marvelle-s.github.io',
  base: '/Marvelle-Steven-Portfolio',

  // 2. CHANGE THIS: Remove 'server' and set to 'static' (or just remove the line)
  output: "static",

  // 3. REMOVE the adapter: GitHub Pages doesn't use the Vercel adapter
  // adapter: vercel(...), 

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },
});