import type { FactoryDirectContent } from "./index";
import type { ServiceHeroContent } from "./services/types";

export const aboutHeroContent: ServiceHeroContent = {
  eyebrow: "A LEGACY OF CRAFTSMANSHIP",
  heading: "Furniture Made with Generations of Care",
  description:
    "Since 1920, our family has brought a lasting love of wood and thoughtful craftsmanship to the furniture we make.",
  image: "/images/hero/slider_image_1_1600.webp",
  primaryButton: { label: "Explore Our Furniture", href: "/furniture/bedroom" },
  secondaryButton: { label: "Contact Us", href: "/contact" },
};

export const aboutTextImageContent: FactoryDirectContent = {
  eyebrow: "OUR STORY",
  heading: "Five generations, one love for wood.",
  description:
    "Aastha Furniture brings together family tradition and practical, considered design. From a single piece for your home to furniture for a complete space, we make each order with care and attention to the details that matter to you.",
  image: {
    src: "/images/hero/three.image.png",
    alt: "Furniture crafted with care by Aastha Furniture",
  },
  features: [
    {
      heading: "A family tradition",
      description:
        "Our furniture-making story began in 1920 and has been carried forward through five generations.",
    },
    {
      heading: "Made with care",
      description:
        "We focus on considered designs, dependable construction, and careful finishing.",
    },
    {
      heading: "Designed around you",
      description:
        "We work with your space, preferences, and requirements to find the right furniture.",
    },
  ],
};
