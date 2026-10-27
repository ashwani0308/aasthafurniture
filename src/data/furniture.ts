export interface FurnitureGalleryImage {
  src: string;
  alt: string;
}

export interface FurnitureCategory {
  slug: string;
  title: string;
  description: string;
  cardImage: string;
  hero: {
    image: string;
  };
  gallerySection?: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  textImageContent?: {
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
  };
  ctaImageContent?: {
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
  };
  gallery: readonly FurnitureGalleryImage[];
}

const furnitureModules = import.meta.glob<{ default: FurnitureCategory }>(
  "./furniture/*.ts",
  { eager: true },
);

export const furnitureCategories = Object.entries(furnitureModules)
  .map(([, module]) => module.default)
  .sort((first, second) => first.title.localeCompare(second.title));

export const furnitureCategoryCards = furnitureCategories.map((category) => ({
  title: category.title,
  image: category.cardImage,
  href: `/furniture/${category.slug}`,
}));
