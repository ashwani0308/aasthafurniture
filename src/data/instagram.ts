export const instagramContent = {
  instagramUrl: "https://www.instagram.com/",
  eyebrow: "A glimpse into Woodsy",
  heading: "Follow us on Instagram",
  description: "Ideas and inspiration from our world of furniture.",
  images: Array.from({ length: 9 }, (_, index) => {
    const number = index + 1;

    return {
      src: `/images/instagram/insta-${number}.jpg`,
      alt: `Woodsy furniture inspiration ${number}`,
      ariaLabel: `View Woodsy on Instagram — image ${number}`,
    };
  }),
};
