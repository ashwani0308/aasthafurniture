import type { ServicePageContent } from "./types";

const customFurniture: ServicePageContent = {
  slug: "custom-made-furniture",
  title: "Custom-Made Furniture",
  hero: {
    eyebrow: "DESIGNED AROUND YOU",
    heading: "Furniture Made for Your Space",
    description:
      "Bring us your ideas, dimensions, and inspiration. We will shape them into furniture made to fit your home and the way you live.",
    image: {
      mobile: "/images/hero/custom_furniture_640.webp",
      tablet: "/images/hero/custom_furniture_1024.webp",
      desktop: "/images/hero/custom_furniture_1600.webp",
    },
    primaryButton: { label: "Discuss Your Project", href: "/contact" },
    secondaryButton: { label: "Call Now", href: "tel:+919999999999" },
  },
  textImageContent: {
    eyebrow: "MADE TO MEASURE",
    heading: "Your idea, made by our hands.",
    description:
      "From a single statement piece to a complete room, our team works with you to select the right proportions, materials, and finish for your space.",
    image: {
      src: "/images/hero/three.image.png",
      alt: "Furniture crafted for a considered home interior",
    },
    features: [
      {
        heading: "A fit for your space",
        description:
          "Share your room dimensions and we will plan furniture around the space you actually have.",
      },
      {
        heading: "Your choice of finish",
        description:
          "Talk through the look, materials, and details that make a piece feel at home.",
      },
      {
        heading: "Built with care",
        description:
          "Our makers carry your design through construction and finishing with attention to detail.",
      },
    ],
  },
  faqSection: {
    heading: "Questions about custom furniture?",
    description:
      "Every project is different. Here are a few things to know before getting started with a made-to-measure piece.",
    primaryButton: { label: "Discuss Your Project", href: "/contact" },
    faqs: [
      {
        question: "How much does custom furniture cost?",
        answer:
          "The cost depends on the design, dimensions, materials, finish, and details you choose. Share your requirements with us and we can discuss a suitable estimate.",
      },
      {
        question: "Can you make furniture to fit my space?",
        answer:
          "Yes. Share your measurements and how you plan to use the space, and we can talk through dimensions and design options for your piece.",
      },
      {
        question: "Can I choose the materials and finish?",
        answer:
          "You can discuss material, colour, and finish preferences with our team. We will help you explore options that work for your design and intended use.",
      },
      {
        question: "How long does a custom furniture order take?",
        answer:
          "Timing varies with the design and scope of the project. We will discuss an expected schedule with you once we understand the requirements.",
      },
    ],
  },
};

export default customFurniture;
