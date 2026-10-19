export interface CTAImageContent {
  backgroundImage: string;
  heading: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

export const homepageCTAImageContent: CTAImageContent = {
  backgroundImage: "/images/cta/cta-bg.jpg",
  heading: "Browse Furniture Categories",
  description: "Discover handcrafted furniture designed for every room.",
  primaryButton: {
    label: "View Collection",
    href: "/gallery",
  },
  secondaryButton: {
    label: "Call Now",
    href: "tel:+919999999999",
  },
};
