import type { FurnitureCategory } from "../furniture.ts";

const storageFurniture = {
  slug: "storage",
  title: "Wooden Storage Furniture",
  description:
    "Explore wooden storage furniture at Aastha Furniture, Muzaffarpur. Discover storage cabinets, drawer units, display cabinets, bookshelves, and custom storage solutions.",

  cardImage: "/images/furniture/storage/storage_cabinets.webp",

  hero: {
    image: {
      mobile: "/images/hero/storage-furniture-640.webp",
      tablet: "/images/hero/storage-furniture-1024.webp",
      desktop: "/images/hero/storage-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE STORAGE FURNITURE",
    heading: "Wooden Storage Furniture for Every Space",
    description:
      "Discover wooden storage cabinets, drawer units, display cabinets, bookshelves, and practical storage furniture designed to keep your home organised.",
  },

  textImageContent: {
    eyebrow: "SMART STORAGE. CRAFTED WITH CARE.",
    heading: "Functional & Stylish Wooden Storage Solutions",
    description:
      "A well-organised home needs furniture that makes everyday storage simple and convenient. At Aastha Furniture, we manufacture and supply wooden storage furniture in Muzaffarpur, including storage cabinets, drawer units, display cabinets, bookshelves, and custom-made storage solutions. With our family's furniture heritage since 1970, we combine traditional woodworking experience with modern designs to create practical furniture that complements your home and makes better use of your space.",

    image: {
      src: "/images/section_image/storage-sec.webp",
      alt: "Wooden storage cabinet crafted by Aastha Furniture",
    },

    features: [
      {
        heading: "Wooden Storage Cabinets",
        description:
          "Explore practical wooden cabinets and cupboards for organising household essentials and everyday belongings.",
      },
      {
        heading: "Drawers & Display Units",
        description:
          "Discover drawer units, display cabinets, and shelving furniture that combine storage with attractive design.",
      },
      {
        heading: "Custom-Made Storage Furniture",
        description:
          "Get storage furniture designed according to your preferred dimensions, layout, style, and space requirements.",
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
    heading: "Make Space for Better Living",
    description:
      "Explore wooden storage cabinets, display units, and custom storage furniture designed around your home and everyday needs.",

    primaryButton: {
      label: "Enquire About Storage Furniture",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default storageFurniture;
