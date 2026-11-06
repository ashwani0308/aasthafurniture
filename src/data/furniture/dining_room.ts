import type { FurnitureCategory } from "../furniture.ts";

const diningRoomFurniture = {
  slug: "dining-room",
  title: "Wooden Dining Room Furniture",
  description:
    "Explore wooden dining room furniture at Aastha Furniture, Muzaffarpur. Discover dining tables, dining chair sets, crockery units, and custom dining furniture.",

  cardImage: "/images/furniture/dining-room.webp",

  hero: {
    image: {
      mobile: "/images/hero/dining-room-furniture-640.webp",
      tablet: "/images/hero/dining-room-furniture-1024.webp",
      desktop: "/images/hero/dining-room-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE DINING ROOM FURNITURE",
    heading: "Wooden Dining Furniture for Every Home",
    description:
      "Discover wooden dining tables, dining table sets, chairs, crockery units, and bar cabinets. Find furniture that brings comfort, functionality, and style to your dining space.",
  },

  textImageContent: {
    eyebrow: "MADE FOR GATHERING. CRAFTED WITH CARE.",
    heading: "Beautiful Wooden Dining Furniture for Everyday Living",
    description:
      "A dining space brings family and friends together, and the right furniture makes every gathering more special. At Aastha Furniture, we manufacture and supply wooden dining room furniture in Muzaffarpur, including dining tables, dining chairs, crockery units, and custom-made designs. With our family's furniture heritage since 1970, we combine traditional woodworking experience with modern designs to create dining furniture that suits your home and lifestyle.",

    image: {
      src: "/images/section_image/dining-sec.webp",
      alt: "Wooden dining table and dining furniture crafted by Aastha Furniture",
    },

    features: [
      {
        heading: "Wooden Dining Tables & Sets",
        description:
          "Explore dining tables and matching chair sets in different designs and sizes for your dining space.",
      },
      {
        heading: "Dining Room Storage",
        description:
          "Discover crockery units, display cabinets, and bar cabinets for organised and stylish dining spaces.",
      },
      {
        heading: "Custom-Made Dining Furniture",
        description:
          "Get dining furniture made to suit your preferred dimensions, design, seating requirements, and home interiors.",
      },
      {
        heading: "Manufacturer-Direct Value",
        description:
          "Buy directly from Aastha Furniture and enjoy a personal buying experience focused on craftsmanship and value.",
      },
    ],
  },

  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Bring Your Dining Space Together",
    description:
      "Explore wooden dining tables, chairs, and custom dining furniture. Find the right design for your home with Aastha Furniture.",

    primaryButton: {
      label: "Enquire About Dining Furniture",
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
