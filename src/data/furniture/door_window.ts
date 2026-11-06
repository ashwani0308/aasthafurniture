import type { FurnitureCategory } from "../furniture.ts";

const doorWindowFurniture = {
  slug: "door-window",
  title: "Wooden Doors & Windows",
  description:
    "Explore wooden doors and windows at Aastha Furniture, Muzaffarpur. Discover main entrance doors, interior doors, wooden window frames, and custom designs.",

  cardImage: "/images/furniture/door-and-window/door-and-window.webp",

  hero: {
    image: {
      mobile: "/images/hero/doors-window-640.webp",
      tablet: "/images/hero/doors-window-1024.webp",
      desktop: "/images/hero/doors-window-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE WOODEN DOORS & WINDOWS",
    heading: "Wooden Doors & Windows for Every Home",
    description:
      "Discover beautifully crafted wooden main doors, interior doors, door frames, window frames, and custom wooden designs to complement your home and architecture.",
  },

  textImageContent: {
    eyebrow: "CRAFTED WITH CARE. MADE TO LAST.",
    heading: "Beautiful Wooden Doors & Windows, Made for Your Home",
    description:
      "Doors and windows are an essential part of every home, adding character, privacy, and functionality to your space. At Aastha Furniture, we manufacture and supply wooden doors and windows in Muzaffarpur, including main entrance doors, interior doors, door frames, and wooden window frames. With our family's woodworking heritage since 1970, we bring traditional craftsmanship and modern designs together to create wooden solutions tailored to your requirements.",

    image: {
      src: "/images/section_image/doors-window-sec.webp",
      alt: "Beautifully crafted wooden main entrance door by Aastha Furniture",
    },

    features: [
      {
        heading: "Wooden Main Entrance Doors",
        description:
          "Explore wooden main doors in attractive designs to create a welcoming entrance for your home.",
      },
      {
        heading: "Interior Doors & Frames",
        description:
          "Discover wooden doors and frames designed for bedrooms, living spaces, and other interiors.",
      },
      {
        heading: "Custom-Made Doors & Windows",
        description:
          "Get wooden doors, window frames, and designs made according to your preferred dimensions and requirements.",
      },
      {
        heading: "Manufacturer-Direct Value",
        description:
          "Buy directly from Aastha Furniture and benefit from a personal buying experience focused on craftsmanship and value.",
      },
    ],
  },

  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Find the Right Doors & Windows for Your Home",
    description:
      "Explore wooden door and window designs or discuss a custom solution for your home or project with Aastha Furniture.",

    primaryButton: {
      label: "Enquire About Doors & Windows",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default doorWindowFurniture;
