// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aasthafurniture.in",
  redirects: {
    "/home": "/",
    "/service/custom-furniture": "/service/custom-made-furniture",
    "/service/office-furniture": "/service/bulk-wholesale-furniture",
    "/service/furniture-repair": "/service/furniture-repair-restoration",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
