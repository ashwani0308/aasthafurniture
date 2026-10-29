import type { ServicePageContent } from "./types";

const officeFurniture: ServicePageContent = {
  slug: "office-furniture",
  title: "Office Furniture",
  hero: {
    eyebrow: "MADE FOR THE WORKDAY",
    heading: "A Better Fit for the Way You Work",
    description:
      "Create a more considered workplace with practical, well-made furniture for offices, studios, and shared spaces.",
    image: "/images/furniture/office-furniture/office-furniture.webp",
    primaryButton: { label: "Plan Your Workspace", href: "/contact" },
    secondaryButton: { label: "Call Now", href: "tel:+919999999999" },
  },
  textImageContent: {
    eyebrow: "WORKSPACE FURNITURE",
    heading: "Thoughtful furniture for productive spaces.",
    description:
      "Whether you are furnishing one room or a full workplace, we can help bring your requirements together into a practical, cohesive setup.",
    image: {
      src: "/images/furniture/office-furniture.webp",
      alt: "Office furniture designed for a productive workplace",
    },
    features: [
      {
        heading: "Made for your layout",
        description:
          "Choose pieces and dimensions that work with your floor plan and team.",
      },
      {
        heading: "For teams and businesses",
        description:
          "Discuss individual requirements, coordinated spaces, and larger orders with us.",
      },
      {
        heading: "Reliable everyday use",
        description:
          "Furniture is built with lasting materials and careful finishing for daily work.",
      },
    ],
  },
  faqSection: {
    heading: "Planning your workspace?",
    description:
      "Find answers to common questions about planning and furnishing an office, studio, or shared workspace.",
    primaryButton: { label: "Plan Your Workspace", href: "/contact" },
    faqs: [
      {
        question: "What kinds of office furniture can you make?",
        answer:
          "We can discuss furniture for offices, studios, and shared spaces. Tell us what your team needs and we can explore suitable pieces and layouts.",
      },
      {
        question: "Can you furnish a complete office?",
        answer:
          "Yes. Get in touch to discuss the space, number of people, and furniture you need. We can help plan individual pieces or a coordinated workspace.",
      },
      {
        question: "Can office furniture be made to fit our layout?",
        answer:
          "Share your floor plan or measurements and any specific requirements. We can talk through dimensions and options that make sense for your workspace.",
      },
      {
        question: "How do I get a quote for an office project?",
        answer:
          "Send us the furniture list, quantities, approximate measurements, and preferred materials or finishes. We will review the details with you and discuss an estimate.",
      },
    ],
  },
};

export default officeFurniture;
