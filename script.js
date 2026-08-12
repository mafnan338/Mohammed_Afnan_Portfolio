// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Highlight the active nav link based on scroll position
const sections = document.querySelectorAll("main .section, .hero");
const navAnchors = document.querySelectorAll(".nav-links a");

const setActive = () => {
  let currentId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      currentId = section.id;
    }
  });
  navAnchors.forEach((a) => {
    a.style.color =
      a.getAttribute("href") === `#${currentId}` ? "var(--accent)" : "";
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
