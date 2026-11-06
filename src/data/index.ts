export const homepagePageHead = {
  slug: "home",
  title: "Furniture Shop in Muzaffarpur | Aastha Furniture",
  description:
    "Explore wooden furniture at Aastha Furniture in Muzaffarpur. Discover beds, sofas, dining and office furniture, custom designs and wholesale options. Since 1970.",
} as const;

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
  eyebrow: "DIRECT FROM OUR WORKSHOP. BETTER VALUE.",
  heading: "Quality Wooden Furniture, Direct from the Manufacturer",
  description:
    "At Aastha Furniture, we manufacture and supply wooden furniture directly from our own workshop in Muzaffarpur, Bihar. By connecting customers directly with the manufacturer, we reduce unnecessary middlemen and offer quality craftsmanship, personalised furniture solutions, and better value for homes, businesses, and bulk buyers.",

  image: {
    src: "/images/section_image/why_pay_showroom.webp",
    alt: "Wooden furniture crafted by Aastha Furniture, a furniture manufacturer in Muzaffarpur",
  },

  features: [
    {
      heading: "Made in Our Own Workshop",
      description:
        "We manufacture wooden furniture with care and attention to detail, backed by our family's furniture-making experience since 1970.",
    },
    {
      heading: "Factory-Direct Pricing",
      description:
        "Buy directly from the manufacturer and avoid unnecessary middlemen for better value on your furniture purchase.",
    },
    {
      heading: "Craftsmanship You Can Trust",
      description:
        "From wooden beds and sofa sets to dining tables and custom furniture, every piece receives attention to construction, design, and finishing.",
    },
    {
      heading: "Retail, Wholesale & Bulk Orders",
      description:
        "Whether you are furnishing your home, sourcing furniture for your business, or placing a bulk order, we offer solutions to suit your requirements.",
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
      label: "Read More",
      href: "/about",
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
      label: "Read More",
      href: "/service/custom-made-furniture",
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
      label: "Wholesale & Bulk Furniture",
      href: "/service/bulk-wholesale-furniture",
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
  eyebrow: "QUALITY WOODEN FURNITURE IN MUZAFFARPUR",
  heading: "Find Your Perfect Furniture.",
  description:
    "Explore ready-made wooden furniture, get custom designs, or enquire about wholesale and bulk orders. Quality craftsmanship from Aastha Furniture, since 1970.",
  quoteButton: {
    label: "Enquire Now",
    href: "/contact",
  },
  callButton: {
    label: "Call Now",
    href: "tel:+919310244463",
  },
};

export interface CTAImageContent {
  backgroundImage: string;
  heading: string;
  description: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
    icon?: "phone" | "email";
  };
}

export const homepageCTAImageContent: CTAImageContent = {
  backgroundImage: "/images/cta/cta-bg.jpg",
  heading: "Furniture Made for Every Need.",
  description:
    "Explore ready-made wooden furniture, bring your custom designs to life, or source furniture directly from our workshop at factory-direct value.",
  primaryButton: {
    label: "Explore Custom Furniture",
    href: "/service/custom-made-furniture",
  },
  secondaryButton: {
    label: "Wholesale & Bulk Enquiries",
    href: "/service/bulk-wholesale-furniture",
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
