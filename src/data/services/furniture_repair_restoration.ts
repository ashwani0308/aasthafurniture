import type { ServicePageContent } from "./types";

const furnitureRepair: ServicePageContent = {
  slug: "furniture-repair-restoration",
  title: "Furniture Repair & Restoration",
  hero: {
    eyebrow: "GIVE GOOD FURNITURE MORE TIME",
    heading: "Bring Your Furniture Back to Life",
    description:
      "From worn finishes to loose joints, talk to our team about restoring the furniture you already know and love.",
    image: {
      mobile: "/images/hero/furniture_restoration-640.webp",
      tablet: "/images/hero/furniture_restoration-1024.webp",
      desktop: "/images/hero/furniture_restoration-1600.webp",
    },
    primaryButton: { label: "Ask About a Repair", href: "/contact" },
    secondaryButton: { label: "Call Now", href: "tel:+919999999999" },
  },
  textImageContent: {
    eyebrow: "REPAIR AND RESTORATION",
    heading: "Keep the pieces worth keeping.",
    description:
      "Furniture can have a long life with the right attention. Tell us what needs care, and we will help you understand the next step for your piece.",
    image: {
      src: "/images/furniture/bedroom/beds.webp",
      alt: "Well-crafted wooden furniture ready for renewed use",
    },
    features: [
      {
        heading: "Careful assessment",
        description:
          "Share the furniture type and issue so we can discuss suitable repair options.",
      },
      {
        heading: "Attention to detail",
        description:
          "Our team considers the construction, finish, and character of each piece.",
      },
      {
        heading: "A practical next step",
        description:
          "Get in touch with details and photos to start a conversation about your repair.",
      },
    ],
  },
  faqSection: {
    heading: "Questions about furniture repair?",
    description:
      "Not sure what your furniture needs? These answers can help you decide what to share with us.",
    primaryButton: { label: "Ask About a Repair", href: "/contact" },
    faqs: [
      {
        question: "What kinds of furniture can you repair?",
        answer:
          "Contact us with the type of furniture and a description of the issue. We can review the details and let you know whether we can help.",
      },
      {
        question: "How much does furniture repair cost?",
        answer:
          "Repair costs depend on the condition of the piece, the work required, and its materials and finish. Share a description and photos so we can discuss an assessment.",
      },
      {
        question: "Can you restore a damaged or worn finish?",
        answer:
          "We can discuss finish restoration based on the furniture and its condition. Photos and details about the piece will help us understand what may be suitable.",
      },
      {
        question: "What should I share when asking about a repair?",
        answer:
          "Tell us what the piece is, what needs attention, and where it is located. A few clear photos and approximate dimensions are also useful.",
      },
    ],
  },
};

export default furnitureRepair;
