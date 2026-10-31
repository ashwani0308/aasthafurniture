import type { FurnitureCategory } from "../furniture.ts";

const bedroomFurniture = {
  slug: "bedroom",
  title: "Bedroom Furniture",
  description:
    "Create a comfortable and beautiful bedroom with thoughtfully crafted furniture.",
  cardImage: "/images/furniture/bedroom.webp",
  hero: {
    image: {
      mobile: "/images/hero/bedroom-furniture-640.webp",
      tablet: "/images/hero/bedroom-furniture-1024.webp",
      desktop: "/images/hero/bedroom-furniture-1600.webp",
    },
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Bedroom Furniture",
    description: "Find the right pieces to make your bedroom feel like home.",
  },
  textImageContent: {
    eyebrow: "MADE WITH CARE",
    heading: "Thoughtful Design. Lasting Craftsmanship.",
    description:
      "We believe bedroom furniture should do more than look good. It should fit your space, support your everyday routine, and offer lasting value. By manufacturing our furniture ourselves and selling directly, we aim to bring you thoughtfully made furniture without unnecessary middlemen.",
    image: {
      src: "/images/furniture/bedroom/beds.webp",
      alt: "Thoughtfully crafted bedroom bed",
    },
    features: [
      {
        heading: "Made by Us",
        description: "Furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Everyday Living",
        description: "Practical styles for different spaces and needs.",
      },
      {
        heading: "Quality Craftsmanship",
        description: "Attention to construction, details, and finish.",
      },
      {
        heading: "Factory-Direct Value",
        description: "A direct buying experience focused on value and quality.",
      },
    ],
  },
  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Browse Furniture Categories",
    description: "Discover handcrafted furniture designed for every room.",
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
      src: "/images/furniture/bedroom/beds.webp",
      alt: "Bedroom bed",
    },
    {
      src: "/images/furniture/bedroom/king_size_beds.webp",
      alt: "King size bed",
    },
    {
      src: "/images/furniture/bedroom/queen_size_beds.webp",
      alt: "Queen size bed",
    },
    {
      src: "/images/furniture/bedroom/wardrobes.webp",
      alt: "Bedroom wardrobe",
    },
    {
      src: "/images/furniture/bedroom/bedside_tables.webp",
      alt: "Bedside table",
    },
    {
      src: "/images/furniture/bedroom/dressing_tables.webp",
      alt: "Dressing table",
    },
    {
      src: "/images/furniture/bedroom/chest_of_drawers.webp",
      alt: "Bedroom chest of drawers",
    },
  ],
} as const satisfies FurnitureCategory;

export default bedroomFurniture;
