import type { FurnitureCategory } from "../furniture.ts";

const doorWindowFurniture = {
  slug: "door-window",
  title: "Doors & Windows",
  description:
    "Enhance your home with thoughtfully crafted wooden doors and windows that combine timeless style, functionality, and quality craftsmanship.",
  cardImage: "/images/furniture/door-and-window/door-and-window.jpg",
  hero: {
    image: "/images/furniture/door-and-window/door-and-window.jpg",
  },
  subcategorySection: {
    eyebrow: "Explore Our Collections",
    heading: "Doors & Windows",
    subtext:
      "Discover beautifully crafted doors and windows designed to complement your architecture and everyday living.",
  },
  textImageContent: {
    eyebrow: "CRAFTED FOR YOUR HOME",
    heading: "Timeless Designs. Lasting Craftsmanship.",
    description:
      "Doors and windows help define the character of your home, bringing together privacy, natural light, security, and style. From elegant main doors and practical interior doors to beautifully finished wooden window frames, our collection focuses on thoughtful design and careful craftsmanship. By manufacturing our products ourselves and selling directly, we aim to offer lasting value without unnecessary middlemen.",
    image: {
      src: "/images/furniture/door-and-window/door-and-window.jpg",
      alt: "Beautifully crafted wooden main door",
    },
    features: [
      {
        heading: "Made by Us",
        description:
          "Doors and windows crafted through our own manufacturing process.",
      },
      {
        heading: "Designed for Your Space",
        description:
          "Styles to complement different home designs and architectural needs.",
      },
      {
        heading: "Quality Craftsmanship",
        description:
          "Careful attention to materials, construction, and finishing details.",
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
    heading: "Find the Right Doors & Windows",
    description:
      "Discuss your requirements, explore suitable designs, and find options for your home or project.",
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
      title: "Main Doors",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Interior Doors",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Panel Doors",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Carved Wooden Doors",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Wooden Window Frames",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Wooden Windows",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
    {
      title: "Custom Doors & Windows",
      image: "/images/furniture/door-and-window/door-and-window.jpg",
      href: "/contact",
    },
  ],
} as const satisfies FurnitureCategory;

export default doorWindowFurniture;
