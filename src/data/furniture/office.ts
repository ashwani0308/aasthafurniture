import type { FurnitureCategory } from "../furniture.ts";

const officeFurniture = {
  slug: "office",
  title: "Office Furniture",
  description:
    "Explore office furniture at Aastha Furniture, Muzaffarpur. Discover wooden office tables, executive desks, workstations, storage cabinets, and custom office furniture.",

  cardImage: "/images/furniture/office-furniture/office-furniture.webp",

  hero: {
    image: {
      mobile: "/images/hero/office-furniture-640.webp",
      tablet: "/images/hero/office-furniture-1024.webp",
      desktop: "/images/hero/office-furniture-1600.webp",
    },
  },

  gallerySection: {
    eyebrow: "EXPLORE OFFICE FURNITURE",
    heading: "Office Furniture for Every Workspace",
    description:
      "Discover wooden office tables, executive desks, workstations, storage cabinets, and custom furniture designed for home offices, businesses, and professional workspaces.",
  },

  textImageContent: {
    eyebrow: "BUILT FOR WORK. CRAFTED WITH CARE.",
    heading: "Functional & Stylish Office Furniture for Modern Workspaces",
    description:
      "A well-organised workspace starts with furniture that combines comfort, functionality, and professional design. At Aastha Furniture, we manufacture and supply office furniture in Muzaffarpur, including wooden office tables, executive desks, workstations, and storage cabinets. With our family's furniture heritage since 1970, we bring traditional woodworking experience and modern designs together to create furniture for home offices, businesses, and commercial spaces.",

    image: {
      src: "/images/section_image/office-sec.webp",
      alt: "Wooden office desk and office furniture crafted by Aastha Furniture",
    },

    features: [
      {
        heading: "Office Tables & Executive Desks",
        description:
          "Explore functional wooden office tables and executive desks for professional and home office setups.",
      },
      {
        heading: "Workstations & Storage",
        description:
          "Discover practical workstations, office cabinets, and storage furniture to keep your workspace organised.",
      },
      {
        heading: "Custom-Made Office Furniture",
        description:
          "Get office furniture designed around your available space, preferred dimensions, layout, and business requirements.",
      },
      {
        heading: "Furniture for Businesses",
        description:
          "Source furniture for offices, commercial spaces, and bulk requirements directly from Aastha Furniture.",
      },
    ],
  },

  ctaImageContent: {
    backgroundImage: "/images/cta/cta-bg.jpg",
    heading: "Build a Better Workspace",
    description:
      "Explore office furniture or discuss custom desks, workstations, and storage solutions for your business or home office.",

    primaryButton: {
      label: "Enquire About Office Furniture",
      href: "/contact",
    },

    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  gallery: [],
} as const satisfies FurnitureCategory;

export default officeFurniture;
