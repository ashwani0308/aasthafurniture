export const categories = [
  {
    title: "Living Room",
    image: "/images/categories/living-room.jpg",
    href: "/furniture/living-room",
  },
  {
    title: "Bedroom",
    image: "/images/categories/bedroom.jpg",
    href: "/furniture/bedroom",
  },
  {
    title: "Dining Room",
    image: "/images/categories/dining-room.jpg",
    href: "/furniture/dining-room",
  },
  {
    title: "Office Furniture",
    image: "/images/categories/office-furniture.jpg",
    href: "/furniture/office-furniture",
  },
  {
    title: "Storage Furniture",
    image: "/images/categories/storage-furniture.jpg",
    href: "/furniture/storage-furniture",
  },
  {
    title: "Door and Window",
    image: "/images/categories/door-and-window.jpg",
    href: "/furniture/door-window",
  },
  {
    title: "Outdoor Furniture",
    image: "/images/categories/outdoor-furniture.jpg",
    href: "/furniture/outdoor-furniture",
  },
  {
    title: "Pooja Unit",
    image: "/images/categories/pooja-mandap.jpg",
    href: "/furniture/pooja-unit",
  },
];

export interface FactoryDirectContent {
  eyebrow: string;
  heading: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  features: readonly {
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

export const homepageHeroSlides = [
  {
    image: "/images/hero/hero-1.jpg",
    eyebrow: "SINCE 1920",
    heading: "Our Family Tradition",
    description: "A love for wood, passed down through five generations.",
    primaryButton: {
      label: "Discover Our Story",
      href: "/about",
    },
    secondaryButton: { label: "Get in Touch", href: "/contact" },
  },
  {
    image: "/images/hero/hero-2.jpg",
    eyebrow: "Factory-direct savings",
    heading: "Luxury Furniture. Less Markup.",
    description: "Exceptional furniture, straight from the source.",
    primaryButton: {
      label: "Discover the Difference",
      href: "/furniture/bedroom",
    },
    secondaryButton: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/hero/hero-3.jpg",
    eyebrow: "Custom furniture",
    heading: "Made for Your Space. Made for You.",
    description: "Your vision, crafted to perfection.",
    primaryButton: { label: "Explore More", href: "/furniture/dining-room" },
    secondaryButton: { label: "Contact Us", href: "/contact" },
  },
];

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

export interface RecentWorkContent {
  eyebrow: string;
  heading: string;
  description: string;
  works: {
    src: string;
    alt: string;
  }[];
  button: {
    label: string;
    href: string;
  };
}

export const homepageRecentWorkContent: RecentWorkContent = {
  eyebrow: "A selection of our projects",
  heading: "Recent works",
  description:
    "Thoughtful spaces, considered details, and furniture made to feel at home.",
  works: Array.from({ length: 12 }, (_, index) => {
    const number = index + 1;

    return {
      src: `/images/gallery/recent/recent-${number}.jpg`,
      alt: `Recent furniture project ${number}`,
    };
  }),
  button: {
    label: "Show all works",
    href: "#",
  },
};
