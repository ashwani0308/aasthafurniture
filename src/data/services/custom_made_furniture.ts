import type { ServicePageContent } from "./types";

const customFurniture: ServicePageContent = {
  slug: "custom-made-furniture",
  title: "Custom-Made Furniture",
  description:
    "Looking for custom-made wooden furniture in Muzaffarpur? Aastha Furniture creates furniture tailored to your space, design preferences, dimensions, and requirements.",

  hero: {
    eyebrow: "CUSTOM DESIGNS. PERSONAL TOUCH.",
    heading: "Furniture Made for Your Space. Crafted for Your Style.",
    description:
      "From your ideas to the final finish, we create custom wooden furniture tailored to your space, style, and everyday needs. Share your design, dimensions, or inspiration with our team.",

    image: {
      mobile: "/images/hero/custom_furniture_640.webp",
      tablet: "/images/hero/custom_furniture_1024.webp",
      desktop: "/images/hero/custom_furniture_1600.webp",
    },

    primaryButton: {
      label: "Discuss Your Design",
      href: "/contact",
    },
    secondaryButton: {
      label: "Call Now",
      href: "tel:+919310244463",
    },
  },

  textImageContent: {
    eyebrow: "DESIGNED AROUND YOU. MADE BY US.",
    heading: "Your Ideas. Our Craftsmanship.",
    description:
      "Every home and space has its own requirements. At Aastha Furniture, we manufacture custom-made wooden furniture in Muzaffarpur, designed around your preferred dimensions, style, materials, and finish. Whether you need a wooden bed, sofa set, dining table, wardrobe, TV unit, office furniture, or a complete furniture solution, our team works with you to turn your ideas into practical, thoughtfully crafted pieces. With our family's furniture heritage since 1970, we bring traditional woodworking experience and modern designs to every project.",

    image: {
      src: "/images/section_image/custom-furniture-sec.webp",
      alt: "Custom-made wooden furniture crafted by Aastha Furniture",
    },

    features: [
      {
        heading: "Designed for Your Space",
        description:
          "Share your room dimensions and requirements to discuss furniture designed around your available space and layout.",
      },
      {
        heading: "Your Choice of Design & Finish",
        description:
          "Discuss your preferred furniture style, wood selection, materials, colours, and finishing details with our team.",
      },
      {
        heading: "Made in Our Own Workshop",
        description:
          "Your furniture is crafted through our own manufacturing process, with attention to construction and finishing.",
      },
      {
        heading: "From Individual Pieces to Complete Spaces",
        description:
          "Get custom-made beds, sofas, dining furniture, wardrobes, storage units, office furniture, and more.",
      },
    ],
  },

  faqSection: {
    heading: "Frequently Asked Questions About Custom Furniture",
    description:
      "Planning custom-made furniture for your home or business? Here are some common questions to help you get started.",

    primaryButton: {
      label: "Discuss Your Custom Furniture",
      href: "/contact",
    },

    faqs: [
      {
        question: "What types of custom-made furniture can you make?",
        answer:
          "We can discuss custom wooden beds, sofa sets, dining tables, wardrobes, TV units, storage cabinets, office furniture, doors, and other wooden furniture based on your requirements.",
      },
      {
        question: "Can you make furniture according to my room dimensions?",
        answer:
          "Yes. Share your room measurements, available space, and intended use. We can discuss suitable furniture dimensions and design options for your space.",
      },
      {
        question: "Can I choose the wood, materials, and finish?",
        answer:
          "You can discuss your preferred wood selection, materials, colours, polish, and finish with our team. Available options will depend on the furniture design and requirements.",
      },
      {
        question: "Can I share a reference photo or design?",
        answer:
          "Absolutely. You can share reference images, sketches, or design inspiration through WhatsApp or during a visit to our showroom. Our team can discuss how the design may be adapted to your requirements.",
      },
      {
        question: "How much does custom-made furniture cost?",
        answer:
          "The price depends on the furniture type, dimensions, wood selection, materials, design complexity, and finish. Share your requirements with us to discuss an estimate.",
      },
      {
        question: "How long does it take to make custom furniture?",
        answer:
          "The timeline depends on the design, materials, and scope of work. We will discuss an expected completion schedule after understanding your requirements.",
      },
      {
        question: "Where can I discuss a custom furniture order?",
        answer:
          "Visit Aastha Furniture at Basanti Lane, Dewan Road, Muzaffarpur, Bihar – 842001, or call us to discuss your furniture ideas and requirements.",
      },
    ],
  },
};

export default customFurniture;
