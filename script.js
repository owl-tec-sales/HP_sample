document.documentElement.classList.add("js");

const revealTargets = document.querySelectorAll(
  ".index-heading, .service-links, .hr-preview, .product-copy, .forms-copy, .forms-preview, .flow-preview, .flow-copy, .section-heading, .demo-card, .closing > *"
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  if (element.matches(".product-copy, .forms-preview, .flow-copy") || index % 4 === 1) {
    element.classList.add("reveal-delay");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -7%" }
);

revealTargets.forEach((element) => observer.observe(element));
