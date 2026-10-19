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
