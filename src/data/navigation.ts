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
    title: "Gallery",
    url: "/gallery",
  },

  {
    title: "Services",
    children: [
      {
        title: "Custom Furniture",
        url: "/services/custom-furniture",
      },
      {
        title: "Interior Design",
        url: "/services/interior-design",
      },
      {
        title: "Office Furniture",
        url: "/services/office-furniture",
      },
      {
        title: "Furniture Repair",
        url: "/services/furniture-repair",
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
