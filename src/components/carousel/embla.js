import EmblaCarousel from "embla-carousel";

function initEmbla() {
  document.querySelectorAll(".embla").forEach((emblaNode) => {
    const viewport = emblaNode;

    const container = viewport.querySelector(".embla__container");

    if (!container) return;

    const root = viewport.parentElement;

    const prevBtn = root.querySelector(".embla-prev");
    const nextBtn = root.querySelector(".embla-next");
    const dotsNode = root.querySelector(".embla-dots");

    const embla = EmblaCarousel(viewport, {
      loop: true,
      align: "start",
      duration: 30,
      dragFree: false,
      skipSnaps: false,
    });

    // --------------------------
    // Previous / Next
    // --------------------------

    prevBtn?.addEventListener("click", () => embla.scrollPrev());

    nextBtn?.addEventListener("click", () => embla.scrollNext());

    // --------------------------
    // Dots
    // --------------------------

    const scrollSnaps = embla.scrollSnapList();

    dotsNode.innerHTML = "";

    scrollSnaps.forEach((_, index) => {
      const dot = document.createElement("button");

      dot.className =
        "h-2.5 w-2.5 rounded-full bg-stone-300 transition-all duration-300";

      dot.addEventListener("click", () => embla.scrollTo(index));

      dotsNode.appendChild(dot);
    });

    function updateDots() {
      const dots = dotsNode.querySelectorAll("button");

      dots.forEach((dot, index) => {
        if (index === embla.selectedScrollSnap()) {
          dot.classList.remove("bg-stone-300");
          dot.classList.add(
            "w-8",
            "bg-primary"
          );
        } else {
          dot.classList.remove(
            "w-8",
            "bg-primary"
          );

          dot.classList.add("bg-stone-300");
        }
      });
    }

    embla.on("select", updateDots);
    embla.on("reInit", updateDots);

    updateDots();
  });
}

initEmbla();

document.addEventListener("astro:page-load", initEmbla);