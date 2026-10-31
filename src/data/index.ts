export const homepageCategoryCarousel = {
  items: [
    {
      title: "Bedroom Furniture",
      image: "/images/furniture/bedroom.webp",
      href: "/furniture/bedroom",
    },
    {
      title: "Dining Room Furniture",
      image: "/images/furniture/dining-room.webp",
      href: "/furniture/dining-room",
    },
    {
      title: "Doors & Windows",
      image: "/images/furniture/door-and-window.webp",
      href: "/furniture/door-window",
    },
    {
      title: "Living Room Furniture",
      image: "/images/furniture/living-room.webp",
      href: "/furniture/living-room",
    },
    {
      title: "Office Furniture",
      image: "/images/furniture/office-furniture.webp",
      href: "/furniture/office",
    },
    {
      title: "Outdoor Furniture",
      image: "/images/furniture/outdoor-furniture.webp",
      href: "/furniture/outdoor-furniture",
    },
    {
      title: "Pooja Unit",
      image: "/images/furniture/pooja-mandap.webp",
      href: "/furniture/pooja-unit",
    },
    {
      title: "Storage Furniture",
      image: "/images/furniture/storage-furniture.webp",
      href: "/furniture/storage",
    },
  ],
  autoplay: true,
  autoplayDelay: 1500,
  showDots: false,
  loop: true,
} as const;

export const homepageServices = {
  eyebrow: "HOW WE CAN HELP",
  heading: "Our Services",
  subtext:
    "From made-to-measure pieces to bulk orders and restoration, find the right support for your furniture needs.",
  items: [
    {
      title: "Custom-Made Furniture",
      image: "/images/furniture/custom-furniture.jpg",
      href: "/service/custom-made-furniture",
    },
    {
      title: "Bulk & Wholesale Furniture",
      image: "/images/hero/slider_image_4_1600.webp",
      href: "/service/bulk-wholesale-furniture",
    },
    {
      title: "Furniture Repair & Restoration",
      image: "/images/furniture/furniture-restoration.jpg",
      href: "/service/furniture-repair-restoration",
    },
    {
      type: "cta",
      heading: "Contact Us",
      subheading:
        "Have a question or a project in mind? Talk to our team about how we can help.",
      buttonLabel: "Get in Touch",
      href: "/contact",
    },
  ],
} as const;

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
    src: "/images/section_image/why_pay_showroom.png",
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
    image: {
      desktop: "/images/hero/slider_image_1_1600.webp",
      tablet: "/images/hero/slider_image_1_1024.webp",
      mobile: "/images/hero/slider_image_1_640.webp",
    },
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
    image: {
      desktop: "/images/hero/slider_image_2_1600.webp",
      tablet: "/images/hero/slider_image_2_1024.webp",
      mobile: "/images/hero/slider_image_2_640.webp",
    },
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
    image: {
      desktop: "/images/hero/slider_image_3_1600.webp",
      tablet: "/images/hero/slider_image_3_1024.webp",
      mobile: "/images/hero/slider_image_3_640.webp",
    },
    eyebrow: "CUSTOM DESIGNS. PERSONAL TOUCH.",
    heading: "Furniture Made for Your Space.",
    description:
      "We create custom wooden furniture tailored to your space, style, and requirements.",
    primaryButton: {
      label: "Explore Custom Furniture",
      href: "/furniture/bedroom",
    },
    secondaryButton: { label: "Contact Us", href: "/contact" },
  },
  {
    image: {
      desktop: "/images/hero/slider_image_4_1600.webp",
      tablet: "/images/hero/slider_image_4_1024.webp",
      mobile: "/images/hero/slider_image_4_640.webp",
    },
    eyebrow: "FOR DEALERS. BUSINESSES. BULK BUYERS.",
    heading: "Bulk Furniture Orders.",
    description: "Discuss your quantities, designs, and requirements with us.",
    primaryButton: {
      label: "Enquire for Bulk Orders",
      href: "/furniture/bedroom",
    },
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
