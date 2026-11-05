import type { CTAImageContent } from "./index";
import type { ServiceHeroContent } from "./services/types";

interface AboutService {
  heading: string;
  description: string;
}

export interface AboutImageTextContent {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  image: {
    src: string;
    alt: string;
  };
  services?: readonly AboutService[];
  closingParagraphs?: readonly string[];
}

export interface AboutTextImageContent {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  image: {
    src: string;
    alt: string;
  };
}

export const aboutHeroContent: ServiceHeroContent = {
  eyebrow: "A LEGACY OF CRAFTSMANSHIP",
  heading: "Furniture Made with Generations of Care",
  description:
    "Since 1970, our family has brought a lasting love of wood and thoughtful craftsmanship to the furniture we make.",
  image: "/images/hero/slider_image_1_1600.webp",
  secondaryButton: {
    label: "Contact Now",
    href: "/contact",
    icon: "email",
  },
};

export const aboutCTAImageContent: CTAImageContent = {
  backgroundImage: "/images/cta/cta-bg.jpg",
  heading: "Have a Furniture Project in Mind?",
  description:
    "Get in touch with our team to discuss custom furniture, retail, or wholesale requirements.",
  secondaryButton: {
    label: "Contact Now",
    href: "/contact",
    icon: "email",
  },
};

export const aboutHeritageContent: AboutImageTextContent = {
  eyebrow: "OUR STORY. OUR HERITAGE. SINCE 1970.",
  heading: "Three Generations of Trust. A Legacy Built with Wood.",
  paragraphs: [
    "The story of Aastha Furniture began in 1970 with our grandfather, Late Sri Ramchandra Sharma, who started his journey in the timber business. With a deep understanding of wood, its quality, and its potential, he laid the foundation of a family business built on experience, dedication, and trust.",
    "His legacy was carried forward by our father, Sri Dinesh Sharma, who gradually expanded the business and took it towards furniture making and wooden craftsmanship. What began as a timber business evolved into a furniture manufacturing journey, bringing together generations of knowledge and hands-on experience.",
    "Today, we, Ashwani Kumar and Abhishek Kumar, proudly carry this legacy forward through Aastha Furniture. With the same values passed down through our family, we are combining traditional woodworking experience with modern designs, improved techniques, and evolving furniture trends.",
    "For us, furniture is more than wood and craftsmanship. It is a family tradition that continues to grow with every generation.",
  ],
  image: {
    src: "/images/section_image/custom-furniture-sec.png",
    alt: "Custom wooden furniture crafted by Aastha Furniture",
  },
};

export const aboutCraftsmanshipContent: AboutTextImageContent = {
  eyebrow: "ROOTED IN TRADITION. BUILT FOR TODAY.",
  heading: "Traditional Craftsmanship Meets Modern Furniture Design.",
  paragraphs: [
    "At Aastha Furniture, we believe great furniture should bring together quality materials, thoughtful design, functionality, and lasting value. With our roots in the timber business and decades of experience in wooden work, we understand the importance of choosing the right wood and crafting furniture with care.",
    "As lifestyles, interior preferences, and home designs evolve, we continuously adapt our approach to meet modern furniture requirements. From timeless wooden designs to contemporary furniture styles, we offer solutions for different spaces, tastes, and budgets.",
    "Our furniture range includes wooden beds, sofa sets, dining tables, chairs, wardrobes, TV units, storage furniture, office furniture, and much more. We also specialize in custom-made furniture, allowing customers to choose designs, dimensions, finishes, and styles according to their specific requirements.",
    "Whether you are furnishing a new home, upgrading your interiors, or looking for made-to-order wooden furniture, our aim is to deliver practical designs with the warmth and character of wood.",
  ],
  image: {
    src: "/images/hero/three.image.png",
    alt: "Wooden furniture combining traditional craftsmanship and modern design",
  },
};

export const aboutManufacturingContent: AboutImageTextContent = {
  eyebrow: "FROM OUR WORKSHOP TO YOUR SPACE.",
  heading: "Your Trusted Destination for Wooden Furniture in Muzaffarpur.",
  paragraphs: [
    "Aastha Furniture brings furniture manufacturing, retail, and wholesale solutions together under one roof. With our own manufacturing experience and family heritage in the wood business, we serve individual customers as well as retailers, dealers, and bulk buyers.",
    "We offer a wide range of wooden furniture for homes, offices, and commercial spaces. From ready-to-buy furniture to custom-designed pieces and bulk furniture orders, we work to understand your requirements and provide suitable solutions.",
  ],
  image: {
    src: "/images/section_image/wholesale-furniture-sec.png",
    alt: "Furniture made and supplied by Aastha Furniture",
  },
  services: [
    {
      heading: "Custom Furniture Manufacturing",
      description:
        "Made-to-order wooden furniture designed around your space, preferences, and requirements.",
    },
    {
      heading: "Retail Furniture",
      description:
        "A wide selection of wooden beds, sofas, dining furniture, wardrobes, storage units, and other home furniture.",
    },
    {
      heading: "Wholesale & Bulk Supply",
      description:
        "Furniture supply solutions for dealers, retailers, resellers, and commercial projects.",
    },
    {
      heading: "Custom Wooden Work",
      description:
        "Furniture and wooden solutions tailored to different residential and commercial needs.",
    },
  ],
  closingParagraphs: [
    "Located at Basanti Lane, Dewan Road, Muzaffarpur, Bihar – 842001, Aastha Furniture continues its family's woodworking journey with a commitment to craftsmanship, evolving designs, and customer satisfaction.",
    "Aastha Furniture – A Legacy Since 1970. Crafted for Generations.",
  ],
};
