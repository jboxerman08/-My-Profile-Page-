// const switchElement = document.querySelector('.switch')

// switchElement.addEventListener('click', () => {
//   document.body.classList.toggle('dark')
// })


// When the user scrolls down passed the hero banner, make background of header change color
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.backgroundColor = "#222831";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
}
