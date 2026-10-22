import type { FurnitureCategory } from "../furniture.ts";

const poojaFurniture = {
  slug: "pooja-unit",
  title: "Pooja Unit",
  description:
    "Beautifully crafted pooja units designed to create a peaceful place for worship.",
  cardImage: "/images/furniture/pooja-mandap/pooja-mandap.jpg",
  hero: {
    image: "/images/furniture/pooja-mandap/pooja-mandap.jpg",
  },
} as const satisfies FurnitureCategory;

export default poojaFurniture;
