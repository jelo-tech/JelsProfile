// Mobile navigation, subtle scroll reveals, and small portfolio conveniences.
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    });
  });
}

// Reveal sections as they enter the viewport. Content remains visible if unsupported.
const revealTargets = document.querySelectorAll(
  ".section-index, .section-heading, .about-lead, .about-copy, .skill-card, .project-card, .contact-inner > .eyebrow"
);

if ("IntersectionObserver" in window) {
  revealTargets.forEach((element) => element.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => revealObserver.observe(element));
}

// Automatically update the copyright year.
const yearElement = document.querySelector("#year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Keep placeholder social links from jumping to the top of the page.
// Replace href="#" with real profile URLs when available.
document.querySelectorAll("[data-placeholder-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (link.getAttribute("href") === "#") {
      event.preventDefault();
      alert("Replace this placeholder with Edwin's real profile URL.");
    }
  });
});
