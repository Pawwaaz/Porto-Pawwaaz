const swiper = new Swiper(".portofolio-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

function handleNavLinkClick(event) {
  const currentActiveLink = document.querySelector(".nav-link.active");
  if (currentActiveLink) {
    currentActiveLink.classList.remove("active");
  }

  event.target.classList.add("active");
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", handleNavLinkClick);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
