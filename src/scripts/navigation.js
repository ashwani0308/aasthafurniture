// ---------- Elements ----------

const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("mobile-overlay");

const openButton = document.getElementById("mobile-menu-button");
const closeButton = document.getElementById("mobile-close");

// ---------- Open ----------

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");

  overlay.classList.remove("hidden");

  document.body.classList.add("overflow-hidden");
}

// ---------- Close ----------

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");

  overlay.classList.add("hidden");

  document.body.classList.remove("overflow-hidden");
}

// ---------- Events ----------

openButton?.addEventListener("click", openMenu);

closeButton?.addEventListener("click", closeMenu);

overlay?.addEventListener("click", closeMenu);

// ESC Key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// ---------- Accordion ----------

const accordions = document.querySelectorAll(".mobile-accordion");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.target;

    const target = document.getElementById(targetId);

    if (!target) return;

    const icon = button.querySelector("svg");

    if (target.style.display === "block") {
      target.style.display = "none";

      icon?.classList.remove("rotate-180");
    } else {
      target.style.display = "block";

      icon?.classList.add("rotate-180");
    }
  });
});
