// Loading spinner
window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display');
  }, 3000);
}
// End of loading spinner



// Navbar link highlight
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

window.addEventListener('scroll', () => {
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove('change');
      })
      navbarLinks[i].classList.add('change');
    }
  })
})
// End of navbar link highlight



// Swiper
var swiper = new Swiper(".mySwiper", {
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
