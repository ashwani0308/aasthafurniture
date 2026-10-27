import type { FurnitureCategory } from "../furniture.ts";

const storageFurniture = {
  slug: "storage",
  title: "Storage Furniture",
  description:
    "Keep your home organised with thoughtfully crafted storage furniture that combines practical functionality with timeless style.",
  cardImage: "/images/furniture/storage/storage_cabinets.webp",
  hero: {
    image: "/images/furniture/storage/storage_cabinets.webp",
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Storage Furniture",
    description:
      "Discover practical and stylish storage solutions designed to keep every space organised and clutter-free.",
  },
  textImageContent: {
    eyebrow: "SMART STORAGE. TIMELESS STYLE.",
    heading: "Organised Spaces. Thoughtfully Crafted.",
    description:
      "A well-organised home starts with furniture that gives everything its place. From versatile cabinets and spacious chests of drawers to elegant display units and practical storage shelves, our furniture helps you make the most of your space without compromising on style. By manufacturing our furniture ourselves and selling directly, we aim to offer lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/storage/storage_cabinets.webp",
      alt: "Thoughtfully crafted wooden storage cabinet",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Storage furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Everyday Living",
        description:
          "Practical storage solutions to help keep your home organised and functional.",
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
    heading: "Find the Right Storage for Your Space",
    description:
      "Explore furniture that brings order, functionality, and style to every corner of your home.",
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
      src: "/images/furniture/storage/storage_cabinets.webp",
      alt: "Storage cabinet",
    },
    {
      src: "/images/furniture/storage/chest_of_drawers.webp",
      alt: "Chest of drawers",
    },
    {
      src: "/images/furniture/storage/display_units.webp",
      alt: "Display unit",
    },
    {
      src: "/images/furniture/storage/storage_shelves.webp",
      alt: "Storage shelves",
    },
    {
      src: "/images/furniture/storage/sideboards.webp",
      alt: "Sideboard",
    },
    {
      src: "/images/furniture/storage/shoe_racks.webp",
      alt: "Shoe rack",
    },
    {
      src: "/images/furniture/storage/multipurpose_storage_units.webp",
      alt: "Multipurpose storage unit",
    },
  ],
} as const satisfies FurnitureCategory;

export default storageFurniture;
