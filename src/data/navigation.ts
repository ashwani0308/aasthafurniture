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
        title: "Custom Furniture",
        url: "/service/custom-furniture",
      },
      {
        title: "Office Furniture",
        url: "/service/office-furniture",
      },
      {
        title: "Furniture Repair",
        url: "/service/furniture-repair",
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
