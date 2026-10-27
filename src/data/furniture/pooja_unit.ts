import type { FurnitureCategory } from "../furniture.ts";

const poojaFurniture = {
  slug: "pooja-unit",
  title: "Pooja Unit",
  description:
    "Beautifully crafted pooja units designed to create a peaceful place for worship.",
  cardImage: "/images/furniture/pooja-mandap/pooja-mandap.webp",
  hero: {
    image: "/images/furniture/pooja-mandap/pooja-mandap.webp",
  },
  gallery: [
    {
      src: "/images/furniture/pooja-mandap/pooja-mandap.webp",
      alt: "Wooden pooja unit",
    },
  ],
} as const satisfies FurnitureCategory;

export default poojaFurniture;
