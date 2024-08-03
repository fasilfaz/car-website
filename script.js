const navMenu = document.getElementById("nav-menu"),
  toggleButton = document.getElementById("nav-toggle"),
  closeButton = document.getElementById("nav-close");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (closeButton) {
    closeButton.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const swiperHome = new Swiper('.home__swiper', {
    speed: 1200,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
      },
    },

});

const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add('blur-header') : 
    header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader)

gsap.from('.home__panel-1', {y:-1000, duration:2})
gsap.from('.home__panel-2', {y:1000, duration:2})
gsap.from('.home__image', {x:1000, duration:2})
gsap.from('.home__titles', {y:100, opacity:0, delay:2})
gsap.from('.home__title', {y:100, opacity:0, delay:2.1})