import type { FurnitureCategory } from "../furniture.ts";

const livingRoomFurniture = {
  slug: "living-room",
  title: "Living Room Furniture",
  description:
    "Explore living room furniture at Aastha Furniture, Muzaffarpur. Discover wooden sofa sets, coffee tables, TV units, centre tables, and custom furniture.",

  cardImage: "/images/furniture/living-room.webp",

  hero: {
    image: {
      mobile: "/images/hero/living-room-furniture-640.webp",
      tablet: "/images/hero/living-room-furniture-1024.webp",
      desktop: "/images/hero/living-room-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE LIVING ROOM FURNITURE",
    heading: "Living Room Furniture for Every Home",
    description:
      "Discover wooden sofa sets, centre tables, coffee tables, TV units, and other living room furniture designed to bring comfort, functionality, and style to your home.",
  },

  textImageContent: {
    eyebrow: "MADE FOR LIVING. CRAFTED WITH CARE.",
    heading: "Beautiful Living Room Furniture for Everyday Comfort",
    description:
      "Your living room is where you relax, welcome guests, and spend time with family. At Aastha Furniture, we manufacture and supply living room furniture in Muzaffarpur, including wooden sofa sets, coffee tables, centre tables, TV units, and custom-made furniture. With our family's furniture heritage since 1970, we combine traditional craftsmanship with modern designs to create furniture that complements your space, lifestyle, and everyday needs.",

    image: {
      src: "/images/section_image/livingroom-sec.webp",
      alt: "Wooden sofa set and living room furniture by Aastha Furniture",
    },

    features: [
      {
        heading: "Wooden Sofa Sets & Seating",
        description:
          "Explore wooden sofa sets and seating furniture in different styles and sizes for comfortable living spaces.",
      },
      {
        heading: "Coffee Tables & TV Units",
        description:
          "Discover practical and stylish centre tables, coffee tables, and TV units for a well-organised living room.",
      },
      {
        heading: "Custom-Made Living Room Furniture",
        description:
          "Get furniture designed according to your preferred dimensions, style, materials, and living room requirements.",
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
    heading: "Make Your Living Room Feel Like Home",
    description:
      "Explore wooden sofa sets, TV units, and custom living room furniture. Find the right furniture for your home with Aastha Furniture.",

    primaryButton: {
      label: "Enquire About Living Room Furniture",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default livingRoomFurniture;
