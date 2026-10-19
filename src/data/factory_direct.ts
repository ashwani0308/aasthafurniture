export interface FactoryDirectContent {
  eyebrow: string;
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: {
    heading: string;
    description: string;
  }[];
}

export const factoryDirectContent: FactoryDirectContent = {
  eyebrow: "FACTORY DIRECT. BETTER VALUE.",
  heading: "Why Pay for the Showroom?",
  description:
    "We manufacture our furniture ourselves. By selling directly, we reduce unnecessary overheads and middlemen — giving you better value without compromising on quality.",
  image: {
    src: "/images/hero/three.image.png",
    alt: "Custom-made furniture showcase",
  },
  features: [
    {
      heading: "Made by Us",
      description: "Furniture manufactured in our own facility.",
    },
    {
      heading: "Factory Direct Pricing",
      description: "Fewer middlemen means better value.",
    },
    {
      heading: "Quality Craftsmanship",
      description: "Built with attention to materials and finishing.",
    },
    {
      heading: "For Homes & Businesses",
      description: "Individual customers and furniture retailers welcome.",
    },
  ],
};
