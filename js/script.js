// ✅ Animate header transition based on scroll
let lastScrollTop = 0;
const navContainer = document.getElementById("floating-nav");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navContainer?.classList.add("opacity-0", "translate-y-full");
  } else {
    navContainer?.classList.remove("opacity-0", "translate-y-full");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ✅ Language toggle logic
const langToggle = document.getElementById("lang-toggle");
const langDropdown = document.getElementById("lang-dropdown");

langToggle?.addEventListener("click", () => {
  langDropdown?.classList.toggle("hidden");
});

// ✅ Active Tab Detection
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll(".nav-tab").forEach(tab => {
  const target = tab.getAttribute("data-page");
  if (target === currentPath) {
    tab.classList.add("tab-active");
    tab.querySelector("span")?.classList.remove("hidden");
    tab.querySelector("svg")?.classList.remove("tab-icon-inactive");
  } else {
    tab.classList.remove("tab-active");
    tab.querySelector("span")?.classList.add("hidden");
    tab.querySelector("svg")?.classList.add("tab-icon-inactive");
  }
});

// Header hide/show on scroll
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const body = document.body;
  if (currentScroll <= 0) return body.classList.remove("scroll-down");

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// Preloader handling
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.classList.add('opacity-0');
  setTimeout(() => {
    preloader?.remove();
  }, 800);
});

// FAQ toggle
document.addEventListener("click", function (e) {
  if (e.target.closest(".faq-question")) {
    const item = e.target.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    answer.classList.toggle("hidden");
    item.classList.toggle("border-gold");
  }
});

// Swiper logic
const testimonialSwiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: { delay: 4000 },
  slidesPerView: 1,
  spaceBetween: 20,
});

const gallerySwiper = new Swiper('.gallery-swiper', {
  loop: true,
  autoplay: { delay: 3000 },
  slidesPerView: 2,
  breakpoints: {
    768: { slidesPerView: 3 },
  },
  spaceBetween: 20,
});

// Header scroll show/hide
let lastScrollY = window.scrollY;
const floatingNav = document.getElementById('floating-nav');
window.addEventListener('scroll', () => {
  if (!floatingNav) return;
  if (window.scrollY < lastScrollY || window.scrollY < 50) {
    floatingNav.classList.remove('opacity-0', '-translate-y-full');
    floatingNav.classList.add('opacity-100', 'translate-y-0');
  } else {
    floatingNav.classList.remove('opacity-100', 'translate-y-0');
    floatingNav.classList.add('opacity-0', '-translate-y-full');
  }
  lastScrollY = window.scrollY;
});
