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
