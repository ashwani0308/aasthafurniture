import type { ServicePageContent } from "./types";

const bulkWholesaleFurniture: ServicePageContent = {
  slug: "bulk-wholesale-furniture",
  title: "Bulk & Wholesale Furniture",
  hero: {
    eyebrow: "FOR DEALERS, BUSINESSES, AND BULK BUYERS",
    heading: "Furniture for Bigger Orders",
    description:
      "Discuss furniture quantities, styles, and requirements with our team for your business, retail, or project needs.",
    image: {
      mobile: "/images/hero/slider_image_4_640.webp",
      tablet: "/images/hero/slider_image_4_1024.webp",
      desktop: "/images/hero/slider_image_4_1600.webp",
    },
    primaryButton: { label: "Enquire About Bulk Orders", href: "/contact" },
    secondaryButton: { label: "Call Now", href: "tel:+919999999999" },
  },
  textImageContent: {
    eyebrow: "BULK AND WHOLESALE ORDERS",
    heading: "A reliable furniture partner for larger orders.",
    description:
      "Whether you are a retailer, business, or planning a larger project, tell us what you need and we can discuss suitable furniture and order requirements.",
    image: {
      src: "/images/hero/slider_image_4_1600.webp",
      alt: "Furniture for bulk and wholesale orders",
    },
    features: [
      {
        heading: "Discuss your quantities",
        description:
          "Share the furniture types and quantities you are looking for.",
      },
      {
        heading: "Options for your business",
        description:
          "Talk through your requirements as a retailer, business, or project buyer.",
      },
      {
        heading: "Plan the details",
        description:
          "Discuss designs, materials, and finishes with our team before placing an order.",
      },
    ],
  },
  faqSection: {
    heading: "Questions about bulk and wholesale orders?",
    description:
      "Get in touch to discuss your order size, furniture requirements, and next steps.",
    primaryButton: { label: "Enquire About Bulk Orders", href: "/contact" },
    faqs: [
      {
        question: "Who can enquire about a bulk or wholesale order?",
        answer:
          "Retailers, businesses, and project buyers are welcome to contact us with their furniture requirements.",
      },
      {
        question: "What information should I include in my enquiry?",
        answer:
          "Tell us which furniture you need, approximate quantities, preferred designs or materials, and any project details that may help us understand your order.",
      },
      {
        question: "Can I discuss designs and finishes for my order?",
        answer:
          "Yes. Share your design, material, and finish preferences so our team can discuss suitable options with you.",
      },
      {
        question: "How do I get pricing for a bulk order?",
        answer:
          "Contact us with your furniture list and quantities. We will review your requirements and discuss pricing and next steps with you.",
      },
    ],
  },
};

export default bulkWholesaleFurniture;
