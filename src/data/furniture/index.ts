import bedroomFurniture from "./bedroom";
import diningRoomFurniture from "./dining_room";
import livingRoomFurniture from "./living_room";

const officeFurniture = {
  slug: "office",
  title: "Office Furniture",
  description:
    "Functional and elegant furniture designed for productive modern workspaces.",
  hero: {
    image: "/images/furniture/office/hero.jpg",
  },
} as const;

const storageFurniture = {
  slug: "storage",
  title: "Storage Furniture",
  description:
    "Smart and stylish storage solutions designed to keep your home organised.",
  hero: {
    image: "/images/furniture/storage/hero.jpg",
  },
} as const;

export const furnitureCategories = [
  livingRoomFurniture,
  bedroomFurniture,
  diningRoomFurniture,
  officeFurniture,
  storageFurniture,
];
