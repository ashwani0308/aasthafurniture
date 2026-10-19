export interface HomepageCtaContent {
  eyebrow: string;
  heading: string;
  description: string;
  quoteButton: {
    label: string;
    href: string;
  };
  callButton: {
    label: string;
    href: string;
  };
}

export const homepageCtaContent: HomepageCtaContent = {
  eyebrow: "Premium Furniture Manufacturer",
  heading: "Your Space. Your Style. Our Craft.",
  description:
    "Explore our furniture collection and talk to us about finding the right pieces for your home or business.",
  quoteButton: {
    label: "Get Free Quote",
    href: "/contact",
  },
  callButton: {
    label: "Call Now",
    href: "tel:+919999999999",
  },
};
