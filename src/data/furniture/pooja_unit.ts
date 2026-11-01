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
  textImageContent: {
    eyebrow: "A SPACE FOR WORSHIP",
    heading: "A Peaceful Place for Everyday Prayer",
    description:
      "Create a welcoming place for prayer at home with a thoughtfully crafted pooja unit. Explore designs that bring together a calm, graceful appearance and the care of quality furniture making.",
    image: {
      src: "/images/furniture/pooja-mandap/pooja-mandap.webp",
      alt: "Wooden pooja unit for a peaceful prayer space",
    },
    features: [
      {
        heading: "Made for Your Home",
        description:
          "Choose a design that feels at home in your space and complements your interior.",
      },
      {
        heading: "Thoughtful Craftsmanship",
        description:
          "Careful attention to the details, materials, and finish of each piece.",
      },
      {
        heading: "A Place for Daily Rituals",
        description:
          "Create a dedicated setting for prayer and reflection in your home.",
      },
    ],
  },
  gallery: [],
} as const satisfies FurnitureCategory;

export default poojaFurniture;
