import type { FurnitureCategory } from "../furniture.ts";

const diningRoomFurniture = {
  slug: "dining-room",
  title: "Dining Room Furniture",
  description:
    "Create a welcoming dining space with thoughtfully crafted furniture designed for everyday meals and special gatherings.",
  cardImage: "/images/furniture/dining-room.jpg",
  hero: {
    image: "/images/furniture/dining-room.jpg",
  },
  subcategorySection: {
    eyebrow: "Explore Our Collections",
    heading: "Dining Room Furniture",
    subtext:
      "Discover dining furniture that brings people together in comfort and style.",
  },
  textImageContent: {
    eyebrow: "MADE FOR GATHERING",
    heading: "Beautifully Crafted. Made to Bring People Together.",
    description:
      "Your dining space is where everyday meals become meaningful moments. From inviting dining tables and comfortable chairs to practical crockery units and bar cabinets, our furniture is designed to balance style, functionality, and lasting value. By manufacturing our furniture ourselves and selling directly, we aim to offer quality craftsmanship without unnecessary middlemen.",
    image: {
      src: "/images/furniture/dining_room/dining_tables.jpg",
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
  subcategories: [
    {
      title: "Dining Tables",
      image: "/images/furniture/dining_room/dining_tables.jpg",
      href: "/contact",
    },
    {
      title: "4 Seater Dining Sets",
      image: "/images/furniture/dining_room/4_seater_dining_sets.jpg",
      href: "/contact",
    },
    {
      title: "6 Seater Dining Sets",
      image: "/images/furniture/dining_room/6_seater_dining_sets.jpg",
      href: "/contact",
    },
    {
      title: "8 Seater Dining Sets",
      image: "/images/furniture/dining_room/8_seater_dining_sets.jpg",
      href: "/contact",
    },
    {
      title: "Dining Chairs",
      image: "/images/furniture/dining_room/dining_chairs.jpg",
      href: "/contact",
    },
    {
      title: "Crockery Units",
      image: "/images/furniture/dining_room/crockery_units.jpg",
      href: "/contact",
    },
    {
      title: "Bar Cabinets",
      image: "/images/furniture/dining_room/bar_cabinets.jpg",
      href: "/contact",
    },
  ],
} as const satisfies FurnitureCategory;

export default diningRoomFurniture;
