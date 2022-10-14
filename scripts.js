// Flicker switch for light/dark
// const switchElement = document.querySelector('.switch')

// switchElement.addEventListener('click', () => {
//   document.body.classList.toggle('dark')
// })


// When the user scrolls down passed the hero banner, make background of header change color
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".header").style.backgroundColor = "#222831";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
}


// Image gallery
const currentImg = document.querySelector('#current-img');
const imageGrid = document.querySelector('.personal-projects__image-grid');
const img = document.querySelectorAll('.personal-projects__image-grid img');
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

imageGrid.addEventListener('click', imgClick);

function imgClick(e) {
  // Reset the opacity
  img.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  currentImg.src = e.target.src;

  // Add fade in class
  currentImg.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => currentImg.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
