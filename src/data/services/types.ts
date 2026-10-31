import type { FactoryDirectContent } from "../index";

export interface ServiceHeroContent {
  eyebrow: string;
  heading: string;
  description: string;
  image:
    | string
    | {
        desktop: string;
        tablet: string;
        mobile: string;
      };
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQSection {
  heading: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  faqs: ServiceFAQ[];
}

export interface ServicePageContent {
  slug: string;
  title: string;
  hero: ServiceHeroContent;
  textImageContent: FactoryDirectContent;
  faqSection: ServiceFAQSection;
}
