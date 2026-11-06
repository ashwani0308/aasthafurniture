import type { FurnitureCategory } from "../furniture.ts";

const outdoorFurniture = {
  slug: "outdoor-furniture",
  title: "Outdoor Furniture",
  description:
    "Explore outdoor furniture at Aastha Furniture, Muzaffarpur. Discover wooden garden furniture, outdoor seating, garden benches, patio tables, and custom designs.",

  cardImage: "/images/furniture/outdoor-furniture/outdoor-furniture.webp",

  hero: {
    image: {
      mobile: "/images/hero/outdoor-furniture-640.webp",
      tablet: "/images/hero/outdoor-furniture-1024.webp",
      desktop: "/images/hero/outdoor-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE OUTDOOR FURNITURE",
    heading: "Outdoor Furniture for Every Open Space",
    description:
      "Discover wooden garden furniture, outdoor chairs, garden benches, patio tables, and balcony furniture designed to make your outdoor spaces comfortable and inviting.",
  },

  textImageContent: {
    eyebrow: "MADE FOR OUTDOOR LIVING. CRAFTED WITH CARE.",
    heading: "Beautiful Outdoor Furniture for Gardens, Balconies & Patios",
    description:
      "Make your outdoor spaces more welcoming with furniture that combines comfort, functionality, and thoughtful design. At Aastha Furniture, we manufacture and supply outdoor furniture in Muzaffarpur, including wooden garden seating, outdoor benches, patio tables, and custom-made furniture. With our family's woodworking heritage since 1970, we bring traditional craftsmanship and modern designs together to create furniture suited to your space and outdoor lifestyle.",

    image: {
      src: "/images/section_image/outdoor-sec.webp",
      alt: "Wooden outdoor garden furniture with comfortable seating by Aastha Furniture",
    },

    features: [
      {
        heading: "Garden Seating & Benches",
        description:
          "Explore wooden garden benches and outdoor seating designed for relaxing and enjoying your outdoor spaces.",
      },
      {
        heading: "Patio & Balcony Furniture",
        description:
          "Discover practical furniture for balconies, patios, terraces, gardens, and other open spaces.",
      },
      {
        heading: "Custom-Made Outdoor Furniture",
        description:
          "Get outdoor furniture made according to your preferred dimensions, design, and space requirements.",
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
    heading: "Make More of Your Outdoor Space",
    description:
      "Explore garden furniture, outdoor seating, and custom designs for your balcony, patio, terrace, or garden.",

    primaryButton: {
      label: "Enquire About Outdoor Furniture",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default outdoorFurniture;
