import type { FurnitureCategory } from "../furniture.ts";

const diningRoomFurniture = {
  slug: "dining-room",
  title: "Dining Room Furniture",
  description:
    "Create a welcoming dining space with thoughtfully crafted furniture designed for everyday meals and special gatherings.",
  cardImage: "/images/furniture/dining-room.webp",
  hero: {
    image: {
      mobile: "/images/hero/dining-room-furniture-640.webp",
      tablet: "/images/hero/dining-room-furniture-1024.webp",
      desktop: "/images/hero/dining-room-furniture-1600.webp",
    },
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
      src: "/images/section_image/dining-sec.webp",
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
      label: "Contact Us",
      href: "/contact",
    },
    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },
  gallery: [],
} as const satisfies FurnitureCategory;

export default diningRoomFurniture;
