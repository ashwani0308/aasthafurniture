import type { FurnitureCategory } from "../furniture.ts";

const diningRoomFurniture = {
  slug: "dining-room",
  title: "Dining Room Furniture",
  description:
    "Create a welcoming dining space with thoughtfully crafted furniture designed for everyday meals and special gatherings.",
  cardImage: "/images/furniture/dining-room.webp",
  hero: {
    image: "/images/furniture/dining-room.webp",
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Dining Room Furniture",
    description:
      "Discover dining furniture that brings people together in comfort and style.",
  },
  textImageContent: {
    eyebrow: "MADE FOR GATHERING",
    heading: "Beautifully Crafted. Made to Bring People Together.",
    description:
      "Your dining space is where everyday meals become meaningful moments. From inviting dining tables and comfortable chairs to practical crockery units and bar cabinets, our furniture is designed to balance style, functionality, and lasting value. By manufacturing our furniture ourselves and selling directly, we aim to offer quality craftsmanship without unnecessary middlemen.",
    image: {
      src: "/images/furniture/dining_room/dining_tables.webp",
      alt: "Thoughtfully crafted wooden dining table",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Dining furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Gathering",
        description:
          "Furniture suited to family meals, celebrations, and everyday living.",
      },
      {
        heading: "Quality Craftsmanship",
        description:
          "Careful attention to construction, materials, and finishing details.",
      },
      {
        heading: "Factory-Direct Value",
        description:
          "Buy directly from the manufacturer for value without unnecessary middlemen.",
      },
    ],
  },
  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Find the Right Dining Furniture",
    description:
      "Explore dining tables, chairs, and storage pieces crafted for your home and lifestyle.",
    primaryButton: {
      label: "View Collection",
      href: "/gallery",
    },
    secondaryButton: {
      label: "Call Now",
      href: "tel:+919999999999",
    },
  },
  gallery: [
    {
      src: "/images/furniture/dining_room/dining_tables.webp",
      alt: "Dining table",
    },
    {
      src: "/images/furniture/dining_room/4_seater_dining_sets.webp",
      alt: "Four-seater dining set",
    },
    {
      src: "/images/furniture/dining_room/6_seater_dining_sets.webp",
      alt: "Six-seater dining set",
    },
    {
      src: "/images/furniture/dining_room/8_seater_dining_sets.webp",
      alt: "Eight-seater dining set",
    },
    {
      src: "/images/furniture/dining_room/dining_chairs.webp",
      alt: "Dining chairs",
    },
    {
      src: "/images/furniture/dining_room/crockery_units.webp",
      alt: "Crockery unit",
    },
    {
      src: "/images/furniture/dining_room/bar_cabinets.webp",
      alt: "Bar cabinet",
    },
  ],
} as const satisfies FurnitureCategory;

export default diningRoomFurniture;
