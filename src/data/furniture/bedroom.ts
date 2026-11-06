import type { FurnitureCategory } from "../furniture.ts";

const bedroomFurniture = {
  slug: "bedroom",
  title: "Wooden Bedroom Furniture",
  description:
    "Explore wooden bedroom furniture at Aastha Furniture, Muzaffarpur. Discover beautifully crafted beds, wardrobes, bedside tables, and custom bedroom furniture.",

  cardImage: "/images/furniture/bedroom.webp",

  hero: {
    image: {
      mobile: "/images/hero/bedroom-furniture-640.webp",
      tablet: "/images/hero/bedroom-furniture-1024.webp",
      desktop: "/images/hero/bedroom-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE BEDROOM FURNITURE",
    heading: "Wooden Bedroom Furniture for Every Home",
    description:
      "Discover wooden beds, double beds, king-size beds, queen-size beds, wardrobes, bedside tables, and more. Explore designs for different bedroom spaces, styles, and requirements.",
  },

  textImageContent: {
    eyebrow: "CRAFTED FOR COMFORT. BUILT TO LAST.",
    heading: "Beautiful Wooden Bedroom Furniture, Made with Care",
    description:
      "Your bedroom deserves furniture that combines comfort, functionality, and timeless design. At Aastha Furniture, we manufacture and supply wooden bedroom furniture in Muzaffarpur, including beds, wardrobes, bedside tables, and custom-made designs. With our family's furniture heritage since 1970, we bring traditional craftsmanship and modern styles together, offering quality furniture directly from our workshop.",

    image: {
      src: "/images/section_image/bedroom-sec.webp",
      alt: "Wooden bedroom furniture featuring a beautifully crafted bed by Aastha Furniture",
    },

    features: [
      {
        heading: "Wooden Beds for Every Bedroom",
        description:
          "Explore single, double, king-size, and queen-size wooden beds in designs suited to different spaces and preferences.",
      },
      {
        heading: "Functional Bedroom Storage",
        description:
          "Discover wardrobes, bedside tables, and practical storage furniture to keep your bedroom organised.",
      },
      {
        heading: "Custom-Made Bedroom Furniture",
        description:
          "Get furniture made to suit your preferred dimensions, design, wood selection, and bedroom requirements.",
      },
      {
        heading: "Manufacturer-Direct Value",
        description:
          "Buy directly from Aastha Furniture and enjoy a personal buying experience with a focus on craftsmanship and value.",
      },
    ],
  },

  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Find the Perfect Bed for Your Bedroom",
    description:
      "Explore wooden beds and bedroom furniture or discuss a custom design made for your space. Visit Aastha Furniture in Muzaffarpur or get in touch with our team.",

    primaryButton: {
      label: "Enquire About Bedroom Furniture",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default bedroomFurniture;
