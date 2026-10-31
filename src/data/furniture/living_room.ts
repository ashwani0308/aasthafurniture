import type { FurnitureCategory } from "../furniture.ts";

const livingRoomFurniture = {
  slug: "living-room",
  title: "Living Room Furniture",
  description:
    "Create a welcoming living room with thoughtfully crafted furniture designed for comfort, style, and everyday living.",
  cardImage: "/images/furniture/living-room.webp",
  hero: {
    image: {
      mobile: "/images/hero/living-room-furniture-640.webp",
      tablet: "/images/hero/living-room-furniture-1024.webp",
      desktop: "/images/hero/living-room-furniture-1600.webp",
    },
  },
  gallerySection: {
    eyebrow: "Explore Our Collections",
    heading: "Living Room Furniture",
    description:
      "Discover beautifully crafted furniture that makes your living room comfortable, functional, and inviting.",
  },
  textImageContent: {
    eyebrow: "MADE FOR LIVING",
    heading: "Comfortable Spaces. Thoughtfully Crafted.",
    description:
      "Your living room is where you relax, welcome guests, and spend time with the people who matter most. From comfortable sofa sets and elegant coffee tables to practical TV units and stylish accent chairs, our furniture brings comfort and functionality together. By manufacturing our furniture ourselves and selling directly, we aim to deliver lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/living_room/sofa_set.webp",
      alt: "Thoughtfully crafted sofa set in a modern living room",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Living room furniture crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Everyday Living",
        description:
          "Comfortable and functional furniture for relaxing, entertaining, and spending time together.",
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
    heading: "Create Your Ideal Living Room",
    description:
      "Explore furniture designed to complement your space, reflect your style, and make everyday living more comfortable.",
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
      src: "/images/furniture/living_room/sofa_set.webp",
      alt: "Sofa set",
    },
    {
      src: "/images/furniture/living_room/sectional_sofas.webp",
      alt: "Sectional sofa",
    },
    {
      src: "/images/furniture/living_room/coffee_tables.webp",
      alt: "Coffee table",
    },
    {
      src: "/images/furniture/living_room/tv_units.webp",
      alt: "TV unit",
    },
    {
      src: "/images/furniture/living_room/side_tables.webp",
      alt: "Side table",
    },
    {
      src: "/images/furniture/living_room/console_tables.webp",
      alt: "Console table",
    },
    {
      src: "/images/furniture/living_room/bookshelves.webp",
      alt: "Bookshelf",
    },
    {
      src: "/images/furniture/living_room/accent_chairs.webp",
      alt: "Accent chair",
    },
  ],
} as const satisfies FurnitureCategory;

export default livingRoomFurniture;
