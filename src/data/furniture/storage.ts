import type { FurnitureCategory } from "../furniture.ts";

const storageFurniture = {
  slug: "storage",
  title: "Storage Furniture",
  description:
    "Keep your home organised with thoughtfully crafted storage furniture that combines practical functionality with timeless style.",
  cardImage: "/images/furniture/storage/storage_cabinets.jpg",
  hero: {
    image: "/images/furniture/storage/storage_cabinets.jpg",
  },
  subcategorySection: {
    eyebrow: "Explore Our Collections",
    heading: "Storage Furniture",
    subtext:
      "Discover practical and stylish storage solutions designed to keep every space organised and clutter-free.",
  },
  textImageContent: {
    eyebrow: "SMART STORAGE. TIMELESS STYLE.",
    heading: "Organised Spaces. Thoughtfully Crafted.",
    description:
      "A well-organised home starts with furniture that gives everything its place. From versatile cabinets and spacious chests of drawers to elegant display units and practical storage shelves, our furniture helps you make the most of your space without compromising on style. By manufacturing our furniture ourselves and selling directly, we aim to offer lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/storage/storage_cabinets.jpg",
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
  subcategories: [
    {
      title: "Storage Cabinets",
      image: "/images/furniture/storage/storage_cabinets.jpg",
      href: "/contact",
    },
    {
      title: "Chest of Drawers",
      image: "/images/furniture/storage/chest_of_drawers.jpg",
      href: "/contact",
    },
    {
      title: "Display Units",
      image: "/images/furniture/storage/display_units.jpg",
      href: "/contact",
    },
    {
      title: "Storage Shelves",
      image: "/images/furniture/storage/storage_shelves.jpg",
      href: "/contact",
    },
    {
      title: "Sideboards",
      image: "/images/furniture/storage/sideboards.jpg",
      href: "/contact",
    },
    {
      title: "Shoe Racks",
      image: "/images/furniture/storage/shoe_racks.jpg",
      href: "/contact",
    },
    {
      title: "Multipurpose Storage Units",
      image: "/images/furniture/storage/multipurpose_storage_units.jpg",
      href: "/contact",
    },
  ],
} as const satisfies FurnitureCategory;

export default storageFurniture;
