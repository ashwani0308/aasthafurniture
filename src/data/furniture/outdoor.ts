import type { FurnitureCategory } from "../furniture.ts";

const outdoorFurniture = {
  slug: "outdoor-furniture",
  title: "Outdoor Furniture",
  description:
    "Transform your outdoor spaces with thoughtfully crafted furniture designed for relaxation, entertaining, and everyday enjoyment.",
  cardImage: "/images/furniture/outdoor-furniture/outdoor-furniture.webp",
  hero: {
    image: {
      mobile: "/images/hero/outdoor-furniture-640.webp",
      tablet: "/images/hero/outdoor-furniture-1024.webp",
      desktop: "/images/hero/outdoor-furniture-1600.webp",
    },
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Outdoor Furniture",
    description:
      "Discover inviting outdoor furniture for gardens, balconies, patios, terraces, and open-air spaces.",
  },
  textImageContent: {
    eyebrow: "MADE FOR THE OUTDOORS",
    heading: "Relax Outdoors. Live Beautifully.",
    description:
      "Make the most of your outdoor spaces with furniture that brings comfort, style, and functionality together. From garden seating and patio tables to outdoor benches and balcony furniture, our collection helps you create welcoming spaces for relaxing and spending time together. By manufacturing our furniture ourselves and selling directly, we aim to offer thoughtful design and lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/outdoor-furniture/outdoor-furniture.webp",
      alt: "Comfortable outdoor garden furniture in a welcoming garden setting",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Outdoor furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Outdoor Living",
        description:
          "Furniture for relaxing, entertaining, and enjoying your outdoor spaces.",
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
    heading: "Create Your Perfect Outdoor Space",
    description:
      "Explore outdoor furniture for your garden, balcony, patio, or terrace, and discuss options to suit your space.",
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
      src: "/images/furniture/outdoor-furniture/outdoor-furniture.webp",
      alt: "Outdoor furniture",
    },
  ],
} as const satisfies FurnitureCategory;

export default outdoorFurniture;
