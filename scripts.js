// Freelance section overview vs review toggler variables
const buttonProjectOverviewMgl = document.querySelector(
  ".button--mgl-project-overview"
);
const buttonProjectReviewMgl = document.querySelector(
  ".button--mgl-project-review"
);

const projectOverviewMgl = document.querySelector(
  ".project-overview-images--mgl"
);
const projectReviewMgl = document.querySelector(".project-review--mgl");

// Personal Projects swiper toggler variables
const buttonPolygon = document.querySelector(".button--polygon");
const buttonPersonal = document.querySelector(".button--personal");

const polygonRunwaySwiper = document.querySelector(".polygonRunwaySwiper");
const personalProjectsSwiper = document.querySelector(
  ".personalProjectsSwiper"
);

// Loading spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 3000);

  // Freelance projects - MGL
  buttonProjectOverviewMgl.classList.add("selected");
  buttonProjectReviewMgl.classList.remove("selected");

  projectOverviewMgl.style.display = "inline";
  projectReviewMgl.style.display = "none";

  // 3D swipers
  buttonPolygon.classList.remove("selected");
  buttonPersonal.classList.add("selected");

  polygonRunwaySwiper.style.display = "none";
  personalProjectsSwiper.style.display = "inline";
};
// End of loading spinner

// Navbar link highlight
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
});
// End of navbar link highlight

// Swiper - Polygon Runway
var swiper = new Swiper(".polygonRunwaySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".personalProjectsSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// End of Swiper

// Toggle view MGL Project Overview vs Client Review container swiper
buttonProjectOverviewMgl.addEventListener("click", () => {
  buttonProjectOverviewMgl.classList.add("selected");
  buttonProjectReviewMgl.classList.remove("selected");

  projectOverviewMgl.style.display = "inline";
  projectReviewMgl.style.display = "none";
});

buttonProjectReviewMgl.addEventListener("click", () => {
  buttonProjectOverviewMgl.classList.remove("selected");
  buttonProjectReviewMgl.classList.add("selected");

  projectOverviewMgl.style.display = "none";
  projectReviewMgl.style.display = "inline";
});

// Toggle view Polygon Vs Personal projects swiper
buttonPolygon.addEventListener("click", () => {
  buttonPolygon.classList.add("selected");
  buttonPersonal.classList.remove("selected");

  polygonRunwaySwiper.style.display = "inline";
  personalProjectsSwiper.style.display = "none";
});

buttonPersonal.addEventListener("click", () => {
  buttonPolygon.classList.remove("selected");
  buttonPersonal.classList.add("selected");

  polygonRunwaySwiper.style.display = "none";
  personalProjectsSwiper.style.display = "inline";
});
