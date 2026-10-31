import type { FurnitureCategory } from "../furniture.ts";

const officeFurniture = {
  slug: "office",
  title: "Office Furniture",
  description:
    "Create a productive and professional workspace with thoughtfully crafted office furniture designed for comfort, functionality, and style.",
  cardImage: "/images/furniture/office-furniture/office-furniture.webp",
  hero: {
    image: {
      mobile: "/images/hero/office-furniture-640.webp",
      tablet: "/images/hero/office-furniture-1024.webp",
      desktop: "/images/hero/office-furniture-1600.webp",
    },
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Office Furniture",
    description:
      "Discover practical and stylish furniture for home offices, workspaces, and professional environments.",
  },
  textImageContent: {
    eyebrow: "MADE FOR PRODUCTIVITY",
    heading: "Work Better. Feel Comfortable. Stay Inspired.",
    description:
      "A well-designed workspace helps you stay organised, focused, and comfortable throughout the day. From functional office desks and storage cabinets to meeting tables and workstations, our furniture is designed to support the way you work. By manufacturing our furniture ourselves and selling directly, we aim to deliver thoughtful design and lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/office-furniture/office-furniture.webp",
      alt: "Thoughtfully crafted wooden office desk in a modern workspace",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Office furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Productivity",
        description:
          "Functional furniture for focused work, collaboration, and everyday organisation.",
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
    heading: "Create a Workspace That Works for You",
    description:
      "Whether you're furnishing a home office or a professional workspace, let's find furniture that suits your needs.",
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
      src: "/images/furniture/office-furniture/office-furniture.webp",
      alt: "Office furniture",
    },
  ],
} as const satisfies FurnitureCategory;

export default officeFurniture;
