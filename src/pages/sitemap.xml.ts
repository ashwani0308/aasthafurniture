import { furnitureCategories } from "../data/furniture";
import { servicePages } from "../data/services";

const pagePaths = [
  "/",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  ...furnitureCategories.map((category) => `/furniture/${category.slug}`),
  ...servicePages.map((service) => `/service/${service.slug}`),
];

export function GET() {
  const urls = pagePaths
    .map((path) => `  <url><loc>${new URL(path, import.meta.env.SITE)}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
