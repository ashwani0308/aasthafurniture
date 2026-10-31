import { furnitureCategories } from "./furniture.ts";

export const navigation = [
  {
    title: "Home",
    url: "/",
  },

  {
    title: "Furniture",
    children: furnitureCategories.map((category) => ({
      title: category.title,
      url: `/furniture/${category.slug}`,
    })),
  },

  {
    title: "Services",
    children: [
      {
        title: "Custom-Made Furniture",
        url: "/service/custom-made-furniture",
      },
      {
        title: "Bulk & Wholesale Furniture",
        url: "/service/bulk-wholesale-furniture",
      },
      {
        title: "Furniture Repair & Restoration",
        url: "/service/furniture-repair-restoration",
      },
    ],
  },

  {
    title: "About",
    url: "/about",
  },

  {
    title: "Contact",
    url: "/contact",
  },
];
